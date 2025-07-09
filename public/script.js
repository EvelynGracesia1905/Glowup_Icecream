document.getElementById('contactFrom').addEventListener('sumbit', async function (e) {
    e.preventDefault();

    const form = e.target;
    const data = new URLSearchParams(new FormData(form));

    const response = await fetch('/contect', {
        method: 'POST',
        body: data,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });

    const text = await response.text();
    document.getElementById('responseMsg').textContent = text;
    form.removeEventListener();
});
