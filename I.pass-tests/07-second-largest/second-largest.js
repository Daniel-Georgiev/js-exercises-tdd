module.exports = function(input){
    const sorted = input.sort((a, b) => {
        return a - b
    }).reverse()
    return sorted[1]
}