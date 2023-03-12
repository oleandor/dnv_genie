/*
Parametric model of a corrugated plate
The plate is created in the XZ-plane with datum point at origin
Parameters:
Hp = Height of plate
Wp = Width of plate
L1 = Length of sub panel     <L1><L2>___
L2 = Length of corrugation   ___  /      \ D1
D1 = Depth of corrugation
PanelName = Name of set comprising corrugated plate
*/
//  Specific data for this plate
//  Plate measurements
//
Hp = 6.23 m;
Wp = 12.32 m;
L1 = 700 mm;
L2 = 300 mm;
D1 = 400 mm;
PanelName = "Bulkhead_1";
//
// Material and thickness
//
S275 = Material(255E6, 7.85E3, 2.1E11, 0.3, 1.2E-5, 0.03);
Th1 = Thickness(10 mm);
S275.setDefault();
Th1.setDefault();
//
// General input to create the plate
//
//
var LengthPlate = 0.0 m;  // Total length of the plate we have created to now
var i = 0;  // Counter for sub panels                         ___
var j = 0;  // Counter for corrugations = 4 sub panels   ___/     \
var PartNr = 1; // Sub panel part 1,2,3,4
var Curves = new Array();  // Guide curves at the base of the plate
//
// Create sub panels until we are beyond Wp
do {
   var StartP = (L1+L2)*2*j;
     if ( PartNr == 1) { Curves[i] = GuideLine(Point(StartP,0,0), Point((StartP+L1),0,0), 3);
       rename(Curves[i], "Line_"+i);
       LengthPlate = LengthPlate + L1;
       PartNr = 2;}
     else if ( PartNr == 2) { Curves[i] = GuideLine(Point(StartP+L1,0,0), Point((StartP+L1+L2),D1,0), 3);
       rename(Curves[i], "Line_" +i);
       LengthPlate = LengthPlate + L2;
       PartNr = 3;}
     else if ( PartNr == 3) { Curves[i] = GuideLine(Point(StartP+L1+L2,D1,0), Point((StartP+2*L1+L2),D1,0), 3);
       rename(Curves[i], "Line_" +i);
       LengthPlate = LengthPlate + L1;
       PartNr = 4;}
     else if ( PartNr == 4) { Curves[i] = GuideLine(Point(StartP+2*L1+L2,D1,0), Point(StartP+2*(L1+L2),0,0), 3);
       rename(Curves[i], "Line_" +i);
       LengthPlate = LengthPlate + L2;
       PartNr = 1;
       j++; // New corrugation
     }
  i++; // Next sub panel
} while (LengthPlate < Wp);
//
// Make a curve to sweep along
var SweepCurve1 = GuideLine(Point(0,0,0), Point(0,0,Hp), 3);
//
// Then make plates by sweeping lines and put them in a set
//
NewSet = Set();
//
i = 0;
for ( i =0; i < Curves.length(); i++) {
NextPanel = SweepCurve(Curves[i], SweepCurve1);
NewSet.add(NextPanel);
rename(NextPanel, "Panel_" + i);
}
//
// Divide the last panel at Wp and delete the rest
//
Print (" i = " + i);

LastPanel = GetNamedObject("Panel_"+(i-1));
CannotContinue = false; tolerance = 0.01;
GPS = CreateRectangularNetFromShell(LastPanel, LastPanel.centreOfGravity());
for(i=0;i<GPS.ArrayOfPoints().length();i++)
{
   diff = GPS.ArrayOfPoints()[i].X() - Wp;
   if(math.abs(diff.ToDouble())<tolerance)
   {
      CannotContinue = true;
   }
}
Delete(GPS);
if (CannotContinue)
{
      print("dividing plane is on the edge of the panel");
}
else
{
   print("dividing plane intersecting  the panel");
   var Rest = LastPanel.divide(XPlane3d(Wp));
   Delete(Rest);
}

//
// Finally you may use 3 point position to move the plate to where it belongs
//         (can also be expressed by parameters)
NewSet.move3Point(Point(0 m,0 m,0 m),Point(4 m,0 m,0 m),Point(0 m,0 m,2.5 m),Point(0 m,2.5 m,0 m),Point(0 m,5 m,0 m),Point(0 m,0 m,2.5 m),geUNCONNECTED);
NewSet.name = PanelName;
