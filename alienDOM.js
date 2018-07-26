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

// ATTACH INFO TO HTML FILE
const container = document.querySelector(".Alien");

// POST INFORMATION ON DOM THROUGH FOR LOOP
  function addAlien(AlienArguement) {
    for (let i = 0; i < AlienArguement.length; i++) {
      // console.log(AlienArguement)
      container.innerHTML +=
        `<div class="wrapper">
          <div class="alienDetails">
          <img height="209" width="140" class="alienMainPic"src="${AlienArguement[i].image}">
              <h3>${AlienArguement[i].movie}</h3>
              <p>${AlienArguement[i].year}</p>
              ${AlienArguement[i].image}
              <p>${AlienArguement[i].plotSummary}</p>
            </div>
          </div>`
    }
  }
  addAlien(arrayAlien);