function highlightCard(selector)
{
    var element = document.querySelector(selector);
    element.classList.toggle("card-highlight");
}

function checkKeyboardCode()
{
    document.addEventListener('keydown', (event) =>{
        var name = event.key;
        var code = event.code;
        //Alert the key name and the key code on keydown
        alert(`Tecla pressionada ${name} \r\n Key code: ${code}`);
    }, false);
}

function addKeyboardListeners()
{
    document.addEventListener('keydown', (event)=> {

        var ingresso1 = document.getElementById('quinta');
        var ingresso2 = document.getElementById('sexta');
        var ingresso3 = document.getElementById('sabado');
        var ingresso4 = document.getElementById('domingo');

        var code = event.code;
        if(code == 'Digit1') {
            ingresso1.classList.toggle('card-highlight');
            ingresso2.classList.remove('card-highlight');
            ingresso3.classList.remove('card-highlight');
            ingresso4.classList.remove('card-highlight');
        }

        if(code == 'Digit2') {
            ingresso1.classList.remove('card-highlight');
            ingresso2.classList.toggle('card-highlight');
            ingresso3.classList.remove('card-highlight');
            ingresso4.classList.remove('card-highlight');
        }

        if(code == 'Digit3') {
            ingresso1.classList.remove('card-highlight');
            ingresso2.classList.remove('card-highlight');
            ingresso3.classList.toggle('card-highlight');
            ingresso4.classList.remove('card-highlight');
        }

        if(code == 'Digit4') {
            ingresso1.classList.remove('card-highlight');
            ingresso2.classList.remove('card-highlight');
            ingresso3.classList.remove('card-highlight');
            ingresso4.classList.toggle('card-highlight');
        }
    }, false);
}

addKeyboardListeners();