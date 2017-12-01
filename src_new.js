var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue',
        userEnteredClass: '',
        effect: {
            highlight: true,
            shrink: false
        },
        isVisible: true,
        userClass: '',
        progressBar: {
            width: '0px',
            backgroundColor: 'red'
        }
    },
    methods: {
        startEffect: function () {
            var vm = this;

            setInterval(function () {
                vm.effect.highlight = !vm.effect.highlight;
                vm.effect.shrink = !vm.effect.shrink;
            }, 500)
        },
        startProgress: function () {
            var vm = this;
            var width = 0;

            setInterval(function () {
                width = width + 10;
                vm.progressBar.width = width + 'px';
            }, 500);
        }
    }
});