import { useEffect, useState } from "react"
import more from '../../assets/forfeeds/more.png'
import heart from '../../assets/forfeeds/heart.png'
import redHeart from '../../assets/forfeeds/red-heart.png'
import message from '../../assets/forfeeds/message.png'
import share from '../../assets/forfeeds/telegram.png'
import bookmark from '../../assets/forfeeds/bookmark.png'
import smile from '../../assets/forfeeds/smile.png'
import f from '../Home.module.css'

function Feeds() {
    const[post,setPost] = useState(null);
    
    useEffect(()=>{
        fetch('./data/posts.json')
        .then(res => res.json())
        .then(data => setPost(data))
    },[])

    function change(id){
        setPost(prevPosts=>(
            prevPosts.map(post =>
            post.id === id ? { ...post, like: !post.like } : post)
        ))
    }

    return (
        post&&(<div className={f.main}>
            {post.map((data)=>(
                <div className={f.post}key={data.id} >
                    <div className={f.top}>
                        <div>
                            <img className={f.dp}src={data.userProfilePic}/>
                            <span className={f.dpname}>{data.username}</span>
                            <span className={f.dot}>.</span>
                            <span className={f.time}>{data.time}</span>
                            <span className={f.dot}>.</span>
                            <span className={f.follow}>Following</span>
                        </div>
                        <div>
                            <img className={f.more}src={more} alt="" />
                        </div>
                    </div>
                    <div>
                        <img className={f.image}src={data.imageUrl}/>
                    </div>
                    <div className={f.mid}>
                        <div>
                            <img className={f.midimg} src={data.like ? redHeart :heart} onClick={()=>change(data.id)}/>
                            <img className={f.midimg} src={message}/>
                            <img className={f.midimg} src={share}/>
                        </div>
                        <div>
                            <img className={f.bookmark}src={bookmark}/>
                        </div>
                    </div>
                    <span className={f.like}>{data.likes}</span>
                    <br/>
                    <span className={f.dpname}>{data.username}</span><span className={f.caption}>{data.caption}</span>
                    <p className={f.p}>View all {data.comments.length} comments</p>
                    <div className={f.addcomment}>
                        <p className={f.p}>Add a comments...</p>
                        <img className={f.smile} src={smile}/>
                    </div>
                </div>
            ))}
        </div>)
    )
}

export default Feeds
// https://picsum.photos/seed/pic1/600/600