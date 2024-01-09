import { defineField, defineType } from 'sanity'

export default defineType({
    name: "person",
    title: "person",
    type: "object",
    fields:[
        defineField({
            name: 'firstName',
            title: 'křestní',
            type: 'string',
          }),
          defineField({
            name: 'lastName',
            title: 'príjmení',
            type: 'string',
          }),
    ]

})