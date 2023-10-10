<?php

namespace App\Enums;

enum StatusResponse: string
{
    case INVATEATION = 'Приглашение';
    case REFUSAL = 'Отказ';
    case NOT_VIEWED = 'Не просмотренно';
    case VIEWED = 'Просмотренно';

    public static function getAll(): array
    {
        return [
            self::INVATEATION->value,
            self::REFUSAL->value,
            self::NOT_VIEWED->value,
            self::VIEWED->value
        ];
    }
}
