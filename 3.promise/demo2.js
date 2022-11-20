let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
  promise2 = promise1.then(res => {
    // 返回一个Promise对象
    return new Promise((resolve, reject) => {
      setTimeout(() => {
       resolve('这里返回一个Promise')
      }, 2000)
    })
  })
  promise2.then(res => {
    console.log(res) //3秒后打印出：这里返回一个Promise
  })
