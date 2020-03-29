<template>
<div>
  	<div class="product-detail">
        <ul class="product-container">
            
            <li class="title"><h2>{{product.name}}</h2></li>
            <li><img :src="product.imgpath" style="width:100%;"></li>
            <li class="detail">{{product.detail}}</li>
            <li ><span class="star">★★★★★</span>(120)</li>
            <li><nuxt-link to="/link01">{{product.categories}}</nuxt-link></li>
            <li>2020/2/19発売</li>
            <li class="fee">¥{{product.fee.toLocaleString()}}</li>
            <li><span class="speed"><span class="round">●</span>速配対応</span>明日までにお届け</li>
            
        </ul>
        <div class="container">
            <div  class="container-box">
                <li class="tax">税込</li>
                <p class="fee">¥{{product.fee.toLocaleString()}}</p>
                <p><span class="speed"><span class="round">●</span>速配対応</span>明日までにお届け</p>
                <button><font-awesome-icon icon="cart-plus"  style="font-size: 20px; margin-right:4px;"/>カートに入れる</button>
            </div>
            <div class="review-post">
                <p class="review-post-title">この商品を評価する</p>
                <p>投稿者名</p>
                <input type="text" name="">
                <p>レート</p>
                <select name="star" id="">
                    <option value="1">★☆☆☆☆</option>
                    <option value="2">★★☆☆☆</option>
                    <option value="3">★★★☆☆</option>
                    <option value="4">★★★★☆</option>
                    <option value="5">★★★★★</option>
                </select>
                <p>投稿内容</p>
                <textarea type="text" name=""></textarea>
                <button>評価する</button>
            </div>
            <p class="caution">※不適切な表現がある投稿などについては投稿者の許可なく削除される場合があります。</p>
        </div>
	</div>
    <div class="divider"></div>
    <div class="review">
        <h2>評価を見る</h2>
        <span class="star">★★★★★</span>
        <section class="review-box">
            <div class="review-card">
            <ul class="review-info">
                <li><font-awesome-icon icon="user-alt"  style="font-size: 20px; margin-right:4px;"/>mukae</li>
                <li class="star">★★★★☆</li>
                <li>2020/2/2</li>
            </ul>
            <div class="comment">
                <p>あんまり面白くなかったけど努力だけは感じた。なんかいいんじゃないでしょうか。</p>
            </div>
            </div>
            <div class="review-card">
            <ul class="review-info">
                <li><font-awesome-icon icon="user-alt"  style="font-size: 20px; margin-right:4px;"/>mukae</li>
                <li class="star">★★★★☆</li>
                <li>2020/2/2</li>
            </ul>
            <div class="comment">
                <p>あんまり面白くなかったけど努力だけは感じた。なんかいいんじゃないでしょうか。</p>
            </div>
            </div>
        </section>
    </div>
    <div class="divider"></div>
    <div>
        <section class="similar">
            <h2>同じカテゴリの商品</h2>
        <div class="products-flex">
		<div v-for="product of categorise_products" :key="product.id">
			<nuxt-link v-bind:to="{name:'products-id',params:{id:product.id}}">
				<ul class="product-cards">
					<li class="title">{{product.name}}</li>
					<li><img :src="product.imgpath" style="width:100%;"></li>
					<li ><span class="star">★★★★★</span>(120)</li>
					<li><nuxt-link to="/link01">{{product.categories}}</nuxt-link></li>
					<li class="fee">¥{{product.fee.toLocaleString()}}</li>
					<li><span class="speed"><span class="round">●</span>速配対応</span>明日までにお届け</li>
				</ul>
			</nuxt-link>
		</div>
	</div>
        </section>
    </div>
</div>
</template>
<script>

	export default {
        scrollToTop: true,
        validate ({ params }) {
            // 数値に制限
            return /^\d+$/.test(params.id)
        },
        async asyncData({app,params}){
            console.log(params.id)
            const url = 'http://localhost/api/product/'+params.id
            const product = await app.$axios.$get(url)
            const categories_url = 'http://localhost/api/categories/'+product.categories
            const categorise_products = await app.$axios.$get(categories_url)
            return {product,categorise_products};
        },

  }
  
</script>

<style scoped>
.title h2{
	font-size: 1.4em;
    font-weight: bold;
}
.product-detail{
    display: flex;
    max-width: 1100px;
    margin: 0 auto;
}

.container{
    width: 30%;
	margin: 64px auto 0px;
}

.container-box{
    padding: 24px;
    height: 200px;
    border: 6px solid #ebebeb;
    border-radius: 8px;
}
.review-post{
    margin-top: 16px;
    padding: 24px;
    border: 6px solid #ebebeb;
    border-radius: 8px;

}

.checkout button{
    display: block;
    margin-top: 16px;
}

li {
	list-style-type: none;
	line-height: 1.8em;
}

.product-container{
	padding: 24px 8px;
	margin: 4px auto;
    width: 66%;
	max-width: 660px;
	font-size: 0.9em;
}

.product-container img{
	padding: 4px 0px;
}

.star{
	color:#f8b801
}

.round{
	color:#f8b801
}

.fee{
	color:#b22805;
	font-weight: bold;
	font-size: 1.4em;
}
.speed{
	color:#fefefe;
	background-color: #3491c1;
	padding: 4px;
	margin-right: 4px;
	font-weight: bold;
	border-radius: 4px;

}

.review{

    text-align: center;
}

.review h2{
    
    font-size: 1.2em;
    margin-top: 24px;
    font-weight: bold;
    color: #585858;
}
.similar{
    max-width: 1200px;
    margin:0 auto;
}
.similar h2 {
    text-align: center;
    font-size: 1.2em;
    margin-top: 24px;
    font-weight: bold;
    color: #585858;
}

.review-post p {
    margin: 0px;
}
.review-post-title{
    font-weight: bold;
    padding-bottom: 8px;
}
.review-box{
    margin:24px 48px;
    
}

.comment{
    width:70%;
    padding-left: 16px;
    text-align: left;
    display: block
}
.review-info{
    width:30%;
}

.review-card{
    display: flex;
    text-align: left;
    width: 50%;
    max-width: 660px;
    margin:0 auto;
    border-top:solid 2px #f1f1f1;
    padding: 24px;

}

.divider{
    width: 1200px;
    margin:24px auto;
    border-top:1px solid #e2e2e2;
}
.caution{
font-size:0.8em;
padding: 8px;
}

.products-flex{
  display: flex;
  flex-wrap: wrap;
  width: 94%;
  margin: 0 auto;
}

.product-cards{
	padding: 24px 8px;
	margin: 4px;
	margin-top:16px;
	width: 18vw;
	font-size: 0.9em;
}

.product-cards img{
	padding: 4px 0px;
}

a {
  outline: none;
  text-decoration: none;
  color: inherit;
}

.tax{
    margin: 0;
    font-size:0.8em;
}

.detail{
    text-align: center;
}
</style>



