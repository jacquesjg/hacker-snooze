const baseURL = 'https://hacker-news.firebaseio.com/v0/';

// query select container to append
let content = document.querySelector('.content');

fetch(baseURL + 'topstories.json?print=pretty')
    .then((rawData) => rawData.json())
    .then((data) => {

        // now got all story ids, loop through story ids and get score title url by
        for (let i = 0; i < data.length - 400; i++) {

            fetch(baseURL + 'item/' + data[i] + '.json?print=pretty')
                .then((rawData2) => rawData2.json())
                .then((storyData) => {
                    console.log(storyData)

                    // create story inject into container
                    let div = document.createElement('div');
                    div.setAttribute('class', 'story');

                    let rank = document.createElement('span');
                    rank.setAttribute('class', 'rank');
                    rank.textContent = i + 1 + '  - ';

                    let idLink = document.createElement('a');
                    idLink.setAttribute('class', 'id--link');
                    idLink.setAttribute('href', storyData.url);
                    idLink.textContent = storyData.title

                    let perksContainer = document.createElement('div');
                    perksContainer.setAttribute('class', 'perks--container');


                    let score = document.createElement('span');
                    score.setAttribute('class', 'score');
                    score.textContent = storyData.score + ' points | ';

                    let author = document.createElement('span');
                    author.setAttribute('class', 'author');
                    author.textContent = 'By ' + storyData.by + ' | ';

                    let comments = document.createElement('span');
                    comments.setAttribute('class', 'comments');
                    const commentTest = storyData.kids
                    comments.textContent = commentTest.length + ' comments';


                    // add everything to story div

                    div.appendChild(rank);
                    div.appendChild(idLink);
                    div.appendChild(perksContainer);

                    perksContainer.appendChild(score);
                    perksContainer.appendChild(author);
                    perksContainer.appendChild(comments);

                    // add story div to content div
                    content.appendChild(div);
                })
        }
    })

// N Points  By Lollipop   N comments

// span classes: rank title aside--text score author comments 

/*   https://hacker-news.firebaseio.com/v0/item/28121929.json?print=pretty
*/

/*   data.score
data.title
data.url
data.by */

// data.kids returns array, need the length.

{/* <div class="story">
<span class="rank"></span>

<a class="id--link" href="link-to-story.com"> Title </a>

<div class="perks--container">
   <span class="score">N points | </span>
    <span class="author">By Lollipop | </span>
    <span class="comments">N Comments</span>
</div>



</div> */}