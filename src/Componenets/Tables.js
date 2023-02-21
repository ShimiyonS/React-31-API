import { EditIcon, ViewIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Badge,
  Button,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DelButton } from './deleteButtonCo';

export const TableTemplate = ({ data }) => {
  const navigate = useNavigate();
  return (
    <TableContainer>
      <br />
      <Table variant="simple">
        <Thead>
          <Tr bg="#A0AEC0">
            <Th>Id</Th>
            <Th>Image</Th>
            <Th>Name</Th>
            <Th>gender</Th>
            <Th>D.O.B</Th>
            <Th>email</Th>
            <Th>address</Th>
            <Th>Phone</Th>
            <Th>Who</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((person, id) => (
            <Tr key={id}>
              <Td>{person.id}</Td>
              <Td>
                <Avatar name="Dan Abrahmov" src={person.image} />
              </Td>
              <Td>{person.name}</Td>
              <Td>{person.gender}</Td>
              <Td>{person.dob.slice(0, 10)}</Td>
              <Td>{person.email}</Td>
              <Td>{person.address}</Td>
              <Td>{person.phone}</Td>
              <Td>
                {person.who < 80 ? (
                  <Badge colorScheme="green">Student</Badge>
                ) : (
                  <Badge colorScheme="red">Teacher</Badge>
                )}
              </Td>
              <Td>
                <Stack direction="row" spacing={3}>
                  <Button
                    colorScheme="blue"
                    onClick={() =>
                      navigate(`/form/${person.id}`, {
                        state: { isView: true },
                      })
                    }
                  >
                    <ViewIcon bg="transparent" />
                  </Button>
                  <Button
                    colorScheme="green"
                    onClick={() =>
                      navigate(`/form/${person.id}`, {
                        state: { isView: false },
                      })
                    }
                  >
                    <EditIcon bg="transparent" />
                  </Button>
                  <DelButton data={person.id} />
                </Stack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
