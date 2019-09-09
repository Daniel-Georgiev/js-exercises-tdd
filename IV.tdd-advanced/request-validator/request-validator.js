module.exports = function(input){
    const methods = [
        'GET',
        'POST',
        'DELETE',
        'CONNECT'
    ]
    const versions = [
        'HTTP/0.9',
        'HTTP/1.0',
        'HTTP/1.1',
        'HTTP/2.0'
    ]

    const specialChars = [
        '<',
        '>',
        "\\",
        '&',
        "'",
        '"'
    ]

    const validateUri = (uri) => {
        if(uri.match(/^([a-z\.\*])*/g)[0] !== ''){
            console.log(uri.match(/^([a-z\.\*])*/))
            return true;
        }
        if(uri.match(/[<>\\&'"]*/g)){
            return false
        }
    }

    if(input){
        const isUriValid = validateUri(input.uri);
        console.log(input.uri, isUriValid)

        if(!input.method || !methods.includes(input.method)){
            throw new Error('Invalid request header: Invalid Method')
        }
        if(!input.uri || !isUriValid){
            throw new Error('Invalid request header: Invalid Uri')
        }
        if(!input.version || !versions.includes(input.version)){
            throw new Error('Invalid request header: Invalid Version')
        }

        return input;
    }
}