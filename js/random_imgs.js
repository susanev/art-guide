var random_images_array_desktop = ["black-sun-desktop.jpg", "fremont-troll-desktop.jpg", 
"hammering-man-desktop.jpg", "neototems-desktop.jpg", 
"vertebrae-desktop.jpg", "waiting-for-the-interurban-desktop.jpg" ];

var random_images_array_mobile = ["black-sun-mobile.jpg", "fremont-troll-mobile.jpg", 
"hammering-man-mobile.jpg", "neototems-mobile.jpg", 
"vertebrae-mobile.jpg", "waiting-for-the-interurban-mobile.jpg" ];

var random_text_array = ["Black Sun", "Fremont Troll",
"Hammering Man", "Neototems",
"Vertebrae", "Waiting for the Interurban"];

var random_paragraph_array_1 = 
["Created in 1969 by <a href=\"&#35;\">Isamu Noguchi</a>, a prominent Japanese American artist and landscape architect.", 
"Created in 1989 by <a href=\"&#35;\">Steve Badanes</a>, <a href=\"&#35;\">Will Martin</a>, <a href=\"&#35;\">Donna Walter</a>, and <a href=\"&#35;\">Ross Whitehead</a>", 
"Created in 1992 by <a href=\"&#35;\">Jonathan Borofsky</a>, an American sculptor and printmaker", 
"Created in 1995 by <a href=\"&#35;\">Gloria Bornstein</a>, an American sculptor and public artist", 
"Created in 1969 by <a href=\"&#35;\">Henry Moore</a>, an English sculptor and artist", 
"Created in 1979, by <a href=\"&#35;\">Richard Beyer</a>, an American sculptor from Pateros, Washington"]; 

var random_paragraph_array_2 = 
["Black Sun is located in Seattle's <a href=\"&#35;\">Volunteer Park</a> just outside of the <a href=\"&#35;\">Seattle Asian Art Museum</a>. Made of granite, with spectacular views of the Olympic Mountains, the Puget Sound, and the Space Needle", 
"Located in the <a href=\"&#35;\">Fremont</a> neighborhood in Seattle, a mixed media sculpute made of steel rebar, wire, and concrete, weighing in at 6,000 kg. Visitors are encouraged to climb on and interact with the Troll", 
"Hammering Man is a series of monumental kinetic sculptures which have been installed in various cites around the world. Seattle's Hammering Man is in front of the <a href=\"&#35;\">Seattle Art Museum</a>, and \"hammers\" silently 4x a minute, 24 hours a day",
"Located in the <a href=\"&#35;\">Seattle Center</a> near the International Fountain, the 2 cast bronze sculptures of a mother whale and baby honor the Duwamish legend of an underground stream below, allowing whales to pass between Elliot Bay and Lake Union", 
"Located in the <a href=\"&#35;\">Hirshhorn Museum and Sculpture Garden</a>, this sculpture represents bones, although different, having the same basic shape", 
"Also known as \"People Waiting for the Interurban\", is located in the <a href=\"&#35;\">Fremont</a> neighborhood of Seattle, this sculpture is constructed of cast aluminum"];


function getRandomImage(imgAr, textAr, paraAr1, paraAr2, path) {
    var num = Math.floor( Math.random()*imgAr.length );
    var img = imgAr[num];
    var text = '<div class="culture-text"><h3>' + textAr[num] + '</h3><div class="third culture-left-p"><p>' + paraAr1[num] + '</p></div><div class="two-thrids culture-right-p"><p>' + paraAr2[num] + '<a class="read-more" href="#">... learn more</a></p></div></div>';
    var imgStr = '<img  class="culture-img" src="' + path + img + '" alt = "">';
    document.write(imgStr + text); 
    document.close();
}