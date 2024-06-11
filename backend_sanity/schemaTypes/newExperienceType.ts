// schemas/experience.js

export default {
    name: 'newExperience',
    title: 'newExperience',
    type: 'document',
    fields: [
        {
            name: 'id',
            title: 'ID',
            type: 'string',
        },
        {
            name: 'img',
            title: 'Company Logo',
            type: 'image',
            options: {
                hotspot: true, // Enables user to select a hotspot for the image
            },
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'startDate',
            title: 'Start Date',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM-DD',
            },
        },
        {
            name: 'endDate',
            title: 'End Date',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM-DD',
            },
        },
        {
            name: 'detailDesc',
            title: 'Detail Description',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'subTitle',
                            title: 'Subtitle',
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
        {
            name: 'developmentTools',
            title: 'Development Tools',
            type: 'array',
            of: [{ type: 'string' }],
        },
    ],
};
