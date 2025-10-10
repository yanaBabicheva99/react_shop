import { Project } from 'ts-morph';
import path from 'path';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();
const uiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');

const sharedUiDir = project.getDirectory(uiPath);
const componentsDirs = sharedUiDir?.getDirectories();

function isAbsolute(value: string) {
    const layers = ['shared', 'pages', 'entities', 'features', 'app', 'widgets'];
    return layers.some((layer) => value.startsWith(layer));
}

componentsDirs?.forEach((directory) => {
    const indexFilePath = `${directory.getPath()}/index.ts`;
    const uiDirPath = `${directory.getPath()}/ui`;
    const uiDirectories = project.getDirectory(uiDirPath);
    const codes: string[] = [];

    uiDirectories?.getDirectories().forEach((dir) => {
        const code = `export * from './ui/${dir.getBaseName()}/${dir.getBaseName()}';`;
        codes.push(code);
    });

    // const indexFile = directory.getSourceFile(indexFilePath);

    if (!uiDirectories) {
        const code = `export * from './${directory.getBaseName()}';`;
        codes.push(code);
    }
    const file = directory.createSourceFile(indexFilePath, codes.join('\n'), { overwrite: true });
    file.save();
});

files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations();
    importDeclarations.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue();
        const valueWithoutAlias = value.replace('@/', '');

        const segments = valueWithoutAlias.split(/\\|\//);
        const isSharedLayer = segments?.[0] === 'shared';
        const isUiSlice = segments?.[1] === 'ui';

        if (isAbsolute(valueWithoutAlias) && isSharedLayer && isUiSlice) {
            const result = segments.slice(0, 3).join('/');
            importDeclaration.setModuleSpecifier(`@/${result}`);
        }
    });
});

project.save();
