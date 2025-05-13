# **Password Vault**
Saat ini, hampir semua orang memiliki banyak akun online, seperti akun media sosial, akun email, dan akun lainnya. Setiap akun ini biasanya memiliki password yang berbeda-beda. Masalahnya, semakin banyak akun yang dimiliki, semakin sulit untuk mengingat semua password tersebut. Akibatnya, banyak orang memilih untuk menggunakan password yang mudah diingat (tapi kurang aman) atau bahkan menulisnya di tempat yang tidak aman.

**Project Password-Vault ini hadir untuk menyelesaikan masalah tersebut.** Dengan aplikasi ini, kamu hanya perlu mengingat satu password saja—yaitu password aplikasi ini. Semua password untuk akun-akun lainnya akan disimpan dengan aman di dalam aplikasi, sehingga kamu tidak perlu lagi khawatir melupakan atau kehilangan password. Aplikasi ini juga menjaga keamanan data dengan enkripsi yang kuat, memastikan informasi kamu tetap aman.

---

## **Cara Instalasi / Menjalankan Project Ini**

Ikuti langkah-langkah berikut untuk menginstal dan menjalankan project Password Manager ini:

### 1. **Install Python**

Aplikasi ini dibangun dengan **Django**, sebuah framework web yang menggunakan Python. Pastikan kamu sudah menginstal Python terlebih dahulu.

* Unduh Python di [https://www.python.org/](https://www.python.org/) atau install melalui Microsoft Store (untuk pengguna Windows).
* Setelah terinstal, cek apakah Python berhasil diinstal dengan menjalankan perintah berikut di terminal atau command prompt:

```bash
python --version
```

Jika terinstal dengan benar, kamu akan melihat versi Python yang terpasang, misalnya: `Python 3.9.4`.

Selanjutnya, cek juga versi **pip** (package manager untuk Python) dengan perintah:

```bash
pip --version
```

Jika muncul versi pip (misalnya `pip 21.1.2`), berarti pip sudah terpasang.

### 2. **Clone atau Download Project**

Clone atau download project ini dari GitHub menggunakan perintah berikut:

```bash
git clone https://github.com/Fauzan-Aldi/Password-Vault.git
```

### 3. **Buka Terminal dan Akses Folder Project**

Setelah mengunduh project, buka terminal dan navigasikan ke folder project yang sudah di-download atau di-clone:

```bash
cd [path projectnya]
```

### 4. **Buat Virtual Environment (Opsional)**

Untuk mengelola dependensi Python, disarankan untuk membuat virtual environment:

```bash
python -m venv [nama environment]
```

Misalnya, jika kamu ingin memberi nama `env`, jalankan:

```bash
python -m venv env
```

Virtual environment ini akan membuat folder baru dengan nama `env`.

### 5. **Aktifkan Virtual Environment**

Jika kamu membuat virtual environment pada langkah sebelumnya, aktifkan environment tersebut:

* **Windows**:

```bash
env\Scripts\activate
```

* **macOS/Linux**:

```bash
source env/bin/activate
```

### 6. **Install Dependencies**

Setelah virtual environment aktif, install semua package yang dibutuhkan dengan menjalankan perintah berikut:

```bash
pip install -r requirements.txt
```

### 7. **Lakukan Migrasi Database**

Django menggunakan database untuk menyimpan data aplikasi. Jalankan perintah ini untuk melakukan migrasi database (membuat struktur tabel di database):

```bash
python manage.py migrate
```

Secara otomatis, Django akan membuat file `db.sqlite3` yang merupakan database SQLite.

### 8. **Buat Superuser untuk Akses Admin**

Untuk mengakses halaman admin aplikasi, kamu perlu membuat akun superuser:

```bash
python manage.py createsuperuser
```

Ikuti instruksi untuk membuat username dan password.

### 9. **Jalankan Aplikasi**

Setelah semua siap, jalankan aplikasi dengan perintah berikut:

```bash
python manage.py runserver
```

Secara default, aplikasi akan berjalan di port `8000`. Jika ingin menggunakan port lain, bisa menambahkan nomor port, seperti ini:

```bash
python manage.py runserver 3000
```

Aplikasi kini berjalan di `localhost:8000` (atau port lain yang kamu pilih).

### 10. **Buka Web di Browser**

Sekarang, buka web aplikasi di browser dengan mengunjungi alamat `localhost:8000` (atau port lain jika kamu memilih port berbeda).

### 11. **Login dengan Superuser**

Login ke aplikasi menggunakan username dan password yang kamu buat saat membuat superuser.

### 12. **Akses Halaman Admin**

Untuk mengelola aplikasi, buka halaman admin dengan mengakses URL berikut:

```bash
localhost:8000/admin
```

Di halaman admin, kamu bisa mengelola data pengguna, akun, dan password yang tersimpan.

---

## **Thank you 😁**

Terima kasih telah menggunakan Password-Vault ini! Semoga aplikasi ini membantu kamu mengelola password dengan lebih aman dan mudah.
