# Általános leírás
   A kifejlesztendő alkalmazás alkalmas egy képzeletbeli üzem erőforrásainak menedzselésére.
   A rendszer alapvető objektumai: munkások, gépek, munkák, feladatok.
   Egy munka több feladatból áll (legalább 1). Egy feladatot csak 1 gépen lehet elvégezni.
   A gépek alaptipusai pl: CNC marógép, CNC eszterga, mérőgép.
   Pl. Az M1 munka három feladatot tartalmaz: marás (a marógépen végezhető feladat), esztergálás (az esztergán végezhető), mérés (a mérőgépen végezhető).
   A munkák a munkásokhoz rendelhetőek, feltéve ha szabadok éppen.

## Felhasználási esetek
###	Munkások menedszelése
	   Munkások felvitele, listázása.
     Munkáshoz tartozó információ: név, szakképzettség, órabér, státusz (szabadságon, dolgozik, szabad).
	   A szabad munkásokhoz lehet munkákat rendelni.

###	Gépek menedzselése
	   Új gépek megadása/törlése

###	Munkák menedzselése
	   Új munka létrehozása. A munkához feladatok rendelése/törlése. A feladatokhoz gépek rendelése/törlése.

###	Listázási funkciók
	   Szabad munkások, gépek megjelenítése. Egy adott gép foglaltságának %-os kiadása.
