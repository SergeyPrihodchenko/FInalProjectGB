<?php

namespace App\Enums;

enum BuisnessTravelStatus: string
{
    case NEVER = 'Никогда';
    case READY = 'Готов';
    case SOMETIMES = 'Иногда';

    public static function getAll(): array
    {
        return [
            self::NEVER->value,
            self::READY->value,
            self::SOMETIMES->value
        ];
    }
}
