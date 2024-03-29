/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
      if (!e.document)
          throw new Error("jQuery requires a window with a document");
      return t(e)
  }
  : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
  "use strict";
  var h, v, O, A, M, T, I, V, U, Z, y = [], i = e.document, Xt = Object.getPrototypeOf, _ = y.slice, xe = y.concat, ce = y.push, q = y.indexOf, Y = {}, Ae = Y.toString, P = Y.hasOwnProperty, Me = P.toString, Bt = Me.call(Object), a = {}, o = function(t) {
      return "function" == typeof t && "number" != typeof t.nodeType
  }, k = function(t) {
      return t != null && t === t.window
  }, Ht = {
      type: !0,
      src: !0,
      noModule: !0
  }, ee, Je, tt, nt, dt, ge, le, be, ot, it, ut, ct, st, Xe, oe, Se, ue, we, _e;
  function Ie(e, t, n) {
      var s, o = (t = t || i).createElement("script");
      if (o.text = e,
      n)
          for (s in Ht)
              n[s] && (o[s] = n[s]);
      t.head.appendChild(o).parentNode.removeChild(o)
  }
  function x(e) {
      return e == null ? e + "" : "object" == typeof e || "function" == typeof e ? Y[Ae.call(e)] || "object" : typeof e
  }
  var Zt = "3.3.1"
    , n = function(e, t) {
      return new n.fn.init(e,t)
  }
    , Ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  n.fn = n.prototype = {
      jquery: "3.3.1",
      constructor: n,
      length: 0,
      toArray: function() {
          return _.call(this)
      },
      get: function(e) {
          return e == null ? _.call(this) : e < 0 ? this[e + this.length] : this[e]
      },
      pushStack: function(e) {
          var t = n.merge(this.constructor(), e);
          return t.prevObject = this,
          t
      },
      each: function(e) {
          return n.each(this, e)
      },
      map: function(e) {
          return this.pushStack(n.map(this, function(t, n) {
              return e.call(t, n, t)
          }))
      },
      slice: function() {
          return this.pushStack(_.apply(this, arguments))
      },
      first: function() {
          return this.eq(0)
      },
      last: function() {
          return this.eq(-1)
      },
      eq: function(e) {
          var n = this.length
            , t = +e + (e < 0 ? n : 0);
          return this.pushStack(t >= 0 && t < n ? [this[t]] : [])
      },
      end: function() {
          return this.prevObject || this.constructor()
      },
      push: ce,
      sort: y.sort,
      splice: y.splice
  },
  n.extend = n.fn.extend = function() {
      var t, s, a, r, c, l, e = arguments[0] || {}, i = 1, u = arguments.length, d = !1;
      for ("boolean" == typeof e && (d = e,
      e = arguments[i] || {},
      i++),
      "object" == typeof e || o(e) || (e = {}),
      i === u && (e = this,
      i--); i < u; i++)
          if (null != (r = arguments[i]))
              for (a in r)
                  t = e[a],
                  e !== (s = r[a]) && (d && s && (n.isPlainObject(s) || (c = Array.isArray(s))) ? (c ? (c = !1,
                  l = t && Array.isArray(t) ? t : []) : l = t && n.isPlainObject(t) ? t : {},
                  e[a] = n.extend(d, l, s)) : void 0 !== s && (e[a] = s));
      return e
  }
  ,
  n.extend({
      expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(e) {
          throw new Error(e)
      },
      noop: function() {},
      isPlainObject: function(e) {
          var t, n;
          return !!e && "[object Object]" === Ae.call(e) && (!(t = Xt(e)) || "function" == typeof (n = P.call(t, "constructor") && t.constructor) && Me.call(n) === Bt)
      },
      isEmptyObject: function(e) {
          var t;
          for (t in e)
              return !1;
          return !0
      },
      globalEval: function(e) {
          Ie(e)
      },
      each: function(e, t) {
          var s, n = 0;
          if (Q(e)) {
              for (s = e.length; n < s; n++)
                  if (!1 === t.call(e[n], n, e[n]))
                      break
          } else
              for (n in e)
                  if (!1 === t.call(e[n], n, e[n]))
                      break;
          return e
      },
      trim: function(e) {
          return e == null ? "" : (e + "").replace(Ot, "")
      },
      makeArray: function(e, t) {
          var s = t || [];
          return e != null && (Q(Object(e)) ? n.merge(s, "string" == typeof e ? [e] : e) : ce.call(s, e)),
          s
      },
      inArray: function(e, t, n) {
          return t == null ? -1 : q.call(t, e, n)
      },
      merge: function(e, t) {
          for (var o = +t.length, n = 0, s = e.length; n < o; n++)
              e[s++] = t[n];
          return e.length = s,
          e
      },
      grep: function(e, t, n) {
          for (var i, o = [], s = 0, a = e.length, r = !n; s < a; s++)
              (i = !t(e[s], s)) !== r && o.push(e[s]);
          return o
      },
      map: function(e, t, n) {
          var o, a, s = 0, i = [];
          if (Q(e))
              for (a = e.length; s < a; s++)
                  null != (o = t(e[s], s, n)) && i.push(o);
          else
              for (s in e)
                  null != (o = t(e[s], s, n)) && i.push(o);
          return xe.apply([], i)
      },
      guid: 1,
      support: a
  }),
  "function" == typeof Symbol && (n.fn[Symbol.iterator] = y[Symbol.iterator]),
  n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
      Y["[object " + t + "]"] = t.toLowerCase()
  });
  function Q(e) {
      var t = !!e && "length"in e && e.length
        , n = x(e);
      return !o(e) && !k(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
  }
  v = function(e) {
      var t, n, a, r, l, d, g, b, _, x, C, E, k, z, N, L, V, Q, Z, i = "sizzle" + 1 * new Date, c = e.document, f = 0, _e = 0, J = $(), ee = $(), D = $(), q = function(e, t) {
          return e === t && (C = !0),
          0
      }, ve = {}.hasOwnProperty, y = [], pe = y.pop, fe = y.push, v = y.push, ae = y.slice, w = function(e, t) {
          for (var n = 0, s = e.length; n < s; n++)
              if (e[n] === t)
                  return n;
          return -1
      }, W = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", s = `[\\x20\\t\\r\\n\\f]`, j = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", G = "\\[" + s + "*(" + j + ")(?:" + s + "*([*^$|!~]?=)" + s + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + j + "))|)" + s + "*\\]", H = ":(" + j + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + G + ")*)|.*)\\)|)", ce = new RegExp(s + "+","g"), S = new RegExp("^" + s + "+|((?:^|[^\\\\])(?:\\\\.)*)" + s + "+$","g"), re = new RegExp("^" + s + "*," + s + "*"), le = new RegExp("^" + s + "*([>+~]|" + s + ")" + s + "*"), me = new RegExp("=" + s + `*([^\\]'"]*?)` + s + "*\\]","g"), be = new RegExp(H), je = new RegExp("^" + j + "$"), T = {
          ID: new RegExp("^#(" + j + ")"),
          CLASS: new RegExp("^\\.(" + j + ")"),
          TAG: new RegExp("^(" + j + "|[*])"),
          ATTR: new RegExp("^" + G),
          PSEUDO: new RegExp("^" + H),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + s + "*(even|odd|(([+-]|)(\\d*)n|)" + s + "*(?:([+-]|)" + s + "*(\\d+)|))" + s + "*\\)|)","i"),
          bool: new RegExp("^(?:" + W + ")$","i"),
          needsContext: new RegExp("^" + s + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + s + "*((?:-\\d)?\\d*)" + s + "*\\)|)(?=[^-]|$)","i")
      }, we = /^(?:input|select|textarea|button)$/i, de = /^h\d$/i, A = /^[^{]+\{\s*\[native \w/, Oe = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Y = /[+~]/, m = new RegExp("\\\\([\\da-f]{1,6}" + s + "?|(" + s + ")|.)","ig"), p = function(e, t, n) {
          var s = "0x" + t - 65536;
          return s !== s || n ? t : s < 0 ? String.fromCharCode(s + 65536) : String.fromCharCode(s >> 10 | 55296, 1023 & s | 56320)
      }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function(e, t) {
          return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
      }, se = function() {
          g()
      }, ge = R(function(e) {
          return !0 === e.disabled && ("form"in e || "label"in e)
      }, {
          dir: "parentNode",
          next: "legend"
      });
      try {
          v.apply(y = ae.call(c.childNodes), c.childNodes),
          y[c.childNodes.length].nodeType
      } catch {
          v = {
              apply: y.length ? function(e, t) {
                  fe.apply(e, ae.call(t))
              }
              : function(e, t) {
                  for (var n = e.length, s = 0; e[n++] = t[s++]; )
                      ;
                  e.length = n - 1
              }
          }
      }
      function o(e, t, s, o) {
          var d, u, h, p, b, j, y, f = t && t.ownerDocument, m = t ? t.nodeType : 9;
          if (s = s || [],
          "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m)
              return s;
          if (!o && ((t ? t.ownerDocument || t : c) !== n && g(t),
          t = t || n,
          l)) {
              if (11 !== m && (b = Oe.exec(e)))
                  if (d = b[1]) {
                      if (9 === m) {
                          {
                              if (!(u = t.getElementById(d)))
                                  return s;
                              if (u.id === d)
                                  return s.push(u),
                                  s
                          }
                      } else if (f && (u = f.getElementById(d)) && k(t, u) && u.id === d)
                          return s.push(u),
                          s
                  } else {
                      if (b[2])
                          return v.apply(s, t.getElementsByTagName(e)),
                          s;
                      if ((d = b[3]) && a.getElementsByClassName && t.getElementsByClassName)
                          return v.apply(s, t.getElementsByClassName(d)),
                          s
                  }
              if (a.qsa && !D[e + " "] && (!r || !r.test(e))) {
                  if (1 !== m)
                      f = t,
                      y = e;
                  else if ("object" !== t.nodeName.toLowerCase()) {
                      for ((h = t.getAttribute("id")) ? h = h.replace(te, ne) : t.setAttribute("id", h = i),
                      p = (j = E(e)).length; p--; )
                          j[p] = "#" + h + " " + F(j[p]);
                      y = j.join(","),
                      f = Y.test(e) && B(t.parentNode) || t
                  }
                  if (y)
                      try {
                          return v.apply(s, f.querySelectorAll(y)),
                          s
                      } catch {} finally {
                          h === i && t.removeAttribute("id")
                      }
              }
          }
          return Z(e.replace(S, "$1"), t, s, o)
      }
      function $() {
          var n = [];
          function e(s, o) {
              return n.push(s + " ") > t.cacheLength && delete e[n.shift()],
              e[s + " "] = o
          }
          return e
      }
      function u(e) {
          return e[i] = !0,
          e
      }
      function h(e) {
          var t = n.createElement("fieldset");
          try {
              return !!e(t)
          } catch {
              return !1
          } finally {
              t.parentNode && t.parentNode.removeChild(t),
              t = null
          }
      }
      function K(e, n) {
          for (var s = e.split("|"), o = s.length; o--; )
              t.attrHandle[s[o]] = n
      }
      function X(e, t) {
          var n = t && e
            , s = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
          if (s)
              return s;
          if (n)
              for (; n = n.nextSibling; )
                  if (n === t)
                      return -1;
          return e ? 1 : -1
      }
      function ue(e) {
          return function(t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e
          }
      }
      function he(e) {
          return function(t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e
          }
      }
      function ie(e) {
          return function(t) {
              return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ge(t) === e : t.disabled === e : "label"in t && t.disabled === e
          }
      }
      function O(e) {
          return u(function(t) {
              return t = +t,
              u(function(n, s) {
                  for (var o, i = e([], n.length, t), a = i.length; a--; )
                      n[o = i[a]] && (n[o] = !(s[o] = n[o]))
              })
          })
      }
      function B(e) {
          return e && "undefined" != typeof e.getElementsByTagName && e
      }
      a = o.support = {},
      Q = o.isXML = function(e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName
      }
      ,
      g = o.setDocument = function(e) {
          var o, f, u = e ? e.ownerDocument || e : c;
          return u !== n && 9 === u.nodeType && u.documentElement ? (n = u,
          d = n.documentElement,
          l = !Q(n),
          c !== n && (o = n.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", se, !1) : o.attachEvent && o.attachEvent("onunload", se)),
          a.attributes = h(function(e) {
              return e.className = "i",
              !e.getAttribute("className")
          }),
          a.getElementsByTagName = h(function(e) {
              return e.appendChild(n.createComment("")),
              !e.getElementsByTagName("*").length
          }),
          a.getElementsByClassName = A.test(n.getElementsByClassName),
          a.getById = h(function(e) {
              return d.appendChild(e).id = i,
              !n.getElementsByName || !n.getElementsByName(i).length
          }),
          a.getById ? (t.filter.ID = function(e) {
              var t = e.replace(m, p);
              return function(e) {
                  return e.getAttribute("id") === t
              }
          }
          ,
          t.find.ID = function(e, t) {
              if ("undefined" != typeof t.getElementById && l) {
                  var n = t.getElementById(e);
                  return n ? [n] : []
              }
          }
          ) : (t.filter.ID = function(e) {
              var t = e.replace(m, p);
              return function(e) {
                  var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                  return n && n.value === t
              }
          }
          ,
          t.find.ID = function(e, t) {
              if ("undefined" != typeof t.getElementById && l) {
                  var s, o, i, n = t.getElementById(e);
                  if (n) {
                      if ((s = n.getAttributeNode("id")) && s.value === e)
                          return [n];
                      for (i = t.getElementsByName(e),
                      o = 0; n = i[o++]; )
                          if ((s = n.getAttributeNode("id")) && s.value === e)
                              return [n]
                  }
                  return []
              }
          }
          ),
          t.find.TAG = a.getElementsByTagName ? function(e, t) {
              return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : a.qsa ? t.querySelectorAll(e) : void 0
          }
          : function(e, t) {
              var n, s = [], i = 0, o = t.getElementsByTagName(e);
              if ("*" === e) {
                  for (; n = o[i++]; )
                      1 === n.nodeType && s.push(n);
                  return s
              }
              return o
          }
          ,
          t.find.CLASS = a.getElementsByClassName && function(e, t) {
              if ("undefined" != typeof t.getElementsByClassName && l)
                  return t.getElementsByClassName(e)
          }
          ,
          _ = [],
          r = [],
          (a.qsa = A.test(n.querySelectorAll)) && (h(function(e) {
              d.appendChild(e).innerHTML = "<a id='" + i + "'></a><select id='" + i + `-
\\' msallowcapture=''><option selected=''></option></select>`,
              e.querySelectorAll("[msallowcapture^='']").length && r.push("[*^$]=" + s + `*(?:''|"")`),
              e.querySelectorAll("[selected]").length || r.push("\\[" + s + "*(?:value|" + W + ")"),
              e.querySelectorAll("[id~=" + i + "-]").length || r.push("~="),
              e.querySelectorAll(":checked").length || r.push(":checked"),
              e.querySelectorAll("a#" + i + "+*").length || r.push(".#.+[+~]")
          }),
          h(function(e) {
              e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var t = n.createElement("input");
              t.setAttribute("type", "hidden"),
              e.appendChild(t).setAttribute("name", "D"),
              e.querySelectorAll("[name=d]").length && r.push("name" + s + "*[*^$|!~]?="),
              2 !== e.querySelectorAll(":enabled").length && r.push(":enabled", ":disabled"),
              d.appendChild(e).disabled = !0,
              2 !== e.querySelectorAll(":disabled").length && r.push(":enabled", ":disabled"),
              e.querySelectorAll("*,:x"),
              r.push(",.*:")
          })),
          (a.matchesSelector = A.test(N = d.matches || d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && h(function(e) {
              a.disconnectedMatch = N.call(e, "*"),
              N.call(e, "[s!='']:x"),
              _.push("!=", H)
          }),
          r = r.length && new RegExp(r.join("|")),
          _ = _.length && new RegExp(_.join("|")),
          f = A.test(d.compareDocumentPosition),
          k = f || A.test(d.contains) ? function(e, t) {
              var s = 9 === e.nodeType ? e.documentElement : e
                , n = t && t.parentNode;
              return e === n || !(!n || 1 !== n.nodeType || !(s.contains ? s.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
          }
          : function(e, t) {
              if (t)
                  for (; t = t.parentNode; )
                      if (t === e)
                          return !0;
              return !1
          }
          ,
          q = f ? function(e, t) {
              if (e === t)
                  return C = !0,
                  0;
              var s = !e.compareDocumentPosition - !t.compareDocumentPosition;
              return s || (1 & (s = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !a.sortDetached && t.compareDocumentPosition(e) === s ? e === n || e.ownerDocument === c && k(c, e) ? -1 : t === n || t.ownerDocument === c && k(c, t) ? 1 : b ? w(b, e) - w(b, t) : 0 : 4 & s ? -1 : 1)
          }
          : function(e, t) {
              if (e === t)
                  return C = !0,
                  0;
              var s, o = 0, r = e.parentNode, l = t.parentNode, i = [e], a = [t];
              if (!r || !l)
                  return e === n ? -1 : t === n ? 1 : r ? -1 : l ? 1 : b ? w(b, e) - w(b, t) : 0;
              if (r === l)
                  return X(e, t);
              for (s = e; s = s.parentNode; )
                  i.unshift(s);
              for (s = t; s = s.parentNode; )
                  a.unshift(s);
              for (; i[o] === a[o]; )
                  o++;
              return o ? X(i[o], a[o]) : i[o] === c ? -1 : a[o] === c ? 1 : 0
          }
          ,
          n) : n
      }
      ,
      o.matches = function(e, t) {
          return o(e, null, null, t)
      }
      ,
      o.matchesSelector = function(e, t) {
          if ((e.ownerDocument || e) !== n && g(e),
          t = t.replace(me, "='$1']"),
          a.matchesSelector && l && !D[t + " "] && (!_ || !_.test(t)) && (!r || !r.test(t)))
              try {
                  var s = N.call(e, t);
                  if (s || a.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                      return s
              } catch {}
          return o(t, n, null, [e]).length > 0
      }
      ,
      o.contains = function(e, t) {
          return (e.ownerDocument || e) !== n && g(e),
          k(e, t)
      }
      ,
      o.attr = function(e, s) {
          (e.ownerDocument || e) !== n && g(e);
          var i = t.attrHandle[s.toLowerCase()]
            , o = i && ve.call(t.attrHandle, s.toLowerCase()) ? i(e, s, !l) : void 0;
          return void 0 !== o ? o : a.attributes || !l ? e.getAttribute(s) : (o = e.getAttributeNode(s)) && o.specified ? o.value : null
      }
      ,
      o.escape = function(e) {
          return (e + "").replace(te, ne)
      }
      ,
      o.error = function(e) {
          throw new Error("Syntax error, unrecognized expression: " + e)
      }
      ,
      o.uniqueSort = function(e) {
          var s, o = [], t = 0, n = 0;
          if (C = !a.detectDuplicates,
          b = !a.sortStable && e.slice(0),
          e.sort(q),
          C) {
              for (; s = e[n++]; )
                  s === e[n] && (t = o.push(n));
              for (; t--; )
                  e.splice(o[t], 1)
          }
          return b = null,
          e
      }
      ,
      z = o.getText = function(e) {
          var s, n = "", o = 0, t = e.nodeType;
          if (t) {
              if (1 === t || 9 === t || 11 === t) {
                  if ("string" == typeof e.textContent)
                      return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling)
                      n += z(e)
              } else if (3 === t || 4 === t)
                  return e.nodeValue
          } else
              for (; s = e[o++]; )
                  n += z(s);
          return n
      }
      ,
      (t = o.selectors = {
          cacheLength: 50,
          createPseudo: u,
          match: T,
          attrHandle: {},
          find: {},
          relative: {
              ">": {
                  dir: "parentNode",
                  first: !0
              },
              " ": {
                  dir: "parentNode"
              },
              "+": {
                  dir: "previousSibling",
                  first: !0
              },
              "~": {
                  dir: "previousSibling"
              }
          },
          preFilter: {
              ATTR: function(e) {
                  return e[1] = e[1].replace(m, p),
                  e[3] = (e[3] || e[4] || e[5] || "").replace(m, p),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
              },
              CHILD: function(e) {
                  return e[1] = e[1].toLowerCase(),
                  "nth" === e[1].slice(0, 3) ? (e[3] || o.error(e[0]),
                  e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                  e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && o.error(e[0]),
                  e
              },
              PSEUDO: function(e) {
                  var n, t = !e[6] && e[2];
                  return T.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : t && be.test(t) && (n = E(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (e[0] = e[0].slice(0, n),
                  e[2] = t.slice(0, n)),
                  e.slice(0, 3))
              }
          },
          filter: {
              TAG: function(e) {
                  var t = e.replace(m, p).toLowerCase();
                  return "*" === e ? function() {
                      return !0
                  }
                  : function(e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t
                  }
              },
              CLASS: function(e) {
                  var t = J[e + " "];
                  return t || (t = new RegExp("(^|" + s + ")" + e + "(" + s + "|$)")) && J(e, function(e) {
                      return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                  })
              },
              ATTR: function(e, t, n) {
                  return function(s) {
                      var i = o.attr(s, e);
                      return i == null ? "!=" === t : !t || (i += "",
                      "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(ce, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                  }
              },
              CHILD: function(e, t, n, s, o) {
                  var c = "nth" !== e.slice(0, 3)
                    , r = "last" !== e.slice(-4)
                    , a = "of-type" === t;
                  return 1 === s && 0 === o ? function(e) {
                      return !!e.parentNode
                  }
                  : function(t, n, l) {
                      var d, h, m, p, g, j, v = c !== r ? "nextSibling" : "previousSibling", b = t.parentNode, _ = a && t.nodeName.toLowerCase(), y = !l && !a, u = !1;
                      if (b) {
                          if (c) {
                              for (; v; ) {
                                  for (d = t; d = d[v]; )
                                      if (a ? d.nodeName.toLowerCase() === _ : 1 === d.nodeType)
                                          return !1;
                                  g = v = "only" === e && !g && "nextSibling"
                              }
                              return !0
                          }
                          if (g = [r ? b.firstChild : b.lastChild],
                          r && y) {
                              for (u = (h = (p = (j = (m = (d = b)[i] || (d[i] = {}))[d.uniqueID] || (m[d.uniqueID] = {}))[e] || [])[0] === f && p[1]) && p[2],
                              d = h && b.childNodes[h]; d = ++h && d && d[v] || (u = h = 0) || g.pop(); )
                                  if (1 === d.nodeType && ++u && d === t) {
                                      j[e] = [f, h, u];
                                      break
                                  }
                          } else if (y && (u = h = (p = (j = (m = (d = t)[i] || (d[i] = {}))[d.uniqueID] || (m[d.uniqueID] = {}))[e] || [])[0] === f && p[1]),
                          !1 === u)
                              for (; d = ++h && d && d[v] || (u = h = 0) || g.pop(); )
                                  if ((a ? d.nodeName.toLowerCase() === _ : 1 === d.nodeType) && ++u && (y && ((j = (m = d[i] || (d[i] = {}))[d.uniqueID] || (m[d.uniqueID] = {}))[e] = [f, u]),
                                  d === t))
                                      break;
                          return (u -= o) === s || u % s == 0 && u / s >= 0
                      }
                  }
              },
              PSEUDO: function(e, n) {
                  var a, s = t.pseudos[e] || t.setFilters[e.toLowerCase()] || o.error("unsupported pseudo: " + e);
                  return s[i] ? s(n) : s.length > 1 ? (a = [e, e, "", n],
                  t.setFilters.hasOwnProperty(e.toLowerCase()) ? u(function(e, t) {
                      for (var a, o = s(e, n), i = o.length; i--; )
                          e[a = w(e, o[i])] = !(t[a] = o[i])
                  }) : function(e) {
                      return s(e, 0, a)
                  }
                  ) : s
              }
          },
          pseudos: {
              not: u(function(e) {
                  var t = []
                    , s = []
                    , n = V(e.replace(S, "$1"));
                  return n[i] ? u(function(e, t, s, o) {
                      for (var a, r = n(e, null, o, []), i = e.length; i--; )
                          (a = r[i]) && (e[i] = !(t[i] = a))
                  }) : function(e, o, i) {
                      return t[0] = e,
                      n(t, null, i, s),
                      t[0] = null,
                      !s.pop()
                  }
              }),
              has: u(function(e) {
                  return function(t) {
                      return o(e, t).length > 0
                  }
              }),
              contains: u(function(e) {
                  return e = e.replace(m, p),
                  function(t) {
                      return (t.textContent || t.innerText || z(t)).indexOf(e) > -1
                  }
              }),
              lang: u(function(e) {
                  return je.test(e || "") || o.error("unsupported lang: " + e),
                  e = e.replace(m, p).toLowerCase(),
                  function(t) {
                      var n;
                      do
                          if (n = l ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                              return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                      while ((t = t.parentNode) && 1 === t.nodeType)return !1
                  }
              }),
              target: function(t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id
              },
              root: function(e) {
                  return e === d
              },
              focus: function(e) {
                  return e === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
              },
              enabled: ie(!1),
              disabled: ie(!0),
              checked: function(e) {
                  var t = e.nodeName.toLowerCase();
                  return "input" === t && !!e.checked || "option" === t && !!e.selected
              },
              selected: function(e) {
                  return e.parentNode && e.parentNode.selectedIndex,
                  !0 === e.selected
              },
              empty: function(e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6)
                          return !1;
                  return !0
              },
              parent: function(e) {
                  return !t.pseudos.empty(e)
              },
              header: function(e) {
                  return de.test(e.nodeName)
              },
              input: function(e) {
                  return we.test(e.nodeName)
              },
              button: function(e) {
                  var t = e.nodeName.toLowerCase();
                  return "input" === t && "button" === e.type || "button" === t
              },
              text: function(e) {
                  var t;
                  return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
              },
              first: O(function() {
                  return [0]
              }),
              last: O(function(e, t) {
                  return [t - 1]
              }),
              eq: O(function(e, t, n) {
                  return [n < 0 ? n + t : n]
              }),
              even: O(function(e, t) {
                  for (var n = 0; n < t; n += 2)
                      e.push(n);
                  return e
              }),
              odd: O(function(e, t) {
                  for (var n = 1; n < t; n += 2)
                      e.push(n);
                  return e
              }),
              lt: O(function(e, t, n) {
                  for (var s = n < 0 ? n + t : n; --s >= 0; )
                      e.push(s);
                  return e
              }),
              gt: O(function(e, t, n) {
                  for (var s = n < 0 ? n + t : n; ++s < t; )
                      e.push(s);
                  return e
              })
          }
      }).pseudos.nth = t.pseudos.eq;
      for (x in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
      })
          t.pseudos[x] = ue(x);
      for (x in {
          submit: !0,
          reset: !0
      })
          t.pseudos[x] = he(x);
      function oe() {}
      oe.prototype = t.filters = t.pseudos,
      t.setFilters = new oe,
      E = o.tokenize = function(e, n) {
          var s, i, a, r, c, l, d, u = ee[e + " "];
          if (u)
              return n ? 0 : u.slice(0);
          for (s = e,
          l = [],
          d = t.preFilter; s; ) {
              a && !(i = re.exec(s)) || (i && (s = s.slice(i[0].length) || s),
              l.push(c = [])),
              a = !1,
              (i = le.exec(s)) && (a = i.shift(),
              c.push({
                  value: a,
                  type: i[0].replace(S, " ")
              }),
              s = s.slice(a.length));
              for (r in t.filter)
                  !(i = T[r].exec(s)) || d[r] && !(i = d[r](i)) || (a = i.shift(),
                  c.push({
                      value: a,
                      type: r,
                      matches: i
                  }),
                  s = s.slice(a.length));
              if (!a)
                  break
          }
          return n ? s.length : s ? o.error(e) : ee(e, l).slice(0)
      }
      ;
      function F(e) {
          for (var t = 0, s = e.length, n = ""; t < s; t++)
              n += e[t].value;
          return n
      }
      function R(e, t, n) {
          var s = t.dir
            , o = t.next
            , a = o || s
            , r = n && "parentNode" === a
            , c = _e++;
          return t.first ? function(t, n, o) {
              for (; t = t[s]; )
                  if (1 === t.nodeType || r)
                      return e(t, n, o);
              return !1
          }
          : function(t, n, l) {
              var d, u, h, m = [f, c];
              if (l) {
                  for (; t = t[s]; )
                      if ((1 === t.nodeType || r) && e(t, n, l))
                          return !0
              } else
                  for (; t = t[s]; )
                      if (1 === t.nodeType || r)
                          if (h = t[i] || (t[i] = {}),
                          u = h[t.uniqueID] || (h[t.uniqueID] = {}),
                          o && o === t.nodeName.toLowerCase())
                              t = t[s] || t;
                          else {
                              if ((d = u[a]) && d[0] === f && d[1] === c)
                                  return m[2] = d[2];
                              if (u[a] = m,
                              m[2] = e(t, n, l))
                                  return !0
                          }
              return !1
          }
      }
      function P(e) {
          return e.length > 1 ? function(t, n, s) {
              for (var o = e.length; o--; )
                  if (!e[o](t, n, s))
                      return !1;
              return !0
          }
          : e[0]
      }
      function ye(e, t, n) {
          for (var s = 0, i = t.length; s < i; s++)
              o(e, t[s], n);
          return n
      }
      function M(e, t, n, s, o) {
          for (var a, r = [], i = 0, c = e.length, l = t != null; i < c; i++)
              (a = e[i]) && (n && !n(a, s, o) || (r.push(a),
              l && t.push(i)));
          return r
      }
      function I(e, t, n, s, o, a) {
          return s && !s[i] && (s = I(s)),
          o && !o[i] && (o = I(o, a)),
          u(function(i, a, r, c) {
              var d, u, h, p = [], f = [], g = a.length, b = i || ye(t || "*", r.nodeType ? [r] : r, []), m = !e || !i && t ? b : M(b, p, e, r, c), l = n ? o || (i ? e : g || s) ? [] : a : m;
              if (n && n(m, l, r, c),
              s)
                  for (u = M(l, f),
                  s(u, [], r, c),
                  d = u.length; d--; )
                      (h = u[d]) && (l[f[d]] = !(m[f[d]] = h));
              if (i) {
                  if (o || e) {
                      if (o) {
                          for (u = [],
                          d = l.length; d--; )
                              (h = l[d]) && u.push(m[d] = h);
                          o(null, l = [], u, c)
                      }
                      for (d = l.length; d--; )
                          (h = l[d]) && (u = o ? w(i, h) : p[d]) > -1 && (i[u] = !(a[u] = h))
                  }
              } else
                  l = M(l === a ? l.splice(g, l.length) : l),
                  o ? o(null, a, l, c) : v.apply(a, l)
          })
      }
      function U(e) {
          for (var s, o, r, c = e.length, l = t.relative[e[0].type], d = l || t.relative[" "], n = l ? 1 : 0, u = R(function(e) {
              return e === r
          }, d, !0), h = R(function(e) {
              return w(r, e) > -1
          }, d, !0), a = [function(e, t, n) {
              var s = !l && (n || t !== L) || ((r = t).nodeType ? u(e, t, n) : h(e, t, n));
              return r = null,
              s
          }
          ]; n < c; n++)
              if (o = t.relative[e[n].type])
                  a = [R(P(a), o)];
              else {
                  if ((o = t.filter[e[n].type].apply(null, e[n].matches))[i]) {
                      for (s = ++n; s < c; s++)
                          if (t.relative[e[s].type])
                              break;
                      return I(n > 1 && P(a), n > 1 && F(e.slice(0, n - 1).concat({
                          value: " " === e[n - 2].type ? "*" : ""
                      })).replace(S, "$1"), o, n < s && U(e.slice(n, s)), s < c && U(e = e.slice(s)), s < c && F(e))
                  }
                  a.push(o)
              }
          return P(a)
      }
      function xe(e, s) {
          var i = s.length > 0
            , a = e.length > 0
            , r = function(r, c, d, u, h) {
              var m, j, _, y = 0, p = "0", w = r && [], b = [], O = L, x = r || a && t.find.TAG("*", h), C = f += O == null ? 1 : Math.random() || .1, E = x.length;
              for (h && (L = c === n || c || h); p !== E && null != (m = x[p]); p++) {
                  if (a && m) {
                      for (_ = 0,
                      c || m.ownerDocument === n || (g(m),
                      d = !l); j = e[_++]; )
                          if (j(m, c || n, d)) {
                              u.push(m);
                              break
                          }
                      h && (f = C)
                  }
                  i && ((m = !j && m) && y--,
                  r && w.push(m))
              }
              if (y += p,
              i && p !== y) {
                  for (_ = 0; j = s[_++]; )
                      j(w, b, c, d);
                  if (r) {
                      if (y > 0)
                          for (; p--; )
                              w[p] || b[p] || (b[p] = pe.call(u));
                      b = M(b)
                  }
                  v.apply(u, b),
                  h && !r && b.length > 0 && y + s.length > 1 && o.uniqueSort(u)
              }
              return h && (f = C,
              L = O),
              w
          };
          return i ? u(r) : r
      }
      return V = o.compile = function(e, t) {
          var s, o = [], a = [], n = D[e + " "];
          if (!n) {
              for (t || (t = E(e)),
              s = t.length; s--; )
                  (n = U(t[s]))[i] ? o.push(n) : a.push(n);
              (n = D(e, xe(a, o))).selector = e
          }
          return n
      }
      ,
      Z = o.select = function(e, n, s, o) {
          var i, a, r, u, h, d = "function" == typeof e && e, c = !o && E(e = d.selector || e);
          if (s = s || [],
          1 === c.length) {
              if ((i = c[0] = c[0].slice(0)).length > 2 && "ID" === (a = i[0]).type && 9 === n.nodeType && l && t.relative[i[1].type]) {
                  if (!(n = (t.find.ID(a.matches[0].replace(m, p), n) || [])[0]))
                      return s;
                  d && (n = n.parentNode),
                  e = e.slice(i.shift().value.length)
              }
              for (r = T.needsContext.test(e) ? 0 : i.length; r--; ) {
                  if (a = i[r],
                  t.relative[u = a.type])
                      break;
                  if ((h = t.find[u]) && (o = h(a.matches[0].replace(m, p), Y.test(i[0].type) && B(n.parentNode) || n))) {
                      if (i.splice(r, 1),
                      !(e = o.length && F(i)))
                          return v.apply(s, o),
                          s;
                      break
                  }
              }
          }
          return (d || V(e, c))(o, n, !l, s, !n || Y.test(e) && B(n.parentNode) || n),
          s
      }
      ,
      a.sortStable = i.split("").sort(q).join("") === i,
      a.detectDuplicates = !!C,
      g(),
      a.sortDetached = h(function(e) {
          return 1 & e.compareDocumentPosition(n.createElement("fieldset"))
      }),
      h(function(e) {
          return e.innerHTML = "<a href='#'></a>",
          "#" === e.firstChild.getAttribute("href")
      }) || K("type|href|height|width", function(e, t, n) {
          if (!n)
              return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
      }),
      a.attributes && h(function(e) {
          return e.innerHTML = "<input/>",
          e.firstChild.setAttribute("value", ""),
          "" === e.firstChild.getAttribute("value")
      }) || K("value", function(e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase())
              return e.defaultValue
      }),
      h(function(e) {
          return null == e.getAttribute("disabled")
      }) || K(W, function(e, t, n) {
          var s;
          if (!n)
              return !0 === e[t] ? t.toLowerCase() : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
      }),
      o
  }(e),
  n.find = v,
  n.expr = v.selectors,
  n.expr[":"] = n.expr.pseudos,
  n.uniqueSort = n.unique = v.uniqueSort,
  n.text = v.getText,
  n.isXMLDoc = v.isXML,
  n.contains = v.contains,
  n.escapeSelector = v.escape;
  var C = function(e, t, s) {
      for (var o = [], i = void 0 !== s; (e = e[t]) && 9 !== e.nodeType; )
          if (1 === e.nodeType) {
              if (i && n(e).is(s))
                  break;
              o.push(e)
          }
      return o
  }
    , We = function(e, t) {
      for (var n = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && n.push(e);
      return n
  }
    , Ke = n.expr.match.needsContext;
  function m(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
  }
  ee = /^<([a-z][^/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function X(e, t, s) {
      return o(t) ? n.grep(e, function(e, n) {
          return !!t.call(e, n, e) !== s
      }) : t.nodeType ? n.grep(e, function(e) {
          return e === t !== s
      }) : "string" != typeof t ? n.grep(e, function(e) {
          return q.call(t, e) > -1 !== s
      }) : n.filter(t, e, s)
  }
  n.filter = function(e, t, s) {
      var o = t[0];
      return s && (e = ":not(" + e + ")"),
      1 === t.length && 1 === o.nodeType ? n.find.matchesSelector(o, e) ? [o] : [] : n.find.matches(e, n.grep(t, function(e) {
          return 1 === e.nodeType
      }))
  }
  ,
  n.fn.extend({
      find: function(e) {
          var t, s, o = this.length, i = this;
          if ("string" != typeof e)
              return this.pushStack(n(e).filter(function() {
                  for (t = 0; t < o; t++)
                      if (n.contains(i[t], this))
                          return !0
              }));
          for (s = this.pushStack([]),
          t = 0; t < o; t++)
              n.find(e, i[t], s);
          return o > 1 ? n.uniqueSort(s) : s
      },
      filter: function(e) {
          return this.pushStack(X(this, e || [], !1))
      },
      not: function(e) {
          return this.pushStack(X(this, e || [], !0))
      },
      is: function(e) {
          return !!X(this, "string" == typeof e && Ke.test(e) ? n(e) : e || [], !1).length
      }
  }),
  tt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
  (n.fn.init = function(e, t, s) {
      var a, r;
      if (!e)
          return this;
      if (s = s || Je,
      "string" == typeof e) {
          if (!(a = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : tt.exec(e)) || !a[1] && t)
              return !t || t.jquery ? (t || s).find(e) : this.constructor(t).find(e);
          if (a[1]) {
              if (t = t instanceof n ? t[0] : t,
              n.merge(this, n.parseHTML(a[1], t && t.nodeType ? t.ownerDocument || t : i, !0)),
              ee.test(a[1]) && n.isPlainObject(t))
                  for (a in t)
                      o(this[a]) ? this[a](t[a]) : this.attr(a, t[a]);
              return this
          }
          return (r = i.getElementById(a[2])) && (this[0] = r,
          this.length = 1),
          this
      }
      return e.nodeType ? (this[0] = e,
      this.length = 1,
      this) : o(e) ? void 0 !== s.ready ? s.ready(e) : e(n) : n.makeArray(e, this)
  }
  ).prototype = n.fn,
  Je = n(i),
  nt = /^(?:parents|prev(?:Until|All))/,
  dt = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
  },
  n.fn.extend({
      has: function(e) {
          var t = n(e, this)
            , s = t.length;
          return this.filter(function() {
              for (var e = 0; e < s; e++)
                  if (n.contains(this, t[e]))
                      return !0
          })
      },
      closest: function(e, t) {
          var s, i = 0, r = this.length, o = [], a = "string" != typeof e && n(e);
          if (!Ke.test(e))
              for (; i < r; i++)
                  for (s = this[i]; s && s !== t; s = s.parentNode)
                      if (s.nodeType < 11 && (a ? a.index(s) > -1 : 1 === s.nodeType && n.find.matchesSelector(s, e))) {
                          o.push(s);
                          break
                      }
          return this.pushStack(o.length > 1 ? n.uniqueSort(o) : o)
      },
      index: function(e) {
          return e ? "string" == typeof e ? q.call(n(e), this[0]) : q.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(e, t) {
          return this.pushStack(n.uniqueSort(n.merge(this.get(), n(e, t))))
      },
      addBack: function(e) {
          return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
      }
  });
  function ht(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType; )
          ;
      return e
  }
  n.each({
      parent: function(e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null
      },
      parents: function(e) {
          return C(e, "parentNode")
      },
      parentsUntil: function(e, t, n) {
          return C(e, "parentNode", n)
      },
      next: function(e) {
          return ht(e, "nextSibling")
      },
      prev: function(e) {
          return ht(e, "previousSibling")
      },
      nextAll: function(e) {
          return C(e, "nextSibling")
      },
      prevAll: function(e) {
          return C(e, "previousSibling")
      },
      nextUntil: function(e, t, n) {
          return C(e, "nextSibling", n)
      },
      prevUntil: function(e, t, n) {
          return C(e, "previousSibling", n)
      },
      siblings: function(e) {
          return We((e.parentNode || {}).firstChild, e)
      },
      children: function(e) {
          return We(e.firstChild)
      },
      contents: function(e) {
          return m(e, "iframe") ? e.contentDocument : (m(e, "template") && (e = e.content || e),
          n.merge([], e.childNodes))
      }
  }, function(e, t) {
      n.fn[e] = function(s, o) {
          var i = n.map(this, t, s);
          return "Until" !== e.slice(-5) && (o = s),
          o && "string" == typeof o && (i = n.filter(o, i)),
          this.length > 1 && (dt[e] || n.uniqueSort(i),
          nt.test(e) && i.reverse()),
          this.pushStack(i)
      }
  }),
  h = /[^\x20\t\r\n\f]+/g;
  function pt(e) {
      var t = {};
      return n.each(e.match(h) || [], function(e, n) {
          t[n] = !0
      }),
      t
  }
  n.Callbacks = function(e) {
      e = "string" == typeof e ? pt(e) : n.extend({}, e);
      var s, i, r, d, t = [], c = [], a = -1, u = function() {
          for (i = i || e.once,
          d = r = !0; c.length; a = -1)
              for (s = c.shift(); ++a < t.length; )
                  !1 === t[a].apply(s[0], s[1]) && e.stopOnFalse && (a = t.length,
                  s = !1);
          e.memory || (s = !1),
          r = !1,
          i && (t = s ? [] : "")
      }, l = {
          add: function() {
              return t && (s && !r && (a = t.length - 1,
              c.push(s)),
              function s(i) {
                  n.each(i, function(n, i) {
                      o(i) ? e.unique && l.has(i) || t.push(i) : i && i.length && "string" !== x(i) && s(i)
                  })
              }(arguments),
              s && !r && u()),
              this
          },
          remove: function() {
              return n.each(arguments, function(e, s) {
                  for (var o; (o = n.inArray(s, t, o)) > -1; )
                      t.splice(o, 1),
                      o <= a && a--
              }),
              this
          },
          has: function(e) {
              return e ? n.inArray(e, t) > -1 : t.length > 0
          },
          empty: function() {
              return t && (t = []),
              this
          },
          disable: function() {
              return i = c = [],
              t = s = "",
              this
          },
          disabled: function() {
              return !t
          },
          lock: function() {
              return i = c = [],
              s || r || (t = s = ""),
              this
          },
          locked: function() {
              return !!i
          },
          fireWith: function(e, t) {
              return i || (t = [e, (t = t || []).slice ? t.slice() : t],
              c.push(t),
              r || u()),
              this
          },
          fire: function() {
              return l.fireWith(this, arguments),
              this
          },
          fired: function() {
              return !!d
          }
      };
      return l
  }
  ;
  function E(e) {
      return e
  }
  function H(e) {
      throw e
  }
  function pe(e, t, n, s) {
      var i;
      try {
          e && o(i = e.promise) ? i.call(e).done(t).fail(n) : e && o(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(s))
      } catch (e) {
          n.apply(void 0, [e])
      }
  }
  n.extend({
      Deferred: function(t) {
          var i = [["notify", "progress", n.Callbacks("memory"), n.Callbacks("memory"), 2], ["resolve", "done", n.Callbacks("once memory"), n.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", n.Callbacks("once memory"), n.Callbacks("once memory"), 1, "rejected"]]
            , r = "pending"
            , a = {
              state: function() {
                  return r
              },
              always: function() {
                  return s.done(arguments).fail(arguments),
                  this
              },
              catch: function(e) {
                  return a.then(null, e)
              },
              pipe: function() {
                  var e = arguments;
                  return n.Deferred(function(t) {
                      n.each(i, function(n, i) {
                          var a = o(e[i[4]]) && e[i[4]];
                          s[i[1]](function() {
                              var e = a && a.apply(this, arguments);
                              e && o(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, a ? [e] : arguments)
                          })
                      }),
                      e = null
                  }).promise()
              },
              then: function(t, s, a) {
                  var r = 0;
                  function c(t, s, i, a) {
                      return function() {
                          var l = this
                            , d = arguments
                            , h = function() {
                              var e, n;
                              if (!(t < r)) {
                                  if ((e = i.apply(l, d)) === s.promise())
                                      throw new TypeError("Thenable self-resolution");
                                  n = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                  o(n) ? a ? n.call(e, c(r, s, E, a), c(r, s, H, a)) : (r++,
                                  n.call(e, c(r, s, E, a), c(r, s, H, a), c(r, s, E, s.notifyWith))) : (i !== E && (l = void 0,
                                  d = [e]),
                                  (a || s.resolveWith)(l, d))
                              }
                          }
                            , u = a ? h : function() {
                              try {
                                  h()
                              } catch (e) {
                                  n.Deferred.exceptionHook && n.Deferred.exceptionHook(e, u.stackTrace),
                                  t + 1 >= r && (i !== H && (l = void 0,
                                  d = [e]),
                                  s.rejectWith(l, d))
                              }
                          }
                          ;
                          t ? u() : (n.Deferred.getStackHook && (u.stackTrace = n.Deferred.getStackHook()),
                          e.setTimeout(u))
                      }
                  }
                  return n.Deferred(function(e) {
                      i[0][3].add(c(0, e, o(a) ? a : E, e.notifyWith)),
                      i[1][3].add(c(0, e, o(t) ? t : E)),
                      i[2][3].add(c(0, e, o(s) ? s : H))
                  }).promise()
              },
              promise: function(e) {
                  return e != null ? n.extend(e, a) : a
              }
          }
            , s = {};
          return n.each(i, function(e, t) {
              var n = t[2]
                , o = t[5];
              a[t[1]] = n.add,
              o && n.add(function() {
                  r = o
              }, i[3 - e][2].disable, i[3 - e][3].disable, i[0][2].lock, i[0][3].lock),
              n.add(t[3].fire),
              s[t[0]] = function() {
                  return s[t[0] + "With"](this === s ? void 0 : this, arguments),
                  this
              }
              ,
              s[t[0] + "With"] = n.fireWith
          }),
          a.promise(s),
          t && t.call(s, s),
          s
      },
      when: function(e) {
          var a = arguments.length
            , t = a
            , r = Array(t)
            , i = _.call(arguments)
            , s = n.Deferred()
            , c = function(e) {
              return function(t) {
                  r[e] = this,
                  i[e] = arguments.length > 1 ? _.call(arguments) : t,
                  --a || s.resolveWith(r, i)
              }
          };
          if (a <= 1 && (pe(e, s.done(c(t)).resolve, s.reject, !a),
          "pending" === s.state() || o(i[t] && i[t].then)))
              return s.then();
          for (; t--; )
              pe(i[t], c(t), s.reject);
          return s.promise()
      }
  }),
  ge = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/,
  n.Deferred.exceptionHook = function(t, n) {
      e.console && e.console.warn && t && ge.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
  }
  ,
  n.readyException = function(t) {
      e.setTimeout(function() {
          throw t
      })
  }
  ,
  V = n.Deferred(),
  n.fn.ready = function(e) {
      return V.then(e).catch(function(e) {
          n.readyException(e)
      }),
      this
  }
  ,
  n.extend({
      isReady: !1,
      readyWait: 1,
      ready: function(e) {
          (!0 === e ? --n.readyWait : n.isReady) || (n.isReady = !0,
          !0 !== e && --n.readyWait > 0 || V.resolveWith(i, [n]))
      }
  }),
  n.ready.then = V.then;
  function $() {
      i.removeEventListener("DOMContentLoaded", $),
      e.removeEventListener("load", $),
      n.ready()
  }
  "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(n.ready) : (i.addEventListener("DOMContentLoaded", $),
  e.addEventListener("load", $));
  var g = function(e, t, s, i, a, r, c) {
      var l = 0
        , u = e.length
        , d = s == null;
      if ("object" === x(s)) {
          a = !0;
          for (l in s)
              g(e, t, l, s[l], !0, r, c)
      } else if (void 0 !== i && (a = !0,
      o(i) || (c = !0),
      d && (c ? (t.call(e, i),
      t = null) : (d = t,
      t = function(e, t, s) {
          return d.call(n(e), s)
      }
      )),
      t))
          for (; l < u; l++)
              t(e[l], s, c ? i : i.call(e[l], l, t(e[l], s)));
      return a ? e : d ? t.call(e) : u ? t(e[0], s) : r
  }
    , gt = /^-ms-/
    , vt = /-([a-z])/g;
  function bt(e, t) {
      return t.toUpperCase()
  }
  function f(e) {
      return e.replace(gt, "ms-").replace(vt, bt)
  }
  T = function(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  }
  ;
  function L() {
      this.expando = n.expando + L.uid++
  }
  L.uid = 1,
  L.prototype = {
      cache: function(e) {
          var t = e[this.expando];
          return t || (t = {},
          T(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
              value: t,
              configurable: !0
          }))),
          t
      },
      set: function(e, t, n) {
          var s, o = this.cache(e);
          if ("string" == typeof t)
              o[f(t)] = n;
          else
              for (s in t)
                  o[f(s)] = t[s];
          return o
      },
      get: function(e, t) {
          return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][f(t)]
      },
      access: function(e, t, n) {
          return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
          void 0 !== n ? n : t)
      },
      remove: function(e, t) {
          var o, s = e[this.expando];
          if (void 0 !== s) {
              if (void 0 !== t)
                  for (o = (t = Array.isArray(t) ? t.map(f) : (t = f(t))in s ? [t] : t.match(h) || []).length; o--; )
                      delete s[t[o]];
              (void 0 === t || n.isEmptyObject(s)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
          }
      },
      hasData: function(e) {
          var t = e[this.expando];
          return void 0 !== t && !n.isEmptyObject(t)
      }
  };
  var s = new L
    , r = new L
    , Ft = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
    , xt = /[A-Z]/g;
  function zt(e) {
      return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Ft.test(e) ? JSON.parse(e) : e)
  }
  function He(e, t, n) {
      var s;
      if (void 0 === n && 1 === e.nodeType)
          if (s = "data-" + t.replace(xt, "-$&").toLowerCase(),
          "string" == typeof (n = e.getAttribute(s))) {
              try {
                  n = zt(n)
              } catch {}
              r.set(e, t, n)
          } else
              n = void 0;
      return n
  }
  n.extend({
      hasData: function(e) {
          return r.hasData(e) || s.hasData(e)
      },
      data: function(e, t, n) {
          return r.access(e, t, n)
      },
      removeData: function(e, t) {
          r.remove(e, t)
      },
      _data: function(e, t, n) {
          return s.access(e, t, n)
      },
      _removeData: function(e, t) {
          s.remove(e, t)
      }
  }),
  n.fn.extend({
      data: function(e, t) {
          var o, i, a, n = this[0], c = n && n.attributes;
          if (void 0 === e) {
              if (this.length && (a = r.get(n),
              1 === n.nodeType && !s.get(n, "hasDataAttrs"))) {
                  for (i = c.length; i--; )
                      c[i] && 0 === (o = c[i].name).indexOf("data-") && (o = f(o.slice(5)),
                      He(n, o, a[o]));
                  s.set(n, "hasDataAttrs", !0)
              }
              return a
          }
          return "object" == typeof e ? this.each(function() {
              r.set(this, e)
          }) : g(this, function(t) {
              var s;
              if (n && void 0 === t) {
                  {
                      if (void 0 !== (s = r.get(n, e)))
                          return s;
                      if (void 0 !== (s = He(n, e)))
                          return s
                  }
              } else
                  this.each(function() {
                      r.set(this, e, t)
                  })
          }, null, t, arguments.length > 1, null, !0)
      },
      removeData: function(e) {
          return this.each(function() {
              r.remove(this, e)
          })
      }
  }),
  n.extend({
      queue: function(e, t, o) {
          var i;
          if (e)
              return t = (t || "fx") + "queue",
              i = s.get(e, t),
              o && (!i || Array.isArray(o) ? i = s.access(e, t, n.makeArray(o)) : i.push(o)),
              i || []
      },
      dequeue: function(e, t) {
          t = t || "fx";
          var s = n.queue(e, t)
            , a = s.length
            , o = s.shift()
            , i = n._queueHooks(e, t)
            , r = function() {
              n.dequeue(e, t)
          };
          "inprogress" === o && (o = s.shift(),
          a--),
          o && ("fx" === t && s.unshift("inprogress"),
          delete i.stop,
          o.call(e, r, i)),
          !a && i && i.empty.fire()
      },
      _queueHooks: function(e, t) {
          var o = t + "queueHooks";
          return s.get(e, o) || s.access(e, o, {
              empty: n.Callbacks("once memory").add(function() {
                  s.remove(e, [t + "queue", o])
              })
          })
      }
  }),
  n.fn.extend({
      queue: function(e, t) {
          var s = 2;
          return "string" != typeof e && (t = e,
          e = "fx",
          s--),
          arguments.length < s ? n.queue(this[0], e) : void 0 === t ? this : this.each(function() {
              var s = n.queue(this, e, t);
              n._queueHooks(this, e),
              "fx" === e && "inprogress" !== s[0] && n.dequeue(this, e)
          })
      },
      dequeue: function(e) {
          return this.each(function() {
              n.dequeue(this, e)
          })
      },
      clearQueue: function(e) {
          return this.queue(e || "fx", [])
      },
      promise: function(e, t) {
          var o, a = 1, r = n.Deferred(), i = this, c = this.length, l = function() {
              --a || r.resolveWith(i, [i])
          };
          for ("string" != typeof e && (t = e,
          e = void 0),
          e = e || "fx"; c--; )
              (o = s.get(i[c], e + "queueHooks")) && o.empty && (a++,
              o.empty.add(l));
          return l(),
          r.promise(t)
      }
  });
  var Re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
    , D = new RegExp("^(?:([+-])=|)(" + Re + ")([a-z%]*)$","i")
    , p = ["Top", "Right", "Bottom", "Left"]
    , R = function(e, t) {
      return "none" === (e = t || e).style.display || "" === e.style.display && n.contains(e.ownerDocument, e) && "none" === n.css(e, "display")
  }
    , ke = function(e, t, n, s) {
      var o, i, a = {};
      for (o in t)
          a[o] = e.style[o],
          e.style[o] = t[o];
      i = n.apply(e, s || []);
      for (o in t)
          e.style[o] = a[o];
      return i
  };
  function Ce(e, t, s, o) {
      var c, l, d = 20, u = o ? function() {
          return o.cur()
      }
      : function() {
          return n.css(e, t, "")
      }
      , r = u(), a = s && s[3] || (n.cssNumber[t] ? "" : "px"), i = (n.cssNumber[t] || "px" !== a && +r) && D.exec(n.css(e, t));
      if (i && i[3] !== a) {
          for (r /= 2,
          a = a || i[3],
          i = +r || 1; d--; )
              n.style(e, t, i + a),
              (1 - l) * (1 - (l = u() / r || .5)) <= 0 && (d = 0),
              i /= l;
          i *= 2,
          n.style(e, t, i + a),
          s = s || []
      }
      return s && (i = +i || +r || 0,
      c = s[1] ? i + (s[1] + 1) * s[2] : +s[2],
      o && (o.unit = a,
      o.start = i,
      o.end = c)),
      c
  }
  le = {};
  function Gt(e) {
      var s, i = e.ownerDocument, o = e.nodeName, t = le[o];
      return t || (s = i.body.appendChild(i.createElement(o)),
      t = n.css(s, "display"),
      s.parentNode.removeChild(s),
      "none" === t && (t = "block"),
      le[o] = t,
      t)
  }
  function F(e, t) {
      for (var o, a, i = [], n = 0, r = e.length; n < r; n++)
          (o = e[n]).style && (a = o.style.display,
          t ? ("none" === a && (i[n] = s.get(o, "display") || null,
          i[n] || (o.style.display = "")),
          "" === o.style.display && R(o) && (i[n] = Gt(o))) : "none" !== a && (i[n] = "none",
          s.set(o, "display", a)));
      for (n = 0; n < r; n++)
          null != i[n] && (e[n].style.display = i[n]);
      return e
  }
  n.fn.extend({
      show: function() {
          return F(this, !0)
      },
      hide: function() {
          return F(this)
      },
      toggle: function(e) {
          return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
              R(this) ? n(this).show() : n(this).hide()
          })
      }
  });
  var ye = /^(?:checkbox|radio)$/i
    , ve = /<([a-z][^/\0>\x20\t\r\n\f]+)/i
    , at = /^$|^module$|\/(?:java|ecma)script/i
    , d = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
  };
  d.optgroup = d.option,
  d.tbody = d.tfoot = d.colgroup = d.caption = d.thead,
  d.th = d.td;
  function c(e, t) {
      var s;
      return s = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
      void 0 === t || t && m(e, t) ? n.merge([e], s) : s
  }
  function me(e, t) {
      for (var n = 0, o = e.length; n < o; n++)
          s.set(e[n], "globalEval", !t || s.get(t[n], "globalEval"))
  }
  be = /<|&#?\w+;/;
  function je(e, t, s, o, i) {
      for (var a, r, h, m, p, g, l = t.createDocumentFragment(), f = [], u = 0, v = e.length; u < v; u++)
          if ((a = e[u]) || 0 === a)
              if ("object" === x(a))
                  n.merge(f, a.nodeType ? [a] : a);
              else if (be.test(a)) {
                  for (r = r || l.appendChild(t.createElement("div")),
                  p = (ve.exec(a) || ["", ""])[1].toLowerCase(),
                  h = d[p] || d._default,
                  r.innerHTML = h[1] + n.htmlPrefilter(a) + h[2],
                  m = h[0]; m--; )
                      r = r.lastChild;
                  n.merge(f, r.childNodes),
                  (r = l.firstChild).textContent = ""
              } else
                  f.push(t.createTextNode(a));
      for (l.textContent = "",
      u = 0; a = f[u++]; )
          if (o && n.inArray(a, o) > -1)
              i && i.push(a);
          else if (g = n.contains(a.ownerDocument, a),
          r = c(l.appendChild(a), "script"),
          g && me(r),
          s)
              for (m = 0; a = r[m++]; )
                  at.test(a.type || "") && s.push(a);
      return l
  }
  !function() {
      var e = i.createDocumentFragment().appendChild(i.createElement("div"))
        , t = i.createElement("input");
      t.setAttribute("type", "radio"),
      t.setAttribute("checked", "checked"),
      t.setAttribute("name", "t"),
      e.appendChild(t),
      a.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
      e.innerHTML = "<textarea>x</textarea>",
      a.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
  }();
  var B = i.documentElement
    , Ct = /^key/
    , Qt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
    , Oe = /^([^.]*)(?:\.(.+)|)/;
  function K() {
      return !0
  }
  function S() {
      return !1
  }
  function Ee() {
      try {
          return i.activeElement
      } catch {}
  }
  function ae(e, t, s, o, i, a) {
      var r, c;
      if ("object" == typeof t) {
          "string" != typeof s && (o = o || s,
          s = void 0);
          for (c in t)
              ae(e, c, s, o, t[c], a);
          return e
      }
      if (o == null && i == null ? (i = s,
      o = s = void 0) : i == null && ("string" == typeof s ? (i = o,
      o = void 0) : (i = o,
      o = s,
      s = void 0)),
      !1 === i)
          i = S;
      else if (!i)
          return e;
      return 1 === a && (r = i,
      (i = function(e) {
          return n().off(e),
          r.apply(this, arguments)
      }
      ).guid = r.guid || (r.guid = n.guid++)),
      e.each(function() {
          n.event.add(this, t, i, o, s)
      })
  }
  n.event = {
      global: {},
      add: function(e, t, o, i, a) {
          var r, c, l, d, m, f, p, g, v, b, j, u = s.get(e);
          if (u)
              for (o.handler && (o = (p = o).handler,
              a = p.selector),
              a && n.find.matchesSelector(B, a),
              o.guid || (o.guid = n.guid++),
              (f = u.events) || (f = u.events = {}),
              (m = u.handle) || (m = u.handle = function(t) {
                  return "undefined" != typeof n && n.event.triggered !== t.type ? n.event.dispatch.apply(e, arguments) : void 0
              }
              ),
              g = (t = (t || "").match(h) || [""]).length; g--; )
                  r = j = (b = Oe.exec(t[g]) || [])[1],
                  v = (b[2] || "").split(".").sort(),
                  r && (c = n.event.special[r] || {},
                  r = (a ? c.delegateType : c.bindType) || r,
                  c = n.event.special[r] || {},
                  l = n.extend({
                      type: r,
                      origType: j,
                      data: i,
                      handler: o,
                      guid: o.guid,
                      selector: a,
                      needsContext: a && n.expr.match.needsContext.test(a),
                      namespace: v.join(".")
                  }, p),
                  (d = f[r]) || ((d = f[r] = []).delegateCount = 0,
                  c.setup && !1 !== c.setup.call(e, i, v, m) || e.addEventListener && e.addEventListener(r, m)),
                  c.add && (c.add.call(e, l),
                  l.handler.guid || (l.handler.guid = o.guid)),
                  a ? d.splice(d.delegateCount++, 0, l) : d.push(l),
                  n.event.global[r] = !0)
      },
      remove: function(e, t, o, i, a) {
          var r, c, l, d, u, m, f, p, v, b, j, g = s.hasData(e) && s.get(e);
          if (g && (m = g.events)) {
              for (p = (t = (t || "").match(h) || [""]).length; p--; )
                  if (l = Oe.exec(t[p]) || [],
                  r = j = l[1],
                  v = (l[2] || "").split(".").sort(),
                  r) {
                      for (d = n.event.special[r] || {},
                      u = m[r = (i ? d.delegateType : d.bindType) || r] || [],
                      l = l[2] && new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                      b = f = u.length; f--; )
                          c = u[f],
                          !a && j !== c.origType || o && o.guid !== c.guid || l && !l.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (u.splice(f, 1),
                          c.selector && u.delegateCount--,
                          d.remove && d.remove.call(e, c));
                      b && !u.length && (d.teardown && !1 !== d.teardown.call(e, v, g.handle) || n.removeEvent(e, r, g.handle),
                      delete m[r])
                  } else
                      for (r in m)
                          n.event.remove(e, r + t[p], o, i, !0);
              n.isEmptyObject(m) && s.remove(e, "handle events")
          }
      },
      dispatch: function(e) {
          var o, i, a, l, d, u, t = n.event.fix(e), c = new Array(arguments.length), h = (s.get(this, "events") || {})[t.type] || [], r = n.event.special[t.type] || {};
          for (c[0] = t,
          o = 1; o < arguments.length; o++)
              c[o] = arguments[o];
          if (t.delegateTarget = this,
          !r.preDispatch || !1 !== r.preDispatch.call(this, t)) {
              for (u = n.event.handlers.call(this, t, h),
              o = 0; (a = u[o++]) && !t.isPropagationStopped(); )
                  for (t.currentTarget = a.elem,
                  l = 0; (i = a.handlers[l++]) && !t.isImmediatePropagationStopped(); )
                      t.rnamespace && !t.rnamespace.test(i.namespace) || (t.handleObj = i,
                      t.data = i.data,
                      void 0 !== (d = ((n.event.special[i.origType] || {}).handle || i.handler).apply(a.elem, c)) && !1 === (t.result = d) && (t.preventDefault(),
                      t.stopPropagation()));
              return r.postDispatch && r.postDispatch.call(this, t),
              t.result
          }
      },
      handlers: function(e, t) {
          var o, i, a, r, l, d = [], c = t.delegateCount, s = e.target;
          if (c && s.nodeType && !("click" === e.type && e.button >= 1))
              for (; s !== this; s = s.parentNode || this)
                  if (1 === s.nodeType && ("click" !== e.type || !0 !== s.disabled)) {
                      for (a = [],
                      r = {},
                      i = 0; i < c; i++)
                          void 0 === r[o = (l = t[i]).selector + " "] && (r[o] = l.needsContext ? n(o, this).index(s) > -1 : n.find(o, this, null, [s]).length),
                          r[o] && a.push(l);
                      a.length && d.push({
                          elem: s,
                          handlers: a
                      })
                  }
          return s = this,
          c < t.length && d.push({
              elem: s,
              handlers: t.slice(c)
          }),
          d
      },
      addProp: function(e, t) {
          Object.defineProperty(n.Event.prototype, e, {
              enumerable: !0,
              configurable: !0,
              get: o(t) ? function() {
                  if (this.originalEvent)
                      return t(this.originalEvent)
              }
              : function() {
                  if (this.originalEvent)
                      return this.originalEvent[e]
              }
              ,
              set: function(t) {
                  Object.defineProperty(this, e, {
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                      value: t
                  })
              }
          })
      },
      fix: function(e) {
          return e[n.expando] ? e : new n.Event(e)
      },
      special: {
          load: {
              noBubble: !0
          },
          focus: {
              trigger: function() {
                  if (this !== Ee() && this.focus)
                      return this.focus(),
                      !1
              },
              delegateType: "focusin"
          },
          blur: {
              trigger: function() {
                  if (this === Ee() && this.blur)
                      return this.blur(),
                      !1
              },
              delegateType: "focusout"
          },
          click: {
              trigger: function() {
                  if ("checkbox" === this.type && this.click && m(this, "input"))
                      return this.click(),
                      !1
              },
              _default: function(e) {
                  return m(e.target, "a")
              }
          },
          beforeunload: {
              postDispatch: function(e) {
                  void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
              }
          }
      }
  },
  n.removeEvent = function(e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n)
  }
  ,
  n.Event = function(e, t) {
      if (!(this instanceof n.Event))
          return new n.Event(e,t);
      e && e.type ? (this.originalEvent = e,
      this.type = e.type,
      this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? K : S,
      this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
      this.currentTarget = e.currentTarget,
      this.relatedTarget = e.relatedTarget) : this.type = e,
      t && n.extend(this, t),
      this.timeStamp = e && e.timeStamp || Date.now(),
      this[n.expando] = !0
  }
  ,
  n.Event.prototype = {
      constructor: n.Event,
      isDefaultPrevented: S,
      isPropagationStopped: S,
      isImmediatePropagationStopped: S,
      isSimulated: !1,
      preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = K,
          e && !this.isSimulated && e.preventDefault()
      },
      stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = K,
          e && !this.isSimulated && e.stopPropagation()
      },
      stopImmediatePropagation: function() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = K,
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation()
      }
  },
  n.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      char: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function(e) {
          var t = e.button;
          return null == e.which && Ct.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Qt.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
      }
  }, n.event.addProp),
  n.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
  }, function(e, t) {
      n.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function(e) {
              var o, i = this, s = e.relatedTarget, a = e.handleObj;
              return s && (s === i || n.contains(i, s)) || (e.type = a.origType,
              o = a.handler.apply(this, arguments),
              e.type = t),
              o
          }
      }
  }),
  n.fn.extend({
      on: function(e, t, n, s) {
          return ae(this, e, t, n, s)
      },
      one: function(e, t, n, s) {
          return ae(this, e, t, n, s, 1)
      },
      off: function(e, t, s) {
          var o, i;
          if (e && e.preventDefault && e.handleObj)
              return o = e.handleObj,
              n(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler),
              this;
          if ("object" == typeof e) {
              for (i in e)
                  this.off(i, t, e[i]);
              return this
          }
          return !1 !== t && "function" != typeof t || (s = t,
          t = void 0),
          !1 === s && (s = S),
          this.each(function() {
              n.event.remove(this, e, s, t)
          })
      }
  });
  var Yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
    , ft = /<script|<style|<link/i
    , Wt = /checked\s*(?:[^=]|=\s*.checked.)/i
    , $t = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Te(e, t) {
      return m(e, "table") && m(11 !== t.nodeType ? t : t.firstChild, "tr") ? n(e).children("tbody")[0] || e : e
  }
  function Vt(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
      e
  }
  function It(e) {
      return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
      e
  }
  function Ne(e, t) {
      var o, i, a, c, l, d, u, h;
      if (1 === t.nodeType) {
          if (s.hasData(e) && (c = s.access(e),
          l = s.set(t, c),
          a = c.events)) {
              delete l.handle,
              l.events = {};
              for (i in a)
                  for (o = 0,
                  d = a[i].length; o < d; o++)
                      n.event.add(t, i, a[i][o])
          }
          r.hasData(e) && (u = r.access(e),
          h = n.extend({}, u),
          r.set(t, h))
      }
  }
  function Pt(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && ye.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
  }
  function w(e, t, i, r) {
      t = xe.apply([], t);
      var l, u, h, m, g, v, d = 0, f = e.length, j = f - 1, p = t[0], b = o(p);
      if (b || f > 1 && "string" == typeof p && !a.checkClone && Wt.test(p))
          return e.each(function(n) {
              var s = e.eq(n);
              b && (t[0] = p.call(this, n, s.html())),
              w(s, t, i, r)
          });
      if (f && (u = je(t, e[0].ownerDocument, !1, e, r),
      g = u.firstChild,
      1 === u.childNodes.length && (u = g),
      g || r)) {
          for (m = (h = n.map(c(u, "script"), Vt)).length; d < f; d++)
              l = u,
              d !== j && (l = n.clone(l, !0, !0),
              m && n.merge(h, c(l, "script"))),
              i.call(e[d], l, d);
          if (m)
              for (v = h[h.length - 1].ownerDocument,
              n.map(h, It),
              d = 0; d < m; d++)
                  l = h[d],
                  at.test(l.type || "") && !s.access(l, "globalEval") && n.contains(v, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? n._evalUrl && n._evalUrl(l.src) : Ie(l.textContent.replace($t, ""), v, l))
      }
      return e
  }
  function Pe(e, t, s) {
      for (var o, a = t ? n.filter(t, e) : e, i = 0; null != (o = a[i]); i++)
          s || 1 !== o.nodeType || n.cleanData(c(o)),
          o.parentNode && (s && n.contains(o.ownerDocument, o) && me(c(o, "script")),
          o.parentNode.removeChild(o));
      return e
  }
  n.extend({
      htmlPrefilter: function(e) {
          return e.replace(Yt, "<$1></$2>")
      },
      clone: function(e, t, s) {
          var o, i, r, d, l = e.cloneNode(!0), u = n.contains(e.ownerDocument, e);
          if (!(a.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || n.isXMLDoc(e)))
              for (i = c(l),
              o = 0,
              d = (r = c(e)).length; o < d; o++)
                  Pt(r[o], i[o]);
          if (t)
              if (s)
                  for (r = r || c(e),
                  i = i || c(l),
                  o = 0,
                  d = r.length; o < d; o++)
                      Ne(r[o], i[o]);
              else
                  Ne(e, l);
          return (i = c(l, "script")).length > 0 && me(i, !u && c(e, "script")),
          l
      },
      cleanData: function(e) {
          for (var t, o, i, c = n.event.special, a = 0; void 0 !== (t = e[a]); a++)
              if (T(t)) {
                  if (o = t[s.expando]) {
                      if (o.events)
                          for (i in o.events)
                              c[i] ? n.event.remove(t, i) : n.removeEvent(t, i, o.handle);
                      t[s.expando] = void 0
                  }
                  t[r.expando] && (t[r.expando] = void 0)
              }
      }
  }),
  n.fn.extend({
      detach: function(e) {
          return Pe(this, e, !0)
      },
      remove: function(e) {
          return Pe(this, e)
      },
      text: function(e) {
          return g(this, function(e) {
              return void 0 === e ? n.text(this) : this.empty().each(function() {
                  1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
              })
          }, null, e, arguments.length)
      },
      append: function() {
          return w(this, arguments, function(e) {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Te(this, e).appendChild(e)
          })
      },
      prepend: function() {
          return w(this, arguments, function(e) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  var t = Te(this, e);
                  t.insertBefore(e, t.firstChild)
              }
          })
      },
      before: function() {
          return w(this, arguments, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this)
          })
      },
      after: function() {
          return w(this, arguments, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
          })
      },
      empty: function() {
          for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType && (n.cleanData(c(e, !1)),
              e.textContent = "");
          return this
      },
      clone: function(e, t) {
          return e = e != null && e,
          t = t ?? e,
          this.map(function() {
              return n.clone(this, e, t)
          })
      },
      html: function(e) {
          return g(this, function(e) {
              var t = this[0] || {}
                , s = 0
                , o = this.length;
              if (void 0 === e && 1 === t.nodeType)
                  return t.innerHTML;
              if ("string" == typeof e && !ft.test(e) && !d[(ve.exec(e) || ["", ""])[1].toLowerCase()]) {
                  e = n.htmlPrefilter(e);
                  try {
                      for (; s < o; s++)
                          1 === (t = this[s] || {}).nodeType && (n.cleanData(c(t, !1)),
                          t.innerHTML = e);
                      t = 0
                  } catch {}
              }
              t && this.empty().append(e)
          }, null, e, arguments.length)
      },
      replaceWith: function() {
          var e = [];
          return w(this, arguments, function(t) {
              var s = this.parentNode;
              n.inArray(this, e) < 0 && (n.cleanData(c(this)),
              s && s.replaceChild(t, this))
          }, e)
      }
  }),
  n.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
  }, function(e, t) {
      n.fn[e] = function(e) {
          for (var o, i = [], a = n(e), r = a.length - 1, s = 0; s <= r; s++)
              o = s === r ? this : this.clone(!0),
              n(a[s])[t](o),
              ce.apply(i, o.get());
          return this.pushStack(i)
      }
  });
  var ne = new RegExp("^(" + Re + ")(?!px)[a-z%]+$","i")
    , G = function(t) {
      var n = t.ownerDocument.defaultView;
      return n && n.opener || (n = e),
      n.getComputedStyle(t)
  }
    , kt = new RegExp(p.join("|"),"i");
  !function() {
      function s() {
          if (t) {
              r.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
              t.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
              B.appendChild(r).appendChild(t);
              var n = e.getComputedStyle(t)
                , c = "1%" !== n.top
                , h = 12 === o(n.marginLeft);
              t.style.right = "60%",
              u = 36 === o(n.right),
              l = 36 === o(n.width),
              t.style.position = "absolute",
              d = 36 === t.offsetWidth || "absolute",
              B.removeChild(r),
              t = null
          }
      }
      function o(e) {
          return Math.round(parseFloat(e))
      }
      var c, l, d, u, h, r = i.createElement("div"), t = i.createElement("div");
      t.style && (t.style.backgroundClip = "content-box",
      t.cloneNode(!0).style.backgroundClip = "",
      a.clearCloneStyle = "content-box" === t.style.backgroundClip,
      n.extend(a, {
          boxSizingReliable: function() {
              return s(),
              l
          },
          pixelBoxStyles: function() {
              return s(),
              u
          },
          pixelPosition: function() {
              return s(),
              c
          },
          reliableMarginLeft: function() {
              return s(),
              h
          },
          scrollboxSize: function() {
              return s(),
              d
          }
      }))
  }();
  function N(e, t, s) {
      var i, r, c, l, o = e.style;
      return (s = s || G(e)) && ("" !== (i = s.getPropertyValue(t) || s[t]) || n.contains(e.ownerDocument, e) || (i = n.style(e, t)),
      !a.pixelBoxStyles() && ne.test(i) && kt.test(t) && (r = o.width,
      c = o.minWidth,
      l = o.maxWidth,
      o.minWidth = o.maxWidth = o.width = i,
      i = s.width,
      o.width = r,
      o.minWidth = c,
      o.maxWidth = l)),
      void 0 !== i ? i + "" : i
  }
  function $e(e, t) {
      return {
          get: function() {
              if (!e())
                  return (this.get = t).apply(this, arguments);
              delete this.get
          }
      }
  }
  var wt = /^(none|table(?!-c[ea]).+)/
    , Ue = /^--/
    , _t = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
  }
    , qe = {
      letterSpacing: "0",
      fontWeight: "400"
  }
    , Ye = ["Webkit", "Moz", "ms"]
    , Ge = i.createElement("div").style;
  function yt(e) {
      if (e in Ge)
          return e;
      for (var n = e[0].toUpperCase() + e.slice(1), t = Ye.length; t--; )
          if ((e = Ye[t] + n)in Ge)
              return e
  }
  function Qe(e) {
      var t = n.cssProps[e];
      return t || (t = n.cssProps[e] = yt(e) || e),
      t
  }
  function Ze(e, t, n) {
      var s = D.exec(t);
      return s ? Math.max(0, s[2] - (n || 0)) + (s[3] || "px") : t
  }
  function J(e, t, s, o, i, a) {
      var r = "width" === t ? 1 : 0
        , l = 0
        , c = 0;
      if (s === (o ? "border" : "content"))
          return 0;
      for (; r < 4; r += 2)
          "margin" === s && (c += n.css(e, s + p[r], !0, i)),
          o ? ("content" === s && (c -= n.css(e, "padding" + p[r], !0, i)),
          "margin" !== s && (c -= n.css(e, "border" + p[r] + "Width", !0, i))) : (c += n.css(e, "padding" + p[r], !0, i),
          "padding" !== s ? c += n.css(e, "border" + p[r] + "Width", !0, i) : l += n.css(e, "border" + p[r] + "Width", !0, i));
      return !o && a >= 0 && (c += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - c - l - .5))),
      c
  }
  function et(e, t, s) {
      var i = G(e)
        , o = N(e, t, i)
        , c = "border-box" === n.css(e, "boxSizing", !1, i)
        , r = c;
      if (ne.test(o)) {
          if (!s)
              return o;
          o = "auto"
      }
      return r = r && (a.boxSizingReliable() || o === e.style[t]),
      ("auto" === o || !parseFloat(o) && "inline" === n.css(e, "display", !1, i)) && (o = e["offset" + t[0].toUpperCase() + t.slice(1)],
      r = !0),
      (o = parseFloat(o) || 0) + J(e, t, s || (c ? "border" : "content"), r, i, o) + "px"
  }
  n.extend({
      cssHooks: {
          opacity: {
              get: function(e, t) {
                  if (t) {
                      var n = N(e, "opacity");
                      return "" === n ? "1" : n
                  }
              }
          }
      },
      cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
      },
      cssProps: {},
      style: function(e, t, s, o) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var i, r, l, d = f(t), u = Ue.test(t), c = e.style;
              if (u || (t = Qe(d)),
              r = n.cssHooks[t] || n.cssHooks[d],
              void 0 === s)
                  return r && "get"in r && void 0 !== (i = r.get(e, !1, o)) ? i : c[t];
              "string" == (l = typeof s) && (i = D.exec(s)) && i[1] && (s = Ce(e, t, i),
              l = "number"),
              s != null && s === s && ("number" === l && (s += i && i[3] || (n.cssNumber[d] ? "" : "px")),
              a.clearCloneStyle || "" !== s || 0 !== t.indexOf("background") || (c[t] = "inherit"),
              r && "set"in r && void 0 === (s = r.set(e, s, o)) || (u ? c.setProperty(t, s) : c[t] = s))
          }
      },
      css: function(e, t, s, o) {
          var i, a, r, c = f(t);
          return Ue.test(t) || (t = Qe(c)),
          (r = n.cssHooks[t] || n.cssHooks[c]) && "get"in r && (i = r.get(e, !0, s)),
          void 0 === i && (i = N(e, t, o)),
          "normal" === i && t in qe && (i = qe[t]),
          "" === s || s ? (a = parseFloat(i),
          !0 === s || isFinite(a) ? a || 0 : i) : i
      }
  }),
  n.each(["height", "width"], function(e, t) {
      n.cssHooks[t] = {
          get: function(e, s, o) {
              if (s)
                  return !wt.test(n.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, o) : ke(e, _t, function() {
                      return et(e, t, o)
                  })
          },
          set: function(e, s, o) {
              var c, i = G(e), l = "border-box" === n.css(e, "boxSizing", !1, i), r = o && J(e, t, o, l, i);
              return l && a.scrollboxSize() === i.position && (r -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - J(e, t, "border", !1, i) - .5)),
              r && (c = D.exec(s)) && "px" !== (c[3] || "px") && (e.style[t] = s,
              s = n.css(e, t)),
              Ze(e, s, r)
          }
      }
  }),
  n.cssHooks.marginLeft = $e(a.reliableMarginLeft, function(e, t) {
      if (t)
          return (parseFloat(N(e, "marginLeft")) || e.getBoundingClientRect().left - ke(e, {
              marginLeft: 0
          }, function() {
              return e.getBoundingClientRect().left
          })) + "px"
  }),
  n.each({
      margin: "",
      padding: "",
      border: "Width"
  }, function(e, t) {
      n.cssHooks[e + t] = {
          expand: function(n) {
              for (var s = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; s < 4; s++)
                  i[e + p[s] + t] = o[s] || o[s - 2] || o[0];
              return i
          }
      },
      "margin" !== e && (n.cssHooks[e + t].set = Ze)
  }),
  n.fn.extend({
      css: function(e, t) {
          return g(this, function(e, t, s) {
              var i, a, r = {}, o = 0;
              if (Array.isArray(t)) {
                  for (i = G(e),
                  a = t.length; o < a; o++)
                      r[t[o]] = n.css(e, t[o], !1, i);
                  return r
              }
              return void 0 !== s ? n.style(e, t, s) : n.css(e, t)
          }, e, t, arguments.length > 1)
      }
  });
  function l(e, t, n, s, o) {
      return new l.prototype.init(e,t,n,s,o)
  }
  n.Tween = l,
  l.prototype = {
      constructor: l,
      init: function(e, t, s, o, i, a) {
          this.elem = e,
          this.prop = s,
          this.easing = i || n.easing._default,
          this.options = t,
          this.start = this.now = this.cur(),
          this.end = o,
          this.unit = a || (n.cssNumber[s] ? "" : "px")
      },
      cur: function() {
          var e = l.propHooks[this.prop];
          return e && e.get ? e.get(this) : l.propHooks._default.get(this)
      },
      run: function(e) {
          var t, s = l.propHooks[this.prop];
          return this.options.duration ? this.pos = t = n.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
          this.now = (this.end - this.start) * t + this.start,
          this.options.step && this.options.step.call(this.elem, this.now, this),
          s && s.set ? s.set(this) : l.propHooks._default.set(this),
          this
      }
  },
  l.prototype.init.prototype = l.prototype,
  l.propHooks = {
      _default: {
          get: function(e) {
              var t;
              return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = n.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
          },
          set: function(e) {
              n.fx.step[e.prop] ? n.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[n.cssProps[e.prop]] && !n.cssHooks[e.prop] ? e.elem[e.prop] = e.now : n.style(e.elem, e.prop, e.now + e.unit)
          }
      }
  },
  l.propHooks.scrollTop = l.propHooks.scrollLeft = {
      set: function(e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
  },
  n.easing = {
      linear: function(e) {
          return e
      },
      swing: function(e) {
          return .5 - Math.cos(e * Math.PI) / 2
      },
      _default: "swing"
  },
  n.fx = l.prototype.init,
  n.fx.step = {},
  ot = /^(?:toggle|show|hide)$/,
  it = /queueHooks$/;
  function he() {
      U && (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(he) : e.setTimeout(he, n.fx.interval),
      n.fx.tick())
  }
  function rt() {
      return e.setTimeout(function() {
          O = void 0
      }),
      O = Date.now()
  }
  function W(e, t) {
      var o, s = 0, n = {
          height: e
      };
      for (t = t ? 1 : 0; s < 4; s += 2 - t)
          n["margin" + (o = p[s])] = n["padding" + o] = e;
      return t && (n.opacity = n.width = e),
      n
  }
  function lt(e, t, n) {
      for (var o, i = (u.tweeners[t] || []).concat(u.tweeners["*"]), s = 0, a = i.length; s < a; s++)
          if (o = i[s].call(n, t, e))
              return o
  }
  function Tt(e, t, o) {
      var i, r, l, d, u, p, g, v, b = "width"in t || "height"in t, m = this, f = {}, c = e.style, h = e.nodeType && R(e), a = s.get(e, "fxshow");
      o.queue || (null == (d = n._queueHooks(e, "fx")).unqueued && (d.unqueued = 0,
      v = d.empty.fire,
      d.empty.fire = function() {
          d.unqueued || v()
      }
      ),
      d.unqueued++,
      m.always(function() {
          m.always(function() {
              d.unqueued--,
              n.queue(e, "fx").length || d.empty.fire()
          })
      }));
      for (i in t)
          if (p = t[i],
          ot.test(p)) {
              if (delete t[i],
              g = g || "toggle" === p,
              p === (h ? "hide" : "show")) {
                  if ("show" !== p || !a || void 0 === a[i])
                      continue;
                  h = !0
              }
              f[i] = a && a[i] || n.style(e, i)
          }
      if ((l = !n.isEmptyObject(t)) || !n.isEmptyObject(f)) {
          b && 1 === e.nodeType && (o.overflow = [c.overflow, c.overflowX, c.overflowY],
          null == (r = a && a.display) && (r = s.get(e, "display")),
          "none" === (u = n.css(e, "display")) && (r ? u = r : (F([e], !0),
          r = e.style.display || r,
          u = n.css(e, "display"),
          F([e]))),
          ("inline" === u || "inline-block" === u && r != null) && "none" === n.css(e, "float") && (l || (m.done(function() {
              c.display = r
          }),
          r == null && (u = c.display,
          r = "none" === u ? "" : u)),
          c.display = "inline-block")),
          o.overflow && (c.overflow = "hidden",
          m.always(function() {
              c.overflow = o.overflow[0],
              c.overflowX = o.overflow[1],
              c.overflowY = o.overflow[2]
          })),
          l = !1;
          for (i in f)
              l || (a ? "hidden"in a && (h = a.hidden) : a = s.access(e, "fxshow", {
                  display: r
              }),
              g && (a.hidden = !h),
              h && F([e], !0),
              m.done(function() {
                  h || F([e]),
                  s.remove(e, "fxshow");
                  for (i in f)
                      n.style(e, i, f[i])
              })),
              l = lt(h ? a[i] : 0, i, m),
              i in a || (a[i] = l.start,
              h && (l.end = l.start,
              l.start = 0))
      }
  }
  function Mt(e, t) {
      var s, o, i, a, r;
      for (s in e)
          if (i = f(s),
          a = t[i],
          o = e[s],
          Array.isArray(o) && (a = o[1],
          o = e[s] = o[0]),
          s !== i && (e[i] = o,
          delete e[s]),
          (r = n.cssHooks[i]) && "expand"in r) {
              o = r.expand(o),
              delete e[i];
              for (s in o)
                  s in e || (e[s] = o[s],
                  t[s] = a)
          } else
              t[i] = a
  }
  function u(e, t, s) {
      var r, c, l = 0, m = u.prefilters.length, a = n.Deferred().always(function() {
          delete h.elem
      }), h = function() {
          if (c)
              return !1;
          for (var r = O || rt(), t = Math.max(0, i.startTime + i.duration - r), n = 1 - (t / i.duration || 0), s = 0, o = i.tweens.length; s < o; s++)
              i.tweens[s].run(n);
          return a.notifyWith(e, [i, n, t]),
          n < 1 && o ? t : (o || a.notifyWith(e, [i, 1, 0]),
          a.resolveWith(e, [i]),
          !1)
      }, i = a.promise({
          elem: e,
          props: n.extend({}, t),
          opts: n.extend(!0, {
              specialEasing: {},
              easing: n.easing._default
          }, s),
          originalProperties: t,
          originalOptions: s,
          startTime: O || rt(),
          duration: s.duration,
          tweens: [],
          createTween: function(t, s) {
              var o = n.Tween(e, i.opts, t, s, i.opts.specialEasing[t] || i.opts.easing);
              return i.tweens.push(o),
              o
          },
          stop: function(t) {
              var n = 0
                , s = t ? i.tweens.length : 0;
              if (c)
                  return this;
              for (c = !0; n < s; n++)
                  i.tweens[n].run(1);
              return t ? (a.notifyWith(e, [i, 1, 0]),
              a.resolveWith(e, [i, t])) : a.rejectWith(e, [i, t]),
              this
          }
      }), d = i.props;
      for (Mt(d, i.opts.specialEasing); l < m; l++)
          if (r = u.prefilters[l].call(i, e, d, i.opts))
              return o(r.stop) && (n._queueHooks(i.elem, i.opts.queue).stop = r.stop.bind(r)),
              r;
      return n.map(d, lt, i),
      o(i.opts.start) && i.opts.start.call(e, i),
      i.progress(i.opts.progress).done(i.opts.done, i.opts.complete).fail(i.opts.fail).always(i.opts.always),
      n.fx.timer(n.extend(h, {
          elem: e,
          anim: i,
          queue: i.opts.queue
      })),
      i
  }
  n.Animation = n.extend(u, {
      tweeners: {
          "*": [function(e, t) {
              var n = this.createTween(e, t);
              return Ce(n.elem, e, D.exec(t), n),
              n
          }
          ]
      },
      tweener: function(e, t) {
          o(e) ? (t = e,
          e = ["*"]) : e = e.match(h);
          for (var n, s = 0, i = e.length; s < i; s++)
              n = e[s],
              u.tweeners[n] = u.tweeners[n] || [],
              u.tweeners[n].unshift(t)
      },
      prefilters: [Tt],
      prefilter: function(e, t) {
          t ? u.prefilters.unshift(e) : u.prefilters.push(e)
      }
  }),
  n.speed = function(e, t, s) {
      var i = e && "object" == typeof e ? n.extend({}, e) : {
          complete: s || !s && t || o(e) && e,
          duration: e,
          easing: s && t || t && !o(t) && t
      };
      return n.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in n.fx.speeds ? i.duration = n.fx.speeds[i.duration] : i.duration = n.fx.speeds._default),
      null != i.queue && !0 !== i.queue || (i.queue = "fx"),
      i.old = i.complete,
      i.complete = function() {
          o(i.old) && i.old.call(this),
          i.queue && n.dequeue(this, i.queue)
      }
      ,
      i
  }
  ,
  n.fn.extend({
      fadeTo: function(e, t, n, s) {
          return this.filter(R).css("opacity", 0).show().end().animate({
              opacity: t
          }, e, n, s)
      },
      animate: function(e, t, o, i) {
          var c = n.isEmptyObject(e)
            , r = n.speed(t, o, i)
            , a = function() {
              var t = u(this, n.extend({}, e), r);
              (c || s.get(this, "finish")) && t.stop(!0)
          };
          return a.finish = a,
          c || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
      },
      stop: function(e, t, o) {
          var i = function(e) {
              var t = e.stop;
              delete e.stop,
              t(o)
          };
          return "string" != typeof e && (o = t,
          t = e,
          e = void 0),
          t && !1 !== e && this.queue(e || "fx", []),
          this.each(function() {
              var c = !0
                , t = e != null && e + "queueHooks"
                , r = n.timers
                , a = s.get(this);
              if (t)
                  a[t] && a[t].stop && i(a[t]);
              else
                  for (t in a)
                      a[t] && a[t].stop && it.test(t) && i(a[t]);
              for (t = r.length; t--; )
                  r[t].elem !== this || e != null && r[t].queue !== e || (r[t].anim.stop(o),
                  c = !1,
                  r.splice(t, 1));
              !c && o || n.dequeue(this, e)
          })
      },
      finish: function(e) {
          return !1 !== e && (e = e || "fx"),
          this.each(function() {
              var t, a = s.get(this), o = a[e + "queue"], r = a[e + "queueHooks"], i = n.timers, c = o ? o.length : 0;
              for (a.finish = !0,
              n.queue(this, e, []),
              r && r.stop && r.stop.call(this, !0),
              t = i.length; t--; )
                  i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0),
                  i.splice(t, 1));
              for (t = 0; t < c; t++)
                  o[t] && o[t].finish && o[t].finish.call(this);
              delete a.finish
          })
      }
  }),
  n.each(["toggle", "show", "hide"], function(e, t) {
      var s = n.fn[t];
      n.fn[t] = function(e, n, o) {
          return e == null || "boolean" == typeof e ? s.apply(this, arguments) : this.animate(W(t, !0), e, n, o)
      }
  }),
  n.each({
      slideDown: W("show"),
      slideUp: W("hide"),
      slideToggle: W("toggle"),
      fadeIn: {
          opacity: "show"
      },
      fadeOut: {
          opacity: "hide"
      },
      fadeToggle: {
          opacity: "toggle"
      }
  }, function(e, t) {
      n.fn[e] = function(e, n, s) {
          return this.animate(t, e, n, s)
      }
  }),
  n.timers = [],
  n.fx.tick = function() {
      var s, e = 0, t = n.timers;
      for (O = Date.now(); e < t.length; e++)
          (s = t[e])() || t[e] !== s || t.splice(e--, 1);
      t.length || n.fx.stop(),
      O = void 0
  }
  ,
  n.fx.timer = function(e) {
      n.timers.push(e),
      n.fx.start()
  }
  ,
  n.fx.interval = 13,
  n.fx.start = function() {
      U || (U = !0,
      he())
  }
  ,
  n.fx.stop = function() {
      U = null
  }
  ,
  n.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
  },
  n.fn.delay = function(t, s) {
      return t = n.fx ? n.fx.speeds[t] || t : t,
      s = s || "fx",
      this.queue(s, function(n, s) {
          var o = e.setTimeout(n, t);
          s.stop = function() {
              e.clearTimeout(o)
          }
      })
  }
  ,
  function() {
      var e = i.createElement("input")
        , t = i.createElement("select").appendChild(i.createElement("option"));
      e.type = "checkbox",
      a.checkOn = "" !== e.value,
      a.optSelected = t.selected,
      (e = i.createElement("input")).value = "t",
      e.type = "radio",
      a.radioValue = "t" === e.value
  }(),
  M = n.expr.attrHandle,
  n.fn.extend({
      attr: function(e, t) {
          return g(this, n.attr, e, t, arguments.length > 1)
      },
      removeAttr: function(e) {
          return this.each(function() {
              n.removeAttr(this, e)
          })
      }
  }),
  n.extend({
      attr: function(e, t, s) {
          var o, i, a = e.nodeType;
          if (3 !== a && 8 !== a && 2 !== a)
              return "undefined" == typeof e.getAttribute ? n.prop(e, t, s) : (1 === a && n.isXMLDoc(e) || (o = n.attrHooks[t.toLowerCase()] || (n.expr.match.bool.test(t) ? ut : void 0)),
              void 0 !== s ? null === s ? void n.removeAttr(e, t) : o && "set"in o && void 0 !== (i = o.set(e, s, t)) ? i : (e.setAttribute(t, s + ""),
              s) : o && "get"in o && null !== (i = o.get(e, t)) ? i : null == (i = n.find.attr(e, t)) ? void 0 : i)
      },
      attrHooks: {
          type: {
              set: function(e, t) {
                  if (!a.radioValue && "radio" === t && m(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t),
                      n && (e.value = n),
                      t
                  }
              }
          }
      },
      removeAttr: function(e, t) {
          var n, o = 0, s = t && t.match(h);
          if (s && 1 === e.nodeType)
              for (; n = s[o++]; )
                  e.removeAttribute(n)
      }
  }),
  ut = {
      set: function(e, t, s) {
          return !1 === t ? n.removeAttr(e, s) : e.setAttribute(s, s),
          s
      }
  },
  n.each(n.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var s = M[t] || n.find.attr;
      M[t] = function(e, t, n) {
          var i, a, o = t.toLowerCase();
          return n || (a = M[o],
          M[o] = i,
          i = null != s(e, t, n) ? o : null,
          M[o] = a),
          i
      }
  }),
  ct = /^(?:input|select|textarea|button)$/i,
  st = /^(?:a|area)$/i,
  n.fn.extend({
      prop: function(e, t) {
          return g(this, n.prop, e, t, arguments.length > 1)
      },
      removeProp: function(e) {
          return this.each(function() {
              delete this[n.propFix[e] || e]
          })
      }
  }),
  n.extend({
      prop: function(e, t, s) {
          var o, i, a = e.nodeType;
          if (3 !== a && 8 !== a && 2 !== a)
              return 1 === a && n.isXMLDoc(e) || (t = n.propFix[t] || t,
              o = n.propHooks[t]),
              void 0 !== s ? o && "set"in o && void 0 !== (i = o.set(e, s, t)) ? i : e[t] = s : o && "get"in o && null !== (i = o.get(e, t)) ? i : e[t]
      },
      propHooks: {
          tabIndex: {
              get: function(e) {
                  var t = n.find.attr(e, "tabindex");
                  return t ? parseInt(t, 10) : ct.test(e.nodeName) || st.test(e.nodeName) && e.href ? 0 : -1
              }
          }
      },
      propFix: {
          for: "htmlFor",
          class: "className"
      }
  }),
  a.optSelected || (n.propHooks.selected = {
      get: function(e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex,
          null
      },
      set: function(e) {
          var t = e.parentNode;
          t && (t.selectedIndex,
          t.parentNode && t.parentNode.selectedIndex)
      }
  }),
  n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      n.propFix[this.toLowerCase()] = this
  });
  function j(e) {
      return (e.match(h) || []).join(" ")
  }
  function b(e) {
      return e.getAttribute && e.getAttribute("class") || ""
  }
  function re(e) {
      return Array.isArray(e) ? e : "string" == typeof e ? e.match(h) || [] : []
  }
  n.fn.extend({
      addClass: function(e) {
          var t, s, i, a, r, c, l, d = 0;
          if (o(e))
              return this.each(function(t) {
                  n(this).addClass(e.call(this, t, b(this)))
              });
          if ((r = re(e)).length)
              for (; t = this[d++]; )
                  if (i = b(t),
                  s = 1 === t.nodeType && " " + j(i) + " ") {
                      for (c = 0; a = r[c++]; )
                          s.indexOf(" " + a + " ") < 0 && (s += a + " ");
                      i !== (l = j(s)) && t.setAttribute("class", l)
                  }
          return this
      },
      removeClass: function(e) {
          var t, s, i, a, r, c, l, d = 0;
          if (o(e))
              return this.each(function(t) {
                  n(this).removeClass(e.call(this, t, b(this)))
              });
          if (!arguments.length)
              return this.attr("class", "");
          if ((r = re(e)).length)
              for (; s = this[d++]; )
                  if (i = b(s),
                  t = 1 === s.nodeType && " " + j(i) + " ") {
                      for (c = 0; a = r[c++]; )
                          for (; t.indexOf(" " + a + " ") > -1; )
                              t = t.replace(" " + a + " ", " ");
                      i !== (l = j(t)) && s.setAttribute("class", l)
                  }
          return this
      },
      toggleClass: function(e, t) {
          var i = typeof e
            , a = "string" === i || Array.isArray(e);
          return "boolean" == typeof t && a ? t ? this.addClass(e) : this.removeClass(e) : o(e) ? this.each(function(s) {
              n(this).toggleClass(e.call(this, s, b(this), t), t)
          }) : this.each(function() {
              if (a) {
                  r = 0,
                  o = n(this),
                  c = re(e);
                  for (var t, o, r, c; t = c[r++]; )
                      o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
              } else
                  void 0 !== e && "boolean" !== i || ((t = b(this)) && s.set(this, "__className__", t),
                  this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : s.get(this, "__className__") || ""))
          })
      },
      hasClass: function(e) {
          for (var t, s = 0, n = " " + e + " "; t = this[s++]; )
              if (1 === t.nodeType && (" " + j(b(t)) + " ").indexOf(n) > -1)
                  return !0;
          return !1
      }
  }),
  Xe = /\r/g,
  n.fn.extend({
      val: function(e) {
          var t, s, a, i = this[0];
          {
              if (arguments.length)
                  return a = o(e),
                  this.each(function(s) {
                      var o;
                      1 === this.nodeType && (null == (o = a ? e.call(this, s, n(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = n.map(o, function(e) {
                          return e == null ? "" : e + ""
                      })),
                      (t = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                  });
              if (i)
                  return (t = n.valHooks[i.type] || n.valHooks[i.nodeName.toLowerCase()]) && "get"in t && void 0 !== (s = t.get(i, "value")) ? s : "string" == typeof (s = i.value) ? s.replace(Xe, "") : s ?? ""
          }
      }
  }),
  n.extend({
      valHooks: {
          option: {
              get: function(e) {
                  var t = n.find.attr(e, "value");
                  return t ?? j(n.text(e))
              }
          },
          select: {
              get: function(e) {
                  var t, s, a, r = e.options, o = e.selectedIndex, i = "select-one" === e.type, c = i ? null : [], l = i ? o + 1 : r.length;
                  for (s = o < 0 ? l : i ? o : 0; s < l; s++)
                      if (((t = r[s]).selected || s === o) && !t.disabled && (!t.parentNode.disabled || !m(t.parentNode, "optgroup"))) {
                          if (a = n(t).val(),
                          i)
                              return a;
                          c.push(a)
                      }
                  return c
              },
              set: function(e, t) {
                  for (var s, o, i = e.options, a = n.makeArray(t), r = i.length; r--; )
                      ((o = i[r]).selected = n.inArray(n.valHooks.option.get(o), a) > -1) && (s = !0);
                  return s || (e.selectedIndex = -1),
                  a
              }
          }
      }
  }),
  n.each(["radio", "checkbox"], function() {
      n.valHooks[this] = {
          set: function(e, t) {
              if (Array.isArray(t))
                  return e.checked = n.inArray(n(e).val(), t) > -1
          }
      },
      a.checkOn || (n.valHooks[this].get = function(e) {
          return null === e.getAttribute("value") ? "on" : e.value
      }
      )
  }),
  a.focusin = "onfocusin"in e,
  Z = /^(?:focusinfocus|focusoutblur)$/,
  oe = function(e) {
      e.stopPropagation()
  }
  ,
  n.extend(n.event, {
      trigger: function(t, a, r, c) {
          var d, u, h, m, f, p, b, j, g = [r || i], l = P.call(t, "type") ? t.type : t, v = P.call(t, "namespace") ? t.namespace.split(".") : [];
          if (d = p = u = r = r || i,
          3 !== r.nodeType && 8 !== r.nodeType && !Z.test(l + n.event.triggered) && (l.indexOf(".") > -1 && (l = (v = l.split(".")).shift(),
          v.sort()),
          m = l.indexOf(":") < 0 && "on" + l,
          t = t[n.expando] ? t : new n.Event(l,"object" == typeof t && t),
          t.isTrigger = c ? 2 : 3,
          t.namespace = v.join("."),
          t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
          t.result = void 0,
          t.target || (t.target = r),
          a = a == null ? [t] : n.makeArray(a, [t]),
          h = n.event.special[l] || {},
          c || !h.trigger || !1 !== h.trigger.apply(r, a))) {
              if (!c && !h.noBubble && !k(r)) {
                  for (j = h.delegateType || l,
                  Z.test(j + l) || (d = d.parentNode); d; d = d.parentNode)
                      g.push(d),
                      u = d;
                  u === (r.ownerDocument || i) && g.push(u.defaultView || u.parentWindow || e)
              }
              for (b = 0; (d = g[b++]) && !t.isPropagationStopped(); )
                  p = d,
                  t.type = b > 1 ? j : h.bindType || l,
                  (f = (s.get(d, "events") || {})[t.type] && s.get(d, "handle")) && f.apply(d, a),
                  (f = m && d[m]) && f.apply && T(d) && (t.result = f.apply(d, a),
                  !1 === t.result && t.preventDefault());
              return t.type = l,
              c || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(g.pop(), a) || !T(r) || m && o(r[l]) && !k(r) && ((u = r[m]) && (r[m] = null),
              n.event.triggered = l,
              t.isPropagationStopped() && p.addEventListener(l, oe),
              r[l](),
              t.isPropagationStopped() && p.removeEventListener(l, oe),
              n.event.triggered = void 0,
              u && (r[m] = u)),
              t.result
          }
      },
      simulate: function(e, t, s) {
          var o = n.extend(new n.Event, s, {
              type: e,
              isSimulated: !0
          });
          n.event.trigger(o, null, t)
      }
  }),
  n.fn.extend({
      trigger: function(e, t) {
          return this.each(function() {
              n.event.trigger(e, t, this)
          })
      },
      triggerHandler: function(e, t) {
          var s = this[0];
          if (s)
              return n.event.trigger(e, t, s, !0)
      }
  }),
  a.focusin || n.each({
      focus: "focusin",
      blur: "focusout"
  }, function(e, t) {
      var o = function(e) {
          n.event.simulate(t, e.target, n.event.fix(e))
      };
      n.event.special[t] = {
          setup: function() {
              var n = this.ownerDocument || this
                , i = s.access(n, t);
              i || n.addEventListener(e, o, !0),
              s.access(n, t, (i || 0) + 1)
          },
          teardown: function() {
              var n = this.ownerDocument || this
                , i = s.access(n, t) - 1;
              i ? s.access(n, t, i) : (n.removeEventListener(e, o, !0),
              s.remove(n, t))
          }
      }
  });
  var z = e.location
    , Ve = Date.now()
    , de = /\?/;
  n.parseXML = function(t) {
      var s;
      if (!t || "string" != typeof t)
          return null;
      try {
          s = (new e.DOMParser).parseFromString(t, "text/xml")
      } catch {
          s = void 0
      }
      return s && !s.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + t),
      s
  }
  ;
  var Et = /\[\]$/
    , Be = /\r?\n/g
    , At = /^(?:submit|button|image|reset|file)$/i
    , St = /^(?:input|select|textarea|keygen)/i;
  function fe(e, t, s, o) {
      var i;
      if (Array.isArray(t))
          n.each(t, function(t, n) {
              s || Et.test(e) ? o(e, n) : fe(e + "[" + ("object" == typeof n && n != null ? t : "") + "]", n, s, o)
          });
      else if (s || "object" !== x(t))
          o(e, t);
      else
          for (i in t)
              fe(e + "[" + i + "]", t[i], s, o)
  }
  n.param = function(e, t) {
      var s, i = [], a = function(e, t) {
          var n = o(t) ? t() : t;
          i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(n ?? "")
      };
      if (Array.isArray(e) || e.jquery && !n.isPlainObject(e))
          n.each(e, function() {
              a(this.name, this.value)
          });
      else
          for (s in e)
              fe(s, e[s], t, a);
      return i.join("&")
  }
  ,
  n.fn.extend({
      serialize: function() {
          return n.param(this.serializeArray())
      },
      serializeArray: function() {
          return this.map(function() {
              var e = n.prop(this, "elements");
              return e ? n.makeArray(e) : this
          }).filter(function() {
              var e = this.type;
              return this.name && !n(this).is(":disabled") && St.test(this.nodeName) && !At.test(e) && (this.checked || !ye.test(e))
          }).map(function(e, t) {
              var s = n(this).val();
              return s == null ? null : Array.isArray(s) ? n.map(s, function(e) {
                  return {
                      name: t.name,
                      value: e.replace(Be, `
`)
                  }
              }) : {
                  name: t.name,
                  value: s.replace(Be, `
`)
              }
          }).get()
      }
  });
  var jt = /%20/g
    , qt = /#.*$/
    , mt = /([?&])_=[^&]*/
    , Dt = /^(.*?):[ \t]*([^\r\n]*)$/gm
    , Nt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
    , Lt = /^(?:GET|HEAD)$/
    , Rt = /^\/\//
    , Le = {}
    , se = {}
    , De = "*/".concat("*")
    , te = i.createElement("a");
  te.href = z.href;
  function ze(e) {
      return function(t, n) {
          "string" != typeof t && (n = t,
          t = "*");
          var s, i = 0, a = t.toLowerCase().match(h) || [];
          if (o(n))
              for (; s = a[i++]; )
                  "+" === s[0] ? (s = s.slice(1) || "*",
                  (e[s] = e[s] || []).unshift(n)) : (e[s] = e[s] || []).push(n)
      }
  }
  function Fe(e, t, s, o) {
      var i = {}
        , r = e === se;
      function a(c) {
          var l;
          return i[c] = !0,
          n.each(e[c] || [], function(e, n) {
              var c = n(t, s, o);
              return "string" != typeof c || r || i[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c),
              a(c),
              !1)
          }),
          l
      }
      return a(t.dataTypes[0]) || !i["*"] && a("*")
  }
  function ie(e, t) {
      var s, o, i = n.ajaxSettings.flatOptions || {};
      for (s in t)
          void 0 !== t[s] && ((i[s] ? e : o || (o = {}))[s] = t[s]);
      return o && n.extend(!0, e, o),
      e
  }
  function Ut(e, t, n) {
      for (var o, i, a, r, c = e.contents, s = e.dataTypes; "*" === s[0]; )
          s.shift(),
          void 0 === a && (a = e.mimeType || t.getResponseHeader("Content-Type"));
      if (a)
          for (o in c)
              if (c[o] && c[o].test(a)) {
                  s.unshift(o);
                  break
              }
      if (s[0]in n)
          i = s[0];
      else {
          for (o in n) {
              if (!s[0] || e.converters[o + " " + s[0]]) {
                  i = o;
                  break
              }
              r || (r = o)
          }
          i = i || r
      }
      if (i)
          return i !== s[0] && s.unshift(i),
          n[i]
  }
  function Kt(e, t, n, s) {
      var o, i, a, c, l, r = {}, d = e.dataTypes.slice();
      if (d[1])
          for (i in e.converters)
              r[i.toLowerCase()] = e.converters[i];
      for (o = d.shift(); o; )
          if (e.responseFields[o] && (n[e.responseFields[o]] = t),
          !a && s && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
          a = o,
          o = d.shift())
              if ("*" === o)
                  o = a;
              else if ("*" !== a && a !== o) {
                  if (!(i = r[a + " " + o] || r["* " + o]))
                      for (l in r)
                          if ((c = l.split(" "))[1] === o && (i = r[a + " " + c[0]] || r["* " + c[0]])) {
                              !0 === i ? i = r[l] : !0 !== r[l] && (o = c[0],
                              d.unshift(c[1]));
                              break
                          }
                  if (!0 !== i)
                      if (i && e.throws)
                          t = i(t);
                      else
                          try {
                              t = i(t)
                          } catch (e) {
                              return {
                                  state: "parsererror",
                                  error: i ? e : "No conversion from " + a + " to " + o
                              }
                          }
              }
      return {
          state: "success",
          data: t
      }
  }
  return n.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
          url: z.href,
          type: "GET",
          isLocal: Nt.test(z.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
              "*": De,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
          },
          contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/
          },
          responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
          },
          converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": n.parseXML
          },
          flatOptions: {
              url: !0,
              context: !0
          }
      },
      ajaxSetup: function(e, t) {
          return t ? ie(ie(e, n.ajaxSettings), t) : ie(n.ajaxSettings, e)
      },
      ajaxPrefilter: ze(Le),
      ajaxTransport: ze(se),
      ajax: function(t, s) {
          "object" == typeof t && (s = t,
          t = void 0),
          s = s || {};
          var r, c, d, u, f, p, g, b, j, w, o = n.ajaxSetup({}, s), l = o.context || o, y = o.context && (l.nodeType || l.jquery) ? n(l) : n.event, _ = n.Deferred(), O = n.Callbacks("once memory"), m = o.statusCode || {}, E = {}, C = {}, x = "canceled", a = {
              readyState: 0,
              getResponseHeader: function(e) {
                  if (c) {
                      if (!p) {
                          p = {};
                          for (var t; t = Dt.exec(b); )
                              p[t[1].toLowerCase()] = t[2]
                      }
                      t = p[e.toLowerCase()]
                  }
                  return t ?? null
              },
              getAllResponseHeaders: function() {
                  return c ? b : null
              },
              setRequestHeader: function(e, t) {
                  return c == null && (e = C[e.toLowerCase()] = C[e.toLowerCase()] || e,
                  E[e] = t),
                  this
              },
              overrideMimeType: function(e) {
                  return c == null && (o.mimeType = e),
                  this
              },
              statusCode: function(e) {
                  var t;
                  if (e)
                      if (c)
                          a.always(e[a.status]);
                      else
                          for (t in e)
                              m[t] = [m[t], e[t]];
                  return this
              },
              abort: function(e) {
                  var t = e || x;
                  return u && u.abort(t),
                  v(0, t),
                  this
              }
          };
          if (_.promise(a),
          o.url = ((t || o.url || z.href) + "").replace(Rt, z.protocol + "//"),
          o.type = s.method || s.type || o.method || o.type,
          o.dataTypes = (o.dataType || "*").toLowerCase().match(h) || [""],
          null == o.crossDomain) {
              d = i.createElement("a");
              try {
                  d.href = o.url,
                  d.href = d.href,
                  o.crossDomain = te.protocol + "//" + te.host != d.protocol + "//" + d.host
              } catch {
                  o.crossDomain = !0
              }
          }
          if (o.data && o.processData && "string" != typeof o.data && (o.data = n.param(o.data, o.traditional)),
          Fe(Le, o, s, a),
          c)
              return a;
          (g = n.event && o.global) && 0 == n.active++ && n.event.trigger("ajaxStart"),
          o.type = o.type.toUpperCase(),
          o.hasContent = !Lt.test(o.type),
          r = o.url.replace(qt, ""),
          o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(jt, "+")) : (f = o.url.slice(r.length),
          o.data && (o.processData || "string" == typeof o.data) && (r += (de.test(r) ? "&" : "?") + o.data,
          delete o.data),
          !1 === o.cache && (r = r.replace(mt, "$1"),
          f = (de.test(r) ? "&" : "?") + "_=" + Ve++ + f),
          o.url = r + f),
          o.ifModified && (n.lastModified[r] && a.setRequestHeader("If-Modified-Since", n.lastModified[r]),
          n.etag[r] && a.setRequestHeader("If-None-Match", n.etag[r])),
          (o.data && o.hasContent && !1 !== o.contentType || s.contentType) && a.setRequestHeader("Content-Type", o.contentType),
          a.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + De + "; q=0.01" : "") : o.accepts["*"]);
          for (w in o.headers)
              a.setRequestHeader(w, o.headers[w]);
          if (o.beforeSend && (!1 === o.beforeSend.call(l, a, o) || c))
              return a.abort();
          if (x = "abort",
          O.add(o.complete),
          a.done(o.success),
          a.fail(o.error),
          u = Fe(se, o, s, a)) {
              if (a.readyState = 1,
              g && y.trigger("ajaxSend", [a, o]),
              c)
                  return a;
              o.async && o.timeout > 0 && (j = e.setTimeout(function() {
                  a.abort("timeout")
              }, o.timeout));
              try {
                  c = !1,
                  u.send(E, v)
              } catch (e) {
                  if (c)
                      throw e;
                  v(-1, e)
              }
          } else
              v(-1, "No Transport");
          function v(t, s, i, d) {
              var f, p, v, w, x, h = s;
              c || (c = !0,
              j && e.clearTimeout(j),
              u = void 0,
              b = d || "",
              a.readyState = t > 0 ? 4 : 0,
              f = t >= 200 && t < 300 || 304 === t,
              i && (p = Ut(o, a, i)),
              p = Kt(o, p, a, f),
              f ? (o.ifModified && ((w = a.getResponseHeader("Last-Modified")) && (n.lastModified[r] = w),
              (w = a.getResponseHeader("etag")) && (n.etag[r] = w)),
              204 === t || "HEAD" === o.type ? h = "nocontent" : 304 === t ? h = "notmodified" : (h = p.state,
              x = p.data,
              f = !(v = p.error))) : (v = h,
              !t && h || (h = "error",
              t < 0 && (t = 0))),
              a.status = t,
              a.statusText = (s || h) + "",
              f ? _.resolveWith(l, [x, h, a]) : _.rejectWith(l, [a, h, v]),
              a.statusCode(m),
              m = void 0,
              g && y.trigger(f ? "ajaxSuccess" : "ajaxError", [a, o, f ? x : v]),
              O.fireWith(l, [a, h]),
              g && (y.trigger("ajaxComplete", [a, o]),
              --n.active || n.event.trigger("ajaxStop")))
          }
          return a
      },
      getJSON: function(e, t, s) {
          return n.get(e, t, s, "json")
      },
      getScript: function(e, t) {
          return n.get(e, void 0, t, "script")
      }
  }),
  n.each(["get", "post"], function(e, t) {
      n[t] = function(e, s, i, a) {
          return o(s) && (a = a || i,
          i = s,
          s = void 0),
          n.ajax(n.extend({
              url: e,
              type: t,
              dataType: a,
              data: s,
              success: i
          }, n.isPlainObject(e) && e))
      }
  }),
  n._evalUrl = function(e) {
      return n.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          throws: !0
      })
  }
  ,
  n.fn.extend({
      wrapAll: function(e) {
          var t;
          return this[0] && (o(e) && (e = e.call(this[0])),
          t = n(e, this[0].ownerDocument).eq(0).clone(!0),
          this[0].parentNode && t.insertBefore(this[0]),
          t.map(function() {
              for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
              return e
          }).append(this)),
          this
      },
      wrapInner: function(e) {
          return o(e) ? this.each(function(t) {
              n(this).wrapInner(e.call(this, t))
          }) : this.each(function() {
              var t = n(this)
                , s = t.contents();
              s.length ? s.wrapAll(e) : t.append(e)
          })
      },
      wrap: function(e) {
          var t = o(e);
          return this.each(function(s) {
              n(this).wrapAll(t ? e.call(this, s) : e)
          })
      },
      unwrap: function(e) {
          return this.parent(e).not("body").each(function() {
              n(this).replaceWith(this.childNodes)
          }),
          this
      }
  }),
  n.expr.pseudos.hidden = function(e) {
      return !n.expr.pseudos.visible(e)
  }
  ,
  n.expr.pseudos.visible = function(e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
  }
  ,
  n.ajaxSettings.xhr = function() {
      try {
          return new e.XMLHttpRequest
      } catch {}
  }
  ,
  Se = {
      0: 200,
      1223: 204
  },
  A = n.ajaxSettings.xhr(),
  a.cors = !!A && "withCredentials"in A,
  a.ajax = A = !!A,
  n.ajaxTransport(function(t) {
      var n, s;
      if (a.cors || A && !t.crossDomain)
          return {
              send: function(o, i) {
                  var r, a = t.xhr();
                  if (a.open(t.type, t.url, t.async, t.username, t.password),
                  t.xhrFields)
                      for (r in t.xhrFields)
                          a[r] = t.xhrFields[r];
                  t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
                  t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                  for (r in o)
                      a.setRequestHeader(r, o[r]);
                  n = function(e) {
                      return function() {
                          n && (n = s = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null,
                          "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? i(0, "error") : i(a.status, a.statusText) : i(Se[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                              binary: a.response
                          } : {
                              text: a.responseText
                          }, a.getAllResponseHeaders()))
                      }
                  }
                  ,
                  a.onload = n(),
                  s = a.onerror = a.ontimeout = n("error"),
                  void 0 !== a.onabort ? a.onabort = s : a.onreadystatechange = function() {
                      4 === a.readyState && e.setTimeout(function() {
                          n && s()
                      })
                  }
                  ,
                  n = n("abort");
                  try {
                      a.send(t.hasContent && t.data || null)
                  } catch (e) {
                      if (n)
                          throw e
                  }
              },
              abort: function() {
                  n && n()
              }
          }
  }),
  n.ajaxPrefilter(function(e) {
      e.crossDomain && (e.contents.script = !1)
  }),
  n.ajaxSetup({
      accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
          script: /\b(?:java|ecma)script\b/
      },
      converters: {
          "text script": function(e) {
              return n.globalEval(e),
              e
          }
      }
  }),
  n.ajaxPrefilter("script", function(e) {
      void 0 === e.cache && (e.cache = !1),
      e.crossDomain && (e.type = "GET")
  }),
  n.ajaxTransport("script", function(e) {
      if (e.crossDomain) {
          var t, s;
          return {
              send: function(o, a) {
                  s = n("<script>").prop({
                      charset: e.scriptCharset,
                      src: e.url
                  }).on("load error", t = function(e) {
                      s.remove(),
                      t = null,
                      e && a("error" === e.type ? 404 : 200, e.type)
                  }
                  ),
                  i.head.appendChild(s[0])
              },
              abort: function() {
                  t && t()
              }
          }
      }
  }),
  ue = [],
  I = /(=)\?(?=&|$)|\?\?/,
  n.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
          var e = ue.pop() || n.expando + "_" + Ve++;
          return this[e] = !0,
          e
      }
  }),
  n.ajaxPrefilter("json jsonp", function(t, s, i) {
      var a, r, c, l = !1 !== t.jsonp && (I.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && I.test(t.data) && "data");
      if (l || "jsonp" === t.dataTypes[0])
          return a = t.jsonpCallback = o(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
          l ? t[l] = t[l].replace(I, "$1" + a) : !1 !== t.jsonp && (t.url += (de.test(t.url) ? "&" : "?") + t.jsonp + "=" + a),
          t.converters["script json"] = function() {
              return c || n.error(a + " was not called"),
              c[0]
          }
          ,
          t.dataTypes[0] = "json",
          r = e[a],
          e[a] = function() {
              c = arguments
          }
          ,
          i.always(function() {
              void 0 === r ? n(e).removeProp(a) : e[a] = r,
              t[a] && (t.jsonpCallback = s.jsonpCallback,
              ue.push(a)),
              c && o(r) && r(c[0]),
              c = r = void 0
          }),
          "script"
  }),
  a.createHTMLDocument = function() {
      var e = i.implementation.createHTMLDocument("").body;
      return e.innerHTML = "<form></form><form></form>",
      2 === e.childNodes.length
  }(),
  n.parseHTML = function(e, t, s) {
      if ("string" != typeof e)
          return [];
      "boolean" == typeof t && (s = t,
      t = !1);
      var o, r, c;
      return t || (a.createHTMLDocument ? ((c = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href,
      t.head.appendChild(c)) : t = i),
      o = ee.exec(e),
      r = !s && [],
      o ? [t.createElement(o[1])] : (o = je([e], t, r),
      r && r.length && n(r).remove(),
      n.merge([], o.childNodes))
  }
  ,
  n.fn.load = function(e, t, s) {
      var i, c, l, a = this, r = e.indexOf(" ");
      return r > -1 && (i = j(e.slice(r)),
      e = e.slice(0, r)),
      o(t) ? (s = t,
      t = void 0) : t && "object" == typeof t && (c = "POST"),
      a.length > 0 && n.ajax({
          url: e,
          type: c || "GET",
          dataType: "html",
          data: t
      }).done(function(e) {
          l = arguments,
          a.html(i ? n("<div>").append(n.parseHTML(e)).find(i) : e)
      }).always(s && function(e, t) {
          a.each(function() {
              s.apply(this, l || [e.responseText, t, e])
          })
      }
      ),
      this
  }
  ,
  n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
      n.fn[t] = function(e) {
          return this.on(t, e)
      }
  }),
  n.expr.pseudos.animated = function(e) {
      return n.grep(n.timers, function(t) {
          return e === t.elem
      }).length
  }
  ,
  n.offset = {
      setOffset: function(e, t, s) {
          var i, r, c, l, d, m, f, u = n.css(e, "position"), h = n(e), a = {};
          "static" === u && (e.style.position = "relative"),
          i = h.offset(),
          c = n.css(e, "top"),
          d = n.css(e, "left"),
          (f = ("absolute" === u || "fixed" === u) && (c + d).indexOf("auto") > -1) ? (l = (m = h.position()).top,
          r = m.left) : (l = parseFloat(c) || 0,
          r = parseFloat(d) || 0),
          o(t) && (t = t.call(e, s, n.extend({}, i))),
          null != t.top && (a.top = t.top - i.top + l),
          null != t.left && (a.left = t.left - i.left + r),
          "using"in t ? t.using.call(e, a) : h.css(a)
      }
  },
  n.fn.extend({
      offset: function(e) {
          if (arguments.length)
              return void 0 === e ? this : this.each(function(t) {
                  n.offset.setOffset(this, e, t)
              });
          var s, o, t = this[0];
          if (t)
              return t.getClientRects().length ? (s = t.getBoundingClientRect(),
              o = t.ownerDocument.defaultView,
              {
                  top: s.top + o.pageYOffset,
                  left: s.left + o.pageXOffset
              }) : {
                  top: 0,
                  left: 0
              }
      },
      position: function() {
          if (this[0]) {
              var e, s, o, t = this[0], i = {
                  top: 0,
                  left: 0
              };
              if ("fixed" === n.css(t, "position"))
                  s = t.getBoundingClientRect();
              else {
                  for (s = this.offset(),
                  o = t.ownerDocument,
                  e = t.offsetParent || o.documentElement; e && (e === o.body || e === o.documentElement) && "static" === n.css(e, "position"); )
                      e = e.parentNode;
                  e && e !== t && 1 === e.nodeType && ((i = n(e).offset()).top += n.css(e, "borderTopWidth", !0),
                  i.left += n.css(e, "borderLeftWidth", !0))
              }
              return {
                  top: s.top - i.top - n.css(t, "marginTop", !0),
                  left: s.left - i.left - n.css(t, "marginLeft", !0)
              }
          }
      },
      offsetParent: function() {
          return this.map(function() {
              for (var e = this.offsetParent; e && "static" === n.css(e, "position"); )
                  e = e.offsetParent;
              return e || B
          })
      }
  }),
  n.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
  }, function(e, t) {
      var s = "pageYOffset" === t;
      n.fn[e] = function(n) {
          return g(this, function(e, n, o) {
              var i;
              if (k(e) ? i = e : 9 === e.nodeType && (i = e.defaultView),
              void 0 === o)
                  return i ? i[t] : e[n];
              i ? i.scrollTo(s ? i.pageXOffset : o, s ? o : i.pageYOffset) : e[n] = o
          }, e, n, arguments.length)
      }
  }),
  n.each(["top", "left"], function(e, t) {
      n.cssHooks[t] = $e(a.pixelPosition, function(e, s) {
          if (s)
              return s = N(e, t),
              ne.test(s) ? n(e).position()[t] + "px" : s
      })
  }),
  n.each({
      Height: "height",
      Width: "width"
  }, function(e, t) {
      n.each({
          padding: "inner" + e,
          content: t,
          "": "outer" + e
      }, function(s, o) {
          n.fn[o] = function(i, a) {
              var r = arguments.length && (s || "boolean" != typeof i)
                , c = s || (!0 === i || !0 === a ? "margin" : "border");
              return g(this, function(t, s, i) {
                  var a;
                  return k(t) ? 0 === o.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement,
                  Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === i ? n.css(t, s, c) : n.style(t, s, i, c)
              }, t, r ? i : void 0, r)
          }
      })
  }),
  n.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
      n.fn[t] = function(e, n) {
          return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
      }
  }),
  n.fn.extend({
      hover: function(e, t) {
          return this.mouseenter(e).mouseleave(t || e)
      }
  }),
  n.fn.extend({
      bind: function(e, t, n) {
          return this.on(e, null, t, n)
      },
      unbind: function(e, t) {
          return this.off(e, null, t)
      },
      delegate: function(e, t, n, s) {
          return this.on(t, e, n, s)
      },
      undelegate: function(e, t, n) {
          return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
      }
  }),
  n.proxy = function(e, t) {
      var s, i, a;
      if ("string" == typeof t && (i = e[t],
      t = e,
      e = i),
      o(e))
          return a = _.call(arguments, 2),
          s = function() {
              return e.apply(t || this, a.concat(_.call(arguments)))
          }
          ,
          s.guid = e.guid = e.guid || n.guid++,
          s
  }
  ,
  n.holdReady = function(e) {
      e ? n.readyWait++ : n.ready(!0)
  }
  ,
  n.isArray = Array.isArray,
  n.parseJSON = JSON.parse,
  n.nodeName = m,
  n.isFunction = o,
  n.isWindow = k,
  n.camelCase = f,
  n.type = x,
  n.now = Date.now,
  n.isNumeric = function(e) {
      var t = n.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
  }
  ,
  "function" == typeof define && define.amd && define("jquery", [], function() {
      return n
  }),
  we = e.jQuery,
  _e = e.$,
  n.noConflict = function(t) {
      return e.$ === n && (e.$ = _e),
      t && e.jQuery === n && (e.jQuery = we),
      n
  }
  ,
  t || (e.jQuery = e.$ = n),
  n
}),
function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
}(this, function() {
  "use strict";
  function K(e) {
      return e && "[object Function]" === {}.toString.call(e)
  }
  function s(e, t) {
      if (1 !== e.nodeType)
          return [];
      var n = getComputedStyle(e, null);
      return t ? n[t] : n
  }
  function p(e) {
      return "HTML" === e.nodeName ? e : e.parentNode || e.host
  }
  function c(e) {
      if (!e)
          return document.body;
      switch (e.nodeName) {
      case "HTML":
      case "BODY":
          return e.ownerDocument.body;
      case "#document":
          return e.body
      }
      var t = s(e)
        , n = t.overflow
        , o = t.overflowX
        , i = t.overflowY;
      return /(auto|scroll|overlay)/.test(n + i + o) ? e : c(p(e))
  }
  function o(e) {
      return 11 === e ? H : 10 === e ? A : H || A
  }
  function i(e) {
      if (!e)
          return document.documentElement;
      for (var n, a = o(10) ? document.body : null, t = e.offsetParent; t === a && e.nextElementSibling; )
          t = (e = e.nextElementSibling).offsetParent;
      return n = t && t.nodeName,
      n && "BODY" !== n && "HTML" !== n ? -1 !== ["TD", "TABLE"].indexOf(t.nodeName) && "static" === s(t, "position") ? i(t) : t : e ? e.ownerDocument.documentElement : document.documentElement
  }
  function fe(e) {
      var t = e.nodeName;
      return "BODY" !== t && ("HTML" === t || i(e.firstElementChild) === e)
  }
  function _(e) {
      return null === e.parentNode ? e : _(e.parentNode)
  }
  function m(e, t) {
      if (!e || !e.nodeType || !t || !t.nodeType)
          return document.documentElement;
      var n, o, a = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, r = a ? e : t, c = a ? t : e, s = document.createRange();
      return s.setStart(r, 0),
      s.setEnd(c, 0),
      n = s.commonAncestorContainer,
      e !== n && t !== n || r.contains(c) ? fe(n) ? n : i(n) : (o = _(e),
      o.host ? m(o.host, t) : m(e, _(t).host))
  }
  function r(e) {
      var s, o, i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top", t = "top" === i ? "scrollTop" : "scrollLeft", n = e.nodeName;
      return "BODY" === n || "HTML" === n ? (s = e.ownerDocument.documentElement,
      o = e.ownerDocument.scrollingElement || s,
      o[t]) : e[t]
  }
  function me(e, t) {
      var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
        , s = r(t, "top")
        , o = r(t, "left")
        , n = i ? -1 : 1;
      return e.top += s * n,
      e.bottom += s * n,
      e.left += o * n,
      e.right += o * n,
      e
  }
  function M(e, t) {
      var n = "x" === t ? "Left" : "Top"
        , s = "Left" == n ? "Right" : "Bottom";
      return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + s + "Width"], 10)
  }
  function L(e, n, s, i) {
      return t(n["offset" + e], n["scroll" + e], s["client" + e], s["offset" + e], s["scroll" + e], o(10) ? s["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
  }
  function R() {
      var t = document.body
        , e = document.documentElement
        , n = o(10) && getComputedStyle(e);
      return {
          height: L("Height", t, e, n),
          width: L("Width", t, e, n)
      }
  }
  function n(t) {
      return e({}, t, {
          right: t.left + t.width,
          bottom: t.top + t.height
      })
  }
  function b(e) {
      t = {};
      try {
          o(10) ? (t = e.getBoundingClientRect(),
          a = r(e, "top"),
          c = r(e, "left"),
          t.top += a,
          t.left += c,
          t.bottom += a,
          t.right += c) : t = e.getBoundingClientRect()
      } catch {}
      var t, a, c, u, i = {
          left: t.left,
          top: t.top,
          width: t.right - t.left,
          height: t.bottom - t.top
      }, h = "HTML" === e.nodeName ? R() : {}, m = h.width || e.clientWidth || i.right - i.left, f = h.height || e.clientHeight || i.bottom - i.top, l = e.offsetWidth - m, d = e.offsetHeight - f;
      return (l || d) && (u = s(e),
      l -= M(u, "x"),
      d -= M(u, "y"),
      i.width -= l,
      i.height -= d),
      n(i)
  }
  function g(e, i) {
      var a, u, h, g = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], v = o(10), j = "HTML" === i.nodeName, l = b(e), r = b(i), m = c(e), d = s(i), f = parseFloat(d.borderTopWidth, 10), p = parseFloat(d.borderLeftWidth, 10);
      return g && "HTML" === i.nodeName && (r.top = t(r.top, 0),
      r.left = t(r.left, 0)),
      a = n({
          top: l.top - r.top - f,
          left: l.left - r.left - p,
          width: l.width,
          height: l.height
      }),
      (a.marginTop = 0,
      a.marginLeft = 0,
      !v && j) && (u = parseFloat(d.marginTop, 10),
      h = parseFloat(d.marginLeft, 10),
      a.top -= f - u,
      a.bottom -= f - u,
      a.left -= p - h,
      a.right -= p - h,
      a.marginTop = u,
      a.marginLeft = h),
      (v && !g ? i.contains(m) : i === m && "BODY" !== m.nodeName) && (a = me(a, i)),
      a
  }
  function ne(e) {
      var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
        , s = e.ownerDocument.documentElement
        , o = g(e, s)
        , a = t(s.clientWidth, window.innerWidth || 0)
        , c = t(s.clientHeight, window.innerHeight || 0)
        , l = i ? 0 : r(s)
        , d = i ? 0 : r(s, "left")
        , u = {
          top: l - o.top + o.marginTop,
          left: d - o.left + o.marginLeft,
          width: a,
          height: c
      };
      return n(u)
  }
  function k(e) {
      var t = e.nodeName;
      return "BODY" !== t && "HTML" !== t && ("fixed" === s(e, "position") || k(p(e)))
  }
  function q(e) {
      if (!e || !e.parentElement || o())
          return document.documentElement;
      for (var t = e.parentElement; t && "none" === s(t, "transform"); )
          t = t.parentElement;
      return t || document.documentElement
  }
  function y(e, t, n, s) {
      var i, a, r = 4 < arguments.length && void 0 !== arguments[4] && arguments[4], o = {
          top: 0,
          left: 0
      }, l = r ? q(e) : m(e, t);
      if ("viewport" === s)
          o = ne(l, r);
      else if ("scrollParent" === s ? (a = c(p(t)),
      "BODY" === a.nodeName && (a = e.ownerDocument.documentElement)) : "window" === s ? a = e.ownerDocument.documentElement : a = s,
      i = g(a, l, r),
      "HTML" === a.nodeName && !k(l)) {
          var d = R()
            , u = d.height
            , h = d.width;
          o.top += i.top - i.marginTop,
          o.bottom = u + i.top,
          o.left += i.left - i.marginLeft,
          o.right = h + i.left
      } else
          o = i;
      return o.left += n,
      o.top += n,
      o.right -= n,
      o.bottom -= n,
      o
  }
  function Q(e) {
      var t = e.width
        , n = e.height;
      return t * n
  }
  function Y(t, n, s, o, i) {
      if (c = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0,
      -1 === t.indexOf("auto"))
          return t;
      var c, a = y(s, o, c, i), r = {
          top: {
              width: a.width,
              height: n.top - a.top
          },
          right: {
              width: a.right - n.right,
              height: a.height
          },
          bottom: {
              width: a.width,
              height: a.bottom - n.bottom
          },
          left: {
              width: n.left - a.left,
              height: a.height
          }
      }, l = Object.keys(r).map(function(t) {
          return e({
              key: t
          }, r[t], {
              area: Q(r[t])
          })
      }).sort(function(e, t) {
          return t.area - e.area
      }), d = l.filter(function(e) {
          var t = e.width
            , n = e.height;
          return t >= s.clientWidth && n >= s.clientHeight
      }), h = 0 < d.length ? d[0].key : l[0].key, u = t.split("-")[1];
      return h + (u ? "-" + u : "")
  }
  function B(e, t, n) {
      var s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null
        , o = s ? q(t) : m(t, n);
      return g(n, o, s)
  }
  function I(e) {
      var t = getComputedStyle(e)
        , n = parseFloat(t.marginTop) + parseFloat(t.marginBottom)
        , s = parseFloat(t.marginLeft) + parseFloat(t.marginRight)
        , o = {
          width: e.offsetWidth + s,
          height: e.offsetHeight + n
      };
      return o
  }
  function h(e) {
      var t = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
      };
      return e.replace(/left|right|bottom|top/g, function(e) {
          return t[e]
      })
  }
  function T(e, t, n) {
      n = n.split("-")[0];
      var s = I(e)
        , a = {
          width: s.width,
          height: s.height
      }
        , o = -1 !== ["right", "left"].indexOf(n)
        , r = o ? "top" : "left"
        , i = o ? "left" : "top"
        , c = o ? "height" : "width"
        , l = o ? "width" : "height";
      return a[r] = t[r] + t[c] / 2 - s[c] / 2,
      a[i] = n === i ? t[i] - s[l] : t[h(i)],
      a
  }
  function l(e, t) {
      return Array.prototype.find ? e.find(t) : e.filter(t)[0]
  }
  function X(e, t, n) {
      if (Array.prototype.findIndex)
          return e.findIndex(function(e) {
              return e[t] === n
          });
      var s = l(e, function(e) {
          return e[t] === n
      });
      return e.indexOf(s)
  }
  function S(e, t, s) {
      var o = void 0 === s ? e : e.slice(0, X(e, "name", s));
      return o.forEach(function(e) {
          e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
          var s = e.function || e.fn;
          e.enabled && K(s) && (t.offsets.popper = n(t.offsets.popper),
          t.offsets.reference = n(t.offsets.reference),
          t = s(t, e))
      }),
      t
  }
  function he() {
      if (!this.state.isDestroyed) {
          var e = {
              instance: this,
              styles: {},
              arrowStyles: {},
              attributes: {},
              flipped: !1,
              offsets: {}
          };
          e.offsets.reference = B(this.state, this.popper, this.reference, this.options.positionFixed),
          e.placement = Y(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
          e.originalPlacement = e.placement,
          e.positionFixed = this.options.positionFixed,
          e.offsets.popper = T(this.popper, e.offsets.reference, e.placement),
          e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute",
          e = S(this.modifiers, e),
          this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
          this.options.onCreate(e))
      }
  }
  function F(e, t) {
      return e.some(function(e) {
          var n = e.name
            , s = e.enabled;
          return s && n === t
      })
  }
  function E(e) {
      for (var n, s, o = [!1, "ms", "Webkit", "Moz", "O"], i = e.charAt(0).toUpperCase() + e.slice(1), t = 0; t < o.length; t++)
          if (n = o[t],
          s = n ? "" + n + i : e,
          "undefined" != typeof document.body.style[s])
              return s;
      return null
  }
  function ue() {
      return this.state.isDestroyed = !0,
      F(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
      this.popper.style.position = "",
      this.popper.style.top = "",
      this.popper.style.left = "",
      this.popper.style.right = "",
      this.popper.style.bottom = "",
      this.popper.style.willChange = "",
      this.popper.style[E("transform")] = ""),
      this.disableEventListeners(),
      this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
      this
  }
  function D(e) {
      var t = e.ownerDocument;
      return t ? t.defaultView : window
  }
  function N(e, t, n, s) {
      var i = "BODY" === e.nodeName
        , o = i ? e.ownerDocument.defaultView : e;
      o.addEventListener(t, n, {
          passive: !0
      }),
      i || N(c(o.parentNode), t, n, s),
      s.push(o)
  }
  function de(e, t, n, s) {
      n.updateBound = s,
      D(e).addEventListener("resize", n.updateBound, {
          passive: !0
      });
      var o = c(e);
      return N(o, "scroll", n.updateBound, n.scrollParents),
      n.scrollElement = o,
      n.eventsEnabled = !0,
      n
  }
  function le() {
      this.state.eventsEnabled || (this.state = de(this.reference, this.options, this.state, this.scheduleUpdate))
  }
  function ae(e, t) {
      return D(e).removeEventListener("resize", t.updateBound),
      t.scrollParents.forEach(function(e) {
          e.removeEventListener("scroll", t.updateBound)
      }),
      t.updateBound = null,
      t.scrollParents = [],
      t.scrollElement = null,
      t.eventsEnabled = !1,
      t
  }
  function ie() {
      this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
      this.state = ae(this.reference, this.state))
  }
  function x(e) {
      return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
  }
  function O(e, t) {
      Object.keys(t).forEach(function(n) {
          var s = "";
          -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && x(t[n]) && (s = "px"),
          e.style[n] = t[n] + s
      })
  }
  function te(e, t) {
      Object.keys(t).forEach(function(n) {
          var s = t[n];
          !1 === s ? e.removeAttribute(n) : e.setAttribute(n, t[n])
      })
  }
  function $(e, t, n) {
      var s, o = l(e, function(e) {
          var n = e.name;
          return n === t
      }), i = !!o && e.some(function(e) {
          return e.name === n && e.enabled && e.order < o.order
      });
      return i || (s = "`" + t + "`",
      console.warn("`" + n + "` modifier is required by " + s + " modifier in order to work, be sure to include it before " + s + "!")),
      i
  }
  function ee(e) {
      return "end" === e ? "start" : "start" === e ? "end" : e
  }
  function U(e) {
      var s = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
        , t = j.indexOf(e)
        , n = j.slice(t + 1).concat(j.slice(0, t));
      return s ? n.reverse() : n
  }
  function J(e, s, o, i) {
      var c, d, u, l = e.match(/((?:-|\+)?\d*\.?\d*)(.*)/), r = +l[1], a = l[2];
      if (!r)
          return e;
      if (0 === a.indexOf("%")) {
          switch (a) {
          case "%p":
              c = o;
              break;
          case "%":
          case "%r":
          default:
              c = i
          }
          return d = n(c),
          d[s] / 100 * r
      }
      return "vh" === a || "vw" === a ? (u = "vh" === a ? t(document.documentElement.clientHeight, window.innerHeight || 0) : t(document.documentElement.clientWidth, window.innerWidth || 0),
      u / 100 * r) : r
  }
  function Z(e, t, n, s) {
      var a, r, c = [0, 0], d = -1 !== ["right", "left"].indexOf(s), o = e.split(/(\+|-)/).map(function(e) {
          return e.trim()
      }), i = o.indexOf(l(o, function(e) {
          return -1 !== e.search(/,|\s/)
      }));
      return o[i] && -1 === o[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead."),
      r = /\s*,\s*|\s+/,
      a = -1 === i ? [o] : [o.slice(0, i).concat([o[i].split(r)[0]]), [o[i].split(r)[1]].concat(o.slice(i + 1))],
      a = a.map(function(e, s) {
          var i = (1 === s ? !d : d) ? "height" : "width"
            , o = !1;
          return e.reduce(function(e, t) {
              return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t,
              o = !0,
              e) : o ? (e[e.length - 1] += t,
              o = !1,
              e) : e.concat(t)
          }, []).map(function(e) {
              return J(e, i, t, n)
          })
      }),
      a.forEach(function(e, t) {
          e.forEach(function(n, s) {
              x(n) && (c[t] += n * ("-" === e[s - 1] ? -1 : 1))
          })
      }),
      c
  }
  function G(e, t) {
      var s, i = t.offset, r = e.placement, a = e.offsets, n = a.popper, c = a.reference, o = r.split("-")[0];
      return s = x(+i) ? [+i, 0] : Z(i, n, c, o),
      "left" === o ? (n.top += s[0],
      n.left -= s[1]) : "right" === o ? (n.top += s[0],
      n.left += s[1]) : "top" === o ? (n.left += s[0],
      n.top -= s[1]) : "bottom" === o && (n.left += s[0],
      n.top += s[1]),
      e.popper = n,
      e
  }
  for (var P = Math.min, w = Math.round, f = Math.floor, t = Math.max, u = "undefined" != typeof window && "undefined" != typeof document, W = ["Edge", "Trident", "Firefox"], V = 0, v = 0; v < W.length; v += 1)
      if (u && 0 <= navigator.userAgent.indexOf(W[v])) {
          V = 1;
          break
      }
  var se = u && window.Promise
    , oe = se ? function(e) {
      var t = !1;
      return function() {
          t || (t = !0,
          window.Promise.resolve().then(function() {
              t = !1,
              e()
          }))
      }
  }
  : function(e) {
      var t = !1;
      return function() {
          t || (t = !0,
          setTimeout(function() {
              t = !1,
              e()
          }, V))
      }
  }
    , H = u && !!(window.MSInputMethodContext && document.documentMode)
    , A = u && /MSIE 10/.test(navigator.userAgent)
    , re = function(e, t) {
      if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function")
  }
    , ce = function() {
      function e(e, t) {
          for (var n, s = 0; s < t.length; s++)
              n = t[s],
              n.enumerable = n.enumerable || !1,
              n.configurable = !0,
              "value"in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
      }
      return function(t, n, s) {
          return n && e(t.prototype, n),
          s && e(t, s),
          t
      }
  }()
    , a = function(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
      }) : e[t] = n,
      e
  }
    , e = Object.assign || function(e) {
      for (var t, s, n = 1; n < arguments.length; n++)
          for (s in t = arguments[n],
          t)
              Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
      return e
  }
    , z = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"]
    , j = z.slice(3)
    , C = {
      FLIP: "flip",
      CLOCKWISE: "clockwise",
      COUNTERCLOCKWISE: "counterclockwise"
  }
    , d = function() {
      function t(n, s) {
          var a, o = this, i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
          re(this, t),
          this.scheduleUpdate = function() {
              return requestAnimationFrame(o.update)
          }
          ,
          this.update = oe(this.update.bind(this)),
          this.options = e({}, t.Defaults, i),
          this.state = {
              isDestroyed: !1,
              isCreated: !1,
              scrollParents: []
          },
          this.reference = n && n.jquery ? n[0] : n,
          this.popper = s && s.jquery ? s[0] : s,
          this.options.modifiers = {},
          Object.keys(e({}, t.Defaults.modifiers, i.modifiers)).forEach(function(n) {
              o.options.modifiers[n] = e({}, t.Defaults.modifiers[n] || {}, i.modifiers ? i.modifiers[n] : {})
          }),
          this.modifiers = Object.keys(this.options.modifiers).map(function(t) {
              return e({
                  name: t
              }, o.options.modifiers[t])
          }).sort(function(e, t) {
              return e.order - t.order
          }),
          this.modifiers.forEach(function(e) {
              e.enabled && K(e.onLoad) && e.onLoad(o.reference, o.popper, o.options, e, o.state)
          }),
          this.update(),
          a = this.options.eventsEnabled,
          a && this.enableEventListeners(),
          this.state.eventsEnabled = a
      }
      return ce(t, [{
          key: "update",
          value: function() {
              return he.call(this)
          }
      }, {
          key: "destroy",
          value: function() {
              return ue.call(this)
          }
      }, {
          key: "enableEventListeners",
          value: function() {
              return le.call(this)
          }
      }, {
          key: "disableEventListeners",
          value: function() {
              return ie.call(this)
          }
      }]),
      t
  }();
  return d.Utils = ("undefined" == typeof window ? global : window).PopperUtils,
  d.placements = z,
  d.Defaults = {
      placement: "bottom",
      positionFixed: !1,
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function() {},
      onUpdate: function() {},
      modifiers: {
          shift: {
              order: 100,
              enabled: !0,
              fn: function(t) {
                  var o = t.placement
                    , u = o.split("-")[0]
                    , i = o.split("-")[1];
                  if (i) {
                      var r = t.offsets
                        , s = r.reference
                        , c = r.popper
                        , l = -1 !== ["bottom", "top"].indexOf(u)
                        , n = l ? "left" : "top"
                        , d = l ? "width" : "height"
                        , h = {
                          start: a({}, n, s[n]),
                          end: a({}, n, s[n] + s[d] - c[d])
                      };
                      t.offsets.popper = e({}, c, h[i])
                  }
                  return t
              }
          },
          offset: {
              order: 200,
              enabled: !0,
              fn: G,
              offset: 0
          },
          preventOverflow: {
              order: 300,
              enabled: !0,
              fn: function(n, s) {
                  l = s.boundariesElement || i(n.instance.popper),
                  n.instance.reference === l && (l = i(l));
                  var c, l, d = E("transform"), r = n.instance.popper.style, u = r.top, h = r.left, m = r[d];
                  r.top = "",
                  r.left = "",
                  r[d] = "",
                  c = y(n.instance.popper, n.instance.reference, s.padding, l, n.positionFixed),
                  r.top = u,
                  r.left = h,
                  r[d] = m,
                  s.boundaries = c;
                  var f = s.priority
                    , o = n.offsets.popper
                    , p = {
                      primary: function(e) {
                          var n = o[e];
                          return o[e] < c[e] && !s.escapeWithReference && (n = t(o[e], c[e])),
                          a({}, e, n)
                      },
                      secondary: function(e) {
                          var t = "right" === e ? "left" : "top"
                            , n = o[t];
                          return o[e] > c[e] && !s.escapeWithReference && (n = P(o[t], c[e] - ("right" === e ? o.width : o.height))),
                          a({}, t, n)
                      }
                  };
                  return f.forEach(function(t) {
                      var n = -1 === ["left", "top"].indexOf(t) ? "secondary" : "primary";
                      o = e({}, o, p[n](t))
                  }),
                  n.offsets.popper = o,
                  n
              },
              priority: ["left", "right", "top", "bottom"],
              padding: 5,
              boundariesElement: "scrollParent"
          },
          keepTogether: {
              order: 400,
              enabled: !0,
              fn: function(e) {
                  var r = e.offsets
                    , o = r.popper
                    , n = r.reference
                    , c = e.placement.split("-")[0]
                    , s = f
                    , i = -1 !== ["top", "bottom"].indexOf(c)
                    , a = i ? "right" : "bottom"
                    , t = i ? "left" : "top"
                    , l = i ? "width" : "height";
                  return o[a] < s(n[t]) && (e.offsets.popper[t] = s(n[t]) - o[l]),
                  o[t] > s(n[a]) && (e.offsets.popper[t] = s(n[a])),
                  e
              }
          },
          arrow: {
              order: 500,
              enabled: !0,
              fn: function(e, o) {
                  if (!$(e.instance.modifiers, "arrow", "keepTogether"))
                      return e;
                  if (r = o.element,
                  "string" == typeof r) {
                      if (r = e.instance.popper.querySelector(r),
                      !r)
                          return e
                  } else if (!e.instance.popper.contains(r))
                      return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                      e;
                  var r, u, y = e.placement.split("-")[0], v = e.offsets, d = v.popper, c = v.reference, h = -1 !== ["left", "right"].indexOf(y), p = h ? "height" : "width", f = h ? "Top" : "Left", i = f.toLowerCase(), j = h ? "left" : "top", m = h ? "bottom" : "right", l = I(r)[p];
                  c[m] - l < d[i] && (e.offsets.popper[i] -= d[i] - (c[m] - l)),
                  c[i] + l > d[m] && (e.offsets.popper[i] += c[i] + l - d[m]),
                  e.offsets.popper = n(e.offsets.popper);
                  var _ = c[i] + c[p] / 2 - l / 2
                    , b = s(e.instance.popper)
                    , O = parseFloat(b["margin" + f], 10)
                    , x = parseFloat(b["border" + f + "Width"], 10)
                    , g = _ - e.offsets.popper[i] - O - x;
                  return g = t(P(d[p] - l, g), 0),
                  e.arrowElement = r,
                  e.offsets.arrow = (u = {},
                  a(u, i, w(g)),
                  a(u, j, ""),
                  u),
                  e
              },
              element: "[x-arrow]"
          },
          flip: {
              order: 600,
              enabled: !0,
              fn: function(t, n) {
                  if (F(t.instance.modifiers, "inner"))
                      return t;
                  if (t.flipped && t.placement === t.originalPlacement)
                      return t;
                  var a = y(t.instance.popper, t.instance.reference, n.padding, n.boundariesElement, t.positionFixed)
                    , s = t.placement.split("-")[0]
                    , r = h(s)
                    , o = t.placement.split("-")[1] || ""
                    , i = [];
                  switch (n.behavior) {
                  case C.FLIP:
                      i = [s, r];
                      break;
                  case C.CLOCKWISE:
                      i = U(s);
                      break;
                  case C.COUNTERCLOCKWISE:
                      i = U(s, !0);
                      break;
                  default:
                      i = n.behavior
                  }
                  return i.forEach(function(c, l) {
                      if (s !== c || i.length === l + 1)
                          return t;
                      s = t.placement.split("-")[0],
                      r = h(s);
                      var u = t.offsets.popper
                        , m = t.offsets.reference
                        , d = f
                        , g = "left" === s && d(u.right) > d(m.left) || "right" === s && d(u.left) < d(m.right) || "top" === s && d(u.bottom) > d(m.top) || "bottom" === s && d(u.top) < d(m.bottom)
                        , v = d(u.left) < d(a.left)
                        , b = d(u.right) > d(a.right)
                        , j = d(u.top) < d(a.top)
                        , y = d(u.bottom) > d(a.bottom)
                        , _ = "left" === s && v || "right" === s && b || "top" === s && j || "bottom" === s && y
                        , p = -1 !== ["top", "bottom"].indexOf(s)
                        , w = !!n.flipVariations && (p && "start" === o && v || p && "end" === o && b || !p && "start" === o && j || !p && "end" === o && y);
                      (g || _ || w) && (t.flipped = !0,
                      (g || _) && (s = i[l + 1]),
                      w && (o = ee(o)),
                      t.placement = s + (o ? "-" + o : ""),
                      t.offsets.popper = e({}, t.offsets.popper, T(t.instance.popper, t.offsets.reference, t.placement)),
                      t = S(t.instance.modifiers, t, "flip"))
                  }),
                  t
              },
              behavior: "flip",
              padding: 5,
              boundariesElement: "viewport"
          },
          inner: {
              order: 700,
              enabled: !1,
              fn: function(e) {
                  var o = e.placement
                    , t = o.split("-")[0]
                    , i = e.offsets
                    , s = i.popper
                    , r = i.reference
                    , a = -1 !== ["left", "right"].indexOf(t)
                    , c = -1 === ["top", "left"].indexOf(t);
                  return s[a ? "left" : "top"] = r[t] - (c ? s[a ? "width" : "height"] : 0),
                  e.placement = h(o),
                  e.offsets.popper = n(s),
                  e
              }
          },
          hide: {
              order: 800,
              enabled: !0,
              fn: function(e) {
                  if (!$(e.instance.modifiers, "hide", "preventOverflow"))
                      return e;
                  var t = e.offsets.reference
                    , n = l(e.instance.modifiers, function(e) {
                      return "preventOverflow" === e.name
                  }).boundaries;
                  if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                      if (!0 === e.hide)
                          return e;
                      e.hide = !0,
                      e.attributes["x-out-of-boundaries"] = ""
                  } else {
                      if (!1 === e.hide)
                          return e;
                      e.hide = !1,
                      e.attributes["x-out-of-boundaries"] = !1
                  }
                  return e
              }
          },
          computeStyle: {
              order: 850,
              enabled: !0,
              fn: function(t, n) {
                  var O = n.x
                    , x = n.y
                    , a = t.offsets.popper
                    , d = l(t.instance.modifiers, function(e) {
                      return "applyStyle" === e.name
                  }).gpuAcceleration;
                  void 0 !== d && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                  var g, v, j, _ = void 0 === d ? n.gpuAcceleration : d, y = i(t.instance.popper), h = b(y), s = {
                      position: a.position
                  }, c = {
                      left: f(a.left),
                      top: w(a.top),
                      bottom: w(a.bottom),
                      right: f(a.right)
                  }, r = "bottom" === O ? "top" : "bottom", o = "right" === x ? "left" : "right", p = E("transform"), m = "bottom" == r ? -h.height + c.bottom : c.top, u = "right" == o ? -h.width + c.right : c.left;
                  return _ && p ? (s[p] = "translate3d(" + u + "px, " + m + "px, 0)",
                  s[r] = 0,
                  s[o] = 0,
                  s.willChange = "transform") : (g = "bottom" == r ? -1 : 1,
                  v = "right" == o ? -1 : 1,
                  s[r] = m * g,
                  s[o] = u * v,
                  s.willChange = r + ", " + o),
                  j = {
                      "x-placement": t.placement
                  },
                  t.attributes = e({}, j, t.attributes),
                  t.styles = e({}, s, t.styles),
                  t.arrowStyles = e({}, t.offsets.arrow, t.arrowStyles),
                  t
              },
              gpuAcceleration: !0,
              x: "bottom",
              y: "right"
          },
          applyStyle: {
              order: 900,
              enabled: !0,
              fn: function(e) {
                  return O(e.instance.popper, e.styles),
                  te(e.instance.popper, e.attributes),
                  e.arrowElement && Object.keys(e.arrowStyles).length && O(e.arrowElement, e.arrowStyles),
                  e
              },
              onLoad: function(e, t, n, s, o) {
                  var i = B(o, t, e, n.positionFixed)
                    , a = Y(n.placement, i, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                  return t.setAttribute("x-placement", a),
                  O(t, {
                      position: n.positionFixed ? "fixed" : "absolute"
                  }),
                  n
              },
              gpuAcceleration: void 0
          }
      }
  },
  d
}),
!function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t(e.bootstrap = {}, e.jQuery, e.Popper)
}(this, function(e, t, n) {
  "use strict";
  function at(e, t) {
      for (var n, s = 0; s < t.length; s++)
          n = t[s],
          n.enumerable = n.enumerable || !1,
          n.configurable = !0,
          "value"in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n)
  }
  function E(e, t, n) {
      return t && at(e.prototype, t),
      n && at(e, n),
      e
  }
  function m(e) {
      for (t = 1; t < arguments.length; t++) {
          var t, n = null != arguments[t] ? arguments[t] : {}, s = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))),
          s.forEach(function(t) {
              var s, o = e, i = n[s = t];
              s in o ? Object.defineProperty(o, s, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              }) : o[s] = i
          })
      }
      return e
  }
  t = t && t.hasOwnProperty("default") ? t.default : t,
  n = n && n.hasOwnProperty("default") ? n.default : n;
  var s, o, i, a, c, l, d, u, h, f, p, g, v, b, j, y, _, w, O, x, C, k, A, S, M, F, T, z, D, N, L, R, P, H, I, B, V, $, W, U, K, q, Y, G, X, Q, Z, J, Ee, Ae, On, De, wn, _n, vn, Ce, Oe, _e, gn, mn, dn, Ue, cn, an, on, Qe, Ze, pe, Je, sn, Pe, nn, ce, ue, tn, Jt, Zt, Xt, Yt, Kt, Ut, Wt, se, $t, je, Vt, oe, le, de, Te, He, zt, ke, re, ye, Ft, Mt, Xe, St, At, kt, Ie, xt, he, Ot, ze, yt, jt, vt, gt, ut, lt, ct, rt, et, it, ge, ot, xe, st, nt, tt, Ge, ve, Re, dt, qe, ht, mt, ft, pt, ee, Le, bt, ie, ne, _t, wt, te, Me, Ct, Et, me, be, Tt, Ye, Dt, Nt, Lt, Rt, Pt, Ht, It, Bt, ae, Ne, fe, qt, Ke, Gt, Se, Qt, en, Ve, we, rn, ln, un, hn, We, fn, pn, $e, Be, bn, jn, yn, r = function(e) {
      var t, n = "transitionend";
      function s(n) {
          var o = this
            , s = !1;
          return e(this).one(t.TRANSITION_END, function() {
              s = !0
          }),
          setTimeout(function() {
              s || t.triggerTransitionEnd(o)
          }, n),
          this
      }
      return t = {
          TRANSITION_END: "bsTransitionEnd",
          getUID: function(e) {
              for (; e += ~~(1e6 * Math.random()),
              document.getElementById(e); )
                  ;
              return e
          },
          getSelectorFromElement: function(t) {
              var n = t.getAttribute("data-target");
              n && "#" !== n || (n = t.getAttribute("href") || "");
              try {
                  return 0 < e(document).find(n).length ? n : null
              } catch {
                  return null
              }
          },
          getTransitionDurationFromElement: function(t) {
              if (!t)
                  return 0;
              var n = e(t).css("transition-duration");
              return parseFloat(n) ? (n = n.split(",")[0],
              1e3 * parseFloat(n)) : 0
          },
          reflow: function(e) {
              return e.offsetHeight
          },
          triggerTransitionEnd: function(t) {
              e(t).trigger(n)
          },
          supportsTransitionEnd: function() {
              return Boolean(n)
          },
          isElement: function(e) {
              return (e[0] || e).nodeType
          },
          typeCheckConfig: function(e, n, s) {
              for (o in s)
                  if (Object.prototype.hasOwnProperty.call(s, o)) {
                      var o, c, a = s[o], i = n[o], r = i && t.isElement(i) ? "element" : (c = i,
                      {}.toString.call(c).match(/\s([a-z]+)/i)[1].toLowerCase());
                      if (!new RegExp(a).test(r))
                          throw new Error(e.toUpperCase() + ': Option "' + o + '" provided type "' + r + '" but expected type "' + a + '".')
                  }
          }
      },
      e.fn.emulateTransitionEnd = s,
      e.event.special[t.TRANSITION_END] = {
          bindType: n,
          delegateType: n,
          handle: function(t) {
              if (e(t.target).is(this))
                  return t.handleObj.handler.apply(this, arguments)
          }
      },
      t
  }(t), xn = (U = "alert",
  Ae = "." + (Ee = "bs.alert"),
  On = (f = t).fn[U],
  De = {
      CLOSE: "close" + Ae,
      CLOSED: "closed" + Ae,
      CLICK_DATA_API: "click" + Ae + ".data-api"
  },
  wn = "alert",
  _n = "fade",
  vn = "show",
  P = function() {
      function e(e) {
          this._element = e
      }
      var t = e.prototype;
      return t.close = function(e) {
          var t = this._element;
          e && (t = this._getRootElement(e)),
          this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
      }
      ,
      t.dispose = function() {
          f.removeData(this._element, Ee),
          this._element = null
      }
      ,
      t._getRootElement = function(e) {
          var n = r.getSelectorFromElement(e)
            , t = !1;
          return n && (t = f(n)[0]),
          t || (t = f(e).closest("." + wn)[0]),
          t
      }
      ,
      t._triggerCloseEvent = function(e) {
          var t = f.Event(De.CLOSE);
          return f(e).trigger(t),
          t
      }
      ,
      t._removeElement = function(e) {
          var t, n = this;
          f(e).removeClass(vn),
          f(e).hasClass(_n) ? (t = r.getTransitionDurationFromElement(e),
          f(e).one(r.TRANSITION_END, function(t) {
              return n._destroyElement(e, t)
          }).emulateTransitionEnd(t)) : this._destroyElement(e)
      }
      ,
      t._destroyElement = function(e) {
          f(e).detach().trigger(De.CLOSED).remove()
      }
      ,
      e._jQueryInterface = function(t) {
          return this.each(function() {
              var s = f(this)
                , n = s.data(Ee);
              n || (n = new e(this),
              s.data(Ee, n)),
              "close" === t && n[t](this)
          })
      }
      ,
      e._handleDismiss = function(e) {
          return function(t) {
              t && t.preventDefault(),
              e.close(this)
          }
      }
      ,
      E(e, null, [{
          key: "VERSION",
          get: function() {
              return "4.1.1"
          }
      }]),
      e
  }(),
  f(document).on(De.CLICK_DATA_API, '[data-dismiss="alert"]', P._handleDismiss(new P)),
  f.fn[U] = P._jQueryInterface,
  f.fn[U].Constructor = P,
  f.fn[U].noConflict = function() {
      return f.fn[U] = On,
      P._jQueryInterface
  }
  ,
  P), Cn = (G = "button",
  Oe = "." + (Ce = "bs.button"),
  _e = ".data-api",
  gn = (u = t).fn[G],
  q = "active",
  mn = "btn",
  Ue = '[data-toggle^="button"]',
  cn = '[data-toggle="buttons"]',
  an = "input",
  on = ".active",
  Qe = ".btn",
  Ze = {
      CLICK_DATA_API: "click" + Oe + _e,
      FOCUS_BLUR_DATA_API: (dn = "focus") + Oe + _e + " blur" + Oe + _e
  },
  Y = function() {
      function e(e) {
          this._element = e
      }
      var t = e.prototype;
      return t.toggle = function() {
          var e, s, n = !0, o = !0, t = u(this._element).closest(cn)[0];
          if (t && (e = u(this._element).find(an)[0],
          e)) {
              if ("radio" === e.type && (e.checked && u(this._element).hasClass(q) ? n = !1 : (s = u(t).find(on)[0],
              s && u(s).removeClass(q))),
              n) {
                  if (e.hasAttribute("disabled") || t.hasAttribute("disabled") || e.classList.contains("disabled") || t.classList.contains("disabled"))
                      return;
                  e.checked = !u(this._element).hasClass(q),
                  u(e).trigger("change")
              }
              e.focus(),
              o = !1
          }
          o && this._element.setAttribute("aria-pressed", !u(this._element).hasClass(q)),
          n && u(this._element).toggleClass(q)
      }
      ,
      t.dispose = function() {
          u.removeData(this._element, Ce),
          this._element = null
      }
      ,
      e._jQueryInterface = function(t) {
          return this.each(function() {
              var n = u(this).data(Ce);
              n || (n = new e(this),
              u(this).data(Ce, n)),
              "toggle" === t && n[t]()
          })
      }
      ,
      E(e, null, [{
          key: "VERSION",
          get: function() {
              return "4.1.1"
          }
      }]),
      e
  }(),
  u(document).on(Ze.CLICK_DATA_API, Ue, function(e) {
      e.preventDefault();
      var t = e.target;
      u(t).hasClass(mn) || (t = u(t).closest(Qe)),
      Y._jQueryInterface.call(u(t), "toggle")
  }).on(Ze.FOCUS_BLUR_DATA_API, Ue, function(e) {
      var t = u(e.target).closest(Qe)[0];
      u(t).toggleClass(dn, /^focus(in)?$/.test(e.type))
  }),
  u.fn[G] = Y._jQueryInterface,
  u.fn[G].Constructor = Y,
  u.fn[G].noConflict = function() {
      return u.fn[G] = gn,
      Y._jQueryInterface
  }
  ,
  Y), En = (N = "carousel",
  w = "." + (pe = "bs.carousel"),
  Je = ".data-api",
  sn = (i = t).fn[N],
  Pe = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0
  },
  nn = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean"
  },
  ce = "next",
  ue = "prev",
  tn = "left",
  Jt = "right",
  x = {
      SLIDE: "slide" + w,
      SLID: "slid" + w,
      KEYDOWN: "keydown" + w,
      MOUSEENTER: "mouseenter" + w,
      MOUSELEAVE: "mouseleave" + w,
      TOUCHEND: "touchend" + w,
      LOAD_DATA_API: "load" + w + Je,
      CLICK_DATA_API: "click" + w + Je
  },
  Zt = "carousel",
  F = "active",
  Xt = "slide",
  Yt = "carousel-item-right",
  Kt = "carousel-item-left",
  Ut = "carousel-item-next",
  Wt = "carousel-item-prev",
  O = {
      ACTIVE: ".active",
      ACTIVE_ITEM: ".active.carousel-item",
      ITEM: ".carousel-item",
      NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
      INDICATORS: ".carousel-indicators",
      DATA_SLIDE: "[data-slide], [data-slide-to]",
      DATA_RIDE: '[data-ride="carousel"]'
  },
  V = function() {
      function t(e, t) {
          this._items = null,
          this._interval = null,
          this._activeElement = null,
          this._isPaused = !1,
          this._isSliding = !1,
          this.touchTimeout = null,
          this._config = this._getConfig(t),
          this._element = i(e)[0],
          this._indicatorsElement = i(this._element).find(O.INDICATORS)[0],
          this._addEventListeners()
      }
      var e = t.prototype;
      return e.next = function() {
          this._isSliding || this._slide(ce)
      }
      ,
      e.nextWhenVisible = function() {
          !document.hidden && i(this._element).is(":visible") && "hidden" !== i(this._element).css("visibility") && this.next()
      }
      ,
      e.prev = function() {
          this._isSliding || this._slide(ue)
      }
      ,
      e.pause = function(e) {
          e || (this._isPaused = !0),
          i(this._element).find(O.NEXT_PREV)[0] && (r.triggerTransitionEnd(this._element),
          this.cycle(!0)),
          clearInterval(this._interval),
          this._interval = null
      }
      ,
      e.cycle = function(e) {
          e || (this._isPaused = !1),
          this._interval && (clearInterval(this._interval),
          this._interval = null),
          this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
      }
      ,
      e.to = function(e) {
          var t, n, s = this;
          if (this._activeElement = i(this._element).find(O.ACTIVE_ITEM)[0],
          t = this._getItemIndex(this._activeElement),
          !(e > this._items.length - 1 || e < 0))
              if (this._isSliding)
                  i(this._element).one(x.SLID, function() {
                      return s.to(e)
                  });
              else {
                  if (t === e)
                      return this.pause(),
                      void this.cycle();
                  n = t < e ? ce : ue,
                  this._slide(n, this._items[e])
              }
      }
      ,
      e.dispose = function() {
          i(this._element).off(w),
          i.removeData(this._element, pe),
          this._items = null,
          this._config = null,
          this._element = null,
          this._interval = null,
          this._isPaused = null,
          this._isSliding = null,
          this._activeElement = null,
          this._indicatorsElement = null
      }
      ,
      e._getConfig = function(e) {
          return e = m({}, Pe, e),
          r.typeCheckConfig(N, e, nn),
          e
      }
      ,
      e._addEventListeners = function() {
          var e = this;
          this._config.keyboard && i(this._element).on(x.KEYDOWN, function(t) {
              return e._keydown(t)
          }),
          "hover" === this._config.pause && (i(this._element).on(x.MOUSEENTER, function(t) {
              return e.pause(t)
          }).on(x.MOUSELEAVE, function(t) {
              return e.cycle(t)
          }),
          "ontouchstart"in document.documentElement && i(this._element).on(x.TOUCHEND, function() {
              e.pause(),
              e.touchTimeout && clearTimeout(e.touchTimeout),
              e.touchTimeout = setTimeout(function(t) {
                  return e.cycle(t)
              }, 500 + e._config.interval)
          }))
      }
      ,
      e._keydown = function(e) {
          if (!/input|textarea/i.test(e.target.tagName))
              switch (e.which) {
              case 37:
                  e.preventDefault(),
                  this.prev();
                  break;
              case 39:
                  e.preventDefault(),
                  this.next()
              }
      }
      ,
      e._getItemIndex = function(e) {
          return this._items = i.makeArray(i(e).parent().find(O.ITEM)),
          this._items.indexOf(e)
      }
      ,
      e._getItemByDirection = function(e, t) {
          var s, o = e === ce, i = e === ue, n = this._getItemIndex(t), a = this._items.length - 1;
          return (i && 0 === n || o && n === a) && !this._config.wrap ? t : (s = (n + (e === ue ? -1 : 1)) % this._items.length,
          -1 === s ? this._items[this._items.length - 1] : this._items[s])
      }
      ,
      e._triggerSlideEvent = function(e, t) {
          var s = this._getItemIndex(e)
            , o = this._getItemIndex(i(this._element).find(O.ACTIVE_ITEM)[0])
            , n = i.Event(x.SLIDE, {
              relatedTarget: e,
              direction: t,
              from: o,
              to: s
          });
          return i(this._element).trigger(n),
          n
      }
      ,
      e._setActiveIndicatorElement = function(e) {
          if (this._indicatorsElement) {
              i(this._indicatorsElement).find(O.ACTIVE).removeClass(F);
              var t = this._indicatorsElement.children[this._getItemIndex(e)];
              t && i(t).addClass(F)
          }
      }
      ,
      e._slide = function(e, t) {
          var o, a, c, l, h, d = this, s = i(this._element).find(O.ACTIVE_ITEM)[0], m = this._getItemIndex(s), n = t || s && this._getItemByDirection(e, s), f = this._getItemIndex(n), u = Boolean(this._interval);
          e === ce ? (o = Kt,
          a = Ut,
          c = tn) : (o = Yt,
          a = Wt,
          c = Jt),
          n && i(n).hasClass(F) ? this._isSliding = !1 : !this._triggerSlideEvent(n, c).isDefaultPrevented() && s && n && (this._isSliding = !0,
          u && this.pause(),
          this._setActiveIndicatorElement(n),
          l = i.Event(x.SLID, {
              relatedTarget: n,
              direction: c,
              from: m,
              to: f
          }),
          i(this._element).hasClass(Xt) ? (i(n).addClass(a),
          r.reflow(n),
          i(s).addClass(o),
          i(n).addClass(o),
          h = r.getTransitionDurationFromElement(s),
          i(s).one(r.TRANSITION_END, function() {
              i(n).removeClass(o + " " + a).addClass(F),
              i(s).removeClass(F + " " + a + " " + o),
              d._isSliding = !1,
              setTimeout(function() {
                  return i(d._element).trigger(l)
              }, 0)
          }).emulateTransitionEnd(h)) : (i(s).removeClass(F),
          i(n).addClass(F),
          this._isSliding = !1,
          i(this._element).trigger(l)),
          u && this.cycle())
      }
      ,
      t._jQueryInterface = function(e) {
          return this.each(function() {
              var o, n = i(this).data(pe), s = m({}, Pe, i(this).data());
              if ("object" == typeof e && (s = m({}, s, e)),
              o = "string" == typeof e ? e : s.slide,
              n || (n = new t(this,s),
              i(this).data(pe, n)),
              "number" == typeof e)
                  n.to(e);
              else if ("string" == typeof o) {
                  if ("undefined" == typeof n[o])
                      throw new TypeError('No method named "' + o + '"');
                  n[o]()
              } else
                  s.interval && (n.pause(),
                  n.cycle())
          })
      }
      ,
      t._dataApiClickHandler = function(e) {
          if (s = r.getSelectorFromElement(this),
          s && (n = i(s)[0],
          n && i(n).hasClass(Zt))) {
              var n, s, a = m({}, i(n).data(), i(this).data()), o = this.getAttribute("data-slide-to");
              o && (a.interval = !1),
              t._jQueryInterface.call(i(n), a),
              o && i(n).data(pe).to(o),
              e.preventDefault()
          }
      }
      ,
      E(t, null, [{
          key: "VERSION",
          get: function() {
              return "4.1.1"
          }
      }, {
          key: "Default",
          get: function() {
              return Pe
          }
      }]),
      t
  }(),
  i(document).on(x.CLICK_DATA_API, O.DATA_SLIDE, V._dataApiClickHandler),
  i(window).on(x.LOAD_DATA_API, function() {
      i(O.DATA_RIDE).each(function() {
          var e = i(this);
          V._jQueryInterface.call(e, e.data())
      })
  }),
  i.fn[N] = V._jQueryInterface,
  i.fn[N].Constructor = V,
  i.fn[N].noConflict = function() {
      return i.fn[N] = sn,
      V._jQueryInterface
  }
  ,
  V), kn = (B = "collapse",
  se = "." + (I = "bs.collapse"),
  $t = (c = t).fn[B],
  je = {
      toggle: !0,
      parent: ""
  },
  Vt = {
      toggle: "boolean",
      parent: "(string|element)"
  },
  oe = {
      SHOW: "show" + se,
      SHOWN: "shown" + se,
      HIDE: "hide" + se,
      HIDDEN: "hidden" + se,
      CLICK_DATA_API: "click" + se + ".data-api"
  },
  A = "show",
  le = "collapse",
  de = "collapsing",
  Te = "collapsed",
  He = "width",
  zt = "height",
  ke = {
      ACTIVES: ".show, .collapsing",
      DATA_TOGGLE: '[data-toggle="collapse"]'
  },
  $ = function() {
      function t(e, t) {
          this._isTransitioning = !1,
          this._element = e,
          this._config = this._getConfig(t),
          this._triggerArray = c.makeArray(c('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
          for (var n, o, i = c(ke.DATA_TOGGLE), s = 0; s < i.length; s++)
              o = i[s],
              n = r.getSelectorFromElement(o),
              null !== n && 0 < c(n).filter(e).length && (this._selector = n,
              this._triggerArray.push(o));
          this._parent = this._config.parent ? this._getParent() : null,
          this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
          this._config.toggle && this.toggle()
      }
      var e = t.prototype;
      return e.toggle = function() {
          c(this._element).hasClass(A) ? this.hide() : this.show()
      }
      ,
      e.show = function() {
          if (s = this,
          !this._isTransitioning && !c(this._element).hasClass(A) && (this._parent && 0 === (e = c.makeArray(c(this._parent).find(ke.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (e = null),
          !(e && (o = c(e).not(this._selector).data(I)) && o._isTransitioning)) && (i = c.Event(oe.SHOW),
          c(this._element).trigger(i),
          !i.isDefaultPrevented())) {
              e && (t._jQueryInterface.call(c(e).not(this._selector), "hide"),
              o || c(e).data(I, null)),
              n = this._getDimension(),
              c(this._element).removeClass(le).addClass(de),
              (this._element.style[n] = 0) < this._triggerArray.length && c(this._triggerArray).removeClass(Te).attr("aria-expanded", !0),
              this.setTransitioning(!0);
              var e, n, s, o, i, a = "scroll" + (n[0].toUpperCase() + n.slice(1)), l = r.getTransitionDurationFromElement(this._element);
              c(this._element).one(r.TRANSITION_END, function() {
                  c(s._element).removeClass(de).addClass(le).addClass(A),
                  s._element.style[n] = "",
                  s.setTransitioning(!1),
                  c(s._element).trigger(oe.SHOWN)
              }).emulateTransitionEnd(l),
              this._element.style[n] = this._element[a] + "px"
          }
      }
      ,
      e.hide = function() {
          if (n = this,
          !this._isTransitioning && c(this._element).hasClass(A) && (s = c.Event(oe.HIDE),
          c(this._element).trigger(s),
          !s.isDefaultPrevented())) {
              if (e = this._getDimension(),
              this._element.style[e] = this._element.getBoundingClientRect()[e] + "px",
              r.reflow(this._element),
              c(this._element).addClass(de).removeClass(le).removeClass(A),
              0 < this._triggerArray.length)
                  for (t = 0; t < this._triggerArray.length; t++) {
                      var e, t, n, s, a, o = this._triggerArray[t], i = r.getSelectorFromElement(o);
                      null !== i && (c(i).hasClass(A) || c(o).addClass(Te).attr("aria-expanded", !1))
                  }
              this.setTransitioning(!0),
              this._element.style[e] = "",
              a = r.getTransitionDurationFromElement(this._element),
              c(this._element).one(r.TRANSITION_END, function() {
                  n.setTransitioning(!1),
                  c(n._element).removeClass(de).addClass(le).trigger(oe.HIDDEN)
              }).emulateTransitionEnd(a)
          }
      }
      ,
      e.setTransitioning = function(e) {
          this._isTransitioning = e
      }
      ,
      e.dispose = function() {
          c.removeData(this._element, I),
          this._config = null,
          this._parent = null,
          this._element = null,
          this._triggerArray = null,
          this._isTransitioning = null
      }
      ,
      e._getConfig = function(e) {
          return (e = m({}, je, e)).toggle = Boolean(e.toggle),
          r.typeCheckConfig(B, e, Vt),
          e
      }
      ,
      e._getDimension = function() {
          return c(this._element).hasClass(He) ? He : zt
      }
      ,
      e._getParent = function() {
          var n, s = this, e = null;
          return r.isElement(this._config.parent) ? (e = this._config.parent,
          "undefined" != typeof this._config.parent.jquery && (e = this._config.parent[0])) : e = c(this._config.parent)[0],
          n = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
          c(e).find(n).each(function(e, n) {
              s._addAriaAndCollapsedClass(t._getTargetFromElement(n), [n])
          }),
          e
      }
      ,
      e._addAriaAndCollapsedClass = function(e, t) {
          if (e) {
              var n = c(e).hasClass(A);
              0 < t.length && c(t).toggleClass(Te, !n).attr("aria-expanded", n)
          }
      }
      ,
      t._getTargetFromElement = function(e) {
          var t = r.getSelectorFromElement(e);
          return t ? c(t)[0] : null
      }
      ,
      t._jQueryInterface = function(e) {
          return this.each(function() {
              var s = c(this)
                , n = s.data(I)
                , o = m({}, je, s.data(), "object" == typeof e && e ? e : {});
              if (!n && o.toggle && /show|hide/.test(e) && (o.toggle = !1),
              n || (n = new t(this,o),
              s.data(I, n)),
              "string" == typeof e) {
                  if ("undefined" == typeof n[e])
                      throw new TypeError('No method named "' + e + '"');
                  n[e]()
              }
          })
      }
      ,
      E(t, null, [{
          key: "VERSION",
          get: function() {
              return "4.1.1"
          }
      }, {
          key: "Default",
          get: function() {
              return je
          }
      }]),
      t
  }(),
  c(document).on(oe.CLICK_DATA_API, ke.DATA_TOGGLE, function(e) {
      "A" === e.currentTarget.tagName && e.preventDefault();
      var t = c(this)
        , n = r.getSelectorFromElement(this);
      c(n).each(function() {
          var e = c(this)
            , n = e.data(I) ? "toggle" : t.data();
          $._jQueryInterface.call(e, n)
      })
  }),
  c.fn[B] = $._jQueryInterface,
  c.fn[B].Constructor = $,
  c.fn[B].noConflict = function() {
      return c.fn[B] = $t,
      $._jQueryInterface
  }
  ,
  $), An = (H = "dropdown",
  _ = "." + (re = "bs.dropdown"),
  ye = ".data-api",
  Ft = (a = t).fn[H],
  Mt = new RegExp("38|40|27"),
  b = {
      HIDE: "hide" + _,
      HIDDEN: "hidden" + _,
      SHOW: "show" + _,
      SHOWN: "shown" + _,
      CLICK: "click" + _,
      CLICK_DATA_API: "click" + _ + ye,
      KEYDOWN_DATA_API: "keydown" + _ + ye,
      KEYUP_DATA_API: "keyup" + _ + ye
  },
  Xe = "disabled",
  S = "show",
  St = "dropup",
  At = "dropright",
  kt = "dropleft",
  Ie = "dropdown-menu-right",
  xt = "position-static",
  he = '[data-toggle="dropdown"]',
  Ot = ".dropdown form",
  ze = ".dropdown-menu",
  yt = ".navbar-nav",
  jt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
  vt = "top-start",
  gt = "top-end",
  ut = "bottom-start",
  lt = "bottom-end",
  ct = "right-start",
  rt = "left-start",
  et = {
      offset: 0,
      flip: !0,
      boundary: "scrollParent",
      reference: "toggle",
      display: "dynamic"
  },
  it = {
      offset: "(number|string|function)",
      flip: "boolean",
      boundary: "(string|element)",
      reference: "(string|element)",
      display: "string"
  },
  k = function() {
      function e(e, t) {
          this._element = e,
          this._popper = null,
          this._config = this._getConfig(t),
          this._menu = this._getMenuElement(),
          this._inNavbar = this._detectNavbar(),
          this._addEventListeners()
      }
      var t = e.prototype;
      return t.toggle = function() {
          if (!this._element.disabled && !a(this._element).hasClass(Xe)) {
              var s, o, i, t = e._getParentFromElement(this._element), c = a(this._menu).hasClass(S);
              if (e._clearMenus(),
              !c && (o = {
                  relatedTarget: this._element
              },
              i = a.Event(b.SHOW, o),
              a(t).trigger(i),
              !i.isDefaultPrevented())) {
                  if (!this._inNavbar) {
                      if ("undefined" == typeof n)
                          throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                      s = this._element,
                      "parent" === this._config.reference ? s = t : r.isElement(this._config.reference) && (s = this._config.reference,
                      "undefined" != typeof this._config.reference.jquery && (s = this._config.reference[0])),
                      "scrollParent" !== this._config.boundary && a(t).addClass(xt),
                      this._popper = new n(s,this._menu,this._getPopperConfig())
                  }
                  "ontouchstart"in document.documentElement && 0 === a(t).closest(yt).length && a(document.body).children().on("mouseover", null, a.noop),
                  this._element.focus(),
                  this._element.setAttribute("aria-expanded", !0),
                  a(this._menu).toggleClass(S),
                  a(t).toggleClass(S).trigger(a.Event(b.SHOWN, o))
              }
          }
      }
      ,
      t.dispose = function() {
          a.removeData(this._element, re),
          a(this._element).off(_),
          this._element = null,
          (this._menu = null) !== this._popper && (this._popper.destroy(),
          this._popper = null)
      }
      ,
      t.update = function() {
          this._inNavbar = this._detectNavbar(),
          null !== this._popper && this._popper.scheduleUpdate()
      }
      ,
      t._addEventListeners = function() {
          var e = this;
          a(this._element).on(b.CLICK, function(t) {
              t.preventDefault(),
              t.stopPropagation(),
              e.toggle()
          })
      }
      ,
      t._getConfig = function(e) {
          return e = m({}, this.constructor.Default, a(this._element).data(), e),
          r.typeCheckConfig(H, e, this.constructor.DefaultType),
          e
      }
      ,
      t._getMenuElement = function() {
          if (!this._menu) {
              var t = e._getParentFromElement(this._element);
              this._menu = a(t).find(ze)[0]
          }
          return this._menu
      }
      ,
      t._getPlacement = function() {
          var t = a(this._element).parent()
            , e = ut;
          return t.hasClass(St) ? (e = vt,
          a(this._menu).hasClass(Ie) && (e = gt)) : t.hasClass(At) ? e = ct : t.hasClass(kt) ? e = rt : a(this._menu).hasClass(Ie) && (e = lt),
          e
      }
      ,
      t._detectNavbar = function() {
          return 0 < a(this._element).closest(".navbar").length
      }
      ,
      t._getPopperConfig = function() {
          var t, n = this, e = {};
          return "function" == typeof this._config.offset ? e.fn = function(e) {
              return e.offsets = m({}, e.offsets, n._config.offset(e.offsets) || {}),
              e
          }
          : e.offset = this._config.offset,
          t = {
              placement: this._getPlacement(),
              modifiers: {
                  offset: e,
                  flip: {
                      enabled: this._config.flip
                  },
                  preventOverflow: {
                      boundariesElement: this._config.boundary
                  }
              }
          },
          "static" === this._config.display && (t.modifiers.applyStyle = {
              enabled: !1
          }),
          t
      }
      ,
      e._jQueryInterface = function(t) {
          return this.each(function() {
              var n = a(this).data(re);
              if (n || (n = new e(this,"object" == typeof t ? t : null),
              a(this).data(re, n)),
              "string" == typeof t) {
                  if ("undefined" == typeof n[t])
                      throw new TypeError('No method named "' + t + '"');
                  n[t]()
              }
          })
      }
      ,
      e._clearMenus = function(t) {
          if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
              for (s = a.makeArray(a(he)),
              n = 0; n < s.length; n++) {
                  var n, s, i, l, o = e._getParentFromElement(s[n]), r = a(s[n]).data(re), c = {
                      relatedTarget: s[n]
                  };
                  r && (l = r._menu,
                  a(o).hasClass(S) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && a.contains(o, t.target)) && (i = a.Event(b.HIDE, c),
                  a(o).trigger(i),
                  i.isDefaultPrevented() || ("ontouchstart"in document.documentElement && a(document.body).children().off("mouseover", null, a.noop),
                  s[n].setAttribute("aria-expanded", "false"),
                  a(l).removeClass(S),
                  a(o).removeClass(S).trigger(a.Event(b.HIDDEN, c)))))
              }
      }
      ,
      e._getParentFromElement = function(e) {
          var t, n = r.getSelectorFromElement(e);
          return n && (t = a(n)[0]),
          t || e.parentNode
      }
      ,
      e._dataApiKeydownHandler = function(t) {
          if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || a(t.target).closest(ze).length)) : Mt.test(t.which)) && (t.preventDefault(),
          t.stopPropagation(),
          !this.disabled && !a(this).hasClass(Xe))) {
              var n, s, r, o = e._getParentFromElement(this), i = a(o).hasClass(S);
              (i || 27 === t.which && 32 === t.which) && (!i || 27 !== t.which && 32 !== t.which) ? (s = a(o).find(jt).get(),
              0 !== s.length && (n = s.indexOf(t.target),
              38 === t.which && 0 < n && n--,
              40 === t.which && n < s.length - 1 && n++,
              n < 0 && (n = 0),
              s[n].focus())) : (27 === t.which && (r = a(o).find(he)[0],
              a(r).trigger("focus")),
              a(this).trigger("click"))
          }
      }
      ,
      E(e, null, [{
          key: "VERSION",
          get: function() {
              return "4.1.1"
          }
      }, {
          key: "Default",
          get: function() {
              return et
          }
      }, {
          key: "DefaultType",
          get: function() {
              return it
          }
      }]),
      e
  }(),
  a(document).on(b.KEYDOWN_DATA_API, he, k._dataApiKeydownHandler).on(b.KEYDOWN_DATA_API, ze, k._dataApiKeydownHandler).on(b.CLICK_DATA_API + " " + b.KEYUP_DATA_API, k._clearMenus).on(b.CLICK_DATA_API, he, function(e) {
      e.preventDefault(),
      e.stopPropagation(),
      k._jQueryInterface.call(a(this), "toggle")
  }).on(b.CLICK_DATA_API, Ot, function(e) {
      e.stopPropagation()
  }),
  a.fn[H] = k._jQueryInterface,
  a.fn[H].Constructor = k,
  a.fn[H].noConflict = function() {
      return a.fn[H] = Ft,
      k._jQueryInterface
  }
  ,
  k), Sn = (R = "modal",
  g = "." + (ge = "bs.modal"),
  ot = (s = t).fn[R],
  xe = {
      backdrop: !0,
      keyboard: !0,
      focus: !0,
      show: !0
  },
  st = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
      show: "boolean"
  },
  h = {
      HIDE: "hide" + g,
      HIDDEN: "hidden" + g,
      SHOW: "show" + g,
      SHOWN: "shown" + g,
      FOCUSIN: "focusin" + g,
      RESIZE: "resize" + g,
      CLICK_DISMISS: "click.dismiss" + g,
      KEYDOWN_DISMISS: "keydown.dismiss" + g,
      MOUSEUP_DISMISS: "mouseup.dismiss" + g,
      MOUSEDOWN_DISMISS: "mousedown.dismiss" + g,
      CLICK_DATA_API: "click" + g + ".data-api"
  },
  nt = "modal-scrollbar-measure",
  tt = "modal-backdrop",
  Ge = "modal-open",
  L = "fade",
  ve = "show",
  C = {
      DIALOG: ".modal-dialog",
      DATA_TOGGLE: '[data-toggle="modal"]',
      DATA_DISMISS: '[data-dismiss="modal"]',
      FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      STICKY_CONTENT: ".sticky-top",
      NAVBAR_TOGGLER: ".navbar-toggler"
  },
  X = function() {
      function t(e, t) {
          this._config = this._getConfig(t),
          this._element = e,
          this._dialog = s(e).find(C.DIALOG)[0],
          this._backdrop = null,
          this._isShown = !1,
          this._isBodyOverflowing = !1,
          this._ignoreBackdropClick = !1,
          this._scrollbarWidth = 0
      }
      var e = t.prototype;
      return e.toggle = function(e) {
          return this._isShown ? this.hide() : this.show(e)
      }
      ,
      e.show = function(e) {
          var n, t = this;
          !this._isTransitioning && !this._isShown && (s(this._element).hasClass(L) && (this._isTransitioning = !0),
          n = s.Event(h.SHOW, {
              relatedTarget: e
          }),
          s(this._element).trigger(n),
          this._isShown || n.isDefaultPrevented() || (this._isShown = !0,
          this._checkScrollbar(),
          this._setScrollbar(),
          this._adjustDialog(),
          s(document.body).addClass(Ge),
          this._setEscapeEvent(),
          this._setResizeEvent(),
          s(this._element).on(h.CLICK_DISMISS, C.DATA_DISMISS, function(e) {
              return t.hide(e)
          }),
          s(this._dialog).on(h.MOUSEDOWN_DISMISS, function() {
              s(t._element).one(h.MOUSEUP_DISMISS, function(e) {
                  s(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
              })
          }),
          this._showBackdrop(function() {
              return t._showElement(e)
          })))
      }
      ,
      e.hide = function(e) {
          var t, n, o, i = this;
          e && e.preventDefault(),
          !this._isTransitioning && this._isShown && (t = s.Event(h.HIDE),
          (s(this._element).trigger(t),
          this._isShown && !t.isDefaultPrevented()) && (this._isShown = !1,
          n = s(this._element).hasClass(L),
          n && (this._isTransitioning = !0),
          this._setEscapeEvent(),
          this._setResizeEvent(),
          s(document).off(h.FOCUSIN),
          s(this._element).removeClass(ve),
          s(this._element).off(h.CLICK_DISMISS),
          s(this._dialog).off(h.MOUSEDOWN_DISMISS),
          n ? (o = r.getTransitionDurationFromElement(this._element),
          s(this._element).one(r.TRANSITION_END, function(e) {
              return i._hideModal(e)
          }).emulateTransitionEnd(o)) : this._hideModal()))
      }
      ,
      e.dispose = function() {
          s.removeData(this._element, ge),
          s(window, document, this._element, this._backdrop).off(g),
          this._config = null,
          this._element = null,
          this._dialog = null,
          this._backdrop = null,
          this._isShown = null,
          this._isBodyOverflowing = null,
          this._ignoreBackdropClick = null,
          this._scrollbarWidth = null
      }
      ,
      e.handleUpdate = function() {
          this._adjustDialog()
      }
      ,
      e._getConfig = function(e) {
          return e = m({}, xe, e),
          r.typeCheckConfig(R, e, st),
          e
      }
      ,
      e._showElement = function(e) {
          var n, i, a, t = this, o = s(this._element).hasClass(L);
          this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
          this._element.style.display = "block",
          this._element.removeAttribute("aria-hidden"),
          this._element.scrollTop = 0,
          o && r.reflow(this._element),
          s(this._element).addClass(ve),
          this._config.focus && this._enforceFocus(),
          i = s.Event(h.SHOWN, {
              relatedTarget: e
          }),
          n = function() {
              t._config.focus && t._element.focus(),
              t._isTransitioning = !1,
              s(t._element).trigger(i)
          }
          ,
          o ? (a = r.getTransitionDurationFromElement(this._element),
          s(this._dialog).one(r.TRANSITION_END, n).emulateTransitionEnd(a)) : n()
      }
      ,
      e._enforceFocus = function() {
          var e = this;
          s(document).off(h.FOCUSIN).on(h.FOCUSIN, function(t) {
              document !== t.target && e._element !== t.target && 0 === s(e._element).has(t.target).length && e._element.focus()
          })
      }
      ,
      e._setEscapeEvent = function() {
          var e = this;
          this._isShown && this._config.keyboard ? s(this._element).on(h.KEYDOWN_DISMISS, function(t) {
              27 === t.which && (t.preventDefault(),
              e.hide())
          }) : this._isShown || s(this._element).off(h.KEYDOWN_DISMISS)
      }
      ,
      e._setResizeEvent = function() {
          var e = this;
          this._isShown ? s(window).on(h.RESIZE, function(t) {
              return e.handleUpdate(t)
          }) : s(window).off(h.RESIZE)
      }
      ,
      e._hideModal = function() {
          var e = this;
          this._element.style.display = "none",
          this._element.setAttribute("aria-hidden", !0),
          this._isTransitioning = !1,
          this._showBackdrop(function() {
              s(document.body).removeClass(Ge),
              e._resetAdjustments(),
              e._resetScrollbar(),
              s(e._element).trigger(h.HIDDEN)
          })
      }
      ,
      e._removeBackdrop = function() {
          this._backdrop && (s(this._backdrop).remove(),
          this._backdrop = null)
      }
      ,
      e._showBackdrop = function(e) {
          var o, i, a, t = this, n = s(this._element).hasClass(L) ? L : "";
          if (this._isShown && this._config.backdrop) {
              if (this._backdrop = document.createElement("div"),
              this._backdrop.className = tt,
              n && s(this._backdrop).addClass(n),
              s(this._backdrop).appendTo(document.body),
              s(this._element).on(h.CLICK_DISMISS, function(e) {
                  t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide())
              }),
              n && r.reflow(this._backdrop),
              s(this._backdrop).addClass(ve),
              !e)
                  return;
              if (!n)
                  return void e();
              i = r.getTransitionDurationFromElement(this._backdrop),
              s(this._backdrop).one(r.TRANSITION_END, e).emulateTransitionEnd(i)
          } else
              !this._isShown && this._backdrop ? (s(this._backdrop).removeClass(ve),
              o = function() {
                  t._removeBackdrop(),
                  e && e()
              }
              ,
              s(this._element).hasClass(L) ? (a = r.getTransitionDurationFromElement(this._backdrop),
              s(this._backdrop).one(r.TRANSITION_END, o).emulateTransitionEnd(a)) : o()) : e && e()
      }
      ,
      e._adjustDialog = function() {
          var e = this._element.scrollHeight > document.documentElement.clientHeight;
          !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
          this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
      }
      ,
      e._resetAdjustments = function() {
          this._element.style.paddingLeft = "",
          this._element.style.paddingRight = ""
      }
      ,
      e._checkScrollbar = function() {
          var e = document.body.getBoundingClientRect();
          this._isBodyOverflowing = e.left + e.right < window.innerWidth,
          this._scrollbarWidth = this._getScrollbarWidth()
      }
      ,
      e._setScrollbar = function() {
          if (e = this,
          this._isBodyOverflowing) {
              s(C.FIXED_CONTENT).each(function(t, n) {
                  var o = s(n)[0].style.paddingRight
                    , i = s(n).css("padding-right");
                  s(n).data("padding-right", o).css("padding-right", parseFloat(i) + e._scrollbarWidth + "px")
              }),
              s(C.STICKY_CONTENT).each(function(t, n) {
                  var o = s(n)[0].style.marginRight
                    , i = s(n).css("margin-right");
                  s(n).data("margin-right", o).css("margin-right", parseFloat(i) - e._scrollbarWidth + "px")
              }),
              s(C.NAVBAR_TOGGLER).each(function(t, n) {
                  var o = s(n)[0].style.marginRight
                    , i = s(n).css("margin-right");
                  s(n).data("margin-right", o).css("margin-right", parseFloat(i) + e._scrollbarWidth + "px")
              });
              var e, t = document.body.style.paddingRight, n = s(document.body).css("padding-right");
              s(document.body).data("padding-right", t).css("padding-right", parseFloat(n) + this._scrollbarWidth + "px")
          }
      }
      ,
      e._resetScrollbar = function() {
          s(C.FIXED_CONTENT).each(function(e, t) {
              var n = s(t).data("padding-right");
              "undefined" != typeof n && s(t).css("padding-right", n).removeData("padding-right")
          }),
          s(C.STICKY_CONTENT + ", " + C.NAVBAR_TOGGLER).each(function(e, t) {
              var n = s(t).data("margin-right");
              "undefined" != typeof n && s(t).css("margin-right", n).removeData("margin-right")
          });
          var e = s(document.body).data("padding-right");
          "undefined" != typeof e && s(document.body).css("padding-right", e).removeData("padding-right")
      }
      ,
      e._getScrollbarWidth = function() {
          var t, e = document.createElement("div");
          return e.className = nt,
          document.body.appendChild(e),
          t = e.getBoundingClientRect().width - e.clientWidth,
          document.body.removeChild(e),
          t
      }
      ,
      t._jQueryInterface = function(e, n) {
          return this.each(function() {
              var o = s(this).data(ge)
                , i = m({}, xe, s(this).data(), "object" == typeof e && e ? e : {});
              if (o || (o = new t(this,i),
              s(this).data(ge, o)),
              "string" == typeof e) {
                  if ("undefined" == typeof o[e])
                      throw new TypeError('No method named "' + e + '"');
                  o[e](n)
              } else
                  i.show && o.show(n)
          })
      }
      ,
      E(t, null, [{
          key: "VERSION",
          get: function() {
              return "4.1.1"
          }
      }, {
          key: "Default",
          get: function() {
              return xe
          }
      }]),
      t
  }(),
  s(document).on(h.CLICK_DATA_API, C.DATA_TOGGLE, function(e) {
      var t, i, a, n = this, o = r.getSelectorFromElement(this);
      o && (t = s(o)[0]),
      i = s(t).data(ge) ? "toggle" : m({}, s(t).data(), s(this).data()),
      "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault(),
      a = s(t).one(h.SHOW, function(e) {
          e.isDefaultPrevented() || a.one(h.HIDDEN, function() {
              s(n).is(":visible") && n.focus()
          })
      }),
      X._jQueryInterface.call(s(t), i, this)
  }),
  s.fn[R] = X._jQueryInterface,
  s.fn[R].Constructor = X,
  s.fn[R].noConflict = function() {
      return s.fn[R] = ot,
      X._jQueryInterface
  }
  ,
  X), Fe = (T = "tooltip",
  v = "." + (Re = "bs.tooltip"),
  dt = (o = t).fn[T],
  qe = "bs-tooltip",
  ht = new RegExp("(^|\\s)" + qe + "\\S+","g"),
  pt = {
      animation: !0,
      template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !(ft = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: "right",
          BOTTOM: "bottom",
          LEFT: "left"
      }),
      selector: !(mt = {
          animation: "boolean",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
          delay: "(number|object)",
          html: "boolean",
          selector: "(string|boolean)",
          placement: "(string|function)",
          offset: "(number|string)",
          container: "(string|element|boolean)",
          fallbackPlacement: "(string|array)",
          boundary: "(string|element)"
      }),
      placement: "top",
      offset: 0,
      container: !1,
      fallbackPlacement: "flip",
      boundary: "scrollParent"
  },
  Le = "out",
  bt = {
      HIDE: "hide" + v,
      HIDDEN: "hidden" + v,
      SHOW: (ee = "show") + v,
      SHOWN: "shown" + v,
      INSERTED: "inserted" + v,
      CLICK: "click" + v,
      FOCUSIN: "focusin" + v,
      FOCUSOUT: "focusout" + v,
      MOUSEENTER: "mouseenter" + v,
      MOUSELEAVE: "mouseleave" + v
  },
  ie = "fade",
  ne = "show",
  _t = ".tooltip-inner",
  wt = ".arrow",
  te = "hover",
  Me = "focus",
  Ct = "click",
  Et = "manual",
  me = function() {
      function t(e, t) {
          if ("undefined" == typeof n)
              throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
          this._isEnabled = !0,
          this._timeout = 0,
          this._hoverState = "",
          this._activeTrigger = {},
          this._popper = null,
          this.element = e,
          this.config = this._getConfig(t),
          this.tip = null,
          this._setListeners()
      }
      var e = t.prototype;
      return e.enable = function() {
          this._isEnabled = !0
      }
      ,
      e.disable = function() {
          this._isEnabled = !1
      }
      ,
      e.toggleEnabled = function() {
          this._isEnabled = !this._isEnabled
      }
      ,
      e.toggle = function(e) {
          if (this._isEnabled)
              if (e) {
                  var n = this.constructor.DATA_KEY
                    , t = o(e.currentTarget).data(n);
                  t || (t = new this.constructor(e.currentTarget,this._getDelegateConfig()),
                  o(e.currentTarget).data(n, t)),
                  t._activeTrigger.click = !t._activeTrigger.click,
                  t._isWithActiveTrigger() ? t._enter(null, t) : t._leave(null, t)
              } else {
                  if (o(this.getTipElement()).hasClass(ne))
                      return void this._leave(null, this);
                  this._enter(null, this)
              }
      }
      ,
      e.dispose = function() {
          clearTimeout(this._timeout),
          o.removeData(this.element, this.constructor.DATA_KEY),
          o(this.element).off(this.constructor.EVENT_KEY),
          o(this.element).closest(".modal").off("hide.bs.modal"),
          this.tip && o(this.tip).remove(),
          this._isEnabled = null,
          this._timeout = null,
          this._hoverState = null,
          (this._activeTrigger = null) !== this._popper && this._popper.destroy(),
          this._popper = null,
          this.element = null,
          this.config = null,
          this.tip = null
      }
      ,
      e.show = function() {
          if (e = this,
          "none" === o(this.element).css("display"))
              throw new Error("Please use show on visible elements");
          if (s = o.Event(this.constructor.Event.SHOW),
          this.isWithContent() && this._isEnabled) {
              if (o(this.element).trigger(s),
              c = o.contains(this.element.ownerDocument.documentElement, this.element),
              s.isDefaultPrevented() || !c)
                  return;
              var e, s, i, a, c, d, u, h, t = this.getTipElement(), l = r.getUID(this.constructor.NAME);
              t.setAttribute("id", l),
              this.element.setAttribute("aria-describedby", l),
              this.setContent(),
              this.config.animation && o(t).addClass(ie),
              d = "function" == typeof this.config.placement ? this.config.placement.call(this, t, this.element) : this.config.placement,
              i = this._getAttachment(d),
              this.addAttachmentClass(i),
              u = !1 === this.config.container ? document.body : o(this.config.container),
              o(t).data(this.constructor.DATA_KEY, this),
              o.contains(this.element.ownerDocument.documentElement, this.tip) || o(t).appendTo(u),
              o(this.element).trigger(this.constructor.Event.INSERTED),
              this._popper = new n(this.element,t,{
                  placement: i,
                  modifiers: {
                      offset: {
                          offset: this.config.offset
                      },
                      flip: {
                          behavior: this.config.fallbackPlacement
                      },
                      arrow: {
                          element: wt
                      },
                      preventOverflow: {
                          boundariesElement: this.config.boundary
                      }
                  },
                  onCreate: function(t) {
                      t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                  },
                  onUpdate: function(t) {
                      e._handlePopperPlacementChange(t)
                  }
              }),
              o(t).addClass(ne),
              "ontouchstart"in document.documentElement && o(document.body).children().on("mouseover", null, o.noop),
              a = function() {
                  e.config.animation && e._fixTransition();
                  var t = e._hoverState;
                  e._hoverState = null,
                  o(e.element).trigger(e.constructor.Event.SHOWN),
                  t === Le && e._leave(null, e)
              }
              ,
              o(this.tip).hasClass(ie) ? (h = r.getTransitionDurationFromElement(this.tip),
              o(this.tip).one(r.TRANSITION_END, a).emulateTransitionEnd(h)) : a()
          }
      }
      ,
      e.hide = function(e) {
          var a, t = this, n = this.getTipElement(), s = o.Event(this.constructor.Event.HIDE), i = function() {
              t._hoverState !== ee && n.parentNode && n.parentNode.removeChild(n),
              t._cleanTipClass(),
              t.element.removeAttribute("aria-describedby"),
              o(t.element).trigger(t.constructor.Event.HIDDEN),
              null !== t._popper && t._popper.destroy(),
              e && e()
          };
          o(this.element).trigger(s),
          !s.isDefaultPrevented() && (o(n).removeClass(ne),
          "ontouchstart"in document.documentElement && o(document.body).children().off("mouseover", null, o.noop),
          this._activeTrigger[Ct] = !1,
          this._activeTrigger[Me] = !1,
          this._activeTrigger[te] = !1,
          o(this.tip).hasClass(ie) ? (a = r.getTransitionDurationFromElement(n),
          o(n).one(r.TRANSITION_END, i).emulateTransitionEnd(a)) : i(),
          this._hoverState = "")
      }
      ,
      e.update = function() {
          null !== this._popper && this._popper.scheduleUpdate()
      }
      ,
      e.isWithContent = function() {
          return Boolean(this.getTitle())
      }
      ,
      e.addAttachmentClass = function(e) {
          o(this.getTipElement()).addClass(qe + "-" + e)
      }
      ,
      e.getTipElement = function() {
          return this.tip = this.tip || o(this.config.template)[0],
          this.tip
      }
      ,
      e.setContent = function() {
          var e = o(this.getTipElement());
          this.setElementContent(e.find(_t), this.getTitle()),
          e.removeClass(ie + " " + ne)
      }
      ,
      e.setElementContent = function(e, t) {
          var n = this.config.html;
          "object" == typeof t && (t.nodeType || t.jquery) ? n ? o(t).parent().is(e) || e.empty().append(t) : e.text(o(t).text()) : e[n ? "html" : "text"](t)
      }
      ,
      e.getTitle = function() {
          var e = this.element.getAttribute("data-original-title");
          return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
          e
      }
      ,
      e._getAttachment = function(e) {
          return ft[e.toUpperCase()]
      }
      ,
      e._setListeners = function() {
          var e = this;
          this.config.trigger.split(" ").forEach(function(t) {
              if ("click" === t)
                  o(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                      return e.toggle(t)
                  });
              else if (t !== Et) {
                  var n = t === te ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN
                    , s = t === te ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                  o(e.element).on(n, e.config.selector, function(t) {
                      return e._enter(t)
                  }).on(s, e.config.selector, function(t) {
                      return e._leave(t)
                  })
              }
              o(e.element).closest(".modal").on("hide.bs.modal", function() {
                  return e.hide()
              })
          }),
          this.config.selector ? this.config = m({}, this.config, {
              trigger: "manual",
              selector: ""
          }) : this._fixTitle()
      }
      ,
      e._fixTitle = function() {
          var e = typeof this.element.getAttribute("data-original-title");
          (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
          this.element.setAttribute("title", ""))
      }
      ,
      e._enter = function(e, t) {
          var n = this.constructor.DATA_KEY;
          (t = t || o(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget,this._getDelegateConfig()),
          o(e.currentTarget).data(n, t)),
          e && (t._activeTrigger["focusin" === e.type ? Me : te] = !0),
          o(t.getTipElement()).hasClass(ne) || t._hoverState === ee ? t._hoverState = ee : (clearTimeout(t._timeout),
          t._hoverState = ee,
          t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() {
              t._hoverState === ee && t.show()
          }, t.config.delay.show) : t.show())
      }
      ,
      e._leave = function(e, t) {
          var n = this.constructor.DATA_KEY;
          (t = t || o(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget,this._getDelegateConfig()),
          o(e.currentTarget).data(n, t)),
          e && (t._activeTrigger["focusout" === e.type ? Me : te] = !1),
          t._isWithActiveTrigger() || (clearTimeout(t._timeout),
          t._hoverState = Le,
          t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() {
              t._hoverState === Le && t.hide()
          }, t.config.delay.hide) : t.hide())
      }
      ,
      e._isWithActiveTrigger = function() {
          for (var e in this._activeTrigger)
              if (this._activeTrigger[e])
                  return !0;
          return !1
      }
      ,
      e._getConfig = function(e) {
          return "number" == typeof (e = m({}, this.constructor.Default, o(this.element).data(), "object" == typeof e && e ? e : {})).delay && (e.delay = {
              show: e.delay,
              hide: e.delay
          }),
          "number" == typeof e.title && (e.title = e.title.toString()),
          "number" == typeof e.content && (e.content = e.content.toString()),
          r.typeCheckConfig(T, e, this.constructor.DefaultType),
          e
      }
      ,
      e._getDelegateConfig = function() {
          var e, t = {};
          if (this.config)
              for (e in this.config)
                  this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
          return t
      }
      ,
      e._cleanTipClass = function() {
          var t = o(this.getTipElement())
            , e = t.attr("class").match(ht);
          null !== e && 0 < e.length && t.removeClass(e.join(""))
      }
      ,
      e._handlePopperPlacementChange = function(e) {
          this._cleanTipClass(),
          this.addAttachmentClass(this._getAttachment(e.placement))
      }
      ,
      e._fixTransition = function() {
          var e = this.getTipElement()
            , t = this.config.animation;
          null === e.getAttribute("x-placement") && (o(e).removeClass(ie),
          this.config.animation = !1,
          this.hide(),
          this.show(),
          this.config.animation = t)
      }
      ,
      t._jQueryInterface = function(e) {
          return this.each(function() {
              var n = o(this).data(Re)
                , s = "object" == typeof e && e;
              if ((n || !/dispose|hide/.test(e)) && (n || (n = new t(this,s),
              o(this).data(Re, n)),
              "string" == typeof e)) {
                  if ("undefined" == typeof n[e])
                      throw new TypeError('No method named "' + e + '"');
                  n[e]()
              }
          })
      }
      ,
      E(t, null, [{
          key: "VERSION",
          get: function() {
              return "4.1.1"
          }
      }, {
          key: "Default",
          get: function() {
              return pt
          }
      }, {
          key: "NAME",
          get: function() {
              return T
          }
      }, {
          key: "DATA_KEY",
          get: function() {
              return Re
          }
      }, {
          key: "Event",
          get: function() {
              return bt
          }
      }, {
          key: "EVENT_KEY",
          get: function() {
              return v
          }
      }, {
          key: "DefaultType",
          get: function() {
              return mt
          }
      }]),
      t
  }(),
  o.fn[T] = me._jQueryInterface,
  o.fn[T].Constructor = me,
  o.fn[T].noConflict = function() {
      return o.fn[T] = dt,
      me._jQueryInterface
  }
  ,
  me), Mn = (z = "popover",
  j = "." + (be = "bs.popover"),
  Tt = (y = t).fn[z],
  Ye = "bs-popover",
  Dt = new RegExp("(^|\\s)" + Ye + "\\S+","g"),
  Nt = m({}, Fe.Default, {
      placement: "right",
      trigger: "click",
      content: "",
      template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }),
  Lt = m({}, Fe.DefaultType, {
      content: "(string|element|function)"
  }),
  Rt = "fade",
  Ht = ".popover-header",
  It = ".popover-body",
  Bt = {
      HIDE: "hide" + j,
      HIDDEN: "hidden" + j,
      SHOW: (Pt = "show") + j,
      SHOWN: "shown" + j,
      INSERTED: "inserted" + j,
      CLICK: "click" + j,
      FOCUSIN: "focusin" + j,
      FOCUSOUT: "focusout" + j,
      MOUSEENTER: "mouseenter" + j,
      MOUSELEAVE: "mouseleave" + j
  },
  ae = function(e) {
      function t() {
          return e.apply(this, arguments) || this
      }
      o = e,
      (s = t).prototype = Object.create(o.prototype),
      (s.prototype.constructor = s).__proto__ = o;
      var s, o, n = t.prototype;
      return n.isWithContent = function() {
          return this.getTitle() || this._getContent()
      }
      ,
      n.addAttachmentClass = function(e) {
          y(this.getTipElement()).addClass(Ye + "-" + e)
      }
      ,
      n.getTipElement = function() {
          return this.tip = this.tip || y(this.config.template)[0],
          this.tip
      }
      ,
      n.setContent = function() {
          var e, t = y(this.getTipElement());
          this.setElementContent(t.find(Ht), this.getTitle()),
          e = this._getContent(),
          "function" == typeof e && (e = e.call(this.element)),
          this.setElementContent(t.find(It), e),
          t.removeClass(Rt + " " + Pt)
      }
      ,
      n._getContent = function() {
          return this.element.getAttribute("data-content") || this.config.content
      }
      ,
      n._cleanTipClass = function() {
          var t = y(this.getTipElement())
            , e = t.attr("class").match(Dt);
          null !== e && 0 < e.length && t.removeClass(e.join(""))
      }
      ,
      t._jQueryInterface = function(e) {
          return this.each(function() {
              var n = y(this).data(be)
                , s = "object" == typeof e ? e : null;
              if ((n || !/destroy|hide/.test(e)) && (n || (n = new t(this,s),
              y(this).data(be, n)),
              "string" == typeof e)) {
                  if ("undefined" == typeof n[e])
                      throw new TypeError('No method named "' + e + '"');
                  n[e]()
              }
          })
      }
      ,
      E(t, null, [{
          key: "VERSION",
          get: function() {
              return "4.1.1"
          }
      }, {
          key: "Default",
          get: function() {
              return Nt
          }
      }, {
          key: "NAME",
          get: function() {
              return z
          }
      }, {
          key: "DATA_KEY",
          get: function() {
              return be
          }
      }, {
          key: "Event",
          get: function() {
              return Bt
          }
      }, {
          key: "EVENT_KEY",
          get: function() {
              return j
          }
      }, {
          key: "DefaultType",
          get: function() {
              return Lt
          }
      }]),
      t
  }(Fe),
  y.fn[z] = ae._jQueryInterface,
  y.fn[z].Constructor = ae,
  y.fn[z].noConflict = function() {
      return y.fn[z] = Tt,
      ae._jQueryInterface
  }
  ,
  ae), Fn = (M = "scrollspy",
  fe = "." + (Ne = "bs.scrollspy"),
  qt = (d = t).fn[M],
  Ke = {
      offset: 10,
      method: "auto",
      target: ""
  },
  Gt = {
      offset: "number",
      method: "string",
      target: "(string|element)"
  },
  Se = {
      ACTIVATE: "activate" + fe,
      SCROLL: "scroll" + fe,
      LOAD_DATA_API: "load" + fe + ".data-api"
  },
  Qt = "dropdown-item",
  D = "active",
  p = {
      DATA_SPY: '[data-spy="scroll"]',
      ACTIVE: ".active",
      NAV_LIST_GROUP: ".nav, .list-group",
      NAV_LINKS: ".nav-link",
      NAV_ITEMS: ".nav-item",
      LIST_ITEMS: ".list-group-item",
      DROPDOWN: ".dropdown",
      DROPDOWN_ITEMS: ".dropdown-item",
      DROPDOWN_TOGGLE: ".dropdown-toggle"
  },
  en = "offset",
  Ve = "position",
  K = function() {
      function t(e, t) {
          var n = this;
          this._element = e,
          this._scrollElement = "BODY" === e.tagName ? window : e,
          this._config = this._getConfig(t),
          this._selector = this._config.target + " " + p.NAV_LINKS + "," + this._config.target + " " + p.LIST_ITEMS + "," + this._config.target + " " + p.DROPDOWN_ITEMS,
          this._offsets = [],
          this._targets = [],
          this._activeTarget = null,
          this._scrollHeight = 0,
          d(this._scrollElement).on(Se.SCROLL, function(e) {
              return n._process(e)
          }),
          this.refresh(),
          this._process()
      }
      var e = t.prototype;
      return e.refresh = function() {
          var e = this
            , n = this._scrollElement === this._scrollElement.window ? en : Ve
            , t = "auto" === this._config.method ? n : this._config.method
            , s = t === Ve ? this._getScrollTop() : 0;
          this._offsets = [],
          this._targets = [],
          this._scrollHeight = this._getScrollHeight(),
          d.makeArray(d(this._selector)).map(function(e) {
              var n, i, o = r.getSelectorFromElement(e);
              return (o && (n = d(o)[0]),
              n) && (i = n.getBoundingClientRect(),
              i.width || i.height) ? [d(n)[t]().top + s, o] : null
          }).filter(function(e) {
              return e
          }).sort(function(e, t) {
              return e[0] - t[0]
          }).forEach(function(t) {
              e._offsets.push(t[0]),
              e._targets.push(t[1])
          })
      }
      ,
      e.dispose = function() {
          d.removeData(this._element, Ne),
          d(this._scrollElement).off(fe),
          this._element = null,
          this._scrollElement = null,
          this._config = null,
          this._selector = null,
          this._offsets = null,
          this._targets = null,
          this._activeTarget = null,
          this._scrollHeight = null
      }
      ,
      e._getConfig = function(e) {
          if ("string" != typeof (e = m({}, Ke, "object" == typeof e && e ? e : {})).target) {
              var t = d(e.target).attr("id");
              t || (t = r.getUID(M),
              d(e.target).attr("id", t)),
              e.target = "#" + t
          }
          return r.typeCheckConfig(M, e, Gt),
          e
      }
      ,
      e._getScrollTop = function() {
          return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
      }
      ,
      e._getScrollHeight = function() {
          return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
      }
      ,
      e._getOffsetHeight = function() {
          return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
      }
      ,
      e._process = function() {
          var e, n, t = this._getScrollTop() + this._config.offset, s = this._getScrollHeight(), o = this._config.offset + s - this._getOffsetHeight();
          if (this._scrollHeight !== s && this.refresh(),
          o <= t)
              n = this._targets[this._targets.length - 1],
              this._activeTarget !== n && this._activate(n);
          else {
              if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0])
                  return this._activeTarget = null,
                  void this._clear();
              for (e = this._offsets.length; e--; )
                  this._activeTarget !== this._targets[e] && t >= this._offsets[e] && ("undefined" == typeof this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e])
          }
      }
      ,
      e._activate = function(e) {
          this._activeTarget = e,
          this._clear();
          var n = this._selector.split(",")
            , n = n.map(function(t) {
              return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
          })
            , t = d(n.join(","));
          t.hasClass(Qt) ? (t.closest(p.DROPDOWN).find(p.DROPDOWN_TOGGLE).addClass(D),
          t.addClass(D)) : (t.addClass(D),
          t.parents(p.NAV_LIST_GROUP).prev(p.NAV_LINKS + ", " + p.LIST_ITEMS).addClass(D),
          t.parents(p.NAV_LIST_GROUP).prev(p.NAV_ITEMS).children(p.NAV_LINKS).addClass(D)),
          d(this._scrollElement).trigger(Se.ACTIVATE, {
              relatedTarget: e
          })
      }
      ,
      e._clear = function() {
          d(this._selector).filter(p.ACTIVE).removeClass(D)
      }
      ,
      t._jQueryInterface = function(e) {
          return this.each(function() {
              var n = d(this).data(Ne);
              if (n || (n = new t(this,"object" == typeof e && e),
              d(this).data(Ne, n)),
              "string" == typeof e) {
                  if ("undefined" == typeof n[e])
                      throw new TypeError('No method named "' + e + '"');
                  n[e]()
              }
          })
      }
      ,
      E(t, null, [{
          key: "VERSION",
          get: function() {
              return "4.1.1"
          }
      }, {
          key: "Default",
          get: function() {
              return Ke
          }
      }]),
      t
  }(),
  d(window).on(Se.LOAD_DATA_API, function() {
      for (var e, t = d.makeArray(d(p.DATA_SPY)), n = t.length; n--; )
          e = d(t[n]),
          K._jQueryInterface.call(e, e.data())
  }),
  d.fn[M] = K._jQueryInterface,
  d.fn[M].Constructor = K,
  d.fn[M].noConflict = function() {
      return d.fn[M] = qt,
      K._jQueryInterface
  }
  ,
  K), Tn = (Q = "." + (we = "bs.tab"),
  rn = (l = t).fn.tab,
  Z = {
      HIDE: "hide" + Q,
      HIDDEN: "hidden" + Q,
      SHOW: "show" + Q,
      SHOWN: "shown" + Q,
      CLICK_DATA_API: "click" + Q + ".data-api"
  },
  ln = "dropdown-menu",
  W = "active",
  un = "disabled",
  hn = "fade",
  We = "show",
  fn = ".dropdown",
  pn = ".nav, .list-group",
  $e = ".active",
  Be = "> li > .active",
  bn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
  jn = ".dropdown-toggle",
  yn = "> .dropdown-menu .active",
  J = function() {
      function e(e) {
          this._element = e
      }
      var t = e.prototype;
      return t.show = function() {
          if (s = this,
          !(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && l(this._element).hasClass(W) || l(this._element).hasClass(un))) {
              var e, t, s, o, i, a, d, n = l(this._element).closest(pn)[0], c = r.getSelectorFromElement(this._element);
              n && (d = "UL" === n.nodeName ? Be : $e,
              e = (e = l.makeArray(l(n).find(d)))[e.length - 1]),
              o = l.Event(Z.HIDE, {
                  relatedTarget: this._element
              }),
              i = l.Event(Z.SHOW, {
                  relatedTarget: e
              }),
              (e && l(e).trigger(o),
              l(this._element).trigger(i),
              !i.isDefaultPrevented() && !o.isDefaultPrevented()) && (c && (t = l(c)[0]),
              this._activate(this._element, n),
              a = function() {
                  var t = l.Event(Z.HIDDEN, {
                      relatedTarget: s._element
                  })
                    , n = l.Event(Z.SHOWN, {
                      relatedTarget: e
                  });
                  l(e).trigger(t),
                  l(s._element).trigger(n)
              }
              ,
              t ? this._activate(t, t.parentNode, a) : a())
          }
      }
      ,
      t.dispose = function() {
          l.removeData(this._element, we),
          this._element = null
      }
      ,
      t._activate = function(e, t, n) {
          var i, a = this, s = ("UL" === t.nodeName ? l(t).find(Be) : l(t).children($e))[0], c = n && s && l(s).hasClass(hn), o = function() {
              return a._transitionComplete(e, s, n)
          };
          s && c ? (i = r.getTransitionDurationFromElement(s),
          l(s).one(r.TRANSITION_END, o).emulateTransitionEnd(i)) : o()
      }
      ,
      t._transitionComplete = function(e, t, n) {
          if (t) {
              l(t).removeClass(We + " " + W);
              var s, o = l(t.parentNode).find(yn)[0];
              o && l(o).removeClass(W),
              "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
          }
          (l(e).addClass(W),
          "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
          r.reflow(e),
          l(e).addClass(We),
          e.parentNode && l(e.parentNode).hasClass(ln)) && (s = l(e).closest(fn)[0],
          s && l(s).find(jn).addClass(W),
          e.setAttribute("aria-expanded", !0)),
          n && n()
      }
      ,
      e._jQueryInterface = function(t) {
          return this.each(function() {
              var s = l(this)
                , n = s.data(we);
              if (n || (n = new e(this),
              s.data(we, n)),
              "string" == typeof t) {
                  if ("undefined" == typeof n[t])
                      throw new TypeError('No method named "' + t + '"');
                  n[t]()
              }
          })
      }
      ,
      E(e, null, [{
          key: "VERSION",
          get: function() {
              return "4.1.1"
          }
      }]),
      e
  }(),
  l(document).on(Z.CLICK_DATA_API, bn, function(e) {
      e.preventDefault(),
      J._jQueryInterface.call(l(this), "show")
  }),
  l.fn.tab = J._jQueryInterface,
  l.fn.tab.Constructor = J,
  l.fn.tab.noConflict = function() {
      return l.fn.tab = rn,
      J._jQueryInterface
  }
  ,
  J);
  !function(e) {
      if ("undefined" == typeof e)
          throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
      var t = e.fn.jquery.split(" ")[0].split(".");
      if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0])
          throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
  }(t),
  e.Util = r,
  e.Alert = xn,
  e.Button = Cn,
  e.Carousel = En,
  e.Collapse = kn,
  e.Dropdown = An,
  e.Modal = Sn,
  e.Popover = Mn,
  e.Scrollspy = Fn,
  e.Tab = Tn,
  e.Tooltip = Fe,
  Object.defineProperty(e, "__esModule", {
      value: !0
  })
}),
!function(e) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
  "use strict";
  var t = window.Slick || {};
  (t = function() {
      var t = 0;
      return function(n, s) {
          var i, o = this;
          o.defaults = {
              accessibility: !0,
              adaptiveHeight: !1,
              appendArrows: e(n),
              appendDots: e(n),
              arrows: !0,
              asNavFor: null,
              prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
              nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
              autoplay: !1,
              autoplaySpeed: 3e3,
              centerMode: !1,
              centerPadding: "50px",
              cssEase: "ease",
              customPaging: function(t, n) {
                  return e('<button type="button" />').text(n + 1)
              },
              dots: !1,
              dotsClass: "slick-dots",
              draggable: !0,
              easing: "linear",
              edgeFriction: .35,
              fade: !1,
              focusOnSelect: !1,
              focusOnChange: !1,
              infinite: !0,
              initialSlide: 0,
              lazyLoad: "ondemand",
              mobileFirst: !1,
              pauseOnHover: !0,
              pauseOnFocus: !0,
              pauseOnDotsHover: !1,
              respondTo: "window",
              responsive: null,
              rows: 1,
              rtl: !1,
              slide: "",
              slidesPerRow: 1,
              slidesToShow: 1,
              slidesToScroll: 1,
              speed: 500,
              swipe: !0,
              swipeToSlide: !1,
              touchMove: !0,
              touchThreshold: 5,
              useCSS: !0,
              useTransform: !0,
              variableWidth: !1,
              vertical: !1,
              verticalSwiping: !1,
              waitForAnimate: !0,
              zIndex: 1e3
          },
          o.initials = {
              animating: !1,
              dragging: !1,
              autoPlayTimer: null,
              currentDirection: 0,
              currentLeft: null,
              currentSlide: 0,
              direction: 1,
              $dots: null,
              listWidth: null,
              listHeight: null,
              loadIndex: 0,
              $nextArrow: null,
              $prevArrow: null,
              scrolling: !1,
              slideCount: null,
              slideWidth: null,
              $slideTrack: null,
              $slides: null,
              sliding: !1,
              slideOffset: 0,
              swipeLeft: null,
              swiping: !1,
              $list: null,
              touchObject: {},
              transformsEnabled: !1,
              unslicked: !1
          },
          e.extend(o, o.initials),
          o.activeBreakpoint = null,
          o.animType = null,
          o.animProp = null,
          o.breakpoints = [],
          o.breakpointSettings = [],
          o.cssTransitions = !1,
          o.focussed = !1,
          o.interrupted = !1,
          o.hidden = "hidden",
          o.paused = !0,
          o.positionProp = null,
          o.respondTo = null,
          o.rowCount = 1,
          o.shouldClick = !0,
          o.$slider = e(n),
          o.$slidesCache = null,
          o.transformType = null,
          o.transitionType = null,
          o.visibilityChange = "visibilitychange",
          o.windowWidth = 0,
          o.windowTimer = null,
          i = e(n).data("slick") || {},
          o.options = e.extend({}, o.defaults, s, i),
          o.currentSlide = o.options.initialSlide,
          o.originalSettings = o.options,
          void 0 !== document.mozHidden ? (o.hidden = "mozHidden",
          o.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (o.hidden = "webkitHidden",
          o.visibilityChange = "webkitvisibilitychange"),
          o.autoPlay = e.proxy(o.autoPlay, o),
          o.autoPlayClear = e.proxy(o.autoPlayClear, o),
          o.autoPlayIterator = e.proxy(o.autoPlayIterator, o),
          o.changeSlide = e.proxy(o.changeSlide, o),
          o.clickHandler = e.proxy(o.clickHandler, o),
          o.selectHandler = e.proxy(o.selectHandler, o),
          o.setPosition = e.proxy(o.setPosition, o),
          o.swipeHandler = e.proxy(o.swipeHandler, o),
          o.dragHandler = e.proxy(o.dragHandler, o),
          o.keyHandler = e.proxy(o.keyHandler, o),
          o.instanceUid = t++,
          o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
          o.registerBreakpoints(),
          o.init(!0)
      }
  }()).prototype.activateADA = function() {
      this.$slideTrack.find(".slick-active").attr({
          "aria-hidden": "false"
      }).find("a, input, button, select").attr({
          tabindex: "0"
      })
  }
  ,
  t.prototype.addSlide = t.prototype.slickAdd = function(t, n, s) {
      var o = this;
      if ("boolean" == typeof n)
          s = n,
          n = null;
      else if (n < 0 || n >= o.slideCount)
          return !1;
      o.unload(),
      "number" == typeof n ? 0 === n && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : s ? e(t).insertBefore(o.$slides.eq(n)) : e(t).insertAfter(o.$slides.eq(n)) : !0 === s ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack),
      o.$slides = o.$slideTrack.children(this.options.slide),
      o.$slideTrack.children(this.options.slide).detach(),
      o.$slideTrack.append(o.$slides),
      o.$slides.each(function(t, n) {
          e(n).attr("data-slick-index", t)
      }),
      o.$slidesCache = o.$slides,
      o.reinit()
  }
  ,
  t.prototype.animateHeight = function() {
      var t, e = this;
      1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical && (t = e.$slides.eq(e.currentSlide).outerHeight(!0),
      e.$list.animate({
          height: t
      }, e.options.speed))
  }
  ,
  t.prototype.animateSlide = function(t, n) {
      var o = {}
        , s = this;
      s.animateHeight(),
      !0 === s.options.rtl && !1 === s.options.vertical && (t = -t),
      !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
          left: t
      }, s.options.speed, s.options.easing, n) : s.$slideTrack.animate({
          top: t
      }, s.options.speed, s.options.easing, n) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
      e({
          animStart: s.currentLeft
      }).animate({
          animStart: t
      }, {
          duration: s.options.speed,
          easing: s.options.easing,
          step: function(e) {
              e = Math.ceil(e),
              !1 === s.options.vertical ? (o[s.animType] = "translate(" + e + "px, 0px)",
              s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + e + "px)",
              s.$slideTrack.css(o))
          },
          complete: function() {
              n && n.call()
          }
      })) : (s.applyTransition(),
      t = Math.ceil(t),
      !1 === s.options.vertical ? o[s.animType] = "translate3d(" + t + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + t + "px, 0px)",
      s.$slideTrack.css(o),
      n && setTimeout(function() {
          s.disableTransition(),
          n.call()
      }, s.options.speed))
  }
  ,
  t.prototype.getNavTarget = function() {
      var n = this
        , t = n.options.asNavFor;
      return t && null !== t && (t = e(t).not(n.$slider)),
      t
  }
  ,
  t.prototype.asNavFor = function(t) {
      var n = this.getNavTarget();
      null !== n && "object" == typeof n && n.each(function() {
          var n = e(this).slick("getSlick");
          n.unslicked || n.slideHandler(t, !0)
      })
  }
  ,
  t.prototype.applyTransition = function(e) {
      var t = this
        , n = {};
      !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase,
      !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
  }
  ,
  t.prototype.autoPlay = function() {
      var e = this;
      e.autoPlayClear(),
      e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
  }
  ,
  t.prototype.autoPlayClear = function() {
      var e = this;
      e.autoPlayTimer && clearInterval(e.autoPlayTimer)
  }
  ,
  t.prototype.autoPlayIterator = function() {
      var e = this
        , t = e.currentSlide + e.options.slidesToScroll;
      e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll,
      e.currentSlide - 1 == 0 && (e.direction = 1))),
      e.slideHandler(t))
  }
  ,
  t.prototype.buildArrows = function() {
      var t = this;
      !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"),
      t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"),
      t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
      t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
      t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows),
      t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows),
      !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
          "aria-disabled": "true",
          tabindex: "-1"
      }))
  }
  ,
  t.prototype.buildDots = function() {
      var n, s, t = this;
      if (!0 === t.options.dots) {
          for (t.$slider.addClass("slick-dotted"),
          s = e("<ul />").addClass(t.options.dotsClass),
          n = 0; n <= t.getDotCount(); n += 1)
              s.append(e("<li />").append(t.options.customPaging.call(this, t, n)));
          t.$dots = s.appendTo(t.options.appendDots),
          t.$dots.find("li").first().addClass("slick-active")
      }
  }
  ,
  t.prototype.buildOut = function() {
      var t = this;
      t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
      t.slideCount = t.$slides.length,
      t.$slides.each(function(t, n) {
          e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "")
      }),
      t.$slider.addClass("slick-slider"),
      t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(),
      t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(),
      t.$slideTrack.css("opacity", 0),
      !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1),
      e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
      t.setupInfinite(),
      t.buildArrows(),
      t.buildDots(),
      t.updateDots(),
      t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
      !0 === t.options.draggable && t.$list.addClass("draggable")
  }
  ,
  t.prototype.buildRows = function() {
      var t, n, s, o, i, a, r, c, l, d, e = this;
      if (i = document.createDocumentFragment(),
      o = e.$slider.children(),
      e.options.rows > 1) {
          for (a = e.options.slidesPerRow * e.options.rows,
          d = Math.ceil(o.length / a),
          t = 0; t < d; t++) {
              r = document.createElement("div");
              for (n = 0; n < e.options.rows; n++) {
                  c = document.createElement("div");
                  for (s = 0; s < e.options.slidesPerRow; s++)
                      l = t * a + (n * e.options.slidesPerRow + s),
                      o.get(l) && c.appendChild(o.get(l));
                  r.appendChild(c)
              }
              i.appendChild(r)
          }
          e.$slider.empty().append(i),
          e.$slider.children().children().children().css({
              width: 100 / e.options.slidesPerRow + "%",
              display: "inline-block"
          })
      }
  }
  ,
  t.prototype.checkResponsive = function(t, n) {
      var o, i, a, s = this, r = !1, c = s.$slider.width(), l = window.innerWidth || e(window).width();
      if ("window" === s.respondTo ? a = l : "slider" === s.respondTo ? a = c : "min" === s.respondTo && (a = Math.min(l, c)),
      s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
          o = null;
          for (i in s.breakpoints)
              s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? a < s.breakpoints[i] && (o = s.breakpoints[i]) : a > s.breakpoints[i] && (o = s.breakpoints[i]));
          null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || n) && (s.activeBreakpoint = o,
          "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]),
          !0 === t && (s.currentSlide = s.options.initialSlide),
          s.refresh(t)),
          r = o) : (s.activeBreakpoint = o,
          "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]),
          !0 === t && (s.currentSlide = s.options.initialSlide),
          s.refresh(t)),
          r = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null,
          s.options = s.originalSettings,
          !0 === t && (s.currentSlide = s.options.initialSlide),
          s.refresh(t),
          r = o),
          t || !1 === r || s.$slider.trigger("breakpoint", [s, r])
      }
  }
  ,
  t.prototype.changeSlide = function(t, n) {
      var i, a, r, c, s = this, o = e(t.currentTarget);
      switch (o.is("a") && t.preventDefault(),
      o.is("li") || (o = o.closest("li")),
      r = s.slideCount % s.options.slidesToScroll != 0,
      i = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll,
      t.data.message) {
      case "previous":
          a = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i,
          s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - a, !1, n);
          break;
      case "next":
          a = 0 === i ? s.options.slidesToScroll : i,
          s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + a, !1, n);
          break;
      case "index":
          c = 0 === t.data.index ? 0 : t.data.index || o.index() * s.options.slidesToScroll,
          s.slideHandler(s.checkNavigable(c), !1, n),
          o.children().trigger("focus");
          break;
      default:
          return
      }
  }
  ,
  t.prototype.checkNavigable = function(e) {
      var t, n, s;
      if (t = this.getNavigableIndexes(),
      n = 0,
      e > t[t.length - 1])
          e = t[t.length - 1];
      else
          for (s in t) {
              if (e < t[s]) {
                  e = n;
                  break
              }
              n = t[s]
          }
      return e
  }
  ,
  t.prototype.cleanUpEvents = function() {
      var t = this;
      t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)),
      !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)),
      t.$slider.off("focus.slick blur.slick"),
      !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
      t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide),
      !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler),
      t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))),
      t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
      t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
      t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
      t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
      t.$list.off("click.slick", t.clickHandler),
      e(document).off(t.visibilityChange, t.visibility),
      t.cleanUpSlideEvents(),
      !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler),
      !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler),
      e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange),
      e(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
      e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault),
      e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
  }
  ,
  t.prototype.cleanUpSlideEvents = function() {
      var t = this;
      t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
      t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
  }
  ,
  t.prototype.cleanUpRows = function() {
      var t, e = this;
      e.options.rows > 1 && ((t = e.$slides.children().children()).removeAttr("style"),
      e.$slider.empty().append(t))
  }
  ,
  t.prototype.clickHandler = function(e) {
      !1 === this.shouldClick && (e.stopImmediatePropagation(),
      e.stopPropagation(),
      e.preventDefault())
  }
  ,
  t.prototype.destroy = function(t) {
      var n = this;
      n.autoPlayClear(),
      n.touchObject = {},
      n.cleanUpEvents(),
      e(".slick-cloned", n.$slider).detach(),
      n.$dots && n.$dots.remove(),
      n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
      n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()),
      n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
      n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()),
      n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
          e(this).attr("style", e(this).data("originalStyling"))
      }),
      n.$slideTrack.children(this.options.slide).detach(),
      n.$slideTrack.detach(),
      n.$list.detach(),
      n.$slider.append(n.$slides)),
      n.cleanUpRows(),
      n.$slider.removeClass("slick-slider"),
      n.$slider.removeClass("slick-initialized"),
      n.$slider.removeClass("slick-dotted"),
      n.unslicked = !0,
      t || n.$slider.trigger("destroy", [n])
  }
  ,
  t.prototype.disableTransition = function(e) {
      var t = this
        , n = {};
      n[t.transitionType] = "",
      !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
  }
  ,
  t.prototype.fadeSlide = function(e, t) {
      var n = this;
      !1 === n.cssTransitions ? (n.$slides.eq(e).css({
          zIndex: n.options.zIndex
      }),
      n.$slides.eq(e).animate({
          opacity: 1
      }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e),
      n.$slides.eq(e).css({
          opacity: 1,
          zIndex: n.options.zIndex
      }),
      t && setTimeout(function() {
          n.disableTransition(e),
          t.call()
      }, n.options.speed))
  }
  ,
  t.prototype.fadeSlideOut = function(e) {
      var t = this;
      !1 === t.cssTransitions ? t.$slides.eq(e).animate({
          opacity: 0,
          zIndex: t.options.zIndex - 2
      }, t.options.speed, t.options.easing) : (t.applyTransition(e),
      t.$slides.eq(e).css({
          opacity: 0,
          zIndex: t.options.zIndex - 2
      }))
  }
  ,
  t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
      var t = this;
      null !== e && (t.$slidesCache = t.$slides,
      t.unload(),
      t.$slideTrack.children(this.options.slide).detach(),
      t.$slidesCache.filter(e).appendTo(t.$slideTrack),
      t.reinit())
  }
  ,
  t.prototype.focusHandler = function() {
      var t = this;
      t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(n) {
          n.stopImmediatePropagation();
          var s = e(this);
          setTimeout(function() {
              t.options.pauseOnFocus && (t.focussed = s.is(":focus"),
              t.autoPlay())
          }, 0)
      })
  }
  ,
  t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
      return this.currentSlide
  }
  ,
  t.prototype.getDotCount = function() {
      var e = this
        , n = 0
        , s = 0
        , t = 0;
      if (!0 === e.options.infinite)
          if (e.slideCount <= e.options.slidesToShow)
              ++t;
          else
              for (; n < e.slideCount; )
                  ++t,
                  n = s + e.options.slidesToScroll,
                  s += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
      else if (!0 === e.options.centerMode)
          t = e.slideCount;
      else if (e.options.asNavFor)
          for (; n < e.slideCount; )
              ++t,
              n = s + e.options.slidesToScroll,
              s += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
      else
          t = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
      return t - 1
  }
  ,
  t.prototype.getLeft = function(e) {
      var n, s, i, a, t = this, o = 0;
      return t.slideOffset = 0,
      s = t.$slides.first().outerHeight(!0),
      !0 === t.options.infinite ? (t.slideCount > t.options.slidesToShow && (t.slideOffset = t.slideWidth * t.options.slidesToShow * -1,
      a = -1,
      !0 === t.options.vertical && !0 === t.options.centerMode && (2 === t.options.slidesToShow ? a = -1.5 : 1 === t.options.slidesToShow && (a = -2)),
      o = s * t.options.slidesToShow * a),
      t.slideCount % t.options.slidesToScroll != 0 && e + t.options.slidesToScroll > t.slideCount && t.slideCount > t.options.slidesToShow && (e > t.slideCount ? (t.slideOffset = (t.options.slidesToShow - (e - t.slideCount)) * t.slideWidth * -1,
      o = (t.options.slidesToShow - (e - t.slideCount)) * s * -1) : (t.slideOffset = t.slideCount % t.options.slidesToScroll * t.slideWidth * -1,
      o = t.slideCount % t.options.slidesToScroll * s * -1))) : e + t.options.slidesToShow > t.slideCount && (t.slideOffset = (e + t.options.slidesToShow - t.slideCount) * t.slideWidth,
      o = (e + t.options.slidesToShow - t.slideCount) * s),
      t.slideCount <= t.options.slidesToShow && (t.slideOffset = 0,
      o = 0),
      !0 === t.options.centerMode && t.slideCount <= t.options.slidesToShow ? t.slideOffset = t.slideWidth * Math.floor(t.options.slidesToShow) / 2 - t.slideWidth * t.slideCount / 2 : !0 === t.options.centerMode && !0 === t.options.infinite ? t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2) - t.slideWidth : !0 === t.options.centerMode && (t.slideOffset = 0,
      t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2)),
      i = !1 === t.options.vertical ? e * t.slideWidth * -1 + t.slideOffset : e * s * -1 + o,
      !0 === t.options.variableWidth && (n = t.slideCount <= t.options.slidesToShow || !1 === t.options.infinite ? t.$slideTrack.children(".slick-slide").eq(e) : t.$slideTrack.children(".slick-slide").eq(e + t.options.slidesToShow),
      i = !0 === t.options.rtl ? n[0] ? -1 * (t.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0,
      !0 === t.options.centerMode && (n = t.slideCount <= t.options.slidesToShow || !1 === t.options.infinite ? t.$slideTrack.children(".slick-slide").eq(e) : t.$slideTrack.children(".slick-slide").eq(e + t.options.slidesToShow + 1),
      i = !0 === t.options.rtl ? n[0] ? -1 * (t.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0,
      i += (t.$list.width() - n.outerWidth()) / 2)),
      i
  }
  ,
  t.prototype.getOption = t.prototype.slickGetOption = function(e) {
      return this.options[e]
  }
  ,
  t.prototype.getNavigableIndexes = function() {
      var n, e = this, t = 0, s = 0, o = [];
      for (!1 === e.options.infinite ? n = e.slideCount : (t = -1 * e.options.slidesToScroll,
      s = -1 * e.options.slidesToScroll,
      n = 2 * e.slideCount); t < n; )
          o.push(t),
          t = s + e.options.slidesToScroll,
          s += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
      return o
  }
  ,
  t.prototype.getSlick = function() {
      return this
  }
  ,
  t.prototype.getSlideCount = function() {
      var n, s, t = this;
      return s = !0 === t.options.centerMode ? t.slideWidth * Math.floor(t.options.slidesToShow / 2) : 0,
      !0 === t.options.swipeToSlide ? (t.$slideTrack.find(".slick-slide").each(function(o, i) {
          if (i.offsetLeft - s + e(i).outerWidth() / 2 > -1 * t.swipeLeft)
              return n = i,
              !1
      }),
      Math.abs(e(n).attr("data-slick-index") - t.currentSlide) || 1) : t.options.slidesToScroll
  }
  ,
  t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
      this.changeSlide({
          data: {
              message: "index",
              index: parseInt(e)
          }
      }, t)
  }
  ,
  t.prototype.init = function(t) {
      var n = this;
      e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"),
      n.buildRows(),
      n.buildOut(),
      n.setProps(),
      n.startLoad(),
      n.loadSlider(),
      n.initializeEvents(),
      n.updateArrows(),
      n.updateDots(),
      n.checkResponsive(!0),
      n.focusHandler()),
      t && n.$slider.trigger("init", [n]),
      !0 === n.options.accessibility && n.initADA(),
      n.options.autoplay && (n.paused = !1,
      n.autoPlay())
  }
  ,
  t.prototype.initADA = function() {
      var n, o, t = this, i = Math.ceil(t.slideCount / t.options.slidesToShow), s = t.getNavigableIndexes().filter(function(e) {
          return e >= 0 && e < t.slideCount
      });
      t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
          "aria-hidden": "true",
          tabindex: "-1"
      }).find("a, input, button, select").attr({
          tabindex: "-1"
      }),
      null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(n) {
          var o = s.indexOf(n);
          e(this).attr({
              role: "tabpanel",
              id: "slick-slide" + t.instanceUid + n,
              tabindex: -1
          }),
          -1 !== o && e(this).attr({
              "aria-describedby": "slick-slide-control" + t.instanceUid + o
          })
      }),
      t.$dots.attr("role", "tablist").find("li").each(function(n) {
          var o = s[n];
          e(this).attr({
              role: "presentation"
          }),
          e(this).find("button").first().attr({
              role: "tab",
              id: "slick-slide-control" + t.instanceUid + n,
              "aria-controls": "slick-slide" + t.instanceUid + o,
              "aria-label": n + 1 + " of " + i,
              "aria-selected": null,
              tabindex: "-1"
          })
      }).eq(t.currentSlide).find("button").attr({
          "aria-selected": "true",
          tabindex: "0"
      }).end());
      for (n = t.currentSlide,
      o = n + t.options.slidesToShow; n < o; n++)
          t.$slides.eq(n).attr("tabindex", 0);
      t.activateADA()
  }
  ,
  t.prototype.initArrowEvents = function() {
      var e = this;
      !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
          message: "previous"
      }, e.changeSlide),
      e.$nextArrow.off("click.slick").on("click.slick", {
          message: "next"
      }, e.changeSlide),
      !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler),
      e.$nextArrow.on("keydown.slick", e.keyHandler)))
  }
  ,
  t.prototype.initDotEvents = function() {
      var t = this;
      !0 === t.options.dots && (e("li", t.$dots).on("click.slick", {
          message: "index"
      }, t.changeSlide),
      !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)),
      !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
  }
  ,
  t.prototype.initSlideEvents = function() {
      var t = this;
      t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
      t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
  }
  ,
  t.prototype.initializeEvents = function() {
      var t = this;
      t.initArrowEvents(),
      t.initDotEvents(),
      t.initSlideEvents(),
      t.$list.on("touchstart.slick mousedown.slick", {
          action: "start"
      }, t.swipeHandler),
      t.$list.on("touchmove.slick mousemove.slick", {
          action: "move"
      }, t.swipeHandler),
      t.$list.on("touchend.slick mouseup.slick", {
          action: "end"
      }, t.swipeHandler),
      t.$list.on("touchcancel.slick mouseleave.slick", {
          action: "end"
      }, t.swipeHandler),
      t.$list.on("click.slick", t.clickHandler),
      e(document).on(t.visibilityChange, e.proxy(t.visibility, t)),
      !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler),
      !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
      e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)),
      e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)),
      e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault),
      e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
      e(t.setPosition)
  }
  ,
  t.prototype.initUI = function() {
      var e = this;
      !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(),
      e.$nextArrow.show()),
      !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
  }
  ,
  t.prototype.keyHandler = function(e) {
      var t = this;
      e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
          data: {
              message: !0 === t.options.rtl ? "next" : "previous"
          }
      }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
          data: {
              message: !0 === t.options.rtl ? "previous" : "next"
          }
      }))
  }
  ,
  t.prototype.lazyLoad = function() {
      function i(n) {
          e("img[data-lazy]", n).each(function() {
              var n = e(this)
                , s = e(this).attr("data-lazy")
                , i = e(this).attr("data-srcset")
                , a = e(this).attr("data-sizes") || t.$slider.attr("data-sizes")
                , o = document.createElement("img");
              o.onload = function() {
                  n.animate({
                      opacity: 0
                  }, 100, function() {
                      i && (n.attr("srcset", i),
                      a && n.attr("sizes", a)),
                      n.attr("src", s).animate({
                          opacity: 1
                      }, 200, function() {
                          n.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                      }),
                      t.$slider.trigger("lazyLoaded", [t, n, s])
                  })
              }
              ,
              o.onerror = function() {
                  n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                  t.$slider.trigger("lazyLoadError", [t, n, s])
              }
              ,
              o.src = s
          })
      }
      if (t = this,
      !0 === t.options.centerMode ? !0 === t.options.infinite ? s = (n = t.currentSlide + (t.options.slidesToShow / 2 + 1)) + t.options.slidesToShow + 2 : (n = Math.max(0, t.currentSlide - (t.options.slidesToShow / 2 + 1)),
      s = t.options.slidesToShow / 2 + 1 + 2 + t.currentSlide) : (n = t.options.infinite ? t.options.slidesToShow + t.currentSlide : t.currentSlide,
      s = Math.ceil(n + t.options.slidesToShow),
      !0 === t.options.fade && (n > 0 && n--,
      s <= t.slideCount && s++)),
      o = t.$slider.find(".slick-slide").slice(n, s),
      "anticipated" === t.options.lazyLoad)
          for (var t, n, s, o, a = n - 1, r = s, c = t.$slider.find(".slick-slide"), l = 0; l < t.options.slidesToScroll; l++)
              a < 0 && (a = t.slideCount - 1),
              o = (o = o.add(c.eq(a))).add(c.eq(r)),
              a--,
              r++;
      i(o),
      t.slideCount <= t.options.slidesToShow ? i(t.$slider.find(".slick-slide")) : t.currentSlide >= t.slideCount - t.options.slidesToShow ? i(t.$slider.find(".slick-cloned").slice(0, t.options.slidesToShow)) : 0 === t.currentSlide && i(t.$slider.find(".slick-cloned").slice(-1 * t.options.slidesToShow))
  }
  ,
  t.prototype.loadSlider = function() {
      var e = this;
      e.setPosition(),
      e.$slideTrack.css({
          opacity: 1
      }),
      e.$slider.removeClass("slick-loading"),
      e.initUI(),
      "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
  }
  ,
  t.prototype.next = t.prototype.slickNext = function() {
      this.changeSlide({
          data: {
              message: "next"
          }
      })
  }
  ,
  t.prototype.orientationChange = function() {
      var e = this;
      e.checkResponsive(),
      e.setPosition()
  }
  ,
  t.prototype.pause = t.prototype.slickPause = function() {
      var e = this;
      e.autoPlayClear(),
      e.paused = !0
  }
  ,
  t.prototype.play = t.prototype.slickPlay = function() {
      var e = this;
      e.autoPlay(),
      e.options.autoplay = !0,
      e.paused = !1,
      e.focussed = !1,
      e.interrupted = !1
  }
  ,
  t.prototype.postSlide = function(t) {
      var n = this;
      n.unslicked || (n.$slider.trigger("afterChange", [n, t]),
      n.animating = !1,
      n.slideCount > n.options.slidesToShow && n.setPosition(),
      n.swipeLeft = null,
      n.options.autoplay && n.autoPlay(),
      !0 === n.options.accessibility && (n.initADA(),
      n.options.focusOnChange && e(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()))
  }
  ,
  t.prototype.prev = t.prototype.slickPrev = function() {
      this.changeSlide({
          data: {
              message: "previous"
          }
      })
  }
  ,
  t.prototype.preventDefault = function(e) {
      e.preventDefault()
  }
  ,
  t.prototype.progressiveLazyLoad = function(t) {
      t = t || 1;
      var s, o, i, a, r, n = this, c = e("img[data-lazy]", n.$slider);
      c.length ? (s = c.first(),
      o = s.attr("data-lazy"),
      i = s.attr("data-srcset"),
      a = s.attr("data-sizes") || n.$slider.attr("data-sizes"),
      (r = document.createElement("img")).onload = function() {
          i && (s.attr("srcset", i),
          a && s.attr("sizes", a)),
          s.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
          !0 === n.options.adaptiveHeight && n.setPosition(),
          n.$slider.trigger("lazyLoaded", [n, s, o]),
          n.progressiveLazyLoad()
      }
      ,
      r.onerror = function() {
          t < 3 ? setTimeout(function() {
              n.progressiveLazyLoad(t + 1)
          }, 500) : (s.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
          n.$slider.trigger("lazyLoadError", [n, s, o]),
          n.progressiveLazyLoad())
      }
      ,
      r.src = o) : n.$slider.trigger("allImagesLoaded", [n])
  }
  ,
  t.prototype.refresh = function(t) {
      var s, n = this, o = n.slideCount - n.options.slidesToShow;
      !n.options.infinite && n.currentSlide > o && (n.currentSlide = o),
      n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0),
      s = n.currentSlide,
      n.destroy(!0),
      e.extend(n, n.initials, {
          currentSlide: s
      }),
      n.init(),
      t || n.changeSlide({
          data: {
              message: "index",
              index: s
          }
      }, !1)
  }
  ,
  t.prototype.registerBreakpoints = function() {
      var n, o, i, t = this, s = t.options.responsive || null;
      if ("array" === e.type(s) && s.length) {
          t.respondTo = t.options.respondTo || "window";
          for (o in s)
              if (n = t.breakpoints.length - 1,
              s.hasOwnProperty(o)) {
                  for (i = s[o].breakpoint; n >= 0; )
                      t.breakpoints[n] && t.breakpoints[n] === i && t.breakpoints.splice(n, 1),
                      n--;
                  t.breakpoints.push(i),
                  t.breakpointSettings[i] = s[o].settings
              }
          t.breakpoints.sort(function(e, n) {
              return t.options.mobileFirst ? e - n : n - e
          })
      }
  }
  ,
  t.prototype.reinit = function() {
      var t = this;
      t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"),
      t.slideCount = t.$slides.length,
      t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
      t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
      t.registerBreakpoints(),
      t.setProps(),
      t.setupInfinite(),
      t.buildArrows(),
      t.updateArrows(),
      t.initArrowEvents(),
      t.buildDots(),
      t.updateDots(),
      t.initDotEvents(),
      t.cleanUpSlideEvents(),
      t.initSlideEvents(),
      t.checkResponsive(!1, !0),
      !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
      t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
      t.setPosition(),
      t.focusHandler(),
      t.paused = !t.options.autoplay,
      t.autoPlay(),
      t.$slider.trigger("reInit", [t])
  }
  ,
  t.prototype.resize = function() {
      var t = this;
      e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay),
      t.windowDelay = window.setTimeout(function() {
          t.windowWidth = e(window).width(),
          t.checkResponsive(),
          t.unslicked || t.setPosition()
      }, 50))
  }
  ,
  t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, n) {
      var s = this;
      if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : s.slideCount - 1 : !0 === t ? --e : e,
      s.slideCount < 1 || e < 0 || e > s.slideCount - 1)
          return !1;
      s.unload(),
      !0 === n ? s.$slideTrack.children().remove() : s.$slideTrack.children(this.options.slide).eq(e).remove(),
      s.$slides = s.$slideTrack.children(this.options.slide),
      s.$slideTrack.children(this.options.slide).detach(),
      s.$slideTrack.append(s.$slides),
      s.$slidesCache = s.$slides,
      s.reinit()
  }
  ,
  t.prototype.setCSS = function(e) {
      var s, o, t = this, n = {};
      !0 === t.options.rtl && (e = -e),
      s = "left" == t.positionProp ? Math.ceil(e) + "px" : "0px",
      o = "top" == t.positionProp ? Math.ceil(e) + "px" : "0px",
      n[t.positionProp] = e,
      !1 === t.transformsEnabled ? t.$slideTrack.css(n) : (n = {},
      !1 === t.cssTransitions ? (n[t.animType] = "translate(" + s + ", " + o + ")",
      t.$slideTrack.css(n)) : (n[t.animType] = "translate3d(" + s + ", " + o + ", 0px)",
      t.$slideTrack.css(n)))
  }
  ,
  t.prototype.setDimensions = function() {
      var t, e = this;
      !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
          padding: "0px " + e.options.centerPadding
      }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow),
      !0 === e.options.centerMode && e.$list.css({
          padding: e.options.centerPadding + " 0px"
      })),
      e.listWidth = e.$list.width(),
      e.listHeight = e.$list.height(),
      !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow),
      e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth),
      e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length))),
      t = e.$slides.first().outerWidth(!0) - e.$slides.first().width(),
      !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
  }
  ,
  t.prototype.setFade = function() {
      var n, t = this;
      t.$slides.each(function(s, o) {
          n = t.slideWidth * s * -1,
          !0 === t.options.rtl ? e(o).css({
              position: "relative",
              right: n,
              top: 0,
              zIndex: t.options.zIndex - 2,
              opacity: 0
          }) : e(o).css({
              position: "relative",
              left: n,
              top: 0,
              zIndex: t.options.zIndex - 2,
              opacity: 0
          })
      }),
      t.$slides.eq(t.currentSlide).css({
          zIndex: t.options.zIndex - 1,
          opacity: 1
      })
  }
  ,
  t.prototype.setHeight = function() {
      var t, e = this;
      1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical && (t = e.$slides.eq(e.currentSlide).outerHeight(!0),
      e.$list.css("height", t))
  }
  ,
  t.prototype.setOption = t.prototype.slickSetOption = function() {
      var n, s, o, i, a, t = this, r = !1;
      if ("object" === e.type(arguments[0]) ? (a = arguments[0],
      r = arguments[1],
      s = "multiple") : "string" === e.type(arguments[0]) && (a = arguments[0],
      n = arguments[1],
      r = arguments[2],
      "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")),
      "single" === s)
          t.options[a] = n;
      else if ("multiple" === s)
          e.each(a, function(e, n) {
              t.options[e] = n
          });
      else if ("responsive" === s)
          for (i in n)
              if ("array" !== e.type(t.options.responsive))
                  t.options.responsive = [n[i]];
              else {
                  for (o = t.options.responsive.length - 1; o >= 0; )
                      t.options.responsive[o].breakpoint === n[i].breakpoint && t.options.responsive.splice(o, 1),
                      o--;
                  t.options.responsive.push(n[i])
              }
      r && (t.unload(),
      t.reinit())
  }
  ,
  t.prototype.setPosition = function() {
      var e = this;
      e.setDimensions(),
      e.setHeight(),
      !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(),
      e.$slider.trigger("setPosition", [e])
  }
  ,
  t.prototype.setProps = function() {
      var e = this
        , t = document.body.style;
      e.positionProp = !0 === e.options.vertical ? "top" : "left",
      "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"),
      void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0),
      e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex),
      void 0 !== t.OTransform && (e.animType = "OTransform",
      e.transformType = "-o-transform",
      e.transitionType = "OTransition",
      void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
      void 0 !== t.MozTransform && (e.animType = "MozTransform",
      e.transformType = "-moz-transform",
      e.transitionType = "MozTransition",
      void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)),
      void 0 !== t.webkitTransform && (e.animType = "webkitTransform",
      e.transformType = "-webkit-transform",
      e.transitionType = "webkitTransition",
      void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
      void 0 !== t.msTransform && (e.animType = "msTransform",
      e.transformType = "-ms-transform",
      e.transitionType = "msTransition",
      void 0 === t.msTransform && (e.animType = !1)),
      void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform",
      e.transformType = "transform",
      e.transitionType = "transition"),
      e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
  }
  ,
  t.prototype.setSlideClasses = function(e) {
      var s, o, i, a, t = this, n = t.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
      t.$slides.eq(e).addClass("slick-current"),
      !0 === t.options.centerMode ? (a = t.options.slidesToShow % 2 == 0 ? 1 : 0,
      o = Math.floor(t.options.slidesToShow / 2),
      !0 === t.options.infinite && (e >= o && e <= t.slideCount - 1 - o ? t.$slides.slice(e - o + a, e + o + 1).addClass("slick-active").attr("aria-hidden", "false") : (s = t.options.slidesToShow + e,
      n.slice(s - o + 1 + a, s + o + 2).addClass("slick-active").attr("aria-hidden", "false")),
      0 === e ? n.eq(n.length - 1 - t.options.slidesToShow).addClass("slick-center") : e === t.slideCount - 1 && n.eq(t.options.slidesToShow).addClass("slick-center")),
      t.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= t.slideCount - t.options.slidesToShow ? t.$slides.slice(e, e + t.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= t.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (i = t.slideCount % t.options.slidesToShow,
      s = !0 === t.options.infinite ? t.options.slidesToShow + e : e,
      t.options.slidesToShow == t.options.slidesToScroll && t.slideCount - e < t.options.slidesToShow ? n.slice(s - (t.options.slidesToShow - i), s + i).addClass("slick-active").attr("aria-hidden", "false") : n.slice(s, s + t.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")),
      "ondemand" !== t.options.lazyLoad && "anticipated" !== t.options.lazyLoad || t.lazyLoad()
  }
  ,
  t.prototype.setupInfinite = function() {
      var n, s, o, t = this;
      if (!0 === t.options.fade && (t.options.centerMode = !1),
      !0 === t.options.infinite && !1 === t.options.fade && (s = null,
      t.slideCount > t.options.slidesToShow)) {
          for (o = !0 === t.options.centerMode ? t.options.slidesToShow + 1 : t.options.slidesToShow,
          n = t.slideCount; n > t.slideCount - o; n -= 1)
              s = n - 1,
              e(t.$slides[s]).clone(!0).attr("id", "").attr("data-slick-index", s - t.slideCount).prependTo(t.$slideTrack).addClass("slick-cloned");
          for (n = 0; n < o + t.slideCount; n += 1)
              s = n,
              e(t.$slides[s]).clone(!0).attr("id", "").attr("data-slick-index", s + t.slideCount).appendTo(t.$slideTrack).addClass("slick-cloned");
          t.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
              e(this).attr("id", "")
          })
      }
  }
  ,
  t.prototype.interrupt = function(e) {
      var t = this;
      e || t.autoPlay(),
      t.interrupted = e
  }
  ,
  t.prototype.selectHandler = function(t) {
      var n = this
        , o = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide")
        , s = parseInt(o.attr("data-slick-index"));
      s || (s = 0),
      n.slideCount <= n.options.slidesToShow ? n.slideHandler(s, !1, !0) : n.slideHandler(s)
  }
  ,
  t.prototype.slideHandler = function(e, t, n) {
      var o, i, a, r, c, l = null, s = this;
      if (t = t || !1,
      !(!0 === s.animating && !0 === s.options.waitForAnimate || !0 === s.options.fade && s.currentSlide === e))
          if (!1 === t && s.asNavFor(e),
          o = e,
          l = s.getLeft(o),
          a = s.getLeft(s.currentSlide),
          s.currentLeft = null === s.swipeLeft ? a : s.swipeLeft,
          !1 === s.options.infinite && !1 === s.options.centerMode && (e < 0 || e > s.getDotCount() * s.options.slidesToScroll))
              !1 === s.options.fade && (o = s.currentSlide,
              !0 !== n ? s.animateSlide(a, function() {
                  s.postSlide(o)
              }) : s.postSlide(o));
          else if (!1 === s.options.infinite && !0 === s.options.centerMode && (e < 0 || e > s.slideCount - s.options.slidesToScroll))
              !1 === s.options.fade && (o = s.currentSlide,
              !0 !== n ? s.animateSlide(a, function() {
                  s.postSlide(o)
              }) : s.postSlide(o));
          else {
              if (s.options.autoplay && clearInterval(s.autoPlayTimer),
              i = o < 0 ? s.slideCount % s.options.slidesToScroll != 0 ? s.slideCount - s.slideCount % s.options.slidesToScroll : s.slideCount + o : o >= s.slideCount ? s.slideCount % s.options.slidesToScroll != 0 ? 0 : o - s.slideCount : o,
              s.animating = !0,
              s.$slider.trigger("beforeChange", [s, s.currentSlide, i]),
              c = s.currentSlide,
              s.currentSlide = i,
              s.setSlideClasses(s.currentSlide),
              s.options.asNavFor && (r = (r = s.getNavTarget()).slick("getSlick")).slideCount <= r.options.slidesToShow && r.setSlideClasses(s.currentSlide),
              s.updateDots(),
              s.updateArrows(),
              !0 === s.options.fade)
                  return !0 !== n ? (s.fadeSlideOut(c),
                  s.fadeSlide(i, function() {
                      s.postSlide(i)
                  })) : s.postSlide(i),
                  void s.animateHeight();
              !0 !== n ? s.animateSlide(l, function() {
                  s.postSlide(i)
              }) : s.postSlide(i)
          }
  }
  ,
  t.prototype.startLoad = function() {
      var e = this;
      !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(),
      e.$nextArrow.hide()),
      !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(),
      e.$slider.addClass("slick-loading")
  }
  ,
  t.prototype.swipeDirection = function() {
      var e, n, s, o, t = this;
      return n = t.touchObject.startX - t.touchObject.curX,
      s = t.touchObject.startY - t.touchObject.curY,
      o = Math.atan2(s, n),
      (e = Math.round(180 * o / Math.PI)) < 0 && (e = 360 - Math.abs(e)),
      e <= 45 && e >= 0 ? !1 === t.options.rtl ? "left" : "right" : e <= 360 && e >= 315 ? !1 === t.options.rtl ? "left" : "right" : e >= 135 && e <= 225 ? !1 === t.options.rtl ? "right" : "left" : !0 === t.options.verticalSwiping ? e >= 35 && e <= 135 ? "down" : "up" : "vertical"
  }
  ,
  t.prototype.swipeEnd = function() {
      var n, s, t = this;
      if (t.dragging = !1,
      t.swiping = !1,
      t.scrolling)
          return t.scrolling = !1,
          !1;
      if (t.interrupted = !1,
      t.shouldClick = !(t.touchObject.swipeLength > 10),
      void 0 === t.touchObject.curX)
          return !1;
      if (!0 === t.touchObject.edgeHit && t.$slider.trigger("edge", [t, t.swipeDirection()]),
      t.touchObject.swipeLength >= t.touchObject.minSwipe) {
          switch (s = t.swipeDirection()) {
          case "left":
          case "down":
              n = t.options.swipeToSlide ? t.checkNavigable(t.currentSlide + t.getSlideCount()) : t.currentSlide + t.getSlideCount(),
              t.currentDirection = 0;
              break;
          case "right":
          case "up":
              n = t.options.swipeToSlide ? t.checkNavigable(t.currentSlide - t.getSlideCount()) : t.currentSlide - t.getSlideCount(),
              t.currentDirection = 1
          }
          "vertical" != s && (t.slideHandler(n),
          t.touchObject = {},
          t.$slider.trigger("swipe", [t, s]))
      } else
          t.touchObject.startX !== t.touchObject.curX && (t.slideHandler(t.currentSlide),
          t.touchObject = {})
  }
  ,
  t.prototype.swipeHandler = function(e) {
      var t = this;
      if (!(!1 === t.options.swipe || "ontouchend"in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse")))
          switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1,
          t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold,
          !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold),
          e.data.action) {
          case "start":
              t.swipeStart(e);
              break;
          case "move":
              t.swipeMove(e);
              break;
          case "end":
              t.swipeEnd(e)
          }
  }
  ,
  t.prototype.swipeMove = function(e) {
      var n, s, o, i, a, r, t = this;
      return n = void 0 !== e.originalEvent ? e.originalEvent.touches : null,
      !(!t.dragging || t.scrolling || n && 1 !== n.length) && (i = t.getLeft(t.currentSlide),
      t.touchObject.curX = void 0 !== n ? n[0].pageX : e.clientX,
      t.touchObject.curY = void 0 !== n ? n[0].pageY : e.clientY,
      t.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(t.touchObject.curX - t.touchObject.startX, 2))),
      r = Math.round(Math.sqrt(Math.pow(t.touchObject.curY - t.touchObject.startY, 2))),
      !t.options.verticalSwiping && !t.swiping && r > 4 ? (t.scrolling = !0,
      !1) : (!0 === t.options.verticalSwiping && (t.touchObject.swipeLength = r),
      a = t.swipeDirection(),
      void 0 !== e.originalEvent && t.touchObject.swipeLength > 4 && (t.swiping = !0,
      e.preventDefault()),
      o = (!1 === t.options.rtl ? 1 : -1) * (t.touchObject.curX > t.touchObject.startX ? 1 : -1),
      !0 === t.options.verticalSwiping && (o = t.touchObject.curY > t.touchObject.startY ? 1 : -1),
      s = t.touchObject.swipeLength,
      t.touchObject.edgeHit = !1,
      !1 === t.options.infinite && (0 === t.currentSlide && "right" === a || t.currentSlide >= t.getDotCount() && "left" === a) && (s = t.touchObject.swipeLength * t.options.edgeFriction,
      t.touchObject.edgeHit = !0),
      !1 === t.options.vertical ? t.swipeLeft = i + s * o : t.swipeLeft = i + s * (t.$list.height() / t.listWidth) * o,
      !0 === t.options.verticalSwiping && (t.swipeLeft = i + s * o),
      !0 !== t.options.fade && !1 !== t.options.touchMove && (!0 === t.animating ? (t.swipeLeft = null,
      !1) : void t.setCSS(t.swipeLeft))))
  }
  ,
  t.prototype.swipeStart = function(e) {
      var n, t = this;
      if (t.interrupted = !0,
      1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow)
          return t.touchObject = {},
          !1;
      void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (n = e.originalEvent.touches[0]),
      t.touchObject.startX = t.touchObject.curX = void 0 !== n ? n.pageX : e.clientX,
      t.touchObject.startY = t.touchObject.curY = void 0 !== n ? n.pageY : e.clientY,
      t.dragging = !0
  }
  ,
  t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
      var e = this;
      null !== e.$slidesCache && (e.unload(),
      e.$slideTrack.children(this.options.slide).detach(),
      e.$slidesCache.appendTo(e.$slideTrack),
      e.reinit())
  }
  ,
  t.prototype.unload = function() {
      var t = this;
      e(".slick-cloned", t.$slider).remove(),
      t.$dots && t.$dots.remove(),
      t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(),
      t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(),
      t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
  }
  ,
  t.prototype.unslick = function(e) {
      var t = this;
      t.$slider.trigger("unslick", [t, e]),
      t.destroy()
  }
  ,
  t.prototype.updateArrows = function() {
      var e = this;
      Math.floor(e.options.slidesToShow / 2),
      !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
      e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
      0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
      e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
      e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
      e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
  }
  ,
  t.prototype.updateDots = function() {
      var e = this;
      null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(),
      e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
  }
  ,
  t.prototype.visibility = function() {
      var e = this;
      e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
  }
  ,
  e.fn.slick = function() {
      var e, o, n = this, s = arguments[0], i = Array.prototype.slice.call(arguments, 1), a = n.length;
      for (e = 0; e < a; e++)
          if ("object" == typeof s || void 0 === s ? n[e].slick = new t(n[e],s) : o = n[e].slick[s].apply(n[e].slick, i),
          void 0 !== o)
              return o;
      return n
  }
}),
!function(e) {
  e.fn.slickAnimation = function() {
      function n(e, t, n, s, o) {
          o = "undefined" != typeof o && o,
          1 == t.opacity ? (e.addClass(n),
          e.addClass(s)) : (e.removeClass(n),
          e.removeClass(s)),
          o && e.css(t)
      }
      function r(e, t) {
          return e ? 1e3 * e + 1e3 : t ? 1e3 * t : e || t ? 1e3 * e + 1e3 * t : 1e3
      }
      function t(e, t, n) {
          var o = ["animation-" + t, "-webkit-animation-" + t, "-moz-animation-" + t, "-o-animation-" + t, "-ms-animation-" + t]
            , s = {};
          o.forEach(function(e) {
              s[e] = n + "s"
          }),
          e.css(s)
      }
      var o = e(this)
        , l = o.find(".slick-list .slick-track > div")
        , c = o.find('[data-slick-index="0"]')
        , s = "animated"
        , i = {
          opacity: "1"
      }
        , a = {
          opacity: "0"
      };
      return l.each(function() {
          var l = e(this);
          l.find("[data-animation-in]").each(function() {
              d = e(this),
              d.css(a);
              var d, m = d.attr("data-animation-in"), f = d.attr("data-animation-out"), u = d.attr("data-delay-in"), h = d.attr("data-duration-in"), p = d.attr("data-delay-out"), g = d.attr("data-duration-out");
              f ? (c.length > 0 && l.hasClass("slick-current") && (n(d, i, m, s, !0),
              u && t(d, "delay", u),
              h && t(d, "duration", h),
              setTimeout(function() {
                  n(d, a, m, s),
                  n(d, i, f, s),
                  p && t(d, "delay", p),
                  g && t(d, "duration", g)
              }, r(u, h))),
              o.on("afterChange", function() {
                  l.hasClass("slick-current") && (n(d, i, m, s, !0),
                  u && t(d, "delay", u),
                  h && t(d, "duration", h),
                  setTimeout(function() {
                      n(d, a, m, s),
                      n(d, i, f, s),
                      p && t(d, "delay", p),
                      g && t(d, "duration", g)
                  }, r(u, h)))
              }),
              o.on("beforeChange", function() {
                  n(d, a, f, s, !0)
              })) : (c.length > 0 && l.hasClass("slick-current") && (n(d, i, m, s, !0),
              u && t(d, "delay", u),
              h && t(d, "duration", h)),
              o.on("afterChange", function() {
                  l.hasClass("slick-current") && (n(d, i, m, s, !0),
                  u && t(d, "delay", u),
                  h && t(d, "duration", h))
              }),
              o.on("beforeChange", function() {
                  n(d, a, m, s, !0)
              }))
          })
      }),
      this
  }
}(jQuery),
!function(e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t()
}(this, function() {
  return function(e) {
      function t(s) {
          if (n[s])
              return n[s].exports;
          var o = n[s] = {
              exports: {},
              id: s,
              loaded: !1
          };
          return e[s].call(o.exports, o, o.exports, t),
          o.loaded = !0,
          o.exports
      }
      var n = {};
      return t.m = e,
      t.c = n,
      t.p = "dist/",
      t(0)
  }([function(e, t, n) {
      "use strict";
      function i(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      var x = Object.assign || function(e) {
          for (var t, s, n = 1; n < arguments.length; n++) {
              t = arguments[n];
              for (s in t)
                  Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
          }
          return e
      }
        , O = n(1)
        , f = (i(O),
      n(6))
        , p = i(f)
        , y = n(7)
        , l = i(y)
        , C = n(8)
        , _ = i(C)
        , j = n(9)
        , r = i(j)
        , m = n(10)
        , c = i(m)
        , g = n(11)
        , v = i(g)
        , b = n(14)
        , h = i(b)
        , o = []
        , u = !1
        , w = document.all && !window.atob
        , s = {
          offset: 120,
          delay: 0,
          easing: "ease",
          duration: 400,
          disable: !1,
          once: !1,
          startEvent: "DOMContentLoaded",
          throttleDelay: 99,
          debounceDelay: 50,
          disableMutationObserver: !1
      }
        , a = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (e && (u = !0),
          u)
              return o = (0,
              v.default)(o, s),
              (0,
              c.default)(o, s.once),
              o
      }
        , d = function() {
          o = (0,
          h.default)(),
          a()
      }
        , E = function() {
          o.forEach(function(e) {
              e.node.removeAttribute("data-aos"),
              e.node.removeAttribute("data-aos-easing"),
              e.node.removeAttribute("data-aos-duration"),
              e.node.removeAttribute("data-aos-delay")
          })
      }
        , k = function(e) {
          return e === !0 || "mobile" === e && r.default.mobile() || "phone" === e && r.default.phone() || "tablet" === e && r.default.tablet() || "function" == typeof e && e() === !0
      }
        , A = function(e) {
          return s = x(s, e),
          o = (0,
          h.default)(),
          k(s.disable) || w ? E() : (document.querySelector("body").setAttribute("data-aos-easing", s.easing),
          document.querySelector("body").setAttribute("data-aos-duration", s.duration),
          document.querySelector("body").setAttribute("data-aos-delay", s.delay),
          "DOMContentLoaded" === s.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? a(!0) : "load" === s.startEvent ? window.addEventListener(s.startEvent, function() {
              a(!0)
          }) : document.addEventListener(s.startEvent, function() {
              a(!0)
          }),
          window.addEventListener("resize", (0,
          l.default)(a, s.debounceDelay, !0)),
          window.addEventListener("orientationchange", (0,
          l.default)(a, s.debounceDelay, !0)),
          window.addEventListener("scroll", (0,
          p.default)(function() {
              (0,
              c.default)(o, s.once)
          }, s.throttleDelay)),
          s.disableMutationObserver || (0,
          _.default)("[data-aos]", d),
          o)
      };
      e.exports = {
          init: A,
          refresh: a,
          refreshHard: d
      }
  }
  , function() {}
  , , , , , function(e, t) {
      (function(t) {
          "use strict";
          function h(e, t, n) {
              function v(t) {
                  var n = l
                    , s = m;
                  return l = m = void 0,
                  u = t,
                  h = e.apply(s, n)
              }
              function k(e) {
                  return u = e,
                  i = setTimeout(f, t),
                  _ ? v(e) : h
              }
              function E(e) {
                  var s = e - c
                    , o = e - u
                    , n = t - s;
                  return d ? O(n, p - o) : n
              }
              function y(e) {
                  var n = e - c
                    , s = e - u;
                  return void 0 === c || n >= t || n < 0 || d && s >= p
              }
              function f() {
                  var e = o();
                  return y(e) ? j(e) : void (i = setTimeout(f, E(e)))
              }
              function j(e) {
                  return i = void 0,
                  b && l ? v(e) : (l = m = void 0,
                  h)
              }
              function C() {
                  void 0 !== i && clearTimeout(i),
                  u = 0,
                  l = c = m = i = void 0
              }
              function x() {
                  return void 0 === i ? h : j(o())
              }
              function g() {
                  var e = o()
                    , n = y(e);
                  if (l = arguments,
                  m = this,
                  c = e,
                  n) {
                      if (void 0 === i)
                          return k(c);
                      if (d)
                          return i = setTimeout(f, t),
                          v(c)
                  }
                  return void 0 === i && (i = setTimeout(f, t)),
                  h
              }
              var i, c, l, h, m, p, u = 0, _ = !1, d = !1, b = !0;
              if ("function" != typeof e)
                  throw new TypeError(a);
              return t = r(t) || 0,
              s(n) && (_ = !!n.leading,
              d = "maxWait"in n,
              p = d ? w(r(n.maxWait) || 0, t) : p,
              b = "trailing"in n ? !!n.trailing : b),
              g.cancel = C,
              g.flush = x,
              g
          }
          function x(e, t, n) {
              var o = !0
                , i = !0;
              if ("function" != typeof e)
                  throw new TypeError(a);
              return s(n) && (o = "leading"in n ? !!n.leading : o,
              i = "trailing"in n ? !!n.trailing : i),
              h(e, t, {
                  leading: o,
                  maxWait: t,
                  trailing: i
              })
          }
          function s(e) {
              var t = "undefined" == typeof e ? "undefined" : n(e);
              return !!e && ("object" == t || "function" == t)
          }
          function d(e) {
              return !!e && "object" == ("undefined" == typeof e ? "undefined" : n(e))
          }
          function v(e) {
              return "symbol" == ("undefined" == typeof e ? "undefined" : n(e)) || d(e) && _.call(e) == u
          }
          function r(e) {
              if ("number" == typeof e)
                  return e;
              if (v(e))
                  return i;
              if (s(e)) {
                  var n, t = "function" == typeof e.valueOf ? e.valueOf() : e;
                  e = s(t) ? t + "" : t
              }
              return "string" != typeof e ? 0 === e ? e : +e : (e = e.replace(c, ""),
              n = f.test(e),
              n || p.test(e) ? g(e.slice(2), n ? 2 : 8) : m.test(e) ? i : +e)
          }
          var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
            , a = "Expected a function"
            , i = NaN
            , u = "[object Symbol]"
            , c = /^\s+|\s+$/g
            , m = /^[-+]0x[0-9a-f]+$/i
            , f = /^0b[01]+$/i
            , p = /^0o[0-7]+$/i
            , g = parseInt
            , l = "object" == ("undefined" == typeof t ? "undefined" : n(t)) && t && t.Object === Object && t
            , b = "object" == ("undefined" == typeof self ? "undefined" : n(self)) && self && self.Object === Object && self
            , j = l || b || Function("return this")()
            , y = Object.prototype
            , _ = y.toString
            , w = Math.max
            , O = Math.min
            , o = function() {
              return j.Date.now()
          };
          e.exports = x
      }
      ).call(t, function() {
          return this
      }())
  }
  , function(e, t) {
      (function(t) {
          "use strict";
          function h(e, t, n) {
              function v(t) {
                  var n = c
                    , s = h;
                  return c = h = void 0,
                  d = t,
                  u = e.apply(s, n)
              }
              function k(e) {
                  return d = e,
                  i = setTimeout(m, t),
                  O ? v(e) : u
              }
              function E(e) {
                  var s = e - r
                    , o = e - d
                    , n = t - s;
                  return l ? w(n, f - o) : n
              }
              function y(e) {
                  var n = e - r
                    , s = e - d;
                  return void 0 === r || n >= t || n < 0 || l && s >= f
              }
              function m() {
                  var e = o();
                  return y(e) ? j(e) : void (i = setTimeout(m, E(e)))
              }
              function j(e) {
                  return i = void 0,
                  b && c ? v(e) : (c = h = void 0,
                  u)
              }
              function C() {
                  void 0 !== i && clearTimeout(i),
                  d = 0,
                  c = r = h = i = void 0
              }
              function x() {
                  return void 0 === i ? u : j(o())
              }
              function p() {
                  var e = o()
                    , n = y(e);
                  if (c = arguments,
                  h = this,
                  r = e,
                  n) {
                      if (void 0 === i)
                          return k(r);
                      if (l)
                          return i = setTimeout(m, t),
                          v(r)
                  }
                  return void 0 === i && (i = setTimeout(m, t)),
                  u
              }
              var i, r, c, u, h, f, d = 0, O = !1, l = !1, b = !0;
              if ("function" != typeof e)
                  throw new TypeError(g);
              return t = a(t) || 0,
              s(n) && (O = !!n.leading,
              l = "maxWait"in n,
              f = l ? _(a(n.maxWait) || 0, t) : f,
              b = "trailing"in n ? !!n.trailing : b),
              p.cancel = C,
              p.flush = x,
              p
          }
          function s(e) {
              var t = "undefined" == typeof e ? "undefined" : n(e);
              return !!e && ("object" == t || "function" == t)
          }
          function O(e) {
              return !!e && "object" == ("undefined" == typeof e ? "undefined" : n(e))
          }
          function l(e) {
              return "symbol" == ("undefined" == typeof e ? "undefined" : n(e)) || O(e) && y.call(e) == d
          }
          function a(e) {
              if ("number" == typeof e)
                  return e;
              if (l(e))
                  return i;
              if (s(e)) {
                  var n, t = "function" == typeof e.valueOf ? e.valueOf() : e;
                  e = s(t) ? t + "" : t
              }
              return "string" != typeof e ? 0 === e ? e : +e : (e = e.replace(u, ""),
              n = m.test(e),
              n || f.test(e) ? p(e.slice(2), n ? 2 : 8) : r.test(e) ? i : +e)
          }
          var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
            , g = "Expected a function"
            , i = NaN
            , d = "[object Symbol]"
            , u = /^\s+|\s+$/g
            , r = /^[-+]0x[0-9a-f]+$/i
            , m = /^0b[01]+$/i
            , f = /^0o[0-7]+$/i
            , p = parseInt
            , c = "object" == ("undefined" == typeof t ? "undefined" : n(t)) && t && t.Object === Object && t
            , v = "object" == ("undefined" == typeof self ? "undefined" : n(self)) && self && self.Object === Object && self
            , b = c || v || Function("return this")()
            , j = Object.prototype
            , y = j.toString
            , _ = Math.max
            , w = Math.min
            , o = function() {
              return b.Date.now()
          };
          e.exports = h
      }
      ).call(t, function() {
          return this
      }())
  }
  , function(e, t) {
      "use strict";
      function s(e, t) {
          var s = new a(o)
            , n = t;
          s.observe(i.documentElement, {
              childList: !0,
              subtree: !0,
              removedNodes: !0
          })
      }
      function o(e) {
          e && e.forEach(function(e) {
              var t = Array.prototype.slice.call(e.addedNodes)
                , s = Array.prototype.slice.call(e.removedNodes)
                , o = t.concat(s).filter(function(e) {
                  return e.hasAttribute && e.hasAttribute("data-aos")
              }).length;
              o && n()
          })
      }
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      var i = window.document
        , a = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
        , n = function() {};
      t.default = s
  }
  , function(e, t) {
      "use strict";
      function s(e, t) {
          if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function")
      }
      function n() {
          return navigator.userAgent || navigator.vendor || window.opera || ""
      }
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      var o = function() {
          function e(e, t) {
              for (var n, s = 0; s < t.length; s++)
                  n = t[s],
                  n.enumerable = n.enumerable || !1,
                  n.configurable = !0,
                  "value"in n && (n.writable = !0),
                  Object.defineProperty(e, n.key, n)
          }
          return function(t, n, s) {
              return n && e(t.prototype, n),
              s && e(t, s),
              t
          }
      }()
        , i = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i
        , a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i
        , r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i
        , c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i
        , l = function() {
          function e() {
              s(this, e)
          }
          return o(e, [{
              key: "phone",
              value: function() {
                  var e = n();
                  return !!i.test(e) || !!a.test(e.substr(0, 4))
              }
          }, {
              key: "mobile",
              value: function() {
                  var e = n();
                  return !!r.test(e) || !!c.test(e.substr(0, 4))
              }
          }, {
              key: "tablet",
              value: function() {
                  return this.mobile() && !this.phone()
              }
          }]),
          e
      }();
      t.default = new l
  }
  , function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      var n = function(e, t, n) {
          var s = e.node.getAttribute("data-aos-once");
          t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof s && ("false" === s || !n && "true" !== s) && e.node.classList.remove("aos-animate")
      }
        , s = function(e, t) {
          var s = window.pageYOffset
            , o = window.innerHeight;
          e.forEach(function(e) {
              n(e, o + s, t)
          })
      };
      t.default = s
  }
  , function(e, t, n) {
      "use strict";
      function s(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      var o = n(12)
        , i = s(o)
        , a = function(e, t) {
          return e.forEach(function(e) {
              e.node.classList.add("aos-init"),
              e.position = (0,
              i.default)(e.node, t.offset)
          }),
          e
      };
      t.default = a
  }
  , function(e, t, n) {
      "use strict";
      function s(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      var o = n(13)
        , i = s(o)
        , a = function(e, t) {
          var n = 0
            , a = 0
            , o = window.innerHeight
            , s = {
              offset: e.getAttribute("data-aos-offset"),
              anchor: e.getAttribute("data-aos-anchor"),
              anchorPlacement: e.getAttribute("data-aos-anchor-placement")
          };
          switch (s.offset && !isNaN(s.offset) && (a = parseInt(s.offset)),
          s.anchor && document.querySelectorAll(s.anchor) && (e = document.querySelectorAll(s.anchor)[0]),
          n = (0,
          i.default)(e).top,
          s.anchorPlacement) {
          case "top-bottom":
              break;
          case "center-bottom":
              n += e.offsetHeight / 2;
              break;
          case "bottom-bottom":
              n += e.offsetHeight;
              break;
          case "top-center":
              n += o / 2;
              break;
          case "bottom-center":
              n += o / 2 + e.offsetHeight;
              break;
          case "center-center":
              n += o / 2 + e.offsetHeight / 2;
              break;
          case "top-top":
              n += o;
              break;
          case "bottom-top":
              n += e.offsetHeight + o;
              break;
          case "center-top":
              n += e.offsetHeight / 2 + o
          }
          return s.anchorPlacement || s.offset || isNaN(t) || (a = t),
          n + a
      };
      t.default = a
  }
  , function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      var n = function(e) {
          for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop); )
              t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0),
              n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0),
              e = e.offsetParent;
          return {
              top: n,
              left: t
          }
      };
      t.default = n
  }
  , function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      var n = function(e) {
          return e = e || document.querySelectorAll("[data-aos]"),
          Array.prototype.map.call(e, function(e) {
              return {
                  node: e
              }
          })
      };
      t.default = n
  }
  ])
}),
!function(e) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
  var i, a, r = -1, s = -1, n = function(e) {
      return parseFloat(e) || 0
  }, c = function(t) {
      var i = 1
        , a = e(t)
        , o = null
        , s = [];
      return a.each(function() {
          var t = e(this)
            , a = t.offset().top - n(t.css("margin-top"))
            , r = s.length > 0 ? s[s.length - 1] : null;
          null === r ? s.push(t) : Math.floor(Math.abs(o - a)) <= i ? s[s.length - 1] = r.add(t) : s.push(t),
          o = a
      }),
      s
  }, o = function(t) {
      var n = {
          byRow: !0,
          property: "height",
          target: null,
          remove: !1
      };
      return "object" == typeof t ? e.extend(n, t) : ("boolean" == typeof t ? n.byRow = t : "remove" === t && (n.remove = !0),
      n)
  }, t = e.fn.matchHeight = function(n) {
      var i, s = o(n);
      return s.remove ? (i = this,
      this.css(s.property, ""),
      e.each(t._groups, function(e, t) {
          t.elements = t.elements.not(i)
      }),
      this) : this.length <= 1 && !s.target ? this : (t._groups.push({
          elements: this,
          options: s
      }),
      t._apply(this, s),
      this)
  }
  ;
  t.version = "0.7.2",
  t._groups = [],
  t._throttle = 80,
  t._maintainScroll = !1,
  t._beforeUpdate = null,
  t._afterUpdate = null,
  t._rows = c,
  t._parse = n,
  t._parseOptions = o,
  t._apply = function(s, i) {
      var a = o(i)
        , r = e(s)
        , d = [r]
        , u = e(window).scrollTop()
        , h = e("html").outerHeight(!0)
        , l = r.parents().filter(":hidden");
      return l.each(function() {
          var t = e(this);
          t.data("style-cache", t.attr("style"))
      }),
      l.css("display", "block"),
      a.byRow && !a.target && (r.each(function() {
          var n = e(this)
            , t = n.css("display");
          "inline-block" !== t && "flex" !== t && "inline-flex" !== t && (t = "block"),
          n.data("style-cache", n.attr("style")),
          n.css({
              display: t,
              "padding-top": "0",
              "padding-bottom": "0",
              "margin-top": "0",
              "margin-bottom": "0",
              "border-top-width": "0",
              "border-bottom-width": "0",
              height: "100px",
              overflow: "hidden"
          })
      }),
      d = c(r),
      r.each(function() {
          var t = e(this);
          t.attr("style", t.data("style-cache") || "")
      })),
      e.each(d, function(t, s) {
          var o = e(s)
            , i = 0;
          if (a.target)
              i = a.target.outerHeight(!1);
          else {
              if (a.byRow && o.length <= 1)
                  return void o.css(a.property, "");
              o.each(function() {
                  var s, t = e(this), o = t.attr("style"), n = t.css("display");
                  "inline-block" !== n && "flex" !== n && "inline-flex" !== n && (n = "block"),
                  s = {
                      display: n
                  },
                  s[a.property] = "",
                  t.css(s),
                  t.outerHeight(!1) > i && (i = t.outerHeight(!1)),
                  o ? t.attr("style", o) : t.css("display", "")
              })
          }
          o.each(function() {
              var t = e(this)
                , s = 0;
              a.target && t.is(a.target) || ("border-box" !== t.css("box-sizing") && (s += n(t.css("border-top-width")) + n(t.css("border-bottom-width")),
              s += n(t.css("padding-top")) + n(t.css("padding-bottom"))),
              t.css(a.property, i - s + "px"))
          })
      }),
      l.each(function() {
          var t = e(this);
          t.attr("style", t.data("style-cache") || null)
      }),
      t._maintainScroll && e(window).scrollTop(u / h * e("html").outerHeight(!0)),
      this
  }
  ,
  t._applyDataApi = function() {
      var t = {};
      e("[data-match-height], [data-mh]").each(function() {
          var n = e(this)
            , s = n.attr("data-mh") || n.attr("data-match-height");
          s in t ? t[s] = t[s].add(n) : t[s] = n
      }),
      e.each(t, function() {
          this.matchHeight(!0)
      })
  }
  ,
  i = function(n) {
      t._beforeUpdate && t._beforeUpdate(n, t._groups),
      e.each(t._groups, function() {
          t._apply(this.elements, this.options)
      }),
      t._afterUpdate && t._afterUpdate(n, t._groups)
  }
  ,
  t._update = function(n, o) {
      if (o && "resize" === o.type) {
          var a = e(window).width();
          if (a === r)
              return;
          r = a
      }
      n ? s === -1 && (s = setTimeout(function() {
          i(o),
          s = -1
      }, t._throttle)) : i(o)
  }
  ,
  e(t._applyDataApi),
  a = e.fn.on ? "on" : "bind",
  e(window)[a]("load", function(e) {
      t._update(!1, e)
  }),
  e(window)[a]("resize orientationchange", function(e) {
      t._update(!0, e)
  })
}),
!function(e, t) {
  "use strict";
  function o(e) {
      this.callback = e,
      this.ticking = !1
  }
  function a(t) {
      return t && "undefined" != typeof e && (t === e || t.nodeType)
  }
  function i(e) {
      if (arguments.length <= 0)
          throw new Error("Missing arguments in extend function");
      var t, s, o, n = e || {};
      for (s = 1; s < arguments.length; s++) {
          o = arguments[s] || {};
          for (t in o)
              n[t] = "object" != typeof n[t] || a(n[t]) ? n[t] || o[t] : i(n[t], o[t])
      }
      return n
  }
  function r(e) {
      return e === Object(e) ? e : {
          down: e,
          up: e
      }
  }
  function n(e, t) {
      t = i(t, n.options),
      this.lastKnownScrollY = 0,
      this.elem = e,
      this.debouncer = new o(this.update.bind(this)),
      this.tolerance = r(t.tolerance),
      this.classes = t.classes,
      this.offset = t.offset,
      this.scroller = t.scroller,
      this.initialised = !1,
      this.onPin = t.onPin,
      this.onUnpin = t.onUnpin,
      this.onTop = t.onTop,
      this.onNotTop = t.onNotTop
  }
  var s = {
      bind: !!function() {}
      .bind,
      classList: "classList"in t.documentElement,
      rAF: !!(e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame)
  };
  e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame,
  o.prototype = {
      constructor: o,
      update: function() {
          this.callback && this.callback(),
          this.ticking = !1
      },
      requestTick: function() {
          this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))),
          this.ticking = !0)
      },
      handleEvent: function() {
          this.requestTick()
      }
  },
  n.prototype = {
      constructor: n,
      init: function() {
          return n.cutsTheMustard ? (this.elem.classList.add(this.classes.initial),
          setTimeout(this.attachEvent.bind(this), 100),
          this) : void 0
      },
      destroy: function() {
          var e = this.classes;
          this.initialised = !1,
          this.elem.classList.remove(e.unpinned, e.pinned, e.top, e.initial),
          this.scroller.removeEventListener("scroll", this.debouncer, !1)
      },
      attachEvent: function() {
          this.initialised || (this.lastKnownScrollY = this.getScrollY(),
          this.initialised = !0,
          this.scroller.addEventListener("scroll", this.debouncer, !1),
          this.debouncer.handleEvent())
      },
      unpin: function() {
          var e = this.elem.classList
            , t = this.classes;
          (e.contains(t.pinned) || !e.contains(t.unpinned)) && (e.add(t.unpinned),
          e.remove(t.pinned),
          this.onUnpin && this.onUnpin.call(this))
      },
      pin: function() {
          var e = this.elem.classList
            , t = this.classes;
          e.contains(t.unpinned) && (e.remove(t.unpinned),
          e.add(t.pinned),
          this.onPin && this.onPin.call(this))
      },
      top: function() {
          var e = this.elem.classList
            , t = this.classes;
          e.contains(t.top) || (e.add(t.top),
          e.remove(t.notTop),
          this.onTop && this.onTop.call(this))
      },
      notTop: function() {
          var e = this.elem.classList
            , t = this.classes;
          e.contains(t.notTop) || (e.add(t.notTop),
          e.remove(t.top),
          this.onNotTop && this.onNotTop.call(this))
      },
      getScrollY: function() {
          return void 0 !== this.scroller.pageYOffset ? this.scroller.pageYOffset : void 0 !== this.scroller.scrollTop ? this.scroller.scrollTop : (t.documentElement || t.body.parentNode || t.body).scrollTop
      },
      getViewportHeight: function() {
          return e.innerHeight || t.documentElement.clientHeight || t.body.clientHeight
      },
      getDocumentHeight: function() {
          var e = t.body
            , n = t.documentElement;
          return Math.max(e.scrollHeight, n.scrollHeight, e.offsetHeight, n.offsetHeight, e.clientHeight, n.clientHeight)
      },
      getElementHeight: function(e) {
          return Math.max(e.scrollHeight, e.offsetHeight, e.clientHeight)
      },
      getScrollerHeight: function() {
          return this.scroller === e || this.scroller === t.body ? this.getDocumentHeight() : this.getElementHeight(this.scroller)
      },
      isOutOfBounds: function(e) {
          var t = 0 > e
            , n = e + this.getViewportHeight() > this.getScrollerHeight();
          return t || n
      },
      toleranceExceeded: function(e, t) {
          return Math.abs(e - this.lastKnownScrollY) >= this.tolerance[t]
      },
      shouldUnpin: function(e, t) {
          var n = e > this.lastKnownScrollY
            , s = e >= this.offset;
          return n && s && t
      },
      shouldPin: function(e, t) {
          var n = e < this.lastKnownScrollY
            , s = e <= this.offset;
          return n && t || s
      },
      update: function() {
          var e = this.getScrollY()
            , n = e > this.lastKnownScrollY ? "down" : "up"
            , t = this.toleranceExceeded(e, n);
          this.isOutOfBounds(e) || (e <= this.offset ? this.top() : this.notTop(),
          this.shouldUnpin(e, t) ? this.unpin() : this.shouldPin(e, t) && this.pin(),
          this.lastKnownScrollY = e)
      }
  },
  n.options = {
      tolerance: {
          up: 0,
          down: 0
      },
      offset: 0,
      scroller: e,
      classes: {
          pinned: "headroom--pinned",
          unpinned: "headroom--unpinned",
          top: "headroom--top",
          notTop: "headroom--not-top",
          initial: "headroom"
      }
  },
  n.cutsTheMustard = "undefined" != typeof s && s.rAF && s.bind && s.classList,
  e.Headroom = n
}(window, document),
!function(e) {
  e && (e.fn.headroom = function(t) {
      return this.each(function() {
          var o = e(this)
            , n = o.data("headroom")
            , s = "object" == typeof t && t
            , s = e.extend(!0, {}, Headroom.options, s);
          n || (n = new Headroom(this,s),
          n.init(),
          o.data("headroom", n)),
          "string" == typeof t && n[t]()
      })
  }
  ,
  e("[data-headroom]").each(function() {
      var t = e(this);
      t.headroom(t.data())
  }))
}(window.Zepto || window.jQuery),
!function(e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(e) {
  var t, i, a, c, u, p, g, b, j, _, w, k, S, T, D, L, P, H, l = "Close", I = "BeforeClose", $ = "AfterClose", W = "BeforeAppend", O = "MarkupParse", F = "Open", V = "Change", M = "mfp", o = "." + M, v = "mfp-ready", B = "mfp-removing", x = "mfp-prevent-close", y = function() {}, z = !!window.jQuery, d = e(window), s = function(e, n) {
      t.ev.on(M + e + o, n)
  }, h = function(t, n, s, o) {
      var i = document.createElement("div");
      return i.className = "mfp-" + t,
      s && (i.innerHTML = s),
      o ? n && n.appendChild(i) : (i = e(i),
      n && i.appendTo(n)),
      i
  }, n = function(n, s) {
      t.ev.triggerHandler(M + n, s),
      t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1),
      t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(s) ? s : [s]))
  }, C = function(n) {
      return n === L && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)),
      L = n),
      t.currTemplate.closeBtn
  }, E = function() {
      e.magnificPopup.instance || (t = new y,
      t.init(),
      e.magnificPopup.instance = t)
  }, K = function() {
      var e = document.createElement("p").style
        , t = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== e.transition)
          return !0;
      for (; t.length; )
          if (t.pop() + "Transition"in e)
              return !0;
      return !1
  };
  y.prototype = {
      constructor: y,
      init: function() {
          var n = navigator.appVersion;
          t.isLowIE = t.isIE8 = document.all && !document.addEventListener,
          t.isAndroid = /android/gi.test(n),
          t.isIOS = /iphone|ipad|ipod/gi.test(n),
          t.supportsTransition = K(),
          t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),
          i = e(document),
          t.popupsCache = {}
      },
      open: function(a) {
          if (a.isObj === !1) {
              {
                  t.items = a.items.toArray(),
                  t.index = 0,
                  f = a.items;
                  for (r = 0; r < f.length; r++)
                      if (l = f[r],
                      l.parsed && (l = l.el[0]),
                      l === a.el[0]) {
                          t.index = r;
                          break
                      }
              }
          } else
              t.items = e.isArray(a.items) ? a.items : [a.items],
              t.index = a.index || 0;
          if (t.isOpen)
              return void t.updateItemHTML();
          t.types = [],
          c = "",
          a.mainEl && a.mainEl.length ? t.ev = a.mainEl.eq(0) : t.ev = i,
          a.key ? (t.popupsCache[a.key] || (t.popupsCache[a.key] = {}),
          t.currTemplate = t.popupsCache[a.key]) : t.currTemplate = {},
          t.st = e.extend(!0, {}, e.magnificPopup.defaults, a),
          t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos,
          t.st.modal && (t.st.closeOnContentClick = !1,
          t.st.closeOnBgClick = !1,
          t.st.showCloseBtn = !1,
          t.st.enableEscapeKey = !1),
          t.bgOverlay || (t.bgOverlay = h("bg").on("click" + o, function() {
              t.close()
          }),
          t.wrap = h("wrap").attr("tabindex", -1).on("click" + o, function(e) {
              t._checkIfClose(e.target) && t.close()
          }),
          t.container = h("container", t.wrap)),
          t.contentContainer = h("content"),
          t.st.preloader && (t.preloader = h("preloader", t.container, t.st.tLoading)),
          p = e.magnificPopup.modules;
          for (r = 0; r < p.length; r++)
              u = p[r],
              u = u.charAt(0).toUpperCase() + u.slice(1),
              t["init" + u].call(t);
          n("BeforeOpen"),
          t.st.showCloseBtn && (t.st.closeBtnInside ? (s(O, function(e, t, n, s) {
              n.close_replaceWith = C(s.type)
          }),
          c += " mfp-close-btn-in") : t.wrap.append(C())),
          t.st.alignTop && (c += " mfp-align-top"),
          t.fixedContentPos ? t.wrap.css({
              overflow: t.st.overflowY,
              overflowX: "hidden",
              overflowY: t.st.overflowY
          }) : t.wrap.css({
              top: d.scrollTop(),
              position: "absolute"
          }),
          (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
              height: i.height(),
              position: "absolute"
          }),
          t.st.enableEscapeKey && i.on("keyup" + o, function(e) {
              27 === e.keyCode && t.close()
          }),
          d.on("resize" + o, function() {
              t.updateSize()
          }),
          t.st.closeOnContentClick || (c += " mfp-auto-cursor"),
          c && t.wrap.addClass(c);
          var r, l, u, m, f, p, b, j = t.wH = d.height(), g = {};
          return t.fixedContentPos && t._hasScrollBar(j) && (b = t._getScrollbarSize(),
          b && (g.marginRight = b)),
          t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : g.overflow = "hidden"),
          m = t.st.mainClass,
          t.isIE7 && (m += " mfp-ie7"),
          m && t._addClassToMFP(m),
          t.updateItemHTML(),
          n("BuildControls"),
          e("html").css(g),
          t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)),
          t._lastFocusedEl = document.activeElement,
          setTimeout(function() {
              t.content ? (t._addClassToMFP(v),
              t._setFocus()) : t.bgOverlay.addClass(v),
              i.on("focusin" + o, t._onFocusIn)
          }, 16),
          t.isOpen = !0,
          t.updateSize(j),
          n(F),
          a
      },
      close: function() {
          t.isOpen && (n(I),
          t.isOpen = !1,
          t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(B),
          setTimeout(function() {
              t._close()
          }, t.st.removalDelay)) : t._close())
      },
      _close: function() {
          n(l);
          var s, a = B + " " + v + " ";
          (t.bgOverlay.detach(),
          t.wrap.detach(),
          t.container.empty(),
          t.st.mainClass && (a += t.st.mainClass + " "),
          t._removeClassFromMFP(a),
          t.fixedContentPos) && (s = {
              marginRight: ""
          },
          t.isIE7 ? e("body, html").css("overflow", "") : s.overflow = "",
          e("html").css(s)),
          i.off("keyup" + o + " focusin" + o),
          t.ev.off(o),
          t.wrap.attr("class", "mfp-wrap").removeAttr("style"),
          t.bgOverlay.attr("class", "mfp-bg"),
          t.container.attr("class", "mfp-container"),
          !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(),
          t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(),
          t.currItem = null,
          t.content = null,
          t.currTemplate = null,
          t.prevHeight = 0,
          n($)
      },
      updateSize: function(e) {
          if (t.isIOS) {
              var o = document.documentElement.clientWidth / window.innerWidth
                , s = window.innerHeight * o;
              t.wrap.css("height", s),
              t.wH = s
          } else
              t.wH = e || d.height();
          t.fixedContentPos || t.wrap.css("height", t.wH),
          n("Resize")
      },
      updateItemHTML: function() {
          var s, i, a, o = t.items[t.index];
          t.contentContainer.detach(),
          t.content && t.content.detach(),
          o.parsed || (o = t.parseEl(t.index)),
          s = o.type,
          (n("BeforeChange", [t.currItem ? t.currItem.type : "", s]),
          t.currItem = o,
          !t.currTemplate[s]) && (i = !!t.st[s] && t.st[s].markup,
          n("FirstMarkupParse", i),
          i ? t.currTemplate[s] = e(i) : t.currTemplate[s] = !0),
          j && j !== o.type && t.container.removeClass("mfp-" + j + "-holder"),
          a = t["get" + s.charAt(0).toUpperCase() + s.slice(1)](o, t.currTemplate[s]),
          t.appendContent(a, s),
          o.preloaded = !0,
          n(V, o),
          j = o.type,
          t.container.prepend(t.contentContainer),
          n("AfterChange")
      },
      appendContent: function(e, s) {
          t.content = e,
          e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[s] === !0 ? t.content.find(".mfp-close").length || t.content.append(C()) : t.content = e : t.content = "",
          n(W),
          t.container.addClass("mfp-" + s + "-holder"),
          t.contentContainer.append(t.content)
      },
      parseEl: function(s) {
          if (o = t.items[s],
          o.tagName ? o = {
              el: e(o)
          } : (a = o.type,
          o = {
              data: o,
              src: o.src
          }),
          o.el) {
              for (var o, a, r = t.types, i = 0; i < r.length; i++)
                  if (o.el.hasClass("mfp-" + r[i])) {
                      a = r[i];
                      break
                  }
              o.src = o.el.attr("data-mfp-src"),
              o.src || (o.src = o.el.attr("href"))
          }
          return o.type = a || t.st.type || "inline",
          o.index = s,
          o.parsed = !0,
          t.items[s] = o,
          n("ElementParse", o),
          t.items[s]
      },
      addGroup: function(e, n) {
          var s, o = function(s) {
              s.mfpEl = this,
              t._openClick(s, e, n)
          };
          n || (n = {}),
          s = "click.magnificPopup",
          n.mainEl = e,
          n.items ? (n.isObj = !0,
          e.off(s).on(s, o)) : (n.isObj = !1,
          n.delegate ? e.off(s).on(s, n.delegate, o) : (n.items = e,
          e.off(s).on(s, o)))
      },
      _openClick: function(n, s, o) {
          var i, a = void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick;
          if (a || !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)) {
              if (i = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn,
              i)
                  if (e.isFunction(i)) {
                      if (!i.call(t))
                          return !0
                  } else if (d.width() < i)
                      return !0;
              n.type && (n.preventDefault(),
              t.isOpen && n.stopPropagation()),
              o.el = e(n.mfpEl),
              o.delegate && (o.items = s.find(o.delegate)),
              t.open(o)
          }
      },
      updateStatus: function(e, s) {
          if (t.preloader) {
              S !== e && t.container.removeClass("mfp-s-" + S),
              s || "loading" !== e || (s = t.st.tLoading);
              var o = {
                  status: e,
                  text: s
              };
              n("UpdateStatus", o),
              e = o.status,
              s = o.text,
              t.preloader.html(s),
              t.preloader.find("a").on("click", function(e) {
                  e.stopImmediatePropagation()
              }),
              t.container.addClass("mfp-s-" + e),
              S = e
          }
      },
      _checkIfClose: function(n) {
          if (!e(n).hasClass(x)) {
              var s = t.st.closeOnContentClick
                , o = t.st.closeOnBgClick;
              if (s && o)
                  return !0;
              if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0])
                  return !0;
              if (n === t.content[0] || e.contains(t.content[0], n)) {
                  if (s)
                      return !0
              } else if (o && e.contains(document, n))
                  return !0;
              return !1
          }
      },
      _addClassToMFP: function(e) {
          t.bgOverlay.addClass(e),
          t.wrap.addClass(e)
      },
      _removeClassFromMFP: function(e) {
          this.bgOverlay.removeClass(e),
          t.wrap.removeClass(e)
      },
      _hasScrollBar: function(e) {
          return (t.isIE7 ? i.height() : document.body.scrollHeight) > (e || d.height())
      },
      _setFocus: function() {
          (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
      },
      _onFocusIn: function(n) {
          return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(),
          !1)
      },
      _parseMarkup: function(t, s, i) {
          var a;
          i.data && (s = e.extend(i.data, s)),
          n(O, [t, s, i]),
          e.each(s, function(n, s) {
              if (void 0 === s || s === !1)
                  return !0;
              if (a = n.split("_"),
              a.length > 1) {
                  var r, i = t.find(o + "-" + a[0]);
                  i.length > 0 && (r = a[1],
                  "replaceWith" === r ? i[0] !== s[0] && i.replaceWith(s) : "img" === r ? i.is("img") ? i.attr("src", s) : i.replaceWith(e("<img>").attr("src", s).attr("class", i.attr("class"))) : i.attr(a[1], s))
              } else
                  t.find(o + "-" + n).html(s)
          })
      },
      _getScrollbarSize: function() {
          if (void 0 === t.scrollbarSize) {
              var e = document.createElement("div");
              e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",
              document.body.appendChild(e),
              t.scrollbarSize = e.offsetWidth - e.clientWidth,
              document.body.removeChild(e)
          }
          return t.scrollbarSize
      }
  },
  e.magnificPopup = {
      instance: null,
      proto: y.prototype,
      modules: [],
      open: function(t, n) {
          return E(),
          t = t ? e.extend(!0, {}, t) : {},
          t.isObj = !0,
          t.index = n || 0,
          this.instance.open(t)
      },
      close: function() {
          return e.magnificPopup.instance && e.magnificPopup.instance.close()
      },
      registerModule: function(t, n) {
          n.options && (e.magnificPopup.defaults[t] = n.options),
          e.extend(this.proto, n.proto),
          this.modules.push(t)
      },
      defaults: {
          disableOn: 0,
          key: null,
          midClick: !1,
          mainClass: "",
          preloader: !0,
          focus: "",
          closeOnContentClick: !1,
          closeOnBgClick: !0,
          closeBtnInside: !0,
          showCloseBtn: !0,
          enableEscapeKey: !0,
          modal: !1,
          alignTop: !1,
          removalDelay: 0,
          prependTo: null,
          fixedContentPos: "auto",
          fixedBgPos: "auto",
          overflowY: "auto",
          closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
          tClose: "Close (Esc)",
          tLoading: "Loading...",
          autoFocusLast: !0
      }
  },
  e.fn.magnificPopup = function(n) {
      if (E(),
      s = e(this),
      "string" == typeof n)
          if ("open" === n) {
              var s, o, i = z ? s.data("magnificPopup") : s[0].magnificPopup, a = parseInt(arguments[1], 10) || 0;
              i.items ? o = i.items[a] : (o = s,
              i.delegate && (o = o.find(i.delegate)),
              o = o.eq(a)),
              t._openClick({
                  mfpEl: o
              }, s, i)
          } else
              t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
      else
          n = e.extend(!0, {}, n),
          z ? s.data("magnificPopup", n) : s[0].magnificPopup = n,
          t.addGroup(s, n);
      return s
  }
  ,
  _ = "inline",
  T = function() {
      w && (p.after(w.addClass(u)).detach(),
      w = null)
  }
  ,
  e.magnificPopup.registerModule(_, {
      options: {
          hiddenClass: "hide",
          markup: "",
          tNotFound: "Content not found"
      },
      proto: {
          initInline: function() {
              t.types.push(_),
              s(l + "." + _, function() {
                  T()
              })
          },
          getInline: function(n, s) {
              if (T(),
              n.src) {
                  var i, a = t.st.inline, o = e(n.src);
                  return o.length ? (i = o[0].parentNode,
                  i && i.tagName && (p || (u = a.hiddenClass,
                  p = h(u),
                  u = "mfp-" + u),
                  w = o.after(p).detach().removeClass(u)),
                  t.updateStatus("ready")) : (t.updateStatus("error", a.tNotFound),
                  o = e("<div>")),
                  n.inlineElement = o,
                  o
              }
              return t.updateStatus("ready"),
              t._parseMarkup(s, {}, n),
              s
          }
      }
  });
  var f, m = "ajax", N = function() {
      f && e(document.body).removeClass(f)
  }, R = function() {
      N(),
      t.req && t.req.abort()
  };
  e.magnificPopup.registerModule(m, {
      options: {
          settings: null,
          cursor: "mfp-ajax-cur",
          tError: '<a href="%url%">The content</a> could not be loaded.'
      },
      proto: {
          initAjax: function() {
              t.types.push(m),
              f = t.st.ajax.cursor,
              s(l + "." + m, R),
              s("BeforeChange." + m, R)
          },
          getAjax: function(s) {
              f && e(document.body).addClass(f),
              t.updateStatus("loading");
              var o = e.extend({
                  url: s.src,
                  success: function(o, i, a) {
                      var r = {
                          data: o,
                          xhr: a
                      };
                      n("ParseAjax", r),
                      t.appendContent(e(r.data), m),
                      s.finished = !0,
                      N(),
                      t._setFocus(),
                      setTimeout(function() {
                          t.wrap.addClass(v)
                      }, 16),
                      t.updateStatus("ready"),
                      n("AjaxContentAdded")
                  },
                  error: function() {
                      N(),
                      s.finished = s.loadError = !0,
                      t.updateStatus("error", t.st.ajax.tError.replace("%url%", s.src))
                  }
              }, t.st.ajax.settings);
              return t.req = e.ajax(o),
              ""
          }
      }
  }),
  P = function(n) {
      if (n.data && void 0 !== n.data.title)
          return n.data.title;
      var s = t.st.image.titleSrc;
      if (s) {
          if (e.isFunction(s))
              return s.call(t, n);
          if (n.el)
              return n.el.attr(s) || ""
      }
      return ""
  }
  ,
  e.magnificPopup.registerModule("image", {
      options: {
          markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
          cursor: "mfp-zoom-out-cur",
          titleSrc: "title",
          verticalFit: !0,
          tError: '<a href="%url%">The image</a> could not be loaded.'
      },
      proto: {
          initImage: function() {
              var n = t.st.image
                , i = ".image";
              t.types.push("image"),
              s(F + i, function() {
                  "image" === t.currItem.type && n.cursor && e(document.body).addClass(n.cursor)
              }),
              s(l + i, function() {
                  n.cursor && e(document.body).removeClass(n.cursor),
                  d.off("resize" + o)
              }),
              s("Resize" + i, t.resizeImage),
              t.isLowIE && s("AfterChange", t.resizeImage)
          },
          resizeImage: function() {
              var n, e = t.currItem;
              e && e.img && t.st.image.verticalFit && (n = 0,
              t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)),
              e.img.css("max-height", t.wH - n))
          },
          _onImageHasSize: function(e) {
              e.img && (e.hasSize = !0,
              a && clearInterval(a),
              e.isCheckingImgSize = !1,
              n("ImageHasSize", e),
              e.imgHidden && (t.content && t.content.removeClass("mfp-loading"),
              e.imgHidden = !1))
          },
          findImageSize: function(e) {
              var n = 0
                , o = e.img[0]
                , s = function(i) {
                  a && clearInterval(a),
                  a = setInterval(function() {
                      return o.naturalWidth > 0 ? void t._onImageHasSize(e) : (n > 200 && clearInterval(a),
                      n++,
                      void (3 === n ? s(10) : 40 === n ? s(50) : 100 === n && s(500)))
                  }, i)
              };
              s(1)
          },
          getImage: function(s, o) {
              var i, r = 0, c = function() {
                  s && (s.img[0].complete ? (s.img.off(".mfploader"),
                  s === t.currItem && (t._onImageHasSize(s),
                  t.updateStatus("ready")),
                  s.hasSize = !0,
                  s.loaded = !0,
                  n("ImageLoadComplete")) : (r++,
                  200 > r ? setTimeout(c, 100) : l()))
              }, l = function() {
                  s && (s.img.off(".mfploader"),
                  s === t.currItem && (t._onImageHasSize(s),
                  t.updateStatus("error", d.tError.replace("%url%", s.src))),
                  s.hasSize = !0,
                  s.loaded = !0,
                  s.loadError = !0)
              }, d = t.st.image, u = o.find(".mfp-img");
              return u.length && (i = document.createElement("img"),
              i.className = "mfp-img",
              s.el && s.el.find("img").length && (i.alt = s.el.find("img").attr("alt")),
              s.img = e(i).on("load.mfploader", c).on("error.mfploader", l),
              i.src = s.src,
              u.is("img") && (s.img = s.img.clone()),
              i = s.img[0],
              i.naturalWidth > 0 ? s.hasSize = !0 : i.width || (s.hasSize = !1)),
              t._parseMarkup(o, {
                  title: P(s),
                  img_replaceWith: s.img
              }, s),
              t.resizeImage(),
              s.hasSize ? (a && clearInterval(a),
              s.loadError ? (o.addClass("mfp-loading"),
              t.updateStatus("error", d.tError.replace("%url%", s.src))) : (o.removeClass("mfp-loading"),
              t.updateStatus("ready")),
              o) : (t.updateStatus("loading"),
              s.loading = !0,
              s.hasSize || (s.imgHidden = !0,
              o.addClass("mfp-loading"),
              t.findImageSize(s)),
              o)
          }
      }
  }),
  H = function() {
      return void 0 === D && (D = void 0 !== document.createElement("p").style.MozTransform),
      D
  }
  ,
  e.magnificPopup.registerModule("zoom", {
      options: {
          enabled: !1,
          easing: "ease-in-out",
          duration: 300,
          opener: function(e) {
              return e.is("img") ? e : e.find("img")
          }
      },
      proto: {
          initZoom: function() {
              if (i = t.st.zoom,
              a = ".zoom",
              i.enabled && t.supportsTransition) {
                  var e, o, i, a, r, d = i.duration, u = function(e) {
                      var s = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image")
                        , o = "all " + i.duration / 1e3 + "s " + i.easing
                        , t = {
                          position: "fixed",
                          zIndex: 9999,
                          left: 0,
                          top: 0,
                          "-webkit-backface-visibility": "hidden"
                      }
                        , n = "transition";
                      return t["-webkit-" + n] = t["-moz-" + n] = t["-o-" + n] = t[n] = o,
                      s.css(t),
                      s
                  }, c = function() {
                      t.content.css("visibility", "visible")
                  };
                  s("BuildControls" + a, function() {
                      if (t._allowZoom()) {
                          if (clearTimeout(r),
                          t.content.css("visibility", "hidden"),
                          o = t._getItemToZoom(),
                          !o)
                              return void c();
                          e = u(o),
                          e.css(t._getOffset()),
                          t.wrap.append(e),
                          r = setTimeout(function() {
                              e.css(t._getOffset(!0)),
                              r = setTimeout(function() {
                                  c(),
                                  setTimeout(function() {
                                      e.remove(),
                                      o = e = null,
                                      n("ZoomAnimationEnded")
                                  }, 16)
                              }, d)
                          }, 16)
                      }
                  }),
                  s(I + a, function() {
                      if (t._allowZoom()) {
                          if (clearTimeout(r),
                          t.st.removalDelay = d,
                          !o) {
                              if (o = t._getItemToZoom(),
                              !o)
                                  return;
                              e = u(o)
                          }
                          e.css(t._getOffset(!0)),
                          t.wrap.append(e),
                          t.content.css("visibility", "hidden"),
                          setTimeout(function() {
                              e.css(t._getOffset())
                          }, 16)
                      }
                  }),
                  s(l + a, function() {
                      t._allowZoom() && (c(),
                      e && e.remove(),
                      o = null)
                  })
              }
          },
          _allowZoom: function() {
              return "image" === t.currItem.type
          },
          _getItemToZoom: function() {
              return !!t.currItem.hasSize && t.currItem.img
          },
          _getOffset: function(n) {
              var o, s = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem), i = s.offset(), a = parseInt(s.css("padding-top"), 10), r = parseInt(s.css("padding-bottom"), 10);
              return i.top -= e(window).scrollTop() - a,
              o = {
                  width: s.width(),
                  height: (z ? s.innerHeight() : s[0].offsetHeight) - r - a
              },
              H() ? o["-moz-transform"] = o.transform = "translate(" + i.left + "px," + i.top + "px)" : (o.left = i.left,
              o.top = i.top),
              o
          }
      }
  });
  var r = "iframe"
    , U = "//about:blank"
    , A = function(e) {
      if (t.currTemplate[r]) {
          var n = t.currTemplate[r].find("iframe");
          n.length && (e || (n[0].src = U),
          t.isIE8 && n.css("display", e ? "block" : "none"))
      }
  };
  e.magnificPopup.registerModule(r, {
      options: {
          markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
          srcAction: "iframe_src",
          patterns: {
              youtube: {
                  index: "youtube.com",
                  id: "v=",
                  src: "//www.youtube.com/embed/%id%?autoplay=1"
              },
              vimeo: {
                  index: "vimeo.com/",
                  id: "/",
                  src: "//player.vimeo.com/video/%id%?autoplay=1"
              },
              gmaps: {
                  index: "//maps.google.",
                  src: "%id%&output=embed"
              }
          }
      },
      proto: {
          initIframe: function() {
              t.types.push(r),
              s("BeforeChange", function(e, t, n) {
                  t !== n && (t === r ? A() : n === r && A(!0))
              }),
              s(l + "." + r, function() {
                  A()
              })
          },
          getIframe: function(n, s) {
              var a, o = n.src, i = t.st.iframe;
              return e.each(i.patterns, function() {
                  return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)),
                  o = this.src.replace("%id%", o),
                  !1) : void 0
              }),
              a = {},
              i.srcAction && (a[i.srcAction] = o),
              t._parseMarkup(s, a, n),
              t.updateStatus("ready"),
              s
          }
      }
  }),
  b = function(e) {
      var n = t.items.length;
      return e > n - 1 ? e - n : 0 > e ? n + e : e
  }
  ,
  k = function(e, t, n) {
      return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
  }
  ,
  e.magnificPopup.registerModule("gallery", {
      options: {
          enabled: !1,
          arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
          preload: [0, 2],
          navigateByImgClick: !0,
          arrows: !0,
          tPrev: "Previous (Left arrow key)",
          tNext: "Next (Right arrow key)",
          tCounter: "%curr% of %total%"
      },
      proto: {
          initGallery: function() {
              var o = t.st.gallery
                , n = ".mfp-gallery";
              return t.direction = !0,
              !!(o && o.enabled) && (c += " mfp-gallery",
              s(F + n, function() {
                  o.navigateByImgClick && t.wrap.on("click" + n, ".mfp-img", function() {
                      return t.items.length > 1 ? (t.next(),
                      !1) : void 0
                  }),
                  i.on("keydown" + n, function(e) {
                      37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                  })
              }),
              s("UpdateStatus" + n, function(e, n) {
                  n.text && (n.text = k(n.text, t.currItem.index, t.items.length))
              }),
              s(O + n, function(e, n, s, i) {
                  var a = t.items.length;
                  s.counter = a > 1 ? k(o.tCounter, i.index, a) : ""
              }),
              s("BuildControls" + n, function() {
                  if (t.items.length > 1 && o.arrows && !t.arrowLeft) {
                      var n = o.arrowMarkup
                        , s = t.arrowLeft = e(n.replace(/%title%/gi, o.tPrev).replace(/%dir%/gi, "left")).addClass(x)
                        , i = t.arrowRight = e(n.replace(/%title%/gi, o.tNext).replace(/%dir%/gi, "right")).addClass(x);
                      s.click(function() {
                          t.prev()
                      }),
                      i.click(function() {
                          t.next()
                      }),
                      t.container.append(s.add(i))
                  }
              }),
              s(V + n, function() {
                  t._preloadTimeout && clearTimeout(t._preloadTimeout),
                  t._preloadTimeout = setTimeout(function() {
                      t.preloadNearbyImages(),
                      t._preloadTimeout = null
                  }, 16)
              }),
              void s(l + n, function() {
                  i.off(n),
                  t.wrap.off("click" + n),
                  t.arrowRight = t.arrowLeft = null
              }))
          },
          next: function() {
              t.direction = !0,
              t.index = b(t.index + 1),
              t.updateItemHTML()
          },
          prev: function() {
              t.direction = !1,
              t.index = b(t.index - 1),
              t.updateItemHTML()
          },
          goTo: function(e) {
              t.direction = e >= t.index,
              t.index = e,
              t.updateItemHTML()
          },
          preloadNearbyImages: function() {
              var e, n = t.st.gallery.preload, s = Math.min(n[0], t.items.length), o = Math.min(n[1], t.items.length);
              for (e = 1; e <= (t.direction ? o : s); e++)
                  t._preloadItem(t.index + e);
              for (e = 1; e <= (t.direction ? s : o); e++)
                  t._preloadItem(t.index - e)
          },
          _preloadItem: function(s) {
              if (s = b(s),
              !t.items[s].preloaded) {
                  var o = t.items[s];
                  o.parsed || (o = t.parseEl(s)),
                  n("LazyLoad", o),
                  "image" === o.type && (o.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
                      o.hasSize = !0
                  }).on("error.mfploader", function() {
                      o.hasSize = !0,
                      o.loadError = !0,
                      n("LazyLoadError", o)
                  }).attr("src", o.src)),
                  o.preloaded = !0
              }
          }
      }
  }),
  g = "retina",
  e.magnificPopup.registerModule(g, {
      options: {
          replaceSrc: function(e) {
              return e.src.replace(/\.\w+$/, function(e) {
                  return "@2x" + e
              })
          },
          ratio: 1
      },
      proto: {
          initRetina: function() {
              if (window.devicePixelRatio > 1) {
                  var n = t.st.retina
                    , e = n.ratio
                    , e = isNaN(e) ? e() : e;
                  e > 1 && (s("ImageHasSize." + g, function(t, n) {
                      n.img.css({
                          "max-width": n.img[0].naturalWidth / e,
                          width: "100%"
                      })
                  }),
                  s("ElementParse." + g, function(t, s) {
                      s.src = n.replaceSrc(s, e)
                  }))
              }
          }
      }
  }),
  E()
})
