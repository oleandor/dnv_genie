//Exported using: GeniE D5.0-07 started 12-Jun-2009 15:13:08
//Units
GenieRules.Units.setInputUnit(Angle, "deg");

//***** PROPERTIES *****//
//Sections
Flatbar_250_20 = BarSection(0.02 m, 0.25 m);
// NVS lib : 500x300x20 NS-EN 10210
HFRHS500X300X20 = BoxSection(0.5 m, 0.3 m, 0.02 m, 0.02 m);
HFRHS500X300X20.description = "NVS lib : 500x300x20 NS-EN 10210";
// NVS lib : 250x6 NS-EN 10210
HFSHS250X6 = BoxSection(0.25 m, 0.25 m, 0.006 m, 0.006 m);
HFSHS250X6.description = "NVS lib : 250x6 NS-EN 10210";
// NVS lib : 300x8 NS-EN 10210
HFSHS300X8 = BoxSection(0.3 m, 0.3 m, 0.008 m, 0.008 m);
HFSHS300X8.description = "NVS lib : 300x8 NS-EN 10210";
// NVS lib : 400x20 NS-EN 10210
HFSHS400X20 = BoxSection(0.4 m, 0.4 m, 0.02 m, 0.02 m);
HFSHS400X20.description = "NVS lib : 400x20 NS-EN 10210";
// TYPE 134 xx Ixa-L InexaNJA-Angles
Ixa_L250x90x10x15 = LSection(0.25 m, 0.09 m, 0.0105 m, 0.015 m);
Ixa_L250x90x10x15.description = "TYPE 134 xx Ixa-L InexaNJA-Angles";
// TYPE 134 xx Ixa-L InexaNJA-Angles
Ixa_L300x100x12x16 = LSection(0.3 m, 0.1 m, 0.0115 m, 0.016 m);
Ixa_L300x100x12x16.description = "TYPE 134 xx Ixa-L InexaNJA-Angles";
// TYPE 134 xx Ixa-L InexaNJA-Angles
Ixa_L350x120x10x16 = LSection(0.35 m, 0.12 m, 0.0105 m, 0.016 m);
Ixa_L350x120x10x16.description = "TYPE 134 xx Ixa-L InexaNJA-Angles";
// TYPE 134 xx Ixa-L InexaNJA-Angles
Ixa_L400x120x12x23 = LSection(0.4 m, 0.12 m, 0.0115 m, 0.023 m);
Ixa_L400x120x12x23.description = "TYPE 134 xx Ixa-L InexaNJA-Angles";
// TYPE 137 xx Ixa-L InexaLargeAngles
Ixa_L450x120x12x25 = LSection(0.45 m, 0.12 m, 0.012 m, 0.025 m);
Ixa_L450x120x12x25.description = "TYPE 137 xx Ixa-L InexaLargeAngles";
// AISC lib : MC250X50
MC250X50 = ChannelSection(0.254 m, 0.104 m, 0.0146 m, 0.0146 m);
MC250X50.description = "AISC lib : MC250X50";
// AISC lib : MC460X86
MC460X86 = ChannelSection(0.457 m, 0.107 m, 0.0178 m, 0.0159 m);
MC460X86.description = "AISC lib : MC460X86";
// NVS lib : 457x40 NS-EN 10210/10219
OD457X40 = PipeSection(0.457 m, 0.04 m);
OD457X40.description = "NVS lib : 457x40 NS-EN 10210/10219";
// NVS lib : 508x8 NS-EN 10210/10219
OD508X8 = PipeSection(0.508 m, 0.008 m);
OD508X8.description = "NVS lib : 508x8 NS-EN 10210/10219";
// NVS lib : 610x8 NS-EN 10210/10219
OD610X8 = PipeSection(0.61 m, 0.02 m);
OD610X8.description = "NVS lib : 610x8 NS-EN 10210/10219";
// NVS lib : 762x50 NS-EN 10210/10219
OD762X50 = PipeSection(0.762 m, 0.05 m);
OD762X50.description = "NVS lib : 762x50 NS-EN 10210/10219";
// NVS lib : 813x30 NS-EN 10210/10219
OD813X30 = PipeSection(0.813 m, 0.03 m);
OD813X30.description = "NVS lib : 813x30 NS-EN 10210/10219";
// NVS lib : 914x30 NS-EN 10210/10219
OD914X30 = PipeSection(0.914 m, 0.03 m);
OD914X30.description = "NVS lib : 914x30 NS-EN 10210/10219";
// AISC lib : W1000X350
W1000X350 = ISection(1.008 m, 0.302 m, 0.0211 m, 0.04 m);
W1000X350.description = "AISC lib : W1000X350";
// AISC lib : W200X100
W200X100 = ISection(0.229 m, 0.21 m, 0.0145 m, 0.0237 m);
W200X100.description = "AISC lib : W200X100";
// AISC lib : W250X101
W250X101 = ISection(0.264 m, 0.257 m, 0.0119 m, 0.0196 m);
W250X101.description = "AISC lib : W250X101";
// AISC lib : W310X107
W310X107 = ISection(0.311 m, 0.306 m, 0.0109 m, 0.017 m);
W310X107.description = "AISC lib : W310X107";
// AISC lib : W360X101
W360X101 = ISection(0.357 m, 0.255 m, 0.0105 m, 0.0183 m);
W360X101.description = "AISC lib : W360X101";
// AISC lib : W410X100
W410X100 = ISection(0.415 m, 0.26 m, 0.01 m, 0.0169 m);
W410X100.description = "AISC lib : W410X100";
// AISC lib : W460X106
W460X106 = ISection(0.469 m, 0.194 m, 0.0126 m, 0.0206 m);
W460X106.description = "AISC lib : W460X106";
// AISC lib : W530X101
W530X101 = ISection(0.537 m, 0.21 m, 0.0109 m, 0.0174 m);
W530X101.description = "AISC lib : W530X101";
// AISC lib : W610X101
W610X101 = ISection(0.603 m, 0.228 m, 0.0105 m, 0.0149 m);
W610X101.description = "AISC lib : W610X101";
// AISC lib : W690X125
W690X125 = ISection(0.678 m, 0.253 m, 0.0117 m, 0.0163 m);
W690X125.description = "AISC lib : W690X125";
// AISC lib : W690X548
W690X548 = ISection(0.772 m, 0.372 m, 0.0351 m, 0.063 m);
W690X548.description = "AISC lib : W690X548";
// AISC lib : W760X134
W760X134 = ISection(0.75 m, 0.264 m, 0.0119 m, 0.0155 m);
W760X134.description = "AISC lib : W760X134";
// AISC lib : W760X582
W760X582 = ISection(0.843 m, 0.396 m, 0.0345 m, 0.062 m);
W760X582.description = "AISC lib : W760X582";
// AISC lib : W840X176
W840X176 = ISection(0.835 m, 0.292 m, 0.014 m, 0.0188 m);
W840X176.description = "AISC lib : W840X176";
// AISC lib : W840X576
W840X576 = ISection(0.913 m, 0.411 m, 0.032 m, 0.0579 m);
W840X576.description = "AISC lib : W840X576";
// AISC lib : W920X201
W920X201 = ISection(0.903 m, 0.304 m, 0.0152 m, 0.0201 m);
W920X201.description = "AISC lib : W920X201";
// AISC lib : W920X967
W920X967 = ISection(1.028 m, 0.446 m, 0.05 m, 0.0899 m);
W920X967.description = "AISC lib : W920X967";

