//
// Parametric input file for creating a panel model of a semisubmersible. The panel model includes 4 tanks.
//
// Change variables prior to reading or pasting the input file into GeniE.
// This input file belongs to a tutorial in which the variables and how to use the input file are explained.
//
Pon_Height = 7m;
Pon_Length = 100m;
Pon_Width = 11m;
Rad_Large = 4.5m;
Rad_Small = 3.5m;
Draft = 18.5m;
CC_Large = 35m;
CC_Small = 11m;
Col_Height = 30m;
CC_Columns = 60m;
Md_Line = NumberOfElements(2);
Mesh_Length = 5m;

// Plate thickness
plateThickness = Thickness(0.02);
plateThickness.setDefault();

// Define settings for tolerant modelling
GenieRules.Tolerances.useTolerantModelling = true;
GenieRules.Compatibility.enable(PlateSortingCOGFirst, false);

// Define points for pontoon
P1 = Point(-Pon_Length/2,-Pon_Width/2-CC_Columns/2,-Draft);
P2 = Point(Pon_Length/2,-Pon_Width/2-CC_Columns/2,-Draft);
P3 = Point(Pon_Length/2,Pon_Width/2-CC_Columns/2,-Draft);
P4 = Point(-Pon_Length/2,Pon_Width/2-CC_Columns/2,-Draft);
P5 = Point(-Pon_Length/2,-Pon_Width/2-CC_Columns/2,-Draft+Pon_Height);
P6 = Point(Pon_Length/2,-Pon_Width/2-CC_Columns/2,-Draft+Pon_Height);
P7 = Point(Pon_Length/2,Pon_Width/2-CC_Columns/2,-Draft+Pon_Height);
P8 = Point(-Pon_Length/2,Pon_Width/2-CC_Columns/2,-Draft+Pon_Height);

// Define points for intersections between pontoon and columns
P11 = Point(-CC_Large,-CC_Columns/2,-Draft+Pon_Height);
P12 = Point(-CC_Small,-CC_Columns/2,-Draft+Pon_Height);
P13 = Point(CC_Small,-CC_Columns/2,-Draft+Pon_Height);
P14 = Point(CC_Large,-CC_Columns/2,-Draft+Pon_Height);

// Define start/end points for guide curves (one quadrant)
Point11_1 = P11.copyTranslate(Vector3d(-Rad_Large,0,0));
Point11_2 = P11.copyTranslate(Vector3d(0,-Rad_Large,0));
Point14_1 = P14.copyTranslate(Vector3d(-Rad_Large,0,0));
Point14_2 = P14.copyTranslate(Vector3d(0,-Rad_Large,0));
Point12_1 = P12.copyTranslate(Vector3d(-Rad_Small,0,0));
Point12_2 = P12.copyTranslate(Vector3d(0,-Rad_Small,0));
Point13_1 = P13.copyTranslate(Vector3d(-Rad_Small,0,0));
Point13_2 = P13.copyTranslate(Vector3d(0,-Rad_Small,0));

// Define guide curves at bottom of column
Curve1 = GuideArcElliptic(P11, Point11_1, Point11_2, true);
Curve2 = GuideArcElliptic(P12, Point12_1, Point12_2, true);
Curve3 = GuideArcElliptic(P13, Point13_1, Point13_2, true);
Curve4 = GuideArcElliptic(P14, Point14_1, Point14_2, true);

// Define guide curves at top of column
Curve5 = Curve1.copyTranslate(Vector3d(0,0,Col_Height));
Curve6 = Curve2.copyTranslate(Vector3d(0,0,Col_Height));
Curve7 = Curve3.copyTranslate(Vector3d(0,0,Col_Height));
Curve8 = Curve4.copyTranslate(Vector3d(0,0,Col_Height));

