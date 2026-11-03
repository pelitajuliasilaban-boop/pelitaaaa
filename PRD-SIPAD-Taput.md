# PRODUCT REQUIREMENTS DOCUMENT (PRD)
# SIPAD TAPUT
## Sistem Informasi Pendapatan Asli Daerah Kabupaten Tapanuli Utara

| Informasi | Detail |
|---|---|
| Nama produk | SIPAD Taput |
| Kepanjangan | Sistem Informasi Pendapatan Asli Daerah Kabupaten Tapanuli Utara |
| Pemilik produk | Bapenda / pengelola pendapatan daerah Kabupaten Tapanuli Utara |
| Versi dokumen | 1.0 |
| Status | Draf PRD untuk validasi dan persetujuan |
| Platform | Web Admin, Web Dashboard, Portal Wajib Pajak, Aplikasi Android Petugas |
| Target MVP | 4–6 bulan setelah fase penemuan |
| Target uji coba | 2–3 jenis penerimaan prioritas |
| Pengguna utama | Admin, Petugas Lapangan, Pengelola OPD, Pimpinan Daerah, Wajib Pajak |
| Bahasa aplikasi | Bahasa Indonesia |
| Format dokumen | Markdown |

> **Catatan penting:** Dokumen ini merupakan spesifikasi kebutuhan produk berdasarkan pembahasan awal. Informasi yang belum diputuskan ditandai sebagai OQ (*Open Question*). Angka target kinerja adalah usulan awal, bukan baseline atau capaian resmi Pemerintah Kabupaten Tapanuli Utara.

---

# Daftar Isi

