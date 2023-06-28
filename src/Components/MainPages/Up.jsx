// Styling
import { useState } from "react";
import "./up.css";
// Icon
import { FaArrowUp } from "react-icons/fa";

const Up = () => {
    const [scroll, setScroll] = useState(false)
    window.onscroll = () => {
        window.scrollY >= 500? setScroll(true) : setScroll(false) ;
    }
    const handleScroll = () => {
        window.scrollTo({
            top: 0,
        })
    }

  return (
    <span className={`up ${scroll&& "show"}`} onClick={handleScroll}>
        <FaArrowUp />
    </span>
  )
}

export default Up