import { DeleteIcon } from '@chakra-ui/icons';
import {
  useDisclosure,
  Button,
  ButtonGroup,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import { useContext } from 'react';
import Context from '../Context';



export function DelButton({ data }) {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const toast = useToast();
  const shop = useContext(Context);
  const handleDelete = e => {
    axios
      .delete('https://636c8f127f47ef51e14ba6ab.mockapi.io/stud-teacher' + e)
      .then(() => {
        shop.getProducts();
        onToggle();
        toast({
          title: 'Person Removed Successfully',
          position: 'top',
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
        <Popover
            returnFocusOnClose={false}
            isOpen={isOpen}
            onClose={onClose}
            placement="right"
            closeOnBlur={false}
        >
            <PopoverTrigger>
            <span></span>
            </PopoverTrigger>
            <PopoverContent bg="#64b5f6">
                <PopoverHeader fontWeight="semibold">Confirmation</PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>Are you sure to Delete?</PopoverBody>
                <PopoverFooter display="flex" justifyContent="flex-end">
                    <ButtonGroup size="sm">
                        <Button variant="outline" onClick={onToggle}>
                            Cancel
                        </Button>
                        <Button colorScheme="red" onClick={() => handleDelete(data)}>
                            Del
                        </Button>
                    </ButtonGroup>
                </PopoverFooter>
            </PopoverContent>
        </Popover>
        <Button onClick={onToggle} colorScheme="red">
            <DeleteIcon bg="transparent" />
        </Button>
    </div>
  );
}
