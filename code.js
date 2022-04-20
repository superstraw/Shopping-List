$("form").on("submit", addToList);
$("ul#list").on("click", "li", addToPurchased);
$("button#removeFromList").on("click", removeFromList);
$("button#removePurchased").on("click", removePurchased);

function addToList() {

    let item = $("input#item").val();

    $('ul#list').append(`<li>${item}</li>`);
}

function addToPurchased() {

    $("ul#purchased").append(this);
}

function removeFromList() {
    $('ul#list').empty();
}

function removePurchased() {
    $("ul#purchased").empty();
}