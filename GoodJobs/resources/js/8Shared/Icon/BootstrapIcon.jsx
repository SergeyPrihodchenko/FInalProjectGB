import * as BIcon from "react-icons/bs";

export const BootstrapIcon = ({ name, className, size }) => {
    const IconComponent = BIcon[name];
    const styles = {
        fontSize: `${size}px`,
    };
    return <IconComponent className={className} style={styles} />;
};
