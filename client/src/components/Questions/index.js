import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import questionData from '../../utils/question.json';

const Questions = () => {

    const questionAboutMother = questionData?.aboutMother || [];
    const questionCurrentPregnancy = questionData?.currentPregnancy || [];
    console.log(questionData)

    return (
        <div>
            <section>
            <h3 style={{marginTop: '10%'}}>About You</h3>
                {
                    questionAboutMother?.map((question, index) => {
                        return (
                            <InputGroup className="mb-3">
                                <InputGroup.Text>{`${index + 1}. ${question?.question}`}</InputGroup.Text>
                                <FormControl aria-label="First name" />
                            </InputGroup>
                        );
                    })
                }
            </section>
            <section>
            <h3 style={{marginTop: '10%'}}>Current Pregnancy</h3>
                {
                    questionCurrentPregnancy?.map((question, index) => {
                        return (
                            <InputGroup className="mb-3">
                                <InputGroup.Text>{`${index + 1}. ${question?.question}`}</InputGroup.Text>
                                <FormControl aria-label="First name" />
                            </InputGroup>
                        );
                    })
                }
            </section>
        </div>
    );
};

export default Questions;