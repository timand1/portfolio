import './experiments.scss'
import {useEffect, useState} from "react";

type ExperimentsProps = {
  info: string
  gifname: string
  number: number
  url: string
}

function Experiments(props: ExperimentsProps) {
  const { gifname, info, number, url } = props

  const [gif, setGif] = useState<string>(gifname);

  useEffect(() => {
    import(`../../assets/gifs/${gif}.gif`)
      .then((gif) => setGif(gif.default))
      .catch((err) => console.error(err));
    }, []);

    return (
      <a className='experiment' href={url} target="_blank">
        <div className='experiment-number'>
          <span></span>
          <p>{number + 1}</p>
        </div>
        <div className='gif-container'>          
            <img src={gif} alt="Project Gif" />
        </div>
        <div className='title-container'>
          <p>title</p>
          <p>{info}</p>
        </div>
      </a>
    )
  }
  
  export default Experiments