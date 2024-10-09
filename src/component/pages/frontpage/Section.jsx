import React from 'react';
import { Container, Box, Typography, Grid, Button } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';
import HelpIcon from '@mui/icons-material/Help';
import { useNavigate } from 'react-router-dom';
const Section = () => {
  const Cate = localStorage.getItem('Cate');
  const Subcate = localStorage.getItem('Subcate');
  const QA = localStorage.getItem('QA')

  const nevigate = useNavigate();
  const handleDatac = () => {
    nevigate('/C')
  }
  const handleDatas = () => {
    nevigate('/S')
  }
  const handleDataq = () => {
    nevigate('/Q')
  }
  return (
  <>
   <Box class="section0">
     <Container>
      <Box>
          <Typography variant='h2'sx={{marginTop:'70px', textAlign:'center'}}>Quick Start for <br />interview practice</Typography>
          <Typography sx={{marginTop:'15px' , textAlign:'center'}}>We are team of talented designers making websites with Bootstrap</Typography>
          <Typography sx={{display:'flex',justifyContent:'center'}}><Button variant='contained' sx={{marginTop:'20px' , marginBottom:'100px'}}>Get Started</Button></Typography>
      </Box>
     </Container>
   </Box>
   <Box class="section1">
      <Container>
        <Grid container spacing={2} sx={{marginBottom:'90px'}}>
            <Grid  item xs={12} sm={6} md={4} sx={{padding:'8px'}}>
              <Box class="card " sx={{py:2}} onClick={handleDatac} >
                <CategoryIcon  sx={{color:'#1976d2',display:'flex',alignItems:'center',fontSize:'40px',margin:'10px 0 0 160px' }} />
                <Typography variant='h4' sx={{fontSize:'1.3rem',lineHeight:'30px',fontWeight:'600',margin:'1rem 0 1rem 0',textAlign:'center'}}>Category</Typography>
                <Typography variant='body1' sx={{marginBottom:'10px',textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur<br /> adipisicing elit. Odit, ducimus.</Typography>
              </Box>
            </Grid>
            <Grid  item xs={12} sm={6} md={4} sx={{padding:'8px'}} onClick={handleDatas}>
              <Box class="card" sx={{py:2}}>
                <ControlPointDuplicateIcon sx={{color:'#1976d2',display:'flex',alignItems:'center',fontSize:'40px',margin:'10px 0 0 160px'}} />
                <Typography variant='h4' sx={{fontSize:'1.3rem',lineHeight:'30px',fontWeight:'600',margin:'1rem 0 1rem 0',textAlign:'center'}}>Sub-Category</Typography>
                <Typography variant='body1' sx={{marginBottom:'10px',textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur<br /> adipisicing elit. Odit, ducimus.</Typography>
              </Box>
            </Grid>
            <Grid  item xs={12} sm={6} md={4} sx={{padding:'8px'}} onClick={handleDataq}>
              <Box class="card" sx={{py:2}}>
                <HelpIcon sx={{color:'#1976d2',display:'flex',alignItems:'center',fontSize:'40px',margin:'10px 0 0 160px'}} />
                <Typography variant='h4' sx={{fontSize:'1.3rem',lineHeight:'30px',fontWeight:'600',margin:'1rem 0 1rem 0',textAlign:'center'}}>Que-Ans</Typography>
                <Typography variant='body1' sx={{marginBottom:'10px',textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur<br /> adipisicing elit. Odit, ducimus.</Typography>
              </Box>
            </Grid>
        </Grid>
      </Container>
   </Box>
   <Box class="section2">
      <Container>
          <Grid container>
            <Grid item xs={6}>
              <Box>
                  <img src="https://bootstrapmade.com/content/demo/Arsha/assets/img/skills.png" width="100%" alt=''></img>
              </Box>
            </Grid>
            <Grid item xs={6} sx={{paddingLeft:'50px'}}>
              <Box>
                <Typography variant='h4' sx={{fontSize:'40px',fontWeight:'600',letterSpacing:'2px'}}>Develop an Enjoyble
                <b class="de"> Learning</b> Roadmap</Typography>
                <Typography sx={{marginTop:'20px'}} variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vel nam pariatur autem, illo magnam! Voluptatibus doloremque eaque voluptates nesciunt a sequi earum architecto iste nostrum! Nisi voluptas vero deleniti cupiditate consequuntur modi perferendis. Consectetur mollitia eius soluta repudiandae illo veniam praesentium tempore? Ipsum cumque, incidunt nesciunt consequatur sint perspiciatis?
                </Typography>
              </Box>
            </Grid>
          </Grid>
      </Container>
   </Box>
   <hr/>
   <Box class="dashboard">
      <Container>
      <Grid container spacing={12}>
        
                <Grid  item xs={12} sm={6} md={4} sx={{padding:'8px'}}>
                    <Box sx={{padding:'20px'}}>
                        <Typography variant='h3' sx={{textAlign:'center',fontSize:'3rem',fontWeight:'700' , color:'#2e2c2c',marginBottom:'10px'}}>{Cate}</Typography>
                        <Typography variant='h5' sx={{textAlign:'center',fontSize:'1.5rem',fontWeight:'700',marginBottom:'20px', color:'#2e2c2c'}}>Total Category</Typography>
                        
                    </Box>
                </Grid>
                <Grid  item xs={12} sm={6} md={4} sx={{padding:'8px'}}>
                    <Box sx={{padding:'20px'}}>
                    <Typography variant='h3' sx={{textAlign:'center',fontSize:'3rem',fontWeight:'700', color:'#2e2c2c',marginBottom:'10px'}}>{Subcate}</Typography>
                        <Typography variant='h5' sx={{textAlign:'center',fontSize:'1.5rem',fontWeight:'700',marginBottom:'20px', color:'#2e2c2c'}}>Total Sub Category</Typography>
                    </Box>
                </Grid>
                <Grid  item xs={12} sm={6} md={4} sx={{padding:'8px'}}>
                    <Box sx={{padding:'20px' }}>
                        <Typography variant='h3' sx={{textAlign:'center',fontSize:'3rem',fontWeight:'700', color:'#2e2c2c',marginBottom:'10px'}}>{QA}</Typography>
                        <Typography variant='h5' sx={{textAlign:'center',fontSize:'1.5rem',fontWeight:'700',marginBottom:'20px', color:'#2e2c2c'}}>Total Q / A</Typography>
                    </Box>
                </Grid>
      </Grid>
      </Container>
   </Box>
   
   <Box class="section1">
        <Container>
            <Grid container>
                <Grid xs={12}>
                    <Typography variant='h4' sx={{color:'#1976d2',textAlign:'center',fontSize:'30px',fontWeight:'600',marginBottom:'20px'}}>Check our latest work</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid xs={4} sx={{padding:'13px'}}>
                      <img src='https://bootstrapmade.com/content/demo/FlexStart/assets/img/portfolio/app-1.jpg' width="100%"></img>
                </Grid>
                <Grid xs={4} sx={{padding:'13px'}}>
                      <img src='https://bootstrapmade.com/content/demo/FlexStart/assets/img/portfolio/app-2.jpg' width="100%"></img>
                </Grid>
                <Grid xs={4} sx={{padding:'13px'}}>
                      <img src='https://bootstrapmade.com/content/demo/FlexStart/assets/img/portfolio/app-3.jpg' width="100%"></img>
                </Grid>
                <Grid xs={4} sx={{padding:'13px'}}>
                      <img src='https://bootstrapmade.com/content/demo/FlexStart/assets/img/portfolio/books-1.jpg' width="100%"></img>
                </Grid>
                <Grid xs={4} sx={{padding:'13px'}}>
                      <img src='https://bootstrapmade.com/content/demo/FlexStart/assets/img/portfolio/books-2.jpg' width="100%"></img>
                </Grid>
                <Grid xs={4} sx={{padding:'13px'}}>
                      <img src='https://bootstrapmade.com/content/demo/FlexStart/assets/img/portfolio/books-3.jpg' width="100%"></img>
                </Grid>
            </Grid>
        </Container>
   </Box>

   
  </>
  
  );
};

export default Section