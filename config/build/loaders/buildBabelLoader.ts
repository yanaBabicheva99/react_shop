import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';

interface BuildBabelLoaderOptions {
    isDev: boolean
    isTsx?: boolean;
}

export const buildBabelLoader = ({ isDev, isTsx }: BuildBabelLoaderOptions) => ({
    test: isTsx ? /\.(jsx|tsx)/ : /\.(js|ts)/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            cacheDirectory: true,
            presets: ['@babel/preset-env'],
            plugins: [
                [
                    'i18next-extract', {
                        locales: ['en', 'ru'],
                        keyAsDefaultValue: true,
                    },
                ],
                ['@babel/plugin-transform-runtime'],
                ['@babel/plugin-transform-typescript', {
                    isTSX: isTsx,
                }],
                isTsx && !isDev && [
                    babelRemovePropsPlugin, {
                        props: ['data-testid'],
                    }],
                isDev && require.resolve('react-refresh/babel'),
            ].filter(Boolean),
        },
    },
});
