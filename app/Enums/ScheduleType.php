<?php

namespace App\Enums;

enum ScheduleType: string
{
    case fullEmployment = 'Полная занятость';
    case part_timeEmployment = 'Частичная занятость';
    case internship = 'Стажировка';
    case projectWork = 'Проектная работа';
    case volunteering = 'Волонтерство';

    public static function all(): array
    {
        return [
            self::fullEmployment->value,
            self::part_timeEmployment->value,
            self::internship->value,
            self::projectWork->value,
            self::volunteering->value,
        ];
    }
}