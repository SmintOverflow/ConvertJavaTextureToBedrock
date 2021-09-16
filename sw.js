var __wpo = {
    assets: {
        main: [
            "./webapp/favicon-16x16.png",
            "./webapp/favicon-32x32.png",
            "./webapp/favicon.ico",
            "./webapp/android-chrome-36x36.png",
            "./webapp/android-chrome-48x48.png",
            "./webapp/android-chrome-72x72.png",
            "./webapp/android-chrome-96x96.png",
            "./webapp/android-chrome-144x144.png",
            "./webapp/android-chrome-192x192.png",
            "./webapp/android-chrome-256x256.png",
            "./webapp/android-chrome-384x384.png",
            "./webapp/android-chrome-512x512.png",
            "./webapp/apple-touch-icon-57x57.png",
            "./webapp/apple-touch-icon-60x60.png",
            "./webapp/apple-touch-icon-72x72.png",
            "./webapp/apple-touch-icon-76x76.png",
            "./webapp/apple-touch-icon-114x114.png",
            "./webapp/apple-touch-icon-120x120.png",
            "./webapp/apple-touch-icon-144x144.png",
            "./webapp/apple-touch-icon-152x152.png",
            "./webapp/apple-touch-icon-167x167.png",
            "./webapp/apple-touch-icon-180x180.png",
            "./webapp/apple-touch-icon-1024x1024.png",
            "./webapp/apple-touch-icon.png",
            "./webapp/apple-touch-icon-precomposed.png",
            "./webapp/manifest.json",
            "./worker.5a6684198085bc2e0009.js",
            "./index.05b99aea103379661040.css",
            "./index.50da982777d168360a5c.js",
            "./",
        ],
        additional: [],
        optional: [],
    },
    externals: [],
    hashesMap: {
        "8dddb3102be7e9fce2d330114a26fed0d417e440": "./webapp/favicon-16x16.png",
        "0d38b0883c8658ea67e7ce924a95c3f8414d4431": "./webapp/favicon-32x32.png",
        f9b6a38666d542d0a2cb11e2b9133fc0d8c53582: "./webapp/favicon.ico",
        "1f1cce90f52b28127ef7438482721c02e30c31cc": "./webapp/android-chrome-36x36.png",
        a28594d8276b2ebdcdac778ebc383129a91b8b00: "./webapp/android-chrome-48x48.png",
        bbdffc3176eedafa48f288d8336a94e180b7b2f5: "./webapp/apple-touch-icon-72x72.png",
        d4b3bd108532739b3b244d3bc929ae930b82bdd8: "./webapp/android-chrome-96x96.png",
        e6ce0280b9a0ca41aec6bb941d1903c1cc4bc9d0: "./webapp/apple-touch-icon-144x144.png",
        "5da5c80d1f72f3b27c1250a73aa7dd1d8cb43ec9": "./webapp/android-chrome-192x192.png",
        "102b07a39fb363615fd8961f023e710da1849e88": "./webapp/android-chrome-256x256.png",
        "6666888baa1e464045dcc83987b63dbdb20c9ab3": "./webapp/android-chrome-384x384.png",
        e66abecfbe3667bd5378e05465526c0cb78b1c73: "./webapp/android-chrome-512x512.png",
        "62ec59fcaac83ed6e5caefbf85e9f78fd84caa71": "./webapp/apple-touch-icon-57x57.png",
        "5fcfc7b675c7deb3c093c54051174104ba5cb9c3": "./webapp/apple-touch-icon-60x60.png",
        ebfa6c650b171cc0457e705827f6160b47f55d0d: "./webapp/apple-touch-icon-76x76.png",
        "541793229069aaf9f869dbda870e6ad9d99f7dfb": "./webapp/apple-touch-icon-114x114.png",
        bc0d199e2b7fb54adbaea284082d80b21330d6d3: "./webapp/apple-touch-icon-120x120.png",
        e3b28e3ca97e68ad917baf6bd6ece1022e49de7b: "./webapp/apple-touch-icon-152x152.png",
        bc400f5ac7901f12845d36ece61b7ec7ca20c746: "./webapp/apple-touch-icon-167x167.png",
        ca0967cc4c381fc6619f3a6453fa70b46fd6dd67: "./webapp/apple-touch-icon-precomposed.png",
        c05435730a29aef0b4c0e1079a5cdaacd0135429: "./webapp/apple-touch-icon-1024x1024.png",
        "4364ad4d15d7e0b84df6dcf5bab8731916ae64af": "./webapp/manifest.json",
        c4ba66a2f10a6192a03b147d9ef00d21e18e7004: "./worker.5a6684198085bc2e0009.js",
        "9adf9cc65ac77ff408fbbe1ba7cb22ef8bdc2a5b": "./index.05b99aea103379661040.css",
        "104bf5bece62c2ed1c2ccfbf31e47f9dbf24530b": "./index.50da982777d168360a5c.js",
        b0778767aeb74ea2856cc046fdadb6a8e9cd43cf: "./",
    },
    strategy: "changed",
    responseStrategy: "cache-first",
    version: "4.2.0",
    name: "webpack-offline",
    pluginVersion: "5.0.7",
    relativePaths: true,
};

