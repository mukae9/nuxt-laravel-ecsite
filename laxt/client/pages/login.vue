<template>
<div>
	<div>
		ログインフォームの実装
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
