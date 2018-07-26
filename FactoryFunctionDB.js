console.log("FactoryFunctionDB")

// const createSnackCake = (title, description, amount, topping, flavor, weight) => {
//     const snackCake = {
//         title: title,
//         description: description,
//         amount: amount,
//         topping: topping,
//         flavor: flavor,
//         weight: weight
//     }

//     return snackCake
// }

const createDBFactory = (movie, year, image, plotSummary)=>{
    const series = {
        movie: movie,
        year: year,
        image: image,
        plotSummary: plotSummary
    }

    return series
}
