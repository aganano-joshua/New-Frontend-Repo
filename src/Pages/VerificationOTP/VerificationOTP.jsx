/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './VerificationOTP.css'
import { assets } from  '../../../Images/assets'
import SigninBg from '../../components/Siginbg/Siginbg/SiginBg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Popup from '../../components/Popup'

const API_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL

const OTPVerification = () => {
  const [resendMessage, setResendMessage] = useState('')
  const [otpfield, setFieldOtp] = useState(new Array(4).fill(""));
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [popup, setPopup] = useState(false)
  const navigate = useNavigate();

  const emailGotten = localStorage.getItem("verifiedEmail")

  const handleChange = (element, index) => {
    const value = element.value;
    if (!isNaN(value) && value !== "") {
      let newOtp = [...otpfield];
      newOtp[index] = value;
      setFieldOtp(newOtp);
      if (element.nextSibling) {
        element.nextSibling.focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const otp = otpfield.join("");
    if (!otp) {
      setMessage('Please Enter Otp')
    } else {
      // try {
      //   const response = await axios.put(`${API_BASE_URL}/api/v1/verify-account`, null, {
      //     params: { email: emailGotten, otp: otp }
      //   });
      //   if (response.status === 200) {
      //     if(response.data === 'Please regenerate otp and try again'){
      //       setMessage('Error Verifyiny OtpPlease regenerate otp and try again')
      //     }else{
      //       setLoading(false)
      //       setMessage('OTP Verified Successfully');
      //       localStorage.removeItem("token")
      //       localStorage.removeItem("verifiedEmail")
            // setTimeout(() => {
            //   navigate('/login')
            // }, 5000)
            showPopUp();
          }
        // }
    //   } catch (error) {
    //     if (error.response) {
    //       if (error.response) {
    //         if (error.response.status === 400) {
    //           setMessage(error.response.data);
    //         } else {
    //           setMessage('Wrong username or password please try again');
    //         }
    //       } else {
    //         setMessage('Network error. Please check your connection.');
    //       }
    //     }
    //   } finally {
    //     setLoading(false);
    //   }
    // }
  };

  const showPopUp = () => {
    setPopup(true)
  }

  const verifyEmail = async () => {
    setIsLoading(true);
    try {
      const response = await axios.put(`${API_BASE_URL}/api/v1/regenerate-otp`, null, {
        params: { email: emailGotten }
      });
      setMessage(response.data);
    } catch (error) {
      setMessage('Error verifying email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const linkToLogin = '/login'


  return (
    <div className='body' style={{ display: "flex", justifyContent: "flex-end", alignItems: "center"}}>
      <SigninBg />
      <div className='flex flex-col gap-[2px]' style={{ zIndex: "20", height: "95%", width: "40rem", background: "white", marginLeft: "30px", border: "5px solid rgba(0, 158, 161, 1)", marginRight: "30px" }}>
        <div className="signupLogo">
          <img src={assets.logo} alt="logo" width={150} height={90} />
        </div>
        <div className=" items-center justify-center flex flex-col">
          <h3 className='font-bold'>Account Activation</h3>
          <p>Enter the 4 digit code sent to your mail</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div className="otp">
            <p className='font-bold text-2xl' style={{ textAlign: 'left' }}>Enter OTP</p>
            <div className="flex mt-6 gap-2">
              {otpfield.map((value, index) => (
                <input
                  key={index}
                  type="text"
                  name="otp"
                  maxLength="1"
                  value={value}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                  style={{
                    width: '40px',
                    height: '40px',
                    textAlign: 'center',
                    fontSize: '18px',
                    border: "1px solid black",
                    borderRadius: "5px"
                  }}
                />
              ))}
            </div>
          </div>
          <h5 className='mt-10'>
            Didn&apos;t get any code?{' '}
            <a className='font-bold' style={{ textDecoration: "underline" }} onClick={verifyEmail} disabled={isLoading}>
              {isLoading ? 'Loading....' : 'Send Again'}
            </a>
          </h5>
          {resendMessage && (
            <p className="resend-message">{resendMessage}</p>
          )}
          <button type="submit" id="btn" disabled={loading} onClick={handleSubmit}>
            {loading ? 'Verifying...' : 'Verify OTP'}
          </button>
        </div>
        {message && <p>{message}</p>}
      </div>
          {popup && (
            <Popup subject='Account Verified' buttonText='Proceed to Login' linkTo={linkToLogin}/>
          )}
     </div>
  )
}

export default OTPVerification
