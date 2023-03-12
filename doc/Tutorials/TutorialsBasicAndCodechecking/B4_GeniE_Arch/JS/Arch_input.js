// GeniE input for tutorial GeniE Arch

GenieRules.Compatibility.version = "V7.14-03";
GenieRules.Tolerances.useTolerantModelling = true;
GenieRules.Tolerances.angleTolerance = 2 deg;

GenieRules.Meshing.autoSimplifyTopology = true;
GenieRules.Meshing.eliminateInternalEdges = true;
GenieRules.BeamCreation.DefaultCurveOffset = ReparameterizedBeamCurveOffset();
GenieRules.Transformation.DefaultConnectedCopy = false;

// Material and beam cross sections
St44 = MaterialLinear(255e6, 7850 kg/m^3, 2.1e+11 Pa, 0.3, 1.2e-05 delC^-1, 0.03 N*s/m);
Bar_25x25 = BarSection(25 mm, 25 mm);
HSS57_2X57_2X6_4 = BoxSection(0.0572 m, 0.0572 m, 0.0064 m, 0.0064 m, 0.0064 m);
HSS57_2X57_2X6_4.libraryGeneralSection = GeneralSection(0.00112 m^2, 8.16e-07 m^4, 4.71e-07 m^4, 4.71e-07 m^4, 0 m^4, 3.3032192e-05 m^3, 1.65e-05 m^3, 1.65e-05 m^3, 0.0005840748528 m^2, 0.0005840748528 m^2, 0 m, 6.938893904e-18 m, 1.2452608e-05 m^3, 1.2452608e-05 m^3, 2.09e-05 m^3, 2.09e-05 m^3);
HSS101_6X101_6X6_4 = BoxSection(0.102 m, 0.102 m, 0.0064 m, 0.0064 m, 0.0064 m);
HSS101_6X101_6X6_4.libraryGeneralSection = GeneralSection(0.00217 m^2, 5.32e-06 m^4, 3.25e-06 m^4, 3.25e-06 m^4, 0 m^4, 0.000116983808 m^3, 6.39e-05 m^3, 6.39e-05 m^3, 0.001090960595 m^2, 0.001090960595 m^2, 0 m, -1.387778781e-17 m, 4.3934464e-05 m^3, 4.3934464e-05 m^3, 7.69e-05 m^3, 7.69e-05 m^3);
HSS127X101_6X6_4 = BoxSection(0.127 m, 0.102 m, 0.0064 m, 0.0064 m, 0.0064 m);
HSS127X101_6X6_4.libraryGeneralSection = GeneralSection(0.00248 m^2, 7.51e-06 m^4, 5.57e-06 m^4, 3.94e-06 m^4, 0 m^4, 0.000147575808 m^3, 8.77e-05 m^3, 7.75e-05 m^3, 0.001110909603 m^2, 0.001347439051 m^2, 0 m, 1.387778781e-17 m, 6.0230464e-05 m^3, 5.1582464e-05 m^3, 0.000106 m^3, 9.13e-05 m^3);

