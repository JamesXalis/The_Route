// grabs current Day for header
const currentDay = moment().format("dddd, LL");
// grabs where current day is on markup
let $currentDay = $("#currentDay");
// grabs all the save buttons
let $button = $("button");

// array defined for all text inputs
const arrayof$Times = [$("#9am"), $("#10am"), $("#11am"), $("#12pm"), $("#1pm"), $("#2pm"), $("#3pm"), $("#4pm"), $("#5pm")];

// array defined for all text inputs' ID's
const arrayof$TimesID = [$("#9am").attr("id"), $("#10am").attr("id"), $("#11am").attr("id"), $("#12pm").attr("id"), $("#1pm").attr("id"), $("#2pm").attr("id"), $("#3pm").attr("id"), $("#4pm").attr("id"), $("#5pm").attr("id")];

// update Current Day on markup with the actual date
$currentDay.text(currentDay);

//this for loop does two things:
// 1. this for loop will check each if current hour is greater than, equal to, or less than 9, and if so, it will make the 9am text input grey, red, or green. Next iteration will check against 10, and will change 10am element accordingly. Etc.
// 2. It will set all input fields to what was stored in local data
for (i=0; i<arrayof$Times.length; i++) {
    if (moment().hour() > (9+i)) {
        arrayof$Times[i].addClass("past");
    } else if (moment().hour() == (9+i)) {
        arrayof$Times[i].addClass("present");
    } else if (moment().hour() < (9+i)) {
        arrayof$Times[i].addClass("future");
    }
    arrayof$Times[i].val(localStorage.getItem(arrayof$TimesID[i]));
}

// on button click, input's data will be set to local storage, using it's ID as a key and its value as the storage entry
$button.click(function() {
    $currEntryAtt = $(this).siblings("input").attr("id");
    $currEntry = $(this).siblings("input").val();
    localStorage.setItem($currEntryAtt, $currEntry);
});