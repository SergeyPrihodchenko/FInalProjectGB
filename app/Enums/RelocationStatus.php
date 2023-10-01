<?php

namespace App\Enums;

enum RelocationStatus: string
{
    case IMPOSSIBLE = 'Невозможно';
    case POSSIBLE = 'Возможно';
    case PREFERABLY = 'Желательно';

    public static function getAll(): array
    {
        return [
            self::IMPOSSIBLE->value,
            self::POSSIBLE->value,
            self::PREFERABLY->value
        ];
    }
}
