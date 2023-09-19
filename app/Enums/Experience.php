<?php

namespace App\Enums;

enum Experience: string
{
    case null = '0';
    case one = '1';
    case three = '3';
    case six = '6';

    public static function all(): array
    {
        return [
            self::null->value,
            self::one->value,
            self::three->value,
            self::six->value,
        ];
    }
}