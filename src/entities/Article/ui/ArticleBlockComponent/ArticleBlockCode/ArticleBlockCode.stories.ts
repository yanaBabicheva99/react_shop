import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { ArticleBlockType } from '../../../model/consts/articleConsts';
import { ArticleBlockCode } from './ArticleBlockCode';

const meta: Meta<typeof ArticleBlockCode> = {
    title: 'entities/ArticleBlockCode',
    component: ArticleBlockCode,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticleBlockCode>;

export const NormalArticleBlockCode: Story = {
    args: {
        block: {
            id: '1',
            type: ArticleBlockType.CODE,
            code: 'const meta: Meta<typeof ArticleBlockCode> = {\n'
                + '    title: \'entities/ArticleBlockCode\',\n'
                + '    component: ArticleBlockCode,\n'
                + '    parameters: {\n'
                + '        layout: \'centered\',\n'
                + '    },\n'
                + '    tags: [\'autodocs\'],\n'
                + '    argTypes: {},\n'
                + '};',
        },
    },
};

NormalArticleBlockCode.decorators = ThemeDecorator(Theme.LIGHT);

export const DarkArticleBlockCode: Story = {
    args: {
        block: {
            id: '1',
            type: ArticleBlockType.CODE,
            code: 'const meta: Meta<typeof ArticleBlockCode> = {\n'
                + '    title: \'entities/ArticleBlockCode\',\n'
                + '    component: ArticleBlockCode,\n'
                + '    parameters: {\n'
                + '        layout: \'centered\',\n'
                + '    },\n'
                + '    tags: [\'autodocs\'],\n'
                + '    argTypes: {},\n'
                + '};',
        },
    },
};

DarkArticleBlockCode.decorators = ThemeDecorator(Theme.DARK);

export const OrangeArticleBlockCode: Story = {
    args: {
        block: {
            id: '1',
            type: ArticleBlockType.CODE,
            code: 'const meta: Meta<typeof ArticleBlockCode> = {\n'
                + '    title: \'entities/ArticleBlockCode\',\n'
                + '    component: ArticleBlockCode,\n'
                + '    parameters: {\n'
                + '        layout: \'centered\',\n'
                + '    },\n'
                + '    tags: [\'autodocs\'],\n'
                + '    argTypes: {},\n'
                + '};',
        },
    },
};

OrangeArticleBlockCode.decorators = ThemeDecorator(Theme.ORANGE);
