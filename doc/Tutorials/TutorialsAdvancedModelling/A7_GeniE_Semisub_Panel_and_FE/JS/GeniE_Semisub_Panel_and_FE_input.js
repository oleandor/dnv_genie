// GeniE Semisubmersible Panel and Structural (FE) Modelling
GenieRules.Compatibility.version = "V8.2-04";
GenieRules.Tolerances.useTolerantModelling = true;
GenieRules.Tolerances.angleTolerance = 2 deg;
GenieRules.Meshing.autoSimplifyTopology = true;
GenieRules.Meshing.eliminateInternalEdges = true;
GenieRules.BeamCreation.DefaultCurveOffset = ReparameterizedBeamCurveOffset();
GenieRules.Transformation.DefaultConnectedCopy = false;
// Define materials, beam cross sections and plate/shell thicknesses
Steel = MaterialLinear(2.0E8, 7850 kg/m^3, 2.1e+11 Pa, 0.3, 1.2e-05 delC^-1, 0.03 N*s/m);
SuperMaterial = MaterialLinear(2.0E8, 1780, 2.1e+11 Pa, 0.3, 1.2e-05 delC^-1, 0.03 N*s/m);
Pipe1 = PipeSection(2, 0.1);
Pipe2 = PipeSection(1, 0.05);
Pipe3 = PipeSection(0.8, 0.04);
Cone1 = ConeSection(1, true);
Girder = UnsymISection(0.8, 0.04, 0.04, 0.02 m, 0.04, 0.5, 0.25 m, 0.05);
Stiffener = LSection(0.6, 0.04, 0.3, 0.04);
Stiffener.width = 0.3;
Stiffener.webThickness = 0.04;
Stiffener.setDefault();
Th03 = Thickness(0.03);
Th35 = Thickness(0.35);
Th50 = Thickness(0.5);
Th50.setDefault();
SuperMaterial.setDefault();
// Create guiding geometry for pontton
GuidePlane1 = GuidePlane(Point(0, 0, 0),Point(40.3, 0, 0),Point(40.3, 35.36, 0),Point(0, 35.36, 0),3,3,32.3,4,4,27.36,4,4);
GuidePlane1.snapmode = true;
Curve1 = CreateLineTwoPoints(Point(0 m,35.36 m,0 m), Point(32.3 m,35.36 m,0 m));
Curve2 = CreateEllipticArcFromCenterAndEndPoints(Point(32.3 m,27.36 m,0 m), Point(32.3 m,35.36 m,0 m), Point(40.3 m,27.36 m,0 m), true);
Curve3 = Curve1.copyMirror(Point(32.3 m,27.36 m,0 m),Vector3d(0, 1, 0));
Curve4 = Curve2.copyMirror(Point(32.3 m,27.36 m,0 m),Vector3d(0, 1, 0));
Curve5 = Curve1.copyTranslate(Vector3d(0, 0, -3.75));
Curve6 = Curve2.copyTranslate(Vector3d(0, 0, -3.75));
Curve7 = Curve3.copyTranslate(Vector3d(0, 0, -3.75));
Curve8 = Curve4.copyTranslate(Vector3d(0, 0, -3.75));
Curve9 = CreateLineTwoPoints(Point(0 m,31.36 m,0 m), Point(32.3 m,31.36 m,0 m));
Curve10 = CreateEllipticArcFromCenterAndEndPoints(Point(32.3 m,27.36 m,0 m), Point(32.3 m,31.36 m,0 m), Point(36.3 m,27.36 m,0 m), true);
Curve11 = Curve9.copyMirror(Point(32.3 m,27.36 m,0 m),Vector3d(0, 1, 0));
Curve12 = Curve10.copyMirror(Point(32.3 m,27.36 m,0 m),Vector3d(0, 1, 0));
autoMSet = Set();
autoMSet.add(Curve9);
autoMSet.add(Curve10);
autoMSet.add(Curve11);
autoMSet.add(Curve12);
autoMSet.moveTranslate(Vector3d(0, 0, -7.5),geUNCONNECTED);
Delete(autoMSet);
Curve13 = CreateLineTwoPoints(Point(0 m,19.36 m,-3.75 m), Point(0 m,19.36 m,0 m));
Curve14 = CreateLineTwoPoints(Point(32.3 m,19.36 m,-3.75 m), Point(32.3 m,19.36 m,0 m));
Curve15 = CreateLineTwoPoints(Point(40.3 m,27.36 m,-3.75 m), Point(40.3 m,27.36 m,0 m));
Curve16 = CreateLineTwoPoints(Point(32.3 m,35.36 m,-3.75 m), Point(32.3 m,35.36 m,0 m));
Curve17 = CreateLineTwoPoints(Point(0 m,35.36 m,-3.75 m), Point(0 m,35.36 m,0 m));
Point1 = Point(0 m,31.36 m,-7.5 m);
Point2 = Point(32.3 m,31.36 m,-7.5 m);
Point3 = Point(36.3 m,27.36 m,-7.5 m);
autoMSet = Set();
autoMSet.add(Point1);
autoMSet.add(Point2);
autoMSet.add(Point3);
autoMSet.moveTranslate(Vector3d(0, 0, 3.75),geUNCONNECTED);
Delete(autoMSet);
Curve18 = CreateEllipticArcFromCenterAndEndPoints(Point(0 m,31.36 m,-3.75 m), Point(0 m,31.36 m,-7.5 m), Point(0 m,35.36 m,-3.75 m), true);
Curve19 = CreateEllipticArcFromCenterAndEndPoints(Point(32.3 m,31.36 m,-3.75 m), Point(32.3 m,31.36 m,-7.5 m), Point(32.3 m,35.36 m,-3.75 m), true);
Curve20 = CreateEllipticArcFromCenterAndEndPoints(Point(36.3 m,27.36 m,-3.75 m), Point(36.3 m,27.36 m,-7.5 m), Point(40.3 m,27.36 m,-3.75 m), true);
Curve21 = Curve18.copyMirror(Point(32.3 m,27.36 m,0 m),Vector3d(0, 1, 0));
Curve22 = Curve19.copyMirror(Point(32.3 m,27.36 m,0 m),Vector3d(0, 1, 0));
// Create pontoon outer plates/shells
Pl1 = SkinCurves(Array(Curve1, Curve5));
Pl2 = SkinCurves(Array(Curve2, Curve6));
Pl3 = SkinCurves(Array(Curve4, Curve8));
Pl4 = SkinCurves(Array(Curve3, Curve7));
Pl5 = SweepCurve(Curve18, Curve5);
Pl6 = SweepCurve(Curve19, Curve6);
Pl7 = SweepCurve(Curve20, Curve8);
Pl8 = SweepCurve(Curve22, Curve7);
Pl9 = SkinCurves(Array(Curve3, Curve1));
Curve23 = ModelCurve(Point(32.3 m,19.36 m,0 m), Point(32.3 m,27.36 m,0 m), Point(32.3 m,35.36 m,0 m));
Pl10 = CoverCurves(Curve2,Curve4,Curve23);
Pl11 = SkinCurves(Array(Curve11, Curve9));
Curve24 = ModelCurve(Point(32.3 m,23.36 m,-7.5 m), Point(32.3 m,27.36 m,-7.5 m), Point(32.3 m,31.36 m,-7.5 m));
Pl12 = CoverCurves(Curve10,Curve12,Curve24);
Pl3.flipNormal();
Pl4.flipNormal();
Pl6.flipNormal();
Pl7.flipNormal();
Pl8.flipNormal();
Pl10.flipNormal();
Pl11.flipNormal();
// Create guide curves for, and internal pontoon bulkhead plates
Curve25 = Curve3.copyTranslate(Vector3d(0 m,8 m,0 m));
Curve26 = Curve25.copyTranslate(Vector3d(0 m,0 m,-7.5 m));
Curve27 = CreateLineTwoPoints(Point(32.3 m,27.36 m,0 m), Point(40.3 m,27.36 m,0 m));
Curve28 = CreateLineTwoPoints(Point(32.3 m,27.36 m,-7.5 m), Point(36.3 m,27.36 m,-7.5 m));
Curve29 = CreateLineTwoPoints(Point(32.3 m,27.36 m,-7.5 m), Point(32.3 m,27.36 m,0 m));
Pl13 = SkinCurves(Array(Curve25, Curve26));
Pl14 = CoverCurves(Curve15,Curve20,Curve27,Curve28,Curve29);
Pl14.flipNormal();
Pl15 = CoverCurves(Curve14,Curve16,Curve19,Curve22,Curve23,Curve24);
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Pl15, "Pl16");
ModelTransformer(MyModelTransformerMap).copyTranslate(Vector3d(-4.94, 0, 0));
Curve30 = Curve14.copyTranslate(Vector3d(-4.94, 0, 0));
Curve31 = Curve16.copyTranslate(Vector3d(-4.94, 0, 0));
Curve32 = Curve19.copyTranslate(Vector3d(-4.94, 0, 0));
Curve33 = Curve22.copyTranslate(Vector3d(-4.94, 0, 0));
Curve34 = Curve23.copyTranslate(Vector3d(-4.94, 0, 0));
Curve35 = Curve24.copyTranslate(Vector3d(-4.94, 0, 0));
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Pl15, "Pl17");
ModelTransformer(MyModelTransformerMap).copyTranslate(Vector3d(-14.94, 0, 0));
Curve36 = Curve14.copyTranslate(Vector3d(-14.94, 0, 0));
Curve37 = Curve16.copyTranslate(Vector3d(-14.94, 0, 0));
Curve38 = Curve19.copyTranslate(Vector3d(-14.94, 0, 0));
Curve39 = Curve22.copyTranslate(Vector3d(-14.94, 0, 0));
Curve40 = Curve23.copyTranslate(Vector3d(-14.94, 0, 0));
Curve41 = Curve24.copyTranslate(Vector3d(-14.94, 0, 0));
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Pl15, "Pl18");
ModelTransformer(MyModelTransformerMap).copyTranslate(Vector3d(-32.3 m,0 m,0 m));
Curve42 = Curve14.copyTranslate(Vector3d(-32.3 m,0 m,0 m));
Curve43 = Curve16.copyTranslate(Vector3d(-32.3 m,0 m,0 m));
Curve44 = Curve19.copyTranslate(Vector3d(-32.3 m,0 m,0 m));
Curve45 = Curve22.copyTranslate(Vector3d(-32.3 m,0 m,0 m));
Curve46 = Curve23.copyTranslate(Vector3d(-32.3 m,0 m,0 m));
Curve47 = Curve24.copyTranslate(Vector3d(-32.3 m,0 m,0 m));
// Create guiding geometry for column
GuidePlane2 = GuidePlane(Point(27.36, 27.36, 0),Point(34.36, 27.36, 0),Point(34.36, 34.36, 0),Point(27.36, 34.36, 0),1,1,1,1);
GuidePlane2.snapmode = true;
Curve48 = CreateLineTwoPoints(Point(34.36 m,27.36 m,0 m), Point(34.36 m,34.36 m,0 m));
Curve49 = CreateLineTwoPoints(Point(34.36 m,34.36 m,0 m), Point(27.36 m,34.36 m,0 m));
Curve50 = CreateCircularFilletBetweenLinearSegments(Curve49, Point(29.66838757 m,34.36 m,0 m), Curve48, Point(34.36 m,32.03333817 m,0 m), 2  m);
GuidePlane3 = GuidePlane(Point(0, 0, 7),Point(33.81, 0, 7),Point(33.81, 33.81, 7),Point(0, 33.81, 7),3,3,14.36,13,6.45,9.5,17.86,6.45);
GuidePlane3.snapmode = true;
Curve51 = CreateEllipticArcFromCenterAndEndPoints(Point(27.36 m,27.36 m,7 m), Point(27.36 m,33.81 m,7 m), Point(33.81 m,27.36 m,7 m), true);
// Create shells for column
Pl19 = SkinCurves(Array(Curve50, Curve51));
Pl20 = SweepCurve(Curve51, Vector3d(0, 0, 26.5));
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Pl19, "Pl21");
MyModelTransformerMap.Add(Pl20, "Pl22");
ModelTransformer(MyModelTransformerMap).copyRotate(Point(27.36 m,27.36 m,0 m), Vector3d(0, 0, 1), 90, 3);
autoMSet = Set();
autoMSet.add(GuidePlane3);
autoMSet.moveTranslate(Vector3d(0, 0, 18.5),geUNCONNECTED);
Delete(autoMSet);
// Move guide plane at elevation 7 m up to lower deck elevation
GuidePlane4 = GuidePlane3.copyTranslate(Vector3d(0, 0, 8));
// Create vertical bulkheads in column
Pl27 = Plate(Point(0 m,27.36 m,0 m),Point(40.3 m,27.36 m,0 m),Point(33.81 m,27.36 m,33.5 m),Point(0 m,27.36 m,33.5 m));
Validate(Pl27.primitivePartCount == 3);
Pl27.explode(IndexedNameMask(28));
Validate(Pl28);
Validate(Pl29);
Validate(Pl30);
Delete(Pl30);
Delete(Pl28);
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Pl29, "Pl28");
ModelTransformer(MyModelTransformerMap).copyRotate(Point(27.36 m,27.36 m,0 m), Vector3d(0, 0, 1), 90);
Pl19.flipNormal();
Pl20.flipNormal();
Pl22.flipNormal();
Pl21.flipNormal();
Pl24.flipNormal();
Pl23.flipNormal();
Pl25.flipNormal();
Pl26.flipNormal();
// Divide pontoon top
Validate(Pl9.primitivePartCount == 10);
Pl9.explode(IndexedNameMask(30));
Validate(Pl30);
Validate(Pl31);
Validate(Pl32);
Validate(Pl33);
Validate(Pl34);
Validate(Pl35);
Validate(Pl36);
Validate(Pl37);
Validate(Pl38);
Validate(Pl39);
Validate(Pl10.primitivePartCount == 4);
Pl10.explode(IndexedNameMask(40));
Validate(Pl40);
Validate(Pl41);
Validate(Pl42);
Validate(Pl43);
// Put surfaces exposed to water in set
Wet_Surfaces = Set();
Wet_Surfaces.add(Pl1);
Wet_Surfaces.add(Pl11);
Wet_Surfaces.add(Pl12);
Wet_Surfaces.add(Pl19);
Wet_Surfaces.add(Pl2);
Wet_Surfaces.add(Pl20);
Wet_Surfaces.add(Pl21);
Wet_Surfaces.add(Pl22);
Wet_Surfaces.add(Pl23);
Wet_Surfaces.add(Pl24);
Wet_Surfaces.add(Pl25);
Wet_Surfaces.add(Pl26);
Wet_Surfaces.add(Pl3);
Wet_Surfaces.add(Pl30);
Wet_Surfaces.add(Pl31);
Wet_Surfaces.add(Pl32);
Wet_Surfaces.add(Pl33);
Wet_Surfaces.add(Pl36);
Wet_Surfaces.add(Pl39);
Wet_Surfaces.add(Pl4);
Wet_Surfaces.add(Pl42);
Wet_Surfaces.add(Pl43);
Wet_Surfaces.add(Pl5);
Wet_Surfaces.add(Pl6);
Wet_Surfaces.add(Pl7);
Wet_Surfaces.add(Pl8);
// Create and apply mesh density
Md_5 = MeshDensity(5);
Pl1.meshDensity = Md_5;
Pl2.meshDensity = Md_5;
Pl3.meshDensity = Md_5;
Pl4.meshDensity = Md_5;
Pl5.meshDensity = Md_5;
Pl6.meshDensity = Md_5;
Pl7.meshDensity = Md_5;
Pl8.meshDensity = Md_5;
Pl43.meshDensity = Md_5;
Pl11.meshDensity = Md_5;
Pl12.meshDensity = Md_5;
Pl19.meshDensity = Md_5;
Pl20.meshDensity = Md_5;
Pl22.meshDensity = Md_5;
Pl21.meshDensity = Md_5;
Pl24.meshDensity = Md_5;
Pl23.meshDensity = Md_5;
Pl25.meshDensity = Md_5;
Pl26.meshDensity = Md_5;
Pl31.meshDensity = Md_5;
Pl39.meshDensity = Md_5;
Pl33.meshDensity = Md_5;
Pl32.meshDensity = Md_5;
Pl36.meshDensity = Md_5;
Pl30.meshDensity = Md_5;
Pl42.meshDensity = Md_5;
// Create a wet surface property and assign to surfaces exposed to water
WS1 = WetSurface();
Pl1.front.wetSurface = WS1;
Pl2.front.wetSurface = WS1;
Pl3.front.wetSurface = WS1;
Pl4.front.wetSurface = WS1;
Pl5.front.wetSurface = WS1;
Pl6.front.wetSurface = WS1;
Pl7.front.wetSurface = WS1;
Pl8.front.wetSurface = WS1;
Pl43.front.wetSurface = WS1;
Pl11.front.wetSurface = WS1;
Pl12.front.wetSurface = WS1;
Pl19.front.wetSurface = WS1;
Pl20.front.wetSurface = WS1;
Pl22.front.wetSurface = WS1;
Pl21.front.wetSurface = WS1;
Pl24.front.wetSurface = WS1;
Pl23.front.wetSurface = WS1;
Pl25.front.wetSurface = WS1;
Pl26.front.wetSurface = WS1;
Pl31.front.wetSurface = WS1;
Pl39.front.wetSurface = WS1;
Pl33.front.wetSurface = WS1;
Pl32.front.wetSurface = WS1;
Pl36.front.wetSurface = WS1;
Pl30.front.wetSurface = WS1;
Pl42.front.wetSurface = WS1;
Pl1.front.wetSurface = WS1;
Pl2.front.wetSurface = WS1;
Pl3.front.wetSurface = WS1;
Pl4.front.wetSurface = WS1;
Pl5.front.wetSurface = WS1;
Pl6.front.wetSurface = WS1;
Pl7.front.wetSurface = WS1;
Pl8.front.wetSurface = WS1;
Pl43.front.wetSurface = WS1;
Pl11.front.wetSurface = WS1;
Pl12.front.wetSurface = WS1;
Pl19.front.wetSurface = WS1;
Pl20.front.wetSurface = WS1;
Pl22.front.wetSurface = WS1;
Pl21.front.wetSurface = WS1;
Pl24.front.wetSurface = WS1;
Pl23.front.wetSurface = WS1;
Pl25.front.wetSurface = WS1;
Pl26.front.wetSurface = WS1;
Pl31.front.wetSurface = WS1;
Pl39.front.wetSurface = WS1;
Pl33.front.wetSurface = WS1;
Pl32.front.wetSurface = WS1;
Pl36.front.wetSurface = WS1;
Pl30.front.wetSurface = WS1;
Pl42.front.wetSurface = WS1;
// Create a dummy hydro pressure load case
LC1 = DummyHydroLoadCase(WS1);
// Create a panel mesh for surfaces exposed to water and export T1.FEM
Analysis1 = Analysis(true);
Analysis1.add(MeshActivity());
Analysis1.add(LoadResultsActivity());
Analysis1.setActive();
Analysis1.step(1).subset = Wet_Surfaces;
SimplifyTopology();
Analysis1.execute();
FemExporter = ExportMeshFem();
FemExporter.DoExport("T1.FEM");
SetNoLoadcase();
// Create deck plates
Th35.setDefault();
Pl44 = Plate(Point(14.36 m,0 m,25.5 m),Point(27.36 m,0 m,25.5 m),Point(27.36 m,9.5 m,25.5 m),Point(14.36 m,9.5 m,25.5 m));
Pl45 = Plate(Point(14.36 m,9.5 m,25.5 m),Point(27.36 m,9.5 m,25.5 m),Point(27.36 m,27.36 m,25.5 m),Point(14.36 m,27.36 m,25.5 m));
Pl46 = Plate(Point(14.36 m,9.5 m,25.5 m),Point(14.36 m,27.36 m,25.5 m),Point(0 m,27.36 m,25.5 m),Point(0 m,9.5 m,25.5 m));
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Pl44, "Pl47");
MyModelTransformerMap.Add(Pl45, "Pl48");
MyModelTransformerMap.Add(Pl46, "Pl49");
ModelTransformer(MyModelTransformerMap).copyTranslate(Vector3d(0, 0, 8));
Pl47.thickness = Th03;
Pl49.thickness = Th03;
Pl48.thickness = Th03;
Pl47.material = Steel;
Pl49.material = Steel;
Pl48.material = Steel;
Pl50 = Plate(Point(27.36 m,0 m,25.5 m),Point(27.36 m,20.91 m,25.5 m),Point(27.36 m,20.91 m,33.5 m),Point(27.36 m,0 m,33.5 m));
Pl51 = Plate(Point(14.36 m,0 m,25.5 m),Point(14.36 m,27.36 m,25.5 m),Point(14.36 m,27.36 m,33.5 m),Point(14.36 m,0 m,33.5 m));
Pl52 = Plate(Point(0 m,9.5 m,25.5 m),Point(0 m,27.36 m,25.5 m),Point(0 m,27.36 m,33.5 m),Point(0 m,9.5 m,33.5 m));
Pl53 = Plate(Point(14.36 m,0 m,25.5 m),Point(27.36 m,0 m,25.5 m),Point(27.36 m,0 m,33.5 m),Point(14.36 m,0 m,33.5 m));
Pl54 = Plate(Point(0 m,9.5 m,25.5 m),Point(27.36 m,9.5 m,25.5 m),Point(27.36 m,9.5 m,33.5 m),Point(0 m,9.5 m,33.5 m));
Pl55 = Plate(Point(0 m,27.36 m,25.5 m),Point(20.91 m,27.36 m,25.5 m),Point(20.91 m,27.36 m,33.5 m),Point(0 m,27.36 m,33.5 m));
// Create circular horizontal plates inside column, let their surface normals point upwards
Curve52 = ModelCurve(Point(27.36 m,20.91 m,7 m), Point(31.92083874 m,22.79916126 m,7 m), Point(33.81 m,27.36 m,7 m));
Curve53 = ModelCurve(Point(20.91 m,27.36 m,7 m), Point(22.79916126 m,22.79916126 m,7 m), Point(27.36 m,20.91 m,7 m));
Curve54 = ModelCurve(Point(20.91 m,27.36 m,7 m), Point(22.79916126 m,31.92083874 m,7 m), Point(27.36 m,33.81 m,7 m));
Pl56 = CoverCurves(Curve51,Curve52,Curve53,Curve54);
Pl56.flipNormal();
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Pl56, "Pl57");
ModelTransformer(MyModelTransformerMap).copyTranslate(Vector3d(7.105427358e-15 m,7.105427358e-15 m,18.5 m));
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Pl56, "Pl58");
ModelTransformer(MyModelTransformerMap).copyTranslate(Vector3d(0 m,0 m,26.5 m));
// Create girders and stiffeners in top deck
Steel.setDefault();
Bm1 = StraightBeam(Point(0 m,27.36 m,33.5 m), Point(27.36 m,27.36 m,33.5 m));
autoMSet = Set();
autoMSet.add(Bm1);
autoMSet.moveTranslate(Vector3d(0, -2.736, 0),geUNCONNECTED);
Delete(autoMSet);
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Bm1, "Bm2");
ModelTransformer(MyModelTransformerMap).copyTranslate(Vector3d(0, -2.736, 0), 5);
Bm8 = StraightBeam(Point(14.36 m,0 m,33.5 m), Point(27.36 m,0 m,33.5 m));
autoMSet = Set();
autoMSet.add(Bm8);
autoMSet.moveTranslate(Vector3d(0, 2.736, 0),geUNCONNECTED);
Delete(autoMSet);
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Bm8, "Bm9");
ModelTransformer(MyModelTransformerMap).copyTranslate(Vector3d(0, 2.736, 0), 2);
Girder.setDefault();
Bm11 = StraightBeam(Point(0 m,9.5 m,33.5 m), Point(0 m,27.36 m,33.5 m));
autoMSet = Set();
autoMSet.add(Bm11);
autoMSet.moveTranslate(Vector3d(7.18, 0, 0),geUNCONNECTED);
Delete(autoMSet);
Bm12 = StraightBeam(Point(27.36 m,0 m,33.5 m), Point(27.36 m,27.36 m,33.5 m));
autoMSet = Set();
autoMSet.add(Bm12);
autoMSet.moveTranslate(Vector3d(-7.36, 0, 0),geUNCONNECTED);
Delete(autoMSet);
Bm1.CurveOffset.CurveOffset = AlignedCurveOffset(frFlushTop, 0 m);
Bm2.CurveOffset.CurveOffset = AlignedCurveOffset(frFlushTop, 0 m);
Bm3.CurveOffset.CurveOffset = AlignedCurveOffset(frFlushTop, 0 m);
Bm4.CurveOffset.CurveOffset = AlignedCurveOffset(frFlushTop, 0 m);
Bm5.CurveOffset.CurveOffset = AlignedCurveOffset(frFlushTop, 0 m);
Bm6.CurveOffset.CurveOffset = AlignedCurveOffset(frFlushTop, 0 m);
Bm8.CurveOffset.CurveOffset = AlignedCurveOffset(frFlushTop, 0 m);
Bm9.CurveOffset.CurveOffset = AlignedCurveOffset(frFlushTop, 0 m);
Bm10.CurveOffset.CurveOffset = AlignedCurveOffset(frFlushTop, 0 m);
Bm11.CurveOffset.CurveOffset = AlignedCurveOffset(frFlushTop, 0 m);
Bm12.CurveOffset.CurveOffset = AlignedCurveOffset(frFlushTop, 0 m);
// Mirror model in X-direction
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Bm1, "Bm13");
MyModelTransformerMap.Add(Bm2, "Bm14");
MyModelTransformerMap.Add(Bm3, "Bm15");
MyModelTransformerMap.Add(Bm4, "Bm16");
MyModelTransformerMap.Add(Bm5, "Bm17");
MyModelTransformerMap.Add(Bm6, "Bm18");
MyModelTransformerMap.Add(Bm8, "Bm19");
MyModelTransformerMap.Add(Bm9, "Bm20");
MyModelTransformerMap.Add(Bm10, "Bm21");
MyModelTransformerMap.Add(Bm11, "Bm22");
MyModelTransformerMap.Add(Bm12, "Bm23");
MyModelTransformerMap.Add(Pl1, "Pl59");
MyModelTransformerMap.Add(Pl2, "Pl60");
MyModelTransformerMap.Add(Pl3, "Pl61");
MyModelTransformerMap.Add(Pl4, "Pl62");
MyModelTransformerMap.Add(Pl5, "Pl63");
MyModelTransformerMap.Add(Pl6, "Pl64");
MyModelTransformerMap.Add(Pl7, "Pl65");
MyModelTransformerMap.Add(Pl8, "Pl66");
MyModelTransformerMap.Add(Pl11, "Pl67");
MyModelTransformerMap.Add(Pl12, "Pl68");
MyModelTransformerMap.Add(Pl13, "Pl69");
MyModelTransformerMap.Add(Pl14, "Pl70");
MyModelTransformerMap.Add(Pl15, "Pl71");
MyModelTransformerMap.Add(Pl16, "Pl72");
MyModelTransformerMap.Add(Pl17, "Pl73");
MyModelTransformerMap.Add(Pl18, "Pl74");
MyModelTransformerMap.Add(Pl19, "Pl75");
MyModelTransformerMap.Add(Pl20, "Pl76");
MyModelTransformerMap.Add(Pl21, "Pl77");
MyModelTransformerMap.Add(Pl22, "Pl78");
MyModelTransformerMap.Add(Pl23, "Pl79");
MyModelTransformerMap.Add(Pl24, "Pl80");
MyModelTransformerMap.Add(Pl25, "Pl81");
MyModelTransformerMap.Add(Pl26, "Pl82");
MyModelTransformerMap.Add(Pl28, "Pl83");
MyModelTransformerMap.Add(Pl29, "Pl84");
MyModelTransformerMap.Add(Pl30, "Pl85");
MyModelTransformerMap.Add(Pl31, "Pl86");
MyModelTransformerMap.Add(Pl32, "Pl87");
MyModelTransformerMap.Add(Pl33, "Pl88");
MyModelTransformerMap.Add(Pl34, "Pl89");
MyModelTransformerMap.Add(Pl35, "Pl90");
MyModelTransformerMap.Add(Pl36, "Pl91");
MyModelTransformerMap.Add(Pl37, "Pl92");
MyModelTransformerMap.Add(Pl38, "Pl93");
MyModelTransformerMap.Add(Pl39, "Pl94");
MyModelTransformerMap.Add(Pl40, "Pl95");
MyModelTransformerMap.Add(Pl41, "Pl96");
MyModelTransformerMap.Add(Pl42, "Pl97");
MyModelTransformerMap.Add(Pl43, "Pl98");
MyModelTransformerMap.Add(Pl44, "Pl99");
MyModelTransformerMap.Add(Pl45, "Pl100");
MyModelTransformerMap.Add(Pl46, "Pl101");
MyModelTransformerMap.Add(Pl47, "Pl102");
MyModelTransformerMap.Add(Pl48, "Pl103");
MyModelTransformerMap.Add(Pl49, "Pl104");
MyModelTransformerMap.Add(Pl50, "Pl105");
MyModelTransformerMap.Add(Pl51, "Pl106");
MyModelTransformerMap.Add(Pl52, "Pl107");
MyModelTransformerMap.Add(Pl53, "Pl108");
MyModelTransformerMap.Add(Pl54, "Pl109");
MyModelTransformerMap.Add(Pl55, "Pl110");
MyModelTransformerMap.Add(Pl56, "Pl111");
MyModelTransformerMap.Add(Pl57, "Pl112");
MyModelTransformerMap.Add(Pl58, "Pl113");
ModelTransformer(MyModelTransformerMap).copyMirror(Point(0, 0, 0), Vector3d(1, 0, 0));
// Mirror model in Y-direction
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Bm1, "Bm24");
MyModelTransformerMap.Add(Bm2, "Bm25");
MyModelTransformerMap.Add(Bm3, "Bm26");
MyModelTransformerMap.Add(Bm4, "Bm27");
MyModelTransformerMap.Add(Bm5, "Bm28");
MyModelTransformerMap.Add(Bm6, "Bm29");
MyModelTransformerMap.Add(Bm8, "Bm30");
MyModelTransformerMap.Add(Bm9, "Bm31");
MyModelTransformerMap.Add(Bm10, "Bm32");
MyModelTransformerMap.Add(Bm11, "Bm33");
MyModelTransformerMap.Add(Bm12, "Bm34");
MyModelTransformerMap.Add(Bm13, "Bm35");
MyModelTransformerMap.Add(Bm14, "Bm36");
MyModelTransformerMap.Add(Bm15, "Bm37");
MyModelTransformerMap.Add(Bm16, "Bm38");
MyModelTransformerMap.Add(Bm17, "Bm39");
MyModelTransformerMap.Add(Bm18, "Bm40");
MyModelTransformerMap.Add(Bm19, "Bm41");
MyModelTransformerMap.Add(Bm20, "Bm42");
MyModelTransformerMap.Add(Bm21, "Bm43");
MyModelTransformerMap.Add(Bm22, "Bm44");
MyModelTransformerMap.Add(Bm23, "Bm45");
MyModelTransformerMap.Add(Pl1, "Pl74");
MyModelTransformerMap.Add(Pl2, "Pl107");
MyModelTransformerMap.Add(Pl3, "Pl114");
MyModelTransformerMap.Add(Pl4, "Pl115");
MyModelTransformerMap.Add(Pl5, "Pl116");
MyModelTransformerMap.Add(Pl6, "Pl117");
MyModelTransformerMap.Add(Pl7, "Pl118");
MyModelTransformerMap.Add(Pl8, "Pl119");
MyModelTransformerMap.Add(Pl11, "Pl120");
MyModelTransformerMap.Add(Pl12, "Pl121");
MyModelTransformerMap.Add(Pl13, "Pl122");
MyModelTransformerMap.Add(Pl14, "Pl123");
MyModelTransformerMap.Add(Pl15, "Pl124");
MyModelTransformerMap.Add(Pl16, "Pl125");
MyModelTransformerMap.Add(Pl17, "Pl126");
MyModelTransformerMap.Add(Pl18, "Pl127");
MyModelTransformerMap.Add(Pl19, "Pl128");
MyModelTransformerMap.Add(Pl20, "Pl129");
MyModelTransformerMap.Add(Pl21, "Pl130");
MyModelTransformerMap.Add(Pl22, "Pl131");
MyModelTransformerMap.Add(Pl23, "Pl132");
MyModelTransformerMap.Add(Pl24, "Pl133");
MyModelTransformerMap.Add(Pl25, "Pl134");
MyModelTransformerMap.Add(Pl26, "Pl135");
MyModelTransformerMap.Add(Pl28, "Pl136");
MyModelTransformerMap.Add(Pl29, "Pl137");
MyModelTransformerMap.Add(Pl30, "Pl138");
MyModelTransformerMap.Add(Pl31, "Pl139");
MyModelTransformerMap.Add(Pl32, "Pl140");
MyModelTransformerMap.Add(Pl33, "Pl141");
MyModelTransformerMap.Add(Pl34, "Pl142");
MyModelTransformerMap.Add(Pl35, "Pl143");
MyModelTransformerMap.Add(Pl36, "Pl144");
MyModelTransformerMap.Add(Pl37, "Pl145");
MyModelTransformerMap.Add(Pl38, "Pl146");
MyModelTransformerMap.Add(Pl39, "Pl147");
MyModelTransformerMap.Add(Pl40, "Pl148");
MyModelTransformerMap.Add(Pl41, "Pl149");
MyModelTransformerMap.Add(Pl42, "Pl150");
MyModelTransformerMap.Add(Pl43, "Pl151");
MyModelTransformerMap.Add(Pl44, "Pl152");
MyModelTransformerMap.Add(Pl45, "Pl153");
MyModelTransformerMap.Add(Pl46, "Pl154");
MyModelTransformerMap.Add(Pl47, "Pl155");
MyModelTransformerMap.Add(Pl48, "Pl156");
MyModelTransformerMap.Add(Pl49, "Pl157");
MyModelTransformerMap.Add(Pl50, "Pl158");
MyModelTransformerMap.Add(Pl51, "Pl159");
MyModelTransformerMap.Add(Pl52, "Pl160");
MyModelTransformerMap.Add(Pl53, "Pl161");
MyModelTransformerMap.Add(Pl54, "Pl162");
MyModelTransformerMap.Add(Pl55, "Pl163");
MyModelTransformerMap.Add(Pl56, "Pl164");
MyModelTransformerMap.Add(Pl57, "Pl165");
MyModelTransformerMap.Add(Pl58, "Pl166");
MyModelTransformerMap.Add(Pl59, "Pl167");
MyModelTransformerMap.Add(Pl60, "Pl168");
MyModelTransformerMap.Add(Pl61, "Pl169");
MyModelTransformerMap.Add(Pl62, "Pl170");
MyModelTransformerMap.Add(Pl63, "Pl171");
MyModelTransformerMap.Add(Pl64, "Pl172");
MyModelTransformerMap.Add(Pl65, "Pl173");
MyModelTransformerMap.Add(Pl66, "Pl174");
MyModelTransformerMap.Add(Pl67, "Pl175");
MyModelTransformerMap.Add(Pl68, "Pl176");
MyModelTransformerMap.Add(Pl69, "Pl177");
MyModelTransformerMap.Add(Pl70, "Pl178");
MyModelTransformerMap.Add(Pl71, "Pl179");
MyModelTransformerMap.Add(Pl72, "Pl180");
MyModelTransformerMap.Add(Pl73, "Pl181");
MyModelTransformerMap.Add(Pl75, "Pl182");
MyModelTransformerMap.Add(Pl76, "Pl183");
MyModelTransformerMap.Add(Pl77, "Pl184");
MyModelTransformerMap.Add(Pl78, "Pl185");
MyModelTransformerMap.Add(Pl79, "Pl186");
MyModelTransformerMap.Add(Pl80, "Pl187");
MyModelTransformerMap.Add(Pl81, "Pl188");
MyModelTransformerMap.Add(Pl82, "Pl189");
MyModelTransformerMap.Add(Pl83, "Pl190");
MyModelTransformerMap.Add(Pl84, "Pl191");
MyModelTransformerMap.Add(Pl85, "Pl192");
MyModelTransformerMap.Add(Pl86, "Pl193");
MyModelTransformerMap.Add(Pl87, "Pl194");
MyModelTransformerMap.Add(Pl88, "Pl195");
MyModelTransformerMap.Add(Pl89, "Pl196");
MyModelTransformerMap.Add(Pl90, "Pl197");
MyModelTransformerMap.Add(Pl91, "Pl198");
MyModelTransformerMap.Add(Pl92, "Pl199");
MyModelTransformerMap.Add(Pl93, "Pl200");
MyModelTransformerMap.Add(Pl94, "Pl201");
MyModelTransformerMap.Add(Pl95, "Pl202");
MyModelTransformerMap.Add(Pl96, "Pl203");
MyModelTransformerMap.Add(Pl97, "Pl204");
MyModelTransformerMap.Add(Pl98, "Pl205");
MyModelTransformerMap.Add(Pl99, "Pl206");
MyModelTransformerMap.Add(Pl100, "Pl207");
MyModelTransformerMap.Add(Pl101, "Pl208");
MyModelTransformerMap.Add(Pl102, "Pl209");
MyModelTransformerMap.Add(Pl103, "Pl210");
MyModelTransformerMap.Add(Pl104, "Pl211");
MyModelTransformerMap.Add(Pl105, "Pl212");
MyModelTransformerMap.Add(Pl106, "Pl213");
MyModelTransformerMap.Add(Pl108, "Pl214");
MyModelTransformerMap.Add(Pl109, "Pl215");
MyModelTransformerMap.Add(Pl110, "Pl216");
MyModelTransformerMap.Add(Pl111, "Pl217");
MyModelTransformerMap.Add(Pl112, "Pl218");
MyModelTransformerMap.Add(Pl113, "Pl219");
ModelTransformer(MyModelTransformerMap).copyMirror(Point(0, 0, 0), Vector3d(0, 1, 0));
// Create Morison model and export T2.FEM
Pipe1.setDefault();
Bm7 = StraightBeam(Point(27.36 m,-20.91 m,7 m), Point(27.36 m,20.91 m,7 m));
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Bm7, "Bm46");
ModelTransformer(MyModelTransformerMap).copyTranslate(Vector3d(-54.72 m,0 m,0 m));
MorisonBeams = Set();
MorisonBeams.add(Bm46);
MorisonBeams.add(Bm7);
GenieRules.Meshing.superElementType = 2;
Analysis1.step(1).subset = MorisonBeams;
SimplifyTopology();
Analysis1.execute();
FemExporter = ExportMeshFem();
FemExporter.DoExport("T2.FEM");
// Create the derrick
Pipe2.setDefault();
Bm47 = StraightBeam(Point(14.36 m,9.5 m,33.5 m), Point(14.36 m,9.5 m,33.5 m + 5m));
Bm48 = StraightBeam(Point(14.36 m,9.5 m,38.5 m), Point(1, 1, 65));
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Bm47, "Bm49");
MyModelTransformerMap.Add(Bm48, "Bm50");
ModelTransformer(MyModelTransformerMap).copyMirror(Point(0, 0, 0), Vector3d(1, 0, 0));
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Bm47, "Bm51");
MyModelTransformerMap.Add(Bm48, "Bm52");
MyModelTransformerMap.Add(Bm49, "Bm53");
MyModelTransformerMap.Add(Bm50, "Bm54");
ModelTransformer(MyModelTransformerMap).copyMirror(Point(0, 0, 0), Vector3d(0, 1, 0));
Bm55 = StraightBeam(Point(1 m,1 m,65 m), Point(-1 m,1 m,65 m));
Bm56 = StraightBeam(Point(-1 m,1 m,65 m), Point(-1 m,-1 m,65 m));
Bm57 = StraightBeam(Point(-1 m,-1 m,65 m), Point(1 m,-1 m,65 m));
Bm58 = StraightBeam(Point(1 m,-1 m,65 m), Point(1 m,1 m,65 m));
Pipe3.setDefault();
Bm59 = StraightBeam(Point(14.36 m,9.5 m,38.5 m), Point(-14.36 m,9.5 m,38.5 m));
Bm60 = StraightBeam(Point(-14.36 m,9.5 m,38.5 m), Point(-14.36 m,-9.5 m,38.5 m));
Bm61 = StraightBeam(Point(-14.36 m,-9.5 m,38.5 m), Point(14.36 m,-9.5 m,38.5 m));
Bm62 = StraightBeam(Point(14.36 m,-9.5 m,38.5 m), Point(14.36 m,9.5 m,38.5 m));
Bm63 = StraightBeam(Point(10.57886792 m,7.094339623 m,46 m), Point(-10.57886792 m,7.094339623 m,46 m));
Bm64 = StraightBeam(Point(-10.57886792 m,7.094339623 m,46 m), Point(-10.57886792 m,-7.094339623 m,46 m));
Bm65 = StraightBeam(Point(-10.57886792 m,-7.094339623 m,46 m), Point(10.57886792 m,-7.094339623 m,46 m));
Bm66 = StraightBeam(Point(10.57886792 m,-7.094339623 m,46 m), Point(10.57886792 m,7.094339623 m,46 m));
Bm67 = StraightBeam(Point(6.041509434 m,4.20754717 m,55 m), Point(-6.041509434 m,4.20754717 m,55 m));
Bm68 = StraightBeam(Point(-6.041509434 m,4.20754717 m,55 m), Point(-6.041509434 m,-4.20754717 m,55 m));
Bm69 = StraightBeam(Point(-6.041509434 m,-4.20754717 m,55 m), Point(6.041509434 m,-4.20754717 m,55 m));
Bm70 = StraightBeam(Point(6.041509434 m,-4.20754717 m,55 m), Point(6.041509434 m,4.20754717 m,55 m));
Bm71 = StraightBeam(Point(14.36 m,-9.5 m,38.5 m), Point(10.57886792 m,7.094339622 m,46 m));
Bm72 = StraightBeam(Point(10.57886792 m,7.094339622 m,46 m), Point(-14.36 m,9.5 m,38.5 m));
Bm73 = StraightBeam(Point(-14.36 m,9.5 m,38.5 m), Point(-10.57886792 m,-7.094339622 m,46 m));
Bm74 = StraightBeam(Point(-10.57886792 m,-7.094339622 m,46 m), Point(14.36 m,-9.5 m,38.5 m));
Bm75 = StraightBeam(Point(6.041509434 m,-4.20754717 m,55 m), Point(10.57886792 m,7.094339622 m,46 m));
Bm76 = StraightBeam(Point(10.57886792 m,7.094339622 m,46 m), Point(-6.041509434 m,4.20754717 m,55 m));
Bm77 = StraightBeam(Point(-6.041509434 m,4.20754717 m,55 m), Point(-10.57886792 m,-7.094339622 m,46 m));
Bm78 = StraightBeam(Point(-10.57886792 m,-7.094339622 m,46 m), Point(6.041509434 m,-4.20754717 m,55 m));
// Add mass points at top of derrick
Mass1 = PointMass(Point(1 m,1 m,65 m), 2e5);
Mass2 = PointMass(Point(-1 m,1 m,65 m), 2e5);
Mass3 = PointMass(Point(-1 m,-1 m,65 m), 2e5);
Mass4 = PointMass(Point(1 m,-1 m,65 m), 2e5);
// Create compartments
cm = CompartmentManager();
setNoActiveActivity();
LC2 = LoadCase();
LC2.compartment(Point(-13.38200131 m,-30.22943928 m,-1.875 m)).globalIntensity = DummyHydroPressure();
LC2.generateAppliedLoads();
LC3 = LoadCase();
LC3.compartment(Point(3.977998694 m,-30.22943928 m,-1.875 m)).globalIntensity = DummyHydroPressure();
LC3.generateAppliedLoads();
LC4 = LoadCase();
LC4.compartment(Point(0.9883580377 m,34.24705898 m,-1.875 m)).globalIntensity = DummyHydroPressure();
LC5 = LoadCase();
LC5.compartment(Point(-16.37164196 m,34.24705898 m,-1.875 m)).globalIntensity = DummyHydroPressure();
// Create equipment, position 4 places and represent as mass
Tank = PrismEquipment(3,5,4,15000);
LC5.setCurrent();
LC5.placeAtPoint(Tank,Point(20 m,19.152 m,33.5 m),LocalSystem(Vector3d(1 m,0 m,0 m), Vector3d(0 m,0 m,1 m)));
LC5.placeAtPoint(Tank, Point(20, 20, 33.5), LocalSystem(Vector3d(1 m,0 m,0 m), Vector3d(0 m,0 m,1 m)));
Equipment2 = Tank.copy();
LC5.placeAtPoint(Equipment2,Point(20 m,-19.152 m,33.5 m),LocalSystem(Vector3d(1 m,0 m,0 m), Vector3d(0 m,0 m,1 m)));
LC5.placeAtPoint(Equipment2, Point(20 m,-20 m,33.5 m), LocalSystem(Vector3d(1 m,0 m,0 m), Vector3d(0 m,0 m,1 m)));
Equipment3 = Tank.copy();
LC5.placeAtPoint(Equipment3,Point(-20 m,19.152 m,33.5 m),LocalSystem(Vector3d(1 m,0 m,0 m), Vector3d(0 m,0 m,1 m)));
LC5.placeAtPoint(Equipment3, Point(-20 m,20m,33.5 m), LocalSystem(Vector3d(1 m,0 m,0 m), Vector3d(0 m,0 m,1 m)));
Equipment4 = Tank.copy();
LC5.placeAtPoint(Equipment4,Point(-20 m,-19.152 m,33.5 m),LocalSystem(Vector3d(1 m,0 m,0 m), Vector3d(0 m,0 m,1 m)));
LC5.placeAtPoint(Equipment4, Point(-20 m,-20 m,33.5 m), LocalSystem(Vector3d(1 m,0 m,0 m), Vector3d(0 m,0 m,1 m)));
LC5.setAcceleration(Vector3d(0 m/s^2, 0 m/s^2, -9.80665 m/s^2));
LC5.excludeSelfWeight();
LC5.includeStructureMassWithRotationField();
LC5.meshLoadsAsMass(false);
LC5.equipmentAsMass();
// Add support points: statically determined
Sp1 = SupportPoint(Point(-27.36 m,-27.36 m,-7.5 m));
Sp2 = SupportPoint(Point(27.36 m,-27.36 m,-7.5 m));
Sp3 = SupportPoint(Point(27.36 m,27.36 m,-7.5 m));
Sp2.boundary.Rx = Free;
Sp2.boundary.Ry = Free;
Sp2.boundary.Rz = Free;
Sp1.boundary.Dx = Free;
Sp1.boundary.Rx = Free;
Sp1.boundary.Ry = Free;
Sp1.boundary.Rz = Free;
Sp3.boundary.Dy = Free;
Sp3.boundary.Rx = Free;
Sp3.boundary.Ry = Free;
Sp3.boundary.Rz = Free;
// Create FE structural model
Md_3 = MeshDensity(3);
Pl1.meshDensity = Md_3;
Pl2.meshDensity = Md_3;
Pl3.meshDensity = Md_3;
Pl4.meshDensity = Md_3;
Pl5.meshDensity = Md_3;
Pl6.meshDensity = Md_3;
Pl7.meshDensity = Md_3;
Pl8.meshDensity = Md_3;
Pl43.meshDensity = Md_3;
Pl11.meshDensity = Md_3;
Pl12.meshDensity = Md_3;
Pl13.meshDensity = Md_3;
Pl14.meshDensity = Md_3;
Pl15.meshDensity = Md_3;
Pl19.meshDensity = Md_3;
Pl20.meshDensity = Md_3;
Pl22.meshDensity = Md_3;
Pl21.meshDensity = Md_3;
Pl23.meshDensity = Md_3;
Pl24.meshDensity = Md_3;
Pl26.meshDensity = Md_3;
Pl25.meshDensity = Md_3;
Pl31.meshDensity = Md_3;
Pl33.meshDensity = Md_3;
Pl36.meshDensity = Md_3;
Pl39.meshDensity = Md_3;
Pl34.meshDensity = Md_3;
Pl35.meshDensity = Md_3;
Pl37.meshDensity = Md_3;
Pl32.meshDensity = Md_3;
Pl30.meshDensity = Md_3;
Pl38.meshDensity = Md_3;
Pl40.meshDensity = Md_3;
Pl42.meshDensity = Md_3;
Pl41.meshDensity = Md_3;
Pl56.meshDensity = Md_3;
Pl64.meshDensity = Md_3;
Pl60.meshDensity = Md_3;
Pl61.meshDensity = Md_3;
Pl63.meshDensity = Md_3;
Pl65.meshDensity = Md_3;
Pl66.meshDensity = Md_3;
Pl75.meshDensity = Md_3;
Pl76.meshDensity = Md_3;
Pl79.meshDensity = Md_3;
Pl81.meshDensity = Md_3;
Pl80.meshDensity = Md_3;
Pl82.meshDensity = Md_3;
Pl77.meshDensity = Md_3;
Pl78.meshDensity = Md_3;
Pl119.meshDensity = Md_3;
Pl132.meshDensity = Md_3;
Pl130.meshDensity = Md_3;
Pl116.meshDensity = Md_3;
Pl107.meshDensity = Md_3;
Pl114.meshDensity = Md_3;
Pl131.meshDensity = Md_3;
Pl133.meshDensity = Md_3;
Pl135.meshDensity = Md_3;
Pl128.meshDensity = Md_3;
Pl118.meshDensity = Md_3;
Pl129.meshDensity = Md_3;
Pl117.meshDensity = Md_3;
Pl134.meshDensity = Md_3;
Pl173.meshDensity = Md_3;
Pl174.meshDensity = Md_3;
Pl182.meshDensity = Md_3;
Pl172.meshDensity = Md_3;
Pl171.meshDensity = Md_3;
Pl168.meshDensity = Md_3;
Pl169.meshDensity = Md_3;
Pl186.meshDensity = Md_3;
Pl183.meshDensity = Md_3;
Pl16.meshDensity = Md_3;
Pl17.meshDensity = Md_3;
Pl18.meshDensity = Md_3;
Pl45.meshDensity = Md_3;
Pl28.meshDensity = Md_3;
Pl44.meshDensity = Md_3;
Pl29.meshDensity = Md_3;
Pl46.meshDensity = Md_3;
Pl48.meshDensity = Md_3;
Pl49.meshDensity = Md_3;
Pl47.meshDensity = Md_3;
Pl50.meshDensity = Md_3;
Pl51.meshDensity = Md_3;
Pl52.meshDensity = Md_3;
Pl53.meshDensity = Md_3;
Pl54.meshDensity = Md_3;
Pl55.meshDensity = Md_3;
Pl57.meshDensity = Md_3;
Pl58.meshDensity = Md_3;
Pl59.meshDensity = Md_3;
Pl62.meshDensity = Md_3;
Pl70.meshDensity = Md_3;
Pl71.meshDensity = Md_3;
Pl68.meshDensity = Md_3;
Pl98.meshDensity = Md_3;
Pl69.meshDensity = Md_3;
Pl67.meshDensity = Md_3;
Pl93.meshDensity = Md_3;
Pl89.meshDensity = Md_3;
Pl95.meshDensity = Md_3;
Pl87.meshDensity = Md_3;
Pl96.meshDensity = Md_3;
Pl111.meshDensity = Md_3;
Pl88.meshDensity = Md_3;
Pl72.meshDensity = Md_3;
Pl97.meshDensity = Md_3;
Pl92.meshDensity = Md_3;
Pl94.meshDensity = Md_3;
Pl86.meshDensity = Md_3;
Pl91.meshDensity = Md_3;
Pl90.meshDensity = Md_3;
Pl85.meshDensity = Md_3;
Pl84.meshDensity = Md_3;
Pl102.meshDensity = Md_3;
Pl103.meshDensity = Md_3;
Pl73.meshDensity = Md_3;
Pl106.meshDensity = Md_3;
Pl83.meshDensity = Md_3;
Pl101.meshDensity = Md_3;
Pl124.meshDensity = Md_3;
Pl108.meshDensity = Md_3;
Pl115.meshDensity = Md_3;
Pl104.meshDensity = Md_3;
Pl110.meshDensity = Md_3;
Pl105.meshDensity = Md_3;
Pl109.meshDensity = Md_3;
Pl99.meshDensity = Md_3;
Pl100.meshDensity = Md_3;
Pl112.meshDensity = Md_3;
Pl113.meshDensity = Md_3;
Pl151.meshDensity = Md_3;
Pl74.meshDensity = Md_3;
Pl122.meshDensity = Md_3;
Pl120.meshDensity = Md_3;
Pl121.meshDensity = Md_3;
Pl123.meshDensity = Md_3;
Pl147.meshDensity = Md_3;
Pl145.meshDensity = Md_3;
Pl148.meshDensity = Md_3;
Pl140.meshDensity = Md_3;
Pl139.meshDensity = Md_3;
Pl164.meshDensity = Md_3;
Pl138.meshDensity = Md_3;
Pl146.meshDensity = Md_3;
Pl141.meshDensity = Md_3;
Pl144.meshDensity = Md_3;
Pl150.meshDensity = Md_3;
Pl143.meshDensity = Md_3;
Pl142.meshDensity = Md_3;
Pl149.meshDensity = Md_3;
Pl157.meshDensity = Md_3;
Pl137.meshDensity = Md_3;
Pl154.meshDensity = Md_3;
Pl152.meshDensity = Md_3;
Pl158.meshDensity = Md_3;
Pl136.meshDensity = Md_3;
Pl159.meshDensity = Md_3;
Pl126.meshDensity = Md_3;
Pl155.meshDensity = Md_3;
Pl160.meshDensity = Md_3;
Pl153.meshDensity = Md_3;
Pl156.meshDensity = Md_3;
Pl127.meshDensity = Md_3;
Pl125.meshDensity = Md_3;
Pl203.meshDensity = Md_3;
Pl217.meshDensity = Md_3;
Pl202.meshDensity = Md_3;
Pl195.meshDensity = Md_3;
Pl205.meshDensity = Md_3;
Pl163.meshDensity = Md_3;
Pl179.meshDensity = Md_3;
Pl194.meshDensity = Md_3;
Pl180.meshDensity = Md_3;
Pl165.meshDensity = Md_3;
Pl175.meshDensity = Md_3;
Pl177.meshDensity = Md_3;
Pl200.meshDensity = Md_3;
Pl162.meshDensity = Md_3;
Pl166.meshDensity = Md_3;
Pl176.meshDensity = Md_3;
Pl170.meshDensity = Md_3;
Pl196.meshDensity = Md_3;
Pl167.meshDensity = Md_3;
Pl178.meshDensity = Md_3;
Pl201.meshDensity = Md_3;
Pl209.meshDensity = Md_3;
Pl190.meshDensity = Md_3;
Pl208.meshDensity = Md_3;
Pl204.meshDensity = Md_3;
Pl197.meshDensity = Md_3;
Pl213.meshDensity = Md_3;
Pl191.meshDensity = Md_3;
Pl198.meshDensity = Md_3;
Pl211.meshDensity = Md_3;
Pl216.meshDensity = Md_3;
Pl212.meshDensity = Md_3;
Pl215.meshDensity = Md_3;
Pl206.meshDensity = Md_3;
Pl181.meshDensity = Md_3;
Pl210.meshDensity = Md_3;
Pl207.meshDensity = Md_3;
Pl218.meshDensity = Md_3;
Pl188.meshDensity = Md_3;
Pl185.meshDensity = Md_3;
Pl184.meshDensity = Md_3;
Pl187.meshDensity = Md_3;
Pl189.meshDensity = Md_3;
Pl199.meshDensity = Md_3;
Pl192.meshDensity = Md_3;
Pl193.meshDensity = Md_3;
Pl219.meshDensity = Md_3;
// Create FE mesh and export as T3.FEM
GenieRules.Meshing.superElementType = 3;
Analysis1.setActive();
Analysis1.step(1).setNoSubset();
SimplifyTopology();
Analysis1.execute();
FemExporter = ExportMeshFem();
FemExporter.DoExport("T3.FEM");
