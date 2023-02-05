import Experiments from '../experiments/experiments'
import experimentsData from '../../data/data.json'
import './extra.scss'

function Extra() {  
  const experiments = experimentsData.map((project, index) => 
    <Experiments key={index} info={project.info} gifname={project.gifname} url={project.url} number={index} />)

  return (
    <div className='extra'>
      <div className="title">
        <p>Small personal projects</p>
        <h2>Frontend, but no fun end</h2>
      </div>
       <section className='experiments-container'>
        {experiments}
       </section>
    </div>    
  )
}

export default Extra
