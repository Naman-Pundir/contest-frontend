import {redirect} from "next/navigation"

export function handleCode(code, testcase, language){
    console.log(code);
    console.log(testcase);
    console.log(language);

    const value = {output: "Returned from server 2"};
    return value;
}

export function handleLogin(email, password){
    console.log(email);
    console.log(password);

    const res = {
        status: "ok"
    };
    return res;
}

export function handleSignUp(email, password, cpassword){
    console.log(email);
    console.log(password);
    const res = {
        status: "ok"
    };
    if(password !== cpassword){
        res.status = "mismatch";
    }
    return res;
}