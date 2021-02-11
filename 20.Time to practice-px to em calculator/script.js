// em = required / parent 
var btn = document.querySelector('button');

var calculator = () => {
    var Required = document.getElementById('required').value;
    var Parent = document.getElementById('parent').value;

    if (!Required | !Parent) {
        alert("Please fill up both the fields.")
    } else {
        var convert_em = Required / Parent;
        document.getElementById('result').innerHTML = convert_em;
    }
}

btn.addEventListener('click', calculator);
