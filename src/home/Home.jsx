import Feeds from './feeds/feeds'
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