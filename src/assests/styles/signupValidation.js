const phoneRegExp = /^[6-9]{1}[0-9]{9}$/;
const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const signupValidChecker=(userInput)=>{

    const {Name,Age,Email,password,Phone,Gender,Pin}=userInput
    // console.log(email);

    const error = {};
    let isError = false ;
    if(!Name){
        error.Name="Enter valid name";
        isError=true;
    }
    if(!Age){
        error.Age="Enter valid age";
        isError=true;
    }
    if(!Email.match(mailFormat)){
        error.Email="Enter valid email";
        isError=true;
    }
    if(!password.match(passwordRegExp)){
        error.password="Enter valid password"
    }
    if(!Phone.match(phoneRegExp)){
        error.Phone="Enter valid phone"
    }
    if(!Gender){
        error.Gender="Enter valid age";
        isError=true;
    }
    if(!Pin){
        error.Pin="Enter valid pin";
        isError=true;
    }
    error.isError = isError;

    return error

}