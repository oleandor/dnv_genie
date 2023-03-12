//
//
//  GeniE Scripting Example
//
//  This example shows a proposal for a naming scheme and how this can be used 
//  to create point objects on an ordered topological pattern
//  Further it shows how you can use these point objects to create beams
//
//  The last section shows how you can create a function to split a beam into segments and set beam offset.
//  This example is taken from a real case of modeling a frame with about 200 joints of rather irregular shape.
//  Being able to define offsets and end reinforcements in a ordered tabulated form was much
//  more efficient and safer that having to do it interactively through the GUI.
//
//  Starting by creating some sections and a material
//
Box2000 = BoxSection(2, 1, 0.02, 0.02);
Box1800 = BoxSection(1.8, 1, 0.02, 0.02);
Box1600 = BoxSection(1.6, 1, 0.02, 0.02);
Box1400 = BoxSection(1.4, 1, 0.02, 0.02);
Box1200 = BoxSection(1.2, 0.6, 0.02, 0.02);
Box1000 = BoxSection(1., 0.5, 0.02, 0.02);
Box800 = BoxSection(0.8, 0.4, 0.02, 0.02);
Box600 = BoxSection(0.8, 0.3, 0.02, 0.02);
//
S275 = Material(255E6, 7.85E3, 2.1E11, 0.3, 1.2E-5, 0.03);
//
// Introducing the naming pattern
// Object names are built by concatenating four strings; Nam1, Nam2, Nam3 and Nam4
// 
// First part denotes object type, second part denotes topology in X-dir
// third part denotes Y-dir and fourth part denotes Z-dir
//
// By putting the actual name strings in arrays and referring to the array elements you may change the actual names
// without changing the routines using these names. 
// You use the array elements to make names like: 
// MyBeam.name = Nam1[0] +Nam2[i] +Nam3[j] +Nam4[k] ;
//
var Nam1 = new Array();
var Nam2 = new Array();
var Nam3 = new Array();
var Nam4 = new Array();
//
// First part denotes type
Nam1[0] = "P";   // Point
Nam1[1] = "Bx";  // Beam in Xdir
Nam1[2] = "By";  // Beam in Ydir
Nam1[3] = "Bz";  // Beam in Zdir
Nam1[4] = "Dx";  // Beam diagonal in XZdir
Nam1[5] = "Dy";  // Beam diagonal in YZdir
//
// Second part denotes topology in X-dir
Nam2[0] = "1";
Nam2[1] = "2";
Nam2[2] = "3";
Nam2[3] = "4";
Nam2[4] = "5";
Nam2[5] = "6";
Nam2[6] = "7";
Nam2[7] = "8";
Nam2[8] = "9";
Nam2[9] = "10";
// Third part denotes topology in Y-dir
Nam3[0] = "A";
Nam3[1] = "B";
Nam3[2] = "C";
Nam3[3] = "D";
Nam3[4] = "E";
Nam3[5] = "F";
Nam3[6] = "G";
Nam3[7] = "H";
Nam3[8] = "I";
Nam3[9] = "J";
// Forth part denotes topology in Z-dir
Nam4[0] = "1";
Nam4[1] = "2";
Nam4[2] = "3";
Nam4[3] = "4";
Nam4[4] = "5";
Nam4[5] = "6";
Nam4[6] = "7";
Nam4[7] = "8";
Nam4[8] = "9";
Nam4[9] = "10";
//
// By using these arrays of name strings you can easily name objects according to drawing axis etc.
// Just remember to use legal names like A1, B_2 ( not: A3+200mm etc.)
//
//  Make a function to get a name based on four selected name array elements
//  and another function to get a named object by the same four elements
//  Instead of remebering that Nam[0] is "P" for point etc. type "P" as argument N1
// 
 function GetName (N1,N2,N3,N4) { return( N1 +Nam2[N2] +Nam3[N3] +Nam4[N4]); } 
// function GetName (N1,N2,N3,N4) { return( Nam1[N1] +Nam2[N2] +Nam3[N3] +Nam4[N4]); }
//
 function GetObjectByName (N1,N2,N3,N4) { return(GetNamedObject(GetName(N1,N2,N3,N4))); } 
//
// An example:
// Print("The name is " + GetName(2,3,4,5));
//
// Now use this naming pattern to create some points and beams.
// Make a function: MakeBeams (NumX, NumY, NumZ, Step) that creates a space of 
// NumX x NumY x NumZ points spaced at a distance being a multiple of "Step"
// Then the function creates some beams between these points
//
//
function MakeBeams (NumX, NumY, NumZ, Step)
{       
        var i, j, k;
        var Pts1 = new Array();
        var Bms1 = new Array();
    //    
    // Stepping in X, Y and Z direction
         for (i = 0;i< NumX ; i++)
         {
             for (j = 0;j< NumY; j++)
             {
                   for (k = 0; k < NumZ; k++)
                   {
                //
                        X1 = i * Step;
                        Y1 = j * Step;
                        Z1 = k * 0.6 * Step;
                        Pts1[k] = Point(X1, Y1, Z1);
                        Pts1[k].name = GetName("MyP",i,j,k);
                    }
              }
         }
//           
//   Now adding some beams
//
    // Stepping in X, Y and Z direction
         for (i = 0;i< NumX-1 ; i++)
         {
             for (j = 0;j< NumY-1 ; j++)
                 {    
                      for (k = 0; k < NumZ-1 ; k++)
                      {
                        var Bms1 = new Array();
                        // Beams in X-direction
                        Bms1[i] = Beam(GetObjectByName("MyP",i,j,k), GetObjectByName("MyP",i+1,j,k));
                        Bms1[i].name = GetName("BmX",i,j,k);
                        Bms1[i].section = Box1400;
                        Bms1[i].material = S275;
                        //
                        var Bms1 = new Array();
                        // Beams in Y-direction
                        Bms1[i] = Beam(GetObjectByName("MyP",i,j,k), GetObjectByName("MyP",i,j+1,k));
                        Bms1[i].name = GetName("BmY",i,j,k);
                        Bms1[i].section = Box800;
                        Bms1[i].material = S275;
                        //
                        var Bms1 = new Array();
                        // Beams in Z-direction
                        Bms1[i] = Beam(GetObjectByName("MyP",i,j,k), GetObjectByName("MyP",i,j,k+1));
                        Bms1[i].name = GetName("BmZ",i,j,k);
                        Bms1[i].section = Box1000;
                        Bms1[i].material = S275;
                        //
                        var Bms1 = new Array();
                        // Beams in diagonal XZ-direction
                        Bms1[i] = Beam(GetObjectByName("MyP",i,j,k), GetObjectByName("MyP",i+1,j,k+1));
                        Bms1[i].name = GetName("BmXZ",i,j,k);
                        Bms1[i].section = Box800;
                        Bms1[i].material = S275;
                        //
                       }
                  }     
              }
       }
// End of function MakeBeams      
//
// Calling MakeBeams
//
MakeBeams(8, 2, 3, 6.5);
//
