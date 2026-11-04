import {Block} from "payload";

export const BookShelf: Block = {
    slug: "Bookshelf",
    interfaceName: "Bookshelf",
    labels: {
        singular: "bookshelf",
        plural: "bookshelf"
    },
    admin: {
        group: "Content",
        disableBlockName: true
    },
    fields: [
        {
            name: "image",
            type: "upload",
            relationTo: "media"
        },
        {
            name: "heading",
            type: "text",
            required: true
        },
        {
            name: "text",
            type: "textarea",
            required: true
        },
        {
            name: "button",
            type: "group",
            fields: [
                {
                    name: "label",
                    type: "text",
                    required: true,
                    admin: {
                        description: "Button text. eg. se våre kommende arrangementer "
                    }
                },
                {
                    name: "page",
                    type: "relationship",
                    relationTo: "pages",
                    required: true

                },
            ],
        }
    ]
}