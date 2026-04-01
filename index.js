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


jsTestEl.innerHTML = `
            <main>
                <div class="post">
                    <div class="username-info">
                        <div>
                            <img class="user-avatar" src="${posts[1].avatar}" alt="avatar of Gustave Courbet">
                        </div>
                        <div>
                            <h3 class="username-name">${posts[1].name}</h3>
                            <p class="username-name font-small">${posts[1].location}</p>
                        </div> 
                    </div>
                    <img class="post-photo" src="${posts[1].post}" alt="portrait of Gustave Courbet">
                </div>
            </main>
            <section>
                <div class="post-interactions">
                    <div>
                        <img id="courbet-post" class="icons" src="images/icon-heart.png" alt="heart icon">
                    </div>
                    <div>
                        <img class="icons" src="images/icon-comment.png" alt="comment icon">
                    </div>
                    <div>
                        <img class="icons" src="images/icon-dm.png" alt="direct message icon">
                    </div>
                </div>
                <p id="courbet-likes" class="bold-text likes" >${posts[1].likes} likes</p>
                <p class="bold-text comment">${posts[1].username} <span class="font-small">${posts[1].comment}</span></p>
            </section>`


const courbetPostEl = document.getElementById("courbet-post")
const courbetLikesEl = document.getElementById("courbet-likes")

courbetPostEl.addEventListener("click", function() {
    posts[1].likes += 1
    courbetLikesEl.textContent = `${posts[1].likes} likes`
})
