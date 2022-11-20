let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
  promise2 = promise1.then(res => {
    // 返回一个普通值
    return '这里返回一个普通值'
  })
  promise2.then(res => {
    console.log(res) //1秒后打印出：这里返回一个普通值
  })
