import ApplicationLogo from "../resources/js/Components/ApplicationLogo";

export default {
    title: 'GoodJob/icons/ApplicationLogo',
    component: ApplicationLogo,
    argTypes: {
    }
}

const Template = (arg) => <ApplicationLogo {...arg}/>;

export const Default = Template.bind({});
Default.args = {
};

export const SmallSize = Template.bind({});
SmallSize.args = {
    width: '20px'
};





