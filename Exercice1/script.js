var body = document.querySelector('body');
var button = document.querySelector('button');
fetch('becode.json')
    .then(response => response.json())
    .then(data => {
        button.addEventListener ('click', ()=> {
                const ul=document.createElement('ul');
                data.forEach(item => {
                    const li=document.createElement('li');
                    li.innerHTML=`${item}`;
                    ul.appendChild(li);
                });
            body.appendChild(ul);
  }) ; 
});

