// Questions for java

const javaQuestions = [
    {
      correctAnswer: 'To define an anonymous function',
      options: ['To represent an instance of a class', 'To create a new object ', 'To define an anonymous function', 'To declare a constant value'],
      question:
        "What is the purpose of a lambda expression in Java?",
    },
    {
      correctAnswer: 'Multiple inheritance',
      options: [
        'Multiple inheritance',
        'Multithreading',
        'Polymorphism',
        'Encapsulation',
      ],
      question:
        "Which Java feature allows you to implement multiple interfaces in a single class?",
    },
    {
      correctAnswer: 'It indicates that the variables value may change asynchronously.',
      options: [
        'It ensures that the variable is immutable.',
        'It prevents the variable from being accessed by multiple threads simultaneously.',
        'It indicates that the variables value may change asynchronously.',
        'It enforces strict type checking for the variable.',
      ],
      question:
        "In Java, what is the purpose of the volatile keyword when applied to a variable?",
    },
    {
      correctAnswer: 'StringBuilder provides better performance for string concatenation.',
      options: [
        'StringBuilder is more memory-efficient.',
        'StringBuilder is immutable.',
        'StringBuilder allows for in-place modification of strings.',
        'StringBuilder provides better performance for string concatenation.',
      ],
      question: 'What is the primary advantage of using the "StringBuilder" class over the "String" class for manipulating strings?',
    },
    {
      correctAnswer: 'A way to create generic types for use with collections and classes',
      options: [
        'A way to create generic types for use with collections and classes',
        'A programming language feature for creating new data types',
        'A method for dynamically allocating memory at runtime',
        'A feature for defining abstract classes',
      ],
      question:
        "What does the term generics refer to in Java?",
    },
    {
        correctAnswer: 'TreeMap',
        options: ['HashSet', 'TreeMap', 'ArrayList', 'LinkedHashMap'],
        question:
          "Which of the following Java collections ensures that elements are stored in ascending order?",
      },
      {
        correctAnswer: 'It indicates that the field should be excluded from serialization.',
        options: ['It indicates that the field should be excluded from serialization.', 'It specifies that the fields value cannot be changed after initialization.', 'It enforces that the field is thread-safe.', 'It marks the field as a constant.'],
        question:
          "What is the purpose of the transient keyword when applied to a class field in Java?",
      },
      {
        correctAnswer: 'An exception that must be explicitly caught or declared',
        options: ['An exception that occurs at runtime', 'An exception that must be explicitly caught or declared', 'An exception caused by memory allocation errors', 'An exception that is never thrown in practice'],
        question:
          "In Java, what is a checked exception?",
      },
      {
        correctAnswer: 'Singleton',
        options: ['Singleton', 'Factory ', 'Observer', 'Decorator'],
        question:
          "Which design pattern is used to ensure a class has only one instance and provides a global point of access to that instance?",
      },
      {
        correctAnswer: 'It indicates that the class cannot be subclassed.',
        options: ['It indicates that the class cannot be subclassed.', 'It makes all methods in the class final.', 'It prevents the class from being instantiated.', 'It specifies that the class is abstract.'],
        question:
          "What does the final keyword do when applied to a class in Java?",
      },
  ];

//   C Questions
const cQuestions= [
    {
      correctAnswer: 'It indicates that the variables value may change asynchronously.',
      options: ['It specifies that the variable cannot be modified.', 'It ensures that the variable is initialized to zero.', 'It indicates that the variables value may change asynchronously.', 'It enforces strict type checking for the variable.'],
      question:
        "In C, what is the purpose of the volatile keyword when applied to a variable?",
    },
    {
      correctAnswer: 'dynamic',
      options: [
        'auto',
        'register',
        'static',
        'dynamic',
      ],
      question:
        "Which of the following is not a valid storage class specifier in C?",
    },
    {
      correctAnswer: '"calloc" initializes the memory to zero, while "malloc" does not.',
      options: [
        '"malloc" initializes the memory to zero, while "calloc" does not.',
        '"calloc" initializes the memory to zero, while "malloc" does not.',
        'There is no difference between "malloc" and "calloc."',
        '"malloc" and "calloc" cannot be used for memory allocation in C.',
      ],
      question:
        'In C, what is the difference between "malloc" and "calloc" when allocating memory?',
    },
    {
      correctAnswer: 'It specifies that the variable is constant and cannot be modified.',
      options: [
        'It specifies that the variable is constant and cannot be modified.',
        'It enforces that the variable must be initialized when declared.',
        'It allows the variable to have a varying value.',
        'It prevents the variable from being used in arithmetic operations.',
      ],
      question: 'What does the "const" keyword indicate in C when applied to a variable?',
    },
    {
      correctAnswer: 'It specifies that the variable is automatic and will be initialized to zero.',
      options: [
        'It specifies that the variable is automatic and will be initialized to zero.',
        'It indicates that the variable should be stored in the CPU register.',
        'It enforces strict type checking for the variable.',
        'It specifies that the variable is a constant and cannot be modified.',
      ],
      question:
        "In C, what is the purpose of the 'auto' keyword when declaring a variable within a function?",
    },
    {
        correctAnswer: 'To calculate the size of a variable or data type in bytes',
        options: [
          'To calculate the size of an array',
          'To determine the number of elements in an array',
          'To calculate the size of a variable or data type in bytes',
          'To find the largest element in an array',
        ],
        question: 'In C, what is the purpose of the "sizeof" operator?',
      },
      {
        correctAnswer: '"fwrite" is used for binary data, while "fputs" is used for text data.',
        options: [
          '"fwrite" is used for binary data, while "fputs" is used for text data.',
          '"fwrite" is used for text data, while "fputs" is used for binary data.',
          'There is no difference between "fwrite" and "fputs."',
          '"fwrite" and "fputs" cannot be used for file output in C.',
        ],
        question: 'What is the difference between "fwrite" and "fputs" in C when writing to a file?',
      },
      {
        correctAnswer: 'malloc',
        options: [
          'malloc',
          'calloc',
          'realloc',
          'free',
        ],
        question: 'In C, which function is used to dynamically allocate memory for an array of elements?',
      },
      {
        correctAnswer: 'It terminates the loop and continues with the next iteration.',
        options: [
          'It terminates the loop and continues with the next iteration.',
          'It exits the program.',
          'It generates a runtime error.',
          'It skips the current iteration and continues with the next one.',
        ],
        question: 'What does the "break" statement do when used within a loop in C?',
      },
      {
        correctAnswer: 'decimal',
        options: [
          'float',
          'double',
          'long long',
          'decimal',
        ],
        question: 'Which of the following is not a valid data type in C?',
      },
  ];
