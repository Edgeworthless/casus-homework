import React from "react";
import { TemplatesPage } from "./TemplatesPage";
import AllTheProviders from "../components/AllTheProviders";

export default {
  component: TemplatesPage,
  // Overkill, should be mocked using msw
  decorators: [(story) => <AllTheProviders>{story()}</AllTheProviders>],
  title: "TemplatesPage",
};

const Template = (args) => <TemplatesPage {...args} />;

export const Default = Template.bind({});
