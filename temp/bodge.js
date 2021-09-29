// Categories: Utilities,


// your mom has a face
// little is cringe
// SOni howni (System Operator for Northern Ireland)
// mrcat, more like will ignore you
// henri moosic man
// you're all mega intelligay


//TODO: this stuff is gonna be responsible for the individual guide html stuff. Good luck soldier
const guide = new URLSearchParams(window.location.search)



fetch("/assets/json/guides.json").then(response=>response.json()).then(data=>{

    const guideinfo =  guide.get("guide-id")

    for(const guide of data) {
        if(guide.id.toString()===guideinfo) {
            document.querySelector("#more-guideinfo").innerHTML=`


            `
        }

    }


})