// Define the columns
Pl1 = SkinCurves(Curve1,Curve5);
Pl2 = Pl1.copyRotate(P11,Vector3d(0,0,1),90*1);
Pl3 = Pl1.copyRotate(P11,Vector3d(0,0,1),90*2);
Pl4 = Pl1.copyRotate(P11,Vector3d(0,0,1),90*3);
Pl9 = SkinCurves(Curve2,Curve6);
Pl10 = Pl9.copyRotate(P12,Vector3d(0,0,1),90*1);
Pl11 = Pl9.copyRotate(P12,Vector3d(0,0,1),90*2);
Pl12 = Pl9.copyRotate(P12,Vector3d(0,0,1),90*3);
Pl13 = SkinCurves(Curve3,Curve7);
Pl14 = Pl13.copyRotate(P13,Vector3d(0,0,1),90*1);
Pl15 = Pl13.copyRotate(P13,Vector3d(0,0,1),90*2);
Pl16 = Pl13.copyRotate(P13,Vector3d(0,0,1),90*3);
Pl17 = SkinCurves(Curve4,Curve8);
Pl18 = Pl17.copyRotate(P14,Vector3d(0,0,1),90*1);
Pl19 = Pl17.copyRotate(P14,Vector3d(0,0,1),90*2);
Pl20 = Pl17.copyRotate(P14,Vector3d(0,0,1),90*3);

// Feature edges for specifying elements around colums
FEdge1 = FeatureEdge(Curve1);
FEdge1_2 = FEdge1.copyRotate(P11,Vector3d(0,0,1),90*1);
FEdge1_3 = FEdge1.copyRotate(P11,Vector3d(0,0,1),90*2);
FEdge1_4 = FEdge1.copyRotate(P11,Vector3d(0,0,1),90*3);
FEdge2 = FeatureEdge(Curve2);
FEdge2_2 = FEdge2.copyRotate(P12,Vector3d(0,0,1),90*1);
FEdge2_3 = FEdge2.copyRotate(P12,Vector3d(0,0,1),90*2);
FEdge2_4 = FEdge2.copyRotate(P12,Vector3d(0,0,1),90*3);
FEdge3 = FeatureEdge(Curve3);
FEdge3_2 = FEdge3.copyRotate(P13,Vector3d(0,0,1),90*1);
FEdge3_3 = FEdge3.copyRotate(P13,Vector3d(0,0,1),90*2);
FEdge3_4 = FEdge3.copyRotate(P13,Vector3d(0,0,1),90*3);
FEdge4 = FeatureEdge(Curve4);
FEdge4_2 = FEdge4.copyRotate(P14,Vector3d(0,0,1),90*1);
FEdge4_3 = FEdge4.copyRotate(P14,Vector3d(0,0,1),90*2);
FEdge4_4 = FEdge4.copyRotate(P14,Vector3d(0,0,1),90*3);
FEdge1_0 = FEdge1.copyTranslate(Vector3d(0,0,Col_Height));
FEdge1_6 = FEdge1_2.copyTranslate(Vector3d(0,0,Col_Height));
FEdge1_7 = FEdge1_3.copyTranslate(Vector3d(0,0,Col_Height));
FEdge1_8 = FEdge1_4.copyTranslate(Vector3d(0,0,Col_Height));
FEdge2_0 = FEdge2.copyTranslate(Vector3d(0,0,Col_Height));
FEdge2_6 = FEdge2_2.copyTranslate(Vector3d(0,0,Col_Height));
FEdge2_7 = FEdge2_3.copyTranslate(Vector3d(0,0,Col_Height));
FEdge2_8 = FEdge2_4.copyTranslate(Vector3d(0,0,Col_Height));
FEdge3_0 = FEdge3.copyTranslate(Vector3d(0,0,Col_Height));
FEdge3_6 = FEdge3_2.copyTranslate(Vector3d(0,0,Col_Height));
FEdge3_7 = FEdge3_3.copyTranslate(Vector3d(0,0,Col_Height));
FEdge3_8 = FEdge3_4.copyTranslate(Vector3d(0,0,Col_Height));
FEdge4_0 = FEdge4.copyTranslate(Vector3d(0,0,Col_Height));
FEdge4_6 = FEdge4_2.copyTranslate(Vector3d(0,0,Col_Height));
FEdge4_7 = FEdge4_3.copyTranslate(Vector3d(0,0,Col_Height));
FEdge4_8 = FEdge4_4.copyTranslate(Vector3d(0,0,Col_Height));

