import React from "react"
import { styled } from "@mui/material"

export interface TagProps {
  label: React.ReactNode
  color?: string
}

const TagRoot = styled('span', {
  name: 'Tag',
  slot: 'Root'
})()

const Tag = (props: TagProps) => {
  const { label, color } = props
  return (
    <TagRoot
      color={color}
    >
      { label }
    </TagRoot>
  )
}

export default Tag
