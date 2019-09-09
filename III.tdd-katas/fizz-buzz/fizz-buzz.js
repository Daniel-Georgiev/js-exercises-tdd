module.exports = function(n){
    let output = []
    for(let i = 1; i <= n; i++){
        if(i % 15 === 0){
            output.push('fizzbuzz')
        }
        else if(i % 3 === 0 || i.toString().includes('3')){
            output.push('fizz')
        }else if(i % 5 == 0){
            output.push('buzz')
        }else{
            output.push(i)
        }
    }
    return output.join(', ');
}