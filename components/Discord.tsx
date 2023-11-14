'use client'

import {
  Avatar,
  Box,
  Sheet,
  Stack,
  Typography,
  List,
  ListItem,
} from '@mui/joy'

import localFont from 'next/font/local'

const helvetica = localFont({
  src: '../public/Helvetica Neue Regular.otf',
  display: 'swap',
})

const Discord = (props: { textColor: string }) => {
    const { textColor } = props

  return (
    <Box sx={{ backgroundColor: 'pink', py: '20px' }}>
      <Sheet>
        <Stack
          sx={{
            padding: '8px 20px',
            display: 'flex',
            flexDirection: 'row',
            gap: '10px',
            bgcolor: textColor === '#FFFFFF' ? '#0000' : '#ffff',
            fontFamily: helvetica.className,
          }}
        >
          <Avatar />
          <Stack
            sx={{
              flex: '1 1 0',
              margin: '-8px -10px -16px -6px',
              minWidth: 0,
              padding: '8px 8px 8px 16px',
              fontFamily: helvetica.className,
            }}
          >
            <List
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '10px',
                alignItems: 'center',
                paddingBottom: '2px',
                fontFamily: helvetica.className,
              }}
            >
              <Typography
                sx={{
                  padding: 0,
                  margin: 0,
                  border: 0,
                  background: 'none',
                  fontSize: '15px',
                  fontWeight: 900,
                  alignItems: 'flex-start',
                  height: 'fit-content',
                  minHeight: 0,
                  fontFamily: helvetica.className,
                }}
              >
                Typescript Community
              </Typography>

              <Typography   sx={{ fontSize: '12px', fontFamily: helvetica.className }}>
                Today at 6:45 PM
              </Typography>
            </List>
            <Stack
              sx={{
                width: '100%',
                maxWidth: '600px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'stretch',
                position: 'relative',
              }}
            >
              <span
                style={{
                  top: 0,
                  bottom: 0,
                  left: '-20px',
                  position: 'absolute',
                  width: '20px',
                }}
              ></span>
              <span
                style={{
                  borderRadius: '4px',
                  width: '4px',
                  flexShrink: 0,
                  backgroundColor: '#00d2ff',
                }}
              ></span>
              <Stack
                sx={{
                  flex: '1 1 0',
                  p: '0 12px',
                  wordWrap: 'break-word',
                  width: '100%',
                  bgcolor: textColor === '#FFFFFF' ? '#0000' : '#ffff',
                }}
              >
                <List>
                  <ListItem>
                    <Typography
                      sx={{ fontWeight: 'bold', marginBottom: '4px', fontFamily: helvetica.className, }}
                    >
                      Daniel Rossenwasser
                    </Typography>
                  </ListItem>
                </List>
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '15px',
                    lineHeight: '1.46668',
                    marginTop: '4px',
                    fontFamily: helvetica.className,
                  }}
                >
                  Announcing Typescript 5.2 - Typescript
                </Typography>
                <Typography
                  sx={{ marginTop: '4px', maxWidth: '65%', fontFamily: helvetica.className }}
                >
                  Today we’re excited to announce the release of TypeScript 5.2!
                  If you’re not familiar with TypeScript, it’s a language that
                  builds on top of JavaScript by making it possible to declare
                  and describe types. Writing types in our code allows us to
                  explain intent and have other tools check our code to catch
                  mistakes like typos,
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Sheet>
    </Box>
  )
}

export default Discord
