import s from "./Card.module.css";
import { Typography } from "../Typography/Typography";
import cn from "classnames";
import { Link } from "@inertiajs/react";

const typeCards = {
    category: "category",
    vacancy: "vacancy",
};

export const Card = ({
    card,
    type,
    path,
    param,
    width,
    minHeight,
    borderRight,
}) => {
    const styles = {
        width: `${width}`,
        minHeight: `${minHeight}`,
        borderRight: `${borderRight}`,
    };

    if (path) {
        if (param) {
            return (
                <Link
                    href={route(`${path}`, `${param}`)}
                    className={cn(s.card)}
                    style={styles}
                >
                    <Typography variant={"h4"}>{card.title}</Typography>
                    {card.description && <p>{card.description}qqq</p>}
                    {card.payment && <p>от {card.payment} руб.</p>}
                    {card.experience && (
                        <p>
                            Опыт работы: от {card.experience}{" "}
                            {+card.experience === 1 ? "года" : "лет"}
                        </p>
                    )}
                </Link>
            );
        }
    }
    return null;
};
