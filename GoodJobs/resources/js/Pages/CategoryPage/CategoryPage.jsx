import { AppCard } from "@/Shared/AppCard/AppCard";
import { AuthContext } from '@/Shared/store/AuthContext';
import { AppPage } from '@/Shared/AppPage/AppPage';
import MainLayout from "@/Layouts/MainLayout/MainLayout";
import { Typography } from "@/Shared/Typography/Typography";


const CategoryPage = ({ auth, vacancies, titleCat }) => {
    const user = auth?.user;
    return (
        <AuthContext.Provider value={{ user }}>
            <MainLayout user={user}>
                <AppPage>
                    <Typography variant={'h2'}>{titleCat}</Typography>

                    <div className="flex gap-5 flex-wrap">
                        {vacancies.map(item => <AppCard width={'40%'} path={'vacancy.show'} param={item.id} card={item} />)}

                    </div>

                </AppPage>
            </MainLayout>
        </AuthContext.Provider>
    );
}
export default CategoryPage;