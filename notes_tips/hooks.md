# memo
  Quando o componente pai renderizar, antes dos componentes filhos entrarem no fluxo de renderização(recriar uma versão da DOM do componente), faz uma comparação dos estados e propriedades do componente e caso não ache uma mudança não entra no fluxo.

  - Ainda sim esse calculo de comparação é custoso, então não é recomendado usar o memo em todos os componentes!

### 📝 Quando usar o memo: 
  1. Pure functional component: dado as mesmas propriedades o retorno sempre será o mesmo (ele retorn o que entregamos de propriedades);<br> <br>
  2. Renders too often: Quando um componente renderizar muitas vezes;<br> <br>
  3. Re-renders with same props: Quando um componente renderiza várias vezes e sempre com as mesmas propriedades;<br> <br>
  4. Medium to big size Component: Evitar usar em componentes simples ou pequenos


<br>

# useMemo
Evitar recalcular funções complexas no momento da renderização do componente. A função só será executado novamente caso uma de suas dependências tenha sido alterada

### 📝 Quando usar o memo: 
1. Shallow Compare(comparação rasa): compara prop anterior com atual para entrar no fluxo de renderização

# useCallback

Memoriza uma função dentro do espaço da memória, para que quando componente renderize, não precise recriar aquela função

Faz uma comparação uma função ocupada o mesmo espaço na memória

Resolver problemas de igualdade referencial(toda vez que um componente é renderizado, a função ou objetos ocupam espaço de memória diferentes)

### 📝 Quando usar o useCallback: 
1. Quando uma função é repassada para outro componente
2. Função de context, pois a função será usada em mais de um componente