'use client'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Mail from '@mui/icons-material/Mail';
import Phone from '@mui/icons-material/PhoneAndroidOutlined';

export default function Footer() {
  return (
    <Box>
      <Grid
        container
        rowSpacing={1}
        className='footer'
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        direction="column"
        alignItems="center"
        justifyContent="center"
        color={'grey'}
      >
        <Grid item xs={8} md={8}>
          <a href='https://www.linkedin.com/company/arow-building-solutions/'><LinkedInIcon/> {'LinkedIn'}</a>
        </Grid>
        <Grid item xs={8} md={8}>
          <a href="mailto:consulting@AROWbuildingsolutions.com"><Mail/> {'consulting@AROWbuildingsolutions.com'}</a>
        </Grid>
        <Grid item xs={8} md={8}>
          <Phone/> {'0406 478 542'}
        </Grid>
      </Grid>
    </Box>
  );
}