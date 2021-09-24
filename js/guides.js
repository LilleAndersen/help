fetch("/assets/json/guides.json")
    .then(response=>response.json())
    .then(data=>
        {
            for(const question of data)
            {
                document.querySelector("#guide-content").innerHTML+=`
                    <div>
                        <h3>${question.question}</h3>
                        <p>${question.answer}</p>
                    </div>
                `;
            }
        });

function toggleDetails(element) { element.nextElementSibling.style.display = element.nextElementSibling.style.display === "none" ? "initial" : "none"; }