import React, { useEffect, useState, useCallback } from 'react';
import logo from '../../logo.svg';
import './Main.css';
// import { ParallaxProvider } from 'react-scroll-parallax';
// import { Parallax } from 'react-scroll-parallax';
import fotoAbertura from '../../images/fotoInicialSemFundo.png';

function Main() {
  // const [stars, setStars] = useState(document.querySelector(".main-header"));
  const [init, setInit] = useState(true);

  const ParallaxImage = () => {
    const cards = document.querySelector(".card");
    const images = document.querySelectorAll(".fotoParallax");
    const range = 80;

    const calcValue = (a, b) => (a/b*range-range/2).toFixed(100);

    let timeout;
    document.addEventListener('mousemove', ({x, y}) => {
      if (timeout) {
        window.cancelAnimationFrame(timeout);
      }

      timeout = window.requestAnimationFrame(() => {
        const yValue = calcValue(y, window.innerHeight);
        const xValue = calcValue(x, window.innerWidth);

        cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;

        [].forEach.call(images, (image) => {
          image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
        });
      })
    }, false);
  }

  const EffectStars = useCallback(() => {
    if(init === true) {
      const count = 20;
      const scene = document.querySelector("#teste");
      let i = 0;
      if(scene) {
        while(i < count) {
          let star = document.createElement('i');
          let x = Math.floor(Math.random() * window.innerWidth);

          let duration = Math.random() * 1;
          let h = Math.random() * 100;

          star.style.left = x + 'px';
          star.style.width = 1 + 'px';
          star.style.height = 50 + h + 'px';
          star.style.animationDuration = duration + 's';

          scene.appendChild(star);
          ++i;
        }
      }
      setInit(false)
    }
  }, [init]);

  useEffect(() => {
    EffectStars()
  }, [EffectStars]);

  return (
    <>
      <div id ='teste' className="main-header">
        <div className="card">
          <img src={fotoAbertura} className="fotoParallax" alt="foto" onMouseOver={ParallaxImage} />
        </div>
      </div>
      {!init && EffectStars()}
      <div>
        <img src={logo} className="neutron" alt="logo" />
      </div>
    </>
  );
}

export default Main;
