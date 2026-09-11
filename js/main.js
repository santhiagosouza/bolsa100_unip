/**
 * Lógica Principal da Landing Page e Funil de Inscrição UNIP Pós
 */

function initApp() {
  // Variáveis de Controle do Catálogo de Cursos
  let currentCoursesLimit = 9;
  let currentActiveFilteredSet = null;

  // Estado Global da Inscrição
  const leadState = {
    step: 1,
    cursoId: null,
    cursoNome: '',
    area: '',
    modalidade: 'Pós EAD 100% Online',
    valorMensalidade: '',
    nome: '',
    email: '',
    whatsapp: '',
    cpf: '',
    cidade: '',
    polo: '',
    graducao: '',
    anoConclusao: ''
  };

  // 1. Inicializar Renderizações da Landing Page
  renderModalidades();
  renderCourses();
  renderFaqs();
  setupFiltersAndSearch();
  setupInputMasks();

  // 2. Event Listener de Abertura do Modal de Inscrição
  document.querySelectorAll('[data-open-funnel]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const courseId = btn.getAttribute('data-course-id');
      openFunnelModal(courseId, 'ead');
    });
  });

  // Modal Close
  document.getElementById('closeModalBtn')?.addEventListener('click', closeFunnelModal);
  document.getElementById('modalOverlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'modalOverlay') closeFunnelModal();
  });

  // Event Listeners de Navegação do Funil
  document.getElementById('nextStepBtn')?.addEventListener('click', handleNextStep);
  document.getElementById('prevStepBtn')?.addEventListener('click', handlePrevStep);

  // Dynamic Course Selection in Modal Step 2
  document.getElementById('inputCursoSelect')?.addEventListener('change', (e) => {
    const selectedId = parseInt(e.target.value, 10);
    const foundCourse = UNIP_DATA.cursos.find(c => c.id === selectedId);
    if (foundCourse) {
      leadState.cursoId = foundCourse.id;
      leadState.cursoNome = foundCourse.nome;
      leadState.area = foundCourse.areaNome;
      leadState.valorMensalidade = foundCourse.mensalidadePartir;
      updateModalitiesRadios(foundCourse);
    }
  });

  /* ==========================================================================
     FUNÇÕES DE RENDERIZAÇÃO DA LANDING PAGE
     ========================================================================== */

  function renderModalidades() {
    const container = document.getElementById('modalidadesGrid');
    if (!container) return;

    const eadPillars = [
      {
        icone: "laptop_mac",
        nome: "100% Online & Flexível",
        tagline: "Estude no seu Próprio Ritmo",
        descricao: "Acesse videoaulas HD, podcasts, e-books e materiais interativos 24 horas por dia de qualquer dispositivo."
      },
      {
        icone: "workspace_premium",
        nome: "Diploma Nota Máxima MEC",
        tagline: "Validade Nacional Garantida",
        descricao: "O mesmo diploma respeitado e valorizado do ensino presencial com o selo de tradição da UNIP."
      },
      {
        icone: "support_agent",
        nome: "Tutoria & Suporte Ativo",
        tagline: "Acompanhamento Contínuo",
        descricao: "Tire suas dúvidas diretamente com tutores acadêmicos e professores especialistas durante todo o curso."
      }
    ];

    container.innerHTML = eadPillars.map(m => `
      <div class="modalidade-card">
        <div class="modalidade-icon">
          <i class="material-icons">${m.icone}</i>
        </div>
        <h3>${m.nome}</h3>
        <div class="modalidade-tagline">${m.tagline}</div>
        <p>${m.descricao}</p>
        <button class="btn btn-outline btn-block" data-open-funnel>
          Inscrever-se na Pós EAD
        </button>
      </div>
    `).join('');
  }

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
      countEl.textContent = `${filteredCourses.length} cursos encontrados`;
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
      const modalitiesBadges = c.modalidades.map(mKey => {
        const mObj = UNIP_DATA.modalidades.find(m => m.id === mKey);
        return `<span class="badge badge-blue">${mObj ? mObj.nome : mKey}</span>`;
      }).join(' ');

      return `
        <div class="course-card">
          <div>
            <div class="course-meta">
              <span class="badge badge-gold">${c.areaNome}</span>
            </div>
            <h3 class="course-title">${c.nome}</h3>
            <p class="course-desc">${c.descricao}</p>
          </div>
          <div>
            <div class="course-details-list">
              <div class="course-details-item"><i class="material-icons">schedule</i> ${c.duracao}</div>
              <div class="course-details-item"><i class="material-icons">menu_book</i> ${c.cargaHoraria}</div>
            </div>
            <div style="margin-bottom: 0.75rem; display: flex; gap: 0.35rem; flex-wrap: wrap;">
              ${modalitiesBadges}
            </div>
            <div class="course-price-box">
              <div class="price-label">Mensalidades a partir de</div>
              <div class="price-value">${c.mensalidadePartir}</div>
            </div>
            <button class="btn btn-accent btn-block" data-open-whatsapp-polo data-course-id="${c.id}">
              <i class="material-icons">chat</i> Quero Falar no WhatsApp
            </button>
          </div>
        </div>
      `;
    }).join('');

    // Atualizar Visibilidade e Texto do Botão Ver Mais
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

    // Re-attach event listener para os botões do WhatsApp nos cards
    container.querySelectorAll('[data-open-whatsapp-polo]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openWhatsappPoloModal();
      });
    });
  }

  // Função Global para o Botão Ver Mais Cursos
  window.handleSeeMoreCourses = function() {
    currentCoursesLimit += 9;
    renderCourses(currentActiveFilteredSet, false);
  };

  function setupFiltersAndSearch() {
    const searchInput = document.getElementById('searchCourseInput');
    const areaSelect = document.getElementById('filterAreaSelect');
    const modSelect = document.getElementById('filterModalitySelect');

    function applyFilters() {
      const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
      const selectedArea = areaSelect ? areaSelect.value : 'all';
      const selectedMod = modSelect ? modSelect.value : 'all';

      const results = UNIP_DATA.cursos.filter(course => {
        const matchesTerm = course.nome.toLowerCase().includes(searchTerm) || 
                            course.descricao.toLowerCase().includes(searchTerm);
        const matchesArea = selectedArea === 'all' || course.area === selectedArea;
        const matchesMod = selectedMod === 'all' || course.modalidades.includes(selectedMod);
        return matchesTerm && matchesArea && matchesMod;
      });

      renderCourses(results, true);
    }

    if (searchInput) searchInput.addEventListener('input', applyFilters);
    if (areaSelect) areaSelect.addEventListener('change', applyFilters);
    if (modSelect) modSelect.addEventListener('change', applyFilters);
  }

  function renderFaqs() {
    const container = document.getElementById('faqAccordion');
    if (!container) return;

    container.innerHTML = UNIP_DATA.faqs.map((faq, index) => `
      <div class="faq-item ${index === 0 ? 'active' : ''}">
        <div class="faq-header">
          <span>${faq.pergunta}</span>
          <i class="material-icons">expand_more</i>
        </div>
        <div class="faq-body">
          <p>${faq.resposta}</p>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.faq-header').forEach(header => {
      header.addEventListener('click', () => {
        const item = header.parentElement;
        item.classList.toggle('active');
      });
    });
  }

  /* ==========================================================================
     SISTEMA DE POPUP E SELEÇÃO DE POLO NO WHATSAPP (DROPDOWN)
     ========================================================================== */

  function openWhatsappPoloModal() {
    const overlay = document.getElementById('whatsappPoloModalOverlay');
    if (!overlay) return;
    populateWhatsappPoloDropdown();
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

    const polos = UNIP_DATA.polosDetalhes || [];
    select.innerHTML = `
      <option value="">-- Selecione sua cidade --</option>
      ${polos.map(p => `<option value="${p.id}">${p.cidade}</option>`).join('')}
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
    const polo = polos.find(p => p.id === selectedId);

    if (polo) {
      trackWhatsappPoloClick(polo.id, polo.nome, polo.cidade);
      const waUrl = polo.waUrl || `https://api.whatsapp.com/send?phone=${polo.phone}&text=${encodeURIComponent(polo.message)}`;
      window.open(waUrl, '_blank', 'noopener');
      closeWhatsappPoloModal();
    }
  }

  window.trackWhatsappPoloClick = function(poloId, poloNome, cidade) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'whatsapp_polo_click',
      'event_category': 'WhatsApp Lead',
      'event_action': 'Clique Polo WhatsApp',
      'event_label': poloNome,
      'polo_id': poloId,
      'polo_name': poloNome,
      'lead_city': cidade
    });
  };

  function closeFunnelModal() {
    const overlay = document.getElementById('modalOverlay');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function populateCoursesDropdown() {
    const select = document.getElementById('inputCursoSelect');
    if (!select) return;

    select.innerHTML = UNIP_DATA.cursos.map(c => `
      <option value="${c.id}">${c.nome} (${c.areaNome})</option>
    `).join('');
  }

  function updateModalitiesRadios(course, selectedModalityId = null) {
    const container = document.getElementById('modalitiesRadioContainer');
    if (!container) return;

    leadState.modalidade = 'Pós EAD 100% Online';

    container.innerHTML = `
      <label class="radio-card-label selected" style="grid-column: 1 / -1; border-color: var(--color-secondary); background: var(--color-secondary-light);">
        <input type="radio" name="modalidadeRadio" value="ead" checked style="display: none;">
        <div class="radio-card-content" style="width: 100%; display: flex; align-items: center; justify-content: space-between;">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <i class="material-icons" style="color: var(--color-secondary); font-size: 1.5rem;">laptop_mac</i>
            <div>
              <div style="font-weight: 700; color: var(--color-primary);">Pós-Graduação EAD 100% Online</div>
              <div style="font-size: 0.75rem; color: var(--color-text-muted);">Estude com flexibilidade total e suporte contínuo de tutores</div>
            </div>
          </div>
          <span class="badge badge-blue">Selecionado</span>
        </div>
      </label>
    `;
  }

  function updatePolosDropdown(uf = 'SP') {
    const select = document.getElementById('inputPoloSelect');
    if (!select) return;

    const polos = Array.isArray(UNIP_DATA.polos) ? UNIP_DATA.polos : (UNIP_DATA.polos[uf] || UNIP_DATA.polos['SP'] || []);
    select.innerHTML = polos.map(p => `<option value="${p}">${p}</option>`).join('');
    leadState.polo = select.value;
  }

  function updateStepUI(targetStep) {
    leadState.step = targetStep;

    // Update Step Indicators
    document.querySelectorAll('.step-item').forEach(item => {
      const stepNum = parseInt(item.getAttribute('data-step'), 10);
      item.classList.remove('active', 'completed');
      if (stepNum === targetStep) {
        item.classList.add('active');
      } else if (stepNum < targetStep) {
        item.classList.add('completed');
      }
    });

    // Toggle Content Views
    document.querySelectorAll('.funnel-step-content').forEach(content => {
      content.classList.remove('active');
    });
    const activeContent = document.getElementById(`funnelStep${targetStep}`);
    if (activeContent) activeContent.classList.add('active');

    // Toggle Nav Buttons
    const prevBtn = document.getElementById('prevStepBtn');
    const nextBtn = document.getElementById('nextStepBtn');

    if (targetStep === 1) {
      if (prevBtn) prevBtn.style.display = 'none';
      if (nextBtn) nextBtn.textContent = 'Próximo: Escolher Curso';
    } else if (targetStep === 2) {
      if (prevBtn) prevBtn.style.display = 'inline-flex';
      if (nextBtn) nextBtn.textContent = 'Próximo: Localização & Polo';
    } else if (targetStep === 3) {
      if (prevBtn) prevBtn.style.display = 'inline-flex';
      if (nextBtn) nextBtn.textContent = 'Próximo: Resumo & Confirmação';
    } else if (targetStep === 4) {
      if (prevBtn) prevBtn.style.display = 'inline-flex';
      if (nextBtn) nextBtn.textContent = 'Concluir Pré-Inscrição';
      renderSummaryCard();
    } else if (targetStep === 5) {
      // Success Screen
      document.querySelector('.funnel-footer').style.display = 'none';
      document.querySelector('.stepper-bar').style.display = 'none';
    }
  }

  function renderSummaryCard() {
    const summaryBox = document.getElementById('summaryCardContent');
    if (!summaryBox) return;

    summaryBox.innerHTML = `
      <div class="summary-order-box">
        <h4 class="summary-order-title">Resumo da Pré-Inscrição</h4>
        <div class="summary-row">
          <span><strong>Candidato(a):</strong></span>
          <span>${leadState.nome || 'Não informado'}</span>
        </div>
        <div class="summary-row">
          <span><strong>CPF:</strong></span>
          <span>${leadState.cpf || 'Não informado'}</span>
        </div>
        <div class="summary-row">
          <span><strong>E-mail:</strong></span>
          <span>${leadState.email || 'Não informado'}</span>
        </div>
        <div class="summary-row">
          <span><strong>WhatsApp:</strong></span>
          <span>${leadState.whatsapp || 'Não informado'}</span>
        </div>
        <hr style="margin: 0.75rem 0; border: none; border-top: 1px solid var(--color-border);" />
        <div class="summary-row">
          <span><strong>Curso Selecionado:</strong></span>
          <span style="color: var(--color-primary); font-weight: 700;">${leadState.cursoNome}</span>
        </div>
        <div class="summary-row">
          <span><strong>Modalidade:</strong></span>
          <span class="badge badge-gold">${leadState.modalidade}</span>
        </div>
        <div class="summary-row">
          <span><strong>Cidade do Candidato:</strong></span>
          <span>${leadState.cidade || 'Não informada'}</span>
        </div>
        <div class="summary-row">
          <span><strong>Polo EAD Selecionado:</strong></span>
          <span>${leadState.polo}</span>
        </div>
        <div class="summary-row">
          <span><strong>Mensalidade de Entrada:</strong></span>
          <span style="font-size: 1.2rem; font-weight: 800; color: var(--color-primary);">${leadState.valorMensalidade}</span>
        </div>
      </div>
    `;
  }

  function handleNextStep() {
    if (leadState.step === 1) {
      // Validate Step 1
      const nomeInput = document.getElementById('inputNome');
      const emailInput = document.getElementById('inputEmail');
      const phoneInput = document.getElementById('inputPhone');
      const cpfInput = document.getElementById('inputCpf');

      if (!nomeInput.value.trim() || !emailInput.value.trim() || !phoneInput.value.trim() || !cpfInput.value.trim()) {
        alert('Por favor, preencha todos os campos obrigatórios para continuar.');
        return;
      }

      leadState.nome = nomeInput.value.trim();
      leadState.email = emailInput.value.trim();
      leadState.whatsapp = phoneInput.value.trim();
      leadState.cpf = cpfInput.value.trim();

      updateStepUI(2);
    } else if (leadState.step === 2) {
      updateStepUI(3);
    } else if (leadState.step === 3) {
      const cidadeInput = document.getElementById('inputCidade');
      const poloSelect = document.getElementById('inputPoloSelect');

      if (cidadeInput && !cidadeInput.value.trim()) {
        alert('Por favor, informe sua cidade para continuar.');
        return;
      }

      if (cidadeInput) leadState.cidade = cidadeInput.value.trim();
      if (poloSelect) leadState.polo = poloSelect.value;
      updateStepUI(4);
    } else if (leadState.step === 4) {
      // Finalize Registration
      const protocolo = `UNIP-POS-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      document.getElementById('protocolNumber').textContent = protocolo;
      document.getElementById('successCandidateName').textContent = leadState.nome;
      document.getElementById('successCourseName').textContent = leadState.cursoNome;

      // Save proposal to database
      saveProposal({
        protocolo,
        data: new Date().toLocaleDateString('pt-BR') + ' ' + new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        nome: leadState.nome,
        email: leadState.email,
        whatsapp: leadState.whatsapp,
        cpf: leadState.cpf,
        curso: leadState.cursoNome,
        modalidade: leadState.modalidade,
        polo: leadState.polo,
        valor: leadState.valorMensalidade,
        status: 'Pendente'
      });

      // 🎯 GTM DATALAYER CONVERSION EVENT (GOOGLE TAG MANAGER / META PIXEL / ADS)
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'lead_conversion',
        'event_category': 'Form Submission',
        'event_action': 'Pre-Matricula Concluida',
        'event_label': leadState.cursoNome,
        'conversion_type': 'pos_ead_pre_matricula',
        'lead_protocol': protocolo,
        'course_id': leadState.cursoId,
        'course_name': leadState.cursoNome,
        'course_area': leadState.area,
        'course_value': leadState.valorMensalidade,
        'lead_city': leadState.cidade,
        'lead_polo': leadState.polo
      });

      // 🎯 Atualizar Hash da URL para rastreamento de Pageview no GTM (#sucesso-inscricao)
      try {
        window.history.pushState(null, null, '#sucesso-inscricao');
      } catch (e) {}

      // 🎯 Custom DOM Event para acionamento direto em scripts customizados
      window.dispatchEvent(new CustomEvent('unipLeadSubmitted', {
        detail: {
          protocolo: protocolo,
          curso: leadState.cursoNome,
          valor: leadState.valorMensalidade,
          cidade: leadState.cidade,
          polo: leadState.polo
        }
      }));

      updateStepUI(5);
    }
  }

  function handlePrevStep() {
    if (leadState.step > 1) {
      updateStepUI(leadState.step - 1);
    }
  }

  /* ==========================================================================
     PAINEL ADMINISTRATIVO DE GESTÃO DE PROPOSTAS (/admin/propostas)
     ========================================================================== */

  function getStoredProposals() {
    try {
      const data = localStorage.getItem('unip_propostas_db');
      if (data) return JSON.parse(data);
    } catch (e) {}

    return [];
  }

  function fetchProposalsFromApi() {
    fetch('/api/propostas')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          localStorage.setItem('unip_propostas_db', JSON.stringify(data));
          if (document.getElementById('adminModalOverlay')?.classList.contains('active')) {
            renderAdminTable();
          }
        }
      })
      .catch(() => {
        if (document.getElementById('adminModalOverlay')?.classList.contains('active')) {
          renderAdminTable();
        }
      });
  }

  function saveProposal(proposal) {
    const list = getStoredProposals();
    list.unshift(proposal);
    localStorage.setItem('unip_propostas_db', JSON.stringify(list));

    // Async POST to REST API
    fetch('/api/propostas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(proposal)
    }).catch(() => {});
  }

  function openAdminModal() {
    const modal = document.getElementById('adminModalOverlay');
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    fetchProposalsFromApi();
    renderAdminTable();
  }

  function closeAdminModal() {
    const modal = document.getElementById('adminModalOverlay');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function renderAdminTable() {
    const tbody = document.getElementById('adminTableBody');
    const searchVal = (document.getElementById('adminSearchInput')?.value || '').toLowerCase().trim();
    const statusVal = document.getElementById('adminStatusFilter')?.value || 'all';

    if (!tbody) return;

    let proposals = getStoredProposals();

    // Stats
    document.getElementById('adminTotalCount').textContent = proposals.length;
    document.getElementById('adminPendingCount').textContent = proposals.filter(p => p.status === 'Pendente').length;
    document.getElementById('adminConfirmedCount').textContent = proposals.filter(p => p.status === 'Matriculado').length;

    // Filter
    proposals = proposals.filter(p => {
      const matchesSearch = p.nome.toLowerCase().includes(searchVal) ||
                            p.cpf.toLowerCase().includes(searchVal) ||
                            p.email.toLowerCase().includes(searchVal) ||
                            p.curso.toLowerCase().includes(searchVal) ||
                            p.protocolo.toLowerCase().includes(searchVal);

      const matchesStatus = statusVal === 'all' || p.status === statusVal;
      return matchesSearch && matchesStatus;
    });

    if (proposals.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align: center; padding: 2rem; color: var(--color-text-muted);">
            Nenhuma proposta de pré-inscrição encontrada para este filtro.
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = proposals.map((p, index) => {
      let statusBadge = `<span class="badge badge-gold">Pendente</span>`;
      if (p.status === 'Em Atendimento') statusBadge = `<span class="badge badge-blue">Em Atendimento</span>`;
      if (p.status === 'Matriculado') statusBadge = `<span class="badge" style="background:#d1fae5; color:#065f46;">Matriculado</span>`;

      const cleanPhone = p.whatsapp.replace(/\D/g, '');
      const waUrl = `https://api.whatsapp.com/send?phone=55${cleanPhone}&text=${encodeURIComponent(`Olá ${p.nome}! Sou o consultor da Pós UNIP sobre sua pré-inscrição no curso ${p.curso} (${p.protocolo}).`)}`;

      return `
        <tr style="border-bottom: 1px solid var(--color-border);">
          <td style="padding: 0.75rem 1rem;">
            <strong style="color: var(--color-primary);">${p.protocolo}</strong>
            <div style="font-size: 0.75rem; color: var(--color-text-light);">${p.data}</div>
          </td>
          <td style="padding: 0.75rem 1rem;">
            <strong>${p.nome}</strong>
          </td>
          <td style="padding: 0.75rem 1rem;">
            <div>${p.whatsapp}</div>
            <div style="font-size: 0.75rem; color: var(--color-text-muted);">${p.email}</div>
            <div style="font-size: 0.75rem; color: var(--color-text-light);">CPF: ${p.cpf}</div>
          </td>
          <td style="padding: 0.75rem 1rem;">
            <div style="font-weight: 600;">${p.curso}</div>
            <span class="badge badge-blue" style="font-size: 0.7rem; padding: 0.15rem 0.5rem;">${p.modalidade}</span>
          </td>
          <td style="padding: 0.75rem 1rem; font-size: 0.8rem;">
            ${p.polo}
          </td>
          <td style="padding: 0.75rem 1rem;">
            ${statusBadge}
          </td>
          <td style="padding: 0.75rem 1rem; text-align: center;">
            <div style="display: flex; gap: 0.35rem; justify-content: center;">
              <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-accent" style="padding: 0.35rem 0.6rem; font-size: 0.75rem;" title="Abrir WhatsApp">
                <i class="material-icons" style="font-size: 0.9rem;">chat</i>
              </a>
              <button type="button" class="btn btn-outline admin-change-status-btn" data-protocol="${p.protocolo}" style="padding: 0.35rem 0.6rem; font-size: 0.75rem;" title="Alterar Status">
                <i class="material-icons" style="font-size: 0.9rem;">sync</i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');

    // Status change listener
    tbody.querySelectorAll('.admin-change-status-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const proto = btn.getAttribute('data-protocol');
        const list = getStoredProposals();
        const item = list.find(x => x.protocolo === proto);
        if (item) {
          if (item.status === 'Pendente') item.status = 'Em Atendimento';
          else if (item.status === 'Em Atendimento') item.status = 'Matriculado';
          else item.status = 'Pendente';

          localStorage.setItem('unip_propostas_db', JSON.stringify(list));
          renderAdminTable();
        }
      });
    });
  }

  function requestAdminAccess() {
    if (sessionStorage.getItem('unip_admin_auth') === 'true') {
      openAdminModal();
    } else {
      const authModal = document.getElementById('adminAuthModalOverlay');
      if (authModal) authModal.classList.add('active');
    }
  }

  // Admin Modal Event Listeners
  document.getElementById('openAdminBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    requestAdminAccess();
  });

  document.getElementById('closeAdminModalBtn')?.addEventListener('click', closeAdminModal);
  document.getElementById('adminModalOverlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'adminModalOverlay') closeAdminModal();
  });

  document.getElementById('closeAdminAuthBtn')?.addEventListener('click', () => {
    document.getElementById('adminAuthModalOverlay')?.classList.remove('active');
  });

  document.getElementById('adminAuthForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const pwd = (document.getElementById('adminPasswordInput')?.value || '').trim();
    const errEl = document.getElementById('adminAuthError');

    if (pwd === 'Unip1515@' || pwd.toLowerCase() === 'unip1515@') {
      sessionStorage.setItem('unip_admin_auth', 'true');
      document.getElementById('adminAuthModalOverlay')?.classList.remove('active');
      openAdminModal();
      if (errEl) errEl.style.display = 'none';
    } else {
      if (errEl) errEl.style.display = 'block';
    }
  });

  document.getElementById('adminSearchInput')?.addEventListener('input', renderAdminTable);
  document.getElementById('adminStatusFilter')?.addEventListener('change', renderAdminTable);

  document.getElementById('adminResetBtn')?.addEventListener('click', () => {
    if (confirm('Tem certeza que deseja apagar permanentemente todos os registros de propostas?')) {
      localStorage.removeItem('unip_propostas_db');
      fetch('/api/propostas', { method: 'DELETE' })
        .then(() => {
          fetchProposalsFromApi();
        })
        .catch(() => {
          renderAdminTable();
        });
    }
  });

  document.getElementById('adminExportBtn')?.addEventListener('click', () => {
    const list = getStoredProposals();
    if (list.length === 0) return alert('Nenhuma proposta para exportar.');

    const headers = ["Protocolo", "Data", "Nome", "Email", "WhatsApp", "CPF", "Curso", "Modalidade", "Polo", "Valor", "Status"];
    const rows = list.map(p => [
      `"${p.protocolo}"`, `"${p.data}"`, `"${p.nome}"`, `"${p.email}"`,
      `"${p.whatsapp}"`, `"${p.cpf}"`, `"${p.curso}"`, `"${p.modalidade}"`,
      `"${p.polo}"`, `"${p.valor}"`, `"${p.status}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8,\uFEFF" + [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `propostas_unip_pos_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

  // WhatsApp Polo Modal Event Listeners
  document.querySelectorAll('[data-open-whatsapp-polo]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openWhatsappPoloModal();
    });
  });

  document.getElementById('closeWaModalBtn')?.addEventListener('click', closeWhatsappPoloModal);
  document.getElementById('whatsappPoloModalOverlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'whatsappPoloModalOverlay') closeWhatsappPoloModal();
  });

  document.getElementById('waPoloSubmitBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    handleWhatsappPoloSubmit();
  });

  // Client-Side Routing for /admin/propostas or #admin-propostas
  if (typeof window !== 'undefined' && (window.location?.hash === '#admin-propostas' || window.location?.pathname?.includes('/admin'))) {
    setTimeout(requestAdminAccess, 300);
  }

  /* ==========================================================================
     MÁSCARAS DE INPUT (CPF, CELULAR, CEP)
     ========================================================================== */

  function setupInputMasks() {
    const cpfInput = document.getElementById('inputCpf');
    const phoneInput = document.getElementById('inputPhone');

    if (cpfInput) {
      cpfInput.addEventListener('input', (e) => {
        let v = e.target.value.replace(/\D/g, '');
        if (v.length > 11) v = v.substring(0, 11);
        v = v.replace(/(\d{3})(\d)/, '$1.$2');
        v = v.replace(/(\d{3})(\d)/, '$1.$2');
        v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        e.target.value = v;
      });
    }

    if (phoneInput) {
      phoneInput.addEventListener('input', (e) => {
        let v = e.target.value.replace(/\D/g, '');
        if (v.length > 11) v = v.substring(0, 11);
        v = v.replace(/^(\d{2})(\d)/g, '($1) $2');
        v = v.replace(/(\d{5})(\d)/, '$1-$2');
        e.target.value = v;
      });
    }
  }
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  initApp();
} else {
  document.addEventListener('DOMContentLoaded', initApp);
}

