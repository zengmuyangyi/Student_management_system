<template>
    <div class="trave-map">
        <div id="main"></div>
    </div>
</template>

<script>
    import China from '@/assets/china.json'
    import { travel } from "@/api/api";
    export default {
        name:'TraveMap',
        data() {
            return {
                
            }
        },
        created() {
            travel().then(res => {
                if (res.data.status === 200) {
                    let {points, linesData} = res.data.data
                    this.draw(points, linesData)
                }
            }).catch(err => {
                throw err
            })
        },
        methods: {
            draw(points, linesData){
                let myChart = this.$echarts.init(document.getElementById('main'))
                this.$echarts.registerMap('china', China)//注册可用地图，必须包括geo组件或者map图标类型的时候才可以使用
                let option = {
                    backgroundColor: 'rgb(121, 145, 209)',
                    geo: {
                        map: 'china',
                        aspectScale: 0.75,//地图长宽比
                        zoom: 1.1,
                        itemStyle:{
                            normal: {
                                areaColor: {
                                    type: 'radial',
                                    x: 0.5,
                                    y: 0.5,
                                    z: 0.8,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: '#09132c'//0%处的颜色
                                        },
                                        {
                                            offset: 1,
                                            color: '#274d68'//100%处的颜色
                                        }
                                    ],
                                    globalCoord: true
                                },
                                shadowColor: 'rgb(58, 115, 192)',
                                shadowOffsetX: 10,
                                shadowOffsetY: 11,
                            },
                        },
                        regions: [{
                            name: '南海诸岛',
                            itemStyle:{
                                opacity: 0.5
                            }
                        }]
                    },
                    series: [
                        {//配置地图相关参数，绘制地图，这个对象是关于地图图表的相关设置
                            type: 'map',
                            label:{
                                normal:{
                                    show:true,
                                    textStyle:{
                                        color: '#1de9b6'
                                    }
                                },
                                emphasis: {
                                    textStyle: {
                                        color: 'rgb(183, 185, 14)'
                                    }
                                }
                            },
                            zoom: 1.1,
                            map: 'china',
                            itemStyle:{
                                normal: {
                                    backgroundColor: 'rgb(174, 135, 248)',
                                    borderWidth: 1,
                                    areaColor: {
                                        type: 'radial',
                                        x: 0.5,
                                        y: 0.5,
                                        z: 0.8,
                                        colorStops: [
                                            {
                                                offset: 0,
                                                color: 'rgb(31, 54, 150)'//0%处的颜色
                                            },
                                            {
                                                offset: 1,
                                                color: 'rgb(89, 128, 142)'//100%处的颜色
                                            }
                                        ],
                                        globalCoord: true
                                    }
                                },
                                emphasis: {
                                    areaColor: 'rgb(46, 229, 206)',
                                    borderWidth: 0.1
                                }
                            }
                        },
                        // 关于地图中散点图的配置
                        {
                            type: 'effectScatter',//设置散点图
                            coordinateSystem: 'geo',//坐标轴选择
                            showEffectOn: 'render',//何时显示特效
                            symbilSize: 10,//散点大小
                            zlevel: 1,
                            data: points,
                            rippleEffect: {//涟漪特效相关配置
                                period: 15,
                                scale: 4,
                                brushType: 'fill'
                            }
                        },
                        // 关于地图线路动画效果设置
                        {
                            type: 'lines',
                            zlevel: 2,
                            effect: {
                                show: true,
                                period: 4,
                                symbol: 'arrow',
                                symbolSize: 7,
                                trailLength: 0.4
                            },
                            lineStyle: {
                                normal: {
                                    color: '#1de9b6',
                                    width: 1,
                                    opacity: 0.1,
                                    curveness: 0.4
                                }
                            },
                            data:linesData,
                        }
                    ]
                }
                myChart.setOption(option)
            }
        },
    }
</script>

<style lang="less">
    .trave-map{
        width: 100%;
        #main{
            width: 100%;
            height: 600px;
        }
    }
</style>