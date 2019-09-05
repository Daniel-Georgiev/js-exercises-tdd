module.exports = function(input, formatter){
    return input.map(i => {
        return formatter(i);
    })
}