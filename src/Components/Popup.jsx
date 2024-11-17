/* eslint-disable react/prop-types */
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { Button } from '@/components/ui/button'
import { FaArrowRight } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const Popup = ({ subject, buttonText, linkTo }) => {
  const navigate = useNavigate()
  const linkFromTo = () => {
    console.log('CTA Clicked')
    window.location.href = linkTo
    console.log('red')
    navigate(linkTo)
  }
  return (
    <div className="flex absolute justify-center items-center z-[100] w-[100%] h-[100%] bg-[#00000036]">
      <div
        className="popup-content bg-[#008183] flex flex-col justify-center items-center w-[20rem] h-[20rem]  gap-[10%]"
        style={{ borderRadius: '30px' }}
      >
        <p className="text-[#17FBFF] font-bold">{subject}</p>
        <IoMdCheckmarkCircleOutline size={80} className="text-[#17FBFF]" />
        <Button
          onClick={linkFromTo}
          className="bg-[#17FBFF] font-bold text-[#008183] flex flex-row gap-[15px] w-[15rem] h-[3rem]"
          style={{ borderRadius: '10px' }}
        >
          {buttonText} <FaArrowRight />
        </Button>
      </div>
    </div>
  )
}

export default Popup
