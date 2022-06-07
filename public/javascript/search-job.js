
async function searchJob(event) {
  event.preventDefault();
  const techs = document.querySelector('#jobSearch').value.trim();

  if (techs) {
    const response = await fetch("/api/posts/search", {
      method: "POST",
      body: JSON.stringify({
      techs,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/alljobs");
    } else {
      console.log(response, 'bad response')
      alert(response.statusText);
    }
  }


}

document.querySelector(".search-button").addEventListener("click", searchJob);
