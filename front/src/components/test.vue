<script>
    export default {
        data(){
            return{
                received_userID: '',
                single_user:{

                }
            }
        },

        methods:{
            receive_user_id(){
                this.received_userID = localStorage.getItem('userID')
            },

        },

        created(){
            this.receive_user_id();
        }
            
    }
    
</script>