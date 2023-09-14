export default function VacancyTest(props) {
    console.log(props.test);
    axios
            .post(`/vacancies/filter`, {test: 'test,test'})
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
    return (
        <>
            <h1>Vacancies</h1>

        </>
    );
}