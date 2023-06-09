import React from 'react';
import { Header } from './Header';
export default {
    title: 'Example/Header',
    component: Header,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};
var Template = function (args) { return <Header {...args}/>; };
export var LoggedIn = Template.bind({});
LoggedIn.args = {
    user: {
        name: 'Jane Doe',
    },
};
export var LoggedOut = Template.bind({});
LoggedOut.args = {};
//# sourceMappingURL=Header.stories.jsx.map