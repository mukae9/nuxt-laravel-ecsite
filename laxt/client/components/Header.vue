<template>
		<header>
			<div class="flex">
				<div>
					<h1>LaxtShop</h1>
					<p>お届け先情報</p>
				</div>
				<nav style="flex:2">
					<ul>
						<li>
							<nuxt-link to="/product-List">全商品</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/link01">本</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/link02">DVD</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/link03">CD</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/link04">日用品</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/link04">ホビー</nuxt-link>
						</li>
					</ul>
				</nav>
				<nav>
					<ul>
						<li>
							<nuxt-link to="/cart">カート</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/login">ログイン</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/register">会員登録</nuxt-link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
</template>

<style lang="css" scoped>
header{
	color: #fefefe;
	padding: 16px 48px;
	background: linear-gradient(135deg, #222f3e,#003582);
}

h1{
	font-size: 2em;
	border-bottom: solid 2px #fd9803;
	border-radius: 1px;
}

header a {
	color: #fefefe;
	vertical-align: middle;
}
nav {
    color: #585858;
}
ul {
	display: flex;
}
li {
	list-style-type: none;
	margin-left: 15px;
}
a {
	color: #282828;
}
.flex{
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.nav{
	
}

</style>