//open menu on mobile
function toggleMenu() {
    document.body.classList.toggle('open');
}

//open search box
function toggleSearch() {
    document.getElementById('search-box').classList.toggle('open');
}

//get height of block on homepage
function getHeightBlock() {

    var mobileMode = 768;
    var gutSpace = 20;
    var bodyWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    var featuredBot = document.querySelector("#featured-bot .grid-mode");

    var hotCollection = document.querySelector("#hot-collection .grid-mode");

    if (bodyWidth < mobileMode && featuredBot != null && hotCollection != null) {
        var featuredBotHeight = document.querySelector("#featured-bot .item").clientHeight;
        var hotCollectionHeight = document.querySelector("#hot-collection .item").clientHeight;

        featuredBot.style.height = featuredBotHeight + gutSpace + "px";
        hotCollection.style.height = hotCollectionHeight + gutSpace + "px";
    }
}


window.onload = function() {
    document.getElementById("menuNavBtn").addEventListener('click', toggleMenu);

    getHeightBlock();

}

window.onresize = function () {
    getHeightBlock();
}

/*function removeClass() {
 document.getElementById('search-box').classList.remove('open');
 }
 window.onload = function() {
 document.getElementById('body').addEventListener('click', removeClass);
 }*/
