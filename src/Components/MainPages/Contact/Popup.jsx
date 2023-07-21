import { useEffect } from "react";
// Styling
import "./popup.css";
// icons
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Popup = ({ showPopup, SetShowPopup, isError }) => {
  useEffect(() => {
    if (showPopup) {
      setTimeout(() => {
        SetShowPopup(false);
      }, 1500);
    }
  }, [])
  const handleClose = () => {
    SetShowPopup(false);
  }
  return (
    <>
      <div className="popup-container">
        <div className="popup">
          <div className="text">
            <div className="icon-container">
              <AiOutlineCloseCircle className="close-icon" onClick={handleClose} />
            </div>
            {
              isError ? <h4>please try again</h4> : <h4>Thanks for your message</h4>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Popup