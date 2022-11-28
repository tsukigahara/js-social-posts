const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2022-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2022-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2022-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": ""
        },
        "likes": 56,
        "created": "2022-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2022-03-05"
    }
];

console.log(posts);

//list for liked post
var likedList = [];
console.log("liked list "+likedList);



//CREATE POSTS
posts.forEach((element) => {
    //get div
    let containerHTML = document.getElementById("container");
    containerHTML.innerHTML += `
    <div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="`+element.author.image+`" alt="`+element.author.name+`">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">`+element.author.name+`</div>
                <div class="post-meta__time">`+timeSince(element.created)+`</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">`+element.content+`</div>
    <div class="post__image">
        <img src="`+element.media+`" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" data-postid="`+element.id+`">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-`+element.id+`" class="js-likes-counter">`+element.likes+`</b> persone
            </div>
        </div> 
    </div>            
</div>`;
});

// like functions
posts.forEach((element, index) => {

    //get 
    var buttonHTML = document.querySelector(`[data-postid="`+element.id+`"]`);
    var likeCountHTML = document.getElementById("like-counter-"+element.id);
    console.log(buttonHTML);

    //when clicked like button
    buttonHTML.addEventListener("click", function (){

        //check if post is already liked. if not
        if (likedList.includes(element.id) == false){
            //change class
            buttonHTML.classList.add("like-button--liked");

            //add postid to likedList
            likedList.push(element.id);
            console.log("Liked post "+element.id);
            console.log("liked list "+likedList);

            //print on html
            var newlikes = element.likes + 1;
            likeCountHTML.innerHTML = newlikes;
            
        }
        //if yes
        else {

            //remove class
            buttonHTML.classList.remove("like-button--liked");

            //remove postid from likedList
            const index = likedList.indexOf(element.id);

            
            // only splice array when item is found
            if (index >= 0) { 
                likedList.splice(index, 1); // 2nd parameter means remove one item only
            }

            newlikes = element.likes;
            likeCountHTML.innerHTML = newlikes;

            console.log("Disliked post "+element.id);
            console.log("liked list "+likedList);
        }
    });
});


//POSTS TIME FUNCTION
function timeSince(value) {
    //converte la stringa in data
    var date = new Date(value);
    //calcola i secondi passati dalla data inserita e la data di oggi (diviso 1000 perchè new date ritorna in millisecondi)
    var seconds = Math.floor(((new Date().getTime()/1000) - (date.getTime()/1000)));
    console.log(seconds);
    //vedere se i secondi passati sono piu di 1 anno 
    var interval = seconds / 31536000;//1 anno in secondi
    //se i secondi passati diviso l'anno in secondi è più o uguale a 1 
    if (interval >= 1) {
        //va arrondato il risulato di interval 
        return Math.floor(interval) + " years";
    }
    //stessa logica per i mesi
    interval = seconds / 2592000;
    if (interval >= 1) {
        return Math.floor(interval) + " months";
    }
    //stessa logica per i giorni
    interval = seconds / 86400;
    if (interval >= 1) {
        return Math.floor(interval) + " days";
    }
    //stessa logica per le ore
    interval = seconds / 3600;
    if (interval >= 1) {
        return Math.floor(interval) + " hours";
    }
    //stessa logica per i min
    interval = seconds / 60;
    if (interval >= 1) {
        return Math.floor(interval) + " minutes";
    }
    //se in fine interval non corrisponde a nessun if, saranno in secondi
    return Math.floor(seconds) + " seconds";
  }
