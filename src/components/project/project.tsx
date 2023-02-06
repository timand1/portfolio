import './project.scss'
import Button from '../button/button'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import anime, { AnimeInstance } from "animejs";
import projectData from '../../data/portfolio.json'
import { faWindows } from '@fortawesome/free-brands-svg-icons';
type ProjectProps = {
    title: string
    shortInfo : string
    info: string
    index: number
}

function Project(props: ProjectProps) {  
const { title, shortInfo, index } = props

const [offset, setOffset] = useState<number>(0);
const [navCSS, setNavCSS] = useState<boolean>(false)
const setScroll = () => {
  setOffset(window.scrollY);
};

useEffect(() => {
  const scrollHeight:number = window.pageYOffset;
  const projectEls = document.querySelectorAll('.project')
  projectEls.forEach(el => {
    // el.scrollTop
    const elScrollY = el.getBoundingClientRect().y
    console.log(    el.getBoundingClientRect().y)
    
    
    // if(el.classList.contains('project-1')) {
    //   console.log('NUMMBER 1 - ' + (scrollHeight - elScrollY));

    // }
    // if(el.classList.contains('project-2')) {
    //   console.log('NUMMBER 2 - ' + (scrollHeight - elScrollY));

    // }
    // if(el.classList.contains('project-3')) {
    //   console.log('NUMMBER 3 - ' + (scrollHeight - elScrollY));

    // }
    // if(el.classList.contains('project-4')) {
    //   console.log('NUMMBER 4 - ' + (scrollHeight - elScrollY));

    // }

    // if(el.classList.contains('project-5')) {
    //   console.log('NUMMBER 5 - ' + (scrollHeight - elScrollY));

    // }

    // Y ÄR NÄR TOP PÅ SKÄRM TRÄFFAR ELEMENTET. SÅ NÄR Y ÄR 0 ÄR DET I KANTENT PÅ SKÄRMEN
    
    const projectIndex = parseInt(el.classList[1].substring(el.classList[1].length - 1));
    
    if(elScrollY >= -200 && elScrollY <= 100) {
      if(projectIndex % 2 == 0) {
        anime({
          targets: el,
          translateX: ['-200%', '-5vw'],
          duration: 2000,
          easing: 'easeInOutSine'
        })

      } else {
      anime({
        targets: el,
        translateX: ['200%', '5vw'],
        duration: 2000,
        easing: 'easeInOutSine'
      })
    }
  }
  })
 
  window.addEventListener("scroll", setScroll);
  return () => {
    window.removeEventListener("scroll", setScroll);
  };
  
}, [offset])

const navigate = useNavigate()

const [image, setImage] = useState<string>('')

const titleName = title.replace(/\s/g, '').toLowerCase()

useEffect(() => {
  const fetchImage = async () => {
     await import(`../../assets/${titleName}.png`).then(image => setImage(image.default))
  }
    fetchImage()
  
  }, [title]);

    return (
      <div className={`project project-${index + 1}`}>
        <div className='project-image' style={{ backgroundImage: `url(${image})` }}></div>
        <h2>{title}</h2>
        <p>{shortInfo}</p>

        <Button text="See project" clickEvent={() => navigate(`/${titleName}`)} />
      </div>    
    )
  }
  
  export default Project
  