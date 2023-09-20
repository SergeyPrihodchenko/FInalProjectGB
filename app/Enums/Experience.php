<?php

namespace App\Enums;

enum Experience: string
{
    case no_experiance = 'нет опыта';
    case one_to_three = 'от 1 до 3 лет';
    case three_to_six = 'от 3 до 6 лет';
    case more_six = 'более 6 лет';

    public static function all(): array
    {
        return [
            self::no_experiance->value,
            self::one_to_three->value,
            self::three_to_six->value,
            self::more_six->value,
        ];
    }
}