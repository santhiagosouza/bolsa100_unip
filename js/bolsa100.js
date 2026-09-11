/**
 * Lógica Principal da Landing Page da Campanha Bolsa 100% UNIP EAD
 * Foco 100% em conversão e direcionamento para o WhatsApp
 */

function initBolsa100App() {
  let currentCoursesLimit = 9;
  let currentActiveFilteredSet = null;
  let selectedCourseForWhatsapp = null;

  // Renderizações Iniciais
  renderCourses();
  setupFiltersAndSearch();
  populateWhatsappPoloDropdown();

  // Event Listeners Globais para Abertura do Modal de Polo do WhatsApp
  document.querySelectorAll('[data-open-whatsapp-polo]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const courseId = btn.getAttribute('data-course-id');
      if (courseId && typeof UNIP_DATA !== 'undefined' && UNIP_DATA.cursos) {
        selectedCourseForWhatsapp = UNIP_DATA.cursos.find(c => c.id == courseId) || null;
      } else {
        selectedCourseForWhatsapp = null;
      }
      openWhatsappPoloModal();
    });
  });

  // Fechar Modal
  document.getElementById('closeWaModalBtn')?.addEventListener('click', closeWhatsappPoloModal);
  document.getElementById('whatsappPoloModalOverlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'whatsappPoloModalOverlay') closeWhatsappPoloModal();
  });

  // Envio Formulario WhatsApp
  document.getElementById('waPoloSubmitBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    handleWhatsappPoloSubmit();
  });

  /* ==========================================================================
     FUNÇÕES DE RENDERIZAÇÃO DE CURSOS
     ========================================================================== */

  function renderCourses(filteredCourses = null, resetLimit = false) {
    const container = document.getElementById('coursesGrid');
    const countEl = document.getElementById('coursesCount');
    const seeMoreContainer = document.getElementById('seeMoreCoursesContainer');
    const seeMoreText = document.getElementById('seeMoreCoursesText');

    if (!container) return;

    if (!filteredCourses) {
      filteredCourses = (typeof UNIP_DATA !== 'undefined' && UNIP_DATA.cursos) ? UNIP_DATA.cursos : [];
    }

    currentActiveFilteredSet = filteredCourses;

    if (resetLimit) {
      currentCoursesLimit = 9;
    }

    if (countEl) {
      countEl.textContent = `${filteredCourses.length} cursos participantes`;
    }

    if (filteredCourses.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--color-bg-card); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
          <i class="material-icons" style="font-size: 3rem; color: var(--color-text-light);">search_off</i>
          <h4 style="margin-top: 1rem;">Nenhum curso encontrado para este filtro</h4>
          <p class="text-muted">Tente buscar por outro termo ou alterar a área do conhecimento.</p>
        </div>
      `;
      if (seeMoreContainer) seeMoreContainer.style.display = 'none';
      return;
    }

    const visibleCourses = filteredCourses.slice(0, currentCoursesLimit);

    container.innerHTML = visibleCourses.map(c => {
      return `
        <div class="course-card">
          <div>
            <div class="course-meta">
              <span class="badge badge-gold">${c.areaNome}</span>
              <span class="badge" style="background: #fef08a; color: #854d0e; font-weight: 700;"><i class="material-icons" style="font-size:0.75rem; vertical-align:middle;">star</i> Bolsa 100%</span>
            </div>
            <h3 class="course-title">${c.nome}</h3>
            <p class="course-desc">${c.descricao}</p>
          </div>
          <div>
            <div class="course-details-list">
              <div class="course-details-item"><i class="material-icons">schedule</i> ${c.duracao}</div>
              <div class="course-details-item"><i class="material-icons">laptop_mac</i> EAD 100% Online</div>
            </div>
            <div class="course-price-box" style="background: #fffbeb; border-left: 4px solid var(--color-accent); padding: 0.75rem; border-radius: 6px; margin-bottom: 1rem;">
              <div class="price-label" style="font-weight: 600; color: #92400e;">Concorra a Bolsa 100% de Desconto</div>
              <div class="price-value" style="font-size: 1.1rem; color: var(--color-primary);">Matrícula com Condição Especial</div>
            </div>
            <button class="btn btn-accent btn-block btn-bolsa-cta" data-open-whatsapp-polo data-course-id="${c.id}">
              <i class="material-icons">chat</i> Quero Bolsa 100% no WhatsApp
            </button>
          </div>
        </div>
      `;
    }).join('');

    if (seeMoreContainer) {
      const remainingCount = filteredCourses.length - visibleCourses.length;
      if (remainingCount > 0) {
        seeMoreContainer.style.display = 'block';
        if (seeMoreText) {
          seeMoreText.textContent = `Ver Mais Cursos (+${remainingCount} opções)`;
        }
      } else {
        seeMoreContainer.style.display = 'none';
      }
    }

    // Re-attach event listeners
    container.querySelectorAll('[data-open-whatsapp-polo]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const courseId = btn.getAttribute('data-course-id');
        if (courseId && typeof UNIP_DATA !== 'undefined' && UNIP_DATA.cursos) {
          selectedCourseForWhatsapp = UNIP_DATA.cursos.find(c => c.id == courseId) || null;
        } else {
          selectedCourseForWhatsapp = null;
        }
        openWhatsappPoloModal();
      });
    });
  }

  window.handleSeeMoreCourses = function() {
    currentCoursesLimit += 9;
    renderCourses(currentActiveFilteredSet, false);
  };

  function setupFiltersAndSearch() {
    const searchInput = document.getElementById('searchCourseInput');
    const areaSelect = document.getElementById('filterAreaSelect');

    function applyFilters() {
      const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
      const selectedArea = areaSelect ? areaSelect.value : 'all';

      const results = UNIP_DATA.cursos.filter(course => {
        const matchesTerm = course.nome.toLowerCase().includes(searchTerm) || 
                            course.descricao.toLowerCase().includes(searchTerm);
        const matchesArea = selectedArea === 'all' || course.area === selectedArea;
        return matchesTerm && matchesArea;
      });

      renderCourses(results, true);
    }

    if (searchInput) searchInput.addEventListener('input', applyFilters);
    if (areaSelect) areaSelect.addEventListener('change', applyFilters);
  }

  /* ==========================================================================
     SISTEMA DE POPUP E SELEÇÃO DE POLO NO WHATSAPP
     ========================================================================== */

  function openWhatsappPoloModal() {
    const overlay = document.getElementById('whatsappPoloModalOverlay');
    if (!overlay) return;
    populateWhatsappPoloDropdown();
    
    // Atualizar subtítulo do modal se houver curso selecionado
    const modalSubtitle = document.getElementById('waModalSubtitle');
    if (modalSubtitle) {
      if (selectedCourseForWhatsapp) {
        modalSubtitle.innerHTML = `Você selecionou: <strong>${selectedCourseForWhatsapp.nome}</strong>. Selecione sua cidade/polo para atendimento direto via WhatsApp:`;
      } else {
        modalSubtitle.textContent = 'Selecione sua cidade ou polo mais próximo para garantir sua vaga e concorrer à Bolsa 100%:';
      }
    }

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeWhatsappPoloModal() {
    const overlay = document.getElementById('whatsappPoloModalOverlay');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function populateWhatsappPoloDropdown() {
    const select = document.getElementById('waPoloSelect');
    if (!select) return;

    const polos = (typeof UNIP_DATA !== 'undefined' && UNIP_DATA.polosDetalhes) ? UNIP_DATA.polosDetalhes : [
      { id: 'horizonte', nome: 'Polo Horizonte / EAD', cidade: 'Horizonte - CE', phone: '5585999999999' }
    ];

    select.innerHTML = `
      <option value="">-- Selecione sua cidade ou polo --</option>
      ${polos.map(p => `<option value="${p.id}">${p.cidade} - ${p.nome}</option>`).join('')}
    `;
  }

  function handleWhatsappPoloSubmit() {
    const select = document.getElementById('waPoloSelect');
    const selectedId = select ? select.value : '';

    if (!selectedId) {
      alert('Por favor, selecione sua cidade ou polo na lista antes de continuar.');
      return;
    }

    const polos = UNIP_DATA.polosDetalhes || [];
    const polo = polos.find(p => p.id === selectedId) || {
      nome: 'Polo UNIP EAD',
      cidade: 'Horizonte',
      phone: '5585999999999'
    };

    let customMessage = `Olá! Quero aproveitar a Promoção Bolsa 100% da UNIP EAD.`;
    if (selectedCourseForWhatsapp) {
      customMessage += ` Tenho interesse no curso de ${selectedCourseForWhatsapp.nome}. Como faço minha inscrição?`;
    } else {
      customMessage += ` Gostaria de saber quais cursos estão disponíveis e como garantir minha vaga!`;
    }

    // Tracking GTM
    trackWhatsappBolsa100Click(polo.id, polo.nome, polo.cidade, selectedCourseForWhatsapp ? selectedCourseForWhatsapp.nome : 'Geral');

    const waPhone = polo.phone || '5585999999999';
    const waUrl = polo.waUrl ? `${polo.waUrl}&text=${encodeURIComponent(customMessage)}` : `https://api.whatsapp.com/send?phone=${waPhone}&text=${encodeURIComponent(customMessage)}`;
    
    window.open(waUrl, '_blank', 'noopener');
    closeWhatsappPoloModal();
  }

  function trackWhatsappBolsa100Click(poloId, poloNome, cidade, cursoNome) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'whatsapp_bolsa100_click',
      'event_category': 'Bolsa 100% Lead',
      'event_action': 'Clique WhatsApp Bolsa 100%',
      'event_label': `${poloNome} - ${cursoNome}`,
      'polo_id': poloId,
      'polo_name': poloNome,
      'lead_city': cidade,
      'course_name': cursoNome
    });
  }
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  initBolsa100App();
} else {
  document.addEventListener('DOMContentLoaded', initBolsa100App);
}
