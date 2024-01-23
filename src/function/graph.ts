import Queue from './queue'

/**
 * 获取最短路径
 * @param edges 连接信息
 * @param startNode 开始节点
 * @param endNode 结束节点
 */
export const getShortestPath = (edges: object[], startNode: string, endNode: string) => {
  const queue = new Queue()
  const checkedMap: any = {}
  function addQueue(source: string) {
    edges.forEach((o) => {
      if (o.source === source && !checkedMap[o.target]) {
        queue.add(o)
      }
    })
  }
  addQueue(startNode)
  function forEach(): any {
    if (queue.size()) {
      const item = queue.remove()
      checkedMap[item.target] = true

      if (item.target === endNode) {
        return item
      } else {
        addQueue(item.target)
        return forEach()
      }
    }
  }
  const edge = forEach()
  const paths: any = []
  if (edge) {
    paths.unshift(edge)
    function getPath(source: string) {
      const find: any = edges.find((o) => o.target === source)
      paths.unshift(find)
      if (find.source !== startNode) {
        getPath(find.source)
      }
    }
    getPath(edge.source)
  }
  return paths
}
