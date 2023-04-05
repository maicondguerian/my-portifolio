import React from 'react'
import styled from 'styled-components'

const ModalWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    right:0;
    bottom:0;
`
const StyledOverlay = styled.div`
    background-color: rgba(0, 0, 0, .05);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
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
                <Overlay>
                    <ModalWrapper>
                        testeboy
                    </ModalWrapper>
                </Overlay>
            )}
        </>
  )
}
