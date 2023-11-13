import Cookies from "universal-cookie";

export const setCookie = (name, value) => {    
    let cookieObj = new Cookies();
    let getCookie = cookieObj.get(name);

    if (!getCookie) {
        const date = new Date(new Date().getTime() + 1000 * 3600 * 24 * 7);   

        cookieObj.set(name, value, {
            path: "/",
            expires: date,
            domain: window.location.hostname
        });     
    }
}

export const getCookie = (name) => {
    let cookieObj = new Cookies();
    let getCookie = cookieObj.get(name);

    return getCookie;
}