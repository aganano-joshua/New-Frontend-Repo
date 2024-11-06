import { Link, useNavigate } from "react-router-dom"

const UserNO = ( { linkTo, linkName, info}) => {
  const navigate = useNavigate();
  const linkUp = () => {
    navigate(linkTo)
  }
  return (
    <div>
         <div className="ready-user">
          <h5>
            {info}? <span onClick={linkUp} className="cursor-pointer">{linkName}</span>
          </h5>
        </div>
    </div>
  )
}

export default UserNO