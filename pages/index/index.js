
Page({


    onShareAppMessage() {
        return {
            title: 'swiper',
            path: 'page/component/pages/swiper/swiper'
        }
    },

    data: {
        background: ['demo-text-1', 'demo-text-2', 'demo-text-3','demo-text-4'],
        background_ground:['../../images/2.jpg','../../images/1.jpg','../../images/3.jpg','../../images/4.jpg'],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 2000,
        duration: 1000
    },

    changeIndicatorDots() {
        this.setData({
            indicatorDots: !this.data.indicatorDots
        })
    },

    changeAutoplay() {
        this.setData({
            autoplay: !this.data.autoplay
        })
    },

    intervalChange(e) {
        this.setData({
            interval: e.detail.value
        })
    },

    durationChange(e) {
        this.setData({
            duration: e.detail.value
        })
    }
})

