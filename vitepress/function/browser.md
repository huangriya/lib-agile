# 浏览器性能相关

## 同步任务转异步任务，交给浏览器去调度

我们屏幕的刷新频率大多数是 60 Hz，也就是浏览器每秒钟大概需要渲染 60 次，但如果我们的代码块执行的时间过长，就会导致浏览器的渲染被阻塞，导致丢帧、卡顿；
我们可以通过此方法把大任务拆分成小任务，并放入浏览器的延时队列里等待执行，这样浏览器就会根据自身情况，选择空闲时间来执行异步任务，不会阻塞渲染，导致卡顿，丢帧等问题。

```javascript
import { Scheduling } from 'lib-agile'

const taskList = [] //任务列表
const num = 5 //每次处理5个，每5个任务合成一个异步任务放入异步队列
const scheduling = new Scheduling(taskList, num, (o) => {
  // 处理任务
  console.log(o)
})

// 执行完成后的回调
scheduling.done(() => {
  console.log('执行完成')
})

// 如果没执行完成就要离开了，可以清除任务
scheduling.clear()
```

## 执行耗时任务

执行耗时任务，最大限度的不阻塞浏览器渲染

```javascript
import { runTask } from 'lib-agile'

for (let i = 0; i <= 10000; i++) {
  runTask(() => {
    console.log(i)
  }).then(() => {
    if (i === 100000) {
      console.log('done')
    }
  })
}
```
