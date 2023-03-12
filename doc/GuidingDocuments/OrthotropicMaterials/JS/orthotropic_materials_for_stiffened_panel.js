//////////////////////////////////////////////////
//
// Stiffened panel
//

//
// Before start create new isotropic and 2 orthotropic materials
//

Mat1 = MaterialLinear(100 MPa, 7850 Kg/m^3, 2.1e+011 Pa, 0.3, 1.2e-005 delC^-1, 0.03 N*s/m);
Mat2 = MaterialOrthotropic(7850 Kg/m^3, 2.1E+11 Pa, 2.1E+11 Pa, 0.3, 8.07e+010 Pa, 1.2e-005 delC^-1, 1.2e-005 delC^-1, 0.03 N*s/m, 0.03 N*s/m);
Mat3 = MaterialOrthotropic(7850 Kg/m^3, 2.1E+11 Pa, 2.1E+11 Pa, 0.3, 8.07e+010 Pa, 1.2e-005 delC^-1, 1.2e-005 delC^-1, 0.03 N*s/m, 0.03 N*s/m);

// Material constants
// Use your basis material data

E = Mat1.young;
poisson = Mat1.poisson;

// Compute for given stiffener layout

s = 1.00;  // stiffener spacing
t = 0.01;  // plate thickness
h = 0.01;  // thickness of stiffener ribs
b = 0.2;   // height of stiffener ribs

t1 = t + b;

// Moment of inertia about neutral axis of a T-section of width s

A1 = s * t;
I1 = (s * (Math.pow(t, 3)))/12;
y1 = t / 2;

A2 = h * b;
I2 = (h * (Math.pow(b, 3)))/12;
y2 = t + (b / 2);

yc = ((A1 * y1) + (A2 * y2))/(A1 + A2);

I = I1 + (A1 * (Math.pow((yc - y1), 2))) + I2 + (A2 * (Math.pow((yc - y2), 2)));

// Substitute Young modulus
Ex = (E * s) / (s - h + (h * (Math.pow((t / t1), 3))));
Ey = (12 * E * I) / (Math.pow(t, 3) * s);

///////////////////// Case 1 : stiffeners in Y-direction use Mat2

// Assign new Young modulus values

Mat2.young1 = Ex;
Mat2.young2 = Ey;

// Assign derived values

poisson21 = poisson;
poisson12 = Ex / Ey *poisson21;

Mat2.poisson12 = poisson12;
Mat2.shear = Math.sqrt( Ex.toDouble()*Ey.toDouble() ) / ( 2.0 * ( 1.0 + Math.sqrt( poisson12*poisson21) ) );

///////////////////// Case 2 : stiffeners in X-direction use Mat3

// Assign new Young modulus values

Mat3.young1 = Ey;
Mat3.young2 = Ex;

// Assign derived values

poisson12 = poisson;
//Mat3.poisson12 = poisson21; // from Robert
poisson21 = Ey / Ex *poisson12;  //from Petter

Mat3.poisson12 = poisson12;
Mat3.shear = Math.sqrt( Ex.toDouble()*Ey.toDouble() ) / ( 2.0 * ( 1.0 + Math.sqrt( poisson12*poisson21) ) );

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////



