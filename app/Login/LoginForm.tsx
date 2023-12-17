export const LoginForm = (): JSX.Element => {
    return (
        <form>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" required name="username" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="text" required name="password" />
            </div>
            <div>
                <input type="submit" value='Login' />
            </div>
        </form>
    )
}