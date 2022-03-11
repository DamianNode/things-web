import { MagnifyingGlassIcon, PlusIcon } from '@radix-ui/react-icons';
import { styled } from '@stitches/react';
import { useState } from 'react';
import NewItemForm from './NewItemForm';


const StyledMainView = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 'auto',
  height: '100%',
  padding: '32px',
});

const StyledMainViewFooter = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'calc(100% + 64px)',
  height: '60px',
  borderTop: '2px solid #F0F1F3',
  margin: '0 -32px -32px -32px',
  padding: '0 32px',
});

const StyledMainViewFooterButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  height: '40px',
  margin: '0 16px',
  padding: '4px 40px',
  backgroundColor: 'inherit',
  border: '1px solid transparent',
  borderRadius: '4px',

  '&:hover': {
    borderColor: '#DDE0E6',
  }
})

const MainView = () => {
  const [showNewItemForm, setShowNewItemForm] = useState(false);

  return (
    <StyledMainView style={{ backgroundColor:  showNewItemForm ? '#F9F9FA' : 'white' }}>
      <NewItemForm show={showNewItemForm} />
      MAIN
      <StyledMainViewFooter>
        <StyledMainViewFooterButton onClick={() => setShowNewItemForm(!showNewItemForm)}>
          <PlusIcon width="20" height="20" />
        </StyledMainViewFooterButton>
        <StyledMainViewFooterButton>
          <MagnifyingGlassIcon width="20" height="20" />
        </StyledMainViewFooterButton>
      </StyledMainViewFooter>
    </StyledMainView>
  )
}

export default MainView;