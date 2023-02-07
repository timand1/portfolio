import './project.scss'
import Button from '../button/button'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type ProjectProps = {
    title: string
    shortInfo : string
    info: string
    index: number
}

function Project(props: ProjectProps) {  
const { title, shortInfo, index } = props

const [offset, setOffset] = useState<number>(0);
const setScroll = () => {
  setOffset(window.scrollY);
};

useEffect(() => {
  const projectEls = document.querySelectorAll('.project')

  for(let i = 0; i < projectEls.length; i++) {
    if(projectEls[i].getBoundingClientRect().y - window.innerHeight <= 100) {
      projectEls[i].classList.add('scrolled-in')
    }
  }

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
        <div className='project-index'>0{index + 1}</div>
        <div className='project-image' style={{ backgroundImage: `url(${image})` }}></div>
        <div className='project-info'>
          <h2>{title}</h2>
          <p>{shortInfo}</p>
          <Button text="See project" clickEvent={() => navigate(`/${titleName}`)} />
        </div>

      </div>    
    )
  }
  
  export default Project
  