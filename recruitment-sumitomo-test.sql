-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 26, 2023 at 09:07 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recruitment-sumitomo-test`
--

-- --------------------------------------------------------

--
-- Table structure for table `applicants`
--

CREATE TABLE `applicants` (
  `id` int(11) NOT NULL,
  `nik` varchar(20) NOT NULL,
  `name` varchar(70) DEFAULT NULL,
  `place_of_birth` varchar(100) NOT NULL,
  `date_of_birth` date DEFAULT NULL,
  `gender` enum('Laki-laki','Perempuan') DEFAULT NULL,
  `height` int(11) NOT NULL,
  `weight` int(11) NOT NULL,
  `marital_status` enum('Belum Menikah','Sudah Menikah') DEFAULT NULL,
  `address_ktp` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `religion` varchar(50) NOT NULL,
  `biological_mother_name` varchar(130) NOT NULL,
  `father_name` varchar(130) NOT NULL,
  `mother_name` varchar(130) NOT NULL,
  `npwp` varchar(50) NOT NULL,
  `last_education` varchar(100) NOT NULL,
  `school_name` varchar(100) NOT NULL,
  `major` varchar(100) NOT NULL,
  `graduation_year` int(4) NOT NULL,
  `ipk` varchar(5) NOT NULL,
  `work_experience_pt` varchar(100) NOT NULL,
  `work_experience` varchar(100) NOT NULL,
  `total_work_experience` varchar(50) NOT NULL,
  `company_name` varchar(130) NOT NULL,
  `experience_description` varchar(255) NOT NULL,
  `skills` varchar(255) NOT NULL,
  `certification` varchar(200) NOT NULL,
  `expected_salary` varchar(50) NOT NULL,
  `expected_working_time` varchar(50) NOT NULL,
  `ready_shift` enum('Ya','Tidak') DEFAULT NULL,
  `ready_any_department` enum('Ya','Tidak') NOT NULL,
  `is_studying` enum('Ya','Tidak') DEFAULT NULL,
  `is_working` enum('Ya','Tidak') DEFAULT NULL,
  `vehicle` varchar(100) NOT NULL,
  `have_sim` enum('Ya','Tidak') DEFAULT NULL,
  `nail_long` enum('Ya','Tidak') DEFAULT NULL,
  `hospitalized` enum('Ya','Tidak') DEFAULT NULL,
  `have_disease` varchar(130) NOT NULL,
  `smoking` enum('Ya','Tidak') DEFAULT NULL,
  `left_handed` enum('Ya','Tidak') DEFAULT NULL,
  `distinguish_colors` enum('Ya','Tidak') DEFAULT NULL,
  `is_worked_sbi` enum('Ya','Tidak') NOT NULL,
  `ever_worked_sbi` varchar(255) NOT NULL,
  `ready_follow_rulles` enum('Ya','Tidak') DEFAULT NULL,
  `hobby` varchar(255) NOT NULL,
  `special_achievements` varchar(255) NOT NULL,
  `motivation` varchar(255) NOT NULL,
  `tribe` varchar(100) NOT NULL,
  `no_hp` varchar(13) NOT NULL,
  `no_wa` varchar(13) NOT NULL,
  `email` varchar(50) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `applicants`
--

INSERT INTO `applicants` (`id`, `nik`, `name`, `place_of_birth`, `date_of_birth`, `gender`, `height`, `weight`, `marital_status`, `address_ktp`, `address`, `religion`, `biological_mother_name`, `father_name`, `mother_name`, `npwp`, `last_education`, `school_name`, `major`, `graduation_year`, `ipk`, `work_experience_pt`, `work_experience`, `total_work_experience`, `company_name`, `experience_description`, `skills`, `certification`, `expected_salary`, `expected_working_time`, `ready_shift`, `ready_any_department`, `is_studying`, `is_working`, `vehicle`, `have_sim`, `nail_long`, `hospitalized`, `have_disease`, `smoking`, `left_handed`, `distinguish_colors`, `is_worked_sbi`, `ever_worked_sbi`, `ready_follow_rulles`, `hobby`, `special_achievements`, `motivation`, `tribe`, `no_hp`, `no_wa`, `email`, `createdAt`, `updatedAt`) VALUES
(55, '1507010302920001', 'AHMADUN', 'ALANG-ALANG', '2023-09-26', 'Laki-laki', 171, 51, 'Belum Menikah', 'Tembesi Lestari', 'Tanjung Piayu', 'ISLAM', 'TISYA', 'SATTUO', 'TISYA RAMADANI', '2222-222-33-4444444', 'SD', 'Politeknik Negeri Batam', 'Teknik Informatika', 2019, '3.90', 'Operator Assembly', 'lainnya', 'Kurang dari 1 Tahun', 'PT ADA AJA', '-', 'Programmer', 'Google', '15000000', '6 bulan - 1 tahun', 'Tidak', 'Ya', 'Tidak', 'Ya', 'MOBIL', 'Ya', 'Ya', 'Tidak', '-', 'Tidak', 'Tidak', 'Tidak', 'Tidak', '-', 'Tidak', 'TIDUR', '-', 'UANG', 'BUGIS', '082372755206', '082372755206', 'sattuo-ahmadun@sws.com', '2023-09-26', '2023-09-26'),
(62, '2102026810030003', 'Tisya Ramadhani', 'Kundur Karimun', '2003-10-28', 'Perempuan', 160, 45, 'Belum Menikah', 'Kundur Karimun', 'Batam', 'Islam', 'xxxxx', 'xxxxxx', 'xxxxx', '-', 'S1', 'Politeknik Negeri Batam', 'Teknik Informatika', 2024, '4.00', 'Maintenance', 'Development', '1-3 Tahun', 'PT Schneider', 'Programmer', 'Programmer', 'Google', '15000000', '5 tahun - pensiun', 'Tidak', 'Ya', 'Ya', 'Tidak', 'motor', 'Ya', 'Tidak', 'Tidak', '-', 'Tidak', 'Tidak', 'Ya', 'Ya', '523119', 'Ya', 'tidur', '-', 'uang', 'melayu', '083124508650', '083224508650', 'tisyarizkiramadhani28@gmail.com', '2023-10-11', '2023-12-07'),
(64, '2102026810030002', 'Thania Febyhola', 'kundur karimun', '2023-12-12', 'Perempuan', 160, 60, 'Belum Menikah', 'kundur karimun', 'batam centre', 'islam', 'mardiana', 'supianto', 'mardiana', '-', 'sma', 'Politeknik Negeri Batam', 'Teknik Informatika', 2024, '4.00', 'Operator Assembly', 'Tidak Ada', 'Tidak berpengalaman', 'tidak ada', 'akuntan pajak', 'Exel', 'Google', '150000000', '5 tahun - pensiun', 'Ya', 'Ya', 'Ya', 'Ya', 'motor', 'Tidak', 'Tidak', 'Tidak', '-', 'Tidak', 'Tidak', 'Ya', 'Tidak', '-', 'Ya', 'tidur', '-', 'uang', 'melayu', '081277563094', '081277563094', 'thaniafebyhola14@gmail.com', '2023-10-18', '2023-12-04'),
(65, '1122334455667788', 'Tes', '', NULL, NULL, 0, 0, NULL, '', '', '', '', '', '', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', NULL, 'Ya', NULL, NULL, '', NULL, NULL, NULL, '', NULL, NULL, NULL, 'Ya', '', NULL, '', '', '', '', '', '', 'tes@gmail.com', '2023-10-24', '2023-10-24'),
(66, '2458963214788596', 'pritt', '', NULL, NULL, 0, 0, NULL, '', '', '', '', '', '', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', NULL, 'Ya', NULL, NULL, '', NULL, NULL, NULL, '', NULL, NULL, NULL, 'Ya', '', NULL, '', '', '', '', '', '', 'prit@gmail.com', '2023-11-29', '2023-11-29'),
(67, '1252369585741125', 'Putra', 'Tanjung Batu', '2003-12-15', 'Laki-laki', 170, 50, 'Belum Menikah', 'tg batu', 'Tg Batu', 'islam', 'tes', 'Tes', 'tes', '-', 'SMK', 'Tidak Kuliah', 'Teknik Mesin', 2021, '4.00', 'Maintenance', 'Mesin Kapal', '1-3 Tahun', 'PT Shipyard', '-', 'Mekanik', 'Google', '1000000000', '5 tahun - pensiun', 'Ya', 'Ya', 'Tidak', 'Tidak', 'motor', 'Ya', 'Ya', 'Tidak', '-', 'Ya', 'Tidak', 'Ya', 'Tidak', '-', 'Ya', 'tidur', '-', 'uang', 'melayu', '081314258565', '081314258565', 'putra@gmail.com', '2023-12-01', '2023-12-01');

-- --------------------------------------------------------

--
-- Table structure for table `applicants_1`
--

CREATE TABLE `applicants_1` (
  `id` int(11) NOT NULL,
  `nik` varchar(20) DEFAULT NULL,
  `name` varchar(70) DEFAULT NULL,
  `place_of_birth` varchar(100) NOT NULL,
  `date_of_birth` date DEFAULT NULL,
  `gender` enum('Laki-laki','Perempuan') DEFAULT NULL,
  `height` int(11) NOT NULL,
  `weight` int(11) NOT NULL,
  `marital_status` enum('Belum Menikah','Sudah Menikah') DEFAULT NULL,
  `address_ktp` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `religion` varchar(50) NOT NULL,
  `biological_mother_name` varchar(130) NOT NULL,
  `father_name` varchar(130) NOT NULL,
  `mother_name` varchar(130) NOT NULL,
  `npwp` varchar(50) NOT NULL,
  `last_education` varchar(100) NOT NULL,
  `school_name` varchar(100) NOT NULL,
  `major` varchar(100) NOT NULL,
  `graduation_year` int(4) NOT NULL,
  `ipk` varchar(5) NOT NULL,
  `work_experience_pt` varchar(100) NOT NULL,
  `work_experience` varchar(100) NOT NULL,
  `total_work_experience` varchar(50) NOT NULL,
  `company_name` varchar(130) NOT NULL,
  `experience_description` varchar(255) NOT NULL,
  `skills` varchar(255) NOT NULL,
  `certification` varchar(200) NOT NULL,
  `expected_salary` varchar(50) NOT NULL,
  `expected_working_time` varchar(50) NOT NULL,
  `ready_shift` enum('Ya','Tidak') DEFAULT NULL,
  `ready_any_department` enum('Ya','Tidak') NOT NULL,
  `is_studying` enum('Ya','Tidak') DEFAULT NULL,
  `is_working` enum('Ya','Tidak') DEFAULT NULL,
  `vehicle` varchar(100) NOT NULL,
  `have_sim` enum('Ya','Tidak') DEFAULT NULL,
  `nail_long` enum('Ya','Tidak') DEFAULT NULL,
  `hospitalized` enum('Ya','Tidak') DEFAULT NULL,
  `have_disease` varchar(130) NOT NULL,
  `smoking` enum('Ya','Tidak') DEFAULT NULL,
  `left_handed` enum('Ya','Tidak') DEFAULT NULL,
  `distinguish_colors` enum('Ya','Tidak') DEFAULT NULL,
  `is_worked_sbi` enum('Ya','Tidak') NOT NULL,
  `ever_worked_sbi` varchar(255) NOT NULL,
  `ready_follow_rulles` enum('Ya','Tidak') DEFAULT NULL,
  `hobby` varchar(255) NOT NULL,
  `special_achievements` varchar(255) NOT NULL,
  `motivation` varchar(255) NOT NULL,
  `tribe` varchar(100) NOT NULL,
  `no_hp` varchar(13) NOT NULL,
  `no_wa` varchar(13) NOT NULL,
  `email` varchar(50) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `applications`
--

CREATE TABLE `applications` (
  `id` int(11) NOT NULL,
  `no_test` varchar(6) NOT NULL,
  `jobs_id` int(11) NOT NULL,
  `applicants_nik` varchar(20) NOT NULL,
  `name` varchar(130) NOT NULL,
  `documents_nik` varchar(20) NOT NULL,
  `status` varchar(100) NOT NULL,
  `grade` int(11) NOT NULL,
  `next_selection` varchar(100) DEFAULT NULL,
  `time_selection` date DEFAULT NULL,
  `time` varchar(20) NOT NULL,
  `place` varchar(225) NOT NULL,
  `timetable` text NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL,
  `tahap_seleksi` varchar(100) DEFAULT NULL,
  `domisili` enum('Ya','Tidak') DEFAULT NULL,
  `kehadiran` enum('Ya','Tidak') DEFAULT NULL,
  `interviewer_id` int(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `position` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `applications`
--

INSERT INTO `applications` (`id`, `no_test`, `jobs_id`, `applicants_nik`, `name`, `documents_nik`, `status`, `grade`, `next_selection`, `time_selection`, `time`, `place`, `timetable`, `createdAt`, `updatedAt`, `tahap_seleksi`, `domisili`, `kehadiran`, `interviewer_id`, `email`, `position`) VALUES
(173, '7URBMO', 31, '2102026810030003', 'Tisya Ramadhani', '2102026810030003', 'Lulus', 90, 'Wawancara', '2023-12-13', '11:00', 'PT. Sumitomo Wiring Systems Batam Lot 8', '<p>wwww</p>', '2023-10-12', '2023-12-08', 'Tes Tahap 1', NULL, NULL, 305, 'tisyarizkiramadhani28@gmail.com', 'Clerk'),
(175, 'LEMNGI', 34, '2102026810030003', 'Tisya Ramadhani', '2102026810030003', '', 60, '', '2023-10-25', '01:53', 'tes', '<p>vvvv</p>', '2023-10-18', '2023-10-19', 'Wawancara', NULL, NULL, 0, 'tisyarizkiramadhani28@gmail.com', 'Senior Clerk'),
(178, '2ASSZY', 45, '2102026810030002', 'Thania Febyhola', '2102026810030002', 'Tidak Lulus', 80, 'Wawancara', '0000-00-00', '', 'PT. Sumitomo Wiring Systems Batam Lot 8', '<p>xxxx</p>', '2023-12-04', '2023-12-08', 'Tes Tahap 1', NULL, NULL, 0, 'thaniafebyhola14@gmail.com', 'Clerk');

-- --------------------------------------------------------

--
-- Table structure for table `applications_1`
--

CREATE TABLE `applications_1` (
  `id` int(11) NOT NULL,
  `no_test` varchar(6) NOT NULL,
  `jobs_id` int(11) NOT NULL,
  `applicants_nik` varchar(20) NOT NULL,
  `name` varchar(130) NOT NULL,
  `documents_nik` varchar(20) NOT NULL,
  `status` varchar(100) NOT NULL,
  `grade` int(11) NOT NULL,
  `next_selection` varchar(100) DEFAULT NULL,
  `time_selection` date NOT NULL,
  `time` varchar(20) NOT NULL,
  `place` varchar(225) NOT NULL,
  `timetable` text NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `certifications`
--

CREATE TABLE `certifications` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `certifications`
--

INSERT INTO `certifications` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(3, 'Google', '2023-03-17', '2023-03-20'),
(6, 'Adobe', '2023-03-20', '2023-03-20'),
(11, 'Mobile', '2023-10-17', '2023-10-17');

-- --------------------------------------------------------

--
-- Table structure for table `documents`
--

CREATE TABLE `documents` (
  `id` int(11) NOT NULL,
  `nik` varchar(20) NOT NULL,
  `jobs_id` int(11) NOT NULL,
  `application_letter` varchar(255) NOT NULL,
  `cv` varchar(255) DEFAULT NULL,
  `ktp` varchar(255) NOT NULL,
  `ijazah` varchar(255) NOT NULL,
  `transkip` varchar(255) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `skck` varchar(255) NOT NULL,
  `health_certificate` varchar(255) NOT NULL,
  `kk` varchar(255) DEFAULT NULL,
  `sim` varchar(255) DEFAULT NULL,
  `work_experience_letter` varchar(255) DEFAULT NULL,
  `npwp_letter` varchar(255) DEFAULT NULL,
  `bpjs_kesehatan` varchar(255) DEFAULT NULL,
  `bpjs_ketenagakerjaan` varchar(255) DEFAULT NULL,
  `achievements_certificate` varchar(255) DEFAULT NULL,
  `competency_certificate` varchar(255) DEFAULT NULL,
  `follow_rulles_letter` varchar(255) DEFAULT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `documents`
--

INSERT INTO `documents` (`id`, `nik`, `jobs_id`, `application_letter`, `cv`, `ktp`, `ijazah`, `transkip`, `photo`, `skck`, `health_certificate`, `kk`, `sim`, `work_experience_letter`, `npwp_letter`, `bpjs_kesehatan`, `bpjs_ketenagakerjaan`, `achievements_certificate`, `competency_certificate`, `follow_rulles_letter`, `createdAt`, `updatedAt`) VALUES
(173, '2102026810030003', 31, 'application_letter-1697074437092-Tisya Ramadhani_3312101021_Logbook_M1.pdf', 'cv-1697074437093-Tisya Ramadhani_3312101021_Logbook_M1.pdf', 'ktp-1697074437098-Tisya Ramadhani_3312101021_Logbook_M1.pdf', 'ijazah-1697074437173-Tisya Ramadhani_3312101021_Logbook_M1.pdf', 'transkip-1697074437174-Tisya Ramadhani_3312101021_Logbook_M1.pdf', 'photo-1697074437180-Tisya Ramadhani_3312101021_Logbook_M1.pdf', '', 'health_certificate-1697074437370-Tisya Ramadhani_3312101021_Logbook_M1.pdf', 'kk-1697074437398-Tisya Ramadhani_3312101021_Logbook_M1.pdf', '', '', '', '', '', '', '', 'follow_rulles_letter-1697074437399-Tisya Ramadhani_3312101021_Logbook_M1.pdf', '2023-10-12', '2023-10-12'),
(174, '2102026810030002', 31, 'application_letter-1697590461115-thania.pdf', 'cv-1697590461115-thania.pdf', 'ktp-1697590461115-thania.pdf', 'ijazah-1697590461116-thania.pdf', 'transkip-1697590461116-thania.pdf', 'photo-1697590461117-thania.pdf', '', 'health_certificate-1697590461117-thania.pdf', 'kk-1697590461117-thania.pdf', '', '', '', '', '', '', '', 'follow_rulles_letter-1697590461117-thania.pdf', '2023-10-18', '2023-10-18'),
(175, '2102026810030003', 34, 'application_letter-1697613177640-thania.pdf', 'cv-1697613177641-thania.pdf', 'ktp-1697613177641-thania.pdf', 'ijazah-1697613177641-thania.pdf', 'transkip-1697613177642-thania.pdf', 'photo-1697613177642-thania.pdf', '', 'health_certificate-1697613177642-thania.pdf', 'kk-1697613177642-thania.pdf', '', '', '', '', '', '', '', 'follow_rulles_letter-1697613177642-thania.pdf', '2023-10-18', '2023-10-18'),
(176, '1252369585741125', 45, 'application_letter-1701401206745-Report plagiat 1.pdf', 'cv-1701401206750-Report plagiat 1.pdf', 'ktp-1701401206753-Report plagiat 1.pdf', 'ijazah-1701401206755-Report plagiat 1.pdf', 'transkip-1701401206758-Report plagiat 1.pdf', 'photo-1701401206760-Report plagiat 1.pdf', '', 'health_certificate-1701401206761-Report plagiat 1.pdf', 'kk-1701401206762-Report plagiat 1.pdf', '', '', '', '', '', '', '', 'follow_rulles_letter-1701401206764-Report plagiat 1.pdf', '2023-12-01', '2023-12-01'),
(177, '1252369585741125', 31, 'application_letter-1701401304064-Report plagiat 1.pdf', 'cv-1701401304067-Report plagiat 1.pdf', 'ktp-1701401304069-Report plagiat 1.pdf', 'ijazah-1701401304070-Report plagiat 1.pdf', 'transkip-1701401304072-Report plagiat 1.pdf', 'photo-1701401304073-Report plagiat 1.pdf', 'skck-1701401304076-Report plagiat 1.pdf', 'health_certificate-1701401304078-Report plagiat 1.pdf', 'kk-1701401304079-Report plagiat 1.pdf', 'sim-1701401304081-Report plagiat 1.pdf', 'work_experience_letter-1701401304082-Report plagiat 1.pdf', 'npwp_letter-1701401304083-Report plagiat 1.pdf', 'bpjs_kesehatan-1701401304085-Report plagiat 1.pdf', 'bpjs_ketenagakerjaan-1701401304086-Report plagiat 1.pdf', 'achievements_certificate-1701401304089-Report plagiat 1.pdf', 'competency_certificate-1701401304093-Report plagiat 1.pdf', 'follow_rulles_letter-1701401304095-Report plagiat 1.pdf', '2023-12-01', '2023-12-01'),
(178, '2102026810030002', 45, 'application_letter-1701652069406-Attendance_3312101021-Sep2023.pdf', 'cv-1701652069409-Attendance_3312101021-Sep2023.pdf', 'ktp-1701652069411-Attendance_3312101021-Sep2023.pdf', 'ijazah-1701652069411-Attendance_3312101021-Sep2023.pdf', 'transkip-1701652069413-Attendance_3312101021-Sep2023.pdf', 'photo-1701652069413-Attendance_3312101021-Sep2023.pdf', 'skck-1701652069415-Attendance_3312101021-Sep2023.pdf', 'health_certificate-1701652069415-Attendance_3312101021-Sep2023.pdf', 'kk-1701652069416-Attendance_3312101021-Sep2023.pdf', 'sim-1701652069417-Attendance_3312101021-Sep2023.pdf', 'work_experience_letter-1701652069455-Attendance_3312101021-Sep2023.pdf', 'npwp_letter-1701652069455-Attendance_3312101021-Sep2023.pdf', 'bpjs_kesehatan-1701652069456-Attendance_3312101021-Sep2023.pdf', 'bpjs_ketenagakerjaan-1701652069457-Attendance_3312101021-Sep2023.pdf', 'achievements_certificate-1701652069458-Attendance_3312101021-Sep2023.pdf', 'competency_certificate-1701652069458-Attendance_3312101021-Sep2023.pdf', 'follow_rulles_letter-1701652069459-Attendance_3312101021-Sep2023.pdf', '2023-12-04', '2023-12-04');

-- --------------------------------------------------------

--
-- Table structure for table `interviewer`
--

CREATE TABLE `interviewer` (
  `id` int(11) NOT NULL,
  `nik` varchar(20) NOT NULL,
  `name` varchar(130) NOT NULL,
  `password` varchar(255) NOT NULL,
  `selfie` text NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` int(11) NOT NULL,
  `position` varchar(100) NOT NULL,
  `section` varchar(100) NOT NULL,
  `qualification` text NOT NULL,
  `estimated_joining` date NOT NULL,
  `timeline` text NOT NULL,
  `application_open` date NOT NULL,
  `application_close` date NOT NULL,
  `about_company` text NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `position`, `section`, `qualification`, `estimated_joining`, `timeline`, `application_open`, `application_close`, `about_company`, `status`, `createdAt`, `updatedAt`) VALUES
