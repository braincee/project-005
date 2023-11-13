import { ForwardOutlined } from '@mui/icons-material'
import { Box, Sheet, Stack } from '@mui/joy'
import Image from 'next/image'

const Telegram = () => {
    return (
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
                }}
            >
                <Stack
                    sx={{
                        position: 'relative',
                        opacity: 1,
                        marginBottom: '10px',
                        display: 'flex',
                        maxWidth: '464px',
                        bgcolor: '#fff',
                        borderRadius: '6px 15px 15px 6px',
                    }}
                >
                    <Stack
                        sx={{
                            transform: 'scale(1) translateX(0)',
                            opacity: 1,
                            transition: '200ms ease-out',
                        }}
                    >
                        <Stack
                            sx={{
                                padding: '5px 8px 6px',
                                borderRadius: '6px 15px 15px 6px',
                                position: 'relative',
                                maxWidth: '464px',
                                boxShadow: '0 1px 2px',
                            }}
                        >
                            <Stack
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    lineHeight: '20px',
                                    color: '#a695e7',
                                }}
                            >
                                <ForwardOutlined color="primary" />
                                <span className="flex items-center">Chris</span>
                            </Stack>
                            <Stack
                                sx={{
                                    marginTop: '4px',
                                    paddingLeft: '10px',
                                    borderRadius: '4px',
                                    position: 'relative',
                                    minWidth: 0,
                                    '::before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        bottom: 0,
                                        left: '1px',
                                        width: '2px',
                                        bgcolor: '#3390ec',
                                        borderRadius: '2px',
                                    },
                                }}
                            >
                                <Stack
                                    sx={{
                                        height: {
                                            xs: '107px',
                                            sm: '211px',
                                        },
                                        borderBottomLeftRadius: 0,
                                        borderBottomRightRadius: 0,
                                        borderTopRightRadius: '6px',
                                        borderTopLeftRadius: '6px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginBottom: '4px',
                                        position: 'relative',
                                        overflow: 'hidden',
                                    }}
                                >
                                    <Image
                                        className="h-full w-full block object-cover"
                                        src={TelegramImage}
                                        alt="Message Image"
                                    />
                                    <canvas className="h-full w-full block object-cover opacity-0 top-o left-0 absolute aspect-[auto_40/19]"></canvas>
                                </Stack>
                                <Stack
                                    sx={{
                                        margin: 0,
                                        wordBreak: 'break-word',
                                        position: 'relative',
                                        borderRadius: '4px',
                                        lineHeight: 1.3125,
                                        color: '#000000',
                                        fontFamily: 'Roboto',
                                    }}
                                >
                                    <p className="mb-[30px] p-0 m-0">MANAGE</p>
                                    <span className="m-0 p-0">
                                        Finish the manage users function. The data on the manage
                                        page is static, not taken from DB. The users table needs an
                                        email column and the function adds users to the table. Read
                                        the brief and messages carefully.
                                    </span>
                                    <span className="relative top-[6px] !bottom-[auto] flex items-center justify-end right-0 p-[0_4px] leading-[1.35] h-[16px] ms-[7px] me-[-8px] text-[#686c72bf]">
                                        <span className="me-[3px] text-[12px]">7:01</span>
                                    </span>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Sheet>
        </Box>
    )
}

export default TelegramMessage
