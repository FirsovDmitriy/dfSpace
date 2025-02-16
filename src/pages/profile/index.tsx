import React from 'react'
import { Box, Container, Typography } from '../../ui-kit'
import ProfileImage from './components/profile-image'

const Profile = () => {

  return (
    <React.Suspense>
      <div>
        <Container
          sx={{
            display: 'flex',
            gap: '1.5rem'
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <img src="" width='320' height='320' alt="" />
            <ProfileImage />
          </Box>
          <Box>
            <Box sx={{ mb: '1.5rem' }}>
              <Typography variant='h4'>
                Котов Семен Васильевич
              </Typography>
            </Box>
            <Box>
            <Typography variant='body2' sx={{ mb: '0.5rem' }}>О себе:</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem illum beatae soluta impedit nam quo sequi facilis molestiae quisquam fugit error delectus, magni nihil blanditiis harum tempora incidunt corrupti veniam?
            </Typography>
          </Box>
          </Box>
        </Container>
      </div>
    </React.Suspense>
  )
}

export default Profile
