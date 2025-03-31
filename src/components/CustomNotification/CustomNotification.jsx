import React from 'react'
import { IoIosInformationCircle,IoIosCheckmarkCircle, IoIosWarning, IoIosCloseCircleOutline  } from "react-icons/io";
import { BiSolidErrorCircle } from "react-icons/bi";
import './CustomNotification.css'

const Icons = {
    info: < IoIosInformationCircle/>,
    success: <IoIosCheckmarkCircle/>,
    error: <BiSolidErrorCircle/>,
    warning: <IoIosWarning />

}
const CustomNotification = ({type='', message, onClose=()=>{}}) => {
  return (
    <div className={`Notification ${type}`}
    role="alert"
    aria-live="assertive"
    >
        {Icons[type]}
        {message}
        <IoIosCloseCircleOutline className='closeBtn' onClick={()=>onClose()}/>
    </div>
  )
}

export default CustomNotification