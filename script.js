async function searchWiki() {
  const query = document.getElementById("search").value;

  if (!query) {
    alert("Please enter a topic");
    return;
  }

  const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${query}&limit=5&namespace=0&format=json&origin=*`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const results = document.getElementById("results");
    results.innerHTML = "";

    data[1].forEach(title => {
      const li = document.createElement("li");
      li.textContent = title;
      results.appendChild(li);
    });

  } catch (error) {
    console.error(error);
    alert("Error fetching data");
  }
}
