import React, { useState } from 'react'
import SingleQuestion from './SingleQuestion';

const Questions = ( { questions } ) => {
    let [ activeQuestion, setActiveQuestion ] = useState( null );

    let activeQuestionHandler = ( id ) => {

        let activeState = id === activeQuestion ? null : id;
        setActiveQuestion( activeState )
    }
    return (
        <section className='container'>
            <h1>Questions</h1>
            {questions.map( question => <SingleQuestion activeQuestion={activeQuestion} activeQuestionHandler={activeQuestionHandler} key={question.id} {...question} /> )}
        </section>
    )
}

export default Questions
