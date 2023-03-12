// 4 legged jacket

GenieRules.Units.setDatabaseUnits("m", "kN", "delC");
GenieRules.Units.setInputUnit(Length, "m");
GenieRules.Units.setInputUnit(Force, "kN");
GenieRules.Units.setInputUnit(TempDiff, "delC");
GenieRules.Tolerances.useTolerantModelling = true;
GenieRules.Tolerances.pointTolerance = 0.01 m;

// Sections and material

Pipe12 = PipeSection(1.2,0.03);
Pipe16 = PipeSection(1.6,0.03);
Pipe22 = PipeSection(2.2,0.08);
Pipe32 = PipeSection(3.2,0.09);
Cone1 = ConeSection(1.0,true);
Steel = Material(3.56E5,7.85,2.1E8,0.3,0,0);
Steel.setDefault();

// Create legs

Pipe32.setDefault();
Leg1 = Beam(Point(-22.5,-17.5,0),Point(-10,-7.5,138));
Leg2 = Leg1.copyMirror(Point(0,0,0),Vector3d(1,0,0));
Leg3 = Leg1.copyMirror(Point(0,0,0),Vector3d(0,1,0));
Leg4 = Leg2.copyMirror(Point(0,0,0),Vector3d(0,1,0));

// Create bracing between elevations 5 and 75

Pipe16.setDefault();
Br01 = Beam(Point(-22.04710145 m,-17.13768116 m,5 m),Point(22.04710145 m,-17.13768116 m,5 m));
Br02 = Beam(Point(22.04710145 m,-17.13768116 m,5 m),Point(22.04710145 m,17.13768116 m,5 m));
Br03 = Beam(Point(22.04710145 m,17.13768116 m,5 m),Point(-22.04710145 m,17.13768116 m,5 m));
Br04 = Beam(Point(-22.04710145 m,17.13768116 m,5 m),Point(-22.04710145 m,-17.13768116 m,5 m));
Br05 = Beam(Point(-22.04710145 m,-17.13768116 m,5 m),Point(22.04710145 m,17.13768116 m,5 m));
Br06 = Beam(Point(22.04710145 m,-17.13768116 m,5 m),Point(-22.04710145 m,17.13768116 m,5 m));
Br07 = Beam(Point(-22.04710145 m,-17.13768116 m,5 m),Point(18.87681159 m,-14.60144928 m,40 m));
Br08 = Beam(Point(22.04710145 m,-17.13768116 m,5 m),Point(-18.87681159 m,-14.60144928 m,40 m));
Br09 = Beam(Point(22.04710145 m,-17.13768116 m,5 m),Point(18.87681159 m,14.60144928 m,40 m));
Br10 = Beam(Point(22.04710145 m,17.13768116 m,5 m),Point(18.87681159 m,-14.60144928 m,40 m));
Br11 = Beam(Point(22.04710145 m,17.13768116 m,5 m),Point(-18.87681159 m,14.60144928 m,40 m));
Br12 = Beam(Point(-22.04710145 m,17.13768116 m,5 m),Point(18.87681159 m,14.60144928 m,40 m));
Br13 = Beam(Point(-22.04710145 m,17.13768116 m,5 m),Point(-18.87681159 m,-14.60144928 m,40 m));
Br14 = Beam(Point(-22.04710145 m,-17.13768116 m,5 m),Point(-18.87681159 m,14.60144928 m,40 m));
Br15 = Beam(Point(-18.87681159 m,-14.60144928 m,40 m),Point(15.70652174 m,-12.06521739 m,75 m));
Br16 = Beam(Point(18.87681159 m,-14.60144928 m,40 m),Point(-15.70652174 m,-12.06521739 m,75 m));
Br17 = Beam(Point(18.87681159 m,-14.60144928 m,40 m),Point(15.70652174 m,12.06521739 m,75 m));
Br18 = Beam(Point(18.87681159 m,14.60144928 m,40 m),Point(15.70652174 m,-12.06521739 m,75 m));
Br19 = Beam(Point(18.87681159 m,14.60144928 m,40 m),Point(-15.70652174 m,12.06521739 m,75 m));
Br20 = Beam(Point(-18.87681159 m,14.60144928 m,40 m),Point(15.70652174 m,12.06521739 m,75 m));
Br21 = Beam(Point(-18.87681159 m,14.60144928 m,40 m),Point(-15.70652174 m,-12.06521739 m,75 m));
Br22 = Beam(Point(-18.87681159 m,-14.60144928 m,40 m),Point(-15.70652174 m,12.06521739 m,75 m));
Br23 = Beam(Point(-18.87681159 m,-14.60144928 m,40 m),Point(18.87681159 m,14.60144928 m,40 m));
Br24 = Beam(Point(18.87681159 m,-14.60144928 m,40 m),Point(-18.87681159 m,14.60144928 m,40 m));
Br25 = Beam(Point(-15.70652174 m,-12.06521739 m,75 m),Point(15.70652174 m,12.06521739 m,75 m));
Br26 = Beam(Point(15.70652174 m,-12.06521739 m,75 m),Point(-15.70652174 m,12.06521739 m,75 m));

