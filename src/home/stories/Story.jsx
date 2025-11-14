import logo from '../../assets/logo-white.png'
import { useState,useEffect } from 'react';
import { Link,useNavigate, useParams } from 'react-router-dom';
import s from '../Home.module.css'


function Story() {
    const[story,setStory] = useState(null);
    let {id,length} =  useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        fetch('/data/stories.json')
        .then(res => res.json())
        .then(data => setStory(data.find(item => item.id === Number(id))))
    },[id])
    console.log(length)
    if(id <=0 || id > length){
        navigate('/');
    }
    function change(){
        setStory(prev=>({
            ...prev,
            like : !prev.like
        }))
    }
    return (
        story&&<div className={s.story}>
            <div className={s.forlogo}>
                <img className={s.viewLogo} src={logo}/>
            </div>
            <div className={s.view}>
                <img className={s.viewImg} src={story.storyImage}/>
                <img className={s.viewDp}src={story.profileImage}/>
                <p className={s.viewName}>{story.name}<span className={s.viewTime}>{story.time}</span></p>
                <i className={`bi bi-three-dots fs-3 ${s.viewIcons}`}></i>
                <div className={s.reply}>
                    <span className={s.replyInside}>Reply to {story.name}...  </span>
                </div>
                <i className={`bi bi-heart ${s.viewHeart} ${story.like ? s.click : s.no}`}
                onClick={change} ></i>
                <i className={`bi bi-send ${s.viewShare}`}></i>
                <span className={s.arrow}>
                    <i onClick={()=>navigate(`/story/${Number(story.id) - 1}/${length}`)} className={`bi bi-arrow-left-circle-fill ${s.left}`}></i>
                    <i onClick={()=>navigate(`/story/${Number(story.id) + 1}/${length}`)} className={`bi bi-arrow-right-circle-fill ${s.right}`}></i>
                </span>
                
            </div>
            <div className={s.viewDelete}>
                <Link to="/" className='text-white' ><i className={`bi bi-x-lg  ${s.viewDelete}`}></i></Link>
            </div>
            

        </div>
    )
    }

export default Story