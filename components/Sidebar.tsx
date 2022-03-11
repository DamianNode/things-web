import { PlusIcon } from '@radix-ui/react-icons';
import { styled } from '@stitches/react';
import { useState } from 'react';
import WidthIndicator from './WidthIndicator';

const StyledSidebar = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '20%',
  minWidth: '300px',
  height: '100%',
  backgroundColor: '#F5F6F8',
  color: '#31353A',
  padding: '32px',
  borderRight: '2px solid #F0F1F3',
});

const StyledSiderbarFooter = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: 'calc(100% + 64px)',
  height: '60px',
  borderTop: '2px solid #F0F1F3',
  margin: '0 -32px -32px -32px',
  padding: '0 32px',
});

const StyledFooterButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  height: '40px',
  padding: '4px 8px',
  backgroundColor: 'inherit',
  border: '1px solid transparent',
  borderRadius: '4px',

  '&:hover': {
    borderColor: '#DDE0E6',
  },
})

const StyledUl = styled('ul', {
  listStyle: 'none',
  padding: 0,
  margin: '32px 0',

  'li': {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '4px 8px',

    '&.active': {
      borderRadius: '4px',
      backgroundColor: '#DDE0E6',
    },

    'span': {
      color: '#8B9098',
    }
  }
});

const Sidebar = () => { 
  const [active, setActive] = useState('⭐️ Today');

  const elements = ['⭐️ Today', '🗓 Upcoming', '📌 Anytime', '📦 Someday'];

  return (
    <>
      <StyledSidebar>
        <div>
          <StyledUl>
            {elements.map(element => 
              <li key={element} className={element === active ? 'active': ''} onClick={() => setActive(element)}>
                {element}
              </li>
            )}
          </StyledUl>
          <StyledUl>
            <li>📗 Logbook</li>
            <li>🗑 Trash</li>
          </StyledUl>
        </div>
        <StyledSiderbarFooter>
          <StyledFooterButton>
            <PlusIcon width="20" height="20" />New List
          </StyledFooterButton>
        </StyledSiderbarFooter>
      </StyledSidebar>
      <WidthIndicator />
    </>
  )
}

export default Sidebar;