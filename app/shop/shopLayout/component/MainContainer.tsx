import { ReactNode } from "react";
import "./MainContainer.scss";

export const MainContainer = ({ children }: { children: ReactNode | ReactNode[] }): JSX.Element => {
    return <div className="main-container-content">{children}</div>
}