import { SignUpForm } from './SignUpForm';
import { LoginSignUp } from './LoginSignUp';

export const SignUp = (): JSX.Element => {
    return (
        <LoginSignUp>
            <SignUpForm />
        </LoginSignUp>
    )
}