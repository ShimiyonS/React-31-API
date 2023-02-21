import { SearchIcon } from '@chakra-ui/icons';
import { Heading, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import Context from '../Context';
import { TableTemplate } from './Tables';


export const All = () => {
  const shop = useContext(Context);
  const [serchResult, setSearchResult] = useState(shop.allData);
  const handleChange = txt => {
    const text = txt.target.value;
    setSearchResult(
      shop.allData.filter(
        person =>
            person.name.toUpperCase().includes(text.toUpperCase()) ||
            person.gender.toUpperCase() === text.toUpperCase() ||
            person.email.toUpperCase().includes(text.toUpperCase())
      )
    );
  };
  useEffect(() => {
    setSearchResult(shop.allData);
  }, [shop.allData]);

  return (
    <div>
      <br />
      <Heading size="lg">
        <u>All Students and Teacher are listed here.</u>
      </Heading>
      <br></br>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          bgColor={'#4299E1'}
          borderRadius={'5px'}
          children={<SearchIcon bg="transparent" color="white" />}
        />
        <Input
          type="tel"
          placeholder=" Enter Name to Search"
          w={'500px'}
          onChange={handleChange}
        />
      </InputGroup>
      <div>
        <TableTemplate data={serchResult} />
      </div>
    </div>
  );
};
