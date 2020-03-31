<template>
<div>
	<div class="form">
			<h2>会員登録</h2>
			<p class="link"><nuxt-link to="/login">登録済みの方はこちら</nuxt-link></p>
			<p>名前</p>{{$store.state.regist.user}}
			<input type="text" name="name" v-model="user.name">
			<p>メールアドレス</p>
			<input type="email" name="email" v-model="user.email">
			<p>パスワード</p>
			<input type="password" name="password" v-model="user.password">
			<p>パスワード（確認）</p>
			<input type="password" name="password_confilm">
			<button type="button" v-on:click="regist">会員登録</button>
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
				this.$store.dispatch('regist/createUserAction',this.user)
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
