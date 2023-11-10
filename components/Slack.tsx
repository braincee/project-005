import {
  AddCircle,
  ArrowBack,
  ArrowForward,
  ArrowRight,
  HelpOutline,
  History,
  Home,
  MoreHoriz,
  Search,
  Tag,
} from '@mui/icons-material'
import {
  Box,
  Input,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
  Sheet,
  Stack,
  Typography,
} from '@mui/joy'

const Slack = () => {
  return (
    <Box>
      <Sheet sx={{ minHeight: '100vh', bgcolor: '#350d36' }}>
        <Stack
          sx={{
            bgcolor: '#350d36',
            display: 'flex',
            flexDirection: 'row',
            py: '6px',
            height: '40px',
            width: '100%',
            justifyContent: 'space-between',
            paddingRight: '4px',
            position: 'relative',
          }}
        >
          <span className='w-[76px] me-auto flex-[0_0_auto]'></span>
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flex: '1 1 auto',
              alignItems: 'center',
            }}
          >
            <Stack
              sx={{
                display: 'flex',
                flex: '0 0 auto',
                flexBasis: '226.56px',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Stack
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <ArrowBack
                  sx={{ color: '#ffffff38', height: '26px', width: '26px' }}
                />
                <ArrowForward
                  sx={{ color: '#ffffff38', height: '26px', width: '26px' }}
                />
              </Stack>
              <History
                sx={{
                  color: '#ffffff',
                  ml: '4px',
                  height: '26px',
                  width: '26px',
                }}
              />
            </Stack>
            <div className='flex-[2_1_0px] max-w-[1000px] min-w-[280px] ms-[8px]'>
              <Input
                sx={{
                  minHeight: '28px !important',
                  bgcolor: '#f9edff40',
                  maxWidth: '100%',
                  borderColor: '#0000',
                  '--Input-placeholderColor': 'white',
                }}
                placeholder='Search Slack'
                endDecorator={<Search sx={{ color: '#ffffff38' }} />}
              />
            </div>
            <div className='flex items-center justify-end flex-[1_0_auto]'>
              <HelpOutline sx={{ color: '#ffffff' }} />
            </div>
          </Stack>
        </Stack>
        <Stack
          sx={{
            display: 'grid',
            gridTemplateColumns: '76px auto',
            gridTemplateRows: 'auto',
            gridTemplateAreas: 'inherit',
            flexDirection: 'row',
            bgcolor: '#350d36',
          }}
        >
          <Stack
            sx={{
              bgcolor: '#350d36',
              p: '8px 12px 24px 12px',
              display: 'flex',
              justifyContent: 'space-between',
              overflow: 'hidden',
              height: 'calc(100vh - 40px)',
            }}
          >
            <List
              sx={{
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
              }}
            >
              <ListItem>
                <ListItemDecorator>
                  <span className='h-[36px] w-[36px] border-2 text-white'></span>
                </ListItemDecorator>
              </ListItem>
              <ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
                <ListItemDecorator>
                  <Home
                    sx={{ height: '36px', width: '36px', color: '#ffff' }}
                  />
                </ListItemDecorator>
                <ListItemContent sx={{ color: '#fff' }}>Home</ListItemContent>
              </ListItem>
              <ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
                <ListItemDecorator>
                  <span className='h-[36px] w-[36px] border-2 text-white'></span>
                </ListItemDecorator>
                <ListItemContent sx={{ color: '#fff' }}>DMs</ListItemContent>
              </ListItem>
              <ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
                <ListItemDecorator>
                  <span className='h-[36px] w-[36px] border-2 text-white'></span>
                </ListItemDecorator>
                <ListItemContent sx={{ color: '#fff' }}>
                  Activity
                </ListItemContent>
              </ListItem>
              <ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
                <ListItemDecorator>
                  <MoreHoriz
                    sx={{ height: '36px', width: '36px', color: '#ffff' }}
                  />
                </ListItemDecorator>
                <ListItemContent sx={{ color: '#fff' }}>More</ListItemContent>
              </ListItem>
            </List>
            <List
              sx={{
                display: 'flex',
                gap: '16px',
                alignItems: 'center',
                justifyContent: 'end',
              }}
            >
              <ListItem>
                <ListItemDecorator>
                  <AddCircle
                    sx={{ width: '36px', height: '36px', color: '#ffff' }}
                  />
                </ListItemDecorator>
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <span className='h-[36px] w-[36px] border-2 text-white'></span>
                </ListItemDecorator>
              </ListItem>
            </List>
          </Stack>
          <Stack
            sx={{
              p: '0 0 20px 4px',
              maxHeight: 'calc(100vh-44px)',
              borderRadius: '6px',
              height: '100%',
              bgcolor: '#1212138c',
              display: 'grid',
              gridTemplateColumns: '227px auto',
              overflow: 'hidden',
            }}
          >
            <Stack sx={{ display: 'flex' }}>
              <Stack
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexGrow: 0,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '18px',
                  p: '0 8px 0 12px',
                  gap: 4,
                  minHeight: '49px',
                  borderBottom: '1px solid #49254a',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '18px',
                    color: '#ffff',
                    maxWidth: '100%',
                    fontWeight: 900,
                  }}
                >
                  Name
                </Typography>
                <List
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginLeft: 'auto',
                    gap: 2,
                    justifyContent: 'flex-end',
                  }}
                >
                  <ListItem
                    sx={{
                      height: '36px',
                      width: '36px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ListItemButton>
                      <ListItemDecorator>
                        <span className='h-[18px] w-[18px] border-2 text-white'></span>
                      </ListItemDecorator>
                    </ListItemButton>
                  </ListItem>
                  <ListItem sx={{ height: '36px', width: '36px' }}>
                    <ListItemButton>
                      <ListItemDecorator>
                        <span className='h-[18px] w-[18px] border-2 text-white'></span>
                      </ListItemDecorator>
                    </ListItemButton>
                  </ListItem>
                </List>
              </Stack>
              <Stack sx={{ px: '24px' }}>
                <List>
                  <ListItem sx={{ height: '28px' }}>
                    <ListItemButton>
                      <ListItemDecorator>
                        <span className='h-[18px] w-[18px] border-2 text-white'></span>
                      </ListItemDecorator>
                      <ListItemContent
                        sx={{ fontSize: '15px !important', color: '#ffff' }}
                      >
                        Threads
                      </ListItemContent>
                    </ListItemButton>
                  </ListItem>
                  <ListItem sx={{ height: '28px' }}>
                    <ListItemButton>
                      <ListItemDecorator>
                        <span className='h-[18px] w-[18px] border-2 text-white'></span>
                      </ListItemDecorator>
                      <ListItemContent
                        sx={{ fontSize: '15px !important', color: '#ffff' }}
                      >
                        Drafts & sent
                      </ListItemContent>
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>
                      <ListItemDecorator>
                        <ArrowRight
                          sx={{ height: '18px', width: '18px', color: '#ffff' }}
                        />
                      </ListItemDecorator>
                      <ListItemContent
                        sx={{ fontSize: '15px !important', color: '#ffff' }}
                      >
                        Channels
                      </ListItemContent>
                    </ListItemButton>
                  </ListItem>
                  <ListItem sx={{ height: '28px' }}>
                    <ListItemButton>
                      <ListItemDecorator>
                        <Tag
                          sx={{ height: '18px', width: '18px', color: '#ffff' }}
                        />
                      </ListItemDecorator>
                      <ListItemContent
                        sx={{ fontSize: '15px !important', color: '#ffff' }}
                      >
                        getting-started
                      </ListItemContent>
                    </ListItemButton>
                  </ListItem>
                  <ListItem sx={{ height: '28px' }}>
                    <ListItemButton>
                      <ListItemDecorator>
                        <ArrowRight
                          sx={{ height: '18px', width: '18px', color: '#ffff' }}
                        />
                      </ListItemDecorator>
                      <ListItemContent
                        sx={{ fontSize: '15px !important', color: '#ffff' }}
                      >
                        Direct messages
                      </ListItemContent>
                    </ListItemButton>
                  </ListItem>
                  <ListItem sx={{ height: '28px' }}>
                    <ListItemButton>
                      <ListItemDecorator>
                        <ArrowRight
                          sx={{ height: '18px', width: '18px', color: '#ffff' }}
                        />
                      </ListItemDecorator>
                      <ListItemContent
                        sx={{ fontSize: '15px !important', color: '#ffff' }}
                      >
                        Apps
                      </ListItemContent>
                    </ListItemButton>
                  </ListItem>
                </List>
              </Stack>
            </Stack>
            <Stack sx={{ bgcolor: '#ffff' }}></Stack>
          </Stack>
        </Stack>
      </Sheet>
    </Box>
  )
}

export default Slack
