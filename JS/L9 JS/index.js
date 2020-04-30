var button = document.querySelector("body > input[type=button]:nth-child(1)");
button.addEventListener('click', function callback(){
    document.body.style.backgroundColor = 'blue';
});

var button2 = document.querySelector("body > input[type=button]:nth-child(2)");

button2.addEventListener('blur', function callback(){
    document.body.style.backgroundColor = 'red';
});