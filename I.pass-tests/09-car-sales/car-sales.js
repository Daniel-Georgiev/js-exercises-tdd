module.exports = function(input){
    let total = {}
    input.forEach(element => {
        if(total[element.make]){
            total[element.make] += element.price
        }else{
            total[element.make] = element.price
        }
    });
    return total;
}