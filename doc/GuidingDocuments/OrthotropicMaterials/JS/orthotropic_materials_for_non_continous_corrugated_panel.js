//////////////////////////////////////////////////
//
// Non-continous corrugated panel (broken line form)
//

//
// Before start create new isotropic and 2 orthotropic materials
//

Mat1 = MaterialLinear(100 MPa, 7850 Kg/m^3, 2.1e+011 Pa, 0.3, 1.2e-005 delC^-1, 0.03 N*s/m);
Mat2 = MaterialOrthotropic(7850 Kg/m^3, 2.1E+11 Pa, 2.1E+11 Pa, 0.3, 8.07e+010 Pa, 1.2e-005 delC^-1, 1.2e-005 delC^-1, 0.03 N*s/m, 0.03 N*s/m);
Mat3 = MaterialOrthotropic(7850 Kg/m^3, 2.1E+11 Pa, 2.1E+11 Pa, 0.3, 8.07e+010 Pa, 1.2e-005 delC^-1, 1.2e-005 delC^-1, 0.03 N*s/m, 0.03 N*s/m);

// Material constants
// Use your basis material name

E = Mat1.young;
poisson = Mat1.poisson;

// parameters

a = 0.3;
b = 0.3;
d = 0.25;
t = 0.01;  // plate thickness
s = 0.85;

// derived values

fiangle = 60;
firadians = (2*Math.Pi()*fiangle)/360;
c = d / Math.sin(firadians);
tprim = t / Math.sin(firadians);


A1 = a*t;
I1 = (a * Math.Pow(t, 3))/12;
y1 = t / 2;

A2 = b * t;
I2 = (b * Math.Pow(t, 3))/12;
y2 = t + d + (t/2);

A3 = 2 * d * tprim;
I3 = 2 * ((tprim * Math.Pow(d, 3))/12);
y3 = t + (d/2);

y = ((A1*y1) + (A2*y2) + (A3*y3))/(A1 + A2 + A3);
I = (I1 + A1*Math.Pow((y - y1), 2)) + (I2 + A2*Math.Pow((y - y2),2)) + (I3 + A3*Math.Pow((y - y3), 2));

Ex = (s * E)/((a + b + (2*c)) * (1 - Math.Pow(poisson, 2)));
Ey = (12 * E * I)/(s * Math.Pow(t, 3));


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
