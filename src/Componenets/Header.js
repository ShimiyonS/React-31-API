import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
  Switch,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../Context';


const Header = () => {
  const navigate = useNavigate();
  const shop = useContext(Context);

  const handleLogout = () => {
    localStorage.setItem('loggedin', 'false');
    shop.setLoginState('false');
    navigate('/login');
    };

    const themeChange = () => {
        
        shop.colormode === 'light'? shop.setColorMode('dark'): shop.setColorMode('light');
    };

  return (
    <Flex minWidth="max-content" alignItems="center" gap="2">
      <Box p="2">
        <Heading size="md">Student Teacher Management</Heading>
      </Box>

      <Spacer />
      <ButtonGroup gap="2">
        <SunIcon />
        <Switch id="isRequired" isRequired onChange={themeChange} />
        <MoonIcon />
        <Button colorScheme="teal" onClick={handleLogout}>
          Log Out
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Header;
