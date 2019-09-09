class PasswordVerifier {
    constructor(password){
        this.password = password
    }

    Verify(input){
        if(!input){
            throw new Error('Input cannot be null');
        }
        if(input.length < 8){
            throw new Error('Password is shorter than 8 chars');
        }
        if(!input.match(/([A-Z])/)){
            throw new Error('Password should have atleast one uppercase');
        }
        if(!input.match(/([a-z])/)){
            throw new Error('Password should have atleast one lowercase');
        }
        if(!input.match(/(\d)/)){
            throw new Error('Password should have atleast one digit');
        }
       
    }
}

module.exports = PasswordVerifier