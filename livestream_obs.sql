-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 05, 2023 at 06:08 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.0.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `livestream_obs`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `image` text NOT NULL,
  `name` text NOT NULL,
  `product_price` int(11) NOT NULL,
  `product_spesial_price` int(11) NOT NULL,
  `product_discount` int(11) NOT NULL,
  `is_highlight` int(11) NOT NULL,
  `is_active` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `image`, `name`, `product_price`, `product_spesial_price`, `product_discount`, `is_highlight`, `is_active`) VALUES
(3, 'https://c.alfagift.id/product/1/A12790003643_A12790003643_20200127163357667_small.jpg', 'minuman2', 5000, 4000, 20, 1, 1),
(5, 'https://c.alfagift.id/product/1/A12790003643_A12790003643_20200127163357667_small.jpg', 'minuman4', 5000, 4000, 20, 0, 1),
(6, 'https://c.alfagift.id/product/1/1_A7145990001037_20210821213759411_small.jpg', 'indomie', 2000, 2000, 0, 0, 1),
(7, 'https://c.alfagift.id/product/1/1_A7408030002168_20200618140614763_small.jpg', 'roti', 5000, 5000, 0, 0, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
