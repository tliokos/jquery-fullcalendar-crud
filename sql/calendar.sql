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
  `start_date` datetime NOT NULL,
  `end_date` datetime NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `title`, `description`, `color`, `start_date`, `end_date`) VALUES
(1, 'Event 1', 'This is events description', '#f00877', '2016-01-05 02:44:00', null),
(2, 'Event 2', 'This is events description', '#08aaf0', '2016-01-08 02:44:00', '2016-01-08 03:44:00'),
(3, 'Event 3', 'This is events description', '#08f049', '2016-01-22 02:45:00', '2016-01-22 04:45:00');