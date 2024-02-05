import Image from "next/image";
import './UserAvatar.scss'

export interface UserAvatarInputType{
    image:string
    name:string;
}

export const UserAvatar = (initialValue:UserAvatarInputType):JSX.Element=>{
    return(
        <div className="user_avatar">
            <Image src={initialValue.image} alt={initialValue.name}/>
            <p>{initialValue.name}</p>
        </div>
    )
}