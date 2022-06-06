async function newJobHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="title"]').value;
    const techNeeded = document.querySelector('input[name="techNeeded"]').value;
    const budget = document.querySelector('input[name="budget"]').value;
    const description = document.querySelector('textarea[name="description"]').value;
    const contact = document.querySelector('input[name=contact-email"]').value;

    const response = await fetch('/api/posts', {
        method:'POST',
        body: JSON.stringify({
            title,
            techNeeded,
            budget,
            description,
            contact
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if(response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}
document.querySelector('.new-post-form').addEventListener('submit', newJobHandler);