const escapeHtml = (text = '') =>
  text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const formatInlineMarkdown = (text = '') => {
  let formatted = text;

  formatted = formatted.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
  formatted = formatted.replace(/___(.+?)___/g, '<strong><em>$1</em></strong>');
  formatted = formatted.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-dark-blue">$1</strong>');
  formatted = formatted.replace(/__(.+?)__/g, '<strong class="font-semibold text-dark-blue">$1</strong>');
  formatted = formatted.replace(/\*(.+?)\*/g, '<em class="italic">$1</em>');
  formatted = formatted.replace(/_(.+?)_/g, '<em class="italic">$1</em>');
  formatted = formatted.replace(/`([^`]+)`/g, '<code class="bg-gray-100 rounded px-1 py-0.5 text-sm font-mono text-dark-blue">$1</code>');
  formatted = formatted.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-teal hover:text-teal/80 underline">$1</a>');

  return formatted;
};

export const renderMarkdown = (markdown = '') => {
  if (!markdown.trim()) {
    return '';
  }

  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const html = [];
  let inUl = false;
  let inOl = false;
  let inCodeBlock = false;
  let codeBuffer = [];
  let blockquoteBuffer = [];

  const closeList = () => {
    if (inUl) {
      html.push('</ul>');
      inUl = false;
    }
    if (inOl) {
      html.push('</ol>');
      inOl = false;
    }
  };

  const closeBlockquote = () => {
    if (blockquoteBuffer.length) {
      html.push(`<blockquote class="border-l-4 border-teal bg-gray-50 p-6 my-8 italic text-gray-600">${blockquoteBuffer.join('')}</blockquote>`);
      blockquoteBuffer = [];
    }
  };

  const flushCodeBlock = () => {
    if (codeBuffer.length) {
      const codeContent = codeBuffer.join('\n');
      html.push(`<pre class="bg-gray-900 text-gray-100 rounded-xl p-4 overflow-x-auto my-6"><code>${codeContent}</code></pre>`);
      codeBuffer = [];
    }
  };

  lines.forEach((rawLine, index) => {
    const line = rawLine.trimEnd();

    if (line.startsWith('```')) {
      if (inCodeBlock) {
        flushCodeBlock();
        inCodeBlock = false;
      } else {
        closeList();
        closeBlockquote();
        inCodeBlock = true;
        codeBuffer = [];
      }
      return;
    }

    if (inCodeBlock) {
      codeBuffer.push(escapeHtml(rawLine));
      return;
    }

    if (!line.trim()) {
      closeList();
      closeBlockquote();
      html.push('<div class="h-6"></div>');
      return;
    }

    const imageMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (imageMatch) {
      closeList();
      closeBlockquote();
      const [, altText, imageUrl] = imageMatch;
      const safeAlt = escapeHtml(altText);
      const safeUrl = escapeHtml(imageUrl);
      html.push(`
        <figure class="my-8">
          <img src="${safeUrl}" alt="${safeAlt}" class="w-full rounded-2xl shadow-lg object-cover" onerror="this.src='https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop';" />
          ${safeAlt ? `<figcaption class="text-sm text-medium-grey mt-3 text-center">${safeAlt}</figcaption>` : ''}
        </figure>
      `);
      return;
    }

    if (line.startsWith('>')) {
      closeList();
      const quoteLine = formatInlineMarkdown(escapeHtml(line.replace(/^>\s?/, '')));
      blockquoteBuffer.push(`<p class="mb-2">${quoteLine}</p>`);
      if (index === lines.length - 1) {
        closeBlockquote();
      }
      return;
    }

    closeBlockquote();

    const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
    if (headingMatch) {
      closeList();
      const [, hashes, headingText] = headingMatch;
      const level = hashes.length;
      const safeHeading = formatInlineMarkdown(escapeHtml(headingText.trim()))
        .replace(/&amp;lt;br \/&amp;gt;/g, '<br />');
      const headingClasses = {
        1: 'text-3xl md:text-4xl font-bold text-dark-blue mb-6 mt-8',
        2: 'text-2xl md:text-3xl font-bold text-dark-blue mb-5 mt-8',
        3: 'text-xl md:text-2xl font-semibold text-dark-blue mb-4 mt-6',
        4: 'text-lg font-semibold text-dark-blue mb-3 mt-6',
        5: 'text-base font-semibold text-dark-blue mb-2 mt-4 uppercase tracking-wide',
        6: 'text-sm font-semibold text-dark-blue mb-2 mt-4 uppercase tracking-widest'
      }[level];
      html.push(`<h${level} class="${headingClasses}">${safeHeading}</h${level}>`);
      return;
    }

    const orderedMatch = line.match(/^\d+\.\s+(.*)$/);
    if (orderedMatch) {
      const item = formatInlineMarkdown(escapeHtml(orderedMatch[1].trim()));
      if (!inOl) {
        closeList();
        html.push('<ol class="mb-6 space-y-2 list-decimal list-inside">');
        inOl = true;
      }
      html.push(`<li>${item}</li>`);
      return;
    }

    const unorderedMatch = line.match(/^[-*+]\s+(.*)$/);
    if (unorderedMatch) {
      const item = formatInlineMarkdown(escapeHtml(unorderedMatch[1].trim()));
      if (!inUl) {
        closeList();
        html.push('<ul class="mb-6 space-y-2">');
        inUl = true;
      }
      html.push(`<li class="ml-4 relative before:content-[\'•\'] before:absolute before:-left-4 before:text-teal before:font-bold">${item}</li>`);
      return;
    }

    closeList();

    const horizontalRuleMatch = line.match(/^(-{3,}|\*{3,}|_{3,})$/);
    if (horizontalRuleMatch) {
      html.push('<hr class="my-10 border-gray-200" />');
      return;
    }

    const paragraphContent = formatInlineMarkdown(escapeHtml(line.trim()));
    html.push(`<p class="mb-4 leading-relaxed text-gray-700">${paragraphContent}</p>`);
  });

  closeList();
  closeBlockquote();
  flushCodeBlock();

  return html.join('\n');
};

export const estimateReadTime = (text = '') => {
  const words = text
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean);

  const minutes = Math.max(1, Math.ceil(words.length / 200));
  return `${minutes} min read`;
};
