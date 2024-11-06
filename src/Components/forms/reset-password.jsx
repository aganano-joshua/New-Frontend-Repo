/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import SigninBg from '@/components/Siginbg/Siginbg/SiginBg'
import React, { useState } from 'react'
import { assets } from '../../../Images/assets'
import InputF from '@/components/InputField'
import SignInOption from '@/components/SignInOption'
import UserNO from '@/components/UserNO'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'

const API_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL

const signin = () => {

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [errors, setErrors] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)
        try {
            const response = await axios.put(`${API_BASE_URL}/api/v1/auth/reset-password`, null, {
                params: { email: email}
            });
            setLoading(false)
            setMessage('Email Sent!');
            // window.location.href = '/confirm-account'
            if (response.status === 200) {
                localStorage.setItem('verifiedEmail', email);
                navigate('/confirm-account');
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 400) {
                    setMessage(error.response.data);
                } else {
                    setMessage('No Account Fount With Email Provided');
                }
            } else {
                setMessage('Network error. Please check your connection.');
            }
        } finally {
            setLoading(false);
        }
    }

    const handleInputChange = (event) => {
        setEmail(event.target.value);
      };
    const isButtonDisabled = email === '' || loading;

    return (
        <div className='body' style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", paddingRight: "30px" }}>
            <SigninBg />
            <div style={{ zIndex: "20", height: "95%", width: "40rem", background: "white", marginLeft: "30px", border: "5px solid rgba(0, 158, 161, 1)" }}>
                <div className="signupLogo">
                    <img src={assets.logo} alt="logo" width={150} height={90} />
                </div>
                <div className="" style={{ display: "flex", alignItems: "center", flexDirection: "column", fontSize: "1.5rem" }}>
                    <h3 className='flex justify-center items-center text-center' style={{ color: "#009EA1", fontWeight: "bold" }}>Reset Password</h3>
                    <p style={{ fontSize: "1rem" }}>Please entert he email associated with your account to reset your password</p>
                </div>
                <div>
                    {errors && <p style={{ color: 'red' }}>{errors}</p>}
                    <form onSubmit={handleSubmit} style={{ padding: "5px", display: "flex", alignItems: "center", marginTop: "20px" }}>
                        <div className='input-sign'>
                            <InputF error={emailError} value={email} onChange={handleInputChange} type="email" label="Enter Email Address" placeHolder="johndeo@gmail.com" />
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
                            Reset Password
                        </Button>

                        {/* </div> */}
                        {message && <p>{message}</p>}
                        <SignInOption />
                        <UserNO linkTo="/signup" info="New User" linkName="Sign Up" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default signin