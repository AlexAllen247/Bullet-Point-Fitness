var ww = Object.defineProperty;
var Ew = (t, e, n) =>
  e in t
    ? ww(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (t[e] = n);
var ee = (t, e, n) => Ew(t, typeof e != "symbol" ? e + "" : e, n);
function Sw(t, e) {
  for (var n = 0; n < e.length; n++) {
    const r = e[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in t)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              t,
              i,
              s.get ? s : { enumerable: !0, get: () => r[i] },
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
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
var Cw =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Jn(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var ky = { exports: {} },
  Gc = {},
  Ty = { exports: {} },
  se = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xa = Symbol.for("react.element"),
  kw = Symbol.for("react.portal"),
  Tw = Symbol.for("react.fragment"),
  Ow = Symbol.for("react.strict_mode"),
  Aw = Symbol.for("react.profiler"),
  Nw = Symbol.for("react.provider"),
  Pw = Symbol.for("react.context"),
  Lw = Symbol.for("react.forward_ref"),
  jw = Symbol.for("react.suspense"),
  Rw = Symbol.for("react.memo"),
  Dw = Symbol.for("react.lazy"),
  _0 = Symbol.iterator;
function Mw(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (_0 && t[_0]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var Oy = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ay = Object.assign,
  Ny = {};
function Ls(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = Ny),
    (this.updater = n || Oy);
}
Ls.prototype.isReactComponent = {};
Ls.prototype.setState = function (t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, t, e, "setState");
};
Ls.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function Py() {}
Py.prototype = Ls.prototype;
function xh(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = Ny),
    (this.updater = n || Oy);
}
var _h = (xh.prototype = new Py());
_h.constructor = xh;
Ay(_h, Ls.prototype);
_h.isPureReactComponent = !0;
var b0 = Array.isArray,
  Ly = Object.prototype.hasOwnProperty,
  bh = { current: null },
  jy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ry(t, e, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (e != null)
    for (r in (e.ref !== void 0 && (o = e.ref),
    e.key !== void 0 && (s = "" + e.key),
    e))
      Ly.call(e, r) && !jy.hasOwnProperty(r) && (i[r] = e[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
    i.children = l;
  }
  if (t && t.defaultProps)
    for (r in ((a = t.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: xa,
    type: t,
    key: s,
    ref: o,
    props: i,
    _owner: bh.current,
  };
}
function Iw(t, e) {
  return {
    $$typeof: xa,
    type: t.type,
    key: e,
    ref: t.ref,
    props: t.props,
    _owner: t._owner,
  };
}
function wh(t) {
  return typeof t == "object" && t !== null && t.$$typeof === xa;
}
function Fw(t) {
  var e = { "=": "=0", ":": "=2" };
  return (
    "$" +
    t.replace(/[=:]/g, function (n) {
      return e[n];
    })
  );
}
var w0 = /\/+/g;
function Nu(t, e) {
  return typeof t == "object" && t !== null && t.key != null
    ? Fw("" + t.key)
    : e.toString(36);
}
function kl(t, e, n, r, i) {
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
          case xa:
          case kw:
            o = !0;
        }
    }
  if (o)
    return (
      (o = t),
      (i = i(o)),
      (t = r === "" ? "." + Nu(o, 0) : r),
      b0(i)
        ? ((n = ""),
          t != null && (n = t.replace(w0, "$&/") + "/"),
          kl(i, e, n, "", function (c) {
            return c;
          }))
        : i != null &&
          (wh(i) &&
            (i = Iw(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(w0, "$&/") + "/") +
                t,
            )),
          e.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), b0(t)))
    for (var a = 0; a < t.length; a++) {
      s = t[a];
      var l = r + Nu(s, a);
      o += kl(s, e, n, l, i);
    }
  else if (((l = Mw(t)), typeof l == "function"))
    for (t = l.call(t), a = 0; !(s = t.next()).done; )
      (s = s.value), (l = r + Nu(s, a++)), (o += kl(s, e, n, l, i));
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
function Ia(t, e, n) {
  if (t == null) return t;
  var r = [],
    i = 0;
  return (
    kl(t, r, "", "", function (s) {
      return e.call(n, s, i++);
    }),
    r
  );
}
function Bw(t) {
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
var yt = { current: null },
  Tl = { transition: null },
  $w = {
    ReactCurrentDispatcher: yt,
    ReactCurrentBatchConfig: Tl,
    ReactCurrentOwner: bh,
  };
se.Children = {
  map: Ia,
  forEach: function (t, e, n) {
    Ia(
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
      Ia(t, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (t) {
    return (
      Ia(t, function (e) {
        return e;
      }) || []
    );
  },
  only: function (t) {
    if (!wh(t))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return t;
  },
};
se.Component = Ls;
se.Fragment = Tw;
se.Profiler = Aw;
se.PureComponent = xh;
se.StrictMode = Ow;
se.Suspense = jw;
se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $w;
se.cloneElement = function (t, e, n) {
  if (t == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        t +
        ".",
    );
  var r = Ay({}, t.props),
    i = t.key,
    s = t.ref,
    o = t._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((s = e.ref), (o = bh.current)),
      e.key !== void 0 && (i = "" + e.key),
      t.type && t.type.defaultProps)
    )
      var a = t.type.defaultProps;
    for (l in e)
      Ly.call(e, l) &&
        !jy.hasOwnProperty(l) &&
        (r[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: xa, type: t.type, key: i, ref: s, props: r, _owner: o };
};
se.createContext = function (t) {
  return (
    (t = {
      $$typeof: Pw,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (t.Provider = { $$typeof: Nw, _context: t }),
    (t.Consumer = t)
  );
};
se.createElement = Ry;
se.createFactory = function (t) {
  var e = Ry.bind(null, t);
  return (e.type = t), e;
};
se.createRef = function () {
  return { current: null };
};
se.forwardRef = function (t) {
  return { $$typeof: Lw, render: t };
};
se.isValidElement = wh;
se.lazy = function (t) {
  return { $$typeof: Dw, _payload: { _status: -1, _result: t }, _init: Bw };
};
se.memo = function (t, e) {
  return { $$typeof: Rw, type: t, compare: e === void 0 ? null : e };
};
se.startTransition = function (t) {
  var e = Tl.transition;
  Tl.transition = {};
  try {
    t();
  } finally {
    Tl.transition = e;
  }
};
se.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
se.useCallback = function (t, e) {
  return yt.current.useCallback(t, e);
};
se.useContext = function (t) {
  return yt.current.useContext(t);
};
se.useDebugValue = function () {};
se.useDeferredValue = function (t) {
  return yt.current.useDeferredValue(t);
};
se.useEffect = function (t, e) {
  return yt.current.useEffect(t, e);
};
se.useId = function () {
  return yt.current.useId();
};
se.useImperativeHandle = function (t, e, n) {
  return yt.current.useImperativeHandle(t, e, n);
};
se.useInsertionEffect = function (t, e) {
  return yt.current.useInsertionEffect(t, e);
};
se.useLayoutEffect = function (t, e) {
  return yt.current.useLayoutEffect(t, e);
};
se.useMemo = function (t, e) {
  return yt.current.useMemo(t, e);
};
se.useReducer = function (t, e, n) {
  return yt.current.useReducer(t, e, n);
};
se.useRef = function (t) {
  return yt.current.useRef(t);
};
se.useState = function (t) {
  return yt.current.useState(t);
};
se.useSyncExternalStore = function (t, e, n) {
  return yt.current.useSyncExternalStore(t, e, n);
};
se.useTransition = function () {
  return yt.current.useTransition();
};
se.version = "18.2.0";
Ty.exports = se;
var b = Ty.exports;
const J = Jn(b),
  zw = Sw({ __proto__: null, default: J }, [b]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hw = b,
  Ww = Symbol.for("react.element"),
  Uw = Symbol.for("react.fragment"),
  Vw = Object.prototype.hasOwnProperty,
  Yw = Hw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Gw = { key: !0, ref: !0, __self: !0, __source: !0 };
function Dy(t, e, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    e.key !== void 0 && (s = "" + e.key),
    e.ref !== void 0 && (o = e.ref);
  for (r in e) Vw.call(e, r) && !Gw.hasOwnProperty(r) && (i[r] = e[r]);
  if (t && t.defaultProps)
    for (r in ((e = t.defaultProps), e)) i[r] === void 0 && (i[r] = e[r]);
  return {
    $$typeof: Ww,
    type: t,
    key: s,
    ref: o,
    props: i,
    _owner: Yw.current,
  };
}
Gc.Fragment = Uw;
Gc.jsx = Dy;
Gc.jsxs = Dy;
ky.exports = Gc;
var f = ky.exports,
  Bd = {},
  My = { exports: {} },
  Ht = {},
  Iy = { exports: {} },
  Fy = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
  function e(P, A) {
    var T = P.length;
    P.push(A);
    e: for (; 0 < T; ) {
      var F = (T - 1) >>> 1,
        M = P[F];
      if (0 < i(M, A)) (P[F] = A), (P[T] = M), (T = F);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var A = P[0],
      T = P.pop();
    if (T !== A) {
      P[0] = T;
      e: for (var F = 0, M = P.length, z = M >>> 1; F < z; ) {
        var W = 2 * (F + 1) - 1,
          V = P[W],
          X = W + 1,
          ge = P[X];
        if (0 > i(V, T))
          X < M && 0 > i(ge, V)
            ? ((P[F] = ge), (P[X] = T), (F = X))
            : ((P[F] = V), (P[W] = T), (F = W));
        else if (X < M && 0 > i(ge, T)) (P[F] = ge), (P[X] = T), (F = X);
        else break e;
      }
    }
    return A;
  }
  function i(P, A) {
    var T = P.sortIndex - A.sortIndex;
    return T !== 0 ? T : P.id - A.id;
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
    m = !1,
    g = !1,
    v = typeof setTimeout == "function" ? setTimeout : null,
    y = typeof clearTimeout == "function" ? clearTimeout : null,
    x = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function _(P) {
    for (var A = n(c); A !== null; ) {
      if (A.callback === null) r(c);
      else if (A.startTime <= P)
        r(c), (A.sortIndex = A.expirationTime), e(l, A);
      else break;
      A = n(c);
    }
  }
  function w(P) {
    if (((g = !1), _(P), !m))
      if (n(l) !== null) (m = !0), Y(E);
      else {
        var A = n(c);
        A !== null && G(w, A.startTime - P);
      }
  }
  function E(P, A) {
    (m = !1), g && ((g = !1), y(k), (k = -1)), (p = !0);
    var T = h;
    try {
      for (
        _(A), d = n(l);
        d !== null && (!(d.expirationTime > A) || (P && !$()));

      ) {
        var F = d.callback;
        if (typeof F == "function") {
          (d.callback = null), (h = d.priorityLevel);
          var M = F(d.expirationTime <= A);
          (A = t.unstable_now()),
            typeof M == "function" ? (d.callback = M) : d === n(l) && r(l),
            _(A);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var z = !0;
      else {
        var W = n(c);
        W !== null && G(w, W.startTime - A), (z = !1);
      }
      return z;
    } finally {
      (d = null), (h = T), (p = !1);
    }
  }
  var S = !1,
    C = null,
    k = -1,
    L = 5,
    j = -1;
  function $() {
    return !(t.unstable_now() - j < L);
  }
  function N() {
    if (C !== null) {
      var P = t.unstable_now();
      j = P;
      var A = !0;
      try {
        A = C(!0, P);
      } finally {
        A ? D() : ((S = !1), (C = null));
      }
    } else S = !1;
  }
  var D;
  if (typeof x == "function")
    D = function () {
      x(N);
    };
  else if (typeof MessageChannel < "u") {
    var H = new MessageChannel(),
      B = H.port2;
    (H.port1.onmessage = N),
      (D = function () {
        B.postMessage(null);
      });
  } else
    D = function () {
      v(N, 0);
    };
  function Y(P) {
    (C = P), S || ((S = !0), D());
  }
  function G(P, A) {
    k = v(function () {
      P(t.unstable_now());
    }, A);
  }
  (t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (t.unstable_continueExecution = function () {
      m || p || ((m = !0), Y(E));
    }),
    (t.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (L = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (t.unstable_next = function (P) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = h;
      }
      var T = h;
      h = A;
      try {
        return P();
      } finally {
        h = T;
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (P, A) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var T = h;
      h = P;
      try {
        return A();
      } finally {
        h = T;
      }
    }),
    (t.unstable_scheduleCallback = function (P, A, T) {
      var F = t.unstable_now();
      switch (
        (typeof T == "object" && T !== null
          ? ((T = T.delay), (T = typeof T == "number" && 0 < T ? F + T : F))
          : (T = F),
        P)
      ) {
        case 1:
          var M = -1;
          break;
        case 2:
          M = 250;
          break;
        case 5:
          M = 1073741823;
          break;
        case 4:
          M = 1e4;
          break;
        default:
          M = 5e3;
      }
      return (
        (M = T + M),
        (P = {
          id: u++,
          callback: A,
          priorityLevel: P,
          startTime: T,
          expirationTime: M,
          sortIndex: -1,
        }),
        T > F
          ? ((P.sortIndex = T),
            e(c, P),
            n(l) === null &&
              P === n(c) &&
              (g ? (y(k), (k = -1)) : (g = !0), G(w, T - F)))
          : ((P.sortIndex = M), e(l, P), m || p || ((m = !0), Y(E))),
        P
      );
    }),
    (t.unstable_shouldYield = $),
    (t.unstable_wrapCallback = function (P) {
      var A = h;
      return function () {
        var T = h;
        h = A;
        try {
          return P.apply(this, arguments);
        } finally {
          h = T;
        }
      };
    });
})(Fy);
Iy.exports = Fy;
var Kw = Iy.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var By = b,
  Ft = Kw;
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
var $y = new Set(),
  Ho = {};
function wi(t, e) {
  fs(t, e), fs(t + "Capture", e);
}
function fs(t, e) {
  for (Ho[t] = e, t = 0; t < e.length; t++) $y.add(e[t]);
}
var Yn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  $d = Object.prototype.hasOwnProperty,
  qw =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  E0 = {},
  S0 = {};
function Xw(t) {
  return $d.call(S0, t)
    ? !0
    : $d.call(E0, t)
    ? !1
    : qw.test(t)
    ? (S0[t] = !0)
    : ((E0[t] = !0), !1);
}
function Qw(t, e, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((t = t.toLowerCase().slice(0, 5)), t !== "data-" && t !== "aria-");
    default:
      return !1;
  }
}
function Jw(t, e, n, r) {
  if (e === null || typeof e > "u" || Qw(t, e, n, r)) return !0;
  if (r) return !1;
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
function vt(t, e, n, r, i, s, o) {
  (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = t),
    (this.type = e),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var qe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (t) {
    qe[t] = new vt(t, 0, !1, t, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (t) {
  var e = t[0];
  qe[e] = new vt(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
  qe[t] = new vt(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (t) {
  qe[t] = new vt(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (t) {
    qe[t] = new vt(t, 3, !1, t.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (t) {
  qe[t] = new vt(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function (t) {
  qe[t] = new vt(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (t) {
  qe[t] = new vt(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function (t) {
  qe[t] = new vt(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var Eh = /[\-:]([a-z])/g;
function Sh(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(Eh, Sh);
    qe[e] = new vt(e, 1, !1, t, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(Eh, Sh);
    qe[e] = new vt(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
  var e = t.replace(Eh, Sh);
  qe[e] = new vt(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (t) {
  qe[t] = new vt(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
qe.xlinkHref = new vt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (t) {
  qe[t] = new vt(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function Ch(t, e, n, r) {
  var i = qe.hasOwnProperty(e) ? qe[e] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < e.length) ||
      (e[0] !== "o" && e[0] !== "O") ||
      (e[1] !== "n" && e[1] !== "N")) &&
    (Jw(e, n, i, r) && (n = null),
    r || i === null
      ? Xw(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n))
      : i.mustUseProperty
      ? (t[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((e = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? t.removeAttribute(e)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
}
var Zn = By.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Fa = Symbol.for("react.element"),
  Hi = Symbol.for("react.portal"),
  Wi = Symbol.for("react.fragment"),
  kh = Symbol.for("react.strict_mode"),
  zd = Symbol.for("react.profiler"),
  zy = Symbol.for("react.provider"),
  Hy = Symbol.for("react.context"),
  Th = Symbol.for("react.forward_ref"),
  Hd = Symbol.for("react.suspense"),
  Wd = Symbol.for("react.suspense_list"),
  Oh = Symbol.for("react.memo"),
  lr = Symbol.for("react.lazy"),
  Wy = Symbol.for("react.offscreen"),
  C0 = Symbol.iterator;
function Vs(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (C0 && t[C0]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var Ce = Object.assign,
  Pu;
function ho(t) {
  if (Pu === void 0)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      Pu = (e && e[1]) || "";
    }
  return (
    `
` +
    Pu +
    t
  );
}
var Lu = !1;
function ju(t, e) {
  if (!t || Lu) return "";
  Lu = !0;
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
          var r = c;
        }
        Reflect.construct(t, [], e);
      } else {
        try {
          e.call();
        } catch (c) {
          r = c;
        }
        t.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      t();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var l =
                  `
` + i[o].replace(" at new ", " at ");
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
    (Lu = !1), (Error.prepareStackTrace = n);
  }
  return (t = t ? t.displayName || t.name : "") ? ho(t) : "";
}
function Zw(t) {
  switch (t.tag) {
    case 5:
      return ho(t.type);
    case 16:
      return ho("Lazy");
    case 13:
      return ho("Suspense");
    case 19:
      return ho("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (t = ju(t.type, !1)), t;
    case 11:
      return (t = ju(t.type.render, !1)), t;
    case 1:
      return (t = ju(t.type, !0)), t;
    default:
      return "";
  }
}
function Ud(t) {
  if (t == null) return null;
  if (typeof t == "function") return t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case Wi:
      return "Fragment";
    case Hi:
      return "Portal";
    case zd:
      return "Profiler";
    case kh:
      return "StrictMode";
    case Hd:
      return "Suspense";
    case Wd:
      return "SuspenseList";
  }
  if (typeof t == "object")
    switch (t.$$typeof) {
      case Hy:
        return (t.displayName || "Context") + ".Consumer";
      case zy:
        return (t._context.displayName || "Context") + ".Provider";
      case Th:
        var e = t.render;
        return (
          (t = t.displayName),
          t ||
            ((t = e.displayName || e.name || ""),
            (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
          t
        );
      case Oh:
        return (
          (e = t.displayName || null), e !== null ? e : Ud(t.type) || "Memo"
        );
      case lr:
        (e = t._payload), (t = t._init);
        try {
          return Ud(t(e));
        } catch {}
    }
  return null;
}
function eE(t) {
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
      return Ud(e);
    case 8:
      return e === kh ? "StrictMode" : "Mode";
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
function Nr(t) {
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
function Uy(t) {
  var e = t.type;
  return (
    (t = t.nodeName) &&
    t.toLowerCase() === "input" &&
    (e === "checkbox" || e === "radio")
  );
}
function tE(t) {
  var e = Uy(t) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
    r = "" + t[e];
  if (
    !t.hasOwnProperty(e) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(t, e, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(t, e, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (t._valueTracker = null), delete t[e];
        },
      }
    );
  }
}
function Ba(t) {
  t._valueTracker || (t._valueTracker = tE(t));
}
function Vy(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(),
    r = "";
  return (
    t && (r = Uy(t) ? (t.checked ? "true" : "false") : t.value),
    (t = r),
    t !== n ? (e.setValue(t), !0) : !1
  );
}
function Kl(t) {
  if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u"))
    return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function Vd(t, e) {
  var n = e.checked;
  return Ce({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? t._wrapperState.initialChecked,
  });
}
function k0(t, e) {
  var n = e.defaultValue == null ? "" : e.defaultValue,
    r = e.checked != null ? e.checked : e.defaultChecked;
  (n = Nr(e.value != null ? e.value : n)),
    (t._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        e.type === "checkbox" || e.type === "radio"
          ? e.checked != null
          : e.value != null,
    });
}
function Yy(t, e) {
  (e = e.checked), e != null && Ch(t, "checked", e, !1);
}
function Yd(t, e) {
  Yy(t, e);
  var n = Nr(e.value),
    r = e.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && t.value === "") || t.value != n) && (t.value = "" + n)
      : t.value !== "" + n && (t.value = "" + n);
  else if (r === "submit" || r === "reset") {
    t.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value")
    ? Gd(t, e.type, n)
    : e.hasOwnProperty("defaultValue") && Gd(t, e.type, Nr(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (t.defaultChecked = !!e.defaultChecked);
}
function T0(t, e, n) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var r = e.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
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
function Gd(t, e, n) {
  (e !== "number" || Kl(t.ownerDocument) !== t) &&
    (n == null
      ? (t.defaultValue = "" + t._wrapperState.initialValue)
      : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var po = Array.isArray;
function rs(t, e, n, r) {
  if (((t = t.options), e)) {
    e = {};
    for (var i = 0; i < n.length; i++) e["$" + n[i]] = !0;
    for (n = 0; n < t.length; n++)
      (i = e.hasOwnProperty("$" + t[n].value)),
        t[n].selected !== i && (t[n].selected = i),
        i && r && (t[n].defaultSelected = !0);
  } else {
    for (n = "" + Nr(n), e = null, i = 0; i < t.length; i++) {
      if (t[i].value === n) {
        (t[i].selected = !0), r && (t[i].defaultSelected = !0);
        return;
      }
      e !== null || t[i].disabled || (e = t[i]);
    }
    e !== null && (e.selected = !0);
  }
}
function Kd(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(I(91));
  return Ce({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: "" + t._wrapperState.initialValue,
  });
}
function O0(t, e) {
  var n = e.value;
  if (n == null) {
    if (((n = e.children), (e = e.defaultValue), n != null)) {
      if (e != null) throw Error(I(92));
      if (po(n)) {
        if (1 < n.length) throw Error(I(93));
        n = n[0];
      }
      e = n;
    }
    e == null && (e = ""), (n = e);
  }
  t._wrapperState = { initialValue: Nr(n) };
}
function Gy(t, e) {
  var n = Nr(e.value),
    r = Nr(e.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    r != null && (t.defaultValue = "" + r);
}
function A0(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function Ky(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function qd(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml"
    ? Ky(e)
    : t === "http://www.w3.org/2000/svg" && e === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : t;
}
var $a,
  qy = (function (t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (e, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return t(e, n, r, i);
          });
        }
      : t;
  })(function (t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
      t.innerHTML = e;
    else {
      for (
        $a = $a || document.createElement("div"),
          $a.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
          e = $a.firstChild;
        t.firstChild;

      )
        t.removeChild(t.firstChild);
      for (; e.firstChild; ) t.appendChild(e.firstChild);
    }
  });
function Wo(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var Eo = {
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
  nE = ["Webkit", "ms", "Moz", "O"];
Object.keys(Eo).forEach(function (t) {
  nE.forEach(function (e) {
    (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (Eo[e] = Eo[t]);
  });
});
function Xy(t, e, n) {
  return e == null || typeof e == "boolean" || e === ""
    ? ""
    : n || typeof e != "number" || e === 0 || (Eo.hasOwnProperty(t) && Eo[t])
    ? ("" + e).trim()
    : e + "px";
}
function Qy(t, e) {
  t = t.style;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Xy(n, e[n], r);
      n === "float" && (n = "cssFloat"), r ? t.setProperty(n, i) : (t[n] = i);
    }
}
var rE = Ce(
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
function Xd(t, e) {
  if (e) {
    if (rE[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
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
function Qd(t, e) {
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
var Jd = null;
function Ah(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  );
}
var Zd = null,
  is = null,
  ss = null;
function N0(t) {
  if ((t = wa(t))) {
    if (typeof Zd != "function") throw Error(I(280));
    var e = t.stateNode;
    e && ((e = Jc(e)), Zd(t.stateNode, t.type, e));
  }
}
function Jy(t) {
  is ? (ss ? ss.push(t) : (ss = [t])) : (is = t);
}
function Zy() {
  if (is) {
    var t = is,
      e = ss;
    if (((ss = is = null), N0(t), e)) for (t = 0; t < e.length; t++) N0(e[t]);
  }
}
function ev(t, e) {
  return t(e);
}
function tv() {}
var Ru = !1;
function nv(t, e, n) {
  if (Ru) return t(e, n);
  Ru = !0;
  try {
    return ev(t, e, n);
  } finally {
    (Ru = !1), (is !== null || ss !== null) && (tv(), Zy());
  }
}
function Uo(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var r = Jc(n);
  if (r === null) return null;
  n = r[e];
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
      (r = !r.disabled) ||
        ((t = t.type),
        (r = !(
          t === "button" ||
          t === "input" ||
          t === "select" ||
          t === "textarea"
        ))),
        (t = !r);
      break e;
    default:
      t = !1;
  }
  if (t) return null;
  if (n && typeof n != "function") throw Error(I(231, e, typeof n));
  return n;
}
var ef = !1;
if (Yn)
  try {
    var Ys = {};
    Object.defineProperty(Ys, "passive", {
      get: function () {
        ef = !0;
      },
    }),
      window.addEventListener("test", Ys, Ys),
      window.removeEventListener("test", Ys, Ys);
  } catch {
    ef = !1;
  }
function iE(t, e, n, r, i, s, o, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var So = !1,
  ql = null,
  Xl = !1,
  tf = null,
  sE = {
    onError: function (t) {
      (So = !0), (ql = t);
    },
  };
function oE(t, e, n, r, i, s, o, a, l) {
  (So = !1), (ql = null), iE.apply(sE, arguments);
}
function aE(t, e, n, r, i, s, o, a, l) {
  if ((oE.apply(this, arguments), So)) {
    if (So) {
      var c = ql;
      (So = !1), (ql = null);
    } else throw Error(I(198));
    Xl || ((Xl = !0), (tf = c));
  }
}
function Ei(t) {
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
function rv(t) {
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
function P0(t) {
  if (Ei(t) !== t) throw Error(I(188));
}
function lE(t) {
  var e = t.alternate;
  if (!e) {
    if (((e = Ei(t)), e === null)) throw Error(I(188));
    return e !== t ? null : t;
  }
  for (var n = t, r = e; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return P0(i), t;
        if (s === r) return P0(i), e;
        s = s.sibling;
      }
      throw Error(I(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (a === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (a === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(I(189));
      }
    }
    if (n.alternate !== r) throw Error(I(190));
  }
  if (n.tag !== 3) throw Error(I(188));
  return n.stateNode.current === n ? t : e;
}
function iv(t) {
  return (t = lE(t)), t !== null ? sv(t) : null;
}
function sv(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = sv(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var ov = Ft.unstable_scheduleCallback,
  L0 = Ft.unstable_cancelCallback,
  cE = Ft.unstable_shouldYield,
  uE = Ft.unstable_requestPaint,
  Ne = Ft.unstable_now,
  dE = Ft.unstable_getCurrentPriorityLevel,
  Nh = Ft.unstable_ImmediatePriority,
  av = Ft.unstable_UserBlockingPriority,
  Ql = Ft.unstable_NormalPriority,
  fE = Ft.unstable_LowPriority,
  lv = Ft.unstable_IdlePriority,
  Kc = null,
  Sn = null;
function hE(t) {
  if (Sn && typeof Sn.onCommitFiberRoot == "function")
    try {
      Sn.onCommitFiberRoot(Kc, t, void 0, (t.current.flags & 128) === 128);
    } catch {}
}
var fn = Math.clz32 ? Math.clz32 : gE,
  pE = Math.log,
  mE = Math.LN2;
function gE(t) {
  return (t >>>= 0), t === 0 ? 32 : (31 - ((pE(t) / mE) | 0)) | 0;
}
var za = 64,
  Ha = 4194304;
function mo(t) {
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
function Jl(t, e) {
  var n = t.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = t.suspendedLanes,
    s = t.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = mo(a)) : ((s &= o), s !== 0 && (r = mo(s)));
  } else (o = n & ~i), o !== 0 ? (r = mo(o)) : s !== 0 && (r = mo(s));
  if (r === 0) return 0;
  if (
    e !== 0 &&
    e !== r &&
    !(e & i) &&
    ((i = r & -r), (s = e & -e), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return e;
  if ((r & 4 && (r |= n & 16), (e = t.entangledLanes), e !== 0))
    for (t = t.entanglements, e &= r; 0 < e; )
      (n = 31 - fn(e)), (i = 1 << n), (r |= t[n]), (e &= ~i);
  return r;
}
function yE(t, e) {
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
function vE(t, e) {
  for (
    var n = t.suspendedLanes,
      r = t.pingedLanes,
      i = t.expirationTimes,
      s = t.pendingLanes;
    0 < s;

  ) {
    var o = 31 - fn(s),
      a = 1 << o,
      l = i[o];
    l === -1
      ? (!(a & n) || a & r) && (i[o] = yE(a, e))
      : l <= e && (t.expiredLanes |= a),
      (s &= ~a);
  }
}
function nf(t) {
  return (
    (t = t.pendingLanes & -1073741825),
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
  );
}
function cv() {
  var t = za;
  return (za <<= 1), !(za & 4194240) && (za = 64), t;
}
function Du(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function _a(t, e, n) {
  (t.pendingLanes |= e),
    e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (e = 31 - fn(e)),
    (t[e] = n);
}
function xE(t, e) {
  var n = t.pendingLanes & ~e;
  (t.pendingLanes = e),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.expiredLanes &= e),
    (t.mutableReadLanes &= e),
    (t.entangledLanes &= e),
    (e = t.entanglements);
  var r = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
    var i = 31 - fn(n),
      s = 1 << i;
    (e[i] = 0), (r[i] = -1), (t[i] = -1), (n &= ~s);
  }
}
function Ph(t, e) {
  var n = (t.entangledLanes |= e);
  for (t = t.entanglements; n; ) {
    var r = 31 - fn(n),
      i = 1 << r;
    (i & e) | (t[r] & e) && (t[r] |= e), (n &= ~i);
  }
}
var pe = 0;
function uv(t) {
  return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1;
}
var dv,
  Lh,
  fv,
  hv,
  pv,
  rf = !1,
  Wa = [],
  _r = null,
  br = null,
  wr = null,
  Vo = new Map(),
  Yo = new Map(),
  fr = [],
  _E =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function j0(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      _r = null;
      break;
    case "dragenter":
    case "dragleave":
      br = null;
      break;
    case "mouseover":
    case "mouseout":
      wr = null;
      break;
    case "pointerover":
    case "pointerout":
      Vo.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Yo.delete(e.pointerId);
  }
}
function Gs(t, e, n, r, i, s) {
  return t === null || t.nativeEvent !== s
    ? ((t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      e !== null && ((e = wa(e)), e !== null && Lh(e)),
      t)
    : ((t.eventSystemFlags |= r),
      (e = t.targetContainers),
      i !== null && e.indexOf(i) === -1 && e.push(i),
      t);
}
function bE(t, e, n, r, i) {
  switch (e) {
    case "focusin":
      return (_r = Gs(_r, t, e, n, r, i)), !0;
    case "dragenter":
      return (br = Gs(br, t, e, n, r, i)), !0;
    case "mouseover":
      return (wr = Gs(wr, t, e, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return Vo.set(s, Gs(Vo.get(s) || null, t, e, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), Yo.set(s, Gs(Yo.get(s) || null, t, e, n, r, i)), !0
      );
  }
  return !1;
}
function mv(t) {
  var e = Zr(t.target);
  if (e !== null) {
    var n = Ei(e);
    if (n !== null) {
      if (((e = n.tag), e === 13)) {
        if (((e = rv(n)), e !== null)) {
          (t.blockedOn = e),
            pv(t.priority, function () {
              fv(n);
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
function Ol(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = sf(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Jd = r), n.target.dispatchEvent(r), (Jd = null);
    } else return (e = wa(n)), e !== null && Lh(e), (t.blockedOn = n), !1;
    e.shift();
  }
  return !0;
}
function R0(t, e, n) {
  Ol(t) && n.delete(e);
}
function wE() {
  (rf = !1),
    _r !== null && Ol(_r) && (_r = null),
    br !== null && Ol(br) && (br = null),
    wr !== null && Ol(wr) && (wr = null),
    Vo.forEach(R0),
    Yo.forEach(R0);
}
function Ks(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null),
    rf ||
      ((rf = !0),
      Ft.unstable_scheduleCallback(Ft.unstable_NormalPriority, wE)));
}
function Go(t) {
  function e(i) {
    return Ks(i, t);
  }
  if (0 < Wa.length) {
    Ks(Wa[0], t);
    for (var n = 1; n < Wa.length; n++) {
      var r = Wa[n];
      r.blockedOn === t && (r.blockedOn = null);
    }
  }
  for (
    _r !== null && Ks(_r, t),
      br !== null && Ks(br, t),
      wr !== null && Ks(wr, t),
      Vo.forEach(e),
      Yo.forEach(e),
      n = 0;
    n < fr.length;
    n++
  )
    (r = fr[n]), r.blockedOn === t && (r.blockedOn = null);
  for (; 0 < fr.length && ((n = fr[0]), n.blockedOn === null); )
    mv(n), n.blockedOn === null && fr.shift();
}
var os = Zn.ReactCurrentBatchConfig,
  Zl = !0;
function EE(t, e, n, r) {
  var i = pe,
    s = os.transition;
  os.transition = null;
  try {
    (pe = 1), jh(t, e, n, r);
  } finally {
    (pe = i), (os.transition = s);
  }
}
function SE(t, e, n, r) {
  var i = pe,
    s = os.transition;
  os.transition = null;
  try {
    (pe = 4), jh(t, e, n, r);
  } finally {
    (pe = i), (os.transition = s);
  }
}
function jh(t, e, n, r) {
  if (Zl) {
    var i = sf(t, e, n, r);
    if (i === null) Vu(t, e, r, ec, n), j0(t, r);
    else if (bE(i, t, e, n, r)) r.stopPropagation();
    else if ((j0(t, r), e & 4 && -1 < _E.indexOf(t))) {
      for (; i !== null; ) {
        var s = wa(i);
        if (
          (s !== null && dv(s),
          (s = sf(t, e, n, r)),
          s === null && Vu(t, e, r, ec, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else Vu(t, e, r, null, n);
  }
}
var ec = null;
function sf(t, e, n, r) {
  if (((ec = null), (t = Ah(r)), (t = Zr(t)), t !== null))
    if (((e = Ei(t)), e === null)) t = null;
    else if (((n = e.tag), n === 13)) {
      if (((t = rv(e)), t !== null)) return t;
      t = null;
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else e !== t && (t = null);
  return (ec = t), null;
}
function gv(t) {
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
      switch (dE()) {
        case Nh:
          return 1;
        case av:
          return 4;
        case Ql:
        case fE:
          return 16;
        case lv:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var mr = null,
  Rh = null,
  Al = null;
function yv() {
  if (Al) return Al;
  var t,
    e = Rh,
    n = e.length,
    r,
    i = "value" in mr ? mr.value : mr.textContent,
    s = i.length;
  for (t = 0; t < n && e[t] === i[t]; t++);
  var o = n - t;
  for (r = 1; r <= o && e[n - r] === i[s - r]; r++);
  return (Al = i.slice(t, 1 < r ? 1 - r : void 0));
}
function Nl(t) {
  var e = t.keyCode;
  return (
    "charCode" in t
      ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
      : (t = e),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  );
}
function Ua() {
  return !0;
}
function D0() {
  return !1;
}
function Wt(t) {
  function e(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in t)
      t.hasOwnProperty(a) && ((n = t[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Ua
        : D0),
      (this.isPropagationStopped = D0),
      this
    );
  }
  return (
    Ce(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ua));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ua));
      },
      persist: function () {},
      isPersistent: Ua,
    }),
    e
  );
}
var js = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Dh = Wt(js),
  ba = Ce({}, js, { view: 0, detail: 0 }),
  CE = Wt(ba),
  Mu,
  Iu,
  qs,
  qc = Ce({}, ba, {
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
    getModifierState: Mh,
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
        : (t !== qs &&
            (qs && t.type === "mousemove"
              ? ((Mu = t.screenX - qs.screenX), (Iu = t.screenY - qs.screenY))
              : (Iu = Mu = 0),
            (qs = t)),
          Mu);
    },
    movementY: function (t) {
      return "movementY" in t ? t.movementY : Iu;
    },
  }),
  M0 = Wt(qc),
  kE = Ce({}, qc, { dataTransfer: 0 }),
  TE = Wt(kE),
  OE = Ce({}, ba, { relatedTarget: 0 }),
  Fu = Wt(OE),
  AE = Ce({}, js, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  NE = Wt(AE),
  PE = Ce({}, js, {
    clipboardData: function (t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    },
  }),
  LE = Wt(PE),
  jE = Ce({}, js, { data: 0 }),
  I0 = Wt(jE),
  RE = {
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
  DE = {
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
  ME = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function IE(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = ME[t]) ? !!e[t] : !1;
}
function Mh() {
  return IE;
}
var FE = Ce({}, ba, {
    key: function (t) {
      if (t.key) {
        var e = RE[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress"
        ? ((t = Nl(t)), t === 13 ? "Enter" : String.fromCharCode(t))
        : t.type === "keydown" || t.type === "keyup"
        ? DE[t.keyCode] || "Unidentified"
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
    getModifierState: Mh,
    charCode: function (t) {
      return t.type === "keypress" ? Nl(t) : 0;
    },
    keyCode: function (t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function (t) {
      return t.type === "keypress"
        ? Nl(t)
        : t.type === "keydown" || t.type === "keyup"
        ? t.keyCode
        : 0;
    },
  }),
  BE = Wt(FE),
  $E = Ce({}, qc, {
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
  F0 = Wt($E),
  zE = Ce({}, ba, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Mh,
  }),
  HE = Wt(zE),
  WE = Ce({}, js, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  UE = Wt(WE),
  VE = Ce({}, qc, {
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
  YE = Wt(VE),
  GE = [9, 13, 27, 32],
  Ih = Yn && "CompositionEvent" in window,
  Co = null;
Yn && "documentMode" in document && (Co = document.documentMode);
var KE = Yn && "TextEvent" in window && !Co,
  vv = Yn && (!Ih || (Co && 8 < Co && 11 >= Co)),
  B0 = " ",
  $0 = !1;
function xv(t, e) {
  switch (t) {
    case "keyup":
      return GE.indexOf(e.keyCode) !== -1;
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
function _v(t) {
  return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
}
var Ui = !1;
function qE(t, e) {
  switch (t) {
    case "compositionend":
      return _v(e);
    case "keypress":
      return e.which !== 32 ? null : (($0 = !0), B0);
    case "textInput":
      return (t = e.data), t === B0 && $0 ? null : t;
    default:
      return null;
  }
}
function XE(t, e) {
  if (Ui)
    return t === "compositionend" || (!Ih && xv(t, e))
      ? ((t = yv()), (Al = Rh = mr = null), (Ui = !1), t)
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
      return vv && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var QE = {
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
function z0(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!QE[t.type] : e === "textarea";
}
function bv(t, e, n, r) {
  Jy(r),
    (e = tc(e, "onChange")),
    0 < e.length &&
      ((n = new Dh("onChange", "change", null, n, r)),
      t.push({ event: n, listeners: e }));
}
var ko = null,
  Ko = null;
function JE(t) {
  Lv(t, 0);
}
function Xc(t) {
  var e = Gi(t);
  if (Vy(e)) return t;
}
function ZE(t, e) {
  if (t === "change") return e;
}
var wv = !1;
if (Yn) {
  var Bu;
  if (Yn) {
    var $u = "oninput" in document;
    if (!$u) {
      var H0 = document.createElement("div");
      H0.setAttribute("oninput", "return;"),
        ($u = typeof H0.oninput == "function");
    }
    Bu = $u;
  } else Bu = !1;
  wv = Bu && (!document.documentMode || 9 < document.documentMode);
}
function W0() {
  ko && (ko.detachEvent("onpropertychange", Ev), (Ko = ko = null));
}
function Ev(t) {
  if (t.propertyName === "value" && Xc(Ko)) {
    var e = [];
    bv(e, Ko, t, Ah(t)), nv(JE, e);
  }
}
function e3(t, e, n) {
  t === "focusin"
    ? (W0(), (ko = e), (Ko = n), ko.attachEvent("onpropertychange", Ev))
    : t === "focusout" && W0();
}
function t3(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown")
    return Xc(Ko);
}
function n3(t, e) {
  if (t === "click") return Xc(e);
}
function r3(t, e) {
  if (t === "input" || t === "change") return Xc(e);
}
function i3(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var mn = typeof Object.is == "function" ? Object.is : i3;
function qo(t, e) {
  if (mn(t, e)) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  var n = Object.keys(t),
    r = Object.keys(e);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!$d.call(e, i) || !mn(t[i], e[i])) return !1;
  }
  return !0;
}
function U0(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function V0(t, e) {
  var n = U0(t);
  t = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = t + n.textContent.length), t <= e && r >= e))
        return { node: n, offset: e - t };
      t = r;
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
    n = U0(n);
  }
}
function Sv(t, e) {
  return t && e
    ? t === e
      ? !0
      : t && t.nodeType === 3
      ? !1
      : e && e.nodeType === 3
      ? Sv(t, e.parentNode)
      : "contains" in t
      ? t.contains(e)
      : t.compareDocumentPosition
      ? !!(t.compareDocumentPosition(e) & 16)
      : !1
    : !1;
}
function Cv() {
  for (var t = window, e = Kl(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = Kl(t.document);
  }
  return e;
}
function Fh(t) {
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
function s3(t) {
  var e = Cv(),
    n = t.focusedElem,
    r = t.selectionRange;
  if (
    e !== n &&
    n &&
    n.ownerDocument &&
    Sv(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Fh(n)) {
      if (
        ((e = r.start),
        (t = r.end),
        t === void 0 && (t = e),
        "selectionStart" in n)
      )
        (n.selectionStart = e), (n.selectionEnd = Math.min(t, n.value.length));
      else if (
        ((t = ((e = n.ownerDocument || document) && e.defaultView) || window),
        t.getSelection)
      ) {
        t = t.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !t.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = V0(n, s));
        var o = V0(n, r);
        i &&
          o &&
          (t.rangeCount !== 1 ||
            t.anchorNode !== i.node ||
            t.anchorOffset !== i.offset ||
            t.focusNode !== o.node ||
            t.focusOffset !== o.offset) &&
          ((e = e.createRange()),
          e.setStart(i.node, i.offset),
          t.removeAllRanges(),
          s > r
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
var o3 = Yn && "documentMode" in document && 11 >= document.documentMode,
  Vi = null,
  of = null,
  To = null,
  af = !1;
function Y0(t, e, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  af ||
    Vi == null ||
    Vi !== Kl(r) ||
    ((r = Vi),
    "selectionStart" in r && Fh(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (To && qo(To, r)) ||
      ((To = r),
      (r = tc(of, "onSelect")),
      0 < r.length &&
        ((e = new Dh("onSelect", "select", null, e, n)),
        t.push({ event: e, listeners: r }),
        (e.target = Vi))));
}
function Va(t, e) {
  var n = {};
  return (
    (n[t.toLowerCase()] = e.toLowerCase()),
    (n["Webkit" + t] = "webkit" + e),
    (n["Moz" + t] = "moz" + e),
    n
  );
}
var Yi = {
    animationend: Va("Animation", "AnimationEnd"),
    animationiteration: Va("Animation", "AnimationIteration"),
    animationstart: Va("Animation", "AnimationStart"),
    transitionend: Va("Transition", "TransitionEnd"),
  },
  zu = {},
  kv = {};
Yn &&
  ((kv = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Yi.animationend.animation,
    delete Yi.animationiteration.animation,
    delete Yi.animationstart.animation),
  "TransitionEvent" in window || delete Yi.transitionend.transition);
function Qc(t) {
  if (zu[t]) return zu[t];
  if (!Yi[t]) return t;
  var e = Yi[t],
    n;
  for (n in e) if (e.hasOwnProperty(n) && n in kv) return (zu[t] = e[n]);
  return t;
}
var Tv = Qc("animationend"),
  Ov = Qc("animationiteration"),
  Av = Qc("animationstart"),
  Nv = Qc("transitionend"),
  Pv = new Map(),
  G0 =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Ir(t, e) {
  Pv.set(t, e), wi(e, [t]);
}
for (var Hu = 0; Hu < G0.length; Hu++) {
  var Wu = G0[Hu],
    a3 = Wu.toLowerCase(),
    l3 = Wu[0].toUpperCase() + Wu.slice(1);
  Ir(a3, "on" + l3);
}
Ir(Tv, "onAnimationEnd");
Ir(Ov, "onAnimationIteration");
Ir(Av, "onAnimationStart");
Ir("dblclick", "onDoubleClick");
Ir("focusin", "onFocus");
Ir("focusout", "onBlur");
Ir(Nv, "onTransitionEnd");
fs("onMouseEnter", ["mouseout", "mouseover"]);
fs("onMouseLeave", ["mouseout", "mouseover"]);
fs("onPointerEnter", ["pointerout", "pointerover"]);
fs("onPointerLeave", ["pointerout", "pointerover"]);
wi(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
wi(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
wi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
wi(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
wi(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
wi(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var go =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  c3 = new Set("cancel close invalid load scroll toggle".split(" ").concat(go));
function K0(t, e, n) {
  var r = t.type || "unknown-event";
  (t.currentTarget = n), aE(r, e, void 0, t), (t.currentTarget = null);
}
function Lv(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var r = t[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (e)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), l !== s && i.isPropagationStopped())) break e;
          K0(i, a, c), (s = l);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            l !== s && i.isPropagationStopped())
          )
            break e;
          K0(i, a, c), (s = l);
        }
    }
  }
  if (Xl) throw ((t = tf), (Xl = !1), (tf = null), t);
}
function ye(t, e) {
  var n = e[ff];
  n === void 0 && (n = e[ff] = new Set());
  var r = t + "__bubble";
  n.has(r) || (jv(e, t, 2, !1), n.add(r));
}
function Uu(t, e, n) {
  var r = 0;
  e && (r |= 4), jv(n, t, r, e);
}
var Ya = "_reactListening" + Math.random().toString(36).slice(2);
function Xo(t) {
  if (!t[Ya]) {
    (t[Ya] = !0),
      $y.forEach(function (n) {
        n !== "selectionchange" && (c3.has(n) || Uu(n, !1, t), Uu(n, !0, t));
      });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[Ya] || ((e[Ya] = !0), Uu("selectionchange", !1, e));
  }
}
function jv(t, e, n, r) {
  switch (gv(e)) {
    case 1:
      var i = EE;
      break;
    case 4:
      i = SE;
      break;
    default:
      i = jh;
  }
  (n = i.bind(null, e, n, t)),
    (i = void 0),
    !ef ||
      (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? t.addEventListener(e, n, { capture: !0, passive: i })
        : t.addEventListener(e, n, !0)
      : i !== void 0
      ? t.addEventListener(e, n, { passive: i })
      : t.addEventListener(e, n, !1);
}
function Vu(t, e, n, r, i) {
  var s = r;
  if (!(e & 1) && !(e & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = Zr(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  nv(function () {
    var c = s,
      u = Ah(n),
      d = [];
    e: {
      var h = Pv.get(t);
      if (h !== void 0) {
        var p = Dh,
          m = t;
        switch (t) {
          case "keypress":
            if (Nl(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = BE;
            break;
          case "focusin":
            (m = "focus"), (p = Fu);
            break;
          case "focusout":
            (m = "blur"), (p = Fu);
            break;
          case "beforeblur":
          case "afterblur":
            p = Fu;
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
            p = M0;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = TE;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = HE;
            break;
          case Tv:
          case Ov:
          case Av:
            p = NE;
            break;
          case Nv:
            p = UE;
            break;
          case "scroll":
            p = CE;
            break;
          case "wheel":
            p = YE;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = LE;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = F0;
        }
        var g = (e & 4) !== 0,
          v = !g && t === "scroll",
          y = g ? (h !== null ? h + "Capture" : null) : h;
        g = [];
        for (var x = c, _; x !== null; ) {
          _ = x;
          var w = _.stateNode;
          if (
            (_.tag === 5 &&
              w !== null &&
              ((_ = w),
              y !== null && ((w = Uo(x, y)), w != null && g.push(Qo(x, w, _)))),
            v)
          )
            break;
          x = x.return;
        }
        0 < g.length &&
          ((h = new p(h, m, null, n, u)), d.push({ event: h, listeners: g }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (
          ((h = t === "mouseover" || t === "pointerover"),
          (p = t === "mouseout" || t === "pointerout"),
          h &&
            n !== Jd &&
            (m = n.relatedTarget || n.fromElement) &&
            (Zr(m) || m[Gn]))
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
            ? ((m = n.relatedTarget || n.toElement),
              (p = c),
              (m = m ? Zr(m) : null),
              m !== null &&
                ((v = Ei(m)), m !== v || (m.tag !== 5 && m.tag !== 6)) &&
                (m = null))
            : ((p = null), (m = c)),
          p !== m)
        ) {
          if (
            ((g = M0),
            (w = "onMouseLeave"),
            (y = "onMouseEnter"),
            (x = "mouse"),
            (t === "pointerout" || t === "pointerover") &&
              ((g = F0),
              (w = "onPointerLeave"),
              (y = "onPointerEnter"),
              (x = "pointer")),
            (v = p == null ? h : Gi(p)),
            (_ = m == null ? h : Gi(m)),
            (h = new g(w, x + "leave", p, n, u)),
            (h.target = v),
            (h.relatedTarget = _),
            (w = null),
            Zr(u) === c &&
              ((g = new g(y, x + "enter", m, n, u)),
              (g.target = _),
              (g.relatedTarget = v),
              (w = g)),
            (v = w),
            p && m)
          )
            t: {
              for (g = p, y = m, x = 0, _ = g; _; _ = Li(_)) x++;
              for (_ = 0, w = y; w; w = Li(w)) _++;
              for (; 0 < x - _; ) (g = Li(g)), x--;
              for (; 0 < _ - x; ) (y = Li(y)), _--;
              for (; x--; ) {
                if (g === y || (y !== null && g === y.alternate)) break t;
                (g = Li(g)), (y = Li(y));
              }
              g = null;
            }
          else g = null;
          p !== null && q0(d, h, p, g, !1),
            m !== null && v !== null && q0(d, v, m, g, !0);
        }
      }
      e: {
        if (
          ((h = c ? Gi(c) : window),
          (p = h.nodeName && h.nodeName.toLowerCase()),
          p === "select" || (p === "input" && h.type === "file"))
        )
          var E = ZE;
        else if (z0(h))
          if (wv) E = r3;
          else {
            E = t3;
            var S = e3;
          }
        else
          (p = h.nodeName) &&
            p.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (E = n3);
        if (E && (E = E(t, c))) {
          bv(d, E, n, u);
          break e;
        }
        S && S(t, h, c),
          t === "focusout" &&
            (S = h._wrapperState) &&
            S.controlled &&
            h.type === "number" &&
            Gd(h, "number", h.value);
      }
      switch (((S = c ? Gi(c) : window), t)) {
        case "focusin":
          (z0(S) || S.contentEditable === "true") &&
            ((Vi = S), (of = c), (To = null));
          break;
        case "focusout":
          To = of = Vi = null;
          break;
        case "mousedown":
          af = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (af = !1), Y0(d, n, u);
          break;
        case "selectionchange":
          if (o3) break;
        case "keydown":
        case "keyup":
          Y0(d, n, u);
      }
      var C;
      if (Ih)
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
        Ui
          ? xv(t, n) && (k = "onCompositionEnd")
          : t === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      k &&
        (vv &&
          n.locale !== "ko" &&
          (Ui || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && Ui && (C = yv())
            : ((mr = u),
              (Rh = "value" in mr ? mr.value : mr.textContent),
              (Ui = !0))),
        (S = tc(c, k)),
        0 < S.length &&
          ((k = new I0(k, t, null, n, u)),
          d.push({ event: k, listeners: S }),
          C ? (k.data = C) : ((C = _v(n)), C !== null && (k.data = C)))),
        (C = KE ? qE(t, n) : XE(t, n)) &&
          ((c = tc(c, "onBeforeInput")),
          0 < c.length &&
            ((u = new I0("onBeforeInput", "beforeinput", null, n, u)),
            d.push({ event: u, listeners: c }),
            (u.data = C)));
    }
    Lv(d, e);
  });
}
function Qo(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function tc(t, e) {
  for (var n = e + "Capture", r = []; t !== null; ) {
    var i = t,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Uo(t, n)),
      s != null && r.unshift(Qo(t, s, i)),
      (s = Uo(t, e)),
      s != null && r.push(Qo(t, s, i))),
      (t = t.return);
  }
  return r;
}
function Li(t) {
  if (t === null) return null;
  do t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function q0(t, e, n, r, i) {
  for (var s = e._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      c = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      i
        ? ((l = Uo(n, s)), l != null && o.unshift(Qo(n, l, a)))
        : i || ((l = Uo(n, s)), l != null && o.push(Qo(n, l, a)))),
      (n = n.return);
  }
  o.length !== 0 && t.push({ event: e, listeners: o });
}
var u3 = /\r\n?/g,
  d3 = /\u0000|\uFFFD/g;
function X0(t) {
  return (typeof t == "string" ? t : "" + t)
    .replace(
      u3,
      `
`,
    )
    .replace(d3, "");
}
function Ga(t, e, n) {
  if (((e = X0(e)), X0(t) !== e && n)) throw Error(I(425));
}
function nc() {}
var lf = null,
  cf = null;
function uf(t, e) {
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
var df = typeof setTimeout == "function" ? setTimeout : void 0,
  f3 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Q0 = typeof Promise == "function" ? Promise : void 0,
  h3 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Q0 < "u"
      ? function (t) {
          return Q0.resolve(null).then(t).catch(p3);
        }
      : df;
function p3(t) {
  setTimeout(function () {
    throw t;
  });
}
function Yu(t, e) {
  var n = e,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((t.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          t.removeChild(i), Go(e);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Go(e);
}
function Er(t) {
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
function J0(t) {
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
var Rs = Math.random().toString(36).slice(2),
  En = "__reactFiber$" + Rs,
  Jo = "__reactProps$" + Rs,
  Gn = "__reactContainer$" + Rs,
  ff = "__reactEvents$" + Rs,
  m3 = "__reactListeners$" + Rs,
  g3 = "__reactHandles$" + Rs;
function Zr(t) {
  var e = t[En];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if ((e = n[Gn] || n[En])) {
      if (
        ((n = e.alternate),
        e.child !== null || (n !== null && n.child !== null))
      )
        for (t = J0(t); t !== null; ) {
          if ((n = t[En])) return n;
          t = J0(t);
        }
      return e;
    }
    (t = n), (n = t.parentNode);
  }
  return null;
}
function wa(t) {
  return (
    (t = t[En] || t[Gn]),
    !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
  );
}
function Gi(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(I(33));
}
function Jc(t) {
  return t[Jo] || null;
}
var hf = [],
  Ki = -1;
function Fr(t) {
  return { current: t };
}
function xe(t) {
  0 > Ki || ((t.current = hf[Ki]), (hf[Ki] = null), Ki--);
}
function me(t, e) {
  Ki++, (hf[Ki] = t.current), (t.current = e);
}
var Pr = {},
  at = Fr(Pr),
  Ct = Fr(!1),
  hi = Pr;
function hs(t, e) {
  var n = t.type.contextTypes;
  if (!n) return Pr;
  var r = t.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = e[s];
  return (
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = e),
      (t.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function kt(t) {
  return (t = t.childContextTypes), t != null;
}
function rc() {
  xe(Ct), xe(at);
}
function Z0(t, e, n) {
  if (at.current !== Pr) throw Error(I(168));
  me(at, e), me(Ct, n);
}
function Rv(t, e, n) {
  var r = t.stateNode;
  if (((e = e.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in e)) throw Error(I(108, eE(t) || "Unknown", i));
  return Ce({}, n, r);
}
function ic(t) {
  return (
    (t =
      ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || Pr),
    (hi = at.current),
    me(at, t),
    me(Ct, Ct.current),
    !0
  );
}
function em(t, e, n) {
  var r = t.stateNode;
  if (!r) throw Error(I(169));
  n
    ? ((t = Rv(t, e, hi)),
      (r.__reactInternalMemoizedMergedChildContext = t),
      xe(Ct),
      xe(at),
      me(at, t))
    : xe(Ct),
    me(Ct, n);
}
var In = null,
  Zc = !1,
  Gu = !1;
function Dv(t) {
  In === null ? (In = [t]) : In.push(t);
}
function y3(t) {
  (Zc = !0), Dv(t);
}
function Br() {
  if (!Gu && In !== null) {
    Gu = !0;
    var t = 0,
      e = pe;
    try {
      var n = In;
      for (pe = 1; t < n.length; t++) {
        var r = n[t];
        do r = r(!0);
        while (r !== null);
      }
      (In = null), (Zc = !1);
    } catch (i) {
      throw (In !== null && (In = In.slice(t + 1)), ov(Nh, Br), i);
    } finally {
      (pe = e), (Gu = !1);
    }
  }
  return null;
}
var qi = [],
  Xi = 0,
  sc = null,
  oc = 0,
  Vt = [],
  Yt = 0,
  pi = null,
  $n = 1,
  zn = "";
function Kr(t, e) {
  (qi[Xi++] = oc), (qi[Xi++] = sc), (sc = t), (oc = e);
}
function Mv(t, e, n) {
  (Vt[Yt++] = $n), (Vt[Yt++] = zn), (Vt[Yt++] = pi), (pi = t);
  var r = $n;
  t = zn;
  var i = 32 - fn(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - fn(e) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      ($n = (1 << (32 - fn(e) + i)) | (n << i) | r),
      (zn = s + t);
  } else ($n = (1 << s) | (n << i) | r), (zn = t);
}
function Bh(t) {
  t.return !== null && (Kr(t, 1), Mv(t, 1, 0));
}
function $h(t) {
  for (; t === sc; )
    (sc = qi[--Xi]), (qi[Xi] = null), (oc = qi[--Xi]), (qi[Xi] = null);
  for (; t === pi; )
    (pi = Vt[--Yt]),
      (Vt[Yt] = null),
      (zn = Vt[--Yt]),
      (Vt[Yt] = null),
      ($n = Vt[--Yt]),
      (Vt[Yt] = null);
}
var Mt = null,
  Dt = null,
  be = !1,
  ln = null;
function Iv(t, e) {
  var n = Gt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = e),
    (n.return = t),
    (e = t.deletions),
    e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n);
}
function tm(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return (
        (e =
          e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((t.stateNode = e), (Mt = t), (Dt = Er(e.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (e = t.pendingProps === "" || e.nodeType !== 3 ? null : e),
        e !== null ? ((t.stateNode = e), (Mt = t), (Dt = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((n = pi !== null ? { id: $n, overflow: zn } : null),
            (t.memoizedState = {
              dehydrated: e,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Gt(18, null, null, 0)),
            (n.stateNode = e),
            (n.return = t),
            (t.child = n),
            (Mt = t),
            (Dt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function pf(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function mf(t) {
  if (be) {
    var e = Dt;
    if (e) {
      var n = e;
      if (!tm(t, e)) {
        if (pf(t)) throw Error(I(418));
        e = Er(n.nextSibling);
        var r = Mt;
        e && tm(t, e)
          ? Iv(r, n)
          : ((t.flags = (t.flags & -4097) | 2), (be = !1), (Mt = t));
      }
    } else {
      if (pf(t)) throw Error(I(418));
      (t.flags = (t.flags & -4097) | 2), (be = !1), (Mt = t);
    }
  }
}
function nm(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
    t = t.return;
  Mt = t;
}
function Ka(t) {
  if (t !== Mt) return !1;
  if (!be) return nm(t), (be = !0), !1;
  var e;
  if (
    ((e = t.tag !== 3) &&
      !(e = t.tag !== 5) &&
      ((e = t.type),
      (e = e !== "head" && e !== "body" && !uf(t.type, t.memoizedProps))),
    e && (e = Dt))
  ) {
    if (pf(t)) throw (Fv(), Error(I(418)));
    for (; e; ) Iv(t, e), (e = Er(e.nextSibling));
  }
  if ((nm(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
      throw Error(I(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$") {
            if (e === 0) {
              Dt = Er(t.nextSibling);
              break e;
            }
            e--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
        }
        t = t.nextSibling;
      }
      Dt = null;
    }
  } else Dt = Mt ? Er(t.stateNode.nextSibling) : null;
  return !0;
}
function Fv() {
  for (var t = Dt; t; ) t = Er(t.nextSibling);
}
function ps() {
  (Dt = Mt = null), (be = !1);
}
function zh(t) {
  ln === null ? (ln = [t]) : ln.push(t);
}
var v3 = Zn.ReactCurrentBatchConfig;
function on(t, e) {
  if (t && t.defaultProps) {
    (e = Ce({}, e)), (t = t.defaultProps);
    for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
var ac = Fr(null),
  lc = null,
  Qi = null,
  Hh = null;
function Wh() {
  Hh = Qi = lc = null;
}
function Uh(t) {
  var e = ac.current;
  xe(ac), (t._currentValue = e);
}
function gf(t, e, n) {
  for (; t !== null; ) {
    var r = t.alternate;
    if (
      ((t.childLanes & e) !== e
        ? ((t.childLanes |= e), r !== null && (r.childLanes |= e))
        : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
      t === n)
    )
      break;
    t = t.return;
  }
}
function as(t, e) {
  (lc = t),
    (Hh = Qi = null),
    (t = t.dependencies),
    t !== null &&
      t.firstContext !== null &&
      (t.lanes & e && (St = !0), (t.firstContext = null));
}
function Jt(t) {
  var e = t._currentValue;
  if (Hh !== t)
    if (((t = { context: t, memoizedValue: e, next: null }), Qi === null)) {
      if (lc === null) throw Error(I(308));
      (Qi = t), (lc.dependencies = { lanes: 0, firstContext: t });
    } else Qi = Qi.next = t;
  return e;
}
var ei = null;
function Vh(t) {
  ei === null ? (ei = [t]) : ei.push(t);
}
function Bv(t, e, n, r) {
  var i = e.interleaved;
  return (
    i === null ? ((n.next = n), Vh(e)) : ((n.next = i.next), (i.next = n)),
    (e.interleaved = n),
    Kn(t, r)
  );
}
function Kn(t, e) {
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
var cr = !1;
function Yh(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function $v(t, e) {
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
function Hn(t, e) {
  return {
    eventTime: t,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Sr(t, e, n) {
  var r = t.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ce & 2)) {
    var i = r.pending;
    return (
      i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
      (r.pending = e),
      Kn(t, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((e.next = e), Vh(r)) : ((e.next = i.next), (i.next = e)),
    (r.interleaved = e),
    Kn(t, n)
  );
}
function Pl(t, e, n) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))
  ) {
    var r = e.lanes;
    (r &= t.pendingLanes), (n |= r), (e.lanes = n), Ph(t, n);
  }
}
function rm(t, e) {
  var n = t.updateQueue,
    r = t.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
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
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = e) : (s = s.next = e);
    } else i = s = e;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (t.updateQueue = n);
    return;
  }
  (t = n.lastBaseUpdate),
    t === null ? (n.firstBaseUpdate = e) : (t.next = e),
    (n.lastBaseUpdate = e);
}
function cc(t, e, n, r) {
  var i = t.updateQueue;
  cr = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
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
    var d = i.baseState;
    (o = 0), (u = c = l = null), (a = s);
    do {
      var h = a.lane,
        p = a.eventTime;
      if ((r & h) === h) {
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
          var m = t,
            g = a;
          switch (((h = e), (p = n), g.tag)) {
            case 1:
              if (((m = g.payload), typeof m == "function")) {
                d = m.call(p, d, h);
                break e;
              }
              d = m;
              break e;
            case 3:
              m.flags = (m.flags & -65537) | 128;
            case 0:
              if (
                ((m = g.payload),
                (h = typeof m == "function" ? m.call(p, d, h) : m),
                h == null)
              )
                break e;
              d = Ce({}, d, h);
              break e;
            case 2:
              cr = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((t.flags |= 64),
          (h = i.effects),
          h === null ? (i.effects = [a]) : h.push(a));
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
        if (((a = i.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (i.lastBaseUpdate = h),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (u === null && (l = d),
      (i.baseState = l),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = u),
      (e = i.shared.interleaved),
      e !== null)
    ) {
      i = e;
      do (o |= i.lane), (i = i.next);
      while (i !== e);
    } else s === null && (i.shared.lanes = 0);
    (gi |= o), (t.lanes = o), (t.memoizedState = d);
  }
}
function im(t, e, n) {
  if (((t = e.effects), (e.effects = null), t !== null))
    for (e = 0; e < t.length; e++) {
      var r = t[e],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(I(191, i));
        i.call(r);
      }
    }
}
var zv = new By.Component().refs;
function yf(t, e, n, r) {
  (e = t.memoizedState),
    (n = n(r, e)),
    (n = n == null ? e : Ce({}, e, n)),
    (t.memoizedState = n),
    t.lanes === 0 && (t.updateQueue.baseState = n);
}
var eu = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? Ei(t) === t : !1;
  },
  enqueueSetState: function (t, e, n) {
    t = t._reactInternals;
    var r = pt(),
      i = kr(t),
      s = Hn(r, i);
    (s.payload = e),
      n != null && (s.callback = n),
      (e = Sr(t, s, i)),
      e !== null && (hn(e, t, i, r), Pl(e, t, i));
  },
  enqueueReplaceState: function (t, e, n) {
    t = t._reactInternals;
    var r = pt(),
      i = kr(t),
      s = Hn(r, i);
    (s.tag = 1),
      (s.payload = e),
      n != null && (s.callback = n),
      (e = Sr(t, s, i)),
      e !== null && (hn(e, t, i, r), Pl(e, t, i));
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals;
    var n = pt(),
      r = kr(t),
      i = Hn(n, r);
    (i.tag = 2),
      e != null && (i.callback = e),
      (e = Sr(t, i, r)),
      e !== null && (hn(e, t, r, n), Pl(e, t, r));
  },
};
function sm(t, e, n, r, i, s, o) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == "function"
      ? t.shouldComponentUpdate(r, s, o)
      : e.prototype && e.prototype.isPureReactComponent
      ? !qo(n, r) || !qo(i, s)
      : !0
  );
}
function Hv(t, e, n) {
  var r = !1,
    i = Pr,
    s = e.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Jt(s))
      : ((i = kt(e) ? hi : at.current),
        (r = e.contextTypes),
        (s = (r = r != null) ? hs(t, i) : Pr)),
    (e = new e(n, s)),
    (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = eu),
    (t.stateNode = e),
    (e._reactInternals = t),
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = i),
      (t.__reactInternalMemoizedMaskedChildContext = s)),
    e
  );
}
function om(t, e, n, r) {
  (t = e.state),
    typeof e.componentWillReceiveProps == "function" &&
      e.componentWillReceiveProps(n, r),
    typeof e.UNSAFE_componentWillReceiveProps == "function" &&
      e.UNSAFE_componentWillReceiveProps(n, r),
    e.state !== t && eu.enqueueReplaceState(e, e.state, null);
}
function vf(t, e, n, r) {
  var i = t.stateNode;
  (i.props = n), (i.state = t.memoizedState), (i.refs = zv), Yh(t);
  var s = e.contextType;
  typeof s == "object" && s !== null
    ? (i.context = Jt(s))
    : ((s = kt(e) ? hi : at.current), (i.context = hs(t, s))),
    (i.state = t.memoizedState),
    (s = e.getDerivedStateFromProps),
    typeof s == "function" && (yf(t, e, s, n), (i.state = t.memoizedState)),
    typeof e.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((e = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      e !== i.state && eu.enqueueReplaceState(i, i.state, null),
      cc(t, n, i, r),
      (i.state = t.memoizedState)),
    typeof i.componentDidMount == "function" && (t.flags |= 4194308);
}
function Xs(t, e, n) {
  if (
    ((t = n.ref), t !== null && typeof t != "function" && typeof t != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(I(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(I(147, t));
      var i = r,
        s = "" + t;
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == "function" &&
        e.ref._stringRef === s
        ? e.ref
        : ((e = function (o) {
            var a = i.refs;
            a === zv && (a = i.refs = {}),
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
function qa(t, e) {
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
function am(t) {
  var e = t._init;
  return e(t._payload);
}
function Wv(t) {
  function e(y, x) {
    if (t) {
      var _ = y.deletions;
      _ === null ? ((y.deletions = [x]), (y.flags |= 16)) : _.push(x);
    }
  }
  function n(y, x) {
    if (!t) return null;
    for (; x !== null; ) e(y, x), (x = x.sibling);
    return null;
  }
  function r(y, x) {
    for (y = new Map(); x !== null; )
      x.key !== null ? y.set(x.key, x) : y.set(x.index, x), (x = x.sibling);
    return y;
  }
  function i(y, x) {
    return (y = Tr(y, x)), (y.index = 0), (y.sibling = null), y;
  }
  function s(y, x, _) {
    return (
      (y.index = _),
      t
        ? ((_ = y.alternate),
          _ !== null
            ? ((_ = _.index), _ < x ? ((y.flags |= 2), x) : _)
            : ((y.flags |= 2), x))
        : ((y.flags |= 1048576), x)
    );
  }
  function o(y) {
    return t && y.alternate === null && (y.flags |= 2), y;
  }
  function a(y, x, _, w) {
    return x === null || x.tag !== 6
      ? ((x = ed(_, y.mode, w)), (x.return = y), x)
      : ((x = i(x, _)), (x.return = y), x);
  }
  function l(y, x, _, w) {
    var E = _.type;
    return E === Wi
      ? u(y, x, _.props.children, w, _.key)
      : x !== null &&
        (x.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === lr &&
            am(E) === x.type))
      ? ((w = i(x, _.props)), (w.ref = Xs(y, x, _)), (w.return = y), w)
      : ((w = Il(_.type, _.key, _.props, null, y.mode, w)),
        (w.ref = Xs(y, x, _)),
        (w.return = y),
        w);
  }
  function c(y, x, _, w) {
    return x === null ||
      x.tag !== 4 ||
      x.stateNode.containerInfo !== _.containerInfo ||
      x.stateNode.implementation !== _.implementation
      ? ((x = td(_, y.mode, w)), (x.return = y), x)
      : ((x = i(x, _.children || [])), (x.return = y), x);
  }
  function u(y, x, _, w, E) {
    return x === null || x.tag !== 7
      ? ((x = li(_, y.mode, w, E)), (x.return = y), x)
      : ((x = i(x, _)), (x.return = y), x);
  }
  function d(y, x, _) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (x = ed("" + x, y.mode, _)), (x.return = y), x;
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Fa:
          return (
            (_ = Il(x.type, x.key, x.props, null, y.mode, _)),
            (_.ref = Xs(y, null, x)),
            (_.return = y),
            _
          );
        case Hi:
          return (x = td(x, y.mode, _)), (x.return = y), x;
        case lr:
          var w = x._init;
          return d(y, w(x._payload), _);
      }
      if (po(x) || Vs(x))
        return (x = li(x, y.mode, _, null)), (x.return = y), x;
      qa(y, x);
    }
    return null;
  }
  function h(y, x, _, w) {
    var E = x !== null ? x.key : null;
    if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
      return E !== null ? null : a(y, x, "" + _, w);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case Fa:
          return _.key === E ? l(y, x, _, w) : null;
        case Hi:
          return _.key === E ? c(y, x, _, w) : null;
        case lr:
          return (E = _._init), h(y, x, E(_._payload), w);
      }
      if (po(_) || Vs(_)) return E !== null ? null : u(y, x, _, w, null);
      qa(y, _);
    }
    return null;
  }
  function p(y, x, _, w, E) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (y = y.get(_) || null), a(x, y, "" + w, E);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Fa:
          return (y = y.get(w.key === null ? _ : w.key) || null), l(x, y, w, E);
        case Hi:
          return (y = y.get(w.key === null ? _ : w.key) || null), c(x, y, w, E);
        case lr:
          var S = w._init;
          return p(y, x, _, S(w._payload), E);
      }
      if (po(w) || Vs(w)) return (y = y.get(_) || null), u(x, y, w, E, null);
      qa(x, w);
    }
    return null;
  }
  function m(y, x, _, w) {
    for (
      var E = null, S = null, C = x, k = (x = 0), L = null;
      C !== null && k < _.length;
      k++
    ) {
      C.index > k ? ((L = C), (C = null)) : (L = C.sibling);
      var j = h(y, C, _[k], w);
      if (j === null) {
        C === null && (C = L);
        break;
      }
      t && C && j.alternate === null && e(y, C),
        (x = s(j, x, k)),
        S === null ? (E = j) : (S.sibling = j),
        (S = j),
        (C = L);
    }
    if (k === _.length) return n(y, C), be && Kr(y, k), E;
    if (C === null) {
      for (; k < _.length; k++)
        (C = d(y, _[k], w)),
          C !== null &&
            ((x = s(C, x, k)), S === null ? (E = C) : (S.sibling = C), (S = C));
      return be && Kr(y, k), E;
    }
    for (C = r(y, C); k < _.length; k++)
      (L = p(C, y, k, _[k], w)),
        L !== null &&
          (t && L.alternate !== null && C.delete(L.key === null ? k : L.key),
          (x = s(L, x, k)),
          S === null ? (E = L) : (S.sibling = L),
          (S = L));
    return (
      t &&
        C.forEach(function ($) {
          return e(y, $);
        }),
      be && Kr(y, k),
      E
    );
  }
  function g(y, x, _, w) {
    var E = Vs(_);
    if (typeof E != "function") throw Error(I(150));
    if (((_ = E.call(_)), _ == null)) throw Error(I(151));
    for (
      var S = (E = null), C = x, k = (x = 0), L = null, j = _.next();
      C !== null && !j.done;
      k++, j = _.next()
    ) {
      C.index > k ? ((L = C), (C = null)) : (L = C.sibling);
      var $ = h(y, C, j.value, w);
      if ($ === null) {
        C === null && (C = L);
        break;
      }
      t && C && $.alternate === null && e(y, C),
        (x = s($, x, k)),
        S === null ? (E = $) : (S.sibling = $),
        (S = $),
        (C = L);
    }
    if (j.done) return n(y, C), be && Kr(y, k), E;
    if (C === null) {
      for (; !j.done; k++, j = _.next())
        (j = d(y, j.value, w)),
          j !== null &&
            ((x = s(j, x, k)), S === null ? (E = j) : (S.sibling = j), (S = j));
      return be && Kr(y, k), E;
    }
    for (C = r(y, C); !j.done; k++, j = _.next())
      (j = p(C, y, k, j.value, w)),
        j !== null &&
          (t && j.alternate !== null && C.delete(j.key === null ? k : j.key),
          (x = s(j, x, k)),
          S === null ? (E = j) : (S.sibling = j),
          (S = j));
    return (
      t &&
        C.forEach(function (N) {
          return e(y, N);
        }),
      be && Kr(y, k),
      E
    );
  }
  function v(y, x, _, w) {
    if (
      (typeof _ == "object" &&
        _ !== null &&
        _.type === Wi &&
        _.key === null &&
        (_ = _.props.children),
      typeof _ == "object" && _ !== null)
    ) {
      switch (_.$$typeof) {
        case Fa:
          e: {
            for (var E = _.key, S = x; S !== null; ) {
              if (S.key === E) {
                if (((E = _.type), E === Wi)) {
                  if (S.tag === 7) {
                    n(y, S.sibling),
                      (x = i(S, _.props.children)),
                      (x.return = y),
                      (y = x);
                    break e;
                  }
                } else if (
                  S.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === lr &&
                    am(E) === S.type)
                ) {
                  n(y, S.sibling),
                    (x = i(S, _.props)),
                    (x.ref = Xs(y, S, _)),
                    (x.return = y),
                    (y = x);
                  break e;
                }
                n(y, S);
                break;
              } else e(y, S);
              S = S.sibling;
            }
            _.type === Wi
              ? ((x = li(_.props.children, y.mode, w, _.key)),
                (x.return = y),
                (y = x))
              : ((w = Il(_.type, _.key, _.props, null, y.mode, w)),
                (w.ref = Xs(y, x, _)),
                (w.return = y),
                (y = w));
          }
          return o(y);
        case Hi:
          e: {
            for (S = _.key; x !== null; ) {
              if (x.key === S)
                if (
                  x.tag === 4 &&
                  x.stateNode.containerInfo === _.containerInfo &&
                  x.stateNode.implementation === _.implementation
                ) {
                  n(y, x.sibling),
                    (x = i(x, _.children || [])),
                    (x.return = y),
                    (y = x);
                  break e;
                } else {
                  n(y, x);
                  break;
                }
              else e(y, x);
              x = x.sibling;
            }
            (x = td(_, y.mode, w)), (x.return = y), (y = x);
          }
          return o(y);
        case lr:
          return (S = _._init), v(y, x, S(_._payload), w);
      }
      if (po(_)) return m(y, x, _, w);
      if (Vs(_)) return g(y, x, _, w);
      qa(y, _);
    }
    return (typeof _ == "string" && _ !== "") || typeof _ == "number"
      ? ((_ = "" + _),
        x !== null && x.tag === 6
          ? (n(y, x.sibling), (x = i(x, _)), (x.return = y), (y = x))
          : (n(y, x), (x = ed(_, y.mode, w)), (x.return = y), (y = x)),
        o(y))
      : n(y, x);
  }
  return v;
}
var ms = Wv(!0),
  Uv = Wv(!1),
  Ea = {},
  Cn = Fr(Ea),
  Zo = Fr(Ea),
  ea = Fr(Ea);
function ti(t) {
  if (t === Ea) throw Error(I(174));
  return t;
}
function Gh(t, e) {
  switch ((me(ea, e), me(Zo, t), me(Cn, Ea), (t = e.nodeType), t)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : qd(null, "");
      break;
    default:
      (t = t === 8 ? e.parentNode : e),
        (e = t.namespaceURI || null),
        (t = t.tagName),
        (e = qd(e, t));
  }
  xe(Cn), me(Cn, e);
}
function gs() {
  xe(Cn), xe(Zo), xe(ea);
}
function Vv(t) {
  ti(ea.current);
  var e = ti(Cn.current),
    n = qd(e, t.type);
  e !== n && (me(Zo, t), me(Cn, n));
}
function Kh(t) {
  Zo.current === t && (xe(Cn), xe(Zo));
}
var Ee = Fr(0);
function uc(t) {
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
var Ku = [];
function qh() {
  for (var t = 0; t < Ku.length; t++)
    Ku[t]._workInProgressVersionPrimary = null;
  Ku.length = 0;
}
var Ll = Zn.ReactCurrentDispatcher,
  qu = Zn.ReactCurrentBatchConfig,
  mi = 0,
  Se = null,
  De = null,
  He = null,
  dc = !1,
  Oo = !1,
  ta = 0,
  x3 = 0;
function Ze() {
  throw Error(I(321));
}
function Xh(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++)
    if (!mn(t[n], e[n])) return !1;
  return !0;
}
function Qh(t, e, n, r, i, s) {
  if (
    ((mi = s),
    (Se = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (Ll.current = t === null || t.memoizedState === null ? E3 : S3),
    (t = n(r, i)),
    Oo)
  ) {
    s = 0;
    do {
      if (((Oo = !1), (ta = 0), 25 <= s)) throw Error(I(301));
      (s += 1),
        (He = De = null),
        (e.updateQueue = null),
        (Ll.current = C3),
        (t = n(r, i));
    } while (Oo);
  }
  if (
    ((Ll.current = fc),
    (e = De !== null && De.next !== null),
    (mi = 0),
    (He = De = Se = null),
    (dc = !1),
    e)
  )
    throw Error(I(300));
  return t;
}
function Jh() {
  var t = ta !== 0;
  return (ta = 0), t;
}
function bn() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return He === null ? (Se.memoizedState = He = t) : (He = He.next = t), He;
}
function Zt() {
  if (De === null) {
    var t = Se.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = De.next;
  var e = He === null ? Se.memoizedState : He.next;
  if (e !== null) (He = e), (De = t);
  else {
    if (t === null) throw Error(I(310));
    (De = t),
      (t = {
        memoizedState: De.memoizedState,
        baseState: De.baseState,
        baseQueue: De.baseQueue,
        queue: De.queue,
        next: null,
      }),
      He === null ? (Se.memoizedState = He = t) : (He = He.next = t);
  }
  return He;
}
function na(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function Xu(t) {
  var e = Zt(),
    n = e.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = t;
  var r = De,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var a = (o = null),
      l = null,
      c = s;
    do {
      var u = c.lane;
      if ((mi & u) === u)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : t(r, c.action));
      else {
        var d = {
          lane: u,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (o = r)) : (l = l.next = d),
          (Se.lanes |= u),
          (gi |= u);
      }
      c = c.next;
    } while (c !== null && c !== s);
    l === null ? (o = r) : (l.next = a),
      mn(r, e.memoizedState) || (St = !0),
      (e.memoizedState = r),
      (e.baseState = o),
      (e.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((t = n.interleaved), t !== null)) {
    i = t;
    do (s = i.lane), (Se.lanes |= s), (gi |= s), (i = i.next);
    while (i !== t);
  } else i === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function Qu(t) {
  var e = Zt(),
    n = e.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = t;
  var r = n.dispatch,
    i = n.pending,
    s = e.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = t(s, o.action)), (o = o.next);
    while (o !== i);
    mn(s, e.memoizedState) || (St = !0),
      (e.memoizedState = s),
      e.baseQueue === null && (e.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Yv() {}
function Gv(t, e) {
  var n = Se,
    r = Zt(),
    i = e(),
    s = !mn(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (St = !0)),
    (r = r.queue),
    Zh(Xv.bind(null, n, r, t), [t]),
    r.getSnapshot !== e || s || (He !== null && He.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ra(9, qv.bind(null, n, r, i, e), void 0, null),
      Ue === null)
    )
      throw Error(I(349));
    mi & 30 || Kv(n, e, i);
  }
  return i;
}
function Kv(t, e, n) {
  (t.flags |= 16384),
    (t = { getSnapshot: e, value: n }),
    (e = Se.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (Se.updateQueue = e),
        (e.stores = [t]))
      : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
}
function qv(t, e, n, r) {
  (e.value = n), (e.getSnapshot = r), Qv(e) && Jv(t);
}
function Xv(t, e, n) {
  return n(function () {
    Qv(e) && Jv(t);
  });
}
function Qv(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !mn(t, n);
  } catch {
    return !0;
  }
}
function Jv(t) {
  var e = Kn(t, 1);
  e !== null && hn(e, t, 1, -1);
}
function lm(t) {
  var e = bn();
  return (
    typeof t == "function" && (t = t()),
    (e.memoizedState = e.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: na,
      lastRenderedState: t,
    }),
    (e.queue = t),
    (t = t.dispatch = w3.bind(null, Se, t)),
    [e.memoizedState, t]
  );
}
function ra(t, e, n, r) {
  return (
    (t = { tag: t, create: e, destroy: n, deps: r, next: null }),
    (e = Se.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (Se.updateQueue = e),
        (e.lastEffect = t.next = t))
      : ((n = e.lastEffect),
        n === null
          ? (e.lastEffect = t.next = t)
          : ((r = n.next), (n.next = t), (t.next = r), (e.lastEffect = t))),
    t
  );
}
function Zv() {
  return Zt().memoizedState;
}
function jl(t, e, n, r) {
  var i = bn();
  (Se.flags |= t),
    (i.memoizedState = ra(1 | e, n, void 0, r === void 0 ? null : r));
}
function tu(t, e, n, r) {
  var i = Zt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (De !== null) {
    var o = De.memoizedState;
    if (((s = o.destroy), r !== null && Xh(r, o.deps))) {
      i.memoizedState = ra(e, n, s, r);
      return;
    }
  }
  (Se.flags |= t), (i.memoizedState = ra(1 | e, n, s, r));
}
function cm(t, e) {
  return jl(8390656, 8, t, e);
}
function Zh(t, e) {
  return tu(2048, 8, t, e);
}
function e2(t, e) {
  return tu(4, 2, t, e);
}
function t2(t, e) {
  return tu(4, 4, t, e);
}
function n2(t, e) {
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
function r2(t, e, n) {
  return (
    (n = n != null ? n.concat([t]) : null), tu(4, 4, n2.bind(null, e, t), n)
  );
}
function ep() {}
function i2(t, e) {
  var n = Zt();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && Xh(e, r[1])
    ? r[0]
    : ((n.memoizedState = [t, e]), t);
}
function s2(t, e) {
  var n = Zt();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && Xh(e, r[1])
    ? r[0]
    : ((t = t()), (n.memoizedState = [t, e]), t);
}
function o2(t, e, n) {
  return mi & 21
    ? (mn(n, e) || ((n = cv()), (Se.lanes |= n), (gi |= n), (t.baseState = !0)),
      e)
    : (t.baseState && ((t.baseState = !1), (St = !0)), (t.memoizedState = n));
}
function _3(t, e) {
  var n = pe;
  (pe = n !== 0 && 4 > n ? n : 4), t(!0);
  var r = qu.transition;
  qu.transition = {};
  try {
    t(!1), e();
  } finally {
    (pe = n), (qu.transition = r);
  }
}
function a2() {
  return Zt().memoizedState;
}
function b3(t, e, n) {
  var r = kr(t);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    l2(t))
  )
    c2(e, n);
  else if (((n = Bv(t, e, n, r)), n !== null)) {
    var i = pt();
    hn(n, t, r, i), u2(n, e, r);
  }
}
function w3(t, e, n) {
  var r = kr(t),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (l2(t)) c2(e, i);
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
        if (((i.hasEagerState = !0), (i.eagerState = a), mn(a, o))) {
          var l = e.interleaved;
          l === null
            ? ((i.next = i), Vh(e))
            : ((i.next = l.next), (l.next = i)),
            (e.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Bv(t, e, i, r)),
      n !== null && ((i = pt()), hn(n, t, r, i), u2(n, e, r));
  }
}
function l2(t) {
  var e = t.alternate;
  return t === Se || (e !== null && e === Se);
}
function c2(t, e) {
  Oo = dc = !0;
  var n = t.pending;
  n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
    (t.pending = e);
}
function u2(t, e, n) {
  if (n & 4194240) {
    var r = e.lanes;
    (r &= t.pendingLanes), (n |= r), (e.lanes = n), Ph(t, n);
  }
}
var fc = {
    readContext: Jt,
    useCallback: Ze,
    useContext: Ze,
    useEffect: Ze,
    useImperativeHandle: Ze,
    useInsertionEffect: Ze,
    useLayoutEffect: Ze,
    useMemo: Ze,
    useReducer: Ze,
    useRef: Ze,
    useState: Ze,
    useDebugValue: Ze,
    useDeferredValue: Ze,
    useTransition: Ze,
    useMutableSource: Ze,
    useSyncExternalStore: Ze,
    useId: Ze,
    unstable_isNewReconciler: !1,
  },
  E3 = {
    readContext: Jt,
    useCallback: function (t, e) {
      return (bn().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: Jt,
    useEffect: cm,
    useImperativeHandle: function (t, e, n) {
      return (
        (n = n != null ? n.concat([t]) : null),
        jl(4194308, 4, n2.bind(null, e, t), n)
      );
    },
    useLayoutEffect: function (t, e) {
      return jl(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      return jl(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var n = bn();
      return (
        (e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t
      );
    },
    useReducer: function (t, e, n) {
      var r = bn();
      return (
        (e = n !== void 0 ? n(e) : e),
        (r.memoizedState = r.baseState = e),
        (t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: e,
        }),
        (r.queue = t),
        (t = t.dispatch = b3.bind(null, Se, t)),
        [r.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = bn();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: lm,
    useDebugValue: ep,
    useDeferredValue: function (t) {
      return (bn().memoizedState = t);
    },
    useTransition: function () {
      var t = lm(!1),
        e = t[0];
      return (t = _3.bind(null, t[1])), (bn().memoizedState = t), [e, t];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, e, n) {
      var r = Se,
        i = bn();
      if (be) {
        if (n === void 0) throw Error(I(407));
        n = n();
      } else {
        if (((n = e()), Ue === null)) throw Error(I(349));
        mi & 30 || Kv(r, e, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: e };
      return (
        (i.queue = s),
        cm(Xv.bind(null, r, s, t), [t]),
        (r.flags |= 2048),
        ra(9, qv.bind(null, r, s, n, e), void 0, null),
        n
      );
    },
    useId: function () {
      var t = bn(),
        e = Ue.identifierPrefix;
      if (be) {
        var n = zn,
          r = $n;
        (n = (r & ~(1 << (32 - fn(r) - 1))).toString(32) + n),
          (e = ":" + e + "R" + n),
          (n = ta++),
          0 < n && (e += "H" + n.toString(32)),
          (e += ":");
      } else (n = x3++), (e = ":" + e + "r" + n.toString(32) + ":");
      return (t.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  S3 = {
    readContext: Jt,
    useCallback: i2,
    useContext: Jt,
    useEffect: Zh,
    useImperativeHandle: r2,
    useInsertionEffect: e2,
    useLayoutEffect: t2,
    useMemo: s2,
    useReducer: Xu,
    useRef: Zv,
    useState: function () {
      return Xu(na);
    },
    useDebugValue: ep,
    useDeferredValue: function (t) {
      var e = Zt();
      return o2(e, De.memoizedState, t);
    },
    useTransition: function () {
      var t = Xu(na)[0],
        e = Zt().memoizedState;
      return [t, e];
    },
    useMutableSource: Yv,
    useSyncExternalStore: Gv,
    useId: a2,
    unstable_isNewReconciler: !1,
  },
  C3 = {
    readContext: Jt,
    useCallback: i2,
    useContext: Jt,
    useEffect: Zh,
    useImperativeHandle: r2,
    useInsertionEffect: e2,
    useLayoutEffect: t2,
    useMemo: s2,
    useReducer: Qu,
    useRef: Zv,
    useState: function () {
      return Qu(na);
    },
    useDebugValue: ep,
    useDeferredValue: function (t) {
      var e = Zt();
      return De === null ? (e.memoizedState = t) : o2(e, De.memoizedState, t);
    },
    useTransition: function () {
      var t = Qu(na)[0],
        e = Zt().memoizedState;
      return [t, e];
    },
    useMutableSource: Yv,
    useSyncExternalStore: Gv,
    useId: a2,
    unstable_isNewReconciler: !1,
  };
function ys(t, e) {
  try {
    var n = "",
      r = e;
    do (n += Zw(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: t, source: e, stack: i, digest: null };
}
function Ju(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function xf(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var k3 = typeof WeakMap == "function" ? WeakMap : Map;
function d2(t, e, n) {
  (n = Hn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = e.value;
  return (
    (n.callback = function () {
      pc || ((pc = !0), (Af = r)), xf(t, e);
    }),
    n
  );
}
function f2(t, e, n) {
  (n = Hn(-1, n)), (n.tag = 3);
  var r = t.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = e.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        xf(t, e);
      });
  }
  var s = t.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        xf(t, e),
          typeof r != "function" &&
            (Cr === null ? (Cr = new Set([this])) : Cr.add(this));
        var o = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function um(t, e, n) {
  var r = t.pingCache;
  if (r === null) {
    r = t.pingCache = new k3();
    var i = new Set();
    r.set(e, i);
  } else (i = r.get(e)), i === void 0 && ((i = new Set()), r.set(e, i));
  i.has(n) || (i.add(n), (t = $3.bind(null, t, e, n)), e.then(t, t));
}
function dm(t) {
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
function fm(t, e, n, r, i) {
  return t.mode & 1
    ? ((t.flags |= 65536), (t.lanes = i), t)
    : (t === e
        ? (t.flags |= 65536)
        : ((t.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((e = Hn(-1, 1)), (e.tag = 2), Sr(n, e, 1))),
          (n.lanes |= 1)),
      t);
}
var T3 = Zn.ReactCurrentOwner,
  St = !1;
function dt(t, e, n, r) {
  e.child = t === null ? Uv(e, null, n, r) : ms(e, t.child, n, r);
}
function hm(t, e, n, r, i) {
  n = n.render;
  var s = e.ref;
  return (
    as(e, i),
    (r = Qh(t, e, n, r, s, i)),
    (n = Jh()),
    t !== null && !St
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        qn(t, e, i))
      : (be && n && Bh(e), (e.flags |= 1), dt(t, e, r, i), e.child)
  );
}
function pm(t, e, n, r, i) {
  if (t === null) {
    var s = n.type;
    return typeof s == "function" &&
      !lp(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((e.tag = 15), (e.type = s), h2(t, e, s, r, i))
      : ((t = Il(n.type, null, r, e, e.mode, i)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t));
  }
  if (((s = t.child), !(t.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : qo), n(o, r) && t.ref === e.ref)
    )
      return qn(t, e, i);
  }
  return (
    (e.flags |= 1),
    (t = Tr(s, r)),
    (t.ref = e.ref),
    (t.return = e),
    (e.child = t)
  );
}
function h2(t, e, n, r, i) {
  if (t !== null) {
    var s = t.memoizedProps;
    if (qo(s, r) && t.ref === e.ref)
      if (((St = !1), (e.pendingProps = r = s), (t.lanes & i) !== 0))
        t.flags & 131072 && (St = !0);
      else return (e.lanes = t.lanes), qn(t, e, i);
  }
  return _f(t, e, n, r, i);
}
function p2(t, e, n) {
  var r = e.pendingProps,
    i = r.children,
    s = t !== null ? t.memoizedState : null;
  if (r.mode === "hidden")
    if (!(e.mode & 1))
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        me(Zi, jt),
        (jt |= n);
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
          me(Zi, jt),
          (jt |= t),
          null
        );
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        me(Zi, jt),
        (jt |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (e.memoizedState = null)) : (r = n),
      me(Zi, jt),
      (jt |= r);
  return dt(t, e, i, n), e.child;
}
function m2(t, e) {
  var n = e.ref;
  ((t === null && n !== null) || (t !== null && t.ref !== n)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function _f(t, e, n, r, i) {
  var s = kt(n) ? hi : at.current;
  return (
    (s = hs(e, s)),
    as(e, i),
    (n = Qh(t, e, n, r, s, i)),
    (r = Jh()),
    t !== null && !St
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        qn(t, e, i))
      : (be && r && Bh(e), (e.flags |= 1), dt(t, e, n, i), e.child)
  );
}
function mm(t, e, n, r, i) {
  if (kt(n)) {
    var s = !0;
    ic(e);
  } else s = !1;
  if ((as(e, i), e.stateNode === null))
    Rl(t, e), Hv(e, n, r), vf(e, n, r, i), (r = !0);
  else if (t === null) {
    var o = e.stateNode,
      a = e.memoizedProps;
    o.props = a;
    var l = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Jt(c))
      : ((c = kt(n) ? hi : at.current), (c = hs(e, c)));
    var u = n.getDerivedStateFromProps,
      d =
        typeof u == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== c) && om(e, o, r, c)),
      (cr = !1);
    var h = e.memoizedState;
    (o.state = h),
      cc(e, r, o, i),
      (l = e.memoizedState),
      a !== r || h !== l || Ct.current || cr
        ? (typeof u == "function" && (yf(e, n, u, r), (l = e.memoizedState)),
          (a = cr || sm(e, n, a, r, h, l, c))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (e.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
              (e.memoizedProps = r),
              (e.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = c),
          (r = a))
        : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
          (r = !1));
  } else {
    (o = e.stateNode),
      $v(t, e),
      (a = e.memoizedProps),
      (c = e.type === e.elementType ? a : on(e.type, a)),
      (o.props = c),
      (d = e.pendingProps),
      (h = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Jt(l))
        : ((l = kt(n) ? hi : at.current), (l = hs(e, l)));
    var p = n.getDerivedStateFromProps;
    (u =
      typeof p == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== d || h !== l) && om(e, o, r, l)),
      (cr = !1),
      (h = e.memoizedState),
      (o.state = h),
      cc(e, r, o, i);
    var m = e.memoizedState;
    a !== d || h !== m || Ct.current || cr
      ? (typeof p == "function" && (yf(e, n, p, r), (m = e.memoizedState)),
        (c = cr || sm(e, n, c, r, h, m, l) || !1)
          ? (u ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, m, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, m, l)),
            typeof o.componentDidUpdate == "function" && (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === t.memoizedProps && h === t.memoizedState) ||
              (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === t.memoizedProps && h === t.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = r),
            (e.memoizedState = m)),
        (o.props = r),
        (o.state = m),
        (o.context = l),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (a === t.memoizedProps && h === t.memoizedState) ||
          (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === t.memoizedProps && h === t.memoizedState) ||
          (e.flags |= 1024),
        (r = !1));
  }
  return bf(t, e, n, r, s, i);
}
function bf(t, e, n, r, i, s) {
  m2(t, e);
  var o = (e.flags & 128) !== 0;
  if (!r && !o) return i && em(e, n, !1), qn(t, e, s);
  (r = e.stateNode), (T3.current = e);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (e.flags |= 1),
    t !== null && o
      ? ((e.child = ms(e, t.child, null, s)), (e.child = ms(e, null, a, s)))
      : dt(t, e, a, s),
    (e.memoizedState = r.state),
    i && em(e, n, !0),
    e.child
  );
}
function g2(t) {
  var e = t.stateNode;
  e.pendingContext
    ? Z0(t, e.pendingContext, e.pendingContext !== e.context)
    : e.context && Z0(t, e.context, !1),
    Gh(t, e.containerInfo);
}
function gm(t, e, n, r, i) {
  return ps(), zh(i), (e.flags |= 256), dt(t, e, n, r), e.child;
}
var wf = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ef(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function y2(t, e, n) {
  var r = e.pendingProps,
    i = Ee.current,
    s = !1,
    o = (e.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((s = !0), (e.flags &= -129))
      : (t === null || t.memoizedState !== null) && (i |= 1),
    me(Ee, i & 1),
    t === null)
  )
    return (
      mf(e),
      (t = e.memoizedState),
      t !== null && ((t = t.dehydrated), t !== null)
        ? (e.mode & 1
            ? t.data === "$!"
              ? (e.lanes = 8)
              : (e.lanes = 1073741824)
            : (e.lanes = 1),
          null)
        : ((o = r.children),
          (t = r.fallback),
          s
            ? ((r = e.mode),
              (s = e.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = iu(o, r, 0, null)),
              (t = li(t, r, n, null)),
              (s.return = e),
              (t.return = e),
              (s.sibling = t),
              (e.child = s),
              (e.child.memoizedState = Ef(n)),
              (e.memoizedState = wf),
              t)
            : tp(e, o))
    );
  if (((i = t.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return O3(t, e, o, r, a, i, n);
  if (s) {
    (s = r.fallback), (o = e.mode), (i = t.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && e.child !== i
        ? ((r = e.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (e.deletions = null))
        : ((r = Tr(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = Tr(a, s)) : ((s = li(s, o, n, null)), (s.flags |= 2)),
      (s.return = e),
      (r.return = e),
      (r.sibling = s),
      (e.child = r),
      (r = s),
      (s = e.child),
      (o = t.child.memoizedState),
      (o =
        o === null
          ? Ef(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = t.childLanes & ~n),
      (e.memoizedState = wf),
      r
    );
  }
  return (
    (s = t.child),
    (t = s.sibling),
    (r = Tr(s, { mode: "visible", children: r.children })),
    !(e.mode & 1) && (r.lanes = n),
    (r.return = e),
    (r.sibling = null),
    t !== null &&
      ((n = e.deletions),
      n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
    (e.child = r),
    (e.memoizedState = null),
    r
  );
}
function tp(t, e) {
  return (
    (e = iu({ mode: "visible", children: e }, t.mode, 0, null)),
    (e.return = t),
    (t.child = e)
  );
}
function Xa(t, e, n, r) {
  return (
    r !== null && zh(r),
    ms(e, t.child, null, n),
    (t = tp(e, e.pendingProps.children)),
    (t.flags |= 2),
    (e.memoizedState = null),
    t
  );
}
function O3(t, e, n, r, i, s, o) {
  if (n)
    return e.flags & 256
      ? ((e.flags &= -257), (r = Ju(Error(I(422)))), Xa(t, e, o, r))
      : e.memoizedState !== null
      ? ((e.child = t.child), (e.flags |= 128), null)
      : ((s = r.fallback),
        (i = e.mode),
        (r = iu({ mode: "visible", children: r.children }, i, 0, null)),
        (s = li(s, i, o, null)),
        (s.flags |= 2),
        (r.return = e),
        (s.return = e),
        (r.sibling = s),
        (e.child = r),
        e.mode & 1 && ms(e, t.child, null, o),
        (e.child.memoizedState = Ef(o)),
        (e.memoizedState = wf),
        s);
  if (!(e.mode & 1)) return Xa(t, e, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (s = Error(I(419))), (r = Ju(s, r, void 0)), Xa(t, e, o, r);
  }
  if (((a = (o & t.childLanes) !== 0), St || a)) {
    if (((r = Ue), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), Kn(t, i), hn(r, t, i, -1));
    }
    return ap(), (r = Ju(Error(I(421)))), Xa(t, e, o, r);
  }
  return i.data === "$?"
    ? ((e.flags |= 128),
      (e.child = t.child),
      (e = z3.bind(null, t)),
      (i._reactRetry = e),
      null)
    : ((t = s.treeContext),
      (Dt = Er(i.nextSibling)),
      (Mt = e),
      (be = !0),
      (ln = null),
      t !== null &&
        ((Vt[Yt++] = $n),
        (Vt[Yt++] = zn),
        (Vt[Yt++] = pi),
        ($n = t.id),
        (zn = t.overflow),
        (pi = e)),
      (e = tp(e, r.children)),
      (e.flags |= 4096),
      e);
}
function ym(t, e, n) {
  t.lanes |= e;
  var r = t.alternate;
  r !== null && (r.lanes |= e), gf(t.return, e, n);
}
function Zu(t, e, n, r, i) {
  var s = t.memoizedState;
  s === null
    ? (t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = e),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function v2(t, e, n) {
  var r = e.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((dt(t, e, r.children, n), (r = Ee.current), r & 2))
    (r = (r & 1) | 2), (e.flags |= 128);
  else {
    if (t !== null && t.flags & 128)
      e: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && ym(t, n, e);
        else if (t.tag === 19) ym(t, n, e);
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
    r &= 1;
  }
  if ((me(Ee, r), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = e.child, i = null; n !== null; )
          (t = n.alternate),
            t !== null && uc(t) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = e.child), (e.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Zu(e, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = e.child, e.child = null; i !== null; ) {
          if (((t = i.alternate), t !== null && uc(t) === null)) {
            e.child = i;
            break;
          }
          (t = i.sibling), (i.sibling = n), (n = i), (i = t);
        }
        Zu(e, !0, n, null, s);
        break;
      case "together":
        Zu(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function Rl(t, e) {
  !(e.mode & 1) &&
    t !== null &&
    ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function qn(t, e, n) {
  if (
    (t !== null && (e.dependencies = t.dependencies),
    (gi |= e.lanes),
    !(n & e.childLanes))
  )
    return null;
  if (t !== null && e.child !== t.child) throw Error(I(153));
  if (e.child !== null) {
    for (
      t = e.child, n = Tr(t, t.pendingProps), e.child = n, n.return = e;
      t.sibling !== null;

    )
      (t = t.sibling), (n = n.sibling = Tr(t, t.pendingProps)), (n.return = e);
    n.sibling = null;
  }
  return e.child;
}
function A3(t, e, n) {
  switch (e.tag) {
    case 3:
      g2(e), ps();
      break;
    case 5:
      Vv(e);
      break;
    case 1:
      kt(e.type) && ic(e);
      break;
    case 4:
      Gh(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context,
        i = e.memoizedProps.value;
      me(ac, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = e.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (me(Ee, Ee.current & 1), (e.flags |= 128), null)
          : n & e.child.childLanes
          ? y2(t, e, n)
          : (me(Ee, Ee.current & 1),
            (t = qn(t, e, n)),
            t !== null ? t.sibling : null);
      me(Ee, Ee.current & 1);
      break;
    case 19:
      if (((r = (n & e.childLanes) !== 0), t.flags & 128)) {
        if (r) return v2(t, e, n);
        e.flags |= 128;
      }
      if (
        ((i = e.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        me(Ee, Ee.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), p2(t, e, n);
  }
  return qn(t, e, n);
}
var x2, Sf, _2, b2;
x2 = function (t, e) {
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
Sf = function () {};
_2 = function (t, e, n, r) {
  var i = t.memoizedProps;
  if (i !== r) {
    (t = e.stateNode), ti(Cn.current);
    var s = null;
    switch (n) {
      case "input":
        (i = Vd(t, i)), (r = Vd(t, r)), (s = []);
        break;
      case "select":
        (i = Ce({}, i, { value: void 0 })),
          (r = Ce({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = Kd(t, i)), (r = Kd(t, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (t.onclick = nc);
    }
    Xd(n, r);
    var o;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var a = i[c];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Ho.hasOwnProperty(c)
              ? s || (s = [])
              : (s = s || []).push(c, null));
    for (c in r) {
      var l = r[c];
      if (
        ((a = i != null ? i[c] : void 0),
        r.hasOwnProperty(c) && l !== a && (l != null || a != null))
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
              (Ho.hasOwnProperty(c)
                ? (l != null && c === "onScroll" && ye("scroll", t),
                  s || a === l || (s = []))
                : (s = s || []).push(c, l));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (e.updateQueue = c) && (e.flags |= 4);
  }
};
b2 = function (t, e, n, r) {
  n !== r && (e.flags |= 4);
};
function Qs(t, e) {
  if (!be)
    switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var n = null; e !== null; )
          e.alternate !== null && (n = e), (e = e.sibling);
        n === null ? (t.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = t.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? e || t.tail === null
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (r.sibling = null);
    }
}
function et(t) {
  var e = t.alternate !== null && t.alternate.child === t.child,
    n = 0,
    r = 0;
  if (e)
    for (var i = t.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = t),
        (i = i.sibling);
  else
    for (i = t.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = t),
        (i = i.sibling);
  return (t.subtreeFlags |= r), (t.childLanes = n), e;
}
function N3(t, e, n) {
  var r = e.pendingProps;
  switch (($h(e), e.tag)) {
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
      return et(e), null;
    case 1:
      return kt(e.type) && rc(), et(e), null;
    case 3:
      return (
        (r = e.stateNode),
        gs(),
        xe(Ct),
        xe(at),
        qh(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (t === null || t.child === null) &&
          (Ka(e)
            ? (e.flags |= 4)
            : t === null ||
              (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), ln !== null && (Lf(ln), (ln = null)))),
        Sf(t, e),
        et(e),
        null
      );
    case 5:
      Kh(e);
      var i = ti(ea.current);
      if (((n = e.type), t !== null && e.stateNode != null))
        _2(t, e, n, r, i),
          t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      else {
        if (!r) {
          if (e.stateNode === null) throw Error(I(166));
          return et(e), null;
        }
        if (((t = ti(Cn.current)), Ka(e))) {
          (r = e.stateNode), (n = e.type);
          var s = e.memoizedProps;
          switch (((r[En] = e), (r[Jo] = s), (t = (e.mode & 1) !== 0), n)) {
            case "dialog":
              ye("cancel", r), ye("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ye("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < go.length; i++) ye(go[i], r);
              break;
            case "source":
              ye("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ye("error", r), ye("load", r);
              break;
            case "details":
              ye("toggle", r);
              break;
            case "input":
              k0(r, s), ye("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                ye("invalid", r);
              break;
            case "textarea":
              O0(r, s), ye("invalid", r);
          }
          Xd(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Ga(r.textContent, a, t),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Ga(r.textContent, a, t),
                    (i = ["children", "" + a]))
                : Ho.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  ye("scroll", r);
            }
          switch (n) {
            case "input":
              Ba(r), T0(r, s, !0);
              break;
            case "textarea":
              Ba(r), A0(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = nc);
          }
          (r = i), (e.updateQueue = r), r !== null && (e.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            t === "http://www.w3.org/1999/xhtml" && (t = Ky(n)),
            t === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((t = o.createElement("div")),
                  (t.innerHTML = "<script></script>"),
                  (t = t.removeChild(t.firstChild)))
                : typeof r.is == "string"
                ? (t = o.createElement(n, { is: r.is }))
                : ((t = o.createElement(n)),
                  n === "select" &&
                    ((o = t),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (t = o.createElementNS(t, n)),
            (t[En] = e),
            (t[Jo] = r),
            x2(t, e, !1, !1),
            (e.stateNode = t);
          e: {
            switch (((o = Qd(n, r)), n)) {
              case "dialog":
                ye("cancel", t), ye("close", t), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ye("load", t), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < go.length; i++) ye(go[i], t);
                i = r;
                break;
              case "source":
                ye("error", t), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                ye("error", t), ye("load", t), (i = r);
                break;
              case "details":
                ye("toggle", t), (i = r);
                break;
              case "input":
                k0(t, r), (i = Vd(t, r)), ye("invalid", t);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (t._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Ce({}, r, { value: void 0 })),
                  ye("invalid", t);
                break;
              case "textarea":
                O0(t, r), (i = Kd(t, r)), ye("invalid", t);
                break;
              default:
                i = r;
            }
            Xd(n, i), (a = i);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? Qy(t, l)
                  : s === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && qy(t, l))
                  : s === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Wo(t, l)
                    : typeof l == "number" && Wo(t, "" + l)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Ho.hasOwnProperty(s)
                      ? l != null && s === "onScroll" && ye("scroll", t)
                      : l != null && Ch(t, s, l, o));
              }
            switch (n) {
              case "input":
                Ba(t), T0(t, r, !1);
                break;
              case "textarea":
                Ba(t), A0(t);
                break;
              case "option":
                r.value != null && t.setAttribute("value", "" + Nr(r.value));
                break;
              case "select":
                (t.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? rs(t, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      rs(t, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (t.onclick = nc);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return et(e), null;
    case 6:
      if (t && e.stateNode != null) b2(t, e, t.memoizedProps, r);
      else {
        if (typeof r != "string" && e.stateNode === null) throw Error(I(166));
        if (((n = ti(ea.current)), ti(Cn.current), Ka(e))) {
          if (
            ((r = e.stateNode),
            (n = e.memoizedProps),
            (r[En] = e),
            (s = r.nodeValue !== n) && ((t = Mt), t !== null))
          )
            switch (t.tag) {
              case 3:
                Ga(r.nodeValue, n, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ga(r.nodeValue, n, (t.mode & 1) !== 0);
            }
          s && (e.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[En] = e),
            (e.stateNode = r);
      }
      return et(e), null;
    case 13:
      if (
        (xe(Ee),
        (r = e.memoizedState),
        t === null ||
          (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (be && Dt !== null && e.mode & 1 && !(e.flags & 128))
          Fv(), ps(), (e.flags |= 98560), (s = !1);
        else if (((s = Ka(e)), r !== null && r.dehydrated !== null)) {
          if (t === null) {
            if (!s) throw Error(I(318));
            if (
              ((s = e.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(I(317));
            s[En] = e;
          } else
            ps(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
          et(e), (s = !1);
        } else ln !== null && (Lf(ln), (ln = null)), (s = !0);
        if (!s) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = n), e)
        : ((r = r !== null),
          r !== (t !== null && t.memoizedState !== null) &&
            r &&
            ((e.child.flags |= 8192),
            e.mode & 1 &&
              (t === null || Ee.current & 1 ? Me === 0 && (Me = 3) : ap())),
          e.updateQueue !== null && (e.flags |= 4),
          et(e),
          null);
    case 4:
      return (
        gs(), Sf(t, e), t === null && Xo(e.stateNode.containerInfo), et(e), null
      );
    case 10:
      return Uh(e.type._context), et(e), null;
    case 17:
      return kt(e.type) && rc(), et(e), null;
    case 19:
      if ((xe(Ee), (s = e.memoizedState), s === null)) return et(e), null;
      if (((r = (e.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) Qs(s, !1);
        else {
          if (Me !== 0 || (t !== null && t.flags & 128))
            for (t = e.child; t !== null; ) {
              if (((o = uc(t)), o !== null)) {
                for (
                  e.flags |= 128,
                    Qs(s, !1),
                    r = o.updateQueue,
                    r !== null && ((e.updateQueue = r), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    r = n,
                    n = e.child;
                  n !== null;

                )
                  (s = n),
                    (t = r),
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
                return me(Ee, (Ee.current & 1) | 2), e.child;
              }
              t = t.sibling;
            }
          s.tail !== null &&
            Ne() > vs &&
            ((e.flags |= 128), (r = !0), Qs(s, !1), (e.lanes = 4194304));
        }
      else {
        if (!r)
          if (((t = uc(o)), t !== null)) {
            if (
              ((e.flags |= 128),
              (r = !0),
              (n = t.updateQueue),
              n !== null && ((e.updateQueue = n), (e.flags |= 4)),
              Qs(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !be)
            )
              return et(e), null;
          } else
            2 * Ne() - s.renderingStartTime > vs &&
              n !== 1073741824 &&
              ((e.flags |= 128), (r = !0), Qs(s, !1), (e.lanes = 4194304));
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
          (s.renderingStartTime = Ne()),
          (e.sibling = null),
          (n = Ee.current),
          me(Ee, r ? (n & 1) | 2 : n & 1),
          e)
        : (et(e), null);
    case 22:
    case 23:
      return (
        op(),
        (r = e.memoizedState !== null),
        t !== null && (t.memoizedState !== null) !== r && (e.flags |= 8192),
        r && e.mode & 1
          ? jt & 1073741824 && (et(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : et(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(I(156, e.tag));
}
function P3(t, e) {
  switch (($h(e), e.tag)) {
    case 1:
      return (
        kt(e.type) && rc(),
        (t = e.flags),
        t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 3:
      return (
        gs(),
        xe(Ct),
        xe(at),
        qh(),
        (t = e.flags),
        t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 5:
      return Kh(e), null;
    case 13:
      if (
        (xe(Ee), (t = e.memoizedState), t !== null && t.dehydrated !== null)
      ) {
        if (e.alternate === null) throw Error(I(340));
        ps();
      }
      return (
        (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 19:
      return xe(Ee), null;
    case 4:
      return gs(), null;
    case 10:
      return Uh(e.type._context), null;
    case 22:
    case 23:
      return op(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Qa = !1,
  rt = !1,
  L3 = typeof WeakSet == "function" ? WeakSet : Set,
  U = null;
function Ji(t, e) {
  var n = t.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Oe(t, e, r);
      }
    else n.current = null;
}
function Cf(t, e, n) {
  try {
    n();
  } catch (r) {
    Oe(t, e, r);
  }
}
var vm = !1;
function j3(t, e) {
  if (((lf = Zl), (t = Cv()), Fh(t))) {
    if ("selectionStart" in t)
      var n = { start: t.selectionStart, end: t.selectionEnd };
    else
      e: {
        n = ((n = t.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
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
              d !== n || (i !== 0 && d.nodeType !== 3) || (a = o + i),
                d !== s || (r !== 0 && d.nodeType !== 3) || (l = o + r),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (p = d.firstChild) !== null;

            )
              (h = d), (d = p);
            for (;;) {
              if (d === t) break t;
              if (
                (h === n && ++c === i && (a = o),
                h === s && ++u === r && (l = o),
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
  for (cf = { focusedElem: t, selectionRange: n }, Zl = !1, U = e; U !== null; )
    if (((e = U), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
      (t.return = e), (U = t);
    else
      for (; U !== null; ) {
        e = U;
        try {
          var m = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var g = m.memoizedProps,
                    v = m.memoizedState,
                    y = e.stateNode,
                    x = y.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? g : on(e.type, g),
                      v,
                    );
                  y.__reactInternalSnapshotBeforeUpdate = x;
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
          Oe(e, e.return, w);
        }
        if (((t = e.sibling), t !== null)) {
          (t.return = e.return), (U = t);
          break;
        }
        U = e.return;
      }
  return (m = vm), (vm = !1), m;
}
function Ao(t, e, n) {
  var r = e.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & t) === t) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && Cf(e, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function nu(t, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var n = (e = e.next);
    do {
      if ((n.tag & t) === t) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== e);
  }
}
function kf(t) {
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
function w2(t) {
  var e = t.alternate;
  e !== null && ((t.alternate = null), w2(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
      ((e = t.stateNode),
      e !== null &&
        (delete e[En], delete e[Jo], delete e[ff], delete e[m3], delete e[g3])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null);
}
function E2(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function xm(t) {
  e: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || E2(t.return)) return null;
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
function Tf(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    (t = t.stateNode),
      e
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(t, e)
          : n.insertBefore(t, e)
        : (n.nodeType === 8
            ? ((e = n.parentNode), e.insertBefore(t, n))
            : ((e = n), e.appendChild(t)),
          (n = n._reactRootContainer),
          n != null || e.onclick !== null || (e.onclick = nc));
  else if (r !== 4 && ((t = t.child), t !== null))
    for (Tf(t, e, n), t = t.sibling; t !== null; ) Tf(t, e, n), (t = t.sibling);
}
function Of(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (r !== 4 && ((t = t.child), t !== null))
    for (Of(t, e, n), t = t.sibling; t !== null; ) Of(t, e, n), (t = t.sibling);
}
var Ge = null,
  an = !1;
function rr(t, e, n) {
  for (n = n.child; n !== null; ) S2(t, e, n), (n = n.sibling);
}
function S2(t, e, n) {
  if (Sn && typeof Sn.onCommitFiberUnmount == "function")
    try {
      Sn.onCommitFiberUnmount(Kc, n);
    } catch {}
  switch (n.tag) {
    case 5:
      rt || Ji(n, e);
    case 6:
      var r = Ge,
        i = an;
      (Ge = null),
        rr(t, e, n),
        (Ge = r),
        (an = i),
        Ge !== null &&
          (an
            ? ((t = Ge),
              (n = n.stateNode),
              t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
            : Ge.removeChild(n.stateNode));
      break;
    case 18:
      Ge !== null &&
        (an
          ? ((t = Ge),
            (n = n.stateNode),
            t.nodeType === 8
              ? Yu(t.parentNode, n)
              : t.nodeType === 1 && Yu(t, n),
            Go(t))
          : Yu(Ge, n.stateNode));
      break;
    case 4:
      (r = Ge),
        (i = an),
        (Ge = n.stateNode.containerInfo),
        (an = !0),
        rr(t, e, n),
        (Ge = r),
        (an = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !rt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && Cf(n, e, o),
            (i = i.next);
        } while (i !== r);
      }
      rr(t, e, n);
      break;
    case 1:
      if (
        !rt &&
        (Ji(n, e),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Oe(n, e, a);
        }
      rr(t, e, n);
      break;
    case 21:
      rr(t, e, n);
      break;
    case 22:
      n.mode & 1
        ? ((rt = (r = rt) || n.memoizedState !== null), rr(t, e, n), (rt = r))
        : rr(t, e, n);
      break;
    default:
      rr(t, e, n);
  }
}
function _m(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    n === null && (n = t.stateNode = new L3()),
      e.forEach(function (r) {
        var i = H3.bind(null, t, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function sn(t, e) {
  var n = e.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = t,
          o = e,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ge = a.stateNode), (an = !1);
              break e;
            case 3:
              (Ge = a.stateNode.containerInfo), (an = !0);
              break e;
            case 4:
              (Ge = a.stateNode.containerInfo), (an = !0);
              break e;
          }
          a = a.return;
        }
        if (Ge === null) throw Error(I(160));
        S2(s, o, i), (Ge = null), (an = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (c) {
        Oe(i, e, c);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) C2(e, t), (e = e.sibling);
}
function C2(t, e) {
  var n = t.alternate,
    r = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((sn(e, t), xn(t), r & 4)) {
        try {
          Ao(3, t, t.return), nu(3, t);
        } catch (g) {
          Oe(t, t.return, g);
        }
        try {
          Ao(5, t, t.return);
        } catch (g) {
          Oe(t, t.return, g);
        }
      }
      break;
    case 1:
      sn(e, t), xn(t), r & 512 && n !== null && Ji(n, n.return);
      break;
    case 5:
      if (
        (sn(e, t),
        xn(t),
        r & 512 && n !== null && Ji(n, n.return),
        t.flags & 32)
      ) {
        var i = t.stateNode;
        try {
          Wo(i, "");
        } catch (g) {
          Oe(t, t.return, g);
        }
      }
      if (r & 4 && ((i = t.stateNode), i != null)) {
        var s = t.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = t.type,
          l = t.updateQueue;
        if (((t.updateQueue = null), l !== null))
          try {
            a === "input" && s.type === "radio" && s.name != null && Yy(i, s),
              Qd(a, o);
            var c = Qd(a, s);
            for (o = 0; o < l.length; o += 2) {
              var u = l[o],
                d = l[o + 1];
              u === "style"
                ? Qy(i, d)
                : u === "dangerouslySetInnerHTML"
                ? qy(i, d)
                : u === "children"
                ? Wo(i, d)
                : Ch(i, u, d, c);
            }
            switch (a) {
              case "input":
                Yd(i, s);
                break;
              case "textarea":
                Gy(i, s);
                break;
              case "select":
                var h = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var p = s.value;
                p != null
                  ? rs(i, !!s.multiple, p, !1)
                  : h !== !!s.multiple &&
                    (s.defaultValue != null
                      ? rs(i, !!s.multiple, s.defaultValue, !0)
                      : rs(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[Jo] = s;
          } catch (g) {
            Oe(t, t.return, g);
          }
      }
      break;
    case 6:
      if ((sn(e, t), xn(t), r & 4)) {
        if (t.stateNode === null) throw Error(I(162));
        (i = t.stateNode), (s = t.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (g) {
          Oe(t, t.return, g);
        }
      }
      break;
    case 3:
      if (
        (sn(e, t), xn(t), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Go(e.containerInfo);
        } catch (g) {
          Oe(t, t.return, g);
        }
      break;
    case 4:
      sn(e, t), xn(t);
      break;
    case 13:
      sn(e, t),
        xn(t),
        (i = t.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (ip = Ne())),
        r & 4 && _m(t);
      break;
    case 22:
      if (
        ((u = n !== null && n.memoizedState !== null),
        t.mode & 1 ? ((rt = (c = rt) || u), sn(e, t), (rt = c)) : sn(e, t),
        xn(t),
        r & 8192)
      ) {
        if (
          ((c = t.memoizedState !== null),
          (t.stateNode.isHidden = c) && !u && t.mode & 1)
        )
          for (U = t, u = t.child; u !== null; ) {
            for (d = U = u; U !== null; ) {
              switch (((h = U), (p = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ao(4, h, h.return);
                  break;
                case 1:
                  Ji(h, h.return);
                  var m = h.stateNode;
                  if (typeof m.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (e = r),
                        (m.props = e.memoizedProps),
                        (m.state = e.memoizedState),
                        m.componentWillUnmount();
                    } catch (g) {
                      Oe(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Ji(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    wm(d);
                    continue;
                  }
              }
              p !== null ? ((p.return = h), (U = p)) : wm(d);
            }
            u = u.sibling;
          }
        e: for (u = null, d = t; ; ) {
          if (d.tag === 5) {
            if (u === null) {
              u = d;
              try {
                (i = d.stateNode),
                  c
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Xy("display", o)));
              } catch (g) {
                Oe(t, t.return, g);
              }
            }
          } else if (d.tag === 6) {
            if (u === null)
              try {
                d.stateNode.nodeValue = c ? "" : d.memoizedProps;
              } catch (g) {
                Oe(t, t.return, g);
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
      sn(e, t), xn(t), r & 4 && _m(t);
      break;
    case 21:
      break;
    default:
      sn(e, t), xn(t);
  }
}
function xn(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (E2(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(I(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Wo(i, ""), (r.flags &= -33));
          var s = xm(t);
          Of(t, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = xm(t);
          Tf(t, a, o);
          break;
        default:
          throw Error(I(161));
      }
    } catch (l) {
      Oe(t, t.return, l);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function R3(t, e, n) {
  (U = t), k2(t);
}
function k2(t, e, n) {
  for (var r = (t.mode & 1) !== 0; U !== null; ) {
    var i = U,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Qa;
      if (!o) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || rt;
        a = Qa;
        var c = rt;
        if (((Qa = o), (rt = l) && !c))
          for (U = i; U !== null; )
            (o = U),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Em(i)
                : l !== null
                ? ((l.return = o), (U = l))
                : Em(i);
        for (; s !== null; ) (U = s), k2(s), (s = s.sibling);
        (U = i), (Qa = a), (rt = c);
      }
      bm(t);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (U = s)) : bm(t);
  }
}
function bm(t) {
  for (; U !== null; ) {
    var e = U;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              rt || nu(5, e);
              break;
            case 1:
              var r = e.stateNode;
              if (e.flags & 4 && !rt)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    e.elementType === e.type
                      ? n.memoizedProps
                      : on(e.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var s = e.updateQueue;
              s !== null && im(e, s, r);
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
                im(e, o, n);
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
                    d !== null && Go(d);
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
        rt || (e.flags & 512 && kf(e));
      } catch (h) {
        Oe(e, e.return, h);
      }
    }
    if (e === t) {
      U = null;
      break;
    }
    if (((n = e.sibling), n !== null)) {
      (n.return = e.return), (U = n);
      break;
    }
    U = e.return;
  }
}
function wm(t) {
  for (; U !== null; ) {
    var e = U;
    if (e === t) {
      U = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      (n.return = e.return), (U = n);
      break;
    }
    U = e.return;
  }
}
function Em(t) {
  for (; U !== null; ) {
    var e = U;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            nu(4, e);
          } catch (l) {
            Oe(e, n, l);
          }
          break;
        case 1:
          var r = e.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = e.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Oe(e, i, l);
            }
          }
          var s = e.return;
          try {
            kf(e);
          } catch (l) {
            Oe(e, s, l);
          }
          break;
        case 5:
          var o = e.return;
          try {
            kf(e);
          } catch (l) {
            Oe(e, o, l);
          }
      }
    } catch (l) {
      Oe(e, e.return, l);
    }
    if (e === t) {
      U = null;
      break;
    }
    var a = e.sibling;
    if (a !== null) {
      (a.return = e.return), (U = a);
      break;
    }
    U = e.return;
  }
}
var D3 = Math.ceil,
  hc = Zn.ReactCurrentDispatcher,
  np = Zn.ReactCurrentOwner,
  Xt = Zn.ReactCurrentBatchConfig,
  ce = 0,
  Ue = null,
  je = null,
  Ke = 0,
  jt = 0,
  Zi = Fr(0),
  Me = 0,
  ia = null,
  gi = 0,
  ru = 0,
  rp = 0,
  No = null,
  bt = null,
  ip = 0,
  vs = 1 / 0,
  Mn = null,
  pc = !1,
  Af = null,
  Cr = null,
  Ja = !1,
  gr = null,
  mc = 0,
  Po = 0,
  Nf = null,
  Dl = -1,
  Ml = 0;
function pt() {
  return ce & 6 ? Ne() : Dl !== -1 ? Dl : (Dl = Ne());
}
function kr(t) {
  return t.mode & 1
    ? ce & 2 && Ke !== 0
      ? Ke & -Ke
      : v3.transition !== null
      ? (Ml === 0 && (Ml = cv()), Ml)
      : ((t = pe),
        t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : gv(t.type))),
        t)
    : 1;
}
function hn(t, e, n, r) {
  if (50 < Po) throw ((Po = 0), (Nf = null), Error(I(185)));
  _a(t, n, r),
    (!(ce & 2) || t !== Ue) &&
      (t === Ue && (!(ce & 2) && (ru |= n), Me === 4 && hr(t, Ke)),
      Tt(t, r),
      n === 1 && ce === 0 && !(e.mode & 1) && ((vs = Ne() + 500), Zc && Br()));
}
function Tt(t, e) {
  var n = t.callbackNode;
  vE(t, e);
  var r = Jl(t, t === Ue ? Ke : 0);
  if (r === 0)
    n !== null && L0(n), (t.callbackNode = null), (t.callbackPriority = 0);
  else if (((e = r & -r), t.callbackPriority !== e)) {
    if ((n != null && L0(n), e === 1))
      t.tag === 0 ? y3(Sm.bind(null, t)) : Dv(Sm.bind(null, t)),
        h3(function () {
          !(ce & 6) && Br();
        }),
        (n = null);
    else {
      switch (uv(r)) {
        case 1:
          n = Nh;
          break;
        case 4:
          n = av;
          break;
        case 16:
          n = Ql;
          break;
        case 536870912:
          n = lv;
          break;
        default:
          n = Ql;
      }
      n = R2(n, T2.bind(null, t));
    }
    (t.callbackPriority = e), (t.callbackNode = n);
  }
}
function T2(t, e) {
  if (((Dl = -1), (Ml = 0), ce & 6)) throw Error(I(327));
  var n = t.callbackNode;
  if (ls() && t.callbackNode !== n) return null;
  var r = Jl(t, t === Ue ? Ke : 0);
  if (r === 0) return null;
  if (r & 30 || r & t.expiredLanes || e) e = gc(t, r);
  else {
    e = r;
    var i = ce;
    ce |= 2;
    var s = A2();
    (Ue !== t || Ke !== e) && ((Mn = null), (vs = Ne() + 500), ai(t, e));
    do
      try {
        F3();
        break;
      } catch (a) {
        O2(t, a);
      }
    while (!0);
    Wh(),
      (hc.current = s),
      (ce = i),
      je !== null ? (e = 0) : ((Ue = null), (Ke = 0), (e = Me));
  }
  if (e !== 0) {
    if (
      (e === 2 && ((i = nf(t)), i !== 0 && ((r = i), (e = Pf(t, i)))), e === 1)
    )
      throw ((n = ia), ai(t, 0), hr(t, r), Tt(t, Ne()), n);
    if (e === 6) hr(t, r);
    else {
      if (
        ((i = t.current.alternate),
        !(r & 30) &&
          !M3(i) &&
          ((e = gc(t, r)),
          e === 2 && ((s = nf(t)), s !== 0 && ((r = s), (e = Pf(t, s)))),
          e === 1))
      )
        throw ((n = ia), ai(t, 0), hr(t, r), Tt(t, Ne()), n);
      switch (((t.finishedWork = i), (t.finishedLanes = r), e)) {
        case 0:
        case 1:
          throw Error(I(345));
        case 2:
          qr(t, bt, Mn);
          break;
        case 3:
          if (
            (hr(t, r), (r & 130023424) === r && ((e = ip + 500 - Ne()), 10 < e))
          ) {
            if (Jl(t, 0) !== 0) break;
            if (((i = t.suspendedLanes), (i & r) !== r)) {
              pt(), (t.pingedLanes |= t.suspendedLanes & i);
              break;
            }
            t.timeoutHandle = df(qr.bind(null, t, bt, Mn), e);
            break;
          }
          qr(t, bt, Mn);
          break;
        case 4:
          if ((hr(t, r), (r & 4194240) === r)) break;
          for (e = t.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - fn(r);
            (s = 1 << o), (o = e[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = Ne() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * D3(r / 1960)) - r),
            10 < r)
          ) {
            t.timeoutHandle = df(qr.bind(null, t, bt, Mn), r);
            break;
          }
          qr(t, bt, Mn);
          break;
        case 5:
          qr(t, bt, Mn);
          break;
        default:
          throw Error(I(329));
      }
    }
  }
  return Tt(t, Ne()), t.callbackNode === n ? T2.bind(null, t) : null;
}
function Pf(t, e) {
  var n = No;
  return (
    t.current.memoizedState.isDehydrated && (ai(t, e).flags |= 256),
    (t = gc(t, e)),
    t !== 2 && ((e = bt), (bt = n), e !== null && Lf(e)),
    t
  );
}
function Lf(t) {
  bt === null ? (bt = t) : bt.push.apply(bt, t);
}
function M3(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!mn(s(), i)) return !1;
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
function hr(t, e) {
  for (
    e &= ~rp,
      e &= ~ru,
      t.suspendedLanes |= e,
      t.pingedLanes &= ~e,
      t = t.expirationTimes;
    0 < e;

  ) {
    var n = 31 - fn(e),
      r = 1 << n;
    (t[n] = -1), (e &= ~r);
  }
}
function Sm(t) {
  if (ce & 6) throw Error(I(327));
  ls();
  var e = Jl(t, 0);
  if (!(e & 1)) return Tt(t, Ne()), null;
  var n = gc(t, e);
  if (t.tag !== 0 && n === 2) {
    var r = nf(t);
    r !== 0 && ((e = r), (n = Pf(t, r)));
  }
  if (n === 1) throw ((n = ia), ai(t, 0), hr(t, e), Tt(t, Ne()), n);
  if (n === 6) throw Error(I(345));
  return (
    (t.finishedWork = t.current.alternate),
    (t.finishedLanes = e),
    qr(t, bt, Mn),
    Tt(t, Ne()),
    null
  );
}
function sp(t, e) {
  var n = ce;
  ce |= 1;
  try {
    return t(e);
  } finally {
    (ce = n), ce === 0 && ((vs = Ne() + 500), Zc && Br());
  }
}
function yi(t) {
  gr !== null && gr.tag === 0 && !(ce & 6) && ls();
  var e = ce;
  ce |= 1;
  var n = Xt.transition,
    r = pe;
  try {
    if (((Xt.transition = null), (pe = 1), t)) return t();
  } finally {
    (pe = r), (Xt.transition = n), (ce = e), !(ce & 6) && Br();
  }
}
function op() {
  (jt = Zi.current), xe(Zi);
}
function ai(t, e) {
  (t.finishedWork = null), (t.finishedLanes = 0);
  var n = t.timeoutHandle;
  if ((n !== -1 && ((t.timeoutHandle = -1), f3(n)), je !== null))
    for (n = je.return; n !== null; ) {
      var r = n;
      switch (($h(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && rc();
          break;
        case 3:
          gs(), xe(Ct), xe(at), qh();
          break;
        case 5:
          Kh(r);
          break;
        case 4:
          gs();
          break;
        case 13:
          xe(Ee);
          break;
        case 19:
          xe(Ee);
          break;
        case 10:
          Uh(r.type._context);
          break;
        case 22:
        case 23:
          op();
      }
      n = n.return;
    }
  if (
    ((Ue = t),
    (je = t = Tr(t.current, null)),
    (Ke = jt = e),
    (Me = 0),
    (ia = null),
    (rp = ru = gi = 0),
    (bt = No = null),
    ei !== null)
  ) {
    for (e = 0; e < ei.length; e++)
      if (((n = ei[e]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    ei = null;
  }
  return t;
}
function O2(t, e) {
  do {
    var n = je;
    try {
      if ((Wh(), (Ll.current = fc), dc)) {
        for (var r = Se.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        dc = !1;
      }
      if (
        ((mi = 0),
        (He = De = Se = null),
        (Oo = !1),
        (ta = 0),
        (np.current = null),
        n === null || n.return === null)
      ) {
        (Me = 1), (ia = e), (je = null);
        break;
      }
      e: {
        var s = t,
          o = n.return,
          a = n,
          l = e;
        if (
          ((e = Ke),
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
          var p = dm(o);
          if (p !== null) {
            (p.flags &= -257),
              fm(p, o, a, s, e),
              p.mode & 1 && um(s, c, e),
              (e = p),
              (l = c);
            var m = e.updateQueue;
            if (m === null) {
              var g = new Set();
              g.add(l), (e.updateQueue = g);
            } else m.add(l);
            break e;
          } else {
            if (!(e & 1)) {
              um(s, c, e), ap();
              break e;
            }
            l = Error(I(426));
          }
        } else if (be && a.mode & 1) {
          var v = dm(o);
          if (v !== null) {
            !(v.flags & 65536) && (v.flags |= 256),
              fm(v, o, a, s, e),
              zh(ys(l, a));
            break e;
          }
        }
        (s = l = ys(l, a)),
          Me !== 4 && (Me = 2),
          No === null ? (No = [s]) : No.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (e &= -e), (s.lanes |= e);
              var y = d2(s, l, e);
              rm(s, y);
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
                    (Cr === null || !Cr.has(_))))
              ) {
                (s.flags |= 65536), (e &= -e), (s.lanes |= e);
                var w = f2(s, a, e);
                rm(s, w);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      P2(n);
    } catch (E) {
      (e = E), je === n && n !== null && (je = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function A2() {
  var t = hc.current;
  return (hc.current = fc), t === null ? fc : t;
}
function ap() {
  (Me === 0 || Me === 3 || Me === 2) && (Me = 4),
    Ue === null || (!(gi & 268435455) && !(ru & 268435455)) || hr(Ue, Ke);
}
function gc(t, e) {
  var n = ce;
  ce |= 2;
  var r = A2();
  (Ue !== t || Ke !== e) && ((Mn = null), ai(t, e));
  do
    try {
      I3();
      break;
    } catch (i) {
      O2(t, i);
    }
  while (!0);
  if ((Wh(), (ce = n), (hc.current = r), je !== null)) throw Error(I(261));
  return (Ue = null), (Ke = 0), Me;
}
function I3() {
  for (; je !== null; ) N2(je);
}
function F3() {
  for (; je !== null && !cE(); ) N2(je);
}
function N2(t) {
  var e = j2(t.alternate, t, jt);
  (t.memoizedProps = t.pendingProps),
    e === null ? P2(t) : (je = e),
    (np.current = null);
}
function P2(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (((t = e.return), e.flags & 32768)) {
      if (((n = P3(n, e)), n !== null)) {
        (n.flags &= 32767), (je = n);
        return;
      }
      if (t !== null)
        (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
      else {
        (Me = 6), (je = null);
        return;
      }
    } else if (((n = N3(n, e, jt)), n !== null)) {
      je = n;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      je = e;
      return;
    }
    je = e = t;
  } while (e !== null);
  Me === 0 && (Me = 5);
}
function qr(t, e, n) {
  var r = pe,
    i = Xt.transition;
  try {
    (Xt.transition = null), (pe = 1), B3(t, e, n, r);
  } finally {
    (Xt.transition = i), (pe = r);
  }
  return null;
}
function B3(t, e, n, r) {
  do ls();
  while (gr !== null);
  if (ce & 6) throw Error(I(327));
  n = t.finishedWork;
  var i = t.finishedLanes;
  if (n === null) return null;
  if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
    throw Error(I(177));
  (t.callbackNode = null), (t.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (xE(t, s),
    t === Ue && ((je = Ue = null), (Ke = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ja ||
      ((Ja = !0),
      R2(Ql, function () {
        return ls(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Xt.transition), (Xt.transition = null);
    var o = pe;
    pe = 1;
    var a = ce;
    (ce |= 4),
      (np.current = null),
      j3(t, n),
      C2(n, t),
      s3(cf),
      (Zl = !!lf),
      (cf = lf = null),
      (t.current = n),
      R3(n),
      uE(),
      (ce = a),
      (pe = o),
      (Xt.transition = s);
  } else t.current = n;
  if (
    (Ja && ((Ja = !1), (gr = t), (mc = i)),
    (s = t.pendingLanes),
    s === 0 && (Cr = null),
    hE(n.stateNode),
    Tt(t, Ne()),
    e !== null)
  )
    for (r = t.onRecoverableError, n = 0; n < e.length; n++)
      (i = e[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (pc) throw ((pc = !1), (t = Af), (Af = null), t);
  return (
    mc & 1 && t.tag !== 0 && ls(),
    (s = t.pendingLanes),
    s & 1 ? (t === Nf ? Po++ : ((Po = 0), (Nf = t))) : (Po = 0),
    Br(),
    null
  );
}
function ls() {
  if (gr !== null) {
    var t = uv(mc),
      e = Xt.transition,
      n = pe;
    try {
      if (((Xt.transition = null), (pe = 16 > t ? 16 : t), gr === null))
        var r = !1;
      else {
        if (((t = gr), (gr = null), (mc = 0), ce & 6)) throw Error(I(331));
        var i = ce;
        for (ce |= 4, U = t.current; U !== null; ) {
          var s = U,
            o = s.child;
          if (U.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for (U = c; U !== null; ) {
                  var u = U;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ao(8, u, s);
                  }
                  var d = u.child;
                  if (d !== null) (d.return = u), (U = d);
                  else
                    for (; U !== null; ) {
                      u = U;
                      var h = u.sibling,
                        p = u.return;
                      if ((w2(u), u === c)) {
                        U = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = p), (U = h);
                        break;
                      }
                      U = p;
                    }
                }
              }
              var m = s.alternate;
              if (m !== null) {
                var g = m.child;
                if (g !== null) {
                  m.child = null;
                  do {
                    var v = g.sibling;
                    (g.sibling = null), (g = v);
                  } while (g !== null);
                }
              }
              U = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (U = o);
          else
            e: for (; U !== null; ) {
              if (((s = U), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ao(9, s, s.return);
                }
              var y = s.sibling;
              if (y !== null) {
                (y.return = s.return), (U = y);
                break e;
              }
              U = s.return;
            }
        }
        var x = t.current;
        for (U = x; U !== null; ) {
          o = U;
          var _ = o.child;
          if (o.subtreeFlags & 2064 && _ !== null) (_.return = o), (U = _);
          else
            e: for (o = x; U !== null; ) {
              if (((a = U), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      nu(9, a);
                  }
                } catch (E) {
                  Oe(a, a.return, E);
                }
              if (a === o) {
                U = null;
                break e;
              }
              var w = a.sibling;
              if (w !== null) {
                (w.return = a.return), (U = w);
                break e;
              }
              U = a.return;
            }
        }
        if (
          ((ce = i), Br(), Sn && typeof Sn.onPostCommitFiberRoot == "function")
        )
          try {
            Sn.onPostCommitFiberRoot(Kc, t);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (pe = n), (Xt.transition = e);
    }
  }
  return !1;
}
function Cm(t, e, n) {
  (e = ys(n, e)),
    (e = d2(t, e, 1)),
    (t = Sr(t, e, 1)),
    (e = pt()),
    t !== null && (_a(t, 1, e), Tt(t, e));
}
function Oe(t, e, n) {
  if (t.tag === 3) Cm(t, t, n);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        Cm(e, t, n);
        break;
      } else if (e.tag === 1) {
        var r = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Cr === null || !Cr.has(r)))
        ) {
          (t = ys(n, t)),
            (t = f2(e, t, 1)),
            (e = Sr(e, t, 1)),
            (t = pt()),
            e !== null && (_a(e, 1, t), Tt(e, t));
          break;
        }
      }
      e = e.return;
    }
}
function $3(t, e, n) {
  var r = t.pingCache;
  r !== null && r.delete(e),
    (e = pt()),
    (t.pingedLanes |= t.suspendedLanes & n),
    Ue === t &&
      (Ke & n) === n &&
      (Me === 4 || (Me === 3 && (Ke & 130023424) === Ke && 500 > Ne() - ip)
        ? ai(t, 0)
        : (rp |= n)),
    Tt(t, e);
}
function L2(t, e) {
  e === 0 &&
    (t.mode & 1
      ? ((e = Ha), (Ha <<= 1), !(Ha & 130023424) && (Ha = 4194304))
      : (e = 1));
  var n = pt();
  (t = Kn(t, e)), t !== null && (_a(t, e, n), Tt(t, n));
}
function z3(t) {
  var e = t.memoizedState,
    n = 0;
  e !== null && (n = e.retryLane), L2(t, n);
}
function H3(t, e) {
  var n = 0;
  switch (t.tag) {
    case 13:
      var r = t.stateNode,
        i = t.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = t.stateNode;
      break;
    default:
      throw Error(I(314));
  }
  r !== null && r.delete(e), L2(t, n);
}
var j2;
j2 = function (t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || Ct.current) St = !0;
    else {
      if (!(t.lanes & n) && !(e.flags & 128)) return (St = !1), A3(t, e, n);
      St = !!(t.flags & 131072);
    }
  else (St = !1), be && e.flags & 1048576 && Mv(e, oc, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var r = e.type;
      Rl(t, e), (t = e.pendingProps);
      var i = hs(e, at.current);
      as(e, n), (i = Qh(null, e, r, t, i, n));
      var s = Jh();
      return (
        (e.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            kt(r) ? ((s = !0), ic(e)) : (s = !1),
            (e.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Yh(e),
            (i.updater = eu),
            (e.stateNode = i),
            (i._reactInternals = e),
            vf(e, r, t, n),
            (e = bf(null, e, r, !0, s, n)))
          : ((e.tag = 0), be && s && Bh(e), dt(null, e, i, n), (e = e.child)),
        e
      );
    case 16:
      r = e.elementType;
      e: {
        switch (
          (Rl(t, e),
          (t = e.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (e.type = r),
          (i = e.tag = U3(r)),
          (t = on(r, t)),
          i)
        ) {
          case 0:
            e = _f(null, e, r, t, n);
            break e;
          case 1:
            e = mm(null, e, r, t, n);
            break e;
          case 11:
            e = hm(null, e, r, t, n);
            break e;
          case 14:
            e = pm(null, e, r, on(r.type, t), n);
            break e;
        }
        throw Error(I(306, r, ""));
      }
      return e;
    case 0:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : on(r, i)),
        _f(t, e, r, i, n)
      );
    case 1:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : on(r, i)),
        mm(t, e, r, i, n)
      );
    case 3:
      e: {
        if ((g2(e), t === null)) throw Error(I(387));
        (r = e.pendingProps),
          (s = e.memoizedState),
          (i = s.element),
          $v(t, e),
          cc(e, r, null, n);
        var o = e.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (e.updateQueue.baseState = s),
            (e.memoizedState = s),
            e.flags & 256)
          ) {
            (i = ys(Error(I(423)), e)), (e = gm(t, e, r, n, i));
            break e;
          } else if (r !== i) {
            (i = ys(Error(I(424)), e)), (e = gm(t, e, r, n, i));
            break e;
          } else
            for (
              Dt = Er(e.stateNode.containerInfo.firstChild),
                Mt = e,
                be = !0,
                ln = null,
                n = Uv(e, null, r, n),
                e.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ps(), r === i)) {
            e = qn(t, e, n);
            break e;
          }
          dt(t, e, r, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        Vv(e),
        t === null && mf(e),
        (r = e.type),
        (i = e.pendingProps),
        (s = t !== null ? t.memoizedProps : null),
        (o = i.children),
        uf(r, i) ? (o = null) : s !== null && uf(r, s) && (e.flags |= 32),
        m2(t, e),
        dt(t, e, o, n),
        e.child
      );
    case 6:
      return t === null && mf(e), null;
    case 13:
      return y2(t, e, n);
    case 4:
      return (
        Gh(e, e.stateNode.containerInfo),
        (r = e.pendingProps),
        t === null ? (e.child = ms(e, null, r, n)) : dt(t, e, r, n),
        e.child
      );
    case 11:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : on(r, i)),
        hm(t, e, r, i, n)
      );
    case 7:
      return dt(t, e, e.pendingProps, n), e.child;
    case 8:
      return dt(t, e, e.pendingProps.children, n), e.child;
    case 12:
      return dt(t, e, e.pendingProps.children, n), e.child;
    case 10:
      e: {
        if (
          ((r = e.type._context),
          (i = e.pendingProps),
          (s = e.memoizedProps),
          (o = i.value),
          me(ac, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (mn(s.value, o)) {
            if (s.children === i.children && !Ct.current) {
              e = qn(t, e, n);
              break e;
            }
          } else
            for (s = e.child, s !== null && (s.return = e); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      (l = Hn(-1, n & -n)), (l.tag = 2);
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
                      gf(s.return, n, e),
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
                  gf(o, n, e),
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
        dt(t, e, i.children, n), (e = e.child);
      }
      return e;
    case 9:
      return (
        (i = e.type),
        (r = e.pendingProps.children),
        as(e, n),
        (i = Jt(i)),
        (r = r(i)),
        (e.flags |= 1),
        dt(t, e, r, n),
        e.child
      );
    case 14:
      return (
        (r = e.type),
        (i = on(r, e.pendingProps)),
        (i = on(r.type, i)),
        pm(t, e, r, i, n)
      );
    case 15:
      return h2(t, e, e.type, e.pendingProps, n);
    case 17:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : on(r, i)),
        Rl(t, e),
        (e.tag = 1),
        kt(r) ? ((t = !0), ic(e)) : (t = !1),
        as(e, n),
        Hv(e, r, i),
        vf(e, r, i, n),
        bf(null, e, r, !0, t, n)
      );
    case 19:
      return v2(t, e, n);
    case 22:
      return p2(t, e, n);
  }
  throw Error(I(156, e.tag));
};
function R2(t, e) {
  return ov(t, e);
}
function W3(t, e, n, r) {
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
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Gt(t, e, n, r) {
  return new W3(t, e, n, r);
}
function lp(t) {
  return (t = t.prototype), !(!t || !t.isReactComponent);
}
function U3(t) {
  if (typeof t == "function") return lp(t) ? 1 : 0;
  if (t != null) {
    if (((t = t.$$typeof), t === Th)) return 11;
    if (t === Oh) return 14;
  }
  return 2;
}
function Tr(t, e) {
  var n = t.alternate;
  return (
    n === null
      ? ((n = Gt(t.tag, e, t.key, t.mode)),
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
function Il(t, e, n, r, i, s) {
  var o = 2;
  if (((r = t), typeof t == "function")) lp(t) && (o = 1);
  else if (typeof t == "string") o = 5;
  else
    e: switch (t) {
      case Wi:
        return li(n.children, i, s, e);
      case kh:
        (o = 8), (i |= 8);
        break;
      case zd:
        return (
          (t = Gt(12, n, e, i | 2)), (t.elementType = zd), (t.lanes = s), t
        );
      case Hd:
        return (t = Gt(13, n, e, i)), (t.elementType = Hd), (t.lanes = s), t;
      case Wd:
        return (t = Gt(19, n, e, i)), (t.elementType = Wd), (t.lanes = s), t;
      case Wy:
        return iu(n, i, s, e);
      default:
        if (typeof t == "object" && t !== null)
          switch (t.$$typeof) {
            case zy:
              o = 10;
              break e;
            case Hy:
              o = 9;
              break e;
            case Th:
              o = 11;
              break e;
            case Oh:
              o = 14;
              break e;
            case lr:
              (o = 16), (r = null);
              break e;
          }
        throw Error(I(130, t == null ? t : typeof t, ""));
    }
  return (
    (e = Gt(o, n, e, i)), (e.elementType = t), (e.type = r), (e.lanes = s), e
  );
}
function li(t, e, n, r) {
  return (t = Gt(7, t, r, e)), (t.lanes = n), t;
}
function iu(t, e, n, r) {
  return (
    (t = Gt(22, t, r, e)),
    (t.elementType = Wy),
    (t.lanes = n),
    (t.stateNode = { isHidden: !1 }),
    t
  );
}
function ed(t, e, n) {
  return (t = Gt(6, t, null, e)), (t.lanes = n), t;
}
function td(t, e, n) {
  return (
    (e = Gt(4, t.children !== null ? t.children : [], t.key, e)),
    (e.lanes = n),
    (e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation,
    }),
    e
  );
}
function V3(t, e, n, r, i) {
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
    (this.eventTimes = Du(0)),
    (this.expirationTimes = Du(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Du(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function cp(t, e, n, r, i, s, o, a, l) {
  return (
    (t = new V3(t, e, n, a, l)),
    e === 1 ? ((e = 1), s === !0 && (e |= 8)) : (e = 0),
    (s = Gt(3, null, null, e)),
    (t.current = s),
    (s.stateNode = t),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Yh(s),
    t
  );
}
function Y3(t, e, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Hi,
    key: r == null ? null : "" + r,
    children: t,
    containerInfo: e,
    implementation: n,
  };
}
function D2(t) {
  if (!t) return Pr;
  t = t._reactInternals;
  e: {
    if (Ei(t) !== t || t.tag !== 1) throw Error(I(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (kt(e.type)) {
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
    if (kt(n)) return Rv(t, n, e);
  }
  return e;
}
function M2(t, e, n, r, i, s, o, a, l) {
  return (
    (t = cp(n, r, !0, t, i, s, o, a, l)),
    (t.context = D2(null)),
    (n = t.current),
    (r = pt()),
    (i = kr(n)),
    (s = Hn(r, i)),
    (s.callback = e ?? null),
    Sr(n, s, i),
    (t.current.lanes = i),
    _a(t, i, r),
    Tt(t, r),
    t
  );
}
function su(t, e, n, r) {
  var i = e.current,
    s = pt(),
    o = kr(i);
  return (
    (n = D2(n)),
    e.context === null ? (e.context = n) : (e.pendingContext = n),
    (e = Hn(s, o)),
    (e.payload = { element: t }),
    (r = r === void 0 ? null : r),
    r !== null && (e.callback = r),
    (t = Sr(i, e, o)),
    t !== null && (hn(t, i, o, s), Pl(t, i, o)),
    o
  );
}
function yc(t) {
  if (((t = t.current), !t.child)) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function km(t, e) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function up(t, e) {
  km(t, e), (t = t.alternate) && km(t, e);
}
function G3() {
  return null;
}
var I2 =
  typeof reportError == "function"
    ? reportError
    : function (t) {
        console.error(t);
      };
function dp(t) {
  this._internalRoot = t;
}
ou.prototype.render = dp.prototype.render = function (t) {
  var e = this._internalRoot;
  if (e === null) throw Error(I(409));
  su(t, e, null, null);
};
ou.prototype.unmount = dp.prototype.unmount = function () {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    yi(function () {
      su(null, t, null, null);
    }),
      (e[Gn] = null);
  }
};
function ou(t) {
  this._internalRoot = t;
}
ou.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var e = hv();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < fr.length && e !== 0 && e < fr[n].priority; n++);
    fr.splice(n, 0, t), n === 0 && mv(t);
  }
};
function fp(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function au(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
  );
}
function Tm() {}
function K3(t, e, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var c = yc(o);
        s.call(c);
      };
    }
    var o = M2(e, r, t, 0, null, !1, !1, "", Tm);
    return (
      (t._reactRootContainer = o),
      (t[Gn] = o.current),
      Xo(t.nodeType === 8 ? t.parentNode : t),
      yi(),
      o
    );
  }
  for (; (i = t.lastChild); ) t.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = yc(l);
      a.call(c);
    };
  }
  var l = cp(t, 0, !1, null, null, !1, !1, "", Tm);
  return (
    (t._reactRootContainer = l),
    (t[Gn] = l.current),
    Xo(t.nodeType === 8 ? t.parentNode : t),
    yi(function () {
      su(e, l, n, r);
    }),
    l
  );
}
function lu(t, e, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = yc(o);
        a.call(l);
      };
    }
    su(e, o, t, i);
  } else o = K3(n, e, t, i, r);
  return yc(o);
}
dv = function (t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = mo(e.pendingLanes);
        n !== 0 &&
          (Ph(e, n | 1), Tt(e, Ne()), !(ce & 6) && ((vs = Ne() + 500), Br()));
      }
      break;
    case 13:
      yi(function () {
        var r = Kn(t, 1);
        if (r !== null) {
          var i = pt();
          hn(r, t, 1, i);
        }
      }),
        up(t, 1);
  }
};
Lh = function (t) {
  if (t.tag === 13) {
    var e = Kn(t, 134217728);
    if (e !== null) {
      var n = pt();
      hn(e, t, 134217728, n);
    }
    up(t, 134217728);
  }
};
fv = function (t) {
  if (t.tag === 13) {
    var e = kr(t),
      n = Kn(t, e);
    if (n !== null) {
      var r = pt();
      hn(n, t, e, r);
    }
    up(t, e);
  }
};
hv = function () {
  return pe;
};
pv = function (t, e) {
  var n = pe;
  try {
    return (pe = t), e();
  } finally {
    pe = n;
  }
};
Zd = function (t, e, n) {
  switch (e) {
    case "input":
      if ((Yd(t, n), (e = n.name), n.type === "radio" && e != null)) {
        for (n = t; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + e) + '][type="radio"]',
          ),
            e = 0;
          e < n.length;
          e++
        ) {
          var r = n[e];
          if (r !== t && r.form === t.form) {
            var i = Jc(r);
            if (!i) throw Error(I(90));
            Vy(r), Yd(r, i);
          }
        }
      }
      break;
    case "textarea":
      Gy(t, n);
      break;
    case "select":
      (e = n.value), e != null && rs(t, !!n.multiple, e, !1);
  }
};
ev = sp;
tv = yi;
var q3 = { usingClientEntryPoint: !1, Events: [wa, Gi, Jc, Jy, Zy, sp] },
  Js = {
    findFiberByHostInstance: Zr,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  X3 = {
    bundleType: Js.bundleType,
    version: Js.version,
    rendererPackageName: Js.rendererPackageName,
    rendererConfig: Js.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Zn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return (t = iv(t)), t === null ? null : t.stateNode;
    },
    findFiberByHostInstance: Js.findFiberByHostInstance || G3,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Za = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Za.isDisabled && Za.supportsFiber)
    try {
      (Kc = Za.inject(X3)), (Sn = Za);
    } catch {}
}
Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q3;
Ht.createPortal = function (t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!fp(e)) throw Error(I(200));
  return Y3(t, e, null, n);
};
Ht.createRoot = function (t, e) {
  if (!fp(t)) throw Error(I(299));
  var n = !1,
    r = "",
    i = I2;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (n = !0),
      e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
    (e = cp(t, 1, !1, null, null, n, !1, r, i)),
    (t[Gn] = e.current),
    Xo(t.nodeType === 8 ? t.parentNode : t),
    new dp(e)
  );
};
Ht.findDOMNode = function (t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function"
      ? Error(I(188))
      : ((t = Object.keys(t).join(",")), Error(I(268, t)));
  return (t = iv(e)), (t = t === null ? null : t.stateNode), t;
};
Ht.flushSync = function (t) {
  return yi(t);
};
Ht.hydrate = function (t, e, n) {
  if (!au(e)) throw Error(I(200));
  return lu(null, t, e, !0, n);
};
Ht.hydrateRoot = function (t, e, n) {
  if (!fp(t)) throw Error(I(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = I2;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (e = M2(e, null, t, 1, n ?? null, i, !1, s, o)),
    (t[Gn] = e.current),
    Xo(t),
    r)
  )
    for (t = 0; t < r.length; t++)
      (n = r[t]),
        (i = n._getVersion),
        (i = i(n._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [n, i])
          : e.mutableSourceEagerHydrationData.push(n, i);
  return new ou(e);
};
Ht.render = function (t, e, n) {
  if (!au(e)) throw Error(I(200));
  return lu(null, t, e, !1, n);
};
Ht.unmountComponentAtNode = function (t) {
  if (!au(t)) throw Error(I(40));
  return t._reactRootContainer
    ? (yi(function () {
        lu(null, null, t, !1, function () {
          (t._reactRootContainer = null), (t[Gn] = null);
        });
      }),
      !0)
    : !1;
};
Ht.unstable_batchedUpdates = sp;
Ht.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
  if (!au(n)) throw Error(I(200));
  if (t == null || t._reactInternals === void 0) throw Error(I(38));
  return lu(t, e, n, !1, r);
};
Ht.version = "18.2.0-next-9e3b772b8-20220608";
function F2() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(F2);
    } catch (t) {
      console.error(t);
    }
}
F2(), (My.exports = Ht);
var B2 = My.exports;
const es = Jn(B2);
var Om = B2;
(Bd.createRoot = Om.createRoot), (Bd.hydrateRoot = Om.hydrateRoot);
/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function sa() {
  return (
    (sa = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    sa.apply(this, arguments)
  );
}
var yr;
(function (t) {
  (t.Pop = "POP"), (t.Push = "PUSH"), (t.Replace = "REPLACE");
})(yr || (yr = {}));
const Am = "popstate";
function Q3(t) {
  t === void 0 && (t = {});
  function e(r, i) {
    let { pathname: s, search: o, hash: a } = r.location;
    return jf(
      "",
      { pathname: s, search: o, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default",
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : vc(i);
  }
  return Z3(e, n, null, t);
}
function Re(t, e) {
  if (t === !1 || t === null || typeof t > "u") throw new Error(e);
}
function hp(t, e) {
  if (!t) {
    typeof console < "u" && console.warn(e);
    try {
      throw new Error(e);
    } catch {}
  }
}
function J3() {
  return Math.random().toString(36).substr(2, 8);
}
function Nm(t, e) {
  return { usr: t.state, key: t.key, idx: e };
}
function jf(t, e, n, r) {
  return (
    n === void 0 && (n = null),
    sa(
      { pathname: typeof t == "string" ? t : t.pathname, search: "", hash: "" },
      typeof e == "string" ? Ds(e) : e,
      { state: n, key: (e && e.key) || r || J3() },
    )
  );
}
function vc(t) {
  let { pathname: e = "/", search: n = "", hash: r = "" } = t;
  return (
    n && n !== "?" && (e += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r),
    e
  );
}
function Ds(t) {
  let e = {};
  if (t) {
    let n = t.indexOf("#");
    n >= 0 && ((e.hash = t.substr(n)), (t = t.substr(0, n)));
    let r = t.indexOf("?");
    r >= 0 && ((e.search = t.substr(r)), (t = t.substr(0, r))),
      t && (e.pathname = t);
  }
  return e;
}
function Z3(t, e, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    o = i.history,
    a = yr.Pop,
    l = null,
    c = u();
  c == null && ((c = 0), o.replaceState(sa({}, o.state, { idx: c }), ""));
  function u() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    a = yr.Pop;
    let v = u(),
      y = v == null ? null : v - c;
    (c = v), l && l({ action: a, location: g.location, delta: y });
  }
  function h(v, y) {
    a = yr.Push;
    let x = jf(g.location, v, y);
    c = u() + 1;
    let _ = Nm(x, c),
      w = g.createHref(x);
    try {
      o.pushState(_, "", w);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      i.location.assign(w);
    }
    s && l && l({ action: a, location: g.location, delta: 1 });
  }
  function p(v, y) {
    a = yr.Replace;
    let x = jf(g.location, v, y);
    c = u();
    let _ = Nm(x, c),
      w = g.createHref(x);
    o.replaceState(_, "", w),
      s && l && l({ action: a, location: g.location, delta: 0 });
  }
  function m(v) {
    let y = i.location.origin !== "null" ? i.location.origin : i.location.href,
      x = typeof v == "string" ? v : vc(v);
    return (
      Re(
        y,
        "No window.location.(origin|href) available to create URL for href: " +
          x,
      ),
      new URL(x, y)
    );
  }
  let g = {
    get action() {
      return a;
    },
    get location() {
      return t(i, o);
    },
    listen(v) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Am, d),
        (l = v),
        () => {
          i.removeEventListener(Am, d), (l = null);
        }
      );
    },
    createHref(v) {
      return e(i, v);
    },
    createURL: m,
    encodeLocation(v) {
      let y = m(v);
      return { pathname: y.pathname, search: y.search, hash: y.hash };
    },
    push: h,
    replace: p,
    go(v) {
      return o.go(v);
    },
  };
  return g;
}
var Pm;
(function (t) {
  (t.data = "data"),
    (t.deferred = "deferred"),
    (t.redirect = "redirect"),
    (t.error = "error");
})(Pm || (Pm = {}));
function eS(t, e, n) {
  n === void 0 && (n = "/");
  let r = typeof e == "string" ? Ds(e) : e,
    i = pp(r.pathname || "/", n);
  if (i == null) return null;
  let s = $2(t);
  tS(s);
  let o = null;
  for (let a = 0; o == null && a < s.length; ++a) o = uS(s[a], hS(i));
  return o;
}
function $2(t, e, n, r) {
  e === void 0 && (e = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (s, o, a) => {
    let l = {
      relativePath: a === void 0 ? s.path || "" : a,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    };
    l.relativePath.startsWith("/") &&
      (Re(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let c = Or([r, l.relativePath]),
      u = n.concat(l);
    s.children &&
      s.children.length > 0 &&
      (Re(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".'),
      ),
      $2(s.children, e, u, c)),
      !(s.path == null && !s.index) &&
        e.push({ path: c, score: lS(c, s.index), routesMeta: u });
  };
  return (
    t.forEach((s, o) => {
      var a;
      if (s.path === "" || !((a = s.path) != null && a.includes("?"))) i(s, o);
      else for (let l of z2(s.path)) i(s, o, l);
    }),
    e
  );
}
function z2(t) {
  let e = t.split("/");
  if (e.length === 0) return [];
  let [n, ...r] = e,
    i = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [s, ""] : [s];
  let o = z2(r.join("/")),
    a = [];
  return (
    a.push(...o.map((l) => (l === "" ? s : [s, l].join("/")))),
    i && a.push(...o),
    a.map((l) => (t.startsWith("/") && l === "" ? "/" : l))
  );
}
function tS(t) {
  t.sort((e, n) =>
    e.score !== n.score
      ? n.score - e.score
      : cS(
          e.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const nS = /^:\w+$/,
  rS = 3,
  iS = 2,
  sS = 1,
  oS = 10,
  aS = -2,
  Lm = (t) => t === "*";
function lS(t, e) {
  let n = t.split("/"),
    r = n.length;
  return (
    n.some(Lm) && (r += aS),
    e && (r += iS),
    n
      .filter((i) => !Lm(i))
      .reduce((i, s) => i + (nS.test(s) ? rS : s === "" ? sS : oS), r)
  );
}
function cS(t, e) {
  return t.length === e.length && t.slice(0, -1).every((r, i) => r === e[i])
    ? t[t.length - 1] - e[e.length - 1]
    : 0;
}
function uS(t, e) {
  let { routesMeta: n } = t,
    r = {},
    i = "/",
    s = [];
  for (let o = 0; o < n.length; ++o) {
    let a = n[o],
      l = o === n.length - 1,
      c = i === "/" ? e : e.slice(i.length) || "/",
      u = dS(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: l },
        c,
      );
    if (!u) return null;
    Object.assign(r, u.params);
    let d = a.route;
    s.push({
      params: r,
      pathname: Or([i, u.pathname]),
      pathnameBase: yS(Or([i, u.pathnameBase])),
      route: d,
    }),
      u.pathnameBase !== "/" && (i = Or([i, u.pathnameBase]));
  }
  return s;
}
function dS(t, e) {
  typeof t == "string" && (t = { path: t, caseSensitive: !1, end: !0 });
  let [n, r] = fS(t.path, t.caseSensitive, t.end),
    i = e.match(n);
  if (!i) return null;
  let s = i[0],
    o = s.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((c, u, d) => {
      if (u === "*") {
        let h = a[d] || "";
        o = s.slice(0, s.length - h.length).replace(/(.)\/+$/, "$1");
      }
      return (c[u] = pS(a[d] || "", u)), c;
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: t,
  };
}
function fS(t, e, n) {
  e === void 0 && (e = !1),
    n === void 0 && (n = !0),
    hp(
      t === "*" || !t.endsWith("*") || t.endsWith("/*"),
      'Route path "' +
        t +
        '" will be treated as if it were ' +
        ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'),
    );
  let r = [],
    i =
      "^" +
      t
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (o, a) => (r.push(a), "/([^\\/]+)"));
  return (
    t.endsWith("*")
      ? (r.push("*"),
        (i += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : t !== "" && t !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, e ? void 0 : "i"), r]
  );
}
function hS(t) {
  try {
    return decodeURI(t);
  } catch (e) {
    return (
      hp(
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
function pS(t, e) {
  try {
    return decodeURIComponent(t);
  } catch (n) {
    return (
      hp(
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
function pp(t, e) {
  if (e === "/") return t;
  if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
  let n = e.endsWith("/") ? e.length - 1 : e.length,
    r = t.charAt(n);
  return r && r !== "/" ? null : t.slice(n) || "/";
}
function mS(t, e) {
  e === void 0 && (e = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof t == "string" ? Ds(t) : t;
  return {
    pathname: n ? (n.startsWith("/") ? n : gS(n, e)) : e,
    search: vS(r),
    hash: xS(i),
  };
}
function gS(t, e) {
  let n = e.replace(/\/+$/, "").split("/");
  return (
    t.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function nd(t, e, n, r) {
  return (
    "Cannot include a '" +
    t +
    "' character in a manually specified " +
    ("`to." +
      e +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function H2(t) {
  return t.filter(
    (e, n) => n === 0 || (e.route.path && e.route.path.length > 0),
  );
}
function W2(t, e, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof t == "string"
    ? (i = Ds(t))
    : ((i = sa({}, t)),
      Re(
        !i.pathname || !i.pathname.includes("?"),
        nd("?", "pathname", "search", i),
      ),
      Re(
        !i.pathname || !i.pathname.includes("#"),
        nd("#", "pathname", "hash", i),
      ),
      Re(!i.search || !i.search.includes("#"), nd("#", "search", "hash", i)));
  let s = t === "" || i.pathname === "",
    o = s ? "/" : i.pathname,
    a;
  if (r || o == null) a = n;
  else {
    let d = e.length - 1;
    if (o.startsWith("..")) {
      let h = o.split("/");
      for (; h[0] === ".."; ) h.shift(), (d -= 1);
      i.pathname = h.join("/");
    }
    a = d >= 0 ? e[d] : "/";
  }
  let l = mS(i, a),
    c = o && o !== "/" && o.endsWith("/"),
    u = (s || o === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (c || u) && (l.pathname += "/"), l;
}
const Or = (t) => t.join("/").replace(/\/\/+/g, "/"),
  yS = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"),
  vS = (t) => (!t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t),
  xS = (t) => (!t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t);
function _S(t) {
  return (
    t != null &&
    typeof t.status == "number" &&
    typeof t.statusText == "string" &&
    typeof t.internal == "boolean" &&
    "data" in t
  );
}
const U2 = ["post", "put", "patch", "delete"];
new Set(U2);
const bS = ["get", ...U2];
new Set(bS);
/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function xc() {
  return (
    (xc = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    xc.apply(this, arguments)
  );
}
const mp = b.createContext(null),
  V2 = b.createContext(null),
  Si = b.createContext(null),
  cu = b.createContext(null),
  Ci = b.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Y2 = b.createContext(null);
function wS(t, e) {
  let { relative: n } = e === void 0 ? {} : e;
  Sa() || Re(!1);
  let { basename: r, navigator: i } = b.useContext(Si),
    { hash: s, pathname: o, search: a } = yp(t, { relative: n }),
    l = o;
  return (
    r !== "/" && (l = o === "/" ? r : Or([r, o])),
    i.createHref({ pathname: l, search: a, hash: s })
  );
}
function Sa() {
  return b.useContext(cu) != null;
}
function Ms() {
  return Sa() || Re(!1), b.useContext(cu).location;
}
function G2(t) {
  b.useContext(Si).static || b.useLayoutEffect(t);
}
function gp() {
  let { isDataRoute: t } = b.useContext(Ci);
  return t ? DS() : ES();
}
function ES() {
  Sa() || Re(!1);
  let t = b.useContext(mp),
    { basename: e, navigator: n } = b.useContext(Si),
    { matches: r } = b.useContext(Ci),
    { pathname: i } = Ms(),
    s = JSON.stringify(H2(r).map((l) => l.pathnameBase)),
    o = b.useRef(!1);
  return (
    G2(() => {
      o.current = !0;
    }),
    b.useCallback(
      function (l, c) {
        if ((c === void 0 && (c = {}), !o.current)) return;
        if (typeof l == "number") {
          n.go(l);
          return;
        }
        let u = W2(l, JSON.parse(s), i, c.relative === "path");
        t == null &&
          e !== "/" &&
          (u.pathname = u.pathname === "/" ? e : Or([e, u.pathname])),
          (c.replace ? n.replace : n.push)(u, c.state, c);
      },
      [e, n, s, i, t],
    )
  );
}
function yp(t, e) {
  let { relative: n } = e === void 0 ? {} : e,
    { matches: r } = b.useContext(Ci),
    { pathname: i } = Ms(),
    s = JSON.stringify(H2(r).map((o) => o.pathnameBase));
  return b.useMemo(() => W2(t, JSON.parse(s), i, n === "path"), [t, s, i, n]);
}
function SS(t, e) {
  return CS(t, e);
}
function CS(t, e, n) {
  Sa() || Re(!1);
  let { navigator: r } = b.useContext(Si),
    { matches: i } = b.useContext(Ci),
    s = i[i.length - 1],
    o = s ? s.params : {};
  s && s.pathname;
  let a = s ? s.pathnameBase : "/";
  s && s.route;
  let l = Ms(),
    c;
  if (e) {
    var u;
    let g = typeof e == "string" ? Ds(e) : e;
    a === "/" || ((u = g.pathname) != null && u.startsWith(a)) || Re(!1),
      (c = g);
  } else c = l;
  let d = c.pathname || "/",
    h = a === "/" ? d : d.slice(a.length) || "/",
    p = eS(t, { pathname: h }),
    m = NS(
      p &&
        p.map((g) =>
          Object.assign({}, g, {
            params: Object.assign({}, o, g.params),
            pathname: Or([
              a,
              r.encodeLocation
                ? r.encodeLocation(g.pathname).pathname
                : g.pathname,
            ]),
            pathnameBase:
              g.pathnameBase === "/"
                ? a
                : Or([
                    a,
                    r.encodeLocation
                      ? r.encodeLocation(g.pathnameBase).pathname
                      : g.pathnameBase,
                  ]),
          }),
        ),
      i,
      n,
    );
  return e && m
    ? b.createElement(
        cu.Provider,
        {
          value: {
            location: xc(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c,
            ),
            navigationType: yr.Pop,
          },
        },
        m,
      )
    : m;
}
function kS() {
  let t = RS(),
    e = _S(t)
      ? t.status + " " + t.statusText
      : t instanceof Error
      ? t.message
      : JSON.stringify(t),
    n = t instanceof Error ? t.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return b.createElement(
    b.Fragment,
    null,
    b.createElement("h2", null, "Unexpected Application Error!"),
    b.createElement("h3", { style: { fontStyle: "italic" } }, e),
    n ? b.createElement("pre", { style: i }, n) : null,
    null,
  );
}
const TS = b.createElement(kS, null);
class OS extends b.Component {
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
          Ci.Provider,
          { value: this.props.routeContext },
          b.createElement(Y2.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function AS(t) {
  let { routeContext: e, match: n, children: r } = t,
    i = b.useContext(mp);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    b.createElement(Ci.Provider, { value: e }, r)
  );
}
function NS(t, e, n) {
  var r;
  if ((e === void 0 && (e = []), n === void 0 && (n = null), t == null)) {
    var i;
    if ((i = n) != null && i.errors) t = n.matches;
    else return null;
  }
  let s = t,
    o = (r = n) == null ? void 0 : r.errors;
  if (o != null) {
    let a = s.findIndex(
      (l) => l.route.id && (o == null ? void 0 : o[l.route.id]),
    );
    a >= 0 || Re(!1), (s = s.slice(0, Math.min(s.length, a + 1)));
  }
  return s.reduceRight((a, l, c) => {
    let u = l.route.id ? (o == null ? void 0 : o[l.route.id]) : null,
      d = null;
    n && (d = l.route.errorElement || TS);
    let h = e.concat(s.slice(0, c + 1)),
      p = () => {
        let m;
        return (
          u
            ? (m = d)
            : l.route.Component
            ? (m = b.createElement(l.route.Component, null))
            : l.route.element
            ? (m = l.route.element)
            : (m = a),
          b.createElement(AS, {
            match: l,
            routeContext: { outlet: a, matches: h, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (l.route.ErrorBoundary || l.route.errorElement || c === 0)
      ? b.createElement(OS, {
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
var Rf;
(function (t) {
  (t.UseBlocker = "useBlocker"),
    (t.UseRevalidator = "useRevalidator"),
    (t.UseNavigateStable = "useNavigate");
})(Rf || (Rf = {}));
var oa;
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
})(oa || (oa = {}));
function PS(t) {
  let e = b.useContext(mp);
  return e || Re(!1), e;
}
function LS(t) {
  let e = b.useContext(V2);
  return e || Re(!1), e;
}
function jS(t) {
  let e = b.useContext(Ci);
  return e || Re(!1), e;
}
function K2(t) {
  let e = jS(),
    n = e.matches[e.matches.length - 1];
  return n.route.id || Re(!1), n.route.id;
}
function RS() {
  var t;
  let e = b.useContext(Y2),
    n = LS(oa.UseRouteError),
    r = K2(oa.UseRouteError);
  return e || ((t = n.errors) == null ? void 0 : t[r]);
}
function DS() {
  let { router: t } = PS(Rf.UseNavigateStable),
    e = K2(oa.UseNavigateStable),
    n = b.useRef(!1);
  return (
    G2(() => {
      n.current = !0;
    }),
    b.useCallback(
      function (i, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof i == "number"
              ? t.navigate(i)
              : t.navigate(i, xc({ fromRouteId: e }, s)));
      },
      [t, e],
    )
  );
}
function ze(t) {
  Re(!1);
}
function MS(t) {
  let {
    basename: e = "/",
    children: n = null,
    location: r,
    navigationType: i = yr.Pop,
    navigator: s,
    static: o = !1,
  } = t;
  Sa() && Re(!1);
  let a = e.replace(/^\/*/, "/"),
    l = b.useMemo(() => ({ basename: a, navigator: s, static: o }), [a, s, o]);
  typeof r == "string" && (r = Ds(r));
  let {
      pathname: c = "/",
      search: u = "",
      hash: d = "",
      state: h = null,
      key: p = "default",
    } = r,
    m = b.useMemo(() => {
      let g = pp(c, a);
      return g == null
        ? null
        : {
            location: { pathname: g, search: u, hash: d, state: h, key: p },
            navigationType: i,
          };
    }, [a, c, u, d, h, p, i]);
  return m == null
    ? null
    : b.createElement(
        Si.Provider,
        { value: l },
        b.createElement(cu.Provider, { children: n, value: m }),
      );
}
function jm(t) {
  let { children: e, location: n } = t;
  return SS(Df(e), n);
}
var Rm;
(function (t) {
  (t[(t.pending = 0)] = "pending"),
    (t[(t.success = 1)] = "success"),
    (t[(t.error = 2)] = "error");
})(Rm || (Rm = {}));
new Promise(() => {});
function Df(t, e) {
  e === void 0 && (e = []);
  let n = [];
  return (
    b.Children.forEach(t, (r, i) => {
      if (!b.isValidElement(r)) return;
      let s = [...e, i];
      if (r.type === b.Fragment) {
        n.push.apply(n, Df(r.props.children, s));
        return;
      }
      r.type !== ze && Re(!1), !r.props.index || !r.props.children || Re(!1);
      let o = {
        id: r.props.id || s.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = Df(r.props.children, s)), n.push(o);
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
 */ function _c() {
  return (
    (_c = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    _c.apply(this, arguments)
  );
}
function q2(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
function IS(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
function FS(t, e) {
  return t.button === 0 && (!e || e === "_self") && !IS(t);
}
const BS = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  $S = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "children",
  ],
  zS = "startTransition",
  Dm = zw[zS];
function HS(t) {
  let { basename: e, children: n, future: r, window: i } = t,
    s = b.useRef();
  s.current == null && (s.current = Q3({ window: i, v5Compat: !0 }));
  let o = s.current,
    [a, l] = b.useState({ action: o.action, location: o.location }),
    { v7_startTransition: c } = r || {},
    u = b.useCallback(
      (d) => {
        c && Dm ? Dm(() => l(d)) : l(d);
      },
      [l, c],
    );
  return (
    b.useLayoutEffect(() => o.listen(u), [o, u]),
    b.createElement(MS, {
      basename: e,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: o,
    })
  );
}
const WS =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  US = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  xs = b.forwardRef(function (e, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: s,
        replace: o,
        state: a,
        target: l,
        to: c,
        preventScrollReset: u,
      } = e,
      d = q2(e, BS),
      { basename: h } = b.useContext(Si),
      p,
      m = !1;
    if (typeof c == "string" && US.test(c) && ((p = c), WS))
      try {
        let x = new URL(window.location.href),
          _ = c.startsWith("//") ? new URL(x.protocol + c) : new URL(c),
          w = pp(_.pathname, h);
        _.origin === x.origin && w != null
          ? (c = w + _.search + _.hash)
          : (m = !0);
      } catch {}
    let g = wS(c, { relative: i }),
      v = VS(c, {
        replace: o,
        state: a,
        target: l,
        preventScrollReset: u,
        relative: i,
      });
    function y(x) {
      r && r(x), x.defaultPrevented || v(x);
    }
    return b.createElement(
      "a",
      _c({}, d, { href: p || g, onClick: m || s ? r : y, ref: n, target: l }),
    );
  }),
  tt = b.forwardRef(function (e, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: i = !1,
        className: s = "",
        end: o = !1,
        style: a,
        to: l,
        children: c,
      } = e,
      u = q2(e, $S),
      d = yp(l, { relative: u.relative }),
      h = Ms(),
      p = b.useContext(V2),
      { navigator: m } = b.useContext(Si),
      g = m.encodeLocation ? m.encodeLocation(d).pathname : d.pathname,
      v = h.pathname,
      y =
        p && p.navigation && p.navigation.location
          ? p.navigation.location.pathname
          : null;
    i ||
      ((v = v.toLowerCase()),
      (y = y ? y.toLowerCase() : null),
      (g = g.toLowerCase()));
    let x = v === g || (!o && v.startsWith(g) && v.charAt(g.length) === "/"),
      _ =
        y != null &&
        (y === g || (!o && y.startsWith(g) && y.charAt(g.length) === "/")),
      w = x ? r : void 0,
      E;
    typeof s == "function"
      ? (E = s({ isActive: x, isPending: _ }))
      : (E = [s, x ? "active" : null, _ ? "pending" : null]
          .filter(Boolean)
          .join(" "));
    let S = typeof a == "function" ? a({ isActive: x, isPending: _ }) : a;
    return b.createElement(
      xs,
      _c({}, u, { "aria-current": w, className: E, ref: n, style: S, to: l }),
      typeof c == "function" ? c({ isActive: x, isPending: _ }) : c,
    );
  });
var Mm;
(function (t) {
  (t.UseScrollRestoration = "useScrollRestoration"),
    (t.UseSubmit = "useSubmit"),
    (t.UseSubmitFetcher = "useSubmitFetcher"),
    (t.UseFetcher = "useFetcher");
})(Mm || (Mm = {}));
var Im;
(function (t) {
  (t.UseFetchers = "useFetchers"),
    (t.UseScrollRestoration = "useScrollRestoration");
})(Im || (Im = {}));
function VS(t, e) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: s,
      relative: o,
    } = e === void 0 ? {} : e,
    a = gp(),
    l = Ms(),
    c = yp(t, { relative: o });
  return b.useCallback(
    (u) => {
      if (FS(u, n)) {
        u.preventDefault();
        let d = r !== void 0 ? r : vc(l) === vc(c);
        a(t, { replace: d, state: i, preventScrollReset: s, relative: o });
      }
    },
    [l, a, c, r, i, n, t, s, o],
  );
}
var X2 = { exports: {} };
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */ (function (t, e) {
  (function (n) {
    var r;
    if (((t.exports = n()), (r = !0), !r)) {
      var i = window.Cookies,
        s = (window.Cookies = n());
      s.noConflict = function () {
        return (window.Cookies = i), s;
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
    function r(s) {
      return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
    }
    function i(s) {
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
          for (var m in d)
            d[m] &&
              ((p += "; " + m), d[m] !== !0 && (p += "=" + d[m].split(";")[0]));
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
            var m = h[p].split("="),
              g = m.slice(1).join("=");
            !u && g.charAt(0) === '"' && (g = g.slice(1, -1));
            try {
              var v = r(m[0]);
              if (((g = (s.read || s)(g, v) || r(g)), u))
                try {
                  g = JSON.parse(g);
                } catch {}
              if (((d[v] = g), c === v)) break;
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
        (o.withConverter = i),
        o
      );
    }
    return i(function () {});
  });
})(X2);
var YS = X2.exports;
const bc = Jn(YS);
var GS = function (e) {
  var n = e.condition,
    r = e.wrapper,
    i = e.children;
  return n ? r(i) : i;
};
function ur() {
  return (
    (ur = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    ur.apply(this, arguments)
  );
}
function KS(t, e) {
  (t.prototype = Object.create(e.prototype)),
    (t.prototype.constructor = t),
    Mf(t, e);
}
function Mf(t, e) {
  return (
    (Mf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    Mf(t, e)
  );
}
function qS(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
var If = { TOP: "top", BOTTOM: "bottom", NONE: "none" },
  wc;
(function (t) {
  (t.STRICT = "strict"), (t.LAX = "lax"), (t.NONE = "none");
})(wc || (wc = {}));
var Ff = { HIDDEN: "hidden", SHOW: "show", BY_COOKIE_VALUE: "byCookieValue" },
  Q2 = "CookieConsent",
  XS = ["children"],
  QS = function (e) {
    var n = e.children,
      r = qS(e, XS);
    return J.createElement("button", Object.assign({}, r), n);
  },
  JS = {
    disableStyles: !1,
    hideOnAccept: !0,
    hideOnDecline: !0,
    location: If.BOTTOM,
    visible: Ff.BY_COOKIE_VALUE,
    onAccept: function (e) {},
    onDecline: function () {},
    cookieName: Q2,
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
    sameSite: wc.LAX,
    ButtonComponent: QS,
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
  ZS = {
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
  e4 = function (e) {
    e === void 0 && (e = Q2);
    var n = bc.get(e);
    return n === void 0 ? bc.get(J2(e)) : n;
  },
  J2 = function (e) {
    return e + "-legacy";
  },
  Bf = (function (t) {
    KS(e, t);
    function e() {
      var r;
      return (
        (r = t.apply(this, arguments) || this),
        (r.state = ZS),
        (r.handleScroll = function () {
          var i = r.props.acceptOnScrollPercentage,
            s = document.documentElement,
            o = document.body,
            a = "scrollTop",
            l = "scrollHeight",
            c = ((s[a] || o[a]) / ((s[l] || o[l]) - s.clientHeight)) * 100;
          c > i && r.accept(!0);
        }),
        (r.removeScrollListener = function () {
          var i = r.props.acceptOnScroll;
          i && window.removeEventListener("scroll", r.handleScroll);
        }),
        r
      );
    }
    var n = e.prototype;
    return (
      (n.componentDidMount = function () {
        var i = this.props.debug;
        (this.getCookieValue() === void 0 || i) &&
          (this.setState({ visible: !0 }),
          this.props.acceptOnScroll &&
            window.addEventListener("scroll", this.handleScroll, {
              passive: !0,
            }));
      }),
      (n.componentWillUnmount = function () {
        this.removeScrollListener();
      }),
      (n.accept = function (i) {
        var s;
        i === void 0 && (i = !1);
        var o = this.props,
          a = o.cookieName,
          l = o.cookieValue,
          c = o.hideOnAccept,
          u = o.onAccept;
        this.setCookie(a, l),
          u((s = i) != null ? s : !1),
          c && (this.setState({ visible: !1 }), this.removeScrollListener());
      }),
      (n.overlayClick = function () {
        var i = this.props,
          s = i.acceptOnOverlayClick,
          o = i.onOverlayClick;
        s && this.accept(), o();
      }),
      (n.decline = function () {
        var i = this.props,
          s = i.cookieName,
          o = i.declineCookieValue,
          a = i.hideOnDecline,
          l = i.onDecline,
          c = i.setDeclineCookie;
        c && this.setCookie(s, o), l(), a && this.setState({ visible: !1 });
      }),
      (n.setCookie = function (i, s) {
        var o = this.props,
          a = o.extraCookieOptions,
          l = o.expires,
          c = o.sameSite,
          u = this.props.cookieSecurity;
        u === void 0 &&
          (u = window.location ? window.location.protocol === "https:" : !0);
        var d = ur({ expires: l }, a, { sameSite: c, secure: u });
        c === wc.NONE && bc.set(J2(i), s, d), bc.set(i, s, d);
      }),
      (n.getCookieValue = function () {
        var i = this.props.cookieName;
        return e4(i);
      }),
      (n.render = function () {
        var i = this;
        switch (this.props.visible) {
          case Ff.HIDDEN:
            return null;
          case Ff.BY_COOKIE_VALUE:
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
          m = s.containerClasses,
          g = s.contentClasses,
          v = s.buttonClasses,
          y = s.buttonWrapperClasses,
          x = s.declineButtonClasses,
          _ = s.buttonId,
          w = s.declineButtonId,
          E = s.disableButtonStyles,
          S = s.enableDeclineButton,
          C = s.flipButtons,
          k = s.ButtonComponent,
          L = s.overlay,
          j = s.overlayClasses,
          $ = s.overlayStyle,
          N = s.ariaAcceptLabel,
          D = s.ariaDeclineLabel,
          H = s.customContainerAttributes,
          B = s.customContentAttributes,
          Y = s.customButtonProps,
          G = s.customDeclineButtonProps,
          P = s.customButtonWrapperAttributes,
          A = {},
          T = {},
          F = {},
          M = {},
          z = {};
        switch (
          (d
            ? ((A = Object.assign({}, a)),
              (T = Object.assign({}, l)),
              (F = Object.assign({}, c)),
              (M = Object.assign({}, u)),
              (z = Object.assign({}, $)))
            : ((A = Object.assign({}, ur({}, this.state.style, a))),
              (M = Object.assign({}, ur({}, this.state.contentStyle, u))),
              (z = Object.assign({}, ur({}, this.state.overlayStyle, $))),
              E
                ? ((T = Object.assign({}, l)), (F = Object.assign({}, c)))
                : ((T = Object.assign({}, ur({}, this.state.buttonStyle, l))),
                  (F = Object.assign(
                    {},
                    ur({}, this.state.declineButtonStyle, c),
                  )))),
          o)
        ) {
          case If.TOP:
            A.top = "0";
            break;
          case If.BOTTOM:
            A.bottom = "0";
            break;
        }
        var W = [];
        return (
          S &&
            W.push(
              J.createElement(
                k,
                Object.assign(
                  {
                    key: "declineButton",
                    style: F,
                    className: x,
                    id: w,
                    "aria-label": D,
                    onClick: function () {
                      i.decline();
                    },
                  },
                  G,
                ),
                p,
              ),
            ),
          W.push(
            J.createElement(
              k,
              Object.assign(
                {
                  key: "acceptButton",
                  style: T,
                  className: v,
                  id: _,
                  "aria-label": N,
                  onClick: function () {
                    i.accept();
                  },
                },
                Y,
              ),
              h,
            ),
          ),
          C && W.reverse(),
          J.createElement(
            GS,
            {
              condition: L,
              wrapper: function (X) {
                return J.createElement(
                  "div",
                  {
                    style: z,
                    className: j,
                    onClick: function () {
                      i.overlayClick();
                    },
                  },
                  X,
                );
              },
            },
            J.createElement(
              "div",
              Object.assign({ className: "" + m, style: A }, H),
              J.createElement(
                "div",
                Object.assign({ style: M, className: g }, B),
                this.props.children,
              ),
              J.createElement(
                "div",
                Object.assign({ className: "" + y }, P),
                W.map(function (V) {
                  return V;
                }),
              ),
            ),
          )
        );
      }),
      e
    );
  })(b.Component);
Bf.defaultProps = JS;
var Z2 = { exports: {} },
  t4 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  n4 = t4,
  r4 = n4;
function ex() {}
function tx() {}
tx.resetWarningCache = ex;
var i4 = function () {
  function t(r, i, s, o, a, l) {
    if (l !== r4) {
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
    checkPropTypes: tx,
    resetWarningCache: ex,
  };
  return (n.PropTypes = n), n;
};
Z2.exports = i4();
var s4 = Z2.exports;
const K = Jn(s4);
function o4(t) {
  return t && typeof t == "object" && "default" in t ? t.default : t;
}
var nx = b,
  a4 = o4(nx);
function Fm(t, e, n) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  );
}
function l4(t, e) {
  (t.prototype = Object.create(e.prototype)),
    (t.prototype.constructor = t),
    (t.__proto__ = e);
}
var c4 = !!(
  typeof window < "u" &&
  window.document &&
  window.document.createElement
);
function u4(t, e, n) {
  if (typeof t != "function")
    throw new Error("Expected reducePropsToState to be a function.");
  if (typeof e != "function")
    throw new Error("Expected handleStateChangeOnClient to be a function.");
  if (typeof n < "u" && typeof n != "function")
    throw new Error(
      "Expected mapStateOnServer to either be undefined or a function.",
    );
  function r(i) {
    return i.displayName || i.name || "Component";
  }
  return function (s) {
    if (typeof s != "function")
      throw new Error("Expected WrappedComponent to be a React component.");
    var o = [],
      a;
    function l() {
      (a = t(
        o.map(function (u) {
          return u.props;
        }),
      )),
        c.canUseDOM ? e(a) : n && (a = n(a));
    }
    var c = (function (u) {
      l4(d, u);
      function d() {
        return u.apply(this, arguments) || this;
      }
      (d.peek = function () {
        return a;
      }),
        (d.rewind = function () {
          if (d.canUseDOM)
            throw new Error(
              "You may only call rewind() on the server. Call peek() to read the current state.",
            );
          var m = a;
          return (a = void 0), (o = []), m;
        });
      var h = d.prototype;
      return (
        (h.UNSAFE_componentWillMount = function () {
          o.push(this), l();
        }),
        (h.componentDidUpdate = function () {
          l();
        }),
        (h.componentWillUnmount = function () {
          var m = o.indexOf(this);
          o.splice(m, 1), l();
        }),
        (h.render = function () {
          return a4.createElement(s, this.props);
        }),
        d
      );
    })(nx.PureComponent);
    return (
      Fm(c, "displayName", "SideEffect(" + r(s) + ")"),
      Fm(c, "canUseDOM", c4),
      c
    );
  };
}
var d4 = u4;
const f4 = Jn(d4);
var h4 = typeof Element < "u",
  p4 = typeof Map == "function",
  m4 = typeof Set == "function",
  g4 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Fl(t, e) {
  if (t === e) return !0;
  if (t && e && typeof t == "object" && typeof e == "object") {
    if (t.constructor !== e.constructor) return !1;
    var n, r, i;
    if (Array.isArray(t)) {
      if (((n = t.length), n != e.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Fl(t[r], e[r])) return !1;
      return !0;
    }
    var s;
    if (p4 && t instanceof Map && e instanceof Map) {
      if (t.size !== e.size) return !1;
      for (s = t.entries(); !(r = s.next()).done; )
        if (!e.has(r.value[0])) return !1;
      for (s = t.entries(); !(r = s.next()).done; )
        if (!Fl(r.value[1], e.get(r.value[0]))) return !1;
      return !0;
    }
    if (m4 && t instanceof Set && e instanceof Set) {
      if (t.size !== e.size) return !1;
      for (s = t.entries(); !(r = s.next()).done; )
        if (!e.has(r.value[0])) return !1;
      return !0;
    }
    if (g4 && ArrayBuffer.isView(t) && ArrayBuffer.isView(e)) {
      if (((n = t.length), n != e.length)) return !1;
      for (r = n; r-- !== 0; ) if (t[r] !== e[r]) return !1;
      return !0;
    }
    if (t.constructor === RegExp)
      return t.source === e.source && t.flags === e.flags;
    if (
      t.valueOf !== Object.prototype.valueOf &&
      typeof t.valueOf == "function" &&
      typeof e.valueOf == "function"
    )
      return t.valueOf() === e.valueOf();
    if (
      t.toString !== Object.prototype.toString &&
      typeof t.toString == "function" &&
      typeof e.toString == "function"
    )
      return t.toString() === e.toString();
    if (((i = Object.keys(t)), (n = i.length), n !== Object.keys(e).length))
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(e, i[r])) return !1;
    if (h4 && t instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (
        !(
          (i[r] === "_owner" || i[r] === "__v" || i[r] === "__o") &&
          t.$$typeof
        ) &&
        !Fl(t[i[r]], e[i[r]])
      )
        return !1;
    return !0;
  }
  return t !== t && e !== e;
}
var y4 = function (e, n) {
  try {
    return Fl(e, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const v4 = Jn(y4);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var Bm = Object.getOwnPropertySymbols,
  x4 = Object.prototype.hasOwnProperty,
  _4 = Object.prototype.propertyIsEnumerable;
function b4(t) {
  if (t == null)
    throw new TypeError(
      "Object.assign cannot be called with null or undefined",
    );
  return Object(t);
}
function w4() {
  try {
    if (!Object.assign) return !1;
    var t = new String("abc");
    if (((t[5] = "de"), Object.getOwnPropertyNames(t)[0] === "5")) return !1;
    for (var e = {}, n = 0; n < 10; n++) e["_" + String.fromCharCode(n)] = n;
    var r = Object.getOwnPropertyNames(e).map(function (s) {
      return e[s];
    });
    if (r.join("") !== "0123456789") return !1;
    var i = {};
    return (
      "abcdefghijklmnopqrst".split("").forEach(function (s) {
        i[s] = s;
      }),
      Object.keys(Object.assign({}, i)).join("") === "abcdefghijklmnopqrst"
    );
  } catch {
    return !1;
  }
}
var E4 = w4()
  ? Object.assign
  : function (t, e) {
      for (var n, r = b4(t), i, s = 1; s < arguments.length; s++) {
        n = Object(arguments[s]);
        for (var o in n) x4.call(n, o) && (r[o] = n[o]);
        if (Bm) {
          i = Bm(n);
          for (var a = 0; a < i.length; a++)
            _4.call(n, i[a]) && (r[i[a]] = n[i[a]]);
        }
      }
      return r;
    };
const S4 = Jn(E4);
var ci = {
    BODY: "bodyAttributes",
    HTML: "htmlAttributes",
    TITLE: "titleAttributes",
  },
  Z = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title",
  };
Object.keys(Z).map(function (t) {
  return Z[t];
});
var _e = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src",
    TARGET: "target",
  },
  Ec = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex",
  },
  aa = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate",
  },
  C4 = Object.keys(Ec).reduce(function (t, e) {
    return (t[Ec[e]] = e), t;
  }, {}),
  k4 = [Z.NOSCRIPT, Z.SCRIPT, Z.STYLE],
  un = "data-react-helmet",
  T4 =
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            typeof Symbol == "function" &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        },
  O4 = function (t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  },
  A4 = (function () {
    function t(e, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    return function (e, n, r) {
      return n && t(e.prototype, n), r && t(e, r), e;
    };
  })(),
  _t =
    Object.assign ||
    function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
      }
      return t;
    },
  N4 = function (t, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof e,
      );
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
    })),
      e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
  },
  $m = function (t, e) {
    var n = {};
    for (var r in t)
      e.indexOf(r) >= 0 ||
        (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
    return n;
  },
  P4 = function (t, e) {
    if (!t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    return e && (typeof e == "object" || typeof e == "function") ? e : t;
  },
  $f = function (e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return n === !1
      ? String(e)
      : String(e)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#x27;");
  },
  L4 = function (e) {
    var n = cs(e, Z.TITLE),
      r = cs(e, aa.TITLE_TEMPLATE);
    if (r && n)
      return r.replace(/%s/g, function () {
        return Array.isArray(n) ? n.join("") : n;
      });
    var i = cs(e, aa.DEFAULT_TITLE);
    return n || i || void 0;
  },
  j4 = function (e) {
    return cs(e, aa.ON_CHANGE_CLIENT_STATE) || function () {};
  },
  rd = function (e, n) {
    return n
      .filter(function (r) {
        return typeof r[e] < "u";
      })
      .map(function (r) {
        return r[e];
      })
      .reduce(function (r, i) {
        return _t({}, r, i);
      }, {});
  },
  R4 = function (e, n) {
    return n
      .filter(function (r) {
        return typeof r[Z.BASE] < "u";
      })
      .map(function (r) {
        return r[Z.BASE];
      })
      .reverse()
      .reduce(function (r, i) {
        if (!r.length)
          for (var s = Object.keys(i), o = 0; o < s.length; o++) {
            var a = s[o],
              l = a.toLowerCase();
            if (e.indexOf(l) !== -1 && i[l]) return r.concat(i);
          }
        return r;
      }, []);
  },
  Zs = function (e, n, r) {
    var i = {};
    return r
      .filter(function (s) {
        return Array.isArray(s[e])
          ? !0
          : (typeof s[e] < "u" &&
              F4(
                "Helmet: " +
                  e +
                  ' should be of type "Array". Instead found type "' +
                  T4(s[e]) +
                  '"',
              ),
            !1);
      })
      .map(function (s) {
        return s[e];
      })
      .reverse()
      .reduce(function (s, o) {
        var a = {};
        o.filter(function (h) {
          for (var p = void 0, m = Object.keys(h), g = 0; g < m.length; g++) {
            var v = m[g],
              y = v.toLowerCase();
            n.indexOf(y) !== -1 &&
              !(p === _e.REL && h[p].toLowerCase() === "canonical") &&
              !(y === _e.REL && h[y].toLowerCase() === "stylesheet") &&
              (p = y),
              n.indexOf(v) !== -1 &&
                (v === _e.INNER_HTML ||
                  v === _e.CSS_TEXT ||
                  v === _e.ITEM_PROP) &&
                (p = v);
          }
          if (!p || !h[p]) return !1;
          var x = h[p].toLowerCase();
          return (
            i[p] || (i[p] = {}),
            a[p] || (a[p] = {}),
            i[p][x] ? !1 : ((a[p][x] = !0), !0)
          );
        })
          .reverse()
          .forEach(function (h) {
            return s.push(h);
          });
        for (var l = Object.keys(a), c = 0; c < l.length; c++) {
          var u = l[c],
            d = S4({}, i[u], a[u]);
          i[u] = d;
        }
        return s;
      }, [])
      .reverse();
  },
  cs = function (e, n) {
    for (var r = e.length - 1; r >= 0; r--) {
      var i = e[r];
      if (i.hasOwnProperty(n)) return i[n];
    }
    return null;
  },
  D4 = function (e) {
    return {
      baseTag: R4([_e.HREF, _e.TARGET], e),
      bodyAttributes: rd(ci.BODY, e),
      defer: cs(e, aa.DEFER),
      encode: cs(e, aa.ENCODE_SPECIAL_CHARACTERS),
      htmlAttributes: rd(ci.HTML, e),
      linkTags: Zs(Z.LINK, [_e.REL, _e.HREF], e),
      metaTags: Zs(
        Z.META,
        [_e.NAME, _e.CHARSET, _e.HTTPEQUIV, _e.PROPERTY, _e.ITEM_PROP],
        e,
      ),
      noscriptTags: Zs(Z.NOSCRIPT, [_e.INNER_HTML], e),
      onChangeClientState: j4(e),
      scriptTags: Zs(Z.SCRIPT, [_e.SRC, _e.INNER_HTML], e),
      styleTags: Zs(Z.STYLE, [_e.CSS_TEXT], e),
      title: L4(e),
      titleAttributes: rd(ci.TITLE, e),
    };
  },
  zf = (function () {
    var t = Date.now();
    return function (e) {
      var n = Date.now();
      n - t > 16
        ? ((t = n), e(n))
        : setTimeout(function () {
            zf(e);
          }, 0);
    };
  })(),
  zm = function (e) {
    return clearTimeout(e);
  },
  M4 =
    typeof window < "u"
      ? (window.requestAnimationFrame &&
          window.requestAnimationFrame.bind(window)) ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        zf
      : global.requestAnimationFrame || zf,
  I4 =
    typeof window < "u"
      ? window.cancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        zm
      : global.cancelAnimationFrame || zm,
  F4 = function (e) {
    return console && typeof console.warn == "function" && console.warn(e);
  },
  eo = null,
  B4 = function (e) {
    eo && I4(eo),
      e.defer
        ? (eo = M4(function () {
            Hm(e, function () {
              eo = null;
            });
          }))
        : (Hm(e), (eo = null));
  },
  Hm = function (e, n) {
    var r = e.baseTag,
      i = e.bodyAttributes,
      s = e.htmlAttributes,
      o = e.linkTags,
      a = e.metaTags,
      l = e.noscriptTags,
      c = e.onChangeClientState,
      u = e.scriptTags,
      d = e.styleTags,
      h = e.title,
      p = e.titleAttributes;
    Hf(Z.BODY, i), Hf(Z.HTML, s), $4(h, p);
    var m = {
        baseTag: ji(Z.BASE, r),
        linkTags: ji(Z.LINK, o),
        metaTags: ji(Z.META, a),
        noscriptTags: ji(Z.NOSCRIPT, l),
        scriptTags: ji(Z.SCRIPT, u),
        styleTags: ji(Z.STYLE, d),
      },
      g = {},
      v = {};
    Object.keys(m).forEach(function (y) {
      var x = m[y],
        _ = x.newTags,
        w = x.oldTags;
      _.length && (g[y] = _), w.length && (v[y] = m[y].oldTags);
    }),
      n && n(),
      c(e, g, v);
  },
  rx = function (e) {
    return Array.isArray(e) ? e.join("") : e;
  },
  $4 = function (e, n) {
    typeof e < "u" && document.title !== e && (document.title = rx(e)),
      Hf(Z.TITLE, n);
  },
  Hf = function (e, n) {
    var r = document.getElementsByTagName(e)[0];
    if (r) {
      for (
        var i = r.getAttribute(un),
          s = i ? i.split(",") : [],
          o = [].concat(s),
          a = Object.keys(n),
          l = 0;
        l < a.length;
        l++
      ) {
        var c = a[l],
          u = n[c] || "";
        r.getAttribute(c) !== u && r.setAttribute(c, u),
          s.indexOf(c) === -1 && s.push(c);
        var d = o.indexOf(c);
        d !== -1 && o.splice(d, 1);
      }
      for (var h = o.length - 1; h >= 0; h--) r.removeAttribute(o[h]);
      s.length === o.length
        ? r.removeAttribute(un)
        : r.getAttribute(un) !== a.join(",") && r.setAttribute(un, a.join(","));
    }
  },
  ji = function (e, n) {
    var r = document.head || document.querySelector(Z.HEAD),
      i = r.querySelectorAll(e + "[" + un + "]"),
      s = Array.prototype.slice.call(i),
      o = [],
      a = void 0;
    return (
      n &&
        n.length &&
        n.forEach(function (l) {
          var c = document.createElement(e);
          for (var u in l)
            if (l.hasOwnProperty(u))
              if (u === _e.INNER_HTML) c.innerHTML = l.innerHTML;
              else if (u === _e.CSS_TEXT)
                c.styleSheet
                  ? (c.styleSheet.cssText = l.cssText)
                  : c.appendChild(document.createTextNode(l.cssText));
              else {
                var d = typeof l[u] > "u" ? "" : l[u];
                c.setAttribute(u, d);
              }
          c.setAttribute(un, "true"),
            s.some(function (h, p) {
              return (a = p), c.isEqualNode(h);
            })
              ? s.splice(a, 1)
              : o.push(c);
        }),
      s.forEach(function (l) {
        return l.parentNode.removeChild(l);
      }),
      o.forEach(function (l) {
        return r.appendChild(l);
      }),
      { oldTags: s, newTags: o }
    );
  },
  ix = function (e) {
    return Object.keys(e).reduce(function (n, r) {
      var i = typeof e[r] < "u" ? r + '="' + e[r] + '"' : "" + r;
      return n ? n + " " + i : i;
    }, "");
  },
  z4 = function (e, n, r, i) {
    var s = ix(r),
      o = rx(n);
    return s
      ? "<" + e + " " + un + '="true" ' + s + ">" + $f(o, i) + "</" + e + ">"
      : "<" + e + " " + un + '="true">' + $f(o, i) + "</" + e + ">";
  },
  H4 = function (e, n, r) {
    return n.reduce(function (i, s) {
      var o = Object.keys(s)
          .filter(function (c) {
            return !(c === _e.INNER_HTML || c === _e.CSS_TEXT);
          })
          .reduce(function (c, u) {
            var d = typeof s[u] > "u" ? u : u + '="' + $f(s[u], r) + '"';
            return c ? c + " " + d : d;
          }, ""),
        a = s.innerHTML || s.cssText || "",
        l = k4.indexOf(e) === -1;
      return (
        i +
        "<" +
        e +
        " " +
        un +
        '="true" ' +
        o +
        (l ? "/>" : ">" + a + "</" + e + ">")
      );
    }, "");
  },
  sx = function (e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Object.keys(e).reduce(function (r, i) {
      return (r[Ec[i] || i] = e[i]), r;
    }, n);
  },
  W4 = function (e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Object.keys(e).reduce(function (r, i) {
      return (r[C4[i] || i] = e[i]), r;
    }, n);
  },
  U4 = function (e, n, r) {
    var i,
      s = ((i = { key: n }), (i[un] = !0), i),
      o = sx(r, s);
    return [J.createElement(Z.TITLE, o, n)];
  },
  V4 = function (e, n) {
    return n.map(function (r, i) {
      var s,
        o = ((s = { key: i }), (s[un] = !0), s);
      return (
        Object.keys(r).forEach(function (a) {
          var l = Ec[a] || a;
          if (l === _e.INNER_HTML || l === _e.CSS_TEXT) {
            var c = r.innerHTML || r.cssText;
            o.dangerouslySetInnerHTML = { __html: c };
          } else o[l] = r[a];
        }),
        J.createElement(e, o)
      );
    });
  },
  Ln = function (e, n, r) {
    switch (e) {
      case Z.TITLE:
        return {
          toComponent: function () {
            return U4(e, n.title, n.titleAttributes);
          },
          toString: function () {
            return z4(e, n.title, n.titleAttributes, r);
          },
        };
      case ci.BODY:
      case ci.HTML:
        return {
          toComponent: function () {
            return sx(n);
          },
          toString: function () {
            return ix(n);
          },
        };
      default:
        return {
          toComponent: function () {
            return V4(e, n);
          },
          toString: function () {
            return H4(e, n, r);
          },
        };
    }
  },
  ox = function (e) {
    var n = e.baseTag,
      r = e.bodyAttributes,
      i = e.encode,
      s = e.htmlAttributes,
      o = e.linkTags,
      a = e.metaTags,
      l = e.noscriptTags,
      c = e.scriptTags,
      u = e.styleTags,
      d = e.title,
      h = d === void 0 ? "" : d,
      p = e.titleAttributes;
    return {
      base: Ln(Z.BASE, n, i),
      bodyAttributes: Ln(ci.BODY, r, i),
      htmlAttributes: Ln(ci.HTML, s, i),
      link: Ln(Z.LINK, o, i),
      meta: Ln(Z.META, a, i),
      noscript: Ln(Z.NOSCRIPT, l, i),
      script: Ln(Z.SCRIPT, c, i),
      style: Ln(Z.STYLE, u, i),
      title: Ln(Z.TITLE, { title: h, titleAttributes: p }, i),
    };
  },
  Y4 = function (e) {
    var n, r;
    return (
      (r = n =
        (function (i) {
          N4(s, i);
          function s() {
            return O4(this, s), P4(this, i.apply(this, arguments));
          }
          return (
            (s.prototype.shouldComponentUpdate = function (a) {
              return !v4(this.props, a);
            }),
            (s.prototype.mapNestedChildrenToProps = function (a, l) {
              if (!l) return null;
              switch (a.type) {
                case Z.SCRIPT:
                case Z.NOSCRIPT:
                  return { innerHTML: l };
                case Z.STYLE:
                  return { cssText: l };
              }
              throw new Error(
                "<" +
                  a.type +
                  " /> elements are self-closing and can not contain children. Refer to our API for more information.",
              );
            }),
            (s.prototype.flattenArrayTypeChildren = function (a) {
              var l,
                c = a.child,
                u = a.arrayTypeChildren,
                d = a.newChildProps,
                h = a.nestedChildren;
              return _t(
                {},
                u,
                ((l = {}),
                (l[c.type] = [].concat(u[c.type] || [], [
                  _t({}, d, this.mapNestedChildrenToProps(c, h)),
                ])),
                l),
              );
            }),
            (s.prototype.mapObjectTypeChildren = function (a) {
              var l,
                c,
                u = a.child,
                d = a.newProps,
                h = a.newChildProps,
                p = a.nestedChildren;
              switch (u.type) {
                case Z.TITLE:
                  return _t(
                    {},
                    d,
                    ((l = {}),
                    (l[u.type] = p),
                    (l.titleAttributes = _t({}, h)),
                    l),
                  );
                case Z.BODY:
                  return _t({}, d, { bodyAttributes: _t({}, h) });
                case Z.HTML:
                  return _t({}, d, { htmlAttributes: _t({}, h) });
              }
              return _t({}, d, ((c = {}), (c[u.type] = _t({}, h)), c));
            }),
            (s.prototype.mapArrayTypeChildrenToProps = function (a, l) {
              var c = _t({}, l);
              return (
                Object.keys(a).forEach(function (u) {
                  var d;
                  c = _t({}, c, ((d = {}), (d[u] = a[u]), d));
                }),
                c
              );
            }),
            (s.prototype.warnOnInvalidChildren = function (a, l) {
              return !0;
            }),
            (s.prototype.mapChildrenToProps = function (a, l) {
              var c = this,
                u = {};
              return (
                J.Children.forEach(a, function (d) {
                  if (!(!d || !d.props)) {
                    var h = d.props,
                      p = h.children,
                      m = $m(h, ["children"]),
                      g = W4(m);
                    switch ((c.warnOnInvalidChildren(d, p), d.type)) {
                      case Z.LINK:
                      case Z.META:
                      case Z.NOSCRIPT:
                      case Z.SCRIPT:
                      case Z.STYLE:
                        u = c.flattenArrayTypeChildren({
                          child: d,
                          arrayTypeChildren: u,
                          newChildProps: g,
                          nestedChildren: p,
                        });
                        break;
                      default:
                        l = c.mapObjectTypeChildren({
                          child: d,
                          newProps: l,
                          newChildProps: g,
                          nestedChildren: p,
                        });
                        break;
                    }
                  }
                }),
                (l = this.mapArrayTypeChildrenToProps(u, l)),
                l
              );
            }),
            (s.prototype.render = function () {
              var a = this.props,
                l = a.children,
                c = $m(a, ["children"]),
                u = _t({}, c);
              return (
                l && (u = this.mapChildrenToProps(l, u)), J.createElement(e, u)
              );
            }),
            A4(s, null, [
              {
                key: "canUseDOM",
                set: function (a) {
                  e.canUseDOM = a;
                },
              },
            ]),
            s
          );
        })(J.Component)),
      (n.propTypes = {
        base: K.object,
        bodyAttributes: K.object,
        children: K.oneOfType([K.arrayOf(K.node), K.node]),
        defaultTitle: K.string,
        defer: K.bool,
        encodeSpecialCharacters: K.bool,
        htmlAttributes: K.object,
        link: K.arrayOf(K.object),
        meta: K.arrayOf(K.object),
        noscript: K.arrayOf(K.object),
        onChangeClientState: K.func,
        script: K.arrayOf(K.object),
        style: K.arrayOf(K.object),
        title: K.string,
        titleAttributes: K.object,
        titleTemplate: K.string,
      }),
      (n.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
      (n.peek = e.peek),
      (n.rewind = function () {
        var i = e.rewind();
        return (
          i ||
            (i = ox({
              baseTag: [],
              bodyAttributes: {},
              encodeSpecialCharacters: !0,
              htmlAttributes: {},
              linkTags: [],
              metaTags: [],
              noscriptTags: [],
              scriptTags: [],
              styleTags: [],
              title: "",
              titleAttributes: {},
            })),
          i
        );
      }),
      r
    );
  },
  G4 = function () {
    return null;
  },
  K4 = f4(D4, B4, ox)(G4),
  An = Y4(K4);
An.renderStatic = An.rewind;
const lt = ({
    title: t,
    description: e,
    keywords: n,
    canonicalUrl: r,
    ogImage: i,
    ogType: s = "website",
  }) =>
    f.jsxs(An, {
      children: [
        f.jsx("title", { children: t }),
        f.jsx("meta", { name: "description", content: e }),
        n && f.jsx("meta", { name: "keywords", content: n }),
        r && f.jsx("link", { rel: "canonical", href: r }),
        f.jsx("meta", { property: "og:title", content: t }),
        f.jsx("meta", { property: "og:description", content: e }),
        i && f.jsx("meta", { property: "og:image", content: i }),
        r && f.jsx("meta", { property: "og:url", content: r }),
        f.jsx("meta", { property: "og:type", content: s }),
        f.jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
        f.jsx("meta", { name: "twitter:title", content: t }),
        f.jsx("meta", { name: "twitter:description", content: e }),
        i && f.jsx("meta", { name: "twitter:image", content: i }),
      ],
    }),
  Wm = ({ homeLink: t }) => {
    const e = {
      section: {
        textAlign: "center",
        padding: 50,
        margin: 50,
        color: "#df0000",
      },
    };
    return f.jsxs("section", {
      className: "not-found",
      style: e.section,
      children: [
        f.jsx(lt, {
          title: "Page Not Found | Bullet Point Fitness",
          description:
            "Sorry, the page you're looking for doesn't exist. Return to the home page or explore our site to find what you need.",
          keywords:
            "page not found, 404 error, missing page, Bullet Point Fitness",
          ogImage: "https://bulletpointfitness.com/og-image.png",
        }),
        f.jsx("h2", {
          children:
            "Sorry, the page you're looking for cannot be found. Try using the navigation menu or return to the homepage.",
        }),
        f.jsx(xs, {
          to: t,
          "aria-label": "Link to Homepage",
          children: f.jsx("h3", { children: "Return to Homepage" }),
        }),
      ],
    });
  };
var ax = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (t) {
  (function () {
    var e = {}.hasOwnProperty;
    function n() {
      for (var r = [], i = 0; i < arguments.length; i++) {
        var s = arguments[i];
        if (s) {
          var o = typeof s;
          if (o === "string" || o === "number") r.push(s);
          else if (Array.isArray(s)) {
            if (s.length) {
              var a = n.apply(null, s);
              a && r.push(a);
            }
          } else if (o === "object") {
            if (
              s.toString !== Object.prototype.toString &&
              !s.toString.toString().includes("[native code]")
            ) {
              r.push(s.toString());
              continue;
            }
            for (var l in s) e.call(s, l) && s[l] && r.push(l);
          }
        }
      }
      return r.join(" ");
    }
    t.exports ? ((n.default = n), (t.exports = n)) : (window.classNames = n);
  })();
})(ax);
var q4 = ax.exports;
const ie = Jn(q4);
function Wf() {
  return (
    (Wf = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    Wf.apply(this, arguments)
  );
}
function lx(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
function Um(t) {
  return "default" + t.charAt(0).toUpperCase() + t.substr(1);
}
function X4(t) {
  var e = Q4(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
function Q4(t, e) {
  if (typeof t != "object" || t === null) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function J4(t, e, n) {
  var r = b.useRef(t !== void 0),
    i = b.useState(e),
    s = i[0],
    o = i[1],
    a = t !== void 0,
    l = r.current;
  return (
    (r.current = a),
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
function vp(t, e) {
  return Object.keys(e).reduce(function (n, r) {
    var i,
      s = n,
      o = s[Um(r)],
      a = s[r],
      l = lx(s, [Um(r), r].map(X4)),
      c = e[r],
      u = J4(a, o, t[c]),
      d = u[0],
      h = u[1];
    return Wf({}, l, ((i = {}), (i[r] = d), (i[c] = h), i));
  }, t);
}
function Uf(t, e) {
  return (
    (Uf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    Uf(t, e)
  );
}
function Z4(t, e) {
  (t.prototype = Object.create(e.prototype)),
    (t.prototype.constructor = t),
    Uf(t, e);
}
const eC = ["xxl", "xl", "lg", "md", "sm", "xs"],
  tC = "xs",
  uu = b.createContext({ prefixes: {}, breakpoints: eC, minBreakpoint: tC });
function ue(t, e) {
  const { prefixes: n } = b.useContext(uu);
  return t || n[e] || e;
}
function cx() {
  const { breakpoints: t } = b.useContext(uu);
  return t;
}
function ux() {
  const { minBreakpoint: t } = b.useContext(uu);
  return t;
}
function nC() {
  const { dir: t } = b.useContext(uu);
  return t === "rtl";
}
function du(t) {
  return (t && t.ownerDocument) || document;
}
function rC(t) {
  var e = du(t);
  return (e && e.defaultView) || window;
}
function iC(t, e) {
  return rC(t).getComputedStyle(t, e);
}
var sC = /([A-Z])/g;
function oC(t) {
  return t.replace(sC, "-$1").toLowerCase();
}
var aC = /^ms-/;
function el(t) {
  return oC(t).replace(aC, "-ms-");
}
var lC =
  /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function cC(t) {
  return !!(t && lC.test(t));
}
function Wn(t, e) {
  var n = "",
    r = "";
  if (typeof e == "string")
    return t.style.getPropertyValue(el(e)) || iC(t).getPropertyValue(el(e));
  Object.keys(e).forEach(function (i) {
    var s = e[i];
    !s && s !== 0
      ? t.style.removeProperty(el(i))
      : cC(i)
      ? (r += i + "(" + s + ") ")
      : (n += el(i) + ": " + s + ";");
  }),
    r && (n += "transform: " + r + ";"),
    (t.style.cssText += ";" + n);
}
const Vm = { disabled: !1 },
  dx = J.createContext(null);
var uC = function (e) {
    return e.scrollTop;
  },
  yo = "unmounted",
  dr = "exited",
  cn = "entering",
  Bn = "entered",
  la = "exiting",
  er = (function (t) {
    Z4(e, t);
    function e(r, i) {
      var s;
      s = t.call(this, r, i) || this;
      var o = i,
        a = o && !o.isMounting ? r.enter : r.appear,
        l;
      return (
        (s.appearStatus = null),
        r.in
          ? a
            ? ((l = dr), (s.appearStatus = cn))
            : (l = Bn)
          : r.unmountOnExit || r.mountOnEnter
          ? (l = yo)
          : (l = dr),
        (s.state = { status: l }),
        (s.nextCallback = null),
        s
      );
    }
    e.getDerivedStateFromProps = function (i, s) {
      var o = i.in;
      return o && s.status === yo ? { status: dr } : null;
    };
    var n = e.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (i) {
        var s = null;
        if (i !== this.props) {
          var o = this.state.status;
          this.props.in
            ? o !== cn && o !== Bn && (s = cn)
            : (o === cn || o === Bn) && (s = la);
        }
        this.updateStatus(!1, s);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var i = this.props.timeout,
          s,
          o,
          a;
        return (
          (s = o = a = i),
          i != null &&
            typeof i != "number" &&
            ((s = i.exit),
            (o = i.enter),
            (a = i.appear !== void 0 ? i.appear : o)),
          { exit: s, enter: o, appear: a }
        );
      }),
      (n.updateStatus = function (i, s) {
        if ((i === void 0 && (i = !1), s !== null))
          if ((this.cancelNextCallback(), s === cn)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var o = this.props.nodeRef
                ? this.props.nodeRef.current
                : es.findDOMNode(this);
              o && uC(o);
            }
            this.performEnter(i);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === dr &&
            this.setState({ status: yo });
      }),
      (n.performEnter = function (i) {
        var s = this,
          o = this.props.enter,
          a = this.context ? this.context.isMounting : i,
          l = this.props.nodeRef ? [a] : [es.findDOMNode(this), a],
          c = l[0],
          u = l[1],
          d = this.getTimeouts(),
          h = a ? d.appear : d.enter;
        if ((!i && !o) || Vm.disabled) {
          this.safeSetState({ status: Bn }, function () {
            s.props.onEntered(c);
          });
          return;
        }
        this.props.onEnter(c, u),
          this.safeSetState({ status: cn }, function () {
            s.props.onEntering(c, u),
              s.onTransitionEnd(h, function () {
                s.safeSetState({ status: Bn }, function () {
                  s.props.onEntered(c, u);
                });
              });
          });
      }),
      (n.performExit = function () {
        var i = this,
          s = this.props.exit,
          o = this.getTimeouts(),
          a = this.props.nodeRef ? void 0 : es.findDOMNode(this);
        if (!s || Vm.disabled) {
          this.safeSetState({ status: dr }, function () {
            i.props.onExited(a);
          });
          return;
        }
        this.props.onExit(a),
          this.safeSetState({ status: la }, function () {
            i.props.onExiting(a),
              i.onTransitionEnd(o.exit, function () {
                i.safeSetState({ status: dr }, function () {
                  i.props.onExited(a);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (i, s) {
        (s = this.setNextCallback(s)), this.setState(i, s);
      }),
      (n.setNextCallback = function (i) {
        var s = this,
          o = !0;
        return (
          (this.nextCallback = function (a) {
            o && ((o = !1), (s.nextCallback = null), i(a));
          }),
          (this.nextCallback.cancel = function () {
            o = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (i, s) {
        this.setNextCallback(s);
        var o = this.props.nodeRef
            ? this.props.nodeRef.current
            : es.findDOMNode(this),
          a = i == null && !this.props.addEndListener;
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
        i != null && setTimeout(this.nextCallback, i);
      }),
      (n.render = function () {
        var i = this.state.status;
        if (i === yo) return null;
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
        var a = lx(s, [
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
        return J.createElement(
          dx.Provider,
          { value: null },
          typeof o == "function"
            ? o(i, a)
            : J.cloneElement(J.Children.only(o), a),
        );
      }),
      e
    );
  })(J.Component);
er.contextType = dx;
er.propTypes = {};
function Ri() {}
er.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Ri,
  onEntering: Ri,
  onEntered: Ri,
  onExit: Ri,
  onExiting: Ri,
  onExited: Ri,
};
er.UNMOUNTED = yo;
er.EXITED = dr;
er.ENTERING = cn;
er.ENTERED = Bn;
er.EXITING = la;
const Is = !!(
  typeof window < "u" &&
  window.document &&
  window.document.createElement
);
var Vf = !1,
  Yf = !1;
try {
  var id = {
    get passive() {
      return (Vf = !0);
    },
    get once() {
      return (Yf = Vf = !0);
    },
  };
  Is &&
    (window.addEventListener("test", id, id),
    window.removeEventListener("test", id, !0));
} catch {}
function fx(t, e, n, r) {
  if (r && typeof r != "boolean" && !Yf) {
    var i = r.once,
      s = r.capture,
      o = n;
    !Yf &&
      i &&
      ((o =
        n.__once ||
        function a(l) {
          this.removeEventListener(e, a, s), n.call(this, l);
        }),
      (n.__once = o)),
      t.addEventListener(e, o, Vf ? r : s);
  }
  t.addEventListener(e, n, r);
}
function Gf(t, e, n, r) {
  var i = r && typeof r != "boolean" ? r.capture : r;
  t.removeEventListener(e, n, i),
    n.__once && t.removeEventListener(e, n.__once, i);
}
function Sc(t, e, n, r) {
  return (
    fx(t, e, n, r),
    function () {
      Gf(t, e, n, r);
    }
  );
}
function dC(t, e, n, r) {
  if ((r === void 0 && (r = !0), t)) {
    var i = document.createEvent("HTMLEvents");
    i.initEvent(e, n, r), t.dispatchEvent(i);
  }
}
function fC(t) {
  var e = Wn(t, "transitionDuration") || "",
    n = e.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(e) * n;
}
function hC(t, e, n) {
  n === void 0 && (n = 5);
  var r = !1,
    i = setTimeout(function () {
      r || dC(t, "transitionend", !0);
    }, e + n),
    s = Sc(
      t,
      "transitionend",
      function () {
        r = !0;
      },
      { once: !0 },
    );
  return function () {
    clearTimeout(i), s();
  };
}
function hx(t, e, n, r) {
  n == null && (n = fC(t) || 0);
  var i = hC(t, n, r),
    s = Sc(t, "transitionend", e);
  return function () {
    i(), s();
  };
}
function Ym(t, e) {
  const n = Wn(t, e) || "",
    r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function xp(t, e) {
  const n = Ym(t, "transitionDuration"),
    r = Ym(t, "transitionDelay"),
    i = hx(
      t,
      (s) => {
        s.target === t && (i(), e(s));
      },
      n + r,
    );
}
function to(...t) {
  return t
    .filter((e) => e != null)
    .reduce((e, n) => {
      if (typeof n != "function")
        throw new Error(
          "Invalid Argument Type, must only provide functions, undefined, or null.",
        );
      return e === null
        ? n
        : function (...i) {
            e.apply(this, i), n.apply(this, i);
          };
    }, null);
}
function px(t) {
  t.offsetHeight;
}
const Gm = (t) =>
  !t || typeof t == "function"
    ? t
    : (e) => {
        t.current = e;
      };
function pC(t, e) {
  const n = Gm(t),
    r = Gm(e);
  return (i) => {
    n && n(i), r && r(i);
  };
}
function Ca(t, e) {
  return b.useMemo(() => pC(t, e), [t, e]);
}
function mC(t) {
  return t && "setState" in t ? es.findDOMNode(t) : t ?? null;
}
const _p = J.forwardRef(
    (
      {
        onEnter: t,
        onEntering: e,
        onEntered: n,
        onExit: r,
        onExiting: i,
        onExited: s,
        addEndListener: o,
        children: a,
        childRef: l,
        ...c
      },
      u,
    ) => {
      const d = b.useRef(null),
        h = Ca(d, l),
        p = (S) => {
          h(mC(S));
        },
        m = (S) => (C) => {
          S && d.current && S(d.current, C);
        },
        g = b.useCallback(m(t), [t]),
        v = b.useCallback(m(e), [e]),
        y = b.useCallback(m(n), [n]),
        x = b.useCallback(m(r), [r]),
        _ = b.useCallback(m(i), [i]),
        w = b.useCallback(m(s), [s]),
        E = b.useCallback(m(o), [o]);
      return f.jsx(er, {
        ref: u,
        ...c,
        onEnter: g,
        onEntered: y,
        onEntering: v,
        onExit: x,
        onExited: w,
        onExiting: _,
        addEndListener: E,
        nodeRef: d,
        children:
          typeof a == "function"
            ? (S, C) => a(S, { ...C, ref: p })
            : J.cloneElement(a, { ref: p }),
      });
    },
  ),
  gC = {
    height: ["marginTop", "marginBottom"],
    width: ["marginLeft", "marginRight"],
  };
function yC(t, e) {
  const n = `offset${t[0].toUpperCase()}${t.slice(1)}`,
    r = e[n],
    i = gC[t];
  return r + parseInt(Wn(e, i[0]), 10) + parseInt(Wn(e, i[1]), 10);
}
const vC = {
    [dr]: "collapse",
    [la]: "collapsing",
    [cn]: "collapsing",
    [Bn]: "collapse show",
  },
  xC = J.forwardRef(
    (
      {
        onEnter: t,
        onEntering: e,
        onEntered: n,
        onExit: r,
        onExiting: i,
        className: s,
        children: o,
        dimension: a = "height",
        in: l = !1,
        timeout: c = 300,
        mountOnEnter: u = !1,
        unmountOnExit: d = !1,
        appear: h = !1,
        getDimensionValue: p = yC,
        ...m
      },
      g,
    ) => {
      const v = typeof a == "function" ? a() : a,
        y = b.useMemo(
          () =>
            to((S) => {
              S.style[v] = "0";
            }, t),
          [v, t],
        ),
        x = b.useMemo(
          () =>
            to((S) => {
              const C = `scroll${v[0].toUpperCase()}${v.slice(1)}`;
              S.style[v] = `${S[C]}px`;
            }, e),
          [v, e],
        ),
        _ = b.useMemo(
          () =>
            to((S) => {
              S.style[v] = null;
            }, n),
          [v, n],
        ),
        w = b.useMemo(
          () =>
            to((S) => {
              (S.style[v] = `${p(v, S)}px`), px(S);
            }, r),
          [r, p, v],
        ),
        E = b.useMemo(
          () =>
            to((S) => {
              S.style[v] = null;
            }, i),
          [v, i],
        );
      return f.jsx(_p, {
        ref: g,
        addEndListener: xp,
        ...m,
        "aria-expanded": m.role ? l : null,
        onEnter: y,
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
          J.cloneElement(o, {
            ...C,
            className: ie(
              s,
              o.props.className,
              vC[S],
              v === "width" && "collapse-horizontal",
            ),
          }),
      });
    },
  );
function _C(t) {
  const e = b.useRef(t);
  return (
    b.useEffect(() => {
      e.current = t;
    }, [t]),
    e
  );
}
function ft(t) {
  const e = _C(t);
  return b.useCallback(
    function (...n) {
      return e.current && e.current(...n);
    },
    [e],
  );
}
function bC() {
  return b.useState(null);
}
function wC() {
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
function EC(t) {
  const e = b.useRef(null);
  return (
    b.useEffect(() => {
      e.current = t;
    }),
    e.current
  );
}
const SC =
    typeof global < "u" &&
    global.navigator &&
    global.navigator.product === "ReactNative",
  CC = typeof document < "u",
  Kf = CC || SC ? b.useLayoutEffect : b.useEffect,
  kC = ["as", "disabled"];
function TC(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
function OC(t) {
  return !t || t.trim() === "#";
}
function bp({
  tagName: t,
  disabled: e,
  href: n,
  target: r,
  rel: i,
  role: s,
  onClick: o,
  tabIndex: a = 0,
  type: l,
}) {
  t || (n != null || r != null || i != null ? (t = "a") : (t = "button"));
  const c = { tagName: t };
  if (t === "button") return [{ type: l || "button", disabled: e }, c];
  const u = (h) => {
      if (((e || (t === "a" && OC(n))) && h.preventDefault(), e)) {
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
        target: t === "a" ? r : void 0,
        "aria-disabled": e || void 0,
        rel: t === "a" ? i : void 0,
        onClick: u,
        onKeyDown: d,
      },
      c,
    ]
  );
}
const mx = b.forwardRef((t, e) => {
  let { as: n, disabled: r } = t,
    i = TC(t, kC);
  const [s, { tagName: o }] = bp(Object.assign({ tagName: n, disabled: r }, i));
  return f.jsx(o, Object.assign({}, i, s, { ref: e }));
});
mx.displayName = "Button";
const AC = ["onKeyDown"];
function NC(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
function PC(t) {
  return !t || t.trim() === "#";
}
const wp = b.forwardRef((t, e) => {
  let { onKeyDown: n } = t,
    r = NC(t, AC);
  const [i] = bp(Object.assign({ tagName: "a" }, r)),
    s = ft((o) => {
      i.onKeyDown(o), n == null || n(o);
    });
  return PC(r.href) || r.role === "button"
    ? f.jsx("a", Object.assign({ ref: e }, r, i, { onKeyDown: s }))
    : f.jsx("a", Object.assign({ ref: e }, r, { onKeyDown: n }));
});
wp.displayName = "Anchor";
const LC = { [cn]: "show", [Bn]: "show" },
  _s = b.forwardRef(
    (
      {
        className: t,
        children: e,
        transitionClasses: n = {},
        onEnter: r,
        ...i
      },
      s,
    ) => {
      const o = {
          in: !1,
          timeout: 300,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          ...i,
        },
        a = b.useCallback(
          (l, c) => {
            px(l), r == null || r(l, c);
          },
          [r],
        );
      return f.jsx(_p, {
        ref: s,
        addEndListener: xp,
        ...o,
        onEnter: a,
        childRef: e.ref,
        children: (l, c) =>
          b.cloneElement(e, {
            ...c,
            className: ie("fade", t, e.props.className, LC[l], n[l]),
          }),
      });
    },
  );
_s.displayName = "Fade";
const jC = {
    "aria-label": K.string,
    onClick: K.func,
    variant: K.oneOf(["white"]),
  },
  fu = b.forwardRef(
    ({ className: t, variant: e, "aria-label": n = "Close", ...r }, i) =>
      f.jsx("button", {
        ref: i,
        type: "button",
        className: ie("btn-close", e && `btn-close-${e}`, t),
        "aria-label": n,
        ...r,
      }),
  );
fu.displayName = "CloseButton";
fu.propTypes = jC;
const ka = (t) =>
  b.forwardRef((e, n) =>
    f.jsx("div", { ...e, ref: n, className: ie(e.className, t) }),
  );
var RC = /-(.)/g;
function DC(t) {
  return t.replace(RC, function (e, n) {
    return n.toUpperCase();
  });
}
const MC = (t) => t[0].toUpperCase() + DC(t).slice(1);
function Xe(t, { displayName: e = MC(t), Component: n, defaultProps: r } = {}) {
  const i = b.forwardRef(
    ({ className: s, bsPrefix: o, as: a = n || "div", ...l }, c) => {
      const u = { ...r, ...l },
        d = ue(o, t);
      return f.jsx(a, { ref: c, className: ie(s, d), ...u });
    },
  );
  return (i.displayName = e), i;
}
const gx = ka("h4");
gx.displayName = "DivStyledAsH4";
const IC = Xe("alert-heading", { Component: gx }),
  FC = Xe("alert-link", { Component: wp }),
  yx = b.forwardRef((t, e) => {
    const {
        bsPrefix: n,
        show: r = !0,
        closeLabel: i = "Close alert",
        closeVariant: s,
        className: o,
        children: a,
        variant: l = "primary",
        onClose: c,
        dismissible: u,
        transition: d = _s,
        ...h
      } = vp(t, { show: "onClose" }),
      p = ue(n, "alert"),
      m = ft((y) => {
        c && c(!1, y);
      }),
      g = d === !0 ? _s : d,
      v = f.jsxs("div", {
        role: "alert",
        ...(g ? void 0 : h),
        ref: e,
        className: ie(o, p, l && `${p}-${l}`, u && `${p}-dismissible`),
        children: [
          u && f.jsx(fu, { onClick: m, "aria-label": i, variant: s }),
          a,
        ],
      });
    return g
      ? f.jsx(g, { unmountOnExit: !0, ...h, ref: void 0, in: r, children: v })
      : r
      ? v
      : null;
  });
yx.displayName = "Alert";
const BC = Object.assign(yx, { Link: FC, Heading: IC }),
  ht = b.forwardRef(
    (
      {
        as: t,
        bsPrefix: e,
        variant: n = "primary",
        size: r,
        active: i = !1,
        disabled: s = !1,
        className: o,
        ...a
      },
      l,
    ) => {
      const c = ue(e, "btn"),
        [u, { tagName: d }] = bp({ tagName: t, disabled: s, ...a }),
        h = d;
      return f.jsx(h, {
        ...u,
        ...a,
        ref: l,
        disabled: s,
        className: ie(
          o,
          c,
          i && "active",
          n && `${c}-${n}`,
          r && `${c}-${r}`,
          a.href && s && "disabled",
        ),
      });
    },
  );
ht.displayName = "Button";
const vx = b.forwardRef(
  ({ bsPrefix: t, className: e, variant: n, as: r = "img", ...i }, s) => {
    const o = ue(t, "card-img");
    return f.jsx(r, { ref: s, className: ie(n ? `${o}-${n}` : o, e), ...i });
  },
);
vx.displayName = "CardImg";
const Ep = b.createContext(null);
Ep.displayName = "CardHeaderContext";
const xx = b.forwardRef(
  ({ bsPrefix: t, className: e, as: n = "div", ...r }, i) => {
    const s = ue(t, "card-header"),
      o = b.useMemo(() => ({ cardHeaderBsPrefix: s }), [s]);
    return f.jsx(Ep.Provider, {
      value: o,
      children: f.jsx(n, { ref: i, ...r, className: ie(e, s) }),
    });
  },
);
xx.displayName = "CardHeader";
const $C = ka("h5"),
  zC = ka("h6"),
  _x = Xe("card-body"),
  HC = Xe("card-title", { Component: $C }),
  WC = Xe("card-subtitle", { Component: zC }),
  UC = Xe("card-link", { Component: "a" }),
  VC = Xe("card-text", { Component: "p" }),
  YC = Xe("card-footer"),
  GC = Xe("card-img-overlay"),
  bx = b.forwardRef(
    (
      {
        bsPrefix: t,
        className: e,
        bg: n,
        text: r,
        border: i,
        body: s = !1,
        children: o,
        as: a = "div",
        ...l
      },
      c,
    ) => {
      const u = ue(t, "card");
      return f.jsx(a, {
        ref: c,
        ...l,
        className: ie(
          e,
          u,
          n && `bg-${n}`,
          r && `text-${r}`,
          i && `border-${i}`,
        ),
        children: s ? f.jsx(_x, { children: o }) : o,
      });
    },
  );
bx.displayName = "Card";
const re = Object.assign(bx, {
  Img: vx,
  Title: HC,
  Subtitle: WC,
  Body: _x,
  Link: UC,
  Text: VC,
  Header: xx,
  Footer: YC,
  ImgOverlay: GC,
});
function KC(t) {
  const e = b.useRef(t);
  return (e.current = t), e;
}
function wx(t) {
  const e = KC(t);
  b.useEffect(() => () => e.current(), []);
}
function qC(t, e) {
  return b.Children.toArray(t).some((n) => b.isValidElement(n) && n.type === e);
}
function XC({ as: t, bsPrefix: e, className: n, ...r }) {
  e = ue(e, "col");
  const i = cx(),
    s = ux(),
    o = [],
    a = [];
  return (
    i.forEach((l) => {
      const c = r[l];
      delete r[l];
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
      { ...r, className: ie(n, ...o, ...a) },
      { as: t, bsPrefix: e, spans: o },
    ]
  );
}
const Lr = b.forwardRef((t, e) => {
  const [{ className: n, ...r }, { as: i = "div", bsPrefix: s, spans: o }] =
    XC(t);
  return f.jsx(i, { ...r, ref: e, className: ie(n, !o.length && s) });
});
Lr.displayName = "Col";
var QC = Function.prototype.bind.call(Function.prototype.call, [].slice);
function Xr(t, e) {
  return QC(t.querySelectorAll(e));
}
function JC() {
  const [, t] = b.useReducer((e) => !e, !1);
  return t;
}
var mt = "top",
  Bt = "bottom",
  $t = "right",
  gt = "left",
  hu = "auto",
  Fs = [mt, Bt, $t, gt],
  vi = "start",
  bs = "end",
  Ex = "clippingParents",
  Sp = "viewport",
  Bi = "popper",
  Sx = "reference",
  qf = Fs.reduce(function (t, e) {
    return t.concat([e + "-" + vi, e + "-" + bs]);
  }, []),
  Cp = [].concat(Fs, [hu]).reduce(function (t, e) {
    return t.concat([e, e + "-" + vi, e + "-" + bs]);
  }, []),
  Cx = "beforeRead",
  kx = "read",
  Tx = "afterRead",
  Ox = "beforeMain",
  Ax = "main",
  Nx = "afterMain",
  Px = "beforeWrite",
  Lx = "write",
  jx = "afterWrite",
  Rx = [Cx, kx, Tx, Ox, Ax, Nx, Px, Lx, jx];
function kn(t) {
  return t.split("-")[0];
}
function zt(t) {
  if (t == null) return window;
  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return (e && e.defaultView) || window;
  }
  return t;
}
function xi(t) {
  var e = zt(t).Element;
  return t instanceof e || t instanceof Element;
}
function Qt(t) {
  var e = zt(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
function kp(t) {
  if (typeof ShadowRoot > "u") return !1;
  var e = zt(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
var ui = Math.max,
  Cc = Math.min,
  ws = Math.round;
function Xf() {
  var t = navigator.userAgentData;
  return t != null && t.brands && Array.isArray(t.brands)
    ? t.brands
        .map(function (e) {
          return e.brand + "/" + e.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function Dx() {
  return !/^((?!chrome|android).)*safari/i.test(Xf());
}
function Es(t, e, n) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  var r = t.getBoundingClientRect(),
    i = 1,
    s = 1;
  e &&
    Qt(t) &&
    ((i = (t.offsetWidth > 0 && ws(r.width) / t.offsetWidth) || 1),
    (s = (t.offsetHeight > 0 && ws(r.height) / t.offsetHeight) || 1));
  var o = xi(t) ? zt(t) : window,
    a = o.visualViewport,
    l = !Dx() && n,
    c = (r.left + (l && a ? a.offsetLeft : 0)) / i,
    u = (r.top + (l && a ? a.offsetTop : 0)) / s,
    d = r.width / i,
    h = r.height / s;
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
function Tp(t) {
  var e = Es(t),
    n = t.offsetWidth,
    r = t.offsetHeight;
  return (
    Math.abs(e.width - n) <= 1 && (n = e.width),
    Math.abs(e.height - r) <= 1 && (r = e.height),
    { x: t.offsetLeft, y: t.offsetTop, width: n, height: r }
  );
}
function Mx(t, e) {
  var n = e.getRootNode && e.getRootNode();
  if (t.contains(e)) return !0;
  if (n && kp(n)) {
    var r = e;
    do {
      if (r && t.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Nn(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function Xn(t) {
  return zt(t).getComputedStyle(t);
}
function ZC(t) {
  return ["table", "td", "th"].indexOf(Nn(t)) >= 0;
}
function $r(t) {
  return ((xi(t) ? t.ownerDocument : t.document) || window.document)
    .documentElement;
}
function pu(t) {
  return Nn(t) === "html"
    ? t
    : t.assignedSlot || t.parentNode || (kp(t) ? t.host : null) || $r(t);
}
function Km(t) {
  return !Qt(t) || Xn(t).position === "fixed" ? null : t.offsetParent;
}
function e5(t) {
  var e = /firefox/i.test(Xf()),
    n = /Trident/i.test(Xf());
  if (n && Qt(t)) {
    var r = Xn(t);
    if (r.position === "fixed") return null;
  }
  var i = pu(t);
  for (kp(i) && (i = i.host); Qt(i) && ["html", "body"].indexOf(Nn(i)) < 0; ) {
    var s = Xn(i);
    if (
      s.transform !== "none" ||
      s.perspective !== "none" ||
      s.contain === "paint" ||
      ["transform", "perspective"].indexOf(s.willChange) !== -1 ||
      (e && s.willChange === "filter") ||
      (e && s.filter && s.filter !== "none")
    )
      return i;
    i = i.parentNode;
  }
  return null;
}
function Ta(t) {
  for (var e = zt(t), n = Km(t); n && ZC(n) && Xn(n).position === "static"; )
    n = Km(n);
  return n &&
    (Nn(n) === "html" || (Nn(n) === "body" && Xn(n).position === "static"))
    ? e
    : n || e5(t) || e;
}
function Op(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function Lo(t, e, n) {
  return ui(t, Cc(e, n));
}
function t5(t, e, n) {
  var r = Lo(t, e, n);
  return r > n ? n : r;
}
function Ix() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Fx(t) {
  return Object.assign({}, Ix(), t);
}
function Bx(t, e) {
  return e.reduce(function (n, r) {
    return (n[r] = t), n;
  }, {});
}
var n5 = function (e, n) {
  return (
    (e =
      typeof e == "function"
        ? e(Object.assign({}, n.rects, { placement: n.placement }))
        : e),
    Fx(typeof e != "number" ? e : Bx(e, Fs))
  );
};
function r5(t) {
  var e,
    n = t.state,
    r = t.name,
    i = t.options,
    s = n.elements.arrow,
    o = n.modifiersData.popperOffsets,
    a = kn(n.placement),
    l = Op(a),
    c = [gt, $t].indexOf(a) >= 0,
    u = c ? "height" : "width";
  if (!(!s || !o)) {
    var d = n5(i.padding, n),
      h = Tp(s),
      p = l === "y" ? mt : gt,
      m = l === "y" ? Bt : $t,
      g =
        n.rects.reference[u] + n.rects.reference[l] - o[l] - n.rects.popper[u],
      v = o[l] - n.rects.reference[l],
      y = Ta(s),
      x = y ? (l === "y" ? y.clientHeight || 0 : y.clientWidth || 0) : 0,
      _ = g / 2 - v / 2,
      w = d[p],
      E = x - h[u] - d[m],
      S = x / 2 - h[u] / 2 + _,
      C = Lo(w, S, E),
      k = l;
    n.modifiersData[r] = ((e = {}), (e[k] = C), (e.centerOffset = C - S), e);
  }
}
function i5(t) {
  var e = t.state,
    n = t.options,
    r = n.element,
    i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null &&
    ((typeof i == "string" && ((i = e.elements.popper.querySelector(i)), !i)) ||
      (Mx(e.elements.popper, i) && (e.elements.arrow = i)));
}
const $x = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: r5,
  effect: i5,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Ss(t) {
  return t.split("-")[1];
}
var s5 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function o5(t, e) {
  var n = t.x,
    r = t.y,
    i = e.devicePixelRatio || 1;
  return { x: ws(n * i) / i || 0, y: ws(r * i) / i || 0 };
}
function qm(t) {
  var e,
    n = t.popper,
    r = t.popperRect,
    i = t.placement,
    s = t.variation,
    o = t.offsets,
    a = t.position,
    l = t.gpuAcceleration,
    c = t.adaptive,
    u = t.roundOffsets,
    d = t.isFixed,
    h = o.x,
    p = h === void 0 ? 0 : h,
    m = o.y,
    g = m === void 0 ? 0 : m,
    v = typeof u == "function" ? u({ x: p, y: g }) : { x: p, y: g };
  (p = v.x), (g = v.y);
  var y = o.hasOwnProperty("x"),
    x = o.hasOwnProperty("y"),
    _ = gt,
    w = mt,
    E = window;
  if (c) {
    var S = Ta(n),
      C = "clientHeight",
      k = "clientWidth";
    if (
      (S === zt(n) &&
        ((S = $r(n)),
        Xn(S).position !== "static" &&
          a === "absolute" &&
          ((C = "scrollHeight"), (k = "scrollWidth"))),
      (S = S),
      i === mt || ((i === gt || i === $t) && s === bs))
    ) {
      w = Bt;
      var L = d && S === E && E.visualViewport ? E.visualViewport.height : S[C];
      (g -= L - r.height), (g *= l ? 1 : -1);
    }
    if (i === gt || ((i === mt || i === Bt) && s === bs)) {
      _ = $t;
      var j = d && S === E && E.visualViewport ? E.visualViewport.width : S[k];
      (p -= j - r.width), (p *= l ? 1 : -1);
    }
  }
  var $ = Object.assign({ position: a }, c && s5),
    N = u === !0 ? o5({ x: p, y: g }, zt(n)) : { x: p, y: g };
  if (((p = N.x), (g = N.y), l)) {
    var D;
    return Object.assign(
      {},
      $,
      ((D = {}),
      (D[w] = x ? "0" : ""),
      (D[_] = y ? "0" : ""),
      (D.transform =
        (E.devicePixelRatio || 1) <= 1
          ? "translate(" + p + "px, " + g + "px)"
          : "translate3d(" + p + "px, " + g + "px, 0)"),
      D),
    );
  }
  return Object.assign(
    {},
    $,
    ((e = {}),
    (e[w] = x ? g + "px" : ""),
    (e[_] = y ? p + "px" : ""),
    (e.transform = ""),
    e),
  );
}
function a5(t) {
  var e = t.state,
    n = t.options,
    r = n.gpuAcceleration,
    i = r === void 0 ? !0 : r,
    s = n.adaptive,
    o = s === void 0 ? !0 : s,
    a = n.roundOffsets,
    l = a === void 0 ? !0 : a,
    c = {
      placement: kn(e.placement),
      variation: Ss(e.placement),
      popper: e.elements.popper,
      popperRect: e.rects.popper,
      gpuAcceleration: i,
      isFixed: e.options.strategy === "fixed",
    };
  e.modifiersData.popperOffsets != null &&
    (e.styles.popper = Object.assign(
      {},
      e.styles.popper,
      qm(
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
        qm(
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
const Ap = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: a5,
  data: {},
};
var tl = { passive: !0 };
function l5(t) {
  var e = t.state,
    n = t.instance,
    r = t.options,
    i = r.scroll,
    s = i === void 0 ? !0 : i,
    o = r.resize,
    a = o === void 0 ? !0 : o,
    l = zt(e.elements.popper),
    c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return (
    s &&
      c.forEach(function (u) {
        u.addEventListener("scroll", n.update, tl);
      }),
    a && l.addEventListener("resize", n.update, tl),
    function () {
      s &&
        c.forEach(function (u) {
          u.removeEventListener("scroll", n.update, tl);
        }),
        a && l.removeEventListener("resize", n.update, tl);
    }
  );
}
const Np = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: l5,
  data: {},
};
var c5 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Bl(t) {
  return t.replace(/left|right|bottom|top/g, function (e) {
    return c5[e];
  });
}
var u5 = { start: "end", end: "start" };
function Xm(t) {
  return t.replace(/start|end/g, function (e) {
    return u5[e];
  });
}
function Pp(t) {
  var e = zt(t),
    n = e.pageXOffset,
    r = e.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Lp(t) {
  return Es($r(t)).left + Pp(t).scrollLeft;
}
function d5(t, e) {
  var n = zt(t),
    r = $r(t),
    i = n.visualViewport,
    s = r.clientWidth,
    o = r.clientHeight,
    a = 0,
    l = 0;
  if (i) {
    (s = i.width), (o = i.height);
    var c = Dx();
    (c || (!c && e === "fixed")) && ((a = i.offsetLeft), (l = i.offsetTop));
  }
  return { width: s, height: o, x: a + Lp(t), y: l };
}
function f5(t) {
  var e,
    n = $r(t),
    r = Pp(t),
    i = (e = t.ownerDocument) == null ? void 0 : e.body,
    s = ui(
      n.scrollWidth,
      n.clientWidth,
      i ? i.scrollWidth : 0,
      i ? i.clientWidth : 0,
    ),
    o = ui(
      n.scrollHeight,
      n.clientHeight,
      i ? i.scrollHeight : 0,
      i ? i.clientHeight : 0,
    ),
    a = -r.scrollLeft + Lp(t),
    l = -r.scrollTop;
  return (
    Xn(i || n).direction === "rtl" &&
      (a += ui(n.clientWidth, i ? i.clientWidth : 0) - s),
    { width: s, height: o, x: a, y: l }
  );
}
function jp(t) {
  var e = Xn(t),
    n = e.overflow,
    r = e.overflowX,
    i = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function zx(t) {
  return ["html", "body", "#document"].indexOf(Nn(t)) >= 0
    ? t.ownerDocument.body
    : Qt(t) && jp(t)
    ? t
    : zx(pu(t));
}
function jo(t, e) {
  var n;
  e === void 0 && (e = []);
  var r = zx(t),
    i = r === ((n = t.ownerDocument) == null ? void 0 : n.body),
    s = zt(r),
    o = i ? [s].concat(s.visualViewport || [], jp(r) ? r : []) : r,
    a = e.concat(o);
  return i ? a : a.concat(jo(pu(o)));
}
function Qf(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height,
  });
}
function h5(t, e) {
  var n = Es(t, !1, e === "fixed");
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
function Qm(t, e, n) {
  return e === Sp ? Qf(d5(t, n)) : xi(e) ? h5(e, n) : Qf(f5($r(t)));
}
function p5(t) {
  var e = jo(pu(t)),
    n = ["absolute", "fixed"].indexOf(Xn(t).position) >= 0,
    r = n && Qt(t) ? Ta(t) : t;
  return xi(r)
    ? e.filter(function (i) {
        return xi(i) && Mx(i, r) && Nn(i) !== "body";
      })
    : [];
}
function m5(t, e, n, r) {
  var i = e === "clippingParents" ? p5(t) : [].concat(e),
    s = [].concat(i, [n]),
    o = s[0],
    a = s.reduce(
      function (l, c) {
        var u = Qm(t, c, r);
        return (
          (l.top = ui(u.top, l.top)),
          (l.right = Cc(u.right, l.right)),
          (l.bottom = Cc(u.bottom, l.bottom)),
          (l.left = ui(u.left, l.left)),
          l
        );
      },
      Qm(t, o, r),
    );
  return (
    (a.width = a.right - a.left),
    (a.height = a.bottom - a.top),
    (a.x = a.left),
    (a.y = a.top),
    a
  );
}
function Hx(t) {
  var e = t.reference,
    n = t.element,
    r = t.placement,
    i = r ? kn(r) : null,
    s = r ? Ss(r) : null,
    o = e.x + e.width / 2 - n.width / 2,
    a = e.y + e.height / 2 - n.height / 2,
    l;
  switch (i) {
    case mt:
      l = { x: o, y: e.y - n.height };
      break;
    case Bt:
      l = { x: o, y: e.y + e.height };
      break;
    case $t:
      l = { x: e.x + e.width, y: a };
      break;
    case gt:
      l = { x: e.x - n.width, y: a };
      break;
    default:
      l = { x: e.x, y: e.y };
  }
  var c = i ? Op(i) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (s) {
      case vi:
        l[c] = l[c] - (e[u] / 2 - n[u] / 2);
        break;
      case bs:
        l[c] = l[c] + (e[u] / 2 - n[u] / 2);
        break;
    }
  }
  return l;
}
function Cs(t, e) {
  e === void 0 && (e = {});
  var n = e,
    r = n.placement,
    i = r === void 0 ? t.placement : r,
    s = n.strategy,
    o = s === void 0 ? t.strategy : s,
    a = n.boundary,
    l = a === void 0 ? Ex : a,
    c = n.rootBoundary,
    u = c === void 0 ? Sp : c,
    d = n.elementContext,
    h = d === void 0 ? Bi : d,
    p = n.altBoundary,
    m = p === void 0 ? !1 : p,
    g = n.padding,
    v = g === void 0 ? 0 : g,
    y = Fx(typeof v != "number" ? v : Bx(v, Fs)),
    x = h === Bi ? Sx : Bi,
    _ = t.rects.popper,
    w = t.elements[m ? x : h],
    E = m5(xi(w) ? w : w.contextElement || $r(t.elements.popper), l, u, o),
    S = Es(t.elements.reference),
    C = Hx({ reference: S, element: _, strategy: "absolute", placement: i }),
    k = Qf(Object.assign({}, _, C)),
    L = h === Bi ? k : S,
    j = {
      top: E.top - L.top + y.top,
      bottom: L.bottom - E.bottom + y.bottom,
      left: E.left - L.left + y.left,
      right: L.right - E.right + y.right,
    },
    $ = t.modifiersData.offset;
  if (h === Bi && $) {
    var N = $[i];
    Object.keys(j).forEach(function (D) {
      var H = [$t, Bt].indexOf(D) >= 0 ? 1 : -1,
        B = [mt, Bt].indexOf(D) >= 0 ? "y" : "x";
      j[D] += N[B] * H;
    });
  }
  return j;
}
function g5(t, e) {
  e === void 0 && (e = {});
  var n = e,
    r = n.placement,
    i = n.boundary,
    s = n.rootBoundary,
    o = n.padding,
    a = n.flipVariations,
    l = n.allowedAutoPlacements,
    c = l === void 0 ? Cp : l,
    u = Ss(r),
    d = u
      ? a
        ? qf
        : qf.filter(function (m) {
            return Ss(m) === u;
          })
      : Fs,
    h = d.filter(function (m) {
      return c.indexOf(m) >= 0;
    });
  h.length === 0 && (h = d);
  var p = h.reduce(function (m, g) {
    return (
      (m[g] = Cs(t, { placement: g, boundary: i, rootBoundary: s, padding: o })[
        kn(g)
      ]),
      m
    );
  }, {});
  return Object.keys(p).sort(function (m, g) {
    return p[m] - p[g];
  });
}
function y5(t) {
  if (kn(t) === hu) return [];
  var e = Bl(t);
  return [Xm(t), e, Xm(e)];
}
function v5(t) {
  var e = t.state,
    n = t.options,
    r = t.name;
  if (!e.modifiersData[r]._skip) {
    for (
      var i = n.mainAxis,
        s = i === void 0 ? !0 : i,
        o = n.altAxis,
        a = o === void 0 ? !0 : o,
        l = n.fallbackPlacements,
        c = n.padding,
        u = n.boundary,
        d = n.rootBoundary,
        h = n.altBoundary,
        p = n.flipVariations,
        m = p === void 0 ? !0 : p,
        g = n.allowedAutoPlacements,
        v = e.options.placement,
        y = kn(v),
        x = y === v,
        _ = l || (x || !m ? [Bl(v)] : y5(v)),
        w = [v].concat(_).reduce(function (W, V) {
          return W.concat(
            kn(V) === hu
              ? g5(e, {
                  placement: V,
                  boundary: u,
                  rootBoundary: d,
                  padding: c,
                  flipVariations: m,
                  allowedAutoPlacements: g,
                })
              : V,
          );
        }, []),
        E = e.rects.reference,
        S = e.rects.popper,
        C = new Map(),
        k = !0,
        L = w[0],
        j = 0;
      j < w.length;
      j++
    ) {
      var $ = w[j],
        N = kn($),
        D = Ss($) === vi,
        H = [mt, Bt].indexOf(N) >= 0,
        B = H ? "width" : "height",
        Y = Cs(e, {
          placement: $,
          boundary: u,
          rootBoundary: d,
          altBoundary: h,
          padding: c,
        }),
        G = H ? (D ? $t : gt) : D ? Bt : mt;
      E[B] > S[B] && (G = Bl(G));
      var P = Bl(G),
        A = [];
      if (
        (s && A.push(Y[N] <= 0),
        a && A.push(Y[G] <= 0, Y[P] <= 0),
        A.every(function (W) {
          return W;
        }))
      ) {
        (L = $), (k = !1);
        break;
      }
      C.set($, A);
    }
    if (k)
      for (
        var T = m ? 3 : 1,
          F = function (V) {
            var X = w.find(function (ge) {
              var Be = C.get(ge);
              if (Be)
                return Be.slice(0, V).every(function (Qe) {
                  return Qe;
                });
            });
            if (X) return (L = X), "break";
          },
          M = T;
        M > 0;
        M--
      ) {
        var z = F(M);
        if (z === "break") break;
      }
    e.placement !== L &&
      ((e.modifiersData[r]._skip = !0), (e.placement = L), (e.reset = !0));
  }
}
const Wx = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: v5,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function Jm(t, e, n) {
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
function Zm(t) {
  return [mt, $t, Bt, gt].some(function (e) {
    return t[e] >= 0;
  });
}
function x5(t) {
  var e = t.state,
    n = t.name,
    r = e.rects.reference,
    i = e.rects.popper,
    s = e.modifiersData.preventOverflow,
    o = Cs(e, { elementContext: "reference" }),
    a = Cs(e, { altBoundary: !0 }),
    l = Jm(o, r),
    c = Jm(a, i, s),
    u = Zm(l),
    d = Zm(c);
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
const Ux = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: x5,
};
function _5(t, e, n) {
  var r = kn(t),
    i = [gt, mt].indexOf(r) >= 0 ? -1 : 1,
    s = typeof n == "function" ? n(Object.assign({}, e, { placement: t })) : n,
    o = s[0],
    a = s[1];
  return (
    (o = o || 0),
    (a = (a || 0) * i),
    [gt, $t].indexOf(r) >= 0 ? { x: a, y: o } : { x: o, y: a }
  );
}
function b5(t) {
  var e = t.state,
    n = t.options,
    r = t.name,
    i = n.offset,
    s = i === void 0 ? [0, 0] : i,
    o = Cp.reduce(function (u, d) {
      return (u[d] = _5(d, e.rects, s)), u;
    }, {}),
    a = o[e.placement],
    l = a.x,
    c = a.y;
  e.modifiersData.popperOffsets != null &&
    ((e.modifiersData.popperOffsets.x += l),
    (e.modifiersData.popperOffsets.y += c)),
    (e.modifiersData[r] = o);
}
const Vx = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: b5,
};
function w5(t) {
  var e = t.state,
    n = t.name;
  e.modifiersData[n] = Hx({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement,
  });
}
const Rp = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: w5,
  data: {},
};
function E5(t) {
  return t === "x" ? "y" : "x";
}
function S5(t) {
  var e = t.state,
    n = t.options,
    r = t.name,
    i = n.mainAxis,
    s = i === void 0 ? !0 : i,
    o = n.altAxis,
    a = o === void 0 ? !1 : o,
    l = n.boundary,
    c = n.rootBoundary,
    u = n.altBoundary,
    d = n.padding,
    h = n.tether,
    p = h === void 0 ? !0 : h,
    m = n.tetherOffset,
    g = m === void 0 ? 0 : m,
    v = Cs(e, { boundary: l, rootBoundary: c, padding: d, altBoundary: u }),
    y = kn(e.placement),
    x = Ss(e.placement),
    _ = !x,
    w = Op(y),
    E = E5(w),
    S = e.modifiersData.popperOffsets,
    C = e.rects.reference,
    k = e.rects.popper,
    L =
      typeof g == "function"
        ? g(Object.assign({}, e.rects, { placement: e.placement }))
        : g,
    j =
      typeof L == "number"
        ? { mainAxis: L, altAxis: L }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, L),
    $ = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
    N = { x: 0, y: 0 };
  if (S) {
    if (s) {
      var D,
        H = w === "y" ? mt : gt,
        B = w === "y" ? Bt : $t,
        Y = w === "y" ? "height" : "width",
        G = S[w],
        P = G + v[H],
        A = G - v[B],
        T = p ? -k[Y] / 2 : 0,
        F = x === vi ? C[Y] : k[Y],
        M = x === vi ? -k[Y] : -C[Y],
        z = e.elements.arrow,
        W = p && z ? Tp(z) : { width: 0, height: 0 },
        V = e.modifiersData["arrow#persistent"]
          ? e.modifiersData["arrow#persistent"].padding
          : Ix(),
        X = V[H],
        ge = V[B],
        Be = Lo(0, C[Y], W[Y]),
        Qe = _ ? C[Y] / 2 - T - Be - X - j.mainAxis : F - Be - X - j.mainAxis,
        Je = _
          ? -C[Y] / 2 + T + Be + ge + j.mainAxis
          : M + Be + ge + j.mainAxis,
        ke = e.elements.arrow && Ta(e.elements.arrow),
        ct = ke ? (w === "y" ? ke.clientTop || 0 : ke.clientLeft || 0) : 0,
        Ye = (D = $ == null ? void 0 : $[w]) != null ? D : 0,
        $e = G + Qe - Ye - ct,
        Q = G + Je - Ye,
        Le = Lo(p ? Cc(P, $e) : P, G, p ? ui(A, Q) : A);
      (S[w] = Le), (N[w] = Le - G);
    }
    if (a) {
      var Te,
        we = w === "x" ? mt : gt,
        nr = w === "x" ? Bt : $t,
        At = S[E],
        ut = E === "y" ? "height" : "width",
        Nt = At + v[we],
        vn = At - v[nr],
        Wr = [mt, gt].indexOf(y) !== -1,
        le = (Te = $ == null ? void 0 : $[E]) != null ? Te : 0,
        Pn = Wr ? Nt : At - C[ut] - k[ut] - le + j.altAxis,
        Us = Wr ? At + C[ut] + k[ut] - le - j.altAxis : vn,
        x0 = p && Wr ? t5(Pn, At, Us) : Lo(p ? Pn : Nt, At, p ? Us : vn);
      (S[E] = x0), (N[E] = x0 - At);
    }
    e.modifiersData[r] = N;
  }
}
const Yx = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: S5,
  requiresIfExists: ["offset"],
};
function C5(t) {
  return { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
}
function k5(t) {
  return t === zt(t) || !Qt(t) ? Pp(t) : C5(t);
}
function T5(t) {
  var e = t.getBoundingClientRect(),
    n = ws(e.width) / t.offsetWidth || 1,
    r = ws(e.height) / t.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function O5(t, e, n) {
  n === void 0 && (n = !1);
  var r = Qt(e),
    i = Qt(e) && T5(e),
    s = $r(e),
    o = Es(t, i, n),
    a = { scrollLeft: 0, scrollTop: 0 },
    l = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((Nn(e) !== "body" || jp(s)) && (a = k5(e)),
      Qt(e)
        ? ((l = Es(e, !0)), (l.x += e.clientLeft), (l.y += e.clientTop))
        : s && (l.x = Lp(s))),
    {
      x: o.left + a.scrollLeft - l.x,
      y: o.top + a.scrollTop - l.y,
      width: o.width,
      height: o.height,
    }
  );
}
function A5(t) {
  var e = new Map(),
    n = new Set(),
    r = [];
  t.forEach(function (s) {
    e.set(s.name, s);
  });
  function i(s) {
    n.add(s.name);
    var o = [].concat(s.requires || [], s.requiresIfExists || []);
    o.forEach(function (a) {
      if (!n.has(a)) {
        var l = e.get(a);
        l && i(l);
      }
    }),
      r.push(s);
  }
  return (
    t.forEach(function (s) {
      n.has(s.name) || i(s);
    }),
    r
  );
}
function N5(t) {
  var e = A5(t);
  return Rx.reduce(function (n, r) {
    return n.concat(
      e.filter(function (i) {
        return i.phase === r;
      }),
    );
  }, []);
}
function P5(t) {
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
function L5(t) {
  var e = t.reduce(function (n, r) {
    var i = n[r.name];
    return (
      (n[r.name] = i
        ? Object.assign({}, i, r, {
            options: Object.assign({}, i.options, r.options),
            data: Object.assign({}, i.data, r.data),
          })
        : r),
      n
    );
  }, {});
  return Object.keys(e).map(function (n) {
    return e[n];
  });
}
var eg = { placement: "bottom", modifiers: [], strategy: "absolute" };
function tg() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  return !e.some(function (r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function mu(t) {
  t === void 0 && (t = {});
  var e = t,
    n = e.defaultModifiers,
    r = n === void 0 ? [] : n,
    i = e.defaultOptions,
    s = i === void 0 ? eg : i;
  return function (a, l, c) {
    c === void 0 && (c = s);
    var u = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, eg, s),
        modifiersData: {},
        elements: { reference: a, popper: l },
        attributes: {},
        styles: {},
      },
      d = [],
      h = !1,
      p = {
        state: u,
        setOptions: function (y) {
          var x = typeof y == "function" ? y(u.options) : y;
          g(),
            (u.options = Object.assign({}, s, u.options, x)),
            (u.scrollParents = {
              reference: xi(a)
                ? jo(a)
                : a.contextElement
                ? jo(a.contextElement)
                : [],
              popper: jo(l),
            });
          var _ = N5(L5([].concat(r, u.options.modifiers)));
          return (
            (u.orderedModifiers = _.filter(function (w) {
              return w.enabled;
            })),
            m(),
            p.update()
          );
        },
        forceUpdate: function () {
          if (!h) {
            var y = u.elements,
              x = y.reference,
              _ = y.popper;
            if (tg(x, _)) {
              (u.rects = {
                reference: O5(x, Ta(_), u.options.strategy === "fixed"),
                popper: Tp(_),
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
                  L = E.name;
                typeof S == "function" &&
                  (u = S({ state: u, options: k, name: L, instance: p }) || u);
              }
            }
          }
        },
        update: P5(function () {
          return new Promise(function (v) {
            p.forceUpdate(), v(u);
          });
        }),
        destroy: function () {
          g(), (h = !0);
        },
      };
    if (!tg(a, l)) return p;
    p.setOptions(c).then(function (v) {
      !h && c.onFirstUpdate && c.onFirstUpdate(v);
    });
    function m() {
      u.orderedModifiers.forEach(function (v) {
        var y = v.name,
          x = v.options,
          _ = x === void 0 ? {} : x,
          w = v.effect;
        if (typeof w == "function") {
          var E = w({ state: u, name: y, instance: p, options: _ }),
            S = function () {};
          d.push(E || S);
        }
      });
    }
    function g() {
      d.forEach(function (v) {
        return v();
      }),
        (d = []);
    }
    return p;
  };
}
var j5 = mu();
function ng(t, e) {
  if (t.contains) return t.contains(e);
  if (t.compareDocumentPosition)
    return t === e || !!(t.compareDocumentPosition(e) & 16);
}
const kc = b.createContext(null),
  Dp = (t, e = null) => (t != null ? String(t) : e || null),
  Mp = b.createContext(null);
Mp.displayName = "NavContext";
const R5 = "data-rr-ui-",
  D5 = "rrUi";
function gu(t) {
  return `${R5}${t}`;
}
function M5(t) {
  return `${D5}${t}`;
}
const Gx = b.createContext(Is ? window : void 0);
Gx.Provider;
function Ip() {
  return b.useContext(Gx);
}
const ki = b.createContext(null);
ki.displayName = "NavbarContext";
const I5 = { type: K.string, tooltip: K.bool, as: K.elementType },
  yu = b.forwardRef(
    (
      { as: t = "div", className: e, type: n = "valid", tooltip: r = !1, ...i },
      s,
    ) =>
      f.jsx(t, {
        ...i,
        ref: s,
        className: ie(e, `${n}-${r ? "tooltip" : "feedback"}`),
      }),
  );
yu.displayName = "Feedback";
yu.propTypes = I5;
const Qn = b.createContext({}),
  Fp = b.forwardRef(
    (
      {
        id: t,
        bsPrefix: e,
        className: n,
        type: r = "checkbox",
        isValid: i = !1,
        isInvalid: s = !1,
        as: o = "input",
        ...a
      },
      l,
    ) => {
      const { controlId: c } = b.useContext(Qn);
      return (
        (e = ue(e, "form-check-input")),
        f.jsx(o, {
          ...a,
          ref: l,
          type: r,
          id: t || c,
          className: ie(n, e, i && "is-valid", s && "is-invalid"),
        })
      );
    },
  );
Fp.displayName = "FormCheckInput";
const Tc = b.forwardRef(
  ({ bsPrefix: t, className: e, htmlFor: n, ...r }, i) => {
    const { controlId: s } = b.useContext(Qn);
    return (
      (t = ue(t, "form-check-label")),
      f.jsx("label", { ...r, ref: i, htmlFor: n || s, className: ie(e, t) })
    );
  },
);
Tc.displayName = "FormCheckLabel";
const Kx = b.forwardRef(
  (
    {
      id: t,
      bsPrefix: e,
      bsSwitchPrefix: n,
      inline: r = !1,
      reverse: i = !1,
      disabled: s = !1,
      isValid: o = !1,
      isInvalid: a = !1,
      feedbackTooltip: l = !1,
      feedback: c,
      feedbackType: u,
      className: d,
      style: h,
      title: p = "",
      type: m = "checkbox",
      label: g,
      children: v,
      as: y = "input",
      ...x
    },
    _,
  ) => {
    (e = ue(e, "form-check")), (n = ue(n, "form-switch"));
    const { controlId: w } = b.useContext(Qn),
      E = b.useMemo(() => ({ controlId: t || w }), [w, t]),
      S = (!v && g != null && g !== !1) || qC(v, Tc),
      C = f.jsx(Fp, {
        ...x,
        type: m === "switch" ? "checkbox" : m,
        ref: _,
        isValid: o,
        isInvalid: a,
        disabled: s,
        as: y,
      });
    return f.jsx(Qn.Provider, {
      value: E,
      children: f.jsx("div", {
        style: h,
        className: ie(
          d,
          S && e,
          r && `${e}-inline`,
          i && `${e}-reverse`,
          m === "switch" && n,
        ),
        children:
          v ||
          f.jsxs(f.Fragment, {
            children: [
              C,
              S && f.jsx(Tc, { title: p, children: g }),
              c && f.jsx(yu, { type: u, tooltip: l, children: c }),
            ],
          }),
      }),
    });
  },
);
Kx.displayName = "FormCheck";
const Oc = Object.assign(Kx, { Input: Fp, Label: Tc }),
  qx = b.forwardRef(
    (
      {
        bsPrefix: t,
        type: e,
        size: n,
        htmlSize: r,
        id: i,
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
      const { controlId: p } = b.useContext(Qn);
      t = ue(t, "form-control");
      let m;
      return (
        l
          ? (m = { [`${t}-plaintext`]: !0 })
          : (m = { [t]: !0, [`${t}-${n}`]: n }),
        f.jsx(u, {
          ...d,
          type: e,
          size: r,
          ref: h,
          readOnly: c,
          id: i || p,
          className: ie(
            s,
            m,
            o && "is-valid",
            a && "is-invalid",
            e === "color" && `${t}-color`,
          ),
        })
      );
    },
  );
qx.displayName = "FormControl";
const F5 = Object.assign(qx, { Feedback: yu }),
  B5 = Xe("form-floating"),
  Bp = b.forwardRef(({ controlId: t, as: e = "div", ...n }, r) => {
    const i = b.useMemo(() => ({ controlId: t }), [t]);
    return f.jsx(Qn.Provider, {
      value: i,
      children: f.jsx(e, { ...n, ref: r }),
    });
  });
Bp.displayName = "FormGroup";
const Xx = b.forwardRef(
  (
    {
      as: t = "label",
      bsPrefix: e,
      column: n = !1,
      visuallyHidden: r = !1,
      className: i,
      htmlFor: s,
      ...o
    },
    a,
  ) => {
    const { controlId: l } = b.useContext(Qn);
    e = ue(e, "form-label");
    let c = "col-form-label";
    typeof n == "string" && (c = `${c} ${c}-${n}`);
    const u = ie(i, e, r && "visually-hidden", n && c);
    return (
      (s = s || l),
      n
        ? f.jsx(Lr, { ref: a, as: "label", className: u, htmlFor: s, ...o })
        : f.jsx(t, { ref: a, className: u, htmlFor: s, ...o })
    );
  },
);
Xx.displayName = "FormLabel";
const Qx = b.forwardRef(({ bsPrefix: t, className: e, id: n, ...r }, i) => {
  const { controlId: s } = b.useContext(Qn);
  return (
    (t = ue(t, "form-range")),
    f.jsx("input", {
      ...r,
      type: "range",
      ref: i,
      className: ie(e, t),
      id: n || s,
    })
  );
});
Qx.displayName = "FormRange";
const Jx = b.forwardRef(
  (
    {
      bsPrefix: t,
      size: e,
      htmlSize: n,
      className: r,
      isValid: i = !1,
      isInvalid: s = !1,
      id: o,
      ...a
    },
    l,
  ) => {
    const { controlId: c } = b.useContext(Qn);
    return (
      (t = ue(t, "form-select")),
      f.jsx("select", {
        ...a,
        size: n,
        ref: l,
        className: ie(
          r,
          t,
          e && `${t}-${e}`,
          i && "is-valid",
          s && "is-invalid",
        ),
        id: o || c,
      })
    );
  },
);
Jx.displayName = "FormSelect";
const Zx = b.forwardRef(
  ({ bsPrefix: t, className: e, as: n = "small", muted: r, ...i }, s) => (
    (t = ue(t, "form-text")),
    f.jsx(n, { ...i, ref: s, className: ie(e, t, r && "text-muted") })
  ),
);
Zx.displayName = "FormText";
const e_ = b.forwardRef((t, e) => f.jsx(Oc, { ...t, ref: e, type: "switch" }));
e_.displayName = "Switch";
const $5 = Object.assign(e_, { Input: Oc.Input, Label: Oc.Label }),
  t_ = b.forwardRef(
    (
      { bsPrefix: t, className: e, children: n, controlId: r, label: i, ...s },
      o,
    ) => (
      (t = ue(t, "form-floating")),
      f.jsxs(Bp, {
        ref: o,
        className: ie(e, t),
        controlId: r,
        ...s,
        children: [n, f.jsx("label", { htmlFor: r, children: i })],
      })
    ),
  );
t_.displayName = "FloatingLabel";
const z5 = { _ref: K.any, validated: K.bool, as: K.elementType },
  $p = b.forwardRef(({ className: t, validated: e, as: n = "form", ...r }, i) =>
    f.jsx(n, { ...r, ref: i, className: ie(t, e && "was-validated") }),
  );
$p.displayName = "Form";
$p.propTypes = z5;
const te = Object.assign($p, {
    Group: Bp,
    Control: F5,
    Floating: B5,
    Check: Oc,
    Switch: $5,
    Label: Xx,
    Text: Zx,
    Range: Qx,
    Select: Jx,
    FloatingLabel: t_,
  }),
  ot = b.forwardRef(
    ({ bsPrefix: t, fluid: e = !1, as: n = "div", className: r, ...i }, s) => {
      const o = ue(t, "container"),
        a = typeof e == "string" ? `-${e}` : "-fluid";
      return f.jsx(n, { ref: s, ...i, className: ie(r, e ? `${o}${a}` : o) });
    },
  );
ot.displayName = "Container";
const n_ = b.createContext(null),
  H5 = ["as", "active", "eventKey"];
function W5(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
function r_({ key: t, onClick: e, active: n, id: r, role: i, disabled: s }) {
  const o = b.useContext(kc),
    a = b.useContext(Mp),
    l = b.useContext(n_);
  let c = n;
  const u = { role: i };
  if (a) {
    !i && a.role === "tablist" && (u.role = "tab");
    const d = a.getControllerId(t ?? null),
      h = a.getControlledId(t ?? null);
    (u[gu("event-key")] = t),
      (u.id = d || r),
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
    (u.onClick = ft((d) => {
      s ||
        (e == null || e(d),
        t != null && o && !d.isPropagationStopped() && o(t, d));
    })),
    [u, { isActive: c }]
  );
}
const i_ = b.forwardRef((t, e) => {
  let { as: n = mx, active: r, eventKey: i } = t,
    s = W5(t, H5);
  const [o, a] = r_(Object.assign({ key: Dp(i, s.href), active: r }, s));
  return (
    (o[gu("active")] = a.isActive),
    f.jsx(n, Object.assign({}, s, o, { ref: e }))
  );
});
i_.displayName = "NavItem";
const U5 = ["as", "onSelect", "activeKey", "role", "onKeyDown"];
function V5(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
const rg = () => {},
  ig = gu("event-key"),
  s_ = b.forwardRef((t, e) => {
    let { as: n = "div", onSelect: r, activeKey: i, role: s, onKeyDown: o } = t,
      a = V5(t, U5);
    const l = JC(),
      c = b.useRef(!1),
      u = b.useContext(kc),
      d = b.useContext(n_);
    let h, p;
    d &&
      ((s = s || "tablist"),
      (i = d.activeKey),
      (h = d.getControlledId),
      (p = d.getControllerId));
    const m = b.useRef(null),
      g = (_) => {
        const w = m.current;
        if (!w) return null;
        const E = Xr(w, `[${ig}]:not([aria-disabled=true])`),
          S = w.querySelector("[aria-selected=true]");
        if (!S || S !== document.activeElement) return null;
        const C = E.indexOf(S);
        if (C === -1) return null;
        let k = C + _;
        return k >= E.length && (k = 0), k < 0 && (k = E.length - 1), E[k];
      },
      v = (_, w) => {
        _ != null && (r == null || r(_, w), u == null || u(_, w));
      },
      y = (_) => {
        if ((o == null || o(_), !d)) return;
        let w;
        switch (_.key) {
          case "ArrowLeft":
          case "ArrowUp":
            w = g(-1);
            break;
          case "ArrowRight":
          case "ArrowDown":
            w = g(1);
            break;
          default:
            return;
        }
        w &&
          (_.preventDefault(),
          v(w.dataset[M5("EventKey")] || null, _),
          (c.current = !0),
          l());
      };
    b.useEffect(() => {
      if (m.current && c.current) {
        const _ = m.current.querySelector(`[${ig}][aria-selected=true]`);
        _ == null || _.focus();
      }
      c.current = !1;
    });
    const x = Ca(e, m);
    return f.jsx(kc.Provider, {
      value: v,
      children: f.jsx(Mp.Provider, {
        value: {
          role: s,
          activeKey: Dp(i),
          getControlledId: h || rg,
          getControllerId: p || rg,
        },
        children: f.jsx(
          n,
          Object.assign({}, a, { onKeyDown: y, ref: x, role: s }),
        ),
      }),
    });
  });
s_.displayName = "Nav";
const Y5 = Object.assign(s_, { Item: i_ });
var nl;
function sg(t) {
  if (((!nl && nl !== 0) || t) && Is) {
    var e = document.createElement("div");
    (e.style.position = "absolute"),
      (e.style.top = "-9999px"),
      (e.style.width = "50px"),
      (e.style.height = "50px"),
      (e.style.overflow = "scroll"),
      document.body.appendChild(e),
      (nl = e.offsetWidth - e.clientWidth),
      document.body.removeChild(e);
  }
  return nl;
}
function sd(t) {
  t === void 0 && (t = du());
  try {
    var e = t.activeElement;
    return !e || !e.nodeName ? null : e;
  } catch {
    return t.body;
  }
}
function G5(t = document) {
  const e = t.defaultView;
  return Math.abs(e.innerWidth - t.documentElement.clientWidth);
}
const og = gu("modal-open");
class zp {
  constructor({
    ownerDocument: e,
    handleContainerOverflow: n = !0,
    isRTL: r = !1,
  } = {}) {
    (this.handleContainerOverflow = n),
      (this.isRTL = r),
      (this.modals = []),
      (this.ownerDocument = e);
  }
  getScrollbarWidth() {
    return G5(this.ownerDocument);
  }
  getElement() {
    return (this.ownerDocument || document).body;
  }
  setModalAttributes(e) {}
  removeModalAttributes(e) {}
  setContainerStyle(e) {
    const n = { overflow: "hidden" },
      r = this.isRTL ? "paddingLeft" : "paddingRight",
      i = this.getElement();
    (e.style = { overflow: i.style.overflow, [r]: i.style[r] }),
      e.scrollBarWidth &&
        (n[r] = `${parseInt(Wn(i, r) || "0", 10) + e.scrollBarWidth}px`),
      i.setAttribute(og, ""),
      Wn(i, n);
  }
  reset() {
    [...this.modals].forEach((e) => this.remove(e));
  }
  removeContainerStyle(e) {
    const n = this.getElement();
    n.removeAttribute(og), Object.assign(n.style, e.style);
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
const od = (t, e) =>
  Is
    ? t == null
      ? (e || du()).body
      : (typeof t == "function" && (t = t()),
        t && "current" in t && (t = t.current),
        t && ("nodeType" in t || t.getBoundingClientRect) ? t : null)
    : null;
function K5(t, e) {
  const n = Ip(),
    [r, i] = b.useState(() => od(t, n == null ? void 0 : n.document));
  if (!r) {
    const s = od(t);
    s && i(s);
  }
  return (
    b.useEffect(() => {}, [e, r]),
    b.useEffect(() => {
      const s = od(t);
      s !== r && i(s);
    }, [t, r]),
    r
  );
}
function q5({
  children: t,
  in: e,
  onExited: n,
  mountOnEnter: r,
  unmountOnExit: i,
}) {
  const s = b.useRef(null),
    o = b.useRef(e),
    a = ft(n);
  b.useEffect(() => {
    e ? (o.current = !0) : a(s.current);
  }, [e, a]);
  const l = Ca(s, t.ref),
    c = b.cloneElement(t, { ref: l });
  return e ? c : i || (!o.current && r) ? null : c;
}
function X5({ in: t, onTransition: e }) {
  const n = b.useRef(null),
    r = b.useRef(!0),
    i = ft(e);
  return (
    Kf(() => {
      if (!n.current) return;
      let s = !1;
      return (
        i({ in: t, element: n.current, initial: r.current, isStale: () => s }),
        () => {
          s = !0;
        }
      );
    }, [t, i]),
    Kf(
      () => (
        (r.current = !1),
        () => {
          r.current = !0;
        }
      ),
      [],
    ),
    n
  );
}
function Q5({ children: t, in: e, onExited: n, onEntered: r, transition: i }) {
  const [s, o] = b.useState(!e);
  e && s && o(!1);
  const a = X5({
      in: !!e,
      onTransition: (c) => {
        const u = () => {
          c.isStale() ||
            (c.in
              ? r == null || r(c.element, c.initial)
              : (o(!0), n == null || n(c.element)));
        };
        Promise.resolve(i(c)).then(u, (d) => {
          throw (c.in || o(!0), d);
        });
      },
    }),
    l = Ca(a, t.ref);
  return s && !e ? null : b.cloneElement(t, { ref: l });
}
function ag(t, e, n) {
  return t
    ? f.jsx(t, Object.assign({}, n))
    : e
    ? f.jsx(Q5, Object.assign({}, n, { transition: e }))
    : f.jsx(q5, Object.assign({}, n));
}
function J5(t) {
  return t.code === "Escape" || t.keyCode === 27;
}
const Z5 = [
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
function ek(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
let ad;
function tk(t) {
  return (
    ad || (ad = new zp({ ownerDocument: t == null ? void 0 : t.document })), ad
  );
}
function nk(t) {
  const e = Ip(),
    n = t || tk(e),
    r = b.useRef({ dialog: null, backdrop: null });
  return Object.assign(r.current, {
    add: () => n.add(r.current),
    remove: () => n.remove(r.current),
    isTopModal: () => n.isTopModal(r.current),
    setDialogRef: b.useCallback((i) => {
      r.current.dialog = i;
    }, []),
    setBackdropRef: b.useCallback((i) => {
      r.current.backdrop = i;
    }, []),
  });
}
const o_ = b.forwardRef((t, e) => {
  let {
      show: n = !1,
      role: r = "dialog",
      className: i,
      style: s,
      children: o,
      backdrop: a = !0,
      keyboard: l = !0,
      onBackdropClick: c,
      onEscapeKeyDown: u,
      transition: d,
      runTransition: h,
      backdropTransition: p,
      runBackdropTransition: m,
      autoFocus: g = !0,
      enforceFocus: v = !0,
      restoreFocus: y = !0,
      restoreFocusOptions: x,
      renderDialog: _,
      renderBackdrop: w = (Q) => f.jsx("div", Object.assign({}, Q)),
      manager: E,
      container: S,
      onShow: C,
      onHide: k = () => {},
      onExit: L,
      onExited: j,
      onExiting: $,
      onEnter: N,
      onEntering: D,
      onEntered: H,
    } = t,
    B = ek(t, Z5);
  const Y = Ip(),
    G = K5(S),
    P = nk(E),
    A = wC(),
    T = EC(n),
    [F, M] = b.useState(!n),
    z = b.useRef(null);
  b.useImperativeHandle(e, () => P, [P]),
    Is && !T && n && (z.current = sd(Y == null ? void 0 : Y.document)),
    n && F && M(!1);
  const W = ft(() => {
      if (
        (P.add(),
        (Je.current = Sc(document, "keydown", Be)),
        (Qe.current = Sc(document, "focus", () => setTimeout(X), !0)),
        C && C(),
        g)
      ) {
        var Q, Le;
        const Te = sd(
          (Q = (Le = P.dialog) == null ? void 0 : Le.ownerDocument) != null
            ? Q
            : Y == null
            ? void 0
            : Y.document,
        );
        P.dialog &&
          Te &&
          !ng(P.dialog, Te) &&
          ((z.current = Te), P.dialog.focus());
      }
    }),
    V = ft(() => {
      if (
        (P.remove(),
        Je.current == null || Je.current(),
        Qe.current == null || Qe.current(),
        y)
      ) {
        var Q;
        (Q = z.current) == null || Q.focus == null || Q.focus(x),
          (z.current = null);
      }
    });
  b.useEffect(() => {
    !n || !G || W();
  }, [n, G, W]),
    b.useEffect(() => {
      F && V();
    }, [F, V]),
    wx(() => {
      V();
    });
  const X = ft(() => {
      if (!v || !A() || !P.isTopModal()) return;
      const Q = sd(Y == null ? void 0 : Y.document);
      P.dialog && Q && !ng(P.dialog, Q) && P.dialog.focus();
    }),
    ge = ft((Q) => {
      Q.target === Q.currentTarget && (c == null || c(Q), a === !0 && k());
    }),
    Be = ft((Q) => {
      l &&
        J5(Q) &&
        P.isTopModal() &&
        (u == null || u(Q), Q.defaultPrevented || k());
    }),
    Qe = b.useRef(),
    Je = b.useRef(),
    ke = (...Q) => {
      M(!0), j == null || j(...Q);
    };
  if (!G) return null;
  const ct = Object.assign(
    {
      role: r,
      ref: P.setDialogRef,
      "aria-modal": r === "dialog" ? !0 : void 0,
    },
    B,
    { style: s, className: i, tabIndex: -1 },
  );
  let Ye = _
    ? _(ct)
    : f.jsx(
        "div",
        Object.assign({}, ct, {
          children: b.cloneElement(o, { role: "document" }),
        }),
      );
  Ye = ag(d, h, {
    unmountOnExit: !0,
    mountOnEnter: !0,
    appear: !0,
    in: !!n,
    onExit: L,
    onExiting: $,
    onExited: ke,
    onEnter: N,
    onEntering: D,
    onEntered: H,
    children: Ye,
  });
  let $e = null;
  return (
    a &&
      (($e = w({ ref: P.setBackdropRef, onClick: ge })),
      ($e = ag(p, m, {
        in: !!n,
        appear: !0,
        mountOnEnter: !0,
        unmountOnExit: !0,
        children: $e,
      }))),
    f.jsx(f.Fragment, {
      children: es.createPortal(f.jsxs(f.Fragment, { children: [$e, Ye] }), G),
    })
  );
});
o_.displayName = "Modal";
const a_ = Object.assign(o_, { Manager: zp });
function rk(t, e) {
  return t.classList
    ? t.classList.contains(e)
    : (" " + (t.className.baseVal || t.className) + " ").indexOf(
        " " + e + " ",
      ) !== -1;
}
function ik(t, e) {
  t.classList
    ? t.classList.add(e)
    : rk(t, e) ||
      (typeof t.className == "string"
        ? (t.className = t.className + " " + e)
        : t.setAttribute(
            "class",
            ((t.className && t.className.baseVal) || "") + " " + e,
          ));
}
function lg(t, e) {
  return t
    .replace(new RegExp("(^|\\s)" + e + "(?:\\s|$)", "g"), "$1")
    .replace(/\s+/g, " ")
    .replace(/^\s*|\s*$/g, "");
}
function sk(t, e) {
  t.classList
    ? t.classList.remove(e)
    : typeof t.className == "string"
    ? (t.className = lg(t.className, e))
    : t.setAttribute(
        "class",
        lg((t.className && t.className.baseVal) || "", e),
      );
}
const Di = {
  FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  STICKY_CONTENT: ".sticky-top",
  NAVBAR_TOGGLER: ".navbar-toggler",
};
class l_ extends zp {
  adjustAndStore(e, n, r) {
    const i = n.style[e];
    (n.dataset[e] = i), Wn(n, { [e]: `${parseFloat(Wn(n, e)) + r}px` });
  }
  restore(e, n) {
    const r = n.dataset[e];
    r !== void 0 && (delete n.dataset[e], Wn(n, { [e]: r }));
  }
  setContainerStyle(e) {
    super.setContainerStyle(e);
    const n = this.getElement();
    if ((ik(n, "modal-open"), !e.scrollBarWidth)) return;
    const r = this.isRTL ? "paddingLeft" : "paddingRight",
      i = this.isRTL ? "marginLeft" : "marginRight";
    Xr(n, Di.FIXED_CONTENT).forEach((s) =>
      this.adjustAndStore(r, s, e.scrollBarWidth),
    ),
      Xr(n, Di.STICKY_CONTENT).forEach((s) =>
        this.adjustAndStore(i, s, -e.scrollBarWidth),
      ),
      Xr(n, Di.NAVBAR_TOGGLER).forEach((s) =>
        this.adjustAndStore(i, s, e.scrollBarWidth),
      );
  }
  removeContainerStyle(e) {
    super.removeContainerStyle(e);
    const n = this.getElement();
    sk(n, "modal-open");
    const r = this.isRTL ? "paddingLeft" : "paddingRight",
      i = this.isRTL ? "marginLeft" : "marginRight";
    Xr(n, Di.FIXED_CONTENT).forEach((s) => this.restore(r, s)),
      Xr(n, Di.STICKY_CONTENT).forEach((s) => this.restore(i, s)),
      Xr(n, Di.NAVBAR_TOGGLER).forEach((s) => this.restore(i, s));
  }
}
let ld;
function c_(t) {
  return ld || (ld = new l_(t)), ld;
}
const ok = Xe("modal-body"),
  Hp = b.createContext({ onHide() {} }),
  Wp = b.forwardRef(
    (
      {
        bsPrefix: t,
        className: e,
        contentClassName: n,
        centered: r,
        size: i,
        fullscreen: s,
        children: o,
        scrollable: a,
        ...l
      },
      c,
    ) => {
      t = ue(t, "modal");
      const u = `${t}-dialog`,
        d = typeof s == "string" ? `${t}-fullscreen-${s}` : `${t}-fullscreen`;
      return f.jsx("div", {
        ...l,
        ref: c,
        className: ie(
          u,
          e,
          i && `${t}-${i}`,
          r && `${u}-centered`,
          a && `${u}-scrollable`,
          s && d,
        ),
        children: f.jsx("div", {
          className: ie(`${t}-content`, n),
          children: o,
        }),
      });
    },
  );
Wp.displayName = "ModalDialog";
const ak = Xe("modal-footer"),
  u_ = b.forwardRef(
    (
      {
        closeLabel: t = "Close",
        closeVariant: e,
        closeButton: n = !1,
        onHide: r,
        children: i,
        ...s
      },
      o,
    ) => {
      const a = b.useContext(Hp),
        l = ft(() => {
          a == null || a.onHide(), r == null || r();
        });
      return f.jsxs("div", {
        ref: o,
        ...s,
        children: [
          i,
          n && f.jsx(fu, { "aria-label": t, variant: e, onClick: l }),
        ],
      });
    },
  ),
  d_ = b.forwardRef(
    (
      {
        bsPrefix: t,
        className: e,
        closeLabel: n = "Close",
        closeButton: r = !1,
        ...i
      },
      s,
    ) => (
      (t = ue(t, "modal-header")),
      f.jsx(u_, {
        ref: s,
        ...i,
        className: ie(e, t),
        closeLabel: n,
        closeButton: r,
      })
    ),
  );
d_.displayName = "ModalHeader";
const lk = ka("h4"),
  ck = Xe("modal-title", { Component: lk });
function uk(t) {
  return f.jsx(_s, { ...t, timeout: null });
}
function dk(t) {
  return f.jsx(_s, { ...t, timeout: null });
}
const f_ = b.forwardRef(
  (
    {
      bsPrefix: t,
      className: e,
      style: n,
      dialogClassName: r,
      contentClassName: i,
      children: s,
      dialogAs: o = Wp,
      "aria-labelledby": a,
      "aria-describedby": l,
      "aria-label": c,
      show: u = !1,
      animation: d = !0,
      backdrop: h = !0,
      keyboard: p = !0,
      onEscapeKeyDown: m,
      onShow: g,
      onHide: v,
      container: y,
      autoFocus: x = !0,
      enforceFocus: _ = !0,
      restoreFocus: w = !0,
      restoreFocusOptions: E,
      onEntered: S,
      onExit: C,
      onExiting: k,
      onEnter: L,
      onEntering: j,
      onExited: $,
      backdropClassName: N,
      manager: D,
      ...H
    },
    B,
  ) => {
    const [Y, G] = b.useState({}),
      [P, A] = b.useState(!1),
      T = b.useRef(!1),
      F = b.useRef(!1),
      M = b.useRef(null),
      [z, W] = bC(),
      V = Ca(B, W),
      X = ft(v),
      ge = nC();
    t = ue(t, "modal");
    const Be = b.useMemo(() => ({ onHide: X }), [X]);
    function Qe() {
      return D || c_({ isRTL: ge });
    }
    function Je(le) {
      if (!Is) return;
      const Pn = Qe().getScrollbarWidth() > 0,
        Us = le.scrollHeight > du(le).documentElement.clientHeight;
      G({
        paddingRight: Pn && !Us ? sg() : void 0,
        paddingLeft: !Pn && Us ? sg() : void 0,
      });
    }
    const ke = ft(() => {
      z && Je(z.dialog);
    });
    wx(() => {
      Gf(window, "resize", ke), M.current == null || M.current();
    });
    const ct = () => {
        T.current = !0;
      },
      Ye = (le) => {
        T.current && z && le.target === z.dialog && (F.current = !0),
          (T.current = !1);
      },
      $e = () => {
        A(!0),
          (M.current = hx(z.dialog, () => {
            A(!1);
          }));
      },
      Q = (le) => {
        le.target === le.currentTarget && $e();
      },
      Le = (le) => {
        if (h === "static") {
          Q(le);
          return;
        }
        if (F.current || le.target !== le.currentTarget) {
          F.current = !1;
          return;
        }
        v == null || v();
      },
      Te = (le) => {
        p ? m == null || m(le) : (le.preventDefault(), h === "static" && $e());
      },
      we = (le, Pn) => {
        le && Je(le), L == null || L(le, Pn);
      },
      nr = (le) => {
        M.current == null || M.current(), C == null || C(le);
      },
      At = (le, Pn) => {
        j == null || j(le, Pn), fx(window, "resize", ke);
      },
      ut = (le) => {
        le && (le.style.display = ""),
          $ == null || $(le),
          Gf(window, "resize", ke);
      },
      Nt = b.useCallback(
        (le) =>
          f.jsx("div", {
            ...le,
            className: ie(`${t}-backdrop`, N, !d && "show"),
          }),
        [d, N, t],
      ),
      vn = { ...n, ...Y };
    vn.display = "block";
    const Wr = (le) =>
      f.jsx("div", {
        role: "dialog",
        ...le,
        style: vn,
        className: ie(e, t, P && `${t}-static`, !d && "show"),
        onClick: h ? Le : void 0,
        onMouseUp: Ye,
        "aria-label": c,
        "aria-labelledby": a,
        "aria-describedby": l,
        children: f.jsx(o, {
          ...H,
          onMouseDown: ct,
          className: r,
          contentClassName: i,
          children: s,
        }),
      });
    return f.jsx(Hp.Provider, {
      value: Be,
      children: f.jsx(a_, {
        show: u,
        ref: V,
        backdrop: h,
        container: y,
        keyboard: !0,
        autoFocus: x,
        enforceFocus: _,
        restoreFocus: w,
        restoreFocusOptions: E,
        onEscapeKeyDown: Te,
        onShow: g,
        onHide: v,
        onEnter: we,
        onEntering: At,
        onEntered: S,
        onExit: nr,
        onExiting: k,
        onExited: ut,
        manager: Qe(),
        transition: d ? uk : void 0,
        backdropTransition: d ? dk : void 0,
        renderBackdrop: Nt,
        renderDialog: Wr,
      }),
    });
  },
);
f_.displayName = "Modal";
const pr = Object.assign(f_, {
  Body: ok,
  Header: d_,
  Title: ck,
  Footer: ak,
  Dialog: Wp,
  TRANSITION_DURATION: 300,
  BACKDROP_TRANSITION_DURATION: 150,
});
var cg = { exports: {} },
  Jf = { exports: {} };
(function (t, e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = n);
  function n(r) {
    function i(o, a, l, c, u, d) {
      var h = c || "<<anonymous>>",
        p = d || l;
      if (a[l] == null)
        return o
          ? new Error(
              "Required " +
                u +
                " `" +
                p +
                "` was not specified " +
                ("in `" + h + "`."),
            )
          : null;
      for (
        var m = arguments.length, g = Array(m > 6 ? m - 6 : 0), v = 6;
        v < m;
        v++
      )
        g[v - 6] = arguments[v];
      return r.apply(void 0, [a, l, h, u, p].concat(g));
    }
    var s = i.bind(null, !1);
    return (s.isRequired = i.bind(null, !0)), s;
  }
  t.exports = e.default;
})(Jf, Jf.exports);
var fk = Jf.exports;
(function (t, e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = s);
  var n = fk,
    r = i(n);
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function s() {
    for (var o = arguments.length, a = Array(o), l = 0; l < o; l++)
      a[l] = arguments[l];
    function c() {
      for (var u = arguments.length, d = Array(u), h = 0; h < u; h++)
        d[h] = arguments[h];
      var p = null;
      return (
        a.forEach(function (m) {
          if (p == null) {
            var g = m.apply(void 0, d);
            g != null && (p = g);
          }
        }),
        p
      );
    }
    return (0, r.default)(c);
  }
  t.exports = e.default;
})(cg, cg.exports);
const hk = Xe("nav-item"),
  h_ = b.forwardRef(
    (
      {
        bsPrefix: t,
        className: e,
        as: n = wp,
        active: r,
        eventKey: i,
        disabled: s = !1,
        ...o
      },
      a,
    ) => {
      t = ue(t, "nav-link");
      const [l, c] = r_({ key: Dp(i, o.href), active: r, disabled: s, ...o });
      return f.jsx(n, {
        ...o,
        ...l,
        ref: a,
        disabled: s,
        className: ie(e, t, s && "disabled", c.isActive && "active"),
      });
    },
  );
h_.displayName = "NavLink";
const p_ = b.forwardRef((t, e) => {
  const {
      as: n = "div",
      bsPrefix: r,
      variant: i,
      fill: s = !1,
      justify: o = !1,
      navbar: a,
      navbarScroll: l,
      className: c,
      activeKey: u,
      ...d
    } = vp(t, { activeKey: "onSelect" }),
    h = ue(r, "nav");
  let p,
    m,
    g = !1;
  const v = b.useContext(ki),
    y = b.useContext(Ep);
  return (
    v
      ? ((p = v.bsPrefix), (g = a ?? !0))
      : y && ({ cardHeaderBsPrefix: m } = y),
    f.jsx(Y5, {
      as: n,
      ref: e,
      activeKey: u,
      className: ie(c, {
        [h]: !g,
        [`${p}-nav`]: g,
        [`${p}-nav-scroll`]: g && l,
        [`${m}-${i}`]: !!m,
        [`${h}-${i}`]: !!i,
        [`${h}-fill`]: s,
        [`${h}-justified`]: o,
      }),
      ...d,
    })
  );
});
p_.displayName = "Nav";
const pk = Object.assign(p_, { Item: hk, Link: h_ }),
  m_ = b.forwardRef(({ bsPrefix: t, className: e, as: n, ...r }, i) => {
    t = ue(t, "navbar-brand");
    const s = n || (r.href ? "a" : "span");
    return f.jsx(s, { ...r, ref: i, className: ie(e, t) });
  });
m_.displayName = "NavbarBrand";
const g_ = b.forwardRef(({ children: t, bsPrefix: e, ...n }, r) => {
  e = ue(e, "navbar-collapse");
  const i = b.useContext(ki);
  return f.jsx(xC, {
    in: !!(i && i.expanded),
    ...n,
    children: f.jsx("div", { ref: r, className: e, children: t }),
  });
});
g_.displayName = "NavbarCollapse";
const y_ = b.forwardRef(
  (
    {
      bsPrefix: t,
      className: e,
      children: n,
      label: r = "Toggle navigation",
      as: i = "button",
      onClick: s,
      ...o
    },
    a,
  ) => {
    t = ue(t, "navbar-toggler");
    const { onToggle: l, expanded: c } = b.useContext(ki) || {},
      u = ft((d) => {
        s && s(d), l && l();
      });
    return (
      i === "button" && (o.type = "button"),
      f.jsx(i, {
        ...o,
        ref: a,
        onClick: u,
        "aria-label": r,
        className: ie(e, t, !c && "collapsed"),
        children: n || f.jsx("span", { className: `${t}-icon` }),
      })
    );
  },
);
y_.displayName = "NavbarToggle";
const Zf = new WeakMap(),
  ug = (t, e) => {
    if (!t || !e) return;
    const n = Zf.get(e) || new Map();
    Zf.set(e, n);
    let r = n.get(t);
    return r || ((r = e.matchMedia(t)), (r.refCount = 0), n.set(r.media, r)), r;
  };
function mk(t, e = typeof window > "u" ? void 0 : window) {
  const n = ug(t, e),
    [r, i] = b.useState(() => (n ? n.matches : !1));
  return (
    Kf(() => {
      let s = ug(t, e);
      if (!s) return i(!1);
      let o = Zf.get(e);
      const a = () => {
        i(s.matches);
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
    r
  );
}
function gk(t) {
  const e = Object.keys(t);
  function n(a, l) {
    return a === l ? l : a ? `${a} and ${l}` : l;
  }
  function r(a) {
    return e[Math.min(e.indexOf(a) + 1, e.length - 1)];
  }
  function i(a) {
    const l = r(a);
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
          (h, [p, m]) => (
            (m === "up" || m === !0) && (h = n(h, s(p))),
            (m === "down" || m === !0) && (h = n(h, i(p))),
            h
          ),
          "",
        ),
      [JSON.stringify(u)],
    );
    return mk(d, c);
  }
  return o;
}
const yk = gk({ xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 }),
  vk = Xe("offcanvas-body"),
  xk = { [cn]: "show", [Bn]: "show" },
  v_ = b.forwardRef(
    (
      {
        bsPrefix: t,
        className: e,
        children: n,
        in: r = !1,
        mountOnEnter: i = !1,
        unmountOnExit: s = !1,
        appear: o = !1,
        ...a
      },
      l,
    ) => (
      (t = ue(t, "offcanvas")),
      f.jsx(_p, {
        ref: l,
        addEndListener: xp,
        in: r,
        mountOnEnter: i,
        unmountOnExit: s,
        appear: o,
        ...a,
        childRef: n.ref,
        children: (c, u) =>
          b.cloneElement(n, {
            ...u,
            className: ie(
              e,
              n.props.className,
              (c === cn || c === la) && `${t}-toggling`,
              xk[c],
            ),
          }),
      })
    ),
  );
v_.displayName = "OffcanvasToggling";
const x_ = b.forwardRef(
  (
    {
      bsPrefix: t,
      className: e,
      closeLabel: n = "Close",
      closeButton: r = !1,
      ...i
    },
    s,
  ) => (
    (t = ue(t, "offcanvas-header")),
    f.jsx(u_, {
      ref: s,
      ...i,
      className: ie(e, t),
      closeLabel: n,
      closeButton: r,
    })
  ),
);
x_.displayName = "OffcanvasHeader";
const _k = ka("h5"),
  bk = Xe("offcanvas-title", { Component: _k });
function wk(t) {
  return f.jsx(v_, { ...t });
}
function Ek(t) {
  return f.jsx(_s, { ...t });
}
const __ = b.forwardRef(
  (
    {
      bsPrefix: t,
      className: e,
      children: n,
      "aria-labelledby": r,
      placement: i = "start",
      responsive: s,
      show: o = !1,
      backdrop: a = !0,
      keyboard: l = !0,
      scroll: c = !1,
      onEscapeKeyDown: u,
      onShow: d,
      onHide: h,
      container: p,
      autoFocus: m = !0,
      enforceFocus: g = !0,
      restoreFocus: v = !0,
      restoreFocusOptions: y,
      onEntered: x,
      onExit: _,
      onExiting: w,
      onEnter: E,
      onEntering: S,
      onExited: C,
      backdropClassName: k,
      manager: L,
      renderStaticNode: j = !1,
      ...$
    },
    N,
  ) => {
    const D = b.useRef();
    t = ue(t, "offcanvas");
    const { onToggle: H } = b.useContext(ki) || {},
      [B, Y] = b.useState(!1),
      G = yk(s || "xs", "up");
    b.useEffect(() => {
      Y(s ? o && !G : o);
    }, [o, s, G]);
    const P = ft(() => {
        H == null || H(), h == null || h();
      }),
      A = b.useMemo(() => ({ onHide: P }), [P]);
    function T() {
      return (
        L ||
        (c
          ? (D.current || (D.current = new l_({ handleContainerOverflow: !1 })),
            D.current)
          : c_())
      );
    }
    const F = (V, ...X) => {
        V && (V.style.visibility = "visible"), E == null || E(V, ...X);
      },
      M = (V, ...X) => {
        V && (V.style.visibility = ""), C == null || C(...X);
      },
      z = b.useCallback(
        (V) => f.jsx("div", { ...V, className: ie(`${t}-backdrop`, k) }),
        [k, t],
      ),
      W = (V) =>
        f.jsx("div", {
          ...V,
          ...$,
          className: ie(e, s ? `${t}-${s}` : t, `${t}-${i}`),
          "aria-labelledby": r,
          children: n,
        });
    return f.jsxs(f.Fragment, {
      children: [
        !B && (s || j) && W({}),
        f.jsx(Hp.Provider, {
          value: A,
          children: f.jsx(a_, {
            show: B,
            ref: N,
            backdrop: a,
            container: p,
            keyboard: l,
            autoFocus: m,
            enforceFocus: g && !c,
            restoreFocus: v,
            restoreFocusOptions: y,
            onEscapeKeyDown: u,
            onShow: d,
            onHide: P,
            onEnter: F,
            onEntering: S,
            onEntered: x,
            onExit: _,
            onExiting: w,
            onExited: M,
            manager: T(),
            transition: wk,
            backdropTransition: Ek,
            renderBackdrop: z,
            renderDialog: W,
          }),
        }),
      ],
    });
  },
);
__.displayName = "Offcanvas";
const Sk = Object.assign(__, { Body: vk, Header: x_, Title: bk }),
  b_ = b.forwardRef((t, e) => {
    const n = b.useContext(ki);
    return f.jsx(Sk, {
      ref: e,
      show: !!(n != null && n.expanded),
      ...t,
      renderStaticNode: !0,
    });
  });
b_.displayName = "NavbarOffcanvas";
const Ck = Xe("navbar-text", { Component: "span" }),
  w_ = b.forwardRef((t, e) => {
    const {
        bsPrefix: n,
        expand: r = !0,
        variant: i = "light",
        bg: s,
        fixed: o,
        sticky: a,
        className: l,
        as: c = "nav",
        expanded: u,
        onToggle: d,
        onSelect: h,
        collapseOnSelect: p = !1,
        ...m
      } = vp(t, { expanded: "onToggle" }),
      g = ue(n, "navbar"),
      v = b.useCallback(
        (..._) => {
          h == null || h(..._), p && u && (d == null || d(!1));
        },
        [h, p, u, d],
      );
    m.role === void 0 && c !== "nav" && (m.role = "navigation");
    let y = `${g}-expand`;
    typeof r == "string" && (y = `${y}-${r}`);
    const x = b.useMemo(
      () => ({
        onToggle: () => (d == null ? void 0 : d(!u)),
        bsPrefix: g,
        expanded: !!u,
        expand: r,
      }),
      [g, u, r, d],
    );
    return f.jsx(ki.Provider, {
      value: x,
      children: f.jsx(kc.Provider, {
        value: v,
        children: f.jsx(c, {
          ref: e,
          ...m,
          className: ie(
            l,
            g,
            r && y,
            i && `${g}-${i}`,
            s && `bg-${s}`,
            a && `sticky-${a}`,
            o && `fixed-${o}`,
          ),
        }),
      }),
    });
  });
w_.displayName = "Navbar";
const cd = Object.assign(w_, {
  Brand: m_,
  Collapse: g_,
  Offcanvas: b_,
  Text: Ck,
  Toggle: y_,
});
function kk(t) {
  return t <= 0 ? "100%" : t < 1 ? `${t * 100}%` : `${t}%`;
}
const Tk = b.forwardRef(
    (
      {
        bsPrefix: t,
        className: e,
        children: n,
        aspectRatio: r = "1x1",
        style: i,
        ...s
      },
      o,
    ) => {
      t = ue(t, "ratio");
      const a = typeof r == "number";
      return f.jsx("div", {
        ref: o,
        ...s,
        style: { ...i, ...(a && { "--bs-aspect-ratio": kk(r) }) },
        className: ie(t, e, !a && `${t}-${r}`),
        children: b.Children.only(n),
      });
    },
  ),
  ks = b.forwardRef(({ bsPrefix: t, className: e, as: n = "div", ...r }, i) => {
    const s = ue(t, "row"),
      o = cx(),
      a = ux(),
      l = `${s}-cols`,
      c = [];
    return (
      o.forEach((u) => {
        const d = r[u];
        delete r[u];
        let h;
        d != null && typeof d == "object" ? ({ cols: h } = d) : (h = d);
        const p = u !== a ? `-${u}` : "";
        h != null && c.push(`${l}${p}-${h}`);
      }),
      f.jsx(n, { ref: i, ...r, className: ie(e, s, ...c) })
    );
  });
ks.displayName = "Row";
const E_ = b.forwardRef(
  (
    {
      bsPrefix: t,
      className: e,
      striped: n,
      bordered: r,
      borderless: i,
      hover: s,
      size: o,
      variant: a,
      responsive: l,
      ...c
    },
    u,
  ) => {
    const d = ue(t, "table"),
      h = ie(
        e,
        d,
        a && `${d}-${a}`,
        o && `${d}-${o}`,
        n && `${d}-${typeof n == "string" ? `striped-${n}` : "striped"}`,
        r && `${d}-bordered`,
        i && `${d}-borderless`,
        s && `${d}-hover`,
      ),
      p = f.jsx("table", { ...c, className: h, ref: u });
    if (l) {
      let m = `${d}-responsive`;
      return (
        typeof l == "string" && (m = `${m}-${l}`),
        f.jsx("div", { className: m, children: p })
      );
    }
    return p;
  },
);
function S_(t, e) {
  return function () {
    return t.apply(e, arguments);
  };
}
const { toString: Ok } = Object.prototype,
  { getPrototypeOf: Up } = Object,
  vu = ((t) => (e) => {
    const n = Ok.call(e);
    return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  gn = (t) => ((t = t.toLowerCase()), (e) => vu(e) === t),
  xu = (t) => (e) => typeof e === t,
  { isArray: Bs } = Array,
  ca = xu("undefined");
function Ak(t) {
  return (
    t !== null &&
    !ca(t) &&
    t.constructor !== null &&
    !ca(t.constructor) &&
    It(t.constructor.isBuffer) &&
    t.constructor.isBuffer(t)
  );
}
const C_ = gn("ArrayBuffer");
function Nk(t) {
  let e;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (e = ArrayBuffer.isView(t))
      : (e = t && t.buffer && C_(t.buffer)),
    e
  );
}
const Pk = xu("string"),
  It = xu("function"),
  k_ = xu("number"),
  _u = (t) => t !== null && typeof t == "object",
  Lk = (t) => t === !0 || t === !1,
  $l = (t) => {
    if (vu(t) !== "object") return !1;
    const e = Up(t);
    return (
      (e === null ||
        e === Object.prototype ||
        Object.getPrototypeOf(e) === null) &&
      !(Symbol.toStringTag in t) &&
      !(Symbol.iterator in t)
    );
  },
  jk = gn("Date"),
  Rk = gn("File"),
  Dk = gn("Blob"),
  Mk = gn("FileList"),
  Ik = (t) => _u(t) && It(t.pipe),
  Fk = (t) => {
    let e;
    return (
      t &&
      ((typeof FormData == "function" && t instanceof FormData) ||
        (It(t.append) &&
          ((e = vu(t)) === "formdata" ||
            (e === "object" &&
              It(t.toString) &&
              t.toString() === "[object FormData]"))))
    );
  },
  Bk = gn("URLSearchParams"),
  [$k, zk, Hk, Wk] = ["ReadableStream", "Request", "Response", "Headers"].map(
    gn,
  ),
  Uk = (t) =>
    t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Oa(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u") return;
  let r, i;
  if ((typeof t != "object" && (t = [t]), Bs(t)))
    for (r = 0, i = t.length; r < i; r++) e.call(null, t[r], r, t);
  else {
    const s = n ? Object.getOwnPropertyNames(t) : Object.keys(t),
      o = s.length;
    let a;
    for (r = 0; r < o; r++) (a = s[r]), e.call(null, t[a], a, t);
  }
}
function T_(t, e) {
  e = e.toLowerCase();
  const n = Object.keys(t);
  let r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), e === i.toLowerCase())) return i;
  return null;
}
const ni =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  O_ = (t) => !ca(t) && t !== ni;
function eh() {
  const { caseless: t } = (O_(this) && this) || {},
    e = {},
    n = (r, i) => {
      const s = (t && T_(e, i)) || i;
      $l(e[s]) && $l(r)
        ? (e[s] = eh(e[s], r))
        : $l(r)
        ? (e[s] = eh({}, r))
        : Bs(r)
        ? (e[s] = r.slice())
        : (e[s] = r);
    };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && Oa(arguments[r], n);
  return e;
}
const Vk = (t, e, n, { allOwnKeys: r } = {}) => (
    Oa(
      e,
      (i, s) => {
        n && It(i) ? (t[s] = S_(i, n)) : (t[s] = i);
      },
      { allOwnKeys: r },
    ),
    t
  ),
  Yk = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t),
  Gk = (t, e, n, r) => {
    (t.prototype = Object.create(e.prototype, r)),
      (t.prototype.constructor = t),
      Object.defineProperty(t, "super", { value: e.prototype }),
      n && Object.assign(t.prototype, n);
  },
  Kk = (t, e, n, r) => {
    let i, s, o;
    const a = {};
    if (((e = e || {}), t == null)) return e;
    do {
      for (i = Object.getOwnPropertyNames(t), s = i.length; s-- > 0; )
        (o = i[s]), (!r || r(o, t, e)) && !a[o] && ((e[o] = t[o]), (a[o] = !0));
      t = n !== !1 && Up(t);
    } while (t && (!n || n(t, e)) && t !== Object.prototype);
    return e;
  },
  qk = (t, e, n) => {
    (t = String(t)),
      (n === void 0 || n > t.length) && (n = t.length),
      (n -= e.length);
    const r = t.indexOf(e, n);
    return r !== -1 && r === n;
  },
  Xk = (t) => {
    if (!t) return null;
    if (Bs(t)) return t;
    let e = t.length;
    if (!k_(e)) return null;
    const n = new Array(e);
    for (; e-- > 0; ) n[e] = t[e];
    return n;
  },
  Qk = (
    (t) => (e) =>
      t && e instanceof t
  )(typeof Uint8Array < "u" && Up(Uint8Array)),
  Jk = (t, e) => {
    const r = (t && t[Symbol.iterator]).call(t);
    let i;
    for (; (i = r.next()) && !i.done; ) {
      const s = i.value;
      e.call(t, s[0], s[1]);
    }
  },
  Zk = (t, e) => {
    let n;
    const r = [];
    for (; (n = t.exec(e)) !== null; ) r.push(n);
    return r;
  },
  eT = gn("HTMLFormElement"),
  tT = (t) =>
    t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i;
    }),
  dg = (
    ({ hasOwnProperty: t }) =>
    (e, n) =>
      t.call(e, n)
  )(Object.prototype),
  nT = gn("RegExp"),
  A_ = (t, e) => {
    const n = Object.getOwnPropertyDescriptors(t),
      r = {};
    Oa(n, (i, s) => {
      let o;
      (o = e(i, s, t)) !== !1 && (r[s] = o || i);
    }),
      Object.defineProperties(t, r);
  },
  rT = (t) => {
    A_(t, (e, n) => {
      if (It(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = t[n];
      if (It(r)) {
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
  iT = (t, e) => {
    const n = {},
      r = (i) => {
        i.forEach((s) => {
          n[s] = !0;
        });
      };
    return Bs(t) ? r(t) : r(String(t).split(e)), n;
  },
  sT = () => {},
  oT = (t, e) => (t != null && Number.isFinite((t = +t)) ? t : e),
  ud = "abcdefghijklmnopqrstuvwxyz",
  fg = "0123456789",
  N_ = { DIGIT: fg, ALPHA: ud, ALPHA_DIGIT: ud + ud.toUpperCase() + fg },
  aT = (t = 16, e = N_.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = e;
    for (; t--; ) n += e[(Math.random() * r) | 0];
    return n;
  };
function lT(t) {
  return !!(
    t &&
    It(t.append) &&
    t[Symbol.toStringTag] === "FormData" &&
    t[Symbol.iterator]
  );
}
const cT = (t) => {
    const e = new Array(10),
      n = (r, i) => {
        if (_u(r)) {
          if (e.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            e[i] = r;
            const s = Bs(r) ? [] : {};
            return (
              Oa(r, (o, a) => {
                const l = n(o, i + 1);
                !ca(l) && (s[a] = l);
              }),
              (e[i] = void 0),
              s
            );
          }
        }
        return r;
      };
    return n(t, 0);
  },
  uT = gn("AsyncFunction"),
  dT = (t) => t && (_u(t) || It(t)) && It(t.then) && It(t.catch),
  P_ = ((t, e) =>
    t
      ? setImmediate
      : e
      ? ((n, r) => (
          ni.addEventListener(
            "message",
            ({ source: i, data: s }) => {
              i === ni && s === n && r.length && r.shift()();
            },
            !1,
          ),
          (i) => {
            r.push(i), ni.postMessage(n, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    It(ni.postMessage),
  ),
  fT =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(ni)
      : (typeof process < "u" && process.nextTick) || P_,
  O = {
    isArray: Bs,
    isArrayBuffer: C_,
    isBuffer: Ak,
    isFormData: Fk,
    isArrayBufferView: Nk,
    isString: Pk,
    isNumber: k_,
    isBoolean: Lk,
    isObject: _u,
    isPlainObject: $l,
    isReadableStream: $k,
    isRequest: zk,
    isResponse: Hk,
    isHeaders: Wk,
    isUndefined: ca,
    isDate: jk,
    isFile: Rk,
    isBlob: Dk,
    isRegExp: nT,
    isFunction: It,
    isStream: Ik,
    isURLSearchParams: Bk,
    isTypedArray: Qk,
    isFileList: Mk,
    forEach: Oa,
    merge: eh,
    extend: Vk,
    trim: Uk,
    stripBOM: Yk,
    inherits: Gk,
    toFlatObject: Kk,
    kindOf: vu,
    kindOfTest: gn,
    endsWith: qk,
    toArray: Xk,
    forEachEntry: Jk,
    matchAll: Zk,
    isHTMLForm: eT,
    hasOwnProperty: dg,
    hasOwnProp: dg,
    reduceDescriptors: A_,
    freezeMethods: rT,
    toObjectSet: iT,
    toCamelCase: tT,
    noop: sT,
    toFiniteNumber: oT,
    findKey: T_,
    global: ni,
    isContextDefined: O_,
    ALPHABET: N_,
    generateString: aT,
    isSpecCompliantForm: lT,
    toJSONObject: cT,
    isAsyncFn: uT,
    isThenable: dT,
    setImmediate: P_,
    asap: fT,
  };
function ne(t, e, n, r, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = t),
    (this.name = "AxiosError"),
    e && (this.code = e),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i);
}
O.inherits(ne, Error, {
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
      config: O.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const L_ = ne.prototype,
  j_ = {};
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
  j_[t] = { value: t };
});
Object.defineProperties(ne, j_);
Object.defineProperty(L_, "isAxiosError", { value: !0 });
ne.from = (t, e, n, r, i, s) => {
  const o = Object.create(L_);
  return (
    O.toFlatObject(
      t,
      o,
      function (l) {
        return l !== Error.prototype;
      },
      (a) => a !== "isAxiosError",
    ),
    ne.call(o, t.message, e, n, r, i),
    (o.cause = t),
    (o.name = t.name),
    s && Object.assign(o, s),
    o
  );
};
const hT = null;
function th(t) {
  return O.isPlainObject(t) || O.isArray(t);
}
function R_(t) {
  return O.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function hg(t, e, n) {
  return t
    ? t
        .concat(e)
        .map(function (i, s) {
          return (i = R_(i)), !n && s ? "[" + i + "]" : i;
        })
        .join(n ? "." : "")
    : e;
}
function pT(t) {
  return O.isArray(t) && !t.some(th);
}
const mT = O.toFlatObject(O, {}, null, function (e) {
  return /^is[A-Z]/.test(e);
});
function bu(t, e, n) {
  if (!O.isObject(t)) throw new TypeError("target must be an object");
  (e = e || new FormData()),
    (n = O.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (g, v) {
        return !O.isUndefined(v[g]);
      },
    ));
  const r = n.metaTokens,
    i = n.visitor || u,
    s = n.dots,
    o = n.indexes,
    l = (n.Blob || (typeof Blob < "u" && Blob)) && O.isSpecCompliantForm(e);
  if (!O.isFunction(i)) throw new TypeError("visitor must be a function");
  function c(m) {
    if (m === null) return "";
    if (O.isDate(m)) return m.toISOString();
    if (!l && O.isBlob(m))
      throw new ne("Blob is not supported. Use a Buffer instead.");
    return O.isArrayBuffer(m) || O.isTypedArray(m)
      ? l && typeof Blob == "function"
        ? new Blob([m])
        : Buffer.from(m)
      : m;
  }
  function u(m, g, v) {
    let y = m;
    if (m && !v && typeof m == "object") {
      if (O.endsWith(g, "{}"))
        (g = r ? g : g.slice(0, -2)), (m = JSON.stringify(m));
      else if (
        (O.isArray(m) && pT(m)) ||
        ((O.isFileList(m) || O.endsWith(g, "[]")) && (y = O.toArray(m)))
      )
        return (
          (g = R_(g)),
          y.forEach(function (_, w) {
            !(O.isUndefined(_) || _ === null) &&
              e.append(
                o === !0 ? hg([g], w, s) : o === null ? g : g + "[]",
                c(_),
              );
          }),
          !1
        );
    }
    return th(m) ? !0 : (e.append(hg(v, g, s), c(m)), !1);
  }
  const d = [],
    h = Object.assign(mT, {
      defaultVisitor: u,
      convertValue: c,
      isVisitable: th,
    });
  function p(m, g) {
    if (!O.isUndefined(m)) {
      if (d.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      d.push(m),
        O.forEach(m, function (y, x) {
          (!(O.isUndefined(y) || y === null) &&
            i.call(e, y, O.isString(x) ? x.trim() : x, g, h)) === !0 &&
            p(y, g ? g.concat(x) : [x]);
        }),
        d.pop();
    }
  }
  if (!O.isObject(t)) throw new TypeError("data must be an object");
  return p(t), e;
}
function pg(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (r) {
    return e[r];
  });
}
function Vp(t, e) {
  (this._pairs = []), t && bu(t, this, e);
}
const D_ = Vp.prototype;
D_.append = function (e, n) {
  this._pairs.push([e, n]);
};
D_.toString = function (e) {
  const n = e
    ? function (r) {
        return e.call(this, r, pg);
      }
    : pg;
  return this._pairs
    .map(function (i) {
      return n(i[0]) + "=" + n(i[1]);
    }, "")
    .join("&");
};
function gT(t) {
  return encodeURIComponent(t)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function M_(t, e, n) {
  if (!e) return t;
  const r = (n && n.encode) || gT,
    i = n && n.serialize;
  let s;
  if (
    (i
      ? (s = i(e, n))
      : (s = O.isURLSearchParams(e) ? e.toString() : new Vp(e, n).toString(r)),
    s)
  ) {
    const o = t.indexOf("#");
    o !== -1 && (t = t.slice(0, o)),
      (t += (t.indexOf("?") === -1 ? "?" : "&") + s);
  }
  return t;
}
class mg {
  constructor() {
    this.handlers = [];
  }
  use(e, n, r) {
    return (
      this.handlers.push({
        fulfilled: e,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
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
    O.forEach(this.handlers, function (r) {
      r !== null && e(r);
    });
  }
}
const I_ = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  yT = typeof URLSearchParams < "u" ? URLSearchParams : Vp,
  vT = typeof FormData < "u" ? FormData : null,
  xT = typeof Blob < "u" ? Blob : null,
  _T = {
    isBrowser: !0,
    classes: { URLSearchParams: yT, FormData: vT, Blob: xT },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Yp = typeof window < "u" && typeof document < "u",
  bT = ((t) => Yp && ["ReactNative", "NativeScript", "NS"].indexOf(t) < 0)(
    typeof navigator < "u" && navigator.product,
  ),
  wT =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  ET = (Yp && window.location.href) || "http://localhost",
  ST = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Yp,
        hasStandardBrowserEnv: bT,
        hasStandardBrowserWebWorkerEnv: wT,
        origin: ET,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  pn = { ...ST, ..._T };
function CT(t, e) {
  return bu(
    t,
    new pn.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, i, s) {
          return pn.isNode && O.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : s.defaultVisitor.apply(this, arguments);
        },
      },
      e,
    ),
  );
}
function kT(t) {
  return O.matchAll(/\w+|\[(\w*)]/g, t).map((e) =>
    e[0] === "[]" ? "" : e[1] || e[0],
  );
}
function TT(t) {
  const e = {},
    n = Object.keys(t);
  let r;
  const i = n.length;
  let s;
  for (r = 0; r < i; r++) (s = n[r]), (e[s] = t[s]);
  return e;
}
function F_(t) {
  function e(n, r, i, s) {
    let o = n[s++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o),
      l = s >= n.length;
    return (
      (o = !o && O.isArray(i) ? i.length : o),
      l
        ? (O.hasOwnProp(i, o) ? (i[o] = [i[o], r]) : (i[o] = r), !a)
        : ((!i[o] || !O.isObject(i[o])) && (i[o] = []),
          e(n, r, i[o], s) && O.isArray(i[o]) && (i[o] = TT(i[o])),
          !a)
    );
  }
  if (O.isFormData(t) && O.isFunction(t.entries)) {
    const n = {};
    return (
      O.forEachEntry(t, (r, i) => {
        e(kT(r), i, n, 0);
      }),
      n
    );
  }
  return null;
}
function OT(t, e, n) {
  if (O.isString(t))
    try {
      return (e || JSON.parse)(t), O.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (0, JSON.stringify)(t);
}
const Aa = {
  transitional: I_,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (e, n) {
      const r = n.getContentType() || "",
        i = r.indexOf("application/json") > -1,
        s = O.isObject(e);
      if ((s && O.isHTMLForm(e) && (e = new FormData(e)), O.isFormData(e)))
        return i ? JSON.stringify(F_(e)) : e;
      if (
        O.isArrayBuffer(e) ||
        O.isBuffer(e) ||
        O.isStream(e) ||
        O.isFile(e) ||
        O.isBlob(e) ||
        O.isReadableStream(e)
      )
        return e;
      if (O.isArrayBufferView(e)) return e.buffer;
      if (O.isURLSearchParams(e))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          e.toString()
        );
      let a;
      if (s) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return CT(e, this.formSerializer).toString();
        if ((a = O.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return bu(
            a ? { "files[]": e } : e,
            l && new l(),
            this.formSerializer,
          );
        }
      }
      return s || i ? (n.setContentType("application/json", !1), OT(e)) : e;
    },
  ],
  transformResponse: [
    function (e) {
      const n = this.transitional || Aa.transitional,
        r = n && n.forcedJSONParsing,
        i = this.responseType === "json";
      if (O.isResponse(e) || O.isReadableStream(e)) return e;
      if (e && O.isString(e) && ((r && !this.responseType) || i)) {
        const o = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(e);
        } catch (a) {
          if (o)
            throw a.name === "SyntaxError"
              ? ne.from(a, ne.ERR_BAD_RESPONSE, this, null, this.response)
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
  env: { FormData: pn.classes.FormData, Blob: pn.classes.Blob },
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
O.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Aa.headers[t] = {};
});
const AT = O.toObjectSet([
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
  NT = (t) => {
    const e = {};
    let n, r, i;
    return (
      t &&
        t
          .split(
            `
`,
          )
          .forEach(function (o) {
            (i = o.indexOf(":")),
              (n = o.substring(0, i).trim().toLowerCase()),
              (r = o.substring(i + 1).trim()),
              !(!n || (e[n] && AT[n])) &&
                (n === "set-cookie"
                  ? e[n]
                    ? e[n].push(r)
                    : (e[n] = [r])
                  : (e[n] = e[n] ? e[n] + ", " + r : r));
          }),
      e
    );
  },
  gg = Symbol("internals");
function no(t) {
  return t && String(t).trim().toLowerCase();
}
function zl(t) {
  return t === !1 || t == null ? t : O.isArray(t) ? t.map(zl) : String(t);
}
function PT(t) {
  const e = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(t)); ) e[r[1]] = r[2];
  return e;
}
const LT = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function dd(t, e, n, r, i) {
  if (O.isFunction(r)) return r.call(this, e, n);
  if ((i && (e = n), !!O.isString(e))) {
    if (O.isString(r)) return e.indexOf(r) !== -1;
    if (O.isRegExp(r)) return r.test(e);
  }
}
function jT(t) {
  return t
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function RT(t, e) {
  const n = O.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + n, {
      value: function (i, s, o) {
        return this[r].call(this, e, i, s, o);
      },
      configurable: !0,
    });
  });
}
class Ot {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const i = this;
    function s(a, l, c) {
      const u = no(l);
      if (!u) throw new Error("header name must be a non-empty string");
      const d = O.findKey(i, u);
      (!d || i[d] === void 0 || c === !0 || (c === void 0 && i[d] !== !1)) &&
        (i[d || l] = zl(a));
    }
    const o = (a, l) => O.forEach(a, (c, u) => s(c, u, l));
    if (O.isPlainObject(e) || e instanceof this.constructor) o(e, n);
    else if (O.isString(e) && (e = e.trim()) && !LT(e)) o(NT(e), n);
    else if (O.isHeaders(e)) for (const [a, l] of e.entries()) s(l, a, r);
    else e != null && s(n, e, r);
    return this;
  }
  get(e, n) {
    if (((e = no(e)), e)) {
      const r = O.findKey(this, e);
      if (r) {
        const i = this[r];
        if (!n) return i;
        if (n === !0) return PT(i);
        if (O.isFunction(n)) return n.call(this, i, r);
        if (O.isRegExp(n)) return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (((e = no(e)), e)) {
      const r = O.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || dd(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let i = !1;
    function s(o) {
      if (((o = no(o)), o)) {
        const a = O.findKey(r, o);
        a && (!n || dd(r, r[a], a, n)) && (delete r[a], (i = !0));
      }
    }
    return O.isArray(e) ? e.forEach(s) : s(e), i;
  }
  clear(e) {
    const n = Object.keys(this);
    let r = n.length,
      i = !1;
    for (; r--; ) {
      const s = n[r];
      (!e || dd(this, this[s], s, e, !0)) && (delete this[s], (i = !0));
    }
    return i;
  }
  normalize(e) {
    const n = this,
      r = {};
    return (
      O.forEach(this, (i, s) => {
        const o = O.findKey(r, s);
        if (o) {
          (n[o] = zl(i)), delete n[s];
          return;
        }
        const a = e ? jT(s) : String(s).trim();
        a !== s && delete n[s], (n[a] = zl(i)), (r[a] = !0);
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
      O.forEach(this, (r, i) => {
        r != null && r !== !1 && (n[i] = e && O.isArray(r) ? r.join(", ") : r);
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
    const r = new this(e);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(e) {
    const r = (this[gg] = this[gg] = { accessors: {} }).accessors,
      i = this.prototype;
    function s(o) {
      const a = no(o);
      r[a] || (RT(i, o), (r[a] = !0));
    }
    return O.isArray(e) ? e.forEach(s) : s(e), this;
  }
}
Ot.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
O.reduceDescriptors(Ot.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(r) {
      this[n] = r;
    },
  };
});
O.freezeMethods(Ot);
function fd(t, e) {
  const n = this || Aa,
    r = e || n,
    i = Ot.from(r.headers);
  let s = r.data;
  return (
    O.forEach(t, function (a) {
      s = a.call(n, s, i.normalize(), e ? e.status : void 0);
    }),
    i.normalize(),
    s
  );
}
function B_(t) {
  return !!(t && t.__CANCEL__);
}
function $s(t, e, n) {
  ne.call(this, t ?? "canceled", ne.ERR_CANCELED, e, n),
    (this.name = "CanceledError");
}
O.inherits($s, ne, { __CANCEL__: !0 });
function $_(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? t(n)
    : e(
        new ne(
          "Request failed with status code " + n.status,
          [ne.ERR_BAD_REQUEST, ne.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n,
        ),
      );
}
function DT(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return (e && e[1]) || "";
}
function MT(t, e) {
  t = t || 10;
  const n = new Array(t),
    r = new Array(t);
  let i = 0,
    s = 0,
    o;
  return (
    (e = e !== void 0 ? e : 1e3),
    function (l) {
      const c = Date.now(),
        u = r[s];
      o || (o = c), (n[i] = l), (r[i] = c);
      let d = s,
        h = 0;
      for (; d !== i; ) (h += n[d++]), (d = d % t);
      if (((i = (i + 1) % t), i === s && (s = (s + 1) % t), c - o < e)) return;
      const p = u && c - u;
      return p ? Math.round((h * 1e3) / p) : void 0;
    }
  );
}
function IT(t, e) {
  let n = 0,
    r = 1e3 / e,
    i,
    s;
  const o = (c, u = Date.now()) => {
    (n = u), (i = null), s && (clearTimeout(s), (s = null)), t.apply(null, c);
  };
  return [
    (...c) => {
      const u = Date.now(),
        d = u - n;
      d >= r
        ? o(c, u)
        : ((i = c),
          s ||
            (s = setTimeout(() => {
              (s = null), o(i);
            }, r - d)));
    },
    () => i && o(i),
  ];
}
const Ac = (t, e, n = 3) => {
    let r = 0;
    const i = MT(50, 250);
    return IT((s) => {
      const o = s.loaded,
        a = s.lengthComputable ? s.total : void 0,
        l = o - r,
        c = i(l),
        u = o <= a;
      r = o;
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
  yg = (t, e) => {
    const n = t != null;
    return [(r) => e[0]({ lengthComputable: n, total: t, loaded: r }), e[1]];
  },
  vg =
    (t) =>
    (...e) =>
      O.asap(() => t(...e)),
  FT = pn.hasStandardBrowserEnv
    ? (function () {
        const e = /(msie|trident)/i.test(navigator.userAgent),
          n = document.createElement("a");
        let r;
        function i(s) {
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
          (r = i(window.location.href)),
          function (o) {
            const a = O.isString(o) ? i(o) : o;
            return a.protocol === r.protocol && a.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  BT = pn.hasStandardBrowserEnv
    ? {
        write(t, e, n, r, i, s) {
          const o = [t + "=" + encodeURIComponent(e)];
          O.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
            O.isString(r) && o.push("path=" + r),
            O.isString(i) && o.push("domain=" + i),
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
function $T(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function zT(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function z_(t, e) {
  return t && !$T(e) ? zT(t, e) : e;
}
const xg = (t) => (t instanceof Ot ? { ...t } : t);
function _i(t, e) {
  e = e || {};
  const n = {};
  function r(c, u, d) {
    return O.isPlainObject(c) && O.isPlainObject(u)
      ? O.merge.call({ caseless: d }, c, u)
      : O.isPlainObject(u)
      ? O.merge({}, u)
      : O.isArray(u)
      ? u.slice()
      : u;
  }
  function i(c, u, d) {
    if (O.isUndefined(u)) {
      if (!O.isUndefined(c)) return r(void 0, c, d);
    } else return r(c, u, d);
  }
  function s(c, u) {
    if (!O.isUndefined(u)) return r(void 0, u);
  }
  function o(c, u) {
    if (O.isUndefined(u)) {
      if (!O.isUndefined(c)) return r(void 0, c);
    } else return r(void 0, u);
  }
  function a(c, u, d) {
    if (d in e) return r(c, u);
    if (d in t) return r(void 0, c);
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
    headers: (c, u) => i(xg(c), xg(u), !0),
  };
  return (
    O.forEach(Object.keys(Object.assign({}, t, e)), function (u) {
      const d = l[u] || i,
        h = d(t[u], e[u], u);
      (O.isUndefined(h) && d !== a) || (n[u] = h);
    }),
    n
  );
}
const H_ = (t) => {
    const e = _i({}, t);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: i,
      xsrfCookieName: s,
      headers: o,
      auth: a,
    } = e;
    (e.headers = o = Ot.from(o)),
      (e.url = M_(z_(e.baseURL, e.url), t.params, t.paramsSerializer)),
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
    if (O.isFormData(n)) {
      if (pn.hasStandardBrowserEnv || pn.hasStandardBrowserWebWorkerEnv)
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
      pn.hasStandardBrowserEnv &&
      (r && O.isFunction(r) && (r = r(e)), r || (r !== !1 && FT(e.url)))
    ) {
      const c = i && s && BT.read(s);
      c && o.set(i, c);
    }
    return e;
  },
  HT = typeof XMLHttpRequest < "u",
  WT =
    HT &&
    function (t) {
      return new Promise(function (n, r) {
        const i = H_(t);
        let s = i.data;
        const o = Ot.from(i.headers).normalize();
        let { responseType: a, onUploadProgress: l, onDownloadProgress: c } = i,
          u,
          d,
          h,
          p,
          m;
        function g() {
          p && p(),
            m && m(),
            i.cancelToken && i.cancelToken.unsubscribe(u),
            i.signal && i.signal.removeEventListener("abort", u);
        }
        let v = new XMLHttpRequest();
        v.open(i.method.toUpperCase(), i.url, !0), (v.timeout = i.timeout);
        function y() {
          if (!v) return;
          const _ = Ot.from(
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
          $_(
            function (C) {
              n(C), g();
            },
            function (C) {
              r(C), g();
            },
            E,
          ),
            (v = null);
        }
        "onloadend" in v
          ? (v.onloadend = y)
          : (v.onreadystatechange = function () {
              !v ||
                v.readyState !== 4 ||
                (v.status === 0 &&
                  !(v.responseURL && v.responseURL.indexOf("file:") === 0)) ||
                setTimeout(y);
            }),
          (v.onabort = function () {
            v &&
              (r(new ne("Request aborted", ne.ECONNABORTED, t, v)), (v = null));
          }),
          (v.onerror = function () {
            r(new ne("Network Error", ne.ERR_NETWORK, t, v)), (v = null);
          }),
          (v.ontimeout = function () {
            let w = i.timeout
              ? "timeout of " + i.timeout + "ms exceeded"
              : "timeout exceeded";
            const E = i.transitional || I_;
            i.timeoutErrorMessage && (w = i.timeoutErrorMessage),
              r(
                new ne(
                  w,
                  E.clarifyTimeoutError ? ne.ETIMEDOUT : ne.ECONNABORTED,
                  t,
                  v,
                ),
              ),
              (v = null);
          }),
          s === void 0 && o.setContentType(null),
          "setRequestHeader" in v &&
            O.forEach(o.toJSON(), function (w, E) {
              v.setRequestHeader(E, w);
            }),
          O.isUndefined(i.withCredentials) ||
            (v.withCredentials = !!i.withCredentials),
          a && a !== "json" && (v.responseType = i.responseType),
          c && (([h, m] = Ac(c, !0)), v.addEventListener("progress", h)),
          l &&
            v.upload &&
            (([d, p] = Ac(l)),
            v.upload.addEventListener("progress", d),
            v.upload.addEventListener("loadend", p)),
          (i.cancelToken || i.signal) &&
            ((u = (_) => {
              v &&
                (r(!_ || _.type ? new $s(null, t, v) : _),
                v.abort(),
                (v = null));
            }),
            i.cancelToken && i.cancelToken.subscribe(u),
            i.signal &&
              (i.signal.aborted ? u() : i.signal.addEventListener("abort", u)));
        const x = DT(i.url);
        if (x && pn.protocols.indexOf(x) === -1) {
          r(new ne("Unsupported protocol " + x + ":", ne.ERR_BAD_REQUEST, t));
          return;
        }
        v.send(s || null);
      });
    },
  UT = (t, e) => {
    let n = new AbortController(),
      r;
    const i = function (l) {
      if (!r) {
        (r = !0), o();
        const c = l instanceof Error ? l : this.reason;
        n.abort(
          c instanceof ne ? c : new $s(c instanceof Error ? c.message : c),
        );
      }
    };
    let s =
      e &&
      setTimeout(() => {
        i(new ne(`timeout ${e} of ms exceeded`, ne.ETIMEDOUT));
      }, e);
    const o = () => {
      t &&
        (s && clearTimeout(s),
        (s = null),
        t.forEach((l) => {
          l &&
            (l.removeEventListener
              ? l.removeEventListener("abort", i)
              : l.unsubscribe(i));
        }),
        (t = null));
    };
    t.forEach((l) => l && l.addEventListener && l.addEventListener("abort", i));
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
  VT = function* (t, e) {
    let n = t.byteLength;
    if (n < e) {
      yield t;
      return;
    }
    let r = 0,
      i;
    for (; r < n; ) (i = r + e), yield t.slice(r, i), (r = i);
  },
  YT = async function* (t, e, n) {
    for await (const r of t)
      yield* VT(ArrayBuffer.isView(r) ? r : await n(String(r)), e);
  },
  _g = (t, e, n, r, i) => {
    const s = YT(t, e, i);
    let o = 0,
      a,
      l = (c) => {
        a || ((a = !0), r && r(c));
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
  wu =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  W_ = wu && typeof ReadableStream == "function",
  nh =
    wu &&
    (typeof TextEncoder == "function"
      ? (
          (t) => (e) =>
            t.encode(e)
        )(new TextEncoder())
      : async (t) => new Uint8Array(await new Response(t).arrayBuffer())),
  U_ = (t, ...e) => {
    try {
      return !!t(...e);
    } catch {
      return !1;
    }
  },
  GT =
    W_ &&
    U_(() => {
      let t = !1;
      const e = new Request(pn.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (t = !0), "half";
        },
      }).headers.has("Content-Type");
      return t && !e;
    }),
  bg = 64 * 1024,
  rh = W_ && U_(() => O.isReadableStream(new Response("").body)),
  Nc = { stream: rh && ((t) => t.body) };
wu &&
  ((t) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
      !Nc[e] &&
        (Nc[e] = O.isFunction(t[e])
          ? (n) => n[e]()
          : (n, r) => {
              throw new ne(
                `Response type '${e}' is not supported`,
                ne.ERR_NOT_SUPPORT,
                r,
              );
            });
    });
  })(new Response());
const KT = async (t) => {
    if (t == null) return 0;
    if (O.isBlob(t)) return t.size;
    if (O.isSpecCompliantForm(t))
      return (await new Request(t).arrayBuffer()).byteLength;
    if (O.isArrayBufferView(t) || O.isArrayBuffer(t)) return t.byteLength;
    if ((O.isURLSearchParams(t) && (t = t + ""), O.isString(t)))
      return (await nh(t)).byteLength;
  },
  qT = async (t, e) => {
    const n = O.toFiniteNumber(t.getContentLength());
    return n ?? KT(e);
  },
  XT =
    wu &&
    (async (t) => {
      let {
        url: e,
        method: n,
        data: r,
        signal: i,
        cancelToken: s,
        timeout: o,
        onDownloadProgress: a,
        onUploadProgress: l,
        responseType: c,
        headers: u,
        withCredentials: d = "same-origin",
        fetchOptions: h,
      } = H_(t);
      c = c ? (c + "").toLowerCase() : "text";
      let [p, m] = i || s || o ? UT([i, s], o) : [],
        g,
        v;
      const y = () => {
        !g &&
          setTimeout(() => {
            p && p.unsubscribe();
          }),
          (g = !0);
      };
      let x;
      try {
        if (
          l &&
          GT &&
          n !== "get" &&
          n !== "head" &&
          (x = await qT(u, r)) !== 0
        ) {
          let S = new Request(e, { method: "POST", body: r, duplex: "half" }),
            C;
          if (
            (O.isFormData(r) &&
              (C = S.headers.get("content-type")) &&
              u.setContentType(C),
            S.body)
          ) {
            const [k, L] = yg(x, Ac(vg(l)));
            r = _g(S.body, bg, k, L, nh);
          }
        }
        O.isString(d) || (d = d ? "include" : "omit"),
          (v = new Request(e, {
            ...h,
            signal: p,
            method: n.toUpperCase(),
            headers: u.normalize().toJSON(),
            body: r,
            duplex: "half",
            credentials: d,
          }));
        let _ = await fetch(v);
        const w = rh && (c === "stream" || c === "response");
        if (rh && (a || w)) {
          const S = {};
          ["status", "statusText", "headers"].forEach((j) => {
            S[j] = _[j];
          });
          const C = O.toFiniteNumber(_.headers.get("content-length")),
            [k, L] = (a && yg(C, Ac(vg(a), !0))) || [];
          _ = new Response(
            _g(
              _.body,
              bg,
              k,
              () => {
                L && L(), w && y();
              },
              nh,
            ),
            S,
          );
        }
        c = c || "text";
        let E = await Nc[O.findKey(Nc, c) || "text"](_, t);
        return (
          !w && y(),
          m && m(),
          await new Promise((S, C) => {
            $_(S, C, {
              data: E,
              headers: Ot.from(_.headers),
              status: _.status,
              statusText: _.statusText,
              config: t,
              request: v,
            });
          })
        );
      } catch (_) {
        throw (
          (y(),
          _ && _.name === "TypeError" && /fetch/i.test(_.message)
            ? Object.assign(new ne("Network Error", ne.ERR_NETWORK, t, v), {
                cause: _.cause || _,
              })
            : ne.from(_, _ && _.code, t, v))
        );
      }
    }),
  ih = { http: hT, xhr: WT, fetch: XT };
O.forEach(ih, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {}
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const wg = (t) => `- ${t}`,
  QT = (t) => O.isFunction(t) || t === null || t === !1,
  V_ = {
    getAdapter: (t) => {
      t = O.isArray(t) ? t : [t];
      const { length: e } = t;
      let n, r;
      const i = {};
      for (let s = 0; s < e; s++) {
        n = t[s];
        let o;
        if (
          ((r = n),
          !QT(n) && ((r = ih[(o = String(n)).toLowerCase()]), r === void 0))
        )
          throw new ne(`Unknown adapter '${o}'`);
        if (r) break;
        i[o || "#" + s] = r;
      }
      if (!r) {
        const s = Object.entries(i).map(
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
              s.map(wg).join(`
`)
            : " " + wg(s[0])
          : "as no adapter specified";
        throw new ne(
          "There is no suitable adapter to dispatch the request " + o,
          "ERR_NOT_SUPPORT",
        );
      }
      return r;
    },
    adapters: ih,
  };
function hd(t) {
  if (
    (t.cancelToken && t.cancelToken.throwIfRequested(),
    t.signal && t.signal.aborted)
  )
    throw new $s(null, t);
}
function Eg(t) {
  return (
    hd(t),
    (t.headers = Ot.from(t.headers)),
    (t.data = fd.call(t, t.transformRequest)),
    ["post", "put", "patch"].indexOf(t.method) !== -1 &&
      t.headers.setContentType("application/x-www-form-urlencoded", !1),
    V_.getAdapter(t.adapter || Aa.adapter)(t).then(
      function (r) {
        return (
          hd(t),
          (r.data = fd.call(t, t.transformResponse, r)),
          (r.headers = Ot.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          B_(r) ||
            (hd(t),
            r &&
              r.response &&
              ((r.response.data = fd.call(t, t.transformResponse, r.response)),
              (r.response.headers = Ot.from(r.response.headers)))),
          Promise.reject(r)
        );
      },
    )
  );
}
const Y_ = "1.7.4",
  Gp = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (t, e) => {
    Gp[t] = function (r) {
      return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
    };
  },
);
const Sg = {};
Gp.transitional = function (e, n, r) {
  function i(s, o) {
    return (
      "[Axios v" +
      Y_ +
      "] Transitional option '" +
      s +
      "'" +
      o +
      (r ? ". " + r : "")
    );
  }
  return (s, o, a) => {
    if (e === !1)
      throw new ne(
        i(o, " has been removed" + (n ? " in " + n : "")),
        ne.ERR_DEPRECATED,
      );
    return (
      n &&
        !Sg[o] &&
        ((Sg[o] = !0),
        console.warn(
          i(
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
function JT(t, e, n) {
  if (typeof t != "object")
    throw new ne("options must be an object", ne.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let i = r.length;
  for (; i-- > 0; ) {
    const s = r[i],
      o = e[s];
    if (o) {
      const a = t[s],
        l = a === void 0 || o(a, s, t);
      if (l !== !0)
        throw new ne("option " + s + " must be " + l, ne.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new ne("Unknown option " + s, ne.ERR_BAD_OPTION);
  }
}
const sh = { assertOptions: JT, validators: Gp },
  ir = sh.validators;
class di {
  constructor(e) {
    (this.defaults = e),
      (this.interceptors = { request: new mg(), response: new mg() });
  }
  async request(e, n) {
    try {
      return await this._request(e, n);
    } catch (r) {
      if (r instanceof Error) {
        let i;
        Error.captureStackTrace
          ? Error.captureStackTrace((i = {}))
          : (i = new Error());
        const s = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? s &&
              !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + s)
            : (r.stack = s);
        } catch {}
      }
      throw r;
    }
  }
  _request(e, n) {
    typeof e == "string" ? ((n = n || {}), (n.url = e)) : (n = e || {}),
      (n = _i(this.defaults, n));
    const { transitional: r, paramsSerializer: i, headers: s } = n;
    r !== void 0 &&
      sh.assertOptions(
        r,
        {
          silentJSONParsing: ir.transitional(ir.boolean),
          forcedJSONParsing: ir.transitional(ir.boolean),
          clarifyTimeoutError: ir.transitional(ir.boolean),
        },
        !1,
      ),
      i != null &&
        (O.isFunction(i)
          ? (n.paramsSerializer = { serialize: i })
          : sh.assertOptions(
              i,
              { encode: ir.function, serialize: ir.function },
              !0,
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let o = s && O.merge(s.common, s[n.method]);
    s &&
      O.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (m) => {
          delete s[m];
        },
      ),
      (n.headers = Ot.concat(o, s));
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function (g) {
      (typeof g.runWhen == "function" && g.runWhen(n) === !1) ||
        ((l = l && g.synchronous), a.unshift(g.fulfilled, g.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function (g) {
      c.push(g.fulfilled, g.rejected);
    });
    let u,
      d = 0,
      h;
    if (!l) {
      const m = [Eg.bind(this), void 0];
      for (
        m.unshift.apply(m, a),
          m.push.apply(m, c),
          h = m.length,
          u = Promise.resolve(n);
        d < h;

      )
        u = u.then(m[d++], m[d++]);
      return u;
    }
    h = a.length;
    let p = n;
    for (d = 0; d < h; ) {
      const m = a[d++],
        g = a[d++];
      try {
        p = m(p);
      } catch (v) {
        g.call(this, v);
        break;
      }
    }
    try {
      u = Eg.call(this, p);
    } catch (m) {
      return Promise.reject(m);
    }
    for (d = 0, h = c.length; d < h; ) u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(e) {
    e = _i(this.defaults, e);
    const n = z_(e.baseURL, e.url);
    return M_(n, e.params, e.paramsSerializer);
  }
}
O.forEach(["delete", "get", "head", "options"], function (e) {
  di.prototype[e] = function (n, r) {
    return this.request(
      _i(r || {}, { method: e, url: n, data: (r || {}).data }),
    );
  };
});
O.forEach(["post", "put", "patch"], function (e) {
  function n(r) {
    return function (s, o, a) {
      return this.request(
        _i(a || {}, {
          method: e,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: s,
          data: o,
        }),
      );
    };
  }
  (di.prototype[e] = n()), (di.prototype[e + "Form"] = n(!0));
});
class Kp {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (s) {
      n = s;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; ) r._listeners[s](i);
      r._listeners = null;
    }),
      (this.promise.then = (i) => {
        let s;
        const o = new Promise((a) => {
          r.subscribe(a), (s = a);
        }).then(i);
        return (
          (o.cancel = function () {
            r.unsubscribe(s);
          }),
          o
        );
      }),
      e(function (s, o, a) {
        r.reason || ((r.reason = new $s(s, o, a)), n(r.reason));
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
      token: new Kp(function (i) {
        e = i;
      }),
      cancel: e,
    };
  }
}
function ZT(t) {
  return function (n) {
    return t.apply(null, n);
  };
}
function e8(t) {
  return O.isObject(t) && t.isAxiosError === !0;
}
const oh = {
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
Object.entries(oh).forEach(([t, e]) => {
  oh[e] = t;
});
function G_(t) {
  const e = new di(t),
    n = S_(di.prototype.request, e);
  return (
    O.extend(n, di.prototype, e, { allOwnKeys: !0 }),
    O.extend(n, e, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return G_(_i(t, i));
    }),
    n
  );
}
const fe = G_(Aa);
fe.Axios = di;
fe.CanceledError = $s;
fe.CancelToken = Kp;
fe.isCancel = B_;
fe.VERSION = Y_;
fe.toFormData = bu;
fe.AxiosError = ne;
fe.Cancel = fe.CanceledError;
fe.all = function (e) {
  return Promise.all(e);
};
fe.spread = ZT;
fe.isAxiosError = e8;
fe.mergeConfig = _i;
fe.AxiosHeaders = Ot;
fe.formToJSON = (t) => F_(O.isHTMLForm(t) ? new FormData(t) : t);
fe.getAdapter = V_.getAdapter;
fe.HttpStatusCode = oh;
fe.default = fe;
const t8 = "/api/contactforms",
  n8 = { create: async (t) => (await fe.post(t8, t)).data },
  oe = () =>
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
  r8 = ({ notify: t }) => {
    const [e, n] = b.useState(""),
      [r, i] = b.useState(""),
      s = async (l) => {
        n8.create(l)
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
          s({ email: e, message: r }),
          n(""),
          i("");
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
    return f.jsxs("section", {
      className: "contact form",
      children: [
        f.jsx(lt, {
          title: "Contact Us | Bullet Point Fitness",
          description:
            "Get in touch with the Bullet Point Fitness team for inquiries, support, or feedback. We're here to help you on your fitness journey.",
          keywords:
            "contact us, support, inquiries, feedback, Bullet Point Fitness contact",
          canonicalUrl: "https://bulletpointfitness.com/contact-form",
          ogImage: "https://bulletpointfitness.com/og-image.png",
        }),
        f.jsxs(ot, {
          children: [
            f.jsx("div", {
              children: f.jsx("h1", {
                style: a.header,
                children: "Contact Form",
              }),
            }),
            f.jsx(re, {
              className: "my-3",
              style: a.card,
              border: "danger",
              children: f.jsxs(re.Body, {
                children: [
                  f.jsx("p", {
                    style: a.paragraph,
                    children:
                      "If you have any questions or inquiries, please don't hesitate to reach out using the contact form below. We'll get back to you as soon as possible.",
                  }),
                  f.jsxs(te, {
                    onSubmit: o,
                    children: [
                      f.jsxs(te.Group, {
                        className: "mb-3",
                        children: [
                          f.jsxs(te.Label, {
                            htmlFor: "email",
                            style: a.label,
                            children: [f.jsx(oe, {}), "Email"],
                          }),
                          f.jsx(te.Control, {
                            value: e,
                            onChange: ({ target: l }) => n(l.value),
                            id: "email",
                            placeholder: "Place your email here",
                            style: a.form,
                            "aria-label": "Email",
                            required: !0,
                          }),
                        ],
                      }),
                      f.jsxs(te.Group, {
                        className: "mb-3",
                        children: [
                          f.jsxs(te.Label, {
                            htmlFor: "message",
                            style: a.label,
                            children: [f.jsx(oe, {}), "Message"],
                          }),
                          f.jsx(te.Control, {
                            as: "textarea",
                            rows: 5,
                            value: r,
                            onChange: ({ target: l }) => i(l.value),
                            id: "message",
                            placeholder: "Place your message here",
                            style: a.form,
                            "aria-label": "Message",
                            required: !0,
                          }),
                        ],
                      }),
                      f.jsx(ht, {
                        "aria-label": "Submit",
                        type: "submit",
                        variant: "danger",
                        style: a.button,
                        className: "btn-custom",
                        disabled: !e || !r,
                        children: "Submit",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  },
  Cg = ({ user: t, onLogout: e }) => {
    const [n, r] = b.useState(!1),
      i = {
        navStyle: { fontSize: 26, color: "#df0000", margin: 15 },
        navbar: { marginBottom: 60, marginTop: 15 },
      };
    return f.jsx(cd, {
      expanded: n,
      onToggle: r,
      collapseOnSelect: !0,
      expand: "lg",
      className: "text-center",
      style: i.navbar,
      children: f.jsxs("div", {
        className: "container-fluid",
        children: [
          f.jsx(cd.Toggle, {
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
          f.jsx(cd.Collapse, {
            id: "basic-navbar-nav justify-content-center",
            onClick: () => r(!1),
            children: f.jsx("div", {
              className: "mx-auto",
              children: f.jsx(pk, {
                className: "me-auto mt-2 justify-content-center mx-auto",
                children: t
                  ? f.jsxs(f.Fragment, {
                      children: [
                        f.jsx(tt, {
                          to: "/user-homepage",
                          style: i.navStyle,
                          "aria-label": "Link to User Homepage",
                          children: "Home",
                        }),
                        f.jsx(tt, {
                          to: "/instructions",
                          style: i.navStyle,
                          "aria-label": "Link to Workout Instructions",
                          children: "Bullet Point Fitness Manual",
                        }),
                        f.jsx(tt, {
                          to: "/program-form",
                          style: i.navStyle,
                          "aria-label": "Link to Client Information Form",
                          children: "Program Form",
                        }),
                        f.jsx(tt, {
                          to: "/workouts",
                          style: i.navStyle,
                          "aria-label": "Link to workouts",
                          children: "Workouts",
                        }),
                        f.jsx(tt, {
                          to: "/workout-progression",
                          style: i.navStyle,
                          "aria-label": "Link to exercise progression",
                          children: "Workout Progression",
                        }),
                        f.jsx(tt, {
                          to: "/past-workout-programs",
                          style: i.navStyle,
                          "aria-label": "Link to past workouts",
                          children: "Past Workout Programs",
                        }),
                        f.jsx(tt, {
                          to: "/past-workout-progression",
                          style: i.navStyle,
                          "aria-label": "Link to past workout progression data",
                          children: "Past Workout Progressions",
                        }),
                        f.jsx(tt, {
                          to: "/",
                          onClick: e,
                          "aria-label": "Logout",
                          style: i.navStyle,
                          children: "Logout",
                        }),
                      ],
                    })
                  : f.jsxs(f.Fragment, {
                      children: [
                        f.jsx(tt, {
                          to: "/",
                          style: i.navStyle,
                          "aria-label": "Link to Landing Page",
                          children: "Home",
                        }),
                        f.jsx(tt, {
                          to: "/muscle-map",
                          style: i.navStyle,
                          "aria-label":
                            "Link to Interactive Muscle Anatomy Chart",
                          children: "Muscle Map",
                        }),
                        f.jsx(tt, {
                          to: "/training",
                          style: i.navStyle,
                          "aria-label":
                            "Link to Training Essentials video page",
                          children: "Training Essentials",
                        }),
                        f.jsx(tt, {
                          to: "/consultation",
                          style: i.navStyle,
                          "aria-label": "Link to Consultation page",
                          children: "Consultation",
                        }),
                        f.jsx(tt, {
                          to: "/organ-map",
                          style: i.navStyle,
                          "aria-label": "Link to the interactive Organ map",
                          children: "Organ Map",
                        }),
                        f.jsx(tt, {
                          to: "/contact-form",
                          style: i.navStyle,
                          "aria-label": "Link to Contact form",
                          children: "Contact",
                        }),
                        f.jsx(tt, {
                          to: "/about",
                          style: i.navStyle,
                          "aria-label": "Link to About page",
                          children: "About",
                        }),
                        f.jsx(tt, {
                          to: "/login",
                          style: i.navStyle,
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
  i8 = () => {
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
        f.jsx(lt, {
          title: "Consultation | Bullet Point Fitness",
          description:
            "Schedule a consultation with our fitness experts to create a personalized workout plan tailored to your goals and schedule.",
          keywords:
            "consultation, personalized workout plan, fitness experts, personal training, fitness consultation",
          canonicalUrl: "https://bulletpointfitness.com/consultation",
          ogImage: "https://bulletpointfitness.com/og-image.png",
        }),
        f.jsxs("div", {
          children: [
            f.jsx("h1", { style: t.header, children: "Book a Consultation" }),
            f.jsxs("p", {
              style: t.paragraph,
              children: [
                f.jsx(oe, {}),
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
          loading: "lazy",
        }),
      ],
    });
  },
  s8 = "/assets/AllHumanOrgansInk-DYOIkBUv.png",
  o8 = {
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
  a8 = { organList: o8 },
  l8 = "/api/organs",
  c8 = { get: () => fe.get(l8).then((e) => e.data) },
  u8 = ({ organ: t, selectedOrgan: e }) => {
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
    const r = (i) =>
      !i || i.length === 0
        ? "No items available."
        : f.jsx("ul", {
            style: n.ul,
            children: i.map((s, o) =>
              f.jsxs("li", { children: [f.jsx(oe, {}), s] }, o),
            ),
          });
    return f.jsx(re, {
      className: "mb-4 box-shadow",
      border: "danger",
      style: n.text,
      children: f.jsxs(re.Body, {
        children: [
          f.jsx("h3", { style: n.header, children: e }),
          f.jsxs("div", {
            style: n.description,
            children: [
              f.jsx("h5", { style: n.header, children: "Function:" }),
              f.jsxs("div", { children: [f.jsx(oe, {}), t.function] }),
            ],
          }),
          f.jsxs("div", {
            style: n.description,
            children: [
              f.jsx("h5", {
                style: n.header,
                children: "Essential Nutrients for Optimal Function:",
              }),
              r(t.nutrients),
            ],
          }),
          f.jsxs("div", {
            style: n.description,
            children: [
              f.jsx("h5", {
                style: n.header,
                children: "Foods Containing These Nutrients:",
              }),
              r(t.foods),
            ],
          }),
        ],
      }),
    });
  },
  d8 = () => {
    const [t, e] = b.useState(null),
      [n, r] = b.useState(null),
      [i, s] = b.useState([]),
      [o, a] = b.useState(null),
      [l, c] = b.useState(!1);
    b.useEffect(() => {
      (async () => {
        const y = await c8.get();
        s(y);
      })();
    }, []);
    const u = (v) => {
        e(v);
      },
      d = () => {
        e(null);
      },
      h = (v) => {
        r(v);
        const y = i.find((x) => x.name === v);
        a(y), c(!0);
      },
      p = () => c(!1),
      m = (v) => ({
        fill: t === v || n === v ? "rgba(0, 255, 0, 0.5)" : "rgba(0, 0, 0, 0)",
        stroke: t === v || n === v ? "green" : "none",
      }),
      g = {
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
      style: g.organMap,
      children: [
        f.jsx("img", {
          src: s8,
          alt: "Human anatomy chart of organs, where users can click on an organ and find out the necessary nutrients for the optimal function of that organ.",
          "aria-label": "Human anatomy chart of organs",
          style: g.organImg,
          loading: "lazy",
        }),
        f.jsx("svg", {
          viewBox: "0 0 1975 4867",
          style: g.svg,
          children: Object.entries(a8.organList).map(([v, y]) =>
            y.map((x, _) =>
              f.jsx(
                "polygon",
                {
                  onClick: (w) => {
                    w.stopPropagation(), h(v);
                  },
                  points: x.coords,
                  style: m(v),
                  onMouseEnter: () => u(v),
                  onMouseLeave: d,
                },
                `${v}_${_}`,
              ),
            ),
          ),
        }),
        f.jsxs(pr, {
          show: l,
          onHide: p,
          centered: !0,
          children: [
            f.jsx(pr.Header, { closeButton: !0 }),
            f.jsx(pr.Body, {
              children: f.jsx(u8, { organ: o, selectedOrgan: n }),
            }),
          ],
        }),
      ],
    });
  },
  f8 = () => {
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
      className: "organ-map",
      style: t.nutrition,
      children: [
        f.jsx(lt, {
          title: "Organ Map | Bullet Point Fitness",
          description:
            "Discover the nutrients necessary for your body's internal organs. Explore our organ map to understand the benefits of nutrition on overall health.",
          keywords:
            "organ map, internal organs, health benefits, nutrition, body anatomy",
          canonicalUrl: "https://bulletpointfitness.com/organ-map",
          ogImage: "https://bulletpointfitness.com/og-image.png",
        }),
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
        f.jsx(d8, {}),
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
  h8 = "/assets/Muscle-CHIUv5BA.png",
  p8 = {
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
  m8 = { muscleList: p8 },
  g8 = "/api/musclefunctionvideos",
  y8 = { get: () => fe.get(g8).then((e) => e.data) },
  v8 = "/api/exercisevideos",
  x8 = { get: () => fe.get(v8).then((e) => e.data) },
  Pc = ({ video: t }) => {
    const [e, n] = b.useState(!1),
      r = b.useRef(null),
      i = {
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
          r.current && s.observe(r.current),
          () => {
            s.disconnect();
          }
        );
      }, []),
      f.jsxs(re, {
        className: "mb-4 box-shadow",
        border: "danger",
        style: i.text,
        children: [
          f.jsx(Tk, {
            aspectRatio: "16x9",
            children: f.jsx("iframe", {
              ref: r,
              title: t.title,
              src: e ? t.embedUrl : "",
              frameBorder: "0",
              allow:
                "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
              allowFullScreen: !0,
              loading: "lazy",
            }),
          }),
          f.jsxs(re.Body, {
            children: [
              f.jsx(re.Title, { style: i.header, children: t.title }),
              f.jsxs(re.Text, {
                style: i.description,
                children: [f.jsx(oe, {}), t.description],
              }),
              f.jsx(re.Footer, {
                children: f.jsx("small", { children: t.duration }),
              }),
            ],
          }),
        ],
      })
    );
  },
  _8 = b.forwardRef((t, e) => {
    const {
        displayedMuscleFunctionVideos: n,
        displayedExerciseVideos: r,
        selectedMuscle: i,
      } = t,
      s = {
        header: {
          color: "#df0000",
          fontWeight: "bold",
          textDecoration: "underline",
          marginBottom: 40,
        },
      };
    return f.jsxs(ot, {
      ref: e,
      children: [
        f.jsx("h1", { style: s.header, children: i }),
        n.length > 0 &&
          f.jsxs(ot, {
            children: [
              f.jsx("h1", { style: s.header, children: "Muscle Functions" }),
              n.map((o) => f.jsx(Pc, { video: o }, o.id)),
            ],
          }),
        r.length > 0 &&
          f.jsxs(ot, {
            children: [
              f.jsx("h1", { style: s.header, children: "Exercises" }),
              r.map((o) => f.jsx(Pc, { video: o }, o.id)),
            ],
          }),
      ],
    });
  }),
  b8 = () => {
    const [t, e] = b.useState(null),
      [n, r] = b.useState(null),
      [i, s] = b.useState([]),
      [o, a] = b.useState([]),
      [l, c] = b.useState([]),
      [u, d] = b.useState([]),
      h = b.useRef(null);
    b.useEffect(() => {
      (async () => {
        const _ = await y8.get();
        s(_);
      })();
    }, []),
      b.useEffect(() => {
        (async () => {
          const _ = await x8.get();
          c(_);
        })();
      }, []);
    const p = (x) => {
        e(x);
      },
      m = () => {
        e(null);
      },
      g = (x) => {
        r(x);
        const _ = i.filter((E) => E.muscleName === x);
        a(_);
        const w = l.filter((E) => E.muscleName === x);
        d(w), h.current.scrollIntoView({ behavior: "smooth" });
      },
      v = (x) => ({
        fill: t === x || n === x ? "rgba(255, 0, 0, 0.5)" : "rgba(0, 0, 0, 0)",
        stroke: t === x || n === x ? "red" : "none",
      }),
      y = {
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
      style: y.muscleMap,
      children: [
        f.jsx("img", {
          src: h8,
          alt: "This is an image of the muscles of the human body. Users can click on a muscle and watch video tutorials for muscle functions and the best exercises for that muscle.",
          "aria-label": "Human anatomy",
          style: y.anatomyImg,
          loading: "lazy",
        }),
        f.jsx("svg", {
          viewBox: "0 0 373 331",
          style: y.svg,
          children: Object.entries(m8.muscleList).map(([x, _]) =>
            _.map((w, E) =>
              f.jsx(
                "polygon",
                {
                  onClick: (S) => {
                    S.stopPropagation(), g(x);
                  },
                  points: w.coords,
                  style: v(x),
                  onMouseEnter: () => p(x),
                  onMouseLeave: m,
                },
                `${x}_${E}`,
              ),
            ),
          ),
        }),
        f.jsx(_8, {
          ref: h,
          displayedMuscleFunctionVideos: o,
          displayedExerciseVideos: u,
          selectedMuscle: n,
        }),
      ],
    });
  },
  w8 = () => {
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
        f.jsx(lt, {
          title: "Muscle Map | Bullet Point Fitness",
          description:
            "Explore our interactive muscle map to identify and target specific muscle groups. Learn effective exercises tailored for each muscle.",
          keywords:
            "muscle map, muscle groups, targeted exercises, anatomy, fitness guide",
          canonicalUrl: "https://bulletpointfitness.com/muscle-map",
          ogImage: "https://bulletpointfitness.com/og-image.png",
        }),
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
        f.jsx(b8, {}),
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
  E8 = () => {
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
            f.jsxs(xs, {
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
  S8 = () => {
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
  kg = () => {
    const [t, e] = b.useState(!1),
      [n, r] = b.useState(!1),
      i = () => {
        e((l) => !l);
      },
      s = () => {
        r((l) => !l);
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
        f.jsx(ht, {
          variant: "danger",
          onClick: i,
          style: o.button,
          "aria-label": "Privacy Policy",
          className: "btn-custom",
          children: "Privacy Policy",
        }),
        t ? f.jsx(E8, {}) : null,
        f.jsx(ht, {
          variant: "danger",
          onClick: s,
          style: o.button,
          "aria-label": "Disclaimer",
          className: "btn-custom",
          children: "Disclaimer",
        }),
        n ? f.jsx(S8, {}) : null,
      ],
    });
  },
  C8 = "/assets/BulletPointFitnessBannerNew-DYSHcbtp.png",
  Tg = () => {
    const [t, e] = b.useState(window.innerWidth),
      [n, r] = b.useState(!1);
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
        r(!0);
      }, []);
    const i = {
      section: { textAlign: "center" },
      image: {
        maxWidth: "100%",
        width: t <= 767 ? "100%" : "initial",
        height: t <= 767 ? "auto" : "initial",
      },
    };
    return f.jsx("section", {
      style: i.section,
      className: "header",
      children: f.jsx("div", {
        className: "container",
        children:
          n &&
          f.jsx("img", {
            src: C8,
            alt: "My Banner",
            style: i.image,
            "aria-label": "Banner for bulletpointfitness.com",
          }),
      }),
    });
  },
  k8 = "/assets/Level2FirstAid-hlc22e8P.jpg",
  T8 = "/assets/Level2Fitness-C4hhLhhV.jpg",
  O8 = "/assets/Level3PT-DQ6reGNu.jpg",
  A8 = "/assets/Level3PT1-DRuRZD41.jpg",
  Og = "/assets/Level3PTDiploma-C5zNP6NN.jpg",
  N8 = "/assets/Level3ExerciseReferral-CpJUFh70.jpg",
  P8 = "/assets/Level4ObesityAndDiabetes-DP2NbOtJ.jpg",
  L8 = "/api/aboutvideos",
  j8 = { get: () => fe.get(L8).then((e) => e.data) },
  R8 = () => {
    const [t, e] = b.useState([]);
    b.useEffect(() => {
      (async () => {
        const s = await j8.get();
        e(s);
      })();
    }, []);
    const n = [k8, T8, O8, A8, Og, Og, N8, P8],
      r = {
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
    return f.jsxs("section", {
      style: r.container,
      children: [
        f.jsx(lt, {
          title: "About Us | Bullet Point Fitness",
          description:
            "Learn more about Bullet Point Fitness, our mission, and how we strive to help individuals achieve their fitness goals efficiently.",
          keywords:
            "about us, mission, fitness goals, company information, Bullet Point Fitness",
          canonicalUrl: "https://bulletpointfitness.com/about",
          ogImage: "https://bulletpointfitness.com/og-image.png",
        }),
        f.jsxs(ot, {
          children: [
            f.jsx("div", {
              children: f.jsx("h1", { style: r.header, children: "About" }),
            }),
            t.map((i) => f.jsx(Pc, { video: i }, i.id)),
            f.jsx("div", {
              children: f.jsx("h1", {
                style: r.fitHeader,
                children: "Fitness Certifications",
              }),
            }),
            n.map((i, s) =>
              s % 2 === 0
                ? f.jsxs(
                    ks,
                    {
                      children: [
                        f.jsx(Lr, {
                          md: 6,
                          children: f.jsx("a", {
                            href: n[s],
                            children: f.jsx(re, {
                              className: "my-3",
                              style: r.card,
                              children: f.jsx(re.Img, {
                                variant: "top",
                                src: n[s],
                                loading: "lazy",
                                alt: `Fitness Certification ${s}`,
                              }),
                            }),
                          }),
                        }),
                        n[s + 1] &&
                          f.jsx(Lr, {
                            md: 6,
                            children: f.jsx("a", {
                              href: n[s + 1],
                              children: f.jsx(re, {
                                className: "my-3",
                                style: r.card,
                                children: f.jsx(re.Img, {
                                  variant: "top",
                                  src: n[s + 1],
                                  loading: "lazy",
                                  alt: `Fitness Certification ${s + 1}`,
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
      ],
    });
  };
var K_ = { exports: {} };
(function (t, e) {
  (function (n, r) {
    t.exports = r(b);
  })(Cw, (n) =>
    (() => {
      var r = {
          703: (a, l, c) => {
            var u = c(414);
            function d() {}
            function h() {}
            (h.resetWarningCache = d),
              (a.exports = function () {
                function p(v, y, x, _, w, E) {
                  if (E !== u) {
                    var S = new Error(
                      "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
                    );
                    throw ((S.name = "Invariant Violation"), S);
                  }
                }
                function m() {
                  return p;
                }
                p.isRequired = p;
                var g = {
                  array: p,
                  bigint: p,
                  bool: p,
                  func: p,
                  number: p,
                  object: p,
                  string: p,
                  symbol: p,
                  any: p,
                  arrayOf: m,
                  element: p,
                  elementType: p,
                  instanceOf: m,
                  node: p,
                  objectOf: m,
                  oneOf: m,
                  oneOfType: m,
                  shape: m,
                  exact: m,
                  checkPropTypes: h,
                  resetWarningCache: d,
                };
                return (g.PropTypes = g), g;
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
        i = {};
      function s(a) {
        var l = i[a];
        if (l !== void 0) return l.exports;
        var c = (i[a] = { exports: {} });
        return r[a](c, c.exports, s), c.exports;
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
                : function (N) {
                    for (var D = 1; D < arguments.length; D++) {
                      var H = arguments[D];
                      for (var B in H)
                        Object.prototype.hasOwnProperty.call(H, B) &&
                          (N[B] = H[B]);
                    }
                    return N;
                  }),
              d.apply(this, arguments)
            );
          }
          var h = function (N) {
            var D = N.pageClassName,
              H = N.pageLinkClassName,
              B = N.page,
              Y = N.selected,
              G = N.activeClassName,
              P = N.activeLinkClassName,
              A = N.getEventListener,
              T = N.pageSelectedHandler,
              F = N.href,
              M = N.extraAriaContext,
              z = N.pageLabelBuilder,
              W = N.rel,
              V = N.ariaLabel || "Page " + B + (M ? " " + M : ""),
              X = null;
            return (
              Y &&
                ((X = "page"),
                (V = N.ariaLabel || "Page " + B + " is your current page"),
                (D = D !== void 0 ? D + " " + G : G),
                H !== void 0 ? P !== void 0 && (H = H + " " + P) : (H = P)),
              l().createElement(
                "li",
                { className: D },
                l().createElement(
                  "a",
                  d(
                    {
                      rel: W,
                      role: F ? void 0 : "button",
                      className: H,
                      href: F,
                      tabIndex: Y ? "-1" : "0",
                      "aria-label": V,
                      "aria-current": X,
                      onKeyPress: T,
                    },
                    A(T),
                  ),
                  z(B),
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
          function m() {
            return (
              (m = Object.assign
                ? Object.assign.bind()
                : function (N) {
                    for (var D = 1; D < arguments.length; D++) {
                      var H = arguments[D];
                      for (var B in H)
                        Object.prototype.hasOwnProperty.call(H, B) &&
                          (N[B] = H[B]);
                    }
                    return N;
                  }),
              m.apply(this, arguments)
            );
          }
          var g = function (N) {
            var D = N.breakLabel,
              H = N.breakAriaLabel,
              B = N.breakClassName,
              Y = N.breakLinkClassName,
              G = N.breakHandler,
              P = N.getEventListener,
              A = B || "break";
            return l().createElement(
              "li",
              { className: A },
              l().createElement(
                "a",
                m(
                  {
                    className: Y,
                    role: "button",
                    tabIndex: "0",
                    "aria-label": H,
                    onKeyPress: G,
                  },
                  P(G),
                ),
                D,
              ),
            );
          };
          g.propTypes = {
            breakLabel: u().oneOfType([u().string, u().node]),
            breakAriaLabel: u().string,
            breakClassName: u().string,
            breakLinkClassName: u().string,
            breakHandler: u().func.isRequired,
            getEventListener: u().func.isRequired,
          };
          const v = g;
          function y(N) {
            var D =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : "";
            return N ?? D;
          }
          function x(N) {
            return (
              (x =
                typeof Symbol == "function" &&
                typeof Symbol.iterator == "symbol"
                  ? function (D) {
                      return typeof D;
                    }
                  : function (D) {
                      return D &&
                        typeof Symbol == "function" &&
                        D.constructor === Symbol &&
                        D !== Symbol.prototype
                        ? "symbol"
                        : typeof D;
                    }),
              x(N)
            );
          }
          function _() {
            return (
              (_ = Object.assign
                ? Object.assign.bind()
                : function (N) {
                    for (var D = 1; D < arguments.length; D++) {
                      var H = arguments[D];
                      for (var B in H)
                        Object.prototype.hasOwnProperty.call(H, B) &&
                          (N[B] = H[B]);
                    }
                    return N;
                  }),
              _.apply(this, arguments)
            );
          }
          function w(N, D) {
            for (var H = 0; H < D.length; H++) {
              var B = D[H];
              (B.enumerable = B.enumerable || !1),
                (B.configurable = !0),
                "value" in B && (B.writable = !0),
                Object.defineProperty(N, B.key, B);
            }
          }
          function E(N, D) {
            return (
              (E = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (H, B) {
                    return (H.__proto__ = B), H;
                  }),
              E(N, D)
            );
          }
          function S(N, D) {
            if (D && (x(D) === "object" || typeof D == "function")) return D;
            if (D !== void 0)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return C(N);
          }
          function C(N) {
            if (N === void 0)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return N;
          }
          function k(N) {
            return (
              (k = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (D) {
                    return D.__proto__ || Object.getPrototypeOf(D);
                  }),
              k(N)
            );
          }
          function L(N, D, H) {
            return (
              D in N
                ? Object.defineProperty(N, D, {
                    value: H,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (N[D] = H),
              N
            );
          }
          var j = (function (N) {
            (function (A, T) {
              if (typeof T != "function" && T !== null)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (A.prototype = Object.create(T && T.prototype, {
                constructor: { value: A, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(A, "prototype", { writable: !1 }),
                T && E(A, T);
            })(P, N);
            var D,
              H,
              B,
              Y,
              G =
                ((B = P),
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
                  var A,
                    T = k(B);
                  if (Y) {
                    var F = k(this).constructor;
                    A = Reflect.construct(T, arguments, F);
                  } else A = T.apply(this, arguments);
                  return S(this, A);
                });
            function P(A) {
              var T, F;
              return (
                (function (M, z) {
                  if (!(M instanceof z))
                    throw new TypeError("Cannot call a class as a function");
                })(this, P),
                L(C((T = G.call(this, A))), "handlePreviousPage", function (M) {
                  var z = T.state.selected;
                  T.handleClick(M, null, z > 0 ? z - 1 : void 0, {
                    isPrevious: !0,
                  });
                }),
                L(C(T), "handleNextPage", function (M) {
                  var z = T.state.selected,
                    W = T.props.pageCount;
                  T.handleClick(M, null, z < W - 1 ? z + 1 : void 0, {
                    isNext: !0,
                  });
                }),
                L(C(T), "handlePageSelected", function (M, z) {
                  if (T.state.selected === M)
                    return (
                      T.callActiveCallback(M),
                      void T.handleClick(z, null, void 0, { isActive: !0 })
                    );
                  T.handleClick(z, null, M);
                }),
                L(C(T), "handlePageChange", function (M) {
                  T.state.selected !== M &&
                    (T.setState({ selected: M }), T.callCallback(M));
                }),
                L(C(T), "getEventListener", function (M) {
                  return L({}, T.props.eventListener, M);
                }),
                L(C(T), "handleClick", function (M, z, W) {
                  var V =
                      arguments.length > 3 && arguments[3] !== void 0
                        ? arguments[3]
                        : {},
                    X = V.isPrevious,
                    ge = X !== void 0 && X,
                    Be = V.isNext,
                    Qe = Be !== void 0 && Be,
                    Je = V.isBreak,
                    ke = Je !== void 0 && Je,
                    ct = V.isActive,
                    Ye = ct !== void 0 && ct;
                  M.preventDefault ? M.preventDefault() : (M.returnValue = !1);
                  var $e = T.state.selected,
                    Q = T.props.onClick,
                    Le = W;
                  if (Q) {
                    var Te = Q({
                      index: z,
                      selected: $e,
                      nextSelectedPage: W,
                      event: M,
                      isPrevious: ge,
                      isNext: Qe,
                      isBreak: ke,
                      isActive: Ye,
                    });
                    if (Te === !1) return;
                    Number.isInteger(Te) && (Le = Te);
                  }
                  Le !== void 0 && T.handlePageChange(Le);
                }),
                L(C(T), "handleBreakClick", function (M, z) {
                  var W = T.state.selected;
                  T.handleClick(
                    z,
                    M,
                    W < M ? T.getForwardJump() : T.getBackwardJump(),
                    { isBreak: !0 },
                  );
                }),
                L(C(T), "callCallback", function (M) {
                  T.props.onPageChange !== void 0 &&
                    typeof T.props.onPageChange == "function" &&
                    T.props.onPageChange({ selected: M });
                }),
                L(C(T), "callActiveCallback", function (M) {
                  T.props.onPageActive !== void 0 &&
                    typeof T.props.onPageActive == "function" &&
                    T.props.onPageActive({ selected: M });
                }),
                L(C(T), "getElementPageRel", function (M) {
                  var z = T.state.selected,
                    W = T.props,
                    V = W.nextPageRel,
                    X = W.prevPageRel,
                    ge = W.selectedPageRel;
                  return z - 1 === M
                    ? X
                    : z === M
                    ? ge
                    : z + 1 === M
                    ? V
                    : void 0;
                }),
                L(C(T), "pagination", function () {
                  var M = [],
                    z = T.props,
                    W = z.pageRangeDisplayed,
                    V = z.pageCount,
                    X = z.marginPagesDisplayed,
                    ge = z.breakLabel,
                    Be = z.breakClassName,
                    Qe = z.breakLinkClassName,
                    Je = z.breakAriaLabels,
                    ke = T.state.selected;
                  if (V <= W)
                    for (var ct = 0; ct < V; ct++) M.push(T.getPageElement(ct));
                  else {
                    var Ye = W / 2,
                      $e = W - Ye;
                    ke > V - W / 2
                      ? (Ye = W - ($e = V - ke))
                      : ke < W / 2 && ($e = W - (Ye = ke));
                    var Q,
                      Le,
                      Te = function (ut) {
                        return T.getPageElement(ut);
                      },
                      we = [];
                    for (Q = 0; Q < V; Q++) {
                      var nr = Q + 1;
                      if (nr <= X)
                        we.push({ type: "page", index: Q, display: Te(Q) });
                      else if (nr > V - X)
                        we.push({ type: "page", index: Q, display: Te(Q) });
                      else if (
                        Q >= ke - Ye &&
                        Q <= ke + (ke === 0 && W > 1 ? $e - 1 : $e)
                      )
                        we.push({ type: "page", index: Q, display: Te(Q) });
                      else if (
                        ge &&
                        we.length > 0 &&
                        we[we.length - 1].display !== Le &&
                        (W > 0 || X > 0)
                      ) {
                        var At = Q < ke ? Je.backward : Je.forward;
                        (Le = l().createElement(v, {
                          key: Q,
                          breakAriaLabel: At,
                          breakLabel: ge,
                          breakClassName: Be,
                          breakLinkClassName: Qe,
                          breakHandler: T.handleBreakClick.bind(null, Q),
                          getEventListener: T.getEventListener,
                        })),
                          we.push({ type: "break", index: Q, display: Le });
                      }
                    }
                    we.forEach(function (ut, Nt) {
                      var vn = ut;
                      ut.type === "break" &&
                        we[Nt - 1] &&
                        we[Nt - 1].type === "page" &&
                        we[Nt + 1] &&
                        we[Nt + 1].type === "page" &&
                        we[Nt + 1].index - we[Nt - 1].index <= 2 &&
                        (vn = {
                          type: "page",
                          index: ut.index,
                          display: Te(ut.index),
                        }),
                        M.push(vn.display);
                    });
                  }
                  return M;
                }),
                A.initialPage !== void 0 &&
                  A.forcePage !== void 0 &&
                  console.warn(
                    "(react-paginate): Both initialPage ("
                      .concat(A.initialPage, ") and forcePage (")
                      .concat(
                        A.forcePage,
                        ") props are provided, which is discouraged.",
                      ) +
                      ` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`,
                  ),
                (F = A.initialPage
                  ? A.initialPage
                  : A.forcePage
                  ? A.forcePage
                  : 0),
                (T.state = { selected: F }),
                T
              );
            }
            return (
              (D = P),
              (H = [
                {
                  key: "componentDidMount",
                  value: function () {
                    var A = this.props,
                      T = A.initialPage,
                      F = A.disableInitialCallback,
                      M = A.extraAriaContext,
                      z = A.pageCount,
                      W = A.forcePage;
                    T === void 0 || F || this.callCallback(T),
                      M &&
                        console.warn(
                          "DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.",
                        ),
                      Number.isInteger(z) ||
                        console.warn(
                          "(react-paginate): The pageCount prop value provided is not an integer (".concat(
                            z,
                            "). Did you forget a Math.ceil()?",
                          ),
                        ),
                      T !== void 0 &&
                        T > z - 1 &&
                        console.warn(
                          "(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop ("
                            .concat(T, " > ")
                            .concat(z - 1, ")."),
                        ),
                      W !== void 0 &&
                        W > z - 1 &&
                        console.warn(
                          "(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop ("
                            .concat(W, " > ")
                            .concat(z - 1, ")."),
                        );
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (A) {
                    this.props.forcePage !== void 0 &&
                      this.props.forcePage !== A.forcePage &&
                      (this.props.forcePage > this.props.pageCount - 1 &&
                        console.warn(
                          "(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop ("
                            .concat(this.props.forcePage, " > ")
                            .concat(this.props.pageCount - 1, ")."),
                        ),
                      this.setState({ selected: this.props.forcePage })),
                      Number.isInteger(A.pageCount) &&
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
                    var A = this.state.selected,
                      T = this.props,
                      F = T.pageCount,
                      M = A + T.pageRangeDisplayed;
                    return M >= F ? F - 1 : M;
                  },
                },
                {
                  key: "getBackwardJump",
                  value: function () {
                    var A = this.state.selected - this.props.pageRangeDisplayed;
                    return A < 0 ? 0 : A;
                  },
                },
                {
                  key: "getElementHref",
                  value: function (A) {
                    var T = this.props,
                      F = T.hrefBuilder,
                      M = T.pageCount,
                      z = T.hrefAllControls;
                    if (F)
                      return z || (A >= 0 && A < M)
                        ? F(A + 1, M, this.state.selected)
                        : void 0;
                  },
                },
                {
                  key: "ariaLabelBuilder",
                  value: function (A) {
                    var T = A === this.state.selected;
                    if (
                      this.props.ariaLabelBuilder &&
                      A >= 0 &&
                      A < this.props.pageCount
                    ) {
                      var F = this.props.ariaLabelBuilder(A + 1, T);
                      return (
                        this.props.extraAriaContext &&
                          !T &&
                          (F = F + " " + this.props.extraAriaContext),
                        F
                      );
                    }
                  },
                },
                {
                  key: "getPageElement",
                  value: function (A) {
                    var T = this.state.selected,
                      F = this.props,
                      M = F.pageClassName,
                      z = F.pageLinkClassName,
                      W = F.activeClassName,
                      V = F.activeLinkClassName,
                      X = F.extraAriaContext,
                      ge = F.pageLabelBuilder;
                    return l().createElement(p, {
                      key: A,
                      pageSelectedHandler: this.handlePageSelected.bind(
                        null,
                        A,
                      ),
                      selected: T === A,
                      rel: this.getElementPageRel(A),
                      pageClassName: M,
                      pageLinkClassName: z,
                      activeClassName: W,
                      activeLinkClassName: V,
                      extraAriaContext: X,
                      href: this.getElementHref(A),
                      ariaLabel: this.ariaLabelBuilder(A),
                      page: A + 1,
                      pageLabelBuilder: ge,
                      getEventListener: this.getEventListener,
                    });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var A = this.props.renderOnZeroPageCount;
                    if (this.props.pageCount === 0 && A !== void 0)
                      return A && A(this.props);
                    var T = this.props,
                      F = T.disabledClassName,
                      M = T.disabledLinkClassName,
                      z = T.pageCount,
                      W = T.className,
                      V = T.containerClassName,
                      X = T.previousLabel,
                      ge = T.previousClassName,
                      Be = T.previousLinkClassName,
                      Qe = T.previousAriaLabel,
                      Je = T.prevRel,
                      ke = T.nextLabel,
                      ct = T.nextClassName,
                      Ye = T.nextLinkClassName,
                      $e = T.nextAriaLabel,
                      Q = T.nextRel,
                      Le = this.state.selected,
                      Te = Le === 0,
                      we = Le === z - 1,
                      nr = "".concat(y(ge)).concat(Te ? " ".concat(y(F)) : ""),
                      At = "".concat(y(ct)).concat(we ? " ".concat(y(F)) : ""),
                      ut = "".concat(y(Be)).concat(Te ? " ".concat(y(M)) : ""),
                      Nt = "".concat(y(Ye)).concat(we ? " ".concat(y(M)) : ""),
                      vn = Te ? "true" : "false",
                      Wr = we ? "true" : "false";
                    return l().createElement(
                      "ul",
                      {
                        className: W || V,
                        role: "navigation",
                        "aria-label": "Pagination",
                      },
                      l().createElement(
                        "li",
                        { className: nr },
                        l().createElement(
                          "a",
                          _(
                            {
                              className: ut,
                              href: this.getElementHref(Le - 1),
                              tabIndex: Te ? "-1" : "0",
                              role: "button",
                              onKeyPress: this.handlePreviousPage,
                              "aria-disabled": vn,
                              "aria-label": Qe,
                              rel: Je,
                            },
                            this.getEventListener(this.handlePreviousPage),
                          ),
                          X,
                        ),
                      ),
                      this.pagination(),
                      l().createElement(
                        "li",
                        { className: At },
                        l().createElement(
                          "a",
                          _(
                            {
                              className: Nt,
                              href: this.getElementHref(Le + 1),
                              tabIndex: we ? "-1" : "0",
                              role: "button",
                              onKeyPress: this.handleNextPage,
                              "aria-disabled": Wr,
                              "aria-label": $e,
                              rel: Q,
                            },
                            this.getEventListener(this.handleNextPage),
                          ),
                          ke,
                        ),
                      ),
                    );
                  },
                },
              ]) && w(D.prototype, H),
              Object.defineProperty(D, "prototype", { writable: !1 }),
              P
            );
          })(a.Component);
          L(j, "propTypes", {
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
            L(j, "defaultProps", {
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
              pageLabelBuilder: function (N) {
                return N;
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
})(K_);
var D8 = K_.exports;
const M8 = Jn(D8),
  I8 = "/api/trainingvideos",
  F8 = { get: () => fe.get(I8).then((e) => e.data) },
  B8 = () => {
    const [t, e] = b.useState([]),
      [n, r] = b.useState(0),
      [i, s] = b.useState("date"),
      [o, a] = b.useState(""),
      l = 6;
    b.useEffect(() => {
      (async () => {
        const m = await F8.get();
        e(m);
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
        const m = p.match(/(\d+)\s*min/),
          g = p.match(/(\d+)\s*seconds/),
          v = m ? parseInt(m[1], 10) : 0,
          y = g ? parseInt(g[1], 10) : 0;
        return v * 60 + y;
      },
      h = (p) => {
        switch (i) {
          case "title":
            return p.sort((m, g) => m.title.localeCompare(g.title));
          case "duration":
            return p.sort((m, g) => d(g.duration) - d(m.duration));
          case "date":
          default:
            return p.sort((m, g) => g.dateAdded.localeCompare(m.dateAdded));
        }
      };
    return f.jsxs("section", {
      className: "album py-5",
      style: u.trainingVideos,
      children: [
        f.jsx(lt, {
          title: "Training Videos | Bullet Point Fitness",
          description:
            "Access a variety of training videos to enhance your workouts. Learn effective techniques and exercises from Bullet Point Fitness.",
          keywords:
            "training videos, workout tutorials, exercise guides, fitness videos, workout videos",
          canonicalUrl: "https://bulletpointfitness.com/training",
          ogImage: "https://bulletpointfitness.com/og-image.png",
        }),
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
              value: i,
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
        f.jsx(ot, {
          children: f.jsx(ks, {
            children: h([...c])
              .slice(n * l, (n + 1) * l)
              .map((p) =>
                f.jsx(Lr, { md: 4, children: f.jsx(Pc, { video: p }) }, p.id),
              ),
          }),
        }),
        f.jsx(M8, {
          pageCount: Math.ceil(t.length / l),
          onPageChange: ({ selected: p }) => r(p),
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
  Ag = ({ notification: t }) => {
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
    return f.jsx(BC, {
      variant: e,
      style: n.notification,
      "aria-label": t.type,
      children: t.message,
    });
  },
  $8 = ({ onLogin: t }) => {
    const [e, n] = b.useState(""),
      [r, i] = b.useState(""),
      s = (a) => {
        a.preventDefault(), t(e, r);
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
    return f.jsxs("section", {
      className: "login form",
      children: [
        f.jsx(lt, {
          title: "Login | Bullet Point Fitness",
          description:
            "Access your Bullet Point Fitness account to track workouts, view progress, and manage your personalized fitness plan.",
          keywords:
            "login, user account, fitness tracking, personalized plan, Bullet Point Fitness login",
          canonicalUrl: "https://bulletpointfitness.com/login",
          ogImage: "https://bulletpointfitness.com/og-image.png",
        }),
        f.jsxs(ot, {
          children: [
            f.jsx("div", {
              children: f.jsx("h1", {
                style: o.header,
                children: "Login Form",
              }),
            }),
            f.jsx(re, {
              className: "my-3",
              style: o.card,
              border: "danger",
              children: f.jsx(re.Body, {
                children: f.jsxs(te, {
                  onSubmit: s,
                  style: o.form,
                  children: [
                    f.jsxs(te.Group, {
                      className: "mb-3",
                      children: [
                        f.jsx(te.Label, {
                          htmlFor: "username",
                          style: o.label,
                          children: "Username",
                        }),
                        f.jsx(te.Control, {
                          value: e,
                          onChange: ({ target: a }) => n(a.value),
                          id: "username",
                          placeholder: "Enter your username",
                          "aria-label": "Username",
                        }),
                      ],
                    }),
                    f.jsxs(te.Group, {
                      className: "mb-3",
                      children: [
                        f.jsx(te.Label, {
                          htmlFor: "password",
                          style: o.label,
                          children: "Password",
                        }),
                        f.jsx(te.Control, {
                          type: "password",
                          value: r,
                          onChange: ({ target: a }) => i(a.value),
                          id: "password",
                          placeholder: "Enter your password",
                          "aria-label": "Password",
                        }),
                      ],
                    }),
                    f.jsx(ht, {
                      "aria-label": "Sign In",
                      type: "submit",
                      variant: "danger",
                      style: o.button,
                      className: "btn-custom",
                      disabled: !e || !r,
                      children: "Sign In",
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
      ],
    });
  };
var q_ = "https://js.stripe.com/v3",
  z8 = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
  Ng =
    "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
  H8 = function () {
    for (
      var e = document.querySelectorAll('script[src^="'.concat(q_, '"]')),
        n = 0;
      n < e.length;
      n++
    ) {
      var r = e[n];
      if (z8.test(r.src)) return r;
    }
    return null;
  },
  Pg = function (e) {
    var n = "",
      r = document.createElement("script");
    r.src = "".concat(q_).concat(n);
    var i = document.head || document.body;
    if (!i)
      throw new Error(
        "Expected document.body not to be null. Stripe.js requires a <body> element.",
      );
    return i.appendChild(r), r;
  },
  W8 = function (e, n) {
    !e ||
      !e._registerWrapper ||
      e._registerWrapper({ name: "stripe-js", version: "4.6.0", startTime: n });
  },
  ro = null,
  rl = null,
  il = null,
  U8 = function (e) {
    return function () {
      e(new Error("Failed to load Stripe.js"));
    };
  },
  V8 = function (e, n) {
    return function () {
      window.Stripe
        ? e(window.Stripe)
        : n(new Error("Stripe.js not available"));
    };
  },
  Y8 = function (e) {
    return ro !== null
      ? ro
      : ((ro = new Promise(function (n, r) {
          if (typeof window > "u" || typeof document > "u") {
            n(null);
            return;
          }
          if ((window.Stripe && e && console.warn(Ng), window.Stripe)) {
            n(window.Stripe);
            return;
          }
          try {
            var i = H8();
            if (i && e) console.warn(Ng);
            else if (!i) i = Pg(e);
            else if (i && il !== null && rl !== null) {
              var s;
              i.removeEventListener("load", il),
                i.removeEventListener("error", rl),
                (s = i.parentNode) === null || s === void 0 || s.removeChild(i),
                (i = Pg(e));
            }
            (il = V8(n, r)),
              (rl = U8(r)),
              i.addEventListener("load", il),
              i.addEventListener("error", rl);
          } catch (o) {
            r(o);
            return;
          }
        })),
        ro.catch(function (n) {
          return (ro = null), Promise.reject(n);
        }));
  },
  G8 = function (e, n, r) {
    if (e === null) return null;
    var i = e.apply(void 0, n);
    return W8(i, r), i;
  },
  io,
  X_ = !1,
  Q_ = function () {
    return (
      io ||
      ((io = Y8(null).catch(function (e) {
        return (io = null), Promise.reject(e);
      })),
      io)
    );
  };
Promise.resolve()
  .then(function () {
    return Q_();
  })
  .catch(function (t) {
    X_ || console.warn(t);
  });
var K8 = function () {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  X_ = !0;
  var i = Date.now();
  return Q_().then(function (s) {
    return G8(s, n, i);
  });
};
function Lg(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function jg(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Lg(Object(n), !0).forEach(function (r) {
          J_(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
      : Lg(Object(n)).forEach(function (r) {
          Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return t;
}
function Hl(t) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Hl = function (e) {
          return typeof e;
        })
      : (Hl = function (e) {
          return e &&
            typeof Symbol == "function" &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        }),
    Hl(t)
  );
}
function J_(t, e, n) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  );
}
function q8(t, e) {
  return X8(t) || Q8(t, e) || J8(t, e) || Z8();
}
function X8(t) {
  if (Array.isArray(t)) return t;
}
function Q8(t, e) {
  var n = t && ((typeof Symbol < "u" && t[Symbol.iterator]) || t["@@iterator"]);
  if (n != null) {
    var r = [],
      i = !0,
      s = !1,
      o,
      a;
    try {
      for (
        n = n.call(t);
        !(i = (o = n.next()).done) && (r.push(o.value), !(e && r.length === e));
        i = !0
      );
    } catch (l) {
      (s = !0), (a = l);
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (s) throw a;
      }
    }
    return r;
  }
}
function J8(t, e) {
  if (t) {
    if (typeof t == "string") return Rg(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (
      (n === "Object" && t.constructor && (n = t.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Rg(t, e);
  }
}
function Rg(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function Z8() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Pt = function (e, n, r) {
    var i = !!r,
      s = J.useRef(r);
    J.useEffect(
      function () {
        s.current = r;
      },
      [r],
    ),
      J.useEffect(
        function () {
          if (!i || !e) return function () {};
          var o = function () {
            s.current && s.current.apply(s, arguments);
          };
          return (
            e.on(n, o),
            function () {
              e.off(n, o);
            }
          );
        },
        [i, n, e, s],
      );
  },
  eO = function (e) {
    var n = J.useRef(e);
    return (
      J.useEffect(
        function () {
          n.current = e;
        },
        [e],
      ),
      n.current
    );
  },
  Lc = function (e) {
    return e !== null && Hl(e) === "object";
  },
  Dg = "[object Object]",
  tO = function t(e, n) {
    if (!Lc(e) || !Lc(n)) return e === n;
    var r = Array.isArray(e),
      i = Array.isArray(n);
    if (r !== i) return !1;
    var s = Object.prototype.toString.call(e) === Dg,
      o = Object.prototype.toString.call(n) === Dg;
    if (s !== o) return !1;
    if (!s && !r) return e === n;
    var a = Object.keys(e),
      l = Object.keys(n);
    if (a.length !== l.length) return !1;
    for (var c = {}, u = 0; u < a.length; u += 1) c[a[u]] = !0;
    for (var d = 0; d < l.length; d += 1) c[l[d]] = !0;
    var h = Object.keys(c);
    if (h.length !== a.length) return !1;
    var p = e,
      m = n,
      g = function (y) {
        return t(p[y], m[y]);
      };
    return h.every(g);
  },
  nO = function (e, n, r) {
    return Lc(e)
      ? Object.keys(e).reduce(function (i, s) {
          var o = !Lc(n) || !tO(e[s], n[s]);
          return r.includes(s)
            ? (o &&
                console.warn(
                  "Unsupported prop change: options.".concat(
                    s,
                    " is not a mutable property.",
                  ),
                ),
              i)
            : o
            ? jg(jg({}, i || {}), {}, J_({}, s, e[s]))
            : i;
        }, null)
      : null;
  },
  Z_ = J.createContext(null);
Z_.displayName = "ElementsContext";
var rO = function (e, n) {
  if (!e)
    throw new Error(
      "Could not find Elements context; You need to wrap the part of your app that ".concat(
        n,
        " in an <Elements> provider.",
      ),
    );
  return e;
};
K.any, K.object;
K.func.isRequired;
var eb = J.createContext(null);
eb.displayName = "CustomCheckoutSdkContext";
var iO = function (e, n) {
    if (!e)
      throw new Error(
        "Could not find CustomCheckoutProvider context; You need to wrap the part of your app that ".concat(
          n,
          " in an <CustomCheckoutProvider> provider.",
        ),
      );
    return e;
  },
  sO = J.createContext(null);
sO.displayName = "CustomCheckoutContext";
K.any,
  K.shape({ clientSecret: K.string.isRequired, elementsOptions: K.object })
    .isRequired;
var Mg = function (e) {
    var n = J.useContext(eb),
      r = J.useContext(Z_);
    if (n && r)
      throw new Error(
        "You cannot wrap the part of your app that ".concat(
          e,
          " in both <CustomCheckoutProvider> and <Elements> providers.",
        ),
      );
    return n ? iO(n, e) : rO(r, e);
  },
  oO = function (e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  },
  Ie = function (e, n) {
    var r = "".concat(oO(e), "Element"),
      i = function (l) {
        var c = l.id,
          u = l.className,
          d = l.options,
          h = d === void 0 ? {} : d,
          p = l.onBlur,
          m = l.onFocus,
          g = l.onReady,
          v = l.onChange,
          y = l.onEscape,
          x = l.onClick,
          _ = l.onLoadError,
          w = l.onLoaderStart,
          E = l.onNetworksChange,
          S = l.onConfirm,
          C = l.onCancel,
          k = l.onShippingAddressChange,
          L = l.onShippingRateChange,
          j = Mg("mounts <".concat(r, ">")),
          $ = "elements" in j ? j.elements : null,
          N = "customCheckoutSdk" in j ? j.customCheckoutSdk : null,
          D = J.useState(null),
          H = q8(D, 2),
          B = H[0],
          Y = H[1],
          G = J.useRef(null),
          P = J.useRef(null);
        Pt(B, "blur", p),
          Pt(B, "focus", m),
          Pt(B, "escape", y),
          Pt(B, "click", x),
          Pt(B, "loaderror", _),
          Pt(B, "loaderstart", w),
          Pt(B, "networkschange", E),
          Pt(B, "confirm", S),
          Pt(B, "cancel", C),
          Pt(B, "shippingaddresschange", k),
          Pt(B, "shippingratechange", L),
          Pt(B, "change", v);
        var A;
        g &&
          (e === "expressCheckout"
            ? (A = g)
            : (A = function () {
                g(B);
              })),
          Pt(B, "ready", A),
          J.useLayoutEffect(
            function () {
              if (G.current === null && P.current !== null && ($ || N)) {
                var F = null;
                N ? (F = N.createElement(e, h)) : $ && (F = $.create(e, h)),
                  (G.current = F),
                  Y(F),
                  F && F.mount(P.current);
              }
            },
            [$, N, h],
          );
        var T = eO(h);
        return (
          J.useEffect(
            function () {
              if (G.current) {
                var F = nO(h, T, ["paymentRequest"]);
                F && G.current.update(F);
              }
            },
            [h, T],
          ),
          J.useLayoutEffect(function () {
            return function () {
              if (G.current && typeof G.current.destroy == "function")
                try {
                  G.current.destroy(), (G.current = null);
                } catch {}
            };
          }, []),
          J.createElement("div", { id: c, className: u, ref: P })
        );
      },
      s = function (l) {
        Mg("mounts <".concat(r, ">"));
        var c = l.id,
          u = l.className;
        return J.createElement("div", { id: c, className: u });
      },
      o = n ? s : i;
    return (
      (o.propTypes = {
        id: K.string,
        className: K.string,
        onChange: K.func,
        onBlur: K.func,
        onFocus: K.func,
        onReady: K.func,
        onEscape: K.func,
        onClick: K.func,
        onLoadError: K.func,
        onLoaderStart: K.func,
        onNetworksChange: K.func,
        onConfirm: K.func,
        onCancel: K.func,
        onShippingAddressChange: K.func,
        onShippingRateChange: K.func,
        options: K.object,
      }),
      (o.displayName = r),
      (o.__elementType = e),
      o
    );
  },
  Fe = typeof window > "u",
  aO = J.createContext(null);
aO.displayName = "EmbeddedCheckoutProviderContext";
Ie("auBankAccount", Fe);
Ie("card", Fe);
Ie("cardNumber", Fe);
Ie("cardExpiry", Fe);
Ie("cardCvc", Fe);
Ie("fpxBank", Fe);
Ie("iban", Fe);
Ie("idealBank", Fe);
Ie("p24Bank", Fe);
Ie("epsBank", Fe);
Ie("payment", Fe);
Ie("expressCheckout", Fe);
Ie("paymentRequestButton", Fe);
Ie("linkAuthentication", Fe);
Ie("address", Fe);
Ie("shippingAddress", Fe);
Ie("paymentMethodMessaging", Fe);
Ie("affirmMessage", Fe);
Ie("afterpayClearpayMessage", Fe);
K8(
  "pk_test_51Q3DOuFML2sMAV10HqYkCXL4UO6JGQG2laQf0fx0kTjRXpfJ93DiC9ihs7ukHnqqBJhvgeP3I0lrtnGOaKd9Us1V0089w2dEJI",
);
class vo extends Error {}
vo.prototype.name = "InvalidTokenError";
function lO(t) {
  return decodeURIComponent(
    atob(t).replace(/(.)/g, (e, n) => {
      let r = n.charCodeAt(0).toString(16).toUpperCase();
      return r.length < 2 && (r = "0" + r), "%" + r;
    }),
  );
}
function cO(t) {
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
    return lO(e);
  } catch {
    return atob(e);
  }
}
function uO(t, e) {
  if (typeof t != "string")
    throw new vo("Invalid token specified: must be a string");
  e || (e = {});
  const n = e.header === !0 ? 0 : 1,
    r = t.split(".")[n];
  if (typeof r != "string")
    throw new vo(`Invalid token specified: missing part #${n + 1}`);
  let i;
  try {
    i = cO(r);
  } catch (s) {
    throw new vo(
      `Invalid token specified: invalid base64 for part #${n + 1} (${
        s.message
      })`,
    );
  }
  try {
    return JSON.parse(i);
  } catch (s) {
    throw new vo(
      `Invalid token specified: invalid json for part #${n + 1} (${s.message})`,
    );
  }
}
let us = null;
const tb = "loggedUser",
  dO = (t) => {
    window.localStorage.setItem(tb, JSON.stringify(t)), (us = t.token);
  },
  fO = () => {
    const t = window.localStorage.getItem(tb);
    if (t) {
      const e = JSON.parse(t);
      return (us = e.token), e;
    }
    return null;
  },
  nb = () => {
    window.localStorage.clear(), (us = null);
  },
  hO = (t) => {
    const e = uO(t),
      n = Date.now() / 1e3;
    return e.exp < n;
  },
  pO = () => (us && !hO(us) ? us : (nb(), null)),
  Ro = { setUser: dO, getUser: fO, clearUser: nb, getToken: pO },
  mO = "/api/clientinfo",
  gO = () => ({ headers: { Authorization: `bearer ${Ro.getToken()}` } }),
  yO = { create: async (t) => (await fe.post(mO, t, gO())).data },
  vO = ({ notify: t }) => {
    const [e, n] = b.useState(null),
      [r, i] = b.useState(""),
      [s, o] = b.useState(""),
      [a, l] = b.useState(""),
      [c, u] = b.useState(""),
      [d, h] = b.useState(!1),
      p = gp(),
      m = async (y) => {
        h(!0);
        try {
          await yO.create(y),
            t("You have successfully submitted your information."),
            h(!1),
            p("/instructions");
        } catch (x) {
          t("Creating a message failed: " + x.response.data.error, "alert"),
            h(!1);
        }
      },
      g = (y) => {
        y.preventDefault();
        const x = { fitnessLevel: r, goals: s, injuriesOrConditions: a };
        e && (x.programExperience = c), m(x);
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
    return f.jsxs("section", {
      className: "client-info-form",
      children: [
        f.jsx(An, {
          children: f.jsx("meta", {
            name: "robots",
            content: "noindex, nofollow",
          }),
        }),
        f.jsx(lt, {
          title: "Program Form | Bullet Point Fitness",
          description:
            "Complete the Bullet Point Fitness program form to receive your personalized training plan. Select your fitness goals and track your progress.",
          keywords:
            "program form, personalized workout, fitness goals, workout tracking, Bullet Point Fitness",
          canonicalUrl: "https://bulletpointfitness.com/program-form",
          ogImage: "https://bulletpointfitness.com/og-image.png",
        }),
        f.jsxs(ot, {
          children: [
            f.jsx("div", {
              children: f.jsx("h1", {
                style: v.header,
                children: "Program Form",
              }),
            }),
            e === null &&
              f.jsx(re, {
                className: "my-3",
                style: v.card,
                border: "danger",
                children: f.jsx(re.Body, {
                  children: f.jsx(te, {
                    style: v.form,
                    children: f.jsxs(te.Group, {
                      className: "mb-3",
                      children: [
                        f.jsx(te.Label, {
                          style: v.label,
                          children:
                            "Are you a first-time user or returning user?",
                        }),
                        f.jsxs("div", {
                          children: [
                            f.jsx(ht, {
                              variant: "primary",
                              style: v.button,
                              onClick: () => n(!0),
                              "aria-label": "First-time User",
                              className: "btn-custom",
                              children: "First-time User",
                            }),
                            f.jsx(ht, {
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
              f.jsx(re, {
                className: "my-3",
                style: v.card,
                border: "danger",
                children: f.jsx(re.Body, {
                  children: f.jsxs(te, {
                    onSubmit: g,
                    style: v.form,
                    children: [
                      f.jsxs(te.Group, {
                        className: "mb-3",
                        children: [
                          f.jsx(te.Label, {
                            htmlFor: "fitnessLevel",
                            style: v.label,
                            children:
                              "Which stage of your Bullet Point Fitness journey are you currently in?",
                          }),
                          f.jsxs(te.Control, {
                            as: "select",
                            value: r,
                            onChange: (y) => i(y.target.value),
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
                      f.jsxs(te.Group, {
                        className: "mb-3",
                        children: [
                          f.jsx(te.Label, {
                            htmlFor: "goals",
                            style: v.label,
                            children: "What is your primary fitness goal?",
                          }),
                          f.jsxs(te.Control, {
                            as: "select",
                            value: s,
                            onChange: (y) => o(y.target.value),
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
                      f.jsxs(te.Group, {
                        className: "mb-3",
                        children: [
                          f.jsx(te.Label, {
                            htmlFor: "injuriesOrConditions",
                            style: v.label,
                            children:
                              "Do you have any injuries or health conditions?",
                          }),
                          f.jsx(te.Control, {
                            as: "textarea",
                            rows: 3,
                            value: a,
                            onChange: (y) => l(y.target.value),
                            placeholder: "Write here...",
                          }),
                        ],
                      }),
                      f.jsxs(te.Group, {
                        className: "mb-3",
                        children: [
                          f.jsx(te.Label, {
                            htmlFor: "programExperience",
                            style: v.label,
                            children:
                              "Have you ever followed a structured workout program before?",
                          }),
                          f.jsxs(te.Control, {
                            as: "select",
                            value: c,
                            onChange: (y) => u(y.target.value),
                            children: [
                              f.jsx("option", {
                                value: "",
                                children: "Select",
                              }),
                              f.jsx("option", {
                                value: "yes",
                                children: "Yes",
                              }),
                              f.jsx("option", { value: "no", children: "No" }),
                            ],
                          }),
                        ],
                      }),
                      f.jsx(ht, {
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
              f.jsx(re, {
                className: "my-3",
                style: v.card,
                border: "danger",
                children: f.jsx(re.Body, {
                  children: f.jsxs(te, {
                    onSubmit: g,
                    style: v.form,
                    children: [
                      f.jsxs(te.Group, {
                        className: "mb-3",
                        children: [
                          f.jsx(te.Label, {
                            htmlFor: "progress",
                            style: v.label,
                            children:
                              "How would you rate your progress since your last program?",
                          }),
                          f.jsx(te.Control, {
                            as: "textarea",
                            rows: 3,
                            value: a,
                            onChange: (y) => l(y.target.value),
                            placeholder: "Share your experience so far",
                          }),
                        ],
                      }),
                      f.jsxs(te.Group, {
                        className: "mb-3",
                        children: [
                          f.jsx(te.Label, {
                            htmlFor: "fitnessLevel",
                            style: v.label,
                            children:
                              "Ready to upgrade to the next stage of your Bullet Point Fitness journey?",
                          }),
                          f.jsxs(te.Control, {
                            as: "select",
                            value: r,
                            onChange: (y) => i(y.target.value),
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
                      f.jsxs(te.Group, {
                        className: "mb-3",
                        children: [
                          f.jsx(te.Label, {
                            htmlFor: "newGoals",
                            style: v.label,
                            children: "Have your fitness goals changed?",
                          }),
                          f.jsxs(te.Control, {
                            as: "select",
                            value: s,
                            onChange: (y) => o(y.target.value),
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
                      f.jsx(ht, {
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
      ],
    });
  },
  pd = "/api/workouts",
  md = () => ({ headers: { Authorization: `bearer ${Ro.getToken()}` } }),
  ua = {
    get: async (t) => {
      const e = `${pd}/user/${t}`;
      return (await fe.get(e, md())).data;
    },
    updateExercise: async (t, e, n) => {
      const r = `${pd}/workout/${t}/exercise/${e}`;
      return (await fe.put(r, n, md())).data;
    },
    getInactive: async (t) => {
      const e = `${pd}/inactive/${t}`;
      return (await fe.get(e, md())).data;
    },
  },
  xO = ({
    exercise: t,
    exerciseIndex: e,
    workoutIndex: n,
    handleSaveExerciseUpdate: r,
    handleExerciseClick: i,
    calculateGuidance: s,
  }) => {
    const [o, a] = b.useState(!1),
      [l, c] = b.useState(""),
      [u, d] = b.useState(""),
      h = b.useRef(null),
      p = t.performance.length
        ? t.performance[t.performance.length - 1]
        : { weight: "", reps: "" },
      m = s(p.reps, p.weight);
    b.useEffect(() => {
      o && (c(p.weight), d(p.reps));
    }, [o, p.weight, p.reps]),
      b.useEffect(() => {
        const y = (x) => {
          h.current && !h.current.contains(x.target) && a(!1);
        };
        return (
          o
            ? document.addEventListener("mousedown", y)
            : document.removeEventListener("mousedown", y),
          () => {
            document.removeEventListener("mousedown", y);
          }
        );
      }, [o]);
    const g = (y) => {
        y.preventDefault(),
          l && u
            ? (r(n, e, { weight: l, reps: u }), a(!1))
            : alert("Please enter both weight and reps");
      },
      v = () => {
        i(t.exerciseId.embedUrl);
      };
    return f.jsxs("tr", {
      ref: h,
      style: { cursor: "pointer" },
      children: [
        f.jsx("td", { onClick: v, children: t.exerciseId.title }),
        f.jsx("td", {
          onClick: () => a(!0),
          children: o
            ? f.jsx(te.Control, {
                type: "number",
                value: l,
                onChange: (y) => c(y.target.value),
              })
            : p.weight,
        }),
        f.jsx("td", {
          onClick: () => a(!0),
          children: o
            ? f.jsx(te.Control, {
                type: "number",
                value: u,
                onChange: (y) => d(y.target.value),
              })
            : p.reps,
        }),
        f.jsx("td", {
          children: o
            ? f.jsx(ht, {
                variant: "primary",
                "aria-label": "Edit",
                className: "btn-custom",
                onClick: g,
                children: "Save",
              })
            : f.jsx(ht, {
                variant: "danger",
                "aria-label": "Update",
                className: "btn-custom",
                onClick: () => a(!0),
                children: "Update",
              }),
        }),
        f.jsx("td", { children: m }),
      ],
    });
  },
  _O = ({
    showModal: t,
    handleCloseModal: e,
    selectedVideoUrl: n,
    selectedExerciseTitle: r,
  }) => {
    const i = {
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
    return f.jsxs(pr, {
      show: t,
      onHide: e,
      size: "lg",
      children: [
        f.jsx(pr.Header, {
          closeButton: !0,
          style: i.modalHeader,
          children: f.jsx(pr.Title, { style: i.modalTitle, children: r }),
        }),
        f.jsx(pr.Body, {
          style: i.modalBody,
          children: f.jsx("iframe", {
            src: n,
            title: "Exercise Video",
            width: "100%",
            height: "400px",
            frameBorder: "0",
            allowFullScreen: !0,
          }),
        }),
        f.jsx(pr.Footer, {
          children: f.jsx(ht, {
            variant: "secondary",
            onClick: e,
            style: i.footerButton,
            children: "Close",
          }),
        }),
      ],
    });
  },
  bO = (t, e) => {
    if (
      ((t = Number(t)),
      (e = Number(e)),
      t <= 0 || e <= 0 || isNaN(t) || isNaN(e))
    )
      return {};
    let n = {};
    const r = e < 10 ? 1 : 2.5,
      i = {
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
      s = i[t] || 100,
      o = e / (s / 100);
    if (t >= 7) {
      const a = Math.ceil((e + 1e-4) / r) * r;
      n["Increase weight to"] = `${a} kg`;
    } else if (t >= 4 && t <= 6) {
      const a = t + 1;
      n["Increase reps to"] = `${a}`;
    } else {
      const a = i[5],
        l = o * (a / 100),
        c = Math.round((l + 1e-4) / r) * r;
      n["Decrease weight to"] = `${c} kg`;
    }
    return n;
  },
  wO = (t) => {
    let e = null;
    return (
      t.exercises.forEach((n) => {
        n.performance.forEach((r) => {
          if (r.date) {
            const i = new Date(r.date);
            (!e || i > e) && (e = i);
          }
        });
      }),
      e
    );
  },
  EO = ({ userId: t }) => {
    const [e, n] = b.useState([]),
      [r, i] = b.useState(!1),
      [s, o] = b.useState(""),
      [a, l] = b.useState("");
    b.useEffect(() => {
      t &&
        (async () => {
          try {
            const g = await ua.get(t);
            n(Array.isArray(g) ? g : [g]);
          } catch (g) {
            console.error("Error fetching workouts", g), n([]);
          }
        })();
    }, [t]);
    const c = (m, g) => {
        o(m), l(g), i(!0);
      },
      u = () => {
        i(!1);
      },
      d = async (m, g, v) => {
        const y = e[m],
          x = y.exercises[g];
        v.date = new Date();
        try {
          await ua.updateExercise(y._id, x.exerciseId.id, v);
          const _ = [...e];
          _[m].exercises[g].performance.push(v),
            n(_),
            console.log("Exercise updated successfully!");
        } catch (_) {
          console.error("Failed to update exercise", _);
        }
      },
      h = (m, g) => {
        if (!m || !g) return "";
        const v = bO(m, g),
          y = Object.keys(v);
        return y.length > 0 ? `${y[0]}: ${v[y[0]]}` : "No progression needed";
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
    return f.jsxs(ot, {
      children: [
        f.jsx(An, {
          children: f.jsx("meta", {
            name: "robots",
            content: "noindex, nofollow",
          }),
        }),
        f.jsx(lt, {
          title: "Your Workouts | Bullet Point Fitness",
          description:
            "Access your personalized workout plans and track your progress with Bullet Point Fitness. Log weights, reps, and updates for each exercise to optimize your results.",
          keywords:
            "personalized workouts, fitness tracking, exercise logging, workout progress, Bullet Point Fitness",
          canonicalUrl: "https://bulletpointfitness.com/workouts",
          ogImage: "https://bulletpointfitness.com/og-image.png",
        }),
        f.jsx("h1", { style: p.header, children: "Your Workouts" }),
        e.map((m, g) => {
          const v = wO(m);
          return f.jsx(
            re,
            {
              className: "my-3",
              style: p.card,
              border: "danger",
              children: f.jsxs(re.Body, {
                children: [
                  f.jsxs("h3", {
                    style: p.header,
                    children: ["Workout ", g + 1],
                  }),
                  v
                    ? f.jsxs("p", {
                        style: { textAlign: "center" },
                        children: ["Last updated: ", v.toLocaleDateString()],
                      })
                    : f.jsx("p", {
                        style: { textAlign: "center" },
                        children: "No updates yet",
                      }),
                  f.jsx("div", {
                    className: "table-responsive",
                    children: f.jsxs(E_, {
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
                          children: m.exercises.map((y, x) =>
                            f.jsx(
                              xO,
                              {
                                exercise: y,
                                exerciseIndex: x,
                                workoutIndex: g,
                                handleSaveExerciseUpdate: d,
                                handleExerciseClick: () =>
                                  c(y.exerciseId.embedUrl, y.exerciseId.title),
                                calculateGuidance: h,
                              },
                              x,
                            ),
                          ),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            },
            g,
          );
        }),
        f.jsx(_O, {
          showModal: r,
          handleCloseModal: u,
          selectedVideoUrl: s,
          selectedExerciseTitle: a,
        }),
      ],
    });
  },
  SO = ({ userId: t, notify: e }) => {
    const [n, r] = b.useState([]);
    b.useEffect(() => {
      t &&
        (async () => {
          try {
            const o = await ua.getInactive(t);
            r(Array.isArray(o) ? o : [o]);
          } catch (o) {
            console.error("Error fetching inactive workouts", o),
              e("Failed to fetch inactive workouts: " + o.message, "error");
          }
        })();
    }, [t, e]);
    const i = {
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
    return f.jsxs(ot, {
      children: [
        f.jsx(An, {
          children: f.jsx("meta", {
            name: "robots",
            content: "noindex, nofollow",
          }),
        }),
        f.jsx(lt, {
          title: "Past Workout Programs | Bullet Point Fitness",
          description:
            "Review your previous workout programs with Bullet Point Fitness. Analyze past performance to track progress and optimize future workouts.",
          keywords:
            "previous workouts, past workout programs, fitness tracking, workout analysis, Bullet Point Fitness",
          canonicalUrl: "https://bulletpointfitness.com/past-workout-programs",
          ogImage: "https://bulletpointfitness.com/og-image.png",
        }),
        f.jsx("h1", { style: i.header, children: "Past Workouts" }),
        n.map((s, o) =>
          f.jsx(
            re,
            {
              className: "my-3",
              style: i.card,
              border: "danger",
              children: f.jsxs(re.Body, {
                children: [
                  f.jsxs("h3", {
                    style: i.header,
                    children: ["Workout ", o + 1],
                  }),
                  f.jsx("div", {
                    className: "table-responsive",
                    children: f.jsxs(E_, {
                      striped: !0,
                      bordered: !0,
                      hover: !0,
                      style: i.table,
                      children: [
                        f.jsx("thead", {
                          children: f.jsxs("tr", {
                            children: [
                              f.jsx("th", {
                                style: i.column,
                                children: "Name of Exercise",
                              }),
                              f.jsx("th", {
                                style: i.column,
                                children: "Weight",
                              }),
                              f.jsx("th", {
                                style: i.column,
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
                                    style: i.column,
                                    children: a.exerciseId.title,
                                  }),
                                  f.jsx("td", {
                                    style: i.column,
                                    children: c.weight,
                                  }),
                                  f.jsx("td", {
                                    style: i.column,
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
 */ function Na(t) {
  return (t + 0.5) | 0;
}
const vr = (t, e, n) => Math.max(Math.min(t, n), e);
function xo(t) {
  return vr(Na(t * 2.55), 0, 255);
}
function Ar(t) {
  return vr(Na(t * 255), 0, 255);
}
function Fn(t) {
  return vr(Na(t / 2.55) / 100, 0, 1);
}
function Ig(t) {
  return vr(Na(t * 100), 0, 100);
}
const Ut = {
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
  ah = [..."0123456789ABCDEF"],
  CO = (t) => ah[t & 15],
  kO = (t) => ah[(t & 240) >> 4] + ah[t & 15],
  sl = (t) => (t & 240) >> 4 === (t & 15),
  TO = (t) => sl(t.r) && sl(t.g) && sl(t.b) && sl(t.a);
function OO(t) {
  var e = t.length,
    n;
  return (
    t[0] === "#" &&
      (e === 4 || e === 5
        ? (n = {
            r: 255 & (Ut[t[1]] * 17),
            g: 255 & (Ut[t[2]] * 17),
            b: 255 & (Ut[t[3]] * 17),
            a: e === 5 ? Ut[t[4]] * 17 : 255,
          })
        : (e === 7 || e === 9) &&
          (n = {
            r: (Ut[t[1]] << 4) | Ut[t[2]],
            g: (Ut[t[3]] << 4) | Ut[t[4]],
            b: (Ut[t[5]] << 4) | Ut[t[6]],
            a: e === 9 ? (Ut[t[7]] << 4) | Ut[t[8]] : 255,
          })),
    n
  );
}
const AO = (t, e) => (t < 255 ? e(t) : "");
function NO(t) {
  var e = TO(t) ? CO : kO;
  return t ? "#" + e(t.r) + e(t.g) + e(t.b) + AO(t.a, e) : void 0;
}
const PO =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function rb(t, e, n) {
  const r = e * Math.min(n, 1 - n),
    i = (s, o = (s + t / 30) % 12) =>
      n - r * Math.max(Math.min(o - 3, 9 - o, 1), -1);
  return [i(0), i(8), i(4)];
}
function LO(t, e, n) {
  const r = (i, s = (i + t / 60) % 6) =>
    n - n * e * Math.max(Math.min(s, 4 - s, 1), 0);
  return [r(5), r(3), r(1)];
}
function jO(t, e, n) {
  const r = rb(t, 1, 0.5);
  let i;
  for (e + n > 1 && ((i = 1 / (e + n)), (e *= i), (n *= i)), i = 0; i < 3; i++)
    (r[i] *= 1 - e - n), (r[i] += e);
  return r;
}
function RO(t, e, n, r, i) {
  return t === i
    ? (e - n) / r + (e < n ? 6 : 0)
    : e === i
    ? (n - t) / r + 2
    : (t - e) / r + 4;
}
function qp(t) {
  const n = t.r / 255,
    r = t.g / 255,
    i = t.b / 255,
    s = Math.max(n, r, i),
    o = Math.min(n, r, i),
    a = (s + o) / 2;
  let l, c, u;
  return (
    s !== o &&
      ((u = s - o),
      (c = a > 0.5 ? u / (2 - s - o) : u / (s + o)),
      (l = RO(n, r, i, u, s)),
      (l = l * 60 + 0.5)),
    [l | 0, c || 0, a]
  );
}
function Xp(t, e, n, r) {
  return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, n, r)).map(Ar);
}
function Qp(t, e, n) {
  return Xp(rb, t, e, n);
}
function DO(t, e, n) {
  return Xp(jO, t, e, n);
}
function MO(t, e, n) {
  return Xp(LO, t, e, n);
}
function ib(t) {
  return ((t % 360) + 360) % 360;
}
function IO(t) {
  const e = PO.exec(t);
  let n = 255,
    r;
  if (!e) return;
  e[5] !== r && (n = e[6] ? xo(+e[5]) : Ar(+e[5]));
  const i = ib(+e[2]),
    s = +e[3] / 100,
    o = +e[4] / 100;
  return (
    e[1] === "hwb"
      ? (r = DO(i, s, o))
      : e[1] === "hsv"
      ? (r = MO(i, s, o))
      : (r = Qp(i, s, o)),
    { r: r[0], g: r[1], b: r[2], a: n }
  );
}
function FO(t, e) {
  var n = qp(t);
  (n[0] = ib(n[0] + e)), (n = Qp(n)), (t.r = n[0]), (t.g = n[1]), (t.b = n[2]);
}
function BO(t) {
  if (!t) return;
  const e = qp(t),
    n = e[0],
    r = Ig(e[1]),
    i = Ig(e[2]);
  return t.a < 255
    ? `hsla(${n}, ${r}%, ${i}%, ${Fn(t.a)})`
    : `hsl(${n}, ${r}%, ${i}%)`;
}
const Fg = {
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
  Bg = {
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
function $O() {
  const t = {},
    e = Object.keys(Bg),
    n = Object.keys(Fg);
  let r, i, s, o, a;
  for (r = 0; r < e.length; r++) {
    for (o = a = e[r], i = 0; i < n.length; i++)
      (s = n[i]), (a = a.replace(s, Fg[s]));
    (s = parseInt(Bg[o], 16)),
      (t[a] = [(s >> 16) & 255, (s >> 8) & 255, s & 255]);
  }
  return t;
}
let ol;
function zO(t) {
  ol || ((ol = $O()), (ol.transparent = [0, 0, 0, 0]));
  const e = ol[t.toLowerCase()];
  return e && { r: e[0], g: e[1], b: e[2], a: e.length === 4 ? e[3] : 255 };
}
const HO =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function WO(t) {
  const e = HO.exec(t);
  let n = 255,
    r,
    i,
    s;
  if (e) {
    if (e[7] !== r) {
      const o = +e[7];
      n = e[8] ? xo(o) : vr(o * 255, 0, 255);
    }
    return (
      (r = +e[1]),
      (i = +e[3]),
      (s = +e[5]),
      (r = 255 & (e[2] ? xo(r) : vr(r, 0, 255))),
      (i = 255 & (e[4] ? xo(i) : vr(i, 0, 255))),
      (s = 255 & (e[6] ? xo(s) : vr(s, 0, 255))),
      { r, g: i, b: s, a: n }
    );
  }
}
function UO(t) {
  return (
    t &&
    (t.a < 255
      ? `rgba(${t.r}, ${t.g}, ${t.b}, ${Fn(t.a)})`
      : `rgb(${t.r}, ${t.g}, ${t.b})`)
  );
}
const gd = (t) =>
    t <= 0.0031308 ? t * 12.92 : Math.pow(t, 1 / 2.4) * 1.055 - 0.055,
  Mi = (t) => (t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4));
function VO(t, e, n) {
  const r = Mi(Fn(t.r)),
    i = Mi(Fn(t.g)),
    s = Mi(Fn(t.b));
  return {
    r: Ar(gd(r + n * (Mi(Fn(e.r)) - r))),
    g: Ar(gd(i + n * (Mi(Fn(e.g)) - i))),
    b: Ar(gd(s + n * (Mi(Fn(e.b)) - s))),
    a: t.a + n * (e.a - t.a),
  };
}
function al(t, e, n) {
  if (t) {
    let r = qp(t);
    (r[e] = Math.max(0, Math.min(r[e] + r[e] * n, e === 0 ? 360 : 1))),
      (r = Qp(r)),
      (t.r = r[0]),
      (t.g = r[1]),
      (t.b = r[2]);
  }
}
function sb(t, e) {
  return t && Object.assign(e || {}, t);
}
function $g(t) {
  var e = { r: 0, g: 0, b: 0, a: 255 };
  return (
    Array.isArray(t)
      ? t.length >= 3 &&
        ((e = { r: t[0], g: t[1], b: t[2], a: 255 }),
        t.length > 3 && (e.a = Ar(t[3])))
      : ((e = sb(t, { r: 0, g: 0, b: 0, a: 1 })), (e.a = Ar(e.a))),
    e
  );
}
function YO(t) {
  return t.charAt(0) === "r" ? WO(t) : IO(t);
}
class da {
  constructor(e) {
    if (e instanceof da) return e;
    const n = typeof e;
    let r;
    n === "object"
      ? (r = $g(e))
      : n === "string" && (r = OO(e) || zO(e) || YO(e)),
      (this._rgb = r),
      (this._valid = !!r);
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var e = sb(this._rgb);
    return e && (e.a = Fn(e.a)), e;
  }
  set rgb(e) {
    this._rgb = $g(e);
  }
  rgbString() {
    return this._valid ? UO(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? NO(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? BO(this._rgb) : void 0;
  }
  mix(e, n) {
    if (e) {
      const r = this.rgb,
        i = e.rgb;
      let s;
      const o = n === s ? 0.5 : n,
        a = 2 * o - 1,
        l = r.a - i.a,
        c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
      (s = 1 - c),
        (r.r = 255 & (c * r.r + s * i.r + 0.5)),
        (r.g = 255 & (c * r.g + s * i.g + 0.5)),
        (r.b = 255 & (c * r.b + s * i.b + 0.5)),
        (r.a = o * r.a + (1 - o) * i.a),
        (this.rgb = r);
    }
    return this;
  }
  interpolate(e, n) {
    return e && (this._rgb = VO(this._rgb, e._rgb, n)), this;
  }
  clone() {
    return new da(this.rgb);
  }
  alpha(e) {
    return (this._rgb.a = Ar(e)), this;
  }
  clearer(e) {
    const n = this._rgb;
    return (n.a *= 1 - e), this;
  }
  greyscale() {
    const e = this._rgb,
      n = Na(e.r * 0.3 + e.g * 0.59 + e.b * 0.11);
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
    return al(this._rgb, 2, e), this;
  }
  darken(e) {
    return al(this._rgb, 2, -e), this;
  }
  saturate(e) {
    return al(this._rgb, 1, e), this;
  }
  desaturate(e) {
    return al(this._rgb, 1, -e), this;
  }
  rotate(e) {
    return FO(this._rgb, e), this;
  }
}
/*!
 * Chart.js v4.4.3
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */ function jn() {}
const GO = (() => {
  let t = 0;
  return () => t++;
})();
function Ae(t) {
  return t === null || typeof t > "u";
}
function We(t) {
  if (Array.isArray && Array.isArray(t)) return !0;
  const e = Object.prototype.toString.call(t);
  return e.slice(0, 7) === "[object" && e.slice(-6) === "Array]";
}
function de(t) {
  return t !== null && Object.prototype.toString.call(t) === "[object Object]";
}
function it(t) {
  return (typeof t == "number" || t instanceof Number) && isFinite(+t);
}
function Lt(t, e) {
  return it(t) ? t : e;
}
function ae(t, e) {
  return typeof t > "u" ? e : t;
}
const KO = (t, e) =>
  typeof t == "string" && t.endsWith("%") ? (parseFloat(t) / 100) * e : +t;
function ve(t, e, n) {
  if (t && typeof t.call == "function") return t.apply(n, e);
}
function he(t, e, n, r) {
  let i, s, o;
  if (We(t)) for (s = t.length, i = 0; i < s; i++) e.call(n, t[i], i);
  else if (de(t))
    for (o = Object.keys(t), s = o.length, i = 0; i < s; i++)
      e.call(n, t[o[i]], o[i]);
}
function jc(t, e) {
  let n, r, i, s;
  if (!t || !e || t.length !== e.length) return !1;
  for (n = 0, r = t.length; n < r; ++n)
    if (
      ((i = t[n]),
      (s = e[n]),
      i.datasetIndex !== s.datasetIndex || i.index !== s.index)
    )
      return !1;
  return !0;
}
function Rc(t) {
  if (We(t)) return t.map(Rc);
  if (de(t)) {
    const e = Object.create(null),
      n = Object.keys(t),
      r = n.length;
    let i = 0;
    for (; i < r; ++i) e[n[i]] = Rc(t[n[i]]);
    return e;
  }
  return t;
}
function ob(t) {
  return ["__proto__", "prototype", "constructor"].indexOf(t) === -1;
}
function qO(t, e, n, r) {
  if (!ob(t)) return;
  const i = e[t],
    s = n[t];
  de(i) && de(s) ? fa(i, s, r) : (e[t] = Rc(s));
}
function fa(t, e, n) {
  const r = We(e) ? e : [e],
    i = r.length;
  if (!de(t)) return t;
  n = n || {};
  const s = n.merger || qO;
  let o;
  for (let a = 0; a < i; ++a) {
    if (((o = r[a]), !de(o))) continue;
    const l = Object.keys(o);
    for (let c = 0, u = l.length; c < u; ++c) s(l[c], t, o, n);
  }
  return t;
}
function Do(t, e) {
  return fa(t, e, { merger: XO });
}
function XO(t, e, n) {
  if (!ob(t)) return;
  const r = e[t],
    i = n[t];
  de(r) && de(i)
    ? Do(r, i)
    : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = Rc(i));
}
const zg = { "": (t) => t, x: (t) => t.x, y: (t) => t.y };
function QO(t) {
  const e = t.split("."),
    n = [];
  let r = "";
  for (const i of e)
    (r += i),
      r.endsWith("\\") ? (r = r.slice(0, -1) + ".") : (n.push(r), (r = ""));
  return n;
}
function JO(t) {
  const e = QO(t);
  return (n) => {
    for (const r of e) {
      if (r === "") break;
      n = n && n[r];
    }
    return n;
  };
}
function Dc(t, e) {
  return (zg[e] || (zg[e] = JO(e)))(t);
}
function Jp(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
const Mc = (t) => typeof t < "u",
  jr = (t) => typeof t == "function",
  Hg = (t, e) => {
    if (t.size !== e.size) return !1;
    for (const n of t) if (!e.has(n)) return !1;
    return !0;
  };
function ZO(t) {
  return t.type === "mouseup" || t.type === "click" || t.type === "contextmenu";
}
const Ve = Math.PI,
  Tn = 2 * Ve,
  e6 = Tn + Ve,
  Ic = Number.POSITIVE_INFINITY,
  t6 = Ve / 180,
  dn = Ve / 2,
  Ur = Ve / 4,
  Wg = (Ve * 2) / 3,
  xr = Math.log10,
  Ts = Math.sign;
function Mo(t, e, n) {
  return Math.abs(t - e) < n;
}
function Ug(t) {
  const e = Math.round(t);
  t = Mo(t, e, t / 1e3) ? e : t;
  const n = Math.pow(10, Math.floor(xr(t))),
    r = t / n;
  return (r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * n;
}
function n6(t) {
  const e = [],
    n = Math.sqrt(t);
  let r;
  for (r = 1; r < n; r++) t % r === 0 && (e.push(r), e.push(t / r));
  return n === (n | 0) && e.push(n), e.sort((i, s) => i - s).pop(), e;
}
function ha(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function r6(t, e) {
  const n = Math.round(t);
  return n - e <= t && n + e >= t;
}
function ab(t, e, n) {
  let r, i, s;
  for (r = 0, i = t.length; r < i; r++)
    (s = t[r][n]),
      isNaN(s) || ((e.min = Math.min(e.min, s)), (e.max = Math.max(e.max, s)));
}
function ri(t) {
  return t * (Ve / 180);
}
function i6(t) {
  return t * (180 / Ve);
}
function Vg(t) {
  if (!it(t)) return;
  let e = 1,
    n = 0;
  for (; Math.round(t * e) / e !== t; ) (e *= 10), n++;
  return n;
}
function s6(t, e) {
  const n = e.x - t.x,
    r = e.y - t.y,
    i = Math.sqrt(n * n + r * r);
  let s = Math.atan2(r, n);
  return s < -0.5 * Ve && (s += Tn), { angle: s, distance: i };
}
function lh(t, e) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function o6(t, e) {
  return ((t - e + e6) % Tn) - Ve;
}
function ar(t) {
  return ((t % Tn) + Tn) % Tn;
}
function lb(t, e, n, r) {
  const i = ar(t),
    s = ar(e),
    o = ar(n),
    a = ar(s - i),
    l = ar(o - i),
    c = ar(i - s),
    u = ar(i - o);
  return i === s || i === o || (r && s === o) || (a > l && c < u);
}
function Kt(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function a6(t) {
  return Kt(t, -32768, 32767);
}
function _o(t, e, n, r = 1e-6) {
  return t >= Math.min(e, n) - r && t <= Math.max(e, n) + r;
}
function Zp(t, e, n) {
  n = n || ((o) => t[o] < e);
  let r = t.length - 1,
    i = 0,
    s;
  for (; r - i > 1; ) (s = (i + r) >> 1), n(s) ? (i = s) : (r = s);
  return { lo: i, hi: r };
}
const ii = (t, e, n, r) =>
    Zp(
      t,
      n,
      r
        ? (i) => {
            const s = t[i][e];
            return s < n || (s === n && t[i + 1][e] === n);
          }
        : (i) => t[i][e] < n,
    ),
  l6 = (t, e, n) => Zp(t, n, (r) => t[r][e] >= n);
function c6(t, e, n) {
  let r = 0,
    i = t.length;
  for (; r < i && t[r] < e; ) r++;
  for (; i > r && t[i - 1] > n; ) i--;
  return r > 0 || i < t.length ? t.slice(r, i) : t;
}
const cb = ["push", "pop", "shift", "splice", "unshift"];
function u6(t, e) {
  if (t._chartjs) {
    t._chartjs.listeners.push(e);
    return;
  }
  Object.defineProperty(t, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: { listeners: [e] },
  }),
    cb.forEach((n) => {
      const r = "_onData" + Jp(n),
        i = t[n];
      Object.defineProperty(t, n, {
        configurable: !0,
        enumerable: !1,
        value(...s) {
          const o = i.apply(this, s);
          return (
            t._chartjs.listeners.forEach((a) => {
              typeof a[r] == "function" && a[r](...s);
            }),
            o
          );
        },
      });
    });
}
function Yg(t, e) {
  const n = t._chartjs;
  if (!n) return;
  const r = n.listeners,
    i = r.indexOf(e);
  i !== -1 && r.splice(i, 1),
    !(r.length > 0) &&
      (cb.forEach((s) => {
        delete t[s];
      }),
      delete t._chartjs);
}
function d6(t) {
  const e = new Set(t);
  return e.size === t.length ? t : Array.from(e);
}
const ub = (function () {
  return typeof window > "u"
    ? function (t) {
        return t();
      }
    : window.requestAnimationFrame;
})();
function db(t, e) {
  let n = [],
    r = !1;
  return function (...i) {
    (n = i),
      r ||
        ((r = !0),
        ub.call(window, () => {
          (r = !1), t.apply(e, n);
        }));
  };
}
function f6(t, e) {
  let n;
  return function (...r) {
    return (
      e ? (clearTimeout(n), (n = setTimeout(t, e, r))) : t.apply(this, r), e
    );
  };
}
const e0 = (t) => (t === "start" ? "left" : t === "end" ? "right" : "center"),
  nt = (t, e, n) => (t === "start" ? e : t === "end" ? n : (e + n) / 2),
  h6 = (t, e, n, r) =>
    t === (r ? "left" : "right") ? n : t === "center" ? (e + n) / 2 : e;
function p6(t, e, n) {
  const r = e.length;
  let i = 0,
    s = r;
  if (t._sorted) {
    const { iScale: o, _parsed: a } = t,
      l = o.axis,
      { min: c, max: u, minDefined: d, maxDefined: h } = o.getUserBounds();
    d &&
      (i = Kt(
        Math.min(ii(a, l, c).lo, n ? r : ii(e, l, o.getPixelForValue(c)).lo),
        0,
        r - 1,
      )),
      h
        ? (s =
            Kt(
              Math.max(
                ii(a, o.axis, u, !0).hi + 1,
                n ? 0 : ii(e, l, o.getPixelForValue(u), !0).hi + 1,
              ),
              i,
              r,
            ) - i)
        : (s = r - i);
  }
  return { start: i, count: s };
}
function m6(t) {
  const { xScale: e, yScale: n, _scaleRanges: r } = t,
    i = { xmin: e.min, xmax: e.max, ymin: n.min, ymax: n.max };
  if (!r) return (t._scaleRanges = i), !0;
  const s =
    r.xmin !== e.min ||
    r.xmax !== e.max ||
    r.ymin !== n.min ||
    r.ymax !== n.max;
  return Object.assign(r, i), s;
}
const ll = (t) => t === 0 || t === 1,
  Gg = (t, e, n) =>
    -(Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * Tn) / n)),
  Kg = (t, e, n) => Math.pow(2, -10 * t) * Math.sin(((t - e) * Tn) / n) + 1,
  Io = {
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
    easeInSine: (t) => -Math.cos(t * dn) + 1,
    easeOutSine: (t) => Math.sin(t * dn),
    easeInOutSine: (t) => -0.5 * (Math.cos(Ve * t) - 1),
    easeInExpo: (t) => (t === 0 ? 0 : Math.pow(2, 10 * (t - 1))),
    easeOutExpo: (t) => (t === 1 ? 1 : -Math.pow(2, -10 * t) + 1),
    easeInOutExpo: (t) =>
      ll(t)
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
    easeInElastic: (t) => (ll(t) ? t : Gg(t, 0.075, 0.3)),
    easeOutElastic: (t) => (ll(t) ? t : Kg(t, 0.075, 0.3)),
    easeInOutElastic(t) {
      return ll(t)
        ? t
        : t < 0.5
        ? 0.5 * Gg(t * 2, 0.1125, 0.45)
        : 0.5 + 0.5 * Kg(t * 2 - 1, 0.1125, 0.45);
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
    easeInBounce: (t) => 1 - Io.easeOutBounce(1 - t),
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
        ? Io.easeInBounce(t * 2) * 0.5
        : Io.easeOutBounce(t * 2 - 1) * 0.5 + 0.5,
  };
function t0(t) {
  if (t && typeof t == "object") {
    const e = t.toString();
    return e === "[object CanvasPattern]" || e === "[object CanvasGradient]";
  }
  return !1;
}
function qg(t) {
  return t0(t) ? t : new da(t);
}
function yd(t) {
  return t0(t) ? t : new da(t).saturate(0.5).darken(0.1).hexString();
}
const g6 = ["x", "y", "borderWidth", "radius", "tension"],
  y6 = ["color", "borderColor", "backgroundColor"];
function v6(t) {
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
      colors: { type: "color", properties: y6 },
      numbers: { type: "number", properties: g6 },
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
function x6(t) {
  t.set("layout", {
    autoPadding: !0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  });
}
const Xg = new Map();
function _6(t, e) {
  e = e || {};
  const n = t + JSON.stringify(e);
  let r = Xg.get(n);
  return r || ((r = new Intl.NumberFormat(t, e)), Xg.set(n, r)), r;
}
function n0(t, e, n) {
  return _6(e, n).format(t);
}
const fb = {
  values(t) {
    return We(t) ? t : "" + t;
  },
  numeric(t, e, n) {
    if (t === 0) return "0";
    const r = this.chart.options.locale;
    let i,
      s = t;
    if (n.length > 1) {
      const c = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value));
      (c < 1e-4 || c > 1e15) && (i = "scientific"), (s = b6(t, n));
    }
    const o = xr(Math.abs(s)),
      a = isNaN(o) ? 1 : Math.max(Math.min(-1 * Math.floor(o), 20), 0),
      l = { notation: i, minimumFractionDigits: a, maximumFractionDigits: a };
    return Object.assign(l, this.options.ticks.format), n0(t, r, l);
  },
  logarithmic(t, e, n) {
    if (t === 0) return "0";
    const r = n[e].significand || t / Math.pow(10, Math.floor(xr(t)));
    return [1, 2, 3, 5, 10, 15].includes(r) || e > 0.8 * n.length
      ? fb.numeric.call(this, t, e, n)
      : "";
  },
};
function b6(t, e) {
  let n = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
  return Math.abs(n) >= 1 && t !== Math.floor(t) && (n = t - Math.floor(t)), n;
}
var r0 = { formatters: fb };
function w6(t) {
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
      callback: r0.formatters.values,
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
const bi = Object.create(null),
  ch = Object.create(null);
function Fo(t, e) {
  if (!e) return t;
  const n = e.split(".");
  for (let r = 0, i = n.length; r < i; ++r) {
    const s = n[r];
    t = t[s] || (t[s] = Object.create(null));
  }
  return t;
}
function vd(t, e, n) {
  return typeof e == "string" ? fa(Fo(t, e), n) : fa(Fo(t, ""), e);
}
class E6 {
  constructor(e, n) {
    (this.animation = void 0),
      (this.backgroundColor = "rgba(0,0,0,0.1)"),
      (this.borderColor = "rgba(0,0,0,0.1)"),
      (this.color = "#666"),
      (this.datasets = {}),
      (this.devicePixelRatio = (r) => r.chart.platform.getDevicePixelRatio()),
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
      (this.hoverBackgroundColor = (r, i) => yd(i.backgroundColor)),
      (this.hoverBorderColor = (r, i) => yd(i.borderColor)),
      (this.hoverColor = (r, i) => yd(i.color)),
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
    return vd(this, e, n);
  }
  get(e) {
    return Fo(this, e);
  }
  describe(e, n) {
    return vd(ch, e, n);
  }
  override(e, n) {
    return vd(bi, e, n);
  }
  route(e, n, r, i) {
    const s = Fo(this, e),
      o = Fo(this, r),
      a = "_" + n;
    Object.defineProperties(s, {
      [a]: { value: s[n], writable: !0 },
      [n]: {
        enumerable: !0,
        get() {
          const l = this[a],
            c = o[i];
          return de(l) ? Object.assign({}, c, l) : ae(l, c);
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
var Pe = new E6(
  {
    _scriptable: (t) => !t.startsWith("on"),
    _indexable: (t) => t !== "events",
    hover: { _fallback: "interaction" },
    interaction: { _scriptable: !1, _indexable: !1 },
  },
  [v6, x6, w6],
);
function S6(t) {
  return !t || Ae(t.size) || Ae(t.family)
    ? null
    : (t.style ? t.style + " " : "") +
        (t.weight ? t.weight + " " : "") +
        t.size +
        "px " +
        t.family;
}
function Qg(t, e, n, r, i) {
  let s = e[i];
  return (
    s || ((s = e[i] = t.measureText(i).width), n.push(i)), s > r && (r = s), r
  );
}
function Vr(t, e, n) {
  const r = t.currentDevicePixelRatio,
    i = n !== 0 ? Math.max(n / 2, 0.5) : 0;
  return Math.round((e - i) * r) / r + i;
}
function Jg(t, e) {
  (!e && !t) ||
    ((e = e || t.getContext("2d")),
    e.save(),
    e.resetTransform(),
    e.clearRect(0, 0, t.width, t.height),
    e.restore());
}
function uh(t, e, n, r) {
  hb(t, e, n, r, null);
}
function hb(t, e, n, r, i) {
  let s, o, a, l, c, u, d, h;
  const p = e.pointStyle,
    m = e.rotation,
    g = e.radius;
  let v = (m || 0) * t6;
  if (
    p &&
    typeof p == "object" &&
    ((s = p.toString()),
    s === "[object HTMLImageElement]" || s === "[object HTMLCanvasElement]")
  ) {
    t.save(),
      t.translate(n, r),
      t.rotate(v),
      t.drawImage(p, -p.width / 2, -p.height / 2, p.width, p.height),
      t.restore();
    return;
  }
  if (!(isNaN(g) || g <= 0)) {
    switch ((t.beginPath(), p)) {
      default:
        i ? t.ellipse(n, r, i / 2, g, 0, 0, Tn) : t.arc(n, r, g, 0, Tn),
          t.closePath();
        break;
      case "triangle":
        (u = i ? i / 2 : g),
          t.moveTo(n + Math.sin(v) * u, r - Math.cos(v) * g),
          (v += Wg),
          t.lineTo(n + Math.sin(v) * u, r - Math.cos(v) * g),
          (v += Wg),
          t.lineTo(n + Math.sin(v) * u, r - Math.cos(v) * g),
          t.closePath();
        break;
      case "rectRounded":
        (c = g * 0.516),
          (l = g - c),
          (o = Math.cos(v + Ur) * l),
          (d = Math.cos(v + Ur) * (i ? i / 2 - c : l)),
          (a = Math.sin(v + Ur) * l),
          (h = Math.sin(v + Ur) * (i ? i / 2 - c : l)),
          t.arc(n - d, r - a, c, v - Ve, v - dn),
          t.arc(n + h, r - o, c, v - dn, v),
          t.arc(n + d, r + a, c, v, v + dn),
          t.arc(n - h, r + o, c, v + dn, v + Ve),
          t.closePath();
        break;
      case "rect":
        if (!m) {
          (l = Math.SQRT1_2 * g),
            (u = i ? i / 2 : l),
            t.rect(n - u, r - l, 2 * u, 2 * l);
          break;
        }
        v += Ur;
      case "rectRot":
        (d = Math.cos(v) * (i ? i / 2 : g)),
          (o = Math.cos(v) * g),
          (a = Math.sin(v) * g),
          (h = Math.sin(v) * (i ? i / 2 : g)),
          t.moveTo(n - d, r - a),
          t.lineTo(n + h, r - o),
          t.lineTo(n + d, r + a),
          t.lineTo(n - h, r + o),
          t.closePath();
        break;
      case "crossRot":
        v += Ur;
      case "cross":
        (d = Math.cos(v) * (i ? i / 2 : g)),
          (o = Math.cos(v) * g),
          (a = Math.sin(v) * g),
          (h = Math.sin(v) * (i ? i / 2 : g)),
          t.moveTo(n - d, r - a),
          t.lineTo(n + d, r + a),
          t.moveTo(n + h, r - o),
          t.lineTo(n - h, r + o);
        break;
      case "star":
        (d = Math.cos(v) * (i ? i / 2 : g)),
          (o = Math.cos(v) * g),
          (a = Math.sin(v) * g),
          (h = Math.sin(v) * (i ? i / 2 : g)),
          t.moveTo(n - d, r - a),
          t.lineTo(n + d, r + a),
          t.moveTo(n + h, r - o),
          t.lineTo(n - h, r + o),
          (v += Ur),
          (d = Math.cos(v) * (i ? i / 2 : g)),
          (o = Math.cos(v) * g),
          (a = Math.sin(v) * g),
          (h = Math.sin(v) * (i ? i / 2 : g)),
          t.moveTo(n - d, r - a),
          t.lineTo(n + d, r + a),
          t.moveTo(n + h, r - o),
          t.lineTo(n - h, r + o);
        break;
      case "line":
        (o = i ? i / 2 : Math.cos(v) * g),
          (a = Math.sin(v) * g),
          t.moveTo(n - o, r - a),
          t.lineTo(n + o, r + a);
        break;
      case "dash":
        t.moveTo(n, r),
          t.lineTo(n + Math.cos(v) * (i ? i / 2 : g), r + Math.sin(v) * g);
        break;
      case !1:
        t.closePath();
        break;
    }
    t.fill(), e.borderWidth > 0 && t.stroke();
  }
}
function pa(t, e, n) {
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
function i0(t, e) {
  t.save(),
    t.beginPath(),
    t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
    t.clip();
}
function s0(t) {
  t.restore();
}
function C6(t, e, n, r, i) {
  if (!e) return t.lineTo(n.x, n.y);
  if (i === "middle") {
    const s = (e.x + n.x) / 2;
    t.lineTo(s, e.y), t.lineTo(s, n.y);
  } else (i === "after") != !!r ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);
  t.lineTo(n.x, n.y);
}
function k6(t, e, n, r) {
  if (!e) return t.lineTo(n.x, n.y);
  t.bezierCurveTo(
    r ? e.cp1x : e.cp2x,
    r ? e.cp1y : e.cp2y,
    r ? n.cp2x : n.cp1x,
    r ? n.cp2y : n.cp1y,
    n.x,
    n.y,
  );
}
function T6(t, e) {
  e.translation && t.translate(e.translation[0], e.translation[1]),
    Ae(e.rotation) || t.rotate(e.rotation),
    e.color && (t.fillStyle = e.color),
    e.textAlign && (t.textAlign = e.textAlign),
    e.textBaseline && (t.textBaseline = e.textBaseline);
}
function O6(t, e, n, r, i) {
  if (i.strikethrough || i.underline) {
    const s = t.measureText(r),
      o = e - s.actualBoundingBoxLeft,
      a = e + s.actualBoundingBoxRight,
      l = n - s.actualBoundingBoxAscent,
      c = n + s.actualBoundingBoxDescent,
      u = i.strikethrough ? (l + c) / 2 : c;
    (t.strokeStyle = t.fillStyle),
      t.beginPath(),
      (t.lineWidth = i.decorationWidth || 2),
      t.moveTo(o, u),
      t.lineTo(a, u),
      t.stroke();
  }
}
function A6(t, e) {
  const n = t.fillStyle;
  (t.fillStyle = e.color),
    t.fillRect(e.left, e.top, e.width, e.height),
    (t.fillStyle = n);
}
function ma(t, e, n, r, i, s = {}) {
  const o = We(e) ? e : [e],
    a = s.strokeWidth > 0 && s.strokeColor !== "";
  let l, c;
  for (t.save(), t.font = i.string, T6(t, s), l = 0; l < o.length; ++l)
    (c = o[l]),
      s.backdrop && A6(t, s.backdrop),
      a &&
        (s.strokeColor && (t.strokeStyle = s.strokeColor),
        Ae(s.strokeWidth) || (t.lineWidth = s.strokeWidth),
        t.strokeText(c, n, r, s.maxWidth)),
      t.fillText(c, n, r, s.maxWidth),
      O6(t, n, r, c, s),
      (r += Number(i.lineHeight));
  t.restore();
}
function dh(t, e) {
  const { x: n, y: r, w: i, h: s, radius: o } = e;
  t.arc(n + o.topLeft, r + o.topLeft, o.topLeft, 1.5 * Ve, Ve, !0),
    t.lineTo(n, r + s - o.bottomLeft),
    t.arc(n + o.bottomLeft, r + s - o.bottomLeft, o.bottomLeft, Ve, dn, !0),
    t.lineTo(n + i - o.bottomRight, r + s),
    t.arc(
      n + i - o.bottomRight,
      r + s - o.bottomRight,
      o.bottomRight,
      dn,
      0,
      !0,
    ),
    t.lineTo(n + i, r + o.topRight),
    t.arc(n + i - o.topRight, r + o.topRight, o.topRight, 0, -dn, !0),
    t.lineTo(n + o.topLeft, r);
}
const N6 = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
  P6 = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function L6(t, e) {
  const n = ("" + t).match(N6);
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
const j6 = (t) => +t || 0;
function pb(t, e) {
  const n = {},
    r = de(e),
    i = r ? Object.keys(e) : e,
    s = de(t) ? (r ? (o) => ae(t[o], t[e[o]]) : (o) => t[o]) : () => t;
  for (const o of i) n[o] = j6(s(o));
  return n;
}
function R6(t) {
  return pb(t, { top: "y", right: "x", bottom: "y", left: "x" });
}
function Bo(t) {
  return pb(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
}
function en(t) {
  const e = R6(t);
  return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e;
}
function st(t, e) {
  (t = t || {}), (e = e || Pe.font);
  let n = ae(t.size, e.size);
  typeof n == "string" && (n = parseInt(n, 10));
  let r = ae(t.style, e.style);
  r &&
    !("" + r).match(P6) &&
    (console.warn('Invalid font style specified: "' + r + '"'), (r = void 0));
  const i = {
    family: ae(t.family, e.family),
    lineHeight: L6(ae(t.lineHeight, e.lineHeight), n),
    size: n,
    style: r,
    weight: ae(t.weight, e.weight),
    string: "",
  };
  return (i.string = S6(i)), i;
}
function cl(t, e, n, r) {
  let i, s, o;
  for (i = 0, s = t.length; i < s; ++i)
    if (((o = t[i]), o !== void 0 && o !== void 0)) return o;
}
function D6(t, e, n) {
  const { min: r, max: i } = t,
    s = KO(e, (i - r) / 2),
    o = (a, l) => (n && a === 0 ? 0 : a + l);
  return { min: o(r, -Math.abs(s)), max: o(i, s) };
}
function Ti(t, e) {
  return Object.assign(Object.create(t), e);
}
function o0(t, e = [""], n, r, i = () => t[0]) {
  const s = n || t;
  typeof r > "u" && (r = vb("_fallback", t));
  const o = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: t,
    _rootScopes: s,
    _fallback: r,
    _getTarget: i,
    override: (a) => o0([a, ...t], e, s, r),
  };
  return new Proxy(o, {
    deleteProperty(a, l) {
      return delete a[l], delete a._keys, delete t[0][l], !0;
    },
    get(a, l) {
      return gb(a, l, () => W6(l, e, t, a));
    },
    getOwnPropertyDescriptor(a, l) {
      return Reflect.getOwnPropertyDescriptor(a._scopes[0], l);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(t[0]);
    },
    has(a, l) {
      return e1(a).includes(l);
    },
    ownKeys(a) {
      return e1(a);
    },
    set(a, l, c) {
      const u = a._storage || (a._storage = i());
      return (a[l] = u[l] = c), delete a._keys, !0;
    },
  });
}
function Os(t, e, n, r) {
  const i = {
    _cacheable: !1,
    _proxy: t,
    _context: e,
    _subProxy: n,
    _stack: new Set(),
    _descriptors: mb(t, r),
    setContext: (s) => Os(t, s, n, r),
    override: (s) => Os(t.override(s), e, n, r),
  };
  return new Proxy(i, {
    deleteProperty(s, o) {
      return delete s[o], delete t[o], !0;
    },
    get(s, o, a) {
      return gb(s, o, () => I6(s, o, a));
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
function mb(t, e = { scriptable: !0, indexable: !0 }) {
  const {
    _scriptable: n = e.scriptable,
    _indexable: r = e.indexable,
    _allKeys: i = e.allKeys,
  } = t;
  return {
    allKeys: i,
    scriptable: n,
    indexable: r,
    isScriptable: jr(n) ? n : () => n,
    isIndexable: jr(r) ? r : () => r,
  };
}
const M6 = (t, e) => (t ? t + Jp(e) : e),
  a0 = (t, e) =>
    de(e) &&
    t !== "adapters" &&
    (Object.getPrototypeOf(e) === null || e.constructor === Object);
function gb(t, e, n) {
  if (Object.prototype.hasOwnProperty.call(t, e) || e === "constructor")
    return t[e];
  const r = n();
  return (t[e] = r), r;
}
function I6(t, e, n) {
  const { _proxy: r, _context: i, _subProxy: s, _descriptors: o } = t;
  let a = r[e];
  return (
    jr(a) && o.isScriptable(e) && (a = F6(e, a, t, n)),
    We(a) && a.length && (a = B6(e, a, t, o.isIndexable)),
    a0(e, a) && (a = Os(a, i, s && s[e], o)),
    a
  );
}
function F6(t, e, n, r) {
  const { _proxy: i, _context: s, _subProxy: o, _stack: a } = n;
  if (a.has(t))
    throw new Error(
      "Recursion detected: " + Array.from(a).join("->") + "->" + t,
    );
  a.add(t);
  let l = e(s, o || r);
  return a.delete(t), a0(t, l) && (l = l0(i._scopes, i, t, l)), l;
}
function B6(t, e, n, r) {
  const { _proxy: i, _context: s, _subProxy: o, _descriptors: a } = n;
  if (typeof s.index < "u" && r(t)) return e[s.index % e.length];
  if (de(e[0])) {
    const l = e,
      c = i._scopes.filter((u) => u !== l);
    e = [];
    for (const u of l) {
      const d = l0(c, i, t, u);
      e.push(Os(d, s, o && o[t], a));
    }
  }
  return e;
}
function yb(t, e, n) {
  return jr(t) ? t(e, n) : t;
}
const $6 = (t, e) => (t === !0 ? e : typeof t == "string" ? Dc(e, t) : void 0);
function z6(t, e, n, r, i) {
  for (const s of e) {
    const o = $6(n, s);
    if (o) {
      t.add(o);
      const a = yb(o._fallback, n, i);
      if (typeof a < "u" && a !== n && a !== r) return a;
    } else if (o === !1 && typeof r < "u" && n !== r) return null;
  }
  return !1;
}
function l0(t, e, n, r) {
  const i = e._rootScopes,
    s = yb(e._fallback, n, r),
    o = [...t, ...i],
    a = new Set();
  a.add(r);
  let l = Zg(a, o, n, s || n, r);
  return l === null ||
    (typeof s < "u" && s !== n && ((l = Zg(a, o, s, l, r)), l === null))
    ? !1
    : o0(Array.from(a), [""], i, s, () => H6(e, n, r));
}
function Zg(t, e, n, r, i) {
  for (; n; ) n = z6(t, e, n, r, i);
  return n;
}
function H6(t, e, n) {
  const r = t._getTarget();
  e in r || (r[e] = {});
  const i = r[e];
  return We(i) && de(n) ? n : i || {};
}
function W6(t, e, n, r) {
  let i;
  for (const s of e)
    if (((i = vb(M6(s, t), n)), typeof i < "u"))
      return a0(t, i) ? l0(n, r, t, i) : i;
}
function vb(t, e) {
  for (const n of e) {
    if (!n) continue;
    const r = n[t];
    if (typeof r < "u") return r;
  }
}
function e1(t) {
  let e = t._keys;
  return e || (e = t._keys = U6(t._scopes)), e;
}
function U6(t) {
  const e = new Set();
  for (const n of t)
    for (const r of Object.keys(n).filter((i) => !i.startsWith("_"))) e.add(r);
  return Array.from(e);
}
const V6 = Number.EPSILON || 1e-14,
  As = (t, e) => e < t.length && !t[e].skip && t[e],
  xb = (t) => (t === "x" ? "y" : "x");
function Y6(t, e, n, r) {
  const i = t.skip ? e : t,
    s = e,
    o = n.skip ? e : n,
    a = lh(s, i),
    l = lh(o, s);
  let c = a / (a + l),
    u = l / (a + l);
  (c = isNaN(c) ? 0 : c), (u = isNaN(u) ? 0 : u);
  const d = r * c,
    h = r * u;
  return {
    previous: { x: s.x - d * (o.x - i.x), y: s.y - d * (o.y - i.y) },
    next: { x: s.x + h * (o.x - i.x), y: s.y + h * (o.y - i.y) },
  };
}
function G6(t, e, n) {
  const r = t.length;
  let i,
    s,
    o,
    a,
    l,
    c = As(t, 0);
  for (let u = 0; u < r - 1; ++u)
    if (((l = c), (c = As(t, u + 1)), !(!l || !c))) {
      if (Mo(e[u], 0, V6)) {
        n[u] = n[u + 1] = 0;
        continue;
      }
      (i = n[u] / e[u]),
        (s = n[u + 1] / e[u]),
        (a = Math.pow(i, 2) + Math.pow(s, 2)),
        !(a <= 9) &&
          ((o = 3 / Math.sqrt(a)),
          (n[u] = i * o * e[u]),
          (n[u + 1] = s * o * e[u]));
    }
}
function K6(t, e, n = "x") {
  const r = xb(n),
    i = t.length;
  let s,
    o,
    a,
    l = As(t, 0);
  for (let c = 0; c < i; ++c) {
    if (((o = a), (a = l), (l = As(t, c + 1)), !a)) continue;
    const u = a[n],
      d = a[r];
    o &&
      ((s = (u - o[n]) / 3),
      (a[`cp1${n}`] = u - s),
      (a[`cp1${r}`] = d - s * e[c])),
      l &&
        ((s = (l[n] - u) / 3),
        (a[`cp2${n}`] = u + s),
        (a[`cp2${r}`] = d + s * e[c]));
  }
}
function q6(t, e = "x") {
  const n = xb(e),
    r = t.length,
    i = Array(r).fill(0),
    s = Array(r);
  let o,
    a,
    l,
    c = As(t, 0);
  for (o = 0; o < r; ++o)
    if (((a = l), (l = c), (c = As(t, o + 1)), !!l)) {
      if (c) {
        const u = c[e] - l[e];
        i[o] = u !== 0 ? (c[n] - l[n]) / u : 0;
      }
      s[o] = a
        ? c
          ? Ts(i[o - 1]) !== Ts(i[o])
            ? 0
            : (i[o - 1] + i[o]) / 2
          : i[o - 1]
        : i[o];
    }
  G6(t, i, s), K6(t, s, e);
}
function ul(t, e, n) {
  return Math.max(Math.min(t, n), e);
}
function X6(t, e) {
  let n,
    r,
    i,
    s,
    o,
    a = pa(t[0], e);
  for (n = 0, r = t.length; n < r; ++n)
    (o = s),
      (s = a),
      (a = n < r - 1 && pa(t[n + 1], e)),
      s &&
        ((i = t[n]),
        o &&
          ((i.cp1x = ul(i.cp1x, e.left, e.right)),
          (i.cp1y = ul(i.cp1y, e.top, e.bottom))),
        a &&
          ((i.cp2x = ul(i.cp2x, e.left, e.right)),
          (i.cp2y = ul(i.cp2y, e.top, e.bottom))));
}
function Q6(t, e, n, r, i) {
  let s, o, a, l;
  if (
    (e.spanGaps && (t = t.filter((c) => !c.skip)),
    e.cubicInterpolationMode === "monotone")
  )
    q6(t, i);
  else {
    let c = r ? t[t.length - 1] : t[0];
    for (s = 0, o = t.length; s < o; ++s)
      (a = t[s]),
        (l = Y6(c, a, t[Math.min(s + 1, o - (r ? 0 : 1)) % o], e.tension)),
        (a.cp1x = l.previous.x),
        (a.cp1y = l.previous.y),
        (a.cp2x = l.next.x),
        (a.cp2y = l.next.y),
        (c = a);
  }
  e.capBezierPoints && X6(t, n);
}
function c0() {
  return typeof window < "u" && typeof document < "u";
}
function u0(t) {
  let e = t.parentNode;
  return e && e.toString() === "[object ShadowRoot]" && (e = e.host), e;
}
function Fc(t, e, n) {
  let r;
  return (
    typeof t == "string"
      ? ((r = parseInt(t, 10)),
        t.indexOf("%") !== -1 && (r = (r / 100) * e.parentNode[n]))
      : (r = t),
    r
  );
}
const Eu = (t) => t.ownerDocument.defaultView.getComputedStyle(t, null);
function J6(t, e) {
  return Eu(t).getPropertyValue(e);
}
const Z6 = ["top", "right", "bottom", "left"];
function fi(t, e, n) {
  const r = {};
  n = n ? "-" + n : "";
  for (let i = 0; i < 4; i++) {
    const s = Z6[i];
    r[s] = parseFloat(t[e + "-" + s + n]) || 0;
  }
  return (r.width = r.left + r.right), (r.height = r.top + r.bottom), r;
}
const e7 = (t, e, n) => (t > 0 || e > 0) && (!n || !n.shadowRoot);
function t7(t, e) {
  const n = t.touches,
    r = n && n.length ? n[0] : t,
    { offsetX: i, offsetY: s } = r;
  let o = !1,
    a,
    l;
  if (e7(i, s, t.target)) (a = i), (l = s);
  else {
    const c = e.getBoundingClientRect();
    (a = r.clientX - c.left), (l = r.clientY - c.top), (o = !0);
  }
  return { x: a, y: l, box: o };
}
function Qr(t, e) {
  if ("native" in t) return t;
  const { canvas: n, currentDevicePixelRatio: r } = e,
    i = Eu(n),
    s = i.boxSizing === "border-box",
    o = fi(i, "padding"),
    a = fi(i, "border", "width"),
    { x: l, y: c, box: u } = t7(t, n),
    d = o.left + (u && a.left),
    h = o.top + (u && a.top);
  let { width: p, height: m } = e;
  return (
    s && ((p -= o.width + a.width), (m -= o.height + a.height)),
    {
      x: Math.round((((l - d) / p) * n.width) / r),
      y: Math.round((((c - h) / m) * n.height) / r),
    }
  );
}
function n7(t, e, n) {
  let r, i;
  if (e === void 0 || n === void 0) {
    const s = t && u0(t);
    if (!s) (e = t.clientWidth), (n = t.clientHeight);
    else {
      const o = s.getBoundingClientRect(),
        a = Eu(s),
        l = fi(a, "border", "width"),
        c = fi(a, "padding");
      (e = o.width - c.width - l.width),
        (n = o.height - c.height - l.height),
        (r = Fc(a.maxWidth, s, "clientWidth")),
        (i = Fc(a.maxHeight, s, "clientHeight"));
    }
  }
  return { width: e, height: n, maxWidth: r || Ic, maxHeight: i || Ic };
}
const dl = (t) => Math.round(t * 10) / 10;
function r7(t, e, n, r) {
  const i = Eu(t),
    s = fi(i, "margin"),
    o = Fc(i.maxWidth, t, "clientWidth") || Ic,
    a = Fc(i.maxHeight, t, "clientHeight") || Ic,
    l = n7(t, e, n);
  let { width: c, height: u } = l;
  if (i.boxSizing === "content-box") {
    const h = fi(i, "border", "width"),
      p = fi(i, "padding");
    (c -= p.width + h.width), (u -= p.height + h.height);
  }
  return (
    (c = Math.max(0, c - s.width)),
    (u = Math.max(0, r ? c / r : u - s.height)),
    (c = dl(Math.min(c, o, l.maxWidth))),
    (u = dl(Math.min(u, a, l.maxHeight))),
    c && !u && (u = dl(c / 2)),
    (e !== void 0 || n !== void 0) &&
      r &&
      l.height &&
      u > l.height &&
      ((u = l.height), (c = dl(Math.floor(u * r)))),
    { width: c, height: u }
  );
}
function t1(t, e, n) {
  const r = e || 1,
    i = Math.floor(t.height * r),
    s = Math.floor(t.width * r);
  (t.height = Math.floor(t.height)), (t.width = Math.floor(t.width));
  const o = t.canvas;
  return (
    o.style &&
      (n || (!o.style.height && !o.style.width)) &&
      ((o.style.height = `${t.height}px`), (o.style.width = `${t.width}px`)),
    t.currentDevicePixelRatio !== r || o.height !== i || o.width !== s
      ? ((t.currentDevicePixelRatio = r),
        (o.height = i),
        (o.width = s),
        t.ctx.setTransform(r, 0, 0, r, 0, 0),
        !0)
      : !1
  );
}
const i7 = (function () {
  let t = !1;
  try {
    const e = {
      get passive() {
        return (t = !0), !1;
      },
    };
    c0() &&
      (window.addEventListener("test", null, e),
      window.removeEventListener("test", null, e));
  } catch {}
  return t;
})();
function n1(t, e) {
  const n = J6(t, e),
    r = n && n.match(/^(\d+)(\.\d+)?px$/);
  return r ? +r[1] : void 0;
}
function Jr(t, e, n, r) {
  return { x: t.x + n * (e.x - t.x), y: t.y + n * (e.y - t.y) };
}
function s7(t, e, n, r) {
  return {
    x: t.x + n * (e.x - t.x),
    y:
      r === "middle"
        ? n < 0.5
          ? t.y
          : e.y
        : r === "after"
        ? n < 1
          ? t.y
          : e.y
        : n > 0
        ? e.y
        : t.y,
  };
}
function o7(t, e, n, r) {
  const i = { x: t.cp2x, y: t.cp2y },
    s = { x: e.cp1x, y: e.cp1y },
    o = Jr(t, i, n),
    a = Jr(i, s, n),
    l = Jr(s, e, n),
    c = Jr(o, a, n),
    u = Jr(a, l, n);
  return Jr(c, u, n);
}
const a7 = function (t, e) {
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
      xPlus(n, r) {
        return n - r;
      },
      leftForLtr(n, r) {
        return n - r;
      },
    };
  },
  l7 = function () {
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
function ds(t, e, n) {
  return t ? a7(e, n) : l7();
}
function _b(t, e) {
  let n, r;
  (e === "ltr" || e === "rtl") &&
    ((n = t.canvas.style),
    (r = [n.getPropertyValue("direction"), n.getPropertyPriority("direction")]),
    n.setProperty("direction", e, "important"),
    (t.prevTextDirection = r));
}
function bb(t, e) {
  e !== void 0 &&
    (delete t.prevTextDirection,
    t.canvas.style.setProperty("direction", e[0], e[1]));
}
function wb(t) {
  return t === "angle"
    ? { between: lb, compare: o6, normalize: ar }
    : { between: _o, compare: (e, n) => e - n, normalize: (e) => e };
}
function r1({ start: t, end: e, count: n, loop: r, style: i }) {
  return {
    start: t % n,
    end: e % n,
    loop: r && (e - t + 1) % n === 0,
    style: i,
  };
}
function c7(t, e, n) {
  const { property: r, start: i, end: s } = n,
    { between: o, normalize: a } = wb(r),
    l = e.length;
  let { start: c, end: u, loop: d } = t,
    h,
    p;
  if (d) {
    for (c += l, u += l, h = 0, p = l; h < p && o(a(e[c % l][r]), i, s); ++h)
      c--, u--;
    (c %= l), (u %= l);
  }
  return u < c && (u += l), { start: c, end: u, loop: d, style: t.style };
}
function u7(t, e, n) {
  if (!n) return [t];
  const { property: r, start: i, end: s } = n,
    o = e.length,
    { compare: a, between: l, normalize: c } = wb(r),
    { start: u, end: d, loop: h, style: p } = c7(t, e, n),
    m = [];
  let g = !1,
    v = null,
    y,
    x,
    _;
  const w = () => l(i, _, y) && a(i, _) !== 0,
    E = () => a(s, y) === 0 || l(s, _, y),
    S = () => g || w(),
    C = () => !g || E();
  for (let k = u, L = u; k <= d; ++k)
    (x = e[k % o]),
      !x.skip &&
        ((y = c(x[r])),
        y !== _ &&
          ((g = l(y, i, s)),
          v === null && S() && (v = a(y, i) === 0 ? k : L),
          v !== null &&
            C() &&
            (m.push(r1({ start: v, end: k, loop: h, count: o, style: p })),
            (v = null)),
          (L = k),
          (_ = y)));
  return (
    v !== null && m.push(r1({ start: v, end: d, loop: h, count: o, style: p })),
    m
  );
}
function d7(t, e) {
  const n = [],
    r = t.segments;
  for (let i = 0; i < r.length; i++) {
    const s = u7(r[i], t.points, e);
    s.length && n.push(...s);
  }
  return n;
}
function f7(t, e, n, r) {
  let i = 0,
    s = e - 1;
  if (n && !r) for (; i < e && !t[i].skip; ) i++;
  for (; i < e && t[i].skip; ) i++;
  for (i %= e, n && (s += i); s > i && t[s % e].skip; ) s--;
  return (s %= e), { start: i, end: s };
}
function h7(t, e, n, r) {
  const i = t.length,
    s = [];
  let o = e,
    a = t[e],
    l;
  for (l = e + 1; l <= n; ++l) {
    const c = t[l % i];
    c.skip || c.stop
      ? a.skip ||
        ((r = !1),
        s.push({ start: e % i, end: (l - 1) % i, loop: r }),
        (e = o = c.stop ? l : null))
      : ((o = l), a.skip && (e = l)),
      (a = c);
  }
  return o !== null && s.push({ start: e % i, end: o % i, loop: r }), s;
}
function p7(t, e) {
  const n = t.points,
    r = t.options.spanGaps,
    i = n.length;
  if (!i) return [];
  const s = !!t._loop,
    { start: o, end: a } = f7(n, i, s, r);
  if (r === !0) return i1(t, [{ start: o, end: a, loop: s }], n, e);
  const l = a < o ? a + i : a,
    c = !!t._fullLoop && o === 0 && a === i - 1;
  return i1(t, h7(n, o, l, c), n, e);
}
function i1(t, e, n, r) {
  return !r || !r.setContext || !n ? e : m7(t, e, n, r);
}
function m7(t, e, n, r) {
  const i = t._chart.getContext(),
    s = s1(t.options),
    {
      _datasetIndex: o,
      options: { spanGaps: a },
    } = t,
    l = n.length,
    c = [];
  let u = s,
    d = e[0].start,
    h = d;
  function p(m, g, v, y) {
    const x = a ? -1 : 1;
    if (m !== g) {
      for (m += l; n[m % l].skip; ) m -= x;
      for (; n[g % l].skip; ) g += x;
      m % l !== g % l &&
        (c.push({ start: m % l, end: g % l, loop: v, style: y }),
        (u = y),
        (d = g % l));
    }
  }
  for (const m of e) {
    d = a ? d : m.start;
    let g = n[d % l],
      v;
    for (h = d + 1; h <= m.end; h++) {
      const y = n[h % l];
      (v = s1(
        r.setContext(
          Ti(i, {
            type: "segment",
            p0: g,
            p1: y,
            p0DataIndex: (h - 1) % l,
            p1DataIndex: h % l,
            datasetIndex: o,
          }),
        ),
      )),
        g7(v, u) && p(d, h - 1, m.loop, u),
        (g = y),
        (u = v);
    }
    d < h - 1 && p(d, h - 1, m.loop, u);
  }
  return c;
}
function s1(t) {
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
function g7(t, e) {
  if (!e) return !1;
  const n = [],
    r = function (i, s) {
      return t0(s) ? (n.includes(s) || n.push(s), n.indexOf(s)) : s;
    };
  return JSON.stringify(t, r) !== JSON.stringify(e, r);
}
/*!
 * Chart.js v4.4.3
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */ class y7 {
  constructor() {
    (this._request = null),
      (this._charts = new Map()),
      (this._running = !1),
      (this._lastDate = void 0);
  }
  _notify(e, n, r, i) {
    const s = n.listeners[i],
      o = n.duration;
    s.forEach((a) =>
      a({
        chart: e,
        initial: n.initial,
        numSteps: o,
        currentStep: Math.min(r - n.start, o),
      }),
    );
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = ub.call(window, () => {
        this._update(),
          (this._request = null),
          this._running && this._refresh();
      })));
  }
  _update(e = Date.now()) {
    let n = 0;
    this._charts.forEach((r, i) => {
      if (!r.running || !r.items.length) return;
      const s = r.items;
      let o = s.length - 1,
        a = !1,
        l;
      for (; o >= 0; --o)
        (l = s[o]),
          l._active
            ? (l._total > r.duration && (r.duration = l._total),
              l.tick(e),
              (a = !0))
            : ((s[o] = s[s.length - 1]), s.pop());
      a && (i.draw(), this._notify(i, r, e, "progress")),
        s.length ||
          ((r.running = !1),
          this._notify(i, r, e, "complete"),
          (r.initial = !1)),
        (n += s.length);
    }),
      (this._lastDate = e),
      n === 0 && (this._running = !1);
  }
  _getAnims(e) {
    const n = this._charts;
    let r = n.get(e);
    return (
      r ||
        ((r = {
          running: !1,
          initial: !0,
          items: [],
          listeners: { complete: [], progress: [] },
        }),
        n.set(e, r)),
      r
    );
  }
  listen(e, n, r) {
    this._getAnims(e).listeners[n].push(r);
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
      (n.duration = n.items.reduce((r, i) => Math.max(r, i._duration), 0)),
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
    const r = n.items;
    let i = r.length - 1;
    for (; i >= 0; --i) r[i].cancel();
    (n.items = []), this._notify(e, n, Date.now(), "complete");
  }
  remove(e) {
    return this._charts.delete(e);
  }
}
var Rn = new y7();
const o1 = "transparent",
  v7 = {
    boolean(t, e, n) {
      return n > 0.5 ? e : t;
    },
    color(t, e, n) {
      const r = qg(t || o1),
        i = r.valid && qg(e || o1);
      return i && i.valid ? i.mix(r, n).hexString() : e;
    },
    number(t, e, n) {
      return t + (e - t) * n;
    },
  };
class x7 {
  constructor(e, n, r, i) {
    const s = n[r];
    i = cl([e.to, i, s, e.from]);
    const o = cl([e.from, s, i]);
    (this._active = !0),
      (this._fn = e.fn || v7[e.type || typeof o]),
      (this._easing = Io[e.easing] || Io.linear),
      (this._start = Math.floor(Date.now() + (e.delay || 0))),
      (this._duration = this._total = Math.floor(e.duration)),
      (this._loop = !!e.loop),
      (this._target = n),
      (this._prop = r),
      (this._from = o),
      (this._to = i),
      (this._promises = void 0);
  }
  active() {
    return this._active;
  }
  update(e, n, r) {
    if (this._active) {
      this._notify(!1);
      const i = this._target[this._prop],
        s = r - this._start,
        o = this._duration - s;
      (this._start = r),
        (this._duration = Math.floor(Math.max(o, e.duration))),
        (this._total += s),
        (this._loop = !!e.loop),
        (this._to = cl([e.to, n, i, e.from])),
        (this._from = cl([e.from, i, n]));
    }
  }
  cancel() {
    this._active &&
      (this.tick(Date.now()), (this._active = !1), this._notify(!1));
  }
  tick(e) {
    const n = e - this._start,
      r = this._duration,
      i = this._prop,
      s = this._from,
      o = this._loop,
      a = this._to;
    let l;
    if (((this._active = s !== a && (o || n < r)), !this._active)) {
      (this._target[i] = a), this._notify(!0);
      return;
    }
    if (n < 0) {
      this._target[i] = s;
      return;
    }
    (l = (n / r) % 2),
      (l = o && l > 1 ? 2 - l : l),
      (l = this._easing(Math.min(1, Math.max(0, l)))),
      (this._target[i] = this._fn(s, a, l));
  }
  wait() {
    const e = this._promises || (this._promises = []);
    return new Promise((n, r) => {
      e.push({ res: n, rej: r });
    });
  }
  _notify(e) {
    const n = e ? "res" : "rej",
      r = this._promises || [];
    for (let i = 0; i < r.length; i++) r[i][n]();
  }
}
class Eb {
  constructor(e, n) {
    (this._chart = e), (this._properties = new Map()), this.configure(n);
  }
  configure(e) {
    if (!de(e)) return;
    const n = Object.keys(Pe.animation),
      r = this._properties;
    Object.getOwnPropertyNames(e).forEach((i) => {
      const s = e[i];
      if (!de(s)) return;
      const o = {};
      for (const a of n) o[a] = s[a];
      ((We(s.properties) && s.properties) || [i]).forEach((a) => {
        (a === i || !r.has(a)) && r.set(a, o);
      });
    });
  }
  _animateOptions(e, n) {
    const r = n.options,
      i = b7(e, r);
    if (!i) return [];
    const s = this._createAnimations(i, r);
    return (
      r.$shared &&
        _7(e.options.$animations, r).then(
          () => {
            e.options = r;
          },
          () => {},
        ),
      s
    );
  }
  _createAnimations(e, n) {
    const r = this._properties,
      i = [],
      s = e.$animations || (e.$animations = {}),
      o = Object.keys(n),
      a = Date.now();
    let l;
    for (l = o.length - 1; l >= 0; --l) {
      const c = o[l];
      if (c.charAt(0) === "$") continue;
      if (c === "options") {
        i.push(...this._animateOptions(e, n));
        continue;
      }
      const u = n[c];
      let d = s[c];
      const h = r.get(c);
      if (d)
        if (h && d.active()) {
          d.update(h, u, a);
          continue;
        } else d.cancel();
      if (!h || !h.duration) {
        e[c] = u;
        continue;
      }
      (s[c] = d = new x7(h, e, c, u)), i.push(d);
    }
    return i;
  }
  update(e, n) {
    if (this._properties.size === 0) {
      Object.assign(e, n);
      return;
    }
    const r = this._createAnimations(e, n);
    if (r.length) return Rn.add(this._chart, r), !0;
  }
}
function _7(t, e) {
  const n = [],
    r = Object.keys(e);
  for (let i = 0; i < r.length; i++) {
    const s = t[r[i]];
    s && s.active() && n.push(s.wait());
  }
  return Promise.all(n);
}
function b7(t, e) {
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
function a1(t, e) {
  const n = (t && t.options) || {},
    r = n.reverse,
    i = n.min === void 0 ? e : 0,
    s = n.max === void 0 ? e : 0;
  return { start: r ? s : i, end: r ? i : s };
}
function w7(t, e, n) {
  if (n === !1) return !1;
  const r = a1(t, n),
    i = a1(e, n);
  return { top: i.end, right: r.end, bottom: i.start, left: r.start };
}
function E7(t) {
  let e, n, r, i;
  return (
    de(t)
      ? ((e = t.top), (n = t.right), (r = t.bottom), (i = t.left))
      : (e = n = r = i = t),
    { top: e, right: n, bottom: r, left: i, disabled: t === !1 }
  );
}
function Sb(t, e) {
  const n = [],
    r = t._getSortedDatasetMetas(e);
  let i, s;
  for (i = 0, s = r.length; i < s; ++i) n.push(r[i].index);
  return n;
}
function l1(t, e, n, r = {}) {
  const i = t.keys,
    s = r.mode === "single";
  let o, a, l, c;
  if (e !== null) {
    for (o = 0, a = i.length; o < a; ++o) {
      if (((l = +i[o]), l === n)) {
        if (r.all) continue;
        break;
      }
      (c = t.values[l]), it(c) && (s || e === 0 || Ts(e) === Ts(c)) && (e += c);
    }
    return e;
  }
}
function S7(t, e) {
  const { iScale: n, vScale: r } = e,
    i = n.axis === "x" ? "x" : "y",
    s = r.axis === "x" ? "x" : "y",
    o = Object.keys(t),
    a = new Array(o.length);
  let l, c, u;
  for (l = 0, c = o.length; l < c; ++l)
    (u = o[l]), (a[l] = { [i]: u, [s]: t[u] });
  return a;
}
function c1(t, e) {
  const n = t && t.options.stacked;
  return n || (n === void 0 && e.stack !== void 0);
}
function C7(t, e, n) {
  return `${t.id}.${e.id}.${n.stack || n.type}`;
}
function k7(t) {
  const { min: e, max: n, minDefined: r, maxDefined: i } = t.getUserBounds();
  return {
    min: r ? e : Number.NEGATIVE_INFINITY,
    max: i ? n : Number.POSITIVE_INFINITY,
  };
}
function T7(t, e, n) {
  const r = t[e] || (t[e] = {});
  return r[n] || (r[n] = {});
}
function u1(t, e, n, r) {
  for (const i of e.getMatchingVisibleMetas(r).reverse()) {
    const s = t[i.index];
    if ((n && s > 0) || (!n && s < 0)) return i.index;
  }
  return null;
}
function d1(t, e) {
  const { chart: n, _cachedMeta: r } = t,
    i = n._stacks || (n._stacks = {}),
    { iScale: s, vScale: o, index: a } = r,
    l = s.axis,
    c = o.axis,
    u = C7(s, o, r),
    d = e.length;
  let h;
  for (let p = 0; p < d; ++p) {
    const m = e[p],
      { [l]: g, [c]: v } = m,
      y = m._stacks || (m._stacks = {});
    (h = y[c] = T7(i, u, g)),
      (h[a] = v),
      (h._top = u1(h, o, !0, r.type)),
      (h._bottom = u1(h, o, !1, r.type));
    const x = h._visualValues || (h._visualValues = {});
    x[a] = v;
  }
}
function xd(t, e) {
  const n = t.scales;
  return Object.keys(n)
    .filter((r) => n[r].axis === e)
    .shift();
}
function O7(t, e) {
  return Ti(t, {
    active: !1,
    dataset: void 0,
    datasetIndex: e,
    index: e,
    mode: "default",
    type: "dataset",
  });
}
function A7(t, e, n) {
  return Ti(t, {
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
function so(t, e) {
  const n = t.controller.index,
    r = t.vScale && t.vScale.axis;
  if (r) {
    e = e || t._parsed;
    for (const i of e) {
      const s = i._stacks;
      if (!s || s[r] === void 0 || s[r][n] === void 0) return;
      delete s[r][n],
        s[r]._visualValues !== void 0 &&
          s[r]._visualValues[n] !== void 0 &&
          delete s[r]._visualValues[n];
    }
  }
}
const _d = (t) => t === "reset" || t === "none",
  f1 = (t, e) => (e ? t : Object.assign({}, t)),
  N7 = (t, e, n) =>
    t && !e.hidden && e._stacked && { keys: Sb(n, !0), values: null };
class $o {
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
      (e._stacked = c1(e.vScale, e)),
      this.addElements(),
      this.options.fill &&
        !this.chart.isPluginEnabled("filler") &&
        console.warn(
          "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options",
        );
  }
  updateIndex(e) {
    this.index !== e && so(this._cachedMeta), (this.index = e);
  }
  linkScales() {
    const e = this.chart,
      n = this._cachedMeta,
      r = this.getDataset(),
      i = (d, h, p, m) => (d === "x" ? h : d === "r" ? m : p),
      s = (n.xAxisID = ae(r.xAxisID, xd(e, "x"))),
      o = (n.yAxisID = ae(r.yAxisID, xd(e, "y"))),
      a = (n.rAxisID = ae(r.rAxisID, xd(e, "r"))),
      l = n.indexAxis,
      c = (n.iAxisID = i(l, s, o, a)),
      u = (n.vAxisID = i(l, o, s, a));
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
    this._data && Yg(this._data, this), e._stacked && so(e);
  }
  _dataCheck() {
    const e = this.getDataset(),
      n = e.data || (e.data = []),
      r = this._data;
    if (de(n)) {
      const i = this._cachedMeta;
      this._data = S7(n, i);
    } else if (r !== n) {
      if (r) {
        Yg(r, this);
        const i = this._cachedMeta;
        so(i), (i._parsed = []);
      }
      n && Object.isExtensible(n) && u6(n, this),
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
      r = this.getDataset();
    let i = !1;
    this._dataCheck();
    const s = n._stacked;
    (n._stacked = c1(n.vScale, n)),
      n.stack !== r.stack && ((i = !0), so(n), (n.stack = r.stack)),
      this._resyncElements(e),
      (i || s !== n._stacked) && d1(this, n._parsed);
  }
  configure() {
    const e = this.chart.config,
      n = e.datasetScopeKeys(this._type),
      r = e.getOptionScopes(this.getDataset(), n, !0);
    (this.options = e.createResolver(r, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {});
  }
  parse(e, n) {
    const { _cachedMeta: r, _data: i } = this,
      { iScale: s, _stacked: o } = r,
      a = s.axis;
    let l = e === 0 && n === i.length ? !0 : r._sorted,
      c = e > 0 && r._parsed[e - 1],
      u,
      d,
      h;
    if (this._parsing === !1) (r._parsed = i), (r._sorted = !0), (h = i);
    else {
      We(i[e])
        ? (h = this.parseArrayData(r, i, e, n))
        : de(i[e])
        ? (h = this.parseObjectData(r, i, e, n))
        : (h = this.parsePrimitiveData(r, i, e, n));
      const p = () => d[a] === null || (c && d[a] < c[a]);
      for (u = 0; u < n; ++u)
        (r._parsed[u + e] = d = h[u]), l && (p() && (l = !1), (c = d));
      r._sorted = l;
    }
    o && d1(this, h);
  }
  parsePrimitiveData(e, n, r, i) {
    const { iScale: s, vScale: o } = e,
      a = s.axis,
      l = o.axis,
      c = s.getLabels(),
      u = s === o,
      d = new Array(i);
    let h, p, m;
    for (h = 0, p = i; h < p; ++h)
      (m = h + r),
        (d[h] = { [a]: u || s.parse(c[m], m), [l]: o.parse(n[m], m) });
    return d;
  }
  parseArrayData(e, n, r, i) {
    const { xScale: s, yScale: o } = e,
      a = new Array(i);
    let l, c, u, d;
    for (l = 0, c = i; l < c; ++l)
      (u = l + r),
        (d = n[u]),
        (a[l] = { x: s.parse(d[0], u), y: o.parse(d[1], u) });
    return a;
  }
  parseObjectData(e, n, r, i) {
    const { xScale: s, yScale: o } = e,
      { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing,
      c = new Array(i);
    let u, d, h, p;
    for (u = 0, d = i; u < d; ++u)
      (h = u + r),
        (p = n[h]),
        (c[u] = { x: s.parse(Dc(p, a), h), y: o.parse(Dc(p, l), h) });
    return c;
  }
  getParsed(e) {
    return this._cachedMeta._parsed[e];
  }
  getDataElement(e) {
    return this._cachedMeta.data[e];
  }
  applyStack(e, n, r) {
    const i = this.chart,
      s = this._cachedMeta,
      o = n[e.axis],
      a = { keys: Sb(i, !0), values: n._stacks[e.axis]._visualValues };
    return l1(a, o, s.index, { mode: r });
  }
  updateRangeFromParsed(e, n, r, i) {
    const s = r[n.axis];
    let o = s === null ? NaN : s;
    const a = i && r._stacks[n.axis];
    i && a && ((i.values = a), (o = l1(i, s, this._cachedMeta.index))),
      (e.min = Math.min(e.min, o)),
      (e.max = Math.max(e.max, o));
  }
  getMinMax(e, n) {
    const r = this._cachedMeta,
      i = r._parsed,
      s = r._sorted && e === r.iScale,
      o = i.length,
      a = this._getOtherScale(e),
      l = N7(n, r, this.chart),
      c = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: u, max: d } = k7(a);
    let h, p;
    function m() {
      p = i[h];
      const g = p[a.axis];
      return !it(p[e.axis]) || u > g || d < g;
    }
    for (
      h = 0;
      h < o && !(!m() && (this.updateRangeFromParsed(c, e, p, l), s));
      ++h
    );
    if (s) {
      for (h = o - 1; h >= 0; --h)
        if (!m()) {
          this.updateRangeFromParsed(c, e, p, l);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(e) {
    const n = this._cachedMeta._parsed,
      r = [];
    let i, s, o;
    for (i = 0, s = n.length; i < s; ++i)
      (o = n[i][e.axis]), it(o) && r.push(o);
    return r;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(e) {
    const n = this._cachedMeta,
      r = n.iScale,
      i = n.vScale,
      s = this.getParsed(e);
    return {
      label: r ? "" + r.getLabelForValue(s[r.axis]) : "",
      value: i ? "" + i.getLabelForValue(s[i.axis]) : "",
    };
  }
  _update(e) {
    const n = this._cachedMeta;
    this.update(e || "default"),
      (n._clip = E7(
        ae(this.options.clip, w7(n.xScale, n.yScale, this.getMaxOverflow())),
      ));
  }
  update(e) {}
  draw() {
    const e = this._ctx,
      n = this.chart,
      r = this._cachedMeta,
      i = r.data || [],
      s = n.chartArea,
      o = [],
      a = this._drawStart || 0,
      l = this._drawCount || i.length - a,
      c = this.options.drawActiveElementsOnTop;
    let u;
    for (r.dataset && r.dataset.draw(e, s, a, l), u = a; u < a + l; ++u) {
      const d = i[u];
      d.hidden || (d.active && c ? o.push(d) : d.draw(e, s));
    }
    for (u = 0; u < o.length; ++u) o[u].draw(e, s);
  }
  getStyle(e, n) {
    const r = n ? "active" : "default";
    return e === void 0 && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(r)
      : this.resolveDataElementOptions(e || 0, r);
  }
  getContext(e, n, r) {
    const i = this.getDataset();
    let s;
    if (e >= 0 && e < this._cachedMeta.data.length) {
      const o = this._cachedMeta.data[e];
      (s = o.$context || (o.$context = A7(this.getContext(), e, o))),
        (s.parsed = this.getParsed(e)),
        (s.raw = i.data[e]),
        (s.index = s.dataIndex = e);
    } else
      (s =
        this.$context ||
        (this.$context = O7(this.chart.getContext(), this.index))),
        (s.dataset = i),
        (s.index = s.datasetIndex = this.index);
    return (s.active = !!n), (s.mode = r), s;
  }
  resolveDatasetElementOptions(e) {
    return this._resolveElementOptions(this.datasetElementType.id, e);
  }
  resolveDataElementOptions(e, n) {
    return this._resolveElementOptions(this.dataElementType.id, n, e);
  }
  _resolveElementOptions(e, n = "default", r) {
    const i = n === "active",
      s = this._cachedDataOpts,
      o = e + "-" + n,
      a = s[o],
      l = this.enableOptionSharing && Mc(r);
    if (a) return f1(a, l);
    const c = this.chart.config,
      u = c.datasetElementScopeKeys(this._type, e),
      d = i ? [`${e}Hover`, "hover", e, ""] : [e, ""],
      h = c.getOptionScopes(this.getDataset(), u),
      p = Object.keys(Pe.elements[e]),
      m = () => this.getContext(r, i, n),
      g = c.resolveNamedOptions(h, p, m, d);
    return g.$shared && ((g.$shared = l), (s[o] = Object.freeze(f1(g, l)))), g;
  }
  _resolveAnimations(e, n, r) {
    const i = this.chart,
      s = this._cachedDataOpts,
      o = `animation-${n}`,
      a = s[o];
    if (a) return a;
    let l;
    if (i.options.animation !== !1) {
      const u = this.chart.config,
        d = u.datasetAnimationScopeKeys(this._type, n),
        h = u.getOptionScopes(this.getDataset(), d);
      l = u.createResolver(h, this.getContext(e, r, n));
    }
    const c = new Eb(i, l && l.animations);
    return l && l._cacheable && (s[o] = Object.freeze(c)), c;
  }
  getSharedOptions(e) {
    if (e.$shared)
      return (
        this._sharedOptions || (this._sharedOptions = Object.assign({}, e))
      );
  }
  includeOptions(e, n) {
    return !n || _d(e) || this.chart._animationsDisabled;
  }
  _getSharedOptions(e, n) {
    const r = this.resolveDataElementOptions(e, n),
      i = this._sharedOptions,
      s = this.getSharedOptions(r),
      o = this.includeOptions(n, s) || s !== i;
    return (
      this.updateSharedOptions(s, n, r), { sharedOptions: s, includeOptions: o }
    );
  }
  updateElement(e, n, r, i) {
    _d(i) ? Object.assign(e, r) : this._resolveAnimations(n, i).update(e, r);
  }
  updateSharedOptions(e, n, r) {
    e && !_d(n) && this._resolveAnimations(void 0, n).update(e, r);
  }
  _setStyle(e, n, r, i) {
    e.active = i;
    const s = this.getStyle(n, i);
    this._resolveAnimations(n, r, i).update(e, {
      options: (!i && this.getSharedOptions(s)) || s,
    });
  }
  removeHoverStyle(e, n, r) {
    this._setStyle(e, r, "active", !1);
  }
  setHoverStyle(e, n, r) {
    this._setStyle(e, r, "active", !0);
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
      r = this._cachedMeta.data;
    for (const [a, l, c] of this._syncList) this[a](l, c);
    this._syncList = [];
    const i = r.length,
      s = n.length,
      o = Math.min(s, i);
    o && this.parse(0, o),
      s > i
        ? this._insertElements(i, s - i, e)
        : s < i && this._removeElements(s, i - s);
  }
  _insertElements(e, n, r = !0) {
    const i = this._cachedMeta,
      s = i.data,
      o = e + n;
    let a;
    const l = (c) => {
      for (c.length += n, a = c.length - 1; a >= o; a--) c[a] = c[a - n];
    };
    for (l(s), a = e; a < o; ++a) s[a] = new this.dataElementType();
    this._parsing && l(i._parsed),
      this.parse(e, n),
      r && this.updateElements(s, e, n, "reset");
  }
  updateElements(e, n, r, i) {}
  _removeElements(e, n) {
    const r = this._cachedMeta;
    if (this._parsing) {
      const i = r._parsed.splice(e, n);
      r._stacked && so(r, i);
    }
    r.data.splice(e, n);
  }
  _sync(e) {
    if (this._parsing) this._syncList.push(e);
    else {
      const [n, r, i] = e;
      this[n](r, i);
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
    const r = arguments.length - 2;
    r && this._sync(["_insertElements", e, r]);
  }
  _onDataUnshift() {
    this._sync(["_insertElements", 0, arguments.length]);
  }
}
ee($o, "defaults", {}),
  ee($o, "datasetElementType", null),
  ee($o, "dataElementType", null);
class Wl extends $o {
  initialize() {
    (this.enableOptionSharing = !0),
      (this.supportsDecimation = !0),
      super.initialize();
  }
  update(e) {
    const n = this._cachedMeta,
      { dataset: r, data: i = [], _dataset: s } = n,
      o = this.chart._animationsDisabled;
    let { start: a, count: l } = p6(n, i, o);
    (this._drawStart = a),
      (this._drawCount = l),
      m6(n) && ((a = 0), (l = i.length)),
      (r._chart = this.chart),
      (r._datasetIndex = this.index),
      (r._decimated = !!s._decimated),
      (r.points = i);
    const c = this.resolveDatasetElementOptions(e);
    this.options.showLine || (c.borderWidth = 0),
      (c.segment = this.options.segment),
      this.updateElement(r, void 0, { animated: !o, options: c }, e),
      this.updateElements(i, a, l, e);
  }
  updateElements(e, n, r, i) {
    const s = i === "reset",
      { iScale: o, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta,
      { sharedOptions: u, includeOptions: d } = this._getSharedOptions(n, i),
      h = o.axis,
      p = a.axis,
      { spanGaps: m, segment: g } = this.options,
      v = ha(m) ? m : Number.POSITIVE_INFINITY,
      y = this.chart._animationsDisabled || s || i === "none",
      x = n + r,
      _ = e.length;
    let w = n > 0 && this.getParsed(n - 1);
    for (let E = 0; E < _; ++E) {
      const S = e[E],
        C = y ? S : {};
      if (E < n || E >= x) {
        C.skip = !0;
        continue;
      }
      const k = this.getParsed(E),
        L = Ae(k[p]),
        j = (C[h] = o.getPixelForValue(k[h], E)),
        $ = (C[p] =
          s || L
            ? a.getBasePixel()
            : a.getPixelForValue(l ? this.applyStack(a, k, l) : k[p], E));
      (C.skip = isNaN(j) || isNaN($) || L),
        (C.stop = E > 0 && Math.abs(k[h] - w[h]) > v),
        g && ((C.parsed = k), (C.raw = c.data[E])),
        d &&
          (C.options =
            u || this.resolveDataElementOptions(E, S.active ? "active" : i)),
        y || this.updateElement(S, E, C, i),
        (w = k);
    }
  }
  getMaxOverflow() {
    const e = this._cachedMeta,
      n = e.dataset,
      r = (n.options && n.options.borderWidth) || 0,
      i = e.data || [];
    if (!i.length) return r;
    const s = i[0].size(this.resolveDataElementOptions(0)),
      o = i[i.length - 1].size(this.resolveDataElementOptions(i.length - 1));
    return Math.max(r, s, o) / 2;
  }
  draw() {
    const e = this._cachedMeta;
    e.dataset.updateControlPoints(this.chart.chartArea, e.iScale.axis),
      super.draw();
  }
}
ee(Wl, "id", "line"),
  ee(Wl, "defaults", {
    datasetElementType: "line",
    dataElementType: "point",
    showLine: !0,
    spanGaps: !1,
  }),
  ee(Wl, "overrides", {
    scales: { _index_: { type: "category" }, _value_: { type: "linear" } },
  });
function Yr() {
  throw new Error(
    "This method is not implemented: Check that a complete date adapter is provided.",
  );
}
class d0 {
  constructor(e) {
    ee(this, "options");
    this.options = e || {};
  }
  static override(e) {
    Object.assign(d0.prototype, e);
  }
  init() {}
  formats() {
    return Yr();
  }
  parse() {
    return Yr();
  }
  format() {
    return Yr();
  }
  add() {
    return Yr();
  }
  diff() {
    return Yr();
  }
  startOf() {
    return Yr();
  }
  endOf() {
    return Yr();
  }
}
var P7 = { _date: d0 };
function L7(t, e, n, r) {
  const { controller: i, data: s, _sorted: o } = t,
    a = i._cachedMeta.iScale;
  if (a && e === a.axis && e !== "r" && o && s.length) {
    const l = a._reversePixels ? l6 : ii;
    if (r) {
      if (i._sharedOptions) {
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
function Pa(t, e, n, r, i) {
  const s = t.getSortedVisibleDatasetMetas(),
    o = n[e];
  for (let a = 0, l = s.length; a < l; ++a) {
    const { index: c, data: u } = s[a],
      { lo: d, hi: h } = L7(s[a], e, o, i);
    for (let p = d; p <= h; ++p) {
      const m = u[p];
      m.skip || r(m, c, p);
    }
  }
}
function j7(t) {
  const e = t.indexOf("x") !== -1,
    n = t.indexOf("y") !== -1;
  return function (r, i) {
    const s = e ? Math.abs(r.x - i.x) : 0,
      o = n ? Math.abs(r.y - i.y) : 0;
    return Math.sqrt(Math.pow(s, 2) + Math.pow(o, 2));
  };
}
function bd(t, e, n, r, i) {
  const s = [];
  return (
    (!i && !t.isPointInArea(e)) ||
      Pa(
        t,
        n,
        e,
        function (a, l, c) {
          (!i && !pa(a, t.chartArea, 0)) ||
            (a.inRange(e.x, e.y, r) &&
              s.push({ element: a, datasetIndex: l, index: c }));
        },
        !0,
      ),
    s
  );
}
function R7(t, e, n, r) {
  let i = [];
  function s(o, a, l) {
    const { startAngle: c, endAngle: u } = o.getProps(
        ["startAngle", "endAngle"],
        r,
      ),
      { angle: d } = s6(o, { x: e.x, y: e.y });
    lb(d, c, u) && i.push({ element: o, datasetIndex: a, index: l });
  }
  return Pa(t, n, e, s), i;
}
function D7(t, e, n, r, i, s) {
  let o = [];
  const a = j7(n);
  let l = Number.POSITIVE_INFINITY;
  function c(u, d, h) {
    const p = u.inRange(e.x, e.y, i);
    if (r && !p) return;
    const m = u.getCenterPoint(i);
    if (!(!!s || t.isPointInArea(m)) && !p) return;
    const v = a(e, m);
    v < l
      ? ((o = [{ element: u, datasetIndex: d, index: h }]), (l = v))
      : v === l && o.push({ element: u, datasetIndex: d, index: h });
  }
  return Pa(t, n, e, c), o;
}
function wd(t, e, n, r, i, s) {
  return !s && !t.isPointInArea(e)
    ? []
    : n === "r" && !r
    ? R7(t, e, n, i)
    : D7(t, e, n, r, i, s);
}
function h1(t, e, n, r, i) {
  const s = [],
    o = n === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return (
    Pa(t, n, e, (l, c, u) => {
      l[o](e[n], i) &&
        (s.push({ element: l, datasetIndex: c, index: u }),
        (a = a || l.inRange(e.x, e.y, i)));
    }),
    r && !a ? [] : s
  );
}
var M7 = {
  evaluateInteractionItems: Pa,
  modes: {
    index(t, e, n, r) {
      const i = Qr(e, t),
        s = n.axis || "x",
        o = n.includeInvisible || !1,
        a = n.intersect ? bd(t, i, s, r, o) : wd(t, i, s, !1, r, o),
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
    dataset(t, e, n, r) {
      const i = Qr(e, t),
        s = n.axis || "xy",
        o = n.includeInvisible || !1;
      let a = n.intersect ? bd(t, i, s, r, o) : wd(t, i, s, !1, r, o);
      if (a.length > 0) {
        const l = a[0].datasetIndex,
          c = t.getDatasetMeta(l).data;
        a = [];
        for (let u = 0; u < c.length; ++u)
          a.push({ element: c[u], datasetIndex: l, index: u });
      }
      return a;
    },
    point(t, e, n, r) {
      const i = Qr(e, t),
        s = n.axis || "xy",
        o = n.includeInvisible || !1;
      return bd(t, i, s, r, o);
    },
    nearest(t, e, n, r) {
      const i = Qr(e, t),
        s = n.axis || "xy",
        o = n.includeInvisible || !1;
      return wd(t, i, s, n.intersect, r, o);
    },
    x(t, e, n, r) {
      const i = Qr(e, t);
      return h1(t, i, "x", n.intersect, r);
    },
    y(t, e, n, r) {
      const i = Qr(e, t);
      return h1(t, i, "y", n.intersect, r);
    },
  },
};
const Cb = ["left", "top", "right", "bottom"];
function oo(t, e) {
  return t.filter((n) => n.pos === e);
}
function p1(t, e) {
  return t.filter((n) => Cb.indexOf(n.pos) === -1 && n.box.axis === e);
}
function ao(t, e) {
  return t.sort((n, r) => {
    const i = e ? r : n,
      s = e ? n : r;
    return i.weight === s.weight ? i.index - s.index : i.weight - s.weight;
  });
}
function I7(t) {
  const e = [];
  let n, r, i, s, o, a;
  for (n = 0, r = (t || []).length; n < r; ++n)
    (i = t[n]),
      ({
        position: s,
        options: { stack: o, stackWeight: a = 1 },
      } = i),
      e.push({
        index: n,
        box: i,
        pos: s,
        horizontal: i.isHorizontal(),
        weight: i.weight,
        stack: o && s + o,
        stackWeight: a,
      });
  return e;
}
function F7(t) {
  const e = {};
  for (const n of t) {
    const { stack: r, pos: i, stackWeight: s } = n;
    if (!r || !Cb.includes(i)) continue;
    const o = e[r] || (e[r] = { count: 0, placed: 0, weight: 0, size: 0 });
    o.count++, (o.weight += s);
  }
  return e;
}
function B7(t, e) {
  const n = F7(t),
    { vBoxMaxWidth: r, hBoxMaxHeight: i } = e;
  let s, o, a;
  for (s = 0, o = t.length; s < o; ++s) {
    a = t[s];
    const { fullSize: l } = a.box,
      c = n[a.stack],
      u = c && a.stackWeight / c.weight;
    a.horizontal
      ? ((a.width = u ? u * r : l && e.availableWidth), (a.height = i))
      : ((a.width = r), (a.height = u ? u * i : l && e.availableHeight));
  }
  return n;
}
function $7(t) {
  const e = I7(t),
    n = ao(
      e.filter((c) => c.box.fullSize),
      !0,
    ),
    r = ao(oo(e, "left"), !0),
    i = ao(oo(e, "right")),
    s = ao(oo(e, "top"), !0),
    o = ao(oo(e, "bottom")),
    a = p1(e, "x"),
    l = p1(e, "y");
  return {
    fullSize: n,
    leftAndTop: r.concat(s),
    rightAndBottom: i.concat(l).concat(o).concat(a),
    chartArea: oo(e, "chartArea"),
    vertical: r.concat(i).concat(l),
    horizontal: s.concat(o).concat(a),
  };
}
function m1(t, e, n, r) {
  return Math.max(t[n], e[n]) + Math.max(t[r], e[r]);
}
function kb(t, e) {
  (t.top = Math.max(t.top, e.top)),
    (t.left = Math.max(t.left, e.left)),
    (t.bottom = Math.max(t.bottom, e.bottom)),
    (t.right = Math.max(t.right, e.right));
}
function z7(t, e, n, r) {
  const { pos: i, box: s } = n,
    o = t.maxPadding;
  if (!de(i)) {
    n.size && (t[i] -= n.size);
    const d = r[n.stack] || { size: 0, count: 1 };
    (d.size = Math.max(d.size, n.horizontal ? s.height : s.width)),
      (n.size = d.size / d.count),
      (t[i] += n.size);
  }
  s.getPadding && kb(o, s.getPadding());
  const a = Math.max(0, e.outerWidth - m1(o, t, "left", "right")),
    l = Math.max(0, e.outerHeight - m1(o, t, "top", "bottom")),
    c = a !== t.w,
    u = l !== t.h;
  return (
    (t.w = a),
    (t.h = l),
    n.horizontal ? { same: c, other: u } : { same: u, other: c }
  );
}
function H7(t) {
  const e = t.maxPadding;
  function n(r) {
    const i = Math.max(e[r] - t[r], 0);
    return (t[r] += i), i;
  }
  (t.y += n("top")), (t.x += n("left")), n("right"), n("bottom");
}
function W7(t, e) {
  const n = e.maxPadding;
  function r(i) {
    const s = { left: 0, top: 0, right: 0, bottom: 0 };
    return (
      i.forEach((o) => {
        s[o] = Math.max(e[o], n[o]);
      }),
      s
    );
  }
  return r(t ? ["left", "right"] : ["top", "bottom"]);
}
function bo(t, e, n, r) {
  const i = [];
  let s, o, a, l, c, u;
  for (s = 0, o = t.length, c = 0; s < o; ++s) {
    (a = t[s]),
      (l = a.box),
      l.update(a.width || e.w, a.height || e.h, W7(a.horizontal, e));
    const { same: d, other: h } = z7(e, n, a, r);
    (c |= d && i.length), (u = u || h), l.fullSize || i.push(a);
  }
  return (c && bo(i, e, n, r)) || u;
}
function fl(t, e, n, r, i) {
  (t.top = n),
    (t.left = e),
    (t.right = e + r),
    (t.bottom = n + i),
    (t.width = r),
    (t.height = i);
}
function g1(t, e, n, r) {
  const i = n.padding;
  let { x: s, y: o } = e;
  for (const a of t) {
    const l = a.box,
      c = r[a.stack] || { count: 1, placed: 0, weight: 1 },
      u = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const d = e.w * u,
        h = c.size || l.height;
      Mc(c.start) && (o = c.start),
        l.fullSize
          ? fl(l, i.left, o, n.outerWidth - i.right - i.left, h)
          : fl(l, e.left + c.placed, o, d, h),
        (c.start = o),
        (c.placed += d),
        (o = l.bottom);
    } else {
      const d = e.h * u,
        h = c.size || l.width;
      Mc(c.start) && (s = c.start),
        l.fullSize
          ? fl(l, s, i.top, h, n.outerHeight - i.bottom - i.top)
          : fl(l, s, e.top + c.placed, h, d),
        (c.start = s),
        (c.placed += d),
        (s = l.right);
    }
  }
  (e.x = s), (e.y = o);
}
var qt = {
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
  update(t, e, n, r) {
    if (!t) return;
    const i = en(t.options.layout.padding),
      s = Math.max(e - i.width, 0),
      o = Math.max(n - i.height, 0),
      a = $7(t.boxes),
      l = a.vertical,
      c = a.horizontal;
    he(t.boxes, (g) => {
      typeof g.beforeLayout == "function" && g.beforeLayout();
    });
    const u =
        l.reduce(
          (g, v) => (v.box.options && v.box.options.display === !1 ? g : g + 1),
          0,
        ) || 1,
      d = Object.freeze({
        outerWidth: e,
        outerHeight: n,
        padding: i,
        availableWidth: s,
        availableHeight: o,
        vBoxMaxWidth: s / 2 / u,
        hBoxMaxHeight: o / 2,
      }),
      h = Object.assign({}, i);
    kb(h, en(r));
    const p = Object.assign(
        { maxPadding: h, w: s, h: o, x: i.left, y: i.top },
        i,
      ),
      m = B7(l.concat(c), d);
    bo(a.fullSize, p, d, m),
      bo(l, p, d, m),
      bo(c, p, d, m) && bo(l, p, d, m),
      H7(p),
      g1(a.leftAndTop, p, d, m),
      (p.x += p.w),
      (p.y += p.h),
      g1(a.rightAndBottom, p, d, m),
      (t.chartArea = {
        left: p.left,
        top: p.top,
        right: p.left + p.w,
        bottom: p.top + p.h,
        height: p.h,
        width: p.w,
      }),
      he(a.chartArea, (g) => {
        const v = g.box;
        Object.assign(v, t.chartArea),
          v.update(p.w, p.h, { left: 0, top: 0, right: 0, bottom: 0 });
      });
  },
};
class Tb {
  acquireContext(e, n) {}
  releaseContext(e) {
    return !1;
  }
  addEventListener(e, n, r) {}
  removeEventListener(e, n, r) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(e, n, r, i) {
    return (
      (n = Math.max(0, n || e.width)),
      (r = r || e.height),
      { width: n, height: Math.max(0, i ? Math.floor(n / i) : r) }
    );
  }
  isAttached(e) {
    return !0;
  }
  updateConfig(e) {}
}
class U7 extends Tb {
  acquireContext(e) {
    return (e && e.getContext && e.getContext("2d")) || null;
  }
  updateConfig(e) {
    e.options.animation = !1;
  }
}
const Ul = "$chartjs",
  V7 = {
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
  y1 = (t) => t === null || t === "";
function Y7(t, e) {
  const n = t.style,
    r = t.getAttribute("height"),
    i = t.getAttribute("width");
  if (
    ((t[Ul] = {
      initial: {
        height: r,
        width: i,
        style: { display: n.display, height: n.height, width: n.width },
      },
    }),
    (n.display = n.display || "block"),
    (n.boxSizing = n.boxSizing || "border-box"),
    y1(i))
  ) {
    const s = n1(t, "width");
    s !== void 0 && (t.width = s);
  }
  if (y1(r))
    if (t.style.height === "") t.height = t.width / (e || 2);
    else {
      const s = n1(t, "height");
      s !== void 0 && (t.height = s);
    }
  return t;
}
const Ob = i7 ? { passive: !0 } : !1;
function G7(t, e, n) {
  t && t.addEventListener(e, n, Ob);
}
function K7(t, e, n) {
  t && t.canvas && t.canvas.removeEventListener(e, n, Ob);
}
function q7(t, e) {
  const n = V7[t.type] || t.type,
    { x: r, y: i } = Qr(t, e);
  return {
    type: n,
    chart: e,
    native: t,
    x: r !== void 0 ? r : null,
    y: i !== void 0 ? i : null,
  };
}
function Bc(t, e) {
  for (const n of t) if (n === e || n.contains(e)) return !0;
}
function X7(t, e, n) {
  const r = t.canvas,
    i = new MutationObserver((s) => {
      let o = !1;
      for (const a of s)
        (o = o || Bc(a.addedNodes, r)), (o = o && !Bc(a.removedNodes, r));
      o && n();
    });
  return i.observe(document, { childList: !0, subtree: !0 }), i;
}
function Q7(t, e, n) {
  const r = t.canvas,
    i = new MutationObserver((s) => {
      let o = !1;
      for (const a of s)
        (o = o || Bc(a.removedNodes, r)), (o = o && !Bc(a.addedNodes, r));
      o && n();
    });
  return i.observe(document, { childList: !0, subtree: !0 }), i;
}
const ga = new Map();
let v1 = 0;
function Ab() {
  const t = window.devicePixelRatio;
  t !== v1 &&
    ((v1 = t),
    ga.forEach((e, n) => {
      n.currentDevicePixelRatio !== t && e();
    }));
}
function J7(t, e) {
  ga.size || window.addEventListener("resize", Ab), ga.set(t, e);
}
function Z7(t) {
  ga.delete(t), ga.size || window.removeEventListener("resize", Ab);
}
function e9(t, e, n) {
  const r = t.canvas,
    i = r && u0(r);
  if (!i) return;
  const s = db((a, l) => {
      const c = i.clientWidth;
      n(a, l), c < i.clientWidth && n();
    }, window),
    o = new ResizeObserver((a) => {
      const l = a[0],
        c = l.contentRect.width,
        u = l.contentRect.height;
      (c === 0 && u === 0) || s(c, u);
    });
  return o.observe(i), J7(t, s), o;
}
function Ed(t, e, n) {
  n && n.disconnect(), e === "resize" && Z7(t);
}
function t9(t, e, n) {
  const r = t.canvas,
    i = db((s) => {
      t.ctx !== null && n(q7(s, t));
    }, t);
  return G7(r, e, i), i;
}
class n9 extends Tb {
  acquireContext(e, n) {
    const r = e && e.getContext && e.getContext("2d");
    return r && r.canvas === e ? (Y7(e, n), r) : null;
  }
  releaseContext(e) {
    const n = e.canvas;
    if (!n[Ul]) return !1;
    const r = n[Ul].initial;
    ["height", "width"].forEach((s) => {
      const o = r[s];
      Ae(o) ? n.removeAttribute(s) : n.setAttribute(s, o);
    });
    const i = r.style || {};
    return (
      Object.keys(i).forEach((s) => {
        n.style[s] = i[s];
      }),
      (n.width = n.width),
      delete n[Ul],
      !0
    );
  }
  addEventListener(e, n, r) {
    this.removeEventListener(e, n);
    const i = e.$proxies || (e.$proxies = {}),
      o = { attach: X7, detach: Q7, resize: e9 }[n] || t9;
    i[n] = o(e, n, r);
  }
  removeEventListener(e, n) {
    const r = e.$proxies || (e.$proxies = {}),
      i = r[n];
    if (!i) return;
    (({ attach: Ed, detach: Ed, resize: Ed })[n] || K7)(e, n, i),
      (r[n] = void 0);
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(e, n, r, i) {
    return r7(e, n, r, i);
  }
  isAttached(e) {
    const n = e && u0(e);
    return !!(n && n.isConnected);
  }
}
function r9(t) {
  return !c0() || (typeof OffscreenCanvas < "u" && t instanceof OffscreenCanvas)
    ? U7
    : n9;
}
var Cl;
let Oi =
  ((Cl = class {
    constructor() {
      ee(this, "x");
      ee(this, "y");
      ee(this, "active", !1);
      ee(this, "options");
      ee(this, "$animations");
    }
    tooltipPosition(e) {
      const { x: n, y: r } = this.getProps(["x", "y"], e);
      return { x: n, y: r };
    }
    hasValue() {
      return ha(this.x) && ha(this.y);
    }
    getProps(e, n) {
      const r = this.$animations;
      if (!n || !r) return this;
      const i = {};
      return (
        e.forEach((s) => {
          i[s] = r[s] && r[s].active() ? r[s]._to : this[s];
        }),
        i
      );
    }
  }),
  ee(Cl, "defaults", {}),
  ee(Cl, "defaultRoutes"),
  Cl);
function i9(t, e) {
  const n = t.options.ticks,
    r = s9(t),
    i = Math.min(n.maxTicksLimit || r, r),
    s = n.major.enabled ? a9(e) : [],
    o = s.length,
    a = s[0],
    l = s[o - 1],
    c = [];
  if (o > i) return l9(e, c, s, o / i), c;
  const u = o9(s, e, i);
  if (o > 0) {
    let d, h;
    const p = o > 1 ? Math.round((l - a) / (o - 1)) : null;
    for (hl(e, c, u, Ae(p) ? 0 : a - p, a), d = 0, h = o - 1; d < h; d++)
      hl(e, c, u, s[d], s[d + 1]);
    return hl(e, c, u, l, Ae(p) ? e.length : l + p), c;
  }
  return hl(e, c, u), c;
}
function s9(t) {
  const e = t.options.offset,
    n = t._tickSize(),
    r = t._length / n + (e ? 0 : 1),
    i = t._maxLength / n;
  return Math.floor(Math.min(r, i));
}
function o9(t, e, n) {
  const r = c9(t),
    i = e.length / n;
  if (!r) return Math.max(i, 1);
  const s = n6(r);
  for (let o = 0, a = s.length - 1; o < a; o++) {
    const l = s[o];
    if (l > i) return l;
  }
  return Math.max(i, 1);
}
function a9(t) {
  const e = [];
  let n, r;
  for (n = 0, r = t.length; n < r; n++) t[n].major && e.push(n);
  return e;
}
function l9(t, e, n, r) {
  let i = 0,
    s = n[0],
    o;
  for (r = Math.ceil(r), o = 0; o < t.length; o++)
    o === s && (e.push(t[o]), i++, (s = n[i * r]));
}
function hl(t, e, n, r, i) {
  const s = ae(r, 0),
    o = Math.min(ae(i, t.length), t.length);
  let a = 0,
    l,
    c,
    u;
  for (
    n = Math.ceil(n), i && ((l = i - r), (n = l / Math.floor(l / n))), u = s;
    u < 0;

  )
    a++, (u = Math.round(s + a * n));
  for (c = Math.max(s, 0); c < o; c++)
    c === u && (e.push(t[c]), a++, (u = Math.round(s + a * n)));
}
function c9(t) {
  const e = t.length;
  let n, r;
  if (e < 2) return !1;
  for (r = t[0], n = 1; n < e; ++n) if (t[n] - t[n - 1] !== r) return !1;
  return r;
}
const u9 = (t) => (t === "left" ? "right" : t === "right" ? "left" : t),
  x1 = (t, e, n) => (e === "top" || e === "left" ? t[e] + n : t[e] - n),
  _1 = (t, e) => Math.min(e || t, t);
function b1(t, e) {
  const n = [],
    r = t.length / e,
    i = t.length;
  let s = 0;
  for (; s < i; s += r) n.push(t[Math.floor(s)]);
  return n;
}
function d9(t, e, n) {
  const r = t.ticks.length,
    i = Math.min(e, r - 1),
    s = t._startPixel,
    o = t._endPixel,
    a = 1e-6;
  let l = t.getPixelForTick(i),
    c;
  if (
    !(
      n &&
      (r === 1
        ? (c = Math.max(l - s, o - l))
        : e === 0
        ? (c = (t.getPixelForTick(1) - l) / 2)
        : (c = (l - t.getPixelForTick(i - 1)) / 2),
      (l += i < e ? c : -c),
      l < s - a || l > o + a)
    )
  )
    return l;
}
function f9(t, e) {
  he(t, (n) => {
    const r = n.gc,
      i = r.length / 2;
    let s;
    if (i > e) {
      for (s = 0; s < i; ++s) delete n.data[r[s]];
      r.splice(0, i);
    }
  });
}
function lo(t) {
  return t.drawTicks ? t.tickLength : 0;
}
function w1(t, e) {
  if (!t.display) return 0;
  const n = st(t.font, e),
    r = en(t.padding);
  return (We(t.text) ? t.text.length : 1) * n.lineHeight + r.height;
}
function h9(t, e) {
  return Ti(t, { scale: e, type: "scale" });
}
function p9(t, e, n) {
  return Ti(t, { tick: n, index: e, type: "tick" });
}
function m9(t, e, n) {
  let r = e0(t);
  return ((n && e !== "right") || (!n && e === "right")) && (r = u9(r)), r;
}
function g9(t, e, n, r) {
  const { top: i, left: s, bottom: o, right: a, chart: l } = t,
    { chartArea: c, scales: u } = l;
  let d = 0,
    h,
    p,
    m;
  const g = o - i,
    v = a - s;
  if (t.isHorizontal()) {
    if (((p = nt(r, s, a)), de(n))) {
      const y = Object.keys(n)[0],
        x = n[y];
      m = u[y].getPixelForValue(x) + g - e;
    } else
      n === "center" ? (m = (c.bottom + c.top) / 2 + g - e) : (m = x1(t, n, e));
    h = a - s;
  } else {
    if (de(n)) {
      const y = Object.keys(n)[0],
        x = n[y];
      p = u[y].getPixelForValue(x) - v + e;
    } else
      n === "center" ? (p = (c.left + c.right) / 2 - v + e) : (p = x1(t, n, e));
    (m = nt(r, o, i)), (d = n === "left" ? -dn : dn);
  }
  return { titleX: p, titleY: m, maxWidth: h, rotation: d };
}
class Ai extends Oi {
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
    let { _userMin: e, _userMax: n, _suggestedMin: r, _suggestedMax: i } = this;
    return (
      (e = Lt(e, Number.POSITIVE_INFINITY)),
      (n = Lt(n, Number.NEGATIVE_INFINITY)),
      (r = Lt(r, Number.POSITIVE_INFINITY)),
      (i = Lt(i, Number.NEGATIVE_INFINITY)),
      { min: Lt(e, r), max: Lt(n, i), minDefined: it(e), maxDefined: it(n) }
    );
  }
  getMinMax(e) {
    let { min: n, max: r, minDefined: i, maxDefined: s } = this.getUserBounds(),
      o;
    if (i && s) return { min: n, max: r };
    const a = this.getMatchingVisibleMetas();
    for (let l = 0, c = a.length; l < c; ++l)
      (o = a[l].controller.getMinMax(this, e)),
        i || (n = Math.min(n, o.min)),
        s || (r = Math.max(r, o.max));
    return (
      (n = s && n > r ? r : n),
      (r = i && n > r ? n : r),
      { min: Lt(n, Lt(r, n)), max: Lt(r, Lt(n, r)) }
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
    ve(this.options.beforeUpdate, [this]);
  }
  update(e, n, r) {
    const { beginAtZero: i, grace: s, ticks: o } = this.options,
      a = o.sampleSize;
    this.beforeUpdate(),
      (this.maxWidth = e),
      (this.maxHeight = n),
      (this._margins = r =
        Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, r)),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal()
        ? this.width + r.left + r.right
        : this.height + r.top + r.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = D6(this, s, i)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? b1(this.ticks, a) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      o.display &&
        (o.autoSkip || o.source === "auto") &&
        ((this.ticks = i9(this, this.ticks)),
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
      r;
    this.isHorizontal()
      ? ((n = this.left), (r = this.right))
      : ((n = this.top), (r = this.bottom), (e = !e)),
      (this._startPixel = n),
      (this._endPixel = r),
      (this._reversePixels = e),
      (this._length = r - n),
      (this._alignToPixels = this.options.alignToPixels);
  }
  afterUpdate() {
    ve(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    ve(this.options.beforeSetDimensions, [this]);
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
    ve(this.options.afterSetDimensions, [this]);
  }
  _callHooks(e) {
    this.chart.notifyPlugins(e, this.getContext()), ve(this.options[e], [this]);
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
    ve(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(e) {
    const n = this.options.ticks;
    let r, i, s;
    for (r = 0, i = e.length; r < i; r++)
      (s = e[r]), (s.label = ve(n.callback, [s.value, r, e], this));
  }
  afterTickToLabelConversion() {
    ve(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    ve(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const e = this.options,
      n = e.ticks,
      r = _1(this.ticks.length, e.ticks.maxTicksLimit),
      i = n.minRotation || 0,
      s = n.maxRotation;
    let o = i,
      a,
      l,
      c;
    if (
      !this._isVisible() ||
      !n.display ||
      i >= s ||
      r <= 1 ||
      !this.isHorizontal()
    ) {
      this.labelRotation = i;
      return;
    }
    const u = this._getLabelSizes(),
      d = u.widest.width,
      h = u.highest.height,
      p = Kt(this.chart.width - d, 0, this.maxWidth);
    (a = e.offset ? this.maxWidth / r : p / (r - 1)),
      d + 6 > a &&
        ((a = p / (r - (e.offset ? 0.5 : 1))),
        (l =
          this.maxHeight -
          lo(e.grid) -
          n.padding -
          w1(e.title, this.chart.options.font)),
        (c = Math.sqrt(d * d + h * h)),
        (o = i6(
          Math.min(
            Math.asin(Kt((u.highest.height + 6) / a, -1, 1)),
            Math.asin(Kt(l / c, -1, 1)) - Math.asin(Kt(h / c, -1, 1)),
          ),
        )),
        (o = Math.max(i, Math.min(s, o)))),
      (this.labelRotation = o);
  }
  afterCalculateLabelRotation() {
    ve(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    ve(this.options.beforeFit, [this]);
  }
  fit() {
    const e = { width: 0, height: 0 },
      {
        chart: n,
        options: { ticks: r, title: i, grid: s },
      } = this,
      o = this._isVisible(),
      a = this.isHorizontal();
    if (o) {
      const l = w1(i, n.options.font);
      if (
        (a
          ? ((e.width = this.maxWidth), (e.height = lo(s) + l))
          : ((e.height = this.maxHeight), (e.width = lo(s) + l)),
        r.display && this.ticks.length)
      ) {
        const {
            first: c,
            last: u,
            widest: d,
            highest: h,
          } = this._getLabelSizes(),
          p = r.padding * 2,
          m = ri(this.labelRotation),
          g = Math.cos(m),
          v = Math.sin(m);
        if (a) {
          const y = r.mirror ? 0 : v * d.width + g * h.height;
          e.height = Math.min(this.maxHeight, e.height + y + p);
        } else {
          const y = r.mirror ? 0 : g * d.width + v * h.height;
          e.width = Math.min(this.maxWidth, e.width + y + p);
        }
        this._calculatePadding(c, u, v, g);
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
  _calculatePadding(e, n, r, i) {
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
          ? ((h = i * e.width), (p = r * n.height))
          : ((h = r * e.height), (p = i * n.width))
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
    ve(this.options.afterFit, [this]);
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
    let n, r;
    for (n = 0, r = e.length; n < r; n++)
      Ae(e[n].label) && (e.splice(n, 1), r--, n--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let e = this._labelSizes;
    if (!e) {
      const n = this.options.ticks.sampleSize;
      let r = this.ticks;
      n < r.length && (r = b1(r, n)),
        (this._labelSizes = e =
          this._computeLabelSizes(
            r,
            r.length,
            this.options.ticks.maxTicksLimit,
          ));
    }
    return e;
  }
  _computeLabelSizes(e, n, r) {
    const { ctx: i, _longestTextCache: s } = this,
      o = [],
      a = [],
      l = Math.floor(n / _1(n, r));
    let c = 0,
      u = 0,
      d,
      h,
      p,
      m,
      g,
      v,
      y,
      x,
      _,
      w,
      E;
    for (d = 0; d < n; d += l) {
      if (
        ((m = e[d].label),
        (g = this._resolveTickFontOptions(d)),
        (i.font = v = g.string),
        (y = s[v] = s[v] || { data: {}, gc: [] }),
        (x = g.lineHeight),
        (_ = w = 0),
        !Ae(m) && !We(m))
      )
        (_ = Qg(i, y.data, y.gc, _, m)), (w = x);
      else if (We(m))
        for (h = 0, p = m.length; h < p; ++h)
          (E = m[h]),
            !Ae(E) && !We(E) && ((_ = Qg(i, y.data, y.gc, _, E)), (w += x));
      o.push(_), a.push(w), (c = Math.max(_, c)), (u = Math.max(w, u));
    }
    f9(s, n);
    const S = o.indexOf(c),
      C = a.indexOf(u),
      k = (L) => ({ width: o[L] || 0, height: a[L] || 0 });
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
    return a6(this._alignToPixels ? Vr(this.chart, n, 0) : n);
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
      const r = n[e];
      return r.$context || (r.$context = p9(this.getContext(), e, r));
    }
    return this.$context || (this.$context = h9(this.chart.getContext(), this));
  }
  _tickSize() {
    const e = this.options.ticks,
      n = ri(this.labelRotation),
      r = Math.abs(Math.cos(n)),
      i = Math.abs(Math.sin(n)),
      s = this._getLabelSizes(),
      o = e.autoSkipPadding || 0,
      a = s ? s.widest.width + o : 0,
      l = s ? s.highest.height + o : 0;
    return this.isHorizontal()
      ? l * r > a * i
        ? a / r
        : l / i
      : l * i < a * r
      ? l / r
      : a / i;
  }
  _isVisible() {
    const e = this.options.display;
    return e !== "auto" ? !!e : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(e) {
    const n = this.axis,
      r = this.chart,
      i = this.options,
      { grid: s, position: o, border: a } = i,
      l = s.offset,
      c = this.isHorizontal(),
      d = this.ticks.length + (l ? 1 : 0),
      h = lo(s),
      p = [],
      m = a.setContext(this.getContext()),
      g = m.display ? m.width : 0,
      v = g / 2,
      y = function (Y) {
        return Vr(r, Y, g);
      };
    let x, _, w, E, S, C, k, L, j, $, N, D;
    if (o === "top")
      (x = y(this.bottom)),
        (C = this.bottom - h),
        (L = x - v),
        ($ = y(e.top) + v),
        (D = e.bottom);
    else if (o === "bottom")
      (x = y(this.top)),
        ($ = e.top),
        (D = y(e.bottom) - v),
        (C = x + v),
        (L = this.top + h);
    else if (o === "left")
      (x = y(this.right)),
        (S = this.right - h),
        (k = x - v),
        (j = y(e.left) + v),
        (N = e.right);
    else if (o === "right")
      (x = y(this.left)),
        (j = e.left),
        (N = y(e.right) - v),
        (S = x + v),
        (k = this.left + h);
    else if (n === "x") {
      if (o === "center") x = y((e.top + e.bottom) / 2 + 0.5);
      else if (de(o)) {
        const Y = Object.keys(o)[0],
          G = o[Y];
        x = y(this.chart.scales[Y].getPixelForValue(G));
      }
      ($ = e.top), (D = e.bottom), (C = x + v), (L = C + h);
    } else if (n === "y") {
      if (o === "center") x = y((e.left + e.right) / 2);
      else if (de(o)) {
        const Y = Object.keys(o)[0],
          G = o[Y];
        x = y(this.chart.scales[Y].getPixelForValue(G));
      }
      (S = x - v), (k = S - h), (j = e.left), (N = e.right);
    }
    const H = ae(i.ticks.maxTicksLimit, d),
      B = Math.max(1, Math.ceil(d / H));
    for (_ = 0; _ < d; _ += B) {
      const Y = this.getContext(_),
        G = s.setContext(Y),
        P = a.setContext(Y),
        A = G.lineWidth,
        T = G.color,
        F = P.dash || [],
        M = P.dashOffset,
        z = G.tickWidth,
        W = G.tickColor,
        V = G.tickBorderDash || [],
        X = G.tickBorderDashOffset;
      (w = d9(this, _, l)),
        w !== void 0 &&
          ((E = Vr(r, w, A)),
          c ? (S = k = j = N = E) : (C = L = $ = D = E),
          p.push({
            tx1: S,
            ty1: C,
            tx2: k,
            ty2: L,
            x1: j,
            y1: $,
            x2: N,
            y2: D,
            width: A,
            color: T,
            borderDash: F,
            borderDashOffset: M,
            tickWidth: z,
            tickColor: W,
            tickBorderDash: V,
            tickBorderDashOffset: X,
          }));
    }
    return (this._ticksLength = d), (this._borderValue = x), p;
  }
  _computeLabelItems(e) {
    const n = this.axis,
      r = this.options,
      { position: i, ticks: s } = r,
      o = this.isHorizontal(),
      a = this.ticks,
      { align: l, crossAlign: c, padding: u, mirror: d } = s,
      h = lo(r.grid),
      p = h + u,
      m = d ? -u : p,
      g = -ri(this.labelRotation),
      v = [];
    let y,
      x,
      _,
      w,
      E,
      S,
      C,
      k,
      L,
      j,
      $,
      N,
      D = "middle";
    if (i === "top")
      (S = this.bottom - m), (C = this._getXAxisLabelAlignment());
    else if (i === "bottom")
      (S = this.top + m), (C = this._getXAxisLabelAlignment());
    else if (i === "left") {
      const B = this._getYAxisLabelAlignment(h);
      (C = B.textAlign), (E = B.x);
    } else if (i === "right") {
      const B = this._getYAxisLabelAlignment(h);
      (C = B.textAlign), (E = B.x);
    } else if (n === "x") {
      if (i === "center") S = (e.top + e.bottom) / 2 + p;
      else if (de(i)) {
        const B = Object.keys(i)[0],
          Y = i[B];
        S = this.chart.scales[B].getPixelForValue(Y) + p;
      }
      C = this._getXAxisLabelAlignment();
    } else if (n === "y") {
      if (i === "center") E = (e.left + e.right) / 2 - p;
      else if (de(i)) {
        const B = Object.keys(i)[0],
          Y = i[B];
        E = this.chart.scales[B].getPixelForValue(Y);
      }
      C = this._getYAxisLabelAlignment(h).textAlign;
    }
    n === "y" && (l === "start" ? (D = "top") : l === "end" && (D = "bottom"));
    const H = this._getLabelSizes();
    for (y = 0, x = a.length; y < x; ++y) {
      (_ = a[y]), (w = _.label);
      const B = s.setContext(this.getContext(y));
      (k = this.getPixelForTick(y) + s.labelOffset),
        (L = this._resolveTickFontOptions(y)),
        (j = L.lineHeight),
        ($ = We(w) ? w.length : 1);
      const Y = $ / 2,
        G = B.color,
        P = B.textStrokeColor,
        A = B.textStrokeWidth;
      let T = C;
      o
        ? ((E = k),
          C === "inner" &&
            (y === x - 1
              ? (T = this.options.reverse ? "left" : "right")
              : y === 0
              ? (T = this.options.reverse ? "right" : "left")
              : (T = "center")),
          i === "top"
            ? c === "near" || g !== 0
              ? (N = -$ * j + j / 2)
              : c === "center"
              ? (N = -H.highest.height / 2 - Y * j + j)
              : (N = -H.highest.height + j / 2)
            : c === "near" || g !== 0
            ? (N = j / 2)
            : c === "center"
            ? (N = H.highest.height / 2 - Y * j)
            : (N = H.highest.height - $ * j),
          d && (N *= -1),
          g !== 0 && !B.showLabelBackdrop && (E += (j / 2) * Math.sin(g)))
        : ((S = k), (N = ((1 - $) * j) / 2));
      let F;
      if (B.showLabelBackdrop) {
        const M = en(B.backdropPadding),
          z = H.heights[y],
          W = H.widths[y];
        let V = N - M.top,
          X = 0 - M.left;
        switch (D) {
          case "middle":
            V -= z / 2;
            break;
          case "bottom":
            V -= z;
            break;
        }
        switch (C) {
          case "center":
            X -= W / 2;
            break;
          case "right":
            X -= W;
            break;
          case "inner":
            y === x - 1 ? (X -= W) : y > 0 && (X -= W / 2);
            break;
        }
        F = {
          left: X,
          top: V,
          width: W + M.width,
          height: z + M.height,
          color: B.backdropColor,
        };
      }
      v.push({
        label: w,
        font: L,
        textOffset: N,
        options: {
          rotation: g,
          color: G,
          strokeColor: P,
          strokeWidth: A,
          textAlign: T,
          textBaseline: D,
          translation: [E, S],
          backdrop: F,
        },
      });
    }
    return v;
  }
  _getXAxisLabelAlignment() {
    const { position: e, ticks: n } = this.options;
    if (-ri(this.labelRotation)) return e === "top" ? "left" : "right";
    let i = "center";
    return (
      n.align === "start"
        ? (i = "left")
        : n.align === "end"
        ? (i = "right")
        : n.align === "inner" && (i = "inner"),
      i
    );
  }
  _getYAxisLabelAlignment(e) {
    const {
        position: n,
        ticks: { crossAlign: r, mirror: i, padding: s },
      } = this.options,
      o = this._getLabelSizes(),
      a = e + s,
      l = o.widest.width;
    let c, u;
    return (
      n === "left"
        ? i
          ? ((u = this.right + s),
            r === "near"
              ? (c = "left")
              : r === "center"
              ? ((c = "center"), (u += l / 2))
              : ((c = "right"), (u += l)))
          : ((u = this.right - a),
            r === "near"
              ? (c = "right")
              : r === "center"
              ? ((c = "center"), (u -= l / 2))
              : ((c = "left"), (u = this.left)))
        : n === "right"
        ? i
          ? ((u = this.left + s),
            r === "near"
              ? (c = "right")
              : r === "center"
              ? ((c = "center"), (u -= l / 2))
              : ((c = "left"), (u -= l)))
          : ((u = this.left + a),
            r === "near"
              ? (c = "left")
              : r === "center"
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
      left: r,
      top: i,
      width: s,
      height: o,
    } = this;
    n && (e.save(), (e.fillStyle = n), e.fillRect(r, i, s, o), e.restore());
  }
  getLineWidthForValue(e) {
    const n = this.options.grid;
    if (!this._isVisible() || !n.display) return 0;
    const i = this.ticks.findIndex((s) => s.value === e);
    return i >= 0 ? n.setContext(this.getContext(i)).lineWidth : 0;
  }
  drawGrid(e) {
    const n = this.options.grid,
      r = this.ctx,
      i =
        this._gridLineItems ||
        (this._gridLineItems = this._computeGridLineItems(e));
    let s, o;
    const a = (l, c, u) => {
      !u.width ||
        !u.color ||
        (r.save(),
        (r.lineWidth = u.width),
        (r.strokeStyle = u.color),
        r.setLineDash(u.borderDash || []),
        (r.lineDashOffset = u.borderDashOffset),
        r.beginPath(),
        r.moveTo(l.x, l.y),
        r.lineTo(c.x, c.y),
        r.stroke(),
        r.restore());
    };
    if (n.display)
      for (s = 0, o = i.length; s < o; ++s) {
        const l = i[s];
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
        options: { border: r, grid: i },
      } = this,
      s = r.setContext(this.getContext()),
      o = r.display ? s.width : 0;
    if (!o) return;
    const a = i.setContext(this.getContext(0)).lineWidth,
      l = this._borderValue;
    let c, u, d, h;
    this.isHorizontal()
      ? ((c = Vr(e, this.left, o) - o / 2),
        (u = Vr(e, this.right, a) + a / 2),
        (d = h = l))
      : ((d = Vr(e, this.top, o) - o / 2),
        (h = Vr(e, this.bottom, a) + a / 2),
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
    const r = this.ctx,
      i = this._computeLabelArea();
    i && i0(r, i);
    const s = this.getLabelItems(e);
    for (const o of s) {
      const a = o.options,
        l = o.font,
        c = o.label,
        u = o.textOffset;
      ma(r, c, 0, u, l, a);
    }
    i && s0(r);
  }
  drawTitle() {
    const {
      ctx: e,
      options: { position: n, title: r, reverse: i },
    } = this;
    if (!r.display) return;
    const s = st(r.font),
      o = en(r.padding),
      a = r.align;
    let l = s.lineHeight / 2;
    n === "bottom" || n === "center" || de(n)
      ? ((l += o.bottom),
        We(r.text) && (l += s.lineHeight * (r.text.length - 1)))
      : (l += o.top);
    const {
      titleX: c,
      titleY: u,
      maxWidth: d,
      rotation: h,
    } = g9(this, l, n, a);
    ma(e, r.text, 0, 0, s, {
      color: r.color,
      maxWidth: d,
      rotation: h,
      textAlign: m9(a, n, i),
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
      r = ae(e.grid && e.grid.z, -1),
      i = ae(e.border && e.border.z, 0);
    return !this._isVisible() || this.draw !== Ai.prototype.draw
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
            z: r,
            draw: (s) => {
              this.drawBackground(), this.drawGrid(s), this.drawTitle();
            },
          },
          {
            z: i,
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
      r = this.axis + "AxisID",
      i = [];
    let s, o;
    for (s = 0, o = n.length; s < o; ++s) {
      const a = n[s];
      a[r] === this.id && (!e || a.type === e) && i.push(a);
    }
    return i;
  }
  _resolveTickFontOptions(e) {
    const n = this.options.ticks.setContext(this.getContext(e));
    return st(n.font);
  }
  _maxDigits() {
    const e = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / e;
  }
}
class pl {
  constructor(e, n, r) {
    (this.type = e),
      (this.scope = n),
      (this.override = r),
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
    let r;
    x9(n) && (r = this.register(n));
    const i = this.items,
      s = e.id,
      o = this.scope + "." + s;
    if (!s) throw new Error("class does not have id: " + e);
    return (
      s in i ||
        ((i[s] = e),
        y9(e, o, r),
        this.override && Pe.override(e.id, e.overrides)),
      o
    );
  }
  get(e) {
    return this.items[e];
  }
  unregister(e) {
    const n = this.items,
      r = e.id,
      i = this.scope;
    r in n && delete n[r],
      i && r in Pe[i] && (delete Pe[i][r], this.override && delete bi[r]);
  }
}
function y9(t, e, n) {
  const r = fa(Object.create(null), [
    n ? Pe.get(n) : {},
    Pe.get(e),
    t.defaults,
  ]);
  Pe.set(e, r),
    t.defaultRoutes && v9(e, t.defaultRoutes),
    t.descriptors && Pe.describe(e, t.descriptors);
}
function v9(t, e) {
  Object.keys(e).forEach((n) => {
    const r = n.split("."),
      i = r.pop(),
      s = [t].concat(r).join("."),
      o = e[n].split("."),
      a = o.pop(),
      l = o.join(".");
    Pe.route(s, i, l, a);
  });
}
function x9(t) {
  return "id" in t && "defaults" in t;
}
class _9 {
  constructor() {
    (this.controllers = new pl($o, "datasets", !0)),
      (this.elements = new pl(Oi, "elements")),
      (this.plugins = new pl(Object, "plugins")),
      (this.scales = new pl(Ai, "scales")),
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
  _each(e, n, r) {
    [...n].forEach((i) => {
      const s = r || this._getRegistryForType(i);
      r || s.isForType(i) || (s === this.plugins && i.id)
        ? this._exec(e, s, i)
        : he(i, (o) => {
            const a = r || this._getRegistryForType(o);
            this._exec(e, a, o);
          });
    });
  }
  _exec(e, n, r) {
    const i = Jp(e);
    ve(r["before" + i], [], r), n[e](r), ve(r["after" + i], [], r);
  }
  _getRegistryForType(e) {
    for (let n = 0; n < this._typedRegistries.length; n++) {
      const r = this._typedRegistries[n];
      if (r.isForType(e)) return r;
    }
    return this.plugins;
  }
  _get(e, n, r) {
    const i = n.get(e);
    if (i === void 0)
      throw new Error('"' + e + '" is not a registered ' + r + ".");
    return i;
  }
}
var wn = new _9();
class b9 {
  constructor() {
    this._init = [];
  }
  notify(e, n, r, i) {
    n === "beforeInit" &&
      ((this._init = this._createDescriptors(e, !0)),
      this._notify(this._init, e, "install"));
    const s = i ? this._descriptors(e).filter(i) : this._descriptors(e),
      o = this._notify(s, e, n, r);
    return (
      n === "afterDestroy" &&
        (this._notify(s, e, "stop"), this._notify(this._init, e, "uninstall")),
      o
    );
  }
  _notify(e, n, r, i) {
    i = i || {};
    for (const s of e) {
      const o = s.plugin,
        a = o[r],
        l = [n, i, s.options];
      if (ve(a, l, o) === !1 && i.cancelable) return !1;
    }
    return !0;
  }
  invalidate() {
    Ae(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
  }
  _descriptors(e) {
    if (this._cache) return this._cache;
    const n = (this._cache = this._createDescriptors(e));
    return this._notifyStateChanges(e), n;
  }
  _createDescriptors(e, n) {
    const r = e && e.config,
      i = ae(r.options && r.options.plugins, {}),
      s = w9(r);
    return i === !1 && !n ? [] : S9(e, s, i, n);
  }
  _notifyStateChanges(e) {
    const n = this._oldCache || [],
      r = this._cache,
      i = (s, o) =>
        s.filter((a) => !o.some((l) => a.plugin.id === l.plugin.id));
    this._notify(i(n, r), e, "stop"), this._notify(i(r, n), e, "start");
  }
}
function w9(t) {
  const e = {},
    n = [],
    r = Object.keys(wn.plugins.items);
  for (let s = 0; s < r.length; s++) n.push(wn.getPlugin(r[s]));
  const i = t.plugins || [];
  for (let s = 0; s < i.length; s++) {
    const o = i[s];
    n.indexOf(o) === -1 && (n.push(o), (e[o.id] = !0));
  }
  return { plugins: n, localIds: e };
}
function E9(t, e) {
  return !e && t === !1 ? null : t === !0 ? {} : t;
}
function S9(t, { plugins: e, localIds: n }, r, i) {
  const s = [],
    o = t.getContext();
  for (const a of e) {
    const l = a.id,
      c = E9(r[l], i);
    c !== null &&
      s.push({
        plugin: a,
        options: C9(t.config, { plugin: a, local: n[l] }, c, o),
      });
  }
  return s;
}
function C9(t, { plugin: e, local: n }, r, i) {
  const s = t.pluginScopeKeys(e),
    o = t.getOptionScopes(r, s);
  return (
    n && e.defaults && o.push(e.defaults),
    t.createResolver(o, i, [""], { scriptable: !1, indexable: !1, allKeys: !0 })
  );
}
function fh(t, e) {
  const n = Pe.datasets[t] || {};
  return (
    ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || n.indexAxis || "x"
  );
}
function k9(t, e) {
  let n = t;
  return (
    t === "_index_" ? (n = e) : t === "_value_" && (n = e === "x" ? "y" : "x"),
    n
  );
}
function T9(t, e) {
  return t === e ? "_index_" : "_value_";
}
function E1(t) {
  if (t === "x" || t === "y" || t === "r") return t;
}
function O9(t) {
  if (t === "top" || t === "bottom") return "x";
  if (t === "left" || t === "right") return "y";
}
function hh(t, ...e) {
  if (E1(t)) return t;
  for (const n of e) {
    const r =
      n.axis || O9(n.position) || (t.length > 1 && E1(t[0].toLowerCase()));
    if (r) return r;
  }
  throw new Error(
    `Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`,
  );
}
function S1(t, e, n) {
  if (n[e + "AxisID"] === t) return { axis: e };
}
function A9(t, e) {
  if (e.data && e.data.datasets) {
    const n = e.data.datasets.filter((r) => r.xAxisID === t || r.yAxisID === t);
    if (n.length) return S1(t, "x", n[0]) || S1(t, "y", n[0]);
  }
  return {};
}
function N9(t, e) {
  const n = bi[t.type] || { scales: {} },
    r = e.scales || {},
    i = fh(t.type, e),
    s = Object.create(null);
  return (
    Object.keys(r).forEach((o) => {
      const a = r[o];
      if (!de(a))
        return console.error(`Invalid scale configuration for scale: ${o}`);
      if (a._proxy)
        return console.warn(
          `Ignoring resolver passed as options for scale: ${o}`,
        );
      const l = hh(o, a, A9(o, t), Pe.scales[a.type]),
        c = T9(l, i),
        u = n.scales || {};
      s[o] = Do(Object.create(null), [{ axis: l }, a, u[l], u[c]]);
    }),
    t.data.datasets.forEach((o) => {
      const a = o.type || t.type,
        l = o.indexAxis || fh(a, e),
        u = (bi[a] || {}).scales || {};
      Object.keys(u).forEach((d) => {
        const h = k9(d, l),
          p = o[h + "AxisID"] || h;
        (s[p] = s[p] || Object.create(null)),
          Do(s[p], [{ axis: h }, r[p], u[d]]);
      });
    }),
    Object.keys(s).forEach((o) => {
      const a = s[o];
      Do(a, [Pe.scales[a.type], Pe.scale]);
    }),
    s
  );
}
function Nb(t) {
  const e = t.options || (t.options = {});
  (e.plugins = ae(e.plugins, {})), (e.scales = N9(t, e));
}
function Pb(t) {
  return (
    (t = t || {}),
    (t.datasets = t.datasets || []),
    (t.labels = t.labels || []),
    t
  );
}
function P9(t) {
  return (t = t || {}), (t.data = Pb(t.data)), Nb(t), t;
}
const C1 = new Map(),
  Lb = new Set();
function ml(t, e) {
  let n = C1.get(t);
  return n || ((n = e()), C1.set(t, n), Lb.add(n)), n;
}
const co = (t, e, n) => {
  const r = Dc(e, n);
  r !== void 0 && t.add(r);
};
let L9 = class {
  constructor(e) {
    (this._config = P9(e)),
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
    this._config.data = Pb(e);
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
    this.clearCache(), Nb(e);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(e) {
    return ml(e, () => [[`datasets.${e}`, ""]]);
  }
  datasetAnimationScopeKeys(e, n) {
    return ml(`${e}.transition.${n}`, () => [
      [`datasets.${e}.transitions.${n}`, `transitions.${n}`],
      [`datasets.${e}`, ""],
    ]);
  }
  datasetElementScopeKeys(e, n) {
    return ml(`${e}-${n}`, () => [
      [`datasets.${e}.elements.${n}`, `datasets.${e}`, `elements.${n}`, ""],
    ]);
  }
  pluginScopeKeys(e) {
    const n = e.id,
      r = this.type;
    return ml(`${r}-plugin-${n}`, () => [
      [`plugins.${n}`, ...(e.additionalOptionScopes || [])],
    ]);
  }
  _cachedScopes(e, n) {
    const r = this._scopeCache;
    let i = r.get(e);
    return (!i || n) && ((i = new Map()), r.set(e, i)), i;
  }
  getOptionScopes(e, n, r) {
    const { options: i, type: s } = this,
      o = this._cachedScopes(e, r),
      a = o.get(n);
    if (a) return a;
    const l = new Set();
    n.forEach((u) => {
      e && (l.add(e), u.forEach((d) => co(l, e, d))),
        u.forEach((d) => co(l, i, d)),
        u.forEach((d) => co(l, bi[s] || {}, d)),
        u.forEach((d) => co(l, Pe, d)),
        u.forEach((d) => co(l, ch, d));
    });
    const c = Array.from(l);
    return (
      c.length === 0 && c.push(Object.create(null)), Lb.has(n) && o.set(n, c), c
    );
  }
  chartOptionScopes() {
    const { options: e, type: n } = this;
    return [e, bi[n] || {}, Pe.datasets[n] || {}, { type: n }, Pe, ch];
  }
  resolveNamedOptions(e, n, r, i = [""]) {
    const s = { $shared: !0 },
      { resolver: o, subPrefixes: a } = k1(this._resolverCache, e, i);
    let l = o;
    if (R9(o, n)) {
      (s.$shared = !1), (r = jr(r) ? r() : r);
      const c = this.createResolver(e, r, a);
      l = Os(o, r, c);
    }
    for (const c of n) s[c] = l[c];
    return s;
  }
  createResolver(e, n, r = [""], i) {
    const { resolver: s } = k1(this._resolverCache, e, r);
    return de(n) ? Os(s, n, void 0, i) : s;
  }
};
function k1(t, e, n) {
  let r = t.get(e);
  r || ((r = new Map()), t.set(e, r));
  const i = n.join();
  let s = r.get(i);
  return (
    s ||
      ((s = {
        resolver: o0(e, n),
        subPrefixes: n.filter((a) => !a.toLowerCase().includes("hover")),
      }),
      r.set(i, s)),
    s
  );
}
const j9 = (t) => de(t) && Object.getOwnPropertyNames(t).some((e) => jr(t[e]));
function R9(t, e) {
  const { isScriptable: n, isIndexable: r } = mb(t);
  for (const i of e) {
    const s = n(i),
      o = r(i),
      a = (o || s) && t[i];
    if ((s && (jr(a) || j9(a))) || (o && We(a))) return !0;
  }
  return !1;
}
var D9 = "4.4.3";
const M9 = ["top", "bottom", "left", "right", "chartArea"];
function T1(t, e) {
  return t === "top" || t === "bottom" || (M9.indexOf(t) === -1 && e === "x");
}
function O1(t, e) {
  return function (n, r) {
    return n[t] === r[t] ? n[e] - r[e] : n[t] - r[t];
  };
}
function A1(t) {
  const e = t.chart,
    n = e.options.animation;
  e.notifyPlugins("afterRender"), ve(n && n.onComplete, [t], e);
}
function I9(t) {
  const e = t.chart,
    n = e.options.animation;
  ve(n && n.onProgress, [t], e);
}
function jb(t) {
  return (
    c0() && typeof t == "string"
      ? (t = document.getElementById(t))
      : t && t.length && (t = t[0]),
    t && t.canvas && (t = t.canvas),
    t
  );
}
const Vl = {},
  N1 = (t) => {
    const e = jb(t);
    return Object.values(Vl)
      .filter((n) => n.canvas === e)
      .pop();
  };
function F9(t, e, n) {
  const r = Object.keys(t);
  for (const i of r) {
    const s = +i;
    if (s >= e) {
      const o = t[i];
      delete t[i], (n > 0 || s > e) && (t[s + n] = o);
    }
  }
}
function B9(t, e, n, r) {
  return !n || t.type === "mouseout" ? null : r ? e : t;
}
function gl(t, e, n) {
  return t.options.clip ? t[n] : e[n];
}
function $9(t, e) {
  const { xScale: n, yScale: r } = t;
  return n && r
    ? {
        left: gl(n, e, "left"),
        right: gl(n, e, "right"),
        top: gl(r, e, "top"),
        bottom: gl(r, e, "bottom"),
      }
    : e;
}
var or;
let La =
  ((or = class {
    static register(...e) {
      wn.add(...e), P1();
    }
    static unregister(...e) {
      wn.remove(...e), P1();
    }
    constructor(e, n) {
      const r = (this.config = new L9(n)),
        i = jb(e),
        s = N1(i);
      if (s)
        throw new Error(
          "Canvas is already in use. Chart with ID '" +
            s.id +
            "' must be destroyed before the canvas with ID '" +
            s.canvas.id +
            "' can be reused.",
        );
      const o = r.createResolver(r.chartOptionScopes(), this.getContext());
      (this.platform = new (r.platform || r9(i))()),
        this.platform.updateConfig(r);
      const a = this.platform.acquireContext(i, o.aspectRatio),
        l = a && a.canvas,
        c = l && l.height,
        u = l && l.width;
      if (
        ((this.id = GO()),
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
        (this._plugins = new b9()),
        (this.$proxies = {}),
        (this._hiddenIndices = {}),
        (this.attached = !1),
        (this._animationsDisabled = void 0),
        (this.$context = void 0),
        (this._doResize = f6((d) => this.update(d), o.resizeDelay || 0)),
        (this._dataChanges = []),
        (Vl[this.id] = this),
        !a || !l)
      ) {
        console.error(
          "Failed to create chart: can't acquire context from the given item",
        );
        return;
      }
      Rn.listen(this, "complete", A1),
        Rn.listen(this, "progress", I9),
        this._initialize(),
        this.attached && this.update();
    }
    get aspectRatio() {
      const {
        options: { aspectRatio: e, maintainAspectRatio: n },
        width: r,
        height: i,
        _aspectRatio: s,
      } = this;
      return Ae(e) ? (n && s ? s : i ? r / i : null) : e;
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
      return wn;
    }
    _initialize() {
      return (
        this.notifyPlugins("beforeInit"),
        this.options.responsive
          ? this.resize()
          : t1(this, this.options.devicePixelRatio),
        this.bindEvents(),
        this.notifyPlugins("afterInit"),
        this
      );
    }
    clear() {
      return Jg(this.canvas, this.ctx), this;
    }
    stop() {
      return Rn.stop(this), this;
    }
    resize(e, n) {
      Rn.running(this)
        ? (this._resizeBeforeDraw = { width: e, height: n })
        : this._resize(e, n);
    }
    _resize(e, n) {
      const r = this.options,
        i = this.canvas,
        s = r.maintainAspectRatio && this.aspectRatio,
        o = this.platform.getMaximumSize(i, e, n, s),
        a = r.devicePixelRatio || this.platform.getDevicePixelRatio(),
        l = this.width ? "resize" : "attach";
      (this.width = o.width),
        (this.height = o.height),
        (this._aspectRatio = this.aspectRatio),
        t1(this, a, !0) &&
          (this.notifyPlugins("resize", { size: o }),
          ve(r.onResize, [this, o], this),
          this.attached && this._doResize(l) && this.render());
    }
    ensureScalesHaveIDs() {
      const n = this.options.scales || {};
      he(n, (r, i) => {
        r.id = i;
      });
    }
    buildOrUpdateScales() {
      const e = this.options,
        n = e.scales,
        r = this.scales,
        i = Object.keys(r).reduce((o, a) => ((o[a] = !1), o), {});
      let s = [];
      n &&
        (s = s.concat(
          Object.keys(n).map((o) => {
            const a = n[o],
              l = hh(o, a),
              c = l === "r",
              u = l === "x";
            return {
              options: a,
              dposition: c ? "chartArea" : u ? "bottom" : "left",
              dtype: c ? "radialLinear" : u ? "category" : "linear",
            };
          }),
        )),
        he(s, (o) => {
          const a = o.options,
            l = a.id,
            c = hh(l, a),
            u = ae(a.type, o.dtype);
          (a.position === void 0 || T1(a.position, c) !== T1(o.dposition)) &&
            (a.position = o.dposition),
            (i[l] = !0);
          let d = null;
          if (l in r && r[l].type === u) d = r[l];
          else {
            const h = wn.getScale(u);
            (d = new h({ id: l, type: u, ctx: this.ctx, chart: this })),
              (r[d.id] = d);
          }
          d.init(a, e);
        }),
        he(i, (o, a) => {
          o || delete r[a];
        }),
        he(r, (o) => {
          qt.configure(this, o, o.options), qt.addBox(this, o);
        });
    }
    _updateMetasets() {
      const e = this._metasets,
        n = this.data.datasets.length,
        r = e.length;
      if ((e.sort((i, s) => i.index - s.index), r > n)) {
        for (let i = n; i < r; ++i) this._destroyDatasetMeta(i);
        e.splice(n, r - n);
      }
      this._sortedMetasets = e.slice(0).sort(O1("order", "index"));
    }
    _removeUnreferencedMetasets() {
      const {
        _metasets: e,
        data: { datasets: n },
      } = this;
      e.length > n.length && delete this._stacks,
        e.forEach((r, i) => {
          n.filter((s) => s === r._dataset).length === 0 &&
            this._destroyDatasetMeta(i);
        });
    }
    buildOrUpdateControllers() {
      const e = [],
        n = this.data.datasets;
      let r, i;
      for (
        this._removeUnreferencedMetasets(), r = 0, i = n.length;
        r < i;
        r++
      ) {
        const s = n[r];
        let o = this.getDatasetMeta(r);
        const a = s.type || this.config.type;
        if (
          (o.type &&
            o.type !== a &&
            (this._destroyDatasetMeta(r), (o = this.getDatasetMeta(r))),
          (o.type = a),
          (o.indexAxis = s.indexAxis || fh(a, this.options)),
          (o.order = s.order || 0),
          (o.index = r),
          (o.label = "" + s.label),
          (o.visible = this.isDatasetVisible(r)),
          o.controller)
        )
          o.controller.updateIndex(r), o.controller.linkScales();
        else {
          const l = wn.getController(a),
            { datasetElementType: c, dataElementType: u } = Pe.datasets[a];
          Object.assign(l, {
            dataElementType: wn.getElement(u),
            datasetElementType: c && wn.getElement(c),
          }),
            (o.controller = new l(this, r)),
            e.push(o.controller);
        }
      }
      return this._updateMetasets(), e;
    }
    _resetElements() {
      he(
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
      const r = (this._options = n.createResolver(
          n.chartOptionScopes(),
          this.getContext(),
        )),
        i = (this._animationsDisabled = !r.animation);
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
          h = !i && s.indexOf(d) === -1;
        d.buildOrUpdateElements(h), (o = Math.max(+d.getMaxOverflow(), o));
      }
      (o = this._minPadding = r.layout.autoPadding ? o : 0),
        this._updateLayout(o),
        i ||
          he(s, (c) => {
            c.reset();
          }),
        this._updateDatasets(e),
        this.notifyPlugins("afterUpdate", { mode: e }),
        this._layers.sort(O1("z", "_idx"));
      const { _active: a, _lastEvent: l } = this;
      l
        ? this._eventHandler(l, !0)
        : a.length && this._updateHoverStyles(a, a, !0),
        this.render();
    }
    _updateScales() {
      he(this.scales, (e) => {
        qt.removeBox(this, e);
      }),
        this.ensureScalesHaveIDs(),
        this.buildOrUpdateScales();
    }
    _checkEventBindings() {
      const e = this.options,
        n = new Set(Object.keys(this._listeners)),
        r = new Set(e.events);
      (!Hg(n, r) || !!this._responsiveListeners !== e.responsive) &&
        (this.unbindEvents(), this.bindEvents());
    }
    _updateHiddenIndices() {
      const { _hiddenIndices: e } = this,
        n = this._getUniformDataChanges() || [];
      for (const { method: r, start: i, count: s } of n) {
        const o = r === "_removeElements" ? -s : s;
        F9(e, i, o);
      }
    }
    _getUniformDataChanges() {
      const e = this._dataChanges;
      if (!e || !e.length) return;
      this._dataChanges = [];
      const n = this.data.datasets.length,
        r = (s) =>
          new Set(
            e
              .filter((o) => o[0] === s)
              .map((o, a) => a + "," + o.splice(1).join(",")),
          ),
        i = r(0);
      for (let s = 1; s < n; s++) if (!Hg(i, r(s))) return;
      return Array.from(i)
        .map((s) => s.split(","))
        .map((s) => ({ method: s[1], start: +s[2], count: +s[3] }));
    }
    _updateLayout(e) {
      if (this.notifyPlugins("beforeLayout", { cancelable: !0 }) === !1) return;
      qt.update(this, this.width, this.height, e);
      const n = this.chartArea,
        r = n.width <= 0 || n.height <= 0;
      (this._layers = []),
        he(
          this.boxes,
          (i) => {
            (r && i.position === "chartArea") ||
              (i.configure && i.configure(), this._layers.push(...i._layers()));
          },
          this,
        ),
        this._layers.forEach((i, s) => {
          i._idx = s;
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
        for (let n = 0, r = this.data.datasets.length; n < r; ++n)
          this.getDatasetMeta(n).controller.configure();
        for (let n = 0, r = this.data.datasets.length; n < r; ++n)
          this._updateDataset(n, jr(e) ? e({ datasetIndex: n }) : e);
        this.notifyPlugins("afterDatasetsUpdate", { mode: e });
      }
    }
    _updateDataset(e, n) {
      const r = this.getDatasetMeta(e),
        i = { meta: r, index: e, mode: n, cancelable: !0 };
      this.notifyPlugins("beforeDatasetUpdate", i) !== !1 &&
        (r.controller._update(n),
        (i.cancelable = !1),
        this.notifyPlugins("afterDatasetUpdate", i));
    }
    render() {
      this.notifyPlugins("beforeRender", { cancelable: !0 }) !== !1 &&
        (Rn.has(this)
          ? this.attached && !Rn.running(this) && Rn.start(this)
          : (this.draw(), A1({ chart: this })));
    }
    draw() {
      let e;
      if (this._resizeBeforeDraw) {
        const { width: r, height: i } = this._resizeBeforeDraw;
        this._resize(r, i), (this._resizeBeforeDraw = null);
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
        r = [];
      let i, s;
      for (i = 0, s = n.length; i < s; ++i) {
        const o = n[i];
        (!e || o.visible) && r.push(o);
      }
      return r;
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
        r = e._clip,
        i = !r.disabled,
        s = $9(e, this.chartArea),
        o = { meta: e, index: e.index, cancelable: !0 };
      this.notifyPlugins("beforeDatasetDraw", o) !== !1 &&
        (i &&
          i0(n, {
            left: r.left === !1 ? 0 : s.left - r.left,
            right: r.right === !1 ? this.width : s.right + r.right,
            top: r.top === !1 ? 0 : s.top - r.top,
            bottom: r.bottom === !1 ? this.height : s.bottom + r.bottom,
          }),
        e.controller.draw(),
        i && s0(n),
        (o.cancelable = !1),
        this.notifyPlugins("afterDatasetDraw", o));
    }
    isPointInArea(e) {
      return pa(e, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(e, n, r, i) {
      const s = M7.modes[n];
      return typeof s == "function" ? s(this, e, r, i) : [];
    }
    getDatasetMeta(e) {
      const n = this.data.datasets[e],
        r = this._metasets;
      let i = r.filter((s) => s && s._dataset === n).pop();
      return (
        i ||
          ((i = {
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
          r.push(i)),
        i
      );
    }
    getContext() {
      return (
        this.$context ||
        (this.$context = Ti(null, { chart: this, type: "chart" }))
      );
    }
    getVisibleDatasetCount() {
      return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(e) {
      const n = this.data.datasets[e];
      if (!n) return !1;
      const r = this.getDatasetMeta(e);
      return typeof r.hidden == "boolean" ? !r.hidden : !n.hidden;
    }
    setDatasetVisibility(e, n) {
      const r = this.getDatasetMeta(e);
      r.hidden = !n;
    }
    toggleDataVisibility(e) {
      this._hiddenIndices[e] = !this._hiddenIndices[e];
    }
    getDataVisibility(e) {
      return !this._hiddenIndices[e];
    }
    _updateVisibility(e, n, r) {
      const i = r ? "show" : "hide",
        s = this.getDatasetMeta(e),
        o = s.controller._resolveAnimations(void 0, i);
      Mc(n)
        ? ((s.data[n].hidden = !r), this.update())
        : (this.setDatasetVisibility(e, r),
          o.update(s, { visible: r }),
          this.update((a) => (a.datasetIndex === e ? i : void 0)));
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
        this.stop(), Rn.remove(this), e = 0, n = this.data.datasets.length;
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
          Jg(e, n),
          this.platform.releaseContext(n),
          (this.canvas = null),
          (this.ctx = null)),
        delete Vl[this.id],
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
        r = (s, o) => {
          n.addEventListener(this, s, o), (e[s] = o);
        },
        i = (s, o, a) => {
          (s.offsetX = o), (s.offsetY = a), this._eventHandler(s);
        };
      he(this.options.events, (s) => r(s, i));
    }
    bindResponsiveEvents() {
      this._responsiveListeners || (this._responsiveListeners = {});
      const e = this._responsiveListeners,
        n = this.platform,
        r = (l, c) => {
          n.addEventListener(this, l, c), (e[l] = c);
        },
        i = (l, c) => {
          e[l] && (n.removeEventListener(this, l, c), delete e[l]);
        },
        s = (l, c) => {
          this.canvas && this.resize(l, c);
        };
      let o;
      const a = () => {
        i("attach", a),
          (this.attached = !0),
          this.resize(),
          r("resize", s),
          r("detach", o);
      };
      (o = () => {
        (this.attached = !1),
          i("resize", s),
          this._stop(),
          this._resize(0, 0),
          r("attach", a);
      }),
        n.isAttached(this.canvas) ? a() : o();
    }
    unbindEvents() {
      he(this._listeners, (e, n) => {
        this.platform.removeEventListener(this, n, e);
      }),
        (this._listeners = {}),
        he(this._responsiveListeners, (e, n) => {
          this.platform.removeEventListener(this, n, e);
        }),
        (this._responsiveListeners = void 0);
    }
    updateHoverStyle(e, n, r) {
      const i = r ? "set" : "remove";
      let s, o, a, l;
      for (
        n === "dataset" &&
          ((s = this.getDatasetMeta(e[0].datasetIndex)),
          s.controller["_" + i + "DatasetHoverStyle"]()),
          a = 0,
          l = e.length;
        a < l;
        ++a
      ) {
        o = e[a];
        const c = o && this.getDatasetMeta(o.datasetIndex).controller;
        c && c[i + "HoverStyle"](o.element, o.datasetIndex, o.index);
      }
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(e) {
      const n = this._active || [],
        r = e.map(({ datasetIndex: s, index: o }) => {
          const a = this.getDatasetMeta(s);
          if (!a) throw new Error("No dataset found at index " + s);
          return { datasetIndex: s, element: a.data[o], index: o };
        });
      !jc(r, n) &&
        ((this._active = r),
        (this._lastEvent = null),
        this._updateHoverStyles(r, n));
    }
    notifyPlugins(e, n, r) {
      return this._plugins.notify(this, e, n, r);
    }
    isPluginEnabled(e) {
      return this._plugins._cache.filter((n) => n.plugin.id === e).length === 1;
    }
    _updateHoverStyles(e, n, r) {
      const i = this.options.hover,
        s = (l, c) =>
          l.filter(
            (u) =>
              !c.some(
                (d) => u.datasetIndex === d.datasetIndex && u.index === d.index,
              ),
          ),
        o = s(n, e),
        a = r ? e : s(e, n);
      o.length && this.updateHoverStyle(o, i.mode, !1),
        a.length && i.mode && this.updateHoverStyle(a, i.mode, !0);
    }
    _eventHandler(e, n) {
      const r = {
          event: e,
          replay: n,
          cancelable: !0,
          inChartArea: this.isPointInArea(e),
        },
        i = (o) =>
          (o.options.events || this.options.events).includes(e.native.type);
      if (this.notifyPlugins("beforeEvent", r, i) === !1) return;
      const s = this._handleEvent(e, n, r.inChartArea);
      return (
        (r.cancelable = !1),
        this.notifyPlugins("afterEvent", r, i),
        (s || r.changed) && this.render(),
        this
      );
    }
    _handleEvent(e, n, r) {
      const { _active: i = [], options: s } = this,
        o = n,
        a = this._getActiveElements(e, i, r, o),
        l = ZO(e),
        c = B9(e, this._lastEvent, r, l);
      r &&
        ((this._lastEvent = null),
        ve(s.onHover, [e, a, this], this),
        l && ve(s.onClick, [e, a, this], this));
      const u = !jc(a, i);
      return (
        (u || n) && ((this._active = a), this._updateHoverStyles(a, i, n)),
        (this._lastEvent = c),
        u
      );
    }
    _getActiveElements(e, n, r, i) {
      if (e.type === "mouseout") return [];
      if (!r) return n;
      const s = this.options.hover;
      return this.getElementsAtEventForMode(e, s.mode, s, i);
    }
  }),
  ee(or, "defaults", Pe),
  ee(or, "instances", Vl),
  ee(or, "overrides", bi),
  ee(or, "registry", wn),
  ee(or, "version", D9),
  ee(or, "getChart", N1),
  or);
function P1() {
  return he(La.instances, (t) => t._plugins.invalidate());
}
function Rb(t, e, n = e) {
  (t.lineCap = ae(n.borderCapStyle, e.borderCapStyle)),
    t.setLineDash(ae(n.borderDash, e.borderDash)),
    (t.lineDashOffset = ae(n.borderDashOffset, e.borderDashOffset)),
    (t.lineJoin = ae(n.borderJoinStyle, e.borderJoinStyle)),
    (t.lineWidth = ae(n.borderWidth, e.borderWidth)),
    (t.strokeStyle = ae(n.borderColor, e.borderColor));
}
function z9(t, e, n) {
  t.lineTo(n.x, n.y);
}
function H9(t) {
  return t.stepped
    ? C6
    : t.tension || t.cubicInterpolationMode === "monotone"
    ? k6
    : z9;
}
function Db(t, e, n = {}) {
  const r = t.length,
    { start: i = 0, end: s = r - 1 } = n,
    { start: o, end: a } = e,
    l = Math.max(i, o),
    c = Math.min(s, a),
    u = (i < o && s < o) || (i > a && s > a);
  return {
    count: r,
    start: l,
    loop: e.loop,
    ilen: c < l && !u ? r + c - l : c - l,
  };
}
function W9(t, e, n, r) {
  const { points: i, options: s } = e,
    { count: o, start: a, loop: l, ilen: c } = Db(i, n, r),
    u = H9(s);
  let { move: d = !0, reverse: h } = r || {},
    p,
    m,
    g;
  for (p = 0; p <= c; ++p)
    (m = i[(a + (h ? c - p : p)) % o]),
      !m.skip &&
        (d ? (t.moveTo(m.x, m.y), (d = !1)) : u(t, g, m, h, s.stepped),
        (g = m));
  return l && ((m = i[(a + (h ? c : 0)) % o]), u(t, g, m, h, s.stepped)), !!l;
}
function U9(t, e, n, r) {
  const i = e.points,
    { count: s, start: o, ilen: a } = Db(i, n, r),
    { move: l = !0, reverse: c } = r || {};
  let u = 0,
    d = 0,
    h,
    p,
    m,
    g,
    v,
    y;
  const x = (w) => (o + (c ? a - w : w)) % s,
    _ = () => {
      g !== v && (t.lineTo(u, v), t.lineTo(u, g), t.lineTo(u, y));
    };
  for (l && ((p = i[x(0)]), t.moveTo(p.x, p.y)), h = 0; h <= a; ++h) {
    if (((p = i[x(h)]), p.skip)) continue;
    const w = p.x,
      E = p.y,
      S = w | 0;
    S === m
      ? (E < g ? (g = E) : E > v && (v = E), (u = (d * u + w) / ++d))
      : (_(), t.lineTo(w, E), (m = S), (d = 0), (g = v = E)),
      (y = E);
  }
  _();
}
function ph(t) {
  const e = t.options,
    n = e.borderDash && e.borderDash.length;
  return !t._decimated &&
    !t._loop &&
    !e.tension &&
    e.cubicInterpolationMode !== "monotone" &&
    !e.stepped &&
    !n
    ? U9
    : W9;
}
function V9(t) {
  return t.stepped
    ? s7
    : t.tension || t.cubicInterpolationMode === "monotone"
    ? o7
    : Jr;
}
function Y9(t, e, n, r) {
  let i = e._path;
  i || ((i = e._path = new Path2D()), e.path(i, n, r) && i.closePath()),
    Rb(t, e.options),
    t.stroke(i);
}
function G9(t, e, n, r) {
  const { segments: i, options: s } = e,
    o = ph(e);
  for (const a of i)
    Rb(t, s, a.style),
      t.beginPath(),
      o(t, e, a, { start: n, end: n + r - 1 }) && t.closePath(),
      t.stroke();
}
const K9 = typeof Path2D == "function";
function q9(t, e, n, r) {
  K9 && !e.options.segment ? Y9(t, e, n, r) : G9(t, e, n, r);
}
class ts extends Oi {
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
    const r = this.options;
    if (
      (r.tension || r.cubicInterpolationMode === "monotone") &&
      !r.stepped &&
      !this._pointsUpdated
    ) {
      const i = r.spanGaps ? this._loop : this._fullLoop;
      Q6(this._points, r, e, i, n), (this._pointsUpdated = !0);
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
    return this._segments || (this._segments = p7(this, this.options.segment));
  }
  first() {
    const e = this.segments,
      n = this.points;
    return e.length && n[e[0].start];
  }
  last() {
    const e = this.segments,
      n = this.points,
      r = e.length;
    return r && n[e[r - 1].end];
  }
  interpolate(e, n) {
    const r = this.options,
      i = e[n],
      s = this.points,
      o = d7(this, { property: n, start: i, end: i });
    if (!o.length) return;
    const a = [],
      l = V9(r);
    let c, u;
    for (c = 0, u = o.length; c < u; ++c) {
      const { start: d, end: h } = o[c],
        p = s[d],
        m = s[h];
      if (p === m) {
        a.push(p);
        continue;
      }
      const g = Math.abs((i - p[n]) / (m[n] - p[n])),
        v = l(p, m, g, r.stepped);
      (v[n] = e[n]), a.push(v);
    }
    return a.length === 1 ? a[0] : a;
  }
  pathSegment(e, n, r) {
    return ph(this)(e, this, n, r);
  }
  path(e, n, r) {
    const i = this.segments,
      s = ph(this);
    let o = this._loop;
    (n = n || 0), (r = r || this.points.length - n);
    for (const a of i) o &= s(e, this, a, { start: n, end: n + r - 1 });
    return !!o;
  }
  draw(e, n, r, i) {
    const s = this.options || {};
    (this.points || []).length &&
      s.borderWidth &&
      (e.save(), q9(e, this, r, i), e.restore()),
      this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
  }
}
ee(ts, "id", "line"),
  ee(ts, "defaults", {
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
  ee(ts, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  }),
  ee(ts, "descriptors", {
    _scriptable: !0,
    _indexable: (e) => e !== "borderDash" && e !== "fill",
  });
function L1(t, e, n, r) {
  const i = t.options,
    { [n]: s } = t.getProps([n], r);
  return Math.abs(e - s) < i.radius + i.hitRadius;
}
class zo extends Oi {
  constructor(n) {
    super();
    ee(this, "parsed");
    ee(this, "skip");
    ee(this, "stop");
    (this.options = void 0),
      (this.parsed = void 0),
      (this.skip = void 0),
      (this.stop = void 0),
      n && Object.assign(this, n);
  }
  inRange(n, r, i) {
    const s = this.options,
      { x: o, y: a } = this.getProps(["x", "y"], i);
    return (
      Math.pow(n - o, 2) + Math.pow(r - a, 2) <
      Math.pow(s.hitRadius + s.radius, 2)
    );
  }
  inXRange(n, r) {
    return L1(this, n, "x", r);
  }
  inYRange(n, r) {
    return L1(this, n, "y", r);
  }
  getCenterPoint(n) {
    const { x: r, y: i } = this.getProps(["x", "y"], n);
    return { x: r, y: i };
  }
  size(n) {
    n = n || this.options || {};
    let r = n.radius || 0;
    r = Math.max(r, (r && n.hoverRadius) || 0);
    const i = (r && n.borderWidth) || 0;
    return (r + i) * 2;
  }
  draw(n, r) {
    const i = this.options;
    this.skip ||
      i.radius < 0.1 ||
      !pa(this, r, this.size(i) / 2) ||
      ((n.strokeStyle = i.borderColor),
      (n.lineWidth = i.borderWidth),
      (n.fillStyle = i.backgroundColor),
      uh(n, i, this.x, this.y));
  }
  getRange() {
    const n = this.options || {};
    return n.radius + n.hitRadius;
  }
}
ee(zo, "id", "point"),
  ee(zo, "defaults", {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: "circle",
    radius: 3,
    rotation: 0,
  }),
  ee(zo, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  });
const j1 = (t, e) => {
    let { boxHeight: n = e, boxWidth: r = e } = t;
    return (
      t.usePointStyle &&
        ((n = Math.min(n, e)), (r = t.pointStyleWidth || Math.min(r, e))),
      { boxWidth: r, boxHeight: n, itemHeight: Math.max(e, n) }
    );
  },
  X9 = (t, e) =>
    t !== null &&
    e !== null &&
    t.datasetIndex === e.datasetIndex &&
    t.index === e.index;
class R1 extends Oi {
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
  update(e, n, r) {
    (this.maxWidth = e),
      (this.maxHeight = n),
      (this._margins = r),
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
    let n = ve(e.generateLabels, [this.chart], this) || [];
    e.filter && (n = n.filter((r) => e.filter(r, this.chart.data))),
      e.sort && (n = n.sort((r, i) => e.sort(r, i, this.chart.data))),
      this.options.reverse && n.reverse(),
      (this.legendItems = n);
  }
  fit() {
    const { options: e, ctx: n } = this;
    if (!e.display) {
      this.width = this.height = 0;
      return;
    }
    const r = e.labels,
      i = st(r.font),
      s = i.size,
      o = this._computeTitleHeight(),
      { boxWidth: a, itemHeight: l } = j1(r, s);
    let c, u;
    (n.font = i.string),
      this.isHorizontal()
        ? ((c = this.maxWidth), (u = this._fitRows(o, s, a, l) + 10))
        : ((u = this.maxHeight), (c = this._fitCols(o, i, a, l) + 10)),
      (this.width = Math.min(c, e.maxWidth || this.maxWidth)),
      (this.height = Math.min(u, e.maxHeight || this.maxHeight));
  }
  _fitRows(e, n, r, i) {
    const {
        ctx: s,
        maxWidth: o,
        options: {
          labels: { padding: a },
        },
      } = this,
      l = (this.legendHitBoxes = []),
      c = (this.lineWidths = [0]),
      u = i + a;
    let d = e;
    (s.textAlign = "left"), (s.textBaseline = "middle");
    let h = -1,
      p = -u;
    return (
      this.legendItems.forEach((m, g) => {
        const v = r + n / 2 + s.measureText(m.text).width;
        (g === 0 || c[c.length - 1] + v + 2 * a > o) &&
          ((d += u), (c[c.length - (g > 0 ? 0 : 1)] = 0), (p += u), h++),
          (l[g] = { left: 0, top: p, row: h, width: v, height: i }),
          (c[c.length - 1] += v + a);
      }),
      d
    );
  }
  _fitCols(e, n, r, i) {
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
      m = 0,
      g = 0;
    return (
      this.legendItems.forEach((v, y) => {
        const { itemWidth: x, itemHeight: _ } = Q9(r, n, s, v, i);
        y > 0 &&
          p + _ + 2 * a > u &&
          ((d += h + a),
          c.push({ width: h, height: p }),
          (m += h + a),
          g++,
          (h = p = 0)),
          (l[y] = { left: m, top: p, col: g, width: x, height: _ }),
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
          align: r,
          labels: { padding: i },
          rtl: s,
        },
      } = this,
      o = ds(s, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0,
        l = nt(r, this.left + i, this.right - this.lineWidths[a]);
      for (const c of n)
        a !== c.row &&
          ((a = c.row),
          (l = nt(r, this.left + i, this.right - this.lineWidths[a]))),
          (c.top += this.top + e + i),
          (c.left = o.leftForLtr(o.x(l), c.width)),
          (l += c.width + i);
    } else {
      let a = 0,
        l = nt(r, this.top + e + i, this.bottom - this.columnSizes[a].height);
      for (const c of n)
        c.col !== a &&
          ((a = c.col),
          (l = nt(
            r,
            this.top + e + i,
            this.bottom - this.columnSizes[a].height,
          ))),
          (c.top = l),
          (c.left += this.left + i),
          (c.left = o.leftForLtr(o.x(c.left), c.width)),
          (l += c.height + i);
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
      i0(e, this), this._draw(), s0(e);
    }
  }
  _draw() {
    const { options: e, columnSizes: n, lineWidths: r, ctx: i } = this,
      { align: s, labels: o } = e,
      a = Pe.color,
      l = ds(e.rtl, this.left, this.width),
      c = st(o.font),
      { padding: u } = o,
      d = c.size,
      h = d / 2;
    let p;
    this.drawTitle(),
      (i.textAlign = l.textAlign("left")),
      (i.textBaseline = "middle"),
      (i.lineWidth = 0.5),
      (i.font = c.string);
    const { boxWidth: m, boxHeight: g, itemHeight: v } = j1(o, d),
      y = function (S, C, k) {
        if (isNaN(m) || m <= 0 || isNaN(g) || g < 0) return;
        i.save();
        const L = ae(k.lineWidth, 1);
        if (
          ((i.fillStyle = ae(k.fillStyle, a)),
          (i.lineCap = ae(k.lineCap, "butt")),
          (i.lineDashOffset = ae(k.lineDashOffset, 0)),
          (i.lineJoin = ae(k.lineJoin, "miter")),
          (i.lineWidth = L),
          (i.strokeStyle = ae(k.strokeStyle, a)),
          i.setLineDash(ae(k.lineDash, [])),
          o.usePointStyle)
        ) {
          const j = {
              radius: (g * Math.SQRT2) / 2,
              pointStyle: k.pointStyle,
              rotation: k.rotation,
              borderWidth: L,
            },
            $ = l.xPlus(S, m / 2),
            N = C + h;
          hb(i, j, $, N, o.pointStyleWidth && m);
        } else {
          const j = C + Math.max((d - g) / 2, 0),
            $ = l.leftForLtr(S, m),
            N = Bo(k.borderRadius);
          i.beginPath(),
            Object.values(N).some((D) => D !== 0)
              ? dh(i, { x: $, y: j, w: m, h: g, radius: N })
              : i.rect($, j, m, g),
            i.fill(),
            L !== 0 && i.stroke();
        }
        i.restore();
      },
      x = function (S, C, k) {
        ma(i, k.text, S, C + v / 2, c, {
          strikethrough: k.hidden,
          textAlign: l.textAlign(k.textAlign),
        });
      },
      _ = this.isHorizontal(),
      w = this._computeTitleHeight();
    _
      ? (p = {
          x: nt(s, this.left + u, this.right - r[0]),
          y: this.top + u + w,
          line: 0,
        })
      : (p = {
          x: this.left + u,
          y: nt(s, this.top + w + u, this.bottom - n[0].height),
          line: 0,
        }),
      _b(this.ctx, e.textDirection);
    const E = v + u;
    this.legendItems.forEach((S, C) => {
      (i.strokeStyle = S.fontColor), (i.fillStyle = S.fontColor);
      const k = i.measureText(S.text).width,
        L = l.textAlign(S.textAlign || (S.textAlign = o.textAlign)),
        j = m + h + k;
      let $ = p.x,
        N = p.y;
      l.setWidth(this.width),
        _
          ? C > 0 &&
            $ + j + u > this.right &&
            ((N = p.y += E),
            p.line++,
            ($ = p.x = nt(s, this.left + u, this.right - r[p.line])))
          : C > 0 &&
            N + E > this.bottom &&
            (($ = p.x = $ + n[p.line].width + u),
            p.line++,
            (N = p.y =
              nt(s, this.top + w + u, this.bottom - n[p.line].height)));
      const D = l.x($);
      if (
        (y(D, N, S),
        ($ = h6(L, $ + m + h, _ ? $ + j : this.right, e.rtl)),
        x(l.x($), N, S),
        _)
      )
        p.x += j + u;
      else if (typeof S.text != "string") {
        const H = c.lineHeight;
        p.y += Mb(S, H) + u;
      } else p.y += E;
    }),
      bb(this.ctx, e.textDirection);
  }
  drawTitle() {
    const e = this.options,
      n = e.title,
      r = st(n.font),
      i = en(n.padding);
    if (!n.display) return;
    const s = ds(e.rtl, this.left, this.width),
      o = this.ctx,
      a = n.position,
      l = r.size / 2,
      c = i.top + l;
    let u,
      d = this.left,
      h = this.width;
    if (this.isHorizontal())
      (h = Math.max(...this.lineWidths)),
        (u = this.top + c),
        (d = nt(e.align, d, this.right - h));
    else {
      const m = this.columnSizes.reduce((g, v) => Math.max(g, v.height), 0);
      u =
        c +
        nt(
          e.align,
          this.top,
          this.bottom - m - e.labels.padding - this._computeTitleHeight(),
        );
    }
    const p = nt(a, d, d + h);
    (o.textAlign = s.textAlign(e0(a))),
      (o.textBaseline = "middle"),
      (o.strokeStyle = n.color),
      (o.fillStyle = n.color),
      (o.font = r.string),
      ma(o, n.text, p, u, r);
  }
  _computeTitleHeight() {
    const e = this.options.title,
      n = st(e.font),
      r = en(e.padding);
    return e.display ? n.lineHeight + r.height : 0;
  }
  _getLegendItemAt(e, n) {
    let r, i, s;
    if (_o(e, this.left, this.right) && _o(n, this.top, this.bottom)) {
      for (s = this.legendHitBoxes, r = 0; r < s.length; ++r)
        if (
          ((i = s[r]),
          _o(e, i.left, i.left + i.width) && _o(n, i.top, i.top + i.height))
        )
          return this.legendItems[r];
    }
    return null;
  }
  handleEvent(e) {
    const n = this.options;
    if (!eA(e.type, n)) return;
    const r = this._getLegendItemAt(e.x, e.y);
    if (e.type === "mousemove" || e.type === "mouseout") {
      const i = this._hoveredItem,
        s = X9(i, r);
      i && !s && ve(n.onLeave, [e, i, this], this),
        (this._hoveredItem = r),
        r && !s && ve(n.onHover, [e, r, this], this);
    } else r && ve(n.onClick, [e, r, this], this);
  }
}
function Q9(t, e, n, r, i) {
  const s = J9(r, t, e, n),
    o = Z9(i, r, e.lineHeight);
  return { itemWidth: s, itemHeight: o };
}
function J9(t, e, n, r) {
  let i = t.text;
  return (
    i &&
      typeof i != "string" &&
      (i = i.reduce((s, o) => (s.length > o.length ? s : o))),
    e + n.size / 2 + r.measureText(i).width
  );
}
function Z9(t, e, n) {
  let r = t;
  return typeof e.text != "string" && (r = Mb(e, n)), r;
}
function Mb(t, e) {
  const n = t.text ? t.text.length : 0;
  return e * n;
}
function eA(t, e) {
  return !!(
    ((t === "mousemove" || t === "mouseout") && (e.onHover || e.onLeave)) ||
    (e.onClick && (t === "click" || t === "mouseup"))
  );
}
var Ib = {
  id: "legend",
  _element: R1,
  start(t, e, n) {
    const r = (t.legend = new R1({ ctx: t.ctx, options: n, chart: t }));
    qt.configure(t, r, n), qt.addBox(t, r);
  },
  stop(t) {
    qt.removeBox(t, t.legend), delete t.legend;
  },
  beforeUpdate(t, e, n) {
    const r = t.legend;
    qt.configure(t, r, n), (r.options = n);
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
      const r = e.datasetIndex,
        i = n.chart;
      i.isDatasetVisible(r)
        ? (i.hide(r), (e.hidden = !0))
        : (i.show(r), (e.hidden = !1));
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
              pointStyle: r,
              textAlign: i,
              color: s,
              useBorderRadius: o,
              borderRadius: a,
            },
          } = t.legend.options;
        return t._getSortedDatasetMetas().map((l) => {
          const c = l.controller.getStyle(n ? 0 : void 0),
            u = en(c.borderWidth);
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
            pointStyle: r || c.pointStyle,
            rotation: c.rotation,
            textAlign: i || c.textAlign,
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
class Fb extends Oi {
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
    const r = this.options;
    if (((this.left = 0), (this.top = 0), !r.display)) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    (this.width = this.right = e), (this.height = this.bottom = n);
    const i = We(r.text) ? r.text.length : 1;
    this._padding = en(r.padding);
    const s = i * st(r.font).lineHeight + this._padding.height;
    this.isHorizontal() ? (this.height = s) : (this.width = s);
  }
  isHorizontal() {
    const e = this.options.position;
    return e === "top" || e === "bottom";
  }
  _drawArgs(e) {
    const { top: n, left: r, bottom: i, right: s, options: o } = this,
      a = o.align;
    let l = 0,
      c,
      u,
      d;
    return (
      this.isHorizontal()
        ? ((u = nt(a, r, s)), (d = n + e), (c = s - r))
        : (o.position === "left"
            ? ((u = r + e), (d = nt(a, i, n)), (l = Ve * -0.5))
            : ((u = s - e), (d = nt(a, n, i)), (l = Ve * 0.5)),
          (c = i - n)),
      { titleX: u, titleY: d, maxWidth: c, rotation: l }
    );
  }
  draw() {
    const e = this.ctx,
      n = this.options;
    if (!n.display) return;
    const r = st(n.font),
      s = r.lineHeight / 2 + this._padding.top,
      { titleX: o, titleY: a, maxWidth: l, rotation: c } = this._drawArgs(s);
    ma(e, n.text, 0, 0, r, {
      color: n.color,
      maxWidth: l,
      rotation: c,
      textAlign: e0(n.align),
      textBaseline: "middle",
      translation: [o, a],
    });
  }
}
function tA(t, e) {
  const n = new Fb({ ctx: t.ctx, options: e, chart: t });
  qt.configure(t, n, e), qt.addBox(t, n), (t.titleBlock = n);
}
var Bb = {
  id: "title",
  _element: Fb,
  start(t, e, n) {
    tA(t, n);
  },
  stop(t) {
    const e = t.titleBlock;
    qt.removeBox(t, e), delete t.titleBlock;
  },
  beforeUpdate(t, e, n) {
    const r = t.titleBlock;
    qt.configure(t, r, n), (r.options = n);
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
const wo = {
  average(t) {
    if (!t.length) return !1;
    let e,
      n,
      r = new Set(),
      i = 0,
      s = 0;
    for (e = 0, n = t.length; e < n; ++e) {
      const a = t[e].element;
      if (a && a.hasValue()) {
        const l = a.tooltipPosition();
        r.add(l.x), (i += l.y), ++s;
      }
    }
    return { x: [...r].reduce((a, l) => a + l) / r.size, y: i / s };
  },
  nearest(t, e) {
    if (!t.length) return !1;
    let n = e.x,
      r = e.y,
      i = Number.POSITIVE_INFINITY,
      s,
      o,
      a;
    for (s = 0, o = t.length; s < o; ++s) {
      const l = t[s].element;
      if (l && l.hasValue()) {
        const c = l.getCenterPoint(),
          u = lh(e, c);
        u < i && ((i = u), (a = l));
      }
    }
    if (a) {
      const l = a.tooltipPosition();
      (n = l.x), (r = l.y);
    }
    return { x: n, y: r };
  },
};
function _n(t, e) {
  return e && (We(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
}
function Dn(t) {
  return (typeof t == "string" || t instanceof String) &&
    t.indexOf(`
`) > -1
    ? t.split(`
`)
    : t;
}
function nA(t, e) {
  const { element: n, datasetIndex: r, index: i } = e,
    s = t.getDatasetMeta(r).controller,
    { label: o, value: a } = s.getLabelAndValue(i);
  return {
    chart: t,
    label: o,
    parsed: s.getParsed(i),
    raw: t.data.datasets[r].data[i],
    formattedValue: a,
    dataset: s.getDataset(),
    dataIndex: i,
    datasetIndex: r,
    element: n,
  };
}
function D1(t, e) {
  const n = t.chart.ctx,
    { body: r, footer: i, title: s } = t,
    { boxWidth: o, boxHeight: a } = e,
    l = st(e.bodyFont),
    c = st(e.titleFont),
    u = st(e.footerFont),
    d = s.length,
    h = i.length,
    p = r.length,
    m = en(e.padding);
  let g = m.height,
    v = 0,
    y = r.reduce(
      (w, E) => w + E.before.length + E.lines.length + E.after.length,
      0,
    );
  if (
    ((y += t.beforeBody.length + t.afterBody.length),
    d &&
      (g += d * c.lineHeight + (d - 1) * e.titleSpacing + e.titleMarginBottom),
    y)
  ) {
    const w = e.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    g += p * w + (y - p) * l.lineHeight + (y - 1) * e.bodySpacing;
  }
  h && (g += e.footerMarginTop + h * u.lineHeight + (h - 1) * e.footerSpacing);
  let x = 0;
  const _ = function (w) {
    v = Math.max(v, n.measureText(w).width + x);
  };
  return (
    n.save(),
    (n.font = c.string),
    he(t.title, _),
    (n.font = l.string),
    he(t.beforeBody.concat(t.afterBody), _),
    (x = e.displayColors ? o + 2 + e.boxPadding : 0),
    he(r, (w) => {
      he(w.before, _), he(w.lines, _), he(w.after, _);
    }),
    (x = 0),
    (n.font = u.string),
    he(t.footer, _),
    n.restore(),
    (v += m.width),
    { width: v, height: g }
  );
}
function rA(t, e) {
  const { y: n, height: r } = e;
  return n < r / 2 ? "top" : n > t.height - r / 2 ? "bottom" : "center";
}
function iA(t, e, n, r) {
  const { x: i, width: s } = r,
    o = n.caretSize + n.caretPadding;
  if ((t === "left" && i + s + o > e.width) || (t === "right" && i - s - o < 0))
    return !0;
}
function sA(t, e, n, r) {
  const { x: i, width: s } = n,
    {
      width: o,
      chartArea: { left: a, right: l },
    } = t;
  let c = "center";
  return (
    r === "center"
      ? (c = i <= (a + l) / 2 ? "left" : "right")
      : i <= s / 2
      ? (c = "left")
      : i >= o - s / 2 && (c = "right"),
    iA(c, t, e, n) && (c = "center"),
    c
  );
}
function M1(t, e, n) {
  const r = n.yAlign || e.yAlign || rA(t, n);
  return { xAlign: n.xAlign || e.xAlign || sA(t, e, n, r), yAlign: r };
}
function oA(t, e) {
  let { x: n, width: r } = t;
  return e === "right" ? (n -= r) : e === "center" && (n -= r / 2), n;
}
function aA(t, e, n) {
  let { y: r, height: i } = t;
  return (
    e === "top" ? (r += n) : e === "bottom" ? (r -= i + n) : (r -= i / 2), r
  );
}
function I1(t, e, n, r) {
  const { caretSize: i, caretPadding: s, cornerRadius: o } = t,
    { xAlign: a, yAlign: l } = n,
    c = i + s,
    { topLeft: u, topRight: d, bottomLeft: h, bottomRight: p } = Bo(o);
  let m = oA(e, a);
  const g = aA(e, l, c);
  return (
    l === "center"
      ? a === "left"
        ? (m += c)
        : a === "right" && (m -= c)
      : a === "left"
      ? (m -= Math.max(u, h) + i)
      : a === "right" && (m += Math.max(d, p) + i),
    { x: Kt(m, 0, r.width - e.width), y: Kt(g, 0, r.height - e.height) }
  );
}
function yl(t, e, n) {
  const r = en(n.padding);
  return e === "center"
    ? t.x + t.width / 2
    : e === "right"
    ? t.x + t.width - r.right
    : t.x + r.left;
}
function F1(t) {
  return _n([], Dn(t));
}
function lA(t, e, n) {
  return Ti(t, { tooltip: e, tooltipItems: n, type: "tooltip" });
}
function B1(t, e) {
  const n = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
  return n ? t.override(n) : t;
}
const $b = {
  beforeTitle: jn,
  title(t) {
    if (t.length > 0) {
      const e = t[0],
        n = e.chart.data.labels,
        r = n ? n.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return e.dataset.label || "";
      if (e.label) return e.label;
      if (r > 0 && e.dataIndex < r) return n[e.dataIndex];
    }
    return "";
  },
  afterTitle: jn,
  beforeBody: jn,
  beforeLabel: jn,
  label(t) {
    if (this && this.options && this.options.mode === "dataset")
      return t.label + ": " + t.formattedValue || t.formattedValue;
    let e = t.dataset.label || "";
    e && (e += ": ");
    const n = t.formattedValue;
    return Ae(n) || (e += n), e;
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
  afterLabel: jn,
  afterBody: jn,
  beforeFooter: jn,
  footer: jn,
  afterFooter: jn,
};
function xt(t, e, n, r) {
  const i = t[e].call(n, r);
  return typeof i > "u" ? $b[e].call(n, r) : i;
}
var Fd;
let $1 =
  ((Fd = class extends Oi {
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
        r = this.options.setContext(this.getContext()),
        i = r.enabled && n.options.animation && r.animations,
        s = new Eb(this.chart, i);
      return i._cacheable && (this._cachedAnimations = Object.freeze(s)), s;
    }
    getContext() {
      return (
        this.$context ||
        (this.$context = lA(this.chart.getContext(), this, this._tooltipItems))
      );
    }
    getTitle(e, n) {
      const { callbacks: r } = n,
        i = xt(r, "beforeTitle", this, e),
        s = xt(r, "title", this, e),
        o = xt(r, "afterTitle", this, e);
      let a = [];
      return (a = _n(a, Dn(i))), (a = _n(a, Dn(s))), (a = _n(a, Dn(o))), a;
    }
    getBeforeBody(e, n) {
      return F1(xt(n.callbacks, "beforeBody", this, e));
    }
    getBody(e, n) {
      const { callbacks: r } = n,
        i = [];
      return (
        he(e, (s) => {
          const o = { before: [], lines: [], after: [] },
            a = B1(r, s);
          _n(o.before, Dn(xt(a, "beforeLabel", this, s))),
            _n(o.lines, xt(a, "label", this, s)),
            _n(o.after, Dn(xt(a, "afterLabel", this, s))),
            i.push(o);
        }),
        i
      );
    }
    getAfterBody(e, n) {
      return F1(xt(n.callbacks, "afterBody", this, e));
    }
    getFooter(e, n) {
      const { callbacks: r } = n,
        i = xt(r, "beforeFooter", this, e),
        s = xt(r, "footer", this, e),
        o = xt(r, "afterFooter", this, e);
      let a = [];
      return (a = _n(a, Dn(i))), (a = _n(a, Dn(s))), (a = _n(a, Dn(o))), a;
    }
    _createItems(e) {
      const n = this._active,
        r = this.chart.data,
        i = [],
        s = [],
        o = [];
      let a = [],
        l,
        c;
      for (l = 0, c = n.length; l < c; ++l) a.push(nA(this.chart, n[l]));
      return (
        e.filter && (a = a.filter((u, d, h) => e.filter(u, d, h, r))),
        e.itemSort && (a = a.sort((u, d) => e.itemSort(u, d, r))),
        he(a, (u) => {
          const d = B1(e.callbacks, u);
          i.push(xt(d, "labelColor", this, u)),
            s.push(xt(d, "labelPointStyle", this, u)),
            o.push(xt(d, "labelTextColor", this, u));
        }),
        (this.labelColors = i),
        (this.labelPointStyles = s),
        (this.labelTextColors = o),
        (this.dataPoints = a),
        a
      );
    }
    update(e, n) {
      const r = this.options.setContext(this.getContext()),
        i = this._active;
      let s,
        o = [];
      if (!i.length) this.opacity !== 0 && (s = { opacity: 0 });
      else {
        const a = wo[r.position].call(this, i, this._eventPosition);
        (o = this._createItems(r)),
          (this.title = this.getTitle(o, r)),
          (this.beforeBody = this.getBeforeBody(o, r)),
          (this.body = this.getBody(o, r)),
          (this.afterBody = this.getAfterBody(o, r)),
          (this.footer = this.getFooter(o, r));
        const l = (this._size = D1(this, r)),
          c = Object.assign({}, a, l),
          u = M1(this.chart, r, c),
          d = I1(r, c, u, this.chart);
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
          r.external &&
          r.external.call(this, {
            chart: this.chart,
            tooltip: this,
            replay: n,
          });
    }
    drawCaret(e, n, r, i) {
      const s = this.getCaretPosition(e, r, i);
      n.lineTo(s.x1, s.y1), n.lineTo(s.x2, s.y2), n.lineTo(s.x3, s.y3);
    }
    getCaretPosition(e, n, r) {
      const { xAlign: i, yAlign: s } = this,
        { caretSize: o, cornerRadius: a } = r,
        { topLeft: l, topRight: c, bottomLeft: u, bottomRight: d } = Bo(a),
        { x: h, y: p } = e,
        { width: m, height: g } = n;
      let v, y, x, _, w, E;
      return (
        s === "center"
          ? ((w = p + g / 2),
            i === "left"
              ? ((v = h), (y = v - o), (_ = w + o), (E = w - o))
              : ((v = h + m), (y = v + o), (_ = w - o), (E = w + o)),
            (x = v))
          : (i === "left"
              ? (y = h + Math.max(l, u) + o)
              : i === "right"
              ? (y = h + m - Math.max(c, d) - o)
              : (y = this.caretX),
            s === "top"
              ? ((_ = p), (w = _ - o), (v = y - o), (x = y + o))
              : ((_ = p + g), (w = _ + o), (v = y + o), (x = y - o)),
            (E = _)),
        { x1: v, x2: y, x3: x, y1: _, y2: w, y3: E }
      );
    }
    drawTitle(e, n, r) {
      const i = this.title,
        s = i.length;
      let o, a, l;
      if (s) {
        const c = ds(r.rtl, this.x, this.width);
        for (
          e.x = yl(this, r.titleAlign, r),
            n.textAlign = c.textAlign(r.titleAlign),
            n.textBaseline = "middle",
            o = st(r.titleFont),
            a = r.titleSpacing,
            n.fillStyle = r.titleColor,
            n.font = o.string,
            l = 0;
          l < s;
          ++l
        )
          n.fillText(i[l], c.x(e.x), e.y + o.lineHeight / 2),
            (e.y += o.lineHeight + a),
            l + 1 === s && (e.y += r.titleMarginBottom - a);
      }
    }
    _drawColorBox(e, n, r, i, s) {
      const o = this.labelColors[r],
        a = this.labelPointStyles[r],
        { boxHeight: l, boxWidth: c } = s,
        u = st(s.bodyFont),
        d = yl(this, "left", s),
        h = i.x(d),
        p = l < u.lineHeight ? (u.lineHeight - l) / 2 : 0,
        m = n.y + p;
      if (s.usePointStyle) {
        const g = {
            radius: Math.min(c, l) / 2,
            pointStyle: a.pointStyle,
            rotation: a.rotation,
            borderWidth: 1,
          },
          v = i.leftForLtr(h, c) + c / 2,
          y = m + l / 2;
        (e.strokeStyle = s.multiKeyBackground),
          (e.fillStyle = s.multiKeyBackground),
          uh(e, g, v, y),
          (e.strokeStyle = o.borderColor),
          (e.fillStyle = o.backgroundColor),
          uh(e, g, v, y);
      } else {
        (e.lineWidth = de(o.borderWidth)
          ? Math.max(...Object.values(o.borderWidth))
          : o.borderWidth || 1),
          (e.strokeStyle = o.borderColor),
          e.setLineDash(o.borderDash || []),
          (e.lineDashOffset = o.borderDashOffset || 0);
        const g = i.leftForLtr(h, c),
          v = i.leftForLtr(i.xPlus(h, 1), c - 2),
          y = Bo(o.borderRadius);
        Object.values(y).some((x) => x !== 0)
          ? (e.beginPath(),
            (e.fillStyle = s.multiKeyBackground),
            dh(e, { x: g, y: m, w: c, h: l, radius: y }),
            e.fill(),
            e.stroke(),
            (e.fillStyle = o.backgroundColor),
            e.beginPath(),
            dh(e, { x: v, y: m + 1, w: c - 2, h: l - 2, radius: y }),
            e.fill())
          : ((e.fillStyle = s.multiKeyBackground),
            e.fillRect(g, m, c, l),
            e.strokeRect(g, m, c, l),
            (e.fillStyle = o.backgroundColor),
            e.fillRect(v, m + 1, c - 2, l - 2));
      }
      e.fillStyle = this.labelTextColors[r];
    }
    drawBody(e, n, r) {
      const { body: i } = this,
        {
          bodySpacing: s,
          bodyAlign: o,
          displayColors: a,
          boxHeight: l,
          boxWidth: c,
          boxPadding: u,
        } = r,
        d = st(r.bodyFont);
      let h = d.lineHeight,
        p = 0;
      const m = ds(r.rtl, this.x, this.width),
        g = function (k) {
          n.fillText(k, m.x(e.x + p), e.y + h / 2), (e.y += h + s);
        },
        v = m.textAlign(o);
      let y, x, _, w, E, S, C;
      for (
        n.textAlign = o,
          n.textBaseline = "middle",
          n.font = d.string,
          e.x = yl(this, v, r),
          n.fillStyle = r.bodyColor,
          he(this.beforeBody, g),
          p = a && v !== "right" ? (o === "center" ? c / 2 + u : c + 2 + u) : 0,
          w = 0,
          S = i.length;
        w < S;
        ++w
      ) {
        for (
          y = i[w],
            x = this.labelTextColors[w],
            n.fillStyle = x,
            he(y.before, g),
            _ = y.lines,
            a &&
              _.length &&
              (this._drawColorBox(n, e, w, m, r),
              (h = Math.max(d.lineHeight, l))),
            E = 0,
            C = _.length;
          E < C;
          ++E
        )
          g(_[E]), (h = d.lineHeight);
        he(y.after, g);
      }
      (p = 0), (h = d.lineHeight), he(this.afterBody, g), (e.y -= s);
    }
    drawFooter(e, n, r) {
      const i = this.footer,
        s = i.length;
      let o, a;
      if (s) {
        const l = ds(r.rtl, this.x, this.width);
        for (
          e.x = yl(this, r.footerAlign, r),
            e.y += r.footerMarginTop,
            n.textAlign = l.textAlign(r.footerAlign),
            n.textBaseline = "middle",
            o = st(r.footerFont),
            n.fillStyle = r.footerColor,
            n.font = o.string,
            a = 0;
          a < s;
          ++a
        )
          n.fillText(i[a], l.x(e.x), e.y + o.lineHeight / 2),
            (e.y += o.lineHeight + r.footerSpacing);
      }
    }
    drawBackground(e, n, r, i) {
      const { xAlign: s, yAlign: o } = this,
        { x: a, y: l } = e,
        { width: c, height: u } = r,
        {
          topLeft: d,
          topRight: h,
          bottomLeft: p,
          bottomRight: m,
        } = Bo(i.cornerRadius);
      (n.fillStyle = i.backgroundColor),
        (n.strokeStyle = i.borderColor),
        (n.lineWidth = i.borderWidth),
        n.beginPath(),
        n.moveTo(a + d, l),
        o === "top" && this.drawCaret(e, n, r, i),
        n.lineTo(a + c - h, l),
        n.quadraticCurveTo(a + c, l, a + c, l + h),
        o === "center" && s === "right" && this.drawCaret(e, n, r, i),
        n.lineTo(a + c, l + u - m),
        n.quadraticCurveTo(a + c, l + u, a + c - m, l + u),
        o === "bottom" && this.drawCaret(e, n, r, i),
        n.lineTo(a + p, l + u),
        n.quadraticCurveTo(a, l + u, a, l + u - p),
        o === "center" && s === "left" && this.drawCaret(e, n, r, i),
        n.lineTo(a, l + d),
        n.quadraticCurveTo(a, l, a + d, l),
        n.closePath(),
        n.fill(),
        i.borderWidth > 0 && n.stroke();
    }
    _updateAnimationTarget(e) {
      const n = this.chart,
        r = this.$animations,
        i = r && r.x,
        s = r && r.y;
      if (i || s) {
        const o = wo[e.position].call(this, this._active, this._eventPosition);
        if (!o) return;
        const a = (this._size = D1(this, e)),
          l = Object.assign({}, o, this._size),
          c = M1(n, e, l),
          u = I1(e, l, c, n);
        (i._to !== u.x || s._to !== u.y) &&
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
      let r = this.opacity;
      if (!r) return;
      this._updateAnimationTarget(n);
      const i = { width: this.width, height: this.height },
        s = { x: this.x, y: this.y };
      r = Math.abs(r) < 0.001 ? 0 : r;
      const o = en(n.padding),
        a =
          this.title.length ||
          this.beforeBody.length ||
          this.body.length ||
          this.afterBody.length ||
          this.footer.length;
      n.enabled &&
        a &&
        (e.save(),
        (e.globalAlpha = r),
        this.drawBackground(s, e, i, n),
        _b(e, n.textDirection),
        (s.y += o.top),
        this.drawTitle(s, e, n),
        this.drawBody(s, e, n),
        this.drawFooter(s, e, n),
        bb(e, n.textDirection),
        e.restore());
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(e, n) {
      const r = this._active,
        i = e.map(({ datasetIndex: a, index: l }) => {
          const c = this.chart.getDatasetMeta(a);
          if (!c) throw new Error("Cannot find a dataset at index " + a);
          return { datasetIndex: a, element: c.data[l], index: l };
        }),
        s = !jc(r, i),
        o = this._positionChanged(i, n);
      (s || o) &&
        ((this._active = i),
        (this._eventPosition = n),
        (this._ignoreReplayEvents = !0),
        this.update(!0));
    }
    handleEvent(e, n, r = !0) {
      if (n && this._ignoreReplayEvents) return !1;
      this._ignoreReplayEvents = !1;
      const i = this.options,
        s = this._active || [],
        o = this._getActiveElements(e, s, n, r),
        a = this._positionChanged(o, e),
        l = n || !jc(o, s) || a;
      return (
        l &&
          ((this._active = o),
          (i.enabled || i.external) &&
            ((this._eventPosition = { x: e.x, y: e.y }), this.update(!0, n))),
        l
      );
    }
    _getActiveElements(e, n, r, i) {
      const s = this.options;
      if (e.type === "mouseout") return [];
      if (!i)
        return n.filter(
          (a) =>
            this.chart.data.datasets[a.datasetIndex] &&
            this.chart
              .getDatasetMeta(a.datasetIndex)
              .controller.getParsed(a.index) !== void 0,
        );
      const o = this.chart.getElementsAtEventForMode(e, s.mode, s, r);
      return s.reverse && o.reverse(), o;
    }
    _positionChanged(e, n) {
      const { caretX: r, caretY: i, options: s } = this,
        o = wo[s.position].call(this, e, n);
      return o !== !1 && (r !== o.x || i !== o.y);
    }
  }),
  ee(Fd, "positioners", wo),
  Fd);
var zb = {
  id: "tooltip",
  _element: $1,
  positioners: wo,
  afterInit(t, e, n) {
    n && (t.tooltip = new $1({ chart: t, options: n }));
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
    callbacks: $b,
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
const cA = (t, e, n, r) => (
  typeof e == "string"
    ? ((n = t.push(e) - 1), r.unshift({ index: n, label: e }))
    : isNaN(e) && (n = null),
  n
);
function uA(t, e, n, r) {
  const i = t.indexOf(e);
  if (i === -1) return cA(t, e, n, r);
  const s = t.lastIndexOf(e);
  return i !== s ? n : i;
}
const dA = (t, e) => (t === null ? null : Kt(Math.round(t), 0, e));
function z1(t) {
  const e = this.getLabels();
  return t >= 0 && t < e.length ? e[t] : t;
}
class $c extends Ai {
  constructor(e) {
    super(e),
      (this._startValue = void 0),
      (this._valueRange = 0),
      (this._addedLabels = []);
  }
  init(e) {
    const n = this._addedLabels;
    if (n.length) {
      const r = this.getLabels();
      for (const { index: i, label: s } of n) r[i] === s && r.splice(i, 1);
      this._addedLabels = [];
    }
    super.init(e);
  }
  parse(e, n) {
    if (Ae(e)) return null;
    const r = this.getLabels();
    return (
      (n =
        isFinite(n) && r[n] === e ? n : uA(r, e, ae(n, e), this._addedLabels)),
      dA(n, r.length - 1)
    );
  }
  determineDataLimits() {
    const { minDefined: e, maxDefined: n } = this.getUserBounds();
    let { min: r, max: i } = this.getMinMax(!0);
    this.options.bounds === "ticks" &&
      (e || (r = 0), n || (i = this.getLabels().length - 1)),
      (this.min = r),
      (this.max = i);
  }
  buildTicks() {
    const e = this.min,
      n = this.max,
      r = this.options.offset,
      i = [];
    let s = this.getLabels();
    (s = e === 0 && n === s.length - 1 ? s : s.slice(e, n + 1)),
      (this._valueRange = Math.max(s.length - (r ? 0 : 1), 1)),
      (this._startValue = this.min - (r ? 0.5 : 0));
    for (let o = e; o <= n; o++) i.push({ value: o });
    return i;
  }
  getLabelForValue(e) {
    return z1.call(this, e);
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
ee($c, "id", "category"), ee($c, "defaults", { ticks: { callback: z1 } });
function fA(t, e) {
  const n = [],
    {
      bounds: i,
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
    m = u - 1,
    { min: g, max: v } = e,
    y = !Ae(o),
    x = !Ae(a),
    _ = !Ae(c),
    w = (v - g) / (d + 1);
  let E = Ug((v - g) / m / p) * p,
    S,
    C,
    k,
    L;
  if (E < 1e-14 && !y && !x) return [{ value: g }, { value: v }];
  (L = Math.ceil(v / E) - Math.floor(g / E)),
    L > m && (E = Ug((L * E) / m / p) * p),
    Ae(l) || ((S = Math.pow(10, l)), (E = Math.ceil(E * S) / S)),
    i === "ticks"
      ? ((C = Math.floor(g / E) * E), (k = Math.ceil(v / E) * E))
      : ((C = g), (k = v)),
    y && x && s && r6((a - o) / s, E / 1e3)
      ? ((L = Math.round(Math.min((a - o) / E, u))),
        (E = (a - o) / L),
        (C = o),
        (k = a))
      : _
      ? ((C = y ? o : C), (k = x ? a : k), (L = c - 1), (E = (k - C) / L))
      : ((L = (k - C) / E),
        Mo(L, Math.round(L), E / 1e3)
          ? (L = Math.round(L))
          : (L = Math.ceil(L)));
  const j = Math.max(Vg(E), Vg(C));
  (S = Math.pow(10, Ae(l) ? j : l)),
    (C = Math.round(C * S) / S),
    (k = Math.round(k * S) / S);
  let $ = 0;
  for (
    y &&
    (h && C !== o
      ? (n.push({ value: o }),
        C < o && $++,
        Mo(Math.round((C + $ * E) * S) / S, o, H1(o, w, t)) && $++)
      : C < o && $++);
    $ < L;
    ++$
  ) {
    const N = Math.round((C + $ * E) * S) / S;
    if (x && N > a) break;
    n.push({ value: N });
  }
  return (
    x && h && k !== a
      ? n.length && Mo(n[n.length - 1].value, a, H1(a, w, t))
        ? (n[n.length - 1].value = a)
        : n.push({ value: a })
      : (!x || k === a) && n.push({ value: k }),
    n
  );
}
function H1(t, e, { horizontal: n, minRotation: r }) {
  const i = ri(r),
    s = (n ? Math.sin(i) : Math.cos(i)) || 0.001,
    o = 0.75 * e * ("" + t).length;
  return Math.min(e / s, o);
}
class Hb extends Ai {
  constructor(e) {
    super(e),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0);
  }
  parse(e, n) {
    return Ae(e) ||
      ((typeof e == "number" || e instanceof Number) && !isFinite(+e))
      ? null
      : +e;
  }
  handleTickRangeOptions() {
    const { beginAtZero: e } = this.options,
      { minDefined: n, maxDefined: r } = this.getUserBounds();
    let { min: i, max: s } = this;
    const o = (l) => (i = n ? i : l),
      a = (l) => (s = r ? s : l);
    if (e) {
      const l = Ts(i),
        c = Ts(s);
      l < 0 && c < 0 ? a(0) : l > 0 && c > 0 && o(0);
    }
    if (i === s) {
      let l = s === 0 ? 1 : Math.abs(s * 0.05);
      a(s + l), e || o(i - l);
    }
    (this.min = i), (this.max = s);
  }
  getTickLimit() {
    const e = this.options.ticks;
    let { maxTicksLimit: n, stepSize: r } = e,
      i;
    return (
      r
        ? ((i = Math.ceil(this.max / r) - Math.floor(this.min / r) + 1),
          i > 1e3 &&
            (console.warn(
              `scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${i} ticks. Limiting to 1000.`,
            ),
            (i = 1e3)))
        : ((i = this.computeTickLimit()), (n = n || 11)),
      n && (i = Math.min(n, i)),
      i
    );
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const e = this.options,
      n = e.ticks;
    let r = this.getTickLimit();
    r = Math.max(2, r);
    const i = {
        maxTicks: r,
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
      o = fA(i, s);
    return (
      e.bounds === "ticks" && ab(o, this, "value"),
      e.reverse
        ? (o.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      o
    );
  }
  configure() {
    const e = this.ticks;
    let n = this.min,
      r = this.max;
    if ((super.configure(), this.options.offset && e.length)) {
      const i = (r - n) / Math.max(e.length - 1, 1) / 2;
      (n -= i), (r += i);
    }
    (this._startValue = n), (this._endValue = r), (this._valueRange = r - n);
  }
  getLabelForValue(e) {
    return n0(e, this.chart.options.locale, this.options.ticks.format);
  }
}
class zc extends Hb {
  determineDataLimits() {
    const { min: e, max: n } = this.getMinMax(!0);
    (this.min = it(e) ? e : 0),
      (this.max = it(n) ? n : 1),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const e = this.isHorizontal(),
      n = e ? this.width : this.height,
      r = ri(this.options.ticks.minRotation),
      i = (e ? Math.sin(r) : Math.cos(r)) || 0.001,
      s = this._resolveTickFontOptions(0);
    return Math.ceil(n / Math.min(40, s.lineHeight / i));
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
ee(zc, "id", "linear"),
  ee(zc, "defaults", { ticks: { callback: r0.formatters.numeric } });
const ya = (t) => Math.floor(xr(t)),
  Gr = (t, e) => Math.pow(10, ya(t) + e);
function W1(t) {
  return t / Math.pow(10, ya(t)) === 1;
}
function U1(t, e, n) {
  const r = Math.pow(10, n),
    i = Math.floor(t / r);
  return Math.ceil(e / r) - i;
}
function hA(t, e) {
  const n = e - t;
  let r = ya(n);
  for (; U1(t, e, r) > 10; ) r++;
  for (; U1(t, e, r) < 10; ) r--;
  return Math.min(r, ya(t));
}
function pA(t, { min: e, max: n }) {
  e = Lt(t.min, e);
  const r = [],
    i = ya(e);
  let s = hA(e, n),
    o = s < 0 ? Math.pow(10, Math.abs(s)) : 1;
  const a = Math.pow(10, s),
    l = i > s ? Math.pow(10, i) : 0,
    c = Math.round((e - l) * o) / o,
    u = Math.floor((e - l) / a / 10) * a * 10;
  let d = Math.floor((c - u) / Math.pow(10, s)),
    h = Lt(t.min, Math.round((l + u + d * Math.pow(10, s)) * o) / o);
  for (; h < n; )
    r.push({ value: h, major: W1(h), significand: d }),
      d >= 10 ? (d = d < 15 ? 15 : 20) : d++,
      d >= 20 && (s++, (d = 2), (o = s >= 0 ? 1 : o)),
      (h = Math.round((l + u + d * Math.pow(10, s)) * o) / o);
  const p = Lt(t.max, h);
  return r.push({ value: p, major: W1(p), significand: d }), r;
}
class Hc extends Ai {
  constructor(e) {
    super(e),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._valueRange = 0);
  }
  parse(e, n) {
    const r = Hb.prototype.parse.apply(this, [e, n]);
    if (r === 0) {
      this._zero = !0;
      return;
    }
    return it(r) && r > 0 ? r : null;
  }
  determineDataLimits() {
    const { min: e, max: n } = this.getMinMax(!0);
    (this.min = it(e) ? Math.max(0, e) : null),
      (this.max = it(n) ? Math.max(0, n) : null),
      this.options.beginAtZero && (this._zero = !0),
      this._zero &&
        this.min !== this._suggestedMin &&
        !it(this._userMin) &&
        (this.min = e === Gr(this.min, 0) ? Gr(this.min, -1) : Gr(this.min, 0)),
      this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: e, maxDefined: n } = this.getUserBounds();
    let r = this.min,
      i = this.max;
    const s = (a) => (r = e ? r : a),
      o = (a) => (i = n ? i : a);
    r === i && (r <= 0 ? (s(1), o(10)) : (s(Gr(r, -1)), o(Gr(i, 1)))),
      r <= 0 && s(Gr(i, -1)),
      i <= 0 && o(Gr(r, 1)),
      (this.min = r),
      (this.max = i);
  }
  buildTicks() {
    const e = this.options,
      n = { min: this._userMin, max: this._userMax },
      r = pA(n, this);
    return (
      e.bounds === "ticks" && ab(r, this, "value"),
      e.reverse
        ? (r.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      r
    );
  }
  getLabelForValue(e) {
    return e === void 0
      ? "0"
      : n0(e, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const e = this.min;
    super.configure(),
      (this._startValue = xr(e)),
      (this._valueRange = xr(this.max) - xr(e));
  }
  getPixelForValue(e) {
    return (
      (e === void 0 || e === 0) && (e = this.min),
      e === null || isNaN(e)
        ? NaN
        : this.getPixelForDecimal(
            e === this.min ? 0 : (xr(e) - this._startValue) / this._valueRange,
          )
    );
  }
  getValueForPixel(e) {
    const n = this.getDecimalForPixel(e);
    return Math.pow(10, this._startValue + n * this._valueRange);
  }
}
ee(Hc, "id", "logarithmic"),
  ee(Hc, "defaults", {
    ticks: { callback: r0.formatters.logarithmic, major: { enabled: !0 } },
  });
const Su = {
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
  wt = Object.keys(Su);
function V1(t, e) {
  return t - e;
}
function Y1(t, e) {
  if (Ae(e)) return null;
  const n = t._adapter,
    { parser: r, round: i, isoWeekday: s } = t._parseOpts;
  let o = e;
  return (
    typeof r == "function" && (o = r(o)),
    it(o) || (o = typeof r == "string" ? n.parse(o, r) : n.parse(o)),
    o === null
      ? null
      : (i &&
          (o =
            i === "week" && (ha(s) || s === !0)
              ? n.startOf(o, "isoWeek", s)
              : n.startOf(o, i)),
        +o)
  );
}
function G1(t, e, n, r) {
  const i = wt.length;
  for (let s = wt.indexOf(t); s < i - 1; ++s) {
    const o = Su[wt[s]],
      a = o.steps ? o.steps : Number.MAX_SAFE_INTEGER;
    if (o.common && Math.ceil((n - e) / (a * o.size)) <= r) return wt[s];
  }
  return wt[i - 1];
}
function mA(t, e, n, r, i) {
  for (let s = wt.length - 1; s >= wt.indexOf(n); s--) {
    const o = wt[s];
    if (Su[o].common && t._adapter.diff(i, r, o) >= e - 1) return o;
  }
  return wt[n ? wt.indexOf(n) : 0];
}
function gA(t) {
  for (let e = wt.indexOf(t) + 1, n = wt.length; e < n; ++e)
    if (Su[wt[e]].common) return wt[e];
}
function K1(t, e, n) {
  if (!n) t[e] = !0;
  else if (n.length) {
    const { lo: r, hi: i } = Zp(n, e),
      s = n[r] >= e ? n[r] : n[i];
    t[s] = !0;
  }
}
function yA(t, e, n, r) {
  const i = t._adapter,
    s = +i.startOf(e[0].value, r),
    o = e[e.length - 1].value;
  let a, l;
  for (a = s; a <= o; a = +i.add(a, 1, r))
    (l = n[a]), l >= 0 && (e[l].major = !0);
  return e;
}
function q1(t, e, n) {
  const r = [],
    i = {},
    s = e.length;
  let o, a;
  for (o = 0; o < s; ++o)
    (a = e[o]), (i[a] = o), r.push({ value: a, major: !1 });
  return s === 0 || !n ? r : yA(t, r, i, n);
}
class Wc extends Ai {
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
    const r = e.time || (e.time = {}),
      i = (this._adapter = new P7._date(e.adapters.date));
    i.init(n),
      Do(r.displayFormats, i.formats()),
      (this._parseOpts = {
        parser: r.parser,
        round: r.round,
        isoWeekday: r.isoWeekday,
      }),
      super.init(e),
      (this._normalized = n.normalized);
  }
  parse(e, n) {
    return e === void 0 ? null : Y1(this, e);
  }
  beforeLayout() {
    super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
  }
  determineDataLimits() {
    const e = this.options,
      n = this._adapter,
      r = e.time.unit || "day";
    let { min: i, max: s, minDefined: o, maxDefined: a } = this.getUserBounds();
    function l(c) {
      !o && !isNaN(c.min) && (i = Math.min(i, c.min)),
        !a && !isNaN(c.max) && (s = Math.max(s, c.max));
    }
    (!o || !a) &&
      (l(this._getLabelBounds()),
      (e.bounds !== "ticks" || e.ticks.source !== "labels") &&
        l(this.getMinMax(!1))),
      (i = it(i) && !isNaN(i) ? i : +n.startOf(Date.now(), r)),
      (s = it(s) && !isNaN(s) ? s : +n.endOf(Date.now(), r) + 1),
      (this.min = Math.min(i, s - 1)),
      (this.max = Math.max(i + 1, s));
  }
  _getLabelBounds() {
    const e = this.getLabelTimestamps();
    let n = Number.POSITIVE_INFINITY,
      r = Number.NEGATIVE_INFINITY;
    return e.length && ((n = e[0]), (r = e[e.length - 1])), { min: n, max: r };
  }
  buildTicks() {
    const e = this.options,
      n = e.time,
      r = e.ticks,
      i = r.source === "labels" ? this.getLabelTimestamps() : this._generate();
    e.bounds === "ticks" &&
      i.length &&
      ((this.min = this._userMin || i[0]),
      (this.max = this._userMax || i[i.length - 1]));
    const s = this.min,
      o = this.max,
      a = c6(i, s, o);
    return (
      (this._unit =
        n.unit ||
        (r.autoSkip
          ? G1(n.minUnit, this.min, this.max, this._getLabelCapacity(s))
          : mA(this, a.length, n.minUnit, this.min, this.max))),
      (this._majorUnit =
        !r.major.enabled || this._unit === "year" ? void 0 : gA(this._unit)),
      this.initOffsets(i),
      e.reverse && a.reverse(),
      q1(this, a, this._majorUnit)
    );
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip &&
      this.initOffsets(this.ticks.map((e) => +e.value));
  }
  initOffsets(e = []) {
    let n = 0,
      r = 0,
      i,
      s;
    this.options.offset &&
      e.length &&
      ((i = this.getDecimalForValue(e[0])),
      e.length === 1
        ? (n = 1 - i)
        : (n = (this.getDecimalForValue(e[1]) - i) / 2),
      (s = this.getDecimalForValue(e[e.length - 1])),
      e.length === 1
        ? (r = s)
        : (r = (s - this.getDecimalForValue(e[e.length - 2])) / 2));
    const o = e.length < 3 ? 0.5 : 0.25;
    (n = Kt(n, 0, o)),
      (r = Kt(r, 0, o)),
      (this._offsets = { start: n, end: r, factor: 1 / (n + 1 + r) });
  }
  _generate() {
    const e = this._adapter,
      n = this.min,
      r = this.max,
      i = this.options,
      s = i.time,
      o = s.unit || G1(s.minUnit, n, r, this._getLabelCapacity(n)),
      a = ae(i.ticks.stepSize, 1),
      l = o === "week" ? s.isoWeekday : !1,
      c = ha(l) || l === !0,
      u = {};
    let d = n,
      h,
      p;
    if (
      (c && (d = +e.startOf(d, "isoWeek", l)),
      (d = +e.startOf(d, c ? "day" : o)),
      e.diff(r, n, o) > 1e5 * a)
    )
      throw new Error(
        n + " and " + r + " are too far apart with stepSize of " + a + " " + o,
      );
    const m = i.ticks.source === "data" && this.getDataTimestamps();
    for (h = d, p = 0; h < r; h = +e.add(h, a, o), p++) K1(u, h, m);
    return (
      (h === r || i.bounds === "ticks" || p === 1) && K1(u, h, m),
      Object.keys(u)
        .sort(V1)
        .map((g) => +g)
    );
  }
  getLabelForValue(e) {
    const n = this._adapter,
      r = this.options.time;
    return r.tooltipFormat
      ? n.format(e, r.tooltipFormat)
      : n.format(e, r.displayFormats.datetime);
  }
  format(e, n) {
    const i = this.options.time.displayFormats,
      s = this._unit,
      o = n || i[s];
    return this._adapter.format(e, o);
  }
  _tickFormatFunction(e, n, r, i) {
    const s = this.options,
      o = s.ticks.callback;
    if (o) return ve(o, [e, n, r], this);
    const a = s.time.displayFormats,
      l = this._unit,
      c = this._majorUnit,
      u = l && a[l],
      d = c && a[c],
      h = r[n],
      p = c && d && h && h.major;
    return this._adapter.format(e, i || (p ? d : u));
  }
  generateTickLabels(e) {
    let n, r, i;
    for (n = 0, r = e.length; n < r; ++n)
      (i = e[n]), (i.label = this._tickFormatFunction(i.value, n, e));
  }
  getDecimalForValue(e) {
    return e === null ? NaN : (e - this.min) / (this.max - this.min);
  }
  getPixelForValue(e) {
    const n = this._offsets,
      r = this.getDecimalForValue(e);
    return this.getPixelForDecimal((n.start + r) * n.factor);
  }
  getValueForPixel(e) {
    const n = this._offsets,
      r = this.getDecimalForPixel(e) / n.factor - n.end;
    return this.min + r * (this.max - this.min);
  }
  _getLabelSize(e) {
    const n = this.options.ticks,
      r = this.ctx.measureText(e).width,
      i = ri(this.isHorizontal() ? n.maxRotation : n.minRotation),
      s = Math.cos(i),
      o = Math.sin(i),
      a = this._resolveTickFontOptions(0).size;
    return { w: r * s + a * o, h: r * o + a * s };
  }
  _getLabelCapacity(e) {
    const n = this.options.time,
      r = n.displayFormats,
      i = r[n.unit] || r.millisecond,
      s = this._tickFormatFunction(e, 0, q1(this, [e], this._majorUnit), i),
      o = this._getLabelSize(s),
      a =
        Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) -
        1;
    return a > 0 ? a : 1;
  }
  getDataTimestamps() {
    let e = this._cache.data || [],
      n,
      r;
    if (e.length) return e;
    const i = this.getMatchingVisibleMetas();
    if (this._normalized && i.length)
      return (this._cache.data = i[0].controller.getAllParsedValues(this));
    for (n = 0, r = i.length; n < r; ++n)
      e = e.concat(i[n].controller.getAllParsedValues(this));
    return (this._cache.data = this.normalize(e));
  }
  getLabelTimestamps() {
    const e = this._cache.labels || [];
    let n, r;
    if (e.length) return e;
    const i = this.getLabels();
    for (n = 0, r = i.length; n < r; ++n) e.push(Y1(this, i[n]));
    return (this._cache.labels = this._normalized ? e : this.normalize(e));
  }
  normalize(e) {
    return d6(e.sort(V1));
  }
}
ee(Wc, "id", "time"),
  ee(Wc, "defaults", {
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
function vl(t, e, n) {
  let r = 0,
    i = t.length - 1,
    s,
    o,
    a,
    l;
  n
    ? (e >= t[r].pos && e <= t[i].pos && ({ lo: r, hi: i } = ii(t, "pos", e)),
      ({ pos: s, time: a } = t[r]),
      ({ pos: o, time: l } = t[i]))
    : (e >= t[r].time &&
        e <= t[i].time &&
        ({ lo: r, hi: i } = ii(t, "time", e)),
      ({ time: s, pos: a } = t[r]),
      ({ time: o, pos: l } = t[i]));
  const c = o - s;
  return c ? a + ((l - a) * (e - s)) / c : a;
}
class X1 extends Wc {
  constructor(e) {
    super(e),
      (this._table = []),
      (this._minPos = void 0),
      (this._tableRange = void 0);
  }
  initOffsets() {
    const e = this._getTimestampsForTable(),
      n = (this._table = this.buildLookupTable(e));
    (this._minPos = vl(n, this.min)),
      (this._tableRange = vl(n, this.max) - this._minPos),
      super.initOffsets(e);
  }
  buildLookupTable(e) {
    const { min: n, max: r } = this,
      i = [],
      s = [];
    let o, a, l, c, u;
    for (o = 0, a = e.length; o < a; ++o)
      (c = e[o]), c >= n && c <= r && i.push(c);
    if (i.length < 2)
      return [
        { time: n, pos: 0 },
        { time: r, pos: 1 },
      ];
    for (o = 0, a = i.length; o < a; ++o)
      (u = i[o + 1]),
        (l = i[o - 1]),
        (c = i[o]),
        Math.round((u + l) / 2) !== c && s.push({ time: c, pos: o / (a - 1) });
    return s;
  }
  _generate() {
    const e = this.min,
      n = this.max;
    let r = super.getDataTimestamps();
    return (
      (!r.includes(e) || !r.length) && r.splice(0, 0, e),
      (!r.includes(n) || r.length === 1) && r.push(n),
      r.sort((i, s) => i - s)
    );
  }
  _getTimestampsForTable() {
    let e = this._cache.all || [];
    if (e.length) return e;
    const n = this.getDataTimestamps(),
      r = this.getLabelTimestamps();
    return (
      n.length && r.length
        ? (e = this.normalize(n.concat(r)))
        : (e = n.length ? n : r),
      (e = this._cache.all = e),
      e
    );
  }
  getDecimalForValue(e) {
    return (vl(this._table, e) - this._minPos) / this._tableRange;
  }
  getValueForPixel(e) {
    const n = this._offsets,
      r = this.getDecimalForPixel(e) / n.factor - n.end;
    return vl(this._table, r * this._tableRange + this._minPos, !0);
  }
}
ee(X1, "id", "timeseries"), ee(X1, "defaults", Wc.defaults);
const Wb = "label";
function Q1(t, e) {
  typeof t == "function" ? t(e) : t && (t.current = e);
}
function vA(t, e) {
  const n = t.options;
  n && e && Object.assign(n, e);
}
function Ub(t, e) {
  t.labels = e;
}
function Vb(t, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Wb;
  const r = [];
  t.datasets = e.map((i) => {
    const s = t.datasets.find((o) => o[n] === i[n]);
    return !s || !i.data || r.includes(s)
      ? { ...i }
      : (r.push(s), Object.assign(s, i), s);
  });
}
function xA(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Wb;
  const n = { labels: [], datasets: [] };
  return Ub(n, t.labels), Vb(n, t.datasets, e), n;
}
function _A(t, e) {
  const {
      height: n = 150,
      width: r = 300,
      redraw: i = !1,
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
    m = b.useRef(),
    g = () => {
      p.current &&
        ((m.current = new La(p.current, {
          type: o,
          data: xA(a, s),
          options: l && { ...l },
          plugins: c,
        })),
        Q1(e, m.current));
    },
    v = () => {
      Q1(e, null), m.current && (m.current.destroy(), (m.current = null));
    };
  return (
    b.useEffect(() => {
      !i && m.current && l && vA(m.current, l);
    }, [i, l]),
    b.useEffect(() => {
      !i && m.current && Ub(m.current.config.data, a.labels);
    }, [i, a.labels]),
    b.useEffect(() => {
      !i && m.current && a.datasets && Vb(m.current.config.data, a.datasets, s);
    }, [i, a.datasets]),
    b.useEffect(() => {
      m.current && (i ? (v(), setTimeout(g)) : m.current.update(d));
    }, [i, l, a.labels, a.datasets, d]),
    b.useEffect(() => {
      m.current && (v(), setTimeout(g));
    }, [o]),
    b.useEffect(() => (g(), () => v()), []),
    J.createElement(
      "canvas",
      Object.assign({ ref: p, role: "img", height: n, width: r }, h),
      u,
    )
  );
}
const bA = b.forwardRef(_A);
function wA(t, e) {
  return (
    La.register(e),
    b.forwardRef((n, r) =>
      J.createElement(bA, Object.assign({}, n, { ref: r, type: t })),
    )
  );
}
const Yb = wA("line", Wl);
La.register(ts, zo, zc, Hc, Bb, $c, zb, Ib);
const EA = (t) => {
    const e = [],
      n = [40, 60],
      r = [60, 80];
    for (let i = 0; i < t; i++) {
      const s = (i * 360) / t,
        o = r[i % r.length],
        a = n[i % n.length];
      e.push(`hsl(${s}, ${o}%, ${a}%)`);
    }
    return e;
  },
  SA = (t) =>
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
      const r = n.size,
        i = EA(r),
        s = Array.from(n.entries()).map(([o, a], l) => ({
          label: o,
          data: a.dates.map((c) => ({
            x: c,
            y: a.weights.get(c),
            reps: a.reps.get(c),
          })),
          fill: !1,
          borderColor: i[l % r],
          tension: 0.1,
        }));
      return {
        labels: n.size > 0 ? n.values().next().value.dates : [],
        datasets: s,
      };
    }),
  CA = ({ userId: t }) => {
    const [e, n] = b.useState([]);
    b.useEffect(() => {
      (async () => {
        try {
          const l = await ua.get(t),
            c = SA(l);
          n(c);
        } catch (l) {
          console.error("Error fetching workout data", l);
        }
      })();
    }, [t]);
    const r = {
        position: "relative",
        width: "100%",
        height: "100vh",
        marginBottom: "20px",
      },
      i = {
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
            type: "logarithmic",
            position: "left",
            title: { display: !0, text: "Weight (kg)" },
            ticks: {
              callback: function (a, l, c) {
                return Number(a.toString());
              },
            },
          },
          x: { title: { display: !0, text: "Date" } },
        },
        plugins: {
          legend: {
            display: !0,
            position: "top",
            labels: { font: { size: 14 } },
          },
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
    return f.jsxs(ot, {
      children: [
        f.jsx(An, {
          children: f.jsx("meta", {
            name: "robots",
            content: "noindex, nofollow",
          }),
        }),
        f.jsx(lt, {
          title: "Workout Progression | Bullet Point Fitness",
          description:
            "Track your fitness journey with detailed workout progression graphs. Monitor your performance over time and optimize your results with Bullet Point Fitness.",
          keywords:
            "workout progression, fitness tracking, performance graphs, workout tracking, Bullet Point Fitness",
          canonicalUrl: "https://bulletpointfitness.com/workout-progression",
          ogImage: "https://bulletpointfitness.com/og-image.png",
        }),
        f.jsx("h1", { style: s, children: "Progress Graphs" }),
        e.length > 0
          ? e.map((a, l) =>
              f.jsx(
                re,
                {
                  className: "my-3",
                  style: i,
                  border: "danger",
                  children: f.jsxs(re.Body, {
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
                        style: r,
                        children: f.jsx(Yb, { data: a, options: o }),
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
La.register(ts, zo, zc, Hc, Bb, $c, zb, Ib);
const kA = (t) => {
    const e = [],
      n = [40, 60],
      r = [60, 80];
    for (let i = 0; i < t; i++) {
      const s = (i * 360) / t,
        o = r[i % r.length],
        a = n[i % n.length];
      e.push(`hsl(${s}, ${o}%, ${a}%)`);
    }
    return e;
  },
  TA = (t) =>
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
      const r = n.size,
        i = kA(r),
        s = Array.from(n.entries()).map(([o, a], l) => ({
          label: o,
          data: a.dates.map((c) => ({
            x: c,
            y: a.weights.get(c),
            reps: a.reps.get(c),
          })),
          fill: !1,
          borderColor: i[l % r],
          tension: 0.1,
        }));
      return {
        labels: n.size > 0 ? n.values().next().value.dates : [],
        datasets: s,
      };
    }),
  OA = ({ userId: t }) => {
    const [e, n] = b.useState([]);
    b.useEffect(() => {
      (async () => {
        try {
          const a = await ua.getInactive(t),
            l = TA(a);
          n(l);
        } catch (a) {
          console.error("Error fetching inactive workout data", a);
        }
      })();
    }, [t]);
    const r = {
        position: "relative",
        width: "100%",
        height: "100vh",
        marginBottom: "20px",
      },
      i = {
        responsive: !0,
        maintainAspectRatio: !1,
        scales: {
          y: {
            type: "logarithmic",
            position: "left",
            title: { display: !0, text: "Weight (kg)" },
            ticks: {
              callback: function (o, a, l) {
                return Number(o.toString());
              },
            },
          },
          x: { title: { display: !0, text: "Date" } },
        },
        plugins: {
          legend: {
            display: !0,
            position: "top",
            labels: { font: { size: 14 } },
          },
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
    return f.jsxs(ot, {
      children: [
        f.jsx(An, {
          children: f.jsx("meta", {
            name: "robots",
            content: "noindex, nofollow",
          }),
        }),
        f.jsx(lt, {
          title: "Past Workout Progression | Bullet Point Fitness",
          description:
            "Analyze your previous workout progression graphs with Bullet Point Fitness. Track your past performance to optimize your fitness journey moving forward.",
          keywords:
            "previous workout progression, fitness tracking, performance graphs, workout analysis, Bullet Point Fitness",
          canonicalUrl:
            "https://bulletpointfitness.com/past-workout-progression",
          ogImage: "https://bulletpointfitness.com/og-image.png",
        }),
        f.jsx("h1", { style: s.header, children: "Past Progress Graphs" }),
        e.length > 0
          ? e.map((o, a) =>
              f.jsx(
                re,
                {
                  className: "my-3",
                  style: s.card,
                  border: "danger",
                  children: f.jsxs(re.Body, {
                    children: [
                      f.jsxs("h3", {
                        style: s.header,
                        children: ["Workout ", a + 1],
                      }),
                      f.jsx("div", {
                        style: r,
                        children: f.jsx(Yb, { data: o, options: i }),
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
  Rt = ({ title: t, description: e, link: n }) => {
    const r = {
      text: { color: "#fff", borderWidth: "2px", backgroundColor: "#df0000" },
      description: { maxWidth: "800px", margin: "auto", padding: 10 },
      header: { textDecoration: "underline", color: "#fff" },
      svg: { margin: 10 },
    };
    return f.jsx(Lr, {
      md: 4,
      className: "block",
      children: f.jsx("a", {
        href: n,
        style: { textDecoration: "none" },
        children: f.jsx(re, {
          className: "mb-4 box-shadow",
          border: "danger",
          style: r.text,
          children: f.jsxs(re.Body, {
            children: [
              f.jsxs(re.Title, {
                style: r.header,
                children: [
                  f.jsx("span", { style: r.svg, children: f.jsx(oe, {}) }),
                  t,
                ],
              }),
              f.jsx(re.Text, { style: r.description, children: e }),
            ],
          }),
        }),
      }),
    });
  },
  AA = "/assets/BulletLanding-h_rkSI0U.webp",
  NA = () => {
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
    return f.jsxs(ot, {
      children: [
        f.jsx(lt, {
          title: "Bullet Point Fitness | Home",
          description:
            "Bullet Point Fitness offers effective exercise techniques tailored for those short on time. Dive into concise videos, target specific muscles, and master the most effective workouts for efficient results.",
          keywords:
            "fitness, exercise, workouts, training videos, muscle map, quick workouts, effective exercise",
          canonicalUrl: "https://bulletpointfitness.com/",
          ogImage: "https://bulletpointfitness.com/og-image.png",
        }),
        f.jsxs(ks, {
          style: t.ctaSection,
          children: [
            f.jsx(Lr, {
              md: 6,
              children: f.jsx(re, {
                className: "text-center",
                style: { border: "none" },
                children: f.jsxs(re.Body, {
                  children: [
                    f.jsx(re.Title, {
                      style: t.ctaText,
                      children: f.jsx("h1", {
                        children: "Welcome to Bullet Point Fitness",
                      }),
                    }),
                    f.jsx(re.Text, {
                      style: t.text,
                      children:
                        "Start your fitness journey with our interactive tools and personalized programs. Learn, train, and transform your body efficiently.",
                    }),
                    f.jsx(xs, {
                      to: "/login",
                      style: t.link,
                      children: f.jsx(ht, {
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
            f.jsx(Lr, {
              md: 6,
              children: f.jsx("img", {
                src: AA,
                alt: "Bullet Point Fitness Transformation - A Visual Journey to Achieving Your Fitness Goals",
                style: t.image,
                loading: "lazy",
              }),
            }),
          ],
        }),
        f.jsxs(ks, {
          children: [
            f.jsx(Rt, {
              title: "Interactive Muscle Map",
              description:
                "You can build all aspects of fitness if you focus on muscle. Click on a muscle to find out more.",
              link: "/muscle-map",
            }),
            f.jsx(Rt, {
              title: "Training Essentials",
              description:
                "Watch videos on the essential concepts of training.",
              link: "/training",
            }),
            f.jsx(Rt, {
              title: "Consultation",
              description:
                "Book in a consultation now to start your fitness journey.",
              link: "/consultation",
            }),
            f.jsx(Rt, {
              title: "Interactive Organ Map",
              description:
                "Your Clickable Guide to Nutrient-Rich Organ Health, click on an organ to find out more.",
              link: "/organ-map",
            }),
            f.jsx(Rt, {
              title: "About",
              description:
                "Find out more about Bullet Point Fitness and all the qualifications.",
              link: "/about",
            }),
            f.jsx(Rt, {
              title: "Contact",
              description:
                "Want to get in contact, click here to send a message.",
              link: "/contact-form",
            }),
            f.jsx(Rt, {
              title: "Login",
              description: "Click here to login to your personalised program.",
              link: "/login",
            }),
          ],
        }),
      ],
    });
  },
  PA = () =>
    f.jsxs(ot, {
      children: [
        f.jsx(lt, {
          title: "Dashboard | Bullet Point Fitness",
          description:
            "Access your Bullet Point Fitness dashboard to view your workouts, track progress, and manage your personalized training program.",
          keywords:
            "fitness dashboard, workout tracking, personalized training, Bullet Point Fitness",
          canonicalUrl: "https://bulletpointfitness.com/user-homepage",
          ogImage: "https://bulletpointfitness.com/og-image.png",
        }),
        f.jsxs(ks, {
          children: [
            f.jsx(An, {
              children: f.jsx("meta", {
                name: "robots",
                content: "noindex, nofollow",
              }),
            }),
            f.jsx(Rt, {
              title: "Bullet Point Fitness Manual",
              description:
                "Read the Bullet Point Fitness Manual to make the most out of your training program.",
              link: "/instructions",
            }),
            f.jsx(Rt, {
              title: "Program Form",
              description:
                "Complete the form to get your personalised training program.",
              link: "/program-form",
            }),
            f.jsx(Rt, {
              title: "Workouts",
              description:
                "Click here to access your workouts and track your lifts.",
              link: "/workouts",
            }),
            f.jsx(Rt, {
              title: "Workout Progression",
              description:
                "Click here to see your progress in each exercise of each workout.",
              link: "/workout-progression",
            }),
            f.jsx(Rt, {
              title: "Past Workout Programs",
              description: "Have a look at your previous workout programs.",
              link: "/past-workout-programs",
            }),
            f.jsx(Rt, {
              title: "Past Workout Progressions",
              description:
                "View past progression of your previous workout programs.",
              link: "/past-workout-progression",
            }),
          ],
        }),
      ],
    }),
  LA = () => {
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
    return f.jsxs(ot, {
      children: [
        f.jsx(An, {
          children: f.jsx("meta", {
            name: "robots",
            content: "noindex, nofollow",
          }),
        }),
        f.jsx(lt, {
          title: "Bullet Point Fitness Manual | Bullet Point Fitness",
          description:
            "Learn how to make the most out of your Bullet Point Fitness program with detailed workout instructions, including how to perform exercises, track progress, and maximize results.",
          keywords:
            "program instructions, fitness guide, workout instructions, exercise guidance, Bullet Point Fitness",
          canonicalUrl: "https://bulletpointfitness.com/instructions",
          ogImage: "https://bulletpointfitness.com/og-image.png",
        }),
        f.jsx("h1", {
          style: t.header,
          children: "Bullet Point Fitness Manual",
        }),
        f.jsx(re, {
          className: "my-3",
          style: t.card,
          border: "danger",
          children: f.jsx(re.Body, {
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
                        f.jsx(oe, {}),
                        " ",
                        f.jsx("strong", { children: "For first-time users: " }),
                        "Before starting your program, take time to review all the exercises listed for your workouts. Watching the exercise demonstration videos, by clicking on the exercise, will help you understand proper form and technique. Once familiar, ensure that you know where all necessary equipment is located in your gym. Having a clear idea of where to find everything will make your workout smoother and help you stay on track. If your gym does not have access to a specific piece of equipment or if you're unsure about an exercise, don't hesitate to get in contact with us. We can provide alternative exercises or adjust your program to better suit your needs.",
                      ],
                    }),
                    f.jsxs("li", {
                      children: [
                        f.jsx(oe, {}),
                        " Perform each workout with at least one rest day between. On rest days, you can do light aerobic activities like walking, cycling, swimming, rowing, or using the elliptical.",
                      ],
                    }),
                    f.jsxs("li", {
                      children: [
                        f.jsx(oe, {}),
                        " When training three times a week, follow a Mon/Wed/Fri or Tues/Thurs/Sat schedule, or any combination that allows a rest day between each workout.",
                      ],
                    }),
                    f.jsxs("li", {
                      children: [
                        f.jsx(oe, {}),
                        " For more frequent training, alternate training days like this:",
                        f.jsxs("ul", {
                          style: t.ulTwo,
                          children: [
                            f.jsxs("li", {
                              children: [
                                f.jsx(oe, {}),
                                "Week 1: Mon/Wed/Fri/Sun",
                              ],
                            }),
                            f.jsxs("li", {
                              children: [
                                f.jsx(oe, {}),
                                "Week 2: Tues/Thurs/Sat",
                              ],
                            }),
                            f.jsxs("li", {
                              children: [f.jsx(oe, {}), "Repeat."],
                            }),
                          ],
                        }),
                      ],
                    }),
                    f.jsxs("li", {
                      children: [
                        f.jsx(oe, {}),
                        " In all stages each workout must be performed once per week, however if you want to maximise any stage you can follow the alternate day schedule.",
                      ],
                    }),
                    f.jsxs("li", {
                      children: [
                        f.jsx(oe, {}),
                        " If you have any further queries don't hesitate to get in contact.",
                      ],
                    }),
                  ],
                }),
                f.jsx("div", {
                  style: t.buttonContainer,
                  children: f.jsx(xs, {
                    to: "/workouts",
                    style: t.link,
                    children: f.jsx(ht, {
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
        f.jsx(re, {
          className: "my-3",
          style: t.card,
          border: "danger",
          children: f.jsx(re.Body, {
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
                        f.jsx(oe, {}),
                        " When you're performing an exercise or workout for the first time and are unsure about the appropriate weight, start with a lighter load. Perform the exercise until task failure (the point where you can no longer complete another rep with the same form). Record the weight and the number of reps you completed, and use this as your baseline to progress in future sessions.",
                      ],
                    }),
                    f.jsxs("li", {
                      children: [
                        f.jsx(oe, {}),
                        " The goal of each exercise and workout is to build up to one working set per exercise, where you push to maximize both weight and reps. Only log the weight and reps for this one working set—there's no need to track your warm-up sets.",
                      ],
                    }),
                    f.jsxs("li", {
                      children: [
                        f.jsx(oe, {}),
                        " Aim to reach task failure within 4-10 reps for your working set, with the ideal range being 5-8 reps.",
                      ],
                    }),
                    f.jsxs("li", {
                      children: [
                        f.jsx(oe, {}),
                        " Focus on increasing weight in your working set as the main goal. Increase reps to adapt to any new weight before moving up. Use the guidance on each exercise to gauge whether you should increase reps or weight.",
                      ],
                    }),
                    f.jsxs("li", {
                      children: [
                        f.jsx(oe, {}),
                        " When increasing the weight, always use the smallest increment available on the equipment you're using (e.g., 2.5 kg or smaller). Be aware that some gyms may have equipment that doesn't increase in standard increments. In such cases, adjust by adding the smallest weight possible. This approach helps you make steady progress while minimizing the risk of injury.",
                      ],
                    }),
                    f.jsxs("li", {
                      children: [
                        f.jsx(oe, {}),
                        " Avoid large jumps in weight. Sudden, significant jumps can lead to improper form and increase the risk of injury. Gradual progression is key to long-term success.",
                      ],
                    }),
                    f.jsxs("li", {
                      children: [
                        f.jsx(oe, {}),
                        " Click on an exercise to view a demo video. Before starting your workout, make sure to watch the demo videos for each exercise to ensure you know how to perform them correctly.",
                      ],
                    }),
                    f.jsxs("li", {
                      children: [
                        f.jsx(oe, {}),
                        " To warm up correctly:",
                        f.jsxs("ul", {
                          style: t.ulTwo,
                          children: [
                            f.jsxs("li", {
                              children: [
                                f.jsx(oe, {}),
                                "Perform a 10-minute aerobic exercise at 60% of your maximum heart rate: (220 - your age) x 0.6.",
                              ],
                            }),
                            f.jsxs("li", {
                              children: [
                                f.jsx(oe, {}),
                                "For the first exercise, perform warmup sets as follows:",
                                f.jsxs("ul", {
                                  style: t.ulTwo,
                                  children: [
                                    f.jsxs("li", {
                                      children: [
                                        f.jsx(oe, {}),
                                        "50% of your working weight for 5 reps",
                                      ],
                                    }),
                                    f.jsxs("li", {
                                      children: [
                                        f.jsx(oe, {}),
                                        "70% of your working weight for 2-3 reps",
                                      ],
                                    }),
                                    f.jsxs("li", {
                                      children: [
                                        f.jsx(oe, {}),
                                        "85% of your working weight for 1-2 reps",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            f.jsxs("li", {
                              children: [
                                f.jsx(oe, {}),
                                "Rest for 2 minutes before performing your working set.",
                              ],
                            }),
                            f.jsxs("li", {
                              children: [
                                f.jsx(oe, {}),
                                "For the subsequent exercises, you can use the 70% and 85% warmup sets to minimize fatigue.",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    f.jsxs("li", {
                      children: [
                        f.jsx(oe, {}),
                        " If you can't perform an exercise due to lack of equipment, contact us to modify your program.",
                      ],
                    }),
                    f.jsxs("li", {
                      children: [
                        f.jsx(oe, {}),
                        " Don't forget to log the weight and reps of the working set for each exercise. Click on the 'Update' button, fill in the weight and reps, then click 'Save' to log your performance.",
                      ],
                    }),
                    f.jsxs("li", {
                      children: [
                        f.jsx(oe, {}),
                        " If you have any further queries don't hesitate to get in contact.",
                      ],
                    }),
                  ],
                }),
                f.jsx("div", {
                  style: t.buttonContainer,
                  children: f.jsx(xs, {
                    to: "/workouts",
                    style: t.link,
                    children: f.jsx(ht, {
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
  J1 = () => {
    const { pathname: t } = Ms();
    return (
      b.useEffect(() => {
        window.scrollTo(0, 0);
      }, [t]),
      null
    );
  },
  jA = "/api/login",
  RA = async (t) => (await fe.post(jA, t)).data,
  DA = { login: RA },
  MA = () => {
    const [t, e] = b.useState(null),
      [n, r] = b.useState(null),
      i = gp();
    b.useEffect(() => {
      e(null);
      const c = Ro.getUser();
      c && e(c);
    }, []);
    const s = (c, u = "info") => {
        r({ message: c, type: u }),
          setTimeout(() => {
            r(null);
          }, 3e3);
      },
      o = async (c, u) => {
        try {
          const d = await DA.login({ username: c, password: u }),
            h = { ...d, userId: d.id };
          Ro.setUser(h),
            e(h),
            i("/user-homepage"),
            s(`${h.username} successfully logged in!`);
        } catch {
          s("Incorrect username/password, please try again.", "alert");
        }
      },
      a = () => {
        e(null), Ro.clearUser(), i("/"), s("Goodbye!");
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
            f.jsx(Tg, {}),
            f.jsx(Cg, { user: t, onLogout: a }),
            f.jsxs("main", {
              children: [
                f.jsx(Ag, { notification: n }),
                f.jsx(J1, {}),
                f.jsxs(jm, {
                  children: [
                    f.jsx(ze, { path: "/", element: f.jsx(NA, {}) }),
                    f.jsx(ze, { path: "/muscle-map", element: f.jsx(w8, {}) }),
                    f.jsx(ze, { path: "/training", element: f.jsx(B8, {}) }),
                    f.jsx(ze, {
                      path: "/consultation",
                      element: f.jsx(i8, {}),
                    }),
                    f.jsx(ze, { path: "/organ-map", element: f.jsx(f8, {}) }),
                    f.jsx(ze, {
                      path: "/login",
                      element: f.jsx($8, { onLogin: o }),
                    }),
                    f.jsx(ze, {
                      path: "/contact-form",
                      element: f.jsx(r8, { notify: s }),
                    }),
                    f.jsx(ze, { path: "/about", element: f.jsx(R8, {}) }),
                    f.jsx(ze, {
                      path: "*",
                      element: f.jsx(Wm, { homeLink: "/" }),
                    }),
                  ],
                }),
              ],
            }),
            f.jsx(kg, {}),
            f.jsx(Bf, {
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
            f.jsx(Tg, {}),
            f.jsx(Cg, { user: t, onLogout: a }),
            f.jsxs("main", {
              children: [
                f.jsx(Ag, { notification: n }),
                f.jsx(J1, {}),
                f.jsxs(jm, {
                  children: [
                    f.jsx(ze, {
                      path: "/user-homepage",
                      element: f.jsx(PA, {}),
                    }),
                    f.jsx(ze, {
                      path: "/program-form",
                      element: f.jsx(vO, { notify: s }),
                    }),
                    f.jsx(ze, {
                      path: "/instructions",
                      element: f.jsx(LA, {}),
                    }),
                    f.jsx(ze, {
                      path: "/workouts",
                      element: f.jsx(EO, { userId: t.id, notify: s }),
                    }),
                    f.jsx(ze, {
                      path: "/workout-progression",
                      element: f.jsx(CA, { userId: t.id }),
                    }),
                    f.jsx(ze, {
                      path: "/past-workout-programs",
                      element: f.jsx(SO, { userId: t.id, notify: s }),
                    }),
                    f.jsx(ze, {
                      path: "/past-workout-progression",
                      element: f.jsx(OA, { userId: t.id }),
                    }),
                    f.jsx(ze, {
                      path: "*",
                      element: f.jsx(Wm, { homeLink: "/user-homepage" }),
                    }),
                  ],
                }),
              ],
            }),
            f.jsx(kg, {}),
            f.jsx(Bf, {
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
function IA(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function (n) {
    var r = e.styles[n] || {},
      i = e.attributes[n] || {},
      s = e.elements[n];
    !Qt(s) ||
      !Nn(s) ||
      (Object.assign(s.style, r),
      Object.keys(i).forEach(function (o) {
        var a = i[o];
        a === !1 ? s.removeAttribute(o) : s.setAttribute(o, a === !0 ? "" : a);
      }));
  });
}
function FA(t) {
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
      Object.keys(e.elements).forEach(function (r) {
        var i = e.elements[r],
          s = e.attributes[r] || {},
          o = Object.keys(e.styles.hasOwnProperty(r) ? e.styles[r] : n[r]),
          a = o.reduce(function (l, c) {
            return (l[c] = ""), l;
          }, {});
        !Qt(i) ||
          !Nn(i) ||
          (Object.assign(i.style, a),
          Object.keys(s).forEach(function (l) {
            i.removeAttribute(l);
          }));
      });
    }
  );
}
const f0 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: IA,
  effect: FA,
  requires: ["computeStyles"],
};
var BA = [Np, Rp, Ap, f0],
  $A = mu({ defaultModifiers: BA }),
  zA = [Np, Rp, Ap, f0, Vx, Wx, Yx, $x, Ux],
  h0 = mu({ defaultModifiers: zA });
const Gb = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      afterMain: Nx,
      afterRead: Tx,
      afterWrite: jx,
      applyStyles: f0,
      arrow: $x,
      auto: hu,
      basePlacements: Fs,
      beforeMain: Ox,
      beforeRead: Cx,
      beforeWrite: Px,
      bottom: Bt,
      clippingParents: Ex,
      computeStyles: Ap,
      createPopper: h0,
      createPopperBase: j5,
      createPopperLite: $A,
      detectOverflow: Cs,
      end: bs,
      eventListeners: Np,
      flip: Wx,
      hide: Ux,
      left: gt,
      main: Ax,
      modifierPhases: Rx,
      offset: Vx,
      placements: Cp,
      popper: Bi,
      popperGenerator: mu,
      popperOffsets: Rp,
      preventOverflow: Yx,
      read: kx,
      reference: Sx,
      right: $t,
      start: vi,
      top: mt,
      variationPlacements: qf,
      viewport: Sp,
      write: Lx,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
/*!
 * Bootstrap v5.3.0 (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ const sr = new Map(),
  Sd = {
    set(t, e, n) {
      sr.has(t) || sr.set(t, new Map());
      const r = sr.get(t);
      if (!r.has(e) && r.size !== 0) {
        console.error(
          `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
            Array.from(r.keys())[0]
          }.`,
        );
        return;
      }
      r.set(e, n);
    },
    get(t, e) {
      return (sr.has(t) && sr.get(t).get(e)) || null;
    },
    remove(t, e) {
      if (!sr.has(t)) return;
      const n = sr.get(t);
      n.delete(e), n.size === 0 && sr.delete(t);
    },
  },
  HA = 1e6,
  WA = 1e3,
  mh = "transitionend",
  Kb = (t) => (
    t &&
      window.CSS &&
      window.CSS.escape &&
      (t = t.replace(/#([^\s"#']+)/g, (e, n) => `#${CSS.escape(n)}`)),
    t
  ),
  UA = (t) =>
    t == null
      ? `${t}`
      : Object.prototype.toString
          .call(t)
          .match(/\s([a-z]+)/i)[1]
          .toLowerCase(),
  VA = (t) => {
    do t += Math.floor(Math.random() * HA);
    while (document.getElementById(t));
    return t;
  },
  YA = (t) => {
    if (!t) return 0;
    let { transitionDuration: e, transitionDelay: n } =
      window.getComputedStyle(t);
    const r = Number.parseFloat(e),
      i = Number.parseFloat(n);
    return !r && !i
      ? 0
      : ((e = e.split(",")[0]),
        (n = n.split(",")[0]),
        (Number.parseFloat(e) + Number.parseFloat(n)) * WA);
  },
  qb = (t) => {
    t.dispatchEvent(new Event(mh));
  },
  Un = (t) =>
    !t || typeof t != "object"
      ? !1
      : (typeof t.jquery < "u" && (t = t[0]), typeof t.nodeType < "u"),
  Rr = (t) =>
    Un(t)
      ? t.jquery
        ? t[0]
        : t
      : typeof t == "string" && t.length > 0
      ? document.querySelector(Kb(t))
      : null,
  zs = (t) => {
    if (!Un(t) || t.getClientRects().length === 0) return !1;
    const e = getComputedStyle(t).getPropertyValue("visibility") === "visible",
      n = t.closest("details:not([open])");
    if (!n) return e;
    if (n !== t) {
      const r = t.closest("summary");
      if ((r && r.parentNode !== n) || r === null) return !1;
    }
    return e;
  },
  Dr = (t) =>
    !t || t.nodeType !== Node.ELEMENT_NODE || t.classList.contains("disabled")
      ? !0
      : typeof t.disabled < "u"
      ? t.disabled
      : t.hasAttribute("disabled") && t.getAttribute("disabled") !== "false",
  Xb = (t) => {
    if (!document.documentElement.attachShadow) return null;
    if (typeof t.getRootNode == "function") {
      const e = t.getRootNode();
      return e instanceof ShadowRoot ? e : null;
    }
    return t instanceof ShadowRoot ? t : t.parentNode ? Xb(t.parentNode) : null;
  },
  Uc = () => {},
  ja = (t) => {
    t.offsetHeight;
  },
  Qb = () =>
    window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
      ? window.jQuery
      : null,
  Cd = [],
  GA = (t) => {
    document.readyState === "loading"
      ? (Cd.length ||
          document.addEventListener("DOMContentLoaded", () => {
            for (const e of Cd) e();
          }),
        Cd.push(t))
      : t();
  },
  tn = () => document.documentElement.dir === "rtl",
  rn = (t) => {
    GA(() => {
      const e = Qb();
      if (e) {
        const n = t.NAME,
          r = e.fn[n];
        (e.fn[n] = t.jQueryInterface),
          (e.fn[n].Constructor = t),
          (e.fn[n].noConflict = () => ((e.fn[n] = r), t.jQueryInterface));
      }
    });
  },
  Et = (t, e = [], n = t) => (typeof t == "function" ? t(...e) : n),
  Jb = (t, e, n = !0) => {
    if (!n) {
      Et(t);
      return;
    }
    const i = YA(e) + 5;
    let s = !1;
    const o = ({ target: a }) => {
      a === e && ((s = !0), e.removeEventListener(mh, o), Et(t));
    };
    e.addEventListener(mh, o),
      setTimeout(() => {
        s || qb(e);
      }, i);
  },
  p0 = (t, e, n, r) => {
    const i = t.length;
    let s = t.indexOf(e);
    return s === -1
      ? !n && r
        ? t[i - 1]
        : t[0]
      : ((s += n ? 1 : -1),
        r && (s = (s + i) % i),
        t[Math.max(0, Math.min(s, i - 1))]);
  },
  KA = /[^.]*(?=\..*)\.|.*/,
  qA = /\..*/,
  XA = /::\d+$/,
  kd = {};
let Z1 = 1;
const Zb = { mouseenter: "mouseover", mouseleave: "mouseout" },
  QA = new Set([
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
function ew(t, e) {
  return (e && `${e}::${Z1++}`) || t.uidEvent || Z1++;
}
function tw(t) {
  const e = ew(t);
  return (t.uidEvent = e), (kd[e] = kd[e] || {}), kd[e];
}
function JA(t, e) {
  return function n(r) {
    return (
      m0(r, { delegateTarget: t }),
      n.oneOff && R.off(t, r.type, e),
      e.apply(t, [r])
    );
  };
}
function ZA(t, e, n) {
  return function r(i) {
    const s = t.querySelectorAll(e);
    for (let { target: o } = i; o && o !== this; o = o.parentNode)
      for (const a of s)
        if (a === o)
          return (
            m0(i, { delegateTarget: o }),
            r.oneOff && R.off(t, i.type, e, n),
            n.apply(o, [i])
          );
  };
}
function nw(t, e, n = null) {
  return Object.values(t).find(
    (r) => r.callable === e && r.delegationSelector === n,
  );
}
function rw(t, e, n) {
  const r = typeof e == "string",
    i = r ? n : e || n;
  let s = iw(t);
  return QA.has(s) || (s = t), [r, i, s];
}
function ey(t, e, n, r, i) {
  if (typeof e != "string" || !t) return;
  let [s, o, a] = rw(e, n, r);
  e in Zb &&
    (o = ((m) =>
      function (g) {
        if (
          !g.relatedTarget ||
          (g.relatedTarget !== g.delegateTarget &&
            !g.delegateTarget.contains(g.relatedTarget))
        )
          return m.call(this, g);
      })(o));
  const l = tw(t),
    c = l[a] || (l[a] = {}),
    u = nw(c, o, s ? n : null);
  if (u) {
    u.oneOff = u.oneOff && i;
    return;
  }
  const d = ew(o, e.replace(KA, "")),
    h = s ? ZA(t, n, o) : JA(t, o);
  (h.delegationSelector = s ? n : null),
    (h.callable = o),
    (h.oneOff = i),
    (h.uidEvent = d),
    (c[d] = h),
    t.addEventListener(a, h, s);
}
function gh(t, e, n, r, i) {
  const s = nw(e[n], r, i);
  s && (t.removeEventListener(n, s, !!i), delete e[n][s.uidEvent]);
}
function eN(t, e, n, r) {
  const i = e[n] || {};
  for (const [s, o] of Object.entries(i))
    s.includes(r) && gh(t, e, n, o.callable, o.delegationSelector);
}
function iw(t) {
  return (t = t.replace(qA, "")), Zb[t] || t;
}
const R = {
  on(t, e, n, r) {
    ey(t, e, n, r, !1);
  },
  one(t, e, n, r) {
    ey(t, e, n, r, !0);
  },
  off(t, e, n, r) {
    if (typeof e != "string" || !t) return;
    const [i, s, o] = rw(e, n, r),
      a = o !== e,
      l = tw(t),
      c = l[o] || {},
      u = e.startsWith(".");
    if (typeof s < "u") {
      if (!Object.keys(c).length) return;
      gh(t, l, o, s, i ? n : null);
      return;
    }
    if (u) for (const d of Object.keys(l)) eN(t, l, d, e.slice(1));
    for (const [d, h] of Object.entries(c)) {
      const p = d.replace(XA, "");
      (!a || e.includes(p)) && gh(t, l, o, h.callable, h.delegationSelector);
    }
  },
  trigger(t, e, n) {
    if (typeof e != "string" || !t) return null;
    const r = Qb(),
      i = iw(e),
      s = e !== i;
    let o = null,
      a = !0,
      l = !0,
      c = !1;
    s &&
      r &&
      ((o = r.Event(e, n)),
      r(t).trigger(o),
      (a = !o.isPropagationStopped()),
      (l = !o.isImmediatePropagationStopped()),
      (c = o.isDefaultPrevented()));
    const u = m0(new Event(e, { bubbles: a, cancelable: !0 }), n);
    return (
      c && u.preventDefault(),
      l && t.dispatchEvent(u),
      u.defaultPrevented && o && o.preventDefault(),
      u
    );
  },
};
function m0(t, e = {}) {
  for (const [n, r] of Object.entries(e))
    try {
      t[n] = r;
    } catch {
      Object.defineProperty(t, n, {
        configurable: !0,
        get() {
          return r;
        },
      });
    }
  return t;
}
function ty(t) {
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
function Td(t) {
  return t.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
}
const Vn = {
  setDataAttribute(t, e, n) {
    t.setAttribute(`data-bs-${Td(e)}`, n);
  },
  removeDataAttribute(t, e) {
    t.removeAttribute(`data-bs-${Td(e)}`);
  },
  getDataAttributes(t) {
    if (!t) return {};
    const e = {},
      n = Object.keys(t.dataset).filter(
        (r) => r.startsWith("bs") && !r.startsWith("bsConfig"),
      );
    for (const r of n) {
      let i = r.replace(/^bs/, "");
      (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
        (e[i] = ty(t.dataset[r]));
    }
    return e;
  },
  getDataAttribute(t, e) {
    return ty(t.getAttribute(`data-bs-${Td(e)}`));
  },
};
class Ra {
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
    const r = Un(n) ? Vn.getDataAttribute(n, "config") : {};
    return {
      ...this.constructor.Default,
      ...(typeof r == "object" ? r : {}),
      ...(Un(n) ? Vn.getDataAttributes(n) : {}),
      ...(typeof e == "object" ? e : {}),
    };
  }
  _typeCheckConfig(e, n = this.constructor.DefaultType) {
    for (const [r, i] of Object.entries(n)) {
      const s = e[r],
        o = Un(s) ? "element" : UA(s);
      if (!new RegExp(i).test(o))
        throw new TypeError(
          `${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${o}" but expected type "${i}".`,
        );
    }
  }
}
const tN = "5.3.0";
class yn extends Ra {
  constructor(e, n) {
    super(),
      (e = Rr(e)),
      e &&
        ((this._element = e),
        (this._config = this._getConfig(n)),
        Sd.set(this._element, this.constructor.DATA_KEY, this));
  }
  dispose() {
    Sd.remove(this._element, this.constructor.DATA_KEY),
      R.off(this._element, this.constructor.EVENT_KEY);
    for (const e of Object.getOwnPropertyNames(this)) this[e] = null;
  }
  _queueCallback(e, n, r = !0) {
    Jb(e, n, r);
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
    return Sd.get(Rr(e), this.DATA_KEY);
  }
  static getOrCreateInstance(e, n = {}) {
    return this.getInstance(e) || new this(e, typeof n == "object" ? n : null);
  }
  static get VERSION() {
    return tN;
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
const Od = (t) => {
    let e = t.getAttribute("data-bs-target");
    if (!e || e === "#") {
      let n = t.getAttribute("href");
      if (!n || (!n.includes("#") && !n.startsWith("."))) return null;
      n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`),
        (e = n && n !== "#" ? n.trim() : null);
    }
    return Kb(e);
  },
  q = {
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
      let r = t.parentNode.closest(e);
      for (; r; ) n.push(r), (r = r.parentNode.closest(e));
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
      return this.find(e, t).filter((n) => !Dr(n) && zs(n));
    },
    getSelectorFromElement(t) {
      const e = Od(t);
      return e && q.findOne(e) ? e : null;
    },
    getElementFromSelector(t) {
      const e = Od(t);
      return e ? q.findOne(e) : null;
    },
    getMultipleElementsFromSelector(t) {
      const e = Od(t);
      return e ? q.find(e) : [];
    },
  },
  Cu = (t, e = "hide") => {
    const n = `click.dismiss${t.EVENT_KEY}`,
      r = t.NAME;
    R.on(document, n, `[data-bs-dismiss="${r}"]`, function (i) {
      if (
        (["A", "AREA"].includes(this.tagName) && i.preventDefault(), Dr(this))
      )
        return;
      const s = q.getElementFromSelector(this) || this.closest(`.${r}`);
      t.getOrCreateInstance(s)[e]();
    });
  },
  nN = "alert",
  rN = "bs.alert",
  sw = `.${rN}`,
  iN = `close${sw}`,
  sN = `closed${sw}`,
  oN = "fade",
  aN = "show";
class ku extends yn {
  static get NAME() {
    return nN;
  }
  close() {
    if (R.trigger(this._element, iN).defaultPrevented) return;
    this._element.classList.remove(aN);
    const n = this._element.classList.contains(oN);
    this._queueCallback(() => this._destroyElement(), this._element, n);
  }
  _destroyElement() {
    this._element.remove(), R.trigger(this._element, sN), this.dispose();
  }
  static jQueryInterface(e) {
    return this.each(function () {
      const n = ku.getOrCreateInstance(this);
      if (typeof e == "string") {
        if (n[e] === void 0 || e.startsWith("_") || e === "constructor")
          throw new TypeError(`No method named "${e}"`);
        n[e](this);
      }
    });
  }
}
Cu(ku, "close");
rn(ku);
const lN = "button",
  cN = "bs.button",
  uN = `.${cN}`,
  dN = ".data-api",
  fN = "active",
  ny = '[data-bs-toggle="button"]',
  hN = `click${uN}${dN}`;
class Tu extends yn {
  static get NAME() {
    return lN;
  }
  toggle() {
    this._element.setAttribute(
      "aria-pressed",
      this._element.classList.toggle(fN),
    );
  }
  static jQueryInterface(e) {
    return this.each(function () {
      const n = Tu.getOrCreateInstance(this);
      e === "toggle" && n[e]();
    });
  }
}
R.on(document, hN, ny, (t) => {
  t.preventDefault();
  const e = t.target.closest(ny);
  Tu.getOrCreateInstance(e).toggle();
});
rn(Tu);
const pN = "swipe",
  Hs = ".bs.swipe",
  mN = `touchstart${Hs}`,
  gN = `touchmove${Hs}`,
  yN = `touchend${Hs}`,
  vN = `pointerdown${Hs}`,
  xN = `pointerup${Hs}`,
  _N = "touch",
  bN = "pen",
  wN = "pointer-event",
  EN = 40,
  SN = { endCallback: null, leftCallback: null, rightCallback: null },
  CN = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)",
  };
class Vc extends Ra {
  constructor(e, n) {
    super(),
      (this._element = e),
      !(!e || !Vc.isSupported()) &&
        ((this._config = this._getConfig(n)),
        (this._deltaX = 0),
        (this._supportPointerEvents = !!window.PointerEvent),
        this._initEvents());
  }
  static get Default() {
    return SN;
  }
  static get DefaultType() {
    return CN;
  }
  static get NAME() {
    return pN;
  }
  dispose() {
    R.off(this._element, Hs);
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
      Et(this._config.endCallback);
  }
  _move(e) {
    this._deltaX =
      e.touches && e.touches.length > 1
        ? 0
        : e.touches[0].clientX - this._deltaX;
  }
  _handleSwipe() {
    const e = Math.abs(this._deltaX);
    if (e <= EN) return;
    const n = e / this._deltaX;
    (this._deltaX = 0),
      n && Et(n > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    this._supportPointerEvents
      ? (R.on(this._element, vN, (e) => this._start(e)),
        R.on(this._element, xN, (e) => this._end(e)),
        this._element.classList.add(wN))
      : (R.on(this._element, mN, (e) => this._start(e)),
        R.on(this._element, gN, (e) => this._move(e)),
        R.on(this._element, yN, (e) => this._end(e)));
  }
  _eventIsPointerPenTouch(e) {
    return (
      this._supportPointerEvents &&
      (e.pointerType === bN || e.pointerType === _N)
    );
  }
  static isSupported() {
    return (
      "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0
    );
  }
}
const kN = "carousel",
  TN = "bs.carousel",
  zr = `.${TN}`,
  ow = ".data-api",
  ON = "ArrowLeft",
  AN = "ArrowRight",
  NN = 500,
  uo = "next",
  Ii = "prev",
  $i = "left",
  Yl = "right",
  PN = `slide${zr}`,
  Ad = `slid${zr}`,
  LN = `keydown${zr}`,
  jN = `mouseenter${zr}`,
  RN = `mouseleave${zr}`,
  DN = `dragstart${zr}`,
  MN = `load${zr}${ow}`,
  IN = `click${zr}${ow}`,
  aw = "carousel",
  xl = "active",
  FN = "slide",
  BN = "carousel-item-end",
  $N = "carousel-item-start",
  zN = "carousel-item-next",
  HN = "carousel-item-prev",
  lw = ".active",
  cw = ".carousel-item",
  WN = lw + cw,
  UN = ".carousel-item img",
  VN = ".carousel-indicators",
  YN = "[data-bs-slide], [data-bs-slide-to]",
  GN = '[data-bs-ride="carousel"]',
  KN = { [ON]: Yl, [AN]: $i },
  qN = {
    interval: 5e3,
    keyboard: !0,
    pause: "hover",
    ride: !1,
    touch: !0,
    wrap: !0,
  },
  XN = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean",
  };
class Da extends yn {
  constructor(e, n) {
    super(e, n),
      (this._interval = null),
      (this._activeElement = null),
      (this._isSliding = !1),
      (this.touchTimeout = null),
      (this._swipeHelper = null),
      (this._indicatorsElement = q.findOne(VN, this._element)),
      this._addEventListeners(),
      this._config.ride === aw && this.cycle();
  }
  static get Default() {
    return qN;
  }
  static get DefaultType() {
    return XN;
  }
  static get NAME() {
    return kN;
  }
  next() {
    this._slide(uo);
  }
  nextWhenVisible() {
    !document.hidden && zs(this._element) && this.next();
  }
  prev() {
    this._slide(Ii);
  }
  pause() {
    this._isSliding && qb(this._element), this._clearInterval();
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
        R.one(this._element, Ad, () => this.cycle());
        return;
      }
      this.cycle();
    }
  }
  to(e) {
    const n = this._getItems();
    if (e > n.length - 1 || e < 0) return;
    if (this._isSliding) {
      R.one(this._element, Ad, () => this.to(e));
      return;
    }
    const r = this._getItemIndex(this._getActive());
    if (r === e) return;
    const i = e > r ? uo : Ii;
    this._slide(i, n[e]);
  }
  dispose() {
    this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
  }
  _configAfterMerge(e) {
    return (e.defaultInterval = e.interval), e;
  }
  _addEventListeners() {
    this._config.keyboard && R.on(this._element, LN, (e) => this._keydown(e)),
      this._config.pause === "hover" &&
        (R.on(this._element, jN, () => this.pause()),
        R.on(this._element, RN, () => this._maybeEnableCycle())),
      this._config.touch && Vc.isSupported() && this._addTouchEventListeners();
  }
  _addTouchEventListeners() {
    for (const r of q.find(UN, this._element))
      R.on(r, DN, (i) => i.preventDefault());
    const n = {
      leftCallback: () => this._slide(this._directionToOrder($i)),
      rightCallback: () => this._slide(this._directionToOrder(Yl)),
      endCallback: () => {
        this._config.pause === "hover" &&
          (this.pause(),
          this.touchTimeout && clearTimeout(this.touchTimeout),
          (this.touchTimeout = setTimeout(
            () => this._maybeEnableCycle(),
            NN + this._config.interval,
          )));
      },
    };
    this._swipeHelper = new Vc(this._element, n);
  }
  _keydown(e) {
    if (/input|textarea/i.test(e.target.tagName)) return;
    const n = KN[e.key];
    n && (e.preventDefault(), this._slide(this._directionToOrder(n)));
  }
  _getItemIndex(e) {
    return this._getItems().indexOf(e);
  }
  _setActiveIndicatorElement(e) {
    if (!this._indicatorsElement) return;
    const n = q.findOne(lw, this._indicatorsElement);
    n.classList.remove(xl), n.removeAttribute("aria-current");
    const r = q.findOne(`[data-bs-slide-to="${e}"]`, this._indicatorsElement);
    r && (r.classList.add(xl), r.setAttribute("aria-current", "true"));
  }
  _updateInterval() {
    const e = this._activeElement || this._getActive();
    if (!e) return;
    const n = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
    this._config.interval = n || this._config.defaultInterval;
  }
  _slide(e, n = null) {
    if (this._isSliding) return;
    const r = this._getActive(),
      i = e === uo,
      s = n || p0(this._getItems(), r, i, this._config.wrap);
    if (s === r) return;
    const o = this._getItemIndex(s),
      a = (p) =>
        R.trigger(this._element, p, {
          relatedTarget: s,
          direction: this._orderToDirection(e),
          from: this._getItemIndex(r),
          to: o,
        });
    if (a(PN).defaultPrevented || !r || !s) return;
    const c = !!this._interval;
    this.pause(),
      (this._isSliding = !0),
      this._setActiveIndicatorElement(o),
      (this._activeElement = s);
    const u = i ? $N : BN,
      d = i ? zN : HN;
    s.classList.add(d), ja(s), r.classList.add(u), s.classList.add(u);
    const h = () => {
      s.classList.remove(u, d),
        s.classList.add(xl),
        r.classList.remove(xl, d, u),
        (this._isSliding = !1),
        a(Ad);
    };
    this._queueCallback(h, r, this._isAnimated()), c && this.cycle();
  }
  _isAnimated() {
    return this._element.classList.contains(FN);
  }
  _getActive() {
    return q.findOne(WN, this._element);
  }
  _getItems() {
    return q.find(cw, this._element);
  }
  _clearInterval() {
    this._interval && (clearInterval(this._interval), (this._interval = null));
  }
  _directionToOrder(e) {
    return tn() ? (e === $i ? Ii : uo) : e === $i ? uo : Ii;
  }
  _orderToDirection(e) {
    return tn() ? (e === Ii ? $i : Yl) : e === Ii ? Yl : $i;
  }
  static jQueryInterface(e) {
    return this.each(function () {
      const n = Da.getOrCreateInstance(this, e);
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
R.on(document, IN, YN, function (t) {
  const e = q.getElementFromSelector(this);
  if (!e || !e.classList.contains(aw)) return;
  t.preventDefault();
  const n = Da.getOrCreateInstance(e),
    r = this.getAttribute("data-bs-slide-to");
  if (r) {
    n.to(r), n._maybeEnableCycle();
    return;
  }
  if (Vn.getDataAttribute(this, "slide") === "next") {
    n.next(), n._maybeEnableCycle();
    return;
  }
  n.prev(), n._maybeEnableCycle();
});
R.on(window, MN, () => {
  const t = q.find(GN);
  for (const e of t) Da.getOrCreateInstance(e);
});
rn(Da);
const QN = "collapse",
  JN = "bs.collapse",
  Ma = `.${JN}`,
  ZN = ".data-api",
  eP = `show${Ma}`,
  tP = `shown${Ma}`,
  nP = `hide${Ma}`,
  rP = `hidden${Ma}`,
  iP = `click${Ma}${ZN}`,
  Nd = "show",
  ns = "collapse",
  _l = "collapsing",
  sP = "collapsed",
  oP = `:scope .${ns} .${ns}`,
  aP = "collapse-horizontal",
  lP = "width",
  cP = "height",
  uP = ".collapse.show, .collapse.collapsing",
  yh = '[data-bs-toggle="collapse"]',
  dP = { parent: null, toggle: !0 },
  fP = { parent: "(null|element)", toggle: "boolean" };
class va extends yn {
  constructor(e, n) {
    super(e, n), (this._isTransitioning = !1), (this._triggerArray = []);
    const r = q.find(yh);
    for (const i of r) {
      const s = q.getSelectorFromElement(i),
        o = q.find(s).filter((a) => a === this._element);
      s !== null && o.length && this._triggerArray.push(i);
    }
    this._initializeChildren(),
      this._config.parent ||
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
      this._config.toggle && this.toggle();
  }
  static get Default() {
    return dP;
  }
  static get DefaultType() {
    return fP;
  }
  static get NAME() {
    return QN;
  }
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown()) return;
    let e = [];
    if (
      (this._config.parent &&
        (e = this._getFirstLevelChildren(uP)
          .filter((a) => a !== this._element)
          .map((a) => va.getOrCreateInstance(a, { toggle: !1 }))),
      (e.length && e[0]._isTransitioning) ||
        R.trigger(this._element, eP).defaultPrevented)
    )
      return;
    for (const a of e) a.hide();
    const r = this._getDimension();
    this._element.classList.remove(ns),
      this._element.classList.add(_l),
      (this._element.style[r] = 0),
      this._addAriaAndCollapsedClass(this._triggerArray, !0),
      (this._isTransitioning = !0);
    const i = () => {
        (this._isTransitioning = !1),
          this._element.classList.remove(_l),
          this._element.classList.add(ns, Nd),
          (this._element.style[r] = ""),
          R.trigger(this._element, tP);
      },
      o = `scroll${r[0].toUpperCase() + r.slice(1)}`;
    this._queueCallback(i, this._element, !0),
      (this._element.style[r] = `${this._element[o]}px`);
  }
  hide() {
    if (
      this._isTransitioning ||
      !this._isShown() ||
      R.trigger(this._element, nP).defaultPrevented
    )
      return;
    const n = this._getDimension();
    (this._element.style[n] = `${this._element.getBoundingClientRect()[n]}px`),
      ja(this._element),
      this._element.classList.add(_l),
      this._element.classList.remove(ns, Nd);
    for (const i of this._triggerArray) {
      const s = q.getElementFromSelector(i);
      s && !this._isShown(s) && this._addAriaAndCollapsedClass([i], !1);
    }
    this._isTransitioning = !0;
    const r = () => {
      (this._isTransitioning = !1),
        this._element.classList.remove(_l),
        this._element.classList.add(ns),
        R.trigger(this._element, rP);
    };
    (this._element.style[n] = ""), this._queueCallback(r, this._element, !0);
  }
  _isShown(e = this._element) {
    return e.classList.contains(Nd);
  }
  _configAfterMerge(e) {
    return (e.toggle = !!e.toggle), (e.parent = Rr(e.parent)), e;
  }
  _getDimension() {
    return this._element.classList.contains(aP) ? lP : cP;
  }
  _initializeChildren() {
    if (!this._config.parent) return;
    const e = this._getFirstLevelChildren(yh);
    for (const n of e) {
      const r = q.getElementFromSelector(n);
      r && this._addAriaAndCollapsedClass([n], this._isShown(r));
    }
  }
  _getFirstLevelChildren(e) {
    const n = q.find(oP, this._config.parent);
    return q.find(e, this._config.parent).filter((r) => !n.includes(r));
  }
  _addAriaAndCollapsedClass(e, n) {
    if (e.length)
      for (const r of e)
        r.classList.toggle(sP, !n), r.setAttribute("aria-expanded", n);
  }
  static jQueryInterface(e) {
    const n = {};
    return (
      typeof e == "string" && /show|hide/.test(e) && (n.toggle = !1),
      this.each(function () {
        const r = va.getOrCreateInstance(this, n);
        if (typeof e == "string") {
          if (typeof r[e] > "u") throw new TypeError(`No method named "${e}"`);
          r[e]();
        }
      })
    );
  }
}
R.on(document, iP, yh, function (t) {
  (t.target.tagName === "A" ||
    (t.delegateTarget && t.delegateTarget.tagName === "A")) &&
    t.preventDefault();
  for (const e of q.getMultipleElementsFromSelector(this))
    va.getOrCreateInstance(e, { toggle: !1 }).toggle();
});
rn(va);
const ry = "dropdown",
  hP = "bs.dropdown",
  Ni = `.${hP}`,
  g0 = ".data-api",
  pP = "Escape",
  iy = "Tab",
  mP = "ArrowUp",
  sy = "ArrowDown",
  gP = 2,
  yP = `hide${Ni}`,
  vP = `hidden${Ni}`,
  xP = `show${Ni}`,
  _P = `shown${Ni}`,
  uw = `click${Ni}${g0}`,
  dw = `keydown${Ni}${g0}`,
  bP = `keyup${Ni}${g0}`,
  zi = "show",
  wP = "dropup",
  EP = "dropend",
  SP = "dropstart",
  CP = "dropup-center",
  kP = "dropdown-center",
  si = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
  TP = `${si}.${zi}`,
  Gl = ".dropdown-menu",
  OP = ".navbar",
  AP = ".navbar-nav",
  NP = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
  PP = tn() ? "top-end" : "top-start",
  LP = tn() ? "top-start" : "top-end",
  jP = tn() ? "bottom-end" : "bottom-start",
  RP = tn() ? "bottom-start" : "bottom-end",
  DP = tn() ? "left-start" : "right-start",
  MP = tn() ? "right-start" : "left-start",
  IP = "top",
  FP = "bottom",
  BP = {
    autoClose: !0,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [0, 2],
    popperConfig: null,
    reference: "toggle",
  },
  $P = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)",
  };
class On extends yn {
  constructor(e, n) {
    super(e, n),
      (this._popper = null),
      (this._parent = this._element.parentNode),
      (this._menu =
        q.next(this._element, Gl)[0] ||
        q.prev(this._element, Gl)[0] ||
        q.findOne(Gl, this._parent)),
      (this._inNavbar = this._detectNavbar());
  }
  static get Default() {
    return BP;
  }
  static get DefaultType() {
    return $P;
  }
  static get NAME() {
    return ry;
  }
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (Dr(this._element) || this._isShown()) return;
    const e = { relatedTarget: this._element };
    if (!R.trigger(this._element, xP, e).defaultPrevented) {
      if (
        (this._createPopper(),
        "ontouchstart" in document.documentElement && !this._parent.closest(AP))
      )
        for (const r of [].concat(...document.body.children))
          R.on(r, "mouseover", Uc);
      this._element.focus(),
        this._element.setAttribute("aria-expanded", !0),
        this._menu.classList.add(zi),
        this._element.classList.add(zi),
        R.trigger(this._element, _P, e);
    }
  }
  hide() {
    if (Dr(this._element) || !this._isShown()) return;
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
    if (!R.trigger(this._element, yP, e).defaultPrevented) {
      if ("ontouchstart" in document.documentElement)
        for (const r of [].concat(...document.body.children))
          R.off(r, "mouseover", Uc);
      this._popper && this._popper.destroy(),
        this._menu.classList.remove(zi),
        this._element.classList.remove(zi),
        this._element.setAttribute("aria-expanded", "false"),
        Vn.removeDataAttribute(this._menu, "popper"),
        R.trigger(this._element, vP, e);
    }
  }
  _getConfig(e) {
    if (
      ((e = super._getConfig(e)),
      typeof e.reference == "object" &&
        !Un(e.reference) &&
        typeof e.reference.getBoundingClientRect != "function")
    )
      throw new TypeError(
        `${ry.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`,
      );
    return e;
  }
  _createPopper() {
    if (typeof Gb > "u")
      throw new TypeError(
        "Bootstrap's dropdowns require Popper (https://popper.js.org)",
      );
    let e = this._element;
    this._config.reference === "parent"
      ? (e = this._parent)
      : Un(this._config.reference)
      ? (e = Rr(this._config.reference))
      : typeof this._config.reference == "object" &&
        (e = this._config.reference);
    const n = this._getPopperConfig();
    this._popper = h0(e, this._menu, n);
  }
  _isShown() {
    return this._menu.classList.contains(zi);
  }
  _getPlacement() {
    const e = this._parent;
    if (e.classList.contains(EP)) return DP;
    if (e.classList.contains(SP)) return MP;
    if (e.classList.contains(CP)) return IP;
    if (e.classList.contains(kP)) return FP;
    const n =
      getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() ===
      "end";
    return e.classList.contains(wP) ? (n ? LP : PP) : n ? RP : jP;
  }
  _detectNavbar() {
    return this._element.closest(OP) !== null;
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
        (Vn.setDataAttribute(this._menu, "popper", "static"),
        (e.modifiers = [{ name: "applyStyles", enabled: !1 }])),
      { ...e, ...Et(this._config.popperConfig, [e]) }
    );
  }
  _selectMenuItem({ key: e, target: n }) {
    const r = q.find(NP, this._menu).filter((i) => zs(i));
    r.length && p0(r, n, e === sy, !r.includes(n)).focus();
  }
  static jQueryInterface(e) {
    return this.each(function () {
      const n = On.getOrCreateInstance(this, e);
      if (typeof e == "string") {
        if (typeof n[e] > "u") throw new TypeError(`No method named "${e}"`);
        n[e]();
      }
    });
  }
  static clearMenus(e) {
    if (e.button === gP || (e.type === "keyup" && e.key !== iy)) return;
    const n = q.find(TP);
    for (const r of n) {
      const i = On.getInstance(r);
      if (!i || i._config.autoClose === !1) continue;
      const s = e.composedPath(),
        o = s.includes(i._menu);
      if (
        s.includes(i._element) ||
        (i._config.autoClose === "inside" && !o) ||
        (i._config.autoClose === "outside" && o) ||
        (i._menu.contains(e.target) &&
          ((e.type === "keyup" && e.key === iy) ||
            /input|select|option|textarea|form/i.test(e.target.tagName)))
      )
        continue;
      const a = { relatedTarget: i._element };
      e.type === "click" && (a.clickEvent = e), i._completeHide(a);
    }
  }
  static dataApiKeydownHandler(e) {
    const n = /input|textarea/i.test(e.target.tagName),
      r = e.key === pP,
      i = [mP, sy].includes(e.key);
    if ((!i && !r) || (n && !r)) return;
    e.preventDefault();
    const s = this.matches(si)
        ? this
        : q.prev(this, si)[0] ||
          q.next(this, si)[0] ||
          q.findOne(si, e.delegateTarget.parentNode),
      o = On.getOrCreateInstance(s);
    if (i) {
      e.stopPropagation(), o.show(), o._selectMenuItem(e);
      return;
    }
    o._isShown() && (e.stopPropagation(), o.hide(), s.focus());
  }
}
R.on(document, dw, si, On.dataApiKeydownHandler);
R.on(document, dw, Gl, On.dataApiKeydownHandler);
R.on(document, uw, On.clearMenus);
R.on(document, bP, On.clearMenus);
R.on(document, uw, si, function (t) {
  t.preventDefault(), On.getOrCreateInstance(this).toggle();
});
rn(On);
const fw = "backdrop",
  zP = "fade",
  oy = "show",
  ay = `mousedown.bs.${fw}`,
  HP = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: !1,
    isVisible: !0,
    rootElement: "body",
  },
  WP = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)",
  };
class hw extends Ra {
  constructor(e) {
    super(),
      (this._config = this._getConfig(e)),
      (this._isAppended = !1),
      (this._element = null);
  }
  static get Default() {
    return HP;
  }
  static get DefaultType() {
    return WP;
  }
  static get NAME() {
    return fw;
  }
  show(e) {
    if (!this._config.isVisible) {
      Et(e);
      return;
    }
    this._append();
    const n = this._getElement();
    this._config.isAnimated && ja(n),
      n.classList.add(oy),
      this._emulateAnimation(() => {
        Et(e);
      });
  }
  hide(e) {
    if (!this._config.isVisible) {
      Et(e);
      return;
    }
    this._getElement().classList.remove(oy),
      this._emulateAnimation(() => {
        this.dispose(), Et(e);
      });
  }
  dispose() {
    this._isAppended &&
      (R.off(this._element, ay),
      this._element.remove(),
      (this._isAppended = !1));
  }
  _getElement() {
    if (!this._element) {
      const e = document.createElement("div");
      (e.className = this._config.className),
        this._config.isAnimated && e.classList.add(zP),
        (this._element = e);
    }
    return this._element;
  }
  _configAfterMerge(e) {
    return (e.rootElement = Rr(e.rootElement)), e;
  }
  _append() {
    if (this._isAppended) return;
    const e = this._getElement();
    this._config.rootElement.append(e),
      R.on(e, ay, () => {
        Et(this._config.clickCallback);
      }),
      (this._isAppended = !0);
  }
  _emulateAnimation(e) {
    Jb(e, this._getElement(), this._config.isAnimated);
  }
}
const UP = "focustrap",
  VP = "bs.focustrap",
  Yc = `.${VP}`,
  YP = `focusin${Yc}`,
  GP = `keydown.tab${Yc}`,
  KP = "Tab",
  qP = "forward",
  ly = "backward",
  XP = { autofocus: !0, trapElement: null },
  QP = { autofocus: "boolean", trapElement: "element" };
class pw extends Ra {
  constructor(e) {
    super(),
      (this._config = this._getConfig(e)),
      (this._isActive = !1),
      (this._lastTabNavDirection = null);
  }
  static get Default() {
    return XP;
  }
  static get DefaultType() {
    return QP;
  }
  static get NAME() {
    return UP;
  }
  activate() {
    this._isActive ||
      (this._config.autofocus && this._config.trapElement.focus(),
      R.off(document, Yc),
      R.on(document, YP, (e) => this._handleFocusin(e)),
      R.on(document, GP, (e) => this._handleKeydown(e)),
      (this._isActive = !0));
  }
  deactivate() {
    this._isActive && ((this._isActive = !1), R.off(document, Yc));
  }
  _handleFocusin(e) {
    const { trapElement: n } = this._config;
    if (e.target === document || e.target === n || n.contains(e.target)) return;
    const r = q.focusableChildren(n);
    r.length === 0
      ? n.focus()
      : this._lastTabNavDirection === ly
      ? r[r.length - 1].focus()
      : r[0].focus();
  }
  _handleKeydown(e) {
    e.key === KP && (this._lastTabNavDirection = e.shiftKey ? ly : qP);
  }
}
const cy = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  uy = ".sticky-top",
  bl = "padding-right",
  dy = "margin-right";
class vh {
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
      this._setElementAttributes(this._element, bl, (n) => n + e),
      this._setElementAttributes(cy, bl, (n) => n + e),
      this._setElementAttributes(uy, dy, (n) => n - e);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"),
      this._resetElementAttributes(this._element, bl),
      this._resetElementAttributes(cy, bl),
      this._resetElementAttributes(uy, dy);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow"),
      (this._element.style.overflow = "hidden");
  }
  _setElementAttributes(e, n, r) {
    const i = this.getWidth(),
      s = (o) => {
        if (o !== this._element && window.innerWidth > o.clientWidth + i)
          return;
        this._saveInitialAttribute(o, n);
        const a = window.getComputedStyle(o).getPropertyValue(n);
        o.style.setProperty(n, `${r(Number.parseFloat(a))}px`);
      };
    this._applyManipulationCallback(e, s);
  }
  _saveInitialAttribute(e, n) {
    const r = e.style.getPropertyValue(n);
    r && Vn.setDataAttribute(e, n, r);
  }
  _resetElementAttributes(e, n) {
    const r = (i) => {
      const s = Vn.getDataAttribute(i, n);
      if (s === null) {
        i.style.removeProperty(n);
        return;
      }
      Vn.removeDataAttribute(i, n), i.style.setProperty(n, s);
    };
    this._applyManipulationCallback(e, r);
  }
  _applyManipulationCallback(e, n) {
    if (Un(e)) {
      n(e);
      return;
    }
    for (const r of q.find(e, this._element)) n(r);
  }
}
const JP = "modal",
  ZP = "bs.modal",
  nn = `.${ZP}`,
  eL = ".data-api",
  tL = "Escape",
  nL = `hide${nn}`,
  rL = `hidePrevented${nn}`,
  mw = `hidden${nn}`,
  gw = `show${nn}`,
  iL = `shown${nn}`,
  sL = `resize${nn}`,
  oL = `click.dismiss${nn}`,
  aL = `mousedown.dismiss${nn}`,
  lL = `keydown.dismiss${nn}`,
  cL = `click${nn}${eL}`,
  fy = "modal-open",
  uL = "fade",
  hy = "show",
  Pd = "modal-static",
  dL = ".modal.show",
  fL = ".modal-dialog",
  hL = ".modal-body",
  pL = '[data-bs-toggle="modal"]',
  mL = { backdrop: !0, focus: !0, keyboard: !0 },
  gL = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
class Ns extends yn {
  constructor(e, n) {
    super(e, n),
      (this._dialog = q.findOne(fL, this._element)),
      (this._backdrop = this._initializeBackDrop()),
      (this._focustrap = this._initializeFocusTrap()),
      (this._isShown = !1),
      (this._isTransitioning = !1),
      (this._scrollBar = new vh()),
      this._addEventListeners();
  }
  static get Default() {
    return mL;
  }
  static get DefaultType() {
    return gL;
  }
  static get NAME() {
    return JP;
  }
  toggle(e) {
    return this._isShown ? this.hide() : this.show(e);
  }
  show(e) {
    this._isShown ||
      this._isTransitioning ||
      R.trigger(this._element, gw, { relatedTarget: e }).defaultPrevented ||
      ((this._isShown = !0),
      (this._isTransitioning = !0),
      this._scrollBar.hide(),
      document.body.classList.add(fy),
      this._adjustDialog(),
      this._backdrop.show(() => this._showElement(e)));
  }
  hide() {
    !this._isShown ||
      this._isTransitioning ||
      R.trigger(this._element, nL).defaultPrevented ||
      ((this._isShown = !1),
      (this._isTransitioning = !0),
      this._focustrap.deactivate(),
      this._element.classList.remove(hy),
      this._queueCallback(
        () => this._hideModal(),
        this._element,
        this._isAnimated(),
      ));
  }
  dispose() {
    R.off(window, nn),
      R.off(this._dialog, nn),
      this._backdrop.dispose(),
      this._focustrap.deactivate(),
      super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  _initializeBackDrop() {
    return new hw({
      isVisible: !!this._config.backdrop,
      isAnimated: this._isAnimated(),
    });
  }
  _initializeFocusTrap() {
    return new pw({ trapElement: this._element });
  }
  _showElement(e) {
    document.body.contains(this._element) ||
      document.body.append(this._element),
      (this._element.style.display = "block"),
      this._element.removeAttribute("aria-hidden"),
      this._element.setAttribute("aria-modal", !0),
      this._element.setAttribute("role", "dialog"),
      (this._element.scrollTop = 0);
    const n = q.findOne(hL, this._dialog);
    n && (n.scrollTop = 0), ja(this._element), this._element.classList.add(hy);
    const r = () => {
      this._config.focus && this._focustrap.activate(),
        (this._isTransitioning = !1),
        R.trigger(this._element, iL, { relatedTarget: e });
    };
    this._queueCallback(r, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    R.on(this._element, lL, (e) => {
      if (e.key === tL) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      }
    }),
      R.on(window, sL, () => {
        this._isShown && !this._isTransitioning && this._adjustDialog();
      }),
      R.on(this._element, aL, (e) => {
        R.one(this._element, oL, (n) => {
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
        document.body.classList.remove(fy),
          this._resetAdjustments(),
          this._scrollBar.reset(),
          R.trigger(this._element, mw);
      });
  }
  _isAnimated() {
    return this._element.classList.contains(uL);
  }
  _triggerBackdropTransition() {
    if (R.trigger(this._element, rL).defaultPrevented) return;
    const n =
        this._element.scrollHeight > document.documentElement.clientHeight,
      r = this._element.style.overflowY;
    r === "hidden" ||
      this._element.classList.contains(Pd) ||
      (n || (this._element.style.overflowY = "hidden"),
      this._element.classList.add(Pd),
      this._queueCallback(() => {
        this._element.classList.remove(Pd),
          this._queueCallback(() => {
            this._element.style.overflowY = r;
          }, this._dialog);
      }, this._dialog),
      this._element.focus());
  }
  _adjustDialog() {
    const e =
        this._element.scrollHeight > document.documentElement.clientHeight,
      n = this._scrollBar.getWidth(),
      r = n > 0;
    if (r && !e) {
      const i = tn() ? "paddingLeft" : "paddingRight";
      this._element.style[i] = `${n}px`;
    }
    if (!r && e) {
      const i = tn() ? "paddingRight" : "paddingLeft";
      this._element.style[i] = `${n}px`;
    }
  }
  _resetAdjustments() {
    (this._element.style.paddingLeft = ""),
      (this._element.style.paddingRight = "");
  }
  static jQueryInterface(e, n) {
    return this.each(function () {
      const r = Ns.getOrCreateInstance(this, e);
      if (typeof e == "string") {
        if (typeof r[e] > "u") throw new TypeError(`No method named "${e}"`);
        r[e](n);
      }
    });
  }
}
R.on(document, cL, pL, function (t) {
  const e = q.getElementFromSelector(this);
  ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
    R.one(e, gw, (i) => {
      i.defaultPrevented ||
        R.one(e, mw, () => {
          zs(this) && this.focus();
        });
    });
  const n = q.findOne(dL);
  n && Ns.getInstance(n).hide(), Ns.getOrCreateInstance(e).toggle(this);
});
Cu(Ns);
rn(Ns);
const yL = "offcanvas",
  vL = "bs.offcanvas",
  tr = `.${vL}`,
  yw = ".data-api",
  xL = `load${tr}${yw}`,
  _L = "Escape",
  py = "show",
  my = "showing",
  gy = "hiding",
  bL = "offcanvas-backdrop",
  vw = ".offcanvas.show",
  wL = `show${tr}`,
  EL = `shown${tr}`,
  SL = `hide${tr}`,
  yy = `hidePrevented${tr}`,
  xw = `hidden${tr}`,
  CL = `resize${tr}`,
  kL = `click${tr}${yw}`,
  TL = `keydown.dismiss${tr}`,
  OL = '[data-bs-toggle="offcanvas"]',
  AL = { backdrop: !0, keyboard: !0, scroll: !1 },
  NL = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
class Mr extends yn {
  constructor(e, n) {
    super(e, n),
      (this._isShown = !1),
      (this._backdrop = this._initializeBackDrop()),
      (this._focustrap = this._initializeFocusTrap()),
      this._addEventListeners();
  }
  static get Default() {
    return AL;
  }
  static get DefaultType() {
    return NL;
  }
  static get NAME() {
    return yL;
  }
  toggle(e) {
    return this._isShown ? this.hide() : this.show(e);
  }
  show(e) {
    if (
      this._isShown ||
      R.trigger(this._element, wL, { relatedTarget: e }).defaultPrevented
    )
      return;
    (this._isShown = !0),
      this._backdrop.show(),
      this._config.scroll || new vh().hide(),
      this._element.setAttribute("aria-modal", !0),
      this._element.setAttribute("role", "dialog"),
      this._element.classList.add(my);
    const r = () => {
      (!this._config.scroll || this._config.backdrop) &&
        this._focustrap.activate(),
        this._element.classList.add(py),
        this._element.classList.remove(my),
        R.trigger(this._element, EL, { relatedTarget: e });
    };
    this._queueCallback(r, this._element, !0);
  }
  hide() {
    if (!this._isShown || R.trigger(this._element, SL).defaultPrevented) return;
    this._focustrap.deactivate(),
      this._element.blur(),
      (this._isShown = !1),
      this._element.classList.add(gy),
      this._backdrop.hide();
    const n = () => {
      this._element.classList.remove(py, gy),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        this._config.scroll || new vh().reset(),
        R.trigger(this._element, xw);
    };
    this._queueCallback(n, this._element, !0);
  }
  dispose() {
    this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  _initializeBackDrop() {
    const e = () => {
        if (this._config.backdrop === "static") {
          R.trigger(this._element, yy);
          return;
        }
        this.hide();
      },
      n = !!this._config.backdrop;
    return new hw({
      className: bL,
      isVisible: n,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: n ? e : null,
    });
  }
  _initializeFocusTrap() {
    return new pw({ trapElement: this._element });
  }
  _addEventListeners() {
    R.on(this._element, TL, (e) => {
      if (e.key === _L) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        R.trigger(this._element, yy);
      }
    });
  }
  static jQueryInterface(e) {
    return this.each(function () {
      const n = Mr.getOrCreateInstance(this, e);
      if (typeof e == "string") {
        if (n[e] === void 0 || e.startsWith("_") || e === "constructor")
          throw new TypeError(`No method named "${e}"`);
        n[e](this);
      }
    });
  }
}
R.on(document, kL, OL, function (t) {
  const e = q.getElementFromSelector(this);
  if ((["A", "AREA"].includes(this.tagName) && t.preventDefault(), Dr(this)))
    return;
  R.one(e, xw, () => {
    zs(this) && this.focus();
  });
  const n = q.findOne(vw);
  n && n !== e && Mr.getInstance(n).hide(),
    Mr.getOrCreateInstance(e).toggle(this);
});
R.on(window, xL, () => {
  for (const t of q.find(vw)) Mr.getOrCreateInstance(t).show();
});
R.on(window, CL, () => {
  for (const t of q.find("[aria-modal][class*=show][class*=offcanvas-]"))
    getComputedStyle(t).position !== "fixed" &&
      Mr.getOrCreateInstance(t).hide();
});
Cu(Mr);
rn(Mr);
const PL = /^aria-[\w-]*$/i,
  _w = {
    "*": ["class", "dir", "id", "lang", "role", PL],
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
  LL = new Set([
    "background",
    "cite",
    "href",
    "itemtype",
    "longdesc",
    "poster",
    "src",
    "xlink:href",
  ]),
  jL = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
  RL = (t, e) => {
    const n = t.nodeName.toLowerCase();
    return e.includes(n)
      ? LL.has(n)
        ? !!jL.test(t.nodeValue)
        : !0
      : e.filter((r) => r instanceof RegExp).some((r) => r.test(n));
  };
function DL(t, e, n) {
  if (!t.length) return t;
  if (n && typeof n == "function") return n(t);
  const i = new window.DOMParser().parseFromString(t, "text/html"),
    s = [].concat(...i.body.querySelectorAll("*"));
  for (const o of s) {
    const a = o.nodeName.toLowerCase();
    if (!Object.keys(e).includes(a)) {
      o.remove();
      continue;
    }
    const l = [].concat(...o.attributes),
      c = [].concat(e["*"] || [], e[a] || []);
    for (const u of l) RL(u, c) || o.removeAttribute(u.nodeName);
  }
  return i.body.innerHTML;
}
const ML = "TemplateFactory",
  IL = {
    allowList: _w,
    content: {},
    extraClass: "",
    html: !1,
    sanitize: !0,
    sanitizeFn: null,
    template: "<div></div>",
  },
  FL = {
    allowList: "object",
    content: "object",
    extraClass: "(string|function)",
    html: "boolean",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    template: "string",
  },
  BL = {
    entry: "(string|element|function|null)",
    selector: "(string|element)",
  };
class $L extends Ra {
  constructor(e) {
    super(), (this._config = this._getConfig(e));
  }
  static get Default() {
    return IL;
  }
  static get DefaultType() {
    return FL;
  }
  static get NAME() {
    return ML;
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
    for (const [i, s] of Object.entries(this._config.content))
      this._setContent(e, s, i);
    const n = e.children[0],
      r = this._resolvePossibleFunction(this._config.extraClass);
    return r && n.classList.add(...r.split(" ")), n;
  }
  _typeCheckConfig(e) {
    super._typeCheckConfig(e), this._checkContent(e.content);
  }
  _checkContent(e) {
    for (const [n, r] of Object.entries(e))
      super._typeCheckConfig({ selector: n, entry: r }, BL);
  }
  _setContent(e, n, r) {
    const i = q.findOne(r, e);
    if (i) {
      if (((n = this._resolvePossibleFunction(n)), !n)) {
        i.remove();
        return;
      }
      if (Un(n)) {
        this._putElementInTemplate(Rr(n), i);
        return;
      }
      if (this._config.html) {
        i.innerHTML = this._maybeSanitize(n);
        return;
      }
      i.textContent = n;
    }
  }
  _maybeSanitize(e) {
    return this._config.sanitize
      ? DL(e, this._config.allowList, this._config.sanitizeFn)
      : e;
  }
  _resolvePossibleFunction(e) {
    return Et(e, [this]);
  }
  _putElementInTemplate(e, n) {
    if (this._config.html) {
      (n.innerHTML = ""), n.append(e);
      return;
    }
    n.textContent = e.textContent;
  }
}
const zL = "tooltip",
  HL = new Set(["sanitize", "allowList", "sanitizeFn"]),
  Ld = "fade",
  WL = "modal",
  wl = "show",
  UL = ".tooltip-inner",
  vy = `.${WL}`,
  xy = "hide.bs.modal",
  fo = "hover",
  jd = "focus",
  VL = "click",
  YL = "manual",
  GL = "hide",
  KL = "hidden",
  qL = "show",
  XL = "shown",
  QL = "inserted",
  JL = "click",
  ZL = "focusin",
  ej = "focusout",
  tj = "mouseenter",
  nj = "mouseleave",
  rj = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: tn() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: tn() ? "right" : "left",
  },
  ij = {
    allowList: _w,
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
  sj = {
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
class Ws extends yn {
  constructor(e, n) {
    if (typeof Gb > "u")
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
    return ij;
  }
  static get DefaultType() {
    return sj;
  }
  static get NAME() {
    return zL;
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
      R.off(this._element.closest(vy), xy, this._hideModalHandler),
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
    const e = R.trigger(this._element, this.constructor.eventName(qL)),
      r = (
        Xb(this._element) || this._element.ownerDocument.documentElement
      ).contains(this._element);
    if (e.defaultPrevented || !r) return;
    this._disposePopper();
    const i = this._getTipElement();
    this._element.setAttribute("aria-describedby", i.getAttribute("id"));
    const { container: s } = this._config;
    if (
      (this._element.ownerDocument.documentElement.contains(this.tip) ||
        (s.append(i), R.trigger(this._element, this.constructor.eventName(QL))),
      (this._popper = this._createPopper(i)),
      i.classList.add(wl),
      "ontouchstart" in document.documentElement)
    )
      for (const a of [].concat(...document.body.children))
        R.on(a, "mouseover", Uc);
    const o = () => {
      R.trigger(this._element, this.constructor.eventName(XL)),
        this._isHovered === !1 && this._leave(),
        (this._isHovered = !1);
    };
    this._queueCallback(o, this.tip, this._isAnimated());
  }
  hide() {
    if (
      !this._isShown() ||
      R.trigger(this._element, this.constructor.eventName(GL)).defaultPrevented
    )
      return;
    if (
      (this._getTipElement().classList.remove(wl),
      "ontouchstart" in document.documentElement)
    )
      for (const i of [].concat(...document.body.children))
        R.off(i, "mouseover", Uc);
    (this._activeTrigger[VL] = !1),
      (this._activeTrigger[jd] = !1),
      (this._activeTrigger[fo] = !1),
      (this._isHovered = null);
    const r = () => {
      this._isWithActiveTrigger() ||
        (this._isHovered || this._disposePopper(),
        this._element.removeAttribute("aria-describedby"),
        R.trigger(this._element, this.constructor.eventName(KL)));
    };
    this._queueCallback(r, this.tip, this._isAnimated());
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
    n.classList.remove(Ld, wl),
      n.classList.add(`bs-${this.constructor.NAME}-auto`);
    const r = VA(this.constructor.NAME).toString();
    return (
      n.setAttribute("id", r), this._isAnimated() && n.classList.add(Ld), n
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
        : (this._templateFactory = new $L({
            ...this._config,
            content: e,
            extraClass: this._resolvePossibleFunction(this._config.customClass),
          })),
      this._templateFactory
    );
  }
  _getContentForTemplate() {
    return { [UL]: this._getTitle() };
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
      this._config.animation || (this.tip && this.tip.classList.contains(Ld))
    );
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(wl);
  }
  _createPopper(e) {
    const n = Et(this._config.placement, [this, e, this._element]),
      r = rj[n.toUpperCase()];
    return h0(this._element, e, this._getPopperConfig(r));
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
    return Et(e, [this._element]);
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
          fn: (r) => {
            this._getTipElement().setAttribute(
              "data-popper-placement",
              r.state.placement,
            );
          },
        },
      ],
    };
    return { ...n, ...Et(this._config.popperConfig, [n]) };
  }
  _setListeners() {
    const e = this._config.trigger.split(" ");
    for (const n of e)
      if (n === "click")
        R.on(
          this._element,
          this.constructor.eventName(JL),
          this._config.selector,
          (r) => {
            this._initializeOnDelegatedTarget(r).toggle();
          },
        );
      else if (n !== YL) {
        const r =
            n === fo
              ? this.constructor.eventName(tj)
              : this.constructor.eventName(ZL),
          i =
            n === fo
              ? this.constructor.eventName(nj)
              : this.constructor.eventName(ej);
        R.on(this._element, r, this._config.selector, (s) => {
          const o = this._initializeOnDelegatedTarget(s);
          (o._activeTrigger[s.type === "focusin" ? jd : fo] = !0), o._enter();
        }),
          R.on(this._element, i, this._config.selector, (s) => {
            const o = this._initializeOnDelegatedTarget(s);
            (o._activeTrigger[s.type === "focusout" ? jd : fo] =
              o._element.contains(s.relatedTarget)),
              o._leave();
          });
      }
    (this._hideModalHandler = () => {
      this._element && this.hide();
    }),
      R.on(this._element.closest(vy), xy, this._hideModalHandler);
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
    const n = Vn.getDataAttributes(this._element);
    for (const r of Object.keys(n)) HL.has(r) && delete n[r];
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
      (e.container = e.container === !1 ? document.body : Rr(e.container)),
      typeof e.delay == "number" &&
        (e.delay = { show: e.delay, hide: e.delay }),
      typeof e.title == "number" && (e.title = e.title.toString()),
      typeof e.content == "number" && (e.content = e.content.toString()),
      e
    );
  }
  _getDelegateConfig() {
    const e = {};
    for (const [n, r] of Object.entries(this._config))
      this.constructor.Default[n] !== r && (e[n] = r);
    return (e.selector = !1), (e.trigger = "manual"), e;
  }
  _disposePopper() {
    this._popper && (this._popper.destroy(), (this._popper = null)),
      this.tip && (this.tip.remove(), (this.tip = null));
  }
  static jQueryInterface(e) {
    return this.each(function () {
      const n = Ws.getOrCreateInstance(this, e);
      if (typeof e == "string") {
        if (typeof n[e] > "u") throw new TypeError(`No method named "${e}"`);
        n[e]();
      }
    });
  }
}
rn(Ws);
const oj = "popover",
  aj = ".popover-header",
  lj = ".popover-body",
  cj = {
    ...Ws.Default,
    content: "",
    offset: [0, 8],
    placement: "right",
    template:
      '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger: "click",
  },
  uj = { ...Ws.DefaultType, content: "(null|string|element|function)" };
class y0 extends Ws {
  static get Default() {
    return cj;
  }
  static get DefaultType() {
    return uj;
  }
  static get NAME() {
    return oj;
  }
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  _getContentForTemplate() {
    return { [aj]: this._getTitle(), [lj]: this._getContent() };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  static jQueryInterface(e) {
    return this.each(function () {
      const n = y0.getOrCreateInstance(this, e);
      if (typeof e == "string") {
        if (typeof n[e] > "u") throw new TypeError(`No method named "${e}"`);
        n[e]();
      }
    });
  }
}
rn(y0);
const dj = "scrollspy",
  fj = "bs.scrollspy",
  v0 = `.${fj}`,
  hj = ".data-api",
  pj = `activate${v0}`,
  _y = `click${v0}`,
  mj = `load${v0}${hj}`,
  gj = "dropdown-item",
  Fi = "active",
  yj = '[data-bs-spy="scroll"]',
  Rd = "[href]",
  vj = ".nav, .list-group",
  by = ".nav-link",
  xj = ".nav-item",
  _j = ".list-group-item",
  bj = `${by}, ${xj} > ${by}, ${_j}`,
  wj = ".dropdown",
  Ej = ".dropdown-toggle",
  Sj = {
    offset: null,
    rootMargin: "0px 0px -25%",
    smoothScroll: !1,
    target: null,
    threshold: [0.1, 0.5, 1],
  },
  Cj = {
    offset: "(number|null)",
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element",
    threshold: "array",
  };
class Ou extends yn {
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
    return Sj;
  }
  static get DefaultType() {
    return Cj;
  }
  static get NAME() {
    return dj;
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
      (e.target = Rr(e.target) || document.body),
      (e.rootMargin = e.offset ? `${e.offset}px 0px -30%` : e.rootMargin),
      typeof e.threshold == "string" &&
        (e.threshold = e.threshold.split(",").map((n) => Number.parseFloat(n))),
      e
    );
  }
  _maybeEnableSmoothScroll() {
    this._config.smoothScroll &&
      (R.off(this._config.target, _y),
      R.on(this._config.target, _y, Rd, (e) => {
        const n = this._observableSections.get(e.target.hash);
        if (n) {
          e.preventDefault();
          const r = this._rootElement || window,
            i = n.offsetTop - this._element.offsetTop;
          if (r.scrollTo) {
            r.scrollTo({ top: i, behavior: "smooth" });
            return;
          }
          r.scrollTop = i;
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
      r = (o) => {
        (this._previousScrollData.visibleEntryTop = o.target.offsetTop),
          this._process(n(o));
      },
      i = (this._rootElement || document.documentElement).scrollTop,
      s = i >= this._previousScrollData.parentScrollTop;
    this._previousScrollData.parentScrollTop = i;
    for (const o of e) {
      if (!o.isIntersecting) {
        (this._activeTarget = null), this._clearActiveClass(n(o));
        continue;
      }
      const a = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
      if (s && a) {
        if ((r(o), !i)) return;
        continue;
      }
      !s && !a && r(o);
    }
  }
  _initializeTargetsAndObservables() {
    (this._targetLinks = new Map()), (this._observableSections = new Map());
    const e = q.find(Rd, this._config.target);
    for (const n of e) {
      if (!n.hash || Dr(n)) continue;
      const r = q.findOne(decodeURI(n.hash), this._element);
      zs(r) &&
        (this._targetLinks.set(decodeURI(n.hash), n),
        this._observableSections.set(n.hash, r));
    }
  }
  _process(e) {
    this._activeTarget !== e &&
      (this._clearActiveClass(this._config.target),
      (this._activeTarget = e),
      e.classList.add(Fi),
      this._activateParents(e),
      R.trigger(this._element, pj, { relatedTarget: e }));
  }
  _activateParents(e) {
    if (e.classList.contains(gj)) {
      q.findOne(Ej, e.closest(wj)).classList.add(Fi);
      return;
    }
    for (const n of q.parents(e, vj))
      for (const r of q.prev(n, bj)) r.classList.add(Fi);
  }
  _clearActiveClass(e) {
    e.classList.remove(Fi);
    const n = q.find(`${Rd}.${Fi}`, e);
    for (const r of n) r.classList.remove(Fi);
  }
  static jQueryInterface(e) {
    return this.each(function () {
      const n = Ou.getOrCreateInstance(this, e);
      if (typeof e == "string") {
        if (n[e] === void 0 || e.startsWith("_") || e === "constructor")
          throw new TypeError(`No method named "${e}"`);
        n[e]();
      }
    });
  }
}
R.on(window, mj, () => {
  for (const t of q.find(yj)) Ou.getOrCreateInstance(t);
});
rn(Ou);
const kj = "tab",
  Tj = "bs.tab",
  Pi = `.${Tj}`,
  Oj = `hide${Pi}`,
  Aj = `hidden${Pi}`,
  Nj = `show${Pi}`,
  Pj = `shown${Pi}`,
  Lj = `click${Pi}`,
  jj = `keydown${Pi}`,
  Rj = `load${Pi}`,
  Dj = "ArrowLeft",
  wy = "ArrowRight",
  Mj = "ArrowUp",
  Ey = "ArrowDown",
  oi = "active",
  Sy = "fade",
  Dd = "show",
  Ij = "dropdown",
  Fj = ".dropdown-toggle",
  Bj = ".dropdown-menu",
  Md = ":not(.dropdown-toggle)",
  $j = '.list-group, .nav, [role="tablist"]',
  zj = ".nav-item, .list-group-item",
  Hj = `.nav-link${Md}, .list-group-item${Md}, [role="tab"]${Md}`,
  bw =
    '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
  Id = `${Hj}, ${bw}`,
  Wj = `.${oi}[data-bs-toggle="tab"], .${oi}[data-bs-toggle="pill"], .${oi}[data-bs-toggle="list"]`;
class Ps extends yn {
  constructor(e) {
    super(e),
      (this._parent = this._element.closest($j)),
      this._parent &&
        (this._setInitialAttributes(this._parent, this._getChildren()),
        R.on(this._element, jj, (n) => this._keydown(n)));
  }
  static get NAME() {
    return kj;
  }
  show() {
    const e = this._element;
    if (this._elemIsActive(e)) return;
    const n = this._getActiveElem(),
      r = n ? R.trigger(n, Oj, { relatedTarget: e }) : null;
    R.trigger(e, Nj, { relatedTarget: n }).defaultPrevented ||
      (r && r.defaultPrevented) ||
      (this._deactivate(n, e), this._activate(e, n));
  }
  _activate(e, n) {
    if (!e) return;
    e.classList.add(oi), this._activate(q.getElementFromSelector(e));
    const r = () => {
      if (e.getAttribute("role") !== "tab") {
        e.classList.add(Dd);
        return;
      }
      e.removeAttribute("tabindex"),
        e.setAttribute("aria-selected", !0),
        this._toggleDropDown(e, !0),
        R.trigger(e, Pj, { relatedTarget: n });
    };
    this._queueCallback(r, e, e.classList.contains(Sy));
  }
  _deactivate(e, n) {
    if (!e) return;
    e.classList.remove(oi),
      e.blur(),
      this._deactivate(q.getElementFromSelector(e));
    const r = () => {
      if (e.getAttribute("role") !== "tab") {
        e.classList.remove(Dd);
        return;
      }
      e.setAttribute("aria-selected", !1),
        e.setAttribute("tabindex", "-1"),
        this._toggleDropDown(e, !1),
        R.trigger(e, Aj, { relatedTarget: n });
    };
    this._queueCallback(r, e, e.classList.contains(Sy));
  }
  _keydown(e) {
    if (![Dj, wy, Mj, Ey].includes(e.key)) return;
    e.stopPropagation(), e.preventDefault();
    const n = [wy, Ey].includes(e.key),
      r = p0(
        this._getChildren().filter((i) => !Dr(i)),
        e.target,
        n,
        !0,
      );
    r && (r.focus({ preventScroll: !0 }), Ps.getOrCreateInstance(r).show());
  }
  _getChildren() {
    return q.find(Id, this._parent);
  }
  _getActiveElem() {
    return this._getChildren().find((e) => this._elemIsActive(e)) || null;
  }
  _setInitialAttributes(e, n) {
    this._setAttributeIfNotExists(e, "role", "tablist");
    for (const r of n) this._setInitialAttributesOnChild(r);
  }
  _setInitialAttributesOnChild(e) {
    e = this._getInnerElement(e);
    const n = this._elemIsActive(e),
      r = this._getOuterElement(e);
    e.setAttribute("aria-selected", n),
      r !== e && this._setAttributeIfNotExists(r, "role", "presentation"),
      n || e.setAttribute("tabindex", "-1"),
      this._setAttributeIfNotExists(e, "role", "tab"),
      this._setInitialAttributesOnTargetPanel(e);
  }
  _setInitialAttributesOnTargetPanel(e) {
    const n = q.getElementFromSelector(e);
    n &&
      (this._setAttributeIfNotExists(n, "role", "tabpanel"),
      e.id && this._setAttributeIfNotExists(n, "aria-labelledby", `${e.id}`));
  }
  _toggleDropDown(e, n) {
    const r = this._getOuterElement(e);
    if (!r.classList.contains(Ij)) return;
    const i = (s, o) => {
      const a = q.findOne(s, r);
      a && a.classList.toggle(o, n);
    };
    i(Fj, oi), i(Bj, Dd), r.setAttribute("aria-expanded", n);
  }
  _setAttributeIfNotExists(e, n, r) {
    e.hasAttribute(n) || e.setAttribute(n, r);
  }
  _elemIsActive(e) {
    return e.classList.contains(oi);
  }
  _getInnerElement(e) {
    return e.matches(Id) ? e : q.findOne(Id, e);
  }
  _getOuterElement(e) {
    return e.closest(zj) || e;
  }
  static jQueryInterface(e) {
    return this.each(function () {
      const n = Ps.getOrCreateInstance(this);
      if (typeof e == "string") {
        if (n[e] === void 0 || e.startsWith("_") || e === "constructor")
          throw new TypeError(`No method named "${e}"`);
        n[e]();
      }
    });
  }
}
R.on(document, Lj, bw, function (t) {
  ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
    !Dr(this) && Ps.getOrCreateInstance(this).show();
});
R.on(window, Rj, () => {
  for (const t of q.find(Wj)) Ps.getOrCreateInstance(t);
});
rn(Ps);
const Uj = "toast",
  Vj = "bs.toast",
  Hr = `.${Vj}`,
  Yj = `mouseover${Hr}`,
  Gj = `mouseout${Hr}`,
  Kj = `focusin${Hr}`,
  qj = `focusout${Hr}`,
  Xj = `hide${Hr}`,
  Qj = `hidden${Hr}`,
  Jj = `show${Hr}`,
  Zj = `shown${Hr}`,
  eR = "fade",
  Cy = "hide",
  El = "show",
  Sl = "showing",
  tR = { animation: "boolean", autohide: "boolean", delay: "number" },
  nR = { animation: !0, autohide: !0, delay: 5e3 };
class Au extends yn {
  constructor(e, n) {
    super(e, n),
      (this._timeout = null),
      (this._hasMouseInteraction = !1),
      (this._hasKeyboardInteraction = !1),
      this._setListeners();
  }
  static get Default() {
    return nR;
  }
  static get DefaultType() {
    return tR;
  }
  static get NAME() {
    return Uj;
  }
  show() {
    if (R.trigger(this._element, Jj).defaultPrevented) return;
    this._clearTimeout(),
      this._config.animation && this._element.classList.add(eR);
    const n = () => {
      this._element.classList.remove(Sl),
        R.trigger(this._element, Zj),
        this._maybeScheduleHide();
    };
    this._element.classList.remove(Cy),
      ja(this._element),
      this._element.classList.add(El, Sl),
      this._queueCallback(n, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown() || R.trigger(this._element, Xj).defaultPrevented)
      return;
    const n = () => {
      this._element.classList.add(Cy),
        this._element.classList.remove(Sl, El),
        R.trigger(this._element, Qj);
    };
    this._element.classList.add(Sl),
      this._queueCallback(n, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout(),
      this.isShown() && this._element.classList.remove(El),
      super.dispose();
  }
  isShown() {
    return this._element.classList.contains(El);
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
    const r = e.relatedTarget;
    this._element === r ||
      this._element.contains(r) ||
      this._maybeScheduleHide();
  }
  _setListeners() {
    R.on(this._element, Yj, (e) => this._onInteraction(e, !0)),
      R.on(this._element, Gj, (e) => this._onInteraction(e, !1)),
      R.on(this._element, Kj, (e) => this._onInteraction(e, !0)),
      R.on(this._element, qj, (e) => this._onInteraction(e, !1));
  }
  _clearTimeout() {
    clearTimeout(this._timeout), (this._timeout = null);
  }
  static jQueryInterface(e) {
    return this.each(function () {
      const n = Au.getOrCreateInstance(this, e);
      if (typeof e == "string") {
        if (typeof n[e] > "u") throw new TypeError(`No method named "${e}"`);
        n[e](this);
      }
    });
  }
}
Cu(Au);
rn(Au);
Bd.createRoot(document.getElementById("root")).render(
  f.jsx(HS, { children: f.jsx(MA, {}) }),
);
