let screen= document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenvalue= '';
for(item of buttons){
    item.addEventlistener('click', (e)=>{
        buttontext = e.target.innerText;
        console.log('Button text is ', buttonText);
        if(buttonText=='X'){
            buttonText= '*';
            screen.value += buttonText;
        }
        else if(buttonText=='='){

        }
    })
}