import { assets } from '../../Images/assets';
import ApiService from '@/serverActions/api';
import './Global.css'
import { useNavigate } from 'react-router-dom';

const SignInOption = () => {
  const navigate = useNavigate()
    const gmailLogin = () => {
        ApiService.loginWithGoogle()
        // .then(response => {
        //   const token = response.data.jwtToken;
        //   console.log(token)
        //   localStorage.setItem("jwttoken", token)
        //   navigate('/dashboard');  // Navigate after storing the token
        // })
        // .catch(error => {
        //   console.error('Error during OAuth token handling:', error);
        // });
      }
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "15px"}}>
        <div className='option-or'><div className='long-or'></div><span style={{paddingBottom: "3px"}}>or</span><div className='long-or'></div></div>
        <div>
        <div className="auth" onClick={gmailLogin}>
            <img src={assets.mingCute} alt="" />
          </div>
        </div>
    </div>
  )
}

export default SignInOption