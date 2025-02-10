import { Avatar as MuiAvatar, AvatarProps } from '@mui/material'

const Avatar = (props: AvatarProps) => {
  const { ...rest } = props
  return (
    <MuiAvatar
      { ...rest }
    />
  )
}

export default Avatar
