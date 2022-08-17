import { Message,MessageBox } from "element-ui";
// 获取表格的数据
export function getData(root, url, params){
    root.service.get(url, {params: params || {}})
    .then(res => {
        if (res.data.status === 200) {
            root.tableData = res.data.data
            root.total = res.data.toal
            root.tableData.forEach(item => {
                item.sex === '1' ? item.sex_text = '男' : item.sex_text = '女';
            })
        }
    })
    .catch(err => {
        throw err
    })
}

// 新增和修改方法的封装
import qs from 'qs'
export function changeInfo(root, method, url, form){
    let data = qs.stringify(form)
    root.service[method](url, data)
    .then(res => {
        if(res.data.status === 200) {
            Message({type: 'success', message: res.data.message});
            root.dialogFormVisible = false;
            root.$refs['form'].resetFields();
        }
    })
    .catch(err => {
        throw err
    })
}

// 删除方法封装
export function delData(root, url, id, callback){
    MessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        cancelButtonText: '取消',
        confirmButtonText: '确定',
        showCancelButton:true,
        type:'warning',
    }).then(() => {
        root.service.delete.then(res => {
            if (res.data.status === 200) {
                root.service.delete(`${url}/${id}`)
                .then(res => {
                    if (res.data.status === 200) {
                        callback(root, url)
                        Message({type: 'success', message: '删除成功!'});
                    }
                })
                .catch(err => {
                    throw err
                })
            }
        })
    }).catch(() => {
        Message({type: 'info', message: '已取消删除'});
    });
}

// 作业列表获取表格数据方法封装
export function getTableData(root, url, params, arr,loadingInstance){
    root.service.get(url, {params: params || {}})
    .then(res => {
        if (res.data.status === 200) {
            root.tableData = res.data.data
            root.total = res.data.total
            root.tableData.map(item => {
                arr.map(aitem => {
                    item[aitem] ? item[aitem + '_text'] = '是' : item[aitem + '_text'] = '否'
                })
            })
            root.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
                loadingInstance.close();
              });
        }
    })
    .catch(err => {
        throw err
    })
}