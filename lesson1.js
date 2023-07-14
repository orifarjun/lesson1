let count = 0;
let correctCount = 0;
let lesson1 = [
    {
        'heb': 'אני',
        'eng': 'I'
    },
    {
        'heb': 'אתה, את, אתם, אתן',
        'eng': 'you'
    },
    {
        'heb': 'הוא',
        'eng': 'he'
    },
    {
        'heb': 'היא',
        'eng': 'she'
    },
    {
        'heb': 'אנחנו',
        'eng': 'we'
    },
    {
        'heb': 'הם, הן',
        'eng': 'they'
    }
];
function arrange(){
    if (count > 5) {
        document.body.innerHTML = "GAME OVER. you had " + correctCount + " correct answers";
        // document.getElementById("result").innerHTML += "<br> GAME OVER"

        return;
    }
    let wrong1, wrong2, wrong3;
    let correct = Math.floor(Math.random()*lesson1.length);
    document.getElementById("Hebrew").innerHTML = lesson1[correct].heb;
    do{
        wrong1 = Math.floor(Math.random()*lesson1.length);
    }while (wrong1 == correct)

    do{
        wrong2 = Math.floor(Math.random()*lesson1.length);
    }while (wrong2 == correct || wrong2 == wrong1)  

    do{
        wrong3 = Math.floor(Math.random()*lesson1.length);
    }while (wrong3 == correct || wrong3 == wrong1 || wrong3 == wrong2)
    console.log(correct,wrong1,wrong2,wrong3)
    
    let options = [correct, wrong1, wrong2, wrong3];

    let randomlyOrderedOptions = [];
    let randNum;
    while (options.length != 0){
        randNum = Math.floor(Math.random() * options.length);
        randomlyOrderedOptions.push(options[randNum]);
        options.splice(randNum, 1);
    }
    console.log(randomlyOrderedOptions)

    document.getElementById("option1").innerHTML = lesson1[randomlyOrderedOptions[0]].eng;
    document.getElementById("option2").innerHTML = lesson1[randomlyOrderedOptions[1]].eng;
    document.getElementById("option3").innerHTML = lesson1[randomlyOrderedOptions[2]].eng;
    document.getElementById("option4").innerHTML = lesson1[randomlyOrderedOptions[3]].eng;
}

arrange();

let elements = document.getElementsByClassName("option");

for (let i = 0; i < elements.length; i++) {
    elements[i].onclick = function(){
        count++;
        let heb = document.getElementById("Hebrew").innerHTML;
        let eng;
        for(let i = 0; i < lesson1.length; i++){
            if (lesson1[i].heb == heb){
                eng = lesson1[i].eng;
            }
        }
        if (this.innerHTML == eng){
            document.getElementById("result").innerHTML = "great!"
            correctCount++;
        } else {
            document.getElementById("result").innerHTML = "wrong!"
        }
        arrange();
    }
}
