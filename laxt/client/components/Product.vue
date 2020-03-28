<template>
		<div>
			<ul class="product-cards">
				<li>{{id}}</li>
				<li><img src="images/demo.jpg" style="width:100%;"></li>
				<li>書籍</li>
				<li>¥2500</li>
				<li>カートに追加する</li>
			</ul>
		</div>
</template>

<style lang="css" scoped>

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