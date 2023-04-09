import React from 'react'
import styled from 'styled-components'

const ModalWrapper = styled.div`

`
const StyledOverlay = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    display:flex;
    align-items:center;
    justify-content:center;
`

const Overlay = ({children}) =>{
    return (
    <StyledOverlay>
        {children}
    </StyledOverlay>)
}

export const Modal = ({isOpen=false, children}) => {
    return (
        <>
            {isOpen &&(
                <ModalWrapper>
                    <Overlay>
                        testeboy
                        {children}
                    </Overlay>
                </ModalWrapper>
            )}
        </>
  )
}
