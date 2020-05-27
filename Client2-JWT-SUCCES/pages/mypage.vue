     <template>
         <div>
             <ul>
    <li class="mr-4">
        <a href="#" class="text-gray-800 font-medium">
          {{this.$auth.user.name}}  {{secrets.data}}
        </a>
      </li>
      <li>
          <button @click="logout">ログアウト</button>
      </li>
      </ul>
         </div>

     </template> 

<script>
    export default {
        data () {
            return {
            loggedIn:'',
            secret:'',
            form: {
                email: '',
                password: ''
            }
            }
        },
        async asyncData({app}){
            const secrets = await app.$axios.get('/secret')
            return {secrets}
        },

    methods: {
        async  logout () {
        try {
        await this.$auth.logout()
        } catch (e) {
            console.log(e)
        }
        }
    }
    }
</script>