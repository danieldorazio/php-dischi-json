const { createApp } = Vue;

createApp({
    data() {
        return {
            dischiList: [],
            apiUrl: "server.php",
            selectedDisk: null,
            showDisk: false,
            
        }
    },
    created() {
        axios.get(this.apiUrl).then((resp) => {
            this.dischiList = resp.data
            console.log(this.dischiList);
        })
    },
    methods: {
        getSingleDisk(index) {
            axios.get(this.apiUrl, {
                params: {
                    id: index,
                },
            })
            .then((resp) => {
                this.selectedDisk = resp.data;
                this.showDisk = true;
                
            });
        },
        closeDialog() {
            this.showDisk = false;
            this.selectedDisk = null;
        }
      },
   
}).mount("#app");