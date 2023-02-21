import React, { useContext, useState } from 'react';
import {
  Container,
  Card,
  CardBody,
  Stack,
  Divider,
  Heading,
  CardFooter,
  Button,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Icon,
  useToast,
  Alert,
  AlertIcon,
  Switch,
} from '@chakra-ui/react';
import { FaUserCircle } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Context from '../Context';

function Login() {
  const store = useContext(Context);
  const toast = useToast();
  const [user, setUser] = useState({ userName: '', password: '' });
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();

  const handler = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    // store.setUserData(user)
    if (user.userName === 'friends' && user.password === 'iloveyou') {
      store.setColorMode('dark');
      localStorage.setItem(
        'loggedin',
        'jwejdfodsj-sdfnsdofsdjosdjf-wenrwelrm-saodfjsddom-sndfd'
      );
      navigate('/');
      store.setLoginState(
        'jwejdfodsj-sdfnsdofsdjosdjf-wenrwelrm-saodfjsddom-sndfd'
      );
    } else {
      toast({
        title: 'Login Credentials Invalid',
        position: 'top',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
  };
  const themeChange = () => {
    store.colormode === 'light'? store.setColorMode('dark'): store.setColorMode('light');
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Heading style={{ textAlign: 'left' }}>
          Student Teacher Management
        </Heading>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: 'auto',
            marginRight: '50px',
          }}
        >
          <SunIcon />
          <Switch id="isRequired" isRequired onChange={themeChange} />
          <MoonIcon />
        </div>
      </div>
      <br />
      <Alert status="info" color="black">
        <AlertIcon />
        <b>UserName: &nbsp;</b>
        <span> &nbsp; &nbsp; friends &nbsp; &nbsp; &nbsp; &nbsp;</span>
        <b>password: &nbsp;</b>
        <span> &nbsp; &nbsp; &nbsp; &nbsp; iloveyou</span>
      </Alert>
      <Container
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '70vh',
          width: '100%',
          color: 'black',
        }}
      >
        <Card
          maxW="sm"
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundImage:
              'url(https://img.freepik.com/free-vector/abstract-background-vector-illustration_460848-12729.jpg?w=2000)',
          }}
        >
          <CardBody>
            <Stack mt="6" spacing="3">
              <Heading size="md">Please Login </Heading>
            </Stack>
            <br />
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={FaUserCircle} />}
              />
              <Input
                type="text"
                placeholder="Enter User Name"
                onChange={handler}
                name="userName"
              />
            </InputGroup>
            <br />
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? 'text' : 'password'}
                placeholder="Enter password"
                onChange={handler}
                name="password"
              />
              <InputLeftElement children={<Icon as={RiLockPasswordLine} />} />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </CardBody>
          <Divider />
          <CardFooter>
            <Button variant="solid" colorScheme="blue" onClick={handleSubmit}>
              Log in
            </Button>
          </CardFooter>
        </Card>
      </Container>
    </div>
  );
}

export default Login;
