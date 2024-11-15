
import { assets } from '../../../Images/asset'

const HeroIcon = () => {
  return (
    <div className='flex flex-row justify-end items-center mt-14 gap-4 mr-20 max-800:justify-center max-800:mr-0 select-none'>
        <img src={assets.set} alt="settings" className='w-16' draggable={false}/>
        <img src={assets.faq} alt="Faq" className='w-16' draggable={false}/>
        <img src={assets.user} alt="User"  className='w-16' draggable={false}/>
        <button style={{backgroundColor: '#008183', padding: '8px 10px', color: 'white', borderRadius: '10px', fontWeight: 'bold'}}>Exit</button>
    </div>
  )
}

export default HeroIcon