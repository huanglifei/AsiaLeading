<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>观众注册-亚洲智能集成及智能制造解决方案展</title>
    <link rel="stylesheet" type="text/css" href="css/base.css">
</head>

<body class="bg">
    <div class="regfrom">
        <div class="reg-top">
            <a href="#" target="_blank">
				<img src="images/top-logo.jpg">
			</a>
        </div>
        <div class="reg-conrent apply-for-box" id="regform">
            <div class="step-box ">
                <div class="stepitem current"><span class="num">1.</span><span>注册与个人资料</span></div>
                <div class="stepitem  register-top-r"><span class="num">2.</span><span>问卷调查</span></div>
                <div class="stepitem "><span class="num">3.</span><span>预登记完成</span></div>
            </div>
            <div class="formbox">
                <div class="title-row">
                    <span class="formbox-title">观众注册信息</span>
                    <span class="fwb navcureent">标记*为必填项</span>
                    <a href="#" class="fr navcureent">已是观众，返回登录 <img src="images/fanhui.png"></a>
                </div>
                <ul class="form-ul">
                    <li class="form-row clearfix">
                        <p class="form-name fl">我是<span class="fwb navcureent pl10">*</span>：</p>
                        <div class="form-row-box fl">
                            <ul>
                                <li class="checkbox-box sex-box fl">
                                    <label>
                                        <input class="Spectator_media" value="1" checked="checked" type="radio" name="checkUserType">观众</label>
                                </li>
                                <li class="checkbox-box sex-box fl">
                                    <label>
                                        <input class="Spectator_media" value="2" type="radio" name="checkUserType">媒体</label>
                                </li>
                            </ul>
                            <span class="checkTips"></span>
                        </div>
                    </li>
                    <li class="form-row clearfix">
                        <p class="form-name fl">邮箱<span class="fwb navcureent pl10">*</span>：</p>
                        <div class="form-row-box fl">
                            <input type="text" data-type="text" name="useremail" id="txtEmai" placeholder="请输入电子邮箱" class="form-input required" >
                            <span class="checkTips">请输入您的常用邮箱！</span>
                        </div>
                    </li>
                    <li class="form-row clearfix">
                        <p class="form-name fl">设置登录密码<span class="fwb navcureent pl10">*</span>：</p>
                        <div class="form-row-box fl">
                            <input type="password" data-type="text" id="password" name="userpassword" placeholder="请输入6至20个字符作为您的登录密码" class="form-input required"><span class="checkTips">请输入您的登录密码！</span>
                        </div>
                    </li>
                    <li class="form-row clearfix">
                        <p class="form-name fl">确认登录密码<span class="fwb navcureent pl10">*</span>：</p>
                        <div class="form-row-box fl">
                            <input type="password" id="confirm-password" data-type="text" placeholder="请输入您的确认密码" class="form-input required">
                            <span class="checkTips">请输入您的确认密码！</span>
                        </div>
                    </li>
                </ul>
            </div>
            <hr class="hr-style" style="height: 1px" />
            <div class="formbox">
                <div class="title-row">
                    <span class="formbox-title">个人信息</span>
                    <span class="fwb navcureent">标记*为必填项</span>
                </div>
                <ul class="form-ul">
                    <li class="form-row clearfix">
                        <p class="form-name fl">真实姓名<span class="fwb navcureent pl10">*</span>：</p>
                        <div class="form-row-box fl">
                            <input type="text" data-type="text"  placeholder="请输入您的真实姓名" class="form-input required">
                            <span class="checkTips">请输入您的真实姓名！</span>
                        </div>
                    </li>
                    <li class="form-row clearfix">
                        <p class="form-name fl">手机号<span class="fwb navcureent pl10">*</span>：</p>
                        <div class="form-row-box fl">
                            <input type="text" data-type="text" id="txtPhone" placeholder="请输入您的手机号" class="form-input required">
                            <span class="checkTips">请输入您的手机号！</span>
                        </div>
                    </li>
                    <li class="form-row clearfix">
                        <p class="form-name fl">称谓<span class="fwb navcureent pl10">*</span>：</p>
                        <div class="form-row-box fl">
                            <ul>
                                <li class="checkbox-box sex-box fl">
                                    <label>
                                        <input class="Spectator_media" value="1" checked="checked" type="radio" name="sex">先生</label>
                                </li>
                                <li class="checkbox-box sex-box fl">
                                    <label>
                                        <input class="Spectator_media" value="2" type="radio" name="sex">女士</label>
                                </li>
                            </ul>
                            <span class="checkTips"></span>
                        </div>
                    </li>
                    <li class="form-row clearfix">
                        <p class="form-name fl">公司全称(中文)<span class="fwb navcureent pl10">*</span>：</p>
                        <div class="form-row-box fl">
                            <input type="text" id="txtCompanyName" data-type="text" placeholder="请输入您的公司全称" class="form-input required">
                            <span class="checkTips">请输入您的公司全称！</span>
                        </div>
                    </li>
                   
                    <li class="form-row clearfix">
                        <p class="form-name fl">部门<span class="fwb navcureent pl10">*</span>：</p>
                        <div class="form-row-box fl">
                            <select data-type="select"  class="form-input form-select required">
                                <option value="-1">请选择部门</option>
                                <option value="0">销售部</option>
                                <option value="1">开发部</option>
                                <option value="1">生产部</option>
                            </select>
                            <span class="checkTips">请选择您的部门！</span>
                        </div>
                    </li>
                    <li class="form-row clearfix">
                        <p class="form-name fl">职位<span class="fwb navcureent pl10">*</span>：</p>
                        <div class="form-row-box fl">
                            <select data-type="select" class="form-input form-select required">
                                <option value="-1">请选择职位</option>
                                <option value="0">部门经理</option>
                                <option value="1">技术总监</option>
                            </select>
                            <span class="checkTips">请选择您的职位！</span>
                        </div>
                    </li>
                     <li class="form-row clearfix">
                        <p class="form-name fl">公司全称(英文)：</p>
                        <div class="form-row-box fl">
                            <input type="text" id="txtCompanyName_en" placeholder="请输入您的公司全称(英文)" class="form-input ">
                            <span class="checkTips"></span>
                        </div>
                    </li>
                     <li class="form-row clearfix">
                        <p class="form-name fl">国家及地区<span class="fwb navcureent pl10">*</span>：</p>
                        <div class="form-row-box fl">
                            <select data-type="select" class="form-input form-select required">
                                <option value="-1">请选择国家</option>
                                <option value="0">中国</option>
                                <option value="1">美国</option>
                                <option value="2">俄罗斯</option>
                            </select>
                            <span class="checkTips">请选择您的国家！</span>
                        </div>
                    </li>
                     <li class="form-row clearfix">
                        <p class="form-name fl">省/直辖市<span class="fwb navcureent pl10">*</span>：</p>
                        <div class="form-row-box fl J-adress">
                            <select data-type="select" class="form-input form-select fl dq-width required provinceId">
                                <option value="-1">请选择省份</option>
                                <option value="0">广东省</option>
                                <option value="1">湖南省</option>
                            </select>
                            <select data-type="select" class="form-input form-select fl dq-width required cityId">
                                <option value="-1">请选择城市</option>
                                <option value="0">广州市</option>
                                <option value="1">深圳市</option>
                            </select>
                             <select data-type="select" class="form-input form-select fl dq-width required areaId" style="margin-right: 0;">
                                <option value="-1">请选择区域</option>
                                <option value="0">天河区</option>
                                <option value="1">白云区</option>
                            </select>
                            <span class="checkTips" style="clear: both">请选择省/直辖市</span>
                        </div>
                    </li>
                     <li class="form-row clearfix">
                        <p class="form-name fl">公司地址：</p>
                        <div class="form-row-box fl">
                            <input type="text" id="txtCompanyName_en" placeholder="请输入您的公司地址" class="form-input ">
                            <span class="checkTips"></span>
                        </div>
                    </li>
                    <li class="form-row clearfix">
						<p class="form-name fl">座机：</p>
						<div class="form-row-box comp fl">
							<input type="text" class="form-input w120 mr5 dianh-r" id="txtPhoneCountry" placeholder="国家">
							<input type="text" class="form-input w143 mr5 dianh-r" id="txtPhoneArea" placeholder="区号">
							<input type="text" id="txtPhone" class="form-input w380" placeholder="电话号码">
                            <span class="checkTips"></span>
						</div>
					</li>

					
                </ul>
            </div>


            <div class="check-rules">
            	<label><input type="checkbox" name=""><span>我已阅读并同意《数据保护条例-观众》</span></label>
            </div>

            

               <div class="btn-box clear txt-center">
				<button class="btn form-btn btn-red no-border fs18" onclick="doRegister()" id="btnGoRegister">下一步 &gt;</button>
			</div>
           



        </div>
        <div class="reg-footer">
        	Copyright © 2010-2018 iManufacturing Organizing Committee. All rights Reserved <br/>
亚洲智能集成及智能制造解决方案展组委会 2018 版权所有
        </div>
    </div>



    <script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="js/base.js"></script>
    <script type="text/javascript">
        window.onload = function(){

           

        }


         function doRegister(){
                $("#btnGoRegister").attr("disabled", "disabled").html("正在提交...");

                $('.required').each(function(index,item){
                    checkRequired($(item),'#regform');
                });

                isEmail('#txtEmai', '#regform');
                checkPassword('#password', '#regform')

                checkEquality('#password', '#confirm-password', '#regform');

                isPoneAvailable('#txtPhone', '#regform');
                checkadreddSelect('#regform');


                if($('.row-error').length > 0){
                    $("#btnGoRegister").removeAttr("disabled").html("下一步 >");
                     scrollToObject($('#regform').find('.row-error').eq(0));
                     $('#regform').find('.row-error').eq(0).find('.required').focus();
                }else{
                    $("#btnGoRegister").removeAttr("disabled").html("下一步 >");
                    alert('这里可以正确的提交数据了');
                }
            }
    </script>
</body>

</html>