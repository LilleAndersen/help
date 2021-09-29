// TODO: sort the guides based on category
fetch("/assets/json/guides.json")
    .then(response=>response.json())
    .then(data=>
        {
            for(const guide of data)
            {
                document.querySelector("#side-bar").innerHTML+=`
                    <a href="${guide.url}">${guide.title}</a>
                `;
            }
        });