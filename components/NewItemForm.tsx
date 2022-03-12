import { styled } from "@stitches/react";
import { motion } from "framer-motion";

const StyledNewItemForm = styled(motion.div, {
  width: '400px',
  height: '200px',
  borderRadius: '8px',
  backgroundColor: 'white',
})

const NewItemForm = ({children}: {children?: HTMLElement}) => {
  return (
    <StyledNewItemForm>
      {children}
    </StyledNewItemForm>
  )
}

export default NewItemForm;