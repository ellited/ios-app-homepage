import React, {useState} from 'react';
import styles from '../../styles/Contact.module.scss';

const useFormField = (initialValue: string = '') => {
    const [value, setValue] = React.useState(initialValue);
    const onChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setValue(e.target.value), []);
    return {value, onChange};
};

const isEmailValid = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

enum FormStatus {
    SUCCESS = "SUCCESS",
    INITIAL = "INITIAL",
    FAIL = "FAIL",
    SENDING = "SENDING"
}

function Contacts() {
    const [status, setStatus] = useState(FormStatus.INITIAL);
    const emailField = useFormField();
    const messageField = useFormField();

    const isValid = () => {
        return isEmailValid(emailField.value) && messageField.value.length >= 10
    }

    const statusMessage = (status: FormStatus) => {
        switch (status) {
            case FormStatus.FAIL:
                return "Sorry, message wasn't sent. Please try again later";

            case FormStatus.SENDING:
                return "Message is sending";

            case FormStatus.SUCCESS:
                return "Message sent! Thank you!";

            default:
                return "";
        }
    }

    const statusBlock = () => {
        return <div className={styles.status}>{statusMessage(status)}</div>
    }

    const contactForm = () => {
        return (
            <form onSubmit={handleSubmit} id={styles.form}>
                <div className={styles.input}>
                    <label htmlFor='email' className={styles.label}>Email: </label>
                    <input type='email' id='email' {...emailField} />
                </div>
                <div className={styles.input}>
                    <label htmlFor='message' className={styles.label}>Message: </label>
                    <textarea id='message' minLength={10} className={styles.message} {...messageField} />
                </div>

                <div className={styles.sendWrapper}>
                <button
                    type="submit"
                    disabled={!isValid()}
                    onClick={e => handleSubmit(e)}>
                    Submit
                </button>
                </div>
            </form>
        )
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: emailField.value,
                message: messageField.value
            })
        };
        fetch('https://formspree.io/f/xeqpwozj', requestOptions)
            .then(response => response.json())
            .then(data => (data.ok) ? setStatus(FormStatus.SUCCESS) : setStatus(FormStatus.FAIL));
    };

    return <div className={styles.wrapper}>
        {(status === FormStatus.INITIAL) && contactForm()}
        {(status !== FormStatus.INITIAL) && statusBlock()}
    </div>
}

export default Contacts
