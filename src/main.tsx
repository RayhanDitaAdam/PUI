import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // Impor komponen utama
import './index.css'

// ==========================================================
// GLOBAL AUTO-TRACK META PIXEL (LINK & BUTTON CLICKS)
// ==========================================================
if (typeof window !== 'undefined') {
  document.addEventListener('click', (e) => {
    // Memastikan objek fbq dari Meta Pixel di index.html udah ready
    const fbq = (window as any).fbq;
    if (!fbq) return;

    const target = e.target as HTMLElement;

    // 1. Cek kalau yang diklik adalah Link/Anchor (Tag <a>)
    const targetLink = target.closest('a');
    if (targetLink) {
      fbq('trackCustom', 'Klik_Link', {
        url_tujuan: targetLink.href,
        teks_link: targetLink.innerText.trim() || 'Tanpa Teks'
      });
      return; // Stop biar gak double track kalau strukturnya nested
    }

    // 2. Cek kalau yang diklik adalah Tombol (Tag <button>)
    const targetBtn = target.closest('button');
    if (targetBtn) {
      fbq('trackCustom', 'Klik_Tombol', {
        teks_tombol: targetBtn.innerText.trim() || targetBtn.id || targetBtn.className || 'Tanpa Teks'
      });
    }
  }, true); // Menggunakan capturing phase agar ter-trigger sebelum distop stopPropagation oleh component lain
}

// Merender komponen App ke dalam elemen HTML dengan id="root"
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)