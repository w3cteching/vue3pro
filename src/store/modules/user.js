// 用户store

const user = {
  state: {
    userinfo: [
      { id: 1001, username: '张三', sex: 0, address: '北京' },
      { id: 1002, username: '李四', sex: 1, address: '上海' },
      { id: 1003, username: '王五', sex: 0, address: '天津' },
      { id: 1004, username: '马六', sex: 1, address: '武汉' }
    ]
  },
  actions: {
    // 用户登录
    login () {
      console.log('用户登录actions')
    },
    // 用户注册
    register () {
      console.log('用户注册actions')
    }
  },
  mutations: {
    LOGIN () {
      console.log('用户登录mutations')
    },
    REGISTER () {
      console.log('用户注册mutations')
    }
  }
}

export default user;
