//////////////////////////////
//Exercise 2
//Make a new page with a text input and a button. When the button is clicked, a fetch query is sent to the agify API with the name entered in the input. When the request is finished display the result in a new div on the page. Keep the the past requests on the page by creating a new div each time you make an API call.
////////////////////////////////////////
/*
var body = document.querySelector('body');
var button = document.querySelector('button');
var input=document.querySelector('input');
        button.addEventListener ('click', ()=> {
            const fetchName = name => fetch('https://api.agify.io/?name='+name+"&country_id"+country)
            fetchName(input.value)
            .then(response => response.json().catch(console.error))
            .then(json => {
                var country=document.getElementById('pays').value;

                let name=json.name;
                console.log(name)
                let age=json.age;
                console.log(age)
                let count=json.count;
                console.log(count)
                let pays=json.country_id;
                console.log(pays)
                let div=document.createElement('div')
            body.appendChild(div)
            div.innerHTML=("for the name : "+name+" , the average age is "+age +" and there are "+count+" people with the same name."+pays)
            })

        }) ;
*/
const btn = document.getElementById("btn");
const body = document.querySelector("body");

const fetchAndLog = async () => {
    var name = document.getElementById("txtname").value;
    var country = document.getElementById("pays").value;
    console.log(country)
    const response = await fetch('https://api.agify.io?name='+name+'&country_id='+country);
    const json = await response.json().catch(console.error);


    const list = document.createElement("ul");
    
    document.querySelector('.ligen').appendChild(list);

        var item = document.createElement('li');
        item.appendChild(document.createTextNode("your name is " + json.name + " the avg age of "+ json.name +" is "+ json.age +"years old and your are "+ json.count +" on " + json.country_id));
        list.appendChild(item);
}

btn.addEventListener('click', fetchAndLog);
