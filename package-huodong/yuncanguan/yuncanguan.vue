<template>
  <Viewer :images="images"></Viewer>
</template>

<script>
import Viewer from '../../components/Viewer.vue';
export default {
  components: {
    Viewer: Viewer
  },
  data() {
    return {
      images: [
     
      ]
    }
  },
  onLoad() {
  	            /* 列表 */
  	            this.getList();
  	},
  	onPullDownRefresh() {
  	            /* 下拉的时候更新 */
  	            this.getList();
  	},
  methods: {
  		getList(){
  			uni.request({
  				url:'https://www.prxdong.top:8081/visit/page',
  				method:'POST',
  				header:{
  					'content-type':'application/json'
  				},
  				data:{
  					  pageNo: 1,
  					  pageSize:20
  					},
  				success:(res)=>{
  					console.log(res.data);
  					this.images =res.data.dataList;
  					
  				}
  			})
  			
  		},
},
}
</script>