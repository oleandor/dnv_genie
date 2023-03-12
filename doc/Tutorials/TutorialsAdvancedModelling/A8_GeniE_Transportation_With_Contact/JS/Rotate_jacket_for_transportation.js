// Define auxiliary guide line and beams, rotate jacket and delete auxiliary beams

Curve1 = GuideLine(Point(22.5 m,17.5 m,0 m), Point(-22.5 m,17.5 m,0 m), 3);
Aux1 = Beam(Point(0 m,15.77132693 m,23.85568836 m), Point(0 m,17.5 m,0 m));
Aux2 = Beam(Point(0 m,17.5 m,0 m),Point(0 m,35 m,0 m));

// Rotate jacket

autoMSet = Set();
autoMSet.clear();
autoMSet.add(Leg1);
autoMSet.add(Leg2);
autoMSet.add(Leg3);
autoMSet.add(Leg4);
autoMSet.add(Br01);
autoMSet.add(Br02);
autoMSet.add(Br03);
autoMSet.add(Br04);
autoMSet.add(Br08);
autoMSet.add(Br06);
autoMSet.add(Br05);
autoMSet.add(Br07);
autoMSet.add(Br09);
autoMSet.add(Br10);
autoMSet.add(Br11);
autoMSet.add(Br12);
autoMSet.add(Br13);
autoMSet.add(Br14);
autoMSet.add(Br15);
autoMSet.add(Br16);
autoMSet.add(Br17);
autoMSet.add(Br18);
autoMSet.add(Br19);
autoMSet.add(Br20);
autoMSet.add(Br21);
autoMSet.add(Br27);
autoMSet.add(Br22);
autoMSet.add(Br23);
autoMSet.add(Br25);
autoMSet.add(Br24);
autoMSet.add(Br26);
autoMSet.add(Br28);
autoMSet.add(Br29);
autoMSet.add(Br30);
autoMSet.add(Br31);
autoMSet.add(Br32);
autoMSet.add(Br33);
autoMSet.add(Br34);
autoMSet.add(Br40);
autoMSet.add(Br35);
autoMSet.add(Br36);
autoMSet.add(Br38);
autoMSet.add(Br37);
autoMSet.add(Br39);
autoMSet.add(Br41);
autoMSet.add(Br42);
autoMSet.add(Br43);
autoMSet.add(Br44);
autoMSet.add(Br45);
autoMSet.add(Br46);
autoMSet.add(Br53);
autoMSet.add(Br47);
autoMSet.add(Br48);
autoMSet.add(Br49);
autoMSet.add(Br51);
autoMSet.add(Br50);
autoMSet.add(Br52);
autoMSet.add(Br55);
autoMSet.add(Br54);
autoMSet.add(Br56);
autoMSet.add(Br57);
autoMSet.add(Br58);
autoMSet.add(Cndsupp1);
autoMSet.add(Cndsupp2);
autoMSet.add(Cndsupp3);
autoMSet.add(Cndsupp4);
autoMSet.add(Cndsupp5);
autoMSet.add(Curve1);
autoMSet.moveRotate(Point(0 m,17.5 m,0 m),Vector3d(-45 m,0 m,0 m),94.1446,geUNCONNECTED);
Delete(autoMSet);

// Delete two auxiliary beams and guide curve

Delete(Aux1);
Delete(Aux2);
Delete(Curve1);
