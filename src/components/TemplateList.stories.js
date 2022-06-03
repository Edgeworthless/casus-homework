import React from 'react';

import { PureTemplateList } from './TemplateList';
import * as TemplateStories from './Template.stories';
import AllTheProviders from './AllTheProviders';

export default {
    component: PureTemplateList,
    title: 'TemplateList',
    decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
};

const Template = args => <AllTheProviders><PureTemplateList {...args} /></AllTheProviders>;

export const Default = Template.bind({});
Default.args = {
    templates: [
        { ...TemplateStories.Default.args.template, id: '1', title: 'Task 1', date: new Date().toISOString() },
        { ...TemplateStories.Default.args.template, id: '2', title: 'Task 2', date: new Date().toISOString() },
        { ...TemplateStories.Default.args.template, id: '3', title: 'Task 3', date: new Date().toISOString() },
        { ...TemplateStories.Default.args.template, id: '4', title: 'Task 4', date: new Date().toISOString() },
        { ...TemplateStories.Default.args.template, id: '5', title: 'Task 5', date: new Date().toISOString() },
        { ...TemplateStories.Default.args.template, id: '6', title: 'Task 6', date: new Date().toISOString() },
    ],
    loading: false,
    error: false
};

export const Loading = Template.bind({});
Loading.args = {
    templates: [],
    loading: true,
    error: false
};

export const Error = Template.bind({});
Error.args = {
    templates: [],
    loading: true,
    error: true
};

export const Empty = Template.bind({});
Empty.args = {
    templates: [],
    loading: false,
    error: false
};