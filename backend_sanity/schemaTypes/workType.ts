export default {
    name: 'works',
    title: 'Works',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'bulletPoints',
            title: 'Bullet Points',
            type: 'array',
            of: [
                {
                    type: 'string',
                },
            ],
        },
        {
            name: 'projectLink',
            title: 'Project Link',
            type: 'string',
        },
        {
            name: 'codeLink',
            title: 'Code Link',
            type: 'string',
        },
        {
            name: 'imgUrl',
            title: 'ImageUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [
                {
                    name: 'tag',
                    title: 'Tag',
                    type: 'string'
                }
            ]
        },
        {
            name: 'isConfidential',
            title: 'Is Confidential',
            type: 'boolean',
            description: 'Mark this as true if the project is confidential',
        },
    ],
};
