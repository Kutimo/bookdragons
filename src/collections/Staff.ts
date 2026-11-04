import {CollectionConfig} from "payload";


export const Staff: CollectionConfig = {
    slug: "staff",
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
            name: "photo",
            type: "upload",
            relationTo: "media"
        },
        {
            name: "bio",
            type: "textarea",
        },
    ]
}