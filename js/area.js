function calculateTraiangleArea(){
//  get b value

const baseFild =document.getElementById('triangle-base')
const baseValue =baseFild.value
const base =parseFloat(baseValue)


// get h value
const heightField =document.getElementById('triangle-height')
const heightvalue =heightField.value
const height =parseFloat(heightvalue)

const area =0.5 *base * height
console.log(area)

// show area
const areaspan =document.getElementById("triangle-area")
areaspan.innerText=area
}
// Rectanglele
function calculateRectangleleArea(){
  const widthField =document.getElementById('rectangle-w')
  const widthValuetext=widthField.value
  const width =parseFloat(widthValuetext)
  console.log(width)

  const lengthField =document.getElementById('rectangle-l')
  const lengthValuetext=lengthField.value
  const length =parseFloat(lengthValuetext)
  console.log(length)

  const area=width*length

  const rectangleAreaSpan =document.getElementById('rectangle-area')
  rectangleAreaSpan.innerText=area
}
// Parallelogram
function calculateParallelogramArea(){

  const base =getInputValue('parallelogram-b')
  // console.log(base)

  const height =getInputValue('parallelogram-h')
  // console.log(height)

  const area =base * height
  setElementInnerText('parallelogram-area',area)
}

function calculateEllipseArea(){
  const firstRadius=getInputValue('first-radius')
  const secondRadius=getInputValue('second-radius')
  const area=3.14 *firstRadius * secondRadius

  setElementInnerText('ellipse-area', area)
}


function getInputValue(fieldId){
  const inputField =document.getElementById(fieldId)
  const inputValueText = inputField.value;
  const value =parseFloat(inputValueText)
  return value;
}

function setElementInnerText(resultId ,area){
  const element =document.getElementById(resultId);
  element.innerText =area
}