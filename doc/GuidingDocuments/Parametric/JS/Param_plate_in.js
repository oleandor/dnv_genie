//
//**********************************
//
// TASK: TO DEFINE A PLATE WITH A HOLE TO SEE THE EFFECT OF VONMISES STRESSES WHEN MODIFYING THE HOLE RADIUS
//
// LOOK AT THE STRESSES FOR A RADIUS RANGING 0.5M, 1.0M, 1.5M AND 2.0 M
//
// THE RADIUS CAN NOT BE SET LARGER THAN 2.25 M UNLESS MODIFYING THE REFINED MESH ZONE
//
// TTHE DEFAULT RADIIUS IS 1.00 M
//
//**********************************
//
//
// Define variables
//
// Hole radius
//
Radius = 1.00m;
//
// Plate extension
//
Corner1 =Point(0m,0m,0m);
Corner2 =Point(10m,0m,0m);
Corner3 =Point(10m,10m,0m);
Corner4 =Point(0m,10m,0m);
//
// Position of plate origin
//
Hole_origin = Point(5m, 5m, 0m);
//
// Define the extent of the refined mesh zone
//
DistX1 = 2.5m;
DistX2 = 7.5m;
DistY1= 2.5m;
DistY2 = 7.5m;
//
// Make the plate
//
Pl1 = Plate(Corner1,Corner2,Corner3,Corner4);
//
// Create circle line used to cut plate and cut the plate
//
Point1 = Hole_origin.copyTranslate(Vector3d(Radius,0,0));
Curve1 = GuideCircle(Hole_origin, Point1, Corner4);
Pl2 = Pl1.divide(Curve1);
Delete(Pl2);
//
// Divide the plate into refined mesh zone
//
Pl2 = Pl1.divide(XPlane3d(DistX1));
Pl3 = Pl2.divide(XPlane3d(DistX2));
Pl4 = Pl2.divide(YPlane3d(DistY1));
Pl5 = Pl4.divide(YPlane3d(DistY2));
Pl1.join(Pl2);
Pl1.join(Pl3);
Pl1.join(Pl5);
Pl1.simplifyTopology();
//
// Define boundary conditions
//
Sc1 = SupportCurve(ModelCurve(Point(0 m,10 m,0 m), Point(0 m,5 m,0 m), Point(0 m,0 m,0 m)));
Sc1.localSystemRule = ConstantLocalSystem(LocalSystem(Vector3d(1 m,0 m,0 m), Vector3d(0 m,0 m,1 m)));
//
// Define mesh settings
//
Md_fine = MeshDensity(0.125);
Md_fine.growthRate = 1.05;
Md_coarse = MeshDensity(0.5);
Md_coarse.growthRate = 1.05;
// 
// Apply mesh settings
//
Pl4.meshDensity = Md_fine;
Pl1.meshDensity = Md_coarse;
//
// Define mesh rules and user paver meshing for internal part and mesh it first - use linearized edge meshing
//
GenieRules.Meshing.elementType = mp2ndOrder;
GenieRules.Meshing.edgeMeshStrategy = LinearDistributionEdge;
Paver = MeshOptionFace();
Paver.meshStrategy = AdvancingFrontQuadMesher;
Pl4.meshOption = Paver;
//
// Define mesh priorities and mesh the fine zone first
//
Mesh_pri = MeshPriority();
Mesh_pri.addMeshPriority();
Mesh_pri.meshPriority(1).add(Pl4);
//
// Define analysis
//
Analysis1 = Analysis(true);
Analysis1.add(MeshActivity());
Analysis1.add(LinearAnalysis());
Analysis1.add(LoadResultsActivity());
Analysis1.step(1).meshPriority = Mesh_pri;
//
// Define properties and apply
//
S_355 = MaterialLinear(355000000 Pa, 7850 Kg/m^3, 2.1e+011 Pa, 0.3, 1.2e-005 delC^-1, 0.03 N*s/m, 510000000 Pa);
Th_plate = Thickness(20mm);
Pl1.thickness = Th_plate;
Pl4.thickness = Th_plate;
Pl1.material = S_355;
Pl4.material = S_355;
//
// Define a line load
//
Line_load = LoadCase(Analysis1);
LLoad1 = LineLoad(Line_load, FootprintLine(Corner2, Corner3), Component1dLinear(Vector3d(100, 0 N/m, 0 N/m), Vector3d(100, 0 N/m, 0 N/m)));
//
// To run analysis manually start or to remove the comments // in the line below
//
//Analysis1.execute();

