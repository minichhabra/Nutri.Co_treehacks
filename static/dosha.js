(function(){
    // Functions
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      //let 
      
        let v=0;
        let p=0;
        let k=0;
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        console.log(currentQuestion.v);
        console.log(userAnswer);
        if(userAnswer === currentQuestion.v){
          // add to the number of correct answers
          v++;
  
          // color the answers green
          //answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else if(userAnswer === currentQuestion.p)
          {
            p++;
          }
        // if answer is wrong or blank
        else{
          // color the answers red
          k++;
          //answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      console.log(v);
      console.log(p);
      console.log(k);
      v=v/myQuestions.length*100;
      p=p/myQuestions.length*100;
      k=k/myQuestions.length*100;
      vata.innerHTML = `Vata ${v}%`;
    
      pitta.innerHTML = `Pitta ${p}%`;
     
       kapha.innerHTML = `Kapha ${k}%`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    // Variables
    const quizContainer = document.getElementById('quiz');
    const vata = document.getElementById('vata');
    const pitta = document.getElementById('pitta');
    const kapha = document.getElementById('kapha');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "What is your body type?",
        answers: {
          a: "Lean and thin",
          b: "Medium built",
          c: "Larger, difficult to lost weight"
        },
        v: "a",
        p: "b",
        k: "c"
      },
      {
        question: "How is your skin type?",
        answers: {
          a: "Dry and rough",
          b: "Oily, smooth and warm",
          c: "Oily, thick and damp"
        },
        v: "a",
        p: "b",
        k: "c"
      },
      {
        question: "What is your hair type?",
        answers: {
          a: "Thin, dry and brittle",
          b: "Oily, medium thickness",
          c: "Thick, oily, wavy and luxurious"
        },
        v: "a",
        p: "b",
        k: "c"
      },
      {
        question: "Eye type?",
        answers: {
          a: "Smaller scanty eyelashes",
          b: "Piercing and intense",
          c: "Larger, calm and thick eyelashes"
        },
        v: "a",
        p: "b",
        k: "c"
      },
      {
        question: "How is your appetite?",
        answers: {
          a: "Irregular and variable",
          b: "Strong to excessive",
          c: "Steady but constant"
        },
        v: "a",
        p: "b",
        k: "c"
      },
    ];
  
    // Kick things off
    buildQuiz();
  
    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // Show the first slide
    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
  