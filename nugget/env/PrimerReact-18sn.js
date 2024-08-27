"use strict";
(globalThis.webpackChunk = globalThis.webpackChunk || []).push([["vendors-node_modules_primer_react_lib-esm_FeatureFlags_FeatureFlags_js-node_modules_primer_re-7faff4", "vendors-node_modules_github_catalyst_lib_index_js-node_modules_github_hydro-analytics-client_-7901e7", "vendors-node_modules_primer_react_lib-esm_FeatureFlags_FeatureFlags_js-node_modules_primer_re-61cc81", "vendors-node_modules_primer_react_lib-esm_FeatureFlags_FeatureFlags_js-node_modules_primer_re-19d758", "vendors-node_modules_primer_react_lib-esm_FeatureFlags_FeatureFlags_js-node_modules_primer_re-1ae216"], {
    15033: (e, t, n) => {
        n.d(t, {
            g: () => l
        });
        var r = n(96540)
          , o = n(51207)
          , i = n(24164)
          , a = n(95286);
        function l({children: e, flags: t}) {
            let n = (0,
            r.useMemo)( () => i.X.merge(a.V, i.X.create(t)), [t]);
            return r.createElement(o.c.Provider, {
                value: n
            }, e)
        }
        l.displayName = "FeatureFlags"
    }
    ,
    73729: (e, t, n) => {
        n.d(t, {
            A: () => d
        });
        var r = n(96540)
          , o = n(38267)
          , i = n(59299);
        n(23102);
        var a = n(64515)
          , l = n(44999);
        function s() {
            return (s = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(null, arguments)
        }
        let c = o.Ay.h2.withConfig({
            displayName: "Heading__StyledHeading",
            componentId: "sc-1c1dgg0-0"
        })(["font-weight:", ";font-size:", ";margin:0;&:where([data-variant='large']){font:var(--text-title-shorthand-large,600 32px / 1.5 ", ");}&:where([data-variant='medium']){font:var(--text-title-shorthand-medium,600 20px / 1.6 ", ");}&:where([data-variant='small']){font:var(--text-title-shorthand-small,600 16px / 1.5 ", ");}", ";"], (0,
        i.Jt)("fontWeights.bold"), (0,
        i.Jt)("fontSizes.5"), (0,
        i.Jt)("fonts.normal"), (0,
        i.Jt)("fonts.normal"), (0,
        i.Jt)("fonts.normal"), l.A)
          , d = (0,
        r.forwardRef)( ({as: e="h2", variant: t, ...n}, o) => {
            let i = r.useRef(null);
            return (0,
            a.T)(o, i),
            r.createElement(c, s({
                as: e
            }, n, {
                ref: i,
                "data-variant": t
            }))
        }
        );
        d.displayName = "Heading"
    }
    ,
    86519: (e, t, n) => {
        n.d(t, {
            A: () => h
        });
        var r = n(96540)
          , o = n(38267)
          , i = n(57304)
          , a = n(59299);
        n(23102);
        var l = n(64515)
          , s = n(44999);
        function c() {
            return (c = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(null, arguments)
        }
        let d = (0,
        i.qU)({
            hoverColor: {
                property: "color",
                scale: "colors"
            }
        })
          , u = o.Ay.a.withConfig({
            displayName: "Link__StyledLink",
            componentId: "sc-14289xe-0"
        })(["color:", ";text-decoration:none;text-decoration:", ";[data-a11y-link-underlines='true'] &[data-inline='true']{text-decoration:underline;}&:hover{text-decoration:", ";", ";}&:is(button){display:inline-block;padding:0;font-size:inherit;white-space:nowrap;cursor:pointer;user-select:none;background-color:transparent;border:0;appearance:none;}", ";"], e => e.muted ? (0,
        a.Jt)("colors.fg.muted")(e) : (0,
        a.Jt)("colors.accent.fg")(e), e => e.underline ? "underline" : void 0, e => e.muted ? "none" : "underline", e => e.hoverColor ? d : e.muted ? `color: ${(0,
        a.Jt)("colors.accent.fg")(e)}` : "", s.A)
          , h = (0,
        r.forwardRef)( ({as: e="a", ...t}, n) => {
            let o = r.useRef(null);
            return (0,
            l.T)(n, o),
            r.createElement(u, c({
                as: e,
                "data-inline": t.inline
            }, t, {
                ref: o
            }))
        }
        );
        h.displayName = "Link"
    }
    ,
    42141: (e, t, n) => {
        n.d(t, {
            Ay: () => g,
            ML: () => f,
            _b: () => m
        });
        var r = n(38267)
          , o = n(96540)
          , i = n(45221)
          , a = n(59299);
        n(23102);
        var l = n(7052)
          , s = n(64515)
          , c = n(16255)
          , d = n(44999)
          , u = n(48378);
        function h() {
            return (h = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(null, arguments)
        }
        let f = {
            xsmall: "192px",
            small: "256px",
            medium: "320px",
            large: "432px",
            xlarge: "600px",
            auto: "auto",
            initial: "auto",
            "fit-content": "fit-content"
        }
          , p = {
            small: "256px",
            medium: "320px",
            large: "480px",
            xlarge: "640px",
            xxlarge: "960px",
            auto: "auto"
        }
          , m = r.Ay.div.withConfig({
            displayName: "Overlay__StyledOverlay",
            componentId: "sc-51280t-0"
        })(["background-color:", ";box-shadow:", ";position:absolute;min-width:192px;max-width:", ";height:", ";max-height:", ";width:", ";border-radius:12px;overflow:", ";animation:overlay-appear ", "ms ", ";@keyframes overlay-appear{0%{opacity:0;}100%{opacity:1;}}visibility:var(--styled-overlay-visibility);:focus{outline:none;}@media (forced-colors:active){outline:solid 1px transparent;}", ";"], (0,
        a.Jt)("colors.canvas.overlay"), (0,
        a.Jt)("shadows.overlay.shadow"), e => e.maxWidth && p[e.maxWidth], e => f[e.height || "auto"], e => e.maxHeight && f[e.maxHeight], e => p[e.width || "auto"], e => e.overflow ? e.overflow : "hidden", 200, (0,
        a.Jt)("animation.easeOutCubic"), d.A)
          , g = o.forwardRef( ({onClickOutside: e, role: t="none", initialFocusRef: n, returnFocusRef: r, ignoreClickRefs: d, onEscape: f, visibility: p="visible", height: g="auto", width: y="auto", top: v, left: w, right: b, bottom: x, anchorSide: _, portalContainerName: E, preventFocusOnOpen: k, position: C, style: A={}, ...S}, O) => {
            let $ = (0,
            o.useRef)(null);
            (0,
            s.T)(O, $);
            let {theme: W} = (0,
            u.DP)()
              , P = parseInt((0,
            a.Jt)("space.2")(W).replace("px", ""))
              , L = (0,
            a.Jt)("animation.easeOutCubic")(W);
            return (0,
            l.e)({
                overlayRef: $,
                returnFocusRef: r,
                onEscape: f,
                ignoreClickRefs: d,
                onClickOutside: e,
                initialFocusRef: n,
                preventFocusOnOpen: k
            }),
            (0,
            o.useEffect)( () => {
                var e;
                "initial" === g && null !== (e = $.current) && void 0 !== e && e.clientHeight && ($.current.style.height = `${$.current.clientHeight}px`)
            }
            , [g]),
            (0,
            i.A)( () => {
                var e;
                let {x: t, y: n} = function(e) {
                    return null != e && e.endsWith("bottom") ? {
                        x: 0,
                        y: -1
                    } : null != e && e.endsWith("top") ? {
                        x: 0,
                        y: 1
                    } : null != e && e.endsWith("right") ? {
                        x: -1,
                        y: 0
                    } : null != e && e.endsWith("left") ? {
                        x: 1,
                        y: 0
                    } : {
                        x: 0,
                        y: 0
                    }
                }(_);
                (t || n) && null !== (e = $.current) && void 0 !== e && e.animate && "hidden" !== p && $.current.animate({
                    transform: [`translate(${P * t}px, ${P * n}px)`, "translate(0, 0)"]
                }, {
                    duration: 200,
                    easing: L
                })
            }
            , [_, P, L, p]),
            o.createElement(c.Z, {
                containerName: E
            }, o.createElement(m, h({
                height: g,
                width: y,
                role: t
            }, S, {
                ref: $,
                style: {
                    ...void 0 === w && void 0 === b ? {
                        left: 0
                    } : {
                        left: w
                    },
                    right: b,
                    top: v,
                    bottom: x,
                    position: C,
                    "--styled-overlay-visibility": p,
                    ...A
                }
            })))
        }
        )
    }
    ,
    38553: (e, t, n) => {
        n.d(t, {
            A: () => h
        });
        var r = n(96540)
          , o = n(38267)
          , i = n(44999)
          , a = n(50508)
          , l = n(75177);
        n(23102);
        var s = n(32947);
        function c() {
            return (c = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(null, arguments)
        }
        let d = {
            small: "16px",
            medium: "32px",
            large: "64px"
        };
        function u({size: e="medium", srText: t="Loading", "aria-label": n, ...o}) {
            let i = d[e]
              , u = null !== t && void 0 === n
              , h = (0,
            s.B)();
            return r.createElement(l.A, {
                as: "span",
                sx: {
                    display: "inline-flex"
                }
            }, r.createElement("svg", c({
                height: i,
                width: i,
                viewBox: "0 0 16 16",
                fill: "none",
                "aria-hidden": !0,
                "aria-label": null != n ? n : void 0,
                "aria-labelledby": u ? h : void 0
            }, o), r.createElement("circle", {
                cx: "8",
                cy: "8",
                r: "7",
                stroke: "currentColor",
                strokeOpacity: "0.25",
                strokeWidth: "2",
                vectorEffect: "non-scaling-stroke"
            }), r.createElement("path", {
                d: "M15 8a7.002 7.002 0 00-7-7",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                vectorEffect: "non-scaling-stroke"
            })), u ? r.createElement(a.s, {
                id: h
            }, t) : null)
        }
        u.displayName = "Spinner";
        let h = (0,
        o.Ay)(u).withConfig({
            displayName: "Spinner__StyledSpinner",
            componentId: "sc-1knt686-0"
        })(["@keyframes rotate-keyframes{100%{transform:rotate(360deg);}}animation:rotate-keyframes 1s linear infinite;", ""], i.A);
        h.displayName = "Spinner"
    }
    ,
    59299: (e, t, n) => {
        n.d(t, {
            Jt: () => c,
            K4: () => h,
            Sq: () => d
        });
        var r = n(57227)
          , o = n(57304)
          , i = n(71659);
        let {Jt: a, Zz: l, qU: s} = o
          , c = e => (0,
        r.y)(e, a(i.A, e))
          , d = l(o.xe, o.yW, o.Vy)
          , u = s({
            whiteSpace: {
                property: "whiteSpace"
            }
        })
          , h = l(o.Il, u);
        l(o.PQ, o.r7),
        o.Zp
    }
    ,
    64515: (e, t, n) => {
        n.d(t, {
            T: () => o
        });
        var r = n(96540);
        function o(e, t) {
            (0,
            r.useImperativeHandle)(e, () => t.current)
        }
    }
    ,
    50508: (e, t, n) => {
        n.d(t, {
            s: () => i
        });
        var r = n(38267)
          , o = n(44999);
        let i = r.Ay.span.withConfig({
            displayName: "VisuallyHidden",
            componentId: "sc-1sffg7y-0"
        })(["&:not(:focus):not(:active):not(:focus-within){clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}", ""], o.A)
    }
    ,
    57227: (e, t, n) => {
        n.d(t, {
            y: () => o
        });
        var r = n(49236)
          , o = function(e, t) {
            return void 0 === t && (t = null),
            function(n) {
                return (0,
                r.Jt)(n.theme, e, t)
            }
        }
    }
    ,
    39595: (e, t, n) => {
        let r;
        n.d(t, {
            CF: () => m,
            p_: () => _,
            FB: () => u,
            Se: () => $,
            aC: () => b,
            zV: () => x
        });
        let o = new WeakSet
          , i = new WeakMap;
        function a(e=document) {
            if (i.has(e))
                return i.get(e);
            let t = !1
              , n = new MutationObserver(e => {
                for (let t of e)
                    if ("attributes" === t.type && t.target instanceof Element)
                        d(t.target);
                    else if ("childList" === t.type && t.addedNodes.length)
                        for (let e of t.addedNodes)
                            e instanceof Element && l(e)
            }
            );
            n.observe(e, {
                childList: !0,
                subtree: !0,
                attributeFilter: ["data-action"]
            });
            let r = {
                get closed() {
                    return t
                },
                unsubscribe() {
                    t = !0,
                    i.delete(e),
                    n.disconnect()
                }
            };
            return i.set(e, r),
            r
        }
        function l(e) {
            for (let t of e.querySelectorAll("[data-action]"))
                d(t);
            e instanceof Element && e.hasAttribute("data-action") && d(e)
        }
        function s(e) {
            let t = e.currentTarget;
            for (let n of c(t))
                if (e.type === n.type) {
                    let r = t.closest(n.tag);
                    o.has(r) && "function" == typeof r[n.method] && r[n.method](e);
                    let i = t.getRootNode();
                    if (i instanceof ShadowRoot && o.has(i.host) && i.host.matches(n.tag)) {
                        let t = i.host;
                        "function" == typeof t[n.method] && t[n.method](e)
                    }
                }
        }
        function *c(e) {
            for (let t of (e.getAttribute("data-action") || "").trim().split(/\s+/)) {
                let e = t.lastIndexOf(":")
                  , n = Math.max(0, t.lastIndexOf("#")) || t.length;
                yield{
                    type: t.slice(0, e),
                    tag: t.slice(e + 1, n),
                    method: t.slice(n + 1) || "handleEvent"
                }
            }
        }
        function d(e) {
            for (let t of c(e))
                e.addEventListener(t.type, s)
        }
        function u(e, t) {
            let n = e.tagName.toLowerCase();
            if (e.shadowRoot) {
                for (let r of e.shadowRoot.querySelectorAll(`[data-target~="${n}.${t}"]`))
                    if (!r.closest(n))
                        return r
            }
            for (let r of e.querySelectorAll(`[data-target~="${n}.${t}"]`))
                if (r.closest(n) === e)
                    return r
        }
        let h = e => String("symbol" == typeof e ? e.description : e).replace(/([A-Z]($|[a-z]))/g, "-$1").replace(/--/g, "-").replace(/^-|-$/, "").toLowerCase()
          , f = (e, t="property") => {
            let n = h(e);
            if (!n.includes("-"))
                throw new DOMException(`${t}: ${String(e)} is not a valid ${t} name`,"SyntaxError");
            return n
        }
          , p = "attr";
        function m(e, t) {
            w(e, p).add(t)
        }
        let g = new WeakSet;
        function y(e, t) {
            if (g.has(e))
                return;
            g.add(e);
            let n = Object.getPrototypeOf(e)
              , r = n?.constructor?.attrPrefix ?? "data-";
            for (let o of (t || (t = w(n, p)),
            t)) {
                let t = e[o]
                  , n = f(`${r}${o}`)
                  , i = {
                    configurable: !0,
                    get() {
                        return this.getAttribute(n) || ""
                    },
                    set(e) {
                        this.setAttribute(n, e || "")
                    }
                };
                "number" == typeof t ? i = {
                    configurable: !0,
                    get() {
                        return Number(this.getAttribute(n) || 0)
                    },
                    set(e) {
                        this.setAttribute(n, e)
                    }
                } : "boolean" == typeof t && (i = {
                    configurable: !0,
                    get() {
                        return this.hasAttribute(n)
                    },
                    set(e) {
                        this.toggleAttribute(n, e)
                    }
                }),
                Object.defineProperty(e, o, i),
                o in e && !e.hasAttribute(n) && i.set.call(e, t)
            }
        }
        let v = Symbol.for("catalyst");
        let CatalystDelegate = class CatalystDelegate {
            constructor(e) {
                let t = this
                  , n = e.prototype.connectedCallback;
                e.prototype.connectedCallback = function() {
                    t.connectedCallback(this, n)
                }
                ;
                let r = e.prototype.disconnectedCallback;
                e.prototype.disconnectedCallback = function() {
                    t.disconnectedCallback(this, r)
                }
                ;
                let o = e.prototype.attributeChangedCallback;
                e.prototype.attributeChangedCallback = function(e, n, r) {
                    t.attributeChangedCallback(this, e, n, r, o)
                }
                ;
                let i = e.observedAttributes || [];
                Object.defineProperty(e, "observedAttributes", {
                    configurable: !0,
                    get() {
                        return t.observedAttributes(this, i)
                    },
                    set(e) {
                        i = e
                    }
                }),
                function(e) {
                    let t = e.observedAttributes || []
                      , n = e.attrPrefix ?? "data-"
                      , r = e => f(`${n}${e}`);
                    Object.defineProperty(e, "observedAttributes", {
                        configurable: !0,
                        get: () => [...w(e.prototype, p)].map(r).concat(t),
                        set(e) {
                            t = e
                        }
                    })
                }(e),
                function(e) {
                    let t = h(e.name).replace(/-element$/, "");
                    try {
                        window.customElements.define(t, e),
                        window[e.name] = customElements.get(t)
                    } catch (e) {
                        if (!(e instanceof DOMException && "NotSupportedError" === e.name))
                            throw e
                    }
                }(e)
            }
            observedAttributes(e, t) {
                return t
            }
            connectedCallback(e, t) {
                var n, r;
                e.toggleAttribute("data-catalyst", !0),
                customElements.upgrade(e),
                !function(e) {
                    for (let t of e.querySelectorAll("template[data-shadowroot]"))
                        t.parentElement === e && e.attachShadow({
                            mode: "closed" === t.getAttribute("data-shadowroot") ? "closed" : "open"
                        }).append(t.content.cloneNode(!0))
                }(e),
                y(e),
                o.add(e),
                e.shadowRoot && (l(r = e.shadowRoot),
                a(r)),
                l(e),
                a(e.ownerDocument),
                t?.call(e),
                e.shadowRoot && (l(n = e.shadowRoot),
                a(n))
            }
            disconnectedCallback(e, t) {
                t?.call(e)
            }
            attributeChangedCallback(e, t, n, r, o) {
                y(e),
                "data-catalyst" !== t && o && o.call(e, t, n, r)
            }
        }
        ;
        function w(e, t) {
            if (!Object.prototype.hasOwnProperty.call(e, v)) {
                let t = e[v]
                  , n = e[v] = new Map;
                if (t)
                    for (let[e,r] of t)
                        n.set(e, new Set(r))
            }
            let n = e[v];
            return n.has(t) || n.set(t, new Set),
            n.get(t)
        }
        function b(e, t) {
            w(e, "target").add(t),
            Object.defineProperty(e, t, {
                configurable: !0,
                get() {
                    return u(this, t)
                }
            })
        }
        function x(e, t) {
            w(e, "targets").add(t),
            Object.defineProperty(e, t, {
                configurable: !0,
                get() {
                    return function(e, t) {
                        let n = e.tagName.toLowerCase()
                          , r = [];
                        if (e.shadowRoot)
                            for (let o of e.shadowRoot.querySelectorAll(`[data-targets~="${n}.${t}"]`))
                                o.closest(n) || r.push(o);
                        for (let o of e.querySelectorAll(`[data-targets~="${n}.${t}"]`))
                            o.closest(n) === e && r.push(o);
                        return r
                    }(this, t)
                }
            })
        }
        function _(e) {
            new CatalystDelegate(e)
        }
        let E = new Map
          , k = new Promise(e => {
            "loading" !== document.readyState ? e() : document.addEventListener("readystatechange", () => e(), {
                once: !0
            })
        }
        )
          , C = new Promise(e => {
            let t = new AbortController;
            t.signal.addEventListener("abort", () => e());
            let n = {
                once: !0,
                passive: !0,
                signal: t.signal
            }
              , r = () => t.abort();
            document.addEventListener("mousedown", r, n),
            document.addEventListener("touchstart", r, n),
            document.addEventListener("keydown", r, n),
            document.addEventListener("pointerdown", r, n)
        }
        )
          , A = {
            ready: () => k,
            firstInteraction: () => C,
            visible: e => new Promise(t => {
                let n = new IntersectionObserver(e => {
                    for (let r of e)
                        if (r.isIntersecting) {
                            t(),
                            n.disconnect();
                            return
                        }
                }
                ,{
                    rootMargin: "0px 0px 256px 0px",
                    threshold: .01
                });
                for (let t of document.querySelectorAll(e))
                    n.observe(t)
            }
            )
        }
          , S = new WeakMap;
        function O(e) {
            cancelAnimationFrame(S.get(e) || 0),
            S.set(e, requestAnimationFrame( () => {
                for (let t of E.keys()) {
                    let n = e.matches(t) ? e : e.querySelector(t);
                    if (customElements.get(t) || n) {
                        let r = n?.getAttribute("data-load-on") || "ready"
                          , o = r in A ? A[r] : A.ready;
                        for (let e of E.get(t) || [])
                            o(t).then(e);
                        E.delete(t),
                        S.delete(e)
                    }
                }
            }
            ))
        }
        function $(e, t) {
            E.has(e) || E.set(e, new Set),
            E.get(e).add(t),
            O(document.body),
            r || (r = new MutationObserver(e => {
                if (E.size)
                    for (let t of e)
                        for (let e of t.addedNodes)
                            e instanceof Element && O(e)
            }
            )).observe(document, {
                subtree: !0,
                childList: !0
            })
        }
    }
    ,
    97524: (e, t, n) => {
        n.d(t, {
            s: () => AnalyticsClient
        });
        var r = n(60185)
          , o = n(88288)
          , i = n(36301);
        let AnalyticsClient = class AnalyticsClient {
            constructor(e) {
                this.options = e
            }
            get collectorUrl() {
                return this.options.collectorUrl
            }
            get clientId() {
                return this.options.clientId ? this.options.clientId : (0,
                i.y)()
            }
            createEvent(e) {
                return {
                    page: location.href,
                    title: document.title,
                    context: {
                        ...this.options.baseContext,
                        ...(0,
                        o.K)(),
                        ...e
                    }
                }
            }
            sendPageView(e) {
                let t = this.createEvent(e);
                this.send({
                    page_views: [t]
                })
            }
            sendEvent(e, t) {
                let n = {
                    ...this.createEvent(t),
                    type: e
                };
                this.send({
                    events: [n]
                })
            }
            send({page_views: e, events: t}) {
                let n = JSON.stringify({
                    client_id: this.clientId,
                    page_views: e,
                    events: t,
                    request_context: (0,
                    r.j)()
                });
                try {
                    if (navigator.sendBeacon) {
                        navigator.sendBeacon(this.collectorUrl, n);
                        return
                    }
                } catch {}
                fetch(this.collectorUrl, {
                    method: "POST",
                    cache: "no-cache",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: n,
                    keepalive: !1
                })
            }
        }
    }
    ,
    36301: (e, t, n) => {
        let r;
        function o() {
            return `${Math.round(2147483647 * Math.random())}.${Math.round(Date.now() / 1e3)}`
        }
        function i() {
            try {
                let e = function() {
                    let e;
                    let t = document.cookie.match(/_octo=([^;]+)/g);
                    if (!t)
                        return;
                    let n = [0, 0];
                    for (let r of t) {
                        let[,t] = r.split("=")
                          , [,o,...i] = t.split(".")
                          , a = o.split("-").map(Number);
                        a > n && (n = a,
                        e = i.join("."))
                    }
                    return e
                }();
                if (e)
                    return e;
                let t = o();
                return !function(e) {
                    let t = `GH1.1.${e}`
                      , n = new Date(Date.now() + 31536e6).toUTCString()
                      , {domain: r} = document;
                    r.endsWith(".github.com") && (r = "github.com"),
                    document.cookie = `_octo=${t}; expires=${n}; path=/; domain=${r}; secure; samesite=lax`
                }(t),
                t
            } catch (e) {
                return r || (r = o()),
                r
            }
        }
        n.d(t, {
            y: () => i
        })
    }
    ,
    88288: (e, t, n) => {
        n.d(t, {
            K: () => o
        });
        let r = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "scid"];
        function o() {
            let e = {};
            try {
                for (let[t,n] of new URLSearchParams(window.location.search)) {
                    let o = t.toLowerCase();
                    r.includes(o) && (e[o] = n)
                }
                return e
            } catch (e) {
                return {}
            }
        }
    }
    ,
    70837: (e, t, n) => {
        n.d(t, {
            O: () => r
        });
        function r(e="ha") {
            let t;
            let n = {};
            for (let r of Array.from(document.head.querySelectorAll(`meta[name^="${e}-"]`))) {
                let {name: o, content: i} = r
                  , a = o.replace(`${e}-`, "").replace(/-/g, "_");
                "url" === a ? t = i : n[a] = i
            }
            if (!t)
                throw Error(`AnalyticsClient ${e}-url meta tag not found`);
            return {
                collectorUrl: t,
                ...Object.keys(n).length > 0 ? {
                    baseContext: n
                } : {}
            }
        }
    }
    ,
    60185: (e, t, n) => {
        n.d(t, {
            j: () => r
        });
        function r() {
            return {
                referrer: function() {
                    let e;
                    try {
                        e = window.top.document.referrer
                    } catch (t) {
                        if (window.parent)
                            try {
                                e = window.parent.document.referrer
                            } catch (e) {}
                    }
                    return "" === e && (e = document.referrer),
                    e
                }(),
                user_agent: navigator.userAgent,
                screen_resolution: function() {
                    try {
                        return `${screen.width}x${screen.height}`
                    } catch (e) {
                        return "unknown"
                    }
                }(),
                browser_resolution: function() {
                    let e = 0
                      , t = 0;
                    try {
                        return "number" == typeof window.innerWidth ? (t = window.innerWidth,
                        e = window.innerHeight) : null != document.documentElement && null != document.documentElement.clientWidth ? (t = document.documentElement.clientWidth,
                        e = document.documentElement.clientHeight) : null != document.body && null != document.body.clientWidth && (t = document.body.clientWidth,
                        e = document.body.clientHeight),
                        `${t}x${e}`
                    } catch (e) {
                        return "unknown"
                    }
                }(),
                browser_languages: navigator.languages ? navigator.languages.join(",") : navigator.language || "",
                pixel_ratio: window.devicePixelRatio,
                timestamp: Date.now(),
                tz_seconds: -60 * new Date().getTimezoneOffset()
            }
        }
    }
    ,
    46493: (e, t, n) => {
        n.d(t, {
            Cj: () => U,
            iP: () => z
        });
        let r = {
            Less: "less",
            Equal: "equal",
            Greater: "greater"
        };
        var o, i, a, l, s, c, d, u, h, f, p, m, g, y, v, w, b, x = (e, t, n) => {
            if (!t.has(e))
                throw TypeError("Cannot " + n)
        }
        , _ = (e, t, n) => (x(e, t, "read from private field"),
        n ? n.call(e) : t.get(e)), E = (e, t, n) => {
            if (t.has(e))
                throw TypeError("Cannot add the same private member more than once");
            t instanceof WeakSet ? t.add(e) : t.set(e, n)
        }
        , k = (e, t, n, r) => (x(e, t, "write to private field"),
        r ? r.call(e, n) : t.set(e, n),
        n), C = (e, t, n) => (x(e, t, "access private method"),
        n);
        let MinHeap = class MinHeap {
            constructor({compareFn: e}) {
                E(this, a),
                E(this, s),
                E(this, o, void 0),
                E(this, i, void 0),
                k(this, o, e),
                k(this, i, [])
            }
            insert(e) {
                _(this, i).push(e),
                C(this, s, c).call(this)
            }
            pop() {
                let e = _(this, i)[0];
                return _(this, i)[_(this, i).length - 1] && (_(this, i)[0] = _(this, i)[_(this, i).length - 1],
                _(this, i).pop()),
                C(this, a, l).call(this),
                e
            }
            peek() {
                return _(this, i)[0]
            }
            delete(e) {
                let t = _(this, i).indexOf(e);
                -1 !== t && (S(_(this, i), t, _(this, i).length - 1),
                _(this, i).pop(),
                C(this, a, l).call(this))
            }
            clear() {
                k(this, i, [])
            }
            get size() {
                return _(this, i).length
            }
        }
        ;
        function A(e) {
            return Math.floor((e - 1) / 2)
        }
        function S(e, t, n) {
            let r = e[t];
            e[t] = e[n],
            e[n] = r
        }
        o = new WeakMap,
        i = new WeakMap,
        a = new WeakSet,
        l = function() {
            let e = 0;
            for (; 2 * e + 1 < _(this, i).length; ) {
                let t = 2 * e + 1;
                if (2 * e + 2 < _(this, i).length && _(this, o).call(this, _(this, i)[2 * e + 2], _(this, i)[2 * e + 1]) === r.Less && (t = 2 * e + 2),
                _(this, o).call(this, _(this, i)[e], _(this, i)[t]) === r.Less)
                    break;
                S(_(this, i), e, t),
                e = t
            }
        }
        ,
        s = new WeakSet,
        c = function() {
            let e = _(this, i).length - 1;
            for (; e > 0 && _(this, o).call(this, _(this, i)[e], _(this, i)[A(e)]) === r.Less; )
                S(_(this, i), e, A(e)),
                e = A(e)
        }
        ;
        var O = Object.defineProperty
          , $ = (e, t, n) => t in e ? O(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n
          , W = (e, t, n) => ($(e, "symbol" != typeof t ? t + "" : t, n),
        n)
          , P = (e, t, n) => {
            if (!t.has(e))
                throw TypeError("Cannot " + n)
        }
          , L = (e, t, n) => (P(e, t, "read from private field"),
        n ? n.call(e) : t.get(e))
          , T = (e, t, n) => {
            if (t.has(e))
                throw TypeError("Cannot add the same private member more than once");
            t instanceof WeakSet ? t.add(e) : t.set(e, n)
        }
          , M = (e, t, n, r) => (P(e, t, "write to private field"),
        r ? r.call(e, n) : t.set(e, n),
        n);
        let Deferred = class Deferred {
            constructor() {
                W(this, d, "Deferred"),
                T(this, u, void 0),
                T(this, h, void 0),
                T(this, f, void 0),
                M(this, u, new Promise( (e, t) => {
                    M(this, h, e),
                    M(this, f, t)
                }
                ))
            }
            then(e, t) {
                return Promise.prototype.then.apply(L(this, u), [e, t])
            }
            catch(e) {
                return Promise.prototype.catch.apply(L(this, u), [e])
            }
            finally(e) {
                return Promise.prototype.finally.apply(L(this, u), [e])
            }
            resolve(e) {
                L(this, h).call(this, e)
            }
            reject(e) {
                L(this, f).call(this, e)
            }
            getPromise() {
                return L(this, u)
            }
        }
        ;
        d = Symbol.toStringTag,
        u = new WeakMap,
        h = new WeakMap,
        f = new WeakMap;
        var j = (e, t, n) => {
            if (!t.has(e))
                throw TypeError("Cannot " + n)
        }
          , F = (e, t, n) => (j(e, t, "read from private field"),
        n ? n.call(e) : t.get(e))
          , N = (e, t, n) => {
            if (t.has(e))
                throw TypeError("Cannot add the same private member more than once");
            t instanceof WeakSet ? t.add(e) : t.set(e, n)
        }
          , R = (e, t, n, r) => (j(e, t, "write to private field"),
        r ? r.call(e, n) : t.set(e, n),
        n)
          , I = (e, t, n) => (j(e, t, "access private method"),
        n);
        let LiveRegionElement = class LiveRegionElement extends HTMLElement {
            constructor() {
                if (super(),
                N(this, y),
                N(this, w),
                N(this, p, void 0),
                N(this, m, void 0),
                N(this, g, void 0),
                !this.shadowRoot) {
                    let e = (q || ((q = document.createElement("template")).innerHTML = H),
                    q);
                    this.attachShadow({
                        mode: "open"
                    }).appendChild(e.content.cloneNode(!0))
                }
                R(this, p, !1),
                R(this, g, null),
                R(this, m, new MinHeap({
                    compareFn: J
                }))
            }
            get delay() {
                let e = this.getAttribute("delay");
                return e ? parseInt(e, 10) : 150
            }
            set delay(e) {
                this.setAttribute("delay", `${e}`)
            }
            announce(e, t={}) {
                let {delayMs: n, politeness: r="polite"} = t
                  , o = Date.now()
                  , i = new Deferred
                  , a = {
                    deferred: i,
                    politeness: r,
                    contents: e,
                    scheduled: void 0 !== n ? o + n : o
                };
                return F(this, m).insert(a),
                I(this, y, v).call(this),
                {
                    ...i.getPromise(),
                    cancel: () => {
                        F(this, m).delete(a),
                        i.resolve()
                    }
                }
            }
            announceFromElement(e, t) {
                let n;
                let r = (n = "",
                e.hasAttribute("aria-label") ? n = e.getAttribute("aria-label") : e.innerText ? n = e.innerText : e.textContent && (n = e.textContent),
                n ? n.trim() : "");
                return "" !== r ? this.announce(r, t) : {
                    ...Promise.resolve(),
                    cancel: D
                }
            }
            getMessage(e="polite") {
                let t = this.shadowRoot?.getElementById(e);
                if (!t)
                    throw Error("Unable to find container for message");
                return t.textContent
            }
            clear() {
                null !== F(this, g) && (clearTimeout(F(this, g)),
                R(this, g, null)),
                F(this, m).clear()
            }
        }
        ;
        p = new WeakMap,
        m = new WeakMap,
        g = new WeakMap,
        y = new WeakSet,
        v = function() {
            if (F(this, p))
                return;
            let e = F(this, m).peek();
            if (!e)
                return;
            null !== F(this, g) && (clearTimeout(F(this, g)),
            R(this, g, null));
            let t = Date.now();
            if (e.scheduled <= t) {
                (e = F(this, m).pop()) && I(this, w, b).call(this, e),
                I(this, y, v).call(this);
                return
            }
            let n = e.scheduled - t;
            R(this, g, window.setTimeout( () => {
                R(this, g, null),
                I(this, y, v).call(this)
            }
            , n))
        }
        ,
        w = new WeakSet,
        b = function(e) {
            R(this, p, !0);
            let {contents: t, deferred: n, politeness: r} = e
              , o = this.shadowRoot?.getElementById(r);
            if (!o)
                throw R(this, p, !1),
                Error(`Unable to find container for message. Expected a container with id="${r}"`);
            o.textContent === t ? o.textContent = `${t}\xa0` : o.textContent = t,
            null !== F(this, g) && clearTimeout(F(this, g)),
            n.resolve(),
            this.delay > 0 ? R(this, g, window.setTimeout( () => {
                R(this, g, null),
                R(this, p, !1),
                I(this, y, v).call(this)
            }
            , this.delay)) : (R(this, g, null),
            R(this, p, !1),
            I(this, y, v).call(this))
        }
        ;
        let q = null
          , H = `
<style>
:host {
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
</style>
<div id="polite" aria-live="polite" aria-atomic="true"></div>
<div id="assertive" aria-live="assertive" aria-atomic="true"></div>
`;
        function J(e, t) {
            return e.politeness === t.politeness ? e.scheduled === t.scheduled ? r.Equal : e.scheduled < t.scheduled ? r.Less : r.Greater : "assertive" === e.politeness && "assertive" !== t.politeness ? r.Less : "assertive" !== e.politeness && "assertive" === t.politeness ? r.Greater : r.Equal
        }
        function D() {}
        function z(e, t={}) {
            let n = B(t.from);
            if (!n) {
                n = document.createElement("live-region"),
                t.appendTo ? t.appendTo.appendChild(n) : V(t.from).appendChild(n);
                let r = !1
                  , o = () => {
                    r = !0
                }
                ;
                return {
                    ...Z(G).then( () => {
                        if (!r) {
                            let r = n.announce(e, t);
                            return o = r.cancel,
                            r
                        }
                    }
                    ),
                    cancel: () => {
                        o()
                    }
                }
            }
            return n.announce(e, t)
        }
        function U(e, t={}) {
            let n = B(t.from);
            if (!n) {
                n = document.createElement("live-region"),
                t.appendTo ? t.appendTo.appendChild(n) : V(t.from).appendChild(n);
                let r = !1
                  , o = () => {
                    r = !0
                }
                ;
                return {
                    ...Z(G).then( () => {
                        if (!r) {
                            let r = n.announceFromElement(e, t);
                            return o = r.cancel,
                            r
                        }
                    }
                    ),
                    cancel: () => {
                        o()
                    }
                }
            }
            return n.announceFromElement(e, t)
        }
        function B(e) {
            let t = null;
            return null !== (t = e ? function(e) {
                let t = e.closest("dialog")
                  , n = e;
                for (; (n = n.parentElement) && (!t || t.contains(n)); )
                    for (let e of n.childNodes)
                        if (e instanceof LiveRegionElement)
                            return e;
                return null
            }(e) : null) || null !== (t = V(e).querySelector("live-region")) ? t : null
        }
        function V(e) {
            let t = document.body;
            if (e) {
                let n = e.closest("dialog");
                n && (t = n)
            }
            return t
        }
        customElements.get("live-region") || customElements.define("live-region", LiveRegionElement);
        let G = 150;
        function Z(e) {
            return new Promise(t => {
                setTimeout(t, e)
            }
            )
        }
    }
}]);
//# sourceMappingURL=vendors-node_modules_primer_react_lib-esm_FeatureFlags_FeatureFlags_js-node_modules_primer_re-7faff4-78ab5906482f.js.map
