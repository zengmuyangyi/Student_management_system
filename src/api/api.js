// 项目中我们大多数时候会把对应的接口请求封装成api来调用
import service from "../service";
import qs from 'qs'

// 登录接口
export function login(data) {
    return service({
        method: 'POST',
        url: '/login',
        data
    })
}

// 学生列表查询接口
export function students(params) {
    return service({
        method: 'GET',
        url: '/students',
        params
    })
}

// 学生列表的删除接口
export function studentDel(id){
    return service({
        method: 'delete',
        url: `/students/${id}`
    })
}


// 新增和修改接口
export function info(type, data){
    data = qs.stringify(data)
    let obj = {method :type, url: '/info', data}
    return service(obj)
}

// 信息列表查询接口
export function getInfo(){
    return service({
        method: 'GET',
        url: '/info'
    })
}

// 信息列表删除接口
export function infoDel(id){
    return service({
        method: 'DELETE',
        url: `/info/${id}`
    })
}

// 数据概览的接口
export function dataView(){
    return service({
        method: 'GET',
        url: '/dataview'
    })
}

// 旅游地图接口
export function travel(){
    return service({
        method: 'GET',
        url: '/travel'
    })
}
