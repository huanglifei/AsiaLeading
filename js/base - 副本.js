/*****20180510star****/



function bindburl() {

    $('body').on('blur', 'input,select', function(event) {
        var parentobj = $(this).parent('.box-con');
        var datatype = $(this).attr('data-type');

        if (datatype == 'select') {
            parentobj = $(this).parents('.box-con');
        }
        if ($(this).val() !== '' || $(this).val().length > 0) {
            parentobj.children('.box-con-msg').css('display', 'none');
        }
    });
}

// 身份证认证 正则
var rega = /^[A-Za-z]{1}[0-9]{6}$/;
var rega = new RegExp(rega);
var regb = /^[0-9Aa]{1}$/;
var regb = new RegExp(regb);


//香港手机号验证  以（9）或者（6）开头的8位数字
var regphone = /^[9|6][0-9]{7}$/;
var regphone = new RegExp(regphone);


//只能输入八位字符
function setinputvalNum(obj, num) {
    $('body').on('input propertychange', obj, function() {
        var valstr = $(obj).val();
        if (valstr.length > num) {

            valstr=valstr.substring(0,num);
            $(obj).val(valstr);
        }

    });
}




// 香港身份证号码检测---实时
function checkallIdcarnum() {


    $('body').on('blur', '.J-Idcar-first', function() {


        var _this = $(this);
        var _thisval = $(this).val();
        var _secondval = _this.parents('.box-con').find('.J-Idcar-last').val();
        if (!rega.test(_thisval) && _thisval !== '') {
            _this.addClass('required-erro');
            _this.parents('.box-con').find('.box-con-msg').slideDown('1000');
            _this.parents('.box-con').find('.box-con-msg').html('請輸入正確的身份證號');
        } else if (!regb.test(_secondval)) {
            _this.parents('.box-con').find('.J-Idcar-last').add('required-erro');
            _this.parents('.box-con').find('.box-con-msg').html('請輸入正確的身份證號');
        } else if (rega.test(_thisval) && regb.test(_secondval)) {
            _this.removeClass('required-erro');
            _this.parents('.box-con').find('.J-Idcar-last').removeClass('required-erro');
        }
    })


    $('body').on('blur', '.J-Idcar-last', function() {

        var _this = $(this);
        var _thisval = $(this).val();
        var _firstval = _this.parents('.box-con').find('.J-Idcar-first').val();
        if (!regb.test(_thisval) && _thisval !== '') {
            _this.addClass('required-erro');
            _this.parents('.box-con').find('.box-con-msg').slideDown('1000');
            _this.parents('.box-con').find('.box-con-msg').html('請輸入正確的身份證號');

        } else if (!rega.test(_firstval)) {
            _this.parents('.box-con').find('.J-Idcar-first').add('required-erro');
            _this.parents('.box-con').find('.box-con-msg').html('請輸入正確的身份證號');

        } else if (rega.test(_thisval) && regb.test(_firstval)) {
            _this.removeClass('required-erro');
            _this.parents('.box-con').find('.J-Idcar-first').removeClass('required-erro');
        }
    })





}








//判断邮箱格式是否正确
function checkEmail(str) {
    var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    return reg.test(str);
}


// 检测两个值是否相等
function checkEquality(obj1, obj2, parentobj) {
    var itema = $.trim($(parentobj).find(obj1).val()).toLowerCase();
    var itemb = $.trim($(parentobj).find(obj2).val()).toLowerCase();

    if (itemb.length <= 0 || itemb == '') {
        $(obj2).parent('.box-con').find('.box-con-msg').slideDown('1000');
        $(obj2).addClass('required-erro');
    } else if (itema !== itemb) {
        $(obj2).parent('.box-con').find('.box-con-msg').slideDown('1000');
        $(obj2).parent('.box-con').find('.box-con-msg').html('确认邮箱与邮箱不一致');
        $(obj2).addClass('required-erro');
    } else {
        $(obj2).removeClass('required-erro');
    }
}





//滚动到错误位置
function scrollToObject(obj) {
    $('html, body').stop();

    if (obj) {
        var topa = obj.offset().top - 160; //目标位置
        jQuery("html, body,window").animate({ scrollTop: topa + "px" }, { duration: 800, easing: "swing" });
    }

}