// Feature edges for specifying mesh on columns
FEdge1.numberOfElements = Md_Line;
FEdge1_2.numberOfElements = Md_Line;
FEdge1_3.numberOfElements = Md_Line;
FEdge1_4.numberOfElements = Md_Line;
FEdge2.numberOfElements = Md_Line;
FEdge2_2.numberOfElements = Md_Line;
FEdge2_3.numberOfElements = Md_Line;
FEdge2_4.numberOfElements = Md_Line;
FEdge3.numberOfElements = Md_Line;
FEdge3_2.numberOfElements = Md_Line;
FEdge3_3.numberOfElements = Md_Line;
FEdge3_4.numberOfElements = Md_Line;
FEdge4.numberOfElements = Md_Line;
FEdge4_2.numberOfElements = Md_Line;
FEdge4_3.numberOfElements = Md_Line;
FEdge4_4.numberOfElements = Md_Line;
FEdge1_0.numberOfElements = Md_Line;
FEdge1_6.numberOfElements = Md_Line;
FEdge1_7.numberOfElements = Md_Line;
FEdge1_8.numberOfElements = Md_Line;
FEdge2_0.numberOfElements = Md_Line;
FEdge2_6.numberOfElements = Md_Line;
FEdge2_7.numberOfElements = Md_Line;
FEdge2_8.numberOfElements = Md_Line;
FEdge3_0.numberOfElements = Md_Line;
FEdge3_6.numberOfElements = Md_Line;
FEdge3_7.numberOfElements = Md_Line;
FEdge3_8.numberOfElements = Md_Line;
FEdge4_0.numberOfElements = Md_Line;
FEdge4_6.numberOfElements = Md_Line;
FEdge4_7.numberOfElements = Md_Line;
FEdge4_8.numberOfElements = Md_Line;

// Define pontoon
Pl21 = Plate(P1,P2,P3,P4);
Pl22 = Plate(P5,P6,P7,P8);
Pl23 = Plate(P1,P2,P6,P5);
PL24 = Plate(P4,P3,P7,P8);
Pl25 = Plate(P1,P4,P8,P5);
Pl26 = Plate(P2,P3,P7,P6);

// Orientate surface normals
Pl21.flipNormal();
PL24.flipNormal();
Pl25.flipNormal();
Pl22.explode(IndexedNameMask(27));

Curve9 = Curve5.copyRotate(P11,Vector3d(0,0,1),90*1);
Curve10 = Curve5.copyRotate(P11,Vector3d(0,0,1),90*2);
Curve11 = Curve5.copyRotate(P11,Vector3d(0,0,1),90*3);
Curve12 = Curve8.copyRotate(P14,Vector3d(0,0,1),90*1);
Curve13 = Curve8.copyRotate(P14,Vector3d(0,0,1),90*2);
Curve14 = Curve8.copyRotate(P14,Vector3d(0,0,1),90*3);
Curve15 = Curve7.copyRotate(P13,Vector3d(0,0,1),90*1);
Curve16 = Curve7.copyRotate(P13,Vector3d(0,0,1),90*2);
Curve17 = Curve7.copyRotate(P13,Vector3d(0,0,1),90*3);
Curve18 = Curve6.copyRotate(P12,Vector3d(0,0,1),90*1);
Curve19 = Curve6.copyRotate(P12,Vector3d(0,0,1),90*2);
Curve20 = Curve6.copyRotate(P12,Vector3d(0,0,1),90*3);

// Set mesh density
Md_def = MeshDensity(Mesh_Length);
Md_def.setDefault();

