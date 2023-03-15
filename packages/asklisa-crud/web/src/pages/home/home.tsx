import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Button, Header, Icon } from 'semantic-ui-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: '#fff',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <Header as='h1' color='teal' size='huge' style={{ fontSize: '80px', fontWeight: 'bold' }}>
          asktris crud
        </Header>
        <Header as='h2' color='grey'>
          Fullstack Playground and{' '}
          <a href='https://www.asklisa.com.br/' target='_blank' rel='noreferrer'>
            asklisa
          </a>{' '}
          challenge
        </Header>
        <Button onClick={() => navigate('/results', { replace: true })} size='large' style={{ marginTop: '20px' }}>
          Get Started
          <Icon name='arrow right' />
        </Button>
      </div>
    </div>
  );
};

export default Home;
