/*these are the cookie functuns that i use(along with the redirection stuff),
 import these through a <script> and <link> tag or the redirect projects won't work*/


function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value || "") + expires + "; path=/";
};

/* Usage
setCookie("username", "maxrocks55", 7); */

function getCookie(name) {
    const nameEQ = encodeURIComponent(name) + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
};

/* Usage
const username = getCookie("username"); */

function eraseCookie(name) {
    document.cookie = encodeURIComponent(name) + "=; Max-Age=-99999999; path=/";  
};

/* Usage
eraseCookie("username"); */

function getasset(assetname) {
    SetCookie("tograb", assetname, 90223)
}