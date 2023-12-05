/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var costPerDay= 0;

var dayCounter = 0;


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
var mon = document.getElementById('monday');
var tue = document.getElementById('tuesday');
var wed = document.getElementById('wednesday');
var thu = document.getElementById('thursday');
var fri = document.getElementById('friday');

function days() {
    if (!(this.classList.contains('clicked'))) {
        this.classList.add('clicked');
        dayCounter += 1;
    } 

    calculate();
}

mon.addEventListener('click',days);
tue.addEventListener('click',days);
wed.addEventListener('click',days);
thu.addEventListener('click',days);
fri.addEventListener('click',days);


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
var clearButton = document.getElementById('clear-button');

function clearDays() {
    dayCounter = 0;
    mon.classList.remove('clicked');
    tue.classList.remove('clicked');
    wed.classList.remove('clicked');
    thu.classList.remove('clicked');
    fri.classList.remove('clicked');
    document.getElementById('calculated-cost').innerHTML='0';
}

clearButton.addEventListener('click',clearDays);


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

var halfButton = document.getElementById('half');

halfButton.addEventListener('click',changeRate);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
var fullButton = document.getElementById('full');

fullButton.addEventListener('click',changeRate);

function changeRate() {
    if(this.id == 'half') {
        halfButton.classList.add('clicked');
        fullButton.classList.remove('clicked');
        costPerDay = 20;
    } else {
        halfButton.classList.remove('clicked');
        fullButton.classList.add('clicked');
        costPerDay = 35;
    }
    calculate();
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculate() {
    document.getElementById('calculated-cost').innerHTML=(costPerDay * dayCounter);
}

