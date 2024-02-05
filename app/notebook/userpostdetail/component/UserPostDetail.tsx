import Image from "next/image";
import { UserAvatar } from '../../useravatar';
import './UserPostDetail.scss';
import CalenderIcon from './../../../core/Icons/CalenderIcon.svg';
import TimeIcon from './../../../core/Icons/TimeIcon.svg';

export interface UserPostDetailInputType{
    image:string;
    name:string;
    date:string;
    time:string;
}

export const UserPostDetail=(initialvalue:UserPostDetailInputType):JSX.Element=>{
    const {image,name,date,time} = initialvalue;
    return(
        <div className="user_post_detail">
            <UserAvatar image={image} name={name}/>
            
            <div className="post_date">
                <p>|</p>
                <Image src={CalenderIcon} alt={date}/>
                <p>{date}</p>
            </div>
            <div className="post_time">
                <p>|</p>
                <Image src={TimeIcon} alt={time}/>
                <p>{time}</p>
            </div>
        </div>
    )
}