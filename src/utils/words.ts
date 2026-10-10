export type Challenge = {
  id: number
  word: string
  tip: string
}

export const WORDS: Challenge[] = [
  { id: 1, word: "CSS", tip: "Linguagem de estilos" },
  { id: 2, word: "REACT", tip: "Biblioteca para criar interfaces Web" },
  { id: 3, word: "HTML", tip: "Linguagem de marcação" },
  {
    id: 4,
    word: "Javascript",
    tip: "Uma das linguagens de programação mais utilizadas no mundo",
  },
  { id: 5, word: "Typescript", tip: "Para adicionar tipagem no Javascript" },
  { id: 6, word: "NODE", tip: "Ambiente de execução de Javascript no servidor" },
  { id: 7, word: "VITE", tip: "Ferramenta de build rápida para projetos Web" },
  { id: 8, word: "NEXT", tip: "Framework React com renderização no servidor" },
  { id: 9, word: "GIT", tip: "Sistema de controle de versão distribuído" },
  { id: 10, word: "DOCKER", tip: "Plataforma para criar e rodar containers" },
]
