import React from 'react';

function QuizList({ setView, setQuizToTake }) {
    const quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];

    const takeQuiz = (quiz) => {
        setQuizToTake(quiz);
        setView('takeQuiz');
    };

    return (
        <div>
            <h2>Quizzes</h2>
            <button onClick={() => setView('createQuiz')}>Create Quiz</button>
            <ul>
                {quizzes.map((quiz, index) => (
                    <li key={index}>
                        {quiz.title}
                        <button onClick={() => takeQuiz(quiz)}>Take Quiz</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default QuizList;
