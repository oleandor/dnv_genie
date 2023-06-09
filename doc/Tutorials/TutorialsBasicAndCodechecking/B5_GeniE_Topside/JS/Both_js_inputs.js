// GeniE tutorial Topside with Detailed Modelling Joint
// The two js files combined, i.e. no importing of database (gnx file) of the Topside model
//
// The 1st js file starts here
//
GenieRules.Compatibility.version = "V7.14-05";
GenieRules.Tolerances.useTolerantModelling = true;
GenieRules.Tolerances.angleTolerance = 2 deg;
GenieRules.Meshing.autoSimplifyTopology = true;
GenieRules.Meshing.eliminateInternalEdges = true;
GenieRules.BeamCreation.DefaultCurveOffset = ReparameterizedBeamCurveOffset();
GenieRules.Transformation.DefaultConnectedCopy = false;
GenieRules.Units.setOutputUnits("m", "kN", "delC");
GenieRules.Units.setInputUnit(Length, "m");
GenieRules.Units.setInputUnit(Force, "kN");
GenieRules.Units.setInputUnit(TempDiff, "delC");
// Material and beam cross sections
Mat1 = MaterialLinear(360000, 7.85 tonne/m^3, 210000000 kPa, 0.3, 1.2e-05 delC^-1, 3e-05 kN*s/m);
HE400A = ISection(0.39 m, 0.3 m, 0.011 m, 0.019 m, 0.027 m);
HE400A.description = "NVS lib : HE 400 A NS-EN 10034";
HE400A.libraryGeneralSection = GeneralSection(0.0159 m^2, 1.9e-06 m^4, 0.0004507 m^4, 8.56e-05 m^4, 0 m^4, 0.0001045453614 m^3, 0.00231 m^3, 0.000571 m^3, 0.007517269793 m^2, 0.00387027846 m^2, 0 m, -2.775557562e-17 m, 0.001280894193 m^3, 0.000432824 m^3, 0.00256 m^3, 0.000855 m^3);
HE600A = ISection(0.59 m, 0.3 m, 0.013 m, 0.025 m, 0.027 m);
HE600A.description = "NVS lib : HE 600 A NS-EN 10034";
HE600A.libraryGeneralSection = GeneralSection(0.0226 m^2, 3.99e-06 m^4, 0.001412 m^4, 0.0001127 m^4, 0 m^4, 0.00018306392 m^3, 0.00479 m^3, 0.000751 m^3, 0.009818428522 m^2, 0.006861863152 m^2, 0 m, 0 m, 0.002675187803 m^3, 0.0005739075 m^3, 0.00536 m^3, 0.001125 m^3);
P_bracing = PipeSection(0.4, 15 mm);
P_leg_norm_15 = PipeSection(80 cm, 15 mm);
P_leg_norm_35 = PipeSection(0.8, 0.035);
P_leg_large_35 = PipeSection(1.3, 0.035);
// Guide plane
GenieRules.Meshing.meshDensityRounded = true;
GuidePlane1 = GuidePlane(Point(0 m,0 m,4 m),Point(27 m,0 m,4 m),Point(27 m,28.5 m,4 m),Point(0 m,28.5 m,4 m),5,5,0.1481481481,0.2962962963,0.2222222222,0.2222222222,0.1111111111,0.1929824561,0.2105263158,0.2105263158,0.1929824561,0.1929824561);
GuidePlane1.snapmode = true;
// Create beams of cellar deck
Mat1.setDefault();
HE600A.setDefault();
Bm2 = StraightBeam(Point(0 m,28.5 m,4 m), Point(27 m,28.5 m,4 m));
Bm3 = StraightBeam(Point(0 m,23 m,4 m), Point(27 m,23 m,4 m));
Bm4 = StraightBeam(Point(0 m,17.5 m,4 m), Point(27 m,17.5 m,4 m));
Bm5 = StraightBeam(Point(4 m,5.5 m,4 m), Point(27 m,5.5 m,4 m));
Bm6 = StraightBeam(Point(4 m,0 m,4 m), Point(27 m,0 m,4 m));
Bm7 = StraightBeam(Point(4 m,11.5 m,4 m), Point(18 m,11.5 m,4 m));
Bm8 = StraightBeam(Point(24 m,11.5 m,4 m), Point(27 m,11.5 m,4 m));
Bm9 = StraightBeam(Point(0 m,17.5 m,4 m), Point(0 m,28.5 m,4 m));
Bm10 = StraightBeam(Point(4 m,0 m,4 m), Point(4 m,28.5 m,4 m));
Bm11 = StraightBeam(Point(12 m,0 m,4 m), Point(12 m,28.5 m,4 m));
Bm12 = StraightBeam(Point(18 m,0 m,4 m), Point(18 m,28.5 m,4 m));
Bm13 = StraightBeam(Point(24 m,0 m,4 m), Point(24 m,28.5 m,4 m));
Bm14 = StraightBeam(Point(27 m,0 m,4 m), Point(27 m,28.5 m,4 m));
// Create set containing beams of cellar deck
Cellar_deck = Set();
Cellar_deck.add(Bm10);
Cellar_deck.add(Bm11);
Cellar_deck.add(Bm12);
Cellar_deck.add(Bm13);
Cellar_deck.add(Bm14);
Cellar_deck.add(Bm2);
Cellar_deck.add(Bm3);
Cellar_deck.add(Bm4);
Cellar_deck.add(Bm5);
Cellar_deck.add(Bm6);
Cellar_deck.add(Bm7);
Cellar_deck.add(Bm8);
Cellar_deck.add(Bm9);
// Copy cellar deck to make main deck
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Bm2, "Bm15");
MyModelTransformerMap.Add(Bm3, "Bm16");
MyModelTransformerMap.Add(Bm4, "Bm17");
MyModelTransformerMap.Add(Bm5, "Bm18");
MyModelTransformerMap.Add(Bm6, "Bm19");
MyModelTransformerMap.Add(Bm7, "Bm20");
MyModelTransformerMap.Add(Bm8, "Bm21");
MyModelTransformerMap.Add(Bm9, "Bm22");
MyModelTransformerMap.Add(Bm10, "Bm23");
MyModelTransformerMap.Add(Bm11, "Bm24");
MyModelTransformerMap.Add(Bm12, "Bm25");
MyModelTransformerMap.Add(Bm13, "Bm26");
MyModelTransformerMap.Add(Bm14, "Bm27");
ModelTransformer(MyModelTransformerMap).copyTranslate(Vector3d(0,0,6));
// Create set containing beams of main deck
Main_deck = Set();
Main_deck.add(Bm15);
Main_deck.add(Bm16);
Main_deck.add(Bm17);
Main_deck.add(Bm18);
Main_deck.add(Bm19);
Main_deck.add(Bm20);
Main_deck.add(Bm21);
Main_deck.add(Bm22);
Main_deck.add(Bm23);
Main_deck.add(Bm24);
Main_deck.add(Bm25);
Main_deck.add(Bm26);
Main_deck.add(Bm27);
// Change beam cross section for beams of main deck
Bm21.section = HE400A;
Bm22.section = HE400A;
Bm16.section = HE400A;
Bm17.section = HE400A;
Bm23.section = HE400A;
Bm24.section = HE400A;
Bm19.section = HE400A;
Bm20.section = HE400A;
Bm25.section = HE400A;
Bm26.section = HE400A;
Bm18.section = HE400A;
Bm27.section = HE400A;
Bm15.section = HE400A;
// Create column between cellar and main deck
P_leg_norm_15.setDefault();
Bm28 = StraightBeam(Point(24 m,5.5 m,4 m), Point(24 m,5.5 m,10 m));
Bm28.extendEnd(1, 4);
// Divide column into four segments
Bm28.divideSegmentAtEccentric(1,0.05);
Bm28.divideSegmentAtEccentric(2,0.1052631579);
Bm28.divideSegmentAtEccentric(3,0.4117647059);
// Create cone beam section
Cone = ConeSection(1, true);
// Assign new sections to segments
Bm28.SetSegmentSection(1, P_leg_large_35);
Bm28.SetSegmentSection(2, Cone);
Bm28.SetSegmentSection(3, P_leg_norm_35);
// Copy the column to three new positions
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Bm28, "Bm1");
ModelTransformer(MyModelTransformerMap).copyTranslate(Vector3d(0 m,12 m,0 m));
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Bm1, "Bm29");
MyModelTransformerMap.Add(Bm28, "Bm30");
ModelTransformer(MyModelTransformerMap).copyTranslate(Vector3d(-12 m,0 m,0 m));
// Create deck row 1
P_bracing.setDefault();
Bm31 = StraightBeam(Point(4 m,0 m,4 m), Point(4 m,0 m,10 m));
Bm32 = StraightBeam(Point(4 m,0 m,10 m), Point(12 m,0 m,4 m));
Bm33 = StraightBeam(Point(12 m,0 m,4 m), Point(18 m,0 m,10 m));
Bm34 = StraightBeam(Point(18 m,0 m,10 m), Point(24 m,0 m,4 m));
Bm35 = StraightBeam(Point(24 m,0 m,4 m), Point(27 m,0 m,10 m));
Bm36 = StraightBeam(Point(27 m,0 m,10 m), Point(27 m,0 m,4 m));
Bm37 = StraightBeam(Point(12 m,0 m,4 m), Point(12 m,0 m,10 m));
Bm38 = StraightBeam(Point(18 m,0 m,4 m), Point(18 m,0 m,10 m));
Bm39 = StraightBeam(Point(24 m,0 m,4 m), Point(24 m,0 m,10 m));
// Give offsets to diagonal bracings of deck row 1
Bm32.CurveOffset = ReparameterizedBeamCurveOffset(LinearVaryingCurveOffset(ConstantCurveOffsetAtPoint(Vector3d(0 m, 0 m, -0.195 m)), ConstantCurveOffsetAtPoint(Vector3d(0 m, 0 m, 0.295 m)), false));
Bm34.CurveOffset = ReparameterizedBeamCurveOffset(LinearVaryingCurveOffset(ConstantCurveOffsetAtPoint(Vector3d(0 m, 0 m, -0.195 m)), ConstantCurveOffsetAtPoint(Vector3d(0 m, 0 m, 0.295 m)), false));
Bm33.CurveOffset = ReparameterizedBeamCurveOffset(LinearVaryingCurveOffset(ConstantCurveOffsetAtPoint(Vector3d(0 m, 0 m, 0.295 m)), ConstantCurveOffsetAtPoint(Vector3d(0 m, 0 m, -0.195 m)), false));
Bm35.CurveOffset = ReparameterizedBeamCurveOffset(LinearVaryingCurveOffset(ConstantCurveOffsetAtPoint(Vector3d(0 m, 0 m, 0.295 m)), ConstantCurveOffsetAtPoint(Vector3d(0 m, 0 m, -0.195 m)), false));
// Copy bracings in Y-direction to deck rows 2-6
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Bm31, "Bm40");
MyModelTransformerMap.Add(Bm36, "Bm41");
MyModelTransformerMap.Add(Bm38, "Bm42");
ModelTransformer(MyModelTransformerMap).copyTranslate(Vector3d(0 m,5.5 m,0 m));
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Bm31, "Bm43");
MyModelTransformerMap.Add(Bm36, "Bm44");
MyModelTransformerMap.Add(Bm38, "Bm45");
ModelTransformer(MyModelTransformerMap).copyTranslate(Vector3d(0 m,17.5 m,0 m));
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Bm31, "Bm46");
MyModelTransformerMap.Add(Bm32, "Bm47");
MyModelTransformerMap.Add(Bm33, "Bm48");
MyModelTransformerMap.Add(Bm35, "Bm49");
MyModelTransformerMap.Add(Bm36, "Bm50");
MyModelTransformerMap.Add(Bm37, "Bm51");
MyModelTransformerMap.Add(Bm38, "Bm52");
MyModelTransformerMap.Add(Bm39, "Bm53");
ModelTransformer(MyModelTransformerMap).copyTranslate(Vector3d(0 m,11.5 m,0 m));
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Bm31, "Bm54");
MyModelTransformerMap.Add(Bm32, "Bm55");
MyModelTransformerMap.Add(Bm33, "Bm56");
MyModelTransformerMap.Add(Bm34, "Bm57");
MyModelTransformerMap.Add(Bm35, "Bm58");
MyModelTransformerMap.Add(Bm36, "Bm59");
MyModelTransformerMap.Add(Bm37, "Bm60");
MyModelTransformerMap.Add(Bm38, "Bm61");
MyModelTransformerMap.Add(Bm39, "Bm62");
ModelTransformer(MyModelTransformerMap).copyTranslate(Vector3d(0 m,23 m,0 m));
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Bm31, "Bm63");
MyModelTransformerMap.Add(Bm32, "Bm64");
MyModelTransformerMap.Add(Bm33, "Bm65");
MyModelTransformerMap.Add(Bm34, "Bm66");
MyModelTransformerMap.Add(Bm35, "Bm67");
MyModelTransformerMap.Add(Bm36, "Bm68");
MyModelTransformerMap.Add(Bm37, "Bm69");
MyModelTransformerMap.Add(Bm38, "Bm70");
MyModelTransformerMap.Add(Bm39, "Bm71");
ModelTransformer(MyModelTransformerMap).copyTranslate(Vector3d(0 m,28.5 m,0 m));
// Add bracings to protruding part of deck rows 5 and 6
Bm72 = StraightBeam(Point(0 m,17.5 m,4 m), Point(0 m,17.5 m,10 m));
Bm73 = StraightBeam(Point(0 m,23 m,4 m), Point(0 m,23 m,10 m));
Bm74 = StraightBeam(Point(0 m,28.5 m,4 m), Point(0 m,28.5 m,10 m));
Bm75 = StraightBeam(Point(4 m,17.5 m,4 m), Point(0 m,17.5 m,10 m));
Bm76 = StraightBeam(Point(4 m,23 m,4 m), Point(0 m,23 m,10 m));
Bm77 = StraightBeam(Point(4 m,28.5 m,4 m), Point(0 m,28.5 m,10 m));
Bm75.CurveOffset = ReparameterizedBeamCurveOffset(LinearVaryingCurveOffset(ConstantCurveOffsetAtPoint(Vector3d(0 m, 0 m, 0.295 m)), ConstantCurveOffsetAtPoint(Vector3d(0 m, 0 m, -0.195 m)), false));
Bm76.CurveOffset = ReparameterizedBeamCurveOffset(LinearVaryingCurveOffset(ConstantCurveOffsetAtPoint(Vector3d(0 m, 0 m, 0.295 m)), ConstantCurveOffsetAtPoint(Vector3d(0 m, 0 m, -0.195 m)), false));
Bm77.CurveOffset = ReparameterizedBeamCurveOffset(LinearVaryingCurveOffset(ConstantCurveOffsetAtPoint(Vector3d(0 m, 0 m, 0.295 m)), ConstantCurveOffsetAtPoint(Vector3d(0 m, 0 m, -0.195 m)), false));
// Create diagonal bracings of deck row A
Bm78 = StraightBeam(Point(27 m,0 m,10 m), Point(27 m,5.5 m,4 m));
Bm79 = StraightBeam(Point(27 m,5.5 m,4 m), Point(27 m,11.5 m,10 m));
Bm80 = StraightBeam(Point(27 m,11.5 m,10 m), Point(27 m,17.5 m,4 m));
Bm81 = StraightBeam(Point(27 m,17.5 m,4 m), Point(27 m,23 m,10 m));
Bm82 = StraightBeam(Point(27 m,23 m,10 m), Point(27 m,28.5 m,4 m));
Bm78.CurveOffset = ReparameterizedBeamCurveOffset(LinearVaryingCurveOffset(ConstantCurveOffsetAtPoint(Vector3d(0 m, 0 m, -0.195 m)), ConstantCurveOffsetAtPoint(Vector3d(0 m, 0 m, 0.295 m)), false));
Bm80.CurveOffset = ReparameterizedBeamCurveOffset(LinearVaryingCurveOffset(ConstantCurveOffsetAtPoint(Vector3d(0 m, 0 m, -0.195 m)), ConstantCurveOffsetAtPoint(Vector3d(0 m, 0 m, 0.295 m)), false));
Bm82.CurveOffset = ReparameterizedBeamCurveOffset(LinearVaryingCurveOffset(ConstantCurveOffsetAtPoint(Vector3d(0 m, 0 m, -0.195 m)), ConstantCurveOffsetAtPoint(Vector3d(0 m, 0 m, 0.295 m)), false));
Bm79.CurveOffset = ReparameterizedBeamCurveOffset(LinearVaryingCurveOffset(ConstantCurveOffsetAtPoint(Vector3d(0 m, 0 m, 0.295 m)), ConstantCurveOffsetAtPoint(Vector3d(0 m, 0 m, -0.195 m)), false));
Bm81.CurveOffset = ReparameterizedBeamCurveOffset(LinearVaryingCurveOffset(ConstantCurveOffsetAtPoint(Vector3d(0 m, 0 m, 0.295 m)), ConstantCurveOffsetAtPoint(Vector3d(0 m, 0 m, -0.195 m)), false));
// Copy bracings in negative X-direction to deck rows B-F
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Bm78, "Bm83");
MyModelTransformerMap.Add(Bm79, "Bm84");
MyModelTransformerMap.Add(Bm80, "Bm85");
MyModelTransformerMap.Add(Bm81, "Bm86");
MyModelTransformerMap.Add(Bm82, "Bm87");
ModelTransformer(MyModelTransformerMap).copyTranslate(Vector3d(-9 m,0 m,0 m));
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Bm78, "Bm88");
MyModelTransformerMap.Add(Bm79, "Bm89");
MyModelTransformerMap.Add(Bm80, "Bm90");
MyModelTransformerMap.Add(Bm81, "Bm91");
MyModelTransformerMap.Add(Bm82, "Bm92");
ModelTransformer(MyModelTransformerMap).copyTranslate(Vector3d(-23 m,0 m,0 m));
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Bm82, "Bm93");
ModelTransformer(MyModelTransformerMap).copyTranslate(Vector3d(-3 m,0 m,0 m));
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Bm82, "Bm94");
ModelTransformer(MyModelTransformerMap).copyTranslate(Vector3d(-15 m,0 m,0 m));
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Bm81, "Bm95");
MyModelTransformerMap.Add(Bm82, "Bm96");
ModelTransformer(MyModelTransformerMap).copyTranslate(Vector3d(-27 m,0 m,0 m));
// Define loads
// Gravity load
LC_Gravity = LoadCase();
LC_Gravity.setAcceleration(Vector3d(0 m/s^2,0 m/s^2,-9.80665 m/s^2));
LC_Gravity.includeSelfWeight();
LC_Gravity.includeStructureMassWithRotationField();
// Helideck equipment load
Helideck = PrismEquipment(15,13,10,50);
Helideck.clearFootprint();
Helideck.addToFootprint(5.5 m,7.5 m,4.5 m,6.5 m);
Helideck.addToFootprint(5.5 m,7.5 m,-6.5 m,-4.5 m);
Helideck.addToFootprint(-7.5 m,-5.5 m,4.5 m,6.5 m);
Helideck.addToFootprint(-7.5 m,-5.5 m,-6.5 m,-4.5 m);
LC_Helideck = LoadCase();
LC_Helideck.placeAtPoint(Helideck,Point(12 m,11.5 m,10 m),LocalSystem(Vector3d(1 m,0 m,0 m), Vector3d(0 m,0 m,1 m)));
autoMSet = Set();
autoMSet.clear();
autoMSet.add(LC_Helideck.equipment(Helideck));
autoMSet.moveTranslate(Vector3d(-1 m,0 m,0 m),geUNCONNECTED);
Delete(autoMSet);
// Flare tower equipment load
FlareTower = PrismEquipment(10,8,5,24);
FlareTower.centreOfGravity(Vector3d(0 m,12 m,12 m));
LC_FlareTower = LoadCase();
LC_FlareTower.placeAtPoint(FlareTower,Point(24 m,0 m,10 m),LocalSystem(Vector3d(1 m,0 m,0 m), Vector3d(0 m,0 m,1 m)));
autoMSet = Set();
autoMSet.clear();
autoMSet.add(LC_FlareTower.equipment(FlareTower));
autoMSet.moveTranslate(Vector3d(-1.5 m,0 m,0 m),geUNCONNECTED);
Delete(autoMSet);
autoMSet = Set();
autoMSet.clear();
autoMSet.add(LC_FlareTower.equipment(FlareTower));
autoMSet.moveRotate(Point(4 m,0 m,10 m),Vector3d(8 m,0 m,0 m),90,geUNCONNECTED);
Delete(autoMSet);
autoMSet = Set();
autoMSet.clear();
autoMSet.add(LC_FlareTower.equipment(FlareTower));
autoMSet.moveTranslate(Vector3d(0,0,-3),geUNCONNECTED);
Delete(autoMSet);
Flare_tower_load = LoadInterface();
Flare_tower_load.addEquipment(FlareTower, LC_FlareTower);
Flare_tower_load.add(Bm6);
Flare_tower_load.add(Bm19);
Flare_tower_load.add(Bm36);
Flare_tower_load.add(Bm38);
Flare_tower_load.addEquipment(FlareTower, LC_FlareTower);
// Load combination
LC_total = LoadCombination();
LC_total.addCase(LC_Gravity, 1);
LC_total.addCase(LC_Helideck, 1.3);
LC_total.addCase(LC_FlareTower, 1.3);
LC_total.convertLoadToMass = false;
LC_total.EquipmentRep = EquipmentAsLineLoads;
// Boundary conditions
Sp1 = SupportPoint(Point(24 m,5.5 m,0 m));
Sp2 = SupportPoint(Point(12 m,5.5 m,0 m));
Sp3 = SupportPoint(Point(12 m,17.5 m,0 m));
Sp4 = SupportPoint(Point(24 m,17.5 m,0 m));
//
// The 2nd js file starts here
//
// Explode the beams connected to the joint
SetNoLoadcase();
Validate(Bm5.primitivePartCount == 4);
Bm5.explode(IndexedNameMask(97));
Validate(Bm97);
Validate(Bm98);
Validate(Bm99);
Validate(Bm100);
Validate(Bm13.primitivePartCount == 5);
Bm13.explode(IndexedNameMask(101));
Validate(Bm101);
Validate(Bm102);
Validate(Bm103);
Validate(Bm104);
Validate(Bm105);
Validate(Bm28.primitivePartCount == 5);
Bm28.explode(IndexedNameMask(106));
Validate(Bm106);
Validate(Bm107);
Validate(Bm108);
Validate(Bm109);
Validate(Bm110);
// Divided beams at their midpoints
Bm5 = Bm101.divideAtEccentric(0.5);
Bm13 = Bm99.divideAtEccentric(0.5);
Bm28 = Bm100.divideAtEccentric(0.5);
Bm111 = Bm102.divideAtEccentric(0.5);
Bm112 = Bm110.divideAtEccentric(0.5);
// Change section for part of the tube
Bm110.section = P_leg_norm_35;
// Convert beams to plate/shell model
StructureConverter = StructureToPlateUtility();
StructureConverter.ConvertBeam(Bm100);
StructureConverter.ConvertBeam(Bm102);
StructureConverter.ConvertBeam(Bm106);
StructureConverter.ConvertBeam(Bm108);
StructureConverter.ConvertBeam(Bm109);
StructureConverter.ConvertBeam(Bm110);
StructureConverter.ConvertBeam(Bm13);
StructureConverter.ConvertBeam(Bm5);
// Delete superfluous support rigid links
Delete(Sp5);
Delete(Sp8);
Delete(Sp9);
Delete(Sp10);
// Delete cone beam
Delete(Bm107);
// Create guide curves for cone and then create cone
Tck3.setDefault();
Curve1 = GuideNURBS(ModelCurve(Point(23.55275496 m,5.052754961 m,0.5 m), Point(24 m,4.8675 m,0.5 m), Point(24.44724504 m,5.052754961 m,0.5 m), Point(24.5843538 m,5.257952729 m,0.5 m), Point(24.6325 m,5.5 m,0.5 m), Point(24.5843538 m,5.742047271 m,0.5 m), Point(24.44724504 m,5.947245039 m,0.5 m), Point(24 m,6.1325 m,0.5 m), Point(23.55275496 m,5.947245039 m,0.5 m), Point(23.3675 m,5.5 m,0.5 m), Point(23.55275496 m,5.052754961 m,0.5 m)));
Curve2 = GuideNURBS(ModelCurve(Point(24.27046834 m,5.229531656 m,1.5 m), Point(24.3825 m,5.5 m,1.5 m), Point(24.27046834 m,5.770468344 m,1.5 m), Point(24.14637641 m,5.853383921 m,1.5 m), Point(24 m,5.8825 m,1.5 m), Point(23.85362359 m,5.853383921 m,1.5 m), Point(23.72953166 m,5.770468344 m,1.5 m), Point(23.6175 m,5.5 m,1.5 m), Point(23.72953166 m,5.229531656 m,1.5 m), Point(24 m,5.1175 m,1.5 m), Point(24.27046834 m,5.229531656 m,1.5 m)));
Pl1 = SkinCurves(Array(Curve1, Curve2));
// Replace support point by two 180-degree support curves
Sc1 = SupportCurve(GuideNURBS(ModelCurve(Point(24.44724504 m,5.052754961 m,0 m), Point(24.6325 m,5.5 m,0 m), Point(24.44724504 m,5.947245039 m,0 m), Point(24.24204727 m,6.084353804 m,0 m), Point(24 m,6.1325 m,0 m), Point(23.75795273 m,6.084353804 m,0 m), Point(23.55275496 m,5.947245039 m,0 m))));
Sc1.localSystemRule = ConstantLocalSystem(LocalSystem(Vector3d(1 m,0 m,0 m), Vector3d(0 m,0 m,1 m)));
Sc2 = SupportCurve(GuideNURBS(ModelCurve(Point(23.55275496 m,5.947245039 m,0 m), Point(23.3675 m,5.5 m,0 m), Point(23.55275496 m,5.052754961 m,0 m), Point(24 m,4.8675 m,0 m), Point(24.44724504 m,5.052754961 m,0 m))));
Sc2.localSystemRule = ConstantLocalSystem(LocalSystem(Vector3d(1 m,0 m,0 m), Vector3d(0 m,0 m,1 m)));
Delete(Sp1);
// Delete parts of I-beams inside cylinder
Validate(Bm100_segment1_1.primitivePartCount == 6);
Bm100_segment1_1.explode(IndexedNameMask(2));
Validate(Pl2);
Validate(Pl3);
Validate(Pl4);
Validate(Pl5);
Validate(Pl6);
Validate(Pl7);
Validate(Bm100_segment1_2.primitivePartCount == 4);
Bm100_segment1_2.explode(IndexedNameMask(8));
Validate(Pl8);
Validate(Pl9);
Validate(Pl10);
Validate(Pl11);
Validate(Bm100_segment1_3.primitivePartCount == 6);
Bm100_segment1_3.explode(IndexedNameMask(12));
Validate(Pl12);
Validate(Pl13);
Validate(Pl14);
Validate(Pl15);
Validate(Pl16);
Validate(Pl17);
Validate(Bm102_segment1_1.primitivePartCount == 5);
Bm102_segment1_1.explode(IndexedNameMask(18));
Validate(Pl18);
Validate(Pl19);
Validate(Pl20);
Validate(Pl21);
Validate(Pl22);
Validate(Bm102_segment1_2.primitivePartCount == 4);
Bm102_segment1_2.explode(IndexedNameMask(23));
Validate(Pl23);
Validate(Pl24);
Validate(Pl25);
Validate(Pl26);
Validate(Bm102_segment1_3.primitivePartCount == 5);
Bm102_segment1_3.explode(IndexedNameMask(27));
Validate(Pl27);
Validate(Pl28);
Validate(Pl29);
Validate(Pl30);
Validate(Pl31);
Validate(Bm13_segment1_1.primitivePartCount == 5);
Bm13_segment1_1.explode(IndexedNameMask(32));
Validate(Pl32);
Validate(Pl33);
Validate(Pl34);
Validate(Pl35);
Validate(Pl36);
Validate(Bm13_segment1_2.primitivePartCount == 4);
Bm13_segment1_2.explode(IndexedNameMask(37));
Validate(Pl37);
Validate(Pl38);
Validate(Pl39);
Validate(Pl40);
Validate(Bm13_segment1_3.primitivePartCount == 5);
Bm13_segment1_3.explode(IndexedNameMask(41));
Validate(Pl41);
Validate(Pl42);
Validate(Pl43);
Validate(Pl44);
Validate(Pl45);
Validate(Bm5_segment1_1.primitivePartCount == 4);
Bm5_segment1_1.explode(IndexedNameMask(46));
Validate(Pl46);
Validate(Pl47);
Validate(Pl48);
Validate(Pl49);
Validate(Bm5_segment1_2.primitivePartCount == 4);
Bm5_segment1_2.explode(IndexedNameMask(50));
Validate(Pl50);
Validate(Pl51);
Validate(Pl52);
Validate(Pl53);
Validate(Bm5_segment1_3.primitivePartCount == 4);
Bm5_segment1_3.explode(IndexedNameMask(54));
Validate(Pl54);
Validate(Pl55);
Validate(Pl56);
Validate(Pl57);
Delete(Pl15);
Delete(Pl20);
Delete(Pl30);
Delete(Pl34);
Delete(Pl40);
Delete(Pl43);
Delete(Pl53);
Delete(Pl5);
Delete(Pl2);
Delete(Pl3);
Delete(Pl4);
Delete(Pl8);
Delete(Pl9);
Delete(Pl14);
Delete(Pl13);
Delete(Pl12);
Delete(Pl21);
Delete(Pl19);
Delete(Pl23);
Delete(Pl24);
Delete(Pl28);
Delete(Pl29);
Delete(Pl36);
Delete(Pl35);
Delete(Pl39);
Delete(Pl44);
Delete(Pl45);
Delete(Pl47);
Delete(Pl48);
Delete(Pl52);
Delete(Pl56);
Delete(Pl55);
// Add plates to strengthen joint
Tck1.setDefault();
Pl2 = Plate(Point(22.7,4.2,4.2825),Point(25.3,4.2,4.2825),Point(25.3,6.8,4.2825),Point(22.7,6.8,4.2825));
Validate(Pl2.primitivePartCount == 5);
Pl2.explode(IndexedNameMask(58));
Validate(Pl58);
Validate(Pl59);
Validate(Pl60);
Validate(Pl61);
Validate(Pl62);
Delete(Pl60);
Point1 = Point(22.7 m,4.2 m,4.2825 m);
Point2 = Point1.copyTranslate(Vector3d(1,0,0));
Curve7 = CreateCircleFromCenterAndRadius(Point(22.7 m,4.2 m,4.2825 m), Point(23.7 m,4.2 m,4.2825 m), Point(22.7 m,5.35 m,4.2825 m));
Pl3 = Pl58.divide(Curve7);
Delete(Pl58);
Curve8 = Curve7.copyTranslate(Vector3d(2.6 m,0 m,0 m));
Curve9 = Curve7.copyTranslate(Vector3d(2.6 m,2.6 m,0 m));
Curve10 = Curve7.copyTranslate(Vector3d(0 m,2.6 m,0 m));
Pl4 = Pl61.divide(Curve8);
Delete(Pl4);
Pl4 = Pl62.divide(Curve9);
Delete(Pl4);
Pl4 = Pl59.divide(Curve10);
Delete(Pl59);
Pl54.flipNormal();
Pl17.flipNormal();
Pl16.flipNormal();
Pl27.flipNormal();
Pl31.flipNormal();
Pl41.flipNormal();
Pl42.flipNormal();
Pl57.flipNormal();
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Pl3, "Pl5");
MyModelTransformerMap.Add(Pl4, "Pl8");
MyModelTransformerMap.Add(Pl61, "Pl9");
MyModelTransformerMap.Add(Pl62, "Pl12");
ModelTransformer(MyModelTransformerMap).copyTranslate(Vector3d(0 m,0 m,-0.565 m));
Pl49.flipNormal();
Pl6.flipNormal();
Pl7.flipNormal();
Pl22.flipNormal();
Pl18.flipNormal();
Pl32.flipNormal();
Pl33.flipNormal();
Pl46.flipNormal();
Pl54.join(Pl57);
Pl54.join(Pl61);
Pl54.join(Pl16);
Pl54.join(Pl17);
Pl54.join(Pl62);
Pl54.join(Pl31);
Pl54.join(Pl27);
Pl54.join(Pl4);
Pl54.join(Pl42);
Pl54.join(Pl41);
Pl54.join(Pl3);
Pl54.simplifyTopology();
Pl49.join(Pl9);
Pl49.join(Pl6);
Pl49.join(Pl7);
Pl49.join(Pl12);
Pl49.join(Pl22);
Pl49.join(Pl18);
Pl49.join(Pl8);
Pl49.join(Pl33);
Pl49.join(Pl32);
Pl49.join(Pl46);
Pl49.join(Pl5);
Pl49.simplifyTopology();
// Create mesh property and assign this to plates/shells
MeshProperty1 = MeshDensity(0.15);
Pl10.meshDensity = MeshProperty1;
Pl25.meshDensity = MeshProperty1;
Pl49.meshDensity = MeshProperty1;
Pl54.meshDensity = MeshProperty1;
Pl11.meshDensity = MeshProperty1;
Pl26.meshDensity = MeshProperty1;
Pl37.meshDensity = MeshProperty1;
Pl38.meshDensity = MeshProperty1;
Pl50.meshDensity = MeshProperty1;
Pl51.meshDensity = MeshProperty1;
Sc1.meshDensity = MeshProperty1;
Sc2.meshDensity = MeshProperty1;
Bm106_segment1.meshDensity = MeshProperty1;
Bm108_segment1.meshDensity = MeshProperty1;
Bm109_segment1.meshDensity = MeshProperty1;
Bm110_segment1.meshDensity = MeshProperty1;
Pl1.meshDensity = MeshProperty1;
// Run static analysis
Analysis1 = Analysis(true);
Analysis1.add(MeshActivity());
Analysis1.add(LinearAnalysis());
Analysis1.step(2).useSestra10(true);
Analysis1.add(LoadResultsActivity());
Analysis1.setActive();
SimplifyTopology();
Analysis1.execute();
