import { Tag } from "../../tag"
import Avatar from './../../../core/Icons/Avatar.svg'
import { UserPostDetail } from "../../userpostdetail/component/UserPostDetail"
import moment from "moment";

export interface SinglePopulerPostInput{
    post:{
        userId:number;
        id:number;
        title:string;
        body:string;
    }
    date:string;
    time:string;
}

export const SinglePopulerPost = (initialValue:SinglePopulerPostInput):JSX.Element=>{
    const {userId,id,title,body} = initialValue.post;
    const date = moment().format('L');
    const time = moment().format('LT');
    return(
        <article>
            <Tag type="Travel"/>
            <h3>{title}</h3>
            <UserPostDetail name={userId+'name'} image={Avatar} date={date} time={time}/>
        </article>
    )
}