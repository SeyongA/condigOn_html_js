// alert("test")
$(() => {
    $('.navbar_toggleBtn').on("click", () =>{
        $('.navbar_menu').toggle("active");
    });

    $(window).resize(() =>{

        if(parseInt($('nav').css('width')) > 768){
            $('.navbar_menu').css('display', 'flex');
        }
    })
})


