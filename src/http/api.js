import request from './request'
import qs from 'qs'

// 封装项目中常用的业务接口
/**
 * 封装课程分类接口
 */

export function courseClassify () {
  return request({
    url: '/api/app/courseClassify',
    method: 'get'
  })
}

/**
 * 讲师详情接口
 * info:编号
 */
export function courseInfo (info) {
  const url = `/api/app/courseInfo/${Object.keys(info)[0]}=${info.basis_id}`

  return request({
    url,
    method: 'get'
    // params: { basis_id: 287 }
  })
}

/**
 * 课程评论接口
 * @param { number  } limit 每页显示条数
 * @param { string } id 要评论的课程id
 * @param { number } page 页码
  */

export function courseComment (info) {
  return request({
    url: '/api/app/courseComment',
    method: 'post',
    data: qs.stringify(info)
  })
}

/**
 * 登录接口
 */

/**
  * 获取验证码接口
*/

/**
 * 轮播的接口
 */
