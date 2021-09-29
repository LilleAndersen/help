fetch("/assets/json/faq.json")
    .then(response => response.json())
    .then(data =>
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
    }).then(() =>
    {
        document.querySelectorAll("#questions h3").forEach(function (e, index)
        {
            setTimeout(function ()
            {
                e.style.opacity = "1";

                const next = e.nextElementSibling;
                next.style.width = `${e.offsetWidth - 100}px`;
                next.style.marginBottom = `-${next.offsetHeight}px`;

                e.addEventListener("click", function ()
                {
                    if (next.style.transform === "none")
                    {
                        next.style.transform = "translateY(-100%)";
                        next.style.marginBottom = `-${next.offsetHeight}px`;
                        next.style.opacity = "0";
                    }
                    else
                    {
                        next.style.transform = "none";
                        next.style.marginBottom = "0";
                        next.style.opacity = "1";
                    }
                });
            }, index * 30);
        });
    });