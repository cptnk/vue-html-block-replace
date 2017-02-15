let app = new Vue({
    el: '#app',
    data: {
        blocks: [],
        block: null,
        currentBlock: -1,
        maxBlockCount: 0,
        mouseDeltaY: 0
    },
    mounted: function () {
        this.$nextTick(function () {
            window.addEventListener('mousewheel', this.handleScroll);
            window.addEventListener('DOMMouseScroll', this.handleScroll);
            this.blocks = document.getElementsByClassName('hidden-block');
            this.maxBlockCount = this.blocks.length;
            this.changeBlock('down');
        });
    },
    methods: {
        changeBlock: function(direction) {
            if (direction === 'down' && this.currentBlock + 1 < this.maxBlockCount) {
                this.currentBlock += 1;
            }
            if (direction === 'up' && this.currentBlock - 1 >= 0) {
                this.currentBlock -= 1;
            }
            if (this.maxBlockCount > 0) {
                this.block = this.blocks[this.currentBlock].innerHTML;
            }
        },
        handleScroll: function(e) {
            if (e.deltaY >= this.mouseDeltaY) {
                this.changeBlock('down');
            } else {
                this.changeBlock('up');
            }
        }
    }
});