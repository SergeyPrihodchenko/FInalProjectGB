import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    resumes: "",
    authores: "",
    yearDateOfBirth: "",
    genderOfUser: "",
    dateOfBirthUser: "",
    dataWorksBegin: "",
    dataWorksEnd: "",
    yearWorksExperience: "",

};

export const resumePage = createSlice({
    name: "resumePage",
    initialState,
    reducers: {
        setDataResume: (state, { payload }) => {
            state.resumes = payload;
        },

        setDataAuthor: (state, { payload }) => {
            state.authores = payload;
        }, 

         //высчитываем из даты рождения сколько полных лет
        setYearsUser: ( state, { payload } ) => {
            function declOfNum(number, titles) {
                let cases = [2, 0, 1, 1, 1, 2];
                 return number + " " + titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
            }
               
            function birthDateToAge(b) {
                var n = new Date(),
                    b = new Date(b),
                    age = n.getFullYear() - b.getFullYear();
                return n.setFullYear(1970) < b.setFullYear(1970) ? age - 1 : age;
            }
           state.yearDateOfBirth = (declOfNum(birthDateToAge(payload), ['год', 'года', 'лет']));
        },

        setYears: ( state, { payload } ) => {
            function declOfNum(number, titles) {
                let cases = [2, 0, 1, 1, 1, 2];
                 return number + " " + titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
            }
               
            function birthDateToAge(b) {
                var n = new Date(),
                    b = new Date(b),
                    age = n.getFullYear() - b.getFullYear();
                return n.setFullYear(1970) < b.setFullYear(1970) ? age - 1 : age;
            }
           state.yearDateOfBirth = (declOfNum(birthDateToAge(payload), ['год', 'года', 'лет']));
        },

        //переводим из падежа в существительное gender пользователя
        setGenger: (state, { payload }) => {
            function dataGenderOfUser() {
                let gender = "";
                if (payload == "Мужской"){
                    gender = "Мужчина";
                }else{
                    gender = "Женщина";
                }
                return gender;
            }
            state.genderOfUser = dataGenderOfUser(payload);
        },

        //форматируем дату рождения
        setDayOfBirth: (state, { payload }) => {
            const dayOfBirth = new Date(payload);
            const dateSrc = dayOfBirth.toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' });
            state.dateOfBirthUser = dateSrc.split(".").join(" ");
        },
        //форматы даты и периода работы
        setDateFormatWorkBegin: (state) => {
            state.resumes.companies.map((el) => { 
                //дата начала работы
                let dataWorkBegin = el.start_date;
                    
                function dateFormatYearsMonch(dataWorkBegin){
                    const dayFormat = new Date(dataWorkBegin);
                    const dateSrc = dayFormat.toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric'});
                    const dateDst = dateSrc.split(".").join(" ");
                    const present = " по настоящее время";
                    if(dataWorkBegin == null){
                        return present
                    }else{
                        return(
                               dateDst
                        )
                    }
                }
                
                state.dataWorksBegin = dateFormatYearsMonch(dataWorkBegin);

                })    
            },

        setDateFormatWorkEnd: (state) => {
            state.resumes.companies.map((el) => {
            //дата окончания работы
                let dataWorkEnd = el.end_date;
                
            function dateFormatYearsMonch(dataWorkEnd){
                const dayFormat = new Date(dataWorkEnd);
                const dateSrc = dayFormat.toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric'});
                const dateDst = dateSrc.split(".").join(" ");
                const present = " по настоящее время";
                if(dataWorkEnd == null){
                    return present
                }else{
                    return(
                        dateDst
                    )
                }
            }
            
            state.dataWorksEnd = dateFormatYearsMonch(dataWorkEnd);

            })
        },

        //расчет стажа
        setWorksExperience: (state) => {
            state.resumes.companies.map((el) => {
                                
                //дата начала и окончания работы
                let dataWorkBegin = el.start_date;
                let dataWorkEnd = el.end_date;

                function declOfNum(number, titles) {
                let cases = [2, 0, 1, 1, 1, 2];
                    return number + " " + titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
                }
                
                function worksExperience(endDate, startDate) {
                    let end, start, month, age;
                    start = new Date(startDate);
                    
                    if(endDate == null){
                        end = new Date();
                        month = end.getMonth() - start.getMonth(); 
                    }else{
                        end = new Date(endDate);
                        if(end.getMonth() > start.getMonth()) {
                            month = end.getMonth() - start.getMonth();
                        }else{
                            month = (12 + end.getMonth()) - start.getMonth();
                        }
                    }
                    
                    age = end.getFullYear() - start.getFullYear();
                    
                    //console.log(month);    
                    return (
                        (declOfNum(end.setFullYear(1970) < start.setFullYear(1970) ? age - 1 : age, ['год', 'года', 'лет'])) 
                            + " " 
                            + 
                        (declOfNum(end.setMonth() < start.setMonth() ? month - 1 : month, ['месяц', 'месяца', 'месяцев']))
                    )
                }

            state.yearWorksExperience = worksExperience(dataWorkEnd, dataWorkBegin);
            })
        }, 

        
    },
});

export const { 
        setDataResume, 
        setDataAuthor,
        setYears,
        setYearsUser, 
        setGenger, 
        setDayOfBirth, 
        setDateFormatWorkBegin, 
        setDateFormatWorkEnd,
        setWorksExperience 
    } = resumePage.actions;

export default resumePage.reducer;
