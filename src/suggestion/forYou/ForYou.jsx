import React, { useEffect, useState } from 'react'

function ForYou() {
    const[users,setUsers] = useState(null);
    useEffect(()=>{
        fetch("./data/suggestionUsers.json")
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    console.log(users);
  return (
    users && <div>
        <div className='d-flex justify-content-between s-heading'>
          <p className='s-h2'>Suggested for you</p><p>See All</p>
        </div>
        {users.map((data)=>
            <div key={data.id} className='d-flex justify-content-between sug'>
                <div className='d-flex'>
                    <div>
                      <img className="s-profilePic"src={data.profilePic}/>
                    </div>
                    <div>
                          <div className='s-name ps-2 pt-1'>{data.username}</div>
                          <p className='sug2'>Suggested for you</p>
                    </div>
                </div>
                <div className='text-primary pt-3 switch'>
                  Follow
                </div>
            </div>
        )}
    </div>
  )
}

export default ForYou