import Vue from 'vue'

//日付を日本の形式に変換する処理
Vue.prototype.$dateToJaFormat = (dateTime) => {
 if (dateTime) {
  const date = new Date(dateTime)
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
 }
 return ''
};

//レビューの平均値を算出する処理
Vue.prototype.$reviewAverage = (stars)=>{
    if(!stars.length){
        return 0
    }
    const star = (stars.reduce((p, x) => p + x.star, 0)/stars.length).toFixed(1)
    return star
}

//レビューを星に変える処理
Vue.prototype.$reviewToStar= (star)=>{
    switch(true) {
    case star < 0.5 :
    return '☆☆☆☆☆'
    break;

    case 0.5 <= star && star < 1.5 :
    return '★☆☆☆☆'
    break;

    case 1.5 <= star && star < 2.5 :
    return '★★☆☆☆'
    break;

    case 2.5 <= star && star < 3.5 :
    return '★★★☆☆'
    break;

    case 3.5 <= star && star < 4.5 :
    return '★★★★☆'
    break;

    case 4.5 <= star :
    return '★★★★★'
    break;
    }
}