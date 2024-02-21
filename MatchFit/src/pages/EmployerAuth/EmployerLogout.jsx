import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const EmployerLogout = () => {
  
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("user", "");
    navigate("/EmployerLogin");
  }, [navigate]);
  return null
}
