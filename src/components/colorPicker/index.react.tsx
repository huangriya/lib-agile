import { useState, useRef, useEffect, useImperativeHandle, forwardRef } from 'react'

const ColorPicker = forwardRef(function ScrollBar(props, ref) {
  return (
    <div class="lib-color-picker">
      <div class="color-set-area">
        <div class="saturation" ref="saturationRef">
          <canvas width="152" height="152"></canvas>
          <div class="slide"></div>
        </div>
        <div class="hue" ref="hueRef">
          <canvas width="16" height="152"></canvas>
          <div class="slide"></div>
        </div>
        <div class="color-alpha" ref="alphaRef">
          <canvas width="16" height="152"></canvas>
          <div class="slide"></div>
        </div>
      </div>
    </div>
  )
})
