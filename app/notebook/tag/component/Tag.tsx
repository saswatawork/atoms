import './Tag.scss';

export interface TagType{
    type:string;
}

export const Tag = (initialValue:TagType):JSX.Element=>{
    return <span className="tag_area">{initialValue.type}</span>
}