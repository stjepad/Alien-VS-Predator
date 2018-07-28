console.log("MeoW")
// PULL LOCAL STORAGE AND PUT IT ON THE DOM

const loadDatabaseAlien = function (localStorageKeyAlien) {
    // Get the string version of the database
    const databaseStringAlien = localStorage.getItem(localStorageKeyAlien)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseStringAlien)
  }
  let arrayAlien = loadDatabaseAlien("Alien Database")
//   let arrayCons = loadDatabaseAlien("GeneralProfileCons")

console.log("ALien Database", arrayAlien)
let alienDiv = document.querySelector(".alien-div");
// POST INFORMATION ON DOM THROUGH FOR LOOP
  function addAlien() {

    for (let i = 0; i < arrayAlien.length; i++) {
      // console.log(AlienArguement)
      alienDiv.innerHTML +=
        `<div class="wrapper">
          <div class="alienDetails">
          <img height="240" width="160" class="alienMainPic"src="${arrayAlien[i].image}">
              <h3>${arrayAlien[i].movie}</h3>
              <p>${arrayAlien[i].year}</p>
              <p>${arrayAlien[i].plotSummary}</p>
            </div>
          </div>`
          }}
          // ATTACH INFO TO HTML FILE
          // const container = document.querySelector(".Alien");



          // populateButton.addEventListener("click", function () {
            //   const allCakes = makeAllTheCakes()
            //   populateDB(allCakes)

            // })
            let AlienButton = document.querySelector("#AlienButton")

            AlienButton.addEventListener("click", addAlien)


