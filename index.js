const jsTestEl = document.getElementById("js-test")

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
    },
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
let listHtml = ""
for (let i = 0; i <posts.length; i++) {
    listHtml += `
            <main>
                <div class="post">
                    <div class="username-info">
                        <div>
                            <img class="user-avatar" src="${posts[i].avatar}" alt="avatar of ${posts[i].name}">
                        </div>
                        <div>
                            <h3 class="username-name">${posts[i].name}</h3>
                            <p class="username-name font-small">${posts[i].location}</p>
                        </div> 
                    </div>
                    <img class="post-photo" src="${posts[i].post}" alt="portrait of ${posts[i].name}">
                </div>
            </main>
            <section>
                <div class="post-interactions">
                    <div>
                        <img class="icons like-icon" src="images/icon-heart.png" alt="heart icon">
                    </div>
                    <div>
                        <img class="icons" src="images/icon-comment.png" alt="comment icon">
                    </div>
                    <div>
                        <img class="icons" src="images/icon-dm.png" alt="direct message icon">
                    </div>
                </div>
                <p id="post-likes-${i}" class="bold-text likes" >${posts[i].likes} likes</p>
                <p class="bold-text comment">${posts[i].username} <span class="font-small">${posts[i].comment}</span></p>
            </section>`
            
 }
        
jsTestEl.innerHTML = listHtml


const allHearts = document.querySelectorAll(".like-icon")

for (let i = 0; i < allHearts.length; i++) {
    const likesEl = document.getElementById(`post-likes-${i}`)
    allHearts[i].addEventListener("click", function() {
        posts[i].likes += 1
        likesEl.textContent = `${posts[i].likes} likes`
    })
}






