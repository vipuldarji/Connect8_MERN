import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5 rounded-pill'
      ></Form.Control>
      {/* <i className='fa fa-search' bg='dark'></i> */}
      <Button
        className='fa fa-search'
        variant='dark'
        id='button-addon2'
      ></Button>
    </Form>
  );
};

export default SearchBox;
