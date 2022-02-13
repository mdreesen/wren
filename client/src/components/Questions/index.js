import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import questionData from '../../utils/question.json';

const Questions = () => {

    const aboutMotherQuestions = questionData?.aboutMother;
    console.log(aboutMotherQuestions?.map(question => question?.question));

    return (
        <div>
            <section>
                <h3 style={{ marginTop: '10%' }}>About You</h3>
                {
                    aboutMotherQuestions?.map((question, index) => {
                        return (
                            <div style={{ marginTop: '8px' }} className="input-group flex-nowrap">
                                <span className="input-group-text" id="addon-wrapping">{`${index + 1}. ${question?.question}`}</span>
                                <input type="text" className="form-control" placeholder="Optional..." aria-label="answer" aria-describedby="addon-wrapping" />
                            </div>
                        );
                    })
                }
            </section>

            <div className="modal-footer">
            </div>
        </div>
    );
};

export default Questions;