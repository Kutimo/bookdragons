import {CollectionConfig} from "payload";


export const Events: CollectionConfig = {
    slug: "Events",
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
            name: "date",
            type: "date",
            required: true,
            admin: {
                date: {
                    pickerAppearance: "dayOnly",
                }
            }
        },
        {
            name: "Start time",
            type: "date",
            admin: {
                date: {
                    pickerAppearance: "timeOnly"
                }
            }
        },
        {
            name: "End time",
            type: "date",
            admin: {
                date: {
                    pickerAppearance: "timeOnly"
                }
            }
        },
        {
            name: "description",
            type: "textarea",
        },
        {
            name: "ticket price",
            type: "text"
        },
    ]
}