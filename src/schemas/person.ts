import { defineField, defineType } from 'sanity'

export default defineType({
    name: "person",
    title: "person",
    type: "document",
    fields:[
        defineField({
            name: 'name',
            title: 'jméno',
            type: 'string',
          }),
          defineField({
            name: 'age',
            title: 'věk',
            type: 'number',
          }),
    ]

})