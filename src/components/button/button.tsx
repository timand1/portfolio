import './button.scss'

type ButtonProps = {
    text: string
    clickEvent?: (x:any) => void;
}

function Button(props: ButtonProps) {

  return (
    <button onClick={props.clickEvent}>
        {props.text}
    </button>
    
  )
}

export default Button
