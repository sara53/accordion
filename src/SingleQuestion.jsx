import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const SingleQuestion = ( { id, title, info, activeQuestion, activeQuestionHandler } ) => {

    let isActive = id === activeQuestion;
    return (
        <article className='question'>
            <header>
                <h5>{title}</h5>
                <button className='question-btn' onClick={() => activeQuestionHandler( id )}>
                    {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            {isActive && <p>{info}</p>}
        </article>
    )
}

export default SingleQuestion
