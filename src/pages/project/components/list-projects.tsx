import React from 'react'
import ListCard from '../../../components/item'
import Container from '../../../ui-kit/container'
import Box from '../../../ui-kit/box'

const ListProjects = () => {
  return (
    <React.Suspense>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}>
          <ListCard />
          <ListCard />
          <ListCard />
        </Box>
      </Container>
    </React.Suspense>
  )
}

export default ListProjects
