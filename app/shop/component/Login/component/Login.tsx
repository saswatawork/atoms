import { LoginSignUp } from '@/app/shop/component/SignUp';
import { LoginForm } from './LoginForm';

export const Login = (): JSX.Element => {
    return (
        <LoginSignUp>
            <LoginForm />
        </LoginSignUp>
    )
}