import MarkdownIt from 'markdown-it';

declare module 'markdown-it' {
    type DirectiveHandler = (...args: any[] | undefined) => boolean | void;

    interface MarkdownItWithDirectives extends MarkdownIt {
        inlineDirectives?: Record<string, DirectiveHandler>;
        blockDirectives?: Record<string, DirectiveHandler>;
    }
}

declare function load(md: MarkdownIt): void;

export default load;