// Guiding geometry
GuidePlane1 = GuidePlane(Point(0,0,0),Point(8,0,0),Point(8,0,10),Point(0,0,10),4,5,1,1,1,1,1,1,1,1,1);
GuidePlane1.snapmode = true;
Curve1 = CreateLineTwoPoints(Point(8 m,0 m,0 m), Point(8 m,0 m,10 m));
Curve2 = Curve1.divideAt(0.9);
//Curve1.copyRotate(Point(8 m,0 m,0 m),Vector3d(0,1,0),-5,10, IndexedNameMask(3));
Curve3 = Curve1.copyRotate(Point(8 m,0 m,0 m),Vector3d(0,1,0),-5*1);
Curve4 = Curve1.copyRotate(Point(8 m,0 m,0 m),Vector3d(0,1,0),-5*2);
Curve5 = Curve1.copyRotate(Point(8 m,0 m,0 m),Vector3d(0,1,0),-5*3);
Curve6 = Curve1.copyRotate(Point(8 m,0 m,0 m),Vector3d(0,1,0),-5*4);
Curve7 = Curve1.copyRotate(Point(8 m,0 m,0 m),Vector3d(0,1,0),-5*5);
Curve8 = Curve1.copyRotate(Point(8 m,0 m,0 m),Vector3d(0,1,0),-5*6);
Curve9 = Curve1.copyRotate(Point(8 m,0 m,0 m),Vector3d(0,1,0),-5*7);
Curve10 = Curve1.copyRotate(Point(8 m,0 m,0 m),Vector3d(0,1,0),-5*8);
Curve11 = Curve1.copyRotate(Point(8 m,0 m,0 m),Vector3d(0,1,0),-5*9);
Curve12 = Curve1.copyRotate(Point(8 m,0 m,0 m),Vector3d(0,1,0),-5*10);
//Curve2.copyRotate(Point(8 m,0 m,0 m),Vector3d(0,1,0),-5,10, IndexedNameMask(13));
Curve13 = Curve2.copyRotate(Point(8 m,0 m,0 m),Vector3d(0,1,0),-5*1);
Curve14 = Curve2.copyRotate(Point(8 m,0 m,0 m),Vector3d(0,1,0),-5*2);
Curve15 = Curve2.copyRotate(Point(8 m,0 m,0 m),Vector3d(0,1,0),-5*3);
Curve16 = Curve2.copyRotate(Point(8 m,0 m,0 m),Vector3d(0,1,0),-5*4);
Curve17 = Curve2.copyRotate(Point(8 m,0 m,0 m),Vector3d(0,1,0),-5*5);
Curve18 = Curve2.copyRotate(Point(8 m,0 m,0 m),Vector3d(0,1,0),-5*6);
Curve19 = Curve2.copyRotate(Point(8 m,0 m,0 m),Vector3d(0,1,0),-5*7);
Curve20 = Curve2.copyRotate(Point(8 m,0 m,0 m),Vector3d(0,1,0),-5*8);
Curve21 = Curve2.copyRotate(Point(8 m,0 m,0 m),Vector3d(0,1,0),-5*9);
Curve22 = Curve2.copyRotate(Point(8 m,0 m,0 m),Vector3d(0,1,0),-5*10);

// Create upper chord of arch
St44.setDefault();
HSS127X101_6X6_4.setDefault();
Bm1 = StraightBeam(Point(0.3395555688 m,0 m,6.427876097 m), Point(1.572123903 m,0 m,7.660444431 m));
Bm2 = StraightBeam(Point(1.572123903 m,0 m,7.660444431 m), Point(3 m,0 m,8.660254038 m));
Bm3 = StraightBeam(Point(3 m,0 m,8.660254038 m), Point(4.579798567 m,0 m,9.396926208 m));
Bm4 = StraightBeam(Point(4.579798567 m,0 m,9.396926208 m), Point(6.263518223 m,0 m,9.84807753 m));
Bm5 = StraightBeam(Point(6.263518223 m,0 m,9.84807753 m), Point(8 m,0 m,10 m));

// Create lower chord of arch
HSS101_6X101_6X6_4.setDefault();
Bm6 = StraightBeam(Point(1.636038969 m,0 m,6.363961031 m), Point(2.837812073 m,0 m,7.372368399 m));
Bm7 = StraightBeam(Point(2.837812073 m,0 m,7.372368399 m), Point(4.196435644 m,0 m,8.156770083 m));
Bm8 = StraightBeam(Point(4.196435644 m,0 m,8.156770083 m), Point(5.670628594 m,0 m,8.693332437 m));
Bm9 = StraightBeam(Point(5.670628594 m,0 m,8.693332437 m), Point(7.215598315 m,0 m,8.965752283 m));
Bm10 = StraightBeam(Point(7.215598315 m,0 m,8.965752283 m), Point(8 m,0 m,8.965752283 m));

// Create horizontal beam connecting upper and lower chord and delete superfluous part of lower chord
HSS57_2X57_2X6_4.setDefault();
Bm11 = StraightBeam(Point(0.3395555688 m,0 m,6.427876097 m), Point(1.712209979 m,0 m,6.427876097 m));
Validate(Bm6.primitivePartCount == 2);
Bm6.explode(IndexedNameMask(12));
Validate(Bm12);
Validate(Bm13);
Delete(Bm12);

