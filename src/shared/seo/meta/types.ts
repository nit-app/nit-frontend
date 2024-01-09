interface OgTag {
    property: string;
    content: string;
    key: string;
}

interface Tag {
    name: string;
    content: string;
    key: string;
}

export interface Meta {
    tags?: (Tag | OgTag)[];
    title?: string;
}
