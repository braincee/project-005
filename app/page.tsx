import SlackMessage from '@/components/SlackMessage'
import TelegramMessage from '@/components/TelegramMessage'
import { Box } from '@mui/joy'

export default function Home() {
  return (
    <main>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        <SlackMessage />
        <TelegramMessage />
      </Box>
    </main>
  )
}