//Materials
S235 = MaterialLinear(215000000 Pa, 7850 Kg/m^3, 2.1e+011 Pa, 0.3, 1.2e-005 delC^-1, 0.03 N*s/m);
S275 = MaterialLinear(255000000 Pa, 7850 Kg/m^3, 2.1e+011 Pa, 0.3, 1.2e-005 delC^-1, 0.03 N*s/m);
S355 = MaterialLinear(355000000 Pa, 7850 Kg/m^3, 2.1e+011 Pa, 0.3, 1.2e-005 delC^-1, 0.03 N*s/m);

//Thicknesses
Th01 = Thickness(0.01 m);
Th02 = Thickness(0.02 m);
Th03 = Thickness(0.03 m);
Th04 = Thickness(0.04 m);
Th05 = Thickness(0.05 m);

//MeshDensities and NumberOfElements
M1 = MeshDensity(1 m);
M1.setDefault();

//***** RULES *****//
//Connected Move Rules
GenieRules.ConnectedMove.useStructuralPoints = false;
GenieRules.ConnectedMove.defaultConnected = false;
GenieRules.ConnectedMove.rearrangeXJoints = false;

//Geometry Rules
GenieRules.Geometry.beamTopologySnapping = true;
GenieRules.Geometry.guideCurveTopologySnapping = true;
GenieRules.Geometry.creationGrouping = cgGroupingOff;

