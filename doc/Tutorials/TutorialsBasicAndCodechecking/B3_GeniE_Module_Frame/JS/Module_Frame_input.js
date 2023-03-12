// GeniE tutorial Module Frame
//
GenieRules.Units.setOutputUnits("m", "kN", "delC");
GenieRules.Units.setInputUnit(Length, "m");
GenieRules.Units.setInputUnit(Force, "kN");
GenieRules.Units.setInputUnit(TempDiff, "delC");
GenieRules.Tolerances.useTolerantModelling = true;
GenieRules.Tolerances.angleTolerance = 2 deg;
GenieRules.Compatibility.version = "V7.13-11";
GenieRules.Meshing.autoSimplifyTopology = true;
GenieRules.Meshing.eliminateInternalEdges = true;
GenieRules.BeamCreation.DefaultCurveOffset = ReparameterizedBeamCurveOffset();
GenieRules.Transformation.DefaultConnectedCopy = false;
// Material and beam cross sections
St52 = MaterialLinear(4.2E5, 7.85 tonne/m^3, 210000000 kPa, 0.3, 1.2e-05 delC^-1, 3e-05 kN*s/m);
St52.damping = 3e-05 kN*s/m;
DefaultName(typeSection,"Box",1,"");
Box1 = BoxSection(1.6, 1, 0.025, 0.04, 0.04);
Box2 = BoxSection(1.6 m, 0.8m, 0.025 m, 0.04 m, 0.04 m);
Box3 = BoxSection(1, 1, 0.05 m, 0.05m, 0.05m);
Box4 = BoxSection(1 m, .8, 0.035 m, 0.035 m, 0.035 m);
Box5 = BoxSection(1 m, 1, 0.035 m, 0.035 m, 0.035 m);
Box6 = BoxSection(.8, .8, 0.025 m, 0.025 m, 0.025 m);
Box7 = BoxSection(1.5, 1, 0.025 m, 0.04 m, 0.04 m);
Box8 = BoxSection(1.5 m, .8, 0.025 m, 0.04 m, 0.04 m);
IH1 = ISection(1, .3, .019, .036);
IH2 = ISection(.7, 0.3 m, 0.017 m, 0.032 m);
Pip1 = PipeSection(1.5, .04);
Box1.setDefault();
St52.setDefault();
// Guide plane
GuidePlane1 = GuidePlane(Point(0,0,0),Point(28,0,0),Point(28,22,0),Point(0,22,0),7,6,11,3.65,2.5,2.5,2.5,2.5,3.35,1,1,1,1,1,1);
GuidePlane1.snapmode = true;
// Cellar deck
Bm1 = StraightBeam(Point(0 m,0 m,0 m), Point(28 m,0 m,0 m));
Bm2 = StraightBeam(Point(0 m,22 m,0 m), Point(28 m,22 m,0 m));
Bm6 = StraightBeam(Point(11 m,11 m,0 m), Point(28 m,11 m,0 m));
Box2.setDefault();
Bm4 = StraightBeam(Point(0 m,0 m,0 m), Point(0 m,22 m,0 m));
Bm5 = StraightBeam(Point(11 m,0 m,0 m), Point(11 m,22 m,0 m));
Bm7 = StraightBeam(Point(28 m,0 m,0 m), Point(28 m,22 m,0 m));
IH1.setDefault();
Bm8 = StraightBeam(Point(14.65 m,0 m,0 m), Point(14.65 m,22 m,0 m));
Bm9 = StraightBeam(Point(17.15 m,0 m,0 m), Point(17.15 m,22 m,0 m));
Bm10 = StraightBeam(Point(19.65 m,0 m,0 m), Point(19.65 m,22 m,0 m));
Bm11 = StraightBeam(Point(22.15 m,0 m,0 m), Point(22.15 m,22 m,0 m));
Bm12 = StraightBeam(Point(24.65 m,0 m,0 m), Point(24.65 m,22 m,0 m));
IH2.setDefault();
Bm13 = StraightBeam(Point(0 m,3.666666667 m,0 m), Point(11 m,3.666666667 m,0 m));
Bm14 = StraightBeam(Point(0 m,7.333333333 m,0 m), Point(11 m,7.333333333 m,0 m));
Bm15 = StraightBeam(Point(0 m,11 m,0 m), Point(11 m,11 m,0 m));
Bm16 = StraightBeam(Point(0 m,14.66666667 m,0 m), Point(11 m,14.66666667 m,0 m));
Bm17 = StraightBeam(Point(0 m,18.33333333 m,0 m), Point(11 m,18.33333333 m,0 m));
// Main deck
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Bm1, "Bm18");
MyModelTransformerMap.Add(Bm2, "Bm19");
MyModelTransformerMap.Add(Bm4, "Bm20");
MyModelTransformerMap.Add(Bm5, "Bm21");
MyModelTransformerMap.Add(Bm6, "Bm22");
MyModelTransformerMap.Add(Bm7, "Bm23");
MyModelTransformerMap.Add(Bm8, "Bm24");
MyModelTransformerMap.Add(Bm9, "Bm25");
MyModelTransformerMap.Add(Bm10, "Bm26");
MyModelTransformerMap.Add(Bm11, "Bm27");
MyModelTransformerMap.Add(Bm12, "Bm28");
MyModelTransformerMap.Add(Bm13, "Bm29");
MyModelTransformerMap.Add(Bm14, "Bm30");
MyModelTransformerMap.Add(Bm15, "Bm31");
MyModelTransformerMap.Add(Bm16, "Bm32");
MyModelTransformerMap.Add(Bm17, "Bm33");
ModelTransformer(MyModelTransformerMap).copyTranslate(Vector3d(0,0,12.5));
Bm18.section = Box7;
Bm19.section = Box7;
Bm22.section = Box7;
Bm23.section = Box8;
Bm21.section = Box8;
Bm20.section = Box8;
// Columns and bracings
Box4.setDefault();
Bm34 = StraightBeam(Point(0 m,0 m,0 m), Point(11 m,0 m,12.5 m));
Bm35 = StraightBeam(Point(11 m,0 m,0 m), Point(11 m,0 m,12.5 m));
Bm36 = StraightBeam(Point(28 m,0 m,0 m), Point(11 m,0 m,12.5 m));
Bm37 = StraightBeam(Point(0 m,22 m,0 m), Point(11 m,22 m,12.5 m));
Bm38 = StraightBeam(Point(11 m,22 m,0 m), Point(11 m,22 m,12.5 m));
Bm39 = StraightBeam(Point(28 m,22 m,0 m), Point(11 m,22 m,12.5 m));
Box3.setDefault();
Bm40 = StraightBeam(Point(28 m,0 m,0 m), Point(28 m,0 m,12.5 m));
Bm41 = StraightBeam(Point(28 m,22 m,0 m), Point(28 m,22 m,12.5 m));
Box5.setDefault();
Bm42 = StraightBeam(Point(0 m,0 m,0 m), Point(0 m,0 m,12.5 m));
Bm43 = StraightBeam(Point(0 m,22 m,0 m), Point(0 m,22 m,12.5 m));
Box6.setDefault();
Bm44 = StraightBeam(Point(28 m,0 m,0 m), Point(28 m,11 m,12.5 m));
Bm45 = StraightBeam(Point(28 m,11 m,0 m), Point(28 m,11 m,12.5 m));
Bm46 = StraightBeam(Point(28 m,22 m,0 m), Point(28 m,11 m,12.5 m));
Bm47 = StraightBeam(Point(0 m,0 m,0 m), Point(0 m,11 m,12.5 m));
Bm48 = StraightBeam(Point(0 m,11 m,0 m), Point(0 m,11 m,12.5 m));
Bm49 = StraightBeam(Point(0 m,22 m,0 m), Point(0 m,11 m,12.5 m));
// Offsets to flush beams in cellar and main decks
Bm8.CurveOffset = ConstantCurveOffset(Vector3d(0 m, 0 m, 0.3 m), false);
Bm9.CurveOffset = ConstantCurveOffset(Vector3d(0 m, 0 m, 0.3 m), false);
Bm10.CurveOffset = ConstantCurveOffset(Vector3d(0 m, 0 m, 0.3 m), false);
Bm11.CurveOffset = ConstantCurveOffset(Vector3d(0 m, 0 m, 0.3 m), false);
Bm12.CurveOffset = ConstantCurveOffset(Vector3d(0 m, 0 m, 0.3 m), false);
Bm13.CurveOffset = ConstantCurveOffset(Vector3d(0 m, 0 m, 0.45 m), false);
Bm14.CurveOffset = ConstantCurveOffset(Vector3d(0 m, 0 m, 0.45 m), false);
Bm15.CurveOffset = ConstantCurveOffset(Vector3d(0 m, 0 m, 0.45 m), false);
Bm16.CurveOffset = ConstantCurveOffset(Vector3d(0 m, 0 m, 0.45 m), false);
Bm17.CurveOffset = ConstantCurveOffset(Vector3d(0 m, 0 m, 0.45 m), false);
Bm24.CurveOffset = ConstantCurveOffset(Vector3d(0 m, 0 m, 0.25 m), false);
Bm28.CurveOffset = ConstantCurveOffset(Vector3d(0 m, 0 m, 0.25 m), false);
Bm26.CurveOffset = ConstantCurveOffset(Vector3d(0 m, 0 m, 0.25 m), false);
Bm27.CurveOffset = ConstantCurveOffset(Vector3d(0 m, 0 m, 0.25 m), false);
Bm25.CurveOffset = ConstantCurveOffset(Vector3d(0 m, 0 m, 0.25 m), false);
Bm30.CurveOffset = ConstantCurveOffset(Vector3d(0 m, 0 m, 0.4 m), false);
Bm29.CurveOffset = ConstantCurveOffset(Vector3d(0 m, 0 m, 0.4 m), false);
Bm31.CurveOffset = ConstantCurveOffset(Vector3d(0 m, 0 m, 0.4 m), false);
Bm33.CurveOffset = ConstantCurveOffset(Vector3d(0 m, 0 m, 0.4 m), false);
Bm32.CurveOffset = ConstantCurveOffset(Vector3d(0 m, 0 m, 0.4 m), false);
// Support stools and boundary conditions
Pip1.setDefault();
Bm3 = StraightBeam(Point(0 m,0 m,0 m), Point(0,0,-2));
Sp1 = SupportPoint(Point(0 m,0 m,-2 m));
Sp1.boundary = BoundaryCondition(Fixed, Fixed, Fixed, Free, Free, Free);
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Bm3, "Bm50");
ModelTransformer(MyModelTransformerMap).copyTranslate(Vector3d(28 m,0 m,0 m));
Sp2 = Sp1.copyTranslate(Vector3d(28 m,0 m,0 m));
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Bm3, "Bm51");
MyModelTransformerMap.Add(Bm50, "Bm52");
ModelTransformer(MyModelTransformerMap).copyTranslate(Vector3d(0 m,22 m,0 m));
Sp3 = Sp1.copyTranslate(Vector3d(0 m,22 m,0 m));
Sp4 = Sp2.copyTranslate(Vector3d(0 m,22 m,0 m));
// Loads
// Gravity load
LC_grav = LoadCase();
LC_grav.setAcceleration(Vector3d(0 m/s^2,0 m/s^2,-9.80665 m/s^2));
LC_grav.includeSelfWeight();
LC_grav.includeStructureMassWithRotationField();
// Equipment load
LC_equipm = LoadCase();
Tank = PrismEquipment(19,12,10,2000);
Tank.clearFootprint();
Tank.addToFootprint(-9.5 m,9.5 m,4 m,5 m);
Tank.addToFootprint(-9.5 m,9.5 m,-5 m,-4 m);
LC_equipm.placeAtPoint(Tank,Point(19.65 m,11 m,12.5 m),LocalSystem(Vector3d(1 m,0 m,0 m), Vector3d(0 m,0 m,1 m)));
LC_equipm.placeAtPoint(Tank, Point(19.75 m,13.5 m,12.5 m), LocalSystem(Vector3d(1 m,0 m,0 m), Vector3d(0 m,0 m,1 m)));
LI_1 = LoadInterface();
LI_1.addEquipment(Tank, LC_equipm);
LI_1.add(Bm23);
LI_1.add(Bm21);
LI_1.addEquipment(Tank, LC_equipm);
LC_equipm.generateAppliedLoads();
// Point load
LC_point_load = LoadCase();
PLoad1 = PointLoad(LC_point_load, FootprintPoint(Point(28,19,12.5)), PointForceMoment(Vector3d(-5000 kN, 0 kN, -7500 kN), Vector3d(0 kN*m, 0 kN*m, 0 kN*m)));
// Blanket load
LC_blanket = LoadCase();
Blanket = PrismEquipment(30,24,1,20);
LC_blanket.placeAtPoint(Blanket,Point(14.65 m,11 m,12.5 m),LocalSystem(Vector3d(1 m,0 m,0 m), Vector3d(0 m,0 m,1 m)));
LC_blanket.constantLoad(Blanket);
LC_blanket.generateAppliedLoads();
// Load combination
Comb_all = LoadCombination();
Comb_all.addCase(LC_grav, 1.2);
Comb_all.addCase(LC_equipm, 1.2);
Comb_all.addCase(LC_point_load, 1.6);
Comb_all.addCase(LC_blanket, 1.6);
Comb_all.convertLoadToMass = false;
Comb_all.EquipmentRep = EquipmentAsLineLoads;
// Analysis
Analysis1 = Analysis(true);
Analysis1.add(MeshActivity());
Analysis1.add(LinearAnalysis());
Analysis1.step(2).useSestra10(true);
Analysis1.add(LoadResultsActivity());
Analysis1.setActive();
SimplifyTopology();
// Run the analysis
Analysis1.execute();
// Code checking
EURchk = CapacityManager(Analysis1);
MemberCreationOpts = MemberCreationOption();
MemberCreationOpts.splitAtJoint = false;
MemberCreationOpts.splitAtIncomingBeam = true;
MemberCreationOpts.splitAtBeamEnd = false;
MemberCreationOpts.considerBeamOffset = true;
EURchk.createMembers(MemberCreationOpts);
EURchk.useFromStructureMemberOptions = false;
EURchk = CapacityManager(Analysis1);
MemberCreationOpts = MemberCreationOption();
MemberCreationOpts.splitAtJoint = false;
MemberCreationOpts.splitAtIncomingBeam = true;
MemberCreationOpts.splitAtBeamEnd = false;
MemberCreationOpts.considerBeamOffset = true;
EURchk.createMembers(MemberCreationOpts);
EURchk.useFromStructureMemberOptions = false;
EURchk.AddRun(EN199311Run());
EURchk.run(1).generateListingFile = false;
EURchk.run(1).addLoadCase(Comb_all);
EURchk.run(1).generalOptions.computeLoadsAsNeeded = true;
EURchk.run(1).generateCodeCheckLoads();
EURchk.run(1).executeCodeCheck();
