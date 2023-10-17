<?php

namespace App\Enums;

enum CompanyRating: string
{
    case RATING_ONE = '1';
    case RATING_TWO = '2';
    case RATING_THREE  = '3';
    case RATING_FOUR = '4';
    case RATING_FIVE  = '5';

    public static function getAll(): array
    {
        return [
            self::RATING_ONE->value,
            self::RATING_TWO->value,
            self::RATING_THREE->value,
            self::RATING_FOUR->value,
            self::RATING_FIVE->value,
        ];
    }
}
