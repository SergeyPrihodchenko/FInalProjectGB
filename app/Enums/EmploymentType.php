<?php
namespace App\Enums;

enum EmploymentType: string
{
    case fullTimeJob = 'Полная занятость';
    case shiftWork = 'Сменный график';
    case flexibleSchedule = 'Гибкий график';
    case distantWork = 'Удаленая работа';
    case watchSchedule = 'Вахтовый метод';

    public static function all(): array
    {
        return [
            self::fullTimeJob->value,
            self::shiftWork->value,
            self::flexibleSchedule->value,
            self::distantWork->value,
            self::watchSchedule->value,
        ];
    }

}
