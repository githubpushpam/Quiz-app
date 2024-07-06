import React from 'react';

function QuizResult({ setView, result }) {
    return (
        <div>
            <h2>Quiz Result</h2>
            <p>{result.title}</p>
            <p>Correct Answers: {result.correctAnswers} / {result.totalQuestions}</p>
            <button onClick={() => setView('quizList')}>Back to Quizzes</button>
        </div>
    );
}

export default QuizResult;
