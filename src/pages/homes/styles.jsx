import { styled } from "styled-components"

export const AddButton= styled.button `
    background:#6cf000;
    color:#ffffff;
    heigth:35px;
    padding:5px 10px;
    cursor:pointer;
    border:none;
    border-radius:5px;
    margin-left:10px;
    &:hover{
        opacity:0.8;
    }
     
    `
export const Contanaier=styled.div `
        background:#b752ff;
        padding:20px;
        border-radius:10px;

        h1{
            color:#ffff
        }
        input{
            heigth:35px;
            border-radius:5px;
            border:none;
            margin-tp:30px;
            outline:none;
            padding-left:10px;
        }

`

export const Produto=styled.div `
        display:flex;
        justify-content:space-between;
        heith:40px;
        align-items:center;
        background:#fff;
        border-radius:5px;
        margin-top:15px;
        padding:0 10px;

        p{
            text-transform:capitalize;
            font-weight:bold;
        }


`
export const TrasButton=styled.button `
    background:transparent;
    border:none;
    cursor:pointer;
    font-size:20px;

`