//Joint Creation Rules
GenieRules.JointCreation.autoGenerate = false;
GenieRules.JointCreation.selectionAware = false;
GenieRules.JointCreation.exclude(geFreeThroughBeams, true);
GenieRules.JointCreation.exclude(geThroughBeamPure, true);
GenieRules.JointCreation.exclude(geThroughBeams, false);
GenieRules.JointCreation.exclude(geFreeBeamEnds, true);
GenieRules.JointCreation.exclude(ge2BeamAligned, true);
GenieRules.JointCreation.exclude(geBeamEnds, false);

//JointDesign Rules
GenieRules.JointDesign.setDefaultCanRule(0.25, 0.3 m);
GenieRules.JointDesign.setDefaultStubRule(1, 0.6 m);
GenieRules.JointDesign.coneAngle = 9.462322208 deg;
GenieRules.JointDesign.minimumGap = 0.0508 m;
GenieRules.JointDesign.gapTolerance = 0.001 m;
GenieRules.JointDesign.planeTolerance = 1 deg;
GenieRules.JointDesign.braceAngleMoveLimit = 10 deg;
GenieRules.JointDesign.chordAlignmentTolerance = 5 deg;
GenieRules.JointDesign.flushBraces = false;
GenieRules.JointDesign.iterations = 2;

//Local Joint Flexibility (LJF) Rules
GenieRules.LJF.method = ljfBuitrago1993;
GenieRules.LJF.setLimit(ljfAxial, 0.1, 5);
GenieRules.LJF.setLimit(ljfIPB, 0.1, 5);
GenieRules.LJF.setLimit(ljfOPB, 0.1, 5);

//Meshing rules
GenieRules.Meshing.elementType = mp1stOrder;
GenieRules.Meshing.superElementType = 1;
GenieRules.Meshing.autoSimplifyTopology = false;
GenieRules.Meshing.autoSplitPeriodicGeometry = false;
GenieRules.Meshing.preference(mpPreferRectangularMesh, false);
GenieRules.Meshing.preference(mpAllowTriangularElements, true);
GenieRules.Meshing.preference(mpPreferPointMassAsNodeMass, true);
GenieRules.Meshing.preference(mpUseDrillingElements, false);
GenieRules.Meshing.eliminateInternalEdges = false;
GenieRules.Meshing.eliminateInternalVertices = true;
GenieRules.Meshing.preference(mpIncludeUnusedProperties, false);
GenieRules.Meshing.preference(mpUseLongLoadcaseNames, false);
GenieRules.Meshing.preference(mpUseLongSetNames, false);
GenieRules.Meshing.preference(mpUseLongPropertyNames, false);
GenieRules.Meshing.preference(mpMeshDensityRounded, false);
GenieRules.Meshing.activate(mpMaxAngle, mpFail, true);
GenieRules.Meshing.setLimit(mpMaxAngle, mpFail, 179 deg);
GenieRules.Meshing.activate(mpMaxAngle, mpSplit, false);
GenieRules.Meshing.setLimit(mpMaxAngle, mpSplit, 165 deg);
GenieRules.Meshing.activate(mpMinAngle, mpFail, false);
GenieRules.Meshing.setLimit(mpMinAngle, mpFail, 1 deg);
GenieRules.Meshing.activate(mpMinAngle, mpSplit, false);
GenieRules.Meshing.setLimit(mpMinAngle, mpSplit, 15 deg);
GenieRules.Meshing.activate(mpMaxRelativeJacobi, mpFail, false);
GenieRules.Meshing.setLimit(mpMaxRelativeJacobi, mpFail, 10);
GenieRules.Meshing.activate(mpMaxRelativeJacobi, mpSplit, false);
GenieRules.Meshing.setLimit(mpMaxRelativeJacobi, mpSplit, 5);
GenieRules.Meshing.activate(mpMinNormalizedJacobi, mpFail, false);
GenieRules.Meshing.setLimit(mpMinNormalizedJacobi, mpFail, 0);
GenieRules.Meshing.activate(mpMinNormalizedJacobi, mpSplit, false);
GenieRules.Meshing.setLimit(mpMinNormalizedJacobi, mpSplit, 0.2);
GenieRules.Meshing.activate(mpMinEdge, false);
GenieRules.Meshing.setLimit(mpMinEdge, 0.1);
GenieRules.Meshing.activate(mpMaxChord, false);
GenieRules.Meshing.setLimit(mpMaxChord, 0.2);
GenieRules.Meshing.activate(mpMaxTwistAngle, mpFail, false);
GenieRules.Meshing.setLimit(mpMaxTwistAngle, mpFail, 30 deg);
GenieRules.Meshing.activate(mpMaxTwistAngle, mpSplit, false);
GenieRules.Meshing.setLimit(mpMaxTwistAngle, mpSplit, 10 deg);
GenieRules.Meshing.basicLCfactor = 1;
GenieRules.Meshing.analysisFolders = true;
GenieRules.Meshing.preference(mpAdjustNumberOfElements, true);

