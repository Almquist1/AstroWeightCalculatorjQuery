// $(function(){ - is this what broke it? 

// });

// the planet data array
   var planets = [
       ['Pluto', 0.06],
       ['Neptune', 1.148],
       ['Uranus', 0.917],
       ['Saturn', 1.139],
       ['Jupiter', 2.640],
       ['Mars', 0.3895],
       ['Moon', 0.1655],
       ['Earth', 1],
       ['Venus', 0.9032],
       ['Mercury', 0.377],
       ['Sun', 27.9]
   ].reverse();

   // populate planet select dropdown options from data array

   $(planets).each(function(i) {
       $("<option>").val(planets[i][1]).html(planets[i][0]).appendTo("#dropdownPlanet");
   })

   //    button click
   // BREAKS CODE ////$("#btnCalculate").button().click(function(){
   //     alert("button");
   // });

   // calculate user's weight on selected planet
   function calculateWeight() {

       // select values needed for output
       var inputWeight = $("#inputWeight").val();
       var surfaceGravity = $("#dropdownPlanet").val();
       var dropdownPlanet = $("#dropdownPlanet option:selected").html();


// console.log(inputWeight)
// console.log(surfaceGravity)
// console.log(dropdownPlanet)

       // calculate weight
       var yourWeightOnPlanet = Math.round(inputWeight * surfaceGravity);

       // build string for result display 
       var astroWeight = "If you were on " + dropdownPlanet + ", you would weigh " + yourWeightOnPlanet + " lbs";

       // bind result to p element
       $('#output').text(astroWeight);
   }

