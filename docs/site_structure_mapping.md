
| No | Nama Section di Brief | Isi / Konten Wajib | Komponen Implementasi Saat Ini |
| :-- | :--- | :--- | :--- |
| **1.** | **Hero Section** | • USP: Autentisitas Wilayah, Teknik ATBM. <br>• Visual: Kesan Heritage & Premium. | `components/Hero.tsx` <br>*(Sudah memuat Headline "Masterpiece" & USP text)* |
| **2.** | **Edukasi & USP** | • ATBM vs Printing. <br>• Material Rayon Viskosa (Dingin/Jatuh). <br>• Standar Ekspor. | `components/Features.tsx` <br>*(Icon & Teks singkat tentang Handmade, Organik, Global)* |
| **3.** | **Filosofi & Story** | • Filosofi Garis (Hablum Minallah/Minannas). <br>• Karakter "Blakasuta" (Jujur/Tegas). <br>• Simbol Kembangan (Suci). | `components/Philosophy.tsx` <br>*(Layout Grid gelap dengan  penjelasan mendalam)* |
| **4.** | **Katalog Produk (Tiering)** | • **Tier 1 (Sultan):** Botolan/Prilik. <br>• **Tier 2 (Classic):** Balian/Ceplok. <br>• **Tier 3 (Modern):** Abstrak. | `components/ProductBento.tsx` <br>*(Menggunakan layout kotak-kotak artistik)* |
| **5.** | **Social Proof** | • Testimoni Ekspor. <br>• Foto Pejabat/"Rabu Goyor". | Di `page.tsx` (Bagian Quote "Kami tidak mencetak..."). <br>⚠️ *Belum ada section khusus foto pejabat/testimoni visual.* |
| **6.** | **Call to Action (CTA)** | • Tombol ke WhatsApp. <br>• Tidak ada Direct Checkout. | Terintegrasi di `Navbar`, `Hero`, dan `ProductBento`. |
| **7.** | **Footer** | • Info Kontak. <br>• Copyright. | `components/Footer.tsx` |
