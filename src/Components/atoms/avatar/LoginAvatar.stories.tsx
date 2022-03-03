import LoginAvatar from "./LoginAvatar";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: "atoms/avatar/LoginAvatar",
    Component: LoginAvatar,
} as ComponentMeta<typeof LoginAvatar>;

const Template: ComponentStory<typeof LoginAvatar> = () => (
    <LoginAvatar />
);

export const Primary = Template.bind({})
