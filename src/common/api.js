import axios from 'axios'
import qs from 'qs'

const fetchData = (url = '', data = {}, method = 'GET') => {
  method = method.toUpperCase() // 将字符串转换为大写
  let reqdata = {}
  Object.keys(data).forEach(key => {
    if (!['', undefined, null, '全部'].includes((data[key]))) {
      reqdata[key] = data[key]
    }
  })
  // 解析data = {} 里面的参数，转成JSONP格式
  if (method === 'GET') {
    let dataStr = ''
    Object.keys(reqdata).forEach(key => {
      if (!['', undefined, null].includes(reqdata[key])) {
        if (Array.isArray(reqdata[key])) {
          reqdata[key].forEach(item => {
            dataStr += `${key}=${encodeURIComponent(item)}&`
          })
        } else {
          dataStr += `${key}=${encodeURIComponent(reqdata[key])}&` // 数据最终形式key1=data1&key2=data2&
        }
      }
    })
    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
      url = `${url}?${dataStr}` // get方法下降url转化为url?key=data形式
    }
    // 尝试从远程获取数据
    try {
      // 异步操作
      return new Promise(resolve => {
        axios.get(url).then(response => {
          const responseData = response.data
          resolve(responseData)
        })
      })
    } catch (error) {
      throw new Error(error)
    }
  } else {
    // 非get方法，尝试获取数据
    let requestData
    if (method === 'POST' || method === 'PUT') {
      requestData = qs.stringify(reqdata)
    } else {
      requestData = reqdata
    }
    try {
      // 异步操作
      return new Promise(resolve => {
        let reqParam = {
          method: method,
          url: url,
          data: requestData,
        }
        axios(reqParam).then(response => {
          const responseData = response.data
          resolve(responseData)
        })
      })
    } catch (error) {
      throw new Error(error)
    }
  }
}
// 处理符合数据类型参数
// const mixtedParams = (url = '', data = {}, method = 'POST') => {
//   let reqdata = {}
//   Object.keys(data).forEach(key => {
//     if (data[key] !== null && data[key] !== '') {
//       reqdata[key] = data[key]
//     } else {
//       reqdata[key] = null
//     }
//   })
//   try {
//     // 异步操作
//     return new Promise(resolve => {
//       axios({
//         method: method,
//         url: url,
//         data: reqdata,
//       }).then(response => {
//         const responseData = response.data
//         resolve(responseData)
//       })
//     })
//   } catch (error) {
//     throw new Error(error)
//   }
// }

// 用户信息
export const getRepeatUserAPI = data => fetchData('/api/GetRepeatUserAPI', data, 'GET') 
export const getMailCodeAPI = data => fetchData('/api/GetMailCodeAPI', data, 'POST')
export const registAPI = data => fetchData('/api/regist', data, 'POST')
export const loginAPI = data => fetchData('/api/login', data, 'POST')
export const updateUserAPI = data => fetchData('/api/UpdateUserAPI', data, 'PUT')
export const userInfoAPI = data => fetchData('/api/UserInfoAPI', data, 'GET')
// 标签
export const tagsListAPI = () => fetchData('/api/TagsListAPI', 'GET')
// 文章
export const publishArticleAPI = data => fetchData('/api/PublishArticleAPI', data, 'POST')