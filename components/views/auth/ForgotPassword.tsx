import { useState, FormEvent, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { FormProps } from '../../../utilities/types/formTypes'
import useForm from '../../../utilities/hooks/useForm'
import styles from './AuthPages.module.scss'
import { VALID_EMAIL } from '../../../utilities/regex'
import { StringField, FormRow } from '../../form'

const ERROR = 'error'
const SUCCESS = 'success'

const INITIAL_STATE = {
    email: { value: '', error: '' }
} as FormProps

const VALIDATIONS = {
    email: {
        test: (value: string) => VALID_EMAIL.test(value),
        message: 'Must containt a valid email address (example@test.com)'
    }
}

const ForgotPassword = () => {
    const router = useRouter()
    const { form, handleChange, handleReset } = useForm(
        INITIAL_STATE,
        VALIDATIONS
    )
    const { email } = form
    const [disableSubmit, setDisableSubmit] = useState<boolean>(true)
    const [alert, setAlert] = useState<{ type: string; email: string }>({
        type: '',
        email: ''
    })
    const [showBanner, setShowBanner] = useState<boolean>(false)

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setAlert({
            type: SUCCESS,
            email: email.value
        })
        setShowBanner(true)
        handleReset()
    }

    useEffect(() => {
        let isFormValid = true
        Object.keys(form).forEach(item => {
            const current = form[item]
            if ((isFormValid && !current.value) || current.error) {
                isFormValid = false
            }
        })
        setDisableSubmit(!isFormValid)
    })

    const BannerDisplay = () => {
        const { type, email } = alert

        if (type === SUCCESS)
            return (
                <div className={styles.success}>
                    An email has been sent to {email} with a link to reset your
                    password.
                </div>
            )
        if (type === ERROR)
            return (
                <div className={styles.error}> {email} has not been found </div>
            )

        return <div />
    }

    return (
        <div className={styles.content}>
            <div className={styles.formContainer}>
                <h1 className={styles.header}>Forgot Password</h1>
                {showBanner && <BannerDisplay />}
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <FormRow>
                            <StringField
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter email"
                                field={email}
                                onChange={handleChange}
                                required
                            />
                        </FormRow>
                        <button
                            className={styles.button}
                            type="submit"
                            disabled={disableSubmit}>
                            Submit
                        </button>
                        <div className={styles.option}>
                            <Link href="/login">
                                <a className={styles.forgotPw}>
                                    Remember Password ?
                                </a>
                            </Link>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword
