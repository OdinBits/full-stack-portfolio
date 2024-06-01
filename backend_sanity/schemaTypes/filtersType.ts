
export default {
    name: 'filterOptions',
    title: 'Filter Options',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'options',
            title: 'Options',
            type: 'array',
            of: [
                {
                    type: 'string',
                },
            ],
        },
    ],
};
