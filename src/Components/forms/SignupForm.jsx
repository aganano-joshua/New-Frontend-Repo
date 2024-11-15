import SigninBg from '@/Components/Siginbg/Siginbg/SiginBg'
import InputF from '../InputField'

import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import SignInOption from '../SignInOption'
import UserNO from '../UserNO'
import { assets } from '../../../Images/assets'
import { useState } from 'react'
import { Loader2 } from 'lucide-react'
import ApiService from '../../serverActions/api'

const SignupForm = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: ''
    })

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        let formErrors = { email: '', password: '', confirmPassword: '' }
        let isValid = true

        if (!firstName) {
            formErrors.firstName = 'First Name is required'
            isValid = false
        }
        if (!lastName) {
            formErrors.lastName = 'Last Name is required'
            isValid = false
        }
        if (!email) {
            formErrors.email = 'Email is required'
            isValid = false
        }

        if (!password) {
            formErrors.password = 'Password is required'
            isValid = false
        } else if (password.length < 8) {
            formErrors.password = 'Password must be at least 8 characters long'
            isValid = false
        }

        if (!confirmPassword) {
            formErrors.confirmPassword = 'Confirm Password is required'
            isValid = false
        } else if (password !== confirmPassword) {
            formErrors.confirmPassword = 'Passwords do not match'
            isValid = false
        }

        setErrors(formErrors)
        if (isValid) {
            setLoading(true)
            setName(firstName + " " + lastName)
            const userData = { firstName, lastName, name, email, password }
            ApiService.registerWithEmail(userData)
              .then((response) => {
                console.log('API Response:', response) // Example usage
                const details = { email: email }
                localStorage.setItem('verifiedEmail', email)
                setLoading(false)
                navigate('/verification', { state: details })
              })
              .catch((err) => {
                alert('An Error Occured Please Try again')
                window.location.href = '/signup'
                console.error('Error creating user:', err)
              })
        }
    }
    return (
        <div>
            <div className='body' style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", paddingRight: "30px" }}>
                <SigninBg />
                <div style={{ zIndex: "20", height: "95%", width: "40rem", background: "white", marginLeft: "30px", border: "5px solid rgba(0, 158, 161, 1)" }}>
                    <div className="signupLogo">
                        <img src={assets.logo} alt="logo" width={150} height={90} />
                    </div>
                    <div className="" style={{ display: "flex", alignItems: "center", flexDirection: "column", fontSize: "1.5rem" }}>
                        <h3 className='flex justify-center items-center text-center' style={{ color: "#009EA1", fontWeight: "bold" }}>Welcome to Cardboard</h3>
                        <p style={{ fontSize: "1rem" }}>Sign Up to Cardboard</p>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit} style={{ padding: "5px", display: "flex", alignItems: "center", marginTop: "20px" }}>
                            <div className='input-sign flex flex-row gap-2'>
                                <InputF type="text" value={firstName} onChange={handleFirstNameChange} error={errors.firstName} label="First Name" placeHolder="Enter First Name" />
                                <InputF type="text" value={lastName} onChange={handleLastNameChange} error={errors.lastName} label="Last Name" placeHolder="Enter Last Name" />
                            </div>
                            <div className='input-sign'>
                                <InputF type="email" value={email} onChange={handleEmailChange} error={errors.email} label="Email" placeHolder="Enter Email" />
                            </div>
                            <div className='input-sign'>
                                <InputF value={password} onChange={handlePasswordChange} error={errors.password} type="password" label="Password" placeHolder="********" />
                            </div>
                            <div className='input-sign'>
                                <InputF type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} error={errors.confirmPassword} label="Confirm Password" placeHolder="***********" />
                            </div>
                            <Button
                                type="submit"
                                disabled={loading}
                                variant="outline"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginTop: "10px",
                                    width: "195px",
                                    height: "47px",
                                    backgroundColor: "#008183",
                                    color: "#fff",
                                    fontWeight: "700",
                                    fontSize: "20px",
                                    border: "none",
                                    borderRadius: "20px",
                                    cursor: loading ? "not-allowed" : "pointer",
                                    opacity: loading ? 0.6 : 1,
                                    transition: "opacity 0.2s ease-in-out"
                                }}
                            >
                                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                Sign Up
                            </Button>
                            <SignInOption />
                            <UserNO linkTo="/login" info="Already Have an Account" linkName="Login" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupForm