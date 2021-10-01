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
            console.log("Person " + `${person.name}, ${person.purpose}`);
        }
    }
)

fetch("/assets/json/projects.json")
    .then(response=>response.json())
    .then(data1=>
        {
            //console.log(data1)
            for(const project of data1)
            {
                document.querySelector("#project-cards").innerHTML+=`
                <div class="item-flex">
                    <img alt="imageload failed" class="project-img" src="${project.image}">
                    <i>${project.title}</i>
                    <p>${project.desc}</p>
                    <a id="link" href="${project.link}" target="_blank">GitHub</a>
                </div>
            `;
                console.log("Project " + `${project.title}` + " loaded");
            }
        }
    )