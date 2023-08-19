import React, { useState, useEffect } from 'react';

const SinglyLinkedListQuiz = () => {
  const [user,setUser] = useState('');
  const [loaded,setLoaded] = useState(false);
  
  const API_URL = "/data-vengers";
  // const API_URL = "http://localhost:8125";

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
      question: 'What is a linked list?',
      options: [
        'A linear data structure',
        'An array of elements',
        'A group of connected nodes',
        'A data type in JavaScript',
      ],
      correctAnswer: 1,
      userAnswer: null,
    },
    {
      id: 2,
      question: 'What is the time complexity to insert a node at the beginning of a singly linked list?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'],
      correctAnswer: 1,
      userAnswer: null,
    },
    {
      id: 3,
      question: 'What is the time complexity to delete a node from the end of a singly linked list?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'],
      correctAnswer: 3,
      userAnswer: null,
    },
    {
      id: 4,
      question: 'What is the space complexity of a singly linked list?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'],
      correctAnswer: 3,
      userAnswer: null,
    },
    {
      id: 5,
      question: 'Which operation is not supported by a singly linked list?',
      options: ['Insertion at the beginning', 'Insertion at the end', 'Deletion at the beginning', 'Deletion at the end'],
      correctAnswer: 2,
      userAnswer: null,
    },
    {
      id: 6,
      question: 'What animal best represents the time complexity to find the middle node of a singly linked list?',
      options: ['Cheetah (Fast)', 'Sloth (Slow)', 'Dolphin (Medium-fast)', 'Turtle (Very Slow)'],
      correctAnswer: 2,
      userAnswer: null,
    },
    {
      id: 7,
      question: 'Imagine a singly linked list as a food chain. What could eat the list in reverse?',
      options: ['A lion (Time complexity: O(1))', 'A bear (Time complexity: O(log n))', 'A snake (Time complexity: O(n))', 'An ant (Time complexity: O(n^2))'],
      correctAnswer: 3,
      userAnswer: null,
    },
    {
      id: 8,
      question: 'What is the space complexity to reverse a singly linked list iteratively?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'],
      correctAnswer: 1,
      userAnswer: null,
    },
    {
      id: 9,
      question: 'What is the space complexity to reverse a singly linked list recursively?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'],
      correctAnswer: 3,
      userAnswer: null,
    },
    {
      id: 10,
      question: 'In a singly linked list, what is the time complexity to delete a given node?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'],
      correctAnswer: 3,
      userAnswer: null,
    },
    {
      id: 11,
      question: 'Imagine each node in a singly linked list as a character in a story. What would be the time complexity to find the character "Hero" if the list has 100 characters?',
      options: ['O(1) - Instantly!', 'O(log n) - It requires some searching', 'O(n) - Need to go through each character', 'O(n^2) - It will take forever!'],
      correctAnswer: 3,
      userAnswer: null,
    },
    {
      id: 12,
      question: 'A group of linked nodes is planning a trip. Each node has its own vehicle with different speeds. What is the best time complexity to determine the fastest vehicle for the trip?',
      options: ['O(1) - Instantly!', 'O(log n) - Comparing vehicles one by one', 'O(n) - Need to check each vehicle speed', 'O(n^2) - It will take forever!'],
      correctAnswer: 2,
      userAnswer: null,
    },
    {
      id: 13,
      question: 'If a singly linked list were a train, what would be the time complexity to count the number of train cars (nodes) in the list?',
      options: ['O(1) - It has a count of train cars', 'O(log n) - Need to count them one by one', 'O(n) - Counting each train car along the way', 'O(n^2) - It will take forever!'],
      correctAnswer: 3,
      userAnswer: null,
    },
    {
      id: 14,
      question: 'What is the time complexity to determine if a singly linked list is circular?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'],
      correctAnswer: 1,
      userAnswer: null,
    },
    {
      id: 15,
      question: 'What is the time complexity to find the intersection point of two singly linked lists?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'],
      correctAnswer: 3,
      userAnswer: null,
    },
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
        <h1 style={{fontFamily:'Slackey', textShadow:'1px 2px 2px yellow'}}>Singly Linked List Quiz</h1>
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
  
  export default SinglyLinkedListQuiz;
  