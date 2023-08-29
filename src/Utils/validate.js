

export const checkValidate = (name, email, password) => {

    if(name){
        const isValidName = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(name);
       return ( !isValidName ? "Name is Invalid" : null);
    }

    const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

    const isPasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);


    if(!isValidEmail) return "email is invalid";

    if(!isPasswordValid) return " Password is invalid";

    return null;

}