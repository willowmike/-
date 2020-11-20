var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var url = require('url');
var express = require('express');
var app = express();
const bodyParser = require('body-parser')
const mysql      = require('mysql');

app.use(bodyParser.urlencoded({extended:false}))

app.set('port', process.env.PORT || 8888);

app.use(express.static('public'));


var server = http.createServer(app).listen(app.get('port'))

app.get('/', function(req,res){
    var title="Login";
    var template = `
    <!DOCTYPE html>
    <html lnag="ko">
        <head>
            <meta charset="UTF-8">
            <title>회원가입</title>
            <link rel="stylesheet" href="new_main.css">
            
        </head>
        <body>
            <!-- header -->
            <div id="header">
                <a href="https://nid.naver.com/user2/V2Join.nhn?m=agree#agreeBottom" target="_blank" title="네이버 회원가입 페이지 보러가기"><img src="NAVER_CI_Green.png" id="logo"></a>
            </div>
    
    
            <!-- wrapper -->
            <div id="wrapper">
    
                <!-- content-->
                <div id="content">
    
                    <!-- ID -->
                    <div>
                        <h3 class="join_title">
                            <label for="id">아이디</label>
                        </h3>
                        <span id="box int_id">
                            <input type="text" id="id" class="int" maxlength="20">
                            <button type="button" value="중복확인" id="id_check">중복확인</button>
                            <label id="duplicate_msg"></label>
                        </span>
                        <span class="error_next_box"></span>
                    </div>
    
                    <!-- PW1 -->
                    <div>
                        <h3 class="join_title"><label for="pswd1">비밀번호</label></h3>
                        <span class="box int_pass">
                            <input type="text" id="pswd1" class="int" maxlength="20">
                            <!-- <span id="alertTxt">사용불가</span>
                            <img src="m_icon_pass.png" id="pswd1_img1" class="pswdImg"> -->
                        </span>
                        <span class="error_next_box"></span>
                    </div>
    
                    <!-- PW2 -->
                    <div>
                        <h3 class="join_title"><label for="pswd2">비밀번호 재확인</label></h3>
                        <span class="box int_pass_check">
                            <input type="text" id="pswd2" class="int" maxlength="20">
                            <!-- <img src="m_icon_check_disable.png" id="pswd2_img1" class="pswdImg"> -->
                        </span>
                        <span class="error_next_box"></span>
                    </div>
    
                    <!-- NAME -->
                    <div>
                        <h3 class="join_title"><label for="name">이름</label></h3>
                        <span id="box int_name">
                            <input type="text" id="name" class="int" maxlength="20">
                        </span>
                        <span class="error_next_box"></span>
                    </div>
    
                    <!-- BIRTH -->
                   
    
    
                    <!-- JOIN BTN-->
                    <div id="btn_area">
                        <button type="button" id="btnJoin">
                            <span>가입하기</span>
                        </button>
                    </div>
    
                    
    
                </div> 
                <!-- content-->
    
            </div> 
            <!-- wrapper -->
        <script src="registerClient.js"></script>
        </body>
    </html>
    `;

    res.writeHead(200);
    res.end(template)
})