!(function (e) {
    var n = {};
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = (n[r] = { i: r, l: !1, exports: {} });
        return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    (t.m = e),
        (t.c = n),
        (t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: r });
        }),
        (t.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (t.t = function (e, n) {
            if ((1 & n && (e = t(e)), 8 & n)) return e;
            if (4 & n && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if ((t.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & n && "string" != typeof e))
                for (var o in e)
                    t.d(
                        r,
                        o,
                        function (n) {
                            return e[n];
                        }.bind(null, o)
                    );
            return r;
        }),
        (t.n = function (e) {
            var n =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return t.d(n, "a", n), n;
        }),
        (t.o = function (e, n) {
            return Object.prototype.hasOwnProperty.call(e, n);
        }),
        (t.p = ""),
        t((t.s = 0));
})([
    function (e, n, t) {
        "use strict";
        var r, o, i;
        if (
            ((r = ExtendableEvent.prototype.waitUntil),
            (o = FetchEvent.prototype.respondWith),
            (i = new WeakMap()),
            (ExtendableEvent.prototype.waitUntil = function (e) {
                var n = this,
                    t = i.get(n);
                if (!t)
                    return (
                        (t = [Promise.resolve(e)]),
                        i.set(n, t),
                        r.call(
                            n,
                            Promise.resolve().then(function e() {
                                var r = t.length;
                                return Promise.all(
                                    t.map(function (e) {
                                        return e.catch(function () {});
                                    })
                                ).then(function () {
                                    return t.length != r ? e() : (i.delete(n), Promise.all(t));
                                });
                            })
                        )
                    );
                t.push(Promise.resolve(e));
            }),
            (FetchEvent.prototype.respondWith = function (e) {
                return this.waitUntil(e), o.call(this, e);
            }),
            void 0 === a)
        )
            var a = !1;
        function c(e, n) {
            return caches
                .match(e, { cacheName: n })
                .then(function (t) {
                    return u(t)
                        ? t
                        : s(t).then(function (t) {
                              return caches
                                  .open(n)
                                  .then(function (n) {
                                      return n.put(e, t);
                                  })
                                  .then(function () {
                                      return t;
                                  });
                          });
                })
                .catch(function () {});
        }
        function u(e) {
            return !e || !e.redirected || !e.ok || "opaqueredirect" === e.type;
        }
        function s(e) {
            return u(e)
                ? Promise.resolve(e)
                : ("body" in e ? Promise.resolve(e.body) : e.blob()).then(function (n) {
                      return new Response(n, { headers: e.headers, status: e.status });
                  });
        }
        function f(e, n) {
            console.groupCollapsed("[SW]:", e),
                n.forEach(function (e) {
                    console.log("Asset:", e);
                }),
                console.groupEnd();
        }
        !(function (e, n) {
            var t = n.cacheMaps,
                r = n.navigationPreload,
                o = e.strategy,
                i = e.responseStrategy,
                u = e.assets,
                l = e.hashesMap,
                h = e.externals,
                d = e.prefetchRequest || { credentials: "same-origin", mode: "cors" },
                p = e.name,
                v = e.version,
                m = p + ":" + v,
                g = p + "$preload";
            Object.keys(u).forEach(function (e) {
                u[e] = u[e].map(function (e) {
                    var n = new URL(e, location);
                    return (n.hash = ""), -1 === h.indexOf(e) && (n.search = ""), n.toString();
                });
            }),
                (l = Object.keys(l).reduce(function (e, n) {
                    var t = new URL(l[n], location);
                    return (t.search = ""), (t.hash = ""), (e[n] = t.toString()), e;
                }, {})),
                (h = h.map(function (e) {
                    var n = new URL(e, location);
                    return (n.hash = ""), n.toString();
                }));
            var w = [].concat(u.main, u.additional, u.optional);
            function y(n) {
                var t = u[n];
                return caches
                    .open(m)
                    .then(function (r) {
                        return U(r, t, { bust: e.version, request: d, failAll: "main" === n });
                    })
                    .then(function () {
                        f("Cached assets: " + n, t);
                    })
                    .catch(function (e) {
                        throw (console.error(e), e);
                    });
            }
            function b(n) {
                return caches
                    .keys()
                    .then(function (e) {
                        for (var n = e.length, t = void 0; n-- && 0 !== (t = e[n]).indexOf(p); );
                        if (t) {
                            var r = void 0;
                            return caches
                                .open(t)
                                .then(function (e) {
                                    return (r = e), e.match(new URL("__offline_webpack__data", location).toString());
                                })
                                .then(function (e) {
                                    if (e) return Promise.all([r, r.keys(), e.json()]);
                                });
                        }
                    })
                    .then(function (t) {
                        if (!t) return y(n);
                        var r = t[0],
                            o = t[1],
                            i = t[2],
                            a = i.hashmap,
                            c = i.version;
                        if (!i.hashmap || c === e.version) return y(n);
                        var s = Object.keys(a).map(function (e) {
                                return a[e];
                            }),
                            h = o.map(function (e) {
                                var n = new URL(e.url);
                                return (n.search = ""), (n.hash = ""), n.toString();
                            }),
                            p = u[n],
                            v = [],
                            g = p.filter(function (e) {
                                return -1 === h.indexOf(e) || -1 === s.indexOf(e);
                            });
                        Object.keys(l).forEach(function (e) {
                            var n = l[e];
                            if (-1 !== p.indexOf(n) && -1 === g.indexOf(n) && -1 === v.indexOf(n)) {
                                var t = a[e];
                                t && -1 !== h.indexOf(t) ? v.push([t, n]) : g.push(n);
                            }
                        }),
                            f("Changed assets: " + n, g),
                            f("Moved assets: " + n, v);
                        var w = Promise.all(
                            v.map(function (e) {
                                return r.match(e[0]).then(function (n) {
                                    return [e[1], n];
                                });
                            })
                        );
                        return caches.open(m).then(function (t) {
                            var r = w.then(function (e) {
                                return Promise.all(
                                    e.map(function (e) {
                                        return t.put(e[0], e[1]);
                                    })
                                );
                            });
                            return Promise.all([r, U(t, g, { bust: e.version, request: d, failAll: "main" === n, deleteFirst: "main" !== n })]);
                        });
                    });
            }
            function P() {
                return caches.keys().then(function (e) {
                    var n = e.map(function (e) {
                        if (0 === e.indexOf(p) && 0 !== e.indexOf(m)) return console.log("[SW]:", "Delete cache:", e), caches.delete(e);
                    });
                    return Promise.all(n);
                });
            }
            function O() {
                return caches.open(m).then(function (n) {
                    var t = new Response(JSON.stringify({ version: e.version, hashmap: l }));
                    return n.put(new URL("__offline_webpack__data", location).toString(), t);
                });
            }
            self.addEventListener("install", function (e) {
                console.log("[SW]:", "Install event");
                var n = void 0;
                (n = "changed" === o ? b("main") : y("main")), e.waitUntil(n);
            }),
                self.addEventListener("activate", function (e) {
                    console.log("[SW]:", "Activate event");
                    var n = (function () {
                        if (!u.additional.length) return Promise.resolve();
                        a && console.log("[SW]:", "Caching additional");
                        var e = void 0;
                        e = "changed" === o ? b("additional") : y("additional");
                        return e.catch(function (e) {
                            console.error("[SW]:", "Cache section `additional` failed to load");
                        });
                    })();
                    (n = (n = (n = n.then(O)).then(P)).then(function () {
                        if (self.clients && self.clients.claim) return self.clients.claim();
                    })),
                        r && self.registration.navigationPreload && (n = Promise.all([n, self.registration.navigationPreload.enable()])),
                        e.waitUntil(n);
                }),
                self.addEventListener("fetch", function (e) {
                    if ("GET" === e.request.method && ("only-if-cached" !== e.request.cache || "same-origin" === e.request.mode)) {
                        var n = new URL(e.request.url);
                        n.hash = "";
                        var o = n.toString();
                        -1 === h.indexOf(o) && ((n.search = ""), (o = n.toString()));
                        var u = -1 !== w.indexOf(o),
                            s = o;
                        if (!u) {
                            var f = (function (e) {
                                var n = e.url,
                                    r = new URL(n),
                                    o = void 0;
                                o = (function (e) {
                                    return "navigate" === e.mode || e.headers.get("Upgrade-Insecure-Requests") || -1 !== (e.headers.get("Accept") || "").indexOf("text/html");
                                })(e)
                                    ? "navigate"
                                    : r.origin === location.origin
                                    ? "same-origin"
                                    : "cross-origin";
                                for (var i = 0; i < t.length; i++) {
                                    var a = t[i];
                                    if (a && (!a.requestTypes || -1 !== a.requestTypes.indexOf(o))) {
                                        var c = void 0;
                                        if ((c = "function" == typeof a.match ? a.match(r, e) : n.replace(a.match, a.to)) && c !== n) return c;
                                    }
                                }
                            })(e.request);
                            f && ((s = f), (u = !0));
                        }
                        if (u) {
                            var l = void 0;
                            (l =
                                "network-first" === i
                                    ? (function (e, n, t) {
                                          return R(e)
                                              .then(function (e) {
                                                  if (e.ok) return a && console.log("[SW]:", "URL [" + n + "] from network"), e;
                                                  throw e;
                                              })
                                              .catch(function (e) {
                                                  return (
                                                      a && console.log("[SW]:", "URL [" + n + "] from cache if possible"),
                                                      c(t, m).then(function (n) {
                                                          if (n) return n;
                                                          if (e instanceof Response) return e;
                                                          throw e;
                                                      })
                                                  );
                                              });
                                      })(e, o, s)
                                    : (function (e, n, t) {
                                          return (
                                              (function (e) {
                                                  if (r && "function" == typeof r.map && e.preloadResponse && "navigate" === e.request.mode) {
                                                      var n = r.map(new URL(e.request.url), e.request);
                                                      n &&
                                                          (function (e, n) {
                                                              var t = new URL(e, location),
                                                                  r = n.preloadResponse;
                                                              S.set(r, { url: t, response: r });
                                                              var o = function () {
                                                                      return S.has(r);
                                                                  },
                                                                  i = r.then(function (e) {
                                                                      if (e && o()) {
                                                                          var n = e.clone();
                                                                          return caches.open(g).then(function (e) {
                                                                              if (o())
                                                                                  return e.put(t, n).then(function () {
                                                                                      if (!o())
                                                                                          return caches.open(g).then(function (e) {
                                                                                              return e.delete(t);
                                                                                          });
                                                                                  });
                                                                          });
                                                                      }
                                                                  });
                                                              n.waitUntil(i);
                                                          })(n, e);
                                                  }
                                              })(e),
                                              c(t, m).then(function (r) {
                                                  return r
                                                      ? (a && console.log("[SW]:", "URL [" + t + "](" + n + ") from cache"), r)
                                                      : fetch(e.request).then(function (r) {
                                                            return r.ok
                                                                ? (a && console.log("[SW]:", "URL [" + n + "] from network"),
                                                                  t === n &&
                                                                      ((o = r.clone()),
                                                                      (i = caches
                                                                          .open(m)
                                                                          .then(function (e) {
                                                                              return e.put(n, o);
                                                                          })
                                                                          .then(function () {
                                                                              console.log("[SW]:", "Cache asset: " + n);
                                                                          })),
                                                                      e.waitUntil(i)),
                                                                  r)
                                                                : (a && console.log("[SW]:", "URL [" + n + "] wrong response: [" + r.status + "] " + r.type), r);
                                                            var o, i;
                                                        });
                                              })
                                          );
                                      })(e, o, s)),
                                e.respondWith(l);
                        } else {
                            if ("navigate" === e.request.mode && !0 === r) return void e.respondWith(R(e));
                            if (r) {
                                var d = (function (e) {
                                    var n = new URL(e.request.url);
                                    if (!(self.registration.navigationPreload && r && r.test && r.test(n, e.request))) return;
                                    var t = (function (e) {
                                            if (!S) return;
                                            var n = void 0,
                                                t = void 0;
                                            if (
                                                (S.forEach(function (r, o) {
                                                    r.url.href === e.href && ((n = r.response), (t = o));
                                                }),
                                                n)
                                            )
                                                return S.delete(t), n;
                                        })(n),
                                        o = e.request;
                                    if (t)
                                        return (
                                            e.waitUntil(
                                                caches.open(g).then(function (e) {
                                                    return e.delete(o);
                                                })
                                            ),
                                            t
                                        );
                                    return c(o, g).then(function (n) {
                                        return (
                                            n &&
                                                e.waitUntil(
                                                    caches.open(g).then(function (e) {
                                                        return e.delete(o);
                                                    })
                                                ),
                                            n || fetch(e.request)
                                        );
                                    });
                                })(e);
                                if (d) return void e.respondWith(d);
                            }
                        }
                    }
                }),
                self.addEventListener("message", function (e) {
                    var n = e.data;
                    if (n)
                        switch (n.action) {
                            case "skipWaiting":
                                self.skipWaiting && self.skipWaiting();
                        }
                });
            var S = new Map();
            function U(e, n, t) {
                n = n.slice();
                var r = t.bust,
                    o = !1 !== t.failAll,
                    i = !0 === t.deleteFirst,
                    a = t.request || { credentials: "omit", mode: "cors" },
                    c = Promise.resolve();
                return (
                    i &&
                        (c = Promise.all(
                            n.map(function (n) {
                                return e.delete(n).catch(function () {});
                            })
                        )),
                    Promise.all(
                        n.map(function (e) {
                            var n, t, o;
                            return (
                                r && ((t = r), (o = -1 !== (n = e).indexOf("?")), (e = n + (o ? "&" : "?") + "__uncache=" + encodeURIComponent(t))),
                                fetch(e, a)
                                    .then(s)
                                    .then(
                                        function (e) {
                                            return e.ok ? { response: e } : { error: !0 };
                                        },
                                        function () {
                                            return { error: !0 };
                                        }
                                    )
                            );
                        })
                    ).then(function (t) {
                        return o &&
                            t.some(function (e) {
                                return e.error;
                            })
                            ? Promise.reject(new Error("Wrong response status"))
                            : (o ||
                                  (t = t.filter(function (e, t) {
                                      return !e.error || (n.splice(t, 1), !1);
                                  })),
                              c.then(function () {
                                  var r = t.map(function (t, r) {
                                      var o = t.response;
                                      return e.put(n[r], o);
                                  });
                                  return Promise.all(r);
                              }));
                    })
                );
            }
            function R(e) {
                return e.preloadResponse && !0 === r
                    ? e.preloadResponse.then(function (n) {
                          return n || fetch(e.request);
                      })
                    : fetch(e.request);
            }
        })(__wpo, { loaders: {}, cacheMaps: [], navigationPreload: !1 }),
            (e.exports = t(1));
    },
    function (e, n) {},
]);
