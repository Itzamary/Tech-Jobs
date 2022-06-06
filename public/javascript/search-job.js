async function searchJob(event) {
  const jobSearch = document.querySelector('input[name="jobSearch"]');

  const response = await fetch("api/jobs", {
    method: "GET",
    body: JSON.stringify({
      jobSearch,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document.querySelector("search-job").addEventListener("click", searchJob);
