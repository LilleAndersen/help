fetch("/assets/json/technicians.json")
    .then(response=>response.json())
    .then(data=>
    {
        for(const person of data)
        {
            document.querySelector("#technician-cards").innerHTML+=`
                <div class="item-flex">
                    <img alt="imageload failed" class="person-img" src="${person.image}">
                    <i>${person.name}</i>
                    <a id="github-link" href="${person.github}" target="_blank">GitHub</a>
                    <small>${person.purpose}</small>
                </div>
            `;
            console.log(`${person.name}, ${person.purpose}`);
        }
    }
)