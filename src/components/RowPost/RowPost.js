import React ,{useEffect,useState} from "react";
import "./RowPost.css";
import { imageURL} from '../Constants/Constants'
import { instance } from '../../Axios';


const RowPost = (props) => {
  const [movie, setMovie] = useState([])
  useEffect(()=>
  {
    instance.get(props.url).then((response)=>
    {
      console.log(response.data.results[0],'++++');
      setMovie(response.data.results)
    })
  },[])
  return (
    <>
      <h2>{props.title}</h2>
      <div className="posters">
        {movie.map((obj)=>
       
          (
            console.log(obj),
            <img className="poster"
          src={`${imageURL+obj.backdrop_path}`} alt=""/>)
       )}
     
       
      </div>
    </>
  );
};

export default RowPost;
