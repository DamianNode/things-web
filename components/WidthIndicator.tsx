import { styled } from '@stitches/react';

const StyledWidthIndicator = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '20px', 
  backgroundColor: 'transparent',
  height: 'calc(100% - 60px)',

  '&:hover': {
    'div': {
      backgroundColor: '#DFE3E8',
    }
  },

  'div': {
    width: '50%',
    height: '50px',
    backgroundColor: 'transparent',
    borderRadius: '5px',
  }
});

const StyledWidthIndicatorFooter = styled('div', {
  width: '20px',
  height: '60px',
  borderTop: '2px solid #F0F1F3',
});

const WidthIndicator = () => {
  return (
    <div>
      <StyledWidthIndicator>
        <div />
      </StyledWidthIndicator>
      <StyledWidthIndicatorFooter />
    </div>
  )
}

export default WidthIndicator;