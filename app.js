
    const mobilePhones = [
        { model: "Phone A", company: "Samsung", price: 500, camera: 12 },
        { model: "Phone B", company: "Apple", price: 700, camera: 16 },
      
    ];

    const searchOption = document.getElementById("searchOption");
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const resultsDiv = document.getElementById("results");

    searchButton.addEventListener("click", () => {
        const selectedOption = searchOption.value;
        const inputValue = searchInput.value.toLowerCase();
        
        const filteredPhones = mobilePhones.filter(phone => {
            const value = phone[selectedOption].toString().toLowerCase();
            return value.includes(inputValue);
        });

        displayResults(filteredPhones);
    });

    function displayResults(phones) {
        resultsDiv.innerHTML = "";
        if (phones.length === 0) {
            resultsDiv.textContent = "No results found.";
        } else {
            phones.forEach(phone => {
                const phoneInfo = document.createElement("p");
                phoneInfo.textContent = `Model: ${phone.model}, Company: ${phone.company}, Price: $${phone.price}, Camera: ${phone.camera}MP`;
                resultsDiv.appendChild(phoneInfo);
            });
        }
    }