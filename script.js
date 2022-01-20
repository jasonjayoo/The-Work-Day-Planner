// this renders the current day, month, date of and year
$('#Date').text(moment().format('dddd, MMMM Do YYYY'));

// this tells the browser that jQuery is being utilized and it also holds the entire interactive function of the User Interface,
$(document).ready(function(){
// this links the act of the button being clicked to the event data that the user inputs.
    $('.saveBtn').on('click', function(){
        var text = $(this).siblings('.description').val();
        // links the save button to the div with military time
        var time = $(this).parent().attr('id');
        // saves the users input text to the local storage
        localStorage.setItem(time, text);
    })


    function timeColor() {
        // combines the client side time data and takes the hour(s) data only
        var currentHour = moment().hours();

        // this object method (aka function within a function tkes the the time block id of "number as a string" and with parseInt converts it to an integer/number)
        $('.time-block').each(function(){
            var blockHour = parseInt($(this).attr('id'));
            
            // this if conditions compares the current time to the class id's set time in order to render the css designated color scheme, if the current time is greater than the set time of that specific div then the text area will render a background color of gray. if the current eauals that specific div's designated time the text area will render red, and if the div's time is in the future it will render green.
            if (blockHour < currentHour) {
                $(this).addClass('past');
            } else if (blockHour === currentHour){
                $(this).removeClass('past');
                $(this).addClass('present');
            } else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }
        })
    }
// this calls the timeColor function notated above
    timeColor();
// this references the div id's military time and text areas description, marks it value/data and retrieves the specific data from the localStorage.
    $('#9 .description').val(localStorage.getItem('9'));
    $('#10 .description').val(localStorage.getItem('10'));
    $('#11 .description').val(localStorage.getItem('11'));
    $('#12 .description').val(localStorage.getItem('12'));
    $('#13 .description').val(localStorage.getItem('13'));
    $('#14 .description').val(localStorage.getItem('14'));
    $('#15 .description').val(localStorage.getItem('15'));
    $('#16 .description').val(localStorage.getItem('16'));
    $('#17 .description').val(localStorage.getItem('17'));
});