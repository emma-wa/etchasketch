// create a new grid when button is clicked
var newGrid = document.querySelector('#newGrid');
newGrid.addEventListener('click', makeNewGrid);
function makeNewGrid() {

  // delete all rows
  var myNode = document.getElementById("grid");
  while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
  }
  var size = prompt("How many pixels squared do you want your grid?");

  // create full page grid with rows
  const container = document.querySelector('#grid');
  var toAddRows = document.createDocumentFragment();
  for(i=0; i < size; i++){
    var row = document.createElement('div');
    row.classList.add('row');
    toAddRows.appendChild(row);
    document.getElementById('grid').appendChild(toAddRows);
  }

  // fill rows with boxes
  const gridRows = document.querySelectorAll('.row');
  gridRows.forEach(addBox);
  function addBox(value, index) {
    for (i=0; i< size; i++){
      var toAddBoxes = document.createDocumentFragment();
      var box = document.createElement('div');
      box.classList.add('box');
      toAddBoxes.appendChild(box);
      value.appendChild(toAddBoxes);
    }
  }

  // add color to boxes when hovered over
  const color = document.querySelectorAll('.box');
  color.forEach(box => box.addEventListener('mouseover', function(e){
    box.classList.add('black');
  }));

  // reset the grid when button is clicked
  var reset = document.querySelector('#clear');
  reset.addEventListener('click', resetGrid);
  function resetGrid() {
    const allBoxes = document.querySelectorAll('.box');
    allBoxes.forEach(box => {
      box.classList.remove('black');
    });
  }
}
