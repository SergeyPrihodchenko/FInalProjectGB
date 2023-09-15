<?php

namespace App\Enums;

enum Experience: string
{
    case doesnt_matter = 'Не имеет значения';
    case noExperience = 'Нет опыта';
    case one_three = '1-3 года';
    case three_six = '3-6 лет';
    case from_six = 'более 6 лет';

    public static function all(): array
    {
        return [
            self::doesnt_matter->value,
            self::noExperience->value,
            self::one_three->value,
            self::three_six->value,
            self::from_six->value,
        ];
    }
}