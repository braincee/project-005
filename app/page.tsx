import SlackMessage from '@/components/SlackMessage'
import TelegramMessage from '@/components/TelegramMessage'
import { Box } from '@mui/joy'
import DiscordMessage from '@/components/DiscordMessage'
import ModeToggle from '@/components/ModeToggle'

export default function Home() {
  return (
    <main>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        <ModeToggle />
        <SlackMessage />
        <TelegramMessage />
        <DiscordMessage />
      </Box>
    </main>
  )
}
