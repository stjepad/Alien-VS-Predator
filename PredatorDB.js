console.log("PredatorDB")

// PREDATOR MOVIE SERIES CALL TO FACTORY FUNCTION
    const makePredatorDB = () => {
        const Predator = createDBFactory("Predator", 1987, "", "Predator Predator Predator Predator Predator Predator")
        const Predator2 = createDBFactory("Predator 2", 1990, "", "Predator Predator Predator Predator Predator Predator")
        const ThePredator = createDBFactory("The Predator", 2018, "", "Predator Predator Predator Predator Predator Predator")
        const Predators = createDBFactory("Predators", 2010, "", "Predator Predator Predator Predator Predator Predator")

        const series = [Predator, Predator2, ThePredator, Predators]
        return series
    }

// // PREDATOR DATABASE.
// predatorDB = [
//     {
//         movie: "Predator",
//         year: 1987,
//         image: "",
//         plotSummary: "Predator Predator Predator Predator Predator Predator",
//     },
//     {
//         movie: "Predator 2",
//         year: 1990,
//         image: "",
//         plotSummary: "Predator Predator Predator Predator Predator Predator",
//     },
//     {
//         movie: "The Predator",
//         year: 2018,
//         image: "",
//         plotSummary: "Predator Predator Predator Predator Predator Predator",
//     },
//     {
//         movie: "Predators",
//         year: 2010,
//         image: "",
//         plotSummary: "Predator Predator Predator Predator Predator Predator",
//     },
// ]

// / TO SAVE TO LOCAL STORAGE.
//  const specific variable name = make function (key, object){
const savePredatorDB = function (localStorageKeyPredatorDB, databaseObjectPredatorDB) {
    /*
        Convert the Object into a string.
    */
//    const stringified specific variable name = JSON.stringify turns it into strings (object from above)
    const stringifiedDatabase1 = JSON.stringify(databaseObjectPredatorDB)

    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
//    localSorage. set this item there (key from arguement in beginning of function, the stringified variable of the database from second line)
    localStorage.setItem(localStorageKeyPredatorDB, stringifiedDatabase1)
}

// call original function for local storage("Give name for function", Variable name for Database up top)
savePredatorDB("Predator Database", makePredatorDB());