<template>
    <div id="home">
        <el-container>
            <el-header>
                <el-row class="row-right">
                    <el-button type="primary" plain @click="loginShow">登录</el-button>
                    <el-button type="primary" plain @click="registerShow">注册</el-button>
                </el-row>
            </el-header>
            <el-main>
                <el-carousel :interval="4000" type="card" height="200px">
                    <el-carousel-item v-for="item in 6" :key="item">
                        <h3 class="medium">{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
                <el-divider><i class="el-icon-loading"></i></el-divider>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Home",
        methods:{
            loginShow:function() {
                console.log("登录")
            },
            registerShow:function() {
                console.log("注册")
            }
        }
    }
</script>

<style>
    .el-header {
        background-color: #909399;
        line-height: 60px;
    }
    .row-right {
        float:right
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }
</style>