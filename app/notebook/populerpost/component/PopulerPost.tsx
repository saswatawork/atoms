import { SinglePopulerPost } from "../../singlepopulerpost/component/SinglePopulerPost"
import { usePopulerPost } from "../hook/usePopulerPost"
export interface PopulerPostType{}

export const PopulerPost = (initialValue:PopulerPostType):JSX.Element=>{
    const {loading,populerPost}=usePopulerPost()
    return(
        <div>
            {loading ? 'Loading' : populerPost.map((post)=>{
               return (<SinglePopulerPost post={post} date={""} time={""}/>)
            })}

        </div>
    )
}