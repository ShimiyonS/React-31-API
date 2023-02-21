import { Heading } from '@chakra-ui/react';
import React, { useContext } from 'react'
import Context from '../Context';
import { TableTemplate } from './Tables';


export const Students = () => {
    const shop = useContext(Context);
    const studentsOnly=shop.allData.filter((e)=>e.who<=80)
    return (
        <>
            <br/>
            <Heading size='lg'><u>Students Data</u></Heading>
            {/* <br/> */}
            <TableTemplate data={studentsOnly} />
        </>
    )
}
