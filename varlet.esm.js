import { reactive as je, onMounted as Oo, nextTick as Ye, onActivated as gt, isRef as em, watch as ce, onBeforeUnmount as $r, onDeactivated as Kt, onUnmounted as To, inject as nm, getCurrentInstance as Zt, computed as M, ref as C, unref as ao, provide as tm, isVNode as om, Comment as rm, Fragment as Ne, createApp as am, h as Pd, onBeforeMount as im, defineComponent as x, createVNode as Z, Teleport as jn, Transition as We, withDirectives as Te, vShow as Un, mergeProps as ze, openBlock as p, createBlock as $e, resolveDynamicComponent as Jt, normalizeClass as v, normalizeStyle as F, resolveComponent as ie, resolveDirective as Ve, withCtx as me, createElementVNode as B, renderSlot as R, toDisplayString as ae, createElementBlock as S, renderList as Ge, createCommentVNode as Q, onUpdated as Eo, createTextVNode as Ie, pushScopeId as bt, popScopeId as yt, withModifiers as Cn, normalizeProps as st, guardReactiveProps as Io, vModelText as lm, createSlots as rr, withKeys as ds, TransitionGroup as sm } from "vue";
const Od = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, TE = je(Od);
var wn = je(Od), um = Object.defineProperty, dm = Object.defineProperties, cm = Object.getOwnPropertyDescriptors, cs = Object.getOwnPropertySymbols, fm = Object.prototype.hasOwnProperty, vm = Object.prototype.propertyIsEnumerable, fs = (e, n, t) => n in e ? um(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, mm = (e, n) => {
  for (var t in n || (n = {}))
    fm.call(n, t) && fs(e, t, n[t]);
  if (cs)
    for (var t of cs(n))
      vm.call(n, t) && fs(e, t, n[t]);
  return e;
}, hm = (e, n) => dm(e, cm(n)), nn = (e) => typeof e == "string", gi = (e) => typeof e == "boolean", mn = (e) => typeof e == "number", co = (e) => Object.prototype.toString.call(e) === "[object Object]", pm = (e) => typeof e == "object" && e !== null, Qt = (e) => typeof e == "function", Ae = (e) => Array.isArray(e), gm = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Rn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, bi = (e) => e === window, bm = () => Jn() && "ontouchstart" in window, Jn = () => typeof window < "u", vs = (e) => [...new Set(e)], Qo = (e) => Ae(e) ? e : [e], ar = (e, n) => {
  if (e.length) {
    const t = e.indexOf(n);
    if (t > -1)
      return e.splice(t, 1);
  }
}, ym = (e, n, t = "start") => {
  let o = t === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && o >= 0 && o <= e.length - 1; ) {
    if (n(e[o], o, e))
      return [e[o], o];
    t === "start" ? o++ : o--;
  }
  return [null, -1];
}, Td = () => typeof globalThis < "u" ? globalThis : Jn() ? window : typeof global < "u" ? global : self, fo = (e) => {
  const n = Td();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e);
}, ms = (e) => {
  const n = Td();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}, _o = () => new Promise((e) => {
  fo(e);
}), fn = () => new Promise((e) => {
  fo(() => {
    fo(e);
  });
}), Tt = (e) => window.getComputedStyle(e), en = (e) => {
  if (bi(e)) {
    const n = e.innerWidth, t = e.innerHeight, o = {
      x: 0,
      y: 0,
      top: 0,
      left: 0,
      right: n,
      bottom: t,
      width: n,
      height: t
    };
    return hm(mm({}, o), {
      toJSON: () => o
    });
  }
  return e.getBoundingClientRect();
}, $m = (e) => {
  const { top: n, bottom: t, left: o, right: r } = en(e), { width: a, height: i } = en(window), l = o <= a && r >= 0, s = n <= i && t >= 0;
  return l && s;
}, wm = (e) => new Promise((n) => {
  const t = new FileReader();
  t.onload = () => {
    n(t.result);
  }, t.readAsDataURL(e);
}), Ln = (e) => {
  e.cancelable !== !1 && e.preventDefault();
}, Ht = (e) => {
  const n = "scrollTop" in e ? e.scrollTop : e.scrollY;
  return Math.max(n, 0);
}, yi = (e) => {
  const n = "scrollLeft" in e ? e.scrollLeft : e.scrollX;
  return Math.max(n, 0);
}, $i = (e, n = 200) => {
  let t, o = 0;
  return function r(...a) {
    const i = Date.now(), l = i - o;
    o || (o = i), t && window.clearTimeout(t), l >= n ? (e.apply(this, a), o = i) : t = window.setTimeout(() => {
      r.apply(this, a);
    }, n - l);
  };
}, L = (e) => e == null ? 0 : nn(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : gi(e) ? Number(e) : e, ct = (e, n, t) => Math.min(t, Math.max(n, e)), Cm = (e, n) => ct(e, 0, n.length - 1), Sm = (e) => wi(e).replace(e.charAt(0), e.charAt(0).toUpperCase()), wi = (e) => e.replace(/-(\w)/g, (n, t) => t.toUpperCase()), Ed = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), km = Object.defineProperty, ir = Object.getOwnPropertySymbols, Id = Object.prototype.hasOwnProperty, Bd = Object.prototype.propertyIsEnumerable, hs = (e, n, t) => n in e ? km(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Pm = (e, n) => {
  for (var t in n || (n = {}))
    Id.call(n, t) && hs(e, t, n[t]);
  if (ir)
    for (var t of ir(n))
      Bd.call(n, t) && hs(e, t, n[t]);
  return e;
}, Om = (e, n) => {
  var t = {};
  for (var o in e)
    Id.call(e, o) && n.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && ir)
    for (var o of ir(e))
      n.indexOf(o) < 0 && Bd.call(e, o) && (t[o] = e[o]);
  return t;
};
function rn(e) {
  let n = !1;
  Oo(() => {
    e(), Ye(() => {
      n = !0;
    });
  }), gt(() => {
    n && e();
  });
}
function ft(e, n, t, o = {}) {
  if (!Jn())
    return;
  const { passive: r = !1, capture: a = !1 } = o;
  let i = !1, l = !1;
  const s = (m) => Qt(m) ? m() : ao(m), u = (m) => {
    if (i || l)
      return;
    const g = s(m);
    g && (g.addEventListener(n, t, {
      passive: r,
      capture: a
    }), i = !0);
  }, d = (m) => {
    if (!i || l)
      return;
    const g = s(m);
    g && (g.removeEventListener(n, t, {
      capture: a
    }), i = !1);
  };
  let c;
  em(e) && (c = ce(
    () => e.value,
    (m, g) => {
      d(g), u(m);
    }
  ));
  const f = () => {
    c == null || c(), d(e), l = !0;
  };
  return rn(() => {
    u(e);
  }), $r(() => {
    d(e);
  }), Kt(() => {
    d(e);
  }), f;
}
function Md(e, n, t) {
  if (!Jn())
    return;
  ft(document, n, (r) => {
    const a = Qt(e) ? e() : ao(e);
    a && !a.contains(r.target) && t(r);
  });
}
function wr(e) {
  To(() => {
    e();
  }), Kt(() => {
    e();
  });
}
function Tm(e) {
  const n = Zt();
  return e in n.provides;
}
function an(e) {
  if (!Tm(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const t = nm(e), { childInstances: o, collect: r, clear: a } = t, i = Om(t, ["childInstances", "collect", "clear"]), l = Zt();
  return {
    index: M(() => o.indexOf(l)),
    parentProvider: i,
    bindParent: (d) => {
      Oo(() => {
        Ye().then(() => {
          r(l, d);
        });
      }), $r(() => {
        Ye().then(() => {
          a(l, d);
        });
      });
    }
  };
}
function Em(e) {
  const n = [], t = (o) => {
    if (o != null && o.component) {
      t(o == null ? void 0 : o.component.subTree);
      return;
    }
    Array.isArray(o == null ? void 0 : o.children) && o.children.forEach((r) => {
      om(r) && (n.push(r), t(r));
    });
  };
  return t(e), n;
}
function ln(e) {
  const n = Zt(), t = je([]), o = [], r = M(() => t.length), a = () => {
    const u = Em(n.subTree);
    t.sort((d, c) => u.indexOf(d.vnode) - u.indexOf(c.vnode));
  }, i = (u, d) => {
    t.push(u), o.push(d), a();
  }, l = (u, d) => {
    ar(t, u), ar(o, d);
  };
  return {
    length: r,
    childProviders: o,
    bindChildren: (u) => {
      tm(e, Pm({
        childInstances: t,
        collect: i,
        clear: l
      }, u));
    }
  };
}
function _t(e) {
  ft(() => window, "resize", e, { passive: !0 }), ft(() => window, "orientationchange", e, { passive: !0 });
}
function Im(e, n) {
  const t = C(!1);
  return ce(
    e,
    (o) => {
      n === o && (t.value = !0);
    },
    { immediate: !0 }
  ), t;
}
function Bm(e, n) {
  if (e > n)
    return "horizontal";
  if (n > e)
    return "vertical";
}
function xt() {
  const e = C(0), n = C(0), t = C(0), o = C(0), r = C(0), a = C(0), i = C(0), l = C(0), s = C(0), u = C(0), d = C(), c = C(!1), f = C(!1), m = C(0), g = C(0);
  let h = null;
  const b = () => {
    e.value = 0, n.value = 0, t.value = 0, o.value = 0, r.value = 0, a.value = 0, i.value = 0, l.value = 0, s.value = 0, u.value = 0, d.value = void 0, c.value = !1, f.value = !1, m.value = 0, g.value = 0;
  };
  return {
    startX: e,
    startY: n,
    deltaX: t,
    deltaY: o,
    offsetX: r,
    offsetY: a,
    prevX: i,
    prevY: l,
    moveX: s,
    moveY: u,
    direction: d,
    touching: c,
    dragging: f,
    startTime: m,
    distance: g,
    resetTouch: b,
    startTouch: (I) => {
      b();
      const { clientX: k, clientY: D } = I.touches[0];
      e.value = k, n.value = D, i.value = k, l.value = D, c.value = !0, m.value = performance.now(), f.value = !1, h && window.cancelAnimationFrame(h);
    },
    moveTouch: (I) => {
      const { clientX: k, clientY: D } = I.touches[0];
      f.value = !0, t.value = k - e.value, o.value = D - n.value, r.value = Math.abs(t.value), a.value = Math.abs(o.value), g.value = Math.sqrt(r.value ** 2 + a.value ** 2), s.value = k - i.value, u.value = D - l.value, d.value || (d.value = Bm(r.value, a.value)), i.value = k, l.value = D;
    },
    endTouch: () => {
      c.value = !1, h = window.requestAnimationFrame(() => {
        f.value = !1;
      });
    },
    isReachTop: (I) => Ht(I) === 0 && o.value > 0,
    isReachBottom: (I, k = 1) => {
      const { scrollHeight: D, clientHeight: O, scrollTop: N } = I, z = Math.abs(D - N - O);
      return o.value < 0 && z <= k;
    }
  };
}
function Dd() {
  const e = C(), n = Zt(), t = Ed(n.type.name);
  return e.value = `${t}-${n.uid}`, e;
}
function Mm(e = {}) {
  const { initialWidth: n = 0, initialHeight: t = 0 } = e, o = C(n), r = C(t), a = () => {
    Jn() && (o.value = window.innerWidth, r.value = window.innerHeight);
  };
  return rn(a), _t(a), {
    width: o,
    height: r
  };
}
var Dm = Object.defineProperty, ps = Object.getOwnPropertySymbols, Nm = Object.prototype.hasOwnProperty, Vm = Object.prototype.propertyIsEnumerable, gs = (e, n, t) => n in e ? Dm(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, bs = (e, n) => {
  for (var t in n || (n = {}))
    Nm.call(n, t) && gs(e, t, n[t]);
  if (ps)
    for (var t of ps(n))
      Vm.call(n, t) && gs(e, t, n[t]);
  return e;
}, ys = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
function Oe(e, n) {
  return Array.isArray(n) ? n.reduce((t, o) => (t[o] = e[o], t), {}) : e[n];
}
function re(e, n) {
  const t = n ?? e;
  return t.install = function(o) {
    const { name: r } = e;
    r && o.component(r, e);
  }, t;
}
function Am(e) {
  const n = am(e), t = document.createElement("div");
  return document.body.appendChild(t), {
    instance: n.mount(t),
    unmount() {
      n.unmount(), document.body.removeChild(t);
    }
  };
}
function eo(e, n = {}, t = {}) {
  const o = {
    setup() {
      return () => Pd(e, bs(bs({}, n), t));
    }
  }, { unmount: r } = Am(o);
  return { unmountInstance: r };
}
function Nd(e) {
  const n = [];
  return e.forEach((t) => {
    if (t.type !== rm) {
      if (t.type === Ne && Ae(t.children)) {
        t.children.forEach((o) => {
          n.push(o);
        });
        return;
      }
      n.push(t);
    }
  }), n;
}
function Bn() {
  const e = C(""), n = (r, a, i) => ys(this, null, function* () {
    return !Ae(r) || !r.length ? !0 : !(yield Promise.all(r.map((s) => s(a, i)))).some((s) => s !== !0 ? (e.value = String(s), !0) : !1);
  });
  return {
    errorMessage: e,
    validate: n,
    resetValidation: () => {
      e.value = "";
    },
    validateWithTrigger: (r, a, i, l, s) => ys(this, null, function* () {
      r.includes(a) && (yield n(i, l, s)) && (e.value = "");
    })
  };
}
function zm(e) {
  ft(() => window, "hashchange", e), ft(() => window, "popstate", e);
}
function Et() {
  const e = C(!1);
  return gt(() => {
    e.value = !1;
  }), Kt(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function ee(e) {
  const n = "var", t = `${n}-${e}`, o = (a) => a ? a[0] === "$" ? a.replace("$", n) : a.startsWith("--") ? `${t}${a}` : `${t}__${a}` : t, r = (...a) => a.map((i) => {
    if (Ae(i)) {
      const [l, s, u = null] = i;
      return l ? s : u;
    }
    return i;
  });
  return {
    name: Sm(t),
    n: o,
    classes: r
  };
}
function y(e, ...n) {
  if (Ae(e))
    return e.map((t) => t(...n));
  if (e)
    return e(...n);
}
function A(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function un(e, n) {
  return e === !1 ? null : (e === !0 && n && (e = n), `var-elevation--${e}`);
}
function Xn(e, n, t = {}) {
  const { passive: o = !0, eventName: r, defaultValue: a, emit: i } = t, l = r ?? `onUpdate:${n.toString()}`, s = () => e[n] != null ? e[n] : a;
  if (!o)
    return M({
      get() {
        return s();
      },
      set(d) {
        i ? i(l, d) : y(e[l], d);
      }
    });
  const u = C(s());
  return ce(
    () => e[n],
    () => {
      u.value = s();
    }
  ), ce(
    () => u.value,
    (d) => {
      i ? i(l, d) : y(e[l], d);
    }
  ), u;
}
var Lm = Object.defineProperty, Rm = Object.defineProperties, Um = Object.getOwnPropertyDescriptors, $s = Object.getOwnPropertySymbols, Hm = Object.prototype.hasOwnProperty, Fm = Object.prototype.propertyIsEnumerable, ws = (e, n, t) => n in e ? Lm(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Vd = (e, n) => {
  for (var t in n || (n = {}))
    Hm.call(n, t) && ws(e, t, n[t]);
  if ($s)
    for (var t of $s(n))
      Fm.call(n, t) && ws(e, t, n[t]);
  return e;
}, Ym = (e, n) => Rm(e, Um(n));
const { n: Ad } = ee("ripple"), Cs = 250;
function jm(e) {
  const { zIndex: n, position: t } = Tt(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", t === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function Wm(e, n) {
  const { top: t, left: o } = en(e), { clientWidth: r, clientHeight: a } = e, i = Math.sqrt(r ** 2 + a ** 2) / 2, l = i * 2, s = n.touches[0].clientX - o, u = n.touches[0].clientY - t, d = (r - i * 2) / 2, c = (a - i * 2) / 2, f = s - i, m = u - i;
  return { x: f, y: m, centerX: d, centerY: c, size: l };
}
function zd(e) {
  const n = this._ripple;
  if (n.removeRipple(), n.disabled || n.tasker || !wn.enableRipple)
    return;
  const t = () => {
    n.tasker = null;
    const { x: o, y: r, centerX: a, centerY: i, size: l } = Wm(this, e), s = document.createElement("div");
    s.classList.add(Ad()), s.style.opacity = "0", s.style.transform = `translate(${o}px, ${r}px) scale3d(.3, .3, .3)`, s.style.width = `${l}px`, s.style.height = `${l}px`, n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), jm(this), this.appendChild(s), window.setTimeout(() => {
      s.style.transform = `translate(${a}px, ${i}px) scale3d(1, 1, 1)`, s.style.opacity = ".25";
    }, 20);
  };
  n.tasker = window.setTimeout(t, 30);
}
function Xr() {
  const e = this._ripple, n = () => {
    const t = this.querySelectorAll(`.${Ad()}`);
    if (!t.length)
      return;
    const o = t[t.length - 1], r = Cs - performance.now() + Number(o.dataset.createdAt);
    window.setTimeout(() => {
      o.style.opacity = "0", window.setTimeout(() => {
        var a;
        return (a = o.parentNode) == null ? void 0 : a.removeChild(o);
      }, Cs);
    }, r);
  };
  e.tasker ? window.setTimeout(n, 30) : n();
}
function Ld() {
  if (!bm() || !wn.enableRipple)
    return;
  const e = this._ripple;
  e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
}
function qm(e, n) {
  var t;
  e._ripple = Ym(Vd({
    tasker: null
  }, (t = n.value) != null ? t : {}), {
    removeRipple: Xr.bind(e)
  }), e.addEventListener("touchstart", zd, { passive: !0 }), e.addEventListener("touchmove", Ld, { passive: !0 }), e.addEventListener("dragstart", Xr, { passive: !0 }), document.addEventListener("touchend", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("touchcancel", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("dragend", e._ripple.removeRipple, { passive: !0 });
}
function Gm(e) {
  e.removeEventListener("touchstart", zd), e.removeEventListener("touchmove", Ld), e.removeEventListener("dragstart", Xr), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple), document.removeEventListener("dragend", e._ripple.removeRipple);
}
function Xm(e, n) {
  var t, o, r, a, i, l;
  const s = {
    color: (t = n.value) == null ? void 0 : t.color,
    disabled: (o = n.value) == null ? void 0 : o.disabled
  };
  (s.color !== ((r = e._ripple) == null ? void 0 : r.color) || s.disabled !== ((a = e._ripple) == null ? void 0 : a.disabled)) && (e._ripple = Vd({
    tasker: s.disabled ? null : (i = e._ripple) == null ? void 0 : i.tasker,
    removeRipple: (l = e._ripple) == null ? void 0 : l.removeRipple
  }, s));
}
const Rd = {
  mounted: qm,
  unmounted: Gm,
  updated: Xm,
  install(e) {
    e.directive("ripple", this);
  }
}, EE = Rd;
var Ze = Rd;
const Bo = {
  show: Boolean,
  position: {
    type: String,
    default: "center"
  },
  transition: String,
  overlay: {
    type: Boolean,
    default: !0
  },
  overlayClass: String,
  overlayStyle: Object,
  lockScroll: {
    type: Boolean,
    default: !0
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: !0
  },
  defaultStyle: {
    type: Boolean,
    default: !0
  },
  safeArea: Boolean,
  safeAreaTop: Boolean,
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  onOpen: A(),
  onOpened: A(),
  onClose: A(),
  onClosed: A(),
  onClickOverlay: A(),
  "onUpdate:show": A(),
  // internal for Dialog
  onRouteChange: A()
};
function Ud() {
  Object.keys(wn.locks).length <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function Ho(e) {
  wn.locks[e] = 1, Ud();
}
function Fo(e) {
  delete wn.locks[e], Ud();
}
function Mo(e, n) {
  const { uid: t } = Zt();
  n && ce(n, (o) => {
    o === !1 ? Fo(t) : o === !0 && e() === !0 && Ho(t);
  }), ce(e, (o) => {
    n && n() === !1 || (o === !0 ? Ho(t) : Fo(t));
  }), im(() => {
    n && n() === !1 || e() === !0 && Ho(t);
  }), To(() => {
    n && n() === !1 || e() === !0 && Fo(t);
  }), gt(() => {
    n && n() === !1 || e() === !0 && Ho(t);
  }), Kt(() => {
    n && n() === !1 || e() === !0 && Fo(t);
  });
}
function Do(e, n) {
  const t = C(wn.zIndex);
  return ce(
    e,
    (o) => {
      o && (wn.zIndex += n, t.value = wn.zIndex);
    },
    { immediate: !0 }
  ), { zIndex: t };
}
const Hd = Symbol("POPUP_BIND_POPUP_ITEM_KEY");
function Km() {
  const { bindParent: e, parentProvider: n, index: t } = an(Hd);
  return {
    index: t,
    popup: n,
    bindPopup: e
  };
}
function Zm() {
  const { bindChildren: e, childProviders: n, length: t } = ln(Hd);
  return {
    length: t,
    popupItems: n,
    bindPopupItems: e
  };
}
var Jm = Object.defineProperty, Ss = Object.getOwnPropertySymbols, Qm = Object.prototype.hasOwnProperty, _m = Object.prototype.propertyIsEnumerable, ks = (e, n, t) => n in e ? Jm(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, xm = (e, n) => {
  for (var t in n || (n = {}))
    Qm.call(n, t) && ks(e, t, n[t]);
  if (Ss)
    for (var t of Ss(n))
      _m.call(n, t) && ks(e, t, n[t]);
  return e;
};
const {
  name: eh,
  n: Nn,
  classes: Ar
} = ee("popup");
var Ci = x({
  name: eh,
  inheritAttrs: !1,
  props: Bo,
  setup(e, {
    slots: n,
    attrs: t
  }) {
    const o = Im(() => e.show, !0), {
      zIndex: r
    } = Do(() => e.show, 3), {
      disabled: a
    } = Et(), {
      bindPopupItems: i
    } = Zm();
    Mo(() => e.show, () => e.lockScroll), ce(() => e.show, (c) => {
      y(c ? e.onOpen : e.onClose);
    }), i({
      show: M(() => e.show)
    }), zm(() => y(e.onRouteChange));
    function l() {
      const {
        closeOnClickOverlay: c,
        onClickOverlay: f
      } = e;
      y(f), c && y(e["onUpdate:show"], !1);
    }
    function s() {
      const {
        overlayClass: c = "",
        overlayStyle: f
      } = e;
      return Z("div", {
        class: Ar(Nn("overlay"), c),
        style: xm({
          zIndex: r.value - 1
        }, f),
        onClick: l
      }, null);
    }
    function u() {
      return Te(Z("div", ze({
        class: Ar(Nn("content"), Nn(`--${e.position}`), [e.defaultStyle, Nn("--content-background-color")], [e.defaultStyle, Nn("$-elevation--3")], [e.safeArea, Nn("--safe-area")], [e.safeAreaTop, Nn("--safe-area-top")]),
        style: {
          zIndex: r.value
        }
      }, t), [o.value && y(n.default)]), [[Un, e.show]]);
    }
    function d() {
      return Z(We, {
        name: Nn("$-fade"),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [Te(Z("div", {
          class: Ar(Nn("$--box"), Nn()),
          style: {
            zIndex: r.value - 2
          }
        }, [e.overlay && s(), Z(We, {
          name: e.transition || Nn(`$-pop-${e.position}`)
        }, {
          default: () => [u()]
        })]), [[Un, e.show]])]
      });
    }
    return () => {
      const {
        teleport: c
      } = e;
      return c ? Z(jn, {
        to: c,
        disabled: a.value
      }, {
        default: () => [d()]
      }) : d();
    };
  }
});
re(Ci);
const IE = Ci;
var vt = Ci;
const Ke = {
  name: String,
  size: [Number, String],
  color: String,
  namespace: {
    type: String,
    default: "var-icon"
  },
  transition: {
    type: [Number, String],
    default: 0
  },
  animationClass: String,
  onClick: A()
};
function Sn(e, n) {
  throw Error(`Varlet [${e}]: ${n}`);
}
function Ps(e, n) {
  console.warn(`Varlet [${e}]: ${n}`);
}
function nh(e) {
  const { left: n } = en(e);
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function Os(e) {
  const { top: n } = en(e);
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function zr(e) {
  const { transform: n } = Tt(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function mt(e) {
  let n = e;
  for (; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    const t = /(scroll|auto)/, { overflowY: o, overflow: r } = Tt(n);
    if (t.test(o) || t.test(r))
      return n;
  }
  return window;
}
function th(e) {
  const n = [];
  let t = e;
  for (; !bi(t); )
    t = mt(t), n.push(t);
  return n;
}
function Fd(e, n) {
  if (nn(e)) {
    const t = document.querySelector(e);
    return t || Sn(n, "target element cannot found"), t;
  }
  if (pm(e))
    return e;
  Sn(n, 'type of prop "target" should be a selector or an element object');
}
function oh() {
  const { width: e, height: n } = en(window);
  return {
    vw: e,
    vh: n,
    vMin: Math.min(e, n),
    vMax: Math.max(e, n)
  };
}
const Yd = (e) => nn(e) && e.endsWith("rem"), rh = (e) => nn(e) && e.endsWith("em") && !e.endsWith("rem"), ah = (e) => nn(e) && e.endsWith("px") || mn(e), ih = (e) => nn(e) && e.endsWith("%"), jd = (e) => nn(e) && e.endsWith("vw"), Wd = (e) => nn(e) && e.endsWith("vh"), qd = (e) => nn(e) && e.endsWith("vmin"), Gd = (e) => nn(e) && e.endsWith("vmax"), lh = (e) => nn(e) && e.startsWith("calc("), sh = (e) => nn(e) && e.startsWith("var("), Fe = (e) => {
  if (mn(e))
    return e;
  if (ah(e))
    return +e.replace("px", "");
  if (!Jn())
    return 0;
  const { vw: n, vh: t, vMin: o, vMax: r } = oh();
  if (jd(e))
    return +e.replace("vw", "") * n / 100;
  if (Wd(e))
    return +e.replace("vh", "") * t / 100;
  if (qd(e))
    return +e.replace("vmin", "") * o / 100;
  if (Gd(e))
    return +e.replace("vmax", "") * r / 100;
  if (Yd(e)) {
    const a = +e.replace("rem", ""), i = Tt(document.documentElement).fontSize;
    return a * parseFloat(i);
  }
  return nn(e) ? L(e) : 0;
}, Se = (e) => {
  if (e != null)
    return ih(e) || jd(e) || Wd(e) || rh(e) || Yd(e) || lh(e) || sh(e) || qd(e) || Gd(e) ? e : `${Fe(e)}px`;
}, dn = (e, n = 1) => {
  if (e == null)
    return;
  const t = Se(e), o = t.match(/(vh|%|r?em|px|vw|vmin|vmax)$/)[0];
  return `${parseFloat(t) * n}${o}`;
};
function vo(e, { top: n = 0, left: t = 0, duration: o = 300, animation: r }) {
  const a = Date.now(), i = Ht(e), l = yi(e);
  return new Promise((s) => {
    const u = () => {
      const d = (Date.now() - a) / o;
      if (d < 1) {
        const c = i + (n - i) * r(d), f = l + (t - l) * r(d);
        e.scrollTo(f, c), requestAnimationFrame(u);
      } else
        e.scrollTo(t, n), s();
    };
    requestAnimationFrame(u);
  });
}
function Xd(e) {
  return Object.entries(e ?? {}).reduce((n, [t, o]) => {
    const r = t.startsWith("--") ? t : `--${Ed(t)}`;
    return n[r] = o, n;
  }, {});
}
function lr(e) {
  return e === "start" || e === "end" ? `flex-${e}` : e;
}
var uh = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: dh, n: ch, classes: fh } = ee("icon");
function vh(e, n) {
  return p(), $e(Jt(e.isURL(e.name) ? "img" : "i"), {
    class: v(
      e.classes(
        e.n(),
        [e.namespace !== e.n(), e.namespace],
        `${e.namespace}--set`,
        [e.isURL(e.name), e.n("image"), `${e.namespace}-${e.nextName}`],
        [e.animateInProgress, e.animationClass == null ? e.n("--shrinking") : e.animationClass]
      )
    ),
    style: F({
      color: e.color,
      "transition-duration": `${e.toNumber(e.transition)}ms`,
      width: e.isURL(e.name) ? e.toSizeUnit(e.size) : null,
      height: e.isURL(e.name) ? e.toSizeUnit(e.size) : null,
      fontSize: e.toSizeUnit(e.size)
    }),
    src: e.isURL(e.name) ? e.nextName : null,
    onClick: e.onClick
  }, null, 8, ["class", "style", "src", "onClick"]);
}
const Kd = x({
  name: dh,
  props: Ke,
  setup(e) {
    const n = C(""), t = C(!1);
    ce(() => e.name, o, { immediate: !0 });
    function o(r, a) {
      return uh(this, null, function* () {
        const { transition: i } = e;
        if (a == null || L(i) === 0) {
          n.value = r;
          return;
        }
        t.value = !0, yield Ye(), setTimeout(() => {
          a != null && (n.value = r), t.value = !1;
        }, L(i));
      });
    }
    return {
      nextName: n,
      animateInProgress: t,
      n: ch,
      classes: fh,
      isURL: gm,
      toNumber: L,
      toSizeUnit: Se
    };
  }
});
Kd.render = vh;
var Si = Kd;
re(Si);
const BE = Si;
var He = Si, mh = Object.defineProperty, Ts = Object.getOwnPropertySymbols, hh = Object.prototype.hasOwnProperty, ph = Object.prototype.propertyIsEnumerable, Es = (e, n, t) => n in e ? mh(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, gh = (e, n) => {
  for (var t in n || (n = {}))
    hh.call(n, t) && Es(e, t, n[t]);
  if (Ts)
    for (var t of Ts(n))
      ph.call(n, t) && Es(e, t, n[t]);
  return e;
};
const bh = gh({
  show: Boolean,
  title: String,
  actions: {
    type: Array,
    default: () => []
  },
  closeOnClickAction: {
    type: Boolean,
    default: !0
  },
  onSelect: A(),
  "onUpdate:show": A()
}, Oe(Bo, [
  "overlay",
  "overlayClass",
  "overlayStyle",
  "lockScroll",
  "closeOnClickOverlay",
  "safeArea",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onClickOverlay",
  // internal for function call closes the dialog
  "onRouteChange"
]));
var ki = {
  // Dialog
  dialogTitle: "提示",
  dialogConfirmButtonText: "确认",
  dialogCancelButtonText: "取消",
  // ActionSheet
  actionSheetTitle: "请选择",
  // List
  listLoadingText: "加载中",
  listFinishedText: "没有更多了",
  listErrorText: "加载失败",
  // Picker
  pickerTitle: "请选择",
  pickerConfirmButtonText: "确认",
  pickerCancelButtonText: "取消",
  // date-picker
  datePickerMonthDict: {
    "01": {
      name: "一月",
      abbr: "一月"
    },
    "02": {
      name: "二月",
      abbr: "二月"
    },
    "03": {
      name: "三月",
      abbr: "三月"
    },
    "04": {
      name: "四月",
      abbr: "四月"
    },
    "05": {
      name: "五月",
      abbr: "五月"
    },
    "06": {
      name: "六月",
      abbr: "六月"
    },
    "07": {
      name: "七月",
      abbr: "七月"
    },
    "08": {
      name: "八月",
      abbr: "八月"
    },
    "09": {
      name: "九月",
      abbr: "九月"
    },
    10: {
      name: "十月",
      abbr: "十月"
    },
    11: {
      name: "十一月",
      abbr: "十一月"
    },
    12: {
      name: "十二月",
      abbr: "十二月"
    }
  },
  datePickerWeekDict: {
    0: {
      name: "星期日",
      abbr: "日"
    },
    1: {
      name: "星期一",
      abbr: "一"
    },
    2: {
      name: "星期二",
      abbr: "二"
    },
    3: {
      name: "星期三",
      abbr: "三"
    },
    4: {
      name: "星期四",
      abbr: "四"
    },
    5: {
      name: "星期五",
      abbr: "五"
    },
    6: {
      name: "星期六",
      abbr: "六"
    }
  },
  datePickerSelected: "个被选择",
  datePickerHint: "选择日期",
  // pagination
  paginationItem: "条",
  paginationPage: "页",
  paginationJump: "前往",
  // time-picker
  timePickerHint: "选择时间"
}, Zd = {
  // Dialog
  dialogTitle: "Hint",
  dialogConfirmButtonText: "Confirm",
  dialogCancelButtonText: "Cancel",
  // ActionSheet
  actionSheetTitle: "Select One",
  // List
  listLoadingText: "Loading",
  listFinishedText: "No more",
  listErrorText: "Load fail",
  // Picker
  pickerTitle: "Pick it",
  pickerConfirmButtonText: "Confirm",
  pickerCancelButtonText: "Cancel",
  // date-picker
  datePickerMonthDict: {
    "01": {
      name: "January",
      abbr: "JAN"
    },
    "02": {
      name: "February",
      abbr: "FEB"
    },
    "03": {
      name: "March",
      abbr: "MAR"
    },
    "04": {
      name: "April",
      abbr: "APR"
    },
    "05": {
      name: "May",
      abbr: "MAY"
    },
    "06": {
      name: "June",
      abbr: "JUN"
    },
    "07": {
      name: "July",
      abbr: "JUL"
    },
    "08": {
      name: "August",
      abbr: "AUG"
    },
    "09": {
      name: "September",
      abbr: "SEP"
    },
    10: {
      name: "October",
      abbr: "OCT"
    },
    11: {
      name: "November",
      abbr: "NOV"
    },
    12: {
      name: "December",
      abbr: "DEC"
    }
  },
  datePickerWeekDict: {
    0: {
      name: "Sunday",
      abbr: "S"
    },
    1: {
      name: "Monday",
      abbr: "M"
    },
    2: {
      name: "Tuesday",
      abbr: "T"
    },
    3: {
      name: "Wednesday",
      abbr: "W"
    },
    4: {
      name: "Thursday",
      abbr: "T"
    },
    5: {
      name: "Friday",
      abbr: "F"
    },
    6: {
      name: "Saturday",
      abbr: "S"
    }
  },
  datePickerSelected: " selected",
  datePickerHint: "SELECT DATE",
  // pagination
  paginationItem: "",
  paginationPage: "page",
  paginationJump: "Go to",
  // time-picker
  timePickerHint: "SELECT TIME"
}, Jd = {
  // Dialog
  dialogTitle: "提示",
  dialogConfirmButtonText: "確認",
  dialogCancelButtonText: "取消",
  // ActionSheet
  actionSheetTitle: "請選擇",
  // List
  listLoadingText: "載入中",
  listFinishedText: "沒有更多了",
  listErrorText: "載入失敗",
  // Picker
  pickerTitle: "請選擇",
  pickerConfirmButtonText: "確認",
  pickerCancelButtonText: "取消",
  // date-picker
  datePickerMonthDict: {
    "01": {
      name: "一月",
      abbr: "一月"
    },
    "02": {
      name: "二月",
      abbr: "二月"
    },
    "03": {
      name: "三月",
      abbr: "三月"
    },
    "04": {
      name: "四月",
      abbr: "四月"
    },
    "05": {
      name: "五月",
      abbr: "五月"
    },
    "06": {
      name: "六月",
      abbr: "六月"
    },
    "07": {
      name: "七月",
      abbr: "七月"
    },
    "08": {
      name: "八月",
      abbr: "八月"
    },
    "09": {
      name: "九月",
      abbr: "九月"
    },
    10: {
      name: "十月",
      abbr: "十月"
    },
    11: {
      name: "十一月",
      abbr: "十一月"
    },
    12: {
      name: "十二月",
      abbr: "十二月"
    }
  },
  datePickerWeekDict: {
    0: {
      name: "星期日",
      abbr: "日"
    },
    1: {
      name: "星期一",
      abbr: "一"
    },
    2: {
      name: "星期二",
      abbr: "二"
    },
    3: {
      name: "星期三",
      abbr: "三"
    },
    4: {
      name: "星期四",
      abbr: "四"
    },
    5: {
      name: "星期五",
      abbr: "五"
    },
    6: {
      name: "星期六",
      abbr: "六"
    }
  },
  datePickerSelected: "個被選擇",
  // pagination
  paginationItem: "條",
  paginationPage: "頁",
  paginationJump: "前往"
}, yh = Jd, $h = Object.defineProperty, Is = Object.getOwnPropertySymbols, wh = Object.prototype.hasOwnProperty, Ch = Object.prototype.propertyIsEnumerable, Bs = (e, n, t) => n in e ? $h(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Ms = (e, n) => {
  for (var t in n || (n = {}))
    wh.call(n, t) && Bs(e, t, n[t]);
  if (Is)
    for (var t of Is(n))
      Ch.call(n, t) && Bs(e, t, n[t]);
  return e;
};
function Pi() {
  const e = {}, n = C({}), t = (a, i) => {
    i.lang = a, e[a] = i;
  }, o = (a) => {
    if (!e[a])
      return console.warn(`The ${a} does not exist. You can mount a language package using the add method`), {};
    n.value = e[a];
  };
  return {
    packs: e,
    pack: n,
    add: t,
    use: o,
    merge: (a, i) => {
      if (!e[a]) {
        console.warn(`The ${a} does not exist. You can mount a language package using the add method`);
        return;
      }
      e[a] = Ms(Ms({}, e[a]), i), o(a);
    }
  };
}
const { packs: Qd, pack: Qe, add: Oi, use: Ti, merge: _d } = Pi();
Oi("zh-CN", ki);
Ti("zh-CN");
const ME = { zhCN: ki, enUS: Zd, packs: Qd, pack: Qe, add: Oi, use: Ti, merge: _d, useLocale: Pi };
var Kr = {
  zhCN: ki,
  enUS: Zd,
  zhTW: Jd,
  zhHK: yh,
  packs: Qd,
  pack: Qe,
  add: Oi,
  use: Ti,
  merge: _d,
  useLocale: Pi
};
const { name: Sh, n: kh, classes: Ph } = ee("action-sheet"), Oh = ["onClick"];
function Th(e, n) {
  const t = ie("var-icon"), o = ie("var-popup"), r = Ve("ripple");
  return p(), $e(o, ze({
    class: e.n("popup-radius"),
    position: "bottom",
    show: e.popupShow,
    overlay: e.overlay,
    "overlay-class": e.overlayClass,
    "overlay-style": e.overlayStyle,
    "lock-scroll": e.lockScroll,
    "close-on-click-overlay": e.closeOnClickOverlay,
    teleport: e.teleport,
    "safe-area": e.safeArea
  }, {
    "onUpdate:show": e.handlePopupUpdateShow
  }, {
    onOpen: e.onOpen,
    onClose: e.onClose,
    onClosed: e.onClosed,
    onOpened: e.onOpened,
    onRouteChange: e.onRouteChange
  }), {
    default: me(() => [
      B(
        "div",
        ze({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [
          R(e.$slots, "title", {}, () => {
            var a;
            return [
              B(
                "div",
                {
                  class: v(e.n("title"))
                },
                ae((a = e.title) != null ? a : e.pack.actionSheetTitle),
                3
                /* TEXT, CLASS */
              )
            ];
          }),
          R(e.$slots, "actions", {}, () => [
            (p(!0), S(
              Ne,
              null,
              Ge(e.actions, (a) => Te((p(), S("div", {
                class: v(e.classes(e.n("action-item"), a.className, [a.disabled, e.n("--disabled")])),
                key: a.name,
                style: F({ color: a.color }),
                onClick: (i) => e.handleSelect(a)
              }, [
                a.icon ? (p(), $e(t, {
                  key: 0,
                  class: v(e.n("action-icon")),
                  "var-action-sheet-cover": "",
                  namespace: a.namespace,
                  name: a.icon,
                  size: a.iconSize
                }, null, 8, ["class", "namespace", "name", "size"])) : Q("v-if", !0),
                B(
                  "div",
                  {
                    class: v(e.n("action-name"))
                  },
                  ae(a.name),
                  3
                  /* TEXT, CLASS */
                )
              ], 14, Oh)), [
                [r, { disabled: a.disabled }]
              ])),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ],
        16
        /* FULL_PROPS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["class", "show", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "teleport", "safe-area", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]);
}
const xd = x({
  name: Sh,
  directives: { Ripple: Ze },
  components: {
    VarPopup: vt,
    VarIcon: He
  },
  inheritAttrs: !1,
  props: bh,
  setup(e) {
    const n = C(!1);
    ce(
      () => e.show,
      (r) => {
        n.value = r;
      },
      { immediate: !0 }
    );
    function t(r) {
      if (r.disabled)
        return;
      const { closeOnClickAction: a, onSelect: i } = e;
      y(i, r), a && y(e["onUpdate:show"], !1);
    }
    function o(r) {
      y(e["onUpdate:show"], r);
    }
    return {
      popupShow: n,
      pack: Qe,
      n: kh,
      classes: Ph,
      handlePopupUpdateShow: o,
      handleSelect: t
    };
  }
});
xd.render = Th;
var No = xd, Eh = Object.defineProperty, Ds = Object.getOwnPropertySymbols, Ih = Object.prototype.hasOwnProperty, Bh = Object.prototype.propertyIsEnumerable, Ns = (e, n, t) => n in e ? Eh(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Vs = (e, n) => {
  for (var t in n || (n = {}))
    Ih.call(n, t) && Ns(e, t, n[t]);
  if (Ds)
    for (var t of Ds(n))
      Bh.call(n, t) && Ns(e, t, n[t]);
  return e;
};
let tt, Ei = {};
function Mh(e = {}) {
  return Vs(Vs({}, Ei), e);
}
function It(e) {
  return Jn() ? new Promise((n) => {
    It.close();
    const t = je(Mh(e));
    t.teleport = "body", tt = t;
    const { unmountInstance: o } = eo(No, t, {
      onSelect: (r) => {
        y(t.onSelect, r), n(r);
      },
      onClose: () => {
        y(t.onClose), n("close");
      },
      onClosed: () => {
        y(t.onClosed), o(), tt === t && (tt = null);
      },
      onRouteChange: () => {
        o(), tt === t && (tt = null);
      },
      "onUpdate:show": (r) => {
        t.show = r;
      }
    });
    t.show = !0;
  }) : Promise.resolve();
}
It.setDefaultOptions = function(e) {
  Ei = e;
};
It.resetDefaultOptions = function() {
  Ei = {};
};
It.close = function() {
  if (tt != null) {
    const e = tt;
    tt = null, Ye().then(() => {
      e.show = !1;
    });
  }
};
It.Component = No;
re(No);
re(No, It);
const DE = No;
var Zr = It;
const Dh = {
  color: String,
  textColor: String,
  title: String,
  titlePosition: {
    type: String,
    default: "left"
  },
  elevation: {
    type: [Boolean, String, Number],
    default: !0
  },
  round: Boolean,
  image: String,
  imageLinearGradient: String,
  safeAreaTop: Boolean
}, { name: Nh, n: Vh, classes: Ah } = ee("app-bar");
function zh(e, n) {
  return p(), S(
    "div",
    {
      class: v(
        e.classes(
          e.n(),
          e.n("$--box"),
          [e.safeAreaTop, e.n("--safe-area-top")],
          [e.round, e.n("--round")],
          e.formatElevation(e.elevation, 3)
        )
      ),
      style: F(e.rootStyles)
    },
    [
      B(
        "div",
        {
          class: v(e.n("toolbar"))
        },
        [
          B(
            "div",
            {
              class: v(e.n("left"))
            },
            [
              R(e.$slots, "left"),
              e.titlePosition === "left" ? (p(), S(
                "div",
                {
                  key: 0,
                  class: v(e.n("title")),
                  style: F({ paddingLeft: e.paddingLeft })
                },
                [
                  R(e.$slots, "default", {}, () => [
                    Ie(
                      ae(e.title),
                      1
                      /* TEXT */
                    )
                  ])
                ],
                6
                /* CLASS, STYLE */
              )) : Q("v-if", !0)
            ],
            2
            /* CLASS */
          ),
          e.titlePosition === "center" ? (p(), S(
            "div",
            {
              key: 0,
              class: v(e.n("title"))
            },
            [
              R(e.$slots, "default", {}, () => [
                Ie(
                  ae(e.title),
                  1
                  /* TEXT */
                )
              ])
            ],
            2
            /* CLASS */
          )) : Q("v-if", !0),
          B(
            "div",
            {
              class: v(e.n("right"))
            },
            [
              e.titlePosition === "right" ? (p(), S(
                "div",
                {
                  key: 0,
                  class: v(e.n("title")),
                  style: F({ paddingRight: e.paddingRight })
                },
                [
                  R(e.$slots, "default", {}, () => [
                    Ie(
                      ae(e.title),
                      1
                      /* TEXT */
                    )
                  ])
                ],
                6
                /* CLASS, STYLE */
              )) : Q("v-if", !0),
              R(e.$slots, "right")
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      ),
      R(e.$slots, "content")
    ],
    6
    /* CLASS, STYLE */
  );
}
const ec = x({
  name: Nh,
  props: Dh,
  setup(e, { slots: n }) {
    const t = C(), o = C(), r = M(() => {
      const { image: i, color: l, textColor: s, imageLinearGradient: u } = e;
      return i != null ? {
        "background-image": `${u ? `linear-gradient(${u}), ` : ""}url(${i})`,
        "background-position": "center center",
        "background-size": "cover"
      } : {
        background: l,
        color: s
      };
    });
    rn(a), Eo(a);
    function a() {
      t.value = n.left ? 0 : void 0, o.value = n.right ? 0 : void 0;
    }
    return {
      rootStyles: r,
      paddingLeft: t,
      paddingRight: o,
      n: Vh,
      classes: Ah,
      formatElevation: un
    };
  }
});
ec.render = zh;
var Ii = ec;
re(Ii);
const NE = Ii;
var Jr = Ii;
const As = (e) => nn(e) ? e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp|ico)$/i.test(e) : !1, zs = (e) => nn(e) ? e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e) : !1, Lh = (e) => {
  const n = [];
  return {
    cache: n,
    has(t) {
      return this.cache.includes(t);
    },
    add(t) {
      this.has(t) || (this.cache.length === e && n.shift(), this.cache.push(t));
    },
    remove(t) {
      this.has(t) && ar(this.cache, t);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, Qr = (e) => e, Ls = (e) => e ** 3, nc = (e) => e < 0.5 ? Ls(e * 2) / 2 : 1 - Ls((1 - e) * 2) / 2, kt = (e = "", n, t = "") => {
  if (e.length >= n)
    return e;
  const o = n - e.length, r = Math.floor(o / t.length);
  return t.repeat(r) + t.slice(0, o % t.length) + e;
};
var Rh = Object.defineProperty, Rs = Object.getOwnPropertySymbols, Uh = Object.prototype.hasOwnProperty, Hh = Object.prototype.propertyIsEnumerable, Us = (e, n, t) => n in e ? Rh(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Fh = (e, n) => {
  for (var t in n || (n = {}))
    Uh.call(n, t) && Us(e, t, n[t]);
  if (Rs)
    for (var t of Rs(n))
      Hh.call(n, t) && Us(e, t, n[t]);
  return e;
}, Cr = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const Yh = "background-image", jh = "lazy-loading", Wh = "lazy-error", Hs = "lazy-attempt", qh = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], _r = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Ft = [], sr = [], tc = Lh(100), _e = {
  loading: _r,
  error: _r,
  attempt: 3,
  throttleWait: 300,
  events: qh
};
let Bi = $i(Vo, _e.throttleWait);
function Sr(e, n) {
  e._lazy.arg === Yh ? e.style.backgroundImage = `url(${n})` : e.setAttribute("src", n);
}
function Gh(e) {
  e._lazy.loading && Sr(e, e._lazy.loading), Vo();
}
function Xh(e) {
  e._lazy.error && Sr(e, e._lazy.error), e._lazy.state = "error", Di(e), Vo();
}
function oc(e, n) {
  Sr(e, n), e._lazy.state = "success", Di(e), Vo();
}
function Kh(e) {
  var n;
  sr.includes(e) || (sr.push(e), (n = _e.events) == null || n.forEach((t) => {
    e.addEventListener(t, Bi, { passive: !0 });
  }));
}
function Zh() {
  sr.forEach((e) => {
    var n;
    (n = _e.events) == null || n.forEach((t) => {
      e.removeEventListener(t, Bi);
    });
  }), sr.length = 0;
}
function Jh(e, n) {
  var t, o;
  const r = {
    loading: (t = e.getAttribute(jh)) != null ? t : _e.loading,
    error: (o = e.getAttribute(Wh)) != null ? o : _e.error,
    attempt: e.getAttribute(Hs) ? Number(e.getAttribute(Hs)) : _e.attempt
  };
  e._lazy = Fh({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, r), Sr(e, _r), y(_e.filter, e._lazy);
}
function Qh(e, n) {
  const t = new Image();
  t.src = n, e._lazy.preloadImage = t, t.addEventListener("load", () => {
    e._lazy.attemptLock = !1, tc.add(n), oc(e, n);
  }), t.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Xh(e) : rc(e);
  });
}
function rc(e) {
  if (e._lazy.attemptLock)
    return;
  e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
  const { src: n } = e._lazy;
  if (tc.has(n)) {
    oc(e, n), e._lazy.attemptLock = !1;
    return;
  }
  Gh(e), Qh(e, n);
}
function Mi(e) {
  return Cr(this, null, function* () {
    yield fn(), $m(e) && rc(e);
  });
}
function Vo() {
  Ft.forEach((e) => Mi(e));
}
function _h(e) {
  return Cr(this, null, function* () {
    !Ft.includes(e) && Ft.push(e), th(e).forEach(Kh), yield Mi(e);
  });
}
function Di(e) {
  ar(Ft, e), Ft.length === 0 && Zh();
}
function xh(e, n) {
  const { src: t, arg: o } = e._lazy;
  return t !== n.value || o !== n.arg;
}
function ac(e, n) {
  return Cr(this, null, function* () {
    Jh(e, n), yield _h(e);
  });
}
function ep(e, n) {
  return Cr(this, null, function* () {
    if (!xh(e, n)) {
      Ft.includes(e) && (yield Mi(e));
      return;
    }
    yield ac(e, n);
  });
}
function np(e = {}) {
  const { events: n, loading: t, error: o, attempt: r, throttleWait: a, filter: i } = e;
  _e.events = n ?? _e.events, _e.loading = t ?? _e.loading, _e.error = o ?? _e.error, _e.attempt = r ?? _e.attempt, _e.throttleWait = a ?? _e.throttleWait, _e.filter = i;
}
const ic = {
  mounted: ac,
  unmounted: Di,
  updated: ep,
  install(e, n) {
    np(n), Bi = $i(Vo, _e.throttleWait), e.directive("lazy", this);
  }
}, VE = ic;
var mo = ic;
const tp = {
  round: {
    type: Boolean,
    default: !0
  },
  size: {
    type: [String, Number],
    default: "normal"
  },
  alt: String,
  color: String,
  src: String,
  fit: {
    type: String,
    default: "cover"
  },
  bordered: Boolean,
  borderColor: String,
  loading: String,
  error: String,
  lazy: Boolean,
  hoverable: Boolean,
  onClick: A(),
  onLoad: A(),
  onError: A()
}, op = (e) => ["mini", "small", "normal", "large"].includes(e), { name: rp, n: ap, classes: ip } = ee("avatar"), lp = ["src", "alt", "lazy-loading", "lazy-error"], sp = ["src", "alt"];
function up(e, n) {
  const t = Ve("lazy");
  return p(), S(
    "div",
    {
      ref: "avatarElement",
      class: v(
        e.classes(
          e.n(),
          e.n("$--box"),
          [e.isInternalSize(e.size), e.n(`--${e.size}`)],
          [e.round, e.n("--round")],
          [e.bordered, e.n("--bordered")],
          [e.hoverable, e.n("--hoverable")]
        )
      ),
      style: F({
        width: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
        height: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
        borderColor: e.borderColor,
        backgroundColor: e.color
      }),
      onClick: n[3] || (n[3] = (...o) => e.handleClick && e.handleClick(...o))
    },
    [
      e.src ? (p(), S(
        Ne,
        { key: 0 },
        [
          e.lazy ? Te((p(), S("img", {
            key: 0,
            class: v(e.n("image")),
            src: e.src,
            alt: e.alt,
            style: F({ objectFit: e.fit }),
            "lazy-loading": e.loading,
            "lazy-error": e.error,
            onLoad: n[0] || (n[0] = (...o) => e.handleLoad && e.handleLoad(...o))
          }, null, 46, lp)), [
            [t, e.src]
          ]) : (p(), S("img", {
            key: 1,
            class: v(e.n("image")),
            src: e.src,
            alt: e.alt,
            style: F({ objectFit: e.fit }),
            onLoad: n[1] || (n[1] = (...o) => e.handleLoad && e.handleLoad(...o)),
            onError: n[2] || (n[2] = (...o) => e.handleError && e.handleError(...o))
          }, null, 46, sp))
        ],
        64
        /* STABLE_FRAGMENT */
      )) : (p(), S(
        "div",
        {
          key: 1,
          ref: "textElement",
          class: v(e.n("text")),
          style: F({ transform: `scale(${e.scale})` })
        },
        [
          R(e.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      ))
    ],
    6
    /* CLASS, STYLE */
  );
}
const lc = x({
  name: rp,
  directives: { Lazy: mo },
  props: tp,
  setup(e) {
    const n = C(null), t = C(null), o = C(1);
    rn(r), Eo(r);
    function r() {
      if (!n.value || !t.value) {
        o.value = 1;
        return;
      }
      const s = n.value.offsetWidth, u = t.value.offsetWidth;
      s > u ? o.value = 1 : o.value = s / u;
    }
    function a(s) {
      const u = s.currentTarget, { lazy: d, onLoad: c, onError: f } = e;
      d ? (u._lazy.state === "success" && y(c, s), u._lazy.state === "error" && y(f, s)) : y(c, s);
    }
    function i(s) {
      y(e.onError, s);
    }
    function l(s) {
      y(e.onClick, s);
    }
    return {
      avatarElement: n,
      textElement: t,
      scale: o,
      n: ap,
      classes: ip,
      isInternalSize: op,
      toSizeUnit: Se,
      handleLoad: a,
      handleError: i,
      handleClick: l
    };
  }
});
lc.render = up;
var Ni = lc;
re(Ni);
const AE = Ni;
var xr = Ni;
const dp = {
  offset: [Number, String],
  vertical: Boolean
}, { name: cp, n: fp, classes: vp } = ee("avatar-group");
function mp(e, n) {
  return p(), S(
    "div",
    {
      class: v(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: F(e.rootStyles)
    },
    [
      R(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const sc = x({
  name: cp,
  props: dp,
  setup(e) {
    return {
      rootStyles: M(() => e.offset == null ? {} : {
        "--avatar-group-offset": Se(e.offset)
      }),
      n: fp,
      classes: vp,
      toSizeUnit: Se
    };
  }
});
sc.render = mp;
var Vi = sc;
re(Vi);
const zE = Vi;
var ea = Vi;
const at = {
  type: {
    type: String,
    default: "circle"
  },
  radius: [String, Number],
  size: {
    type: String,
    default: "normal"
  },
  color: String,
  description: String,
  loading: Boolean
}, { name: hp, n: pp, classes: gp } = ee("loading"), bp = (e) => (bt(""), e = e(), yt(), e), yp = /* @__PURE__ */ bp(() => /* @__PURE__ */ B(
  "svg",
  { viewBox: "25 25 50 50" },
  [
    /* @__PURE__ */ B("circle", {
      cx: "50",
      cy: "50",
      r: "20",
      fill: "none"
    })
  ],
  -1
  /* HOISTED */
)), $p = [
  yp
];
function wp(e, n) {
  return p(), S(
    "div",
    {
      class: v(e.n())
    },
    [
      e.$slots.default ? (p(), S(
        "div",
        {
          key: 0,
          class: v(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
        },
        [
          R(e.$slots, "default"),
          e.loading ? (p(), S(
            "div",
            {
              key: 0,
              class: v(e.n("content-mask"))
            },
            null,
            2
            /* CLASS */
          )) : Q("v-if", !0)
        ],
        2
        /* CLASS */
      )) : Q("v-if", !0),
      e.isShow ? (p(), S(
        "div",
        {
          key: 1,
          class: v(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
        },
        [
          e.type === "circle" ? (p(), S(
            "div",
            {
              key: 0,
              class: v(e.n("circle"))
            },
            [
              B(
                "span",
                {
                  class: v(e.classes(e.n("circle-block"), e.n(`circle-block--${e.size}`))),
                  style: F({
                    width: e.multiplySizeUnit(e.radius, 2),
                    height: e.multiplySizeUnit(e.radius, 2),
                    color: e.color
                  })
                },
                $p,
                6
                /* CLASS, STYLE */
              )
            ],
            2
            /* CLASS */
          )) : Q("v-if", !0),
          (p(!0), S(
            Ne,
            null,
            Ge(e.loadingTypeDict, (t, o) => (p(), S(
              Ne,
              { key: o },
              [
                e.type === o ? (p(), S(
                  "div",
                  {
                    key: 0,
                    class: v(e.classes(e.n(o), e.n(`${o}--${e.size}`)))
                  },
                  [
                    (p(!0), S(
                      Ne,
                      null,
                      Ge(t, (r) => (p(), S(
                        "div",
                        {
                          key: r + o,
                          style: F({ backgroundColor: e.color }),
                          class: v(e.classes(e.n(`${o}-item`), e.n(`${o}-item--${e.size}`)))
                        },
                        null,
                        6
                        /* CLASS, STYLE */
                      ))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ],
                  2
                  /* CLASS */
                )) : Q("v-if", !0)
              ],
              64
              /* STABLE_FRAGMENT */
            ))),
            128
            /* KEYED_FRAGMENT */
          )),
          e.$slots.description || e.description ? (p(), S(
            "div",
            {
              key: 1,
              class: v(e.classes(e.n("description"), e.n(`description--${e.size}`))),
              style: F({ color: e.color })
            },
            [
              R(e.$slots, "description", {}, () => [
                Ie(
                  ae(e.description),
                  1
                  /* TEXT */
                )
              ])
            ],
            6
            /* CLASS, STYLE */
          )) : Q("v-if", !0)
        ],
        2
        /* CLASS */
      )) : Q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const uc = x({
  name: hp,
  props: at,
  setup(e, { slots: n }) {
    const t = M(() => y(n.default) ? e.loading : !0);
    return {
      loadingTypeDict: {
        wave: 5,
        cube: 4,
        rect: 8,
        disappear: 3
      },
      isShow: t,
      n: pp,
      classes: gp,
      multiplySizeUnit: dn
    };
  }
});
uc.render = wp;
var Ai = uc;
re(Ai);
const LE = Ai;
var Yt = Ai;
const Cp = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, { name: Sp, n: kp, classes: Pp } = ee("hover-overlay");
function Op(e, n) {
  return p(), S(
    "div",
    {
      class: v(e.classes(e.n(), [e.hovering, e.n("--hovering")]))
    },
    null,
    2
    /* CLASS */
  );
}
const dc = x({
  name: Sp,
  props: Cp,
  setup: () => ({
    n: kp,
    classes: Pp
  })
});
dc.render = Op;
var zi = dc;
re(zi);
function Hn() {
  const e = C(!1);
  return {
    hovering: e,
    handleHovering: (t) => {
      e.value = t;
    }
  };
}
const RE = zi;
var In = zi;
function cc(e) {
  if (!e)
    return !1;
  const n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && n || e === "mobile" && !n);
}
function Tp(e) {
  const n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((t, o) => {
    const [r, a] = o.split(":").map((i) => i.trim());
    return t[wi(r)] = a, t;
  }, {}) : {};
}
function Ep(e) {
  const { value: n } = e._hover, t = Tp(e);
  Object.keys(n).forEach((o) => {
    const r = wi(o);
    n[r] != null && t[r] && (e._hover.rawStyle[r] = t[r]);
  });
}
function Li(e, n) {
  Object.keys(n).forEach((t) => {
    const o = n[t];
    o != null && (e.style[t] = o);
  });
}
function Ip(e) {
  Object.keys(e._hover.value).forEach((n) => {
    e._hover.value[n] != null && (e.style[n] = "");
  });
}
function fc(e) {
  Ip(e), Li(e, e._hover.rawStyle);
}
function vc() {
  const { value: e } = this._hover;
  if (this._hover.hovering = !0, Qt(e)) {
    e(this._hover.hovering);
    return;
  }
  Li(this, e);
}
function mc() {
  if (this._hover.hovering = !1, Qt(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  fc(this);
}
function hc(e, n) {
  var t, o;
  const { arg: r, value: a } = n;
  cc(r) || (e._hover = {
    value: a,
    hovering: (o = (t = e._hover) == null ? void 0 : t.hovering) != null ? o : !1,
    rawStyle: {}
  }, Ep(e), e.addEventListener("mouseenter", vc), e.addEventListener("mouseleave", mc));
}
function pc(e, n) {
  cc(n.arg) || (fc(e), e.removeEventListener("mouseenter", vc), e.removeEventListener("mouseleave", mc));
}
function Bp(e, n) {
  e._hover && pc(e, n);
}
function Mp(e, n) {
  return !Qt(n.value) && e._hover.hovering;
}
function Dp(e, n) {
  hc(e, n), Mp(e, n) && Li(e, n.value);
}
const gc = {
  mounted: hc,
  unmounted: pc,
  beforeUpdate: Bp,
  updated: Dp,
  install(e) {
    e.directive("hover", this);
  }
}, UE = gc;
var kn = gc, Np = Object.defineProperty, Vp = Object.defineProperties, Ap = Object.getOwnPropertyDescriptors, Fs = Object.getOwnPropertySymbols, zp = Object.prototype.hasOwnProperty, Lp = Object.prototype.propertyIsEnumerable, Ys = (e, n, t) => n in e ? Np(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Rp = (e, n) => {
  for (var t in n || (n = {}))
    zp.call(n, t) && Ys(e, t, n[t]);
  if (Fs)
    for (var t of Fs(n))
      Lp.call(n, t) && Ys(e, t, n[t]);
  return e;
}, Up = (e, n) => Vp(e, Ap(n));
const Hp = {
  type: String,
  nativeType: {
    type: String,
    default: "button"
  },
  size: String,
  loading: Boolean,
  round: Boolean,
  block: Boolean,
  text: Boolean,
  outline: Boolean,
  disabled: Boolean,
  autoLoading: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  color: String,
  textColor: String,
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  loadingRadius: [Number, String],
  loadingType: Oe(at, "type"),
  loadingSize: Oe(at, "size"),
  loadingColor: Up(Rp({}, Oe(at, "color")), {
    default: "currentColor"
  }),
  onClick: A(),
  onTouchstart: A()
}, bc = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function Fp() {
  const { bindChildren: e, childProviders: n, length: t } = ln(bc);
  return {
    length: t,
    buttons: n,
    bindButtons: e
  };
}
function Yp() {
  const { bindParent: e, parentProvider: n, index: t } = an(bc);
  return {
    index: t,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
const { name: jp, n: Wp, classes: qp } = ee("button"), Gp = ["type", "disabled"];
function Xp(e, n) {
  const t = ie("var-loading"), o = ie("var-hover-overlay"), r = Ve("ripple"), a = Ve("hover");
  return Te((p(), S("button", {
    class: v(
      e.classes(
        e.n(),
        e.n("$--box"),
        e.n(`--${e.states.size}`),
        [e.block, `${e.n("$--flex")} ${e.n("--block")}`, e.n("$--inline-flex")],
        [e.disabled, e.n("--disabled")],
        [e.states.text, `${e.n(`--text-${e.states.type}`)} ${e.n("--text")}`, `${e.n(`--${e.states.type}`)} ${e.states.elevation}`],
        [e.states.text && e.disabled, e.n("--text-disabled")],
        [e.round, e.n("--round")],
        [e.states.outline, e.n("--outline")]
      )
    ),
    style: F({
      color: e.states.textColor,
      background: e.states.color
    }),
    type: e.nativeType,
    disabled: e.disabled,
    onClick: n[0] || (n[0] = (...i) => e.handleClick && e.handleClick(...i)),
    onTouchstart: n[1] || (n[1] = (...i) => e.handleTouchstart && e.handleTouchstart(...i))
  }, [
    e.loading || e.pending ? (p(), $e(t, {
      key: 0,
      class: v(e.n("loading")),
      "var-button-cover": "",
      color: e.loadingColor,
      type: e.loadingType,
      size: e.loadingSize,
      radius: e.loadingRadius
    }, null, 8, ["class", "color", "type", "size", "radius"])) : Q("v-if", !0),
    B(
      "div",
      {
        class: v(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [
        R(e.$slots, "default")
      ],
      2
      /* CLASS */
    ),
    Z(o, {
      hovering: e.disabled ? !1 : e.hovering
    }, null, 8, ["hovering"])
  ], 46, Gp)), [
    [r, { disabled: e.disabled || !e.ripple }],
    [a, e.handleHovering, "desktop"]
  ]);
}
const yc = x({
  name: jp,
  components: {
    VarLoading: Yt,
    VarHoverOverlay: In
  },
  directives: { Ripple: Ze, Hover: kn },
  props: Hp,
  setup(e) {
    const n = C(!1), { buttonGroup: t } = Yp(), { hovering: o, handleHovering: r } = Hn(), a = M(() => {
      if (!t)
        return {
          elevation: un(e.elevation, 2),
          type: e.type != null ? e.type : "default",
          size: e.size != null ? e.size : "normal",
          color: e.color,
          text: e.text,
          textColor: e.textColor,
          outline: e.outline
        };
      const { type: u, size: d, color: c, textColor: f, mode: m } = t;
      return {
        elevation: "",
        type: e.type != null ? e.type : u.value,
        size: e.size != null ? e.size : d.value,
        color: e.color != null ? e.color : c.value,
        textColor: e.textColor != null ? e.textColor : f.value,
        text: m.value !== "normal",
        outline: m.value === "outline"
      };
    });
    function i(u) {
      e.autoLoading && (n.value = !0, u = Ae(u) ? u : [u], Promise.all(u).then(() => {
        n.value = !1;
      }).catch(() => {
        n.value = !1;
      }));
    }
    function l(u) {
      const { loading: d, disabled: c, onClick: f } = e;
      !f || d || c || n.value || i(y(f, u));
    }
    function s(u) {
      const { loading: d, disabled: c, onTouchstart: f } = e;
      !f || d || c || n.value || i(y(f, u));
    }
    return {
      pending: n,
      states: a,
      hovering: o,
      n: Wp,
      classes: qp,
      handleHovering: r,
      handleClick: l,
      handleTouchstart: s
    };
  }
});
yc.render = Xp;
var Ri = yc;
re(Ri);
const HE = Ri;
var hn = Ri;
const Kp = {
  visibilityHeight: {
    type: [Number, String],
    default: 200
  },
  duration: {
    type: Number,
    default: 300
  },
  right: [Number, String],
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  bottom: [Number, String],
  target: [String, Object],
  onClick: A()
}, { name: Zp, n: Jp, classes: Qp } = ee("back-top");
function _p(e, n) {
  const t = ie("var-icon"), o = ie("var-button");
  return p(), $e(jn, {
    to: "body",
    disabled: e.disabled
  }, [
    B(
      "div",
      ze({
        class: e.classes(e.n(), [e.show, e.n("--active")]),
        ref: "backTopEl",
        style: {
          right: e.toSizeUnit(e.right),
          bottom: e.toSizeUnit(e.bottom)
        }
      }, e.$attrs, {
        onClick: n[0] || (n[0] = Cn((...r) => e.handleClick && e.handleClick(...r), ["stop"]))
      }),
      [
        R(e.$slots, "default", {}, () => [
          Z(o, {
            elevation: e.elevation,
            type: "primary",
            round: "",
            "var-back-top-cover": ""
          }, {
            default: me(() => [
              Z(t, { name: "chevron-up" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["elevation"])
        ])
      ],
      16
      /* FULL_PROPS */
    )
  ], 8, ["disabled"]);
}
const $c = x({
  name: Zp,
  components: {
    VarButton: hn,
    VarIcon: He
  },
  inheritAttrs: !1,
  props: Kp,
  setup(e) {
    const n = C(!1), t = C(null), o = C(!0);
    let r;
    const a = $i(() => {
      n.value = Ht(r) >= Fe(e.visibilityHeight);
    }, 200);
    Oo(() => {
      l(), s(), o.value = !1;
    }), gt(s), wr(u);
    function i(d) {
      y(e.onClick, d);
      const c = yi(r);
      vo(r, {
        left: c,
        duration: e.duration,
        animation: nc
      });
    }
    function l() {
      r = e.target ? Fd(e.target, "BackTop") : mt(t.value);
    }
    function s() {
      r.addEventListener("scroll", a);
    }
    function u() {
      r.removeEventListener("scroll", a);
    }
    return {
      disabled: o,
      show: n,
      backTopEl: t,
      toSizeUnit: Se,
      n: Jp,
      classes: Qp,
      handleClick: i
    };
  }
});
$c.render = _p;
var Ui = $c;
re(Ui);
const FE = Ui;
var na = Ui;
const xp = {
  type: {
    type: String,
    default: "default"
  },
  position: {
    type: String,
    default: "right-top"
  },
  hidden: Boolean,
  value: {
    type: [String, Number],
    default: 0
  },
  maxValue: [String, Number],
  dot: Boolean,
  icon: Oe(Ke, "name"),
  namespace: Oe(Ke, "namespace"),
  color: String
}, { name: eg, n: ng, classes: tg } = ee("badge");
function og(e, n) {
  const t = ie("var-icon");
  return p(), S(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box")))
    },
    [
      R(e.$slots, "default"),
      Z(We, {
        name: e.n("$-badge-fade"),
        persisted: ""
      }, {
        default: me(() => [
          Te(B(
            "span",
            ze({
              class: e.classes(
                e.n("content"),
                e.n(`--${e.type}`),
                [e.$slots.default, e.n(`--${e.position}`)],
                [e.dot, e.n("--dot")],
                [e.icon, e.n("--icon")]
              ),
              style: { background: e.color }
            }, e.$attrs),
            [
              e.icon ? (p(), $e(t, {
                key: 0,
                class: v(e.n("icon")),
                "var-badge-cover": "",
                name: e.icon,
                namespace: e.namespace
              }, null, 8, ["class", "name", "namespace"])) : Q("v-if", !0),
              R(e.$slots, "value", {}, () => [
                !e.icon && !e.dot ? (p(), S(
                  "span",
                  {
                    key: 0,
                    class: v(e.n("value"))
                  },
                  ae(e.value),
                  3
                  /* TEXT, CLASS */
                )) : Q("v-if", !0)
              ])
            ],
            16
            /* FULL_PROPS */
          ), [
            [Un, !e.hidden]
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["name"])
    ],
    2
    /* CLASS */
  );
}
const wc = x({
  name: eg,
  components: { VarIcon: He },
  inheritAttrs: !1,
  props: xp,
  setup(e) {
    return {
      value: M(() => {
        const { value: t, maxValue: o } = e;
        return t != null && o != null && L(t) > L(o) ? `${o}+` : t;
      }),
      n: ng,
      classes: tg
    };
  }
});
wc.render = og;
var Hi = wc;
re(Hi);
const YE = Hi;
var ur = Hi;
const rg = {
  active: {
    type: [Number, String],
    default: 0
  },
  zIndex: {
    type: [Number, String],
    default: 1
  },
  fixed: Boolean,
  border: Boolean,
  safeArea: Boolean,
  activeColor: String,
  inactiveColor: String,
  fabProps: Object,
  onChange: A(),
  onBeforeChange: A(),
  onFabClick: A(),
  "onUpdate:active": A()
}, Cc = Symbol(
  "BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"
);
function ag() {
  const { childProviders: e, length: n, bindChildren: t } = ln(
    Cc
  );
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: t
  };
}
var ig = Object.defineProperty, js = Object.getOwnPropertySymbols, lg = Object.prototype.hasOwnProperty, sg = Object.prototype.propertyIsEnumerable, Ws = (e, n, t) => n in e ? ig(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, qs = (e, n) => {
  for (var t in n || (n = {}))
    lg.call(n, t) && Ws(e, t, n[t]);
  if (js)
    for (var t of js(n))
      sg.call(n, t) && Ws(e, t, n[t]);
  return e;
};
const { name: ug, n: dg, classes: cg } = ee("bottom-navigation"), { n: kr } = ee("bottom-navigation-item"), Gs = kr("--right-half-space"), Xs = kr("--left-half-space"), Ks = kr("--right-space"), fg = {
  type: "primary"
};
function vg(e, n) {
  const t = ie("var-button");
  return p(), S(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: F(`z-index:${e.zIndex}`)
    },
    [
      R(e.$slots, "default"),
      e.$slots.fab ? (p(), $e(t, ze({
        key: 0,
        class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
        "var-bottom-navigation__fab": "",
        onClick: e.handleFabClick
      }, e.fabProps, { round: "" }), {
        default: me(() => [
          R(e.$slots, "fab")
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["class", "onClick"])) : Q("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  );
}
const Sc = x({
  name: ug,
  components: { VarButton: hn },
  props: rg,
  setup(e, { slots: n }) {
    const t = C(null), o = M(() => e.active), r = M(() => e.activeColor), a = M(() => e.inactiveColor), i = C({}), { length: l, bottomNavigationItems: s, bindBottomNavigationItem: u } = ag();
    u({
      active: o,
      activeColor: r,
      inactiveColor: a,
      onToggle: h
    }), ce(() => l.value, c), ce(
      () => e.fabProps,
      (k) => {
        i.value = qs(qs({}, fg), k);
      },
      { immediate: !0, deep: !0 }
    ), rn(() => {
      n.fab && T(l.value);
    }), Eo(() => {
      E(), n.fab && T(l.value);
    });
    function c() {
      l.value === 0 || f() || m() || g();
    }
    function f() {
      return s.find(({ name: k }) => o.value === k.value);
    }
    function m() {
      return s.find(({ index: k }) => o.value === k.value);
    }
    function g() {
      mn(o.value) && (o.value < 0 ? y(e["onUpdate:active"], 0) : o.value > l.value - 1 && y(e["onUpdate:active"], l.value - 1));
    }
    function h(k) {
      o.value !== k && (e.onBeforeChange ? b(k) : w(k));
    }
    function b(k) {
      const D = Qo(y(e.onBeforeChange, k));
      Promise.all(D).then((O) => {
        O.every(Boolean) && w(k);
      });
    }
    function w(k) {
      y(e["onUpdate:active"], k), y(e.onChange, k);
    }
    function E() {
      P().forEach((D) => {
        D.classList.remove(Gs, Xs, Ks);
      });
    }
    function T(k) {
      const D = P(), O = D.length, N = k % 2 === 0;
      D.forEach((z, U) => {
        $(N, z, U, O);
      });
    }
    function $(k, D, O, N) {
      const z = O === N - 1;
      if (!k && z) {
        D.classList.add(Ks);
        return;
      }
      const U = O === N / 2 - 1, te = O === N / 2;
      U ? D.classList.add(Gs) : te && D.classList.add(Xs);
    }
    function P() {
      return Array.from(t.value.querySelectorAll(`.${kr()}`));
    }
    function I() {
      y(e.onFabClick);
    }
    return {
      length: l,
      bottomNavigationDom: t,
      fabProps: i,
      n: dg,
      classes: cg,
      handleFabClick: I
    };
  }
});
Sc.render = vg;
var Fi = Sc;
re(Fi);
const jE = Fi;
var ta = Fi;
const mg = {
  name: String,
  label: String,
  icon: Oe(Ke, "name"),
  namespace: Oe(Ke, "namespace"),
  badge: {
    type: [Boolean, Object],
    default: !1
  },
  onClick: A()
};
function hg() {
  const { parentProvider: e, index: n, bindParent: t } = an(
    Cc
  );
  return t || Sn("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: t
  };
}
const { name: pg, n: gg, classes: bg } = ee("bottom-navigation-item"), yg = {
  type: "danger",
  dot: !0
};
function $g(e, n) {
  const t = ie("var-icon"), o = ie("var-badge"), r = Ve("ripple");
  return Te((p(), S(
    "button",
    {
      class: v(e.classes(e.n(), e.n("$--box"), [e.active === e.index || e.active === e.name, e.n("--active")])),
      style: F({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
    },
    [
      e.icon && !e.$slots.icon ? (p(), $e(t, {
        key: 0,
        name: e.icon,
        namespace: e.namespace,
        class: v(e.n("icon")),
        "var-bottom-navigation-item-cover": ""
      }, null, 8, ["name", "namespace", "class"])) : Q("v-if", !0),
      R(e.$slots, "icon", {
        active: e.active === e.index || e.active === e.name
      }),
      e.badge ? (p(), $e(o, ze({ key: 1 }, e.badgeProps, {
        class: e.n("badge"),
        "var-bottom-navigation-item-cover": ""
      }), null, 16, ["class"])) : Q("v-if", !0),
      B(
        "span",
        {
          class: v(e.n("label"))
        },
        [
          e.$slots.default ? Q("v-if", !0) : (p(), S(
            Ne,
            { key: 0 },
            [
              Ie(
                ae(e.label),
                1
                /* TEXT */
              )
            ],
            64
            /* STABLE_FRAGMENT */
          )),
          R(e.$slots, "default")
        ],
        2
        /* CLASS */
      )
    ],
    6
    /* CLASS, STYLE */
  )), [
    [r]
  ]);
}
const kc = x({
  name: pg,
  components: {
    VarBadge: ur,
    VarIcon: He
  },
  directives: { Ripple: Ze },
  props: mg,
  setup(e) {
    const n = M(() => e.name), t = M(() => e.badge), o = C({}), { index: r, bottomNavigation: a, bindBottomNavigation: i } = hg(), { active: l, activeColor: s, inactiveColor: u } = a;
    i({
      name: n,
      index: r
    }), ce(
      () => t.value,
      (m) => {
        o.value = m === !0 ? yg : t.value;
      },
      { immediate: !0 }
    );
    function c() {
      return l.value === n.value || l.value === r.value ? s.value : u.value;
    }
    function f() {
      var m;
      const g = (m = n.value) != null ? m : r.value;
      y(e.onClick, g), y(a.onToggle, g);
    }
    return {
      index: r,
      active: l,
      badge: t,
      badgeProps: o,
      n: gg,
      classes: bg,
      computeColorStyle: c,
      handleClick: f
    };
  }
});
kc.render = $g;
var Yi = kc;
re(Yi);
const WE = Yi;
var oa = Yi;
const wg = {
  separator: String,
  onClick: A()
}, Pc = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function Cg() {
  const { childProviders: e, bindChildren: n, length: t } = ln(
    Pc
  );
  return {
    length: t,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function Sg() {
  const { parentProvider: e, bindParent: n, index: t } = an(
    Pc
  );
  return n || Sn("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: t,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
const { name: kg, n: Pg, classes: Og } = ee("breadcrumb");
function Tg(e, n) {
  return p(), S(
    "div",
    {
      class: v(e.n())
    },
    [
      B(
        "div",
        {
          class: v(e.classes(e.n("content"), [!e.isLast, e.n("--active")])),
          onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
        },
        [
          R(e.$slots, "default")
        ],
        2
        /* CLASS */
      ),
      e.isLast ? Q("v-if", !0) : R(e.$slots, "separator", { key: 0 }, () => {
        var t;
        return [
          B(
            "div",
            {
              class: v(e.n("separator"))
            },
            ae((t = e.separator) != null ? t : e.parentSeparator),
            3
            /* TEXT, CLASS */
          )
        ];
      })
    ],
    2
    /* CLASS */
  );
}
const Oc = x({
  name: kg,
  props: wg,
  setup(e) {
    const { index: n, breadcrumb: t, bindBreadcrumb: o } = Sg(), r = M(() => n.value === t.length.value - 1), a = M(() => t.separator.value);
    o(null);
    function i(l) {
      r.value || y(e.onClick, l);
    }
    return {
      n: Pg,
      classes: Og,
      isLast: r,
      parentSeparator: a,
      handleClick: i
    };
  }
});
Oc.render = Tg;
var ji = Oc;
re(ji);
const qE = ji;
var ra = ji;
const Eg = {
  separator: {
    type: String,
    default: "/"
  }
}, { name: Ig, n: Bg } = ee("breadcrumbs");
function Mg(e, n) {
  return p(), S(
    "div",
    {
      class: v(e.n())
    },
    [
      R(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const Tc = x({
  name: Ig,
  props: Eg,
  setup(e) {
    const n = M(() => e.separator), { bindBreadcrumbList: t, length: o } = Cg();
    return t({
      length: o,
      separator: n
    }), { n: Bg };
  }
});
Tc.render = Mg;
var Wi = Tc;
re(Wi);
const GE = Wi;
var aa = Wi;
const Dg = {
  type: {
    type: String,
    default: "default"
  },
  size: {
    type: String,
    default: "normal"
  },
  color: String,
  textColor: String,
  mode: {
    type: String,
    default: "normal"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  vertical: Boolean
}, { name: Ng, n: Vg, classes: Ag } = ee("button-group");
function zg(e, n) {
  return p(), S(
    "div",
    {
      class: v(
        e.classes(
          e.n(),
          e.n("$--box"),
          [e.mode, `${e.n(`--mode-${e.mode}`)}`],
          [e.vertical, e.n("--vertical"), e.n("--horizontal")],
          [e.mode === "normal", e.formatElevation(e.elevation, 2)]
        )
      )
    },
    [
      R(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const Ec = x({
  name: Ng,
  props: Dg,
  setup(e) {
    const { bindButtons: n } = Fp(), t = {
      elevation: M(() => e.elevation),
      type: M(() => e.type),
      size: M(() => e.size),
      color: M(() => e.color),
      textColor: M(() => e.textColor),
      mode: M(() => e.mode)
    };
    return n(t), {
      n: Vg,
      classes: Ag,
      formatElevation: un
    };
  }
});
Ec.render = zg;
var qi = Ec;
re(qi);
const XE = qi;
var ia = qi;
const Lg = {
  src: String,
  fit: {
    type: String,
    default: "cover"
  },
  imageHeight: [String, Number],
  imageWidth: [String, Number],
  outline: Boolean,
  layout: {
    type: String,
    default: "column"
  },
  floating: Boolean,
  floatingDuration: {
    type: Number,
    default: 250
  },
  alt: String,
  title: String,
  subtitle: String,
  description: String,
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  ripple: Boolean,
  onClick: A(),
  "onUpdate:floating": A()
};
var Zs = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: Rg, n: Ug, classes: Hg } = ee("card"), Fg = 500, Yg = ["src", "alt"];
function jg(e, n) {
  const t = ie("var-icon"), o = ie("var-button"), r = Ve("ripple");
  return Te((p(), S(
    "div",
    {
      ref: "card",
      class: v(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.outline, e.n("--outline")], e.formatElevation(e.elevation, 1))),
      style: F({
        zIndex: e.floated ? e.zIndex : void 0
      }),
      onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
    },
    [
      B(
        "div",
        {
          ref: "cardFloater",
          class: v(e.n("floater")),
          style: F({
            width: e.floaterWidth,
            height: e.floaterHeight,
            top: e.floaterTop,
            left: e.floaterLeft,
            overflow: e.floaterOverflow,
            position: e.floaterPosition,
            transition: e.floated ? `background-color ${e.floatingDuration}ms, color ${e.floatingDuration}ms, width ${e.floatingDuration}ms, height ${e.floatingDuration}ms, top ${e.floatingDuration}ms, left ${e.floatingDuration}ms` : void 0
          })
        },
        [
          R(e.$slots, "image", {}, () => [
            e.src ? (p(), S("img", {
              key: 0,
              class: v(e.n("image")),
              style: F({
                objectFit: e.fit,
                height: e.toSizeUnit(e.imageHeight),
                width: e.toSizeUnit(e.imageWidth)
              }),
              src: e.src,
              alt: e.alt
            }, null, 14, Yg)) : Q("v-if", !0)
          ]),
          B(
            "div",
            {
              class: v(e.n("container"))
            },
            [
              R(e.$slots, "title", {}, () => [
                e.title ? (p(), S(
                  "div",
                  {
                    key: 0,
                    class: v(e.n("title"))
                  },
                  ae(e.title),
                  3
                  /* TEXT, CLASS */
                )) : Q("v-if", !0)
              ]),
              R(e.$slots, "subtitle", {}, () => [
                e.subtitle ? (p(), S(
                  "div",
                  {
                    key: 0,
                    class: v(e.n("subtitle"))
                  },
                  ae(e.subtitle),
                  3
                  /* TEXT, CLASS */
                )) : Q("v-if", !0)
              ]),
              R(e.$slots, "description", {}, () => [
                e.description ? (p(), S(
                  "div",
                  {
                    key: 0,
                    class: v(e.n("description"))
                  },
                  ae(e.description),
                  3
                  /* TEXT, CLASS */
                )) : Q("v-if", !0)
              ]),
              e.$slots.extra ? (p(), S(
                "div",
                {
                  key: 0,
                  class: v(e.n("footer"))
                },
                [
                  R(e.$slots, "extra")
                ],
                2
                /* CLASS */
              )) : Q("v-if", !0),
              e.$slots["floating-content"] && !e.isRow ? (p(), S(
                "div",
                {
                  key: 1,
                  class: v(e.n("floating-content")),
                  style: F({
                    height: e.contentHeight,
                    opacity: e.opacity,
                    transition: `opacity ${e.floatingDuration * 2}ms`
                  })
                },
                [
                  R(e.$slots, "floating-content")
                ],
                6
                /* CLASS, STYLE */
              )) : Q("v-if", !0)
            ],
            2
            /* CLASS */
          ),
          e.showFloatingButtons ? (p(), S(
            "div",
            {
              key: 0,
              class: v(e.classes(e.n("floating-buttons"), e.n("$--box"))),
              style: F({
                zIndex: e.zIndex,
                opacity: e.opacity,
                transition: `opacity ${e.floatingDuration * 2}ms`
              })
            },
            [
              R(e.$slots, "close-button", {}, () => [
                Z(o, {
                  "var-card-cover": "",
                  round: "",
                  class: v(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
                  onClick: Cn(e.close, ["stop"])
                }, {
                  default: me(() => [
                    Z(t, {
                      "var-card-cover": "",
                      name: "window-close",
                      class: v(e.n("close-button-icon"))
                    }, null, 8, ["class"])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["class", "onClick"])
              ])
            ],
            6
            /* CLASS, STYLE */
          )) : Q("v-if", !0)
        ],
        6
        /* CLASS, STYLE */
      ),
      B(
        "div",
        {
          class: v(e.n("holder")),
          style: F({
            width: e.holderWidth,
            height: e.holderHeight
          })
        },
        null,
        6
        /* CLASS, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  )), [
    [r, { disabled: !e.ripple || e.floater }]
  ]);
}
const Ic = x({
  name: Rg,
  directives: { Ripple: Ze },
  components: {
    VarIcon: He,
    VarButton: hn
  },
  props: Lg,
  setup(e) {
    const n = C(null), t = C(null), o = C("auto"), r = C("auto"), a = C("100%"), i = C("100%"), l = C("auto"), s = C("auto"), u = C(void 0), d = C("hidden"), c = C("0px"), f = C("0"), m = M(() => e.layout === "row"), g = C(!1), h = C(!1), { zIndex: b } = Do(() => e.floating, 1);
    let w = "auto", E = "auto", T = null;
    const $ = C(null);
    Mo(
      () => e.floating,
      () => !m.value
    ), ce(
      () => e.floating,
      (O) => {
        m.value || Ye(() => {
          O ? P() : I();
        });
      },
      { immediate: !0 }
    );
    function P() {
      return Zs(this, null, function* () {
        clearTimeout($.value), clearTimeout(T), $.value = null, $.value = setTimeout(
          () => Zs(this, null, function* () {
            const { width: O, height: N, left: z, top: U } = en(n.value);
            o.value = Se(O), r.value = Se(N), a.value = o.value, i.value = r.value, l.value = Se(U), s.value = Se(z), u.value = "fixed", w = l.value, E = s.value, g.value = !0, yield fn(), l.value = "0", s.value = "0", a.value = "100vw", i.value = "100vh", c.value = "auto", f.value = "1", d.value = "auto", h.value = !0;
          }),
          e.ripple ? Fg : 0
        );
      });
    }
    function I() {
      clearTimeout(T), clearTimeout($.value), $.value = null, a.value = o.value, i.value = r.value, l.value = w, s.value = E, c.value = "0px", f.value = "0", g.value = !1, T = setTimeout(() => {
        o.value = "auto", r.value = "auto", a.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", w = "auto", E = "auto", d.value = "hidden", u.value = void 0, h.value = !1;
      }, e.floatingDuration);
    }
    function k() {
      y(e["onUpdate:floating"], !1);
    }
    function D(O) {
      y(e.onClick, O);
    }
    return {
      card: n,
      cardFloater: t,
      holderWidth: o,
      holderHeight: r,
      floater: $,
      floaterWidth: a,
      floaterHeight: i,
      floaterTop: l,
      floaterLeft: s,
      floaterPosition: u,
      floaterOverflow: d,
      contentHeight: c,
      opacity: f,
      zIndex: b,
      isRow: m,
      showFloatingButtons: g,
      floated: h,
      n: Ug,
      classes: Hg,
      toSizeUnit: Se,
      close: k,
      formatElevation: un,
      handleClick: D
    };
  }
});
Ic.render = jg;
var Gi = Ic;
re(Gi);
const KE = Gi;
var la = Gi;
const Wg = {
  title: [Number, String],
  icon: Oe(Ke, "name"),
  namespace: Oe(Ke, "namespace"),
  description: String,
  border: Boolean,
  borderOffset: [Number, String],
  iconClass: String,
  titleClass: String,
  descriptionClass: String,
  extraClass: String,
  ripple: Boolean,
  onClick: A()
}, { name: qg, n: Gg, classes: Xg } = ee("cell");
function Kg(e, n) {
  const t = ie("var-icon"), o = Ve("ripple");
  return Te((p(), S(
    "div",
    {
      class: v(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: F(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
    },
    [
      R(e.$slots, "icon", {}, () => [
        e.icon ? (p(), S(
          "div",
          {
            key: 0,
            class: v(e.classes(e.n("icon"), e.iconClass))
          },
          [
            Z(t, {
              name: e.icon,
              namespace: e.namespace
            }, null, 8, ["name", "namespace"])
          ],
          2
          /* CLASS */
        )) : Q("v-if", !0)
      ]),
      B(
        "div",
        {
          class: v(e.n("content"))
        },
        [
          R(e.$slots, "default", {}, () => [
            e.title ? (p(), S(
              "div",
              {
                key: 0,
                class: v(e.classes(e.n("title"), e.titleClass))
              },
              ae(e.title),
              3
              /* TEXT, CLASS */
            )) : Q("v-if", !0)
          ]),
          R(e.$slots, "description", {}, () => [
            e.description ? (p(), S(
              "div",
              {
                key: 0,
                class: v(e.classes(e.n("description"), e.descriptionClass))
              },
              ae(e.description),
              3
              /* TEXT, CLASS */
            )) : Q("v-if", !0)
          ])
        ],
        2
        /* CLASS */
      ),
      e.$slots.extra ? (p(), S(
        "div",
        {
          key: 0,
          class: v(e.classes(e.n("extra"), e.extraClass))
        },
        [
          R(e.$slots, "extra")
        ],
        2
        /* CLASS */
      )) : Q("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  )), [
    [o, { disabled: !e.ripple }]
  ]);
}
const Bc = x({
  name: qg,
  components: { VarIcon: He },
  directives: { Ripple: Ze },
  props: Wg,
  setup(e) {
    const n = M(() => e.borderOffset == null ? {} : {
      "--cell-border-left": Se(e.borderOffset),
      "--cell-border-right": Se(e.borderOffset)
    });
    function t(o) {
      y(e.onClick, o);
    }
    return {
      borderOffsetStyles: n,
      n: Gg,
      classes: Xg,
      toSizeUnit: Se,
      handleClick: t
    };
  }
});
Bc.render = Kg;
var Xi = Bc;
re(Xi);
const ZE = Xi;
var dr = Xi;
const Zg = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, { name: Jg, n: Qg } = ee("form-details"), _g = { key: 0 }, xg = { key: 0 };
function e0(e, n) {
  return p(), $e(We, {
    name: e.n()
  }, {
    default: me(() => [
      e.errorMessage || e.extraMessage || e.$slots["extra-message"] ? (p(), S(
        "div",
        {
          key: 0,
          class: v(e.n())
        },
        [
          B(
            "div",
            {
              class: v(e.n("error-message"))
            },
            [
              Z(We, {
                name: e.n("message")
              }, {
                default: me(() => [
                  e.errorMessage ? (p(), S(
                    "div",
                    _g,
                    ae(e.errorMessage),
                    1
                    /* TEXT */
                  )) : Q("v-if", !0)
                ]),
                _: 1
                /* STABLE */
              }, 8, ["name"])
            ],
            2
            /* CLASS */
          ),
          B(
            "div",
            {
              class: v(e.n("extra-message"))
            },
            [
              Z(We, {
                name: e.n("message")
              }, {
                default: me(() => [
                  R(e.$slots, "extra-message", {}, () => [
                    e.extraMessage ? (p(), S(
                      "div",
                      xg,
                      ae(e.extraMessage),
                      1
                      /* TEXT */
                    )) : Q("v-if", !0)
                  ])
                ]),
                _: 3
                /* FORWARDED */
              }, 8, ["name"])
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      )) : Q("v-if", !0)
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["name"]);
}
const Mc = x({
  name: Jg,
  props: Zg,
  setup: () => ({ n: Qg })
});
Mc.render = e0;
var Ki = Mc;
re(Ki);
const JE = Ki;
var pn = Ki;
const n0 = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  checkedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !0
  },
  uncheckedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  checkedColor: String,
  uncheckedColor: String,
  disabled: Boolean,
  readonly: Boolean,
  indeterminate: Boolean,
  iconSize: [String, Number],
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: Array,
  onClick: A(),
  onChange: A(),
  "onUpdate:modelValue": A(),
  "onUpdate:indeterminate": A()
}, Dc = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function t0() {
  const { bindChildren: e, childProviders: n, length: t } = ln(
    Dc
  );
  return {
    length: t,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function o0() {
  const { bindParent: e, parentProvider: n, index: t } = an(
    Dc
  );
  return {
    index: t,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
var r0 = Object.defineProperty, a0 = Object.defineProperties, i0 = Object.getOwnPropertyDescriptors, Js = Object.getOwnPropertySymbols, l0 = Object.prototype.hasOwnProperty, s0 = Object.prototype.propertyIsEnumerable, Qs = (e, n, t) => n in e ? r0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, u0 = (e, n) => {
  for (var t in n || (n = {}))
    l0.call(n, t) && Qs(e, t, n[t]);
  if (Js)
    for (var t of Js(n))
      s0.call(n, t) && Qs(e, t, n[t]);
  return e;
}, d0 = (e, n) => a0(e, i0(n));
const Nc = Symbol("FORM_BIND_FORM_ITEM_KEY");
function Mn() {
  const { parentProvider: e, index: n, bindParent: t } = an(Nc), o = Zt();
  return {
    index: n,
    form: e,
    bindForm: t ? (a) => {
      t(d0(u0({}, a), { instance: o }));
    } : null
  };
}
function c0() {
  const { childProviders: e, length: n, bindChildren: t } = ln(Nc);
  return {
    length: n,
    formItems: e,
    bindFormItems: t
  };
}
const { name: f0, n: v0, classes: m0 } = ee("checkbox");
function h0(e, n) {
  const t = ie("var-icon"), o = ie("var-hover-overlay"), r = ie("var-form-details"), a = Ve("hover"), i = Ve("ripple");
  return p(), S(
    "div",
    {
      class: v(e.n("wrap")),
      onClick: n[0] || (n[0] = (...l) => e.handleClick && e.handleClick(...l))
    },
    [
      B(
        "div",
        {
          class: v(e.n())
        },
        [
          Te((p(), S(
            "div",
            {
              class: v(
                e.classes(
                  e.n("action"),
                  [e.checked || e.isIndeterminate, e.n("--checked"), e.n("--unchecked")],
                  [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")],
                  [e.formDisabled || e.disabled, e.n("--disabled")]
                )
              ),
              style: F({ color: e.checked || e.isIndeterminate ? e.checkedColor : e.uncheckedColor })
            },
            [
              e.isIndeterminate ? R(e.$slots, "indeterminate-icon", { key: 0 }, () => [
                Z(t, {
                  class: v(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                  name: "minus-box",
                  size: e.iconSize,
                  "var-checkbox-cover": ""
                }, null, 8, ["class", "size"])
              ]) : Q("v-if", !0),
              e.checked && !e.isIndeterminate ? R(e.$slots, "checked-icon", { key: 1 }, () => [
                Z(t, {
                  class: v(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                  name: "checkbox-marked",
                  size: e.iconSize,
                  "var-checkbox-cover": ""
                }, null, 8, ["class", "size"])
              ]) : Q("v-if", !0),
              !e.checked && !e.isIndeterminate ? R(e.$slots, "unchecked-icon", { key: 2 }, () => [
                Z(t, {
                  class: v(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                  name: "checkbox-blank-outline",
                  size: e.iconSize,
                  "var-checkbox-cover": ""
                }, null, 8, ["class", "size"])
              ]) : Q("v-if", !0),
              Z(o, {
                hovering: !e.disabled && !e.formDisabled && e.hovering
              }, null, 8, ["hovering"])
            ],
            6
            /* CLASS, STYLE */
          )), [
            [a, e.handleHovering, "desktop"],
            [i, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }]
          ]),
          B(
            "div",
            {
              class: v(
                e.classes(
                  e.n("text"),
                  [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")],
                  [e.formDisabled || e.disabled, e.n("--disabled")]
                )
              )
            },
            [
              R(e.$slots, "default")
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      ),
      Z(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Vc = x({
  name: f0,
  directives: { Ripple: Ze, Hover: kn },
  components: {
    VarIcon: He,
    VarFormDetails: pn,
    VarHoverOverlay: In
  },
  props: n0,
  setup(e) {
    const n = Xn(e, "modelValue"), t = Xn(e, "indeterminate"), o = M(() => n.value === e.checkedValue), r = M(() => e.checkedValue), a = C(!1), { checkboxGroup: i, bindCheckboxGroup: l } = o0(), { hovering: s, handleHovering: u } = Hn(), { form: d, bindForm: c } = Mn(), {
      errorMessage: f,
      validateWithTrigger: m,
      validate: g,
      // expose
      resetValidation: h
    } = Bn(), b = {
      checkedValue: r,
      checked: o,
      sync: $,
      validate: D,
      resetValidation: h,
      reset: I,
      resetWithAnimation: P
    };
    y(l, b), y(c, b);
    function w(O) {
      Ye(() => {
        const { validateTrigger: N, rules: z, modelValue: U } = e;
        m(N, O, z, U);
      });
    }
    function E(O) {
      const { checkedValue: N, onChange: z } = e;
      n.value = O, t.value = !1, y(z, n.value), w("onChange"), O === N ? i == null || i.onChecked(N) : i == null || i.onUnchecked(N);
    }
    function T(O) {
      const { disabled: N, readonly: z, checkedValue: U, uncheckedValue: te, onClick: G } = e;
      if (d != null && d.disabled.value || N || (y(G, O), d != null && d.readonly.value || z))
        return;
      a.value = !0;
      const j = i ? i.checkedCount.value >= Number(i.max.value) : !1;
      !o.value && j || E(o.value ? te : U);
    }
    function $(O) {
      const { checkedValue: N, uncheckedValue: z } = e;
      n.value = O.includes(N) ? N : z;
    }
    function P() {
      a.value = !1;
    }
    function I() {
      n.value = e.uncheckedValue, h();
    }
    function k(O) {
      const { checkedValue: N, uncheckedValue: z } = e;
      ![N, z].includes(O) && (O = o.value ? z : N), E(O);
    }
    function D() {
      return g(e.rules, e.modelValue);
    }
    return {
      isIndeterminate: t,
      withAnimation: a,
      checked: o,
      errorMessage: f,
      checkboxGroupErrorMessage: i == null ? void 0 : i.errorMessage,
      formDisabled: d == null ? void 0 : d.disabled,
      formReadonly: d == null ? void 0 : d.readonly,
      hovering: s,
      n: v0,
      classes: m0,
      handleHovering: u,
      handleClick: T,
      toggle: k,
      reset: I,
      validate: D,
      resetValidation: h
    };
  }
});
Vc.render = h0;
var Zi = Vc;
re(Zi);
const QE = Zi;
var ho = Zi;
const p0 = {
  modelValue: {
    type: Array,
    default: () => []
  },
  max: [String, Number],
  direction: {
    type: String,
    default: "horizontal"
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: Array,
  onChange: A(),
  "onUpdate:modelValue": A()
}, { name: g0, n: b0, classes: y0 } = ee("checkbox-group");
function $0(e, n) {
  const t = ie("var-form-details");
  return p(), S(
    "div",
    {
      class: v(e.n("wrap"))
    },
    [
      B(
        "div",
        {
          class: v(e.classes(e.n(), e.n(`--${e.direction}`)))
        },
        [
          R(e.$slots, "default")
        ],
        2
        /* CLASS */
      ),
      Z(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Ac = x({
  name: g0,
  components: { VarFormDetails: pn },
  props: p0,
  setup(e) {
    const n = M(() => e.max), t = M(() => e.modelValue.length), { length: o, checkboxes: r, bindCheckboxes: a } = t0(), { bindForm: i } = Mn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = Bn(), c = M(() => l.value), f = {
      max: n,
      checkedCount: t,
      onChecked: h,
      onUnchecked: b,
      validate: I,
      resetValidation: d,
      reset: P,
      errorMessage: c
    };
    ce(() => e.modelValue, w, { deep: !0 }), ce(() => o.value, w), a(f), y(i, f);
    function m(k) {
      Ye(() => {
        const { validateTrigger: D, rules: O, modelValue: N } = e;
        s(D, k, O, N);
      });
    }
    function g(k) {
      y(e["onUpdate:modelValue"], k), y(e.onChange, k), m("onChange");
    }
    function h(k) {
      const { modelValue: D } = e;
      D.includes(k) || g([...D, k]);
    }
    function b(k) {
      const { modelValue: D } = e;
      D.includes(k) && g(D.filter((O) => O !== k));
    }
    function w() {
      return r.forEach(({ sync: k }) => k(e.modelValue));
    }
    function E() {
      r.forEach((k) => k.resetWithAnimation());
    }
    function T() {
      const k = r.map(({ checkedValue: O }) => O.value), D = vs(k);
      return E(), y(e["onUpdate:modelValue"], D), D;
    }
    function $() {
      const k = r.filter(({ checked: O }) => !O.value).map(({ checkedValue: O }) => O.value), D = vs(k);
      return E(), y(e["onUpdate:modelValue"], D), D;
    }
    function P() {
      y(e["onUpdate:modelValue"], []), d();
    }
    function I() {
      return u(e.rules, e.modelValue);
    }
    return {
      errorMessage: l,
      n: b0,
      classes: y0,
      checkAll: T,
      inverseAll: $,
      reset: P,
      validate: I,
      resetValidation: d
    };
  }
});
Ac.render = $0;
var Ji = Ac;
re(Ji);
const _E = Ji;
var sa = Ji;
const w0 = {
  type: {
    type: String,
    default: "default"
  },
  size: {
    type: String,
    default: "normal"
  },
  color: String,
  textColor: String,
  iconName: Oe(Ke, "name"),
  namespace: Oe(Ke, "namespace"),
  plain: Boolean,
  round: {
    type: Boolean,
    default: !0
  },
  block: Boolean,
  /** @deprecated Use closeable to instead. */
  closable: Boolean,
  closeable: Boolean,
  onClose: A()
}, { name: C0, n: Qn, classes: S0 } = ee("chip");
function k0(e, n) {
  const t = ie("var-icon");
  return p(), $e(We, {
    name: e.n("$-fade")
  }, {
    default: me(() => [
      B(
        "span",
        ze({
          class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
          style: e.chipStyles
        }, e.$attrs),
        [
          R(e.$slots, "left"),
          B(
            "span",
            {
              class: v(e.n(`text-${e.size}`))
            },
            [
              R(e.$slots, "default")
            ],
            2
            /* CLASS */
          ),
          R(e.$slots, "right"),
          e.closeable || e.closable ? (p(), S(
            "span",
            {
              key: 0,
              class: v(e.n("--close")),
              onClick: n[0] || (n[0] = (...o) => e.handleClose && e.handleClose(...o))
            },
            [
              Z(t, {
                name: `${e.iconName ? e.iconName : "close-circle"}`,
                namespace: e.namespace
              }, null, 8, ["name", "namespace"])
            ],
            2
            /* CLASS */
          )) : Q("v-if", !0)
        ],
        16
        /* FULL_PROPS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["name"]);
}
const zc = x({
  name: C0,
  components: {
    VarIcon: He
  },
  inheritAttrs: !1,
  props: w0,
  setup(e) {
    const n = M(() => {
      const { plain: r, textColor: a, color: i } = e;
      return r ? {
        color: a || i,
        borderColor: i
      } : {
        color: a,
        background: i
      };
    }), t = M(() => {
      const { size: r, block: a, type: i, plain: l, round: s } = e, u = Qn(a ? "$--flex" : "$--inline-flex"), d = l ? `${Qn("plain")} ${Qn(`plain-${i}`)}` : Qn(`--${i}`), c = s ? Qn("--round") : null;
      return [Qn(`--${r}`), u, d, c];
    });
    function o(r) {
      y(e.onClose, r);
    }
    return {
      chipStyles: n,
      contentClass: t,
      n: Qn,
      classes: S0,
      handleClose: o
    };
  }
});
zc.render = k0;
var Qi = zc;
re(Qi);
const xE = Qi;
var cr = Qi;
const P0 = {
  span: {
    type: [String, Number],
    default: 24
  },
  offset: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "row"
  },
  justify: String,
  align: String,
  xs: [Object, Number, String],
  sm: [Object, Number, String],
  md: [Object, Number, String],
  lg: [Object, Number, String],
  xl: [Object, Number, String],
  onClick: A()
}, Lc = Symbol("ROW_BIND_COL_KEY");
function O0() {
  const { bindChildren: e, childProviders: n, length: t } = ln(Lc);
  return {
    length: t,
    cols: n,
    bindCols: e
  };
}
function T0() {
  const { parentProvider: e, index: n, bindParent: t } = an(Lc);
  return {
    index: n,
    row: e,
    bindRow: t
  };
}
const { name: E0, n: Yo, classes: I0 } = ee("col");
function B0(e, n) {
  return p(), S(
    "div",
    {
      class: v(
        e.classes(
          e.n(),
          e.n("$--box"),
          [e.span >= 0, e.n(`--span-${e.span}`)],
          [e.offset, e.n(`--offset-${e.offset}`)],
          ...e.getSize("xs", e.xs),
          ...e.getSize("sm", e.sm),
          ...e.getSize("md", e.md),
          ...e.getSize("lg", e.lg),
          ...e.getSize("xl", e.xl)
        )
      ),
      style: F({
        flexDirection: e.direction,
        justifyContent: e.padStartFlex(e.justify),
        alignItems: e.padStartFlex(e.align),
        paddingLeft: e.toSizeUnit(e.padding.left),
        paddingRight: e.toSizeUnit(e.padding.right),
        paddingTop: e.toSizeUnit(e.padding.top),
        paddingBottom: e.toSizeUnit(e.padding.bottom)
      }),
      onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      R(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const Rc = x({
  name: E0,
  props: P0,
  setup(e) {
    const n = M(() => L(e.span)), t = M(() => L(e.offset)), o = C({ left: 0, right: 0, top: 0, bottom: 0 }), { row: r, bindRow: a } = T0(), i = {
      setPadding(u) {
        o.value = u;
      }
    };
    ce([() => e.span, () => e.offset], () => {
      r == null || r.computePadding();
    }), y(a, i);
    function l(u, d) {
      const c = [];
      if (d == null)
        return c;
      if (co(d)) {
        const { offset: f, span: m } = d;
        Number(m) >= 0 && c.push(Yo(`--span-${u}-${m}`)), f && c.push(Yo(`--offset-${u}-${f}`));
      } else
        Number(d) >= 0 && c.push(Yo(`--span-${u}-${d}`));
      return c;
    }
    function s(u) {
      y(e.onClick, u);
    }
    return {
      span: n,
      offset: t,
      padding: o,
      n: Yo,
      classes: I0,
      toNumber: L,
      toSizeUnit: Se,
      getSize: l,
      handleClick: s,
      padStartFlex: lr
    };
  }
});
Rc.render = B0;
var _i = Rc;
re(_i);
const eI = _i;
var ua = _i;
const Uc = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function M0() {
  const { childProviders: e, length: n, bindChildren: t } = ln(
    Uc
  );
  return {
    length: n,
    collapseItem: e,
    bindCollapseItem: t
  };
}
const D0 = {
  modelValue: [Array, String, Number],
  accordion: Boolean,
  offset: {
    type: Boolean,
    default: !0
  },
  divider: {
    type: Boolean,
    default: !0
  },
  elevation: {
    type: [Boolean, String, Number],
    default: !0
  },
  onChange: A(),
  "onUpdate:modelValue": A()
}, { name: N0, n: V0 } = ee("collapse");
function A0(e, n) {
  return p(), S(
    "div",
    {
      class: v(e.n())
    },
    [
      R(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const Hc = x({
  name: N0,
  props: D0,
  setup(e) {
    const n = M(() => e.modelValue), t = M(() => e.offset), o = M(() => e.divider), r = M(() => e.elevation), { length: a, collapseItem: i, bindCollapseItem: l } = M0(), s = {
      active: n,
      offset: t,
      divider: o,
      elevation: r,
      updateItem: c
    };
    ce(
      () => a.value,
      () => Ye().then(g)
    ), ce(
      () => e.modelValue,
      () => Ye().then(g)
    ), l(s);
    function u() {
      return !e.accordion && !Ae(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Ae(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0;
    }
    function d(h, b) {
      return u() ? b ? e.accordion ? h : [...e.modelValue, h] : e.accordion ? null : e.modelValue.filter((w) => w !== h) : null;
    }
    function c(h, b) {
      const w = d(h, b);
      y(e["onUpdate:modelValue"], w), y(e.onChange, w);
    }
    function f() {
      if (e.accordion)
        return i.find(({ name: b }) => e.modelValue === b.value);
      const h = i.filter(({ name: b }) => b.value === void 0 ? !1 : e.modelValue.includes(b.value));
      return h.length ? h : void 0;
    }
    function m() {
      return e.accordion ? i.find(
        ({ index: h, name: b }) => b.value === void 0 && e.modelValue === h.value
      ) : i.filter(
        ({ index: h, name: b }) => b.value === void 0 && e.modelValue.includes(h.value)
      );
    }
    function g() {
      if (!u())
        return;
      const h = f() || m();
      if (e.accordion && !h || !e.accordion && !h.length) {
        i.forEach((b) => {
          b.init(e.accordion, !1);
        });
        return;
      }
      i.forEach((b) => {
        const w = e.accordion ? h === b : h.includes(b);
        b.init(e.accordion, w);
      });
    }
    return {
      divider: o,
      n: V0
    };
  }
});
Hc.render = A0;
var xi = Hc;
re(xi);
const nI = xi;
var da = xi;
function z0() {
  const { parentProvider: e, index: n, bindParent: t } = an(
    Uc
  );
  return t || Sn("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: n,
    collapse: e,
    bindCollapse: t
  };
}
const L0 = {
  name: [String, Number],
  title: String,
  icon: {
    type: String,
    default: "chevron-down"
  },
  disabled: Boolean
};
var _s = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: R0, n: U0, classes: H0 } = ee("collapse-item");
function F0(e, n) {
  const t = ie("var-icon");
  return p(), S(
    "div",
    {
      class: v(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
      style: F(`--collapse-divider-top: ${e.divider ? "var(--collapse-border-top)" : "none"}`)
    },
    [
      B(
        "div",
        {
          class: v(e.classes(e.n("shadow"), e.formatElevation(e.elevation, 2)))
        },
        null,
        2
        /* CLASS */
      ),
      B(
        "div",
        {
          class: v(e.n("header")),
          onClick: n[0] || (n[0] = (o) => e.toggle())
        },
        [
          B(
            "div",
            {
              class: v(e.n("header-title"))
            },
            [
              R(e.$slots, "title", {}, () => [
                Ie(
                  ae(e.title),
                  1
                  /* TEXT */
                )
              ])
            ],
            2
            /* CLASS */
          ),
          B(
            "div",
            {
              class: v(e.n("header-icon"))
            },
            [
              R(e.$slots, "icon", {}, () => [
                Z(t, {
                  name: e.icon,
                  transition: 250,
                  class: v(
                    e.classes(
                      e.n("header-icon"),
                      [e.isShow && e.icon === "chevron-down", e.n("header-open")],
                      [e.disabled, e.n("header--disable")]
                    )
                  )
                }, null, 8, ["name", "class"])
              ])
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      ),
      Te(B(
        "div",
        {
          class: v(e.n("content")),
          ref: "contentEl",
          onTransitionend: n[1] || (n[1] = (...o) => e.transitionend && e.transitionend(...o)),
          onTransitionstart: n[2] || (n[2] = (...o) => e.start && e.start(...o))
        },
        [
          B(
            "div",
            {
              class: v(e.n("content-wrap"))
            },
            [
              R(e.$slots, "default")
            ],
            2
            /* CLASS */
          )
        ],
        34
        /* CLASS, HYDRATE_EVENTS */
      ), [
        [Un, e.showContent]
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const Fc = x({
  name: R0,
  components: {
    VarIcon: He
  },
  props: L0,
  setup(e) {
    const n = C(!1), t = C(!1), o = C(null), r = M(() => e.name), { index: a, collapse: i, bindCollapse: l } = z0(), { active: s, offset: u, divider: d, elevation: c, updateItem: f } = i, m = {
      index: a,
      name: r,
      init: w
    };
    let g = !0;
    ce(n, (P) => {
      P ? h() : b();
    }), l(m);
    function h() {
      return _s(this, null, function* () {
        if (!o.value || (o.value.style.height = "", t.value = !0, yield _o(), !o.value))
          return;
        const { offsetHeight: P } = o.value;
        o.value.style.height = "0px", yield _o(), o.value && (o.value.style.height = P + "px", g && (yield fn(), g && $()));
      });
    }
    function b() {
      return _s(this, null, function* () {
        if (!o.value)
          return;
        const { offsetHeight: P } = o.value;
        o.value.style.height = P + "px", yield _o(), o.value.style.height = "0px";
      });
    }
    function w(P, I) {
      s.value === void 0 || P && Ae(s.value) || I === n.value || (n.value = I, E(!0));
    }
    function E(P) {
      e.disabled || P || f(e.name || a.value, !n.value);
    }
    function T() {
      g = !1;
    }
    function $() {
      n.value || (t.value = !1), o.value.style.height = "";
    }
    return {
      isShow: n,
      showContent: t,
      offset: u,
      divider: d,
      elevation: c,
      contentEl: o,
      n: U0,
      start: T,
      classes: H0,
      toggle: E,
      transitionend: $,
      formatElevation: un
    };
  }
});
Fc.render = F0;
var el = Fc;
re(el);
const tI = el;
var ca = el;
const Y0 = {
  time: {
    type: [String, Number],
    default: 0
  },
  format: {
    type: String,
    default: "HH : mm : ss"
  },
  autoStart: {
    type: Boolean,
    default: !0
  },
  onEnd: A(),
  onChange: A()
}, { name: j0, n: W0 } = ee("countdown"), fa = 1e3, va = 60 * fa, ma = 60 * va, xs = 24 * ma;
function q0(e, n) {
  return p(), S(
    "div",
    {
      class: v(e.n())
    },
    [
      R(e.$slots, "default", st(Io(e.timeData)), () => [
        Ie(
          ae(e.showTime),
          1
          /* TEXT */
        )
      ])
    ],
    2
    /* CLASS */
  );
}
const Yc = x({
  name: j0,
  props: Y0,
  setup(e) {
    const n = C(""), t = C({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    });
    let o = 0, r = !1, a = 0, i = 0, l;
    ce(
      () => e.time,
      () => {
        m(), e.autoStart && c();
      },
      { immediate: !0 }
    ), gt(() => {
      l != null && (r = l, r === !0 && c(!0));
    }), Kt(() => {
      l = r, f();
    }), To(f);
    function s(g, h) {
      const b = Object.values(h), w = ["DD", "HH", "mm", "ss"], E = [24, 60, 60, 1e3];
      if (w.forEach((T, $) => {
        g.includes(T) ? g = g.replace(T, kt(`${b[$]}`, 2, "0")) : b[$ + 1] += b[$] * E[$];
      }), g.includes("S")) {
        const T = kt(`${b[b.length - 1]}`, 3, "0");
        g.includes("SSS") ? g = g.replace("SSS", T) : g.includes("SS") ? g = g.replace("SS", T.slice(0, 2)) : g = g.replace("S", T.slice(0, 1));
      }
      return g;
    }
    function u(g) {
      const h = Math.floor(g / xs), b = Math.floor(g % xs / ma), w = Math.floor(g % ma / va), E = Math.floor(g % va / fa), T = Math.floor(g % fa), $ = {
        days: h,
        hours: b,
        minutes: w,
        seconds: E,
        milliseconds: T
      };
      t.value = $, y(e.onChange, t.value), n.value = s(e.format, $);
    }
    function d() {
      const { time: g, onEnd: h } = e, b = performance.now();
      if (o || (o = b + L(g)), i = o - b, i < 0 && (i = 0), u(i), i === 0) {
        y(h);
        return;
      }
      r && (a = fo(d));
    }
    function c(g = !1) {
      r && !g || (r = !0, o = performance.now() + (i || L(e.time)), d());
    }
    function f() {
      r = !1, ms(a);
    }
    function m() {
      o = 0, r = !1, ms(a), d();
    }
    return {
      showTime: n,
      timeData: t,
      n: W0,
      start: c,
      pause: f,
      reset: m
    };
  }
});
Yc.render = q0;
var nl = Yc;
re(nl);
const oI = nl;
var ha = nl;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Vt = 9e15, $t = 1e9, pa = "0123456789abcdef", fr = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", vr = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", ga = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed at run-time using the `Decimal.config` method.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used when rounding to `precision`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The modulo mode used when calculating the modulus: a mod n.
  // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
  // The remainder (r) is calculated as: r = a - n * q.
  //
  // UP         0 The remainder is positive if the dividend is negative, else is negative.
  // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
  // FLOOR      3 The remainder has the same sign as the divisor (Python %).
  // HALF_EVEN  6 The IEEE 754 remainder function.
  // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
  //
  // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
  // division (9) are commonly used for the modulus operation. The other rounding modes can also
  // be used, but they may not give useful results.
  modulo: 1,
  // 0 to 9
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -EXP_LIMIT
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to EXP_LIMIT
  // The minimum exponent value, beneath which underflow to zero occurs.
  // JavaScript numbers: -324  (5e-324)
  minE: -Vt,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Vt,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, jc, qn, we = !0, Pr = "[DecimalError] ", ht = Pr + "Invalid argument: ", Wc = Pr + "Precision limit exceeded", qc = Pr + "crypto unavailable", Gc = "[object Decimal]", sn = Math.floor, xe = Math.pow, G0 = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, X0 = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, K0 = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Xc = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, zn = 1e7, be = 7, Z0 = 9007199254740991, J0 = fr.length - 1, ba = vr.length - 1, K = { toStringTag: Gc };
K.absoluteValue = K.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), pe(e);
};
K.ceil = function() {
  return pe(new this.constructor(this), this.e + 1, 2);
};
K.clampedTo = K.clamp = function(e, n) {
  var t, o = this, r = o.constructor;
  if (e = new r(e), n = new r(n), !e.s || !n.s)
    return new r(NaN);
  if (e.gt(n))
    throw Error(ht + n);
  return t = o.cmp(e), t < 0 ? e : o.cmp(n) > 0 ? n : new r(o);
};
K.comparedTo = K.cmp = function(e) {
  var n, t, o, r, a = this, i = a.d, l = (e = new a.constructor(e)).d, s = a.s, u = e.s;
  if (!i || !l)
    return !s || !u ? NaN : s !== u ? s : i === l ? 0 : !i ^ s < 0 ? 1 : -1;
  if (!i[0] || !l[0])
    return i[0] ? s : l[0] ? -u : 0;
  if (s !== u)
    return s;
  if (a.e !== e.e)
    return a.e > e.e ^ s < 0 ? 1 : -1;
  for (o = i.length, r = l.length, n = 0, t = o < r ? o : r; n < t; ++n)
    if (i[n] !== l[n])
      return i[n] > l[n] ^ s < 0 ? 1 : -1;
  return o === r ? 0 : o > r ^ s < 0 ? 1 : -1;
};
K.cosine = K.cos = function() {
  var e, n, t = this, o = t.constructor;
  return t.d ? t.d[0] ? (e = o.precision, n = o.rounding, o.precision = e + Math.max(t.e, t.sd()) + be, o.rounding = 1, t = Q0(o, _c(o, t)), o.precision = e, o.rounding = n, pe(qn == 2 || qn == 3 ? t.neg() : t, e, n, !0)) : new o(1) : new o(NaN);
};
K.cubeRoot = K.cbrt = function() {
  var e, n, t, o, r, a, i, l, s, u, d = this, c = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new c(d);
  for (we = !1, a = d.s * xe(d.s * d, 1 / 3), !a || Math.abs(a) == 1 / 0 ? (t = on(d.d), e = d.e, (a = (e - t.length + 1) % 3) && (t += a == 1 || a == -2 ? "0" : "00"), a = xe(t, 1 / 3), e = sn((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == 1 / 0 ? t = "5e" + e : (t = a.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), o = new c(t), o.s = d.s) : o = new c(a.toString()), i = (e = c.precision) + 3; ; )
    if (l = o, s = l.times(l).times(l), u = s.plus(d), o = Re(u.plus(d).times(l), u.plus(s), i + 2, 1), on(l.d).slice(0, i) === (t = on(o.d)).slice(0, i))
      if (t = t.slice(i - 3, i + 1), t == "9999" || !r && t == "4999") {
        if (!r && (pe(l, e + 1, 0), l.times(l).times(l).eq(d))) {
          o = l;
          break;
        }
        i += 4, r = 1;
      } else {
        (!+t || !+t.slice(1) && t.charAt(0) == "5") && (pe(o, e + 1, 1), n = !o.times(o).times(o).eq(d));
        break;
      }
  return we = !0, pe(o, e, c.rounding, n);
};
K.decimalPlaces = K.dp = function() {
  var e, n = this.d, t = NaN;
  if (n) {
    if (e = n.length - 1, t = (e - sn(this.e / be)) * be, e = n[e], e)
      for (; e % 10 == 0; e /= 10)
        t--;
    t < 0 && (t = 0);
  }
  return t;
};
K.dividedBy = K.div = function(e) {
  return Re(this, new this.constructor(e));
};
K.dividedToIntegerBy = K.divToInt = function(e) {
  var n = this, t = n.constructor;
  return pe(Re(n, new t(e), 0, 1, 1), t.precision, t.rounding);
};
K.equals = K.eq = function(e) {
  return this.cmp(e) === 0;
};
K.floor = function() {
  return pe(new this.constructor(this), this.e + 1, 3);
};
K.greaterThan = K.gt = function(e) {
  return this.cmp(e) > 0;
};
K.greaterThanOrEqualTo = K.gte = function(e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
K.hyperbolicCosine = K.cosh = function() {
  var e, n, t, o, r, a = this, i = a.constructor, l = new i(1);
  if (!a.isFinite())
    return new i(a.s ? 1 / 0 : NaN);
  if (a.isZero())
    return l;
  t = i.precision, o = i.rounding, i.precision = t + Math.max(a.e, a.sd()) + 4, i.rounding = 1, r = a.d.length, r < 32 ? (e = Math.ceil(r / 3), n = (1 / Tr(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), a = jt(i, 1, a.times(n), new i(1), !0);
  for (var s, u = e, d = new i(8); u--; )
    s = a.times(a), a = l.minus(s.times(d.minus(s.times(d))));
  return pe(a, i.precision = t, i.rounding = o, !0);
};
K.hyperbolicSine = K.sinh = function() {
  var e, n, t, o, r = this, a = r.constructor;
  if (!r.isFinite() || r.isZero())
    return new a(r);
  if (n = a.precision, t = a.rounding, a.precision = n + Math.max(r.e, r.sd()) + 4, a.rounding = 1, o = r.d.length, o < 3)
    r = jt(a, 2, r, r, !0);
  else {
    e = 1.4 * Math.sqrt(o), e = e > 16 ? 16 : e | 0, r = r.times(1 / Tr(5, e)), r = jt(a, 2, r, r, !0);
    for (var i, l = new a(5), s = new a(16), u = new a(20); e--; )
      i = r.times(r), r = r.times(l.plus(i.times(s.times(i).plus(u))));
  }
  return a.precision = n, a.rounding = t, pe(r, n, t, !0);
};
K.hyperbolicTangent = K.tanh = function() {
  var e, n, t = this, o = t.constructor;
  return t.isFinite() ? t.isZero() ? new o(t) : (e = o.precision, n = o.rounding, o.precision = e + 7, o.rounding = 1, Re(t.sinh(), t.cosh(), o.precision = e, o.rounding = n)) : new o(t.s);
};
K.inverseCosine = K.acos = function() {
  var e, n = this, t = n.constructor, o = n.abs().cmp(1), r = t.precision, a = t.rounding;
  return o !== -1 ? o === 0 ? n.isNeg() ? An(t, r, a) : new t(0) : new t(NaN) : n.isZero() ? An(t, r + 4, a).times(0.5) : (t.precision = r + 6, t.rounding = 1, n = n.asin(), e = An(t, r + 4, a).times(0.5), t.precision = r, t.rounding = a, e.minus(n));
};
K.inverseHyperbolicCosine = K.acosh = function() {
  var e, n, t = this, o = t.constructor;
  return t.lte(1) ? new o(t.eq(1) ? 0 : NaN) : t.isFinite() ? (e = o.precision, n = o.rounding, o.precision = e + Math.max(Math.abs(t.e), t.sd()) + 4, o.rounding = 1, we = !1, t = t.times(t).minus(1).sqrt().plus(t), we = !0, o.precision = e, o.rounding = n, t.ln()) : new o(t);
};
K.inverseHyperbolicSine = K.asinh = function() {
  var e, n, t = this, o = t.constructor;
  return !t.isFinite() || t.isZero() ? new o(t) : (e = o.precision, n = o.rounding, o.precision = e + 2 * Math.max(Math.abs(t.e), t.sd()) + 6, o.rounding = 1, we = !1, t = t.times(t).plus(1).sqrt().plus(t), we = !0, o.precision = e, o.rounding = n, t.ln());
};
K.inverseHyperbolicTangent = K.atanh = function() {
  var e, n, t, o, r = this, a = r.constructor;
  return r.isFinite() ? r.e >= 0 ? new a(r.abs().eq(1) ? r.s / 0 : r.isZero() ? r : NaN) : (e = a.precision, n = a.rounding, o = r.sd(), Math.max(o, e) < 2 * -r.e - 1 ? pe(new a(r), e, n, !0) : (a.precision = t = o - r.e, r = Re(r.plus(1), new a(1).minus(r), t + e, 1), a.precision = e + 4, a.rounding = 1, r = r.ln(), a.precision = e, a.rounding = n, r.times(0.5))) : new a(NaN);
};
K.inverseSine = K.asin = function() {
  var e, n, t, o, r = this, a = r.constructor;
  return r.isZero() ? new a(r) : (n = r.abs().cmp(1), t = a.precision, o = a.rounding, n !== -1 ? n === 0 ? (e = An(a, t + 4, o).times(0.5), e.s = r.s, e) : new a(NaN) : (a.precision = t + 6, a.rounding = 1, r = r.div(new a(1).minus(r.times(r)).sqrt().plus(1)).atan(), a.precision = t, a.rounding = o, r.times(2)));
};
K.inverseTangent = K.atan = function() {
  var e, n, t, o, r, a, i, l, s, u = this, d = u.constructor, c = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && c + 4 <= ba)
      return i = An(d, c + 4, f).times(0.25), i.s = u.s, i;
  } else {
    if (!u.s)
      return new d(NaN);
    if (c + 4 <= ba)
      return i = An(d, c + 4, f).times(0.5), i.s = u.s, i;
  }
  for (d.precision = l = c + 10, d.rounding = 1, t = Math.min(28, l / be + 2 | 0), e = t; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (we = !1, n = Math.ceil(l / be), o = 1, s = u.times(u), i = new d(u), r = u; e !== -1; )
    if (r = r.times(s), a = i.minus(r.div(o += 2)), r = r.times(s), i = a.plus(r.div(o += 2)), i.d[n] !== void 0)
      for (e = n; i.d[e] === a.d[e] && e--; )
        ;
  return t && (i = i.times(2 << t - 1)), we = !0, pe(i, d.precision = c, d.rounding = f, !0);
};
K.isFinite = function() {
  return !!this.d;
};
K.isInteger = K.isInt = function() {
  return !!this.d && sn(this.e / be) > this.d.length - 2;
};
K.isNaN = function() {
  return !this.s;
};
K.isNegative = K.isNeg = function() {
  return this.s < 0;
};
K.isPositive = K.isPos = function() {
  return this.s > 0;
};
K.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
K.lessThan = K.lt = function(e) {
  return this.cmp(e) < 0;
};
K.lessThanOrEqualTo = K.lte = function(e) {
  return this.cmp(e) < 1;
};
K.logarithm = K.log = function(e) {
  var n, t, o, r, a, i, l, s, u = this, d = u.constructor, c = d.precision, f = d.rounding, m = 5;
  if (e == null)
    e = new d(10), n = !0;
  else {
    if (e = new d(e), t = e.d, e.s < 0 || !t || !t[0] || e.eq(1))
      return new d(NaN);
    n = e.eq(10);
  }
  if (t = u.d, u.s < 0 || !t || !t[0] || u.eq(1))
    return new d(t && !t[0] ? -1 / 0 : u.s != 1 ? NaN : t ? 0 : 1 / 0);
  if (n)
    if (t.length > 1)
      a = !0;
    else {
      for (r = t[0]; r % 10 === 0; )
        r /= 10;
      a = r !== 1;
    }
  if (we = !1, l = c + m, i = it(u, l), o = n ? mr(d, l + 10) : it(e, l), s = Re(i, o, l, 1), po(s.d, r = c, f))
    do
      if (l += 10, i = it(u, l), o = n ? mr(d, l + 10) : it(e, l), s = Re(i, o, l, 1), !a) {
        +on(s.d).slice(r + 1, r + 15) + 1 == 1e14 && (s = pe(s, c + 1, 0));
        break;
      }
    while (po(s.d, r += 10, f));
  return we = !0, pe(s, c, f);
};
K.minus = K.sub = function(e) {
  var n, t, o, r, a, i, l, s, u, d, c, f, m = this, g = m.constructor;
  if (e = new g(e), !m.d || !e.d)
    return !m.s || !e.s ? e = new g(NaN) : m.d ? e.s = -e.s : e = new g(e.d || m.s !== e.s ? m : NaN), e;
  if (m.s != e.s)
    return e.s = -e.s, m.plus(e);
  if (u = m.d, f = e.d, l = g.precision, s = g.rounding, !u[0] || !f[0]) {
    if (f[0])
      e.s = -e.s;
    else if (u[0])
      e = new g(m);
    else
      return new g(s === 3 ? -0 : 0);
    return we ? pe(e, l, s) : e;
  }
  if (t = sn(e.e / be), d = sn(m.e / be), u = u.slice(), a = d - t, a) {
    for (c = a < 0, c ? (n = u, a = -a, i = f.length) : (n = f, t = d, i = u.length), o = Math.max(Math.ceil(l / be), i) + 2, a > o && (a = o, n.length = 1), n.reverse(), o = a; o--; )
      n.push(0);
    n.reverse();
  } else {
    for (o = u.length, i = f.length, c = o < i, c && (i = o), o = 0; o < i; o++)
      if (u[o] != f[o]) {
        c = u[o] < f[o];
        break;
      }
    a = 0;
  }
  for (c && (n = u, u = f, f = n, e.s = -e.s), i = u.length, o = f.length - i; o > 0; --o)
    u[i++] = 0;
  for (o = f.length; o > a; ) {
    if (u[--o] < f[o]) {
      for (r = o; r && u[--r] === 0; )
        u[r] = zn - 1;
      --u[r], u[o] += zn;
    }
    u[o] -= f[o];
  }
  for (; u[--i] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --t;
  return u[0] ? (e.d = u, e.e = Or(u, t), we ? pe(e, l, s) : e) : new g(s === 3 ? -0 : 0);
};
K.modulo = K.mod = function(e) {
  var n, t = this, o = t.constructor;
  return e = new o(e), !t.d || !e.s || e.d && !e.d[0] ? new o(NaN) : !e.d || t.d && !t.d[0] ? pe(new o(t), o.precision, o.rounding) : (we = !1, o.modulo == 9 ? (n = Re(t, e.abs(), 0, 3, 1), n.s *= e.s) : n = Re(t, e, 0, o.modulo, 1), n = n.times(e), we = !0, t.minus(n));
};
K.naturalExponential = K.exp = function() {
  return ya(this);
};
K.naturalLogarithm = K.ln = function() {
  return it(this);
};
K.negated = K.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, pe(e);
};
K.plus = K.add = function(e) {
  var n, t, o, r, a, i, l, s, u, d, c = this, f = c.constructor;
  if (e = new f(e), !c.d || !e.d)
    return !c.s || !e.s ? e = new f(NaN) : c.d || (e = new f(e.d || c.s === e.s ? c : NaN)), e;
  if (c.s != e.s)
    return e.s = -e.s, c.minus(e);
  if (u = c.d, d = e.d, l = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(c)), we ? pe(e, l, s) : e;
  if (a = sn(c.e / be), o = sn(e.e / be), u = u.slice(), r = a - o, r) {
    for (r < 0 ? (t = u, r = -r, i = d.length) : (t = d, o = a, i = u.length), a = Math.ceil(l / be), i = a > i ? a + 1 : i + 1, r > i && (r = i, t.length = 1), t.reverse(); r--; )
      t.push(0);
    t.reverse();
  }
  for (i = u.length, r = d.length, i - r < 0 && (r = i, t = d, d = u, u = t), n = 0; r; )
    n = (u[--r] = u[r] + d[r] + n) / zn | 0, u[r] %= zn;
  for (n && (u.unshift(n), ++o), i = u.length; u[--i] == 0; )
    u.pop();
  return e.d = u, e.e = Or(u, o), we ? pe(e, l, s) : e;
};
K.precision = K.sd = function(e) {
  var n, t = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(ht + e);
  return t.d ? (n = Kc(t.d), e && t.e + 1 > n && (n = t.e + 1)) : n = NaN, n;
};
K.round = function() {
  var e = this, n = e.constructor;
  return pe(new n(e), e.e + 1, n.rounding);
};
K.sine = K.sin = function() {
  var e, n, t = this, o = t.constructor;
  return t.isFinite() ? t.isZero() ? new o(t) : (e = o.precision, n = o.rounding, o.precision = e + Math.max(t.e, t.sd()) + be, o.rounding = 1, t = x0(o, _c(o, t)), o.precision = e, o.rounding = n, pe(qn > 2 ? t.neg() : t, e, n, !0)) : new o(NaN);
};
K.squareRoot = K.sqrt = function() {
  var e, n, t, o, r, a, i = this, l = i.d, s = i.e, u = i.s, d = i.constructor;
  if (u !== 1 || !l || !l[0])
    return new d(!u || u < 0 && (!l || l[0]) ? NaN : l ? i : 1 / 0);
  for (we = !1, u = Math.sqrt(+i), u == 0 || u == 1 / 0 ? (n = on(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = sn((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), o = new d(n)) : o = new d(u.toString()), t = (s = d.precision) + 3; ; )
    if (a = o, o = a.plus(Re(i, a, t + 2, 1)).times(0.5), on(a.d).slice(0, t) === (n = on(o.d)).slice(0, t))
      if (n = n.slice(t - 3, t + 1), n == "9999" || !r && n == "4999") {
        if (!r && (pe(a, s + 1, 0), a.times(a).eq(i))) {
          o = a;
          break;
        }
        t += 4, r = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (pe(o, s + 1, 1), e = !o.times(o).eq(i));
        break;
      }
  return we = !0, pe(o, s, d.rounding, e);
};
K.tangent = K.tan = function() {
  var e, n, t = this, o = t.constructor;
  return t.isFinite() ? t.isZero() ? new o(t) : (e = o.precision, n = o.rounding, o.precision = e + 10, o.rounding = 1, t = t.sin(), t.s = 1, t = Re(t, new o(1).minus(t.times(t)).sqrt(), e + 10, 0), o.precision = e, o.rounding = n, pe(qn == 2 || qn == 4 ? t.neg() : t, e, n, !0)) : new o(NaN);
};
K.times = K.mul = function(e) {
  var n, t, o, r, a, i, l, s, u, d = this, c = d.constructor, f = d.d, m = (e = new c(e)).d;
  if (e.s *= d.s, !f || !f[0] || !m || !m[0])
    return new c(!e.s || f && !f[0] && !m || m && !m[0] && !f ? NaN : !f || !m ? e.s / 0 : e.s * 0);
  for (t = sn(d.e / be) + sn(e.e / be), s = f.length, u = m.length, s < u && (a = f, f = m, m = a, i = s, s = u, u = i), a = [], i = s + u, o = i; o--; )
    a.push(0);
  for (o = u; --o >= 0; ) {
    for (n = 0, r = s + o; r > o; )
      l = a[r] + m[o] * f[r - o - 1] + n, a[r--] = l % zn | 0, n = l / zn | 0;
    a[r] = (a[r] + n) % zn | 0;
  }
  for (; !a[--i]; )
    a.pop();
  return n ? ++t : a.shift(), e.d = a, e.e = Or(a, t), we ? pe(e, c.precision, c.rounding) : e;
};
K.toBinary = function(e, n) {
  return tl(this, 2, e, n);
};
K.toDecimalPlaces = K.toDP = function(e, n) {
  var t = this, o = t.constructor;
  return t = new o(t), e === void 0 ? t : (gn(e, 0, $t), n === void 0 ? n = o.rounding : gn(n, 0, 8), pe(t, e + t.e + 1, n));
};
K.toExponential = function(e, n) {
  var t, o = this, r = o.constructor;
  return e === void 0 ? t = Fn(o, !0) : (gn(e, 0, $t), n === void 0 ? n = r.rounding : gn(n, 0, 8), o = pe(new r(o), e + 1, n), t = Fn(o, !0, e + 1)), o.isNeg() && !o.isZero() ? "-" + t : t;
};
K.toFixed = function(e, n) {
  var t, o, r = this, a = r.constructor;
  return e === void 0 ? t = Fn(r) : (gn(e, 0, $t), n === void 0 ? n = a.rounding : gn(n, 0, 8), o = pe(new a(r), e + r.e + 1, n), t = Fn(o, !1, e + o.e + 1)), r.isNeg() && !r.isZero() ? "-" + t : t;
};
K.toFraction = function(e) {
  var n, t, o, r, a, i, l, s, u, d, c, f, m = this, g = m.d, h = m.constructor;
  if (!g)
    return new h(m);
  if (u = t = new h(1), o = s = new h(0), n = new h(o), a = n.e = Kc(g) - m.e - 1, i = a % be, n.d[0] = xe(10, i < 0 ? be + i : i), e == null)
    e = a > 0 ? n : u;
  else {
    if (l = new h(e), !l.isInt() || l.lt(u))
      throw Error(ht + l);
    e = l.gt(n) ? a > 0 ? n : u : l;
  }
  for (we = !1, l = new h(on(g)), d = h.precision, h.precision = a = g.length * be * 2; c = Re(l, n, 0, 1, 1), r = t.plus(c.times(o)), r.cmp(e) != 1; )
    t = o, o = r, r = u, u = s.plus(c.times(r)), s = r, r = n, n = l.minus(c.times(r)), l = r;
  return r = Re(e.minus(t), o, 0, 1, 1), s = s.plus(r.times(u)), t = t.plus(r.times(o)), s.s = u.s = m.s, f = Re(u, o, a, 1).minus(m).abs().cmp(Re(s, t, a, 1).minus(m).abs()) < 1 ? [u, o] : [s, t], h.precision = d, we = !0, f;
};
K.toHexadecimal = K.toHex = function(e, n) {
  return tl(this, 16, e, n);
};
K.toNearest = function(e, n) {
  var t = this, o = t.constructor;
  if (t = new o(t), e == null) {
    if (!t.d)
      return t;
    e = new o(1), n = o.rounding;
  } else {
    if (e = new o(e), n === void 0 ? n = o.rounding : gn(n, 0, 8), !t.d)
      return e.s ? t : e;
    if (!e.d)
      return e.s && (e.s = t.s), e;
  }
  return e.d[0] ? (we = !1, t = Re(t, e, 0, n, 1).times(e), we = !0, pe(t)) : (e.s = t.s, t = e), t;
};
K.toNumber = function() {
  return +this;
};
K.toOctal = function(e, n) {
  return tl(this, 8, e, n);
};
K.toPower = K.pow = function(e) {
  var n, t, o, r, a, i, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0])
    return new s(xe(+l, u));
  if (l = new s(l), l.eq(1))
    return l;
  if (o = s.precision, a = s.rounding, e.eq(1))
    return pe(l, o, a);
  if (n = sn(e.e / be), n >= e.d.length - 1 && (t = u < 0 ? -u : u) <= Z0)
    return r = Zc(s, l, t, o), e.s < 0 ? new s(1).div(r) : pe(r, o, a);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return t = xe(+l, u), n = t == 0 || !isFinite(t) ? sn(u * (Math.log("0." + on(l.d)) / Math.LN10 + l.e + 1)) : new s(t + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : (we = !1, s.rounding = l.s = 1, t = Math.min(12, (n + "").length), r = ya(e.times(it(l, o + t)), o), r.d && (r = pe(r, o + 5, 1), po(r.d, o, a) && (n = o + 10, r = pe(ya(e.times(it(l, n + t)), n), n + 5, 1), +on(r.d).slice(o + 1, o + 15) + 1 == 1e14 && (r = pe(r, o + 1, 0)))), r.s = i, we = !0, s.rounding = a, pe(r, o, a));
};
K.toPrecision = function(e, n) {
  var t, o = this, r = o.constructor;
  return e === void 0 ? t = Fn(o, o.e <= r.toExpNeg || o.e >= r.toExpPos) : (gn(e, 1, $t), n === void 0 ? n = r.rounding : gn(n, 0, 8), o = pe(new r(o), e, n), t = Fn(o, e <= o.e || o.e <= r.toExpNeg, e)), o.isNeg() && !o.isZero() ? "-" + t : t;
};
K.toSignificantDigits = K.toSD = function(e, n) {
  var t = this, o = t.constructor;
  return e === void 0 ? (e = o.precision, n = o.rounding) : (gn(e, 1, $t), n === void 0 ? n = o.rounding : gn(n, 0, 8)), pe(new o(t), e, n);
};
K.toString = function() {
  var e = this, n = e.constructor, t = Fn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + t : t;
};
K.truncated = K.trunc = function() {
  return pe(new this.constructor(this), this.e + 1, 1);
};
K.valueOf = K.toJSON = function() {
  var e = this, n = e.constructor, t = Fn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + t : t;
};
function on(e) {
  var n, t, o, r = e.length - 1, a = "", i = e[0];
  if (r > 0) {
    for (a += i, n = 1; n < r; n++)
      o = e[n] + "", t = be - o.length, t && (a += xn(t)), a += o;
    i = e[n], o = i + "", t = be - o.length, t && (a += xn(t));
  } else if (i === 0)
    return "0";
  for (; i % 10 === 0; )
    i /= 10;
  return a + i;
}
function gn(e, n, t) {
  if (e !== ~~e || e < n || e > t)
    throw Error(ht + e);
}
function po(e, n, t, o) {
  var r, a, i, l;
  for (a = e[0]; a >= 10; a /= 10)
    --n;
  return --n < 0 ? (n += be, r = 0) : (r = Math.ceil((n + 1) / be), n %= be), a = xe(10, be - n), l = e[r] % a | 0, o == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), i = t < 4 && l == 99999 || t > 3 && l == 49999 || l == 5e4 || l == 0) : i = (t < 4 && l + 1 == a || t > 3 && l + 1 == a / 2) && (e[r + 1] / a / 100 | 0) == xe(10, n - 2) - 1 || (l == a / 2 || l == 0) && (e[r + 1] / a / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), i = (o || t < 4) && l == 9999 || !o && t > 3 && l == 4999) : i = ((o || t < 4) && l + 1 == a || !o && t > 3 && l + 1 == a / 2) && (e[r + 1] / a / 1e3 | 0) == xe(10, n - 3) - 1, i;
}
function xo(e, n, t) {
  for (var o, r = [0], a, i = 0, l = e.length; i < l; ) {
    for (a = r.length; a--; )
      r[a] *= n;
    for (r[0] += pa.indexOf(e.charAt(i++)), o = 0; o < r.length; o++)
      r[o] > t - 1 && (r[o + 1] === void 0 && (r[o + 1] = 0), r[o + 1] += r[o] / t | 0, r[o] %= t);
  }
  return r.reverse();
}
function Q0(e, n) {
  var t, o, r;
  if (n.isZero())
    return n;
  o = n.d.length, o < 32 ? (t = Math.ceil(o / 3), r = (1 / Tr(4, t)).toString()) : (t = 16, r = "2.3283064365386962890625e-10"), e.precision += t, n = jt(e, 1, n.times(r), new e(1));
  for (var a = t; a--; ) {
    var i = n.times(n);
    n = i.times(i).minus(i).times(8).plus(1);
  }
  return e.precision -= t, n;
}
var Re = function() {
  function e(o, r, a) {
    var i, l = 0, s = o.length;
    for (o = o.slice(); s--; )
      i = o[s] * r + l, o[s] = i % a | 0, l = i / a | 0;
    return l && o.unshift(l), o;
  }
  function n(o, r, a, i) {
    var l, s;
    if (a != i)
      s = a > i ? 1 : -1;
    else
      for (l = s = 0; l < a; l++)
        if (o[l] != r[l]) {
          s = o[l] > r[l] ? 1 : -1;
          break;
        }
    return s;
  }
  function t(o, r, a, i) {
    for (var l = 0; a--; )
      o[a] -= l, l = o[a] < r[a] ? 1 : 0, o[a] = l * i + o[a] - r[a];
    for (; !o[0] && o.length > 1; )
      o.shift();
  }
  return function(o, r, a, i, l, s) {
    var u, d, c, f, m, g, h, b, w, E, T, $, P, I, k, D, O, N, z, U, te = o.constructor, G = o.s == r.s ? 1 : -1, j = o.d, X = r.d;
    if (!j || !j[0] || !X || !X[0])
      return new te(
        // Return NaN if either NaN, or both Infinity or 0.
        !o.s || !r.s || (j ? X && j[0] == X[0] : !X) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          j && j[0] == 0 || !X ? G * 0 : G / 0
        )
      );
    for (s ? (m = 1, d = o.e - r.e) : (s = zn, m = be, d = sn(o.e / m) - sn(r.e / m)), z = X.length, O = j.length, w = new te(G), E = w.d = [], c = 0; X[c] == (j[c] || 0); c++)
      ;
    if (X[c] > (j[c] || 0) && d--, a == null ? (I = a = te.precision, i = te.rounding) : l ? I = a + (o.e - r.e) + 1 : I = a, I < 0)
      E.push(1), g = !0;
    else {
      if (I = I / m + 2 | 0, c = 0, z == 1) {
        for (f = 0, X = X[0], I++; (c < O || f) && I--; c++)
          k = f * s + (j[c] || 0), E[c] = k / X | 0, f = k % X | 0;
        g = f || c < O;
      } else {
        for (f = s / (X[0] + 1) | 0, f > 1 && (X = e(X, f, s), j = e(j, f, s), z = X.length, O = j.length), D = z, T = j.slice(0, z), $ = T.length; $ < z; )
          T[$++] = 0;
        U = X.slice(), U.unshift(0), N = X[0], X[1] >= s / 2 && ++N;
        do
          f = 0, u = n(X, T, z, $), u < 0 ? (P = T[0], z != $ && (P = P * s + (T[1] || 0)), f = P / N | 0, f > 1 ? (f >= s && (f = s - 1), h = e(X, f, s), b = h.length, $ = T.length, u = n(h, T, b, $), u == 1 && (f--, t(h, z < b ? U : X, b, s))) : (f == 0 && (u = f = 1), h = X.slice()), b = h.length, b < $ && h.unshift(0), t(T, h, $, s), u == -1 && ($ = T.length, u = n(X, T, z, $), u < 1 && (f++, t(T, z < $ ? U : X, $, s))), $ = T.length) : u === 0 && (f++, T = [0]), E[c++] = f, u && T[0] ? T[$++] = j[D] || 0 : (T = [j[D]], $ = 1);
        while ((D++ < O || T[0] !== void 0) && I--);
        g = T[0] !== void 0;
      }
      E[0] || E.shift();
    }
    if (m == 1)
      w.e = d, jc = g;
    else {
      for (c = 1, f = E[0]; f >= 10; f /= 10)
        c++;
      w.e = c + d * m - 1, pe(w, l ? a + w.e + 1 : a, i, g);
    }
    return w;
  };
}();
function pe(e, n, t, o) {
  var r, a, i, l, s, u, d, c, f, m = e.constructor;
  e:
    if (n != null) {
      if (c = e.d, !c)
        return e;
      for (r = 1, l = c[0]; l >= 10; l /= 10)
        r++;
      if (a = n - r, a < 0)
        a += be, i = n, d = c[f = 0], s = d / xe(10, r - i - 1) % 10 | 0;
      else if (f = Math.ceil((a + 1) / be), l = c.length, f >= l)
        if (o) {
          for (; l++ <= f; )
            c.push(0);
          d = s = 0, r = 1, a %= be, i = a - be + 1;
        } else
          break e;
      else {
        for (d = l = c[f], r = 1; l >= 10; l /= 10)
          r++;
        a %= be, i = a - be + r, s = i < 0 ? 0 : d / xe(10, r - i - 1) % 10 | 0;
      }
      if (o = o || n < 0 || c[f + 1] !== void 0 || (i < 0 ? d : d % xe(10, r - i - 1)), u = t < 4 ? (s || o) && (t == 0 || t == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (t == 4 || o || t == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (a > 0 ? i > 0 ? d / xe(10, r - i) : 0 : c[f - 1]) % 10 & 1 || t == (e.s < 0 ? 8 : 7)), n < 1 || !c[0])
        return c.length = 0, u ? (n -= e.e + 1, c[0] = xe(10, (be - n % be) % be), e.e = -n || 0) : c[0] = e.e = 0, e;
      if (a == 0 ? (c.length = f, l = 1, f--) : (c.length = f + 1, l = xe(10, be - a), c[f] = i > 0 ? (d / xe(10, r - i) % xe(10, i) | 0) * l : 0), u)
        for (; ; )
          if (f == 0) {
            for (a = 1, i = c[0]; i >= 10; i /= 10)
              a++;
            for (i = c[0] += l, l = 1; i >= 10; i /= 10)
              l++;
            a != l && (e.e++, c[0] == zn && (c[0] = 1));
            break;
          } else {
            if (c[f] += l, c[f] != zn)
              break;
            c[f--] = 0, l = 1;
          }
      for (a = c.length; c[--a] === 0; )
        c.pop();
    }
  return we && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e;
}
function Fn(e, n, t) {
  if (!e.isFinite())
    return Qc(e);
  var o, r = e.e, a = on(e.d), i = a.length;
  return n ? (t && (o = t - i) > 0 ? a = a.charAt(0) + "." + a.slice(1) + xn(o) : i > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : r < 0 ? (a = "0." + xn(-r - 1) + a, t && (o = t - i) > 0 && (a += xn(o))) : r >= i ? (a += xn(r + 1 - i), t && (o = t - r - 1) > 0 && (a = a + "." + xn(o))) : ((o = r + 1) < i && (a = a.slice(0, o) + "." + a.slice(o)), t && (o = t - i) > 0 && (r + 1 === i && (a += "."), a += xn(o))), a;
}
function Or(e, n) {
  var t = e[0];
  for (n *= be; t >= 10; t /= 10)
    n++;
  return n;
}
function mr(e, n, t) {
  if (n > J0)
    throw we = !0, t && (e.precision = t), Error(Wc);
  return pe(new e(fr), n, 1, !0);
}
function An(e, n, t) {
  if (n > ba)
    throw Error(Wc);
  return pe(new e(vr), n, t, !0);
}
function Kc(e) {
  var n = e.length - 1, t = n * be + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      t--;
    for (n = e[0]; n >= 10; n /= 10)
      t++;
  }
  return t;
}
function xn(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function Zc(e, n, t, o) {
  var r, a = new e(1), i = Math.ceil(o / be + 4);
  for (we = !1; ; ) {
    if (t % 2 && (a = a.times(n), nu(a.d, i) && (r = !0)), t = sn(t / 2), t === 0) {
      t = a.d.length - 1, r && a.d[t] === 0 && ++a.d[t];
      break;
    }
    n = n.times(n), nu(n.d, i);
  }
  return we = !0, a;
}
function eu(e) {
  return e.d[e.d.length - 1] & 1;
}
function Jc(e, n, t) {
  for (var o, r = new e(n[0]), a = 0; ++a < n.length; )
    if (o = new e(n[a]), o.s)
      r[t](o) && (r = o);
    else {
      r = o;
      break;
    }
  return r;
}
function ya(e, n) {
  var t, o, r, a, i, l, s, u = 0, d = 0, c = 0, f = e.constructor, m = f.rounding, g = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (we = !1, s = g) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), c += 5;
  for (o = Math.log(xe(2, c)) / Math.LN10 * 2 + 5 | 0, s += o, t = a = i = new f(1), f.precision = s; ; ) {
    if (a = pe(a.times(e), s, 1), t = t.times(++d), l = i.plus(Re(a, t, s, 1)), on(l.d).slice(0, s) === on(i.d).slice(0, s)) {
      for (r = c; r--; )
        i = pe(i.times(i), s, 1);
      if (n == null)
        if (u < 3 && po(i.d, s - o, m, u))
          f.precision = s += 10, t = a = l = new f(1), d = 0, u++;
        else
          return pe(i, f.precision = g, m, we = !0);
      else
        return f.precision = g, i;
    }
    i = l;
  }
}
function it(e, n) {
  var t, o, r, a, i, l, s, u, d, c, f, m = 1, g = 10, h = e, b = h.d, w = h.constructor, E = w.rounding, T = w.precision;
  if (h.s < 0 || !b || !b[0] || !h.e && b[0] == 1 && b.length == 1)
    return new w(b && !b[0] ? -1 / 0 : h.s != 1 ? NaN : b ? 0 : h);
  if (n == null ? (we = !1, d = T) : d = n, w.precision = d += g, t = on(b), o = t.charAt(0), Math.abs(a = h.e) < 15e14) {
    for (; o < 7 && o != 1 || o == 1 && t.charAt(1) > 3; )
      h = h.times(e), t = on(h.d), o = t.charAt(0), m++;
    a = h.e, o > 1 ? (h = new w("0." + t), a++) : h = new w(o + "." + t.slice(1));
  } else
    return u = mr(w, d + 2, T).times(a + ""), h = it(new w(o + "." + t.slice(1)), d - g).plus(u), w.precision = T, n == null ? pe(h, T, E, we = !0) : h;
  for (c = h, s = i = h = Re(h.minus(1), h.plus(1), d, 1), f = pe(h.times(h), d, 1), r = 3; ; ) {
    if (i = pe(i.times(f), d, 1), u = s.plus(Re(i, new w(r), d, 1)), on(u.d).slice(0, d) === on(s.d).slice(0, d))
      if (s = s.times(2), a !== 0 && (s = s.plus(mr(w, d + 2, T).times(a + ""))), s = Re(s, new w(m), d, 1), n == null)
        if (po(s.d, d - g, E, l))
          w.precision = d += g, u = i = h = Re(c.minus(1), c.plus(1), d, 1), f = pe(h.times(h), d, 1), r = l = 1;
        else
          return pe(s, w.precision = T, E, we = !0);
      else
        return w.precision = T, s;
    s = u, r += 2;
  }
}
function Qc(e) {
  return String(e.s * e.s / 0);
}
function $a(e, n) {
  var t, o, r;
  for ((t = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (o = n.search(/e/i)) > 0 ? (t < 0 && (t = o), t += +n.slice(o + 1), n = n.substring(0, o)) : t < 0 && (t = n.length), o = 0; n.charCodeAt(o) === 48; o++)
    ;
  for (r = n.length; n.charCodeAt(r - 1) === 48; --r)
    ;
  if (n = n.slice(o, r), n) {
    if (r -= o, e.e = t = t - o - 1, e.d = [], o = (t + 1) % be, t < 0 && (o += be), o < r) {
      for (o && e.d.push(+n.slice(0, o)), r -= be; o < r; )
        e.d.push(+n.slice(o, o += be));
      n = n.slice(o), o = be - n.length;
    } else
      o -= r;
    for (; o--; )
      n += "0";
    e.d.push(+n), we && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function _0(e, n) {
  var t, o, r, a, i, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), Xc.test(n))
      return $a(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (X0.test(n))
    t = 16, n = n.toLowerCase();
  else if (G0.test(n))
    t = 2;
  else if (K0.test(n))
    t = 8;
  else
    throw Error(ht + n);
  for (a = n.search(/p/i), a > 0 ? (s = +n.slice(a + 1), n = n.substring(2, a)) : n = n.slice(2), a = n.indexOf("."), i = a >= 0, o = e.constructor, i && (n = n.replace(".", ""), l = n.length, a = l - a, r = Zc(o, new o(t), a, a * 2)), u = xo(n, t, zn), d = u.length - 1, a = d; u[a] === 0; --a)
    u.pop();
  return a < 0 ? new o(e.s * 0) : (e.e = Or(u, d), e.d = u, we = !1, i && (e = Re(e, r, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? xe(2, s) : lt.pow(2, s))), we = !0, e);
}
function x0(e, n) {
  var t, o = n.d.length;
  if (o < 3)
    return n.isZero() ? n : jt(e, 2, n, n);
  t = 1.4 * Math.sqrt(o), t = t > 16 ? 16 : t | 0, n = n.times(1 / Tr(5, t)), n = jt(e, 2, n, n);
  for (var r, a = new e(5), i = new e(16), l = new e(20); t--; )
    r = n.times(n), n = n.times(a.plus(r.times(i.times(r).minus(l))));
  return n;
}
function jt(e, n, t, o, r) {
  var a, i, l, s, u = e.precision, d = Math.ceil(u / be);
  for (we = !1, s = t.times(t), l = new e(o); ; ) {
    if (i = Re(l.times(s), new e(n++ * n++), u, 1), l = r ? o.plus(i) : o.minus(i), o = Re(i.times(s), new e(n++ * n++), u, 1), i = l.plus(o), i.d[d] !== void 0) {
      for (a = d; i.d[a] === l.d[a] && a--; )
        ;
      if (a == -1)
        break;
    }
    a = l, l = o, o = i, i = a;
  }
  return we = !0, i.d.length = d + 1, i;
}
function Tr(e, n) {
  for (var t = e; --n; )
    t *= e;
  return t;
}
function _c(e, n) {
  var t, o = n.s < 0, r = An(e, e.precision, 1), a = r.times(0.5);
  if (n = n.abs(), n.lte(a))
    return qn = o ? 4 : 1, n;
  if (t = n.divToInt(r), t.isZero())
    qn = o ? 3 : 2;
  else {
    if (n = n.minus(t.times(r)), n.lte(a))
      return qn = eu(t) ? o ? 2 : 3 : o ? 4 : 1, n;
    qn = eu(t) ? o ? 1 : 4 : o ? 3 : 2;
  }
  return n.minus(r).abs();
}
function tl(e, n, t, o) {
  var r, a, i, l, s, u, d, c, f, m = e.constructor, g = t !== void 0;
  if (g ? (gn(t, 1, $t), o === void 0 ? o = m.rounding : gn(o, 0, 8)) : (t = m.precision, o = m.rounding), !e.isFinite())
    d = Qc(e);
  else {
    for (d = Fn(e), i = d.indexOf("."), g ? (r = 2, n == 16 ? t = t * 4 - 3 : n == 8 && (t = t * 3 - 2)) : r = n, i >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - i, f.d = xo(Fn(f), 10, r), f.e = f.d.length), c = xo(d, 10, r), a = s = c.length; c[--s] == 0; )
      c.pop();
    if (!c[0])
      d = g ? "0p+0" : "0";
    else {
      if (i < 0 ? a-- : (e = new m(e), e.d = c, e.e = a, e = Re(e, f, t, o, 0, r), c = e.d, a = e.e, u = jc), i = c[t], l = r / 2, u = u || c[t + 1] !== void 0, u = o < 4 ? (i !== void 0 || u) && (o === 0 || o === (e.s < 0 ? 3 : 2)) : i > l || i === l && (o === 4 || u || o === 6 && c[t - 1] & 1 || o === (e.s < 0 ? 8 : 7)), c.length = t, u)
        for (; ++c[--t] > r - 1; )
          c[t] = 0, t || (++a, c.unshift(1));
      for (s = c.length; !c[s - 1]; --s)
        ;
      for (i = 0, d = ""; i < s; i++)
        d += pa.charAt(c[i]);
      if (g) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (i = n == 16 ? 4 : 3, --s; s % i; s++)
              d += "0";
            for (c = xo(d, r, n), s = c.length; !c[s - 1]; --s)
              ;
            for (i = 1, d = "1."; i < s; i++)
              d += pa.charAt(c[i]);
          } else
            d = d.charAt(0) + "." + d.slice(1);
        d = d + (a < 0 ? "p" : "p+") + a;
      } else if (a < 0) {
        for (; ++a; )
          d = "0" + d;
        d = "0." + d;
      } else if (++a > s)
        for (a -= s; a--; )
          d += "0";
      else
        a < s && (d = d.slice(0, a) + "." + d.slice(a));
    }
    d = (n == 16 ? "0x" : n == 2 ? "0b" : n == 8 ? "0o" : "") + d;
  }
  return e.s < 0 ? "-" + d : d;
}
function nu(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function eb(e) {
  return new this(e).abs();
}
function nb(e) {
  return new this(e).acos();
}
function tb(e) {
  return new this(e).acosh();
}
function ob(e, n) {
  return new this(e).plus(n);
}
function rb(e) {
  return new this(e).asin();
}
function ab(e) {
  return new this(e).asinh();
}
function ib(e) {
  return new this(e).atan();
}
function lb(e) {
  return new this(e).atanh();
}
function sb(e, n) {
  e = new this(e), n = new this(n);
  var t, o = this.precision, r = this.rounding, a = o + 4;
  return !e.s || !n.s ? t = new this(NaN) : !e.d && !n.d ? (t = An(this, a, 1).times(n.s > 0 ? 0.25 : 0.75), t.s = e.s) : !n.d || e.isZero() ? (t = n.s < 0 ? An(this, o, r) : new this(0), t.s = e.s) : !e.d || n.isZero() ? (t = An(this, a, 1).times(0.5), t.s = e.s) : n.s < 0 ? (this.precision = a, this.rounding = 1, t = this.atan(Re(e, n, a, 1)), n = An(this, a, 1), this.precision = o, this.rounding = r, t = e.s < 0 ? t.minus(n) : t.plus(n)) : t = this.atan(Re(e, n, a, 1)), t;
}
function ub(e) {
  return new this(e).cbrt();
}
function db(e) {
  return pe(e = new this(e), e.e + 1, 2);
}
function cb(e, n, t) {
  return new this(e).clamp(n, t);
}
function fb(e) {
  if (!e || typeof e != "object")
    throw Error(Pr + "Object expected");
  var n, t, o, r = e.defaults === !0, a = [
    "precision",
    1,
    $t,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Vt,
    0,
    "toExpPos",
    0,
    Vt,
    "maxE",
    0,
    Vt,
    "minE",
    -Vt,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < a.length; n += 3)
    if (t = a[n], r && (this[t] = ga[t]), (o = e[t]) !== void 0)
      if (sn(o) === o && o >= a[n + 1] && o <= a[n + 2])
        this[t] = o;
      else
        throw Error(ht + t + ": " + o);
  if (t = "crypto", r && (this[t] = ga[t]), (o = e[t]) !== void 0)
    if (o === !0 || o === !1 || o === 0 || o === 1)
      if (o)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[t] = !0;
        else
          throw Error(qc);
      else
        this[t] = !1;
    else
      throw Error(ht + t + ": " + o);
  return this;
}
function vb(e) {
  return new this(e).cos();
}
function mb(e) {
  return new this(e).cosh();
}
function xc(e) {
  var n, t, o;
  function r(a) {
    var i, l, s, u = this;
    if (!(u instanceof r))
      return new r(a);
    if (u.constructor = r, tu(a)) {
      u.s = a.s, we ? !a.d || a.e > r.maxE ? (u.e = NaN, u.d = null) : a.e < r.minE ? (u.e = 0, u.d = [0]) : (u.e = a.e, u.d = a.d.slice()) : (u.e = a.e, u.d = a.d ? a.d.slice() : a.d);
      return;
    }
    if (s = typeof a, s === "number") {
      if (a === 0) {
        u.s = 1 / a < 0 ? -1 : 1, u.e = 0, u.d = [0];
        return;
      }
      if (a < 0 ? (a = -a, u.s = -1) : u.s = 1, a === ~~a && a < 1e7) {
        for (i = 0, l = a; l >= 10; l /= 10)
          i++;
        we ? i > r.maxE ? (u.e = NaN, u.d = null) : i < r.minE ? (u.e = 0, u.d = [0]) : (u.e = i, u.d = [a]) : (u.e = i, u.d = [a]);
        return;
      } else if (a * 0 !== 0) {
        a || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return $a(u, a.toString());
    } else if (s !== "string")
      throw Error(ht + a);
    return (l = a.charCodeAt(0)) === 45 ? (a = a.slice(1), u.s = -1) : (l === 43 && (a = a.slice(1)), u.s = 1), Xc.test(a) ? $a(u, a) : _0(u, a);
  }
  if (r.prototype = K, r.ROUND_UP = 0, r.ROUND_DOWN = 1, r.ROUND_CEIL = 2, r.ROUND_FLOOR = 3, r.ROUND_HALF_UP = 4, r.ROUND_HALF_DOWN = 5, r.ROUND_HALF_EVEN = 6, r.ROUND_HALF_CEIL = 7, r.ROUND_HALF_FLOOR = 8, r.EUCLID = 9, r.config = r.set = fb, r.clone = xc, r.isDecimal = tu, r.abs = eb, r.acos = nb, r.acosh = tb, r.add = ob, r.asin = rb, r.asinh = ab, r.atan = ib, r.atanh = lb, r.atan2 = sb, r.cbrt = ub, r.ceil = db, r.clamp = cb, r.cos = vb, r.cosh = mb, r.div = hb, r.exp = pb, r.floor = gb, r.hypot = bb, r.ln = yb, r.log = $b, r.log10 = Cb, r.log2 = wb, r.max = Sb, r.min = kb, r.mod = Pb, r.mul = Ob, r.pow = Tb, r.random = Eb, r.round = Ib, r.sign = Bb, r.sin = Mb, r.sinh = Db, r.sqrt = Nb, r.sub = Vb, r.sum = Ab, r.tan = zb, r.tanh = Lb, r.trunc = Rb, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (o = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < o.length; )
      e.hasOwnProperty(t = o[n++]) || (e[t] = this[t]);
  return r.config(e), r;
}
function hb(e, n) {
  return new this(e).div(n);
}
function pb(e) {
  return new this(e).exp();
}
function gb(e) {
  return pe(e = new this(e), e.e + 1, 3);
}
function bb() {
  var e, n, t = new this(0);
  for (we = !1, e = 0; e < arguments.length; )
    if (n = new this(arguments[e++]), n.d)
      t.d && (t = t.plus(n.times(n)));
    else {
      if (n.s)
        return we = !0, new this(1 / 0);
      t = n;
    }
  return we = !0, t.sqrt();
}
function tu(e) {
  return e instanceof lt || e && e.toStringTag === Gc || !1;
}
function yb(e) {
  return new this(e).ln();
}
function $b(e, n) {
  return new this(e).log(n);
}
function wb(e) {
  return new this(e).log(2);
}
function Cb(e) {
  return new this(e).log(10);
}
function Sb() {
  return Jc(this, arguments, "lt");
}
function kb() {
  return Jc(this, arguments, "gt");
}
function Pb(e, n) {
  return new this(e).mod(n);
}
function Ob(e, n) {
  return new this(e).mul(n);
}
function Tb(e, n) {
  return new this(e).pow(n);
}
function Eb(e) {
  var n, t, o, r, a = 0, i = new this(1), l = [];
  if (e === void 0 ? e = this.precision : gn(e, 1, $t), o = Math.ceil(e / be), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(o)); a < o; )
        r = n[a], r >= 429e7 ? n[a] = crypto.getRandomValues(new Uint32Array(1))[0] : l[a++] = r % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(o *= 4); a < o; )
        r = n[a] + (n[a + 1] << 8) + (n[a + 2] << 16) + ((n[a + 3] & 127) << 24), r >= 214e7 ? crypto.randomBytes(4).copy(n, a) : (l.push(r % 1e7), a += 4);
      a = o / 4;
    } else
      throw Error(qc);
  else
    for (; a < o; )
      l[a++] = Math.random() * 1e7 | 0;
  for (o = l[--a], e %= be, o && e && (r = xe(10, be - e), l[a] = (o / r | 0) * r); l[a] === 0; a--)
    l.pop();
  if (a < 0)
    t = 0, l = [0];
  else {
    for (t = -1; l[0] === 0; t -= be)
      l.shift();
    for (o = 1, r = l[0]; r >= 10; r /= 10)
      o++;
    o < be && (t -= be - o);
  }
  return i.e = t, i.d = l, i;
}
function Ib(e) {
  return pe(e = new this(e), e.e + 1, this.rounding);
}
function Bb(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Mb(e) {
  return new this(e).sin();
}
function Db(e) {
  return new this(e).sinh();
}
function Nb(e) {
  return new this(e).sqrt();
}
function Vb(e, n) {
  return new this(e).sub(n);
}
function Ab() {
  var e = 0, n = arguments, t = new this(n[e]);
  for (we = !1; t.s && ++e < n.length; )
    t = t.plus(n[e]);
  return we = !0, pe(t, this.precision, this.rounding);
}
function zb(e) {
  return new this(e).tan();
}
function Lb(e) {
  return new this(e).tanh();
}
function Rb(e) {
  return pe(e = new this(e), e.e + 1, 1);
}
K[Symbol.for("nodejs.util.inspect.custom")] = K.toString;
K[Symbol.toStringTag] = "Decimal";
var lt = K.constructor = xc(ga);
fr = new lt(fr);
vr = new lt(vr);
const Ub = {
  modelValue: {
    type: [String, Number],
    default: 0
  },
  min: [String, Number],
  max: [String, Number],
  step: {
    type: [String, Number],
    default: 1
  },
  color: String,
  inputWidth: [String, Number],
  inputTextSize: [String, Number],
  buttonSize: [String, Number],
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  decimalLength: [String, Number],
  disabled: Boolean,
  readonly: Boolean,
  disableIncrement: Boolean,
  disableDecrement: Boolean,
  disableInput: Boolean,
  lazyChange: Boolean,
  incrementButton: {
    type: Boolean,
    default: !0
  },
  decrementButton: {
    type: Boolean,
    default: !0
  },
  press: {
    type: Boolean,
    default: !0
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onInputChange", "onLazyChange", "onIncrement", "onDecrement"]
  },
  rules: Array,
  onBeforeChange: A(),
  onChange: A(),
  onIncrement: A(),
  onDecrement: A(),
  "onUpdate:modelValue": A()
}, ou = 100, ru = 600, { name: Hb, n: Fb, classes: Yb } = ee("counter"), jb = ["inputmode", "readonly", "disabled"];
function Wb(e, n) {
  const t = ie("var-icon"), o = ie("var-button"), r = ie("var-form-details");
  return p(), S(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box")))
    },
    [
      B(
        "div",
        ze({
          class: e.classes(
            e.n("controller"),
            e.formatElevation(e.elevation, 2),
            [e.disabled || e.formDisabled, e.n("--disabled")],
            [e.errorMessage, e.n("--error")]
          ),
          style: { background: e.color }
        }, e.$attrs),
        [
          Z(o, {
            class: v(
              e.classes(
                e.n("decrement-button"),
                [!e.decrementButton, e.n("--hidden")],
                [e.disabled || e.formDisabled, e.n("--not-allowed")]
              )
            ),
            style: F({
              width: e.toSizeUnit(e.buttonSize),
              height: e.toSizeUnit(e.buttonSize)
            }),
            round: "",
            "var-counter-cover": "",
            ripple: e.ripple && e.decrementButton && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly && !e.disableDecrement && !e.isMin,
            onClick: e.decrement,
            onTouchstart: e.pressDecrement,
            onTouchend: e.releaseDecrement,
            onTouchcancel: e.releaseDecrement
          }, {
            default: me(() => [
              Z(t, { name: "minus" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]),
          Te(B("input", {
            class: v(e.classes(e.n("input"), [e.disabled || e.formDisabled, e.n("--not-allowed")])),
            style: F({
              width: e.toSizeUnit(e.inputWidth),
              fontSize: e.toSizeUnit(e.inputTextSize)
            }),
            inputmode: e.toNumber(e.decimalLength) === 0 ? "numeric" : "decimal",
            readonly: e.readonly || e.formReadonly,
            disabled: e.disabled || e.formDisabled || e.disableInput,
            "onUpdate:modelValue": n[0] || (n[0] = (a) => e.inputValue = a),
            onChange: n[1] || (n[1] = (...a) => e.handleChange && e.handleChange(...a))
          }, null, 46, jb), [
            [lm, e.inputValue]
          ]),
          Z(o, {
            class: v(
              e.classes(
                e.n("increment-button"),
                [!e.incrementButton, e.n("--hidden")],
                [e.disabled || e.formDisabled, e.n("--not-allowed")]
              )
            ),
            style: F({
              width: e.toSizeUnit(e.buttonSize),
              height: e.toSizeUnit(e.buttonSize)
            }),
            round: "",
            "var-counter-cover": "",
            ripple: e.ripple && e.incrementButton && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly && !e.disableIncrement && !e.isMax,
            onClick: e.increment,
            onTouchstart: e.pressIncrement,
            onTouchend: e.releaseIncrement,
            onTouchcancel: e.releaseIncrement
          }, {
            default: me(() => [
              Z(t, { name: "plus" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"])
        ],
        16
        /* FULL_PROPS */
      ),
      Z(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const ef = x({
  name: Hb,
  components: {
    VarButton: hn,
    VarIcon: He,
    VarFormDetails: pn
  },
  directives: { Ripple: Ze },
  inheritAttrs: !1,
  props: Ub,
  setup(e) {
    const n = C(""), { bindForm: t, form: o } = Mn(), {
      errorMessage: r,
      validateWithTrigger: a,
      validate: i,
      // expose
      resetValidation: l
    } = Bn(), { readonly: s, disabled: u } = o ?? {}, d = M(() => {
      const { max: X, modelValue: J } = e;
      return X != null && L(J) >= L(X);
    }), c = M(() => {
      const { min: X, modelValue: J } = e;
      return X != null && L(J) <= L(X);
    });
    let f, m, g, h;
    y(t, {
      reset: T,
      validate: w,
      resetValidation: l
    }), ce(
      () => e.modelValue,
      (X) => {
        G($(String(X))), y(e.onChange, L(X));
      }
    ), G($(String(e.modelValue)));
    function w() {
      return i(e.rules, e.modelValue);
    }
    function E(X) {
      Ye(() => {
        const { validateTrigger: J, rules: Y, modelValue: le } = e;
        a(J, X, Y, le);
      });
    }
    function T() {
      const { min: X } = e;
      y(e["onUpdate:modelValue"], X != null ? L(X) : 0), l();
    }
    function $(X) {
      const { decimalLength: J, max: Y, min: le } = e;
      let q = L(X);
      return Y != null && q > L(Y) && (q = L(Y)), le != null && q < L(le) && (q = L(le)), X = String(q), J != null && (X = q.toFixed(L(J))), X;
    }
    function P(X) {
      const { lazyChange: J, onBeforeChange: Y } = e, { value: le } = X.target, q = $(le);
      J ? y(Y, L(q), j) : G(q), E("onInputChange");
    }
    function I() {
      const {
        disabled: X,
        readonly: J,
        disableDecrement: Y,
        decrementButton: le,
        lazyChange: q,
        step: ne,
        modelValue: H,
        onDecrement: _,
        onBeforeChange: ue
      } = e;
      if (u != null && u.value || s != null && s.value || X || J || Y || !le || c.value)
        return;
      const V = new lt(L(H)).minus(new lt(L(ne))).toString(), W = $(V), he = L(W);
      y(_, he), q ? y(ue, he, j) : (G(W), E("onDecrement"));
    }
    function k() {
      const {
        disabled: X,
        readonly: J,
        disableIncrement: Y,
        incrementButton: le,
        lazyChange: q,
        step: ne,
        modelValue: H,
        onIncrement: _,
        onBeforeChange: ue
      } = e;
      if (u != null && u.value || s != null && s.value || X || J || Y || !le || d.value)
        return;
      const V = new lt(L(H)).plus(new lt(L(ne))).toString(), W = $(V), he = L(W);
      y(_, he), q ? y(ue, he, j) : (G(W), E("onIncrement"));
    }
    function D() {
      const { press: X, lazyChange: J } = e;
      !X || J || (h = window.setTimeout(() => {
        te();
      }, ru));
    }
    function O() {
      const { press: X, lazyChange: J } = e;
      !X || J || (g = window.setTimeout(() => {
        U();
      }, ru));
    }
    function N() {
      m && clearTimeout(m), h && clearTimeout(h);
    }
    function z() {
      f && clearTimeout(f), g && clearTimeout(g);
    }
    function U() {
      f = window.setTimeout(() => {
        k(), U();
      }, ou);
    }
    function te() {
      m = window.setTimeout(() => {
        I(), te();
      }, ou);
    }
    function G(X) {
      n.value = X;
      const J = L(X);
      y(e["onUpdate:modelValue"], J);
    }
    function j(X) {
      G($(String(X))), E("onLazyChange");
    }
    return {
      inputValue: n,
      errorMessage: r,
      formDisabled: u,
      formReadonly: s,
      isMax: d,
      isMin: c,
      n: Fb,
      classes: Yb,
      formatElevation: un,
      validate: w,
      reset: T,
      resetValidation: l,
      handleChange: P,
      decrement: I,
      increment: k,
      pressDecrement: D,
      pressIncrement: O,
      releaseDecrement: N,
      releaseIncrement: z,
      toSizeUnit: Se,
      toNumber: L
    };
  }
});
ef.render = Wb;
var ol = ef;
re(ol);
const rI = ol;
var wa = ol, nf = 60, tf = nf * 60, of = tf * 24, qb = of * 7, Wt = 1e3, Lr = nf * Wt, au = tf * Wt, Gb = of * Wt, Xb = qb * Wt, rl = "millisecond", At = "second", zt = "minute", Lt = "hour", et = "day", er = "week", Vn = "month", rf = "quarter", nt = "year", Rt = "date", Kb = "YYYY-MM-DDTHH:mm:ssZ", iu = "Invalid Date", Zb = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Jb = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const Qb = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var Ca = function(n, t, o) {
  var r = String(n);
  return !r || r.length >= t ? n : "" + Array(t + 1 - r.length).join(o) + n;
}, _b = function(n) {
  var t = -n.utcOffset(), o = Math.abs(t), r = Math.floor(o / 60), a = o % 60;
  return (t <= 0 ? "+" : "-") + Ca(r, 2, "0") + ":" + Ca(a, 2, "0");
}, xb = function e(n, t) {
  if (n.date() < t.date())
    return -e(t, n);
  var o = (t.year() - n.year()) * 12 + (t.month() - n.month()), r = n.clone().add(o, Vn), a = t - r < 0, i = n.clone().add(o + (a ? -1 : 1), Vn);
  return +(-(o + (t - r) / (a ? r - i : i - r)) || 0);
}, ey = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, ny = function(n) {
  var t = {
    M: Vn,
    y: nt,
    w: er,
    d: et,
    D: Rt,
    h: Lt,
    m: zt,
    s: At,
    ms: rl,
    Q: rf
  };
  return t[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, ty = function(n) {
  return n === void 0;
};
const oy = {
  s: Ca,
  z: _b,
  m: xb,
  a: ey,
  p: ny,
  u: ty
};
var io = "en", St = {};
St[io] = Qb;
var al = function(n) {
  return n instanceof Er;
}, hr = function e(n, t, o) {
  var r;
  if (!n)
    return io;
  if (typeof n == "string") {
    var a = n.toLowerCase();
    St[a] && (r = a), t && (St[a] = t, r = a);
    var i = n.split("-");
    if (!r && i.length > 1)
      return e(i[0]);
  } else {
    var l = n.name;
    St[l] = n, r = l;
  }
  return !o && r && (io = r), r || !o && io;
}, ve = function(n, t) {
  if (al(n))
    return n.clone();
  var o = typeof t == "object" ? t : {};
  return o.date = n, o.args = arguments, new Er(o);
}, ry = function(n, t) {
  return ve(n, {
    locale: t.$L,
    utc: t.$u,
    x: t.$x,
    $offset: t.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Le = oy;
Le.l = hr;
Le.i = al;
Le.w = ry;
var ay = function(n) {
  var t = n.date, o = n.utc;
  if (t === null)
    return /* @__PURE__ */ new Date(NaN);
  if (Le.u(t))
    return /* @__PURE__ */ new Date();
  if (t instanceof Date)
    return new Date(t);
  if (typeof t == "string" && !/Z$/i.test(t)) {
    var r = t.match(Zb);
    if (r) {
      var a = r[2] - 1 || 0, i = (r[7] || "0").substring(0, 3);
      return o ? new Date(Date.UTC(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i)) : new Date(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i);
    }
  }
  return new Date(t);
}, Er = /* @__PURE__ */ function() {
  function e(t) {
    this.$L = hr(t.locale, null, !0), this.parse(t);
  }
  var n = e.prototype;
  return n.parse = function(o) {
    this.$d = ay(o), this.$x = o.x || {}, this.init();
  }, n.init = function() {
    var o = this.$d;
    this.$y = o.getFullYear(), this.$M = o.getMonth(), this.$D = o.getDate(), this.$W = o.getDay(), this.$H = o.getHours(), this.$m = o.getMinutes(), this.$s = o.getSeconds(), this.$ms = o.getMilliseconds();
  }, n.$utils = function() {
    return Le;
  }, n.isValid = function() {
    return this.$d.toString() !== iu;
  }, n.isSame = function(o, r) {
    var a = ve(o);
    return this.startOf(r) <= a && a <= this.endOf(r);
  }, n.isAfter = function(o, r) {
    return ve(o) < this.startOf(r);
  }, n.isBefore = function(o, r) {
    return this.endOf(r) < ve(o);
  }, n.$g = function(o, r, a) {
    return Le.u(o) ? this[r] : this.set(a, o);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(o, r) {
    var a = this, i = Le.u(r) ? !0 : r, l = Le.p(o), s = function(w, E) {
      var T = Le.w(a.$u ? Date.UTC(a.$y, E, w) : new Date(a.$y, E, w), a);
      return i ? T : T.endOf(et);
    }, u = function(w, E) {
      var T = [0, 0, 0, 0], $ = [23, 59, 59, 999];
      return Le.w(a.toDate()[w].apply(
        // eslint-disable-line prefer-spread
        a.toDate("s"),
        (i ? T : $).slice(E)
      ), a);
    }, d = this.$W, c = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case nt:
        return i ? s(1, 0) : s(31, 11);
      case Vn:
        return i ? s(1, c) : s(0, c + 1);
      case er: {
        var g = this.$locale().weekStart || 0, h = (d < g ? d + 7 : d) - g;
        return s(i ? f - h : f + (6 - h), c);
      }
      case et:
      case Rt:
        return u(m + "Hours", 0);
      case Lt:
        return u(m + "Minutes", 1);
      case zt:
        return u(m + "Seconds", 2);
      case At:
        return u(m + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(o) {
    return this.startOf(o, !1);
  }, n.$set = function(o, r) {
    var a, i = Le.p(o), l = "set" + (this.$u ? "UTC" : ""), s = (a = {}, a[et] = l + "Date", a[Rt] = l + "Date", a[Vn] = l + "Month", a[nt] = l + "FullYear", a[Lt] = l + "Hours", a[zt] = l + "Minutes", a[At] = l + "Seconds", a[rl] = l + "Milliseconds", a)[i], u = i === et ? this.$D + (r - this.$W) : r;
    if (i === Vn || i === nt) {
      var d = this.clone().set(Rt, 1);
      d.$d[s](u), d.init(), this.$d = d.set(Rt, Math.min(this.$D, d.daysInMonth())).$d;
    } else
      s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(o, r) {
    return this.clone().$set(o, r);
  }, n.get = function(o) {
    return this[Le.p(o)]();
  }, n.add = function(o, r) {
    var a = this, i;
    o = Number(o);
    var l = Le.p(r), s = function(f) {
      var m = ve(a);
      return Le.w(m.date(m.date() + Math.round(f * o)), a);
    };
    if (l === Vn)
      return this.set(Vn, this.$M + o);
    if (l === nt)
      return this.set(nt, this.$y + o);
    if (l === et)
      return s(1);
    if (l === er)
      return s(7);
    var u = (i = {}, i[zt] = Lr, i[Lt] = au, i[At] = Wt, i)[l] || 1, d = this.$d.getTime() + o * u;
    return Le.w(d, this);
  }, n.subtract = function(o, r) {
    return this.add(o * -1, r);
  }, n.format = function(o) {
    var r = this, a = this.$locale();
    if (!this.isValid())
      return a.invalidDate || iu;
    var i = o || Kb, l = Le.z(this), s = this.$H, u = this.$m, d = this.$M, c = a.weekdays, f = a.months, m = a.meridiem, g = function(T, $, P, I) {
      return T && (T[$] || T(r, i)) || P[$].slice(0, I);
    }, h = function(T) {
      return Le.s(s % 12 || 12, T, "0");
    }, b = m || function(E, T, $) {
      var P = E < 12 ? "AM" : "PM";
      return $ ? P.toLowerCase() : P;
    }, w = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: Le.s(d + 1, 2, "0"),
      MMM: g(a.monthsShort, d, f, 3),
      MMMM: g(f, d),
      D: this.$D,
      DD: Le.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: g(a.weekdaysMin, this.$W, c, 2),
      ddd: g(a.weekdaysShort, this.$W, c, 3),
      dddd: c[this.$W],
      H: String(s),
      HH: Le.s(s, 2, "0"),
      h: h(1),
      hh: h(2),
      a: b(s, u, !0),
      A: b(s, u, !1),
      m: String(u),
      mm: Le.s(u, 2, "0"),
      s: String(this.$s),
      ss: Le.s(this.$s, 2, "0"),
      SSS: Le.s(this.$ms, 3, "0"),
      Z: l
      // 'ZZ' logic below
    };
    return i.replace(Jb, function(E, T) {
      return T || w[E] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(o, r, a) {
    var i, l = Le.p(r), s = ve(o), u = (s.utcOffset() - this.utcOffset()) * Lr, d = this - s, c = Le.m(this, s);
    return c = (i = {}, i[nt] = c / 12, i[Vn] = c, i[rf] = c / 3, i[er] = (d - u) / Xb, i[et] = (d - u) / Gb, i[Lt] = d / au, i[zt] = d / Lr, i[At] = d / Wt, i)[l] || d, a ? c : Le.a(c);
  }, n.daysInMonth = function() {
    return this.endOf(Vn).$D;
  }, n.$locale = function() {
    return St[this.$L];
  }, n.locale = function(o, r) {
    if (!o)
      return this.$L;
    var a = this.clone(), i = hr(o, r, !0);
    return i && (a.$L = i), a;
  }, n.clone = function() {
    return Le.w(this.$d, this);
  }, n.toDate = function() {
    return new Date(this.valueOf());
  }, n.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, n.toISOString = function() {
    return this.$d.toISOString();
  }, n.toString = function() {
    return this.$d.toUTCString();
  }, e;
}(), af = Er.prototype;
ve.prototype = af;
[["$ms", rl], ["$s", At], ["$m", zt], ["$H", Lt], ["$W", et], ["$M", Vn], ["$y", nt], ["$D", Rt]].forEach(function(e) {
  af[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
ve.extend = function(e, n) {
  return e.$i || (e(n, Er, ve), e.$i = !0), ve;
};
ve.locale = hr;
ve.isDayjs = al;
ve.unix = function(e) {
  return ve(e * 1e3);
};
ve.en = St[io];
ve.Ls = St;
ve.p = {};
const lf = function(e, n) {
  n.prototype.isSameOrBefore = function(t, o) {
    return this.isSame(t, o) || this.isBefore(t, o);
  };
}, sf = function(e, n) {
  n.prototype.isSameOrAfter = function(t, o) {
    return this.isSame(t, o) || this.isAfter(t, o);
  };
}, nr = [
  {
    index: "01"
  },
  {
    index: "02"
  },
  {
    index: "03"
  },
  {
    index: "04"
  },
  {
    index: "05"
  },
  {
    index: "06"
  },
  {
    index: "07"
  },
  {
    index: "08"
  },
  {
    index: "09"
  },
  {
    index: "10"
  },
  {
    index: "11"
  },
  {
    index: "12"
  }
], ro = [
  {
    index: "0"
  },
  {
    index: "1"
  },
  {
    index: "2"
  },
  {
    index: "3"
  },
  {
    index: "4"
  },
  {
    index: "5"
  },
  {
    index: "6"
  }
], iy = {
  modelValue: [String, Array],
  type: {
    type: String,
    default: "date"
  },
  hint: String,
  allowedDates: Function,
  color: String,
  /** @deprecated Use titleColor to instead. */
  headerColor: String,
  titleColor: String,
  elevation: {
    type: [Boolean, Number, String],
    default: !1
  },
  buttonElevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  firstDayOfWeek: {
    type: [String, Number],
    default: 0
  },
  min: String,
  max: String,
  showCurrent: {
    type: Boolean,
    default: !0
  },
  readonly: Boolean,
  multiple: Boolean,
  range: Boolean,
  touchable: {
    type: Boolean,
    default: !0
  },
  onPreview: A(),
  onChange: A(),
  "onUpdate:modelValue": A()
}, { n: ly } = ee("picker-header");
function sy(e, n) {
  const t = ie("var-icon"), o = ie("var-button");
  return p(), S(
    "div",
    {
      class: v(e.n())
    },
    [
      Z(o, {
        round: "",
        text: "",
        style: { filter: "opacity(0.54)" },
        disabled: e.disabled.left,
        onClick: n[0] || (n[0] = (r) => e.checkDate("prev"))
      }, {
        default: me(() => [
          Z(t, { name: "chevron-left" })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["disabled"]),
      B(
        "div",
        {
          class: v(e.n("value")),
          onClick: n[1] || (n[1] = (r) => e.$emit("check-panel"))
        },
        [
          Z(We, {
            name: `var-date-picker${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: me(() => [
              (p(), S(
                "div",
                { key: e.showDate },
                ae(e.showDate),
                1
                /* TEXT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["name"])
        ],
        2
        /* CLASS */
      ),
      Z(o, {
        round: "",
        text: "",
        style: { filter: "opacity(0.54)" },
        disabled: e.disabled.right,
        onClick: n[2] || (n[2] = (r) => e.checkDate("next"))
      }, {
        default: me(() => [
          Z(t, { name: "chevron-right" })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["disabled"])
    ],
    2
    /* CLASS */
  );
}
const uf = x({
  name: "PanelHeader",
  components: {
    VarButton: hn,
    VarIcon: He
  },
  props: {
    date: {
      type: Object,
      required: !0
    },
    type: {
      type: String,
      default: "date"
    },
    disabled: {
      type: Object,
      required: !0
    }
  },
  emits: ["check-panel", "check-date"],
  setup(e, { emit: n }) {
    const t = C(!1), o = C(0), r = M(() => {
      var i;
      const { date: l, type: s } = e, { previewMonth: u, previewYear: d } = l;
      if (s === "month")
        return L(d) + o.value;
      const c = (i = Qe.value.datePickerMonthDict) == null ? void 0 : i[u.index].name;
      return Qe.value.lang === "zh-CN" ? `${d} ${c}` : `${c} ${d}`;
    }), a = (i) => {
      i === "prev" && e.disabled.left || i === "next" && e.disabled.right || (n("check-date", i), t.value = i === "prev", o.value += i === "prev" ? -1 : 1);
    };
    return ce(
      () => e.date,
      () => {
        o.value = 0;
      }
    ), {
      n: ly,
      reverse: t,
      showDate: r,
      checkDate: a
    };
  }
});
uf.render = sy;
var df = uf, uy = Object.defineProperty, lu = Object.getOwnPropertySymbols, dy = Object.prototype.hasOwnProperty, cy = Object.prototype.propertyIsEnumerable, su = (e, n, t) => n in e ? uy(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, fy = (e, n) => {
  for (var t in n || (n = {}))
    dy.call(n, t) && su(e, t, n[t]);
  if (lu)
    for (var t of lu(n))
      cy.call(n, t) && su(e, t, n[t]);
  return e;
};
ve.extend(lf);
ve.extend(sf);
const { n: jo, classes: vy } = ee("month-picker"), { n: Wo } = ee("date-picker");
function my(e, n) {
  const t = ie("panel-header"), o = ie("var-button");
  return p(), S(
    "div",
    {
      class: v(e.n())
    },
    [
      B(
        "div",
        {
          class: v(e.n("content"))
        },
        [
          Z(t, {
            ref: "headerEl",
            type: "month",
            date: e.preview,
            disabled: e.panelBtnDisabled,
            onCheckPanel: e.clickYear,
            onCheckDate: e.checkDate
          }, null, 8, ["date", "disabled", "onCheckPanel", "onCheckDate"]),
          Z(We, {
            name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: me(() => [
              (p(), S("ul", { key: e.panelKey }, [
                (p(!0), S(
                  Ne,
                  null,
                  Ge(e.MONTH_LIST, (r) => (p(), S("li", {
                    key: r.index
                  }, [
                    Z(o, ze({
                      type: "primary",
                      "var-month-picker-cover": "",
                      ripple: !1,
                      elevation: e.componentProps.buttonElevation
                    }, fy({}, e.buttonProps(r.index)), {
                      onClick: (a) => e.chooseMonth(r, a)
                    }), {
                      default: me(() => [
                        Ie(
                          ae(e.getMonthAbbr(r.index)),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1040, ["elevation", "onClick"])
                  ]))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["name"])
        ],
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
const cf = x({
  name: "MonthPickerPanel",
  components: {
    VarButton: hn,
    PanelHeader: df
  },
  props: {
    choose: {
      type: Object,
      required: !0
    },
    preview: {
      type: Object,
      required: !0
    },
    current: {
      type: String,
      required: !0
    },
    clickYear: {
      type: Function,
      required: !0
    },
    componentProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["check-preview", "choose-month"],
  setup(e, { emit: n }) {
    const [t, o] = e.current.split("-"), r = C(!1), a = C(0), i = C(null), l = je({
      left: !1,
      right: !1
    }), s = M(() => e.choose.chooseYear === e.preview.previewYear), u = M(() => e.preview.previewYear === t), d = (w) => {
      var E, T;
      return (T = (E = Qe.value.datePickerMonthDict) == null ? void 0 : E[w].abbr) != null ? T : "";
    }, c = (w) => {
      const {
        preview: { previewYear: E },
        componentProps: { min: T, max: $ }
      } = e;
      let P = !0, I = !0;
      const k = `${E}-${w}`;
      return $ && (P = ve(k).isSameOrBefore(ve($), "month")), T && (I = ve(k).isSameOrAfter(ve(T), "month")), P && I;
    }, f = (w) => {
      const {
        choose: { chooseMonths: E, chooseDays: T, chooseRangeMonth: $ },
        componentProps: { type: P, range: I }
      } = e;
      if (I) {
        if (!$.length)
          return !1;
        const k = ve(w).isSameOrBefore(ve($[1]), "month"), D = ve(w).isSameOrAfter(ve($[0]), "month");
        return k && D;
      }
      return P === "month" ? E.includes(w) : T.some((k) => k.includes(w));
    }, m = (w) => {
      const {
        choose: { chooseMonth: E },
        preview: { previewYear: T },
        componentProps: { allowedDates: $, color: P, multiple: I, range: k }
      } = e, D = `${T}-${w}`, O = () => k || I ? f(D) : (E == null ? void 0 : E.index) === w && s.value, z = (() => c(w) ? $ ? !$(D) : !1 : !0)(), U = () => z ? !0 : k || I ? !f(D) : !s.value || (E == null ? void 0 : E.index) !== w, te = () => u.value && o === w && e.componentProps.showCurrent ? (k || I || s.value) && z ? !0 : k || I ? !f(D) : s.value ? (E == null ? void 0 : E.index) !== o : !0 : !1, G = () => z ? "" : te() ? P ?? "" : O() ? "" : `${Wo()}-color-cover`, j = G().startsWith(Wo());
      return {
        outline: te(),
        text: U(),
        color: U() ? "" : P,
        textColor: j ? "" : G(),
        [`${Wo()}-color-cover`]: j,
        class: vy(jo("button"), [z, jo("button--disabled")]),
        disabled: z
      };
    }, g = (w, E) => {
      E.currentTarget.classList.contains(jo("button--disabled")) || n("choose-month", w);
    }, h = (w) => {
      r.value = w === "prev", a.value += w === "prev" ? -1 : 1, n("check-preview", "year", w);
    }, b = (w) => {
      i.value.checkDate(w);
    };
    return ce(
      () => e.preview.previewYear,
      (w) => {
        const {
          componentProps: { min: E, max: T }
        } = e;
        T && (l.right = !ve(`${L(w) + 1}`).isSameOrBefore(ve(T), "year")), E && (l.left = !ve(`${L(w) - 1}`).isSameOrAfter(ve(E), "year"));
      },
      { immediate: !0 }
    ), {
      n: jo,
      nDate: Wo,
      pack: Qe,
      MONTH_LIST: nr,
      headerEl: i,
      reverse: r,
      panelKey: a,
      panelBtnDisabled: l,
      forwardRef: b,
      buttonProps: m,
      getMonthAbbr: d,
      chooseMonth: g,
      checkDate: h
    };
  }
});
cf.render = my;
var hy = cf;
const { n: uu, classes: py } = ee("year-picker"), gy = ["onClick"];
function by(e, n) {
  return p(), S(
    "ul",
    {
      ref: "panel",
      class: v(e.n())
    },
    [
      (p(!0), S(
        Ne,
        null,
        Ge(e.yearList, (t) => (p(), S("li", {
          key: t,
          class: v(e.classes(e.n("item"), [t === e.toNumber(e.preview), e.n("item--active")])),
          style: F({ color: t === e.toNumber(e.preview) ? e.componentProps.color : "" }),
          onClick: (o) => e.chooseYear(t)
        }, ae(t), 15, gy))),
        128
        /* KEYED_FRAGMENT */
      ))
    ],
    2
    /* CLASS */
  );
}
const ff = x({
  name: "YearPickerPanel",
  props: {
    preview: {
      type: String
    },
    componentProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["choose-year"],
  setup(e, { emit: n }) {
    const t = C(), o = M(() => {
      const a = [], {
        preview: i,
        componentProps: { max: l, min: s }
      } = e;
      if (!i)
        return a;
      let u = [L(i) + 100, L(i) - 100];
      if (l) {
        const d = ve(l).format("YYYY-MM-D"), c = L(d.split("-")[0]);
        if (c < u[0] && c > u[1] && (u = [c, u[1]]), c <= u[1])
          return [c];
      }
      if (s) {
        const d = ve(s).format("YYYY-MM-D"), c = L(d.split("-")[0]);
        if (c < u[0] && c > u[1] && (u = [u[0], c]), c >= u[0])
          return [c];
      }
      for (let d = u[0]; d >= u[1]; d--)
        a.push(d);
      return a;
    }), r = (a) => {
      n("choose-year", a);
    };
    return rn(() => {
      const a = t.value.querySelector(`.${uu("item--active")}`);
      a == null || a.scrollIntoView({
        block: "center"
      });
    }), {
      n: uu,
      classes: py,
      panel: t,
      yearList: o,
      chooseYear: r,
      toNumber: L
    };
  }
});
ff.render = by;
var yy = ff, $y = Object.defineProperty, du = Object.getOwnPropertySymbols, wy = Object.prototype.hasOwnProperty, Cy = Object.prototype.propertyIsEnumerable, cu = (e, n, t) => n in e ? $y(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Sy = (e, n) => {
  for (var t in n || (n = {}))
    wy.call(n, t) && cu(e, t, n[t]);
  if (du)
    for (var t of du(n))
      Cy.call(n, t) && cu(e, t, n[t]);
  return e;
};
ve.extend(lf);
ve.extend(sf);
const { n: Dt, classes: ky } = ee("day-picker"), { n: qo } = ee("date-picker");
function Py(e, n) {
  const t = ie("panel-header"), o = ie("var-button");
  return p(), S(
    "div",
    {
      class: v(e.n())
    },
    [
      B(
        "div",
        {
          class: v(e.n("content"))
        },
        [
          Z(t, {
            ref: "headerEl",
            type: "day",
            date: e.preview,
            disabled: e.panelBtnDisabled,
            onCheckPanel: e.clickMonth,
            onCheckDate: e.checkDate
          }, null, 8, ["date", "disabled", "onCheckPanel", "onCheckDate"]),
          Z(We, {
            name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: me(() => [
              (p(), S("div", { key: e.panelKey }, [
                B(
                  "ul",
                  {
                    class: v(e.n("head"))
                  },
                  [
                    (p(!0), S(
                      Ne,
                      null,
                      Ge(e.sortWeekList, (r) => (p(), S(
                        "li",
                        {
                          key: r.index
                        },
                        ae(e.getDayAbbr(r.index)),
                        1
                        /* TEXT */
                      ))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ],
                  2
                  /* CLASS */
                ),
                B(
                  "ul",
                  {
                    class: v(e.n("body"))
                  },
                  [
                    (p(!0), S(
                      Ne,
                      null,
                      Ge(e.days, (r, a) => (p(), S("li", { key: a }, [
                        Z(o, ze({
                          type: "primary",
                          "var-day-picker-cover": "",
                          round: "",
                          ripple: !1,
                          elevation: e.componentProps.buttonElevation
                        }, Sy({}, e.buttonProps(r)), {
                          onClick: (i) => e.chooseDay(r, i)
                        }), {
                          default: me(() => [
                            Ie(
                              ae(e.filterDay(r)),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 2
                          /* DYNAMIC */
                        }, 1040, ["elevation", "onClick"])
                      ]))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ],
                  2
                  /* CLASS */
                )
              ]))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["name"])
        ],
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
const vf = x({
  name: "DayPickerPanel",
  components: {
    VarButton: hn,
    PanelHeader: df
  },
  props: {
    choose: {
      type: Object,
      required: !0
    },
    preview: {
      type: Object,
      required: !0
    },
    current: {
      type: String,
      required: !0
    },
    clickMonth: {
      type: Function,
      required: !0
    },
    componentProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["check-preview", "choose-day"],
  setup(e, { emit: n }) {
    const [t, o, r] = e.current.split("-"), a = C([]), i = C(!1), l = C(0), s = C(null), u = je({
      left: !1,
      right: !1
    }), d = M(
      () => e.preview.previewYear === t && e.preview.previewMonth.index === o
    ), c = M(
      () => {
        var k;
        return e.choose.chooseYear === e.preview.previewYear && ((k = e.choose.chooseMonth) == null ? void 0 : k.index) === e.preview.previewMonth.index;
      }
    ), f = M(() => {
      const k = ro.findIndex((D) => D.index === e.componentProps.firstDayOfWeek);
      return k === -1 || k === 0 ? ro : ro.slice(k).concat(ro.slice(0, k));
    }), m = (k) => {
      var D, O;
      return (O = (D = Qe.value.datePickerWeekDict) == null ? void 0 : D[k].abbr) != null ? O : "";
    }, g = (k) => k > 0 ? k : "", h = () => {
      const {
        preview: { previewMonth: k, previewYear: D }
      } = e, O = ve(`${D}-${k.index}`).daysInMonth(), N = ve(`${D}-${k.index}-01`).day(), z = f.value.findIndex((U) => U.index === `${N}`);
      a.value = [...Array(z).fill(-1), ...Array.from(Array(O + 1).keys())].filter((U) => U);
    }, b = () => {
      const {
        preview: { previewYear: k, previewMonth: D },
        componentProps: { max: O, min: N }
      } = e;
      if (O) {
        const z = `${k}-${L(D.index) + 1}`;
        u.right = !ve(z).isSameOrBefore(ve(O), "month");
      }
      if (N) {
        const z = `${k}-${L(D.index) - 1}`;
        u.left = !ve(z).isSameOrAfter(ve(N), "month");
      }
    }, w = (k) => {
      const {
        preview: { previewYear: D, previewMonth: O },
        componentProps: { min: N, max: z }
      } = e;
      let U = !0, te = !0;
      const G = `${D}-${O.index}-${k}`;
      return z && (U = ve(G).isSameOrBefore(ve(z), "day")), N && (te = ve(G).isSameOrAfter(ve(N), "day")), U && te;
    }, E = (k) => {
      const {
        choose: { chooseDays: D, chooseRangeDay: O },
        componentProps: { range: N }
      } = e;
      if (N) {
        if (!O.length)
          return !1;
        const z = ve(k).isSameOrBefore(ve(O[1]), "day"), U = ve(k).isSameOrAfter(ve(O[0]), "day");
        return z && U;
      }
      return D.includes(k);
    }, T = (k) => {
      if (k < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Dt("button"),
          disabled: !0
        };
      const {
        choose: { chooseDay: D },
        preview: { previewYear: O, previewMonth: N },
        componentProps: { allowedDates: z, color: U, multiple: te, range: G }
      } = e, j = `${O}-${N.index}-${k}`, X = () => G || te ? E(j) : L(D) === k && c.value, Y = (() => w(k) ? z ? !z(j) : !1 : !0)(), le = () => Y ? !0 : G || te ? !E(j) : !c.value || L(D) !== k, q = () => d.value && L(r) === k && e.componentProps.showCurrent ? (G || te || c.value) && Y ? !0 : G || te ? !E(j) : c.value ? D !== r : !0 : !1, ne = () => Y ? "" : q() ? U ?? "" : X() ? "" : `${qo()}-color-cover`, H = ne().startsWith(qo());
      return {
        text: le(),
        outline: q(),
        textColor: H ? "" : ne(),
        [`${qo()}-color-cover`]: H,
        class: ky(Dt("button"), Dt("button--usable"), [Y, Dt("button--disabled")]),
        disabled: Y
      };
    }, $ = (k) => {
      i.value = k === "prev", l.value += k === "prev" ? -1 : 1, n("check-preview", "month", k);
    }, P = (k, D) => {
      D.currentTarget.classList.contains(Dt("button--disabled")) || n("choose-day", k);
    }, I = (k) => {
      s.value.checkDate(k);
    };
    return rn(() => {
      h(), b();
    }), ce(
      () => e.preview,
      () => {
        h(), b();
      }
    ), {
      n: Dt,
      nDate: qo,
      days: a,
      reverse: i,
      headerEl: s,
      panelKey: l,
      sortWeekList: f,
      panelBtnDisabled: u,
      forwardRef: I,
      filterDay: g,
      getDayAbbr: m,
      checkDate: $,
      chooseDay: P,
      buttonProps: T
    };
  }
});
vf.render = Py;
var Oy = vf, Ty = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: Ey, n: Iy, classes: By } = ee("date-picker");
function My(e, n) {
  var t;
  const o = ie("year-picker-panel"), r = ie("month-picker-panel"), a = ie("day-picker-panel");
  return p(), S(
    "div",
    {
      class: v(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
    },
    [
      B(
        "div",
        {
          class: v(e.n("title")),
          style: F({ background: e.titleColor || e.headerColor || e.color })
        },
        [
          B(
            "div",
            {
              class: v(e.n("title-select"))
            },
            [
              B(
                "div",
                {
                  class: v(e.n("title-hint"))
                },
                ae((t = e.hint) != null ? t : e.pack.datePickerHint),
                3
                /* TEXT, CLASS */
              ),
              B(
                "div",
                {
                  class: v(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
                  onClick: n[0] || (n[0] = (i) => e.clickEl("year"))
                },
                [
                  R(e.$slots, "year", { year: e.chooseYear }, () => [
                    Ie(
                      ae(e.chooseYear),
                      1
                      /* TEXT */
                    )
                  ])
                ],
                2
                /* CLASS */
              )
            ],
            2
            /* CLASS */
          ),
          B(
            "div",
            {
              class: v(e.classes(e.n("title-date"), [!e.isYearPanel, e.n("title-date--active")], [e.range, e.n("title-date--range")])),
              onClick: n[1] || (n[1] = (i) => e.clickEl("date"))
            },
            [
              Z(We, {
                name: e.multiple ? "" : `${e.n()}${e.reverse ? "-reverse" : ""}-translatey`
              }, {
                default: me(() => {
                  var i, l, s;
                  return [
                    e.type === "month" ? (p(), S("div", {
                      key: `${e.chooseYear}${(i = e.chooseMonth) == null ? void 0 : i.index}`
                    }, [
                      e.range ? R(e.$slots, "range", {
                        key: 0,
                        choose: e.getChoose.chooseRangeMonth
                      }, () => [
                        Ie(
                          ae(e.getMonthTitle),
                          1
                          /* TEXT */
                        )
                      ]) : e.multiple ? R(e.$slots, "multiple", {
                        key: 1,
                        choose: e.getChoose.chooseMonths
                      }, () => [
                        Ie(
                          ae(e.getMonthTitle),
                          1
                          /* TEXT */
                        )
                      ]) : R(e.$slots, "month", {
                        key: 2,
                        month: (l = e.chooseMonth) == null ? void 0 : l.index,
                        year: e.chooseYear
                      }, () => [
                        Ie(
                          ae(e.getMonthTitle),
                          1
                          /* TEXT */
                        )
                      ])
                    ])) : (p(), S("div", {
                      key: `${e.chooseYear}${(s = e.chooseMonth) == null ? void 0 : s.index}${e.chooseDay}`
                    }, [
                      e.range ? R(e.$slots, "range", {
                        key: 0,
                        choose: e.formatRange
                      }, () => [
                        Ie(
                          ae(e.getDateTitle),
                          1
                          /* TEXT */
                        )
                      ]) : e.multiple ? R(e.$slots, "multiple", {
                        key: 1,
                        choose: e.getChoose.chooseDays
                      }, () => [
                        Ie(
                          ae(e.getDateTitle),
                          1
                          /* TEXT */
                        )
                      ]) : R(e.$slots, "date", st(ze({ key: 2 }, e.slotProps)), () => [
                        Ie(
                          ae(e.getDateTitle),
                          1
                          /* TEXT */
                        )
                      ])
                    ]))
                  ];
                }),
                _: 3
                /* FORWARDED */
              }, 8, ["name"])
            ],
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      ),
      B(
        "div",
        {
          class: v(e.n("body")),
          onTouchstart: n[2] || (n[2] = (...i) => e.handleTouchstart && e.handleTouchstart(...i)),
          onTouchmove: n[3] || (n[3] = (...i) => e.handleTouchmove && e.handleTouchmove(...i)),
          onTouchend: n[4] || (n[4] = (...i) => e.handleTouchend && e.handleTouchend(...i))
        },
        [
          Z(We, {
            name: `${e.n()}-panel-fade`
          }, {
            default: me(() => [
              e.getPanelType === "year" ? (p(), $e(o, {
                key: 0,
                "component-props": e.componentProps,
                preview: e.previewYear,
                onChooseYear: e.getChooseYear
              }, null, 8, ["component-props", "preview", "onChooseYear"])) : e.getPanelType === "month" ? (p(), $e(r, {
                key: 1,
                ref: "monthPanelEl",
                current: e.currentDate,
                choose: e.getChoose,
                preview: e.getPreview,
                "click-year": () => e.clickEl("year"),
                "component-props": e.componentProps,
                onChooseMonth: e.getChooseMonth,
                onCheckPreview: e.checkPreview
              }, null, 8, ["current", "choose", "preview", "click-year", "component-props", "onChooseMonth", "onCheckPreview"])) : e.getPanelType === "date" ? (p(), $e(a, {
                key: 2,
                ref: "dayPanelEl",
                current: e.currentDate,
                choose: e.getChoose,
                preview: e.getPreview,
                "component-props": e.componentProps,
                "click-month": () => e.clickEl("month"),
                onChooseDay: e.getChooseDay,
                onCheckPreview: e.checkPreview
              }, null, 8, ["current", "choose", "preview", "component-props", "click-month", "onChooseDay", "onCheckPreview"])) : Q("v-if", !0)
            ]),
            _: 1
            /* STABLE */
          }, 8, ["name"])
        ],
        34
        /* CLASS, HYDRATE_EVENTS */
      )
    ],
    2
    /* CLASS */
  );
}
const mf = x({
  name: Ey,
  components: {
    MonthPickerPanel: hy,
    YearPickerPanel: yy,
    DayPickerPanel: Oy
  },
  props: iy,
  setup(e) {
    const n = ve().format("YYYY-MM-D"), [t, o] = n.split("-"), r = nr.find((fe) => fe.index === o), a = C(!1), i = C(!1), l = C(!0), s = C(), u = C(), d = C(), c = C(r), f = C(t), m = C(!1), g = C([]), h = C([]), b = C([]), w = C([]), E = C(null), T = C(null), $ = je({
      allowedDates: e.allowedDates,
      type: e.type,
      color: e.color,
      firstDayOfWeek: e.firstDayOfWeek,
      min: e.min,
      max: e.max,
      showCurrent: e.showCurrent,
      multiple: e.multiple,
      range: e.range,
      buttonElevation: e.buttonElevation
    }), P = M(() => ({
      chooseMonth: s.value,
      chooseYear: u.value,
      chooseDay: d.value,
      chooseMonths: g.value,
      chooseDays: h.value,
      chooseRangeMonth: b.value,
      chooseRangeDay: w.value
    })), I = M(() => ({
      previewMonth: c.value,
      previewYear: f.value
    })), k = M(() => {
      var fe, Ce;
      const { multiple: ye, range: Me } = e;
      if (Me)
        return b.value.length ? `${b.value[0]} ~ ${b.value[1]}` : "";
      let Be = "";
      return s.value && (Be = (Ce = (fe = Qe.value.datePickerMonthDict) == null ? void 0 : fe[s.value.index].name) != null ? Ce : ""), ye ? `${g.value.length}${Qe.value.datePickerSelected}` : Be;
    }), D = M(() => {
      var fe, Ce, ye, Me;
      const { multiple: Be, range: Je } = e;
      if (Je) {
        const no = w.value.map((xv) => ve(xv).format("YYYY-MM-DD"));
        return no.length ? `${no[0]} ~ ${no[1]}` : "";
      }
      if (Be)
        return `${h.value.length}${Qe.value.datePickerSelected}`;
      if (!u.value || !s.value || !d.value)
        return "";
      const bn = ve(`${u.value}-${s.value.index}-${d.value}`).day(), Pn = ro.find((no) => no.index === `${bn}`), Ct = (Ce = (fe = Qe.value.datePickerWeekDict) == null ? void 0 : fe[Pn.index].name) != null ? Ce : "", Qv = (Me = (ye = Qe.value.datePickerMonthDict) == null ? void 0 : ye[s.value.index].name) != null ? Me : "", _v = kt(d.value, 2, "0");
      return Qe.value.lang === "zh-CN" ? `${s.value.index}-${_v} ${Ct.slice(0, 3)}` : `${Ct.slice(0, 3)}, ${Qv.slice(0, 3)} ${d.value}`;
    }), O = M(() => a.value ? "year" : e.type === "month" || i.value ? "month" : e.type === "date" ? "date" : ""), N = M(() => !e.touchable || ["", "year"].includes(O.value)), z = M(() => {
      var fe, Ce, ye, Me;
      const Be = ve(`${u.value}-${(fe = s.value) == null ? void 0 : fe.index}-${d.value}`).day(), Je = d.value ? kt(d.value, 2, "0") : "";
      return {
        week: `${Be}`,
        year: (Ce = u.value) != null ? Ce : "",
        month: (Me = (ye = s.value) == null ? void 0 : ye.index) != null ? Me : "",
        date: Je
      };
    }), U = M(
      () => P.value.chooseRangeDay.map((fe) => ve(fe).format("YYYY-MM-DD"))
    ), te = M(() => u.value === f.value), G = M(() => {
      var fe;
      return ((fe = s.value) == null ? void 0 : fe.index) === c.value.index;
    });
    let j = 0, X = 0, J = "", Y;
    ce(
      () => e.modelValue,
      (fe) => {
        if (!(!ke() || Ue(fe) || !fe))
          if (e.range) {
            if (!Ae(fe))
              return;
            l.value = fe.length !== 1, se(fe, e.type);
          } else if (e.multiple) {
            if (!Ae(fe))
              return;
            ge(fe, e.type);
          } else
            De(fe);
      },
      { immediate: !0 }
    ), ce(O, qe);
    function le(fe) {
      fe === "year" ? a.value = !0 : fe === "month" ? i.value = !0 : (a.value = !1, i.value = !1);
    }
    function q(fe) {
      if (N.value)
        return;
      const { clientX: Ce, clientY: ye } = fe.touches[0];
      j = Ce, X = ye;
    }
    function ne(fe, Ce) {
      return fe >= Ce && fe > 20 ? "x" : "y";
    }
    function H(fe) {
      if (N.value)
        return;
      const { clientX: Ce, clientY: ye } = fe.touches[0], Me = Ce - j, Be = ye - X;
      Y = ne(Math.abs(Me), Math.abs(Be)), J = Me > 0 ? "prev" : "next";
    }
    function _() {
      return Ty(this, null, function* () {
        if (N.value || Y !== "x")
          return;
        const fe = O.value === "month" ? E : T;
        yield fn(), fe.value.forwardRef(J), qe();
      });
    }
    function ue(fe, Ce) {
      const ye = Ce === "month" ? b : w;
      if (ye.value = l.value ? [fe, fe] : [ye.value[0], fe], l.value = !l.value, l.value) {
        const Be = ve(ye.value[0]).isAfter(ye.value[1]) ? [ye.value[1], ye.value[0]] : [...ye.value];
        y(e["onUpdate:modelValue"], Be), y(e.onChange, Be);
      }
    }
    function V(fe, Ce) {
      const ye = Ce === "month" ? g : h, Me = Ce === "month" ? "YYYY-MM" : "YYYY-MM-DD", Be = ye.value.map((bn) => ve(bn).format(Me)), Je = Be.findIndex((bn) => bn === fe);
      Je === -1 ? Be.push(fe) : Be.splice(Je, 1), y(e["onUpdate:modelValue"], Be), y(e.onChange, Be);
    }
    function W(fe, Ce) {
      return !u.value || !s.value ? !1 : te.value ? fe === "month" ? Ce.index < s.value.index : G.value ? Ce < L(d.value) : s.value.index > c.value.index : u.value > f.value;
    }
    function he(fe) {
      const { readonly: Ce, range: ye, multiple: Me, onChange: Be, "onUpdate:modelValue": Je } = e;
      if (fe < 0 || Ce)
        return;
      m.value = W("day", fe);
      const bn = `${f.value}-${c.value.index}-${fe}`, Pn = ve(bn).format("YYYY-MM-DD");
      ye ? ue(Pn, "day") : Me ? V(Pn, "day") : (y(Je, Pn), y(Be, Pn));
    }
    function Ee(fe) {
      const { type: Ce, readonly: ye, range: Me, multiple: Be, onChange: Je, onPreview: bn, "onUpdate:modelValue": Pn } = e;
      if (m.value = W("month", fe), Ce === "month" && !ye) {
        const Ct = `${f.value}-${fe.index}`;
        Me ? ue(Ct, "month") : Be ? V(Ct, "month") : (y(Pn, Ct), y(Je, Ct));
      } else
        c.value = fe, y(bn, L(f.value), L(c.value.index));
      i.value = !1;
    }
    function oe(fe) {
      f.value = `${fe}`, a.value = !1, i.value = !0, y(e.onPreview, L(f.value), L(c.value.index));
    }
    function de(fe, Ce) {
      const ye = Ce === "prev" ? -1 : 1;
      if (fe === "year")
        f.value = `${L(f.value) + ye}`;
      else {
        let Me = L(c.value.index) + ye;
        Me < 1 && (f.value = `${L(f.value) - 1}`, Me = 12), Me > 12 && (f.value = `${L(f.value) + 1}`, Me = 1), c.value = nr.find((Be) => L(Be.index) === Me);
      }
      y(e.onPreview, L(f.value), L(c.value.index));
    }
    function ke() {
      return (e.multiple || e.range) && !Ae(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Ae(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0;
    }
    function Ue(fe) {
      return Ae(fe) ? !1 : fe === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1;
    }
    function se(fe, Ce) {
      const ye = Ce === "month" ? b : w, Me = Ce === "month" ? "YYYY-MM" : "YYYY-MM-D", Be = fe.map((Pn) => ve(Pn).format(Me)).slice(0, 2);
      if (ye.value.some((Pn) => Ue(Pn)))
        return;
      ye.value = Be;
      const bn = ve(ye.value[0]).isAfter(ye.value[1]);
      ye.value.length === 2 && bn && (ye.value = [ye.value[1], ye.value[0]]);
    }
    function ge(fe, Ce) {
      const ye = Ce === "month" ? g : h, Me = Ce === "month" ? "YYYY-MM" : "YYYY-MM-D", Be = Array.from(new Set(fe.map((Je) => ve(Je).format(Me))));
      ye.value = Be.filter((Je) => Je !== "Invalid Date");
    }
    function De(fe) {
      const Ce = ve(fe).format("YYYY-MM-D");
      if (Ue(Ce))
        return;
      const [ye, Me, Be] = Ce.split("-"), Je = nr.find((bn) => bn.index === Me);
      s.value = Je, u.value = ye, d.value = Be, c.value = Je, f.value = ye;
    }
    function qe() {
      X = 0, j = 0, J = "", Y = void 0;
    }
    return {
      monthPanelEl: E,
      dayPanelEl: T,
      reverse: m,
      currentDate: n,
      chooseMonth: s,
      chooseYear: u,
      chooseDay: d,
      previewYear: f,
      isYearPanel: a,
      isMonthPanel: i,
      getMonthTitle: k,
      getDateTitle: D,
      getPanelType: O,
      getChoose: P,
      getPreview: I,
      componentProps: $,
      slotProps: z,
      formatRange: U,
      pack: Qe,
      n: Iy,
      classes: By,
      clickEl: le,
      handleTouchstart: q,
      handleTouchmove: H,
      handleTouchend: _,
      getChooseDay: he,
      getChooseMonth: Ee,
      getChooseYear: oe,
      checkPreview: de,
      formatElevation: un
    };
  }
});
mf.render = My;
var il = mf;
re(il);
const aI = il;
var Sa = il, Dy = Object.defineProperty, fu = Object.getOwnPropertySymbols, Ny = Object.prototype.hasOwnProperty, Vy = Object.prototype.propertyIsEnumerable, vu = (e, n, t) => n in e ? Dy(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Ay = (e, n) => {
  for (var t in n || (n = {}))
    Ny.call(n, t) && vu(e, t, n[t]);
  if (fu)
    for (var t of fu(n))
      Vy.call(n, t) && vu(e, t, n[t]);
  return e;
};
const zy = Ay({
  show: Boolean,
  width: [Number, String],
  title: String,
  message: String,
  messageAlign: {
    type: String,
    default: "left"
  },
  confirmButton: {
    type: Boolean,
    default: !0
  },
  cancelButton: {
    type: Boolean,
    default: !0
  },
  confirmButtonText: String,
  cancelButtonText: String,
  confirmButtonTextColor: String,
  cancelButtonTextColor: String,
  confirmButtonColor: String,
  cancelButtonColor: String,
  dialogClass: String,
  dialogStyle: Object,
  onBeforeClose: A(),
  onConfirm: A(),
  onCancel: A(),
  "onUpdate:show": A()
}, Oe(Bo, [
  "overlay",
  "overlayClass",
  "overlayStyle",
  "lockScroll",
  "closeOnClickOverlay",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onClickOverlay",
  // internal for function call closes the dialog
  "onRouteChange"
]));
var Ly = Object.defineProperty, mu = Object.getOwnPropertySymbols, Ry = Object.prototype.hasOwnProperty, Uy = Object.prototype.propertyIsEnumerable, hu = (e, n, t) => n in e ? Ly(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Hy = (e, n) => {
  for (var t in n || (n = {}))
    Ry.call(n, t) && hu(e, t, n[t]);
  if (mu)
    for (var t of mu(n))
      Uy.call(n, t) && hu(e, t, n[t]);
  return e;
};
const { name: Fy, n: Yy, classes: jy } = ee("dialog");
function Wy(e, n) {
  const t = ie("var-button"), o = ie("var-popup");
  return p(), $e(o, {
    class: v(e.n("popup")),
    "var-dialog-cover": "",
    show: e.popupShow,
    overlay: e.overlay,
    "overlay-class": e.overlayClass,
    "overlay-style": e.overlayStyle,
    "lock-scroll": e.lockScroll,
    "close-on-click-overlay": e.popupCloseOnClickOverlay,
    teleport: e.teleport,
    onOpen: e.onOpen,
    onClose: e.onClose,
    onClosed: e.onClosed,
    onOpened: e.onOpened,
    onRouteChange: e.onRouteChange,
    onClickOverlay: e.handleClickOverlay
  }, {
    default: me(() => [
      B(
        "div",
        ze({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: Hy({ width: e.toSizeUnit(e.width) }, e.dialogStyle)
        }, e.$attrs),
        [
          B(
            "div",
            {
              class: v(e.n("title"))
            },
            [
              R(e.$slots, "title", {}, () => {
                var r;
                return [
                  Ie(
                    ae((r = e.title) != null ? r : e.pack.dialogTitle),
                    1
                    /* TEXT */
                  )
                ];
              })
            ],
            2
            /* CLASS */
          ),
          B(
            "div",
            {
              class: v(e.n("message")),
              style: F({ textAlign: e.messageAlign })
            },
            [
              R(e.$slots, "default", {}, () => [
                Ie(
                  ae(e.message),
                  1
                  /* TEXT */
                )
              ])
            ],
            6
            /* CLASS, STYLE */
          ),
          B(
            "div",
            {
              class: v(e.n("actions"))
            },
            [
              e.cancelButton ? (p(), $e(t, {
                key: 0,
                class: v(e.classes(e.n("button"), e.n("cancel-button"))),
                "var-dialog-cover": "",
                text: "",
                "text-color": e.cancelButtonTextColor,
                color: e.cancelButtonColor,
                onClick: e.cancel
              }, {
                default: me(() => {
                  var r;
                  return [
                    Ie(
                      ae((r = e.cancelButtonText) != null ? r : e.pack.dialogCancelButtonText),
                      1
                      /* TEXT */
                    )
                  ];
                }),
                _: 1
                /* STABLE */
              }, 8, ["class", "text-color", "color", "onClick"])) : Q("v-if", !0),
              e.confirmButton ? (p(), $e(t, {
                key: 1,
                class: v(e.classes(e.n("button"), e.n("confirm-button"))),
                "var-dialog-cover": "",
                text: "",
                "text-color": e.confirmButtonTextColor,
                color: e.confirmButtonColor,
                onClick: e.confirm
              }, {
                default: me(() => {
                  var r;
                  return [
                    Ie(
                      ae((r = e.confirmButtonText) != null ? r : e.pack.dialogConfirmButtonText),
                      1
                      /* TEXT */
                    )
                  ];
                }),
                _: 1
                /* STABLE */
              }, 8, ["class", "text-color", "color", "onClick"])) : Q("v-if", !0)
            ],
            2
            /* CLASS */
          )
        ],
        16
        /* FULL_PROPS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "show", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange", "onClickOverlay"]);
}
const hf = x({
  name: Fy,
  components: {
    VarPopup: vt,
    VarButton: hn
  },
  inheritAttrs: !1,
  props: zy,
  setup(e) {
    const n = C(!1), t = C(!1);
    ce(
      () => e.show,
      (l) => {
        n.value = l;
      },
      { immediate: !0 }
    ), ce(
      () => e.closeOnClickOverlay,
      (l) => {
        if (e.onBeforeClose != null) {
          t.value = !1;
          return;
        }
        t.value = l;
      },
      { immediate: !0 }
    );
    function o() {
      return y(e["onUpdate:show"], !1);
    }
    function r() {
      const { closeOnClickOverlay: l, onClickOverlay: s, onBeforeClose: u } = e;
      if (y(s), !!l) {
        if (u != null) {
          y(u, "close", o);
          return;
        }
        y(e["onUpdate:show"], !1);
      }
    }
    function a() {
      const { onBeforeClose: l, onConfirm: s } = e;
      if (y(s), l != null) {
        y(l, "confirm", o);
        return;
      }
      y(e["onUpdate:show"], !1);
    }
    function i() {
      const { onBeforeClose: l, onCancel: s } = e;
      if (y(s), l != null) {
        y(l, "cancel", o);
        return;
      }
      y(e["onUpdate:show"], !1);
    }
    return {
      pack: Qe,
      popupShow: n,
      popupCloseOnClickOverlay: t,
      n: Yy,
      classes: jy,
      handleClickOverlay: r,
      confirm: a,
      cancel: i,
      toSizeUnit: Se
    };
  }
});
hf.render = Wy;
var Ao = hf, qy = Object.defineProperty, Gy = Object.defineProperties, Xy = Object.getOwnPropertyDescriptors, pu = Object.getOwnPropertySymbols, Ky = Object.prototype.hasOwnProperty, Zy = Object.prototype.propertyIsEnumerable, gu = (e, n, t) => n in e ? qy(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Rr = (e, n) => {
  for (var t in n || (n = {}))
    Ky.call(n, t) && gu(e, t, n[t]);
  if (pu)
    for (var t of pu(n))
      Zy.call(n, t) && gu(e, t, n[t]);
  return e;
}, Jy = (e, n) => Gy(e, Xy(n));
let ot, pr = {};
function Qy(e = {}) {
  return nn(e) ? Jy(Rr({}, pr), { message: e }) : Rr(Rr({}, pr), e);
}
function Bt(e) {
  return Jn() ? new Promise((n) => {
    Bt.close();
    const t = Qy(e), o = je(t);
    o.teleport = "body", ot = o;
    const { unmountInstance: r } = eo(Ao, o, {
      onConfirm: () => {
        y(o.onConfirm), n("confirm");
      },
      onCancel: () => {
        y(o.onCancel), n("cancel");
      },
      onClose: () => {
        y(o.onClose), n("close");
      },
      onClosed: () => {
        y(o.onClosed), r(), ot === o && (ot = null);
      },
      onRouteChange: () => {
        r(), ot === o && (ot = null);
      },
      "onUpdate:show": (a) => {
        o.show = a;
      }
    });
    o.show = !0;
  }) : Promise.resolve();
}
Bt.setDefaultOptions = function(e) {
  pr = e;
};
Bt.resetDefaultOptions = function() {
  pr = {};
};
Bt.close = function() {
  if (ot != null) {
    const e = ot;
    ot = null, Ye().then(() => {
      e.show = !1;
    });
  }
};
Bt.Component = Ao;
re(Ao);
re(Ao, Bt);
const iI = Ao;
var ka = Bt;
const _y = {
  inset: {
    type: [Boolean, Number, String],
    default: !1
  },
  vertical: Boolean,
  description: String,
  margin: String,
  dashed: Boolean,
  hairline: Boolean
}, { name: xy, n: e1, classes: n1 } = ee("divider");
function t1(e, n) {
  return p(), S(
    "div",
    {
      class: v(
        e.classes(
          e.n(),
          e.n("$--box"),
          [e.vertical, e.n("--vertical")],
          [e.withText, e.n("--with-text")],
          [e.withPresetInset, e.n("--inset")],
          [e.dashed, e.n("--dashed")],
          [e.hairline, e.n("--hairline")]
        )
      ),
      style: F(e.style)
    },
    [
      e.vertical ? Q("v-if", !0) : R(e.$slots, "default", { key: 0 }, () => [
        e.description ? (p(), S(
          "span",
          {
            key: 0,
            class: v(e.n("text"))
          },
          ae(e.description),
          3
          /* TEXT, CLASS */
        )) : Q("v-if", !0)
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const pf = x({
  name: xy,
  props: _y,
  setup(e, { slots: n }) {
    const t = C(!1), o = M(() => {
      const { vertical: i, inset: l } = e;
      return !i && l === !0;
    }), r = M(() => {
      const { inset: i, vertical: l, margin: s } = e;
      if (gi(i) || l)
        return { margin: s };
      const u = L(i), d = Math.abs(u) + (i + "").replace(u + "", "");
      return {
        margin: s,
        width: `calc(100% - ${Se(d)})`,
        left: u > 0 ? Se(d) : Se(0)
      };
    });
    rn(a), Eo(a);
    function a() {
      const { description: i, vertical: l } = e;
      t.value = (n.default || i != null) && !l;
    }
    return {
      n: e1,
      classes: n1,
      withText: t,
      style: r,
      withPresetInset: o
    };
  }
});
pf.render = t1;
var ll = pf;
re(ll);
const lI = ll;
var Pa = ll;
const o1 = {
  direction: {
    type: String,
    default: "xy"
  },
  attraction: String,
  disabled: Boolean,
  boundary: {
    type: Object,
    default: () => ({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    })
  },
  zIndex: {
    type: [Number, String],
    default: 90
  },
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  onClick: A()
};
var r1 = Object.defineProperty, a1 = Object.defineProperties, i1 = Object.getOwnPropertyDescriptors, bu = Object.getOwnPropertySymbols, l1 = Object.prototype.hasOwnProperty, s1 = Object.prototype.propertyIsEnumerable, yu = (e, n, t) => n in e ? r1(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, $u = (e, n) => {
  for (var t in n || (n = {}))
    l1.call(n, t) && yu(e, t, n[t]);
  if (bu)
    for (var t of bu(n))
      s1.call(n, t) && yu(e, t, n[t]);
  return e;
}, wu = (e, n) => a1(e, i1(n)), u1 = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: d1, n: c1, classes: f1 } = ee("drag");
function v1(e, n) {
  return p(), $e(jn, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [
    B(
      "div",
      ze({
        ref: "drag",
        class: e.classes(e.n(), e.n("$--box"), [e.enableTransition, e.n("--transition")]),
        style: {
          "z-index": e.zIndex
        },
        onTouchstart: n[0] || (n[0] = (...t) => e.handleTouchstart && e.handleTouchstart(...t)),
        onTouchmove: n[1] || (n[1] = (...t) => e.handleTouchmove && e.handleTouchmove(...t)),
        onTouchend: n[2] || (n[2] = (...t) => e.handleTouchend && e.handleTouchend(...t)),
        onTouchcancel: n[3] || (n[3] = (...t) => e.handleTouchend && e.handleTouchend(...t)),
        onClick: n[4] || (n[4] = (...t) => e.handleClick && e.handleClick(...t))
      }, e.getAttrs()),
      [
        R(e.$slots, "default")
      ],
      16
      /* FULL_PROPS */
    )
  ], 8, ["to", "disabled"]);
}
const gf = x({
  name: d1,
  inheritAttrs: !1,
  props: o1,
  setup(e, { attrs: n }) {
    const t = C(null), o = C(0), r = C(0), a = C(!1), i = C(!1), { touching: l, dragging: s, moveX: u, moveY: d, startTouch: c, moveTouch: f, endTouch: m, resetTouch: g } = xt(), { disabled: h } = Et(), b = je({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    });
    ce(() => e.boundary, N), _t(U), rn(() => {
      N(), U();
    });
    function w(G) {
      e.disabled || (c(G), P());
    }
    function E(G) {
      return u1(this, null, function* () {
        !l.value || e.disabled || (f(G), Ln(G), i.value = !1, a.value = !0, e.direction.includes("x") && (o.value += u.value), e.direction.includes("y") && (r.value += d.value), O());
      });
    }
    function T() {
      e.disabled || (m(), i.value = !0, D());
    }
    function $(G) {
      s.value || y(e.onClick, G);
    }
    function P() {
      const { left: G, top: j } = I();
      o.value = G, r.value = j;
    }
    function I() {
      const G = en(t.value), j = en(window), X = G.top - j.top, J = j.bottom - G.bottom, Y = G.left - j.left, le = j.right - G.right, { width: q, height: ne } = G, { width: H, height: _ } = j;
      return {
        top: X,
        bottom: J,
        left: Y,
        right: le,
        width: q,
        height: ne,
        halfWidth: q / 2,
        halfHeight: ne / 2,
        windowWidth: H,
        windowHeight: _
      };
    }
    function k() {
      const G = I(), j = b.left, X = G.windowWidth - b.right - G.width, J = b.top, Y = G.windowHeight - b.bottom - G.height;
      return {
        minX: j,
        minY: J,
        // fallback the drag element overflows boundary
        maxX: j < X ? X : j,
        maxY: J < Y ? Y : J
      };
    }
    function D() {
      if (e.attraction == null)
        return;
      const { halfWidth: G, halfHeight: j, top: X, bottom: J, left: Y, right: le } = I(), { minX: q, minY: ne, maxX: H, maxY: _ } = k(), ue = Y + G - b.left, V = le + G - b.right, W = X + j - b.top, he = J + j - b.bottom, Ee = ue <= V, oe = W <= he;
      e.attraction.includes("x") && (o.value = Ee ? q : H), e.attraction.includes("y") && (r.value = oe ? ne : _);
    }
    function O() {
      const { minX: G, minY: j, maxX: X, maxY: J } = k();
      o.value = ct(o.value, G, X), r.value = ct(r.value, j, J);
    }
    function N() {
      const { top: G = 0, bottom: j = 0, left: X = 0, right: J = 0 } = e.boundary;
      b.top = Fe(G), b.bottom = Fe(j), b.left = Fe(X), b.right = Fe(J);
    }
    function z() {
      var G;
      const j = (G = n.style) != null ? G : {};
      return wu($u({}, n), {
        style: wu($u({}, j), {
          // when the drag element is dragged for the first time, the inset should be cleared to avoid affecting translateX and translateY.
          top: a.value ? 0 : j.top,
          left: a.value ? 0 : j.left,
          right: a.value ? "auto" : j.right,
          bottom: a.value ? "auto" : j.bottom,
          transform: a.value ? `translate(${o.value}px, ${r.value}px)` : j.transform
        })
      });
    }
    function U() {
      a.value && (P(), O());
    }
    function te() {
      g(), i.value = !1, a.value = !1, o.value = 0, r.value = 0;
    }
    return {
      drag: t,
      x: o,
      y: r,
      enableTransition: i,
      dragging: s,
      teleportDisabled: h,
      n: c1,
      classes: f1,
      getAttrs: z,
      handleTouchstart: w,
      handleTouchmove: E,
      handleTouchend: T,
      handleClick: $,
      resize: U,
      reset: te
    };
  }
});
gf.render = v1;
var sl = gf;
re(sl);
const sI = sl;
var gr = sl, m1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function tr(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return m1[n];
  });
}
var Gn = "top", pt = "bottom", Pt = "right", ut = "left", ul = "auto", Ir = [Gn, pt, Pt, ut], Br = "start", go = "end", h1 = "clippingParents", bf = "viewport", to = "popper", p1 = "reference", Cu = /* @__PURE__ */ Ir.reduce(function(e, n) {
  return e.concat([n + "-" + Br, n + "-" + go]);
}, []), yf = /* @__PURE__ */ [].concat(Ir, [ul]).reduce(function(e, n) {
  return e.concat([n, n + "-" + Br, n + "-" + go]);
}, []), g1 = "beforeRead", b1 = "read", y1 = "afterRead", $1 = "beforeMain", w1 = "main", C1 = "afterMain", S1 = "beforeWrite", k1 = "write", P1 = "afterWrite", O1 = [g1, b1, y1, $1, w1, C1, S1, k1, P1];
function dt(e) {
  return e.split("-")[0];
}
var T1 = {
  start: "end",
  end: "start"
};
function Su(e) {
  return e.replace(/start|end/g, function(n) {
    return T1[n];
  });
}
function Dn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function Ot(e) {
  var n = Dn(e).Element;
  return e instanceof n || e instanceof Element;
}
function Tn(e) {
  var n = Dn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function dl(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = Dn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function wt(e) {
  return ((Ot(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var lo = Math.max, ku = Math.min, qt = Math.round;
function Oa() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function $f() {
  return !/^((?!chrome|android).)*safari/i.test(Oa());
}
function Gt(e, n, t) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  var o = e.getBoundingClientRect(), r = 1, a = 1;
  n && Tn(e) && (r = e.offsetWidth > 0 && qt(o.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && qt(o.height) / e.offsetHeight || 1);
  var i = Ot(e) ? Dn(e) : window, l = i.visualViewport, s = !$f() && t, u = (o.left + (s && l ? l.offsetLeft : 0)) / r, d = (o.top + (s && l ? l.offsetTop : 0)) / a, c = o.width / r, f = o.height / a;
  return {
    width: c,
    height: f,
    top: d,
    right: u + c,
    bottom: d + f,
    left: u,
    x: u,
    y: d
  };
}
function cl(e) {
  var n = Dn(e), t = n.pageXOffset, o = n.pageYOffset;
  return {
    scrollLeft: t,
    scrollTop: o
  };
}
function fl(e) {
  return Gt(wt(e)).left + cl(e).scrollLeft;
}
function E1(e, n) {
  var t = Dn(e), o = wt(e), r = t.visualViewport, a = o.clientWidth, i = o.clientHeight, l = 0, s = 0;
  if (r) {
    a = r.width, i = r.height;
    var u = $f();
    (u || !u && n === "fixed") && (l = r.offsetLeft, s = r.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: l + fl(e),
    y: s
  };
}
function Kn(e) {
  return Dn(e).getComputedStyle(e);
}
function I1(e) {
  var n, t = wt(e), o = cl(e), r = (n = e.ownerDocument) == null ? void 0 : n.body, a = lo(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), i = lo(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), l = -o.scrollLeft + fl(e), s = -o.scrollTop;
  return Kn(r || t).direction === "rtl" && (l += lo(t.clientWidth, r ? r.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: l,
    y: s
  };
}
function Yn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Mr(e) {
  return Yn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (dl(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    wt(e)
  );
}
function vl(e) {
  var n = Kn(e), t = n.overflow, o = n.overflowX, r = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + r + o);
}
function wf(e) {
  return ["html", "body", "#document"].indexOf(Yn(e)) >= 0 ? e.ownerDocument.body : Tn(e) && vl(e) ? e : wf(Mr(e));
}
function so(e, n) {
  var t;
  n === void 0 && (n = []);
  var o = wf(e), r = o === ((t = e.ownerDocument) == null ? void 0 : t.body), a = Dn(o), i = r ? [a].concat(a.visualViewport || [], vl(o) ? o : []) : o, l = n.concat(i);
  return r ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(so(Mr(i)))
  );
}
function B1(e) {
  return ["table", "td", "th"].indexOf(Yn(e)) >= 0;
}
function Pu(e) {
  return !Tn(e) || // https://github.com/popperjs/popper-core/issues/837
  Kn(e).position === "fixed" ? null : e.offsetParent;
}
function M1(e) {
  var n = /firefox/i.test(Oa()), t = /Trident/i.test(Oa());
  if (t && Tn(e)) {
    var o = Kn(e);
    if (o.position === "fixed")
      return null;
  }
  var r = Mr(e);
  for (dl(r) && (r = r.host); Tn(r) && ["html", "body"].indexOf(Yn(r)) < 0; ) {
    var a = Kn(r);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || n && a.willChange === "filter" || n && a.filter && a.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function ml(e) {
  for (var n = Dn(e), t = Pu(e); t && B1(t) && Kn(t).position === "static"; )
    t = Pu(t);
  return t && (Yn(t) === "html" || Yn(t) === "body" && Kn(t).position === "static") ? n : t || M1(e) || n;
}
function D1(e, n) {
  var t = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (t && dl(t)) {
    var o = n;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Ta(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function N1(e, n) {
  var t = Gt(e, !1, n === "fixed");
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Ou(e, n, t) {
  return n === bf ? Ta(E1(e, t)) : Ot(n) ? N1(n, t) : Ta(I1(wt(e)));
}
function V1(e) {
  var n = so(Mr(e)), t = ["absolute", "fixed"].indexOf(Kn(e).position) >= 0, o = t && Tn(e) ? ml(e) : e;
  return Ot(o) ? n.filter(function(r) {
    return Ot(r) && D1(r, o) && Yn(r) !== "body";
  }) : [];
}
function A1(e, n, t, o) {
  var r = n === "clippingParents" ? V1(e) : [].concat(n), a = [].concat(r, [t]), i = a[0], l = a.reduce(function(s, u) {
    var d = Ou(e, u, o);
    return s.top = lo(d.top, s.top), s.right = ku(d.right, s.right), s.bottom = ku(d.bottom, s.bottom), s.left = lo(d.left, s.left), s;
  }, Ou(e, i, o));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function bo(e) {
  return e.split("-")[1];
}
function z1(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Cf(e) {
  var n = e.reference, t = e.element, o = e.placement, r = o ? dt(o) : null, a = o ? bo(o) : null, i = n.x + n.width / 2 - t.width / 2, l = n.y + n.height / 2 - t.height / 2, s;
  switch (r) {
    case Gn:
      s = {
        x: i,
        y: n.y - t.height
      };
      break;
    case pt:
      s = {
        x: i,
        y: n.y + n.height
      };
      break;
    case Pt:
      s = {
        x: n.x + n.width,
        y: l
      };
      break;
    case ut:
      s = {
        x: n.x - t.width,
        y: l
      };
      break;
    default:
      s = {
        x: n.x,
        y: n.y
      };
  }
  var u = r ? z1(r) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (a) {
      case Br:
        s[u] = s[u] - (n[d] / 2 - t[d] / 2);
        break;
      case go:
        s[u] = s[u] + (n[d] / 2 - t[d] / 2);
        break;
    }
  }
  return s;
}
function L1() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function R1(e) {
  return Object.assign({}, L1(), e);
}
function U1(e, n) {
  return n.reduce(function(t, o) {
    return t[o] = e, t;
  }, {});
}
function Sf(e, n) {
  n === void 0 && (n = {});
  var t = n, o = t.placement, r = o === void 0 ? e.placement : o, a = t.strategy, i = a === void 0 ? e.strategy : a, l = t.boundary, s = l === void 0 ? h1 : l, u = t.rootBoundary, d = u === void 0 ? bf : u, c = t.elementContext, f = c === void 0 ? to : c, m = t.altBoundary, g = m === void 0 ? !1 : m, h = t.padding, b = h === void 0 ? 0 : h, w = R1(typeof b != "number" ? b : U1(b, Ir)), E = f === to ? p1 : to, T = e.rects.popper, $ = e.elements[g ? E : f], P = A1(Ot($) ? $ : $.contextElement || wt(e.elements.popper), s, d, i), I = Gt(e.elements.reference), k = Cf({
    reference: I,
    element: T,
    strategy: "absolute",
    placement: r
  }), D = Ta(Object.assign({}, T, k)), O = f === to ? D : I, N = {
    top: P.top - O.top + w.top,
    bottom: O.bottom - P.bottom + w.bottom,
    left: P.left - O.left + w.left,
    right: O.right - P.right + w.right
  }, z = e.modifiersData.offset;
  if (f === to && z) {
    var U = z[r];
    Object.keys(N).forEach(function(te) {
      var G = [Pt, pt].indexOf(te) >= 0 ? 1 : -1, j = [Gn, pt].indexOf(te) >= 0 ? "y" : "x";
      N[te] += U[j] * G;
    });
  }
  return N;
}
function H1(e, n) {
  n === void 0 && (n = {});
  var t = n, o = t.placement, r = t.boundary, a = t.rootBoundary, i = t.padding, l = t.flipVariations, s = t.allowedAutoPlacements, u = s === void 0 ? yf : s, d = bo(o), c = d ? l ? Cu : Cu.filter(function(g) {
    return bo(g) === d;
  }) : Ir, f = c.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  f.length === 0 && (f = c);
  var m = f.reduce(function(g, h) {
    return g[h] = Sf(e, {
      placement: h,
      boundary: r,
      rootBoundary: a,
      padding: i
    })[dt(h)], g;
  }, {});
  return Object.keys(m).sort(function(g, h) {
    return m[g] - m[h];
  });
}
function F1(e) {
  if (dt(e) === ul)
    return [];
  var n = tr(e);
  return [Su(e), n, Su(n)];
}
function Y1(e) {
  var n = e.state, t = e.options, o = e.name;
  if (!n.modifiersData[o]._skip) {
    for (var r = t.mainAxis, a = r === void 0 ? !0 : r, i = t.altAxis, l = i === void 0 ? !0 : i, s = t.fallbackPlacements, u = t.padding, d = t.boundary, c = t.rootBoundary, f = t.altBoundary, m = t.flipVariations, g = m === void 0 ? !0 : m, h = t.allowedAutoPlacements, b = n.options.placement, w = dt(b), E = w === b, T = s || (E || !g ? [tr(b)] : F1(b)), $ = [b].concat(T).reduce(function(ue, V) {
      return ue.concat(dt(V) === ul ? H1(n, {
        placement: V,
        boundary: d,
        rootBoundary: c,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: h
      }) : V);
    }, []), P = n.rects.reference, I = n.rects.popper, k = /* @__PURE__ */ new Map(), D = !0, O = $[0], N = 0; N < $.length; N++) {
      var z = $[N], U = dt(z), te = bo(z) === Br, G = [Gn, pt].indexOf(U) >= 0, j = G ? "width" : "height", X = Sf(n, {
        placement: z,
        boundary: d,
        rootBoundary: c,
        altBoundary: f,
        padding: u
      }), J = G ? te ? Pt : ut : te ? pt : Gn;
      P[j] > I[j] && (J = tr(J));
      var Y = tr(J), le = [];
      if (a && le.push(X[U] <= 0), l && le.push(X[J] <= 0, X[Y] <= 0), le.every(function(ue) {
        return ue;
      })) {
        O = z, D = !1;
        break;
      }
      k.set(z, le);
    }
    if (D)
      for (var q = g ? 3 : 1, ne = function(V) {
        var W = $.find(function(he) {
          var Ee = k.get(he);
          if (Ee)
            return Ee.slice(0, V).every(function(oe) {
              return oe;
            });
        });
        if (W)
          return O = W, "break";
      }, H = q; H > 0; H--) {
        var _ = ne(H);
        if (_ === "break")
          break;
      }
    n.placement !== O && (n.modifiersData[o]._skip = !0, n.placement = O, n.reset = !0);
  }
}
const j1 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Y1,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function W1(e, n, t) {
  var o = dt(e), r = [ut, Gn].indexOf(o) >= 0 ? -1 : 1, a = typeof t == "function" ? t(Object.assign({}, n, {
    placement: e
  })) : t, i = a[0], l = a[1];
  return i = i || 0, l = (l || 0) * r, [ut, Pt].indexOf(o) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function q1(e) {
  var n = e.state, t = e.options, o = e.name, r = t.offset, a = r === void 0 ? [0, 0] : r, i = yf.reduce(function(d, c) {
    return d[c] = W1(c, n.rects, a), d;
  }, {}), l = i[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[o] = i;
}
const G1 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: q1
};
var X1 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function K1(e) {
  var n = e.x, t = e.y, o = window, r = o.devicePixelRatio || 1;
  return {
    x: qt(n * r) / r || 0,
    y: qt(t * r) / r || 0
  };
}
function Tu(e) {
  var n, t = e.popper, o = e.popperRect, r = e.placement, a = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, c = e.isFixed, f = i.x, m = f === void 0 ? 0 : f, g = i.y, h = g === void 0 ? 0 : g, b = typeof d == "function" ? d({
    x: m,
    y: h
  }) : {
    x: m,
    y: h
  };
  m = b.x, h = b.y;
  var w = i.hasOwnProperty("x"), E = i.hasOwnProperty("y"), T = ut, $ = Gn, P = window;
  if (u) {
    var I = ml(t), k = "clientHeight", D = "clientWidth";
    if (I === Dn(t) && (I = wt(t), Kn(I).position !== "static" && l === "absolute" && (k = "scrollHeight", D = "scrollWidth")), I = I, r === Gn || (r === ut || r === Pt) && a === go) {
      $ = pt;
      var O = c && I === P && P.visualViewport ? P.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        I[k]
      );
      h -= O - o.height, h *= s ? 1 : -1;
    }
    if (r === ut || (r === Gn || r === pt) && a === go) {
      T = Pt;
      var N = c && I === P && P.visualViewport ? P.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        I[D]
      );
      m -= N - o.width, m *= s ? 1 : -1;
    }
  }
  var z = Object.assign({
    position: l
  }, u && X1), U = d === !0 ? K1({
    x: m,
    y: h
  }) : {
    x: m,
    y: h
  };
  if (m = U.x, h = U.y, s) {
    var te;
    return Object.assign({}, z, (te = {}, te[$] = E ? "0" : "", te[T] = w ? "0" : "", te.transform = (P.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + h + "px)" : "translate3d(" + m + "px, " + h + "px, 0)", te));
  }
  return Object.assign({}, z, (n = {}, n[$] = E ? h + "px" : "", n[T] = w ? m + "px" : "", n.transform = "", n));
}
function Z1(e) {
  var n = e.state, t = e.options, o = t.gpuAcceleration, r = o === void 0 ? !0 : o, a = t.adaptive, i = a === void 0 ? !0 : a, l = t.roundOffsets, s = l === void 0 ? !0 : l, u = {
    placement: dt(n.placement),
    variation: bo(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: r,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, Tu(Object.assign({}, u, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: i,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, Tu(Object.assign({}, u, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const kf = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Z1,
  data: {}
};
function J1(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Q1(e) {
  return e === Dn(e) || !Tn(e) ? cl(e) : J1(e);
}
function _1(e) {
  var n = e.getBoundingClientRect(), t = qt(n.width) / e.offsetWidth || 1, o = qt(n.height) / e.offsetHeight || 1;
  return t !== 1 || o !== 1;
}
function x1(e, n, t) {
  t === void 0 && (t = !1);
  var o = Tn(n), r = Tn(n) && _1(n), a = wt(n), i = Gt(e, r, t), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (o || !o && !t) && ((Yn(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  vl(a)) && (l = Q1(n)), Tn(n) ? (s = Gt(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : a && (s.x = fl(a))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function e$(e) {
  var n = Gt(e), t = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(n.width - t) <= 1 && (t = n.width), Math.abs(n.height - o) <= 1 && (o = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: t,
    height: o
  };
}
function n$(e) {
  var n = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(a) {
    n.set(a.name, a);
  });
  function r(a) {
    t.add(a.name);
    var i = [].concat(a.requires || [], a.requiresIfExists || []);
    i.forEach(function(l) {
      if (!t.has(l)) {
        var s = n.get(l);
        s && r(s);
      }
    }), o.push(a);
  }
  return e.forEach(function(a) {
    t.has(a.name) || r(a);
  }), o;
}
function t$(e) {
  var n = n$(e);
  return O1.reduce(function(t, o) {
    return t.concat(n.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function o$(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(t) {
      Promise.resolve().then(function() {
        n = void 0, t(e());
      });
    })), n;
  };
}
function r$(e) {
  var n = e.reduce(function(t, o) {
    var r = t[o.name];
    return t[o.name] = r ? Object.assign({}, r, o, {
      options: Object.assign({}, r.options, o.options),
      data: Object.assign({}, r.data, o.data)
    }) : o, t;
  }, {});
  return Object.keys(n).map(function(t) {
    return n[t];
  });
}
var Eu = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Iu() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  return !n.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function a$(e) {
  e === void 0 && (e = {});
  var n = e, t = n.defaultModifiers, o = t === void 0 ? [] : t, r = n.defaultOptions, a = r === void 0 ? Eu : r;
  return function(l, s, u) {
    u === void 0 && (u = a);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Eu, a),
      modifiersData: {},
      elements: {
        reference: l,
        popper: s
      },
      attributes: {},
      styles: {}
    }, c = [], f = !1, m = {
      state: d,
      setOptions: function(w) {
        var E = typeof w == "function" ? w(d.options) : w;
        h(), d.options = Object.assign({}, a, d.options, E), d.scrollParents = {
          reference: Ot(l) ? so(l) : l.contextElement ? so(l.contextElement) : [],
          popper: so(s)
        };
        var T = t$(r$([].concat(o, d.options.modifiers)));
        return d.orderedModifiers = T.filter(function($) {
          return $.enabled;
        }), g(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var w = d.elements, E = w.reference, T = w.popper;
          if (Iu(E, T)) {
            d.rects = {
              reference: x1(E, ml(T), d.options.strategy === "fixed"),
              popper: e$(T)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(N) {
              return d.modifiersData[N.name] = Object.assign({}, N.data);
            });
            for (var $ = 0; $ < d.orderedModifiers.length; $++) {
              if (d.reset === !0) {
                d.reset = !1, $ = -1;
                continue;
              }
              var P = d.orderedModifiers[$], I = P.fn, k = P.options, D = k === void 0 ? {} : k, O = P.name;
              typeof I == "function" && (d = I({
                state: d,
                options: D,
                name: O,
                instance: m
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: o$(function() {
        return new Promise(function(b) {
          m.forceUpdate(), b(d);
        });
      }),
      destroy: function() {
        h(), f = !0;
      }
    };
    if (!Iu(l, s))
      return m;
    m.setOptions(u).then(function(b) {
      !f && u.onFirstUpdate && u.onFirstUpdate(b);
    });
    function g() {
      d.orderedModifiers.forEach(function(b) {
        var w = b.name, E = b.options, T = E === void 0 ? {} : E, $ = b.effect;
        if (typeof $ == "function") {
          var P = $({
            state: d,
            name: w,
            instance: m,
            options: T
          }), I = function() {
          };
          c.push(P || I);
        }
      });
    }
    function h() {
      c.forEach(function(b) {
        return b();
      }), c = [];
    }
    return m;
  };
}
var Go = {
  passive: !0
};
function i$(e) {
  var n = e.state, t = e.instance, o = e.options, r = o.scroll, a = r === void 0 ? !0 : r, i = o.resize, l = i === void 0 ? !0 : i, s = Dn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return a && u.forEach(function(d) {
    d.addEventListener("scroll", t.update, Go);
  }), l && s.addEventListener("resize", t.update, Go), function() {
    a && u.forEach(function(d) {
      d.removeEventListener("scroll", t.update, Go);
    }), l && s.removeEventListener("resize", t.update, Go);
  };
}
const l$ = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: i$,
  data: {}
};
function s$(e) {
  var n = e.state, t = e.name;
  n.modifiersData[t] = Cf({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const u$ = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: s$,
  data: {}
};
function d$(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(t) {
    var o = n.styles[t] || {}, r = n.attributes[t] || {}, a = n.elements[t];
    !Tn(a) || !Yn(a) || (Object.assign(a.style, o), Object.keys(r).forEach(function(i) {
      var l = r[i];
      l === !1 ? a.removeAttribute(i) : a.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function c$(e) {
  var n = e.state, t = {
    popper: {
      position: n.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(n.elements.popper.style, t.popper), n.styles = t, n.elements.arrow && Object.assign(n.elements.arrow.style, t.arrow), function() {
    Object.keys(n.elements).forEach(function(o) {
      var r = n.elements[o], a = n.attributes[o] || {}, i = Object.keys(n.styles.hasOwnProperty(o) ? n.styles[o] : t[o]), l = i.reduce(function(s, u) {
        return s[u] = "", s;
      }, {});
      !Tn(r) || !Yn(r) || (Object.assign(r.style, l), Object.keys(a).forEach(function(s) {
        r.removeAttribute(s);
      }));
    });
  };
}
const f$ = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: d$,
  effect: c$,
  requires: ["computeStyles"]
};
var v$ = [l$, u$, kf, f$], m$ = /* @__PURE__ */ a$({
  defaultModifiers: v$
}), h$ = Object.defineProperty, p$ = Object.defineProperties, g$ = Object.getOwnPropertyDescriptors, Bu = Object.getOwnPropertySymbols, b$ = Object.prototype.hasOwnProperty, y$ = Object.prototype.propertyIsEnumerable, Mu = (e, n, t) => n in e ? h$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Ur = (e, n) => {
  for (var t in n || (n = {}))
    b$.call(n, t) && Mu(e, t, n[t]);
  if (Bu)
    for (var t of Bu(n))
      y$.call(n, t) && Mu(e, t, n[t]);
  return e;
}, Hr = (e, n) => p$(e, g$(n)), Du = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
function Pf(e) {
  const n = C(null), t = C(null), o = C({ width: 0, height: 0 }), r = Xn(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(O, N) {
      N ? (I(), y(e.onOpen)) : y(e.onClose);
    }
  }), { zIndex: a } = Do(() => r.value, 1);
  let i = null, l = !1, s = !1;
  const u = () => {
    const { width: O, height: N } = Tt(n.value);
    o.value = {
      width: Fe(O),
      height: Fe(N)
    };
  }, d = () => {
    switch (e.placement) {
      case "top":
      case "cover-bottom":
        return "bottom";
      case "top-start":
      case "right-end":
      case "cover-bottom-start":
        return "bottom left";
      case "top-end":
      case "left-end":
      case "cover-bottom-end":
        return "bottom right";
      case "bottom":
      case "cover-top":
        return "top";
      case "bottom-start":
      case "right-start":
      case "cover-top-start":
        return "top left";
      case "bottom-end":
      case "left-start":
      case "cover-top-end":
        return "top right";
      case "left":
      case "cover-right":
        return "right";
      case "right":
      case "cover-left":
        return "left";
    }
  }, c = () => {
    e.trigger === "hover" && (s = !0, k());
  }, f = () => Du(this, null, function* () {
    e.trigger === "hover" && (s = !1, yield fn(), !l && D());
  }), m = () => {
    e.trigger === "hover" && (l = !0);
  }, g = () => Du(this, null, function* () {
    e.trigger === "hover" && (l = !1, yield fn(), !s && D());
  }), h = () => {
    e.closeOnClickReference && r.value ? D() : k();
  }, b = () => {
    D();
  }, w = (O) => {
    e.trigger === "click" && (b(), y(e.onClickOutside, O));
  }, E = () => {
    I(), y(e.onClosed);
  }, T = () => {
    const { offsetX: O, offsetY: N, placement: z } = e;
    u();
    const U = {
      x: Fe(O),
      y: Fe(N)
    };
    switch (z) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: U.x,
          distance: U.y - o.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: U.x,
          distance: U.y - o.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: U.x,
          distance: U.y - o.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: U.x,
          distance: -U.y - o.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: U.x,
          distance: -U.y - o.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: U.x,
          distance: -U.y - o.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: U.y,
          distance: U.x - o.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: U.y,
          distance: -U.x - o.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: z,
          skidding: U.y,
          distance: -U.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: z,
          skidding: U.x,
          distance: -U.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: z,
          skidding: U.x,
          distance: U.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: z,
          skidding: U.y,
          distance: U.x
        };
    }
  }, $ = () => {
    const { placement: O, skidding: N, distance: z } = T(), U = [
      Hr(Ur({}, j1), {
        enabled: r.value
      }),
      Hr(Ur({}, G1), {
        options: {
          offset: [N, z]
        }
      }),
      Hr(Ur({}, kf), {
        options: {
          adaptive: !1,
          gpuAcceleration: !1
        },
        enabled: r.value
      }),
      {
        name: "applyTransformOrigin",
        enabled: r.value,
        phase: "beforeWrite",
        fn({ state: te }) {
          te.styles.popper.transformOrigin = d();
        }
      }
    ];
    return {
      placement: O,
      modifiers: U,
      strategy: e.strategy
    };
  }, P = () => e.reference ? n.value.querySelector(e.reference) : n.value, I = () => {
    i.setOptions($());
  }, k = () => {
    const { disabled: O } = e;
    O || (r.value = !0, y(e["onUpdate:show"], !0));
  }, D = () => {
    r.value = !1, y(e["onUpdate:show"], !1);
  };
  return Md(P, "click", w), ce(() => [e.offsetX, e.offsetY, e.placement, e.strategy], I), ce(() => e.disabled, D), Oo(() => {
    var O;
    i = m$((O = P()) != null ? O : n.value, t.value, $());
  }), To(() => {
    i.destroy();
  }), {
    show: r,
    popover: t,
    zIndex: a,
    host: n,
    hostSize: o,
    handleHostClick: h,
    handleHostMouseenter: c,
    handleHostMouseleave: f,
    handlePopoverClose: b,
    handlePopoverMouseenter: m,
    handlePopoverMouseleave: g,
    handleClosed: E,
    resize: I,
    open: k,
    close: D
  };
}
const $$ = {
  type: {
    type: String,
    default: "default"
  },
  color: String,
  content: String,
  show: Boolean,
  disabled: Boolean,
  trigger: {
    type: String,
    default: "hover"
  },
  reference: String,
  placement: {
    type: String,
    default: "bottom"
  },
  strategy: {
    type: String,
    default: "absolute"
  },
  offsetX: {
    type: [Number, String],
    default: 0
  },
  offsetY: {
    type: [Number, String],
    default: 0
  },
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  sameWidth: Boolean,
  closeOnClickReference: Boolean,
  onOpen: A(),
  onOpened: A(),
  onClose: A(),
  onClosed: A(),
  onClickOutside: A(),
  "onUpdate:show": A()
}, { name: w$, n: C$, classes: S$ } = ee("tooltip");
function k$(e, n) {
  return p(), S(
    "div",
    {
      ref: "host",
      class: v(e.classes(e.n(), e.n("$--box"))),
      onClick: n[3] || (n[3] = (...t) => e.handleHostClick && e.handleHostClick(...t)),
      onMouseenter: n[4] || (n[4] = (...t) => e.handleHostMouseenter && e.handleHostMouseenter(...t)),
      onMouseleave: n[5] || (n[5] = (...t) => e.handleHostMouseleave && e.handleHostMouseleave(...t))
    },
    [
      R(e.$slots, "default"),
      (p(), $e(jn, {
        to: e.teleport === !1 ? void 0 : e.teleport,
        disabled: e.teleportDisabled || e.teleport === !1
      }, [
        Z(We, {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.handleClosed,
          persisted: ""
        }, {
          default: me(() => [
            Te(B(
              "div",
              {
                ref: "popover",
                class: v(e.classes(e.n("tooltip"), e.n("$--box"))),
                style: F({ zIndex: e.zIndex }),
                onClick: n[0] || (n[0] = Cn(() => {
                }, ["stop"])),
                onMouseenter: n[1] || (n[1] = (...t) => e.handlePopoverMouseenter && e.handlePopoverMouseenter(...t)),
                onMouseleave: n[2] || (n[2] = (...t) => e.handlePopoverMouseleave && e.handlePopoverMouseleave(...t))
              },
              [
                B(
                  "div",
                  {
                    style: F({ background: e.color, width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0 }),
                    class: v(e.classes(e.n("content-container"), e.n(`--${e.type}`)))
                  },
                  [
                    R(e.$slots, "content", {}, () => [
                      Ie(
                        ae(e.content),
                        1
                        /* TEXT */
                      )
                    ])
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ],
              38
              /* CLASS, STYLE, HYDRATE_EVENTS */
            ), [
              [Un, e.show]
            ])
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["name", "onAfterEnter", "onAfterLeave"])
      ], 8, ["to", "disabled"]))
    ],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
const Of = x({
  name: w$,
  props: $$,
  setup(e) {
    const { disabled: n } = Et(), {
      popover: t,
      host: o,
      hostSize: r,
      show: a,
      zIndex: i,
      handleHostClick: l,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: d,
      handlePopoverMouseleave: c,
      handlePopoverClose: f,
      handleClosed: m,
      // expose
      open: g,
      // expose
      close: h,
      // expose
      resize: b
    } = Pf(e);
    return {
      popover: t,
      host: o,
      hostSize: r,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      toSizeUnit: Se,
      n: C$,
      classes: S$,
      handleHostClick: l,
      handlePopoverClose: f,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: d,
      handlePopoverMouseleave: c,
      handleClosed: m,
      resize: b,
      open: g,
      close: h
    };
  }
});
Of.render = k$;
var hl = Of;
re(hl);
const uI = hl;
var br = hl;
const P$ = {
  expand: Boolean,
  expandTrigger: String,
  lineClamp: [Number, String],
  tooltip: {
    type: [Object, Boolean],
    default: !0
  },
  "onUpdate:expand": A()
};
var O$ = Object.defineProperty, Nu = Object.getOwnPropertySymbols, T$ = Object.prototype.hasOwnProperty, E$ = Object.prototype.propertyIsEnumerable, Vu = (e, n, t) => n in e ? O$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, I$ = (e, n) => {
  for (var t in n || (n = {}))
    T$.call(n, t) && Vu(e, t, n[t]);
  if (Nu)
    for (var t of Nu(n))
      E$.call(n, t) && Vu(e, t, n[t]);
  return e;
};
const { name: B$, n: M$, classes: D$ } = ee("ellipsis"), N$ = { key: 0 };
function V$(e, n) {
  const t = ie("var-tooltip");
  return p(), $e(
    t,
    st(Io(e.tooltip)),
    {
      content: me(() => [
        R(e.$slots, "tooltip-content", {}, () => {
          var o;
          return [
            (o = e.tooltip) != null && o.content ? (p(), S(
              "span",
              N$,
              ae(e.tooltip.content),
              1
              /* TEXT */
            )) : R(e.$slots, "default", { key: 1 })
          ];
        })
      ]),
      default: me(() => [
        B(
          "span",
          {
            class: v(
              e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])
            ),
            style: F(e.rootStyles),
            onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
          },
          [
            R(e.$slots, "default")
          ],
          6
          /* CLASS, STYLE */
        )
      ]),
      _: 3
      /* FORWARDED */
    },
    16
    /* FULL_PROPS */
  );
}
const Tf = x({
  name: B$,
  components: { VarTooltip: br },
  props: P$,
  setup(e) {
    const n = Xn(e, "expand"), t = M(() => e.lineClamp ? { "-webkit-line-clamp": e.lineClamp } : {}), o = M(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : I$({ sameWidth: !0 }, e.tooltip));
    function r() {
      e.expandTrigger && (n.value = !n.value);
    }
    return {
      tooltip: o,
      expanding: n,
      rootStyles: t,
      n: M$,
      classes: D$,
      handleClick: r
    };
  }
});
Tf.render = V$;
var pl = Tf;
re(pl);
const dI = pl;
var Ea = pl;
const A$ = {
  active: Boolean,
  show: {
    type: Boolean,
    default: !0
  },
  drag: {
    type: [Object, Boolean],
    default: !1
  },
  type: {
    type: String,
    default: "primary"
  },
  position: {
    type: String,
    default: "right-bottom"
  },
  direction: {
    type: String,
    default: "top"
  },
  trigger: {
    type: String,
    default: "click"
  },
  disabled: Boolean,
  color: String,
  inactiveIcon: {
    type: String,
    default: "plus"
  },
  activeIcon: {
    type: String,
    default: "window-close"
  },
  inactiveIconSize: Oe(Ke, "size"),
  activeIconSize: Oe(Ke, "size"),
  inactiveIconNamespace: Oe(Ke, "namespace"),
  activeIconNamespace: Oe(Ke, "namespace"),
  fixed: {
    type: Boolean,
    default: !0
  },
  zIndex: {
    type: [Number, String],
    default: 90
  },
  top: [Number, String],
  bottom: [Number, String],
  left: [Number, String],
  right: [Number, String],
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  safeArea: Boolean,
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  onClick: A(),
  onOpen: A(),
  onOpened: A(),
  onClose: A(),
  onClosed: A(),
  "onUpdate:active": A()
}, {
  name: z$,
  classes: Fr,
  n: yn
} = ee("fab");
var gl = x({
  name: z$,
  inheritAttrs: !1,
  props: A$,
  setup(e, {
    slots: n,
    attrs: t
  }) {
    const o = Xn(e, "active"), r = C(null), a = C(null);
    ce(() => e.trigger, () => {
      o.value = !1;
    }), ce(() => e.disabled, () => {
      o.value = !1;
    }), ce(() => [e.position, e.fixed, e.top, e.bottom, e.left, e.right], () => {
      var d;
      (d = a.value) == null || d.reset();
    }), Md(r, "click", s);
    function i(d, c, f) {
      if (d.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (f === 0) {
          y(e.onClick, o.value, d);
          return;
        }
        o.value = c, y(e.onClick, o.value, d), y(o.value ? e.onOpen : e.onClose);
      }
    }
    function l(d, c) {
      e.trigger !== "hover" || e.disabled || c === 0 || (o.value = d, y(o.value ? e.onOpen : e.onClose));
    }
    function s() {
      e.trigger !== "click" || e.disabled || o.value !== !1 && (o.value = !1, y(e.onClose));
    }
    function u() {
      return n.trigger ? e.show ? n.trigger({
        active: o.value
      }) : null : Te(Z(hn, {
        "var-fab-cover": !0,
        class: yn("trigger"),
        type: e.type,
        color: e.color,
        disabled: e.disabled,
        elevation: e.elevation,
        round: !0
      }, {
        default: () => [Z(He, {
          "var-fab-cover": !0,
          class: Fr([o.value, yn("trigger-active-icon"), yn("trigger-inactive-icon")]),
          name: o.value ? e.activeIcon : e.inactiveIcon,
          size: o.value ? e.activeIconSize : e.inactiveIconSize,
          namespace: o.value ? e.activeIconNamespace : e.inactiveIconNamespace,
          transition: 200,
          animationClass: yn("--trigger-icon-animation")
        }, null)]
      }), [[Un, e.show]]);
    }
    return () => {
      var d;
      const c = Nd((d = y(n.default)) != null ? d : []), f = gi(e.drag) ? {} : e.drag;
      return Z(gr, ze({
        ref: a,
        class: Fr(yn(`--position-${e.position}`), [!e.fixed, yn("--absolute")]),
        style: {
          top: Se(e.top),
          bottom: Se(e.bottom),
          left: Se(e.left),
          right: Se(e.right)
        },
        zIndex: e.zIndex,
        teleport: e.teleport,
        disabled: e.disabled || !e.drag || !e.fixed,
        direction: f.direction,
        attraction: f.attraction,
        boundary: f.boundary,
        onClick: (m) => i(m, !o.value, c.length)
      }, t), {
        default: () => [Z("div", {
          class: Fr(yn(), yn(`--direction-${e.direction}`), [e.safeArea, yn("--safe-area")]),
          ref: r,
          onMouseleave: () => l(!1, c.length),
          onMouseenter: () => l(!0, c.length)
        }, [Z(We, {
          name: yn("--active-transition")
        }, {
          default: () => [u()]
        }), Z(We, {
          name: yn(`--actions-transition-${e.direction}`),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        }, {
          default: () => [Te(Z("div", {
            class: yn("actions"),
            onClick: (m) => m.stopPropagation()
          }, [c.map((m) => Z("div", {
            class: yn("action")
          }, [m]))]), [[Un, e.show && o.value && c.length]])]
        })])]
      });
    };
  }
});
re(gl);
const cI = gl;
var Ia = gl;
const bl = {
  value: {
    type: null,
    required: !0
  },
  id: {
    type: String,
    default: ""
  },
  isFocus: Boolean,
  size: {
    type: String,
    default: "normal"
  },
  variant: {
    type: String,
    default: "standard"
  },
  placeholder: String,
  line: {
    type: Boolean,
    default: !0
  },
  hint: {
    type: Boolean,
    default: !0
  },
  textColor: String,
  focusColor: String,
  blurColor: String,
  errorMessage: String,
  formDisabled: Boolean,
  disabled: Boolean,
  clearable: Boolean,
  cursor: String,
  composing: Boolean,
  onClick: A(),
  onClear: A()
}, { name: L$, n: Yr, classes: R$ } = ee("field-decorator"), U$ = ["for"];
function H$(e, n) {
  const t = ie("var-icon");
  return p(), S(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"), e.n(`--${e.variant}`), [e.size === "small", e.n("--small")], [e.disabled, e.n("--disabled")])),
      onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
    },
    [
      B(
        "div",
        {
          class: v(
            e.classes(
              e.n("controller"),
              [e.isFocus, e.n("--focus")],
              [e.errorMessage, e.n("--error")],
              [e.formDisabled || e.disabled, e.n("--disabled")]
            )
          ),
          style: F({
            color: e.color,
            cursor: e.cursor,
            overflow: e.isFloating ? "visible" : "hidden"
          })
        },
        [
          B(
            "div",
            {
              class: v(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
            },
            [
              R(e.$slots, "prepend-icon")
            ],
            2
            /* CLASS */
          ),
          B(
            "div",
            {
              class: v(e.classes(e.n("middle"), [!e.hint, e.n("--middle-non-hint")]))
            },
            [
              R(e.$slots, "default")
            ],
            2
            /* CLASS */
          ),
          e.placeholder && e.hint ? (p(), S("label", {
            key: 0,
            class: v(
              e.classes(
                e.n("placeholder"),
                e.n("$--ellipsis"),
                [e.isFocus, e.n("--focus")],
                [e.formDisabled || e.disabled, e.n("--disabled")],
                [e.errorMessage, e.n("--error")],
                e.computePlaceholderState()
              )
            ),
            style: F({
              color: e.color
            }),
            for: e.id
          }, [
            B(
              "span",
              null,
              ae(e.placeholder),
              1
              /* TEXT */
            )
          ], 14, U$)) : Q("v-if", !0),
          B(
            "div",
            {
              class: v(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
            },
            [
              e.clearable && !e.isEmpty(e.value) ? (p(), $e(t, {
                key: 0,
                class: v(e.n("clear-icon")),
                "var-field-decorator-cover": "",
                name: "close-circle",
                onClick: e.handleClear
              }, null, 8, ["class", "onClick"])) : Q("v-if", !0),
              R(e.$slots, "append-icon")
            ],
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      ),
      e.line ? (p(), S(
        Ne,
        { key: 0 },
        [
          e.variant === "outlined" ? (p(), S(
            "fieldset",
            {
              key: 0,
              class: v(
                e.classes(
                  e.n("line"),
                  [e.isFocus, e.n("--line-focus")],
                  [e.errorMessage, e.n("--line-error")],
                  [e.formDisabled || e.disabled, e.n("--line-disabled")]
                )
              ),
              style: F({ borderColor: e.color })
            },
            [
              B(
                "legend",
                {
                  class: v(e.classes(e.n("line-legend"), [e.isFloating, e.n("line-legend--hint")])),
                  style: F({ width: e.legendWidth })
                },
                [
                  e.placeholder && e.hint ? (p(), $e(jn, {
                    key: 0,
                    to: "body"
                  }, [
                    B(
                      "span",
                      {
                        ref: "placeholderTextEl",
                        class: v(
                          e.classes(e.n("placeholder-text"), e.n("$--ellipsis"), [e.size === "small", e.n("placeholder-text--small")])
                        )
                      },
                      ae(e.placeholder),
                      3
                      /* TEXT, CLASS */
                    )
                  ])) : Q("v-if", !0)
                ],
                6
                /* CLASS, STYLE */
              )
            ],
            6
            /* CLASS, STYLE */
          )) : (p(), S(
            "div",
            {
              key: 1,
              class: v(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
              style: F({ background: e.errorMessage ? void 0 : e.blurColor })
            },
            [
              B(
                "div",
                {
                  class: v(
                    e.classes(
                      e.n("dot"),
                      [e.isFocus, e.n("--line-focus")],
                      [e.formDisabled || e.disabled, e.n("--line-disabled")],
                      [e.errorMessage, e.n("--line-error")]
                    )
                  ),
                  style: F({ background: e.errorMessage ? void 0 : e.focusColor })
                },
                null,
                6
                /* CLASS, STYLE */
              )
            ],
            6
            /* CLASS, STYLE */
          ))
        ],
        64
        /* STABLE_FRAGMENT */
      )) : Q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Ef = x({
  name: L$,
  components: { VarIcon: He },
  props: bl,
  setup(e, { slots: n }) {
    const t = C(null), o = C(""), r = M(() => e.hint && (!Rn(e.value) || e.isFocus || n["prepend-icon"])), a = M(
      () => e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
    );
    _t(l), rn(l), Eo(l);
    function i() {
      const { hint: d, value: c, composing: f } = e;
      if (!d && (!Rn(c) || f))
        return Yr("--placeholder-hidden");
      if (r.value)
        return Yr("--placeholder-hint");
    }
    function l() {
      const { size: d, hint: c, variant: f, placeholder: m } = e;
      if (!m || !c || f !== "outlined") {
        o.value = "";
        return;
      }
      const g = Tt(t.value), h = `var(--field-decorator-outlined-${d}-placeholder-space)`;
      o.value = `calc(${g.width} * 0.75 + ${h} * 2)`;
    }
    function s(d) {
      y(e.onClear, d);
    }
    function u(d) {
      y(e.onClick, d);
    }
    return {
      placeholderTextEl: t,
      color: a,
      legendWidth: o,
      isFloating: r,
      computePlaceholderState: i,
      n: Yr,
      classes: R$,
      isEmpty: Rn,
      handleClear: s,
      handleClick: u
    };
  }
});
Ef.render = H$;
var yl = Ef;
re(yl);
const fI = yl;
var yo = yl;
const F$ = {
  anchor: Number,
  anchors: Array,
  contentDraggable: {
    type: Boolean,
    default: !0
  },
  duration: {
    type: [Number, String],
    default: 300
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  safeArea: Boolean,
  "onUpdate:anchor": A(),
  onAnchorChange: A()
}, { name: Y$, n: j$, classes: W$ } = ee("floating-panel"), q$ = 100, Au = 0.2;
function G$(e, n) {
  return p(), $e(jn, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [
    B(
      "div",
      {
        class: v(e.classes(e.n(), [e.safeArea, e.n("--safe-area")], e.formatElevation(e.elevation, 3))),
        style: F({
          height: `${e.toSizeUnit(e.maxAnchor)}`,
          transform: `translateY(calc(100% - ${e.toSizeUnit(e.visibleHeight)}))`,
          transition: e.touching ? "none" : `transform ${e.toNumber(
            e.duration
          )}ms var(--floating-panel-transition-timing-function), background-color 0.25s`
        }),
        onTouchstart: n[0] || (n[0] = (...t) => e.handleTouchstart && e.handleTouchstart(...t)),
        onTouchmove: n[1] || (n[1] = (...t) => e.handleTouchmove && e.handleTouchmove(...t)),
        onTouchend: n[2] || (n[2] = (...t) => e.handleTouchend && e.handleTouchend(...t)),
        onTouchcancel: n[3] || (n[3] = (...t) => e.handleTouchend && e.handleTouchend(...t))
      },
      [
        B(
          "div",
          {
            class: v(e.n("header"))
          },
          [
            B(
              "div",
              {
                class: v(e.n("header-toolbar"))
              },
              null,
              2
              /* CLASS */
            )
          ],
          2
          /* CLASS */
        ),
        B(
          "div",
          {
            class: v(e.n("content")),
            ref: "contentRef"
          },
          [
            R(e.$slots, "default")
          ],
          2
          /* CLASS */
        )
      ],
      38
      /* CLASS, STYLE, HYDRATE_EVENTS */
    )
  ], 8, ["to", "disabled"]);
}
const If = x({
  name: Y$,
  props: F$,
  setup(e) {
    const n = C(0), t = C(null), { height: o } = Mm(), r = M(() => o.value * 0.6), a = Xn(e, "anchor"), i = M(() => {
      const O = [q$, r.value], { anchors: N } = e;
      return Rn(N) ? O : N;
    }), l = M(() => Math.min(...i.value)), s = M(() => Math.max(...i.value)), { disabled: u } = Et(), { deltaY: d, touching: c, startTouch: f, moveTouch: m, endTouch: g, isReachTop: h, isReachBottom: b } = xt();
    let w;
    Mo(() => c.value), ce(() => a.value, E, { immediate: !0 }), ce(
      () => i.value,
      () => {
        E(a.value);
      },
      { immediate: !0 }
    );
    function E(O) {
      I(O ?? l.value);
    }
    function T(O) {
      f(O), w = n.value;
    }
    function $(O) {
      var N;
      m(O);
      const z = O.target, U = t.value === z || ((N = t.value) == null ? void 0 : N.contains(z));
      if (U && !e.contentDraggable)
        return;
      if (U && e.contentDraggable && n.value >= s.value && !h(t.value)) {
        b(t.value) && Ln(O);
        return;
      }
      const te = w - d.value;
      I(k(te)), Ln(O);
    }
    function P() {
      g();
      const O = a.value;
      I(n.value), a.value = n.value, a.value !== O && y(e.onAnchorChange, n.value);
    }
    function I(O) {
      n.value = c.value ? O : D(O);
    }
    function k(O) {
      if (O > s.value) {
        const N = O - s.value;
        return s.value + N * Au;
      }
      if (O < l.value) {
        const N = l.value - O;
        return l.value - N * Au;
      }
      return O;
    }
    function D(O) {
      if (i.value.includes(O))
        return O;
      let N = 1 / 0, z = 0;
      return i.value.forEach((U) => {
        const te = Math.abs(U - O);
        te < N && (N = te, z = U);
      }), z;
    }
    return {
      contentRef: t,
      teleportDisabled: u,
      touching: c,
      minAnchor: l,
      maxAnchor: s,
      visibleHeight: n,
      n: j$,
      classes: W$,
      toSizeUnit: Se,
      toNumber: L,
      formatElevation: un,
      handleTouchstart: T,
      handleTouchmove: $,
      handleTouchend: P
    };
  }
});
If.render = G$;
var $l = If;
re($l);
const vI = $l;
var Ba = $l;
const X$ = {
  disabled: Boolean,
  readonly: Boolean,
  scrollToError: String,
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  },
  onSubmit: A(),
  onReset: A()
};
var zu = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: K$, n: Z$ } = ee("form");
function J$(e, n) {
  return p(), S(
    "form",
    {
      class: v(e.n()),
      onSubmit: n[0] || (n[0] = (...t) => e.handleSubmit && e.handleSubmit(...t)),
      onReset: n[1] || (n[1] = (...t) => e.handleReset && e.handleReset(...t))
    },
    [
      R(e.$slots, "default")
    ],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
const Bf = x({
  name: K$,
  props: X$,
  setup(e) {
    const n = M(() => e.disabled), t = M(() => e.readonly), { formItems: o, bindFormItems: r } = c0();
    r({
      disabled: n,
      readonly: t
    });
    function i(f) {
      setTimeout(() => {
        const m = mt(f), g = m === window ? 0 : Os(m), h = Os(f) - g - Fe(e.scrollToErrorOffsetY);
        vo(m, {
          top: h,
          animation: Qr
        });
      }, 300);
    }
    function l(f) {
      return zu(this, null, function* () {
        Ln(f);
        const m = yield u();
        y(e.onSubmit, m);
      });
    }
    function s(f) {
      Ln(f), d(), y(e.onReset);
    }
    function u() {
      return zu(this, null, function* () {
        var f;
        const m = yield Promise.all(o.map(({ validate: g }) => g()));
        if (e.scrollToError) {
          const [, g] = ym(m, (b) => b === !1, e.scrollToError), h = g > -1;
          if (h) {
            const b = (f = o[g].instance.proxy) == null ? void 0 : f.$el;
            i(b);
          }
          return !h;
        }
        return m.every((g) => g === !0);
      });
    }
    function d() {
      return o.forEach(({ reset: f }) => f());
    }
    function c() {
      return o.forEach(({ resetValidation: f }) => f());
    }
    return {
      n: Z$,
      handleSubmit: l,
      handleReset: s,
      validate: u,
      reset: d,
      resetValidation: c
    };
  }
});
Bf.render = J$;
var zo = Bf;
zo.useValidation = Bn;
zo.useForm = Mn;
re(zo);
const mI = zo;
var Ma = zo;
const Q$ = {
  src: String,
  fit: {
    type: String,
    default: "fill"
  },
  alt: String,
  title: String,
  width: [String, Number],
  height: [String, Number],
  radius: {
    type: [String, Number],
    default: 0
  },
  loading: String,
  error: String,
  lazy: Boolean,
  ripple: Boolean,
  block: {
    type: Boolean,
    default: !0
  },
  onClick: A(),
  onLoad: A(),
  onError: A()
}, { name: _$, n: x$, classes: ew } = ee("image"), nw = ["alt", "title", "lazy-loading", "lazy-error"], tw = ["alt", "title", "src"];
function ow(e, n) {
  var t;
  const o = Ve("lazy"), r = Ve("ripple");
  return Te((p(), S(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: F({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        borderRadius: e.toSizeUnit(e.radius)
      })
    },
    [
      e.lazy && !e.showErrorSlot ? Te((p(), S("img", {
        key: 0,
        class: v(e.n("image")),
        alt: e.alt,
        title: e.title,
        "lazy-loading": e.loading,
        "lazy-error": e.error,
        style: F({ objectFit: e.fit }),
        onLoad: n[0] || (n[0] = (...a) => e.handleLoad && e.handleLoad(...a)),
        onClick: n[1] || (n[1] = (...a) => e.handleClick && e.handleClick(...a))
      }, null, 46, nw)), [
        [o, (t = e.src) != null ? t : ""]
      ]) : Q("v-if", !0),
      !e.lazy && !e.showErrorSlot ? (p(), S("img", {
        key: 1,
        class: v(e.n("image")),
        alt: e.alt,
        title: e.title,
        style: F({ objectFit: e.fit }),
        src: e.src,
        onLoad: n[2] || (n[2] = (...a) => e.handleLoad && e.handleLoad(...a)),
        onError: n[3] || (n[3] = (...a) => e.handleError && e.handleError(...a)),
        onClick: n[4] || (n[4] = (...a) => e.handleClick && e.handleClick(...a))
      }, null, 46, tw)) : Q("v-if", !0),
      e.showErrorSlot ? R(e.$slots, "error", { key: 2 }) : Q("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  )), [
    [r, { disabled: !e.ripple }]
  ]);
}
const Mf = x({
  name: _$,
  directives: {
    Lazy: mo,
    Ripple: Ze
  },
  props: Q$,
  setup(e, { slots: n }) {
    const t = C(!1);
    ce(
      () => e.src,
      () => {
        t.value = !1;
      }
    );
    function o(i) {
      t.value = !!n.error, y(e.onError, i);
    }
    function r(i) {
      const l = i.currentTarget;
      if (e.lazy) {
        if (l._lazy.state === "success") {
          y(e.onLoad, i);
          return;
        }
        l._lazy.state === "error" && o(i);
      } else
        y(e.onLoad, i);
    }
    function a(i) {
      y(e.onClick, i);
    }
    return {
      showErrorSlot: t,
      n: x$,
      classes: ew,
      toSizeUnit: Se,
      handleLoad: r,
      handleError: o,
      handleClick: a
    };
  }
});
Mf.render = ow;
var wl = Mf;
re(wl);
const hI = wl;
var Da = wl;
const Df = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function rw() {
  const { childProviders: e, length: n, bindChildren: t } = ln(
    Df
  );
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: t
  };
}
const Nf = {
  loop: {
    type: Boolean,
    default: !0
  },
  autoplay: [String, Number],
  duration: {
    type: [String, Number],
    default: 300
  },
  initialIndex: {
    type: [String, Number],
    default: 0
  },
  navigation: {
    type: [Boolean, String],
    default: !1
  },
  indicator: {
    type: Boolean,
    default: !0
  },
  indicatorColor: String,
  vertical: Boolean,
  touchable: {
    type: Boolean,
    default: !0
  },
  onChange: A()
};
var Nt = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const aw = 250, iw = 20, { name: lw, n: Lu, classes: sw } = ee("swipe"), uw = ["onClick"];
function dw(e, n) {
  const t = ie("var-icon"), o = ie("var-button"), r = Ve("hover");
  return Te((p(), S(
    "div",
    {
      class: v(e.n()),
      ref: "swipeEl"
    },
    [
      B(
        "div",
        {
          class: v(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
          style: F({
            width: e.vertical ? void 0 : `${e.trackSize}px`,
            height: e.vertical ? `${e.trackSize}px` : void 0,
            transform: `translate${e.vertical ? "Y" : "X"}(${e.trackTranslate}px)`,
            transitionDuration: e.lockDuration ? "0ms" : `${e.toNumber(e.duration)}ms`
          }),
          onTouchstart: n[0] || (n[0] = (...a) => e.handleTouchstart && e.handleTouchstart(...a)),
          onTouchmove: n[1] || (n[1] = (...a) => e.handleTouchmove && e.handleTouchmove(...a)),
          onTouchend: n[2] || (n[2] = (...a) => e.handleTouchend && e.handleTouchend(...a))
        },
        [
          R(e.$slots, "default")
        ],
        38
        /* CLASS, STYLE, HYDRATE_EVENTS */
      ),
      e.navigation ? R(e.$slots, "prev", st(ze({ key: 0 }, {
        index: e.index,
        length: e.length,
        prev: e.prev,
        next: e.next,
        to: e.to,
        hovering: e.hovering
      })), () => [
        Z(We, {
          name: e.getNavigationAnimation("prev")
        }, {
          default: me(() => [
            e.navigation === !0 || e.hovering ? (p(), S(
              "div",
              {
                key: 0,
                class: v(e.classes(e.n("navigation"), e.n("navigation-prev"), [e.vertical, e.n("--navigation-vertical-prev")]))
              },
              [
                Z(o, {
                  "var-swipe-cover": "",
                  disabled: !e.loop && e.index === 0,
                  class: v(e.n("navigation-prev-button")),
                  onClick: n[3] || (n[3] = (a) => e.prev())
                }, {
                  default: me(() => [
                    Z(t, {
                      "var-swipe-cover": "",
                      class: v(e.n("navigation-prev-button-icon")),
                      name: e.vertical ? "chevron-up" : "chevron-left"
                    }, null, 8, ["class", "name"])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["disabled", "class"])
              ],
              2
              /* CLASS */
            )) : Q("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["name"])
      ]) : Q("v-if", !0),
      e.navigation ? R(e.$slots, "next", st(ze({ key: 1 }, {
        index: e.index,
        length: e.length,
        hovering: e.hovering,
        prev: e.prev,
        next: e.next,
        to: e.to
      })), () => [
        Z(We, {
          name: e.getNavigationAnimation("next")
        }, {
          default: me(() => [
            e.navigation === !0 || e.hovering ? (p(), S(
              "div",
              {
                key: 0,
                class: v(e.classes(e.n("navigation"), e.n("navigation-next"), [e.vertical, e.n("--navigation-vertical-next")]))
              },
              [
                Z(o, {
                  "var-swipe-cover": "",
                  class: v(e.n("navigation-next-button")),
                  disabled: !e.loop && e.index === e.length - 1,
                  onClick: n[4] || (n[4] = (a) => e.next())
                }, {
                  default: me(() => [
                    Z(t, {
                      "var-swipe-cover": "",
                      class: v(e.n("navigation-next-button-icon")),
                      name: e.vertical ? "chevron-down" : "chevron-right"
                    }, null, 8, ["class", "name"])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["class", "disabled"])
              ],
              2
              /* CLASS */
            )) : Q("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["name"])
      ]) : Q("v-if", !0),
      R(e.$slots, "indicator", st(Io({
        index: e.index,
        length: e.length,
        hovering: e.hovering,
        prev: e.prev,
        next: e.next,
        to: e.to
      })), () => [
        e.indicator && e.length ? (p(), S(
          "div",
          {
            key: 0,
            class: v(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
          },
          [
            (p(!0), S(
              Ne,
              null,
              Ge(e.length, (a, i) => (p(), S("div", {
                class: v(
                  e.classes(e.n("indicator"), [e.index === i, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])
                ),
                style: F({ background: e.indicatorColor }),
                key: a,
                onClick: (l) => e.to(i)
              }, null, 14, uw))),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          2
          /* CLASS */
        )) : Q("v-if", !0)
      ])
    ],
    2
    /* CLASS */
  )), [
    [r, e.handleHovering]
  ]);
}
const Vf = x({
  name: lw,
  directives: { Hover: kn },
  components: { VarButton: hn, VarIcon: He },
  props: Nf,
  setup(e) {
    const n = C(null), t = C(0), o = M(() => e.vertical), r = C(0), a = C(0), i = C(!1), l = C(0), s = C(!1), { swipeItems: u, bindSwipeItems: d, length: c } = rw(), { popup: f, bindPopup: m } = Km(), {
      deltaX: g,
      deltaY: h,
      moveX: b,
      moveY: w,
      offsetX: E,
      offsetY: T,
      touching: $,
      direction: P,
      startTime: I,
      startTouch: k,
      moveTouch: D,
      endTouch: O
    } = xt(), N = M(() => P.value === (e.vertical ? "vertical" : "horizontal"));
    let z = !1, U = -1;
    d({
      size: t,
      vertical: o
    }), y(m, null), ce(
      () => c.value,
      () => Nt(this, null, function* () {
        yield fn(), q(), oe();
      })
    ), f && ce(
      () => f.show.value,
      (se) => Nt(this, null, function* () {
        se ? (yield fn(), oe()) : H();
      })
    ), gt(oe), wr(H), _t(oe);
    function G(se) {
      return u.find(({ index: ge }) => ge.value === se);
    }
    function j() {
      e.loop && (a.value >= 0 && G(c.value - 1).setTranslate(-r.value), a.value <= -(r.value - t.value) && G(0).setTranslate(r.value), a.value > -(r.value - t.value) && a.value < 0 && (G(c.value - 1).setTranslate(0), G(0).setTranslate(0)));
    }
    function X(se) {
      const ge = mn(se) ? se : Math.floor((a.value - t.value / 2) / -t.value), { loop: De } = e;
      return ge <= -1 ? De ? -1 : 0 : ge >= c.value ? De ? c.value : c.value - 1 : ge;
    }
    function J(se) {
      const { loop: ge } = e;
      return se === -1 ? ge ? c.value - 1 : 0 : se === c.value ? ge ? 0 : c.value - 1 : se;
    }
    function Y(se) {
      return e.loop ? se < 0 ? c.value + se : se >= c.value ? se - c.value : se : ct(se, 0, c.value - 1);
    }
    function le() {
      return Nt(this, null, function* () {
        const se = a.value >= t.value, ge = a.value <= -r.value, De = 0, qe = -(r.value - t.value);
        i.value = !0, (se || ge) && (i.value = !0, a.value = ge ? De : qe, G(0).setTranslate(0), G(c.value - 1).setTranslate(0)), yield fn(), i.value = !1;
      });
    }
    function q() {
      z || (l.value = Y(L(e.initialIndex)), z = !0);
    }
    function ne() {
      const { autoplay: se } = e;
      !se || c.value <= 1 || (H(), U = window.setTimeout(() => {
        de(), ne();
      }, L(se)));
    }
    function H() {
      U && clearTimeout(U);
    }
    function _(se) {
      a.value = se, j();
    }
    function ue(se) {
      return Nt(this, null, function* () {
        c.value <= 1 || !e.touchable || (k(se), H(), yield le(), i.value = !0);
      });
    }
    function V(se) {
      const { touchable: ge, vertical: De } = e;
      !$.value || !ge || (D(se), N.value && (Ln(se), _(a.value + (De ? w.value : b.value))));
    }
    function W() {
      if (!$.value || (O(), !N.value))
        return;
      const { vertical: se, onChange: ge } = e, De = se ? h.value < 0 : g.value < 0, qe = se ? T.value : E.value, Ce = performance.now() - I.value <= aw && qe >= iw ? X(De ? l.value + 1 : l.value - 1) : X();
      i.value = !1, _(Ce * -t.value);
      const ye = l.value;
      l.value = J(Ce), ne(), ye !== l.value && y(ge, l.value);
    }
    function he(se) {
      e.navigation === "hover" && (s.value = se);
    }
    function Ee(se) {
      return e.navigation !== "hover" ? "" : Lu(`--navigation${e.vertical ? "-vertical" : ""}-${se}-animation`);
    }
    function oe() {
      n.value && (i.value = !0, t.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, r.value = t.value * c.value, a.value = l.value * -t.value, u.forEach((se) => {
        se.setTranslate(0);
      }), ne(), setTimeout(() => {
        i.value = !1;
      }));
    }
    function de(se) {
      return Nt(this, null, function* () {
        if (c.value <= 1)
          return;
        q();
        const { loop: ge, onChange: De } = e, qe = l.value;
        if (l.value = Y(qe + 1), (se == null ? void 0 : se.event) !== !1 && y(De, l.value), yield le(), qe === c.value - 1 && ge) {
          G(0).setTranslate(r.value), a.value = c.value * -t.value;
          return;
        }
        qe !== c.value - 1 && (a.value = l.value * -t.value);
      });
    }
    function ke(se) {
      return Nt(this, null, function* () {
        if (c.value <= 1)
          return;
        q();
        const { loop: ge, onChange: De } = e, qe = l.value;
        if (l.value = Y(qe - 1), (se == null ? void 0 : se.event) !== !1 && y(De, l.value), yield le(), qe === 0 && ge) {
          G(c.value - 1).setTranslate(-r.value), a.value = t.value;
          return;
        }
        qe !== 0 && (a.value = l.value * -t.value);
      });
    }
    function Ue(se, ge) {
      if (c.value <= 1 || se === l.value)
        return;
      se = se < 0 ? 0 : se, se = se >= c.value ? c.value : se;
      const De = se > l.value ? de : ke, qe = Math.abs(se - l.value);
      Array.from({ length: qe }).forEach((fe, Ce) => {
        De({ event: Ce === qe - 1 ? ge == null ? void 0 : ge.event : !1 });
      });
    }
    return {
      length: c,
      index: l,
      swipeEl: n,
      trackSize: r,
      trackTranslate: a,
      lockDuration: i,
      hovering: s,
      n: Lu,
      classes: sw,
      handleTouchstart: ue,
      handleTouchmove: V,
      handleTouchend: W,
      next: de,
      prev: ke,
      to: Ue,
      resize: oe,
      toNumber: L,
      handleHovering: he,
      getNavigationAnimation: Ee
    };
  }
});
Vf.render = dw;
var Cl = Vf;
re(Cl);
const pI = Cl;
var $o = Cl;
function cw() {
  const { bindParent: e, index: n, parentProvider: t } = an(Df);
  return e || Sn("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: t,
    bindSwipe: e
  };
}
const { name: fw, n: vw } = ee("swipe-item");
function mw(e, n) {
  return p(), S(
    "div",
    {
      class: v(e.n()),
      style: F({
        width: e.vertical ? void 0 : `${e.size}px`,
        height: e.vertical ? `${e.size}px` : void 0,
        transform: `translate${e.vertical ? "Y" : "X"}(${e.translate}px)`
      })
    },
    [
      R(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const Af = x({
  name: fw,
  setup() {
    const e = C(0), { swipe: n, bindSwipe: t, index: o } = cw(), { size: r, vertical: a } = n;
    t({
      index: o,
      setTranslate: l
    });
    function l(s) {
      e.value = s;
    }
    return {
      n: vw,
      size: r,
      vertical: a,
      translate: e
    };
  }
});
Af.render = mw;
var Sl = Af;
re(Sl);
const gI = Sl;
var wo = Sl, hw = Object.defineProperty, Ru = Object.getOwnPropertySymbols, pw = Object.prototype.hasOwnProperty, gw = Object.prototype.propertyIsEnumerable, Uu = (e, n, t) => n in e ? hw(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Hu = (e, n) => {
  for (var t in n || (n = {}))
    pw.call(n, t) && Uu(e, t, n[t]);
  if (Ru)
    for (var t of Ru(n))
      gw.call(n, t) && Uu(e, t, n[t]);
  return e;
};
const bw = Hu(Hu({
  show: Boolean,
  imagePreventDefault: Boolean,
  images: {
    type: Array,
    default: () => []
  },
  /** @deprecated Use initialIndex to instead. */
  current: String,
  initialIndex: {
    type: [String, Number],
    default: 0
  },
  zoom: {
    type: [String, Number],
    default: 2
  },
  closeable: Boolean,
  "onUpdate:show": A(),
  onLongPress: A()
}, Oe(Nf, ["loop", "indicator", "onChange"])), Oe(Bo, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), { name: yw, n: Fu, classes: $w } = ee("image-preview"), jr = 12, Yu = 200, ww = 350, ju = 200, Cw = 500, Sw = ["onTouchstart"], kw = ["src", "alt"];
function Pw(e, n) {
  const t = ie("var-swipe-item"), o = ie("var-swipe"), r = ie("var-icon"), a = ie("var-popup");
  return p(), $e(a, {
    class: v(e.n("popup")),
    "var-image-preview-cover": "",
    transition: e.n("$-fade"),
    show: e.popupShow,
    overlay: !1,
    "close-on-click-overlay": !1,
    "lock-scroll": e.lockScroll,
    teleport: e.teleport,
    onOpen: e.onOpen,
    onClose: e.onClose,
    onClosed: e.onClosed,
    onOpened: e.onOpened,
    onRouteChange: e.onRouteChange
  }, {
    default: me(() => [
      Z(o, ze({
        ref: "swipeRef",
        class: e.n("swipe"),
        "var-image-preview-cover": "",
        touchable: e.canSwipe,
        indicator: e.indicator && e.images.length > 1,
        "initial-index": e.initialIndex,
        loop: e.loop,
        onChange: e.onChange
      }, e.$attrs), {
        default: me(() => [
          (p(!0), S(
            Ne,
            null,
            Ge(e.images, (i, l) => (p(), $e(t, {
              class: v(e.n("swipe-item")),
              "var-image-preview-cover": "",
              key: i
            }, {
              default: me(() => [
                B("div", {
                  class: v(e.n("zoom-container")),
                  style: F({
                    transform: `scale(${e.scale}) translate(${e.translateX}px, ${e.translateY}px)`,
                    transitionTimingFunction: e.transitionTimingFunction,
                    transitionDuration: e.transitionDuration
                  }),
                  onTouchstart: (s) => e.handleTouchstart(s, l),
                  onTouchmove: n[0] || (n[0] = (...s) => e.handleTouchmove && e.handleTouchmove(...s)),
                  onTouchend: n[1] || (n[1] = (...s) => e.handleTouchend && e.handleTouchend(...s)),
                  onTouchcancel: n[2] || (n[2] = (...s) => e.handleTouchcancel && e.handleTouchcancel(...s))
                }, [
                  B("img", {
                    class: v(e.classes(e.n("image"), [e.isPreventDefault, e.n("--prevent")])),
                    src: i,
                    alt: i
                  }, null, 10, kw)
                ], 46, Sw)
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["class"]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        indicator: me(({ index: i, length: l }) => [
          R(e.$slots, "indicator", {
            index: i,
            length: l
          }, () => [
            e.indicator && e.images.length > 1 ? (p(), S(
              "div",
              {
                key: 0,
                class: v(e.n("indicators"))
              },
              ae(i + 1) + " / " + ae(l),
              3
              /* TEXT, CLASS */
            )) : Q("v-if", !0)
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]),
      R(e.$slots, "close-icon", {}, () => [
        e.closeable ? (p(), $e(r, {
          key: 0,
          class: v(e.n("close-icon")),
          name: "close-circle",
          "var-image-preview-cover": "",
          onClick: e.close
        }, null, 8, ["class", "onClick"])) : Q("v-if", !0)
      ]),
      B(
        "div",
        {
          class: v(e.n("extra"))
        },
        [
          R(e.$slots, "extra")
        ],
        2
        /* CLASS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "transition", "show", "lock-scroll", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]);
}
const zf = x({
  name: yw,
  components: {
    VarSwipe: $o,
    VarSwipeItem: wo,
    VarPopup: vt,
    VarIcon: He
  },
  inheritAttrs: !1,
  props: bw,
  setup(e) {
    const n = C(!1), t = C(1), o = C(0), r = C(0), a = C(), i = C(), l = C(!0), s = C(null), { moveX: u, moveY: d, distance: c, startTime: f, startTouch: m, moveTouch: g, endTouch: h } = xt(), b = M(() => {
      const { images: H, current: _, initialIndex: ue } = e;
      if (ue != null)
        return L(ue);
      const V = H.findIndex((W) => W === _);
      return Math.max(V, 0);
    }), w = M(() => {
      const { imagePreventDefault: H, show: _ } = e;
      return _ && H;
    });
    let E = null, T = null, $ = !1;
    const P = {
      start: null,
      prev: null
    };
    ft(() => document, "contextmenu", ne), ce(
      () => e.show,
      (H) => {
        n.value = H;
      },
      { immediate: !0 }
    );
    function I() {
      t.value = L(e.zoom), l.value = !1, P.prev = null, window.setTimeout(() => {
        a.value = "linear", i.value = "0s";
      }, ju);
    }
    function k() {
      t.value = 1, o.value = 0, r.value = 0, l.value = !0, P.prev = null, a.value = void 0, i.value = void 0;
    }
    function D(H) {
      return P.prev ? c.value <= jr && performance.now() - f.value <= Yu && P.prev === H : !1;
    }
    function O(H) {
      return !H || !P.start || !P.prev ? !1 : c.value <= jr && performance.now() - f.value < ww && (H === P.start || H.parentNode === P.start);
    }
    function N() {
      h(), window.clearTimeout(T), $ = !1, P.start = null;
    }
    function z(H) {
      if (h(), window.clearTimeout(T), $) {
        $ = !1;
        return;
      }
      const _ = O(H.target);
      E = window.setTimeout(() => {
        _ && J(), P.start = null;
      }, Yu);
    }
    function U(H, _) {
      window.clearTimeout(E), window.clearTimeout(T);
      const ue = H.currentTarget;
      if (P.start = ue, T = window.setTimeout(() => {
        $ = !0, y(e.onLongPress, _);
      }, Cw), D(ue)) {
        t.value > 1 ? k() : I();
        return;
      }
      m(H), P.prev = ue;
    }
    function te(H) {
      const { offsetWidth: _, offsetHeight: ue } = H, { naturalWidth: V, naturalHeight: W } = H.querySelector(`.${Fu("image")}`);
      return {
        width: _,
        height: ue,
        imageRadio: W / V,
        rootRadio: ue / _,
        zoom: L(e.zoom)
      };
    }
    function G(H) {
      const { zoom: _, imageRadio: ue, rootRadio: V, width: W, height: he } = te(H);
      if (!ue)
        return 0;
      const Ee = ue > V ? he / ue : W;
      return Math.max(0, (_ * Ee - W) / 2) / _;
    }
    function j(H) {
      const { zoom: _, imageRadio: ue, rootRadio: V, width: W, height: he } = te(H);
      if (!ue)
        return 0;
      const Ee = ue > V ? he : W * ue;
      return Math.max(0, (_ * Ee - he) / 2) / _;
    }
    function X(H) {
      if (!P.prev)
        return;
      g(H);
      const _ = H.currentTarget;
      if (c.value > jr && window.clearTimeout(T), t.value > 1) {
        const ue = G(_), V = j(_);
        o.value = ct(o.value + u.value, -ue, ue), r.value = ct(r.value + d.value, -V, V);
      }
      P.prev = _;
    }
    function J() {
      if (t.value > 1) {
        k(), setTimeout(() => y(e["onUpdate:show"], !1), ju);
        return;
      }
      y(e["onUpdate:show"], !1);
    }
    function Y(H) {
      var _;
      (_ = s.value) == null || _.prev(H);
    }
    function le(H) {
      var _;
      (_ = s.value) == null || _.next(H);
    }
    function q(H, _) {
      var ue;
      (ue = s.value) == null || ue.to(H, _);
    }
    function ne(H) {
      e.imagePreventDefault && e.show && Ln(H);
    }
    return {
      swipeRef: s,
      isPreventDefault: w,
      initialIndex: b,
      popupShow: n,
      scale: t,
      translateX: o,
      translateY: r,
      canSwipe: l,
      transitionTimingFunction: a,
      transitionDuration: i,
      n: Fu,
      classes: $w,
      handleTouchstart: U,
      handleTouchmove: X,
      handleTouchend: z,
      handleTouchcancel: N,
      close: J,
      prev: Y,
      next: le,
      to: q
    };
  }
});
zf.render = Pw;
var Lo = zf, Ow = Object.defineProperty, Tw = Object.defineProperties, Ew = Object.getOwnPropertyDescriptors, Wu = Object.getOwnPropertySymbols, Iw = Object.prototype.hasOwnProperty, Bw = Object.prototype.propertyIsEnumerable, qu = (e, n, t) => n in e ? Ow(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Xo = (e, n) => {
  for (var t in n || (n = {}))
    Iw.call(n, t) && qu(e, t, n[t]);
  if (Wu)
    for (var t of Wu(n))
      Bw.call(n, t) && qu(e, t, n[t]);
  return e;
}, Gu = (e, n) => Tw(e, Ew(n));
let rt, uo = {};
function Mw(e = {}) {
  return nn(e) ? Gu(Xo({}, uo), { images: [e] }) : Ae(e) ? Gu(Xo({}, uo), { images: e }) : Xo(Xo({}, uo), e);
}
function Mt(e) {
  if (!Jn())
    return;
  Mt.close();
  const n = Mw(e), t = je(n);
  t.teleport = "body", rt = t;
  const { unmountInstance: o } = eo(Lo, t, {
    onClose: () => y(t.onClose),
    onClosed: () => {
      y(t.onClosed), o(), rt === t && (rt = null);
    },
    onRouteChange: () => {
      o(), rt === t && (rt = null);
    },
    "onUpdate:show": (r) => {
      t.show = r;
    }
  });
  t.show = !0;
}
Mt.close = () => {
  if (rt != null) {
    const e = rt;
    rt = null, Ye().then(() => {
      e.show = !1;
    });
  }
};
Mt.setDefaultOptions = (e) => {
  uo = e;
};
Mt.resetDefaultOptions = () => {
  uo = {};
};
Mt.Component = Lo;
re(Lo);
re(Lo, Mt);
const bI = Lo;
var Co = Mt;
const or = {
  offsetTop: {
    type: [String, Number],
    default: 0
  },
  zIndex: {
    type: [String, Number],
    default: 10
  },
  cssMode: Boolean,
  disabled: Boolean,
  onScroll: A()
};
var Xu = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: Dw, n: Nw, classes: Vw } = ee("sticky");
function Aw(e, n) {
  return p(), S(
    "div",
    {
      class: v(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
      ref: "stickyEl",
      style: F({
        zIndex: e.toNumber(e.zIndex),
        top: e.enableCSSMode ? `${e.offsetTop}px` : void 0,
        width: e.enableFixedMode ? e.fixedWidth : void 0,
        height: e.enableFixedMode ? e.fixedHeight : void 0
      })
    },
    [
      B(
        "div",
        {
          class: v(e.n("wrapper")),
          ref: "wrapperEl",
          style: F({
            zIndex: e.toNumber(e.zIndex),
            position: e.enableFixedMode ? "fixed" : void 0,
            width: e.enableFixedMode ? e.fixedWrapperWidth : void 0,
            height: e.enableFixedMode ? e.fixedWrapperHeight : void 0,
            left: e.enableFixedMode ? e.fixedLeft : void 0,
            top: e.enableFixedMode ? e.fixedTop : void 0
          })
        },
        [
          R(e.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  );
}
const Lf = x({
  name: Dw,
  props: or,
  setup(e) {
    const n = C(null), t = C(null), o = C(!1), r = C("0px"), a = C("0px"), i = C("auto"), l = C("auto"), s = C("auto"), u = C("auto"), d = M(() => !e.disabled && e.cssMode), c = M(() => !e.disabled && !e.cssMode && o.value), f = M(() => Fe(e.offsetTop));
    let m;
    ce(() => e.disabled, b), rn(w), wr(E), _t(b), ft(() => window, "scroll", h);
    function g() {
      const { cssMode: T, disabled: $ } = e;
      if ($)
        return;
      let P = 0;
      if (m !== window) {
        const { top: z } = en(m);
        P = z;
      }
      const I = t.value, k = n.value, { top: D, left: O } = en(k), N = D - P;
      return N <= f.value ? (T || (i.value = `${k.offsetWidth}px`, l.value = `${k.offsetHeight}px`, r.value = `${P + f.value}px`, a.value = `${O}px`, s.value = `${I.offsetWidth}px`, u.value = `${I.offsetHeight}px`, o.value = !0), {
        offsetTop: f.value,
        isFixed: !0
      }) : (o.value = !1, {
        offsetTop: N,
        isFixed: !1
      });
    }
    function h() {
      if (!m)
        return;
      const T = g();
      T && y(e.onScroll, T.offsetTop, T.isFixed);
    }
    function b() {
      return Xu(this, null, function* () {
        o.value = !1, yield _o(), g();
      });
    }
    function w() {
      return Xu(this, null, function* () {
        yield fn(), m = mt(n.value), m !== window && m.addEventListener("scroll", h), h();
      });
    }
    function E() {
      m !== window && m.removeEventListener("scroll", h);
    }
    return {
      stickyEl: n,
      wrapperEl: t,
      isFixed: o,
      offsetTop: f,
      fixedTop: r,
      fixedLeft: a,
      fixedWidth: i,
      fixedHeight: l,
      fixedWrapperWidth: s,
      fixedWrapperHeight: u,
      enableCSSMode: d,
      enableFixedMode: c,
      n: Nw,
      classes: Vw,
      resize: b,
      toNumber: L
    };
  }
});
Lf.render = Aw;
var kl = Lf;
re(kl);
const yI = kl;
var So = kl;
const Rf = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function zw() {
  const { bindChildren: e, length: n, childProviders: t } = ln(
    Rf
  );
  return {
    length: n,
    indexAnchors: t,
    bindIndexAnchors: e
  };
}
function Lw() {
  const { parentProvider: e, index: n, bindParent: t } = an(
    Rf
  );
  return t || Sn("IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: n,
    indexBar: e,
    bindIndexBar: t
  };
}
const Rw = {
  index: [Number, String]
}, { name: Uw, n: Hw, classes: Fw } = ee("index-anchor");
function Yw(e, n) {
  return p(), $e(Jt(e.sticky ? e.n("$-sticky") : e.Transition), {
    "offset-top": e.sticky ? e.stickyOffsetTop : null,
    "z-index": e.sticky ? e.zIndex : null,
    disabled: e.disabled && !e.cssMode,
    "css-mode": e.cssMode,
    ref: "anchorEl"
  }, {
    default: me(() => [
      B(
        "div",
        ze({
          class: e.n()
        }, e.$attrs),
        [
          R(e.$slots, "default", {}, () => [
            Ie(
              ae(e.name),
              1
              /* TEXT */
            )
          ])
        ],
        16
        /* FULL_PROPS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["offset-top", "z-index", "disabled", "css-mode"]);
}
const Uf = x({
  name: Uw,
  components: { VarSticky: So },
  inheritAttrs: !1,
  props: Rw,
  setup(e) {
    const n = C(0), t = C(!1), o = M(() => e.index), r = C(null), { index: a, indexBar: i, bindIndexBar: l } = Lw(), { active: s, sticky: u, cssMode: d, stickyOffsetTop: c, zIndex: f } = i;
    l({
      index: a,
      name: o,
      ownTop: n,
      setOwnTop: g,
      setDisabled: h
    });
    function g() {
      r.value && (n.value = r.value.$el ? r.value.$el.offsetTop : r.value.offsetTop);
    }
    function h(b) {
      t.value = b;
    }
    return {
      n: Hw,
      classes: Fw,
      name: o,
      anchorEl: r,
      active: s,
      sticky: u,
      zIndex: f,
      disabled: t,
      cssMode: d,
      stickyOffsetTop: c,
      Transition: We
    };
  }
});
Uf.render = Yw;
var Pl = Uf;
re(Pl);
const $I = Pl;
var Na = Pl;
const jw = {
  sticky: {
    type: Boolean,
    default: !0
  },
  stickyOffsetTop: {
    type: [String, Number],
    default: 0
  },
  /** @deprecated Use stickyCssMode to instead. */
  cssMode: Boolean,
  stickyCssMode: Boolean,
  hideList: Boolean,
  zIndex: {
    type: [Number, String],
    default: 1
  },
  highlightColor: String,
  duration: {
    type: [Number, String],
    default: 0
  },
  onClick: A(),
  onChange: A()
};
var Ko = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: Ww, n: qw, classes: Gw } = ee("index-bar"), Xw = ["onClick"];
function Kw(e, n) {
  return p(), S(
    "div",
    {
      class: v(e.n()),
      ref: "barEl"
    },
    [
      R(e.$slots, "default"),
      B(
        "ul",
        {
          class: v(e.n("anchor-list")),
          style: F({ zIndex: e.toNumber(e.zIndex) + 2, display: e.hideList ? "none" : "block" })
        },
        [
          (p(!0), S(
            Ne,
            null,
            Ge(e.anchorNameList, (t) => (p(), S("li", {
              key: t,
              class: v(e.classes(e.n("anchor-item"), [e.active === t, e.n("anchor-item--active")])),
              style: F({ color: e.active === t && e.highlightColor ? e.highlightColor : "" }),
              onClick: (o) => e.anchorClick({ anchorName: t, manualCall: !0 })
            }, ae(t), 15, Xw))),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    2
    /* CLASS */
  );
}
const Hf = x({
  name: Ww,
  props: jw,
  setup(e) {
    const n = C(""), t = C(null), o = C([]), r = C(), a = M(() => e.sticky), i = M(() => e.stickyCssMode || e.cssMode), l = M(() => Fe(e.stickyOffsetTop)), s = M(() => e.zIndex), { length: u, indexAnchors: d, bindIndexAnchors: c } = zw();
    let f = null, m = !1;
    const g = {
      active: r,
      sticky: a,
      cssMode: i,
      stickyOffsetTop: l,
      zIndex: s
    };
    ce(
      () => u.value,
      () => Ko(this, null, function* () {
        yield fn(), d.forEach(({ name: k, setOwnTop: D }) => {
          k.value && o.value.push(k.value), D();
        });
      })
    ), rn(() => Ko(this, null, function* () {
      yield T(), $();
    })), $r(P), Kt(() => {
      m = !0, P();
    }), gt(() => {
      !m || r.value === void 0 || (E({
        anchorName: r.value,
        options: { event: !1 }
      }), m = !1);
    }), c(g);
    function h(k, D) {
      const O = co(k) ? k.name.value : k;
      O === r.value || O === void 0 || (r.value = O, (D == null ? void 0 : D.event) !== !1 && y(e.onChange, O));
    }
    function b() {
      if (bi(f))
        return 0;
      const { top: k } = en(f), { scrollTop: D } = f, { top: O } = en(t.value);
      return D - k + O;
    }
    function w() {
      const k = Ht(f), D = f === window ? document.body.scrollHeight : f.scrollHeight, O = b();
      d.forEach((N, z) => {
        const U = N.ownTop.value, te = k - U + l.value - O, G = z === d.length - 1 ? D : d[z + 1].ownTop.value - N.ownTop.value;
        N.setDisabled(!0), te >= 0 && te < G && n.value === "" && (N.setDisabled(!1), h(N));
      });
    }
    function E(k) {
      return Ko(this, arguments, function* ({ anchorName: D, manualCall: O = !1, options: N }) {
        if (O && y(e.onClick, D), D === r.value && !m)
          return;
        const z = d.find(({ name: j }) => D === j.value);
        if (!z)
          return;
        const U = b(), te = z.ownTop.value - l.value + U, G = yi(f);
        n.value = D, h(D, N), yield vo(f, {
          left: G,
          top: te,
          animation: nc,
          duration: L(e.duration)
        }), yield fn(), n.value = "";
      });
    }
    function T() {
      return Ko(this, null, function* () {
        yield fn(), f = mt(t.value);
      });
    }
    function $() {
      f.addEventListener("scroll", w);
    }
    function P() {
      f.removeEventListener("scroll", w);
    }
    function I(k, D) {
      fo(() => E({ anchorName: k, options: D }));
    }
    return {
      barEl: t,
      active: r,
      zIndex: s,
      anchorNameList: o,
      n: qw,
      classes: Gw,
      toNumber: L,
      scrollTo: I,
      anchorClick: E
    };
  }
});
Hf.render = Kw;
var Ol = Hf;
re(Ol);
const wI = Ol;
var Va = Ol, Zw = Object.defineProperty, Ku = Object.getOwnPropertySymbols, Jw = Object.prototype.hasOwnProperty, Qw = Object.prototype.propertyIsEnumerable, Zu = (e, n, t) => n in e ? Zw(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, _w = (e, n) => {
  for (var t in n || (n = {}))
    Jw.call(n, t) && Zu(e, t, n[t]);
  if (Ku)
    for (var t of Ku(n))
      Qw.call(n, t) && Zu(e, t, n[t]);
  return e;
};
const xw = _w({
  modelValue: String,
  modelModifiers: {
    type: Object,
    default: () => ({})
  },
  type: {
    type: String,
    default: "text"
  },
  textarea: Boolean,
  rows: {
    type: [String, Number],
    default: 8
  },
  maxlength: [String, Number],
  readonly: Boolean,
  resize: Boolean,
  autofocus: Boolean,
  validateTrigger: {
    type: Array,
    default: () => ["onInput", "onClear"]
  },
  rules: Array,
  enterkeyhint: String,
  onFocus: A(),
  onBlur: A(),
  onInput: A(),
  onChange: A(),
  onClear: A(),
  "onUpdate:modelValue": A()
}, Oe(bl, [
  "size",
  "variant",
  "placeholder",
  "line",
  "hint",
  "textColor",
  "focusColor",
  "blurColor",
  "disabled",
  "clearable",
  "onClick"
])), { name: eC, n: nC, classes: tC } = ee("input"), oC = ["placeholder", "enterkeyhint"], rC = ["id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], aC = ["id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function iC(e, n) {
  const t = ie("var-field-decorator"), o = ie("var-form-details");
  return p(), S(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"))),
      onMousedown: n[13] || (n[13] = (...r) => e.handleMousedown && e.handleMousedown(...r))
    },
    [
      Z(
        t,
        st(Io({
          value: e.modelValue,
          id: e.id,
          size: e.size,
          variant: e.variant,
          placeholder: e.placeholder,
          line: e.line,
          hint: e.hint,
          textColor: e.textColor,
          focusColor: e.focusColor,
          blurColor: e.blurColor,
          isFocus: e.isFocus,
          errorMessage: e.errorMessage,
          formDisabled: e.formDisabled,
          disabled: e.disabled,
          clearable: e.clearable,
          cursor: e.cursor,
          composing: e.isComposing,
          onClick: e.handleClick,
          onClear: e.handleClear
        })),
        rr({
          "append-icon": me(() => [
            R(e.$slots, "append-icon")
          ]),
          default: me(() => [
            e.normalizedType === "password" ? (p(), S("input", {
              key: 0,
              tabindex: "-1",
              class: v(e.n("autocomplete")),
              placeholder: e.hint ? void 0 : e.placeholder,
              style: F({
                "--input-placeholder-color": e.placeholderColor
              }),
              enterkeyhint: e.enterkeyhint
            }, null, 14, oC)) : Q("v-if", !0),
            e.textarea ? (p(), S("textarea", {
              key: 1,
              class: v(
                e.classes(
                  e.n("input"),
                  e.n("--textarea"),
                  [e.formDisabled || e.disabled, e.n("--disabled")],
                  [e.errorMessage, e.n("--error")],
                  [e.errorMessage, e.n("--caret-error")]
                )
              ),
              ref: "el",
              autocomplete: "new-password",
              id: e.id,
              disabled: e.formDisabled || e.disabled,
              readonly: e.formReadonly || e.readonly,
              type: e.normalizedType,
              value: e.modelValue,
              placeholder: e.hint ? void 0 : e.placeholder,
              maxlength: e.maxlength,
              rows: e.rows,
              enterkeyhint: e.enterkeyhint,
              inputmode: e.type === "number" ? "numeric" : void 0,
              style: F({
                color: e.errorMessage ? void 0 : e.textColor,
                caretColor: e.errorMessage ? void 0 : e.focusColor,
                resize: e.resize ? "vertical" : "none",
                "--input-placeholder-color": e.placeholderColor
              }),
              onFocus: n[0] || (n[0] = (...r) => e.handleFocus && e.handleFocus(...r)),
              onBlur: n[1] || (n[1] = (...r) => e.handleBlur && e.handleBlur(...r)),
              onInput: n[2] || (n[2] = (...r) => e.handleInput && e.handleInput(...r)),
              onChange: n[3] || (n[3] = (...r) => e.handleChange && e.handleChange(...r)),
              onCompositionstart: n[4] || (n[4] = (...r) => e.handleCompositionStart && e.handleCompositionStart(...r)),
              onCompositionend: n[5] || (n[5] = (...r) => e.handleCompositionEnd && e.handleCompositionEnd(...r))
            }, `
      `, 46, rC)) : (p(), S("input", {
              key: 2,
              class: v(
                e.classes(
                  e.n("input"),
                  [e.formDisabled || e.disabled, e.n("--disabled")],
                  [e.errorMessage, e.n("--error")],
                  [e.errorMessage, e.n("--caret-error")]
                )
              ),
              ref: "el",
              autocomplete: "new-password",
              id: e.id,
              disabled: e.formDisabled || e.disabled,
              readonly: e.formReadonly || e.readonly,
              type: e.normalizedType,
              value: e.modelValue,
              placeholder: e.hint ? void 0 : e.placeholder,
              maxlength: e.maxlength,
              enterkeyhint: e.enterkeyhint,
              inputmode: e.type === "number" ? "numeric" : void 0,
              style: F({
                color: e.errorMessage ? void 0 : e.textColor,
                caretColor: e.errorMessage ? void 0 : e.focusColor,
                "--input-placeholder-color": e.placeholderColor
              }),
              onFocus: n[6] || (n[6] = (...r) => e.handleFocus && e.handleFocus(...r)),
              onBlur: n[7] || (n[7] = (...r) => e.handleBlur && e.handleBlur(...r)),
              onInput: n[8] || (n[8] = (...r) => e.handleInput && e.handleInput(...r)),
              onChange: n[9] || (n[9] = (...r) => e.handleChange && e.handleChange(...r)),
              onCompositionstart: n[10] || (n[10] = (...r) => e.handleCompositionStart && e.handleCompositionStart(...r)),
              onCompositionend: n[11] || (n[11] = (...r) => e.handleCompositionEnd && e.handleCompositionEnd(...r))
            }, null, 46, aC))
          ]),
          _: 2
          /* DYNAMIC */
        }, [
          e.$slots["prepend-icon"] ? {
            name: "prepend-icon",
            fn: me(() => [
              R(e.$slots, "prepend-icon")
            ]),
            key: "0"
          } : void 0
        ]),
        1040
        /* FULL_PROPS, DYNAMIC_SLOTS */
      ),
      Z(o, {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText,
        onMousedown: n[12] || (n[12] = Cn(() => {
        }, ["stop"]))
      }, rr({
        _: 2
        /* DYNAMIC */
      }, [
        e.$slots["extra-message"] ? {
          name: "extra-message",
          fn: me(() => [
            R(e.$slots, "extra-message")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["error-message", "extra-message"])
    ],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
const Ff = x({
  name: eC,
  components: {
    VarFormDetails: pn,
    VarFieldDecorator: yo
  },
  props: xw,
  setup(e) {
    const n = Dd(), t = C(null), o = C(!1), r = C(!1), { bindForm: a, form: i } = Mn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = Bn(), c = M(() => e.disabled || e.readonly ? "" : "text"), f = M(() => e.type === "number" ? "text" : e.type), m = M(() => {
      const { maxlength: Y, modelValue: le } = e;
      return Y ? Rn(le) ? `0 / ${Y}` : `${String(le).length}/${Y}` : "";
    }), g = M(() => {
      const { hint: Y, blurColor: le, focusColor: q } = e;
      if (!Y)
        return l.value ? "var(--field-decorator-error-color)" : o.value ? q || "var(--field-decorator-focus-color)" : le || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    });
    y(a, {
      reset: G,
      validate: j,
      resetValidation: d
    }), rn(() => {
      e.autofocus && X();
    });
    function b(Y) {
      Ye(() => {
        const { validateTrigger: le, rules: q, modelValue: ne } = e;
        s(le, Y, q, ne);
      });
    }
    function w(Y) {
      o.value = !0, y(e.onFocus, Y), b("onFocus");
    }
    function E(Y) {
      o.value = !1, y(e.onBlur, Y), b("onBlur");
    }
    function T(Y) {
      const le = Y.target;
      let { value: q } = le;
      return e.type === "number" && (q = N(q)), U(z(q));
    }
    function $() {
      r.value = !0;
    }
    function P(Y) {
      r.value && (r.value = !1, Y.target.dispatchEvent(new Event("input")));
    }
    function I(Y) {
      if (r.value)
        return;
      const le = T(Y);
      y(e["onUpdate:modelValue"], le), y(e.onInput, le, Y), b("onInput");
    }
    function k(Y) {
      const le = T(Y);
      y(e.onChange, le, Y), b("onChange");
    }
    function D() {
      const { disabled: Y, readonly: le, clearable: q, onClear: ne } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || Y || le || !q || (y(e["onUpdate:modelValue"], ""), y(ne, ""), b("onClear"));
    }
    function O(Y) {
      const { disabled: le, onClick: q } = e;
      i != null && i.disabled.value || le || (y(q, Y), b("onClick"));
    }
    function N(Y) {
      const le = Y.indexOf("-"), q = Y.indexOf(".");
      return le > -1 && (Y = le === 0 ? "-" + Y.replace(/-/g, "") : Y.replace(/-/g, "")), q > -1 && (Y = Y.slice(0, q + 1) + Y.slice(q).replace(/\./g, "")), Y.replace(/[^-0-9.]/g, "");
    }
    function z(Y) {
      return e.modelModifiers.trim ? Y.trim() : Y;
    }
    function U(Y) {
      return e.maxlength ? Y.slice(0, L(e.maxlength)) : Y;
    }
    function te(Y) {
      const { disabled: le } = e;
      i != null && i.disabled.value || le || Y.target === t.value || (X(), Ln(Y));
    }
    function G() {
      y(e["onUpdate:modelValue"], ""), d();
    }
    function j() {
      return u(e.rules, e.modelValue);
    }
    function X() {
      var Y;
      (Y = t.value) == null || Y.focus();
    }
    function J() {
      t.value.blur();
    }
    return {
      el: t,
      id: n,
      isFocus: o,
      isComposing: r,
      errorMessage: l,
      placeholderColor: g,
      normalizedType: f,
      cursor: c,
      maxlengthText: m,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: nC,
      classes: tC,
      isEmpty: Rn,
      handleFocus: w,
      handleBlur: E,
      handleInput: I,
      handleChange: k,
      handleClear: D,
      handleClick: O,
      handleCompositionStart: $,
      handleCompositionEnd: P,
      handleMousedown: te,
      validate: j,
      resetValidation: d,
      reset: G,
      focus: X,
      blur: J
    };
  }
});
Ff.render = iC;
var Tl = Ff;
re(Tl);
const CI = Tl;
var yr = Tl;
const lC = {
  type: {
    type: String,
    default: "default"
  },
  href: String,
  target: String,
  rel: String,
  to: [String, Object],
  replace: Boolean,
  underline: {
    type: String,
    default: "always"
  },
  disabled: Boolean,
  textSize: [String, Number],
  textColor: String,
  onClick: A()
}, { name: sC, n: uC, classes: dC } = ee("link");
function cC(e, n) {
  return p(), $e(Jt(e.tag), ze(e.linkProps, {
    class: e.classes(
      e.n(),
      e.n("$--box"),
      e.n("$--inline-flex"),
      e.n(`--${e.type}`),
      [e.underline !== "none", e.n(`--underline-${e.underline}`)],
      [e.disabled, e.n("--disabled")]
    ),
    style: {
      color: e.textColor,
      fontSize: e.toSizeUnit(e.textSize)
    },
    onClick: e.handleClick
  }), {
    default: me(() => [
      R(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["class", "style", "onClick"]);
}
const Yf = x({
  name: sC,
  props: lC,
  setup(e) {
    const n = M(() => e.disabled ? "span" : e.href ? "a" : e.to ? "router-link" : "a"), t = M(() => {
      const { disabled: r, href: a, target: i, to: l, replace: s, rel: u } = e;
      return r ? {} : a ? { href: a, target: i, rel: u } : l ? { to: l, target: i, replace: s } : {};
    });
    function o(r) {
      e.disabled || y(e.onClick, r);
    }
    return {
      tag: n,
      linkProps: t,
      n: uC,
      classes: dC,
      handleClick: o,
      toSizeUnit: Se
    };
  }
});
Yf.render = cC;
var El = Yf;
re(El);
const SI = El;
var Aa = El;
const fC = {
  loading: Boolean,
  immediateCheck: {
    type: Boolean,
    default: !0
  },
  finished: Boolean,
  error: Boolean,
  offset: {
    type: [String, Number],
    default: 0
  },
  loadingText: String,
  finishedText: String,
  errorText: String,
  onLoad: A(),
  "onUpdate:loading": A(),
  "onUpdate:error": A()
}, jf = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function vC() {
  const { bindChildren: e, childProviders: n, length: t } = ln(
    jf
  );
  return {
    length: t,
    tabItemList: n,
    bindTabItem: e
  };
}
const Wf = Symbol("TAB_ITEM_BIND_LIST_KEY");
function mC() {
  const { parentProvider: e, bindParent: n, index: t } = an(
    jf
  );
  return n || Sn("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: t,
    tabsItems: e,
    bindTabsItems: n
  };
}
function hC() {
  const { childProviders: e, bindChildren: n, length: t } = ln(Wf);
  return {
    length: t,
    lists: e,
    bindLists: n
  };
}
function pC() {
  const { parentProvider: e, bindParent: n, index: t } = an(Wf);
  return {
    index: t,
    tabItem: e,
    bindTabItem: n
  };
}
var gC = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: bC, n: yC, classes: $C } = ee("list");
function wC(e, n) {
  const t = ie("var-loading"), o = Ve("ripple");
  return p(), S(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [
      R(e.$slots, "default"),
      e.loading ? R(e.$slots, "loading", { key: 0 }, () => {
        var r;
        return [
          B(
            "div",
            {
              class: v(e.n("loading"))
            },
            [
              B(
                "div",
                {
                  class: v(e.n("loading-text"))
                },
                ae((r = e.loadingText) != null ? r : e.pack.listLoadingText),
                3
                /* TEXT, CLASS */
              ),
              Z(t, {
                size: "mini",
                radius: 10
              })
            ],
            2
            /* CLASS */
          )
        ];
      }) : Q("v-if", !0),
      e.finished ? R(e.$slots, "finished", { key: 1 }, () => {
        var r;
        return [
          B(
            "div",
            {
              class: v(e.n("finished"))
            },
            ae((r = e.finishedText) != null ? r : e.pack.listFinishedText),
            3
            /* TEXT, CLASS */
          )
        ];
      }) : Q("v-if", !0),
      e.error ? R(e.$slots, "error", { key: 2 }, () => {
        var r;
        return [
          Te((p(), S(
            "div",
            {
              class: v(e.n("error")),
              onClick: n[0] || (n[0] = (...a) => e.load && e.load(...a))
            },
            [
              Ie(
                ae((r = e.errorText) != null ? r : e.pack.listErrorText),
                1
                /* TEXT */
              )
            ],
            2
            /* CLASS */
          )), [
            [o]
          ])
        ];
      }) : Q("v-if", !0),
      B(
        "div",
        {
          class: v(e.n("detector")),
          ref: "detectorEl"
        },
        null,
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
const qf = x({
  name: bC,
  directives: { Ripple: Ze },
  components: { VarLoading: Yt },
  props: fC,
  setup(e) {
    const n = C(null), t = C(null), { tabItem: o, bindTabItem: r } = pC();
    let a;
    y(r, {}), o && ce(() => o.current.value, u), ce(() => [e.loading, e.error, e.finished], u), rn(() => {
      a = mt(n.value), a.addEventListener("scroll", u), e.immediateCheck && u();
    }), wr(s);
    function i() {
      y(e["onUpdate:error"], !1), y(e["onUpdate:loading"], !0), y(e.onLoad);
    }
    function l() {
      const { bottom: d } = en(a), { bottom: c } = en(t.value);
      return Math.floor(c) - Fe(e.offset) <= d;
    }
    function s() {
      a.removeEventListener("scroll", u);
    }
    function u() {
      return gC(this, null, function* () {
        yield Ye(), !(e.loading || e.finished || e.error || (o == null ? void 0 : o.current.value) === !1 || !l()) && i();
      });
    }
    return {
      pack: Qe,
      listEl: n,
      detectorEl: t,
      isNumber: mn,
      load: i,
      check: u,
      n: yC,
      classes: $C
    };
  }
});
qf.render = wC;
var Il = qf;
re(Il);
const kI = Il;
var za = Il;
const CC = {
  value: {
    type: Number,
    default: 0
  },
  opacity: {
    type: Number,
    default: 0
  },
  error: Boolean,
  color: String,
  errorColor: String,
  height: [Number, String],
  top: [Number, String]
}, {
  name: SC,
  classes: kC,
  n: Ju
} = ee("loading-bar");
var PC = x({
  name: SC,
  props: CC,
  setup(e) {
    return () => Z("div", {
      class: kC(Ju(), [e.error, Ju("--error")]),
      style: {
        zIndex: wn.zIndex + 10,
        width: `${e.value}%`,
        opacity: e.opacity,
        height: Se(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: Se(e.top)
      }
    }, null);
  }
});
let Gf, Xf, Dr, Kf, Qu, Zf = {};
const OC = {
  value: 0,
  opacity: 0,
  error: !1
}, tn = je(OC), TC = (e) => {
  Object.assign(tn, e);
}, EC = (e) => {
  Object.assign(tn, e), Zf = e;
}, IC = () => {
  Object.keys(Zf).forEach((e) => {
    tn[e] !== void 0 && (tn[e] = void 0);
  });
}, Jf = () => {
  Qu || (Qu = !0, eo(PC, tn));
}, Bl = () => {
  Gf = window.setTimeout(() => {
    if (tn.value >= 95)
      return;
    let e = Math.random();
    tn.value < 70 && (e = Math.round(5 * Math.random())), tn.value += e, Bl();
  }, 200);
}, Ml = () => {
  window.clearTimeout(Xf), window.clearTimeout(Gf), window.clearTimeout(Dr), window.clearTimeout(Kf);
}, BC = () => {
  Ml(), tn.error = !1, tn.value = 0, Jf(), Dr = window.setTimeout(() => {
    tn.opacity = 1;
  }, 200), Bl();
}, Qf = () => {
  Ml(), tn.value = 100, Dr = window.setTimeout(() => {
    tn.opacity = 0, Xf = window.setTimeout(() => {
      tn.error = !1;
    }, 250);
  }, 300);
}, MC = () => {
  Ml(), tn.error = !0, tn.value === 100 && (tn.value = 0), Jf(), Dr = window.setTimeout(() => {
    tn.opacity = 1;
  }, 200), Bl(), Kf = window.setTimeout(Qf, 300);
}, _f = {
  start: BC,
  finish: Qf,
  error: MC,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: TC,
  setDefaultOptions: EC,
  resetDefaultOptions: IC
}, PI = _f;
var La = _f;
const xf = {
  show: Boolean,
  disabled: Boolean,
  trigger: {
    type: String,
    default: "click"
  },
  reference: String,
  placement: {
    type: String,
    default: "cover-top-start"
  },
  strategy: {
    type: String,
    default: "absolute"
  },
  offsetX: {
    type: [Number, String],
    default: 0
  },
  offsetY: {
    type: [Number, String],
    default: 0
  },
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  sameWidth: Boolean,
  elevation: {
    type: [Boolean, String, Number],
    default: !0
  },
  defaultStyle: {
    type: Boolean,
    default: !0
  },
  popoverClass: String,
  closeOnClickReference: Boolean,
  onOpen: A(),
  onOpened: A(),
  onClose: A(),
  onClosed: A(),
  onClickOutside: A(),
  "onUpdate:show": A()
}, { name: DC, n: NC, classes: VC } = ee("menu");
function AC(e, n) {
  return p(), S(
    "div",
    {
      ref: "host",
      class: v(e.classes(e.n(), e.n("$--box"))),
      onClick: n[3] || (n[3] = (...t) => e.handleHostClick && e.handleHostClick(...t)),
      onMouseenter: n[4] || (n[4] = (...t) => e.handleHostMouseenter && e.handleHostMouseenter(...t)),
      onMouseleave: n[5] || (n[5] = (...t) => e.handleHostMouseleave && e.handleHostMouseleave(...t))
    },
    [
      R(e.$slots, "default"),
      (p(), $e(jn, {
        to: e.teleport === !1 ? void 0 : e.teleport,
        disabled: e.teleportDisabled || e.teleport === !1
      }, [
        Z(We, {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.handleClosed,
          persisted: ""
        }, {
          default: me(() => [
            Te(B(
              "div",
              {
                ref: "popover",
                style: F({
                  zIndex: e.zIndex,
                  width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
                }),
                class: v(
                  e.classes(
                    e.n("menu"),
                    e.n("$--box"),
                    e.popoverClass,
                    [e.defaultStyle, e.n("--menu-background-color")],
                    [e.defaultStyle, e.formatElevation(e.elevation, 3)]
                  )
                ),
                onClick: n[0] || (n[0] = Cn(() => {
                }, ["stop"])),
                onMouseenter: n[1] || (n[1] = (...t) => e.handlePopoverMouseenter && e.handlePopoverMouseenter(...t)),
                onMouseleave: n[2] || (n[2] = (...t) => e.handlePopoverMouseleave && e.handlePopoverMouseleave(...t))
              },
              [
                R(e.$slots, "menu")
              ],
              38
              /* CLASS, STYLE, HYDRATE_EVENTS */
            ), [
              [Un, e.show]
            ])
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["name", "onAfterEnter", "onAfterLeave"])
      ], 8, ["to", "disabled"]))
    ],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
const ev = x({
  name: DC,
  props: xf,
  setup(e) {
    const { disabled: n } = Et(), {
      popover: t,
      host: o,
      hostSize: r,
      show: a,
      zIndex: i,
      handleHostClick: l,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: d,
      handlePopoverMouseleave: c,
      handlePopoverClose: f,
      handleClosed: m,
      // expose
      open: g,
      // expose
      close: h,
      // expose
      resize: b
    } = Pf(e);
    return {
      popover: t,
      host: o,
      hostSize: r,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      formatElevation: un,
      toSizeUnit: Se,
      n: NC,
      classes: VC,
      handleHostClick: l,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: d,
      handlePopoverMouseleave: c,
      handlePopoverClose: f,
      handleClosed: m,
      resize: b,
      open: g,
      close: h
    };
  }
});
ev.render = AC;
var Dl = ev;
re(Dl);
const OI = Dl;
var Xt = Dl;
const nv = Symbol("MENU_SELECT_BIND_MENU_OPTION_KEY");
function zC() {
  const { length: e, childProviders: n, bindChildren: t } = ln(
    nv
  );
  return {
    length: e,
    menuOptions: n,
    bindMenuOptions: t
  };
}
function LC() {
  const { index: e, parentProvider: n, bindParent: t } = an(
    nv
  );
  return t || Sn("MenuOption", "<var-menu-option/> must in <var-menu-select/>"), {
    index: e,
    menuSelect: n,
    bindMenuSelect: t
  };
}
const RC = {
  label: {},
  value: {},
  disabled: Boolean
}, { name: UC, n: HC, classes: FC } = ee("menu-option");
function YC(e, n) {
  const t = ie("var-checkbox"), o = ie("var-hover-overlay"), r = Ve("ripple"), a = Ve("hover");
  return Te((p(), S(
    "div",
    {
      class: v(
        e.classes(e.n(), e.n("$--box"), e.n(`--${e.size}`), [e.optionSelected, e.n("--selected-color")], [e.disabled, e.n("--disabled")])
      ),
      onClick: n[2] || (n[2] = (...i) => e.handleClick && e.handleClick(...i))
    },
    [
      B(
        "div",
        {
          class: v(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")]))
        },
        null,
        2
        /* CLASS */
      ),
      e.multiple ? (p(), $e(t, {
        key: 0,
        ref: "checkbox",
        modelValue: e.optionSelected,
        "onUpdate:modelValue": n[0] || (n[0] = (i) => e.optionSelected = i),
        disabled: e.disabled,
        onClick: n[1] || (n[1] = Cn(() => {
        }, ["stop"])),
        onChange: e.handleSelect
      }, null, 8, ["modelValue", "disabled", "onChange"])) : Q("v-if", !0),
      R(e.$slots, "default", {}, () => [
        B(
          "div",
          {
            class: v(e.classes(e.n("text"), e.n("$--ellipsis")))
          },
          ae(e.label),
          3
          /* TEXT, CLASS */
        )
      ]),
      Z(o, {
        hovering: e.hovering && !e.disabled
      }, null, 8, ["hovering"])
    ],
    2
    /* CLASS */
  )), [
    [r, { disabled: e.disabled }],
    [a, e.handleHovering, "desktop"]
  ]);
}
const tv = x({
  name: UC,
  directives: { Ripple: Ze, Hover: kn },
  components: {
    VarCheckbox: ho,
    VarHoverOverlay: In
  },
  props: RC,
  setup(e) {
    const n = C(!1), t = M(() => n.value), o = M(() => e.label), r = M(() => e.value), { menuSelect: a, bindMenuSelect: i } = LC(), { size: l, multiple: s, onSelect: u, computeLabel: d } = a, { hovering: c, handleHovering: f } = Hn(), m = {
      label: o,
      value: r,
      selected: t,
      sync: b
    };
    ce([() => e.label, () => e.value], d), i(m);
    function g() {
      e.disabled || h();
    }
    function h() {
      s.value && (n.value = !n.value), u(m);
    }
    function b(w) {
      n.value = w;
    }
    return {
      optionSelected: n,
      size: l,
      multiple: s,
      hovering: c,
      n: HC,
      classes: FC,
      handleHovering: f,
      handleClick: g,
      handleSelect: h
    };
  }
});
tv.render = YC;
var Nl = tv;
re(Nl);
const TI = Nl;
var Ra = Nl, jC = Object.defineProperty, _u = Object.getOwnPropertySymbols, WC = Object.prototype.hasOwnProperty, qC = Object.prototype.propertyIsEnumerable, xu = (e, n, t) => n in e ? jC(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, GC = (e, n) => {
  for (var t in n || (n = {}))
    WC.call(n, t) && xu(e, t, n[t]);
  if (_u)
    for (var t of _u(n))
      qC.call(n, t) && xu(e, t, n[t]);
  return e;
};
const XC = GC({
  modelValue: {
    default: void 0
  },
  size: {
    type: String,
    default: "normal"
  },
  multiple: Boolean,
  scrollable: Boolean,
  closeOnSelect: {
    type: Boolean,
    default: !0
  },
  "onUpdate:modelValue": A()
}, Oe(xf, [
  "show",
  "disabled",
  "trigger",
  "reference",
  "placement",
  "strategy",
  "offsetX",
  "offsetY",
  "teleport",
  "sameWidth",
  "elevation",
  "popoverClass",
  "closeOnClickReference",
  "onOpen",
  "onOpened",
  "onClose",
  "onClosed",
  "onClickOutside",
  "onUpdate:show"
]));
function ov(e) {
  const {
    multiple: n,
    modelValue: t,
    optionProviders: o,
    optionProvidersLength: r
  } = e, a = C(""), i = C([]);
  ce(t, c, { deep: !0 }), ce(r, c);
  function l() {
    const f = n(), m = t();
    f && (i.value = m.map(s)), !f && !Rn(m) && (a.value = s(m)), !f && Rn(m) && (a.value = "");
  }
  function s(f) {
    var m;
    const g = o();
    let h = g.find(({ value: b }) => b.value === f);
    return h || (h = g.find(({ label: b }) => b.value === f)), (m = h == null ? void 0 : h.label.value) != null ? m : "";
  }
  function u({ value: f, label: m }) {
    return f.value != null ? f.value : m.value;
  }
  function d(f) {
    const m = n(), g = o();
    return m ? g.filter(({ selected: h }) => h.value).map(u) : u(f);
  }
  function c() {
    const f = n(), m = t(), g = o();
    f ? g.forEach((h) => h.sync(m.includes(u(h)))) : g.forEach((h) => h.sync(m === u(h))), l();
  }
  return {
    label: a,
    labels: i,
    computeLabel: l,
    getSelectedValue: d
  };
}
const { name: KC, n: ZC, classes: JC } = ee("menu-select");
function QC(e, n) {
  const t = ie("var-menu");
  return p(), $e(t, {
    ref: "menu",
    class: v(e.n()),
    disabled: e.disabled,
    trigger: e.trigger,
    reference: e.reference,
    placement: e.placement,
    strategy: e.strategy,
    "offset-x": e.offsetX,
    "offset-y": e.offsetY,
    teleport: e.teleport,
    "same-width": e.sameWidth,
    elevation: e.elevation,
    "default-style": !1,
    "popover-class": e.popoverClass,
    "close-on-click-reference": e.closeOnClickReference,
    show: e.show,
    "onUpdate:show": n[0] || (n[0] = (o) => e.show = o),
    onOpen: e.onOpen,
    onOpened: e.onOpened,
    onClose: e.onClose,
    onClosed: e.onClosed,
    onClickOutside: e.onClickOutside
  }, {
    menu: me(() => [
      B(
        "div",
        {
          class: v(e.classes(e.n("menu"), e.formatElevation(e.elevation, 3), [e.scrollable, e.n("--scrollable")]))
        },
        [
          R(e.$slots, "options")
        ],
        2
        /* CLASS */
      )
    ]),
    default: me(() => [
      R(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "disabled", "trigger", "reference", "placement", "strategy", "offset-x", "offset-y", "teleport", "same-width", "elevation", "popover-class", "close-on-click-reference", "show", "onOpen", "onOpened", "onClose", "onClosed", "onClickOutside"]);
}
const rv = x({
  name: KC,
  components: { VarMenu: Xt },
  props: XC,
  setup(e) {
    const n = C(null), t = Xn(e, "show"), { menuOptions: o, length: r, bindMenuOptions: a } = zC(), { computeLabel: i, getSelectedValue: l } = ov({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => o,
      optionProvidersLength: () => r.value
    }), s = {
      size: M(() => e.size),
      multiple: M(() => e.multiple),
      computeLabel: i,
      onSelect: u
    };
    a(s);
    function u(m) {
      const { multiple: g, closeOnSelect: h } = e;
      y(e["onUpdate:modelValue"], l(m)), !g && h && (t.value = !1);
    }
    function d() {
      var m;
      (m = n.value) == null || m.open();
    }
    function c() {
      var m;
      (m = n.value) == null || m.close();
    }
    function f() {
      var m;
      (m = n.value) == null || m.resize();
    }
    return {
      show: t,
      menu: n,
      n: ZC,
      classes: JC,
      formatElevation: un,
      open: d,
      close: c,
      resize: f
    };
  }
});
rv.render = QC;
var Vl = rv;
re(Vl);
const EI = Vl;
var Ua = Vl;
const av = Symbol("SELECT_BIND_OPTION_KEY");
function _C() {
  const { length: e, childProviders: n, bindChildren: t } = ln(av);
  return {
    length: e,
    options: n,
    bindOptions: t
  };
}
function xC() {
  const { index: e, parentProvider: n, bindParent: t } = an(av);
  return t || Sn("Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: n,
    bindSelect: t
  };
}
const eS = {
  label: {},
  value: {},
  disabled: Boolean
}, { name: nS, n: tS, classes: oS } = ee("option");
function rS(e, n) {
  const t = ie("var-checkbox"), o = ie("var-hover-overlay"), r = Ve("ripple"), a = Ve("hover");
  return Te((p(), S(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")], [e.disabled, e.n("--disabled")])),
      style: F({
        color: e.optionSelected ? e.focusColor : void 0
      }),
      onClick: n[2] || (n[2] = (...i) => e.handleClick && e.handleClick(...i))
    },
    [
      B(
        "div",
        {
          class: v(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])),
          style: F({
            background: e.optionSelected ? e.focusColor : void 0
          })
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      e.multiple ? (p(), $e(t, {
        key: 0,
        ref: "checkbox",
        modelValue: e.optionSelected,
        "onUpdate:modelValue": n[0] || (n[0] = (i) => e.optionSelected = i),
        "checked-color": e.focusColor,
        disabled: e.disabled,
        onClick: n[1] || (n[1] = Cn(() => {
        }, ["stop"])),
        onChange: e.handleSelect
      }, null, 8, ["modelValue", "checked-color", "disabled", "onChange"])) : Q("v-if", !0),
      R(e.$slots, "default", {}, () => [
        B(
          "div",
          {
            class: v(e.classes(e.n("text"), e.n("$--ellipsis")))
          },
          ae(e.label),
          3
          /* TEXT, CLASS */
        )
      ]),
      Z(o, {
        hovering: e.hovering && !e.disabled
      }, null, 8, ["hovering"])
    ],
    6
    /* CLASS, STYLE */
  )), [
    [r, { disabled: e.disabled }],
    [a, e.handleHovering, "desktop"]
  ]);
}
const iv = x({
  name: nS,
  directives: { Ripple: Ze, Hover: kn },
  components: {
    VarCheckbox: ho,
    VarHoverOverlay: In
  },
  props: eS,
  setup(e) {
    const n = C(!1), t = M(() => n.value), o = M(() => e.label), r = M(() => e.value), { select: a, bindSelect: i } = xC(), { multiple: l, focusColor: s, onSelect: u, computeLabel: d } = a, { hovering: c, handleHovering: f } = Hn(), m = {
      label: o,
      value: r,
      selected: t,
      sync: b
    };
    ce([() => e.label, () => e.value], d), i(m);
    function g() {
      e.disabled || h();
    }
    function h() {
      l.value && (n.value = !n.value), u(m);
    }
    function b(w) {
      n.value = w;
    }
    return {
      optionSelected: n,
      multiple: l,
      focusColor: s,
      hovering: c,
      n: tS,
      classes: oS,
      handleHovering: f,
      handleClick: g,
      handleSelect: h
    };
  }
});
iv.render = rS;
var Al = iv;
re(Al);
const II = Al;
var Ha = Al;
const aS = {
  show: Boolean,
  lockScroll: {
    type: Boolean,
    default: !0
  },
  teleport: [String, Object, Boolean],
  onClick: A(),
  "onUpdate:show": A()
}, {
  name: iS,
  n: ed
} = ee("overlay");
var zl = x({
  name: iS,
  inheritAttrs: !1,
  props: aS,
  setup(e, {
    slots: n,
    attrs: t
  }) {
    const {
      zIndex: o
    } = Do(() => e.show, 1), {
      disabled: r
    } = Et();
    Mo(() => e.show, () => e.lockScroll);
    function a() {
      y(e.onClick), y(e["onUpdate:show"], !1);
    }
    function i() {
      return Z("div", ze({
        class: ed(),
        style: {
          zIndex: o.value - 1
        }
      }, t, {
        onClick: a
      }), [y(n.default)]);
    }
    function l() {
      return Z(We, {
        name: ed("--fade")
      }, {
        default: () => [e.show && i()]
      });
    }
    return () => {
      const {
        teleport: s
      } = e;
      return s ? Z(jn, {
        to: s,
        disabled: r.value
      }, {
        default: () => [l()]
      }) : l();
    };
  }
});
re(zl);
const BI = zl;
var Fa = zl;
const lS = {
  current: [Number, String],
  size: {
    type: [Number, String],
    default: 10
  },
  total: {
    type: [Number, String],
    default: 0
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  maxPagerCount: {
    type: Number,
    default: 3
  },
  disabled: Boolean,
  simple: {
    type: Boolean,
    default: !0
  },
  showSizeChanger: {
    type: Boolean,
    default: !0
  },
  showQuickJumper: Boolean,
  sizeOption: {
    type: Array,
    default: () => [10, 20, 50, 100]
  },
  showTotal: Function,
  onChange: A(),
  "onUpdate:current": A(),
  "onUpdate:size": A()
}, { name: sS, n: uS, classes: dS } = ee("pagination"), cS = ["item-mode", "onClick"];
function fS(e, n) {
  const t = ie("var-icon"), o = ie("var-input"), r = ie("var-cell"), a = ie("var-menu"), i = Ve("ripple");
  return p(), S(
    "ul",
    {
      class: v(e.n())
    },
    [
      Te((p(), S(
        "li",
        {
          class: v(
            e.classes(
              e.n("item"),
              e.n("prev"),
              [e.current <= 1 || e.disabled, e.n("item--disabled")],
              [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)]
            )
          ),
          onClick: n[0] || (n[0] = (l) => e.clickItem("prev"))
        },
        [
          R(e.$slots, "prev", {}, () => [
            Z(t, { name: "chevron-left" })
          ])
        ],
        2
        /* CLASS */
      )), [
        [i, { disabled: e.current <= 1 || e.disabled }]
      ]),
      e.simple ? (p(), S(
        "li",
        {
          key: 0,
          class: v(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
        },
        [
          Z(o, {
            "var-pagination-cover": "",
            hint: !1,
            disabled: e.disabled,
            modelValue: e.simpleCurrentValue,
            "onUpdate:modelValue": n[1] || (n[1] = (l) => e.simpleCurrentValue = l),
            onBlur: n[2] || (n[2] = (l) => e.setPage("simple", e.simpleCurrentValue, l)),
            onKeydown: n[3] || (n[3] = ds((l) => e.setPage("simple", e.simpleCurrentValue, l), ["enter"]))
          }, null, 8, ["disabled", "modelValue"]),
          B("span", null, [
            Ie(
              " / " + ae(e.pageCount) + " ",
              1
              /* TEXT */
            ),
            B(
              "div",
              {
                class: v(e.n("simple-line"))
              },
              null,
              2
              /* CLASS */
            )
          ])
        ],
        2
        /* CLASS */
      )) : (p(!0), S(
        Ne,
        { key: 1 },
        Ge(e.pageList, (l, s) => Te((p(), S("li", {
          key: s,
          "item-mode": e.getMode(l, s),
          class: v(
            e.classes(
              e.n("item"),
              e.formatElevation(e.elevation, 2),
              [l === e.current && !e.disabled, e.n("item--active")],
              [e.isHideEllipsis(l, s), e.n("item--hide")],
              [e.disabled, e.n("item--disabled")],
              [l === e.current && e.disabled, e.n("item--disabled--active")]
            )
          ),
          onClick: (u) => e.clickItem(l, s)
        }, [
          Ie(
            ae(l),
            1
            /* TEXT */
          )
        ], 10, cS)), [
          [i, { disabled: e.disabled }]
        ])),
        128
        /* KEYED_FRAGMENT */
      )),
      Te((p(), S(
        "li",
        {
          class: v(
            e.classes(
              e.n("item"),
              e.n("next"),
              [e.current >= e.pageCount || e.disabled, e.n("item--disabled")],
              [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)]
            )
          ),
          onClick: n[4] || (n[4] = (l) => e.clickItem("next"))
        },
        [
          R(e.$slots, "next", {}, () => [
            Z(t, { name: "chevron-right" })
          ])
        ],
        2
        /* CLASS */
      )), [
        [i, { disabled: e.current >= e.pageCount || e.disabled }]
      ]),
      e.showSizeChanger ? (p(), S(
        "li",
        {
          key: 2,
          class: v(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
        },
        [
          Z(a, {
            placement: "cover-top",
            disabled: e.disabled,
            show: e.menuVisible,
            "onUpdate:show": n[6] || (n[6] = (l) => e.menuVisible = l)
          }, {
            menu: me(() => [
              (p(!0), S(
                Ne,
                null,
                Ge(e.sizeOption, (l, s) => Te((p(), $e(r, {
                  class: v(e.classes(e.n("list"), [e.size === l, e.n("list--active")])),
                  key: s,
                  onClick: (u) => e.clickSize(l)
                }, {
                  default: me(() => [
                    Ie(
                      ae(l) + ae(e.pack.paginationItem) + " / " + ae(e.pack.paginationPage),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["class", "onClick"])), [
                  [i]
                ])),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            default: me(() => [
              B(
                "div",
                {
                  class: v(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
                  onClick: n[5] || (n[5] = Cn((...l) => e.showMenu && e.showMenu(...l), ["stop"]))
                },
                [
                  B(
                    "span",
                    null,
                    ae(e.size) + ae(e.pack.paginationItem) + " / " + ae(e.pack.paginationPage),
                    1
                    /* TEXT */
                  ),
                  Z(t, {
                    class: v(e.n("size--open-icon")),
                    "var-pagination-cover": "",
                    name: "menu-down"
                  }, null, 8, ["class"])
                ],
                2
                /* CLASS */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled", "show"])
        ],
        2
        /* CLASS */
      )) : Q("v-if", !0),
      e.showQuickJumper && !e.simple ? (p(), S(
        "li",
        {
          key: 3,
          class: v(e.classes(e.n("quickly"), [e.disabled, e.n("item--disabled")]))
        },
        [
          Ie(
            ae(e.pack.paginationJump) + " ",
            1
            /* TEXT */
          ),
          Z(o, {
            modelValue: e.quickJumperValue,
            "onUpdate:modelValue": n[7] || (n[7] = (l) => e.quickJumperValue = l),
            disabled: e.disabled,
            "var-pagination-cover": "",
            onBlur: n[8] || (n[8] = (l) => e.setPage("quick", e.quickJumperValue, l)),
            onKeydown: n[9] || (n[9] = ds((l) => e.setPage("quick", e.quickJumperValue, l), ["enter"]))
          }, null, 8, ["modelValue", "disabled"])
        ],
        2
        /* CLASS */
      )) : Q("v-if", !0),
      e.totalText ? (p(), S(
        "li",
        {
          key: 4,
          class: v(e.classes(e.n("total"), [e.disabled, e.n("item--disabled")]))
        },
        ae(e.totalText),
        3
        /* TEXT, CLASS */
      )) : Q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const lv = x({
  name: sS,
  components: {
    VarMenu: Xt,
    VarIcon: He,
    VarCell: dr,
    VarInput: yr
  },
  directives: { Ripple: Ze },
  props: lS,
  setup(e) {
    const n = C(!1), t = C(""), o = C("1"), r = C(!1), a = C(!1), i = C(L(e.current) || 1), l = C(L(e.size) || 10), s = C([]), u = M(() => Math.ceil(e.maxPagerCount / 2)), d = M(() => Math.ceil(L(e.total) / L(l.value))), c = M(() => {
      const $ = l.value * (i.value - 1) + 1, P = Math.min(l.value * i.value, L(e.total));
      return [$, P];
    }), f = M(() => e.showTotal ? e.showTotal(L(e.total), c.value) : "");
    ce([() => e.current, () => e.size], ([$, P]) => {
      i.value = L($) || 1, l.value = L(P || 10);
    }), ce(
      [i, l, d],
      ([$, P, I], [k, D]) => {
        let O = [];
        const { maxPagerCount: N, total: z, onChange: U } = e, te = Math.ceil(L(z) / L(D)), G = I - (N - u.value) - 1;
        if (o.value = `${$}`, I - 2 > N) {
          if (k === void 0 || I !== te)
            for (let j = 2; j < N + 2; j++)
              O.push(j);
          if ($ <= N && $ < G) {
            O = [];
            for (let j = 1; j < N + 1; j++)
              O.push(j + 1);
            r.value = !0, a.value = !1;
          }
          if ($ > N && $ < G) {
            O = [];
            for (let j = 1; j < N + 1; j++)
              O.push($ + j - u.value);
            r.value = $ === 2 && N === 1, a.value = !1;
          }
          if ($ >= G) {
            O = [];
            for (let j = 1; j < N + 1; j++)
              O.push(I - (N - j) - 1);
            r.value = !1, a.value = !0;
          }
          O = [1, "...", ...O, "...", I];
        } else
          for (let j = 1; j <= I; j++)
            O.push(j);
        s.value = O, k != null && I > 0 && y(U, $, P), y(e["onUpdate:current"], $), y(e["onUpdate:size"], P);
      },
      {
        immediate: !0
      }
    );
    function m($, P) {
      return mn($) ? !1 : P === 1 ? r.value : a.value;
    }
    function g($, P) {
      return mn($) ? "basic" : P === 1 ? "head" : "tail";
    }
    function h($, P) {
      if (!($ === i.value || e.disabled)) {
        if ($ === "...") {
          i.value = P === 1 ? Math.max(i.value - e.maxPagerCount, 1) : Math.min(i.value + e.maxPagerCount, d.value);
          return;
        }
        if ($ === "prev") {
          i.value = E(i.value - 1);
          return;
        }
        if ($ === "next") {
          i.value = E(i.value + 1);
          return;
        }
        mn($) && (i.value = $);
      }
    }
    function b() {
      e.disabled || (n.value = !0);
    }
    function w($) {
      l.value = $, n.value = !1;
      const P = E(i.value);
      o.value = String(P), i.value = P;
    }
    function E($) {
      return $ > d.value ? d.value : $ < 1 ? 1 : $;
    }
    function T($, P, I) {
      I.target.blur();
      const k = E(L(P));
      o.value = String(k), i.value = k, $ === "quick" && (t.value = "");
    }
    return {
      pack: Qe,
      current: i,
      menuVisible: n,
      size: l,
      pageCount: d,
      pageList: s,
      quickJumperValue: t,
      simpleCurrentValue: o,
      totalText: f,
      n: uS,
      classes: dS,
      getMode: g,
      isHideEllipsis: m,
      clickItem: h,
      showMenu: b,
      clickSize: w,
      setPage: T,
      toNumber: L,
      formatElevation: un
    };
  }
});
lv.render = fS;
var Ll = lv;
re(Ll);
const MI = Ll;
var Ya = Ll;
const vS = {
  elevation: {
    type: [Boolean, Number, String],
    default: !1
  },
  ripple: Boolean,
  radius: [Number, String],
  width: [Number, String],
  height: [Number, String],
  round: Boolean,
  inline: Boolean,
  onClick: A()
}, { name: mS, n: hS, classes: pS } = ee("paper");
function gS(e, n) {
  const t = Ve("ripple");
  return Te((p(), S(
    "div",
    {
      class: v(
        e.classes(
          e.n(),
          e.n("$--box"),
          e.formatElevation(e.elevation, 2),
          [e.onClick, e.n("--cursor")],
          [e.round, e.n("--round")],
          [e.inline, e.n("$--inline-flex")]
        )
      ),
      style: F({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      }),
      onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
    },
    [
      R(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  )), [
    [t, { disabled: !e.ripple }]
  ]);
}
const sv = x({
  name: mS,
  directives: { Ripple: Ze },
  props: vS,
  setup(e) {
    function n(t) {
      y(e.onClick, t);
    }
    return {
      n: hS,
      classes: pS,
      formatElevation: un,
      toSizeUnit: Se,
      handleClick: n
    };
  }
});
sv.render = gS;
var Rl = sv;
re(Rl);
const DI = Rl;
var ja = Rl, bS = Object.defineProperty, nd = Object.getOwnPropertySymbols, yS = Object.prototype.hasOwnProperty, $S = Object.prototype.propertyIsEnumerable, td = (e, n, t) => n in e ? bS(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, wS = (e, n) => {
  for (var t in n || (n = {}))
    yS.call(n, t) && td(e, t, n[t]);
  if (nd)
    for (var t of nd(n))
      $S.call(n, t) && td(e, t, n[t]);
  return e;
};
const CS = wS({
  modelValue: {
    type: Array,
    default: () => []
  },
  columns: {
    type: Array,
    default: () => []
  },
  title: String,
  textKey: {
    type: String,
    default: "text"
  },
  valueKey: {
    type: String,
    default: "value"
  },
  childrenKey: {
    type: String,
    default: "children"
  },
  toolbar: {
    type: Boolean,
    default: !0
  },
  cascade: Boolean,
  optionHeight: {
    type: [Number, String],
    default: 44
  },
  optionCount: {
    type: [Number, String],
    default: 6
  },
  confirmButtonText: String,
  cancelButtonText: String,
  confirmButtonTextColor: String,
  cancelButtonTextColor: String,
  // dynamic internal
  dynamic: Boolean,
  onChange: A(),
  onConfirm: A(),
  onCancel: A(),
  "onUpdate:modelValue": A()
}, Oe(Bo, [
  "show",
  "onUpdate:show",
  "closeOnClickOverlay",
  "teleport",
  "safeArea",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onClickOverlay",
  "onRouteChange"
])), { name: SS, n: kS, classes: PS } = ee("picker"), od = 300, OS = 15, rd = 200, TS = 1e3;
let ad = 0;
const ES = ["onTouchstartPassive", "onTouchmove", "onTouchend"], IS = ["onTransitionend"], BS = ["onClick"];
function MS(e, n) {
  const t = ie("var-button");
  return p(), $e(
    Jt(e.dynamic ? e.n("$-popup") : e.Transition),
    ze(
      e.dynamic ? {
        onOpen: e.onOpen,
        onOpened: e.onOpened,
        onClose: e.onClose,
        onClosed: e.onClosed,
        onClickOverlay: e.onClickOverlay,
        onRouteChange: e.onRouteChange,
        closeOnClickOverlay: e.closeOnClickOverlay,
        teleport: e.teleport,
        show: e.show,
        safeArea: e.safeArea,
        "onUpdate:show": e.handlePopupUpdateShow,
        position: "bottom",
        class: e.n("popup")
      } : null,
      { "var-picker-cover": "" }
    ),
    {
      default: me(() => [
        B(
          "div",
          ze({
            class: e.n()
          }, e.$attrs),
          [
            e.toolbar ? (p(), S(
              "div",
              {
                key: 0,
                class: v(e.n("toolbar"))
              },
              [
                R(e.$slots, "cancel", {}, () => [
                  Z(t, {
                    class: v(e.n("cancel-button")),
                    "var-picker-cover": "",
                    text: "",
                    "text-color": e.cancelButtonTextColor,
                    onClick: e.cancel
                  }, {
                    default: me(() => {
                      var o;
                      return [
                        Ie(
                          ae((o = e.cancelButtonText) != null ? o : e.pack.pickerCancelButtonText),
                          1
                          /* TEXT */
                        )
                      ];
                    }),
                    _: 1
                    /* STABLE */
                  }, 8, ["class", "text-color", "onClick"])
                ]),
                R(e.$slots, "title", {}, () => {
                  var o;
                  return [
                    B(
                      "div",
                      {
                        class: v(e.n("title"))
                      },
                      ae((o = e.title) != null ? o : e.pack.pickerTitle),
                      3
                      /* TEXT, CLASS */
                    )
                  ];
                }),
                R(e.$slots, "confirm", {}, () => [
                  Z(t, {
                    class: v(e.n("confirm-button")),
                    text: "",
                    "var-picker-cover": "",
                    "text-color": e.confirmButtonTextColor,
                    onClick: e.confirm
                  }, {
                    default: me(() => {
                      var o;
                      return [
                        Ie(
                          ae((o = e.confirmButtonText) != null ? o : e.pack.pickerConfirmButtonText),
                          1
                          /* TEXT */
                        )
                      ];
                    }),
                    _: 1
                    /* STABLE */
                  }, 8, ["class", "text-color", "onClick"])
                ])
              ],
              2
              /* CLASS */
            )) : Q("v-if", !0),
            B(
              "div",
              {
                class: v(e.n("columns")),
                style: F({ height: `${e.columnHeight}px` })
              },
              [
                (p(!0), S(
                  Ne,
                  null,
                  Ge(e.scrollColumns, (o) => (p(), S("div", {
                    class: v(e.n("column")),
                    key: o.id,
                    onTouchstartPassive: (r) => e.handleTouchstart(r, o),
                    onTouchmove: Cn((r) => e.handleTouchmove(r, o), ["prevent"]),
                    onTouchend: (r) => e.handleTouchend(o)
                  }, [
                    B("div", {
                      class: v(e.n("scroller")),
                      ref_for: !0,
                      ref: (r) => e.setScrollEl(r, o),
                      style: F({
                        transform: `translateY(${o.translate}px)`,
                        transitionDuration: `${o.duration}ms`,
                        transitionProperty: o.duration ? "transform" : "none"
                      }),
                      onTransitionend: (r) => e.handleTransitionend(o)
                    }, [
                      (p(!0), S(
                        Ne,
                        null,
                        Ge(o.column, (r, a) => (p(), S("div", {
                          key: e.getValue(r),
                          class: v(e.classes(e.n("option"), r.className)),
                          style: F({ height: `${e.optionHeight}px` }),
                          onClick: (i) => e.handleClick(o, a)
                        }, [
                          B(
                            "div",
                            {
                              class: v(e.classes(e.n("text"), r.textClassName))
                            },
                            ae(r[e.getOptionKey("text")]),
                            3
                            /* TEXT, CLASS */
                          )
                        ], 14, BS))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ], 46, IS)
                  ], 42, ES))),
                  128
                  /* KEYED_FRAGMENT */
                )),
                B(
                  "div",
                  {
                    class: v(e.n("picked")),
                    style: F({
                      top: `${e.center}px`,
                      height: `${e.optionHeight}px`
                    })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                ),
                B(
                  "div",
                  {
                    class: v(e.n("mask")),
                    style: F({ backgroundSize: `100% ${(e.columnHeight - e.optionHeight) / 2}px` })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                )
              ],
              6
              /* CLASS, STYLE */
            )
          ],
          16
          /* FULL_PROPS */
        )
      ]),
      _: 3
      /* FORWARDED */
    },
    16
    /* FULL_PROPS */
  );
}
const uv = x({
  name: SS,
  components: {
    VarButton: hn,
    VarPopup: vt
  },
  inheritAttrs: !1,
  props: CS,
  setup(e) {
    const n = Xn(e, "modelValue"), t = C([]), o = M(() => Fe(e.optionHeight)), r = M(() => Fe(e.optionCount)), a = M(() => r.value * o.value / 2 - o.value / 2), i = M(() => r.value * o.value), { prevY: l, moveY: s, dragging: u, startTouch: d, moveTouch: c, endTouch: f } = xt();
    let m = [];
    P(), ce(() => e.columns, P, { deep: !0 }), ce(() => n.value, I);
    function g(V) {
      return {
        text: e.textKey,
        value: e.valueKey,
        children: e.childrenKey
      }[V];
    }
    function h(V) {
      var W;
      return (W = V[g("value")]) != null ? W : V[g("text")];
    }
    function b(V) {
      m = [...V];
    }
    function w(V) {
      return V.map((W) => {
        const he = {
          id: ad++,
          prevY: 0,
          momentumPrevY: 0,
          touching: !1,
          translate: a.value,
          index: 0,
          duration: 0,
          momentumTime: 0,
          column: W,
          scrollEl: null,
          scrolling: !1
        };
        return te(he), he;
      });
    }
    function E(V) {
      const W = [];
      return T(W, V), W;
    }
    function T(V, W) {
      var he;
      if (W.length) {
        const Ee = {
          id: ad++,
          prevY: 0,
          momentumPrevY: 0,
          touching: !1,
          translate: a.value,
          index: 0,
          duration: 0,
          momentumTime: 0,
          column: W,
          scrollEl: null,
          scrolling: !1
        };
        V.push(Ee), te(Ee), T(V, (he = Ee.column[Ee.index][g("children")]) != null ? he : []);
      }
    }
    function $(V) {
      var W;
      t.value.splice(t.value.indexOf(V) + 1), T(t.value, (W = V.column[V.index][g("children")]) != null ? W : []);
    }
    function P() {
      t.value = e.cascade ? E(e.columns) : w(e.columns), I();
    }
    function I() {
      t.value.forEach((W, he) => {
        const Ee = W.column.findIndex((oe) => n.value[he] === h(oe));
        W.index = Ee === -1 ? 0 : Ee, te(W);
      });
      const { indexes: V } = U();
      b(V);
    }
    function k(V, W) {
      W.scrollEl = V;
    }
    function D(V) {
      y(e["onUpdate:show"], V);
    }
    function O(V) {
      const W = a.value - V.column.length * o.value, he = o.value + a.value;
      V.translate = ct(V.translate, W, he);
    }
    function N(V, W) {
      const he = Math.round((a.value - W) / o.value);
      return Cm(he, V.column);
    }
    function z(V) {
      return V.translate = a.value - V.index * o.value, V.translate;
    }
    function U() {
      const V = [], W = [], he = [];
      return t.value.forEach(({ column: Ee, index: oe }) => {
        const de = Ee[oe];
        V.push(h(de)), W.push(oe), he.push(de);
      }), {
        values: V,
        indexes: W,
        options: he
      };
    }
    function te(V, W = 0) {
      z(V), V.duration = W;
    }
    function G(V, W, he) {
      V.translate += Math.abs(W / he) / 3e-3 * (W < 0 ? -1 : 1);
    }
    function j(V, W) {
      u.value || (V.index = W, te(V, rd));
    }
    function X(V, W) {
      W.touching = !0, W.translate = zr(W.scrollEl), d(V);
    }
    function J(V, W) {
      if (!W.touching)
        return;
      c(V), W.scrolling = !1, W.duration = 0, W.prevY = l.value, W.translate += s.value, O(W);
      const he = performance.now();
      he - W.momentumTime > od && (W.momentumTime = he, W.momentumPrevY = W.translate);
    }
    function Y(V) {
      f(), V.touching = !1, V.prevY = 0;
      const W = V.translate - V.momentumPrevY, he = performance.now() - V.momentumTime, Ee = Math.abs(W) >= OS && he <= od, oe = V.translate;
      Ee && G(V, W, he), V.index = N(V, V.translate), te(V, Ee ? TS : rd), V.scrolling = V.translate !== oe, V.scrolling || ne(V);
    }
    function le(V) {
      V.scrolling = !1, ne(V);
    }
    function q() {
      const { indexes: V } = U();
      return V.every((W, he) => W === m[he]);
    }
    function ne(V) {
      const { cascade: W, onChange: he } = e;
      if (q())
        return;
      W && $(V);
      const Ee = t.value.some((se) => se.scrolling), oe = t.value.some((se) => se.touching);
      if (Ee || oe)
        return;
      const { values: de, indexes: ke, options: Ue } = U();
      b(ke), y(he, de, ke, Ue), n.value = de;
    }
    function H() {
      if (e.cascade) {
        const V = t.value.find((W) => W.scrolling);
        V && (V.index = N(V, zr(V.scrollEl)), V.scrolling = !1, te(V), $(V));
      } else
        t.value.forEach((V) => {
          V.index = N(V, zr(V.scrollEl)), te(V);
        });
    }
    function _() {
      H();
      const { values: V, indexes: W, options: he } = U();
      b(W), y(e.onConfirm, V, W, he);
    }
    function ue() {
      H();
      const { values: V, indexes: W, options: he } = U();
      b(W), y(e.onCancel, V, W, he);
    }
    return {
      pack: Qe,
      optionHeight: o,
      optionCount: r,
      scrollColumns: t,
      columnHeight: i,
      center: a,
      Transition: We,
      n: kS,
      classes: PS,
      setScrollEl: k,
      getOptionKey: g,
      getValue: h,
      handlePopupUpdateShow: D,
      handleTouchstart: X,
      handleTouchmove: J,
      handleTouchend: Y,
      handleTransitionend: le,
      confirm: _,
      cancel: ue,
      handleClick: j
    };
  }
});
uv.render = MS;
var Ro = uv;
let Ut;
function Uo(e) {
  return new Promise((n) => {
    Uo.close();
    const t = Ae(e) ? { columns: e } : e, o = je(t);
    o.dynamic = !0, o.teleport = "body", Ut = o;
    function r() {
      Ut === o && (Ut = null);
    }
    const { unmountInstance: a } = eo(Ro, o, {
      onConfirm: (i, l, s) => {
        y(o.onConfirm, i, l, s), n({
          state: "confirm",
          values: i,
          indexes: l,
          options: s
        }), o.show = !1, r();
      },
      onCancel: (i, l, s) => {
        y(o.onCancel, i, l, s), n({
          state: "cancel",
          values: i,
          indexes: l,
          options: s
        }), o.show = !1, r();
      },
      onClose: () => {
        y(o.onClose), n({
          state: "close"
        }), r();
      },
      onClosed: () => {
        y(o.onClosed), a(), r();
      },
      onRouteChange: () => {
        a(), r();
      },
      "onUpdate:show": (i) => {
        o.show = i;
      }
    });
    o.show = !0;
  });
}
Uo.close = function() {
  if (Ut == null)
    return;
  const e = Ut;
  Ut = null, Ye().then(() => {
    e.show = !1;
  });
};
Uo.Component = Ro;
re(Ro);
re(Ro, Uo);
const NI = Ro;
var Wa = Uo;
const DS = {
  mode: {
    type: String,
    default: "linear"
  },
  lineWidth: {
    type: [Number, String],
    default: 4
  },
  color: [String, Object],
  trackColor: String,
  ripple: Boolean,
  value: {
    type: [Number, String],
    default: 0
  },
  label: Boolean,
  labelClass: String,
  size: {
    type: [Number, String],
    default: 40
  },
  rotate: {
    type: Number,
    default: 0
  },
  track: {
    type: Boolean,
    default: !0
  },
  indeterminate: Boolean,
  type: {
    type: String,
    default: "primary"
  }
}, _n = 100, Wn = 20, id = 2 * Math.PI * Wn, { name: NS, n: VS, classes: AS } = ee("progress"), zS = ["viewBox"], LS = { key: 0 }, RS = ["id"], US = ["offset", "stop-color"], HS = ["d", "stroke-width", "stroke-dasharray"], FS = ["d", "stroke-width", "stroke-dasharray", "stroke-dashoffset"];
function YS(e, n) {
  return p(), S(
    "div",
    {
      class: v(e.n())
    },
    [
      e.mode === "linear" ? (p(), S(
        "div",
        {
          key: 0,
          class: v(e.n("linear"))
        },
        [
          B(
            "div",
            {
              class: v(e.classes(e.n("linear-block"), [e.track, e.n("linear-background")])),
              style: F({ height: e.toSizeUnit(e.lineWidth), background: e.trackColor })
            },
            [
              e.indeterminate ? (p(), S(
                "div",
                {
                  key: 0,
                  class: v(e.classes([e.indeterminate, e.n("linear-indeterminate")]))
                },
                [
                  B(
                    "div",
                    {
                      class: v(e.classes(e.n(`linear--${e.type}`))),
                      style: F({ background: e.progressColor })
                    },
                    null,
                    6
                    /* CLASS, STYLE */
                  ),
                  B(
                    "div",
                    {
                      class: v(e.classes(e.n(`linear--${e.type}`))),
                      style: F({ background: e.progressColor })
                    },
                    null,
                    6
                    /* CLASS, STYLE */
                  )
                ],
                2
                /* CLASS */
              )) : (p(), S(
                "div",
                {
                  key: 1,
                  class: v(e.classes(e.n("linear-certain"), e.n(`linear--${e.type}`), [e.ripple, e.n("linear-ripple")])),
                  style: F({ background: e.progressColor, width: e.linearProps.width })
                },
                null,
                6
                /* CLASS, STYLE */
              ))
            ],
            6
            /* CLASS, STYLE */
          ),
          e.label ? (p(), S(
            "div",
            {
              key: 0,
              class: v(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
            },
            [
              R(e.$slots, "default", {}, () => [
                Ie(
                  ae(e.linearProps.roundValue),
                  1
                  /* TEXT */
                )
              ])
            ],
            2
            /* CLASS */
          )) : Q("v-if", !0)
        ],
        2
        /* CLASS */
      )) : Q("v-if", !0),
      e.mode === "circle" ? (p(), S(
        "div",
        {
          key: 1,
          class: v(e.classes(e.n("circle"), [e.indeterminate, e.n("circle-indeterminate")])),
          style: F({ width: e.toSizeUnit(e.size), height: e.toSizeUnit(e.size) })
        },
        [
          (p(), S("svg", {
            class: v(e.n("circle-svg")),
            viewBox: e.circleProps.viewBox
          }, [
            e.isPlainObject(e.color) ? (p(), S("defs", LS, [
              B("linearGradient", {
                id: e.id,
                x1: "100%",
                y1: "0%",
                x2: "0%",
                y2: "0%"
              }, [
                (p(!0), S(
                  Ne,
                  null,
                  Ge(e.linearGradientProgress, (t, o) => (p(), S("stop", {
                    key: o,
                    offset: t,
                    "stop-color": e.color[t]
                  }, null, 8, US))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ], 8, RS)
            ])) : Q("v-if", !0),
            e.track ? (p(), S("path", {
              key: 1,
              class: v(e.n("circle-background")),
              d: e.circleProps.path,
              fill: "transparent",
              "stroke-width": e.circleProps.strokeWidth,
              "stroke-dasharray": e.CIRCUMFERENCE,
              style: F({
                stroke: e.trackColor
              })
            }, null, 14, HS)) : Q("v-if", !0),
            B("path", {
              class: v(e.classes(e.n("circle-certain"), e.n(`circle--${e.type}`), [e.indeterminate, e.n("circle-overlay")])),
              d: e.circleProps.path,
              fill: "transparent",
              "stroke-width": e.circleProps.strokeWidth,
              "stroke-dasharray": e.CIRCUMFERENCE,
              "stroke-dashoffset": e.circleProps.strokeOffset,
              style: F({
                stroke: e.progressColor,
                transform: `rotateZ(${e.rotate}deg)`,
                transformOrigin: "50% 50%"
              })
            }, null, 14, FS)
          ], 10, zS)),
          e.label ? (p(), S(
            "div",
            {
              key: 0,
              class: v(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
            },
            [
              R(e.$slots, "default", {}, () => [
                Ie(
                  ae(e.circleProps.roundValue),
                  1
                  /* TEXT */
                )
              ])
            ],
            2
            /* CLASS */
          )) : Q("v-if", !0)
        ],
        6
        /* CLASS, STYLE */
      )) : Q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const dv = x({
  name: NS,
  props: DS,
  setup(e) {
    const n = Dd(), t = M(() => {
      const i = L(e.value), l = i > _n ? _n : i, s = i > _n ? _n : Math.round(i);
      return {
        width: `${l}%`,
        roundValue: `${s}%`
      };
    }), o = M(() => {
      const { size: i, lineWidth: l, value: s } = e, u = Wn / (1 - Fe(l) / Fe(i)) * 2, d = `0 0 ${u} ${u}`, c = L(s) > _n ? _n : Math.round(L(s)), f = `${(_n - c) / _n * id}`, m = Fe(l) / Fe(i) * u, g = 0, h = -Wn, b = 0, w = -2 * Wn, E = `M ${u / 2} ${u / 2} m ${g} ${h} a ${Wn} ${Wn} 
        0 1 1 ${b} ${-w} a ${Wn} ${Wn} 0 1 1 ${-b} ${w}`;
      return {
        strokeWidth: m,
        viewBox: d,
        strokeOffset: f,
        roundValue: `${c}%`,
        path: E
      };
    }), r = M(() => co(e.color) ? `url(#${n.value})` : e.color), a = M(
      () => Object.keys(e.color).sort((i, l) => parseFloat(i) - parseFloat(l))
    );
    return {
      id: n,
      linearProps: t,
      CIRCUMFERENCE: id,
      RADIUS: Wn,
      circleProps: o,
      progressColor: r,
      linearGradientProgress: a,
      n: VS,
      classes: AS,
      toSizeUnit: Se,
      isPlainObject: co
    };
  }
});
dv.render = YS;
var Ul = dv;
re(Ul);
const VI = Ul;
var qa = Ul;
const jS = {
  modelValue: Boolean,
  disabled: Boolean,
  animationDuration: {
    type: [Number, String],
    default: 300
  },
  successDuration: {
    type: [Number, String],
    default: 2e3
  },
  bgColor: String,
  successBgColor: String,
  color: String,
  successColor: String,
  target: [String, Object],
  onRefresh: A(),
  "onUpdate:modelValue": A()
};
var ld = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: WS, n: sd, classes: qS } = ee("pull-refresh"), ud = 150;
function GS(e, n) {
  const t = ie("var-icon");
  return p(), S(
    "div",
    {
      ref: "freshNode",
      class: v(e.n()),
      onTouchstart: n[0] || (n[0] = (...o) => e.handleTouchstart && e.handleTouchstart(...o)),
      onTouchend: n[1] || (n[1] = (...o) => e.handleTouchend && e.handleTouchend(...o)),
      onTouchcancel: n[2] || (n[2] = (...o) => e.handleTouchend && e.handleTouchend(...o))
    },
    [
      B(
        "div",
        {
          ref: "controlNode",
          class: v(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
          style: F(e.controlStyle)
        },
        [
          Z(t, {
            name: e.iconName,
            transition: e.ICON_TRANSITION,
            class: v(e.classes(e.n("icon"), [e.refreshStatus === "loading", e.n("animation")])),
            "var-pull-refresh-cover": ""
          }, null, 8, ["name", "transition", "class"])
        ],
        6
        /* CLASS, STYLE */
      ),
      R(e.$slots, "default")
    ],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
const cv = x({
  name: WS,
  components: { VarIcon: He },
  props: jS,
  setup(e) {
    const n = C(0), t = C(null), o = C(null), r = C(0), a = C("-125%"), i = C("arrow-down"), l = C("default"), s = C(!1), u = M(() => Math.abs(2 * n.value)), d = M(() => l.value === "success"), c = M(
      () => l.value !== "loading" && l.value !== "success" && !e.disabled
    ), f = M(() => ({
      transform: `translate3d(0px, ${nn(a.value) ? a.value : `${a.value}px`}, 0px) translate(-50%, 0)`,
      transition: s.value ? `transform ${e.animationDuration}ms` : void 0,
      background: d.value ? e.successBgColor : e.bgColor,
      color: d.value ? e.successColor : e.color
    })), { startTouch: m, moveTouch: g, endTouch: h, isReachTop: b } = xt();
    let w, E;
    ce(
      () => e.modelValue,
      (N) => {
        N === !1 && (s.value = !0, l.value = "success", i.value = "checkbox-marked-circle", setTimeout(() => {
          a.value = n.value, O();
        }, L(e.successDuration)));
      }
    ), rn(D), ft(t, "touchmove", I);
    function T(N) {
      return ld(this, null, function* () {
        if (i.value !== N)
          return i.value = N, new Promise((z) => {
            window.setTimeout(z, ud);
          });
      });
    }
    function $(N) {
      ("classList" in w ? w : document.body).classList[N](`${sd()}--lock`);
    }
    function P(N) {
      if (m(N), n.value === 0) {
        const { width: z } = en(o.value);
        n.value = -(z + z * 0.25);
      }
      E = mt(N.target);
    }
    function I(N) {
      if (g(N), !c.value || !E || E !== w && Ht(E) > 0 || Ht(w) > 0)
        return;
      b(w) && Ln(N), l.value !== "pulling" && (l.value = "pulling", r.value = N.touches[0].clientY), b(w) && mn(a.value) && a.value > n.value && $("add");
      const U = (N.touches[0].clientY - r.value) / 2 + n.value;
      a.value = U >= u.value ? u.value : U, T(a.value >= u.value * 0.2 ? "refresh" : "arrow-down");
    }
    function k() {
      return ld(this, null, function* () {
        h(), c.value && (s.value = !0, L(a.value) >= u.value * 0.2 ? (yield T("refresh"), l.value = "loading", a.value = u.value * 0.3, y(e["onUpdate:modelValue"], !0), Ye(() => {
          y(e.onRefresh);
        }), $("remove")) : (l.value = "loosing", i.value = "arrow-down", a.value = n.value, setTimeout(() => {
          s.value = !1, $("remove");
        }, L(e.animationDuration))), E = null);
      });
    }
    function D() {
      w = e.target ? Fd(e.target, "PullRefresh") : mt(t.value);
    }
    function O() {
      setTimeout(() => {
        l.value = "default", i.value = "arrow-down", s.value = !1;
      }, L(e.animationDuration));
    }
    return {
      ICON_TRANSITION: ud,
      refreshStatus: l,
      freshNode: t,
      controlNode: o,
      iconName: i,
      controlStyle: f,
      isSuccess: d,
      n: sd,
      classes: qS,
      handleTouchstart: P,
      handleTouchmove: I,
      handleTouchend: k
    };
  }
});
cv.render = GS;
var Hl = cv;
re(Hl);
const AI = Hl;
var Ga = Hl;
const XS = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  checkedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !0
  },
  uncheckedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  disabled: Boolean,
  readonly: Boolean,
  checkedColor: String,
  uncheckedColor: String,
  iconSize: [String, Number],
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: Array,
  onClick: A(),
  onChange: A(),
  "onUpdate:modelValue": A()
}, fv = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function KS() {
  const { bindChildren: e, childProviders: n, length: t } = ln(
    fv
  );
  return {
    length: t,
    radios: n,
    bindRadios: e
  };
}
function ZS() {
  const { bindParent: e, parentProvider: n, index: t } = an(fv);
  return {
    index: t,
    radioGroup: n,
    bindRadioGroup: e
  };
}
const { name: JS, n: QS, classes: _S } = ee("radio");
function xS(e, n) {
  const t = ie("var-icon"), o = ie("var-hover-overlay"), r = ie("var-form-details"), a = Ve("ripple"), i = Ve("hover");
  return p(), S(
    "div",
    {
      class: v(e.n("wrap"))
    },
    [
      B(
        "div",
        ze({
          class: e.n(),
          onClick: n[0] || (n[0] = (...l) => e.handleClick && e.handleClick(...l))
        }, e.$attrs),
        [
          Te((p(), S(
            "div",
            {
              class: v(
                e.classes(
                  e.n("action"),
                  [e.checked, e.n("--checked"), e.n("--unchecked")],
                  [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")],
                  [e.formDisabled || e.disabled, e.n("--disabled")]
                )
              ),
              style: F({ color: e.checked ? e.checkedColor : e.uncheckedColor })
            },
            [
              e.checked ? R(e.$slots, "checked-icon", { key: 0 }, () => [
                Z(t, {
                  class: v(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                  "var-radio-cover": "",
                  name: "radio-marked",
                  size: e.iconSize
                }, null, 8, ["class", "size"])
              ]) : R(e.$slots, "unchecked-icon", { key: 1 }, () => [
                Z(t, {
                  class: v(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                  "var-radio-cover": "",
                  name: "radio-blank",
                  size: e.iconSize
                }, null, 8, ["class", "size"])
              ]),
              Z(o, {
                hovering: !e.disabled && !e.formDisabled && e.hovering
              }, null, 8, ["hovering"])
            ],
            6
            /* CLASS, STYLE */
          )), [
            [a, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }],
            [i, e.handleHovering, "desktop"]
          ]),
          B(
            "div",
            {
              class: v(
                e.classes(
                  e.n("text"),
                  [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")],
                  [e.formDisabled || e.disabled, e.n("--disabled")]
                )
              )
            },
            [
              R(e.$slots, "default")
            ],
            2
            /* CLASS */
          )
        ],
        16
        /* FULL_PROPS */
      ),
      Z(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const vv = x({
  name: JS,
  directives: { Ripple: Ze, Hover: kn },
  components: {
    VarIcon: He,
    VarFormDetails: pn,
    VarHoverOverlay: In
  },
  inheritAttrs: !1,
  props: XS,
  setup(e) {
    const n = Xn(e, "modelValue"), t = M(() => n.value === e.checkedValue), o = C(!1), { radioGroup: r, bindRadioGroup: a } = ZS(), { hovering: i, handleHovering: l } = Hn(), { form: s, bindForm: u } = Mn(), {
      errorMessage: d,
      validateWithTrigger: c,
      validate: f,
      // expose
      resetValidation: m
    } = Bn(), g = {
      sync: E,
      validate: $,
      resetValidation: m,
      reset: T
    };
    y(a, g), y(u, g);
    function h(I) {
      Ye(() => {
        const { validateTrigger: k, rules: D, modelValue: O } = e;
        c(k, I, D, O);
      });
    }
    function b(I) {
      const { checkedValue: k, onChange: D } = e;
      r && n.value === k || (n.value = I, y(D, n.value), r == null || r.onToggle(k), h("onChange"));
    }
    function w(I) {
      const { disabled: k, readonly: D, uncheckedValue: O, checkedValue: N, onClick: z } = e;
      s != null && s.disabled.value || k || (y(z, I), !(s != null && s.readonly.value || D) && (o.value = !0, b(t.value ? O : N)));
    }
    function E(I) {
      const { checkedValue: k, uncheckedValue: D } = e;
      n.value = I === k ? k : D;
    }
    function T() {
      n.value = e.uncheckedValue, m();
    }
    function $() {
      return f(e.rules, e.modelValue);
    }
    function P(I) {
      const { uncheckedValue: k, checkedValue: D } = e;
      ![k, D].includes(I) && (I = t.value ? k : D), b(I);
    }
    return {
      withAnimation: o,
      checked: t,
      errorMessage: d,
      radioGroupErrorMessage: r == null ? void 0 : r.errorMessage,
      formDisabled: s == null ? void 0 : s.disabled,
      formReadonly: s == null ? void 0 : s.readonly,
      hovering: i,
      handleHovering: l,
      n: QS,
      classes: _S,
      handleClick: w,
      toggle: P,
      reset: T,
      validate: $,
      resetValidation: m
    };
  }
});
vv.render = xS;
var Fl = vv;
re(Fl);
const zI = Fl;
var Xa = Fl;
const ek = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: Array,
  onChange: A(),
  "onUpdate:modelValue": A()
}, { name: nk, n: tk, classes: ok } = ee("radio-group");
function rk(e, n) {
  const t = ie("var-form-details");
  return p(), S(
    "div",
    {
      class: v(e.n("wrap"))
    },
    [
      B(
        "div",
        {
          class: v(e.classes(e.n(), e.n(`--${e.direction}`)))
        },
        [
          R(e.$slots, "default")
        ],
        2
        /* CLASS */
      ),
      Z(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const mv = x({
  name: nk,
  components: { VarFormDetails: pn },
  props: ek,
  setup(e) {
    const { length: n, radios: t, bindRadios: o } = KS(), { bindForm: r } = Mn(), {
      errorMessage: a,
      validateWithTrigger: i,
      validate: l,
      // expose
      resetValidation: s
    } = Bn(), u = M(() => a.value), d = {
      onToggle: m,
      validate: g,
      reset: h,
      resetValidation: s,
      errorMessage: u
    };
    ce(() => e.modelValue, f), ce(() => n.value, f), y(r, d), o(d);
    function c(b) {
      Ye(() => {
        const { validateTrigger: w, rules: E, modelValue: T } = e;
        i(w, b, E, T);
      });
    }
    function f() {
      return t.forEach(({ sync: b }) => b(e.modelValue));
    }
    function m(b) {
      y(e["onUpdate:modelValue"], b), y(e.onChange, b), c("onChange");
    }
    function g() {
      return l(e.rules, e.modelValue);
    }
    function h() {
      y(e["onUpdate:modelValue"], void 0), s();
    }
    return {
      errorMessage: a,
      n: tk,
      classes: ok,
      reset: h,
      validate: g,
      resetValidation: s
    };
  }
});
mv.render = rk;
var Yl = mv;
re(Yl);
const LI = Yl;
var Ka = Yl;
const ak = {
  modelValue: {
    type: Number,
    default: 0
  },
  count: {
    type: [String, Number],
    default: 5
  },
  color: String,
  icon: {
    type: String,
    default: "star"
  },
  emptyIcon: {
    type: String,
    default: "star-outline"
  },
  halfIcon: {
    type: String,
    default: "star-half-full"
  },
  namespace: Oe(Ke, "namespace"),
  emptyIconNamespace: Oe(Ke, "namespace"),
  halfIconNamespace: Oe(Ke, "namespace"),
  emptyColor: String,
  size: [String, Number],
  gap: [String, Number],
  half: Boolean,
  disabled: Boolean,
  disabledColor: String,
  readonly: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  clearable: Boolean,
  rules: Array,
  onChange: A(),
  "onUpdate:modelValue": A()
}, { name: ik, n: oo } = ee("rate"), lk = ["onClick"];
function sk(e, n) {
  const t = ie("var-icon"), o = ie("var-hover-overlay"), r = ie("var-form-details"), a = Ve("ripple"), i = Ve("hover");
  return p(), S(
    "div",
    {
      class: v(e.n("wrap"))
    },
    [
      B(
        "div",
        {
          class: v(e.n())
        },
        [
          (p(!0), S(
            Ne,
            null,
            Ge(e.toNumber(e.count), (l) => Te((p(), S("div", {
              key: l,
              style: F(e.getStyle(l)),
              class: v(e.getClass(l)),
              onClick: (s) => e.handleClick(l, s)
            }, [
              Z(t, {
                class: v(e.n("content-icon")),
                "var-rate-cover": "",
                transition: 0,
                namespace: e.getCurrentState(l).namespace,
                name: e.getCurrentState(l).name,
                style: F({ fontSize: e.toSizeUnit(e.size) })
              }, null, 8, ["class", "namespace", "name", "style"]),
              Z(o, {
                hovering: e.hovering && l === e.currentHoveringValue && !e.disabled && !e.formDisabled
              }, null, 8, ["hovering"])
            ], 14, lk)), [
              [a, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }],
              [i, e.createHoverHandler(l), "desktop"]
            ])),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      ),
      Z(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const hv = x({
  name: ik,
  components: {
    VarIcon: He,
    VarFormDetails: pn,
    VarHoverOverlay: In
  },
  directives: { Ripple: Ze, Hover: kn },
  props: ak,
  setup(e) {
    const n = C(-1), { form: t, bindForm: o } = Mn(), { errorMessage: r, validateWithTrigger: a, validate: i, resetValidation: l } = Bn(), { hovering: s } = Hn();
    let u = L(e.modelValue);
    y(o, {
      reset: T,
      validate: h,
      resetValidation: l
    });
    function c($) {
      const { count: P, gap: I } = e;
      return {
        color: m($).color,
        marginRight: $ !== L(P) ? Se(I) : 0
      };
    }
    function f($) {
      const { name: P, color: I } = m($);
      return {
        [oo("content")]: !0,
        [oo("--disabled")]: (t == null ? void 0 : t.disabled.value) || e.disabled,
        [oo("--error")]: r.value,
        [oo("--primary")]: P !== e.emptyIcon && !I
      };
    }
    function m($) {
      const {
        modelValue: P,
        disabled: I,
        disabledColor: k,
        color: D,
        half: O,
        emptyColor: N,
        icon: z,
        halfIcon: U,
        emptyIcon: te,
        namespace: G,
        halfIconNamespace: j,
        emptyIconNamespace: X
      } = e;
      let J = D;
      return (I || t != null && t.disabled.value) && (J = k), $ <= P ? { color: J, name: z, namespace: G } : O && $ <= P + 0.5 ? { color: J, name: U, namespace: j } : {
        color: I || t != null && t.disabled.value ? k : N,
        name: te,
        namespace: X
      };
    }
    function g($, P) {
      const { half: I, clearable: k } = e, { offsetWidth: D } = P.target;
      I && P.offsetX <= Math.floor(D / 2) && ($ -= 0.5), u === $ && k && ($ = 0), u !== $ && (y(e["onUpdate:modelValue"], $), y(e.onChange, $)), u = $;
    }
    function h() {
      return i(e.rules, e.modelValue);
    }
    function b() {
      return Ye(() => a(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function w($, P) {
      const { readonly: I, disabled: k } = e;
      I || k || t != null && t.disabled.value || t != null && t.readonly.value || (g($, P), b());
    }
    function E($) {
      return (P) => {
        n.value = $, s.value = P;
      };
    }
    function T() {
      y(e["onUpdate:modelValue"], 0), l();
    }
    return {
      errorMessage: r,
      formDisabled: t == null ? void 0 : t.disabled,
      formReadonly: t == null ? void 0 : t.readonly,
      hovering: s,
      currentHoveringValue: n,
      getStyle: c,
      getClass: f,
      getCurrentState: m,
      handleClick: w,
      createHoverHandler: E,
      reset: T,
      validate: h,
      resetValidation: l,
      toSizeUnit: Se,
      toNumber: L,
      n: oo
    };
  }
});
hv.render = sk;
var jl = hv;
re(jl);
const RI = jl;
var Za = jl;
const uk = (e) => (bt(""), e = e(), yt(), e), dk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, ck = /* @__PURE__ */ uk(() => /* @__PURE__ */ B(
  "path",
  { d: "M11,9H13V7H11M11,20H13V11H11V20Z" },
  null,
  -1
  /* HOISTED */
)), fk = [
  ck
];
function vk(e, n) {
  return p(), S("svg", dk, fk);
}
const pv = x({});
pv.render = vk;
var mk = pv;
const hk = (e) => (bt(""), e = e(), yt(), e), pk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, gk = /* @__PURE__ */ hk(() => /* @__PURE__ */ B(
  "path",
  { d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z" },
  null,
  -1
  /* HOISTED */
)), bk = [
  gk
];
function yk(e, n) {
  return p(), S("svg", pk, bk);
}
const gv = x({});
gv.render = yk;
var $k = gv;
const wk = (e) => (bt(""), e = e(), yt(), e), Ck = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, Sk = /* @__PURE__ */ wk(() => /* @__PURE__ */ B(
  "path",
  { d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11" },
  null,
  -1
  /* HOISTED */
)), kk = [
  Sk
];
function Pk(e, n) {
  return p(), S("svg", Ck, kk);
}
const bv = x({});
bv.render = Pk;
var Ok = bv;
const { n: Tk, classes: Ek } = ee("result");
function Ik(e, n) {
  return p(), S(
    Ne,
    null,
    [
      B(
        "span",
        {
          class: v(e.n("success-cover-left"))
        },
        null,
        2
        /* CLASS */
      ),
      B(
        "span",
        {
          class: v(e.classes(e.n("success-line"), e.n("success-line-tip"))),
          style: F({
            animationDuration: e.animation ? "760ms" : "0ms",
            borderRadius: `calc(${e.borderSize} * 0.625)`
          })
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      B(
        "span",
        {
          class: v(e.classes(e.n("success-line"), e.n("success-line-long"))),
          style: F({
            animationDuration: e.animation ? "770ms" : "0ms",
            borderRadius: `calc(${e.borderSize} * 0.625)`
          })
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      B(
        "span",
        {
          ref: "circle",
          class: v(e.n("success-circle")),
          style: F({ left: `-${e.borderSize}`, top: `-${e.borderSize}`, borderWidth: e.borderSize })
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      B(
        "span",
        {
          class: v(e.n("success-line-fix"))
        },
        null,
        2
        /* CLASS */
      ),
      B(
        "span",
        {
          class: v(e.n("success-cover-right")),
          style: F({
            animationDuration: e.animation ? "4250ms" : "0ms"
          })
        },
        null,
        6
        /* CLASS, STYLE */
      )
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
const yv = x({
  props: {
    animation: {
      type: Boolean
    },
    borderSize: {
      type: String
    }
  },
  setup() {
    return {
      n: Tk,
      classes: Ek,
      toNumber: L
    };
  }
});
yv.render = Ik;
var Bk = yv;
const Mk = (e) => (bt(""), e = e(), yt(), e), Dk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, Nk = /* @__PURE__ */ Mk(() => /* @__PURE__ */ B(
  "path",
  { d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z" },
  null,
  -1
  /* HOISTED */
)), Vk = [
  Nk
];
function Ak(e, n) {
  return p(), S("svg", Dk, Vk);
}
const $v = x({});
$v.render = Ak;
var zk = $v;
const Lk = (e) => (bt(""), e = e(), yt(), e), Rk = { viewBox: "-4 -4 32 32" }, Uk = /* @__PURE__ */ Lk(() => /* @__PURE__ */ B(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), Hk = [
  Uk
];
function Fk(e, n) {
  return p(), S("svg", Rk, Hk);
}
const wv = x({});
wv.render = Fk;
var Yk = wv;
const jk = {
  imageSize: [String, Number],
  type: {
    type: String,
    default: "success"
  },
  title: String,
  description: String,
  animation: {
    type: Boolean,
    default: !0
  }
}, { name: Wk, n: qk, classes: Gk } = ee("result");
function Xk(e, n) {
  return p(), S(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box")))
    },
    [
      R(e.$slots, "image", {}, () => [
        e.type ? (p(), S(
          "div",
          {
            key: 0,
            class: v(e.n("image-container"))
          },
          [
            B(
              "div",
              {
                class: v(e.classes(e.n("image"), e.n(e.type))),
                style: F({
                  width: e.circleSize,
                  height: e.circleSize,
                  borderWidth: e.borderSize
                })
              },
              [
                (p(), $e(Jt(e.type), {
                  "border-size": e.borderSize,
                  animation: e.animation
                }, null, 8, ["border-size", "animation"]))
              ],
              6
              /* CLASS, STYLE */
            )
          ],
          2
          /* CLASS */
        )) : Q("v-if", !0)
      ]),
      R(e.$slots, "title", {}, () => [
        e.title ? (p(), S(
          "div",
          {
            key: 0,
            class: v(e.n("title"))
          },
          ae(e.title),
          3
          /* TEXT, CLASS */
        )) : Q("v-if", !0)
      ]),
      R(e.$slots, "description", {}, () => [
        e.description ? (p(), S(
          "div",
          {
            key: 0,
            class: v(e.n("description"))
          },
          ae(e.description),
          3
          /* TEXT, CLASS */
        )) : Q("v-if", !0)
      ]),
      e.$slots.footer ? (p(), S(
        "div",
        {
          key: 0,
          class: v(e.n("footer"))
        },
        [
          R(e.$slots, "footer")
        ],
        2
        /* CLASS */
      )) : Q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Cv = x({
  name: Wk,
  components: {
    Info: mk,
    Success: Bk,
    Warning: Ok,
    Error: $k,
    Question: zk,
    Empty: Yk
  },
  props: jk,
  setup(e) {
    const n = M(() => {
      const { imageSize: o } = e;
      return `calc(${o ? Se(o) : "var(--result-image-size)"} * 0.9)`;
    }), t = M(() => {
      const { imageSize: o } = e;
      return `calc(${o ? Se(e.imageSize) : "var(--result-image-size)"} * 0.05)`;
    });
    return {
      circleSize: n,
      borderSize: t,
      toSizeUnit: Se,
      n: qk,
      classes: Gk,
      toNumber: L,
      toPxNum: Fe
    };
  }
});
Cv.render = Xk;
var Wl = Cv;
re(Wl);
const UI = Wl;
var Ja = Wl;
const Kk = {
  gutter: {
    type: [String, Number, Array],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start"
  },
  align: {
    type: String,
    default: "flex-start"
  },
  onClick: A()
}, { name: Zk, n: Jk, classes: Qk } = ee("row");
function _k(e, n) {
  return p(), S(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"))),
      style: F({
        justifyContent: e.padStartFlex(e.justify),
        alignItems: e.padStartFlex(e.align),
        margin: `${-e.average[0]}px ${-e.average[1]}px`
      }),
      onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      R(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const Sv = x({
  name: Zk,
  props: Kk,
  setup(e) {
    const n = M(
      () => Ae(e.gutter) ? e.gutter.map((s) => Fe(s) / 2) : [0, Fe(e.gutter) / 2]
    ), { cols: t, bindCols: o, length: r } = O0(), a = { computePadding: i };
    ce(() => r.value, i), ce(() => e.gutter, i), o(a);
    function i() {
      t.forEach((s) => {
        const [u, d] = n.value;
        s.setPadding({ left: d, right: d, top: u, bottom: u });
      });
    }
    function l(s) {
      y(e.onClick, s);
    }
    return {
      average: n,
      n: Jk,
      classes: Qk,
      handleClick: l,
      padStartFlex: lr
    };
  }
});
Sv.render = _k;
var ql = Sv;
re(ql);
const HI = ql;
var Qa = ql, xk = Object.defineProperty, dd = Object.getOwnPropertySymbols, eP = Object.prototype.hasOwnProperty, nP = Object.prototype.propertyIsEnumerable, cd = (e, n, t) => n in e ? xk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, tP = (e, n) => {
  for (var t in n || (n = {}))
    eP.call(n, t) && cd(e, t, n[t]);
  if (dd)
    for (var t of dd(n))
      nP.call(n, t) && cd(e, t, n[t]);
  return e;
};
const oP = tP({
  modelValue: {
    default: void 0
  },
  multiple: Boolean,
  offsetY: {
    type: [String, Number],
    default: 0
  },
  chip: Boolean,
  readonly: Boolean,
  separator: {
    type: String,
    default: ","
  },
  textAlign: {
    type: String,
    default: "left"
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onClear", "onClose"]
  },
  rules: Array,
  onFocus: A(),
  onBlur: A(),
  onClose: A(),
  onChange: A(),
  onClear: A(),
  "onUpdate:modelValue": A()
}, Oe(bl, [
  "size",
  "variant",
  "placeholder",
  "line",
  "hint",
  "textColor",
  "focusColor",
  "blurColor",
  "disabled",
  "clearable",
  "onClick"
])), { name: rP, n: aP, classes: iP } = ee("select"), lP = { key: 1 };
function sP(e, n) {
  const t = ie("var-chip"), o = ie("var-icon"), r = ie("var-field-decorator"), a = ie("var-menu"), i = ie("var-form-details");
  return p(), S(
    "div",
    {
      class: v(e.n()),
      onClick: n[3] || (n[3] = (...l) => e.handleFocus && e.handleFocus(...l))
    },
    [
      Z(a, {
        "var-select-cover": "",
        "same-width": "",
        "close-on-click-reference": "",
        show: e.showMenu,
        "onUpdate:show": n[1] || (n[1] = (l) => e.showMenu = l),
        class: v(e.n("menu")),
        "popover-class": e.variant === "standard" && e.hint ? e.n("--standard-menu-margin") : void 0,
        "offset-y": e.offsetY,
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled,
        placement: e.placement,
        "default-style": !1,
        onClickOutside: e.handleBlur
      }, {
        menu: me(() => [
          B(
            "div",
            {
              ref: "menuEl",
              class: v(e.classes(e.n("scroller"), e.n("$-elevation--3")))
            },
            [
              R(e.$slots, "default")
            ],
            2
            /* CLASS */
          )
        ]),
        default: me(() => [
          Z(
            r,
            st(Io({
              value: e.modelValue,
              size: e.size,
              variant: e.variant,
              placeholder: e.placeholder,
              line: e.line,
              hint: e.hint,
              textColor: e.textColor,
              focusColor: e.focusColor,
              blurColor: e.blurColor,
              isFocus: e.isFocus,
              errorMessage: e.errorMessage,
              formDisabled: e.formDisabled,
              disabled: e.disabled,
              clearable: e.clearable,
              cursor: e.cursor,
              onClick: e.handleClick,
              onClear: e.handleClear
            })),
            rr({
              "append-icon": me(() => [
                R(e.$slots, "append-icon")
              ]),
              default: me(() => [
                B(
                  "div",
                  {
                    class: v(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                    style: F({
                      textAlign: e.textAlign,
                      color: e.textColor
                    })
                  },
                  [
                    B(
                      "div",
                      {
                        class: v(e.n("label"))
                      },
                      [
                        e.isEmptyModelValue ? Q("v-if", !0) : R(e.$slots, "selected", { key: 0 }, () => [
                          e.multiple ? (p(), S(
                            Ne,
                            { key: 0 },
                            [
                              e.chip ? (p(), S(
                                "div",
                                {
                                  key: 0,
                                  class: v(e.n("chips"))
                                },
                                [
                                  (p(!0), S(
                                    Ne,
                                    null,
                                    Ge(e.labels, (l) => (p(), $e(t, {
                                      class: v(e.n("chip")),
                                      "var-select-cover": "",
                                      closeable: "",
                                      size: "small",
                                      type: e.errorMessage ? "danger" : void 0,
                                      key: l,
                                      onClick: n[0] || (n[0] = Cn(() => {
                                      }, ["stop"])),
                                      onClose: () => e.handleClose(l)
                                    }, {
                                      default: me(() => [
                                        Ie(
                                          ae(l),
                                          1
                                          /* TEXT */
                                        )
                                      ]),
                                      _: 2
                                      /* DYNAMIC */
                                    }, 1032, ["class", "type", "onClose"]))),
                                    128
                                    /* KEYED_FRAGMENT */
                                  ))
                                ],
                                2
                                /* CLASS */
                              )) : (p(), S(
                                "div",
                                {
                                  key: 1,
                                  class: v(e.n("values"))
                                },
                                ae(e.labels.join(e.separator)),
                                3
                                /* TEXT, CLASS */
                              ))
                            ],
                            64
                            /* STABLE_FRAGMENT */
                          )) : (p(), S(
                            "span",
                            lP,
                            ae(e.label),
                            1
                            /* TEXT */
                          ))
                        ])
                      ],
                      2
                      /* CLASS */
                    ),
                    e.enableCustomPlaceholder ? (p(), S(
                      "span",
                      {
                        key: 0,
                        class: v(e.classes(e.n("placeholder"), e.n("$--ellipsis"))),
                        style: F({
                          color: e.placeholderColor
                        })
                      },
                      ae(e.placeholder),
                      7
                      /* TEXT, CLASS, STYLE */
                    )) : Q("v-if", !0),
                    R(e.$slots, "arrow-icon", { focus: e.showMenu }, () => [
                      Z(o, {
                        class: v(e.classes(e.n("arrow"), [e.showMenu, e.n("--arrow-rotate")])),
                        "var-select-cover": "",
                        name: "menu-down",
                        transition: 300
                      }, null, 8, ["class"])
                    ])
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ]),
              _: 2
              /* DYNAMIC */
            }, [
              e.$slots["prepend-icon"] ? {
                name: "prepend-icon",
                fn: me(() => [
                  R(e.$slots, "prepend-icon")
                ]),
                key: "0"
              } : void 0
            ]),
            1040
            /* FULL_PROPS, DYNAMIC_SLOTS */
          )
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["show", "class", "popover-class", "offset-y", "disabled", "placement", "onClickOutside"]),
      Z(i, {
        "error-message": e.errorMessage,
        onClick: n[2] || (n[2] = Cn(() => {
        }, ["stop"]))
      }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const kv = x({
  name: rP,
  components: {
    VarIcon: He,
    VarMenu: Xt,
    VarChip: cr,
    VarFieldDecorator: yo,
    VarFormDetails: pn
  },
  props: oP,
  setup(e) {
    const n = C(!1), t = C(!1), o = M(() => e.multiple), r = M(() => e.focusColor), a = M(() => Rn(e.modelValue)), i = M(() => e.disabled || e.readonly ? "" : "pointer"), l = C(0), { bindForm: s, form: u } = Mn(), { length: d, options: c, bindOptions: f } = _C(), { label: m, labels: g, computeLabel: h, getSelectedValue: b } = ov({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => c,
      optionProvidersLength: () => d.value
    }), {
      errorMessage: w,
      validateWithTrigger: E,
      validate: T,
      // expose
      resetValidation: $
    } = Bn(), P = C(null), I = M(() => e.variant === "outlined" ? "bottom" : "cover-top"), k = M(() => {
      const { hint: ne, blurColor: H, focusColor: _ } = e;
      if (!ne)
        return w.value ? "var(--field-decorator-error-color)" : n.value ? _ || "var(--field-decorator-focus-color)" : H || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    }), D = M(() => !e.hint && Rn(e.modelValue)), O = {
      multiple: o,
      focusColor: r,
      computeLabel: h,
      onSelect: te,
      reset: q,
      validate: le,
      resetValidation: $
    };
    ce(
      () => e.multiple,
      () => {
        const { multiple: ne, modelValue: H } = e;
        ne && !Ae(H) && Sn("Select", "The modelValue must be an array when multiple is true");
      }
    ), f(O), y(s, O);
    function N(ne) {
      Ye(() => {
        const { validateTrigger: H, rules: _, modelValue: ue } = e;
        E(H, ne, _, ue);
      });
    }
    function z() {
      const { disabled: ne, readonly: H, onFocus: _ } = e;
      u != null && u.disabled.value || u != null && u.readonly.value || ne || H || (l.value = Fe(e.offsetY), n.value = !0, y(_), N("onFocus"));
    }
    function U() {
      const { disabled: ne, readonly: H, onBlur: _ } = e;
      u != null && u.disabled.value || u != null && u.readonly.value || ne || H || (Y(), y(_), N("onBlur"));
    }
    function te(ne) {
      const { disabled: H, readonly: _, multiple: ue, onChange: V } = e;
      if (u != null && u.disabled.value || u != null && u.readonly.value || H || _)
        return;
      const W = b(ne);
      y(e["onUpdate:modelValue"], W), y(V, W), N("onChange"), ue || Y();
    }
    function G() {
      const { disabled: ne, readonly: H, multiple: _, clearable: ue, onClear: V } = e;
      if (u != null && u.disabled.value || u != null && u.readonly.value || ne || H || !ue)
        return;
      const W = _ ? [] : void 0;
      y(e["onUpdate:modelValue"], W), y(V, W), N("onClear");
    }
    function j(ne) {
      const { disabled: H, onClick: _ } = e;
      u != null && u.disabled.value || H || (y(_, ne), N("onClick"));
    }
    function X(ne) {
      const { disabled: H, readonly: _, modelValue: ue, onClose: V } = e;
      if (u != null && u.disabled.value || u != null && u.readonly.value || H || _)
        return;
      const W = c.find(({ label: Ee }) => Ee.value === ne), he = ue.filter(
        (Ee) => {
          var oe;
          return Ee !== ((oe = W.value.value) != null ? oe : W.label.value);
        }
      );
      y(e["onUpdate:modelValue"], he), y(V, he), N("onClose");
    }
    function J() {
      l.value = Fe(e.offsetY), n.value = !0, t.value = !0;
    }
    function Y() {
      n.value = !1, t.value = !1;
    }
    function le() {
      return T(e.rules, e.modelValue);
    }
    function q() {
      y(e["onUpdate:modelValue"], e.multiple ? [] : void 0), $();
    }
    return {
      offsetY: l,
      isFocus: n,
      showMenu: t,
      errorMessage: w,
      formDisabled: u == null ? void 0 : u.disabled,
      formReadonly: u == null ? void 0 : u.readonly,
      label: m,
      labels: g,
      isEmptyModelValue: a,
      menuEl: P,
      placement: I,
      cursor: i,
      placeholderColor: k,
      enableCustomPlaceholder: D,
      n: aP,
      classes: iP,
      handleFocus: z,
      handleBlur: U,
      handleClear: G,
      handleClick: j,
      handleClose: X,
      reset: q,
      validate: le,
      resetValidation: $,
      focus: J,
      blur: Y
    };
  }
});
kv.render = sP;
var Gl = kv;
re(Gl);
const FI = Gl;
var _a = Gl;
const uP = {
  loading: {
    type: Boolean,
    default: !0
  },
  title: Boolean,
  card: Boolean,
  avatar: Boolean,
  fullscreen: Boolean,
  fullscreenZIndex: {
    type: [Number, String],
    default: 100
  },
  titleWidth: [Number, String],
  cardHeight: [Number, String],
  avatarSize: [Number, String],
  rows: {
    type: [Number, String],
    default: 3
  },
  rowsWidth: {
    type: Array,
    default: () => []
  }
}, { name: dP, n: cP, classes: fP } = ee("skeleton");
function vP(e, n) {
  return p(), S(
    "div",
    {
      class: v(e.classes(e.n("$--box"), e.n()))
    },
    [
      e.loading ? Q("v-if", !0) : (p(), S(
        "div",
        {
          key: 0,
          class: v(e.n("data"))
        },
        [
          R(e.$slots, "default")
        ],
        2
        /* CLASS */
      )),
      e.loading && !e.fullscreen ? (p(), S(
        "div",
        {
          key: 1,
          class: v(e.n("content"))
        },
        [
          e.card ? (p(), S(
            "div",
            {
              key: 0,
              class: v(e.n("card")),
              style: F({ height: e.toSizeUnit(e.cardHeight) })
            },
            [
              B(
                "div",
                {
                  class: v(e.n("--animation"))
                },
                null,
                2
                /* CLASS */
              )
            ],
            6
            /* CLASS, STYLE */
          )) : Q("v-if", !0),
          e.avatar || e.title || e.toNumber(e.rows) > 0 ? (p(), S(
            "div",
            {
              key: 1,
              class: v(e.n("article"))
            },
            [
              e.avatar ? (p(), S(
                "div",
                {
                  key: 0,
                  class: v(e.n("avatar")),
                  style: F({
                    width: e.toSizeUnit(e.avatarSize),
                    height: e.toSizeUnit(e.avatarSize)
                  })
                },
                [
                  B(
                    "div",
                    {
                      class: v(e.n("--animation"))
                    },
                    null,
                    2
                    /* CLASS */
                  )
                ],
                6
                /* CLASS, STYLE */
              )) : Q("v-if", !0),
              e.title || e.toNumber(e.rows) > 0 ? (p(), S(
                "div",
                {
                  key: 1,
                  class: v(e.n("section"))
                },
                [
                  e.title ? (p(), S(
                    "div",
                    {
                      key: 0,
                      class: v(e.n("title")),
                      style: F({ width: e.toSizeUnit(e.titleWidth) })
                    },
                    [
                      B(
                        "div",
                        {
                          class: v(e.n("--animation"))
                        },
                        null,
                        2
                        /* CLASS */
                      )
                    ],
                    6
                    /* CLASS, STYLE */
                  )) : Q("v-if", !0),
                  (p(!0), S(
                    Ne,
                    null,
                    Ge(e.toNumber(e.rows), (t, o) => (p(), S(
                      "div",
                      {
                        class: v(e.n("row")),
                        key: t,
                        style: F({ width: e.toSizeUnit(e.rowsWidth[o]) })
                      },
                      [
                        B(
                          "div",
                          {
                            class: v(e.n("--animation"))
                          },
                          null,
                          2
                          /* CLASS */
                        )
                      ],
                      6
                      /* CLASS, STYLE */
                    ))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ],
                2
                /* CLASS */
              )) : Q("v-if", !0)
            ],
            2
            /* CLASS */
          )) : Q("v-if", !0)
        ],
        2
        /* CLASS */
      )) : Q("v-if", !0),
      e.loading && e.fullscreen ? (p(), S(
        "div",
        {
          key: 2,
          class: v(e.n("fullscreen")),
          style: F({ zIndex: e.toNumber(e.fullscreenZIndex) })
        },
        [
          B(
            "div",
            {
              class: v(e.n("--animation"))
            },
            null,
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      )) : Q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Pv = x({
  name: dP,
  props: uP,
  setup: () => ({
    n: cP,
    classes: fP,
    toSizeUnit: Se,
    toNumber: L
  })
});
Pv.render = vP;
var Xl = Pv;
re(Xl);
const YI = Xl;
var xa = Xl, Xe = /* @__PURE__ */ ((e) => (e.First = "1", e.Second = "2", e))(Xe || {});
const mP = {
  modelValue: {
    type: [Number, Array],
    default: 0
  },
  step: {
    type: [Number, String],
    default: 1
  },
  range: Boolean,
  labelVisible: {
    type: String,
    default: "normal"
  },
  activeColor: String,
  trackColor: String,
  thumbColor: String,
  labelColor: String,
  labelTextColor: String,
  trackHeight: [String, Number],
  max: {
    type: [String, Number],
    default: 100
  },
  min: {
    type: [String, Number],
    default: 0
  },
  thumbSize: [String, Number],
  disabled: Boolean,
  readonly: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  rules: Array,
  onChange: A(),
  onStart: A(),
  onEnd: A(),
  "onUpdate:modelValue": A()
}, { name: hP, n: fd, classes: pP } = ee("slider"), gP = ["onTouchstart"];
function bP(e, n) {
  const t = ie("var-hover-overlay"), o = ie("var-form-details"), r = Ve("hover");
  return p(), S(
    "div",
    {
      class: v(e.classes(e.n(e.direction), e.n("$--box")))
    },
    [
      B(
        "div",
        {
          class: v(e.classes(e.n(`${e.direction}-block`), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n(`${e.direction}--error`)])),
          ref: "sliderEl",
          onClick: n[0] || (n[0] = (...a) => e.click && e.click(...a))
        },
        [
          B(
            "div",
            {
              class: v(e.n(`${e.direction}-track`))
            },
            [
              B(
                "div",
                {
                  class: v(e.n(`${e.direction}-track-background`)),
                  style: F({
                    background: e.trackColor,
                    height: e.isVertical ? "100%" : e.multiplySizeUnit(e.trackHeight),
                    width: e.isVertical ? e.multiplySizeUnit(e.trackHeight) : "100%"
                  })
                },
                null,
                6
                /* CLASS, STYLE */
              ),
              B(
                "div",
                {
                  class: v(e.n(`${e.direction}-track-fill`)),
                  style: F(e.getFillStyle)
                },
                null,
                6
                /* CLASS, STYLE */
              )
            ],
            2
            /* CLASS */
          ),
          (p(!0), S(
            Ne,
            null,
            Ge(e.thumbList, (a) => (p(), S("div", {
              class: v(e.n(`${e.direction}-thumb`)),
              key: a.enumValue,
              style: F(e.thumbStyle(a)),
              onTouchstart: Cn((i) => e.start(i, a.enumValue), ["stop"])
            }, [
              R(e.$slots, "button", {
                currentValue: a.text
              }, () => [
                Te(B(
                  "div",
                  {
                    class: v(e.n(`${e.direction}-thumb-block`)),
                    style: F({
                      background: e.thumbColor
                    })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                ), [
                  [r, (i) => e.hover(i, a), "desktop"]
                ]),
                B(
                  "div",
                  {
                    class: v(
                      e.classes(e.n(`${e.direction}-thumb-ripple`), [
                        e.thumbsProps[a.enumValue].active,
                        e.n(`${e.direction}-thumb-ripple--active`)
                      ])
                    ),
                    style: F({
                      background: e.thumbsProps[a.enumValue].active ? e.thumbColor : void 0
                    })
                  },
                  [
                    Z(t, {
                      hovering: a.hovering
                    }, null, 8, ["hovering"])
                  ],
                  6
                  /* CLASS, STYLE */
                ),
                B(
                  "div",
                  {
                    class: v(
                      e.classes(e.n(`${e.direction}-thumb-label`), [e.showLabel(a.enumValue), e.n(`${e.direction}-thumb-label--active`)])
                    ),
                    style: F({
                      background: e.labelColor,
                      color: e.labelTextColor,
                      height: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2),
                      width: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2)
                    })
                  },
                  [
                    B(
                      "span",
                      null,
                      ae(a.text),
                      1
                      /* TEXT */
                    )
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ])
            ], 46, gP))),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      ),
      Z(o, {
        "error-message": e.errorMessage,
        class: v(e.n("form")),
        "var-slider-cover": ""
      }, null, 8, ["error-message", "class"])
    ],
    2
    /* CLASS */
  );
}
const Ov = x({
  name: hP,
  components: {
    VarFormDetails: pn,
    VarHoverOverlay: In
  },
  directives: { Hover: kn },
  props: mP,
  setup(e) {
    const n = C(0), t = C(null), o = C(!1), r = M(() => L(e.max) - L(e.min)), a = M(() => n.value / r.value * L(e.step)), i = M(() => e.disabled || (d == null ? void 0 : d.disabled.value)), l = M(() => e.readonly || (d == null ? void 0 : d.readonly.value)), s = M(() => e.direction === "vertical"), { bindForm: u, form: d } = Mn(), { errorMessage: c, validateWithTrigger: f, validate: m, resetValidation: g } = Bn(), { hovering: h, handleHovering: b } = Hn(), { hovering: w, handleHovering: E } = Hn(), T = M(() => {
      const { modelValue: oe, range: de } = e;
      let ke = [];
      return de && Ae(oe) ? ke = [
        {
          value: G(oe[0]),
          enumValue: Xe.First,
          text: j(oe[0]),
          hovering: ao(h),
          handleHovering: b
        },
        {
          value: G(oe[1]),
          enumValue: Xe.Second,
          text: j(oe[1]),
          hovering: ao(w),
          handleHovering: E
        }
      ] : mn(oe) && (ke = [
        {
          value: G(oe),
          enumValue: Xe.First,
          text: j(oe),
          hovering: ao(h),
          handleHovering: b
        }
      ]), ke;
    }), $ = M(() => {
      const { activeColor: oe, range: de, modelValue: ke } = e, Ue = de && Ae(ke) ? G(Math.min(ke[0], ke[1])) : 0, se = de && Ae(ke) ? G(Math.max(ke[0], ke[1])) - Ue : G(ke);
      return s.value ? {
        left: "0px",
        height: `${se}%`,
        bottom: `${Ue}%`,
        background: oe
      } : {
        top: "0px",
        width: `${se}%`,
        left: `${Ue}%`,
        background: oe
      };
    }), P = je({
      [Xe.First]: O(),
      [Xe.Second]: O()
    });
    let I;
    y(u, {
      reset: Ee,
      validate: D,
      resetValidation: g
    }), ce([() => e.modelValue, () => e.step], ([oe, de]) => {
      !V() || !W() || o.value || he(oe, L(de));
    }), ce(n, () => he()), rn(() => {
      !V() || !W() || (n.value = t.value[s.value ? "offsetHeight" : "offsetWidth"]);
    }), $r(() => {
      q();
    });
    function D() {
      return m(e.rules, e.modelValue);
    }
    function O() {
      return {
        startPosition: 0,
        currentOffset: 0,
        active: !1,
        percentValue: 0
      };
    }
    function N() {
      return Ye(() => f(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function z(oe) {
      const de = oe.currentTarget;
      return de ? s.value ? n.value - (oe.clientY - en(de).top) : oe.clientX - nh(de) : 0;
    }
    function U(oe) {
      return {
        [s.value ? "bottom" : "left"]: `${oe.value}%`,
        zIndex: P[oe.enumValue].active ? 1 : void 0
      };
    }
    function te(oe) {
      return e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : P[oe].active;
    }
    function G(oe) {
      const { min: de, max: ke } = e;
      return oe < L(de) ? 0 : oe > L(ke) ? 100 : (oe - L(de)) / r.value * 100;
    }
    function j(oe) {
      if (!mn(oe))
        return 0;
      let de = oe;
      return de < Number(e.min) && (de = Number(e.min)), de > Number(e.max) && (de = Number(e.max)), parseInt(`${de}`, 10) === de ? de : L(de.toPrecision(5));
    }
    function X(oe, de) {
      i.value || de.handleHovering(oe);
    }
    function J(oe, de) {
      let ke = [];
      const { step: Ue, range: se, modelValue: ge, onChange: De, min: qe } = e, fe = L(Ue), Ce = Math.round(oe / a.value), ye = Ce * fe + L(qe), Me = P[de].percentValue * fe + L(qe);
      if (P[de].percentValue = Ce, se && Ae(ge) && (ke = de === Xe.First ? [ye, ge[1]] : [ge[0], ye]), Me !== ye) {
        const Be = se ? ke.map((Je) => j(Je)) : j(ye);
        y(De, Be), y(e["onUpdate:modelValue"], Be), N();
      }
    }
    function Y(oe) {
      if (!e.range)
        return Xe.First;
      const de = P[Xe.First].percentValue * a.value, ke = P[Xe.Second].percentValue * a.value, Ue = Math.abs(oe - de), se = Math.abs(oe - ke);
      return Ue <= se ? Xe.First : Xe.Second;
    }
    function le() {
      document.addEventListener("touchmove", H, { passive: !1 }), document.addEventListener("touchend", _), document.addEventListener("touchcancel", _);
    }
    function q() {
      document.removeEventListener("touchmove", H), document.removeEventListener("touchend", _), document.removeEventListener("touchcancel", _);
    }
    function ne(oe, de) {
      if (n.value || (n.value = t.value.offsetWidth), i.value || (P[de].active = !0), I = de, le(), i.value || l.value)
        return;
      y(e.onStart), o.value = !0;
      const { clientX: ke, clientY: Ue } = oe.touches[0];
      P[de].startPosition = s.value ? Ue : ke;
    }
    function H(oe) {
      if (Ln(oe), i.value || l.value || !o.value)
        return;
      const { startPosition: de, currentOffset: ke } = P[I], { clientX: Ue, clientY: se } = oe.touches[0];
      let ge = (s.value ? de - se : Ue - de) + ke;
      ge <= 0 ? ge = 0 : ge >= n.value && (ge = n.value), J(ge, I);
    }
    function _() {
      q();
      const { range: oe, modelValue: de, onEnd: ke, step: Ue, min: se } = e;
      if (i.value || (P[I].active = !1), i.value || l.value)
        return;
      let ge = [];
      P[I].currentOffset = P[I].percentValue * a.value;
      const De = P[I].percentValue * L(Ue) + L(se);
      oe && Ae(de) && (ge = I === Xe.First ? [De, de[1]] : [de[0], De]), y(ke, oe ? ge : De), o.value = !1;
    }
    function ue(oe) {
      if (i.value || l.value || oe.target.closest(`.${fd("thumb")}`))
        return;
      const de = z(oe), ke = Y(de);
      I = ke, J(de, ke), _();
    }
    function V() {
      const oe = L(e.step);
      return isNaN(oe) ? (Ps("Slider", 'type of prop "step" should be Number'), !1) : oe < 0 ? (Ps("Slider", '"step" should be > 0'), !1) : !0;
    }
    function W() {
      const { range: oe, modelValue: de } = e;
      return oe && !Ae(de) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !oe && Ae(de) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : oe && Ae(de) && de.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }
    function he(oe = e.modelValue, de = L(e.step)) {
      const ke = (Ue) => {
        const { min: se, max: ge } = e;
        return Ue < L(se) ? 0 : Ue > L(ge) ? r.value / de : (Ue - L(se)) / de;
      };
      e.range && Ae(oe) ? (P[Xe.First].percentValue = ke(oe[0]), P[Xe.First].currentOffset = P[Xe.First].percentValue * a.value, P[Xe.Second].percentValue = ke(oe[1]), P[Xe.Second].currentOffset = P[Xe.Second].percentValue * a.value) : mn(oe) && (P[Xe.First].currentOffset = ke(oe) * a.value);
    }
    function Ee() {
      const oe = e.range ? [0, 0] : 0;
      y(e["onUpdate:modelValue"], oe), g();
    }
    return {
      Thumbs: Xe,
      sliderEl: t,
      getFillStyle: $,
      isDisabled: i,
      isVertical: s,
      errorMessage: c,
      thumbsProps: P,
      thumbList: T,
      n: fd,
      classes: pP,
      thumbStyle: U,
      hover: X,
      multiplySizeUnit: dn,
      toNumber: L,
      showLabel: te,
      start: ne,
      move: H,
      end: _,
      click: ue
    };
  }
});
Ov.render = bP;
var Kl = Ov;
re(Kl);
const jI = Kl;
var ei = Kl, yP = Object.defineProperty, $P = Object.defineProperties, wP = Object.getOwnPropertyDescriptors, vd = Object.getOwnPropertySymbols, CP = Object.prototype.hasOwnProperty, SP = Object.prototype.propertyIsEnumerable, md = (e, n, t) => n in e ? yP(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, kP = (e, n) => {
  for (var t in n || (n = {}))
    CP.call(n, t) && md(e, t, n[t]);
  if (vd)
    for (var t of vd(n))
      SP.call(n, t) && md(e, t, n[t]);
  return e;
}, PP = (e, n) => $P(e, wP(n));
const Tv = {
  type: String,
  position: {
    type: String,
    default: "top"
  },
  content: {
    type: [String, Function, Object]
  },
  contentClass: String,
  duration: {
    type: Number,
    default: 3e3
  },
  vertical: Boolean,
  loadingType: Oe(at, "type"),
  loadingSize: Oe(at, "size"),
  loadingRadius: Oe(at, "radius"),
  loadingColor: PP(kP({}, Oe(at, "color")), {
    default: "currentColor"
  }),
  lockScroll: Boolean,
  show: Boolean,
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  forbidClick: Boolean,
  onOpen: A(),
  onOpened: A(),
  onClose: A(),
  onClosed: A(),
  "onUpdate:show": A(),
  _update: String
}, { n: OP, classes: TP } = ee("snackbar"), EP = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function IP(e, n) {
  const t = ie("var-icon"), o = ie("var-loading");
  return Te((p(), S(
    "div",
    {
      class: v(e.n()),
      style: F({ pointerEvents: e.isForbidClick ? "auto" : "none", zIndex: e.zIndex })
    },
    [
      B(
        "div",
        {
          class: v(
            e.classes(
              e.n("wrapper"),
              e.n(`wrapper-${e.position}`),
              e.n("$-elevation--4"),
              [e.vertical, e.n("vertical")],
              [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n(`wrapper-${e.type}`)]
            )
          ),
          style: F({ zIndex: e.zIndex })
        },
        [
          B(
            "div",
            {
              class: v([e.n("content"), e.contentClass])
            },
            [
              R(e.$slots, "default", {}, () => [
                Ie(
                  ae(e.content),
                  1
                  /* TEXT */
                )
              ])
            ],
            2
            /* CLASS */
          ),
          B(
            "div",
            {
              class: v([e.n("icon")])
            },
            [
              e.iconName ? (p(), $e(t, {
                key: 0,
                name: e.iconName
              }, null, 8, ["name"])) : Q("v-if", !0),
              e.type === "loading" ? (p(), $e(o, {
                key: 1,
                type: e.loadingType,
                size: e.loadingSize,
                color: e.loadingColor,
                radius: e.loadingRadius
              }, null, 8, ["type", "size", "color", "radius"])) : Q("v-if", !0),
              R(e.$slots, "icon")
            ],
            2
            /* CLASS */
          ),
          B(
            "div",
            {
              class: v(e.n("action"))
            },
            [
              R(e.$slots, "action")
            ],
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  )), [
    [Un, e.show]
  ]);
}
const Ev = x({
  name: "VarSnackbarCore",
  components: {
    VarLoading: Yt,
    VarIcon: He
  },
  props: Tv,
  setup(e) {
    const n = C(null), { zIndex: t } = Do(() => e.show, 1);
    Mo(
      () => e.show,
      () => e.lockScroll
    );
    const o = M(() => e.type === "loading" || e.forbidClick), r = M(() => e.type ? EP[e.type] : ""), a = () => {
      n.value = setTimeout(() => {
        e.type !== "loading" && y(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return ce(
      () => e.show,
      (i) => {
        i ? (y(e.onOpen), a()) : i === !1 && (clearTimeout(n.value), y(e.onClose));
      }
    ), ce(
      () => e._update,
      () => {
        clearTimeout(n.value), a();
      }
    ), rn(() => {
      e.show && (y(e.onOpen), a());
    }), {
      SNACKBAR_TYPE: Mv,
      n: OP,
      classes: TP,
      zIndex: t,
      iconName: r,
      isForbidClick: o
    };
  }
});
Ev.render = IP;
var Iv = Ev;
const { name: BP, n: MP } = ee("snackbar");
function DP(e, n) {
  const t = ie("var-snackbar-core");
  return p(), $e(jn, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.disabled || e.teleport === !1
  }, [
    Z(We, {
      name: `${e.n()}-fade`,
      onAfterEnter: e.onOpened,
      onAfterLeave: e.onClosed
    }, {
      default: me(() => [
        Z(t, ze(e.$props, {
          class: e.n("transition")
        }), {
          icon: me(() => [
            R(e.$slots, "icon")
          ]),
          action: me(() => [
            R(e.$slots, "action")
          ]),
          default: me(() => [
            R(e.$slots, "default", {}, () => [
              Ie(
                ae(e.content),
                1
                /* TEXT */
              )
            ])
          ]),
          _: 3
          /* FORWARDED */
        }, 16, ["class"])
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])
  ], 8, ["to", "disabled"]);
}
const Bv = x({
  name: BP,
  components: { VarSnackbarCore: Iv },
  props: Tv,
  setup() {
    const { disabled: e } = Et();
    return {
      disabled: e,
      n: MP
    };
  }
});
Bv.render = DP;
var Nr = Bv, NP = Object.defineProperty, hd = Object.getOwnPropertySymbols, VP = Object.prototype.hasOwnProperty, AP = Object.prototype.propertyIsEnumerable, pd = (e, n, t) => n in e ? NP(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, ko = (e, n) => {
  for (var t in n || (n = {}))
    VP.call(n, t) && pd(e, t, n[t]);
  if (hd)
    for (var t of hd(n))
      AP.call(n, t) && pd(e, t, n[t]);
  return e;
};
const Mv = ["loading", "success", "warning", "info", "error"];
let gd = 0, ni = !1, Dv, Po = !1;
const Nv = {
  type: void 0,
  content: "",
  icon: "",
  action: "",
  position: "top",
  duration: 3e3,
  vertical: !1,
  contentClass: void 0,
  loadingType: "circle",
  loadingSize: "normal",
  lockScroll: !1,
  teleport: "body",
  forbidClick: !1,
  onOpen: () => {
  },
  onOpened: () => {
  },
  onClose: () => {
  },
  onClosed: () => {
  }
};
let En = je([]), Zl = Nv;
const zP = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, Wr = (e) => () => Qt(e) ? e() : e, LP = {
  setup() {
    return () => {
      const e = En.map(({
        id: n,
        reactiveSnackOptions: t,
        _update: o
      }) => {
        const r = document.querySelector(".var-transition-group");
        t.forbidClick || t.type === "loading" ? r.classList.add("var-pointer-auto") : r.classList.remove("var-pointer-auto");
        const a = ko({
          position: Po ? "relative" : "absolute"
        }, jP(t.position)), {
          content: i,
          icon: l,
          action: s
        } = t, u = {
          default: Wr(i),
          icon: Wr(l),
          action: Wr(s)
        };
        return Z(Iv, ze(t, {
          key: n,
          style: a,
          "data-id": n,
          _update: o,
          show: t.show,
          "onUpdate:show": (d) => t.show = d
        }), u);
      });
      return Z(sm, ze(zP, {
        style: {
          zIndex: wn.zIndex
        },
        onAfterEnter: RP,
        onAfterLeave: UP
      }), {
        default: () => [e]
      });
    };
  }
}, Zn = function(e) {
  const n = FP(e), t = je(ko(ko({}, Zl), n));
  t.show = !0, ni || (ni = !0, Dv = eo(LP).unmountInstance);
  const {
    length: o
  } = En, r = {
    id: gd++,
    reactiveSnackOptions: t
  };
  if (o === 0 || Po)
    HP(r);
  else {
    const a = `update-${gd}`;
    YP(t, a);
  }
  return {
    clear() {
      !Po && En.length ? En[0].reactiveSnackOptions.show = !1 : t.show = !1;
    }
  };
};
Mv.forEach((e) => {
  Zn[e] = (n) => (co(n) ? n.type = e : n = {
    content: n,
    type: e
  }, Zn(n));
});
Zn.allowMultiple = function(e = !1) {
  e !== Po && (En.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Po = e);
};
Zn.clear = function() {
  En.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
Zn.setDefaultOptions = function(e) {
  Zl = e;
};
Zn.resetDefaultOptions = function() {
  Zl = Nv;
};
function RP(e) {
  const n = e.getAttribute("data-id"), t = En.find((o) => o.id === L(n));
  t && y(t.reactiveSnackOptions.onOpened);
}
function UP(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  const n = e.getAttribute("data-id"), t = En.find((r) => r.id === L(n));
  t && (t.animationEnd = !0, y(t.reactiveSnackOptions.onClosed)), En.every((r) => r.animationEnd) && (y(Dv), En = je([]), ni = !1);
}
function HP(e) {
  En.push(e);
}
function FP(e = {}) {
  return nn(e) ? {
    content: e
  } : e;
}
function YP(e, n) {
  const [t] = En;
  t.reactiveSnackOptions = ko(ko({}, t.reactiveSnackOptions), e), t._update = n;
}
function jP(e = "top") {
  return e === "bottom" ? {
    top: "85%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
Zn.Component = Nr;
re(Nr);
re(Nr, Zn);
const WI = Nr;
var ti = Zn;
const WP = {
  size: {
    type: [String, Number, Array],
    default: "normal"
  },
  wrap: {
    type: Boolean,
    default: !0
  },
  direction: {
    type: String,
    default: "row"
  },
  justify: {
    type: String,
    default: "flex-start"
  },
  align: String,
  inline: Boolean
};
function $n(e) {
  return `calc(${e} / 2)`;
}
function qP(e, n, t) {
  const { direction: o, justify: r, index: a, lastIndex: i } = t;
  let l = "0";
  return o === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(r) ? a !== i ? l = `${$n(e)} ${n} ${$n(e)} 0` : l = `${$n(e)} 0` : r === "space-around" ? l = `${$n(e)} ${$n(n)}` : r === "space-between" && (a === 0 ? l = `${$n(e)} ${$n(n)} ${$n(e)} 0` : a === i ? l = `${$n(e)} 0 ${$n(e)} ${$n(n)}` : l = `${$n(e)} ${$n(n)}`)), o === "column" && a !== i && (l = `0 0 ${e} 0`), l;
}
const GP = (e) => ["mini", "small", "normal", "large"].includes(e), {
  name: XP,
  n: qr,
  classes: KP
} = ee("space");
function ZP(e, n) {
  return n ? [`var(--space-size-${e}-y)`, `var(--space-size-${e}-x)`] : Ae(e) ? e.map(Se) : [Se(e), Se(e)];
}
var Jl = x({
  name: XP,
  props: WP,
  setup(e, {
    slots: n
  }) {
    return () => {
      var t;
      const {
        inline: o,
        justify: r,
        align: a,
        wrap: i,
        direction: l,
        size: s
      } = e;
      let u = (t = y(n.default)) != null ? t : [];
      const [d, c] = ZP(s, GP(s));
      u = Nd(u);
      const f = u.length - 1, m = u.map((g, h) => {
        const b = qP(d, c, {
          direction: l,
          justify: r,
          index: h,
          lastIndex: f
        });
        return Z("div", {
          style: {
            margin: b
          }
        }, [g]);
      });
      return Z("div", {
        class: KP(qr(), qr("$--box"), [o, qr("--inline")]),
        style: {
          flexDirection: l,
          justifyContent: lr(r),
          alignItems: lr(a),
          flexWrap: i ? "wrap" : "nowrap",
          margin: l === "row" ? `calc(-1 * ${d} / 2) 0` : void 0
        }
      }, [m]);
    };
  }
});
re(Jl);
const qI = Jl;
var oi = Jl;
const JP = {
  activeIcon: {
    type: String,
    default: "check"
  },
  currentIcon: Oe(Ke, "name"),
  inactiveIcon: Oe(Ke, "name"),
  activeIconNamespace: Oe(Ke, "namespace"),
  currentIconNamespace: Oe(Ke, "namespace"),
  inactiveIconNamespace: Oe(Ke, "namespace")
}, Vv = Symbol("STEPS_BIND_STEP_KEY");
function QP() {
  const { bindChildren: e, childProviders: n } = ln(Vv);
  return {
    step: n,
    bindStep: e
  };
}
function _P() {
  const { parentProvider: e, index: n, bindParent: t } = an(Vv);
  return t || Sn("Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: t
  };
}
const { name: xP, n: eO, classes: nO } = ee("step"), tO = { key: 3 };
function oO(e, n) {
  const t = ie("var-icon");
  return p(), S(
    "div",
    {
      class: v(e.n())
    },
    [
      B(
        "div",
        {
          class: v(e.n(e.direction))
        },
        [
          B(
            "div",
            {
              class: v(e.classes(e.n(`${e.direction}-tag`), [e.isActive || e.isCurrent, e.n(`${e.direction}-tag--active`)])),
              style: F({ backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor }),
              onClick: n[0] || (n[0] = (...o) => e.click && e.click(...o))
            },
            [
              e.isActive ? (p(), $e(t, {
                key: 0,
                class: v(e.n("icon")),
                "var-step-cover": "",
                name: e.activeIcon,
                namespace: e.activeIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : e.isCurrent && e.currentIcon ? (p(), $e(t, {
                key: 1,
                class: v(e.n("icon")),
                "var-step-cover": "",
                name: e.currentIcon,
                namespace: e.currentIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : e.inactiveIcon ? (p(), $e(t, {
                key: 2,
                class: v(e.n("icon")),
                "var-step-cover": "",
                name: e.inactiveIcon,
                namespace: e.inactiveIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : (p(), S(
                "span",
                tO,
                ae(e.index + 1),
                1
                /* TEXT */
              ))
            ],
            6
            /* CLASS, STYLE */
          ),
          B(
            "div",
            {
              class: v(e.classes(e.n(`${e.direction}-content`), [e.isActive || e.isCurrent, e.n(`${e.direction}-content--active`)])),
              onClick: n[1] || (n[1] = (...o) => e.click && e.click(...o))
            },
            [
              R(e.$slots, "default")
            ],
            2
            /* CLASS */
          ),
          B(
            "div",
            {
              class: v(e.n(`${e.direction}-line`))
            },
            null,
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
const Av = x({
  name: xP,
  components: { VarIcon: He },
  props: JP,
  setup() {
    const { index: e, steps: n, bindSteps: t } = _P(), { active: o, activeColor: r, inactiveColor: a, direction: i, clickStep: l } = n, s = M(() => o.value === e.value), u = M(() => e.value !== -1 && L(o.value) > e.value);
    t({ index: e });
    function c() {
      return l(e.value);
    }
    return {
      index: e,
      isActive: u,
      isCurrent: s,
      direction: i,
      activeColor: r,
      inactiveColor: a,
      n: eO,
      classes: nO,
      click: c
    };
  }
});
Av.render = oO;
var Ql = Av;
re(Ql);
const GI = Ql;
var ri = Ql;
const rO = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  activeColor: String,
  inactiveColor: String,
  onClickStep: A()
}, { name: aO, n: iO } = ee("steps");
function lO(e, n) {
  return p(), S(
    "div",
    {
      class: v(e.n()),
      style: F({ flexDirection: e.direction === "horizontal" ? "row" : "column" })
    },
    [
      R(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const zv = x({
  name: aO,
  props: rO,
  setup(e) {
    const n = M(() => e.active), t = M(() => e.activeColor), o = M(() => e.inactiveColor), r = M(() => e.direction), { bindStep: a } = QP();
    a({
      active: n,
      direction: r,
      activeColor: t,
      inactiveColor: o,
      clickStep: l
    });
    function l(s) {
      y(e.onClickStep, s);
    }
    return { n: iO };
  }
});
zv.render = lO;
var _l = zv;
re(_l);
const XI = _l;
var ai = _l;
const sO = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, { name: uO, n: dO } = ee("style-provider"), cO = x({
  name: uO,
  props: sO,
  setup(e, { slots: n }) {
    return () => Pd(
      e.tag,
      {
        class: dO(),
        style: Xd(e.styleVars)
      },
      y(n.default)
    );
  }
});
var Vr = cO;
const Gr = [];
function xl(e) {
  Gr.forEach((t) => document.documentElement.style.removeProperty(t)), Gr.length = 0;
  const n = Xd(e ?? {});
  Object.entries(n).forEach(([t, o]) => {
    document.documentElement.style.setProperty(t, o), Gr.push(t);
  });
}
xl.Component = Vr;
re(Vr);
re(Vr, xl);
const KI = Vr;
var ii = xl;
const fO = {
  modelValue: {
    default: !1
  },
  activeValue: {
    default: !0
  },
  inactiveValue: {
    default: !1
  },
  disabled: Boolean,
  readonly: Boolean,
  loading: Boolean,
  color: String,
  loadingColor: String,
  closeColor: String,
  size: [String, Number],
  rules: Array,
  ripple: {
    type: Boolean,
    default: !0
  },
  onClick: A(),
  onChange: A(),
  "onUpdate:modelValue": A()
}, { name: vO, n: mO, classes: hO } = ee("switch"), pO = (e) => (bt(""), e = e(), yt(), e), gO = /* @__PURE__ */ pO(() => /* @__PURE__ */ B(
  "svg",
  { viewBox: "25 25 50 50" },
  [
    /* @__PURE__ */ B("circle", {
      cx: "50",
      cy: "50",
      r: "20",
      fill: "none"
    })
  ],
  -1
  /* HOISTED */
)), bO = [
  gO
];
function yO(e, n) {
  const t = ie("var-hover-overlay"), o = ie("var-form-details"), r = Ve("ripple"), a = Ve("hover");
  return Te((p(), S(
    "div",
    {
      class: v(e.n())
    },
    [
      B(
        "div",
        {
          class: v(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")])),
          onClick: n[0] || (n[0] = (...i) => e.switchActive && e.switchActive(...i)),
          style: F(e.styleComputed.switch)
        },
        [
          B(
            "div",
            {
              style: F(e.styleComputed.track),
              class: v(
                e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")])
              )
            },
            null,
            6
            /* CLASS, STYLE */
          ),
          Te((p(), S(
            "div",
            {
              class: v(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
              style: F(e.styleComputed.ripple)
            },
            [
              B(
                "div",
                {
                  style: F(e.styleComputed.handle),
                  class: v(
                    e.classes(
                      e.n("handle"),
                      e.n("$-elevation--2"),
                      [e.modelValue === e.activeValue, e.n("handle--active")],
                      [e.errorMessage, e.n("handle--error")]
                    )
                  )
                },
                [
                  e.loading ? (p(), S(
                    "span",
                    {
                      key: 0,
                      class: v(e.n("loading")),
                      style: F({
                        width: e.radius,
                        height: e.radius
                      })
                    },
                    bO,
                    6
                    /* CLASS, STYLE */
                  )) : Q("v-if", !0)
                ],
                6
                /* CLASS, STYLE */
              ),
              Z(t, { hovering: e.hovering }, null, 8, ["hovering"])
            ],
            6
            /* CLASS, STYLE */
          )), [
            [r, {
              disabled: !e.ripple || e.disabled || e.loading || e.formDisabled
            }]
          ])
        ],
        6
        /* CLASS, STYLE */
      ),
      Z(o, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  )), [
    [a, e.hover, "desktop"]
  ]);
}
const Lv = x({
  name: vO,
  components: {
    VarFormDetails: pn,
    VarHoverOverlay: In
  },
  directives: { Ripple: Ze, Hover: kn },
  props: fO,
  setup(e) {
    const { bindForm: n, form: t } = Mn(), { errorMessage: o, validateWithTrigger: r, validate: a, resetValidation: i } = Bn(), { hovering: l, handleHovering: s } = Hn(), u = M(() => {
      const { size: w, modelValue: E, color: T, closeColor: $, loadingColor: P, activeValue: I } = e;
      return {
        handle: {
          width: dn(w),
          height: dn(w),
          backgroundColor: E === I ? T : $,
          color: P
        },
        ripple: {
          left: E === I ? dn(w, 0.5) : `-${dn(w, 0.5)}`,
          color: E === I ? T : $ || "#999",
          width: dn(w, 2),
          height: dn(w, 2)
        },
        track: {
          height: dn(w, 0.72),
          width: dn(w, 1.9),
          borderRadius: dn(w, 2 / 3),
          filter: E === I || o != null && o.value ? void 0 : "brightness(.6)",
          backgroundColor: E === I ? T : $
        },
        switch: {
          height: dn(w, 1.2),
          width: dn(w, 2)
        }
      };
    }), d = M(() => dn(e.size, 0.8));
    y(n, {
      reset: b,
      validate: f,
      resetValidation: i
    });
    function f() {
      return a(e.rules, e.modelValue);
    }
    function m() {
      return Ye(() => r(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function g(w) {
      const {
        onClick: E,
        onChange: T,
        disabled: $,
        loading: P,
        readonly: I,
        modelValue: k,
        activeValue: D,
        inactiveValue: O,
        "onUpdate:modelValue": N
      } = e;
      if (y(E, w), $ || P || I || t != null && t.disabled.value || t != null && t.readonly.value)
        return;
      const z = k === D ? O : D;
      y(T, z), y(N, z), m();
    }
    function h(w) {
      e.disabled || t != null && t.disabled.value || s(w);
    }
    function b() {
      y(e["onUpdate:modelValue"], e.inactiveValue), i();
    }
    return {
      hovering: l,
      radius: d,
      styleComputed: u,
      errorMessage: o,
      formDisabled: t == null ? void 0 : t.disabled,
      formReadonly: t == null ? void 0 : t.readonly,
      n: mO,
      classes: hO,
      multiplySizeUnit: dn,
      switchActive: g,
      hover: h
    };
  }
});
Lv.render = yO;
var es = Lv;
re(es);
const ZI = es;
var li = es;
const $O = {
  name: [String, Number],
  disabled: Boolean,
  onClick: A()
}, Rv = Symbol("TABS_BIND_TAB_KEY");
function wO() {
  const { childProviders: e, bindChildren: n, length: t } = ln(Rv);
  return {
    length: t,
    tabList: e,
    bindTabList: n
  };
}
function CO() {
  const { parentProvider: e, bindParent: n, index: t } = an(Rv);
  return n || Sn("Tab", "<var-tab/> must in <var-tabs/>"), {
    index: t,
    tabs: e,
    bindTabs: n
  };
}
const { name: SO, n: Zo, classes: kO } = ee("tab");
function PO(e, n) {
  const t = Ve("ripple");
  return Te((p(), S(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n(`--${e.itemDirection}`))),
      ref: "tabEl",
      style: F({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
    },
    [
      R(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  )), [
    [t, { disabled: e.disabled }]
  ]);
}
const Uv = x({
  name: SO,
  directives: { Ripple: Ze },
  props: $O,
  setup(e) {
    const n = C(null), t = M(() => n.value), o = M(() => e.name), r = M(() => e.disabled), { index: a, tabs: i, bindTabs: l } = CO(), { onTabClick: s, active: u, activeColor: d, inactiveColor: c, disabledColor: f, itemDirection: m, resize: g } = i, h = {
      name: o,
      index: a,
      disabled: r,
      element: t
    };
    l(h), ce(() => [e.name, e.disabled], g);
    function b() {
      return e.name != null ? u.value === e.name : u.value === (a == null ? void 0 : a.value);
    }
    function w() {
      return e.disabled ? f.value : b() ? d.value : c.value;
    }
    function E() {
      return e.disabled ? Zo("$-tab--disabled") : b() ? Zo("$-tab--active") : Zo("$-tab--inactive");
    }
    function T($) {
      const { disabled: P, name: I, onClick: k } = e;
      P || (y(k, I ?? a.value, $), s(h));
    }
    return {
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: c,
      itemDirection: m,
      n: Zo,
      classes: kO,
      computeColorStyle: w,
      computeColorClass: E,
      handleClick: T
    };
  }
});
Uv.render = PO;
var ns = Uv;
re(ns);
const JI = ns;
var si = ns;
const OO = {
  name: [String, Number]
}, { name: TO, n: EO, classes: IO } = ee("tab-item");
function BO(e, n) {
  const t = ie("var-swipe-item");
  return p(), $e(t, {
    class: v(e.classes(e.n(), [!e.current, e.n("--inactive")])),
    "var-tab-item-cover": ""
  }, {
    default: me(() => [
      R(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class"]);
}
const Hv = x({
  name: TO,
  components: { VarSwipeItem: wo },
  props: OO,
  setup(e) {
    const n = C(!1), t = M(() => e.name), { index: o, bindTabsItems: r } = mC(), { bindLists: a } = hC(), i = {
      index: o,
      name: t,
      current: M(() => n.value),
      setCurrent: l
    };
    r(i), a(i);
    function l(s) {
      n.value = s;
    }
    return {
      current: n,
      n: EO,
      classes: IO
    };
  }
});
Hv.render = BO;
var ts = Hv;
re(ts);
const QI = ts;
var ui = ts;
const MO = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  }
}, { name: DO, n: NO, classes: VO } = ee("table");
function AO(e, n) {
  return p(), S(
    "div",
    {
      class: v(e.classes(e.n(), e.formatElevation(e.elevation, 1), e.n("$--box")))
    },
    [
      B(
        "div",
        {
          class: v(e.n("main"))
        },
        [
          B(
            "table",
            {
              class: v(e.n("table")),
              style: F({ width: e.toSizeUnit(e.fullWidth) })
            },
            [
              R(e.$slots, "default")
            ],
            6
            /* CLASS, STYLE */
          )
        ],
        2
        /* CLASS */
      ),
      e.$slots.footer ? (p(), S(
        "div",
        {
          key: 0,
          class: v(e.n("footer"))
        },
        [
          R(e.$slots, "footer")
        ],
        2
        /* CLASS */
      )) : Q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Fv = x({
  name: DO,
  props: MO,
  setup: () => ({
    toSizeUnit: Se,
    n: NO,
    classes: VO,
    formatElevation: un
  })
});
Fv.render = AO;
var os = Fv;
re(os);
const _I = os;
var di = os;
const zO = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal"
  },
  itemDirection: {
    type: String,
    default: "horizontal"
  },
  fixedBottom: Boolean,
  activeColor: String,
  inactiveColor: String,
  disabledColor: String,
  color: String,
  indicatorColor: String,
  indicatorSize: [String, Number],
  elevation: {
    type: [Boolean, String, Number],
    default: !1
  },
  scrollable: {
    type: String,
    default: "auto"
  },
  indicatorPosition: {
    type: String,
    default: "normal"
  },
  safeArea: Boolean,
  sticky: Boolean,
  stickyCssMode: Oe(or, "cssMode"),
  stickyZIndex: Oe(or, "zIndex"),
  offsetTop: Oe(or, "offsetTop"),
  onClick: A(),
  onChange: A(),
  "onUpdate:active": A()
};
var bd = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: LO, n: RO, classes: UO } = ee("tabs");
function HO(e, n) {
  return p(), $e(Jt(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: e.sticky ? "stickyComponent" : void 0,
    "css-mode": e.sticky ? e.stickyCssMode : void 0,
    "offset-top": e.sticky ? e.offsetTop : void 0,
    "z-index": e.sticky ? e.stickyZIndex : void 0
  }, {
    default: me(() => [
      B(
        "div",
        ze({
          class: e.classes(
            e.n(),
            e.n("$--box"),
            e.n(`--item-${e.itemDirection}`),
            e.n(`--layout-${e.layoutDirection}-padding`),
            e.formatElevation(e.elevation, 4),
            [e.fixedBottom, e.n("--fixed-bottom")],
            [e.safeArea, e.n("--safe-area")]
          ),
          style: { background: e.color }
        }, e.$attrs),
        [
          B(
            "div",
            {
              ref: "scrollerEl",
              class: v(
                e.classes(
                  e.n("tab-wrap"),
                  [e.localScrollable, e.n(`--layout-${e.layoutDirection}-scrollable`)],
                  e.n(`--layout-${e.layoutDirection}`)
                )
              )
            },
            [
              R(e.$slots, "default"),
              B(
                "div",
                {
                  class: v(e.classes(e.n("indicator"), e.n(`--layout-${e.layoutDirection}${e.indicatorPosition}-indicator`))),
                  style: F({
                    width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
                    height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
                    transform: e.layoutDirection === "horizontal" ? `translateX(${e.indicatorX})` : `translateY(${e.indicatorY})`
                  })
                },
                [
                  B(
                    "div",
                    {
                      class: v(e.classes(e.n("indicator-inner"), e.n(`--layout-${e.layoutDirection}-indicator-inner`))),
                      style: F({ background: e.indicatorColor || e.activeColor })
                    },
                    null,
                    6
                    /* CLASS, STYLE */
                  )
                ],
                6
                /* CLASS, STYLE */
              )
            ],
            2
            /* CLASS */
          )
        ],
        16
        /* FULL_PROPS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["css-mode", "offset-top", "z-index"]);
}
const Yv = x({
  name: LO,
  components: { VarSticky: So },
  inheritAttrs: !1,
  props: zO,
  setup(e) {
    const n = C("0px"), t = C("0px"), o = C("0px"), r = C("0px"), a = C(!1), i = C(null), l = M(() => e.active), s = M(() => e.activeColor), u = M(() => e.inactiveColor), d = M(() => e.disabledColor), c = M(() => e.itemDirection), f = C(null), m = M(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), { tabList: g, bindTabList: h, length: b } = wO();
    h({
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: c,
      resize: O,
      onTabClick: E
    }), ce(
      () => b.value,
      () => bd(this, null, function* () {
        yield fn(), O();
      })
    ), ce(() => [e.active, e.scrollable], O), gt(O), _t(O);
    function E(z) {
      var U;
      const te = (U = z.name.value) != null ? U : z.index.value, { active: G, onChange: j, onClick: X } = e;
      y(e["onUpdate:active"], te), y(X, te), te !== G && y(j, te);
    }
    function T() {
      return g.find(({ name: z }) => e.active === z.value);
    }
    function $(z) {
      return g.find(({ index: U }) => (z ?? e.active) === U.value);
    }
    function P() {
      if (b.value === 0)
        return;
      const { active: z } = e;
      if (mn(z)) {
        const U = ct(z, 0, b.value - 1);
        return y(e["onUpdate:active"], U), $(U);
      }
    }
    function I() {
      a.value = e.scrollable === "always" || g.length >= 5;
    }
    function k({ element: z }) {
      const U = z.value;
      U && (e.layoutDirection === "horizontal" ? (n.value = `${U.offsetWidth}px`, o.value = `${U.offsetLeft}px`) : (t.value = `${U.offsetHeight}px`, r.value = `${U.offsetTop}px`));
    }
    function D({ element: z }) {
      if (!a.value)
        return;
      const U = i.value, te = z.value;
      if (e.layoutDirection === "horizontal") {
        const G = te.offsetLeft + te.offsetWidth / 2 - U.offsetWidth / 2;
        vo(U, {
          left: G,
          animation: Qr
        });
      } else {
        const G = te.offsetTop + te.offsetHeight / 2 - U.offsetHeight / 2;
        vo(U, {
          top: G,
          animation: Qr
        });
      }
    }
    function O() {
      const z = T() || $() || P();
      !z || z.disabled.value || (I(), k(z), D(z));
    }
    function N() {
      return bd(this, null, function* () {
        e.sticky && f.value && (yield f.value.resize());
      });
    }
    return {
      stickyComponent: f,
      indicatorWidth: n,
      indicatorHeight: t,
      indicatorX: o,
      indicatorY: r,
      indicatorPosition: m,
      localScrollable: a,
      scrollerEl: i,
      Transition: We,
      toSizeUnit: Se,
      n: RO,
      classes: UO,
      resize: O,
      resizeSticky: N,
      formatElevation: un
    };
  }
});
Yv.render = HO;
var rs = Yv;
re(rs);
const xI = rs;
var ci = rs;
const FO = {
  active: {
    type: [String, Number],
    default: 0
  },
  canSwipe: {
    type: Boolean,
    default: !0
  },
  loop: Boolean,
  "onUpdate:active": A()
};
var YO = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: jO, n: WO } = ee("tabs-items");
function qO(e, n) {
  const t = ie("var-swipe");
  return p(), $e(t, {
    class: v(e.n()),
    ref: "swipe",
    loop: e.loop,
    touchable: e.canSwipe,
    indicator: !1,
    onChange: e.handleSwipeChange
  }, {
    default: me(() => [
      R(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "loop", "touchable", "onChange"]);
}
const jv = x({
  name: jO,
  components: { VarSwipe: $o },
  props: FO,
  setup(e) {
    const n = C(null), { tabItemList: t, bindTabItem: o, length: r } = vC();
    o({}), ce(() => e.active, s), ce(
      () => r.value,
      () => YO(this, null, function* () {
        yield fn(), s(e.active);
      })
    );
    function a(c) {
      return t.find(({ name: f }) => c === f.value);
    }
    function i(c) {
      return t.find(({ index: f }) => c === f.value);
    }
    function l(c) {
      return a(c) || i(c);
    }
    function s(c) {
      var f;
      const m = l(c);
      m && (t.forEach(({ setCurrent: g }) => g(!1)), m.setCurrent(!0), (f = n.value) == null || f.to(m.index.value));
    }
    function u(c) {
      var f;
      const m = t.find(({ index: h }) => h.value === c), g = (f = m.name.value) != null ? f : m.index.value;
      y(e["onUpdate:active"], g);
    }
    function d() {
      return n.value;
    }
    return {
      swipe: n,
      n: WO,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
jv.render = qO;
var as = jv;
re(as);
const e3 = as;
var fi = as, GO = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, XO = {
  "--badge-default-color": "#555"
}, KO = {
  "--button-default-color": "#303030",
  "--button-default-text-color": "#fff"
}, ZO = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, JO = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, QO = {
  "--checkbox-unchecked-color": "#fff",
  "--checkbox-text-color": "#fff"
}, _O = {
  "--chip-default-color": "#555",
  "--chip-default-text-color": "#fff"
}, xO = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, eT = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa",
  "--year-picker-item-color": "#fff",
  "--picker-header-color": "#fff"
}, nT = {
  "--dialog-background": "#1e1e1e",
  "--dialog-title-color": "#fff",
  "--dialog-message-color": "#bbb"
}, tT = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, oT = {
  "--floating-panel-background": "#272727"
}, rT = {
  "--field-decorator-text-color": "#fff",
  "--field-decorator-blur-color": "rgb(255, 255, 255, .7)"
}, aT = {
  "--pagination-text-color": "#fff",
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "rgba(255, 255, 255, .15)",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, iT = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-title-text-color": "#fff",
  "--picker-option-text-color": "#fff",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, lT = {
  "--popup-content-background-color": "#1e1e1e"
}, sT = {
  "--pull-refresh-background": "#303030"
}, uT = {
  "--radio-unchecked-color": "#fff",
  "--radio-text-color": "#fff"
}, dT = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, cT = {
  "--select-scroller-background": "#303030"
}, fT = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, vT = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, mT = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, hT = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, pT = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-td-text-color": "#fff",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, gT = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa",
  "--time-picker-clock-item-text-color": "#fff"
}, bT = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, yT = {
  "--tabs-background": "#1e1e1e"
}, $T = {
  "--app-bar-color": "#272727"
}, wT = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, CT = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, ST = {
  "--menu-background-color": "#272727"
}, kT = {
  "--breadcrumb-inactive-color": "#aaa"
}, PT = {
  "--paper-background": "#303030"
}, OT = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
}, TT = {
  "--link-default-color": "#fff"
}, ET = {
  "--progress-label-color": "#fff"
}, IT = {
  "--option-text-color": "#fff"
}, BT = {
  "--countdown-text-color": "#fff"
}, MT = {
  "--watermark-content-color": "#ffffff"
}, DT = {
  "--menu-select-menu-background-color": "#272727"
}, NT = {
  "--menu-option-text-color": "#fff"
}, VT = Object.defineProperty, yd = Object.getOwnPropertySymbols, AT = Object.prototype.hasOwnProperty, zT = Object.prototype.propertyIsEnumerable, $d = (e, n, t) => n in e ? VT(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Pe = (e, n) => {
  for (var t in n || (n = {}))
    AT.call(n, t) && $d(e, t, n[t]);
  if (yd)
    for (var t of yd(n))
      zT.call(n, t) && $d(e, t, n[t]);
  return e;
}, LT = Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe({
  // common
  "--color-body": "#1e1e1e",
  "--color-text": "#fff",
  "--color-primary": "#4a7afe",
  "--color-info": "#10afef",
  "--color-success": "#10c48f",
  "--color-warning": "#ff8800",
  "--color-danger": "#ef5350",
  "--color-disabled": "#404040",
  "--color-text-disabled": "#757575"
}, KO), JO), ZO), gT), eT), fT), yT), hT), lT), nT), GO), _O), XO), bT), xO), sT), mT), vT), aT), pT), rT), cT), uT), QO), tT), iT), $T), wT), CT), ST), dT), kT), PT), OT), TT), ET), IT), BT), MT), DT), NT), oT);
const RT = { dark: LT }, n3 = null;
var vi = RT;
const On = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], cn = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], wd = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"], UT = {
  modelValue: String,
  elevation: {
    type: [Boolean, Number, String],
    default: !1
  },
  hint: String,
  color: String,
  /** @deprecated Use titleColor to instead. */
  headerColor: String,
  titleColor: String,
  format: {
    type: String,
    default: "ampm"
  },
  allowedTime: Object,
  min: String,
  max: String,
  useSeconds: Boolean,
  readonly: Boolean,
  "onUpdate:modelValue": A(),
  onChange: A()
}, Wv = (e, n) => e === "24hr" || n === "am", is = (e, n, t) => {
  const o = On.findIndex((a) => L(a) === L(t)), r = Wv(e, n) ? t : cn[o];
  return {
    hourStr: r,
    hourNum: L(r)
  };
}, vn = (e) => {
  const [n, t, o] = e.split(":");
  return {
    hour: L(n),
    minute: L(t),
    second: L(o)
  };
}, qv = (e) => {
  var n, t;
  const { time: o, format: r, ampm: a, hour: i, max: l, min: s, disableHour: u } = e, { hourStr: d, hourNum: c } = is(r, a, i);
  let f = !1, m = !1;
  if (u.includes(d))
    return !0;
  if (l && !s) {
    const { hour: g, minute: h } = vn(l);
    f = g === c && o > h;
  }
  if (!l && s) {
    const { hour: g, minute: h } = vn(s);
    f = g === c && o < h;
  }
  if (l && s) {
    const { hour: g, minute: h } = vn(l), { hour: b, minute: w } = vn(s);
    f = b === c && o < w || g === c && o > h;
  }
  return (n = e.allowedTime) != null && n.minutes && (m = (t = e.allowedTime) == null ? void 0 : t.minutes(o)), f || m;
}, Gv = (e) => {
  var n, t;
  const { time: o, format: r, ampm: a, hour: i, minute: l, max: s, min: u, disableHour: d } = e, { hourStr: c, hourNum: f } = is(r, a, i);
  let m = !1, g = !1;
  if (d.includes(c))
    return !0;
  if (s && !u) {
    const { hour: h, minute: b, second: w } = vn(s);
    m = h === f && b < l || b === l && o > w;
  }
  if (!s && u) {
    const { hour: h, minute: b, second: w } = vn(u);
    m = h === f && b > l || b === l && o > w;
  }
  if (s && u) {
    const { hour: h, minute: b, second: w } = vn(s), { hour: E, minute: T, second: $ } = vn(u);
    m = h === f && b < l || E === f && T > l || h === f && b === l && o > w || E === f && T === l && o < $;
  }
  return (n = e.allowedTime) != null && n.seconds && (g = (t = e.allowedTime) == null ? void 0 : t.seconds(o)), m || g;
}, { n: HT, classes: FT } = ee("time-picker");
function YT(e, n) {
  return p(), S(
    "div",
    {
      class: v(e.n("clock"))
    },
    [
      B(
        "div",
        {
          class: v(e.n("clock-hand")),
          style: F(e.handStyle)
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      (p(!0), S(
        Ne,
        null,
        Ge(e.timeScales, (t, o) => (p(), S(
          "div",
          {
            class: v(
              e.classes(
                e.n("clock-item"),
                [e.isActive(o, !1), e.n("clock-item--active")],
                [e.isDisable(t), e.n("clock-item--disable")]
              )
            ),
            key: t,
            style: F(e.getStyle(o, t, !1))
          },
          ae(t),
          7
          /* TEXT, CLASS, STYLE */
        ))),
        128
        /* KEYED_FRAGMENT */
      )),
      e.format === "24hr" && e.type === "hour" ? (p(), S(
        "div",
        {
          key: 0,
          class: v(e.n("clock-inner")),
          ref: "inner"
        },
        [
          (p(!0), S(
            Ne,
            null,
            Ge(e.hours24, (t, o) => (p(), S(
              "div",
              {
                class: v(
                  e.classes(
                    e.n("clock-item"),
                    [e.isActive(o, !0), e.n("clock-item--active")],
                    [e.isDisable(t), e.n("clock-item--disable")]
                  )
                ),
                key: t,
                style: F(e.getStyle(o, t, !0))
              },
              ae(t),
              7
              /* TEXT, CLASS, STYLE */
            ))),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      )) : Q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Xv = x({
  name: "Clock",
  props: {
    isInner: {
      type: Boolean,
      required: !0
    },
    rad: {
      type: Number
    },
    format: {
      type: String,
      default: "ampm"
    },
    allowedTime: {
      type: Object
    },
    time: {
      type: Object,
      required: !0
    },
    useSeconds: {
      type: Boolean,
      default: !1
    },
    preventNextUpdate: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "hour"
    },
    ampm: {
      type: String,
      default: "am"
    },
    color: {
      type: String
    },
    min: {
      type: String
    },
    max: {
      type: String
    }
  },
  emits: ["update", "change-prevent-update"],
  setup(e, { emit: n }) {
    const t = C(null), o = C([]), r = C([]), a = M(() => ({
      transform: `rotate(${L(e.rad)}deg)`,
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: u(),
      borderColor: u()
    })), i = M(() => {
      if (e.rad === void 0)
        return;
      const h = e.rad / 30;
      return h >= 0 ? h : h + 12;
    }), l = M(() => e.type === "hour" ? On : wd), s = (h, b) => {
      h = h ?? (e.type === "minute" ? e.time.minute : e.time.second);
      const w = e.type === "minute" ? qv : Gv, E = {
        time: L(h),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: L(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: o.value
      };
      return b && e.type === "minute" && Reflect.deleteProperty(E, "minute"), w(E);
    }, u = () => {
      if (i.value === void 0)
        return e.color;
      const h = e.isInner ? cn[i.value] : l.value[i.value];
      return l.value === wd ? s() ? "#bdbdbd" : e.color : c(h) ? "#bdbdbd" : e.color;
    }, d = (h, b) => b ? i.value === h && e.isInner : i.value === h && (!e.isInner || e.type !== "hour"), c = (h) => {
      if (e.type === "hour") {
        if (Wv(e.format, e.ampm))
          return o.value.includes(h);
        const b = On.findIndex((w) => w === h);
        return r.value.includes(b);
      }
      return s(h, !0);
    }, f = (h, b, w) => {
      const E = 2 * Math.PI / 12 * h - Math.PI / 2, T = 50 * (1 + Math.cos(E)), $ = 50 * (1 + Math.sin(E)), P = () => d(h, w) ? c(b) ? {
        backgroundColor: "#bdbdbd",
        color: "#fff"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, { backgroundColor: I, color: k } = P();
      return {
        left: `${T}%`,
        top: `${$}%`,
        backgroundColor: I,
        color: k
      };
    }, m = () => {
      const { width: h, height: b } = en(t.value);
      return {
        width: h,
        height: b
      };
    }, g = () => {
      if (i.value === void 0)
        return;
      const h = e.ampm === "am" ? On : cn;
      return kt(h[i.value], 2, "0");
    };
    return ce([i, () => e.isInner], ([h, b], [w, E]) => {
      if (h === w && b === E || e.type !== "hour" || i.value === void 0)
        return;
      const $ = b ? cn[i.value] : g(), P = e.useSeconds ? `:${e.time.second}` : "", I = `${$}:${e.time.minute}${P}`;
      e.preventNextUpdate || n("update", I), n("change-prevent-update");
    }), ce(
      () => e.rad,
      (h, b) => {
        if (e.type === "hour" || h === void 0 || b === void 0)
          return;
        const w = h / 6 >= 0 ? h / 6 : h / 6 + 60, E = b / 6 >= 0 ? b / 6 : b / 6 + 60;
        if (w === E)
          return;
        let T;
        const { hourStr: $ } = is(e.format, e.ampm, e.time.hour);
        if (e.type === "minute") {
          const P = ve().minute(w).format("mm"), I = e.useSeconds ? `:${e.time.second}` : "";
          T = `${$}:${P}${I}`;
        }
        if (e.type === "second") {
          const P = ve().second(w).format("ss"), I = e.useSeconds ? `:${P}` : "";
          T = `${$}:${e.time.minute}${I}`;
        }
        n("update", T);
      }
    ), ce(
      [() => e.max, () => e.min, () => e.allowedTime],
      ([h, b, w]) => {
        if (o.value = [], h && !b) {
          const { hour: E } = vn(h), T = On.filter((P) => L(P) > E), $ = cn.filter((P) => L(P) > E);
          o.value = [...T, ...$];
        }
        if (!h && b) {
          const { hour: E } = vn(b), T = On.filter((P) => L(P) < E), $ = cn.filter((P) => L(P) < E);
          o.value = [...T, ...$];
        }
        if (h && b) {
          const { hour: E } = vn(h), { hour: T } = vn(b), $ = On.filter((I) => L(I) < T || L(I) > E), P = cn.filter((I) => L(I) < T || L(I) > E);
          o.value = [...$, ...P];
        }
        if (w != null && w.hours) {
          const { hours: E } = w, T = On.filter((P) => !E(L(P))), $ = cn.filter((P) => !E(L(P)));
          o.value = [.../* @__PURE__ */ new Set([...o.value, ...T, ...$])];
        }
        r.value = o.value.map((E) => cn.findIndex((T) => E === T)).filter((E) => E >= 0);
      },
      { immediate: !0 }
    ), {
      n: HT,
      classes: FT,
      hours24: cn,
      timeScales: l,
      inner: t,
      handStyle: a,
      disableHour: o,
      isActive: d,
      isDisable: c,
      getSize: m,
      getStyle: f,
      activeItemIndex: i
    };
  }
});
Xv.render = YT;
var jT = Xv;
const { name: WT, n: qT, classes: GT } = ee("time-picker"), XT = (e) => (bt(""), e = e(), yt(), e), KT = /* @__PURE__ */ XT(() => /* @__PURE__ */ B(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), ZT = { key: 0 };
function JT(e, n) {
  var t;
  const o = ie("clock");
  return p(), S(
    "div",
    {
      class: v(e.classes(e.n(), e.formatElevation(e.elevation, 2))),
      ref: "picker"
    },
    [
      B(
        "div",
        {
          class: v(e.n("title")),
          style: F({ background: e.titleColor || e.headerColor || e.color })
        },
        [
          B(
            "div",
            {
              class: v(e.n("title-hint"))
            },
            ae((t = e.hint) != null ? t : e.pack.timePickerHint),
            3
            /* TEXT, CLASS */
          ),
          B(
            "div",
            {
              class: v(e.n("title-time-container"))
            },
            [
              B(
                "div",
                {
                  class: v(e.n("title-time"))
                },
                [
                  B(
                    "div",
                    {
                      class: v(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
                      onClick: n[0] || (n[0] = (r) => e.checkPanel("hour"))
                    },
                    ae(e.time.hour),
                    3
                    /* TEXT, CLASS */
                  ),
                  KT,
                  B(
                    "div",
                    {
                      class: v(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
                      onClick: n[1] || (n[1] = (r) => e.checkPanel("minute"))
                    },
                    ae(e.time.minute),
                    3
                    /* TEXT, CLASS */
                  ),
                  e.useSeconds ? (p(), S("span", ZT, ":")) : Q("v-if", !0),
                  e.useSeconds ? (p(), S(
                    "div",
                    {
                      key: 1,
                      class: v(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
                      onClick: n[2] || (n[2] = (r) => e.checkPanel("second"))
                    },
                    ae(e.time.second),
                    3
                    /* TEXT, CLASS */
                  )) : Q("v-if", !0)
                ],
                2
                /* CLASS */
              ),
              e.format === "ampm" ? (p(), S(
                "div",
                {
                  key: 0,
                  class: v(e.n("title-ampm"))
                },
                [
                  B(
                    "div",
                    {
                      class: v(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
                      onClick: n[3] || (n[3] = (r) => e.checkAmpm("am"))
                    },
                    " AM ",
                    2
                    /* CLASS */
                  ),
                  B(
                    "div",
                    {
                      class: v(e.classes(e.n("title-btn"), [e.ampm === "pm", e.n("title-btn--active")])),
                      onClick: n[4] || (n[4] = (r) => e.checkAmpm("pm"))
                    },
                    " PM ",
                    2
                    /* CLASS */
                  )
                ],
                2
                /* CLASS */
              )) : Q("v-if", !0)
            ],
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      ),
      B(
        "div",
        {
          class: v(e.n("body"))
        },
        [
          B(
            "div",
            {
              class: v(e.n("clock-container")),
              onTouchstart: n[5] || (n[5] = (...r) => e.moveHand && e.moveHand(...r)),
              onTouchmove: n[6] || (n[6] = (...r) => e.moveHand && e.moveHand(...r)),
              onTouchend: n[7] || (n[7] = (...r) => e.end && e.end(...r)),
              ref: "container"
            },
            [
              Z(We, {
                name: `${e.n()}-panel-fade`
              }, {
                default: me(() => [
                  (p(), $e(o, {
                    key: e.type,
                    ref: "inner",
                    type: e.type,
                    ampm: e.ampm,
                    color: e.color,
                    "is-inner": e.isInner,
                    format: e.format,
                    "allowed-time": e.allowedTime,
                    rad: e.getRad,
                    time: e.time,
                    "prevent-next-update": e.isPreventNextUpdate,
                    "use-seconds": e.useSeconds,
                    max: e.max,
                    min: e.min,
                    onUpdate: e.update,
                    onChangePreventUpdate: e.changePreventUpdate
                  }, null, 8, ["type", "ampm", "color", "is-inner", "format", "allowed-time", "rad", "time", "prevent-next-update", "use-seconds", "max", "min", "onUpdate", "onChangePreventUpdate"]))
                ]),
                _: 1
                /* STABLE */
              }, 8, ["name"])
            ],
            34
            /* CLASS, HYDRATE_EVENTS */
          )
        ],
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
const Kv = x({
  name: WT,
  components: { Clock: jT },
  props: UT,
  setup(e) {
    const n = C(null), t = C(null), o = C(null), r = C(!1), a = C(!1), i = C(!1), l = C(!1), s = C(!1), u = C(!1), d = C(!1), c = C(0), f = C(0), m = C(), g = C("hour"), h = C("am"), b = C({
      hour: "00",
      minute: "00",
      second: "00"
    }), w = je({
      x: 0,
      y: 0
    }), E = je({
      x: [],
      y: []
    }), T = M(() => g.value === "hour" ? m.value : g.value === "minute" ? c.value : f.value);
    ce(
      () => e.modelValue,
      (q) => {
        if (q) {
          const { hour: ne, minute: H, second: _ } = vn(q), ue = ve().hour(ne).format("hh"), V = ve().hour(ne).format("HH"), W = ve().minute(H).format("mm"), he = ve().second(_).format("ss");
          m.value = (ue === "12" ? 0 : L(ue)) * 30, c.value = L(W) * 6, f.value = L(he) * 6, b.value = N(q), e.format !== "24hr" && (h.value = kt(`${ne}`, 2, "0") === V && cn.includes(V) ? "pm" : "am"), r.value = e.format === "24hr" && cn.includes(V);
        }
      },
      { immediate: !0 }
    );
    function $(q) {
      y(e["onUpdate:modelValue"], q), y(e.onChange, q);
    }
    function P(q) {
      return q * 57.29577951308232;
    }
    function I(q) {
      l.value = !1, d.value = !1, g.value = q;
    }
    function k(q) {
      const { disableHour: ne } = o.value, H = On.findIndex((V) => L(V) === L(b.value.hour)), _ = q === "am" ? On : cn;
      return [..._.slice(H), ..._.slice(0, H)].find((V, W) => (a.value = W !== 0, !ne.includes(V)));
    }
    function D(q) {
      if (e.readonly)
        return;
      h.value = q;
      const ne = k(q);
      if (!ne)
        return;
      const H = e.useSeconds ? `:${b.value.second}` : "", _ = `${kt(ne, 2, "0")}:${b.value.minute}${H}`;
      $(_);
    }
    function O(q, ne) {
      const H = q >= E.x[0] && q <= E.x[1], _ = ne >= E.y[0] && ne <= E.y[1];
      return H && _;
    }
    function N(q) {
      const ne = e.format === "24hr" ? "HH" : "hh", { hour: H, minute: _, second: ue } = vn(q);
      return {
        hour: ve().hour(H).format(ne),
        minute: ve().minute(_).format("mm"),
        second: ve().second(ue).format("ss")
      };
    }
    function z(q) {
      const ne = q / 30;
      return ne >= 0 ? ne : ne + 12;
    }
    function U() {
      const { width: q, height: ne } = o.value.getSize(), H = w.x - q / 2 - 8, _ = w.x + q / 2 + 8, ue = w.y - ne / 2 - 8, V = w.y + ne / 2 + 8;
      return {
        rangeXMin: H,
        rangeXMax: _,
        rangeYMin: ue,
        rangeYMax: V
      };
    }
    function te(q, ne, H) {
      const { disableHour: _ } = o.value;
      i.value = O(q, ne);
      const ue = Math.round(H / 30) * 30 + 90, V = z(ue), W = r.value ? On[V] : cn[V];
      if (_.includes(W) || (r.value = e.format === "24hr" ? O(q, ne) : !1), r.value !== i.value)
        return;
      const he = r.value || h.value === "pm" ? cn[V] : On[V];
      u.value = _.includes(he), !u.value && (m.value = ue, l.value = !0);
    }
    function G(q) {
      const { disableHour: ne } = o.value, H = Math.round(q / 6) * 6 + 90, ue = {
        time: H / 6 >= 0 ? H / 6 : H / 6 + 60,
        format: e.format,
        ampm: h.value,
        hour: b.value.hour,
        max: e.max,
        min: e.min,
        disableHour: ne,
        allowedTime: e.allowedTime
      };
      d.value = qv(ue), !d.value && (c.value = H, s.value = !0);
    }
    function j(q) {
      const { disableHour: ne } = o.value, H = Math.round(q / 6) * 6 + 90, ue = {
        time: H / 6 >= 0 ? H / 6 : H / 6 + 60,
        format: e.format,
        ampm: h.value,
        hour: b.value.hour,
        minute: L(b.value.minute),
        max: e.max,
        min: e.min,
        disableHour: ne,
        allowedTime: e.allowedTime
      };
      Gv(ue) || (f.value = H);
    }
    function X() {
      const { left: q, top: ne, width: H, height: _ } = en(n.value);
      if (w.x = q + H / 2, w.y = ne + _ / 2, g.value === "hour" && e.format === "24hr") {
        const { rangeXMin: ue, rangeXMax: V, rangeYMin: W, rangeYMax: he } = U();
        E.x = [ue, V], E.y = [W, he];
      }
    }
    function J(q) {
      if (Ln(q), e.readonly)
        return;
      X();
      const { clientX: ne, clientY: H } = q.touches[0], _ = ne - w.x, ue = H - w.y, V = Math.round(P(Math.atan2(ue, _)));
      g.value === "hour" ? te(ne, H, V) : g.value === "minute" ? G(V) : j(V);
    }
    function Y() {
      if (!e.readonly) {
        if (g.value === "hour" && l.value) {
          g.value = "minute";
          return;
        }
        g.value === "minute" && e.useSeconds && s.value && (g.value = "second");
      }
    }
    function le() {
      a.value = !1;
    }
    return {
      getRad: T,
      time: b,
      container: n,
      inner: o,
      picker: t,
      isInner: r,
      type: g,
      ampm: h,
      isPreventNextUpdate: a,
      n: qT,
      classes: GT,
      pack: Qe,
      moveHand: J,
      checkPanel: I,
      checkAmpm: D,
      end: Y,
      update: $,
      changePreventUpdate: le,
      formatElevation: un
    };
  }
});
Kv.render = JT;
var ls = Kv;
re(ls);
const t3 = ls;
var mi = ls;
const QT = {
  modelValue: {
    type: Array,
    default: () => []
  },
  accept: {
    type: String,
    default: "image/*"
  },
  capture: {
    type: [String, Boolean],
    default: void 0
  },
  multiple: Boolean,
  readonly: Boolean,
  disabled: Boolean,
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  resolveType: {
    type: String,
    default: "default"
  },
  removable: {
    type: Boolean,
    default: !0
  },
  maxlength: [Number, String],
  maxsize: [Number, String],
  previewed: {
    type: Boolean,
    default: !0
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onRemove"]
  },
  rules: Array,
  hideList: Boolean,
  preventDefaultPreview: Boolean,
  onBeforeFilter: A(),
  onBeforeRead: A(),
  onAfterRead: A(),
  onBeforeRemove: A(),
  onRemove: A(),
  onOversize: A(),
  onPreview: A(),
  "onUpdate:modelValue": A()
};
var Jo = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: _T, n: xT, classes: eE } = ee("uploader");
let nE = 0;
const tE = ["onClick"], oE = ["onClick"], rE = ["src", "alt"], aE = ["multiple", "accept", "capture", "disabled"], iE = ["src"];
function lE(e, n) {
  const t = ie("var-icon"), o = ie("var-hover-overlay"), r = ie("var-form-details"), a = ie("var-popup"), i = Ve("ripple"), l = Ve("hover");
  return p(), S(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box")))
    },
    [
      B(
        "div",
        {
          class: v(e.n("file-list"))
        },
        [
          (p(!0), S(
            Ne,
            null,
            Ge(e.files, (s) => Te((p(), S("div", {
              class: v(e.classes(e.n("file"), e.formatElevation(e.elevation, 2), [s.state === "loading", e.n("--loading")])),
              key: s.id,
              onClick: (u) => e.preview(s)
            }, [
              B(
                "div",
                {
                  class: v(e.n("file-name"))
                },
                ae(s.name || s.url),
                3
                /* TEXT, CLASS */
              ),
              e.removable ? (p(), S("div", {
                key: 0,
                class: v(e.n("file-close")),
                onClick: Cn((u) => e.handleRemove(s), ["stop"])
              }, [
                Z(t, {
                  class: v(e.n("file-close-icon")),
                  "var-uploader-cover": "",
                  name: "delete"
                }, null, 8, ["class"])
              ], 10, oE)) : Q("v-if", !0),
              s.cover ? (p(), S("img", {
                key: 1,
                class: v(e.n("file-cover")),
                style: F({ objectFit: s.fit }),
                src: s.cover,
                alt: s.name
              }, null, 14, rE)) : Q("v-if", !0),
              B(
                "div",
                {
                  class: v(e.n("file-indicator"))
                },
                [
                  B(
                    "div",
                    {
                      class: v(
                        e.classes(e.n("progress"), [s.state === "success", e.n("--success")], [s.state === "error", e.n("--error")])
                      ),
                      style: F({ width: s.state === "success" || s.state === "error" ? "100%" : `${s.progress}%` })
                    },
                    null,
                    6
                    /* CLASS, STYLE */
                  )
                ],
                2
                /* CLASS */
              )
            ], 10, tE)), [
              [i, { disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple }]
            ])),
            128
            /* KEYED_FRAGMENT */
          )),
          !e.maxlength || e.modelValue.length < e.toNumber(e.maxlength) ? Te((p(), S(
            "div",
            {
              key: 0,
              class: v(
                e.classes(
                  [!e.$slots.default, `${e.n("action")} ${e.formatElevation(e.elevation, 2)}`],
                  [e.disabled || e.formDisabled, e.n("--disabled")]
                )
              ),
              onClick: n[1] || (n[1] = (...s) => e.chooseFile && e.chooseFile(...s))
            },
            [
              B("input", {
                ref: "input",
                type: "file",
                class: v(e.n("action-input")),
                multiple: e.multiple,
                accept: e.accept,
                capture: e.capture,
                disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly,
                onChange: n[0] || (n[0] = (...s) => e.handleChange && e.handleChange(...s))
              }, null, 42, aE),
              R(e.$slots, "default", {}, () => [
                Z(t, {
                  class: v(e.n("action-icon")),
                  "var-uploader-cover": "",
                  name: "plus"
                }, null, 8, ["class"]),
                Z(o, {
                  hovering: e.hovering && !e.disabled && !e.formDisabled
                }, null, 8, ["hovering"])
              ])
            ],
            2
            /* CLASS */
          )), [
            [i, {
              disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || !!e.$slots.default
            }],
            [l, e.handleHovering, "desktop"]
          ]) : Q("v-if", !0)
        ],
        2
        /* CLASS */
      ),
      Z(r, {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      }, rr({
        _: 2
        /* DYNAMIC */
      }, [
        e.$slots["extra-message"] ? {
          name: "extra-message",
          fn: me(() => [
            R(e.$slots, "extra-message")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["error-message", "extra-message"]),
      Z(a, {
        class: v(e.n("preview")),
        "var-uploader-cover": "",
        position: "center",
        show: e.showPreview,
        "onUpdate:show": n[2] || (n[2] = (s) => e.showPreview = s),
        onClosed: n[3] || (n[3] = (s) => e.currentPreview = null)
      }, {
        default: me(() => {
          var s, u;
          return [
            e.currentPreview && e.isHTMLSupportVideo((s = e.currentPreview) == null ? void 0 : s.url) ? (p(), S("video", {
              key: 0,
              class: v(e.n("preview-video")),
              playsinline: "true",
              "webkit-playsinline": "true",
              "x5-playsinline": "true",
              "x5-video-player-type": "h5",
              "x5-video-player-fullscreen": "false",
              controls: "",
              src: (u = e.currentPreview) == null ? void 0 : u.url
            }, null, 10, iE)) : Q("v-if", !0)
          ];
        }),
        _: 1
        /* STABLE */
      }, 8, ["class", "show"])
    ],
    2
    /* CLASS */
  );
}
const Zv = x({
  name: _T,
  directives: { Ripple: Ze, Hover: kn },
  components: {
    VarIcon: He,
    VarPopup: vt,
    VarFormDetails: pn,
    VarHoverOverlay: In
  },
  props: QT,
  setup(e) {
    const n = C(null), t = C(!1), o = C(null), r = M(() => {
      const {
        maxlength: J,
        modelValue: { length: Y }
      } = e;
      return mn(J) ? `${Y} / ${J}` : "";
    }), { form: a, bindForm: i } = Mn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = Bn(), { hovering: c, handleHovering: f } = Hn(), m = M(() => {
      const { modelValue: J, hideList: Y } = e;
      return Y ? [] : J;
    });
    let g = !1;
    const h = {
      getSuccess: O,
      getError: N,
      getLoading: z
    };
    y(i, {
      validate: j,
      resetValidation: d,
      reset: X
    }), ce(
      () => e.modelValue,
      () => {
        !g && G("onChange"), g = !1;
      },
      { deep: !0 }
    );
    function w(J) {
      const { disabled: Y, previewed: le, preventDefaultPreview: q, onPreview: ne } = e;
      if (a != null && a.disabled.value || Y || !le || (y(ne, je(J)), q))
        return;
      const { url: H } = J;
      if (As(H)) {
        Co(H);
        return;
      }
      zs(H) && (o.value = J, t.value = !0);
    }
    function E(J) {
      return {
        id: nE++,
        url: "",
        cover: "",
        name: J.name,
        file: J,
        progress: 0
      };
    }
    function T(J) {
      const Y = J.target, { files: le } = Y;
      return Array.from(le);
    }
    function $(J) {
      return Jo(this, null, function* () {
        const Y = J.file;
        if (e.resolveType === "default" && Y.type.startsWith("image") || e.resolveType === "data-url") {
          const q = yield wm(Y);
          J.cover = q, J.url = q;
        }
        return J;
      });
    }
    function P(J) {
      return J.map($);
    }
    function I(J) {
      const { onBeforeRead: Y } = e;
      return J.map(
        (le) => new Promise((q) => {
          Y || q({
            valid: !0,
            varFile: le
          });
          const ne = Qo(y(Y, je(le)));
          Promise.all(ne).then((H) => {
            q({
              valid: H.every(Boolean),
              varFile: le
            });
          });
        })
      );
    }
    function k(J) {
      return Jo(this, null, function* () {
        const { maxsize: Y, maxlength: le, modelValue: q, onOversize: ne, onAfterRead: H, onBeforeFilter: _, readonly: ue, disabled: V } = e;
        if (a != null && a.disabled.value || a != null && a.readonly.value || V || ue)
          return;
        const W = (ge) => ge.filter((De) => De.file.size > L(Y) ? (y(ne, je(De)), !1) : !0), he = (ge) => {
          const De = Math.min(ge.length, L(le) - q.length);
          return ge.slice(0, De);
        }, Ee = (ge) => Jo(this, null, function* () {
          if (!_)
            return ge;
          const De = Qo(_);
          for (const qe of De)
            ge = yield qe(ge);
          return ge;
        });
        let de = T(J).map(E);
        de = yield Ee(de), de = Y != null ? W(de) : de, de = le != null ? he(de) : de;
        const ke = yield Promise.all(P(de)), se = (yield Promise.all(I(ke))).filter(({ valid: ge }) => ge).map(({ varFile: ge }) => ge);
        y(e["onUpdate:modelValue"], [...q, ...se]), J.target.value = "", se.forEach((ge) => y(H, je(ge)));
      });
    }
    function D(J) {
      return Jo(this, null, function* () {
        const { disabled: Y, readonly: le, modelValue: q, onBeforeRemove: ne, onRemove: H } = e;
        if (a != null && a.disabled.value || a != null && a.readonly.value || Y || le)
          return;
        if (ne) {
          const ue = Qo(y(ne, je(J)));
          if ((yield Promise.all(ue)).some((V) => !V))
            return;
        }
        const _ = q.filter((ue) => ue !== J);
        y(H, je(J)), G("onRemove"), y(e["onUpdate:modelValue"], _);
      });
    }
    function O() {
      return e.modelValue.filter((J) => J.state === "success");
    }
    function N() {
      return e.modelValue.filter((J) => J.state === "error");
    }
    function z() {
      return e.modelValue.filter((J) => J.state === "loading");
    }
    function U() {
      n.value.click();
    }
    function te() {
      o.value = null, t.value = !1, Co.close();
    }
    function G(J) {
      Ye(() => {
        const { validateTrigger: Y, rules: le, modelValue: q } = e;
        s(Y, J, le, q, h);
      });
    }
    function j() {
      return u(e.rules, e.modelValue, h);
    }
    function X() {
      g = !0, y(e["onUpdate:modelValue"], []), d();
    }
    return {
      input: n,
      files: m,
      showPreview: t,
      currentPreview: o,
      errorMessage: l,
      maxlengthText: r,
      hovering: c,
      formDisabled: a == null ? void 0 : a.disabled,
      formReadonly: a == null ? void 0 : a.readonly,
      n: xT,
      classes: eE,
      formatElevation: un,
      toNumber: L,
      handleHovering: f,
      isHTMLSupportVideo: zs,
      isHTMLSupportImage: As,
      preview: w,
      handleChange: k,
      handleRemove: D,
      getSuccess: O,
      getError: N,
      getLoading: z,
      validate: j,
      resetValidation: d,
      reset: X,
      chooseFile: U,
      closePreview: te,
      toSizeUnit: Se
    };
  }
});
Zv.render = lE;
var ss = Zv;
re(ss);
const o3 = ss;
var hi = ss;
const sE = {
  width: {
    type: Number,
    default: 100
  },
  height: {
    type: Number,
    default: 100
  },
  content: String,
  image: String,
  rotate: {
    type: Number,
    default: -22
  },
  offsetX: {
    type: Number,
    default: 0
  },
  offsetY: {
    type: Number,
    default: 0
  },
  gapX: {
    type: Number,
    default: 0
  },
  gapY: {
    type: Number,
    default: 0
  },
  zIndex: {
    type: [Number, String],
    default: 10
  },
  opacity: {
    type: [Number, String],
    default: 0.5
  },
  fullscreen: Boolean,
  font: {
    type: Object,
    default: () => ({
      fontStyle: "normal",
      fontVariant: "normal",
      fontWeight: "normal",
      fontSize: 14
    })
  }
};
var uE = Object.defineProperty, dE = Object.defineProperties, cE = Object.getOwnPropertyDescriptors, Cd = Object.getOwnPropertySymbols, fE = Object.prototype.hasOwnProperty, vE = Object.prototype.propertyIsEnumerable, Sd = (e, n, t) => n in e ? uE(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, mE = (e, n) => {
  for (var t in n || (n = {}))
    fE.call(n, t) && Sd(e, t, n[t]);
  if (Cd)
    for (var t of Cd(n))
      vE.call(n, t) && Sd(e, t, n[t]);
  return e;
}, hE = (e, n) => dE(e, cE(n)), kd = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: pE, n: gE, classes: bE } = ee("watermark"), yE = { ref: "svgRef" }, $E = ["viewBox", "width", "height"], wE = ["width", "height"], CE = ["href", "xlink:href", "x", "y", "width", "height"];
function SE(e, n) {
  return p(), S(
    "div",
    {
      class: v(e.n())
    },
    [
      R(e.$slots, "default"),
      (p(), $e(jn, {
        to: "body",
        disabled: !e.fullscreen
      }, [
        B(
          "div",
          {
            ref: "containerRef",
            class: v(e.classes(e.n("container"), [e.fullscreen, e.n("--fullscreen")])),
            style: F({
              backgroundImage: `url(${e.watermarkUrl})`,
              zIndex: e.zIndex
            })
          },
          [
            Te(B(
              "div",
              yE,
              [
                (p(), S("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                  viewBox: `0 0 ${e.width + e.gapX} ${e.height + e.gapY}`,
                  width: `${e.width + e.gapX}`,
                  height: `${e.height + e.gapY}`,
                  style: F({
                    padding: `0 ${e.gapX}px ${e.gapY}px 0`,
                    opacity: e.opacity
                  })
                }, [
                  e.showContent() ? (p(), S("foreignObject", {
                    key: 0,
                    x: "0",
                    y: "0",
                    width: e.width,
                    height: e.height
                  }, [
                    B(
                      "div",
                      {
                        xmlns: "http://www.w3.org/1999/xhtml",
                        style: F({
                          transform: `translate(${e.offsetX}px, ${e.offsetY}px) rotate(${e.rotate}deg)`,
                          transformOrigin: "center"
                        })
                      },
                      [
                        R(e.$slots, "content", {}, () => [
                          B(
                            "span",
                            {
                              style: F(hE(mE({}, e.font), { fontSize: `${e.font.fontSize}px`, color: e.textColor }))
                            },
                            ae(e.content),
                            5
                            /* TEXT, STYLE */
                          )
                        ])
                      ],
                      4
                      /* STYLE */
                    )
                  ], 8, wE)) : Q("v-if", !0),
                  !e.$slots.content && e.image ? (p(), S("image", {
                    key: 1,
                    href: e.imageUrl,
                    "xlink:href": e.imageUrl,
                    x: e.offsetX,
                    y: e.offsetY,
                    width: e.width,
                    height: e.height,
                    style: F({
                      transform: `rotate(${e.rotate}deg)`,
                      transformOrigin: "center"
                    })
                  }, null, 12, CE)) : Q("v-if", !0)
                ], 12, $E))
              ],
              512
              /* NEED_PATCH */
            ), [
              [Un, !1]
            ])
          ],
          6
          /* CLASS, STYLE */
        )
      ], 8, ["disabled"]))
    ],
    2
    /* CLASS */
  );
}
const Jv = x({
  name: pE,
  props: sE,
  setup(e, { slots: n }) {
    const t = C(""), o = C(""), r = C(""), a = C(null), i = C(null);
    ce(
      () => [
        e.image,
        e.font,
        e.content,
        e.height,
        e.width,
        e.rotate,
        e.gapX,
        e.gapY,
        e.offsetX,
        e.offsetY,
        e.opacity
      ],
      c,
      {
        deep: !0
      }
    ), Oo(c), To(d);
    function l() {
      return !!(n.content || e.content && !e.image);
    }
    function s() {
      return kd(this, null, function* () {
        return new Promise((f) => {
          const m = document.createElement("canvas"), g = m.getContext("2d"), h = new Image();
          h.crossOrigin = "anonymous", h.referrerPolicy = "no-referrer", h.src = e.image, h.onload = () => {
            m.width = h.width, m.height = h.height, g.drawImage(h, 0, 0), f(m.toDataURL());
          };
        });
      });
    }
    function u(f) {
      const m = new Blob([f], {
        type: "image/svg+xml"
      });
      return URL.createObjectURL(m);
    }
    function d() {
      t.value && URL.revokeObjectURL(t.value);
    }
    function c() {
      return kd(this, null, function* () {
        r.value = Tt(i.value).color, e.image && (o.value = yield s()), yield Ye(), d(), t.value = u(a.value.innerHTML);
      });
    }
    return {
      svgRef: a,
      containerRef: i,
      watermarkUrl: t,
      imageUrl: o,
      textColor: r,
      n: gE,
      classes: bE,
      showContent: l,
      resize: c
    };
  }
});
Jv.render = SE;
var us = Jv;
re(us);
const r3 = us;
var pi = us;
const kE = "2.18.1";
function PE(e) {
  Zr.install && e.use(Zr), Jr.install && e.use(Jr), xr.install && e.use(xr), ea.install && e.use(ea), na.install && e.use(na), ur.install && e.use(ur), ta.install && e.use(ta), oa.install && e.use(oa), ra.install && e.use(ra), aa.install && e.use(aa), hn.install && e.use(hn), ia.install && e.use(ia), la.install && e.use(la), dr.install && e.use(dr), ho.install && e.use(ho), sa.install && e.use(sa), cr.install && e.use(cr), ua.install && e.use(ua), da.install && e.use(da), ca.install && e.use(ca), wn.install && e.use(wn), ha.install && e.use(ha), wa.install && e.use(wa), Sa.install && e.use(Sa), ka.install && e.use(ka), Pa.install && e.use(Pa), gr.install && e.use(gr), Ea.install && e.use(Ea), Ia.install && e.use(Ia), yo.install && e.use(yo), Ba.install && e.use(Ba), Ma.install && e.use(Ma), pn.install && e.use(pn), kn.install && e.use(kn), In.install && e.use(In), He.install && e.use(He), Da.install && e.use(Da), Co.install && e.use(Co), Na.install && e.use(Na), Va.install && e.use(Va), yr.install && e.use(yr), mo.install && e.use(mo), Aa.install && e.use(Aa), za.install && e.use(za), Yt.install && e.use(Yt), La.install && e.use(La), Kr.install && e.use(Kr), Xt.install && e.use(Xt), Ra.install && e.use(Ra), Ua.install && e.use(Ua), Ha.install && e.use(Ha), Fa.install && e.use(Fa), Ya.install && e.use(Ya), ja.install && e.use(ja), Wa.install && e.use(Wa), vt.install && e.use(vt), qa.install && e.use(qa), Ga.install && e.use(Ga), Xa.install && e.use(Xa), Ka.install && e.use(Ka), Za.install && e.use(Za), Ja.install && e.use(Ja), Ze.install && e.use(Ze), Qa.install && e.use(Qa), _a.install && e.use(_a), xa.install && e.use(xa), ei.install && e.use(ei), ti.install && e.use(ti), oi.install && e.use(oi), ri.install && e.use(ri), ai.install && e.use(ai), So.install && e.use(So), ii.install && e.use(ii), $o.install && e.use($o), wo.install && e.use(wo), li.install && e.use(li), si.install && e.use(si), ui.install && e.use(ui), di.install && e.use(di), ci.install && e.use(ci), fi.install && e.use(fi), vi.install && e.use(vi), mi.install && e.use(mi), br.install && e.use(br), hi.install && e.use(hi), pi.install && e.use(pi);
}
const a3 = {
  version: kE,
  install: PE,
  ActionSheet: Zr,
  AppBar: Jr,
  Avatar: xr,
  AvatarGroup: ea,
  BackTop: na,
  Badge: ur,
  BottomNavigation: ta,
  BottomNavigationItem: oa,
  Breadcrumb: ra,
  Breadcrumbs: aa,
  Button: hn,
  ButtonGroup: ia,
  Card: la,
  Cell: dr,
  Checkbox: ho,
  CheckboxGroup: sa,
  Chip: cr,
  Col: ua,
  Collapse: da,
  CollapseItem: ca,
  Context: wn,
  Countdown: ha,
  Counter: wa,
  DatePicker: Sa,
  Dialog: ka,
  Divider: Pa,
  Drag: gr,
  Ellipsis: Ea,
  Fab: Ia,
  FieldDecorator: yo,
  FloatingPanel: Ba,
  Form: Ma,
  FormDetails: pn,
  Hover: kn,
  HoverOverlay: In,
  Icon: He,
  Image: Da,
  ImagePreview: Co,
  IndexAnchor: Na,
  IndexBar: Va,
  Input: yr,
  Lazy: mo,
  Link: Aa,
  List: za,
  Loading: Yt,
  LoadingBar: La,
  Locale: Kr,
  Menu: Xt,
  MenuOption: Ra,
  MenuSelect: Ua,
  Option: Ha,
  Overlay: Fa,
  Pagination: Ya,
  Paper: ja,
  Picker: Wa,
  Popup: vt,
  Progress: qa,
  PullRefresh: Ga,
  Radio: Xa,
  RadioGroup: Ka,
  Rate: Za,
  Result: Ja,
  Ripple: Ze,
  Row: Qa,
  Select: _a,
  Skeleton: xa,
  Slider: ei,
  Snackbar: ti,
  Space: oi,
  Step: ri,
  Steps: ai,
  Sticky: So,
  StyleProvider: ii,
  Swipe: $o,
  SwipeItem: wo,
  Switch: li,
  Tab: si,
  TabItem: ui,
  Table: di,
  Tabs: ci,
  TabsItems: fi,
  Themes: vi,
  TimePicker: mi,
  Tooltip: br,
  Uploader: hi,
  Watermark: pi
};
export {
  Zr as ActionSheet,
  Jr as AppBar,
  xr as Avatar,
  ea as AvatarGroup,
  na as BackTop,
  ur as Badge,
  ta as BottomNavigation,
  oa as BottomNavigationItem,
  ra as Breadcrumb,
  aa as Breadcrumbs,
  hn as Button,
  ia as ButtonGroup,
  la as Card,
  dr as Cell,
  ho as Checkbox,
  sa as CheckboxGroup,
  cr as Chip,
  ua as Col,
  da as Collapse,
  ca as CollapseItem,
  wn as Context,
  ha as Countdown,
  wa as Counter,
  Sa as DatePicker,
  ka as Dialog,
  Pa as Divider,
  gr as Drag,
  Ea as Ellipsis,
  Ia as Fab,
  yo as FieldDecorator,
  Ba as FloatingPanel,
  Ma as Form,
  pn as FormDetails,
  kn as Hover,
  In as HoverOverlay,
  He as Icon,
  Da as Image,
  Co as ImagePreview,
  Na as IndexAnchor,
  Va as IndexBar,
  yr as Input,
  mo as Lazy,
  Aa as Link,
  za as List,
  Yt as Loading,
  La as LoadingBar,
  Kr as Locale,
  Xt as Menu,
  Ra as MenuOption,
  Ua as MenuSelect,
  Ha as Option,
  Fa as Overlay,
  _r as PIXEL,
  Ya as Pagination,
  ja as Paper,
  Wa as Picker,
  vt as Popup,
  qa as Progress,
  Ga as PullRefresh,
  Xa as Radio,
  Ka as RadioGroup,
  Za as Rate,
  Ja as Result,
  Ze as Ripple,
  Qa as Row,
  Mv as SNACKBAR_TYPE,
  _a as Select,
  xa as Skeleton,
  ei as Slider,
  ti as Snackbar,
  oi as Space,
  ri as Step,
  ai as Steps,
  So as Sticky,
  ii as StyleProvider,
  $o as Swipe,
  wo as SwipeItem,
  li as Switch,
  si as Tab,
  ui as TabItem,
  di as Table,
  ci as Tabs,
  fi as TabsItems,
  vi as Themes,
  mi as TimePicker,
  br as Tooltip,
  hi as Uploader,
  pi as Watermark,
  DE as _ActionSheetComponent,
  NE as _AppBarComponent,
  AE as _AvatarComponent,
  zE as _AvatarGroupComponent,
  FE as _BackTopComponent,
  YE as _BadgeComponent,
  jE as _BottomNavigationComponent,
  WE as _BottomNavigationItemComponent,
  qE as _BreadcrumbComponent,
  GE as _BreadcrumbsComponent,
  HE as _ButtonComponent,
  XE as _ButtonGroupComponent,
  KE as _CardComponent,
  ZE as _CellComponent,
  QE as _CheckboxComponent,
  _E as _CheckboxGroupComponent,
  xE as _ChipComponent,
  eI as _ColComponent,
  nI as _CollapseComponent,
  tI as _CollapseItemComponent,
  TE as _ContextComponent,
  oI as _CountdownComponent,
  rI as _CounterComponent,
  aI as _DatePickerComponent,
  iI as _DialogComponent,
  lI as _DividerComponent,
  sI as _DragComponent,
  dI as _EllipsisComponent,
  cI as _FabComponent,
  fI as _FieldDecoratorComponent,
  vI as _FloatingPanelComponent,
  mI as _FormComponent,
  JE as _FormDetailsComponent,
  UE as _HoverComponent,
  RE as _HoverOverlayComponent,
  BE as _IconComponent,
  hI as _ImageComponent,
  bI as _ImagePreviewComponent,
  $I as _IndexAnchorComponent,
  wI as _IndexBarComponent,
  CI as _InputComponent,
  VE as _LazyComponent,
  SI as _LinkComponent,
  kI as _ListComponent,
  PI as _LoadingBarComponent,
  LE as _LoadingComponent,
  ME as _LocaleComponent,
  OI as _MenuComponent,
  TI as _MenuOptionComponent,
  EI as _MenuSelectComponent,
  II as _OptionComponent,
  BI as _OverlayComponent,
  MI as _PaginationComponent,
  DI as _PaperComponent,
  NI as _PickerComponent,
  IE as _PopupComponent,
  VI as _ProgressComponent,
  AI as _PullRefreshComponent,
  zI as _RadioComponent,
  LI as _RadioGroupComponent,
  RI as _RateComponent,
  UI as _ResultComponent,
  EE as _RippleComponent,
  HI as _RowComponent,
  FI as _SelectComponent,
  YI as _SkeletonComponent,
  jI as _SliderComponent,
  WI as _SnackbarComponent,
  qI as _SpaceComponent,
  GI as _StepComponent,
  XI as _StepsComponent,
  yI as _StickyComponent,
  KI as _StyleProviderComponent,
  pI as _SwipeComponent,
  gI as _SwipeItemComponent,
  ZI as _SwitchComponent,
  JI as _TabComponent,
  QI as _TabItemComponent,
  _I as _TableComponent,
  xI as _TabsComponent,
  e3 as _TabsItemsComponent,
  n3 as _ThemesComponent,
  t3 as _TimePickerComponent,
  uI as _TooltipComponent,
  o3 as _UploaderComponent,
  r3 as _WatermarkComponent,
  bh as actionSheetProps,
  Oi as add,
  Dh as appBarProps,
  dp as avatarGroupProps,
  tp as avatarProps,
  Kp as backTopProps,
  xp as badgeProps,
  mg as bottomNavigationItemProps,
  rg as bottomNavigationProps,
  wg as breadcrumbProps,
  Eg as breadcrumbsProps,
  Hp as buttonProps,
  Lg as cardProps,
  Wg as cellProps,
  p0 as checkboxGroupProps,
  n0 as checkboxProps,
  w0 as chipProps,
  P0 as colProps,
  L0 as collapseItemProps,
  D0 as collapseProps,
  Y0 as countdownProps,
  Ub as counterProps,
  iy as datePickerProps,
  a3 as default,
  _e as defaultLazyOptions,
  zy as dialogProps,
  _y as dividerProps,
  o1 as dragProps,
  Zd as enUS,
  bl as fieldDecoratorProps,
  Zg as formDetailsProps,
  X$ as formProps,
  Ke as iconProps,
  tc as imageCache,
  bw as imagePreviewProps,
  Q$ as imageProps,
  Rw as indexAnchorProps,
  jw as indexBarProps,
  xw as inputProps,
  PE as install,
  lC as linkProps,
  fC as listProps,
  CC as loadingBarProps,
  at as loadingProps,
  RC as menuOptionProps,
  xf as menuProps,
  _d as merge,
  eS as optionProps,
  aS as overlayProps,
  Qe as pack,
  Qd as packs,
  lS as paginationProps,
  vS as paperProps,
  CS as pickerProps,
  Bo as popupProps,
  DS as progressProps,
  jS as pullRefreshProps,
  ek as radioGroupProps,
  XS as radioProps,
  ak as rateProps,
  jk as resultProps,
  Kk as rowProps,
  oP as selectProps,
  uP as skeletonProps,
  mP as sliderProps,
  Tv as snackbarProps,
  WP as spaceProps,
  JP as stepProps,
  rO as stepsProps,
  or as stickyProps,
  sO as styleProviderProps,
  Nf as swipeProps,
  fO as switchProps,
  OO as tabItemProps,
  $O as tabProps,
  MO as tableProps,
  FO as tabsItemsProps,
  zO as tabsProps,
  UT as timePickerProps,
  $$ as tooltipProps,
  QT as uploaderProps,
  Ti as use,
  Hn as useHoverOverlay,
  Pi as useLocale,
  kE as version,
  ki as zhCN
};
