
// const phoneRegExp = /^[6-9]{1}[0-9]{9}$/;
const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const loginValidation = (userInput) => {
    const { Email, password } = userInput
    const error = {};
    let isError = false;
    if (!Email.match(mailFormat)) {
        error.Email = "Enter valid email";
        isError = true;
    }
    if (!password) {
        error.password = "password is requiered";
        isError = true;

    }
    if (password && !password.match(passwordRegExp)) {
        error.password = "Enter valid password";
        isError = true;
    }
    error.isError = isError;
    return error

}

export const signupValidChecker = (userInput) => {

    const { Name, Age, Email, password, Phone, Gender, Pin,Address } = userInput

    const error = {};
    let isError = false;
    if (!Name) {
        error.Name = "Name is Required";
        isError = true;
    }

    if (!Age) {
        error.Age = " Age is Required";
        isError = true;
    }
    if (typeof (Age) == Number) {
        error.Age = "Enter valid age";
        isError = true;

    }
    if (!Email.match(mailFormat)) {
        error.Email = "Enter valid email";
        isError = true;
    }
    if (!password.match(passwordRegExp)) {
        error.password = "Enter valid password"
        isError = true;
    }
    if (!Phone) {
        error.Phone = "Enter valid phone"
        isError = true;
    }
    if (!Gender) {
        error.Gender = "Enter valid age";
        isError = true;
    }
    if (!Pin) {
        error.Pin = "Enter valid pin";
        isError = true;
    }

    if (!Address) {
        error.Address = "Address is required";
        isError = true;
    }
    error.isError = isError;

    return error

}