//Tolerances Rules
GenieRules.Tolerances.angleTolerance = 0 deg;
GenieRules.Tolerances.pointTolerance = 0.01 m;
GenieRules.Tolerances.useTolerantModelling = false;

//Set Rules
GenieRules.Sets.scriptCompact = true;

//***** STRUCTURE *****//
//Beams
S355.setDefault();
OD610X8.setDefault();
Bm1 = Beam(Point(13 m,20 m,16 m), Point(13 m,20 m,18 m));
Bm114 = Beam(Point(4 m,20 m,18 m), Point(4 m,10 m,24 m));
Bm115 = Beam(Point(4 m,10 m,24 m), Point(4 m,0 m,18 m));
Bm2 = Beam(Point(4 m,20 m,16 m), Point(4 m,20 m,18 m));
Bm3 = Beam(Point(13 m,20 m,18 m), Point(8.5 m,20 m,18 m));
Bm4 = Beam(Point(13 m,20 m,18 m), Point(13 m,20 m,24 m));
Bm5 = Beam(Point(4 m,20 m,18 m), Point(4 m,20 m,24 m));
Bm6 = Beam(Point(13 m,20 m,24 m), Point(4 m,20 m,24 m));
Bm7 = Beam(Point(8.5 m,20 m,18 m), Point(4 m,20 m,18 m));
Bm70 = Beam(Point(13 m,10 m,16 m), Point(13 m,10 m,18 m));
Bm71 = Beam(Point(13 m,0 m,16 m), Point(13 m,0 m,18 m));
Bm72 = Beam(Point(13 m,10 m,18 m), Point(13 m,10 m,24 m));
Bm73 = Beam(Point(13 m,0 m,18 m), Point(13 m,0 m,24 m));
Bm74 = Beam(Point(4 m,10 m,16 m), Point(4 m,10 m,18 m));
Bm75 = Beam(Point(4 m,0 m,16 m), Point(4 m,0 m,18 m));
Bm76 = Beam(Point(13 m,10 m,18 m), Point(8.5 m,10 m,18 m));
Bm77 = Beam(Point(13 m,0 m,18 m), Point(8.5 m,0 m,18 m));
Bm78 = Beam(Point(4 m,10 m,18 m), Point(4 m,10 m,24 m));
Bm79 = Beam(Point(4 m,0 m,18 m), Point(4 m,0 m,24 m));
Bm8 = Beam(Point(13 m,20 m,24 m), Point(8.5 m,20 m,18 m));
Bm80 = Beam(Point(13 m,10 m,24 m), Point(4 m,10 m,24 m));
Bm81 = Beam(Point(13 m,0 m,24 m), Point(4 m,0 m,24 m));
Bm82 = Beam(Point(8.5 m,10 m,18 m), Point(4 m,10 m,18 m));
Bm83 = Beam(Point(8.5 m,0 m,18 m), Point(4 m,0 m,18 m));
Bm84 = Beam(Point(13 m,10 m,24 m), Point(8.5 m,10 m,18 m));
Bm85 = Beam(Point(13 m,0 m,24 m), Point(8.5 m,0 m,18 m));
Bm86 = Beam(Point(8.5 m,10 m,18 m), Point(4 m,10 m,24 m));
Bm87 = Beam(Point(8.5 m,0 m,18 m), Point(4 m,0 m,24 m));
Bm88 = Beam(Point(13 m,0 m,18 m), Point(13 m,10 m,18 m));
Bm89 = Beam(Point(13 m,10 m,18 m), Point(13 m,20 m,18 m));
Bm9 = Beam(Point(8.5 m,20 m,18 m), Point(4 m,20 m,24 m));
Bm90 = Beam(Point(4 m,0 m,18 m), Point(4 m,10 m,18 m));
Bm91 = Beam(Point(4 m,10 m,18 m), Point(4 m,20 m,18 m));
Bm92 = Beam(Point(13 m,0 m,24 m), Point(13 m,10 m,24 m));
Bm93 = Beam(Point(13 m,20 m,24 m), Point(13 m,10 m,24 m));
Bm94 = Beam(Point(4 m,0 m,24 m), Point(4 m,10 m,24 m));
Bm95 = Beam(Point(4 m,10 m,24 m), Point(4 m,20 m,24 m));
Bm96 = Beam(Point(13 m,0 m,18 m), Point(13 m,10 m,24 m));
Bm97 = Beam(Point(13 m,10 m,24 m), Point(13 m,20 m,18 m));

