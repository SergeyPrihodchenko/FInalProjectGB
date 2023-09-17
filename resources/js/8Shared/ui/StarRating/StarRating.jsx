import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./StarRating.module.scss";
import { AppIcon as AppIconDeprecated } from "../../deprecated/AppIcon/AppIcon";

import StarIcon from "@/shared/assets/icons/star.svg";
import { ToggleFeatures } from "@/shared/lib/features";
import { AppIcon } from "../AppIcon";

const stars = [1, 2, 3, 4, 5];

export const StarRating =(props) => {
    const { className, onSelect, size = 30, selectedStars = 0 } = props;

    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));
    const onHover = (starsCount) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onClick = (starsCount) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    };
    return (
        <div className={classNames(s.starRatingRedesigned, {}, [className])}>
            {stars.map((starNumber) => {
                return (
                    <AppIcon
                        className={classNames(
                            s.starIcon,
                            { [s.selected]: isSelected },
                            [
                                currentStarsCount >= starNumber
                                    ? s.hovered
                                    : s.normal,
                            ]
                        )}
                        key={starNumber}
                        Svg={StarIcon}
                        width={size}
                        height={size}
                        onMouseLeave={onLeave}
                        onMouseEnter={onHover(starNumber)}
                        onClick={onClick(starNumber)}
                        data-testid={`StarRating.${starNumber}`}
                        data-selected={currentStarsCount >= starNumber}
                    />
                );
            })}
        </div>
    );
};
