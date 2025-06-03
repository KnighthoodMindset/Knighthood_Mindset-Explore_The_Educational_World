function filterTopics() {
  const input = document.getElementById("searchBar").value.toLowerCase();
  const links = document.querySelectorAll("li");

  links.forEach(li => {
    const text = li.textContent.toLowerCase();
    if (text.includes(input)) {
      li.style.display = "";
    } else {
      li.style.display = "none";
    }
  });
}
