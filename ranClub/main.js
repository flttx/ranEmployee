import Vue from 'vue'
import App from './App'

import pageHead from './components/page-head.vue'
import pageFoot from './components/page-foot.vue'

Vue.config.productionTip = false;

Vue.prototype.$eventHandle = new Vue();


Vue.component("page-head", pageHead);
Vue.component("page-foot", pageFoot);

Vue.filter('moneyValue', function(val) {
	console.log(val);
    val = val.toString().replace(/\$|\,/g,'');
    if(isNaN(val)) {
      val = "0";  
    } 
    let sign = (val == (val = Math.abs(val)));
    val = Math.floor(val*100+0.50000000001);
    let cents = val%100;
    val = Math.floor(val/100).toString();
    if(cents<10) {
       cents = "0" + cents
    }
    for (var i = 0; i < Math.floor((val.length-(1+i))/3); i++) {
        val = val.substring(0,val.length-(4*i+3))+',' + val.substring(val.length-(4*i+3));
    }

    return (((sign)?'':'-') + val + '.' + cents);
})

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
