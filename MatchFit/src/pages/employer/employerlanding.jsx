/* import { userData } from "../../helpers"; */
import { userData } from "../../authUtils";
import { useNavigate } from "react-router-dom";
import './employerlanding.css'


export const Employerlanding = () => {
  const {userName} = userData();
  const navigate = useNavigate();

  return (
    <div className="employerhome">
      <h2>Welcome {userName}</h2>
      <button onClick={() => navigate("/")}>Log out</button>
    </div>
  )
}
