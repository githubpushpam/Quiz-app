import React, { useState } from 'react';
import CreateQuiz from './components/CreateQuiz';
import QuizList from './components/QuizList';
import TakeQuiz from './components/TakeQuiz';
import QuizResult from './components/QuizResult';
import './App.css';

function App() {
    const [view, setView] = useState('quizList');
    const [quizToTake, setQuizToTake] = useState(null);
    const [quizResult, setQuizResult] = useState(null);

    return (
        <div>
            {view === 'quizList' && <QuizList setView={setView} setQuizToTake={setQuizToTake} />}
            {view === 'createQuiz' && <CreateQuiz setView={setView} />}
            {view === 'takeQuiz' && <TakeQuiz setView={setView} quiz={quizToTake} setQuizResult={setQuizResult} />}
            {view === 'quizResult' && <QuizResult setView={setView} result={quizResult} />}
        </div>
    );
}

export default App;
