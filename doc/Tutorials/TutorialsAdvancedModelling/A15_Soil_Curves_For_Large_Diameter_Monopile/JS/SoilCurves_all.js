Soil1 = Clay(false,1,2180,0.01,5650,0 m,52080,-17.5 m);
Soil1.apiJFactor = 0.4;
Soil2 = Clay(false,1,1650,0.01,146800,-17.5,210800,-35);
Soil2.apiJFactor = 0.4;
SoilData1 = SoilData(-1,0.5,0,0,0.01,0 Pa,0.05);
SoilCurves1 = SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves1.addManualPY(8.75,Array(0,3.9e-2,7.79e-2,1.56e-1,3.12e-1,6.23e-1,1.25,2.49,4.99,9.97),Array(0,1.43e4,1.81e4,2.13e4,2.37e4,2.53e4,2.62e4,2.67e4,2.69e4,2.7e4));
SoilCurves1.addManualMomTheta(8.75,Array(0,1.07e-1,8.59e-1),Array(0,2.52e5,2.62e5));
SoilCurves40=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves40.addManualPY(8.75,Array(0,0.0046,0.0092,0.0184,0.0368,0.0736,0.147,0.294,0.589,1.18),Array(0,368000,545000,760000,1000000,1240000,1450000,1600000,1690000,1720000));
SoilCurves40.addManualMomTheta(8.75,Array(0,0.00311,0.0249),Array(0,1550000,1560000));
SoilCurves40.addManualBaseShear(8.75,Array(0,0.00447,0.00894,0.0179,0.0358,0.0715,0.143,0.286,0.572,1.14),Array(0,4590000,5870000,7030000,7930000,8530000,8900000,9090000,9190000,9210000));
SoilCurves40.addManualBaseMoment(8.75,Array(0,0.0215,0.043,0.0859,0.172,0.344,0.688,1.38,2.75,5.5),Array(0,13100000,20700000,30200000,40300000,49500000,56500000,61100000,63600000,64300000));

