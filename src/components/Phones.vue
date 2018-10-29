<template>
    <div>
        <ul>
            <li class="list_wrap" v-for="(item,index) in phonesList" :key="index">
                <router-link :to="'/phones/' + item.id">
                    <img :src="item.imageUrl" alt="">
                    <div class="desc">
                    <h3>{{item.name}}</h3>
                    <p>{{item.snippet}}</p>
                </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'phones',
        data() {
            return {
                phonesList: []
            }
        },
        created(){
            //资源放到assets下的数据请求方法
            // var obj = require('../assets/phones/phones.json');
            // console.log('created...',obj);
            // console.log(require('../assets/logo.png'))//转换图片路径

            this.$http.get('../../static/phones/phones.json')
            .then(res=>{
                // console.log("请求成功...",res);
                this.phonesList = res.data;
                console.log(this.phonesList)
                this.phonesList.forEach(val=>{
                    val.imageUrl = ("../static/"+ val.imageUrl);
                })
            })
            .catch(err=>{
                console.log("请求失败...",err)
            })
        }
    }
</script>

<style scoped>
.list_wrap{
    list-style: none;
    border: 1px solid #cccccc;
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;
}
.list_wrap img{
    width: 200px;
    height: 200px;
    float: left;
    padding-right: 20px;
}

h3{ 
  color: blue;
}
</style>