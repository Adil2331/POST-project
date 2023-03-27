import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Container } from '@mui/system';
import { WinModal } from './WinModal';
import axios from 'axios';
import { Pagination, TextField } from '@mui/material';
import debounce from 'lodash.debounce';
import { Link } from 'react-router-dom';

function Post() {
  const [datas, setDatas] = React.useState();
  // const [post, setPost] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = React.useState('');
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    axios
      .get(
        `https://64198aaac152063412c5009e.mockapi.io/items/?page=${page}&limit=10`
      )
      .then((res) => {
        setDatas(res.data);
      });
  }, [page]);

  // React.useEffect(() => {
  //   axios
  //     .get(
  //       `https://64198aaac152063412c5009e.mockapi.io/items`
  //     )
  //     .then((res) => {
  //       setPost(res.data.length);
  //     });
  // }, [post]);

  // React.useEffect(() => {
  //   axios
  //   .put(`https://64198aaac152063412c5009e.mockapi.io/items/$`)
  //   .then((res) => {
  //     console.log(res.data);
  //   })
  // }, [datas]);
  // console.log('datas', datas);

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 1000),
    []
  );

  const onChangeInput = (event) => {
    setSearch(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <Container sx={{ mt: 5 }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginBottom: '30px',
        }}
      >
        <TextField
          // width={80%}
          sx={{ width: '80%' }}
          placeholder={'search.....'}
          value={search}
          onChange={(event) => onChangeInput(event)}
        />
        <Link to="/login">Log out</Link>
      </div>
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
          {datas &&
            datas
              .filter((obj) => {
                const searchLower = searchValue.toLowerCase();
                return (
                  obj.name.toLowerCase().includes(searchLower) ||
                  obj.study.toLowerCase().includes(searchLower) ||
                  obj.work.toLowerCase().includes(searchLower) ||
                  obj.phone
                    .toLowerCase()
                    .replace(' ', '')
                    .includes(searchLower.replace(' ', ''))
                );
              })
              .map((el) => (
                <TableRow key={el.id}>
                  <TableCell>{el.id}</TableCell>
                  <TableCell>{el.name}</TableCell>
                  <TableCell>{el.study}</TableCell>
                  <TableCell>{el.work}</TableCell>
                  <TableCell>{el.phone}</TableCell>
                  <TableCell>
                    <WinModal
                      key={el.id}
                      lists={datas}
                      element={el}
                      setLists={setDatas}
                    />
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
      <Pagination
        sx={{ ml: 50, mt: 5, mb: 5 }}
        count={5}
        page={page}
        limit={10}
        onChange={(_, num) => setPage(num)}
      />
    </Container>
  );
}

export default Post;
