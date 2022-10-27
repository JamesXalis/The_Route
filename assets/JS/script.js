const dateToday = moment().format("dddd, LL");
let $dateToday = $("#dateToday");
let $button = $("button");

const arrayof$Times = [$("#9am"), $("#10am"), $("#11am"), $("#12pm"), $("#1pm"), $("#2pm"), $("#3pm"), $("#4pm"), $("#5pm")];

const arrayof$TimesID = [$("#9am").attr("id"), $("#10am").attr("id"), $("#11am").attr("id"), $("#12pm").attr("id"), $("#1pm").attr("id"), $("#2pm").attr("id"), $("#3pm").attr("id"), $("#4pm").attr("id"), $("#5pm").attr("id")];

$dateToday.text(dateToday);


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


$button.click(function() {
    $currEntryAtt = $(this).siblings("input").attr("id");
    $currEntry = $(this).siblings("input").val();
    localStorage.setItem($currEntryAtt, $currEntry);
});