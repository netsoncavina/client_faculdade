import "./popup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
export default function PopUp(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          <FontAwesomeIcon icon={faXmark} size="2x" />
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}
