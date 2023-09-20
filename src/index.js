// write your code here
//core deliverables
//1. Append all images to <div id="ramen-menu"> on page load
//2. on clikc of each image display details of the image in div "ramen-details"
//3. on submit of the for - "new-Ramen" create a new menu item.

// Advanced delivarables
//1. on page load display the details of 1st menu by default.
const ramenUrl="http://localhost:3000/ramens";

// core deliverable 1
fetch(ramenUrl)
.then(response => response.json())
.then(ramensMenuImages=> {
    ramensMenuImages.forEach(ramensMenuImage => {
        renderRamensMenu(ramensMenuImage);
    })

})


function renderRamensMenu(ramensMenuImage)
{
    const ramenMenuDiv= document.querySelector("#ramen-menu");
        const imgTag= document.createElement("img");

        imgTag.src= ramensMenuImage.image;
        ramenMenuDiv.append(imgTag);
        
        //core delivarable 2
        imgTag.addEventListener("click", (event)=>{
        const div_ramen_details= document.querySelector("#ramen-detail");
        
        const detail_image_Class= document.querySelector(".detail-image");
        detail_image_Class.src= ramensMenuImage.image;

        const nameOfTheMenuH2= document.querySelector(".name");
        nameOfTheMenuH2.textContent= ramensMenuImage.name;

        const nameOFtheRest= document.querySelector(".restaurant");
        nameOFtheRest.textContent= ramensMenuImage.restaurant;
        
        const rating= document.querySelector("#rating-display");
        rating.textContent= ramensMenuImage.rating;

        const comments= document.querySelector("#comment-display");
        comments.textContent= ramensMenuImage.comment;
 
        div_ramen_details.append(detail_image_Class,nameOfTheMenuH2,nameOFtheRest);
    })
}


// core deliverable 3
document.querySelector("#new-ramen").addEventListener("submit", (event)=>{
 event.preventDefault();
    const newNameValue= document.querySelector("#new-name").value;
    const newRestaurant= document.querySelector("#new-restaurant").value;
    const newImageUrl= document.querySelector("#new-image").value;
    const newRating= document.querySelector("#new-rating").value;
    const newComments= document.querySelector("#new-comment").value;


    dataToUpadte={
        name: newNameValue,
        restaurant: newRestaurant,
        image: newImageUrl,
        rating: newRating,
        comment: newComments
    }
    renderRamensMenu(dataToUpadte);

})

