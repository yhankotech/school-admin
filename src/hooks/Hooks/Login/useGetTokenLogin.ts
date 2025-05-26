
import SessionCookie  from '../../../config/SessionCookie';


const getCookie = function () {
    const cookieString = document.cookie;

    // Primeiro tenta pegar o cookie do cliente
    let cookieItem = cookieString.split(";").find(i => i.trim().startsWith(SessionCookie.CLIENT));
    let loginValue = cookieItem 
        ? cookieItem.split(SessionCookie.CLIENT)[1] 
        : null;

    // Se não achou do cliente, tenta o do afiliado
    if (!loginValue) {
        cookieItem = cookieString.split(";").find(i => i.trim().startsWith(SessionCookie.AFFILIATE));
        loginValue = cookieItem 
            ? cookieItem.split(SessionCookie.AFFILIATE)[1] 
            : "{}";
    }

    if (loginValue === "{}") return JSON.parse(loginValue);

    try {
        const decoded = window.atob(loginValue);
        return JSON.parse(decoded);
    } catch (error) {
        console.error("Erro ao decodificar o cookie:", error);
        return {};
    }
};

export default getCookie;



/** 
const getCookie = function () {
    const cookieString = document.cookie;
    const cookieItem = cookieString.split(";").find(i => i.trim().startsWith(SessionCookie.CLIENT));

    const loginValue = cookieItem 
        ? cookieItem.split(SessionCookie.CLIENT)[1] 
        : "{}";

    if (loginValue === "{}") return JSON.parse(loginValue);
    else {
        const xxx = window.atob(loginValue);
        return JSON.parse(xxx);
    }
}

export default getCookie;
*/
/*
const getCookie = function(){

    const loginValue = document.cookie.split(";").find(i => i.includes(SessionCookie.CLIENT)) ? document.cookie.split(";").find(i => i.includes(SessionCookie.CLIENT)).split(SessionCookie.CLIENT)[1] : "{}"


    if(loginValue === "{}") return JSON.parse(loginValue)
    else {
        const xxx = window.atob(loginValue)
        return JSON.parse(xxx)
    }

}
*/