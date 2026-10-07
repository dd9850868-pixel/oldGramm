const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
     {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    }
   ,


                {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
let likeEl = document.getElementById ("likes-${i}")
let likeBtn = document.getElementById ("like-btn-${i}")
let likeBtn2 = document.getElementById ("like-btn-2")
let likeBtn3 = document.getElementById ("like-btn-3")


const mainEl = document.getElementById("main-container")



function renderMain() {
    let main  = " "
    for (let i=0; i<posts.length; i++){
        main += `<section>
                <div class="user-info"> 
                        <img id="avatar" src="${posts[i].avatar}">
                        <div class="user-text">
                            <h1 id=" name"> ${posts[i].name }</h1>
                            <p class="paragraph" id="location" > ${posts[i].location} </p>
                        </div>
                </div>
                    <img id="post" class="post-img" src="${posts[i].post}" alt="post image">
                        
            
                <div class="body">
                    <img id="like-btn-${i}" onClick="likePost(${i})" src="images/icon-heart.png">
                    <img src="images/icon-comment.png">
                    <img src="images/icon-dm.png">
                    <p id="likes-${i}" class="paragraph"> ${posts[i].likes}</p>
                    <p  class="paragraph" id="comment" > <strong id="username" >${posts[i].username}</strong> ${posts[i].comment} </p>
                </div>
         </section>   
        `
    }
    
mainEl.innerHTML = main
}
renderMain()


function likePost(i){
 posts[i].likes += 1
     document.getElementById (`likes-${i}`).textContent = posts[i].likes
    

    currentLikeBtn = document.getElementById(`like-btn-${i}`)

 currentLikeBtn.src = "images/icon-heart-red.png"

    
    
}

// likeBtn.addEventListener("click", function() {
//      likeEl.textContent = Number(likeEl.textContent) + 1
//      likeBtn.style.color = "red"
//     console.log("wey")
// })
// }
// likeBtn2.addEventListener("click", function() {
//     likeEl.textContent += 

//     console.log("wey")

// })
// likeBtn3.addEventListener("click", function() {

//     console.log("wey")

// })

//    <section>
//                 <div class="user-info"> 
//                         <img id="avatar" src="images/avatar-courbet.jpg">
//                         <div class="user-text">
//                             <h1  id=" name"> Gustave Courbet </h1>
//                             <p class="paragraph" id="location" > Onans, France </p>
//                         </div>
//                 </div>
//                     <img id="post" class="post-img" src="images/post-courbet.jpg">
                        
            
//                 <div class="body">
//                     <img id="like-btn-2" src="images/icon-heart.png">
//                     <img src="images/icon-comment.png">
//                     <img src="images/icon-dm.png">
//                     <p id="like-count" class="paragraph"> 12,502 likes</p>
//                     <p  class="paragraph" id="username"> <strong>gus1819</strong> I'm feelin a bit stressed tbh </p>
//                 </div>
//          </section>
          
    
//              <section>
//                 <div class="user-info"> 
//                         <img id="avatar" src="images/avatar-ducreux.jpg">
//                         <div class="user-text">
//                             <h1 id="name"> Joseph Ducreux </h1>
//                             <p class="paragraph" id="location" > Paris, France </p>
//                         </div>
//                 </div>
//                     <img id="post" class="post-img" src="images/post-ducreux.jpg">
                        
            
//                 <div class="body">
//                     <img id="like-btn-3" src="images/icon-heart.png">
//                     <img src="images/icon-comment.png">
//                     <img src="images/icon-dm.png">
//                     <p id="like-count" class="paragraph"> 15,137 likes</p>
//                     <p  class="paragraph" id="username"> <strong>jd1735</strong> gm friends! which coins are YOU stacking up today?? post below and WAGM!! </p>
//                 </div>
//          </section>