// Classe principal que resolve o problema dos Comediantes Antigos
class AncientComediansSolver {
  constructor() {
    // Inicializa os elementos da interface e configura os eventos
    this.initializeElements();
    this.attachEventListeners();
  }

  // Inicializa referências aos elementos do DOM
  initializeElements() {
    this.pointsInput = document.getElementById('pointsInput'); // Input para número de pontos (P)
    this.routesInput = document.getElementById('routesInput'); // Input para número de rotas (Q)
    this.routeDetailsInput = document.getElementById('routeDetailsInput'); // Textarea para detalhes das rotas
    this.calculateBtn = document.getElementById('calculateBtn'); // Botão de calcular
    this.returnBtn = document.getElementById('returnBtn'); // Botão de retornar
    this.resultSection = document.getElementById('resultSection'); // Seção de resultados
    this.resultContent = document.getElementById('resultContent'); // Conteúdo dos resultados
  }

  // Configura os event listeners para os botões
  attachEventListeners() {
    this.calculateBtn.addEventListener('click', () => this.calculateResults());
    this.returnBtn.addEventListener('click', () => this.returnToInitialState());
  }

  // Calcula os resultados baseados nos inputs do usuário
  calculateResults() {
    try {
      // Parse dos valores de entrada
      const points = parseInt(this.pointsInput.value, 10); // Número de pontos (P)
      const routes = parseInt(this.routesInput.value, 10); // Número de rotas (Q)
      const routeDetails = this.routeDetailsInput.value.trim(); // Detalhes das rotas

      // Validações básicas
      if (isNaN(points) || isNaN(routes)) {
        this.showError('Por favor, preencha corretamente os campos de pontos e rotas.');
        return;
      }

      if (!routeDetails) {
        this.showError('Por favor, insira os detalhes das rotas.');
        return;
      }

      // Processa a entrada e calcula o resultado
      const result = this.processInput(points, routes, routeDetails);
      this.displayResults(result);
    } catch (error) {
      this.showError(`Erro no processamento: ${error.message}`);
    }
  }

  /**
   * Processa a entrada e calcula o custo total usando Floyd-Warshall
   * @param {number} P - Número de pontos (cidades)
   * @param {number} Q - Número de rotas (arestas)
   * @param {string} routeDetails - Detalhes das rotas no formato "from,to,cost"
   * @returns {number} - Custo total de transporte
   */
  processInput(P, Q, routeDetails) {
    const INF = 1e9; // Valor representando infinito (distância muito grande)

    // Inicializa matriz de distâncias com INF
    const dist = Array(P + 1)
      .fill(null)
      .map(() => Array(P + 1).fill(INF));

    // Inicializa a diagonal principal com 0 (distância de um ponto para ele mesmo)
    for (let i = 1; i <= P; i++) {
      dist[i][i] = 0;
    }

    // Processa cada linha de detalhes das rotas
    const lines = routeDetails.split('\n').filter(line => line.trim() !== '');
    for (let line of lines) {
      const [from, to, cost] = line.split(',').map(Number);

      // Mantém o menor custo entre dois pontos (pode haver múltiplas rotas)
      dist[from][to] = Math.min(dist[from][to], cost);
    }

    // Algoritmo de Floyd-Warshall para encontrar os menores caminhos entre todos os pares
    for (let k = 1; k <= P; k++) {
      // Ponto intermediário
      for (let i = 1; i <= P; i++) {
        // Ponto de origem
        for (let j = 1; j <= P; j++) {
          // Ponto de destino
          // Atualiza a distância se passar pelo ponto k for mais curto
          dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
        }
      }
    }

    // Calcula o custo total: ida e volta para cada ponto (exceto o PVC - ponto 1)
    let totalCost = 0;
    for (let point = 1; point <= P; point++) {
      if (point !== 1) {
        // Ignorar o PVC (ponto 1) - custo de ida + volta para cada outro ponto
        const goingCost = dist[1][point]; // Custo da ida: PVC → ponto
        const returningCost = dist[point][1]; // Custo da volta: ponto → PVC
        totalCost += goingCost + returningCost;
      }
    }

    return totalCost;
  }

  // Exibe os resultados na interface
  displayResults(result) {
    let html = `<div class="final-result">
        <h4>✨ Custo Total de Transporte:</h4>
        <p>R$ ${result.toLocaleString('pt-BR')},00</p> <!-- Formatação em Real brasileiro -->
    </div>`;

    this.resultContent.innerHTML = html;
  }

  // Exibe mensagem de erro na interface
  showError(message) {
    this.resultContent.innerHTML = `
            <div class="error-message">
                <h4>❌ Erro</h4>
                <p>${message}</p>
                <p style="margin-top: 0.5rem; font-size: 0.9rem; opacity: 0.8;">
                    Verifique os dados de entrada.
                </p>
            </div>`;
  }

  // Retorna à tela inicial limpando os campos
  returnToInitialState() {
    this.pointsInput.value = '';
    this.routesInput.value = '';
    this.routeDetailsInput.value = '';
    this.resultContent.innerHTML = `
            <p class="instruction">Digite os dados e clique em CALCULAR para ver os resultados.</p>`;
    this.pointsInput.focus(); // Foca no primeiro campo
  }
}

// Inicializa a aplicação quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
  new AncientComediansSolver();

  // Foca automaticamente no campo de pontos após meio segundo
  const pointsInput = document.getElementById('pointsInput');
  if (pointsInput) {
    setTimeout(() => pointsInput.focus(), 500);
  }
});