// Create diagonal braces between upper and lower chord
Bm6 = StraightBeam(Point(1.712209979 m,0 m,6.427876097 m), Point(1.572123903 m,0 m,7.660444431 m));
Bm12 = StraightBeam(Point(1.572123903 m,0 m,7.660444431 m), Point(2.837812073 m,0 m,7.372368399 m));
Bm14 = StraightBeam(Point(2.837812073 m,0 m,7.372368399 m), Point(3 m,0 m,8.660254038 m));
Bm15 = StraightBeam(Point(3 m,0 m,8.660254038 m), Point(4.196435644 m,0 m,8.156770083 m));
Bm16 = StraightBeam(Point(4.196435644 m,0 m,8.156770083 m), Point(4.579798567 m,0 m,9.396926208 m));
Bm17 = StraightBeam(Point(4.579798567 m,0 m,9.396926208 m), Point(5.670628594 m,0 m,8.693332437 m));
Bm18 = StraightBeam(Point(5.670628594 m,0 m,8.693332437 m), Point(6.263518223 m,0 m,9.84807753 m));
Bm19 = StraightBeam(Point(6.263518223 m,0 m,9.84807753 m), Point(7.215598315 m,0 m,8.965752283 m));
Bm20 = StraightBeam(Point(7.215598315 m,0 m,8.965752283 m), Point(8 m,0 m,10 m));

// Create upper horizontal brace of the column frame by copying
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Bm11, "Bm21");
ModelTransformer(MyModelTransformerMap).copyTranslate(Vector3d(0,0,-70mm));

// Create two bolts as vertical short beam stubs
Bar_25x25.setDefault();
Bm22 = StraightBeam(Point(0.3395555688 m,0 m,6.357876097 m), Point(0.3395555688 m,0 m,6.427876097 m));
Bm23 = StraightBeam(Point(1.712209979 m,0 m,6.357876097 m), Point(1.712209979 m,0 m,6.427876097 m));

// Create vertical beam of column frame and create split points along it
Bm24 = StraightBeam(Point(0.3395555688 m,0 m,0 m), Point(0.3395555688 m,0 m,6.357876097 m));
Bm24.section = HSS127X101_6X6_4;
Bm24.splitAt(0.2);
Bm24.splitAt(0.4);
Bm24.splitAt(0.6);
Bm24.splitAt(0.8);
Bm24.splitAt(0.2);
Bm24.splitAt(0.4);
Bm24.splitAt(0.6);
Bm24.splitAt(0.8);

// Copy top horizontal beam of column frame four times downwards
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Bm21, "Bm25");
ModelTransformer(MyModelTransformerMap).copyTranslate(Vector3d(0 m,0 m,-1.271575219 m), 4);

// Create slanting beam as part of column frame
HSS101_6X101_6X6_4.setDefault();
Bm29 = StraightBeam(Point(0.3395555688 m,0 m,0 m), Point(1.712209979 m,0 m,6.357876097 m));

// Divide and delete superfluous parts of horizontal beams
Validate(Bm25.primitivePartCount == 2);
Bm25.explode(IndexedNameMask(30));
Validate(Bm30);
Validate(Bm31);
Validate(Bm26.primitivePartCount == 2);
Bm26.explode(IndexedNameMask(32));
Validate(Bm32);
Validate(Bm33);
Validate(Bm27.primitivePartCount == 2);
Bm27.explode(IndexedNameMask(34));
Validate(Bm34);
Validate(Bm35);
Validate(Bm28.primitivePartCount == 2);
Bm28.explode(IndexedNameMask(36));
Validate(Bm36);
Validate(Bm37);
Delete(Bm31);
Delete(Bm33);
Delete(Bm35);
Delete(Bm37);

