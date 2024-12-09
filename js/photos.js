document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.dragimage');
    const boxes = document.querySelectorAll('.image-box');

    // dragstart event
    images.forEach(image => {
        image.addEventListener('dragstart', (event) => {
            // Store the ID of dragged image
            event.dataTransfer.setData('imageId', event.target.id);
        });
    });

    // dragover
    boxes.forEach(box => {
        box.addEventListener('dragover', (event) => {
            event.preventDefault(); 
        });

        box.addEventListener('drop', (event) => {
            event.preventDefault(); 

            // get ID of dragged image from dataTransfer object
            const draggedImageId = event.dataTransfer.getData('imageId');
            const draggedImage = document.getElementById(draggedImageId);

            // get image inside the drop box target
            const targetImage = box.querySelector('img');

            // if box contains an image, swap `src` values
            if (targetImage) {
                const tempSrc = targetImage.src;
                targetImage.src = draggedImage.src;
                draggedImage.src = tempSrc;
            } else {
                // if box is empty, move image into the box
                box.appendChild(draggedImage);
            }
        });
    });
});