// Specify mesh settings
GenieRules.Meshing.preference(mpPreferRectangularMesh, false);
GenieRules.Meshing.preference(mpAllowTriangularElements, true);
GenieRules.Meshing.preference(mpMeshDensityRounded, true);

Point9 = P1.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Point10 = P2.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Point11 = P3.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Point12 = P4.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Point13 = P5.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Point14 = P6.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Point15 = P7.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Point16 = P8.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Point17 = P11.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Point18 = P12.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Point19 = P13.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Point20 = P14.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Point21 = Point11_1.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Point22 = Point11_2.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Point23 = Point14_1.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Point24 = Point14_2.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Point25 = Point12_1.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Point26 = Point12_2.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Point27 = Point13_1.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Point28 = Point13_2.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Curve21 = Curve1.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Curve22 = Curve2.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Curve23 = Curve3.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Curve24 = Curve4.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Curve25 = Curve5.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Curve26 = Curve6.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Curve27 = Curve7.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Curve28 = Curve8.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Pl32 = Pl1.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Pl33 = Pl2.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Pl34 = Pl3.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Pl35 = Pl4.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Pl36 = Pl9.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Pl37 = Pl10.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Pl38 = Pl11.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Pl39 = Pl12.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Pl40 = Pl13.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Pl41 = Pl14.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Pl42 = Pl15.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Pl43 = Pl16.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Pl44 = Pl17.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Pl45 = Pl18.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Pl46 = Pl19.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Pl47 = Pl20.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Pl48 = Pl21.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Curve29 = Curve13.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Curve30 = Curve14.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Pl49 = Pl23.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Pl50 = PL24.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Pl51 = Pl25.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Pl52 = Pl26.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Pl53 = Pl31.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Pl54 = Pl27.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Pl55 = Pl29.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Pl56 = Pl28.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Pl57 = Pl30.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Curve31 = Curve9.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Curve32 = Curve10.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Curve33 = Curve11.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Curve34 = Curve12.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Curve35 = Curve15.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Curve36 = Curve16.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Curve37 = Curve17.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Curve38 = Curve18.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Curve39 = Curve19.copyTranslate(Vector3d(0 m,CC_Columns,0 m));
Curve40 = Curve20.copyTranslate(Vector3d(0 m,CC_Columns,0 m));

