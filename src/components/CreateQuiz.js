import React, { useState } from 'react';

function CreateQuiz({ setView }) {
    const [title, setTitle] = useState('');
    const [questions, setQuestions] = useState([{ question: '', options: ['', '', '', ''], correct: '' }]);

    const handleQuestionChange = (index, field, value) => {
        const newQuestions = [...questions];
        if (field === 'question') {
            newQuestions[index].question = value;
        } else if (field === 'correct') {
            newQuestions[index].correct = value;
        } else {
            newQuestions[index].options[field] = value;
        }
        setQuestions(newQuestions);
    };

    const addQuestion = () => {
        setQuestions([...questions, { question: '', options: ['', '', '', ''], correct: '' }]);
    };

    const saveQuiz = () => {
        const quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
        quizzes.push({ title, questions });
        localStorage.setItem('quizzes', JSON.stringify(quizzes));
        setView('quizList');
    };

    return (
        <div>
            <h2>Create Quiz</h2>
            <input
                type="text"
                placeholder="Quiz Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            {questions.map((q, index) => (
                <div key={index}>
                    <input
                        type="text"
                        placeholder="Question"
                        value={q.question}
                        onChange={(e) => handleQuestionChange(index, 'question', e.target.value)}
                    />
                    {q.options.map((option, i) => (
                        <input
                            key={i}
                            type="text"
                            placeholder={`Option ${i + 1}`}
                            value={option}
                            onChange={(e) => handleQuestionChange(index, i, e.target.value)}
                        />
                    ))}
                    <input
                        type="text"
                        placeholder="Correct Answer"
                        value={q.correct}
                        onChange={(e) => handleQuestionChange(index, 'correct', e.target.value)}
                    />
                </div>
            ))}
            <button onClick={addQuestion}>Add Question</button>
            <button onClick={saveQuiz}>Save Quiz</button>
            <button onClick={() => setView('quizList')}>Cancel</button>
        </div>
    );
}

export default CreateQuiz;
