<script>
    import { enhance } from '$app/forms';
</script>

<h1>CRM Test Form</h1>
<p>This form submits data securely to a server-side action.</p>

<form method="POST" use:enhance>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required />
    <br/>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required />
    <br/>
    <button type="submit">Submit</button>
</form>
