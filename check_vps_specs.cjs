const fs = require('fs');
const path = require('path');

// Folder yang akan di-scan untuk estimasi ukuran web saat ini
const projectRoot = process.cwd();

// Fungsi untuk menghitung ukuran folder (rekursif)
function getDirSize(dirPath) {
  let size = 0;
  try {
    const files = fs.readdirSync(dirPath);
    for (let i = 0; i < files.length; i++) {
      const filePath = path.join(dirPath, files[i]);
      const stats = fs.statSync(filePath);
      
      // Lewati folder yang tidak perlu untuk estimasi production asset
      if (stats.isDirectory()) {
        if (!['node_modules', '.git', '.next'].includes(files[i])) {
          size += getDirSize(filePath);
        }
      } else {
        size += stats.size;
      }
    }
  } catch (e) {
    // Abaikan error permission dll
  }
  return size;
}

// 1. Cek ukuran file project saat ini (exclude node_modules & .git)
console.log('🔄 Menghitung ukuran project saat ini...');
const projectSizeBytes = getDirSize(projectRoot);
const projectSizeMB = (projectSizeBytes / (1024 * 1024)).toFixed(2);

// 2. Estimasi kebutuhan CMS
// Asumsi CMS modern seperti Strapi, Directus, atau PayloadCMS
const cmsBaseStorageMB = 500; // Base instalasi + modules
const cmsMediaStorageMB = 5000; // Asumsi alokasi awal 5GB untuk gambar/video/asset CMS
const dbStorageMB = 2048; // Asumsi alokasi 2GB untuk database (PostgreSQL/MySQL)

// 3. Estimasi Total Storage Minimum
const totalStorageBufferMB = 10240; // 10GB untuk OS Ubuntu/Debian + Logs + Swap
const recommendedStorageMB = parseFloat(projectSizeMB) + cmsBaseStorageMB + cmsMediaStorageMB + dbStorageMB + totalStorageBufferMB;
const recommendedStorageGB = Math.ceil(recommendedStorageMB / 1024);

// 4. Estimasi RAM Minimum
// - OS (Ubuntu/Debian): ~500MB
// - Web Server (Nginx/Caddy) + Frontend static/SSR: ~250MB - 500MB
// - CMS (Node.js backend): ~1GB minimum (Strapi/Directus berat di RAM saat build/run)
// - Database (PostgreSQL/MySQL): ~500MB - 1GB
const minRamGB = 2; // Kurang dari 2GB bakal sering OOM (Out of Memory) pas build CMS
const recommendedRamGB = 4; // Sangat direkomendasikan untuk kelancaran Web + CMS + DB dalam 1 VPS

// 5. Output Hasil Estimasi
console.log('\n==================================================');
console.log('📊 ESTIMASI KEBUTUHAN VPS (WEB + CMS + DATABASE)');
console.log('==================================================');
console.log(`📁 Ukuran Project Frontend (Raw): ~${projectSizeMB} MB`);
console.log(`🖼️  Estimasi Asset & Media CMS : ~${(cmsMediaStorageMB / 1024).toFixed(1)} GB`);
console.log(`🗄️  Estimasi Database          : ~${(dbStorageMB / 1024).toFixed(1)} GB`);
console.log(`⚙️  Kebutuhan OS & Sistem      : ~${(totalStorageBufferMB / 1024).toFixed(1)} GB`);
console.log('--------------------------------------------------');
console.log(`💾 REKOMENDASI STORAGE VPS : MINIMAL ${recommendedStorageGB} GB (Disarankan 25GB+ SSD/NVMe)`);
console.log('--------------------------------------------------');
console.log(`🧠 KEBUTUHAN RAM (MEMORY)`);
console.log(`   - Minimal     : ${minRamGB} GB (Bisa jalan, tapi rawan ngelag pas build CMS)`);
console.log(`   - Disarankan  : ${recommendedRamGB} GB+ (Aman buat Nginx + Frontend + CMS + Database)`);
console.log('--------------------------------------------------');
console.log(`⚙️ KEBUTUHAN CPU (vCPU)`);
console.log(`   - Minimal     : 1 vCPU`);
console.log(`   - Disarankan  : 2 vCPU (Supaya load web nggak terganggu pas ada proses di CMS)`);
console.log('==================================================');
console.log('💡 TIPS:');
console.log('1. Kalau budget terbatas, ambil VPS 2GB RAM / 1 vCPU, TAPI WAJIB set "Swap Memory" 2GB-4GB.');
console.log('2. Gunakan provider seperti DigitalOcean (Droplet Basic), Linode, atau Hetzner Cloud (Sangat murah & kencang).');
console.log('3. Jangan gabungkan Media (gambar CMS) di VPS kalau ukurannya bakal sangat besar, gunakan AWS S3 / Cloudflare R2.');