// Feature edges for specifying mesh for copied columns
FEdge33 = FEdge1.copyTranslate(Vector3d(0,CC_Columns,0));
FEdge34 = FEdge1_2.copyTranslate(Vector3d(0,CC_Columns,0));
FEdge35 = FEdge1_3.copyTranslate(Vector3d(0,CC_Columns,0));
FEdge36 = FEdge1_4.copyTranslate(Vector3d(0,CC_Columns,0));
FEdge37 = FEdge2.copyTranslate(Vector3d(0,CC_Columns,0));
FEdge38 = FEdge2_2.copyTranslate(Vector3d(0,CC_Columns,0));
FEdge39 = FEdge2_3.copyTranslate(Vector3d(0,CC_Columns,0));
FEdge40 = FEdge2_4.copyTranslate(Vector3d(0,CC_Columns,0));
FEdge41 = FEdge3.copyTranslate(Vector3d(0,CC_Columns,0));
FEdge42 = FEdge3_2.copyTranslate(Vector3d(0,CC_Columns,0));
FEdge43 = FEdge3_3.copyTranslate(Vector3d(0,CC_Columns,0));
FEdge44 = FEdge3_4.copyTranslate(Vector3d(0,CC_Columns,0));
FEdge45 = FEdge4.copyTranslate(Vector3d(0,CC_Columns,0));
FEdge46 = FEdge4_2.copyTranslate(Vector3d(0,CC_Columns,0));
FEdge47 = FEdge4_3.copyTranslate(Vector3d(0,CC_Columns,0));
FEdge48 = FEdge4_4.copyTranslate(Vector3d(0,CC_Columns,0));
FEdge49 = FEdge1_0.copyTranslate(Vector3d(0,CC_Columns,0));
FEdge50 = FEdge1_6.copyTranslate(Vector3d(0,CC_Columns,0));
FEdge51 = FEdge1_7.copyTranslate(Vector3d(0,CC_Columns,0));
FEdge52 = FEdge1_8.copyTranslate(Vector3d(0,CC_Columns,0));
FEdge53 = FEdge2_0.copyTranslate(Vector3d(0,CC_Columns,0));
FEdge54 = FEdge2_6.copyTranslate(Vector3d(0,CC_Columns,0));
FEdge55 = FEdge2_7.copyTranslate(Vector3d(0,CC_Columns,0));
FEdge56 = FEdge2_8.copyTranslate(Vector3d(0,CC_Columns,0));
FEdge57 = FEdge3_0.copyTranslate(Vector3d(0,CC_Columns,0));
FEdge58 = FEdge3_6.copyTranslate(Vector3d(0,CC_Columns,0));
FEdge59 = FEdge3_7.copyTranslate(Vector3d(0,CC_Columns,0));
FEdge60 = FEdge3_8.copyTranslate(Vector3d(0,CC_Columns,0));
FEdge61 = FEdge4_0.copyTranslate(Vector3d(0,CC_Columns,0));
FEdge62 = FEdge4_6.copyTranslate(Vector3d(0,CC_Columns,0));
FEdge63 = FEdge4_7.copyTranslate(Vector3d(0,CC_Columns,0));
FEdge64 = FEdge4_8.copyTranslate(Vector3d(0,CC_Columns,0));
FEdge33.numberOfElements = Md_Line;
FEdge34.numberOfElements = Md_Line;
FEdge35.numberOfElements = Md_Line;
FEdge36.numberOfElements = Md_Line;
FEdge37.numberOfElements = Md_Line;
FEdge38.numberOfElements = Md_Line;
FEdge39.numberOfElements = Md_Line;
FEdge40.numberOfElements = Md_Line;
FEdge41.numberOfElements = Md_Line;
FEdge42.numberOfElements = Md_Line;
FEdge43.numberOfElements = Md_Line;
FEdge44.numberOfElements = Md_Line;
FEdge45.numberOfElements = Md_Line;
FEdge46.numberOfElements = Md_Line;
FEdge47.numberOfElements = Md_Line;
FEdge48.numberOfElements = Md_Line;
FEdge49.numberOfElements = Md_Line;
FEdge50.numberOfElements = Md_Line;
FEdge51.numberOfElements = Md_Line;
FEdge52.numberOfElements = Md_Line;
FEdge53.numberOfElements = Md_Line;
FEdge54.numberOfElements = Md_Line;
FEdge55.numberOfElements = Md_Line;
FEdge56.numberOfElements = Md_Line;
FEdge57.numberOfElements = Md_Line;
FEdge58.numberOfElements = Md_Line;
FEdge59.numberOfElements = Md_Line;
FEdge60.numberOfElements = Md_Line;
FEdge61.numberOfElements = Md_Line;
FEdge62.numberOfElements = Md_Line;
FEdge63.numberOfElements = Md_Line;
FEdge64.numberOfElements = Md_Line;

// Insert dummy plates to improve mesh below columns in pontoons - the plates will be used for tank definitions also
Pl62 = Pl25.copyTranslate(Vector3d(Pon_Length/2-CC_Large,0,0));
Pl63 = Pl25.copyTranslate(Vector3d(Pon_Length/2-CC_Small,0,0));
Pl64 = Pl25.copyTranslate(Vector3d(Pon_Length/2+CC_Small,0,0));
Pl65 = Pl25.copyTranslate(Vector3d(Pon_Length/2+CC_Large,0,0));
Pl70 = Pl62.copyTranslate(Vector3d(0,CC_Columns,0));
Pl71 = Pl63.copyTranslate(Vector3d(0,CC_Columns,0));
Pl72 = Pl64.copyTranslate(Vector3d(0,CC_Columns,0));
Pl73 = Pl65.copyTranslate(Vector3d(0,CC_Columns,0));

