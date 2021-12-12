import React from 'react';
import logo from '../../logo.svg';
import './Main.css';
// import { ParallaxProvider } from 'react-scroll-parallax';
// import { Parallax } from 'react-scroll-parallax';
// import fotoAbertura from '../../images/fotoInicialSemFundo.png';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';

function Main() {

  // const ParallaxImage = () => (
  //   <>
  //     <ParallaxProvider>
  //       <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
  //         <Image src={fotoAbertura} />
  //         {/* <Card sx={{ maxWidth: 345, backgroundColor: '#282c34' }}>
  //           <CardMedia
  //           component="img"
  //           height="140"
  //           image={fotoAbertura}
  //           alt="green iguana"
  //           />
  //         </Card> */}
  //       </Parallax>
  //     </ParallaxProvider>
  //   </>
  // );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

export default Main;
