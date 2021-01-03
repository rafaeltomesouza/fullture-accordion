import styled, { css } from 'styled-components/native';

export const MobileStyle = () => ({
    DefinitionWrapper: styled.View`
        width:100%;
    `,
    DL: styled.View`
        margin: 0;
    `,
    DT: styled.TouchableOpacity`
        border: 1px solid #979797;
        font-weight: bold;
        margin: 3px 0 0 0;
        padding: 10px;
    `,
    DText: styled.Text`
        font-weight: bold;
    `,
    DD: styled.Text`
        border: 1px solid #A6A6A6;
        margin: 0;
        ${props => props.open && css`
            max-height: 240px;
            padding: 24px;
            overflow: visible;
            opacity: 1;
        `}
        ${props => !props.open && css`
            max-height: 0;
            opacity: 0;
            overflow: hidden;
            padding: 0;
        `}
    `,
    IconOpen: styled.Text`
        font-size: 20px;
        margin-right: 15px;
        ${props => !props.open && css`
            &:after {
                content: "+";
            }
        `}
        ${props => props.open && css`
            &:after {
                content: "-";
            }
        `}
    `
})
