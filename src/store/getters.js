const getters = {
  // 表示性别为0是男的数组
  male: state => {
    return state.userinfo.filter((item, index) => {
      return item.sex === 0;
    })
  },
  // 表示性别为1代表女的数组
  female: state => {
    return state.userinfo.filter((item, index) => {
      return item.sex === 1;
    })
  }
}

export default getters;
