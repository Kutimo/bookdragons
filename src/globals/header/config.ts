import {GlobalConfig} from "payload";

export const Header: GlobalConfig = {
    slug: 'header',
    admin: {
        group: "navigation"
    },
    fields: [
        {
            type: 'array',
            name: 'headerLinks',
            fields: [
                {
                    name: 'destination',
                    type: 'relationship',
                    relationTo: 'pages',
                },
                {
                    name: 'newTab',
                    label: 'Open in a new tab?',
                    type: 'checkbox',
                }
            ],
            minRows: 1,
            maxRows: 5
        }
    ]
}