// Create bracing between elevations 75 and 135

Pipe12.setDefault();
Br27 = Beam(Point(-12.98913043 m,-9.891304348 m,105 m),Point(12.98913043 m,-9.891304348 m,105 m));
Br28 = Beam(Point(12.98913043 m,-9.891304348 m,105 m),Point(12.98913043 m,9.891304348 m,105 m));
Br29 = Beam(Point(12.98913043 m,9.891304348 m,105 m),Point(-12.98913043 m,9.891304348 m,105 m));
Br30 = Beam(Point(-12.98913043 m,9.891304348 m,105 m),Point(-12.98913043 m,-9.891304348 m,105 m));
Br31 = Beam(Point(-10.27173913 m,-7.717391304 m,135 m),Point(10.27173913 m,-7.717391304 m,135 m));
Br32 = Beam(Point(10.27173913 m,-7.717391304 m,135 m),Point(10.27173913 m,7.717391304 m,135 m));
Br33 = Beam(Point(10.27173913 m,7.717391304 m,135 m),Point(-10.27173913 m,7.717391304 m,135 m));
Br34 = Beam(Point(-10.27173913 m,7.717391304 m,135 m),Point(-10.27173913 m,-7.717391304 m,135 m));
Br35 = Beam(Point(-15.70652174 m,-12.06521739 m,75 m),Point(12.98913043 m,-9.891304348 m,105 m));
Br36 = Beam(Point(15.70652174 m,-12.06521739 m,75 m),Point(-12.98913043 m,-9.891304348 m,105 m));
Br37 = Beam(Point(15.70652174 m,-12.06521739 m,75 m),Point(12.98913043 m,9.891304348 m,105 m));
Br38 = Beam(Point(15.70652174 m,12.06521739 m,75 m),Point(12.98913043 m,-9.891304348 m,105 m));
Br39 = Beam(Point(15.70652174 m,12.06521739 m,75 m),Point(-12.98913043 m,9.891304348 m,105 m));
Br40 = Beam(Point(-15.70652174 m,12.06521739 m,75 m),Point(12.98913043 m,9.891304348 m,105 m));
Br41 = Beam(Point(-15.70652174 m,12.06521739 m,75 m),Point(-12.98913043 m,-9.891304348 m,105 m));
Br42 = Beam(Point(-15.70652174 m,-12.06521739 m,75 m),Point(-12.98913043 m,9.891304348 m,105 m));
Br43 = Beam(Point(-12.98913043 m,-9.891304348 m,105 m),Point(10.27173913 m,-7.717391304 m,135 m));
Br44 = Beam(Point(12.98913043 m,-9.891304348 m,105 m),Point(-10.27173913 m,-7.717391304 m,135 m));
Br45 = Beam(Point(12.98913043 m,-9.891304348 m,105 m),Point(10.27173913 m,7.717391304 m,135 m));
Br46 = Beam(Point(12.98913043 m,9.891304348 m,105 m),Point(10.27173913 m,-7.717391304 m,135 m));
Br47 = Beam(Point(12.98913043 m,9.891304348 m,105 m),Point(-10.27173913 m,7.717391304 m,135 m));
Br48 = Beam(Point(-12.98913043 m,9.891304348 m,105 m),Point(10.27173913 m,7.717391304 m,135 m));
Br49 = Beam(Point(-12.98913043 m,9.891304348 m,105 m),Point(-10.27173913 m,-7.717391304 m,135 m));
Br50 = Beam(Point(-12.98913043 m,-9.891304348 m,105 m),Point(-10.27173913 m,7.717391304 m,135 m));
Br51 = Beam(Point(0 m,-8.677366924 m,121.7523364 m),Point(0 m,-9.891304348 m,105 m));
Br52 = Beam(Point(0 m,-8.677366924 m,121.7523364 m),Point(0 m,-7.717391304 m,135 m));
Br53 = Beam(Point(0 m,8.677366924 m,121.7523364 m),Point(0 m,9.891304348 m,105 m));
Br54 = Beam(Point(0 m,8.677366924 m,121.7523364 m),Point(0 m,7.717391304 m,135 m));

