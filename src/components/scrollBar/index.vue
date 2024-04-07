<template>
  <div
    ref="scrollBox"
    class="agile-scrollbar"
    :class="{
      'not-user-select': state.scrollBarX.clientX || state.scrollBarY.clientY,
      'scrollbar-hover': props.type === 'hover',
      'scrollbar-hide': props.type === 'hide',
    }">
    <div
      ref="scroll"
      class="agile-scroll"
      :class="{
        'scroll-x': state.scrollContentWidth > state.scrollWidth,
        'scroll-y': state.scrollContentHeight > state.scrollHeight,
      }"
      @scroll="onScroll">
      <slot></slot>
    </div>
    <div
      v-if="state.scrollContentWidth > state.scrollWidth"
      class="agile-scroll-bar-x"
      :class="{ act: state.scrollBarX.clientX }"
      :style="{ width: state.scrollBarX.width + 'px' }"
      @mousedown="scrollBarDown($event, 'scrollBarX')"></div>
    <div
      v-if="state.scrollContentHeight > state.scrollHeight"
      class="agile-scroll-bar-y"
      :class="{ act: state.scrollBarY.clientY }"
      :style="{ height: state.scrollBarY.height + 'px' }"
      @mousedown="scrollBarDown($event, 'scrollBarY')"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch, reactive, ref, onBeforeUnmount, nextTick } from 'vue'
import propsData from './_module/props'
import { getMultiple, getScrollBarSize } from './_module/utils'

const emits = defineEmits(['scroll'])

const props = defineProps(propsData)

const state = reactive({
  scrollWidth: 0,
  scrollHeight: 0,
  scrollContentWidth: 0,
  scrollContentHeight: 0,

  scrollBarY: {
    height: 0,
    top: props.offsetTop,
    clientY: null,
    // scrollBarY滚动相对于真实滚动的比例
    multiple: 1,
    scrollTop: 0,
  },

  scrollBarX: {
    width: 0,
    left: props.offsetLeft,
    clientX: null,
    // scrollBarY滚动相对于真实滚动的比例，比如scrollBar滚动10px，真实滚动需要滚动多少?
    multiple: 1,
    scrollLeft: 0,
  },
})

// 是否在滚动状态
let isScroll = false
let timer: any = null
let requestAnimationXId: any = null
let requestAnimationYId: any = null

const scrollBox = ref()
const scroll = ref()

// 初始化容器信息
const initContainer = () => {
  // console.dir(scroll.value)
  // console.log(scroll.value.offsetWidth, scroll.value.scrollWidth)

  state.scrollWidth = scroll.value.offsetWidth
  state.scrollHeight = scroll.value.offsetHeight
  state.scrollContentWidth = scroll.value.scrollWidth
  state.scrollContentHeight = scroll.value.scrollHeight
}

// 初始化scrollBar
const initScrollBar = () => {
  const { scrollContentWidth, scrollWidth, scrollContentHeight, scrollHeight } = state
  if (scrollContentWidth > scrollWidth) {
    state.scrollBarX.width = getScrollBarSize(
      scrollWidth,
      scrollContentWidth,
      props.offsetLeft,
      props.offsetRight,
      props.minBarSize,
    )
    state.scrollBarX.multiple = getMultiple(
      scrollContentWidth,
      scrollWidth,
      state.scrollBarX.width,
      props.offsetLeft,
      props.offsetRight,
    )
  }
  if (scrollContentHeight > scrollHeight) {
    state.scrollBarY.height = getScrollBarSize(
      scrollHeight,
      scrollContentHeight,
      props.offsetTop,
      props.offsetBottom,
      props.minBarSize,
    )
    state.scrollBarY.multiple = getMultiple(
      scrollContentHeight,
      scrollHeight,
      state.scrollBarY.height,
      props.offsetTop,
      props.offsetBottom,
    )
  }
}

// 设置x轴滚动条距离
function setScrollBarLeft(isRequestAnimationFrame = true) {
  const scrollLeft = scroll.value.scrollLeft
  const left = props.offsetLeft + scrollLeft / state.scrollBarX.multiple
  const scrollBar = scrollBox.value.querySelector('.agile-scroll-bar-x')
  if (scrollBar) {
    scrollBar.style.transform = `translateX(${left}px)`
  }
  if (isRequestAnimationFrame) {
    requestAnimationXId = requestAnimationFrame(() => {
      setScrollBarLeft()
    })
  }
}

