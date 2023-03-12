// GeniE V5.2-03 started 10-Jun-2010 08:52:14

GenieRules.Tolerances.useTolerantModelling = true;
GenieRules.Compatibility.version = "V5.2-03";
GenieRules.Meshing.autoSimplifyTopology = true;

//Units
GenieRules.Units.setDatabaseUnits("m", "kN", "delC");
GenieRules.Units.setInputUnit(Angle, "deg");
GenieRules.Units.setInputUnit(Force, "kN");
GenieRules.Units.setInputUnit(Length, "m");
GenieRules.Units.setInputUnit(TempDiff, "delC");

//***** PROPERTIES *****//
//Sections
I600 = ISection(0.6 m, 0.6 m, 0.15 m, 0.15 m);
Pipe21 = PipeSection(2.1 m, 0.08 m);

//Materials
Steel = MaterialLinear(255000000 KPa, 7850 tonne/m^3, 2.1e+011 KPa, 0.3, 1.2e-005 delC^-1, 0.03 kN*s/m);

//Pile Characteristics
PileType1 = PileCharacteristics(1000 tonne/m^3, tcInfinite);

//Seabed Deltas
Scour1 = Scour(0.5 m, 1 m, 20 deg);

//Soil Types
Clay1 = Clay(false, 1, 1.94 tonne/m^3, 0.01, 200 KPa, 0 m, 150 KPa, -15 m);
Clay1.apiJFactor = 0.5;

Sand1 = Sand(false, 1, 1.99 tonne/m^3, 20 deg);

//Soil Data and Soil Curves
SoilCurves1 = SoilCurves(pyManual, tzManual, qzManual);
SoilCurves1.addManualPY(2.1 m, Array(0 m, 0.02101 m, 0.04202 m, 0.06303 m, 0.08404 m, 0.105 m, 0.1261 m, 0.1471 m, 0.1681 m, 0.1891 m, 0.3 m), Array(0 KPa, 35.64 KPa, 61.51 KPa, 76.26 KPa, 83.52 KPa, 86.85 KPa, 88.32 KPa, 88.96 KPa, 89.23 KPa, 89.35 KPa, 89.44 KPa));
SoilCurves1.addManualTZ(2.1 m, Array(0 m, 0.005 m, 0.15 m), Array(0 KPa, 15 KPa, 15 KPa));
SoilCurves1.addManualQZ(2.1 m, Array(0 m, 0.0042 m, 0.0273 m, 0.0882 m, 0.1533 m, 0.21 m, 0.3 m), Array(0 KPa, 5 KPa, 10 KPa, 15 KPa, 18 KPa, 20 KPa, 20 KPa));
SoilCurves2 = SoilCurves(pyManual, tzManual, qzManual);
SoilCurves2.addManualPY(2.1 m, Array(0 m, 0.0021 m, 0.0042 m, 0.0063 m, 0.01418 m, 0.02205 m, 0.02993 m, 0.0378 m, 0.0441 m, 0.1134 m, 0.3 m), Array(0 KPa, 409.9 KPa, 579.8 KPa, 710 KPa, 931.8 KPa, 1011 KPa, 1021 KPa, 985.3 KPa, 917 KPa, 160.8 KPa, 160.8 KPa));
SoilCurves2.addManualTZ(2.1 m, Array(0 m, 0.00336 m, 0.00651 m, 0.01197 m, 0.0168 m, 0.021 m, 0.15 m), Array(0 KPa, 65 KPa, 108.3 KPa, 162.5 KPa, 195 KPa, 216.7 KPa, 216.7 KPa));
SoilCurves2.addManualQZ(2.1 m, Array(0 m, 0.0042 m, 0.0273 m, 0.0882 m, 0.1533 m, 0.21 m, 0.3 m), Array(0 KPa, 250 KPa, 500 KPa, 750 KPa, 900 KPa, 1000 KPa, 1000 KPa));
SoilData1 = SoilData(-1 KPa, 0.5, 15 KPa, 11 KPa, 0.01, 20 KPa, 0.05);
SoilData2 = SoilData(-1 KPa, 0.5, 150 KPa, 250 KPa, 125 KPa, 225 KPa, 0 m, -15 m, 0.01, 1000 KPa, 0.05);

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
GenieRules.Meshing.autoSimplifyTopology = true;
GenieRules.Meshing.autoSplitPeriodicGeometry = false;
GenieRules.Meshing.preference(mpPreferRectangularMesh, false);
GenieRules.Meshing.preference(mpAllowTriangularElements, true);
GenieRules.Meshing.preference(mpPreferPointMassAsNodeMass, true);
GenieRules.Meshing.preference(mpUseDrillingElements, false);
GenieRules.Meshing.preference(mpUseEccentricHinges, false);
GenieRules.Meshing.eliminateInternalEdges = false;
GenieRules.Meshing.eliminateInternalVertices = true;
GenieRules.Meshing.preference(mpIncludeUnusedProperties, false);
GenieRules.Meshing.preference(mpUseLongLoadcaseNames, false);
GenieRules.Meshing.preference(mpUseLongSetNames, false);
GenieRules.Meshing.preference(mpUseLongPropertyNames, false);
GenieRules.Meshing.preference(mpMeshDensityRounded, false);
GenieRules.Meshing.scantlings = msGross;
GenieRules.Meshing.ignoreEccentricities = false;
GenieRules.Meshing.useCocentricBeams = false;
GenieRules.Meshing.faceMeshStrategy = SesamQuadMesher;
GenieRules.Meshing.edgeMeshStrategy = UniformDistributionEdge;
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
GenieRules.Tolerances.useTolerantModelling = true;

