import { Card, styled } from "@mui/material"
import DfTypography from "../../ui-kit/typography"
import DfBox from "../../ui-kit/box"
import DfAvatar from "../../ui-kit/avatar"

const CardRoot = styled(Card, {
  name: 'Item',
  slot: 'Root'
})({
  background: 'transparent',
  display: 'flex',
  flexDirection: 'column',
})

const ListCard = () => {
  return (
    <CardRoot sx={{
      borderBottom: '1px solid gray',
      mb: '0.625rem',
      paddingBottom: '0.5rem'
    }}>
      <DfBox
        component='div'
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          justifyContent: 'space-between'
        }}
      >
        <DfTypography>
          Lorem ipsum dolor sit, necessitatibus atque porro temporibus molestiae inventore, unde earum quidem. Maiores, quae deserunt. Numquam, nobis!
        </DfTypography>
        <DfAvatar sx={{ width: 24, height: 24 }} />
      </DfBox>
      <DfBox component='div'>
        <DfBox
          component='span'
          sx={{
            display: 'flex',
            gap: '1rem'
          }}
        >
          <p>265313765325183</p>
          <p>Петров И.И. создал(а) 17 сен 2022 в 13:55</p>
          <p>Черновик</p>
        </DfBox>
      </DfBox>
    </CardRoot>
  )
}

export default ListCard
