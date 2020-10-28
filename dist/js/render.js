;(function(root){
    function renderImg(src){
        root.blurImg(src); //给body添加背景图片
        var img = document.querySelector('.songImg img');
        img.src = src;
    }

    function renderInfo(data){
        var songInfoChildren = document.querySelector('.songInfo').children;
        songInfoChildren[0].innerHTML = data.name;
        songInfoChildren[1].innerHTML = data.singer;
        songInfoChildren[2].innerHTML = data.album;
    }

    function renderIsLike(isLike){
        var like = document.querySelectorAll('.control li');
        like[0].className = isLike ? "liking" : '' ;
    }

    root.render = function(data){
        renderImg(data.image);
        renderInfo(data);
        renderIsLike(data.isLike)
    }

})(window.player || (window.player = {}))