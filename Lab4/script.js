
    var element10 = document.getElementById("10");

    element10.onclick = function() {
        toggleColors(element10);
    };

    var listItems = document.querySelectorAll("li");
    listItems[3].onclick = function() {
        toggleColors(listItems[3]);
    };

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

    var addButton = document.querySelector('button[name="addButton"]');
    addButton.onclick = function() {
        addImage();
    };

    var enlargeButton = document.querySelector('button[name="enlargeButton"]');
    enlargeButton.onclick = function() {
        changeImageSize(1.2);
    };

    var reduceButton = document.querySelector('button[name="reduceButton"]');
    reduceButton.onclick = function() {
        changeImageSize(0.8);
    };

    var deleteButton = document.querySelector('button[name="deleteButton"]');
    deleteButton.onclick = function() {
        deleteLastImage();
    };

    var originalImage = document.querySelector("img");

    var imageContainer = document.createElement("div");
    document.body.appendChild(imageContainer);
 
    var addedImages = [originalImage];

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

