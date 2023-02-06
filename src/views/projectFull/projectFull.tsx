import './projectFull.scss'
import Button from '../../components/button/button'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import projectData from '../../data/portfolio.json'
import Navbar from '../../components/navbar/navbar'

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
const [nextProject, setNextProject] = useState<string>('')

useEffect(() => {
    const fetchImage = async () => {
        await import(`../../assets/${title}.png`).then(image => setImage(image.default))
    }
    fetchImage()

    const getNextProject = () => {
      const index: number = projectData.findIndex(el => el.title.replace(/\s/g, '').toLowerCase() === title)      
      projectData[index + 1] ?
        setNextProject(projectData[index + 1].title.replace(/\s/g, '').toLowerCase() )
      : 
        setNextProject(projectData[0].title.replace(/\s/g, '').toLowerCase() )      
      
    }
    getNextProject()
    setProject(projectData.find(el => el.title.replace(/\s/g, '').toLowerCase() === title)!)
    
  }, [title]);

    return (
      <div className='project-container'>
        <Navbar />
        <div className='project-full'>
          <div className='project-image' style={{ backgroundImage: `url(${image})` }}></div>
          <h2>{title}</h2>
          <p>{project?.info}</p>
          <div className='project-extra'>
            <p><span>what</span> {project?.personal.join(', ')}</p>
            <p><span>type</span> {project?.type}</p>
            <p><span>when</span> {project?.time}</p>
          </div>
          <div className='project-links'>
          {project!.url.length > 0 && 
              <a href={project?.url}><Button text='Link to project' /></a>
          }
          <a href={project?.github[0]}><Button text='Github' /></a>
          {project?.github.length > 1 && 
            <a href={project?.github[1]}><Button text='Github Database' /></a>
          }
          </div>
        </div>
      
        <footer onClick={() => navigate(`/${nextProject}`)}>
          <h3>Next project HÖGERPIL <span>{nextProject}</span></h3>
        </footer>
      </div>    
    )
  }
  
  export default ProjectFull