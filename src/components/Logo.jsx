import React from 'react'

const Logo = ({ currentPath = '/', variant = 'default' }) => {
  const getSuffix = () => {
    if (currentPath === '/ai') return 'ai'
    if (currentPath === '/exit') return 'exit'
    return ''
  }

  const suffix = getSuffix()

  const getColors = () => {
    if (variant === 'white') {
      return {
        dot: 'text-white',
        nor: 'text-white',
        i: 'text-teal',
        vane: 'text-white',
        suffixFirst: 'text-white',
        suffixSecond: 'text-teal',
        suffixRest: 'text-white'
      }
    }
    
    return {
      dot: 'text-teal',
      nor: 'text-dark-blue',
      i: 'text-teal',
      vane: 'text-dark-blue',
      suffixFirst: 'text-dark-blue',
      suffixSecond: 'text-teal',
      suffixRest: 'text-dark-blue'
    }
  }

  const colors = getColors()

  return (
    <div className="flex items-center text-xl font-semibold">
      <span className={`${colors.dot} font-semibold mr-1`}>•</span>
      <span className={`${colors.nor} font-semibold`}>nor</span>
      <span className={`${colors.i} font-semibold italic -mx-0.5`}>i</span>
      <span className={`${colors.vane} font-semibold`}>vane</span>
      {suffix && (
        <span className="text-sm ml-1">
          <span className={colors.suffixFirst}>{suffix.charAt(0)}</span>
          {suffix.length > 1 && (
            <span className={`${colors.suffixSecond} italic`}>{suffix.charAt(1)}</span>
          )}
          {suffix.length > 2 && (
            <span className={colors.suffixRest}>{suffix.slice(2)}</span>
          )}
        </span>
      )}
    </div>
  )
}

export default Logo
