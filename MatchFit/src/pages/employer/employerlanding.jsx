/* import { userData } from "../../helpers"; */
import { userData } from "../../authUtils";


export const Employerlanding = () => {
  const {userName} = userData()
  return (
    <div>
      <h2>Welcome {userName}</h2>
    </div>
  )
}
