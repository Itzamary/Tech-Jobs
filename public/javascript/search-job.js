
async function searchJob(event) {
  event.preventDefault();
  const techs = document.querySelector('#jobSearch').value.trim();
  document.location.replace('/job-search/' + techs);


}

document.querySelector(".search-button").addEventListener("click", searchJob);
