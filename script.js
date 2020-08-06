$(document).ready(function () {
   
    // save button
    var saveBtn = $(".button");
   
    saveBtn.on("click", function (tr) {
        ;
    })






    let is24HourTime = false
    // set and display current month in header

    let m = moment();
    let formatDate = m.format("MMMM Do YYYY h:mma");
    $("#hodie").text(formatDate);


    // loop through the table rows to assign the correct time to the 1st column
    $("#calendar tr").each(function (ind, tr) {

        let timeVal = $(tr).attr("data-time");
        let tableHeader = $(tr).find("th");

        setTimeColumn(timeVal, tableHeader, is24HourTime)
        setBackground(m, tr, timeVal)

    });

    //  assigning the correct time to the table column with optional 12hr and 24hr display
    function setTimeColumn(currentHour, tableHeader, is24H) {
        tableHeader.text(currentHour + ":00");
        // todo handle optional formating for 12 hour clock, 
    }

    function setBackground(currentMoment, tableRow, rowHour) {
        let currentHour = get24HourFromMoment(currentMoment);
        let rowHourNum = parseInt(rowHour, 10);

        if (rowHourNum < currentHour) {
            $(tableRow).addClass("past-time");
        } else if (rowHourNum === currentHour) {
            $(tableRow).addClass("current-time");
        } else {
            $(tableRow).addClass("future-time");
        }
    }


    function get24HourFromMoment(mo) {
        let hourText = mo.format("H");
        return parseInt(hourText, 10);
    }

});





