-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 05, 2018 at 03:42 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `alaunt`
--

-- --------------------------------------------------------

--
-- Table structure for table `accademy`
--

CREATE TABLE `accademy` (
  `level` int(3) NOT NULL,
  `timeToUpdate` varchar(15) NOT NULL,
  `woodCost` varchar(15) NOT NULL,
  `stoneCost` varchar(15) NOT NULL,
  `ironStone` varchar(15) NOT NULL,
  `oreCost` varchar(15) NOT NULL,
  `points` varchar(15) NOT NULL,
  `armySize` varchar(15) NOT NULL,
  `cArmySize` int(15) NOT NULL,
  `mainLevelToUpdate` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accademy`
--

INSERT INTO `accademy` (`level`, `timeToUpdate`, `woodCost`, `stoneCost`, `ironStone`, `oreCost`, `points`, `armySize`, `cArmySize`, `mainLevelToUpdate`) VALUES
(1, '600', '35000', '25000', '15000', '9500', '50', '75', 0, 2),
(2, '900', '55000', '35000', '25000', '18500', '125', '110', 75, 2),
(3, '1250', '85000', '85000', '35000', '25000', '150', '150', 110, 3),
(4, '1500', '95000', '95000', '55000', '50000', '250', '200', 150, 4),
(5, '2500', '150000', '150000', '75000', '75000', '500', '250', 200, 4);

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `id` int(10) NOT NULL,
  `username` varchar(16) NOT NULL,
  `password` varchar(150) NOT NULL,
  `email` varchar(50) NOT NULL,
  `food` varchar(12) NOT NULL,
  `wood` varchar(12) NOT NULL,
  `stone` varchar(12) NOT NULL,
  `iron` varchar(12) NOT NULL,
  `ore` varchar(12) NOT NULL,
  `mitril` varchar(12) NOT NULL,
  `please` varchar(12) NOT NULL,
  `worker` varchar(12) NOT NULL,
  `points` varchar(20) NOT NULL,
  `guildID` varchar(9) NOT NULL,
  `lastCheck` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`id`, `username`, `password`, `email`, `food`, `wood`, `stone`, `iron`, `ore`, `mitril`, `please`, `worker`, `points`, `guildID`, `lastCheck`) VALUES
(5, 'jeko', '61853d450cd28c6574a24f31d1ed30b029cf06dc', 'jeko@jeko.jeko', '210642.83372', '137680.75', '144180.75', '151180.75', '151180.75', '0', '0', '4', '250', '', 1522935670);

-- --------------------------------------------------------

--
-- Table structure for table `buildlevel`
--

CREATE TABLE `buildlevel` (
  `userID` int(9) NOT NULL,
  `bMain` varchar(3) NOT NULL,
  `bHome` varchar(3) NOT NULL,
  `bFood` varchar(3) NOT NULL,
  `bWood` varchar(3) NOT NULL,
  `bStone` varchar(3) NOT NULL,
  `bIron` varchar(3) NOT NULL,
  `bOre` varchar(3) NOT NULL,
  `bMitril` varchar(3) NOT NULL,
  `accademy` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `buildlevel`
--

INSERT INTO `buildlevel` (`userID`, `bMain`, `bHome`, `bFood`, `bWood`, `bStone`, `bIron`, `bOre`, `bMitril`, `accademy`) VALUES
(5, '2', '4', '3', '1', '1', '1', '2', '0', 0);

-- --------------------------------------------------------

--
-- Table structure for table `b_food`
--

CREATE TABLE `b_food` (
  `level` int(2) NOT NULL,
  `production` int(50) NOT NULL,
  `timeToUpdate` int(50) NOT NULL,
  `costWood` int(9) NOT NULL,
  `costStone` int(9) NOT NULL,
  `costIron` int(9) NOT NULL,
  `costOre` int(9) NOT NULL,
  `points` int(9) NOT NULL,
  `cProduction` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `b_food`
--

INSERT INTO `b_food` (`level`, `production`, `timeToUpdate`, `costWood`, `costStone`, `costIron`, `costOre`, `points`, `cProduction`) VALUES
(1, 15, 10, 150, 150, 0, 0, 5, 0),
(2, 15, 10, 150, 150, 0, 0, 5, 15),
(3, 17, 15, 300, 300, 0, 0, 7, 15),
(4, 25, 30, 500, 500, 0, 0, 15, 17),
(5, 32, 60, 980, 980, 0, 0, 22, 25),
(6, 38, 100, 1250, 1250, 0, 0, 50, 32),
(7, 50, 120, 3500, 3500, 0, 0, 74, 38),
(8, 75, 180, 7500, 7500, 0, 0, 100, 50);

-- --------------------------------------------------------

--
-- Table structure for table `b_home`
--

CREATE TABLE `b_home` (
  `level` int(2) NOT NULL,
  `people` int(10) NOT NULL,
  `timeToUpdate` int(50) NOT NULL,
  `costWood` int(9) NOT NULL,
  `costStone` int(9) NOT NULL,
  `costIron` int(9) NOT NULL,
  `costOre` int(9) NOT NULL,
  `points` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `b_home`
--

INSERT INTO `b_home` (`level`, `people`, `timeToUpdate`, `costWood`, `costStone`, `costIron`, `costOre`, `points`) VALUES
(1, 10, 10, 150, 150, 0, 0, 5),
(2, 15, 13, 450, 450, 0, 0, 7),
(3, 21, 17, 750, 750, 0, 0, 9),
(4, 27, 20, 1200, 1200, 0, 0, 12),
(5, 35, 25, 1500, 1500, 0, 0, 14),
(6, 48, 30, 1850, 1850, 0, 0, 17),
(7, 55, 35, 2500, 2500, 0, 0, 20),
(8, 70, 50, 3450, 3450, 0, 0, 24);

-- --------------------------------------------------------

--
-- Table structure for table `b_iron`
--

CREATE TABLE `b_iron` (
  `level` int(2) NOT NULL,
  `production` int(50) NOT NULL,
  `timeToUpdate` int(50) NOT NULL,
  `costWood` int(9) NOT NULL,
  `costStone` int(9) NOT NULL,
  `costIron` int(9) NOT NULL,
  `costOre` int(9) NOT NULL,
  `points` int(9) NOT NULL,
  `cProduction` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `b_iron`
--

INSERT INTO `b_iron` (`level`, `production`, `timeToUpdate`, `costWood`, `costStone`, `costIron`, `costOre`, `points`, `cProduction`) VALUES
(1, 15, 10, 150, 150, 50, 50, 5, '0'),
(2, 15, 10, 150, 150, 75, 75, 5, '15'),
(3, 17, 15, 300, 300, 120, 120, 7, '15'),
(4, 25, 30, 500, 500, 200, 200, 15, '17'),
(5, 32, 60, 980, 980, 250, 250, 22, '25'),
(6, 38, 100, 1250, 1250, 325, 325, 50, '32'),
(7, 50, 120, 3500, 3500, 400, 400, 74, '38'),
(8, 75, 180, 7500, 7500, 500, 500, 100, '50');

-- --------------------------------------------------------

--
-- Table structure for table `b_main`
--

CREATE TABLE `b_main` (
  `level` int(2) NOT NULL,
  `timeToUpdate` int(50) NOT NULL,
  `costWood` int(9) NOT NULL,
  `costStone` int(9) NOT NULL,
  `costIron` int(9) NOT NULL,
  `costOre` int(9) NOT NULL,
  `points` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `b_main`
--

INSERT INTO `b_main` (`level`, `timeToUpdate`, `costWood`, `costStone`, `costIron`, `costOre`, `points`) VALUES
(1, 60, 15000, 8500, 1500, 1500, 55),
(2, 180, 35000, 15000, 5000, 3000, 100),
(3, 400, 55000, 23000, 12500, 9500, 150),
(4, 800, 75000, 50000, 18500, 13600, 350),
(5, 1350, 95000, 80000, 35000, 24500, 750);

-- --------------------------------------------------------

--
-- Table structure for table `b_mitril`
--

CREATE TABLE `b_mitril` (
  `level` int(2) NOT NULL,
  `production` int(50) NOT NULL,
  `timeToUpdate` int(50) NOT NULL,
  `costWood` int(9) NOT NULL,
  `costStone` int(9) NOT NULL,
  `costIron` int(9) NOT NULL,
  `costOre` int(9) NOT NULL,
  `points` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `b_mitril`
--

INSERT INTO `b_mitril` (`level`, `production`, `timeToUpdate`, `costWood`, `costStone`, `costIron`, `costOre`, `points`) VALUES
(1, 3, 60, 15000, 15000, 2500, 2500, 75),
(2, 5, 90, 25000, 25000, 4500, 4500, 95),
(3, 7, 120, 40000, 40000, 7500, 7500, 125),
(4, 10, 180, 75000, 75000, 11000, 11000, 170),
(5, 13, 300, 100000, 100000, 15000, 15000, 220),
(6, 17, 380, 150000, 150000, 22000, 22000, 290);

-- --------------------------------------------------------

--
-- Table structure for table `b_ore`
--

CREATE TABLE `b_ore` (
  `level` int(2) NOT NULL,
  `production` int(50) NOT NULL,
  `timeToUpdate` int(50) NOT NULL,
  `costWood` int(9) NOT NULL,
  `costStone` int(9) NOT NULL,
  `costIron` int(9) NOT NULL,
  `costOre` int(9) NOT NULL,
  `points` int(9) NOT NULL,
  `cProduction` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `b_ore`
--

INSERT INTO `b_ore` (`level`, `production`, `timeToUpdate`, `costWood`, `costStone`, `costIron`, `costOre`, `points`, `cProduction`) VALUES
(1, 15, 10, 150, 150, 50, 50, 5, '0'),
(2, 15, 10, 150, 150, 75, 75, 5, '15'),
(3, 17, 15, 300, 300, 120, 120, 7, '15'),
(4, 25, 30, 500, 500, 200, 200, 15, '17'),
(5, 32, 60, 980, 980, 250, 250, 22, '25'),
(6, 38, 100, 1250, 1250, 325, 325, 50, '32'),
(7, 50, 120, 3500, 3500, 400, 400, 74, '38'),
(8, 75, 180, 7500, 7500, 500, 500, 100, '50');

-- --------------------------------------------------------

--
-- Table structure for table `b_stone`
--

CREATE TABLE `b_stone` (
  `level` int(2) NOT NULL,
  `production` int(50) NOT NULL,
  `timeToUpdate` int(50) NOT NULL,
  `costWood` int(9) NOT NULL,
  `costStone` int(9) NOT NULL,
  `costIron` int(9) NOT NULL,
  `costOre` int(9) NOT NULL,
  `points` int(9) NOT NULL,
  `cProduction` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `b_stone`
--

INSERT INTO `b_stone` (`level`, `production`, `timeToUpdate`, `costWood`, `costStone`, `costIron`, `costOre`, `points`, `cProduction`) VALUES
(1, 15, 10, 150, 150, 0, 0, 5, '0'),
(2, 15, 10, 150, 150, 0, 0, 5, '15'),
(3, 17, 15, 300, 300, 0, 0, 7, '15'),
(4, 25, 30, 500, 500, 0, 0, 15, '17'),
(5, 32, 60, 980, 980, 0, 0, 22, '25'),
(6, 38, 100, 1250, 1250, 0, 0, 50, '32'),
(7, 50, 120, 3500, 3500, 0, 0, 74, '38'),
(8, 75, 180, 7500, 7500, 0, 0, 100, '50');

-- --------------------------------------------------------

--
-- Table structure for table `b_wood`
--

CREATE TABLE `b_wood` (
  `level` int(2) NOT NULL,
  `production` int(50) NOT NULL,
  `timeToUpdate` int(50) NOT NULL,
  `costWood` int(9) NOT NULL,
  `costStone` int(9) NOT NULL,
  `costIron` int(9) NOT NULL,
  `costOre` int(9) NOT NULL,
  `points` int(9) NOT NULL,
  `cProduction` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `b_wood`
--

INSERT INTO `b_wood` (`level`, `production`, `timeToUpdate`, `costWood`, `costStone`, `costIron`, `costOre`, `points`, `cProduction`) VALUES
(1, 15, 10, 150, 150, 0, 0, 5, 0),
(2, 15, 10, 150, 150, 0, 0, 5, 15),
(3, 17, 15, 300, 300, 0, 0, 7, 15),
(4, 25, 30, 500, 500, 0, 0, 15, 17),
(5, 32, 60, 980, 980, 0, 0, 22, 25),
(6, 38, 100, 1250, 1250, 0, 0, 50, 32),
(7, 50, 120, 3500, 3500, 0, 0, 74, 38),
(8, 75, 180, 7500, 7500, 0, 0, 100, 50);

-- --------------------------------------------------------

--
-- Table structure for table `const`
--

CREATE TABLE `const` (
  `userID` int(9) NOT NULL,
  `navbarRefresh` int(3) NOT NULL,
  `pageAfterLogin` varchar(20) NOT NULL,
  `theme` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `const`
--

INSERT INTO `const` (`userID`, `navbarRefresh`, `pageAfterLogin`, `theme`) VALUES
(4, 30, 'building', 'default'),
(5, 30, 'home', 'default');

-- --------------------------------------------------------

--
-- Table structure for table `updating`
--

CREATE TABLE `updating` (
  `userID` varchar(9) NOT NULL,
  `name` varchar(15) NOT NULL,
  `tstart` varchar(50) NOT NULL,
  `tend` varchar(50) NOT NULL,
  `nworkers` varchar(5) NOT NULL,
  `points` varchar(15) NOT NULL,
  `newlevel` varchar(3) NOT NULL,
  `ttotal` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `updating`
--

INSERT INTO `updating` (`userID`, `name`, `tstart`, `tend`, `nworkers`, `points`, `newlevel`, `ttotal`) VALUES
('5', '', '0', '0', '0', '0', '0', '0');

-- --------------------------------------------------------

--
-- Table structure for table `workers`
--

CREATE TABLE `workers` (
  `userID` int(15) NOT NULL,
  `b_home` varchar(15) NOT NULL,
  `b_food` varchar(15) NOT NULL,
  `b_wood` varchar(15) NOT NULL,
  `b_stone` varchar(15) NOT NULL,
  `b_ore` varchar(15) NOT NULL,
  `b_iron` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `workers`
--

INSERT INTO `workers` (`userID`, `b_home`, `b_food`, `b_wood`, `b_stone`, `b_ore`, `b_iron`) VALUES
(5, '0', '15', '3', '4', '5', '6');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accademy`
--
ALTER TABLE `accademy`
  ADD PRIMARY KEY (`level`);

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `buildlevel`
--
ALTER TABLE `buildlevel`
  ADD PRIMARY KEY (`userID`);

--
-- Indexes for table `b_food`
--
ALTER TABLE `b_food`
  ADD PRIMARY KEY (`level`);

--
-- Indexes for table `b_home`
--
ALTER TABLE `b_home`
  ADD PRIMARY KEY (`level`);

--
-- Indexes for table `b_iron`
--
ALTER TABLE `b_iron`
  ADD PRIMARY KEY (`level`);

--
-- Indexes for table `b_main`
--
ALTER TABLE `b_main`
  ADD PRIMARY KEY (`level`);

--
-- Indexes for table `b_mitril`
--
ALTER TABLE `b_mitril`
  ADD PRIMARY KEY (`level`);

--
-- Indexes for table `b_ore`
--
ALTER TABLE `b_ore`
  ADD PRIMARY KEY (`level`);

--
-- Indexes for table `b_stone`
--
ALTER TABLE `b_stone`
  ADD PRIMARY KEY (`level`);

--
-- Indexes for table `b_wood`
--
ALTER TABLE `b_wood`
  ADD PRIMARY KEY (`level`);

--
-- Indexes for table `const`
--
ALTER TABLE `const`
  ADD PRIMARY KEY (`userID`);

--
-- Indexes for table `updating`
--
ALTER TABLE `updating`
  ADD PRIMARY KEY (`userID`);

--
-- Indexes for table `workers`
--
ALTER TABLE `workers`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
