import React, { useState } from 'react';

function TakeQuiz({ setView, quiz, setQuizResult }) {
    const [answers, setAnswers] = useState(Array(quiz.questions.length).fill(''));

    const handleAnswerChange = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };

    const submitQuiz = () => {
        const correctAnswers = quiz.questions.filter((q, i) => q.correct === answers[i]).length;
        const result = {
            title: quiz.title,
            correctAnswers,
            totalQuestions: quiz.questions.length,
        };
        setQuizResult(result);
        setView('quizResult');
    };

    return (
        <div>
            <h2>{quiz.title}</h2>
            {quiz.questions.map((q, index) => (
                <div key={index}>
                    <p>{q.question}</p>
                    {q.options.map((option, i) => (
                        <div key={i}>
                            <input
                                type="radio"
                                name={`question-${index}`}
                                value={option}
                                onChange={() => handleAnswerChange(index, option)}
                            />
                            {option}
                        </div>
                    ))}
                </div>
            ))}
            <button onClick={submitQuiz}>Submit Quiz</button>
            <button onClick={() => setView('quizList')}>Cancel</button>
        </div>
    );
}

export default TakeQuiz;
