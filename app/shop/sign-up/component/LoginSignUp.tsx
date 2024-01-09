import { ReactNode } from 'react';
import { LoginSignUpInfo } from './LoginSignUpInfo';
import './LoginSignUp.scss'

export const LoginSignUp = ({ children }: { children: ReactNode | ReactNode[] }): JSX.Element => {
    return (
        <section className="ls">
            <LoginSignUpInfo />
            <section className="ls__form">
                {children}
            </section>
        </section>
    )
}