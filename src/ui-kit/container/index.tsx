import { Container as MuiContainer, ContainerProps } from "@mui/material"

const Container = (props: ContainerProps) => {
  const { children, sx } = props
  return (
    <MuiContainer
      sx={{
        boxSizing: 'content-box',
        maxWidth: '120.75rem',
        // margin: '0 auto',
        padding: '0 1.5rem',
        ...sx
      }}
    >
      { children }
    </MuiContainer>
  )
}

export default Container
