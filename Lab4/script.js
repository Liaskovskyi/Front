document.addEventListener("DOMContentLoaded", function () {
    var elementWithId10 = document.getElementById("10");

    elementWithId10.addEventListener("click", function () {
        toggleColors(elementWithId10);
    });

    var listItems = document.querySelectorAll("li");
    listItems[3].addEventListener("click", function () {
        toggleColors(listItems[3]);
    });

    function toggleColors(element) {

        if (element.classList.contains("clicked")) {
            element.classList.remove("clicked");
            element.style.backgroundColor = "";
            element.style.color = "";
        } else {
            element.classList.add("clicked");
            element.style.backgroundColor = "blue"; 
            element.style.color = "white"; 
        }
    }

   var originalImage = document.querySelector("img");

   var imageContainer = document.createElement("div");
   document.body.appendChild(imageContainer);

   var addedImages = [originalImage];

   var addButton = document.querySelector('button[name="addButton"]');
   var enlargeButton = document.querySelector('button[name="enlargeButton"]');
   var reduceButton = document.querySelector('button[name="reduceButton"]');
   var deleteButton = document.querySelector('button[name="deleteButton"]');

   addButton.addEventListener("click", function () {
       addImage();
   });

   enlargeButton.addEventListener("click", function () {
       changeImageSize(1.2);
   });

   reduceButton.addEventListener("click", function () {
       changeImageSize(0.8);
   });

   deleteButton.addEventListener("click", function () {
       deleteLastImage();
   });

   function addImage() {
       var newImage = document.createElement("img");
       newImage.src = originalImage.src;
       newImage.alt = "New Image";
       imageContainer.appendChild(newImage);
       addedImages.push(newImage);
   }

   function changeImageSize(factor) {
       addedImages.forEach(function (image) {
           var currentWidth = parseInt(getComputedStyle(image).width);
           var newWidth = currentWidth * factor;
           image.style.width = newWidth + "px";
       });
   }

   function deleteLastImage() {
       if (addedImages.length > 1) {
           var lastImage = addedImages.pop();
           if (lastImage) {
               imageContainer.removeChild(lastImage);
           }
       }
   }
});
