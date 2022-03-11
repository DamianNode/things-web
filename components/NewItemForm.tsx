import { styled } from "@stitches/react";

const StyledNewItemForm = styled('div', {
  width: '400px',
  height: '200px',
  borderRadius: '20px',
  backgroundColor: 'white',
})

const NewItemForm = ({show, children}: {show: boolean, children?: any}) => {
  return (
    <StyledNewItemForm style={{ display: show ? 'block' : 'none' }}>
      {children}
    </StyledNewItemForm>
  )
}

export default NewItemForm;