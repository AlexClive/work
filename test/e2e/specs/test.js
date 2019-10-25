// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.text_item')
      .assert.elementPresent('img')
      .assert.containsText('p', '四川省学科后台管理系统')
      .assert.visible('input[type=text]')
      .assert.containsText('label[for=name]', '用户名')
      .assert.visible('input[type=password]')
      .assert.containsText('label[for=password]', '密码')
      .assert.containsText('button[type=button]', '立即创建')
      //login测试完成之后截一张图保存到reports/login.png
      .saveScreenshot('reports/loginyUI.png')
      //测试登录页 用户名密码输入错误给出提示
      .setValue('input[type=text]', '1233')
     // .assert.visible('.el-form-item__error')
      .setValue('input[type=password]', '54565')
      .assert.visible('.el-form-item__error')
      .click('#login')
      .assert.elementPresent("#login")
      .saveScreenshot('reports/errorLogin.png')
      .clearValue('input[type=text]')
      .clearValue('input[type=password]')
      .setValue('input[type=text]', 'admin')
      .setValue('input[type=password]', 'admin')
      .saveScreenshot('reports/login.png')
      .click('button[type=button]')
      .saveScreenshot('reports/index.png')
      //进入index
      .assert.elementPresent('#index',"index页id值存在")
      //判断height部分是否存在
      .assert.elementPresent('#header',"header页id值存在")
      //判断leftnav部分是否存在
      .assert.elementPresent('#RowNav',"RowNav页id值存在")
      .end()
  }
}
