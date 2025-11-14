
import './Navs.css'

import text from './assets/OIP.jpg'
import home from './assets/icons8-home-48.png'
import search from './assets/icons8-search-50.png'
import explore from './assets/icons8-compass-24.png'
import reels from './assets/icons8-reels-50.png'
import messages from './assets/icons8-telegram-24.png'
import notifications from './assets/icons8-heart-50.png'
import create from './assets/icons8-plus-50.png'
import profile from './assets/icons8-profile-50.png'

import more from './assets/icons8-menu-50.png'
import meta from './assets/meta.png'

function Navs() {
  return (
    <div className="nav">
      <div className="upper">
          <img className="w-50 insta-text"src={text}></img>

          <div><img src={home}></img>Home</div>
          <div><img src={search}></img>Search</div>
          <div><img src={explore}></img>Explore</div>
          <div><img src={reels}></img>Reels</div>
          <div><img src={messages}></img>Messages</div>
          <div><img src={notifications}></img>Notifications</div>
          <div><img src={create}></img>Create</div>
          <div><img src={profile}></img>Profile</div>
      </div>
      <div className="lower">
          <div><img src={more}></img>more</div>
          <div><img src={meta}></img>Also from Meta</div>
      </div>
    </div>
  )
}

export default Navs