SoilCurves2=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves2.addManualMomTheta(8.75,Array(0,0.0479,0.383),Array(0,334000,344000));
SoilCurves2.addManualPY(8.75,Array(0,0.0174,0.0348,0.0696,0.139,0.279,0.557,1.11,2.23,4.46),Array(0,20000,25500,30300,34000,36400,37800,38500,38900,39000));
SoilCurves3=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves3.addManualMomTheta(8.75,Array(0,0.036,0.288),Array(0,414000,424000));
SoilCurves3.addManualPY(8.75,Array(0,0.0131,0.0262,0.0524,0.105,0.21,0.419,0.839,1.68,3.35),Array(0,25900,33300,39900,45000,48400,50400,51400,51900,52100));
SoilCurves4=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves4.addManualMomTheta(8.75,Array(0,0.0308,0.247),Array(0,492000,502000));
SoilCurves4.addManualPY(8.75,Array(0,0.0113,0.0225,0.045,0.0901,0.18,0.36,0.721,1.44,2.88),Array(0,32000,41500,50000,56700,61200,63900,65300,66000,66200));
SoilCurves5=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves5.addManualMomTheta(8.75,Array(0,0.0279,0.224),Array(0,568000,578000));
SoilCurves5.addManualPY(8.75,Array(0,0.0102,0.0205,0.0409,0.0819,0.164,0.327,0.655,1.31,2.62),Array(0,38300,49900,60600,69000,74700,78200,80100,81000,81200));
SoilCurves6=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves6.addManualMomTheta(8.75,Array(0,0.0261,0.209),Array(0,642000,652000));
SoilCurves6.addManualPY(8.75,Array(0,0.00958,0.0192,0.0383,0.0766,0.153,0.307,0.613,1.23,2.45),Array(0,44600,58500,71400,81700,88800,93100,95500,96600,97000));
SoilCurves7=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves7.addManualMomTheta(8.75,Array(0,0.0248,0.198),Array(0,713000,723000));
SoilCurves7.addManualPY(8.75,Array(0,0.00913,0.0183,0.0365,0.073,0.146,0.292,0.584,1.17,2.34),Array(0,51000,67200,82500,94800,103000,109000,112000,113000,113000));
SoilCurves8=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves8.addManualMomTheta(8.75,Array(0,0.0238,0.191),Array(0,783000,793000));
SoilCurves8.addManualPY(8.75,Array(0,0.0088,0.0176,0.0352,0.0704,0.141,0.282,0.563,1.13,2.25),Array(0,57400,76100,93800,108000,118000,125000,128000,130000,130000));
SoilCurves9=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves9.addManualMomTheta(8.75,Array(0,0.0231,0.185),Array(0,851000,861000));
SoilCurves9.addManualPY(8.75,Array(0,0.00854,0.0171,0.0342,0.0683,0.137,0.273,0.547,1.09,2.19),Array(0,63800,85000,105000,122000,134000,141000,145000,147000,148000));
SoilCurves10=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves10.addManualMomTheta(8.75,Array(0,0.0225,0.18),Array(0,917000,927000));
SoilCurves10.addManualPY(8.75,Array(0,0.00834,0.0167,0.0334,0.0667,0.133,0.267,0.534,1.07,2.14),Array(0,70200,93900,117000,136000,149000,158000,163000,165000,166000));
SoilCurves11=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves11.addManualMomTheta(8.75,Array(0,0.022,0.176),Array(0,981000,991000));
SoilCurves11.addManualPY(8.75,Array(0,0.00818,0.0164,0.0327,0.0655,0.131,0.262,0.524,1.05,2.09),Array(0,76500,103000,128000,150000,165000,175000,180000,183000,184000));
SoilCurves12=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves12.addManualMomTheta(8.75,Array(0,0.0215,0.172),Array(0,1040000,1050000));
SoilCurves12.addManualPY(8.75,Array(0,0.00805,0.0161,0.0322,0.0644,0.129,0.258,0.515,1.03,2.06),Array(0,82800,112000,140000,164000,181000,192000,198000,201000,202000));
SoilCurves13=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves13.addManualMomTheta(8.75,Array(0,0.0212,0.169),Array(0,1100000,1110000));
SoilCurves13.addManualPY(8.75,Array(0,0.00794,0.0159,0.0317,0.0635,0.127,0.254,0.508,1.02,2.03),Array(0,89000,120000,152000,178000,197000,210000,217000,220000,221000));
SoilCurves14=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves14.addManualMomTheta(8.75,Array(0,0.0209,0.167),Array(0,1160000,1170000));
SoilCurves14.addManualPY(8.75,Array(0,0.00784,0.0157,0.0314,0.0627,0.125,0.251,0.502,1,2.01),Array(0,95100,129000,163000,192000,214000,227000,235000,239000,240000));
SoilCurves15=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves15.addManualMomTheta(8.75,Array(0,0.0206,0.165),Array(0,1220000,1230000));
SoilCurves15.addManualPY(8.75,Array(0,0.00776,0.0155,0.031,0.0621,0.124,0.248,0.496,0.993,1.99),Array(0,101000,138000,175000,206000,230000,245000,253000,258000,259000));
SoilCurves16=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves16.addManualMomTheta(8.75,Array(0,0.0203,0.162),Array(0,1270000,1280000));
SoilCurves16.addManualPY(8.75,Array(0,0.00769,0.0154,0.0307,0.0615,0.123,0.246,0.492,0.984,1.97),Array(0,107000,146000,186000,220000,246000,263000,272000,277000,278000));
SoilCurves17=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves17.addManualMomTheta(8.75,Array(0,0.0201,0.161),Array(0,1320000,1330000));
SoilCurves17.addManualPY(8.75,Array(0,0.00762,0.0152,0.0305,0.061,0.122,0.244,0.488,0.976,1.95),Array(0,113000,155000,197000,234000,262000,280000,291000,296000,297000));
SoilCurves18=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves18.addManualMomTheta(8.75,Array(0,0.0199,0.159),Array(0,1370000,1380000));
SoilCurves18.addManualPY(8.75,Array(0,0.00757,0.0151,0.0303,0.0605,0.121,0.242,0.484,0.968,1.94),Array(0,119000,163000,209000,249000,279000,298000,310000,315000,317000));
SoilCurves19=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves19.addManualMomTheta(8.75,Array(0,0.0197,0.157),Array(0,1420000,1430000));
SoilCurves19.addManualPY(8.75,Array(0,0.00752,0.015,0.0301,0.0601,0.12,0.241,0.481,0.962,1.92),Array(0,124000,171000,220000,262000,295000,316000,328000,334000,336000));
SoilCurves20=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves20.addManualMomTheta(8.75,Array(0,0.0195,0.156),Array(0,1460000,1470000));
SoilCurves20.addManualPY(8.75,Array(0,0.00747,0.0149,0.0299,0.0598,0.12,0.239,0.478,0.956,1.91),Array(0,130000,179000,231000,276000,311000,334000,347000,354000,356000));
SoilCurves21=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves21.addManualMomTheta(8.75,Array(0,0.00642,0.0513),Array(0,2180000,2190000));
SoilCurves21.addManualPY(8.75,Array(0,0.00588,0.0118,0.0235,0.0471,0.0941,0.188,0.376,0.753,1.51),Array(0,286000,397000,527000,664000,794000,899000,972000,1010000,1030000));
SoilCurves22=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves22.addManualMomTheta(8.75,Array(0,0.00619,0.0495),Array(0,2160000,2170000));
SoilCurves22.addManualPY(8.75,Array(0,0.00577,0.0115,0.0231,0.0462,0.0923,0.185,0.369,0.739,1.48),Array(0,294000,409000,543000,685000,820000,930000,1010000,1050000,1060000));
SoilCurves23=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves23.addManualMomTheta(8.75,Array(0,0.00596,0.0477),Array(0,2150000,2160000));
SoilCurves23.addManualPY(8.75,Array(0,0.00567,0.0113,0.0227,0.0453,0.0906,0.181,0.363,0.725,1.45),Array(0,301000,420000,558000,706000,846000,961000,1040000,1080000,1100000));
SoilCurves24=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves24.addManualMomTheta(8.75,Array(0,0.00579,0.0461),Array(0,2130000,2140000));
SoilCurves24.addManualPY(8.75,Array(0,0.00557,0.0111,0.0223,0.0445,0.0891,0.178,0.356,0.713,1.43),Array(0,308000,430000,574000,727000,872000,991000,1070000,1120000,1140000));
SoilCurves25=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves25.addManualMomTheta(8.75,Array(0,0.00556,0.0444),Array(0,2110000,2120000));
SoilCurves25.addManualPY(8.75,Array(0,0.00548,0.011,0.0219,0.0438,0.0876,0.175,0.351,0.701,1.4),Array(0,314000,441000,589000,747000,898000,1020000,1110000,1160000,1170000));
SoilCurves26=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves26.addManualMomTheta(8.75,Array(0,0.00536,0.0429),Array(0,2080000,2090000));
SoilCurves26.addManualPY(8.75,Array(0,0.00539,0.0108,0.0216,0.0431,0.0863,0.173,0.345,0.69,1.38),Array(0,321000,451000,604000,768000,924000,1050000,1140000,1190000,1210000));
SoilCurves27=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves27.addManualMomTheta(8.75,Array(0,0.00518,0.0414),Array(0,2060000,2070000));
SoilCurves27.addManualPY(8.75,Array(0,0.00531,0.0106,0.0212,0.0425,0.085,0.17,0.34,0.68,1.36),Array(0,327000,461000,618000,788000,949000,1080000,1180000,1230000,1250000));
SoilCurves28=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves28.addManualMomTheta(8.75,Array(0,0.00499,0.04),Array(0,2030000,2040000));
SoilCurves28.addManualPY(8.75,Array(0,0.00524,0.0105,0.0209,0.0419,0.0838,0.168,0.335,0.67,1.34),Array(0,332000,470000,633000,807000,974000,1110000,1210000,1260000,1280000));
SoilCurves29=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves29.addManualMomTheta(8.75,Array(0,0.00482,0.0386),Array(0,2000000,2010000));
SoilCurves29.addManualPY(8.75,Array(0,0.00517,0.0103,0.0207,0.0413,0.0827,0.165,0.331,0.661,1.32),Array(0,338000,479000,646000,826000,999000,1140000,1240000,1300000,1320000));
SoilCurves30=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves30.addManualMomTheta(8.75,Array(0,0.00465,0.0372),Array(0,1970000,1980000));
SoilCurves30.addManualPY(8.75,Array(0,0.0051,0.0102,0.0204,0.0408,0.0816,0.163,0.326,0.653,1.31),Array(0,343000,488000,660000,845000,1020000,1170000,1280000,1340000,1360000));
SoilCurves31=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves31.addManualMomTheta(8.75,Array(0,0.00448,0.0359),Array(0,1940000,1950000));
SoilCurves31.addManualPY(8.75,Array(0,0.00504,0.0101,0.0202,0.0403,0.0806,0.161,0.322,0.645,1.29),Array(0,348000,496000,672000,863000,1050000,1200000,1310000,1370000,1390000));
SoilCurves32=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves32.addManualMomTheta(8.75,Array(0,0.00432,0.0346),Array(0,1910000,1920000));
SoilCurves32.addManualPY(8.75,Array(0,0.00498,0.00996,0.0199,0.0398,0.0797,0.159,0.319,0.637,1.27),Array(0,352000,504000,685000,881000,1070000,1230000,1340000,1410000,1430000));
SoilCurves33=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves33.addManualMomTheta(8.75,Array(0,0.00416,0.0333),Array(0,1870000,1880000));
SoilCurves33.addManualPY(8.75,Array(0,0.00492,0.00984,0.0197,0.0394,0.0788,0.158,0.315,0.63,1.26),Array(0,356000,511000,697000,899000,1090000,1260000,1380000,1440000,1470000));
SoilCurves34=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves34.addManualMomTheta(8.75,Array(0,0.004,0.032),Array(0,1830000,1840000));
SoilCurves34.addManualPY(8.75,Array(0,0.00487,0.00974,0.0195,0.0389,0.0779,0.156,0.312,0.623,1.25),Array(0,359000,518000,708000,915000,1120000,1290000,1410000,1480000,1500000));
SoilCurves35=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves35.addManualMomTheta(8.75,Array(0,0.00385,0.0308),Array(0,1790000,1800000));
SoilCurves35.addManualPY(8.75,Array(0,0.00482,0.00964,0.0193,0.0385,0.0771,0.154,0.308,0.617,1.23),Array(0,362000,524000,718000,931000,1140000,1320000,1440000,1520000,1540000));
SoilCurves36=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves36.addManualMomTheta(8.75,Array(0,0.0037,0.0296),Array(0,1750000,1760000));
SoilCurves36.addManualPY(8.75,Array(0,0.00477,0.00954,0.0191,0.0382,0.0763,0.153,0.305,0.611,1.22),Array(0,364000,529000,728000,947000,1160000,1340000,1480000,1550000,1580000));
SoilCurves37=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves37.addManualMomTheta(8.75,Array(0,0.00355,0.0284),Array(0,1700000,1710000));
SoilCurves37.addManualPY(8.75,Array(0,0.00472,0.00945,0.0189,0.0378,0.0756,0.151,0.302,0.605,1.21),Array(0,366000,534000,737000,961000,1180000,1370000,1510000,1590000,1610000));
SoilCurves38=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves38.addManualMomTheta(8.75,Array(0,0.0034,0.0272),Array(0,1650000,1660000));
SoilCurves38.addManualPY(8.75,Array(0,0.00468,0.00936,0.0187,0.0374,0.0749,0.15,0.3,0.599,1.2),Array(0,368000,538000,746000,975000,1200000,1400000,1540000,1620000,1650000));
SoilCurves39=SoilCurves(pyManual,tzAPI2014,qzAPI2014);
SoilCurves39.addManualMomTheta(8.75,Array(0,0.00326,0.0261),Array(0,1610000,1620000));
SoilCurves39.addManualPY(8.75,Array(0,0.00464,0.00928,0.0186,0.0371,0.0742,0.148,0.297,0.594,1.19),Array(0,368000,542000,753000,988000,1220000,1420000,1570000,1660000,1690000));

