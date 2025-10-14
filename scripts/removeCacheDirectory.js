import fs from 'fs/promises';
import path from 'path';

async function deleteCacheFolder() {
    const cachePath = path.join(process.cwd(), 'node_modules', '.cache');
    if (cachePath) {
        try {
            await fs.rm(cachePath, { recursive: true, force: true });
            console.log('Папка .cache удалена');
        } catch (error) {
            console.log('Папка .cache не найдена или не может быть удалена');
        }
    }
}

// Вызов функции
deleteCacheFolder();
