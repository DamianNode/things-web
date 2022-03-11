import { styled } from '@stitches/react';

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

const StyledUl = styled('ul', {
  listStyle: 'none',
  padding: 0,
  margin: '32px 0',

  'li': {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '4px',

    '&:hover': {
      borderRadius: '4px',
      backgroundColor: '#DDE0E6',
    },

    'span': {
      color: '#8B9098',
    }
  }
});

const Sidebar = () => { 
    return (
        <StyledSidebar>
          <div>
            <StyledUl>
              <li>⭐️ Today<span>21</span></li>
              <li>🗓 Upcoming</li>
              <li>📌 Anytime</li>
              <li>📦 Someday</li>
            </StyledUl>
            <StyledUl>
              <li>📗 Logbook</li>
              <li>🗑 Trash</li>
            </StyledUl>
          </div>
          <StyledSiderbarFooter>
            + New List
          </StyledSiderbarFooter>
        </StyledSidebar>
    )
}

export default Sidebar;