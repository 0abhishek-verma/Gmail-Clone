import {AccessTimeOutlined,DeleteOutline,InsertDriveFileOutlined, MailOutline, Photo, SendOutlined, StarOutline } from "@mui/icons-material"


export const SIDEBAR_DATA =[
    {
        name: 'inbox',
        title: 'Inbox',
        icon: Photo,
    },
    {
        name: 'starred',
        title: 'Starred',
        icon: StarOutline,
    },
    {
        name: 'snoozed',
        title: 'Snoozed',
        icon: AccessTimeOutlined,
    },
    {
        name: 'sent',
        title: 'Sent',
        icon: SendOutlined,
    },
    {
        name: 'drafts',
        title: 'Drafts',
        icon: InsertDriveFileOutlined,
    },
    {
        name: 'bin',
        title: 'Bin',
        icon: DeleteOutline,
    },
    {
        name: 'allmail',
        title: 'All Mail',
        icon: MailOutline,
    },
];