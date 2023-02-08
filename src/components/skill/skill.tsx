import { useEffect, useState } from 'react'
import './skills.scss'

type SKillProps = {
    title: string
    info : string
    tools : string[]
    languages? : string[]
    enjoy? : string[]
}

function Skill(props: SKillProps) {  
const {title, info, tools, languages, enjoy } = props

const [icon, setIcon] = useState('');

useEffect(() => {
const fetchIcon = async () => {
   await import(`../../assets/${title.toLowerCase()}.svg`).then(icon => setIcon(icon.default))
}
  fetchIcon()

}, [title]);


  return (
    <div className='skill'>
        <img src={icon!} alt="" />
        <div className="skill-header">
            <h1>{title}</h1>
            <p>{info}</p>            
        </div>
        {languages &&
            <div className='skill-info'>
                <h3>Languages I know :</h3> 
                <p>{languages.join(', ')}</p>
            </div>
        }
        
        {enjoy &&
            <div className='skill-info'>
                <h3>Designs I enjoy :</h3> 
                <p>{enjoy.join(', ')}</p>
            </div>
        }
      <ul>
        <h3>Tools :</h3>
        {tools.map(tool => <li key={tool}>{tool}</li>)}
      </ul>
    </div>    
  )
}

export default Skill
