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
    ],
    webpackFinal: async (config) => {
        config.module.rules.push(buildCSSLoader(true));
        config.resolve.extensions.push('.tsx', '.ts');
        config.resolve.modules.push(path.resolve(__dirname, '../', '../', 'src'));

        config.module.rules.map((rule: webpack.RuleSetRule) => {
            if (/svg/.test(rule.test as string) || /file-loader/.test(rule.loader)) {
                rule.exclude = /\.svg$/i;
            }
            return rule;
        });

        config.module.rules.push(buildSVGLoader());

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
