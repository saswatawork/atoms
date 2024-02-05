import Image from "next/image";
import placeHolderImage from './../../../core/Icons/placeholder.svg'
import Avatar from './../../../core/Icons/Avatar.svg'
import { Tag } from "../../tag";
import { UserPostDetail } from "../../userpostdetail/component/UserPostDetail";
import moment from "moment";
import './SingleFeaturedPost.scss'

export interface SingleFeaturedPostType{
    post:{
        userId:number;
        id:number;
        title:string;
        body:string;
    }
    date:string;
    time:string;
}

export const SingleFeaturedPost = (initialValue:SingleFeaturedPostType):JSX.Element=>{
    const {userId,id,title,body} = initialValue.post;
    const date = moment().format('L');
    const time = moment().format('LT');
    return(
        <article className="single_featured_post" key={id}>
            <Tag type='Travel'/>
            <h3 >{title}</h3>
            <Image 
                 src={placeHolderImage}
                 alt="Picture of the blog"
            />
            <UserPostDetail image={Avatar} name={userId+'name'} date={date} time={time}/>
            <p>{body}</p>
        </article>
    )
}