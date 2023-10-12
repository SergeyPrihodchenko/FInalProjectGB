import PrimaryButton from "../resources/js/Components/PrimaryButton";

export default {
    title: 'GoodJob/Buttons/PrimaryButton',
    component: PrimaryButton,
    argTypes: {
    }
}

const Template = (arg) => <PrimaryButton {...arg}/>;

export const Default = Template.bind({});
Default.args = {
    children : ' Кнопка'
};

export const Disabled = Template.bind({});
Disabled.args = {
    children : ' Кнопка заблокирована',
    disabled : true
};



