export default {
    name: 'person',
    title: 'Person',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule: any) => Rule.required().error('Name is required'),
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: any) => Rule.required().error('Title is required'),
        },
        {
            name: 'contactNumber',
            title: 'Contact Number',
            type: 'string',
            validation: (Rule: any) => Rule.required().regex(/^\d{10}$/, {
                name: 'phone', 
                invert: false, 
            }).error('Contact Number must be a valid 10-digit phone number'),
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule: any) => Rule.required().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
                name: 'email', 
                invert: false, 
            }).error('Email must be a valid email address'),
        },
        {
            name: 'rights',
            title: 'Rights',
            type: 'string',
            validation: (Rule: any) => Rule.required().error('Rights is required'),
        },
        {
            name: 'photo',
            title: 'Photo',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        
    ],
};
