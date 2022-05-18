import React from 'react';
import {Container, Box} from '@mui/material';

const Home = () => {
  return (
    <Container sx={{'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'flex-wrap': 'wrap'}}>
        <Box sx={{'margin': '50%'}}>
            Hello
        </Box>
    </Container>
  )
}

export default Home