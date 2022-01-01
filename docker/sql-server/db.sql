USE master
GO
	CREATE DATABASE PXLDigital_PRWA_WPL2_DB
GO
	USE PXLDigital_PRWA_WPL2_DB CREATE TABLE Products (
		ProductID int identity(1, 1) not null,
		ProductName nvarchar(250),
		ProductPrice decimal,
		ProductDescription text,
		ProductBrand nvarchar(100),
		ProductCategory nvarchar(100),
		ProductType nvarchar(100),
		ProductStock int,
		ProductAmountSold int,
		ProductFocalLength decimal,
		ProductPriceSold decimal,
		ProductResolution decimal,
		ProductAperture decimal,
		ProductWeight decimal,
		ProductDifficulty nvarchar(100),
		ProductDateLastSale DATE,
		ProductDateFirstStockage DATE
	)
INSERT INTO
	Products (
		ProductName,
		ProductPrice,
		ProductDescription,
		ProductBrand,
		ProductCategory,
		ProductType,
		ProductStock,
		ProductAmountSold,
		ProductFocalLength,
		ProductPriceSold,
		ProductResolution,
		ProductAperture,
		ProductWeight,
		ProductDifficulty,
		ProductDateLastSale,
		ProductDateFirstStockage
	)
VALUES
	(
		'Meade Apochromatische refractor AP 70/350 Series 6000 Astrograph OTA',
		1990,
		'De apochromatische refractoren van de serie 6000 behoren tot de best geproduceerde lenticulaire telescopen op de markt. Elke refractor wordt individueel vervaardigd en getest om er zeker van te zijn dat hij aan de hoogste optische en mechanische normen voldoet. Voor het objectief is gebruik gemaakt van glas van de hoogste kwaliteit en een extreem lage dispersie. Zo worden vrijwel alle kleurfouten die typerend zijn voor lenstelescopen geëlimineerd en een hoog contrast en scherpte bereikt.',
		'Meade',
		'Teleskoop',
		'Refractor',
		5,
		10,
		350,
		0.24,
		1400,
		70,
		15,
		'Beginner',
		'2012-04-12',
		'2012-04-12'
	)
INSERT INTO
	Products (
		ProductName,
		ProductPrice,
		ProductDescription,
		ProductBrand,
		ProductCategory,
		ProductType,
		ProductStock,
		ProductAmountSold,
		ProductFocalLength,
		ProductPriceSold,
		ProductResolution,
		ProductAperture,
		ProductWeight,
		ProductDifficulty,
		ProductDateLastSale,
		ProductDateFirstStockage
	)
VALUES
	(
		'Apochromatische refractor AP 90/350 FL PLUS OTA',
		4287,
		'This wonderful apochromatic refractor with fluorite optics offers an incredible f3.9 focal ratio and it has a very large 55mm flat field to allow the use of cameras also equipped with very large sensors, even larger than Full Frame. The carbon tube makes the Borg fluorite 90FL f3.9 PLUS the more compact and lightweight 90mm apochromatic refractor on the market, very easy to transport!',
		'BORG',
		'Teleskoop',
		'Refractor',
		5,
		10,
		450,
		0.64,
		1300,
		50,
		14,
		'Beginner',
		'2013-05-11',
		'2012-04-12'
	)
INSERT INTO
	Products (
		ProductName,
		ProductPrice,
		ProductDescription,
		ProductBrand,
		ProductCategory,
		ProductType,
		ProductStock,
		ProductAmountSold,
		ProductFocalLength,
		ProductPriceSold,
		ProductResolution,
		ProductAperture,
		ProductWeight,
		ProductDifficulty,
		ProductDateLastSale,
		ProductDateFirstStockage
	)
VALUES
	(
		' Apochromatic refractor AP 130/900 Lanthanum OTA',
		2499,
		'Lanthanum is extra dispersief glas geoptimaliseerd voor de best glaskwaliteit.',
		'Technosky',
		'Teleskoop',
		'Refractor',
		6,
		20,
		450,
		1.24,
		2400,
		50,
		25,
		'Advanced',
		'2016-04-12',
		'2017-04-12'
	)
INSERT INTO
	Products (
		ProductName,
		ProductPrice,
		ProductDescription,
		ProductBrand,
		ProductCategory,
		ProductType,
		ProductStock,
		ProductAmountSold,
		ProductFocalLength,
		ProductPriceSold,
		ProductResolution,
		ProductAperture,
		ProductWeight,
		ProductDifficulty,
		ProductDateLastSale,
		ProductDateFirstStockage
	)
