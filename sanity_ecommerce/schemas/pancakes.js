export default {
    name: 'pancakes',
    title: 'Pancakes',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'calories',
            title: 'Calories',
            type: 'string',
        },
        {
            name: 'fat',
            title: 'Fat',
            type: 'string',
        },
        {
            name: 'saturatedFat',
            title: 'SaturatedFat',
            type: 'string',
        },
        {
            name: 'transFat',
            title: 'TransFat',
            type: 'string',
        },
        {
            name: 'sodium',
            title: 'Sodium',
            type: 'string',
        },
        {
            name: 'carbs',
            title: 'Carbs',
            type: 'string',
        },
        {
            name: 'fiber',
            title: 'Fiber',
            type: 'string',
        },
        {
            name: 'sugars',
            title: 'Sugars',
            type: 'string',
        },
        {
            name: 'protein',
            title: 'Protein',
            type: 'string',
        },
        {
            name: 'highlight',
            title: 'Highlight',
            type: 'string',
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        }
    ]
}