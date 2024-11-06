import React from 'react'
import { useLocation } from 'react-router-dom'
import './Verification.css'
import SigninBg from '../../components/Siginbg/Siginbg/SiginBg'
import { assets } from  '../../../Images/assets'

const Verification = () => {
  const location = useLocation();
  const { email } = location.state || {};
  console.log(email)

  const handleVerifyEmail = () => {
    const emailProviderLinks = {
      gmail: 'https://mail.google.com/',
      yahoo: 'https://mail.yahoo.com/',
      outlook: 'https://outlook.live.com/',
      hotmail: 'https://outlook.live.com/',
      icloud: 'https://www.icloud.com/mail',
    };

    const domain = email.split('@')[1];
    let emailProvider = '';

    if (domain) {
      if (domain.includes('gmail')) {
        emailProvider = 'gmail';
      } else if (domain.includes('yahoo')) {
        emailProvider = 'yahoo';
      } else if (domain.includes('outlook') || domain.includes('hotmail')) {
        emailProvider = 'outlook';
      } else if (domain.includes('icloud')) {
        emailProvider = 'icloud';
      } else {
        alert('Unsupported email provider. Please open your email manually.');
        return;
      }

      window.open(emailProviderLinks[emailProvider], '_blank');
    } else {
      alert('Please enter a valid email address.');
    }
  }

  return (
    <div className='body' style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", paddingRight: "30px" }}>
      <SigninBg />
      <div className='flex flex-col gap-[10%]' style={{ zIndex: "20", height: "95%", width: "40rem", background: "white", marginLeft: "30px", border: "5px solid rgba(0, 158, 161, 1)" }}>
        <div className="signupLogo">
          <img src={assets.logo} alt="logo" width={150} height={90} />
        </div>
        <div className="" style={{ display: "flex", alignItems: "center", flexDirection: "column", fontSize: "1.5rem" }}>
          <h3 className='flex justify-center items-center text-center' style={{ color: "#009EA1", fontWeight: "bold" }}>Email Verification</h3>
          <p style={{ fontSize: "1rem" }}>We have sent an email verification link to {email}</p>
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
            <div className="btn-cont">
              <button type="submit" id="btn" onClick={handleVerifyEmail}>
                Verify E-Mail
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Verification
