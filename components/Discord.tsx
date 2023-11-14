import { Avatar, Box, Button, Sheet, Stack, Typography } from '@mui/joy'
import Image from 'next/image'
import Link from 'next/link'

const Discord = () => {
  return (
    <Box sx={{ backgroundColor: 'pink', py: '20px' }}>
      <Sheet>
        <Stack
          sx={{
            padding: '8px 20px',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Avatar />
          <Stack
            sx={{
              flex: '1 1 0',
              margin: '-12px -8px -16px -16px',
              minWidth: 0,
              padding: '8px 8px 8px 16px',
              fontFamily: 'Lato san-serif',
            }}
          >
            <Stack
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '4px',
                alignItems: 'center',
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
                Typescript Community #Updates
              </Typography>

              <span className='text-[12px]'>09/24/2022 6:45 PM</span>
            </Stack>
            <Stack
              sx={{
                marginBottom: '4px',
                width: '100%',
              }}
            >
              <Link href='https://devblogs.microsoft.com/typescript/announcing-typescript-5-2/'>
                https://devblogs.microsoft.com/typescript/announcing-typescript-5-2/
              </Link>
            </Stack>
            <Stack
              sx={{
                width: '100%',
                maxWidth: '600px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'stretch',
                margin: '0 0 8px',
                position: 'relative',
              }}
            >
              <span className='top-0 bottom-0 left-[-20px] absolute w-[20px]'></span>
              <span className='rounded-lg w-[4px] shrink-0 bg-[#dddddd]'></span>
              <Stack
                sx={{
                  flex: '1 1 0',
                  p: '0 12px',
                  wordWrap: 'break-word',
                  width: '100%',
                }}
              >
                <div className='gap-2 text-[15px] leading-[1.46668]'>
                  <span className='flex items-center'>
                    <span className='font-black mb-4'>Typescript</span>
                  </span>
                  <span>Daniel Rossenwasser</span>
                </div>
                <span className='font-bold text-[15px] leading-[1.46668] mt-4'>
                  <Link href='#'>Announcing Typescript 5.2 - Typescript</Link>
                </span>
                <span className='mt-4 md:max-w-[65%]'>
                  <p>
                    Today we’re excited to announce the release of TypeScript
                    5.2! If you’re not familiar with TypeScript, it’s a language
                    that builds on top of JavaScript by making it possible to
                    declare and describe types. Writing types in our code allows
                    us to explain intent and have other tools check our code to
                    catch mistakes like typos,
                  </p>
                </span>
                <Stack
                  sx={{
                    width: '360px',
                    position: 'relative',
                    maxWidth: '100%',
                    marginTop: '5px',
                  }}
                >
                  <div className='pt-[75%] relative'>
                    <div className='h-[100%] left-0 top-0 absolute'>
                      {/* <Image src={MessageImage} alt='Message Video' /> */}
                    </div>
                  </div>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Sheet>
    </Box>
  )
}

export default Discord
