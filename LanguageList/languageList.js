fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/languages.txt")
    .then(response => response.text())
    .then(input => {
        let languages = input.split(";");
        const langListElement = document.getElementById("languageList");
        languages.forEach(language => {
            let addOn = document.createElement("li");
            addOn.textContent = language;
            langListElement.appendChild(addOn);
        })
    })
    .catch(err => {
        console.error(err.message);
    })
