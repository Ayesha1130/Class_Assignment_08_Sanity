import { defineType,defineField,defineArrayMember } from "sanity"
export const post = defineType({
    name: 'post',
    type: 'document',
    title: 'Post',
    fields:[
       defineField( {
            name:'title',
            type:'string',
            title:'Title',
            description:'Post Title'

        }),
        //slug field
        defineField({
            
                name: 'slug',
                type:'slug',
                title: 'Slug',
                description: 'A slug is a URL-friendly version of the post title',
                options: {
                    source: 'title',
                    maxLength:96,


                },
                validation:Rule=>Rule.required()
            }
        ),
        defineField({
            name:'summary',
            type:'text',
            title:'Summary',
            description:'Post Summary'

        }
        ),
        defineField(
            {
                name:'image',
                type:'image',
                title:'Image',
                options:{
                    hotspot: true,
                   }
    
            }
        ),
        defineField(
            {
                name: 'content',
                type: 'array',
                title: 'Content',
                of: [
                    defineArrayMember({
                        type: 'block',
                    })
                ]
            }
        ),
        defineField({
            name: 'author',
            type: 'reference',
            title: 'Author',
            to:[
                {
                    type:'author'
                }
            ]


        })

    ]
}
)