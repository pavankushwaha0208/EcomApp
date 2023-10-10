import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <div>
      <Grid container sx={{ bgcolor: 'black', color: 'white', py: 3 }} className="bg-black text-white text-center mt-5">
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant='h6' className='pb-5'>Company</Typography>
          <div className="">
            <Button variant='text' className='pb-1' sx={{color:"white"}}>About</Button>
          </div>
          <div className="">
            <Button variant='text' className='pb-1'  sx={{color:"white"}}>Blog</Button>
          </div>
          <div className="">
            <Button variant='text' className='pb-1'  sx={{color:"white"}}>Press</Button>
          </div>
          <div className="">
            <Button variant='text' className='pb-1' sx={{color:"white"}}>Jobs</Button>
          </div>
          <div className="">
            <Button variant='text' className='pb-1' sx={{color:"white"}}>Partner</Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant='h6' className='pb-5'>Solutions</Typography>
          <div className="">
            <Button variant='text' className='pb-1' sx={{color:"white"}}>Marketing</Button>
          </div>
          <div className="">
            <Button variant='text' className='pb-1' sx={{color:"white"}}>Analytics</Button>
          </div>
          <div className="">
            <Button variant='text' className='pb-1' sx={{color:"white"}}>Commerce</Button>
          </div>
          <div className="">
            <Button variant='text' className='pb-1' sx={{color:"white"}}>Insights</Button>
          </div>
          <div className="">
            <Button variant='text' className='pb-1' sx={{color:"white"}}>Supports</Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant='h6' className='pb-5'>Documentation</Typography>
          <div className="">
            <Button variant='text' className='pb-1' sx={{color:"white"}}>Guides</Button>
          </div>
          <div className="">
            <Button variant='text' className='pb-1' sx={{color:"white"}}>Api Status</Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant='h6' className='pb-5'>Legal</Typography>
          <div className="">
            <Button variant='text' className='pb-1' sx={{color:"white"}}>claim</Button>
          </div>
          <div className="">
            <Button variant='text' className='pb-1' sx={{color:"white"}}>privacy</Button>
          </div>
          <div className="">
            <Button variant='text' className='pb-1' sx={{color:"white"}}>terms</Button>
          </div>
        </Grid>
        <Grid item xs={12} className='pt-10'>
          <Typography variant='body2' component='p' align='center'>
            &copy; 2023 My Company. All Rights reserved
          </Typography>
          <Typography variant='body2' component='p' align='center'>
            Made with love by me
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
