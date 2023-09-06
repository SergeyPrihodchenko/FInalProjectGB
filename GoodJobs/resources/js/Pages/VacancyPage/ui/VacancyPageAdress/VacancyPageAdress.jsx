import React from "react";
import PropTypes from "prop-types";
import s from "./VacancyPageAdress.module.css";
import AppButton from "@/Shared/ui/AppButton/AppButton";
import AppText from "@/Shared/ui/AppText/AppText";
import cn from "classnames";
// import Map from "./Map";

function VacancyPageAdress(props) {
    const { className } = props;
    // MAP
    // const [x, setX] = useState(55);
    // const onXChange = (e) => setX(e.target.value);

    // const [y, setY] = useState(83);
    // const onYChange = (e) => setY(e.target.value);

    // const [zoom, setZoom] = useState(13);
    // const onZoomChange = (e) => setZoom(e.target.value);

    // const options = useMemo(
    //     () => ({
    //         center: [x, y],
    //         zoom,
    //     }),
    //     [x, y, zoom]
    // );

    return (
        <div className={cn(s.vacancyPageAdress, className)}>
            <AppText title="Адрес" bold />
            <AppText
                text="Москва, Южнопортовая улица, 21с7."
                size="s"
                className={s.text}
            />
            <div className={s.map}>
                <AppText
                    title="Тут будет карта"
                    variant="secondary"
                    size="xl"
                />
                {/* <Map width={400} height={400} options={options} /> */}
            </div>
            <AppButton variant="clear" width="content-width">
                <AppText
                    text="Показать на большой карте"
                    variant="accent"
                    size="s"
                />
            </AppButton>
        </div>
    );
}

VacancyPageAdress.propTypes = {};

export default VacancyPageAdress;
