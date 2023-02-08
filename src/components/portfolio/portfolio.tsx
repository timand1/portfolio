import './portfolio.scss'
import Project from '../project/project'
import portfolio from '../../data/portfolio.json'

function Portfolio() {  

    const projectElems = portfolio.map((project, index) => 
        <Project 
            key={project.title} 
            index={index}
            shortInfo={project.shortInfo}
            title={project.title} 
            info={project.info} 
        />)

    return (
      <div className='portfolio' id='projects'>
        <h2 className='portfolio-title'>Recent Work</h2>
        {projectElems}
      </div>    
    )
  }
  
  export default Portfolio
  