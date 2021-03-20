import React from 'react';

function Conditionals() {

    function statements() {

        const username = document.querySelector('#signup-username-input').value.trim();
        const firstname = document.querySelector('#signup-firstname-input').value.trim();
        const lastname = document.querySelector('#signup-lastname-input').value.trim();
        const email = document.querySelector('#signup-email-input').value.trim();
        const password = document.querySelector('#signup-password-input').value.trim();
        const confirmPassword= document.querySelector('#signup-confirm-password-input').value.trim();

        if (!username) {
            console.log('!username')
            return <div>please enter a username</div>
        }
    
        else if (!firstname) {
            console.log('!firstname')
            return <div>please enter your first name</div>
        }
    
        else if (!lastname) {
            console.log('!lastname')
            return <div>please enter your last name</div>
        }
    
        else if (!email) {
            console.log('!email')
            return <div>please enter your email</div>
        }
    
        else if (!password) {
            console.log('!password')
            return <div>please enter your password</div>
        }
    
        else if (password !== confirmPassword) {
            console.log('password !== confirmPassword')
            return <div>passwords do not match</div>
        }
    
        else if (confirmPassword !== password) {
            console.log('confirmPassword !== password')
            return <div>passwords do not match</div>
        }
    }
   
    return (
        <div>{ statements }</div>
    );
};

export default Conditionals;