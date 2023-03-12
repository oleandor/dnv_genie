//
//  function plotResult will plot
//  VonMises stresses for "loadcasein"
//  on named set "setin"
//
function plotResult(loadcasein,setin) {
    // Delete "Demo_ModelView" if it exists
    for(var object in ModelObjects) {
       if(object.supportsType(typeModelView) && object.name()=="Demo_ModelView") {
          Delete(object);                                      
           }   
     }
    ModelView_temp = ModelView();
    ModelView_temp.addElement(DisplayConfiguration("Results - with Mesh", moPaper));
    ModelView_temp.addElement(ResultPresentation());
    ModelView_temp.resultPresentation.resultComponent = rsStress;
    ModelView_temp.resultPresentation.calculationType = rsVonMises;
    ModelView_temp.resultPresentation.optionMinmax = false;
    ModelView_temp.resultPresentation.optionValues = false;
    ModelView_temp.name =  "Demo_ModelView";
    ModelView_temp.addElement(VisibleModel());
    myloadcase = GetNamedObject(loadcasein.name);
    myloadcase.setCurrent();
    if( setin.supportsType(typeSet)) {
        Demo_ModelView.visibleModel.include(setin);
        Demo_ModelView.activate();   }
    Graphics.fitModel();
    var Plottitle = "Loadcase " + loadcasein.name() + " - Part " + setin.name() + " - Von Mises Stresses"; 
    var Plotfile = loadcasein.name() + setin.name() + ".jpg";
    Graphics.saveImage(Plotfile);
    var NewPlot = Figure(Plottitle , Plotfile);
    return NewPlot;
     }
//
//   Using plotResult to make a report
// 
Case_1 = Report("Case_1");
Case_1.add(ChapterStructure());
Case_1.element(1).add(TablePlateCoordinate());
Case_1.element(1).add(TablePlateProperty());
Case_1.element(1).add(TableSupportBoundary());
Case_1.add(plotResult(Operation,UpperDeck));
Case_1.add(plotResult(Storm,UpperDeck));
Case_1.saveAs("Case_1.doc", mrWordXML);
//    








