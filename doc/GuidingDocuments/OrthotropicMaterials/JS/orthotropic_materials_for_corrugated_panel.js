//////////////////////////////////////////////////
//
// Corrugated panel (sine wave form)
//

//
// Before start create new isotropic and 2 orthotropic materials
//

Mat1 = MaterialLinear(100 MPa, 7850 Kg/m^3, 2.1e+011 Pa, 0.3, 1.2e-005 delC^-1, 0.03 N*s/m);
Mat2 = MaterialOrthotropic(7850 Kg/m^3, 2.1E+11 Pa, 2.1E+11 Pa, 0.3, 8.07e+010 Pa, 1.2e-005 delC^-1, 1.2e-005 delC^-1, 0.03 N*s/m, 0.03 N*s/m);
Mat3 = MaterialOrthotropic(7850 Kg/m^3, 2.1E+11 Pa, 2.1E+11 Pa, 0.3, 8.07e+010 Pa, 1.2e-005 delC^-1, 1.2e-005 delC^-1, 0.03 N*s/m, 0.03 N*s/m);

//
// Corrugated panel data
//

h = 0.1875; // sine wave amplitude
s = 0.375;  // sine wave 1/2 length
t = 0.01;   // plate thickness

// Material constants
// Use your basis isotropic material data

E = Mat1.young;
poisson = Mat1.poisson;

// Moment of inertia and gama
gama = s * (1 + ((Math.pow(Math.PI, 2) * Math.pow(h, 2))/(4 * Math.pow(s, 2))));
I = 0.5 * Math.pow(h, 2) * t * (1 - (0.81 / (1 + (2.5 * Math.pow((h / (2*s)), 2)))));

// Substitute Young modulus
Ex = (s * E) / (gama * (1 - Math.pow(poisson, 2)));
Ey = (12 * E * I) / Math.pow(t, 3);


///////////////////// Case 1 : corrugations in Y-direction use Mat2

// Assign new Young modulus values

Mat2.young1 = Ex;
Mat2.young2 = Ey;

// Assign derived values

poisson21 = poisson;
poisson12 = Ex / Ey *poisson21;

Mat2.poisson12 = poisson12;
Mat2.shear = Math.sqrt( Ex.toDouble()*Ey.toDouble() ) / ( 2.0 * ( 1.0 + Math.sqrt( poisson12*poisson21) ) );

///////////////////// Case 2 : corrugations in X-direction use Mat3

// Assign new Young modulus values

Mat3.young1 = Ey;
Mat3.young2 = Ex;

// Assign derived values

poisson12 = poisson;
poisson21 = Ey / Ex *poisson12;

Mat3.poisson12 = poisson12;
Mat3.shear = Math.sqrt( Ex.toDouble()*Ey.toDouble() ) / ( 2.0 * ( 1.0 + Math.sqrt( poisson12*poisson21) ) );

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
