import { AttachmentIcon, EditIcon, EmailIcon } from '@chakra-ui/icons';
import {
  Container,
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  RadioGroup,
  HStack,
  Radio,
  Button,
  Image,
  Icon,
  useToast,
} from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiBookReader } from 'react-icons/bi';
import { FaMagento, FaAddressCard } from 'react-icons/fa';
import { AiOutlinePhone } from 'react-icons/ai';
import { GrUpdate } from 'react-icons/gr';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Context from '../Context';


export const Form = () => {
  const shop = useContext(Context);
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();
  const toast = useToast();
  const [input, setInput] = React.useState({
    image: '',
    email: '',
    dob: '',
    age: '',
    address: '',
    phone: '',
    gender: '',
    name: '',
    who: '',
  });

  useEffect(() => {
    setInput({
      image: '',
      email: '',
      dob: '',
      age: '',
      address: '',
      phone: '',
      gender: '',
      name: '',
      who: '',
    });
  }, [state]);

  const validationWho = input.who === '';
  const validationurl = input.image === '';
  const validationName = input.name === '';
  const validationGender = input.gender === '';
  const validationDob = input.dob === '';
  const validationEmail = input.email === '';
  const validationAddress = input.address === '';
  const validationPhone = input.phone === '';

  useEffect(() => {
    if (state != null) {
      axios
        .get('https://636c8f127f47ef51e14ba6ab.mockapi.io/stud-teacher/' + id)
        .then(data => setInput(data.data))
        .catch(error => console.log(error));
    }
  }, [state, id]);
  const handleInputChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  // creating user
  const handleSubmit = () => {
    if (
      validationAddress === false &&
      validationDob === false &&
      validationEmail === false &&
      validationGender === false &&
      validationName === false &&
      validationPhone === false &&
      validationWho === false &&
      validationurl === false
    ) {
      axios
        .post('https://636c8f127f47ef51e14ba6ab.mockapi.io/stud-teacher', input)
        .then(() => {
          shop.getProducts();
          toast({
            title: 'Person Created Successfully',
            position: 'top',
            status: 'success',
            duration: 2000,
            isClosable: true,
          });
        })
        .catch(data => console.log(data));
    } else {
      toast({
        title: 'Please Fill the Form And Proceed!',
        position: 'top',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleUpdate = () => {
    if (
      validationAddress === false &&
      validationDob === false &&
      validationEmail === false &&
      validationGender === false &&
      validationName === false &&
      validationPhone === false &&
      validationWho === false &&
      validationurl === false
    ) {
      axios
        .put(
          'https://636c8f127f47ef51e14ba6ab.mockapi.io/stud-teacher/' + id,
          input
        )
        .then(() => {
          shop.getProducts();
          toast({
            title: 'Person Updated !',
            position: 'top',
            status: 'success',
            duration: 2000,
            isClosable: true,
          });
          navigate(-1);
        })
        .catch(error => console.log(error));
    } else {
      toast({
        title: 'Please Fill the Form And Proceed!',
        position: 'top',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="800px">
      {state === null ? (
        <FormLabel
          as="legend"
          bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
        >
          <EditIcon /> Fill the Bellow Form to Add the person into the Database
        </FormLabel>
      ) : state.isView === true ? (
        <FormLabel
          as="legend"
          bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
        >
          <Icon as={BiBookReader} /> Read Only Mode
        </FormLabel>
      ) : (
        <FormLabel
          as="legend"
          bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
        >
          <Icon as={GrUpdate} /> Update
        </FormLabel>
      )}
      <hr />
      <FormControl isInvalid isDisabled={state != null ? state.isView : null}>
        <br></br>
        {/* image */}
        <Image
          borderRadius="full"
          boxSize="150px"
          src={input.image}
          border={'1px solid black'}
          alt=""
        />
        <br />
        <FormLabel as="legend">Who</FormLabel>
        <RadioGroup
          value={input.who < 80 ? '30' : '90'}
          onChange={d => setInput({ ...input, who: d })}
        >
          <HStack spacing="24px">
            <Radio value="30" isInvalid={validationWho}>
              Student
            </Radio>
            <Radio value="90" isInvalid={validationWho}>
              Teacher
            </Radio>
          </HStack>
        </RadioGroup>
        <FormLabel>
          <AttachmentIcon /> Image URL
        </FormLabel>
        <Input
          type="url"
          isInvalid={validationurl}
          value={input.image}
          onChange={handleInputChange}
          name="image"
        />
        {!validationurl ? (
          <FormHelperText>Give your own image.</FormHelperText>
        ) : (
          <FormErrorMessage>Image url is required.</FormErrorMessage>
        )}
        <FormLabel>
          <Icon as={BsFillPersonFill} /> Name
        </FormLabel>
        <Input
          type="text"
          value={input.name}
          onChange={handleInputChange}
          name="name"
          isInvalid={validationName}
        />
        {!validationName ? (
          <FormHelperText>Enter your full name here.</FormHelperText>
        ) : (
          <FormErrorMessage>Name is required.</FormErrorMessage>
        )}
        {/* gender */}
        <FormLabel as="legend">
          <Icon as={FaMagento} /> Gender
        </FormLabel>
        <RadioGroup
          onChange={d => setInput({ ...input, gender: d })}
          value={input.gender}
        >
          <HStack spacing="24px">
            <Radio value="male" isInvalid={validationGender}>
              Male
            </Radio>
            <Radio value="female" isInvalid={validationGender}>
              Female
            </Radio>
            <Radio value="others" isInvalid={validationGender}>
              Others
            </Radio>
          </HStack>
        </RadioGroup>

        <FormLabel>
            Date of Birth
        </FormLabel>
        <Input
          type="text"
          isInvalid={validationDob}
          value={input.dob}
          onChange={handleInputChange}
          name="dob"
        />
        {!validationDob ? (
          <FormHelperText>Enter your Date of Birth.</FormHelperText>
        ) : (
          <FormErrorMessage>Date of Birth is Required.</FormErrorMessage>
        )}
        <FormLabel>
          <EmailIcon /> E-mail
        </FormLabel>
        <Input
          type="email"
          value={input.email}
          isInvalid={validationEmail}
          onChange={handleInputChange}
          name="email"
        />
        {!validationEmail ? (
          <FormHelperText>
            Enter your email to receive all mails.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
        <FormLabel>
          <Icon as={FaAddressCard} /> Address
        </FormLabel>
        <Input
          type="text"
          isInvalid={validationAddress}
          value={input.address}
          onChange={handleInputChange}
          name="address"
        />
        {!validationAddress ? (
          <FormHelperText>Enter your Home Address.</FormHelperText>
        ) : (
          <FormErrorMessage>Address is required.</FormErrorMessage>
        )}
        <FormLabel>
          <Icon as={AiOutlinePhone} /> Phone
        </FormLabel>
        <Input
          type="text"
          isInvalid={validationPhone}
          value={input.phone}
          onChange={handleInputChange}
          name="phone"
        />
        {!validationPhone ? (
          <FormHelperText>Enter Phone Number.</FormHelperText>
        ) : (
          <FormErrorMessage>Phone Number is required.</FormErrorMessage>
        )}
        {/* conditionally render the button based on state */}
        {state != null ? (
          state.isView === true ? (
            <div></div>
          ) : (
            <Button
              mt={4}
              colorScheme="teal"
              type="button"
              onClick={handleUpdate}
            >
              Update
            </Button>
          )
        ) : (
          <Button
            mt={4}
            colorScheme="teal"
            type="button"
            onClick={handleSubmit}
          >
            Create
          </Button>
        )}
      </FormControl>
    </Container>
  );
};
