<template>
<div>
	<div class="form">
			<p>名前</p>
			<input type="text" name="name">
			<p>メールアドレス</p>
			<input type="email" name="email">
			<p>パスワード</p>
			<input type="password" name="password">
			<p>パスワード（確認）</p>
			<input type="password" name="password_confilm">
			<button type="button" @click="login">会員登録</button>
	</div>
</div>
</template>
<script>
	export default {
      async asyncData({app}){
        const products = await app.$axios.$get('http://localhost/api/product-all')
        return {products};
    },
    
  };
  
</script>

<style>
.products-flex{
  display: flex;
  flex-wrap: wrap;
  width: 96%;
  margin: 0 auto;
}

li {
	list-style-type: none;
}

.product-cards{
	padding: 24px 8px;
	margin: 4px;
	margin-top:16px;
	width: 18vw;
	font-size: 0.9em;
	border-top: 2px #ccc solid;
	border-bottom: 2px #ccc solid;
}

.product-cards img{
	padding: 4px 0px;
}
</style>
