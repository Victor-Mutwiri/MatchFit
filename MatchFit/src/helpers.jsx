import {useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';
import { userData } from './authUtils';


// eslint-disable-next-line react-refresh/only-export-components
export const storeUser = (data) => {
  localStorage.setItem(
    "user",
    JSON.stringify({
      username: data.user.username,
      jwt: data.jwt,
    })
  );
};


export const Protector = ({ Component }) => {
  const navigate = useNavigate();

  const { jwt } = userData();

  useEffect(() => {
    if (!jwt) {
      navigate("/EmployerLogin");
    }
  }, [navigate, jwt]);

  return <Component />;
};
Protector.propTypes = {
  Component: PropTypes.elementType.isRequired,
};