// Feature edges for controlling mesh at pontoon ends
FEdge65 = FeatureEdge(P1,P5);
FEdge66 = FeatureEdge(P4,P8);
FEdge67 = FeatureEdge(P2,P6);
FEdge68 = FeatureEdge(P3,P7);
FEdge69 = FEdge65.copyTranslate(Vector3d(0,CC_Columns,0));
FEdge70 = FEdge66.copyTranslate(Vector3d(0,CC_Columns,0));
FEdge71 = FEdge67.copyTranslate(Vector3d(0,CC_Columns,0));
FEdge72 = FEdge68.copyTranslate(Vector3d(0,CC_Columns,0));
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(FEdge65, "FEdge73");
MyModelTransformerMap.Add(FEdge66, "FEdge74");
MyModelTransformerMap.Add(FEdge69, "FEdge75");
MyModelTransformerMap.Add(FEdge70, "FEdge76");
ModelTransformer(MyModelTransformerMap).copyTranslate(Vector3d(Pon_Length/2-CC_Large,0,0));
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(FEdge65, "FEdge77");
MyModelTransformerMap.Add(FEdge66, "FEdge78");
MyModelTransformerMap.Add(FEdge69, "FEdge79");
MyModelTransformerMap.Add(FEdge70, "FEdge80");
ModelTransformer(MyModelTransformerMap).copyTranslate(Vector3d(Pon_Length/2-CC_Small,0,0));
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(FEdge65, "FEdge81");
MyModelTransformerMap.Add(FEdge66, "FEdge82");
MyModelTransformerMap.Add(FEdge69, "FEdge83");
MyModelTransformerMap.Add(FEdge70, "FEdge84");
ModelTransformer(MyModelTransformerMap).copyTranslate(Vector3d(Pon_Length/2+CC_Small,0,0));
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(FEdge65, "FEdge85");
MyModelTransformerMap.Add(FEdge66, "FEdge86");
MyModelTransformerMap.Add(FEdge69, "FEdge87");
MyModelTransformerMap.Add(FEdge70, "FEdge88");
ModelTransformer(MyModelTransformerMap).copyTranslate(Vector3d(Pon_Length/2+CC_Large,0,0));
FEdge65.numberOfElements = Md_Line;
FEdge66.numberOfElements = Md_Line;
FEdge67.numberOfElements = Md_Line;
FEdge68.numberOfElements = Md_Line;
FEdge69.numberOfElements = Md_Line;
FEdge70.numberOfElements = Md_Line;
FEdge71.numberOfElements = Md_Line;
FEdge72.numberOfElements = Md_Line;
FEdge73.numberOfElements = Md_Line;
FEdge74.numberOfElements = Md_Line;
FEdge75.numberOfElements = Md_Line;
FEdge76.numberOfElements = Md_Line;
FEdge77.numberOfElements = Md_Line;
FEdge78.numberOfElements = Md_Line;
FEdge79.numberOfElements = Md_Line;
FEdge80.numberOfElements = Md_Line;
FEdge81.numberOfElements = Md_Line;
FEdge82.numberOfElements = Md_Line;
FEdge83.numberOfElements = Md_Line;
FEdge84.numberOfElements = Md_Line;
FEdge85.numberOfElements = Md_Line;
FEdge86.numberOfElements = Md_Line;
FEdge87.numberOfElements = Md_Line;
FEdge88.numberOfElements = Md_Line;

