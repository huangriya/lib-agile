import { useState, useRef, useEffect, useImperativeHandle, forwardRef } from 'react'

const Proportional = forwardRef(function ScaleBox(props: { value: number }) {
  const { children, value = 1 } = props
  return (
    <div className="lib-proportion-box">
      <div className="lib-proportion-inner" style={{ 'padding-bottom': value * 100 + '%' }}>
        <div className="lib-proportion-content">{children}</div>
      </div>
    </div>
  )
})

export default Proportional
