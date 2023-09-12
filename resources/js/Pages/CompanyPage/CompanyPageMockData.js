

export const CompanyPageMockData = () => {

    const reviewList = [
        {
            id: "1",
            number: "4,0",
            isPercent: false,
            subtitle: "очень хорошо",
            title: "Оценка Dream Job",
        },
        {
            id: "2",
            number: "72",
            isPercent: true,
            subtitle: "",
            title: "Рекомендуют работодателя",
        },
    ];
    const employeeReview = [
        {
            id: "1",
            rating: 4,
            date: "2022-07-01",
            title: "Отзыв сотрудника",
            subtitle: "График, отношение с коллективом",
        },
        {
            id: "2",
            rating: 5,
            date: "2022-05-01",
            title: "Отзыв сотрудника",
            subtitle: "Все супер",
        },
    ];
    const companyVacancies = [
        {
            id:"1",
            title:"Агент по недвижимости",
            cards:[
                {
                    id:"1",
                    jobTitle:"Специалист по недвижимости",
                    date:"2022-07-01",
                    salaryMin:80000,
                    salaryMax:100000,
                    location:"Москва"
                },
                {
                    id:"2",
                    jobTitle:"Риэлтор",
                    date:"2022-06-01",
                    salaryMin:50000,
                    salaryMax:null,
                    location:"Москва"
                }
            ]
        },
        {
            id:"2",
            title:"Программист-разработчик",
            cards:[
                {
                    id:"1",
                    jobTitle:"Frontend",
                    date:"2022-04-01",
                    salaryMin:null,
                    salaryMax:200000,
                    location:"Москва"
                },
                {
                    id:"2",
                    jobTitle:"Backend",
                    date:"2022-02-01",
                    salaryMin:null,
                    salaryMax:220000,
                    location:"Москва"
                }
            ]
        },
    ]
    const companyInfoList = [
        {
            id:"1",
            title:"Сотрудники",
            text:"Мы создаём условия, в которых сотрудники могут " +
                "максимально прокачать свои и soft и hard skills и" +
                "стать специалистами уровня senior или руководителями" +
                "команды."
        }
    ]
    const companyInfo = {
        companyName:"ООО Maxima",
        companyRating:2,
        countReview:2,
        companyInfo:"Maxima — IT-компания со штатом более 200\n" +
            "                            сотрудников. Мы занимаемся разработкой программных\n" +
            "                            продуктов для комплексного решения бизнес-задач,\n" +
            "                            осуществляя полный цикл разработки и поддержки\n" +
            "                            IT-продуктов.",
        companyTagline:"«Мы понимаем потребности\n" +
            "                            конечных пользователей сервисов нашего заказчика и\n" +
            "                            создаём качественные продукты, которые просты и\n" +
            "                            удобны в использовании».",
        companyAddress:"Адрес: 420054, РТ г. Казань ул. Габдуллы Тукая,\n" +
            "                                125, корпус 3",
        companyPhone:"8 (843) 2072740",
        companyEmail:"hr@maxima.life",
        companyImg:"https://img.hhcdn.ru/employer-logo/6009790.jpeg",
        companyLocation:"Москва"

    }
    return {
        reviewList,
        employeeReview,
        companyVacancies,
        companyInfoList,
        ...companyInfo
    };
};
