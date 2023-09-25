import PropTypes from "prop-types";


const List = ({ list, renderItem, as, ...rest }) => {
    const Component = as ?? 'ul';
    return (

        <Component {...rest}>
            {
                list.map(renderItem)
            }
        </Component >
    )
}
List.propTypes = {
    list: PropTypes.array,
    renderItem: PropTypes.func
};
export default List;