const optionObj = {
    category: `Food & Drink`,
    id: `qa-1`,
    correctAnswer: `Three`,
    options: [`Two`, `Three`, `Four`, `Five`],
    Question: "How many pieces of bun are in a Mcdonald's Big Mac?",
};

let Score = 0;

const {correctAnswer,options,Question} = optionObj;

// Accessing all the Element
const questionEle = document.querySelector('#Question');

const optionEle = document.querySelector('#options');

const scoreEle = document.querySelector('#score');

// Manupulating the DOM

questionEle.textContent = Question;

const suffloption = shufflleOptions(options);
// populating the Options div with the buttons 
suffloption.forEach((opt) =>{
    // creating button and append to the option div
    const btn = document.createElement('button');
    btn.textContent = opt;
    optionEle.appendChild(btn);

    // Event handling on button
    btn.addEventListener('click', ()=>{
        if(opt === correctAnswer){
            Score++;
        }else{
            Score = Score-0.25;
        }
        scoreEle.textContent = `Score: ${Score}`;
        questionEle.textContent = "Quiz Completed !!";
        optionEle.textContent = '';
    });
});

//shuffling the options

function shufflleOptions(options){
    for(let i=options.length-1; i>=0; i--){
        const j=Math.floor(Math.random()*i+1);
        [options[i],options[j]]=[options[j],options[i]];
    }
    return options;
}

