import { Button } from "@/app/Button";
import { useSignUp } from "../hook/useSignUp"
import { TextInput } from "@/app/TextInput";

export const SignUp = (): JSX.Element => {
    const { onSignUp, signUpState: { name, email, phone, username, password } } = useSignUp();

    return (
        <div className="mx-auto w-64">
            <h3>Sign Up</h3>
            <form onSubmit={onSignUp}>
                <TextInput maxLength={75} required name="name" inputControl={name} />
                <TextInput maxLength={75} type='email' required name="email" inputControl={email} />
                <TextInput required maxLength={10} name="phone" inputControl={phone} />
                <TextInput required maxLength={25} name="username" inputControl={username} />
                <TextInput required maxLength={25} name="password" inputControl={password} />
                <Button type="submit"> Sign Up </Button>
            </form>
        </div>
    )
} 