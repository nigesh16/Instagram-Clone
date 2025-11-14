import React from 'react'
import './Suggestion.css'
import Profile from './profile/Profile'
import ForYou from './forYou/ForYou'

function Suggestion() {
  return (
    <div className='suggestion'>
        <div className="profile">
            <Profile/>
        </div>
        <div className="suggestedForYou">
            <ForYou/>
        </div>
    </div>
  )
}

export default Suggestion