import { useFeaturedPost } from "../hook/useFeaturedPost"
import { SingleFeaturedPost } from "../../singlefeaturedpost";
import './FeaturedPost.scss'

export const FeaturedPost =():JSX.Element=>{

    const {loading,featuredPost} = useFeaturedPost();

    return(
        <div className="featured_post_area">
            {loading ?'loading...' : featuredPost.map((post)=>{
                return(<SingleFeaturedPost post={post} date={""} time={""}/>)
            })
            }
        </div>
    )
}