1. [Problem Statement](#1-problem-statement)
2. [Target User dan Persona](#2-target-user-dan-persona)
3. [Goals dan Non-goals](#3-goals-dan-non-goals)
4. [User Stories](#4-user-stories)
5. [Daftar Fitur MVP, V2, dan Pengembangan Lanjutan](#5-daftar-fitur-mvp-v2-dan-pengembangan-lanjutan)
6. [Functional Requirements](#6-functional-requirements-detail-per-fitur-mvp)
7. [Sketsa Data Model](#7-sketsa-data-model)
8. [Edge Case dan Failure State](#8-edge-case-dan-failure-state)
9. [Success Metrics](#9-success-metrics)
10. [Open Questions](#10-open-questions-oq)
11. [Panduan UI/UX dan Arsitektur Informasi](#11-panduan-uiux-dan-arsitektur-informasi)
12. [User Flow Utama](#12-user-flow-utama)
13. [Roadmap Implementasi](#13-roadmap-implementasi)
14. [UAT dan Quality Assurance](#14-uat-dan-quality-assurance)
15. [Risiko dan Mitigasi](#15-risiko-dan-mitigasi)
16. [Tata Kelola Produk](#16-tata-kelola-produk)
17. [Asumsi dan Batasan Dokumen](#17-asumsi-dan-batasan-dokumen)
18. [Persetujuan Dokumen](#18-persetujuan-dokumen)
19. [Ringkasan Eksekutif](#ringkasan-eksekutif)

---

# 1. Problem Statement

## 1.1 Latar Belakang

Pendapatan Asli Daerah (PAD) merupakan salah satu indikator kemampuan pemerintah daerah membiayai pembangunan dan pelayanan publik melalui sumber pendapatan daerah. Pengelolaan PAD mencakup pendataan wajib pajak dan objek, pengaturan tarif berdasarkan peraturan, penetapan kewajiban, penerbitan tagihan, penerimaan pembayaran, rekonsiliasi, serta pelaporan realisasi.

Proses tersebut dapat melibatkan beberapa perangkat daerah, petugas lapangan, bank, dan wajib pajak. Apabila data serta proses belum terintegrasi, pemerintah daerah dapat mengalami keterlambatan informasi, kesulitan menelusuri transaksi, dan terbatasnya visibilitas terhadap potensi pendapatan.

Kondisi aktual di Kabupaten Tapanuli Utara belum diverifikasi melalui baseline operasional. Oleh karena itu, masalah dalam dokumen ini merupakan hipotesis yang perlu diuji melalui wawancara, observasi proses bisnis, dan analisis data.

## 1.2 Problem Statement Utama

Bapenda Kabupaten Tapanuli Utara membutuhkan sistem terintegrasi untuk mengelola siklus PAD dari pendataan hingga pelaporan agar data objek dan wajib pajak lebih akurat, tagihan dapat diterbitkan secara terkontrol, pembayaran dapat ditelusuri, serta realisasi dan tunggakan dapat dipantau secara konsisten.

SIPAD Taput dirancang untuk menghubungkan proses tersebut melalui satu platform dengan hak akses berbasis peran, dukungan pendataan lapangan secara offline, pembayaran nontunai, rekonsiliasi, dan jejak audit.

## 1.3 Masalah yang Hendak Diselesaikan

| Pihak terdampak | Masalah yang dihipotesiskan | Dampak potensial | Solusi yang direncanakan |
|---|---|---|---|
| Bapenda | Data wajib pajak dan objek berpotensi tersebar | Potensi PAD sulit ditelusuri | Master data terpusat |
| Admin pendapatan | Penetapan dan tagihan berpotensi diproses manual | Keterlambatan dan kesalahan | Alur penetapan dan tagihan terstruktur |
| Pimpinan daerah | Laporan realisasi berpotensi terlambat | Keputusan kurang didukung data terkini | Dashboard dan laporan terintegrasi |
| Petugas lapangan | Pendataan terkendala sinyal dan input berulang | Data terlambat atau tidak lengkap | Aplikasi Android offline |
| Pengelola OPD | Setoran sulit dicocokkan dengan penerimaan | Selisih terlambat ditindaklanjuti | Pencatatan setoran dan rekonsiliasi |
| Wajib pajak | Informasi tagihan tidak mudah diakses | Keterlambatan pembayaran | Portal tagihan dan pengingat |
| Pemeriksa internal | Riwayat perubahan dan transaksi tersebar | Pemeriksaan lebih lama | Jejak audit yang hanya-tambah |

## 1.4 Hipotesis yang Harus Divalidasi

1. Data wajib pajak dan objek belum tersedia dalam satu sumber data yang konsisten.
2. Proses pendataan lapangan masih memiliki tahapan manual.
3. Informasi tagihan belum selalu mudah diakses wajib pajak.
4. Pembayaran nontunai belum sepenuhnya terhubung dengan status tagihan dan pelaporan.
5. Rekonsiliasi pembayaran dan mutasi bank membutuhkan pekerjaan manual.
6. Laporan realisasi belum seluruhnya tersedia secara otomatis.
7. Petugas membutuhkan dukungan offline di wilayah dengan konektivitas terbatas.

Hipotesis di atas tidak boleh dianggap sebagai temuan audit atau fakta resmi sebelum divalidasi.

## 1.5 Nilai Produk

| Penerima manfaat | Nilai yang diharapkan |
|---|---|
| Bapenda | Visibilitas data dan penerimaan yang lebih baik |
| Pimpinan daerah | Informasi realisasi untuk mendukung keputusan |
| Petugas lapangan | Pendataan dan kunjungan lebih terarah |
| Pengelola OPD | Pencatatan dan rekonsiliasi lebih terstruktur |
| Wajib pajak | Akses tagihan, pembayaran, dan bukti bayar lebih mudah |
| Pemeriksa | Riwayat perubahan dan transaksi dapat ditelusuri |

## 1.6 Ruang Lingkup Pendapatan

SIPAD Taput berfokus pada jenis penerimaan yang ditetapkan sebagai prioritas pemerintah daerah. Cakupan final jenis pajak dan retribusi MVP belum ditentukan (OQ-07 dan OQ-08). Sistem harus mendukung konfigurasi jenis penerimaan dan tarif sesuai dasar hukum yang telah diverifikasi, serta tidak boleh menciptakan kewajiban di luar ketentuan yang berlaku.

---

# 2. Target User dan Persona

## 2.1 Target User

SIPAD Taput memiliki lima peran pengguna utama.

| Peran | Platform | Kebutuhan utama |
|---|---|---|
| Admin Bapenda | Web Admin | Mengelola data, memverifikasi objek, mengatur tarif, menyetujui penetapan, menangani rekonsiliasi |
| Petugas Lapangan | Android | Mendata objek, mengambil foto dan koordinat, mencatat kunjungan, bekerja offline |
| Pengelola OPD | Web | Mencatat setoran jika berlaku, memantau penerimaan, menindaklanjuti selisih sesuai kewenangan |
| Pimpinan Daerah | Web Dashboard | Memantau realisasi PAD, target, tunggakan, dan kinerja per wilayah atau OPD |
| Wajib Pajak/Wajib Retribusi | Portal responsif | Melihat tagihan, membayar, mengunduh bukti bayar, memeriksa riwayat dan mengajukan pertanyaan |

## 2.2 Persona A — Petugas Lapangan

**Nama persona:** Petugas Pendataan PAD  
**Peran:** Melakukan pendataan dan kunjungan lapangan.

**Profil**
- Menggunakan perangkat Android.
- Berpindah dari satu lokasi ke lokasi lain.
- Dapat bekerja di wilayah dengan koneksi tidak stabil.
- Membutuhkan formulir cepat dan sederhana.
- Perlu bukti lokasi dan waktu pendataan.

**Tujuan:** Mendata objek secara akurat, mengetahui tugas, dan memastikan data terkirim ke server tanpa input ulang.

**Masalah:** Data berulang, sinyal internet tidak stabil, status tindak lanjut tidak selalu diketahui, dan potensi konflik data dengan pembaruan Admin.

**Kebutuhan**
1. Daftar tugas berdasarkan penugasan.
2. Formulir objek yang dapat digunakan offline.
3. Pengambilan GPS dan foto.
4. Pencatatan hasil kunjungan.
5. Indikator sinkronisasi.
6. Peringatan duplikat.
7. Penanganan konflik tanpa menimpa data otomatis.

**Indikator keberhasilan:** Data offline tetap aman; data, foto, dan koordinat tersinkron; item gagal terlihat; serta perubahan memiliki jejak audit.

## 2.3 Persona B — Wajib Pajak/Wajib Retribusi

**Nama persona:** Pengguna Layanan Pembayaran PAD  
**Peran:** Individu atau badan yang memiliki kewajiban pajak atau retribusi.

**Profil**
- Mengakses layanan lewat ponsel atau komputer.
- Memiliki tingkat literasi digital beragam.
- Memerlukan nominal dan jatuh tempo yang jelas.
- Dapat terbiasa dengan pembayaran tunai.
- Membutuhkan bukti pembayaran yang dapat disimpan.

**Tujuan:** Mengetahui kewajiban, membayar dengan mudah, dan memperoleh bukti pembayaran resmi.

**Masalah:** Tidak mengetahui nominal/jatuh tempo, harus mencari informasi melalui petugas, sulit memastikan status pembayaran, atau kehilangan bukti kertas.

**Kebutuhan**
1. Akses aman ke tagihan sendiri.
2. Informasi nominal, periode, dan jatuh tempo.
3. Kanal QRIS, virtual account, atau transfer bank yang tersedia.
4. Status pembayaran yang jelas.
5. Bukti bayar elektronik.
6. Riwayat pembayaran.
7. Kanal pertanyaan atau pengajuan.

**Indikator keberhasilan:** Tagihan ditemukan tanpa bantuan, transaksi terkonfirmasi memperoleh bukti, riwayat dapat diakses, dan data pengguna lain tidak dapat dilihat.

## 2.4 Persona Sekunder

- **Admin Bapenda:** Mengontrol data, tarif, penetapan, tagihan, pembayaran, rekonsiliasi, dan laporan sesuai kewenangan.
- **Pengelola OPD:** Memerlukan informasi penerimaan yang dikelola OPD, pencatatan setoran jika diberlakukan, dan status rekonsiliasi. Model kewenangan perlu dikonfirmasi (OQ-20).
- **Pimpinan Daerah:** Membutuhkan dashboard baca-saja berisi realisasi terhadap target, tren penerimaan, tunggakan, dan ringkasan selisih rekonsiliasi.

---

# 3. Goals dan Non-goals

## 3.1 Product Goals

### Goal 1 — Meningkatkan visibilitas PAD
Menyediakan informasi penerimaan yang terstruktur dan dapat ditelusuri.
- Metrik: realisasi dibanding target, ketepatan angka dashboard, dan waktu pembaruan.

### Goal 2 — Memperluas cakupan data objek
Menyediakan master data wajib pajak dan objek dengan status verifikasi dan lokasi.
- **Target usulan:** 90% objek prioritas terdata dalam 12 bulan setelah baseline dan estimasi populasi disepakati.

### Goal 3 — Mendorong pembayaran nontunai
Menyediakan kanal pembayaran yang terhubung dengan konfirmasi bank atau penyedia pembayaran.
- **Target usulan:** minimal 60% transaksi nontunai pada tahun pertama, dengan denominator dan baseline yang disepakati.

### Goal 4 — Mempercepat penerbitan tagihan
Mengurangi waktu antara persetujuan penetapan dan kesiapan tagihan.
- **Target usulan:** kurang dari satu hari kerja setelah penetapan disetujui.

### Goal 5 — Meningkatkan kepatuhan pembayaran
Memudahkan wajib pajak mengetahui kewajiban dan jatuh tempo.
- **Target usulan:** kenaikan 10 poin persentase pembayaran tepat waktu dari baseline.

### Goal 6 — Mengurangi kompilasi laporan manual
Menyediakan laporan utama melalui sistem.
- **Target usulan:** 100% laporan utama yang disepakati dapat dihasilkan melalui sistem.

### Goal 7 — Menjaga akuntabilitas
Merekam perubahan dan tindakan penting melalui jejak audit yang tidak dapat diubah atau dihapus melalui aplikasi.

## 3.2 Non-goals MVP

1. Sistem akuntansi dan penganggaran daerah secara penuh.
2. Pengelolaan dana transfer pemerintah pusat.
3. Pengelolaan gaji dan belanja daerah.
4. Penentuan tarif di luar dasar hukum.
5. Pengelolaan pendapatan BUMD.
6. Pengelolaan sewa dan pemanfaatan aset daerah.
7. GIS untuk pemetaan potensi PAD secara menyeluruh.
8. Analitik prediktif dan deteksi anomali lanjutan.
9. Integrasi penuh dengan seluruh sistem pemerintah pusat.
10. Penggantian otomatis seluruh aplikasi eksisting sebelum inventarisasi dan keputusan integrasi.

## 3.3 Prinsip Produk

- **Legalitas:** aturan dan tarif mengikuti dasar hukum yang diverifikasi.
- **Akurasi:** data keuangan dapat ditelusuri ke sumber transaksi.
- **Keamanan:** akses sesuai kewenangan.
- **Auditabilitas:** tindakan penting tidak dapat dihapus dari jejak audit.
- **Offline-first:** pendataan lapangan tidak bergantung sepenuhnya pada internet.
- **Transparansi:** status pembayaran tidak menyesatkan.
- **Kemudahan:** antarmuka menggunakan Bahasa Indonesia sederhana.
- **Interoperabilitas:** integrasi mengikuti kemampuan dan ketentuan sistem yang disepakati.

---

# 4. User Stories

## 4.1 Akun dan Hak Akses
- **US-01:** Sebagai Admin, saya ingin mengelola akun pengguna supaya akses diberikan sesuai kewenangan.
- **US-02:** Sebagai Admin, saya ingin menonaktifkan akun pegawai supaya akses dapat dicabut saat mutasi atau berhenti.
- **US-03:** Sebagai pimpinan daerah, saya ingin melihat dashboard baca-saja supaya informasi dapat dipantau tanpa mengubah transaksi.

## 4.2 Master Data
- **US-04:** Sebagai petugas lapangan, saya ingin mendata objek beserta GPS dan foto supaya informasi memiliki bukti lokasi.
- **US-05:** Sebagai Admin, saya ingin memverifikasi objek baru supaya hanya data yang disetujui menjadi aktif.
- **US-06:** Sebagai Admin, saya ingin mendeteksi data ganda supaya objek/wajib pajak tidak tercatat berulang tanpa penanganan.
- **US-07:** Sebagai Admin, saya ingin mengimpor data awal supaya migrasi terkontrol.

## 4.3 Tarif, Penetapan, dan Tagihan
- **US-08:** Sebagai Admin, saya ingin mengatur tarif dan masa berlakunya supaya perhitungan sesuai peraturan.
- **US-09:** Sebagai Admin, saya ingin menyetujui penetapan sebelum tagihan terbit supaya kewajiban terkendali.
- **US-10:** Sebagai wajib pajak, saya ingin menerima informasi tagihan dan jatuh tempo supaya mengetahui kewajiban.
- **US-11:** Sebagai Admin, saya ingin membatalkan tagihan dengan alasan tercatat supaya koreksi dapat dipertanggungjawabkan.

## 4.4 Pembayaran
- **US-12:** Sebagai wajib pajak, saya ingin membayar melalui QRIS, virtual account, atau transfer supaya dapat membayar tanpa datang ke kantor.
- **US-13:** Sebagai wajib pajak, saya ingin memperoleh bukti bayar elektronik.
- **US-14:** Sebagai Admin, saya ingin menangani pembayaran yang tidak cocok dengan tagihan supaya tidak otomatis dianggap lunas.

## 4.5 Rekonsiliasi
- **US-15:** Sebagai Admin, saya ingin mencocokkan transaksi sistem dengan mutasi bank.
- **US-16:** Sebagai Pengelola OPD, saya ingin mencatat setoran harian jika proses tersebut diberlakukan.
- **US-17:** Sebagai Admin, saya ingin mencatat penyelesaian selisih agar tindak lanjut dapat diaudit.

## 4.6 Aplikasi Lapangan
- **US-18:** Sebagai petugas, saya ingin menyimpan pendataan saat offline.
- **US-19:** Sebagai petugas, saya ingin melihat objek dan tagihan yang ditugaskan.
- **US-20:** Sebagai petugas, saya ingin mencatat hasil kunjungan.
- **US-21:** Sebagai Admin, saya ingin melihat konflik sinkronisasi agar perubahan tidak hilang.

## 4.7 Dashboard dan Pelaporan
- **US-22:** Sebagai pimpinan, saya ingin melihat realisasi dibanding target berdasarkan penerimaan, OPD, dan kecamatan.
- **US-23:** Sebagai pimpinan, saya ingin melihat tunggakan terbesar untuk menentukan prioritas.
- **US-24:** Sebagai Admin, saya ingin mengekspor laporan PDF dan Excel.

## 4.8 Portal Wajib Pajak
- **US-25:** Sebagai wajib pajak, saya ingin melihat tagihan sendiri.
- **US-26:** Sebagai wajib pajak, saya ingin melihat riwayat pembayaran.
- **US-27:** Sebagai wajib pajak, saya ingin mengirim pertanyaan atau keberatan.

## 4.9 Jejak Audit
- **US-28:** Sebagai pemeriksa berwenang, saya ingin melihat riwayat perubahan dan tindakan penting.
- **US-29:** Sebagai Admin, saya ingin setiap pembatalan dan konfirmasi manual memiliki alasan.

---

# 5. Daftar Fitur MVP, V2, dan Pengembangan Lanjutan

## 5.1 MVP — Fase 1

Target durasi: **4–6 bulan setelah fase penemuan**.

| ID | Fitur | Cakupan |
|---|---|---|
| F1 | Akun dan peran | Login, hak akses, pengelolaan akun |
| F2 | Master data wajib pajak dan objek | Registrasi, verifikasi, lokasi, foto, impor |
| F3 | Tarif dan penetapan | Konfigurasi tarif, perhitungan, persetujuan |
| F4 | Tagihan dan pengingat | Penerbitan tagihan, jatuh tempo, pengingat |
| F5 | Pembayaran nontunai dan bukti bayar | QRIS, VA, transfer, konfirmasi, bukti elektronik |
| F6 | Rekonsiliasi harian | Pencocokan pembayaran dan mutasi bank |
| F7 | Aplikasi lapangan offline | Pendataan, kunjungan, GPS, foto, sinkronisasi |
| F8 | Dashboard dan laporan | Target, realisasi, tunggakan, ekspor |
| F9 | Portal wajib pajak | Tagihan, pembayaran, riwayat, pengajuan |
| F10 | Jejak audit | Riwayat tindakan dan perubahan penting |

MVP diuji pada 2–3 jenis penerimaan prioritas yang ditentukan setelah inventarisasi peraturan, proses bisnis, dan data eksisting. Portal wajib pajak termasuk MVP. Pemrosesan keberatan secara penuh belum termasuk sampai diputuskan (OQ-18).

## 5.2 V2 — Fase 2

Perkiraan durasi 3–4 bulan setelah fase sebelumnya, dengan asumsi kapasitas dan anggaran tersedia.

- Perluasan jenis pajak dan retribusi.
- Penagihan tunggakan bertahap.
- Surat teguran dan pencatatan tindak lanjut.
- Perluasan aplikasi lapangan.
- Alur keberatan dan restitusi lebih lengkap.
- Integrasi dengan sistem eksisting.
- Penyempurnaan laporan resmi.
- Penguatan pengelolaan setoran OPD.

## 5.3 Pengembangan Lanjutan — Fase 3 dan Seterusnya

- GIS untuk pemetaan potensi PAD.
- Analitik prediktif.
- Deteksi anomali transaksi.
- Pengelolaan pendapatan BUMD dan aset daerah.
- Integrasi tambahan dengan sistem kependudukan, perizinan, dan keuangan daerah sesuai kewenangan.
- Analisis tren dan proyeksi penerimaan.

Penempatan GIS pada fase akhir adalah usulan sementara (OQ-17).

---

# 6. Functional Requirements Detail per Fitur MVP

## 6.1 F1 — Akun dan Peran

**Deskripsi:** Mengelola identitas pengguna, autentikasi, otorisasi, dan status akun.

**Functional requirements**
- **FR-1.1 — Role-based access control:** Sistem menyediakan lima peran: Admin, Petugas Lapangan, Pengelola OPD, Pimpinan Daerah, dan Wajib Pajak. Hak akses diperiksa pada antarmuka dan backend.
- **FR-1.2 — Autentikasi:** Admin wajib menggunakan MFA. Metode login peran lain ditentukan dalam OQ-13.
- **FR-1.3 — Pembatasan data:** Petugas hanya mengakses objek/tagihan yang ditugaskan; Pengelola OPD mengakses data sesuai OPD; pimpinan baca-saja; wajib pajak hanya melihat datanya sendiri. Model penugasan mengikuti OQ-15.
- **FR-1.4 — Penonaktifan akun:** Admin dapat menonaktifkan akun; sesi aktif dicabut atau ditolak sesegera mungkin. Riwayat transaksi dan audit tetap tersimpan.
- **FR-1.5 — Pencatatan keamanan:** Percobaan akses tanpa hak dan tindakan keamanan penting dicatat.

**Kriteria penerimaan**
- Pengguna tidak dapat mengakses fungsi di luar haknya.
- Pengguna nonaktif tidak dapat login.
- Sesi yang dicabut tidak dapat digunakan kembali.
- Perubahan hak akses tercatat.
- Pimpinan tidak dapat mengubah transaksi.

## 6.2 F2 — Master Data Wajib Pajak dan Objek

**Deskripsi:** Mengelola wajib pajak, objek, lokasi, foto, status verifikasi, dan riwayat perubahan.

**Functional requirements**
- **FR-2.1 — Data wajib pajak:** ID internal, tipe perorangan/badan, nama, NIK atau NPWPD sesuai ketentuan, kontak, alamat, dan status verifikasi. Verifikasi identitas mengikuti OQ-13.
- **FR-2.2 — Relasi:** Satu wajib pajak dapat memiliki banyak objek. Satu objek dapat memiliki beberapa jenis kewajiban sesuai aturan.
- **FR-2.3 — Informasi objek:** Jenis objek, alamat, kecamatan, latitude/longitude, minimal satu foto, referensi pemilik, dan status.
- **FR-2.4 — Status objek:** Draf, Menunggu Verifikasi, Aktif, Nonaktif. Hanya Admin berwenang yang dapat mengaktifkan objek.
- **FR-2.5 — Deteksi duplikat:** Sistem memperingatkan jika NIK/NPWPD sama atau ditemukan objek sejenis dalam radius yang dapat dikonfigurasi. Penggabungan hanya oleh Admin berwenang dan tercatat.
- **FR-2.6 — Riwayat perubahan:** Menyimpan nilai lama, nilai baru, waktu server, dan pelaku.
- **FR-2.7 — Impor data:** Admin dapat mengimpor data awal; sistem melaporkan baris berhasil, ditolak, dan alasannya. Format mengikuti OQ-03.

**Kriteria penerimaan**
- Objek tidak dapat diaktifkan tanpa koordinat valid.
- Duplikat memunculkan peringatan.
- Objek baru tidak otomatis aktif.
- Perubahan dapat ditelusuri.
- Impor tidak gagal secara diam-diam.
- Baris yang ditolak dapat diperbaiki dan diimpor ulang.

## 6.3 F3 — Tarif dan Penetapan

**Deskripsi:** Mengelola tarif dan menerbitkan penetapan sesuai dasar hukum.

**Functional requirements**
- **FR-3.1 — Konfigurasi tarif:** Jenis penerimaan, tipe tarif, nilai, tanggal mulai/akhir berlaku, dasar hukum, dan status. Tipe tarif: tetap, persentase, dan per satuan. Tarif awal mengikuti OQ-08.
- **FR-3.2 — Perhitungan:** Menghitung pokok kewajiban berdasarkan dasar pengenaan dan tarif yang berlaku untuk periode terkait.
- **FR-3.3 — Validasi:** Penetapan ditolak jika tidak ada tarif berlaku. Sistem tidak boleh menghasilkan tagihan Rp0 karena tarif tidak ditemukan.
- **FR-3.4 — Persetujuan:** Penetapan disetujui Admin berwenang sebelum tagihan diterbitkan.
- **FR-3.5 — Perubahan tarif:** Tarif baru tidak mengubah tagihan terbit. Koreksi melalui pembatalan dan penerbitan ulang dengan alasan dan audit.
- **FR-3.6 — Jenis penetapan:** MVP mendukung penetapan oleh pemerintah melalui petugas/Admin. Jenis yang dihitung/dilaporkan sendiri oleh wajib pajak mengikuti OQ-09.

**Kriteria penerimaan**
- Penetapan menunjukkan tarif dan dasar hukum.
- Penetapan tanpa tarif berlaku ditolak.
- Persetujuan tidak dapat dilewati.
- Perubahan tarif tidak mengubah tagihan lama.
- Koreksi menghasilkan jejak audit.

## 6.4 F4 — Tagihan dan Pengingat

**Deskripsi:** Menghasilkan tagihan dari penetapan disetujui dan menyampaikan informasi kewajiban.

**Functional requirements**
- **FR-4.1 — Pembuatan tagihan:** Nomor unik, referensi ketetapan, periode, pokok, denda jika berlaku, total, jatuh tempo, kode bayar, dan status.
- **FR-4.2 — Waktu penerbitan:** Tagihan tersedia dan siap dikirim paling lambat satu hari kerja setelah persetujuan.
- **FR-4.3 — Pengingat:** Minimal satu kanal pengingat; kanal, jadwal, dan biaya mengikuti OQ-14.
- **FR-4.4 — Status:** Terbit, Lunas, Kedaluwarsa, Dibatalkan. MVP menerima pembayaran penuh; cicilan/pembayaran sebagian mengikuti OQ-12.
- **FR-4.5 — Denda:** Denda dihitung hanya jika aturan, tarif, dan rumus dikonfigurasi. Sistem tidak boleh mengarang denda.
- **FR-4.6 — Pembatalan:** Hanya Admin berwenang, alasan wajib dicatat, dan kode bayar dinonaktifkan.
- **FR-4.7 — Cetak:** Tagihan dapat diunduh atau dicetak PDF.

**Kriteria penerimaan**
- Nomor tagihan unik dan memuat periode/jatuh tempo.
- Pengingat gagal tercatat untuk tindak lanjut.
- Pembatalan memerlukan alasan.
- Tagihan batal tidak dapat dibayar melalui alur normal.
- Denda mengikuti konfigurasi sah.

## 6.5 F5 — Pembayaran Nontunai dan Bukti Bayar

**Deskripsi:** Mengintegrasikan pembayaran dengan bank/penyedia pembayaran dan menerbitkan bukti bayar setelah konfirmasi sah.

**Functional requirements**
- **FR-5.1 — Metode:** QRIS, virtual account, dan transfer bank direncanakan. Mitra dan integrasi mengikuti OQ-04.
- **FR-5.2 — Konfirmasi:** Konfirmasi valid dari penyedia mengubah tagihan menjadi Lunas dan memicu bukti bayar.
- **FR-5.3 — Idempotensi:** Referensi transaksi yang sama tidak menghasilkan pembayaran ganda meskipun notifikasi dikirim berulang.
- **FR-5.4 — Bukti bayar:** Nomor bukti, nomor tagihan, nama wajib pajak, jumlah, waktu, kanal, dan referensi transaksi bank. Bukti tersedia lewat portal/tautan aman.
- **FR-5.5 — Tunai:** Hanya diaktifkan jika diizinkan kebijakan; wajib mencantumkan nomor bukti setor dan petugas/loket. Keputusan mengikuti OQ-11.
- **FR-5.6 — Pembayaran tidak cocok:** Pembayaran untuk tagihan batal/kedaluwarsa atau nominal tidak cocok tidak otomatis melunasi tagihan; masuk antrean Admin.

**Kriteria penerimaan**
- Referensi bank yang sama hanya menghasilkan satu transaksi.
- Tagihan Lunas hanya setelah konfirmasi valid.
- Bukti bayar tidak diterbitkan sebagai bukti pelunasan sebelum konfirmasi.
- Transaksi tidak cocok masuk antrean tindak lanjut.
- Konfirmasi manual tercatat dalam audit.

## 6.6 F6 — Rekonsiliasi Harian

**Deskripsi:** Mencocokkan pembayaran SIPAD dengan mutasi rekening kas daerah dan setoran OPD jika berlaku.

**Functional requirements**
- **FR-6.1 — Sumber bank:** Menerima mutasi melalui metode integrasi yang disepakati; API/file dan jadwal mengikuti OQ-04.
- **FR-6.2 — Status:** Cocok; ada di sistem tetapi tidak di bank; ada di bank tetapi tidak di sistem; nominal berbeda.
- **FR-6.3 — Penyelesaian:** Admin menambahkan catatan penyelesaian. Selisih tidak boleh dihapus/disembunyikan.
- **FR-6.4 — Setoran OPD:** Pencatatan setoran harian disediakan jika disetujui; kewenangan mengikuti OQ-20.
- **FR-6.5 — Ringkasan:** Menampilkan jumlah transaksi cocok, jumlah selisih terbuka, dan nominal terkait.

**Kriteria penerimaan**
- Setiap transaksi memiliki status rekonsiliasi.
- Selisih terbuka terlihat sampai penyelesaian tercatat.
- Mutasi tanpa pasangan pembayaran tidak diabaikan.
- Rekonsiliasi dapat ditelusuri ke sumber.
- Penutupan selisih mencatat pelaku dan waktu.

## 6.7 F7 — Aplikasi Lapangan Offline

**Deskripsi:** Aplikasi Android untuk pendataan objek dan kunjungan dengan penyimpanan lokal dan sinkronisasi.

**Functional requirements**
- **FR-7.1 — Platform:** Android entry-level; iOS dan pengadaan perangkat mengikuti OQ-15.
- **FR-7.2 — Penugasan:** Setelah login, aplikasi mengunduh objek/tagihan yang ditugaskan.
- **FR-7.3 — Offline:** Membuat/mengubah data sesuai hak, mengambil foto, merekam GPS, mencatat kunjungan, dan melihat status sinkronisasi. Data lokal dienkripsi sesuai kebutuhan.
- **FR-7.4 — Sinkronisasi:** Otomatis saat koneksi tersedia. Status item: Belum tersinkron, Sedang tersinkron, Berhasil, Gagal, Konflik.
- **FR-7.5 — Konflik:** Jika data server berubah sejak diunduh, item masuk antrean konflik; tidak menimpa otomatis.
- **FR-7.6 — Kunjungan:** Petugas, objek, waktu perangkat/server, koordinat, hasil, catatan, dan foto opsional. Waktu server menjadi acuan resmi untuk data yang diterima server.

**Kriteria penerimaan**
- Data offline tetap tersedia setelah aplikasi ditutup/dibuka.
- Data, foto, dan koordinat tersinkron utuh.
- Item gagal dapat dicoba kembali.
- Konflik tidak menimpa perubahan Admin.
- Petugas melihat jumlah item belum tersinkron.
- Perangkat hilang dapat dicabut aksesnya; data lokal belum tersinkron tidak dijamin pulih.

## 6.8 F8 — Dashboard dan Laporan

**Deskripsi:** Menyediakan realisasi PAD, target, tunggakan, dan laporan operasional.

**Functional requirements**
- **FR-8.1 — Target PAD:** Admin memasukkan target tahunan per jenis penerimaan dan OPD; sumber target mengikuti OQ-19.
- **FR-8.2 — Dashboard:** Realisasi, target, persentase capaian, realisasi per jenis/OPD/kecamatan, dan filter periode. Realisasi dihitung dari pembayaran terkonfirmasi. Target pembaruan maksimal lima menit setelah konfirmasi bank.
- **FR-8.3 — Tunggakan:** Daftar tagihan lewat jatuh tempo diurutkan nominal dengan filter jenis penerimaan/wilayah.
- **FR-8.4 — Laporan:** Laporan harian, bulanan, tahunan, ekspor PDF dan Excel. Format resmi mengikuti OQ-19.
- **FR-8.5 — Hak akses:** Pimpinan baca-saja.
- **FR-8.6 — Ekspor besar:** Diproses di latar belakang dan diakses melalui tautan aman.

**Kriteria penerimaan**
- Realisasi sesuai transaksi terkonfirmasi untuk periode/kategori yang sama.
- Filter tidak mengubah definisi perhitungan.
- Target dan realisasi dibedakan jelas.
- Ekspor mengikuti hak akses.
- Pimpinan tidak dapat mengubah data.
- Ekspor besar menampilkan status proses.

## 6.9 F9 — Portal Wajib Pajak

**Deskripsi:** Portal responsif untuk tagihan, pembayaran, riwayat, dan pertanyaan/pengajuan.

**Functional requirements**
- **FR-9.1 — Akses:** Wajib pajak hanya melihat tagihan/riwayat sendiri; login dan verifikasi mengikuti OQ-13.
- **FR-9.2 — Halaman tagihan:** Tagihan aktif, nominal, jatuh tempo, status, tombol bayar, riwayat, dan unduhan bukti.
- **FR-9.3 — Pengajuan:** Pertanyaan/keberatan menghasilkan nomor tiket dan status. Apakah pengajuan diproses sampai keputusan mengikuti OQ-18.
- **FR-9.4 — UX:** Bahasa Indonesia sederhana, responsif, dan dioptimalkan untuk Android berspesifikasi rendah.

**Kriteria penerimaan**
- Wajib pajak tidak dapat mengakses data orang lain.
- Tagihan menampilkan nominal dan jatuh tempo.
- Status mengikuti konfirmasi pembayaran.
- Bukti tersedia setelah pembayaran terkonfirmasi.
- Tiket masuk ke kotak masuk Admin.
- Tersedia state loading, kosong, gagal, dan berhasil.

## 6.10 F10 — Jejak Audit

**Deskripsi:** Mencatat tindakan penting agar perubahan dan transaksi dapat diperiksa.

**Functional requirements**
- **FR-10.1 — Peristiwa audit:** Login/logout Admin, perubahan master data/tarif, pembuatan/persetujuan penetapan, pembatalan tagihan, pembayaran/konfirmasi manual, rekonsiliasi, perubahan hak akses, ekspor laporan, dan aktivitas sensitif lainnya. Log menyimpan pelaku, waktu server, aksi, entitas/ID, nilai lama/baru jika relevan, serta informasi perangkat/IP yang tersedia.
- **FR-10.2 — Log hanya-tambah:** Aplikasi tidak menyediakan fungsi mengubah/menghapus log. Perlindungan terhadap administrator infrastruktur/perubahan langsung database perlu dirancang di lapisan teknis.
- **FR-10.3 — Pencarian:** Admin dan pemeriksa berwenang dapat memfilter, melihat detail, dan mengekspor log. Masa simpan mengikuti OQ-16.

**Kriteria penerimaan**
- Tindakan penting menghasilkan log.
- Log tidak dapat diubah/dihapus melalui aplikasi.
- Perubahan ditelusuri ke pengguna dan waktu.
- Akses pemeriksa dibatasi.
- Ekspor audit dicatat sebagai aktivitas sensitif.

## 6.11 Persyaratan Nonfungsional Lintas Fitur

### Keamanan
- Enkripsi data saat transit dan tersimpan sesuai klasifikasi.
- Otorisasi berbasis peran dan pemeriksaan kepemilikan data.
- Pengelolaan rahasia integrasi pembayaran secara aman.
- MFA untuk Admin.
- Pencadangan berkala dan pengujian pemulihan.
- Pencabutan sesi saat akun dinonaktifkan.
- Pembatasan percobaan login dan pencatatan kejadian keamanan.

### Kinerja
Target awal:
- Halaman utama kurang dari 3 detik pada koneksi seluler standar untuk skenario yang disepakati.
- Dashboard diperbarui maksimal 5 menit setelah konfirmasi bank.
- Sistem menangani lonjakan transaksi tanpa kehilangan pembayaran.
- Ekspor besar tidak menghambat transaksi utama.

Target harus diverifikasi melalui pengujian beban.

### Ketersediaan
Target awal 99,5% pada jam layanan. Definisi jam layanan, periode pengukuran, pemeliharaan terjadwal, RTO, dan RPO belum ditetapkan.

### Privasi
Sistem menerapkan perlindungan data pribadi sesuai ketentuan, termasuk UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi. Data identitas yang tidak perlu ditampilkan harus dimasking.

### Kepatuhan
Desain dan implementasi perlu divalidasi terhadap:
- UU No. 1 Tahun 2022 tentang Hubungan Keuangan antara Pemerintah Pusat dan Pemerintahan Daerah.
- Peraturan pelaksana yang berlaku.
- Perda/Perbup terkait pajak dan retribusi Kabupaten Tapanuli Utara.
- Ketentuan pelindungan data pribadi.
- Ketentuan SPBE dan keamanan informasi pemerintah.
- Ketentuan pengelolaan rekening kas daerah dan penerimaan daerah.

Penyebutan peraturan tidak menggantikan pemeriksaan legal atas ketentuan yang relevan.

---

# 7. Sketsa Data Model

## 7.1 Relasi Utama

Rantai utama:

`Wajib Pajak → Objek Pajak → Kewajiban → Ketetapan → Tagihan → Pembayaran → Bukti Bayar`

Relasi pendukung:
- Pembayaran ↔ Mutasi Bank melalui Rekonsiliasi.
- Pengguna ↔ OPD.
- Pengguna petugas ↔ Kunjungan.
- Tagihan ↔ Pengingat.
- Wajib Pajak ↔ Pengajuan.
- Entitas penting ↔ Log Audit.
- Jenis Penerimaan ↔ Tarif.
- Jenis Penerimaan/OPD ↔ Target PAD.

Model ini konseptual. Kardinalitas, aturan penghapusan, dan skema fisik ditetapkan pada desain teknis.

## 7.2 Entitas dan Field Kunci

### 1. Pengguna
`id`, `nama`, `email_atau_username`, `hash_kredensial` atau referensi penyedia identitas, `peran`, `opd_id`, `status_aktif`, `mfa_aktif`, `created_at`, `updated_at`.

Kredensial dan token tidak boleh disimpan sebagai teks biasa.

### 2. OPD
`id`, `kode`, `nama`, `tipe`, `status_aktif`.

### 3. Wajib Pajak
`id`, `tipe`, `nama`, `nik_atau_npwpd`, `kontak`, `alamat`, `status_verifikasi`, `created_at`, `updated_at`.

Akses identitas sensitif harus dibatasi.

### 4. Objek Pajak
`id`, `wajib_pajak_id`, `jenis_objek`, `alamat`, `kecamatan`, `latitude`, `longitude`, `foto_references`, `status`, `sumber_data`, `versi_data`, `created_at`, `updated_at`.

### 5. Jenis Penerimaan
`id`, `kode`, `nama`, `kelompok`, `opd_id`, `dasar_hukum`, `status_aktif`.

### 6. Tarif
`id`, `jenis_penerimaan_id`, `tipe_tarif`, `nilai`, `berlaku_mulai`, `berlaku_sampai`, `dasar_hukum`, `status`.

### 7. Kewajiban
`id`, `objek_id`, `jenis_penerimaan_id`, `periodisitas`, `status`, `created_at`.

### 8. Ketetapan
`id`, `kewajiban_id`, `periode`, `dasar_pengenaan`, `tarif_id`, `jumlah_pokok`, `status`, `disetujui_oleh`, `disetujui_pada`, `alasan_koreksi`.

### 9. Tagihan
`id`, `ketetapan_id`, `nomor_tagihan`, `periode`, `jumlah_pokok`, `denda`, `total`, `jatuh_tempo`, `status`, `kode_bayar`, `alasan_batal`, `created_at`, `updated_at`.

### 10. Pembayaran
`id`, `tagihan_id`, `kanal`, `jumlah`, `waktu_bayar`, `referensi_bank`, `status`, `no_bukti_setor`, `provider_transaction_id`, `created_at`.

Referensi transaksi penyedia pembayaran harus memiliki batasan keunikan yang sesuai.

### 11. Bukti Bayar
`id`, `pembayaran_id`, `nomor_bukti`, `tautan_aman`, `diterbitkan_pada`, `status`.

### 12. Mutasi Bank
`id`, `rekening_referensi`, `tanggal_transaksi`, `jumlah`, `referensi_bank`, `keterangan`, `sumber_data`.

### 13. Rekonsiliasi
`id`, `tanggal`, `pembayaran_id`, `mutasi_id`, `hasil`, `catatan_penyelesaian`, `ditutup_oleh`, `ditutup_pada`.

### 14. Kunjungan
`id`, `petugas_id`, `objek_id`, `tagihan_id`, `waktu_perangkat`, `waktu_server`, `latitude`, `longitude`, `hasil`, `catatan`, `status_sinkronisasi`.

### 15. Pengingat
`id`, `tagihan_id`, `kanal`, `jadwal`, `waktu_kirim`, `status_kirim`, `referensi_provider`.

### 16. Target PAD
`id`, `tahun`, `jenis_penerimaan_id`, `opd_id`, `jumlah`, `sumber_target`, `status`.

### 17. Pengajuan
`id`, `wajib_pajak_id`, `tagihan_id`, `tipe`, `isi`, `status`, `nomor_tiket`, `dibuat_pada`, `ditindaklanjuti_oleh`.

### 18. Log Audit
`id`, `pelaku_id`, `waktu_server`, `aksi`, `entitas`, `entitas_id`, `nilai_lama`, `nilai_baru`, `perangkat_atau_ip`, `request_reference`.

Log bersifat hanya-tambah dan dilindungi dari pengubahan tanpa otorisasi.

## 7.3 Entitas Pendukung Teknis

### Penugasan Petugas
`id`, `petugas_id`, `objek_id`, `tanggal_mulai`, `tanggal_selesai`, `status`.

### Antrean Sinkronisasi
`id`, `perangkat_id`, `jenis_entitas`, `entitas_id`, `versi_lokal`, `status`, `percobaan_terakhir`, `pesan_kesalahan`.

### Konflik Data
`id`, `entitas_id`, `versi_server`, `versi_lokal`, `status`, `diselesaikan_oleh`, `hasil_penyelesaian`.

### Notifikasi Pembayaran
`id`, `provider_event_id`, `referensi_transaksi`, `waktu_diterima`, `status_pemrosesan`.

Entitas tambahan ini adalah rekomendasi teknis, bukan keputusan implementasi final.

## 7.4 Prinsip Integritas Data

1. Nomor tagihan unik.
2. Referensi pembayaran dapat dideduplikasi.
3. Pembayaran terkonfirmasi tidak hilang akibat notifikasi berulang.
4. Tagihan merujuk pada ketetapan valid.
5. Perubahan tarif tidak mengubah tagihan historis.
6. Pembatalan tidak menghapus riwayat transaksi.
7. Penggabungan data menyimpan jejak audit.
8. Perhitungan realisasi menggunakan definisi status konsisten.
9. Waktu server menjadi acuan resmi untuk pencatatan yang diterima server.
10. Penghapusan fisik data keuangan dihindari; koreksi melalui mekanisme audit.

---

# 8. Edge Case dan Failure State

| Skenario | Perilaku yang diwajibkan |
|---|---|
| Notifikasi bank diterima dua kali | Referensi yang sama hanya diproses satu kali |
| Pembayaran dilakukan tetapi notifikasi tidak diterima | Tagihan belum terkonfirmasi; rekonsiliasi mendeteksi mutasi yang belum cocok |
| Pembayaran untuk tagihan batal | Masuk antrean Admin; tidak otomatis melunasi tagihan |
| Nominal transfer berbeda | Ditandai sebagai selisih dan ditindaklanjuti |
| Penyedia pembayaran terganggu | Portal menampilkan gangguan; status tidak menjadi lunas tanpa konfirmasi |
| Petugas offline beberapa hari | Data tersimpan lokal dengan status belum tersinkron |
| Perangkat petugas hilang | Sesi dicabut; data belum tersinkron berisiko tidak dapat dipulihkan |
| Data server berubah saat petugas offline | Konflik dibuat; perubahan tidak ditimpa otomatis |
| Wajib pajak terdaftar ganda | Sistem memberi peringatan; Admin menangani penggabungan dengan audit |
| GPS di luar wilayah kabupaten | Sistem memberi peringatan dan meminta verifikasi |
| Akurasi GPS buruk | Petugas diminta mengambil ulang atau menyimpan dengan status perlu verifikasi sesuai kebijakan |
| Tarif berubah di tengah periode | Ketetapan mengikuti aturan sah untuk periode terkait; tagihan terbit tidak berubah otomatis |
| Tidak ada tarif berlaku | Penetapan diblokir |
| Wajib pajak tidak memiliki ponsel | Tagihan dapat dicetak dan dilayani melalui prosedur resmi |
| Pengingat gagal terkirim | Kegagalan dicatat dan masuk daftar tindak lanjut |
| Lonjakan pembayaran | Notifikasi diproses andal; transaksi tidak hilang/terduplikasi |
| Login gagal berulang | Pembatasan percobaan diterapkan dan kejadian dicatat |
| Pegawai dimutasi/berhenti | Admin menonaktifkan akun dan mencabut sesi |
| File impor memiliki baris rusak | Baris bermasalah dilaporkan; tidak gagal diam-diam |
| Ekspor laporan terlalu besar | Ekspor diproses di latar belakang |
| Jam perangkat salah | Waktu server menjadi acuan resmi |
| Pembayaran masuk setelah tagihan dibatalkan | Tagihan tidak otomatis menjadi lunas |
| Callback bank terlambat | Diproses berdasarkan referensi/status valid tanpa menggandakan pembayaran |
| Tautan bukti bayar milik orang lain dibuka | Akses ditolak kecuali melalui mekanisme aman yang sah |
| Akun dinonaktifkan saat sesi aktif | Sesi ditolak/dicabut sesegera mungkin |
| Pengguna mencoba mengubah audit log | Aplikasi menolak; kejadian dicatat bila relevan |
| Sinkronisasi gagal di tengah unggah foto | Status gagal ditampilkan dan percobaan ulang tidak membuat objek duplikat |
| Data yang sama diimpor ulang | Duplikasi dideteksi sesuai kunci pencocokan |

## 8.1 Aturan Umum Penanganan Kegagalan

- Kegagalan memberikan pesan yang dapat dipahami.
- Data yang sudah tersimpan tidak hilang tanpa pemberitahuan.
- Sistem tidak menyatakan transaksi berhasil sebelum konfirmasi valid.
- Koreksi keuangan dapat ditelusuri.
- Kegagalan integrasi menghasilkan log dan mekanisme percobaan ulang yang aman.
- Data sensitif tidak ditampilkan pada pesan kesalahan atau log publik.

---

# 9. Success Metrics

Baseline harus dikumpulkan pada fase penemuan. Target berikut merupakan usulan awal dan perlu disepakati pemilik produk.

## 9.1 Metrik Produk

| Metrik | Definisi | Target usulan | Sumber |
|---|---|---|---|
| Realisasi PAD terhadap target | Pembayaran terkonfirmasi dibanding target pada kategori/periode yang sama | Meningkat bertahap dari baseline | Dashboard |
| Cakupan objek terdata | Objek prioritas aktif dan memiliki lokasi valid dibanding estimasi populasi | 90% dalam 12 bulan | Master data |
| Porsi pembayaran nontunai | Pembayaran nontunai dibanding seluruh pembayaran dalam denominator yang disepakati | Minimal 60% tahun pertama | Pembayaran |
| Waktu penetapan ke tagihan | Persetujuan sampai tagihan siap dikirim | Kurang dari satu hari kerja | Penetapan/tagihan |
| Kepatuhan tepat waktu | Tagihan yang lunas sebelum/pada jatuh tempo dibanding tagihan yang jatuh tempo | Naik 10 poin persentase dari baseline | Tagihan |
| Otomatisasi laporan | Laporan utama yang dihasilkan tanpa kompilasi manual dibanding seluruh laporan utama | 100% | Modul laporan |

## 9.2 Metrik Operasional

| Metrik | Target usulan |
|---|---|
| Ketersediaan pada jam layanan | 99,5% |
| Waktu muat halaman utama | Di bawah 3 detik pada kondisi uji yang disepakati |
| Pembaruan dashboard setelah konfirmasi bank | Maksimal 5 menit |
| Selisih rekonsiliasi terbuka | Batas penyelesaian ditetapkan bersama Admin |
| Tagihan batal karena kesalahan data | Tren menurun setelah baseline |
| Insiden kebocoran data pribadi | 0 insiden |
| Keberhasilan sinkronisasi lapangan | Baseline dan target ditetapkan setelah pilot |
| Penggunaan aplikasi petugas | Ditentukan setelah jumlah petugas dan model penugasan diketahui |

## 9.3 Definisi Metrik

- **Realisasi PAD:** transaksi pembayaran terkonfirmasi dan memenuhi aturan pencatatan. Pending, gagal, atau belum cocok tidak dihitung sebagai pembayaran terkonfirmasi tanpa dasar kebijakan.
- **Cakupan objek:** pembilang berupa objek prioritas aktif dengan informasi minimum valid; penyebut harus merupakan estimasi yang dapat dipertanggungjawabkan.
- **Pembayaran nontunai:** QRIS, VA, dan transfer yang berhasil dikonfirmasi. Perlakuan tunai, pembatalan, pengembalian dana, dan duplikasi harus disepakati.
- **Kepatuhan tepat waktu:** tagihan dibayar penuh pada/sebelum jatuh tempo dibanding seluruh tagihan jatuh tempo, dengan perlakuan pembatalan/koreksi konsisten.

## 9.4 Kriteria Selesai MVP

MVP selesai apabila:
1. Semua functional requirement wajib lulus UAT.
2. Sistem berjalan pada 2–3 jenis penerimaan prioritas.
3. Alur pendataan, verifikasi, penetapan, tagihan, pembayaran, rekonsiliasi, dan laporan berhasil diuji.
4. Pembayaran nontunai diverifikasi melalui transaksi uji sah dari bank/penyedia.
5. Bukti bayar diterbitkan sesuai konfirmasi transaksi.
6. Rekonsiliasi dapat mengidentifikasi dan menampilkan selisih.
7. Selisih terbuka tidak disembunyikan atau dihapus tanpa jejak.
8. Aplikasi lapangan lulus uji offline dan sinkronisasi.
9. Hak akses dan isolasi data wajib pajak lulus uji keamanan.
10. Audit tersedia untuk tindakan sensitif.
11. Pemulihan cadangan dan prosedur insiden telah diuji.
12. Pemilik produk menyetujui UAT dan kesiapan operasional.

Definisi UAT dan tanggal go-live final harus disetujui (OQ-06).

---

# 10. Open Questions (OQ)

Keputusan tidak boleh diganti dengan asumsi yang belum divalidasi.

| ID | Pertanyaan terbuka | Dampak jika belum dijawab | Batas keputusan |
|---|---|---|---|
| OQ-01 | Unit organisasi mana yang resmi menjadi pemilik produk/pengelola utama? | Kewenangan, anggaran, tata kelola belum final | Discovery |
| OQ-02 | Berapa realisasi dan target PAD terakhir per jenis, jumlah wajib pajak/objek, serta proporsi tunai/nontunai? | Baseline dan target belum dapat dikunci | Discovery |
| OQ-03 | Sistem apa yang digunakan saat ini, format datanya, dan apakah akan diganti/dilengkapi/diintegrasikan? | Strategi migrasi/integrasi belum jelas | Discovery |
| OQ-04 | Bank/penyedia mana yang menjadi mitra dan bagaimana integrasi QRIS, VA, transfer, dan mutasi? | Desain pembayaran/rekonsiliasi belum final | Desain F5 |
| OQ-05 | Sistem dibangun sendiri, vendor, atau produk siap pakai? Berapa anggaran dan kapasitas tim? | Biaya, arsitektur, jadwal belum valid | Awal Fase 1 |
| OQ-06 | Apa definisi MVP selesai, prosedur UAT, dan target go-live? | Kriteria penerimaan belum jelas | Awal Fase 1 |
| OQ-07 | Dua atau tiga jenis penerimaan apa yang menjadi prioritas pilot? | Cakupan modul belum terkunci | Awal Fase 1 |
| OQ-08 | Perda/Perbup mana yang berlaku untuk jenis prioritas beserta tarifnya? | Konfigurasi tarif belum dapat diisi secara sah | Desain F3 |
| OQ-09 | Jenis penerimaan mana yang ditetapkan pemerintah dan mana yang dihitung/dilaporkan sendiri? | Alur penetapan dapat salah dirancang | Desain F3 |
| OQ-10 | Bagaimana aturan denda/bunga dan perlakuan selama gangguan sistem/bank? | Tagihan dan penanganan sengketa belum final | Desain F4 |
| OQ-11 | Apakah tunai tetap diterima, melalui siapa, dan bagaimana setoran dicatat? | Alur pembayaran dan target nontunai belum jelas | Desain F5 |
| OQ-12 | Apakah cicilan, pembayaran sebagian, kelebihan bayar, pembatalan, dan pengembalian dana diperbolehkan? | Status tagihan/koreksi belum final | Desain F4/F5 |
| OQ-13 | Bagaimana identitas wajib pajak diverifikasi dan bagaimana login portal dilakukan? | Autentikasi dan privasi belum final | Desain F1/F2/F9 |
| OQ-14 | Kanal pengingat, jadwal, dan penanggung biaya? | Implementasi notifikasi belum ditentukan | Desain F4 |
| OQ-15 | Jumlah petugas, wilayah penugasan, perangkat, dan cakupan aplikasi lapangan v2? | Penugasan/adopsi belum final | Desain F7 |
| OQ-16 | Di mana hosting, bagaimana pemulihan bencana, dan berapa lama data/audit log disimpan? | Keamanan, biaya, kepatuhan belum dapat dinilai penuh | Awal Fase 1 |
| OQ-17 | GIS potensi PAD masuk v2 atau fase 3? | Roadmap belum final | Akhir Fase 1 |
| OQ-18 | Apakah portal tetap MVP dan apakah keberatan hanya diterima atau diproses penuh? | Beban Admin dan lingkup F9 belum final | Awal Fase 1 |
| OQ-19 | Format laporan resmi dan sumber target PAD tahunan? | Desain laporan belum final | Desain F8 |
| OQ-20 | Apakah OPD mencatat setoran harian di SIPAD atau sistem menagih langsung kepada wajib retribusi? | Hak akses OPD dan rekonsiliasi belum final | Desain F6 |

## 10.1 Prioritas Penyelesaian OQ

**Prioritas 1 — Sebelum desain teknis:** OQ-01, OQ-02, OQ-03, OQ-04, OQ-05, OQ-07, OQ-08, OQ-13, OQ-16.

**Prioritas 2 — Sebelum implementasi modul terkait:** OQ-09, OQ-10, OQ-11, OQ-12, OQ-14, OQ-15, OQ-18, OQ-19, OQ-20.

**Prioritas 3 — Sebelum penguncian roadmap:** OQ-06, OQ-17, serta target metrik dan kriteria keberhasilan final.

---

# 11. Panduan UI/UX dan Arsitektur Informasi

## 11.1 Prinsip Desain

1. Gunakan Bahasa Indonesia sederhana.
2. Utamakan kejelasan informasi keuangan.
3. Bedakan data terkonfirmasi dan data yang menunggu.
4. Gunakan warna status bersama teks, bukan warna saja.
5. Minimalkan langkah untuk pekerjaan rutin.
6. Berikan konfirmasi untuk tindakan sensitif.
7. Sediakan state loading, empty, error, success, dan offline.
8. Konsisten antarperan dan platform.
9. Jangan menampilkan data contoh sebagai data resmi.
10. UI bukan satu-satunya mekanisme keamanan.

## 11.2 Design Tokens

| Token | Nilai awal |
|---|---|
| Primary | `#122B49` |
| Secondary | `#2563EB` |
| Success | `#0D9488` |
| Background | `#F5F7FB` |
| Surface | `#FFFFFF` |
| Text | `#172B4D` |
| Muted text | `#64748B` |
| Border | `#E2E8F0` |
| Font | Inter atau sans-serif setara |
| Border radius | 10–12 px |

Nilai tersebut adalah usulan awal yang dapat disesuaikan melalui usability testing dan pemeriksaan aksesibilitas.

## 11.3 Sitemap Web Admin

```text
SIPAD Taput
├── Login
├── Dashboard
│   ├── Ringkasan PAD
│   ├── Realisasi vs Target
│   ├── Tunggakan
│   └── Rekonsiliasi
├── Data Wajib Pajak
│   ├── Daftar Wajib Pajak
│   ├── Detail Wajib Pajak
│   └── Tambah/Edit Wajib Pajak
├── Data Objek Pajak
│   ├── Daftar Objek
│   ├── Detail Objek
│   ├── Pendataan Baru
│   ├── Verifikasi Objek
│   └── Impor Data
├── Tarif dan Jenis Penerimaan
├── Penetapan
│   ├── Daftar Penetapan
│   └── Persetujuan
├── Tagihan
│   ├── Daftar Tagihan
│   └── Pembatalan
├── Pembayaran
│   ├── Daftar Transaksi
│   └── Antrean Penanganan
├── Rekonsiliasi
│   ├── Ringkasan Harian
│   ├── Impor Mutasi Bank
│   └── Daftar Selisih
├── Petugas Lapangan
│   ├── Daftar Petugas
│   ├── Penugasan
│   └── Hasil Kunjungan
├── Laporan PAD
├── Pengguna dan Hak Akses
├── Pengajuan Wajib Pajak
├── Jejak Audit
└── Pengaturan
```

## 11.4 Sitemap Portal Wajib Pajak

```text
Portal SIPAD Taput
├── Login / Verifikasi Identitas
├── Beranda
├── Tagihan Saya
│   └── Detail Tagihan
├── Pembayaran
│   ├── Pilih Metode
│   ├── Instruksi Pembayaran
│   └── Status Pembayaran
├── Bukti Bayar
├── Riwayat Pembayaran
├── Pengajuan
│   ├── Buat Pengajuan
│   └── Detail Tiket
└── Bantuan
```

## 11.5 Sitemap Aplikasi Android Petugas

```text
Aplikasi Petugas
├── Login
├── Beranda
├── Tugas
│   ├── Daftar Objek
│   ├── Detail Objek
│   └── Daftar Kunjungan
├── Pendataan
│   ├── Data Pemilik
│   ├── Informasi Objek
│   ├── GPS
│   ├── Foto
│   └── Simpan Offline
├── Catatan Kunjungan
├── Sinkronisasi
│   ├── Belum Tersinkron
│   ├── Gagal
│   └── Konflik
└── Profil
```

## 11.6 Halaman Utama dan Komponen UI

### A. Dashboard Admin
- Sidebar navigasi, header, dan breadcrumb.
- Filter periode, OPD, kecamatan, dan jenis penerimaan.
- KPI cards.
- Grafik realisasi dibanding target.
- Grafik kontribusi penerimaan.
- Tabel tunggakan.
- Ringkasan rekonsiliasi dan aktivitas terbaru.
- Tombol ekspor.

### B. Halaman Data Wajib Pajak
- Search bar dan filter status/jenis.
- Tabel, pagination, tambah, impor, dan ekspor.
- Formulir tambah/edit, peringatan duplikat, dan dialog konfirmasi.

### C. Halaman Rekonsiliasi
- Filter tanggal/rekening dan tombol impor mutasi.
- Ringkasan transaksi cocok dan selisih.
- Tabel transaksi, panel detail selisih, formulir penyelesaian, dan riwayat tindakan.

### D. Halaman Pendataan Mobile
- Indikator koneksi dan ringkasan tugas.
- Formulir pemilik/objek, tombol GPS dan kamera.
- Validasi wajib isi, simpan offline, dan indikator antrean sinkronisasi.

### E. Portal Pembayaran
- Ringkasan tagihan aktif, daftar/detail tagihan.
- Pilihan metode dan instruksi pembayaran.
- Status transaksi, bukti bayar, dan riwayat.

## 11.7 Panduan Responsivitas

- **Desktop:** target desain awal 1440 px, sidebar persisten/dapat diciutkan, tabel dengan filter dan pagination.
- **Tablet:** sidebar dapat diciutkan, KPI menyesuaikan, tabel dapat digulir horizontal bila perlu.
- **Mobile:** target 360–430 px, formulir satu kolom, tombol utama mudah dijangkau, portal dioptimalkan untuk ponsel, aplikasi petugas dirancang untuk lapangan.

## 11.8 Design Handoff

Sebelum diserahkan kepada developer, siapkan:
- Sitemap dan user flow final.
- Design system dan komponen reusable.
- Spesifikasi perilaku tiap halaman.
- Semua state penting.
- Matriks hak akses.
- Validasi formulir dan acceptance criteria.
- Prototipe alur utama.
- Catatan integrasi API dan status transaksi.

---

# 12. User Flow Utama

## 12.1 Pendataan hingga Tagihan

```text
Petugas membuat data objek
        ↓
Data tersimpan lokal atau dikirim ke server
        ↓
Data masuk status Menunggu Verifikasi
        ↓
Admin memeriksa data dan duplikasi
        ↓
Admin mengaktifkan objek
        ↓
Kewajiban dan tarif yang berlaku diperiksa
        ↓
Penetapan dibuat
        ↓
Admin menyetujui penetapan
        ↓
Sistem menerbitkan tagihan
        ↓
Tagihan tersedia di portal dan siap dikirim
```

## 12.2 Pembayaran hingga Bukti Bayar

```text
Wajib pajak membuka tagihan
        ↓
Memeriksa nominal dan jatuh tempo
        ↓
Memilih metode pembayaran yang tersedia
        ↓
Penyedia pembayaran memproses transaksi
        ↓
SIPAD menerima konfirmasi valid
        ↓
Pembayaran diverifikasi dan dideduplikasi
        ↓
Tagihan berubah menjadi Lunas
        ↓
Bukti bayar diterbitkan
        ↓
Transaksi masuk ke proses rekonsiliasi
```

Jika konfirmasi tidak diterima, sistem tidak boleh menganggap pembayaran berhasil hanya berdasarkan tampilan dari sisi pengguna.

## 12.3 Rekonsiliasi

```text
Data pembayaran sistem tersedia + mutasi bank tersedia
        ↓
Sistem mencocokkan referensi dan nominal
        ↓
Hasil rekonsiliasi ditampilkan
        ↓
Cocok → ditandai Cocok
        ↓
Tidak cocok → masuk antrean selisih
        ↓
Admin memeriksa dan mencatat penyelesaian
        ↓
Jejak audit tetap tersedia
```

## 12.4 Pendataan Offline

```text
Petugas login dan mengunduh tugas
        ↓
Koneksi internet terputus
        ↓
Petugas mengisi data, GPS, foto, dan kunjungan
        ↓
Data tersimpan lokal
        ↓
Aplikasi menampilkan Belum Tersinkron
        ↓
Koneksi tersedia kembali
        ↓
Sistem memvalidasi dan menyinkronkan data
        ↓
Berhasil → status Berhasil | Konflik → antrean Konflik
```

---

# 13. Roadmap Implementasi

Roadmap merupakan rencana awal dan harus disesuaikan dengan kapasitas tim, anggaran, hasil discovery, dan kesiapan integrasi.

## Fase 0 — Discovery dan Validasi

**Tujuan:** Memvalidasi masalah, data, aturan, pengguna, dan kesiapan implementasi.

**Aktivitas**
- Wawancara Bapenda, OPD, petugas, pimpinan, dan wajib pajak.
- Pemetaan proses bisnis berjalan.
- Inventarisasi sistem/data eksisting.
- Pemeriksaan dasar hukum jenis penerimaan prioritas.
- Pemilihan 2–3 jenis penerimaan pilot.
- Penentuan mitra pembayaran.
- Pengumpulan baseline.
- Validasi sitemap/user flow.
- Penguncian kriteria UAT.

**Keluaran**
- Dokumen hasil discovery.
- Daftar keputusan OQ.
- Baseline dan definisi metrik.
- Scope MVP yang disetujui.
- Rencana implementasi dan anggaran.

Durasi ditentukan setelah ruang lingkup discovery disepakati.

## Fase 1 — MVP

**Target:** 4–6 bulan setelah fase penemuan.

**Aktivitas**
- Akun dan hak akses.
- Master data.
- Tarif, penetapan, dan tagihan.
- Integrasi pembayaran.
- Rekonsiliasi harian.
- Aplikasi lapangan offline.
- Dashboard dan laporan.
- Portal wajib pajak.
- Jejak audit.
- Pengujian integrasi/keamanan, UAT, dan persiapan go-live.

**Keluaran**
- Aplikasi MVP.
- Dokumentasi operasional.
- Hasil UAT.
- Prosedur dukungan pengguna.
- Prosedur pencadangan/pemulihan.
- Sistem siap produksi setelah persetujuan resmi.

## Fase 2 — Perluasan

Perkiraan durasi 3–4 bulan setelah fase sebelumnya.

- Perluasan jenis penerimaan.
- Pengembangan penagihan tunggakan.
- Penyempurnaan alur keberatan dan restitusi.
- Perluasan aplikasi lapangan.
- Penyempurnaan laporan.
- Integrasi tambahan yang telah disetujui.

## Fase 3 — Pengembangan Lanjutan

- GIS potensi PAD.
- Analitik lanjutan.
- Deteksi anomali.
- Pengelolaan pendapatan BUMD/aset.
- Integrasi lintas sistem pemerintah.

---

# 14. UAT dan Quality Assurance

## 14.1 Area Pengujian

| Area | Skenario minimum |
|---|---|
| Akun | Login, logout, MFA Admin, penonaktifan, pembatasan akses |
| Master data | Registrasi, validasi, duplikasi, verifikasi, impor |
| Tarif | Masa berlaku, dasar hukum, tarif tidak ditemukan |
| Penetapan | Perhitungan, persetujuan, koreksi |
| Tagihan | Nomor unik, jatuh tempo, pembatalan, PDF |
| Pembayaran | QRIS/VA/transfer pada lingkungan uji, konfirmasi, notifikasi duplikat |
| Rekonsiliasi | Cocok, tidak ditemukan, nominal berbeda, penyelesaian |
| Offline | Input tanpa sinyal, tutup-buka aplikasi, sinkronisasi, konflik |
| Dashboard | Filter, perhitungan realisasi, target, ekspor |
| Portal | Kepemilikan data, pembayaran, bukti bayar, tiket |
| Audit | Kelengkapan log, pencarian, ekspor, larangan penghapusan |
| Keamanan | Otorisasi backend, akses silang data, sesi dicabut |
| Kinerja | Beban transaksi, waktu respons, pemulihan gangguan |

## 14.2 Syarat Kelulusan

- Semua skenario kritis lulus.
- Tidak ada cacat kritis terbuka yang memengaruhi integritas pembayaran, keamanan, atau kehilangan data.
- Semua requirement wajib memiliki bukti pengujian.
- Perhitungan transaksi dapat ditelusuri.
- Pengujian pemulihan dan pencadangan berhasil.
- Pemilik produk menyetujui hasil UAT.

Ambang cacat nonkritis dan mekanisme persetujuan pengecualian harus ditetapkan sebelum UAT.

---

# 15. Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Data awal tidak lengkap | Migrasi dan cakupan objek terhambat | Audit data, pembersihan, impor bertahap |
| Dasar hukum belum terinventarisasi | Perhitungan dapat salah | Validasi bersama unit hukum dan pemilik proses |
| Integrasi bank terlambat | Pembayaran otomatis belum siap | Konfirmasi mitra dan dokumentasi API sejak awal |
| Konektivitas lapangan buruk | Sinkronisasi tertunda | Offline-first, antrean lokal, percobaan ulang |
| Duplikasi data | Ketetapan ganda/salah sasaran | Deteksi duplikat dan verifikasi Admin |
| Perubahan tarif | Risiko ketidaksesuaian tagihan | Versioning tarif dan histori ketetapan |
| Pengguna sulit beradaptasi | Adopsi rendah | Pelatihan, uji usability, panduan operasional |
| Kebocoran data | Risiko kerugian/kepatuhan | Enkripsi, kontrol akses, audit, pengujian keamanan |
| Konfirmasi pembayaran tidak konsisten | Status tagihan salah | Idempotensi, antrean pemrosesan, rekonsiliasi |
| Lingkup MVP membesar | Jadwal terancam | Penguncian scope dan kontrol perubahan |
| Definisi laporan berbeda | Angka tidak konsisten | Kamus metrik dan validasi laporan resmi |
| Kesiapan operasi belum ada | Gangguan setelah go-live | SOP, dukungan, monitoring, rencana pemulihan |

---

# 16. Tata Kelola Produk

## 16.1 Pemilik Produk

Bapenda atau pengelola pendapatan daerah menjadi pemilik produk sesuai pembahasan awal. Penetapan unit formal, penanggung jawab, dan kewenangan harus dituangkan melalui mekanisme internal yang berlaku.

## 16.2 Tanggung Jawab

### Pemilik produk
- Menyetujui scope MVP.
- Menentukan prioritas.
- Memvalidasi kebutuhan.
- Menyetujui UAT.
- Menetapkan keputusan bisnis yang belum terselesaikan.

### Tim teknis
- Merancang arsitektur.
- Mengembangkan aplikasi.
- Menjamin keamanan dan integritas data.
- Menyediakan pengujian dan dokumentasi teknis.
- Menyiapkan deployment dan monitoring.

### OPD terkait
- Memvalidasi proses/data sesuai kewenangan.
- Menentukan kebutuhan operasional.
- Mengikuti uji coba dan pelatihan.

### Pengelola operasional
- Mengelola akun.
- Memantau transaksi.
- Menangani rekonsiliasi.
- Menjalankan dukungan.
- Menindaklanjuti insiden.

Struktur tim dan penanggung jawab resmi masih perlu ditentukan.

## 16.3 Pengendalian Perubahan

Setiap perubahan scope harus mencakup alasan, dampak pada pengguna, keamanan/kepatuhan, integrasi, biaya/jadwal, dan persetujuan pemilik produk. Perubahan tarif/dasar hukum tidak boleh dilakukan hanya sebagai perubahan UI tanpa validasi aturan dan kewenangan.

---

# 17. Asumsi dan Batasan Dokumen

1. Nama SIPAD Taput digunakan sebagai nama kerja produk.
2. Bapenda/pengelola pendapatan daerah adalah pemilik produk sesuai pembahasan awal.
3. Lima peran pengguna termasuk dalam MVP.
4. Portal wajib pajak termasuk MVP.
5. QRIS, virtual account, dan transfer direncanakan; ketersediaan bergantung pada mitra dan integrasi.
6. Aplikasi Android offline termasuk MVP.
7. Dashboard dan rekonsiliasi termasuk MVP.
8. MVP ditargetkan siap produksi 4–6 bulan setelah discovery.
9. MVP diuji pada 2–3 jenis penerimaan prioritas.
10. Seluruh angka target adalah usulan dan harus divalidasi.
11. Dokumen tidak menetapkan tarif/dasar hukum spesifik tanpa verifikasi.
12. Arsitektur teknis, teknologi, vendor, hosting, dan anggaran belum diputuskan.
13. Kesiapan produksi mensyaratkan pengujian keamanan, integrasi, pemulihan, dan persetujuan UAT.

---

# 18. Persetujuan Dokumen

Dokumen menjadi acuan awal untuk discovery, desain UI/UX, perencanaan teknis, dan pembangunan MVP. Dokumen menjadi baseline pengembangan setelah keputusan terbuka yang kritis diselesaikan dan scope disetujui pemilik produk.

| Peran | Nama | Tanggal | Status |
|---|---|---|---|
| Pemilik Produk | Belum ditetapkan | — | Menunggu persetujuan |
| Perwakilan Bapenda | Belum ditetapkan | — | Menunggu persetujuan |
| Perwakilan OPD | Belum ditetapkan | — | Menunggu persetujuan |
| Penanggung Jawab Teknis | Belum ditetapkan | — | Menunggu persetujuan |

---

# Ringkasan Eksekutif

SIPAD Taput merupakan rancangan platform terpadu untuk mengelola PAD Kabupaten Tapanuli Utara dari pendataan wajib pajak dan objek hingga penetapan, penagihan, pembayaran nontunai, rekonsiliasi, dan pelaporan.

MVP terdiri atas sepuluh fitur inti:

1. Akun dan peran.
2. Master data wajib pajak dan objek.
3. Tarif dan penetapan.
4. Tagihan dan pengingat.
5. Pembayaran nontunai dan bukti bayar.
6. Rekonsiliasi harian.
7. Aplikasi lapangan offline.
8. Dashboard dan laporan.
9. Portal wajib pajak.
10. Jejak audit.

Target implementasi adalah 4–6 bulan setelah fase penemuan, dengan pilot pada 2–3 jenis penerimaan prioritas. Keberhasilan diukur melalui cakupan data objek, realisasi terhadap target, porsi pembayaran nontunai, kecepatan penerbitan tagihan, kepatuhan tepat waktu, otomatisasi laporan, dan integritas rekonsiliasi.

**Prioritas sebelum pengembangan:** selesaikan baseline PAD, inventarisasi sistem eksisting, penentuan jenis penerimaan pilot, validasi dasar hukum, pemilihan mitra pembayaran, penetapan arsitektur keamanan, dan persetujuan kriteria UAT.

Dokumen ini adalah PRD versi 1.0 untuk validasi, bukan pernyataan bahwa seluruh proses, integrasi, tarif, atau kebijakan operasional Kabupaten Tapanuli Utara telah dikonfirmasi.
