import React from 'react';
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-buttom.component';
import signInWithGoogle from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        
        this.setState({email: '', password: ''});
    }

    handleChange = event => {
        const { value, name} = event.target;

        this.setState({[name]: value})
    }
    render(){
        return(
            <div className="sign-in">
                <h2 className='title'> I already have account</h2>
                <span> Sign in with yout email and password</span>

                <form onSubmit={this.handleSubmit}>
                <FormInput name="email" type="email" value={this.state.email}
                     required handleChange={this.handleChange}
                     label='Email' />             
                <FormInput name="password" type="password" value={this.state.password} 
                    required
                    handleChange={this.handleChange}
                    label='Password'/>

                <div className="buttons">
                    <CustomButton type='submit'>
                        SIGN IN
                    </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn='true'>
                    {''}
                    Sign in with Google {''}
                    </CustomButton>
                </div>
            </form>
            </div>
        );
    }
}
export default SignIn;