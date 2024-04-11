const feed = document.getElementById('page-feed')

const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

function render() {
  feed.innerHTML = '';

  posts.forEach((post, index) => {
    feed.innerHTML += `
<section class="user-info">
            <img class="user-info__img" src="${post.avatar}" alt="Avatar profile picture">
            <div>
                <p class="avatar-name"><span class="bold-text">${post.name}</span></p>
                <p class="avatar-location">${post.location}</p>
            </div>
        </section>
        <section>
            <img data-index="${index}" class="feed-post" src="${post.post}" alt="Instagram post">
        </section>
        <section class="interactions">
            <div id="icon-group" class="icon-group">
                <img data-index="${index}" class="likeImg" src="images/icon-heart.png" alt="like button"> 
                <img src="images/icon-comment.png" alt="comment button">
                <img src="images/icon-dm.png" alt="share button">
            </div>
            <p class="bold-text">${post.likes} likes</p>
            <p><span class="bold-text">${post.username}</span> ${post.comment}</p>
        </section>
`
  });

  likeBtnListener()
}

function likeBtnListener() {

  const likeBtns = document.getElementsByClassName('likeImg');
  const feedPosts = document.getElementsByClassName('feed-post');

  Array.from(likeBtns).forEach(likeBtn => {
    likeBtn.addEventListener('click', (event) => {
      const index = event.target.dataset.index;
      posts[index].likes++;
      render();
    });
  });

  Array.from(feedPosts).forEach(feedPost => {
    feedPost.addEventListener('dblclick', (event) => {
      const index = event.target.dataset.index;
      posts[index].likes++;
      render();
    });
  });
}

render();