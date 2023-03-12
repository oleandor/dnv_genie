// GeniE Tubular Joint Shell Refined input
GenieRules.Compatibility.version = "V8.2-04";
GenieRules.Tolerances.useTolerantModelling = true;
GenieRules.Tolerances.angleTolerance = 2 deg;
GenieRules.Meshing.autoSimplifyTopology = true;
GenieRules.Meshing.eliminateInternalEdges = true;
GenieRules.BeamCreation.DefaultCurveOffset = ReparameterizedBeamCurveOffset();
GenieRules.Transformation.DefaultConnectedCopy = false;
// Import the workspace of the tubular joint beam model
importer = WorkspaceImporter();
importer.DoImport("Tubular_Joint_Beams.gnx");
SetNoLoadcase();
// Create mesh density
MeshDensity1 = MeshDensity(0.1);
MeshDensity2 = MeshDensity(0.025);
// Convert beams to shell
Jt1_Shells = Set();
Jt1RefinementZones = Set();
Jt1TransitionZones = Set();
StructureConverter = StructureToPlateUtility();
StructureConverter.BraceOffset = -0.35 m;
StructureConverter.BraceSplittingRule = SplitBraceAtDistanceFromJoint(5, false);
StructureConverter.ChordOffset = -0.198413836 m;
StructureConverter.ChordSplittingRule = SplitAtDistanceFromJoint(4, false);
StructureConverter.CreateRefinementZones = true;
StructureConverter.CreateTransitionZones = true;
StructureConverter.DisconnectChordFromNonstructuralBeams = true;
StructureConverter.MeshDensity = MeshDensity1;
StructureConverter.MeshDensityInMeshTransitionZones = MeshDensity2;
StructureConverter.MeshRefinementZonesDataFromBraces = Array(MeshRefinementZoneDataFromBrace(Jt1.GetBrace(Bm2), 2, -0.02341383599 m, 99, -0.02341383599 m), MeshRefinementZoneDataFromBrace(Jt1.GetBrace(Bm3), 1, -0.008, 141, -0.01693333318 m), MeshRefinementZoneDataFromBrace(Jt1.GetBrace(Bm4), 2, -0.01693333318 m, 191, -0.01693333318 m), MeshRefinementZoneDataFromBrace(Jt1.GetBrace(Bm5), 2, -0.01693333318 m, 191, -0.01693333318 m), MeshRefinementZoneDataFromBrace(Jt1.GetBrace(Bm6), 1, -0.008, 141, -0.01693333318 m), MeshRefinementZoneDataFromBrace(Jt1.GetBrace(Bm7), 2, -0.01693333318 m, 191, -0.01693333318 m), MeshRefinementZoneDataFromBrace(Jt1.GetBrace(Bm8), 2, -0.01693333318 m, 191, -0.01693333318 m));
StructureConverter.PlugOffset = -0.175 m;
StructureConverter.SetContainingMeshRefinementZones = Jt1RefinementZones;
StructureConverter.SetContainingMeshTransitionZones = Jt1TransitionZones;
StructureConverter.SetContainingShells = Jt1_Shells;
StructureConverter.SplitChordAndBracesAtSmartPositions = true;
StructureConverter.ThroughBraces = Array();
StructureConverter.ConvertJoint(Jt1);
SimplifyTopology();
// Set meshing algorithm
GenieRules.Meshing.faceMeshStrategy = AdvancingFrontQuadMesher;
// Run analysis
Analysis1.step(1).regenerateMeshOption = anAlwaysRegenerateMesh;
Analysis1.execute();
LC_Vert.setCurrent();
