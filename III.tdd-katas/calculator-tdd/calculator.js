function add(numbers){
    if(numbers === ''){
        return 0;
    }
    let parsedNumbers = [];
    const stringifiedNumbers = numbers;
    const optionalDelimeter = stringifiedNumbers.match((/^\/\/(.*)\n/));
    const delimeter = optionalDelimeter ? optionalDelimeter[1] : new RegExp(/\n|,/);

    if(optionalDelimeter){
        parsedNumbers = stringifiedNumbers.replace(optionalDelimeter[0], '').split(delimeter);

    }else{
        parsedNumbers = stringifiedNumbers.split(delimeter);
    }
    try{
        return parsedNumbers.reduce((acc,i) => {
           
            if(Number(i) < 0){
                throw new Error("negatives not allowed")
            }
            if(i > 1000){
                i = 0;
            }
            return acc + Number(i)
        }, 0)
    }
    
    catch(e){
        if(e.message == "negatives not allowed"){
            throw new Error("negatives not allowed")
        }
    }
}

module.exports = {
    add: add
}