document.getElementById("fetch_heroes").addEventListener("click", function () {
    console.log("fetching...");
    const myRequest = new Request(
      "https://phpvisa.maxwelltraining.net/router.php?key=012345abcdefghijklmnopqrstuvwxyz&route=get-heroes",
      {
        method: "GET",
      }
    );
    fetch(myRequest)
      .then((response) => response.json())
      .then((data) => {
        var heroes = document.getElementById("heroes");
  
        // Clear previous content
        heroes.innerHTML = '';
  
        for (let i = 0; i < data.heroes.length; i++) {
          const list = document.createElement("li");
          list.className = "hero-item"; // Adding a CSS class
          list.innerHTML =
            "<img src='" + data.heroes[i].dp + "' class='hero-image' /><br>" +
            "<strong>First-Name:</strong> " + data.heroes[i].first_name + " " + data.heroes[i].last_name + "<br>" +
            "<strong>Email:</strong> " + data.heroes[i].email + "<br>" +
            "<strong>Tel:</strong> " + data.heroes[i].tel + "<br>" +
            "<strong>Profession:</strong> " + data.heroes[i].profession + "<br>";
          heroes.appendChild(list);
        }
      });
  });