<template>
    <div>
        <h2>App.vue</h2>
        
       <router-view></router-view>

       <router-link to="/home">首页</router-link>
       <router-link to="/about">关于</router-link>
    </div>
</template>

<script>
export default {
    name:'app',
    data(){
        return {
            title:'1906A优秀的团队',
            arr:[
                {id:1001,name:'alice'},
                {id:1002,name:'jack'},
                {id:1003,name:'haimeiei'},
                {id:1004,name:'hello'},
            ]
        }
    }
}
</script>