// 设置Y轴滚动条距离
function setScrollBarTop(isRequestAnimationFrame = true) {
  const scrollTop = scroll.value.scrollTop
  const top = props.offsetTop + scrollTop / state.scrollBarY.multiple
  const scrollBar = scrollBox.value.querySelector('.agile-scroll-bar-y')
  if (scrollBar) {
    scrollBar.style.transform = `translateY(${top}px)`
  }
  if (isRequestAnimationFrame) {
    requestAnimationYId = requestAnimationFrame(() => {
      setScrollBarTop()
    })
  }
}

const updated = () => {
  initContainer()
  if (props.type !== 'hide') {
    initScrollBar()
    nextTick(() => {
      setScrollBarLeft(false)
      setScrollBarTop(false)
    })
  }
}

const onScroll = (e) => {
  if (props.type !== 'hide') {
    if (!isScroll) {
      setScrollBarLeft()
      setScrollBarTop()
      isScroll = true
    }
    clearTimeout(timer)
    timer = setTimeout(() => {
      cancelAnimationFrame(requestAnimationXId)
      cancelAnimationFrame(requestAnimationYId)
      isScroll = false
    }, 500)
  }

  emits(
    'scroll',
    {
      scrollTop: scroll.value.scrollTop,
      scrollLeft: scroll.value.scrollLeft,
      scrollWidth: state.scrollWidth,
      scrollHeight: state.scrollHeight,
      scrollContentWidth: state.scrollContentWidth,
      scrollContentHeight: state.scrollContentHeight,
    },
    e,
  )
}

// 按下滚动条
const scrollBarDown = (e, key) => {
  if (key === 'scrollBarX') {
    state.scrollBarX.clientX = e.clientX
    state.scrollBarX.scrollLeft = scroll.value.scrollLeft
  }
  if (key === 'scrollBarY') {
    state.scrollBarY.clientY = e.clientY
    state.scrollBarY.scrollTop = scroll.value.scrollTop
  }
  window.addEventListener('mousemove', scrollBarDrag)
}

// 拖拽滚动条
function scrollBarDrag(e) {
  const clientX = state.scrollBarX.clientX
  const clientY = state.scrollBarY.clientY
  if (clientX) {
    let dragX = e.clientX - clientX
    scroll.value.scrollLeft = state.scrollBarX.scrollLeft + dragX * (state.scrollBarX.multiple * props.dragSpeedX)
  }
  if (clientY) {
    let dragY = e.clientY - clientY
    scroll.value.scrollTop = state.scrollBarY.scrollTop + dragY * state.scrollBarY.multiple * props.dragSpeedY
  }
}

function scrollBarUp() {
  state.scrollBarX.clientX = null
  state.scrollBarY.clientY = null
  window.removeEventListener('mousemove', scrollBarDrag)
}

// 添加拖拽结束事件
function dragEndEvent() {
  window.addEventListener('mouseup', scrollBarUp)
}

// 移除拖拽事件
function removeDragEvent() {
  window.removeEventListener('mouseup', dragEndEvent)
}

// 设置滚动条左边距离
function setScrollLeft(num: number) {
  if (num >= 0) {
    scroll.value.scrollLeft = num
  }
}

// 设置滚动条上边距离
function setScrollTop(num: number) {
  if (num >= 0) {
    scroll.value.scrollTop = num
  }
}

let observer: any = null
const autoUpdate = () => {
  let time: any = null
  observer = new MutationObserver(() => {
    clearTimeout(time)
    time = setTimeout(() => {
      updated()
    }, 200)
  })
  observer.observe(scroll.value, {
    attributes: true,
    childList: true,
    subtree: true,
  })
}

watch(
  () => props.offsetLeft,
  () => {
    initScrollBar()
    setScrollBarLeft(false)
  },
)

watch(
  () => props.offsetRight,
  () => {
    initScrollBar()
  },
)

watch(
  () => props.offsetTop,
  () => {
    initScrollBar()
    setScrollBarTop(false)
  },
)

watch(
  () => props.offsetBottom,
  () => {
    initScrollBar()
  },
)

onMounted(() => {
  updated()

  // 添加滚动条拖拽结束事件
  dragEndEvent()

  // 监听dom变动，自动更新
  if (props.isAutoUpdate) {
    autoUpdate()
  }
})

onBeforeUnmount(() => {
  removeDragEvent()

  // 移除自动
  if (props.isAutoUpdate && observer) {
    observer.disconnect()
  }
})

defineExpose({
  updated,
  setScrollLeft,
  setScrollTop,
})
</script>

<script lang="ts">
export default {
  name: 'LScrollBar',
}
</script>

<style lang="less">
@import '../../style/components/scrollBar.less';
</style>
