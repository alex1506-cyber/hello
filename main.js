fetch("data.json")
.then((response)=>{
   return response.json()
})
.then((data)=>{
    // console.log(data);
    // here calling the  "basics"object directly;
    // this is an abstract method;
    display_info(data.basics);
});

var bodyelement =document.querySelector("#root")

// function definition
function display_info(info){
    // creating a card
    let card = document.createElement("div");
    card.classList.add("card");
    let h1= document.createElement("h1")
    h1.textContent="MY DETAILS";
     card.append(h1);
    let hr =document.createElement("hr");
    card.append(hr)
    let heading = document.createElement("h2");
    heading.textContent=info.name;
    bodyelement.append(heading);
   
    card.append(heading);

    let name = document.createElement("h2");
    name.textContent=info.roll;
    card.append(name);

    let email= document.createElement("a");
    email.textContent=info.email;
    email.href="mailto:"+info.email;
    card.append(email);
    
    
    card.append(document.createElement("br"));



    let mobile=document.createElement("a");
    mobile.href="tel: "+info.mobile;
    mobile.textContent=info.mobile;
    card.append(mobile);

    let b1=document.createElement("br")
    card.append(b1);

    var button = document.createElement("a");
    button.textContent="view Profile:";
    button.classList.add("btn");
    card.append(button);



    bodyelement.append(card);
}

