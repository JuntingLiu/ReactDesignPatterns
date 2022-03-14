import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`

const Pane = styled.div`
  flex: ${ props => props.weight };
`

const SplitScreen = ({
  children,
  leftWeight = 1,
  rightWeight = 1
}) => {
  // 通过 children 以子元素方式传递进来，而不是通过 prop 属性来进行传递组件
  // 以子元素的方式传递进来，比通过属性将组件传递进来更方便传递 props 属性, 无需再新增属性来传递定义的 props 了
  const [left, right] = children

  return (
    <Container>
      <Pane weight={leftWeight}>
        {left}
      </Pane>
      <Pane weight={rightWeight}>
        {right}
      </Pane>
    </Container>
  )
}

export default SplitScreen