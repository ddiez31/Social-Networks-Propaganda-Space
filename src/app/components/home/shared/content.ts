export class Content {
    number: string;
    title: string;
    section: string;
    subContent?: {
        number: string;
        title: string;
        subSection: string;
        }[];
}
