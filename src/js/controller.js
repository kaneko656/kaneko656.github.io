window.addEventListener("load", function() {
    $('.bxslider').removeClass('invisible')
    $('.bxslider').bxSlider({
        auto: true,
        slideMargin: '0px',
        easing: 'ease-out',
        speed: '750',
        pause: '10000',
        captions: true,
        preloadImages: 'visible',
        controls: false
    })

    $(function() {

        // スクロールのオフセット値
        var offsetY = -50
        // スクロールにかかる時間
        var time1 = 180
        var time2 = 200


        // ページ内リンクのみを取得
        $('a[href^="#"]').click(function() {
            // 移動先となる要素を取得
            var target = $(this.hash)
            if (!target.length) return
            // 移動先となる値
            var targetY = target.offset().top

            let y = $(window).scrollTop()

            time1 = Math.abs(targetY - y) / 7
            time2 = 70 + time1 * 0.3

            // スクロールアニメーション
            $('html,body').animate({
                opacity: 0.5,
                scrollTop: targetY + offsetY,
            }, {
                duration: time1,
                easing: 'swing',
                complete: function() {
                    $('html,body').animate({
                        opacity: 1.0,
                    }, {
                        duration: time2,
                        easing: 'swing',
                    })
                }
            })

            // ハッシュ書き換えとく
            window.history.pushState(null, null, this.hash)
            // デフォルトの処理はキャンセル
            return false;
        });
    });
})