VALUES
	(
		'TS-Optics 130 mm f/2.8 Hyperbolic Astrograph with Corrector and Carbon Tube',
		2429.15,
		'With the 1302.8HNT Hypergraph 130, Sharpstar has created a telescope for mobile astrophotography. With a tube length of less than 40 centimeters, the "small" Hypergraph even fits into airline luggage. On the sky, however, the performance is remarkable. The fast focal ratio of f/2.8 allows you to properly expose an object in just one night, or even focus on multiple objects.

The 2-element corrector offers very good field correction with full illumination beyond APS-C format. With a flat, you can even use full-frame cameras.

The working distance of 55 mm from the M48 thread on the focuser allows easy adaption from all common astro cameras, DSLR and also system cameras.',
		'TS-Optics',
		'Teleskoop',
		'Refractor',
		5,
		10,
		159,
		0.64,
		3500,
		79,
		25,
		'Beginner',
		'2012-04-12',
		'2012-04-12'
	)
INSERT INTO
	Products (
		ProductName,
		ProductPrice,
		ProductDescription,
		ProductBrand,
		ProductCategory,
		ProductType,
		ProductStock,
		ProductAmountSold,
		ProductFocalLength,
		ProductPriceSold,
		ProductResolution,
		ProductAperture,
		ProductWeight,
		ProductDifficulty,
		ProductDateLastSale,
		ProductDateFirstStockage
	)
VALUES
	(
		'Askar 180 mm f/4.5 APO Telephoto Lens ',
		457,
		'Askar FMA180 Astrograph and Triplet Apo
The FMA180 from Askar is an almost pure color triplet APO refractor with two special ED glasses for excellent correction. The high-quality optics produce a very (though not perfectly) pure colour and high-contrast image and meet high demands in astrophotography and observation.

With the special F4.5 full-frame corrector, the ASKAR FMA180 with 40 mm aperture and 220 mm (f/4.5) focal length becomes a professional APO telephoto lens with 180 mm focal length for both landscape and astrophotography. The internal blackening and the elaborate multi-coating ensure high-contrast and brilliant images without reflections even under difficult lighting conditions. The use of 2" nebula filters is also possible,',
		'Askar',
		'Teleskoop',
		'Refractor',
		5,
		10,
		350,
		0.24,
		1400,
		70,
		15,
		'Beginner',
		'2012-04-12',
		'2012-04-12'
	)
INSERT INTO
	Products (
		ProductName,
		ProductPrice,
		ProductDescription,
		ProductBrand,
		ProductCategory,
		ProductType,
		ProductStock,
		ProductAmountSold,
		ProductFocalLength,
		ProductPriceSold,
		ProductResolution,
		ProductAperture,
		ProductWeight,
		ProductDifficulty,
		ProductDateLastSale,
		ProductDateFirstStockage
	)
VALUES
	(
		'ZWO Color Astro Camera ASI 2600MC-PRO',
		2235.25,
		'ZWO ASI2600MC Pro - powerful color astro camera of the latest generation
ZWO has taken another step forward with this new camera. The colour sensor in APS-C format convinces with its extremely high sensitivity and 16-bit data depth. Even with longer exposure times, the stars will not burn out. You get a much better dynamic.

One of the outstanding features of the ASI 2600MC Pro is its sensational light sensitivity. The QE of 80% by the BACK ILLUMINATION technology and the non-existent amplifier glow make the camera very suitable for all astronomical applications, but especially for deep sky astrophotography.

The "single shot" colour camera offers more comfort than monochrome cameras. Not everyone wants to go through the laborious L-RGB process for beautiful coloured nebula or planet images. The color cameras offer you the possibility to get beautiful pictures without changing filters. In direct comparison to the DSLR camera, the ASI camera convinces with a much higher light sensitivity, a smoother image and significantly more depth. Stars don´t burn out that easy.',
		'ZWO',
		'Camera',
		'Color',
		5,
		10,
		350,
		0.24,
		1400,
		70,
		15,
		'Beginner',
		'2012-04-12',
		'2012-04-12'
	)
INSERT INTO
	Products (
		ProductName,
		ProductPrice,
		ProductDescription,
		ProductBrand,
		ProductCategory,
		ProductType,
		ProductStock,
		ProductAmountSold,
		ProductFocalLength,
		ProductPriceSold,
		ProductResolution,
		ProductAperture,
		ProductWeight,
		ProductDifficulty,
		ProductDateLastSale,
		ProductDateFirstStockage
	)
