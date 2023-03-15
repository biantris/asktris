import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Header } from 'semantic-ui-react';

const PageNotFound = () => {
  return (
    <Grid
      textAlign='center'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyItems: 'center',
        height: '100vh',
      }}
    >
      <img height='10%' src='assets/not-found.gif' alt='No Search Result Found!' />
      <Header as='h2'>Page Not Found</Header>
      <Link to='/'>
        <Button>Go To Home</Button>
      </Link>
    </Grid>
  );
};

export default PageNotFound;
