# Final Project: Portfolio
### About the Project
The goal of this project was to build a comprehensive portfolio website consisting of 5-10 content pages using the knowledge of HTML5, CSS3, and JavaScript I have learned in this course.
### Getting Started
If the node_modules folder is not included, this needs to be downloaded into the my-portfolio folder. This can be done through using npm install in the terminal. And the react-router-dom also needs to be installed if it has not already been via npm install react-router-dom in the terminal.

### Usage
Clicking my name in the Header will link you back to the site's homepage.
I created React components: Head, ImageList, and ResumeDetail to be displayed in the id='root' in the About Me page by calling the root component in App.js. The Head component provides links for the ImageList and ResumeDetail data to be displayed. The data from the ResumeDetail component will also be displayed when you click on the "Experience" link button in the header. ImageList and ResumeDetail fetches data from their respective JSON files (images.json and resume.json).
The contact.js file validates that all user inputs for each item of the contact form from contact.html are appropriate responses.

For the Photos page, I used the HTML5 API, Drag and Drop, to make the page interactive for the user.
You can drag and drop the images on top of each other and then they will switch which box they are in.
```Javascript
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

```
To make the website responsive to the browser size, I used CSS Flexbox. Example from code is below.
```css
.image-container {
    display: flex;
    flex-wrap:wrap;
    justify-content: space-around;
    margin-top: 50px;
}
```