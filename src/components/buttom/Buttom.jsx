import * as S  from "../../styles/globalStyles"


export const Buttom = ({ bgColor, fColor, buttonName='customName', fSize, onClick=()=>{},Icon }) => {
    return (
        <>
            <S.StyledButton bgColor={bgColor} fColor={fColor} fSize={fSize} onClick={onClick}>
                {buttonName}
                {Icon? <Icon /> : null}
            </S.StyledButton>
        </>
    )
}
