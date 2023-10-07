import * as BIcon from "react-icons/bs";

export const BootstrapIcon = ({ name, className, size, color }) => {
    const IconComponent = BIcon[name];
    const styles = {
        fontSize: `${size}px`,
        color: `${color}`
    };
    return <IconComponent className={className} style={styles} />;
};
