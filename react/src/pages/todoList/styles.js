import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1250px;
    margin: 40px auto;
`

export const ContainerForm = styled.form`
    display:flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    padding-top: 13px;

    button {
        height: 40px;
        background-color: #F0A643;
        color: #fff;
        font-size: 18px;
        border-radius: 6px;
        margin-top:8px;
        width: 100px;
    }
`

export const ContainerAllTodos = styled.div`
    margin: 60px auto;
    display: grid;
    max-width: 1250px;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;

    div {
        max-width: 250px;
        max-height: 300px;
        padding: 16px;
        font-size: 18px;
        background: #812BF0;
        color:#fff;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

        p {
            margin-top:6px;
        }

        button {
            width: 100px;
            height: 40px;
            background-color: #F0A643;
            color: #fff;
            font-size: 18px;
            border-radius: 6px;
            margin-top:8px;
        }
    }
`