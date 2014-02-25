/**
 * Created by naresh on 2/13/14.
 */


/* Carousel Image Slider sliding time control  */
$('.carousel').carousel({
    interval: 4000 // in milliseconds
})



function loadContent(view) {
    $(document).ready(function() { // this runs as soon as the page is ready (DOM is loaded)
        $("#mainContent") // selecting "div" (you can also select the element by its id or class like in css )
            .load("partials/"+view+".html") // load in the file specified
    });
}

function showMainContent (view) {
    $(document).ready(function() { // this runs as soon as the page is ready (DOM is loaded)
        $("#mainContent") // selecting "div" (you can also select the element by its id or class like in css )
            .load("partials/"+view+"/intro.html") // load in the file specified
    });
}