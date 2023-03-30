import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import Button from './Button';
// You can learn about this: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
    title: 'Button',
    component: Button,
};
var Template = function (args) { return _jsx(Button, __assign({}, args)); };
export var Primary = Template.bind({});
Primary.args = {
    label: "Primary"
};
export var Secondary = Template.bind({});
Secondary.args = {
    label: "Secondary"
};
//# sourceMappingURL=Button.stories.js.map