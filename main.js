// JS 
console.log("main.js connected!");

// Vue Counter
const Data = {
    data() {
        return {
            counter: 0,
            date : new Date().toLocaleString()
        }
    },
    mounted() {
        setInterval( ()=> {
            this.counter++;
            // console.log(this.counter);
        },1000);
        
    }
}

Vue.createApp(Data).mount('#data')