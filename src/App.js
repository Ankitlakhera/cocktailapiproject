import {
  BrowserRouter ,
  Routes,
  Route,

}
  from 'react-router-dom';
import { Box } from '@mui/material';
import { Stack } from '@mui/system';

import Homepopup from './compoment/Homepopup'
import HomePage from './page/Homepage';
import SearchAppBar from './compoment/SearchAppBar';
import ResponsiveAppBar from './compoment/SearchAppBar';

// import { BrowserRouter } from 'react-router-dom';
// import Home from './compoment/Home';
// import Axiosdata from './compoment/Axiosdata';
// import FeedProfile from './container/feed/FeedContainer';
 //loda lassan

function App() {
  return (
    <Box>
    <BrowserRouter>
   

       
          <Stack direction="row" justifyContent="space-around">
            <Routes>
              <Route exact path="/" element={<ResponsiveAppBar/>}></Route>
              <Route exact path='/homepage' element={<HomePage />}></Route>
              <Route exact path='/homepopup' element={<Homepopup />}></Route>
            </Routes>
          </Stack>



        
      
    </BrowserRouter>
    </Box>
  );
}

export default App;
