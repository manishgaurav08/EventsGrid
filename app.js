/*jslint browser: true*/
/*global $, jQuery, alert, console, angular*/



             
            
//            var events = [
//                {id: 1, title: 'Event1', imageURL: 'images/event1.png', date: '02/11/2015', venue: 'Venue1'},
//                {id: 2, title: 'Event2', imageURL: 'images/event2.ico', date: '02/11/2016', venue: 'Venue2'},
//                {id: 3, title: 'Event3', imageURL: 'images/event3.png', date: '02/11/2017', venue: 'Venue3'},
//                {id: 4, title: 'Event4', imageURL: 'images/event4.ico', date: '02/11/2018', venue: 'Venue4'},
//                {id: 5, title: 'Event5', imageURL: 'images/event5.ico', date: '02/11/2019', venue: 'Venue5'}
//            ];
//            
            var handleMouseClick = function (event) {
                var id = event.target.getAttribute('id');
                var eve = events[id-1];

                if(id > 0) {
                     console.log(eve.title);
                    location.href = "eventDetail.htm?Page=data&Event=" + eve.id;
                    //location.href = "eventDetail.htm?Page=data&Event=" + eve.title;
                    
                }
               
              };
            
            var handleMouseOver = function (event) {
                var id = event.target.getAttribute('id');
                var eve = events[id-1];

                if(id > 0) {
                    //console.log(eve.title);
                    var overlay = document.getElementById('overlay_' + id);
                    overlay.style.opacity= 1;  
                    var image = document.getElementById('image_' + id);
                    
                }
               
              };
            
            var handleMouseOut = function (event) {
                var id = event.target.getAttribute('id');
                var eve = events[id-1];
                 if(id > 0) {
                     //console.log(eve.title);
                     var overlay = document.getElementById('overlay_' + id);
                     overlay.style.opacity= 0;  
                 }
            };

            var bodyLoaded = function () {
                var images = document.querySelectorAll(".image"), i;

                
                for (i = 0; i < images.length; ++i) {
                    images[i].addEventListener('mouseover', handleMouseOver);
                    images[i].addEventListener('mouseout', handleMouseOut);
                    images[i].addEventListener('click', handleMouseClick);
                }
                
                var images1 = document.querySelectorAll(".image1"), i;
                
                for (i = 0; i < images1.length; ++i) {
                    images1[i].addEventListener('mouseover', handleMouseOver);
                    images1[i].addEventListener('mouseout', handleMouseOut);
                    images1[i].addEventListener('click', handleMouseClick);
                }
                
                var images2 = document.querySelectorAll(".image2"), i;
                
                for (i = 0; i < images2.length; ++i) {
                    images2[i].addEventListener('mouseover', handleMouseOver);
                    images2[i].addEventListener('mouseout', handleMouseOut);
                    images2[i].addEventListener('click', handleMouseClick);
                }
            };
            
      



