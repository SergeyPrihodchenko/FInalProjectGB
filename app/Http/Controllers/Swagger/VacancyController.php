<?php

namespace App\Http\Controllers\Swagger;

use App\Http\Controllers\Controller;

/**
 * @OA\Info(title="Документация по роутам", version="0.1")
 * @OA\PathItem(
 *     path="/"
 * )
 * @OA\Get(
 *     path="/vacancy",
 *     summary="Возвращает все вакансии",
 *     description="Все вакансии",
 *     operationId="endpoint",
 *     tags={"Вакансия"},
 *     @OA\Response(response="200", description="Возращает страницу с вакансиями")
 * )
 * @OA\Post(
 *     path="/vacancy",
 *     summary="Создание вакансии",
 *     description="Создание вакансии",
 *     tags={"Вакансия"},
 *     @OA\RequestBody(
 *         @OA\JsonContent(
 *             allOf={
 *                  @OA\Schema (
 *                      @OA\Property(property="title", type="string", example="Дирижер"),
 *                      @OA\Property(property="city_id", type="int", example=10),
 *                      @OA\Property(property="payment", type="string|int", example=12000),
 *                      @OA\Property(property="employment", type="string", example="Полный день"),
 *                      @OA\Property(property="experience", type="string", example="нет опыта"),
 *                      @OA\Property(property="contacts", type="array",
 *                          @OA\Items(
 *                              type="object",
 *                              @OA\Property(property="jobTitle", type="string", example="Бухгалтер"),
 *                              @OA\Property(property="name", type="string", example="Лариса"),
 *                              @OA\Property(property="phone", type="string", example="8-999-999-99-99")
 *                          )
 *                      ),
 *                      @OA\Property(property="requirements", type="array",
 *                          @OA\Items(type="string", example="Знания языков программирования"),
 *                      ),
 *                      @OA\Property(property="responsibilities", type="array",
 *                          @OA\Items(type="string", example="Быть пунктуальным")
 *                      ),
 *                      @OA\Property(property="conditions", type="array",
 *                          @OA\Items(type="string", example="Хорошая заработная плата"),
 *                      ),
 *                      @OA\Property(property="skills", type="array",
 *                          @OA\Items(type="string", example="Знания языков программирования PHP, Знания языков программирования JS")
 *                      ),
 *                      @OA\Property(property="company_id", type="int|null", example=null),
 *                      @OA\Property(property="schedule", type="string", example="Полная занятость"),
 *                  )
 *             }
 *        ),
 *     ),
 *     @OA\Response(response="200", description="All good"),
 *     @OA\Response(response="500", description="Ошибка на сервере")
 * )
 *
 * @OA\Get(
 *     path="/vacancy/{id}",
 *     summary="Возращает страницу о выбранной вакансии",
 *     tags={"Вакансия"},
 *     @OA\Parameter (
 *         description="ID вакансии",
 *         in="path",
 *         name="id",
 *         required=true,
 *         example=2
 *     ),
 *     @OA\Response(response="200", description="All good"),
 *     @OA\Response(response="404", description="Страница не найдена")
 * )
 *
 * @OA\Patch(
 *     path="/vacancy/{id}",
 *     summary="Редактирование вакансии",
 *     description="Редактирование вакансии",
 *     tags={"Вакансия"},
 *     @OA\Parameter (
 *         description="ID вакансии",
 *         in="path",
 *         name="id",
 *         required=true,
 *         example=2
 *     ),
 *     @OA\RequestBody(
 *         @OA\JsonContent(
 *             allOf={
 *                  @OA\Schema (
 *                      @OA\Property(property="title", type="string", example="Дирижер"),
 *                      @OA\Property(property="city_id", type="int", example=10),
 *                      @OA\Property(property="payment", type="string|int", example=12000),
 *                      @OA\Property(property="employment", type="string", example="Полный день"),
 *                      @OA\Property(property="experience", type="string", example="нет опыта"),
 *                      @OA\Property(property="contacts", type="array",
 *                          @OA\Items(
 *                              type="object",
 *                              @OA\Property(property="jobTitle", type="string", example="Бухгалтер"),
 *                              @OA\Property(property="name", type="string", example="Лариса"),
 *                              @OA\Property(property="phone", type="string", example="8-999-999-99-99")
 *                          )
 *                      ),
 *                      @OA\Property(property="requirements", type="array",
 *                          @OA\Items(type="string", example="Знания языков программирования"),
 *                      ),
 *                      @OA\Property(property="responsibilities", type="array",
 *                          @OA\Items(type="string", example="Быть пунктуальным")
 *                      ),
 *                      @OA\Property(property="conditions", type="array",
 *                          @OA\Items(type="string", example="Хорошая заработная плата"),
 *                      ),
 *                      @OA\Property(property="skills", type="array",
 *                          @OA\Items(type="string", example="Знания языков программирования PHP, Знания языков программирования JS")
 *                      ),
 *                      @OA\Property(property="company_id", type="int|null", example=null),
 *                      @OA\Property(property="schedule", type="string", example="Полная занятость"),
 *                  )
 *             }
 *        ),
 *     ),
 *     @OA\Response(response="200", description="All good")
 * )
 *
 *
 * @OA\Delete(
 *     path="/vacancy/{id}",
 *     summary="Удаление вакансии",
 *     description="Удаление вакансии",
 *     tags={"Вакансия"},
 *     @OA\Parameter (
 *         description="ID вакансии",
 *         in="path",
 *         name="id",
 *         required=true,
 *         example=2
 *     ),
 *
 *     @OA\Response(response="204", description="Удаление прошло успешно"),
 *     @OA\Response(response="404", description="Страница не найдена")
 * )
 */
class VacancyController extends Controller
{
    //
}
