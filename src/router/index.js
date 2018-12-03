import Vue from 'vue'
import Router from 'vue-router';

Vue.use(Router)
import home from '../components/home.vue';
import aboutUs from '../components/aboutUs';
import caseShow from '../components/caseShow';
import contactUs from '../components/contactUs';
import toTop from '../components/toTop';
import footers from '../components/footers';
import headers from '../components/headers';
import jionUs from '../components/jionUs';
import solutionMarketing from '../components/solutionMarketing';
import solutionNewretail from '../components/solutionNewretail';
import solutionService from '../components/solutionService';
import solutionSoftware from '../components/solutionSoftware';
import toast from '../toast/toast.vue';
const routes=[
  {path:'/home',component:home},
  {path:'/aboutUs',component:aboutUs},
  {path:'/caseShow',component:caseShow},
  {path:'/contactUs',component:contactUs},
  {path:'/toTop',component:toTop},
  {path:'/footers',component:footers},
  {path:'/headers',component:headers},
  {path:'/jionUs',component:jionUs},
  {path:'/solutionMarketing',component:solutionMarketing},
  {path:'/solutionNewretail',component:solutionNewretail},
  {path:'/solutionService',component:solutionService}, 
  {path:'/solutionSoftware',component:solutionSoftware},
  {path:'/',redirect:'/home'},
  {path:'/toast',component:toast},

]

export default new Router({
  routes,
})
