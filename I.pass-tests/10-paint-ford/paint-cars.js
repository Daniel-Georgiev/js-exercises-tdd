module.exports = function(input, color){
    const newInput = [...input];
    newInput[0].colour = color
    return newInput
}