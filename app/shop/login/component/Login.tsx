import { LoginSignUp } from '@/app/shop/sign-up';
import { LoginForm } from './LoginForm';

export const Login = (): JSX.Element => {
    return (
        <LoginSignUp>
            <LoginForm />
        </LoginSignUp>
    )
}