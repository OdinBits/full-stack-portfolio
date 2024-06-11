// schemas/newSkills.js

export default {
    name: 'newSkills',
    title: 'newSkills',
    type: 'document',
    fields: [
        {
            name: 'id',
            title: 'ID',
            type: 'string',
        },
        {
            name: 'role',
            title: 'Role',
            type: 'string',
        },
        {
            name: 'code',
            title: 'Code',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                        },
                        {
                            name: 'points',
                            title: 'Points',
                            type: 'array',
                            of: [{ type: 'string' }],
                        },
                    ],
                },
            ],
        },
    ],
};