// Create diagonal braces of column frame
HSS57_2X57_2X6_4.setDefault();
Bm31 = StraightBeam(Point(0.3395555688 m,0 m,6.357876097 m), Point(1.437679097 m,0 m,5.086300878 m));
Bm33 = StraightBeam(Point(0.3395555688 m,0 m,5.086300878 m), Point(1.163148215 m,0 m,3.814725659 m));
Bm35 = StraightBeam(Point(0.3395555688 m,0 m,3.814725658 m), Point(0.8886173331 m,0 m,2.54315044 m));
Bm37 = StraightBeam(Point(0.3395555688 m,0 m,2.543150439 m), Point(0.6140864511 m,0 m,1.271575221 m));

// Create support
Sp1 = SupportPoint(Point(0.3395555688 m,0 m,0 m));
Sp1.boundary = BoundaryCondition(Fixed, Fixed, Fixed, Fixed, Free, Fixed);
Sp1.boundary = BoundaryCondition(Fixed, Fixed, Fixed, Fixed, Free, Fixed);

// Copy by mirroring to create the complete frame
MyModelTransformerMap = ObjectNameMap();
MyModelTransformerMap.Add(Bm1, "Bm38");
MyModelTransformerMap.Add(Bm2, "Bm39");
MyModelTransformerMap.Add(Bm3, "Bm40");
MyModelTransformerMap.Add(Bm4, "Bm41");
MyModelTransformerMap.Add(Bm5, "Bm42");
MyModelTransformerMap.Add(Bm6, "Bm43");
MyModelTransformerMap.Add(Bm7, "Bm44");
MyModelTransformerMap.Add(Bm8, "Bm45");
MyModelTransformerMap.Add(Bm9, "Bm46");
MyModelTransformerMap.Add(Bm10, "Bm47");
MyModelTransformerMap.Add(Bm11, "Bm48");
MyModelTransformerMap.Add(Bm12, "Bm49");
MyModelTransformerMap.Add(Bm13, "Bm50");
MyModelTransformerMap.Add(Bm14, "Bm51");
MyModelTransformerMap.Add(Bm15, "Bm52");
MyModelTransformerMap.Add(Bm16, "Bm53");
MyModelTransformerMap.Add(Bm17, "Bm54");
MyModelTransformerMap.Add(Bm18, "Bm55");
MyModelTransformerMap.Add(Bm19, "Bm56");
MyModelTransformerMap.Add(Bm20, "Bm57");
MyModelTransformerMap.Add(Bm21, "Bm58");
MyModelTransformerMap.Add(Bm22, "Bm59");
MyModelTransformerMap.Add(Bm23, "Bm60");
MyModelTransformerMap.Add(Bm24, "Bm61");
MyModelTransformerMap.Add(Bm29, "Bm62");
MyModelTransformerMap.Add(Bm30, "Bm63");
MyModelTransformerMap.Add(Bm31, "Bm64");
MyModelTransformerMap.Add(Bm32, "Bm65");
MyModelTransformerMap.Add(Bm33, "Bm66");
MyModelTransformerMap.Add(Bm34, "Bm67");
MyModelTransformerMap.Add(Bm35, "Bm68");
MyModelTransformerMap.Add(Bm36, "Bm69");
MyModelTransformerMap.Add(Bm37, "Bm70");
ModelTransformer(MyModelTransformerMap).copyMirror(Point(8 m,0 m,10 m), Vector3d(1,0,0));
Sp2 = Sp1.copyMirror(Point(8 m,0 m,10 m),Vector3d(1,0,0));

// Join upper horizontal part of the lower chord
Bm10.joinBeams(Bm47);
Bm10.joinSegments(1,2);

// Create load cases
SelfWeight = LoadCase();
Snow = LoadCase();
Wind = LoadCase();

// Self weight
SelfWeight.setAcceleration(Vector3d(0 m/s^2,0 m/s^2,-9.80665 m/s^2));
SelfWeight.includeSelfWeight();
SelfWeight.includeStructureMassWithRotationField();

