import { useEffect, useState } from 'react';
import './Verification.css'
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import SigninBg from '../../components/Siginbg/Siginbg/SiginBg';
import { assets } from  '../../../Images/assets'

const EmailVerification = () => {
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState('Verifying your email...');
  const token = searchParams.get('token');
  const [emailText, setEmailText] = useState('');
  const navigate = useNavigate()

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get(`https://cardboard-prd-api-repo.onrender.com/api/v1/verifyEmail?token=${token}`);
        if (response.status === 200) {
            const apiMessage = response.data;
            const emailMatch = apiMessage.match(/[\w._%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}/);
            if (emailMatch) {
              const email = emailMatch[0];
              setEmailText(email);
              localStorage.setItem('verifiedEmail', email);
            }
            const mailTo = localStorage.getItem("verifiedEmail")
            const details = { eail: mailTo };
          setMessage(`Email verified successfully! An OTP has been sent to your email.`);
          setTimeout(() =>{
            navigate('/otp-verification', {state : details})
          }, 5000)
        }
      } catch (error) {
        setMessage('Email verification failed. Please try again.');
      }
    };

    if (token) {
      verifyEmail();
    } else {
      setMessage('No token found in the URL.');
    }
  }, [token]);

  return (
    <div className='body' style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", paddingRight: "30px" }}>
      <SigninBg />
      <div className='flex flex-col gap-[10%]' style={{ zIndex: "20", height: "95%", width: "40rem", background: "white", marginLeft: "30px", border: "5px solid rgba(0, 158, 161, 1)" }}>
        <div className="signupLogo">
          <img src={assets.logo} alt="logo" width={150} height={90} />
        </div>
        <div className="signup-welcomeText">
          <h3>Your Email {emailText} is being verified</h3>
          <p>{message}</p>
        </div>
        <div>
          <div className="">
            <div className="new-message">
              <img
                src={assets.pana}
                alt="igmail message"
                width="100"
                height="100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmailVerification;
