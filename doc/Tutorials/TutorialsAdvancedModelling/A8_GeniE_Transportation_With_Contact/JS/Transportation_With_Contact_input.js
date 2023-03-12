// Create 4 legged jacket for transportation analysis

// Read input creating jacket

ReadCommandFile("Jacket.js");

// Read input for rotating the jacket for transportation phase

ReadCommandFile("Rotate_jacket_for_transportation.js");

// Create stools

Pipe22.setDefault();
Stool1 = Beam(Point(22.04710145 m,22.51311031 m,2.077234583e-006 m),Point(22.04710145 m,22.51311031 m,-5 m));
Stool2 = Stool1.copyTranslate(Vector3d(-44.0942029 m,0 m,0 m));
Stool3 = Stool1.copyTranslate(Vector3d(-11.77536232 m,130.340868 m,0 m));
Stool4 = Stool1.copyTranslate(Vector3d(-32.31884058 m,130.340868 m,0 m));
Stool5 = Stool1.copyTranslate(Vector3d(-3.170289855 m,35.09177214 m,0 m));
Stool6 = Stool5.copyTranslate(Vector3d(-3.170289855 m,35.09177214 m,0 m));
Stool7 = Stool5.copyTranslate(Vector3d(-5.887681159 m,65.17043398 m,0 m));
Stool8 = Stool5.copyTranslate(Vector3d(-37.75362319 m,0 m,0 m));
Stool9 = Stool5.copyTranslate(Vector3d(-34.58333333 m,35.09177214 m,0 m));
Stool10 = Stool5.copyTranslate(Vector3d(-31.86594203 m,65.17043398 m,0 m));

// Shorten six of the stools to create gaps underneath

Stool5.extendEnd(2, -0.05);
Stool6.extendEnd(2, -0.05);
Stool7.extendEnd(2, -0.05);
Stool8.extendEnd(2, -0.05);
Stool9.extendEnd(2, -0.05);
Stool10.extendEnd(2, -0.05);

// Define load cases, gravity and roll of barge plus a combination of the two

LCGrav = LoadCase();
LCGrav.setAcceleration(Vector3d(0 m/s^2,0 m/s^2,-9.80665 m/s^2));
LCGrav.includeSelfWeight();

LCRoll = LoadCase();
LCRoll.setHarmonicRotationField(Point(0 m,0 m,-5 m), Vector3d(0 m,1 m,0 m), 20 deg, 5 s, 0 deg);

LCGravAndRoll = LoadCombination();
LCGravAndRoll.addCase(LCGrav, 1);
LCGravAndRoll.addCase(LCRoll, 1);
