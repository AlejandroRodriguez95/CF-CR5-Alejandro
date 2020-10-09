
$(document).ready(function () {
    var movies = JSON.parse(films);

    // function to generate the content using a foor loop. It adds 1 movie for each element in the JSON file
    // the if statement, checks if the element should be on the right, or on the left (different col size)
    for (let i = 0; i < movies.length; i++) {
        if (i % 2 == 0) {
            $("#movies").append(`
            <div class="mt-lg-3 mt-3 p-2 card col-lg-4 offset-lg-1 bg-notSoDark text-light ">
                <img class="card-img-top" src="img/${movies[i].image}">
                <div class="card-body">
                    <h5 class="card-title">${movies[i].name}</h5>
                    <p class="card-text">${movies[i].description}</p>
                </div>
                <div class="card-body">
                <a class="like-btn" movieNumber="${i}" number="${movies[i].likes}">&#128077 Like!</a><span class="likes">${movies[i].likes}</span>
                </div>
            </div>
            `);
        }
        else {
            $("#movies").append(`
            <div class="mt-lg-3 mt-3 p-2 card col-lg-4 offset-lg-2 bg-notSoDark text-light ">
            <img class="card-img-top" src="img/${movies[i].image}">
            <div class="card-body">
                <h5 class="card-title">${movies[i].name}</h5>
                <p class="card-text">${movies[i].description}</p>
            </div>
            <div class="card-body">
                <a class="like-btn" movieNumber="${i}" number="${movies[i].likes}">&#128077 Like!</a><span class="likes">${movies[i].likes}</span>
            </div>
        </div>
            `);
        }
    }


    // button for sorting. It works similarly the function that fills the document, but it sorts the "movies" object
    // first. We do this using a double for loop to compare the amount of likes of each element. If the element on the
    // right is higher, we change the positions of the elements.

    // at the end, we just fill with the content, just as in the first function.
    $("#sort-btn").on('click', function () {
        $("#movies").text("");
        $("#movies").append("<p class='bg-secondary offset-lg-4 col-lg-4 text-center rounded h5 text-light p-2'>Sorted by amount of likes</p>")
        var saved;
        for (let i = 0; i < movies.length; i++) {

            for (let j = 0; j < movies.length; j++) {
                for (let k = j + 1; k < movies.length; k++) {
                    if (movies[j].likes < movies[k].likes) {
                        saved = movies[j];
                        movies[j] = movies[k];
                        movies[k] = saved;
                    }
                }
            }
            if (i % 2 == 0) {
                $("#movies").append(`
                <div class="mt-lg-3 mt-3 p-2 card col-lg-4 offset-lg-1 bg-notSoDark text-light ">
                    <img class="card-img-top" src="img/${movies[i].image}">
                    <div class="card-body">
                        <h5 class="card-title">${movies[i].name}</h5>
                        <p class="card-text">${movies[i].description}</p>
                    </div>
                    <div class="card-body">
                    <a class="like-btn" movieNumber="${i}" number="${movies[i].likes}">&#128077 Like!</a><span class="likes">${movies[i].likes}</span>
                    </div>
                </div>
                `);
            }
            else {
                $("#movies").append(`
                <div class="mt-lg-3 mt-3 p-2 card col-lg-4 offset-lg-2 bg-notSoDark text-light ">
                <img class="card-img-top" src="img/${movies[i].image}">
                <div class="card-body">
                    <h5 class="card-title">${movies[i].name}</h5>
                    <p class="card-text">${movies[i].description}</p>
                </div>
                <div class="card-body">
                    <a class="like-btn" movieNumber="${i}" number="${movies[i].likes}">&#128077 Like!</a><span class="likes">${movies[i].likes}</span>
                </div>
            </div>
                `);
            }
        }
        //   this button increases the amount of likes of each movie (its inside of the sort function, else after
        //  sorting, the like increase wont work)
        $(".like-btn").on('click', function () {

            var a = Number($(this).attr('number'));
            a++;
            var id = $(this).attr('movieNumber');
            movies[id].likes = a;
            $(this).attr('number', a);
            $(this).next().text(a);
        });
    });
    //   this button increases the amount of likes of each movie
    $(".like-btn").on('click', function () {

        var a = Number($(this).attr('number'));
        a++;
        var id = $(this).attr('movieNumber');
        movies[id].likes = a;
        $(this).attr('number', a);
        $(this).next().text(a);
    });


});