W460X106.setDefault();
Bm100 = Beam(Point(13 m,6 m,18 m), Point(4 m,6 m,18 m));
Bm101 = Beam(Point(13 m,8 m,18 m), Point(4 m,8 m,18 m));
Bm102 = Beam(Point(13 m,12 m,18 m), Point(4 m,12 m,18 m));
Bm103 = Beam(Point(13 m,14 m,18 m), Point(4 m,14 m,18 m));
Bm104 = Beam(Point(13 m,16 m,18 m), Point(4 m,16 m,18 m));
Bm105 = Beam(Point(13 m,18 m,18 m), Point(4 m,18 m,18 m));
Bm106 = Beam(Point(13 m,4 m,24 m), Point(4 m,4 m,24 m));
Bm107 = Beam(Point(13 m,2 m,24 m), Point(4 m,2 m,24 m));
Bm108 = Beam(Point(13 m,6 m,24 m), Point(4 m,6 m,24 m));
Bm109 = Beam(Point(13 m,8 m,24 m), Point(4 m,8 m,24 m));
Bm110 = Beam(Point(13 m,12 m,24 m), Point(4 m,12 m,24 m));
Bm111 = Beam(Point(13 m,14 m,24 m), Point(4 m,14 m,24 m));
Bm112 = Beam(Point(13 m,16 m,24 m), Point(4 m,16 m,24 m));
Bm113 = Beam(Point(13 m,18 m,24 m), Point(4 m,18 m,24 m));
Bm98 = Beam(Point(13 m,2 m,18 m), Point(4 m,2 m,18 m));
Bm99 = Beam(Point(13 m,4 m,18 m), Point(4 m,4 m,18 m));

//Plates
S355.setDefault();
Th01.setDefault();
Pl1 = Plate(Point(13 m,0 m,24 m), Point(4 m,0 m,24 m), Point(4 m,0 m,18 m), Point(13 m,0 m,18 m));

Pl2 = Plate(Point(13 m,20 m,24 m), Point(4 m,20 m,24 m), Point(4 m,0 m,24 m), Point(13 m,0 m,24 m));

Pl3 = Plate(Point(13 m,0 m,24 m), Point(13 m,0 m,18 m), Point(13 m,20 m,18 m), Point(13 m,20 m,24 m));


//Supports
Sp1 = SupportPoint(Point(4 m,20 m,16 m));
Sp1.boundary = BoundaryCondition(Fixed, Fixed, Fixed, Free, Free, Free);


Sp2 = SupportPoint(Point(13 m,20 m,16 m));
Sp2.boundary = BoundaryCondition(Fixed, Fixed, Fixed, Free, Free, Free);


