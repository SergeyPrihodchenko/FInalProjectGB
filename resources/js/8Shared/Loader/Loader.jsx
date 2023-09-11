import "./Loader.css";
import cn from "classnames"

const Loader = ({ className }) => {
    return (

        <span className={cn('loader', className)}></span>
    )
};

export default Loader;