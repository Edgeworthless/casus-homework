import React from 'react';
import AllTheProviders from './AllTheProviders';

import TheTemplate from './Template';

export default {
    component: TheTemplate,
    title: 'Template',
};

const Template = args => <AllTheProviders><TheTemplate {...args} /></AllTheProviders>;

export const Default = Template.bind({});
Default.args = {
    template: {
        id: 'EDCySL3sLJkkWT4CajCR',
        title: 'Test Template',
        date: new Date(2021, 0, 1, 9, 0).toISOString(),
    },
};
