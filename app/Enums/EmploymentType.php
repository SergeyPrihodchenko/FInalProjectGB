<?php
namespace App\Enums;

enum EmploymentType: string
{
    case fullTimeJob = 'Постоянная';
    case partTimeWork = 'Повременная';
    case pieceWork = 'Сдельная';
    case contractWork = 'Контрактная';

    public static function all(): array
    {
        return [
            self::fullTimeJob->value,
            self::partTimeWork->value,
            self::pieceWork->value,
            self::contractWork->value
        ];
    }

}
