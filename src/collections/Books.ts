import {CollectionConfig} from "payload";


export const Books: CollectionConfig = {
        slug: "Books",
        admin: {
            useAsTitle: "title"
        },
        access: {
            read: () => true,
        },
        fields: [
            {
                name: "title",
                type: "text",
                required: true
            },
            {
                name: "author",
                type: "text",
                required: true,
            },
            {
                name: "cover image",
                type: "upload",
                relationTo: "media"
            },
            {
                name: "price",
                type: "number",
                admin: {
                    description: "pris i nok "
                }
            },
            {
                name: "tags",
                type: "text"
            },
    ]
}