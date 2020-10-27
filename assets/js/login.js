$(function () {
    // // 点击注册按钮，注册页面显示
    // $('.login a').on('click', function() {

    
    //     $('.login').hide().next().show();

    // })


    // // 2.点击登录按钮   要显示登录页面

    // $('register a').on('click', function () {

    //     $('.register').hide().prev().show();
    // })


  // 1. 单击去注册按钮 注册注册页面的显示
  $('.login a').on('click', function () {
      $('.login').hide().next().show()
  })
  // 2. 当单击去登陆按钮  要显示登陆界面
  $('.register a').on('click', function () {
      $('.register').hide().prev().show()
  })

// 3.实现验证规则
    // 报错是因为没有form 
    // jq向外暴漏了一个对象
    // layui向外暴漏了一个layui  
    


    // -----------这两句解释不懂-------------------------------------
     // 3. 实现校验规则
  // jquery文件向外暴露了一个对象 $或 jquery
  // layui.all.js文件向外暴露了一个对象layui
  var form = layui.form
    form.verify({
        username: function (value, item) { //value：表单的值、item：表单的DOM对象
            if (!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)) {
                return '用户名不能有特殊字符'
            }
            if (/(^\_)|(\__)|(\_+$)/.test(value)) {
                return '用户名首尾不能出现下划线\'_\''
            }
            // if(/^\d+\d+\d$/.test(value)){
            //   return '用户名不能全为数字';
            // }
        },
        // repass是用来校验两次输入的密码是否一致的问题
        // 这一步需要自己写   要注意啊    模式照着上边抄就行
        repass: function (value, item) {
            // console.log(value); // value就是确认密码 已经获取到了
            // console.log(item);
            // 3.1 获取第一次输入的密码
            var passValue = $('.myForm .pass').val()
            // console.log(pass);
            // 3.2 进行比较 
            if (value !== passValue) {
                // 3.3 清空两个密码框
                $('.register .myForm .pass,.register .myForm .repass').val('')
                // 3.4 提示信息
                return '两次输入的密码不一致'
            }
        }

        //我们既支持上述函数式的方式，也支持下述数组的形式
        //数组的两个值分别代表：[正则匹配、匹配不符时的提示文字]
        , pass: [  // \d数字
            /^[\d]{6,12}$/
            , '密码必须6到12位数字，且不能出现空格'
        ]
    
    });

    // // 阻止表单得默认行为
    // // 因为跳转就会刷新  
    // $('.mayForm').on('click', function (e) {
    //     e.preventDefault();
    // })
    

// 这个是为了上一步得验证
  // 阻止form标签的默认提交行为
  // $('.myForm').on('submit',function(e){
  //   e.preventDefault()
  // })
    // 4.真正得注册
    // 给form注册submit事件
    // 3/阻止form默认行为
    // 4.发送ajax 请求
    // 5发送成功失败时候都要提示一下




    // 1.注册submit事件
    $('.myForm').on('click', function (e) {
        e.preventDefault();
        // 3.发送ajax 请求
        $.ajax({
            type: 'POST',
            url: '/api/reguser',
            data: $(this).serialize(),
            success: function (res) {
                //  console.log(res);
                
             }



        })
    })

})