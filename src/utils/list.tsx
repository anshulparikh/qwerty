export interface ListType {
    id: number;
    title: string;
    subtitle?: string;
    image?: string;
    description?: string;
    checked?: boolean;
    children?: ListType[];
    link?: string;
    buttonText?: string;
    disable?: boolean;
    tag?: string;
    label?: string;
    path?: string;
    buttonGroup?: Array<string>;
    iconGroup?: Array<string>;

    date?: string;
}

export interface FilterListType {
    id: number;
    label: string;
    count?: string;
    parent?: string;
    slug?: string;
    taxonomy?: number;
    taxonomy_id: number;
    children: FilterListType[];
}
export interface CustomRoutes {
    to: string;
    label: string;
}
export const idFromList = (data: ListType) => data.id;

export const labelFromList = (data: ListType) => data.title;

export const users: ListType[] = [
    {
        id: 1,
        title: "Goerge Michael",
    },
    {
        id: 2,
        title: "Cher",
    },
    {
        id: 3,
        title: "Peter Gabriel",
    },
];
