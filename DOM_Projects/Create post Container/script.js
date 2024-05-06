let post1 = {
    id: 1,
    author: 'John',
    content: 'My first Post!',
    likes: 10,
    comments: ['Great post!', 'Nice photo!'],
    image: 'https://files.codingninjas.in/image2-28694.jpg'
};

const postsdiv = document.querySelector('#posts');

const newPsotdiv = document.createElement('div');
newPsotdiv.classList.add('post');
postsdiv.appendChild(newPsotdiv);

const heading3 = document.createElement('h3');
heading3.textContent = post1.author;
newPsotdiv.appendChild(heading3);

const images = document.createElement('img');
images.src = post1.image;
newPsotdiv.appendChild(images);

const para = document.createElement('p');
para.textContent = post1.content;
newPsotdiv.appendChild(para);

const likeButton = document.createElement('button');
likeButton.textContent = 'Like';
newPsotdiv.appendChild(likeButton);

const inputtag = document.createElement('input');
inputtag.type = 'text';
newPsotdiv.appendChild(inputtag);

const commentButton = document.createElement('button');
commentButton.textContent = 'Comment';
newPsotdiv.appendChild(commentButton);

const postFooter = document.createElement('div');
postFooter.classList.add('post-footer');
postFooter.textContent =  `Likes: ${post1.likes} Comments: ${post1.comments.length}`;
newPsotdiv.appendChild(postFooter);

const commentsContainer = document.createElement('div');
commentsContainer.classList.add('comments-container');
commentsContainer.style.display = "none";
post1.comments.forEach(comment => {
    const commentParagraph = document.createElement("p");
    commentParagraph.textContent = comment;
    commentsContainer.appendChild(commentParagraph);
});
newPsotdiv.appendChild(commentsContainer);

postFooter.addEventListener("click", function() {
    if (commentsContainer.style.display === "none") {
        commentsContainer.style.display = "block";
    }else{
        commentsContainer.style.display = "none";
    }
});