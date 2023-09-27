import PropTypes from "prop-types";
import cn from "classnames"
import s from "./List.module.css"


const List = ({ list, renderItem, as, className, ...rest }) => {
    const Component = as ?? 'ul';
    return (

        <Component className={cn(s.list, className)} {...rest}>
            {
                list?.map(renderItem)
            }
        </Component >
    )
}
List.propTypes = {
    list: PropTypes.array,
    renderItem: PropTypes.func
};
export default List;