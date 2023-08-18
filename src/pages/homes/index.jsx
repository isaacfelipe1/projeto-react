import {useRef, useState} from 'react'
import {v4} from 'uuid'
import { AddButton,Contanaier,Produto,TrasButton} from './styles'
//react Hooks
//useRef
//useState/ estado -> é uma variavel, que toda vez que troca de valores
//a Tela irá "Recarregar os valores,"
function Home() {
  const [produtos, setProdutos]=useState([])
  const inpuRef=useRef()
  
  function cliqueiNoBotao() {
    setProdutos([
      {id:v4(),
        nome:inpuRef.current.value
      },...produtos])
      inpuRef.current.value=''
  }
  function deletarProduto(id) {
   setProdutos( produtos.filter(produto=>produto.id !==id))
  }

  return (
    <Contanaier>
      <h1>Lista de Compras</h1>
      <input placeholder="Produto..." ref={inpuRef} />
      <AddButton onClick={cliqueiNoBotao}> Adiconar</AddButton>
      {
        produtos.map(produto=>(
          <Produto key={produto.id}>
          <p>{produto.nome}</p>
          <TrasButton onClick={()=>deletarProduto(produto.id)}>🗑️</TrasButton>
          </Produto>
        ))
      }
    </Contanaier>
      
  )
}

export default Home
