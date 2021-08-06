var name_of_the_pizza_array=[];
function submit(){
   var display_pizza_array = [];
   for (var j = 1; j <= 4; j++) {
       var name_of_the_pizza = document.getElementById("name_of_the_pizza_"+j).value;
       console.log(name_of_the_pizza);
       name_of_the_pizza_array.push(name_of_the_pizza);

   }
   console.log(name_of_the_pizza_array);

   var length_of_array = name_of_the_pizza_array.length;

   for (var k = 0; k < length_of_array; k++) {
       display_pizza_array.push("<h4>Name- "+name_of_the_pizza_array[k]+"</h4>");
       console.log(display_pizza_array);
       
       
   }
   document.getElementById("display_name_with_comas").innerHTML=display_pizza_array;
   var remove_comas = display_pizza_array.join(" ");
   document.getElementById("display_name_without_comas").innerHTML=remove_comas;

 document.getElementById("submit_button").style.display="none";
 document.getElementById("sort_button").style.display="inline-block";
 
}
function sorting(){
    name_of_the_pizza_array.sort();
    console.log(name_of_the_pizza_array);
 var display_sorted_array = [];
 var length_of_array = name_of_the_pizza_array.length;

   for (var k = 0; k < length_of_array; k++) {
       display_sorted_array.push("<h4>Name- "+name_of_the_pizza_array[k]+"</h4>");
       console.log(display_sorted_array);
       
       
   }
   document.getElementById("display_name_with_comas").innerHTML=display_sorted_array;
   var remove_comas = display_sorted_array.join(" ");
   document.getElementById("display_name_without_comas").innerHTML=remove_comas;



}
