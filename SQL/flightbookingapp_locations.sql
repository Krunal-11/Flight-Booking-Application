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
-- Table structure for table `locations`
--

DROP TABLE IF EXISTS `locations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `locations` (
  `loc_id` int NOT NULL AUTO_INCREMENT,
  `airport_name` varchar(100) DEFAULT NULL,
  `city_name` varchar(100) DEFAULT NULL,
  `iata_code` char(3) DEFAULT NULL,
  PRIMARY KEY (`loc_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locations`
--

LOCK TABLES `locations` WRITE;
/*!40000 ALTER TABLE `locations` DISABLE KEYS */;
INSERT INTO `locations` VALUES (1,'Indira Gandhi International Airport','Delhi','DEL'),(2,'Chhatrapati Shivaji Maharaj International Airport','Mumbai','BOM'),(3,'Kempegowda International Airport','Bengaluru','BLR'),(4,'Chennai International Airport','Chennai','MAA'),(5,'Netaji Subhas Chandra Bose International Airport','Kolkata','CCU'),(6,'Rajiv Gandhi International Airport','Hyderabad','HYD'),(7,'Sardar Vallabhbhai Patel International Airport','Ahmedabad','AMD'),(8,'Pune International Airport','Pune','PNQ'),(9,'Jaipur International Airport','Jaipur','JAI'),(10,'Goa International Airport (Dabolim)','Goa','GOI'),(11,'Cochin International Airport','Cochin','COK'),(12,'Chaudhary Charan Singh International Airport','Lucknow','LKO'),(13,'Trivandrum International Airport','Trivandrum','TRV'),(14,'Mangalore International Airport','Mangaluru','IXE'),(15,'Chandigarh Airport','Chandigarh','IXC'),(16,'Visakhapatnam Airport','Visakhapatnam','VTZ'),(17,'Lokpriya Gopinath Bordoloi International Airport','Patna','PAT'),(18,'Devi Ahilya Bai Holkar Airport','Indore','IDR'),(19,'Surat Airport','Surat','STV'),(20,'Vadodara Airport','Vadodara','BDQ'),(21,'Raja Bhoj International Airport','Bhopal','BHO'),(22,'Swami Vivekananda Airport','Raipur','RPR'),(23,'Biju Patnaik International Airport','Bhubaneswar','BBI'),(24,'Jolly Grant Airport','Dehradun','DED'),(25,'Sri Guru Ram Dass Jee International Airport','Amritsar','ATQ');
/*!40000 ALTER TABLE `locations` ENABLE KEYS */;
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
