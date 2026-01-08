// =====================================================
// DADOS DOS WRITEUPS
// Adicione seus writeups aqui seguindo o modelo abaixo
// =====================================================

const writeups = [
  {
    title: "Example Machine",
    platform: "htb", // htb, thm, ctf, bugbounty
    difficulty: "medium", // easy, medium, hard, insane
    description:
      "Descreva aqui o resumo do writeup. Inclua as principais técnicas utilizadas e o caminho para comprometer a máquina.",
    tags: ["Tag1", "Tag2", "Tag3", "Tag4"],
    date: "2025-01-07",
    pdf: "writeups/example-machine.pdf",
  },
  // Para adicionar mais writeups, copie o objeto acima e preencha os dados:
  // {
  //   title: "Nome da Máquina",
  //   platform: "htb",
  //   difficulty: "hard",
  //   description: "Descrição do writeup...",
  //   tags: ["SQLi", "PrivEsc", "Linux"],
  //   date: "2025-01-15",
  //   pdf: "writeups/nome-da-maquina.pdf"
  // },
]

// =====================================================
// FUNÇÕES DO SISTEMA (não precisa modificar)
// =====================================================

const platformNames = {
  htb: "HTB",
  thm: "THM",
  ctf: "CTF",
  bugbounty: "Bug Bounty",
}

const difficultyNames = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
  insane: "Insane",
}

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
}

function createWriteupCard(writeup) {
  return `
    <a href="${writeup.pdf}" target="_blank" rel="noopener noreferrer" class="writeup-card">
      <div class="card-header">
        <div class="card-badges">
          <span class="badge badge-${writeup.platform}">${platformNames[writeup.platform]}</span>
          <span class="badge badge-${writeup.difficulty}">${difficultyNames[writeup.difficulty]}</span>
        </div>
        <span class="card-date">${formatDate(writeup.date)}</span>
      </div>
      <h3 class="card-title">${writeup.title}</h3>
      <p class="card-description">${writeup.description}</p>
      <div class="card-tags">
        ${writeup.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
    </a>
  `
}

function renderWriteups(filteredWriteups) {
  const grid = document.getElementById("writeupsGrid")
  const emptyState = document.getElementById("emptyState")

  if (filteredWriteups.length === 0) {
    grid.innerHTML = ""
    emptyState.style.display = "block"
  } else {
    emptyState.style.display = "none"
    grid.innerHTML = filteredWriteups.map(createWriteupCard).join("")
  }
}

function filterWriteups() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase()
  const platform = document.getElementById("platformFilter").value
  const difficulty = document.getElementById("difficultyFilter").value

  const filtered = writeups.filter((writeup) => {
    const matchesSearch =
      writeup.title.toLowerCase().includes(searchTerm) ||
      writeup.description.toLowerCase().includes(searchTerm) ||
      writeup.tags.some((tag) => tag.toLowerCase().includes(searchTerm))

    const matchesPlatform = platform === "all" || writeup.platform === platform
    const matchesDifficulty = difficulty === "all" || writeup.difficulty === difficulty

    return matchesSearch && matchesPlatform && matchesDifficulty
  })

  // Ordenar por data (mais recente primeiro)
  filtered.sort((a, b) => new Date(b.date) - new Date(a.date))

  renderWriteups(filtered)
}

// Event Listeners
document.getElementById("searchInput").addEventListener("input", filterWriteups)
document.getElementById("platformFilter").addEventListener("change", filterWriteups)
document.getElementById("difficultyFilter").addEventListener("change", filterWriteups)

// Renderizar writeups iniciais
document.addEventListener("DOMContentLoaded", () => {
  filterWriteups()
})
