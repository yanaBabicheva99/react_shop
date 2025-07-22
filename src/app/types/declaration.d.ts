declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}

declare module '*.png'
declare module '*.jpeg'
declare module '*.jpg'
declare module '*.gif'

declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __Project__: 'storybook' | 'jest' | 'frontend';

type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