//Create wet surface and dummy hydro pressure
outer_shell = Set();
outer_shell.add(Pl1);
outer_shell.add(Pl2);
outer_shell.add(Pl3);
outer_shell.add(Pl4);
outer_shell.add(Pl9);
outer_shell.add(Pl10);
outer_shell.add(Pl11);
outer_shell.add(Pl12);
outer_shell.add(Pl13);
outer_shell.add(Pl14);
outer_shell.add(Pl15);
outer_shell.add(Pl16);
outer_shell.add(Pl17);
outer_shell.add(Pl18);
outer_shell.add(Pl19);
outer_shell.add(Pl20);
outer_shell.add(Pl21);
outer_shell.add(Pl23);
outer_shell.add(PL24);
outer_shell.add(Pl25);
outer_shell.add(Pl26);
outer_shell.add(Pl27);
outer_shell.add(Pl32);
outer_shell.add(Pl33);
outer_shell.add(Pl34);
outer_shell.add(Pl35);
outer_shell.add(Pl36);
outer_shell.add(Pl37);
outer_shell.add(Pl38);
outer_shell.add(Pl39);
outer_shell.add(Pl40);
outer_shell.add(Pl41);
outer_shell.add(Pl42);
outer_shell.add(Pl43);
outer_shell.add(Pl44);
outer_shell.add(Pl45);
outer_shell.add(Pl46);
outer_shell.add(Pl47);
outer_shell.add(Pl48);
outer_shell.add(Pl49);
outer_shell.add(Pl50);
outer_shell.add(Pl51);
outer_shell.add(Pl52);
outer_shell.add(Pl54);
outer_wet = WetSurface();
Pl1.front.wetSurface = outer_wet;
Pl2.front.wetSurface = outer_wet;
Pl3.front.wetSurface = outer_wet;
Pl4.front.wetSurface = outer_wet;
Pl9.front.wetSurface = outer_wet;
Pl10.front.wetSurface = outer_wet;
Pl11.front.wetSurface = outer_wet;
Pl12.front.wetSurface = outer_wet;
Pl13.front.wetSurface = outer_wet;
Pl14.front.wetSurface = outer_wet;
Pl15.front.wetSurface = outer_wet;
Pl16.front.wetSurface = outer_wet;
Pl17.front.wetSurface = outer_wet;
Pl18.front.wetSurface = outer_wet;
Pl19.front.wetSurface = outer_wet;
Pl20.front.wetSurface = outer_wet;
Pl21.front.wetSurface = outer_wet;
Pl23.front.wetSurface = outer_wet;
PL24.front.wetSurface = outer_wet;
Pl25.front.wetSurface = outer_wet;
Pl26.front.wetSurface = outer_wet;
Pl27.front.wetSurface = outer_wet;
Pl32.front.wetSurface = outer_wet;
Pl33.front.wetSurface = outer_wet;
Pl34.front.wetSurface = outer_wet;
Pl35.front.wetSurface = outer_wet;
Pl36.front.wetSurface = outer_wet;
Pl37.front.wetSurface = outer_wet;
Pl38.front.wetSurface = outer_wet;
Pl39.front.wetSurface = outer_wet;
Pl40.front.wetSurface = outer_wet;
Pl41.front.wetSurface = outer_wet;
Pl42.front.wetSurface = outer_wet;
Pl43.front.wetSurface = outer_wet;
Pl44.front.wetSurface = outer_wet;
Pl45.front.wetSurface = outer_wet;
Pl46.front.wetSurface = outer_wet;
Pl47.front.wetSurface = outer_wet;
Pl48.front.wetSurface = outer_wet;
Pl49.front.wetSurface = outer_wet;
Pl50.front.wetSurface = outer_wet;
Pl51.front.wetSurface = outer_wet;
Pl52.front.wetSurface = outer_wet;
Pl54.front.wetSurface = outer_wet;
LC1 = DummyHydroLoadCase(outer_wet);
LC1.generateAppliedLoads();