(31, 'Development', 'Information System', '<ul><li>Sehat Jasmani dan Rohani</li><li>Pendidikan minimal Diploma 3 Teknik Informatika / Sistem Informasi</li><li>Memahami Database</li><li>Memahami Bahasa Pemrograman</li><li>Berkomitmen tinggi untuk mematuhi semua peraturan di Perusahaan</li><li>Berkomitmen untuk mengikuti Apprenticeship Program hingga tuntas selama 4 bulan</li></ul>', '2023-03-02', '<blockquote><p>14 - 18:<i> Administ</i>rasi</p><p>20 - 22 : Seleksi Tahap 1</p><p>26 - 27 : Wawancara</p><p>28 - 29 : Medical Check Up</p><p>&nbsp;</p></blockquote>', '2022-12-06', '2022-12-13', '<p><strong>PT Sumitomo</strong> Indonesia mengelola lima unit bisnis yang terdiri dari produk logam, sistem transportasi dan konstruksi, lingkungan dan infrastruktur, barang dan jasa terkait media, jaringan, dan gaya hidup, serta sumber daya mineral, energi, kimia, dan produk elektronik.</p>', 1, '2023-01-20 13:22:14', '2023-12-07 08:44:03'),
(45, 'Operator Assembly', 'Assembly', '<ul><li>Sehat Jasmani dan Rohani</li><li>Pendidikan minimal SMA/SMK Sederajat</li><li>Memahami Kelistrikan (MT)</li><li>Memahami welding &amp; fabrication (MT)</li><li>Berkomitmen tinggi untuk mematuhi semua peraturan di Perusahaan</li><li>Berkomitmen untuk mengikuti Apprenticeship Program hingga tuntas selama 4 bulan</li></ul>', '2024-01-02', '<ul><li>Sehat Jasmani dan Rohani</li><li>Pendidikan minimal SMA/SMK Sederajat</li><li>Memahami Kelistrikan (MT)</li><li>Memahami welding &amp; fabrication (MT)</li><li>Berkomitmen tinggi untuk mematuhi semua peraturan di Perusahaan</li><li>Berkomitmen untuk mengikuti Apprenticeship Program hingga tuntas selama 4 bulan</li></ul>', '2023-12-06', '2023-12-13', '<p>PT Sumitomo Wiring Systems Batam Indonesia is a manufacturing company based on Batam, for more than 32 Years being successful and growth as the largest industry of wire harness. With SWS WAY as the main idea to improve every process in production, also light up the culture and implemented in every part of SBI.</p>', 0, '2023-12-01 10:16:49', '2023-12-07 08:43:56');

