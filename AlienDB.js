console.log("AlienDB")

AlienDB = [
    {
        movie: "Prometheus",
        year: "2012",
        image: "./Img/alien/prometheus.jpg",
        plotSummary: "alien alien alien alien alien alien alien alien",
    },
    {
        movie: "Alien: Covenant - Prologue: The Crossing",
        year: 2017,
        image: "./Img/alien/AlienCovenantPrologueTheCrossing.jpg",
        plotSummary: "alien alien alien alien alien alien alien alien",
    },
    {
        movie: "Alien: Covenant - Prologue: Last Supper",
        year: 2017,
        image: "./Img/alien/alien Covenant Prologue Last Supper.jpg",
        plotSummary: "alien alien alien alien alien alien alien alien",
    },
    {
        movie: "Alien: Covenant",
        year: 2017,
        image: "./Img/alien/Alien Covenant.jpg",
        plotSummary: "alien alien alien alien alien alien alien alien",
    },
    {
        movie: "Alien",
        year: 1979,
        image: "./Img/alien/Alien1.jpg",
        plotSummary: "alien alien alien alien alien alien alien alien",
    },
    {
        movie: "Aliens",
        year: 1986,
        image: "./Img/alien/aliens.jpg",
        plotSummary: "alien alien alien alien alien alien alien alien",
    },
    {
        movie: "Alien 3",
        year: 1992,
        image: "./Img/alien/alien3.jpg",
        plotSummary: "alien alien alien alien alien alien alien alien",
    },
    {
        movie: "Alien: Resurrection",
        year: 1997,
        image: "./Img/alien/AlienResurection.jpg",
        plotSummary: "alien alien alien alien alien alien alien alien",
    },

]

// / TO SAVE TO LOCAL STORAGE.
//  const specific variable name = make function (key, object){
    const saveAlienDB = function (localStorageKeyAlienDB, databaseObjectAlienDB) {
        /*
            Convert the Object into a string.
        */
    //    const stringified specific variable name = JSON.stringify turns it into strings (object from above)
        const stringifiedDatabase2 = JSON.stringify(databaseObjectAlienDB)

        /*
            Create a key in local storage, and store the string
            version of your inventory database as the value
        */
    //    localSorage. set this item there (key from arguement in beginning of function, the stringified variable of the database from second line)
        localStorage.setItem(localStorageKeyAlienDB, stringifiedDatabase2)
    }

    // call original function for local storage("Give name for function", Variable name for Database up top)
    saveAlienDB("Alien Database", AlienDB);