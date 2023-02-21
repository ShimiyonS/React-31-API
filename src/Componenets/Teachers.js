import { Heading } from '@chakra-ui/react';
import React , { useContext} from 'react'
import Context from '../Context';
import { TableTemplate } from './Tables';

const Teachers = () => {
  const shop = useContext(Context);
  const teachersOnly=shop.allData.filter((e)=>e.who>=80)
  return (
    < >
    <br/>
      <Heading size='lg'><u>Teachers Data</u></Heading>
      <TableTemplate data={teachersOnly}/>
    </>
  )
}

export default Teachers