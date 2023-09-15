<?php

namespace App\Enums;

enum GenderType: string
{
    case MALE = 'Мужской';
    case FEMALE = 'Женский';

    public static function getAll(): array
    {
        return [
            self::MALE->value,
            self::FEMALE->value
        ];
    }
}
