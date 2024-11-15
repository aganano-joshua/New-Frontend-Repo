import { assets } from '../../../Images/asset'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
    const navigate = useNavigate()

    const createArt = () => {
        navigate("/create-art")
    }
  return (
    <div className='flex flex-row justify-around items-center pr-10 pt-10 max-800:flex max-800:flex-col max-800:mt-56 select-none '>
        <div className="image">
            <img src={assets.kids} alt="Brush" className='h-64 w-auto' draggable={false}/>
            
        </div>

        <div className="hero-text flex flex-col justify-between items-center gap-5">
            <div className='cursor-pointer flex flex-row justify-between items-start gap-36'>
                <h4 style={{fontSize: '30px', fontWeight: 'bolder', color: '#008183'}}>Creations</h4>
                <img src={assets.pal} alt="Brush" style={{width: "50px", height: '50px'}} draggable={false}/>
            </div>
            <div className='cursor-pointer flex flex-row justify-between items-center gap-36'>
                <h4 style={{fontSize: '30px', fontWeight: 'bolder', color: '#008183',}}>Paint</h4>
                <img src={assets.ptool} alt="Brush" style={{width: "50px", height: '50px',  marginLeft: '60px'}} draggable={false}/>
            </div>
            <div className='cursor-pointer flex flex-row justify-between items-center gap-36' onClick={createArt}>
                <h4 style={{fontSize: '30px', fontWeight: 'bolder', color: '#008183'}}>Draw</h4>
                <img src={assets.brushh} alt="Brush" style={{width: "50px", height: '50px',  marginLeft: '60px'}} draggable={false}/>
            </div>
            <div className='cursor-pointer flex flex-row justify-between items-center gap-36'>
                <h4 style={{fontSize: '30px', fontWeight: 'bolder', color: '#008183'}}>Learn</h4>
                <img src={assets.book} alt="Brush" style={{width: "50px", height: '50px',  marginLeft: '60px'}} draggable={false}/>
            </div>
        </div>
    </div>
  )
}

export default HeroSection