//Set Rules
GenieRules.Sets.scriptCompact = true;

//***** STRUCTURE *****//
//Beams
Steel.setDefault();
I600.setDefault();
Bm1 = Beam(Point(0 m,0 m,10 m), Point(0 m,10 m,10 m));

Pipe21.setDefault();
Bm2 = Beam(Point(0 m,0 m,10 m), Point(0 m,0 m,0 m));
Bm3 = Beam(Point(0 m,10 m,10 m), Point(0 m,10 m,0 m));
Pile1 = Pile(Point(0 m,0 m,0 m), Point(0 m,0 m,-15 m));
Pile1.pileCharacteristics = PileType1;
Pile2 = Pile(Point(0 m,10 m,0 m), Point(0 m,10 m,-15 m));
Pile2.pileCharacteristics = PileType1;

//Joints
Jt1 = Joint(Point(0 m,0 m,10 m));

//***** GUIDING GEOMETRY *****//
//***** ENVIRONMENT *****//
//Locations
Location1 = Location(3 m, 0 m);
Location1.gravity = 9.80665 m/s^2;
Location1.air().density = 0.001226 tonne/m^3;
Location1.air().kinematicViscosity = 1.462e-005 m^2/s;
Location1.water().density = 1.025 tonne/m^3;
Location1.water().kinematicViscosity = 1.19e-006 m^2/s;
Location1.seabed().normaldirection = Vector3d(0 m,0 m,1 m);
Location1.seabed().seabedDelta = Scour1;
Location1.insertSoilBorder(-5 m);
Location1.insertSoilBorder(-15 m);
Location1.soil(1).soilCurves = SoilCurves1;
Location1.soil(1).soilData = SoilData1;
Location1.soil(1).soilType = Sand1;
Location1.soil(1).numberOfSublayers = 3;
Location1.soil(2).soilCurves = SoilCurves2;
Location1.soil(2).soilData = SoilData2;
Location1.soil(2).soilType = Clay1;
Location1.soil(2).numberOfSublayers = 5;

//Conditions
Condition1 = DeterministicTime(Location1);
Condition1.water().setNoCurrent();
Condition1.populate();
Condition1.addCalmSea();
Condition1.component(1).water().setNoCurrent();

//***** EQUIPMENTS *****//
//***** SETS ( Create ) *****//
//***** LOAD MODELLING AND ANALYSIS *****//
SideForce = LoadCase();
SideForce.setFemLoadcase(1);
Gravity = LoadCase();
Gravity.setFemLoadcase(2);
SideForce.excludeSelfWeight();
SideForce.includeStructureMassWithRotationField();
//  Loads
PLoad1 = PointLoad(SideForce, Point(0 m,0 m,10 m), 0 kN, 100 kN, 0 kN, 0 kN*m, 0 kN*m, 0 kN*m);


Gravity.includeSelfWeight();
Gravity.includeStructureMassWithRotationField();

//Analyses
Analysis1 = Analysis(true);
Analysis1.add(MeshActivity());
Analysis1.step(1).beamsAsMembers = true;
Analysis1.step(1).smartLoadCombinations = true;
Analysis1.step(1).pileBoundaryCondition = pmPileSoilInteraction;
Analysis1.step(1).superElementTypeTop = 21;
Analysis1.step(1).superElementType = 1;
Analysis1.add(PileSoilAnalysis(Condition1));
Analysis1.step(2).soil.materialCoeffs.tanPhiCoeff = 1;
Analysis1.step(2).soil.materialCoeffs.shearStrengthCoeff = 1;
Analysis1.step(2).soil.materialCoeffs.skinFrictionCoeff = 1;
Analysis1.step(2).soil.materialCoeffs.pileTipResistanceCoeff = 1;
Analysis1.step(2).soil.curveGeneration.lowestShearStiff = 100 KPa;
Analysis1.step(2).soil.curveGeneration.lowestLevelWithCyclicPY = 0 m;
Analysis1.step(2).soil.curveGeneration.zoneOfInfluenceTZ = 10;
Analysis1.step(2).soil.curveGeneration.curveShapeFactorTZ = 0.9;
Analysis1.step(2).soil.groupEffects.averagePoissonRatio = 0.5;
Analysis1.step(2).soil.groupEffects.modulusOfElasticity(10000 KPa, 0 m, 10000 KPa, -100 m);
Analysis1.step(2).soil.loadsAtSurface.verticalStressAtSurface = 0 KPa;
Analysis1.step(2).soil.loadsAtSurface.verticalStressUnderEmbankment = 0 KPa;
Analysis1.step(2).soil.loadsAtSurface.widthOfEmbankmentSlopingPart = 0 m;
Analysis1.step(2).soil.loadsAtSurface.distancePileToEmbankmentToe = 0 m;
Analysis1.step(2).soil.loadsAtSurface.verticalStressUnderCircularLoadedArea = 0 KPa;
Analysis1.step(2).soil.loadsAtSurface.radiusOfCircularLoadedArea = 0 m;
Analysis1.step(2).splice.solver.maxIterations = 20;
Analysis1.step(2).splice.solver.convergenceCriterion = 0.001 m;
Analysis1.step(2).splice.solver.divergenceCheck = false;
Analysis1.step(2).splice.solver.simplifiedGroupEffects = true;
Analysis1.add(LoadResultsActivity());


//***** LOAD INTERFACES *****//
//***** MODEL VIEWS *****//
//***** SETS ( Fill ) *****//


// GeniE V5.2-03 ended 10-Jun-2010 09:01:07
