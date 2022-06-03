import { render, screen } from "@testing-library/react";
import * as TemplateStories from "../components/Template.stories";
import * as TemplateListStories from "../components/TemplateList.stories";
import * as TemplatePageStories from "../pages/TemplatesPage.stories";

import { composeStories } from "@storybook/testing-react";

const TemplateStory = composeStories(TemplateStories);
const TemplateListStory = composeStories(TemplateListStories);
const { PageDefault } = composeStories(TemplatePageStories);

test("single template render", () => {
  render(<TemplateStory.Default />);
  const headerElement = screen.getByText(/Test Template/i);
  expect(headerElement).toBeInTheDocument();
});

test("render list default", () => {
  render(<TemplateListStory.Default />);
  const headerElement = screen.getByText(/Task 1/i);
  expect(headerElement).toBeInTheDocument();
});

test("render list loading", () => {
  render(<TemplateListStory.Loading />);
  const headerElement = screen.getAllByText(/Loading/i)[0];
  expect(headerElement).toBeInTheDocument();
});

test("render list error", () => {
  render(<TemplateListStory.Error />);
  const headerElement = screen.getByText(/Oh no!/i);
  expect(headerElement).toBeInTheDocument();
});

test("render empty list", () => {
  render(<TemplateListStory.Empty />);
  const headerElement = screen.getByText(/You have no templates/i);
  expect(headerElement).toBeInTheDocument();
});
