<template>
    <div>
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="[5, 10, 20, 50, 100]"
        :page-size="size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        :url="url">
        </el-pagination>
    </div>
</template>

<script>
    import { Loading } from "element-ui";
    import { getTableData } from "@/utils/table";
    export default {
        name:'Pageing',
        props:{
            "total": Number,
            "url": String
        },
        data() {
            return {
                page: 1,//当前页数
                size: 10,//每页显示条数
            }
        },
        created(){
            let loadingInstance = Loading.service({text:'玩命加载中...'});
            getTableData(this.$parent, '/works', {page:this.page, size:this.size}, ['completed'],loadingInstance);
        },
        methods: {
            endLoading(){
                this.loading = false;
            },
            handleSizeChange(val) {
                this.size = val;
                this.page = 1;
                let loadingInstance = Loading.service({text:'玩命加载中...'});
                getTableData(this.$parent, '/works', {page:this.page, size:val}, ['completed'],loadingInstance);
            },
            handleCurrentChange(val) {
                this.page = val;
                let loadingInstance = Loading.service({text:'玩命加载中...'});
                getTableData(this.$parent, '/works', {page:val, size:this.size}, ['completed'],loadingInstance);
            },
        },
    }
</script>

<style>

</style>