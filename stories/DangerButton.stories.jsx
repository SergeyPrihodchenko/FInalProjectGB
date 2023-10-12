import DangerButton from "../resources/js/Components/DangerButton";

export default {
    title: 'GoodJob/Buttons/DangerButton',
    component: DangerButton,
    argTypes: {
    }
}

const Template = (arg) => <DangerButton {...arg}/>;

export const Default = Template.bind({});
Default.args = {
    children : ' Кнопка предупреждения'
};

export const Disabled = Template.bind({});
Disabled.args = {
    children : ' Кнопка заблокирована',
    disabled : true
};



