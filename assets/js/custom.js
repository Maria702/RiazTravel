$(document).ready(function(){

	"use strict";

    

        /*==================================

* Author        : "ThemeSine"

* Template Name : Travel HTML Template

* Version       : 1.0

==================================== */


        /*=========== TABLE OF CONTENTS ===========

1. Scroll To Top
2. Range js
3. Countdown timer
4. owl carousel
5. datepicker
6. Smooth Scroll spy
7. Animation support
======================================*/
    

    // 1. Scroll To Top 

		$(window).on('scroll',function () {

			if ($(this).scrollTop() > 600) {

				$('.return-to-top').fadeIn();

			} else {

				$('.return-to-top').fadeOut();

			}

		});

		$('.return-to-top').on('click',function(){

				$('html, body').animate({

				scrollTop: 0

			}, 1500);

			return false;

		});

    // 2. range js
        
        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 12000,
            values: [ 2677, 9241 ],
            slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
        });
        $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );
        
        
        // Quantity Buttons Shop
    
        $(".qtyplus").on("click", function(){
        var b = $(this).parents(".quantity-form").find("input.qty"),
                c = parseInt(b.val(), 10) + 1,
                d = parseInt(b.attr("max"), 10);
            d || (d = 9999999999), c <= d && (b.val(c), b.change())
        });
        $(".qtyminus").on("click", function(){
            var b = $(this).parents(".quantity-form").find("input.qty"),
                c = parseInt(b.val(), 10) - 1,
                d = parseInt(b.attr("min"), 10);
            d || (d = 1), c >= d && (b.val(c), b.change())
        });


    // 3.Countdown timer 
        
        function makeTimer() {

                var endTime = new Date("March 7, 2019 12:00:00 PDT");            
                var endTime = (Date.parse(endTime)) / 1000;

                var now = new Date();
                var now = (Date.parse(now) / 1000);

                var timeLeft = endTime - now;

                var days = Math.floor(timeLeft / 86400); 
                var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
                var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
                var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

                if (hours < "10") { hours = "0" + hours; }
                if (minutes < "10") { minutes = "0" + minutes; }
                if (seconds < "10") { seconds = "0" + seconds; }

                $("#days").html(days + '<span class="camp">Days</span>');
                $("#hours").html(hours + '<span class="camp">Hour</span>');
                $("#minutes").html(minutes + '<span class="camp">Minute</span>');
                $("#seconds").html(seconds + '<span class="camp">Second</span>');       

        }
        
        setInterval(function() { makeTimer(); }, 1000);

    // 4. owl carousel
    
        // i. #testimonial-carousel
    
        
        var owl=$('#testemonial-carousel');
        owl.owlCarousel({
            items:3,
            margin:0,
            
            loop:true,
            autoplay:true,
            smartSpeed:1000,
            
            //nav:false,
            //navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            
            dots:true,
            autoplayHoverPause:true,
        
            responsiveClass:true,
                responsive:{
                    0:{
                        items:1
                    },
                    640:{
                        items:1
                    },
                    767:{
                        items:2
                    },
                    992:{
                        items:3
                    }
                }
            
            
        });

    // 5. datepicker
            $('[data-toggle="datepicker"]').datepicker();

    // 6. Smooth Scroll spy
    
// Sticky header initialization
$('.header-area').sticky({
    topSpacing: 0
});

// Smooth Scrolling for 'li.smooth-menu a'
$('li.smooth-menu a').on("click", function(event) {
    event.preventDefault(); // Prevent default behavior for smooth scroll
    var anchor = $(this);
    
    // Check if the href is a valid section (i.e., #id or specific section)
    var targetSection = $(anchor.attr('href'));
    if (targetSection.length) {
        $('html, body').stop().animate({
            scrollTop: targetSection.offset().top - 1
        }, 1200, 'easeInOutExpo');
    } else {
        // If not a valid section (for normal links or non-anchor links)
        window.location = anchor.attr('href');
    }
});

// Dropdown functionality: Toggle on click (for both Desktop and Mobile)
$('.smooth-menu .dropdown > a').on('click', function(event) {
    event.preventDefault(); // Prevent default behavior to avoid page reload
    var $this = $(this);

    // Toggle the dropdown visibility
    $this.next('.dropdown-menu').stop(true, true).slideToggle(200);
    
    // Close any other open dropdowns (optional)
    $('.dropdown-menu').not($this.next()).slideUp(200);
});

// Optional: Close dropdowns when clicked outside of them
$(document).on('click', function(event) {
    if (!$(event.target).closest('.smooth-menu').length) {
        $('.dropdown-menu').slideUp(200); // Hide dropdowns if clicked outside
    }
});



    // 7.animation support

        $(window).load(function(){

            // $(".about-us-txt h2").removeClass("animated fadeInUp").css({'opacity':'0'});
            // $(".about-us-txt button").removeClass("animated fadeInDown").css({'opacity':'0'});   
        });

        $(window).load(function(){

            $(".about-us-txt h2").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".about-us-txt button").addClass("animated fadeInDown").css({'opacity':'0'});

        });
        

});	




//footer script
$(document).ready(function () {
    // Show the loader
    $("#loader").show();

    // Preloader
    $(window).on('load', function () {
        $("#loader").delay(1000).fadeOut(500);
    });
});


// ================================================ hajj , umrah
// Function to open modal
function openModal(platinumId) {
    document.getElementById(platinumId).style.display = "block";
}

// Function to close modal
function closeModal(platinumId) {
    document.getElementById(platinumId).style.display = "none";
}

// Close modal when clicking outside of modal content
window.onclick = function (event) {
    const modals = document.getElementsByClassName("platinum-modal");
    for (let modal of modals) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}



// ============================================faqs


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}




// ======================================================services


