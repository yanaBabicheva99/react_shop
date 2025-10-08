import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import webpack from 'webpack';
import { buildCSSLoader } from '../build/loaders/buildCSSLoader';
import { buildSVGLoader } from '../build/loaders/buildSVGLoader';

const config: StorybookConfig = {
    stories: [
        '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        'storybook-addon-fetch-mock',
    ],
    webpackFinal: async (config) => {
        config?.module?.rules?.push(buildCSSLoader(true));
        config?.resolve?.extensions?.push('.tsx', '.ts');
        config?.resolve?.modules?.push(path.resolve(__dirname, '../', '../', 'src'));
        config.resolve!.alias = {
            ...config.resolve!.alias,
            '@': path.resolve(__dirname, '..', '..', 'src'),
        };
        // @ts-ignore
        config?.module?.rules?.map?.((rule: webpack.RuleSetRule) => {
            if (/svg/.test(rule.test as string) || /file-loader/.test(rule.loader as string)) {
                rule.exclude = /\.svg$/i;
            }
            return rule;
        });

        config?.module?.rules?.push(buildSVGLoader());
        config?.plugins?.push(new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify('https://testmock.ru'),
            __Project__: JSON.stringify('storybook'),
        }));

        return config;
    },
    framework: {
        name: '@storybook/react-webpack5',
        options: {
            builder: {
                useSWC: true,
            },
        },
    },
    swc: () => ({
        jsc: {
            transform: {
                react: {
                    runtime: 'automatic',
                },
            },
        },
    }),
    docs: {
        autodocs: 'tag',
    },
};
export default config;
