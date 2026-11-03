# SIPAD Taput (Sistem Informasi Pendapatan Asli Daerah Kabupaten Tapanuli Utara)

![License](https://img.shields.io/badge/License-Government_Internal-blue.svg)
![Version](https://img.shields.io/badge/Version-v2.4.1_Prototype-emerald.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v3.x-38bdf8.svg)
![Status](https://img.shields.io/badge/Status-Ready_for_Validation-success.svg)

**SIPAD Taput** adalah prototype antarmuka web modern untuk tata kelola Pendapatan Asli Daerah (PAD) Kabupaten Tapanuli Utara. Sistem ini dirancang untuk mendukung transformasi digital perpajakan daerah, otomasi penetapan SKP-D / SKR-D, verifikasi tanda tangan elektronik tersertifikasi (BSrE BSSN), integrasi penagihan Host-to-Host perbankan (Bank Sumut), dan pengawasan kepatuhan wajib pajak secara transparan dan akuntabel.

---

## 🌟 Fitur Utama & Modul Sistem

Sistem ini dikembangkan mengacu pada **Product Requirements Document (PRD)** resmi yang mencakup:

### 1. Dashboard Eksekutif & Manajemen Tagihan (SKP-D & SKR-D)
- **Monitoring Real-time:** Menampilkan capaian realisasi penerimaan, total target penetapan APBD, berkas dalam antrean verifikasi, dan status jatuh tempo.
- **Daftar Ketetapan Interaktif:** Pencarian cerdas berdasarkan SKP-D, Kode Bayar Virtual Account (VA), NOP, atau nama Wajib Pajak.
- **Filter Multi-kriteria:** Penyaringan berdasarkan jenis penerimaan daerah (PBJT Hotel, Restoran, Pajak MBLB, PBB-P2, Retribusi Pasar, dll.) dan status penagihan (*Terbit*, *Lunas*, *Kedaluwarsa*, *Dibatalkan*).
- **Aksi Cepat:** Salin kode bayar ke clipboard, cetak format resmi lembar SKP-D, kalkulasi denda keterlambatan, pembatalan resmi via Berita Acara, dan ekspor data ke format **CSV**.

### 2. Alur Penetapan Pajak Bertingkat (Assessment Workflow)
- **SOP 4 Tahap Terstruktur:**
  1. *Tahap 01:* Draf & Verifikasi SPTD oleh Petugas Verifikator Lapangan.
  2. *Tahap 02:* Telaah Regulasi & Validasi Piutang oleh Kasi Penetapan PAD.
  3. *Tahap 03:* Otorisasi Tanda Tangan Elektronik (TTE) Tersertifikasi BSrE - BSSN oleh Kepala Bidang / Kepala Badan.
  4. *Tahap 04:* Penerbitan SKP-D & Pengaktifan Billing Host-to-Host Kas Daerah.
- **Audit Trail & Digital Stamp:** Riwayat telaah kronologis, pencatatan IP address, waktu penetapan, dan integritas kriptografi SHA-256.

### 3. Konfigurasi Tarif Legal (Fiscal Lock Guarantee)
- **Katalog Aturan Aktif:** Matriks tarif pajak dan retribusi berbasis rekening Kepmendagri 050/5889/2021.
- **Jaminan Keamanan Fiskal:** Penambahan atau perubahan tarif hanya berlaku prospektif untuk masa pajak berikutnya; tagihan yang telah terbit terkunci permanen untuk mencegah sengketa audit BPK-RI.
- **Formulir Interaktif:** Tambah tarif baru, skema persentase, nominal tetap, atau tarif per satuan volume (m³ / m²).

### 4. Interaktivitas Lengkap
- 📝 **Modal Buat Draf Penetapan:** Simulasi input ketetapan baru dengan kalkulasi nilai pokok otomatis berdasarkan DPP dan tarif.
- 📄 **Modal Telaah Dokumen SKP-D:** Pratinjau lembar ketetapan resmi lengkap dengan QR code validasi BSrE dan rincian komponen objek.
- 🔐 **Simulasi Otorisasi TTE BSrE:** Dialog otorisasi dengan input passphrase pejabat penandatangan.
- 🚫 **Konfirmasi Pembatalan Tagihan:** Dialog mitigasi risiko audit forensik dengan pemilihan alasan legal dan pencatatan BAP.
- 📊 **Ekspor CSV:** Unduh seketika data penagihan ke file spreadsheet `.csv`.

---

## 🏛️ Landasan Hukum & Regulasi Terkait

Sistem dirancang selaras dengan regulasi fiskal nasional dan daerah terkini:
1. **Undang-Undang Nomor 1 Tahun 2022** tentang Hubungan Keuangan antara Pemerintah Pusat dan Pemerintahan Daerah (UU HKPD).
2. **Peraturan Daerah Kabupaten Tapanuli Utara Nomor 1 Tahun 2024** tentang Pajak Daerah dan Retribusi Daerah (PDRD).
3. **Peraturan Bupati Tapanuli Utara Nomor 12 Tahun 2024** tentang Tata Cara Pelaksanaan Pemungutan Pajak Daerah dan Retribusi Daerah.
4. **Keputusan Menteri Dalam Negeri Nomor 050/5889/2021** tentang Klasifikasi, Kodefikasi, dan Nomenklatur Perencanaan Pembangunan dan Keuangan Daerah.

---

## 📁 Struktur Direktori Repositori

```text
pelitaaaa/
├── index.html                      # Halaman utama aplikasi (bisa langsung dibuka di browser)
├── PRD-SIPAD-Taput.md              # Dokumen Spesifikasi Produk (PRD) lengkap ~1.300 baris
├── README.md                       # Dokumentasi resmi proyek
├── .gitignore                      # Konfigurasi file yang diabaikan git
├── css/
│   └── style.css                   # Stylesheet kustom & tema warna SIPAD Taput
├── js/
│   └── app.js                      # Logika interaktif, modal, ekspor CSV, dan filtering
└── SIPAD_Taput_Antigravity/        # Paket arsip terisolasi untuk IDE Antigravity
    ├── index.html                  # Halaman prototype identik
    └── README.md                   # Catatan penggunaan khusus Antigravity
```

---

## 🚀 Cara Menjalankan & Membuka Proyek

Proyek ini dibangun menggunakan **HTML5 modern, Tailwind CSS (via CDN), dan JavaScript Vanilla**, sehingga **tidak memerlukan build step atau instalasi node modules yang rumit**.

### Opsi 1: Buka Langsung di Web Browser
1. Clone atau unduh repositori ini.
2. Klik dua kali file `index.html` pada root folder, atau klik kanan lalu pilih **Open with Google Chrome / Microsoft Edge / Firefox**.

### Opsi 2: Menggunakan Live Server / VS Code
1. Buka folder proyek di Visual Studio Code atau Antigravity IDE.
2. Klik kanan pada `index.html` lalu pilih **Open with Live Server**.
3. Akses via browser di `http://127.0.0.1:5500`.

### Opsi 3: Menggunakan Python HTTP Server
Jalankan perintah berikut di terminal:
```bash
python -m http.server 8000
```
Buka peramban di `http://localhost:8000`.

### Opsi 4: Publikasi via GitHub Pages
1. Masuk ke tab **Settings** di repositori GitHub `pelitajuliasilaban-boop/pelitaaaa`.
2. Buka menu **Pages** di bilah sisi kiri.
3. Pada bagian **Build and deployment**, pilih Source: **Deploy from a branch**.
4. Pilih Branch: `main` dan folder: `/ (root)`, lalu klik **Save**.
5. Sistem akan otomatis mempublikasikan aplikasi dan memberikan URL web langsung yang bisa diakses publik.

---

## 👤 Tim Pengembang & Kontak

- **Pengembang / Pemilik Repositori:** [Pelita Julia Silaban](https://github.com/pelitajuliasilaban-boop)
- **Organisasi / Instansi:** Bapenda Pemerintah Kabupaten Tapanuli Utara
- **Dokumentasi Lengkap:** Silakan baca [PRD-SIPAD-Taput.md](PRD-SIPAD-Taput.md) untuk mempelajari seluruh spesifikasi teknis, arsitektur data, skema integrasi API, dan skenario pengujian UAT.

