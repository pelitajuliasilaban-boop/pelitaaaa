/**
 * SIPAD TAPUT (Sistem Informasi Pendapatan Asli Daerah Kabupaten Tapanuli Utara)
 * Core Interactive Application Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // Toast Helper
  window.showToast = function (message, type = 'success') {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'fixed bottom-5 right-5 z-[9999] flex flex-col gap-2 pointer-events-none';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    const isError = type === 'error';
    const isInfo = type === 'info';
    const bgColor = isError ? 'bg-error text-on-error' : (isInfo ? 'bg-primary text-on-primary' : 'bg-secondary text-on-secondary');
    const icon = isError ? 'error' : (isInfo ? 'info' : 'check_circle');

    toast.className = `${bgColor} pointer-events-auto px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 text-body-sm font-medium transform transition-all duration-300 translate-y-4 opacity-0`;
    toast.innerHTML = `
      <span class="material-symbols-outlined text-xl">${icon}</span>
      <div class="flex-1">${message}</div>
      <button class="text-white/80 hover:text-white" onclick="this.parentElement.remove()">&times;</button>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.remove('translate-y-4', 'opacity-0');
      toast.classList.add('translate-y-0', 'opacity-100');
    }, 20);

    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-x-4');
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  };

  // 1. Tab Navigation
  const tabBillingBtn = document.getElementById('tabBillingBtn');
  const tabWorkflowBtn = document.getElementById('tabWorkflowBtn');
  const tabRatesBtn = document.getElementById('tabRatesBtn');

  const viewBilling = document.getElementById('viewBilling');
  const viewWorkflow = document.getElementById('viewWorkflow');
  const viewRates = document.getElementById('viewRates');

  const tabs = [
    { btn: tabBillingBtn, view: viewBilling },
    { btn: tabWorkflowBtn, view: viewWorkflow },
    { btn: tabRatesBtn, view: viewRates },
  ];

  window.switchTab = function (targetIndex) {
    tabs.forEach((tab, index) => {
      if (!tab.btn || !tab.view) return;
      if (index === targetIndex) {
        tab.btn.classList.add('bg-secondary-container', 'text-on-secondary', 'shadow-sm');
        tab.btn.classList.remove('text-on-surface-variant', 'hover:bg-surface-container');
        tab.view.classList.remove('hidden');
      } else {
        tab.btn.classList.remove('bg-secondary-container', 'text-on-secondary', 'shadow-sm');
        tab.btn.classList.add('text-on-surface-variant', 'hover:bg-surface-container');
        tab.view.classList.add('hidden');
      }
    });
  };

  if (tabBillingBtn) tabBillingBtn.addEventListener('click', () => switchTab(0));
  if (tabWorkflowBtn) tabWorkflowBtn.addEventListener('click', () => switchTab(1));
  if (tabRatesBtn) tabRatesBtn.addEventListener('click', () => switchTab(2));

  // 2. Modals Management
  const modalTarif = document.getElementById('modalTarif');
  const btnOpenTarifModal = document.getElementById('btnOpenTarifModal');
  const btnOpenTarifModal2 = document.getElementById('btnOpenTarifModal2');
  const btnCloseTarifModal = document.getElementById('btnCloseTarifModal');
  const btnCancelTarifModal = document.getElementById('btnCancelTarifModal');
  const btnSaveTarifModal = document.getElementById('btnSaveTarifModal');

  function toggleModal(modal, show) {
    if (!modal) return;
    if (show) {
      modal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    } else {
      modal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
  }

  if (btnOpenTarifModal) btnOpenTarifModal.addEventListener('click', () => toggleModal(modalTarif, true));
  if (btnOpenTarifModal2) btnOpenTarifModal2.addEventListener('click', () => toggleModal(modalTarif, true));
  if (btnCloseTarifModal) btnCloseTarifModal.addEventListener('click', () => toggleModal(modalTarif, false));
  if (btnCancelTarifModal) btnCancelTarifModal.addEventListener('click', () => toggleModal(modalTarif, false));

  if (btnSaveTarifModal) {
    btnSaveTarifModal.addEventListener('click', () => {
      toggleModal(modalTarif, false);
      showToast('Konfigurasi Tarif Legal baru berhasil disimpan dan terkunci secara fiskal.');
    });
  }

  // Cancel Bill Modal
  const modalCancel = document.getElementById('modalCancel');
  const cancelTriggers = document.querySelectorAll('.btnCancelTrigger');
  const btnCloseCancelModal = document.getElementById('btnCloseCancelModal');
  const btnDismissCancelModal = document.getElementById('btnDismissCancelModal');
  const btnConfirmCancelModal = document.getElementById('btnConfirmCancelModal');
  let activeBillRowToCancel = null;

  cancelTriggers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      activeBillRowToCancel = e.target.closest('tr');
      toggleModal(modalCancel, true);
    });
  });

  if (btnCloseCancelModal) btnCloseCancelModal.addEventListener('click', () => toggleModal(modalCancel, false));
  if (btnDismissCancelModal) btnDismissCancelModal.addEventListener('click', () => toggleModal(modalCancel, false));

  if (btnConfirmCancelModal) {
    btnConfirmCancelModal.addEventListener('click', () => {
      toggleModal(modalCancel, false);
      if (activeBillRowToCancel) {
        const statusBadge = activeBillRowToCancel.querySelector('td:nth-child(8) span');
        if (statusBadge) {
          statusBadge.className = 'inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-label-sm text-label-sm font-semibold bg-surface-container text-error';
          statusBadge.innerHTML = '<span class="material-symbols-outlined text-xs">cancel</span><span>Dibatalkan</span>';
        }
        activeBillRowToCancel.classList.add('opacity-70');
      }
      showToast('Tagihan SKP-D resmi dibatalkan sesuai Berita Acara Pemeriksaan.');
    });
  }

  // Draft Creation Modal
  const modalDraft = document.getElementById('modalDraft');
  const btnOpenDraftModal = document.getElementById('btnOpenDraftModal');
  const btnCloseDraftModal = document.getElementById('btnCloseDraftModal');
  const btnCancelDraftModal = document.getElementById('btnCancelDraftModal');
  const formDraft = document.getElementById('formDraftPenetapan');

  if (btnOpenDraftModal) {
    btnOpenDraftModal.addEventListener('click', () => toggleModal(modalDraft, true));
  }
  if (btnCloseDraftModal) {
    btnCloseDraftModal.addEventListener('click', () => toggleModal(modalDraft, false));
  }
  if (btnCancelDraftModal) {
    btnCancelDraftModal.addEventListener('click', () => toggleModal(modalDraft, false));
  }

  // Dynamic calculation inside Draft Modal
  const draftDppInput = document.getElementById('draftDppInput');
  const draftTarifSelect = document.getElementById('draftTarifSelect');
  const draftTotalOutput = document.getElementById('draftTotalOutput');

  function calculateDraftTotal() {
    if (!draftDppInput || !draftTarifSelect || !draftTotalOutput) return;
    const dppRaw = parseFloat(draftDppInput.value.replace(/[^0-9]/g, '')) || 0;
    const tarifPercent = parseFloat(draftTarifSelect.value) || 0;
    const total = Math.round(dppRaw * (tarifPercent / 100));
    draftTotalOutput.textContent = 'Rp ' + total.toLocaleString('id-ID');
  }

  if (draftDppInput) {
    draftDppInput.addEventListener('input', (e) => {
      let val = e.target.value.replace(/[^0-9]/g, '');
      if (val) {
        e.target.value = parseInt(val, 10).toLocaleString('id-ID');
      }
      calculateDraftTotal();
    });
  }
  if (draftTarifSelect) {
    draftTarifSelect.addEventListener('change', calculateDraftTotal);
  }

  if (formDraft) {
    formDraft.addEventListener('submit', (e) => {
      e.preventDefault();
      toggleModal(modalDraft, false);

      const wpName = document.getElementById('draftWpName')?.value || 'PT Wajib Pajak Baru';
      const nop = document.getElementById('draftNop')?.value || '12.05.010.003.001-0099.0';
      const jenisText = draftTarifSelect.options[draftTarifSelect.selectedIndex]?.text.split('(')[0] || 'PBJT Restoran';
      const totalText = draftTotalOutput?.textContent || 'Rp 15.000.000';
      const newSkpdNum = 'SKP-D/2025/' + Math.floor(1000 + Math.random() * 9000);
      const newVa = '99012-' + Math.floor(1000 + Math.random() * 9000) + '-' + Math.floor(1000 + Math.random() * 9000);

      const tableBody = document.querySelector('#viewBilling tbody');
      if (tableBody) {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-surface-container-low/60 transition-colors bg-secondary-container/5 animate-fade-in';
        tr.innerHTML = `
          <td class="py-space-md px-space-lg text-center">
            <input class="w-4 h-4 rounded text-secondary focus:ring-0 cursor-pointer row-checkbox" type="checkbox">
          </td>
          <td class="py-space-md px-space-md font-mono">
            <div class="font-semibold text-primary">${newSkpdNum}</div>
            <div class="text-[11px] text-secondary flex items-center gap-1 mt-0.5">
              <span class="material-symbols-outlined text-xs">qr_code_2</span>
              <span>VA: ${newVa}</span>
            </div>
          </td>
          <td class="py-space-md px-space-md">
            <div class="font-headline-sm text-headline-sm text-primary">${wpName}</div>
            <div class="text-on-surface-variant text-[11px] font-mono mt-0.5">NOP: ${nop}</div>
            <div class="text-on-surface-variant text-[11px]">Tarutung Kota • Kab. Taput</div>
          </td>
          <td class="py-space-md px-space-md">
            <div class="font-semibold text-primary">${jenisText}</div>
            <div class="text-on-surface-variant text-[11px]">Masa Pajak Berjalan TA 2025</div>
          </td>
          <td class="py-space-md px-space-md font-mono text-[12px]">
            Juni 2025
            <div class="text-on-surface-variant text-[10px]">Draf Diterbitkan</div>
          </td>
          <td class="py-space-md px-space-md text-right font-currency-body text-currency-body text-primary">
            ${totalText}
          </td>
          <td class="py-space-md px-space-md">
            <div class="font-semibold text-primary font-mono text-[12px]">30 Jul 2025</div>
            <div class="inline-flex items-center gap-1 text-[10px] font-semibold text-secondary">
              <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span> 30 Hari Lagi
            </div>
          </td>
          <td class="py-space-md px-space-md text-center">
            <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-label-sm text-label-sm font-semibold bg-surface-container text-secondary">
              <span class="material-symbols-outlined text-xs">schedule</span>
              <span>Terbit</span>
            </span>
          </td>
          <td class="py-space-md px-space-lg text-right">
            <div class="flex items-center justify-end gap-1">
              <button class="p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container btnViewDetail" title="Lihat Telaah Dokumen Lengkap" type="button">
                <span class="material-symbols-outlined text-lg">visibility</span>
              </button>
              <button class="p-1.5 rounded-lg text-on-surface-variant hover:text-secondary hover:bg-surface-container" onclick="window.print()" title="Cetak Format Lembar SKP-D" type="button">
                <span class="material-symbols-outlined text-lg">print</span>
              </button>
              <button class="p-1.5 rounded-lg text-on-surface-variant hover:text-secondary hover:bg-surface-container btnCopyVA" data-va="${newVa}" title="Salin Kode Bayar VA / QRIS" type="button">
                <span class="material-symbols-outlined text-lg">content_copy</span>
              </button>
            </div>
          </td>
        `;
        tableBody.prepend(tr);
        rebindEvents();
      }

      showToast(`Draf Penetapan Baru (${newSkpdNum}) berhasil disimpan!`);
    });
  }

  // Detail Dossier Modal
  const modalDetail = document.getElementById('modalDetail');
  const btnCloseDetailModal = document.getElementById('btnCloseDetailModal');

  window.openDetailModal = function (skpd, wp, nop, jenis, total, va, status) {
    if (!modalDetail) return;
    document.getElementById('detailSkpdTitle').textContent = skpd || 'SKP-D/2025/0821';
    document.getElementById('detailWpName').textContent = wp || 'PT Silindung Megah Mineral';
    document.getElementById('detailNop').textContent = nop || '12.05.010.002.019-0021.0';
    document.getElementById('detailJenis').textContent = jenis || 'PBJT - Jasa Perhotelan';
    document.getElementById('detailTotal').textContent = total || 'Rp 48.750.000';
    document.getElementById('detailVa').textContent = va || '99012-0821-4412';
    document.getElementById('detailStatus').textContent = status || 'Terbit (Belum Bayar)';
    toggleModal(modalDetail, true);
  };

  if (btnCloseDetailModal) {
    btnCloseDetailModal.addEventListener('click', () => toggleModal(modalDetail, false));
  }

  // TTE Authorization Modal / Simulation
  const modalTte = document.getElementById('modalTte');
  const btnOpenTteModal = document.getElementById('btnOpenTteModal');
  const btnCloseTteModal = document.getElementById('btnCloseTteModal');
  const btnSubmitTte = document.getElementById('btnSubmitTte');

  if (btnOpenTteModal) {
    btnOpenTteModal.addEventListener('click', () => toggleModal(modalTte, true));
  }
  if (btnCloseTteModal) {
    btnCloseTteModal.addEventListener('click', () => toggleModal(modalTte, false));
  }

  if (btnSubmitTte) {
    btnSubmitTte.addEventListener('click', () => {
      const pin = document.getElementById('ttePassphrase')?.value;
      if (!pin) {
        showToast('Silakan masukkan Passphrase BSrE Anda!', 'error');
        return;
      }
      btnSubmitTte.disabled = true;
      btnSubmitTte.innerHTML = '<span class="material-symbols-outlined text-base animate-spin">refresh</span> Memproses TTE...';

      setTimeout(() => {
        btnSubmitTte.disabled = false;
        btnSubmitTte.innerHTML = '<span class="material-symbols-outlined text-base">verified</span> Sahkan Dokumen';
        toggleModal(modalTte, false);
        showToast('Dokumen SKP-D berhasil ditandatangani secara elektronik (BSrE BSSN) dan resmi terbit!');

        const tteBadge = document.getElementById('tteStatusStep3');
        if (tteBadge) {
          tteBadge.innerHTML = '<span class="material-symbols-outlined text-xs text-on-tertiary-container">done_all</span> TTE BSrE Terverifikasi Sah';
        }
      }, 1200);
    });
  }

  // 3. Search and Filtering Logic
  const tableSearchInput = document.getElementById('tableSearchInput');
  const filterStatusSelect = document.getElementById('filterStatusSelect');
  const filterJenisSelect = document.getElementById('filterJenisSelect');
  const btnResetFilter = document.getElementById('btnResetFilter');

  function applyFilters() {
    const query = (tableSearchInput?.value || '').toLowerCase().trim();
    const statusFilter = (filterStatusSelect?.value || 'all').toLowerCase();
    const jenisFilter = (filterJenisSelect?.value || '').toLowerCase();

    const rows = document.querySelectorAll('#viewBilling tbody tr');
    rows.forEach((row) => {
      const rowText = row.innerText.toLowerCase();
      const statusText = row.querySelector('td:nth-child(8)')?.innerText.toLowerCase() || '';
      const jenisText = row.querySelector('td:nth-child(4)')?.innerText.toLowerCase() || '';

      let matchesSearch = !query || rowText.includes(query);
      let matchesStatus = (statusFilter === 'all') || statusText.includes(statusFilter);
      let matchesJenis = !jenisFilter || jenisText.includes(jenisFilter);

      row.style.display = (matchesSearch && matchesStatus && matchesJenis) ? '' : 'none';
    });
  }

  if (tableSearchInput) tableSearchInput.addEventListener('input', applyFilters);
  if (filterStatusSelect) filterStatusSelect.addEventListener('change', applyFilters);
  if (filterJenisSelect) filterJenisSelect.addEventListener('change', applyFilters);

  if (btnResetFilter) {
    btnResetFilter.addEventListener('click', () => {
      if (tableSearchInput) tableSearchInput.value = '';
      if (filterStatusSelect) filterStatusSelect.value = 'all';
      if (filterJenisSelect) filterJenisSelect.value = '';
      applyFilters();
      showToast('Kriteria filter berhasil direset.', 'info');
    });
  }

  // Global Ctrl+K Search
  const globalSearchInput = document.getElementById('globalSearchInput');
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (globalSearchInput) {
        globalSearchInput.focus();
        globalSearchInput.select();
      }
    }
  });

  if (globalSearchInput) {
    globalSearchInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        switchTab(0);
        if (tableSearchInput) {
          tableSearchInput.value = globalSearchInput.value;
          applyFilters();
        }
      }
    });
  }

  // 4. Batch Selection Toolbar
  const selectAllCheckbox = document.getElementById('selectAllBilling');
  const batchActionBar = document.getElementById('batchActionBar');
  const batchCountText = document.getElementById('batchCountText');

  function updateBatchBar() {
    const checkedBoxes = document.querySelectorAll('#viewBilling tbody .row-checkbox:checked');
    const count = checkedBoxes.length;
    if (batchActionBar && batchCountText) {
      if (count > 0) {
        batchCountText.textContent = `${count} Dokumen SKP-D Dipilih`;
        batchActionBar.classList.remove('hidden', 'translate-y-20');
        batchActionBar.classList.add('translate-y-0');
      } else {
        batchActionBar.classList.add('translate-y-20');
        setTimeout(() => batchActionBar.classList.add('hidden'), 200);
      }
    }
  }

  if (selectAllCheckbox) {
    selectAllCheckbox.addEventListener('change', (e) => {
      const allRowBoxes = document.querySelectorAll('#viewBilling tbody .row-checkbox');
      allRowBoxes.forEach((cb) => (cb.checked = e.target.checked));
      updateBatchBar();
    });
  }

  // 5. CSV Export Engine
  const btnExportData = document.getElementById('btnExportData');
  if (btnExportData) {
    btnExportData.addEventListener('click', () => {
      const rows = document.querySelectorAll('#viewBilling tbody tr');
      let csvContent = "data:text/csv;charset=utf-8,";
      csvContent += "Nomor SKPD,Kode VA,Nama Wajib Pajak,NOP,Jenis Penerimaan,Masa Pajak,Total Pokok,Jatuh Tempo,Status\n";

      rows.forEach((row) => {
        if (row.style.display === 'none') return;
        const skpd = row.querySelector('td:nth-child(2) .font-semibold')?.innerText.trim() || '';
        const va = row.querySelector('td:nth-child(2) span:nth-child(2)')?.innerText.replace('VA: ', '').trim() || '';
        const wp = row.querySelector('td:nth-child(3) .font-headline-sm')?.innerText.trim() || '';
        const nop = row.querySelector('td:nth-child(3) .font-mono')?.innerText.replace('NOP: ', '').trim() || '';
        const jenis = row.querySelector('td:nth-child(4) .font-semibold')?.innerText.trim() || '';
        const masa = row.querySelector('td:nth-child(5)')?.childNodes[0]?.textContent.trim() || '';
        const total = row.querySelector('td:nth-child(6)')?.innerText.replace(/[^0-9]/g, '') || '';
        const tempo = row.querySelector('td:nth-child(7) .font-semibold')?.innerText.trim() || '';
        const status = row.querySelector('td:nth-child(8) span')?.innerText.trim() || '';

        csvContent += `"${skpd}","${va}","${wp}","${nop}","${jenis}","${masa}","${total}","${tempo}","${status}"\n`;
      });

      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", `Data_Penagihan_PAD_Taput_${new Date().toISOString().slice(0, 10)}.csv`);
      document.body.appendChild(link);
      link.click();
      link.remove();

      showToast('Data penagihan PAD berhasil diekspor ke file CSV!');
    });
  }

  // 6. Copy VA / QRIS button helper & Event re-binding
  function rebindEvents() {
    // Copy VA
    document.querySelectorAll('.btnCopyVA').forEach((btn) => {
      btn.onclick = () => {
        const va = btn.getAttribute('data-va') || '99012-0821-4412';
        navigator.clipboard?.writeText(va);
        showToast(`Kode Bayar Virtual Account ${va} disalin ke clipboard!`);
      };
    });

    // Detail Trigger
    document.querySelectorAll('.btnViewDetail').forEach((btn) => {
      btn.onclick = (e) => {
        const tr = e.target.closest('tr');
        if (!tr) return;
        const skpd = tr.querySelector('td:nth-child(2) .font-semibold')?.innerText.trim();
        const va = tr.querySelector('td:nth-child(2) span:nth-child(2)')?.innerText.replace('VA: ', '').trim();
        const wp = tr.querySelector('td:nth-child(3) .font-headline-sm')?.innerText.trim();
        const nop = tr.querySelector('td:nth-child(3) .font-mono')?.innerText.replace('NOP: ', '').trim();
        const jenis = tr.querySelector('td:nth-child(4) .font-semibold')?.innerText.trim();
        const total = tr.querySelector('td:nth-child(6)')?.innerText.trim();
        const status = tr.querySelector('td:nth-child(8) span')?.innerText.trim();
        openDetailModal(skpd, wp, nop, jenis, total, va, status);
      };
    });

    // Row Checkbox change
    document.querySelectorAll('#viewBilling tbody .row-checkbox').forEach((cb) => {
      cb.onchange = updateBatchBar;
    });
  }

  rebindEvents();

  // 7. Sidebar Navigation Links
  const navLinks = document.querySelectorAll('nav a[data-path]');
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navLinks.forEach((l) => l.classList.remove('bg-secondary-container', 'text-on-secondary', 'font-semibold', 'shadow-sm'));
      link.classList.add('bg-secondary-container', 'text-on-secondary', 'font-semibold', 'shadow-sm');

      const path = link.getAttribute('data-path');
      if (path === 'dashboard' || path === 'tagihan') {
        switchTab(0);
      } else if (path === 'penetapan-pajak-retribusi') {
        switchTab(1);
      } else if (path === 'tarif-dan-jenis-penerimaan') {
        switchTab(2);
      } else {
        showToast(`Modul "${link.innerText.trim()}" aktif. Menampilkan data sinkron Bapenda Taput.`, 'info');
      }
    });
  });

  // 8. Notifications Dropdown
  const btnNotifications = document.getElementById('btnNotifications');
  const panelNotifications = document.getElementById('panelNotifications');
  if (btnNotifications && panelNotifications) {
    btnNotifications.addEventListener('click', (e) => {
      e.stopPropagation();
      panelNotifications.classList.toggle('hidden');
    });

    document.addEventListener('click', () => {
      if (!panelNotifications.classList.contains('hidden')) {
        panelNotifications.classList.add('hidden');
      }
    });
  }

  // 9. Mobile Sidebar Toggle
  const btnMobileMenu = document.getElementById('btnMobileMenu');
  const sidebar = document.querySelector('aside');
  const sidebarBackdrop = document.getElementById('sidebarBackdrop');

  function toggleSidebar(open) {
    if (!sidebar) return;
    if (open) {
      sidebar.classList.remove('-translate-x-full');
      if (sidebarBackdrop) sidebarBackdrop.classList.remove('hidden');
    } else {
      sidebar.classList.add('-translate-x-full');
      if (sidebarBackdrop) sidebarBackdrop.classList.add('hidden');
    }
  }

  if (btnMobileMenu) btnMobileMenu.addEventListener('click', () => toggleSidebar(true));
  if (sidebarBackdrop) sidebarBackdrop.addEventListener('click', () => toggleSidebar(false));
});

