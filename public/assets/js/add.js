
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
//  $(document).on("click","#devour-btn", (event) => {
     $(".devour-btn").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    //var id = $(this).attr("data-id");
   // console.log(`This is the id : ${id}`);
   console.log(id);
    $.ajax("/new/" + id, {
        type: "PUT",
        success: function(result) {
            console.log(result);
            console.log(id);
        }
    }).then(
        function () {
           // console.log(id);
            console.log(`please,just a little bit more ${id}`);
            location.reload();
        }
    );
});

