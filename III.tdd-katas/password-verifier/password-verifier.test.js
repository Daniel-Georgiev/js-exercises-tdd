const PasswordVerifier = require('./password-verifier');

const verifier = new PasswordVerifier();

test('Verify should return an error if it is shorter than 8 chars', function(){
    const input = 'asd';
    
    expect( () => {
        verifier.Verify(input)
    }).toThrow(new Error('Password is shorter than 8 chars'))
})

test('Verify should return an error if the input is null', function(){
    const input = null;
    
    expect( () => {
        verifier.Verify(input)
    }).toThrow(new Error("Input cannot be null"))
})

test("Verify should return an error if the password doesn't have atleast one uppercase", function(){
    const input = "asdasdasdsad";
    
    expect( () => {
        verifier.Verify(input)
    }).toThrow(new Error("Password should have atleast one uppercase"))
})

test("Verify should return an error if the password doesn't have atleast one lowercase", function(){
    const input = "ASDASDASDASD";
    
    expect( () => {
        verifier.Verify(input)
    }).toThrow(new Error("Password should have atleast one lowercase"))
})

test("Verify should return an error if the password doesn't have atleast one digit", function(){
    const input = "ASDASDASDASDa";
    
    expect( () => {
        verifier.Verify(input)
    }).toThrow(new Error("Password should have atleast one digit"))
})
