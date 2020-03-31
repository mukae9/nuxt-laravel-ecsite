import Vue from 'vue'

Vue.prototype.dateTimeToJaDate = (dateTimeString) => {
 if (dateTimeString) {
  const date = new Date(dateTimeString)
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
 }
 return ''
};

Vue.prototype.reviewStar = (stars)=>{
    if(stars.length === 0){
        return 0
    }
    const star = (stars.reduce((p, x) => p + x.star, 0)/stars.length).toFixed(1)
    return star
}

Vue.prototype.toStar= (star)=>{
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