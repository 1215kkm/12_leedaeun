$(document).ready(function(){

    $('header nav li').click(function(){
        let liIndex = $(this).index();

        console.log(liIndex)
        let secTop = $('#section_box > section').eq(liIndex).offset().top
        $('html,body').animate({scrollTop:secTop})
    });


    let sec3Top = $('#section3').offset().top;
    let sec3H = $('#section3').height();

    $(window).scroll(function(){
        let scrT = $(window).scrollTop();
        let winH = $(window).height();
        
        if(scrT >= 700 && scrT < 1200){
            $('.more_view').css({position:'fixed', top:0, right:'100px'});
            $('.more_view').addClass('on');
        } else if (scrT >= 1200) {
            $('.more_view').css({position:'absolute', top:'500px', right:'100px'})
            $('.more_view').addClass('on');
        } else {
            $('.more_view').css({position:'', top:'', right:''})
            $('.more_view').removeClass('on');
        }


        if(scrT >= sec3Top && scrT < sec3Top+sec3H-winH){
            $('#section3 h2.title').css({position:'fixed', top:'100px', right:'-92px'})
        } else if (scrT >= sec3Top+sec3H-winH) {
            $('#section3 h2.title').css({position:'absolute', top:sec3Top+sec3H-winH, right:'-92px'})
        } else {
            $('#section3 h2.title').css({position:'', top:'', right:''})
        }

        
    })



    $('.design_link').click(function(){
        $('.design_text').slideToggle();
        $('.sns_box').slideUp();
        return false
    })
    $('.design_text').click(function(){
        $('.design_text').slideToggle();
        return false
    });



    $('.btn_sns').click(function(){
        $('.sns_box').slideToggle();
        $('.design_text').slideUp();
        return false
    });
    /* $('.sns_box').click(function(){
        $('.sns_box').slideToggle();
        return false
    }); */



    $('.btn_lesson').click(function(){
        $('.lesson_box').slideToggle();
        $('.design_text').slideUp();
        $('.sns_box').slideUp();
        return false
    });
    // $('.lesson_box').click(function(){
    //     $('.lesson_box').slideToggle();
    //     return false
    // });


    $('.lesson_box').click(function(e) {   
        console.log(e)
        if($(e.target).hasClass("lesson_box")) {
            $('.lesson_box').slideToggle();
        }
    });    
    $('.sns_box').click(function(e) {   
        if($(e.target).hasClass("sns_box")) {
            $('.sns_box').slideToggle();
        }
        if($(e.target).hasClass("tt")) {
            $('.sns_box').slideToggle();
        }
    });    


    
    let pictureSlide 
    let picGo
    /* 열기 */
    $('.more_view').click(function(e) { 
        clearTimeout(pictureSlide);
        clearInterval(picGo);
        $('.picture_box').css({display:'flex'});



        pictureSlide = setTimeout(function(){
            $('.picture_box h2').fadeOut();
            
            let textValue = $('.picture li');
            for (let i = 0; i < textValue.length; i++) {
                $('.picture li').eq(i).css({opacity:'1', transitionDelay:(i*4.2)+'s'});
            }
            let picH = $('.picture').height();
            $('.picture').css({marginTop:-picH});
        },3000)

        /* 배경음 */
        // $('body').prepend('<div id="youtube_sound"><iframe src="https://www.youtube.com/embed/43kurAlWJFs?autoplay=1" allow="autoplay;"></iframe></div>')
        $('body').prepend('<div id="youtube_sound"><audio src="music/lee.mp3" autoplay></audio></div>')
        
        // let km = 0
        // picGo = setInterval(function(){
        //     km = km - 400
        //     $('.picture').animate({marginTop:km}, 4000, 'linear')
        //     console.log($('.picture').css('marginTop'))
            
        // },0);
        return false;
    });   

    /* 닫기버튼 */
    $('.picture_box').click(function(e) {
        if ($(e.target).hasClass("picture_box")) {
            $('.picture_box h2').show();
            $('.picture_box').css({ display: 'none' });
            $('.picture').css({ marginTop: 0 });
            $('.picture li').css({ opacity: '0' });
            clearTimeout(pictureSlide);
            clearInterval(picGo);

            /* 배경음 */
            $('#youtube_sound').remove();
        }
    });




    


});