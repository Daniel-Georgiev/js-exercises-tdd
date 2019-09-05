// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
module.exports = function(input){
    let filteredInput =[]  
    input.map(i => {
        if(typeof i === 'number'){
            filteredInput.push(i)
        }
    })
    console.log(filteredInput)
    const inputSum = filteredInput.reduce((acc, item) => acc + item, 0);
    return inputSum / filteredInput.length
}