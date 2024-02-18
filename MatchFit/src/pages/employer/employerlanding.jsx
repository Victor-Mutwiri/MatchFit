import { userData } from "../../helpers";

export const Employerlanding = () => {
  const {userName} = userData()
  return (
    <div>
      <h2>Welcome {userName}</h2>
    </div>
  )
}
