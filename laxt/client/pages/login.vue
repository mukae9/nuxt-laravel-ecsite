<template>
<div>
	<div class="form">
			<h2>ログイン</h2>
			<p class="link"><nuxt-link to="/register">会員登録はこちら</nuxt-link></p>
			<p>メールアドレス</p>
			<input type="email" name="email" v-model="user.email">
			<p>パスワード</p>
			<input type="password" name="password" v-model="user.password">
			<button type="button" v-on:click="$store.dispatch('regist/createUserAction',user)">ログイン</button>
	</div>
</div>
</template>
<script>
	export default {
		data(){
			return {
				user:{
					name: 'ddd',
					email:'ddd',
					password:'ddd'
				}
			}
		},

		// app.$axios.get('/sanctum/csrf-cookie').then(response => {

		methods:{
			regist(){
				$store.commit()
			}
		}

	};
</script>

<style scoped>
.form{
	width: 60%;
	max-width: 380px;
	margin: 48px auto;
	color: #585858;
}

.link{
	text-align: center;
	padding: 16px;
	font-size: 0.9em;
}

.form h2 {
	text-align: center;
	padding: 8px;
	font-size: 1.4em;
	
}

.form p {
	margin: 0px;
}

input[type="text"],input[type="email"],input[type="password"]{
	width: 100%;
	margin-bottom: 24px;
	color: #585858;
}

button{
	display: block;
	width: 120px;
	margin: 42px auto;
}

button:hover{
	opacity: 0.8;
}
</style>
