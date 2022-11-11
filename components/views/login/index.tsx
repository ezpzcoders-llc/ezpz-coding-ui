import { useState, FormEvent } from 'react'
import styles from './Login.module.scss'
import useForm from '../../../utilities/hooks/useForm'
import Link from 'next/link'

interface FormProps {
    email: string
    password: string
}

const INITIAL_STATE = {
    email: '',
    password: ''
}

const Login = () => {
    const { input, handleChange, handleReset, clearForm } =
        useForm(INITIAL_STATE)
    const [error, setError] = useState({
        message: 'Enter message',
        hasError: false
    })

    const { email, password } = input
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }
    return (
        <div className={styles.content}>
            <div className={styles.formContainer}>
                <h1 className={styles.header}>Login</h1>
                {error?.hasError && (
                    <div className={styles.errorMessage}>{error.message}</div>
                )}

                <form onSubmit={handleSubmit}>
                    <fieldset className={styles.formInputs}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={handleChange}
                            required
                        />

                        <button className={styles.button} type="submit">
                            Submit
                        </button>
                        <Link href="/forgotpassword">
                            <a className={styles.forgotPw}>Forgot Password ?</a>
                        </Link>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Login
