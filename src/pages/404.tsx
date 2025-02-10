import React from 'react'
import { Container, Typography } from '../ui-kit'

export default function PageNotFound() {
  return (
    <React.Suspense>
      <div>
        <Container>
          <Typography variant='h1'>404 error</Typography>
        </Container>
      </div>
    </React.Suspense>
  )
}
