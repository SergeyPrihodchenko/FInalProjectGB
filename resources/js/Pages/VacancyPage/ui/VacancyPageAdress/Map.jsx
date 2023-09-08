import DG from "2gis-maps";
import React, { useRef, useEffect, useState } from "react";

function Map({ options = {}, width, height }) {
    const elRef = useRef();
    const [map, setMap] = useState(null);

    useEffect(() => {
        let innerMap = map;
        if (!innerMap) {
            innerMap = DG.map(elRef.current, options);
            setMap(innerMap);
            DG.marker([55.70104408991864, 37.70837356154336])
                .addTo(innerMap)
                .bindPopup("Москва, Южнопортовая улица, 21с7");
        } else {
            innerMap.setView(options.center, options.zoom);
        }

        const handleClick = (e) => console.log(e);

        innerMap.addEventListener("click", handleClick);

        return () => {
            innerMap.removeEventListener("click", handleClick);
        };
    }, [map, elRef, options]);

    return (
        <div
            ref={elRef}
            style={{
                width: `${width}px`,
                height: `${height}px`,
            }}
        />
    );
}

export default React.memo(Map);