//dummy questions
const queON= [
    {
      correctAnswer: 'Three ',
      options: ['Two', 'Three ', 'Four', 'Five'],
      question:
        "How many pieces of bun are in a Mcdonald's Big Mac?",
    },
    {
      correctAnswer: 'L. Frank Baum',
      options: [
        'Suzanne Collins',
        'James Fenimore Cooper',
        'L. Frank Baum',
        'Donna Leon',
      ],
      question:
        "Which author wrote 'The Wonderful Wizard of Oz'?",
    },
    {
      correctAnswer: 'Atlanta United',
      options: [
        'Atlanta United',
        'Atlanta Impact',
        'Atlanta Bulls',
        'Atlanta Stars',
      ],
      question:
        'Which of these is a soccer team based in Atlanta?',
    },
    {
      correctAnswer: 'A Nanny',
      options: [
        'A Sow',
        'A Lioness',
        'A Hen',
        'A Nanny',
      ],
      question: 'A female goat is known as what?',
    },
    {
      correctAnswer: 'P. L. Travers',
      options: [
        'J. R. R. Tolkien',
        'P. L. Travers',
        'Lewis Carroll',
        'Enid Blyton',
      ],
      question:
        "Which author wrote 'Mary Poppins'?",
    },
  ];
     
      let score=0;
      let currentQuestion = 0;
       //Accessing all the elements:
       const questionEl = document.getElementById("question");
       const optionEl = document.getElementById("options");
       const scoreEl = document.getElementById("score");
       const nextEl=document.getElementById("next");

//   Showing all the skills
showSKills();
let questions=null;
function showSKills(){
    const skills = ["C", "Java", "Javascript","Mysql"];
    questionEl.textContent="Choose the skill you wish to put yourself to the test with.";
    skills.forEach((skill)=>{
        document.getElementById("next").style.display = "none";
        const btn=document.createElement('button');
        btn.textContent=skill;
        optionEl.appendChild(btn);
        btn.addEventListener("click", () => {
            optionEl.textContent = '';
            
            if(skill=='Java'){
                questions=javaQuestions;
                showQuestion();
            }
            else if(skill=='C'){
            questions=cQuestions;
            showQuestion();
            }
            });
    })
}



    // next
    nextEl.addEventListener('click',nextQuestion);

      function showQuestion(){
        
         // Destructuring the object
       const{correctAnswer, options, question} = questions[currentQuestion];
  
        //Setting question text content
      questionEl.textContent = question; 
      
      const shuffledOptions = shuffleOptions(options);
          //Populating the Options div with the buttons.
          shuffledOptions.forEach((opt) => {
            const btn = document.createElement('button');
            btn.textContent = opt;
            optionEl.appendChild(btn);
            document.getElementById("next").style.display = "block";
        // Event handling on the button:
        btn.addEventListener("click", () => {
            if(opt === correctAnswer){
                score++;
            }
            else{
                score=score-0.25;
            }   
           
        scoreEl.textContent = `Score: ${score}/${questions.length}`;
        nextQuestion();
            });
        });
    }
    function nextQuestion(){
      currentQuestion++;
     optionEl.textContent = '';
      if(currentQuestion>=10){
        questionEl.textContent = 'Quiz Completed!!';
        nextEl.remove();
      } 
      else{
        showQuestion();
      }
  
    }
  
  //Shuffling the Options
  function shuffleOptions(options) {
      for (let i = options.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * i + 1);
        [options[i], options[j]] = [
          options[j],
          options[i],
        ];
      }
      return options;
    }