// Create tanks in the first pontoon
Pl21.explode(IndexedNameMask(74));
Validate(Pl74);
Validate(Pl75);
Validate(Pl76);
Validate(Pl77);
Validate(Pl78);
Pl23.explode(IndexedNameMask(79));
Validate(Pl79);
Validate(Pl80);
Validate(Pl81);
Validate(Pl82);
Validate(Pl83);
PL24.explode(IndexedNameMask(84));
Validate(Pl84);
Validate(Pl85);
Validate(Pl86);
Validate(Pl87);
Validate(Pl88);
Pl27.explode(IndexedNameMask(89));
Validate(Pl89);
Validate(Pl90);
Validate(Pl91);
Validate(Pl92);
Validate(Pl93);
Pl28.explode(IndexedNameMask(94));
Validate(Pl94);
Validate(Pl95);
Pl31.explode(IndexedNameMask(96));
Validate(Pl96);
Validate(Pl97);

// Tank1
WS_Tank1 = WetSurface();
Pl94.back.wetSurface = WS_Tank1;
Pl25.back.wetSurface = WS_Tank1;
Pl84.back.wetSurface = WS_Tank1;
Pl89.back.wetSurface = WS_Tank1;
Pl74.back.wetSurface = WS_Tank1;
Pl62.front.wetSurface = WS_Tank1;
Pl79.back.wetSurface = WS_Tank1;
LC2_tank1 = DummyHydroLoadCase(WS_Tank1);
LC2_tank1.generateAppliedLoads();

// Tank2
WS_Tank2 = WetSurface();
Pl93.back.wetSurface = WS_Tank2;
Pl26.back.wetSurface = WS_Tank2;
Pl65.back.wetSurface = WS_Tank2;
Pl97.back.wetSurface = WS_Tank2;
Pl78.back.wetSurface = WS_Tank2;
Pl88.back.wetSurface = WS_Tank2;
Pl83.back.wetSurface = WS_Tank2;
LC2_tank2 = DummyHydroLoadCase(WS_Tank2);
LC2_tank2.generateAppliedLoads();

// Create tanks in the second pontoon
Pl48.explode(IndexedNameMask(98));
Validate(Pl98);
Validate(Pl99);
Validate(Pl100);
Validate(Pl101);
Validate(Pl102);
Pl49.explode(IndexedNameMask(103));
Validate(Pl103);
Validate(Pl104);
Validate(Pl105);
Validate(Pl106);
Validate(Pl107);
Pl50.explode(IndexedNameMask(108));
Validate(Pl108);
Validate(Pl109);
Validate(Pl110);
Validate(Pl111);
Validate(Pl112);
Pl54.explode(IndexedNameMask(113));
Validate(Pl113);
Validate(Pl114);
Validate(Pl115);
Validate(Pl116);
Validate(Pl117);
Pl53.explode(IndexedNameMask(118));
Validate(Pl118);
Validate(Pl119);
Pl56.explode(IndexedNameMask(120));
Validate(Pl120);
Validate(Pl121);

// Tank3
WS_Tank3 = WetSurface();
Pl51.back.wetSurface = WS_Tank3;
Pl70.front.wetSurface = WS_Tank3;
Pl108.back.wetSurface = WS_Tank3;
Pl113.back.wetSurface = WS_Tank3;
Pl120.back.wetSurface = WS_Tank3;
Pl98.back.wetSurface = WS_Tank3;
Pl103.back.wetSurface = WS_Tank3;
LC2_tank3 = DummyHydroLoadCase(WS_Tank3);
LC2_tank3.generateAppliedLoads();

// Tank4
WS_Tank4 = WetSurface();
Pl117.back.wetSurface = WS_Tank4;
Pl52.back.wetSurface = WS_Tank4;
Pl73.back.wetSurface = WS_Tank4;
Pl112.back.wetSurface = WS_Tank4;
Pl119.back.wetSurface = WS_Tank4;
Pl102.back.wetSurface = WS_Tank4;
Pl107.back.wetSurface = WS_Tank4;
LC2_tank4 = DummyHydroLoadCase(WS_Tank4);
LC2_tank4.generateAppliedLoads();

// Create panel mesh and export T#.FEM file to workspace folder.
createmesh();
ExportMeshFem().DoExport(Workspace.dir + "\\" + "Semisub_Panel_T1.FEM");

//  End of input file
