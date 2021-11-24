// TODO: sort the guides based on category
const guidenr = new URLSearchParams(window.location.search)

fetch("/assets/json/guides.json")
    .then(response=>response.json())
    .then(data=>
        {
            //Sidebar load from json
            // Categories: Utilities, hey henrik i used arch btw
            for(const guide of data) {
                document.querySelector("#side-bar").innerHTML += `
                        <a href="?g=${guide.id}">${guide.title}</a>
                    `;
            }

            //URL parameter
            const songinfo =  guidenr.get("g")

            //Guide loading
            for(const guide of data)
            {
                if(guide.id.toString()==="home") {
                    document.querySelector("#guide-content").innerHTML = `
                        <h1>Velkommen til våre guidesguides</h1>
                        <p>
                            På denne siden skal vi lære deg lette og avanserte konsepter for at du skal kunne programmere. 
                            Du kan også finne guides for spesifikk programmvare. Om du har ett lite spørsmål, så kan du sjekke ut 
                            <a href="/faq/">FAQ</a>, fordi denne siden kommer til å være mer i dybden. Til å begynne med, så kan du 
                            velge en guide fra menyen til venstre.
                        </p>`
                }
                else if(guide.id.toString()===songinfo) {


                    document.querySelector("#guide-content").innerHTML = `                
                        <h1>Guide for ${guide.title}</h1>
                        <iframe id="iframe" src="${guide.url}"></iframe>
                    `
                }
            }

        })