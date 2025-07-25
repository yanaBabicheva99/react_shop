import webpack from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {
        mode, paths, port, isDev,
    } = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            publicPath: '/',
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        devServer: isDev ? buildDevServer(port) : undefined,
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
    };
}
