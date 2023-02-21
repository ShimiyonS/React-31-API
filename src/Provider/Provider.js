import { useEffect, useState } from 'react';
import axios from 'axios';
import Context from '../Context';


export default function Provider(props) {
  const [colormode, setColorMode] = useState('light');

  localStorage.setItem('chakra-ui-color-mode', 'undefined');

  const [loginState, setLoginState] = useState(
    localStorage.getItem('loggedin')
  );

  const [allData, setAllData] = useState([]);

  const getProducts = () => {
    axios
      .get('https://636c8f127f47ef51e14ba6ab.mockapi.io/stud-teacher')
      .then(value => setAllData(value.data))
      .catch(err => console.log(err));
  };
  useEffect(() => getProducts(), []);

  return (
    <Context.Provider
      value={{
        loginState,
        setLoginState,
        colormode,
        setColorMode,
        allData,
        setAllData,
        getProducts,
      }}
    >
    {props.children}
    </Context.Provider>
  );
}
