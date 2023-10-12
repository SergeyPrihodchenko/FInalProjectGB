import SecondaryButton from "../resources/js/Components/SecondaryButton";

export default {
    title: 'GoodJob/Buttons/SecondaryButton',
    component: SecondaryButton,
    argTypes: {
    }
}

const Template = (arg) => <SecondaryButton {...arg}/>;

export const Default = Template.bind({});
Default.args = {
    children : ' Кнопка предупреждения'
};

export const Disabled = Template.bind({});
Disabled.args = {
    children : ' Кнопка заблокирована',
    disabled : true
};



