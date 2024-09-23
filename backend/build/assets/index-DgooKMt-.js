var mb = Object.defineProperty;
var yb = (t, e, n) =>
  e in t
    ? mb(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (t[e] = n);
var te = (t, e, n) => yb(t, typeof e != "symbol" ? e + "" : e, n);
function vb(t, e) {
  for (var n = 0; n < e.length; n++) {
    const i = e[n];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const r in i)
        if (r !== "default" && !(r in t)) {
          const s = Object.getOwnPropertyDescriptor(i, r);
          s &&
            Object.defineProperty(
              t,
              r,
              s.get ? s : { enumerable: !0, get: () => i[r] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r);
  new MutationObserver((r) => {
    for (const s of r)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && i(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const s = {};
    return (
      r.integrity && (s.integrity = r.integrity),
      r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function i(r) {
    if (r.ep) return;
    r.ep = !0;
    const s = n(r);
    fetch(r.href, s);
  }
})();
var xb =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function gs(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var P1 = { exports: {} },
  xc = {},
  L1 = { exports: {} },
  ne = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jo = Symbol.for("react.element"),
  _b = Symbol.for("react.portal"),
  bb = Symbol.for("react.fragment"),
  wb = Symbol.for("react.strict_mode"),
  Eb = Symbol.for("react.profiler"),
  Sb = Symbol.for("react.provider"),
  Cb = Symbol.for("react.context"),
  kb = Symbol.for("react.forward_ref"),
  Ob = Symbol.for("react.suspense"),
  Tb = Symbol.for("react.memo"),
  Nb = Symbol.for("react.lazy"),
  Bp = Symbol.iterator;
function Ab(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (Bp && t[Bp]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var j1 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  D1 = Object.assign,
  R1 = {};
function ms(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = R1),
    (this.updater = n || j1);
}
ms.prototype.isReactComponent = {};
ms.prototype.setState = function (t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, t, e, "setState");
};
ms.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function M1() {}
M1.prototype = ms.prototype;
function zf(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = R1),
    (this.updater = n || j1);
}
var Wf = (zf.prototype = new M1());
Wf.constructor = zf;
D1(Wf, ms.prototype);
Wf.isPureReactComponent = !0;
var zp = Array.isArray,
  I1 = Object.prototype.hasOwnProperty,
  Hf = { current: null },
  $1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function F1(t, e, n) {
  var i,
    r = {},
    s = null,
    o = null;
  if (e != null)
    for (i in (e.ref !== void 0 && (o = e.ref),
    e.key !== void 0 && (s = "" + e.key),
    e))
      I1.call(e, i) && !$1.hasOwnProperty(i) && (r[i] = e[i]);
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
    r.children = l;
  }
  if (t && t.defaultProps)
    for (i in ((a = t.defaultProps), a)) r[i] === void 0 && (r[i] = a[i]);
  return {
    $$typeof: Jo,
    type: t,
    key: s,
    ref: o,
    props: r,
    _owner: Hf.current,
  };
}
function Pb(t, e) {
  return {
    $$typeof: Jo,
    type: t.type,
    key: e,
    ref: t.ref,
    props: t.props,
    _owner: t._owner,
  };
}
function Vf(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Jo;
}
function Lb(t) {
  var e = { "=": "=0", ":": "=2" };
  return (
    "$" +
    t.replace(/[=:]/g, function (n) {
      return e[n];
    })
  );
}
var Wp = /\/+/g;
function nu(t, e) {
  return typeof t == "object" && t !== null && t.key != null
    ? Lb("" + t.key)
    : e.toString(36);
}
function il(t, e, n, i, r) {
  var s = typeof t;
  (s === "undefined" || s === "boolean") && (t = null);
  var o = !1;
  if (t === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case Jo:
          case _b:
            o = !0;
        }
    }
  if (o)
    return (
      (o = t),
      (r = r(o)),
      (t = i === "" ? "." + nu(o, 0) : i),
      zp(r)
        ? ((n = ""),
          t != null && (n = t.replace(Wp, "$&/") + "/"),
          il(r, e, n, "", function (c) {
            return c;
          }))
        : r != null &&
          (Vf(r) &&
            (r = Pb(
              r,
              n +
                (!r.key || (o && o.key === r.key)
                  ? ""
                  : ("" + r.key).replace(Wp, "$&/") + "/") +
                t,
            )),
          e.push(r)),
      1
    );
  if (((o = 0), (i = i === "" ? "." : i + ":"), zp(t)))
    for (var a = 0; a < t.length; a++) {
      s = t[a];
      var l = i + nu(s, a);
      o += il(s, e, n, l, r);
    }
  else if (((l = Ab(t)), typeof l == "function"))
    for (t = l.call(t), a = 0; !(s = t.next()).done; )
      (s = s.value), (l = i + nu(s, a++)), (o += il(s, e, n, l, r));
  else if (s === "object")
    throw (
      ((e = String(t)),
      Error(
        "Objects are not valid as a React child (found: " +
          (e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return o;
}
function ma(t, e, n) {
  if (t == null) return t;
  var i = [],
    r = 0;
  return (
    il(t, i, "", "", function (s) {
      return e.call(n, s, r++);
    }),
    i
  );
}
function jb(t) {
  if (t._status === -1) {
    var e = t._result;
    (e = e()),
      e.then(
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 1), (t._result = n));
        },
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 2), (t._result = n));
        },
      ),
      t._status === -1 && ((t._status = 0), (t._result = e));
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var ut = { current: null },
  rl = { transition: null },
  Db = {
    ReactCurrentDispatcher: ut,
    ReactCurrentBatchConfig: rl,
    ReactCurrentOwner: Hf,
  };
ne.Children = {
  map: ma,
  forEach: function (t, e, n) {
    ma(
      t,
      function () {
        e.apply(this, arguments);
      },
      n,
    );
  },
  count: function (t) {
    var e = 0;
    return (
      ma(t, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (t) {
    return (
      ma(t, function (e) {
        return e;
      }) || []
    );
  },
  only: function (t) {
    if (!Vf(t))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return t;
  },
};
ne.Component = ms;
ne.Fragment = bb;
ne.Profiler = Eb;
ne.PureComponent = zf;
ne.StrictMode = wb;
ne.Suspense = Ob;
ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Db;
ne.cloneElement = function (t, e, n) {
  if (t == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        t +
        ".",
    );
  var i = D1({}, t.props),
    r = t.key,
    s = t.ref,
    o = t._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((s = e.ref), (o = Hf.current)),
      e.key !== void 0 && (r = "" + e.key),
      t.type && t.type.defaultProps)
    )
      var a = t.type.defaultProps;
    for (l in e)
      I1.call(e, l) &&
        !$1.hasOwnProperty(l) &&
        (i[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
    i.children = a;
  }
  return { $$typeof: Jo, type: t.type, key: r, ref: s, props: i, _owner: o };
};
ne.createContext = function (t) {
  return (
    (t = {
      $$typeof: Cb,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (t.Provider = { $$typeof: Sb, _context: t }),
    (t.Consumer = t)
  );
};
ne.createElement = F1;
ne.createFactory = function (t) {
  var e = F1.bind(null, t);
  return (e.type = t), e;
};
ne.createRef = function () {
  return { current: null };
};
ne.forwardRef = function (t) {
  return { $$typeof: kb, render: t };
};
ne.isValidElement = Vf;
ne.lazy = function (t) {
  return { $$typeof: Nb, _payload: { _status: -1, _result: t }, _init: jb };
};
ne.memo = function (t, e) {
  return { $$typeof: Tb, type: t, compare: e === void 0 ? null : e };
};
ne.startTransition = function (t) {
  var e = rl.transition;
  rl.transition = {};
  try {
    t();
  } finally {
    rl.transition = e;
  }
};
ne.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
ne.useCallback = function (t, e) {
  return ut.current.useCallback(t, e);
};
ne.useContext = function (t) {
  return ut.current.useContext(t);
};
ne.useDebugValue = function () {};
ne.useDeferredValue = function (t) {
  return ut.current.useDeferredValue(t);
};
ne.useEffect = function (t, e) {
  return ut.current.useEffect(t, e);
};
ne.useId = function () {
  return ut.current.useId();
};
ne.useImperativeHandle = function (t, e, n) {
  return ut.current.useImperativeHandle(t, e, n);
};
ne.useInsertionEffect = function (t, e) {
  return ut.current.useInsertionEffect(t, e);
};
ne.useLayoutEffect = function (t, e) {
  return ut.current.useLayoutEffect(t, e);
};
ne.useMemo = function (t, e) {
  return ut.current.useMemo(t, e);
};
ne.useReducer = function (t, e, n) {
  return ut.current.useReducer(t, e, n);
};
ne.useRef = function (t) {
  return ut.current.useRef(t);
};
ne.useState = function (t) {
  return ut.current.useState(t);
};
ne.useSyncExternalStore = function (t, e, n) {
  return ut.current.useSyncExternalStore(t, e, n);
};
ne.useTransition = function () {
  return ut.current.useTransition();
};
ne.version = "18.2.0";
L1.exports = ne;
var b = L1.exports;
const Ne = gs(b),
  Rb = vb({ __proto__: null, default: Ne }, [b]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mb = b,
  Ib = Symbol.for("react.element"),
  $b = Symbol.for("react.fragment"),
  Fb = Object.prototype.hasOwnProperty,
  Bb = Mb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  zb = { key: !0, ref: !0, __self: !0, __source: !0 };
function B1(t, e, n) {
  var i,
    r = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    e.key !== void 0 && (s = "" + e.key),
    e.ref !== void 0 && (o = e.ref);
  for (i in e) Fb.call(e, i) && !zb.hasOwnProperty(i) && (r[i] = e[i]);
  if (t && t.defaultProps)
    for (i in ((e = t.defaultProps), e)) r[i] === void 0 && (r[i] = e[i]);
  return {
    $$typeof: Ib,
    type: t,
    key: s,
    ref: o,
    props: r,
    _owner: Bb.current,
  };
}
xc.Fragment = $b;
xc.jsx = B1;
xc.jsxs = B1;
P1.exports = xc;
var f = P1.exports,
  ud = {},
  z1 = { exports: {} },
  Lt = {},
  W1 = { exports: {} },
  H1 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
  function e(L, N) {
    var O = L.length;
    L.push(N);
    e: for (; 0 < O; ) {
      var F = (O - 1) >>> 1,
        R = L[F];
      if (0 < r(R, N)) (L[F] = N), (L[O] = R), (O = F);
      else break e;
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function i(L) {
    if (L.length === 0) return null;
    var N = L[0],
      O = L.pop();
    if (O !== N) {
      L[0] = O;
      e: for (var F = 0, R = L.length, B = R >>> 1; F < B; ) {
        var W = 2 * (F + 1) - 1,
          U = L[W],
          q = W + 1,
          he = L[q];
        if (0 > r(U, O))
          q < R && 0 > r(he, U)
            ? ((L[F] = he), (L[q] = O), (F = q))
            : ((L[F] = U), (L[W] = O), (F = W));
        else if (q < R && 0 > r(he, O)) (L[F] = he), (L[q] = O), (F = q);
        else break e;
      }
    }
    return N;
  }
  function r(L, N) {
    var O = L.sortIndex - N.sortIndex;
    return O !== 0 ? O : L.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    t.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    t.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    c = [],
    u = 1,
    d = null,
    h = 3,
    p = !1,
    g = !1,
    y = !1,
    v = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    x = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function _(L) {
    for (var N = n(c); N !== null; ) {
      if (N.callback === null) i(c);
      else if (N.startTime <= L)
        i(c), (N.sortIndex = N.expirationTime), e(l, N);
      else break;
      N = n(c);
    }
  }
  function w(L) {
    if (((y = !1), _(L), !g))
      if (n(l) !== null) (g = !0), Y(E);
      else {
        var N = n(c);
        N !== null && G(w, N.startTime - L);
      }
  }
  function E(L, N) {
    (g = !1), y && ((y = !1), m(k), (k = -1)), (p = !0);
    var O = h;
    try {
      for (
        _(N), d = n(l);
        d !== null && (!(d.expirationTime > N) || (L && !$()));

      ) {
        var F = d.callback;
        if (typeof F == "function") {
          (d.callback = null), (h = d.priorityLevel);
          var R = F(d.expirationTime <= N);
          (N = t.unstable_now()),
            typeof R == "function" ? (d.callback = R) : d === n(l) && i(l),
            _(N);
        } else i(l);
        d = n(l);
      }
      if (d !== null) var B = !0;
      else {
        var W = n(c);
        W !== null && G(w, W.startTime - N), (B = !1);
      }
      return B;
    } finally {
      (d = null), (h = O), (p = !1);
    }
  }
  var S = !1,
    C = null,
    k = -1,
    P = 5,
    j = -1;
  function $() {
    return !(t.unstable_now() - j < P);
  }
  function A() {
    if (C !== null) {
      var L = t.unstable_now();
      j = L;
      var N = !0;
      try {
        N = C(!0, L);
      } finally {
        N ? M() : ((S = !1), (C = null));
      }
    } else S = !1;
  }
  var M;
  if (typeof x == "function")
    M = function () {
      x(A);
    };
  else if (typeof MessageChannel < "u") {
    var V = new MessageChannel(),
      z = V.port2;
    (V.port1.onmessage = A),
      (M = function () {
        z.postMessage(null);
      });
  } else
    M = function () {
      v(A, 0);
    };
  function Y(L) {
    (C = L), S || ((S = !0), M());
  }
  function G(L, N) {
    k = v(function () {
      L(t.unstable_now());
    }, N);
  }
  (t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (L) {
      L.callback = null;
    }),
    (t.unstable_continueExecution = function () {
      g || p || ((g = !0), Y(E));
    }),
    (t.unstable_forceFrameRate = function (L) {
      0 > L || 125 < L
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (P = 0 < L ? Math.floor(1e3 / L) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (t.unstable_next = function (L) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = h;
      }
      var O = h;
      h = N;
      try {
        return L();
      } finally {
        h = O;
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (L, N) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var O = h;
      h = L;
      try {
        return N();
      } finally {
        h = O;
      }
    }),
    (t.unstable_scheduleCallback = function (L, N, O) {
      var F = t.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? F + O : F))
          : (O = F),
        L)
      ) {
        case 1:
          var R = -1;
          break;
        case 2:
          R = 250;
          break;
        case 5:
          R = 1073741823;
          break;
        case 4:
          R = 1e4;
          break;
        default:
          R = 5e3;
      }
      return (
        (R = O + R),
        (L = {
          id: u++,
          callback: N,
          priorityLevel: L,
          startTime: O,
          expirationTime: R,
          sortIndex: -1,
        }),
        O > F
          ? ((L.sortIndex = O),
            e(c, L),
            n(l) === null &&
              L === n(c) &&
              (y ? (m(k), (k = -1)) : (y = !0), G(w, O - F)))
          : ((L.sortIndex = R), e(l, L), g || p || ((g = !0), Y(E))),
        L
      );
    }),
    (t.unstable_shouldYield = $),
    (t.unstable_wrapCallback = function (L) {
      var N = h;
      return function () {
        var O = h;
        h = N;
        try {
          return L.apply(this, arguments);
        } finally {
          h = O;
        }
      };
    });
})(H1);
W1.exports = H1;
var Wb = W1.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var V1 = b,
  Tt = Wb;
function I(t) {
  for (
    var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1;
    n < arguments.length;
    n++
  )
    e += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    t +
    "; visit " +
    e +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var U1 = new Set(),
  Eo = {};
function lr(t, e) {
  qr(t, e), qr(t + "Capture", e);
}
function qr(t, e) {
  for (Eo[t] = e, t = 0; t < e.length; t++) U1.add(e[t]);
}
var Mn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  dd = Object.prototype.hasOwnProperty,
  Hb =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Hp = {},
  Vp = {};
function Vb(t) {
  return dd.call(Vp, t)
    ? !0
    : dd.call(Hp, t)
    ? !1
    : Hb.test(t)
    ? (Vp[t] = !0)
    : ((Hp[t] = !0), !1);
}
function Ub(t, e, n, i) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return i
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((t = t.toLowerCase().slice(0, 5)), t !== "data-" && t !== "aria-");
    default:
      return !1;
  }
}
function Yb(t, e, n, i) {
  if (e === null || typeof e > "u" || Ub(t, e, n, i)) return !0;
  if (i) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function dt(t, e, n, i, r, s, o) {
  (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = i),
    (this.attributeNamespace = r),
    (this.mustUseProperty = n),
    (this.propertyName = t),
    (this.type = e),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var Ve = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (t) {
    Ve[t] = new dt(t, 0, !1, t, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (t) {
  var e = t[0];
  Ve[e] = new dt(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
  Ve[t] = new dt(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (t) {
  Ve[t] = new dt(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (t) {
    Ve[t] = new dt(t, 3, !1, t.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (t) {
  Ve[t] = new dt(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function (t) {
  Ve[t] = new dt(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (t) {
  Ve[t] = new dt(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function (t) {
  Ve[t] = new dt(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var Uf = /[\-:]([a-z])/g;
function Yf(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(Uf, Yf);
    Ve[e] = new dt(e, 1, !1, t, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(Uf, Yf);
    Ve[e] = new dt(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
  var e = t.replace(Uf, Yf);
  Ve[e] = new dt(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (t) {
  Ve[t] = new dt(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
Ve.xlinkHref = new dt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (t) {
  Ve[t] = new dt(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function Kf(t, e, n, i) {
  var r = Ve.hasOwnProperty(e) ? Ve[e] : null;
  (r !== null
    ? r.type !== 0
    : i ||
      !(2 < e.length) ||
      (e[0] !== "o" && e[0] !== "O") ||
      (e[1] !== "n" && e[1] !== "N")) &&
    (Yb(e, n, r, i) && (n = null),
    i || r === null
      ? Vb(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n))
      : r.mustUseProperty
      ? (t[r.propertyName] = n === null ? (r.type === 3 ? !1 : "") : n)
      : ((e = r.attributeName),
        (i = r.attributeNamespace),
        n === null
          ? t.removeAttribute(e)
          : ((r = r.type),
            (n = r === 3 || (r === 4 && n === !0) ? "" : "" + n),
            i ? t.setAttributeNS(i, e, n) : t.setAttribute(e, n))));
}
var Wn = V1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ya = Symbol.for("react.element"),
  kr = Symbol.for("react.portal"),
  Or = Symbol.for("react.fragment"),
  Gf = Symbol.for("react.strict_mode"),
  fd = Symbol.for("react.profiler"),
  Y1 = Symbol.for("react.provider"),
  K1 = Symbol.for("react.context"),
  qf = Symbol.for("react.forward_ref"),
  hd = Symbol.for("react.suspense"),
  pd = Symbol.for("react.suspense_list"),
  Xf = Symbol.for("react.memo"),
  Qn = Symbol.for("react.lazy"),
  G1 = Symbol.for("react.offscreen"),
  Up = Symbol.iterator;
function As(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (Up && t[Up]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var be = Object.assign,
  iu;
function Ks(t) {
  if (iu === void 0)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      iu = (e && e[1]) || "";
    }
  return (
    `
` +
    iu +
    t
  );
}
var ru = !1;
function su(t, e) {
  if (!t || ru) return "";
  ru = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
        Object.defineProperty(e.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (c) {
          var i = c;
        }
        Reflect.construct(t, [], e);
      } else {
        try {
          e.call();
        } catch (c) {
          i = c;
        }
        t.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        i = c;
      }
      t();
    }
  } catch (c) {
    if (c && i && typeof c.stack == "string") {
      for (
        var r = c.stack.split(`
`),
          s = i.stack.split(`
`),
          o = r.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && r[o] !== s[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (r[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || r[o] !== s[a])) {
                var l =
                  `
` + r[o].replace(" at new ", " at ");
                return (
                  t.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", t.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (ru = !1), (Error.prepareStackTrace = n);
  }
  return (t = t ? t.displayName || t.name : "") ? Ks(t) : "";
}
function Kb(t) {
  switch (t.tag) {
    case 5:
      return Ks(t.type);
    case 16:
      return Ks("Lazy");
    case 13:
      return Ks("Suspense");
    case 19:
      return Ks("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (t = su(t.type, !1)), t;
    case 11:
      return (t = su(t.type.render, !1)), t;
    case 1:
      return (t = su(t.type, !0)), t;
    default:
      return "";
  }
}
function gd(t) {
  if (t == null) return null;
  if (typeof t == "function") return t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case Or:
      return "Fragment";
    case kr:
      return "Portal";
    case fd:
      return "Profiler";
    case Gf:
      return "StrictMode";
    case hd:
      return "Suspense";
    case pd:
      return "SuspenseList";
  }
  if (typeof t == "object")
    switch (t.$$typeof) {
      case K1:
        return (t.displayName || "Context") + ".Consumer";
      case Y1:
        return (t._context.displayName || "Context") + ".Provider";
      case qf:
        var e = t.render;
        return (
          (t = t.displayName),
          t ||
            ((t = e.displayName || e.name || ""),
            (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
          t
        );
      case Xf:
        return (
          (e = t.displayName || null), e !== null ? e : gd(t.type) || "Memo"
        );
      case Qn:
        (e = t._payload), (t = t._init);
        try {
          return gd(t(e));
        } catch {}
    }
  return null;
}
function Gb(t) {
  var e = t.type;
  switch (t.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (t = e.render),
        (t = t.displayName || t.name || ""),
        e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return gd(e);
    case 8:
      return e === Gf ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function vi(t) {
  switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return t;
    case "object":
      return t;
    default:
      return "";
  }
}
function q1(t) {
  var e = t.type;
  return (
    (t = t.nodeName) &&
    t.toLowerCase() === "input" &&
    (e === "checkbox" || e === "radio")
  );
}
function qb(t) {
  var e = q1(t) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
    i = "" + t[e];
  if (
    !t.hasOwnProperty(e) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var r = n.get,
      s = n.set;
    return (
      Object.defineProperty(t, e, {
        configurable: !0,
        get: function () {
          return r.call(this);
        },
        set: function (o) {
          (i = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(t, e, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return i;
        },
        setValue: function (o) {
          i = "" + o;
        },
        stopTracking: function () {
          (t._valueTracker = null), delete t[e];
        },
      }
    );
  }
}
function va(t) {
  t._valueTracker || (t._valueTracker = qb(t));
}
function X1(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(),
    i = "";
  return (
    t && (i = q1(t) ? (t.checked ? "true" : "false") : t.value),
    (t = i),
    t !== n ? (e.setValue(t), !0) : !1
  );
}
function El(t) {
  if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u"))
    return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function md(t, e) {
  var n = e.checked;
  return be({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? t._wrapperState.initialChecked,
  });
}
function Yp(t, e) {
  var n = e.defaultValue == null ? "" : e.defaultValue,
    i = e.checked != null ? e.checked : e.defaultChecked;
  (n = vi(e.value != null ? e.value : n)),
    (t._wrapperState = {
      initialChecked: i,
      initialValue: n,
      controlled:
        e.type === "checkbox" || e.type === "radio"
          ? e.checked != null
          : e.value != null,
    });
}
function Q1(t, e) {
  (e = e.checked), e != null && Kf(t, "checked", e, !1);
}
function yd(t, e) {
  Q1(t, e);
  var n = vi(e.value),
    i = e.type;
  if (n != null)
    i === "number"
      ? ((n === 0 && t.value === "") || t.value != n) && (t.value = "" + n)
      : t.value !== "" + n && (t.value = "" + n);
  else if (i === "submit" || i === "reset") {
    t.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value")
    ? vd(t, e.type, n)
    : e.hasOwnProperty("defaultValue") && vd(t, e.type, vi(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (t.defaultChecked = !!e.defaultChecked);
}
function Kp(t, e, n) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var i = e.type;
    if (
      !(
        (i !== "submit" && i !== "reset") ||
        (e.value !== void 0 && e.value !== null)
      )
    )
      return;
    (e = "" + t._wrapperState.initialValue),
      n || e === t.value || (t.value = e),
      (t.defaultValue = e);
  }
  (n = t.name),
    n !== "" && (t.name = ""),
    (t.defaultChecked = !!t._wrapperState.initialChecked),
    n !== "" && (t.name = n);
}
function vd(t, e, n) {
  (e !== "number" || El(t.ownerDocument) !== t) &&
    (n == null
      ? (t.defaultValue = "" + t._wrapperState.initialValue)
      : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var Gs = Array.isArray;
function zr(t, e, n, i) {
  if (((t = t.options), e)) {
    e = {};
    for (var r = 0; r < n.length; r++) e["$" + n[r]] = !0;
    for (n = 0; n < t.length; n++)
      (r = e.hasOwnProperty("$" + t[n].value)),
        t[n].selected !== r && (t[n].selected = r),
        r && i && (t[n].defaultSelected = !0);
  } else {
    for (n = "" + vi(n), e = null, r = 0; r < t.length; r++) {
      if (t[r].value === n) {
        (t[r].selected = !0), i && (t[r].defaultSelected = !0);
        return;
      }
      e !== null || t[r].disabled || (e = t[r]);
    }
    e !== null && (e.selected = !0);
  }
}
function xd(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(I(91));
  return be({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: "" + t._wrapperState.initialValue,
  });
}
function Gp(t, e) {
  var n = e.value;
  if (n == null) {
    if (((n = e.children), (e = e.defaultValue), n != null)) {
      if (e != null) throw Error(I(92));
      if (Gs(n)) {
        if (1 < n.length) throw Error(I(93));
        n = n[0];
      }
      e = n;
    }
    e == null && (e = ""), (n = e);
  }
  t._wrapperState = { initialValue: vi(n) };
}
function J1(t, e) {
  var n = vi(e.value),
    i = vi(e.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    i != null && (t.defaultValue = "" + i);
}
function qp(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function Z1(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function _d(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml"
    ? Z1(e)
    : t === "http://www.w3.org/2000/svg" && e === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : t;
}
var xa,
  ey = (function (t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (e, n, i, r) {
          MSApp.execUnsafeLocalFunction(function () {
            return t(e, n, i, r);
          });
        }
      : t;
  })(function (t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
      t.innerHTML = e;
    else {
      for (
        xa = xa || document.createElement("div"),
          xa.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
          e = xa.firstChild;
        t.firstChild;

      )
        t.removeChild(t.firstChild);
      for (; e.firstChild; ) t.appendChild(e.firstChild);
    }
  });
function So(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var io = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Xb = ["Webkit", "ms", "Moz", "O"];
Object.keys(io).forEach(function (t) {
  Xb.forEach(function (e) {
    (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (io[e] = io[t]);
  });
});
function ty(t, e, n) {
  return e == null || typeof e == "boolean" || e === ""
    ? ""
    : n || typeof e != "number" || e === 0 || (io.hasOwnProperty(t) && io[t])
    ? ("" + e).trim()
    : e + "px";
}
function ny(t, e) {
  t = t.style;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var i = n.indexOf("--") === 0,
        r = ty(n, e[n], i);
      n === "float" && (n = "cssFloat"), i ? t.setProperty(n, r) : (t[n] = r);
    }
}
var Qb = be(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function bd(t, e) {
  if (e) {
    if (Qb[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(I(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(I(60));
      if (
        typeof e.dangerouslySetInnerHTML != "object" ||
        !("__html" in e.dangerouslySetInnerHTML)
      )
        throw Error(I(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(I(62));
  }
}
function wd(t, e) {
  if (t.indexOf("-") === -1) return typeof e.is == "string";
  switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ed = null;
function Qf(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  );
}
var Sd = null,
  Wr = null,
  Hr = null;
function Xp(t) {
  if ((t = ta(t))) {
    if (typeof Sd != "function") throw Error(I(280));
    var e = t.stateNode;
    e && ((e = Sc(e)), Sd(t.stateNode, t.type, e));
  }
}
function iy(t) {
  Wr ? (Hr ? Hr.push(t) : (Hr = [t])) : (Wr = t);
}
function ry() {
  if (Wr) {
    var t = Wr,
      e = Hr;
    if (((Hr = Wr = null), Xp(t), e)) for (t = 0; t < e.length; t++) Xp(e[t]);
  }
}
function sy(t, e) {
  return t(e);
}
function oy() {}
var ou = !1;
function ay(t, e, n) {
  if (ou) return t(e, n);
  ou = !0;
  try {
    return sy(t, e, n);
  } finally {
    (ou = !1), (Wr !== null || Hr !== null) && (oy(), ry());
  }
}
function Co(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var i = Sc(n);
  if (i === null) return null;
  n = i[e];
  e: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (i = !i.disabled) ||
        ((t = t.type),
        (i = !(
          t === "button" ||
          t === "input" ||
          t === "select" ||
          t === "textarea"
        ))),
        (t = !i);
      break e;
    default:
      t = !1;
  }
  if (t) return null;
  if (n && typeof n != "function") throw Error(I(231, e, typeof n));
  return n;
}
var Cd = !1;
if (Mn)
  try {
    var Ps = {};
    Object.defineProperty(Ps, "passive", {
      get: function () {
        Cd = !0;
      },
    }),
      window.addEventListener("test", Ps, Ps),
      window.removeEventListener("test", Ps, Ps);
  } catch {
    Cd = !1;
  }
function Jb(t, e, n, i, r, s, o, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var ro = !1,
  Sl = null,
  Cl = !1,
  kd = null,
  Zb = {
    onError: function (t) {
      (ro = !0), (Sl = t);
    },
  };
function ew(t, e, n, i, r, s, o, a, l) {
  (ro = !1), (Sl = null), Jb.apply(Zb, arguments);
}
function tw(t, e, n, i, r, s, o, a, l) {
  if ((ew.apply(this, arguments), ro)) {
    if (ro) {
      var c = Sl;
      (ro = !1), (Sl = null);
    } else throw Error(I(198));
    Cl || ((Cl = !0), (kd = c));
  }
}
function cr(t) {
  var e = t,
    n = t;
  if (t.alternate) for (; e.return; ) e = e.return;
  else {
    t = e;
    do (e = t), e.flags & 4098 && (n = e.return), (t = e.return);
    while (t);
  }
  return e.tag === 3 ? n : null;
}
function ly(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (
      (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
      e !== null)
    )
      return e.dehydrated;
  }
  return null;
}
function Qp(t) {
  if (cr(t) !== t) throw Error(I(188));
}
function nw(t) {
  var e = t.alternate;
  if (!e) {
    if (((e = cr(t)), e === null)) throw Error(I(188));
    return e !== t ? null : t;
  }
  for (var n = t, i = e; ; ) {
    var r = n.return;
    if (r === null) break;
    var s = r.alternate;
    if (s === null) {
      if (((i = r.return), i !== null)) {
        n = i;
        continue;
      }
      break;
    }
    if (r.child === s.child) {
      for (s = r.child; s; ) {
        if (s === n) return Qp(r), t;
        if (s === i) return Qp(r), e;
        s = s.sibling;
      }
      throw Error(I(188));
    }
    if (n.return !== i.return) (n = r), (i = s);
    else {
      for (var o = !1, a = r.child; a; ) {
        if (a === n) {
          (o = !0), (n = r), (i = s);
          break;
        }
        if (a === i) {
          (o = !0), (i = r), (n = s);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            (o = !0), (n = s), (i = r);
            break;
          }
          if (a === i) {
            (o = !0), (i = s), (n = r);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(I(189));
      }
    }
    if (n.alternate !== i) throw Error(I(190));
  }
  if (n.tag !== 3) throw Error(I(188));
  return n.stateNode.current === n ? t : e;
}
function cy(t) {
  return (t = nw(t)), t !== null ? uy(t) : null;
}
function uy(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = uy(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var dy = Tt.unstable_scheduleCallback,
  Jp = Tt.unstable_cancelCallback,
  iw = Tt.unstable_shouldYield,
  rw = Tt.unstable_requestPaint,
  ke = Tt.unstable_now,
  sw = Tt.unstable_getCurrentPriorityLevel,
  Jf = Tt.unstable_ImmediatePriority,
  fy = Tt.unstable_UserBlockingPriority,
  kl = Tt.unstable_NormalPriority,
  ow = Tt.unstable_LowPriority,
  hy = Tt.unstable_IdlePriority,
  _c = null,
  gn = null;
function aw(t) {
  if (gn && typeof gn.onCommitFiberRoot == "function")
    try {
      gn.onCommitFiberRoot(_c, t, void 0, (t.current.flags & 128) === 128);
    } catch {}
}
var tn = Math.clz32 ? Math.clz32 : uw,
  lw = Math.log,
  cw = Math.LN2;
function uw(t) {
  return (t >>>= 0), t === 0 ? 32 : (31 - ((lw(t) / cw) | 0)) | 0;
}
var _a = 64,
  ba = 4194304;
function qs(t) {
  switch (t & -t) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t;
  }
}
function Ol(t, e) {
  var n = t.pendingLanes;
  if (n === 0) return 0;
  var i = 0,
    r = t.suspendedLanes,
    s = t.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~r;
    a !== 0 ? (i = qs(a)) : ((s &= o), s !== 0 && (i = qs(s)));
  } else (o = n & ~r), o !== 0 ? (i = qs(o)) : s !== 0 && (i = qs(s));
  if (i === 0) return 0;
  if (
    e !== 0 &&
    e !== i &&
    !(e & r) &&
    ((r = i & -i), (s = e & -e), r >= s || (r === 16 && (s & 4194240) !== 0))
  )
    return e;
  if ((i & 4 && (i |= n & 16), (e = t.entangledLanes), e !== 0))
    for (t = t.entanglements, e &= i; 0 < e; )
      (n = 31 - tn(e)), (r = 1 << n), (i |= t[n]), (e &= ~r);
  return i;
}
function dw(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function fw(t, e) {
  for (
    var n = t.suspendedLanes,
      i = t.pingedLanes,
      r = t.expirationTimes,
      s = t.pendingLanes;
    0 < s;

  ) {
    var o = 31 - tn(s),
      a = 1 << o,
      l = r[o];
    l === -1
      ? (!(a & n) || a & i) && (r[o] = dw(a, e))
      : l <= e && (t.expiredLanes |= a),
      (s &= ~a);
  }
}
function Od(t) {
  return (
    (t = t.pendingLanes & -1073741825),
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
  );
}
function py() {
  var t = _a;
  return (_a <<= 1), !(_a & 4194240) && (_a = 64), t;
}
function au(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function Zo(t, e, n) {
  (t.pendingLanes |= e),
    e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (e = 31 - tn(e)),
    (t[e] = n);
}
function hw(t, e) {
  var n = t.pendingLanes & ~e;
  (t.pendingLanes = e),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.expiredLanes &= e),
    (t.mutableReadLanes &= e),
    (t.entangledLanes &= e),
    (e = t.entanglements);
  var i = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
    var r = 31 - tn(n),
      s = 1 << r;
    (e[r] = 0), (i[r] = -1), (t[r] = -1), (n &= ~s);
  }
}
function Zf(t, e) {
  var n = (t.entangledLanes |= e);
  for (t = t.entanglements; n; ) {
    var i = 31 - tn(n),
      r = 1 << i;
    (r & e) | (t[i] & e) && (t[i] |= e), (n &= ~r);
  }
}
var de = 0;
function gy(t) {
  return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1;
}
var my,
  eh,
  yy,
  vy,
  xy,
  Td = !1,
  wa = [],
  li = null,
  ci = null,
  ui = null,
  ko = new Map(),
  Oo = new Map(),
  ti = [],
  pw =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Zp(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      li = null;
      break;
    case "dragenter":
    case "dragleave":
      ci = null;
      break;
    case "mouseover":
    case "mouseout":
      ui = null;
      break;
    case "pointerover":
    case "pointerout":
      ko.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Oo.delete(e.pointerId);
  }
}
function Ls(t, e, n, i, r, s) {
  return t === null || t.nativeEvent !== s
    ? ((t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: i,
        nativeEvent: s,
        targetContainers: [r],
      }),
      e !== null && ((e = ta(e)), e !== null && eh(e)),
      t)
    : ((t.eventSystemFlags |= i),
      (e = t.targetContainers),
      r !== null && e.indexOf(r) === -1 && e.push(r),
      t);
}
function gw(t, e, n, i, r) {
  switch (e) {
    case "focusin":
      return (li = Ls(li, t, e, n, i, r)), !0;
    case "dragenter":
      return (ci = Ls(ci, t, e, n, i, r)), !0;
    case "mouseover":
      return (ui = Ls(ui, t, e, n, i, r)), !0;
    case "pointerover":
      var s = r.pointerId;
      return ko.set(s, Ls(ko.get(s) || null, t, e, n, i, r)), !0;
    case "gotpointercapture":
      return (
        (s = r.pointerId), Oo.set(s, Ls(Oo.get(s) || null, t, e, n, i, r)), !0
      );
  }
  return !1;
}
function _y(t) {
  var e = Bi(t.target);
  if (e !== null) {
    var n = cr(e);
    if (n !== null) {
      if (((e = n.tag), e === 13)) {
        if (((e = ly(n)), e !== null)) {
          (t.blockedOn = e),
            xy(t.priority, function () {
              yy(n);
            });
          return;
        }
      } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function sl(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = Nd(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var i = new n.constructor(n.type, n);
      (Ed = i), n.target.dispatchEvent(i), (Ed = null);
    } else return (e = ta(n)), e !== null && eh(e), (t.blockedOn = n), !1;
    e.shift();
  }
  return !0;
}
function e0(t, e, n) {
  sl(t) && n.delete(e);
}
function mw() {
  (Td = !1),
    li !== null && sl(li) && (li = null),
    ci !== null && sl(ci) && (ci = null),
    ui !== null && sl(ui) && (ui = null),
    ko.forEach(e0),
    Oo.forEach(e0);
}
function js(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null),
    Td ||
      ((Td = !0),
      Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority, mw)));
}
function To(t) {
  function e(r) {
    return js(r, t);
  }
  if (0 < wa.length) {
    js(wa[0], t);
    for (var n = 1; n < wa.length; n++) {
      var i = wa[n];
      i.blockedOn === t && (i.blockedOn = null);
    }
  }
  for (
    li !== null && js(li, t),
      ci !== null && js(ci, t),
      ui !== null && js(ui, t),
      ko.forEach(e),
      Oo.forEach(e),
      n = 0;
    n < ti.length;
    n++
  )
    (i = ti[n]), i.blockedOn === t && (i.blockedOn = null);
  for (; 0 < ti.length && ((n = ti[0]), n.blockedOn === null); )
    _y(n), n.blockedOn === null && ti.shift();
}
var Vr = Wn.ReactCurrentBatchConfig,
  Tl = !0;
function yw(t, e, n, i) {
  var r = de,
    s = Vr.transition;
  Vr.transition = null;
  try {
    (de = 1), th(t, e, n, i);
  } finally {
    (de = r), (Vr.transition = s);
  }
}
function vw(t, e, n, i) {
  var r = de,
    s = Vr.transition;
  Vr.transition = null;
  try {
    (de = 4), th(t, e, n, i);
  } finally {
    (de = r), (Vr.transition = s);
  }
}
function th(t, e, n, i) {
  if (Tl) {
    var r = Nd(t, e, n, i);
    if (r === null) yu(t, e, i, Nl, n), Zp(t, i);
    else if (gw(r, t, e, n, i)) i.stopPropagation();
    else if ((Zp(t, i), e & 4 && -1 < pw.indexOf(t))) {
      for (; r !== null; ) {
        var s = ta(r);
        if (
          (s !== null && my(s),
          (s = Nd(t, e, n, i)),
          s === null && yu(t, e, i, Nl, n),
          s === r)
        )
          break;
        r = s;
      }
      r !== null && i.stopPropagation();
    } else yu(t, e, i, null, n);
  }
}
var Nl = null;
function Nd(t, e, n, i) {
  if (((Nl = null), (t = Qf(i)), (t = Bi(t)), t !== null))
    if (((e = cr(t)), e === null)) t = null;
    else if (((n = e.tag), n === 13)) {
      if (((t = ly(e)), t !== null)) return t;
      t = null;
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else e !== t && (t = null);
  return (Nl = t), null;
}
function by(t) {
  switch (t) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (sw()) {
        case Jf:
          return 1;
        case fy:
          return 4;
        case kl:
        case ow:
          return 16;
        case hy:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ri = null,
  nh = null,
  ol = null;
function wy() {
  if (ol) return ol;
  var t,
    e = nh,
    n = e.length,
    i,
    r = "value" in ri ? ri.value : ri.textContent,
    s = r.length;
  for (t = 0; t < n && e[t] === r[t]; t++);
  var o = n - t;
  for (i = 1; i <= o && e[n - i] === r[s - i]; i++);
  return (ol = r.slice(t, 1 < i ? 1 - i : void 0));
}
function al(t) {
  var e = t.keyCode;
  return (
    "charCode" in t
      ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
      : (t = e),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  );
}
function Ea() {
  return !0;
}
function t0() {
  return !1;
}
function jt(t) {
  function e(n, i, r, s, o) {
    (this._reactName = n),
      (this._targetInst = r),
      (this.type = i),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in t)
      t.hasOwnProperty(a) && ((n = t[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Ea
        : t0),
      (this.isPropagationStopped = t0),
      this
    );
  }
  return (
    be(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ea));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ea));
      },
      persist: function () {},
      isPersistent: Ea,
    }),
    e
  );
}
var ys = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ih = jt(ys),
  ea = be({}, ys, { view: 0, detail: 0 }),
  xw = jt(ea),
  lu,
  cu,
  Ds,
  bc = be({}, ea, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: rh,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0
        ? t.fromElement === t.srcElement
          ? t.toElement
          : t.fromElement
        : t.relatedTarget;
    },
    movementX: function (t) {
      return "movementX" in t
        ? t.movementX
        : (t !== Ds &&
            (Ds && t.type === "mousemove"
              ? ((lu = t.screenX - Ds.screenX), (cu = t.screenY - Ds.screenY))
              : (cu = lu = 0),
            (Ds = t)),
          lu);
    },
    movementY: function (t) {
      return "movementY" in t ? t.movementY : cu;
    },
  }),
  n0 = jt(bc),
  _w = be({}, bc, { dataTransfer: 0 }),
  bw = jt(_w),
  ww = be({}, ea, { relatedTarget: 0 }),
  uu = jt(ww),
  Ew = be({}, ys, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Sw = jt(Ew),
  Cw = be({}, ys, {
    clipboardData: function (t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    },
  }),
  kw = jt(Cw),
  Ow = be({}, ys, { data: 0 }),
  i0 = jt(Ow),
  Tw = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Nw = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Aw = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Pw(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = Aw[t]) ? !!e[t] : !1;
}
function rh() {
  return Pw;
}
var Lw = be({}, ea, {
    key: function (t) {
      if (t.key) {
        var e = Tw[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress"
        ? ((t = al(t)), t === 13 ? "Enter" : String.fromCharCode(t))
        : t.type === "keydown" || t.type === "keyup"
        ? Nw[t.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: rh,
    charCode: function (t) {
      return t.type === "keypress" ? al(t) : 0;
    },
    keyCode: function (t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function (t) {
      return t.type === "keypress"
        ? al(t)
        : t.type === "keydown" || t.type === "keyup"
        ? t.keyCode
        : 0;
    },
  }),
  jw = jt(Lw),
  Dw = be({}, bc, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  r0 = jt(Dw),
  Rw = be({}, ea, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: rh,
  }),
  Mw = jt(Rw),
  Iw = be({}, ys, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  $w = jt(Iw),
  Fw = be({}, bc, {
    deltaX: function (t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function (t) {
      return "deltaY" in t
        ? t.deltaY
        : "wheelDeltaY" in t
        ? -t.wheelDeltaY
        : "wheelDelta" in t
        ? -t.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Bw = jt(Fw),
  zw = [9, 13, 27, 32],
  sh = Mn && "CompositionEvent" in window,
  so = null;
Mn && "documentMode" in document && (so = document.documentMode);
var Ww = Mn && "TextEvent" in window && !so,
  Ey = Mn && (!sh || (so && 8 < so && 11 >= so)),
  s0 = " ",
  o0 = !1;
function Sy(t, e) {
  switch (t) {
    case "keyup":
      return zw.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Cy(t) {
  return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
}
var Tr = !1;
function Hw(t, e) {
  switch (t) {
    case "compositionend":
      return Cy(e);
    case "keypress":
      return e.which !== 32 ? null : ((o0 = !0), s0);
    case "textInput":
      return (t = e.data), t === s0 && o0 ? null : t;
    default:
      return null;
  }
}
function Vw(t, e) {
  if (Tr)
    return t === "compositionend" || (!sh && Sy(t, e))
      ? ((t = wy()), (ol = nh = ri = null), (Tr = !1), t)
      : null;
  switch (t) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return Ey && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var Uw = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function a0(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!Uw[t.type] : e === "textarea";
}
function ky(t, e, n, i) {
  iy(i),
    (e = Al(e, "onChange")),
    0 < e.length &&
      ((n = new ih("onChange", "change", null, n, i)),
      t.push({ event: n, listeners: e }));
}
var oo = null,
  No = null;
function Yw(t) {
  Iy(t, 0);
}
function wc(t) {
  var e = Pr(t);
  if (X1(e)) return t;
}
function Kw(t, e) {
  if (t === "change") return e;
}
var Oy = !1;
if (Mn) {
  var du;
  if (Mn) {
    var fu = "oninput" in document;
    if (!fu) {
      var l0 = document.createElement("div");
      l0.setAttribute("oninput", "return;"),
        (fu = typeof l0.oninput == "function");
    }
    du = fu;
  } else du = !1;
  Oy = du && (!document.documentMode || 9 < document.documentMode);
}
function c0() {
  oo && (oo.detachEvent("onpropertychange", Ty), (No = oo = null));
}
function Ty(t) {
  if (t.propertyName === "value" && wc(No)) {
    var e = [];
    ky(e, No, t, Qf(t)), ay(Yw, e);
  }
}
function Gw(t, e, n) {
  t === "focusin"
    ? (c0(), (oo = e), (No = n), oo.attachEvent("onpropertychange", Ty))
    : t === "focusout" && c0();
}
function qw(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown")
    return wc(No);
}
function Xw(t, e) {
  if (t === "click") return wc(e);
}
function Qw(t, e) {
  if (t === "input" || t === "change") return wc(e);
}
function Jw(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var sn = typeof Object.is == "function" ? Object.is : Jw;
function Ao(t, e) {
  if (sn(t, e)) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  var n = Object.keys(t),
    i = Object.keys(e);
  if (n.length !== i.length) return !1;
  for (i = 0; i < n.length; i++) {
    var r = n[i];
    if (!dd.call(e, r) || !sn(t[r], e[r])) return !1;
  }
  return !0;
}
function u0(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function d0(t, e) {
  var n = u0(t);
  t = 0;
  for (var i; n; ) {
    if (n.nodeType === 3) {
      if (((i = t + n.textContent.length), t <= e && i >= e))
        return { node: n, offset: e - t };
      t = i;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = u0(n);
  }
}
function Ny(t, e) {
  return t && e
    ? t === e
      ? !0
      : t && t.nodeType === 3
      ? !1
      : e && e.nodeType === 3
      ? Ny(t, e.parentNode)
      : "contains" in t
      ? t.contains(e)
      : t.compareDocumentPosition
      ? !!(t.compareDocumentPosition(e) & 16)
      : !1
    : !1;
}
function Ay() {
  for (var t = window, e = El(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = El(t.document);
  }
  return e;
}
function oh(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return (
    e &&
    ((e === "input" &&
      (t.type === "text" ||
        t.type === "search" ||
        t.type === "tel" ||
        t.type === "url" ||
        t.type === "password")) ||
      e === "textarea" ||
      t.contentEditable === "true")
  );
}
function Zw(t) {
  var e = Ay(),
    n = t.focusedElem,
    i = t.selectionRange;
  if (
    e !== n &&
    n &&
    n.ownerDocument &&
    Ny(n.ownerDocument.documentElement, n)
  ) {
    if (i !== null && oh(n)) {
      if (
        ((e = i.start),
        (t = i.end),
        t === void 0 && (t = e),
        "selectionStart" in n)
      )
        (n.selectionStart = e), (n.selectionEnd = Math.min(t, n.value.length));
      else if (
        ((t = ((e = n.ownerDocument || document) && e.defaultView) || window),
        t.getSelection)
      ) {
        t = t.getSelection();
        var r = n.textContent.length,
          s = Math.min(i.start, r);
        (i = i.end === void 0 ? s : Math.min(i.end, r)),
          !t.extend && s > i && ((r = i), (i = s), (s = r)),
          (r = d0(n, s));
        var o = d0(n, i);
        r &&
          o &&
          (t.rangeCount !== 1 ||
            t.anchorNode !== r.node ||
            t.anchorOffset !== r.offset ||
            t.focusNode !== o.node ||
            t.focusOffset !== o.offset) &&
          ((e = e.createRange()),
          e.setStart(r.node, r.offset),
          t.removeAllRanges(),
          s > i
            ? (t.addRange(e), t.extend(o.node, o.offset))
            : (e.setEnd(o.node, o.offset), t.addRange(e)));
      }
    }
    for (e = [], t = n; (t = t.parentNode); )
      t.nodeType === 1 &&
        e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++)
      (t = e[n]),
        (t.element.scrollLeft = t.left),
        (t.element.scrollTop = t.top);
  }
}
var e3 = Mn && "documentMode" in document && 11 >= document.documentMode,
  Nr = null,
  Ad = null,
  ao = null,
  Pd = !1;
function f0(t, e, n) {
  var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Pd ||
    Nr == null ||
    Nr !== El(i) ||
    ((i = Nr),
    "selectionStart" in i && oh(i)
      ? (i = { start: i.selectionStart, end: i.selectionEnd })
      : ((i = (
          (i.ownerDocument && i.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (i = {
          anchorNode: i.anchorNode,
          anchorOffset: i.anchorOffset,
          focusNode: i.focusNode,
          focusOffset: i.focusOffset,
        })),
    (ao && Ao(ao, i)) ||
      ((ao = i),
      (i = Al(Ad, "onSelect")),
      0 < i.length &&
        ((e = new ih("onSelect", "select", null, e, n)),
        t.push({ event: e, listeners: i }),
        (e.target = Nr))));
}
function Sa(t, e) {
  var n = {};
  return (
    (n[t.toLowerCase()] = e.toLowerCase()),
    (n["Webkit" + t] = "webkit" + e),
    (n["Moz" + t] = "moz" + e),
    n
  );
}
var Ar = {
    animationend: Sa("Animation", "AnimationEnd"),
    animationiteration: Sa("Animation", "AnimationIteration"),
    animationstart: Sa("Animation", "AnimationStart"),
    transitionend: Sa("Transition", "TransitionEnd"),
  },
  hu = {},
  Py = {};
Mn &&
  ((Py = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ar.animationend.animation,
    delete Ar.animationiteration.animation,
    delete Ar.animationstart.animation),
  "TransitionEvent" in window || delete Ar.transitionend.transition);
function Ec(t) {
  if (hu[t]) return hu[t];
  if (!Ar[t]) return t;
  var e = Ar[t],
    n;
  for (n in e) if (e.hasOwnProperty(n) && n in Py) return (hu[t] = e[n]);
  return t;
}
var Ly = Ec("animationend"),
  jy = Ec("animationiteration"),
  Dy = Ec("animationstart"),
  Ry = Ec("transitionend"),
  My = new Map(),
  h0 =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Ci(t, e) {
  My.set(t, e), lr(e, [t]);
}
for (var pu = 0; pu < h0.length; pu++) {
  var gu = h0[pu],
    t3 = gu.toLowerCase(),
    n3 = gu[0].toUpperCase() + gu.slice(1);
  Ci(t3, "on" + n3);
}
Ci(Ly, "onAnimationEnd");
Ci(jy, "onAnimationIteration");
Ci(Dy, "onAnimationStart");
Ci("dblclick", "onDoubleClick");
Ci("focusin", "onFocus");
Ci("focusout", "onBlur");
Ci(Ry, "onTransitionEnd");
qr("onMouseEnter", ["mouseout", "mouseover"]);
qr("onMouseLeave", ["mouseout", "mouseover"]);
qr("onPointerEnter", ["pointerout", "pointerover"]);
qr("onPointerLeave", ["pointerout", "pointerover"]);
lr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
lr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
lr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
lr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
lr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
lr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Xs =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  i3 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xs));
function p0(t, e, n) {
  var i = t.type || "unknown-event";
  (t.currentTarget = n), tw(i, e, void 0, t), (t.currentTarget = null);
}
function Iy(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var i = t[n],
      r = i.event;
    i = i.listeners;
    e: {
      var s = void 0;
      if (e)
        for (var o = i.length - 1; 0 <= o; o--) {
          var a = i[o],
            l = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), l !== s && r.isPropagationStopped())) break e;
          p0(r, a, c), (s = l);
        }
      else
        for (o = 0; o < i.length; o++) {
          if (
            ((a = i[o]),
            (l = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            l !== s && r.isPropagationStopped())
          )
            break e;
          p0(r, a, c), (s = l);
        }
    }
  }
  if (Cl) throw ((t = kd), (Cl = !1), (kd = null), t);
}
function pe(t, e) {
  var n = e[Md];
  n === void 0 && (n = e[Md] = new Set());
  var i = t + "__bubble";
  n.has(i) || ($y(e, t, 2, !1), n.add(i));
}
function mu(t, e, n) {
  var i = 0;
  e && (i |= 4), $y(n, t, i, e);
}
var Ca = "_reactListening" + Math.random().toString(36).slice(2);
function Po(t) {
  if (!t[Ca]) {
    (t[Ca] = !0),
      U1.forEach(function (n) {
        n !== "selectionchange" && (i3.has(n) || mu(n, !1, t), mu(n, !0, t));
      });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[Ca] || ((e[Ca] = !0), mu("selectionchange", !1, e));
  }
}
function $y(t, e, n, i) {
  switch (by(e)) {
    case 1:
      var r = yw;
      break;
    case 4:
      r = vw;
      break;
    default:
      r = th;
  }
  (n = r.bind(null, e, n, t)),
    (r = void 0),
    !Cd ||
      (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
      (r = !0),
    i
      ? r !== void 0
        ? t.addEventListener(e, n, { capture: !0, passive: r })
        : t.addEventListener(e, n, !0)
      : r !== void 0
      ? t.addEventListener(e, n, { passive: r })
      : t.addEventListener(e, n, !1);
}
function yu(t, e, n, i, r) {
  var s = i;
  if (!(e & 1) && !(e & 2) && i !== null)
    e: for (;;) {
      if (i === null) return;
      var o = i.tag;
      if (o === 3 || o === 4) {
        var a = i.stateNode.containerInfo;
        if (a === r || (a.nodeType === 8 && a.parentNode === r)) break;
        if (o === 4)
          for (o = i.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === r || (l.nodeType === 8 && l.parentNode === r))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = Bi(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            i = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      i = i.return;
    }
  ay(function () {
    var c = s,
      u = Qf(n),
      d = [];
    e: {
      var h = My.get(t);
      if (h !== void 0) {
        var p = ih,
          g = t;
        switch (t) {
          case "keypress":
            if (al(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = jw;
            break;
          case "focusin":
            (g = "focus"), (p = uu);
            break;
          case "focusout":
            (g = "blur"), (p = uu);
            break;
          case "beforeblur":
          case "afterblur":
            p = uu;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = n0;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = bw;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = Mw;
            break;
          case Ly:
          case jy:
          case Dy:
            p = Sw;
            break;
          case Ry:
            p = $w;
            break;
          case "scroll":
            p = xw;
            break;
          case "wheel":
            p = Bw;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = kw;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = r0;
        }
        var y = (e & 4) !== 0,
          v = !y && t === "scroll",
          m = y ? (h !== null ? h + "Capture" : null) : h;
        y = [];
        for (var x = c, _; x !== null; ) {
          _ = x;
          var w = _.stateNode;
          if (
            (_.tag === 5 &&
              w !== null &&
              ((_ = w),
              m !== null && ((w = Co(x, m)), w != null && y.push(Lo(x, w, _)))),
            v)
          )
            break;
          x = x.return;
        }
        0 < y.length &&
          ((h = new p(h, g, null, n, u)), d.push({ event: h, listeners: y }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (
          ((h = t === "mouseover" || t === "pointerover"),
          (p = t === "mouseout" || t === "pointerout"),
          h &&
            n !== Ed &&
            (g = n.relatedTarget || n.fromElement) &&
            (Bi(g) || g[In]))
        )
          break e;
        if (
          (p || h) &&
          ((h =
            u.window === u
              ? u
              : (h = u.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          p
            ? ((g = n.relatedTarget || n.toElement),
              (p = c),
              (g = g ? Bi(g) : null),
              g !== null &&
                ((v = cr(g)), g !== v || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((p = null), (g = c)),
          p !== g)
        ) {
          if (
            ((y = n0),
            (w = "onMouseLeave"),
            (m = "onMouseEnter"),
            (x = "mouse"),
            (t === "pointerout" || t === "pointerover") &&
              ((y = r0),
              (w = "onPointerLeave"),
              (m = "onPointerEnter"),
              (x = "pointer")),
            (v = p == null ? h : Pr(p)),
            (_ = g == null ? h : Pr(g)),
            (h = new y(w, x + "leave", p, n, u)),
            (h.target = v),
            (h.relatedTarget = _),
            (w = null),
            Bi(u) === c &&
              ((y = new y(m, x + "enter", g, n, u)),
              (y.target = _),
              (y.relatedTarget = v),
              (w = y)),
            (v = w),
            p && g)
          )
            t: {
              for (y = p, m = g, x = 0, _ = y; _; _ = yr(_)) x++;
              for (_ = 0, w = m; w; w = yr(w)) _++;
              for (; 0 < x - _; ) (y = yr(y)), x--;
              for (; 0 < _ - x; ) (m = yr(m)), _--;
              for (; x--; ) {
                if (y === m || (m !== null && y === m.alternate)) break t;
                (y = yr(y)), (m = yr(m));
              }
              y = null;
            }
          else y = null;
          p !== null && g0(d, h, p, y, !1),
            g !== null && v !== null && g0(d, v, g, y, !0);
        }
      }
      e: {
        if (
          ((h = c ? Pr(c) : window),
          (p = h.nodeName && h.nodeName.toLowerCase()),
          p === "select" || (p === "input" && h.type === "file"))
        )
          var E = Kw;
        else if (a0(h))
          if (Oy) E = Qw;
          else {
            E = qw;
            var S = Gw;
          }
        else
          (p = h.nodeName) &&
            p.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (E = Xw);
        if (E && (E = E(t, c))) {
          ky(d, E, n, u);
          break e;
        }
        S && S(t, h, c),
          t === "focusout" &&
            (S = h._wrapperState) &&
            S.controlled &&
            h.type === "number" &&
            vd(h, "number", h.value);
      }
      switch (((S = c ? Pr(c) : window), t)) {
        case "focusin":
          (a0(S) || S.contentEditable === "true") &&
            ((Nr = S), (Ad = c), (ao = null));
          break;
        case "focusout":
          ao = Ad = Nr = null;
          break;
        case "mousedown":
          Pd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Pd = !1), f0(d, n, u);
          break;
        case "selectionchange":
          if (e3) break;
        case "keydown":
        case "keyup":
          f0(d, n, u);
      }
      var C;
      if (sh)
        e: {
          switch (t) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        Tr
          ? Sy(t, n) && (k = "onCompositionEnd")
          : t === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      k &&
        (Ey &&
          n.locale !== "ko" &&
          (Tr || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && Tr && (C = wy())
            : ((ri = u),
              (nh = "value" in ri ? ri.value : ri.textContent),
              (Tr = !0))),
        (S = Al(c, k)),
        0 < S.length &&
          ((k = new i0(k, t, null, n, u)),
          d.push({ event: k, listeners: S }),
          C ? (k.data = C) : ((C = Cy(n)), C !== null && (k.data = C)))),
        (C = Ww ? Hw(t, n) : Vw(t, n)) &&
          ((c = Al(c, "onBeforeInput")),
          0 < c.length &&
            ((u = new i0("onBeforeInput", "beforeinput", null, n, u)),
            d.push({ event: u, listeners: c }),
            (u.data = C)));
    }
    Iy(d, e);
  });
}
function Lo(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function Al(t, e) {
  for (var n = e + "Capture", i = []; t !== null; ) {
    var r = t,
      s = r.stateNode;
    r.tag === 5 &&
      s !== null &&
      ((r = s),
      (s = Co(t, n)),
      s != null && i.unshift(Lo(t, s, r)),
      (s = Co(t, e)),
      s != null && i.push(Lo(t, s, r))),
      (t = t.return);
  }
  return i;
}
function yr(t) {
  if (t === null) return null;
  do t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function g0(t, e, n, i, r) {
  for (var s = e._reactName, o = []; n !== null && n !== i; ) {
    var a = n,
      l = a.alternate,
      c = a.stateNode;
    if (l !== null && l === i) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      r
        ? ((l = Co(n, s)), l != null && o.unshift(Lo(n, l, a)))
        : r || ((l = Co(n, s)), l != null && o.push(Lo(n, l, a)))),
      (n = n.return);
  }
  o.length !== 0 && t.push({ event: e, listeners: o });
}
var r3 = /\r\n?/g,
  s3 = /\u0000|\uFFFD/g;
function m0(t) {
  return (typeof t == "string" ? t : "" + t)
    .replace(
      r3,
      `
`,
    )
    .replace(s3, "");
}
function ka(t, e, n) {
  if (((e = m0(e)), m0(t) !== e && n)) throw Error(I(425));
}
function Pl() {}
var Ld = null,
  jd = null;
function Dd(t, e) {
  return (
    t === "textarea" ||
    t === "noscript" ||
    typeof e.children == "string" ||
    typeof e.children == "number" ||
    (typeof e.dangerouslySetInnerHTML == "object" &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var Rd = typeof setTimeout == "function" ? setTimeout : void 0,
  o3 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  y0 = typeof Promise == "function" ? Promise : void 0,
  a3 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof y0 < "u"
      ? function (t) {
          return y0.resolve(null).then(t).catch(l3);
        }
      : Rd;
function l3(t) {
  setTimeout(function () {
    throw t;
  });
}
function vu(t, e) {
  var n = e,
    i = 0;
  do {
    var r = n.nextSibling;
    if ((t.removeChild(n), r && r.nodeType === 8))
      if (((n = r.data), n === "/$")) {
        if (i === 0) {
          t.removeChild(r), To(e);
          return;
        }
        i--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || i++;
    n = r;
  } while (n);
  To(e);
}
function di(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (((e = t.data), e === "$" || e === "$!" || e === "$?")) break;
      if (e === "/$") return null;
    }
  }
  return t;
}
function v0(t) {
  t = t.previousSibling;
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var n = t.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (e === 0) return t;
        e--;
      } else n === "/$" && e++;
    }
    t = t.previousSibling;
  }
  return null;
}
var vs = Math.random().toString(36).slice(2),
  pn = "__reactFiber$" + vs,
  jo = "__reactProps$" + vs,
  In = "__reactContainer$" + vs,
  Md = "__reactEvents$" + vs,
  c3 = "__reactListeners$" + vs,
  u3 = "__reactHandles$" + vs;
function Bi(t) {
  var e = t[pn];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if ((e = n[In] || n[pn])) {
      if (
        ((n = e.alternate),
        e.child !== null || (n !== null && n.child !== null))
      )
        for (t = v0(t); t !== null; ) {
          if ((n = t[pn])) return n;
          t = v0(t);
        }
      return e;
    }
    (t = n), (n = t.parentNode);
  }
  return null;
}
function ta(t) {
  return (
    (t = t[pn] || t[In]),
    !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
  );
}
function Pr(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(I(33));
}
function Sc(t) {
  return t[jo] || null;
}
var Id = [],
  Lr = -1;
function ki(t) {
  return { current: t };
}
function me(t) {
  0 > Lr || ((t.current = Id[Lr]), (Id[Lr] = null), Lr--);
}
function fe(t, e) {
  Lr++, (Id[Lr] = t.current), (t.current = e);
}
var xi = {},
  tt = ki(xi),
  yt = ki(!1),
  Zi = xi;
function Xr(t, e) {
  var n = t.type.contextTypes;
  if (!n) return xi;
  var i = t.stateNode;
  if (i && i.__reactInternalMemoizedUnmaskedChildContext === e)
    return i.__reactInternalMemoizedMaskedChildContext;
  var r = {},
    s;
  for (s in n) r[s] = e[s];
  return (
    i &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = e),
      (t.__reactInternalMemoizedMaskedChildContext = r)),
    r
  );
}
function vt(t) {
  return (t = t.childContextTypes), t != null;
}
function Ll() {
  me(yt), me(tt);
}
function x0(t, e, n) {
  if (tt.current !== xi) throw Error(I(168));
  fe(tt, e), fe(yt, n);
}
function Fy(t, e, n) {
  var i = t.stateNode;
  if (((e = e.childContextTypes), typeof i.getChildContext != "function"))
    return n;
  i = i.getChildContext();
  for (var r in i) if (!(r in e)) throw Error(I(108, Gb(t) || "Unknown", r));
  return be({}, n, i);
}
function jl(t) {
  return (
    (t =
      ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || xi),
    (Zi = tt.current),
    fe(tt, t),
    fe(yt, yt.current),
    !0
  );
}
function _0(t, e, n) {
  var i = t.stateNode;
  if (!i) throw Error(I(169));
  n
    ? ((t = Fy(t, e, Zi)),
      (i.__reactInternalMemoizedMergedChildContext = t),
      me(yt),
      me(tt),
      fe(tt, t))
    : me(yt),
    fe(yt, n);
}
var kn = null,
  Cc = !1,
  xu = !1;
function By(t) {
  kn === null ? (kn = [t]) : kn.push(t);
}
function d3(t) {
  (Cc = !0), By(t);
}
function Oi() {
  if (!xu && kn !== null) {
    xu = !0;
    var t = 0,
      e = de;
    try {
      var n = kn;
      for (de = 1; t < n.length; t++) {
        var i = n[t];
        do i = i(!0);
        while (i !== null);
      }
      (kn = null), (Cc = !1);
    } catch (r) {
      throw (kn !== null && (kn = kn.slice(t + 1)), dy(Jf, Oi), r);
    } finally {
      (de = e), (xu = !1);
    }
  }
  return null;
}
var jr = [],
  Dr = 0,
  Dl = null,
  Rl = 0,
  Rt = [],
  Mt = 0,
  er = null,
  Nn = 1,
  An = "";
function Ri(t, e) {
  (jr[Dr++] = Rl), (jr[Dr++] = Dl), (Dl = t), (Rl = e);
}
function zy(t, e, n) {
  (Rt[Mt++] = Nn), (Rt[Mt++] = An), (Rt[Mt++] = er), (er = t);
  var i = Nn;
  t = An;
  var r = 32 - tn(i) - 1;
  (i &= ~(1 << r)), (n += 1);
  var s = 32 - tn(e) + r;
  if (30 < s) {
    var o = r - (r % 5);
    (s = (i & ((1 << o) - 1)).toString(32)),
      (i >>= o),
      (r -= o),
      (Nn = (1 << (32 - tn(e) + r)) | (n << r) | i),
      (An = s + t);
  } else (Nn = (1 << s) | (n << r) | i), (An = t);
}
function ah(t) {
  t.return !== null && (Ri(t, 1), zy(t, 1, 0));
}
function lh(t) {
  for (; t === Dl; )
    (Dl = jr[--Dr]), (jr[Dr] = null), (Rl = jr[--Dr]), (jr[Dr] = null);
  for (; t === er; )
    (er = Rt[--Mt]),
      (Rt[Mt] = null),
      (An = Rt[--Mt]),
      (Rt[Mt] = null),
      (Nn = Rt[--Mt]),
      (Rt[Mt] = null);
}
var kt = null,
  Ct = null,
  ye = !1,
  Jt = null;
function Wy(t, e) {
  var n = It(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = e),
    (n.return = t),
    (e = t.deletions),
    e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n);
}
function b0(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return (
        (e =
          e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((t.stateNode = e), (kt = t), (Ct = di(e.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (e = t.pendingProps === "" || e.nodeType !== 3 ? null : e),
        e !== null ? ((t.stateNode = e), (kt = t), (Ct = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((n = er !== null ? { id: Nn, overflow: An } : null),
            (t.memoizedState = {
              dehydrated: e,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = It(18, null, null, 0)),
            (n.stateNode = e),
            (n.return = t),
            (t.child = n),
            (kt = t),
            (Ct = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function $d(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function Fd(t) {
  if (ye) {
    var e = Ct;
    if (e) {
      var n = e;
      if (!b0(t, e)) {
        if ($d(t)) throw Error(I(418));
        e = di(n.nextSibling);
        var i = kt;
        e && b0(t, e)
          ? Wy(i, n)
          : ((t.flags = (t.flags & -4097) | 2), (ye = !1), (kt = t));
      }
    } else {
      if ($d(t)) throw Error(I(418));
      (t.flags = (t.flags & -4097) | 2), (ye = !1), (kt = t);
    }
  }
}
function w0(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
    t = t.return;
  kt = t;
}
function Oa(t) {
  if (t !== kt) return !1;
  if (!ye) return w0(t), (ye = !0), !1;
  var e;
  if (
    ((e = t.tag !== 3) &&
      !(e = t.tag !== 5) &&
      ((e = t.type),
      (e = e !== "head" && e !== "body" && !Dd(t.type, t.memoizedProps))),
    e && (e = Ct))
  ) {
    if ($d(t)) throw (Hy(), Error(I(418)));
    for (; e; ) Wy(t, e), (e = di(e.nextSibling));
  }
  if ((w0(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
      throw Error(I(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$") {
            if (e === 0) {
              Ct = di(t.nextSibling);
              break e;
            }
            e--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
        }
        t = t.nextSibling;
      }
      Ct = null;
    }
  } else Ct = kt ? di(t.stateNode.nextSibling) : null;
  return !0;
}
function Hy() {
  for (var t = Ct; t; ) t = di(t.nextSibling);
}
function Qr() {
  (Ct = kt = null), (ye = !1);
}
function ch(t) {
  Jt === null ? (Jt = [t]) : Jt.push(t);
}
var f3 = Wn.ReactCurrentBatchConfig;
function Xt(t, e) {
  if (t && t.defaultProps) {
    (e = be({}, e)), (t = t.defaultProps);
    for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
var Ml = ki(null),
  Il = null,
  Rr = null,
  uh = null;
function dh() {
  uh = Rr = Il = null;
}
function fh(t) {
  var e = Ml.current;
  me(Ml), (t._currentValue = e);
}
function Bd(t, e, n) {
  for (; t !== null; ) {
    var i = t.alternate;
    if (
      ((t.childLanes & e) !== e
        ? ((t.childLanes |= e), i !== null && (i.childLanes |= e))
        : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e),
      t === n)
    )
      break;
    t = t.return;
  }
}
function Ur(t, e) {
  (Il = t),
    (uh = Rr = null),
    (t = t.dependencies),
    t !== null &&
      t.firstContext !== null &&
      (t.lanes & e && (mt = !0), (t.firstContext = null));
}
function Wt(t) {
  var e = t._currentValue;
  if (uh !== t)
    if (((t = { context: t, memoizedValue: e, next: null }), Rr === null)) {
      if (Il === null) throw Error(I(308));
      (Rr = t), (Il.dependencies = { lanes: 0, firstContext: t });
    } else Rr = Rr.next = t;
  return e;
}
var zi = null;
function hh(t) {
  zi === null ? (zi = [t]) : zi.push(t);
}
function Vy(t, e, n, i) {
  var r = e.interleaved;
  return (
    r === null ? ((n.next = n), hh(e)) : ((n.next = r.next), (r.next = n)),
    (e.interleaved = n),
    $n(t, i)
  );
}
function $n(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
    (t.childLanes |= e),
      (n = t.alternate),
      n !== null && (n.childLanes |= e),
      (n = t),
      (t = t.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Jn = !1;
function ph(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Uy(t, e) {
  (t = t.updateQueue),
    e.updateQueue === t &&
      (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects,
      });
}
function Pn(t, e) {
  return {
    eventTime: t,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function fi(t, e, n) {
  var i = t.updateQueue;
  if (i === null) return null;
  if (((i = i.shared), oe & 2)) {
    var r = i.pending;
    return (
      r === null ? (e.next = e) : ((e.next = r.next), (r.next = e)),
      (i.pending = e),
      $n(t, n)
    );
  }
  return (
    (r = i.interleaved),
    r === null ? ((e.next = e), hh(i)) : ((e.next = r.next), (r.next = e)),
    (i.interleaved = e),
    $n(t, n)
  );
}
function ll(t, e, n) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))
  ) {
    var i = e.lanes;
    (i &= t.pendingLanes), (n |= i), (e.lanes = n), Zf(t, n);
  }
}
function E0(t, e) {
  var n = t.updateQueue,
    i = t.alternate;
  if (i !== null && ((i = i.updateQueue), n === i)) {
    var r = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (r = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (r = s = e) : (s = s.next = e);
    } else r = s = e;
    (n = {
      baseState: i.baseState,
      firstBaseUpdate: r,
      lastBaseUpdate: s,
      shared: i.shared,
      effects: i.effects,
    }),
      (t.updateQueue = n);
    return;
  }
  (t = n.lastBaseUpdate),
    t === null ? (n.firstBaseUpdate = e) : (t.next = e),
    (n.lastBaseUpdate = e);
}
function $l(t, e, n, i) {
  var r = t.updateQueue;
  Jn = !1;
  var s = r.firstBaseUpdate,
    o = r.lastBaseUpdate,
    a = r.shared.pending;
  if (a !== null) {
    r.shared.pending = null;
    var l = a,
      c = l.next;
    (l.next = null), o === null ? (s = c) : (o.next = c), (o = l);
    var u = t.alternate;
    u !== null &&
      ((u = u.updateQueue),
      (a = u.lastBaseUpdate),
      a !== o &&
        (a === null ? (u.firstBaseUpdate = c) : (a.next = c),
        (u.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var d = r.baseState;
    (o = 0), (u = c = l = null), (a = s);
    do {
      var h = a.lane,
        p = a.eventTime;
      if ((i & h) === h) {
        u !== null &&
          (u = u.next =
            {
              eventTime: p,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var g = t,
            y = a;
          switch (((h = e), (p = n), y.tag)) {
            case 1:
              if (((g = y.payload), typeof g == "function")) {
                d = g.call(p, d, h);
                break e;
              }
              d = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = y.payload),
                (h = typeof g == "function" ? g.call(p, d, h) : g),
                h == null)
              )
                break e;
              d = be({}, d, h);
              break e;
            case 2:
              Jn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((t.flags |= 64),
          (h = r.effects),
          h === null ? (r.effects = [a]) : h.push(a));
      } else
        (p = {
          eventTime: p,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          u === null ? ((c = u = p), (l = d)) : (u = u.next = p),
          (o |= h);
      if (((a = a.next), a === null)) {
        if (((a = r.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (r.lastBaseUpdate = h),
          (r.shared.pending = null);
      }
    } while (!0);
    if (
      (u === null && (l = d),
      (r.baseState = l),
      (r.firstBaseUpdate = c),
      (r.lastBaseUpdate = u),
      (e = r.shared.interleaved),
      e !== null)
    ) {
      r = e;
      do (o |= r.lane), (r = r.next);
      while (r !== e);
    } else s === null && (r.shared.lanes = 0);
    (nr |= o), (t.lanes = o), (t.memoizedState = d);
  }
}
function S0(t, e, n) {
  if (((t = e.effects), (e.effects = null), t !== null))
    for (e = 0; e < t.length; e++) {
      var i = t[e],
        r = i.callback;
      if (r !== null) {
        if (((i.callback = null), (i = n), typeof r != "function"))
          throw Error(I(191, r));
        r.call(i);
      }
    }
}
var Yy = new V1.Component().refs;
function zd(t, e, n, i) {
  (e = t.memoizedState),
    (n = n(i, e)),
    (n = n == null ? e : be({}, e, n)),
    (t.memoizedState = n),
    t.lanes === 0 && (t.updateQueue.baseState = n);
}
var kc = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? cr(t) === t : !1;
  },
  enqueueSetState: function (t, e, n) {
    t = t._reactInternals;
    var i = at(),
      r = pi(t),
      s = Pn(i, r);
    (s.payload = e),
      n != null && (s.callback = n),
      (e = fi(t, s, r)),
      e !== null && (nn(e, t, r, i), ll(e, t, r));
  },
  enqueueReplaceState: function (t, e, n) {
    t = t._reactInternals;
    var i = at(),
      r = pi(t),
      s = Pn(i, r);
    (s.tag = 1),
      (s.payload = e),
      n != null && (s.callback = n),
      (e = fi(t, s, r)),
      e !== null && (nn(e, t, r, i), ll(e, t, r));
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals;
    var n = at(),
      i = pi(t),
      r = Pn(n, i);
    (r.tag = 2),
      e != null && (r.callback = e),
      (e = fi(t, r, i)),
      e !== null && (nn(e, t, i, n), ll(e, t, i));
  },
};
function C0(t, e, n, i, r, s, o) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == "function"
      ? t.shouldComponentUpdate(i, s, o)
      : e.prototype && e.prototype.isPureReactComponent
      ? !Ao(n, i) || !Ao(r, s)
      : !0
  );
}
function Ky(t, e, n) {
  var i = !1,
    r = xi,
    s = e.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Wt(s))
      : ((r = vt(e) ? Zi : tt.current),
        (i = e.contextTypes),
        (s = (i = i != null) ? Xr(t, r) : xi)),
    (e = new e(n, s)),
    (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = kc),
    (t.stateNode = e),
    (e._reactInternals = t),
    i &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = r),
      (t.__reactInternalMemoizedMaskedChildContext = s)),
    e
  );
}
function k0(t, e, n, i) {
  (t = e.state),
    typeof e.componentWillReceiveProps == "function" &&
      e.componentWillReceiveProps(n, i),
    typeof e.UNSAFE_componentWillReceiveProps == "function" &&
      e.UNSAFE_componentWillReceiveProps(n, i),
    e.state !== t && kc.enqueueReplaceState(e, e.state, null);
}
function Wd(t, e, n, i) {
  var r = t.stateNode;
  (r.props = n), (r.state = t.memoizedState), (r.refs = Yy), ph(t);
  var s = e.contextType;
  typeof s == "object" && s !== null
    ? (r.context = Wt(s))
    : ((s = vt(e) ? Zi : tt.current), (r.context = Xr(t, s))),
    (r.state = t.memoizedState),
    (s = e.getDerivedStateFromProps),
    typeof s == "function" && (zd(t, e, s, n), (r.state = t.memoizedState)),
    typeof e.getDerivedStateFromProps == "function" ||
      typeof r.getSnapshotBeforeUpdate == "function" ||
      (typeof r.UNSAFE_componentWillMount != "function" &&
        typeof r.componentWillMount != "function") ||
      ((e = r.state),
      typeof r.componentWillMount == "function" && r.componentWillMount(),
      typeof r.UNSAFE_componentWillMount == "function" &&
        r.UNSAFE_componentWillMount(),
      e !== r.state && kc.enqueueReplaceState(r, r.state, null),
      $l(t, n, r, i),
      (r.state = t.memoizedState)),
    typeof r.componentDidMount == "function" && (t.flags |= 4194308);
}
function Rs(t, e, n) {
  if (
    ((t = n.ref), t !== null && typeof t != "function" && typeof t != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(I(309));
        var i = n.stateNode;
      }
      if (!i) throw Error(I(147, t));
      var r = i,
        s = "" + t;
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == "function" &&
        e.ref._stringRef === s
        ? e.ref
        : ((e = function (o) {
            var a = r.refs;
            a === Yy && (a = r.refs = {}),
              o === null ? delete a[s] : (a[s] = o);
          }),
          (e._stringRef = s),
          e);
    }
    if (typeof t != "string") throw Error(I(284));
    if (!n._owner) throw Error(I(290, t));
  }
  return t;
}
function Ta(t, e) {
  throw (
    ((t = Object.prototype.toString.call(e)),
    Error(
      I(
        31,
        t === "[object Object]"
          ? "object with keys {" + Object.keys(e).join(", ") + "}"
          : t,
      ),
    ))
  );
}
function O0(t) {
  var e = t._init;
  return e(t._payload);
}
function Gy(t) {
  function e(m, x) {
    if (t) {
      var _ = m.deletions;
      _ === null ? ((m.deletions = [x]), (m.flags |= 16)) : _.push(x);
    }
  }
  function n(m, x) {
    if (!t) return null;
    for (; x !== null; ) e(m, x), (x = x.sibling);
    return null;
  }
  function i(m, x) {
    for (m = new Map(); x !== null; )
      x.key !== null ? m.set(x.key, x) : m.set(x.index, x), (x = x.sibling);
    return m;
  }
  function r(m, x) {
    return (m = gi(m, x)), (m.index = 0), (m.sibling = null), m;
  }
  function s(m, x, _) {
    return (
      (m.index = _),
      t
        ? ((_ = m.alternate),
          _ !== null
            ? ((_ = _.index), _ < x ? ((m.flags |= 2), x) : _)
            : ((m.flags |= 2), x))
        : ((m.flags |= 1048576), x)
    );
  }
  function o(m) {
    return t && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, x, _, w) {
    return x === null || x.tag !== 6
      ? ((x = ku(_, m.mode, w)), (x.return = m), x)
      : ((x = r(x, _)), (x.return = m), x);
  }
  function l(m, x, _, w) {
    var E = _.type;
    return E === Or
      ? u(m, x, _.props.children, w, _.key)
      : x !== null &&
        (x.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === Qn &&
            O0(E) === x.type))
      ? ((w = r(x, _.props)), (w.ref = Rs(m, x, _)), (w.return = m), w)
      : ((w = pl(_.type, _.key, _.props, null, m.mode, w)),
        (w.ref = Rs(m, x, _)),
        (w.return = m),
        w);
  }
  function c(m, x, _, w) {
    return x === null ||
      x.tag !== 4 ||
      x.stateNode.containerInfo !== _.containerInfo ||
      x.stateNode.implementation !== _.implementation
      ? ((x = Ou(_, m.mode, w)), (x.return = m), x)
      : ((x = r(x, _.children || [])), (x.return = m), x);
  }
  function u(m, x, _, w, E) {
    return x === null || x.tag !== 7
      ? ((x = qi(_, m.mode, w, E)), (x.return = m), x)
      : ((x = r(x, _)), (x.return = m), x);
  }
  function d(m, x, _) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (x = ku("" + x, m.mode, _)), (x.return = m), x;
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case ya:
          return (
            (_ = pl(x.type, x.key, x.props, null, m.mode, _)),
            (_.ref = Rs(m, null, x)),
            (_.return = m),
            _
          );
        case kr:
          return (x = Ou(x, m.mode, _)), (x.return = m), x;
        case Qn:
          var w = x._init;
          return d(m, w(x._payload), _);
      }
      if (Gs(x) || As(x))
        return (x = qi(x, m.mode, _, null)), (x.return = m), x;
      Ta(m, x);
    }
    return null;
  }
  function h(m, x, _, w) {
    var E = x !== null ? x.key : null;
    if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
      return E !== null ? null : a(m, x, "" + _, w);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case ya:
          return _.key === E ? l(m, x, _, w) : null;
        case kr:
          return _.key === E ? c(m, x, _, w) : null;
        case Qn:
          return (E = _._init), h(m, x, E(_._payload), w);
      }
      if (Gs(_) || As(_)) return E !== null ? null : u(m, x, _, w, null);
      Ta(m, _);
    }
    return null;
  }
  function p(m, x, _, w, E) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (m = m.get(_) || null), a(x, m, "" + w, E);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case ya:
          return (m = m.get(w.key === null ? _ : w.key) || null), l(x, m, w, E);
        case kr:
          return (m = m.get(w.key === null ? _ : w.key) || null), c(x, m, w, E);
        case Qn:
          var S = w._init;
          return p(m, x, _, S(w._payload), E);
      }
      if (Gs(w) || As(w)) return (m = m.get(_) || null), u(x, m, w, E, null);
      Ta(x, w);
    }
    return null;
  }
  function g(m, x, _, w) {
    for (
      var E = null, S = null, C = x, k = (x = 0), P = null;
      C !== null && k < _.length;
      k++
    ) {
      C.index > k ? ((P = C), (C = null)) : (P = C.sibling);
      var j = h(m, C, _[k], w);
      if (j === null) {
        C === null && (C = P);
        break;
      }
      t && C && j.alternate === null && e(m, C),
        (x = s(j, x, k)),
        S === null ? (E = j) : (S.sibling = j),
        (S = j),
        (C = P);
    }
    if (k === _.length) return n(m, C), ye && Ri(m, k), E;
    if (C === null) {
      for (; k < _.length; k++)
        (C = d(m, _[k], w)),
          C !== null &&
            ((x = s(C, x, k)), S === null ? (E = C) : (S.sibling = C), (S = C));
      return ye && Ri(m, k), E;
    }
    for (C = i(m, C); k < _.length; k++)
      (P = p(C, m, k, _[k], w)),
        P !== null &&
          (t && P.alternate !== null && C.delete(P.key === null ? k : P.key),
          (x = s(P, x, k)),
          S === null ? (E = P) : (S.sibling = P),
          (S = P));
    return (
      t &&
        C.forEach(function ($) {
          return e(m, $);
        }),
      ye && Ri(m, k),
      E
    );
  }
  function y(m, x, _, w) {
    var E = As(_);
    if (typeof E != "function") throw Error(I(150));
    if (((_ = E.call(_)), _ == null)) throw Error(I(151));
    for (
      var S = (E = null), C = x, k = (x = 0), P = null, j = _.next();
      C !== null && !j.done;
      k++, j = _.next()
    ) {
      C.index > k ? ((P = C), (C = null)) : (P = C.sibling);
      var $ = h(m, C, j.value, w);
      if ($ === null) {
        C === null && (C = P);
        break;
      }
      t && C && $.alternate === null && e(m, C),
        (x = s($, x, k)),
        S === null ? (E = $) : (S.sibling = $),
        (S = $),
        (C = P);
    }
    if (j.done) return n(m, C), ye && Ri(m, k), E;
    if (C === null) {
      for (; !j.done; k++, j = _.next())
        (j = d(m, j.value, w)),
          j !== null &&
            ((x = s(j, x, k)), S === null ? (E = j) : (S.sibling = j), (S = j));
      return ye && Ri(m, k), E;
    }
    for (C = i(m, C); !j.done; k++, j = _.next())
      (j = p(C, m, k, j.value, w)),
        j !== null &&
          (t && j.alternate !== null && C.delete(j.key === null ? k : j.key),
          (x = s(j, x, k)),
          S === null ? (E = j) : (S.sibling = j),
          (S = j));
    return (
      t &&
        C.forEach(function (A) {
          return e(m, A);
        }),
      ye && Ri(m, k),
      E
    );
  }
  function v(m, x, _, w) {
    if (
      (typeof _ == "object" &&
        _ !== null &&
        _.type === Or &&
        _.key === null &&
        (_ = _.props.children),
      typeof _ == "object" && _ !== null)
    ) {
      switch (_.$$typeof) {
        case ya:
          e: {
            for (var E = _.key, S = x; S !== null; ) {
              if (S.key === E) {
                if (((E = _.type), E === Or)) {
                  if (S.tag === 7) {
                    n(m, S.sibling),
                      (x = r(S, _.props.children)),
                      (x.return = m),
                      (m = x);
                    break e;
                  }
                } else if (
                  S.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Qn &&
                    O0(E) === S.type)
                ) {
                  n(m, S.sibling),
                    (x = r(S, _.props)),
                    (x.ref = Rs(m, S, _)),
                    (x.return = m),
                    (m = x);
                  break e;
                }
                n(m, S);
                break;
              } else e(m, S);
              S = S.sibling;
            }
            _.type === Or
              ? ((x = qi(_.props.children, m.mode, w, _.key)),
                (x.return = m),
                (m = x))
              : ((w = pl(_.type, _.key, _.props, null, m.mode, w)),
                (w.ref = Rs(m, x, _)),
                (w.return = m),
                (m = w));
          }
          return o(m);
        case kr:
          e: {
            for (S = _.key; x !== null; ) {
              if (x.key === S)
                if (
                  x.tag === 4 &&
                  x.stateNode.containerInfo === _.containerInfo &&
                  x.stateNode.implementation === _.implementation
                ) {
                  n(m, x.sibling),
                    (x = r(x, _.children || [])),
                    (x.return = m),
                    (m = x);
                  break e;
                } else {
                  n(m, x);
                  break;
                }
              else e(m, x);
              x = x.sibling;
            }
            (x = Ou(_, m.mode, w)), (x.return = m), (m = x);
          }
          return o(m);
        case Qn:
          return (S = _._init), v(m, x, S(_._payload), w);
      }
      if (Gs(_)) return g(m, x, _, w);
      if (As(_)) return y(m, x, _, w);
      Ta(m, _);
    }
    return (typeof _ == "string" && _ !== "") || typeof _ == "number"
      ? ((_ = "" + _),
        x !== null && x.tag === 6
          ? (n(m, x.sibling), (x = r(x, _)), (x.return = m), (m = x))
          : (n(m, x), (x = ku(_, m.mode, w)), (x.return = m), (m = x)),
        o(m))
      : n(m, x);
  }
  return v;
}
var Jr = Gy(!0),
  qy = Gy(!1),
  na = {},
  mn = ki(na),
  Do = ki(na),
  Ro = ki(na);
function Wi(t) {
  if (t === na) throw Error(I(174));
  return t;
}
function gh(t, e) {
  switch ((fe(Ro, e), fe(Do, t), fe(mn, na), (t = e.nodeType), t)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : _d(null, "");
      break;
    default:
      (t = t === 8 ? e.parentNode : e),
        (e = t.namespaceURI || null),
        (t = t.tagName),
        (e = _d(e, t));
  }
  me(mn), fe(mn, e);
}
function Zr() {
  me(mn), me(Do), me(Ro);
}
function Xy(t) {
  Wi(Ro.current);
  var e = Wi(mn.current),
    n = _d(e, t.type);
  e !== n && (fe(Do, t), fe(mn, n));
}
function mh(t) {
  Do.current === t && (me(mn), me(Do));
}
var xe = ki(0);
function Fl(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      (e.child.return = e), (e = e.child);
      continue;
    }
    if (e === t) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t) return null;
      e = e.return;
    }
    (e.sibling.return = e.return), (e = e.sibling);
  }
  return null;
}
var _u = [];
function yh() {
  for (var t = 0; t < _u.length; t++)
    _u[t]._workInProgressVersionPrimary = null;
  _u.length = 0;
}
var cl = Wn.ReactCurrentDispatcher,
  bu = Wn.ReactCurrentBatchConfig,
  tr = 0,
  _e = null,
  Le = null,
  Ie = null,
  Bl = !1,
  lo = !1,
  Mo = 0,
  h3 = 0;
function Ge() {
  throw Error(I(321));
}
function vh(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++)
    if (!sn(t[n], e[n])) return !1;
  return !0;
}
function xh(t, e, n, i, r, s) {
  if (
    ((tr = s),
    (_e = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (cl.current = t === null || t.memoizedState === null ? y3 : v3),
    (t = n(i, r)),
    lo)
  ) {
    s = 0;
    do {
      if (((lo = !1), (Mo = 0), 25 <= s)) throw Error(I(301));
      (s += 1),
        (Ie = Le = null),
        (e.updateQueue = null),
        (cl.current = x3),
        (t = n(i, r));
    } while (lo);
  }
  if (
    ((cl.current = zl),
    (e = Le !== null && Le.next !== null),
    (tr = 0),
    (Ie = Le = _e = null),
    (Bl = !1),
    e)
  )
    throw Error(I(300));
  return t;
}
function _h() {
  var t = Mo !== 0;
  return (Mo = 0), t;
}
function fn() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ie === null ? (_e.memoizedState = Ie = t) : (Ie = Ie.next = t), Ie;
}
function Ht() {
  if (Le === null) {
    var t = _e.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = Le.next;
  var e = Ie === null ? _e.memoizedState : Ie.next;
  if (e !== null) (Ie = e), (Le = t);
  else {
    if (t === null) throw Error(I(310));
    (Le = t),
      (t = {
        memoizedState: Le.memoizedState,
        baseState: Le.baseState,
        baseQueue: Le.baseQueue,
        queue: Le.queue,
        next: null,
      }),
      Ie === null ? (_e.memoizedState = Ie = t) : (Ie = Ie.next = t);
  }
  return Ie;
}
function Io(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function wu(t) {
  var e = Ht(),
    n = e.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = t;
  var i = Le,
    r = i.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (r !== null) {
      var o = r.next;
      (r.next = s.next), (s.next = o);
    }
    (i.baseQueue = r = s), (n.pending = null);
  }
  if (r !== null) {
    (s = r.next), (i = i.baseState);
    var a = (o = null),
      l = null,
      c = s;
    do {
      var u = c.lane;
      if ((tr & u) === u)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (i = c.hasEagerState ? c.eagerState : t(i, c.action));
      else {
        var d = {
          lane: u,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (o = i)) : (l = l.next = d),
          (_e.lanes |= u),
          (nr |= u);
      }
      c = c.next;
    } while (c !== null && c !== s);
    l === null ? (o = i) : (l.next = a),
      sn(i, e.memoizedState) || (mt = !0),
      (e.memoizedState = i),
      (e.baseState = o),
      (e.baseQueue = l),
      (n.lastRenderedState = i);
  }
  if (((t = n.interleaved), t !== null)) {
    r = t;
    do (s = r.lane), (_e.lanes |= s), (nr |= s), (r = r.next);
    while (r !== t);
  } else r === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function Eu(t) {
  var e = Ht(),
    n = e.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = t;
  var i = n.dispatch,
    r = n.pending,
    s = e.memoizedState;
  if (r !== null) {
    n.pending = null;
    var o = (r = r.next);
    do (s = t(s, o.action)), (o = o.next);
    while (o !== r);
    sn(s, e.memoizedState) || (mt = !0),
      (e.memoizedState = s),
      e.baseQueue === null && (e.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, i];
}
function Qy() {}
function Jy(t, e) {
  var n = _e,
    i = Ht(),
    r = e(),
    s = !sn(i.memoizedState, r);
  if (
    (s && ((i.memoizedState = r), (mt = !0)),
    (i = i.queue),
    bh(tv.bind(null, n, i, t), [t]),
    i.getSnapshot !== e || s || (Ie !== null && Ie.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      $o(9, ev.bind(null, n, i, r, e), void 0, null),
      Fe === null)
    )
      throw Error(I(349));
    tr & 30 || Zy(n, e, r);
  }
  return r;
}
function Zy(t, e, n) {
  (t.flags |= 16384),
    (t = { getSnapshot: e, value: n }),
    (e = _e.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (_e.updateQueue = e),
        (e.stores = [t]))
      : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
}
function ev(t, e, n, i) {
  (e.value = n), (e.getSnapshot = i), nv(e) && iv(t);
}
function tv(t, e, n) {
  return n(function () {
    nv(e) && iv(t);
  });
}
function nv(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !sn(t, n);
  } catch {
    return !0;
  }
}
function iv(t) {
  var e = $n(t, 1);
  e !== null && nn(e, t, 1, -1);
}
function T0(t) {
  var e = fn();
  return (
    typeof t == "function" && (t = t()),
    (e.memoizedState = e.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Io,
      lastRenderedState: t,
    }),
    (e.queue = t),
    (t = t.dispatch = m3.bind(null, _e, t)),
    [e.memoizedState, t]
  );
}
function $o(t, e, n, i) {
  return (
    (t = { tag: t, create: e, destroy: n, deps: i, next: null }),
    (e = _e.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (_e.updateQueue = e),
        (e.lastEffect = t.next = t))
      : ((n = e.lastEffect),
        n === null
          ? (e.lastEffect = t.next = t)
          : ((i = n.next), (n.next = t), (t.next = i), (e.lastEffect = t))),
    t
  );
}
function rv() {
  return Ht().memoizedState;
}
function ul(t, e, n, i) {
  var r = fn();
  (_e.flags |= t),
    (r.memoizedState = $o(1 | e, n, void 0, i === void 0 ? null : i));
}
function Oc(t, e, n, i) {
  var r = Ht();
  i = i === void 0 ? null : i;
  var s = void 0;
  if (Le !== null) {
    var o = Le.memoizedState;
    if (((s = o.destroy), i !== null && vh(i, o.deps))) {
      r.memoizedState = $o(e, n, s, i);
      return;
    }
  }
  (_e.flags |= t), (r.memoizedState = $o(1 | e, n, s, i));
}
function N0(t, e) {
  return ul(8390656, 8, t, e);
}
function bh(t, e) {
  return Oc(2048, 8, t, e);
}
function sv(t, e) {
  return Oc(4, 2, t, e);
}
function ov(t, e) {
  return Oc(4, 4, t, e);
}
function av(t, e) {
  if (typeof e == "function")
    return (
      (t = t()),
      e(t),
      function () {
        e(null);
      }
    );
  if (e != null)
    return (
      (t = t()),
      (e.current = t),
      function () {
        e.current = null;
      }
    );
}
function lv(t, e, n) {
  return (
    (n = n != null ? n.concat([t]) : null), Oc(4, 4, av.bind(null, e, t), n)
  );
}
function wh() {}
function cv(t, e) {
  var n = Ht();
  e = e === void 0 ? null : e;
  var i = n.memoizedState;
  return i !== null && e !== null && vh(e, i[1])
    ? i[0]
    : ((n.memoizedState = [t, e]), t);
}
function uv(t, e) {
  var n = Ht();
  e = e === void 0 ? null : e;
  var i = n.memoizedState;
  return i !== null && e !== null && vh(e, i[1])
    ? i[0]
    : ((t = t()), (n.memoizedState = [t, e]), t);
}
function dv(t, e, n) {
  return tr & 21
    ? (sn(n, e) || ((n = py()), (_e.lanes |= n), (nr |= n), (t.baseState = !0)),
      e)
    : (t.baseState && ((t.baseState = !1), (mt = !0)), (t.memoizedState = n));
}
function p3(t, e) {
  var n = de;
  (de = n !== 0 && 4 > n ? n : 4), t(!0);
  var i = bu.transition;
  bu.transition = {};
  try {
    t(!1), e();
  } finally {
    (de = n), (bu.transition = i);
  }
}
function fv() {
  return Ht().memoizedState;
}
function g3(t, e, n) {
  var i = pi(t);
  if (
    ((n = {
      lane: i,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    hv(t))
  )
    pv(e, n);
  else if (((n = Vy(t, e, n, i)), n !== null)) {
    var r = at();
    nn(n, t, i, r), gv(n, e, i);
  }
}
function m3(t, e, n) {
  var i = pi(t),
    r = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (hv(t)) pv(e, r);
  else {
    var s = t.alternate;
    if (
      t.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = e.lastRenderedReducer), s !== null)
    )
      try {
        var o = e.lastRenderedState,
          a = s(o, n);
        if (((r.hasEagerState = !0), (r.eagerState = a), sn(a, o))) {
          var l = e.interleaved;
          l === null
            ? ((r.next = r), hh(e))
            : ((r.next = l.next), (l.next = r)),
            (e.interleaved = r);
          return;
        }
      } catch {
      } finally {
      }
    (n = Vy(t, e, r, i)),
      n !== null && ((r = at()), nn(n, t, i, r), gv(n, e, i));
  }
}
function hv(t) {
  var e = t.alternate;
  return t === _e || (e !== null && e === _e);
}
function pv(t, e) {
  lo = Bl = !0;
  var n = t.pending;
  n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
    (t.pending = e);
}
function gv(t, e, n) {
  if (n & 4194240) {
    var i = e.lanes;
    (i &= t.pendingLanes), (n |= i), (e.lanes = n), Zf(t, n);
  }
}
var zl = {
    readContext: Wt,
    useCallback: Ge,
    useContext: Ge,
    useEffect: Ge,
    useImperativeHandle: Ge,
    useInsertionEffect: Ge,
    useLayoutEffect: Ge,
    useMemo: Ge,
    useReducer: Ge,
    useRef: Ge,
    useState: Ge,
    useDebugValue: Ge,
    useDeferredValue: Ge,
    useTransition: Ge,
    useMutableSource: Ge,
    useSyncExternalStore: Ge,
    useId: Ge,
    unstable_isNewReconciler: !1,
  },
  y3 = {
    readContext: Wt,
    useCallback: function (t, e) {
      return (fn().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: Wt,
    useEffect: N0,
    useImperativeHandle: function (t, e, n) {
      return (
        (n = n != null ? n.concat([t]) : null),
        ul(4194308, 4, av.bind(null, e, t), n)
      );
    },
    useLayoutEffect: function (t, e) {
      return ul(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      return ul(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var n = fn();
      return (
        (e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t
      );
    },
    useReducer: function (t, e, n) {
      var i = fn();
      return (
        (e = n !== void 0 ? n(e) : e),
        (i.memoizedState = i.baseState = e),
        (t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: e,
        }),
        (i.queue = t),
        (t = t.dispatch = g3.bind(null, _e, t)),
        [i.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = fn();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: T0,
    useDebugValue: wh,
    useDeferredValue: function (t) {
      return (fn().memoizedState = t);
    },
    useTransition: function () {
      var t = T0(!1),
        e = t[0];
      return (t = p3.bind(null, t[1])), (fn().memoizedState = t), [e, t];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, e, n) {
      var i = _e,
        r = fn();
      if (ye) {
        if (n === void 0) throw Error(I(407));
        n = n();
      } else {
        if (((n = e()), Fe === null)) throw Error(I(349));
        tr & 30 || Zy(i, e, n);
      }
      r.memoizedState = n;
      var s = { value: n, getSnapshot: e };
      return (
        (r.queue = s),
        N0(tv.bind(null, i, s, t), [t]),
        (i.flags |= 2048),
        $o(9, ev.bind(null, i, s, n, e), void 0, null),
        n
      );
    },
    useId: function () {
      var t = fn(),
        e = Fe.identifierPrefix;
      if (ye) {
        var n = An,
          i = Nn;
        (n = (i & ~(1 << (32 - tn(i) - 1))).toString(32) + n),
          (e = ":" + e + "R" + n),
          (n = Mo++),
          0 < n && (e += "H" + n.toString(32)),
          (e += ":");
      } else (n = h3++), (e = ":" + e + "r" + n.toString(32) + ":");
      return (t.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  v3 = {
    readContext: Wt,
    useCallback: cv,
    useContext: Wt,
    useEffect: bh,
    useImperativeHandle: lv,
    useInsertionEffect: sv,
    useLayoutEffect: ov,
    useMemo: uv,
    useReducer: wu,
    useRef: rv,
    useState: function () {
      return wu(Io);
    },
    useDebugValue: wh,
    useDeferredValue: function (t) {
      var e = Ht();
      return dv(e, Le.memoizedState, t);
    },
    useTransition: function () {
      var t = wu(Io)[0],
        e = Ht().memoizedState;
      return [t, e];
    },
    useMutableSource: Qy,
    useSyncExternalStore: Jy,
    useId: fv,
    unstable_isNewReconciler: !1,
  },
  x3 = {
    readContext: Wt,
    useCallback: cv,
    useContext: Wt,
    useEffect: bh,
    useImperativeHandle: lv,
    useInsertionEffect: sv,
    useLayoutEffect: ov,
    useMemo: uv,
    useReducer: Eu,
    useRef: rv,
    useState: function () {
      return Eu(Io);
    },
    useDebugValue: wh,
    useDeferredValue: function (t) {
      var e = Ht();
      return Le === null ? (e.memoizedState = t) : dv(e, Le.memoizedState, t);
    },
    useTransition: function () {
      var t = Eu(Io)[0],
        e = Ht().memoizedState;
      return [t, e];
    },
    useMutableSource: Qy,
    useSyncExternalStore: Jy,
    useId: fv,
    unstable_isNewReconciler: !1,
  };
function es(t, e) {
  try {
    var n = "",
      i = e;
    do (n += Kb(i)), (i = i.return);
    while (i);
    var r = n;
  } catch (s) {
    r =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: t, source: e, stack: r, digest: null };
}
function Su(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function Hd(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var _3 = typeof WeakMap == "function" ? WeakMap : Map;
function mv(t, e, n) {
  (n = Pn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var i = e.value;
  return (
    (n.callback = function () {
      Hl || ((Hl = !0), (Zd = i)), Hd(t, e);
    }),
    n
  );
}
function yv(t, e, n) {
  (n = Pn(-1, n)), (n.tag = 3);
  var i = t.type.getDerivedStateFromError;
  if (typeof i == "function") {
    var r = e.value;
    (n.payload = function () {
      return i(r);
    }),
      (n.callback = function () {
        Hd(t, e);
      });
  }
  var s = t.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        Hd(t, e),
          typeof i != "function" &&
            (hi === null ? (hi = new Set([this])) : hi.add(this));
        var o = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function A0(t, e, n) {
  var i = t.pingCache;
  if (i === null) {
    i = t.pingCache = new _3();
    var r = new Set();
    i.set(e, r);
  } else (r = i.get(e)), r === void 0 && ((r = new Set()), i.set(e, r));
  r.has(n) || (r.add(n), (t = D3.bind(null, t, e, n)), e.then(t, t));
}
function P0(t) {
  do {
    var e;
    if (
      ((e = t.tag === 13) &&
        ((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function L0(t, e, n, i, r) {
  return t.mode & 1
    ? ((t.flags |= 65536), (t.lanes = r), t)
    : (t === e
        ? (t.flags |= 65536)
        : ((t.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((e = Pn(-1, 1)), (e.tag = 2), fi(n, e, 1))),
          (n.lanes |= 1)),
      t);
}
var b3 = Wn.ReactCurrentOwner,
  mt = !1;
function rt(t, e, n, i) {
  e.child = t === null ? qy(e, null, n, i) : Jr(e, t.child, n, i);
}
function j0(t, e, n, i, r) {
  n = n.render;
  var s = e.ref;
  return (
    Ur(e, r),
    (i = xh(t, e, n, i, s, r)),
    (n = _h()),
    t !== null && !mt
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~r),
        Fn(t, e, r))
      : (ye && n && ah(e), (e.flags |= 1), rt(t, e, i, r), e.child)
  );
}
function D0(t, e, n, i, r) {
  if (t === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Ah(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((e.tag = 15), (e.type = s), vv(t, e, s, i, r))
      : ((t = pl(n.type, null, i, e, e.mode, r)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t));
  }
  if (((s = t.child), !(t.lanes & r))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ao), n(o, i) && t.ref === e.ref)
    )
      return Fn(t, e, r);
  }
  return (
    (e.flags |= 1),
    (t = gi(s, i)),
    (t.ref = e.ref),
    (t.return = e),
    (e.child = t)
  );
}
function vv(t, e, n, i, r) {
  if (t !== null) {
    var s = t.memoizedProps;
    if (Ao(s, i) && t.ref === e.ref)
      if (((mt = !1), (e.pendingProps = i = s), (t.lanes & r) !== 0))
        t.flags & 131072 && (mt = !0);
      else return (e.lanes = t.lanes), Fn(t, e, r);
  }
  return Vd(t, e, n, i, r);
}
function xv(t, e, n) {
  var i = e.pendingProps,
    r = i.children,
    s = t !== null ? t.memoizedState : null;
  if (i.mode === "hidden")
    if (!(e.mode & 1))
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        fe(Ir, Et),
        (Et |= n);
    else {
      if (!(n & 1073741824))
        return (
          (t = s !== null ? s.baseLanes | n : n),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: t,
            cachePool: null,
            transitions: null,
          }),
          (e.updateQueue = null),
          fe(Ir, Et),
          (Et |= t),
          null
        );
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (i = s !== null ? s.baseLanes : n),
        fe(Ir, Et),
        (Et |= i);
    }
  else
    s !== null ? ((i = s.baseLanes | n), (e.memoizedState = null)) : (i = n),
      fe(Ir, Et),
      (Et |= i);
  return rt(t, e, r, n), e.child;
}
function _v(t, e) {
  var n = e.ref;
  ((t === null && n !== null) || (t !== null && t.ref !== n)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function Vd(t, e, n, i, r) {
  var s = vt(n) ? Zi : tt.current;
  return (
    (s = Xr(e, s)),
    Ur(e, r),
    (n = xh(t, e, n, i, s, r)),
    (i = _h()),
    t !== null && !mt
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~r),
        Fn(t, e, r))
      : (ye && i && ah(e), (e.flags |= 1), rt(t, e, n, r), e.child)
  );
}
function R0(t, e, n, i, r) {
  if (vt(n)) {
    var s = !0;
    jl(e);
  } else s = !1;
  if ((Ur(e, r), e.stateNode === null))
    dl(t, e), Ky(e, n, i), Wd(e, n, i, r), (i = !0);
  else if (t === null) {
    var o = e.stateNode,
      a = e.memoizedProps;
    o.props = a;
    var l = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Wt(c))
      : ((c = vt(n) ? Zi : tt.current), (c = Xr(e, c)));
    var u = n.getDerivedStateFromProps,
      d =
        typeof u == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== i || l !== c) && k0(e, o, i, c)),
      (Jn = !1);
    var h = e.memoizedState;
    (o.state = h),
      $l(e, i, o, r),
      (l = e.memoizedState),
      a !== i || h !== l || yt.current || Jn
        ? (typeof u == "function" && (zd(e, n, u, i), (l = e.memoizedState)),
          (a = Jn || C0(e, n, a, i, h, l, c))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (e.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
              (e.memoizedProps = i),
              (e.memoizedState = l)),
          (o.props = i),
          (o.state = l),
          (o.context = c),
          (i = a))
        : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
          (i = !1));
  } else {
    (o = e.stateNode),
      Uy(t, e),
      (a = e.memoizedProps),
      (c = e.type === e.elementType ? a : Xt(e.type, a)),
      (o.props = c),
      (d = e.pendingProps),
      (h = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Wt(l))
        : ((l = vt(n) ? Zi : tt.current), (l = Xr(e, l)));
    var p = n.getDerivedStateFromProps;
    (u =
      typeof p == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== d || h !== l) && k0(e, o, i, l)),
      (Jn = !1),
      (h = e.memoizedState),
      (o.state = h),
      $l(e, i, o, r);
    var g = e.memoizedState;
    a !== d || h !== g || yt.current || Jn
      ? (typeof p == "function" && (zd(e, n, p, i), (g = e.memoizedState)),
        (c = Jn || C0(e, n, c, i, h, g, l) || !1)
          ? (u ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(i, g, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(i, g, l)),
            typeof o.componentDidUpdate == "function" && (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === t.memoizedProps && h === t.memoizedState) ||
              (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === t.memoizedProps && h === t.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = i),
            (e.memoizedState = g)),
        (o.props = i),
        (o.state = g),
        (o.context = l),
        (i = c))
      : (typeof o.componentDidUpdate != "function" ||
          (a === t.memoizedProps && h === t.memoizedState) ||
          (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === t.memoizedProps && h === t.memoizedState) ||
          (e.flags |= 1024),
        (i = !1));
  }
  return Ud(t, e, n, i, s, r);
}
function Ud(t, e, n, i, r, s) {
  _v(t, e);
  var o = (e.flags & 128) !== 0;
  if (!i && !o) return r && _0(e, n, !1), Fn(t, e, s);
  (i = e.stateNode), (b3.current = e);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : i.render();
  return (
    (e.flags |= 1),
    t !== null && o
      ? ((e.child = Jr(e, t.child, null, s)), (e.child = Jr(e, null, a, s)))
      : rt(t, e, a, s),
    (e.memoizedState = i.state),
    r && _0(e, n, !0),
    e.child
  );
}
function bv(t) {
  var e = t.stateNode;
  e.pendingContext
    ? x0(t, e.pendingContext, e.pendingContext !== e.context)
    : e.context && x0(t, e.context, !1),
    gh(t, e.containerInfo);
}
function M0(t, e, n, i, r) {
  return Qr(), ch(r), (e.flags |= 256), rt(t, e, n, i), e.child;
}
var Yd = { dehydrated: null, treeContext: null, retryLane: 0 };
function Kd(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function wv(t, e, n) {
  var i = e.pendingProps,
    r = xe.current,
    s = !1,
    o = (e.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = t !== null && t.memoizedState === null ? !1 : (r & 2) !== 0),
    a
      ? ((s = !0), (e.flags &= -129))
      : (t === null || t.memoizedState !== null) && (r |= 1),
    fe(xe, r & 1),
    t === null)
  )
    return (
      Fd(e),
      (t = e.memoizedState),
      t !== null && ((t = t.dehydrated), t !== null)
        ? (e.mode & 1
            ? t.data === "$!"
              ? (e.lanes = 8)
              : (e.lanes = 1073741824)
            : (e.lanes = 1),
          null)
        : ((o = i.children),
          (t = i.fallback),
          s
            ? ((i = e.mode),
              (s = e.child),
              (o = { mode: "hidden", children: o }),
              !(i & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = Ac(o, i, 0, null)),
              (t = qi(t, i, n, null)),
              (s.return = e),
              (t.return = e),
              (s.sibling = t),
              (e.child = s),
              (e.child.memoizedState = Kd(n)),
              (e.memoizedState = Yd),
              t)
            : Eh(e, o))
    );
  if (((r = t.memoizedState), r !== null && ((a = r.dehydrated), a !== null)))
    return w3(t, e, o, i, a, r, n);
  if (s) {
    (s = i.fallback), (o = e.mode), (r = t.child), (a = r.sibling);
    var l = { mode: "hidden", children: i.children };
    return (
      !(o & 1) && e.child !== r
        ? ((i = e.child),
          (i.childLanes = 0),
          (i.pendingProps = l),
          (e.deletions = null))
        : ((i = gi(r, l)), (i.subtreeFlags = r.subtreeFlags & 14680064)),
      a !== null ? (s = gi(a, s)) : ((s = qi(s, o, n, null)), (s.flags |= 2)),
      (s.return = e),
      (i.return = e),
      (i.sibling = s),
      (e.child = i),
      (i = s),
      (s = e.child),
      (o = t.child.memoizedState),
      (o =
        o === null
          ? Kd(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = t.childLanes & ~n),
      (e.memoizedState = Yd),
      i
    );
  }
  return (
    (s = t.child),
    (t = s.sibling),
    (i = gi(s, { mode: "visible", children: i.children })),
    !(e.mode & 1) && (i.lanes = n),
    (i.return = e),
    (i.sibling = null),
    t !== null &&
      ((n = e.deletions),
      n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
    (e.child = i),
    (e.memoizedState = null),
    i
  );
}
function Eh(t, e) {
  return (
    (e = Ac({ mode: "visible", children: e }, t.mode, 0, null)),
    (e.return = t),
    (t.child = e)
  );
}
function Na(t, e, n, i) {
  return (
    i !== null && ch(i),
    Jr(e, t.child, null, n),
    (t = Eh(e, e.pendingProps.children)),
    (t.flags |= 2),
    (e.memoizedState = null),
    t
  );
}
function w3(t, e, n, i, r, s, o) {
  if (n)
    return e.flags & 256
      ? ((e.flags &= -257), (i = Su(Error(I(422)))), Na(t, e, o, i))
      : e.memoizedState !== null
      ? ((e.child = t.child), (e.flags |= 128), null)
      : ((s = i.fallback),
        (r = e.mode),
        (i = Ac({ mode: "visible", children: i.children }, r, 0, null)),
        (s = qi(s, r, o, null)),
        (s.flags |= 2),
        (i.return = e),
        (s.return = e),
        (i.sibling = s),
        (e.child = i),
        e.mode & 1 && Jr(e, t.child, null, o),
        (e.child.memoizedState = Kd(o)),
        (e.memoizedState = Yd),
        s);
  if (!(e.mode & 1)) return Na(t, e, o, null);
  if (r.data === "$!") {
    if (((i = r.nextSibling && r.nextSibling.dataset), i)) var a = i.dgst;
    return (i = a), (s = Error(I(419))), (i = Su(s, i, void 0)), Na(t, e, o, i);
  }
  if (((a = (o & t.childLanes) !== 0), mt || a)) {
    if (((i = Fe), i !== null)) {
      switch (o & -o) {
        case 4:
          r = 2;
          break;
        case 16:
          r = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          r = 32;
          break;
        case 536870912:
          r = 268435456;
          break;
        default:
          r = 0;
      }
      (r = r & (i.suspendedLanes | o) ? 0 : r),
        r !== 0 &&
          r !== s.retryLane &&
          ((s.retryLane = r), $n(t, r), nn(i, t, r, -1));
    }
    return Nh(), (i = Su(Error(I(421)))), Na(t, e, o, i);
  }
  return r.data === "$?"
    ? ((e.flags |= 128),
      (e.child = t.child),
      (e = R3.bind(null, t)),
      (r._reactRetry = e),
      null)
    : ((t = s.treeContext),
      (Ct = di(r.nextSibling)),
      (kt = e),
      (ye = !0),
      (Jt = null),
      t !== null &&
        ((Rt[Mt++] = Nn),
        (Rt[Mt++] = An),
        (Rt[Mt++] = er),
        (Nn = t.id),
        (An = t.overflow),
        (er = e)),
      (e = Eh(e, i.children)),
      (e.flags |= 4096),
      e);
}
function I0(t, e, n) {
  t.lanes |= e;
  var i = t.alternate;
  i !== null && (i.lanes |= e), Bd(t.return, e, n);
}
function Cu(t, e, n, i, r) {
  var s = t.memoizedState;
  s === null
    ? (t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: n,
        tailMode: r,
      })
    : ((s.isBackwards = e),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = i),
      (s.tail = n),
      (s.tailMode = r));
}
function Ev(t, e, n) {
  var i = e.pendingProps,
    r = i.revealOrder,
    s = i.tail;
  if ((rt(t, e, i.children, n), (i = xe.current), i & 2))
    (i = (i & 1) | 2), (e.flags |= 128);
  else {
    if (t !== null && t.flags & 128)
      e: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && I0(t, n, e);
        else if (t.tag === 19) I0(t, n, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break e;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    i &= 1;
  }
  if ((fe(xe, i), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (r) {
      case "forwards":
        for (n = e.child, r = null; n !== null; )
          (t = n.alternate),
            t !== null && Fl(t) === null && (r = n),
            (n = n.sibling);
        (n = r),
          n === null
            ? ((r = e.child), (e.child = null))
            : ((r = n.sibling), (n.sibling = null)),
          Cu(e, !1, r, n, s);
        break;
      case "backwards":
        for (n = null, r = e.child, e.child = null; r !== null; ) {
          if (((t = r.alternate), t !== null && Fl(t) === null)) {
            e.child = r;
            break;
          }
          (t = r.sibling), (r.sibling = n), (n = r), (r = t);
        }
        Cu(e, !0, n, null, s);
        break;
      case "together":
        Cu(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function dl(t, e) {
  !(e.mode & 1) &&
    t !== null &&
    ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function Fn(t, e, n) {
  if (
    (t !== null && (e.dependencies = t.dependencies),
    (nr |= e.lanes),
    !(n & e.childLanes))
  )
    return null;
  if (t !== null && e.child !== t.child) throw Error(I(153));
  if (e.child !== null) {
    for (
      t = e.child, n = gi(t, t.pendingProps), e.child = n, n.return = e;
      t.sibling !== null;

    )
      (t = t.sibling), (n = n.sibling = gi(t, t.pendingProps)), (n.return = e);
    n.sibling = null;
  }
  return e.child;
}
function E3(t, e, n) {
  switch (e.tag) {
    case 3:
      bv(e), Qr();
      break;
    case 5:
      Xy(e);
      break;
    case 1:
      vt(e.type) && jl(e);
      break;
    case 4:
      gh(e, e.stateNode.containerInfo);
      break;
    case 10:
      var i = e.type._context,
        r = e.memoizedProps.value;
      fe(Ml, i._currentValue), (i._currentValue = r);
      break;
    case 13:
      if (((i = e.memoizedState), i !== null))
        return i.dehydrated !== null
          ? (fe(xe, xe.current & 1), (e.flags |= 128), null)
          : n & e.child.childLanes
          ? wv(t, e, n)
          : (fe(xe, xe.current & 1),
            (t = Fn(t, e, n)),
            t !== null ? t.sibling : null);
      fe(xe, xe.current & 1);
      break;
    case 19:
      if (((i = (n & e.childLanes) !== 0), t.flags & 128)) {
        if (i) return Ev(t, e, n);
        e.flags |= 128;
      }
      if (
        ((r = e.memoizedState),
        r !== null &&
          ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
        fe(xe, xe.current),
        i)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), xv(t, e, n);
  }
  return Fn(t, e, n);
}
var Sv, Gd, Cv, kv;
Sv = function (t, e) {
  for (var n = e.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Gd = function () {};
Cv = function (t, e, n, i) {
  var r = t.memoizedProps;
  if (r !== i) {
    (t = e.stateNode), Wi(mn.current);
    var s = null;
    switch (n) {
      case "input":
        (r = md(t, r)), (i = md(t, i)), (s = []);
        break;
      case "select":
        (r = be({}, r, { value: void 0 })),
          (i = be({}, i, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (r = xd(t, r)), (i = xd(t, i)), (s = []);
        break;
      default:
        typeof r.onClick != "function" &&
          typeof i.onClick == "function" &&
          (t.onclick = Pl);
    }
    bd(n, i);
    var o;
    n = null;
    for (c in r)
      if (!i.hasOwnProperty(c) && r.hasOwnProperty(c) && r[c] != null)
        if (c === "style") {
          var a = r[c];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Eo.hasOwnProperty(c)
              ? s || (s = [])
              : (s = s || []).push(c, null));
    for (c in i) {
      var l = i[c];
      if (
        ((a = r != null ? r[c] : void 0),
        i.hasOwnProperty(c) && l !== a && (l != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else n || (s || (s = []), s.push(c, n)), (n = l);
        else
          c === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(c, l))
            : c === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (s = s || []).push(c, "" + l)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Eo.hasOwnProperty(c)
                ? (l != null && c === "onScroll" && pe("scroll", t),
                  s || a === l || (s = []))
                : (s = s || []).push(c, l));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (e.updateQueue = c) && (e.flags |= 4);
  }
};
kv = function (t, e, n, i) {
  n !== i && (e.flags |= 4);
};
function Ms(t, e) {
  if (!ye)
    switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var n = null; e !== null; )
          e.alternate !== null && (n = e), (e = e.sibling);
        n === null ? (t.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = t.tail;
        for (var i = null; n !== null; )
          n.alternate !== null && (i = n), (n = n.sibling);
        i === null
          ? e || t.tail === null
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (i.sibling = null);
    }
}
function qe(t) {
  var e = t.alternate !== null && t.alternate.child === t.child,
    n = 0,
    i = 0;
  if (e)
    for (var r = t.child; r !== null; )
      (n |= r.lanes | r.childLanes),
        (i |= r.subtreeFlags & 14680064),
        (i |= r.flags & 14680064),
        (r.return = t),
        (r = r.sibling);
  else
    for (r = t.child; r !== null; )
      (n |= r.lanes | r.childLanes),
        (i |= r.subtreeFlags),
        (i |= r.flags),
        (r.return = t),
        (r = r.sibling);
  return (t.subtreeFlags |= i), (t.childLanes = n), e;
}
function S3(t, e, n) {
  var i = e.pendingProps;
  switch ((lh(e), e.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return qe(e), null;
    case 1:
      return vt(e.type) && Ll(), qe(e), null;
    case 3:
      return (
        (i = e.stateNode),
        Zr(),
        me(yt),
        me(tt),
        yh(),
        i.pendingContext &&
          ((i.context = i.pendingContext), (i.pendingContext = null)),
        (t === null || t.child === null) &&
          (Oa(e)
            ? (e.flags |= 4)
            : t === null ||
              (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), Jt !== null && (nf(Jt), (Jt = null)))),
        Gd(t, e),
        qe(e),
        null
      );
    case 5:
      mh(e);
      var r = Wi(Ro.current);
      if (((n = e.type), t !== null && e.stateNode != null))
        Cv(t, e, n, i, r),
          t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      else {
        if (!i) {
          if (e.stateNode === null) throw Error(I(166));
          return qe(e), null;
        }
        if (((t = Wi(mn.current)), Oa(e))) {
          (i = e.stateNode), (n = e.type);
          var s = e.memoizedProps;
          switch (((i[pn] = e), (i[jo] = s), (t = (e.mode & 1) !== 0), n)) {
            case "dialog":
              pe("cancel", i), pe("close", i);
              break;
            case "iframe":
            case "object":
            case "embed":
              pe("load", i);
              break;
            case "video":
            case "audio":
              for (r = 0; r < Xs.length; r++) pe(Xs[r], i);
              break;
            case "source":
              pe("error", i);
              break;
            case "img":
            case "image":
            case "link":
              pe("error", i), pe("load", i);
              break;
            case "details":
              pe("toggle", i);
              break;
            case "input":
              Yp(i, s), pe("invalid", i);
              break;
            case "select":
              (i._wrapperState = { wasMultiple: !!s.multiple }),
                pe("invalid", i);
              break;
            case "textarea":
              Gp(i, s), pe("invalid", i);
          }
          bd(n, s), (r = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? i.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      ka(i.textContent, a, t),
                    (r = ["children", a]))
                  : typeof a == "number" &&
                    i.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      ka(i.textContent, a, t),
                    (r = ["children", "" + a]))
                : Eo.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  pe("scroll", i);
            }
          switch (n) {
            case "input":
              va(i), Kp(i, s, !0);
              break;
            case "textarea":
              va(i), qp(i);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (i.onclick = Pl);
          }
          (i = r), (e.updateQueue = i), i !== null && (e.flags |= 4);
        } else {
          (o = r.nodeType === 9 ? r : r.ownerDocument),
            t === "http://www.w3.org/1999/xhtml" && (t = Z1(n)),
            t === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((t = o.createElement("div")),
                  (t.innerHTML = "<script></script>"),
                  (t = t.removeChild(t.firstChild)))
                : typeof i.is == "string"
                ? (t = o.createElement(n, { is: i.is }))
                : ((t = o.createElement(n)),
                  n === "select" &&
                    ((o = t),
                    i.multiple
                      ? (o.multiple = !0)
                      : i.size && (o.size = i.size)))
              : (t = o.createElementNS(t, n)),
            (t[pn] = e),
            (t[jo] = i),
            Sv(t, e, !1, !1),
            (e.stateNode = t);
          e: {
            switch (((o = wd(n, i)), n)) {
              case "dialog":
                pe("cancel", t), pe("close", t), (r = i);
                break;
              case "iframe":
              case "object":
              case "embed":
                pe("load", t), (r = i);
                break;
              case "video":
              case "audio":
                for (r = 0; r < Xs.length; r++) pe(Xs[r], t);
                r = i;
                break;
              case "source":
                pe("error", t), (r = i);
                break;
              case "img":
              case "image":
              case "link":
                pe("error", t), pe("load", t), (r = i);
                break;
              case "details":
                pe("toggle", t), (r = i);
                break;
              case "input":
                Yp(t, i), (r = md(t, i)), pe("invalid", t);
                break;
              case "option":
                r = i;
                break;
              case "select":
                (t._wrapperState = { wasMultiple: !!i.multiple }),
                  (r = be({}, i, { value: void 0 })),
                  pe("invalid", t);
                break;
              case "textarea":
                Gp(t, i), (r = xd(t, i)), pe("invalid", t);
                break;
              default:
                r = i;
            }
            bd(n, r), (a = r);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? ny(t, l)
                  : s === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && ey(t, l))
                  : s === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && So(t, l)
                    : typeof l == "number" && So(t, "" + l)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Eo.hasOwnProperty(s)
                      ? l != null && s === "onScroll" && pe("scroll", t)
                      : l != null && Kf(t, s, l, o));
              }
            switch (n) {
              case "input":
                va(t), Kp(t, i, !1);
                break;
              case "textarea":
                va(t), qp(t);
                break;
              case "option":
                i.value != null && t.setAttribute("value", "" + vi(i.value));
                break;
              case "select":
                (t.multiple = !!i.multiple),
                  (s = i.value),
                  s != null
                    ? zr(t, !!i.multiple, s, !1)
                    : i.defaultValue != null &&
                      zr(t, !!i.multiple, i.defaultValue, !0);
                break;
              default:
                typeof r.onClick == "function" && (t.onclick = Pl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break e;
              case "img":
                i = !0;
                break e;
              default:
                i = !1;
            }
          }
          i && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return qe(e), null;
    case 6:
      if (t && e.stateNode != null) kv(t, e, t.memoizedProps, i);
      else {
        if (typeof i != "string" && e.stateNode === null) throw Error(I(166));
        if (((n = Wi(Ro.current)), Wi(mn.current), Oa(e))) {
          if (
            ((i = e.stateNode),
            (n = e.memoizedProps),
            (i[pn] = e),
            (s = i.nodeValue !== n) && ((t = kt), t !== null))
          )
            switch (t.tag) {
              case 3:
                ka(i.nodeValue, n, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 &&
                  ka(i.nodeValue, n, (t.mode & 1) !== 0);
            }
          s && (e.flags |= 4);
        } else
          (i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i)),
            (i[pn] = e),
            (e.stateNode = i);
      }
      return qe(e), null;
    case 13:
      if (
        (me(xe),
        (i = e.memoizedState),
        t === null ||
          (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (ye && Ct !== null && e.mode & 1 && !(e.flags & 128))
          Hy(), Qr(), (e.flags |= 98560), (s = !1);
        else if (((s = Oa(e)), i !== null && i.dehydrated !== null)) {
          if (t === null) {
            if (!s) throw Error(I(318));
            if (
              ((s = e.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(I(317));
            s[pn] = e;
          } else
            Qr(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
          qe(e), (s = !1);
        } else Jt !== null && (nf(Jt), (Jt = null)), (s = !0);
        if (!s) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = n), e)
        : ((i = i !== null),
          i !== (t !== null && t.memoizedState !== null) &&
            i &&
            ((e.child.flags |= 8192),
            e.mode & 1 &&
              (t === null || xe.current & 1 ? je === 0 && (je = 3) : Nh())),
          e.updateQueue !== null && (e.flags |= 4),
          qe(e),
          null);
    case 4:
      return (
        Zr(), Gd(t, e), t === null && Po(e.stateNode.containerInfo), qe(e), null
      );
    case 10:
      return fh(e.type._context), qe(e), null;
    case 17:
      return vt(e.type) && Ll(), qe(e), null;
    case 19:
      if ((me(xe), (s = e.memoizedState), s === null)) return qe(e), null;
      if (((i = (e.flags & 128) !== 0), (o = s.rendering), o === null))
        if (i) Ms(s, !1);
        else {
          if (je !== 0 || (t !== null && t.flags & 128))
            for (t = e.child; t !== null; ) {
              if (((o = Fl(t)), o !== null)) {
                for (
                  e.flags |= 128,
                    Ms(s, !1),
                    i = o.updateQueue,
                    i !== null && ((e.updateQueue = i), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    i = n,
                    n = e.child;
                  n !== null;

                )
                  (s = n),
                    (t = i),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = t),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (t = o.dependencies),
                        (s.dependencies =
                          t === null
                            ? null
                            : {
                                lanes: t.lanes,
                                firstContext: t.firstContext,
                              })),
                    (n = n.sibling);
                return fe(xe, (xe.current & 1) | 2), e.child;
              }
              t = t.sibling;
            }
          s.tail !== null &&
            ke() > ts &&
            ((e.flags |= 128), (i = !0), Ms(s, !1), (e.lanes = 4194304));
        }
      else {
        if (!i)
          if (((t = Fl(o)), t !== null)) {
            if (
              ((e.flags |= 128),
              (i = !0),
              (n = t.updateQueue),
              n !== null && ((e.updateQueue = n), (e.flags |= 4)),
              Ms(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !ye)
            )
              return qe(e), null;
          } else
            2 * ke() - s.renderingStartTime > ts &&
              n !== 1073741824 &&
              ((e.flags |= 128), (i = !0), Ms(s, !1), (e.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = e.child), (e.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (e.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((e = s.tail),
          (s.rendering = e),
          (s.tail = e.sibling),
          (s.renderingStartTime = ke()),
          (e.sibling = null),
          (n = xe.current),
          fe(xe, i ? (n & 1) | 2 : n & 1),
          e)
        : (qe(e), null);
    case 22:
    case 23:
      return (
        Th(),
        (i = e.memoizedState !== null),
        t !== null && (t.memoizedState !== null) !== i && (e.flags |= 8192),
        i && e.mode & 1
          ? Et & 1073741824 && (qe(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : qe(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(I(156, e.tag));
}
function C3(t, e) {
  switch ((lh(e), e.tag)) {
    case 1:
      return (
        vt(e.type) && Ll(),
        (t = e.flags),
        t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 3:
      return (
        Zr(),
        me(yt),
        me(tt),
        yh(),
        (t = e.flags),
        t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 5:
      return mh(e), null;
    case 13:
      if (
        (me(xe), (t = e.memoizedState), t !== null && t.dehydrated !== null)
      ) {
        if (e.alternate === null) throw Error(I(340));
        Qr();
      }
      return (
        (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 19:
      return me(xe), null;
    case 4:
      return Zr(), null;
    case 10:
      return fh(e.type._context), null;
    case 22:
    case 23:
      return Th(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Aa = !1,
  Je = !1,
  k3 = typeof WeakSet == "function" ? WeakSet : Set,
  H = null;
function Mr(t, e) {
  var n = t.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (i) {
        Se(t, e, i);
      }
    else n.current = null;
}
function qd(t, e, n) {
  try {
    n();
  } catch (i) {
    Se(t, e, i);
  }
}
var $0 = !1;
function O3(t, e) {
  if (((Ld = Tl), (t = Ay()), oh(t))) {
    if ("selectionStart" in t)
      var n = { start: t.selectionStart, end: t.selectionEnd };
    else
      e: {
        n = ((n = t.ownerDocument) && n.defaultView) || window;
        var i = n.getSelection && n.getSelection();
        if (i && i.rangeCount !== 0) {
          n = i.anchorNode;
          var r = i.anchorOffset,
            s = i.focusNode;
          i = i.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            c = 0,
            u = 0,
            d = t,
            h = null;
          t: for (;;) {
            for (
              var p;
              d !== n || (r !== 0 && d.nodeType !== 3) || (a = o + r),
                d !== s || (i !== 0 && d.nodeType !== 3) || (l = o + i),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (p = d.firstChild) !== null;

            )
              (h = d), (d = p);
            for (;;) {
              if (d === t) break t;
              if (
                (h === n && ++c === r && (a = o),
                h === s && ++u === i && (l = o),
                (p = d.nextSibling) !== null)
              )
                break;
              (d = h), (h = d.parentNode);
            }
            d = p;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (jd = { focusedElem: t, selectionRange: n }, Tl = !1, H = e; H !== null; )
    if (((e = H), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
      (t.return = e), (H = t);
    else
      for (; H !== null; ) {
        e = H;
        try {
          var g = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var y = g.memoizedProps,
                    v = g.memoizedState,
                    m = e.stateNode,
                    x = m.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? y : Xt(e.type, y),
                      v,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = x;
                }
                break;
              case 3:
                var _ = e.stateNode.containerInfo;
                _.nodeType === 1
                  ? (_.textContent = "")
                  : _.nodeType === 9 &&
                    _.documentElement &&
                    _.removeChild(_.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(I(163));
            }
        } catch (w) {
          Se(e, e.return, w);
        }
        if (((t = e.sibling), t !== null)) {
          (t.return = e.return), (H = t);
          break;
        }
        H = e.return;
      }
  return (g = $0), ($0 = !1), g;
}
function co(t, e, n) {
  var i = e.updateQueue;
  if (((i = i !== null ? i.lastEffect : null), i !== null)) {
    var r = (i = i.next);
    do {
      if ((r.tag & t) === t) {
        var s = r.destroy;
        (r.destroy = void 0), s !== void 0 && qd(e, n, s);
      }
      r = r.next;
    } while (r !== i);
  }
}
function Tc(t, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var n = (e = e.next);
    do {
      if ((n.tag & t) === t) {
        var i = n.create;
        n.destroy = i();
      }
      n = n.next;
    } while (n !== e);
  }
}
function Xd(t) {
  var e = t.ref;
  if (e !== null) {
    var n = t.stateNode;
    switch (t.tag) {
      case 5:
        t = n;
        break;
      default:
        t = n;
    }
    typeof e == "function" ? e(t) : (e.current = t);
  }
}
function Ov(t) {
  var e = t.alternate;
  e !== null && ((t.alternate = null), Ov(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
      ((e = t.stateNode),
      e !== null &&
        (delete e[pn], delete e[jo], delete e[Md], delete e[c3], delete e[u3])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null);
}
function Tv(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function F0(t) {
  e: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || Tv(t.return)) return null;
      t = t.return;
    }
    for (
      t.sibling.return = t.return, t = t.sibling;
      t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

    ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      (t.child.return = t), (t = t.child);
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function Qd(t, e, n) {
  var i = t.tag;
  if (i === 5 || i === 6)
    (t = t.stateNode),
      e
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(t, e)
          : n.insertBefore(t, e)
        : (n.nodeType === 8
            ? ((e = n.parentNode), e.insertBefore(t, n))
            : ((e = n), e.appendChild(t)),
          (n = n._reactRootContainer),
          n != null || e.onclick !== null || (e.onclick = Pl));
  else if (i !== 4 && ((t = t.child), t !== null))
    for (Qd(t, e, n), t = t.sibling; t !== null; ) Qd(t, e, n), (t = t.sibling);
}
function Jd(t, e, n) {
  var i = t.tag;
  if (i === 5 || i === 6)
    (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (i !== 4 && ((t = t.child), t !== null))
    for (Jd(t, e, n), t = t.sibling; t !== null; ) Jd(t, e, n), (t = t.sibling);
}
var We = null,
  Qt = !1;
function Yn(t, e, n) {
  for (n = n.child; n !== null; ) Nv(t, e, n), (n = n.sibling);
}
function Nv(t, e, n) {
  if (gn && typeof gn.onCommitFiberUnmount == "function")
    try {
      gn.onCommitFiberUnmount(_c, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Je || Mr(n, e);
    case 6:
      var i = We,
        r = Qt;
      (We = null),
        Yn(t, e, n),
        (We = i),
        (Qt = r),
        We !== null &&
          (Qt
            ? ((t = We),
              (n = n.stateNode),
              t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
            : We.removeChild(n.stateNode));
      break;
    case 18:
      We !== null &&
        (Qt
          ? ((t = We),
            (n = n.stateNode),
            t.nodeType === 8
              ? vu(t.parentNode, n)
              : t.nodeType === 1 && vu(t, n),
            To(t))
          : vu(We, n.stateNode));
      break;
    case 4:
      (i = We),
        (r = Qt),
        (We = n.stateNode.containerInfo),
        (Qt = !0),
        Yn(t, e, n),
        (We = i),
        (Qt = r);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Je &&
        ((i = n.updateQueue), i !== null && ((i = i.lastEffect), i !== null))
      ) {
        r = i = i.next;
        do {
          var s = r,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && qd(n, e, o),
            (r = r.next);
        } while (r !== i);
      }
      Yn(t, e, n);
      break;
    case 1:
      if (
        !Je &&
        (Mr(n, e),
        (i = n.stateNode),
        typeof i.componentWillUnmount == "function")
      )
        try {
          (i.props = n.memoizedProps),
            (i.state = n.memoizedState),
            i.componentWillUnmount();
        } catch (a) {
          Se(n, e, a);
        }
      Yn(t, e, n);
      break;
    case 21:
      Yn(t, e, n);
      break;
    case 22:
      n.mode & 1
        ? ((Je = (i = Je) || n.memoizedState !== null), Yn(t, e, n), (Je = i))
        : Yn(t, e, n);
      break;
    default:
      Yn(t, e, n);
  }
}
function B0(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    n === null && (n = t.stateNode = new k3()),
      e.forEach(function (i) {
        var r = M3.bind(null, t, i);
        n.has(i) || (n.add(i), i.then(r, r));
      });
  }
}
function qt(t, e) {
  var n = e.deletions;
  if (n !== null)
    for (var i = 0; i < n.length; i++) {
      var r = n[i];
      try {
        var s = t,
          o = e,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (We = a.stateNode), (Qt = !1);
              break e;
            case 3:
              (We = a.stateNode.containerInfo), (Qt = !0);
              break e;
            case 4:
              (We = a.stateNode.containerInfo), (Qt = !0);
              break e;
          }
          a = a.return;
        }
        if (We === null) throw Error(I(160));
        Nv(s, o, r), (We = null), (Qt = !1);
        var l = r.alternate;
        l !== null && (l.return = null), (r.return = null);
      } catch (c) {
        Se(r, e, c);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) Av(e, t), (e = e.sibling);
}
function Av(t, e) {
  var n = t.alternate,
    i = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((qt(e, t), cn(t), i & 4)) {
        try {
          co(3, t, t.return), Tc(3, t);
        } catch (y) {
          Se(t, t.return, y);
        }
        try {
          co(5, t, t.return);
        } catch (y) {
          Se(t, t.return, y);
        }
      }
      break;
    case 1:
      qt(e, t), cn(t), i & 512 && n !== null && Mr(n, n.return);
      break;
    case 5:
      if (
        (qt(e, t),
        cn(t),
        i & 512 && n !== null && Mr(n, n.return),
        t.flags & 32)
      ) {
        var r = t.stateNode;
        try {
          So(r, "");
        } catch (y) {
          Se(t, t.return, y);
        }
      }
      if (i & 4 && ((r = t.stateNode), r != null)) {
        var s = t.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = t.type,
          l = t.updateQueue;
        if (((t.updateQueue = null), l !== null))
          try {
            a === "input" && s.type === "radio" && s.name != null && Q1(r, s),
              wd(a, o);
            var c = wd(a, s);
            for (o = 0; o < l.length; o += 2) {
              var u = l[o],
                d = l[o + 1];
              u === "style"
                ? ny(r, d)
                : u === "dangerouslySetInnerHTML"
                ? ey(r, d)
                : u === "children"
                ? So(r, d)
                : Kf(r, u, d, c);
            }
            switch (a) {
              case "input":
                yd(r, s);
                break;
              case "textarea":
                J1(r, s);
                break;
              case "select":
                var h = r._wrapperState.wasMultiple;
                r._wrapperState.wasMultiple = !!s.multiple;
                var p = s.value;
                p != null
                  ? zr(r, !!s.multiple, p, !1)
                  : h !== !!s.multiple &&
                    (s.defaultValue != null
                      ? zr(r, !!s.multiple, s.defaultValue, !0)
                      : zr(r, !!s.multiple, s.multiple ? [] : "", !1));
            }
            r[jo] = s;
          } catch (y) {
            Se(t, t.return, y);
          }
      }
      break;
    case 6:
      if ((qt(e, t), cn(t), i & 4)) {
        if (t.stateNode === null) throw Error(I(162));
        (r = t.stateNode), (s = t.memoizedProps);
        try {
          r.nodeValue = s;
        } catch (y) {
          Se(t, t.return, y);
        }
      }
      break;
    case 3:
      if (
        (qt(e, t), cn(t), i & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          To(e.containerInfo);
        } catch (y) {
          Se(t, t.return, y);
        }
      break;
    case 4:
      qt(e, t), cn(t);
      break;
    case 13:
      qt(e, t),
        cn(t),
        (r = t.child),
        r.flags & 8192 &&
          ((s = r.memoizedState !== null),
          (r.stateNode.isHidden = s),
          !s ||
            (r.alternate !== null && r.alternate.memoizedState !== null) ||
            (kh = ke())),
        i & 4 && B0(t);
      break;
    case 22:
      if (
        ((u = n !== null && n.memoizedState !== null),
        t.mode & 1 ? ((Je = (c = Je) || u), qt(e, t), (Je = c)) : qt(e, t),
        cn(t),
        i & 8192)
      ) {
        if (
          ((c = t.memoizedState !== null),
          (t.stateNode.isHidden = c) && !u && t.mode & 1)
        )
          for (H = t, u = t.child; u !== null; ) {
            for (d = H = u; H !== null; ) {
              switch (((h = H), (p = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  co(4, h, h.return);
                  break;
                case 1:
                  Mr(h, h.return);
                  var g = h.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (i = h), (n = h.return);
                    try {
                      (e = i),
                        (g.props = e.memoizedProps),
                        (g.state = e.memoizedState),
                        g.componentWillUnmount();
                    } catch (y) {
                      Se(i, n, y);
                    }
                  }
                  break;
                case 5:
                  Mr(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    W0(d);
                    continue;
                  }
              }
              p !== null ? ((p.return = h), (H = p)) : W0(d);
            }
            u = u.sibling;
          }
        e: for (u = null, d = t; ; ) {
          if (d.tag === 5) {
            if (u === null) {
              u = d;
              try {
                (r = d.stateNode),
                  c
                    ? ((s = r.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = ty("display", o)));
              } catch (y) {
                Se(t, t.return, y);
              }
            }
          } else if (d.tag === 6) {
            if (u === null)
              try {
                d.stateNode.nodeValue = c ? "" : d.memoizedProps;
              } catch (y) {
                Se(t, t.return, y);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === t) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === t) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === t) break e;
            u === d && (u = null), (d = d.return);
          }
          u === d && (u = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      qt(e, t), cn(t), i & 4 && B0(t);
      break;
    case 21:
      break;
    default:
      qt(e, t), cn(t);
  }
}
function cn(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (Tv(n)) {
            var i = n;
            break e;
          }
          n = n.return;
        }
        throw Error(I(160));
      }
      switch (i.tag) {
        case 5:
          var r = i.stateNode;
          i.flags & 32 && (So(r, ""), (i.flags &= -33));
          var s = F0(t);
          Jd(t, s, r);
          break;
        case 3:
        case 4:
          var o = i.stateNode.containerInfo,
            a = F0(t);
          Qd(t, a, o);
          break;
        default:
          throw Error(I(161));
      }
    } catch (l) {
      Se(t, t.return, l);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function T3(t, e, n) {
  (H = t), Pv(t);
}
function Pv(t, e, n) {
  for (var i = (t.mode & 1) !== 0; H !== null; ) {
    var r = H,
      s = r.child;
    if (r.tag === 22 && i) {
      var o = r.memoizedState !== null || Aa;
      if (!o) {
        var a = r.alternate,
          l = (a !== null && a.memoizedState !== null) || Je;
        a = Aa;
        var c = Je;
        if (((Aa = o), (Je = l) && !c))
          for (H = r; H !== null; )
            (o = H),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? H0(r)
                : l !== null
                ? ((l.return = o), (H = l))
                : H0(r);
        for (; s !== null; ) (H = s), Pv(s), (s = s.sibling);
        (H = r), (Aa = a), (Je = c);
      }
      z0(t);
    } else
      r.subtreeFlags & 8772 && s !== null ? ((s.return = r), (H = s)) : z0(t);
  }
}
function z0(t) {
  for (; H !== null; ) {
    var e = H;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              Je || Tc(5, e);
              break;
            case 1:
              var i = e.stateNode;
              if (e.flags & 4 && !Je)
                if (n === null) i.componentDidMount();
                else {
                  var r =
                    e.elementType === e.type
                      ? n.memoizedProps
                      : Xt(e.type, n.memoizedProps);
                  i.componentDidUpdate(
                    r,
                    n.memoizedState,
                    i.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var s = e.updateQueue;
              s !== null && S0(e, s, i);
              break;
            case 3:
              var o = e.updateQueue;
              if (o !== null) {
                if (((n = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      n = e.child.stateNode;
                      break;
                    case 1:
                      n = e.child.stateNode;
                  }
                S0(e, o, n);
              }
              break;
            case 5:
              var a = e.stateNode;
              if (n === null && e.flags & 4) {
                n = a;
                var l = e.memoizedProps;
                switch (e.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (e.memoizedState === null) {
                var c = e.alternate;
                if (c !== null) {
                  var u = c.memoizedState;
                  if (u !== null) {
                    var d = u.dehydrated;
                    d !== null && To(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(I(163));
          }
        Je || (e.flags & 512 && Xd(e));
      } catch (h) {
        Se(e, e.return, h);
      }
    }
    if (e === t) {
      H = null;
      break;
    }
    if (((n = e.sibling), n !== null)) {
      (n.return = e.return), (H = n);
      break;
    }
    H = e.return;
  }
}
function W0(t) {
  for (; H !== null; ) {
    var e = H;
    if (e === t) {
      H = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      (n.return = e.return), (H = n);
      break;
    }
    H = e.return;
  }
}
function H0(t) {
  for (; H !== null; ) {
    var e = H;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            Tc(4, e);
          } catch (l) {
            Se(e, n, l);
          }
          break;
        case 1:
          var i = e.stateNode;
          if (typeof i.componentDidMount == "function") {
            var r = e.return;
            try {
              i.componentDidMount();
            } catch (l) {
              Se(e, r, l);
            }
          }
          var s = e.return;
          try {
            Xd(e);
          } catch (l) {
            Se(e, s, l);
          }
          break;
        case 5:
          var o = e.return;
          try {
            Xd(e);
          } catch (l) {
            Se(e, o, l);
          }
      }
    } catch (l) {
      Se(e, e.return, l);
    }
    if (e === t) {
      H = null;
      break;
    }
    var a = e.sibling;
    if (a !== null) {
      (a.return = e.return), (H = a);
      break;
    }
    H = e.return;
  }
}
var N3 = Math.ceil,
  Wl = Wn.ReactCurrentDispatcher,
  Sh = Wn.ReactCurrentOwner,
  Bt = Wn.ReactCurrentBatchConfig,
  oe = 0,
  Fe = null,
  Ae = null,
  He = 0,
  Et = 0,
  Ir = ki(0),
  je = 0,
  Fo = null,
  nr = 0,
  Nc = 0,
  Ch = 0,
  uo = null,
  ht = null,
  kh = 0,
  ts = 1 / 0,
  Cn = null,
  Hl = !1,
  Zd = null,
  hi = null,
  Pa = !1,
  si = null,
  Vl = 0,
  fo = 0,
  ef = null,
  fl = -1,
  hl = 0;
function at() {
  return oe & 6 ? ke() : fl !== -1 ? fl : (fl = ke());
}
function pi(t) {
  return t.mode & 1
    ? oe & 2 && He !== 0
      ? He & -He
      : f3.transition !== null
      ? (hl === 0 && (hl = py()), hl)
      : ((t = de),
        t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : by(t.type))),
        t)
    : 1;
}
function nn(t, e, n, i) {
  if (50 < fo) throw ((fo = 0), (ef = null), Error(I(185)));
  Zo(t, n, i),
    (!(oe & 2) || t !== Fe) &&
      (t === Fe && (!(oe & 2) && (Nc |= n), je === 4 && ni(t, He)),
      xt(t, i),
      n === 1 && oe === 0 && !(e.mode & 1) && ((ts = ke() + 500), Cc && Oi()));
}
function xt(t, e) {
  var n = t.callbackNode;
  fw(t, e);
  var i = Ol(t, t === Fe ? He : 0);
  if (i === 0)
    n !== null && Jp(n), (t.callbackNode = null), (t.callbackPriority = 0);
  else if (((e = i & -i), t.callbackPriority !== e)) {
    if ((n != null && Jp(n), e === 1))
      t.tag === 0 ? d3(V0.bind(null, t)) : By(V0.bind(null, t)),
        a3(function () {
          !(oe & 6) && Oi();
        }),
        (n = null);
    else {
      switch (gy(i)) {
        case 1:
          n = Jf;
          break;
        case 4:
          n = fy;
          break;
        case 16:
          n = kl;
          break;
        case 536870912:
          n = hy;
          break;
        default:
          n = kl;
      }
      n = Fv(n, Lv.bind(null, t));
    }
    (t.callbackPriority = e), (t.callbackNode = n);
  }
}
function Lv(t, e) {
  if (((fl = -1), (hl = 0), oe & 6)) throw Error(I(327));
  var n = t.callbackNode;
  if (Yr() && t.callbackNode !== n) return null;
  var i = Ol(t, t === Fe ? He : 0);
  if (i === 0) return null;
  if (i & 30 || i & t.expiredLanes || e) e = Ul(t, i);
  else {
    e = i;
    var r = oe;
    oe |= 2;
    var s = Dv();
    (Fe !== t || He !== e) && ((Cn = null), (ts = ke() + 500), Gi(t, e));
    do
      try {
        L3();
        break;
      } catch (a) {
        jv(t, a);
      }
    while (!0);
    dh(),
      (Wl.current = s),
      (oe = r),
      Ae !== null ? (e = 0) : ((Fe = null), (He = 0), (e = je));
  }
  if (e !== 0) {
    if (
      (e === 2 && ((r = Od(t)), r !== 0 && ((i = r), (e = tf(t, r)))), e === 1)
    )
      throw ((n = Fo), Gi(t, 0), ni(t, i), xt(t, ke()), n);
    if (e === 6) ni(t, i);
    else {
      if (
        ((r = t.current.alternate),
        !(i & 30) &&
          !A3(r) &&
          ((e = Ul(t, i)),
          e === 2 && ((s = Od(t)), s !== 0 && ((i = s), (e = tf(t, s)))),
          e === 1))
      )
        throw ((n = Fo), Gi(t, 0), ni(t, i), xt(t, ke()), n);
      switch (((t.finishedWork = r), (t.finishedLanes = i), e)) {
        case 0:
        case 1:
          throw Error(I(345));
        case 2:
          Mi(t, ht, Cn);
          break;
        case 3:
          if (
            (ni(t, i), (i & 130023424) === i && ((e = kh + 500 - ke()), 10 < e))
          ) {
            if (Ol(t, 0) !== 0) break;
            if (((r = t.suspendedLanes), (r & i) !== i)) {
              at(), (t.pingedLanes |= t.suspendedLanes & r);
              break;
            }
            t.timeoutHandle = Rd(Mi.bind(null, t, ht, Cn), e);
            break;
          }
          Mi(t, ht, Cn);
          break;
        case 4:
          if ((ni(t, i), (i & 4194240) === i)) break;
          for (e = t.eventTimes, r = -1; 0 < i; ) {
            var o = 31 - tn(i);
            (s = 1 << o), (o = e[o]), o > r && (r = o), (i &= ~s);
          }
          if (
            ((i = r),
            (i = ke() - i),
            (i =
              (120 > i
                ? 120
                : 480 > i
                ? 480
                : 1080 > i
                ? 1080
                : 1920 > i
                ? 1920
                : 3e3 > i
                ? 3e3
                : 4320 > i
                ? 4320
                : 1960 * N3(i / 1960)) - i),
            10 < i)
          ) {
            t.timeoutHandle = Rd(Mi.bind(null, t, ht, Cn), i);
            break;
          }
          Mi(t, ht, Cn);
          break;
        case 5:
          Mi(t, ht, Cn);
          break;
        default:
          throw Error(I(329));
      }
    }
  }
  return xt(t, ke()), t.callbackNode === n ? Lv.bind(null, t) : null;
}
function tf(t, e) {
  var n = uo;
  return (
    t.current.memoizedState.isDehydrated && (Gi(t, e).flags |= 256),
    (t = Ul(t, e)),
    t !== 2 && ((e = ht), (ht = n), e !== null && nf(e)),
    t
  );
}
function nf(t) {
  ht === null ? (ht = t) : ht.push.apply(ht, t);
}
function A3(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var i = 0; i < n.length; i++) {
          var r = n[i],
            s = r.getSnapshot;
          r = r.value;
          try {
            if (!sn(s(), r)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
      (n.return = e), (e = n);
    else {
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return !0;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
  }
  return !0;
}
function ni(t, e) {
  for (
    e &= ~Ch,
      e &= ~Nc,
      t.suspendedLanes |= e,
      t.pingedLanes &= ~e,
      t = t.expirationTimes;
    0 < e;

  ) {
    var n = 31 - tn(e),
      i = 1 << n;
    (t[n] = -1), (e &= ~i);
  }
}
function V0(t) {
  if (oe & 6) throw Error(I(327));
  Yr();
  var e = Ol(t, 0);
  if (!(e & 1)) return xt(t, ke()), null;
  var n = Ul(t, e);
  if (t.tag !== 0 && n === 2) {
    var i = Od(t);
    i !== 0 && ((e = i), (n = tf(t, i)));
  }
  if (n === 1) throw ((n = Fo), Gi(t, 0), ni(t, e), xt(t, ke()), n);
  if (n === 6) throw Error(I(345));
  return (
    (t.finishedWork = t.current.alternate),
    (t.finishedLanes = e),
    Mi(t, ht, Cn),
    xt(t, ke()),
    null
  );
}
function Oh(t, e) {
  var n = oe;
  oe |= 1;
  try {
    return t(e);
  } finally {
    (oe = n), oe === 0 && ((ts = ke() + 500), Cc && Oi());
  }
}
function ir(t) {
  si !== null && si.tag === 0 && !(oe & 6) && Yr();
  var e = oe;
  oe |= 1;
  var n = Bt.transition,
    i = de;
  try {
    if (((Bt.transition = null), (de = 1), t)) return t();
  } finally {
    (de = i), (Bt.transition = n), (oe = e), !(oe & 6) && Oi();
  }
}
function Th() {
  (Et = Ir.current), me(Ir);
}
function Gi(t, e) {
  (t.finishedWork = null), (t.finishedLanes = 0);
  var n = t.timeoutHandle;
  if ((n !== -1 && ((t.timeoutHandle = -1), o3(n)), Ae !== null))
    for (n = Ae.return; n !== null; ) {
      var i = n;
      switch ((lh(i), i.tag)) {
        case 1:
          (i = i.type.childContextTypes), i != null && Ll();
          break;
        case 3:
          Zr(), me(yt), me(tt), yh();
          break;
        case 5:
          mh(i);
          break;
        case 4:
          Zr();
          break;
        case 13:
          me(xe);
          break;
        case 19:
          me(xe);
          break;
        case 10:
          fh(i.type._context);
          break;
        case 22:
        case 23:
          Th();
      }
      n = n.return;
    }
  if (
    ((Fe = t),
    (Ae = t = gi(t.current, null)),
    (He = Et = e),
    (je = 0),
    (Fo = null),
    (Ch = Nc = nr = 0),
    (ht = uo = null),
    zi !== null)
  ) {
    for (e = 0; e < zi.length; e++)
      if (((n = zi[e]), (i = n.interleaved), i !== null)) {
        n.interleaved = null;
        var r = i.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = r), (i.next = o);
        }
        n.pending = i;
      }
    zi = null;
  }
  return t;
}
function jv(t, e) {
  do {
    var n = Ae;
    try {
      if ((dh(), (cl.current = zl), Bl)) {
        for (var i = _e.memoizedState; i !== null; ) {
          var r = i.queue;
          r !== null && (r.pending = null), (i = i.next);
        }
        Bl = !1;
      }
      if (
        ((tr = 0),
        (Ie = Le = _e = null),
        (lo = !1),
        (Mo = 0),
        (Sh.current = null),
        n === null || n.return === null)
      ) {
        (je = 1), (Fo = e), (Ae = null);
        break;
      }
      e: {
        var s = t,
          o = n.return,
          a = n,
          l = e;
        if (
          ((e = He),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var c = l,
            u = a,
            d = u.tag;
          if (!(u.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var h = u.alternate;
            h
              ? ((u.updateQueue = h.updateQueue),
                (u.memoizedState = h.memoizedState),
                (u.lanes = h.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var p = P0(o);
          if (p !== null) {
            (p.flags &= -257),
              L0(p, o, a, s, e),
              p.mode & 1 && A0(s, c, e),
              (e = p),
              (l = c);
            var g = e.updateQueue;
            if (g === null) {
              var y = new Set();
              y.add(l), (e.updateQueue = y);
            } else g.add(l);
            break e;
          } else {
            if (!(e & 1)) {
              A0(s, c, e), Nh();
              break e;
            }
            l = Error(I(426));
          }
        } else if (ye && a.mode & 1) {
          var v = P0(o);
          if (v !== null) {
            !(v.flags & 65536) && (v.flags |= 256),
              L0(v, o, a, s, e),
              ch(es(l, a));
            break e;
          }
        }
        (s = l = es(l, a)),
          je !== 4 && (je = 2),
          uo === null ? (uo = [s]) : uo.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (e &= -e), (s.lanes |= e);
              var m = mv(s, l, e);
              E0(s, m);
              break e;
            case 1:
              a = l;
              var x = s.type,
                _ = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof x.getDerivedStateFromError == "function" ||
                  (_ !== null &&
                    typeof _.componentDidCatch == "function" &&
                    (hi === null || !hi.has(_))))
              ) {
                (s.flags |= 65536), (e &= -e), (s.lanes |= e);
                var w = yv(s, a, e);
                E0(s, w);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Mv(n);
    } catch (E) {
      (e = E), Ae === n && n !== null && (Ae = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Dv() {
  var t = Wl.current;
  return (Wl.current = zl), t === null ? zl : t;
}
function Nh() {
  (je === 0 || je === 3 || je === 2) && (je = 4),
    Fe === null || (!(nr & 268435455) && !(Nc & 268435455)) || ni(Fe, He);
}
function Ul(t, e) {
  var n = oe;
  oe |= 2;
  var i = Dv();
  (Fe !== t || He !== e) && ((Cn = null), Gi(t, e));
  do
    try {
      P3();
      break;
    } catch (r) {
      jv(t, r);
    }
  while (!0);
  if ((dh(), (oe = n), (Wl.current = i), Ae !== null)) throw Error(I(261));
  return (Fe = null), (He = 0), je;
}
function P3() {
  for (; Ae !== null; ) Rv(Ae);
}
function L3() {
  for (; Ae !== null && !iw(); ) Rv(Ae);
}
function Rv(t) {
  var e = $v(t.alternate, t, Et);
  (t.memoizedProps = t.pendingProps),
    e === null ? Mv(t) : (Ae = e),
    (Sh.current = null);
}
function Mv(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (((t = e.return), e.flags & 32768)) {
      if (((n = C3(n, e)), n !== null)) {
        (n.flags &= 32767), (Ae = n);
        return;
      }
      if (t !== null)
        (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
      else {
        (je = 6), (Ae = null);
        return;
      }
    } else if (((n = S3(n, e, Et)), n !== null)) {
      Ae = n;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      Ae = e;
      return;
    }
    Ae = e = t;
  } while (e !== null);
  je === 0 && (je = 5);
}
function Mi(t, e, n) {
  var i = de,
    r = Bt.transition;
  try {
    (Bt.transition = null), (de = 1), j3(t, e, n, i);
  } finally {
    (Bt.transition = r), (de = i);
  }
  return null;
}
function j3(t, e, n, i) {
  do Yr();
  while (si !== null);
  if (oe & 6) throw Error(I(327));
  n = t.finishedWork;
  var r = t.finishedLanes;
  if (n === null) return null;
  if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
    throw Error(I(177));
  (t.callbackNode = null), (t.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (hw(t, s),
    t === Fe && ((Ae = Fe = null), (He = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Pa ||
      ((Pa = !0),
      Fv(kl, function () {
        return Yr(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Bt.transition), (Bt.transition = null);
    var o = de;
    de = 1;
    var a = oe;
    (oe |= 4),
      (Sh.current = null),
      O3(t, n),
      Av(n, t),
      Zw(jd),
      (Tl = !!Ld),
      (jd = Ld = null),
      (t.current = n),
      T3(n),
      rw(),
      (oe = a),
      (de = o),
      (Bt.transition = s);
  } else t.current = n;
  if (
    (Pa && ((Pa = !1), (si = t), (Vl = r)),
    (s = t.pendingLanes),
    s === 0 && (hi = null),
    aw(n.stateNode),
    xt(t, ke()),
    e !== null)
  )
    for (i = t.onRecoverableError, n = 0; n < e.length; n++)
      (r = e[n]), i(r.value, { componentStack: r.stack, digest: r.digest });
  if (Hl) throw ((Hl = !1), (t = Zd), (Zd = null), t);
  return (
    Vl & 1 && t.tag !== 0 && Yr(),
    (s = t.pendingLanes),
    s & 1 ? (t === ef ? fo++ : ((fo = 0), (ef = t))) : (fo = 0),
    Oi(),
    null
  );
}
function Yr() {
  if (si !== null) {
    var t = gy(Vl),
      e = Bt.transition,
      n = de;
    try {
      if (((Bt.transition = null), (de = 16 > t ? 16 : t), si === null))
        var i = !1;
      else {
        if (((t = si), (si = null), (Vl = 0), oe & 6)) throw Error(I(331));
        var r = oe;
        for (oe |= 4, H = t.current; H !== null; ) {
          var s = H,
            o = s.child;
          if (H.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for (H = c; H !== null; ) {
                  var u = H;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      co(8, u, s);
                  }
                  var d = u.child;
                  if (d !== null) (d.return = u), (H = d);
                  else
                    for (; H !== null; ) {
                      u = H;
                      var h = u.sibling,
                        p = u.return;
                      if ((Ov(u), u === c)) {
                        H = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = p), (H = h);
                        break;
                      }
                      H = p;
                    }
                }
              }
              var g = s.alternate;
              if (g !== null) {
                var y = g.child;
                if (y !== null) {
                  g.child = null;
                  do {
                    var v = y.sibling;
                    (y.sibling = null), (y = v);
                  } while (y !== null);
                }
              }
              H = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (H = o);
          else
            e: for (; H !== null; ) {
              if (((s = H), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    co(9, s, s.return);
                }
              var m = s.sibling;
              if (m !== null) {
                (m.return = s.return), (H = m);
                break e;
              }
              H = s.return;
            }
        }
        var x = t.current;
        for (H = x; H !== null; ) {
          o = H;
          var _ = o.child;
          if (o.subtreeFlags & 2064 && _ !== null) (_.return = o), (H = _);
          else
            e: for (o = x; H !== null; ) {
              if (((a = H), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tc(9, a);
                  }
                } catch (E) {
                  Se(a, a.return, E);
                }
              if (a === o) {
                H = null;
                break e;
              }
              var w = a.sibling;
              if (w !== null) {
                (w.return = a.return), (H = w);
                break e;
              }
              H = a.return;
            }
        }
        if (
          ((oe = r), Oi(), gn && typeof gn.onPostCommitFiberRoot == "function")
        )
          try {
            gn.onPostCommitFiberRoot(_c, t);
          } catch {}
        i = !0;
      }
      return i;
    } finally {
      (de = n), (Bt.transition = e);
    }
  }
  return !1;
}
function U0(t, e, n) {
  (e = es(n, e)),
    (e = mv(t, e, 1)),
    (t = fi(t, e, 1)),
    (e = at()),
    t !== null && (Zo(t, 1, e), xt(t, e));
}
function Se(t, e, n) {
  if (t.tag === 3) U0(t, t, n);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        U0(e, t, n);
        break;
      } else if (e.tag === 1) {
        var i = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == "function" ||
          (typeof i.componentDidCatch == "function" &&
            (hi === null || !hi.has(i)))
        ) {
          (t = es(n, t)),
            (t = yv(e, t, 1)),
            (e = fi(e, t, 1)),
            (t = at()),
            e !== null && (Zo(e, 1, t), xt(e, t));
          break;
        }
      }
      e = e.return;
    }
}
function D3(t, e, n) {
  var i = t.pingCache;
  i !== null && i.delete(e),
    (e = at()),
    (t.pingedLanes |= t.suspendedLanes & n),
    Fe === t &&
      (He & n) === n &&
      (je === 4 || (je === 3 && (He & 130023424) === He && 500 > ke() - kh)
        ? Gi(t, 0)
        : (Ch |= n)),
    xt(t, e);
}
function Iv(t, e) {
  e === 0 &&
    (t.mode & 1
      ? ((e = ba), (ba <<= 1), !(ba & 130023424) && (ba = 4194304))
      : (e = 1));
  var n = at();
  (t = $n(t, e)), t !== null && (Zo(t, e, n), xt(t, n));
}
function R3(t) {
  var e = t.memoizedState,
    n = 0;
  e !== null && (n = e.retryLane), Iv(t, n);
}
function M3(t, e) {
  var n = 0;
  switch (t.tag) {
    case 13:
      var i = t.stateNode,
        r = t.memoizedState;
      r !== null && (n = r.retryLane);
      break;
    case 19:
      i = t.stateNode;
      break;
    default:
      throw Error(I(314));
  }
  i !== null && i.delete(e), Iv(t, n);
}
var $v;
$v = function (t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || yt.current) mt = !0;
    else {
      if (!(t.lanes & n) && !(e.flags & 128)) return (mt = !1), E3(t, e, n);
      mt = !!(t.flags & 131072);
    }
  else (mt = !1), ye && e.flags & 1048576 && zy(e, Rl, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var i = e.type;
      dl(t, e), (t = e.pendingProps);
      var r = Xr(e, tt.current);
      Ur(e, n), (r = xh(null, e, i, t, r, n));
      var s = _h();
      return (
        (e.flags |= 1),
        typeof r == "object" &&
        r !== null &&
        typeof r.render == "function" &&
        r.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            vt(i) ? ((s = !0), jl(e)) : (s = !1),
            (e.memoizedState =
              r.state !== null && r.state !== void 0 ? r.state : null),
            ph(e),
            (r.updater = kc),
            (e.stateNode = r),
            (r._reactInternals = e),
            Wd(e, i, t, n),
            (e = Ud(null, e, i, !0, s, n)))
          : ((e.tag = 0), ye && s && ah(e), rt(null, e, r, n), (e = e.child)),
        e
      );
    case 16:
      i = e.elementType;
      e: {
        switch (
          (dl(t, e),
          (t = e.pendingProps),
          (r = i._init),
          (i = r(i._payload)),
          (e.type = i),
          (r = e.tag = $3(i)),
          (t = Xt(i, t)),
          r)
        ) {
          case 0:
            e = Vd(null, e, i, t, n);
            break e;
          case 1:
            e = R0(null, e, i, t, n);
            break e;
          case 11:
            e = j0(null, e, i, t, n);
            break e;
          case 14:
            e = D0(null, e, i, Xt(i.type, t), n);
            break e;
        }
        throw Error(I(306, i, ""));
      }
      return e;
    case 0:
      return (
        (i = e.type),
        (r = e.pendingProps),
        (r = e.elementType === i ? r : Xt(i, r)),
        Vd(t, e, i, r, n)
      );
    case 1:
      return (
        (i = e.type),
        (r = e.pendingProps),
        (r = e.elementType === i ? r : Xt(i, r)),
        R0(t, e, i, r, n)
      );
    case 3:
      e: {
        if ((bv(e), t === null)) throw Error(I(387));
        (i = e.pendingProps),
          (s = e.memoizedState),
          (r = s.element),
          Uy(t, e),
          $l(e, i, null, n);
        var o = e.memoizedState;
        if (((i = o.element), s.isDehydrated))
          if (
            ((s = {
              element: i,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (e.updateQueue.baseState = s),
            (e.memoizedState = s),
            e.flags & 256)
          ) {
            (r = es(Error(I(423)), e)), (e = M0(t, e, i, n, r));
            break e;
          } else if (i !== r) {
            (r = es(Error(I(424)), e)), (e = M0(t, e, i, n, r));
            break e;
          } else
            for (
              Ct = di(e.stateNode.containerInfo.firstChild),
                kt = e,
                ye = !0,
                Jt = null,
                n = qy(e, null, i, n),
                e.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Qr(), i === r)) {
            e = Fn(t, e, n);
            break e;
          }
          rt(t, e, i, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        Xy(e),
        t === null && Fd(e),
        (i = e.type),
        (r = e.pendingProps),
        (s = t !== null ? t.memoizedProps : null),
        (o = r.children),
        Dd(i, r) ? (o = null) : s !== null && Dd(i, s) && (e.flags |= 32),
        _v(t, e),
        rt(t, e, o, n),
        e.child
      );
    case 6:
      return t === null && Fd(e), null;
    case 13:
      return wv(t, e, n);
    case 4:
      return (
        gh(e, e.stateNode.containerInfo),
        (i = e.pendingProps),
        t === null ? (e.child = Jr(e, null, i, n)) : rt(t, e, i, n),
        e.child
      );
    case 11:
      return (
        (i = e.type),
        (r = e.pendingProps),
        (r = e.elementType === i ? r : Xt(i, r)),
        j0(t, e, i, r, n)
      );
    case 7:
      return rt(t, e, e.pendingProps, n), e.child;
    case 8:
      return rt(t, e, e.pendingProps.children, n), e.child;
    case 12:
      return rt(t, e, e.pendingProps.children, n), e.child;
    case 10:
      e: {
        if (
          ((i = e.type._context),
          (r = e.pendingProps),
          (s = e.memoizedProps),
          (o = r.value),
          fe(Ml, i._currentValue),
          (i._currentValue = o),
          s !== null)
        )
          if (sn(s.value, o)) {
            if (s.children === r.children && !yt.current) {
              e = Fn(t, e, n);
              break e;
            }
          } else
            for (s = e.child, s !== null && (s.return = e); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === i) {
                    if (s.tag === 1) {
                      (l = Pn(-1, n & -n)), (l.tag = 2);
                      var c = s.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var u = c.pending;
                        u === null
                          ? (l.next = l)
                          : ((l.next = u.next), (u.next = l)),
                          (c.pending = l);
                      }
                    }
                    (s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      Bd(s.return, n, e),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) o = s.type === e.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(I(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Bd(o, n, e),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === e) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        rt(t, e, r.children, n), (e = e.child);
      }
      return e;
    case 9:
      return (
        (r = e.type),
        (i = e.pendingProps.children),
        Ur(e, n),
        (r = Wt(r)),
        (i = i(r)),
        (e.flags |= 1),
        rt(t, e, i, n),
        e.child
      );
    case 14:
      return (
        (i = e.type),
        (r = Xt(i, e.pendingProps)),
        (r = Xt(i.type, r)),
        D0(t, e, i, r, n)
      );
    case 15:
      return vv(t, e, e.type, e.pendingProps, n);
    case 17:
      return (
        (i = e.type),
        (r = e.pendingProps),
        (r = e.elementType === i ? r : Xt(i, r)),
        dl(t, e),
        (e.tag = 1),
        vt(i) ? ((t = !0), jl(e)) : (t = !1),
        Ur(e, n),
        Ky(e, i, r),
        Wd(e, i, r, n),
        Ud(null, e, i, !0, t, n)
      );
    case 19:
      return Ev(t, e, n);
    case 22:
      return xv(t, e, n);
  }
  throw Error(I(156, e.tag));
};
function Fv(t, e) {
  return dy(t, e);
}
function I3(t, e, n, i) {
  (this.tag = t),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = e),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = i),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function It(t, e, n, i) {
  return new I3(t, e, n, i);
}
function Ah(t) {
  return (t = t.prototype), !(!t || !t.isReactComponent);
}
function $3(t) {
  if (typeof t == "function") return Ah(t) ? 1 : 0;
  if (t != null) {
    if (((t = t.$$typeof), t === qf)) return 11;
    if (t === Xf) return 14;
  }
  return 2;
}
function gi(t, e) {
  var n = t.alternate;
  return (
    n === null
      ? ((n = It(t.tag, e, t.key, t.mode)),
        (n.elementType = t.elementType),
        (n.type = t.type),
        (n.stateNode = t.stateNode),
        (n.alternate = t),
        (t.alternate = n))
      : ((n.pendingProps = e),
        (n.type = t.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = t.flags & 14680064),
    (n.childLanes = t.childLanes),
    (n.lanes = t.lanes),
    (n.child = t.child),
    (n.memoizedProps = t.memoizedProps),
    (n.memoizedState = t.memoizedState),
    (n.updateQueue = t.updateQueue),
    (e = t.dependencies),
    (n.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (n.sibling = t.sibling),
    (n.index = t.index),
    (n.ref = t.ref),
    n
  );
}
function pl(t, e, n, i, r, s) {
  var o = 2;
  if (((i = t), typeof t == "function")) Ah(t) && (o = 1);
  else if (typeof t == "string") o = 5;
  else
    e: switch (t) {
      case Or:
        return qi(n.children, r, s, e);
      case Gf:
        (o = 8), (r |= 8);
        break;
      case fd:
        return (
          (t = It(12, n, e, r | 2)), (t.elementType = fd), (t.lanes = s), t
        );
      case hd:
        return (t = It(13, n, e, r)), (t.elementType = hd), (t.lanes = s), t;
      case pd:
        return (t = It(19, n, e, r)), (t.elementType = pd), (t.lanes = s), t;
      case G1:
        return Ac(n, r, s, e);
      default:
        if (typeof t == "object" && t !== null)
          switch (t.$$typeof) {
            case Y1:
              o = 10;
              break e;
            case K1:
              o = 9;
              break e;
            case qf:
              o = 11;
              break e;
            case Xf:
              o = 14;
              break e;
            case Qn:
              (o = 16), (i = null);
              break e;
          }
        throw Error(I(130, t == null ? t : typeof t, ""));
    }
  return (
    (e = It(o, n, e, r)), (e.elementType = t), (e.type = i), (e.lanes = s), e
  );
}
function qi(t, e, n, i) {
  return (t = It(7, t, i, e)), (t.lanes = n), t;
}
function Ac(t, e, n, i) {
  return (
    (t = It(22, t, i, e)),
    (t.elementType = G1),
    (t.lanes = n),
    (t.stateNode = { isHidden: !1 }),
    t
  );
}
function ku(t, e, n) {
  return (t = It(6, t, null, e)), (t.lanes = n), t;
}
function Ou(t, e, n) {
  return (
    (e = It(4, t.children !== null ? t.children : [], t.key, e)),
    (e.lanes = n),
    (e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation,
    }),
    e
  );
}
function F3(t, e, n, i, r) {
  (this.tag = e),
    (this.containerInfo = t),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = au(0)),
    (this.expirationTimes = au(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = au(0)),
    (this.identifierPrefix = i),
    (this.onRecoverableError = r),
    (this.mutableSourceEagerHydrationData = null);
}
function Ph(t, e, n, i, r, s, o, a, l) {
  return (
    (t = new F3(t, e, n, a, l)),
    e === 1 ? ((e = 1), s === !0 && (e |= 8)) : (e = 0),
    (s = It(3, null, null, e)),
    (t.current = s),
    (s.stateNode = t),
    (s.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ph(s),
    t
  );
}
function B3(t, e, n) {
  var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: kr,
    key: i == null ? null : "" + i,
    children: t,
    containerInfo: e,
    implementation: n,
  };
}
function Bv(t) {
  if (!t) return xi;
  t = t._reactInternals;
  e: {
    if (cr(t) !== t || t.tag !== 1) throw Error(I(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (vt(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(I(171));
  }
  if (t.tag === 1) {
    var n = t.type;
    if (vt(n)) return Fy(t, n, e);
  }
  return e;
}
function zv(t, e, n, i, r, s, o, a, l) {
  return (
    (t = Ph(n, i, !0, t, r, s, o, a, l)),
    (t.context = Bv(null)),
    (n = t.current),
    (i = at()),
    (r = pi(n)),
    (s = Pn(i, r)),
    (s.callback = e ?? null),
    fi(n, s, r),
    (t.current.lanes = r),
    Zo(t, r, i),
    xt(t, i),
    t
  );
}
function Pc(t, e, n, i) {
  var r = e.current,
    s = at(),
    o = pi(r);
  return (
    (n = Bv(n)),
    e.context === null ? (e.context = n) : (e.pendingContext = n),
    (e = Pn(s, o)),
    (e.payload = { element: t }),
    (i = i === void 0 ? null : i),
    i !== null && (e.callback = i),
    (t = fi(r, e, o)),
    t !== null && (nn(t, r, o, s), ll(t, r, o)),
    o
  );
}
function Yl(t) {
  if (((t = t.current), !t.child)) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function Y0(t, e) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function Lh(t, e) {
  Y0(t, e), (t = t.alternate) && Y0(t, e);
}
function z3() {
  return null;
}
var Wv =
  typeof reportError == "function"
    ? reportError
    : function (t) {
        console.error(t);
      };
function jh(t) {
  this._internalRoot = t;
}
Lc.prototype.render = jh.prototype.render = function (t) {
  var e = this._internalRoot;
  if (e === null) throw Error(I(409));
  Pc(t, e, null, null);
};
Lc.prototype.unmount = jh.prototype.unmount = function () {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    ir(function () {
      Pc(null, t, null, null);
    }),
      (e[In] = null);
  }
};
function Lc(t) {
  this._internalRoot = t;
}
Lc.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var e = vy();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < ti.length && e !== 0 && e < ti[n].priority; n++);
    ti.splice(n, 0, t), n === 0 && _y(t);
  }
};
function Dh(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function jc(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
  );
}
function K0() {}
function W3(t, e, n, i, r) {
  if (r) {
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var c = Yl(o);
        s.call(c);
      };
    }
    var o = zv(e, i, t, 0, null, !1, !1, "", K0);
    return (
      (t._reactRootContainer = o),
      (t[In] = o.current),
      Po(t.nodeType === 8 ? t.parentNode : t),
      ir(),
      o
    );
  }
  for (; (r = t.lastChild); ) t.removeChild(r);
  if (typeof i == "function") {
    var a = i;
    i = function () {
      var c = Yl(l);
      a.call(c);
    };
  }
  var l = Ph(t, 0, !1, null, null, !1, !1, "", K0);
  return (
    (t._reactRootContainer = l),
    (t[In] = l.current),
    Po(t.nodeType === 8 ? t.parentNode : t),
    ir(function () {
      Pc(e, l, n, i);
    }),
    l
  );
}
function Dc(t, e, n, i, r) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof r == "function") {
      var a = r;
      r = function () {
        var l = Yl(o);
        a.call(l);
      };
    }
    Pc(e, o, t, r);
  } else o = W3(n, e, t, r, i);
  return Yl(o);
}
my = function (t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = qs(e.pendingLanes);
        n !== 0 &&
          (Zf(e, n | 1), xt(e, ke()), !(oe & 6) && ((ts = ke() + 500), Oi()));
      }
      break;
    case 13:
      ir(function () {
        var i = $n(t, 1);
        if (i !== null) {
          var r = at();
          nn(i, t, 1, r);
        }
      }),
        Lh(t, 1);
  }
};
eh = function (t) {
  if (t.tag === 13) {
    var e = $n(t, 134217728);
    if (e !== null) {
      var n = at();
      nn(e, t, 134217728, n);
    }
    Lh(t, 134217728);
  }
};
yy = function (t) {
  if (t.tag === 13) {
    var e = pi(t),
      n = $n(t, e);
    if (n !== null) {
      var i = at();
      nn(n, t, e, i);
    }
    Lh(t, e);
  }
};
vy = function () {
  return de;
};
xy = function (t, e) {
  var n = de;
  try {
    return (de = t), e();
  } finally {
    de = n;
  }
};
Sd = function (t, e, n) {
  switch (e) {
    case "input":
      if ((yd(t, n), (e = n.name), n.type === "radio" && e != null)) {
        for (n = t; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + e) + '][type="radio"]',
          ),
            e = 0;
          e < n.length;
          e++
        ) {
          var i = n[e];
          if (i !== t && i.form === t.form) {
            var r = Sc(i);
            if (!r) throw Error(I(90));
            X1(i), yd(i, r);
          }
        }
      }
      break;
    case "textarea":
      J1(t, n);
      break;
    case "select":
      (e = n.value), e != null && zr(t, !!n.multiple, e, !1);
  }
};
sy = Oh;
oy = ir;
var H3 = { usingClientEntryPoint: !1, Events: [ta, Pr, Sc, iy, ry, Oh] },
  Is = {
    findFiberByHostInstance: Bi,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  V3 = {
    bundleType: Is.bundleType,
    version: Is.version,
    rendererPackageName: Is.rendererPackageName,
    rendererConfig: Is.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Wn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return (t = cy(t)), t === null ? null : t.stateNode;
    },
    findFiberByHostInstance: Is.findFiberByHostInstance || z3,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var La = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!La.isDisabled && La.supportsFiber)
    try {
      (_c = La.inject(V3)), (gn = La);
    } catch {}
}
Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = H3;
Lt.createPortal = function (t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Dh(e)) throw Error(I(200));
  return B3(t, e, null, n);
};
Lt.createRoot = function (t, e) {
  if (!Dh(t)) throw Error(I(299));
  var n = !1,
    i = "",
    r = Wv;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (n = !0),
      e.identifierPrefix !== void 0 && (i = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (r = e.onRecoverableError)),
    (e = Ph(t, 1, !1, null, null, n, !1, i, r)),
    (t[In] = e.current),
    Po(t.nodeType === 8 ? t.parentNode : t),
    new jh(e)
  );
};
Lt.findDOMNode = function (t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function"
      ? Error(I(188))
      : ((t = Object.keys(t).join(",")), Error(I(268, t)));
  return (t = cy(e)), (t = t === null ? null : t.stateNode), t;
};
Lt.flushSync = function (t) {
  return ir(t);
};
Lt.hydrate = function (t, e, n) {
  if (!jc(e)) throw Error(I(200));
  return Dc(null, t, e, !0, n);
};
Lt.hydrateRoot = function (t, e, n) {
  if (!Dh(t)) throw Error(I(405));
  var i = (n != null && n.hydratedSources) || null,
    r = !1,
    s = "",
    o = Wv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (r = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (e = zv(e, null, t, 1, n ?? null, r, !1, s, o)),
    (t[In] = e.current),
    Po(t),
    i)
  )
    for (t = 0; t < i.length; t++)
      (n = i[t]),
        (r = n._getVersion),
        (r = r(n._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [n, r])
          : e.mutableSourceEagerHydrationData.push(n, r);
  return new Lc(e);
};
Lt.render = function (t, e, n) {
  if (!jc(e)) throw Error(I(200));
  return Dc(null, t, e, !1, n);
};
Lt.unmountComponentAtNode = function (t) {
  if (!jc(t)) throw Error(I(40));
  return t._reactRootContainer
    ? (ir(function () {
        Dc(null, null, t, !1, function () {
          (t._reactRootContainer = null), (t[In] = null);
        });
      }),
      !0)
    : !1;
};
Lt.unstable_batchedUpdates = Oh;
Lt.unstable_renderSubtreeIntoContainer = function (t, e, n, i) {
  if (!jc(n)) throw Error(I(200));
  if (t == null || t._reactInternals === void 0) throw Error(I(38));
  return Dc(t, e, n, !1, i);
};
Lt.version = "18.2.0-next-9e3b772b8-20220608";
function Hv() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hv);
    } catch (t) {
      console.error(t);
    }
}
Hv(), (z1.exports = Lt);
var Vv = z1.exports;
const $r = gs(Vv);
var G0 = Vv;
(ud.createRoot = G0.createRoot), (ud.hydrateRoot = G0.hydrateRoot);
/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Bo() {
  return (
    (Bo = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
    Bo.apply(this, arguments)
  );
}
var oi;
(function (t) {
  (t.Pop = "POP"), (t.Push = "PUSH"), (t.Replace = "REPLACE");
})(oi || (oi = {}));
const q0 = "popstate";
function U3(t) {
  t === void 0 && (t = {});
  function e(i, r) {
    let { pathname: s, search: o, hash: a } = i.location;
    return rf(
      "",
      { pathname: s, search: o, hash: a },
      (r.state && r.state.usr) || null,
      (r.state && r.state.key) || "default",
    );
  }
  function n(i, r) {
    return typeof r == "string" ? r : Kl(r);
  }
  return K3(e, n, null, t);
}
function Pe(t, e) {
  if (t === !1 || t === null || typeof t > "u") throw new Error(e);
}
function Rh(t, e) {
  if (!t) {
    typeof console < "u" && console.warn(e);
    try {
      throw new Error(e);
    } catch {}
  }
}
function Y3() {
  return Math.random().toString(36).substr(2, 8);
}
function X0(t, e) {
  return { usr: t.state, key: t.key, idx: e };
}
function rf(t, e, n, i) {
  return (
    n === void 0 && (n = null),
    Bo(
      { pathname: typeof t == "string" ? t : t.pathname, search: "", hash: "" },
      typeof e == "string" ? xs(e) : e,
      { state: n, key: (e && e.key) || i || Y3() },
    )
  );
}
function Kl(t) {
  let { pathname: e = "/", search: n = "", hash: i = "" } = t;
  return (
    n && n !== "?" && (e += n.charAt(0) === "?" ? n : "?" + n),
    i && i !== "#" && (e += i.charAt(0) === "#" ? i : "#" + i),
    e
  );
}
function xs(t) {
  let e = {};
  if (t) {
    let n = t.indexOf("#");
    n >= 0 && ((e.hash = t.substr(n)), (t = t.substr(0, n)));
    let i = t.indexOf("?");
    i >= 0 && ((e.search = t.substr(i)), (t = t.substr(0, i))),
      t && (e.pathname = t);
  }
  return e;
}
function K3(t, e, n, i) {
  i === void 0 && (i = {});
  let { window: r = document.defaultView, v5Compat: s = !1 } = i,
    o = r.history,
    a = oi.Pop,
    l = null,
    c = u();
  c == null && ((c = 0), o.replaceState(Bo({}, o.state, { idx: c }), ""));
  function u() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    a = oi.Pop;
    let v = u(),
      m = v == null ? null : v - c;
    (c = v), l && l({ action: a, location: y.location, delta: m });
  }
  function h(v, m) {
    a = oi.Push;
    let x = rf(y.location, v, m);
    c = u() + 1;
    let _ = X0(x, c),
      w = y.createHref(x);
    try {
      o.pushState(_, "", w);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      r.location.assign(w);
    }
    s && l && l({ action: a, location: y.location, delta: 1 });
  }
  function p(v, m) {
    a = oi.Replace;
    let x = rf(y.location, v, m);
    c = u();
    let _ = X0(x, c),
      w = y.createHref(x);
    o.replaceState(_, "", w),
      s && l && l({ action: a, location: y.location, delta: 0 });
  }
  function g(v) {
    let m = r.location.origin !== "null" ? r.location.origin : r.location.href,
      x = typeof v == "string" ? v : Kl(v);
    return (
      Pe(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          x,
      ),
      new URL(x, m)
    );
  }
  let y = {
    get action() {
      return a;
    },
    get location() {
      return t(r, o);
    },
    listen(v) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        r.addEventListener(q0, d),
        (l = v),
        () => {
          r.removeEventListener(q0, d), (l = null);
        }
      );
    },
    createHref(v) {
      return e(r, v);
    },
    createURL: g,
    encodeLocation(v) {
      let m = g(v);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: h,
    replace: p,
    go(v) {
      return o.go(v);
    },
  };
  return y;
}
var Q0;
(function (t) {
  (t.data = "data"),
    (t.deferred = "deferred"),
    (t.redirect = "redirect"),
    (t.error = "error");
})(Q0 || (Q0 = {}));
function G3(t, e, n) {
  n === void 0 && (n = "/");
  let i = typeof e == "string" ? xs(e) : e,
    r = Mh(i.pathname || "/", n);
  if (r == null) return null;
  let s = Uv(t);
  q3(s);
  let o = null;
  for (let a = 0; o == null && a < s.length; ++a) o = rE(s[a], aE(r));
  return o;
}
function Uv(t, e, n, i) {
  e === void 0 && (e = []), n === void 0 && (n = []), i === void 0 && (i = "");
  let r = (s, o, a) => {
    let l = {
      relativePath: a === void 0 ? s.path || "" : a,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    };
    l.relativePath.startsWith("/") &&
      (Pe(
        l.relativePath.startsWith(i),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + i + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (l.relativePath = l.relativePath.slice(i.length)));
    let c = mi([i, l.relativePath]),
      u = n.concat(l);
    s.children &&
      s.children.length > 0 &&
      (Pe(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".'),
      ),
      Uv(s.children, e, u, c)),
      !(s.path == null && !s.index) &&
        e.push({ path: c, score: nE(c, s.index), routesMeta: u });
  };
  return (
    t.forEach((s, o) => {
      var a;
      if (s.path === "" || !((a = s.path) != null && a.includes("?"))) r(s, o);
      else for (let l of Yv(s.path)) r(s, o, l);
    }),
    e
  );
}
function Yv(t) {
  let e = t.split("/");
  if (e.length === 0) return [];
  let [n, ...i] = e,
    r = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (i.length === 0) return r ? [s, ""] : [s];
  let o = Yv(i.join("/")),
    a = [];
  return (
    a.push(...o.map((l) => (l === "" ? s : [s, l].join("/")))),
    r && a.push(...o),
    a.map((l) => (t.startsWith("/") && l === "" ? "/" : l))
  );
}
function q3(t) {
  t.sort((e, n) =>
    e.score !== n.score
      ? n.score - e.score
      : iE(
          e.routesMeta.map((i) => i.childrenIndex),
          n.routesMeta.map((i) => i.childrenIndex),
        ),
  );
}
const X3 = /^:\w+$/,
  Q3 = 3,
  J3 = 2,
  Z3 = 1,
  eE = 10,
  tE = -2,
  J0 = (t) => t === "*";
function nE(t, e) {
  let n = t.split("/"),
    i = n.length;
  return (
    n.some(J0) && (i += tE),
    e && (i += J3),
    n
      .filter((r) => !J0(r))
      .reduce((r, s) => r + (X3.test(s) ? Q3 : s === "" ? Z3 : eE), i)
  );
}
function iE(t, e) {
  return t.length === e.length && t.slice(0, -1).every((i, r) => i === e[r])
    ? t[t.length - 1] - e[e.length - 1]
    : 0;
}
function rE(t, e) {
  let { routesMeta: n } = t,
    i = {},
    r = "/",
    s = [];
  for (let o = 0; o < n.length; ++o) {
    let a = n[o],
      l = o === n.length - 1,
      c = r === "/" ? e : e.slice(r.length) || "/",
      u = sE(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: l },
        c,
      );
    if (!u) return null;
    Object.assign(i, u.params);
    let d = a.route;
    s.push({
      params: i,
      pathname: mi([r, u.pathname]),
      pathnameBase: dE(mi([r, u.pathnameBase])),
      route: d,
    }),
      u.pathnameBase !== "/" && (r = mi([r, u.pathnameBase]));
  }
  return s;
}
function sE(t, e) {
  typeof t == "string" && (t = { path: t, caseSensitive: !1, end: !0 });
  let [n, i] = oE(t.path, t.caseSensitive, t.end),
    r = e.match(n);
  if (!r) return null;
  let s = r[0],
    o = s.replace(/(.)\/+$/, "$1"),
    a = r.slice(1);
  return {
    params: i.reduce((c, u, d) => {
      if (u === "*") {
        let h = a[d] || "";
        o = s.slice(0, s.length - h.length).replace(/(.)\/+$/, "$1");
      }
      return (c[u] = lE(a[d] || "", u)), c;
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: t,
  };
}
function oE(t, e, n) {
  e === void 0 && (e = !1),
    n === void 0 && (n = !0),
    Rh(
      t === "*" || !t.endsWith("*") || t.endsWith("/*"),
      'Route path "' +
        t +
        '" will be treated as if it were ' +
        ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'),
    );
  let i = [],
    r =
      "^" +
      t
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (o, a) => (i.push(a), "/([^\\/]+)"));
  return (
    t.endsWith("*")
      ? (i.push("*"),
        (r += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (r += "\\/*$")
      : t !== "" && t !== "/" && (r += "(?:(?=\\/|$))"),
    [new RegExp(r, e ? void 0 : "i"), i]
  );
}
function aE(t) {
  try {
    return decodeURI(t);
  } catch (e) {
    return (
      Rh(
        !1,
        'The URL path "' +
          t +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + e + ")."),
      ),
      t
    );
  }
}
function lE(t, e) {
  try {
    return decodeURIComponent(t);
  } catch (n) {
    return (
      Rh(
        !1,
        'The value for the URL param "' +
          e +
          '" will not be decoded because' +
          (' the string "' +
            t +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ")."),
      ),
      t
    );
  }
}
function Mh(t, e) {
  if (e === "/") return t;
  if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
  let n = e.endsWith("/") ? e.length - 1 : e.length,
    i = t.charAt(n);
  return i && i !== "/" ? null : t.slice(n) || "/";
}
function cE(t, e) {
  e === void 0 && (e = "/");
  let {
    pathname: n,
    search: i = "",
    hash: r = "",
  } = typeof t == "string" ? xs(t) : t;
  return {
    pathname: n ? (n.startsWith("/") ? n : uE(n, e)) : e,
    search: fE(i),
    hash: hE(r),
  };
}
function uE(t, e) {
  let n = e.replace(/\/+$/, "").split("/");
  return (
    t.split("/").forEach((r) => {
      r === ".." ? n.length > 1 && n.pop() : r !== "." && n.push(r);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Tu(t, e, n, i) {
  return (
    "Cannot include a '" +
    t +
    "' character in a manually specified " +
    ("`to." +
      e +
      "` field [" +
      JSON.stringify(i) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Kv(t) {
  return t.filter(
    (e, n) => n === 0 || (e.route.path && e.route.path.length > 0),
  );
}
function Gv(t, e, n, i) {
  i === void 0 && (i = !1);
  let r;
  typeof t == "string"
    ? (r = xs(t))
    : ((r = Bo({}, t)),
      Pe(
        !r.pathname || !r.pathname.includes("?"),
        Tu("?", "pathname", "search", r),
      ),
      Pe(
        !r.pathname || !r.pathname.includes("#"),
        Tu("#", "pathname", "hash", r),
      ),
      Pe(!r.search || !r.search.includes("#"), Tu("#", "search", "hash", r)));
  let s = t === "" || r.pathname === "",
    o = s ? "/" : r.pathname,
    a;
  if (i || o == null) a = n;
  else {
    let d = e.length - 1;
    if (o.startsWith("..")) {
      let h = o.split("/");
      for (; h[0] === ".."; ) h.shift(), (d -= 1);
      r.pathname = h.join("/");
    }
    a = d >= 0 ? e[d] : "/";
  }
  let l = cE(r, a),
    c = o && o !== "/" && o.endsWith("/"),
    u = (s || o === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (c || u) && (l.pathname += "/"), l;
}
const mi = (t) => t.join("/").replace(/\/\/+/g, "/"),
  dE = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"),
  fE = (t) => (!t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t),
  hE = (t) => (!t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t);
function pE(t) {
  return (
    t != null &&
    typeof t.status == "number" &&
    typeof t.statusText == "string" &&
    typeof t.internal == "boolean" &&
    "data" in t
  );
}
const qv = ["post", "put", "patch", "delete"];
new Set(qv);
const gE = ["get", ...qv];
new Set(gE);
/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Gl() {
  return (
    (Gl = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
    Gl.apply(this, arguments)
  );
}
const Ih = b.createContext(null),
  Xv = b.createContext(null),
  ur = b.createContext(null),
  Rc = b.createContext(null),
  dr = b.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Qv = b.createContext(null);
function mE(t, e) {
  let { relative: n } = e === void 0 ? {} : e;
  ia() || Pe(!1);
  let { basename: i, navigator: r } = b.useContext(ur),
    { hash: s, pathname: o, search: a } = Fh(t, { relative: n }),
    l = o;
  return (
    i !== "/" && (l = o === "/" ? i : mi([i, o])),
    r.createHref({ pathname: l, search: a, hash: s })
  );
}
function ia() {
  return b.useContext(Rc) != null;
}
function _s() {
  return ia() || Pe(!1), b.useContext(Rc).location;
}
function Jv(t) {
  b.useContext(ur).static || b.useLayoutEffect(t);
}
function $h() {
  let { isDataRoute: t } = b.useContext(dr);
  return t ? NE() : yE();
}
function yE() {
  ia() || Pe(!1);
  let t = b.useContext(Ih),
    { basename: e, navigator: n } = b.useContext(ur),
    { matches: i } = b.useContext(dr),
    { pathname: r } = _s(),
    s = JSON.stringify(Kv(i).map((l) => l.pathnameBase)),
    o = b.useRef(!1);
  return (
    Jv(() => {
      o.current = !0;
    }),
    b.useCallback(
      function (l, c) {
        if ((c === void 0 && (c = {}), !o.current)) return;
        if (typeof l == "number") {
          n.go(l);
          return;
        }
        let u = Gv(l, JSON.parse(s), r, c.relative === "path");
        t == null &&
          e !== "/" &&
          (u.pathname = u.pathname === "/" ? e : mi([e, u.pathname])),
          (c.replace ? n.replace : n.push)(u, c.state, c);
      },
      [e, n, s, r, t],
    )
  );
}
function Fh(t, e) {
  let { relative: n } = e === void 0 ? {} : e,
    { matches: i } = b.useContext(dr),
    { pathname: r } = _s(),
    s = JSON.stringify(Kv(i).map((o) => o.pathnameBase));
  return b.useMemo(() => Gv(t, JSON.parse(s), r, n === "path"), [t, s, r, n]);
}
function vE(t, e) {
  return xE(t, e);
}
function xE(t, e, n) {
  ia() || Pe(!1);
  let { navigator: i } = b.useContext(ur),
    { matches: r } = b.useContext(dr),
    s = r[r.length - 1],
    o = s ? s.params : {};
  s && s.pathname;
  let a = s ? s.pathnameBase : "/";
  s && s.route;
  let l = _s(),
    c;
  if (e) {
    var u;
    let y = typeof e == "string" ? xs(e) : e;
    a === "/" || ((u = y.pathname) != null && u.startsWith(a)) || Pe(!1),
      (c = y);
  } else c = l;
  let d = c.pathname || "/",
    h = a === "/" ? d : d.slice(a.length) || "/",
    p = G3(t, { pathname: h }),
    g = SE(
      p &&
        p.map((y) =>
          Object.assign({}, y, {
            params: Object.assign({}, o, y.params),
            pathname: mi([
              a,
              i.encodeLocation
                ? i.encodeLocation(y.pathname).pathname
                : y.pathname,
            ]),
            pathnameBase:
              y.pathnameBase === "/"
                ? a
                : mi([
                    a,
                    i.encodeLocation
                      ? i.encodeLocation(y.pathnameBase).pathname
                      : y.pathnameBase,
                  ]),
          }),
        ),
      r,
      n,
    );
  return e && g
    ? b.createElement(
        Rc.Provider,
        {
          value: {
            location: Gl(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c,
            ),
            navigationType: oi.Pop,
          },
        },
        g,
      )
    : g;
}
function _E() {
  let t = TE(),
    e = pE(t)
      ? t.status + " " + t.statusText
      : t instanceof Error
      ? t.message
      : JSON.stringify(t),
    n = t instanceof Error ? t.stack : null,
    r = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return b.createElement(
    b.Fragment,
    null,
    b.createElement("h2", null, "Unexpected Application Error!"),
    b.createElement("h3", { style: { fontStyle: "italic" } }, e),
    n ? b.createElement("pre", { style: r }, n) : null,
    null,
  );
}
const bE = b.createElement(_E, null);
class wE extends b.Component {
  constructor(e) {
    super(e),
      (this.state = {
        location: e.location,
        revalidation: e.revalidation,
        error: e.error,
      });
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, n) {
    return n.location !== e.location ||
      (n.revalidation !== "idle" && e.revalidation === "idle")
      ? { error: e.error, location: e.location, revalidation: e.revalidation }
      : {
          error: e.error || n.error,
          location: n.location,
          revalidation: e.revalidation || n.revalidation,
        };
  }
  componentDidCatch(e, n) {
    console.error(
      "React Router caught the following error during render",
      e,
      n,
    );
  }
  render() {
    return this.state.error
      ? b.createElement(
          dr.Provider,
          { value: this.props.routeContext },
          b.createElement(Qv.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function EE(t) {
  let { routeContext: e, match: n, children: i } = t,
    r = b.useContext(Ih);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = n.route.id),
    b.createElement(dr.Provider, { value: e }, i)
  );
}
function SE(t, e, n) {
  var i;
  if ((e === void 0 && (e = []), n === void 0 && (n = null), t == null)) {
    var r;
    if ((r = n) != null && r.errors) t = n.matches;
    else return null;
  }
  let s = t,
    o = (i = n) == null ? void 0 : i.errors;
  if (o != null) {
    let a = s.findIndex(
      (l) => l.route.id && (o == null ? void 0 : o[l.route.id]),
    );
    a >= 0 || Pe(!1), (s = s.slice(0, Math.min(s.length, a + 1)));
  }
  return s.reduceRight((a, l, c) => {
    let u = l.route.id ? (o == null ? void 0 : o[l.route.id]) : null,
      d = null;
    n && (d = l.route.errorElement || bE);
    let h = e.concat(s.slice(0, c + 1)),
      p = () => {
        let g;
        return (
          u
            ? (g = d)
            : l.route.Component
            ? (g = b.createElement(l.route.Component, null))
            : l.route.element
            ? (g = l.route.element)
            : (g = a),
          b.createElement(EE, {
            match: l,
            routeContext: { outlet: a, matches: h, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (l.route.ErrorBoundary || l.route.errorElement || c === 0)
      ? b.createElement(wE, {
          location: n.location,
          revalidation: n.revalidation,
          component: d,
          error: u,
          children: p(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var sf;
(function (t) {
  (t.UseBlocker = "useBlocker"),
    (t.UseRevalidator = "useRevalidator"),
    (t.UseNavigateStable = "useNavigate");
})(sf || (sf = {}));
var zo;
(function (t) {
  (t.UseBlocker = "useBlocker"),
    (t.UseLoaderData = "useLoaderData"),
    (t.UseActionData = "useActionData"),
    (t.UseRouteError = "useRouteError"),
    (t.UseNavigation = "useNavigation"),
    (t.UseRouteLoaderData = "useRouteLoaderData"),
    (t.UseMatches = "useMatches"),
    (t.UseRevalidator = "useRevalidator"),
    (t.UseNavigateStable = "useNavigate"),
    (t.UseRouteId = "useRouteId");
})(zo || (zo = {}));
function CE(t) {
  let e = b.useContext(Ih);
  return e || Pe(!1), e;
}
function kE(t) {
  let e = b.useContext(Xv);
  return e || Pe(!1), e;
}
function OE(t) {
  let e = b.useContext(dr);
  return e || Pe(!1), e;
}
function Zv(t) {
  let e = OE(),
    n = e.matches[e.matches.length - 1];
  return n.route.id || Pe(!1), n.route.id;
}
function TE() {
  var t;
  let e = b.useContext(Qv),
    n = kE(zo.UseRouteError),
    i = Zv(zo.UseRouteError);
  return e || ((t = n.errors) == null ? void 0 : t[i]);
}
function NE() {
  let { router: t } = CE(sf.UseNavigateStable),
    e = Zv(zo.UseNavigateStable),
    n = b.useRef(!1);
  return (
    Jv(() => {
      n.current = !0;
    }),
    b.useCallback(
      function (r, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof r == "number"
              ? t.navigate(r)
              : t.navigate(r, Gl({ fromRouteId: e }, s)));
      },
      [t, e],
    )
  );
}
function Me(t) {
  Pe(!1);
}
function AE(t) {
  let {
    basename: e = "/",
    children: n = null,
    location: i,
    navigationType: r = oi.Pop,
    navigator: s,
    static: o = !1,
  } = t;
  ia() && Pe(!1);
  let a = e.replace(/^\/*/, "/"),
    l = b.useMemo(() => ({ basename: a, navigator: s, static: o }), [a, s, o]);
  typeof i == "string" && (i = xs(i));
  let {
      pathname: c = "/",
      search: u = "",
      hash: d = "",
      state: h = null,
      key: p = "default",
    } = i,
    g = b.useMemo(() => {
      let y = Mh(c, a);
      return y == null
        ? null
        : {
            location: { pathname: y, search: u, hash: d, state: h, key: p },
            navigationType: r,
          };
    }, [a, c, u, d, h, p, r]);
  return g == null
    ? null
    : b.createElement(
        ur.Provider,
        { value: l },
        b.createElement(Rc.Provider, { children: n, value: g }),
      );
}
function Z0(t) {
  let { children: e, location: n } = t;
  return vE(of(e), n);
}
var eg;
(function (t) {
  (t[(t.pending = 0)] = "pending"),
    (t[(t.success = 1)] = "success"),
    (t[(t.error = 2)] = "error");
})(eg || (eg = {}));
new Promise(() => {});
function of(t, e) {
  e === void 0 && (e = []);
  let n = [];
  return (
    b.Children.forEach(t, (i, r) => {
      if (!b.isValidElement(i)) return;
      let s = [...e, r];
      if (i.type === b.Fragment) {
        n.push.apply(n, of(i.props.children, s));
        return;
      }
      i.type !== Me && Pe(!1), !i.props.index || !i.props.children || Pe(!1);
      let o = {
        id: i.props.id || s.join("-"),
        caseSensitive: i.props.caseSensitive,
        element: i.props.element,
        Component: i.props.Component,
        index: i.props.index,
        path: i.props.path,
        loader: i.props.loader,
        action: i.props.action,
        errorElement: i.props.errorElement,
        ErrorBoundary: i.props.ErrorBoundary,
        hasErrorBoundary:
          i.props.ErrorBoundary != null || i.props.errorElement != null,
        shouldRevalidate: i.props.shouldRevalidate,
        handle: i.props.handle,
        lazy: i.props.lazy,
      };
      i.props.children && (o.children = of(i.props.children, s)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ql() {
  return (
    (ql = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
    ql.apply(this, arguments)
  );
}
function e2(t, e) {
  if (t == null) return {};
  var n = {},
    i = Object.keys(t),
    r,
    s;
  for (s = 0; s < i.length; s++)
    (r = i[s]), !(e.indexOf(r) >= 0) && (n[r] = t[r]);
  return n;
}
function PE(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
function LE(t, e) {
  return t.button === 0 && (!e || e === "_self") && !PE(t);
}
const jE = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  DE = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "children",
  ],
  RE = "startTransition",
  tg = Rb[RE];
function ME(t) {
  let { basename: e, children: n, future: i, window: r } = t,
    s = b.useRef();
  s.current == null && (s.current = U3({ window: r, v5Compat: !0 }));
  let o = s.current,
    [a, l] = b.useState({ action: o.action, location: o.location }),
    { v7_startTransition: c } = i || {},
    u = b.useCallback(
      (d) => {
        c && tg ? tg(() => l(d)) : l(d);
      },
      [l, c],
    );
  return (
    b.useLayoutEffect(() => o.listen(u), [o, u]),
    b.createElement(AE, {
      basename: e,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: o,
    })
  );
}
const IE =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  $E = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ns = b.forwardRef(function (e, n) {
    let {
        onClick: i,
        relative: r,
        reloadDocument: s,
        replace: o,
        state: a,
        target: l,
        to: c,
        preventScrollReset: u,
      } = e,
      d = e2(e, jE),
      { basename: h } = b.useContext(ur),
      p,
      g = !1;
    if (typeof c == "string" && $E.test(c) && ((p = c), IE))
      try {
        let x = new URL(window.location.href),
          _ = c.startsWith("//") ? new URL(x.protocol + c) : new URL(c),
          w = Mh(_.pathname, h);
        _.origin === x.origin && w != null
          ? (c = w + _.search + _.hash)
          : (g = !0);
      } catch {}
    let y = mE(c, { relative: r }),
      v = FE(c, {
        replace: o,
        state: a,
        target: l,
        preventScrollReset: u,
        relative: r,
      });
    function m(x) {
      i && i(x), x.defaultPrevented || v(x);
    }
    return b.createElement(
      "a",
      ql({}, d, { href: p || y, onClick: g || s ? i : m, ref: n, target: l }),
    );
  }),
  Xe = b.forwardRef(function (e, n) {
    let {
        "aria-current": i = "page",
        caseSensitive: r = !1,
        className: s = "",
        end: o = !1,
        style: a,
        to: l,
        children: c,
      } = e,
      u = e2(e, DE),
      d = Fh(l, { relative: u.relative }),
      h = _s(),
      p = b.useContext(Xv),
      { navigator: g } = b.useContext(ur),
      y = g.encodeLocation ? g.encodeLocation(d).pathname : d.pathname,
      v = h.pathname,
      m =
        p && p.navigation && p.navigation.location
          ? p.navigation.location.pathname
          : null;
    r ||
      ((v = v.toLowerCase()),
      (m = m ? m.toLowerCase() : null),
      (y = y.toLowerCase()));
    let x = v === y || (!o && v.startsWith(y) && v.charAt(y.length) === "/"),
      _ =
        m != null &&
        (m === y || (!o && m.startsWith(y) && m.charAt(y.length) === "/")),
      w = x ? i : void 0,
      E;
    typeof s == "function"
      ? (E = s({ isActive: x, isPending: _ }))
      : (E = [s, x ? "active" : null, _ ? "pending" : null]
          .filter(Boolean)
          .join(" "));
    let S = typeof a == "function" ? a({ isActive: x, isPending: _ }) : a;
    return b.createElement(
      ns,
      ql({}, u, { "aria-current": w, className: E, ref: n, style: S, to: l }),
      typeof c == "function" ? c({ isActive: x, isPending: _ }) : c,
    );
  });
var ng;
(function (t) {
  (t.UseScrollRestoration = "useScrollRestoration"),
    (t.UseSubmit = "useSubmit"),
    (t.UseSubmitFetcher = "useSubmitFetcher"),
    (t.UseFetcher = "useFetcher");
})(ng || (ng = {}));
var ig;
(function (t) {
  (t.UseFetchers = "useFetchers"),
    (t.UseScrollRestoration = "useScrollRestoration");
})(ig || (ig = {}));
function FE(t, e) {
  let {
      target: n,
      replace: i,
      state: r,
      preventScrollReset: s,
      relative: o,
    } = e === void 0 ? {} : e,
    a = $h(),
    l = _s(),
    c = Fh(t, { relative: o });
  return b.useCallback(
    (u) => {
      if (LE(u, n)) {
        u.preventDefault();
        let d = i !== void 0 ? i : Kl(l) === Kl(c);
        a(t, { replace: d, state: r, preventScrollReset: s, relative: o });
      }
    },
    [l, a, c, i, r, n, t, s, o],
  );
}
var t2 = { exports: {} };
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */ (function (t, e) {
  (function (n) {
    var i;
    if (((t.exports = n()), (i = !0), !i)) {
      var r = window.Cookies,
        s = (window.Cookies = n());
      s.noConflict = function () {
        return (window.Cookies = r), s;
      };
    }
  })(function () {
    function n() {
      for (var s = 0, o = {}; s < arguments.length; s++) {
        var a = arguments[s];
        for (var l in a) o[l] = a[l];
      }
      return o;
    }
    function i(s) {
      return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
    }
    function r(s) {
      function o() {}
      function a(c, u, d) {
        if (!(typeof document > "u")) {
          (d = n({ path: "/" }, o.defaults, d)),
            typeof d.expires == "number" &&
              (d.expires = new Date(new Date() * 1 + d.expires * 864e5)),
            (d.expires = d.expires ? d.expires.toUTCString() : "");
          try {
            var h = JSON.stringify(u);
            /^[\{\[]/.test(h) && (u = h);
          } catch {}
          (u = s.write
            ? s.write(u, c)
            : encodeURIComponent(String(u)).replace(
                /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                decodeURIComponent,
              )),
            (c = encodeURIComponent(String(c))
              .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
              .replace(/[\(\)]/g, escape));
          var p = "";
          for (var g in d)
            d[g] &&
              ((p += "; " + g), d[g] !== !0 && (p += "=" + d[g].split(";")[0]));
          return (document.cookie = c + "=" + u + p);
        }
      }
      function l(c, u) {
        if (!(typeof document > "u")) {
          for (
            var d = {},
              h = document.cookie ? document.cookie.split("; ") : [],
              p = 0;
            p < h.length;
            p++
          ) {
            var g = h[p].split("="),
              y = g.slice(1).join("=");
            !u && y.charAt(0) === '"' && (y = y.slice(1, -1));
            try {
              var v = i(g[0]);
              if (((y = (s.read || s)(y, v) || i(y)), u))
                try {
                  y = JSON.parse(y);
                } catch {}
              if (((d[v] = y), c === v)) break;
            } catch {}
          }
          return c ? d[c] : d;
        }
      }
      return (
        (o.set = a),
        (o.get = function (c) {
          return l(c, !1);
        }),
        (o.getJSON = function (c) {
          return l(c, !0);
        }),
        (o.remove = function (c, u) {
          a(c, "", n(u, { expires: -1 }));
        }),
        (o.defaults = {}),
        (o.withConverter = r),
        o
      );
    }
    return r(function () {});
  });
})(t2);
var BE = t2.exports;
const Xl = gs(BE);
var zE = function (e) {
  var n = e.condition,
    i = e.wrapper,
    r = e.children;
  return n ? i(r) : r;
};
function Zn() {
  return (
    (Zn = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
    Zn.apply(this, arguments)
  );
}
function WE(t, e) {
  (t.prototype = Object.create(e.prototype)),
    (t.prototype.constructor = t),
    af(t, e);
}
function af(t, e) {
  return (
    (af = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (i, r) {
          return (i.__proto__ = r), i;
        }),
    af(t, e)
  );
}
function HE(t, e) {
  if (t == null) return {};
  var n = {},
    i = Object.keys(t),
    r,
    s;
  for (s = 0; s < i.length; s++)
    (r = i[s]), !(e.indexOf(r) >= 0) && (n[r] = t[r]);
  return n;
}
var lf = { TOP: "top", BOTTOM: "bottom", NONE: "none" },
  Ql;
(function (t) {
  (t.STRICT = "strict"), (t.LAX = "lax"), (t.NONE = "none");
})(Ql || (Ql = {}));
var cf = { HIDDEN: "hidden", SHOW: "show", BY_COOKIE_VALUE: "byCookieValue" },
  n2 = "CookieConsent",
  VE = ["children"],
  UE = function (e) {
    var n = e.children,
      i = HE(e, VE);
    return Ne.createElement("button", Object.assign({}, i), n);
  },
  YE = {
    disableStyles: !1,
    hideOnAccept: !0,
    hideOnDecline: !0,
    location: lf.BOTTOM,
    visible: cf.BY_COOKIE_VALUE,
    onAccept: function (e) {},
    onDecline: function () {},
    cookieName: n2,
    cookieValue: "true",
    declineCookieValue: "false",
    setDeclineCookie: !0,
    buttonText: "I understand",
    declineButtonText: "I decline",
    debug: !1,
    expires: 365,
    containerClasses: "CookieConsent",
    contentClasses: "",
    buttonClasses: "",
    buttonWrapperClasses: "",
    declineButtonClasses: "",
    buttonId: "rcc-confirm-button",
    declineButtonId: "rcc-decline-button",
    extraCookieOptions: {},
    disableButtonStyles: !1,
    enableDeclineButton: !1,
    flipButtons: !1,
    sameSite: Ql.LAX,
    ButtonComponent: UE,
    overlay: !1,
    overlayClasses: "",
    onOverlayClick: function () {},
    acceptOnOverlayClick: !1,
    ariaAcceptLabel: "Accept cookies",
    ariaDeclineLabel: "Decline cookies",
    acceptOnScroll: !1,
    acceptOnScrollPercentage: 25,
    customContentAttributes: {},
    customContainerAttributes: {},
    customButtonProps: {},
    customDeclineButtonProps: {},
    customButtonWrapperAttributes: {},
    style: {},
    buttonStyle: {},
    declineButtonStyle: {},
    contentStyle: {},
    overlayStyle: {},
  },
  KE = {
    visible: !1,
    style: {
      alignItems: "baseline",
      background: "#353535",
      color: "white",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      left: "0",
      position: "fixed",
      width: "100%",
      zIndex: "999",
    },
    buttonStyle: {
      background: "#ffd42d",
      border: "0",
      borderRadius: "0px",
      boxShadow: "none",
      color: "black",
      cursor: "pointer",
      flex: "0 0 auto",
      padding: "5px 10px",
      margin: "15px",
    },
    declineButtonStyle: {
      background: "#c12a2a",
      border: "0",
      borderRadius: "0px",
      boxShadow: "none",
      color: "#e5e5e5",
      cursor: "pointer",
      flex: "0 0 auto",
      padding: "5px 10px",
      margin: "15px",
    },
    contentStyle: { flex: "1 0 300px", margin: "15px" },
    overlayStyle: {
      position: "fixed",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      zIndex: "999",
      backgroundColor: "rgba(0,0,0,0.3)",
    },
  },
  GE = function (e) {
    e === void 0 && (e = n2);
    var n = Xl.get(e);
    return n === void 0 ? Xl.get(i2(e)) : n;
  },
  i2 = function (e) {
    return e + "-legacy";
  },
  uf = (function (t) {
    WE(e, t);
    function e() {
      var i;
      return (
        (i = t.apply(this, arguments) || this),
        (i.state = KE),
        (i.handleScroll = function () {
          var r = i.props.acceptOnScrollPercentage,
            s = document.documentElement,
            o = document.body,
            a = "scrollTop",
            l = "scrollHeight",
            c = ((s[a] || o[a]) / ((s[l] || o[l]) - s.clientHeight)) * 100;
          c > r && i.accept(!0);
        }),
        (i.removeScrollListener = function () {
          var r = i.props.acceptOnScroll;
          r && window.removeEventListener("scroll", i.handleScroll);
        }),
        i
      );
    }
    var n = e.prototype;
    return (
      (n.componentDidMount = function () {
        var r = this.props.debug;
        (this.getCookieValue() === void 0 || r) &&
          (this.setState({ visible: !0 }),
          this.props.acceptOnScroll &&
            window.addEventListener("scroll", this.handleScroll, {
              passive: !0,
            }));
      }),
      (n.componentWillUnmount = function () {
        this.removeScrollListener();
      }),
      (n.accept = function (r) {
        var s;
        r === void 0 && (r = !1);
        var o = this.props,
          a = o.cookieName,
          l = o.cookieValue,
          c = o.hideOnAccept,
          u = o.onAccept;
        this.setCookie(a, l),
          u((s = r) != null ? s : !1),
          c && (this.setState({ visible: !1 }), this.removeScrollListener());
      }),
      (n.overlayClick = function () {
        var r = this.props,
          s = r.acceptOnOverlayClick,
          o = r.onOverlayClick;
        s && this.accept(), o();
      }),
      (n.decline = function () {
        var r = this.props,
          s = r.cookieName,
          o = r.declineCookieValue,
          a = r.hideOnDecline,
          l = r.onDecline,
          c = r.setDeclineCookie;
        c && this.setCookie(s, o), l(), a && this.setState({ visible: !1 });
      }),
      (n.setCookie = function (r, s) {
        var o = this.props,
          a = o.extraCookieOptions,
          l = o.expires,
          c = o.sameSite,
          u = this.props.cookieSecurity;
        u === void 0 &&
          (u = window.location ? window.location.protocol === "https:" : !0);
        var d = Zn({ expires: l }, a, { sameSite: c, secure: u });
        c === Ql.NONE && Xl.set(i2(r), s, d), Xl.set(r, s, d);
      }),
      (n.getCookieValue = function () {
        var r = this.props.cookieName;
        return GE(r);
      }),
      (n.render = function () {
        var r = this;
        switch (this.props.visible) {
          case cf.HIDDEN:
            return null;
          case cf.BY_COOKIE_VALUE:
            if (!this.state.visible) return null;
            break;
        }
        var s = this.props,
          o = s.location,
          a = s.style,
          l = s.buttonStyle,
          c = s.declineButtonStyle,
          u = s.contentStyle,
          d = s.disableStyles,
          h = s.buttonText,
          p = s.declineButtonText,
          g = s.containerClasses,
          y = s.contentClasses,
          v = s.buttonClasses,
          m = s.buttonWrapperClasses,
          x = s.declineButtonClasses,
          _ = s.buttonId,
          w = s.declineButtonId,
          E = s.disableButtonStyles,
          S = s.enableDeclineButton,
          C = s.flipButtons,
          k = s.ButtonComponent,
          P = s.overlay,
          j = s.overlayClasses,
          $ = s.overlayStyle,
          A = s.ariaAcceptLabel,
          M = s.ariaDeclineLabel,
          V = s.customContainerAttributes,
          z = s.customContentAttributes,
          Y = s.customButtonProps,
          G = s.customDeclineButtonProps,
          L = s.customButtonWrapperAttributes,
          N = {},
          O = {},
          F = {},
          R = {},
          B = {};
        switch (
          (d
            ? ((N = Object.assign({}, a)),
              (O = Object.assign({}, l)),
              (F = Object.assign({}, c)),
              (R = Object.assign({}, u)),
              (B = Object.assign({}, $)))
            : ((N = Object.assign({}, Zn({}, this.state.style, a))),
              (R = Object.assign({}, Zn({}, this.state.contentStyle, u))),
              (B = Object.assign({}, Zn({}, this.state.overlayStyle, $))),
              E
                ? ((O = Object.assign({}, l)), (F = Object.assign({}, c)))
                : ((O = Object.assign({}, Zn({}, this.state.buttonStyle, l))),
                  (F = Object.assign(
                    {},
                    Zn({}, this.state.declineButtonStyle, c),
                  )))),
          o)
        ) {
          case lf.TOP:
            N.top = "0";
            break;
          case lf.BOTTOM:
            N.bottom = "0";
            break;
        }
        var W = [];
        return (
          S &&
            W.push(
              Ne.createElement(
                k,
                Object.assign(
                  {
                    key: "declineButton",
                    style: F,
                    className: x,
                    id: w,
                    "aria-label": M,
                    onClick: function () {
                      r.decline();
                    },
                  },
                  G,
                ),
                p,
              ),
            ),
          W.push(
            Ne.createElement(
              k,
              Object.assign(
                {
                  key: "acceptButton",
                  style: O,
                  className: v,
                  id: _,
                  "aria-label": A,
                  onClick: function () {
                    r.accept();
                  },
                },
                Y,
              ),
              h,
            ),
          ),
          C && W.reverse(),
          Ne.createElement(
            zE,
            {
              condition: P,
              wrapper: function (q) {
                return Ne.createElement(
                  "div",
                  {
                    style: B,
                    className: j,
                    onClick: function () {
                      r.overlayClick();
                    },
                  },
                  q,
                );
              },
            },
            Ne.createElement(
              "div",
              Object.assign({ className: "" + g, style: N }, V),
              Ne.createElement(
                "div",
                Object.assign({ style: R, className: y }, z),
                this.props.children,
              ),
              Ne.createElement(
                "div",
                Object.assign({ className: "" + m }, L),
                W.map(function (U) {
                  return U;
                }),
              ),
            ),
          )
        );
      }),
      e
    );
  })(b.Component);
uf.defaultProps = YE;
const rg = () => {
  const t = {
    section: { textAlign: "center", padding: 50, margin: 50, color: "#df0000" },
  };
  return f.jsxs("section", {
    className: "not-found",
    style: t.section,
    children: [
      f.jsx("h2", {
        children: "Oops page not found, please try a different URL.",
      }),
      f.jsx(ns, {
        to: "/",
        "aria-label": "Link to Homepage",
        children: f.jsx("h3", { children: "Return to Homepage" }),
      }),
    ],
  });
};
var r2 = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (t) {
  (function () {
    var e = {}.hasOwnProperty;
    function n() {
      for (var i = [], r = 0; r < arguments.length; r++) {
        var s = arguments[r];
        if (s) {
          var o = typeof s;
          if (o === "string" || o === "number") i.push(s);
          else if (Array.isArray(s)) {
            if (s.length) {
              var a = n.apply(null, s);
              a && i.push(a);
            }
          } else if (o === "object") {
            if (
              s.toString !== Object.prototype.toString &&
              !s.toString.toString().includes("[native code]")
            ) {
              i.push(s.toString());
              continue;
            }
            for (var l in s) e.call(s, l) && s[l] && i.push(l);
          }
        }
      }
      return i.join(" ");
    }
    t.exports ? ((n.default = n), (t.exports = n)) : (window.classNames = n);
  })();
})(r2);
var qE = r2.exports;
const ee = gs(qE);
function df() {
  return (
    (df = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
    df.apply(this, arguments)
  );
}
function s2(t, e) {
  if (t == null) return {};
  var n = {},
    i = Object.keys(t),
    r,
    s;
  for (s = 0; s < i.length; s++)
    (r = i[s]), !(e.indexOf(r) >= 0) && (n[r] = t[r]);
  return n;
}
function sg(t) {
  return "default" + t.charAt(0).toUpperCase() + t.substr(1);
}
function XE(t) {
  var e = QE(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
function QE(t, e) {
  if (typeof t != "object" || t === null) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(t, e);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function JE(t, e, n) {
  var i = b.useRef(t !== void 0),
    r = b.useState(e),
    s = r[0],
    o = r[1],
    a = t !== void 0,
    l = i.current;
  return (
    (i.current = a),
    !a && l && s !== e && o(e),
    [
      a ? t : s,
      b.useCallback(
        function (c) {
          for (
            var u = arguments.length, d = new Array(u > 1 ? u - 1 : 0), h = 1;
            h < u;
            h++
          )
            d[h - 1] = arguments[h];
          n && n.apply(void 0, [c].concat(d)), o(c);
        },
        [n],
      ),
    ]
  );
}
function Bh(t, e) {
  return Object.keys(e).reduce(function (n, i) {
    var r,
      s = n,
      o = s[sg(i)],
      a = s[i],
      l = s2(s, [sg(i), i].map(XE)),
      c = e[i],
      u = JE(a, o, t[c]),
      d = u[0],
      h = u[1];
    return df({}, l, ((r = {}), (r[i] = d), (r[c] = h), r));
  }, t);
}
function ff(t, e) {
  return (
    (ff = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (i, r) {
          return (i.__proto__ = r), i;
        }),
    ff(t, e)
  );
}
function ZE(t, e) {
  (t.prototype = Object.create(e.prototype)),
    (t.prototype.constructor = t),
    ff(t, e);
}
const e4 = ["xxl", "xl", "lg", "md", "sm", "xs"],
  t4 = "xs",
  Mc = b.createContext({ prefixes: {}, breakpoints: e4, minBreakpoint: t4 });
function ae(t, e) {
  const { prefixes: n } = b.useContext(Mc);
  return t || n[e] || e;
}
function o2() {
  const { breakpoints: t } = b.useContext(Mc);
  return t;
}
function a2() {
  const { minBreakpoint: t } = b.useContext(Mc);
  return t;
}
function n4() {
  const { dir: t } = b.useContext(Mc);
  return t === "rtl";
}
function Ic(t) {
  return (t && t.ownerDocument) || document;
}
function i4(t) {
  var e = Ic(t);
  return (e && e.defaultView) || window;
}
function r4(t, e) {
  return i4(t).getComputedStyle(t, e);
}
var s4 = /([A-Z])/g;
function o4(t) {
  return t.replace(s4, "-$1").toLowerCase();
}
var a4 = /^ms-/;
function ja(t) {
  return o4(t).replace(a4, "-ms-");
}
var l4 =
  /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function c4(t) {
  return !!(t && l4.test(t));
}
function Ln(t, e) {
  var n = "",
    i = "";
  if (typeof e == "string")
    return t.style.getPropertyValue(ja(e)) || r4(t).getPropertyValue(ja(e));
  Object.keys(e).forEach(function (r) {
    var s = e[r];
    !s && s !== 0
      ? t.style.removeProperty(ja(r))
      : c4(r)
      ? (i += r + "(" + s + ") ")
      : (n += ja(r) + ": " + s + ";");
  }),
    i && (n += "transform: " + i + ";"),
    (t.style.cssText += ";" + n);
}
var l2 = { exports: {} },
  u4 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  d4 = u4,
  f4 = d4;
function c2() {}
function u2() {}
u2.resetWarningCache = c2;
var h4 = function () {
  function t(i, r, s, o, a, l) {
    if (l !== f4) {
      var c = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
      );
      throw ((c.name = "Invariant Violation"), c);
    }
  }
  t.isRequired = t;
  function e() {
    return t;
  }
  var n = {
    array: t,
    bigint: t,
    bool: t,
    func: t,
    number: t,
    object: t,
    string: t,
    symbol: t,
    any: t,
    arrayOf: e,
    element: t,
    elementType: t,
    instanceOf: e,
    node: t,
    objectOf: e,
    oneOf: e,
    oneOfType: e,
    shape: e,
    exact: e,
    checkPropTypes: u2,
    resetWarningCache: c2,
  };
  return (n.PropTypes = n), n;
};
l2.exports = h4();
var p4 = l2.exports;
const jn = gs(p4),
  og = { disabled: !1 },
  d2 = Ne.createContext(null);
var g4 = function (e) {
    return e.scrollTop;
  },
  Qs = "unmounted",
  ei = "exited",
  Zt = "entering",
  Tn = "entered",
  Wo = "exiting",
  Hn = (function (t) {
    ZE(e, t);
    function e(i, r) {
      var s;
      s = t.call(this, i, r) || this;
      var o = r,
        a = o && !o.isMounting ? i.enter : i.appear,
        l;
      return (
        (s.appearStatus = null),
        i.in
          ? a
            ? ((l = ei), (s.appearStatus = Zt))
            : (l = Tn)
          : i.unmountOnExit || i.mountOnEnter
          ? (l = Qs)
          : (l = ei),
        (s.state = { status: l }),
        (s.nextCallback = null),
        s
      );
    }
    e.getDerivedStateFromProps = function (r, s) {
      var o = r.in;
      return o && s.status === Qs ? { status: ei } : null;
    };
    var n = e.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (r) {
        var s = null;
        if (r !== this.props) {
          var o = this.state.status;
          this.props.in
            ? o !== Zt && o !== Tn && (s = Zt)
            : (o === Zt || o === Tn) && (s = Wo);
        }
        this.updateStatus(!1, s);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var r = this.props.timeout,
          s,
          o,
          a;
        return (
          (s = o = a = r),
          r != null &&
            typeof r != "number" &&
            ((s = r.exit),
            (o = r.enter),
            (a = r.appear !== void 0 ? r.appear : o)),
          { exit: s, enter: o, appear: a }
        );
      }),
      (n.updateStatus = function (r, s) {
        if ((r === void 0 && (r = !1), s !== null))
          if ((this.cancelNextCallback(), s === Zt)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var o = this.props.nodeRef
                ? this.props.nodeRef.current
                : $r.findDOMNode(this);
              o && g4(o);
            }
            this.performEnter(r);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === ei &&
            this.setState({ status: Qs });
      }),
      (n.performEnter = function (r) {
        var s = this,
          o = this.props.enter,
          a = this.context ? this.context.isMounting : r,
          l = this.props.nodeRef ? [a] : [$r.findDOMNode(this), a],
          c = l[0],
          u = l[1],
          d = this.getTimeouts(),
          h = a ? d.appear : d.enter;
        if ((!r && !o) || og.disabled) {
          this.safeSetState({ status: Tn }, function () {
            s.props.onEntered(c);
          });
          return;
        }
        this.props.onEnter(c, u),
          this.safeSetState({ status: Zt }, function () {
            s.props.onEntering(c, u),
              s.onTransitionEnd(h, function () {
                s.safeSetState({ status: Tn }, function () {
                  s.props.onEntered(c, u);
                });
              });
          });
      }),
      (n.performExit = function () {
        var r = this,
          s = this.props.exit,
          o = this.getTimeouts(),
          a = this.props.nodeRef ? void 0 : $r.findDOMNode(this);
        if (!s || og.disabled) {
          this.safeSetState({ status: ei }, function () {
            r.props.onExited(a);
          });
          return;
        }
        this.props.onExit(a),
          this.safeSetState({ status: Wo }, function () {
            r.props.onExiting(a),
              r.onTransitionEnd(o.exit, function () {
                r.safeSetState({ status: ei }, function () {
                  r.props.onExited(a);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (r, s) {
        (s = this.setNextCallback(s)), this.setState(r, s);
      }),
      (n.setNextCallback = function (r) {
        var s = this,
          o = !0;
        return (
          (this.nextCallback = function (a) {
            o && ((o = !1), (s.nextCallback = null), r(a));
          }),
          (this.nextCallback.cancel = function () {
            o = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (r, s) {
        this.setNextCallback(s);
        var o = this.props.nodeRef
            ? this.props.nodeRef.current
            : $r.findDOMNode(this),
          a = r == null && !this.props.addEndListener;
        if (!o || a) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var l = this.props.nodeRef
              ? [this.nextCallback]
              : [o, this.nextCallback],
            c = l[0],
            u = l[1];
          this.props.addEndListener(c, u);
        }
        r != null && setTimeout(this.nextCallback, r);
      }),
      (n.render = function () {
        var r = this.state.status;
        if (r === Qs) return null;
        var s = this.props,
          o = s.children;
        s.in,
          s.mountOnEnter,
          s.unmountOnExit,
          s.appear,
          s.enter,
          s.exit,
          s.timeout,
          s.addEndListener,
          s.onEnter,
          s.onEntering,
          s.onEntered,
          s.onExit,
          s.onExiting,
          s.onExited,
          s.nodeRef;
        var a = s2(s, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return Ne.createElement(
          d2.Provider,
          { value: null },
          typeof o == "function"
            ? o(r, a)
            : Ne.cloneElement(Ne.Children.only(o), a),
        );
      }),
      e
    );
  })(Ne.Component);
Hn.contextType = d2;
Hn.propTypes = {};
function vr() {}
Hn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: vr,
  onEntering: vr,
  onEntered: vr,
  onExit: vr,
  onExiting: vr,
  onExited: vr,
};
Hn.UNMOUNTED = Qs;
Hn.EXITED = ei;
Hn.ENTERING = Zt;
Hn.ENTERED = Tn;
Hn.EXITING = Wo;
const bs = !!(
  typeof window < "u" &&
  window.document &&
  window.document.createElement
);
var hf = !1,
  pf = !1;
try {
  var Nu = {
    get passive() {
      return (hf = !0);
    },
    get once() {
      return (pf = hf = !0);
    },
  };
  bs &&
    (window.addEventListener("test", Nu, Nu),
    window.removeEventListener("test", Nu, !0));
} catch {}
function f2(t, e, n, i) {
  if (i && typeof i != "boolean" && !pf) {
    var r = i.once,
      s = i.capture,
      o = n;
    !pf &&
      r &&
      ((o =
        n.__once ||
        function a(l) {
          this.removeEventListener(e, a, s), n.call(this, l);
        }),
      (n.__once = o)),
      t.addEventListener(e, o, hf ? i : s);
  }
  t.addEventListener(e, n, i);
}
function gf(t, e, n, i) {
  var r = i && typeof i != "boolean" ? i.capture : i;
  t.removeEventListener(e, n, r),
    n.__once && t.removeEventListener(e, n.__once, r);
}
function Jl(t, e, n, i) {
  return (
    f2(t, e, n, i),
    function () {
      gf(t, e, n, i);
    }
  );
}
function m4(t, e, n, i) {
  if ((i === void 0 && (i = !0), t)) {
    var r = document.createEvent("HTMLEvents");
    r.initEvent(e, n, i), t.dispatchEvent(r);
  }
}
function y4(t) {
  var e = Ln(t, "transitionDuration") || "",
    n = e.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(e) * n;
}
function v4(t, e, n) {
  n === void 0 && (n = 5);
  var i = !1,
    r = setTimeout(function () {
      i || m4(t, "transitionend", !0);
    }, e + n),
    s = Jl(
      t,
      "transitionend",
      function () {
        i = !0;
      },
      { once: !0 },
    );
  return function () {
    clearTimeout(r), s();
  };
}
function h2(t, e, n, i) {
  n == null && (n = y4(t) || 0);
  var r = v4(t, n, i),
    s = Jl(t, "transitionend", e);
  return function () {
    r(), s();
  };
}
function ag(t, e) {
  const n = Ln(t, e) || "",
    i = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * i;
}
function zh(t, e) {
  const n = ag(t, "transitionDuration"),
    i = ag(t, "transitionDelay"),
    r = h2(
      t,
      (s) => {
        s.target === t && (r(), e(s));
      },
      n + i,
    );
}
function $s(...t) {
  return t
    .filter((e) => e != null)
    .reduce((e, n) => {
      if (typeof n != "function")
        throw new Error(
          "Invalid Argument Type, must only provide functions, undefined, or null.",
        );
      return e === null
        ? n
        : function (...r) {
            e.apply(this, r), n.apply(this, r);
          };
    }, null);
}
function p2(t) {
  t.offsetHeight;
}
const lg = (t) =>
  !t || typeof t == "function"
    ? t
    : (e) => {
        t.current = e;
      };
function x4(t, e) {
  const n = lg(t),
    i = lg(e);
  return (r) => {
    n && n(r), i && i(r);
  };
}
function ra(t, e) {
  return b.useMemo(() => x4(t, e), [t, e]);
}
function _4(t) {
  return t && "setState" in t ? $r.findDOMNode(t) : t ?? null;
}
const Wh = Ne.forwardRef(
    (
      {
        onEnter: t,
        onEntering: e,
        onEntered: n,
        onExit: i,
        onExiting: r,
        onExited: s,
        addEndListener: o,
        children: a,
        childRef: l,
        ...c
      },
      u,
    ) => {
      const d = b.useRef(null),
        h = ra(d, l),
        p = (S) => {
          h(_4(S));
        },
        g = (S) => (C) => {
          S && d.current && S(d.current, C);
        },
        y = b.useCallback(g(t), [t]),
        v = b.useCallback(g(e), [e]),
        m = b.useCallback(g(n), [n]),
        x = b.useCallback(g(i), [i]),
        _ = b.useCallback(g(r), [r]),
        w = b.useCallback(g(s), [s]),
        E = b.useCallback(g(o), [o]);
      return f.jsx(Hn, {
        ref: u,
        ...c,
        onEnter: y,
        onEntered: m,
        onEntering: v,
        onExit: x,
        onExited: w,
        onExiting: _,
        addEndListener: E,
        nodeRef: d,
        children:
          typeof a == "function"
            ? (S, C) => a(S, { ...C, ref: p })
            : Ne.cloneElement(a, { ref: p }),
      });
    },
  ),
  b4 = {
    height: ["marginTop", "marginBottom"],
    width: ["marginLeft", "marginRight"],
  };
function w4(t, e) {
  const n = `offset${t[0].toUpperCase()}${t.slice(1)}`,
    i = e[n],
    r = b4[t];
  return i + parseInt(Ln(e, r[0]), 10) + parseInt(Ln(e, r[1]), 10);
}
const E4 = {
    [ei]: "collapse",
    [Wo]: "collapsing",
    [Zt]: "collapsing",
    [Tn]: "collapse show",
  },
  S4 = Ne.forwardRef(
    (
      {
        onEnter: t,
        onEntering: e,
        onEntered: n,
        onExit: i,
        onExiting: r,
        className: s,
        children: o,
        dimension: a = "height",
        in: l = !1,
        timeout: c = 300,
        mountOnEnter: u = !1,
        unmountOnExit: d = !1,
        appear: h = !1,
        getDimensionValue: p = w4,
        ...g
      },
      y,
    ) => {
      const v = typeof a == "function" ? a() : a,
        m = b.useMemo(
          () =>
            $s((S) => {
              S.style[v] = "0";
            }, t),
          [v, t],
        ),
        x = b.useMemo(
          () =>
            $s((S) => {
              const C = `scroll${v[0].toUpperCase()}${v.slice(1)}`;
              S.style[v] = `${S[C]}px`;
            }, e),
          [v, e],
        ),
        _ = b.useMemo(
          () =>
            $s((S) => {
              S.style[v] = null;
            }, n),
          [v, n],
        ),
        w = b.useMemo(
          () =>
            $s((S) => {
              (S.style[v] = `${p(v, S)}px`), p2(S);
            }, i),
          [i, p, v],
        ),
        E = b.useMemo(
          () =>
            $s((S) => {
              S.style[v] = null;
            }, r),
          [v, r],
        );
      return f.jsx(Wh, {
        ref: y,
        addEndListener: zh,
        ...g,
        "aria-expanded": g.role ? l : null,
        onEnter: m,
        onEntering: x,
        onEntered: _,
        onExit: w,
        onExiting: E,
        childRef: o.ref,
        in: l,
        timeout: c,
        mountOnEnter: u,
        unmountOnExit: d,
        appear: h,
        children: (S, C) =>
          Ne.cloneElement(o, {
            ...C,
            className: ee(
              s,
              o.props.className,
              E4[S],
              v === "width" && "collapse-horizontal",
            ),
          }),
      });
    },
  );
function C4(t) {
  const e = b.useRef(t);
  return (
    b.useEffect(() => {
      e.current = t;
    }, [t]),
    e
  );
}
function st(t) {
  const e = C4(t);
  return b.useCallback(
    function (...n) {
      return e.current && e.current(...n);
    },
    [e],
  );
}
function k4() {
  return b.useState(null);
}
function O4() {
  const t = b.useRef(!0),
    e = b.useRef(() => t.current);
  return (
    b.useEffect(
      () => (
        (t.current = !0),
        () => {
          t.current = !1;
        }
      ),
      [],
    ),
    e.current
  );
}
function T4(t) {
  const e = b.useRef(null);
  return (
    b.useEffect(() => {
      e.current = t;
    }),
    e.current
  );
}
const N4 =
    typeof global < "u" &&
    global.navigator &&
    global.navigator.product === "ReactNative",
  A4 = typeof document < "u",
  mf = A4 || N4 ? b.useLayoutEffect : b.useEffect,
  P4 = ["as", "disabled"];
function L4(t, e) {
  if (t == null) return {};
  var n = {},
    i = Object.keys(t),
    r,
    s;
  for (s = 0; s < i.length; s++)
    (r = i[s]), !(e.indexOf(r) >= 0) && (n[r] = t[r]);
  return n;
}
function j4(t) {
  return !t || t.trim() === "#";
}
function Hh({
  tagName: t,
  disabled: e,
  href: n,
  target: i,
  rel: r,
  role: s,
  onClick: o,
  tabIndex: a = 0,
  type: l,
}) {
  t || (n != null || i != null || r != null ? (t = "a") : (t = "button"));
  const c = { tagName: t };
  if (t === "button") return [{ type: l || "button", disabled: e }, c];
  const u = (h) => {
      if (((e || (t === "a" && j4(n))) && h.preventDefault(), e)) {
        h.stopPropagation();
        return;
      }
      o == null || o(h);
    },
    d = (h) => {
      h.key === " " && (h.preventDefault(), u(h));
    };
  return (
    t === "a" && (n || (n = "#"), e && (n = void 0)),
    [
      {
        role: s ?? "button",
        disabled: void 0,
        tabIndex: e ? void 0 : a,
        href: n,
        target: t === "a" ? i : void 0,
        "aria-disabled": e || void 0,
        rel: t === "a" ? r : void 0,
        onClick: u,
        onKeyDown: d,
      },
      c,
    ]
  );
}
const g2 = b.forwardRef((t, e) => {
  let { as: n, disabled: i } = t,
    r = L4(t, P4);
  const [s, { tagName: o }] = Hh(Object.assign({ tagName: n, disabled: i }, r));
  return f.jsx(o, Object.assign({}, r, s, { ref: e }));
});
g2.displayName = "Button";
const D4 = ["onKeyDown"];
function R4(t, e) {
  if (t == null) return {};
  var n = {},
    i = Object.keys(t),
    r,
    s;
  for (s = 0; s < i.length; s++)
    (r = i[s]), !(e.indexOf(r) >= 0) && (n[r] = t[r]);
  return n;
}
function M4(t) {
  return !t || t.trim() === "#";
}
const Vh = b.forwardRef((t, e) => {
  let { onKeyDown: n } = t,
    i = R4(t, D4);
  const [r] = Hh(Object.assign({ tagName: "a" }, i)),
    s = st((o) => {
      r.onKeyDown(o), n == null || n(o);
    });
  return M4(i.href) || i.role === "button"
    ? f.jsx("a", Object.assign({ ref: e }, i, r, { onKeyDown: s }))
    : f.jsx("a", Object.assign({ ref: e }, i, { onKeyDown: n }));
});
Vh.displayName = "Anchor";
const I4 = { [Zt]: "show", [Tn]: "show" },
  is = b.forwardRef(
    (
      {
        className: t,
        children: e,
        transitionClasses: n = {},
        onEnter: i,
        ...r
      },
      s,
    ) => {
      const o = {
          in: !1,
          timeout: 300,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          ...r,
        },
        a = b.useCallback(
          (l, c) => {
            p2(l), i == null || i(l, c);
          },
          [i],
        );
      return f.jsx(Wh, {
        ref: s,
        addEndListener: zh,
        ...o,
        onEnter: a,
        childRef: e.ref,
        children: (l, c) =>
          b.cloneElement(e, {
            ...c,
            className: ee("fade", t, e.props.className, I4[l], n[l]),
          }),
      });
    },
  );
is.displayName = "Fade";
const $4 = {
    "aria-label": jn.string,
    onClick: jn.func,
    variant: jn.oneOf(["white"]),
  },
  $c = b.forwardRef(
    ({ className: t, variant: e, "aria-label": n = "Close", ...i }, r) =>
      f.jsx("button", {
        ref: r,
        type: "button",
        className: ee("btn-close", e && `btn-close-${e}`, t),
        "aria-label": n,
        ...i,
      }),
  );
$c.displayName = "CloseButton";
$c.propTypes = $4;
const sa = (t) =>
  b.forwardRef((e, n) =>
    f.jsx("div", { ...e, ref: n, className: ee(e.className, t) }),
  );
var F4 = /-(.)/g;
function B4(t) {
  return t.replace(F4, function (e, n) {
    return n.toUpperCase();
  });
}
const z4 = (t) => t[0].toUpperCase() + B4(t).slice(1);
function Ue(t, { displayName: e = z4(t), Component: n, defaultProps: i } = {}) {
  const r = b.forwardRef(
    ({ className: s, bsPrefix: o, as: a = n || "div", ...l }, c) => {
      const u = { ...i, ...l },
        d = ae(o, t);
      return f.jsx(a, { ref: c, className: ee(s, d), ...u });
    },
  );
  return (r.displayName = e), r;
}
const m2 = sa("h4");
m2.displayName = "DivStyledAsH4";
const W4 = Ue("alert-heading", { Component: m2 }),
  H4 = Ue("alert-link", { Component: Vh }),
  y2 = b.forwardRef((t, e) => {
    const {
        bsPrefix: n,
        show: i = !0,
        closeLabel: r = "Close alert",
        closeVariant: s,
        className: o,
        children: a,
        variant: l = "primary",
        onClose: c,
        dismissible: u,
        transition: d = is,
        ...h
      } = Bh(t, { show: "onClose" }),
      p = ae(n, "alert"),
      g = st((m) => {
        c && c(!1, m);
      }),
      y = d === !0 ? is : d,
      v = f.jsxs("div", {
        role: "alert",
        ...(y ? void 0 : h),
        ref: e,
        className: ee(o, p, l && `${p}-${l}`, u && `${p}-dismissible`),
        children: [
          u && f.jsx($c, { onClick: g, "aria-label": r, variant: s }),
          a,
        ],
      });
    return y
      ? f.jsx(y, { unmountOnExit: !0, ...h, ref: void 0, in: i, children: v })
      : i
      ? v
      : null;
  });
y2.displayName = "Alert";
const V4 = Object.assign(y2, { Link: H4, Heading: W4 }),
  ot = b.forwardRef(
    (
      {
        as: t,
        bsPrefix: e,
        variant: n = "primary",
        size: i,
        active: r = !1,
        disabled: s = !1,
        className: o,
        ...a
      },
      l,
    ) => {
      const c = ae(e, "btn"),
        [u, { tagName: d }] = Hh({ tagName: t, disabled: s, ...a }),
        h = d;
      return f.jsx(h, {
        ...u,
        ...a,
        ref: l,
        disabled: s,
        className: ee(
          o,
          c,
          r && "active",
          n && `${c}-${n}`,
          i && `${c}-${i}`,
          a.href && s && "disabled",
        ),
      });
    },
  );
ot.displayName = "Button";
const v2 = b.forwardRef(
  ({ bsPrefix: t, className: e, variant: n, as: i = "img", ...r }, s) => {
    const o = ae(t, "card-img");
    return f.jsx(i, { ref: s, className: ee(n ? `${o}-${n}` : o, e), ...r });
  },
);
v2.displayName = "CardImg";
const Uh = b.createContext(null);
Uh.displayName = "CardHeaderContext";
const x2 = b.forwardRef(
  ({ bsPrefix: t, className: e, as: n = "div", ...i }, r) => {
    const s = ae(t, "card-header"),
      o = b.useMemo(() => ({ cardHeaderBsPrefix: s }), [s]);
    return f.jsx(Uh.Provider, {
      value: o,
      children: f.jsx(n, { ref: r, ...i, className: ee(e, s) }),
    });
  },
);
x2.displayName = "CardHeader";
const U4 = sa("h5"),
  Y4 = sa("h6"),
  _2 = Ue("card-body"),
  K4 = Ue("card-title", { Component: U4 }),
  G4 = Ue("card-subtitle", { Component: Y4 }),
  q4 = Ue("card-link", { Component: "a" }),
  X4 = Ue("card-text", { Component: "p" }),
  Q4 = Ue("card-footer"),
  J4 = Ue("card-img-overlay"),
  b2 = b.forwardRef(
    (
      {
        bsPrefix: t,
        className: e,
        bg: n,
        text: i,
        border: r,
        body: s = !1,
        children: o,
        as: a = "div",
        ...l
      },
      c,
    ) => {
      const u = ae(t, "card");
      return f.jsx(a, {
        ref: c,
        ...l,
        className: ee(
          e,
          u,
          n && `bg-${n}`,
          i && `text-${i}`,
          r && `border-${r}`,
        ),
        children: s ? f.jsx(_2, { children: o }) : o,
      });
    },
  );
b2.displayName = "Card";
const Z = Object.assign(b2, {
  Img: v2,
  Title: K4,
  Subtitle: G4,
  Body: _2,
  Link: q4,
  Text: X4,
  Header: x2,
  Footer: Q4,
  ImgOverlay: J4,
});
function Z4(t) {
  const e = b.useRef(t);
  return (e.current = t), e;
}
function w2(t) {
  const e = Z4(t);
  b.useEffect(() => () => e.current(), []);
}
function e5(t, e) {
  return b.Children.toArray(t).some((n) => b.isValidElement(n) && n.type === e);
}
function t5({ as: t, bsPrefix: e, className: n, ...i }) {
  e = ae(e, "col");
  const r = o2(),
    s = a2(),
    o = [],
    a = [];
  return (
    r.forEach((l) => {
      const c = i[l];
      delete i[l];
      let u, d, h;
      typeof c == "object" && c != null
        ? ({ span: u, offset: d, order: h } = c)
        : (u = c);
      const p = l !== s ? `-${l}` : "";
      u && o.push(u === !0 ? `${e}${p}` : `${e}${p}-${u}`),
        h != null && a.push(`order${p}-${h}`),
        d != null && a.push(`offset${p}-${d}`);
    }),
    [
      { ...i, className: ee(n, ...o, ...a) },
      { as: t, bsPrefix: e, spans: o },
    ]
  );
}
const _i = b.forwardRef((t, e) => {
  const [{ className: n, ...i }, { as: r = "div", bsPrefix: s, spans: o }] =
    t5(t);
  return f.jsx(r, { ...i, ref: e, className: ee(n, !o.length && s) });
});
_i.displayName = "Col";
var n5 = Function.prototype.bind.call(Function.prototype.call, [].slice);
function Ii(t, e) {
  return n5(t.querySelectorAll(e));
}
function i5() {
  const [, t] = b.useReducer((e) => !e, !1);
  return t;
}
var lt = "top",
  Nt = "bottom",
  At = "right",
  ct = "left",
  Fc = "auto",
  ws = [lt, Nt, At, ct],
  rr = "start",
  rs = "end",
  E2 = "clippingParents",
  Yh = "viewport",
  Er = "popper",
  S2 = "reference",
  yf = ws.reduce(function (t, e) {
    return t.concat([e + "-" + rr, e + "-" + rs]);
  }, []),
  Kh = [].concat(ws, [Fc]).reduce(function (t, e) {
    return t.concat([e, e + "-" + rr, e + "-" + rs]);
  }, []),
  C2 = "beforeRead",
  k2 = "read",
  O2 = "afterRead",
  T2 = "beforeMain",
  N2 = "main",
  A2 = "afterMain",
  P2 = "beforeWrite",
  L2 = "write",
  j2 = "afterWrite",
  D2 = [C2, k2, O2, T2, N2, A2, P2, L2, j2];
function yn(t) {
  return t.split("-")[0];
}
function Pt(t) {
  if (t == null) return window;
  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return (e && e.defaultView) || window;
  }
  return t;
}
function sr(t) {
  var e = Pt(t).Element;
  return t instanceof e || t instanceof Element;
}
function zt(t) {
  var e = Pt(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
function Gh(t) {
  if (typeof ShadowRoot > "u") return !1;
  var e = Pt(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
var Xi = Math.max,
  Zl = Math.min,
  ss = Math.round;
function vf() {
  var t = navigator.userAgentData;
  return t != null && t.brands && Array.isArray(t.brands)
    ? t.brands
        .map(function (e) {
          return e.brand + "/" + e.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function R2() {
  return !/^((?!chrome|android).)*safari/i.test(vf());
}
function os(t, e, n) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  var i = t.getBoundingClientRect(),
    r = 1,
    s = 1;
  e &&
    zt(t) &&
    ((r = (t.offsetWidth > 0 && ss(i.width) / t.offsetWidth) || 1),
    (s = (t.offsetHeight > 0 && ss(i.height) / t.offsetHeight) || 1));
  var o = sr(t) ? Pt(t) : window,
    a = o.visualViewport,
    l = !R2() && n,
    c = (i.left + (l && a ? a.offsetLeft : 0)) / r,
    u = (i.top + (l && a ? a.offsetTop : 0)) / s,
    d = i.width / r,
    h = i.height / s;
  return {
    width: d,
    height: h,
    top: u,
    right: c + d,
    bottom: u + h,
    left: c,
    x: c,
    y: u,
  };
}
function qh(t) {
  var e = os(t),
    n = t.offsetWidth,
    i = t.offsetHeight;
  return (
    Math.abs(e.width - n) <= 1 && (n = e.width),
    Math.abs(e.height - i) <= 1 && (i = e.height),
    { x: t.offsetLeft, y: t.offsetTop, width: n, height: i }
  );
}
function M2(t, e) {
  var n = e.getRootNode && e.getRootNode();
  if (t.contains(e)) return !0;
  if (n && Gh(n)) {
    var i = e;
    do {
      if (i && t.isSameNode(i)) return !0;
      i = i.parentNode || i.host;
    } while (i);
  }
  return !1;
}
function _n(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function Bn(t) {
  return Pt(t).getComputedStyle(t);
}
function r5(t) {
  return ["table", "td", "th"].indexOf(_n(t)) >= 0;
}
function Ti(t) {
  return ((sr(t) ? t.ownerDocument : t.document) || window.document)
    .documentElement;
}
function Bc(t) {
  return _n(t) === "html"
    ? t
    : t.assignedSlot || t.parentNode || (Gh(t) ? t.host : null) || Ti(t);
}
function cg(t) {
  return !zt(t) || Bn(t).position === "fixed" ? null : t.offsetParent;
}
function s5(t) {
  var e = /firefox/i.test(vf()),
    n = /Trident/i.test(vf());
  if (n && zt(t)) {
    var i = Bn(t);
    if (i.position === "fixed") return null;
  }
  var r = Bc(t);
  for (Gh(r) && (r = r.host); zt(r) && ["html", "body"].indexOf(_n(r)) < 0; ) {
    var s = Bn(r);
    if (
      s.transform !== "none" ||
      s.perspective !== "none" ||
      s.contain === "paint" ||
      ["transform", "perspective"].indexOf(s.willChange) !== -1 ||
      (e && s.willChange === "filter") ||
      (e && s.filter && s.filter !== "none")
    )
      return r;
    r = r.parentNode;
  }
  return null;
}
function oa(t) {
  for (var e = Pt(t), n = cg(t); n && r5(n) && Bn(n).position === "static"; )
    n = cg(n);
  return n &&
    (_n(n) === "html" || (_n(n) === "body" && Bn(n).position === "static"))
    ? e
    : n || s5(t) || e;
}
function Xh(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function ho(t, e, n) {
  return Xi(t, Zl(e, n));
}
function o5(t, e, n) {
  var i = ho(t, e, n);
  return i > n ? n : i;
}
function I2() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function $2(t) {
  return Object.assign({}, I2(), t);
}
function F2(t, e) {
  return e.reduce(function (n, i) {
    return (n[i] = t), n;
  }, {});
}
var a5 = function (e, n) {
  return (
    (e =
      typeof e == "function"
        ? e(Object.assign({}, n.rects, { placement: n.placement }))
        : e),
    $2(typeof e != "number" ? e : F2(e, ws))
  );
};
function l5(t) {
  var e,
    n = t.state,
    i = t.name,
    r = t.options,
    s = n.elements.arrow,
    o = n.modifiersData.popperOffsets,
    a = yn(n.placement),
    l = Xh(a),
    c = [ct, At].indexOf(a) >= 0,
    u = c ? "height" : "width";
  if (!(!s || !o)) {
    var d = a5(r.padding, n),
      h = qh(s),
      p = l === "y" ? lt : ct,
      g = l === "y" ? Nt : At,
      y =
        n.rects.reference[u] + n.rects.reference[l] - o[l] - n.rects.popper[u],
      v = o[l] - n.rects.reference[l],
      m = oa(s),
      x = m ? (l === "y" ? m.clientHeight || 0 : m.clientWidth || 0) : 0,
      _ = y / 2 - v / 2,
      w = d[p],
      E = x - h[u] - d[g],
      S = x / 2 - h[u] / 2 + _,
      C = ho(w, S, E),
      k = l;
    n.modifiersData[i] = ((e = {}), (e[k] = C), (e.centerOffset = C - S), e);
  }
}
function c5(t) {
  var e = t.state,
    n = t.options,
    i = n.element,
    r = i === void 0 ? "[data-popper-arrow]" : i;
  r != null &&
    ((typeof r == "string" && ((r = e.elements.popper.querySelector(r)), !r)) ||
      (M2(e.elements.popper, r) && (e.elements.arrow = r)));
}
const B2 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: l5,
  effect: c5,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function as(t) {
  return t.split("-")[1];
}
var u5 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function d5(t, e) {
  var n = t.x,
    i = t.y,
    r = e.devicePixelRatio || 1;
  return { x: ss(n * r) / r || 0, y: ss(i * r) / r || 0 };
}
function ug(t) {
  var e,
    n = t.popper,
    i = t.popperRect,
    r = t.placement,
    s = t.variation,
    o = t.offsets,
    a = t.position,
    l = t.gpuAcceleration,
    c = t.adaptive,
    u = t.roundOffsets,
    d = t.isFixed,
    h = o.x,
    p = h === void 0 ? 0 : h,
    g = o.y,
    y = g === void 0 ? 0 : g,
    v = typeof u == "function" ? u({ x: p, y }) : { x: p, y };
  (p = v.x), (y = v.y);
  var m = o.hasOwnProperty("x"),
    x = o.hasOwnProperty("y"),
    _ = ct,
    w = lt,
    E = window;
  if (c) {
    var S = oa(n),
      C = "clientHeight",
      k = "clientWidth";
    if (
      (S === Pt(n) &&
        ((S = Ti(n)),
        Bn(S).position !== "static" &&
          a === "absolute" &&
          ((C = "scrollHeight"), (k = "scrollWidth"))),
      (S = S),
      r === lt || ((r === ct || r === At) && s === rs))
    ) {
      w = Nt;
      var P = d && S === E && E.visualViewport ? E.visualViewport.height : S[C];
      (y -= P - i.height), (y *= l ? 1 : -1);
    }
    if (r === ct || ((r === lt || r === Nt) && s === rs)) {
      _ = At;
      var j = d && S === E && E.visualViewport ? E.visualViewport.width : S[k];
      (p -= j - i.width), (p *= l ? 1 : -1);
    }
  }
  var $ = Object.assign({ position: a }, c && u5),
    A = u === !0 ? d5({ x: p, y }, Pt(n)) : { x: p, y };
  if (((p = A.x), (y = A.y), l)) {
    var M;
    return Object.assign(
      {},
      $,
      ((M = {}),
      (M[w] = x ? "0" : ""),
      (M[_] = m ? "0" : ""),
      (M.transform =
        (E.devicePixelRatio || 1) <= 1
          ? "translate(" + p + "px, " + y + "px)"
          : "translate3d(" + p + "px, " + y + "px, 0)"),
      M),
    );
  }
  return Object.assign(
    {},
    $,
    ((e = {}),
    (e[w] = x ? y + "px" : ""),
    (e[_] = m ? p + "px" : ""),
    (e.transform = ""),
    e),
  );
}
function f5(t) {
  var e = t.state,
    n = t.options,
    i = n.gpuAcceleration,
    r = i === void 0 ? !0 : i,
    s = n.adaptive,
    o = s === void 0 ? !0 : s,
    a = n.roundOffsets,
    l = a === void 0 ? !0 : a,
    c = {
      placement: yn(e.placement),
      variation: as(e.placement),
      popper: e.elements.popper,
      popperRect: e.rects.popper,
      gpuAcceleration: r,
      isFixed: e.options.strategy === "fixed",
    };
  e.modifiersData.popperOffsets != null &&
    (e.styles.popper = Object.assign(
      {},
      e.styles.popper,
      ug(
        Object.assign({}, c, {
          offsets: e.modifiersData.popperOffsets,
          position: e.options.strategy,
          adaptive: o,
          roundOffsets: l,
        }),
      ),
    )),
    e.modifiersData.arrow != null &&
      (e.styles.arrow = Object.assign(
        {},
        e.styles.arrow,
        ug(
          Object.assign({}, c, {
            offsets: e.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: l,
          }),
        ),
      )),
    (e.attributes.popper = Object.assign({}, e.attributes.popper, {
      "data-popper-placement": e.placement,
    }));
}
const Qh = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: f5,
  data: {},
};
var Da = { passive: !0 };
function h5(t) {
  var e = t.state,
    n = t.instance,
    i = t.options,
    r = i.scroll,
    s = r === void 0 ? !0 : r,
    o = i.resize,
    a = o === void 0 ? !0 : o,
    l = Pt(e.elements.popper),
    c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return (
    s &&
      c.forEach(function (u) {
        u.addEventListener("scroll", n.update, Da);
      }),
    a && l.addEventListener("resize", n.update, Da),
    function () {
      s &&
        c.forEach(function (u) {
          u.removeEventListener("scroll", n.update, Da);
        }),
        a && l.removeEventListener("resize", n.update, Da);
    }
  );
}
const Jh = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: h5,
  data: {},
};
var p5 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function gl(t) {
  return t.replace(/left|right|bottom|top/g, function (e) {
    return p5[e];
  });
}
var g5 = { start: "end", end: "start" };
function dg(t) {
  return t.replace(/start|end/g, function (e) {
    return g5[e];
  });
}
function Zh(t) {
  var e = Pt(t),
    n = e.pageXOffset,
    i = e.pageYOffset;
  return { scrollLeft: n, scrollTop: i };
}
function ep(t) {
  return os(Ti(t)).left + Zh(t).scrollLeft;
}
function m5(t, e) {
  var n = Pt(t),
    i = Ti(t),
    r = n.visualViewport,
    s = i.clientWidth,
    o = i.clientHeight,
    a = 0,
    l = 0;
  if (r) {
    (s = r.width), (o = r.height);
    var c = R2();
    (c || (!c && e === "fixed")) && ((a = r.offsetLeft), (l = r.offsetTop));
  }
  return { width: s, height: o, x: a + ep(t), y: l };
}
function y5(t) {
  var e,
    n = Ti(t),
    i = Zh(t),
    r = (e = t.ownerDocument) == null ? void 0 : e.body,
    s = Xi(
      n.scrollWidth,
      n.clientWidth,
      r ? r.scrollWidth : 0,
      r ? r.clientWidth : 0,
    ),
    o = Xi(
      n.scrollHeight,
      n.clientHeight,
      r ? r.scrollHeight : 0,
      r ? r.clientHeight : 0,
    ),
    a = -i.scrollLeft + ep(t),
    l = -i.scrollTop;
  return (
    Bn(r || n).direction === "rtl" &&
      (a += Xi(n.clientWidth, r ? r.clientWidth : 0) - s),
    { width: s, height: o, x: a, y: l }
  );
}
function tp(t) {
  var e = Bn(t),
    n = e.overflow,
    i = e.overflowX,
    r = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + i);
}
function z2(t) {
  return ["html", "body", "#document"].indexOf(_n(t)) >= 0
    ? t.ownerDocument.body
    : zt(t) && tp(t)
    ? t
    : z2(Bc(t));
}
function po(t, e) {
  var n;
  e === void 0 && (e = []);
  var i = z2(t),
    r = i === ((n = t.ownerDocument) == null ? void 0 : n.body),
    s = Pt(i),
    o = r ? [s].concat(s.visualViewport || [], tp(i) ? i : []) : i,
    a = e.concat(o);
  return r ? a : a.concat(po(Bc(o)));
}
function xf(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height,
  });
}
function v5(t, e) {
  var n = os(t, !1, e === "fixed");
  return (
    (n.top = n.top + t.clientTop),
    (n.left = n.left + t.clientLeft),
    (n.bottom = n.top + t.clientHeight),
    (n.right = n.left + t.clientWidth),
    (n.width = t.clientWidth),
    (n.height = t.clientHeight),
    (n.x = n.left),
    (n.y = n.top),
    n
  );
}
function fg(t, e, n) {
  return e === Yh ? xf(m5(t, n)) : sr(e) ? v5(e, n) : xf(y5(Ti(t)));
}
function x5(t) {
  var e = po(Bc(t)),
    n = ["absolute", "fixed"].indexOf(Bn(t).position) >= 0,
    i = n && zt(t) ? oa(t) : t;
  return sr(i)
    ? e.filter(function (r) {
        return sr(r) && M2(r, i) && _n(r) !== "body";
      })
    : [];
}
function _5(t, e, n, i) {
  var r = e === "clippingParents" ? x5(t) : [].concat(e),
    s = [].concat(r, [n]),
    o = s[0],
    a = s.reduce(
      function (l, c) {
        var u = fg(t, c, i);
        return (
          (l.top = Xi(u.top, l.top)),
          (l.right = Zl(u.right, l.right)),
          (l.bottom = Zl(u.bottom, l.bottom)),
          (l.left = Xi(u.left, l.left)),
          l
        );
      },
      fg(t, o, i),
    );
  return (
    (a.width = a.right - a.left),
    (a.height = a.bottom - a.top),
    (a.x = a.left),
    (a.y = a.top),
    a
  );
}
function W2(t) {
  var e = t.reference,
    n = t.element,
    i = t.placement,
    r = i ? yn(i) : null,
    s = i ? as(i) : null,
    o = e.x + e.width / 2 - n.width / 2,
    a = e.y + e.height / 2 - n.height / 2,
    l;
  switch (r) {
    case lt:
      l = { x: o, y: e.y - n.height };
      break;
    case Nt:
      l = { x: o, y: e.y + e.height };
      break;
    case At:
      l = { x: e.x + e.width, y: a };
      break;
    case ct:
      l = { x: e.x - n.width, y: a };
      break;
    default:
      l = { x: e.x, y: e.y };
  }
  var c = r ? Xh(r) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (s) {
      case rr:
        l[c] = l[c] - (e[u] / 2 - n[u] / 2);
        break;
      case rs:
        l[c] = l[c] + (e[u] / 2 - n[u] / 2);
        break;
    }
  }
  return l;
}
function ls(t, e) {
  e === void 0 && (e = {});
  var n = e,
    i = n.placement,
    r = i === void 0 ? t.placement : i,
    s = n.strategy,
    o = s === void 0 ? t.strategy : s,
    a = n.boundary,
    l = a === void 0 ? E2 : a,
    c = n.rootBoundary,
    u = c === void 0 ? Yh : c,
    d = n.elementContext,
    h = d === void 0 ? Er : d,
    p = n.altBoundary,
    g = p === void 0 ? !1 : p,
    y = n.padding,
    v = y === void 0 ? 0 : y,
    m = $2(typeof v != "number" ? v : F2(v, ws)),
    x = h === Er ? S2 : Er,
    _ = t.rects.popper,
    w = t.elements[g ? x : h],
    E = _5(sr(w) ? w : w.contextElement || Ti(t.elements.popper), l, u, o),
    S = os(t.elements.reference),
    C = W2({ reference: S, element: _, strategy: "absolute", placement: r }),
    k = xf(Object.assign({}, _, C)),
    P = h === Er ? k : S,
    j = {
      top: E.top - P.top + m.top,
      bottom: P.bottom - E.bottom + m.bottom,
      left: E.left - P.left + m.left,
      right: P.right - E.right + m.right,
    },
    $ = t.modifiersData.offset;
  if (h === Er && $) {
    var A = $[r];
    Object.keys(j).forEach(function (M) {
      var V = [At, Nt].indexOf(M) >= 0 ? 1 : -1,
        z = [lt, Nt].indexOf(M) >= 0 ? "y" : "x";
      j[M] += A[z] * V;
    });
  }
  return j;
}
function b5(t, e) {
  e === void 0 && (e = {});
  var n = e,
    i = n.placement,
    r = n.boundary,
    s = n.rootBoundary,
    o = n.padding,
    a = n.flipVariations,
    l = n.allowedAutoPlacements,
    c = l === void 0 ? Kh : l,
    u = as(i),
    d = u
      ? a
        ? yf
        : yf.filter(function (g) {
            return as(g) === u;
          })
      : ws,
    h = d.filter(function (g) {
      return c.indexOf(g) >= 0;
    });
  h.length === 0 && (h = d);
  var p = h.reduce(function (g, y) {
    return (
      (g[y] = ls(t, { placement: y, boundary: r, rootBoundary: s, padding: o })[
        yn(y)
      ]),
      g
    );
  }, {});
  return Object.keys(p).sort(function (g, y) {
    return p[g] - p[y];
  });
}
function w5(t) {
  if (yn(t) === Fc) return [];
  var e = gl(t);
  return [dg(t), e, dg(e)];
}
function E5(t) {
  var e = t.state,
    n = t.options,
    i = t.name;
  if (!e.modifiersData[i]._skip) {
    for (
      var r = n.mainAxis,
        s = r === void 0 ? !0 : r,
        o = n.altAxis,
        a = o === void 0 ? !0 : o,
        l = n.fallbackPlacements,
        c = n.padding,
        u = n.boundary,
        d = n.rootBoundary,
        h = n.altBoundary,
        p = n.flipVariations,
        g = p === void 0 ? !0 : p,
        y = n.allowedAutoPlacements,
        v = e.options.placement,
        m = yn(v),
        x = m === v,
        _ = l || (x || !g ? [gl(v)] : w5(v)),
        w = [v].concat(_).reduce(function (W, U) {
          return W.concat(
            yn(U) === Fc
              ? b5(e, {
                  placement: U,
                  boundary: u,
                  rootBoundary: d,
                  padding: c,
                  flipVariations: g,
                  allowedAutoPlacements: y,
                })
              : U,
          );
        }, []),
        E = e.rects.reference,
        S = e.rects.popper,
        C = new Map(),
        k = !0,
        P = w[0],
        j = 0;
      j < w.length;
      j++
    ) {
      var $ = w[j],
        A = yn($),
        M = as($) === rr,
        V = [lt, Nt].indexOf(A) >= 0,
        z = V ? "width" : "height",
        Y = ls(e, {
          placement: $,
          boundary: u,
          rootBoundary: d,
          altBoundary: h,
          padding: c,
        }),
        G = V ? (M ? At : ct) : M ? Nt : lt;
      E[z] > S[z] && (G = gl(G));
      var L = gl(G),
        N = [];
      if (
        (s && N.push(Y[A] <= 0),
        a && N.push(Y[G] <= 0, Y[L] <= 0),
        N.every(function (W) {
          return W;
        }))
      ) {
        (P = $), (k = !1);
        break;
      }
      C.set($, N);
    }
    if (k)
      for (
        var O = g ? 3 : 1,
          F = function (U) {
            var q = w.find(function (he) {
              var De = C.get(he);
              if (De)
                return De.slice(0, U).every(function (Ye) {
                  return Ye;
                });
            });
            if (q) return (P = q), "break";
          },
          R = O;
        R > 0;
        R--
      ) {
        var B = F(R);
        if (B === "break") break;
      }
    e.placement !== P &&
      ((e.modifiersData[i]._skip = !0), (e.placement = P), (e.reset = !0));
  }
}
const H2 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: E5,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function hg(t, e, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: t.top - e.height - n.y,
      right: t.right - e.width + n.x,
      bottom: t.bottom - e.height + n.y,
      left: t.left - e.width - n.x,
    }
  );
}
function pg(t) {
  return [lt, At, Nt, ct].some(function (e) {
    return t[e] >= 0;
  });
}
function S5(t) {
  var e = t.state,
    n = t.name,
    i = e.rects.reference,
    r = e.rects.popper,
    s = e.modifiersData.preventOverflow,
    o = ls(e, { elementContext: "reference" }),
    a = ls(e, { altBoundary: !0 }),
    l = hg(o, i),
    c = hg(a, r, s),
    u = pg(l),
    d = pg(c);
  (e.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: d,
  }),
    (e.attributes.popper = Object.assign({}, e.attributes.popper, {
      "data-popper-reference-hidden": u,
      "data-popper-escaped": d,
    }));
}
const V2 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: S5,
};
function C5(t, e, n) {
  var i = yn(t),
    r = [ct, lt].indexOf(i) >= 0 ? -1 : 1,
    s = typeof n == "function" ? n(Object.assign({}, e, { placement: t })) : n,
    o = s[0],
    a = s[1];
  return (
    (o = o || 0),
    (a = (a || 0) * r),
    [ct, At].indexOf(i) >= 0 ? { x: a, y: o } : { x: o, y: a }
  );
}
function k5(t) {
  var e = t.state,
    n = t.options,
    i = t.name,
    r = n.offset,
    s = r === void 0 ? [0, 0] : r,
    o = Kh.reduce(function (u, d) {
      return (u[d] = C5(d, e.rects, s)), u;
    }, {}),
    a = o[e.placement],
    l = a.x,
    c = a.y;
  e.modifiersData.popperOffsets != null &&
    ((e.modifiersData.popperOffsets.x += l),
    (e.modifiersData.popperOffsets.y += c)),
    (e.modifiersData[i] = o);
}
const U2 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: k5,
};
function O5(t) {
  var e = t.state,
    n = t.name;
  e.modifiersData[n] = W2({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement,
  });
}
const np = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: O5,
  data: {},
};
function T5(t) {
  return t === "x" ? "y" : "x";
}
function N5(t) {
  var e = t.state,
    n = t.options,
    i = t.name,
    r = n.mainAxis,
    s = r === void 0 ? !0 : r,
    o = n.altAxis,
    a = o === void 0 ? !1 : o,
    l = n.boundary,
    c = n.rootBoundary,
    u = n.altBoundary,
    d = n.padding,
    h = n.tether,
    p = h === void 0 ? !0 : h,
    g = n.tetherOffset,
    y = g === void 0 ? 0 : g,
    v = ls(e, { boundary: l, rootBoundary: c, padding: d, altBoundary: u }),
    m = yn(e.placement),
    x = as(e.placement),
    _ = !x,
    w = Xh(m),
    E = T5(w),
    S = e.modifiersData.popperOffsets,
    C = e.rects.reference,
    k = e.rects.popper,
    P =
      typeof y == "function"
        ? y(Object.assign({}, e.rects, { placement: e.placement }))
        : y,
    j =
      typeof P == "number"
        ? { mainAxis: P, altAxis: P }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, P),
    $ = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
    A = { x: 0, y: 0 };
  if (S) {
    if (s) {
      var M,
        V = w === "y" ? lt : ct,
        z = w === "y" ? Nt : At,
        Y = w === "y" ? "height" : "width",
        G = S[w],
        L = G + v[V],
        N = G - v[z],
        O = p ? -k[Y] / 2 : 0,
        F = x === rr ? C[Y] : k[Y],
        R = x === rr ? -k[Y] : -C[Y],
        B = e.elements.arrow,
        W = p && B ? qh(B) : { width: 0, height: 0 },
        U = e.modifiersData["arrow#persistent"]
          ? e.modifiersData["arrow#persistent"].padding
          : I2(),
        q = U[V],
        he = U[z],
        De = ho(0, C[Y], W[Y]),
        Ye = _ ? C[Y] / 2 - O - De - q - j.mainAxis : F - De - q - j.mainAxis,
        Ke = _
          ? -C[Y] / 2 + O + De + he + j.mainAxis
          : R + De + he + j.mainAxis,
        we = e.elements.arrow && oa(e.elements.arrow),
        nt = we ? (w === "y" ? we.clientTop || 0 : we.clientLeft || 0) : 0,
        ze = (M = $ == null ? void 0 : $[w]) != null ? M : 0,
        Re = G + Ye - ze - nt,
        X = G + Ke - ze,
        Te = ho(p ? Zl(L, Re) : L, G, p ? Xi(N, X) : N);
      (S[w] = Te), (A[w] = Te - G);
    }
    if (a) {
      var Ee,
        ve = w === "x" ? lt : ct,
        Un = w === "x" ? Nt : At,
        bt = S[E],
        it = E === "y" ? "height" : "width",
        wt = bt + v[ve],
        ln = bt - v[Un],
        Pi = [lt, ct].indexOf(m) !== -1,
        se = (Ee = $ == null ? void 0 : $[E]) != null ? Ee : 0,
        bn = Pi ? wt : bt - C[it] - k[it] - se + j.altAxis,
        Ns = Pi ? bt + C[it] + k[it] - se - j.altAxis : ln,
        Fp = p && Pi ? o5(bn, bt, Ns) : ho(p ? bn : wt, bt, p ? Ns : ln);
      (S[E] = Fp), (A[E] = Fp - bt);
    }
    e.modifiersData[i] = A;
  }
}
const Y2 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: N5,
  requiresIfExists: ["offset"],
};
function A5(t) {
  return { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
}
function P5(t) {
  return t === Pt(t) || !zt(t) ? Zh(t) : A5(t);
}
function L5(t) {
  var e = t.getBoundingClientRect(),
    n = ss(e.width) / t.offsetWidth || 1,
    i = ss(e.height) / t.offsetHeight || 1;
  return n !== 1 || i !== 1;
}
function j5(t, e, n) {
  n === void 0 && (n = !1);
  var i = zt(e),
    r = zt(e) && L5(e),
    s = Ti(e),
    o = os(t, r, n),
    a = { scrollLeft: 0, scrollTop: 0 },
    l = { x: 0, y: 0 };
  return (
    (i || (!i && !n)) &&
      ((_n(e) !== "body" || tp(s)) && (a = P5(e)),
      zt(e)
        ? ((l = os(e, !0)), (l.x += e.clientLeft), (l.y += e.clientTop))
        : s && (l.x = ep(s))),
    {
      x: o.left + a.scrollLeft - l.x,
      y: o.top + a.scrollTop - l.y,
      width: o.width,
      height: o.height,
    }
  );
}
function D5(t) {
  var e = new Map(),
    n = new Set(),
    i = [];
  t.forEach(function (s) {
    e.set(s.name, s);
  });
  function r(s) {
    n.add(s.name);
    var o = [].concat(s.requires || [], s.requiresIfExists || []);
    o.forEach(function (a) {
      if (!n.has(a)) {
        var l = e.get(a);
        l && r(l);
      }
    }),
      i.push(s);
  }
  return (
    t.forEach(function (s) {
      n.has(s.name) || r(s);
    }),
    i
  );
}
function R5(t) {
  var e = D5(t);
  return D2.reduce(function (n, i) {
    return n.concat(
      e.filter(function (r) {
        return r.phase === i;
      }),
    );
  }, []);
}
function M5(t) {
  var e;
  return function () {
    return (
      e ||
        (e = new Promise(function (n) {
          Promise.resolve().then(function () {
            (e = void 0), n(t());
          });
        })),
      e
    );
  };
}
function I5(t) {
  var e = t.reduce(function (n, i) {
    var r = n[i.name];
    return (
      (n[i.name] = r
        ? Object.assign({}, r, i, {
            options: Object.assign({}, r.options, i.options),
            data: Object.assign({}, r.data, i.data),
          })
        : i),
      n
    );
  }, {});
  return Object.keys(e).map(function (n) {
    return e[n];
  });
}
var gg = { placement: "bottom", modifiers: [], strategy: "absolute" };
function mg() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  return !e.some(function (i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
function zc(t) {
  t === void 0 && (t = {});
  var e = t,
    n = e.defaultModifiers,
    i = n === void 0 ? [] : n,
    r = e.defaultOptions,
    s = r === void 0 ? gg : r;
  return function (a, l, c) {
    c === void 0 && (c = s);
    var u = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, gg, s),
        modifiersData: {},
        elements: { reference: a, popper: l },
        attributes: {},
        styles: {},
      },
      d = [],
      h = !1,
      p = {
        state: u,
        setOptions: function (m) {
          var x = typeof m == "function" ? m(u.options) : m;
          y(),
            (u.options = Object.assign({}, s, u.options, x)),
            (u.scrollParents = {
              reference: sr(a)
                ? po(a)
                : a.contextElement
                ? po(a.contextElement)
                : [],
              popper: po(l),
            });
          var _ = R5(I5([].concat(i, u.options.modifiers)));
          return (
            (u.orderedModifiers = _.filter(function (w) {
              return w.enabled;
            })),
            g(),
            p.update()
          );
        },
        forceUpdate: function () {
          if (!h) {
            var m = u.elements,
              x = m.reference,
              _ = m.popper;
            if (mg(x, _)) {
              (u.rects = {
                reference: j5(x, oa(_), u.options.strategy === "fixed"),
                popper: qh(_),
              }),
                (u.reset = !1),
                (u.placement = u.options.placement),
                u.orderedModifiers.forEach(function (j) {
                  return (u.modifiersData[j.name] = Object.assign({}, j.data));
                });
              for (var w = 0; w < u.orderedModifiers.length; w++) {
                if (u.reset === !0) {
                  (u.reset = !1), (w = -1);
                  continue;
                }
                var E = u.orderedModifiers[w],
                  S = E.fn,
                  C = E.options,
                  k = C === void 0 ? {} : C,
                  P = E.name;
                typeof S == "function" &&
                  (u = S({ state: u, options: k, name: P, instance: p }) || u);
              }
            }
          }
        },
        update: M5(function () {
          return new Promise(function (v) {
            p.forceUpdate(), v(u);
          });
        }),
        destroy: function () {
          y(), (h = !0);
        },
      };
    if (!mg(a, l)) return p;
    p.setOptions(c).then(function (v) {
      !h && c.onFirstUpdate && c.onFirstUpdate(v);
    });
    function g() {
      u.orderedModifiers.forEach(function (v) {
        var m = v.name,
          x = v.options,
          _ = x === void 0 ? {} : x,
          w = v.effect;
        if (typeof w == "function") {
          var E = w({ state: u, name: m, instance: p, options: _ }),
            S = function () {};
          d.push(E || S);
        }
      });
    }
    function y() {
      d.forEach(function (v) {
        return v();
      }),
        (d = []);
    }
    return p;
  };
}
var $5 = zc();
function yg(t, e) {
  if (t.contains) return t.contains(e);
  if (t.compareDocumentPosition)
    return t === e || !!(t.compareDocumentPosition(e) & 16);
}
const ec = b.createContext(null),
  ip = (t, e = null) => (t != null ? String(t) : e || null),
  rp = b.createContext(null);
rp.displayName = "NavContext";
const F5 = "data-rr-ui-",
  B5 = "rrUi";
function Wc(t) {
  return `${F5}${t}`;
}
function z5(t) {
  return `${B5}${t}`;
}
const K2 = b.createContext(bs ? window : void 0);
K2.Provider;
function sp() {
  return b.useContext(K2);
}
const fr = b.createContext(null);
fr.displayName = "NavbarContext";
const W5 = { type: jn.string, tooltip: jn.bool, as: jn.elementType },
  Hc = b.forwardRef(
    (
      { as: t = "div", className: e, type: n = "valid", tooltip: i = !1, ...r },
      s,
    ) =>
      f.jsx(t, {
        ...r,
        ref: s,
        className: ee(e, `${n}-${i ? "tooltip" : "feedback"}`),
      }),
  );
Hc.displayName = "Feedback";
Hc.propTypes = W5;
const zn = b.createContext({}),
  op = b.forwardRef(
    (
      {
        id: t,
        bsPrefix: e,
        className: n,
        type: i = "checkbox",
        isValid: r = !1,
        isInvalid: s = !1,
        as: o = "input",
        ...a
      },
      l,
    ) => {
      const { controlId: c } = b.useContext(zn);
      return (
        (e = ae(e, "form-check-input")),
        f.jsx(o, {
          ...a,
          ref: l,
          type: i,
          id: t || c,
          className: ee(n, e, r && "is-valid", s && "is-invalid"),
        })
      );
    },
  );
op.displayName = "FormCheckInput";
const tc = b.forwardRef(
  ({ bsPrefix: t, className: e, htmlFor: n, ...i }, r) => {
    const { controlId: s } = b.useContext(zn);
    return (
      (t = ae(t, "form-check-label")),
      f.jsx("label", { ...i, ref: r, htmlFor: n || s, className: ee(e, t) })
    );
  },
);
tc.displayName = "FormCheckLabel";
const G2 = b.forwardRef(
  (
    {
      id: t,
      bsPrefix: e,
      bsSwitchPrefix: n,
      inline: i = !1,
      reverse: r = !1,
      disabled: s = !1,
      isValid: o = !1,
      isInvalid: a = !1,
      feedbackTooltip: l = !1,
      feedback: c,
      feedbackType: u,
      className: d,
      style: h,
      title: p = "",
      type: g = "checkbox",
      label: y,
      children: v,
      as: m = "input",
      ...x
    },
    _,
  ) => {
    (e = ae(e, "form-check")), (n = ae(n, "form-switch"));
    const { controlId: w } = b.useContext(zn),
      E = b.useMemo(() => ({ controlId: t || w }), [w, t]),
      S = (!v && y != null && y !== !1) || e5(v, tc),
      C = f.jsx(op, {
        ...x,
        type: g === "switch" ? "checkbox" : g,
        ref: _,
        isValid: o,
        isInvalid: a,
        disabled: s,
        as: m,
      });
    return f.jsx(zn.Provider, {
      value: E,
      children: f.jsx("div", {
        style: h,
        className: ee(
          d,
          S && e,
          i && `${e}-inline`,
          r && `${e}-reverse`,
          g === "switch" && n,
        ),
        children:
          v ||
          f.jsxs(f.Fragment, {
            children: [
              C,
              S && f.jsx(tc, { title: p, children: y }),
              c && f.jsx(Hc, { type: u, tooltip: l, children: c }),
            ],
          }),
      }),
    });
  },
);
G2.displayName = "FormCheck";
const nc = Object.assign(G2, { Input: op, Label: tc }),
  q2 = b.forwardRef(
    (
      {
        bsPrefix: t,
        type: e,
        size: n,
        htmlSize: i,
        id: r,
        className: s,
        isValid: o = !1,
        isInvalid: a = !1,
        plaintext: l,
        readOnly: c,
        as: u = "input",
        ...d
      },
      h,
    ) => {
      const { controlId: p } = b.useContext(zn);
      t = ae(t, "form-control");
      let g;
      return (
        l
          ? (g = { [`${t}-plaintext`]: !0 })
          : (g = { [t]: !0, [`${t}-${n}`]: n }),
        f.jsx(u, {
          ...d,
          type: e,
          size: i,
          ref: h,
          readOnly: c,
          id: r || p,
          className: ee(
            s,
            g,
            o && "is-valid",
            a && "is-invalid",
            e === "color" && `${t}-color`,
          ),
        })
      );
    },
  );
q2.displayName = "FormControl";
const H5 = Object.assign(q2, { Feedback: Hc }),
  V5 = Ue("form-floating"),
  ap = b.forwardRef(({ controlId: t, as: e = "div", ...n }, i) => {
    const r = b.useMemo(() => ({ controlId: t }), [t]);
    return f.jsx(zn.Provider, {
      value: r,
      children: f.jsx(e, { ...n, ref: i }),
    });
  });
ap.displayName = "FormGroup";
const X2 = b.forwardRef(
  (
    {
      as: t = "label",
      bsPrefix: e,
      column: n = !1,
      visuallyHidden: i = !1,
      className: r,
      htmlFor: s,
      ...o
    },
    a,
  ) => {
    const { controlId: l } = b.useContext(zn);
    e = ae(e, "form-label");
    let c = "col-form-label";
    typeof n == "string" && (c = `${c} ${c}-${n}`);
    const u = ee(r, e, i && "visually-hidden", n && c);
    return (
      (s = s || l),
      n
        ? f.jsx(_i, { ref: a, as: "label", className: u, htmlFor: s, ...o })
        : f.jsx(t, { ref: a, className: u, htmlFor: s, ...o })
    );
  },
);
X2.displayName = "FormLabel";
const Q2 = b.forwardRef(({ bsPrefix: t, className: e, id: n, ...i }, r) => {
  const { controlId: s } = b.useContext(zn);
  return (
    (t = ae(t, "form-range")),
    f.jsx("input", {
      ...i,
      type: "range",
      ref: r,
      className: ee(e, t),
      id: n || s,
    })
  );
});
Q2.displayName = "FormRange";
const J2 = b.forwardRef(
  (
    {
      bsPrefix: t,
      size: e,
      htmlSize: n,
      className: i,
      isValid: r = !1,
      isInvalid: s = !1,
      id: o,
      ...a
    },
    l,
  ) => {
    const { controlId: c } = b.useContext(zn);
    return (
      (t = ae(t, "form-select")),
      f.jsx("select", {
        ...a,
        size: n,
        ref: l,
        className: ee(
          i,
          t,
          e && `${t}-${e}`,
          r && "is-valid",
          s && "is-invalid",
        ),
        id: o || c,
      })
    );
  },
);
J2.displayName = "FormSelect";
const Z2 = b.forwardRef(
  ({ bsPrefix: t, className: e, as: n = "small", muted: i, ...r }, s) => (
    (t = ae(t, "form-text")),
    f.jsx(n, { ...r, ref: s, className: ee(e, t, i && "text-muted") })
  ),
);
Z2.displayName = "FormText";
const ex = b.forwardRef((t, e) => f.jsx(nc, { ...t, ref: e, type: "switch" }));
ex.displayName = "Switch";
const U5 = Object.assign(ex, { Input: nc.Input, Label: nc.Label }),
  tx = b.forwardRef(
    (
      { bsPrefix: t, className: e, children: n, controlId: i, label: r, ...s },
      o,
    ) => (
      (t = ae(t, "form-floating")),
      f.jsxs(ap, {
        ref: o,
        className: ee(e, t),
        controlId: i,
        ...s,
        children: [n, f.jsx("label", { htmlFor: i, children: r })],
      })
    ),
  );
tx.displayName = "FloatingLabel";
const Y5 = { _ref: jn.any, validated: jn.bool, as: jn.elementType },
  lp = b.forwardRef(({ className: t, validated: e, as: n = "form", ...i }, r) =>
    f.jsx(n, { ...i, ref: r, className: ee(t, e && "was-validated") }),
  );
lp.displayName = "Form";
lp.propTypes = Y5;
const Q = Object.assign(lp, {
    Group: ap,
    Control: H5,
    Floating: V5,
    Check: nc,
    Switch: U5,
    Label: X2,
    Text: Z2,
    Range: Q2,
    Select: J2,
    FloatingLabel: tx,
  }),
  et = b.forwardRef(
    ({ bsPrefix: t, fluid: e = !1, as: n = "div", className: i, ...r }, s) => {
      const o = ae(t, "container"),
        a = typeof e == "string" ? `-${e}` : "-fluid";
      return f.jsx(n, { ref: s, ...r, className: ee(i, e ? `${o}${a}` : o) });
    },
  );
et.displayName = "Container";
const nx = b.createContext(null),
  K5 = ["as", "active", "eventKey"];
function G5(t, e) {
  if (t == null) return {};
  var n = {},
    i = Object.keys(t),
    r,
    s;
  for (s = 0; s < i.length; s++)
    (r = i[s]), !(e.indexOf(r) >= 0) && (n[r] = t[r]);
  return n;
}
function ix({ key: t, onClick: e, active: n, id: i, role: r, disabled: s }) {
  const o = b.useContext(ec),
    a = b.useContext(rp),
    l = b.useContext(nx);
  let c = n;
  const u = { role: r };
  if (a) {
    !r && a.role === "tablist" && (u.role = "tab");
    const d = a.getControllerId(t ?? null),
      h = a.getControlledId(t ?? null);
    (u[Wc("event-key")] = t),
      (u.id = d || i),
      (c = n == null && t != null ? a.activeKey === t : n),
      (c ||
        (!(l != null && l.unmountOnExit) && !(l != null && l.mountOnEnter))) &&
        (u["aria-controls"] = h);
  }
  return (
    u.role === "tab" &&
      ((u["aria-selected"] = c),
      c || (u.tabIndex = -1),
      s && ((u.tabIndex = -1), (u["aria-disabled"] = !0))),
    (u.onClick = st((d) => {
      s ||
        (e == null || e(d),
        t != null && o && !d.isPropagationStopped() && o(t, d));
    })),
    [u, { isActive: c }]
  );
}
const rx = b.forwardRef((t, e) => {
  let { as: n = g2, active: i, eventKey: r } = t,
    s = G5(t, K5);
  const [o, a] = ix(Object.assign({ key: ip(r, s.href), active: i }, s));
  return (
    (o[Wc("active")] = a.isActive),
    f.jsx(n, Object.assign({}, s, o, { ref: e }))
  );
});
rx.displayName = "NavItem";
const q5 = ["as", "onSelect", "activeKey", "role", "onKeyDown"];
function X5(t, e) {
  if (t == null) return {};
  var n = {},
    i = Object.keys(t),
    r,
    s;
  for (s = 0; s < i.length; s++)
    (r = i[s]), !(e.indexOf(r) >= 0) && (n[r] = t[r]);
  return n;
}
const vg = () => {},
  xg = Wc("event-key"),
  sx = b.forwardRef((t, e) => {
    let { as: n = "div", onSelect: i, activeKey: r, role: s, onKeyDown: o } = t,
      a = X5(t, q5);
    const l = i5(),
      c = b.useRef(!1),
      u = b.useContext(ec),
      d = b.useContext(nx);
    let h, p;
    d &&
      ((s = s || "tablist"),
      (r = d.activeKey),
      (h = d.getControlledId),
      (p = d.getControllerId));
    const g = b.useRef(null),
      y = (_) => {
        const w = g.current;
        if (!w) return null;
        const E = Ii(w, `[${xg}]:not([aria-disabled=true])`),
          S = w.querySelector("[aria-selected=true]");
        if (!S || S !== document.activeElement) return null;
        const C = E.indexOf(S);
        if (C === -1) return null;
        let k = C + _;
        return k >= E.length && (k = 0), k < 0 && (k = E.length - 1), E[k];
      },
      v = (_, w) => {
        _ != null && (i == null || i(_, w), u == null || u(_, w));
      },
      m = (_) => {
        if ((o == null || o(_), !d)) return;
        let w;
        switch (_.key) {
          case "ArrowLeft":
          case "ArrowUp":
            w = y(-1);
            break;
          case "ArrowRight":
          case "ArrowDown":
            w = y(1);
            break;
          default:
            return;
        }
        w &&
          (_.preventDefault(),
          v(w.dataset[z5("EventKey")] || null, _),
          (c.current = !0),
          l());
      };
    b.useEffect(() => {
      if (g.current && c.current) {
        const _ = g.current.querySelector(`[${xg}][aria-selected=true]`);
        _ == null || _.focus();
      }
      c.current = !1;
    });
    const x = ra(e, g);
    return f.jsx(ec.Provider, {
      value: v,
      children: f.jsx(rp.Provider, {
        value: {
          role: s,
          activeKey: ip(r),
          getControlledId: h || vg,
          getControllerId: p || vg,
        },
        children: f.jsx(
          n,
          Object.assign({}, a, { onKeyDown: m, ref: x, role: s }),
        ),
      }),
    });
  });
sx.displayName = "Nav";
const Q5 = Object.assign(sx, { Item: rx });
var Ra;
function _g(t) {
  if (((!Ra && Ra !== 0) || t) && bs) {
    var e = document.createElement("div");
    (e.style.position = "absolute"),
      (e.style.top = "-9999px"),
      (e.style.width = "50px"),
      (e.style.height = "50px"),
      (e.style.overflow = "scroll"),
      document.body.appendChild(e),
      (Ra = e.offsetWidth - e.clientWidth),
      document.body.removeChild(e);
  }
  return Ra;
}
function Au(t) {
  t === void 0 && (t = Ic());
  try {
    var e = t.activeElement;
    return !e || !e.nodeName ? null : e;
  } catch {
    return t.body;
  }
}
function J5(t = document) {
  const e = t.defaultView;
  return Math.abs(e.innerWidth - t.documentElement.clientWidth);
}
const bg = Wc("modal-open");
class cp {
  constructor({
    ownerDocument: e,
    handleContainerOverflow: n = !0,
    isRTL: i = !1,
  } = {}) {
    (this.handleContainerOverflow = n),
      (this.isRTL = i),
      (this.modals = []),
      (this.ownerDocument = e);
  }
  getScrollbarWidth() {
    return J5(this.ownerDocument);
  }
  getElement() {
    return (this.ownerDocument || document).body;
  }
  setModalAttributes(e) {}
  removeModalAttributes(e) {}
  setContainerStyle(e) {
    const n = { overflow: "hidden" },
      i = this.isRTL ? "paddingLeft" : "paddingRight",
      r = this.getElement();
    (e.style = { overflow: r.style.overflow, [i]: r.style[i] }),
      e.scrollBarWidth &&
        (n[i] = `${parseInt(Ln(r, i) || "0", 10) + e.scrollBarWidth}px`),
      r.setAttribute(bg, ""),
      Ln(r, n);
  }
  reset() {
    [...this.modals].forEach((e) => this.remove(e));
  }
  removeContainerStyle(e) {
    const n = this.getElement();
    n.removeAttribute(bg), Object.assign(n.style, e.style);
  }
  add(e) {
    let n = this.modals.indexOf(e);
    return (
      n !== -1 ||
        ((n = this.modals.length),
        this.modals.push(e),
        this.setModalAttributes(e),
        n !== 0) ||
        ((this.state = { scrollBarWidth: this.getScrollbarWidth(), style: {} }),
        this.handleContainerOverflow && this.setContainerStyle(this.state)),
      n
    );
  }
  remove(e) {
    const n = this.modals.indexOf(e);
    n !== -1 &&
      (this.modals.splice(n, 1),
      !this.modals.length &&
        this.handleContainerOverflow &&
        this.removeContainerStyle(this.state),
      this.removeModalAttributes(e));
  }
  isTopModal(e) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === e;
  }
}
const Pu = (t, e) =>
  bs
    ? t == null
      ? (e || Ic()).body
      : (typeof t == "function" && (t = t()),
        t && "current" in t && (t = t.current),
        t && ("nodeType" in t || t.getBoundingClientRect) ? t : null)
    : null;
function Z5(t, e) {
  const n = sp(),
    [i, r] = b.useState(() => Pu(t, n == null ? void 0 : n.document));
  if (!i) {
    const s = Pu(t);
    s && r(s);
  }
  return (
    b.useEffect(() => {}, [e, i]),
    b.useEffect(() => {
      const s = Pu(t);
      s !== i && r(s);
    }, [t, i]),
    i
  );
}
function eS({
  children: t,
  in: e,
  onExited: n,
  mountOnEnter: i,
  unmountOnExit: r,
}) {
  const s = b.useRef(null),
    o = b.useRef(e),
    a = st(n);
  b.useEffect(() => {
    e ? (o.current = !0) : a(s.current);
  }, [e, a]);
  const l = ra(s, t.ref),
    c = b.cloneElement(t, { ref: l });
  return e ? c : r || (!o.current && i) ? null : c;
}
function tS({ in: t, onTransition: e }) {
  const n = b.useRef(null),
    i = b.useRef(!0),
    r = st(e);
  return (
    mf(() => {
      if (!n.current) return;
      let s = !1;
      return (
        r({ in: t, element: n.current, initial: i.current, isStale: () => s }),
        () => {
          s = !0;
        }
      );
    }, [t, r]),
    mf(
      () => (
        (i.current = !1),
        () => {
          i.current = !0;
        }
      ),
      [],
    ),
    n
  );
}
function nS({ children: t, in: e, onExited: n, onEntered: i, transition: r }) {
  const [s, o] = b.useState(!e);
  e && s && o(!1);
  const a = tS({
      in: !!e,
      onTransition: (c) => {
        const u = () => {
          c.isStale() ||
            (c.in
              ? i == null || i(c.element, c.initial)
              : (o(!0), n == null || n(c.element)));
        };
        Promise.resolve(r(c)).then(u, (d) => {
          throw (c.in || o(!0), d);
        });
      },
    }),
    l = ra(a, t.ref);
  return s && !e ? null : b.cloneElement(t, { ref: l });
}
function wg(t, e, n) {
  return t
    ? f.jsx(t, Object.assign({}, n))
    : e
    ? f.jsx(nS, Object.assign({}, n, { transition: e }))
    : f.jsx(eS, Object.assign({}, n));
}
function iS(t) {
  return t.code === "Escape" || t.keyCode === 27;
}
const rS = [
  "show",
  "role",
  "className",
  "style",
  "children",
  "backdrop",
  "keyboard",
  "onBackdropClick",
  "onEscapeKeyDown",
  "transition",
  "runTransition",
  "backdropTransition",
  "runBackdropTransition",
  "autoFocus",
  "enforceFocus",
  "restoreFocus",
  "restoreFocusOptions",
  "renderDialog",
  "renderBackdrop",
  "manager",
  "container",
  "onShow",
  "onHide",
  "onExit",
  "onExited",
  "onExiting",
  "onEnter",
  "onEntering",
  "onEntered",
];
function sS(t, e) {
  if (t == null) return {};
  var n = {},
    i = Object.keys(t),
    r,
    s;
  for (s = 0; s < i.length; s++)
    (r = i[s]), !(e.indexOf(r) >= 0) && (n[r] = t[r]);
  return n;
}
let Lu;
function oS(t) {
  return (
    Lu || (Lu = new cp({ ownerDocument: t == null ? void 0 : t.document })), Lu
  );
}
function aS(t) {
  const e = sp(),
    n = t || oS(e),
    i = b.useRef({ dialog: null, backdrop: null });
  return Object.assign(i.current, {
    add: () => n.add(i.current),
    remove: () => n.remove(i.current),
    isTopModal: () => n.isTopModal(i.current),
    setDialogRef: b.useCallback((r) => {
      i.current.dialog = r;
    }, []),
    setBackdropRef: b.useCallback((r) => {
      i.current.backdrop = r;
    }, []),
  });
}
const ox = b.forwardRef((t, e) => {
  let {
      show: n = !1,
      role: i = "dialog",
      className: r,
      style: s,
      children: o,
      backdrop: a = !0,
      keyboard: l = !0,
      onBackdropClick: c,
      onEscapeKeyDown: u,
      transition: d,
      runTransition: h,
      backdropTransition: p,
      runBackdropTransition: g,
      autoFocus: y = !0,
      enforceFocus: v = !0,
      restoreFocus: m = !0,
      restoreFocusOptions: x,
      renderDialog: _,
      renderBackdrop: w = (X) => f.jsx("div", Object.assign({}, X)),
      manager: E,
      container: S,
      onShow: C,
      onHide: k = () => {},
      onExit: P,
      onExited: j,
      onExiting: $,
      onEnter: A,
      onEntering: M,
      onEntered: V,
    } = t,
    z = sS(t, rS);
  const Y = sp(),
    G = Z5(S),
    L = aS(E),
    N = O4(),
    O = T4(n),
    [F, R] = b.useState(!n),
    B = b.useRef(null);
  b.useImperativeHandle(e, () => L, [L]),
    bs && !O && n && (B.current = Au(Y == null ? void 0 : Y.document)),
    n && F && R(!1);
  const W = st(() => {
      if (
        (L.add(),
        (Ke.current = Jl(document, "keydown", De)),
        (Ye.current = Jl(document, "focus", () => setTimeout(q), !0)),
        C && C(),
        y)
      ) {
        var X, Te;
        const Ee = Au(
          (X = (Te = L.dialog) == null ? void 0 : Te.ownerDocument) != null
            ? X
            : Y == null
            ? void 0
            : Y.document,
        );
        L.dialog &&
          Ee &&
          !yg(L.dialog, Ee) &&
          ((B.current = Ee), L.dialog.focus());
      }
    }),
    U = st(() => {
      if (
        (L.remove(),
        Ke.current == null || Ke.current(),
        Ye.current == null || Ye.current(),
        m)
      ) {
        var X;
        (X = B.current) == null || X.focus == null || X.focus(x),
          (B.current = null);
      }
    });
  b.useEffect(() => {
    !n || !G || W();
  }, [n, G, W]),
    b.useEffect(() => {
      F && U();
    }, [F, U]),
    w2(() => {
      U();
    });
  const q = st(() => {
      if (!v || !N() || !L.isTopModal()) return;
      const X = Au(Y == null ? void 0 : Y.document);
      L.dialog && X && !yg(L.dialog, X) && L.dialog.focus();
    }),
    he = st((X) => {
      X.target === X.currentTarget && (c == null || c(X), a === !0 && k());
    }),
    De = st((X) => {
      l &&
        iS(X) &&
        L.isTopModal() &&
        (u == null || u(X), X.defaultPrevented || k());
    }),
    Ye = b.useRef(),
    Ke = b.useRef(),
    we = (...X) => {
      R(!0), j == null || j(...X);
    };
  if (!G) return null;
  const nt = Object.assign(
    {
      role: i,
      ref: L.setDialogRef,
      "aria-modal": i === "dialog" ? !0 : void 0,
    },
    z,
    { style: s, className: r, tabIndex: -1 },
  );
  let ze = _
    ? _(nt)
    : f.jsx(
        "div",
        Object.assign({}, nt, {
          children: b.cloneElement(o, { role: "document" }),
        }),
      );
  ze = wg(d, h, {
    unmountOnExit: !0,
    mountOnEnter: !0,
    appear: !0,
    in: !!n,
    onExit: P,
    onExiting: $,
    onExited: we,
    onEnter: A,
    onEntering: M,
    onEntered: V,
    children: ze,
  });
  let Re = null;
  return (
    a &&
      ((Re = w({ ref: L.setBackdropRef, onClick: he })),
      (Re = wg(p, g, {
        in: !!n,
        appear: !0,
        mountOnEnter: !0,
        unmountOnExit: !0,
        children: Re,
      }))),
    f.jsx(f.Fragment, {
      children: $r.createPortal(f.jsxs(f.Fragment, { children: [Re, ze] }), G),
    })
  );
});
ox.displayName = "Modal";
const ax = Object.assign(ox, { Manager: cp });
function lS(t, e) {
  return t.classList
    ? t.classList.contains(e)
    : (" " + (t.className.baseVal || t.className) + " ").indexOf(
        " " + e + " ",
      ) !== -1;
}
function cS(t, e) {
  t.classList
    ? t.classList.add(e)
    : lS(t, e) ||
      (typeof t.className == "string"
        ? (t.className = t.className + " " + e)
        : t.setAttribute(
            "class",
            ((t.className && t.className.baseVal) || "") + " " + e,
          ));
}
function Eg(t, e) {
  return t
    .replace(new RegExp("(^|\\s)" + e + "(?:\\s|$)", "g"), "$1")
    .replace(/\s+/g, " ")
    .replace(/^\s*|\s*$/g, "");
}
function uS(t, e) {
  t.classList
    ? t.classList.remove(e)
    : typeof t.className == "string"
    ? (t.className = Eg(t.className, e))
    : t.setAttribute(
        "class",
        Eg((t.className && t.className.baseVal) || "", e),
      );
}
const xr = {
  FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  STICKY_CONTENT: ".sticky-top",
  NAVBAR_TOGGLER: ".navbar-toggler",
};
class lx extends cp {
  adjustAndStore(e, n, i) {
    const r = n.style[e];
    (n.dataset[e] = r), Ln(n, { [e]: `${parseFloat(Ln(n, e)) + i}px` });
  }
  restore(e, n) {
    const i = n.dataset[e];
    i !== void 0 && (delete n.dataset[e], Ln(n, { [e]: i }));
  }
  setContainerStyle(e) {
    super.setContainerStyle(e);
    const n = this.getElement();
    if ((cS(n, "modal-open"), !e.scrollBarWidth)) return;
    const i = this.isRTL ? "paddingLeft" : "paddingRight",
      r = this.isRTL ? "marginLeft" : "marginRight";
    Ii(n, xr.FIXED_CONTENT).forEach((s) =>
      this.adjustAndStore(i, s, e.scrollBarWidth),
    ),
      Ii(n, xr.STICKY_CONTENT).forEach((s) =>
        this.adjustAndStore(r, s, -e.scrollBarWidth),
      ),
      Ii(n, xr.NAVBAR_TOGGLER).forEach((s) =>
        this.adjustAndStore(r, s, e.scrollBarWidth),
      );
  }
  removeContainerStyle(e) {
    super.removeContainerStyle(e);
    const n = this.getElement();
    uS(n, "modal-open");
    const i = this.isRTL ? "paddingLeft" : "paddingRight",
      r = this.isRTL ? "marginLeft" : "marginRight";
    Ii(n, xr.FIXED_CONTENT).forEach((s) => this.restore(i, s)),
      Ii(n, xr.STICKY_CONTENT).forEach((s) => this.restore(r, s)),
      Ii(n, xr.NAVBAR_TOGGLER).forEach((s) => this.restore(r, s));
  }
}
let ju;
function cx(t) {
  return ju || (ju = new lx(t)), ju;
}
const dS = Ue("modal-body"),
  up = b.createContext({ onHide() {} }),
  dp = b.forwardRef(
    (
      {
        bsPrefix: t,
        className: e,
        contentClassName: n,
        centered: i,
        size: r,
        fullscreen: s,
        children: o,
        scrollable: a,
        ...l
      },
      c,
    ) => {
      t = ae(t, "modal");
      const u = `${t}-dialog`,
        d = typeof s == "string" ? `${t}-fullscreen-${s}` : `${t}-fullscreen`;
      return f.jsx("div", {
        ...l,
        ref: c,
        className: ee(
          u,
          e,
          r && `${t}-${r}`,
          i && `${u}-centered`,
          a && `${u}-scrollable`,
          s && d,
        ),
        children: f.jsx("div", {
          className: ee(`${t}-content`, n),
          children: o,
        }),
      });
    },
  );
dp.displayName = "ModalDialog";
const fS = Ue("modal-footer"),
  ux = b.forwardRef(
    (
      {
        closeLabel: t = "Close",
        closeVariant: e,
        closeButton: n = !1,
        onHide: i,
        children: r,
        ...s
      },
      o,
    ) => {
      const a = b.useContext(up),
        l = st(() => {
          a == null || a.onHide(), i == null || i();
        });
      return f.jsxs("div", {
        ref: o,
        ...s,
        children: [
          r,
          n && f.jsx($c, { "aria-label": t, variant: e, onClick: l }),
        ],
      });
    },
  ),
  dx = b.forwardRef(
    (
      {
        bsPrefix: t,
        className: e,
        closeLabel: n = "Close",
        closeButton: i = !1,
        ...r
      },
      s,
    ) => (
      (t = ae(t, "modal-header")),
      f.jsx(ux, {
        ref: s,
        ...r,
        className: ee(e, t),
        closeLabel: n,
        closeButton: i,
      })
    ),
  );
dx.displayName = "ModalHeader";
const hS = sa("h4"),
  pS = Ue("modal-title", { Component: hS });
function gS(t) {
  return f.jsx(is, { ...t, timeout: null });
}
function mS(t) {
  return f.jsx(is, { ...t, timeout: null });
}
const fx = b.forwardRef(
  (
    {
      bsPrefix: t,
      className: e,
      style: n,
      dialogClassName: i,
      contentClassName: r,
      children: s,
      dialogAs: o = dp,
      "aria-labelledby": a,
      "aria-describedby": l,
      "aria-label": c,
      show: u = !1,
      animation: d = !0,
      backdrop: h = !0,
      keyboard: p = !0,
      onEscapeKeyDown: g,
      onShow: y,
      onHide: v,
      container: m,
      autoFocus: x = !0,
      enforceFocus: _ = !0,
      restoreFocus: w = !0,
      restoreFocusOptions: E,
      onEntered: S,
      onExit: C,
      onExiting: k,
      onEnter: P,
      onEntering: j,
      onExited: $,
      backdropClassName: A,
      manager: M,
      ...V
    },
    z,
  ) => {
    const [Y, G] = b.useState({}),
      [L, N] = b.useState(!1),
      O = b.useRef(!1),
      F = b.useRef(!1),
      R = b.useRef(null),
      [B, W] = k4(),
      U = ra(z, W),
      q = st(v),
      he = n4();
    t = ae(t, "modal");
    const De = b.useMemo(() => ({ onHide: q }), [q]);
    function Ye() {
      return M || cx({ isRTL: he });
    }
    function Ke(se) {
      if (!bs) return;
      const bn = Ye().getScrollbarWidth() > 0,
        Ns = se.scrollHeight > Ic(se).documentElement.clientHeight;
      G({
        paddingRight: bn && !Ns ? _g() : void 0,
        paddingLeft: !bn && Ns ? _g() : void 0,
      });
    }
    const we = st(() => {
      B && Ke(B.dialog);
    });
    w2(() => {
      gf(window, "resize", we), R.current == null || R.current();
    });
    const nt = () => {
        O.current = !0;
      },
      ze = (se) => {
        O.current && B && se.target === B.dialog && (F.current = !0),
          (O.current = !1);
      },
      Re = () => {
        N(!0),
          (R.current = h2(B.dialog, () => {
            N(!1);
          }));
      },
      X = (se) => {
        se.target === se.currentTarget && Re();
      },
      Te = (se) => {
        if (h === "static") {
          X(se);
          return;
        }
        if (F.current || se.target !== se.currentTarget) {
          F.current = !1;
          return;
        }
        v == null || v();
      },
      Ee = (se) => {
        p ? g == null || g(se) : (se.preventDefault(), h === "static" && Re());
      },
      ve = (se, bn) => {
        se && Ke(se), P == null || P(se, bn);
      },
      Un = (se) => {
        R.current == null || R.current(), C == null || C(se);
      },
      bt = (se, bn) => {
        j == null || j(se, bn), f2(window, "resize", we);
      },
      it = (se) => {
        se && (se.style.display = ""),
          $ == null || $(se),
          gf(window, "resize", we);
      },
      wt = b.useCallback(
        (se) =>
          f.jsx("div", {
            ...se,
            className: ee(`${t}-backdrop`, A, !d && "show"),
          }),
        [d, A, t],
      ),
      ln = { ...n, ...Y };
    ln.display = "block";
    const Pi = (se) =>
      f.jsx("div", {
        role: "dialog",
        ...se,
        style: ln,
        className: ee(e, t, L && `${t}-static`, !d && "show"),
        onClick: h ? Te : void 0,
        onMouseUp: ze,
        "aria-label": c,
        "aria-labelledby": a,
        "aria-describedby": l,
        children: f.jsx(o, {
          ...V,
          onMouseDown: nt,
          className: i,
          contentClassName: r,
          children: s,
        }),
      });
    return f.jsx(up.Provider, {
      value: De,
      children: f.jsx(ax, {
        show: u,
        ref: U,
        backdrop: h,
        container: m,
        keyboard: !0,
        autoFocus: x,
        enforceFocus: _,
        restoreFocus: w,
        restoreFocusOptions: E,
        onEscapeKeyDown: Ee,
        onShow: y,
        onHide: v,
        onEnter: ve,
        onEntering: bt,
        onEntered: S,
        onExit: Un,
        onExiting: k,
        onExited: it,
        manager: Ye(),
        transition: d ? gS : void 0,
        backdropTransition: d ? mS : void 0,
        renderBackdrop: wt,
        renderDialog: Pi,
      }),
    });
  },
);
fx.displayName = "Modal";
const ii = Object.assign(fx, {
    Body: dS,
    Header: dx,
    Title: pS,
    Footer: fS,
    Dialog: dp,
    TRANSITION_DURATION: 300,
    BACKDROP_TRANSITION_DURATION: 150,
  }),
  yS = Ue("nav-item"),
  hx = b.forwardRef(
    (
      {
        bsPrefix: t,
        className: e,
        as: n = Vh,
        active: i,
        eventKey: r,
        disabled: s = !1,
        ...o
      },
      a,
    ) => {
      t = ae(t, "nav-link");
      const [l, c] = ix({ key: ip(r, o.href), active: i, disabled: s, ...o });
      return f.jsx(n, {
        ...o,
        ...l,
        ref: a,
        disabled: s,
        className: ee(e, t, s && "disabled", c.isActive && "active"),
      });
    },
  );
hx.displayName = "NavLink";
const px = b.forwardRef((t, e) => {
  const {
      as: n = "div",
      bsPrefix: i,
      variant: r,
      fill: s = !1,
      justify: o = !1,
      navbar: a,
      navbarScroll: l,
      className: c,
      activeKey: u,
      ...d
    } = Bh(t, { activeKey: "onSelect" }),
    h = ae(i, "nav");
  let p,
    g,
    y = !1;
  const v = b.useContext(fr),
    m = b.useContext(Uh);
  return (
    v
      ? ((p = v.bsPrefix), (y = a ?? !0))
      : m && ({ cardHeaderBsPrefix: g } = m),
    f.jsx(Q5, {
      as: n,
      ref: e,
      activeKey: u,
      className: ee(c, {
        [h]: !y,
        [`${p}-nav`]: y,
        [`${p}-nav-scroll`]: y && l,
        [`${g}-${r}`]: !!g,
        [`${h}-${r}`]: !!r,
        [`${h}-fill`]: s,
        [`${h}-justified`]: o,
      }),
      ...d,
    })
  );
});
px.displayName = "Nav";
const vS = Object.assign(px, { Item: yS, Link: hx }),
  gx = b.forwardRef(({ bsPrefix: t, className: e, as: n, ...i }, r) => {
    t = ae(t, "navbar-brand");
    const s = n || (i.href ? "a" : "span");
    return f.jsx(s, { ...i, ref: r, className: ee(e, t) });
  });
gx.displayName = "NavbarBrand";
const mx = b.forwardRef(({ children: t, bsPrefix: e, ...n }, i) => {
  e = ae(e, "navbar-collapse");
  const r = b.useContext(fr);
  return f.jsx(S4, {
    in: !!(r && r.expanded),
    ...n,
    children: f.jsx("div", { ref: i, className: e, children: t }),
  });
});
mx.displayName = "NavbarCollapse";
const yx = b.forwardRef(
  (
    {
      bsPrefix: t,
      className: e,
      children: n,
      label: i = "Toggle navigation",
      as: r = "button",
      onClick: s,
      ...o
    },
    a,
  ) => {
    t = ae(t, "navbar-toggler");
    const { onToggle: l, expanded: c } = b.useContext(fr) || {},
      u = st((d) => {
        s && s(d), l && l();
      });
    return (
      r === "button" && (o.type = "button"),
      f.jsx(r, {
        ...o,
        ref: a,
        onClick: u,
        "aria-label": i,
        className: ee(e, t, !c && "collapsed"),
        children: n || f.jsx("span", { className: `${t}-icon` }),
      })
    );
  },
);
yx.displayName = "NavbarToggle";
const _f = new WeakMap(),
  Sg = (t, e) => {
    if (!t || !e) return;
    const n = _f.get(e) || new Map();
    _f.set(e, n);
    let i = n.get(t);
    return i || ((i = e.matchMedia(t)), (i.refCount = 0), n.set(i.media, i)), i;
  };
function xS(t, e = typeof window > "u" ? void 0 : window) {
  const n = Sg(t, e),
    [i, r] = b.useState(() => (n ? n.matches : !1));
  return (
    mf(() => {
      let s = Sg(t, e);
      if (!s) return r(!1);
      let o = _f.get(e);
      const a = () => {
        r(s.matches);
      };
      return (
        s.refCount++,
        s.addListener(a),
        a(),
        () => {
          s.removeListener(a),
            s.refCount--,
            s.refCount <= 0 && (o == null || o.delete(s.media)),
            (s = void 0);
        }
      );
    }, [t]),
    i
  );
}
function _S(t) {
  const e = Object.keys(t);
  function n(a, l) {
    return a === l ? l : a ? `${a} and ${l}` : l;
  }
  function i(a) {
    return e[Math.min(e.indexOf(a) + 1, e.length - 1)];
  }
  function r(a) {
    const l = i(a);
    let c = t[l];
    return (
      typeof c == "number" ? (c = `${c - 0.2}px`) : (c = `calc(${c} - 0.2px)`),
      `(max-width: ${c})`
    );
  }
  function s(a) {
    let l = t[a];
    return typeof l == "number" && (l = `${l}px`), `(min-width: ${l})`;
  }
  function o(a, l, c) {
    let u;
    typeof a == "object"
      ? ((u = a), (c = l), (l = !0))
      : ((l = l || !0), (u = { [a]: l }));
    let d = b.useMemo(
      () =>
        Object.entries(u).reduce(
          (h, [p, g]) => (
            (g === "up" || g === !0) && (h = n(h, s(p))),
            (g === "down" || g === !0) && (h = n(h, r(p))),
            h
          ),
          "",
        ),
      [JSON.stringify(u)],
    );
    return xS(d, c);
  }
  return o;
}
const bS = _S({ xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 }),
  wS = Ue("offcanvas-body"),
  ES = { [Zt]: "show", [Tn]: "show" },
  vx = b.forwardRef(
    (
      {
        bsPrefix: t,
        className: e,
        children: n,
        in: i = !1,
        mountOnEnter: r = !1,
        unmountOnExit: s = !1,
        appear: o = !1,
        ...a
      },
      l,
    ) => (
      (t = ae(t, "offcanvas")),
      f.jsx(Wh, {
        ref: l,
        addEndListener: zh,
        in: i,
        mountOnEnter: r,
        unmountOnExit: s,
        appear: o,
        ...a,
        childRef: n.ref,
        children: (c, u) =>
          b.cloneElement(n, {
            ...u,
            className: ee(
              e,
              n.props.className,
              (c === Zt || c === Wo) && `${t}-toggling`,
              ES[c],
            ),
          }),
      })
    ),
  );
vx.displayName = "OffcanvasToggling";
const xx = b.forwardRef(
  (
    {
      bsPrefix: t,
      className: e,
      closeLabel: n = "Close",
      closeButton: i = !1,
      ...r
    },
    s,
  ) => (
    (t = ae(t, "offcanvas-header")),
    f.jsx(ux, {
      ref: s,
      ...r,
      className: ee(e, t),
      closeLabel: n,
      closeButton: i,
    })
  ),
);
xx.displayName = "OffcanvasHeader";
const SS = sa("h5"),
  CS = Ue("offcanvas-title", { Component: SS });
function kS(t) {
  return f.jsx(vx, { ...t });
}
function OS(t) {
  return f.jsx(is, { ...t });
}
const _x = b.forwardRef(
  (
    {
      bsPrefix: t,
      className: e,
      children: n,
      "aria-labelledby": i,
      placement: r = "start",
      responsive: s,
      show: o = !1,
      backdrop: a = !0,
      keyboard: l = !0,
      scroll: c = !1,
      onEscapeKeyDown: u,
      onShow: d,
      onHide: h,
      container: p,
      autoFocus: g = !0,
      enforceFocus: y = !0,
      restoreFocus: v = !0,
      restoreFocusOptions: m,
      onEntered: x,
      onExit: _,
      onExiting: w,
      onEnter: E,
      onEntering: S,
      onExited: C,
      backdropClassName: k,
      manager: P,
      renderStaticNode: j = !1,
      ...$
    },
    A,
  ) => {
    const M = b.useRef();
    t = ae(t, "offcanvas");
    const { onToggle: V } = b.useContext(fr) || {},
      [z, Y] = b.useState(!1),
      G = bS(s || "xs", "up");
    b.useEffect(() => {
      Y(s ? o && !G : o);
    }, [o, s, G]);
    const L = st(() => {
        V == null || V(), h == null || h();
      }),
      N = b.useMemo(() => ({ onHide: L }), [L]);
    function O() {
      return (
        P ||
        (c
          ? (M.current || (M.current = new lx({ handleContainerOverflow: !1 })),
            M.current)
          : cx())
      );
    }
    const F = (U, ...q) => {
        U && (U.style.visibility = "visible"), E == null || E(U, ...q);
      },
      R = (U, ...q) => {
        U && (U.style.visibility = ""), C == null || C(...q);
      },
      B = b.useCallback(
        (U) => f.jsx("div", { ...U, className: ee(`${t}-backdrop`, k) }),
        [k, t],
      ),
      W = (U) =>
        f.jsx("div", {
          ...U,
          ...$,
          className: ee(e, s ? `${t}-${s}` : t, `${t}-${r}`),
          "aria-labelledby": i,
          children: n,
        });
    return f.jsxs(f.Fragment, {
      children: [
        !z && (s || j) && W({}),
        f.jsx(up.Provider, {
          value: N,
          children: f.jsx(ax, {
            show: z,
            ref: A,
            backdrop: a,
            container: p,
            keyboard: l,
            autoFocus: g,
            enforceFocus: y && !c,
            restoreFocus: v,
            restoreFocusOptions: m,
            onEscapeKeyDown: u,
            onShow: d,
            onHide: L,
            onEnter: F,
            onEntering: S,
            onEntered: x,
            onExit: _,
            onExiting: w,
            onExited: R,
            manager: O(),
            transition: kS,
            backdropTransition: OS,
            renderBackdrop: B,
            renderDialog: W,
          }),
        }),
      ],
    });
  },
);
_x.displayName = "Offcanvas";
const TS = Object.assign(_x, { Body: wS, Header: xx, Title: CS }),
  bx = b.forwardRef((t, e) => {
    const n = b.useContext(fr);
    return f.jsx(TS, {
      ref: e,
      show: !!(n != null && n.expanded),
      ...t,
      renderStaticNode: !0,
    });
  });
bx.displayName = "NavbarOffcanvas";
const NS = Ue("navbar-text", { Component: "span" }),
  wx = b.forwardRef((t, e) => {
    const {
        bsPrefix: n,
        expand: i = !0,
        variant: r = "light",
        bg: s,
        fixed: o,
        sticky: a,
        className: l,
        as: c = "nav",
        expanded: u,
        onToggle: d,
        onSelect: h,
        collapseOnSelect: p = !1,
        ...g
      } = Bh(t, { expanded: "onToggle" }),
      y = ae(n, "navbar"),
      v = b.useCallback(
        (..._) => {
          h == null || h(..._), p && u && (d == null || d(!1));
        },
        [h, p, u, d],
      );
    g.role === void 0 && c !== "nav" && (g.role = "navigation");
    let m = `${y}-expand`;
    typeof i == "string" && (m = `${m}-${i}`);
    const x = b.useMemo(
      () => ({
        onToggle: () => (d == null ? void 0 : d(!u)),
        bsPrefix: y,
        expanded: !!u,
        expand: i,
      }),
      [y, u, i, d],
    );
    return f.jsx(fr.Provider, {
      value: x,
      children: f.jsx(ec.Provider, {
        value: v,
        children: f.jsx(c, {
          ref: e,
          ...g,
          className: ee(
            l,
            y,
            i && m,
            r && `${y}-${r}`,
            s && `bg-${s}`,
            a && `sticky-${a}`,
            o && `fixed-${o}`,
          ),
        }),
      }),
    });
  });
wx.displayName = "Navbar";
const Du = Object.assign(wx, {
  Brand: gx,
  Collapse: mx,
  Offcanvas: bx,
  Text: NS,
  Toggle: yx,
});
function AS(t) {
  return t <= 0 ? "100%" : t < 1 ? `${t * 100}%` : `${t}%`;
}
const PS = b.forwardRef(
    (
      {
        bsPrefix: t,
        className: e,
        children: n,
        aspectRatio: i = "1x1",
        style: r,
        ...s
      },
      o,
    ) => {
      t = ae(t, "ratio");
      const a = typeof i == "number";
      return f.jsx("div", {
        ref: o,
        ...s,
        style: { ...r, ...(a && { "--bs-aspect-ratio": AS(i) }) },
        className: ee(t, e, !a && `${t}-${i}`),
        children: b.Children.only(n),
      });
    },
  ),
  cs = b.forwardRef(({ bsPrefix: t, className: e, as: n = "div", ...i }, r) => {
    const s = ae(t, "row"),
      o = o2(),
      a = a2(),
      l = `${s}-cols`,
      c = [];
    return (
      o.forEach((u) => {
        const d = i[u];
        delete i[u];
        let h;
        d != null && typeof d == "object" ? ({ cols: h } = d) : (h = d);
        const p = u !== a ? `-${u}` : "";
        h != null && c.push(`${l}${p}-${h}`);
      }),
      f.jsx(n, { ref: r, ...i, className: ee(e, s, ...c) })
    );
  });
cs.displayName = "Row";
const Ex = b.forwardRef(
  (
    {
      bsPrefix: t,
      className: e,
      striped: n,
      bordered: i,
      borderless: r,
      hover: s,
      size: o,
      variant: a,
      responsive: l,
      ...c
    },
    u,
  ) => {
    const d = ae(t, "table"),
      h = ee(
        e,
        d,
        a && `${d}-${a}`,
        o && `${d}-${o}`,
        n && `${d}-${typeof n == "string" ? `striped-${n}` : "striped"}`,
        i && `${d}-bordered`,
        r && `${d}-borderless`,
        s && `${d}-hover`,
      ),
      p = f.jsx("table", { ...c, className: h, ref: u });
    if (l) {
      let g = `${d}-responsive`;
      return (
        typeof l == "string" && (g = `${g}-${l}`),
        f.jsx("div", { className: g, children: p })
      );
    }
    return p;
  },
);
function Sx(t, e) {
  return function () {
    return t.apply(e, arguments);
  };
}
const { toString: LS } = Object.prototype,
  { getPrototypeOf: fp } = Object,
  Vc = ((t) => (e) => {
    const n = LS.call(e);
    return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  on = (t) => ((t = t.toLowerCase()), (e) => Vc(e) === t),
  Uc = (t) => (e) => typeof e === t,
  { isArray: Es } = Array,
  Ho = Uc("undefined");
function jS(t) {
  return (
    t !== null &&
    !Ho(t) &&
    t.constructor !== null &&
    !Ho(t.constructor) &&
    Ot(t.constructor.isBuffer) &&
    t.constructor.isBuffer(t)
  );
}
const Cx = on("ArrayBuffer");
function DS(t) {
  let e;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (e = ArrayBuffer.isView(t))
      : (e = t && t.buffer && Cx(t.buffer)),
    e
  );
}
const RS = Uc("string"),
  Ot = Uc("function"),
  kx = Uc("number"),
  Yc = (t) => t !== null && typeof t == "object",
  MS = (t) => t === !0 || t === !1,
  ml = (t) => {
    if (Vc(t) !== "object") return !1;
    const e = fp(t);
    return (
      (e === null ||
        e === Object.prototype ||
        Object.getPrototypeOf(e) === null) &&
      !(Symbol.toStringTag in t) &&
      !(Symbol.iterator in t)
    );
  },
  IS = on("Date"),
  $S = on("File"),
  FS = on("Blob"),
  BS = on("FileList"),
  zS = (t) => Yc(t) && Ot(t.pipe),
  WS = (t) => {
    let e;
    return (
      t &&
      ((typeof FormData == "function" && t instanceof FormData) ||
        (Ot(t.append) &&
          ((e = Vc(t)) === "formdata" ||
            (e === "object" &&
              Ot(t.toString) &&
              t.toString() === "[object FormData]"))))
    );
  },
  HS = on("URLSearchParams"),
  [VS, US, YS, KS] = ["ReadableStream", "Request", "Response", "Headers"].map(
    on,
  ),
  GS = (t) =>
    t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function aa(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u") return;
  let i, r;
  if ((typeof t != "object" && (t = [t]), Es(t)))
    for (i = 0, r = t.length; i < r; i++) e.call(null, t[i], i, t);
  else {
    const s = n ? Object.getOwnPropertyNames(t) : Object.keys(t),
      o = s.length;
    let a;
    for (i = 0; i < o; i++) (a = s[i]), e.call(null, t[a], a, t);
  }
}
function Ox(t, e) {
  e = e.toLowerCase();
  const n = Object.keys(t);
  let i = n.length,
    r;
  for (; i-- > 0; ) if (((r = n[i]), e === r.toLowerCase())) return r;
  return null;
}
const Hi =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Tx = (t) => !Ho(t) && t !== Hi;
function bf() {
  const { caseless: t } = (Tx(this) && this) || {},
    e = {},
    n = (i, r) => {
      const s = (t && Ox(e, r)) || r;
      ml(e[s]) && ml(i)
        ? (e[s] = bf(e[s], i))
        : ml(i)
        ? (e[s] = bf({}, i))
        : Es(i)
        ? (e[s] = i.slice())
        : (e[s] = i);
    };
  for (let i = 0, r = arguments.length; i < r; i++)
    arguments[i] && aa(arguments[i], n);
  return e;
}
const qS = (t, e, n, { allOwnKeys: i } = {}) => (
    aa(
      e,
      (r, s) => {
        n && Ot(r) ? (t[s] = Sx(r, n)) : (t[s] = r);
      },
      { allOwnKeys: i },
    ),
    t
  ),
  XS = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t),
  QS = (t, e, n, i) => {
    (t.prototype = Object.create(e.prototype, i)),
      (t.prototype.constructor = t),
      Object.defineProperty(t, "super", { value: e.prototype }),
      n && Object.assign(t.prototype, n);
  },
  JS = (t, e, n, i) => {
    let r, s, o;
    const a = {};
    if (((e = e || {}), t == null)) return e;
    do {
      for (r = Object.getOwnPropertyNames(t), s = r.length; s-- > 0; )
        (o = r[s]), (!i || i(o, t, e)) && !a[o] && ((e[o] = t[o]), (a[o] = !0));
      t = n !== !1 && fp(t);
    } while (t && (!n || n(t, e)) && t !== Object.prototype);
    return e;
  },
  ZS = (t, e, n) => {
    (t = String(t)),
      (n === void 0 || n > t.length) && (n = t.length),
      (n -= e.length);
    const i = t.indexOf(e, n);
    return i !== -1 && i === n;
  },
  eC = (t) => {
    if (!t) return null;
    if (Es(t)) return t;
    let e = t.length;
    if (!kx(e)) return null;
    const n = new Array(e);
    for (; e-- > 0; ) n[e] = t[e];
    return n;
  },
  tC = (
    (t) => (e) =>
      t && e instanceof t
  )(typeof Uint8Array < "u" && fp(Uint8Array)),
  nC = (t, e) => {
    const i = (t && t[Symbol.iterator]).call(t);
    let r;
    for (; (r = i.next()) && !r.done; ) {
      const s = r.value;
      e.call(t, s[0], s[1]);
    }
  },
  iC = (t, e) => {
    let n;
    const i = [];
    for (; (n = t.exec(e)) !== null; ) i.push(n);
    return i;
  },
  rC = on("HTMLFormElement"),
  sC = (t) =>
    t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, i, r) {
      return i.toUpperCase() + r;
    }),
  Cg = (
    ({ hasOwnProperty: t }) =>
    (e, n) =>
      t.call(e, n)
  )(Object.prototype),
  oC = on("RegExp"),
  Nx = (t, e) => {
    const n = Object.getOwnPropertyDescriptors(t),
      i = {};
    aa(n, (r, s) => {
      let o;
      (o = e(r, s, t)) !== !1 && (i[s] = o || r);
    }),
      Object.defineProperties(t, i);
  },
  aC = (t) => {
    Nx(t, (e, n) => {
      if (Ot(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const i = t[n];
      if (Ot(i)) {
        if (((e.enumerable = !1), "writable" in e)) {
          e.writable = !1;
          return;
        }
        e.set ||
          (e.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  lC = (t, e) => {
    const n = {},
      i = (r) => {
        r.forEach((s) => {
          n[s] = !0;
        });
      };
    return Es(t) ? i(t) : i(String(t).split(e)), n;
  },
  cC = () => {},
  uC = (t, e) => (t != null && Number.isFinite((t = +t)) ? t : e),
  Ru = "abcdefghijklmnopqrstuvwxyz",
  kg = "0123456789",
  Ax = { DIGIT: kg, ALPHA: Ru, ALPHA_DIGIT: Ru + Ru.toUpperCase() + kg },
  dC = (t = 16, e = Ax.ALPHA_DIGIT) => {
    let n = "";
    const { length: i } = e;
    for (; t--; ) n += e[(Math.random() * i) | 0];
    return n;
  };
function fC(t) {
  return !!(
    t &&
    Ot(t.append) &&
    t[Symbol.toStringTag] === "FormData" &&
    t[Symbol.iterator]
  );
}
const hC = (t) => {
    const e = new Array(10),
      n = (i, r) => {
        if (Yc(i)) {
          if (e.indexOf(i) >= 0) return;
          if (!("toJSON" in i)) {
            e[r] = i;
            const s = Es(i) ? [] : {};
            return (
              aa(i, (o, a) => {
                const l = n(o, r + 1);
                !Ho(l) && (s[a] = l);
              }),
              (e[r] = void 0),
              s
            );
          }
        }
        return i;
      };
    return n(t, 0);
  },
  pC = on("AsyncFunction"),
  gC = (t) => t && (Yc(t) || Ot(t)) && Ot(t.then) && Ot(t.catch),
  Px = ((t, e) =>
    t
      ? setImmediate
      : e
      ? ((n, i) => (
          Hi.addEventListener(
            "message",
            ({ source: r, data: s }) => {
              r === Hi && s === n && i.length && i.shift()();
            },
            !1,
          ),
          (r) => {
            i.push(r), Hi.postMessage(n, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    Ot(Hi.postMessage),
  ),
  mC =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Hi)
      : (typeof process < "u" && process.nextTick) || Px,
  T = {
    isArray: Es,
    isArrayBuffer: Cx,
    isBuffer: jS,
    isFormData: WS,
    isArrayBufferView: DS,
    isString: RS,
    isNumber: kx,
    isBoolean: MS,
    isObject: Yc,
    isPlainObject: ml,
    isReadableStream: VS,
    isRequest: US,
    isResponse: YS,
    isHeaders: KS,
    isUndefined: Ho,
    isDate: IS,
    isFile: $S,
    isBlob: FS,
    isRegExp: oC,
    isFunction: Ot,
    isStream: zS,
    isURLSearchParams: HS,
    isTypedArray: tC,
    isFileList: BS,
    forEach: aa,
    merge: bf,
    extend: qS,
    trim: GS,
    stripBOM: XS,
    inherits: QS,
    toFlatObject: JS,
    kindOf: Vc,
    kindOfTest: on,
    endsWith: ZS,
    toArray: eC,
    forEachEntry: nC,
    matchAll: iC,
    isHTMLForm: rC,
    hasOwnProperty: Cg,
    hasOwnProp: Cg,
    reduceDescriptors: Nx,
    freezeMethods: aC,
    toObjectSet: lC,
    toCamelCase: sC,
    noop: cC,
    toFiniteNumber: uC,
    findKey: Ox,
    global: Hi,
    isContextDefined: Tx,
    ALPHABET: Ax,
    generateString: dC,
    isSpecCompliantForm: fC,
    toJSONObject: hC,
    isAsyncFn: pC,
    isThenable: gC,
    setImmediate: Px,
    asap: mC,
  };
function J(t, e, n, i, r) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = t),
    (this.name = "AxiosError"),
    e && (this.code = e),
    n && (this.config = n),
    i && (this.request = i),
    r && (this.response = r);
}
T.inherits(J, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: T.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Lx = J.prototype,
  jx = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((t) => {
  jx[t] = { value: t };
});
Object.defineProperties(J, jx);
Object.defineProperty(Lx, "isAxiosError", { value: !0 });
J.from = (t, e, n, i, r, s) => {
  const o = Object.create(Lx);
  return (
    T.toFlatObject(
      t,
      o,
      function (l) {
        return l !== Error.prototype;
      },
      (a) => a !== "isAxiosError",
    ),
    J.call(o, t.message, e, n, i, r),
    (o.cause = t),
    (o.name = t.name),
    s && Object.assign(o, s),
    o
  );
};
const yC = null;
function wf(t) {
  return T.isPlainObject(t) || T.isArray(t);
}
function Dx(t) {
  return T.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Og(t, e, n) {
  return t
    ? t
        .concat(e)
        .map(function (r, s) {
          return (r = Dx(r)), !n && s ? "[" + r + "]" : r;
        })
        .join(n ? "." : "")
    : e;
}
function vC(t) {
  return T.isArray(t) && !t.some(wf);
}
const xC = T.toFlatObject(T, {}, null, function (e) {
  return /^is[A-Z]/.test(e);
});
function Kc(t, e, n) {
  if (!T.isObject(t)) throw new TypeError("target must be an object");
  (e = e || new FormData()),
    (n = T.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (y, v) {
        return !T.isUndefined(v[y]);
      },
    ));
  const i = n.metaTokens,
    r = n.visitor || u,
    s = n.dots,
    o = n.indexes,
    l = (n.Blob || (typeof Blob < "u" && Blob)) && T.isSpecCompliantForm(e);
  if (!T.isFunction(r)) throw new TypeError("visitor must be a function");
  function c(g) {
    if (g === null) return "";
    if (T.isDate(g)) return g.toISOString();
    if (!l && T.isBlob(g))
      throw new J("Blob is not supported. Use a Buffer instead.");
    return T.isArrayBuffer(g) || T.isTypedArray(g)
      ? l && typeof Blob == "function"
        ? new Blob([g])
        : Buffer.from(g)
      : g;
  }
  function u(g, y, v) {
    let m = g;
    if (g && !v && typeof g == "object") {
      if (T.endsWith(y, "{}"))
        (y = i ? y : y.slice(0, -2)), (g = JSON.stringify(g));
      else if (
        (T.isArray(g) && vC(g)) ||
        ((T.isFileList(g) || T.endsWith(y, "[]")) && (m = T.toArray(g)))
      )
        return (
          (y = Dx(y)),
          m.forEach(function (_, w) {
            !(T.isUndefined(_) || _ === null) &&
              e.append(
                o === !0 ? Og([y], w, s) : o === null ? y : y + "[]",
                c(_),
              );
          }),
          !1
        );
    }
    return wf(g) ? !0 : (e.append(Og(v, y, s), c(g)), !1);
  }
  const d = [],
    h = Object.assign(xC, {
      defaultVisitor: u,
      convertValue: c,
      isVisitable: wf,
    });
  function p(g, y) {
    if (!T.isUndefined(g)) {
      if (d.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      d.push(g),
        T.forEach(g, function (m, x) {
          (!(T.isUndefined(m) || m === null) &&
            r.call(e, m, T.isString(x) ? x.trim() : x, y, h)) === !0 &&
            p(m, y ? y.concat(x) : [x]);
        }),
        d.pop();
    }
  }
  if (!T.isObject(t)) throw new TypeError("data must be an object");
  return p(t), e;
}
function Tg(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (i) {
    return e[i];
  });
}
function hp(t, e) {
  (this._pairs = []), t && Kc(t, this, e);
}
const Rx = hp.prototype;
Rx.append = function (e, n) {
  this._pairs.push([e, n]);
};
Rx.toString = function (e) {
  const n = e
    ? function (i) {
        return e.call(this, i, Tg);
      }
    : Tg;
  return this._pairs
    .map(function (r) {
      return n(r[0]) + "=" + n(r[1]);
    }, "")
    .join("&");
};
function _C(t) {
  return encodeURIComponent(t)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Mx(t, e, n) {
  if (!e) return t;
  const i = (n && n.encode) || _C,
    r = n && n.serialize;
  let s;
  if (
    (r
      ? (s = r(e, n))
      : (s = T.isURLSearchParams(e) ? e.toString() : new hp(e, n).toString(i)),
    s)
  ) {
    const o = t.indexOf("#");
    o !== -1 && (t = t.slice(0, o)),
      (t += (t.indexOf("?") === -1 ? "?" : "&") + s);
  }
  return t;
}
class Ng {
  constructor() {
    this.handlers = [];
  }
  use(e, n, i) {
    return (
      this.handlers.push({
        fulfilled: e,
        rejected: n,
        synchronous: i ? i.synchronous : !1,
        runWhen: i ? i.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(e) {
    T.forEach(this.handlers, function (i) {
      i !== null && e(i);
    });
  }
}
const Ix = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  bC = typeof URLSearchParams < "u" ? URLSearchParams : hp,
  wC = typeof FormData < "u" ? FormData : null,
  EC = typeof Blob < "u" ? Blob : null,
  SC = {
    isBrowser: !0,
    classes: { URLSearchParams: bC, FormData: wC, Blob: EC },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  pp = typeof window < "u" && typeof document < "u",
  CC = ((t) => pp && ["ReactNative", "NativeScript", "NS"].indexOf(t) < 0)(
    typeof navigator < "u" && navigator.product,
  ),
  kC =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  OC = (pp && window.location.href) || "http://localhost",
  TC = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: pp,
        hasStandardBrowserEnv: CC,
        hasStandardBrowserWebWorkerEnv: kC,
        origin: OC,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  rn = { ...TC, ...SC };
function NC(t, e) {
  return Kc(
    t,
    new rn.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, i, r, s) {
          return rn.isNode && T.isBuffer(n)
            ? (this.append(i, n.toString("base64")), !1)
            : s.defaultVisitor.apply(this, arguments);
        },
      },
      e,
    ),
  );
}
function AC(t) {
  return T.matchAll(/\w+|\[(\w*)]/g, t).map((e) =>
    e[0] === "[]" ? "" : e[1] || e[0],
  );
}
function PC(t) {
  const e = {},
    n = Object.keys(t);
  let i;
  const r = n.length;
  let s;
  for (i = 0; i < r; i++) (s = n[i]), (e[s] = t[s]);
  return e;
}
function $x(t) {
  function e(n, i, r, s) {
    let o = n[s++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o),
      l = s >= n.length;
    return (
      (o = !o && T.isArray(r) ? r.length : o),
      l
        ? (T.hasOwnProp(r, o) ? (r[o] = [r[o], i]) : (r[o] = i), !a)
        : ((!r[o] || !T.isObject(r[o])) && (r[o] = []),
          e(n, i, r[o], s) && T.isArray(r[o]) && (r[o] = PC(r[o])),
          !a)
    );
  }
  if (T.isFormData(t) && T.isFunction(t.entries)) {
    const n = {};
    return (
      T.forEachEntry(t, (i, r) => {
        e(AC(i), r, n, 0);
      }),
      n
    );
  }
  return null;
}
function LC(t, e, n) {
  if (T.isString(t))
    try {
      return (e || JSON.parse)(t), T.trim(t);
    } catch (i) {
      if (i.name !== "SyntaxError") throw i;
    }
  return (0, JSON.stringify)(t);
}
const la = {
  transitional: Ix,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (e, n) {
      const i = n.getContentType() || "",
        r = i.indexOf("application/json") > -1,
        s = T.isObject(e);
      if ((s && T.isHTMLForm(e) && (e = new FormData(e)), T.isFormData(e)))
        return r ? JSON.stringify($x(e)) : e;
      if (
        T.isArrayBuffer(e) ||
        T.isBuffer(e) ||
        T.isStream(e) ||
        T.isFile(e) ||
        T.isBlob(e) ||
        T.isReadableStream(e)
      )
        return e;
      if (T.isArrayBufferView(e)) return e.buffer;
      if (T.isURLSearchParams(e))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          e.toString()
        );
      let a;
      if (s) {
        if (i.indexOf("application/x-www-form-urlencoded") > -1)
          return NC(e, this.formSerializer).toString();
        if ((a = T.isFileList(e)) || i.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return Kc(
            a ? { "files[]": e } : e,
            l && new l(),
            this.formSerializer,
          );
        }
      }
      return s || r ? (n.setContentType("application/json", !1), LC(e)) : e;
    },
  ],
  transformResponse: [
    function (e) {
      const n = this.transitional || la.transitional,
        i = n && n.forcedJSONParsing,
        r = this.responseType === "json";
      if (T.isResponse(e) || T.isReadableStream(e)) return e;
      if (e && T.isString(e) && ((i && !this.responseType) || r)) {
        const o = !(n && n.silentJSONParsing) && r;
        try {
          return JSON.parse(e);
        } catch (a) {
          if (o)
            throw a.name === "SyntaxError"
              ? J.from(a, J.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return e;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: rn.classes.FormData, Blob: rn.classes.Blob },
  validateStatus: function (e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
T.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  la.headers[t] = {};
});
const jC = T.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  DC = (t) => {
    const e = {};
    let n, i, r;
    return (
      t &&
        t
          .split(
            `
`,
          )
          .forEach(function (o) {
            (r = o.indexOf(":")),
              (n = o.substring(0, r).trim().toLowerCase()),
              (i = o.substring(r + 1).trim()),
              !(!n || (e[n] && jC[n])) &&
                (n === "set-cookie"
                  ? e[n]
                    ? e[n].push(i)
                    : (e[n] = [i])
                  : (e[n] = e[n] ? e[n] + ", " + i : i));
          }),
      e
    );
  },
  Ag = Symbol("internals");
function Fs(t) {
  return t && String(t).trim().toLowerCase();
}
function yl(t) {
  return t === !1 || t == null ? t : T.isArray(t) ? t.map(yl) : String(t);
}
function RC(t) {
  const e = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let i;
  for (; (i = n.exec(t)); ) e[i[1]] = i[2];
  return e;
}
const MC = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Mu(t, e, n, i, r) {
  if (T.isFunction(i)) return i.call(this, e, n);
  if ((r && (e = n), !!T.isString(e))) {
    if (T.isString(i)) return e.indexOf(i) !== -1;
    if (T.isRegExp(i)) return i.test(e);
  }
}
function IC(t) {
  return t
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (e, n, i) => n.toUpperCase() + i);
}
function $C(t, e) {
  const n = T.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((i) => {
    Object.defineProperty(t, i + n, {
      value: function (r, s, o) {
        return this[i].call(this, e, r, s, o);
      },
      configurable: !0,
    });
  });
}
class _t {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, i) {
    const r = this;
    function s(a, l, c) {
      const u = Fs(l);
      if (!u) throw new Error("header name must be a non-empty string");
      const d = T.findKey(r, u);
      (!d || r[d] === void 0 || c === !0 || (c === void 0 && r[d] !== !1)) &&
        (r[d || l] = yl(a));
    }
    const o = (a, l) => T.forEach(a, (c, u) => s(c, u, l));
    if (T.isPlainObject(e) || e instanceof this.constructor) o(e, n);
    else if (T.isString(e) && (e = e.trim()) && !MC(e)) o(DC(e), n);
    else if (T.isHeaders(e)) for (const [a, l] of e.entries()) s(l, a, i);
    else e != null && s(n, e, i);
    return this;
  }
  get(e, n) {
    if (((e = Fs(e)), e)) {
      const i = T.findKey(this, e);
      if (i) {
        const r = this[i];
        if (!n) return r;
        if (n === !0) return RC(r);
        if (T.isFunction(n)) return n.call(this, r, i);
        if (T.isRegExp(n)) return n.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (((e = Fs(e)), e)) {
      const i = T.findKey(this, e);
      return !!(i && this[i] !== void 0 && (!n || Mu(this, this[i], i, n)));
    }
    return !1;
  }
  delete(e, n) {
    const i = this;
    let r = !1;
    function s(o) {
      if (((o = Fs(o)), o)) {
        const a = T.findKey(i, o);
        a && (!n || Mu(i, i[a], a, n)) && (delete i[a], (r = !0));
      }
    }
    return T.isArray(e) ? e.forEach(s) : s(e), r;
  }
  clear(e) {
    const n = Object.keys(this);
    let i = n.length,
      r = !1;
    for (; i--; ) {
      const s = n[i];
      (!e || Mu(this, this[s], s, e, !0)) && (delete this[s], (r = !0));
    }
    return r;
  }
  normalize(e) {
    const n = this,
      i = {};
    return (
      T.forEach(this, (r, s) => {
        const o = T.findKey(i, s);
        if (o) {
          (n[o] = yl(r)), delete n[s];
          return;
        }
        const a = e ? IC(s) : String(s).trim();
        a !== s && delete n[s], (n[a] = yl(r)), (i[a] = !0);
      }),
      this
    );
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = Object.create(null);
    return (
      T.forEach(this, (i, r) => {
        i != null && i !== !1 && (n[r] = e && T.isArray(i) ? i.join(", ") : i);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...n) {
    const i = new this(e);
    return n.forEach((r) => i.set(r)), i;
  }
  static accessor(e) {
    const i = (this[Ag] = this[Ag] = { accessors: {} }).accessors,
      r = this.prototype;
    function s(o) {
      const a = Fs(o);
      i[a] || ($C(r, o), (i[a] = !0));
    }
    return T.isArray(e) ? e.forEach(s) : s(e), this;
  }
}
_t.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
T.reduceDescriptors(_t.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(i) {
      this[n] = i;
    },
  };
});
T.freezeMethods(_t);
function Iu(t, e) {
  const n = this || la,
    i = e || n,
    r = _t.from(i.headers);
  let s = i.data;
  return (
    T.forEach(t, function (a) {
      s = a.call(n, s, r.normalize(), e ? e.status : void 0);
    }),
    r.normalize(),
    s
  );
}
function Fx(t) {
  return !!(t && t.__CANCEL__);
}
function Ss(t, e, n) {
  J.call(this, t ?? "canceled", J.ERR_CANCELED, e, n),
    (this.name = "CanceledError");
}
T.inherits(Ss, J, { __CANCEL__: !0 });
function Bx(t, e, n) {
  const i = n.config.validateStatus;
  !n.status || !i || i(n.status)
    ? t(n)
    : e(
        new J(
          "Request failed with status code " + n.status,
          [J.ERR_BAD_REQUEST, J.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n,
        ),
      );
}
function FC(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return (e && e[1]) || "";
}
function BC(t, e) {
  t = t || 10;
  const n = new Array(t),
    i = new Array(t);
  let r = 0,
    s = 0,
    o;
  return (
    (e = e !== void 0 ? e : 1e3),
    function (l) {
      const c = Date.now(),
        u = i[s];
      o || (o = c), (n[r] = l), (i[r] = c);
      let d = s,
        h = 0;
      for (; d !== r; ) (h += n[d++]), (d = d % t);
      if (((r = (r + 1) % t), r === s && (s = (s + 1) % t), c - o < e)) return;
      const p = u && c - u;
      return p ? Math.round((h * 1e3) / p) : void 0;
    }
  );
}
function zC(t, e) {
  let n = 0,
    i = 1e3 / e,
    r,
    s;
  const o = (c, u = Date.now()) => {
    (n = u), (r = null), s && (clearTimeout(s), (s = null)), t.apply(null, c);
  };
  return [
    (...c) => {
      const u = Date.now(),
        d = u - n;
      d >= i
        ? o(c, u)
        : ((r = c),
          s ||
            (s = setTimeout(() => {
              (s = null), o(r);
            }, i - d)));
    },
    () => r && o(r),
  ];
}
const ic = (t, e, n = 3) => {
    let i = 0;
    const r = BC(50, 250);
    return zC((s) => {
      const o = s.loaded,
        a = s.lengthComputable ? s.total : void 0,
        l = o - i,
        c = r(l),
        u = o <= a;
      i = o;
      const d = {
        loaded: o,
        total: a,
        progress: a ? o / a : void 0,
        bytes: l,
        rate: c || void 0,
        estimated: c && a && u ? (a - o) / c : void 0,
        event: s,
        lengthComputable: a != null,
        [e ? "download" : "upload"]: !0,
      };
      t(d);
    }, n);
  },
  Pg = (t, e) => {
    const n = t != null;
    return [(i) => e[0]({ lengthComputable: n, total: t, loaded: i }), e[1]];
  },
  Lg =
    (t) =>
    (...e) =>
      T.asap(() => t(...e)),
  WC = rn.hasStandardBrowserEnv
    ? (function () {
        const e = /(msie|trident)/i.test(navigator.userAgent),
          n = document.createElement("a");
        let i;
        function r(s) {
          let o = s;
          return (
            e && (n.setAttribute("href", o), (o = n.href)),
            n.setAttribute("href", o),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, "") : "",
              hash: n.hash ? n.hash.replace(/^#/, "") : "",
              hostname: n.hostname,
              port: n.port,
              pathname:
                n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
            }
          );
        }
        return (
          (i = r(window.location.href)),
          function (o) {
            const a = T.isString(o) ? r(o) : o;
            return a.protocol === i.protocol && a.host === i.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  HC = rn.hasStandardBrowserEnv
    ? {
        write(t, e, n, i, r, s) {
          const o = [t + "=" + encodeURIComponent(e)];
          T.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
            T.isString(i) && o.push("path=" + i),
            T.isString(r) && o.push("domain=" + r),
            s === !0 && o.push("secure"),
            (document.cookie = o.join("; "));
        },
        read(t) {
          const e = document.cookie.match(
            new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"),
          );
          return e ? decodeURIComponent(e[3]) : null;
        },
        remove(t) {
          this.write(t, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function VC(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function UC(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function zx(t, e) {
  return t && !VC(e) ? UC(t, e) : e;
}
const jg = (t) => (t instanceof _t ? { ...t } : t);
function or(t, e) {
  e = e || {};
  const n = {};
  function i(c, u, d) {
    return T.isPlainObject(c) && T.isPlainObject(u)
      ? T.merge.call({ caseless: d }, c, u)
      : T.isPlainObject(u)
      ? T.merge({}, u)
      : T.isArray(u)
      ? u.slice()
      : u;
  }
  function r(c, u, d) {
    if (T.isUndefined(u)) {
      if (!T.isUndefined(c)) return i(void 0, c, d);
    } else return i(c, u, d);
  }
  function s(c, u) {
    if (!T.isUndefined(u)) return i(void 0, u);
  }
  function o(c, u) {
    if (T.isUndefined(u)) {
      if (!T.isUndefined(c)) return i(void 0, c);
    } else return i(void 0, u);
  }
  function a(c, u, d) {
    if (d in e) return i(c, u);
    if (d in t) return i(void 0, c);
  }
  const l = {
    url: s,
    method: s,
    data: s,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (c, u) => r(jg(c), jg(u), !0),
  };
  return (
    T.forEach(Object.keys(Object.assign({}, t, e)), function (u) {
      const d = l[u] || r,
        h = d(t[u], e[u], u);
      (T.isUndefined(h) && d !== a) || (n[u] = h);
    }),
    n
  );
}
const Wx = (t) => {
    const e = or({}, t);
    let {
      data: n,
      withXSRFToken: i,
      xsrfHeaderName: r,
      xsrfCookieName: s,
      headers: o,
      auth: a,
    } = e;
    (e.headers = o = _t.from(o)),
      (e.url = Mx(zx(e.baseURL, e.url), t.params, t.paramsSerializer)),
      a &&
        o.set(
          "Authorization",
          "Basic " +
            btoa(
              (a.username || "") +
                ":" +
                (a.password ? unescape(encodeURIComponent(a.password)) : ""),
            ),
        );
    let l;
    if (T.isFormData(n)) {
      if (rn.hasStandardBrowserEnv || rn.hasStandardBrowserWebWorkerEnv)
        o.setContentType(void 0);
      else if ((l = o.getContentType()) !== !1) {
        const [c, ...u] = l
          ? l
              .split(";")
              .map((d) => d.trim())
              .filter(Boolean)
          : [];
        o.setContentType([c || "multipart/form-data", ...u].join("; "));
      }
    }
    if (
      rn.hasStandardBrowserEnv &&
      (i && T.isFunction(i) && (i = i(e)), i || (i !== !1 && WC(e.url)))
    ) {
      const c = r && s && HC.read(s);
      c && o.set(r, c);
    }
    return e;
  },
  YC = typeof XMLHttpRequest < "u",
  KC =
    YC &&
    function (t) {
      return new Promise(function (n, i) {
        const r = Wx(t);
        let s = r.data;
        const o = _t.from(r.headers).normalize();
        let { responseType: a, onUploadProgress: l, onDownloadProgress: c } = r,
          u,
          d,
          h,
          p,
          g;
        function y() {
          p && p(),
            g && g(),
            r.cancelToken && r.cancelToken.unsubscribe(u),
            r.signal && r.signal.removeEventListener("abort", u);
        }
        let v = new XMLHttpRequest();
        v.open(r.method.toUpperCase(), r.url, !0), (v.timeout = r.timeout);
        function m() {
          if (!v) return;
          const _ = _t.from(
              "getAllResponseHeaders" in v && v.getAllResponseHeaders(),
            ),
            E = {
              data:
                !a || a === "text" || a === "json"
                  ? v.responseText
                  : v.response,
              status: v.status,
              statusText: v.statusText,
              headers: _,
              config: t,
              request: v,
            };
          Bx(
            function (C) {
              n(C), y();
            },
            function (C) {
              i(C), y();
            },
            E,
          ),
            (v = null);
        }
        "onloadend" in v
          ? (v.onloadend = m)
          : (v.onreadystatechange = function () {
              !v ||
                v.readyState !== 4 ||
                (v.status === 0 &&
                  !(v.responseURL && v.responseURL.indexOf("file:") === 0)) ||
                setTimeout(m);
            }),
          (v.onabort = function () {
            v &&
              (i(new J("Request aborted", J.ECONNABORTED, t, v)), (v = null));
          }),
          (v.onerror = function () {
            i(new J("Network Error", J.ERR_NETWORK, t, v)), (v = null);
          }),
          (v.ontimeout = function () {
            let w = r.timeout
              ? "timeout of " + r.timeout + "ms exceeded"
              : "timeout exceeded";
            const E = r.transitional || Ix;
            r.timeoutErrorMessage && (w = r.timeoutErrorMessage),
              i(
                new J(
                  w,
                  E.clarifyTimeoutError ? J.ETIMEDOUT : J.ECONNABORTED,
                  t,
                  v,
                ),
              ),
              (v = null);
          }),
          s === void 0 && o.setContentType(null),
          "setRequestHeader" in v &&
            T.forEach(o.toJSON(), function (w, E) {
              v.setRequestHeader(E, w);
            }),
          T.isUndefined(r.withCredentials) ||
            (v.withCredentials = !!r.withCredentials),
          a && a !== "json" && (v.responseType = r.responseType),
          c && (([h, g] = ic(c, !0)), v.addEventListener("progress", h)),
          l &&
            v.upload &&
            (([d, p] = ic(l)),
            v.upload.addEventListener("progress", d),
            v.upload.addEventListener("loadend", p)),
          (r.cancelToken || r.signal) &&
            ((u = (_) => {
              v &&
                (i(!_ || _.type ? new Ss(null, t, v) : _),
                v.abort(),
                (v = null));
            }),
            r.cancelToken && r.cancelToken.subscribe(u),
            r.signal &&
              (r.signal.aborted ? u() : r.signal.addEventListener("abort", u)));
        const x = FC(r.url);
        if (x && rn.protocols.indexOf(x) === -1) {
          i(new J("Unsupported protocol " + x + ":", J.ERR_BAD_REQUEST, t));
          return;
        }
        v.send(s || null);
      });
    },
  GC = (t, e) => {
    let n = new AbortController(),
      i;
    const r = function (l) {
      if (!i) {
        (i = !0), o();
        const c = l instanceof Error ? l : this.reason;
        n.abort(
          c instanceof J ? c : new Ss(c instanceof Error ? c.message : c),
        );
      }
    };
    let s =
      e &&
      setTimeout(() => {
        r(new J(`timeout ${e} of ms exceeded`, J.ETIMEDOUT));
      }, e);
    const o = () => {
      t &&
        (s && clearTimeout(s),
        (s = null),
        t.forEach((l) => {
          l &&
            (l.removeEventListener
              ? l.removeEventListener("abort", r)
              : l.unsubscribe(r));
        }),
        (t = null));
    };
    t.forEach((l) => l && l.addEventListener && l.addEventListener("abort", r));
    const { signal: a } = n;
    return (
      (a.unsubscribe = o),
      [
        a,
        () => {
          s && clearTimeout(s), (s = null);
        },
      ]
    );
  },
  qC = function* (t, e) {
    let n = t.byteLength;
    if (n < e) {
      yield t;
      return;
    }
    let i = 0,
      r;
    for (; i < n; ) (r = i + e), yield t.slice(i, r), (i = r);
  },
  XC = async function* (t, e, n) {
    for await (const i of t)
      yield* qC(ArrayBuffer.isView(i) ? i : await n(String(i)), e);
  },
  Dg = (t, e, n, i, r) => {
    const s = XC(t, e, r);
    let o = 0,
      a,
      l = (c) => {
        a || ((a = !0), i && i(c));
      };
    return new ReadableStream(
      {
        async pull(c) {
          try {
            const { done: u, value: d } = await s.next();
            if (u) {
              l(), c.close();
              return;
            }
            let h = d.byteLength;
            if (n) {
              let p = (o += h);
              n(p);
            }
            c.enqueue(new Uint8Array(d));
          } catch (u) {
            throw (l(u), u);
          }
        },
        cancel(c) {
          return l(c), s.return();
        },
      },
      { highWaterMark: 2 },
    );
  },
  Gc =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Hx = Gc && typeof ReadableStream == "function",
  Ef =
    Gc &&
    (typeof TextEncoder == "function"
      ? (
          (t) => (e) =>
            t.encode(e)
        )(new TextEncoder())
      : async (t) => new Uint8Array(await new Response(t).arrayBuffer())),
  Vx = (t, ...e) => {
    try {
      return !!t(...e);
    } catch {
      return !1;
    }
  },
  QC =
    Hx &&
    Vx(() => {
      let t = !1;
      const e = new Request(rn.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (t = !0), "half";
        },
      }).headers.has("Content-Type");
      return t && !e;
    }),
  Rg = 64 * 1024,
  Sf = Hx && Vx(() => T.isReadableStream(new Response("").body)),
  rc = { stream: Sf && ((t) => t.body) };
Gc &&
  ((t) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
      !rc[e] &&
        (rc[e] = T.isFunction(t[e])
          ? (n) => n[e]()
          : (n, i) => {
              throw new J(
                `Response type '${e}' is not supported`,
                J.ERR_NOT_SUPPORT,
                i,
              );
            });
    });
  })(new Response());
const JC = async (t) => {
    if (t == null) return 0;
    if (T.isBlob(t)) return t.size;
    if (T.isSpecCompliantForm(t))
      return (await new Request(t).arrayBuffer()).byteLength;
    if (T.isArrayBufferView(t) || T.isArrayBuffer(t)) return t.byteLength;
    if ((T.isURLSearchParams(t) && (t = t + ""), T.isString(t)))
      return (await Ef(t)).byteLength;
  },
  ZC = async (t, e) => {
    const n = T.toFiniteNumber(t.getContentLength());
    return n ?? JC(e);
  },
  e8 =
    Gc &&
    (async (t) => {
      let {
        url: e,
        method: n,
        data: i,
        signal: r,
        cancelToken: s,
        timeout: o,
        onDownloadProgress: a,
        onUploadProgress: l,
        responseType: c,
        headers: u,
        withCredentials: d = "same-origin",
        fetchOptions: h,
      } = Wx(t);
      c = c ? (c + "").toLowerCase() : "text";
      let [p, g] = r || s || o ? GC([r, s], o) : [],
        y,
        v;
      const m = () => {
        !y &&
          setTimeout(() => {
            p && p.unsubscribe();
          }),
          (y = !0);
      };
      let x;
      try {
        if (
          l &&
          QC &&
          n !== "get" &&
          n !== "head" &&
          (x = await ZC(u, i)) !== 0
        ) {
          let S = new Request(e, { method: "POST", body: i, duplex: "half" }),
            C;
          if (
            (T.isFormData(i) &&
              (C = S.headers.get("content-type")) &&
              u.setContentType(C),
            S.body)
          ) {
            const [k, P] = Pg(x, ic(Lg(l)));
            i = Dg(S.body, Rg, k, P, Ef);
          }
        }
        T.isString(d) || (d = d ? "include" : "omit"),
          (v = new Request(e, {
            ...h,
            signal: p,
            method: n.toUpperCase(),
            headers: u.normalize().toJSON(),
            body: i,
            duplex: "half",
            credentials: d,
          }));
        let _ = await fetch(v);
        const w = Sf && (c === "stream" || c === "response");
        if (Sf && (a || w)) {
          const S = {};
          ["status", "statusText", "headers"].forEach((j) => {
            S[j] = _[j];
          });
          const C = T.toFiniteNumber(_.headers.get("content-length")),
            [k, P] = (a && Pg(C, ic(Lg(a), !0))) || [];
          _ = new Response(
            Dg(
              _.body,
              Rg,
              k,
              () => {
                P && P(), w && m();
              },
              Ef,
            ),
            S,
          );
        }
        c = c || "text";
        let E = await rc[T.findKey(rc, c) || "text"](_, t);
        return (
          !w && m(),
          g && g(),
          await new Promise((S, C) => {
            Bx(S, C, {
              data: E,
              headers: _t.from(_.headers),
              status: _.status,
              statusText: _.statusText,
              config: t,
              request: v,
            });
          })
        );
      } catch (_) {
        throw (
          (m(),
          _ && _.name === "TypeError" && /fetch/i.test(_.message)
            ? Object.assign(new J("Network Error", J.ERR_NETWORK, t, v), {
                cause: _.cause || _,
              })
            : J.from(_, _ && _.code, t, v))
        );
      }
    }),
  Cf = { http: yC, xhr: KC, fetch: e8 };
T.forEach(Cf, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {}
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Mg = (t) => `- ${t}`,
  t8 = (t) => T.isFunction(t) || t === null || t === !1,
  Ux = {
    getAdapter: (t) => {
      t = T.isArray(t) ? t : [t];
      const { length: e } = t;
      let n, i;
      const r = {};
      for (let s = 0; s < e; s++) {
        n = t[s];
        let o;
        if (
          ((i = n),
          !t8(n) && ((i = Cf[(o = String(n)).toLowerCase()]), i === void 0))
        )
          throw new J(`Unknown adapter '${o}'`);
        if (i) break;
        r[o || "#" + s] = i;
      }
      if (!i) {
        const s = Object.entries(r).map(
          ([a, l]) =>
            `adapter ${a} ` +
            (l === !1
              ? "is not supported by the environment"
              : "is not available in the build"),
        );
        let o = e
          ? s.length > 1
            ? `since :
` +
              s.map(Mg).join(`
`)
            : " " + Mg(s[0])
          : "as no adapter specified";
        throw new J(
          "There is no suitable adapter to dispatch the request " + o,
          "ERR_NOT_SUPPORT",
        );
      }
      return i;
    },
    adapters: Cf,
  };
function $u(t) {
  if (
    (t.cancelToken && t.cancelToken.throwIfRequested(),
    t.signal && t.signal.aborted)
  )
    throw new Ss(null, t);
}
function Ig(t) {
  return (
    $u(t),
    (t.headers = _t.from(t.headers)),
    (t.data = Iu.call(t, t.transformRequest)),
    ["post", "put", "patch"].indexOf(t.method) !== -1 &&
      t.headers.setContentType("application/x-www-form-urlencoded", !1),
    Ux.getAdapter(t.adapter || la.adapter)(t).then(
      function (i) {
        return (
          $u(t),
          (i.data = Iu.call(t, t.transformResponse, i)),
          (i.headers = _t.from(i.headers)),
          i
        );
      },
      function (i) {
        return (
          Fx(i) ||
            ($u(t),
            i &&
              i.response &&
              ((i.response.data = Iu.call(t, t.transformResponse, i.response)),
              (i.response.headers = _t.from(i.response.headers)))),
          Promise.reject(i)
        );
      },
    )
  );
}
const Yx = "1.7.4",
  gp = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (t, e) => {
    gp[t] = function (i) {
      return typeof i === t || "a" + (e < 1 ? "n " : " ") + t;
    };
  },
);
const $g = {};
gp.transitional = function (e, n, i) {
  function r(s, o) {
    return (
      "[Axios v" +
      Yx +
      "] Transitional option '" +
      s +
      "'" +
      o +
      (i ? ". " + i : "")
    );
  }
  return (s, o, a) => {
    if (e === !1)
      throw new J(
        r(o, " has been removed" + (n ? " in " + n : "")),
        J.ERR_DEPRECATED,
      );
    return (
      n &&
        !$g[o] &&
        (($g[o] = !0),
        console.warn(
          r(
            o,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future",
          ),
        )),
      e ? e(s, o, a) : !0
    );
  };
};
function n8(t, e, n) {
  if (typeof t != "object")
    throw new J("options must be an object", J.ERR_BAD_OPTION_VALUE);
  const i = Object.keys(t);
  let r = i.length;
  for (; r-- > 0; ) {
    const s = i[r],
      o = e[s];
    if (o) {
      const a = t[s],
        l = a === void 0 || o(a, s, t);
      if (l !== !0)
        throw new J("option " + s + " must be " + l, J.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new J("Unknown option " + s, J.ERR_BAD_OPTION);
  }
}
const kf = { assertOptions: n8, validators: gp },
  Kn = kf.validators;
class Qi {
  constructor(e) {
    (this.defaults = e),
      (this.interceptors = { request: new Ng(), response: new Ng() });
  }
  async request(e, n) {
    try {
      return await this._request(e, n);
    } catch (i) {
      if (i instanceof Error) {
        let r;
        Error.captureStackTrace
          ? Error.captureStackTrace((r = {}))
          : (r = new Error());
        const s = r.stack ? r.stack.replace(/^.+\n/, "") : "";
        try {
          i.stack
            ? s &&
              !String(i.stack).endsWith(s.replace(/^.+\n.+\n/, "")) &&
              (i.stack +=
                `
` + s)
            : (i.stack = s);
        } catch {}
      }
      throw i;
    }
  }
  _request(e, n) {
    typeof e == "string" ? ((n = n || {}), (n.url = e)) : (n = e || {}),
      (n = or(this.defaults, n));
    const { transitional: i, paramsSerializer: r, headers: s } = n;
    i !== void 0 &&
      kf.assertOptions(
        i,
        {
          silentJSONParsing: Kn.transitional(Kn.boolean),
          forcedJSONParsing: Kn.transitional(Kn.boolean),
          clarifyTimeoutError: Kn.transitional(Kn.boolean),
        },
        !1,
      ),
      r != null &&
        (T.isFunction(r)
          ? (n.paramsSerializer = { serialize: r })
          : kf.assertOptions(
              r,
              { encode: Kn.function, serialize: Kn.function },
              !0,
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let o = s && T.merge(s.common, s[n.method]);
    s &&
      T.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (g) => {
          delete s[g];
        },
      ),
      (n.headers = _t.concat(o, s));
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function (y) {
      (typeof y.runWhen == "function" && y.runWhen(n) === !1) ||
        ((l = l && y.synchronous), a.unshift(y.fulfilled, y.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function (y) {
      c.push(y.fulfilled, y.rejected);
    });
    let u,
      d = 0,
      h;
    if (!l) {
      const g = [Ig.bind(this), void 0];
      for (
        g.unshift.apply(g, a),
          g.push.apply(g, c),
          h = g.length,
          u = Promise.resolve(n);
        d < h;

      )
        u = u.then(g[d++], g[d++]);
      return u;
    }
    h = a.length;
    let p = n;
    for (d = 0; d < h; ) {
      const g = a[d++],
        y = a[d++];
      try {
        p = g(p);
      } catch (v) {
        y.call(this, v);
        break;
      }
    }
    try {
      u = Ig.call(this, p);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, h = c.length; d < h; ) u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(e) {
    e = or(this.defaults, e);
    const n = zx(e.baseURL, e.url);
    return Mx(n, e.params, e.paramsSerializer);
  }
}
T.forEach(["delete", "get", "head", "options"], function (e) {
  Qi.prototype[e] = function (n, i) {
    return this.request(
      or(i || {}, { method: e, url: n, data: (i || {}).data }),
    );
  };
});
T.forEach(["post", "put", "patch"], function (e) {
  function n(i) {
    return function (s, o, a) {
      return this.request(
        or(a || {}, {
          method: e,
          headers: i ? { "Content-Type": "multipart/form-data" } : {},
          url: s,
          data: o,
        }),
      );
    };
  }
  (Qi.prototype[e] = n()), (Qi.prototype[e + "Form"] = n(!0));
});
class mp {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (s) {
      n = s;
    });
    const i = this;
    this.promise.then((r) => {
      if (!i._listeners) return;
      let s = i._listeners.length;
      for (; s-- > 0; ) i._listeners[s](r);
      i._listeners = null;
    }),
      (this.promise.then = (r) => {
        let s;
        const o = new Promise((a) => {
          i.subscribe(a), (s = a);
        }).then(r);
        return (
          (o.cancel = function () {
            i.unsubscribe(s);
          }),
          o
        );
      }),
      e(function (s, o, a) {
        i.reason || ((i.reason = new Ss(s, o, a)), n(i.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
  }
  unsubscribe(e) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(e);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let e;
    return {
      token: new mp(function (r) {
        e = r;
      }),
      cancel: e,
    };
  }
}
function i8(t) {
  return function (n) {
    return t.apply(null, n);
  };
}
function r8(t) {
  return T.isObject(t) && t.isAxiosError === !0;
}
const Of = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Of).forEach(([t, e]) => {
  Of[e] = t;
});
function Kx(t) {
  const e = new Qi(t),
    n = Sx(Qi.prototype.request, e);
  return (
    T.extend(n, Qi.prototype, e, { allOwnKeys: !0 }),
    T.extend(n, e, null, { allOwnKeys: !0 }),
    (n.create = function (r) {
      return Kx(or(t, r));
    }),
    n
  );
}
const ce = Kx(la);
ce.Axios = Qi;
ce.CanceledError = Ss;
ce.CancelToken = mp;
ce.isCancel = Fx;
ce.VERSION = Yx;
ce.toFormData = Kc;
ce.AxiosError = J;
ce.Cancel = ce.CanceledError;
ce.all = function (e) {
  return Promise.all(e);
};
ce.spread = i8;
ce.isAxiosError = r8;
ce.mergeConfig = or;
ce.AxiosHeaders = _t;
ce.formToJSON = (t) => $x(T.isHTMLForm(t) ? new FormData(t) : t);
ce.getAdapter = Ux.getAdapter;
ce.HttpStatusCode = Of;
ce.default = ce;
const s8 = "/api/contactforms",
  o8 = { create: async (t) => (await ce.post(s8, t)).data },
  ie = () =>
    f.jsxs("svg", {
      version: "1.1",
      id: "svg1",
      width: "28",
      height: "24",
      viewBox: "0 0 28 24",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        f.jsx("path", {
          style: { fill: "#fdfdfd" },
          d: "M 0,12 V 0 H 14 28 V 12 24 H 14 0 Z m 6.9721131,9.806211 c 0.055029,-0.01188 0.2607138,-0.07615 0.4570784,-0.142804 0.6631265,-0.225102 0.8854746,-0.309918 2.3700489,-0.904062 0.6475856,-0.259171 2.0012476,-0.787783 3.0081386,-1.174693 1.006891,-0.386909 3.967173,-1.524891 6.578405,-2.528848 2.611232,-1.003958 4.942539,-1.899317 5.180684,-1.989687 0.677948,-0.257265 0.87541,-0.367558 1.06602,-0.595432 0.33055,-0.395172 0.373243,-0.938778 0.109351,-1.392372 -0.08528,-0.146583 -0.275893,-0.344794 -0.423337,-0.440207 -0.05849,-0.03785 -0.51313,-0.273458 -1.010309,-0.523572 C 22.665343,11.288072 21.512045,10.733792 18.185567,9.1719733 15.925035,8.1106284 15.692769,8.000184 11.789474,6.1305729 9.8550733,5.2040286 7.8450895,4.2337776 7.3228432,3.9744598 6.1315657,3.3829391 5.4729867,3.0825357 5.2299825,3.0198251 4.8023755,2.9094752 4.4075764,3.0049201 4.1141684,3.2895793 3.9424784,3.4561499 3.8320822,3.6528666 3.7683873,3.9057325 3.7279564,4.0662411 3.714642,4.4452237 3.7452941,4.5630573 c 0.027397,0.1053198 0.1650944,0.3569425 0.2483811,0.4538812 0.031123,0.036225 0.1721405,0.2275201 0.313371,0.4250997 1.0578561,1.4799267 4.4559077,6.0252818 4.9728935,6.6519198 0.3179978,0.385444 0.435534,0.534425 0.563178,0.713843 l 0.1212654,0.170452 -0.1606829,0.26374 c -0.088376,0.145057 -0.4013437,0.652402 -0.6954847,1.127434 -0.6022658,0.972647 -1.5334952,2.481768 -1.8158287,2.942675 -0.1030039,0.168153 -0.4027359,0.646242 -0.6660711,1.06242 -0.7180814,1.134866 -0.9725978,1.569461 -1.0429608,1.780892 -0.099889,0.300153 -0.090033,0.671715 0.025228,0.951135 0.1685433,0.408585 0.4995394,0.663268 0.9470324,0.728688 0.073434,0.01074 0.3081356,-0.0056 0.4164973,-0.02903 z m 0.209037,-0.927241 c -0.031974,-0.009 -0.061382,-0.02483 -0.065351,-0.03524 -0.00397,-0.01041 0.041483,-0.09288 0.1010063,-0.18326 0.059523,-0.09038 0.1118171,-0.173756 0.1162086,-0.185271 0.010381,-0.02722 0.054844,-0.0048 0.1833452,0.09238 0.1684469,0.127407 0.2007135,0.234496 0.087548,0.290562 -0.071251,0.0353 -0.3264246,0.04788 -0.4227566,0.02084 z m 0.6582422,-1.227002 c 0,-0.0036 0.1481376,-0.246131 0.3291947,-0.538853 0.181057,-0.292723 0.8268442,-1.338606 1.4350825,-2.324186 0.6082385,-0.985579 1.2146665,-1.952076 1.3476185,-2.14777 0.516429,-0.760143 0.695585,-1.135277 0.747135,-1.56443 0.05314,-0.442383 -0.10566,-0.771145 -0.75371,-1.560395 C 10.673719,11.186295 10.712817,11.236859 10.101217,10.425478 8.545695,8.36184 7.3141033,6.7167745 6.7365468,5.9312102 6.3572213,5.41527 6.3022257,5.3375152 6.3277265,5.3532053 c 0.00836,0.00514 1.0338579,0.4975645 2.2788931,1.0942739 2.4336164,1.166362 12.0190634,5.7656508 13.8741884,6.6571118 l 1.12758,0.541847 -3.368491,1.295942 c -8.17333,3.14448 -10.7968348,4.152292 -11.0027836,4.226689 -0.1211611,0.04377 -0.4390667,0.155334 -0.7064569,0.247923 -0.2673901,0.09259 -0.529707,0.184829 -0.5829265,0.204976 -0.1025499,0.03882 -0.1083377,0.04042 -0.1083377,0.03 z",
          id: "path9",
        }),
        f.jsx("path", {
          style: { fill: "#df0000" },
          d: "m 6.6356492,21.833507 c 0.027306,-0.0034 0.068327,-0.0033 0.091156,1.56e-4 0.022829,0.0035 4.876e-4,0.0063 -0.049648,0.0062 -0.050136,-8.6e-5 -0.068814,-0.0029 -0.041508,-0.0063 z m -0.712465,-0.275545 c -0.018898,-0.02425 -0.01836,-0.02479 0.00574,-0.0058 0.025307,0.01997 0.033355,0.03252 0.020851,0.03252 -0.00315,0 -0.015119,-0.01204 -0.026587,-0.02675 z m -0.121541,-0.122293 c -0.018898,-0.02425 -0.01836,-0.02479 0.00574,-0.0058 0.025307,0.01997 0.033355,0.03252 0.020851,0.03252 -0.00315,0 -0.015119,-0.01204 -0.026587,-0.02675 z m -0.284323,-0.982166 c 0,-0.02102 0.00345,-0.02962 0.00766,-0.01911 0.00421,0.01051 0.00421,0.02771 0,0.03822 -0.00421,0.01051 -0.00766,0.0019 -0.00766,-0.01911 z M 25.493218,14.608241 c 0,-0.0032 0.01196,-0.01521 0.02659,-0.02675 0.0241,-0.01902 0.02463,-0.01847 0.0057,0.0058 -0.01985,0.02546 -0.03232,0.03356 -0.03232,0.02098 z m 0.09116,-0.09172 c 0,-0.0032 0.01196,-0.01521 0.02659,-0.02675 0.0241,-0.01901 0.02463,-0.01847 0.0057,0.0058 -0.01985,0.02546 -0.03232,0.03356 -0.03232,0.02098 z m 0.321444,-0.743273 c 0,-0.02102 0.0034,-0.02962 0.0077,-0.01911 0.0042,0.01051 0.0042,0.02771 0,0.03822 -0.0042,0.01051 -0.0077,0.0019 -0.0077,-0.01911 z m 0,-0.152866 c 0,-0.02102 0.0034,-0.02962 0.0077,-0.01911 0.0042,0.01051 0.0042,0.02771 0,0.03822 -0.0042,0.01051 -0.0077,0.0019 -0.0077,-0.01911 z M 11.702663,12.940127 c 1.14e-4,-0.04204 0.0031,-0.05742 0.0066,-0.03418 0.0035,0.02324 0.0034,0.05763 -2.07e-4,0.07643 -0.0036,0.0188 -0.0065,-2.1e-4 -0.0064,-0.04225 z m -0.781107,-1.440764 c -0.0189,-0.02425 -0.01836,-0.02479 0.0057,-0.0058 0.01462,0.01154 0.02659,0.02358 0.02659,0.02675 0,0.01258 -0.01248,0.0045 -0.03232,-0.02098 z m -0.07596,-0.09172 c -0.0189,-0.02425 -0.01836,-0.02479 0.0057,-0.0058 0.01462,0.01154 0.02659,0.02358 0.02659,0.02675 0,0.01258 -0.01248,0.0045 -0.03232,-0.02098 z M 3.7233915,4.4700637 c 7.29e-4,-0.017808 0.00433,-0.02143 0.00918,-0.00924 0.00439,0.011035 0.00385,0.02422 -0.0012,0.029299 -0.00505,0.00508 -0.00864,-0.00395 -0.00798,-0.020064 z m 0,-0.1528662 c 7.29e-4,-0.017808 0.00433,-0.02143 0.00918,-0.00924 0.00439,0.011035 0.00385,0.02422 -0.0012,0.029299 -0.00505,0.00508 -0.00864,-0.00395 -0.00798,-0.020064 z m 0.015193,-0.2904459 c 7.29e-4,-0.017808 0.00433,-0.02143 0.00918,-0.00924 0.00439,0.011035 0.00385,0.02422 -0.0012,0.029299 -0.00505,0.00508 -0.00864,-0.00395 -0.00798,-0.020064 z M 4.0564297,3.3429874 c 0,-0.00263 0.022219,-0.024988 0.049376,-0.049682 l 0.049376,-0.044898 -0.044622,0.049682 c -0.041594,0.04631 -0.05413,0.056708 -0.05413,0.044898 z m 0.8014108,-0.372884 c 0.018801,-0.00364 0.049566,-0.00364 0.068367,0 0.018801,0.00364 0.00342,0.00662 -0.034183,0.00662 -0.037602,0 -0.052984,-0.00298 -0.034183,-0.00662 z",
          id: "path8",
        }),
        f.jsx("path", {
          style: { fill: "#df0000" },
          d: "m 5.8632017,21.496815 -0.036832,-0.04204 0.04178,0.03706 c 0.039049,0.03464 0.048747,0.04702 0.036832,0.04702 -0.00272,0 -0.021522,-0.01892 -0.04178,-0.04204 z m 1.471036,-0.595501 c 0.018801,-0.0036 0.049566,-0.0036 0.068367,0 0.018801,0.0036 0.00342,0.0066 -0.034183,0.0066 -0.037602,0 -0.052984,-0.003 -0.034183,-0.0066 z M 5.5184461,20.713376 c 0,-0.02943 0.00313,-0.04146 0.00695,-0.02675 0.00382,0.01471 0.00382,0.03879 0,0.0535 -0.00382,0.01471 -0.00695,0.0027 -0.00695,-0.02675 z m -0.00113,-0.198726 c 0,-0.02102 0.00345,-0.02962 0.00766,-0.01911 0.00421,0.01051 0.00421,0.02771 0,0.03822 -0.00421,0.01051 -0.00766,0.0019 -0.00766,-0.01911 z M 25.538795,14.562381 c 0,-0.0032 0.01197,-0.01521 0.02659,-0.02675 0.0241,-0.01901 0.02463,-0.01847 0.0057,0.0058 -0.01985,0.02546 -0.03232,0.03356 -0.03232,0.02098 z m 0.368148,-0.865566 c 0,-0.02943 0.0031,-0.04147 0.0069,-0.02675 0.0038,0.01471 0.0038,0.03879 0,0.0535 -0.0038,0.01471 -0.0069,0.0027 -0.0069,-0.02675 z m -0.376459,-0.875159 -0.06006,-0.06497 0.06457,0.06043 c 0.06005,0.0562 0.07155,0.06951 0.06006,0.06951 -0.0025,0 -0.03154,-0.02923 -0.06457,-0.06497 z m -15.479589,-6.59e-4 c 0.0057,-0.01508 0.0142,-0.02356 0.01888,-0.01885 0.0047,0.0047 10e-6,0.01704 -0.01037,0.02741 -0.015,0.01498 -0.01675,0.01323 -0.0085,-0.0086 z M 3.7260234,4.3949045 c 1.686e-4,-0.033631 0.00328,-0.045589 0.00691,-0.026573 0.00363,0.019015 0.0035,0.046531 -3.066e-4,0.061147 -0.0038,0.014615 -0.00678,-9.426e-4 -0.00661,-0.034573 z m 0.01376,-0.3133758 c 0,-0.021019 0.00345,-0.029618 0.00766,-0.019108 0.00421,0.01051 0.00421,0.027707 0,0.038216 -0.00421,0.01051 -0.00766,0.00191 -0.00766,-0.019108 z",
          id: "path7",
        }),
        f.jsx("path", {
          style: { fill: "#df0000" },
          d: "m 7.6418882,20.845184 c 0,-0.0032 0.011964,-0.01521 0.026587,-0.02675 0.024096,-0.01901 0.024634,-0.01847 0.00574,0.0058 -0.019847,0.02546 -0.032323,0.03356 -0.032323,0.02098 z m -2.122829,-0.238815 c 0,-0.03783 0.00296,-0.05331 0.00658,-0.03439 0.00362,0.01892 0.00362,0.04987 0,0.06879 -0.00362,0.01892 -0.00658,0.0034 -0.00658,-0.03439 z m 2.083404,0.02675 -0.028942,-0.03439 0.034183,0.02912 c 0.032124,0.02737 0.0411,0.03967 0.028942,0.03967 -0.00288,0 -0.018265,-0.01548 -0.034183,-0.03439 z m 2.4449238,-7.799328 c 0,-0.01224 0.0058,-0.01864 0.01291,-0.01423 0.0071,0.0044 0.009,0.01443 0.0042,0.02226 -0.01229,0.02 -0.01708,0.01775 -0.01708,-0.008 z M 4.0321973,5.056051 4.0032553,5.021656 4.0374383,5.050777 c 0.018801,0.016016 0.034183,0.031494 0.034183,0.034395 0,0.012233 -0.012227,0.0032 -0.039425,-0.029121 z M 3.7422475,4.2038217 c 0,-0.05465 0.00276,-0.077006 0.00613,-0.049682 0.00337,0.027325 0.00337,0.072038 0,0.099363 -0.00337,0.027325 -0.00613,0.00497 -0.00613,-0.049681 z",
          id: "path6",
        }),
        f.jsx("path", {
          style: { fill: "#df0000" },
          d: "m 25.478025,14.608241 c 0,-0.0032 0.01196,-0.01521 0.02659,-0.02675 0.0241,-0.01902 0.02463,-0.01847 0.0057,0.0058 -0.01985,0.02546 -0.03232,0.03356 -0.03232,0.02098 z m 0.413163,-0.812063 c 3.09e-4,-0.02522 0.0037,-0.03369 0.0076,-0.01882 0.0039,0.01487 0.0036,0.03551 -5.63e-4,0.04586 -0.0042,0.01035 -0.0073,-0.0018 -0.007,-0.02704 z m 5.62e-4,-0.191082 c 0,-0.02943 0.0031,-0.04146 0.0069,-0.02675 0.0038,0.01471 0.0038,0.03879 0,0.0535 -0.0038,0.01471 -0.0069,0.0027 -0.0069,-0.02675 z M 11.688334,12.940127 c 5.5e-5,-0.06726 0.0027,-0.09288 0.0059,-0.05692 0.0032,0.03595 0.0032,0.09099 -10e-5,0.122293 -0.0033,0.03131 -0.0059,0.0019 -0.0058,-0.06537 z m -1.661204,-0.08498 c 0,-0.0089 0.0068,-0.01194 0.01519,-0.0067 0.0084,0.0052 0.01519,0.01248 0.01519,0.01619 0,0.0037 -0.0068,0.0067 -0.01519,0.0067 -0.0084,0 -0.01519,-0.0073 -0.01519,-0.01619 z M 4.0412371,3.3725724 c 0,-0.00317 0.011964,-0.015213 0.026587,-0.026752 0.024096,-0.019015 0.024634,-0.018474 0.00574,0.00577 -0.019847,0.025464 -0.032323,0.033561 -0.032323,0.02098 z",
          id: "path5",
        }),
        f.jsx("path", {
          style: { fill: "#df0000" },
          d: "m 25.546392,14.53758 c 0.01512,-0.01682 0.03092,-0.03057 0.03509,-0.03057 0.0042,0 -0.0048,0.01376 -0.0199,0.03057 -0.01512,0.01681 -0.03092,0.03057 -0.03509,0.03057 -0.0042,0 0.0048,-0.01376 0.0199,-0.03057 z M 3.74173,4.3949045 c 1.141e-4,-0.042038 0.00306,-0.057421 0.00656,-0.034185 0.00349,0.023237 0.0034,0.057632 -2.073e-4,0.076433 -0.00361,0.018802 -0.00646,-2.102e-4 -0.00635,-0.042248 z M 4.1096039,3.3019108 c 0.015124,-0.016815 0.030917,-0.030573 0.035095,-0.030573 0.00418,0 -0.00478,0.013758 -0.019902,0.030573 -0.015124,0.016815 -0.030917,0.030573 -0.035095,0.030573 -0.00418,0 0.00478,-0.013758 0.019902,-0.030573 z",
          id: "path4",
        }),
        f.jsx("path", {
          style: { fill: "#df0000" },
          d: "m 5.8783944,21.496815 -0.036832,-0.04204 0.04178,0.03706 c 0.039049,0.03464 0.048747,0.04702 0.036832,0.04702 -0.00272,0 -0.021522,-0.01892 -0.04178,-0.04204 z m 1.91542,-1.823832 c 0,-0.0089 0.00684,-0.01194 0.015193,-0.0067 0.00836,0.0052 0.015193,0.01248 0.015193,0.01619 0,0.0037 -0.00684,0.0067 -0.015193,0.0067 -0.00836,0 -0.015193,-0.0073 -0.015193,-0.01619 z M 25.89175,13.696815 c 0,-0.02943 0.0031,-0.04147 0.0069,-0.02675 0.0038,0.01471 0.0038,0.03879 0,0.0535 -0.0038,0.01471 -0.0069,0.0027 -0.0069,-0.02675 z m -0.376699,-0.875159 -0.04462,-0.04968 0.04938,0.0449 c 0.04602,0.04185 0.05636,0.05447 0.04462,0.05447 -0.0026,0 -0.02483,-0.02236 -0.04938,-0.04968 z M 4.79707,2.9860543 c 0.010445,-0.00424 0.027537,-0.00424 0.037981,0 0.010445,0.00424 0.0019,0.00771 -0.018991,0.00771 -0.02089,0 -0.029436,-0.00347 -0.01899,-0.00771 z m 0.1528757,-3.185e-4 c 0.010967,-0.00442 0.024071,-0.00387 0.029119,0.00121 0.00505,0.00508 -0.00392,0.00869 -0.01994,0.00803 -0.017698,-7.335e-4 -0.021299,-0.00436 -0.00918,-0.00924 z",
          id: "path3",
        }),
        f.jsx("path", {
          style: { fill: "#df0000" },
          d: "M 6.4908581,21.812324 C 6.2544314,21.772694 6.0710249,21.673912 5.8866983,21.486926 5.773237,21.371827 5.7370744,21.322665 5.6775172,21.202548 5.5731108,20.991977 5.5412681,20.856235 5.539457,20.614013 5.5378018,20.392632 5.5608958,20.269347 5.6411113,20.071338 5.7203587,19.875718 6.0132758,19.379824 6.5305245,18.565605 6.8946414,17.992436 7.1444446,17.590517 8.1694547,15.928662 8.5869054,15.251847 9.0755563,14.460764 9.2553455,14.170701 9.9931387,12.980379 9.9869987,12.990993 9.9618847,12.949346 9.8689832,12.795289 9.7131894,12.592622 9.2889253,12.073915 8.7025463,11.357005 5.1530686,6.6059671 4.2314968,5.3044586 4.1570807,5.1993631 4.0698915,5.0828692 4.0377429,5.0455835 3.9572631,4.9522434 3.8198407,4.7167686 3.7830429,4.6091523 3.7444647,4.4963288 3.7410061,4.1828716 3.776105,3.980354 3.8580847,3.507339 4.1961867,3.1276178 4.6337493,3.0171364 c 0.1356038,-0.034239 0.4010948,-0.033519 0.5393381,0.00146 0.2869595,0.072614 1.1532474,0.4700788 2.4885417,1.1417765 0.2490018,0.1252562 2.0333751,0.9850894 3.9652739,1.9107403 4.014592,1.9235535 4.187316,2.0056956 6.665012,3.1696728 1.006891,0.4730192 2.069995,0.973569 2.362453,1.112332 2.202478,1.045013 4.489365,2.178496 4.692731,2.325926 0.194992,0.141359 0.366423,0.351957 0.449034,0.551626 0.210617,0.509054 0.05793,1.083361 -0.377698,1.420642 -0.168595,0.130534 -0.294264,0.187848 -0.973508,0.443985 -0.254363,0.09592 -2.72307,1.044882 -11.751492,4.51724 -1.925343,0.740493 -2.101123,0.809283 -3.1752581,1.242621 -1.3006005,0.5247 -2.3420024,0.903174 -2.618919,0.951786 -0.1388768,0.02438 -0.2836603,0.02629 -0.4083998,0.0054 z m 1.0821252,-0.925332 c 0.035784,-0.01227 0.080436,-0.03877 0.099227,-0.0589 0.049112,-0.0526 0.030479,-0.105306 -0.073182,-0.207007 -0.091484,-0.08976 -0.2632524,-0.198978 -0.2718946,-0.172891 -0.00283,0.0085 -0.059326,0.0975 -0.1255449,0.197683 -0.1322174,0.200028 -0.1330235,0.207524 -0.026384,0.245345 0.07085,0.02513 0.31987,0.02248 0.3977789,-0.0042 z m 0.3527301,-1.24181 c 0.065329,-0.02419 0.3922464,-0.138918 0.7264841,-0.25494 0.7634839,-0.265023 -0.017431,0.03277 8.0555495,-3.07189 3.803856,-1.462864 6.914345,-2.665517 6.912197,-2.672561 -0.0044,-0.0145 0.08818,0.03008 -7.895582,-3.8008326 C 7.0009659,5.6591446 6.2869552,5.3174567 6.2793742,5.3250847 c -0.00933,0.00938 0.6081741,0.8492678 1.5470598,2.1042147 1.9803315,2.6469796 2.797022,3.7257086 3.111206,4.1094516 0.570678,0.697023 0.726124,0.977871 0.741799,1.34023 0.02022,0.467508 -0.172355,0.913566 -0.77751,1.800899 -0.113583,0.166545 -0.29461,0.445144 -0.402282,0.619108 -0.107673,0.173964 -0.7306258,1.18305 -1.38434,2.242413 -0.6537143,1.059363 -1.2184786,1.972763 -1.255032,2.029776 -0.064805,0.10108 -0.073392,0.117995 -0.059901,0.117995 0.00361,0 0.060011,-0.0198 0.1253394,-0.04399 z m 2.1497876,-6.812126 c 0.0095,-0.02105 0.01225,-0.0434 0.006,-0.04966 -0.01311,-0.01319 -0.0544,0.03837 -0.0544,0.06793 0,0.03362 0.03001,0.02229 0.04837,-0.01827 z",
          id: "path2",
        }),
      ],
    }),
  a8 = ({ notify: t }) => {
    const [e, n] = b.useState(""),
      [i, r] = b.useState(""),
      s = async (l) => {
        o8.create(l)
          .then(() => {
            t("A new message by has been sent.");
          })
          .catch((c) => {
            t("Creating a message failed: " + c.response.data.error, "alert");
          });
      },
      o = (l) => {
        if ((l.preventDefault(), !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e))) {
          t("Please enter a valid email address.", "alert");
          return;
        }
        console.log("Form submitted!"),
          s({ email: e, message: i }),
          n(""),
          r("");
      },
      a = {
        card: { textAlign: "center", color: "#df0000", borderWidth: "2px" },
        form: { width: "80%", display: "block", margin: "0 auto" },
        header: {
          color: "#df0000",
          fontWeight: "bold",
          textDecoration: "underline",
          marginBottom: 40,
          textAlign: "center",
        },
        label: { fontSize: 28, marginBottom: 35 },
        button: { padding: 15, marginTop: 35, marginBottom: 35 },
        paragraph: {
          fontSize: 20,
          maxWidth: 500,
          margin: "auto",
          marginBottom: 10,
        },
      };
    return f.jsx("section", {
      className: "contact form",
      children: f.jsxs(et, {
        children: [
          f.jsx("div", {
            children: f.jsx("h1", {
              style: a.header,
              children: "Contact Form",
            }),
          }),
          f.jsx(Z, {
            className: "my-3",
            style: a.card,
            border: "danger",
            children: f.jsxs(Z.Body, {
              children: [
                f.jsx("p", {
                  style: a.paragraph,
                  children:
                    "If you have any questions or inquiries, please don't hesitate to reach out using the contact form below. We'll get back to you as soon as possible.",
                }),
                f.jsxs(Q, {
                  onSubmit: o,
                  children: [
                    f.jsxs(Q.Group, {
                      className: "mb-3",
                      children: [
                        f.jsxs(Q.Label, {
                          htmlFor: "email",
                          style: a.label,
                          children: [f.jsx(ie, {}), "Email"],
                        }),
                        f.jsx(Q.Control, {
                          value: e,
                          onChange: ({ target: l }) => n(l.value),
                          id: "email",
                          placeholder: "Place your email here",
                          style: a.form,
                          "aria-label": "Email",
                        }),
                      ],
                    }),
                    f.jsxs(Q.Group, {
                      className: "mb-3",
                      children: [
                        f.jsxs(Q.Label, {
                          htmlFor: "message",
                          style: a.label,
                          children: [f.jsx(ie, {}), "Message"],
                        }),
                        f.jsx(Q.Control, {
                          as: "textarea",
                          rows: 5,
                          value: i,
                          onChange: ({ target: l }) => r(l.value),
                          id: "message",
                          placeholder: "Place your message here",
                          style: a.form,
                          "aria-label": "Message",
                        }),
                      ],
                    }),
                    f.jsx(ot, {
                      "aria-label": "Submit",
                      type: "submit",
                      variant: "danger",
                      style: a.button,
                      className: "btn-custom",
                      children: "Submit",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  Fg = ({ user: t, onLogout: e }) => {
    const [n, i] = b.useState(!1),
      r = {
        navStyle: { fontSize: 26, color: "#df0000", margin: 15 },
        navbar: { marginBottom: 60, marginTop: 15 },
      };
    return f.jsx(Du, {
      expanded: n,
      onToggle: i,
      collapseOnSelect: !0,
      expand: "lg",
      className: "text-center",
      style: r.navbar,
      children: f.jsxs("div", {
        className: "container-fluid",
        children: [
          f.jsx(Du.Toggle, {
            "aria-controls": "navbar",
            "aria-expanded": "false",
            "aria-label": "Toggle navigation",
            children: f.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "30",
              height: "30",
              fill: "#df0000",
              viewBox: "0 0 16 16",
              children: f.jsx("path", {
                fillRule: "evenodd",
                d: "M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75zM1.75 12a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H1.75z",
              }),
            }),
          }),
          f.jsx(Du.Collapse, {
            id: "basic-navbar-nav justify-content-center",
            onClick: () => i(!1),
            children: f.jsx("div", {
              className: "mx-auto",
              children: f.jsx(vS, {
                className: "me-auto mt-2 justify-content-center mx-auto",
                children: t
                  ? f.jsxs(f.Fragment, {
                      children: [
                        f.jsx(Xe, {
                          to: "/user-homepage",
                          style: r.navStyle,
                          "aria-label": "Link to User Homepage",
                          children: "Home",
                        }),
                        f.jsx(Xe, {
                          to: "/instructions",
                          style: r.navStyle,
                          "aria-label": "Link to Workout Instructions",
                          children: "Bullet Point Fitness Manual",
                        }),
                        f.jsx(Xe, {
                          to: "/program-form",
                          style: r.navStyle,
                          "aria-label": "Link to Client Information Form",
                          children: "Program Form",
                        }),
                        f.jsx(Xe, {
                          to: "/workouts",
                          style: r.navStyle,
                          "aria-label": "Link to workouts",
                          children: "Workouts",
                        }),
                        f.jsx(Xe, {
                          to: "/workout-progression",
                          style: r.navStyle,
                          "aria-label": "Link to exercise progression",
                          children: "Workout Progression",
                        }),
                        f.jsx(Xe, {
                          to: "/past-workout-programs",
                          style: r.navStyle,
                          "aria-label": "Link to past workouts",
                          children: "Past Workout Programs",
                        }),
                        f.jsx(Xe, {
                          to: "/past-workout-progression",
                          style: r.navStyle,
                          "aria-label": "Link to past workout progression data",
                          children: "Past Workout Progressions",
                        }),
                        f.jsx(Xe, {
                          to: "/",
                          onClick: e,
                          "aria-label": "Logout",
                          style: r.navStyle,
                          children: "Logout",
                        }),
                      ],
                    })
                  : f.jsxs(f.Fragment, {
                      children: [
                        f.jsx(Xe, {
                          to: "/",
                          style: r.navStyle,
                          "aria-label": "Link to Landing Page",
                          children: "Home",
                        }),
                        f.jsx(Xe, {
                          to: "/muscle-map",
                          style: r.navStyle,
                          "aria-label":
                            "Link to Interactive Muscle Anatomy Chart",
                          children: "Muscle Map",
                        }),
                        f.jsx(Xe, {
                          to: "/training",
                          style: r.navStyle,
                          "aria-label":
                            "Link to Training Essentials video page",
                          children: "Training Essentials",
                        }),
                        f.jsx(Xe, {
                          to: "/consultation",
                          style: r.navStyle,
                          "aria-label": "Link to Consultation page",
                          children: "Consultation",
                        }),
                        f.jsx(Xe, {
                          to: "/organ-map",
                          style: r.navStyle,
                          "aria-label": "Link to the interactive Organ map",
                          children: "Organ Map",
                        }),
                        f.jsx(Xe, {
                          to: "/contact-form",
                          style: r.navStyle,
                          "aria-label": "Link to Contact form",
                          children: "Contact",
                        }),
                        f.jsx(Xe, {
                          to: "/about",
                          style: r.navStyle,
                          "aria-label": "Link to About page",
                          children: "About",
                        }),
                        f.jsx(Xe, {
                          to: "/login",
                          style: r.navStyle,
                          "aria-label": "Link to Login page",
                          children: "Login",
                        }),
                      ],
                    }),
              }),
            }),
          }),
        ],
      }),
    });
  },
  l8 = () => {
    const t = {
      consultation: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      },
      header: {
        color: "#df0000",
        fontWeight: "bold",
        textDecoration: "underline",
        marginBottom: 40,
      },
      paragraph: { color: "#df0000", fontSize: 20, margin: 30 },
    };
    return f.jsxs("section", {
      style: t.consultation,
      children: [
        f.jsxs("div", {
          children: [
            f.jsx("h1", { style: t.header, children: "Book a Consultation" }),
            f.jsxs("p", {
              style: t.paragraph,
              children: [
                f.jsx(ie, {}),
                "Starting your fitness journey or taking it to the next level can be challenging, but you don't need to do it alone. If you're looking for guidance, whether it's figuring out where to begin or how to push forward, I'm here to help. Book a one-on-one consultation with me, and together we'll discuss your goals and craft a personalized fitness plan tailored just for you. Choose a timeslot below, and let's start this journey towards achieving your fitness aspirations.",
              ],
            }),
          ],
        }),
        f.jsx("iframe", {
          src: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ37BikZEr6aVFFN9J0FZfM7xAbcDq4QGXc5RIUcVL0p_TOHJaKyRRRgVb1_2Mv39fuW2UEbnqhs?gv=true",
          style: { border: 0 },
          width: "100%",
          height: "800",
          frameBorder: "0",
          title: "Google Calendar",
        }),
      ],
    });
  },
  c8 = "/assets/AllHumanOrgansInk-DYOIkBUv.png",
  u8 = {
    Heart: [
      {
        shape: "POLYGON",
        coords:
          "1071,1237,1071,1260,1044,1260,1038,1249,1032,1247,1024,1252,1020,1260,1020,1264,1024,1268,1024,1277,1012,1277,1007,1285,1007,1293,1018,1297,1006,1297,1004,1313,1018,1313,1021,1332,1016,1352,1003,1371,983,1368,977,1370,977,1386,1002,1391,1002,1398,984,1398,980,1403,980,1409,980,1416,988,1421,1000,1419,998,1438,998,1449,998,1459,1006,1467,1006,1522,1017,1526,1035,1525,1043,1523,1043,1505,1084,1529,1084,1543,1093,1549,1115,1546,1117,1538,1122,1542,1129,1542,1136,1546,1143,1545,1152,1546,1164,1548,1169,1546,1178,1548,1179,1545,1190,1547,1214,1534,1224,1520,1228,1493,1217,1454,1216,1433,1204,1405,1202,1395,1195,1388,1195,1383,1220,1380,1224,1368,1220,1363,1197,1363,1194,1356,1213,1350,1212,1335,1197,1336,1186,1340,1176,1333,1176,1323,1159,1317,1175,1316,1179,1307,1177,1300,1152,1299,1140,1284,1144,1259,1146,1252,1132,1248,1126,1276,1125,1250,1119,1250,1118,1277,1115,1277,1114,1251,1102,1251,1102,1237",
      },
    ],
    Stomach: [
      {
        shape: "POLYGON",
        coords:
          "1161,1537,1171,1581,1223,1541,1303,1549,1363,1631,1319,1784,1281,1789,1245,1781,1207,1809,1157,1879,1107,1879,1103,1729,1159,1697,1161,1633,1129,1605,1125,1537",
      },
    ],
    Lungs: [
      {
        shape: "POLYGON",
        coords:
          "1016,1096,986,1016,930,1012,860,1066,788,1148,750,1258,724,1378,718,1472,728,1568,768,1594,790,1528,924,1504,962,1504,950,1420,932,1414,930,1362,960,1358,980,1312,954,1266,986,1200,980,1130",
      },
      {
        shape: "POLYGON",
        coords:
          "1108,1225,1118,1057,1150,1007,1244,1023,1344,1129,1414,1324,1434,1516,1388,1604,1362,1594,1332,1536,1222,1508,1198,1382,1218,1358,1198,1312,1170,1314,1156,1276,1136,1270",
      },
    ],
    Kidneys: [
      {
        shape: "POLYGON",
        coords:
          "1060,1748, 1026,1747, 1025,1907, 950,1903, 973,1875, 956,1824, 907,1807, 850,1843, 820,1907, 820,1979, 850,2024, 900,2037, 930,2009, 934,1990, 970,1964, 1027,1943, 1034,1947, 1030,2090, 1068,2090, 1074,2069, 1107,2066, 1107,1930, 1128,1932, 1212,2000, 1229,2029, 1260,2040, 1317,1999, 1324,1916, 1293,1850, 1252,1819, 1196,1817, 1171,1864, 1190,1901, 1137,1905, 1112,1895, 1111,1773, 1111,1732, 1077,1728, 1062,1741",
      },
    ],
    Intestines: [
      {
        shape: "POLYGON",
        coords:
          "1012,1956,890,2050,812,1970,812,1920,760,1925,730,2182,760,2285,830,2337,960,2374,974,2432,1018,2444,1028,2472,1126,2472,1130,2432,1202,2454,1222,2454,1292,2410,1336,2318,1368,2189,1344,2023,1346,1913,1372,1827,1330,1783,1282,1781,1256,1807,1314,1827,1372,1917,1346,2019,1320,2042,1270,2022,1222,1982,1174,1938,1092,1938,1084,1976,996,1956",
      },
    ],
    "Nervous System": [
      {
        shape: "POLYGON",
        coords:
          "751,3260,760,3354,788,3280,819,3513,723,3700,754,3816,751,4023,771,4086,799,4089,797,3927,800,4140,868,4486,738,4591,719,4642,810,4617,782,4654,833,4686,873,4686,893,4589,913,4530,970,4544,888,4119,950,4144,902,4053,897,3866,937,4047,951,4087,996,3996,931,3818,909,3600,969,3653,997,3512,929,3465,861,3317,844,3213,904,3276,932,3134,864,2987,847,2883,751,3260",
      },
    ],
    Bones: [
      {
        shape: "POLYGON",
        coords:
          "581,964,658,967,686,1061,624,1265,632,1537,652,1685,564,1946,479,2411,465,2635,426,2749,350,2803,302,2848,322,2701,268,2789,243,2781,339,2498,223,2623,201,2586,357,2416,388,2357,442,1874,504,1648,482,1580,542,1515,537,1135,523,1047",
      },
    ],
    "Circulatory System": [
      {
        shape: "POLYGON",
        coords:
          "1459,1410, 1618,1396, 1639,1532, 1672,1674, 1669,1715, 1713,1783, 1733,1990, 1705,2028, 1555,2049, 1527,1905, 1509,1898, 1512,1681, 1484,1627, 1470,1552, 1491,1521, 1459,1488",
      },
    ],
    "Lymphatic System": [
      { shape: "POLYGON", coords: "943,841,943,927,696,1062,656,956" },
      {
        shape: "POLYGON",
        coords:
          "669,998, 513,1165, 514,1511, 405,2159, 533,1886, 569,2097, 703,1343, 627,1129",
      },
    ],
    Bladder: [
      {
        shape: "POLYGON",
        coords:
          "1070,2476, 1037,2476, 1005,2486, 972,2506, 957,2523, 946,2555, 957,2583, 994,2610, 994,2608, 1025,2617, 1046,2629, 1055,2643, 1060,2683, 1067,2718, 1079,2719, 1090,2640, 1109,2617, 1169,2598, 1199,2568, 1186,2530, 1162,2500, 1132,2488, 1102,2479",
      },
    ],
    "Skin, Hair and Nails": [
      {
        shape: "POLYGON",
        coords:
          "1181,674,1121,740,1133,979,1358,1039,1430,1316,1620,1320,1654,1142,1544,958,1246,830,1170,780",
      },
      {
        shape: "POLYGON",
        coords: "1427,2465,1142,2694,1202,4470,1266,4634,1370,4634,1254,4422",
      },
      {
        shape: "POLYGON",
        coords:
          "1539,2093,1651,2422,1655,2619,1715,2772,1759,2776,1791,2816,1827,2864,1855,2864,1819,2704,1867,2812,1895,2812,1843,2572,1927,2648,1955,2616,1875,2488,1791,2408,1755,2060",
      },
    ],
    Muscle: [
      {
        shape: "POLYGON",
        coords:
          "743,2453,785,2453,863,2600,914,2752,951,2905,958,2943,947,3082,941,3092,884,2933,883,3123,862,3228,848,3258,800,3258,807,3148,777,3017,751,2918,739,2767,736,2672,743,2571,735,2481",
      },
    ],
    Brain: [
      {
        shape: "POLYGON",
        coords:
          "1066,142, 1024,128, 939,160, 899,212, 892,273, 896,313, 973,367, 1020,391, 1051,388, 1066,368, 1076,368, 1101,392, 1131,390, 1225,334, 1254,295, 1244,205, 1185,152, 1135,128, 1099,127, 1066,142",
      },
    ],
    Liver: [
      {
        shape: "POLYGON",
        coords:
          "789,1852, 757,1691, 753,1630, 775,1581, 819,1543, 875,1527, 953,1516, 981,1524, 1000,1512, 1007,1519, 1007,1519, 1030,1516, 1039,1513, 1040,1504, 1056,1506, 1077,1519, 1078,1537, 1092,1543, 1113,1539, 1113,1533, 1128,1537, 1129,1574, 1143,1617, 1164,1636, 1164,1648, 1095,1701, 1054,1720, 1033,1727, 990,1742, 927,1767, 902,1783, 879,1804, 852,1829, 817,1856, 789,1852",
      },
    ],
  },
  d8 = { organList: u8 },
  f8 = "/api/organs",
  h8 = { get: () => ce.get(f8).then((e) => e.data) },
  p8 = ({ organ: t, selectedOrgan: e }) => {
    const n = {
      text: {
        color: "#df0000",
        borderWidth: "2px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      },
      description: { margin: "auto", padding: 10 },
      header: { textDecoration: "underline", fontWeight: "bold" },
      ul: { listStyleType: "none", padding: 0 },
    };
    if (!t) return null;
    const i = (r) =>
      !r || r.length === 0
        ? "No items available."
        : f.jsx("ul", {
            style: n.ul,
            children: r.map((s, o) =>
              f.jsxs("li", { children: [f.jsx(ie, {}), s] }, o),
            ),
          });
    return f.jsx(Z, {
      className: "mb-4 box-shadow",
      border: "danger",
      style: n.text,
      children: f.jsxs(Z.Body, {
        children: [
          f.jsx("h3", { style: n.header, children: e }),
          f.jsxs("div", {
            style: n.description,
            children: [
              f.jsx("h5", { style: n.header, children: "Function:" }),
              f.jsxs("div", { children: [f.jsx(ie, {}), t.function] }),
            ],
          }),
          f.jsxs("div", {
            style: n.description,
            children: [
              f.jsx("h5", {
                style: n.header,
                children: "Essential Nutrients for Optimal Function:",
              }),
              i(t.nutrients),
            ],
          }),
          f.jsxs("div", {
            style: n.description,
            children: [
              f.jsx("h5", {
                style: n.header,
                children: "Foods Containing These Nutrients:",
              }),
              i(t.foods),
            ],
          }),
        ],
      }),
    });
  },
  g8 = () => {
    const [t, e] = b.useState(null),
      [n, i] = b.useState(null),
      [r, s] = b.useState([]),
      [o, a] = b.useState(null),
      [l, c] = b.useState(!1);
    b.useEffect(() => {
      (async () => {
        const m = await h8.get();
        s(m);
      })();
    }, []);
    const u = (v) => {
        e(v);
      },
      d = () => {
        e(null);
      },
      h = (v) => {
        i(v);
        const m = r.find((x) => x.name === v);
        a(m), c(!0);
      },
      p = () => c(!1),
      g = (v) => ({
        fill: t === v || n === v ? "rgba(0, 255, 0, 0.5)" : "rgba(0, 0, 0, 0)",
        stroke: t === v || n === v ? "green" : "none",
      }),
      y = {
        organMap: { position: "relative" },
        organImg: { width: "100%", height: "auto", flexShrink: 0 },
        svg: {
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "auto",
          transition: "all 0.3s ease",
        },
      };
    return f.jsxs("section", {
      className: "organ-map",
      style: y.organMap,
      children: [
        f.jsx("img", {
          src: c8,
          alt: "Human anatomy chart of organs",
          "aria-label": "Human anatomy chart of organs",
          style: y.organImg,
        }),
        f.jsx("svg", {
          viewBox: "0 0 1975 4867",
          style: y.svg,
          children: Object.entries(d8.organList).map(([v, m]) =>
            m.map((x, _) =>
              f.jsx(
                "polygon",
                {
                  onClick: (w) => {
                    w.stopPropagation(), h(v);
                  },
                  points: x.coords,
                  style: g(v),
                  onMouseEnter: () => u(v),
                  onMouseLeave: d,
                },
                `${v}_${_}`,
              ),
            ),
          ),
        }),
        f.jsxs(ii, {
          show: l,
          onHide: p,
          centered: !0,
          children: [
            f.jsx(ii.Header, { closeButton: !0 }),
            f.jsx(ii.Body, {
              children: f.jsx(p8, { organ: o, selectedOrgan: n }),
            }),
          ],
        }),
      ],
    });
  },
  m8 = () => {
    const t = {
      nutrition: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      },
      header: {
        color: "#df0000",
        fontWeight: "bold",
        textDecoration: "underline",
        margin: 30,
      },
      paragraph: { color: "#df0000", fontSize: 20, margin: 30 },
      phrase: { color: "#df0000", fontSize: 26, margin: 10 },
      link: { textDecoration: "none", color: "#df0000" },
    };
    return f.jsxs("section", {
      className: "nutrition",
      style: t.nutrition,
      children: [
        f.jsxs("div", {
          children: [
            f.jsx("p", {
              style: t.phrase,
              children: "Your Clickable Guide to Nutrient-Rich Organ Health",
            }),
            f.jsx("h1", {
              style: t.header,
              children: "Interactive Organ Anatomy Chart",
            }),
            f.jsx("p", {
              style: t.paragraph,
              children: "Click on an organ to find out more",
            }),
          ],
        }),
        f.jsx(g8, {}),
        f.jsx("div", {
          children: f.jsxs("p", {
            style: t.paragraph,
            children: [
              "Image downloaded from",
              " ",
              f.jsx("a", {
                href: "http://www.freepik.com",
                target: "_blank",
                rel: "noreferrer",
                "aria-label": "Link to musclecharts.net",
                style: t.link,
                children: "brgfx / Freepik.",
              }),
            ],
          }),
        }),
      ],
    });
  },
  y8 = "/assets/Muscle-CHIUv5BA.png",
  v8 = {
    Adductors: [
      {
        shape: "POLYGON",
        coords:
          "274,173,278,178,281,179,284,179,282,188,281,197,281,205,282,214,278,199,276,194,275,190,274,184,274,179",
      },
      {
        shape: "POLYGON",
        coords:
          "260,180,266,177,270,173,270,181,269,186,267,193,259,214,262,195",
      },
      { shape: "POLYGON", coords: "122,142,115,166,110,155" },
      { shape: "POLYGON", coords: "79,142,90,156,86,166" },
      {
        shape: "POLYGON",
        coords:
          "110,155,112,161,115,167,112,175,110,184,110,194,110,203,105,189,102,180,102,169,105,168,106,166,107,163,109,158",
      },
      {
        shape: "POLYGON",
        coords:
          "90,155,86,166,91,181,93,192,93,204,97,191,99,179,99,170,95,167,94,165,93,163,93,160",
      },
    ],
    "Erector Spinae": [
      {
        shape: "POLYGON",
        coords:
          "284,119,285,126,285,132,260,132,259,126,260,122,261,118,264,112,266,108,279,108",
      },
    ],
    Lats: [
      {
        shape: "POLYGON",
        coords: "127,78,125,86,125,95,125,106,127,100,128,93,128,82",
      },
      { shape: "POLYGON", coords: "73,78,76,86,76,106,74,101,73,95" },
      {
        shape: "POLYGON",
        coords:
          "303,82,302,90,301,98,297,112,294,119,288,129,283,115,275,101,277,96,279,90,284,81,288,82,292,83,300,82,302,81",
      },
      {
        shape: "POLYGON",
        coords:
          "242,81,246,83,250,83,255,82,260,82,266,91,270,102,266,108,262,115,257,131,251,120,248,112,246,105,243,97,243,94,242,90",
      },
      {
        shape: "POLYGON",
        coords:
          "84,95,79,100,80,101,78,102,77,104,79,106,76,109,76,103,76,92,76,84,79,89,85,91,83,94",
      },
      {
        shape: "POLYGON",
        coords:
          "125,86,125,96,125,106,125,108,123,107,122,107,124,104,122,102,120,101,122,99,119,97,117,95,118,94,116,92,121,90",
      },
    ],
    "Rotator Cuff": [
      { shape: "POLYGON", coords: "302,66,304,67,303,81,295,83,287,81,296,75" },
      {
        shape: "POLYGON",
        coords: "242,66,241,67,242,81,245,82,249,83,258,81,247,73,245,69",
      },
      {
        shape: "POLYGON",
        coords:
          "291,60,289,61,287,65,286,72,285,79,287,81,296,75,302,65,292,60",
      },
      {
        shape: "POLYGON",
        coords:
          "253,59,255,60,257,65,258,73,260,81,258,81,247,73,245,69,242,66",
      },
    ],
    Trapezius: [
      { shape: "POLYGON", coords: "110,50,115,61,120,61,122,60,115,56" },
      { shape: "POLYGON", coords: "91,51,86,61,81,61,78,60,84,56" },
      {
        shape: "POLYGON",
        coords:
          "266,35,279,35,280,42,282,46,294,53,298,55,303,56,300,58,291,58,288,63,287,68,285,77,283,84,278,92,275,100,272,108,266,92,260,81,257,68,256,63,254,60,252,58,242,56,247,55,260,48,264,44",
      },
    ],
    Forearms: [
      {
        shape: "POLYGON",
        coords:
          "311,112,316,117,320,116,324,106,327,110,330,116,331,119,333,125,336,136,337,140,327,145,322,138,317,129,314,122,311,116",
      },
      {
        shape: "POLYGON",
        coords:
          "233,112,232,116,229,123,223,135,215,146,206,142,208,135,210,128,212,119,216,111,220,105,221,110,222,116,227,118",
      },
      {
        shape: "POLYGON",
        coords:
          "149,107,156,117,157,122,159,129,162,136,164,141,156,146,153,142,150,138,142,127,139,120,137,116,138,115,139,114,141,114,147,118,147,113",
      },
      {
        shape: "POLYGON",
        coords:
          "53,107,55,114,61,112,64,116,63,120,60,125,58,128,57,132,51,139,47,145,38,141,40,137,42,132,44,125,45,120,46,116,48,113,51,109",
      },
    ],
    Biceps: [
      {
        shape: "POLYGON",
        coords:
          "129,78,141,88,144,92,146,99,148,106,147,113,140,112,139,107,134,100,130,93,126,85,125,82,127,80",
      },
      {
        shape: "POLYGON",
        coords:
          "71,78,70,92,68,99,63,107,62,109,61,112,55,113,53,107,55,101,58,89",
      },
    ],
    Triceps: [
      {
        shape: "POLYGON",
        coords:
          "128,86,130,88,133,99,139,107,140,110,140,112,137,109,136,112,131,102,129,98,128,92",
      },
      {
        shape: "POLYGON",
        coords:
          "71,88,73,86,73,95,69,104,65,111,65,110,61,112,63,107,68,99,70,93",
      },
      {
        shape: "POLYGON",
        coords:
          "241,73,242,88,241,94,238,100,233,112,228,113,223,111,221,105,224,96,227,85,228,84,230,82,237,75",
      },
      {
        shape: "POLYGON",
        coords:
          "304,73,307,74,311,79,314,82,316,84,317,86,321,98,323,105,321,112,315,113,311,111,306,100,304,96,302,90,303,73",
      },
    ],
    "Rear Delts": [
      {
        shape: "POLYGON",
        coords:
          "291,59,304,66,305,71,307,75,315,82,315,77,314,70,312,65,310,61,306,59,301,58,294,59,292,59",
      },
      {
        shape: "POLYGON",
        coords:
          "254,59,244,58,238,59,233,63,231,68,229,73,228,84,236,77,239,72,241,66,248,62",
      },
    ],
    "Side Delts": [
      {
        shape: "POLYGON",
        coords:
          "300,58,303,56,309,59,313,63,315,66,316,68,317,75,317,82,317,85,316,83,314,70,312,64,307,59",
      },
      {
        shape: "POLYGON",
        coords:
          "244,58,241,56,234,60,229,66,227,74,227,85,229,79,230,70,233,63,237,59",
      },
      {
        shape: "POLYGON",
        coords:
          "123,61,125,60,130,60,134,62,139,68,141,72,142,76,142,85,142,87,139,84,138,76,137,69,134,65,131,63",
      },
      {
        shape: "POLYGON",
        coords:
          "77,61,75,59,71,60,68,61,65,64,62,67,59,72,58,77,58,82,59,86,58,89,63,84,62,74,65,67,70,63",
      },
    ],
    "Front Delts": [
      {
        shape: "POLYGON",
        coords:
          "116,63,121,62,127,62,131,63,134,65,136,68,138,76,139,84,131,78,130,74,128,70,122,66",
      },
      {
        shape: "POLYGON",
        coords: "85,63,78,61,72,61,68,64,65,67,62,73,63,84,70,79,71,74,69",
      },
    ],
    Abdominals: [
      {
        shape: "POLYGON",
        coords:
          "88,93,94,92,99,91,101,91,107,92,114,92,114,100,114,108,114,116,114,123,113,127,113,131,112,137,109,149,106,160,95,160,91,147,88,135,87,131,87,127,86,121,87,117,87,107,86,104,86,99,87,95",
      },
    ],
    Obliques: [
      {
        shape: "POLYGON",
        coords:
          "297,112,295,119,290,127,289,131,291,134,297,135,299,137,299,129,297,122,297,116",
      },
      {
        shape: "POLYGON",
        coords:
          "248,112,254,126,256,130,256,132,254,133,249,135,246,137,246,128,247,124,248,118,248,113,248,112",
      },
      {
        shape: "POLYGON",
        coords:
          "117,95,122,99,120,101,122,102,124,104,122,107,125,108,124,120,125,128,126,137,117,146,114,142,115,129,117,125,116,123,115,121,116,118,115,113,116,109,115,106,116,103,116,101,115,99",
      },
      {
        shape: "POLYGON",
        coords:
          "84,95,85,99,84,103,85,107,84,110,86,112,85,114,84,118,85,123,84,124,83,125,86,129,87,141,84,146,75,137,75,133,75,127,77,119,76,108,79,107,77,104,80,101,79,100",
      },
    ],
    Chest: [
      {
        shape: "POLYGON",
        coords:
          "86,63,95,64,100,74,104,64,113,63,120,66,126,70,127,74,126,81,124,87,119,90,115,92,108,91,101,90,100,88,99,88,98,91,89,92,79,89,75,83,73,74,74,70",
      },
    ],
    Calves: [
      {
        shape: "POLYGON",
        coords:
          "292,227,294,230,297,223,303,231,304,237,307,246,309,254,309,268,307,282,304,293,297,293,295,283,291,271,288,261,288,252,288,245,287,239",
      },
      {
        shape: "POLYGON",
        coords:
          "243,223,246,229,249,226,253,239,251,245,251,260,248,270,242,281,240,293,233,293,230,277,229,264,231,251,233,243,236,235,238,230",
      },
      {
        shape: "POLYGON",
        coords:
          "70,229,67,239,65,247,65,256,66,267,67,278,67,286,71,286,70,266,69,246,71,229",
      },
      {
        shape: "POLYGON",
        coords:
          "134,229,135,230,138,237,140,243,141,247,141,252,141,258,141,267,141,284,137,285,136,264,136,246",
      },
      {
        shape: "POLYGON",
        coords:
          "120,238,124,243,126,248,128,256,131,283,127,268,123,260,121,252",
      },
      {
        shape: "POLYGON",
        coords:
          "85,237,82,242,79,249,78,257,78,268,77,281,78,274,81,267,84,259,85,252",
      },
    ],
    Tibialis: [
      {
        shape: "POLYGON",
        coords:
          "131,225,133,228,136,240,137,252,136,264,135,276,135,281,135,285,134,285,132,267,131,251",
      },
      {
        shape: "POLYGON",
        coords:
          "74,224,72,228,69,247,71,269,72,278,73,286,74,286,75,250,75,246,74,239",
      },
    ],
    Hamstrings: [
      {
        shape: "POLYGON",
        coords:
          "285,179,295,179,297,183,298,189,302,209,302,220,303,232,298,225,295,217,291,229,287,239,285,233,284,229,284,221,281,206,282,188",
      },
      {
        shape: "POLYGON",
        coords:
          "249,179,254,179,259,180,261,190,261,200,259,215,257,222,256,228,255,235,253,239,249,228,246,217,242,225,238,231,240,217,240,208,246,184,247,180",
      },
    ],
    Quads: [
      {
        shape: "POLYGON",
        coords: "301,168,303,175,304,184,302,207,300,196,299,190,298,184",
      },
      {
        shape: "POLYGON",
        coords:
          "242,167,244,177,244,180,244,183,245,186,240,206,239,191,240,175",
      },
      {
        shape: "POLYGON",
        coords:
          "123,149,119,169,115,184,112,199,112,208,113,216,115,218,117,219,119,218,120,216,120,208,126,208,127,214,130,219,132,210,133,204,134,196,133,180,132,172,130,163",
      },
      {
        shape: "POLYGON",
        coords:
          "78,148,73,159,71,167,69,174,69,187,69,196,71,207,74,219,78,212,78,208,83,208,83,214,84,216,85,218,87,218,90,217,91,210,91,199,88,188,80,161",
      },
    ],
    "Hip Flexors": [
      {
        shape: "POLYGON",
        coords:
          "126,139,124,141,124,149,129,162,132,170,133,179,133,173,132,168,131,161,130,159,130,156,128,148",
      },
      {
        shape: "POLYGON",
        coords:
          "75,139,77,140,76,152,73,160,70,170,69,181,68,176,69,171,71,158",
      },
      {
        shape: "POLYGON",
        coords:
          "77,141,79,142,82,155,87,168,90,178,92,187,93,204,92,213,91,218,89,226,86,234,82,241,79,245,81,236,85,230,88,223,91,215,91,209,91,202,88,187,83,171,79,156",
      },
      {
        shape: "POLYGON",
        coords:
          "122,142,119,152,116,164,113,173,111,182,110,188,110,194,110,204,115,225,117,230,119,235,125,242,125,236,121,230,117,223,113,213,112,208,112,202,114,190,116,179,121,160,124,141",
      },
    ],
    Glutes: [
      {
        shape: "POLYGON",
        coords:
          "282,138,288,136,294,136,296,142,298,147,298,155,296,149,292,144",
      },
      {
        shape: "POLYGON",
        coords:
          "263,138,258,135,255,135,251,136,247,145,246,154,249,148,254,144",
      },
      {
        shape: "POLYGON",
        coords:
          "263,138,257,141,252,145,249,148,248,150,245,159,246,168,249,178,260,179,265,177,269,174,271,171,272,166,274,173,279,178,285,179,292,179,296,172,299,165,299,160,298,156,297,150,295,147,292,144,282,138,276,143,272,149,269,143,267,141",
      },
    ],
    Neck: [
      {
        shape: "POLYGON",
        coords: "91,41,91,51,96,61,103,61,109,51,109,41,104,44,97,44",
      },
    ],
  },
  x8 = { muscleList: v8 },
  _8 = "/api/musclefunctionvideos",
  b8 = { get: () => ce.get(_8).then((e) => e.data) },
  w8 = "/api/exercisevideos",
  E8 = { get: () => ce.get(w8).then((e) => e.data) },
  sc = ({ video: t }) => {
    const [e, n] = b.useState(!1),
      i = b.useRef(null),
      r = {
        text: { color: "#df0000", borderWidth: "2px" },
        description: { maxWidth: "800px", margin: "auto", padding: 10 },
        header: { textDecoration: "underline" },
      };
    return (
      b.useEffect(() => {
        const s = new IntersectionObserver(
          (o) => {
            const [a] = o;
            a.isIntersecting && (n(!0), s.disconnect());
          },
          { threshold: 0.1 },
        );
        return (
          i.current && s.observe(i.current),
          () => {
            s.disconnect();
          }
        );
      }, []),
      f.jsxs(Z, {
        className: "mb-4 box-shadow",
        border: "danger",
        style: r.text,
        children: [
          f.jsx(PS, {
            aspectRatio: "16x9",
            children: f.jsx("iframe", {
              ref: i,
              title: t.title,
              src: e ? t.embedUrl : "",
              frameBorder: "0",
              allow:
                "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
              allowFullScreen: !0,
              loading: "lazy",
            }),
          }),
          f.jsxs(Z.Body, {
            children: [
              f.jsx(Z.Title, { style: r.header, children: t.title }),
              f.jsxs(Z.Text, {
                style: r.description,
                children: [f.jsx(ie, {}), t.description],
              }),
              f.jsx(Z.Footer, {
                children: f.jsx("small", { children: t.duration }),
              }),
            ],
          }),
        ],
      })
    );
  },
  S8 = b.forwardRef((t, e) => {
    const {
        displayedMuscleFunctionVideos: n,
        displayedExerciseVideos: i,
        selectedMuscle: r,
      } = t,
      s = {
        header: {
          color: "#df0000",
          fontWeight: "bold",
          textDecoration: "underline",
          marginBottom: 40,
        },
      };
    return f.jsxs(et, {
      ref: e,
      children: [
        f.jsx("h1", { style: s.header, children: r }),
        n.length > 0 &&
          f.jsxs(et, {
            children: [
              f.jsx("h1", { style: s.header, children: "Muscle Functions" }),
              n.map((o) => f.jsx(sc, { video: o }, o.id)),
            ],
          }),
        i.length > 0 &&
          f.jsxs(et, {
            children: [
              f.jsx("h1", { style: s.header, children: "Exercises" }),
              i.map((o) => f.jsx(sc, { video: o }, o.id)),
            ],
          }),
      ],
    });
  }),
  C8 = () => {
    const [t, e] = b.useState(null),
      [n, i] = b.useState(null),
      [r, s] = b.useState([]),
      [o, a] = b.useState([]),
      [l, c] = b.useState([]),
      [u, d] = b.useState([]),
      h = b.useRef(null);
    b.useEffect(() => {
      (async () => {
        const _ = await b8.get();
        s(_);
      })();
    }, []),
      b.useEffect(() => {
        (async () => {
          const _ = await E8.get();
          c(_);
        })();
      }, []);
    const p = (x) => {
        e(x);
      },
      g = () => {
        e(null);
      },
      y = (x) => {
        i(x);
        const _ = r.filter((E) => E.muscleName === x);
        a(_);
        const w = l.filter((E) => E.muscleName === x);
        d(w), h.current.scrollIntoView({ behavior: "smooth" });
      },
      v = (x) => ({
        fill: t === x || n === x ? "rgba(255, 0, 0, 0.5)" : "rgba(0, 0, 0, 0)",
        stroke: t === x || n === x ? "red" : "none",
      }),
      m = {
        muscleMap: { position: "relative" },
        anatomyImg: { width: "100%", height: "auto" },
        svg: {
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "auto",
          transition: "all 0.3s ease",
        },
      };
    return f.jsxs("section", {
      className: "muscle-map",
      style: m.muscleMap,
      children: [
        f.jsx("img", {
          src: y8,
          alt: "Human anatomy",
          "aria-label": "Human anatomy",
          style: m.anatomyImg,
        }),
        f.jsx("svg", {
          viewBox: "0 0 373 331",
          style: m.svg,
          children: Object.entries(x8.muscleList).map(([x, _]) =>
            _.map((w, E) =>
              f.jsx(
                "polygon",
                {
                  onClick: (S) => {
                    S.stopPropagation(), y(x);
                  },
                  points: w.coords,
                  style: v(x),
                  onMouseEnter: () => p(x),
                  onMouseLeave: g,
                },
                `${x}_${E}`,
              ),
            ),
          ),
        }),
        f.jsx(S8, {
          ref: h,
          displayedMuscleFunctionVideos: o,
          displayedExerciseVideos: u,
          selectedMuscle: n,
        }),
      ],
    });
  },
  k8 = () => {
    const t = {
      training: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      },
      header: {
        color: "#df0000",
        fontWeight: "bold",
        textDecoration: "underline",
        margin: 30,
      },
      paragraph: { color: "#df0000", fontSize: 20, margin: 30 },
      phrase: { color: "#df0000", fontSize: 26, margin: 10 },
      link: { textDecoration: "none", color: "#df0000" },
    };
    return f.jsxs("section", {
      className: "training",
      style: t.training,
      children: [
        f.jsxs("div", {
          children: [
            f.jsx("p", {
              style: t.phrase,
              children:
                "You can build all aspects of fitness if you focus on muscle",
            }),
            f.jsx("h1", {
              style: t.header,
              children: "Interactive Muscle Anatomy Chart",
            }),
            f.jsx("p", {
              style: t.paragraph,
              children: "Click on a muscle to find out more",
            }),
          ],
        }),
        f.jsx(C8, {}),
        f.jsx("div", {
          children: f.jsxs("p", {
            style: t.paragraph,
            children: [
              "Image downloaded from",
              " ",
              f.jsx("a", {
                href: "https://musclecharts.net/",
                target: "_blank",
                rel: "noreferrer",
                "aria-label": "Link to musclecharts.net",
                style: t.link,
                children: "Muscle Charts.",
              }),
            ],
          }),
        }),
      ],
    });
  },
  O8 = () => {
    const t = (n) => {
        window.scrollTo(0, 0);
      },
      e = {
        section: {
          maxWidth: 500,
          margin: "auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#df0000",
        },
      };
    return f.jsxs("section", {
      className: "privacy policy",
      style: e.section,
      children: [
        f.jsx("h3", { children: "Privacy Policy" }),
        f.jsx("p", {
          children:
            "This Privacy Policy outlines the types of personal data that we collect, how we use and protect that data, and your rights regarding your personal data. We are committed to protecting your privacy in accordance with the General Data Protection Regulation (GDPR).",
        }),
        f.jsx("h3", { children: "Collection of Personal Data" }),
        f.jsx("p", {
          children:
            "We may collect personal data from you when you submit a contact form or request information from us. The personal data we may collect could include your name, email address and any other information that you provide for us.",
        }),
        f.jsx("h3", { children: "Use of Personal Data" }),
        f.jsx("p", {
          children:
            "We may use your personal data to provide you with services, to communicate with you and to comply with legal obligations. We will never sell, rent, or share your personal data with any third parties without your consent, except as required by law.",
        }),
        f.jsx("h3", { children: "Protection of Personal Data" }),
        f.jsx("p", {
          children:
            "We take appropriate technical and organizational measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. We limit access to your personal data to employees, contractors, and agents who need to know the data to perform their duties and who are bound by confidentiality obligations.",
        }),
        f.jsx("h3", { children: "Your Rights" }),
        f.jsx("p", {
          children:
            "You have the right to access and receive a copy of your personal data that we hold. Request correction or erasure of your personal data. Object to the processing of your personal data. Restrict the processing of your personal data. Request a transfer of your personal data to another controller. To exercise your rights, please contact us using the contact information below.",
        }),
        f.jsx("h3", { children: "Changes to this Privacy Policy" }),
        f.jsx("p", {
          children:
            "We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on our website with the effective date of the revised policy.",
        }),
        f.jsx("h3", { children: "Contact Information" }),
        f.jsxs("p", {
          children: [
            "If you have any questions or concerns about this Privacy Policy or our handling of your personal data, please contact TeckBuff at alexanderallen032@gmail.com or use the contact form",
            " ",
            f.jsxs(ns, {
              to: "/contactforms",
              "aria-label": "Link to Contact page",
              onClick: t,
              children: [" ", "here."],
            }),
          ],
        }),
      ],
    });
  },
  T8 = () => {
    const t = {
      section: {
        margin: "auto",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#df0000",
      },
    };
    return f.jsxs("section", {
      className: "disclaimer",
      style: t.section,
      children: [
        f.jsx("h3", { children: "Disclaimer" }),
        f.jsx("p", {
          children:
            "As with all diet and fitness programs, consulting a Doctor or medical professional before starting is always recommended. The information on the Bullet Point Fitness site is for informative purposes only, and is not intended or implied to be a substitute for professional medical advice, diagnosis or treatment. All content, including text, graphics, images and information, contained on or available through this web site is for general information purposes only. This site is to help people reach attainable goals through lifestyle changes. Bullet Point Fitness makes no representation and assumes no responsibility for the accuracy of information contained on or available through this web site, and such information is subject to change without notice. You are encouraged to confirm any information obtained from or through this web site with other sources, and review all information regarding any MEDICAL condition or treatment with your Doctor. NEVER DISREGARD ANY PROFESSIONAL MEDICAL ADVICE OR DELAY SEEKING MEDICAL TREATMENT BECAUSE OF SOMETHING YOU HAVE READ OR ACCESSED THROUGHOUT THIS WEBSITE. No health or medical claims are made for this lifestyle change program. Bullet Point Fitness does not warrant, lead, guide or in any way want you to believe or expect that the nutritional and fitness information presented on this web site will: cure, heal, or correct any illness, metabolic disorder, or medical condition. Bullet Point Fitness does not recommend, endorse or make any representation about the efficacy, appropriateness, or suitability of any specific tests, products, procedures, treatments, services, opinions or other information that may be contained or available through this web site. BULLET POINT FITNESS IS NOT RESPONSIBLE NOR LIABLE FOR ANY ADVICE, COURSE OF TREATMENT, DIAGNOSIS OR ANY OTHER INFORMATION, SERVICES OR PRODUCTS THAT YOU OBTAIN THROUGH THIS WEBSITE. By using these diets and fitness guidelines, you agree that you have read the above medical disclosure, you agree, and you will hold harmless the authors, contributors and publishers, and they shall have neither liability nor responsibility to any person or entity with respect to any of the information contained on this website. You (the user) will assume all risk for injury, loss or damage caused or alleged to be caused, directly or indirectly by using any information described on this web site.",
        }),
      ],
    });
  },
  Bg = () => {
    const [t, e] = b.useState(!1),
      [n, i] = b.useState(!1),
      r = () => {
        e((l) => !l);
      },
      s = () => {
        i((l) => !l);
      },
      o = {
        section: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: 15,
          color: "#df0000",
          margin: 10,
        },
        button: { margin: 10 },
        svg: { margin: 15 },
        header: { margin: 12 },
      },
      a = new Date().getFullYear();
    return f.jsxs("section", {
      className: "footer",
      style: o.section,
      children: [
        f.jsxs("div", {
          children: [
            f.jsxs("h4", {
              style: o.header,
              children: ["Copyright Alex Allen ", a],
            }),
            f.jsxs("h4", {
              style: o.header,
              children: [
                "Powered by",
                " ",
                f.jsx("a", {
                  href: "https://teckbuff.com/",
                  target: "_blank",
                  rel: "noreferrer",
                  "aria-label": "Link to TeckBuff.com",
                  children: "TeckBuff",
                }),
              ],
            }),
          ],
        }),
        f.jsx("div", {
          children: f.jsx("h4", {
            style: o.header,
            children: "Connect with us on these platforms:",
          }),
        }),
        f.jsxs("div", {
          style: o.header,
          children: [
            f.jsx("a", {
              href: "https://www.facebook.com/BulletPFitness/",
              target: "_blank",
              rel: "noreferrer",
              "aria-label": "Bullet Point Fitness Facebook Page",
              children: f.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "28",
                height: "28",
                fill: "#4267B2",
                className: "bi bi-facebook",
                viewBox: "0 0 16 16",
                style: o.svg,
                children: f.jsx("path", {
                  d: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951",
                }),
              }),
            }),
            f.jsx("a", {
              href: "https://twitter.com/AlexAllen247",
              target: "_blank",
              rel: "noreferrer",
              "aria-label": "Twitter X Profile",
              children: f.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "28",
                height: "28",
                fill: "#000000",
                className: "bi bi-twitter-x",
                viewBox: "0 0 16 16",
                style: o.svg,
                children: f.jsx("path", {
                  d: "M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z",
                }),
              }),
            }),
            f.jsx("a", {
              href: "https://www.youtube.com/channel/UCSfGT9FK27UGW63uaMpd3Cg",
              target: "_blank",
              rel: "noreferrer",
              "aria-label": "Youtube Channel",
              children: f.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "28",
                height: "28",
                fill: "#FF0000",
                className: "bi bi-youtube",
                viewBox: "0 0 16 16",
                style: o.svg,
                children: f.jsx("path", {
                  d: "M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z",
                }),
              }),
            }),
            f.jsx("a", {
              href: "https://www.instagram.com/alexallen247",
              target: "_blank",
              rel: "noreferrer",
              "aria-label": "Instagram Profile",
              children: f.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "28",
                height: "28",
                fill: "#000000",
                className: "bi bi-instagram",
                viewBox: "0 0 16 16",
                style: o.svg,
                children: f.jsx("path", {
                  d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z",
                }),
              }),
            }),
            f.jsx("a", {
              href: "https://www.tiktok.com/@alexallen247",
              target: "_blank",
              rel: "noreferrer",
              "aria-label": "TikTok Profile",
              children: f.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "28",
                height: "28",
                fill: "#000000",
                className: "bi bi-tiktok",
                viewBox: "0 0 16 16",
                style: o.svg,
                children: f.jsx("path", {
                  d: "M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z",
                }),
              }),
            }),
            f.jsx("a", {
              href: "https://www.linkedin.com/in/alex-allen-392225251/",
              target: "_blank",
              rel: "noreferrer",
              "aria-label": "LinkedIn Profile",
              children: f.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "28",
                height: "28",
                fill: "#0E76A8",
                className: "bi bi-linkedin",
                viewBox: "0 0 16 16",
                style: o.svg,
                children: f.jsx("path", {
                  d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z",
                }),
              }),
            }),
            f.jsx("a", {
              href: "https://github.com/AlexAllen247",
              target: "_blank",
              rel: "noreferrer",
              "aria-label": "Github Profile",
              children: f.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "28",
                height: "28",
                fill: "#000000",
                className: "bi bi-github",
                viewBox: "0 0 16 16",
                style: o.svg,
                children: f.jsx("path", {
                  d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z",
                }),
              }),
            }),
          ],
        }),
        f.jsx(ot, {
          variant: "danger",
          onClick: r,
          style: o.button,
          "aria-label": "Privacy Policy",
          className: "btn-custom",
          children: "Privacy Policy",
        }),
        t ? f.jsx(O8, {}) : null,
        f.jsx(ot, {
          variant: "danger",
          onClick: s,
          style: o.button,
          "aria-label": "Disclaimer",
          className: "btn-custom",
          children: "Disclaimer",
        }),
        n ? f.jsx(T8, {}) : null,
      ],
    });
  },
  N8 = "/assets/BulletPointFitnessBannerNew-DYSHcbtp.png",
  zg = () => {
    const [t, e] = b.useState(window.innerWidth),
      [n, i] = b.useState(!1);
    b.useEffect(() => {
      const s = () => e(window.innerWidth);
      return (
        window.addEventListener("resize", s),
        () => {
          window.removeEventListener("resize", s);
        }
      );
    }, []),
      b.useEffect(() => {
        i(!0);
      }, []);
    const r = {
      section: { textAlign: "center" },
      image: {
        maxWidth: "100%",
        width: t <= 767 ? "100%" : "initial",
        height: t <= 767 ? "auto" : "initial",
      },
    };
    return f.jsx("section", {
      style: r.section,
      className: "header",
      children: f.jsx("div", {
        className: "container",
        children:
          n &&
          f.jsx("img", {
            src: N8,
            alt: "My Banner",
            style: r.image,
            "aria-label": "Banner for bulletpointfitness.com",
          }),
      }),
    });
  },
  A8 = "/assets/Level2FirstAid-hlc22e8P.jpg",
  P8 = "/assets/Level2Fitness-C4hhLhhV.jpg",
  L8 = "/assets/Level3PT-DQ6reGNu.jpg",
  j8 = "/assets/Level3PT1-DRuRZD41.jpg",
  Wg = "/assets/Level3PTDiploma-C5zNP6NN.jpg",
  D8 = "/assets/Level3ExerciseReferral-CpJUFh70.jpg",
  R8 = "/assets/Level4ObesityAndDiabetes-DP2NbOtJ.jpg",
  M8 = "/api/aboutvideos",
  I8 = { get: () => ce.get(M8).then((e) => e.data) },
  $8 = () => {
    const [t, e] = b.useState([]);
    b.useEffect(() => {
      (async () => {
        const s = await I8.get();
        e(s);
      })();
    }, []);
    const n = [A8, P8, L8, j8, Wg, Wg, D8, R8],
      i = {
        container: { textAlign: "center" },
        card: { color: "#df0000", borderWidth: "2px" },
        header: {
          color: "#df0000",
          fontWeight: "bold",
          textDecoration: "underline",
          marginBottom: 40,
        },
        fitHeader: {
          color: "#df0000",
          fontWeight: "bold",
          textDecoration: "underline",
          margin: 60,
        },
      };
    return f.jsx("section", {
      style: i.container,
      children: f.jsxs(et, {
        children: [
          f.jsx("div", {
            children: f.jsx("h1", { style: i.header, children: "About" }),
          }),
          t.map((r) => f.jsx(sc, { video: r }, r.id)),
          f.jsx("div", {
            children: f.jsx("h1", {
              style: i.fitHeader,
              children: "Fitness Certifications",
            }),
          }),
          n.map((r, s) =>
            s % 2 === 0
              ? f.jsxs(
                  cs,
                  {
                    children: [
                      f.jsx(_i, {
                        md: 6,
                        children: f.jsx("a", {
                          href: n[s],
                          children: f.jsx(Z, {
                            className: "my-3",
                            style: i.card,
                            children: f.jsx(Z.Img, {
                              variant: "top",
                              src: n[s],
                              loading: "lazy",
                            }),
                          }),
                        }),
                      }),
                      n[s + 1] &&
                        f.jsx(_i, {
                          md: 6,
                          children: f.jsx("a", {
                            href: n[s + 1],
                            children: f.jsx(Z, {
                              className: "my-3",
                              style: i.card,
                              children: f.jsx(Z.Img, {
                                variant: "top",
                                src: n[s + 1],
                                loading: "lazy",
                              }),
                            }),
                          }),
                        }),
                    ],
                  },
                  s,
                )
              : null,
          ),
        ],
      }),
    });
  };
var Gx = { exports: {} };
(function (t, e) {
  (function (n, i) {
    t.exports = i(b);
  })(xb, (n) =>
    (() => {
      var i = {
          703: (a, l, c) => {
            var u = c(414);
            function d() {}
            function h() {}
            (h.resetWarningCache = d),
              (a.exports = function () {
                function p(v, m, x, _, w, E) {
                  if (E !== u) {
                    var S = new Error(
                      "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
                    );
                    throw ((S.name = "Invariant Violation"), S);
                  }
                }
                function g() {
                  return p;
                }
                p.isRequired = p;
                var y = {
                  array: p,
                  bigint: p,
                  bool: p,
                  func: p,
                  number: p,
                  object: p,
                  string: p,
                  symbol: p,
                  any: p,
                  arrayOf: g,
                  element: p,
                  elementType: p,
                  instanceOf: g,
                  node: p,
                  objectOf: g,
                  oneOf: g,
                  oneOfType: g,
                  shape: g,
                  exact: g,
                  checkPropTypes: h,
                  resetWarningCache: d,
                };
                return (y.PropTypes = y), y;
              });
          },
          697: (a, l, c) => {
            a.exports = c(703)();
          },
          414: (a) => {
            a.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
          },
          98: (a) => {
            a.exports = n;
          },
        },
        r = {};
      function s(a) {
        var l = r[a];
        if (l !== void 0) return l.exports;
        var c = (r[a] = { exports: {} });
        return i[a](c, c.exports, s), c.exports;
      }
      (s.n = (a) => {
        var l = a && a.__esModule ? () => a.default : () => a;
        return s.d(l, { a: l }), l;
      }),
        (s.d = (a, l) => {
          for (var c in l)
            s.o(l, c) &&
              !s.o(a, c) &&
              Object.defineProperty(a, c, { enumerable: !0, get: l[c] });
        }),
        (s.o = (a, l) => Object.prototype.hasOwnProperty.call(a, l)),
        (s.r = (a) => {
          typeof Symbol < "u" &&
            Symbol.toStringTag &&
            Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(a, "__esModule", { value: !0 });
        });
      var o = {};
      return (
        (() => {
          s.r(o), s.d(o, { default: () => $ });
          var a = s(98),
            l = s.n(a),
            c = s(697),
            u = s.n(c);
          function d() {
            return (
              (d = Object.assign
                ? Object.assign.bind()
                : function (A) {
                    for (var M = 1; M < arguments.length; M++) {
                      var V = arguments[M];
                      for (var z in V)
                        Object.prototype.hasOwnProperty.call(V, z) &&
                          (A[z] = V[z]);
                    }
                    return A;
                  }),
              d.apply(this, arguments)
            );
          }
          var h = function (A) {
            var M = A.pageClassName,
              V = A.pageLinkClassName,
              z = A.page,
              Y = A.selected,
              G = A.activeClassName,
              L = A.activeLinkClassName,
              N = A.getEventListener,
              O = A.pageSelectedHandler,
              F = A.href,
              R = A.extraAriaContext,
              B = A.pageLabelBuilder,
              W = A.rel,
              U = A.ariaLabel || "Page " + z + (R ? " " + R : ""),
              q = null;
            return (
              Y &&
                ((q = "page"),
                (U = A.ariaLabel || "Page " + z + " is your current page"),
                (M = M !== void 0 ? M + " " + G : G),
                V !== void 0 ? L !== void 0 && (V = V + " " + L) : (V = L)),
              l().createElement(
                "li",
                { className: M },
                l().createElement(
                  "a",
                  d(
                    {
                      rel: W,
                      role: F ? void 0 : "button",
                      className: V,
                      href: F,
                      tabIndex: Y ? "-1" : "0",
                      "aria-label": U,
                      "aria-current": q,
                      onKeyPress: O,
                    },
                    N(O),
                  ),
                  B(z),
                ),
              )
            );
          };
          h.propTypes = {
            pageSelectedHandler: u().func.isRequired,
            selected: u().bool.isRequired,
            pageClassName: u().string,
            pageLinkClassName: u().string,
            activeClassName: u().string,
            activeLinkClassName: u().string,
            extraAriaContext: u().string,
            href: u().string,
            ariaLabel: u().string,
            page: u().number.isRequired,
            getEventListener: u().func.isRequired,
            pageLabelBuilder: u().func.isRequired,
            rel: u().string,
          };
          const p = h;
          function g() {
            return (
              (g = Object.assign
                ? Object.assign.bind()
                : function (A) {
                    for (var M = 1; M < arguments.length; M++) {
                      var V = arguments[M];
                      for (var z in V)
                        Object.prototype.hasOwnProperty.call(V, z) &&
                          (A[z] = V[z]);
                    }
                    return A;
                  }),
              g.apply(this, arguments)
            );
          }
          var y = function (A) {
            var M = A.breakLabel,
              V = A.breakAriaLabel,
              z = A.breakClassName,
              Y = A.breakLinkClassName,
              G = A.breakHandler,
              L = A.getEventListener,
              N = z || "break";
            return l().createElement(
              "li",
              { className: N },
              l().createElement(
                "a",
                g(
                  {
                    className: Y,
                    role: "button",
                    tabIndex: "0",
                    "aria-label": V,
                    onKeyPress: G,
                  },
                  L(G),
                ),
                M,
              ),
            );
          };
          y.propTypes = {
            breakLabel: u().oneOfType([u().string, u().node]),
            breakAriaLabel: u().string,
            breakClassName: u().string,
            breakLinkClassName: u().string,
            breakHandler: u().func.isRequired,
            getEventListener: u().func.isRequired,
          };
          const v = y;
          function m(A) {
            var M =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : "";
            return A ?? M;
          }
          function x(A) {
            return (
              (x =
                typeof Symbol == "function" &&
                typeof Symbol.iterator == "symbol"
                  ? function (M) {
                      return typeof M;
                    }
                  : function (M) {
                      return M &&
                        typeof Symbol == "function" &&
                        M.constructor === Symbol &&
                        M !== Symbol.prototype
                        ? "symbol"
                        : typeof M;
                    }),
              x(A)
            );
          }
          function _() {
            return (
              (_ = Object.assign
                ? Object.assign.bind()
                : function (A) {
                    for (var M = 1; M < arguments.length; M++) {
                      var V = arguments[M];
                      for (var z in V)
                        Object.prototype.hasOwnProperty.call(V, z) &&
                          (A[z] = V[z]);
                    }
                    return A;
                  }),
              _.apply(this, arguments)
            );
          }
          function w(A, M) {
            for (var V = 0; V < M.length; V++) {
              var z = M[V];
              (z.enumerable = z.enumerable || !1),
                (z.configurable = !0),
                "value" in z && (z.writable = !0),
                Object.defineProperty(A, z.key, z);
            }
          }
          function E(A, M) {
            return (
              (E = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (V, z) {
                    return (V.__proto__ = z), V;
                  }),
              E(A, M)
            );
          }
          function S(A, M) {
            if (M && (x(M) === "object" || typeof M == "function")) return M;
            if (M !== void 0)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return C(A);
          }
          function C(A) {
            if (A === void 0)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return A;
          }
          function k(A) {
            return (
              (k = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (M) {
                    return M.__proto__ || Object.getPrototypeOf(M);
                  }),
              k(A)
            );
          }
          function P(A, M, V) {
            return (
              M in A
                ? Object.defineProperty(A, M, {
                    value: V,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (A[M] = V),
              A
            );
          }
          var j = (function (A) {
            (function (N, O) {
              if (typeof O != "function" && O !== null)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (N.prototype = Object.create(O && O.prototype, {
                constructor: { value: N, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(N, "prototype", { writable: !1 }),
                O && E(N, O);
            })(L, A);
            var M,
              V,
              z,
              Y,
              G =
                ((z = L),
                (Y = (function () {
                  if (
                    typeof Reflect > "u" ||
                    !Reflect.construct ||
                    Reflect.construct.sham
                  )
                    return !1;
                  if (typeof Proxy == "function") return !0;
                  try {
                    return (
                      Boolean.prototype.valueOf.call(
                        Reflect.construct(Boolean, [], function () {}),
                      ),
                      !0
                    );
                  } catch {
                    return !1;
                  }
                })()),
                function () {
                  var N,
                    O = k(z);
                  if (Y) {
                    var F = k(this).constructor;
                    N = Reflect.construct(O, arguments, F);
                  } else N = O.apply(this, arguments);
                  return S(this, N);
                });
            function L(N) {
              var O, F;
              return (
                (function (R, B) {
                  if (!(R instanceof B))
                    throw new TypeError("Cannot call a class as a function");
                })(this, L),
                P(C((O = G.call(this, N))), "handlePreviousPage", function (R) {
                  var B = O.state.selected;
                  O.handleClick(R, null, B > 0 ? B - 1 : void 0, {
                    isPrevious: !0,
                  });
                }),
                P(C(O), "handleNextPage", function (R) {
                  var B = O.state.selected,
                    W = O.props.pageCount;
                  O.handleClick(R, null, B < W - 1 ? B + 1 : void 0, {
                    isNext: !0,
                  });
                }),
                P(C(O), "handlePageSelected", function (R, B) {
                  if (O.state.selected === R)
                    return (
                      O.callActiveCallback(R),
                      void O.handleClick(B, null, void 0, { isActive: !0 })
                    );
                  O.handleClick(B, null, R);
                }),
                P(C(O), "handlePageChange", function (R) {
                  O.state.selected !== R &&
                    (O.setState({ selected: R }), O.callCallback(R));
                }),
                P(C(O), "getEventListener", function (R) {
                  return P({}, O.props.eventListener, R);
                }),
                P(C(O), "handleClick", function (R, B, W) {
                  var U =
                      arguments.length > 3 && arguments[3] !== void 0
                        ? arguments[3]
                        : {},
                    q = U.isPrevious,
                    he = q !== void 0 && q,
                    De = U.isNext,
                    Ye = De !== void 0 && De,
                    Ke = U.isBreak,
                    we = Ke !== void 0 && Ke,
                    nt = U.isActive,
                    ze = nt !== void 0 && nt;
                  R.preventDefault ? R.preventDefault() : (R.returnValue = !1);
                  var Re = O.state.selected,
                    X = O.props.onClick,
                    Te = W;
                  if (X) {
                    var Ee = X({
                      index: B,
                      selected: Re,
                      nextSelectedPage: W,
                      event: R,
                      isPrevious: he,
                      isNext: Ye,
                      isBreak: we,
                      isActive: ze,
                    });
                    if (Ee === !1) return;
                    Number.isInteger(Ee) && (Te = Ee);
                  }
                  Te !== void 0 && O.handlePageChange(Te);
                }),
                P(C(O), "handleBreakClick", function (R, B) {
                  var W = O.state.selected;
                  O.handleClick(
                    B,
                    R,
                    W < R ? O.getForwardJump() : O.getBackwardJump(),
                    { isBreak: !0 },
                  );
                }),
                P(C(O), "callCallback", function (R) {
                  O.props.onPageChange !== void 0 &&
                    typeof O.props.onPageChange == "function" &&
                    O.props.onPageChange({ selected: R });
                }),
                P(C(O), "callActiveCallback", function (R) {
                  O.props.onPageActive !== void 0 &&
                    typeof O.props.onPageActive == "function" &&
                    O.props.onPageActive({ selected: R });
                }),
                P(C(O), "getElementPageRel", function (R) {
                  var B = O.state.selected,
                    W = O.props,
                    U = W.nextPageRel,
                    q = W.prevPageRel,
                    he = W.selectedPageRel;
                  return B - 1 === R
                    ? q
                    : B === R
                    ? he
                    : B + 1 === R
                    ? U
                    : void 0;
                }),
                P(C(O), "pagination", function () {
                  var R = [],
                    B = O.props,
                    W = B.pageRangeDisplayed,
                    U = B.pageCount,
                    q = B.marginPagesDisplayed,
                    he = B.breakLabel,
                    De = B.breakClassName,
                    Ye = B.breakLinkClassName,
                    Ke = B.breakAriaLabels,
                    we = O.state.selected;
                  if (U <= W)
                    for (var nt = 0; nt < U; nt++) R.push(O.getPageElement(nt));
                  else {
                    var ze = W / 2,
                      Re = W - ze;
                    we > U - W / 2
                      ? (ze = W - (Re = U - we))
                      : we < W / 2 && (Re = W - (ze = we));
                    var X,
                      Te,
                      Ee = function (it) {
                        return O.getPageElement(it);
                      },
                      ve = [];
                    for (X = 0; X < U; X++) {
                      var Un = X + 1;
                      if (Un <= q)
                        ve.push({ type: "page", index: X, display: Ee(X) });
                      else if (Un > U - q)
                        ve.push({ type: "page", index: X, display: Ee(X) });
                      else if (
                        X >= we - ze &&
                        X <= we + (we === 0 && W > 1 ? Re - 1 : Re)
                      )
                        ve.push({ type: "page", index: X, display: Ee(X) });
                      else if (
                        he &&
                        ve.length > 0 &&
                        ve[ve.length - 1].display !== Te &&
                        (W > 0 || q > 0)
                      ) {
                        var bt = X < we ? Ke.backward : Ke.forward;
                        (Te = l().createElement(v, {
                          key: X,
                          breakAriaLabel: bt,
                          breakLabel: he,
                          breakClassName: De,
                          breakLinkClassName: Ye,
                          breakHandler: O.handleBreakClick.bind(null, X),
                          getEventListener: O.getEventListener,
                        })),
                          ve.push({ type: "break", index: X, display: Te });
                      }
                    }
                    ve.forEach(function (it, wt) {
                      var ln = it;
                      it.type === "break" &&
                        ve[wt - 1] &&
                        ve[wt - 1].type === "page" &&
                        ve[wt + 1] &&
                        ve[wt + 1].type === "page" &&
                        ve[wt + 1].index - ve[wt - 1].index <= 2 &&
                        (ln = {
                          type: "page",
                          index: it.index,
                          display: Ee(it.index),
                        }),
                        R.push(ln.display);
                    });
                  }
                  return R;
                }),
                N.initialPage !== void 0 &&
                  N.forcePage !== void 0 &&
                  console.warn(
                    "(react-paginate): Both initialPage ("
                      .concat(N.initialPage, ") and forcePage (")
                      .concat(
                        N.forcePage,
                        ") props are provided, which is discouraged.",
                      ) +
                      ` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`,
                  ),
                (F = N.initialPage
                  ? N.initialPage
                  : N.forcePage
                  ? N.forcePage
                  : 0),
                (O.state = { selected: F }),
                O
              );
            }
            return (
              (M = L),
              (V = [
                {
                  key: "componentDidMount",
                  value: function () {
                    var N = this.props,
                      O = N.initialPage,
                      F = N.disableInitialCallback,
                      R = N.extraAriaContext,
                      B = N.pageCount,
                      W = N.forcePage;
                    O === void 0 || F || this.callCallback(O),
                      R &&
                        console.warn(
                          "DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.",
                        ),
                      Number.isInteger(B) ||
                        console.warn(
                          "(react-paginate): The pageCount prop value provided is not an integer (".concat(
                            B,
                            "). Did you forget a Math.ceil()?",
                          ),
                        ),
                      O !== void 0 &&
                        O > B - 1 &&
                        console.warn(
                          "(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop ("
                            .concat(O, " > ")
                            .concat(B - 1, ")."),
                        ),
                      W !== void 0 &&
                        W > B - 1 &&
                        console.warn(
                          "(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop ("
                            .concat(W, " > ")
                            .concat(B - 1, ")."),
                        );
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (N) {
                    this.props.forcePage !== void 0 &&
                      this.props.forcePage !== N.forcePage &&
                      (this.props.forcePage > this.props.pageCount - 1 &&
                        console.warn(
                          "(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop ("
                            .concat(this.props.forcePage, " > ")
                            .concat(this.props.pageCount - 1, ")."),
                        ),
                      this.setState({ selected: this.props.forcePage })),
                      Number.isInteger(N.pageCount) &&
                        !Number.isInteger(this.props.pageCount) &&
                        console.warn(
                          "(react-paginate): The pageCount prop value provided is not an integer (".concat(
                            this.props.pageCount,
                            "). Did you forget a Math.ceil()?",
                          ),
                        );
                  },
                },
                {
                  key: "getForwardJump",
                  value: function () {
                    var N = this.state.selected,
                      O = this.props,
                      F = O.pageCount,
                      R = N + O.pageRangeDisplayed;
                    return R >= F ? F - 1 : R;
                  },
                },
                {
                  key: "getBackwardJump",
                  value: function () {
                    var N = this.state.selected - this.props.pageRangeDisplayed;
                    return N < 0 ? 0 : N;
                  },
                },
                {
                  key: "getElementHref",
                  value: function (N) {
                    var O = this.props,
                      F = O.hrefBuilder,
                      R = O.pageCount,
                      B = O.hrefAllControls;
                    if (F)
                      return B || (N >= 0 && N < R)
                        ? F(N + 1, R, this.state.selected)
                        : void 0;
                  },
                },
                {
                  key: "ariaLabelBuilder",
                  value: function (N) {
                    var O = N === this.state.selected;
                    if (
                      this.props.ariaLabelBuilder &&
                      N >= 0 &&
                      N < this.props.pageCount
                    ) {
                      var F = this.props.ariaLabelBuilder(N + 1, O);
                      return (
                        this.props.extraAriaContext &&
                          !O &&
                          (F = F + " " + this.props.extraAriaContext),
                        F
                      );
                    }
                  },
                },
                {
                  key: "getPageElement",
                  value: function (N) {
                    var O = this.state.selected,
                      F = this.props,
                      R = F.pageClassName,
                      B = F.pageLinkClassName,
                      W = F.activeClassName,
                      U = F.activeLinkClassName,
                      q = F.extraAriaContext,
                      he = F.pageLabelBuilder;
                    return l().createElement(p, {
                      key: N,
                      pageSelectedHandler: this.handlePageSelected.bind(
                        null,
                        N,
                      ),
                      selected: O === N,
                      rel: this.getElementPageRel(N),
                      pageClassName: R,
                      pageLinkClassName: B,
                      activeClassName: W,
                      activeLinkClassName: U,
                      extraAriaContext: q,
                      href: this.getElementHref(N),
                      ariaLabel: this.ariaLabelBuilder(N),
                      page: N + 1,
                      pageLabelBuilder: he,
                      getEventListener: this.getEventListener,
                    });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var N = this.props.renderOnZeroPageCount;
                    if (this.props.pageCount === 0 && N !== void 0)
                      return N && N(this.props);
                    var O = this.props,
                      F = O.disabledClassName,
                      R = O.disabledLinkClassName,
                      B = O.pageCount,
                      W = O.className,
                      U = O.containerClassName,
                      q = O.previousLabel,
                      he = O.previousClassName,
                      De = O.previousLinkClassName,
                      Ye = O.previousAriaLabel,
                      Ke = O.prevRel,
                      we = O.nextLabel,
                      nt = O.nextClassName,
                      ze = O.nextLinkClassName,
                      Re = O.nextAriaLabel,
                      X = O.nextRel,
                      Te = this.state.selected,
                      Ee = Te === 0,
                      ve = Te === B - 1,
                      Un = "".concat(m(he)).concat(Ee ? " ".concat(m(F)) : ""),
                      bt = "".concat(m(nt)).concat(ve ? " ".concat(m(F)) : ""),
                      it = "".concat(m(De)).concat(Ee ? " ".concat(m(R)) : ""),
                      wt = "".concat(m(ze)).concat(ve ? " ".concat(m(R)) : ""),
                      ln = Ee ? "true" : "false",
                      Pi = ve ? "true" : "false";
                    return l().createElement(
                      "ul",
                      {
                        className: W || U,
                        role: "navigation",
                        "aria-label": "Pagination",
                      },
                      l().createElement(
                        "li",
                        { className: Un },
                        l().createElement(
                          "a",
                          _(
                            {
                              className: it,
                              href: this.getElementHref(Te - 1),
                              tabIndex: Ee ? "-1" : "0",
                              role: "button",
                              onKeyPress: this.handlePreviousPage,
                              "aria-disabled": ln,
                              "aria-label": Ye,
                              rel: Ke,
                            },
                            this.getEventListener(this.handlePreviousPage),
                          ),
                          q,
                        ),
                      ),
                      this.pagination(),
                      l().createElement(
                        "li",
                        { className: bt },
                        l().createElement(
                          "a",
                          _(
                            {
                              className: wt,
                              href: this.getElementHref(Te + 1),
                              tabIndex: ve ? "-1" : "0",
                              role: "button",
                              onKeyPress: this.handleNextPage,
                              "aria-disabled": Pi,
                              "aria-label": Re,
                              rel: X,
                            },
                            this.getEventListener(this.handleNextPage),
                          ),
                          we,
                        ),
                      ),
                    );
                  },
                },
              ]) && w(M.prototype, V),
              Object.defineProperty(M, "prototype", { writable: !1 }),
              L
            );
          })(a.Component);
          P(j, "propTypes", {
            pageCount: u().number.isRequired,
            pageRangeDisplayed: u().number,
            marginPagesDisplayed: u().number,
            previousLabel: u().node,
            previousAriaLabel: u().string,
            prevPageRel: u().string,
            prevRel: u().string,
            nextLabel: u().node,
            nextAriaLabel: u().string,
            nextPageRel: u().string,
            nextRel: u().string,
            breakLabel: u().oneOfType([u().string, u().node]),
            breakAriaLabels: u().shape({
              forward: u().string,
              backward: u().string,
            }),
            hrefBuilder: u().func,
            hrefAllControls: u().bool,
            onPageChange: u().func,
            onPageActive: u().func,
            onClick: u().func,
            initialPage: u().number,
            forcePage: u().number,
            disableInitialCallback: u().bool,
            containerClassName: u().string,
            className: u().string,
            pageClassName: u().string,
            pageLinkClassName: u().string,
            pageLabelBuilder: u().func,
            activeClassName: u().string,
            activeLinkClassName: u().string,
            previousClassName: u().string,
            nextClassName: u().string,
            previousLinkClassName: u().string,
            nextLinkClassName: u().string,
            disabledClassName: u().string,
            disabledLinkClassName: u().string,
            breakClassName: u().string,
            breakLinkClassName: u().string,
            extraAriaContext: u().string,
            ariaLabelBuilder: u().func,
            eventListener: u().string,
            renderOnZeroPageCount: u().func,
            selectedPageRel: u().string,
          }),
            P(j, "defaultProps", {
              pageRangeDisplayed: 2,
              marginPagesDisplayed: 3,
              activeClassName: "selected",
              previousLabel: "Previous",
              previousClassName: "previous",
              previousAriaLabel: "Previous page",
              prevPageRel: "prev",
              prevRel: "prev",
              nextLabel: "Next",
              nextClassName: "next",
              nextAriaLabel: "Next page",
              nextPageRel: "next",
              nextRel: "next",
              breakLabel: "...",
              breakAriaLabels: {
                forward: "Jump forward",
                backward: "Jump backward",
              },
              disabledClassName: "disabled",
              disableInitialCallback: !1,
              pageLabelBuilder: function (A) {
                return A;
              },
              eventListener: "onClick",
              renderOnZeroPageCount: void 0,
              selectedPageRel: "canonical",
              hrefAllControls: !1,
            });
          const $ = j;
        })(),
        o
      );
    })(),
  );
})(Gx);
var F8 = Gx.exports;
const B8 = gs(F8),
  z8 = "/api/trainingvideos",
  W8 = { get: () => ce.get(z8).then((e) => e.data) },
  H8 = () => {
    const [t, e] = b.useState([]),
      [n, i] = b.useState(0),
      [r, s] = b.useState("date"),
      [o, a] = b.useState(""),
      l = 6;
    b.useEffect(() => {
      (async () => {
        const g = await W8.get();
        e(g);
      })();
    }, []);
    const c = t.filter((p) => p.title.toLowerCase().includes(o.toLowerCase())),
      u = {
        trainingVideos: {
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        },
        header: {
          color: "#df0000",
          fontWeight: "bold",
          textDecoration: "underline",
          marginBottom: 40,
        },
        select: {
          margin: 20,
          color: "#df0000",
          border: "2px solid #df0000",
          backgroundColor: "#ffffff",
        },
      },
      d = (p) => {
        const g = p.match(/(\d+)\s*min/),
          y = p.match(/(\d+)\s*seconds/),
          v = g ? parseInt(g[1], 10) : 0,
          m = y ? parseInt(y[1], 10) : 0;
        return v * 60 + m;
      },
      h = (p) => {
        switch (r) {
          case "title":
            return p.sort((g, y) => g.title.localeCompare(y.title));
          case "duration":
            return p.sort((g, y) => d(y.duration) - d(g.duration));
          case "date":
          default:
            return p.sort((g, y) => y.dateAdded.localeCompare(g.dateAdded));
        }
      };
    return f.jsxs("section", {
      className: "album py-5",
      style: u.trainingVideos,
      children: [
        f.jsxs("div", {
          children: [
            f.jsx("h1", { style: u.header, children: "Training Essentials" }),
            f.jsx("div", {
              children: f.jsx("input", {
                type: "text",
                placeholder: "Search videos...",
                value: o,
                onChange: (p) => a(p.target.value),
                style: u.select,
              }),
            }),
            f.jsxs("select", {
              value: r,
              onChange: (p) => s(p.target.value),
              style: u.select,
              children: [
                f.jsx("option", { value: "date", children: "Sort by Date" }),
                f.jsx("option", { value: "title", children: "Sort by Title" }),
                f.jsx("option", {
                  value: "duration",
                  children: "Sort by Duration",
                }),
              ],
            }),
          ],
        }),
        f.jsx(et, {
          children: f.jsx(cs, {
            children: h([...c])
              .slice(n * l, (n + 1) * l)
              .map((p) =>
                f.jsx(_i, { md: 4, children: f.jsx(sc, { video: p }) }, p.id),
              ),
          }),
        }),
        f.jsx(B8, {
          pageCount: Math.ceil(t.length / l),
          onPageChange: ({ selected: p }) => i(p),
          containerClassName: "pagination justify-content-center",
          pageClassName: "page-item",
          pageLinkClassName: "page-link",
          activeClassName: "active",
          previousClassName: "page-item",
          previousLinkClassName: "page-link",
          nextClassName: "page-item",
          nextLinkClassName: "page-link",
          breakClassName: "page-item",
          breakLinkClassName: "page-link",
          disabledClassName: "disabled",
        }),
      ],
    });
  },
  Hg = ({ notification: t }) => {
    if (!t) return null;
    const e = t.type === "alert" ? "danger" : "success",
      n = {
        notification: {
          textAlign: "center",
          padding: "15px",
          margin: "20px auto",
          maxWidth: "600px",
          fontSize: "18px",
          fontWeight: "bold",
          color: "#fff",
          backgroundColor: t.type === "alert" ? "#df0000" : "#28a745",
          borderColor: t.type === "alert" ? "#df0000" : "#28a745",
          borderRadius: "5px",
        },
      };
    return f.jsx(V4, {
      variant: e,
      style: n.notification,
      "aria-label": t.type,
      children: t.message,
    });
  },
  V8 = ({ onLogin: t }) => {
    const [e, n] = b.useState(""),
      [i, r] = b.useState(""),
      s = (a) => {
        a.preventDefault(), t(e, i);
      },
      o = {
        card: { textAlign: "center", color: "#df0000", borderWidth: "2px" },
        form: { width: "80%", display: "block", margin: "0 auto" },
        header: {
          color: "#df0000",
          fontWeight: "bold",
          textDecoration: "underline",
          marginBottom: 40,
          textAlign: "center",
        },
        label: { fontSize: 28, marginBottom: 35 },
        button: { padding: 15, marginTop: 35, marginBottom: 35 },
        paragraph: {
          fontSize: 20,
          maxWidth: 500,
          margin: "auto",
          marginBottom: 10,
        },
      };
    return f.jsx("section", {
      className: "login form",
      children: f.jsxs(et, {
        children: [
          f.jsx("div", {
            children: f.jsx("h1", { style: o.header, children: "Login Form" }),
          }),
          f.jsx(Z, {
            className: "my-3",
            style: o.card,
            border: "danger",
            children: f.jsx(Z.Body, {
              children: f.jsxs(Q, {
                onSubmit: s,
                style: o.form,
                children: [
                  f.jsxs(Q.Group, {
                    className: "mb-3",
                    children: [
                      f.jsx(Q.Label, {
                        htmlFor: "username",
                        style: o.label,
                        children: "Username",
                      }),
                      f.jsx(Q.Control, {
                        value: e,
                        onChange: ({ target: a }) => n(a.value),
                        id: "username",
                        placeholder: "Enter your username",
                        "aria-label": "Username",
                      }),
                    ],
                  }),
                  f.jsxs(Q.Group, {
                    className: "mb-3",
                    children: [
                      f.jsx(Q.Label, {
                        htmlFor: "password",
                        style: o.label,
                        children: "Password",
                      }),
                      f.jsx(Q.Control, {
                        type: "password",
                        value: i,
                        onChange: ({ target: a }) => r(a.value),
                        id: "password",
                        placeholder: "Enter your password",
                        "aria-label": "Password",
                      }),
                    ],
                  }),
                  f.jsx(ot, {
                    "aria-label": "Sign In",
                    type: "submit",
                    variant: "danger",
                    style: o.button,
                    className: "btn-custom",
                    disabled: !e || !i,
                    children: "Sign In",
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
    });
  };
class Js extends Error {}
Js.prototype.name = "InvalidTokenError";
function U8(t) {
  return decodeURIComponent(
    atob(t).replace(/(.)/g, (e, n) => {
      let i = n.charCodeAt(0).toString(16).toUpperCase();
      return i.length < 2 && (i = "0" + i), "%" + i;
    }),
  );
}
function Y8(t) {
  let e = t.replace(/-/g, "+").replace(/_/g, "/");
  switch (e.length % 4) {
    case 0:
      break;
    case 2:
      e += "==";
      break;
    case 3:
      e += "=";
      break;
    default:
      throw new Error("base64 string is not of the correct length");
  }
  try {
    return U8(e);
  } catch {
    return atob(e);
  }
}
function K8(t, e) {
  if (typeof t != "string")
    throw new Js("Invalid token specified: must be a string");
  e || (e = {});
  const n = e.header === !0 ? 0 : 1,
    i = t.split(".")[n];
  if (typeof i != "string")
    throw new Js(`Invalid token specified: missing part #${n + 1}`);
  let r;
  try {
    r = Y8(i);
  } catch (s) {
    throw new Js(
      `Invalid token specified: invalid base64 for part #${n + 1} (${
        s.message
      })`,
    );
  }
  try {
    return JSON.parse(r);
  } catch (s) {
    throw new Js(
      `Invalid token specified: invalid json for part #${n + 1} (${s.message})`,
    );
  }
}
let Kr = null;
const qx = "loggedUser",
  G8 = (t) => {
    window.localStorage.setItem(qx, JSON.stringify(t)), (Kr = t.token);
  },
  q8 = () => {
    const t = window.localStorage.getItem(qx);
    if (t) {
      const e = JSON.parse(t);
      return (Kr = e.token), e;
    }
    return null;
  },
  Xx = () => {
    window.localStorage.clear(), (Kr = null);
  },
  X8 = (t) => {
    const e = K8(t),
      n = Date.now() / 1e3;
    return e.exp < n;
  },
  Q8 = () => (Kr && !X8(Kr) ? Kr : (Xx(), null)),
  go = { setUser: G8, getUser: q8, clearUser: Xx, getToken: Q8 },
  J8 = "/api/clientinfo",
  Z8 = () => ({ headers: { Authorization: `bearer ${go.getToken()}` } }),
  ek = { create: async (t) => (await ce.post(J8, t, Z8())).data },
  tk = ({ notify: t }) => {
    const [e, n] = b.useState(null),
      [i, r] = b.useState(""),
      [s, o] = b.useState(""),
      [a, l] = b.useState(""),
      [c, u] = b.useState(""),
      [d, h] = b.useState(!1),
      p = $h(),
      g = async (m) => {
        h(!0);
        try {
          await ek.create(m),
            t("You have successfully submitted your information."),
            h(!1),
            p("/instructions");
        } catch (x) {
          t("Creating a message failed: " + x.response.data.error, "alert"),
            h(!1);
        }
      },
      y = (m) => {
        m.preventDefault();
        const x = { fitnessLevel: i, goals: s, injuriesOrConditions: a };
        e && (x.programExperience = c), g(x);
      },
      v = {
        card: { textAlign: "center", color: "#df0000", borderWidth: "2px" },
        form: { width: "80%", display: "block", margin: "0 auto" },
        header: {
          color: "#df0000",
          fontWeight: "bold",
          textDecoration: "underline",
          marginBottom: 40,
          textAlign: "center",
        },
        label: { fontSize: 28, marginBottom: 35 },
        button: { margin: 10 },
      };
    return f.jsx("section", {
      className: "client-info-form",
      children: f.jsxs(et, {
        children: [
          f.jsx("div", {
            children: f.jsx("h1", {
              style: v.header,
              children: "Program Form",
            }),
          }),
          e === null &&
            f.jsx(Z, {
              className: "my-3",
              style: v.card,
              border: "danger",
              children: f.jsx(Z.Body, {
                children: f.jsx(Q, {
                  style: v.form,
                  children: f.jsxs(Q.Group, {
                    className: "mb-3",
                    children: [
                      f.jsx(Q.Label, {
                        style: v.label,
                        children:
                          "Are you a first-time user or returning user?",
                      }),
                      f.jsxs("div", {
                        children: [
                          f.jsx(ot, {
                            variant: "primary",
                            style: v.button,
                            onClick: () => n(!0),
                            "aria-label": "First-time User",
                            className: "btn-custom",
                            children: "First-time User",
                          }),
                          f.jsx(ot, {
                            variant: "secondary",
                            onClick: () => n(!1),
                            style: v.button,
                            className: "btn-custom",
                            "aria-label": "Returning User",
                            children: "Returning User",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          e === !0 &&
            f.jsx(Z, {
              className: "my-3",
              style: v.card,
              border: "danger",
              children: f.jsx(Z.Body, {
                children: f.jsxs(Q, {
                  onSubmit: y,
                  style: v.form,
                  children: [
                    f.jsxs(Q.Group, {
                      className: "mb-3",
                      children: [
                        f.jsx(Q.Label, {
                          htmlFor: "fitnessLevel",
                          style: v.label,
                          children:
                            "Which stage of your Bullet Point Fitness journey are you currently in?",
                        }),
                        f.jsxs(Q.Control, {
                          as: "select",
                          value: i,
                          onChange: (m) => r(m.target.value),
                          children: [
                            f.jsx("option", {
                              value: "",
                              children: "Select Your Stage",
                            }),
                            f.jsx("option", {
                              value: "Stage 1 (Beginner)",
                              children:
                                "Stage 1 - Ideal for beginners, those new to Bullet Point Fitness, or anyone short on time. This stage focuses on building muscle, burning fat, and improving overall health efficiently.",
                            }),
                            f.jsx("option", {
                              value: "Stage 2 (Intermediate)",
                              children:
                                "Stage 2 - Designed for those who have completed Stage 1 and are ready to take their training further, with more time and focus dedicated to each session.",
                            }),
                            f.jsx("option", {
                              value: "Stage 3 (Advanced)",
                              children:
                                "Stage 3 - For those who have completed Stages 1 and 2 and are looking to unlock their full physical and genetic potential, with a commitment to more intensive and time-demanding training.",
                            }),
                          ],
                        }),
                      ],
                    }),
                    f.jsxs(Q.Group, {
                      className: "mb-3",
                      children: [
                        f.jsx(Q.Label, {
                          htmlFor: "goals",
                          style: v.label,
                          children: "What is your primary fitness goal?",
                        }),
                        f.jsxs(Q.Control, {
                          as: "select",
                          value: s,
                          onChange: (m) => o(m.target.value),
                          children: [
                            f.jsx("option", {
                              value: "",
                              children: "Select Fitness Goal",
                            }),
                            f.jsx("option", {
                              value: "fat-loss",
                              children: "Fat Loss",
                            }),
                            f.jsx("option", {
                              value: "build-muscle",
                              children: "Build Muscle",
                            }),
                            f.jsx("option", {
                              value: "build-strength",
                              children: "Build Strength",
                            }),
                            f.jsx("option", {
                              value: "all-of-the-above",
                              children: "All of the Above",
                            }),
                          ],
                        }),
                      ],
                    }),
                    f.jsxs(Q.Group, {
                      className: "mb-3",
                      children: [
                        f.jsx(Q.Label, {
                          htmlFor: "injuriesOrConditions",
                          style: v.label,
                          children:
                            "Do you have any injuries or health conditions?",
                        }),
                        f.jsx(Q.Control, {
                          as: "textarea",
                          rows: 3,
                          value: a,
                          onChange: (m) => l(m.target.value),
                          placeholder: "Write here...",
                        }),
                      ],
                    }),
                    f.jsxs(Q.Group, {
                      className: "mb-3",
                      children: [
                        f.jsx(Q.Label, {
                          htmlFor: "programExperience",
                          style: v.label,
                          children:
                            "Have you ever followed a structured workout program before?",
                        }),
                        f.jsxs(Q.Control, {
                          as: "select",
                          value: c,
                          onChange: (m) => u(m.target.value),
                          children: [
                            f.jsx("option", { value: "", children: "Select" }),
                            f.jsx("option", { value: "yes", children: "Yes" }),
                            f.jsx("option", { value: "no", children: "No" }),
                          ],
                        }),
                      ],
                    }),
                    f.jsx(ot, {
                      type: "submit",
                      variant: "danger",
                      disabled: d,
                      style: v.button,
                      "aria-label": "Submit",
                      className: "btn-custom",
                      children: d ? "Submitting..." : "Submit",
                    }),
                  ],
                }),
              }),
            }),
          e === !1 &&
            f.jsx(Z, {
              className: "my-3",
              style: v.card,
              border: "danger",
              children: f.jsx(Z.Body, {
                children: f.jsxs(Q, {
                  onSubmit: y,
                  style: v.form,
                  children: [
                    f.jsxs(Q.Group, {
                      className: "mb-3",
                      children: [
                        f.jsx(Q.Label, {
                          htmlFor: "progress",
                          style: v.label,
                          children:
                            "How would you rate your progress since your last program?",
                        }),
                        f.jsx(Q.Control, {
                          as: "textarea",
                          rows: 3,
                          value: a,
                          onChange: (m) => l(m.target.value),
                          placeholder: "Share your experience so far",
                        }),
                      ],
                    }),
                    f.jsxs(Q.Group, {
                      className: "mb-3",
                      children: [
                        f.jsx(Q.Label, {
                          htmlFor: "fitnessLevel",
                          style: v.label,
                          children:
                            "Ready to upgrade to the next stage of your Bullet Point Fitness journey?",
                        }),
                        f.jsxs(Q.Control, {
                          as: "select",
                          value: i,
                          onChange: (m) => r(m.target.value),
                          children: [
                            f.jsx("option", {
                              value: "",
                              children: "Select Your Stage",
                            }),
                            f.jsx("option", {
                              value: "Stage 1 (Beginner)",
                              children:
                                "Stage 1 - Ideal for beginners, those new to Bullet Point Fitness, or anyone short on time. This stage focuses on building muscle, burning fat, and improving overall health efficiently.",
                            }),
                            f.jsx("option", {
                              value: "Stage 2 (Intermediate)",
                              children:
                                "Stage 2 - Designed for those who have completed Stage 1 and are ready to take their training further, with more time and focus dedicated to each session.",
                            }),
                            f.jsx("option", {
                              value: "Stage 3 (Advanced)",
                              children:
                                "Stage 3 - For those who have completed Stages 1 and 2 and are looking to unlock their full physical and genetic potential, with a commitment to more intensive and time-demanding training.",
                            }),
                          ],
                        }),
                      ],
                    }),
                    f.jsxs(Q.Group, {
                      className: "mb-3",
                      children: [
                        f.jsx(Q.Label, {
                          htmlFor: "newGoals",
                          style: v.label,
                          children: "Have your fitness goals changed?",
                        }),
                        f.jsxs(Q.Control, {
                          as: "select",
                          value: s,
                          onChange: (m) => o(m.target.value),
                          children: [
                            f.jsx("option", {
                              value: "",
                              children: "Select Fitness Goal",
                            }),
                            f.jsx("option", {
                              value: "fat-loss",
                              children: "Fat Loss",
                            }),
                            f.jsx("option", {
                              value: "build-muscle",
                              children: "Build Muscle",
                            }),
                            f.jsx("option", {
                              value: "build-strength",
                              children: "Build Strength",
                            }),
                            f.jsx("option", {
                              value: "all-of-the-above",
                              children: "All of the Above",
                            }),
                          ],
                        }),
                      ],
                    }),
                    f.jsx(ot, {
                      type: "submit",
                      variant: "danger",
                      disabled: d,
                      style: v.button,
                      "aria-label": "Submit",
                      className: "btn-custom",
                      children: d ? "Submitting..." : "Submit",
                    }),
                  ],
                }),
              }),
            }),
        ],
      }),
    });
  },
  Fu = "/api/workouts",
  Bu = () => ({ headers: { Authorization: `bearer ${go.getToken()}` } }),
  Vo = {
    get: async (t) => {
      const e = `${Fu}/user/${t}`;
      return (await ce.get(e, Bu())).data;
    },
    updateExercise: async (t, e, n) => {
      const i = `${Fu}/workout/${t}/exercise/${e}`;
      return (await ce.put(i, n, Bu())).data;
    },
    getInactive: async (t) => {
      const e = `${Fu}/inactive/${t}`;
      return (await ce.get(e, Bu())).data;
    },
  },
  nk = ({
    exercise: t,
    exerciseIndex: e,
    workoutIndex: n,
    handleSaveExerciseUpdate: i,
    handleExerciseClick: r,
    calculateGuidance: s,
  }) => {
    const [o, a] = b.useState(!1),
      [l, c] = b.useState(""),
      [u, d] = b.useState(""),
      h = b.useRef(null),
      p = t.performance.length
        ? t.performance[t.performance.length - 1]
        : { weight: "", reps: "" },
      g = s(p.reps, p.weight);
    b.useEffect(() => {
      o && (c(p.weight), d(p.reps));
    }, [o, p.weight, p.reps]),
      b.useEffect(() => {
        const m = (x) => {
          h.current && !h.current.contains(x.target) && a(!1);
        };
        return (
          o
            ? document.addEventListener("mousedown", m)
            : document.removeEventListener("mousedown", m),
          () => {
            document.removeEventListener("mousedown", m);
          }
        );
      }, [o]);
    const y = (m) => {
        m.preventDefault(),
          l && u
            ? (i(n, e, { weight: l, reps: u }), a(!1))
            : alert("Please enter both weight and reps");
      },
      v = () => {
        r(t.exerciseId.embedUrl);
      };
    return f.jsxs("tr", {
      ref: h,
      style: { cursor: "pointer" },
      children: [
        f.jsx("td", { onClick: v, children: t.exerciseId.title }),
        f.jsx("td", {
          onClick: () => a(!0),
          children: o
            ? f.jsx(Q.Control, {
                type: "number",
                value: l,
                onChange: (m) => c(m.target.value),
              })
            : p.weight,
        }),
        f.jsx("td", {
          onClick: () => a(!0),
          children: o
            ? f.jsx(Q.Control, {
                type: "number",
                value: u,
                onChange: (m) => d(m.target.value),
              })
            : p.reps,
        }),
        f.jsx("td", {
          children: o
            ? f.jsx(ot, {
                variant: "primary",
                "aria-label": "Edit",
                className: "btn-custom",
                onClick: y,
                children: "Save",
              })
            : f.jsx(ot, {
                variant: "danger",
                "aria-label": "Update",
                className: "btn-custom",
                onClick: () => a(!0),
                children: "Update",
              }),
        }),
        f.jsx("td", { children: g }),
      ],
    });
  },
  ik = ({
    showModal: t,
    handleCloseModal: e,
    selectedVideoUrl: n,
    selectedExerciseTitle: i,
  }) => {
    const r = {
      modalHeader: { color: "#df0000", borderBottom: "2px solid #df0000" },
      modalTitle: {
        color: "#df0000",
        fontWeight: "bold",
        textDecoration: "underline",
        textAlign: "center",
        width: "100%",
      },
      modalBody: { padding: "20px", textAlign: "center" },
      closeButton: { backgroundColor: "#df0000", borderColor: "#df0000" },
      footerButton: {
        backgroundColor: "#df0000",
        borderColor: "#df0000",
        color: "#fff",
        width: "100px",
      },
    };
    return f.jsxs(ii, {
      show: t,
      onHide: e,
      size: "lg",
      children: [
        f.jsx(ii.Header, {
          closeButton: !0,
          style: r.modalHeader,
          children: f.jsx(ii.Title, { style: r.modalTitle, children: i }),
        }),
        f.jsx(ii.Body, {
          style: r.modalBody,
          children: f.jsx("iframe", {
            src: n,
            title: "Exercise Video",
            width: "100%",
            height: "400px",
            frameBorder: "0",
            allowFullScreen: !0,
          }),
        }),
        f.jsx(ii.Footer, {
          children: f.jsx(ot, {
            variant: "secondary",
            onClick: e,
            style: r.footerButton,
            children: "Close",
          }),
        }),
      ],
    });
  },
  rk = (t, e) => {
    if (
      ((t = Number(t)),
      (e = Number(e)),
      t <= 0 || e <= 0 || isNaN(t) || isNaN(e))
    )
      return {};
    let n = {};
    const i = e < 10 ? 1 : 2.5,
      r = {
        1: 100,
        2: 97.5,
        3: 95,
        4: 92.5,
        5: 90,
        6: 87.5,
        7: 85,
        8: 82.5,
        9: 80,
        10: 77.5,
        11: 75,
        12: 72.5,
        13: 70,
        14: 67.5,
        15: 65,
        16: 64,
        17: 63,
        18: 62,
        19: 61,
        20: 60,
      },
      s = r[t] || 100,
      o = e / (s / 100);
    if (t >= 7) {
      const a = Math.ceil((e + 1e-4) / i) * i;
      n["Increase weight to"] = `${a} kg`;
    } else if (t >= 4 && t <= 6) {
      const a = t + 1;
      n["Increase reps to"] = `${a}`;
    } else {
      const a = r[5],
        l = o * (a / 100),
        c = Math.round((l + 1e-4) / i) * i;
      n["Decrease weight to"] = `${c} kg`;
    }
    return n;
  },
  sk = ({ userId: t }) => {
    const [e, n] = b.useState([]),
      [i, r] = b.useState(!1),
      [s, o] = b.useState(""),
      [a, l] = b.useState("");
    b.useEffect(() => {
      t &&
        (async () => {
          try {
            const y = await Vo.get(t);
            n(Array.isArray(y) ? y : [y]);
          } catch (y) {
            console.error("Error fetching workouts", y), n([]);
          }
        })();
    }, [t]);
    const c = (g, y) => {
        o(g), l(y), r(!0);
      },
      u = () => {
        r(!1);
      },
      d = async (g, y, v) => {
        const m = e[g],
          x = m.exercises[y];
        v.date = new Date();
        try {
          await Vo.updateExercise(m._id, x.exerciseId.id, v);
          const _ = [...e];
          _[g].exercises[y].performance.push(v),
            n(_),
            console.log("Exercise updated successfully!");
        } catch (_) {
          console.error("Failed to update exercise", _);
        }
      },
      h = (g, y) => {
        if (!g || !y) return "";
        const v = rk(g, y),
          m = Object.keys(v);
        return m.length > 0 ? `${m[0]}: ${v[m[0]]}` : "No progression needed";
      },
      p = {
        card: { textAlign: "center", color: "#df0000", borderWidth: "2px" },
        header: {
          color: "#df0000",
          fontWeight: "bold",
          textDecoration: "underline",
          marginBottom: 40,
          textAlign: "center",
        },
        button: { padding: 15, marginTop: 35, marginBottom: 35 },
        columnText: { color: "#df0000" },
      };
    return f.jsxs(et, {
      children: [
        f.jsx("h1", { style: p.header, children: "Your Workouts" }),
        e.map((g, y) =>
          f.jsx(
            Z,
            {
              className: "my-3",
              style: p.card,
              border: "danger",
              children: f.jsxs(Z.Body, {
                children: [
                  f.jsxs("h3", {
                    style: p.header,
                    children: ["Workout ", y + 1],
                  }),
                  f.jsx("div", {
                    className: "table-responsive",
                    children: f.jsxs(Ex, {
                      striped: !0,
                      bordered: !0,
                      hover: !0,
                      children: [
                        f.jsx("thead", {
                          children: f.jsxs("tr", {
                            children: [
                              f.jsx("th", {
                                className: "col-3",
                                style: p.columnText,
                                children: "Name of Exercise",
                              }),
                              f.jsx("th", {
                                className: "col-2",
                                style: p.columnText,
                                children: "Weight",
                              }),
                              f.jsx("th", {
                                className: "col-2",
                                style: p.columnText,
                                children: "Reps",
                              }),
                              f.jsx("th", {
                                className: "col-2",
                                style: p.columnText,
                                children: "Save",
                              }),
                              f.jsx("th", {
                                className: "col-3",
                                style: p.columnText,
                                children: "Guidance",
                              }),
                            ],
                          }),
                        }),
                        f.jsx("tbody", {
                          children: g.exercises.map((v, m) =>
                            f.jsx(
                              nk,
                              {
                                exercise: v,
                                exerciseIndex: m,
                                workoutIndex: y,
                                handleSaveExerciseUpdate: d,
                                handleExerciseClick: () =>
                                  c(v.exerciseId.embedUrl, v.exerciseId.title),
                                calculateGuidance: h,
                              },
                              m,
                            ),
                          ),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            },
            y,
          ),
        ),
        f.jsx(ik, {
          showModal: i,
          handleCloseModal: u,
          selectedVideoUrl: s,
          selectedExerciseTitle: a,
        }),
      ],
    });
  },
  ok = ({ userId: t, notify: e }) => {
    const [n, i] = b.useState([]);
    b.useEffect(() => {
      t &&
        (async () => {
          try {
            const o = await Vo.getInactive(t);
            i(Array.isArray(o) ? o : [o]);
          } catch (o) {
            console.error("Error fetching inactive workouts", o),
              e("Failed to fetch inactive workouts: " + o.message, "error");
          }
        })();
    }, [t, e]);
    const r = {
      card: { textAlign: "center", color: "#df0000", borderWidth: "2px" },
      header: {
        color: "#df0000",
        fontWeight: "bold",
        textDecoration: "underline",
        marginBottom: 40,
        textAlign: "center",
      },
      table: { tableLayout: "fixed", width: "100%", wordWrap: "break-word" },
      column: {
        width: "33.33%",
        overflow: "hidden",
        textAlign: "center",
        wordWrap: "break-word",
        whiteSpace: "normal",
        color: "#df0000",
      },
    };
    return f.jsxs(et, {
      children: [
        f.jsx("h1", { style: r.header, children: "Previous Workouts" }),
        n.map((s, o) =>
          f.jsx(
            Z,
            {
              className: "my-3",
              style: r.card,
              border: "danger",
              children: f.jsxs(Z.Body, {
                children: [
                  f.jsxs("h3", {
                    style: r.header,
                    children: ["Workout ", o + 1],
                  }),
                  f.jsx("div", {
                    className: "table-responsive",
                    children: f.jsxs(Ex, {
                      striped: !0,
                      bordered: !0,
                      hover: !0,
                      style: r.table,
                      children: [
                        f.jsx("thead", {
                          children: f.jsxs("tr", {
                            children: [
                              f.jsx("th", {
                                style: r.column,
                                children: "Name of Exercise",
                              }),
                              f.jsx("th", {
                                style: r.column,
                                children: "Weight",
                              }),
                              f.jsx("th", {
                                style: r.column,
                                children: "Reps",
                              }),
                            ],
                          }),
                        }),
                        f.jsx("tbody", {
                          children: s.exercises.map((a, l) => {
                            const c = a.performance.length
                              ? a.performance[a.performance.length - 1]
                              : { weight: "Set weight", reps: "Set reps" };
                            return f.jsxs(
                              "tr",
                              {
                                children: [
                                  f.jsx("td", {
                                    style: r.column,
                                    children: a.exerciseId.title,
                                  }),
                                  f.jsx("td", {
                                    style: r.column,
                                    children: c.weight,
                                  }),
                                  f.jsx("td", {
                                    style: r.column,
                                    children: c.reps,
                                  }),
                                ],
                              },
                              l,
                            );
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            },
            s._id,
          ),
        ),
      ],
    });
  };
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */ function ca(t) {
  return (t + 0.5) | 0;
}
const ai = (t, e, n) => Math.max(Math.min(t, n), e);
function Zs(t) {
  return ai(ca(t * 2.55), 0, 255);
}
function yi(t) {
  return ai(ca(t * 255), 0, 255);
}
function On(t) {
  return ai(ca(t / 2.55) / 100, 0, 1);
}
function Vg(t) {
  return ai(ca(t * 100), 0, 100);
}
const Dt = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },
  Tf = [..."0123456789ABCDEF"],
  ak = (t) => Tf[t & 15],
  lk = (t) => Tf[(t & 240) >> 4] + Tf[t & 15],
  Ma = (t) => (t & 240) >> 4 === (t & 15),
  ck = (t) => Ma(t.r) && Ma(t.g) && Ma(t.b) && Ma(t.a);
function uk(t) {
  var e = t.length,
    n;
  return (
    t[0] === "#" &&
      (e === 4 || e === 5
        ? (n = {
            r: 255 & (Dt[t[1]] * 17),
            g: 255 & (Dt[t[2]] * 17),
            b: 255 & (Dt[t[3]] * 17),
            a: e === 5 ? Dt[t[4]] * 17 : 255,
          })
        : (e === 7 || e === 9) &&
          (n = {
            r: (Dt[t[1]] << 4) | Dt[t[2]],
            g: (Dt[t[3]] << 4) | Dt[t[4]],
            b: (Dt[t[5]] << 4) | Dt[t[6]],
            a: e === 9 ? (Dt[t[7]] << 4) | Dt[t[8]] : 255,
          })),
    n
  );
}
const dk = (t, e) => (t < 255 ? e(t) : "");
function fk(t) {
  var e = ck(t) ? ak : lk;
  return t ? "#" + e(t.r) + e(t.g) + e(t.b) + dk(t.a, e) : void 0;
}
const hk =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function Qx(t, e, n) {
  const i = e * Math.min(n, 1 - n),
    r = (s, o = (s + t / 30) % 12) =>
      n - i * Math.max(Math.min(o - 3, 9 - o, 1), -1);
  return [r(0), r(8), r(4)];
}
function pk(t, e, n) {
  const i = (r, s = (r + t / 60) % 6) =>
    n - n * e * Math.max(Math.min(s, 4 - s, 1), 0);
  return [i(5), i(3), i(1)];
}
function gk(t, e, n) {
  const i = Qx(t, 1, 0.5);
  let r;
  for (e + n > 1 && ((r = 1 / (e + n)), (e *= r), (n *= r)), r = 0; r < 3; r++)
    (i[r] *= 1 - e - n), (i[r] += e);
  return i;
}
function mk(t, e, n, i, r) {
  return t === r
    ? (e - n) / i + (e < n ? 6 : 0)
    : e === r
    ? (n - t) / i + 2
    : (t - e) / i + 4;
}
function yp(t) {
  const n = t.r / 255,
    i = t.g / 255,
    r = t.b / 255,
    s = Math.max(n, i, r),
    o = Math.min(n, i, r),
    a = (s + o) / 2;
  let l, c, u;
  return (
    s !== o &&
      ((u = s - o),
      (c = a > 0.5 ? u / (2 - s - o) : u / (s + o)),
      (l = mk(n, i, r, u, s)),
      (l = l * 60 + 0.5)),
    [l | 0, c || 0, a]
  );
}
function vp(t, e, n, i) {
  return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, n, i)).map(yi);
}
function xp(t, e, n) {
  return vp(Qx, t, e, n);
}
function yk(t, e, n) {
  return vp(gk, t, e, n);
}
function vk(t, e, n) {
  return vp(pk, t, e, n);
}
function Jx(t) {
  return ((t % 360) + 360) % 360;
}
function xk(t) {
  const e = hk.exec(t);
  let n = 255,
    i;
  if (!e) return;
  e[5] !== i && (n = e[6] ? Zs(+e[5]) : yi(+e[5]));
  const r = Jx(+e[2]),
    s = +e[3] / 100,
    o = +e[4] / 100;
  return (
    e[1] === "hwb"
      ? (i = yk(r, s, o))
      : e[1] === "hsv"
      ? (i = vk(r, s, o))
      : (i = xp(r, s, o)),
    { r: i[0], g: i[1], b: i[2], a: n }
  );
}
function _k(t, e) {
  var n = yp(t);
  (n[0] = Jx(n[0] + e)), (n = xp(n)), (t.r = n[0]), (t.g = n[1]), (t.b = n[2]);
}
function bk(t) {
  if (!t) return;
  const e = yp(t),
    n = e[0],
    i = Vg(e[1]),
    r = Vg(e[2]);
  return t.a < 255
    ? `hsla(${n}, ${i}%, ${r}%, ${On(t.a)})`
    : `hsl(${n}, ${i}%, ${r}%)`;
}
const Ug = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh",
  },
  Yg = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32",
  };
function wk() {
  const t = {},
    e = Object.keys(Yg),
    n = Object.keys(Ug);
  let i, r, s, o, a;
  for (i = 0; i < e.length; i++) {
    for (o = a = e[i], r = 0; r < n.length; r++)
      (s = n[r]), (a = a.replace(s, Ug[s]));
    (s = parseInt(Yg[o], 16)),
      (t[a] = [(s >> 16) & 255, (s >> 8) & 255, s & 255]);
  }
  return t;
}
let Ia;
function Ek(t) {
  Ia || ((Ia = wk()), (Ia.transparent = [0, 0, 0, 0]));
  const e = Ia[t.toLowerCase()];
  return e && { r: e[0], g: e[1], b: e[2], a: e.length === 4 ? e[3] : 255 };
}
const Sk =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function Ck(t) {
  const e = Sk.exec(t);
  let n = 255,
    i,
    r,
    s;
  if (e) {
    if (e[7] !== i) {
      const o = +e[7];
      n = e[8] ? Zs(o) : ai(o * 255, 0, 255);
    }
    return (
      (i = +e[1]),
      (r = +e[3]),
      (s = +e[5]),
      (i = 255 & (e[2] ? Zs(i) : ai(i, 0, 255))),
      (r = 255 & (e[4] ? Zs(r) : ai(r, 0, 255))),
      (s = 255 & (e[6] ? Zs(s) : ai(s, 0, 255))),
      { r: i, g: r, b: s, a: n }
    );
  }
}
function kk(t) {
  return (
    t &&
    (t.a < 255
      ? `rgba(${t.r}, ${t.g}, ${t.b}, ${On(t.a)})`
      : `rgb(${t.r}, ${t.g}, ${t.b})`)
  );
}
const zu = (t) =>
    t <= 0.0031308 ? t * 12.92 : Math.pow(t, 1 / 2.4) * 1.055 - 0.055,
  _r = (t) => (t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4));
function Ok(t, e, n) {
  const i = _r(On(t.r)),
    r = _r(On(t.g)),
    s = _r(On(t.b));
  return {
    r: yi(zu(i + n * (_r(On(e.r)) - i))),
    g: yi(zu(r + n * (_r(On(e.g)) - r))),
    b: yi(zu(s + n * (_r(On(e.b)) - s))),
    a: t.a + n * (e.a - t.a),
  };
}
function $a(t, e, n) {
  if (t) {
    let i = yp(t);
    (i[e] = Math.max(0, Math.min(i[e] + i[e] * n, e === 0 ? 360 : 1))),
      (i = xp(i)),
      (t.r = i[0]),
      (t.g = i[1]),
      (t.b = i[2]);
  }
}
function Zx(t, e) {
  return t && Object.assign(e || {}, t);
}
function Kg(t) {
  var e = { r: 0, g: 0, b: 0, a: 255 };
  return (
    Array.isArray(t)
      ? t.length >= 3 &&
        ((e = { r: t[0], g: t[1], b: t[2], a: 255 }),
        t.length > 3 && (e.a = yi(t[3])))
      : ((e = Zx(t, { r: 0, g: 0, b: 0, a: 1 })), (e.a = yi(e.a))),
    e
  );
}
function Tk(t) {
  return t.charAt(0) === "r" ? Ck(t) : xk(t);
}
class Uo {
  constructor(e) {
    if (e instanceof Uo) return e;
    const n = typeof e;
    let i;
    n === "object"
      ? (i = Kg(e))
      : n === "string" && (i = uk(e) || Ek(e) || Tk(e)),
      (this._rgb = i),
      (this._valid = !!i);
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var e = Zx(this._rgb);
    return e && (e.a = On(e.a)), e;
  }
  set rgb(e) {
    this._rgb = Kg(e);
  }
  rgbString() {
    return this._valid ? kk(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? fk(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? bk(this._rgb) : void 0;
  }
  mix(e, n) {
    if (e) {
      const i = this.rgb,
        r = e.rgb;
      let s;
      const o = n === s ? 0.5 : n,
        a = 2 * o - 1,
        l = i.a - r.a,
        c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
      (s = 1 - c),
        (i.r = 255 & (c * i.r + s * r.r + 0.5)),
        (i.g = 255 & (c * i.g + s * r.g + 0.5)),
        (i.b = 255 & (c * i.b + s * r.b + 0.5)),
        (i.a = o * i.a + (1 - o) * r.a),
        (this.rgb = i);
    }
    return this;
  }
  interpolate(e, n) {
    return e && (this._rgb = Ok(this._rgb, e._rgb, n)), this;
  }
  clone() {
    return new Uo(this.rgb);
  }
  alpha(e) {
    return (this._rgb.a = yi(e)), this;
  }
  clearer(e) {
    const n = this._rgb;
    return (n.a *= 1 - e), this;
  }
  greyscale() {
    const e = this._rgb,
      n = ca(e.r * 0.3 + e.g * 0.59 + e.b * 0.11);
    return (e.r = e.g = e.b = n), this;
  }
  opaquer(e) {
    const n = this._rgb;
    return (n.a *= 1 + e), this;
  }
  negate() {
    const e = this._rgb;
    return (e.r = 255 - e.r), (e.g = 255 - e.g), (e.b = 255 - e.b), this;
  }
  lighten(e) {
    return $a(this._rgb, 2, e), this;
  }
  darken(e) {
    return $a(this._rgb, 2, -e), this;
  }
  saturate(e) {
    return $a(this._rgb, 1, e), this;
  }
  desaturate(e) {
    return $a(this._rgb, 1, -e), this;
  }
  rotate(e) {
    return _k(this._rgb, e), this;
  }
}
/*!
 * Chart.js v4.4.3
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */ function wn() {}
const Nk = (() => {
  let t = 0;
  return () => t++;
})();
function Ce(t) {
  return t === null || typeof t > "u";
}
function $e(t) {
  if (Array.isArray && Array.isArray(t)) return !0;
  const e = Object.prototype.toString.call(t);
  return e.slice(0, 7) === "[object" && e.slice(-6) === "Array]";
}
function le(t) {
  return t !== null && Object.prototype.toString.call(t) === "[object Object]";
}
function Vt(t) {
  return (typeof t == "number" || t instanceof Number) && isFinite(+t);
}
function un(t, e) {
  return Vt(t) ? t : e;
}
function re(t, e) {
  return typeof t > "u" ? e : t;
}
const Ak = (t, e) =>
  typeof t == "string" && t.endsWith("%") ? (parseFloat(t) / 100) * e : +t;
function ge(t, e, n) {
  if (t && typeof t.call == "function") return t.apply(n, e);
}
function ue(t, e, n, i) {
  let r, s, o;
  if ($e(t)) for (s = t.length, r = 0; r < s; r++) e.call(n, t[r], r);
  else if (le(t))
    for (o = Object.keys(t), s = o.length, r = 0; r < s; r++)
      e.call(n, t[o[r]], o[r]);
}
function oc(t, e) {
  let n, i, r, s;
  if (!t || !e || t.length !== e.length) return !1;
  for (n = 0, i = t.length; n < i; ++n)
    if (
      ((r = t[n]),
      (s = e[n]),
      r.datasetIndex !== s.datasetIndex || r.index !== s.index)
    )
      return !1;
  return !0;
}
function ac(t) {
  if ($e(t)) return t.map(ac);
  if (le(t)) {
    const e = Object.create(null),
      n = Object.keys(t),
      i = n.length;
    let r = 0;
    for (; r < i; ++r) e[n[r]] = ac(t[n[r]]);
    return e;
  }
  return t;
}
function e_(t) {
  return ["__proto__", "prototype", "constructor"].indexOf(t) === -1;
}
function Pk(t, e, n, i) {
  if (!e_(t)) return;
  const r = e[t],
    s = n[t];
  le(r) && le(s) ? Yo(r, s, i) : (e[t] = ac(s));
}
function Yo(t, e, n) {
  const i = $e(e) ? e : [e],
    r = i.length;
  if (!le(t)) return t;
  n = n || {};
  const s = n.merger || Pk;
  let o;
  for (let a = 0; a < r; ++a) {
    if (((o = i[a]), !le(o))) continue;
    const l = Object.keys(o);
    for (let c = 0, u = l.length; c < u; ++c) s(l[c], t, o, n);
  }
  return t;
}
function mo(t, e) {
  return Yo(t, e, { merger: Lk });
}
function Lk(t, e, n) {
  if (!e_(t)) return;
  const i = e[t],
    r = n[t];
  le(i) && le(r)
    ? mo(i, r)
    : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = ac(r));
}
const Gg = { "": (t) => t, x: (t) => t.x, y: (t) => t.y };
function jk(t) {
  const e = t.split("."),
    n = [];
  let i = "";
  for (const r of e)
    (i += r),
      i.endsWith("\\") ? (i = i.slice(0, -1) + ".") : (n.push(i), (i = ""));
  return n;
}
function Dk(t) {
  const e = jk(t);
  return (n) => {
    for (const i of e) {
      if (i === "") break;
      n = n && n[i];
    }
    return n;
  };
}
function lc(t, e) {
  return (Gg[e] || (Gg[e] = Dk(e)))(t);
}
function _p(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
const cc = (t) => typeof t < "u",
  bi = (t) => typeof t == "function",
  qg = (t, e) => {
    if (t.size !== e.size) return !1;
    for (const n of t) if (!e.has(n)) return !1;
    return !0;
  };
function Rk(t) {
  return t.type === "mouseup" || t.type === "click" || t.type === "contextmenu";
}
const Be = Math.PI,
  vn = 2 * Be,
  Mk = vn + Be,
  uc = Number.POSITIVE_INFINITY,
  Ik = Be / 180,
  en = Be / 2,
  Li = Be / 4,
  Xg = (Be * 2) / 3,
  Nf = Math.log10,
  us = Math.sign;
function yo(t, e, n) {
  return Math.abs(t - e) < n;
}
function Qg(t) {
  const e = Math.round(t);
  t = yo(t, e, t / 1e3) ? e : t;
  const n = Math.pow(10, Math.floor(Nf(t))),
    i = t / n;
  return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * n;
}
function $k(t) {
  const e = [],
    n = Math.sqrt(t);
  let i;
  for (i = 1; i < n; i++) t % i === 0 && (e.push(i), e.push(t / i));
  return n === (n | 0) && e.push(n), e.sort((r, s) => r - s).pop(), e;
}
function Ko(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function Fk(t, e) {
  const n = Math.round(t);
  return n - e <= t && n + e >= t;
}
function Bk(t, e, n) {
  let i, r, s;
  for (i = 0, r = t.length; i < r; i++)
    (s = t[i][n]),
      isNaN(s) || ((e.min = Math.min(e.min, s)), (e.max = Math.max(e.max, s)));
}
function Vi(t) {
  return t * (Be / 180);
}
function zk(t) {
  return t * (180 / Be);
}
function Jg(t) {
  if (!Vt(t)) return;
  let e = 1,
    n = 0;
  for (; Math.round(t * e) / e !== t; ) (e *= 10), n++;
  return n;
}
function Wk(t, e) {
  const n = e.x - t.x,
    i = e.y - t.y,
    r = Math.sqrt(n * n + i * i);
  let s = Math.atan2(i, n);
  return s < -0.5 * Be && (s += vn), { angle: s, distance: r };
}
function Af(t, e) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function Hk(t, e) {
  return ((t - e + Mk) % vn) - Be;
}
function Xn(t) {
  return ((t % vn) + vn) % vn;
}
function t_(t, e, n, i) {
  const r = Xn(t),
    s = Xn(e),
    o = Xn(n),
    a = Xn(s - r),
    l = Xn(o - r),
    c = Xn(r - s),
    u = Xn(r - o);
  return r === s || r === o || (i && s === o) || (a > l && c < u);
}
function $t(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function Vk(t) {
  return $t(t, -32768, 32767);
}
function eo(t, e, n, i = 1e-6) {
  return t >= Math.min(e, n) - i && t <= Math.max(e, n) + i;
}
function bp(t, e, n) {
  n = n || ((o) => t[o] < e);
  let i = t.length - 1,
    r = 0,
    s;
  for (; i - r > 1; ) (s = (r + i) >> 1), n(s) ? (r = s) : (i = s);
  return { lo: r, hi: i };
}
const Ui = (t, e, n, i) =>
    bp(
      t,
      n,
      i
        ? (r) => {
            const s = t[r][e];
            return s < n || (s === n && t[r + 1][e] === n);
          }
        : (r) => t[r][e] < n,
    ),
  Uk = (t, e, n) => bp(t, n, (i) => t[i][e] >= n);
function Yk(t, e, n) {
  let i = 0,
    r = t.length;
  for (; i < r && t[i] < e; ) i++;
  for (; r > i && t[r - 1] > n; ) r--;
  return i > 0 || r < t.length ? t.slice(i, r) : t;
}
const n_ = ["push", "pop", "shift", "splice", "unshift"];
function Kk(t, e) {
  if (t._chartjs) {
    t._chartjs.listeners.push(e);
    return;
  }
  Object.defineProperty(t, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: { listeners: [e] },
  }),
    n_.forEach((n) => {
      const i = "_onData" + _p(n),
        r = t[n];
      Object.defineProperty(t, n, {
        configurable: !0,
        enumerable: !1,
        value(...s) {
          const o = r.apply(this, s);
          return (
            t._chartjs.listeners.forEach((a) => {
              typeof a[i] == "function" && a[i](...s);
            }),
            o
          );
        },
      });
    });
}
function Zg(t, e) {
  const n = t._chartjs;
  if (!n) return;
  const i = n.listeners,
    r = i.indexOf(e);
  r !== -1 && i.splice(r, 1),
    !(i.length > 0) &&
      (n_.forEach((s) => {
        delete t[s];
      }),
      delete t._chartjs);
}
function Gk(t) {
  const e = new Set(t);
  return e.size === t.length ? t : Array.from(e);
}
const i_ = (function () {
  return typeof window > "u"
    ? function (t) {
        return t();
      }
    : window.requestAnimationFrame;
})();
function r_(t, e) {
  let n = [],
    i = !1;
  return function (...r) {
    (n = r),
      i ||
        ((i = !0),
        i_.call(window, () => {
          (i = !1), t.apply(e, n);
        }));
  };
}
function qk(t, e) {
  let n;
  return function (...i) {
    return (
      e ? (clearTimeout(n), (n = setTimeout(t, e, i))) : t.apply(this, i), e
    );
  };
}
const wp = (t) => (t === "start" ? "left" : t === "end" ? "right" : "center"),
  Qe = (t, e, n) => (t === "start" ? e : t === "end" ? n : (e + n) / 2),
  Xk = (t, e, n, i) =>
    t === (i ? "left" : "right") ? n : t === "center" ? (e + n) / 2 : e;
function Qk(t, e, n) {
  const i = e.length;
  let r = 0,
    s = i;
  if (t._sorted) {
    const { iScale: o, _parsed: a } = t,
      l = o.axis,
      { min: c, max: u, minDefined: d, maxDefined: h } = o.getUserBounds();
    d &&
      (r = $t(
        Math.min(Ui(a, l, c).lo, n ? i : Ui(e, l, o.getPixelForValue(c)).lo),
        0,
        i - 1,
      )),
      h
        ? (s =
            $t(
              Math.max(
                Ui(a, o.axis, u, !0).hi + 1,
                n ? 0 : Ui(e, l, o.getPixelForValue(u), !0).hi + 1,
              ),
              r,
              i,
            ) - r)
        : (s = i - r);
  }
  return { start: r, count: s };
}
function Jk(t) {
  const { xScale: e, yScale: n, _scaleRanges: i } = t,
    r = { xmin: e.min, xmax: e.max, ymin: n.min, ymax: n.max };
  if (!i) return (t._scaleRanges = r), !0;
  const s =
    i.xmin !== e.min ||
    i.xmax !== e.max ||
    i.ymin !== n.min ||
    i.ymax !== n.max;
  return Object.assign(i, r), s;
}
const Fa = (t) => t === 0 || t === 1,
  em = (t, e, n) =>
    -(Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * vn) / n)),
  tm = (t, e, n) => Math.pow(2, -10 * t) * Math.sin(((t - e) * vn) / n) + 1,
  vo = {
    linear: (t) => t,
    easeInQuad: (t) => t * t,
    easeOutQuad: (t) => -t * (t - 2),
    easeInOutQuad: (t) =>
      (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1),
    easeInCubic: (t) => t * t * t,
    easeOutCubic: (t) => (t -= 1) * t * t + 1,
    easeInOutCubic: (t) =>
      (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2),
    easeInQuart: (t) => t * t * t * t,
    easeOutQuart: (t) => -((t -= 1) * t * t * t - 1),
    easeInOutQuart: (t) =>
      (t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2),
    easeInQuint: (t) => t * t * t * t * t,
    easeOutQuint: (t) => (t -= 1) * t * t * t * t + 1,
    easeInOutQuint: (t) =>
      (t /= 0.5) < 1
        ? 0.5 * t * t * t * t * t
        : 0.5 * ((t -= 2) * t * t * t * t + 2),
    easeInSine: (t) => -Math.cos(t * en) + 1,
    easeOutSine: (t) => Math.sin(t * en),
    easeInOutSine: (t) => -0.5 * (Math.cos(Be * t) - 1),
    easeInExpo: (t) => (t === 0 ? 0 : Math.pow(2, 10 * (t - 1))),
    easeOutExpo: (t) => (t === 1 ? 1 : -Math.pow(2, -10 * t) + 1),
    easeInOutExpo: (t) =>
      Fa(t)
        ? t
        : t < 0.5
        ? 0.5 * Math.pow(2, 10 * (t * 2 - 1))
        : 0.5 * (-Math.pow(2, -10 * (t * 2 - 1)) + 2),
    easeInCirc: (t) => (t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)),
    easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
    easeInOutCirc: (t) =>
      (t /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - t * t) - 1)
        : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
    easeInElastic: (t) => (Fa(t) ? t : em(t, 0.075, 0.3)),
    easeOutElastic: (t) => (Fa(t) ? t : tm(t, 0.075, 0.3)),
    easeInOutElastic(t) {
      return Fa(t)
        ? t
        : t < 0.5
        ? 0.5 * em(t * 2, 0.1125, 0.45)
        : 0.5 + 0.5 * tm(t * 2 - 1, 0.1125, 0.45);
    },
    easeInBack(t) {
      return t * t * ((1.70158 + 1) * t - 1.70158);
    },
    easeOutBack(t) {
      return (t -= 1) * t * ((1.70158 + 1) * t + 1.70158) + 1;
    },
    easeInOutBack(t) {
      let e = 1.70158;
      return (t /= 0.5) < 1
        ? 0.5 * (t * t * (((e *= 1.525) + 1) * t - e))
        : 0.5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2);
    },
    easeInBounce: (t) => 1 - vo.easeOutBounce(1 - t),
    easeOutBounce(t) {
      return t < 1 / 2.75
        ? 7.5625 * t * t
        : t < 2 / 2.75
        ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
        : t < 2.5 / 2.75
        ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
        : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
    },
    easeInOutBounce: (t) =>
      t < 0.5
        ? vo.easeInBounce(t * 2) * 0.5
        : vo.easeOutBounce(t * 2 - 1) * 0.5 + 0.5,
  };
function Ep(t) {
  if (t && typeof t == "object") {
    const e = t.toString();
    return e === "[object CanvasPattern]" || e === "[object CanvasGradient]";
  }
  return !1;
}
function nm(t) {
  return Ep(t) ? t : new Uo(t);
}
function Wu(t) {
  return Ep(t) ? t : new Uo(t).saturate(0.5).darken(0.1).hexString();
}
const Zk = ["x", "y", "borderWidth", "radius", "tension"],
  e6 = ["color", "borderColor", "backgroundColor"];
function t6(t) {
  t.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0,
  }),
    t.describe("animation", {
      _fallback: !1,
      _indexable: !1,
      _scriptable: (e) =>
        e !== "onProgress" && e !== "onComplete" && e !== "fn",
    }),
    t.set("animations", {
      colors: { type: "color", properties: e6 },
      numbers: { type: "number", properties: Zk },
    }),
    t.describe("animations", { _fallback: "animation" }),
    t.set("transitions", {
      active: { animation: { duration: 400 } },
      resize: { animation: { duration: 0 } },
      show: {
        animations: {
          colors: { from: "transparent" },
          visible: { type: "boolean", duration: 0 },
        },
      },
      hide: {
        animations: {
          colors: { to: "transparent" },
          visible: { type: "boolean", easing: "linear", fn: (e) => e | 0 },
        },
      },
    });
}
function n6(t) {
  t.set("layout", {
    autoPadding: !0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  });
}
const im = new Map();
function i6(t, e) {
  e = e || {};
  const n = t + JSON.stringify(e);
  let i = im.get(n);
  return i || ((i = new Intl.NumberFormat(t, e)), im.set(n, i)), i;
}
function s_(t, e, n) {
  return i6(e, n).format(t);
}
const o_ = {
  values(t) {
    return $e(t) ? t : "" + t;
  },
  numeric(t, e, n) {
    if (t === 0) return "0";
    const i = this.chart.options.locale;
    let r,
      s = t;
    if (n.length > 1) {
      const c = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value));
      (c < 1e-4 || c > 1e15) && (r = "scientific"), (s = r6(t, n));
    }
    const o = Nf(Math.abs(s)),
      a = isNaN(o) ? 1 : Math.max(Math.min(-1 * Math.floor(o), 20), 0),
      l = { notation: r, minimumFractionDigits: a, maximumFractionDigits: a };
    return Object.assign(l, this.options.ticks.format), s_(t, i, l);
  },
  logarithmic(t, e, n) {
    if (t === 0) return "0";
    const i = n[e].significand || t / Math.pow(10, Math.floor(Nf(t)));
    return [1, 2, 3, 5, 10, 15].includes(i) || e > 0.8 * n.length
      ? o_.numeric.call(this, t, e, n)
      : "";
  },
};
function r6(t, e) {
  let n = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
  return Math.abs(n) >= 1 && t !== Math.floor(t) && (n = t - Math.floor(t)), n;
}
var a_ = { formatters: o_ };
function s6(t) {
  t.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (e, n) => n.lineWidth,
      tickColor: (e, n) => n.color,
      offset: !1,
    },
    border: { display: !0, dash: [], dashOffset: 0, width: 1 },
    title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: a_.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2,
    },
  }),
    t.route("scale.ticks", "color", "", "color"),
    t.route("scale.grid", "color", "", "borderColor"),
    t.route("scale.border", "color", "", "borderColor"),
    t.route("scale.title", "color", "", "color"),
    t.describe("scale", {
      _fallback: !1,
      _scriptable: (e) =>
        !e.startsWith("before") &&
        !e.startsWith("after") &&
        e !== "callback" &&
        e !== "parser",
      _indexable: (e) =>
        e !== "borderDash" && e !== "tickBorderDash" && e !== "dash",
    }),
    t.describe("scales", { _fallback: "scale" }),
    t.describe("scale.ticks", {
      _scriptable: (e) => e !== "backdropPadding" && e !== "callback",
      _indexable: (e) => e !== "backdropPadding",
    });
}
const ar = Object.create(null),
  Pf = Object.create(null);
function xo(t, e) {
  if (!e) return t;
  const n = e.split(".");
  for (let i = 0, r = n.length; i < r; ++i) {
    const s = n[i];
    t = t[s] || (t[s] = Object.create(null));
  }
  return t;
}
function Hu(t, e, n) {
  return typeof e == "string" ? Yo(xo(t, e), n) : Yo(xo(t, ""), e);
}
class o6 {
  constructor(e, n) {
    (this.animation = void 0),
      (this.backgroundColor = "rgba(0,0,0,0.1)"),
      (this.borderColor = "rgba(0,0,0,0.1)"),
      (this.color = "#666"),
      (this.datasets = {}),
      (this.devicePixelRatio = (i) => i.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = [
        "mousemove",
        "mouseout",
        "click",
        "touchstart",
        "touchmove",
      ]),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: "normal",
        lineHeight: 1.2,
        weight: null,
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (i, r) => Wu(r.backgroundColor)),
      (this.hoverBorderColor = (i, r) => Wu(r.borderColor)),
      (this.hoverColor = (i, r) => Wu(r.color)),
      (this.indexAxis = "x"),
      (this.interaction = {
        mode: "nearest",
        intersect: !0,
        includeInvisible: !1,
      }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      (this.drawActiveElementsOnTop = !0),
      this.describe(e),
      this.apply(n);
  }
  set(e, n) {
    return Hu(this, e, n);
  }
  get(e) {
    return xo(this, e);
  }
  describe(e, n) {
    return Hu(Pf, e, n);
  }
  override(e, n) {
    return Hu(ar, e, n);
  }
  route(e, n, i, r) {
    const s = xo(this, e),
      o = xo(this, i),
      a = "_" + n;
    Object.defineProperties(s, {
      [a]: { value: s[n], writable: !0 },
      [n]: {
        enumerable: !0,
        get() {
          const l = this[a],
            c = o[r];
          return le(l) ? Object.assign({}, c, l) : re(l, c);
        },
        set(l) {
          this[a] = l;
        },
      },
    });
  }
  apply(e) {
    e.forEach((n) => n(this));
  }
}
var Oe = new o6(
  {
    _scriptable: (t) => !t.startsWith("on"),
    _indexable: (t) => t !== "events",
    hover: { _fallback: "interaction" },
    interaction: { _scriptable: !1, _indexable: !1 },
  },
  [t6, n6, s6],
);
function a6(t) {
  return !t || Ce(t.size) || Ce(t.family)
    ? null
    : (t.style ? t.style + " " : "") +
        (t.weight ? t.weight + " " : "") +
        t.size +
        "px " +
        t.family;
}
function rm(t, e, n, i, r) {
  let s = e[r];
  return (
    s || ((s = e[r] = t.measureText(r).width), n.push(r)), s > i && (i = s), i
  );
}
function ji(t, e, n) {
  const i = t.currentDevicePixelRatio,
    r = n !== 0 ? Math.max(n / 2, 0.5) : 0;
  return Math.round((e - r) * i) / i + r;
}
function sm(t, e) {
  (!e && !t) ||
    ((e = e || t.getContext("2d")),
    e.save(),
    e.resetTransform(),
    e.clearRect(0, 0, t.width, t.height),
    e.restore());
}
function Lf(t, e, n, i) {
  l_(t, e, n, i, null);
}
function l_(t, e, n, i, r) {
  let s, o, a, l, c, u, d, h;
  const p = e.pointStyle,
    g = e.rotation,
    y = e.radius;
  let v = (g || 0) * Ik;
  if (
    p &&
    typeof p == "object" &&
    ((s = p.toString()),
    s === "[object HTMLImageElement]" || s === "[object HTMLCanvasElement]")
  ) {
    t.save(),
      t.translate(n, i),
      t.rotate(v),
      t.drawImage(p, -p.width / 2, -p.height / 2, p.width, p.height),
      t.restore();
    return;
  }
  if (!(isNaN(y) || y <= 0)) {
    switch ((t.beginPath(), p)) {
      default:
        r ? t.ellipse(n, i, r / 2, y, 0, 0, vn) : t.arc(n, i, y, 0, vn),
          t.closePath();
        break;
      case "triangle":
        (u = r ? r / 2 : y),
          t.moveTo(n + Math.sin(v) * u, i - Math.cos(v) * y),
          (v += Xg),
          t.lineTo(n + Math.sin(v) * u, i - Math.cos(v) * y),
          (v += Xg),
          t.lineTo(n + Math.sin(v) * u, i - Math.cos(v) * y),
          t.closePath();
        break;
      case "rectRounded":
        (c = y * 0.516),
          (l = y - c),
          (o = Math.cos(v + Li) * l),
          (d = Math.cos(v + Li) * (r ? r / 2 - c : l)),
          (a = Math.sin(v + Li) * l),
          (h = Math.sin(v + Li) * (r ? r / 2 - c : l)),
          t.arc(n - d, i - a, c, v - Be, v - en),
          t.arc(n + h, i - o, c, v - en, v),
          t.arc(n + d, i + a, c, v, v + en),
          t.arc(n - h, i + o, c, v + en, v + Be),
          t.closePath();
        break;
      case "rect":
        if (!g) {
          (l = Math.SQRT1_2 * y),
            (u = r ? r / 2 : l),
            t.rect(n - u, i - l, 2 * u, 2 * l);
          break;
        }
        v += Li;
      case "rectRot":
        (d = Math.cos(v) * (r ? r / 2 : y)),
          (o = Math.cos(v) * y),
          (a = Math.sin(v) * y),
          (h = Math.sin(v) * (r ? r / 2 : y)),
          t.moveTo(n - d, i - a),
          t.lineTo(n + h, i - o),
          t.lineTo(n + d, i + a),
          t.lineTo(n - h, i + o),
          t.closePath();
        break;
      case "crossRot":
        v += Li;
      case "cross":
        (d = Math.cos(v) * (r ? r / 2 : y)),
          (o = Math.cos(v) * y),
          (a = Math.sin(v) * y),
          (h = Math.sin(v) * (r ? r / 2 : y)),
          t.moveTo(n - d, i - a),
          t.lineTo(n + d, i + a),
          t.moveTo(n + h, i - o),
          t.lineTo(n - h, i + o);
        break;
      case "star":
        (d = Math.cos(v) * (r ? r / 2 : y)),
          (o = Math.cos(v) * y),
          (a = Math.sin(v) * y),
          (h = Math.sin(v) * (r ? r / 2 : y)),
          t.moveTo(n - d, i - a),
          t.lineTo(n + d, i + a),
          t.moveTo(n + h, i - o),
          t.lineTo(n - h, i + o),
          (v += Li),
          (d = Math.cos(v) * (r ? r / 2 : y)),
          (o = Math.cos(v) * y),
          (a = Math.sin(v) * y),
          (h = Math.sin(v) * (r ? r / 2 : y)),
          t.moveTo(n - d, i - a),
          t.lineTo(n + d, i + a),
          t.moveTo(n + h, i - o),
          t.lineTo(n - h, i + o);
        break;
      case "line":
        (o = r ? r / 2 : Math.cos(v) * y),
          (a = Math.sin(v) * y),
          t.moveTo(n - o, i - a),
          t.lineTo(n + o, i + a);
        break;
      case "dash":
        t.moveTo(n, i),
          t.lineTo(n + Math.cos(v) * (r ? r / 2 : y), i + Math.sin(v) * y);
        break;
      case !1:
        t.closePath();
        break;
    }
    t.fill(), e.borderWidth > 0 && t.stroke();
  }
}
function Go(t, e, n) {
  return (
    (n = n || 0.5),
    !e ||
      (t &&
        t.x > e.left - n &&
        t.x < e.right + n &&
        t.y > e.top - n &&
        t.y < e.bottom + n)
  );
}
function Sp(t, e) {
  t.save(),
    t.beginPath(),
    t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
    t.clip();
}
function Cp(t) {
  t.restore();
}
function l6(t, e, n, i, r) {
  if (!e) return t.lineTo(n.x, n.y);
  if (r === "middle") {
    const s = (e.x + n.x) / 2;
    t.lineTo(s, e.y), t.lineTo(s, n.y);
  } else (r === "after") != !!i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);
  t.lineTo(n.x, n.y);
}
function c6(t, e, n, i) {
  if (!e) return t.lineTo(n.x, n.y);
  t.bezierCurveTo(
    i ? e.cp1x : e.cp2x,
    i ? e.cp1y : e.cp2y,
    i ? n.cp2x : n.cp1x,
    i ? n.cp2y : n.cp1y,
    n.x,
    n.y,
  );
}
function u6(t, e) {
  e.translation && t.translate(e.translation[0], e.translation[1]),
    Ce(e.rotation) || t.rotate(e.rotation),
    e.color && (t.fillStyle = e.color),
    e.textAlign && (t.textAlign = e.textAlign),
    e.textBaseline && (t.textBaseline = e.textBaseline);
}
function d6(t, e, n, i, r) {
  if (r.strikethrough || r.underline) {
    const s = t.measureText(i),
      o = e - s.actualBoundingBoxLeft,
      a = e + s.actualBoundingBoxRight,
      l = n - s.actualBoundingBoxAscent,
      c = n + s.actualBoundingBoxDescent,
      u = r.strikethrough ? (l + c) / 2 : c;
    (t.strokeStyle = t.fillStyle),
      t.beginPath(),
      (t.lineWidth = r.decorationWidth || 2),
      t.moveTo(o, u),
      t.lineTo(a, u),
      t.stroke();
  }
}
function f6(t, e) {
  const n = t.fillStyle;
  (t.fillStyle = e.color),
    t.fillRect(e.left, e.top, e.width, e.height),
    (t.fillStyle = n);
}
function qo(t, e, n, i, r, s = {}) {
  const o = $e(e) ? e : [e],
    a = s.strokeWidth > 0 && s.strokeColor !== "";
  let l, c;
  for (t.save(), t.font = r.string, u6(t, s), l = 0; l < o.length; ++l)
    (c = o[l]),
      s.backdrop && f6(t, s.backdrop),
      a &&
        (s.strokeColor && (t.strokeStyle = s.strokeColor),
        Ce(s.strokeWidth) || (t.lineWidth = s.strokeWidth),
        t.strokeText(c, n, i, s.maxWidth)),
      t.fillText(c, n, i, s.maxWidth),
      d6(t, n, i, c, s),
      (i += Number(r.lineHeight));
  t.restore();
}
function jf(t, e) {
  const { x: n, y: i, w: r, h: s, radius: o } = e;
  t.arc(n + o.topLeft, i + o.topLeft, o.topLeft, 1.5 * Be, Be, !0),
    t.lineTo(n, i + s - o.bottomLeft),
    t.arc(n + o.bottomLeft, i + s - o.bottomLeft, o.bottomLeft, Be, en, !0),
    t.lineTo(n + r - o.bottomRight, i + s),
    t.arc(
      n + r - o.bottomRight,
      i + s - o.bottomRight,
      o.bottomRight,
      en,
      0,
      !0,
    ),
    t.lineTo(n + r, i + o.topRight),
    t.arc(n + r - o.topRight, i + o.topRight, o.topRight, 0, -en, !0),
    t.lineTo(n + o.topLeft, i);
}
const h6 = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
  p6 = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function g6(t, e) {
  const n = ("" + t).match(h6);
  if (!n || n[1] === "normal") return e * 1.2;
  switch (((t = +n[2]), n[3])) {
    case "px":
      return t;
    case "%":
      t /= 100;
      break;
  }
  return e * t;
}
const m6 = (t) => +t || 0;
function c_(t, e) {
  const n = {},
    i = le(e),
    r = i ? Object.keys(e) : e,
    s = le(t) ? (i ? (o) => re(t[o], t[e[o]]) : (o) => t[o]) : () => t;
  for (const o of r) n[o] = m6(s(o));
  return n;
}
function y6(t) {
  return c_(t, { top: "y", right: "x", bottom: "y", left: "x" });
}
function _o(t) {
  return c_(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
}
function Ut(t) {
  const e = y6(t);
  return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e;
}
function Ze(t, e) {
  (t = t || {}), (e = e || Oe.font);
  let n = re(t.size, e.size);
  typeof n == "string" && (n = parseInt(n, 10));
  let i = re(t.style, e.style);
  i &&
    !("" + i).match(p6) &&
    (console.warn('Invalid font style specified: "' + i + '"'), (i = void 0));
  const r = {
    family: re(t.family, e.family),
    lineHeight: g6(re(t.lineHeight, e.lineHeight), n),
    size: n,
    style: i,
    weight: re(t.weight, e.weight),
    string: "",
  };
  return (r.string = a6(r)), r;
}
function Ba(t, e, n, i) {
  let r, s, o;
  for (r = 0, s = t.length; r < s; ++r)
    if (((o = t[r]), o !== void 0 && o !== void 0)) return o;
}
function v6(t, e, n) {
  const { min: i, max: r } = t,
    s = Ak(e, (r - i) / 2),
    o = (a, l) => (n && a === 0 ? 0 : a + l);
  return { min: o(i, -Math.abs(s)), max: o(r, s) };
}
function hr(t, e) {
  return Object.assign(Object.create(t), e);
}
function kp(t, e = [""], n, i, r = () => t[0]) {
  const s = n || t;
  typeof i > "u" && (i = h_("_fallback", t));
  const o = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: t,
    _rootScopes: s,
    _fallback: i,
    _getTarget: r,
    override: (a) => kp([a, ...t], e, s, i),
  };
  return new Proxy(o, {
    deleteProperty(a, l) {
      return delete a[l], delete a._keys, delete t[0][l], !0;
    },
    get(a, l) {
      return d_(a, l, () => k6(l, e, t, a));
    },
    getOwnPropertyDescriptor(a, l) {
      return Reflect.getOwnPropertyDescriptor(a._scopes[0], l);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(t[0]);
    },
    has(a, l) {
      return am(a).includes(l);
    },
    ownKeys(a) {
      return am(a);
    },
    set(a, l, c) {
      const u = a._storage || (a._storage = r());
      return (a[l] = u[l] = c), delete a._keys, !0;
    },
  });
}
function ds(t, e, n, i) {
  const r = {
    _cacheable: !1,
    _proxy: t,
    _context: e,
    _subProxy: n,
    _stack: new Set(),
    _descriptors: u_(t, i),
    setContext: (s) => ds(t, s, n, i),
    override: (s) => ds(t.override(s), e, n, i),
  };
  return new Proxy(r, {
    deleteProperty(s, o) {
      return delete s[o], delete t[o], !0;
    },
    get(s, o, a) {
      return d_(s, o, () => _6(s, o, a));
    },
    getOwnPropertyDescriptor(s, o) {
      return s._descriptors.allKeys
        ? Reflect.has(t, o)
          ? { enumerable: !0, configurable: !0 }
          : void 0
        : Reflect.getOwnPropertyDescriptor(t, o);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(t);
    },
    has(s, o) {
      return Reflect.has(t, o);
    },
    ownKeys() {
      return Reflect.ownKeys(t);
    },
    set(s, o, a) {
      return (t[o] = a), delete s[o], !0;
    },
  });
}
function u_(t, e = { scriptable: !0, indexable: !0 }) {
  const {
    _scriptable: n = e.scriptable,
    _indexable: i = e.indexable,
    _allKeys: r = e.allKeys,
  } = t;
  return {
    allKeys: r,
    scriptable: n,
    indexable: i,
    isScriptable: bi(n) ? n : () => n,
    isIndexable: bi(i) ? i : () => i,
  };
}
const x6 = (t, e) => (t ? t + _p(e) : e),
  Op = (t, e) =>
    le(e) &&
    t !== "adapters" &&
    (Object.getPrototypeOf(e) === null || e.constructor === Object);
function d_(t, e, n) {
  if (Object.prototype.hasOwnProperty.call(t, e) || e === "constructor")
    return t[e];
  const i = n();
  return (t[e] = i), i;
}
function _6(t, e, n) {
  const { _proxy: i, _context: r, _subProxy: s, _descriptors: o } = t;
  let a = i[e];
  return (
    bi(a) && o.isScriptable(e) && (a = b6(e, a, t, n)),
    $e(a) && a.length && (a = w6(e, a, t, o.isIndexable)),
    Op(e, a) && (a = ds(a, r, s && s[e], o)),
    a
  );
}
function b6(t, e, n, i) {
  const { _proxy: r, _context: s, _subProxy: o, _stack: a } = n;
  if (a.has(t))
    throw new Error(
      "Recursion detected: " + Array.from(a).join("->") + "->" + t,
    );
  a.add(t);
  let l = e(s, o || i);
  return a.delete(t), Op(t, l) && (l = Tp(r._scopes, r, t, l)), l;
}
function w6(t, e, n, i) {
  const { _proxy: r, _context: s, _subProxy: o, _descriptors: a } = n;
  if (typeof s.index < "u" && i(t)) return e[s.index % e.length];
  if (le(e[0])) {
    const l = e,
      c = r._scopes.filter((u) => u !== l);
    e = [];
    for (const u of l) {
      const d = Tp(c, r, t, u);
      e.push(ds(d, s, o && o[t], a));
    }
  }
  return e;
}
function f_(t, e, n) {
  return bi(t) ? t(e, n) : t;
}
const E6 = (t, e) => (t === !0 ? e : typeof t == "string" ? lc(e, t) : void 0);
function S6(t, e, n, i, r) {
  for (const s of e) {
    const o = E6(n, s);
    if (o) {
      t.add(o);
      const a = f_(o._fallback, n, r);
      if (typeof a < "u" && a !== n && a !== i) return a;
    } else if (o === !1 && typeof i < "u" && n !== i) return null;
  }
  return !1;
}
function Tp(t, e, n, i) {
  const r = e._rootScopes,
    s = f_(e._fallback, n, i),
    o = [...t, ...r],
    a = new Set();
  a.add(i);
  let l = om(a, o, n, s || n, i);
  return l === null ||
    (typeof s < "u" && s !== n && ((l = om(a, o, s, l, i)), l === null))
    ? !1
    : kp(Array.from(a), [""], r, s, () => C6(e, n, i));
}
function om(t, e, n, i, r) {
  for (; n; ) n = S6(t, e, n, i, r);
  return n;
}
function C6(t, e, n) {
  const i = t._getTarget();
  e in i || (i[e] = {});
  const r = i[e];
  return $e(r) && le(n) ? n : r || {};
}
function k6(t, e, n, i) {
  let r;
  for (const s of e)
    if (((r = h_(x6(s, t), n)), typeof r < "u"))
      return Op(t, r) ? Tp(n, i, t, r) : r;
}
function h_(t, e) {
  for (const n of e) {
    if (!n) continue;
    const i = n[t];
    if (typeof i < "u") return i;
  }
}
function am(t) {
  let e = t._keys;
  return e || (e = t._keys = O6(t._scopes)), e;
}
function O6(t) {
  const e = new Set();
  for (const n of t)
    for (const i of Object.keys(n).filter((r) => !r.startsWith("_"))) e.add(i);
  return Array.from(e);
}
const T6 = Number.EPSILON || 1e-14,
  fs = (t, e) => e < t.length && !t[e].skip && t[e],
  p_ = (t) => (t === "x" ? "y" : "x");
function N6(t, e, n, i) {
  const r = t.skip ? e : t,
    s = e,
    o = n.skip ? e : n,
    a = Af(s, r),
    l = Af(o, s);
  let c = a / (a + l),
    u = l / (a + l);
  (c = isNaN(c) ? 0 : c), (u = isNaN(u) ? 0 : u);
  const d = i * c,
    h = i * u;
  return {
    previous: { x: s.x - d * (o.x - r.x), y: s.y - d * (o.y - r.y) },
    next: { x: s.x + h * (o.x - r.x), y: s.y + h * (o.y - r.y) },
  };
}
function A6(t, e, n) {
  const i = t.length;
  let r,
    s,
    o,
    a,
    l,
    c = fs(t, 0);
  for (let u = 0; u < i - 1; ++u)
    if (((l = c), (c = fs(t, u + 1)), !(!l || !c))) {
      if (yo(e[u], 0, T6)) {
        n[u] = n[u + 1] = 0;
        continue;
      }
      (r = n[u] / e[u]),
        (s = n[u + 1] / e[u]),
        (a = Math.pow(r, 2) + Math.pow(s, 2)),
        !(a <= 9) &&
          ((o = 3 / Math.sqrt(a)),
          (n[u] = r * o * e[u]),
          (n[u + 1] = s * o * e[u]));
    }
}
function P6(t, e, n = "x") {
  const i = p_(n),
    r = t.length;
  let s,
    o,
    a,
    l = fs(t, 0);
  for (let c = 0; c < r; ++c) {
    if (((o = a), (a = l), (l = fs(t, c + 1)), !a)) continue;
    const u = a[n],
      d = a[i];
    o &&
      ((s = (u - o[n]) / 3),
      (a[`cp1${n}`] = u - s),
      (a[`cp1${i}`] = d - s * e[c])),
      l &&
        ((s = (l[n] - u) / 3),
        (a[`cp2${n}`] = u + s),
        (a[`cp2${i}`] = d + s * e[c]));
  }
}
function L6(t, e = "x") {
  const n = p_(e),
    i = t.length,
    r = Array(i).fill(0),
    s = Array(i);
  let o,
    a,
    l,
    c = fs(t, 0);
  for (o = 0; o < i; ++o)
    if (((a = l), (l = c), (c = fs(t, o + 1)), !!l)) {
      if (c) {
        const u = c[e] - l[e];
        r[o] = u !== 0 ? (c[n] - l[n]) / u : 0;
      }
      s[o] = a
        ? c
          ? us(r[o - 1]) !== us(r[o])
            ? 0
            : (r[o - 1] + r[o]) / 2
          : r[o - 1]
        : r[o];
    }
  A6(t, r, s), P6(t, s, e);
}
function za(t, e, n) {
  return Math.max(Math.min(t, n), e);
}
function j6(t, e) {
  let n,
    i,
    r,
    s,
    o,
    a = Go(t[0], e);
  for (n = 0, i = t.length; n < i; ++n)
    (o = s),
      (s = a),
      (a = n < i - 1 && Go(t[n + 1], e)),
      s &&
        ((r = t[n]),
        o &&
          ((r.cp1x = za(r.cp1x, e.left, e.right)),
          (r.cp1y = za(r.cp1y, e.top, e.bottom))),
        a &&
          ((r.cp2x = za(r.cp2x, e.left, e.right)),
          (r.cp2y = za(r.cp2y, e.top, e.bottom))));
}
function D6(t, e, n, i, r) {
  let s, o, a, l;
  if (
    (e.spanGaps && (t = t.filter((c) => !c.skip)),
    e.cubicInterpolationMode === "monotone")
  )
    L6(t, r);
  else {
    let c = i ? t[t.length - 1] : t[0];
    for (s = 0, o = t.length; s < o; ++s)
      (a = t[s]),
        (l = N6(c, a, t[Math.min(s + 1, o - (i ? 0 : 1)) % o], e.tension)),
        (a.cp1x = l.previous.x),
        (a.cp1y = l.previous.y),
        (a.cp2x = l.next.x),
        (a.cp2y = l.next.y),
        (c = a);
  }
  e.capBezierPoints && j6(t, n);
}
function Np() {
  return typeof window < "u" && typeof document < "u";
}
function Ap(t) {
  let e = t.parentNode;
  return e && e.toString() === "[object ShadowRoot]" && (e = e.host), e;
}
function dc(t, e, n) {
  let i;
  return (
    typeof t == "string"
      ? ((i = parseInt(t, 10)),
        t.indexOf("%") !== -1 && (i = (i / 100) * e.parentNode[n]))
      : (i = t),
    i
  );
}
const qc = (t) => t.ownerDocument.defaultView.getComputedStyle(t, null);
function R6(t, e) {
  return qc(t).getPropertyValue(e);
}
const M6 = ["top", "right", "bottom", "left"];
function Ji(t, e, n) {
  const i = {};
  n = n ? "-" + n : "";
  for (let r = 0; r < 4; r++) {
    const s = M6[r];
    i[s] = parseFloat(t[e + "-" + s + n]) || 0;
  }
  return (i.width = i.left + i.right), (i.height = i.top + i.bottom), i;
}
const I6 = (t, e, n) => (t > 0 || e > 0) && (!n || !n.shadowRoot);
function $6(t, e) {
  const n = t.touches,
    i = n && n.length ? n[0] : t,
    { offsetX: r, offsetY: s } = i;
  let o = !1,
    a,
    l;
  if (I6(r, s, t.target)) (a = r), (l = s);
  else {
    const c = e.getBoundingClientRect();
    (a = i.clientX - c.left), (l = i.clientY - c.top), (o = !0);
  }
  return { x: a, y: l, box: o };
}
function $i(t, e) {
  if ("native" in t) return t;
  const { canvas: n, currentDevicePixelRatio: i } = e,
    r = qc(n),
    s = r.boxSizing === "border-box",
    o = Ji(r, "padding"),
    a = Ji(r, "border", "width"),
    { x: l, y: c, box: u } = $6(t, n),
    d = o.left + (u && a.left),
    h = o.top + (u && a.top);
  let { width: p, height: g } = e;
  return (
    s && ((p -= o.width + a.width), (g -= o.height + a.height)),
    {
      x: Math.round((((l - d) / p) * n.width) / i),
      y: Math.round((((c - h) / g) * n.height) / i),
    }
  );
}
function F6(t, e, n) {
  let i, r;
  if (e === void 0 || n === void 0) {
    const s = t && Ap(t);
    if (!s) (e = t.clientWidth), (n = t.clientHeight);
    else {
      const o = s.getBoundingClientRect(),
        a = qc(s),
        l = Ji(a, "border", "width"),
        c = Ji(a, "padding");
      (e = o.width - c.width - l.width),
        (n = o.height - c.height - l.height),
        (i = dc(a.maxWidth, s, "clientWidth")),
        (r = dc(a.maxHeight, s, "clientHeight"));
    }
  }
  return { width: e, height: n, maxWidth: i || uc, maxHeight: r || uc };
}
const Wa = (t) => Math.round(t * 10) / 10;
function B6(t, e, n, i) {
  const r = qc(t),
    s = Ji(r, "margin"),
    o = dc(r.maxWidth, t, "clientWidth") || uc,
    a = dc(r.maxHeight, t, "clientHeight") || uc,
    l = F6(t, e, n);
  let { width: c, height: u } = l;
  if (r.boxSizing === "content-box") {
    const h = Ji(r, "border", "width"),
      p = Ji(r, "padding");
    (c -= p.width + h.width), (u -= p.height + h.height);
  }
  return (
    (c = Math.max(0, c - s.width)),
    (u = Math.max(0, i ? c / i : u - s.height)),
    (c = Wa(Math.min(c, o, l.maxWidth))),
    (u = Wa(Math.min(u, a, l.maxHeight))),
    c && !u && (u = Wa(c / 2)),
    (e !== void 0 || n !== void 0) &&
      i &&
      l.height &&
      u > l.height &&
      ((u = l.height), (c = Wa(Math.floor(u * i)))),
    { width: c, height: u }
  );
}
function lm(t, e, n) {
  const i = e || 1,
    r = Math.floor(t.height * i),
    s = Math.floor(t.width * i);
  (t.height = Math.floor(t.height)), (t.width = Math.floor(t.width));
  const o = t.canvas;
  return (
    o.style &&
      (n || (!o.style.height && !o.style.width)) &&
      ((o.style.height = `${t.height}px`), (o.style.width = `${t.width}px`)),
    t.currentDevicePixelRatio !== i || o.height !== r || o.width !== s
      ? ((t.currentDevicePixelRatio = i),
        (o.height = r),
        (o.width = s),
        t.ctx.setTransform(i, 0, 0, i, 0, 0),
        !0)
      : !1
  );
}
const z6 = (function () {
  let t = !1;
  try {
    const e = {
      get passive() {
        return (t = !0), !1;
      },
    };
    Np() &&
      (window.addEventListener("test", null, e),
      window.removeEventListener("test", null, e));
  } catch {}
  return t;
})();
function cm(t, e) {
  const n = R6(t, e),
    i = n && n.match(/^(\d+)(\.\d+)?px$/);
  return i ? +i[1] : void 0;
}
function Fi(t, e, n, i) {
  return { x: t.x + n * (e.x - t.x), y: t.y + n * (e.y - t.y) };
}
function W6(t, e, n, i) {
  return {
    x: t.x + n * (e.x - t.x),
    y:
      i === "middle"
        ? n < 0.5
          ? t.y
          : e.y
        : i === "after"
        ? n < 1
          ? t.y
          : e.y
        : n > 0
        ? e.y
        : t.y,
  };
}
function H6(t, e, n, i) {
  const r = { x: t.cp2x, y: t.cp2y },
    s = { x: e.cp1x, y: e.cp1y },
    o = Fi(t, r, n),
    a = Fi(r, s, n),
    l = Fi(s, e, n),
    c = Fi(o, a, n),
    u = Fi(a, l, n);
  return Fi(c, u, n);
}
const V6 = function (t, e) {
    return {
      x(n) {
        return t + t + e - n;
      },
      setWidth(n) {
        e = n;
      },
      textAlign(n) {
        return n === "center" ? n : n === "right" ? "left" : "right";
      },
      xPlus(n, i) {
        return n - i;
      },
      leftForLtr(n, i) {
        return n - i;
      },
    };
  },
  U6 = function () {
    return {
      x(t) {
        return t;
      },
      setWidth(t) {},
      textAlign(t) {
        return t;
      },
      xPlus(t, e) {
        return t + e;
      },
      leftForLtr(t, e) {
        return t;
      },
    };
  };
function Gr(t, e, n) {
  return t ? V6(e, n) : U6();
}
function g_(t, e) {
  let n, i;
  (e === "ltr" || e === "rtl") &&
    ((n = t.canvas.style),
    (i = [n.getPropertyValue("direction"), n.getPropertyPriority("direction")]),
    n.setProperty("direction", e, "important"),
    (t.prevTextDirection = i));
}
function m_(t, e) {
  e !== void 0 &&
    (delete t.prevTextDirection,
    t.canvas.style.setProperty("direction", e[0], e[1]));
}
function y_(t) {
  return t === "angle"
    ? { between: t_, compare: Hk, normalize: Xn }
    : { between: eo, compare: (e, n) => e - n, normalize: (e) => e };
}
function um({ start: t, end: e, count: n, loop: i, style: r }) {
  return {
    start: t % n,
    end: e % n,
    loop: i && (e - t + 1) % n === 0,
    style: r,
  };
}
function Y6(t, e, n) {
  const { property: i, start: r, end: s } = n,
    { between: o, normalize: a } = y_(i),
    l = e.length;
  let { start: c, end: u, loop: d } = t,
    h,
    p;
  if (d) {
    for (c += l, u += l, h = 0, p = l; h < p && o(a(e[c % l][i]), r, s); ++h)
      c--, u--;
    (c %= l), (u %= l);
  }
  return u < c && (u += l), { start: c, end: u, loop: d, style: t.style };
}
function K6(t, e, n) {
  if (!n) return [t];
  const { property: i, start: r, end: s } = n,
    o = e.length,
    { compare: a, between: l, normalize: c } = y_(i),
    { start: u, end: d, loop: h, style: p } = Y6(t, e, n),
    g = [];
  let y = !1,
    v = null,
    m,
    x,
    _;
  const w = () => l(r, _, m) && a(r, _) !== 0,
    E = () => a(s, m) === 0 || l(s, _, m),
    S = () => y || w(),
    C = () => !y || E();
  for (let k = u, P = u; k <= d; ++k)
    (x = e[k % o]),
      !x.skip &&
        ((m = c(x[i])),
        m !== _ &&
          ((y = l(m, r, s)),
          v === null && S() && (v = a(m, r) === 0 ? k : P),
          v !== null &&
            C() &&
            (g.push(um({ start: v, end: k, loop: h, count: o, style: p })),
            (v = null)),
          (P = k),
          (_ = m)));
  return (
    v !== null && g.push(um({ start: v, end: d, loop: h, count: o, style: p })),
    g
  );
}
function G6(t, e) {
  const n = [],
    i = t.segments;
  for (let r = 0; r < i.length; r++) {
    const s = K6(i[r], t.points, e);
    s.length && n.push(...s);
  }
  return n;
}
function q6(t, e, n, i) {
  let r = 0,
    s = e - 1;
  if (n && !i) for (; r < e && !t[r].skip; ) r++;
  for (; r < e && t[r].skip; ) r++;
  for (r %= e, n && (s += r); s > r && t[s % e].skip; ) s--;
  return (s %= e), { start: r, end: s };
}
function X6(t, e, n, i) {
  const r = t.length,
    s = [];
  let o = e,
    a = t[e],
    l;
  for (l = e + 1; l <= n; ++l) {
    const c = t[l % r];
    c.skip || c.stop
      ? a.skip ||
        ((i = !1),
        s.push({ start: e % r, end: (l - 1) % r, loop: i }),
        (e = o = c.stop ? l : null))
      : ((o = l), a.skip && (e = l)),
      (a = c);
  }
  return o !== null && s.push({ start: e % r, end: o % r, loop: i }), s;
}
function Q6(t, e) {
  const n = t.points,
    i = t.options.spanGaps,
    r = n.length;
  if (!r) return [];
  const s = !!t._loop,
    { start: o, end: a } = q6(n, r, s, i);
  if (i === !0) return dm(t, [{ start: o, end: a, loop: s }], n, e);
  const l = a < o ? a + r : a,
    c = !!t._fullLoop && o === 0 && a === r - 1;
  return dm(t, X6(n, o, l, c), n, e);
}
function dm(t, e, n, i) {
  return !i || !i.setContext || !n ? e : J6(t, e, n, i);
}
function J6(t, e, n, i) {
  const r = t._chart.getContext(),
    s = fm(t.options),
    {
      _datasetIndex: o,
      options: { spanGaps: a },
    } = t,
    l = n.length,
    c = [];
  let u = s,
    d = e[0].start,
    h = d;
  function p(g, y, v, m) {
    const x = a ? -1 : 1;
    if (g !== y) {
      for (g += l; n[g % l].skip; ) g -= x;
      for (; n[y % l].skip; ) y += x;
      g % l !== y % l &&
        (c.push({ start: g % l, end: y % l, loop: v, style: m }),
        (u = m),
        (d = y % l));
    }
  }
  for (const g of e) {
    d = a ? d : g.start;
    let y = n[d % l],
      v;
    for (h = d + 1; h <= g.end; h++) {
      const m = n[h % l];
      (v = fm(
        i.setContext(
          hr(r, {
            type: "segment",
            p0: y,
            p1: m,
            p0DataIndex: (h - 1) % l,
            p1DataIndex: h % l,
            datasetIndex: o,
          }),
        ),
      )),
        Z6(v, u) && p(d, h - 1, g.loop, u),
        (y = m),
        (u = v);
    }
    d < h - 1 && p(d, h - 1, g.loop, u);
  }
  return c;
}
function fm(t) {
  return {
    backgroundColor: t.backgroundColor,
    borderCapStyle: t.borderCapStyle,
    borderDash: t.borderDash,
    borderDashOffset: t.borderDashOffset,
    borderJoinStyle: t.borderJoinStyle,
    borderWidth: t.borderWidth,
    borderColor: t.borderColor,
  };
}
function Z6(t, e) {
  if (!e) return !1;
  const n = [],
    i = function (r, s) {
      return Ep(s) ? (n.includes(s) || n.push(s), n.indexOf(s)) : s;
    };
  return JSON.stringify(t, i) !== JSON.stringify(e, i);
}
/*!
 * Chart.js v4.4.3
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */ class e7 {
  constructor() {
    (this._request = null),
      (this._charts = new Map()),
      (this._running = !1),
      (this._lastDate = void 0);
  }
  _notify(e, n, i, r) {
    const s = n.listeners[r],
      o = n.duration;
    s.forEach((a) =>
      a({
        chart: e,
        initial: n.initial,
        numSteps: o,
        currentStep: Math.min(i - n.start, o),
      }),
    );
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = i_.call(window, () => {
        this._update(),
          (this._request = null),
          this._running && this._refresh();
      })));
  }
  _update(e = Date.now()) {
    let n = 0;
    this._charts.forEach((i, r) => {
      if (!i.running || !i.items.length) return;
      const s = i.items;
      let o = s.length - 1,
        a = !1,
        l;
      for (; o >= 0; --o)
        (l = s[o]),
          l._active
            ? (l._total > i.duration && (i.duration = l._total),
              l.tick(e),
              (a = !0))
            : ((s[o] = s[s.length - 1]), s.pop());
      a && (r.draw(), this._notify(r, i, e, "progress")),
        s.length ||
          ((i.running = !1),
          this._notify(r, i, e, "complete"),
          (i.initial = !1)),
        (n += s.length);
    }),
      (this._lastDate = e),
      n === 0 && (this._running = !1);
  }
  _getAnims(e) {
    const n = this._charts;
    let i = n.get(e);
    return (
      i ||
        ((i = {
          running: !1,
          initial: !0,
          items: [],
          listeners: { complete: [], progress: [] },
        }),
        n.set(e, i)),
      i
    );
  }
  listen(e, n, i) {
    this._getAnims(e).listeners[n].push(i);
  }
  add(e, n) {
    !n || !n.length || this._getAnims(e).items.push(...n);
  }
  has(e) {
    return this._getAnims(e).items.length > 0;
  }
  start(e) {
    const n = this._charts.get(e);
    n &&
      ((n.running = !0),
      (n.start = Date.now()),
      (n.duration = n.items.reduce((i, r) => Math.max(i, r._duration), 0)),
      this._refresh());
  }
  running(e) {
    if (!this._running) return !1;
    const n = this._charts.get(e);
    return !(!n || !n.running || !n.items.length);
  }
  stop(e) {
    const n = this._charts.get(e);
    if (!n || !n.items.length) return;
    const i = n.items;
    let r = i.length - 1;
    for (; r >= 0; --r) i[r].cancel();
    (n.items = []), this._notify(e, n, Date.now(), "complete");
  }
  remove(e) {
    return this._charts.delete(e);
  }
}
var En = new e7();
const hm = "transparent",
  t7 = {
    boolean(t, e, n) {
      return n > 0.5 ? e : t;
    },
    color(t, e, n) {
      const i = nm(t || hm),
        r = i.valid && nm(e || hm);
      return r && r.valid ? r.mix(i, n).hexString() : e;
    },
    number(t, e, n) {
      return t + (e - t) * n;
    },
  };
class n7 {
  constructor(e, n, i, r) {
    const s = n[i];
    r = Ba([e.to, r, s, e.from]);
    const o = Ba([e.from, s, r]);
    (this._active = !0),
      (this._fn = e.fn || t7[e.type || typeof o]),
      (this._easing = vo[e.easing] || vo.linear),
      (this._start = Math.floor(Date.now() + (e.delay || 0))),
      (this._duration = this._total = Math.floor(e.duration)),
      (this._loop = !!e.loop),
      (this._target = n),
      (this._prop = i),
      (this._from = o),
      (this._to = r),
      (this._promises = void 0);
  }
  active() {
    return this._active;
  }
  update(e, n, i) {
    if (this._active) {
      this._notify(!1);
      const r = this._target[this._prop],
        s = i - this._start,
        o = this._duration - s;
      (this._start = i),
        (this._duration = Math.floor(Math.max(o, e.duration))),
        (this._total += s),
        (this._loop = !!e.loop),
        (this._to = Ba([e.to, n, r, e.from])),
        (this._from = Ba([e.from, r, n]));
    }
  }
  cancel() {
    this._active &&
      (this.tick(Date.now()), (this._active = !1), this._notify(!1));
  }
  tick(e) {
    const n = e - this._start,
      i = this._duration,
      r = this._prop,
      s = this._from,
      o = this._loop,
      a = this._to;
    let l;
    if (((this._active = s !== a && (o || n < i)), !this._active)) {
      (this._target[r] = a), this._notify(!0);
      return;
    }
    if (n < 0) {
      this._target[r] = s;
      return;
    }
    (l = (n / i) % 2),
      (l = o && l > 1 ? 2 - l : l),
      (l = this._easing(Math.min(1, Math.max(0, l)))),
      (this._target[r] = this._fn(s, a, l));
  }
  wait() {
    const e = this._promises || (this._promises = []);
    return new Promise((n, i) => {
      e.push({ res: n, rej: i });
    });
  }
  _notify(e) {
    const n = e ? "res" : "rej",
      i = this._promises || [];
    for (let r = 0; r < i.length; r++) i[r][n]();
  }
}
class v_ {
  constructor(e, n) {
    (this._chart = e), (this._properties = new Map()), this.configure(n);
  }
  configure(e) {
    if (!le(e)) return;
    const n = Object.keys(Oe.animation),
      i = this._properties;
    Object.getOwnPropertyNames(e).forEach((r) => {
      const s = e[r];
      if (!le(s)) return;
      const o = {};
      for (const a of n) o[a] = s[a];
      (($e(s.properties) && s.properties) || [r]).forEach((a) => {
        (a === r || !i.has(a)) && i.set(a, o);
      });
    });
  }
  _animateOptions(e, n) {
    const i = n.options,
      r = r7(e, i);
    if (!r) return [];
    const s = this._createAnimations(r, i);
    return (
      i.$shared &&
        i7(e.options.$animations, i).then(
          () => {
            e.options = i;
          },
          () => {},
        ),
      s
    );
  }
  _createAnimations(e, n) {
    const i = this._properties,
      r = [],
      s = e.$animations || (e.$animations = {}),
      o = Object.keys(n),
      a = Date.now();
    let l;
    for (l = o.length - 1; l >= 0; --l) {
      const c = o[l];
      if (c.charAt(0) === "$") continue;
      if (c === "options") {
        r.push(...this._animateOptions(e, n));
        continue;
      }
      const u = n[c];
      let d = s[c];
      const h = i.get(c);
      if (d)
        if (h && d.active()) {
          d.update(h, u, a);
          continue;
        } else d.cancel();
      if (!h || !h.duration) {
        e[c] = u;
        continue;
      }
      (s[c] = d = new n7(h, e, c, u)), r.push(d);
    }
    return r;
  }
  update(e, n) {
    if (this._properties.size === 0) {
      Object.assign(e, n);
      return;
    }
    const i = this._createAnimations(e, n);
    if (i.length) return En.add(this._chart, i), !0;
  }
}
function i7(t, e) {
  const n = [],
    i = Object.keys(e);
  for (let r = 0; r < i.length; r++) {
    const s = t[i[r]];
    s && s.active() && n.push(s.wait());
  }
  return Promise.all(n);
}
function r7(t, e) {
  if (!e) return;
  let n = t.options;
  if (!n) {
    t.options = e;
    return;
  }
  return (
    n.$shared &&
      (t.options = n = Object.assign({}, n, { $shared: !1, $animations: {} })),
    n
  );
}
function pm(t, e) {
  const n = (t && t.options) || {},
    i = n.reverse,
    r = n.min === void 0 ? e : 0,
    s = n.max === void 0 ? e : 0;
  return { start: i ? s : r, end: i ? r : s };
}
function s7(t, e, n) {
  if (n === !1) return !1;
  const i = pm(t, n),
    r = pm(e, n);
  return { top: r.end, right: i.end, bottom: r.start, left: i.start };
}
function o7(t) {
  let e, n, i, r;
  return (
    le(t)
      ? ((e = t.top), (n = t.right), (i = t.bottom), (r = t.left))
      : (e = n = i = r = t),
    { top: e, right: n, bottom: i, left: r, disabled: t === !1 }
  );
}
function x_(t, e) {
  const n = [],
    i = t._getSortedDatasetMetas(e);
  let r, s;
  for (r = 0, s = i.length; r < s; ++r) n.push(i[r].index);
  return n;
}
function gm(t, e, n, i = {}) {
  const r = t.keys,
    s = i.mode === "single";
  let o, a, l, c;
  if (e !== null) {
    for (o = 0, a = r.length; o < a; ++o) {
      if (((l = +r[o]), l === n)) {
        if (i.all) continue;
        break;
      }
      (c = t.values[l]), Vt(c) && (s || e === 0 || us(e) === us(c)) && (e += c);
    }
    return e;
  }
}
function a7(t, e) {
  const { iScale: n, vScale: i } = e,
    r = n.axis === "x" ? "x" : "y",
    s = i.axis === "x" ? "x" : "y",
    o = Object.keys(t),
    a = new Array(o.length);
  let l, c, u;
  for (l = 0, c = o.length; l < c; ++l)
    (u = o[l]), (a[l] = { [r]: u, [s]: t[u] });
  return a;
}
function mm(t, e) {
  const n = t && t.options.stacked;
  return n || (n === void 0 && e.stack !== void 0);
}
function l7(t, e, n) {
  return `${t.id}.${e.id}.${n.stack || n.type}`;
}
function c7(t) {
  const { min: e, max: n, minDefined: i, maxDefined: r } = t.getUserBounds();
  return {
    min: i ? e : Number.NEGATIVE_INFINITY,
    max: r ? n : Number.POSITIVE_INFINITY,
  };
}
function u7(t, e, n) {
  const i = t[e] || (t[e] = {});
  return i[n] || (i[n] = {});
}
function ym(t, e, n, i) {
  for (const r of e.getMatchingVisibleMetas(i).reverse()) {
    const s = t[r.index];
    if ((n && s > 0) || (!n && s < 0)) return r.index;
  }
  return null;
}
function vm(t, e) {
  const { chart: n, _cachedMeta: i } = t,
    r = n._stacks || (n._stacks = {}),
    { iScale: s, vScale: o, index: a } = i,
    l = s.axis,
    c = o.axis,
    u = l7(s, o, i),
    d = e.length;
  let h;
  for (let p = 0; p < d; ++p) {
    const g = e[p],
      { [l]: y, [c]: v } = g,
      m = g._stacks || (g._stacks = {});
    (h = m[c] = u7(r, u, y)),
      (h[a] = v),
      (h._top = ym(h, o, !0, i.type)),
      (h._bottom = ym(h, o, !1, i.type));
    const x = h._visualValues || (h._visualValues = {});
    x[a] = v;
  }
}
function Vu(t, e) {
  const n = t.scales;
  return Object.keys(n)
    .filter((i) => n[i].axis === e)
    .shift();
}
function d7(t, e) {
  return hr(t, {
    active: !1,
    dataset: void 0,
    datasetIndex: e,
    index: e,
    mode: "default",
    type: "dataset",
  });
}
function f7(t, e, n) {
  return hr(t, {
    active: !1,
    dataIndex: e,
    parsed: void 0,
    raw: void 0,
    element: n,
    index: e,
    mode: "default",
    type: "data",
  });
}
function Bs(t, e) {
  const n = t.controller.index,
    i = t.vScale && t.vScale.axis;
  if (i) {
    e = e || t._parsed;
    for (const r of e) {
      const s = r._stacks;
      if (!s || s[i] === void 0 || s[i][n] === void 0) return;
      delete s[i][n],
        s[i]._visualValues !== void 0 &&
          s[i]._visualValues[n] !== void 0 &&
          delete s[i]._visualValues[n];
    }
  }
}
const Uu = (t) => t === "reset" || t === "none",
  xm = (t, e) => (e ? t : Object.assign({}, t)),
  h7 = (t, e, n) =>
    t && !e.hidden && e._stacked && { keys: x_(n, !0), values: null };
class bo {
  constructor(e, n) {
    (this.chart = e),
      (this._ctx = e.ctx),
      (this.index = n),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.supportsDecimation = !1),
      (this.$context = void 0),
      (this._syncList = []),
      (this.datasetElementType = new.target.datasetElementType),
      (this.dataElementType = new.target.dataElementType),
      this.initialize();
  }
  initialize() {
    const e = this._cachedMeta;
    this.configure(),
      this.linkScales(),
      (e._stacked = mm(e.vScale, e)),
      this.addElements(),
      this.options.fill &&
        !this.chart.isPluginEnabled("filler") &&
        console.warn(
          "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options",
        );
  }
  updateIndex(e) {
    this.index !== e && Bs(this._cachedMeta), (this.index = e);
  }
  linkScales() {
    const e = this.chart,
      n = this._cachedMeta,
      i = this.getDataset(),
      r = (d, h, p, g) => (d === "x" ? h : d === "r" ? g : p),
      s = (n.xAxisID = re(i.xAxisID, Vu(e, "x"))),
      o = (n.yAxisID = re(i.yAxisID, Vu(e, "y"))),
      a = (n.rAxisID = re(i.rAxisID, Vu(e, "r"))),
      l = n.indexAxis,
      c = (n.iAxisID = r(l, s, o, a)),
      u = (n.vAxisID = r(l, o, s, a));
    (n.xScale = this.getScaleForId(s)),
      (n.yScale = this.getScaleForId(o)),
      (n.rScale = this.getScaleForId(a)),
      (n.iScale = this.getScaleForId(c)),
      (n.vScale = this.getScaleForId(u));
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(e) {
    return this.chart.scales[e];
  }
  _getOtherScale(e) {
    const n = this._cachedMeta;
    return e === n.iScale ? n.vScale : n.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const e = this._cachedMeta;
    this._data && Zg(this._data, this), e._stacked && Bs(e);
  }
  _dataCheck() {
    const e = this.getDataset(),
      n = e.data || (e.data = []),
      i = this._data;
    if (le(n)) {
      const r = this._cachedMeta;
      this._data = a7(n, r);
    } else if (i !== n) {
      if (i) {
        Zg(i, this);
        const r = this._cachedMeta;
        Bs(r), (r._parsed = []);
      }
      n && Object.isExtensible(n) && Kk(n, this),
        (this._syncList = []),
        (this._data = n);
    }
  }
  addElements() {
    const e = this._cachedMeta;
    this._dataCheck(),
      this.datasetElementType && (e.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(e) {
    const n = this._cachedMeta,
      i = this.getDataset();
    let r = !1;
    this._dataCheck();
    const s = n._stacked;
    (n._stacked = mm(n.vScale, n)),
      n.stack !== i.stack && ((r = !0), Bs(n), (n.stack = i.stack)),
      this._resyncElements(e),
      (r || s !== n._stacked) && vm(this, n._parsed);
  }
  configure() {
    const e = this.chart.config,
      n = e.datasetScopeKeys(this._type),
      i = e.getOptionScopes(this.getDataset(), n, !0);
    (this.options = e.createResolver(i, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {});
  }
  parse(e, n) {
    const { _cachedMeta: i, _data: r } = this,
      { iScale: s, _stacked: o } = i,
      a = s.axis;
    let l = e === 0 && n === r.length ? !0 : i._sorted,
      c = e > 0 && i._parsed[e - 1],
      u,
      d,
      h;
    if (this._parsing === !1) (i._parsed = r), (i._sorted = !0), (h = r);
    else {
      $e(r[e])
        ? (h = this.parseArrayData(i, r, e, n))
        : le(r[e])
        ? (h = this.parseObjectData(i, r, e, n))
        : (h = this.parsePrimitiveData(i, r, e, n));
      const p = () => d[a] === null || (c && d[a] < c[a]);
      for (u = 0; u < n; ++u)
        (i._parsed[u + e] = d = h[u]), l && (p() && (l = !1), (c = d));
      i._sorted = l;
    }
    o && vm(this, h);
  }
  parsePrimitiveData(e, n, i, r) {
    const { iScale: s, vScale: o } = e,
      a = s.axis,
      l = o.axis,
      c = s.getLabels(),
      u = s === o,
      d = new Array(r);
    let h, p, g;
    for (h = 0, p = r; h < p; ++h)
      (g = h + i),
        (d[h] = { [a]: u || s.parse(c[g], g), [l]: o.parse(n[g], g) });
    return d;
  }
  parseArrayData(e, n, i, r) {
    const { xScale: s, yScale: o } = e,
      a = new Array(r);
    let l, c, u, d;
    for (l = 0, c = r; l < c; ++l)
      (u = l + i),
        (d = n[u]),
        (a[l] = { x: s.parse(d[0], u), y: o.parse(d[1], u) });
    return a;
  }
  parseObjectData(e, n, i, r) {
    const { xScale: s, yScale: o } = e,
      { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing,
      c = new Array(r);
    let u, d, h, p;
    for (u = 0, d = r; u < d; ++u)
      (h = u + i),
        (p = n[h]),
        (c[u] = { x: s.parse(lc(p, a), h), y: o.parse(lc(p, l), h) });
    return c;
  }
  getParsed(e) {
    return this._cachedMeta._parsed[e];
  }
  getDataElement(e) {
    return this._cachedMeta.data[e];
  }
  applyStack(e, n, i) {
    const r = this.chart,
      s = this._cachedMeta,
      o = n[e.axis],
      a = { keys: x_(r, !0), values: n._stacks[e.axis]._visualValues };
    return gm(a, o, s.index, { mode: i });
  }
  updateRangeFromParsed(e, n, i, r) {
    const s = i[n.axis];
    let o = s === null ? NaN : s;
    const a = r && i._stacks[n.axis];
    r && a && ((r.values = a), (o = gm(r, s, this._cachedMeta.index))),
      (e.min = Math.min(e.min, o)),
      (e.max = Math.max(e.max, o));
  }
  getMinMax(e, n) {
    const i = this._cachedMeta,
      r = i._parsed,
      s = i._sorted && e === i.iScale,
      o = r.length,
      a = this._getOtherScale(e),
      l = h7(n, i, this.chart),
      c = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: u, max: d } = c7(a);
    let h, p;
    function g() {
      p = r[h];
      const y = p[a.axis];
      return !Vt(p[e.axis]) || u > y || d < y;
    }
    for (
      h = 0;
      h < o && !(!g() && (this.updateRangeFromParsed(c, e, p, l), s));
      ++h
    );
    if (s) {
      for (h = o - 1; h >= 0; --h)
        if (!g()) {
          this.updateRangeFromParsed(c, e, p, l);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(e) {
    const n = this._cachedMeta._parsed,
      i = [];
    let r, s, o;
    for (r = 0, s = n.length; r < s; ++r)
      (o = n[r][e.axis]), Vt(o) && i.push(o);
    return i;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(e) {
    const n = this._cachedMeta,
      i = n.iScale,
      r = n.vScale,
      s = this.getParsed(e);
    return {
      label: i ? "" + i.getLabelForValue(s[i.axis]) : "",
      value: r ? "" + r.getLabelForValue(s[r.axis]) : "",
    };
  }
  _update(e) {
    const n = this._cachedMeta;
    this.update(e || "default"),
      (n._clip = o7(
        re(this.options.clip, s7(n.xScale, n.yScale, this.getMaxOverflow())),
      ));
  }
  update(e) {}
  draw() {
    const e = this._ctx,
      n = this.chart,
      i = this._cachedMeta,
      r = i.data || [],
      s = n.chartArea,
      o = [],
      a = this._drawStart || 0,
      l = this._drawCount || r.length - a,
      c = this.options.drawActiveElementsOnTop;
    let u;
    for (i.dataset && i.dataset.draw(e, s, a, l), u = a; u < a + l; ++u) {
      const d = r[u];
      d.hidden || (d.active && c ? o.push(d) : d.draw(e, s));
    }
    for (u = 0; u < o.length; ++u) o[u].draw(e, s);
  }
  getStyle(e, n) {
    const i = n ? "active" : "default";
    return e === void 0 && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(i)
      : this.resolveDataElementOptions(e || 0, i);
  }
  getContext(e, n, i) {
    const r = this.getDataset();
    let s;
    if (e >= 0 && e < this._cachedMeta.data.length) {
      const o = this._cachedMeta.data[e];
      (s = o.$context || (o.$context = f7(this.getContext(), e, o))),
        (s.parsed = this.getParsed(e)),
        (s.raw = r.data[e]),
        (s.index = s.dataIndex = e);
    } else
      (s =
        this.$context ||
        (this.$context = d7(this.chart.getContext(), this.index))),
        (s.dataset = r),
        (s.index = s.datasetIndex = this.index);
    return (s.active = !!n), (s.mode = i), s;
  }
  resolveDatasetElementOptions(e) {
    return this._resolveElementOptions(this.datasetElementType.id, e);
  }
  resolveDataElementOptions(e, n) {
    return this._resolveElementOptions(this.dataElementType.id, n, e);
  }
  _resolveElementOptions(e, n = "default", i) {
    const r = n === "active",
      s = this._cachedDataOpts,
      o = e + "-" + n,
      a = s[o],
      l = this.enableOptionSharing && cc(i);
    if (a) return xm(a, l);
    const c = this.chart.config,
      u = c.datasetElementScopeKeys(this._type, e),
      d = r ? [`${e}Hover`, "hover", e, ""] : [e, ""],
      h = c.getOptionScopes(this.getDataset(), u),
      p = Object.keys(Oe.elements[e]),
      g = () => this.getContext(i, r, n),
      y = c.resolveNamedOptions(h, p, g, d);
    return y.$shared && ((y.$shared = l), (s[o] = Object.freeze(xm(y, l)))), y;
  }
  _resolveAnimations(e, n, i) {
    const r = this.chart,
      s = this._cachedDataOpts,
      o = `animation-${n}`,
      a = s[o];
    if (a) return a;
    let l;
    if (r.options.animation !== !1) {
      const u = this.chart.config,
        d = u.datasetAnimationScopeKeys(this._type, n),
        h = u.getOptionScopes(this.getDataset(), d);
      l = u.createResolver(h, this.getContext(e, i, n));
    }
    const c = new v_(r, l && l.animations);
    return l && l._cacheable && (s[o] = Object.freeze(c)), c;
  }
  getSharedOptions(e) {
    if (e.$shared)
      return (
        this._sharedOptions || (this._sharedOptions = Object.assign({}, e))
      );
  }
  includeOptions(e, n) {
    return !n || Uu(e) || this.chart._animationsDisabled;
  }
  _getSharedOptions(e, n) {
    const i = this.resolveDataElementOptions(e, n),
      r = this._sharedOptions,
      s = this.getSharedOptions(i),
      o = this.includeOptions(n, s) || s !== r;
    return (
      this.updateSharedOptions(s, n, i), { sharedOptions: s, includeOptions: o }
    );
  }
  updateElement(e, n, i, r) {
    Uu(r) ? Object.assign(e, i) : this._resolveAnimations(n, r).update(e, i);
  }
  updateSharedOptions(e, n, i) {
    e && !Uu(n) && this._resolveAnimations(void 0, n).update(e, i);
  }
  _setStyle(e, n, i, r) {
    e.active = r;
    const s = this.getStyle(n, r);
    this._resolveAnimations(n, i, r).update(e, {
      options: (!r && this.getSharedOptions(s)) || s,
    });
  }
  removeHoverStyle(e, n, i) {
    this._setStyle(e, i, "active", !1);
  }
  setHoverStyle(e, n, i) {
    this._setStyle(e, i, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const e = this._cachedMeta.dataset;
    e && this._setStyle(e, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const e = this._cachedMeta.dataset;
    e && this._setStyle(e, void 0, "active", !0);
  }
  _resyncElements(e) {
    const n = this._data,
      i = this._cachedMeta.data;
    for (const [a, l, c] of this._syncList) this[a](l, c);
    this._syncList = [];
    const r = i.length,
      s = n.length,
      o = Math.min(s, r);
    o && this.parse(0, o),
      s > r
        ? this._insertElements(r, s - r, e)
        : s < r && this._removeElements(s, r - s);
  }
  _insertElements(e, n, i = !0) {
    const r = this._cachedMeta,
      s = r.data,
      o = e + n;
    let a;
    const l = (c) => {
      for (c.length += n, a = c.length - 1; a >= o; a--) c[a] = c[a - n];
    };
    for (l(s), a = e; a < o; ++a) s[a] = new this.dataElementType();
    this._parsing && l(r._parsed),
      this.parse(e, n),
      i && this.updateElements(s, e, n, "reset");
  }
  updateElements(e, n, i, r) {}
  _removeElements(e, n) {
    const i = this._cachedMeta;
    if (this._parsing) {
      const r = i._parsed.splice(e, n);
      i._stacked && Bs(i, r);
    }
    i.data.splice(e, n);
  }
  _sync(e) {
    if (this._parsing) this._syncList.push(e);
    else {
      const [n, i, r] = e;
      this[n](i, r);
    }
    this.chart._dataChanges.push([this.index, ...e]);
  }
  _onDataPush() {
    const e = arguments.length;
    this._sync(["_insertElements", this.getDataset().data.length - e, e]);
  }
  _onDataPop() {
    this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(["_removeElements", 0, 1]);
  }
  _onDataSplice(e, n) {
    n && this._sync(["_removeElements", e, n]);
    const i = arguments.length - 2;
    i && this._sync(["_insertElements", e, i]);
  }
  _onDataUnshift() {
    this._sync(["_insertElements", 0, arguments.length]);
  }
}
te(bo, "defaults", {}),
  te(bo, "datasetElementType", null),
  te(bo, "dataElementType", null);
class vl extends bo {
  initialize() {
    (this.enableOptionSharing = !0),
      (this.supportsDecimation = !0),
      super.initialize();
  }
  update(e) {
    const n = this._cachedMeta,
      { dataset: i, data: r = [], _dataset: s } = n,
      o = this.chart._animationsDisabled;
    let { start: a, count: l } = Qk(n, r, o);
    (this._drawStart = a),
      (this._drawCount = l),
      Jk(n) && ((a = 0), (l = r.length)),
      (i._chart = this.chart),
      (i._datasetIndex = this.index),
      (i._decimated = !!s._decimated),
      (i.points = r);
    const c = this.resolveDatasetElementOptions(e);
    this.options.showLine || (c.borderWidth = 0),
      (c.segment = this.options.segment),
      this.updateElement(i, void 0, { animated: !o, options: c }, e),
      this.updateElements(r, a, l, e);
  }
  updateElements(e, n, i, r) {
    const s = r === "reset",
      { iScale: o, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta,
      { sharedOptions: u, includeOptions: d } = this._getSharedOptions(n, r),
      h = o.axis,
      p = a.axis,
      { spanGaps: g, segment: y } = this.options,
      v = Ko(g) ? g : Number.POSITIVE_INFINITY,
      m = this.chart._animationsDisabled || s || r === "none",
      x = n + i,
      _ = e.length;
    let w = n > 0 && this.getParsed(n - 1);
    for (let E = 0; E < _; ++E) {
      const S = e[E],
        C = m ? S : {};
      if (E < n || E >= x) {
        C.skip = !0;
        continue;
      }
      const k = this.getParsed(E),
        P = Ce(k[p]),
        j = (C[h] = o.getPixelForValue(k[h], E)),
        $ = (C[p] =
          s || P
            ? a.getBasePixel()
            : a.getPixelForValue(l ? this.applyStack(a, k, l) : k[p], E));
      (C.skip = isNaN(j) || isNaN($) || P),
        (C.stop = E > 0 && Math.abs(k[h] - w[h]) > v),
        y && ((C.parsed = k), (C.raw = c.data[E])),
        d &&
          (C.options =
            u || this.resolveDataElementOptions(E, S.active ? "active" : r)),
        m || this.updateElement(S, E, C, r),
        (w = k);
    }
  }
  getMaxOverflow() {
    const e = this._cachedMeta,
      n = e.dataset,
      i = (n.options && n.options.borderWidth) || 0,
      r = e.data || [];
    if (!r.length) return i;
    const s = r[0].size(this.resolveDataElementOptions(0)),
      o = r[r.length - 1].size(this.resolveDataElementOptions(r.length - 1));
    return Math.max(i, s, o) / 2;
  }
  draw() {
    const e = this._cachedMeta;
    e.dataset.updateControlPoints(this.chart.chartArea, e.iScale.axis),
      super.draw();
  }
}
te(vl, "id", "line"),
  te(vl, "defaults", {
    datasetElementType: "line",
    dataElementType: "point",
    showLine: !0,
    spanGaps: !1,
  }),
  te(vl, "overrides", {
    scales: { _index_: { type: "category" }, _value_: { type: "linear" } },
  });
function Di() {
  throw new Error(
    "This method is not implemented: Check that a complete date adapter is provided.",
  );
}
class Pp {
  constructor(e) {
    te(this, "options");
    this.options = e || {};
  }
  static override(e) {
    Object.assign(Pp.prototype, e);
  }
  init() {}
  formats() {
    return Di();
  }
  parse() {
    return Di();
  }
  format() {
    return Di();
  }
  add() {
    return Di();
  }
  diff() {
    return Di();
  }
  startOf() {
    return Di();
  }
  endOf() {
    return Di();
  }
}
var p7 = { _date: Pp };
function g7(t, e, n, i) {
  const { controller: r, data: s, _sorted: o } = t,
    a = r._cachedMeta.iScale;
  if (a && e === a.axis && e !== "r" && o && s.length) {
    const l = a._reversePixels ? Uk : Ui;
    if (i) {
      if (r._sharedOptions) {
        const c = s[0],
          u = typeof c.getRange == "function" && c.getRange(e);
        if (u) {
          const d = l(s, e, n - u),
            h = l(s, e, n + u);
          return { lo: d.lo, hi: h.hi };
        }
      }
    } else return l(s, e, n);
  }
  return { lo: 0, hi: s.length - 1 };
}
function ua(t, e, n, i, r) {
  const s = t.getSortedVisibleDatasetMetas(),
    o = n[e];
  for (let a = 0, l = s.length; a < l; ++a) {
    const { index: c, data: u } = s[a],
      { lo: d, hi: h } = g7(s[a], e, o, r);
    for (let p = d; p <= h; ++p) {
      const g = u[p];
      g.skip || i(g, c, p);
    }
  }
}
function m7(t) {
  const e = t.indexOf("x") !== -1,
    n = t.indexOf("y") !== -1;
  return function (i, r) {
    const s = e ? Math.abs(i.x - r.x) : 0,
      o = n ? Math.abs(i.y - r.y) : 0;
    return Math.sqrt(Math.pow(s, 2) + Math.pow(o, 2));
  };
}
function Yu(t, e, n, i, r) {
  const s = [];
  return (
    (!r && !t.isPointInArea(e)) ||
      ua(
        t,
        n,
        e,
        function (a, l, c) {
          (!r && !Go(a, t.chartArea, 0)) ||
            (a.inRange(e.x, e.y, i) &&
              s.push({ element: a, datasetIndex: l, index: c }));
        },
        !0,
      ),
    s
  );
}
function y7(t, e, n, i) {
  let r = [];
  function s(o, a, l) {
    const { startAngle: c, endAngle: u } = o.getProps(
        ["startAngle", "endAngle"],
        i,
      ),
      { angle: d } = Wk(o, { x: e.x, y: e.y });
    t_(d, c, u) && r.push({ element: o, datasetIndex: a, index: l });
  }
  return ua(t, n, e, s), r;
}
function v7(t, e, n, i, r, s) {
  let o = [];
  const a = m7(n);
  let l = Number.POSITIVE_INFINITY;
  function c(u, d, h) {
    const p = u.inRange(e.x, e.y, r);
    if (i && !p) return;
    const g = u.getCenterPoint(r);
    if (!(!!s || t.isPointInArea(g)) && !p) return;
    const v = a(e, g);
    v < l
      ? ((o = [{ element: u, datasetIndex: d, index: h }]), (l = v))
      : v === l && o.push({ element: u, datasetIndex: d, index: h });
  }
  return ua(t, n, e, c), o;
}
function Ku(t, e, n, i, r, s) {
  return !s && !t.isPointInArea(e)
    ? []
    : n === "r" && !i
    ? y7(t, e, n, r)
    : v7(t, e, n, i, r, s);
}
function _m(t, e, n, i, r) {
  const s = [],
    o = n === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return (
    ua(t, n, e, (l, c, u) => {
      l[o](e[n], r) &&
        (s.push({ element: l, datasetIndex: c, index: u }),
        (a = a || l.inRange(e.x, e.y, r)));
    }),
    i && !a ? [] : s
  );
}
var x7 = {
  evaluateInteractionItems: ua,
  modes: {
    index(t, e, n, i) {
      const r = $i(e, t),
        s = n.axis || "x",
        o = n.includeInvisible || !1,
        a = n.intersect ? Yu(t, r, s, i, o) : Ku(t, r, s, !1, i, o),
        l = [];
      return a.length
        ? (t.getSortedVisibleDatasetMetas().forEach((c) => {
            const u = a[0].index,
              d = c.data[u];
            d &&
              !d.skip &&
              l.push({ element: d, datasetIndex: c.index, index: u });
          }),
          l)
        : [];
    },
    dataset(t, e, n, i) {
      const r = $i(e, t),
        s = n.axis || "xy",
        o = n.includeInvisible || !1;
      let a = n.intersect ? Yu(t, r, s, i, o) : Ku(t, r, s, !1, i, o);
      if (a.length > 0) {
        const l = a[0].datasetIndex,
          c = t.getDatasetMeta(l).data;
        a = [];
        for (let u = 0; u < c.length; ++u)
          a.push({ element: c[u], datasetIndex: l, index: u });
      }
      return a;
    },
    point(t, e, n, i) {
      const r = $i(e, t),
        s = n.axis || "xy",
        o = n.includeInvisible || !1;
      return Yu(t, r, s, i, o);
    },
    nearest(t, e, n, i) {
      const r = $i(e, t),
        s = n.axis || "xy",
        o = n.includeInvisible || !1;
      return Ku(t, r, s, n.intersect, i, o);
    },
    x(t, e, n, i) {
      const r = $i(e, t);
      return _m(t, r, "x", n.intersect, i);
    },
    y(t, e, n, i) {
      const r = $i(e, t);
      return _m(t, r, "y", n.intersect, i);
    },
  },
};
const __ = ["left", "top", "right", "bottom"];
function zs(t, e) {
  return t.filter((n) => n.pos === e);
}
function bm(t, e) {
  return t.filter((n) => __.indexOf(n.pos) === -1 && n.box.axis === e);
}
function Ws(t, e) {
  return t.sort((n, i) => {
    const r = e ? i : n,
      s = e ? n : i;
    return r.weight === s.weight ? r.index - s.index : r.weight - s.weight;
  });
}
function _7(t) {
  const e = [];
  let n, i, r, s, o, a;
  for (n = 0, i = (t || []).length; n < i; ++n)
    (r = t[n]),
      ({
        position: s,
        options: { stack: o, stackWeight: a = 1 },
      } = r),
      e.push({
        index: n,
        box: r,
        pos: s,
        horizontal: r.isHorizontal(),
        weight: r.weight,
        stack: o && s + o,
        stackWeight: a,
      });
  return e;
}
function b7(t) {
  const e = {};
  for (const n of t) {
    const { stack: i, pos: r, stackWeight: s } = n;
    if (!i || !__.includes(r)) continue;
    const o = e[i] || (e[i] = { count: 0, placed: 0, weight: 0, size: 0 });
    o.count++, (o.weight += s);
  }
  return e;
}
function w7(t, e) {
  const n = b7(t),
    { vBoxMaxWidth: i, hBoxMaxHeight: r } = e;
  let s, o, a;
  for (s = 0, o = t.length; s < o; ++s) {
    a = t[s];
    const { fullSize: l } = a.box,
      c = n[a.stack],
      u = c && a.stackWeight / c.weight;
    a.horizontal
      ? ((a.width = u ? u * i : l && e.availableWidth), (a.height = r))
      : ((a.width = i), (a.height = u ? u * r : l && e.availableHeight));
  }
  return n;
}
function E7(t) {
  const e = _7(t),
    n = Ws(
      e.filter((c) => c.box.fullSize),
      !0,
    ),
    i = Ws(zs(e, "left"), !0),
    r = Ws(zs(e, "right")),
    s = Ws(zs(e, "top"), !0),
    o = Ws(zs(e, "bottom")),
    a = bm(e, "x"),
    l = bm(e, "y");
  return {
    fullSize: n,
    leftAndTop: i.concat(s),
    rightAndBottom: r.concat(l).concat(o).concat(a),
    chartArea: zs(e, "chartArea"),
    vertical: i.concat(r).concat(l),
    horizontal: s.concat(o).concat(a),
  };
}
function wm(t, e, n, i) {
  return Math.max(t[n], e[n]) + Math.max(t[i], e[i]);
}
function b_(t, e) {
  (t.top = Math.max(t.top, e.top)),
    (t.left = Math.max(t.left, e.left)),
    (t.bottom = Math.max(t.bottom, e.bottom)),
    (t.right = Math.max(t.right, e.right));
}
function S7(t, e, n, i) {
  const { pos: r, box: s } = n,
    o = t.maxPadding;
  if (!le(r)) {
    n.size && (t[r] -= n.size);
    const d = i[n.stack] || { size: 0, count: 1 };
    (d.size = Math.max(d.size, n.horizontal ? s.height : s.width)),
      (n.size = d.size / d.count),
      (t[r] += n.size);
  }
  s.getPadding && b_(o, s.getPadding());
  const a = Math.max(0, e.outerWidth - wm(o, t, "left", "right")),
    l = Math.max(0, e.outerHeight - wm(o, t, "top", "bottom")),
    c = a !== t.w,
    u = l !== t.h;
  return (
    (t.w = a),
    (t.h = l),
    n.horizontal ? { same: c, other: u } : { same: u, other: c }
  );
}
function C7(t) {
  const e = t.maxPadding;
  function n(i) {
    const r = Math.max(e[i] - t[i], 0);
    return (t[i] += r), r;
  }
  (t.y += n("top")), (t.x += n("left")), n("right"), n("bottom");
}
function k7(t, e) {
  const n = e.maxPadding;
  function i(r) {
    const s = { left: 0, top: 0, right: 0, bottom: 0 };
    return (
      r.forEach((o) => {
        s[o] = Math.max(e[o], n[o]);
      }),
      s
    );
  }
  return i(t ? ["left", "right"] : ["top", "bottom"]);
}
function to(t, e, n, i) {
  const r = [];
  let s, o, a, l, c, u;
  for (s = 0, o = t.length, c = 0; s < o; ++s) {
    (a = t[s]),
      (l = a.box),
      l.update(a.width || e.w, a.height || e.h, k7(a.horizontal, e));
    const { same: d, other: h } = S7(e, n, a, i);
    (c |= d && r.length), (u = u || h), l.fullSize || r.push(a);
  }
  return (c && to(r, e, n, i)) || u;
}
function Ha(t, e, n, i, r) {
  (t.top = n),
    (t.left = e),
    (t.right = e + i),
    (t.bottom = n + r),
    (t.width = i),
    (t.height = r);
}
function Em(t, e, n, i) {
  const r = n.padding;
  let { x: s, y: o } = e;
  for (const a of t) {
    const l = a.box,
      c = i[a.stack] || { count: 1, placed: 0, weight: 1 },
      u = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const d = e.w * u,
        h = c.size || l.height;
      cc(c.start) && (o = c.start),
        l.fullSize
          ? Ha(l, r.left, o, n.outerWidth - r.right - r.left, h)
          : Ha(l, e.left + c.placed, o, d, h),
        (c.start = o),
        (c.placed += d),
        (o = l.bottom);
    } else {
      const d = e.h * u,
        h = c.size || l.width;
      cc(c.start) && (s = c.start),
        l.fullSize
          ? Ha(l, s, r.top, h, n.outerHeight - r.bottom - r.top)
          : Ha(l, s, e.top + c.placed, h, d),
        (c.start = s),
        (c.placed += d),
        (s = l.right);
    }
  }
  (e.x = s), (e.y = o);
}
var Ft = {
  addBox(t, e) {
    t.boxes || (t.boxes = []),
      (e.fullSize = e.fullSize || !1),
      (e.position = e.position || "top"),
      (e.weight = e.weight || 0),
      (e._layers =
        e._layers ||
        function () {
          return [
            {
              z: 0,
              draw(n) {
                e.draw(n);
              },
            },
          ];
        }),
      t.boxes.push(e);
  },
  removeBox(t, e) {
    const n = t.boxes ? t.boxes.indexOf(e) : -1;
    n !== -1 && t.boxes.splice(n, 1);
  },
  configure(t, e, n) {
    (e.fullSize = n.fullSize), (e.position = n.position), (e.weight = n.weight);
  },
  update(t, e, n, i) {
    if (!t) return;
    const r = Ut(t.options.layout.padding),
      s = Math.max(e - r.width, 0),
      o = Math.max(n - r.height, 0),
      a = E7(t.boxes),
      l = a.vertical,
      c = a.horizontal;
    ue(t.boxes, (y) => {
      typeof y.beforeLayout == "function" && y.beforeLayout();
    });
    const u =
        l.reduce(
          (y, v) => (v.box.options && v.box.options.display === !1 ? y : y + 1),
          0,
        ) || 1,
      d = Object.freeze({
        outerWidth: e,
        outerHeight: n,
        padding: r,
        availableWidth: s,
        availableHeight: o,
        vBoxMaxWidth: s / 2 / u,
        hBoxMaxHeight: o / 2,
      }),
      h = Object.assign({}, r);
    b_(h, Ut(i));
    const p = Object.assign(
        { maxPadding: h, w: s, h: o, x: r.left, y: r.top },
        r,
      ),
      g = w7(l.concat(c), d);
    to(a.fullSize, p, d, g),
      to(l, p, d, g),
      to(c, p, d, g) && to(l, p, d, g),
      C7(p),
      Em(a.leftAndTop, p, d, g),
      (p.x += p.w),
      (p.y += p.h),
      Em(a.rightAndBottom, p, d, g),
      (t.chartArea = {
        left: p.left,
        top: p.top,
        right: p.left + p.w,
        bottom: p.top + p.h,
        height: p.h,
        width: p.w,
      }),
      ue(a.chartArea, (y) => {
        const v = y.box;
        Object.assign(v, t.chartArea),
          v.update(p.w, p.h, { left: 0, top: 0, right: 0, bottom: 0 });
      });
  },
};
class w_ {
  acquireContext(e, n) {}
  releaseContext(e) {
    return !1;
  }
  addEventListener(e, n, i) {}
  removeEventListener(e, n, i) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(e, n, i, r) {
    return (
      (n = Math.max(0, n || e.width)),
      (i = i || e.height),
      { width: n, height: Math.max(0, r ? Math.floor(n / r) : i) }
    );
  }
  isAttached(e) {
    return !0;
  }
  updateConfig(e) {}
}
class O7 extends w_ {
  acquireContext(e) {
    return (e && e.getContext && e.getContext("2d")) || null;
  }
  updateConfig(e) {
    e.options.animation = !1;
  }
}
const xl = "$chartjs",
  T7 = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout",
  },
  Sm = (t) => t === null || t === "";
function N7(t, e) {
  const n = t.style,
    i = t.getAttribute("height"),
    r = t.getAttribute("width");
  if (
    ((t[xl] = {
      initial: {
        height: i,
        width: r,
        style: { display: n.display, height: n.height, width: n.width },
      },
    }),
    (n.display = n.display || "block"),
    (n.boxSizing = n.boxSizing || "border-box"),
    Sm(r))
  ) {
    const s = cm(t, "width");
    s !== void 0 && (t.width = s);
  }
  if (Sm(i))
    if (t.style.height === "") t.height = t.width / (e || 2);
    else {
      const s = cm(t, "height");
      s !== void 0 && (t.height = s);
    }
  return t;
}
const E_ = z6 ? { passive: !0 } : !1;
function A7(t, e, n) {
  t && t.addEventListener(e, n, E_);
}
function P7(t, e, n) {
  t && t.canvas && t.canvas.removeEventListener(e, n, E_);
}
function L7(t, e) {
  const n = T7[t.type] || t.type,
    { x: i, y: r } = $i(t, e);
  return {
    type: n,
    chart: e,
    native: t,
    x: i !== void 0 ? i : null,
    y: r !== void 0 ? r : null,
  };
}
function fc(t, e) {
  for (const n of t) if (n === e || n.contains(e)) return !0;
}
function j7(t, e, n) {
  const i = t.canvas,
    r = new MutationObserver((s) => {
      let o = !1;
      for (const a of s)
        (o = o || fc(a.addedNodes, i)), (o = o && !fc(a.removedNodes, i));
      o && n();
    });
  return r.observe(document, { childList: !0, subtree: !0 }), r;
}
function D7(t, e, n) {
  const i = t.canvas,
    r = new MutationObserver((s) => {
      let o = !1;
      for (const a of s)
        (o = o || fc(a.removedNodes, i)), (o = o && !fc(a.addedNodes, i));
      o && n();
    });
  return r.observe(document, { childList: !0, subtree: !0 }), r;
}
const Xo = new Map();
let Cm = 0;
function S_() {
  const t = window.devicePixelRatio;
  t !== Cm &&
    ((Cm = t),
    Xo.forEach((e, n) => {
      n.currentDevicePixelRatio !== t && e();
    }));
}
function R7(t, e) {
  Xo.size || window.addEventListener("resize", S_), Xo.set(t, e);
}
function M7(t) {
  Xo.delete(t), Xo.size || window.removeEventListener("resize", S_);
}
function I7(t, e, n) {
  const i = t.canvas,
    r = i && Ap(i);
  if (!r) return;
  const s = r_((a, l) => {
      const c = r.clientWidth;
      n(a, l), c < r.clientWidth && n();
    }, window),
    o = new ResizeObserver((a) => {
      const l = a[0],
        c = l.contentRect.width,
        u = l.contentRect.height;
      (c === 0 && u === 0) || s(c, u);
    });
  return o.observe(r), R7(t, s), o;
}
function Gu(t, e, n) {
  n && n.disconnect(), e === "resize" && M7(t);
}
function $7(t, e, n) {
  const i = t.canvas,
    r = r_((s) => {
      t.ctx !== null && n(L7(s, t));
    }, t);
  return A7(i, e, r), r;
}
class F7 extends w_ {
  acquireContext(e, n) {
    const i = e && e.getContext && e.getContext("2d");
    return i && i.canvas === e ? (N7(e, n), i) : null;
  }
  releaseContext(e) {
    const n = e.canvas;
    if (!n[xl]) return !1;
    const i = n[xl].initial;
    ["height", "width"].forEach((s) => {
      const o = i[s];
      Ce(o) ? n.removeAttribute(s) : n.setAttribute(s, o);
    });
    const r = i.style || {};
    return (
      Object.keys(r).forEach((s) => {
        n.style[s] = r[s];
      }),
      (n.width = n.width),
      delete n[xl],
      !0
    );
  }
  addEventListener(e, n, i) {
    this.removeEventListener(e, n);
    const r = e.$proxies || (e.$proxies = {}),
      o = { attach: j7, detach: D7, resize: I7 }[n] || $7;
    r[n] = o(e, n, i);
  }
  removeEventListener(e, n) {
    const i = e.$proxies || (e.$proxies = {}),
      r = i[n];
    if (!r) return;
    (({ attach: Gu, detach: Gu, resize: Gu })[n] || P7)(e, n, r),
      (i[n] = void 0);
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(e, n, i, r) {
    return B6(e, n, i, r);
  }
  isAttached(e) {
    const n = e && Ap(e);
    return !!(n && n.isConnected);
  }
}
function B7(t) {
  return !Np() || (typeof OffscreenCanvas < "u" && t instanceof OffscreenCanvas)
    ? O7
    : F7;
}
var nl;
let pr =
  ((nl = class {
    constructor() {
      te(this, "x");
      te(this, "y");
      te(this, "active", !1);
      te(this, "options");
      te(this, "$animations");
    }
    tooltipPosition(e) {
      const { x: n, y: i } = this.getProps(["x", "y"], e);
      return { x: n, y: i };
    }
    hasValue() {
      return Ko(this.x) && Ko(this.y);
    }
    getProps(e, n) {
      const i = this.$animations;
      if (!n || !i) return this;
      const r = {};
      return (
        e.forEach((s) => {
          r[s] = i[s] && i[s].active() ? i[s]._to : this[s];
        }),
        r
      );
    }
  }),
  te(nl, "defaults", {}),
  te(nl, "defaultRoutes"),
  nl);
function z7(t, e) {
  const n = t.options.ticks,
    i = W7(t),
    r = Math.min(n.maxTicksLimit || i, i),
    s = n.major.enabled ? V7(e) : [],
    o = s.length,
    a = s[0],
    l = s[o - 1],
    c = [];
  if (o > r) return U7(e, c, s, o / r), c;
  const u = H7(s, e, r);
  if (o > 0) {
    let d, h;
    const p = o > 1 ? Math.round((l - a) / (o - 1)) : null;
    for (Va(e, c, u, Ce(p) ? 0 : a - p, a), d = 0, h = o - 1; d < h; d++)
      Va(e, c, u, s[d], s[d + 1]);
    return Va(e, c, u, l, Ce(p) ? e.length : l + p), c;
  }
  return Va(e, c, u), c;
}
function W7(t) {
  const e = t.options.offset,
    n = t._tickSize(),
    i = t._length / n + (e ? 0 : 1),
    r = t._maxLength / n;
  return Math.floor(Math.min(i, r));
}
function H7(t, e, n) {
  const i = Y7(t),
    r = e.length / n;
  if (!i) return Math.max(r, 1);
  const s = $k(i);
  for (let o = 0, a = s.length - 1; o < a; o++) {
    const l = s[o];
    if (l > r) return l;
  }
  return Math.max(r, 1);
}
function V7(t) {
  const e = [];
  let n, i;
  for (n = 0, i = t.length; n < i; n++) t[n].major && e.push(n);
  return e;
}
function U7(t, e, n, i) {
  let r = 0,
    s = n[0],
    o;
  for (i = Math.ceil(i), o = 0; o < t.length; o++)
    o === s && (e.push(t[o]), r++, (s = n[r * i]));
}
function Va(t, e, n, i, r) {
  const s = re(i, 0),
    o = Math.min(re(r, t.length), t.length);
  let a = 0,
    l,
    c,
    u;
  for (
    n = Math.ceil(n), r && ((l = r - i), (n = l / Math.floor(l / n))), u = s;
    u < 0;

  )
    a++, (u = Math.round(s + a * n));
  for (c = Math.max(s, 0); c < o; c++)
    c === u && (e.push(t[c]), a++, (u = Math.round(s + a * n)));
}
function Y7(t) {
  const e = t.length;
  let n, i;
  if (e < 2) return !1;
  for (i = t[0], n = 1; n < e; ++n) if (t[n] - t[n - 1] !== i) return !1;
  return i;
}
const K7 = (t) => (t === "left" ? "right" : t === "right" ? "left" : t),
  km = (t, e, n) => (e === "top" || e === "left" ? t[e] + n : t[e] - n),
  Om = (t, e) => Math.min(e || t, t);
function Tm(t, e) {
  const n = [],
    i = t.length / e,
    r = t.length;
  let s = 0;
  for (; s < r; s += i) n.push(t[Math.floor(s)]);
  return n;
}
function G7(t, e, n) {
  const i = t.ticks.length,
    r = Math.min(e, i - 1),
    s = t._startPixel,
    o = t._endPixel,
    a = 1e-6;
  let l = t.getPixelForTick(r),
    c;
  if (
    !(
      n &&
      (i === 1
        ? (c = Math.max(l - s, o - l))
        : e === 0
        ? (c = (t.getPixelForTick(1) - l) / 2)
        : (c = (l - t.getPixelForTick(r - 1)) / 2),
      (l += r < e ? c : -c),
      l < s - a || l > o + a)
    )
  )
    return l;
}
function q7(t, e) {
  ue(t, (n) => {
    const i = n.gc,
      r = i.length / 2;
    let s;
    if (r > e) {
      for (s = 0; s < r; ++s) delete n.data[i[s]];
      i.splice(0, r);
    }
  });
}
function Hs(t) {
  return t.drawTicks ? t.tickLength : 0;
}
function Nm(t, e) {
  if (!t.display) return 0;
  const n = Ze(t.font, e),
    i = Ut(t.padding);
  return ($e(t.text) ? t.text.length : 1) * n.lineHeight + i.height;
}
function X7(t, e) {
  return hr(t, { scale: e, type: "scale" });
}
function Q7(t, e, n) {
  return hr(t, { tick: n, index: e, type: "tick" });
}
function J7(t, e, n) {
  let i = wp(t);
  return ((n && e !== "right") || (!n && e === "right")) && (i = K7(i)), i;
}
function Z7(t, e, n, i) {
  const { top: r, left: s, bottom: o, right: a, chart: l } = t,
    { chartArea: c, scales: u } = l;
  let d = 0,
    h,
    p,
    g;
  const y = o - r,
    v = a - s;
  if (t.isHorizontal()) {
    if (((p = Qe(i, s, a)), le(n))) {
      const m = Object.keys(n)[0],
        x = n[m];
      g = u[m].getPixelForValue(x) + y - e;
    } else
      n === "center" ? (g = (c.bottom + c.top) / 2 + y - e) : (g = km(t, n, e));
    h = a - s;
  } else {
    if (le(n)) {
      const m = Object.keys(n)[0],
        x = n[m];
      p = u[m].getPixelForValue(x) - v + e;
    } else
      n === "center" ? (p = (c.left + c.right) / 2 - v + e) : (p = km(t, n, e));
    (g = Qe(i, o, r)), (d = n === "left" ? -en : en);
  }
  return { titleX: p, titleY: g, maxWidth: h, rotation: d };
}
class Cs extends pr {
  constructor(e) {
    super(),
      (this.id = e.id),
      (this.type = e.type),
      (this.options = void 0),
      (this.ctx = e.ctx),
      (this.chart = e.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0);
  }
  init(e) {
    (this.options = e.setContext(this.getContext())),
      (this.axis = e.axis),
      (this._userMin = this.parse(e.min)),
      (this._userMax = this.parse(e.max)),
      (this._suggestedMin = this.parse(e.suggestedMin)),
      (this._suggestedMax = this.parse(e.suggestedMax));
  }
  parse(e, n) {
    return e;
  }
  getUserBounds() {
    let { _userMin: e, _userMax: n, _suggestedMin: i, _suggestedMax: r } = this;
    return (
      (e = un(e, Number.POSITIVE_INFINITY)),
      (n = un(n, Number.NEGATIVE_INFINITY)),
      (i = un(i, Number.POSITIVE_INFINITY)),
      (r = un(r, Number.NEGATIVE_INFINITY)),
      { min: un(e, i), max: un(n, r), minDefined: Vt(e), maxDefined: Vt(n) }
    );
  }
  getMinMax(e) {
    let { min: n, max: i, minDefined: r, maxDefined: s } = this.getUserBounds(),
      o;
    if (r && s) return { min: n, max: i };
    const a = this.getMatchingVisibleMetas();
    for (let l = 0, c = a.length; l < c; ++l)
      (o = a[l].controller.getMinMax(this, e)),
        r || (n = Math.min(n, o.min)),
        s || (i = Math.max(i, o.max));
    return (
      (n = s && n > i ? i : n),
      (i = r && n > i ? n : i),
      { min: un(n, un(i, n)), max: un(i, un(n, i)) }
    );
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0,
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const e = this.chart.data;
    return (
      this.options.labels ||
      (this.isHorizontal() ? e.xLabels : e.yLabels) ||
      e.labels ||
      []
    );
  }
  getLabelItems(e = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(e));
  }
  beforeLayout() {
    (this._cache = {}), (this._dataLimitsCached = !1);
  }
  beforeUpdate() {
    ge(this.options.beforeUpdate, [this]);
  }
  update(e, n, i) {
    const { beginAtZero: r, grace: s, ticks: o } = this.options,
      a = o.sampleSize;
    this.beforeUpdate(),
      (this.maxWidth = e),
      (this.maxHeight = n),
      (this._margins = i =
        Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i)),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal()
        ? this.width + i.left + i.right
        : this.height + i.top + i.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = v6(this, s, r)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? Tm(this.ticks, a) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      o.display &&
        (o.autoSkip || o.source === "auto") &&
        ((this.ticks = z7(this, this.ticks)),
        (this._labelSizes = null),
        this.afterAutoSkip()),
      l && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate();
  }
  configure() {
    let e = this.options.reverse,
      n,
      i;
    this.isHorizontal()
      ? ((n = this.left), (i = this.right))
      : ((n = this.top), (i = this.bottom), (e = !e)),
      (this._startPixel = n),
      (this._endPixel = i),
      (this._reversePixels = e),
      (this._length = i - n),
      (this._alignToPixels = this.options.alignToPixels);
  }
  afterUpdate() {
    ge(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    ge(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = 0),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = 0),
        (this.bottom = this.height)),
      (this.paddingLeft = 0),
      (this.paddingTop = 0),
      (this.paddingRight = 0),
      (this.paddingBottom = 0);
  }
  afterSetDimensions() {
    ge(this.options.afterSetDimensions, [this]);
  }
  _callHooks(e) {
    this.chart.notifyPlugins(e, this.getContext()), ge(this.options[e], [this]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    ge(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(e) {
    const n = this.options.ticks;
    let i, r, s;
    for (i = 0, r = e.length; i < r; i++)
      (s = e[i]), (s.label = ge(n.callback, [s.value, i, e], this));
  }
  afterTickToLabelConversion() {
    ge(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    ge(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const e = this.options,
      n = e.ticks,
      i = Om(this.ticks.length, e.ticks.maxTicksLimit),
      r = n.minRotation || 0,
      s = n.maxRotation;
    let o = r,
      a,
      l,
      c;
    if (
      !this._isVisible() ||
      !n.display ||
      r >= s ||
      i <= 1 ||
      !this.isHorizontal()
    ) {
      this.labelRotation = r;
      return;
    }
    const u = this._getLabelSizes(),
      d = u.widest.width,
      h = u.highest.height,
      p = $t(this.chart.width - d, 0, this.maxWidth);
    (a = e.offset ? this.maxWidth / i : p / (i - 1)),
      d + 6 > a &&
        ((a = p / (i - (e.offset ? 0.5 : 1))),
        (l =
          this.maxHeight -
          Hs(e.grid) -
          n.padding -
          Nm(e.title, this.chart.options.font)),
        (c = Math.sqrt(d * d + h * h)),
        (o = zk(
          Math.min(
            Math.asin($t((u.highest.height + 6) / a, -1, 1)),
            Math.asin($t(l / c, -1, 1)) - Math.asin($t(h / c, -1, 1)),
          ),
        )),
        (o = Math.max(r, Math.min(s, o)))),
      (this.labelRotation = o);
  }
  afterCalculateLabelRotation() {
    ge(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    ge(this.options.beforeFit, [this]);
  }
  fit() {
    const e = { width: 0, height: 0 },
      {
        chart: n,
        options: { ticks: i, title: r, grid: s },
      } = this,
      o = this._isVisible(),
      a = this.isHorizontal();
    if (o) {
      const l = Nm(r, n.options.font);
      if (
        (a
          ? ((e.width = this.maxWidth), (e.height = Hs(s) + l))
          : ((e.height = this.maxHeight), (e.width = Hs(s) + l)),
        i.display && this.ticks.length)
      ) {
        const {
            first: c,
            last: u,
            widest: d,
            highest: h,
          } = this._getLabelSizes(),
          p = i.padding * 2,
          g = Vi(this.labelRotation),
          y = Math.cos(g),
          v = Math.sin(g);
        if (a) {
          const m = i.mirror ? 0 : v * d.width + y * h.height;
          e.height = Math.min(this.maxHeight, e.height + m + p);
        } else {
          const m = i.mirror ? 0 : y * d.width + v * h.height;
          e.width = Math.min(this.maxWidth, e.width + m + p);
        }
        this._calculatePadding(c, u, v, y);
      }
    }
    this._handleMargins(),
      a
        ? ((this.width = this._length =
            n.width - this._margins.left - this._margins.right),
          (this.height = e.height))
        : ((this.width = e.width),
          (this.height = this._length =
            n.height - this._margins.top - this._margins.bottom));
  }
  _calculatePadding(e, n, i, r) {
    const {
        ticks: { align: s, padding: o },
        position: a,
      } = this.options,
      l = this.labelRotation !== 0,
      c = a !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const u = this.getPixelForTick(0) - this.left,
        d = this.right - this.getPixelForTick(this.ticks.length - 1);
      let h = 0,
        p = 0;
      l
        ? c
          ? ((h = r * e.width), (p = i * n.height))
          : ((h = i * e.height), (p = r * n.width))
        : s === "start"
        ? (p = n.width)
        : s === "end"
        ? (h = e.width)
        : s !== "inner" && ((h = e.width / 2), (p = n.width / 2)),
        (this.paddingLeft = Math.max(
          ((h - u + o) * this.width) / (this.width - u),
          0,
        )),
        (this.paddingRight = Math.max(
          ((p - d + o) * this.width) / (this.width - d),
          0,
        ));
    } else {
      let u = n.height / 2,
        d = e.height / 2;
      s === "start"
        ? ((u = 0), (d = e.height))
        : s === "end" && ((u = n.height), (d = 0)),
        (this.paddingTop = u + o),
        (this.paddingBottom = d + o);
    }
  }
  _handleMargins() {
    this._margins &&
      ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
      (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
      (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
      (this._margins.bottom = Math.max(
        this.paddingBottom,
        this._margins.bottom,
      )));
  }
  afterFit() {
    ge(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const { axis: e, position: n } = this.options;
    return n === "top" || n === "bottom" || e === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(e) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(e);
    let n, i;
    for (n = 0, i = e.length; n < i; n++)
      Ce(e[n].label) && (e.splice(n, 1), i--, n--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let e = this._labelSizes;
    if (!e) {
      const n = this.options.ticks.sampleSize;
      let i = this.ticks;
      n < i.length && (i = Tm(i, n)),
        (this._labelSizes = e =
          this._computeLabelSizes(
            i,
            i.length,
            this.options.ticks.maxTicksLimit,
          ));
    }
    return e;
  }
  _computeLabelSizes(e, n, i) {
    const { ctx: r, _longestTextCache: s } = this,
      o = [],
      a = [],
      l = Math.floor(n / Om(n, i));
    let c = 0,
      u = 0,
      d,
      h,
      p,
      g,
      y,
      v,
      m,
      x,
      _,
      w,
      E;
    for (d = 0; d < n; d += l) {
      if (
        ((g = e[d].label),
        (y = this._resolveTickFontOptions(d)),
        (r.font = v = y.string),
        (m = s[v] = s[v] || { data: {}, gc: [] }),
        (x = y.lineHeight),
        (_ = w = 0),
        !Ce(g) && !$e(g))
      )
        (_ = rm(r, m.data, m.gc, _, g)), (w = x);
      else if ($e(g))
        for (h = 0, p = g.length; h < p; ++h)
          (E = g[h]),
            !Ce(E) && !$e(E) && ((_ = rm(r, m.data, m.gc, _, E)), (w += x));
      o.push(_), a.push(w), (c = Math.max(_, c)), (u = Math.max(w, u));
    }
    q7(s, n);
    const S = o.indexOf(c),
      C = a.indexOf(u),
      k = (P) => ({ width: o[P] || 0, height: a[P] || 0 });
    return {
      first: k(0),
      last: k(n - 1),
      widest: k(S),
      highest: k(C),
      widths: o,
      heights: a,
    };
  }
  getLabelForValue(e) {
    return e;
  }
  getPixelForValue(e, n) {
    return NaN;
  }
  getValueForPixel(e) {}
  getPixelForTick(e) {
    const n = this.ticks;
    return e < 0 || e > n.length - 1 ? null : this.getPixelForValue(n[e].value);
  }
  getPixelForDecimal(e) {
    this._reversePixels && (e = 1 - e);
    const n = this._startPixel + e * this._length;
    return Vk(this._alignToPixels ? ji(this.chart, n, 0) : n);
  }
  getDecimalForPixel(e) {
    const n = (e - this._startPixel) / this._length;
    return this._reversePixels ? 1 - n : n;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: e, max: n } = this;
    return e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0;
  }
  getContext(e) {
    const n = this.ticks || [];
    if (e >= 0 && e < n.length) {
      const i = n[e];
      return i.$context || (i.$context = Q7(this.getContext(), e, i));
    }
    return this.$context || (this.$context = X7(this.chart.getContext(), this));
  }
  _tickSize() {
    const e = this.options.ticks,
      n = Vi(this.labelRotation),
      i = Math.abs(Math.cos(n)),
      r = Math.abs(Math.sin(n)),
      s = this._getLabelSizes(),
      o = e.autoSkipPadding || 0,
      a = s ? s.widest.width + o : 0,
      l = s ? s.highest.height + o : 0;
    return this.isHorizontal()
      ? l * i > a * r
        ? a / i
        : l / r
      : l * r < a * i
      ? l / i
      : a / r;
  }
  _isVisible() {
    const e = this.options.display;
    return e !== "auto" ? !!e : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(e) {
    const n = this.axis,
      i = this.chart,
      r = this.options,
      { grid: s, position: o, border: a } = r,
      l = s.offset,
      c = this.isHorizontal(),
      d = this.ticks.length + (l ? 1 : 0),
      h = Hs(s),
      p = [],
      g = a.setContext(this.getContext()),
      y = g.display ? g.width : 0,
      v = y / 2,
      m = function (Y) {
        return ji(i, Y, y);
      };
    let x, _, w, E, S, C, k, P, j, $, A, M;
    if (o === "top")
      (x = m(this.bottom)),
        (C = this.bottom - h),
        (P = x - v),
        ($ = m(e.top) + v),
        (M = e.bottom);
    else if (o === "bottom")
      (x = m(this.top)),
        ($ = e.top),
        (M = m(e.bottom) - v),
        (C = x + v),
        (P = this.top + h);
    else if (o === "left")
      (x = m(this.right)),
        (S = this.right - h),
        (k = x - v),
        (j = m(e.left) + v),
        (A = e.right);
    else if (o === "right")
      (x = m(this.left)),
        (j = e.left),
        (A = m(e.right) - v),
        (S = x + v),
        (k = this.left + h);
    else if (n === "x") {
      if (o === "center") x = m((e.top + e.bottom) / 2 + 0.5);
      else if (le(o)) {
        const Y = Object.keys(o)[0],
          G = o[Y];
        x = m(this.chart.scales[Y].getPixelForValue(G));
      }
      ($ = e.top), (M = e.bottom), (C = x + v), (P = C + h);
    } else if (n === "y") {
      if (o === "center") x = m((e.left + e.right) / 2);
      else if (le(o)) {
        const Y = Object.keys(o)[0],
          G = o[Y];
        x = m(this.chart.scales[Y].getPixelForValue(G));
      }
      (S = x - v), (k = S - h), (j = e.left), (A = e.right);
    }
    const V = re(r.ticks.maxTicksLimit, d),
      z = Math.max(1, Math.ceil(d / V));
    for (_ = 0; _ < d; _ += z) {
      const Y = this.getContext(_),
        G = s.setContext(Y),
        L = a.setContext(Y),
        N = G.lineWidth,
        O = G.color,
        F = L.dash || [],
        R = L.dashOffset,
        B = G.tickWidth,
        W = G.tickColor,
        U = G.tickBorderDash || [],
        q = G.tickBorderDashOffset;
      (w = G7(this, _, l)),
        w !== void 0 &&
          ((E = ji(i, w, N)),
          c ? (S = k = j = A = E) : (C = P = $ = M = E),
          p.push({
            tx1: S,
            ty1: C,
            tx2: k,
            ty2: P,
            x1: j,
            y1: $,
            x2: A,
            y2: M,
            width: N,
            color: O,
            borderDash: F,
            borderDashOffset: R,
            tickWidth: B,
            tickColor: W,
            tickBorderDash: U,
            tickBorderDashOffset: q,
          }));
    }
    return (this._ticksLength = d), (this._borderValue = x), p;
  }
  _computeLabelItems(e) {
    const n = this.axis,
      i = this.options,
      { position: r, ticks: s } = i,
      o = this.isHorizontal(),
      a = this.ticks,
      { align: l, crossAlign: c, padding: u, mirror: d } = s,
      h = Hs(i.grid),
      p = h + u,
      g = d ? -u : p,
      y = -Vi(this.labelRotation),
      v = [];
    let m,
      x,
      _,
      w,
      E,
      S,
      C,
      k,
      P,
      j,
      $,
      A,
      M = "middle";
    if (r === "top")
      (S = this.bottom - g), (C = this._getXAxisLabelAlignment());
    else if (r === "bottom")
      (S = this.top + g), (C = this._getXAxisLabelAlignment());
    else if (r === "left") {
      const z = this._getYAxisLabelAlignment(h);
      (C = z.textAlign), (E = z.x);
    } else if (r === "right") {
      const z = this._getYAxisLabelAlignment(h);
      (C = z.textAlign), (E = z.x);
    } else if (n === "x") {
      if (r === "center") S = (e.top + e.bottom) / 2 + p;
      else if (le(r)) {
        const z = Object.keys(r)[0],
          Y = r[z];
        S = this.chart.scales[z].getPixelForValue(Y) + p;
      }
      C = this._getXAxisLabelAlignment();
    } else if (n === "y") {
      if (r === "center") E = (e.left + e.right) / 2 - p;
      else if (le(r)) {
        const z = Object.keys(r)[0],
          Y = r[z];
        E = this.chart.scales[z].getPixelForValue(Y);
      }
      C = this._getYAxisLabelAlignment(h).textAlign;
    }
    n === "y" && (l === "start" ? (M = "top") : l === "end" && (M = "bottom"));
    const V = this._getLabelSizes();
    for (m = 0, x = a.length; m < x; ++m) {
      (_ = a[m]), (w = _.label);
      const z = s.setContext(this.getContext(m));
      (k = this.getPixelForTick(m) + s.labelOffset),
        (P = this._resolveTickFontOptions(m)),
        (j = P.lineHeight),
        ($ = $e(w) ? w.length : 1);
      const Y = $ / 2,
        G = z.color,
        L = z.textStrokeColor,
        N = z.textStrokeWidth;
      let O = C;
      o
        ? ((E = k),
          C === "inner" &&
            (m === x - 1
              ? (O = this.options.reverse ? "left" : "right")
              : m === 0
              ? (O = this.options.reverse ? "right" : "left")
              : (O = "center")),
          r === "top"
            ? c === "near" || y !== 0
              ? (A = -$ * j + j / 2)
              : c === "center"
              ? (A = -V.highest.height / 2 - Y * j + j)
              : (A = -V.highest.height + j / 2)
            : c === "near" || y !== 0
            ? (A = j / 2)
            : c === "center"
            ? (A = V.highest.height / 2 - Y * j)
            : (A = V.highest.height - $ * j),
          d && (A *= -1),
          y !== 0 && !z.showLabelBackdrop && (E += (j / 2) * Math.sin(y)))
        : ((S = k), (A = ((1 - $) * j) / 2));
      let F;
      if (z.showLabelBackdrop) {
        const R = Ut(z.backdropPadding),
          B = V.heights[m],
          W = V.widths[m];
        let U = A - R.top,
          q = 0 - R.left;
        switch (M) {
          case "middle":
            U -= B / 2;
            break;
          case "bottom":
            U -= B;
            break;
        }
        switch (C) {
          case "center":
            q -= W / 2;
            break;
          case "right":
            q -= W;
            break;
          case "inner":
            m === x - 1 ? (q -= W) : m > 0 && (q -= W / 2);
            break;
        }
        F = {
          left: q,
          top: U,
          width: W + R.width,
          height: B + R.height,
          color: z.backdropColor,
        };
      }
      v.push({
        label: w,
        font: P,
        textOffset: A,
        options: {
          rotation: y,
          color: G,
          strokeColor: L,
          strokeWidth: N,
          textAlign: O,
          textBaseline: M,
          translation: [E, S],
          backdrop: F,
        },
      });
    }
    return v;
  }
  _getXAxisLabelAlignment() {
    const { position: e, ticks: n } = this.options;
    if (-Vi(this.labelRotation)) return e === "top" ? "left" : "right";
    let r = "center";
    return (
      n.align === "start"
        ? (r = "left")
        : n.align === "end"
        ? (r = "right")
        : n.align === "inner" && (r = "inner"),
      r
    );
  }
  _getYAxisLabelAlignment(e) {
    const {
        position: n,
        ticks: { crossAlign: i, mirror: r, padding: s },
      } = this.options,
      o = this._getLabelSizes(),
      a = e + s,
      l = o.widest.width;
    let c, u;
    return (
      n === "left"
        ? r
          ? ((u = this.right + s),
            i === "near"
              ? (c = "left")
              : i === "center"
              ? ((c = "center"), (u += l / 2))
              : ((c = "right"), (u += l)))
          : ((u = this.right - a),
            i === "near"
              ? (c = "right")
              : i === "center"
              ? ((c = "center"), (u -= l / 2))
              : ((c = "left"), (u = this.left)))
        : n === "right"
        ? r
          ? ((u = this.left + s),
            i === "near"
              ? (c = "right")
              : i === "center"
              ? ((c = "center"), (u -= l / 2))
              : ((c = "left"), (u -= l)))
          : ((u = this.left + a),
            i === "near"
              ? (c = "left")
              : i === "center"
              ? ((c = "center"), (u += l / 2))
              : ((c = "right"), (u = this.right)))
        : (c = "right"),
      { textAlign: c, x: u }
    );
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return;
    const e = this.chart,
      n = this.options.position;
    if (n === "left" || n === "right")
      return { top: 0, left: this.left, bottom: e.height, right: this.right };
    if (n === "top" || n === "bottom")
      return { top: this.top, left: 0, bottom: this.bottom, right: e.width };
  }
  drawBackground() {
    const {
      ctx: e,
      options: { backgroundColor: n },
      left: i,
      top: r,
      width: s,
      height: o,
    } = this;
    n && (e.save(), (e.fillStyle = n), e.fillRect(i, r, s, o), e.restore());
  }
  getLineWidthForValue(e) {
    const n = this.options.grid;
    if (!this._isVisible() || !n.display) return 0;
    const r = this.ticks.findIndex((s) => s.value === e);
    return r >= 0 ? n.setContext(this.getContext(r)).lineWidth : 0;
  }
  drawGrid(e) {
    const n = this.options.grid,
      i = this.ctx,
      r =
        this._gridLineItems ||
        (this._gridLineItems = this._computeGridLineItems(e));
    let s, o;
    const a = (l, c, u) => {
      !u.width ||
        !u.color ||
        (i.save(),
        (i.lineWidth = u.width),
        (i.strokeStyle = u.color),
        i.setLineDash(u.borderDash || []),
        (i.lineDashOffset = u.borderDashOffset),
        i.beginPath(),
        i.moveTo(l.x, l.y),
        i.lineTo(c.x, c.y),
        i.stroke(),
        i.restore());
    };
    if (n.display)
      for (s = 0, o = r.length; s < o; ++s) {
        const l = r[s];
        n.drawOnChartArea && a({ x: l.x1, y: l.y1 }, { x: l.x2, y: l.y2 }, l),
          n.drawTicks &&
            a(
              { x: l.tx1, y: l.ty1 },
              { x: l.tx2, y: l.ty2 },
              {
                color: l.tickColor,
                width: l.tickWidth,
                borderDash: l.tickBorderDash,
                borderDashOffset: l.tickBorderDashOffset,
              },
            );
      }
  }
  drawBorder() {
    const {
        chart: e,
        ctx: n,
        options: { border: i, grid: r },
      } = this,
      s = i.setContext(this.getContext()),
      o = i.display ? s.width : 0;
    if (!o) return;
    const a = r.setContext(this.getContext(0)).lineWidth,
      l = this._borderValue;
    let c, u, d, h;
    this.isHorizontal()
      ? ((c = ji(e, this.left, o) - o / 2),
        (u = ji(e, this.right, a) + a / 2),
        (d = h = l))
      : ((d = ji(e, this.top, o) - o / 2),
        (h = ji(e, this.bottom, a) + a / 2),
        (c = u = l)),
      n.save(),
      (n.lineWidth = s.width),
      (n.strokeStyle = s.color),
      n.beginPath(),
      n.moveTo(c, d),
      n.lineTo(u, h),
      n.stroke(),
      n.restore();
  }
  drawLabels(e) {
    if (!this.options.ticks.display) return;
    const i = this.ctx,
      r = this._computeLabelArea();
    r && Sp(i, r);
    const s = this.getLabelItems(e);
    for (const o of s) {
      const a = o.options,
        l = o.font,
        c = o.label,
        u = o.textOffset;
      qo(i, c, 0, u, l, a);
    }
    r && Cp(i);
  }
  drawTitle() {
    const {
      ctx: e,
      options: { position: n, title: i, reverse: r },
    } = this;
    if (!i.display) return;
    const s = Ze(i.font),
      o = Ut(i.padding),
      a = i.align;
    let l = s.lineHeight / 2;
    n === "bottom" || n === "center" || le(n)
      ? ((l += o.bottom),
        $e(i.text) && (l += s.lineHeight * (i.text.length - 1)))
      : (l += o.top);
    const {
      titleX: c,
      titleY: u,
      maxWidth: d,
      rotation: h,
    } = Z7(this, l, n, a);
    qo(e, i.text, 0, 0, s, {
      color: i.color,
      maxWidth: d,
      rotation: h,
      textAlign: J7(a, n, r),
      textBaseline: "middle",
      translation: [c, u],
    });
  }
  draw(e) {
    this._isVisible() &&
      (this.drawBackground(),
      this.drawGrid(e),
      this.drawBorder(),
      this.drawTitle(),
      this.drawLabels(e));
  }
  _layers() {
    const e = this.options,
      n = (e.ticks && e.ticks.z) || 0,
      i = re(e.grid && e.grid.z, -1),
      r = re(e.border && e.border.z, 0);
    return !this._isVisible() || this.draw !== Cs.prototype.draw
      ? [
          {
            z: n,
            draw: (s) => {
              this.draw(s);
            },
          },
        ]
      : [
          {
            z: i,
            draw: (s) => {
              this.drawBackground(), this.drawGrid(s), this.drawTitle();
            },
          },
          {
            z: r,
            draw: () => {
              this.drawBorder();
            },
          },
          {
            z: n,
            draw: (s) => {
              this.drawLabels(s);
            },
          },
        ];
  }
  getMatchingVisibleMetas(e) {
    const n = this.chart.getSortedVisibleDatasetMetas(),
      i = this.axis + "AxisID",
      r = [];
    let s, o;
    for (s = 0, o = n.length; s < o; ++s) {
      const a = n[s];
      a[i] === this.id && (!e || a.type === e) && r.push(a);
    }
    return r;
  }
  _resolveTickFontOptions(e) {
    const n = this.options.ticks.setContext(this.getContext(e));
    return Ze(n.font);
  }
  _maxDigits() {
    const e = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / e;
  }
}
class Ua {
  constructor(e, n, i) {
    (this.type = e),
      (this.scope = n),
      (this.override = i),
      (this.items = Object.create(null));
  }
  isForType(e) {
    return Object.prototype.isPrototypeOf.call(
      this.type.prototype,
      e.prototype,
    );
  }
  register(e) {
    const n = Object.getPrototypeOf(e);
    let i;
    nO(n) && (i = this.register(n));
    const r = this.items,
      s = e.id,
      o = this.scope + "." + s;
    if (!s) throw new Error("class does not have id: " + e);
    return (
      s in r ||
        ((r[s] = e),
        eO(e, o, i),
        this.override && Oe.override(e.id, e.overrides)),
      o
    );
  }
  get(e) {
    return this.items[e];
  }
  unregister(e) {
    const n = this.items,
      i = e.id,
      r = this.scope;
    i in n && delete n[i],
      r && i in Oe[r] && (delete Oe[r][i], this.override && delete ar[i]);
  }
}
function eO(t, e, n) {
  const i = Yo(Object.create(null), [
    n ? Oe.get(n) : {},
    Oe.get(e),
    t.defaults,
  ]);
  Oe.set(e, i),
    t.defaultRoutes && tO(e, t.defaultRoutes),
    t.descriptors && Oe.describe(e, t.descriptors);
}
function tO(t, e) {
  Object.keys(e).forEach((n) => {
    const i = n.split("."),
      r = i.pop(),
      s = [t].concat(i).join("."),
      o = e[n].split("."),
      a = o.pop(),
      l = o.join(".");
    Oe.route(s, r, l, a);
  });
}
function nO(t) {
  return "id" in t && "defaults" in t;
}
class iO {
  constructor() {
    (this.controllers = new Ua(bo, "datasets", !0)),
      (this.elements = new Ua(pr, "elements")),
      (this.plugins = new Ua(Object, "plugins")),
      (this.scales = new Ua(Cs, "scales")),
      (this._typedRegistries = [this.controllers, this.scales, this.elements]);
  }
  add(...e) {
    this._each("register", e);
  }
  remove(...e) {
    this._each("unregister", e);
  }
  addControllers(...e) {
    this._each("register", e, this.controllers);
  }
  addElements(...e) {
    this._each("register", e, this.elements);
  }
  addPlugins(...e) {
    this._each("register", e, this.plugins);
  }
  addScales(...e) {
    this._each("register", e, this.scales);
  }
  getController(e) {
    return this._get(e, this.controllers, "controller");
  }
  getElement(e) {
    return this._get(e, this.elements, "element");
  }
  getPlugin(e) {
    return this._get(e, this.plugins, "plugin");
  }
  getScale(e) {
    return this._get(e, this.scales, "scale");
  }
  removeControllers(...e) {
    this._each("unregister", e, this.controllers);
  }
  removeElements(...e) {
    this._each("unregister", e, this.elements);
  }
  removePlugins(...e) {
    this._each("unregister", e, this.plugins);
  }
  removeScales(...e) {
    this._each("unregister", e, this.scales);
  }
  _each(e, n, i) {
    [...n].forEach((r) => {
      const s = i || this._getRegistryForType(r);
      i || s.isForType(r) || (s === this.plugins && r.id)
        ? this._exec(e, s, r)
        : ue(r, (o) => {
            const a = i || this._getRegistryForType(o);
            this._exec(e, a, o);
          });
    });
  }
  _exec(e, n, i) {
    const r = _p(e);
    ge(i["before" + r], [], i), n[e](i), ge(i["after" + r], [], i);
  }
  _getRegistryForType(e) {
    for (let n = 0; n < this._typedRegistries.length; n++) {
      const i = this._typedRegistries[n];
      if (i.isForType(e)) return i;
    }
    return this.plugins;
  }
  _get(e, n, i) {
    const r = n.get(e);
    if (r === void 0)
      throw new Error('"' + e + '" is not a registered ' + i + ".");
    return r;
  }
}
var hn = new iO();
class rO {
  constructor() {
    this._init = [];
  }
  notify(e, n, i, r) {
    n === "beforeInit" &&
      ((this._init = this._createDescriptors(e, !0)),
      this._notify(this._init, e, "install"));
    const s = r ? this._descriptors(e).filter(r) : this._descriptors(e),
      o = this._notify(s, e, n, i);
    return (
      n === "afterDestroy" &&
        (this._notify(s, e, "stop"), this._notify(this._init, e, "uninstall")),
      o
    );
  }
  _notify(e, n, i, r) {
    r = r || {};
    for (const s of e) {
      const o = s.plugin,
        a = o[i],
        l = [n, r, s.options];
      if (ge(a, l, o) === !1 && r.cancelable) return !1;
    }
    return !0;
  }
  invalidate() {
    Ce(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
  }
  _descriptors(e) {
    if (this._cache) return this._cache;
    const n = (this._cache = this._createDescriptors(e));
    return this._notifyStateChanges(e), n;
  }
  _createDescriptors(e, n) {
    const i = e && e.config,
      r = re(i.options && i.options.plugins, {}),
      s = sO(i);
    return r === !1 && !n ? [] : aO(e, s, r, n);
  }
  _notifyStateChanges(e) {
    const n = this._oldCache || [],
      i = this._cache,
      r = (s, o) =>
        s.filter((a) => !o.some((l) => a.plugin.id === l.plugin.id));
    this._notify(r(n, i), e, "stop"), this._notify(r(i, n), e, "start");
  }
}
function sO(t) {
  const e = {},
    n = [],
    i = Object.keys(hn.plugins.items);
  for (let s = 0; s < i.length; s++) n.push(hn.getPlugin(i[s]));
  const r = t.plugins || [];
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    n.indexOf(o) === -1 && (n.push(o), (e[o.id] = !0));
  }
  return { plugins: n, localIds: e };
}
function oO(t, e) {
  return !e && t === !1 ? null : t === !0 ? {} : t;
}
function aO(t, { plugins: e, localIds: n }, i, r) {
  const s = [],
    o = t.getContext();
  for (const a of e) {
    const l = a.id,
      c = oO(i[l], r);
    c !== null &&
      s.push({
        plugin: a,
        options: lO(t.config, { plugin: a, local: n[l] }, c, o),
      });
  }
  return s;
}
function lO(t, { plugin: e, local: n }, i, r) {
  const s = t.pluginScopeKeys(e),
    o = t.getOptionScopes(i, s);
  return (
    n && e.defaults && o.push(e.defaults),
    t.createResolver(o, r, [""], { scriptable: !1, indexable: !1, allKeys: !0 })
  );
}
function Df(t, e) {
  const n = Oe.datasets[t] || {};
  return (
    ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || n.indexAxis || "x"
  );
}
function cO(t, e) {
  let n = t;
  return (
    t === "_index_" ? (n = e) : t === "_value_" && (n = e === "x" ? "y" : "x"),
    n
  );
}
function uO(t, e) {
  return t === e ? "_index_" : "_value_";
}
function Am(t) {
  if (t === "x" || t === "y" || t === "r") return t;
}
function dO(t) {
  if (t === "top" || t === "bottom") return "x";
  if (t === "left" || t === "right") return "y";
}
function Rf(t, ...e) {
  if (Am(t)) return t;
  for (const n of e) {
    const i =
      n.axis || dO(n.position) || (t.length > 1 && Am(t[0].toLowerCase()));
    if (i) return i;
  }
  throw new Error(
    `Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`,
  );
}
function Pm(t, e, n) {
  if (n[e + "AxisID"] === t) return { axis: e };
}
function fO(t, e) {
  if (e.data && e.data.datasets) {
    const n = e.data.datasets.filter((i) => i.xAxisID === t || i.yAxisID === t);
    if (n.length) return Pm(t, "x", n[0]) || Pm(t, "y", n[0]);
  }
  return {};
}
function hO(t, e) {
  const n = ar[t.type] || { scales: {} },
    i = e.scales || {},
    r = Df(t.type, e),
    s = Object.create(null);
  return (
    Object.keys(i).forEach((o) => {
      const a = i[o];
      if (!le(a))
        return console.error(`Invalid scale configuration for scale: ${o}`);
      if (a._proxy)
        return console.warn(
          `Ignoring resolver passed as options for scale: ${o}`,
        );
      const l = Rf(o, a, fO(o, t), Oe.scales[a.type]),
        c = uO(l, r),
        u = n.scales || {};
      s[o] = mo(Object.create(null), [{ axis: l }, a, u[l], u[c]]);
    }),
    t.data.datasets.forEach((o) => {
      const a = o.type || t.type,
        l = o.indexAxis || Df(a, e),
        u = (ar[a] || {}).scales || {};
      Object.keys(u).forEach((d) => {
        const h = cO(d, l),
          p = o[h + "AxisID"] || h;
        (s[p] = s[p] || Object.create(null)),
          mo(s[p], [{ axis: h }, i[p], u[d]]);
      });
    }),
    Object.keys(s).forEach((o) => {
      const a = s[o];
      mo(a, [Oe.scales[a.type], Oe.scale]);
    }),
    s
  );
}
function C_(t) {
  const e = t.options || (t.options = {});
  (e.plugins = re(e.plugins, {})), (e.scales = hO(t, e));
}
function k_(t) {
  return (
    (t = t || {}),
    (t.datasets = t.datasets || []),
    (t.labels = t.labels || []),
    t
  );
}
function pO(t) {
  return (t = t || {}), (t.data = k_(t.data)), C_(t), t;
}
const Lm = new Map(),
  O_ = new Set();
function Ya(t, e) {
  let n = Lm.get(t);
  return n || ((n = e()), Lm.set(t, n), O_.add(n)), n;
}
const Vs = (t, e, n) => {
  const i = lc(e, n);
  i !== void 0 && t.add(i);
};
let gO = class {
  constructor(e) {
    (this._config = pO(e)),
      (this._scopeCache = new Map()),
      (this._resolverCache = new Map());
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(e) {
    this._config.type = e;
  }
  get data() {
    return this._config.data;
  }
  set data(e) {
    this._config.data = k_(e);
  }
  get options() {
    return this._config.options;
  }
  set options(e) {
    this._config.options = e;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const e = this._config;
    this.clearCache(), C_(e);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(e) {
    return Ya(e, () => [[`datasets.${e}`, ""]]);
  }
  datasetAnimationScopeKeys(e, n) {
    return Ya(`${e}.transition.${n}`, () => [
      [`datasets.${e}.transitions.${n}`, `transitions.${n}`],
      [`datasets.${e}`, ""],
    ]);
  }
  datasetElementScopeKeys(e, n) {
    return Ya(`${e}-${n}`, () => [
      [`datasets.${e}.elements.${n}`, `datasets.${e}`, `elements.${n}`, ""],
    ]);
  }
  pluginScopeKeys(e) {
    const n = e.id,
      i = this.type;
    return Ya(`${i}-plugin-${n}`, () => [
      [`plugins.${n}`, ...(e.additionalOptionScopes || [])],
    ]);
  }
  _cachedScopes(e, n) {
    const i = this._scopeCache;
    let r = i.get(e);
    return (!r || n) && ((r = new Map()), i.set(e, r)), r;
  }
  getOptionScopes(e, n, i) {
    const { options: r, type: s } = this,
      o = this._cachedScopes(e, i),
      a = o.get(n);
    if (a) return a;
    const l = new Set();
    n.forEach((u) => {
      e && (l.add(e), u.forEach((d) => Vs(l, e, d))),
        u.forEach((d) => Vs(l, r, d)),
        u.forEach((d) => Vs(l, ar[s] || {}, d)),
        u.forEach((d) => Vs(l, Oe, d)),
        u.forEach((d) => Vs(l, Pf, d));
    });
    const c = Array.from(l);
    return (
      c.length === 0 && c.push(Object.create(null)), O_.has(n) && o.set(n, c), c
    );
  }
  chartOptionScopes() {
    const { options: e, type: n } = this;
    return [e, ar[n] || {}, Oe.datasets[n] || {}, { type: n }, Oe, Pf];
  }
  resolveNamedOptions(e, n, i, r = [""]) {
    const s = { $shared: !0 },
      { resolver: o, subPrefixes: a } = jm(this._resolverCache, e, r);
    let l = o;
    if (yO(o, n)) {
      (s.$shared = !1), (i = bi(i) ? i() : i);
      const c = this.createResolver(e, i, a);
      l = ds(o, i, c);
    }
    for (const c of n) s[c] = l[c];
    return s;
  }
  createResolver(e, n, i = [""], r) {
    const { resolver: s } = jm(this._resolverCache, e, i);
    return le(n) ? ds(s, n, void 0, r) : s;
  }
};
function jm(t, e, n) {
  let i = t.get(e);
  i || ((i = new Map()), t.set(e, i));
  const r = n.join();
  let s = i.get(r);
  return (
    s ||
      ((s = {
        resolver: kp(e, n),
        subPrefixes: n.filter((a) => !a.toLowerCase().includes("hover")),
      }),
      i.set(r, s)),
    s
  );
}
const mO = (t) => le(t) && Object.getOwnPropertyNames(t).some((e) => bi(t[e]));
function yO(t, e) {
  const { isScriptable: n, isIndexable: i } = u_(t);
  for (const r of e) {
    const s = n(r),
      o = i(r),
      a = (o || s) && t[r];
    if ((s && (bi(a) || mO(a))) || (o && $e(a))) return !0;
  }
  return !1;
}
var vO = "4.4.3";
const xO = ["top", "bottom", "left", "right", "chartArea"];
function Dm(t, e) {
  return t === "top" || t === "bottom" || (xO.indexOf(t) === -1 && e === "x");
}
function Rm(t, e) {
  return function (n, i) {
    return n[t] === i[t] ? n[e] - i[e] : n[t] - i[t];
  };
}
function Mm(t) {
  const e = t.chart,
    n = e.options.animation;
  e.notifyPlugins("afterRender"), ge(n && n.onComplete, [t], e);
}
function _O(t) {
  const e = t.chart,
    n = e.options.animation;
  ge(n && n.onProgress, [t], e);
}
function T_(t) {
  return (
    Np() && typeof t == "string"
      ? (t = document.getElementById(t))
      : t && t.length && (t = t[0]),
    t && t.canvas && (t = t.canvas),
    t
  );
}
const _l = {},
  Im = (t) => {
    const e = T_(t);
    return Object.values(_l)
      .filter((n) => n.canvas === e)
      .pop();
  };
function bO(t, e, n) {
  const i = Object.keys(t);
  for (const r of i) {
    const s = +r;
    if (s >= e) {
      const o = t[r];
      delete t[r], (n > 0 || s > e) && (t[s + n] = o);
    }
  }
}
function wO(t, e, n, i) {
  return !n || t.type === "mouseout" ? null : i ? e : t;
}
function Ka(t, e, n) {
  return t.options.clip ? t[n] : e[n];
}
function EO(t, e) {
  const { xScale: n, yScale: i } = t;
  return n && i
    ? {
        left: Ka(n, e, "left"),
        right: Ka(n, e, "right"),
        top: Ka(i, e, "top"),
        bottom: Ka(i, e, "bottom"),
      }
    : e;
}
var qn;
let da =
  ((qn = class {
    static register(...e) {
      hn.add(...e), $m();
    }
    static unregister(...e) {
      hn.remove(...e), $m();
    }
    constructor(e, n) {
      const i = (this.config = new gO(n)),
        r = T_(e),
        s = Im(r);
      if (s)
        throw new Error(
          "Canvas is already in use. Chart with ID '" +
            s.id +
            "' must be destroyed before the canvas with ID '" +
            s.canvas.id +
            "' can be reused.",
        );
      const o = i.createResolver(i.chartOptionScopes(), this.getContext());
      (this.platform = new (i.platform || B7(r))()),
        this.platform.updateConfig(i);
      const a = this.platform.acquireContext(r, o.aspectRatio),
        l = a && a.canvas,
        c = l && l.height,
        u = l && l.width;
      if (
        ((this.id = Nk()),
        (this.ctx = a),
        (this.canvas = l),
        (this.width = u),
        (this.height = c),
        (this._options = o),
        (this._aspectRatio = this.aspectRatio),
        (this._layers = []),
        (this._metasets = []),
        (this._stacks = void 0),
        (this.boxes = []),
        (this.currentDevicePixelRatio = void 0),
        (this.chartArea = void 0),
        (this._active = []),
        (this._lastEvent = void 0),
        (this._listeners = {}),
        (this._responsiveListeners = void 0),
        (this._sortedMetasets = []),
        (this.scales = {}),
        (this._plugins = new rO()),
        (this.$proxies = {}),
        (this._hiddenIndices = {}),
        (this.attached = !1),
        (this._animationsDisabled = void 0),
        (this.$context = void 0),
        (this._doResize = qk((d) => this.update(d), o.resizeDelay || 0)),
        (this._dataChanges = []),
        (_l[this.id] = this),
        !a || !l)
      ) {
        console.error(
          "Failed to create chart: can't acquire context from the given item",
        );
        return;
      }
      En.listen(this, "complete", Mm),
        En.listen(this, "progress", _O),
        this._initialize(),
        this.attached && this.update();
    }
    get aspectRatio() {
      const {
        options: { aspectRatio: e, maintainAspectRatio: n },
        width: i,
        height: r,
        _aspectRatio: s,
      } = this;
      return Ce(e) ? (n && s ? s : r ? i / r : null) : e;
    }
    get data() {
      return this.config.data;
    }
    set data(e) {
      this.config.data = e;
    }
    get options() {
      return this._options;
    }
    set options(e) {
      this.config.options = e;
    }
    get registry() {
      return hn;
    }
    _initialize() {
      return (
        this.notifyPlugins("beforeInit"),
        this.options.responsive
          ? this.resize()
          : lm(this, this.options.devicePixelRatio),
        this.bindEvents(),
        this.notifyPlugins("afterInit"),
        this
      );
    }
    clear() {
      return sm(this.canvas, this.ctx), this;
    }
    stop() {
      return En.stop(this), this;
    }
    resize(e, n) {
      En.running(this)
        ? (this._resizeBeforeDraw = { width: e, height: n })
        : this._resize(e, n);
    }
    _resize(e, n) {
      const i = this.options,
        r = this.canvas,
        s = i.maintainAspectRatio && this.aspectRatio,
        o = this.platform.getMaximumSize(r, e, n, s),
        a = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
        l = this.width ? "resize" : "attach";
      (this.width = o.width),
        (this.height = o.height),
        (this._aspectRatio = this.aspectRatio),
        lm(this, a, !0) &&
          (this.notifyPlugins("resize", { size: o }),
          ge(i.onResize, [this, o], this),
          this.attached && this._doResize(l) && this.render());
    }
    ensureScalesHaveIDs() {
      const n = this.options.scales || {};
      ue(n, (i, r) => {
        i.id = r;
      });
    }
    buildOrUpdateScales() {
      const e = this.options,
        n = e.scales,
        i = this.scales,
        r = Object.keys(i).reduce((o, a) => ((o[a] = !1), o), {});
      let s = [];
      n &&
        (s = s.concat(
          Object.keys(n).map((o) => {
            const a = n[o],
              l = Rf(o, a),
              c = l === "r",
              u = l === "x";
            return {
              options: a,
              dposition: c ? "chartArea" : u ? "bottom" : "left",
              dtype: c ? "radialLinear" : u ? "category" : "linear",
            };
          }),
        )),
        ue(s, (o) => {
          const a = o.options,
            l = a.id,
            c = Rf(l, a),
            u = re(a.type, o.dtype);
          (a.position === void 0 || Dm(a.position, c) !== Dm(o.dposition)) &&
            (a.position = o.dposition),
            (r[l] = !0);
          let d = null;
          if (l in i && i[l].type === u) d = i[l];
          else {
            const h = hn.getScale(u);
            (d = new h({ id: l, type: u, ctx: this.ctx, chart: this })),
              (i[d.id] = d);
          }
          d.init(a, e);
        }),
        ue(r, (o, a) => {
          o || delete i[a];
        }),
        ue(i, (o) => {
          Ft.configure(this, o, o.options), Ft.addBox(this, o);
        });
    }
    _updateMetasets() {
      const e = this._metasets,
        n = this.data.datasets.length,
        i = e.length;
      if ((e.sort((r, s) => r.index - s.index), i > n)) {
        for (let r = n; r < i; ++r) this._destroyDatasetMeta(r);
        e.splice(n, i - n);
      }
      this._sortedMetasets = e.slice(0).sort(Rm("order", "index"));
    }
    _removeUnreferencedMetasets() {
      const {
        _metasets: e,
        data: { datasets: n },
      } = this;
      e.length > n.length && delete this._stacks,
        e.forEach((i, r) => {
          n.filter((s) => s === i._dataset).length === 0 &&
            this._destroyDatasetMeta(r);
        });
    }
    buildOrUpdateControllers() {
      const e = [],
        n = this.data.datasets;
      let i, r;
      for (
        this._removeUnreferencedMetasets(), i = 0, r = n.length;
        i < r;
        i++
      ) {
        const s = n[i];
        let o = this.getDatasetMeta(i);
        const a = s.type || this.config.type;
        if (
          (o.type &&
            o.type !== a &&
            (this._destroyDatasetMeta(i), (o = this.getDatasetMeta(i))),
          (o.type = a),
          (o.indexAxis = s.indexAxis || Df(a, this.options)),
          (o.order = s.order || 0),
          (o.index = i),
          (o.label = "" + s.label),
          (o.visible = this.isDatasetVisible(i)),
          o.controller)
        )
          o.controller.updateIndex(i), o.controller.linkScales();
        else {
          const l = hn.getController(a),
            { datasetElementType: c, dataElementType: u } = Oe.datasets[a];
          Object.assign(l, {
            dataElementType: hn.getElement(u),
            datasetElementType: c && hn.getElement(c),
          }),
            (o.controller = new l(this, i)),
            e.push(o.controller);
        }
      }
      return this._updateMetasets(), e;
    }
    _resetElements() {
      ue(
        this.data.datasets,
        (e, n) => {
          this.getDatasetMeta(n).controller.reset();
        },
        this,
      );
    }
    reset() {
      this._resetElements(), this.notifyPlugins("reset");
    }
    update(e) {
      const n = this.config;
      n.update();
      const i = (this._options = n.createResolver(
          n.chartOptionScopes(),
          this.getContext(),
        )),
        r = (this._animationsDisabled = !i.animation);
      if (
        (this._updateScales(),
        this._checkEventBindings(),
        this._updateHiddenIndices(),
        this._plugins.invalidate(),
        this.notifyPlugins("beforeUpdate", { mode: e, cancelable: !0 }) === !1)
      )
        return;
      const s = this.buildOrUpdateControllers();
      this.notifyPlugins("beforeElementsUpdate");
      let o = 0;
      for (let c = 0, u = this.data.datasets.length; c < u; c++) {
        const { controller: d } = this.getDatasetMeta(c),
          h = !r && s.indexOf(d) === -1;
        d.buildOrUpdateElements(h), (o = Math.max(+d.getMaxOverflow(), o));
      }
      (o = this._minPadding = i.layout.autoPadding ? o : 0),
        this._updateLayout(o),
        r ||
          ue(s, (c) => {
            c.reset();
          }),
        this._updateDatasets(e),
        this.notifyPlugins("afterUpdate", { mode: e }),
        this._layers.sort(Rm("z", "_idx"));
      const { _active: a, _lastEvent: l } = this;
      l
        ? this._eventHandler(l, !0)
        : a.length && this._updateHoverStyles(a, a, !0),
        this.render();
    }
    _updateScales() {
      ue(this.scales, (e) => {
        Ft.removeBox(this, e);
      }),
        this.ensureScalesHaveIDs(),
        this.buildOrUpdateScales();
    }
    _checkEventBindings() {
      const e = this.options,
        n = new Set(Object.keys(this._listeners)),
        i = new Set(e.events);
      (!qg(n, i) || !!this._responsiveListeners !== e.responsive) &&
        (this.unbindEvents(), this.bindEvents());
    }
    _updateHiddenIndices() {
      const { _hiddenIndices: e } = this,
        n = this._getUniformDataChanges() || [];
      for (const { method: i, start: r, count: s } of n) {
        const o = i === "_removeElements" ? -s : s;
        bO(e, r, o);
      }
    }
    _getUniformDataChanges() {
      const e = this._dataChanges;
      if (!e || !e.length) return;
      this._dataChanges = [];
      const n = this.data.datasets.length,
        i = (s) =>
          new Set(
            e
              .filter((o) => o[0] === s)
              .map((o, a) => a + "," + o.splice(1).join(",")),
          ),
        r = i(0);
      for (let s = 1; s < n; s++) if (!qg(r, i(s))) return;
      return Array.from(r)
        .map((s) => s.split(","))
        .map((s) => ({ method: s[1], start: +s[2], count: +s[3] }));
    }
    _updateLayout(e) {
      if (this.notifyPlugins("beforeLayout", { cancelable: !0 }) === !1) return;
      Ft.update(this, this.width, this.height, e);
      const n = this.chartArea,
        i = n.width <= 0 || n.height <= 0;
      (this._layers = []),
        ue(
          this.boxes,
          (r) => {
            (i && r.position === "chartArea") ||
              (r.configure && r.configure(), this._layers.push(...r._layers()));
          },
          this,
        ),
        this._layers.forEach((r, s) => {
          r._idx = s;
        }),
        this.notifyPlugins("afterLayout");
    }
    _updateDatasets(e) {
      if (
        this.notifyPlugins("beforeDatasetsUpdate", {
          mode: e,
          cancelable: !0,
        }) !== !1
      ) {
        for (let n = 0, i = this.data.datasets.length; n < i; ++n)
          this.getDatasetMeta(n).controller.configure();
        for (let n = 0, i = this.data.datasets.length; n < i; ++n)
          this._updateDataset(n, bi(e) ? e({ datasetIndex: n }) : e);
        this.notifyPlugins("afterDatasetsUpdate", { mode: e });
      }
    }
    _updateDataset(e, n) {
      const i = this.getDatasetMeta(e),
        r = { meta: i, index: e, mode: n, cancelable: !0 };
      this.notifyPlugins("beforeDatasetUpdate", r) !== !1 &&
        (i.controller._update(n),
        (r.cancelable = !1),
        this.notifyPlugins("afterDatasetUpdate", r));
    }
    render() {
      this.notifyPlugins("beforeRender", { cancelable: !0 }) !== !1 &&
        (En.has(this)
          ? this.attached && !En.running(this) && En.start(this)
          : (this.draw(), Mm({ chart: this })));
    }
    draw() {
      let e;
      if (this._resizeBeforeDraw) {
        const { width: i, height: r } = this._resizeBeforeDraw;
        this._resize(i, r), (this._resizeBeforeDraw = null);
      }
      if (
        (this.clear(),
        this.width <= 0 ||
          this.height <= 0 ||
          this.notifyPlugins("beforeDraw", { cancelable: !0 }) === !1)
      )
        return;
      const n = this._layers;
      for (e = 0; e < n.length && n[e].z <= 0; ++e) n[e].draw(this.chartArea);
      for (this._drawDatasets(); e < n.length; ++e) n[e].draw(this.chartArea);
      this.notifyPlugins("afterDraw");
    }
    _getSortedDatasetMetas(e) {
      const n = this._sortedMetasets,
        i = [];
      let r, s;
      for (r = 0, s = n.length; r < s; ++r) {
        const o = n[r];
        (!e || o.visible) && i.push(o);
      }
      return i;
    }
    getSortedVisibleDatasetMetas() {
      return this._getSortedDatasetMetas(!0);
    }
    _drawDatasets() {
      if (this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }) === !1)
        return;
      const e = this.getSortedVisibleDatasetMetas();
      for (let n = e.length - 1; n >= 0; --n) this._drawDataset(e[n]);
      this.notifyPlugins("afterDatasetsDraw");
    }
    _drawDataset(e) {
      const n = this.ctx,
        i = e._clip,
        r = !i.disabled,
        s = EO(e, this.chartArea),
        o = { meta: e, index: e.index, cancelable: !0 };
      this.notifyPlugins("beforeDatasetDraw", o) !== !1 &&
        (r &&
          Sp(n, {
            left: i.left === !1 ? 0 : s.left - i.left,
            right: i.right === !1 ? this.width : s.right + i.right,
            top: i.top === !1 ? 0 : s.top - i.top,
            bottom: i.bottom === !1 ? this.height : s.bottom + i.bottom,
          }),
        e.controller.draw(),
        r && Cp(n),
        (o.cancelable = !1),
        this.notifyPlugins("afterDatasetDraw", o));
    }
    isPointInArea(e) {
      return Go(e, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(e, n, i, r) {
      const s = x7.modes[n];
      return typeof s == "function" ? s(this, e, i, r) : [];
    }
    getDatasetMeta(e) {
      const n = this.data.datasets[e],
        i = this._metasets;
      let r = i.filter((s) => s && s._dataset === n).pop();
      return (
        r ||
          ((r = {
            type: null,
            data: [],
            dataset: null,
            controller: null,
            hidden: null,
            xAxisID: null,
            yAxisID: null,
            order: (n && n.order) || 0,
            index: e,
            _dataset: n,
            _parsed: [],
            _sorted: !1,
          }),
          i.push(r)),
        r
      );
    }
    getContext() {
      return (
        this.$context ||
        (this.$context = hr(null, { chart: this, type: "chart" }))
      );
    }
    getVisibleDatasetCount() {
      return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(e) {
      const n = this.data.datasets[e];
      if (!n) return !1;
      const i = this.getDatasetMeta(e);
      return typeof i.hidden == "boolean" ? !i.hidden : !n.hidden;
    }
    setDatasetVisibility(e, n) {
      const i = this.getDatasetMeta(e);
      i.hidden = !n;
    }
    toggleDataVisibility(e) {
      this._hiddenIndices[e] = !this._hiddenIndices[e];
    }
    getDataVisibility(e) {
      return !this._hiddenIndices[e];
    }
    _updateVisibility(e, n, i) {
      const r = i ? "show" : "hide",
        s = this.getDatasetMeta(e),
        o = s.controller._resolveAnimations(void 0, r);
      cc(n)
        ? ((s.data[n].hidden = !i), this.update())
        : (this.setDatasetVisibility(e, i),
          o.update(s, { visible: i }),
          this.update((a) => (a.datasetIndex === e ? r : void 0)));
    }
    hide(e, n) {
      this._updateVisibility(e, n, !1);
    }
    show(e, n) {
      this._updateVisibility(e, n, !0);
    }
    _destroyDatasetMeta(e) {
      const n = this._metasets[e];
      n && n.controller && n.controller._destroy(), delete this._metasets[e];
    }
    _stop() {
      let e, n;
      for (
        this.stop(), En.remove(this), e = 0, n = this.data.datasets.length;
        e < n;
        ++e
      )
        this._destroyDatasetMeta(e);
    }
    destroy() {
      this.notifyPlugins("beforeDestroy");
      const { canvas: e, ctx: n } = this;
      this._stop(),
        this.config.clearCache(),
        e &&
          (this.unbindEvents(),
          sm(e, n),
          this.platform.releaseContext(n),
          (this.canvas = null),
          (this.ctx = null)),
        delete _l[this.id],
        this.notifyPlugins("afterDestroy");
    }
    toBase64Image(...e) {
      return this.canvas.toDataURL(...e);
    }
    bindEvents() {
      this.bindUserEvents(),
        this.options.responsive
          ? this.bindResponsiveEvents()
          : (this.attached = !0);
    }
    bindUserEvents() {
      const e = this._listeners,
        n = this.platform,
        i = (s, o) => {
          n.addEventListener(this, s, o), (e[s] = o);
        },
        r = (s, o, a) => {
          (s.offsetX = o), (s.offsetY = a), this._eventHandler(s);
        };
      ue(this.options.events, (s) => i(s, r));
    }
    bindResponsiveEvents() {
      this._responsiveListeners || (this._responsiveListeners = {});
      const e = this._responsiveListeners,
        n = this.platform,
        i = (l, c) => {
          n.addEventListener(this, l, c), (e[l] = c);
        },
        r = (l, c) => {
          e[l] && (n.removeEventListener(this, l, c), delete e[l]);
        },
        s = (l, c) => {
          this.canvas && this.resize(l, c);
        };
      let o;
      const a = () => {
        r("attach", a),
          (this.attached = !0),
          this.resize(),
          i("resize", s),
          i("detach", o);
      };
      (o = () => {
        (this.attached = !1),
          r("resize", s),
          this._stop(),
          this._resize(0, 0),
          i("attach", a);
      }),
        n.isAttached(this.canvas) ? a() : o();
    }
    unbindEvents() {
      ue(this._listeners, (e, n) => {
        this.platform.removeEventListener(this, n, e);
      }),
        (this._listeners = {}),
        ue(this._responsiveListeners, (e, n) => {
          this.platform.removeEventListener(this, n, e);
        }),
        (this._responsiveListeners = void 0);
    }
    updateHoverStyle(e, n, i) {
      const r = i ? "set" : "remove";
      let s, o, a, l;
      for (
        n === "dataset" &&
          ((s = this.getDatasetMeta(e[0].datasetIndex)),
          s.controller["_" + r + "DatasetHoverStyle"]()),
          a = 0,
          l = e.length;
        a < l;
        ++a
      ) {
        o = e[a];
        const c = o && this.getDatasetMeta(o.datasetIndex).controller;
        c && c[r + "HoverStyle"](o.element, o.datasetIndex, o.index);
      }
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(e) {
      const n = this._active || [],
        i = e.map(({ datasetIndex: s, index: o }) => {
          const a = this.getDatasetMeta(s);
          if (!a) throw new Error("No dataset found at index " + s);
          return { datasetIndex: s, element: a.data[o], index: o };
        });
      !oc(i, n) &&
        ((this._active = i),
        (this._lastEvent = null),
        this._updateHoverStyles(i, n));
    }
    notifyPlugins(e, n, i) {
      return this._plugins.notify(this, e, n, i);
    }
    isPluginEnabled(e) {
      return this._plugins._cache.filter((n) => n.plugin.id === e).length === 1;
    }
    _updateHoverStyles(e, n, i) {
      const r = this.options.hover,
        s = (l, c) =>
          l.filter(
            (u) =>
              !c.some(
                (d) => u.datasetIndex === d.datasetIndex && u.index === d.index,
              ),
          ),
        o = s(n, e),
        a = i ? e : s(e, n);
      o.length && this.updateHoverStyle(o, r.mode, !1),
        a.length && r.mode && this.updateHoverStyle(a, r.mode, !0);
    }
    _eventHandler(e, n) {
      const i = {
          event: e,
          replay: n,
          cancelable: !0,
          inChartArea: this.isPointInArea(e),
        },
        r = (o) =>
          (o.options.events || this.options.events).includes(e.native.type);
      if (this.notifyPlugins("beforeEvent", i, r) === !1) return;
      const s = this._handleEvent(e, n, i.inChartArea);
      return (
        (i.cancelable = !1),
        this.notifyPlugins("afterEvent", i, r),
        (s || i.changed) && this.render(),
        this
      );
    }
    _handleEvent(e, n, i) {
      const { _active: r = [], options: s } = this,
        o = n,
        a = this._getActiveElements(e, r, i, o),
        l = Rk(e),
        c = wO(e, this._lastEvent, i, l);
      i &&
        ((this._lastEvent = null),
        ge(s.onHover, [e, a, this], this),
        l && ge(s.onClick, [e, a, this], this));
      const u = !oc(a, r);
      return (
        (u || n) && ((this._active = a), this._updateHoverStyles(a, r, n)),
        (this._lastEvent = c),
        u
      );
    }
    _getActiveElements(e, n, i, r) {
      if (e.type === "mouseout") return [];
      if (!i) return n;
      const s = this.options.hover;
      return this.getElementsAtEventForMode(e, s.mode, s, r);
    }
  }),
  te(qn, "defaults", Oe),
  te(qn, "instances", _l),
  te(qn, "overrides", ar),
  te(qn, "registry", hn),
  te(qn, "version", vO),
  te(qn, "getChart", Im),
  qn);
function $m() {
  return ue(da.instances, (t) => t._plugins.invalidate());
}
function N_(t, e, n = e) {
  (t.lineCap = re(n.borderCapStyle, e.borderCapStyle)),
    t.setLineDash(re(n.borderDash, e.borderDash)),
    (t.lineDashOffset = re(n.borderDashOffset, e.borderDashOffset)),
    (t.lineJoin = re(n.borderJoinStyle, e.borderJoinStyle)),
    (t.lineWidth = re(n.borderWidth, e.borderWidth)),
    (t.strokeStyle = re(n.borderColor, e.borderColor));
}
function SO(t, e, n) {
  t.lineTo(n.x, n.y);
}
function CO(t) {
  return t.stepped
    ? l6
    : t.tension || t.cubicInterpolationMode === "monotone"
    ? c6
    : SO;
}
function A_(t, e, n = {}) {
  const i = t.length,
    { start: r = 0, end: s = i - 1 } = n,
    { start: o, end: a } = e,
    l = Math.max(r, o),
    c = Math.min(s, a),
    u = (r < o && s < o) || (r > a && s > a);
  return {
    count: i,
    start: l,
    loop: e.loop,
    ilen: c < l && !u ? i + c - l : c - l,
  };
}
function kO(t, e, n, i) {
  const { points: r, options: s } = e,
    { count: o, start: a, loop: l, ilen: c } = A_(r, n, i),
    u = CO(s);
  let { move: d = !0, reverse: h } = i || {},
    p,
    g,
    y;
  for (p = 0; p <= c; ++p)
    (g = r[(a + (h ? c - p : p)) % o]),
      !g.skip &&
        (d ? (t.moveTo(g.x, g.y), (d = !1)) : u(t, y, g, h, s.stepped),
        (y = g));
  return l && ((g = r[(a + (h ? c : 0)) % o]), u(t, y, g, h, s.stepped)), !!l;
}
function OO(t, e, n, i) {
  const r = e.points,
    { count: s, start: o, ilen: a } = A_(r, n, i),
    { move: l = !0, reverse: c } = i || {};
  let u = 0,
    d = 0,
    h,
    p,
    g,
    y,
    v,
    m;
  const x = (w) => (o + (c ? a - w : w)) % s,
    _ = () => {
      y !== v && (t.lineTo(u, v), t.lineTo(u, y), t.lineTo(u, m));
    };
  for (l && ((p = r[x(0)]), t.moveTo(p.x, p.y)), h = 0; h <= a; ++h) {
    if (((p = r[x(h)]), p.skip)) continue;
    const w = p.x,
      E = p.y,
      S = w | 0;
    S === g
      ? (E < y ? (y = E) : E > v && (v = E), (u = (d * u + w) / ++d))
      : (_(), t.lineTo(w, E), (g = S), (d = 0), (y = v = E)),
      (m = E);
  }
  _();
}
function Mf(t) {
  const e = t.options,
    n = e.borderDash && e.borderDash.length;
  return !t._decimated &&
    !t._loop &&
    !e.tension &&
    e.cubicInterpolationMode !== "monotone" &&
    !e.stepped &&
    !n
    ? OO
    : kO;
}
function TO(t) {
  return t.stepped
    ? W6
    : t.tension || t.cubicInterpolationMode === "monotone"
    ? H6
    : Fi;
}
function NO(t, e, n, i) {
  let r = e._path;
  r || ((r = e._path = new Path2D()), e.path(r, n, i) && r.closePath()),
    N_(t, e.options),
    t.stroke(r);
}
function AO(t, e, n, i) {
  const { segments: r, options: s } = e,
    o = Mf(e);
  for (const a of r)
    N_(t, s, a.style),
      t.beginPath(),
      o(t, e, a, { start: n, end: n + i - 1 }) && t.closePath(),
      t.stroke();
}
const PO = typeof Path2D == "function";
function LO(t, e, n, i) {
  PO && !e.options.segment ? NO(t, e, n, i) : AO(t, e, n, i);
}
class Fr extends pr {
  constructor(e) {
    super(),
      (this.animated = !0),
      (this.options = void 0),
      (this._chart = void 0),
      (this._loop = void 0),
      (this._fullLoop = void 0),
      (this._path = void 0),
      (this._points = void 0),
      (this._segments = void 0),
      (this._decimated = !1),
      (this._pointsUpdated = !1),
      (this._datasetIndex = void 0),
      e && Object.assign(this, e);
  }
  updateControlPoints(e, n) {
    const i = this.options;
    if (
      (i.tension || i.cubicInterpolationMode === "monotone") &&
      !i.stepped &&
      !this._pointsUpdated
    ) {
      const r = i.spanGaps ? this._loop : this._fullLoop;
      D6(this._points, i, e, r, n), (this._pointsUpdated = !0);
    }
  }
  set points(e) {
    (this._points = e),
      delete this._segments,
      delete this._path,
      (this._pointsUpdated = !1);
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = Q6(this, this.options.segment));
  }
  first() {
    const e = this.segments,
      n = this.points;
    return e.length && n[e[0].start];
  }
  last() {
    const e = this.segments,
      n = this.points,
      i = e.length;
    return i && n[e[i - 1].end];
  }
  interpolate(e, n) {
    const i = this.options,
      r = e[n],
      s = this.points,
      o = G6(this, { property: n, start: r, end: r });
    if (!o.length) return;
    const a = [],
      l = TO(i);
    let c, u;
    for (c = 0, u = o.length; c < u; ++c) {
      const { start: d, end: h } = o[c],
        p = s[d],
        g = s[h];
      if (p === g) {
        a.push(p);
        continue;
      }
      const y = Math.abs((r - p[n]) / (g[n] - p[n])),
        v = l(p, g, y, i.stepped);
      (v[n] = e[n]), a.push(v);
    }
    return a.length === 1 ? a[0] : a;
  }
  pathSegment(e, n, i) {
    return Mf(this)(e, this, n, i);
  }
  path(e, n, i) {
    const r = this.segments,
      s = Mf(this);
    let o = this._loop;
    (n = n || 0), (i = i || this.points.length - n);
    for (const a of r) o &= s(e, this, a, { start: n, end: n + i - 1 });
    return !!o;
  }
  draw(e, n, i, r) {
    const s = this.options || {};
    (this.points || []).length &&
      s.borderWidth &&
      (e.save(), LO(e, this, i, r), e.restore()),
      this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
  }
}
te(Fr, "id", "line"),
  te(Fr, "defaults", {
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: "default",
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0,
  }),
  te(Fr, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  }),
  te(Fr, "descriptors", {
    _scriptable: !0,
    _indexable: (e) => e !== "borderDash" && e !== "fill",
  });
function Fm(t, e, n, i) {
  const r = t.options,
    { [n]: s } = t.getProps([n], i);
  return Math.abs(e - s) < r.radius + r.hitRadius;
}
class wo extends pr {
  constructor(n) {
    super();
    te(this, "parsed");
    te(this, "skip");
    te(this, "stop");
    (this.options = void 0),
      (this.parsed = void 0),
      (this.skip = void 0),
      (this.stop = void 0),
      n && Object.assign(this, n);
  }
  inRange(n, i, r) {
    const s = this.options,
      { x: o, y: a } = this.getProps(["x", "y"], r);
    return (
      Math.pow(n - o, 2) + Math.pow(i - a, 2) <
      Math.pow(s.hitRadius + s.radius, 2)
    );
  }
  inXRange(n, i) {
    return Fm(this, n, "x", i);
  }
  inYRange(n, i) {
    return Fm(this, n, "y", i);
  }
  getCenterPoint(n) {
    const { x: i, y: r } = this.getProps(["x", "y"], n);
    return { x: i, y: r };
  }
  size(n) {
    n = n || this.options || {};
    let i = n.radius || 0;
    i = Math.max(i, (i && n.hoverRadius) || 0);
    const r = (i && n.borderWidth) || 0;
    return (i + r) * 2;
  }
  draw(n, i) {
    const r = this.options;
    this.skip ||
      r.radius < 0.1 ||
      !Go(this, i, this.size(r) / 2) ||
      ((n.strokeStyle = r.borderColor),
      (n.lineWidth = r.borderWidth),
      (n.fillStyle = r.backgroundColor),
      Lf(n, r, this.x, this.y));
  }
  getRange() {
    const n = this.options || {};
    return n.radius + n.hitRadius;
  }
}
te(wo, "id", "point"),
  te(wo, "defaults", {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: "circle",
    radius: 3,
    rotation: 0,
  }),
  te(wo, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  });
const Bm = (t, e) => {
    let { boxHeight: n = e, boxWidth: i = e } = t;
    return (
      t.usePointStyle &&
        ((n = Math.min(n, e)), (i = t.pointStyleWidth || Math.min(i, e))),
      { boxWidth: i, boxHeight: n, itemHeight: Math.max(e, n) }
    );
  },
  jO = (t, e) =>
    t !== null &&
    e !== null &&
    t.datasetIndex === e.datasetIndex &&
    t.index === e.index;
class zm extends pr {
  constructor(e) {
    super(),
      (this._added = !1),
      (this.legendHitBoxes = []),
      (this._hoveredItem = null),
      (this.doughnutMode = !1),
      (this.chart = e.chart),
      (this.options = e.options),
      (this.ctx = e.ctx),
      (this.legendItems = void 0),
      (this.columnSizes = void 0),
      (this.lineWidths = void 0),
      (this.maxHeight = void 0),
      (this.maxWidth = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this._margins = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(e, n, i) {
    (this.maxWidth = e),
      (this.maxHeight = n),
      (this._margins = i),
      this.setDimensions(),
      this.buildLabels(),
      this.fit();
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = this._margins.left),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = this._margins.top),
        (this.bottom = this.height));
  }
  buildLabels() {
    const e = this.options.labels || {};
    let n = ge(e.generateLabels, [this.chart], this) || [];
    e.filter && (n = n.filter((i) => e.filter(i, this.chart.data))),
      e.sort && (n = n.sort((i, r) => e.sort(i, r, this.chart.data))),
      this.options.reverse && n.reverse(),
      (this.legendItems = n);
  }
  fit() {
    const { options: e, ctx: n } = this;
    if (!e.display) {
      this.width = this.height = 0;
      return;
    }
    const i = e.labels,
      r = Ze(i.font),
      s = r.size,
      o = this._computeTitleHeight(),
      { boxWidth: a, itemHeight: l } = Bm(i, s);
    let c, u;
    (n.font = r.string),
      this.isHorizontal()
        ? ((c = this.maxWidth), (u = this._fitRows(o, s, a, l) + 10))
        : ((u = this.maxHeight), (c = this._fitCols(o, r, a, l) + 10)),
      (this.width = Math.min(c, e.maxWidth || this.maxWidth)),
      (this.height = Math.min(u, e.maxHeight || this.maxHeight));
  }
  _fitRows(e, n, i, r) {
    const {
        ctx: s,
        maxWidth: o,
        options: {
          labels: { padding: a },
        },
      } = this,
      l = (this.legendHitBoxes = []),
      c = (this.lineWidths = [0]),
      u = r + a;
    let d = e;
    (s.textAlign = "left"), (s.textBaseline = "middle");
    let h = -1,
      p = -u;
    return (
      this.legendItems.forEach((g, y) => {
        const v = i + n / 2 + s.measureText(g.text).width;
        (y === 0 || c[c.length - 1] + v + 2 * a > o) &&
          ((d += u), (c[c.length - (y > 0 ? 0 : 1)] = 0), (p += u), h++),
          (l[y] = { left: 0, top: p, row: h, width: v, height: r }),
          (c[c.length - 1] += v + a);
      }),
      d
    );
  }
  _fitCols(e, n, i, r) {
    const {
        ctx: s,
        maxHeight: o,
        options: {
          labels: { padding: a },
        },
      } = this,
      l = (this.legendHitBoxes = []),
      c = (this.columnSizes = []),
      u = o - e;
    let d = a,
      h = 0,
      p = 0,
      g = 0,
      y = 0;
    return (
      this.legendItems.forEach((v, m) => {
        const { itemWidth: x, itemHeight: _ } = DO(i, n, s, v, r);
        m > 0 &&
          p + _ + 2 * a > u &&
          ((d += h + a),
          c.push({ width: h, height: p }),
          (g += h + a),
          y++,
          (h = p = 0)),
          (l[m] = { left: g, top: p, col: y, width: x, height: _ }),
          (h = Math.max(h, x)),
          (p += _ + a);
      }),
      (d += h),
      c.push({ width: h, height: p }),
      d
    );
  }
  adjustHitBoxes() {
    if (!this.options.display) return;
    const e = this._computeTitleHeight(),
      {
        legendHitBoxes: n,
        options: {
          align: i,
          labels: { padding: r },
          rtl: s,
        },
      } = this,
      o = Gr(s, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0,
        l = Qe(i, this.left + r, this.right - this.lineWidths[a]);
      for (const c of n)
        a !== c.row &&
          ((a = c.row),
          (l = Qe(i, this.left + r, this.right - this.lineWidths[a]))),
          (c.top += this.top + e + r),
          (c.left = o.leftForLtr(o.x(l), c.width)),
          (l += c.width + r);
    } else {
      let a = 0,
        l = Qe(i, this.top + e + r, this.bottom - this.columnSizes[a].height);
      for (const c of n)
        c.col !== a &&
          ((a = c.col),
          (l = Qe(
            i,
            this.top + e + r,
            this.bottom - this.columnSizes[a].height,
          ))),
          (c.top = l),
          (c.left += this.left + r),
          (c.left = o.leftForLtr(o.x(c.left), c.width)),
          (l += c.height + r);
    }
  }
  isHorizontal() {
    return (
      this.options.position === "top" || this.options.position === "bottom"
    );
  }
  draw() {
    if (this.options.display) {
      const e = this.ctx;
      Sp(e, this), this._draw(), Cp(e);
    }
  }
  _draw() {
    const { options: e, columnSizes: n, lineWidths: i, ctx: r } = this,
      { align: s, labels: o } = e,
      a = Oe.color,
      l = Gr(e.rtl, this.left, this.width),
      c = Ze(o.font),
      { padding: u } = o,
      d = c.size,
      h = d / 2;
    let p;
    this.drawTitle(),
      (r.textAlign = l.textAlign("left")),
      (r.textBaseline = "middle"),
      (r.lineWidth = 0.5),
      (r.font = c.string);
    const { boxWidth: g, boxHeight: y, itemHeight: v } = Bm(o, d),
      m = function (S, C, k) {
        if (isNaN(g) || g <= 0 || isNaN(y) || y < 0) return;
        r.save();
        const P = re(k.lineWidth, 1);
        if (
          ((r.fillStyle = re(k.fillStyle, a)),
          (r.lineCap = re(k.lineCap, "butt")),
          (r.lineDashOffset = re(k.lineDashOffset, 0)),
          (r.lineJoin = re(k.lineJoin, "miter")),
          (r.lineWidth = P),
          (r.strokeStyle = re(k.strokeStyle, a)),
          r.setLineDash(re(k.lineDash, [])),
          o.usePointStyle)
        ) {
          const j = {
              radius: (y * Math.SQRT2) / 2,
              pointStyle: k.pointStyle,
              rotation: k.rotation,
              borderWidth: P,
            },
            $ = l.xPlus(S, g / 2),
            A = C + h;
          l_(r, j, $, A, o.pointStyleWidth && g);
        } else {
          const j = C + Math.max((d - y) / 2, 0),
            $ = l.leftForLtr(S, g),
            A = _o(k.borderRadius);
          r.beginPath(),
            Object.values(A).some((M) => M !== 0)
              ? jf(r, { x: $, y: j, w: g, h: y, radius: A })
              : r.rect($, j, g, y),
            r.fill(),
            P !== 0 && r.stroke();
        }
        r.restore();
      },
      x = function (S, C, k) {
        qo(r, k.text, S, C + v / 2, c, {
          strikethrough: k.hidden,
          textAlign: l.textAlign(k.textAlign),
        });
      },
      _ = this.isHorizontal(),
      w = this._computeTitleHeight();
    _
      ? (p = {
          x: Qe(s, this.left + u, this.right - i[0]),
          y: this.top + u + w,
          line: 0,
        })
      : (p = {
          x: this.left + u,
          y: Qe(s, this.top + w + u, this.bottom - n[0].height),
          line: 0,
        }),
      g_(this.ctx, e.textDirection);
    const E = v + u;
    this.legendItems.forEach((S, C) => {
      (r.strokeStyle = S.fontColor), (r.fillStyle = S.fontColor);
      const k = r.measureText(S.text).width,
        P = l.textAlign(S.textAlign || (S.textAlign = o.textAlign)),
        j = g + h + k;
      let $ = p.x,
        A = p.y;
      l.setWidth(this.width),
        _
          ? C > 0 &&
            $ + j + u > this.right &&
            ((A = p.y += E),
            p.line++,
            ($ = p.x = Qe(s, this.left + u, this.right - i[p.line])))
          : C > 0 &&
            A + E > this.bottom &&
            (($ = p.x = $ + n[p.line].width + u),
            p.line++,
            (A = p.y =
              Qe(s, this.top + w + u, this.bottom - n[p.line].height)));
      const M = l.x($);
      if (
        (m(M, A, S),
        ($ = Xk(P, $ + g + h, _ ? $ + j : this.right, e.rtl)),
        x(l.x($), A, S),
        _)
      )
        p.x += j + u;
      else if (typeof S.text != "string") {
        const V = c.lineHeight;
        p.y += P_(S, V) + u;
      } else p.y += E;
    }),
      m_(this.ctx, e.textDirection);
  }
  drawTitle() {
    const e = this.options,
      n = e.title,
      i = Ze(n.font),
      r = Ut(n.padding);
    if (!n.display) return;
    const s = Gr(e.rtl, this.left, this.width),
      o = this.ctx,
      a = n.position,
      l = i.size / 2,
      c = r.top + l;
    let u,
      d = this.left,
      h = this.width;
    if (this.isHorizontal())
      (h = Math.max(...this.lineWidths)),
        (u = this.top + c),
        (d = Qe(e.align, d, this.right - h));
    else {
      const g = this.columnSizes.reduce((y, v) => Math.max(y, v.height), 0);
      u =
        c +
        Qe(
          e.align,
          this.top,
          this.bottom - g - e.labels.padding - this._computeTitleHeight(),
        );
    }
    const p = Qe(a, d, d + h);
    (o.textAlign = s.textAlign(wp(a))),
      (o.textBaseline = "middle"),
      (o.strokeStyle = n.color),
      (o.fillStyle = n.color),
      (o.font = i.string),
      qo(o, n.text, p, u, i);
  }
  _computeTitleHeight() {
    const e = this.options.title,
      n = Ze(e.font),
      i = Ut(e.padding);
    return e.display ? n.lineHeight + i.height : 0;
  }
  _getLegendItemAt(e, n) {
    let i, r, s;
    if (eo(e, this.left, this.right) && eo(n, this.top, this.bottom)) {
      for (s = this.legendHitBoxes, i = 0; i < s.length; ++i)
        if (
          ((r = s[i]),
          eo(e, r.left, r.left + r.width) && eo(n, r.top, r.top + r.height))
        )
          return this.legendItems[i];
    }
    return null;
  }
  handleEvent(e) {
    const n = this.options;
    if (!IO(e.type, n)) return;
    const i = this._getLegendItemAt(e.x, e.y);
    if (e.type === "mousemove" || e.type === "mouseout") {
      const r = this._hoveredItem,
        s = jO(r, i);
      r && !s && ge(n.onLeave, [e, r, this], this),
        (this._hoveredItem = i),
        i && !s && ge(n.onHover, [e, i, this], this);
    } else i && ge(n.onClick, [e, i, this], this);
  }
}
function DO(t, e, n, i, r) {
  const s = RO(i, t, e, n),
    o = MO(r, i, e.lineHeight);
  return { itemWidth: s, itemHeight: o };
}
function RO(t, e, n, i) {
  let r = t.text;
  return (
    r &&
      typeof r != "string" &&
      (r = r.reduce((s, o) => (s.length > o.length ? s : o))),
    e + n.size / 2 + i.measureText(r).width
  );
}
function MO(t, e, n) {
  let i = t;
  return typeof e.text != "string" && (i = P_(e, n)), i;
}
function P_(t, e) {
  const n = t.text ? t.text.length : 0;
  return e * n;
}
function IO(t, e) {
  return !!(
    ((t === "mousemove" || t === "mouseout") && (e.onHover || e.onLeave)) ||
    (e.onClick && (t === "click" || t === "mouseup"))
  );
}
var L_ = {
  id: "legend",
  _element: zm,
  start(t, e, n) {
    const i = (t.legend = new zm({ ctx: t.ctx, options: n, chart: t }));
    Ft.configure(t, i, n), Ft.addBox(t, i);
  },
  stop(t) {
    Ft.removeBox(t, t.legend), delete t.legend;
  },
  beforeUpdate(t, e, n) {
    const i = t.legend;
    Ft.configure(t, i, n), (i.options = n);
  },
  afterUpdate(t) {
    const e = t.legend;
    e.buildLabels(), e.adjustHitBoxes();
  },
  afterEvent(t, e) {
    e.replay || t.legend.handleEvent(e.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(t, e, n) {
      const i = e.datasetIndex,
        r = n.chart;
      r.isDatasetVisible(i)
        ? (r.hide(i), (e.hidden = !0))
        : (r.show(i), (e.hidden = !1));
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (t) => t.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(t) {
        const e = t.data.datasets,
          {
            labels: {
              usePointStyle: n,
              pointStyle: i,
              textAlign: r,
              color: s,
              useBorderRadius: o,
              borderRadius: a,
            },
          } = t.legend.options;
        return t._getSortedDatasetMetas().map((l) => {
          const c = l.controller.getStyle(n ? 0 : void 0),
            u = Ut(c.borderWidth);
          return {
            text: e[l.index].label,
            fillStyle: c.backgroundColor,
            fontColor: s,
            hidden: !l.visible,
            lineCap: c.borderCapStyle,
            lineDash: c.borderDash,
            lineDashOffset: c.borderDashOffset,
            lineJoin: c.borderJoinStyle,
            lineWidth: (u.width + u.height) / 4,
            strokeStyle: c.borderColor,
            pointStyle: i || c.pointStyle,
            rotation: c.rotation,
            textAlign: r || c.textAlign,
            borderRadius: o && (a || c.borderRadius),
            datasetIndex: l.index,
          };
        }, this);
      },
    },
    title: {
      color: (t) => t.chart.options.color,
      display: !1,
      position: "center",
      text: "",
    },
  },
  descriptors: {
    _scriptable: (t) => !t.startsWith("on"),
    labels: {
      _scriptable: (t) => !["generateLabels", "filter", "sort"].includes(t),
    },
  },
};
class j_ extends pr {
  constructor(e) {
    super(),
      (this.chart = e.chart),
      (this.options = e.options),
      (this.ctx = e.ctx),
      (this._padding = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(e, n) {
    const i = this.options;
    if (((this.left = 0), (this.top = 0), !i.display)) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    (this.width = this.right = e), (this.height = this.bottom = n);
    const r = $e(i.text) ? i.text.length : 1;
    this._padding = Ut(i.padding);
    const s = r * Ze(i.font).lineHeight + this._padding.height;
    this.isHorizontal() ? (this.height = s) : (this.width = s);
  }
  isHorizontal() {
    const e = this.options.position;
    return e === "top" || e === "bottom";
  }
  _drawArgs(e) {
    const { top: n, left: i, bottom: r, right: s, options: o } = this,
      a = o.align;
    let l = 0,
      c,
      u,
      d;
    return (
      this.isHorizontal()
        ? ((u = Qe(a, i, s)), (d = n + e), (c = s - i))
        : (o.position === "left"
            ? ((u = i + e), (d = Qe(a, r, n)), (l = Be * -0.5))
            : ((u = s - e), (d = Qe(a, n, r)), (l = Be * 0.5)),
          (c = r - n)),
      { titleX: u, titleY: d, maxWidth: c, rotation: l }
    );
  }
  draw() {
    const e = this.ctx,
      n = this.options;
    if (!n.display) return;
    const i = Ze(n.font),
      s = i.lineHeight / 2 + this._padding.top,
      { titleX: o, titleY: a, maxWidth: l, rotation: c } = this._drawArgs(s);
    qo(e, n.text, 0, 0, i, {
      color: n.color,
      maxWidth: l,
      rotation: c,
      textAlign: wp(n.align),
      textBaseline: "middle",
      translation: [o, a],
    });
  }
}
function $O(t, e) {
  const n = new j_({ ctx: t.ctx, options: e, chart: t });
  Ft.configure(t, n, e), Ft.addBox(t, n), (t.titleBlock = n);
}
var D_ = {
  id: "title",
  _element: j_,
  start(t, e, n) {
    $O(t, n);
  },
  stop(t) {
    const e = t.titleBlock;
    Ft.removeBox(t, e), delete t.titleBlock;
  },
  beforeUpdate(t, e, n) {
    const i = t.titleBlock;
    Ft.configure(t, i, n), (i.options = n);
  },
  defaults: {
    align: "center",
    display: !1,
    font: { weight: "bold" },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3,
  },
  defaultRoutes: { color: "color" },
  descriptors: { _scriptable: !0, _indexable: !1 },
};
const no = {
  average(t) {
    if (!t.length) return !1;
    let e,
      n,
      i = new Set(),
      r = 0,
      s = 0;
    for (e = 0, n = t.length; e < n; ++e) {
      const a = t[e].element;
      if (a && a.hasValue()) {
        const l = a.tooltipPosition();
        i.add(l.x), (r += l.y), ++s;
      }
    }
    return { x: [...i].reduce((a, l) => a + l) / i.size, y: r / s };
  },
  nearest(t, e) {
    if (!t.length) return !1;
    let n = e.x,
      i = e.y,
      r = Number.POSITIVE_INFINITY,
      s,
      o,
      a;
    for (s = 0, o = t.length; s < o; ++s) {
      const l = t[s].element;
      if (l && l.hasValue()) {
        const c = l.getCenterPoint(),
          u = Af(e, c);
        u < r && ((r = u), (a = l));
      }
    }
    if (a) {
      const l = a.tooltipPosition();
      (n = l.x), (i = l.y);
    }
    return { x: n, y: i };
  },
};
function dn(t, e) {
  return e && ($e(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
}
function Sn(t) {
  return (typeof t == "string" || t instanceof String) &&
    t.indexOf(`
`) > -1
    ? t.split(`
`)
    : t;
}
function FO(t, e) {
  const { element: n, datasetIndex: i, index: r } = e,
    s = t.getDatasetMeta(i).controller,
    { label: o, value: a } = s.getLabelAndValue(r);
  return {
    chart: t,
    label: o,
    parsed: s.getParsed(r),
    raw: t.data.datasets[i].data[r],
    formattedValue: a,
    dataset: s.getDataset(),
    dataIndex: r,
    datasetIndex: i,
    element: n,
  };
}
function Wm(t, e) {
  const n = t.chart.ctx,
    { body: i, footer: r, title: s } = t,
    { boxWidth: o, boxHeight: a } = e,
    l = Ze(e.bodyFont),
    c = Ze(e.titleFont),
    u = Ze(e.footerFont),
    d = s.length,
    h = r.length,
    p = i.length,
    g = Ut(e.padding);
  let y = g.height,
    v = 0,
    m = i.reduce(
      (w, E) => w + E.before.length + E.lines.length + E.after.length,
      0,
    );
  if (
    ((m += t.beforeBody.length + t.afterBody.length),
    d &&
      (y += d * c.lineHeight + (d - 1) * e.titleSpacing + e.titleMarginBottom),
    m)
  ) {
    const w = e.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    y += p * w + (m - p) * l.lineHeight + (m - 1) * e.bodySpacing;
  }
  h && (y += e.footerMarginTop + h * u.lineHeight + (h - 1) * e.footerSpacing);
  let x = 0;
  const _ = function (w) {
    v = Math.max(v, n.measureText(w).width + x);
  };
  return (
    n.save(),
    (n.font = c.string),
    ue(t.title, _),
    (n.font = l.string),
    ue(t.beforeBody.concat(t.afterBody), _),
    (x = e.displayColors ? o + 2 + e.boxPadding : 0),
    ue(i, (w) => {
      ue(w.before, _), ue(w.lines, _), ue(w.after, _);
    }),
    (x = 0),
    (n.font = u.string),
    ue(t.footer, _),
    n.restore(),
    (v += g.width),
    { width: v, height: y }
  );
}
function BO(t, e) {
  const { y: n, height: i } = e;
  return n < i / 2 ? "top" : n > t.height - i / 2 ? "bottom" : "center";
}
function zO(t, e, n, i) {
  const { x: r, width: s } = i,
    o = n.caretSize + n.caretPadding;
  if ((t === "left" && r + s + o > e.width) || (t === "right" && r - s - o < 0))
    return !0;
}
function WO(t, e, n, i) {
  const { x: r, width: s } = n,
    {
      width: o,
      chartArea: { left: a, right: l },
    } = t;
  let c = "center";
  return (
    i === "center"
      ? (c = r <= (a + l) / 2 ? "left" : "right")
      : r <= s / 2
      ? (c = "left")
      : r >= o - s / 2 && (c = "right"),
    zO(c, t, e, n) && (c = "center"),
    c
  );
}
function Hm(t, e, n) {
  const i = n.yAlign || e.yAlign || BO(t, n);
  return { xAlign: n.xAlign || e.xAlign || WO(t, e, n, i), yAlign: i };
}
function HO(t, e) {
  let { x: n, width: i } = t;
  return e === "right" ? (n -= i) : e === "center" && (n -= i / 2), n;
}
function VO(t, e, n) {
  let { y: i, height: r } = t;
  return (
    e === "top" ? (i += n) : e === "bottom" ? (i -= r + n) : (i -= r / 2), i
  );
}
function Vm(t, e, n, i) {
  const { caretSize: r, caretPadding: s, cornerRadius: o } = t,
    { xAlign: a, yAlign: l } = n,
    c = r + s,
    { topLeft: u, topRight: d, bottomLeft: h, bottomRight: p } = _o(o);
  let g = HO(e, a);
  const y = VO(e, l, c);
  return (
    l === "center"
      ? a === "left"
        ? (g += c)
        : a === "right" && (g -= c)
      : a === "left"
      ? (g -= Math.max(u, h) + r)
      : a === "right" && (g += Math.max(d, p) + r),
    { x: $t(g, 0, i.width - e.width), y: $t(y, 0, i.height - e.height) }
  );
}
function Ga(t, e, n) {
  const i = Ut(n.padding);
  return e === "center"
    ? t.x + t.width / 2
    : e === "right"
    ? t.x + t.width - i.right
    : t.x + i.left;
}
function Um(t) {
  return dn([], Sn(t));
}
function UO(t, e, n) {
  return hr(t, { tooltip: e, tooltipItems: n, type: "tooltip" });
}
function Ym(t, e) {
  const n = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
  return n ? t.override(n) : t;
}
const R_ = {
  beforeTitle: wn,
  title(t) {
    if (t.length > 0) {
      const e = t[0],
        n = e.chart.data.labels,
        i = n ? n.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return e.dataset.label || "";
      if (e.label) return e.label;
      if (i > 0 && e.dataIndex < i) return n[e.dataIndex];
    }
    return "";
  },
  afterTitle: wn,
  beforeBody: wn,
  beforeLabel: wn,
  label(t) {
    if (this && this.options && this.options.mode === "dataset")
      return t.label + ": " + t.formattedValue || t.formattedValue;
    let e = t.dataset.label || "";
    e && (e += ": ");
    const n = t.formattedValue;
    return Ce(n) || (e += n), e;
  },
  labelColor(t) {
    const n = t.chart
      .getDatasetMeta(t.datasetIndex)
      .controller.getStyle(t.dataIndex);
    return {
      borderColor: n.borderColor,
      backgroundColor: n.backgroundColor,
      borderWidth: n.borderWidth,
      borderDash: n.borderDash,
      borderDashOffset: n.borderDashOffset,
      borderRadius: 0,
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(t) {
    const n = t.chart
      .getDatasetMeta(t.datasetIndex)
      .controller.getStyle(t.dataIndex);
    return { pointStyle: n.pointStyle, rotation: n.rotation };
  },
  afterLabel: wn,
  afterBody: wn,
  beforeFooter: wn,
  footer: wn,
  afterFooter: wn,
};
function ft(t, e, n, i) {
  const r = t[e].call(n, i);
  return typeof r > "u" ? R_[e].call(n, i) : r;
}
var cd;
let Km =
  ((cd = class extends pr {
    constructor(e) {
      super(),
        (this.opacity = 0),
        (this._active = []),
        (this._eventPosition = void 0),
        (this._size = void 0),
        (this._cachedAnimations = void 0),
        (this._tooltipItems = []),
        (this.$animations = void 0),
        (this.$context = void 0),
        (this.chart = e.chart),
        (this.options = e.options),
        (this.dataPoints = void 0),
        (this.title = void 0),
        (this.beforeBody = void 0),
        (this.body = void 0),
        (this.afterBody = void 0),
        (this.footer = void 0),
        (this.xAlign = void 0),
        (this.yAlign = void 0),
        (this.x = void 0),
        (this.y = void 0),
        (this.height = void 0),
        (this.width = void 0),
        (this.caretX = void 0),
        (this.caretY = void 0),
        (this.labelColors = void 0),
        (this.labelPointStyles = void 0),
        (this.labelTextColors = void 0);
    }
    initialize(e) {
      (this.options = e),
        (this._cachedAnimations = void 0),
        (this.$context = void 0);
    }
    _resolveAnimations() {
      const e = this._cachedAnimations;
      if (e) return e;
      const n = this.chart,
        i = this.options.setContext(this.getContext()),
        r = i.enabled && n.options.animation && i.animations,
        s = new v_(this.chart, r);
      return r._cacheable && (this._cachedAnimations = Object.freeze(s)), s;
    }
    getContext() {
      return (
        this.$context ||
        (this.$context = UO(this.chart.getContext(), this, this._tooltipItems))
      );
    }
    getTitle(e, n) {
      const { callbacks: i } = n,
        r = ft(i, "beforeTitle", this, e),
        s = ft(i, "title", this, e),
        o = ft(i, "afterTitle", this, e);
      let a = [];
      return (a = dn(a, Sn(r))), (a = dn(a, Sn(s))), (a = dn(a, Sn(o))), a;
    }
    getBeforeBody(e, n) {
      return Um(ft(n.callbacks, "beforeBody", this, e));
    }
    getBody(e, n) {
      const { callbacks: i } = n,
        r = [];
      return (
        ue(e, (s) => {
          const o = { before: [], lines: [], after: [] },
            a = Ym(i, s);
          dn(o.before, Sn(ft(a, "beforeLabel", this, s))),
            dn(o.lines, ft(a, "label", this, s)),
            dn(o.after, Sn(ft(a, "afterLabel", this, s))),
            r.push(o);
        }),
        r
      );
    }
    getAfterBody(e, n) {
      return Um(ft(n.callbacks, "afterBody", this, e));
    }
    getFooter(e, n) {
      const { callbacks: i } = n,
        r = ft(i, "beforeFooter", this, e),
        s = ft(i, "footer", this, e),
        o = ft(i, "afterFooter", this, e);
      let a = [];
      return (a = dn(a, Sn(r))), (a = dn(a, Sn(s))), (a = dn(a, Sn(o))), a;
    }
    _createItems(e) {
      const n = this._active,
        i = this.chart.data,
        r = [],
        s = [],
        o = [];
      let a = [],
        l,
        c;
      for (l = 0, c = n.length; l < c; ++l) a.push(FO(this.chart, n[l]));
      return (
        e.filter && (a = a.filter((u, d, h) => e.filter(u, d, h, i))),
        e.itemSort && (a = a.sort((u, d) => e.itemSort(u, d, i))),
        ue(a, (u) => {
          const d = Ym(e.callbacks, u);
          r.push(ft(d, "labelColor", this, u)),
            s.push(ft(d, "labelPointStyle", this, u)),
            o.push(ft(d, "labelTextColor", this, u));
        }),
        (this.labelColors = r),
        (this.labelPointStyles = s),
        (this.labelTextColors = o),
        (this.dataPoints = a),
        a
      );
    }
    update(e, n) {
      const i = this.options.setContext(this.getContext()),
        r = this._active;
      let s,
        o = [];
      if (!r.length) this.opacity !== 0 && (s = { opacity: 0 });
      else {
        const a = no[i.position].call(this, r, this._eventPosition);
        (o = this._createItems(i)),
          (this.title = this.getTitle(o, i)),
          (this.beforeBody = this.getBeforeBody(o, i)),
          (this.body = this.getBody(o, i)),
          (this.afterBody = this.getAfterBody(o, i)),
          (this.footer = this.getFooter(o, i));
        const l = (this._size = Wm(this, i)),
          c = Object.assign({}, a, l),
          u = Hm(this.chart, i, c),
          d = Vm(i, c, u, this.chart);
        (this.xAlign = u.xAlign),
          (this.yAlign = u.yAlign),
          (s = {
            opacity: 1,
            x: d.x,
            y: d.y,
            width: l.width,
            height: l.height,
            caretX: a.x,
            caretY: a.y,
          });
      }
      (this._tooltipItems = o),
        (this.$context = void 0),
        s && this._resolveAnimations().update(this, s),
        e &&
          i.external &&
          i.external.call(this, {
            chart: this.chart,
            tooltip: this,
            replay: n,
          });
    }
    drawCaret(e, n, i, r) {
      const s = this.getCaretPosition(e, i, r);
      n.lineTo(s.x1, s.y1), n.lineTo(s.x2, s.y2), n.lineTo(s.x3, s.y3);
    }
    getCaretPosition(e, n, i) {
      const { xAlign: r, yAlign: s } = this,
        { caretSize: o, cornerRadius: a } = i,
        { topLeft: l, topRight: c, bottomLeft: u, bottomRight: d } = _o(a),
        { x: h, y: p } = e,
        { width: g, height: y } = n;
      let v, m, x, _, w, E;
      return (
        s === "center"
          ? ((w = p + y / 2),
            r === "left"
              ? ((v = h), (m = v - o), (_ = w + o), (E = w - o))
              : ((v = h + g), (m = v + o), (_ = w - o), (E = w + o)),
            (x = v))
          : (r === "left"
              ? (m = h + Math.max(l, u) + o)
              : r === "right"
              ? (m = h + g - Math.max(c, d) - o)
              : (m = this.caretX),
            s === "top"
              ? ((_ = p), (w = _ - o), (v = m - o), (x = m + o))
              : ((_ = p + y), (w = _ + o), (v = m + o), (x = m - o)),
            (E = _)),
        { x1: v, x2: m, x3: x, y1: _, y2: w, y3: E }
      );
    }
    drawTitle(e, n, i) {
      const r = this.title,
        s = r.length;
      let o, a, l;
      if (s) {
        const c = Gr(i.rtl, this.x, this.width);
        for (
          e.x = Ga(this, i.titleAlign, i),
            n.textAlign = c.textAlign(i.titleAlign),
            n.textBaseline = "middle",
            o = Ze(i.titleFont),
            a = i.titleSpacing,
            n.fillStyle = i.titleColor,
            n.font = o.string,
            l = 0;
          l < s;
          ++l
        )
          n.fillText(r[l], c.x(e.x), e.y + o.lineHeight / 2),
            (e.y += o.lineHeight + a),
            l + 1 === s && (e.y += i.titleMarginBottom - a);
      }
    }
    _drawColorBox(e, n, i, r, s) {
      const o = this.labelColors[i],
        a = this.labelPointStyles[i],
        { boxHeight: l, boxWidth: c } = s,
        u = Ze(s.bodyFont),
        d = Ga(this, "left", s),
        h = r.x(d),
        p = l < u.lineHeight ? (u.lineHeight - l) / 2 : 0,
        g = n.y + p;
      if (s.usePointStyle) {
        const y = {
            radius: Math.min(c, l) / 2,
            pointStyle: a.pointStyle,
            rotation: a.rotation,
            borderWidth: 1,
          },
          v = r.leftForLtr(h, c) + c / 2,
          m = g + l / 2;
        (e.strokeStyle = s.multiKeyBackground),
          (e.fillStyle = s.multiKeyBackground),
          Lf(e, y, v, m),
          (e.strokeStyle = o.borderColor),
          (e.fillStyle = o.backgroundColor),
          Lf(e, y, v, m);
      } else {
        (e.lineWidth = le(o.borderWidth)
          ? Math.max(...Object.values(o.borderWidth))
          : o.borderWidth || 1),
          (e.strokeStyle = o.borderColor),
          e.setLineDash(o.borderDash || []),
          (e.lineDashOffset = o.borderDashOffset || 0);
        const y = r.leftForLtr(h, c),
          v = r.leftForLtr(r.xPlus(h, 1), c - 2),
          m = _o(o.borderRadius);
        Object.values(m).some((x) => x !== 0)
          ? (e.beginPath(),
            (e.fillStyle = s.multiKeyBackground),
            jf(e, { x: y, y: g, w: c, h: l, radius: m }),
            e.fill(),
            e.stroke(),
            (e.fillStyle = o.backgroundColor),
            e.beginPath(),
            jf(e, { x: v, y: g + 1, w: c - 2, h: l - 2, radius: m }),
            e.fill())
          : ((e.fillStyle = s.multiKeyBackground),
            e.fillRect(y, g, c, l),
            e.strokeRect(y, g, c, l),
            (e.fillStyle = o.backgroundColor),
            e.fillRect(v, g + 1, c - 2, l - 2));
      }
      e.fillStyle = this.labelTextColors[i];
    }
    drawBody(e, n, i) {
      const { body: r } = this,
        {
          bodySpacing: s,
          bodyAlign: o,
          displayColors: a,
          boxHeight: l,
          boxWidth: c,
          boxPadding: u,
        } = i,
        d = Ze(i.bodyFont);
      let h = d.lineHeight,
        p = 0;
      const g = Gr(i.rtl, this.x, this.width),
        y = function (k) {
          n.fillText(k, g.x(e.x + p), e.y + h / 2), (e.y += h + s);
        },
        v = g.textAlign(o);
      let m, x, _, w, E, S, C;
      for (
        n.textAlign = o,
          n.textBaseline = "middle",
          n.font = d.string,
          e.x = Ga(this, v, i),
          n.fillStyle = i.bodyColor,
          ue(this.beforeBody, y),
          p = a && v !== "right" ? (o === "center" ? c / 2 + u : c + 2 + u) : 0,
          w = 0,
          S = r.length;
        w < S;
        ++w
      ) {
        for (
          m = r[w],
            x = this.labelTextColors[w],
            n.fillStyle = x,
            ue(m.before, y),
            _ = m.lines,
            a &&
              _.length &&
              (this._drawColorBox(n, e, w, g, i),
              (h = Math.max(d.lineHeight, l))),
            E = 0,
            C = _.length;
          E < C;
          ++E
        )
          y(_[E]), (h = d.lineHeight);
        ue(m.after, y);
      }
      (p = 0), (h = d.lineHeight), ue(this.afterBody, y), (e.y -= s);
    }
    drawFooter(e, n, i) {
      const r = this.footer,
        s = r.length;
      let o, a;
      if (s) {
        const l = Gr(i.rtl, this.x, this.width);
        for (
          e.x = Ga(this, i.footerAlign, i),
            e.y += i.footerMarginTop,
            n.textAlign = l.textAlign(i.footerAlign),
            n.textBaseline = "middle",
            o = Ze(i.footerFont),
            n.fillStyle = i.footerColor,
            n.font = o.string,
            a = 0;
          a < s;
          ++a
        )
          n.fillText(r[a], l.x(e.x), e.y + o.lineHeight / 2),
            (e.y += o.lineHeight + i.footerSpacing);
      }
    }
    drawBackground(e, n, i, r) {
      const { xAlign: s, yAlign: o } = this,
        { x: a, y: l } = e,
        { width: c, height: u } = i,
        {
          topLeft: d,
          topRight: h,
          bottomLeft: p,
          bottomRight: g,
        } = _o(r.cornerRadius);
      (n.fillStyle = r.backgroundColor),
        (n.strokeStyle = r.borderColor),
        (n.lineWidth = r.borderWidth),
        n.beginPath(),
        n.moveTo(a + d, l),
        o === "top" && this.drawCaret(e, n, i, r),
        n.lineTo(a + c - h, l),
        n.quadraticCurveTo(a + c, l, a + c, l + h),
        o === "center" && s === "right" && this.drawCaret(e, n, i, r),
        n.lineTo(a + c, l + u - g),
        n.quadraticCurveTo(a + c, l + u, a + c - g, l + u),
        o === "bottom" && this.drawCaret(e, n, i, r),
        n.lineTo(a + p, l + u),
        n.quadraticCurveTo(a, l + u, a, l + u - p),
        o === "center" && s === "left" && this.drawCaret(e, n, i, r),
        n.lineTo(a, l + d),
        n.quadraticCurveTo(a, l, a + d, l),
        n.closePath(),
        n.fill(),
        r.borderWidth > 0 && n.stroke();
    }
    _updateAnimationTarget(e) {
      const n = this.chart,
        i = this.$animations,
        r = i && i.x,
        s = i && i.y;
      if (r || s) {
        const o = no[e.position].call(this, this._active, this._eventPosition);
        if (!o) return;
        const a = (this._size = Wm(this, e)),
          l = Object.assign({}, o, this._size),
          c = Hm(n, e, l),
          u = Vm(e, l, c, n);
        (r._to !== u.x || s._to !== u.y) &&
          ((this.xAlign = c.xAlign),
          (this.yAlign = c.yAlign),
          (this.width = a.width),
          (this.height = a.height),
          (this.caretX = o.x),
          (this.caretY = o.y),
          this._resolveAnimations().update(this, u));
      }
    }
    _willRender() {
      return !!this.opacity;
    }
    draw(e) {
      const n = this.options.setContext(this.getContext());
      let i = this.opacity;
      if (!i) return;
      this._updateAnimationTarget(n);
      const r = { width: this.width, height: this.height },
        s = { x: this.x, y: this.y };
      i = Math.abs(i) < 0.001 ? 0 : i;
      const o = Ut(n.padding),
        a =
          this.title.length ||
          this.beforeBody.length ||
          this.body.length ||
          this.afterBody.length ||
          this.footer.length;
      n.enabled &&
        a &&
        (e.save(),
        (e.globalAlpha = i),
        this.drawBackground(s, e, r, n),
        g_(e, n.textDirection),
        (s.y += o.top),
        this.drawTitle(s, e, n),
        this.drawBody(s, e, n),
        this.drawFooter(s, e, n),
        m_(e, n.textDirection),
        e.restore());
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(e, n) {
      const i = this._active,
        r = e.map(({ datasetIndex: a, index: l }) => {
          const c = this.chart.getDatasetMeta(a);
          if (!c) throw new Error("Cannot find a dataset at index " + a);
          return { datasetIndex: a, element: c.data[l], index: l };
        }),
        s = !oc(i, r),
        o = this._positionChanged(r, n);
      (s || o) &&
        ((this._active = r),
        (this._eventPosition = n),
        (this._ignoreReplayEvents = !0),
        this.update(!0));
    }
    handleEvent(e, n, i = !0) {
      if (n && this._ignoreReplayEvents) return !1;
      this._ignoreReplayEvents = !1;
      const r = this.options,
        s = this._active || [],
        o = this._getActiveElements(e, s, n, i),
        a = this._positionChanged(o, e),
        l = n || !oc(o, s) || a;
      return (
        l &&
          ((this._active = o),
          (r.enabled || r.external) &&
            ((this._eventPosition = { x: e.x, y: e.y }), this.update(!0, n))),
        l
      );
    }
    _getActiveElements(e, n, i, r) {
      const s = this.options;
      if (e.type === "mouseout") return [];
      if (!r)
        return n.filter(
          (a) =>
            this.chart.data.datasets[a.datasetIndex] &&
            this.chart
              .getDatasetMeta(a.datasetIndex)
              .controller.getParsed(a.index) !== void 0,
        );
      const o = this.chart.getElementsAtEventForMode(e, s.mode, s, i);
      return s.reverse && o.reverse(), o;
    }
    _positionChanged(e, n) {
      const { caretX: i, caretY: r, options: s } = this,
        o = no[s.position].call(this, e, n);
      return o !== !1 && (i !== o.x || r !== o.y);
    }
  }),
  te(cd, "positioners", no),
  cd);
var M_ = {
  id: "tooltip",
  _element: Km,
  positioners: no,
  afterInit(t, e, n) {
    n && (t.tooltip = new Km({ chart: t, options: n }));
  },
  beforeUpdate(t, e, n) {
    t.tooltip && t.tooltip.initialize(n);
  },
  reset(t, e, n) {
    t.tooltip && t.tooltip.initialize(n);
  },
  afterDraw(t) {
    const e = t.tooltip;
    if (e && e._willRender()) {
      const n = { tooltip: e };
      if (t.notifyPlugins("beforeTooltipDraw", { ...n, cancelable: !0 }) === !1)
        return;
      e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", n);
    }
  },
  afterEvent(t, e) {
    if (t.tooltip) {
      const n = e.replay;
      t.tooltip.handleEvent(e.event, n, e.inChartArea) && (e.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: { weight: "bold" },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: { weight: "bold" },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (t, e) => e.bodyFont.size,
    boxWidth: (t, e) => e.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: { duration: 400, easing: "easeOutQuart" },
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "width", "height", "caretX", "caretY"],
      },
      opacity: { easing: "linear", duration: 200 },
    },
    callbacks: R_,
  },
  defaultRoutes: { bodyFont: "font", footerFont: "font", titleFont: "font" },
  descriptors: {
    _scriptable: (t) => t !== "filter" && t !== "itemSort" && t !== "external",
    _indexable: !1,
    callbacks: { _scriptable: !1, _indexable: !1 },
    animation: { _fallback: !1 },
    animations: { _fallback: "animation" },
  },
  additionalOptionScopes: ["interaction"],
};
const YO = (t, e, n, i) => (
  typeof e == "string"
    ? ((n = t.push(e) - 1), i.unshift({ index: n, label: e }))
    : isNaN(e) && (n = null),
  n
);
function KO(t, e, n, i) {
  const r = t.indexOf(e);
  if (r === -1) return YO(t, e, n, i);
  const s = t.lastIndexOf(e);
  return r !== s ? n : r;
}
const GO = (t, e) => (t === null ? null : $t(Math.round(t), 0, e));
function Gm(t) {
  const e = this.getLabels();
  return t >= 0 && t < e.length ? e[t] : t;
}
class hc extends Cs {
  constructor(e) {
    super(e),
      (this._startValue = void 0),
      (this._valueRange = 0),
      (this._addedLabels = []);
  }
  init(e) {
    const n = this._addedLabels;
    if (n.length) {
      const i = this.getLabels();
      for (const { index: r, label: s } of n) i[r] === s && i.splice(r, 1);
      this._addedLabels = [];
    }
    super.init(e);
  }
  parse(e, n) {
    if (Ce(e)) return null;
    const i = this.getLabels();
    return (
      (n =
        isFinite(n) && i[n] === e ? n : KO(i, e, re(n, e), this._addedLabels)),
      GO(n, i.length - 1)
    );
  }
  determineDataLimits() {
    const { minDefined: e, maxDefined: n } = this.getUserBounds();
    let { min: i, max: r } = this.getMinMax(!0);
    this.options.bounds === "ticks" &&
      (e || (i = 0), n || (r = this.getLabels().length - 1)),
      (this.min = i),
      (this.max = r);
  }
  buildTicks() {
    const e = this.min,
      n = this.max,
      i = this.options.offset,
      r = [];
    let s = this.getLabels();
    (s = e === 0 && n === s.length - 1 ? s : s.slice(e, n + 1)),
      (this._valueRange = Math.max(s.length - (i ? 0 : 1), 1)),
      (this._startValue = this.min - (i ? 0.5 : 0));
    for (let o = e; o <= n; o++) r.push({ value: o });
    return r;
  }
  getLabelForValue(e) {
    return Gm.call(this, e);
  }
  configure() {
    super.configure(),
      this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(e) {
    return (
      typeof e != "number" && (e = this.parse(e)),
      e === null
        ? NaN
        : this.getPixelForDecimal((e - this._startValue) / this._valueRange)
    );
  }
  getPixelForTick(e) {
    const n = this.ticks;
    return e < 0 || e > n.length - 1 ? null : this.getPixelForValue(n[e].value);
  }
  getValueForPixel(e) {
    return Math.round(
      this._startValue + this.getDecimalForPixel(e) * this._valueRange,
    );
  }
  getBasePixel() {
    return this.bottom;
  }
}
te(hc, "id", "category"), te(hc, "defaults", { ticks: { callback: Gm } });
function qO(t, e) {
  const n = [],
    {
      bounds: r,
      step: s,
      min: o,
      max: a,
      precision: l,
      count: c,
      maxTicks: u,
      maxDigits: d,
      includeBounds: h,
    } = t,
    p = s || 1,
    g = u - 1,
    { min: y, max: v } = e,
    m = !Ce(o),
    x = !Ce(a),
    _ = !Ce(c),
    w = (v - y) / (d + 1);
  let E = Qg((v - y) / g / p) * p,
    S,
    C,
    k,
    P;
  if (E < 1e-14 && !m && !x) return [{ value: y }, { value: v }];
  (P = Math.ceil(v / E) - Math.floor(y / E)),
    P > g && (E = Qg((P * E) / g / p) * p),
    Ce(l) || ((S = Math.pow(10, l)), (E = Math.ceil(E * S) / S)),
    r === "ticks"
      ? ((C = Math.floor(y / E) * E), (k = Math.ceil(v / E) * E))
      : ((C = y), (k = v)),
    m && x && s && Fk((a - o) / s, E / 1e3)
      ? ((P = Math.round(Math.min((a - o) / E, u))),
        (E = (a - o) / P),
        (C = o),
        (k = a))
      : _
      ? ((C = m ? o : C), (k = x ? a : k), (P = c - 1), (E = (k - C) / P))
      : ((P = (k - C) / E),
        yo(P, Math.round(P), E / 1e3)
          ? (P = Math.round(P))
          : (P = Math.ceil(P)));
  const j = Math.max(Jg(E), Jg(C));
  (S = Math.pow(10, Ce(l) ? j : l)),
    (C = Math.round(C * S) / S),
    (k = Math.round(k * S) / S);
  let $ = 0;
  for (
    m &&
    (h && C !== o
      ? (n.push({ value: o }),
        C < o && $++,
        yo(Math.round((C + $ * E) * S) / S, o, qm(o, w, t)) && $++)
      : C < o && $++);
    $ < P;
    ++$
  ) {
    const A = Math.round((C + $ * E) * S) / S;
    if (x && A > a) break;
    n.push({ value: A });
  }
  return (
    x && h && k !== a
      ? n.length && yo(n[n.length - 1].value, a, qm(a, w, t))
        ? (n[n.length - 1].value = a)
        : n.push({ value: a })
      : (!x || k === a) && n.push({ value: k }),
    n
  );
}
function qm(t, e, { horizontal: n, minRotation: i }) {
  const r = Vi(i),
    s = (n ? Math.sin(r) : Math.cos(r)) || 0.001,
    o = 0.75 * e * ("" + t).length;
  return Math.min(e / s, o);
}
class XO extends Cs {
  constructor(e) {
    super(e),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0);
  }
  parse(e, n) {
    return Ce(e) ||
      ((typeof e == "number" || e instanceof Number) && !isFinite(+e))
      ? null
      : +e;
  }
  handleTickRangeOptions() {
    const { beginAtZero: e } = this.options,
      { minDefined: n, maxDefined: i } = this.getUserBounds();
    let { min: r, max: s } = this;
    const o = (l) => (r = n ? r : l),
      a = (l) => (s = i ? s : l);
    if (e) {
      const l = us(r),
        c = us(s);
      l < 0 && c < 0 ? a(0) : l > 0 && c > 0 && o(0);
    }
    if (r === s) {
      let l = s === 0 ? 1 : Math.abs(s * 0.05);
      a(s + l), e || o(r - l);
    }
    (this.min = r), (this.max = s);
  }
  getTickLimit() {
    const e = this.options.ticks;
    let { maxTicksLimit: n, stepSize: i } = e,
      r;
    return (
      i
        ? ((r = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1),
          r > 1e3 &&
            (console.warn(
              `scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${r} ticks. Limiting to 1000.`,
            ),
            (r = 1e3)))
        : ((r = this.computeTickLimit()), (n = n || 11)),
      n && (r = Math.min(n, r)),
      r
    );
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const e = this.options,
      n = e.ticks;
    let i = this.getTickLimit();
    i = Math.max(2, i);
    const r = {
        maxTicks: i,
        bounds: e.bounds,
        min: e.min,
        max: e.max,
        precision: n.precision,
        step: n.stepSize,
        count: n.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: n.minRotation || 0,
        includeBounds: n.includeBounds !== !1,
      },
      s = this._range || this,
      o = qO(r, s);
    return (
      e.bounds === "ticks" && Bk(o, this, "value"),
      e.reverse
        ? (o.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      o
    );
  }
  configure() {
    const e = this.ticks;
    let n = this.min,
      i = this.max;
    if ((super.configure(), this.options.offset && e.length)) {
      const r = (i - n) / Math.max(e.length - 1, 1) / 2;
      (n -= r), (i += r);
    }
    (this._startValue = n), (this._endValue = i), (this._valueRange = i - n);
  }
  getLabelForValue(e) {
    return s_(e, this.chart.options.locale, this.options.ticks.format);
  }
}
class pc extends XO {
  determineDataLimits() {
    const { min: e, max: n } = this.getMinMax(!0);
    (this.min = Vt(e) ? e : 0),
      (this.max = Vt(n) ? n : 1),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const e = this.isHorizontal(),
      n = e ? this.width : this.height,
      i = Vi(this.options.ticks.minRotation),
      r = (e ? Math.sin(i) : Math.cos(i)) || 0.001,
      s = this._resolveTickFontOptions(0);
    return Math.ceil(n / Math.min(40, s.lineHeight / r));
  }
  getPixelForValue(e) {
    return e === null
      ? NaN
      : this.getPixelForDecimal((e - this._startValue) / this._valueRange);
  }
  getValueForPixel(e) {
    return this._startValue + this.getDecimalForPixel(e) * this._valueRange;
  }
}
te(pc, "id", "linear"),
  te(pc, "defaults", { ticks: { callback: a_.formatters.numeric } });
const Xc = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 },
  },
  pt = Object.keys(Xc);
function Xm(t, e) {
  return t - e;
}
function Qm(t, e) {
  if (Ce(e)) return null;
  const n = t._adapter,
    { parser: i, round: r, isoWeekday: s } = t._parseOpts;
  let o = e;
  return (
    typeof i == "function" && (o = i(o)),
    Vt(o) || (o = typeof i == "string" ? n.parse(o, i) : n.parse(o)),
    o === null
      ? null
      : (r &&
          (o =
            r === "week" && (Ko(s) || s === !0)
              ? n.startOf(o, "isoWeek", s)
              : n.startOf(o, r)),
        +o)
  );
}
function Jm(t, e, n, i) {
  const r = pt.length;
  for (let s = pt.indexOf(t); s < r - 1; ++s) {
    const o = Xc[pt[s]],
      a = o.steps ? o.steps : Number.MAX_SAFE_INTEGER;
    if (o.common && Math.ceil((n - e) / (a * o.size)) <= i) return pt[s];
  }
  return pt[r - 1];
}
function QO(t, e, n, i, r) {
  for (let s = pt.length - 1; s >= pt.indexOf(n); s--) {
    const o = pt[s];
    if (Xc[o].common && t._adapter.diff(r, i, o) >= e - 1) return o;
  }
  return pt[n ? pt.indexOf(n) : 0];
}
function JO(t) {
  for (let e = pt.indexOf(t) + 1, n = pt.length; e < n; ++e)
    if (Xc[pt[e]].common) return pt[e];
}
function Zm(t, e, n) {
  if (!n) t[e] = !0;
  else if (n.length) {
    const { lo: i, hi: r } = bp(n, e),
      s = n[i] >= e ? n[i] : n[r];
    t[s] = !0;
  }
}
function ZO(t, e, n, i) {
  const r = t._adapter,
    s = +r.startOf(e[0].value, i),
    o = e[e.length - 1].value;
  let a, l;
  for (a = s; a <= o; a = +r.add(a, 1, i))
    (l = n[a]), l >= 0 && (e[l].major = !0);
  return e;
}
function e1(t, e, n) {
  const i = [],
    r = {},
    s = e.length;
  let o, a;
  for (o = 0; o < s; ++o)
    (a = e[o]), (r[a] = o), i.push({ value: a, major: !1 });
  return s === 0 || !n ? i : ZO(t, i, r, n);
}
class gc extends Cs {
  constructor(e) {
    super(e),
      (this._cache = { data: [], labels: [], all: [] }),
      (this._unit = "day"),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0);
  }
  init(e, n = {}) {
    const i = e.time || (e.time = {}),
      r = (this._adapter = new p7._date(e.adapters.date));
    r.init(n),
      mo(i.displayFormats, r.formats()),
      (this._parseOpts = {
        parser: i.parser,
        round: i.round,
        isoWeekday: i.isoWeekday,
      }),
      super.init(e),
      (this._normalized = n.normalized);
  }
  parse(e, n) {
    return e === void 0 ? null : Qm(this, e);
  }
  beforeLayout() {
    super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
  }
  determineDataLimits() {
    const e = this.options,
      n = this._adapter,
      i = e.time.unit || "day";
    let { min: r, max: s, minDefined: o, maxDefined: a } = this.getUserBounds();
    function l(c) {
      !o && !isNaN(c.min) && (r = Math.min(r, c.min)),
        !a && !isNaN(c.max) && (s = Math.max(s, c.max));
    }
    (!o || !a) &&
      (l(this._getLabelBounds()),
      (e.bounds !== "ticks" || e.ticks.source !== "labels") &&
        l(this.getMinMax(!1))),
      (r = Vt(r) && !isNaN(r) ? r : +n.startOf(Date.now(), i)),
      (s = Vt(s) && !isNaN(s) ? s : +n.endOf(Date.now(), i) + 1),
      (this.min = Math.min(r, s - 1)),
      (this.max = Math.max(r + 1, s));
  }
  _getLabelBounds() {
    const e = this.getLabelTimestamps();
    let n = Number.POSITIVE_INFINITY,
      i = Number.NEGATIVE_INFINITY;
    return e.length && ((n = e[0]), (i = e[e.length - 1])), { min: n, max: i };
  }
  buildTicks() {
    const e = this.options,
      n = e.time,
      i = e.ticks,
      r = i.source === "labels" ? this.getLabelTimestamps() : this._generate();
    e.bounds === "ticks" &&
      r.length &&
      ((this.min = this._userMin || r[0]),
      (this.max = this._userMax || r[r.length - 1]));
    const s = this.min,
      o = this.max,
      a = Yk(r, s, o);
    return (
      (this._unit =
        n.unit ||
        (i.autoSkip
          ? Jm(n.minUnit, this.min, this.max, this._getLabelCapacity(s))
          : QO(this, a.length, n.minUnit, this.min, this.max))),
      (this._majorUnit =
        !i.major.enabled || this._unit === "year" ? void 0 : JO(this._unit)),
      this.initOffsets(r),
      e.reverse && a.reverse(),
      e1(this, a, this._majorUnit)
    );
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip &&
      this.initOffsets(this.ticks.map((e) => +e.value));
  }
  initOffsets(e = []) {
    let n = 0,
      i = 0,
      r,
      s;
    this.options.offset &&
      e.length &&
      ((r = this.getDecimalForValue(e[0])),
      e.length === 1
        ? (n = 1 - r)
        : (n = (this.getDecimalForValue(e[1]) - r) / 2),
      (s = this.getDecimalForValue(e[e.length - 1])),
      e.length === 1
        ? (i = s)
        : (i = (s - this.getDecimalForValue(e[e.length - 2])) / 2));
    const o = e.length < 3 ? 0.5 : 0.25;
    (n = $t(n, 0, o)),
      (i = $t(i, 0, o)),
      (this._offsets = { start: n, end: i, factor: 1 / (n + 1 + i) });
  }
  _generate() {
    const e = this._adapter,
      n = this.min,
      i = this.max,
      r = this.options,
      s = r.time,
      o = s.unit || Jm(s.minUnit, n, i, this._getLabelCapacity(n)),
      a = re(r.ticks.stepSize, 1),
      l = o === "week" ? s.isoWeekday : !1,
      c = Ko(l) || l === !0,
      u = {};
    let d = n,
      h,
      p;
    if (
      (c && (d = +e.startOf(d, "isoWeek", l)),
      (d = +e.startOf(d, c ? "day" : o)),
      e.diff(i, n, o) > 1e5 * a)
    )
      throw new Error(
        n + " and " + i + " are too far apart with stepSize of " + a + " " + o,
      );
    const g = r.ticks.source === "data" && this.getDataTimestamps();
    for (h = d, p = 0; h < i; h = +e.add(h, a, o), p++) Zm(u, h, g);
    return (
      (h === i || r.bounds === "ticks" || p === 1) && Zm(u, h, g),
      Object.keys(u)
        .sort(Xm)
        .map((y) => +y)
    );
  }
  getLabelForValue(e) {
    const n = this._adapter,
      i = this.options.time;
    return i.tooltipFormat
      ? n.format(e, i.tooltipFormat)
      : n.format(e, i.displayFormats.datetime);
  }
  format(e, n) {
    const r = this.options.time.displayFormats,
      s = this._unit,
      o = n || r[s];
    return this._adapter.format(e, o);
  }
  _tickFormatFunction(e, n, i, r) {
    const s = this.options,
      o = s.ticks.callback;
    if (o) return ge(o, [e, n, i], this);
    const a = s.time.displayFormats,
      l = this._unit,
      c = this._majorUnit,
      u = l && a[l],
      d = c && a[c],
      h = i[n],
      p = c && d && h && h.major;
    return this._adapter.format(e, r || (p ? d : u));
  }
  generateTickLabels(e) {
    let n, i, r;
    for (n = 0, i = e.length; n < i; ++n)
      (r = e[n]), (r.label = this._tickFormatFunction(r.value, n, e));
  }
  getDecimalForValue(e) {
    return e === null ? NaN : (e - this.min) / (this.max - this.min);
  }
  getPixelForValue(e) {
    const n = this._offsets,
      i = this.getDecimalForValue(e);
    return this.getPixelForDecimal((n.start + i) * n.factor);
  }
  getValueForPixel(e) {
    const n = this._offsets,
      i = this.getDecimalForPixel(e) / n.factor - n.end;
    return this.min + i * (this.max - this.min);
  }
  _getLabelSize(e) {
    const n = this.options.ticks,
      i = this.ctx.measureText(e).width,
      r = Vi(this.isHorizontal() ? n.maxRotation : n.minRotation),
      s = Math.cos(r),
      o = Math.sin(r),
      a = this._resolveTickFontOptions(0).size;
    return { w: i * s + a * o, h: i * o + a * s };
  }
  _getLabelCapacity(e) {
    const n = this.options.time,
      i = n.displayFormats,
      r = i[n.unit] || i.millisecond,
      s = this._tickFormatFunction(e, 0, e1(this, [e], this._majorUnit), r),
      o = this._getLabelSize(s),
      a =
        Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) -
        1;
    return a > 0 ? a : 1;
  }
  getDataTimestamps() {
    let e = this._cache.data || [],
      n,
      i;
    if (e.length) return e;
    const r = this.getMatchingVisibleMetas();
    if (this._normalized && r.length)
      return (this._cache.data = r[0].controller.getAllParsedValues(this));
    for (n = 0, i = r.length; n < i; ++n)
      e = e.concat(r[n].controller.getAllParsedValues(this));
    return (this._cache.data = this.normalize(e));
  }
  getLabelTimestamps() {
    const e = this._cache.labels || [];
    let n, i;
    if (e.length) return e;
    const r = this.getLabels();
    for (n = 0, i = r.length; n < i; ++n) e.push(Qm(this, r[n]));
    return (this._cache.labels = this._normalized ? e : this.normalize(e));
  }
  normalize(e) {
    return Gk(e.sort(Xm));
  }
}
te(gc, "id", "time"),
  te(gc, "defaults", {
    bounds: "data",
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: "millisecond",
      displayFormats: {},
    },
    ticks: { source: "auto", callback: !1, major: { enabled: !1 } },
  });
function qa(t, e, n) {
  let i = 0,
    r = t.length - 1,
    s,
    o,
    a,
    l;
  n
    ? (e >= t[i].pos && e <= t[r].pos && ({ lo: i, hi: r } = Ui(t, "pos", e)),
      ({ pos: s, time: a } = t[i]),
      ({ pos: o, time: l } = t[r]))
    : (e >= t[i].time &&
        e <= t[r].time &&
        ({ lo: i, hi: r } = Ui(t, "time", e)),
      ({ time: s, pos: a } = t[i]),
      ({ time: o, pos: l } = t[r]));
  const c = o - s;
  return c ? a + ((l - a) * (e - s)) / c : a;
}
class t1 extends gc {
  constructor(e) {
    super(e),
      (this._table = []),
      (this._minPos = void 0),
      (this._tableRange = void 0);
  }
  initOffsets() {
    const e = this._getTimestampsForTable(),
      n = (this._table = this.buildLookupTable(e));
    (this._minPos = qa(n, this.min)),
      (this._tableRange = qa(n, this.max) - this._minPos),
      super.initOffsets(e);
  }
  buildLookupTable(e) {
    const { min: n, max: i } = this,
      r = [],
      s = [];
    let o, a, l, c, u;
    for (o = 0, a = e.length; o < a; ++o)
      (c = e[o]), c >= n && c <= i && r.push(c);
    if (r.length < 2)
      return [
        { time: n, pos: 0 },
        { time: i, pos: 1 },
      ];
    for (o = 0, a = r.length; o < a; ++o)
      (u = r[o + 1]),
        (l = r[o - 1]),
        (c = r[o]),
        Math.round((u + l) / 2) !== c && s.push({ time: c, pos: o / (a - 1) });
    return s;
  }
  _generate() {
    const e = this.min,
      n = this.max;
    let i = super.getDataTimestamps();
    return (
      (!i.includes(e) || !i.length) && i.splice(0, 0, e),
      (!i.includes(n) || i.length === 1) && i.push(n),
      i.sort((r, s) => r - s)
    );
  }
  _getTimestampsForTable() {
    let e = this._cache.all || [];
    if (e.length) return e;
    const n = this.getDataTimestamps(),
      i = this.getLabelTimestamps();
    return (
      n.length && i.length
        ? (e = this.normalize(n.concat(i)))
        : (e = n.length ? n : i),
      (e = this._cache.all = e),
      e
    );
  }
  getDecimalForValue(e) {
    return (qa(this._table, e) - this._minPos) / this._tableRange;
  }
  getValueForPixel(e) {
    const n = this._offsets,
      i = this.getDecimalForPixel(e) / n.factor - n.end;
    return qa(this._table, i * this._tableRange + this._minPos, !0);
  }
}
te(t1, "id", "timeseries"), te(t1, "defaults", gc.defaults);
const I_ = "label";
function n1(t, e) {
  typeof t == "function" ? t(e) : t && (t.current = e);
}
function e9(t, e) {
  const n = t.options;
  n && e && Object.assign(n, e);
}
function $_(t, e) {
  t.labels = e;
}
function F_(t, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : I_;
  const i = [];
  t.datasets = e.map((r) => {
    const s = t.datasets.find((o) => o[n] === r[n]);
    return !s || !r.data || i.includes(s)
      ? { ...r }
      : (i.push(s), Object.assign(s, r), s);
  });
}
function t9(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : I_;
  const n = { labels: [], datasets: [] };
  return $_(n, t.labels), F_(n, t.datasets, e), n;
}
function n9(t, e) {
  const {
      height: n = 150,
      width: i = 300,
      redraw: r = !1,
      datasetIdKey: s,
      type: o,
      data: a,
      options: l,
      plugins: c = [],
      fallbackContent: u,
      updateMode: d,
      ...h
    } = t,
    p = b.useRef(null),
    g = b.useRef(),
    y = () => {
      p.current &&
        ((g.current = new da(p.current, {
          type: o,
          data: t9(a, s),
          options: l && { ...l },
          plugins: c,
        })),
        n1(e, g.current));
    },
    v = () => {
      n1(e, null), g.current && (g.current.destroy(), (g.current = null));
    };
  return (
    b.useEffect(() => {
      !r && g.current && l && e9(g.current, l);
    }, [r, l]),
    b.useEffect(() => {
      !r && g.current && $_(g.current.config.data, a.labels);
    }, [r, a.labels]),
    b.useEffect(() => {
      !r && g.current && a.datasets && F_(g.current.config.data, a.datasets, s);
    }, [r, a.datasets]),
    b.useEffect(() => {
      g.current && (r ? (v(), setTimeout(y)) : g.current.update(d));
    }, [r, l, a.labels, a.datasets, d]),
    b.useEffect(() => {
      g.current && (v(), setTimeout(y));
    }, [o]),
    b.useEffect(() => (y(), () => v()), []),
    Ne.createElement(
      "canvas",
      Object.assign({ ref: p, role: "img", height: n, width: i }, h),
      u,
    )
  );
}
const i9 = b.forwardRef(n9);
function r9(t, e) {
  return (
    da.register(e),
    b.forwardRef((n, i) =>
      Ne.createElement(i9, Object.assign({}, n, { ref: i, type: t })),
    )
  );
}
const B_ = r9("line", vl);
da.register(Fr, wo, pc, D_, hc, M_, L_);
const s9 = (t) => {
    const e = [];
    for (let n = 0; n < t; n++) {
      const i = (n * 360) / t;
      e.push(`hsl(${i}, 70%, 50%)`);
    }
    return e;
  },
  o9 = (t) =>
    t.map((e) => {
      const n = new Map();
      e.exercises.forEach((o) => {
        const { title: a } = o.exerciseId;
        n.has(a) ||
          n.set(a, { weights: new Map(), reps: new Map(), dates: [] }),
          o.performance.forEach((l) => {
            if (l.weight && l.reps && l.date) {
              const c = new Date(l.date).toLocaleDateString("en-US");
              n.get(a).weights.has(c) ||
                (n.get(a).weights.set(c, l.weight),
                n.get(a).reps.set(c, l.reps),
                n.get(a).dates.push(c));
            }
          });
      });
      const i = n.size,
        r = s9(i),
        s = Array.from(n.entries()).map(([o, a], l) => ({
          label: o,
          data: a.dates.map((c) => ({
            x: c,
            y: a.weights.get(c),
            reps: a.reps.get(c),
          })),
          fill: !1,
          borderColor: r[l % i],
          tension: 0.1,
        }));
      return {
        labels: n.size > 0 ? n.values().next().value.dates : [],
        datasets: s,
      };
    }),
  a9 = ({ userId: t }) => {
    const [e, n] = b.useState([]);
    b.useEffect(() => {
      (async () => {
        try {
          const l = await Vo.get(t),
            c = o9(l);
          n(c);
        } catch (l) {
          console.error("Error fetching workout data", l);
        }
      })();
    }, [t]);
    const i = {
        position: "relative",
        width: "100%",
        height: "400px",
        marginBottom: "20px",
      },
      r = {
        color: "#df0000",
        borderWidth: "2px",
        borderColor: "#df0000",
        borderStyle: "solid",
      },
      s = {
        color: "#df0000",
        fontWeight: "bold",
        textDecoration: "underline",
        marginBottom: 40,
        textAlign: "center",
      },
      o = {
        responsive: !0,
        maintainAspectRatio: !1,
        scales: {
          y: {
            type: "linear",
            position: "left",
            beginAtZero: !0,
            title: { display: !0, text: "Weight (kg)" },
          },
          x: { title: { display: !0, text: "Date" } },
        },
        plugins: {
          legend: { display: !0, position: "top" },
          tooltip: {
            callbacks: {
              label: function (a) {
                let l = a.dataset.label || "";
                return (
                  l && (l += ": "),
                  a.parsed.y !== null &&
                    (l += `${a.parsed.y} kg, ${a.raw.reps} reps`),
                  l
                );
              },
            },
          },
        },
      };
    return f.jsxs(et, {
      children: [
        f.jsx("h1", { style: s, children: "Progress Graphs" }),
        e.length > 0
          ? e.map((a, l) =>
              f.jsx(
                Z,
                {
                  className: "my-3",
                  style: r,
                  border: "danger",
                  children: f.jsxs(Z.Body, {
                    children: [
                      f.jsxs("h3", {
                        style: {
                          color: "#df0000",
                          textAlign: "center",
                          marginBottom: "20px",
                        },
                        children: ["Workout ", l + 1],
                      }),
                      f.jsx("div", {
                        style: i,
                        children: f.jsx(B_, { data: a, options: o }),
                      }),
                    ],
                  }),
                },
                l,
              ),
            )
          : f.jsx("p", { children: "Loading data..." }),
      ],
    });
  };
da.register(Fr, wo, pc, D_, hc, M_, L_);
const l9 = (t) => {
    const e = [];
    for (let n = 0; n < t; n++) {
      const i = (n * 360) / t;
      e.push(`hsl(${i}, 70%, 50%)`);
    }
    return e;
  },
  c9 = (t) =>
    t.map((e) => {
      const n = new Map();
      e.exercises.forEach((o) => {
        const { title: a } = o.exerciseId;
        n.has(a) ||
          n.set(a, { weights: new Map(), reps: new Map(), dates: [] }),
          o.performance.forEach((l) => {
            if (l.weight && l.reps && l.date) {
              const c = new Date(l.date).toLocaleDateString("en-US");
              n.get(a).weights.has(c) ||
                (n.get(a).weights.set(c, l.weight),
                n.get(a).reps.set(c, l.reps),
                n.get(a).dates.push(c));
            }
          });
      });
      const i = n.size,
        r = l9(i),
        s = Array.from(n.entries()).map(([o, a], l) => ({
          label: o,
          data: a.dates.map((c) => ({
            x: c,
            y: a.weights.get(c),
            reps: a.reps.get(c),
          })),
          fill: !1,
          borderColor: r[l % i],
          tension: 0.1,
        }));
      return {
        labels: n.size > 0 ? n.values().next().value.dates : [],
        datasets: s,
      };
    }),
  u9 = ({ userId: t }) => {
    const [e, n] = b.useState([]);
    b.useEffect(() => {
      (async () => {
        try {
          const a = await Vo.getInactive(t),
            l = c9(a);
          n(l);
        } catch (a) {
          console.error("Error fetching inactive workout data", a);
        }
      })();
    }, [t]);
    const i = {
        position: "relative",
        width: "100%",
        height: "400px",
        marginBottom: "20px",
      },
      r = {
        responsive: !0,
        maintainAspectRatio: !1,
        scales: {
          y: {
            type: "linear",
            position: "left",
            beginAtZero: !0,
            title: { display: !0, text: "Weight (kg)" },
          },
          x: { title: { display: !0, text: "Date" } },
        },
        plugins: {
          legend: { display: !0, position: "top" },
          tooltip: {
            callbacks: {
              label: function (o) {
                let a = o.dataset.label || "";
                return (
                  a && (a += ": "),
                  o.parsed.y !== null &&
                    (a += `${o.parsed.y} kg, ${o.raw.reps} reps`),
                  a
                );
              },
            },
          },
        },
      },
      s = {
        card: { textAlign: "center", color: "#df0000", borderWidth: "2px" },
        header: {
          color: "#df0000",
          fontWeight: "bold",
          textDecoration: "underline",
          marginBottom: 40,
          textAlign: "center",
        },
      };
    return f.jsxs(et, {
      children: [
        f.jsx("h1", { style: s.header, children: "Previous Progress Graphs" }),
        e.length > 0
          ? e.map((o, a) =>
              f.jsx(
                Z,
                {
                  className: "my-3",
                  style: s.card,
                  border: "danger",
                  children: f.jsxs(Z.Body, {
                    children: [
                      f.jsxs("h3", {
                        style: s.header,
                        children: ["Workout ", a + 1],
                      }),
                      f.jsx("div", {
                        style: i,
                        children: f.jsx(B_, { data: o, options: r }),
                      }),
                    ],
                  }),
                },
                a,
              ),
            )
          : f.jsx("p", { children: "Loading data..." }),
      ],
    });
  },
  St = ({ title: t, description: e, link: n }) => {
    const i = {
      text: { color: "#fff", borderWidth: "2px", backgroundColor: "#df0000" },
      description: { maxWidth: "800px", margin: "auto", padding: 10 },
      header: { textDecoration: "underline", color: "#fff" },
      svg: { margin: 10 },
    };
    return f.jsx(_i, {
      md: 4,
      className: "block",
      children: f.jsx("a", {
        href: n,
        style: { textDecoration: "none" },
        children: f.jsx(Z, {
          className: "mb-4 box-shadow",
          border: "danger",
          style: i.text,
          children: f.jsxs(Z.Body, {
            children: [
              f.jsxs(Z.Title, {
                style: i.header,
                children: [
                  f.jsx("span", { style: i.svg, children: f.jsx(ie, {}) }),
                  t,
                ],
              }),
              f.jsx(Z.Text, { style: i.description, children: e }),
            ],
          }),
        }),
      }),
    });
  },
  d9 = "/assets/BulletLanding-h_rkSI0U.webp",
  f9 = () => {
    const t = {
      ctaSection: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "30px",
      },
      ctaText: {
        color: "#df0000",
        fontWeight: "bold",
        textDecoration: "underline",
      },
      text: { color: "#df0000", fontSize: 24 },
      ctaButton: {
        margin: 10,
        backgroundColor: "#df0000",
        borderColor: "#df0000",
      },
      image: { maxWidth: "100%", height: "auto" },
      link: { textDecoration: "none" },
    };
    return f.jsxs(et, {
      children: [
        f.jsxs(cs, {
          style: t.ctaSection,
          children: [
            f.jsx(_i, {
              md: 6,
              children: f.jsx(Z, {
                className: "text-center",
                style: { border: "none" },
                children: f.jsxs(Z.Body, {
                  children: [
                    f.jsx(Z.Title, {
                      style: t.ctaText,
                      children: f.jsx("h1", {
                        children: "Welcome to Bullet Point Fitness",
                      }),
                    }),
                    f.jsx(Z.Text, {
                      style: t.text,
                      children:
                        "Start your fitness journey with our interactive tools and personalized programs. Learn, train, and transform.",
                    }),
                    f.jsx(ns, {
                      to: "/login",
                      style: t.link,
                      children: f.jsx(ot, {
                        style: t.ctaButton,
                        variant: "danger",
                        "aria-label": "Get Started",
                        className: "btn-custom",
                        children: "Get Started",
                      }),
                    }),
                  ],
                }),
              }),
            }),
            f.jsx(_i, {
              md: 6,
              children: f.jsx("img", {
                src: d9,
                alt: "Fitness Transformation",
                style: t.image,
              }),
            }),
          ],
        }),
        f.jsxs(cs, {
          children: [
            f.jsx(St, {
              title: "Interactive Muscle Map",
              description:
                "You can build all aspects of fitness if you focus on muscle. Click on a muscle to find out more.",
              link: "/muscle-map",
            }),
            f.jsx(St, {
              title: "Training Essentials",
              description:
                "Watch videos on the essential concepts of training.",
              link: "/training",
            }),
            f.jsx(St, {
              title: "Consultation",
              description:
                "Book in a consultation now to start your fitness journey.",
              link: "/consultation",
            }),
            f.jsx(St, {
              title: "Interactive Organ Map",
              description:
                "Your Clickable Guide to Nutrient-Rich Organ Health, click on an organ to find out more.",
              link: "/organ-map",
            }),
            f.jsx(St, {
              title: "About",
              description:
                "Find out more about Bullet Point Fitness and all the qualifications.",
              link: "/about",
            }),
            f.jsx(St, {
              title: "Contact",
              description:
                "Want to get in contact, click here to send a message.",
              link: "/contact-form",
            }),
            f.jsx(St, {
              title: "Login",
              description: "Click here to login to your personalised program.",
              link: "/login",
            }),
          ],
        }),
      ],
    });
  },
  h9 = () =>
    f.jsx(et, {
      children: f.jsxs(cs, {
        children: [
          f.jsx(St, {
            title: "Bullet Point Fitness Manual",
            description:
              "Read the Bullet Point Fitness Manual to make the most out of your training program.",
            link: "/instructions",
          }),
          f.jsx(St, {
            title: "Program Form",
            description:
              "Complete the form to get your personalised training program.",
            link: "/program-form",
          }),
          f.jsx(St, {
            title: "Workouts",
            description:
              "Click here to access your workouts and track your lifts.",
            link: "/workouts",
          }),
          f.jsx(St, {
            title: "Workout Progression",
            description:
              "Click here to see your progress in each exercise of each workout.",
            link: "/workout-progression",
          }),
          f.jsx(St, {
            title: "Past Workout Programs",
            description: "Have a look at your previous workout programs.",
            link: "/past-workout-programs",
          }),
          f.jsx(St, {
            title: "Past Workout Progressions",
            description:
              "View past progression of your previous workout programs.",
            link: "/past-workout-progression",
          }),
        ],
      }),
    }),
  p9 = () => {
    const t = {
      card: { textAlign: "center", color: "#df0000", borderWidth: "2px" },
      header: {
        color: "#df0000",
        fontWeight: "bold",
        textDecoration: "underline",
        marginBottom: 40,
        textAlign: "center",
      },
      instructions: { textAlign: "left", marginBottom: "20px" },
      ul: { listStyleType: "none", padding: 0 },
      ulTwo: { listStyleType: "none" },
      buttonContainer: { display: "flex", justifyContent: "center" },
      button: { margin: 10 },
      link: { textDecoration: "none" },
    };
    return f.jsxs(et, {
      children: [
        f.jsx("h1", {
          style: t.header,
          children: "Bullet Point Fitness Manual",
        }),
        f.jsx(Z, {
          className: "my-3",
          style: t.card,
          border: "danger",
          children: f.jsx(Z.Body, {
            children: f.jsxs("div", {
              style: t.instructions,
              children: [
                f.jsx("h3", {
                  style: t.header,
                  children: "Program Instructions",
                }),
                f.jsxs("ul", {
                  style: t.ul,
                  children: [
                    f.jsxs("li", {
                      children: [
                        f.jsx(ie, {}),
                        " ",
                        f.jsx("strong", { children: "For first-time users: " }),
                        "Before starting your program, take time to review all the exercises listed for your workouts. Watching the exercise demonstration videos, by clicking on the exercise, will help you understand proper form and technique. Once familiar, ensure that you know where all necessary equipment is located in your gym. Having a clear idea of where to find everything will make your workout smoother and help you stay on track. If your gym does not have access to a specific piece of equipment or if you're unsure about an exercise, don't hesitate to get in contact with us. We can provide alternative exercises or adjust your program to better suit your needs.",
                      ],
                    }),
                    f.jsxs("li", {
                      children: [
                        f.jsx(ie, {}),
                        " Perform each workout with at least one rest day between. On rest days, you can do light aerobic activities like walking, cycling, swimming, rowing, or using the elliptical.",
                      ],
                    }),
                    f.jsxs("li", {
                      children: [
                        f.jsx(ie, {}),
                        " When training three times a week, follow a Mon/Wed/Fri or Tues/Thurs/Sat schedule, or any combination that allows a rest day between each workout.",
                      ],
                    }),
                    f.jsxs("li", {
                      children: [
                        f.jsx(ie, {}),
                        " For more frequent training, alternate training days like this:",
                        f.jsxs("ul", {
                          style: t.ulTwo,
                          children: [
                            f.jsxs("li", {
                              children: [
                                f.jsx(ie, {}),
                                "Week 1: Mon/Wed/Fri/Sun",
                              ],
                            }),
                            f.jsxs("li", {
                              children: [
                                f.jsx(ie, {}),
                                "Week 2: Tues/Thurs/Sat",
                              ],
                            }),
                            f.jsxs("li", {
                              children: [f.jsx(ie, {}), "Repeat."],
                            }),
                          ],
                        }),
                      ],
                    }),
                    f.jsxs("li", {
                      children: [
                        f.jsx(ie, {}),
                        " In all stages each workout must be performed once per week, however if you want to maximise any stage you can follow the alternate day schedule.",
                      ],
                    }),
                    f.jsxs("li", {
                      children: [
                        f.jsx(ie, {}),
                        " If you have any further queries don't hesitate to get in contact.",
                      ],
                    }),
                  ],
                }),
                f.jsx("div", {
                  style: t.buttonContainer,
                  children: f.jsx(ns, {
                    to: "/workouts",
                    style: t.link,
                    children: f.jsx(ot, {
                      type: "submit",
                      variant: "danger",
                      style: t.button,
                      "aria-label": "Onto Workouts",
                      className: "btn-custom",
                      children: "Onto Workouts",
                    }),
                  }),
                }),
              ],
            }),
          }),
        }),
        f.jsx(Z, {
          className: "my-3",
          style: t.card,
          border: "danger",
          children: f.jsx(Z.Body, {
            children: f.jsxs("div", {
              style: t.instructions,
              children: [
                f.jsx("h3", {
                  style: t.header,
                  children: "Workout Instructions",
                }),
                f.jsxs("ul", {
                  style: t.ul,
                  children: [
                    f.jsxs("li", {
                      children: [
                        f.jsx(ie, {}),
                        " When you're performing an exercise or workout for the first time and are unsure about the appropriate weight, start with a lighter load. Perform the exercise until task failure (the point where you can no longer complete another rep with the same form). Record the weight and the number of reps you completed, and use this as your baseline to progress in future sessions.",
                      ],
                    }),
                    f.jsxs("li", {
                      children: [
                        f.jsx(ie, {}),
                        " The goal of each exercise and workout is to build up to one working set per exercise, where you push to maximize both weight and reps. Only log the weight and reps for this one working set—there's no need to track your warm-up sets.",
                      ],
                    }),
                    f.jsxs("li", {
                      children: [
                        f.jsx(ie, {}),
                        " Aim to reach task failure within 4-10 reps for your working set, with the ideal range being 5-8 reps.",
                      ],
                    }),
                    f.jsxs("li", {
                      children: [
                        f.jsx(ie, {}),
                        " Focus on increasing weight in your working set as the main goal. Increase reps to adapt to any new weight before moving up. Use the guidance on each exercise to gauge whether you should increase reps or weight.",
                      ],
                    }),
                    f.jsxs("li", {
                      children: [
                        f.jsx(ie, {}),
                        " When increasing the weight, always use the smallest increment available on the equipment you're using (e.g., 2.5 kg or smaller). Be aware that some gyms may have equipment that doesn't increase in standard increments. In such cases, adjust by adding the smallest weight possible. This approach helps you make steady progress while minimizing the risk of injury.",
                      ],
                    }),
                    f.jsxs("li", {
                      children: [
                        f.jsx(ie, {}),
                        " Avoid large jumps in weight. Sudden, significant jumps can lead to improper form and increase the risk of injury. Gradual progression is key to long-term success.",
                      ],
                    }),
                    f.jsxs("li", {
                      children: [
                        f.jsx(ie, {}),
                        " Click on an exercise to view a demo video. Before starting your workout, make sure to watch the demo videos for each exercise to ensure you know how to perform them correctly.",
                      ],
                    }),
                    f.jsxs("li", {
                      children: [
                        f.jsx(ie, {}),
                        " To warm up correctly:",
                        f.jsxs("ul", {
                          style: t.ulTwo,
                          children: [
                            f.jsxs("li", {
                              children: [
                                f.jsx(ie, {}),
                                "Perform a 10-minute aerobic exercise at 60% of your maximum heart rate: (220 - your age) x 0.6.",
                              ],
                            }),
                            f.jsxs("li", {
                              children: [
                                f.jsx(ie, {}),
                                "For the first exercise, perform warmup sets as follows:",
                                f.jsxs("ul", {
                                  style: t.ulTwo,
                                  children: [
                                    f.jsxs("li", {
                                      children: [
                                        f.jsx(ie, {}),
                                        "50% of your working weight for 5 reps",
                                      ],
                                    }),
                                    f.jsxs("li", {
                                      children: [
                                        f.jsx(ie, {}),
                                        "70% of your working weight for 2-3 reps",
                                      ],
                                    }),
                                    f.jsxs("li", {
                                      children: [
                                        f.jsx(ie, {}),
                                        "85% of your working weight for 1-2 reps",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            f.jsxs("li", {
                              children: [
                                f.jsx(ie, {}),
                                "Rest for 2 minutes before performing your working set.",
                              ],
                            }),
                            f.jsxs("li", {
                              children: [
                                f.jsx(ie, {}),
                                "For the subsequent exercises, you can use the 70% and 85% warmup sets to minimize fatigue.",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    f.jsxs("li", {
                      children: [
                        f.jsx(ie, {}),
                        " If you can't perform an exercise due to lack of equipment, contact us to modify your program.",
                      ],
                    }),
                    f.jsxs("li", {
                      children: [
                        f.jsx(ie, {}),
                        " Don't forget to log the weight and reps of the working set for each exercise. Click on the 'Update' button, fill in the weight and reps, then click 'Save' to log your performance.",
                      ],
                    }),
                    f.jsxs("li", {
                      children: [
                        f.jsx(ie, {}),
                        " If you have any further queries don't hesitate to get in contact.",
                      ],
                    }),
                  ],
                }),
                f.jsx("div", {
                  style: t.buttonContainer,
                  children: f.jsx(ns, {
                    to: "/workouts",
                    style: t.link,
                    children: f.jsx(ot, {
                      type: "submit",
                      variant: "danger",
                      style: t.button,
                      "aria-label": "Onto workouts",
                      className: "btn-custom",
                      children: "Onto Workouts",
                    }),
                  }),
                }),
              ],
            }),
          }),
        }),
      ],
    });
  },
  i1 = () => {
    const { pathname: t } = _s();
    return (
      b.useEffect(() => {
        window.scrollTo(0, 0);
      }, [t]),
      null
    );
  },
  g9 = "/api/login",
  m9 = async (t) => (await ce.post(g9, t)).data,
  y9 = { login: m9 },
  v9 = () => {
    const [t, e] = b.useState(null),
      [n, i] = b.useState(null),
      r = $h();
    b.useEffect(() => {
      e(null);
      const c = go.getUser();
      c && e(c);
    }, []);
    const s = (c, u = "info") => {
        i({ message: c, type: u }),
          setTimeout(() => {
            i(null);
          }, 3e3);
      },
      o = async (c, u) => {
        try {
          const d = await y9.login({ username: c, password: u }),
            h = { ...d, userId: d.id };
          go.setUser(h),
            e(h),
            r("/user-homepage"),
            s(`${h.username} successfully logged in!`);
        } catch {
          s("Incorrect username/password, please try again.", "alert");
        }
      },
      a = () => {
        e(null), go.clearUser(), r("/"), s("Goodbye!");
      },
      l = {
        app: { fontFamily: "Be Vietnam", color: "#df0000" },
        cookie: { background: "#333" },
        button: { color: "#fff", background: "#df0000", fontSize: "13px" },
      };
    return t === null
      ? f.jsxs("div", {
          className: "app",
          children: [
            f.jsx(zg, {}),
            f.jsx(Fg, { user: t, onLogout: a }),
            f.jsxs("main", {
              children: [
                f.jsx(Hg, { notification: n }),
                f.jsx(i1, {}),
                f.jsxs(Z0, {
                  children: [
                    f.jsx(Me, { path: "/", element: f.jsx(f9, {}) }),
                    f.jsx(Me, { path: "/muscle-map", element: f.jsx(k8, {}) }),
                    f.jsx(Me, { path: "/training", element: f.jsx(H8, {}) }),
                    f.jsx(Me, {
                      path: "/consultation",
                      element: f.jsx(l8, {}),
                    }),
                    f.jsx(Me, { path: "/organ-map", element: f.jsx(m8, {}) }),
                    f.jsx(Me, {
                      path: "/login",
                      element: f.jsx(V8, { onLogin: o }),
                    }),
                    f.jsx(Me, {
                      path: "/contact-form",
                      element: f.jsx(a8, { notify: s }),
                    }),
                    f.jsx(Me, { path: "/about", element: f.jsx($8, {}) }),
                    f.jsx(Me, { path: "*", element: f.jsx(rg, {}) }),
                  ],
                }),
              ],
            }),
            f.jsx(Bg, {}),
            f.jsx(uf, {
              location: "bottom",
              buttonText: "Accept",
              cookieName: "myCookieName",
              style: l.cookie,
              buttonStyle: l.button,
              children:
                "This website uses cookies to ensure you get the best experience on our website. By continuing to use this site, you consent to the use of cookies.",
            }),
          ],
        })
      : f.jsxs("div", {
          className: "app",
          children: [
            f.jsx(zg, {}),
            f.jsx(Fg, { user: t, onLogout: a }),
            f.jsxs("main", {
              children: [
                f.jsx(Hg, { notification: n }),
                f.jsx(i1, {}),
                f.jsxs(Z0, {
                  children: [
                    f.jsx(Me, {
                      path: "/user-homepage",
                      element: f.jsx(h9, {}),
                    }),
                    f.jsx(Me, {
                      path: "/program-form",
                      element: f.jsx(tk, { notify: s }),
                    }),
                    f.jsx(Me, {
                      path: "/instructions",
                      element: f.jsx(p9, {}),
                    }),
                    f.jsx(Me, {
                      path: "/workouts",
                      element: f.jsx(sk, { userId: t.id, notify: s }),
                    }),
                    f.jsx(Me, {
                      path: "/workout-progression",
                      element: f.jsx(a9, { userId: t.id }),
                    }),
                    f.jsx(Me, {
                      path: "/past-workout-programs",
                      element: f.jsx(ok, { userId: t.id, notify: s }),
                    }),
                    f.jsx(Me, {
                      path: "/past-workout-progression",
                      element: f.jsx(u9, { userId: t.id }),
                    }),
                    f.jsx(Me, { path: "*", element: f.jsx(rg, {}) }),
                  ],
                }),
              ],
            }),
            f.jsx(Bg, {}),
            f.jsx(uf, {
              location: "bottom",
              buttonText: "Accept",
              cookieName: "myCookieName",
              style: l.cookie,
              buttonStyle: l.button,
              children:
                "This website uses cookies to ensure you get the best experience on our website. By continuing to use this site, you consent to the use of cookies.",
            }),
          ],
        });
  };
function x9(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function (n) {
    var i = e.styles[n] || {},
      r = e.attributes[n] || {},
      s = e.elements[n];
    !zt(s) ||
      !_n(s) ||
      (Object.assign(s.style, i),
      Object.keys(r).forEach(function (o) {
        var a = r[o];
        a === !1 ? s.removeAttribute(o) : s.setAttribute(o, a === !0 ? "" : a);
      }));
  });
}
function _9(t) {
  var e = t.state,
    n = {
      popper: {
        position: e.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(e.elements.popper.style, n.popper),
    (e.styles = n),
    e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
    function () {
      Object.keys(e.elements).forEach(function (i) {
        var r = e.elements[i],
          s = e.attributes[i] || {},
          o = Object.keys(e.styles.hasOwnProperty(i) ? e.styles[i] : n[i]),
          a = o.reduce(function (l, c) {
            return (l[c] = ""), l;
          }, {});
        !zt(r) ||
          !_n(r) ||
          (Object.assign(r.style, a),
          Object.keys(s).forEach(function (l) {
            r.removeAttribute(l);
          }));
      });
    }
  );
}
const Lp = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: x9,
  effect: _9,
  requires: ["computeStyles"],
};
var b9 = [Jh, np, Qh, Lp],
  w9 = zc({ defaultModifiers: b9 }),
  E9 = [Jh, np, Qh, Lp, U2, H2, Y2, B2, V2],
  jp = zc({ defaultModifiers: E9 });
const z_ = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      afterMain: A2,
      afterRead: O2,
      afterWrite: j2,
      applyStyles: Lp,
      arrow: B2,
      auto: Fc,
      basePlacements: ws,
      beforeMain: T2,
      beforeRead: C2,
      beforeWrite: P2,
      bottom: Nt,
      clippingParents: E2,
      computeStyles: Qh,
      createPopper: jp,
      createPopperBase: $5,
      createPopperLite: w9,
      detectOverflow: ls,
      end: rs,
      eventListeners: Jh,
      flip: H2,
      hide: V2,
      left: ct,
      main: N2,
      modifierPhases: D2,
      offset: U2,
      placements: Kh,
      popper: Er,
      popperGenerator: zc,
      popperOffsets: np,
      preventOverflow: Y2,
      read: k2,
      reference: S2,
      right: At,
      start: rr,
      top: lt,
      variationPlacements: yf,
      viewport: Yh,
      write: L2,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
/*!
 * Bootstrap v5.3.0 (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ const Gn = new Map(),
  qu = {
    set(t, e, n) {
      Gn.has(t) || Gn.set(t, new Map());
      const i = Gn.get(t);
      if (!i.has(e) && i.size !== 0) {
        console.error(
          `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
            Array.from(i.keys())[0]
          }.`,
        );
        return;
      }
      i.set(e, n);
    },
    get(t, e) {
      return (Gn.has(t) && Gn.get(t).get(e)) || null;
    },
    remove(t, e) {
      if (!Gn.has(t)) return;
      const n = Gn.get(t);
      n.delete(e), n.size === 0 && Gn.delete(t);
    },
  },
  S9 = 1e6,
  C9 = 1e3,
  If = "transitionend",
  W_ = (t) => (
    t &&
      window.CSS &&
      window.CSS.escape &&
      (t = t.replace(/#([^\s"#']+)/g, (e, n) => `#${CSS.escape(n)}`)),
    t
  ),
  k9 = (t) =>
    t == null
      ? `${t}`
      : Object.prototype.toString
          .call(t)
          .match(/\s([a-z]+)/i)[1]
          .toLowerCase(),
  O9 = (t) => {
    do t += Math.floor(Math.random() * S9);
    while (document.getElementById(t));
    return t;
  },
  T9 = (t) => {
    if (!t) return 0;
    let { transitionDuration: e, transitionDelay: n } =
      window.getComputedStyle(t);
    const i = Number.parseFloat(e),
      r = Number.parseFloat(n);
    return !i && !r
      ? 0
      : ((e = e.split(",")[0]),
        (n = n.split(",")[0]),
        (Number.parseFloat(e) + Number.parseFloat(n)) * C9);
  },
  H_ = (t) => {
    t.dispatchEvent(new Event(If));
  },
  Dn = (t) =>
    !t || typeof t != "object"
      ? !1
      : (typeof t.jquery < "u" && (t = t[0]), typeof t.nodeType < "u"),
  wi = (t) =>
    Dn(t)
      ? t.jquery
        ? t[0]
        : t
      : typeof t == "string" && t.length > 0
      ? document.querySelector(W_(t))
      : null,
  ks = (t) => {
    if (!Dn(t) || t.getClientRects().length === 0) return !1;
    const e = getComputedStyle(t).getPropertyValue("visibility") === "visible",
      n = t.closest("details:not([open])");
    if (!n) return e;
    if (n !== t) {
      const i = t.closest("summary");
      if ((i && i.parentNode !== n) || i === null) return !1;
    }
    return e;
  },
  Ei = (t) =>
    !t || t.nodeType !== Node.ELEMENT_NODE || t.classList.contains("disabled")
      ? !0
      : typeof t.disabled < "u"
      ? t.disabled
      : t.hasAttribute("disabled") && t.getAttribute("disabled") !== "false",
  V_ = (t) => {
    if (!document.documentElement.attachShadow) return null;
    if (typeof t.getRootNode == "function") {
      const e = t.getRootNode();
      return e instanceof ShadowRoot ? e : null;
    }
    return t instanceof ShadowRoot ? t : t.parentNode ? V_(t.parentNode) : null;
  },
  mc = () => {},
  fa = (t) => {
    t.offsetHeight;
  },
  U_ = () =>
    window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
      ? window.jQuery
      : null,
  Xu = [],
  N9 = (t) => {
    document.readyState === "loading"
      ? (Xu.length ||
          document.addEventListener("DOMContentLoaded", () => {
            for (const e of Xu) e();
          }),
        Xu.push(t))
      : t();
  },
  Yt = () => document.documentElement.dir === "rtl",
  Gt = (t) => {
    N9(() => {
      const e = U_();
      if (e) {
        const n = t.NAME,
          i = e.fn[n];
        (e.fn[n] = t.jQueryInterface),
          (e.fn[n].Constructor = t),
          (e.fn[n].noConflict = () => ((e.fn[n] = i), t.jQueryInterface));
      }
    });
  },
  gt = (t, e = [], n = t) => (typeof t == "function" ? t(...e) : n),
  Y_ = (t, e, n = !0) => {
    if (!n) {
      gt(t);
      return;
    }
    const r = T9(e) + 5;
    let s = !1;
    const o = ({ target: a }) => {
      a === e && ((s = !0), e.removeEventListener(If, o), gt(t));
    };
    e.addEventListener(If, o),
      setTimeout(() => {
        s || H_(e);
      }, r);
  },
  Dp = (t, e, n, i) => {
    const r = t.length;
    let s = t.indexOf(e);
    return s === -1
      ? !n && i
        ? t[r - 1]
        : t[0]
      : ((s += n ? 1 : -1),
        i && (s = (s + r) % r),
        t[Math.max(0, Math.min(s, r - 1))]);
  },
  A9 = /[^.]*(?=\..*)\.|.*/,
  P9 = /\..*/,
  L9 = /::\d+$/,
  Qu = {};
let r1 = 1;
const K_ = { mouseenter: "mouseover", mouseleave: "mouseout" },
  j9 = new Set([
    "click",
    "dblclick",
    "mouseup",
    "mousedown",
    "contextmenu",
    "mousewheel",
    "DOMMouseScroll",
    "mouseover",
    "mouseout",
    "mousemove",
    "selectstart",
    "selectend",
    "keydown",
    "keypress",
    "keyup",
    "orientationchange",
    "touchstart",
    "touchmove",
    "touchend",
    "touchcancel",
    "pointerdown",
    "pointermove",
    "pointerup",
    "pointerleave",
    "pointercancel",
    "gesturestart",
    "gesturechange",
    "gestureend",
    "focus",
    "blur",
    "change",
    "reset",
    "select",
    "submit",
    "focusin",
    "focusout",
    "load",
    "unload",
    "beforeunload",
    "resize",
    "move",
    "DOMContentLoaded",
    "readystatechange",
    "error",
    "abort",
    "scroll",
  ]);
function G_(t, e) {
  return (e && `${e}::${r1++}`) || t.uidEvent || r1++;
}
function q_(t) {
  const e = G_(t);
  return (t.uidEvent = e), (Qu[e] = Qu[e] || {}), Qu[e];
}
function D9(t, e) {
  return function n(i) {
    return (
      Rp(i, { delegateTarget: t }),
      n.oneOff && D.off(t, i.type, e),
      e.apply(t, [i])
    );
  };
}
function R9(t, e, n) {
  return function i(r) {
    const s = t.querySelectorAll(e);
    for (let { target: o } = r; o && o !== this; o = o.parentNode)
      for (const a of s)
        if (a === o)
          return (
            Rp(r, { delegateTarget: o }),
            i.oneOff && D.off(t, r.type, e, n),
            n.apply(o, [r])
          );
  };
}
function X_(t, e, n = null) {
  return Object.values(t).find(
    (i) => i.callable === e && i.delegationSelector === n,
  );
}
function Q_(t, e, n) {
  const i = typeof e == "string",
    r = i ? n : e || n;
  let s = J_(t);
  return j9.has(s) || (s = t), [i, r, s];
}
function s1(t, e, n, i, r) {
  if (typeof e != "string" || !t) return;
  let [s, o, a] = Q_(e, n, i);
  e in K_ &&
    (o = ((g) =>
      function (y) {
        if (
          !y.relatedTarget ||
          (y.relatedTarget !== y.delegateTarget &&
            !y.delegateTarget.contains(y.relatedTarget))
        )
          return g.call(this, y);
      })(o));
  const l = q_(t),
    c = l[a] || (l[a] = {}),
    u = X_(c, o, s ? n : null);
  if (u) {
    u.oneOff = u.oneOff && r;
    return;
  }
  const d = G_(o, e.replace(A9, "")),
    h = s ? R9(t, n, o) : D9(t, o);
  (h.delegationSelector = s ? n : null),
    (h.callable = o),
    (h.oneOff = r),
    (h.uidEvent = d),
    (c[d] = h),
    t.addEventListener(a, h, s);
}
function $f(t, e, n, i, r) {
  const s = X_(e[n], i, r);
  s && (t.removeEventListener(n, s, !!r), delete e[n][s.uidEvent]);
}
function M9(t, e, n, i) {
  const r = e[n] || {};
  for (const [s, o] of Object.entries(r))
    s.includes(i) && $f(t, e, n, o.callable, o.delegationSelector);
}
function J_(t) {
  return (t = t.replace(P9, "")), K_[t] || t;
}
const D = {
  on(t, e, n, i) {
    s1(t, e, n, i, !1);
  },
  one(t, e, n, i) {
    s1(t, e, n, i, !0);
  },
  off(t, e, n, i) {
    if (typeof e != "string" || !t) return;
    const [r, s, o] = Q_(e, n, i),
      a = o !== e,
      l = q_(t),
      c = l[o] || {},
      u = e.startsWith(".");
    if (typeof s < "u") {
      if (!Object.keys(c).length) return;
      $f(t, l, o, s, r ? n : null);
      return;
    }
    if (u) for (const d of Object.keys(l)) M9(t, l, d, e.slice(1));
    for (const [d, h] of Object.entries(c)) {
      const p = d.replace(L9, "");
      (!a || e.includes(p)) && $f(t, l, o, h.callable, h.delegationSelector);
    }
  },
  trigger(t, e, n) {
    if (typeof e != "string" || !t) return null;
    const i = U_(),
      r = J_(e),
      s = e !== r;
    let o = null,
      a = !0,
      l = !0,
      c = !1;
    s &&
      i &&
      ((o = i.Event(e, n)),
      i(t).trigger(o),
      (a = !o.isPropagationStopped()),
      (l = !o.isImmediatePropagationStopped()),
      (c = o.isDefaultPrevented()));
    const u = Rp(new Event(e, { bubbles: a, cancelable: !0 }), n);
    return (
      c && u.preventDefault(),
      l && t.dispatchEvent(u),
      u.defaultPrevented && o && o.preventDefault(),
      u
    );
  },
};
function Rp(t, e = {}) {
  for (const [n, i] of Object.entries(e))
    try {
      t[n] = i;
    } catch {
      Object.defineProperty(t, n, {
        configurable: !0,
        get() {
          return i;
        },
      });
    }
  return t;
}
function o1(t) {
  if (t === "true") return !0;
  if (t === "false") return !1;
  if (t === Number(t).toString()) return Number(t);
  if (t === "" || t === "null") return null;
  if (typeof t != "string") return t;
  try {
    return JSON.parse(decodeURIComponent(t));
  } catch {
    return t;
  }
}
function Ju(t) {
  return t.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
}
const Rn = {
  setDataAttribute(t, e, n) {
    t.setAttribute(`data-bs-${Ju(e)}`, n);
  },
  removeDataAttribute(t, e) {
    t.removeAttribute(`data-bs-${Ju(e)}`);
  },
  getDataAttributes(t) {
    if (!t) return {};
    const e = {},
      n = Object.keys(t.dataset).filter(
        (i) => i.startsWith("bs") && !i.startsWith("bsConfig"),
      );
    for (const i of n) {
      let r = i.replace(/^bs/, "");
      (r = r.charAt(0).toLowerCase() + r.slice(1, r.length)),
        (e[r] = o1(t.dataset[i]));
    }
    return e;
  },
  getDataAttribute(t, e) {
    return o1(t.getAttribute(`data-bs-${Ju(e)}`));
  },
};
class ha {
  static get Default() {
    return {};
  }
  static get DefaultType() {
    return {};
  }
  static get NAME() {
    throw new Error(
      'You have to implement the static method "NAME", for each component!',
    );
  }
  _getConfig(e) {
    return (
      (e = this._mergeConfigObj(e)),
      (e = this._configAfterMerge(e)),
      this._typeCheckConfig(e),
      e
    );
  }
  _configAfterMerge(e) {
    return e;
  }
  _mergeConfigObj(e, n) {
    const i = Dn(n) ? Rn.getDataAttribute(n, "config") : {};
    return {
      ...this.constructor.Default,
      ...(typeof i == "object" ? i : {}),
      ...(Dn(n) ? Rn.getDataAttributes(n) : {}),
      ...(typeof e == "object" ? e : {}),
    };
  }
  _typeCheckConfig(e, n = this.constructor.DefaultType) {
    for (const [i, r] of Object.entries(n)) {
      const s = e[i],
        o = Dn(s) ? "element" : k9(s);
      if (!new RegExp(r).test(o))
        throw new TypeError(
          `${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${o}" but expected type "${r}".`,
        );
    }
  }
}
const I9 = "5.3.0";
class an extends ha {
  constructor(e, n) {
    super(),
      (e = wi(e)),
      e &&
        ((this._element = e),
        (this._config = this._getConfig(n)),
        qu.set(this._element, this.constructor.DATA_KEY, this));
  }
  dispose() {
    qu.remove(this._element, this.constructor.DATA_KEY),
      D.off(this._element, this.constructor.EVENT_KEY);
    for (const e of Object.getOwnPropertyNames(this)) this[e] = null;
  }
  _queueCallback(e, n, i = !0) {
    Y_(e, n, i);
  }
  _getConfig(e) {
    return (
      (e = this._mergeConfigObj(e, this._element)),
      (e = this._configAfterMerge(e)),
      this._typeCheckConfig(e),
      e
    );
  }
  static getInstance(e) {
    return qu.get(wi(e), this.DATA_KEY);
  }
  static getOrCreateInstance(e, n = {}) {
    return this.getInstance(e) || new this(e, typeof n == "object" ? n : null);
  }
  static get VERSION() {
    return I9;
  }
  static get DATA_KEY() {
    return `bs.${this.NAME}`;
  }
  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }
  static eventName(e) {
    return `${e}${this.EVENT_KEY}`;
  }
}
const Zu = (t) => {
    let e = t.getAttribute("data-bs-target");
    if (!e || e === "#") {
      let n = t.getAttribute("href");
      if (!n || (!n.includes("#") && !n.startsWith("."))) return null;
      n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`),
        (e = n && n !== "#" ? n.trim() : null);
    }
    return W_(e);
  },
  K = {
    find(t, e = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(e, t));
    },
    findOne(t, e = document.documentElement) {
      return Element.prototype.querySelector.call(e, t);
    },
    children(t, e) {
      return [].concat(...t.children).filter((n) => n.matches(e));
    },
    parents(t, e) {
      const n = [];
      let i = t.parentNode.closest(e);
      for (; i; ) n.push(i), (i = i.parentNode.closest(e));
      return n;
    },
    prev(t, e) {
      let n = t.previousElementSibling;
      for (; n; ) {
        if (n.matches(e)) return [n];
        n = n.previousElementSibling;
      }
      return [];
    },
    next(t, e) {
      let n = t.nextElementSibling;
      for (; n; ) {
        if (n.matches(e)) return [n];
        n = n.nextElementSibling;
      }
      return [];
    },
    focusableChildren(t) {
      const e = [
        "a",
        "button",
        "input",
        "textarea",
        "select",
        "details",
        "[tabindex]",
        '[contenteditable="true"]',
      ]
        .map((n) => `${n}:not([tabindex^="-"])`)
        .join(",");
      return this.find(e, t).filter((n) => !Ei(n) && ks(n));
    },
    getSelectorFromElement(t) {
      const e = Zu(t);
      return e && K.findOne(e) ? e : null;
    },
    getElementFromSelector(t) {
      const e = Zu(t);
      return e ? K.findOne(e) : null;
    },
    getMultipleElementsFromSelector(t) {
      const e = Zu(t);
      return e ? K.find(e) : [];
    },
  },
  Qc = (t, e = "hide") => {
    const n = `click.dismiss${t.EVENT_KEY}`,
      i = t.NAME;
    D.on(document, n, `[data-bs-dismiss="${i}"]`, function (r) {
      if (
        (["A", "AREA"].includes(this.tagName) && r.preventDefault(), Ei(this))
      )
        return;
      const s = K.getElementFromSelector(this) || this.closest(`.${i}`);
      t.getOrCreateInstance(s)[e]();
    });
  },
  $9 = "alert",
  F9 = "bs.alert",
  Z_ = `.${F9}`,
  B9 = `close${Z_}`,
  z9 = `closed${Z_}`,
  W9 = "fade",
  H9 = "show";
class Jc extends an {
  static get NAME() {
    return $9;
  }
  close() {
    if (D.trigger(this._element, B9).defaultPrevented) return;
    this._element.classList.remove(H9);
    const n = this._element.classList.contains(W9);
    this._queueCallback(() => this._destroyElement(), this._element, n);
  }
  _destroyElement() {
    this._element.remove(), D.trigger(this._element, z9), this.dispose();
  }
  static jQueryInterface(e) {
    return this.each(function () {
      const n = Jc.getOrCreateInstance(this);
      if (typeof e == "string") {
        if (n[e] === void 0 || e.startsWith("_") || e === "constructor")
          throw new TypeError(`No method named "${e}"`);
        n[e](this);
      }
    });
  }
}
Qc(Jc, "close");
Gt(Jc);
const V9 = "button",
  U9 = "bs.button",
  Y9 = `.${U9}`,
  K9 = ".data-api",
  G9 = "active",
  a1 = '[data-bs-toggle="button"]',
  q9 = `click${Y9}${K9}`;
class Zc extends an {
  static get NAME() {
    return V9;
  }
  toggle() {
    this._element.setAttribute(
      "aria-pressed",
      this._element.classList.toggle(G9),
    );
  }
  static jQueryInterface(e) {
    return this.each(function () {
      const n = Zc.getOrCreateInstance(this);
      e === "toggle" && n[e]();
    });
  }
}
D.on(document, q9, a1, (t) => {
  t.preventDefault();
  const e = t.target.closest(a1);
  Zc.getOrCreateInstance(e).toggle();
});
Gt(Zc);
const X9 = "swipe",
  Os = ".bs.swipe",
  Q9 = `touchstart${Os}`,
  J9 = `touchmove${Os}`,
  Z9 = `touchend${Os}`,
  eT = `pointerdown${Os}`,
  tT = `pointerup${Os}`,
  nT = "touch",
  iT = "pen",
  rT = "pointer-event",
  sT = 40,
  oT = { endCallback: null, leftCallback: null, rightCallback: null },
  aT = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)",
  };
class yc extends ha {
  constructor(e, n) {
    super(),
      (this._element = e),
      !(!e || !yc.isSupported()) &&
        ((this._config = this._getConfig(n)),
        (this._deltaX = 0),
        (this._supportPointerEvents = !!window.PointerEvent),
        this._initEvents());
  }
  static get Default() {
    return oT;
  }
  static get DefaultType() {
    return aT;
  }
  static get NAME() {
    return X9;
  }
  dispose() {
    D.off(this._element, Os);
  }
  _start(e) {
    if (!this._supportPointerEvents) {
      this._deltaX = e.touches[0].clientX;
      return;
    }
    this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX);
  }
  _end(e) {
    this._eventIsPointerPenTouch(e) &&
      (this._deltaX = e.clientX - this._deltaX),
      this._handleSwipe(),
      gt(this._config.endCallback);
  }
  _move(e) {
    this._deltaX =
      e.touches && e.touches.length > 1
        ? 0
        : e.touches[0].clientX - this._deltaX;
  }
  _handleSwipe() {
    const e = Math.abs(this._deltaX);
    if (e <= sT) return;
    const n = e / this._deltaX;
    (this._deltaX = 0),
      n && gt(n > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    this._supportPointerEvents
      ? (D.on(this._element, eT, (e) => this._start(e)),
        D.on(this._element, tT, (e) => this._end(e)),
        this._element.classList.add(rT))
      : (D.on(this._element, Q9, (e) => this._start(e)),
        D.on(this._element, J9, (e) => this._move(e)),
        D.on(this._element, Z9, (e) => this._end(e)));
  }
  _eventIsPointerPenTouch(e) {
    return (
      this._supportPointerEvents &&
      (e.pointerType === iT || e.pointerType === nT)
    );
  }
  static isSupported() {
    return (
      "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0
    );
  }
}
const lT = "carousel",
  cT = "bs.carousel",
  Ni = `.${cT}`,
  eb = ".data-api",
  uT = "ArrowLeft",
  dT = "ArrowRight",
  fT = 500,
  Us = "next",
  br = "prev",
  Sr = "left",
  bl = "right",
  hT = `slide${Ni}`,
  ed = `slid${Ni}`,
  pT = `keydown${Ni}`,
  gT = `mouseenter${Ni}`,
  mT = `mouseleave${Ni}`,
  yT = `dragstart${Ni}`,
  vT = `load${Ni}${eb}`,
  xT = `click${Ni}${eb}`,
  tb = "carousel",
  Xa = "active",
  _T = "slide",
  bT = "carousel-item-end",
  wT = "carousel-item-start",
  ET = "carousel-item-next",
  ST = "carousel-item-prev",
  nb = ".active",
  ib = ".carousel-item",
  CT = nb + ib,
  kT = ".carousel-item img",
  OT = ".carousel-indicators",
  TT = "[data-bs-slide], [data-bs-slide-to]",
  NT = '[data-bs-ride="carousel"]',
  AT = { [uT]: bl, [dT]: Sr },
  PT = {
    interval: 5e3,
    keyboard: !0,
    pause: "hover",
    ride: !1,
    touch: !0,
    wrap: !0,
  },
  LT = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean",
  };
class pa extends an {
  constructor(e, n) {
    super(e, n),
      (this._interval = null),
      (this._activeElement = null),
      (this._isSliding = !1),
      (this.touchTimeout = null),
      (this._swipeHelper = null),
      (this._indicatorsElement = K.findOne(OT, this._element)),
      this._addEventListeners(),
      this._config.ride === tb && this.cycle();
  }
  static get Default() {
    return PT;
  }
  static get DefaultType() {
    return LT;
  }
  static get NAME() {
    return lT;
  }
  next() {
    this._slide(Us);
  }
  nextWhenVisible() {
    !document.hidden && ks(this._element) && this.next();
  }
  prev() {
    this._slide(br);
  }
  pause() {
    this._isSliding && H_(this._element), this._clearInterval();
  }
  cycle() {
    this._clearInterval(),
      this._updateInterval(),
      (this._interval = setInterval(
        () => this.nextWhenVisible(),
        this._config.interval,
      ));
  }
  _maybeEnableCycle() {
    if (this._config.ride) {
      if (this._isSliding) {
        D.one(this._element, ed, () => this.cycle());
        return;
      }
      this.cycle();
    }
  }
  to(e) {
    const n = this._getItems();
    if (e > n.length - 1 || e < 0) return;
    if (this._isSliding) {
      D.one(this._element, ed, () => this.to(e));
      return;
    }
    const i = this._getItemIndex(this._getActive());
    if (i === e) return;
    const r = e > i ? Us : br;
    this._slide(r, n[e]);
  }
  dispose() {
    this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
  }
  _configAfterMerge(e) {
    return (e.defaultInterval = e.interval), e;
  }
  _addEventListeners() {
    this._config.keyboard && D.on(this._element, pT, (e) => this._keydown(e)),
      this._config.pause === "hover" &&
        (D.on(this._element, gT, () => this.pause()),
        D.on(this._element, mT, () => this._maybeEnableCycle())),
      this._config.touch && yc.isSupported() && this._addTouchEventListeners();
  }
  _addTouchEventListeners() {
    for (const i of K.find(kT, this._element))
      D.on(i, yT, (r) => r.preventDefault());
    const n = {
      leftCallback: () => this._slide(this._directionToOrder(Sr)),
      rightCallback: () => this._slide(this._directionToOrder(bl)),
      endCallback: () => {
        this._config.pause === "hover" &&
          (this.pause(),
          this.touchTimeout && clearTimeout(this.touchTimeout),
          (this.touchTimeout = setTimeout(
            () => this._maybeEnableCycle(),
            fT + this._config.interval,
          )));
      },
    };
    this._swipeHelper = new yc(this._element, n);
  }
  _keydown(e) {
    if (/input|textarea/i.test(e.target.tagName)) return;
    const n = AT[e.key];
    n && (e.preventDefault(), this._slide(this._directionToOrder(n)));
  }
  _getItemIndex(e) {
    return this._getItems().indexOf(e);
  }
  _setActiveIndicatorElement(e) {
    if (!this._indicatorsElement) return;
    const n = K.findOne(nb, this._indicatorsElement);
    n.classList.remove(Xa), n.removeAttribute("aria-current");
    const i = K.findOne(`[data-bs-slide-to="${e}"]`, this._indicatorsElement);
    i && (i.classList.add(Xa), i.setAttribute("aria-current", "true"));
  }
  _updateInterval() {
    const e = this._activeElement || this._getActive();
    if (!e) return;
    const n = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
    this._config.interval = n || this._config.defaultInterval;
  }
  _slide(e, n = null) {
    if (this._isSliding) return;
    const i = this._getActive(),
      r = e === Us,
      s = n || Dp(this._getItems(), i, r, this._config.wrap);
    if (s === i) return;
    const o = this._getItemIndex(s),
      a = (p) =>
        D.trigger(this._element, p, {
          relatedTarget: s,
          direction: this._orderToDirection(e),
          from: this._getItemIndex(i),
          to: o,
        });
    if (a(hT).defaultPrevented || !i || !s) return;
    const c = !!this._interval;
    this.pause(),
      (this._isSliding = !0),
      this._setActiveIndicatorElement(o),
      (this._activeElement = s);
    const u = r ? wT : bT,
      d = r ? ET : ST;
    s.classList.add(d), fa(s), i.classList.add(u), s.classList.add(u);
    const h = () => {
      s.classList.remove(u, d),
        s.classList.add(Xa),
        i.classList.remove(Xa, d, u),
        (this._isSliding = !1),
        a(ed);
    };
    this._queueCallback(h, i, this._isAnimated()), c && this.cycle();
  }
  _isAnimated() {
    return this._element.classList.contains(_T);
  }
  _getActive() {
    return K.findOne(CT, this._element);
  }
  _getItems() {
    return K.find(ib, this._element);
  }
  _clearInterval() {
    this._interval && (clearInterval(this._interval), (this._interval = null));
  }
  _directionToOrder(e) {
    return Yt() ? (e === Sr ? br : Us) : e === Sr ? Us : br;
  }
  _orderToDirection(e) {
    return Yt() ? (e === br ? Sr : bl) : e === br ? bl : Sr;
  }
  static jQueryInterface(e) {
    return this.each(function () {
      const n = pa.getOrCreateInstance(this, e);
      if (typeof e == "number") {
        n.to(e);
        return;
      }
      if (typeof e == "string") {
        if (n[e] === void 0 || e.startsWith("_") || e === "constructor")
          throw new TypeError(`No method named "${e}"`);
        n[e]();
      }
    });
  }
}
D.on(document, xT, TT, function (t) {
  const e = K.getElementFromSelector(this);
  if (!e || !e.classList.contains(tb)) return;
  t.preventDefault();
  const n = pa.getOrCreateInstance(e),
    i = this.getAttribute("data-bs-slide-to");
  if (i) {
    n.to(i), n._maybeEnableCycle();
    return;
  }
  if (Rn.getDataAttribute(this, "slide") === "next") {
    n.next(), n._maybeEnableCycle();
    return;
  }
  n.prev(), n._maybeEnableCycle();
});
D.on(window, vT, () => {
  const t = K.find(NT);
  for (const e of t) pa.getOrCreateInstance(e);
});
Gt(pa);
const jT = "collapse",
  DT = "bs.collapse",
  ga = `.${DT}`,
  RT = ".data-api",
  MT = `show${ga}`,
  IT = `shown${ga}`,
  $T = `hide${ga}`,
  FT = `hidden${ga}`,
  BT = `click${ga}${RT}`,
  td = "show",
  Br = "collapse",
  Qa = "collapsing",
  zT = "collapsed",
  WT = `:scope .${Br} .${Br}`,
  HT = "collapse-horizontal",
  VT = "width",
  UT = "height",
  YT = ".collapse.show, .collapse.collapsing",
  Ff = '[data-bs-toggle="collapse"]',
  KT = { parent: null, toggle: !0 },
  GT = { parent: "(null|element)", toggle: "boolean" };
class Qo extends an {
  constructor(e, n) {
    super(e, n), (this._isTransitioning = !1), (this._triggerArray = []);
    const i = K.find(Ff);
    for (const r of i) {
      const s = K.getSelectorFromElement(r),
        o = K.find(s).filter((a) => a === this._element);
      s !== null && o.length && this._triggerArray.push(r);
    }
    this._initializeChildren(),
      this._config.parent ||
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
      this._config.toggle && this.toggle();
  }
  static get Default() {
    return KT;
  }
  static get DefaultType() {
    return GT;
  }
  static get NAME() {
    return jT;
  }
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown()) return;
    let e = [];
    if (
      (this._config.parent &&
        (e = this._getFirstLevelChildren(YT)
          .filter((a) => a !== this._element)
          .map((a) => Qo.getOrCreateInstance(a, { toggle: !1 }))),
      (e.length && e[0]._isTransitioning) ||
        D.trigger(this._element, MT).defaultPrevented)
    )
      return;
    for (const a of e) a.hide();
    const i = this._getDimension();
    this._element.classList.remove(Br),
      this._element.classList.add(Qa),
      (this._element.style[i] = 0),
      this._addAriaAndCollapsedClass(this._triggerArray, !0),
      (this._isTransitioning = !0);
    const r = () => {
        (this._isTransitioning = !1),
          this._element.classList.remove(Qa),
          this._element.classList.add(Br, td),
          (this._element.style[i] = ""),
          D.trigger(this._element, IT);
      },
      o = `scroll${i[0].toUpperCase() + i.slice(1)}`;
    this._queueCallback(r, this._element, !0),
      (this._element.style[i] = `${this._element[o]}px`);
  }
  hide() {
    if (
      this._isTransitioning ||
      !this._isShown() ||
      D.trigger(this._element, $T).defaultPrevented
    )
      return;
    const n = this._getDimension();
    (this._element.style[n] = `${this._element.getBoundingClientRect()[n]}px`),
      fa(this._element),
      this._element.classList.add(Qa),
      this._element.classList.remove(Br, td);
    for (const r of this._triggerArray) {
      const s = K.getElementFromSelector(r);
      s && !this._isShown(s) && this._addAriaAndCollapsedClass([r], !1);
    }
    this._isTransitioning = !0;
    const i = () => {
      (this._isTransitioning = !1),
        this._element.classList.remove(Qa),
        this._element.classList.add(Br),
        D.trigger(this._element, FT);
    };
    (this._element.style[n] = ""), this._queueCallback(i, this._element, !0);
  }
  _isShown(e = this._element) {
    return e.classList.contains(td);
  }
  _configAfterMerge(e) {
    return (e.toggle = !!e.toggle), (e.parent = wi(e.parent)), e;
  }
  _getDimension() {
    return this._element.classList.contains(HT) ? VT : UT;
  }
  _initializeChildren() {
    if (!this._config.parent) return;
    const e = this._getFirstLevelChildren(Ff);
    for (const n of e) {
      const i = K.getElementFromSelector(n);
      i && this._addAriaAndCollapsedClass([n], this._isShown(i));
    }
  }
  _getFirstLevelChildren(e) {
    const n = K.find(WT, this._config.parent);
    return K.find(e, this._config.parent).filter((i) => !n.includes(i));
  }
  _addAriaAndCollapsedClass(e, n) {
    if (e.length)
      for (const i of e)
        i.classList.toggle(zT, !n), i.setAttribute("aria-expanded", n);
  }
  static jQueryInterface(e) {
    const n = {};
    return (
      typeof e == "string" && /show|hide/.test(e) && (n.toggle = !1),
      this.each(function () {
        const i = Qo.getOrCreateInstance(this, n);
        if (typeof e == "string") {
          if (typeof i[e] > "u") throw new TypeError(`No method named "${e}"`);
          i[e]();
        }
      })
    );
  }
}
D.on(document, BT, Ff, function (t) {
  (t.target.tagName === "A" ||
    (t.delegateTarget && t.delegateTarget.tagName === "A")) &&
    t.preventDefault();
  for (const e of K.getMultipleElementsFromSelector(this))
    Qo.getOrCreateInstance(e, { toggle: !1 }).toggle();
});
Gt(Qo);
const l1 = "dropdown",
  qT = "bs.dropdown",
  gr = `.${qT}`,
  Mp = ".data-api",
  XT = "Escape",
  c1 = "Tab",
  QT = "ArrowUp",
  u1 = "ArrowDown",
  JT = 2,
  ZT = `hide${gr}`,
  eN = `hidden${gr}`,
  tN = `show${gr}`,
  nN = `shown${gr}`,
  rb = `click${gr}${Mp}`,
  sb = `keydown${gr}${Mp}`,
  iN = `keyup${gr}${Mp}`,
  Cr = "show",
  rN = "dropup",
  sN = "dropend",
  oN = "dropstart",
  aN = "dropup-center",
  lN = "dropdown-center",
  Yi = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
  cN = `${Yi}.${Cr}`,
  wl = ".dropdown-menu",
  uN = ".navbar",
  dN = ".navbar-nav",
  fN = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
  hN = Yt() ? "top-end" : "top-start",
  pN = Yt() ? "top-start" : "top-end",
  gN = Yt() ? "bottom-end" : "bottom-start",
  mN = Yt() ? "bottom-start" : "bottom-end",
  yN = Yt() ? "left-start" : "right-start",
  vN = Yt() ? "right-start" : "left-start",
  xN = "top",
  _N = "bottom",
  bN = {
    autoClose: !0,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [0, 2],
    popperConfig: null,
    reference: "toggle",
  },
  wN = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)",
  };
class xn extends an {
  constructor(e, n) {
    super(e, n),
      (this._popper = null),
      (this._parent = this._element.parentNode),
      (this._menu =
        K.next(this._element, wl)[0] ||
        K.prev(this._element, wl)[0] ||
        K.findOne(wl, this._parent)),
      (this._inNavbar = this._detectNavbar());
  }
  static get Default() {
    return bN;
  }
  static get DefaultType() {
    return wN;
  }
  static get NAME() {
    return l1;
  }
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (Ei(this._element) || this._isShown()) return;
    const e = { relatedTarget: this._element };
    if (!D.trigger(this._element, tN, e).defaultPrevented) {
      if (
        (this._createPopper(),
        "ontouchstart" in document.documentElement && !this._parent.closest(dN))
      )
        for (const i of [].concat(...document.body.children))
          D.on(i, "mouseover", mc);
      this._element.focus(),
        this._element.setAttribute("aria-expanded", !0),
        this._menu.classList.add(Cr),
        this._element.classList.add(Cr),
        D.trigger(this._element, nN, e);
    }
  }
  hide() {
    if (Ei(this._element) || !this._isShown()) return;
    const e = { relatedTarget: this._element };
    this._completeHide(e);
  }
  dispose() {
    this._popper && this._popper.destroy(), super.dispose();
  }
  update() {
    (this._inNavbar = this._detectNavbar()),
      this._popper && this._popper.update();
  }
  _completeHide(e) {
    if (!D.trigger(this._element, ZT, e).defaultPrevented) {
      if ("ontouchstart" in document.documentElement)
        for (const i of [].concat(...document.body.children))
          D.off(i, "mouseover", mc);
      this._popper && this._popper.destroy(),
        this._menu.classList.remove(Cr),
        this._element.classList.remove(Cr),
        this._element.setAttribute("aria-expanded", "false"),
        Rn.removeDataAttribute(this._menu, "popper"),
        D.trigger(this._element, eN, e);
    }
  }
  _getConfig(e) {
    if (
      ((e = super._getConfig(e)),
      typeof e.reference == "object" &&
        !Dn(e.reference) &&
        typeof e.reference.getBoundingClientRect != "function")
    )
      throw new TypeError(
        `${l1.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`,
      );
    return e;
  }
  _createPopper() {
    if (typeof z_ > "u")
      throw new TypeError(
        "Bootstrap's dropdowns require Popper (https://popper.js.org)",
      );
    let e = this._element;
    this._config.reference === "parent"
      ? (e = this._parent)
      : Dn(this._config.reference)
      ? (e = wi(this._config.reference))
      : typeof this._config.reference == "object" &&
        (e = this._config.reference);
    const n = this._getPopperConfig();
    this._popper = jp(e, this._menu, n);
  }
  _isShown() {
    return this._menu.classList.contains(Cr);
  }
  _getPlacement() {
    const e = this._parent;
    if (e.classList.contains(sN)) return yN;
    if (e.classList.contains(oN)) return vN;
    if (e.classList.contains(aN)) return xN;
    if (e.classList.contains(lN)) return _N;
    const n =
      getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() ===
      "end";
    return e.classList.contains(rN) ? (n ? pN : hN) : n ? mN : gN;
  }
  _detectNavbar() {
    return this._element.closest(uN) !== null;
  }
  _getOffset() {
    const { offset: e } = this._config;
    return typeof e == "string"
      ? e.split(",").map((n) => Number.parseInt(n, 10))
      : typeof e == "function"
      ? (n) => e(n, this._element)
      : e;
  }
  _getPopperConfig() {
    const e = {
      placement: this._getPlacement(),
      modifiers: [
        {
          name: "preventOverflow",
          options: { boundary: this._config.boundary },
        },
        { name: "offset", options: { offset: this._getOffset() } },
      ],
    };
    return (
      (this._inNavbar || this._config.display === "static") &&
        (Rn.setDataAttribute(this._menu, "popper", "static"),
        (e.modifiers = [{ name: "applyStyles", enabled: !1 }])),
      { ...e, ...gt(this._config.popperConfig, [e]) }
    );
  }
  _selectMenuItem({ key: e, target: n }) {
    const i = K.find(fN, this._menu).filter((r) => ks(r));
    i.length && Dp(i, n, e === u1, !i.includes(n)).focus();
  }
  static jQueryInterface(e) {
    return this.each(function () {
      const n = xn.getOrCreateInstance(this, e);
      if (typeof e == "string") {
        if (typeof n[e] > "u") throw new TypeError(`No method named "${e}"`);
        n[e]();
      }
    });
  }
  static clearMenus(e) {
    if (e.button === JT || (e.type === "keyup" && e.key !== c1)) return;
    const n = K.find(cN);
    for (const i of n) {
      const r = xn.getInstance(i);
      if (!r || r._config.autoClose === !1) continue;
      const s = e.composedPath(),
        o = s.includes(r._menu);
      if (
        s.includes(r._element) ||
        (r._config.autoClose === "inside" && !o) ||
        (r._config.autoClose === "outside" && o) ||
        (r._menu.contains(e.target) &&
          ((e.type === "keyup" && e.key === c1) ||
            /input|select|option|textarea|form/i.test(e.target.tagName)))
      )
        continue;
      const a = { relatedTarget: r._element };
      e.type === "click" && (a.clickEvent = e), r._completeHide(a);
    }
  }
  static dataApiKeydownHandler(e) {
    const n = /input|textarea/i.test(e.target.tagName),
      i = e.key === XT,
      r = [QT, u1].includes(e.key);
    if ((!r && !i) || (n && !i)) return;
    e.preventDefault();
    const s = this.matches(Yi)
        ? this
        : K.prev(this, Yi)[0] ||
          K.next(this, Yi)[0] ||
          K.findOne(Yi, e.delegateTarget.parentNode),
      o = xn.getOrCreateInstance(s);
    if (r) {
      e.stopPropagation(), o.show(), o._selectMenuItem(e);
      return;
    }
    o._isShown() && (e.stopPropagation(), o.hide(), s.focus());
  }
}
D.on(document, sb, Yi, xn.dataApiKeydownHandler);
D.on(document, sb, wl, xn.dataApiKeydownHandler);
D.on(document, rb, xn.clearMenus);
D.on(document, iN, xn.clearMenus);
D.on(document, rb, Yi, function (t) {
  t.preventDefault(), xn.getOrCreateInstance(this).toggle();
});
Gt(xn);
const ob = "backdrop",
  EN = "fade",
  d1 = "show",
  f1 = `mousedown.bs.${ob}`,
  SN = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: !1,
    isVisible: !0,
    rootElement: "body",
  },
  CN = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)",
  };
class ab extends ha {
  constructor(e) {
    super(),
      (this._config = this._getConfig(e)),
      (this._isAppended = !1),
      (this._element = null);
  }
  static get Default() {
    return SN;
  }
  static get DefaultType() {
    return CN;
  }
  static get NAME() {
    return ob;
  }
  show(e) {
    if (!this._config.isVisible) {
      gt(e);
      return;
    }
    this._append();
    const n = this._getElement();
    this._config.isAnimated && fa(n),
      n.classList.add(d1),
      this._emulateAnimation(() => {
        gt(e);
      });
  }
  hide(e) {
    if (!this._config.isVisible) {
      gt(e);
      return;
    }
    this._getElement().classList.remove(d1),
      this._emulateAnimation(() => {
        this.dispose(), gt(e);
      });
  }
  dispose() {
    this._isAppended &&
      (D.off(this._element, f1),
      this._element.remove(),
      (this._isAppended = !1));
  }
  _getElement() {
    if (!this._element) {
      const e = document.createElement("div");
      (e.className = this._config.className),
        this._config.isAnimated && e.classList.add(EN),
        (this._element = e);
    }
    return this._element;
  }
  _configAfterMerge(e) {
    return (e.rootElement = wi(e.rootElement)), e;
  }
  _append() {
    if (this._isAppended) return;
    const e = this._getElement();
    this._config.rootElement.append(e),
      D.on(e, f1, () => {
        gt(this._config.clickCallback);
      }),
      (this._isAppended = !0);
  }
  _emulateAnimation(e) {
    Y_(e, this._getElement(), this._config.isAnimated);
  }
}
const kN = "focustrap",
  ON = "bs.focustrap",
  vc = `.${ON}`,
  TN = `focusin${vc}`,
  NN = `keydown.tab${vc}`,
  AN = "Tab",
  PN = "forward",
  h1 = "backward",
  LN = { autofocus: !0, trapElement: null },
  jN = { autofocus: "boolean", trapElement: "element" };
class lb extends ha {
  constructor(e) {
    super(),
      (this._config = this._getConfig(e)),
      (this._isActive = !1),
      (this._lastTabNavDirection = null);
  }
  static get Default() {
    return LN;
  }
  static get DefaultType() {
    return jN;
  }
  static get NAME() {
    return kN;
  }
  activate() {
    this._isActive ||
      (this._config.autofocus && this._config.trapElement.focus(),
      D.off(document, vc),
      D.on(document, TN, (e) => this._handleFocusin(e)),
      D.on(document, NN, (e) => this._handleKeydown(e)),
      (this._isActive = !0));
  }
  deactivate() {
    this._isActive && ((this._isActive = !1), D.off(document, vc));
  }
  _handleFocusin(e) {
    const { trapElement: n } = this._config;
    if (e.target === document || e.target === n || n.contains(e.target)) return;
    const i = K.focusableChildren(n);
    i.length === 0
      ? n.focus()
      : this._lastTabNavDirection === h1
      ? i[i.length - 1].focus()
      : i[0].focus();
  }
  _handleKeydown(e) {
    e.key === AN && (this._lastTabNavDirection = e.shiftKey ? h1 : PN);
  }
}
const p1 = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  g1 = ".sticky-top",
  Ja = "padding-right",
  m1 = "margin-right";
class Bf {
  constructor() {
    this._element = document.body;
  }
  getWidth() {
    const e = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - e);
  }
  hide() {
    const e = this.getWidth();
    this._disableOverFlow(),
      this._setElementAttributes(this._element, Ja, (n) => n + e),
      this._setElementAttributes(p1, Ja, (n) => n + e),
      this._setElementAttributes(g1, m1, (n) => n - e);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"),
      this._resetElementAttributes(this._element, Ja),
      this._resetElementAttributes(p1, Ja),
      this._resetElementAttributes(g1, m1);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow"),
      (this._element.style.overflow = "hidden");
  }
  _setElementAttributes(e, n, i) {
    const r = this.getWidth(),
      s = (o) => {
        if (o !== this._element && window.innerWidth > o.clientWidth + r)
          return;
        this._saveInitialAttribute(o, n);
        const a = window.getComputedStyle(o).getPropertyValue(n);
        o.style.setProperty(n, `${i(Number.parseFloat(a))}px`);
      };
    this._applyManipulationCallback(e, s);
  }
  _saveInitialAttribute(e, n) {
    const i = e.style.getPropertyValue(n);
    i && Rn.setDataAttribute(e, n, i);
  }
  _resetElementAttributes(e, n) {
    const i = (r) => {
      const s = Rn.getDataAttribute(r, n);
      if (s === null) {
        r.style.removeProperty(n);
        return;
      }
      Rn.removeDataAttribute(r, n), r.style.setProperty(n, s);
    };
    this._applyManipulationCallback(e, i);
  }
  _applyManipulationCallback(e, n) {
    if (Dn(e)) {
      n(e);
      return;
    }
    for (const i of K.find(e, this._element)) n(i);
  }
}
const DN = "modal",
  RN = "bs.modal",
  Kt = `.${RN}`,
  MN = ".data-api",
  IN = "Escape",
  $N = `hide${Kt}`,
  FN = `hidePrevented${Kt}`,
  cb = `hidden${Kt}`,
  ub = `show${Kt}`,
  BN = `shown${Kt}`,
  zN = `resize${Kt}`,
  WN = `click.dismiss${Kt}`,
  HN = `mousedown.dismiss${Kt}`,
  VN = `keydown.dismiss${Kt}`,
  UN = `click${Kt}${MN}`,
  y1 = "modal-open",
  YN = "fade",
  v1 = "show",
  nd = "modal-static",
  KN = ".modal.show",
  GN = ".modal-dialog",
  qN = ".modal-body",
  XN = '[data-bs-toggle="modal"]',
  QN = { backdrop: !0, focus: !0, keyboard: !0 },
  JN = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
class hs extends an {
  constructor(e, n) {
    super(e, n),
      (this._dialog = K.findOne(GN, this._element)),
      (this._backdrop = this._initializeBackDrop()),
      (this._focustrap = this._initializeFocusTrap()),
      (this._isShown = !1),
      (this._isTransitioning = !1),
      (this._scrollBar = new Bf()),
      this._addEventListeners();
  }
  static get Default() {
    return QN;
  }
  static get DefaultType() {
    return JN;
  }
  static get NAME() {
    return DN;
  }
  toggle(e) {
    return this._isShown ? this.hide() : this.show(e);
  }
  show(e) {
    this._isShown ||
      this._isTransitioning ||
      D.trigger(this._element, ub, { relatedTarget: e }).defaultPrevented ||
      ((this._isShown = !0),
      (this._isTransitioning = !0),
      this._scrollBar.hide(),
      document.body.classList.add(y1),
      this._adjustDialog(),
      this._backdrop.show(() => this._showElement(e)));
  }
  hide() {
    !this._isShown ||
      this._isTransitioning ||
      D.trigger(this._element, $N).defaultPrevented ||
      ((this._isShown = !1),
      (this._isTransitioning = !0),
      this._focustrap.deactivate(),
      this._element.classList.remove(v1),
      this._queueCallback(
        () => this._hideModal(),
        this._element,
        this._isAnimated(),
      ));
  }
  dispose() {
    D.off(window, Kt),
      D.off(this._dialog, Kt),
      this._backdrop.dispose(),
      this._focustrap.deactivate(),
      super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  _initializeBackDrop() {
    return new ab({
      isVisible: !!this._config.backdrop,
      isAnimated: this._isAnimated(),
    });
  }
  _initializeFocusTrap() {
    return new lb({ trapElement: this._element });
  }
  _showElement(e) {
    document.body.contains(this._element) ||
      document.body.append(this._element),
      (this._element.style.display = "block"),
      this._element.removeAttribute("aria-hidden"),
      this._element.setAttribute("aria-modal", !0),
      this._element.setAttribute("role", "dialog"),
      (this._element.scrollTop = 0);
    const n = K.findOne(qN, this._dialog);
    n && (n.scrollTop = 0), fa(this._element), this._element.classList.add(v1);
    const i = () => {
      this._config.focus && this._focustrap.activate(),
        (this._isTransitioning = !1),
        D.trigger(this._element, BN, { relatedTarget: e });
    };
    this._queueCallback(i, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    D.on(this._element, VN, (e) => {
      if (e.key === IN) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      }
    }),
      D.on(window, zN, () => {
        this._isShown && !this._isTransitioning && this._adjustDialog();
      }),
      D.on(this._element, HN, (e) => {
        D.one(this._element, WN, (n) => {
          if (!(this._element !== e.target || this._element !== n.target)) {
            if (this._config.backdrop === "static") {
              this._triggerBackdropTransition();
              return;
            }
            this._config.backdrop && this.hide();
          }
        });
      });
  }
  _hideModal() {
    (this._element.style.display = "none"),
      this._element.setAttribute("aria-hidden", !0),
      this._element.removeAttribute("aria-modal"),
      this._element.removeAttribute("role"),
      (this._isTransitioning = !1),
      this._backdrop.hide(() => {
        document.body.classList.remove(y1),
          this._resetAdjustments(),
          this._scrollBar.reset(),
          D.trigger(this._element, cb);
      });
  }
  _isAnimated() {
    return this._element.classList.contains(YN);
  }
  _triggerBackdropTransition() {
    if (D.trigger(this._element, FN).defaultPrevented) return;
    const n =
        this._element.scrollHeight > document.documentElement.clientHeight,
      i = this._element.style.overflowY;
    i === "hidden" ||
      this._element.classList.contains(nd) ||
      (n || (this._element.style.overflowY = "hidden"),
      this._element.classList.add(nd),
      this._queueCallback(() => {
        this._element.classList.remove(nd),
          this._queueCallback(() => {
            this._element.style.overflowY = i;
          }, this._dialog);
      }, this._dialog),
      this._element.focus());
  }
  _adjustDialog() {
    const e =
        this._element.scrollHeight > document.documentElement.clientHeight,
      n = this._scrollBar.getWidth(),
      i = n > 0;
    if (i && !e) {
      const r = Yt() ? "paddingLeft" : "paddingRight";
      this._element.style[r] = `${n}px`;
    }
    if (!i && e) {
      const r = Yt() ? "paddingRight" : "paddingLeft";
      this._element.style[r] = `${n}px`;
    }
  }
  _resetAdjustments() {
    (this._element.style.paddingLeft = ""),
      (this._element.style.paddingRight = "");
  }
  static jQueryInterface(e, n) {
    return this.each(function () {
      const i = hs.getOrCreateInstance(this, e);
      if (typeof e == "string") {
        if (typeof i[e] > "u") throw new TypeError(`No method named "${e}"`);
        i[e](n);
      }
    });
  }
}
D.on(document, UN, XN, function (t) {
  const e = K.getElementFromSelector(this);
  ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
    D.one(e, ub, (r) => {
      r.defaultPrevented ||
        D.one(e, cb, () => {
          ks(this) && this.focus();
        });
    });
  const n = K.findOne(KN);
  n && hs.getInstance(n).hide(), hs.getOrCreateInstance(e).toggle(this);
});
Qc(hs);
Gt(hs);
const ZN = "offcanvas",
  eA = "bs.offcanvas",
  Vn = `.${eA}`,
  db = ".data-api",
  tA = `load${Vn}${db}`,
  nA = "Escape",
  x1 = "show",
  _1 = "showing",
  b1 = "hiding",
  iA = "offcanvas-backdrop",
  fb = ".offcanvas.show",
  rA = `show${Vn}`,
  sA = `shown${Vn}`,
  oA = `hide${Vn}`,
  w1 = `hidePrevented${Vn}`,
  hb = `hidden${Vn}`,
  aA = `resize${Vn}`,
  lA = `click${Vn}${db}`,
  cA = `keydown.dismiss${Vn}`,
  uA = '[data-bs-toggle="offcanvas"]',
  dA = { backdrop: !0, keyboard: !0, scroll: !1 },
  fA = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
class Si extends an {
  constructor(e, n) {
    super(e, n),
      (this._isShown = !1),
      (this._backdrop = this._initializeBackDrop()),
      (this._focustrap = this._initializeFocusTrap()),
      this._addEventListeners();
  }
  static get Default() {
    return dA;
  }
  static get DefaultType() {
    return fA;
  }
  static get NAME() {
    return ZN;
  }
  toggle(e) {
    return this._isShown ? this.hide() : this.show(e);
  }
  show(e) {
    if (
      this._isShown ||
      D.trigger(this._element, rA, { relatedTarget: e }).defaultPrevented
    )
      return;
    (this._isShown = !0),
      this._backdrop.show(),
      this._config.scroll || new Bf().hide(),
      this._element.setAttribute("aria-modal", !0),
      this._element.setAttribute("role", "dialog"),
      this._element.classList.add(_1);
    const i = () => {
      (!this._config.scroll || this._config.backdrop) &&
        this._focustrap.activate(),
        this._element.classList.add(x1),
        this._element.classList.remove(_1),
        D.trigger(this._element, sA, { relatedTarget: e });
    };
    this._queueCallback(i, this._element, !0);
  }
  hide() {
    if (!this._isShown || D.trigger(this._element, oA).defaultPrevented) return;
    this._focustrap.deactivate(),
      this._element.blur(),
      (this._isShown = !1),
      this._element.classList.add(b1),
      this._backdrop.hide();
    const n = () => {
      this._element.classList.remove(x1, b1),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        this._config.scroll || new Bf().reset(),
        D.trigger(this._element, hb);
    };
    this._queueCallback(n, this._element, !0);
  }
  dispose() {
    this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  _initializeBackDrop() {
    const e = () => {
        if (this._config.backdrop === "static") {
          D.trigger(this._element, w1);
          return;
        }
        this.hide();
      },
      n = !!this._config.backdrop;
    return new ab({
      className: iA,
      isVisible: n,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: n ? e : null,
    });
  }
  _initializeFocusTrap() {
    return new lb({ trapElement: this._element });
  }
  _addEventListeners() {
    D.on(this._element, cA, (e) => {
      if (e.key === nA) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        D.trigger(this._element, w1);
      }
    });
  }
  static jQueryInterface(e) {
    return this.each(function () {
      const n = Si.getOrCreateInstance(this, e);
      if (typeof e == "string") {
        if (n[e] === void 0 || e.startsWith("_") || e === "constructor")
          throw new TypeError(`No method named "${e}"`);
        n[e](this);
      }
    });
  }
}
D.on(document, lA, uA, function (t) {
  const e = K.getElementFromSelector(this);
  if ((["A", "AREA"].includes(this.tagName) && t.preventDefault(), Ei(this)))
    return;
  D.one(e, hb, () => {
    ks(this) && this.focus();
  });
  const n = K.findOne(fb);
  n && n !== e && Si.getInstance(n).hide(),
    Si.getOrCreateInstance(e).toggle(this);
});
D.on(window, tA, () => {
  for (const t of K.find(fb)) Si.getOrCreateInstance(t).show();
});
D.on(window, aA, () => {
  for (const t of K.find("[aria-modal][class*=show][class*=offcanvas-]"))
    getComputedStyle(t).position !== "fixed" &&
      Si.getOrCreateInstance(t).hide();
});
Qc(Si);
Gt(Si);
const hA = /^aria-[\w-]*$/i,
  pb = {
    "*": ["class", "dir", "id", "lang", "role", hA],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "srcset", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: [],
  },
  pA = new Set([
    "background",
    "cite",
    "href",
    "itemtype",
    "longdesc",
    "poster",
    "src",
    "xlink:href",
  ]),
  gA = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
  mA = (t, e) => {
    const n = t.nodeName.toLowerCase();
    return e.includes(n)
      ? pA.has(n)
        ? !!gA.test(t.nodeValue)
        : !0
      : e.filter((i) => i instanceof RegExp).some((i) => i.test(n));
  };
function yA(t, e, n) {
  if (!t.length) return t;
  if (n && typeof n == "function") return n(t);
  const r = new window.DOMParser().parseFromString(t, "text/html"),
    s = [].concat(...r.body.querySelectorAll("*"));
  for (const o of s) {
    const a = o.nodeName.toLowerCase();
    if (!Object.keys(e).includes(a)) {
      o.remove();
      continue;
    }
    const l = [].concat(...o.attributes),
      c = [].concat(e["*"] || [], e[a] || []);
    for (const u of l) mA(u, c) || o.removeAttribute(u.nodeName);
  }
  return r.body.innerHTML;
}
const vA = "TemplateFactory",
  xA = {
    allowList: pb,
    content: {},
    extraClass: "",
    html: !1,
    sanitize: !0,
    sanitizeFn: null,
    template: "<div></div>",
  },
  _A = {
    allowList: "object",
    content: "object",
    extraClass: "(string|function)",
    html: "boolean",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    template: "string",
  },
  bA = {
    entry: "(string|element|function|null)",
    selector: "(string|element)",
  };
class wA extends ha {
  constructor(e) {
    super(), (this._config = this._getConfig(e));
  }
  static get Default() {
    return xA;
  }
  static get DefaultType() {
    return _A;
  }
  static get NAME() {
    return vA;
  }
  getContent() {
    return Object.values(this._config.content)
      .map((e) => this._resolvePossibleFunction(e))
      .filter(Boolean);
  }
  hasContent() {
    return this.getContent().length > 0;
  }
  changeContent(e) {
    return (
      this._checkContent(e),
      (this._config.content = { ...this._config.content, ...e }),
      this
    );
  }
  toHtml() {
    const e = document.createElement("div");
    e.innerHTML = this._maybeSanitize(this._config.template);
    for (const [r, s] of Object.entries(this._config.content))
      this._setContent(e, s, r);
    const n = e.children[0],
      i = this._resolvePossibleFunction(this._config.extraClass);
    return i && n.classList.add(...i.split(" ")), n;
  }
  _typeCheckConfig(e) {
    super._typeCheckConfig(e), this._checkContent(e.content);
  }
  _checkContent(e) {
    for (const [n, i] of Object.entries(e))
      super._typeCheckConfig({ selector: n, entry: i }, bA);
  }
  _setContent(e, n, i) {
    const r = K.findOne(i, e);
    if (r) {
      if (((n = this._resolvePossibleFunction(n)), !n)) {
        r.remove();
        return;
      }
      if (Dn(n)) {
        this._putElementInTemplate(wi(n), r);
        return;
      }
      if (this._config.html) {
        r.innerHTML = this._maybeSanitize(n);
        return;
      }
      r.textContent = n;
    }
  }
  _maybeSanitize(e) {
    return this._config.sanitize
      ? yA(e, this._config.allowList, this._config.sanitizeFn)
      : e;
  }
  _resolvePossibleFunction(e) {
    return gt(e, [this]);
  }
  _putElementInTemplate(e, n) {
    if (this._config.html) {
      (n.innerHTML = ""), n.append(e);
      return;
    }
    n.textContent = e.textContent;
  }
}
const EA = "tooltip",
  SA = new Set(["sanitize", "allowList", "sanitizeFn"]),
  id = "fade",
  CA = "modal",
  Za = "show",
  kA = ".tooltip-inner",
  E1 = `.${CA}`,
  S1 = "hide.bs.modal",
  Ys = "hover",
  rd = "focus",
  OA = "click",
  TA = "manual",
  NA = "hide",
  AA = "hidden",
  PA = "show",
  LA = "shown",
  jA = "inserted",
  DA = "click",
  RA = "focusin",
  MA = "focusout",
  IA = "mouseenter",
  $A = "mouseleave",
  FA = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: Yt() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: Yt() ? "right" : "left",
  },
  BA = {
    allowList: pb,
    animation: !0,
    boundary: "clippingParents",
    container: !1,
    customClass: "",
    delay: 0,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    html: !1,
    offset: [0, 6],
    placement: "top",
    popperConfig: null,
    sanitize: !0,
    sanitizeFn: null,
    selector: !1,
    template:
      '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: "",
    trigger: "hover focus",
  },
  zA = {
    allowList: "object",
    animation: "boolean",
    boundary: "(string|element)",
    container: "(string|element|boolean)",
    customClass: "(string|function)",
    delay: "(number|object)",
    fallbackPlacements: "array",
    html: "boolean",
    offset: "(array|string|function)",
    placement: "(string|function)",
    popperConfig: "(null|object|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    selector: "(string|boolean)",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
  };
class Ts extends an {
  constructor(e, n) {
    if (typeof z_ > "u")
      throw new TypeError(
        "Bootstrap's tooltips require Popper (https://popper.js.org)",
      );
    super(e, n),
      (this._isEnabled = !0),
      (this._timeout = 0),
      (this._isHovered = null),
      (this._activeTrigger = {}),
      (this._popper = null),
      (this._templateFactory = null),
      (this._newContent = null),
      (this.tip = null),
      this._setListeners(),
      this._config.selector || this._fixTitle();
  }
  static get Default() {
    return BA;
  }
  static get DefaultType() {
    return zA;
  }
  static get NAME() {
    return EA;
  }
  enable() {
    this._isEnabled = !0;
  }
  disable() {
    this._isEnabled = !1;
  }
  toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  }
  toggle() {
    if (this._isEnabled) {
      if (
        ((this._activeTrigger.click = !this._activeTrigger.click),
        this._isShown())
      ) {
        this._leave();
        return;
      }
      this._enter();
    }
  }
  dispose() {
    clearTimeout(this._timeout),
      D.off(this._element.closest(E1), S1, this._hideModalHandler),
      this._element.getAttribute("data-bs-original-title") &&
        this._element.setAttribute(
          "title",
          this._element.getAttribute("data-bs-original-title"),
        ),
      this._disposePopper(),
      super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this._isWithContent() && this._isEnabled)) return;
    const e = D.trigger(this._element, this.constructor.eventName(PA)),
      i = (
        V_(this._element) || this._element.ownerDocument.documentElement
      ).contains(this._element);
    if (e.defaultPrevented || !i) return;
    this._disposePopper();
    const r = this._getTipElement();
    this._element.setAttribute("aria-describedby", r.getAttribute("id"));
    const { container: s } = this._config;
    if (
      (this._element.ownerDocument.documentElement.contains(this.tip) ||
        (s.append(r), D.trigger(this._element, this.constructor.eventName(jA))),
      (this._popper = this._createPopper(r)),
      r.classList.add(Za),
      "ontouchstart" in document.documentElement)
    )
      for (const a of [].concat(...document.body.children))
        D.on(a, "mouseover", mc);
    const o = () => {
      D.trigger(this._element, this.constructor.eventName(LA)),
        this._isHovered === !1 && this._leave(),
        (this._isHovered = !1);
    };
    this._queueCallback(o, this.tip, this._isAnimated());
  }
  hide() {
    if (
      !this._isShown() ||
      D.trigger(this._element, this.constructor.eventName(NA)).defaultPrevented
    )
      return;
    if (
      (this._getTipElement().classList.remove(Za),
      "ontouchstart" in document.documentElement)
    )
      for (const r of [].concat(...document.body.children))
        D.off(r, "mouseover", mc);
    (this._activeTrigger[OA] = !1),
      (this._activeTrigger[rd] = !1),
      (this._activeTrigger[Ys] = !1),
      (this._isHovered = null);
    const i = () => {
      this._isWithActiveTrigger() ||
        (this._isHovered || this._disposePopper(),
        this._element.removeAttribute("aria-describedby"),
        D.trigger(this._element, this.constructor.eventName(AA)));
    };
    this._queueCallback(i, this.tip, this._isAnimated());
  }
  update() {
    this._popper && this._popper.update();
  }
  _isWithContent() {
    return !!this._getTitle();
  }
  _getTipElement() {
    return (
      this.tip ||
        (this.tip = this._createTipElement(
          this._newContent || this._getContentForTemplate(),
        )),
      this.tip
    );
  }
  _createTipElement(e) {
    const n = this._getTemplateFactory(e).toHtml();
    if (!n) return null;
    n.classList.remove(id, Za),
      n.classList.add(`bs-${this.constructor.NAME}-auto`);
    const i = O9(this.constructor.NAME).toString();
    return (
      n.setAttribute("id", i), this._isAnimated() && n.classList.add(id), n
    );
  }
  setContent(e) {
    (this._newContent = e),
      this._isShown() && (this._disposePopper(), this.show());
  }
  _getTemplateFactory(e) {
    return (
      this._templateFactory
        ? this._templateFactory.changeContent(e)
        : (this._templateFactory = new wA({
            ...this._config,
            content: e,
            extraClass: this._resolvePossibleFunction(this._config.customClass),
          })),
      this._templateFactory
    );
  }
  _getContentForTemplate() {
    return { [kA]: this._getTitle() };
  }
  _getTitle() {
    return (
      this._resolvePossibleFunction(this._config.title) ||
      this._element.getAttribute("data-bs-original-title")
    );
  }
  _initializeOnDelegatedTarget(e) {
    return this.constructor.getOrCreateInstance(
      e.delegateTarget,
      this._getDelegateConfig(),
    );
  }
  _isAnimated() {
    return (
      this._config.animation || (this.tip && this.tip.classList.contains(id))
    );
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(Za);
  }
  _createPopper(e) {
    const n = gt(this._config.placement, [this, e, this._element]),
      i = FA[n.toUpperCase()];
    return jp(this._element, e, this._getPopperConfig(i));
  }
  _getOffset() {
    const { offset: e } = this._config;
    return typeof e == "string"
      ? e.split(",").map((n) => Number.parseInt(n, 10))
      : typeof e == "function"
      ? (n) => e(n, this._element)
      : e;
  }
  _resolvePossibleFunction(e) {
    return gt(e, [this._element]);
  }
  _getPopperConfig(e) {
    const n = {
      placement: e,
      modifiers: [
        {
          name: "flip",
          options: { fallbackPlacements: this._config.fallbackPlacements },
        },
        { name: "offset", options: { offset: this._getOffset() } },
        {
          name: "preventOverflow",
          options: { boundary: this._config.boundary },
        },
        {
          name: "arrow",
          options: { element: `.${this.constructor.NAME}-arrow` },
        },
        {
          name: "preSetPlacement",
          enabled: !0,
          phase: "beforeMain",
          fn: (i) => {
            this._getTipElement().setAttribute(
              "data-popper-placement",
              i.state.placement,
            );
          },
        },
      ],
    };
    return { ...n, ...gt(this._config.popperConfig, [n]) };
  }
  _setListeners() {
    const e = this._config.trigger.split(" ");
    for (const n of e)
      if (n === "click")
        D.on(
          this._element,
          this.constructor.eventName(DA),
          this._config.selector,
          (i) => {
            this._initializeOnDelegatedTarget(i).toggle();
          },
        );
      else if (n !== TA) {
        const i =
            n === Ys
              ? this.constructor.eventName(IA)
              : this.constructor.eventName(RA),
          r =
            n === Ys
              ? this.constructor.eventName($A)
              : this.constructor.eventName(MA);
        D.on(this._element, i, this._config.selector, (s) => {
          const o = this._initializeOnDelegatedTarget(s);
          (o._activeTrigger[s.type === "focusin" ? rd : Ys] = !0), o._enter();
        }),
          D.on(this._element, r, this._config.selector, (s) => {
            const o = this._initializeOnDelegatedTarget(s);
            (o._activeTrigger[s.type === "focusout" ? rd : Ys] =
              o._element.contains(s.relatedTarget)),
              o._leave();
          });
      }
    (this._hideModalHandler = () => {
      this._element && this.hide();
    }),
      D.on(this._element.closest(E1), S1, this._hideModalHandler);
  }
  _fixTitle() {
    const e = this._element.getAttribute("title");
    e &&
      (!this._element.getAttribute("aria-label") &&
        !this._element.textContent.trim() &&
        this._element.setAttribute("aria-label", e),
      this._element.setAttribute("data-bs-original-title", e),
      this._element.removeAttribute("title"));
  }
  _enter() {
    if (this._isShown() || this._isHovered) {
      this._isHovered = !0;
      return;
    }
    (this._isHovered = !0),
      this._setTimeout(() => {
        this._isHovered && this.show();
      }, this._config.delay.show);
  }
  _leave() {
    this._isWithActiveTrigger() ||
      ((this._isHovered = !1),
      this._setTimeout(() => {
        this._isHovered || this.hide();
      }, this._config.delay.hide));
  }
  _setTimeout(e, n) {
    clearTimeout(this._timeout), (this._timeout = setTimeout(e, n));
  }
  _isWithActiveTrigger() {
    return Object.values(this._activeTrigger).includes(!0);
  }
  _getConfig(e) {
    const n = Rn.getDataAttributes(this._element);
    for (const i of Object.keys(n)) SA.has(i) && delete n[i];
    return (
      (e = { ...n, ...(typeof e == "object" && e ? e : {}) }),
      (e = this._mergeConfigObj(e)),
      (e = this._configAfterMerge(e)),
      this._typeCheckConfig(e),
      e
    );
  }
  _configAfterMerge(e) {
    return (
      (e.container = e.container === !1 ? document.body : wi(e.container)),
      typeof e.delay == "number" &&
        (e.delay = { show: e.delay, hide: e.delay }),
      typeof e.title == "number" && (e.title = e.title.toString()),
      typeof e.content == "number" && (e.content = e.content.toString()),
      e
    );
  }
  _getDelegateConfig() {
    const e = {};
    for (const [n, i] of Object.entries(this._config))
      this.constructor.Default[n] !== i && (e[n] = i);
    return (e.selector = !1), (e.trigger = "manual"), e;
  }
  _disposePopper() {
    this._popper && (this._popper.destroy(), (this._popper = null)),
      this.tip && (this.tip.remove(), (this.tip = null));
  }
  static jQueryInterface(e) {
    return this.each(function () {
      const n = Ts.getOrCreateInstance(this, e);
      if (typeof e == "string") {
        if (typeof n[e] > "u") throw new TypeError(`No method named "${e}"`);
        n[e]();
      }
    });
  }
}
Gt(Ts);
const WA = "popover",
  HA = ".popover-header",
  VA = ".popover-body",
  UA = {
    ...Ts.Default,
    content: "",
    offset: [0, 8],
    placement: "right",
    template:
      '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger: "click",
  },
  YA = { ...Ts.DefaultType, content: "(null|string|element|function)" };
class Ip extends Ts {
  static get Default() {
    return UA;
  }
  static get DefaultType() {
    return YA;
  }
  static get NAME() {
    return WA;
  }
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  _getContentForTemplate() {
    return { [HA]: this._getTitle(), [VA]: this._getContent() };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  static jQueryInterface(e) {
    return this.each(function () {
      const n = Ip.getOrCreateInstance(this, e);
      if (typeof e == "string") {
        if (typeof n[e] > "u") throw new TypeError(`No method named "${e}"`);
        n[e]();
      }
    });
  }
}
Gt(Ip);
const KA = "scrollspy",
  GA = "bs.scrollspy",
  $p = `.${GA}`,
  qA = ".data-api",
  XA = `activate${$p}`,
  C1 = `click${$p}`,
  QA = `load${$p}${qA}`,
  JA = "dropdown-item",
  wr = "active",
  ZA = '[data-bs-spy="scroll"]',
  sd = "[href]",
  eP = ".nav, .list-group",
  k1 = ".nav-link",
  tP = ".nav-item",
  nP = ".list-group-item",
  iP = `${k1}, ${tP} > ${k1}, ${nP}`,
  rP = ".dropdown",
  sP = ".dropdown-toggle",
  oP = {
    offset: null,
    rootMargin: "0px 0px -25%",
    smoothScroll: !1,
    target: null,
    threshold: [0.1, 0.5, 1],
  },
  aP = {
    offset: "(number|null)",
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element",
    threshold: "array",
  };
class eu extends an {
  constructor(e, n) {
    super(e, n),
      (this._targetLinks = new Map()),
      (this._observableSections = new Map()),
      (this._rootElement =
        getComputedStyle(this._element).overflowY === "visible"
          ? null
          : this._element),
      (this._activeTarget = null),
      (this._observer = null),
      (this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }),
      this.refresh();
  }
  static get Default() {
    return oP;
  }
  static get DefaultType() {
    return aP;
  }
  static get NAME() {
    return KA;
  }
  refresh() {
    this._initializeTargetsAndObservables(),
      this._maybeEnableSmoothScroll(),
      this._observer
        ? this._observer.disconnect()
        : (this._observer = this._getNewObserver());
    for (const e of this._observableSections.values())
      this._observer.observe(e);
  }
  dispose() {
    this._observer.disconnect(), super.dispose();
  }
  _configAfterMerge(e) {
    return (
      (e.target = wi(e.target) || document.body),
      (e.rootMargin = e.offset ? `${e.offset}px 0px -30%` : e.rootMargin),
      typeof e.threshold == "string" &&
        (e.threshold = e.threshold.split(",").map((n) => Number.parseFloat(n))),
      e
    );
  }
  _maybeEnableSmoothScroll() {
    this._config.smoothScroll &&
      (D.off(this._config.target, C1),
      D.on(this._config.target, C1, sd, (e) => {
        const n = this._observableSections.get(e.target.hash);
        if (n) {
          e.preventDefault();
          const i = this._rootElement || window,
            r = n.offsetTop - this._element.offsetTop;
          if (i.scrollTo) {
            i.scrollTo({ top: r, behavior: "smooth" });
            return;
          }
          i.scrollTop = r;
        }
      }));
  }
  _getNewObserver() {
    const e = {
      root: this._rootElement,
      threshold: this._config.threshold,
      rootMargin: this._config.rootMargin,
    };
    return new IntersectionObserver((n) => this._observerCallback(n), e);
  }
  _observerCallback(e) {
    const n = (o) => this._targetLinks.get(`#${o.target.id}`),
      i = (o) => {
        (this._previousScrollData.visibleEntryTop = o.target.offsetTop),
          this._process(n(o));
      },
      r = (this._rootElement || document.documentElement).scrollTop,
      s = r >= this._previousScrollData.parentScrollTop;
    this._previousScrollData.parentScrollTop = r;
    for (const o of e) {
      if (!o.isIntersecting) {
        (this._activeTarget = null), this._clearActiveClass(n(o));
        continue;
      }
      const a = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
      if (s && a) {
        if ((i(o), !r)) return;
        continue;
      }
      !s && !a && i(o);
    }
  }
  _initializeTargetsAndObservables() {
    (this._targetLinks = new Map()), (this._observableSections = new Map());
    const e = K.find(sd, this._config.target);
    for (const n of e) {
      if (!n.hash || Ei(n)) continue;
      const i = K.findOne(decodeURI(n.hash), this._element);
      ks(i) &&
        (this._targetLinks.set(decodeURI(n.hash), n),
        this._observableSections.set(n.hash, i));
    }
  }
  _process(e) {
    this._activeTarget !== e &&
      (this._clearActiveClass(this._config.target),
      (this._activeTarget = e),
      e.classList.add(wr),
      this._activateParents(e),
      D.trigger(this._element, XA, { relatedTarget: e }));
  }
  _activateParents(e) {
    if (e.classList.contains(JA)) {
      K.findOne(sP, e.closest(rP)).classList.add(wr);
      return;
    }
    for (const n of K.parents(e, eP))
      for (const i of K.prev(n, iP)) i.classList.add(wr);
  }
  _clearActiveClass(e) {
    e.classList.remove(wr);
    const n = K.find(`${sd}.${wr}`, e);
    for (const i of n) i.classList.remove(wr);
  }
  static jQueryInterface(e) {
    return this.each(function () {
      const n = eu.getOrCreateInstance(this, e);
      if (typeof e == "string") {
        if (n[e] === void 0 || e.startsWith("_") || e === "constructor")
          throw new TypeError(`No method named "${e}"`);
        n[e]();
      }
    });
  }
}
D.on(window, QA, () => {
  for (const t of K.find(ZA)) eu.getOrCreateInstance(t);
});
Gt(eu);
const lP = "tab",
  cP = "bs.tab",
  mr = `.${cP}`,
  uP = `hide${mr}`,
  dP = `hidden${mr}`,
  fP = `show${mr}`,
  hP = `shown${mr}`,
  pP = `click${mr}`,
  gP = `keydown${mr}`,
  mP = `load${mr}`,
  yP = "ArrowLeft",
  O1 = "ArrowRight",
  vP = "ArrowUp",
  T1 = "ArrowDown",
  Ki = "active",
  N1 = "fade",
  od = "show",
  xP = "dropdown",
  _P = ".dropdown-toggle",
  bP = ".dropdown-menu",
  ad = ":not(.dropdown-toggle)",
  wP = '.list-group, .nav, [role="tablist"]',
  EP = ".nav-item, .list-group-item",
  SP = `.nav-link${ad}, .list-group-item${ad}, [role="tab"]${ad}`,
  gb =
    '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
  ld = `${SP}, ${gb}`,
  CP = `.${Ki}[data-bs-toggle="tab"], .${Ki}[data-bs-toggle="pill"], .${Ki}[data-bs-toggle="list"]`;
class ps extends an {
  constructor(e) {
    super(e),
      (this._parent = this._element.closest(wP)),
      this._parent &&
        (this._setInitialAttributes(this._parent, this._getChildren()),
        D.on(this._element, gP, (n) => this._keydown(n)));
  }
  static get NAME() {
    return lP;
  }
  show() {
    const e = this._element;
    if (this._elemIsActive(e)) return;
    const n = this._getActiveElem(),
      i = n ? D.trigger(n, uP, { relatedTarget: e }) : null;
    D.trigger(e, fP, { relatedTarget: n }).defaultPrevented ||
      (i && i.defaultPrevented) ||
      (this._deactivate(n, e), this._activate(e, n));
  }
  _activate(e, n) {
    if (!e) return;
    e.classList.add(Ki), this._activate(K.getElementFromSelector(e));
    const i = () => {
      if (e.getAttribute("role") !== "tab") {
        e.classList.add(od);
        return;
      }
      e.removeAttribute("tabindex"),
        e.setAttribute("aria-selected", !0),
        this._toggleDropDown(e, !0),
        D.trigger(e, hP, { relatedTarget: n });
    };
    this._queueCallback(i, e, e.classList.contains(N1));
  }
  _deactivate(e, n) {
    if (!e) return;
    e.classList.remove(Ki),
      e.blur(),
      this._deactivate(K.getElementFromSelector(e));
    const i = () => {
      if (e.getAttribute("role") !== "tab") {
        e.classList.remove(od);
        return;
      }
      e.setAttribute("aria-selected", !1),
        e.setAttribute("tabindex", "-1"),
        this._toggleDropDown(e, !1),
        D.trigger(e, dP, { relatedTarget: n });
    };
    this._queueCallback(i, e, e.classList.contains(N1));
  }
  _keydown(e) {
    if (![yP, O1, vP, T1].includes(e.key)) return;
    e.stopPropagation(), e.preventDefault();
    const n = [O1, T1].includes(e.key),
      i = Dp(
        this._getChildren().filter((r) => !Ei(r)),
        e.target,
        n,
        !0,
      );
    i && (i.focus({ preventScroll: !0 }), ps.getOrCreateInstance(i).show());
  }
  _getChildren() {
    return K.find(ld, this._parent);
  }
  _getActiveElem() {
    return this._getChildren().find((e) => this._elemIsActive(e)) || null;
  }
  _setInitialAttributes(e, n) {
    this._setAttributeIfNotExists(e, "role", "tablist");
    for (const i of n) this._setInitialAttributesOnChild(i);
  }
  _setInitialAttributesOnChild(e) {
    e = this._getInnerElement(e);
    const n = this._elemIsActive(e),
      i = this._getOuterElement(e);
    e.setAttribute("aria-selected", n),
      i !== e && this._setAttributeIfNotExists(i, "role", "presentation"),
      n || e.setAttribute("tabindex", "-1"),
      this._setAttributeIfNotExists(e, "role", "tab"),
      this._setInitialAttributesOnTargetPanel(e);
  }
  _setInitialAttributesOnTargetPanel(e) {
    const n = K.getElementFromSelector(e);
    n &&
      (this._setAttributeIfNotExists(n, "role", "tabpanel"),
      e.id && this._setAttributeIfNotExists(n, "aria-labelledby", `${e.id}`));
  }
  _toggleDropDown(e, n) {
    const i = this._getOuterElement(e);
    if (!i.classList.contains(xP)) return;
    const r = (s, o) => {
      const a = K.findOne(s, i);
      a && a.classList.toggle(o, n);
    };
    r(_P, Ki), r(bP, od), i.setAttribute("aria-expanded", n);
  }
  _setAttributeIfNotExists(e, n, i) {
    e.hasAttribute(n) || e.setAttribute(n, i);
  }
  _elemIsActive(e) {
    return e.classList.contains(Ki);
  }
  _getInnerElement(e) {
    return e.matches(ld) ? e : K.findOne(ld, e);
  }
  _getOuterElement(e) {
    return e.closest(EP) || e;
  }
  static jQueryInterface(e) {
    return this.each(function () {
      const n = ps.getOrCreateInstance(this);
      if (typeof e == "string") {
        if (n[e] === void 0 || e.startsWith("_") || e === "constructor")
          throw new TypeError(`No method named "${e}"`);
        n[e]();
      }
    });
  }
}
D.on(document, pP, gb, function (t) {
  ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
    !Ei(this) && ps.getOrCreateInstance(this).show();
});
D.on(window, mP, () => {
  for (const t of K.find(CP)) ps.getOrCreateInstance(t);
});
Gt(ps);
const kP = "toast",
  OP = "bs.toast",
  Ai = `.${OP}`,
  TP = `mouseover${Ai}`,
  NP = `mouseout${Ai}`,
  AP = `focusin${Ai}`,
  PP = `focusout${Ai}`,
  LP = `hide${Ai}`,
  jP = `hidden${Ai}`,
  DP = `show${Ai}`,
  RP = `shown${Ai}`,
  MP = "fade",
  A1 = "hide",
  el = "show",
  tl = "showing",
  IP = { animation: "boolean", autohide: "boolean", delay: "number" },
  $P = { animation: !0, autohide: !0, delay: 5e3 };
class tu extends an {
  constructor(e, n) {
    super(e, n),
      (this._timeout = null),
      (this._hasMouseInteraction = !1),
      (this._hasKeyboardInteraction = !1),
      this._setListeners();
  }
  static get Default() {
    return $P;
  }
  static get DefaultType() {
    return IP;
  }
  static get NAME() {
    return kP;
  }
  show() {
    if (D.trigger(this._element, DP).defaultPrevented) return;
    this._clearTimeout(),
      this._config.animation && this._element.classList.add(MP);
    const n = () => {
      this._element.classList.remove(tl),
        D.trigger(this._element, RP),
        this._maybeScheduleHide();
    };
    this._element.classList.remove(A1),
      fa(this._element),
      this._element.classList.add(el, tl),
      this._queueCallback(n, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown() || D.trigger(this._element, LP).defaultPrevented)
      return;
    const n = () => {
      this._element.classList.add(A1),
        this._element.classList.remove(tl, el),
        D.trigger(this._element, jP);
    };
    this._element.classList.add(tl),
      this._queueCallback(n, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout(),
      this.isShown() && this._element.classList.remove(el),
      super.dispose();
  }
  isShown() {
    return this._element.classList.contains(el);
  }
  _maybeScheduleHide() {
    this._config.autohide &&
      (this._hasMouseInteraction ||
        this._hasKeyboardInteraction ||
        (this._timeout = setTimeout(() => {
          this.hide();
        }, this._config.delay)));
  }
  _onInteraction(e, n) {
    switch (e.type) {
      case "mouseover":
      case "mouseout": {
        this._hasMouseInteraction = n;
        break;
      }
      case "focusin":
      case "focusout": {
        this._hasKeyboardInteraction = n;
        break;
      }
    }
    if (n) {
      this._clearTimeout();
      return;
    }
    const i = e.relatedTarget;
    this._element === i ||
      this._element.contains(i) ||
      this._maybeScheduleHide();
  }
  _setListeners() {
    D.on(this._element, TP, (e) => this._onInteraction(e, !0)),
      D.on(this._element, NP, (e) => this._onInteraction(e, !1)),
      D.on(this._element, AP, (e) => this._onInteraction(e, !0)),
      D.on(this._element, PP, (e) => this._onInteraction(e, !1));
  }
  _clearTimeout() {
    clearTimeout(this._timeout), (this._timeout = null);
  }
  static jQueryInterface(e) {
    return this.each(function () {
      const n = tu.getOrCreateInstance(this, e);
      if (typeof e == "string") {
        if (typeof n[e] > "u") throw new TypeError(`No method named "${e}"`);
        n[e](this);
      }
    });
  }
}
Qc(tu);
Gt(tu);
ud.createRoot(document.getElementById("root")).render(
  f.jsx(ME, { children: f.jsx(v9, {}) }),
);
