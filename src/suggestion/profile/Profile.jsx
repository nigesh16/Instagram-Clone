import React, { useEffect, useState } from 'react'

function Profile() {
    const[profile,setProfile] = useState(null);
    useEffect(()=>{
        fetch("./data/profile.json")
        .then(res => res.json())
        .then(data =>setProfile(data))
    },[])
    console.log(profile);
    
  return (

    <div className="profile mt-4">
        {profile && 
            <div className='d-flex justify-content-between'>
              <div className='d-flex'>
                  <div>
                    <img className="s-profilePic"src={profile.profilePic}/>
                  </div>
                  <div className='s-name ps-2 pt-1'>{profile.username}<p className='s-name2'>{profile.fullName}</p></div>
              </div>
              <div className='text-primary pt-3 switch'>
                Switch
              </div>
            </div>
        }
    </div>
    
    
  )
}

export default Profile