import {useState} from 'react'
import {create} from './../User/api-user'


const useForm = (validate) => {
    const [values, setValues] = useState({
        name:  '',
        email: '',
        password: '',
        passwordConfirm: '',
        open: false,
        error: ''
    });
    const [errors, setErrors] = useState({})

    const handleChange = name => event => {
        setValues({ 
            ...values, 
            [name]: event.target.value })
      }

    const handleSubmit = e => {
        const user = {
            name: values.name || undefined,
            email: values.email || undefined,
            password: values.password || undefined,
            passwordConfirm: values.passwordConfirm || undefined
        }

        create(user).then((data) => {
            if (data.error) {
                setValues({...values, error: data.error})
            }
            else {
                setValues({...values, error: '', open: true})
            }
        })
        setErrors(validate(values))
    }

    return {handleChange, handleSubmit, values, errors}
}

export default useForm;