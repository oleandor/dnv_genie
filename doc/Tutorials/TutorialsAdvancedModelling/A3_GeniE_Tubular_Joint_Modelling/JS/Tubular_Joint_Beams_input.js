// GeniE Tubular Joint Beams input
GenieRules.Compatibility.version = "V8.2-04";
GenieRules.Tolerances.useTolerantModelling = true;
GenieRules.Tolerances.angleTolerance = 2 deg;
GenieRules.Meshing.autoSimplifyTopology = true;
GenieRules.Meshing.eliminateInternalEdges = true;
GenieRules.BeamCreation.DefaultCurveOffset = ReparameterizedBeamCurveOffset();
GenieRules.Transformation.DefaultConnectedCopy = false;
// Create material and pipe sections
St52 = MaterialLinear(335E6, 7850 kg/m^3, 2.1e+11 Pa, 0.3, 1.2e-05 delC^-1, 0.03 N*s/m);
Pipe_2_50 = PipeSection(2, 50 mm);
Pipe_1_16 = PipeSection(1, 16 mm);
Pipe_07_15 = PipeSection(0.7, 0.015 m);
Pipe_2_50.setDefault();
St52.setDefault();
// Create guide plane
GuidePlane1 = GuidePlane(Point(0 m,0 m,0 m),Point(10 m,0 m,0 m),Point(10 m,0 m,10 m),Point(0 m,0 m,10 m),4,4,1,1,1,1,1,1,1,1);
GuidePlane1.snapmode = true;
// Create beams
Bm1 = StraightBeam(Point(0 m,0 m,0 m), Point(0 m,0 m,10 m));
Bm2 = StraightBeam(Point(0 m,0 m,5 m), Point(6, 0, 5));
Bm2.section = Pipe_07_15;
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Bm2, "Bm3");
ModelTransformer(MyModelTransformerMap).copyRotate(Point(0 m,0 m,5 m), Vector3d(0, 0, 1), -45);
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Bm2, "Bm4");
ModelTransformer(MyModelTransformerMap).copyRotate(Point(0 m,0 m,5 m), Vector3d(0, 1, 0), -45);
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Bm2, "Bm5");
ModelTransformer(MyModelTransformerMap).copyRotate(Point(0 m,0 m,5 m), Vector3d(0, 1, 0), 45);
Bm4.section = Pipe_1_16;
Bm5.section = Pipe_1_16;
autoMSet = Set();
autoMSet.add(Bm4);
autoMSet.add(Bm5);
autoMSet.moveRotate(Point(0 m,0 m,5 m),Vector3d(0, 0, 1),-45,geUNCONNECTED);
Delete(autoMSet);
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Bm3, "Bm6");
MyModelTransformerMap.Add(Bm4, "Bm7");
MyModelTransformerMap.Add(Bm5, "Bm8");
ModelTransformer(MyModelTransformerMap).copyRotate(Point(0 m,0 m,5 m), Vector3d(0, 0, 1), 90);
// Create joint to allow introducing gaps and flushing braces
Jt1 = Joint(Point(0 m,0 m,5 m));
GenieRules.JointDesign.AutoAdjustSegmentLength = true;
AutoCan = Reinforcement(0.25,0.3 m);
JointCan = Reinforcement(0.25,0.3 m,false);
GenieRules.JointDesign.canReinforcement = JointCan;
GenieRules.JointDesign.canReinforcement = AutoCan;
AutoStub = Reinforcement(1, 0.6 m);
GenieRules.JointDesign.stubReinforcement = AutoStub;
AutoFixedLength = Reinforcement();
GenieRules.JointDesign.fixedLengthReinforcement = AutoFixedLength;
AutoCone = ConeSection(1,true);
GenieRules.JointDesign.coneSection = AutoCone;
for(i=1; i <= GenieRules.JointDesign.iterations; i++) {
   Jt1.autoGap();
}
Jt1.flushBraces();
// Add boundary conditions
Sp1 = SupportPoint(Point(0 m,0 m,0 m));
Sp2 = SupportPoint(Point(0 m,0 m,10 m));
Sp3 = SupportPoint(Point(3 m,-3 m,0.7573593129 m));
Sp4 = SupportPoint(Point(4.242640687 m,-4.242640687 m,5 m));
Sp5 = SupportPoint(Point(3 m,-3 m,9.242640687 m));
Sp6 = SupportPoint(Point(3 m,3 m,0.7573593129 m));
Sp7 = SupportPoint(Point(4.242640687 m,4.242640687 m,5 m));
Sp8 = SupportPoint(Point(3 m,3 m,9.242640687 m));
// Add loads
LC_Grav = LoadCase();
LC_Grav.setAcceleration(Vector3d(0 m/s^2, 0 m/s^2, -9.80665 m/s^2));
LC_Grav.includeSelfWeight();
LC_Grav.includeStructureMassWithRotationField();
LC_Vert = LoadCase();
PLoad1 = PointLoad(LC_Vert, FootprintPoint(Point(6 m,0 m,5 m)), PointForceMoment(Vector3d(0 N, 0 N, -1000 N), Vector3d(0 N*m, 0 N*m, 0 N*m)));
LC_Axial = LoadCase();
PLoad2 = PointLoad(LC_Axial, FootprintPoint(Point(6 m,0 m,5 m)), PointForceMoment(Vector3d(1000 N, 0 N, 0 N), Vector3d(0 N*m, 0 N*m, 0 N*m)));
LC_Hori = LoadCase();
PLoad3 = PointLoad(LC_Hori, FootprintPoint(Point(6 m,0 m,5 m)), PointForceMoment(Vector3d(0 N, 1000 N, 0 N), Vector3d(0 N*m, 0 N*m, 0 N*m)));
LC_Comb = LoadCombination();
LC_Comb.addCase(LC_Grav, 1);
LC_Comb.addCase(LC_Vert, 1);
LC_Comb.addCase(LC_Axial, 1);
LC_Comb.addCase(LC_Hori, 1);
LC_Comb.convertLoadToMass = false;
LC_Comb.EquipmentRep = EquipmentAsLineLoads;
// Create analysis activity
Analysis1 = Analysis(true);
Analysis1.add(MeshActivity());
Analysis1.add(LinearAnalysis());
Analysis1.step(2).useSestra10(true);
Analysis1.add(LoadResultsActivity());
Analysis1.setActive();
// Run analysis
SimplifyTopology();
Analysis1.execute();
LC_Vert.setCurrent();
