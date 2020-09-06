// Newspaper list
const newspapers = [
  "https://www.nytimes.com",
  "https://www.washingtonpost.com",
  "http://www.economist.com"
];

//Write-Your-Code-Here
const contentElement = document.getElementById("content");
newspapers.forEach(newspaper => {
  const linkElement = document.createElement("a");
  linkElement.textContent = newspaper;
  linkElement.href = newspaper;
  contentElement.appendChild(linkElement);
  contentElement.appendChild(document.createElement("br"));
})
