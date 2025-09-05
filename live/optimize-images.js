import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function optimizeImage(inputPath, outputName) {
  const outputDir = path.join(__dirname, 'public', 'images');
  
  try {
    // Create output directory if it doesn't exist
    await fs.mkdir(outputDir, { recursive: true });
    
    // Generate multiple sizes for responsive images
    const sizes = [
      { width: 320, suffix: '-320w' },
      { width: 640, suffix: '-640w' },
      { width: 800, suffix: '-800w' },
      { width: 1200, suffix: '-1200w' },
      { width: 1920, suffix: '-1920w' }
    ];
    
    console.log(`📸 Optimizing ${outputName}...`);
    
    // Generate WebP versions
    for (const size of sizes) {
      await sharp(inputPath)
        .resize(size.width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: 85 })
        .toFile(path.join(outputDir, `${outputName}${size.suffix}.webp`));
      
      console.log(`  ✅ Generated ${outputName}${size.suffix}.webp`);
    }
    
    // Generate optimized JPEG versions
    for (const size of sizes) {
      await sharp(inputPath)
        .resize(size.width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .jpeg({ 
          quality: 85,
          progressive: true,
          mozjpeg: true
        })
        .toFile(path.join(outputDir, `${outputName}${size.suffix}.jpg`));
      
      console.log(`  ✅ Generated ${outputName}${size.suffix}.jpg`);
    }
    
    // Create a main optimized version at 800px width
    await sharp(inputPath)
      .resize(800, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({ 
        quality: 85,
        progressive: true,
        mozjpeg: true
      })
      .toFile(path.join(outputDir, `${outputName}.jpg`));
    
    console.log(`  ✅ Generated main ${outputName}.jpg`);
    
    // Create WebP version
    await sharp(inputPath)
      .resize(800, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality: 85 })
      .toFile(path.join(outputDir, `${outputName}.webp`));
    
    console.log(`  ✅ Generated main ${outputName}.webp`);
    
    console.log(`✨ Successfully optimized ${outputName}\n`);
    
  } catch (error) {
    console.error(`❌ Error optimizing ${outputName}:`, error.message);
  }
}

// Optimize the hero image
async function main() {
  console.log('🚀 Starting image optimization...\n');
  
  const heroImagePath = path.join(__dirname, 'public', 'images', 'hero-image.jpg');
  await optimizeImage(heroImagePath, 'hero-terkovezes');
  
  console.log('✅ Image optimization complete!');
}

main().catch(console.error);