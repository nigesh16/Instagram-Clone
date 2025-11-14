import Feeds from './feeds/Feeds'
import Stories from './stories/Stories'

function Home(){
    return(
        <div>
            <Stories/>
            <Feeds/>
        </div>
    )
}
export default Home