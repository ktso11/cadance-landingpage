window.onload=function(){

  var accordionHeader= document.querySelector('.accordion__header');
  var addIcon = document.querySelector('.add');
  var minusIcon = document.querySelector('.minus');

  accordionHeader.addEventListener('click', function(event) {

    console.log("I clicked")
    //standard, no description with + button
    if (addIcon.style.display === "block"){
      accordionHeader.nextElementSibling.style.display = "block";
      addIcon.style.display = "none";
      minusIcon.style.display = "block";
      // addIcon.classList.toggle('hidden');
      // minusIcon.classList.toggle('hidden');

    } else {
      accordionHeader.nextElementSibling.style.display = "none";
      addIcon.style.display = "block";
      minusIcon.style.display = "none";
      // addIcon.classList.toggle('hidden');
      // minusIcon.classList.toggle('hidden');
    }
  })


}
