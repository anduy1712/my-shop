var quizData = [
    {
        id: 1,
        question: 'I _____ (be) a student.',
        a: 'Am',
        b: 'Is',
        c: 'are',
        d: 'Be',
        correct: 'a',
    },
    {
        id: 2,
        question: 'My father __________ excuses when I feel like going to the cinema.',
        a: 'make always',
        b: 'make always',
        c: 'always makes',
        d: 'Be',
        correct: 'a',
    }
    ,
    {
        id: 3,
        question: 'She ________ (not, be) six years old.',
        a: 'isn',
        b: 'not is',
        c: 'are not',
        d: 'not are',
        correct: 'c',
    }

];
var currentData = 0;
var submitBtn = document.getElementById('submit');





quizLoad();



function answerSelect(){

    var answerCheck = document.querySelectorAll('.answer');
    console.log(answerCheck)
    answerCheck.forEach(function(item,index){
        if(item.checked)
        {
            console.log(item.value);
            
        }
    });
}
function quizLoad(){
    var a = document.getElementById('a_label');
    var b = document.getElementById('b_label');
    var c = document.getElementById('c_label');
    var d = document.getElementById('d_label');
    var aa = document.getElementById('a_answer');
    var bb = document.getElementById('b_answer');
    var cc = document.getElementById('c_answer');
    var dd = document.getElementById('d_answer');
    
    var question = document.getElementById('question');

    var quiz = quizData[currentData];

    question.innerText = quiz.question;
    a.innerText = quiz.a;
    b.innerText = quiz.b;
    c.innerText = quiz.c;
    d.innerText = quiz.d;

    aa.innerText = quiz.a;
    bb.innerText = quiz.b;
    cc.innerText = quiz.c;
    dd.innerText = quiz.d;
    

}
submitBtn.addEventListener("click",() => {
    // currentData++;
    // quizLoad();
    answerSelect();
});