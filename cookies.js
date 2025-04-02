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

// Existing functions remain unchanged (setCookie, getCookie, eraseCookie)

function getasset(assetname) {
    // Set the "tograb" cookie with the asset name
    setCookie("tograb", assetname, 90223);

    // Capture the current URL and format it as website/path
    const url = `${window.location.hostname}${window.location.pathname}`;
    console.log(`!yourwebsitegoeshere/[path_to_the_RHTML_folder]/index.html: ${url}`);

    // Read the "assetpath" cookie
    const assetPath = getCookie("assetpath");
    if (assetPath) {
        // Fetch data from the asset path
        fetch(assetPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok: ' + response.statusText);
                }
                return response.text(); // or response.json() if the response is JSON
            })
            .then(data => {
                console.log('Data from assetpath:', data);
                // Process the data as needed
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    } else {
        console.error('Asset path cookie not found');
    }
}
