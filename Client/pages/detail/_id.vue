<template>
<div>
    <div class="item-detail">
        <ul class="item-container">
            <li class="title"><h2>{{item.name}}</h2></li>
            <li><img :src="item.imgpath" style="width:100%;"></li>
            <li class="detail">{{item.detail}}</li>
            <li>
                <span class="star">
                    {{$reviewToStar($reviewAverage(item.reviews))}}
                </span>
                {{$reviewAverage(item.reviews)}}
            </li> 
            <li>{{item.release}}発売</li>
            <li class="fee">¥{{item.fee.toLocaleString()}}</li>
            <li v-if="item.express">
                <span class="speed">
                    <span class="round">
                        ●
                    </span>
                    速配対応
                </span>明日までにお届け
            </li>
            <li v-else>通常2~3日で配送</li>
        </ul>
        <div class="review-post-container">
            <div class="review-post">
                <p class="review-post-title">この商品を評価する</p>
                <form @submit.prevent="reviewPost">
                    <p>投稿者名</p>
                    <input type="text" v-model="review.name">
                    <p>レート</p>
                    <select v-model="review.star" name="star" id="">
                        <option value="1">★☆☆☆☆</option>
                        <option value="2">★★☆☆☆</option>
                        <option value="3">★★★☆☆</option>
                        <option value="4">★★★★☆</option>
                        <option value="5">★★★★★</option>
                    </select>
                    <p>投稿内容</p>
                    <textarea v-model="review.message" placeholder="評価内容をご記入ください"></textarea>
                    <button>評価する</button>
                </form>
            </div>
            <p class="caution">※不適切な表現がある投稿などについては投稿者の許可なく削除される場合があります。</p>
        </div>
    </div>
    <div class="divider"></div>
        <div class="review">
            <h2>評価を見る</h2>
            <span class="star">{{$reviewToStar($reviewAverage(item.reviews))}}</span> 
            <section class="review-box">
                <div v-if="item.reviews.length">
                    <div v-for="review of item.reviews" :key="review.id" class="review-card">
                        <ul class="review-info">
                            <li><font-awesome-icon icon="user-alt" class="font-awesome"/>{{review.name}}</li>
                            <li class="star">
                                {{$reviewToStar(review.star)}}
                            </li>
                            <li class="review-day">
                                {{$dateToJaFormat(review.created_at)}} 投稿
                            </li>
                        </ul>
                        <div class="comment">
                            <p>{{review.message}}</p>
                        </div>
                    </div>
                </div>
                <div v-else>評価はまだありません</div>
            </section>
        </div>
    </div>
</template>

<script>
	export default {
        data(){
            return {
                review:{
                    item_id:this.$route.params.id,
                    name:'',
                    star:5,
                    message:''
                },
            }
        },
        validate ({ params }) {
            // ルートパラメーターの値を数値に制限
            return /^\d+$/.test(params.id)
        },
        async asyncData({ app, params }) {
            const url = 'http://localhost.test/api/detail/'+params.id
            const item = await app.$axios.$get(url)
            return { item };
        },
        methods:{
        async reviewPost(){
            try {
                await this.$axios.$post('http://localhost.test/api/review',this.review)
                this.$toast.show('評価しました。レビュー審査後に反映されます。')
                this.review = {} //空にしないと投稿後も情報が残ってしまいます。
            } catch (err) {
                this.$toast.show('評価に失敗しました')
            }
        },
    }
    }
</script>

<style scoped>
.title h2{
	font-size: 1.4em;
    font-weight: bold;
}
.item-detail{
    display: flex;
    max-width: 1100px;
    margin: 0 auto;
}

.checkout button{
    display: block;
    margin-top: 16px;
}

li {
	list-style-type: none;
	line-height: 1.8em;
}

.item-container{
	padding: 24px 8px;
	margin: 4px auto;
    width: 66%;
	font-size: 0.9em;
}

.item-container img{
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

.review-post{
    margin-top: 16px;
    padding: 24px;
    border: 6px solid #ebebeb;
    border-radius: 8px;

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
.review-day{
    font-size: 0.9em;
    
}

.review-post-container{
    width:30%;
    margin-top: 72px;
    line-height:2rem;
}
.review-info{
    width:30%;
}

.comment{
    width:70%;
    padding-left: 16px;
    text-align: left;
    display: block
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