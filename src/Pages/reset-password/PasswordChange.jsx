import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import SigninBg from '../../components/Siginbg/Siginbg/SiginBg'
import { assets } from  '../../../Images/assets'
import InputF from '../../components/InputField'
import { useState } from 'react'
import ApiService from '../../serverActions/api'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL

const PasswordChange = () => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({
        password: '',
        confirmPassword: ''
    })
    const navigate = useNavigate();

    const email = localStorage.getItem("verifiedEmail")
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = async (event) => {
        event.preventDefault()
        let formErrors = { password: '', confirmPassword: '' }
        let isValid = true
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
            const userDetails = { email, password }
            console.log(userDetails)
            // ApiService.savePassword(userDetails)
            const response = await axios.patch(`${API_BASE_URL}/api/v1/auth/save-new-password`, null, {
                params: { email: email, password: password }
              })
                .then(response => {
                    const details = { email: email }
                    // localStorage.removeItem("verifiedEmail")
                    console.log(response)
                    setLoading(false)
                    navigate('/login')
                })
                .catch(err => {
                    alert("An Error Occured Please Try again")
                    navigate("/login")
                    console.error('Error creating user:', err)
                })
        }
    }
    const isButtonDisabled = password === '' || loading;
  return (
    <div className='body' style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", paddingRight: "30px" }}>
            <SigninBg />
            <div style={{ zIndex: "20", height: "95%", width: "40rem", background: "white", marginLeft: "30px", border: "5px solid rgba(0, 158, 161, 1)" }}>
                <div className="signupLogo">
                    <img src={assets.logo} alt="logo" width={150} height={90} />
                </div>
                <div className="" style={{ display: "flex", alignItems: "center", flexDirection: "column", fontSize: "1.5rem" }}>
                    <h3 className='flex justify-center items-center text-center' style={{ color: "#009EA1", fontWeight: "bold" }}>Reset Password</h3>
                    {/* <p style={{ fontSize: "1rem" }}>Please entert he email associated with your account to reset your password</p> */}
                </div>
                <div>
                    {/* {errors && <p style={{ color: 'red' }}>{errors}</p>} */}
                    <form onSubmit={handleSubmit} style={{ padding: "5px", display: "flex", alignItems: "center", marginTop: "20px" }}>
                        <div className='input-sign'>
                            <InputF error={errors.password} value={password} onChange={handlePasswordChange} type="password" label="Enter New Password" placeHolder="Enter Password" />
                        </div>
                        <div className='input-sign'>
                            <InputF error={errors.confirmPassword} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" label="Confirm New Password" placeHolder="Re-Enter Password" />
                        </div>
                        <Button
                            type="submit"
                            disabled={isButtonDisabled}
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
                                opacity: isButtonDisabled ? 0.5 : 1, // Reduce opacity when disabled
                                cursor: isButtonDisabled ? 'not-allowed' : 'pointer',
                                transition: "opacity 0.2s ease-in-out"
                            }}
                        >
                            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Change Password
                        </Button>

                        {/* </div> */}
                        {/* {message && <p>{message}</p>}
                        <SignInOption />
                        <UserNO linkTo="/signup" info="New User" linkName="Sign Up" /> */}
                    </form>
                </div>
            </div>
        </div>
  )
}

export default PasswordChange