//检测必填项
function checkRrequired(obj, parentobj) {



    var items = $(parentobj).find(obj);
    var input_type = items.attr('data-type');
    var itemsVal = '';

    if (input_type == 'text') {
        itemsVal = items.val();
        if (itemsVal == '' || itemsVal.length == 0) {
            var parentitem = items.parent('.box-con');
            if (!parentitem) {
                items.parents('.box-con').next('.box-con-msg').slideDown('1000');
            }
            parentitem.find('.box-con-msg').slideDown('1000');

            items.addClass('required-erro');


        } else {
            items.removeClass('required-erro');
        }
    }

    if (input_type == 'select') {
        itemsVal = items.children('option:selected').val(); //选中的值
        if (itemsVal == '' || itemsVal == null) {
            var parentitem = items.parents('.box-con');
            parentitem.find('.box-con-msg').slideDown('1000');
            if (!items.hasClass('required-erro')) {
                items.addClass('required-erro');
            }
        } else {
            items.removeClass('required-erro');
        }
    }


    if (input_type == 'email') {
        itemsVal = items.val();
        var parentitem = items.parent('.box-con');
        if (itemsVal == '' || itemsVal.length <= 0) {

            parentitem.find('.box-con-msg').slideDown('1000');
            items.addClass('required-erro');
        } else if (itemsVal.length > 0) {

            var flag = checkEmail(itemsVal);


            if (!flag) {
                parentitem.find('.box-con-msg').slideDown('1000');
                parentitem.find('.box-con-msg').html('你输入的邮箱格式不正确');
                items.addClass('required-erro');

            } else {
                items.removeClass('required-erro');
            }
        }
    }

    if (input_type == 'radio') {
        var this_name = items.attr('name');
        itemsVal = $('input:radio[name="' + this_name + '"]:checked').val();
        var parentitem = items.parents('.box-con');
        if (itemsVal == null) {


            parentitem.find('.box-con-msg').slideDown('1000');



            if (!parentitem.hasClass('required-erro')) {
                parentitem.addClass('required-erro');
            }

        } else if (itemsVal.length > 0) {

            parentitem.removeClass('required-erro');


        }
    }

    if (items.hasClass('J-Idcar-first')) {
        var _thisval = items.val();
        var _secondval = items.parents('.box-con').find('.J-Idcar-last').val();
        if (!rega.test(_thisval) && _thisval !== '') {
            items.addClass('required-erro');
            items.parents('.box-con').find('.box-con-msg').slideDown('1000');
            items.parents('.box-con').find('.box-con-msg').html('请输入正确的身份证号');
        } else if (!regb.test(_secondval)) {
            items.parents('.box-con').find('.J-Idcar-last').add('required-erro');
        } else if (rega.test(_thisval) && regb.test(_secondval)) {
            items.removeClass('required-erro');
            items.parents('.box-con').find('.J-Idcar-last').removeClass('required-erro');
        }
    }



    if (items.hasClass('J-Idcar-last')) {
        var _thisval = items.val();
        var _secondval = items.parents('.box-con').find('.J-Idcar-first').val();
        if (!regb.test(_thisval) && _thisval !== '') {
            items.addClass('required-erro');
            items.parents('.box-con').find('.box-con-msg').slideDown('1000');
            items.parents('.box-con').find('.box-con-msg').html('请输入正确的身份证号');
        } else if (!regb.test(_secondval)) {
            items.parents('.box-con').find('.J-Idcar-last').add('required-erro');
        } else if (rega.test(_thisval) && regb.test(_secondval)) {
            items.removeClass('required-erro');
            items.parents('.box-con').find('.J-Idcar-first').removeClass('required-erro');
        }
    }


    if (items.hasClass('J-hk-phone')) {
        var _thisval = items.val();
        if (!regphone.test(_thisval)) {
            items.addClass('required-erro');
            items.parent('.box-con').find('.box-con-msg').slideDown('1000');
        } else {
            items.removeClass('required-erro');
        }
    }




}



/*****20180510stop****/
// 身份证检测

bindburl();

$(function() {


    $("[data-toggle='popover']").popover({
        html: true
    });

    $('body').on('change', 'input[type="radio"]', function() {
        var obj = $(this);
        obj.parents('.box-con').children('.box-con-msg').css('display', 'none');
    });




    $("select,input").on("change", function() {
        var obj = $(this);
        var boxcon = obj.parents(".box-con").find(".box-con-msg");
        boxcon.hide();
    })


    setinputvalNum('.J-hk-phone', 8);




    //香港手机号验证
    $('body').on('blur', '.J-hk-phone', function() {
        var _this = $(this);
        var _thisval = $(this).val();
        if (!regphone.test(_thisval)) {
            _this.addClass('required-erro');
            _this.parent('.box-con').find('.box-con-msg').slideDown('1000');
            _this.parent('.box-con').find('.box-con-msg').html('請輸入以9或者6開頭的8位數香港手機號碼');
        } else {
            _this.removeClass('required-erro');
        }

    });


    checkallIdcarnum();




});