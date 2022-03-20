import React, { useState } from 'react'
import styled from 'styled-components'

const ModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
`
const ModalBody = styled.div`
  width: 50%;
  padding: 20px;
  margin: 10% auto;
  background-color: white;
`

export default function Modal({ children }) {
  const [shouldShow, setShouldShow] = useState(false)

  return (
    <>
      <button onClick={() => setShouldShow(true)}>Show Modal</button>
      {
        shouldShow && (
          <ModalBackground onClick={() => setShouldShow(false)}>
            {/* 阻止事件冒泡，导致组件关闭 */}
            <ModalBody onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setShouldShow(false)}>Hide Modal</button>
              { children }
            </ModalBody>
          </ModalBackground>
        )
      }
    </>
  )
}