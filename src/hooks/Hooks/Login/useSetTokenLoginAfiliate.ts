

import SessionCookie from '../../../config/SessionCookie';

const saveCookie = function(data: string, remember: boolean ){
    if(remember){
        const dias = 7;
        const now = new Date();
        const time = now.getTime();
        const expireTime = time + (1000*60*60*24*(Number(dias)));
        now.setTime(expireTime);
        const responseData = window.btoa(JSON.stringify(data))
        const cookie = SessionCookie.AFFILIATE+responseData+';expires='+now.toString()+';path=/';
        document.cookie = cookie
    }

    const dias = 1;
    const now = new Date();
    const time = now.getTime();
    const expireTime = time + (1000*60*60*24*(Number(dias)));
    now.setTime(expireTime);
    const responseData = window.btoa(JSON.stringify(data))
    const cookie = SessionCookie.AFFILIATE+responseData+';expires='+now.toString()+';path=/';
    document.cookie = cookie
}

export default saveCookie;