SoilCurves1.largeDiameterMonopile = true;
SoilCurves2.largeDiameterMonopile = true;
SoilCurves3.largeDiameterMonopile = true;
SoilCurves4.largeDiameterMonopile = true;
SoilCurves5.largeDiameterMonopile = true;
SoilCurves6.largeDiameterMonopile = true;
SoilCurves7.largeDiameterMonopile = true;
SoilCurves8.largeDiameterMonopile = true;
SoilCurves9.largeDiameterMonopile = true;
SoilCurves10.largeDiameterMonopile = true;
SoilCurves11.largeDiameterMonopile = true;
SoilCurves12.largeDiameterMonopile = true;
SoilCurves13.largeDiameterMonopile = true;
SoilCurves14.largeDiameterMonopile = true;
SoilCurves15.largeDiameterMonopile = true;
SoilCurves16.largeDiameterMonopile = true;
SoilCurves17.largeDiameterMonopile = true;
SoilCurves18.largeDiameterMonopile = true;
SoilCurves19.largeDiameterMonopile = true;
SoilCurves20.largeDiameterMonopile = true;
SoilCurves21.largeDiameterMonopile = true;
SoilCurves22.largeDiameterMonopile = true;
SoilCurves23.largeDiameterMonopile = true;
SoilCurves24.largeDiameterMonopile = true;
SoilCurves25.largeDiameterMonopile = true;
SoilCurves26.largeDiameterMonopile = true;
SoilCurves27.largeDiameterMonopile = true;
SoilCurves28.largeDiameterMonopile = true;
SoilCurves29.largeDiameterMonopile = true;
SoilCurves30.largeDiameterMonopile = true;
SoilCurves31.largeDiameterMonopile = true;
SoilCurves32.largeDiameterMonopile = true;
SoilCurves33.largeDiameterMonopile = true;
SoilCurves34.largeDiameterMonopile = true;
SoilCurves35.largeDiameterMonopile = true;
SoilCurves36.largeDiameterMonopile = true;
SoilCurves37.largeDiameterMonopile = true;
SoilCurves38.largeDiameterMonopile = true;
SoilCurves39.largeDiameterMonopile = true;
SoilCurves40.largeDiameterMonopile = true;









































































