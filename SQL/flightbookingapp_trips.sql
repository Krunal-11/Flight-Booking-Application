-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: flightbookingapp
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `trips`
--

DROP TABLE IF EXISTS `trips`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trips` (
  `trip_id` int NOT NULL AUTO_INCREMENT,
  `airplane_id` int DEFAULT NULL,
  `departure_loc_id` int DEFAULT NULL,
  `arrival_loc_id` int DEFAULT NULL,
  `number_of_seats_filled` int DEFAULT '0',
  `number_of_empty_seats` int DEFAULT NULL,
  `departure_time` datetime DEFAULT NULL,
  `arrival_time` datetime DEFAULT NULL,
  `trip_date` date DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `flight_status` enum('scheduled','cancelled','delayed','completed') DEFAULT 'scheduled',
  `delay_hours` int DEFAULT '0',
  `trip_duration` int DEFAULT NULL,
  PRIMARY KEY (`trip_id`),
  KEY `airplane_id` (`airplane_id`),
  KEY `departure_loc_id` (`departure_loc_id`),
  KEY `arrival_loc_id` (`arrival_loc_id`),
  CONSTRAINT `trips_ibfk_1` FOREIGN KEY (`airplane_id`) REFERENCES `airplanes` (`airplane_id`),
  CONSTRAINT `trips_ibfk_2` FOREIGN KEY (`departure_loc_id`) REFERENCES `locations` (`loc_id`),
  CONSTRAINT `trips_ibfk_3` FOREIGN KEY (`arrival_loc_id`) REFERENCES `locations` (`loc_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trips`
--

LOCK TABLES `trips` WRITE;
/*!40000 ALTER TABLE `trips` DISABLE KEYS */;
INSERT INTO `trips` VALUES (1,1,1,2,0,180,'2024-09-25 10:00:00','2024-09-25 12:00:00','2024-09-25',5000.00,'scheduled',0,120),(2,2,2,3,0,180,'2024-09-25 13:00:00','2024-09-25 15:00:00','2024-09-25',4800.00,'scheduled',0,120),(3,3,3,4,0,440,'2024-09-25 09:30:00','2024-09-25 12:00:00','2024-09-25',7000.00,'scheduled',0,150),(4,4,4,5,0,300,'2024-09-26 08:00:00','2024-09-26 11:00:00','2024-09-26',6000.00,'scheduled',0,180),(5,5,5,6,0,240,'2024-09-26 15:00:00','2024-09-26 18:00:00','2024-09-26',6200.00,'scheduled',0,180),(6,6,6,7,0,300,'2024-09-27 14:00:00','2024-09-27 17:00:00','2024-09-27',5900.00,'scheduled',0,180),(7,7,7,8,0,180,'2024-09-27 10:30:00','2024-09-27 12:30:00','2024-09-27',4500.00,'scheduled',0,120),(8,8,8,9,0,220,'2024-09-28 11:00:00','2024-09-28 13:00:00','2024-09-28',4700.00,'scheduled',0,120),(9,9,9,10,0,200,'2024-09-28 15:00:00','2024-09-28 16:30:00','2024-09-28',3900.00,'scheduled',0,90),(10,10,10,11,0,180,'2024-09-29 07:00:00','2024-09-29 09:00:00','2024-09-29',5200.00,'scheduled',0,120),(11,11,11,12,0,300,'2024-09-29 13:30:00','2024-09-29 15:30:00','2024-09-29',6500.00,'scheduled',0,120),(12,12,12,13,0,240,'2024-09-30 10:00:00','2024-09-30 11:30:00','2024-09-30',5800.00,'scheduled',0,90),(13,13,13,14,0,70,'2024-09-30 16:00:00','2024-09-30 18:00:00','2024-09-30',3600.00,'scheduled',0,120),(14,14,14,15,0,78,'2024-10-01 08:30:00','2024-10-01 09:30:00','2024-10-01',3100.00,'scheduled',0,60),(15,15,15,16,0,120,'2024-10-01 14:30:00','2024-10-01 16:00:00','2024-10-01',3800.00,'scheduled',0,90),(16,16,16,17,0,100,'2024-10-02 12:00:00','2024-10-02 13:30:00','2024-10-02',4500.00,'scheduled',0,90),(17,17,17,18,0,150,'2024-10-02 09:00:00','2024-10-02 10:30:00','2024-10-02',4200.00,'scheduled',0,90),(18,18,18,19,0,216,'2024-10-03 11:00:00','2024-10-03 12:30:00','2024-10-03',3900.00,'scheduled',0,90),(19,19,19,20,0,280,'2024-10-03 14:00:00','2024-10-03 16:00:00','2024-10-03',4400.00,'scheduled',0,120),(20,20,20,1,0,130,'2024-10-04 08:30:00','2024-10-04 10:00:00','2024-10-04',5000.00,'scheduled',0,90),(21,1,2,3,0,180,'2024-10-04 15:00:00','2024-10-04 17:00:00','2024-10-04',4800.00,'scheduled',0,120),(22,2,3,4,0,220,'2024-10-05 09:30:00','2024-10-05 11:00:00','2024-10-05',4700.00,'scheduled',0,90),(23,3,4,5,0,300,'2024-10-05 16:00:00','2024-10-05 19:00:00','2024-10-05',6200.00,'scheduled',0,180),(24,4,5,6,0,240,'2024-10-06 10:00:00','2024-10-06 12:30:00','2024-10-06',5900.00,'scheduled',0,150),(25,5,6,7,0,300,'2024-10-06 15:30:00','2024-10-06 18:00:00','2024-10-06',6200.00,'scheduled',0,180);
/*!40000 ALTER TABLE `trips` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-21 12:39:35
