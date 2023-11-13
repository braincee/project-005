import MessageImage from '@/public/drizzle-image.jpeg'
import { ArrowDropDown, Close } from '@mui/icons-material'
import { Avatar, Box, Button, IconButton, Sheet, Stack } from '@mui/joy'
import Image from 'next/image'
import Link from 'next/link'

const Slack = () => {
    return (
        <Box sx={{ py: '20px', backgroundColor: 'red' }}>
            <Sheet>
                <Stack
                    sx={{
                        padding: '8px 20px',
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <Stack sx={{ display: 'flex', flexShrink: 0, marginRight: '8px' }}>
                        <span>
                            <Avatar />
                        </span>
                    </Stack>
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
                            <Button
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
                                Username
                            </Button>

                            <span className="text-[12px]">5:00 PM</span>
                        </Stack>
                        <Stack
                            sx={{
                                marginBottom: '4px',
                                width: '100%',
                            }}
                        >
                            <Link href="https://youtu.be/d7XJjQesDtE?si=9e_h2Tu_EEFZGBUu">
                                https://youtu.be/d7XJjQesDtE?si=9e_h2Tu_EEFZGBUu
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
                            <span className="top-0 bottom-0 left-[-20px] absolute w-[20px]">
                                <IconButton
                                    sx={{
                                        p: 0,
                                        m: 0,
                                        minWidth: 'fit-content',
                                        minHeight: 'fit-content',
                                    }}
                                    variant="plain"
                                >
                                    <Close sx={{ width: '20px' }} />
                                </IconButton>
                            </span>
                            <span className="rounded-lg w-[4px] shrink-0 bg-[#dddddd]"></span>
                            <Stack
                                sx={{
                                    flex: '1 1 0',
                                    p: '0 12px',
                                    wordWrap: 'break-word',
                                    width: '100%',
                                }}
                            >
                                <div className="flex gap-2 text-[15px] leading-[1.46668]">
                                    <span className="flex items-cente">
                                        <span className="bg-[#f2606a] w-[16px] h-[16px] rounded-sm me-[8px] mb-[3px] border-1 border-[#0000]"></span>
                                        <span className="font-black ">YouTube</span>
                                    </span>
                                    <span className="w-[2px] h-full bg-[#dddddd]"></span>
                                    <span>Dave Gray</span>
                                </div>
                                <span className="font-bold text-[15px] leading-[1.46668]">
                                    <Link href="#">
                                        Build a Random Quote Machine with Nextjs, PlanetScale MySQL,
                                        & Drizzle ORM
                                    </Link>
                                    <IconButton
                                        sx={{
                                            p: 0,
                                            m: 0,
                                            minWidth: 'fit-content',
                                            minHeight: 'fit-content',
                                            display: 'inline-block',
                                        }}
                                    >
                                        <ArrowDropDown sx={{ color: '#0b6bcb' }} />
                                    </IconButton>
                                </span>
                                <Stack
                                    sx={{
                                        width: '360px',
                                        position: 'relative',
                                        maxWidth: '100%',
                                        marginTop: '5px',
                                    }}
                                >
                                    <div className="pt-[75%] relative">
                                        <div className="h-[100%] left-0 top-0 absolute">
                                            <Image src={MessageImage} alt="Message Video" />
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

export default SlackMessage
