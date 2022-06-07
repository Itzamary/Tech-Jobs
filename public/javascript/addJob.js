async function newJobHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="title"]').value;
    const techs = document.querySelector('input[name="techNeeded"]').value;
    const budget = document.querySelector('input[name="budget"]').value;
    const title_body = document.querySelector('textarea[name="description"]').value;
    const contact = document.querySelector('input[name=contact-email"]').value;


 if(title && techNeeded && budget && description && contact) { 
     const response = await fetch('/addJob', {
        method:'POST',
        body: JSON.stringify({
            title,
            techs,
            budget,
            title_body,
            contact
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if(response.ok) {
        document.location.replace('/alljobs');
    } else {
        alert(response.statusText);
    }
 } else {
     alert("Please make sure all fields are complete.")
 }
    
}
document.querySelector('.add-job-form').addEventListener('submit', newJobHandler);