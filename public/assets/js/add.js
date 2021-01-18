
// //so far app chooses add.js form function over post request on burgers_controllers
$("#add-btn").on("click", (event) => {
    event.preventDefault();

    async function clientSideBurger() {
        const addBurger = {
            name: $("#add").val(),
        };

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addBurger)
        };

        //  fetch("/new", options).then(response => {
        //     console.log(response);
        // });

        const response = await fetch("/new", options);
        const newBurgerJson = await response.json();
        console.log(newBurgerJson);
        location.reload();
    };

    //calling async function
    clientSideBurger();

    console.log("We got a Add...js?");



});


console.log("We got a Add...js2?");

//PUT request when "devour it" button is clicked
$(".devour-btn").on("click", (event) => {
    event.preventDefault();
    var id = $(this).data("id");

    $.ajax("/new/" + id, {
        type: "PUT",
    }).then(
        function () {
            console.log("please,just a little bit more");
            location.reload();
        }
    );
});

