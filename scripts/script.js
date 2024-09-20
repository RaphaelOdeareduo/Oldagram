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

const headerEl = document.querySelector(".header")
headerEl.innerHTML = `
    <div class="container">
                <div class="header-img-container">
                    <img class="logo" src="images/logo.png" alt="Oldagram logo">
                </div>
                <div class="header-img-container">
                    <img class="avatar" src="images/user-avatar.png" alt="User avatar">
                </div>
    </div>
` 

const mainContainerEl = document.querySelector(".main");

// TODO: Increase likes when double-clicking post
function renderPosts() {
    let postsHTML = "";
    for (let i = 0; i < posts.length; i++) {
        postsHTML += `
            <section class="section section__one">
                <div class="container">
                    <div class="user-info">
                        <div class="user-img">
                            <img class="avatar" src="${posts[i].avatar}" alt="${posts[i].name}'s profile picture">
                        </div>
                        <div class="user-text">
                            <p class="username bold">${posts[i].name}</p>
                            <p class="location">${posts[i].location}</p>
                        </div>
                    </div>
                    <div class="section-imgs">
                        <img class="post-img" src="${posts[i].post}" alt="Painting of ${posts[i].name}'s face">
                    </div>
                    <div class="post-info">
                        <div class="container">
                            <div class="icons">
                                <img class="icon" src="images/icon-heart.png" alt="like icon">
                                <img class="icon" src="images/icon-comment.png" alt="comment icon">
                                <img class="icon" src="images/icon-dm.png" alt="message icon">
                            </div>
                            <p class="likes bold">${posts[i].likes} likes</p>
                            <div class="comment-info">
                                <p class="commenter bold">${posts[i].username}</p>
                                <p class="comment">${posts[i].comment}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `
    }
    mainContainerEl.innerHTML = postsHTML;
}

renderPosts();