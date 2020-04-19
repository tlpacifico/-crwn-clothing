import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-buttom.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confimPassword: ''
        };
    }

    handleChange =  event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confimPassword} = this.state;

        if(password !== confimPassword) {
            alert("password don't match");
            return;
        } 

        try {
           const { user } = await auth.createUserWithEmailAndPassword(email, password);

          await createUserProfileDocument(user, { displayName });

          this.setState({
            displayName: '',
            email: '',
            password: '',
            confimPassword: ''
        });

        } catch (error) {
            console.error(error);
        }

       
    }

    render() {
        const { displayName, email, password, confimPassword } = this.state;
        return (
           <div className="sign-up">
               <h2 className="title">I do not have a account</h2>
               <span>Sign up with your email and passwrod</span>
               <form onSubmit={this.handleSubmit}>
                   <FormInput type='text'
                              handleChange={this.handleChange}
                              required
                              name='displayName'
                              value={displayName}
                              label='Display Name' />

                    <FormInput type='email'
                              handleChange={this.handleChange}
                              required
                              name='email'
                              value={email}
                              label='Display email' />

                    <FormInput type='password'
                              handleChange={this.handleChange}
                              required
                              name='password'
                              value={password}
                              label='Password' />

                    <FormInput type='password'
                              handleChange={this.handleChange}
                              required
                              name='confimPassword'
                              value={confimPassword}
                              label='Confirm password' />
                    <CustomButton type='subtmit'>
                        SIGN UP
                    </CustomButton>
               </form>
           </div>
        )
    }
}

export default SignUp;