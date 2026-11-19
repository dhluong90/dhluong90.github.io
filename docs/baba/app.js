/* ============================================================================
   SHOPBAYGIAU — Interactive Engine (3D Room, Multi-Layer Try-On, Catenary Physics)
   ============================================================================ */

(function () {
  const { MODELS, WARDROBES, PRODUCTS, LOOKBOOKS } = window.BABA_CATALOG;
  const prodById = Object.fromEntries(PRODUCTS.map(p => [p.id, p]));
  const fmtVnd = (n) => n.toLocaleString('vi-VN') + '₫';

  const SVG_TAG = '<svg class="ui-icon ui-icon-sm" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 21 12l-9 9-9-9 9-9Z"/></svg>';
  const SVG_CHECK = '<svg class="ui-icon ui-icon-sm" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
  const SVG_PORCH = '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 10.5 12 4l9 6.5"/><path d="M5 9.5V20h14V9.5"/><path d="M9.5 20v-6h5v6"/></svg>';
  const SVG_GALLERY = '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 15l4-4 4 4 4-3 4 3"/></svg>';

  const CART_STORAGE_KEY = 'shopbaygiau_cart_v1';
  function loadCart() {
    try {
      const raw = localStorage.getItem(CART_STORAGE_KEY);
      if (!raw) return [];
      const arr = JSON.parse(raw);
      if (!Array.isArray(arr)) return [];
      return arr.filter(it => it && prodById[it.id] && Number.isInteger(it.qty) && it.qty > 0 && it.size);
    } catch (_) {
      return [];
    }
  }
  function saveCart() {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart));
    } catch (_) {}
  }

  // Application State
  const state = {
    modelIdx: 0,
    equipped: {
      shirt: 'sen-hong',
      pants: 'trang-kem',
      outer: null,
      hat: null,
      acc: null,
    },
    activeWardrobe: 'shirt',
    activeWall: 0,
    roomYaw: 0,
    roomLookX: 0,
    roomLookY: 0,
    studioSize: 'M',
    focusSize: 'M',
    focusProductId: null,
    isCourtyard: false,
    isLoupeSticky: false,
    isTransitioning: false,
    cart: loadCart(),
  };

  /* --------------------------------------------------------------------------
     1. WEB AUDIO CHIME (SUBTLE SILK & BAMBOO FEEDBACK)
     -------------------------------------------------------------------------- */
  let audioCtx = null;
  function playChime(freq = 587.33) {
    try {
      if (!audioCtx) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return;
        audioCtx = new AC();
      }
      if (audioCtx.state === 'suspended') audioCtx.resume();
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.25, now + 0.2);
      gain.gain.setValueAtTime(0.055, now);
      gain.gain.exponentialRampToValueAtTime(0.0008, now + 0.36);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.38);
    } catch (_) {}
  }

  let toastTimer = null;
  function showToast(msg) {
    const el = document.getElementById('toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2500);
  }
  window.showToast = showToast;

  /* --------------------------------------------------------------------------
     2. SECTION 1 — 3D VIRTUAL FLAGSHIP STORE (4-WALL CAMERA ROTATION)
     -------------------------------------------------------------------------- */
  const roomPivot = document.getElementById('room-pivot');
  const roomViewport = document.getElementById('room-viewport');

  function applyRoomTransform() {
    const yaw = state.roomYaw + state.roomLookX;
    const pitch = state.roomLookY;
    roomPivot.style.transform =
      `translateZ(var(--room-cam-z)) rotateX(${pitch.toFixed(2)}deg) rotateY(${yaw.toFixed(2)}deg)`;
  }

  function buildShowroomWalls() {
    WARDROBES.forEach((w, wallIdx) => {
      const wallEl = document.getElementById(`wall-${wallIdx}`);
      const items = PRODUCTS.filter(p => p.wardrobe === w.id);

      let innerHTML = `
        <div class="wall-header">
          <div class="wall-crest">SHOPBAYGIAU</div>
          <h2 class="wall-heading">${w.wallTitle}</h2>
        </div>
      `;

      if (wallIdx === 0 || wallIdx === 1) {
        innerHTML += `
          <div class="wall-rail-fixture">
            <div class="wall-brass-bar"></div>
            <div class="wall-items-row">
              ${items.map(p => `
                <div class="wall-garment-tile" onclick="openFocus('${p.id}')">
                  <span class="wall-hanger-bar"></span>
                  <img src="${p.thumb}" alt="${p.name}" />
                  <div class="wall-tile-meta">
                    <div class="wall-tile-name">${p.shortName}</div>
                    <div class="wall-tile-price">${fmtVnd(p.price)}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      } else if (wallIdx === 2) {
        innerHTML += `
          <div class="pegboard-panel">
            ${items.map(p => `
              <div class="peg-item" onclick="openFocus('${p.id}')">
                <img src="${p.thumb}" alt="${p.name}" />
                <div class="wall-tile-meta">
                  <div class="wall-tile-name">${p.shortName}</div>
                  <div class="wall-tile-price">${fmtVnd(p.price)}</div>
                </div>
              </div>
            `).join('')}
          </div>
        `;
      } else {
        innerHTML += `
          <div class="cubby-cabinet">
            ${items.map(p => `
              <div class="cubby-cell" onclick="openFocus('${p.id}')">
                <img src="${p.thumb}" alt="${p.name}" />
                <div class="wall-tile-meta">
                  <div class="wall-tile-name">${p.shortName}</div>
                  <div class="wall-tile-price">${fmtVnd(p.price)}</div>
                </div>
              </div>
            `).join('')}
          </div>
        `;
      }

      wallEl.innerHTML = innerHTML;
    });
    applyRoomTransform();
  }

  window.rotateRoomTo = function (wallIdx) {
    // Shortest-path modular angular rotation so turning 3 -> 0 goes +90deg instead of -270deg
    const targetMod = wallIdx * 90;
    const currentMod = ((state.roomYaw % 360) + 360) % 360;
    let delta = targetMod - currentMod;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;

    state.roomYaw += delta;
    state.activeWall = wallIdx;

    const w = WARDROBES[wallIdx];
    document.getElementById('showroom-wall-crumb').textContent = `TỦ 0${wallIdx + 1} — ${w.label.toUpperCase()}`;
    document.querySelectorAll('.dock-tab').forEach(btn => {
      btn.classList.toggle('active', Number(btn.dataset.wall) === wallIdx);
    });
    applyRoomTransform();
    playChime(440 + wallIdx * 65);
  };

  // Subtle 3D look-around tilt + horizontal drag/swipe 360° rotation in Showroom
  let roomDragStartX = null;
  let roomDragStartY = null;
  let roomDragged = false;

  roomViewport.addEventListener('pointerdown', (e) => {
    roomDragStartX = e.clientX;
    roomDragStartY = e.clientY;
    roomDragged = false;
    roomViewport.classList.add('dragging');
  });

  roomViewport.addEventListener('pointermove', (e) => {
    const rect = roomViewport.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    state.roomLookX = nx * 5.5;
    state.roomLookY = -ny * 3.2;
    if (roomDragStartX !== null && Math.abs(e.clientX - roomDragStartX) > 12) {
      roomDragged = true;
    }
    applyRoomTransform();
  });

  const endRoomDrag = (e) => {
    if (roomDragStartX === null) return;
    const dx = (e.clientX ?? roomDragStartX) - roomDragStartX;
    const dy = (e.clientY ?? roomDragStartY) - roomDragStartY;
    roomDragStartX = null;
    roomDragStartY = null;
    roomViewport.classList.remove('dragging');
    if (e.type !== 'pointercancel' && Math.abs(dx) > 52 && Math.abs(dx) > Math.abs(dy)) {
      window.rotateRoomTo((state.activeWall + (dx < 0 ? 1 : 3)) % 4);
    }
    setTimeout(() => { roomDragged = false; }, 0);
  };
  window.addEventListener('pointerup', endRoomDrag);
  roomViewport.addEventListener('pointercancel', endRoomDrag);
  roomViewport.addEventListener('click', (e) => {
    if (roomDragged) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);
  roomViewport.addEventListener('pointerleave', () => {
    state.roomLookX = 0;
    state.roomLookY = 0;
    applyRoomTransform();
  });

  /* --------------------------------------------------------------------------
     3. SECTION 2 — 7-LAYER POSE-LOCKED DRESSING STUDIO ENGINE
     -------------------------------------------------------------------------- */
  const modelRig = document.getElementById('model-rig');
  const layerBase = document.getElementById('layer-base');
  const layerPants = document.getElementById('layer-pants');
  const layerShirt = document.getElementById('layer-shirt');
  const layerHair = document.getElementById('layer-hair');
  const layerOuter = document.getElementById('layer-outer');
  const layerAcc = document.getElementById('layer-acc');
  const layerHat = document.getElementById('layer-hat');
  const dropGuide = document.getElementById('dropzone-guide');
  const dropLabel = document.getElementById('dropzone-label');
  const dragGhost = document.getElementById('drag-ghost');

  function applyBoxStyle(el, box) {
    el.style.left = (box.x * 100).toFixed(3) + '%';
    el.style.top = (box.y * 100).toFixed(3) + '%';
    el.style.width = (box.w * 100).toFixed(3) + '%';
    el.style.height = (box.h * 100).toFixed(3) + '%';
  }

  function getActiveModel() {
    return MODELS[state.modelIdx];
  }

  function getAnchorBoxForProduct(model, prod) {
    const a = model.anchors;
    if (prod.slot === 'shirt') return a.shirtBox;
    if (prod.slot === 'pants') return a.pantsBox;
    if (prod.slot === 'outer') return a[prod.anchorKey || 'jacketBox'];
    if (prod.slot === 'hat') return (a.hatBoxes && a.hatBoxes[prod.id]) || a[prod.anchorKey || 'headBox'];
    return (a.accBoxes && a.accBoxes[prod.id]) || a[prod.anchorKey || 'handBox'];
  }

  function getTargetScreenRect(prod) {
    const r = modelRig.getBoundingClientRect();
    const box = getAnchorBoxForProduct(getActiveModel(), prod);
    return {
      left: r.left + r.width * box.x,
      top: r.top + r.height * box.y,
      width: r.width * box.w,
      height: r.height * box.h,
      cx: r.left + r.width * (box.x + box.w * 0.5),
      cy: r.top + r.height * (box.y + box.h * 0.5),
      box,
    };
  }

  const ANIM_CLASSES = ['anim-hat-settle', 'anim-cloth-drape', 'anim-acc-swing', 'anim-garment-fade'];
  const SLOT_ANIM_CLASSES = {
    hat: 'anim-hat-settle',
    outer: 'anim-cloth-drape',
    acc: 'anim-acc-swing',
    shirt: 'anim-garment-fade',
    pants: 'anim-garment-fade',
  };

  const preloadCache = new Map();
  function warmImage(url) {
    if (!url) return null;
    if (preloadCache.has(url)) return preloadCache.get(url);
    const img = new Image();
    img.decoding = 'async';
    img.src = url;
    preloadCache.set(url, img);
    return img;
  }

  function preloadModelAssets(modelIdx) {
    const m = MODELS[modelIdx];
    if (!m) return;
    warmImage(m.baseUrl);
    warmImage(m.hairUrl);
    PRODUCTS.forEach(p => {
      warmImage(p.thumb);
      const layer = p.layerForModel ? p.layerForModel(m.id) : p.layerUrl;
      if (layer) warmImage(layer);
    });
  }

  function triggerSlotAnim(el, animClass) {
    if (!animClass) return;
    el.classList.remove(...ANIM_CLASSES);
    void el.offsetWidth;
    el.classList.add(animClass);
  }

  function setLayerImage(el, url, box, animClass) {
    applyBoxStyle(el, box);
    el.dataset.targetUrl = url;
    const prevAttr = el.getAttribute('src');
    if (prevAttr === url) {
      el.style.opacity = '1';
      triggerSlotAnim(el, animClass);
      return;
    }

    const warm = warmImage(url);
    el.src = url;
    if (warm && warm.complete && warm.naturalWidth > 0) {
      el.style.opacity = '1';
      triggerSlotAnim(el, animClass);
      return;
    }

    const timeout = new Promise(resolve => setTimeout(resolve, 160));
    const decoded = el.decode ? el.decode().catch(() => {}) : Promise.resolve();
    Promise.race([decoded, timeout]).then(() => {
      if (el.dataset.targetUrl !== url) return;
      el.style.opacity = '1';
      triggerSlotAnim(el, animClass);
    });
  }

  function renderModelLayers(animateSlot = null) {
    const m = getActiveModel();
    const a = m.anchors;

    layerBase.src = m.baseUrl;
    setLayerImage(layerHair, m.hairUrl, a.neckHairBox || a.shirtBox, null);

    const pantsProd = prodById[state.equipped.pants];
    setLayerImage(
      layerPants,
      pantsProd.layerForModel(m.id),
      a.pantsBox,
      animateSlot === 'pants' ? SLOT_ANIM_CLASSES.pants : null
    );

    const shirtProd = prodById[state.equipped.shirt];
    setLayerImage(
      layerShirt,
      shirtProd.layerForModel(m.id),
      a.shirtBox,
      animateSlot === 'shirt' ? SLOT_ANIM_CLASSES.shirt : null
    );

    // Optional Layer: Outerwear / Scarf
    const outerProd = state.equipped.outer ? prodById[state.equipped.outer] : null;
    if (outerProd) {
      layerOuter.classList.toggle('exact-fit', Boolean(outerProd.exactFit));
      setLayerImage(
        layerOuter,
        outerProd.layerUrl,
        getAnchorBoxForProduct(m, outerProd),
        animateSlot === 'outer' ? SLOT_ANIM_CLASSES.outer : null
      );
    } else {
      layerOuter.dataset.targetUrl = '';
      layerOuter.classList.remove('exact-fit', ...ANIM_CLASSES);
      layerOuter.style.opacity = '0';
    }

    // Optional Layer: Hat / Headband (Per-Model Fitted)
    const hatProd = state.equipped.hat ? prodById[state.equipped.hat] : null;
    if (hatProd) {
      const hatUrl = hatProd.layerForModel ? hatProd.layerForModel(m.id) : hatProd.layerUrl;
      setLayerImage(
        layerHat,
        hatUrl,
        getAnchorBoxForProduct(m, hatProd),
        animateSlot === 'hat' ? SLOT_ANIM_CLASSES.hat : null
      );
    } else {
      layerHat.dataset.targetUrl = '';
      layerHat.classList.remove(...ANIM_CLASSES);
      layerHat.style.opacity = '0';
    }

    // Optional Layer: Hand Accessory (Per-Model Fitted)
    const accProd = state.equipped.acc ? prodById[state.equipped.acc] : null;
    if (accProd) {
      const accUrl = accProd.layerForModel ? accProd.layerForModel(m.id) : accProd.layerUrl;
      setLayerImage(
        layerAcc,
        accUrl,
        getAnchorBoxForProduct(m, accProd),
        animateSlot === 'acc' ? SLOT_ANIM_CLASSES.acc : null
      );
    } else {
      layerAcc.dataset.targetUrl = '';
      layerAcc.classList.remove(...ANIM_CLASSES);
      layerAcc.style.opacity = '0';
    }

    // Dynamic palette sync with active Áo Bà Ba
    document.documentElement.style.setProperty('--bg-tint', shirtProd.bgTint);
    document.documentElement.style.setProperty('--accent', shirtProd.accent);
    document.documentElement.style.setProperty('--accent-soft', shirtProd.accentSoft);
    document.getElementById('studio-bg-word').textContent = shirtProd.bgWord;
  }

  function renderEquippedPanel() {
    const slotDefs = [
      { key: 'hat', label: 'Nón / Khăn Đóng', optional: true, placeholder: 'Chưa đội nón' },
      { key: 'outer', label: 'Khoác / Khăn Rằn', optional: true, placeholder: 'Chưa khoác ngoài' },
      { key: 'shirt', label: 'Áo Bà Ba Chính', optional: false },
      { key: 'pants', label: 'Quần Lụa Phối', optional: false },
      { key: 'acc', label: 'Phụ Kiện Tay', optional: true, placeholder: 'Chưa chọn túi/quạt' },
    ];

    let total = 0;
    let count = 0;
    const html = slotDefs.map(s => {
      const pId = state.equipped[s.key];
      const p = pId ? prodById[pId] : null;
      if (p) {
        total += p.price;
        count += 1;
        return `
          <div class="eq-slot clickable" onclick="switchWardrobeTab('${p.wardrobe}')">
            <img class="eq-thumb" src="${p.thumb}" alt="${p.name}" title="Xem chi tiết ${p.shortName}" onclick="event.stopPropagation(); openFocus('${p.id}')" />
            <div class="eq-info">
              <div class="eq-cat">${s.label}</div>
              <div class="eq-name">${p.name}</div>
              <div class="eq-price">${fmtVnd(p.price)}</div>
            </div>
            ${s.optional ? `<button class="eq-remove" onclick="event.stopPropagation(); clearSlot('${s.key}')" title="Tháo ${s.label}">×</button>` : ''}
          </div>
        `;
      }
      return `
        <div class="eq-slot empty" onclick="switchWardrobeTab('${s.key === 'acc' ? 'bottom_acc' : s.key}')" style="cursor:pointer;">
          <div class="eq-thumb" style="display:flex;align-items:center;justify-content:center;font-size:1rem;">+</div>
          <div class="eq-info">
            <div class="eq-cat">${s.label}</div>
            <div class="eq-name" style="opacity:0.7;">${s.placeholder}</div>
          </div>
        </div>
      `;
    }).join('');

    document.getElementById('equipped-list').innerHTML = html;

    const hasDiscount = count >= 3;
    const finalTotal = hasDiscount ? Math.round(total * 0.9) : total;
    const badgeEl = document.getElementById('bundle-discount-badge');
    badgeEl.classList.toggle('unlocked', hasDiscount);
    badgeEl.innerHTML = hasDiscount
      ? `${SVG_CHECK}<span>Đã giảm 10% cho ${count} món (−${fmtVnd(total - finalTotal)})</span>`
      : `${SVG_TAG}<span>Ưu đãi 10% khi chọn từ 3 món</span>`;
    document.getElementById('set-total').textContent = fmtVnd(finalTotal);
  }

  function renderWardrobePanel() {
    // Tabs
    const tabsEl = document.getElementById('wardrobe-tabs');
    tabsEl.innerHTML = WARDROBES.map(w => `
      <button class="w-tab ${w.id === state.activeWardrobe ? 'active' : ''}"
        onclick="switchWardrobeTab('${w.id}')">
        ${w.shortLabel}
      </button>
    `).join('');

    const items = PRODUCTS.filter(p => p.wardrobe === state.activeWardrobe);
    document.getElementById('wardrobe-count').textContent = `${items.length} mẫu`;

    const gridEl = document.getElementById('wardrobe-grid');
    gridEl.innerHTML = '';

    // Add quick clear buttons if viewing optional wardrobe
    if (state.activeWardrobe === 'outer' && state.equipped.outer) {
      gridEl.insertAdjacentHTML('beforeend', `<button class="w-clear-btn" onclick="clearSlot('outer')">Bỏ áo khoác / khăn</button>`);
    } else if (state.activeWardrobe === 'hat' && state.equipped.hat) {
      gridEl.insertAdjacentHTML('beforeend', `<button class="w-clear-btn" onclick="clearSlot('hat')">Bỏ nón / khăn đóng</button>`);
    } else if (state.activeWardrobe === 'bottom_acc' && state.equipped.acc) {
      gridEl.insertAdjacentHTML('beforeend', `<button class="w-clear-btn" onclick="clearSlot('acc')">Bỏ túi / quạt tay</button>`);
    }

    items.forEach(p => {
      const isActive = state.equipped[p.slot] === p.id;
      const card = document.createElement('div');
      card.className = 'w-item' + (isActive ? ' active' : '');
      card.innerHTML = `
        <img src="${p.thumb}" alt="${p.name}" draggable="false" />
        <div class="w-item-name">${p.shortName}</div>
        <div class="w-item-price">${fmtVnd(p.price)}</div>
      `;
      card.addEventListener('pointerdown', (e) => startGarmentDrag(e, p.id, card));
      gridEl.appendChild(card);
    });
  }

  function renderModelSwitcher() {
    const sw = document.getElementById('model-switcher');
    sw.innerHTML = MODELS.map((m, idx) => `
      <button class="model-btn ${idx === state.modelIdx ? 'active' : ''}" onclick="selectModel(${idx})">
        ${m.name} • ${m.height}
      </button>
    `).join('');
  }

  window.switchWardrobeTab = function (wId) {
    state.activeWardrobe = wId;
    renderWardrobePanel();
  };

  window.selectModel = function (idx) {
    if (idx === state.modelIdx) return;
    state.modelIdx = idx;
    preloadModelAssets(idx);
    renderModelSwitcher();
    renderModelLayers();
    const m = getActiveModel();
    showToast(`Đang thử đồ trên mẫu ${m.name}`);
    playChime(659.25);
  };

  window.cycleNextModel = function () {
    const nextIdx = (state.modelIdx + 1) % MODELS.length;
    window.selectModel(nextIdx);
    const studio = document.getElementById('dressing-studio');
    if (studio) {
      const rect = studio.getBoundingClientRect();
      if (rect.top > window.innerHeight * 0.45 || rect.bottom < window.innerHeight * 0.35) {
        studio.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  window.clearSlot = function (slotKey) {
    state.equipped[slotKey] = null;
    renderModelLayers();
    renderEquippedPanel();
    renderWardrobePanel();
  };

  /* --------------------------------------------------------------------------
     4. TRUE DRAG-TO-WEAR + VESTRA GLIDE-TO-WEAR ANIMATION
     -------------------------------------------------------------------------- */
  const SLOT_DROP_LABELS = {
    hat: 'Thả để đội nón',
    outer: 'Thả để khoác ngoài',
    shirt: 'Thả để mặc Áo Bà Ba',
    pants: 'Thả để đổi quần lụa',
    acc: 'Thả để phối phụ kiện',
  };

  function flashShimmer() {
    const sf = document.getElementById('shimmer-flash');
    sf.classList.remove('run');
    void sf.offsetWidth;
    sf.classList.add('run');
  }

  window.equipProduct = function (prodId, fromRect = null, skipGlide = false) {
    const prod = prodById[prodId];
    if (!prod) return;

    const finalize = () => {
      state.equipped[prod.slot] = prod.id;
      renderModelLayers(prod.slot);
      renderEquippedPanel();
      renderWardrobePanel();
      flashShimmer();
      playChime(587.33);
      state.isTransitioning = false;
    };

    if (skipGlide) {
      finalize();
      return;
    }

    state.isTransitioning = true;
    const target = getTargetScreenRect(prod);
    const startRect = fromRect || {
      left: window.innerWidth * 0.72,
      top: target.top,
      width: Math.max(70, target.width * 0.65),
      height: Math.max(80, target.height * 0.65),
    };

    dragGhost.src = prod.thumb;
    dragGhost.style.transition = 'none';
    dragGhost.style.left = startRect.left + 'px';
    dragGhost.style.top = startRect.top + 'px';
    dragGhost.style.width = startRect.width + 'px';
    dragGhost.style.height = startRect.height + 'px';
    dragGhost.style.transform = 'rotate(4deg)';
    dragGhost.style.opacity = '1';

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        dragGhost.style.transition = 'all 0.44s cubic-bezier(0.22, 1, 0.36, 1)';
        dragGhost.style.left = target.left + 'px';
        dragGhost.style.top = target.top + 'px';
        dragGhost.style.width = target.width + 'px';
        dragGhost.style.height = target.height + 'px';
        dragGhost.style.transform = 'rotate(0deg)';
      });
    });

    setTimeout(() => {
      finalize();
      dragGhost.style.transition = 'opacity 0.16s ease';
      dragGhost.style.opacity = '0';
    }, 390);
  };

  let dragSession = null;

  function startGarmentDrag(e, prodId, cardEl) {
    if (state.isTransitioning) return;
    const prod = prodById[prodId];
    const thumb = cardEl.querySelector('img');
    const startRect = thumb.getBoundingClientRect();
    const target = getTargetScreenRect(prod);

    dragSession = {
      prod,
      startX: e.clientX,
      startY: e.clientY,
      lastX: e.clientX,
      moved: false,
      startRect,
      target,
    };
    try { cardEl.setPointerCapture(e.pointerId); } catch (_) {}

    const onMove = (ev) => {
      if (!dragSession) return;
      const dx = ev.clientX - dragSession.startX;
      const dy = ev.clientY - dragSession.startY;
      if (!dragSession.moved && Math.hypot(dx, dy) > 8) {
        dragSession.moved = true;
        dragGhost.src = prod.thumb;
        dragGhost.style.transition = 'none';
        dragGhost.style.opacity = '1';
        applyBoxStyle(dropGuide, dragSession.target.box);
        dropLabel.textContent = SLOT_DROP_LABELS[prod.slot] || 'Thả vào để mặc thử';
        dropGuide.classList.add('active');
      }
      if (!dragSession.moved) return;

      const t = dragSession.target;
      const dist = Math.hypot(ev.clientX - t.cx, ev.clientY - t.cy);
      const prox = Math.max(0, Math.min(1, 1 - (dist - 50) / 340));
      const curW = dragSession.startRect.width + (t.width - dragSession.startRect.width) * prox;
      const curH = dragSession.startRect.height + (t.height - dragSession.startRect.height) * prox;

      const magnet = dist < Math.max(t.width, 100) * 0.72 ? 0.35 : 0;
      const gx = ev.clientX * (1 - magnet) + t.cx * magnet - curW * 0.5;
      const gy = ev.clientY * (1 - magnet) + t.cy * magnet - curH * 0.5;

      const vx = ev.clientX - dragSession.lastX;
      dragSession.lastX = ev.clientX;
      const tilt = Math.max(-14, Math.min(14, vx * 0.85)) * (1 - magnet * 0.8);

      dragGhost.style.left = gx + 'px';
      dragGhost.style.top = gy + 'px';
      dragGhost.style.width = curW + 'px';
      dragGhost.style.height = curH + 'px';
      dragGhost.style.transform = `rotate(${tilt.toFixed(1)}deg)`;

      dropGuide.classList.toggle('snapping', dist < Math.max(t.width, 110) * 0.9);
    };

    const onUp = (ev) => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onUp);
      if (!dragSession) return;
      const s = dragSession;
      dragSession = null;
      dropGuide.classList.remove('active', 'snapping');

      if (!s.moved) {
        if (s.prod.slot !== 'shirt' && s.prod.slot !== 'pants' && state.equipped[s.prod.slot] === s.prod.id) {
          window.clearSlot(s.prod.slot);
          showToast(`Đã bỏ ${s.prod.shortName}`);
          playChime(440);
        } else {
          window.equipProduct(s.prod.id, s.startRect);
        }
        return;
      }

      const t = s.target;
      const dist = Math.hypot(ev.clientX - t.cx, ev.clientY - t.cy);
      if (dist < Math.max(t.width * 1.35, 175)) {
        state.isTransitioning = true;
        dragGhost.style.transition = 'all 0.22s cubic-bezier(0.22, 1, 0.36, 1)';
        dragGhost.style.left = t.left + 'px';
        dragGhost.style.top = t.top + 'px';
        dragGhost.style.width = t.width + 'px';
        dragGhost.style.height = t.height + 'px';
        dragGhost.style.transform = 'rotate(0deg)';
        setTimeout(() => {
          window.equipProduct(s.prod.id, null, true);
          dragGhost.style.transition = 'opacity 0.16s ease';
          dragGhost.style.opacity = '0';
        }, 200);
      } else {
        dragGhost.style.transition = 'all 0.26s ease';
        dragGhost.style.left = s.startRect.left + 'px';
        dragGhost.style.top = s.startRect.top + 'px';
        dragGhost.style.width = s.startRect.width + 'px';
        dragGhost.style.height = s.startRect.height + 'px';
        dragGhost.style.opacity = '0';
      }
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onUp);
  }

  /* --------------------------------------------------------------------------
     5. HOLD-TO-ZOOM 2.4x LOUPE + 3D MODEL PARALLAX + BACKDROP TOGGLE
     -------------------------------------------------------------------------- */
  const loupe = document.getElementById('loupe');
  let holdTimer = null;
  let isLoupeOpen = false;

  function renderLoupeAt(clientX, clientY) {
    const r = modelRig.getBoundingClientRect();
    const relX = (clientX - r.left) / r.width;
    const relY = (clientY - r.top) / r.height;
    const m = getActiveModel();
    const a = m.anchors;
    const outerProd = state.equipped.outer ? prodById[state.equipped.outer] : null;
    const shirtProd = prodById[state.equipped.shirt];
    const pantsProd = prodById[state.equipped.pants];
    const zoom = 2.4;

    loupe.style.left = clientX + 'px';
    loupe.style.top = (clientY - (window.innerWidth <= 768 ? 50 : 0)) + 'px';

    const inBox = (box) => box && relY >= box.y && relY <= box.y + box.h && relX >= box.x && relX <= box.x + box.w;
    const outerBox = outerProd ? getAnchorBoxForProduct(m, outerProd) : null;

    let sampled = null;
    if (outerProd && inBox(outerBox)) {
      sampled = { url: outerProd.layerUrl, box: outerBox };
    } else if (shirtProd && inBox(a.shirtBox)) {
      sampled = { url: shirtProd.layerForModel(m.id), box: a.shirtBox };
    } else if (pantsProd && inBox(a.pantsBox)) {
      sampled = { url: pantsProd.layerForModel(m.id), box: a.pantsBox };
    }

    if (sampled) {
      const lx = (relX - sampled.box.x) / sampled.box.w;
      const ly = (relY - sampled.box.y) / sampled.box.h;
      const wScaled = r.width * sampled.box.w * zoom;
      const hScaled = r.height * sampled.box.h * zoom;
      loupe.style.backgroundImage = `url('${sampled.url}')`;
      loupe.style.backgroundSize = `${wScaled}px ${hScaled}px`;
      loupe.style.backgroundPosition = `${-(lx * wScaled - 88)}px ${-(ly * hScaled - 88)}px`;
    } else {
      loupe.style.backgroundImage = `url('${m.baseUrl}')`;
      loupe.style.backgroundSize = `${r.width * zoom}px ${r.height * zoom}px`;
      loupe.style.backgroundPosition = `${-(relX * r.width * zoom - 88)}px ${-(relY * r.height * zoom - 88)}px`;
    }
    loupe.classList.add('open');
    isLoupeOpen = true;
  }

  function closeLoupe() {
    isLoupeOpen = false;
    loupe.classList.remove('open');
  }

  window.toggleLoupeMode = function () {
    state.isLoupeSticky = !state.isLoupeSticky;
    document.getElementById('btn-loupe-toggle').classList.toggle('active', state.isLoupeSticky);
    if (!state.isLoupeSticky) closeLoupe();
    else showToast('Di chuột lên trang phục để soi thớ vải');
  };

  modelRig.addEventListener('pointerdown', (e) => {
    clearTimeout(holdTimer);
    holdTimer = setTimeout(() => renderLoupeAt(e.clientX, e.clientY), 220);
  });
  modelRig.addEventListener('pointermove', (e) => {
    if (state.isLoupeSticky || isLoupeOpen) renderLoupeAt(e.clientX, e.clientY);
  });
  modelRig.addEventListener('pointerleave', () => {
    clearTimeout(holdTimer);
    if (!state.isLoupeSticky) closeLoupe();
    else closeLoupe();
  });
  window.addEventListener('pointerup', () => {
    clearTimeout(holdTimer);
    if (!state.isLoupeSticky) closeLoupe();
  });

  // Subtle 3D Parallax on model rig
  document.getElementById('dressing-studio').addEventListener('pointermove', (e) => {
    const nx = (e.clientX / window.innerWidth - 0.5) * 2;
    const ny = (e.clientY / window.innerHeight - 0.5) * 2;
    modelRig.style.setProperty('--px', `${(nx * 9).toFixed(1)}px`);
    modelRig.style.setProperty('--py', `${(ny * 4).toFixed(1)}px`);
    modelRig.style.setProperty('--ry', `${(nx * 4.5).toFixed(2)}deg`);
    modelRig.style.setProperty('--rx', `${(-ny * 2.5).toFixed(2)}deg`);
  });

  window.toggleStudioBackdrop = function () {
    state.isCourtyard = !state.isCourtyard;
    const sec = document.getElementById('dressing-studio');
    sec.classList.toggle('mode-courtyard', state.isCourtyard);
    document.getElementById('btn-backdrop-toggle').classList.toggle('active', state.isCourtyard);
    document.getElementById('studio-bg-icon').innerHTML = state.isCourtyard ? SVG_GALLERY : SVG_PORCH;
    document.getElementById('studio-bg-label').textContent = state.isCourtyard ? 'Nền giấy dó' : 'Hiên nhà gỗ';
    showToast(state.isCourtyard ? 'Đã chuyển nền Hiên nhà gỗ' : 'Đã chuyển nền Giấy dó');
  };

  // Studio & Modal Size Selector sync
  function syncSizeChips(size) {
    state.studioSize = size;
    state.focusSize = size;
    document.querySelectorAll('#studio-size-chips .size-chip, #focus-size-chips .size-chip').forEach(b => {
      b.classList.toggle('active', b.dataset.size === size);
    });
  }
  document.querySelectorAll('#studio-size-chips .size-chip, #focus-size-chips .size-chip').forEach(btn => {
    btn.addEventListener('click', () => syncSizeChips(btn.dataset.size));
  });

  /* --------------------------------------------------------------------------
     6. SECTION 3 — CATENARY PHYSICS SILK RAIL (CLASSIC STATIONARY PENDULUM)
     -------------------------------------------------------------------------- */
  const pendulums = [];

  function initCatenaryRail() {
    const stage = document.getElementById('catenary-stage');
    const svg = document.getElementById('catenary-svg');
    const wrap = document.getElementById('pendulum-hangers');
    const railItems = PRODUCTS.filter(p => p.wardrobe === 'shirt' || p.wardrobe === 'outer');

    wrap.innerHTML = '';
    pendulums.length = 0;

    function layoutRail() {
      const W = stage.clientWidth || 1200;
      const isSm = W < 860;
      const startX = isSm ? 26 : 56;
      const endX = W - startX;
      const span = endX - startX;
      const sag = isSm ? 28 : 48;
      const baseY = 24;
      const cardHalfW = isSm ? 48 : 65;

      svg.innerHTML = `
        <path d="M ${startX} ${baseY} Q ${W * 0.5} ${baseY + sag * 2} ${endX} ${baseY}"
          fill="none" stroke="#8a6c44" stroke-width="4" stroke-linecap="round" />
      `;

      railItems.forEach((p, i) => {
        const u = (i + 0.5) / railItems.length;
        const x = startX + u * span;
        const y = baseY + sag * 4 * u * (1 - u);

        let node = pendulums[i];
        if (!node) {
          const el = document.createElement('div');
          el.className = 'pendulum-hanger';
          el.innerHTML = `
            <div class="hanger-hook"></div>
            <div class="hanger-bar"></div>
            <img src="${p.thumb}" alt="${p.name}" draggable="false" />
            <div class="hanger-tooltip">${p.shortName} • ${fmtVnd(p.price)}</div>
          `;
          el.addEventListener('click', () => window.openFocus(p.id));
          wrap.appendChild(el);
          node = { el, x, y, theta: 0, omega: 0 };
          pendulums.push(node);
        } else {
          node.x = x;
          node.y = y;
        }
        node.el.style.left = (node.x - cardHalfW) + 'px';
        node.el.style.top = (node.y - 2) + 'px';
      });
    }

    layoutRail();
    window.addEventListener('resize', layoutRail);

    let lastMouseX = null;
    stage.addEventListener('pointermove', (e) => {
      const r = stage.getBoundingClientRect();
      const mx = e.clientX - r.left;
      const vx = lastMouseX === null ? 0 : Math.max(-35, Math.min(35, mx - lastMouseX));
      lastMouseX = mx;

      pendulums.forEach(p => {
        const d = Math.abs(mx - p.x);
        if (d < 105) {
          const strength = 1 - d / 105;
          p.omega += (vx * 0.0028 + (vx === 0 ? 0.015 : 0)) * strength;
        }
      });
    });

    function stepPhysics() {
      for (const p of pendulums) {
        const accel = -0.095 * p.theta - 0.065 * p.omega;
        p.omega += accel;
        p.theta += p.omega;
        p.el.style.transform = `rotate(${(p.theta * 18).toFixed(2)}deg)`;
      }
      requestAnimationFrame(stepPhysics);
    }
    requestAnimationFrame(stepPhysics);
  }

  /* --------------------------------------------------------------------------
     7. SECTION 4 — CURATED EDITORIAL LOOKBOOK
     -------------------------------------------------------------------------- */
  function buildLookbooks() {
    const grid = document.getElementById('lookbook-grid');
    grid.innerHTML = LOOKBOOKS.map(lb => `
      <article class="lookbook-card">
        <div class="lookbook-media">
          <img src="${lb.image}" alt="${lb.title}" loading="lazy" />
          ${lb.hotspots.map(h => {
            const p = prodById[h.productId];
            const flip = parseFloat(h.x) > 55 ? ' flip-left' : '';
            return `
              <button class="hotspot-pin${flip}" style="left:${h.x}; top:${h.y};" onclick="openFocus('${p.id}')">
                <span class="hotspot-tag">${p.shortName} • ${fmtVnd(p.price)}</span>
              </button>
            `;
          }).join('')}
        </div>
        <div class="lookbook-body">
          <div>
            <div class="lookbook-loc">${lb.location}</div>
            <h3 class="lookbook-name">${lb.title}</h3>
            <p class="lookbook-text">${lb.caption}</p>
          </div>
          <button class="lookbook-try-btn" onclick="equipLookbook('${lb.id}')">
            Mặc thử trọn bộ
          </button>
        </div>
      </article>
    `).join('');
  }

  window.equipLookbook = function (lbId) {
    const lb = LOOKBOOKS.find(l => l.id === lbId);
    if (!lb) return;
    Object.assign(state.equipped, lb.equip);
    renderModelLayers();
    renderEquippedPanel();
    renderWardrobePanel();
    flashShimmer();
    document.getElementById('dressing-studio').scrollIntoView({ behavior: 'smooth' });
    showToast(`Đã phối trọn bộ ${lb.title}`);
    playChime(659.25);
  };

  /* --------------------------------------------------------------------------
     8. SECTION 5 — SMART SIZE ADVISOR
     -------------------------------------------------------------------------- */
  let currentRecommended = 'M';
  window.calcSmartSize = function () {
    const h = Number(document.getElementById('rng-height').value);
    const w = Number(document.getElementById('rng-weight').value);
    const waist = Number(document.getElementById('rng-waist').value);

    document.getElementById('val-height').textContent = h + ' cm';
    document.getElementById('val-weight').textContent = w + ' kg';
    document.getElementById('val-waist').textContent = waist + ' cm';

    let sz = 'M';
    let note = 'Phom Bà Ba ôm nhẹ eo, dài tà 62cm tôn dáng thanh thoát.';
    if (w < 46 && waist < 63) {
      sz = 'XS';
      note = 'Phom nhỏ nhắn gọn vai (tà 58cm), ôm nhẹ tôn vòng eo mảnh mai.';
    } else if (w < 51 && waist < 68) {
      sz = 'S';
      note = 'Phom thanh mảnh phổ biến (tà 60cm), tôn đường cong nhẹ nhàng.';
    } else if (w < 57 && waist < 74) {
      sz = 'M';
      note = 'Phom chuẩn Á Đông cân đối (tà 62cm), thoải mái cử động.';
    } else if (w < 64 && waist < 81) {
      sz = 'L';
      note = 'Phom rộng thoáng nhẹ tà (tà 64cm), che khuyết điểm vòng eo tinh tế.';
    } else {
      sz = 'XL';
      note = 'Phom thoải mái tối đa hoặc đặt may theo số đo riêng miễn phí.';
    }

    currentRecommended = sz;
    document.getElementById('rec-size').textContent = sz;
    document.getElementById('rec-note').textContent = note;
    document.getElementById('rec-btn-size').textContent = sz;
  };

  window.applyRecommendedSize = function () {
    syncSizeChips(currentRecommended);
    document.getElementById('dressing-studio').scrollIntoView({ behavior: 'smooth' });
    showToast(`Đã chọn size ${currentRecommended}`);
  };

  /* --------------------------------------------------------------------------
     9. GLOBAL OVERLAYS: FOCUS INSPECTION, SEARCH, FLY-TO-CART & CART DRAWER
     -------------------------------------------------------------------------- */
  window.openFocus = function (prodId) {
    const p = prodById[prodId];
    if (!p) return;
    state.focusProductId = prodId;
    document.getElementById('focus-img').src = p.thumb;
    document.getElementById('focus-sku').textContent = p.sku;
    document.getElementById('focus-name').textContent = p.name;
    document.getElementById('focus-price').textContent = fmtVnd(p.price);
    document.getElementById('focus-desc').textContent = p.desc;
    document.getElementById('focus-fabric').textContent = p.fabric;
    syncSizeChips(state.focusSize);
    document.getElementById('focus-overlay').classList.add('open');
  };

  window.closeFocus = function () {
    document.getElementById('focus-overlay').classList.remove('open');
  };

  window.tryFocusInStudio = function () {
    const id = state.focusProductId;
    const p = prodById[id];
    window.closeFocus();
    if (!p) return;
    state.activeWardrobe = p.wardrobe;
    document.getElementById('dressing-studio').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      window.equipProduct(p.id, null, false);
    }, 380);
  };

  window.addFocusToCart = function () {
    const p = prodById[state.focusProductId];
    if (!p) return;
    const imgEl = document.getElementById('focus-img');
    addProductToCart(p, state.focusSize, imgEl.getBoundingClientRect());
    window.closeFocus();
  };

  window.addFullOutfitToCart = function () {
    const slots = ['hat', 'outer', 'shirt', 'pants', 'acc'];
    let added = 0;
    slots.forEach(s => {
      const pId = state.equipped[s];
      if (pId) {
        addProductToCart(prodById[pId], state.studioSize, null, true);
        added++;
      }
    });
    const rect = getTargetScreenRect(prodById[state.equipped.shirt]);
    launchFlyAnimation(prodById[state.equipped.shirt].thumb, rect);
    showToast(`Đã thêm ${added} món (size ${state.studioSize}) vào giỏ hàng`);
  };

  function launchFlyAnimation(imgSrc, fromRect) {
    const cartRect = document.getElementById('btn-cart').getBoundingClientRect();
    const flyer = document.createElement('img');
    flyer.src = imgSrc;
    flyer.className = 'fly-item';
    const startX = (fromRect ? fromRect.left + fromRect.width * 0.5 : window.innerWidth * 0.5) - 42;
    const startY = (fromRect ? fromRect.top + fromRect.height * 0.5 : window.innerHeight * 0.5) - 48;
    flyer.style.left = startX + 'px';
    flyer.style.top = startY + 'px';
    flyer.style.width = '84px';
    flyer.style.height = '96px';
    document.body.appendChild(flyer);

    const p0 = { x: startX, y: startY };
    const p2 = { x: cartRect.left + cartRect.width * 0.5 - 14, y: cartRect.top + cartRect.height * 0.5 - 14 };
    const p1 = { x: (p0.x + p2.x) * 0.5 + 40, y: Math.min(p0.y, p2.y) - 110 };
    const t0 = performance.now();

    function step(now) {
      const u = Math.min(1, (now - t0) / 520);
      const e = 1 - Math.pow(1 - u, 3);
      const bx = (1 - e) * (1 - e) * p0.x + 2 * (1 - e) * e * p1.x + e * e * p2.x;
      const by = (1 - e) * (1 - e) * p0.y + 2 * (1 - e) * e * p1.y + e * e * p2.y;
      flyer.style.left = bx + 'px';
      flyer.style.top = by + 'px';
      flyer.style.transform = `scale(${(1 - e * 0.72).toFixed(3)}) rotate(${(e * 18).toFixed(1)}deg)`;
      flyer.style.opacity = (1 - e * 0.25).toFixed(2);
      if (u < 1) requestAnimationFrame(step);
      else {
        flyer.remove();
        renderCart();
        const btn = document.getElementById('btn-cart');
        btn.classList.add('bump');
        setTimeout(() => btn.classList.remove('bump'), 280);
      }
    }
    requestAnimationFrame(step);
  }

  function addProductToCart(prod, size, fromRect, silent = false) {
    const existing = state.cart.find(it => it.id === prod.id && it.size === size);
    if (existing) existing.qty += 1;
    else state.cart.push({ id: prod.id, size, qty: 1 });

    if (!silent) {
      launchFlyAnimation(prod.thumb, fromRect);
      showToast(`Đã thêm ${prod.shortName} (size ${size}) vào giỏ`);
    } else {
      renderCart();
    }
    playChime(783.99);
  }

  function renderCart() {
    saveCart();
    const totalQty = state.cart.reduce((s, it) => s + it.qty, 0);
    const rawSum = state.cart.reduce((s, it) => s + prodById[it.id].price * it.qty, 0);
    const hasBundle = totalQty >= 3;
    const discount = hasBundle ? Math.round(rawSum * 0.1) : 0;

    document.getElementById('cart-count').textContent = totalQty;
    document.getElementById('cart-discount-line').style.display = hasBundle ? 'flex' : 'none';
    document.getElementById('cart-discount-val').textContent = `-${fmtVnd(discount)}`;
    document.getElementById('cart-total').textContent = fmtVnd(rawSum - discount);

    const listEl = document.getElementById('cart-items');
    if (!state.cart.length) {
      listEl.innerHTML = `<div style="text-align:center; padding:3rem 1rem; color:#8a7f76; font-size:0.86rem;">
        Giỏ hàng chưa có sản phẩm.<br/>Chọn trang phục từ tủ đồ hoặc kéo thả lên người mẫu để thử.
      </div>`;
      return;
    }

    listEl.innerHTML = state.cart.map((it, idx) => {
      const p = prodById[it.id];
      return `
        <div class="cart-row">
          <img src="${p.thumb}" alt="${p.name}" />
          <div style="flex:1; min-width:0;">
            <div style="font-size:0.82rem; font-weight:600;">${p.name}</div>
            <div style="font-size:0.7rem; color:#6c6157;">Size ${it.size} • ${p.sku}</div>
            <div class="num-price" style="font-size:0.76rem; color:var(--accent); font-weight:600; margin-top:2px;">${fmtVnd(p.price)}</div>
          </div>
          <div style="display:flex; align-items:center; gap:0.35rem;">
            <button class="eq-remove" onclick="changeCartQty(${idx}, -1)">−</button>
            <span class="num-price" style="font-size:0.78rem; min-width:16px; text-align:center;">${it.qty}</span>
            <button class="eq-remove" onclick="changeCartQty(${idx}, 1)">+</button>
          </div>
        </div>
      `;
    }).join('');
  }

  window.changeCartQty = function (idx, delta) {
    state.cart[idx].qty += delta;
    if (state.cart[idx].qty <= 0) state.cart.splice(idx, 1);
    renderCart();
  };

  window.openCart = function (open) {
    renderCart();
    document.getElementById('drawer-backdrop').classList.toggle('open', open);
    document.getElementById('cart-drawer').classList.toggle('open', open);
  };

  window.submitDemoOrder = function () {
    if (!state.cart.length) {
      showToast('Giỏ hàng hiện đang trống');
      return;
    }
    const totalQty = state.cart.reduce((s, it) => s + it.qty, 0);
    window.openCart(false);
    state.cart.length = 0;
    renderCart();
    showToast(`Đã ghi nhận đơn đặt may ${totalQty} món tại shopbaygiau`);
    playChime(880);
  };

  // Search Modal (Accent-Insensitive Vietnamese Search!)
  const stripVn = (str) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase();

  window.openSearch = function (open) {
    const el = document.getElementById('search-overlay');
    el.classList.toggle('open', open);
    if (open) {
      renderSearchResults();
      setTimeout(() => document.getElementById('search-input').focus(), 80);
    }
  };

  window.renderSearchResults = function () {
    const q = stripVn(document.getElementById('search-input').value.trim());
    const matches = PRODUCTS.filter(p =>
      !q || stripVn(`${p.name} ${p.fabric} ${p.sku}`).includes(q)
    ).slice(0, 10);

    document.getElementById('search-results').innerHTML = matches.map(p => `
      <div class="search-item" onclick="openSearch(false); openFocus('${p.id}')">
        <img src="${p.thumb}" alt="${p.name}" />
        <div style="min-width:0;">
          <div style="font-size:0.78rem; font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${p.name}</div>
          <div class="num-price" style="font-size:0.7rem; color:var(--accent);">${fmtVnd(p.price)}</div>
        </div>
      </div>
    `).join('') || `<div style="grid-column:1/-1; text-align:center; padding:1.5rem; color:#8a7f76;">Không tìm thấy sản phẩm phù hợp.</div>`;
  };

  // Active nav highlight on scroll
  const navSections = ['showroom-3d', 'dressing-studio', 'silk-rail', 'lookbook', 'craft-size'];
  window.addEventListener('scroll', () => {
    const mid = window.scrollY + window.innerHeight * 0.35;
    let cur = navSections[0];
    navSections.forEach(id => {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= mid) cur = id;
    });
    document.querySelectorAll('.header-link').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
    });
  }, { passive: true });

  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openSearch(true);
    }
    if (e.key === 'Escape') {
      openSearch(false);
      closeFocus();
      openCart(false);
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const tag = document.activeElement && document.activeElement.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      const anyModal = document.getElementById('focus-overlay').classList.contains('open')
        || document.getElementById('search-overlay').classList.contains('open')
        || document.getElementById('cart-drawer').classList.contains('open');
      if (!anyModal && window.scrollY < window.innerHeight * 0.6) {
        e.preventDefault();
        window.rotateRoomTo((state.activeWall + (e.key === 'ArrowRight' ? 1 : 3)) % 4);
      }
    }
  });

  // Initialize Complete Website
  buildShowroomWalls();
  preloadModelAssets(state.modelIdx);
  renderModelLayers();
  renderEquippedPanel();
  renderWardrobePanel();
  renderModelSwitcher();
  initCatenaryRail();
  buildLookbooks();
  calcSmartSize();
  renderCart();
})();