VALUES
	(
		'Omegon Apochromatische refractor Pro APO AP 121/678 Quintuplet OTA',
		4533,
		'De apochromatische refractoren van de serie 6000 behoren tot de best geproduceerde lenticulaire telescopen op de markt. Elke refractor wordt individueel vervaardigd en getest om er zeker van te zijn dat hij aan de hoogste optische en mechanische normen voldoet. Voor het objectief is gebruik gemaakt van glas van de hoogste kwaliteit en een extreem lage dispersie. Zo worden vrijwel alle kleurfouten die typerend zijn voor lenstelescopen geëlimineerd en een hoog contrast en scherpte bereikt.',
		'Meade',
		'Teleskoop',
		'Refractor',
		5,
		10,
		350,
		0.24,
		1400,
		70,
		15,
		'Beginner',
		'2012-04-12',
		'2012-04-12'
	)
INSERT INTO
	Products (
		ProductName,
		ProductPrice,
		ProductDescription,
		ProductBrand,
		ProductCategory,
		ProductType,
		ProductStock,
		ProductAmountSold,
		ProductFocalLength,
		ProductPriceSold,
		ProductResolution,
		ProductAperture,
		ProductWeight,
		ProductDifficulty,
		ProductDateLastSale,
		ProductDateFirstStockage
	)
VALUES
	(
		'APM Apochromatische refractor AP 130/1200 LZOS 3.5FT OTA',
		6490,
		'Superieure 130 milimeter refractor van APM met LZOS optics',
		'APM',
		'Teleskoop',
		'Refractor',
		5,
		10,
		350,
		0.24,
		1400,
		70,
		15,
		'Beginner',
		'2012-04-12',
		'2012-04-12'
	)
INSERT INTO
	Products (
		ProductName,
		ProductPrice,
		ProductDescription,
		ProductBrand,
		ProductCategory,
		ProductType,
		ProductStock,
		ProductAmountSold,
		ProductFocalLength,
		ProductPriceSold,
		ProductResolution,
		ProductAperture,
		ProductWeight,
		ProductDifficulty,
		ProductDateLastSale,
		ProductDateFirstStockage
	)
VALUES
	(
		'Skywatcher Apochromatische refractor AP 150/1050 ESPRIT-150ED Professional OTA',
		5915.00,
		'De apochromatische refractoren van de serie 6000 behoren tot de best geproduceerde lenticulaire telescopen op de markt. Elke refractor wordt individueel vervaardigd en getest om er zeker van te zijn dat hij aan de hoogste optische en mechanische normen voldoet. Voor het objectief is gebruik gemaakt van glas van de hoogste kwaliteit en een extreem lage dispersie. Zo worden vrijwel alle kleurfouten die typerend zijn voor lenstelescopen geëlimineerd en een hoog contrast en scherpte bereikt.',
		'Skywatcher',
		'Teleskoop',
		'Refractor',
		5,
		10,
		350,
		0.24,
		1400,
		70,
		15,
		'Beginner',
		'2012-04-12',
		'2012-04-12'
	)
INSERT INTO
	Products (
		ProductName,
		ProductPrice,
		ProductDescription,
		ProductBrand,
		ProductCategory,
		ProductType,
		ProductStock,
		ProductAmountSold,
		ProductFocalLength,
		ProductPriceSold,
		ProductResolution,
		ProductAperture,
		ProductWeight,
		ProductDifficulty,
		ProductDateLastSale,
		ProductDateFirstStockage
	)
VALUES
	(
		'Explore Scientific Apochromatische refractor AP 165/1155 FPL-53 CF Feather Touch 3.0"',
		9990.00,
		'De voordelen van de carbon tubus: hij is zeer licht en op die manier ook perfect geschikt voor kleinere monteringen. Bovendien biedt carbon van nature een zeer goede stabiliteit, en is het slechts minimaal aan temperatuurschommelingen onderhevig. Voor astrofotografen zijn deze voordelen van bijzonder groot belang: de focus blijft gedurende de hele nacht stabiel.',
		'Explore Scientific',
		'Teleskoop',
		'Refractor',
		5,
		10,
		350,
		0.24,
		1400,
		70,
		15,
		'Beginner',
		'2012-04-12',
		'2012-04-12'
	) CREATE TABLE Gebruikers (
		UserID int identity(1, 1) not null,
		Email nvarchar(250),
		FirstName nvarchar(150),
		LastName nvarchar(150),
		PasswoordHash nvarchar(100),
		PasswoordSalt nvarchar(100)
	)
INSERT INTO
	Gebruikers (
		Email,
		FirstName,
		LastName,
		PasswoordHash,
		PasswoordSalt
	)
VALUES
	(
		'admin',
		'Wouter',
		'Vangeel',
		'ctKkmklm0np0eEDEb++B1sQ7s9E=',
		'yr9pE4iaDi4JmcLwsP0='
	)