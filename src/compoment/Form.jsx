import React from 'react'
import { Card, CardContent, Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Box } from '@mui/system';

function Form() {

  const [values, setValues] = React.useState({
    
    password: '',
    
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  return (
    <Box
      component="form"

      sx={{
        width:600,
        height:500,
        display: 'flex',
        bgcolor:"",
      flexDirection: 'coloum',
        '& .MuiTextField-root': { m: 2, width: '10' },
      }}
      noValidate
      autoComplete="off"
    >


      <div>
        <TextField id="standard-basic" label="First Name" variant="standard" />
        <TextField id="standard-basic" label="Last Name" variant="standard" />
     
      
      <TextField id="input-with-sx" label="Username" variant="standard" />


      <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
  
</FormGroup>
 </div>

 <Box sx={{ display: 'flex', alignItems: '' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="user name " variant="standard" />
      </Box>

    </Box>
  )
}

export default Form