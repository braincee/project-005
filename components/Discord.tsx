'use client'

import {
  Avatar,
  Box,
  Sheet,
  Stack,
  Typography,
  List,
  ListItem,
  useTheme,
} from '@mui/joy'

const Discord = () => {
  return (
    <Box sx={{ backgroundColor: 'pink', py: '20px' }}>
      <Sheet>
        <Stack
          sx={{
            padding: '8px 20px',
            display: 'flex',
            flexDirection: 'row',
            gap: '10px',
          }}
        >
          <Avatar />
          <Stack
            sx={{
              flex: '1 1 0',
              margin: '-8px -10px -16px -6px',
              minWidth: 0,
              padding: '8px 8px 8px 16px',
              fontFamily: 'Lato, sans-serif',
            }}
          >
            <List
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '10px',
                alignItems: 'center',
                paddingBottom: '2px',
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
                }}
              >
                Typescript Community
              </Typography>

              <Typography sx={{ fontSize: '12px' }}>
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
                background: '#dedede',
              }}
            >
              <Typography
                sx={{
                  top: 0,
                  bottom: 0,
                  left: '-20px',
                  position: 'absolute',
                  width: '20px',
                }}
              ></Typography>
              <Typography
                sx={{
                  borderRadius: '4px',
                  width: '4px',
                  flexShrink: 0,
                  backgroundColor: '#00d2ff',
                }}
              ></Typography>
              <Stack
                sx={{
                  flex: '1 1 0',
                  p: '0 12px',
                  wordWrap: 'break-word',
                  width: '100%',
                }}
              >
                <List>
                  <ListItem>
                    <Typography
                      sx={{ fontWeight: 'bold', marginBottom: '4px' }}
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
                  }}
                >
                  Announcing Typescript 5.2 - Typescript
                </Typography>
                <Typography
                  sx={{ marginTop: '4px', maxWidth: '65%', color: '#fff' }}
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
