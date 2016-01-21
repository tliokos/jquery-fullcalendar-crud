--
-- Database: `calendar`
--
CREATE DATABASE IF NOT EXISTS `calendar` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `calendar`;

-- --------------------------------------------------------

--
-- Table structure for table `events`
--
CREATE TABLE IF NOT EXISTS `events` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `color` varchar(7) NOT NULL DEFAULT '#3a87ad',
  `allDay` tinyint(1) NOT NULL,
  `start` datetime NOT NULL,
  `end` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;
