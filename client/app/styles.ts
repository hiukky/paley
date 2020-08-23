import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  height: 450px;
  width: 350px;
  display: grid;
  grid-template-rows: 50px 350px;
`

const Container = {
  Header: styled.div`
    position: relative;
  `,

  Main: styled.main`
    display: grid;
    grid-template-rows: 1fr 1fr;
  `,
}

export { Wrapper, Container }
