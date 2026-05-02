import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicImagesPath = path.join(__dirname, '../public/Images');

async function convertImages(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            await convertImages(filePath);
        } else if (/\.(png|jpg|jpeg)$/i.test(file)) {
            const outputFilePath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
            
            try {
                await sharp(filePath)
                    .webp({ quality: 80 })
                    .toFile(outputFilePath);
                console.log(`Converted: ${filePath} -> ${outputFilePath}`);
                
                // Optional: Delete the original file
                // fs.unlinkSync(filePath);
            } catch (err) {
                console.error(`Error converting ${filePath}:`, err);
            }
        }
    }
}

console.log('Starting image conversion to WebP...');
convertImages(publicImagesPath)
    .then(() => console.log('Conversion complete!'))
    .catch(err => console.error('Conversion failed:', err));
