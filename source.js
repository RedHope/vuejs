var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString(),
        welcomeMessage: 'Hello',
        link: 'http://google.com',
        finishedLink: '<a href="http://google.com>Google</a>"',
        x: 0,
        y: 0
    },
    methods: {
        sayHello: function () {
            return 'Hello World!'
        },
        updateCoordinates: function (event) {
            this.x = event.clientX;
            this.y = event.clientY;
        }
    }
});

var app7 = new Vue({
    el: '#exercise',
    data: {
        fullName: 'Sample Name',
        age: 10,
        imageLink: 'http://www.cs.cmu.edu/~chuck/lennapg/len_std.jpg'
    },
    methods: {
        mutatedAge: function () {
            return this.age * 3;
        }
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!',
        newModel: ''
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        },
        onInput: function () {
            console.log(this.newModel);
        }
    }
});

var app6 = new Vue({
    el: '#example',
    data: {
        message: 'Hello',
        firstName: '',
        lastName: ''
    },
    methods: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('')
        }
    },
    computed: {
        fullName: function () {
            return this.firstName + ' ' + this.lastName;
        }
    }
});