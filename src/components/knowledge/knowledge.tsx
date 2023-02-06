import './knowledge.scss'
import skillsData from '../../data/skills.json'
import Skill from '../skill/skill'

function Knowledge() {  

  const skillsElem = skillsData.map((skill, index) => 
    <Skill key={index} title={skill.title} info={skill.info} tools={skill.tools} languages={skill.languages} enjoy={skill.enjoy}/>)

  return (
    <div className='knowledge'>
      {skillsElem}
    </div>    
  )
}

export default Knowledge
