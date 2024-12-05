const reloadButton = document.querySelector(".load");
const catContainer = document.getElementById("cat");


function fetchCatFact() {
  reloadButton.textContent = "Loading..."; 

  const req = new XMLHttpRequest();
  req.open("GET", "https://catfact.ninja/fact");
  req.responseType = "json";

  req.onload = () => {
    if (req.status === 200) {
      const fact = req.response;

      
      catContainer.innerHTML = ""; 
      const factCard = document.createElement("div");
      factCard.classList.add("fact");
      factCard.textContent = fact.fact;
      catContainer.appendChild(factCard);

      reloadButton.textContent = "Load New Fact";
    } else {
      console.error("Failed to fetch cat fact.");
      reloadButton.textContent = "Try Again";
    }
  };

  req.onerror = () => {
    console.error("Network error occurred.");
    reloadButton.textContent = "Try Again";
  };

  req.send();
}


reloadButton.addEventListener("click", fetchCatFact);
