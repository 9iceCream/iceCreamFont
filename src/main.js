import vue from 'vue'
// import App from 'App.vue'
var temp = {
    template:"<h1>你好，明天！</h1>"
}

var vm = new vue({
    el: '#app',
    render: c => c(temp)
})