import React from 'react';
// import './Post.modul.scss'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import Button from '@mui/material/Button';
import { Container } from '@mui/system';
import items from '../data/items';
// import { Modal } from './Modal';
import { WinModal } from './WinModal';



function Post() {
  const [lists, setLists] = React.useState(items,  {newName: ''})
  console.log(lists)

  return (
    <Container sx={{mt:5}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Study</TableCell>
            <TableCell>Work</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((el) => (
            <TableRow key={el.id}>
              <TableCell>{el.id}</TableCell>
              <TableCell>{el.name}</TableCell>
              <TableCell>{el.study}</TableCell>
              <TableCell>{el.work}</TableCell>
              <TableCell>{el.phone}</TableCell>
              <TableCell >
                <WinModal key={el.id} {...el}  lists={lists} setLists={setLists}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}

export default Post;
