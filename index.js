const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        alt: "Selfie Painting of van Gogh",
        comment: "just took a few mushrooms lol",
        likes: "21,492"
    },
    {
        name: "Jeff",
        username: "jeffisgreat",
        location: "Los Angeles, Californa USA",
        avatar: "images/avatar-jeff.jpg",
        post: "images/post-able.jpg",
        alt: "Atomic Duck beer in a glass",
        comment: "Able Baker makes delicious Beer! This is Atomic Duck",
        likes: "1,000,432"
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        alt: "Selfie Painting of Courbet",
        comment: "i'm feelin a bit stressed tbh",
        likes: "12,502"
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        alt: "Selfie Painting of Ducreux",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: "15,137"
    }
]

const mainEl = document.getElementById("main")
let html = ""
for (let i = 0; i < posts.length; i++) {
    html += `
    <article class="post">
                    <div class="post-header">
                        <img class="avatar" src="${posts[i].avatar}">
                        <div>
                            <div>
                                <span class="name">${posts[i].name}</span>
                            </div>
                            <span class="location">${posts[i].location}</span>
                        </div>
                    </div>  
                
                    <img class="img" src="${posts[i].post}" alt="${posts[i].alt}">

                    <div class="post-footer">
                        
                        <div class="icons">
                            <span><img class="heart-icon" src="images/icon-heart.png"></span>
                            <span><img class="comment-icon" src="images/icon-comment.png"></span>
                            <span><img class="message-icon" src="images/icon-dm.png"></span>
                        </div>
                            
                        <div class="likes">
                            <span >${posts[i].likes} Likes </span>
                        </div>
                       
                        <div class="username-comment">
                            <span class="username">${posts[i].username}</span>
                            <span class="comment">${posts[i].comment}</span>
                        </div>
                    </div> 
        </article>
     ` }
mainEl.innerHTML = html;
