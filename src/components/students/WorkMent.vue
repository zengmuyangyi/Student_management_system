<template>
    <div class="workMent">
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="id" label="用户ID" align="center"></el-table-column>
            <el-table-column prop="userId" label="所属班级" align="center"></el-table-column>
            <el-table-column prop="title" label="作业名称" align="center"></el-table-column>
            <el-table-column prop="completed_text" label="完成情况" align="center"></el-table-column>
        </el-table>
        <Pageing :total="total" :url="url"/>
    </div>
</template>

<script>
    import Pageing from '../commom/Pageing.vue'
    export default {
        name:'workMent',
        components:{Pageing},
        data() {
            return {
                tableData:[],
                total:0,
                url:'/works'
            }
        },
    }
</script>

<style lang="less">
    .workMent {
        .el-pagination{
            text-align: left;
            margin-top: 20px;
        }
    }
</style>