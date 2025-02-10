import { Card as MuiCard, styled } from '@mui/material'
import React from 'react'

interface DfCardProps {
  children?: React.ReactNode,
  component?: React.ElementType
}

const CardRoot = styled(MuiCard, {
  name: 'DfCard',
  slot: 'Root'
})({
  padding: '1.5rem'
})

const Card = React.forwardRef(
  function DfCard(props: DfCardProps) {
    const { children, component } = props;
    return (
      <CardRoot
        // component={component}
      >
        { children }
      </CardRoot>
    )
  }
)

export default Card
