USE master
GO

DROP DATABASE IF Exists PXLDigital_PRW_WPL
CREATE DATABASE PXLDigital_PRW_WPL

USE PXLDigital_PRW_WPL
GO


CREATE TABLE Products(
    ProductID int NOT NULL PRIMARY KEY,
    ProductName nvarchar(100),
	ProductPrice decimal,
    ProductDescription nvarchar(100),
	ProductBrand nvarchar(100)
);

INSERT INTO Products VALUES (1, '150 mm Apochromatische Refractor', 5500, 'Prachtige kijker met superieure lensoptiek', 'Skywatcher')
INSERT INTO Products VALUES (2, '100 mm Apochromatische Refractor', 2500, 'Prachtige kijker met superieure lensoptiek', 'Skywatcher')
INSERT INTO Products VALUES (3, '80 mm Apochromatische Refractor', 1600, 'Prachtige kijker met superieure lensoptiek', 'Skywatcher')
INSERT INTO Products VALUES (4, 'EdgeHD 8', 2500, 'Verslinder van kleine objecten', 'Celestron')
INSERT INTO Products VALUES (5, '10 inch ONTC', 2800, 'Quartz spiegel mete carbon fiber tube', 'TS Optics')
INSERT INTO Products VALUES (6, '60 mm fluorite Doublet', 1100, 'Kleine pocketrocket', 'Vixen')


