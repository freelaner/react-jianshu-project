<template>
    <div>
        <div class="item_left">
           <img :src="item" v-for="(item,index) in phoneDetail.images" :key="index"
           v-if="index==nowIndex">
        </div>
        <div class="item_right">
            <h3>{{phoneDetail.name}}</h3>
            <hr>
            <p>{{phoneDetail.description}}</p>
            <p>
                <img :src="item" v-for="(item,index) in phoneDetail.images" :key="'img'+index"
                @click="nowIndex=index">
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name:'phoneitem',
        data() {
            return {
                phoneDetail: {},
                nowIndex:0
            }
        },
        created(){
            // console.log(this.$route)
            this.$http.get(`../../static/phones/${this.$route.params.myId}.json`)
            .then(res=>{
                var imgs=[];
                console.log('请求成功...',res);
                this.phoneDetail = res.data;
                
                this.phoneDetail.images.forEach(val=> {
                    imgs.push('./static/'+val)//转换图片路径
                     this.phoneDetail.images = imgs;//覆盖
                });
            })
            .catch(err=>{
                console.log('请求失败...',err);
            })
            
        }
    }
</script>

<style scoped>
.item_left{
    float:left;
    margin-right:50px
}
.item_right img{
   weight:70px;
   height:70px;
   cursor:pointer;
   padding:20px;
   /* border: 1px solid #ccc; */
}
::selection {
background:red; 
color:green;
}
</style>