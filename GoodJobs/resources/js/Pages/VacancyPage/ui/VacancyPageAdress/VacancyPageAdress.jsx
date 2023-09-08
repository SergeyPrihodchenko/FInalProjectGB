import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import s from "./VacancyPageAdress.module.css";
import AppButton from "@/Shared/ui/AppButton/AppButton";
import AppText from "@/Shared/ui/AppText/AppText";
import cn from "classnames";
import Map from "./Map";

function VacancyPageAdress(props) {
    const { className } = props;
    // MAP
    const [x, setX] = useState(55.70104408991864);
    const onXChange = (e) => setX(e.target.value);

    const [y, setY] = useState(37.70837356154336);
    const onYChange = (e) => setY(e.target.value);

    const [zoom, setZoom] = useState(17);
    const onZoomChange = (e) => setZoom(e.target.value);
  

    const options = useMemo(
        () => ({
            center: [x, y],
            zoom,
        }),
        [x, y, zoom]
    );

    return (
        <div className={cn(s.vacancyPageAdress, className)}>
            <AppText title="Адрес" bold />
            <AppText
                text="Москва, Южнопортовая улица, 21с7."
                size="s"
                className={s.text}
            />
            {/* <div className={s.mapStub}>
                <AppText
                    title="Тут будет карта"
                    variant="secondary"
                    size="xl"
                />
            </div> */}

            <Map
                className={s.map}
                width={1200}
                height={300}
                options={options}
            />
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