document.querySelectorAll('.card-button').forEach((button, index) => {
    button.addEventListener('click', () => {
        alert(`Action ${index + 1} button clicked!`);
    });
});


// ================================================================== homepage
// ==================================== Page loader


		window.onload = function () {
			// Remove the loader and show content after 2 seconds
			setTimeout(function () {
				document.getElementById('loader').style.display = 'none';
				document.getElementById('content').style.display = 'block';
			}, 2000); // 2 seconds
		};

       
       
       
       
//  =========================================================== home page modal popup


// Hajj
// Function to open modal
function openModal(platinumId) {
    document.getElementById(platinumId).style.display = "block";
}

// Function to close modal
function closeModal(platinumId) {
    document.getElementById(platinumId).style.display = "none";
}

// Close modal when clicking outside of modal content
window.onclick = function (event) {
    const modals = document.getElementsByClassName("platinum-modal");
    for (let modal of modals) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}

// ====================================


window.onload = function () {
    document.getElementById('modal').style.display = 'block';
};

document.getElementById('closeBtn').onclick = function () {
    document.getElementById('modal').style.display = 'none';
};

window.onclick = function (event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
};

//  form category and selection 

		// Function to update category options based on selected destination
		function updateCategoryOptions() {
			// Get the selected destination
			const destination = document.querySelector('input[name="destination"]:checked') ? document.querySelector('input[name="destination"]:checked').value : null;

			// Get the category select element
			const categorySelect = document.getElementById('category');

			// Clear the current options (but keep the Select Type)
			categorySelect.innerHTML = '';

			// Always add "Select Type" as the first option
			const selectOption = document.createElement('option');
			selectOption.value = 'saab';
			selectOption.textContent = 'Select Type';
			categorySelect.appendChild(selectOption);

			// Add new options based on the selected destination
			if (destination === 'Hajj') {
				const hajjOptions = ['Platinum', 'Gold', 'Diamond'];
				hajjOptions.forEach(option => {
					const optionElement = document.createElement('option');
					optionElement.value = option.toLowerCase();
					optionElement.textContent = option;
					categorySelect.appendChild(optionElement);
				});
			} else if (destination === 'Umrah') {
				const umrahOptions = ['Premium', 'Gold', 'Economy'];
				umrahOptions.forEach(option => {
					const optionElement = document.createElement('option');
					optionElement.value = option.toLowerCase();
					optionElement.textContent = option;
					categorySelect.appendChild(optionElement);
				});
			}
		}

		// Event listener for radio buttons (destination selection)
		document.querySelectorAll('input[name="destination"]').forEach(radio => {
			radio.addEventListener('change', updateCategoryOptions);
		});

		// Call the function initially to set the correct state
		updateCategoryOptions();
	


        //  	===================================================================carousel

		$('.fade-carousel').carousel({
			interval: 5000,  // 5000ms = 5 seconds for auto-slide
			ride: 'carousel', // Start auto sliding as soon as the page loads
			wrap: true,       // Carousel will wrap to the first item after reaching the last item
			keyboard: true    // Enable keyboard control (left/right arrows)
		});
 
// ========================================================== visa modal

			// Function to open modal
			function openModal(modalId) {
				document.getElementById(modalId).style.display = "block";
			}

			// Function to close modal
			function closeModal(modalId) {
				document.getElementById(modalId).style.display = "none";
			}

			// Close modal when clicking outside of modal content
			window.onclick = function (event) {
				const modals = document.getElementsByClassName("visa-modal");
				for (let modal of modals) {
					if (event.target === modal) {
						modal.style.display = "none";
					}
				}
			}
		

            // =========================================================== form book now

            
    // // JavaScript to handle the visibility of categories based on selected destination
    // document.addEventListener('DOMContentLoaded', function () {
    //     // Trigger the change event to show categories on page load (Hajj selected by default)
    //     document.querySelector('input[name="destination"]:checked').dispatchEvent(new Event('change'));
    // });

    // document.querySelectorAll('input[name="destination"]').forEach((element) => {
    //     element.addEventListener('change', function () {
    //         var hajjCategories = document.getElementById('hajj-categories');
    //         var umrahCategories = document.getElementById('umrah-categories');

    //         // Hide all categories initially
    //         hajjCategories.style.display = 'none';
    //         umrahCategories.style.display = 'none';

    //         // Show categories based on the selected destination
    //         if (this.value === 'Hajj') {
    //             hajjCategories.style.display = 'block';
    //         } else if (this.value === 'Umrah') {
    //             umrahCategories.style.display = 'block';
    //         }
    //         // For Dubai, categories remain hidden
    //     });
    // });

    document.addEventListener('DOMContentLoaded', function () {
        // Function to handle category visibility
        function handleCategoryVisibility() {
            document.querySelectorAll('input[name="destination"]').forEach((element) => {
                element.addEventListener('change', function () {
                    var hajjCategories = document.getElementById('hajj-categories');
                    var umrahCategories = document.getElementById('umrah-categories');
                    
                    // Hide both categories initially
                    hajjCategories.style.display = 'none';
                    umrahCategories.style.display = 'none';
    
                    // Show categories based on the selected destination
                    if (this.value === 'Hajj') {
                        hajjCategories.style.display = 'block';
                    } else if (this.value === 'Umrah') {
                        umrahCategories.style.display = 'block';
                    }
                    // For Dubai, categories remain hidden (no need to hide explicitly)
                });
            });
    
            // Trigger the change event to show categories on page load (first selected destination)
            var selectedDestination = document.querySelector('input[name="destination"]:checked');
            if (selectedDestination) {
                selectedDestination.dispatchEvent(new Event('change'));
            }
        }
    
        // Call the function to handle category visibility
        handleCategoryVisibility();
    });
    

















