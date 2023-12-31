import { LoginSignUp } from '@/app/SignUp';
import { LoginForm } from './LoginForm';

export const Login = (): JSX.Element => {
    return (
        <LoginSignUp>
            <LoginForm />
        </LoginSignUp>
    )
}