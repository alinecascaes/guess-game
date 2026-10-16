# Guess Game

Jogo da adivinhação de palavras. A cada partida uma palavra é sorteada com sua dica e o jogador descobre letra a letra dentro de um limite de tentativas.

## Funcionalidades

- Sorteio aleatório de palavras com dica
- Limite de tentativas dinâmico (tamanho da palavra + 3)
- Bloqueio de letras repetidas
- Feedback visual de acertos e erros
- Vitória, derrota e reinício automático

## Decisões Técnicas

- Todo o estado do jogo centralizado no `App` com `useState`; componentes presentacionais
- **CSS Modules** por componente
- Pontuação por ocorrência das letras, tratando palavras com letras repetidas
- Vitória e derrota derivadas do estado via `useEffect`
- Palavras e dicas em lista tipada (`utils/words.ts`)

## Tecnologias

- React
- TypeScript
- Vite
- CSS Modules

## Como rodar o projeto

- `npm install`
- `npm run dev`

## Resultados
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/7351718e-510a-4988-985f-5c73254957e1" />

## Links Úteis

- [Deploy](https://guess-game-chi-hazel.vercel.app/)
- [GitHub](https://github.com/alinecascaes/guess-game)
- [LinkedIn](https://www.linkedin.com/in/alinecascaes/)
