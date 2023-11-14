'use client'

import Discord from '@/components/Discord'
import Slack from '@/components/Slack'
import Telegram from '@/components/Telegram'
import ModeToggle from '@/libs/ModeToggle'
import { Box, Sheet, useTheme } from '@mui/joy'

export default function Home() {
  const theme = useTheme()
  const textColor = theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000'

  return (
    <main>
      <ModeToggle />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 5,
          backgroundColor: 'green',
        }}
      >
        <Box
          sx={{
            py: '20px',
            bgcolor: textColor === '#FFFFFF' ? '#000' : '#fff',
          }}
        >
          <Slack textColor={textColor} />
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            margin: '0 auto',
            overflowX: 'scroll',
            overflowY: 'hidden',
            marginBottom: '8px',
            flexDirection: 'column',
            alignItems: 'center',
            flex: 1,
            lineHeight: 1.5,
            backgroundColor: 'blue',
            fontFamily: 'Roboto san-serif',
          }}
        >
          <Sheet
            sx={{
              width: {
                xs: '100vw',
                lg: 'calc(100% - 25vw)',
              },
              maxWidth: '728px',
              minHeight: '100%',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              padding: '16px 16px 0 18px',
              justifyContent: 'flex-end',
              pointerEvents: 'auto',
              backgroundColor: 'blue',
            }}
          >
            <Telegram textColor={textColor} />
          </Sheet>
        </Box>
        <Discord />
      </Box>
    </main>
  )
}