-- --------------------------------------------------------

--
-- Table structure for table `majors`
--

CREATE TABLE `majors` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `majors`
--

INSERT INTO `majors` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Teknik Informatika', '2023-03-17', '2023-03-17'),
(2, 'Teknik Mesin', '2023-03-17', '2023-03-17'),
(3, 'Teknik Elektronika Manufaktur', '2023-03-17', '2023-03-30'),
(6, 'Manajemen Bisnis Terapan', '2023-03-20', '2023-03-20'),
(8, 'Teknik Geomatika', '2023-03-30', '2023-03-30');

-- --------------------------------------------------------

--
-- Table structure for table `president_text`
--

CREATE TABLE `president_text` (
  `id` int(11) NOT NULL,
  `text` text NOT NULL,
  `photo` text NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `president_text`
--

INSERT INTO `president_text` (`id`, `text`, `photo`, `createdAt`, `updatedAt`) VALUES
(1, '<p>PT Sumitomo Corporation Group develops businesses in a wide range of industrial fields on a global scale aiming to achieve prosperity and realize dreams through sound business activities. Our corporate mission statement carries out Sumitomo’s business philosophy, represented by one of the credos; “Benefit for self and others, private and public interests are one and the same.”* Since our foundation in 1919, we have continued to grow through enhancing our ability to create new value together with stakeholders such as business partners and clients, across business networks around the world. * This credo underscores the importance that Sumitomo’s business activities should not only benefit Sumitomo, but must also benefit society as a whole in order to achieve sustainable growth together. Today, in line with our Medium-Term Management Plan “SHIFT 2023,” we are steadily implementing various measures to enhance sustainability management while working towards the realization of a sustainable society and an enhancement of corporate value. Through the reinforcement and expansion of businesses by leveraging our strengths, as well as the development of next-generation businesses from a medium- to long-term perspective, we will shift to a highly profitable and resilient business portfolio. We believe that our continuous commitment to create value needed by society, will lead to the Group’s sustainable growth. The world is facing some serious social issues such as climate change, which increases the expectations on the private sector toward solving these issues. We will accomplish our goal, as represented by the Group’s corporate message—“Enriching lives and the world”—to further enrich the world, society, and people’s lives. By living up to our principles, we will unite as one to take on the challenge of creating new value get.&nbsp;</p><p>&nbsp;</p>', 'photo-1678440790375-sachok.png', '2023-01-18', '2023-08-21');

-- --------------------------------------------------------

--
-- Table structure for table `profile_company`
--

CREATE TABLE `profile_company` (
  `id` int(11) NOT NULL,
  `text` text NOT NULL,
  `photo` text NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `profile_company`
--

INSERT INTO `profile_company` (`id`, `text`, `photo`, `createdAt`, `updatedAt`) VALUES
(17, '<p>Berpusat di Jakarta,<strong> PT Sumitomo Indonesia</strong> telah berkembang menjadi perusahaan bisnis yang terintegrasi dengan perekonomian Indonesia sejak tahun 1999. Fungsi inti dari aktivitas perdagangan kami adalah menangani beraneka ragam rangkaian produk dari berbagai sektor perdagangan melalui lima unit bisnis inti kami. PT Sumitomo Indonesia adalah salah satu dari perusahaan perdagangan terkemuka (dikenal dengan sebutan “Sogo Shosha”).&nbsp;</p><p>Kami merupakan bagian dari Sumitomo Corporation Group yang berpusat di Jepang, yang merupakan pemain kunci dalam pertukaran barang, jasa, dan teknologi kelas dunia dengan jaringan global yang terdiri dari anak-anak perusahaan di berbagai sektor. Oleh karena itu, PT Sumitomo Indonesia juga didukung oleh jaringan global Sumitomo Corporation Group, yang terdiri atas lebih dari 800 perusahaan dari 130 lokasi di 66 negara. * <i>Per 18 Januari 2023&nbsp;</i></p>', 'photo-1678440777765-img-1.jpg', '2023-01-18', '2023-08-21');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(15) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', '2022-09-21 00:00:00', '2022-09-21 00:00:00'),
(2, 'interviewer', '2022-09-21 00:00:00', '2022-09-21 00:00:00'),
(3, 'applicant', '2022-09-21 00:00:00', '2022-09-21 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `running_text`
--

CREATE TABLE `running_text` (
  `id` int(11) NOT NULL,
  `text` text NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `running_text`
--

INSERT INTO `running_text` (`id`, `text`, `createdAt`, `updatedAt`) VALUES
(1, 'Ada Lowongan Baru', '2023-01-12', '2023-12-01');

-- --------------------------------------------------------

--
-- Table structure for table `sections`
--

CREATE TABLE `sections` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sections`
--

INSERT INTO `sections` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(2, 'Training Center', '2023-01-02', '2023-01-02'),
(3, 'Information System', '2023-01-02', '2023-01-02'),
(4, 'Production Control', '2023-01-02', '2023-01-02'),
(6, 'Human Resources', '2023-01-04', '2023-01-04'),
(7, 'General Affairs', '2023-01-04', '2023-01-04'),
(8, 'Material Control', '2023-01-06', '2023-01-06'),
(9, 'Cutting and Crimping', '2023-01-12', '2023-01-12'),
(10, 'Production Engineering', '2023-01-12', '2023-01-12'),
(12, 'Assembly', '2023-01-26', '2023-11-28'),
(13, 'Finance and Accounting', '2023-03-15', '2023-03-15');

-- --------------------------------------------------------

--
-- Table structure for table `selections`
--

CREATE TABLE `selections` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `selections`
--

INSERT INTO `selections` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(295, 'Administrasi', '2023-02-15', '2023-02-15'),
(296, 'Tes Tahap 1', '2023-02-15', '2023-08-09'),
(298, 'Wawancara', '2023-02-15', '2023-08-09'),
(299, 'Medical ChekUp', '2023-02-15', '2023-02-15'),
(302, 'Induction', '2023-03-30', '2023-03-30');

-- --------------------------------------------------------

--
-- Table structure for table `skills`
--

CREATE TABLE `skills` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `skills`
--

INSERT INTO `skills` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Programmer', '2023-03-17', '2023-03-17'),
(2, 'Exel', '2023-03-17', '2023-03-17'),
(3, 'Editing', '2023-03-17', '2023-03-17');

-- --------------------------------------------------------

--
-- Table structure for table `sws`
--

CREATE TABLE `sws` (
  `id` int(11) NOT NULL,
  `photo` text NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sws`
--

INSERT INTO `sws` (`id`, `photo`, `createdAt`, `updatedAt`) VALUES
(1, 'photo-1678440804150-swsways.jpg', '2023-01-19', '2023-03-10');

-- --------------------------------------------------------

--
-- Table structure for table `universities`
--

CREATE TABLE `universities` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `universities`
--

INSERT INTO `universities` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Politeknik Negeri Batam', '2023-03-17', '2023-09-18'),
(2, 'Universitas Internasional Batam', '2023-03-17', '2023-03-17'),
(3, 'Universitas Maritim Raja Ali Haji', '2023-03-17', '2023-03-17'),
(5, 'Universitas Indonesia', '2023-03-20', '2023-03-20'),
(6, 'Universitas Ibnu Sina', '2023-03-24', '2023-03-24');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nik` varchar(20) NOT NULL,
  `name` varchar(130) NOT NULL,
  `email` varchar(130) NOT NULL,
  `password` varchar(255) NOT NULL,
  `verified` tinyint(1) NOT NULL DEFAULT 0,
  `roles_id` int(11) NOT NULL DEFAULT 3,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nik`, `name`, `email`, `password`, `verified`, `roles_id`, `createdAt`, `updatedAt`) VALUES
(290, '2314567890098765', 'ADMINISTRATOR', 'tisyaramadhani@sbi.sws.co.jp', '$2a$10$2F689wZvdvJeqdyneeQJy.qSPp1tOmi9vu6.j/Vx0nESegTL0NOVC', 1, 1, '2023-07-25 16:20:36', '2023-08-01 12:48:57'),
(305, '523119', 'interviewer', 'interviewer@gmail.com', '$2a$10$d0XB/G9g3ucbYoMyzw6UmuSseTuEKaZ4JfBY0fWVN/ftglpDtoxXy', 1, 2, '2023-08-25 10:28:42', '2023-12-08 08:10:12'),
(324, '1507010302920001', 'AHMADUN', 'sattuo-ahmadun@sws.com', '$2a$10$UXqAB.yC8/aWkyD8/mSx0.PvhQo4/Tp7keh24KrwHFKmec9vBOqG6', 1, 3, '2023-09-26 10:13:56', '2023-09-26 10:14:36'),
(337, '2102026810030003', 'Tisya Ramadhani', 'tisyarizkiramadhani28@gmail.com', '$2a$10$dJudEmLQat/os2tDzHuKZeLstTUBRn0uWenJ1intrBFEgkby.l/i6', 1, 3, '2023-10-11 11:01:22', '2023-10-18 10:47:40'),
(340, '2102026810030002', 'Thania Febyhola', 'thaniafebyhola14@gmail.com', '$2a$10$5x5a9XAFJwUNF6wDa4zqmO2ZQa/827OJSlD0F78wDf5wc4CW04vC2', 1, 3, '2023-10-18 07:48:51', '2023-10-18 07:49:35'),
(345, '123456', 'interviewer2', 'interviewer2@gmail.com', '$2a$10$zivDoxumSLNSWO/PtB4ZFOYhcwTgPx861Y0cwGtewz11AjslW7UmG', 1, 2, '2023-12-08 10:08:58', '2023-12-08 10:08:58'),
(346, '456789', 'interviewer3', 'interviewer3@gmail.com', '$2a$10$tBX9gcClavynqgghs5TbxejpSmIgBzCGHiu0NGqp/w8nvveJze1k2', 1, 2, '2023-12-08 10:09:27', '2023-12-08 10:09:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `applicants`
--
ALTER TABLE `applicants`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `applicants_1`
--
ALTER TABLE `applicants_1`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `applications`
--
ALTER TABLE `applications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `applications_1`
--
ALTER TABLE `applications_1`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `certifications`
--
ALTER TABLE `certifications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `interviewer`
--
ALTER TABLE `interviewer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `majors`
--
ALTER TABLE `majors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `president_text`
--
ALTER TABLE `president_text`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `profile_company`
--
ALTER TABLE `profile_company`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `running_text`
--
ALTER TABLE `running_text`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sections`
--
ALTER TABLE `sections`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `selections`
--
ALTER TABLE `selections`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sws`
--
ALTER TABLE `sws`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `universities`
--
ALTER TABLE `universities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `nik` (`nik`,`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `applicants`
--
ALTER TABLE `applicants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT for table `applicants_1`
--
ALTER TABLE `applicants_1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `applications`
--
ALTER TABLE `applications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=179;

--
-- AUTO_INCREMENT for table `applications_1`
--
ALTER TABLE `applications_1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=135;

--
-- AUTO_INCREMENT for table `certifications`
--
ALTER TABLE `certifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `documents`
--
ALTER TABLE `documents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=179;

--
-- AUTO_INCREMENT for table `interviewer`
--
ALTER TABLE `interviewer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `majors`
--
ALTER TABLE `majors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `president_text`
--
ALTER TABLE `president_text`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `profile_company`
--
ALTER TABLE `profile_company`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `running_text`
--
ALTER TABLE `running_text`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `sections`
--
ALTER TABLE `sections`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `selections`
--
ALTER TABLE `selections`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=305;

--
-- AUTO_INCREMENT for table `skills`
--
ALTER TABLE `skills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `sws`
--
ALTER TABLE `sws`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `universities`
--
ALTER TABLE `universities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=347;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
