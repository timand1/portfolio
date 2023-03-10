import Experiments from '../experiments/experiments'
import experimentsData from '../../data/experiments.json'
import './extra.scss'
import { useEffect, useState } from 'react';
import anime from "animejs";

function Extra() {  
  const experiments = experimentsData.map((project, index) => 
    <Experiments key={index} info={project.info} gifname={project.gifname} url={project.url} number={index} />)


  const [offset, setOffset] = useState<number>(0);
  const setScroll = () => {
    setOffset(window.scrollY);
  };

  useEffect(() => {
    const overlayEl = document.querySelector('.extra-overlay')
    const elScrollY = overlayEl?.getBoundingClientRect().y!
    const elHeight = overlayEl?.getBoundingClientRect().height!
    const scrollPercentage = (window.innerHeight - elScrollY) / elHeight
  
    const overlayMobile = document.querySelector('.mobile--overlay')
    const scrollYMobile = overlayMobile?.getBoundingClientRect().y!
    const elHeightMobile = overlayMobile?.getBoundingClientRect().height!
    const scrollPercentageMobile = ((window.innerHeight - scrollYMobile)) / elHeightMobile

    let animation = anime({
      targets: '.extra-overlay',
      translateX: [0, "-100%"],
      delay: function(el, i) { return i * 100; },
      elasticity: 200,
      easing: 'easeInOutSine',
      autoplay: false,
      duration: 10000
    });

    if(scrollPercentageMobile > 0.2) {
      overlayMobile?.classList.add('mobile-animation')
    }

    if(elScrollY < 900) {
      animation.seek(scrollPercentage * animation.duration);
    }

 


      window.addEventListener("scroll", setScroll);
      return () => {
      window.removeEventListener("scroll", setScroll);
    };

  }, [offset])

  return (
    <div className='extra' id='experiments'>
      <div className="title">
        <p>Small personal projects</p>
        <h2>Bringing imagination to life through small projects is fun</h2>
      </div>
       <section className='experiments-container'>
        <div className='extra-overlay'></div>
        <div className='mobile--overlay'></div>
        {experiments}
       </section>
    </div>    
  )
}

export default Extra
