
import { Components } from '@mui/material/styles'

export const MuiCard: Components['MuiCard'] = {
  styleOverrides: {
    root: {
      borderRadius: '24px',
      padding: '40px 20px',
      background: '#1c1c1c',
      '&.carousel': {
        height: '400px',
        // width: '250px'
      },
    },
  },
}
