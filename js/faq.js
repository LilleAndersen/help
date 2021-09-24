fetch("/assets/json/faq.json")
    .then(response=>response.json())
    .then(data=>
        {
            for(const question of data)
            {
                document.querySelector("#questions").innerHTML+=`
                    <div>
                        <h3>${question.question}</h3>
                        <p>${question.answer}</p>
                    </div>
                `;
            }
        }
    )