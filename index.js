// Your code here

var questionsArr = [
    {
        question: '(T/F) Cats sleep around 16 hours a day. ("OK" for true, "Cancel" for false)',
        answer: true
    },{
        question: '(T/F) The hearing of the average cat is at least five times keener than that of a human adult.',
        answer: true
    },{
        question: '(T/F) Cats have 236 bones in their body.',
        answer: false
    },{
        question: '(T/F) Cats are lactose intolerant.',
        answer: true
    },{
        question: '(T/F) Cats have several sweat glands located throughout their bodies.',
        answer: false
    }
    ]
    
    function runQuiz() {
    
        let numCorrect = 0;
    
        for (var i = 0; i < questionsArr.length; i++) {
            let questionObj = questionsArr[i];
            let userResponse = confirm(questionObj.question);
           
            console.log(questionObj);
    
            if (userResponse === questionObj.answer){
                numCorrect++
                console.log(numCorrect);
            }
        }
    
        if (numCorrect == 0) {
            alert("You scored a 0%.")
        }else if (numCorrect == 5) {
            alert("You scored a 100%.")
        }else{
            let score = numCorrect/questionsArr.length*100;
            alert("You scored a " + Math.round(score) + "%.")
        }
    
    }