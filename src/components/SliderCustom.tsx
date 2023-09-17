import Slider, { SliderProps } from '@mui/material/Slider'
import { styled, alpha } from '@mui/material/styles'

const SucessSlide = styled(Slider)<SliderProps>(({ theme }) => ({
  // color: theme.palette.secondary.main,
  // color: theme.palette.secondary.main,
  '& .MuiSlider-thumb': {
    '&:hover': {
      boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
      color: theme.palette.secondary.main,
      borderRadius: '0px',
      transition: '1s',
    },
    // '&.Mui-active': {
    //   boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
    //   color: theme.palette.secondary.main,
    // },
  },
  // '&.Mui-disabled': {
  //   color: theme.palette.action.disabled,
  // },
}))

const SliderCustom = () => {
  return <SucessSlide />
}

export default SliderCustom
