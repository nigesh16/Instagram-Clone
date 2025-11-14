import Home from "./home/Home"
import Navs from "./Nav/Navs.jsx"
import Suggestion from "./suggestion/Suggestion.jsx"

function App() {
  return (
    <>
      <div className="main">
        <div className="c1"> 
          <Navs/> 
        </div>
        <div className="c2">
          <Home/>
        </div>
        <div className="c3"><Suggestion/></div>
      </div>
    </>
    
  )
}

export default App
// https://picsum.photos/seed/pic3/600/600