// Snow on roof
Snow.setCurrent();
LLoad1 = LineLoad(Snow, FootprintLine(Point(0.3395555688 m,0 m,6.427876097 m), Point(1.572123903 m,0 m,7.660444431 m)), Component1dLinear(Vector3d(0 N/m, 0 N/m, 0 N/m), Vector3d(0 N/m, 0 N/m, -3.2*6*0.35 kN/m)));
LLoad2 = LineLoad(Snow, FootprintLine(Point(1.572123903 m,0 m,7.660444431 m), Point(3 m,0 m,8.660254038 m)), Component1dLinear(Vector3d(0 N/m, 0 N/m, -3.2*6*0.35 kN/m), Vector3d(0 N/m, 0 N/m, -3.2*6*0.65 kN/m)));
LLoad3 = LineLoad(Snow, FootprintLine(Point(3 m,0 m,8.660254038 m), Point(4.579798567 m,0 m,9.396926208 m)), Component1dLinear(Vector3d(0 N/m, 0 N/m, -3.2*6*0.65 kN/m), Vector3d(0 N/m, 0 N/m, -3.2*6*0.85 kN/m)));
LLoad4 = LineLoad(Snow, FootprintLine(Point(4.579798567 m,0 m,9.396926208 m), Point(6.263518223 m,0 m,9.84807753 m)), Component1dLinear(Vector3d(0 N/m, 0 N/m, -3.2*6*0.85 kN/m), Vector3d(0 N/m, 0 N/m, -3.2*6*0.95 kN/m)));
LLoad5 = LineLoad(Snow, FootprintLine(Point(6.263518223 m,0 m,9.84807753 m), Point(8 m,0 m,10 m)), Component1dLinear(Vector3d(0 N/m, 0 N/m, -3.2*6*0.95 kN/m), Vector3d(0 N/m, 0 N/m, -3.2*6*1.00 kN/m)));
LLoad6 = LLoad1.copyMirror(Point(8 m,0 m,10 m),Vector3d(1,0,0));
LLoad7 = LLoad2.copyMirror(Point(8 m,0 m,10 m),Vector3d(1,0,0));
LLoad8 = LLoad3.copyMirror(Point(8 m,0 m,10 m),Vector3d(1,0,0));
LLoad9 = LLoad4.copyMirror(Point(8 m,0 m,10 m),Vector3d(1,0,0));
LLoad10 = LLoad5.copyMirror(Point(8 m,0 m,10 m),Vector3d(1,0,0));

// Wind on wall
Wind.setCurrent();
LLoad11 = LineLoad(Wind, FootprintLine(Point(0.3395555688 m,0 m,0 m), Point(0.3395555688 m,0 m,6.357876097 m)), Component1dLinear(Vector3d(1.3*6 kN/m, 0 N/m, 0), Vector3d(1.3*6 kN/m, 0 N/m, 0)));
LLoad12 = LineLoad(Wind, FootprintLine(Point(15.66044443 m,0 m,0 m), Point(15.66044443 m,0 m,6.357876097 m)), Component1dLinear(Vector3d(1.3*6*0.5 kN/m, 0 N/m, 0), Vector3d(1.3*6*0.5 kN/m, 0 N/m, 0)));

// Load combination
Comb1 = LoadCombination();
Comb1.addCase(SelfWeight, 1.2);
Comb1.addCase(Snow, 1.6);
Comb1.addCase(Wind, 1.6);
Comb1.convertLoadToMass = false;
Comb1.EquipmentRep = EquipmentAsLineLoads;

// Run linear structural analysis
Analysis1 = Analysis(true);
Analysis1.add(MeshActivity());
Analysis1.add(LinearAnalysis());
Analysis1.step(2).useSestra10(true);
Analysis1.add(LoadResultsActivity());
Analysis1.setActive();
Analysis1.step(1).step(1).execute();
Analysis1.step(1).step(2).execute();
SimplifyTopology();
Analysis1.execute();

// Strengthen the arch and reanalyse
Bar_25x25.setDefault();
Bm47 = StraightBeam(Point(1.712209979 m,0 m,6.427876097 m), Point(14.28779002 m,0 m,6.427876097 m));
Bm71 = StraightBeam(Point(8 m,0 m,10 m), Point(8 m,0 m,6.427876097 m));
Analysis1.execute();
