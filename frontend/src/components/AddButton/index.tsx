import * as S from "./style"

export function AddButton(props){
  return (
    <S.AddButtonContainer type="submit" {...props}>
      {props.text}
    </S.AddButtonContainer>
  )
}