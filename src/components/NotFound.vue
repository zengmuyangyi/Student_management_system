<template>
    <div class="notfound">
        <div class="wrapper">
            <div class="big">页面不见了！</div>
            <div>首页瞧瞧，点击<router-link to="/">这里</router-link>进入首页</div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'NotFound'
    }
</script>

<style lang="less">
    .notfound {
        height: 100%;
        background-image: url('../assets/stars404.webp');
        background-position: center;
        background-repeat: repeat;
        background-size: contain;
        .wrapper{
            position: absolute;
            top:60%;
            right: 2%;
            color: #fff;
            width: 635px;
            font-size: 19px;
            line-height: 29px;
            padding: 20px;
            font-family: 'Source Sans Pro', sans-serif;
            .big{
                font-size: 74px;
                font-weight: 700;
                line-height: 68px;
                margin-bottom: 48px;
            }
            a{
                color: #ffcc00;
                text-decoration: none;
                font-weight: 700;
                cursor: pointer;
            }
        }
    }
</style>