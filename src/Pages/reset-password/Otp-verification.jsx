/* eslint-disable no-unused-vars */
import { useState } from 'react'
import '../VerificationOTP/VerificationOTP.css'
import { assets } from  '../../../Images/assets'
import SigninBg from '../../components/Siginbg/Siginbg/SiginBg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL

const OTPVerification = () => {
  const [resendMessage, setResendMessage] = useState('')
  const [otpfield, setFieldOtp] = useState(new Array(4).fill(""));
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
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
      try {
          console.log(emailGotten + otp)
        const response = await axios.put(`${API_BASE_URL}/api/v1/auth/update-password`, null, {
          params: { email: emailGotten, otp: otp }
        });
        if (response.status === 200) {
          if(response.data === 'OTP verified. You can now log in.'){
              setLoading(false)
              setMessage('OTP Verified Successfully');
              localStorage.removeItem("token")
              setTimeout(() => {
                  navigate('/change-password')
                }, 3000)
            }else{
              setMessage('Error Verifyiny Otp Please regenerate otp and try again')
          }
        }
      } catch (error) {
        if (error.response) {
          if (error.response) {
            if (error.response.status === 400) {
              setMessage(error.response.data);
            } else {
              setMessage('Wrong username or password please try again');
            }
          } else {
            setMessage('Network error. Please check your connection.');
          }
        }
      } finally {
        setLoading(false);
      }
    }
  };

  const verifyEmail = async () => {
    setIsLoading(true);
    try {
      const response = await axios.put(`${API_BASE_URL}/api/v1/auth/reset-password`, null, {
        params: { email: emailGotten }
      });
      setMessage(response.data);
    } catch (error) {
      setMessage('Error verifying email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className='body' style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", paddingRight: "30px" }}>
      <SigninBg />
      <div className='flex flex-col gap-[2px]' style={{ zIndex: "20", height: "95%", width: "40rem", background: "white", marginLeft: "30px", border: "5px solid rgba(0, 158, 161, 1)" }}>
        <div className="signupLogo">
          <img src={assets.logo} alt="logo" width={150} height={90} />
        </div>
        <div className=" items-center justify-center flex flex-col">
          <h3 className='font-bold text-[2rem] pb-[2.5em]'>Verify it&apos;s you</h3>
          <p>Enter the 4 digit code sent to your mail</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div className="otp">
            <p className='font-bold text-[1.5rem] pt-[0.8em]' style={{ textAlign: 'left' }}>Enter OTP</p>
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
    </div>
  )
}

export default OTPVerification
