import styled from 'styled-components'

const LoginArea = styled.div`
  background: #666;
`

const LoginImage = styled.div`
  background-image: url(/login-image.svg);
  background-size: cover;
  height: 100vh;
  width: 50vw;
`
declare module 'styled-components' {
  export interface DefaultTheme {
    appBackground: string
    appColor: string
  }
}

function Login() {
  return (
    <>
      <LoginArea>LOGIN</LoginArea>
      <LoginImage />
    </>
  )
}

export default Login
