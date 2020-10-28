(function(root){
    function Index(len){
        this.index = 0;//开始时候的默认index
        this.len = len;
    }

    Index.prototype = {
        //切歌到前一首歌
        prev(){
            return this.get(-1)
        },
        //切歌到下一首歌
        next(){
            return this.get(+1)
        },
        //获取歌曲的索引值
        get(val){
            this.index = (this.index + val + this.len) % this.len;
            return this.index;
        }   
    }

    root.controlIndex = Index;


})(window.player || (window.player = {}))