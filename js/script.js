const { createApp} = Vue;

createApp ({
    data() {
        return {
            dischiList: [],
            apiUrl: "server.php",
        }
    },
    created() {
        axios.get(this.apiUrl).then((resp) => {
            this.dischiList = resp.data
            console.log(this.dischiList);
        })
    },
   
}).mount("#app");