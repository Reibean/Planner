// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    $(".saveBtn").click(function () {
        //get ID of containing timeblock
        var blockId = $(this).closest(".time-block").attr("id").replace("block", "");
        //get user input from input field within that timeblock
        var userInput = $(this).siblings("input").val();
        //save user input to local storage
        localStorage.setItem("input" + blockId, userInput);
    });
});
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    $(function () {
        function applyTimeClass() {
            var currentHour = new Date().getHours();
            $(".time-block").each(function () {
                var blockId = $(this).attr("id").split("block")[1];
                var blockHour = parseInt(blockId);
                if (blockHour < currentHour) {
                    $(this).addClass("past").removeClass("present future");
                } else if (blockHour === currentHour) {
                    $(this).addClass("present").removeClass("past future");
                } else {
                    $(this).addClass("future").removeClass("past present"); 
                }
                var savedInput = localStorage.getItem("input" + blockId);
                if (savedInput !== null) {
                    $(this).find("input").val(savedInput);
                }
            });
        }

        applyTimeClass();
        $(".saveBtn").click(function () {
            var blockId = $(this).closest(".time-block").attr("id").replace("block", "");
            var userInput = $(this).siblings("input").val();
            localStorage.setItem("input" + blockId, userInput);
        });
    
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    
    function displayCurrentDate() {
        var currentDate = new Date();
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var formattedDate = currentDate.toLocaleDateString('en-US', options);
        $("#current-date").text("Current Date: " + formattedDate);
    }
    displayCurrentDate();
    // TODO: Add code to display the current date in the header of the page.
  });
  
  