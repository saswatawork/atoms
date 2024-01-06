import Image from 'next/image';
import "./Category.scss";

interface CategoryProps {
    icon: any;
    name: string;
}

export const Category = ({ icon, name }: CategoryProps): JSX.Element => {
    return (
        <div className="category">
            <Image
                priority
                src={icon}
                alt={name}
                className='category__icon'
            />
            <span className='category__name'> {name}</span>
        </div>
    )
}