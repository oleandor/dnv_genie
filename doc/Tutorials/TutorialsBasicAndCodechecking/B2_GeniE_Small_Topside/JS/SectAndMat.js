//
// Cross section library
// Units kg, Newton, Metres
//
Bar100 = BarSection(0.1,0.03);
//
//
ISEC100 = ISection(0.1,0.1,0.015,0.02);
I200 = ISection(0.2,0.2,0.015,0.02);
I400 = ISection(0.4,0.4,0.015,0.02);
I600 = ISection(0.6,0.6,0.015,0.02);
I800 = ISection(0.8,0.8,0.015,0.02);
I1000 = ISection(1.0,1.0,0.015,0.02);
I1200 = ISection(1.2,1.2,0.015,0.02);
I1400 = ISection(1.4,1.4,0.015,0.02);
//
Pipe200 = PipeSection(0.2,0.02);
Pipe400 = PipeSection(0.4,0.02);
Pipe600 = PipeSection(0.6,0.02);
Pipe800 = PipeSection(0.8,0.02);
Pipe1000 = PipeSection(1.0,0.02);
Pipe1200 = PipeSection(1.2,0.02);
//
// Material library
// Units kg, Newton, Metres
//
St37 = Material(215E6, 7.85E3, 2.1E11, 0.3, 1.2E-5, 0.03);
St44 = Material(255E6, 7.85E3, 2.1E11, 0.3, 1.2E-5, 0.03);
St52 = Material(335E6, 7.85E3, 2.1E11, 0.3, 1.2E-5, 0.03);
//
S235 = Material(215E6, 7.85E3, 2.1E11, 0.3, 1.2E-5, 0.03);
S275 = Material(255E6, 7.85E3, 2.1E11, 0.3, 1.2E-5, 0.03);
S355 = Material(355E6, 7.85E3, 2.1E11, 0.3, 1.2E-5, 0.03);
//
S275N_NL = Material(235E6, 7.85E3, 2.1E11, 0.3, 1.2E-5, 0.03);
S355N_NL = Material(335E6, 7.85E3, 2.1E11, 0.3, 1.2E-5, 0.03);
S420N_NL = Material(390E6, 7.85E3, 2.1E11, 0.3, 1.2E-5, 0.03);
S460N_NL = Material(430E6, 7.85E3, 2.1E11, 0.3, 1.2E-5, 0.03);
//
Th01 = Thickness( 0.01 );
Th02 = Thickness( 0.02 ); 
Th03 = Thickness( 0.03 ); 
Th04 = Thickness( 0.04 ); 
Th05 = Thickness( 0.05 );
//
GlobXz = LocalSystem( Vector3d(1,0,0), Vector3d(1,0,1));
//
X_vect = Vector3d(1,0,0);
Y_vect = Vector3d(0,1,0);
Z_vect = Vector3d(0,0,1);
//
I200.setdefault();
Th04.setdefault(); 
St52.setdefault();
