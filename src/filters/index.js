// 全局过滤器

/**
 * 货币格式
 */
export function currency (v, type) {
  console.log('返回值：', v)
  const result = v && v.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
  return type + result;
}

/**
   * 支付状态处理
   */
export function pay (v) {
  let payText = '';
  switch (v) {
    case 0: payText = '已支付'; break;
    case 1: payText = '未支付'; break;
    default: payText = '未知状态'; break;
  }

  return payText
}
