document.getElementById("add_hero").onclick = function () {
  console.log("posting...");

  const myRequest = new Request(
    "https://phpvisa.maxwelltraining.net/router.php",

    {
      method: "post",
      body: "key=012345abcdefghijklmnopqrstuvwxyz&route=add-temp-hero&first_name=Cedric&last_name=Che-Azeh&email=cedric.ngwa@maxwelltechnologiesplc.com&tel=679218757&profession=CEO&city=Douala",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
    }
  );
  fetch(myRequest)
    .then((response) => response.json())
    .then((data) => {
      if ("success" in data) {
        alert("New Hero Added !");
      }
    });
};
