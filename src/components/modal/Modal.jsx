import * as S from "../../styles/globalStyles"

const Overlay = ({children}) =>{
    return (
    <S.StyledOverlay>
        {children}
    </S.StyledOverlay>)
}

export const Modal = ({isOpen=false, children}) => {
    return (
        <>
            {isOpen &&(
                <div>
                    <Overlay>
                        {children}
                    </Overlay>
                </div>
            )}
        </>
  )
}
