const app = getApp();
var firstTopY =0// 滑动开始y轴位置
var lastTopY =0// 滑动结束y轴位置
Page({

    /**
     * 页面的初始数据
     */
    data: {
        container_Height:800,
        combo_head_height:0,
        is_show:0,
        is_num:10
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let container_Height = `calc(100vh)`;
        let is_num = this.data.is_num;
        let combo_head_height = `calc((100vh - 700rpx)/${is_num} - 4rpx)`;
        console.log("combo_head_height")
        console.log(combo_head_height)
        this.setData({
            container_Height:container_Height,
            combo_head_height:combo_head_height
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },
    set_show(e){
       let is_show = e.currentTarget.dataset.type;
       this.setData({
        is_show
       })
    },
    moveStart: function(ent){
        firstTopY = ent.changedTouches[0].pageY;
	},
	moveEnd: function(ent){
        lastTopY = ent.changedTouches[0].pageY;
        let is_show = this.data.is_show;
		if(lastTopY > firstTopY){
            console.log('下滑');
            if(is_show<=0){
                return false
            }
            is_show--;
		}else if(lastTopY < firstTopY){
            console.log('上滑');
            if(is_show>=this.data.is_num-1){
                return false
            }
            is_show++
		}else{
            console.log('没动');
            return false
        }
        this.setData({
            is_show
        })
	},
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})