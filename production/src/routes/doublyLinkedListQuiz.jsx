import React, { useState, useEffect } from 'react';

const DoublyLinkedListQuiz = () => {
  const [user,setUser] = useState('');
  const [loaded,setLoaded] = useState(false);
  
  const API_URL = '/data-vengers';
  // const API_URL = 'http://localhost:8125'; // Your backend server URL

  const fetchUserData = async () => {
      try {
        const response = await fetch(`${API_URL}/api/user`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        });

        if (response.status === 200) {
          const data = await response.json();
          setUser(data);
          setLoaded(true);
        } else {
          console.error('Error fetching user data');
        }
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    useEffect(() => {
      fetchUserData();
    }, []);

  async function updatePoints() {
      
    const response = await fetch(`${API_URL}/api/gainPoints`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json', //sends as JSON
      },
      //payload
      body: JSON.stringify({ 
        email:user.email,
        pointValue:calculateScore(),
      }),
    })
  
    try{
        const data = await response.json()
        console.log(data)
    } catch {
      console.log("error from the dll_cards page");
        return;
    }
  }
  const initialQuestions = [
    {
      id: 1,
      question: 'What is a doubly linked list?',
      options: [
        'A linear data structure with two links between nodes',
        'An array of elements',
        'A group of connected nodes traversed in one direction',
        'A data type in JavaScript',
      ],
      correctAnswer: 1,
      userAnswer: null
    },
    {
      id: 2,
      question: 'What is the time complexity to insert a node at the beginning of a doubly linked list?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'],
      correctAnswer: 1,
      userAnswer: null
    },
    {
        id: 3,
        question: 'Which ways can a doubly linked list be traversed?',
        options: ['Forward', 'Backward', 'Both forward and backward', 'None of these'],
        correctAnswer: 3,
        userAnswer: null
    },
    {
        id: 4,
        question: 'What characteristic does a doubly linked list have that a singly linked list does not?',
        options: [
            'There is two data sections within a node', 
            'There is no tail node', 
            'A new node cannot be inserted at the front of a list', 
            'Each node contains a pointer to the previous node and a pointer to the next node'],
        correctAnswer: 4,
        userAnswer: null
    },
    {
        id: 5,
        question: 'What is the time complexity for adding a node to the front of a doubly linked list?',
        options: ['O(1)', 'O(n)', 'O(nlogn)', 'O(n^2)'],
        correctAnswer: 1,
        userAnswer: null
    },
    {
        id: 6,
        question: 'What is the time complexity for adding a new node at the end of a doubly linked list?',
        options: ['O(1)', 'O(n)', 'O(nlogn)', 'O(n^2)'],
        correctAnswer: 2,
        userAnswer: null
    },
    {
        id: 7,
        question: 'What does the head node\'s previous pointer point to?',
        options: ['All the way back to the tail node', 'There is no previous node pointer', 'To null', 'None of the above'],
        correctAnswer: 3,
        userAnswer: null
    },
    {
        id: 8,
        question: 'Each node in a doubly linked list comsist of three components.',
        options: ['True', 'False'],
        correctAnswer: 1,
        userAnswer: null
    },
    {
        id: 9,
        question: 'Where can a node be inserted at within a doubly linked list?',
        options: ['Only the back (tail)', 'Front and back', 'In between nodes only', 'Front, back, and in-between nodes'],
        correctAnswer: 4,
        userAnswer: null
    },
    {
        id: 10,
        question: 'Deletion of a node from a list can happen ONLY from the front (i.e., the head) of the list.',
        options: ['True', 'False'],
        correctAnswer: 2,
        userAnswer: null
    }
  ];
  
    const [questions, setQuestions] = useState(initialQuestions);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const handleAnswerSelection = (selectedOption) => {
      if (!isSubmitted) {
        const updatedQuestions = questions.map((q, index) =>
          index === currentQuestionIndex ? { ...q, userAnswer: selectedOption } : q
        );
        setQuestions(updatedQuestions);
      }
    };
  
    const calculateScore = () => {
      let totalScore = 0;
      questions.forEach((q) => {
        if (q.userAnswer === q.correctAnswer) {
          totalScore++;
        }
      });
      return totalScore;
    };
  
    const handleNext = () => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      } else {
        setIsSubmitted(true);
        updatePoints();
      }
    };
  
    const handlePlayAgain = () => {
      setQuestions(initialQuestions);
      setCurrentQuestionIndex(0);
      setIsSubmitted(false);
    };

    return (
      <div id = "quizWrapper">
        <h1 style={{fontFamily:'Slackey', textShadow:'1px 2px 2px yellow'}}>Doubly Linked List Quiz</h1>
        {!isSubmitted && (
          <p>
            Question {currentQuestionIndex + 1} out of {questions.length}
          </p>
        )}
        {isSubmitted && (
          <p>Your Score: {calculateScore()} out of {questions.length}</p>
        )}
  
        {isSubmitted ? (
          <div style={{ marginTop: '20px' }}>
            {questions.map((q, index) => (
              <div key={q.id} style={{ marginBottom: '20px' }}>
                <p style={{ fontWeight: 'bold' }}>{q.question}</p>
                <div>
                  {q.options.map((option, optionIndex) => (
                    <label
                      key={optionIndex}
                      style={{
                        color:
                          q.userAnswer === optionIndex + 1
                            ? q.userAnswer === q.correctAnswer
                              ? 'green'
                              : 'firebrick'
                              : 'black',
                      }}
                    >
                      <input
                        className = "quizRadio"
                        type="radio"
                        name={`question-${q.id}`}
                        value={optionIndex + 1}
                        checked={q.userAnswer === optionIndex + 1}
                        disabled
                      />
                      {option}
                      <br />
                    </label>
                  ))}
                </div>
                <div style={{ marginLeft: '30px', color: 'green' }}>
                  {`Correct Answer: ${q.options[q.correctAnswer - 1]}`}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ marginTop: '20px' }}>
            <p style={{ fontWeight: 'bold' }}>{questions[currentQuestionIndex].question}</p>
            <div>
              {questions[currentQuestionIndex].options.map((option, optionIndex) => (
                <label
                  key={optionIndex}
                  style={{
                    color:
                      questions[currentQuestionIndex].userAnswer === optionIndex + 1
                        ? 'blue'
                        : 'black',
                  }}
                >
                  <input
                    className = "quizRadio"
                    type="radio"
                    name={`question-${questions[currentQuestionIndex].id}`}
                    value={optionIndex + 1}
                    checked={questions[currentQuestionIndex].userAnswer === optionIndex + 1}
                    onChange={() => handleAnswerSelection(optionIndex + 1)}
                    disabled={isSubmitted}
                  />
                  {option}
                  <br />
                </label>
              ))}
            </div>
            <div>
              <button id="nextBtn" onClick={handleNext}>{currentQuestionIndex < questions.length - 1 ? 'Next' : 'Submit'}</button>
            </div>
          </div>
        )}
  
        {isSubmitted && (
          <div>
            <button onClick={handlePlayAgain}>Play Again</button>
          </div>
        )}
      </div>
    );
  };
  
  export default DoublyLinkedListQuiz;