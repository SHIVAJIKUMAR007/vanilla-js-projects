// challange 1 js code
function clickme(){
    var yearOfBirth = prompt('what is your year of birth?');
    if (yearOfBirth < 2020 && yearOfBirth > 1900) {
        var ageInDay = (2020 - yearOfBirth )* 365;
        document.getElementById('ageInDays').innerHTML = '<h1> Your are ' + ageInDay + ' days old. </h1>';
    }
    else if(isNaN(yearOfBirth)){
        alert('write a year honey')
        document.getElementById('ageInDays').innerHTML = '<h1>  </h1>';
    }else{
        alert('write age correctly')
        document.getElementById('ageInDays').innerHTML = '<h1>  </h1>';
    }

}

function reset(){
    document.getElementById('ageInDays').innerHTML = '<h1>  </h1>';
}

// chalange 2 js code

function gencat(){
    var image = document.createElement('img');
    var div = document.getElementById('cat-div');
    console.log(div)
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    image.style = "padding-top : 10px; padding-bottom: 10px;";
    div.append(image);

    let div2 = document.createElement('div')
    div2.setAttribute('class', 'car')

    div.append(div2)
}