// Create horizontal bracing at elevations 105 and 135

Pipe16.setDefault();
Br55 = Beam(Point(-12.98913043 m,-9.891304348 m,105 m),Point(12.98913043 m,9.891304348 m,105 m));
Br56 = Beam(Point(12.98913043 m,-9.891304348 m,105 m),Point(-12.98913043 m,9.891304348 m,105 m));
Br57 = Beam(Point(-10.27173913 m,-7.717391304 m,135 m),Point(10.27173913 m,7.717391304 m,135 m));
Br58 = Beam(Point(10.27173913 m,-7.717391304 m,135 m),Point(-10.27173913 m,7.717391304 m,135 m));

// Make segments of legs and change sections

Leg1.divideSegmentAt(1,0.575848871);
Leg1.divideSegmentAt(2,0.5);
Leg1.moveSegmentEnd(2,0.5974432037);
Leg1.SetSegmentSection(3, Pipe22);
Leg1.SetSegmentSection(2, Cone1);
Leg2.divideSegmentAt(1,0.575848871);
Leg2.divideSegmentAt(2,0.5);
Leg2.moveSegmentEnd(2,0.5974432037);
Leg2.SetSegmentSection(2, Cone1);
Leg2.SetSegmentSection(3, Pipe22);
Leg3.divideSegmentAt(1,0.575848871);
Leg3.divideSegmentAt(2,0.5);
Leg3.moveSegmentEnd(2,0.5974432037);
Leg3.SetSegmentSection(2, Cone1);
Leg3.SetSegmentSection(3, Pipe22);
Leg4.divideSegmentAt(1,0.575848871);
Leg4.divideSegmentAt(2,0.5);
Leg4.moveSegmentEnd(2,0.5974432037);
Leg4.SetSegmentSection(2, Cone1);
Leg4.SetSegmentSection(3, Pipe22);

// Create conductor supports

Pipe16.setDefault();
Cndsupp1 = Beam(Point(3.859408034 m,3 m,5 m), Point(-3.859408034 m,3 m,5 m));
Cndsupp2 = Beam(Point(3.878411911 m,3 m,40 m), Point(-3.878411911 m,3 m,40 m));
Cndsupp3 = Beam(Point(3.905405405 m,3 m,75 m), Point(-3.905405405 m,3 m,75 m));
Cndsupp4 = Beam(Point(3.93956044 m,3 m,105 m), Point(-3.93956044 m,3 m,105 m));
Cndsupp5 = Beam(Point(3.992957746 m,3 m,135 m), Point(-3.992957746 m,3 m,135 m));
