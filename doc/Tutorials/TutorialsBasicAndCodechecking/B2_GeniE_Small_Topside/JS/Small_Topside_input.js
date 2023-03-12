// Small topside tutorial
//
GenieRules.Tolerances.useTolerantModelling = true;
GenieRules.Tolerances.angleTolerance = 2 deg;
GenieRules.Compatibility.version = "V7.13-11";
GenieRules.Meshing.autoSimplifyTopology = true;
GenieRules.Meshing.eliminateInternalEdges = true;
GenieRules.BeamCreation.DefaultCurveOffset = ReparameterizedBeamCurveOffset();
GenieRules.Transformation.DefaultConnectedCopy = false;
//
// First read SectAndMat.js containing sections, thicknesses and materials
//
// Cross section library
// Units kg, Newton, Metres
//
Bar100 = BarSection(0.1,0.03);
//
//
ISEC100 = ISection(0.1,0.1,0.015,0.02);
I200 = ISection(0.2,0.2,0.015,0.02);
I400 = ISection(0.4,0.4,0.015,0.02);
I600 = ISection(0.6,0.6,0.015,0.02);
I800 = ISection(0.8,0.8,0.015,0.02);
I1000 = ISection(1.0,1.0,0.015,0.02);
I1200 = ISection(1.2,1.2,0.015,0.02);
I1400 = ISection(1.4,1.4,0.015,0.02);
//
Pipe200 = PipeSection(0.2,0.02);
Pipe400 = PipeSection(0.4,0.02);
Pipe600 = PipeSection(0.6,0.02);
Pipe800 = PipeSection(0.8,0.02);
Pipe1000 = PipeSection(1.0,0.02);
Pipe1200 = PipeSection(1.2,0.02);
//
// Material library
// Units kg, Newton, Metres
//
St37 = Material(215E6, 7.85E3, 2.1E11, 0.3, 1.2E-5, 0.03);
St44 = Material(255E6, 7.85E3, 2.1E11, 0.3, 1.2E-5, 0.03);
St52 = Material(335E6, 7.85E3, 2.1E11, 0.3, 1.2E-5, 0.03);
//
S235 = Material(215E6, 7.85E3, 2.1E11, 0.3, 1.2E-5, 0.03);
S275 = Material(255E6, 7.85E3, 2.1E11, 0.3, 1.2E-5, 0.03);
S355 = Material(355E6, 7.85E3, 2.1E11, 0.3, 1.2E-5, 0.03);
//
S275N_NL = Material(235E6, 7.85E3, 2.1E11, 0.3, 1.2E-5, 0.03);
S355N_NL = Material(335E6, 7.85E3, 2.1E11, 0.3, 1.2E-5, 0.03);
S420N_NL = Material(390E6, 7.85E3, 2.1E11, 0.3, 1.2E-5, 0.03);
S460N_NL = Material(430E6, 7.85E3, 2.1E11, 0.3, 1.2E-5, 0.03);
//
Th01 = Thickness( 0.01 );
Th02 = Thickness( 0.02 );
Th03 = Thickness( 0.03 );
Th04 = Thickness( 0.04 );
Th05 = Thickness( 0.05 );
//
GlobXz = LocalSystem( Vector3d(1,0,0), Vector3d(1,0,1));
//
X_vect = Vector3d(1,0,0);
Y_vect = Vector3d(0,1,0);
Z_vect = Vector3d(0,0,1);
//
I200.setdefault();
Th04.setdefault();
St52.setdefault();
//
// Create main support fram guide plane
MSF_gp = GuidePlane(Point(0,0,-3),Point(15,0,-3),Point(15,0,0),Point(0,0,0),6,1,1,1,1,1,1,1,1);
MSF_gp.snapmode = true;
// Create beams of main support frame
Bm1 = StraightBeam(Point(0 m,0 m,0 m), Point(2.5 m,0 m,-3 m));
Bm2 = StraightBeam(Point(2.5 m,0 m,-3 m), Point(12.5 m,0 m,-3 m));
Bm3 = StraightBeam(Point(12.5 m,0 m,-3 m), Point(15 m,0 m,0 m));
Bm4 = StraightBeam(Point(15 m,0 m,0 m), Point(0 m,0 m,0 m));
ISEC100.setDefault();
Bm5 = StraightBeam(Point(2.5 m,0 m,-3 m), Point(5 m,0 m,0 m));
Bm6 = StraightBeam(Point(5 m,0 m,0 m), Point(7.5 m,0 m,-3 m));
Bm7 = StraightBeam(Point(7.5 m,0 m,-3 m), Point(10 m,0 m,0 m));
Bm8 = StraightBeam(Point(10 m,0 m,0 m), Point(12.5 m,0 m,-3 m));
// Copy the frame 10 m in Y-direction
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Bm1, "Bm9");
MyModelTransformerMap.Add(Bm2, "Bm10");
MyModelTransformerMap.Add(Bm3, "Bm11");
MyModelTransformerMap.Add(Bm4, "Bm12");
MyModelTransformerMap.Add(Bm5, "Bm13");
MyModelTransformerMap.Add(Bm6, "Bm14");
MyModelTransformerMap.Add(Bm7, "Bm15");
MyModelTransformerMap.Add(Bm8, "Bm16");
ModelTransformer(MyModelTransformerMap).copyTranslate(Vector3d(0,10,0));
GuidePlane2 = MSF_gp.copyTranslate(Vector3d(0,10,0));
// Create horizontal transverse beams connecting the two frames
I200.setDefault();
Bm17 = StraightBeam(Point(0 m,0 m,0 m), Point(0 m,10 m,0 m));
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Bm17, "Bm18");
ModelTransformer(MyModelTransformerMap).copyTranslate(Vector3d(2.5 m,0 m,0 m), 6);
// Copy the top horizontal beam of the support frame 5 m in Y-direction
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Bm4, "Bm24");
ModelTransformer(MyModelTransformerMap).copyTranslate(Vector3d(0,5,0));
// Create the diamond shaped beams
Bm25 = StraightBeam(Point(0 m,5 m,0 m), Point(7.5 m,0 m,0 m));
Bm26 = StraightBeam(Point(7.5 m,0 m,0 m), Point(15 m,5 m,0 m));
Bm27 = StraightBeam(Point(15 m,5 m,0 m), Point(7.5 m,10 m,0 m));
Bm28 = StraightBeam(Point(7.5 m,10 m,0 m), Point(0 m,5 m,0 m));
// Add a plate and copy the plate twice
Pl1 = Plate(Point(0 m,0 m,0 m),Point(5 m,0 m,0 m),Point(5 m,10 m,0 m),Point(0 m,10 m,0 m));
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Pl1, "Pl2");
ModelTransformer(MyModelTransformerMap).copyTranslate(Vector3d(5 m,0 m,0 m), 2);
// Flush stiffener beams with deck plate
Bm4.CurveOffset = AlignedCurveOffset(frFlushTop, 0 m);
Bm12.CurveOffset = AlignedCurveOffset(frFlushTop, 0 m);
Bm24.CurveOffset = AlignedCurveOffset(frFlushTop, 0 m);
Bm25.CurveOffset = AlignedCurveOffset(frFlushTop, 0 m);
Bm26.CurveOffset = AlignedCurveOffset(frFlushTop, 0 m);
Bm27.CurveOffset = AlignedCurveOffset(frFlushTop, 0 m);
Bm28.CurveOffset = AlignedCurveOffset(frFlushTop, 0 m);
Bm19.CurveOffset = AlignedCurveOffset(frFlushTop, 0 m);
Bm18.CurveOffset = AlignedCurveOffset(frFlushTop, 0 m);
Bm17.CurveOffset = AlignedCurveOffset(frFlushTop, 0 m);
Bm23.CurveOffset = AlignedCurveOffset(frFlushTop, 0 m);
Bm22.CurveOffset = AlignedCurveOffset(frFlushTop, 0 m);
Bm21.CurveOffset = AlignedCurveOffset(frFlushTop, 0 m);
Bm20.CurveOffset = AlignedCurveOffset(frFlushTop, 0 m);
// Copy two transverse beams in negative X-direction to extend the deck
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Bm17, "Bm29");
MyModelTransformerMap.Add(Bm18, "Bm30");
MyModelTransformerMap.Add(Pl1, "Pl4");
ModelTransformer(MyModelTransformerMap).copyTranslate(Vector3d(-5 m,0 m,0 m));
// Extend beams to further extend the deck
Bm17.extendEnd(1, 3);
Bm29.extendEnd(1, 3);
Bm4.extendEnd(2, 5);
Bm12.extendEnd(2, 5);
Bm24.extendEnd(2, 5);
// Add beams
Bm31 = StraightBeam(Point(-5 m,-3 m,0 m), Point(0 m,-3 m,0 m));
Bm32 = StraightBeam(Point(-5 m,-3 m,0 m), Point(-2.5 m,0 m,0 m));
Bm33 = StraightBeam(Point(-2.5 m,0 m,0 m), Point(0 m,-3 m,0 m));
// Add plate to the extension
Pl5 = Plate(Point(-5 m,-3 m,0 m),Point(0 m,-3 m,0 m),Point(0 m,0 m,0 m),Point(-5 m,0 m,0 m));
// Flush stiffener beams with deck plate
Bm31.CurveOffset = AlignedCurveOffset(frFlushTop, 0 m);
Bm32.CurveOffset = AlignedCurveOffset(frFlushTop, 0 m);
Bm33.CurveOffset = AlignedCurveOffset(frFlushTop, 0 m);
// Create sets
FrameA = Set();
FrameA.add(Bm1);
FrameA.add(Bm2);
FrameA.add(Bm3);
FrameA.add(Bm4);
FrameA.add(Bm5);
FrameA.add(Bm6);
FrameA.add(Bm7);
FrameA.add(Bm8);
FrameB = Set();
FrameB.add(Bm10);
FrameB.add(Bm11);
FrameB.add(Bm12);
FrameB.add(Bm13);
FrameB.add(Bm14);
FrameB.add(Bm15);
FrameB.add(Bm16);
FrameB.add(Bm9);
L_Deck = Set();
L_Deck.add(Pl1);
L_Deck.add(Pl2);
L_Deck.add(Pl3);
L_Deck.add(Pl4);
L_Deck.add(Pl5);
// Copy lower deck to make upper deck
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Bm4, "Bm34");
MyModelTransformerMap.Add(Bm12, "Bm35");
MyModelTransformerMap.Add(Bm17, "Bm36");
MyModelTransformerMap.Add(Bm18, "Bm37");
MyModelTransformerMap.Add(Bm19, "Bm38");
MyModelTransformerMap.Add(Bm20, "Bm39");
MyModelTransformerMap.Add(Bm21, "Bm40");
MyModelTransformerMap.Add(Bm22, "Bm41");
MyModelTransformerMap.Add(Bm23, "Bm42");
MyModelTransformerMap.Add(Bm25, "Bm43");
MyModelTransformerMap.Add(Bm26, "Bm44");
MyModelTransformerMap.Add(Bm27, "Bm45");
MyModelTransformerMap.Add(Bm28, "Bm46");
MyModelTransformerMap.Add(Pl1, "Pl6");
MyModelTransformerMap.Add(Pl2, "Pl7");
MyModelTransformerMap.Add(Pl3, "Pl8");
ModelTransformer(MyModelTransformerMap).copyTranslate(Vector3d(0,0,5));
// Shorten three beams
Bm34.extendEnd(2, -5);
Bm35.extendEnd(2, -5);
Bm36.extendEnd(1, -3);
// Create a set for the upper deck plates
U_Deck = Set();
U_Deck.add(Pl6);
U_Deck.add(Pl7);
U_Deck.add(Pl8);
// Create columns and diagonal bracings
Bm47 = StraightBeam(Point(0 m,0 m,0 m), Point(0 m,0 m,5 m));
Bm48 = StraightBeam(Point(5 m,0 m,0 m), Point(5 m,0 m,5 m));
Bm49 = StraightBeam(Point(10 m,0 m,0 m), Point(10 m,0 m,5 m));
Bm50 = StraightBeam(Point(15 m,0 m,0 m), Point(15 m,0 m,5 m));
Bm51 = StraightBeam(Point(15 m,10 m,0 m), Point(15 m,10 m,5 m));
Bm52 = StraightBeam(Point(0 m,10 m,0 m), Point(0 m,10 m,5 m));
Bm53 = StraightBeam(Point(5 m,0 m,0 m), Point(0 m,0 m,5 m));
Bm54 = StraightBeam(Point(10 m,0 m,0 m), Point(15 m,0 m,5 m));
Bm55 = StraightBeam(Point(15 m,10 m,0 m), Point(15 m,0 m,5 m));
// Create vertical plate
Th03.setDefault();
Pl9 = Plate(Point(0 m,10 m,0 m),Point(15 m,10 m,0 m),Point(15 m,10 m,5 m),Point(0 m,10 m,5 m));
Sp1 = SupportPoint(Point(2.5 m,0 m,-3 m));
Sp2 = SupportPoint(Point(12.5 m,0 m,-3 m));
Sp3 = SupportPoint(Point(12.5 m,10 m,-3 m));
Sp4 = SupportPoint(Point(2.5 m,10 m,-3 m));
// Add boundary conditions
Sp1.boundary = BoundaryCondition(Fixed, Fixed, Fixed, Free, Free, Free);
Sp2.boundary = BoundaryCondition(Fixed, Fixed, Fixed, Free, Free, Free);
Sp3.boundary = BoundaryCondition(Fixed, Fixed, Fixed, Free, Free, Free);
Sp4.boundary = BoundaryCondition(Fixed, Fixed, Fixed, Free, Free, Free);
// Create load cases
LC_Grav = LoadCase();
LC_eqpm = LoadCase();
LC_list = LoadCase();
LC_expl = LoadCase();
// Gravity load case
LC_Grav.setAcceleration(Vector3d(0 m/s^2,0 m/s^2,-9.80665 m/s^2));
LC_Grav.includeSelfWeight();
LC_Grav.includeStructureMassWithRotationField();
// Equipment load case
Generator = PrismEquipment(4,2,2,50 tonne);
OilTank = PrismEquipment(3,3,3,20 tonne);
LC_eqpm.setCurrent();
LC_eqpm.placeAtPoint(Generator,Point(-2.5 m,0 m,0 m),LocalSystem(Vector3d(1 m,0 m,0 m), Vector3d(0 m,0 m,1 m)));
LC_eqpm.placeAtPoint(OilTank,Point(10 m,8.333333333 m,0 m),LocalSystem(Vector3d(1 m,0 m,0 m), Vector3d(0 m,0 m,1 m)));
LC_eqpm.placeAtPoint(Generator, Point(-2.5 m,0 m,0 m), LocalSystem(Vector3d(0 m,1 m,0 m), Vector3d(0 m,0 m,1 m)));
// Weight list load case
WeightList("weight_list_with_size.xml");
dimension.createEquipment();
LC_list.setCurrent();
LC_list.placeBBox(HPumpA);
LC_list.placeBBox(HPumpB);
LC_list.placeBBox(HPumpC);
LC_list.placeBBox(HPumpD);
LC_list.placeBBox(LPumpA);
LC_list.placeBBox(LPumpB);
LC_list.placeBBox(LPumpC);
LC_list.placeBBox(LPumpD);
LC_list.placeBBox(MiscA);
LC_list.placeBBox(MiscB);
LC_list.placeBBox(MiscC);
LC_list.placeBBox(MiscD);
// Explicit loads
LC_expl.setCurrent();
PLoad1 = PointLoad(LC_expl, FootprintPoint(Point(5 m,0 m,5 m)), PointForceMoment(Vector3d(0 N, 0 N, -10000 N), Vector3d(0 N*m, 0 N*m, 0 N*m)));
LLoad1 = LineLoad(LC_expl, FootprintLine(Point(15 m,0 m,5 m), Point(15 m,10 m,5 m)), Component1dLinear(Vector3d(0 N/m, 0 N/m, -5000 N/m), Vector3d(0 N/m, 0 N/m, -5000 N/m)));
SLoad1 = SurfaceLoad(LC_expl, FootprintPolygon(Point(0 m,0 m,0 m), Point(5 m,0 m,0 m), Point(5 m,10 m,0 m), Point(0 m,10 m,0 m)), Pressure2dConstant(-2000 Pa));
// Load combination
Comb = LoadCombination();
Comb.addCase(LC_Grav, 1.2);
Comb.addCase(LC_eqpm, 1.2);
Comb.addCase(LC_list, 1);
Comb.addCase(LC_expl, 1.3);
Comb.convertLoadToMass = false;
Comb.EquipmentRep = EquipmentAsLineLoads;
// Analysis
Analysis1 = Analysis(true);
Analysis1.add(MeshActivity());
Analysis1.add(LinearAnalysis());
Analysis1.step(2).useSestra10(true);
Analysis1.add(LoadResultsActivity());
Analysis1.setActive();
Analysis1.step(1).step(1).execute();
Analysis1.step(1).step(2).execute();
SimplifyTopology();
Analysis1.step(1).step(4).execute();
Analysis1.step(2).execute();
Analysis1.step(3).execute();
