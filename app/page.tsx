import Discord from '@/components/Discord'
import Slack from '@/components/Slack'
import Telegram from '@/components/Telegram'
import ModeToggle from '@/libs/ModeToggle'
import { Box } from '@mui/joy'

export default function Home() {
    return (
        <main>
            <ModeToggle />
            <Box
                sx={{ display: 'flex', flexDirection: 'column', gap: 5, backgroundColor: 'green' }}
            >
                <Slack />
                <Telegram />
                <Discord />
            </Box>
        </main>
    )
}
