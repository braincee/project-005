import { Person } from '@mui/icons-material'
import { Box, Button, Stack } from '@mui/joy'

const Slack = (props: { textColor: string }) => {
  const { textColor } = props
  return (
    <Box
      sx={{
        padding: '8px 20px',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Stack sx={{ display: 'flex', flexShrink: 0, marginRight: '8px' }}>
        <span
          style={{
            display: 'inline-flex',
            width: 'fit-content',
            height: 'fit-content',
          }}
        >
          <span
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '4px',
              backgroundColor: textColor === '#FFFFFF' ? 'white' : '#1d1c1d21',
            }}
          >
            <Person sx={{ color: textColor === '#FFFFFF' ? '' : 'black' }} />
          </span>
        </span>
      </Stack>
      <Stack
        sx={{
          flex: '1 1 0',
          margin: '-12px -8px -16px -16px',
          minWidth: 0,
          padding: '8px 8px 8px 16px',
          fontFamily: 'Lato san-serif',
          lineHeight: 1.46668,
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
              color: textColor === '#FFFFFF' ? '#fff' : '#1d1c1d',
            }}
          >
            username
          </Button>

          <span
            style={{
              fontSize: '12px',
              color: textColor === '#FFFFFF' ? '#fff' : '#616061',
            }}
          >
            5:00 PM
          </span>
        </Stack>
        <Stack
          sx={{
            fontSize: '15px',
            lineHeight: 1.46668,
            textAlign: 'left',
            userSelect: 'text',
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Contrary to popular belief, Lorem
          Ipsum is not simply random text. It has roots in a piece of classical
          Latin literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin words, consectetur, from a
          Lorem Ipsum passage, and going through the cites of the word in
          classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
          Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
          This book is a treatise on the theory of ethics, very popular during
          the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
          amet..", comes from a line in section 1.10.32.
        </Stack>
      </Stack>
    </Box>
  )
}

export default Slack
