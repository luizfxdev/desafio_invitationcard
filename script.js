class AncientComediansSolver {
  constructor() {
    this.initializeElements();
    this.attachEventListeners();
  }

  initializeElements() {
    this.pointsInput = document.getElementById('pointsInput');
    this.routesInput = document.getElementById('routesInput');
    this.routeDetailsInput = document.getElementById('routeDetailsInput');
    this.calculateBtn = document.getElementById('calculateBtn');
    this.returnBtn = document.getElementById('returnBtn');
    this.resultSection = document.getElementById('resultSection');
    this.resultContent = document.getElementById('resultContent');
  }

  attachEventListeners() {
    this.calculateBtn.addEventListener('click', () => this.calculateResults());
    this.returnBtn.addEventListener('click', () => this.returnToInitialState());
  }

  calculateResults() {
    try {
      const points = parseInt(this.pointsInput.value, 10);
      const routes = parseInt(this.routesInput.value, 10);
      const routeDetails = this.routeDetailsInput.value.trim();

      if (isNaN(points) || isNaN(routes)) {
        this.showError('Por favor, preencha corretamente os campos de pontos e rotas.');
        return;
      }

      if (!routeDetails) {
        this.showError('Por favor, insira os detalhes das rotas.');
        return;
      }

      const result = this.processInput(points, routes, routeDetails);
      this.displayResults(result);
    } catch (error) {
      this.showError(`Erro no processamento: ${error.message}`);
    }
  }

  processInput(P, Q, routeDetails) {
    const INF = 1e9;
    const dist = Array(P + 1)
      .fill(null)
      .map(() => Array(P + 1).fill(INF));

    // Inicializar distâncias
    for (let i = 1; i <= P; i++) {
      dist[i][i] = 0;
    }

    // Adicionar arestas
    const lines = routeDetails.split('\n').filter(line => line.trim() !== '');
    for (let line of lines) {
      const [from, to, cost] = line.split(',').map(Number);
      dist[from][to] = Math.min(dist[from][to], cost);
    }

    // Floyd-Warshall
    for (let k = 1; k <= P; k++) {
      for (let i = 1; i <= P; i++) {
        for (let j = 1; j <= P; j++) {
          dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
        }
      }
    }

    // Calcular custo total
    let totalCost = 0;
    for (let point = 1; point <= P; point++) {
      if (point !== 1) {
        // Ignorar o PVC (ponto 1)
        const goingCost = dist[1][point];
        const returningCost = dist[point][1];
        totalCost += goingCost + returningCost;
      }
    }

    return totalCost;
  }

  displayResults(result) {
    let html = `<div class="final-result">
        <h4>✨ Custo Total de Transporte:</h4>
        <p>R$ ${result.toLocaleString('pt-BR')},00</p>
    </div>`;

    this.resultContent.innerHTML = html;
  }

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

  returnToInitialState() {
    this.pointsInput.value = '';
    this.routesInput.value = '';
    this.routeDetailsInput.value = '';
    this.resultContent.innerHTML = `
            <p class="instruction">Digite os dados e clique em CALCULAR para ver os resultados.</p>`;
    this.pointsInput.focus();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new AncientComediansSolver();
  const pointsInput = document.getElementById('pointsInput');
  if (pointsInput) {
    setTimeout(() => pointsInput.focus(), 500);
  }
});
