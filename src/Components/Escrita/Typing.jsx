import React from 'react'
import Typical from 'react-typical'

function Typing() {
  return (
    <Typical
      steps={[
        'Eu sou Engenheiro de Controle e Automacao', 9000,
        'Eu sou Quase Casado', 5000,
        'Eu sou Engenheiro Mecatronico', 7000,
        'Eu estou em busca por conhecimento', 8000,
        'Eu sou Desenvolvedor Software', 7000,
      ]}
      loop={Infinity}
      wrapper="p"
    />
  )
}

export default Typing;