export default {
    name: 'service',
    type: 'document',
      title: 'Services',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
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
       name: 'slug',
       title: 'Permalink',
       type: 'slug',
       options: {
        source: 'name',
        maxLength: 90,
       }
      },
      {
        name: 'price',
        title: 'Price (EUR)',
        type: 'number',
      },
      {
        name: 'details',
        title: 'Details',
        type: 'text',
        options: {
            maxLength: 90,
        }
      },
      {
        title: 'Text', 
        name: 'text',
        type: 'array', 
        of: [{type: 'block'}]
      }
    ]
  }