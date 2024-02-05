import { FeaturedPost } from '../../featuredpost'
import { PopulerPost } from '../../populerpost'
import './Home.scss'

export const Home = ()=>{
    return(
        <div>
            <section className="coloured_section">
                <div>
                    <h2><span>Featured</span> this month</h2>
                    <FeaturedPost/>
                </div>
                <div>
                    <h2><span>Populer</span> posts</h2>
                    <PopulerPost/>
                </div>  
            </section>
            <section className="default_section">          
            </section>
        </div>
    )
}