Sp3 = SupportPoint(Point(4 m,10 m,16 m));
Sp3.boundary = BoundaryCondition(Fixed, Fixed, Fixed, Free, Free, Free);


Sp4 = SupportPoint(Point(13 m,10 m,16 m));
Sp4.boundary = BoundaryCondition(Fixed, Fixed, Fixed, Free, Free, Free);


Sp5 = SupportPoint(Point(4 m,0 m,16 m));
Sp5.boundary = BoundaryCondition(Fixed, Fixed, Fixed, Free, Free, Free);


Sp6 = SupportPoint(Point(13 m,0 m,16 m));
Sp6.boundary = BoundaryCondition(Fixed, Fixed, Fixed, Free, Free, Free);



//***** GUIDING GEOMETRY *****//
//***** ENVIRONMENT *****//
//***** EQUIPMENTS *****//
//Equipents
Generator = PrismEquipment(4 m, 4 m, 6 m, 10000 Kg);
Generator.section = OD610X8;
Separator = PrismEquipment(8 m, 5 m, 5 m, 10000 Kg);
Separator.section = OD610X8;
Tank = PrismEquipment(8 m, 3 m, 2 m, 10000 Kg);
Tank.section = OD610X8;

//***** SETS ( Create ) *****//
//Sets
UpperDeck = Set();

//***** LOAD MODELLING AND ANALYSIS *****//
//Analyses
Analysis1 = Analysis(true);
Analysis1.add(MeshActivity());
Analysis1.step(1).beamsAsMembers = true;
Analysis1.step(1).smartLoadCombinations = true;
Analysis1.step(1).pileBoundaryCondition = pmPileSoilInteraction;
Analysis1.add(LinearAnalysis());
Analysis1.step(2).warpCorrection = true;
Analysis1.step(2).setStaticAnalysis();
Analysis1.add(LoadResultsActivity());
Operation = LoadCase(Analysis1);
Storm = LoadCase(Analysis1);
//  Equipments
Operation.placeAtPoint(Generator, Point(9 m,17 m,24 m), LocalSystem(Vector3d(1 m,0 m,0 m), Vector3d(0 m,0 m,1 m)));
Operation.placeAtPoint(Separator, Point(9.5 m,5 m,18 m), LocalSystem(Vector3d(0 m,-1 m,0 m), Vector3d(0 m,0 m,1 m)));
Operation.placeAtPoint(Tank, Point(7.5 m,5.5 m,24 m), LocalSystem(Vector3d(0 m,-1 m,0 m), Vector3d(0 m,0 m,1 m)));

Operation.excludeSelfWeight();
Operation.includeStructureMassWithRotationField();

Storm.setAcceleration(Vector3d(2 m/s^2,2 m/s^2,-9.80665 m/s^2));
Storm.includeSelfWeight();
Storm.includeStructureMassWithRotationField();
//  Equipments
Storm.placeAtPoint(Generator, Point(9 m,17 m,24 m), LocalSystem(Vector3d(1 m,0 m,0 m), Vector3d(0 m,0 m,1 m)));
Storm.placeAtPoint(Separator, Point(9.5 m,5 m,18 m), LocalSystem(Vector3d(0 m,-1 m,0 m), Vector3d(0 m,0 m,1 m)));
Storm.placeAtPoint(Tank, Point(7.5 m,5.5 m,24 m), LocalSystem(Vector3d(0 m,-1 m,0 m), Vector3d(0 m,0 m,1 m)));




//***** LOAD INTERFACES *****//
//***** MODEL VIEWS *****//
//***** SETS ( Fill ) *****//
//Sets
UpperDeck.add(Bm106);
UpperDeck.add(Bm107);
UpperDeck.add(Bm108);
UpperDeck.add(Bm109);
UpperDeck.add(Bm110);
UpperDeck.add(Bm111);
UpperDeck.add(Bm112);
UpperDeck.add(Bm113);
UpperDeck.add(Bm6);
UpperDeck.add(Bm80);
UpperDeck.add(Bm81);
UpperDeck.add(Bm92);
UpperDeck.add(Bm93);
UpperDeck.add(Bm94);
UpperDeck.add(Bm95);
UpperDeck.add(Pl2);

Analysis1.execute();


