import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCSSLoader } from './loaders/buildCSSLoader';
import { buildSVGLoader } from './loaders/buildSVGLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = buildSVGLoader();

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const babelLoaderCode = buildBabelLoader({ isDev, isTsx: false });
    const babelLoaderTsxCode = buildBabelLoader({ isDev, isTsx: true });

    // const typescriptLoader = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    // };

    const cssLoader = buildCSSLoader(isDev);

    return [
        svgLoader,
        fileLoader,
        babelLoaderCode,
        babelLoaderTsxCode,
        // typescriptLoader,
        cssLoader,
    ];
}
