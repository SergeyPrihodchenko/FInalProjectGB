<?php

namespace App\Enums;

enum EducationLevel: string
{
    case BASIC = 'Среднее';
    case MIDDLE = 'Среднее специальное';
    case PRE_HIGH = 'Неоконченное высшее';
    case HIGH = 'Высшее образование';
    case BACHELOR = 'Бакалавр';
    case MASTER = 'Магистр';
    case PhD = 'Кандидат наук';
    case DOCTOR = 'Доктор наук';


    public static function getAll(): array
    {
        return [
            self::BASIC->value,
            self::MIDDLE->value,
            self::PRE_HIGH->value,
            self::HIGH->value, 
            self::BACHELOR->value, 
            self::MASTER->value, 
            self::PhD->value, 
            self::DOCTOR->value, 
        ];
    }
}