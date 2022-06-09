async function newJobHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const techs = document.querySelector('input[name="techs-needed"]').value;
    const budget = document.querySelector('input[name="budget"]').value;
    const title_body = document.querySelector('textarea[name="job-des"]').value;
    const post_url = document.querySelector('input[name="post-url"]').value;

    const response = await fetch('/api/posts', {
        method:'POST',
        body: JSON.stringify({
            title,
            techs,
            budget,
            title_body,
            post_url
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if(response.ok) {
        document.location.replace('/addJob');
    } else {
        alert(response.statusText);
    }
}
document.querySelector('.add-job-form').addEventListener('submit', newJobHandler);