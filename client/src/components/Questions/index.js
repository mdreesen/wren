import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import questionData from '../../utils/question.json';

const Questions = () => {

    const questionAboutMother = questionData?.aboutMother || [];
    const questionCurrentPregnancy = questionData?.currentPregnancy || [];
    console.log(questionData)

    const [formState, setFormState] = useState({ 
        preferredName: '', 
        language: '', 
        dateOfBirth: '', 
        maidenName: '', 
        placeOfBirth: '',
        socialSecurityNumber: '',
        maritalStatus: '',
        ethnicity: '',
        occupation: '',
        religion: '',
        highestEducation: '',
        livingWill: '',
        organDonor: '',
        culturalPreferences: '',
        primaryAddress: '',
        secondaryAddress: '',
        referral: '',
        primaryPhone: '',
        secondaryPhone: '',
        doNotContactRoute: '',
        grantPermission: '',
        preferredMethodOfContact: '',
        emergencyContact: '',
    });

    const [addUser, { error }] = useMutation(ADD_USER);

    const handleFormSubmit = async event => {
        event.preventDefault();

        // if the user is created successfully, then they will be redirected to the "/home" page
        try {
            const { data } = await addUser({
                variables: { ...formState },
            });
            Auth.userLogin(data.addUser.token)
            window.location.assign('/home');
console.log(Auth.userLogin(data.addUser.token))
        } catch (e) {
            console.log(e)
        }
    };

    // update state based on form input changes
    const handleChange = event => {
        const { name, value } = event.target;

        console.log({ name, value })
        // console.log(setFormState({ ...formState, [name]: value }))

        setFormState({

            ...formState,
            [name]: value
        });
    };

    return (
        <div>
            <section>
                <h3 style={{ marginTop: '10%' }}>About You</h3>
                {
                    questionAboutMother?.map((question, index) => {
                        return (
                            <InputGroup className="mb-3">
                                <InputGroup.Text>{`${index + 1}. ${question?.question}`}</InputGroup.Text>
                                <FormControl aria-label={question?.question} value={formState?.[question?.name]} onChange={handleChange} name={question?.name}/>
                            </InputGroup>
                        );
                    })
                }
            </section>
            {/* <section>
                <h3 style={{ marginTop: '10%' }}>Current Pregnancy</h3>
                {
                    questionCurrentPregnancy?.map((question, index) => {
                        return (
                            <InputGroup className="mb-3">
                                <InputGroup.Text value={formState.firstname} onChange={handleChange}>{`${index + 1}. ${question?.question}`}</InputGroup.Text>
                                <FormControl aria-label="First name" />
                            </InputGroup>
                        );
                    })
                }
            </section> */}
            <div className="modal-footer">
                <button type="click" id="signupModalBtn" className="btn btn-primary" onClick={handleFormSubmit} >Submit</button>
            </div>
            {error && <div>Please Try Again</div>}
        </div>
    );
};

export default Questions;