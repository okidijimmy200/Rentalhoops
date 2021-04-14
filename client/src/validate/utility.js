
export default function validateInfo(values, err) {
    let errors = {}

    if (!values.name.trim()) {
        errors.name = 'Username required'
    }

    if (!values.email) {
        errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 8) {
        errors.password = 'Password needs to be at least 8 characters or more'}
    // } else if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(values.password)) {
    //     errors.password = 'Password needs to be at least 8 characters, one letter and one number'
    // }

    if (!values.passwordConfirm) {
        errors.passwordConfirm = 'Password confirm is required';
    } else if (values.passwordConfirm !== values.password) {
        errors.passwordConfirm = 'Passwords do not match'
    }
    return errors
}