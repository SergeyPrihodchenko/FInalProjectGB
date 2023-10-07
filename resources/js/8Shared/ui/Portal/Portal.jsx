import { createPortal } from "react-dom"



export const Portal = ({ children, elem = document.body }) => {
    return createPortal(children, elem);
}