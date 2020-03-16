//block of initial values for global variables
var greet = '[not initialized]';
var name = '[not initialized]';
var message = '[not initialized]';
var sign = '[not initialized]';
var tiles, subTotal, shipping, grandTotal; 
var welcome;


//initializes global variables with values
function initializer() {
  greet = "Hello,";
  name = " Garrett";
  message = "Please review your order: ";
  sign = "Sample Text";
  welcome = greet + name + "! " + message; //combines opening text for ease of calling later
  calculate();
}


//takes length of sign variable to calculate pricing
function calculate() {
  tiles = sign.length;
  subTotal = tiles * 5;
  shipping = 7;
  grandTotal = subTotal + shipping;
}


//generic function for passing js variable to its equivalent html element
function setTextContentById(getId, setMsg){
  var el = document.getElementById(getId);
  el.textContent = setMsg;
}


//function containing each instance of setTextContentById() needed to complete form
function signSet() {
  setTextContentById('greeting', welcome);
  setTextContentById('userSign', sign);
  setTextContentById('tiles', tiles);
  setTextContentById('subTotal', '$' + subTotal);
  setTextContentById('shipping', '$' + shipping);
  setTextContentById('grandTotal', '$' + grandTotal);

  
}


//runs functions necessary to begin use
initializer(); 
signSet();


//resets all text in each sign variable to empty space ('')
function resetSign(event) {
  var signText = ['greeting', 'userSign',
      'tiles', 'subTotal', 'shipping',
      'grandTotal'];
     
  for (var i=0; i < signText.length; i++) {
      setTextContentById(signText[i], '');
    
  }
  event.preventDefault();
}


//reset checker tied to button in html with id 'reset'
var el = document.getElementById('reset');
el.addEventListener('click', resetSign, false);