import {useState,useEffect} from "react"
import s from '../Home.module.css'
import {useNavigate} from "react-router-dom"

function Stories() {
    const[stories,setStories] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch('/data/stories.json')
        .then(res => res.json())
        .then(data =>setStories(data))
    },[])
    
    let length = 0;
    if(stories){
        length = stories.length;
    }
  return (
    stories ? 
        (<div className={s.stories}>
            {stories.map((data)=>(
                <div onClick={()=>navigate(`/story/${data.id}/${length}`)}className="me-3" key={data.id}>
                    <div className={s.border}><img className={s.storydp}src={data.profileImage}/></div>
                    <p className={s.storyname}>{data.name}</p>
                </div>
            ))}
        </div>)
    :<p></p>
        
  )
}

export default Stories