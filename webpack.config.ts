import path from 'path';
import { BuildEnv, BuildPaths } from './config/build/types/config';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const mode = env.mode || 'development';
    const port = env.port || 3000;
    const isDev = mode === 'development';
    const api = isDev ? 'http://localhost:8000' : 'https://production.ru';
    const project = 'frontend';

    return buildWebpackConfig({
        paths,
        mode,
        port,
        isDev,
        api,
        project,
    });
};
