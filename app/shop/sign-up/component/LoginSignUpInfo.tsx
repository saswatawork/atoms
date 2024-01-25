import Image from 'next/image';
import { Shop } from "@/app/core/Icons";

export const LoginSignUpInfo = (): JSX.Element => {
    return (
        <div className="ls__info">
            <Image
                priority
                src={Shop}
                alt="Shop"
            />
        </div>
    )
}