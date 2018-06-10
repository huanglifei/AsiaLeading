//滚动到错误位置
function scrollToObject(obj) {
    $('html, body').stop();
    if (obj) {
        var topa = obj.offset().top - 160; //目标位置
        jQuery("html, body,window").animate({ scrollTop: topa + "px" }, { duration: 800, easing: "swing" });
    }

}

$('body').on('blur', 'input,select', function() {
    var _this = $(this);
    var parentobj = _this.parent('.form-row-box');
    if (!parentobj.hasClass('J-adress')) {
        if (_this.val() !== '' || _this.val().length > 0) {
            _this.parent('.form-row-box').removeClass('row-error');
        }
    }
})



// 检测两个值是否相等
function checkEquality(obj1, obj2, parentobj) {
    var itema = $.trim($(parentobj).find(obj1).val()).toLowerCase();
    var itemb = $.trim($(parentobj).find(obj2).val()).toLowerCase();
    if (itemb == '') {
        $(parentobj).find(obj2).parent('.form-row-box').addClass('row-error');
        $(parentobj).find(obj2).parent('.form-row-box').find('.checkTips').html('请输入您的确认密码！');

    } else if (itemb !== itema) {



        $(parentobj).find(obj2).parent('.form-row-box').addClass('row-error');
        $(parentobj).find(obj2).parent('.form-row-box').find('.checkTips').html('确认密码与密码不一致！');

    }
}

//检测手机号是否正确
function isPoneAvailable(obj, parentobj) {
    var obj = $(parentobj).find(obj);
    var str = obj.val();
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;

    if (str.length > 0) {
        if (!myreg.test(str)) {
            obj.parent('.form-row-box').addClass('row-error');
            obj.parent('.form-row-box').find('.checkTips').html('请输入正确的手机号码！');
        }
    }

}



// 检测邮箱格式是否正确
function isEmail(obj, parentobj) {
    var obj = $(parentobj).find(obj);
    var str = obj.val();
    var regEmail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if (str.length > 0) {
        if (!regEmail.test(str)) {
            obj.parent('.form-row-box').addClass('row-error');
            obj.parent('.form-row-box').find('.checkTips').html('您输入的邮箱格式不正确！');
        }
    }
}


//检测密码是否符合要求
function checkPassword(obj, parentobj) {
    var obj = $(parentobj).find(obj);
    var str = obj.val();
    var regpassword = /^([a-z0-9\.\@\!\#\$\%\^\&\*\(\)]){6,20}$/i;
    if (str.length > 0) {
        if (!regpassword.test(str)) {
            obj.parent('.form-row-box').addClass('row-error');
            obj.parent('.form-row-box').find('.checkTips').html('请输入6至20位字符作为您的登录密码！');
        }
    }
}


//检测省市区
function checkadreddSelect(parentobj) {
    var provinceId = $(parentobj).find('.provinceId').children('option:selected').val();
    var cityId = $(parentobj).find('.cityId').children('option:selected').val();
    var areaId = $(parentobj).find('.areaId').children('option:selected').val();

    if (provinceId < 0 || cityId < 0 || areaId < 0) {
        $(parentobj).find('.J-adress').addClass('row-error');
    }
}

// 检测必填项
function checkRequired(obj, parentobj) {
    // 判断input的类型
    var obj = $(parentobj).find(obj);
    var input_type = obj.attr('data-type');
    var _thisval = $.trim(obj.val());
    var parentmin = obj.parent('.form-row-box');


    //文本框类型

    if (input_type == 'text') {
        if (_thisval.length <= 0 || _thisval == '') {
            parentmin.addClass('row-error');
        }
    }


    if (input_type == 'select') {
        itemsVal = obj.children('option:selected').val(); //选中的值

        if (itemsVal == '' || itemsVal == null || itemsVal < 0) {
            parentmin.addClass('row-error');
        }

    }





}

$('body').on("change", 'select', function() {
    var obj = $(this);

    var parentobj = obj.parent('.form-row-box');

    if (!parentobj.hasClass('J-adress')) {
        itemsVal = parseInt(obj.children('option:selected').val()); //选中的值

        if (itemsVal >= 0) {
            parentobj.removeClass('row-error');

        } else if (itemsVal < 0) {

            parentobj.addClass('row-error');
        }

    } else {
        var provinceId = parentobj.find('.provinceId').children('option:selected').val();
        var cityId = parentobj.find('.cityId').children('option:selected').val();
        var areaId = parentobj.find('.areaId').children('option:selected').val();

        console.log('provinceId:' + provinceId + "cityId:" + cityId + "areaId:" + areaId);

        if (provinceId < 0 || cityId < 0 || areaId < 0) {
            parentobj.addClass('row-error');
        } else {
            parentobj.removeClass('row-error');
        }
    }



})