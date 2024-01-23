/**
 * 阻塞程序执行 一段时间
 * @param duration 需要阻塞的时间（豪秒数）
 */

export function blocked(duration: number) {
  const start = Date.now()
  while (Date.now() - start < duration) {}
}
