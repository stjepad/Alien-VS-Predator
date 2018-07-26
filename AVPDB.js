console.log("AVPDB")
// AVP DATABASE.
// It is an array of objects.
AVPDB = [
    {
        movie: "AVP: Alien vs. Predator",
        year: 2004,
        image: "",
        plotSummary: "AVP AVP AVP AVP AVP AVP AVP AVP AVP AVP AVP AVP ",
    },
    {
        movie: "Alien vs. Predator: Requiem",
        year: 2007,
        image: "",
        plotSummary: "AVP AVP AVP AVP AVP AVP AVP AVP AVP AVP AVP AVP ",
    },
]

// TO SAVE TO LOCAL STORAGE.
//  const specific variable name = make function (key, object){
const saveAVPDB = function (localStorageKeyAVPDB, databaseObjectAVPDB) {
    /*
        Convert the Object into a string.
    */
//    const stringified specific variable name = JSON.stringify turns it into strings (object from above)
    const stringifiedDatabase0 = JSON.stringify(databaseObjectAVPDB)

    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
//    localSorage. set this item there (key from arguement in beginning of function, the stringified variable of the database from second line)
    localStorage.setItem(localStorageKeyAVPDB, stringifiedDatabase0)
}

// call original function for local storage("Give name for function", Variable name for Database up top)
saveAVPDB("AVP Database", AVPDB);