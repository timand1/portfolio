import './projectFull.scss'
import Button from '../../components/button/button'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import projectData from '../../data/portfolio.json'
import logo from '../../assets/logo.svg'

type ProjectProps = {
    title: string
    info: string
    type : string
    personal : string[]
    time : string
    url: string
    github: string[]
    shortInfo?: string
}

function ProjectFull() {  
const { title } = useParams()
const navigate = useNavigate()

const [image, setImage] = useState<string>('')
const [project, setProject] = useState<ProjectProps>(projectData.find(el => el.title.replace(/\s/g, '').toLowerCase() === title)!)
const [nextProject, setNextProject] = useState<ProjectProps>()
const [prevProject, setPrevProject] = useState<ProjectProps>()
useEffect(() => {
  
  const fetchImage = async () => {
        await import(`../../assets/${title}.png`).then(image => setImage(image.default))
    }
    fetchImage()

    const index: number = projectData.findIndex(el => el.title.replace(/\s/g, '').toLowerCase() === title)      
    const getNextProject = () => {
      projectData[index + 1] ?
        setNextProject(projectData[index + 1] )
      : 
        setNextProject(projectData[0] )      
    }
    const getPrevProject = () => {
      projectData[index - 1] ?
      setPrevProject(projectData[index - 1] )
      : 
      setPrevProject(projectData[projectData.length - 1] )      
    }
    setProject(projectData[index])
    getPrevProject()
    getNextProject()    
  }, [title]);

    return (
      <div className='project__container'>
        <div className='project__navbar'>
            <img onClick={() => navigate('/')} src={logo} alt="Tim Andersson Logo" />
          <div className='project__navbar--links'>
            <p onClick={() => navigate('/')}>Home</p>
            <a href="mailto:timandersson22@live.se">Contact</a>
          </div>
        </div>    
        <div className='project__full'>
          <div className='project__full--left'>
            <h2>{project?.title}</h2>
            <div className='project__image--mobile' style={{ backgroundImage: `url(${image})` }}></div>
            <p className='project__full--info'>{project?.info}</p>
            <p className='project__full--shortinfo'>{project?.shortInfo}</p>
            <div className='project__full--links'>
            {project!.url.length > 0 && 
                <a href={project?.url}><Button text='Project' /></a>
            }
            {project?.github.length > 0 && 
              <a href={project?.github[0]}><Button text='Github' /></a>
            }
            {project?.github.length > 1 && 
              <a href={project?.github[1]}><Button text='Github Database' /></a>
            }
            </div>
            <div className='project__full--extra'>
              <p><span>type</span> {project?.type}</p>
              <p><span>what</span> {project?.personal.join(', ')}</p>
              <p><span>when</span> {project?.time}</p>
            </div>

          </div>
            <div className='project__full--right' style={{ backgroundImage: `url(${image})` }}></div>
        </div>
      
        <footer className='project__full--footer'>
          <div className='project__footer--text'>
          <div className='project__full--nav project__full--prev'>
            <svg onClick={() => navigate(`/${prevProject?.title.replace(/\s/g, '').toLowerCase()}`)} width="18px" height="17px" viewBox="-1 0 18 17">
              <g>
                <polygon className="arrow" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
                <polygon className="arrow-fixed" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
                <path d="M-4.58892184e-16,0.56157424 L-4.58892184e-16,16.1929159 L9.708,8.33860465 L-1.64313008e-15,0.56157424 L-4.58892184e-16,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z"></path>
              </g>
            </svg>
            <div>
            <h2>Previous</h2>
            <p>{prevProject?.title}</p>
          </div>
          </div>
          <div className='project__full--nav project__full--next'>
          <div>
            <h2>Next</h2>
            <p>{nextProject?.title}</p>
          </div>
            <svg onClick={() => navigate(`/${nextProject?.title.replace(/\s/g, '').toLowerCase()}`)} width="18px" height="17px" viewBox="-1 0 18 17">
              <g>
                <polygon className="arrow" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
                <polygon className="arrow-fixed" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
                <path d="M-4.58892184e-16,0.56157424 L-4.58892184e-16,16.1929159 L9.708,8.33860465 L-1.64313008e-15,0.56157424 L-4.58892184e-16,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z"></path>
              </g>
            </svg>
          </div>
            </div>
        </footer>
      </div>    
    )
  }
  
  export default ProjectFull