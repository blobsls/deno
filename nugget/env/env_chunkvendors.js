"use strict";
(globalThis.webpackChunk = globalThis.webpackChunk || []).push([["environment-settings"], {
    88729: (e, t, i) => {
        var r = i(39595)
          , n = i(79049)
          , a = i(7572)
          , o = i(97797)
          , s = i(72177);
        function d(e, t, i, r) {
            var n, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                o = Reflect.decorate(e, t, i, r);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (n = e[s]) && (o = (a < 3 ? n(o) : a > 3 ? n(t, i, o) : n(t, i)) || o);
            return a > 3 && o && Object.defineProperty(t, i, o),
            o
        }
        let l = "data-node-id"
          , u = class ProtectionRulesElement extends HTMLElement {
            connectedCallback() {
                this.update()
            }
            selectSuggestion({target: e}) {
                let t = e.getAttribute("data-node-id")
                  , i = e.getAttribute("data-name")
                  , r = e.getAttribute("data-avatar-url");
                this.addReviewer({
                    displayName: i,
                    nodeId: t,
                    avatarUrl: r
                })
            }
            approverToggled() {
                this.update()
            }
            addReviewer(e) {
                if (this.autoComplete.value = "",
                this.reviewers.some(t => t.getAttribute(l) === e.nodeId))
                    return;
                let t = new n.i4(this.reviewerTemplate,{
                    name: e.displayName,
                    nodeId: e.nodeId,
                    avatarUrl: e.avatarUrl
                });
                this.reviewerList.appendChild(t),
                this.update()
            }
            removeReviewer(e) {
                let t = e.target.closest(".js-reviewer")?.getAttribute(l);
                t && (this.reviewerList.querySelector(`[${l}='${t}']`)?.remove(),
                this.update())
            }
            get minValidationMessage() {
                return this.getAttribute("min-reviewers-validation-message")
            }
            get maxReviewers() {
                return parseInt(this.getAttribute("max-reviewers") || "6", 10)
            }
            get invisibleViewersCount() {
                return parseInt(this.getAttribute("invisible-viewers-count") || "0", 10)
            }
            validateWaitTime() {
                this.waitTime.validity.valid ? this.waitGroup.classList.remove("errored") : (this.waitGroup.classList.add("errored"),
                (0,
                a.C)(this.waitNote))
            }
            update() {
                let e = this.maxReviewers - this.reviewers.length - this.invisibleViewersCount;
                this.count.textContent = `${e}`,
                this.reviewerVerbiage.textContent = `${1 === e ? "reviewer" : "reviewers"}`,
                this.toggle.checked ? (this.autoCompleteInput.disabled = this.reviewers.length + this.invisibleViewersCount >= this.maxReviewers,
                this.toggle.setCustomValidity(0 === this.reviewers.length && 0 === this.invisibleViewersCount && this.minValidationMessage || ""),
                (0,
                s.t)(this.form)) : this.toggle.setCustomValidity("")
            }
            constructor(...e) {
                super(...e),
                this.enabled = !1
            }
        }
        ;
        d([r.aC], u.prototype, "form", void 0),
        d([r.aC], u.prototype, "autoComplete", void 0),
        d([r.aC], u.prototype, "autoCompleteInput", void 0),
        d([r.aC], u.prototype, "toggle", void 0),
        d([r.aC], u.prototype, "reviewerTemplate", void 0),
        d([r.aC], u.prototype, "reviewerList", void 0),
        d([r.zV], u.prototype, "reviewers", void 0),
        d([r.aC], u.prototype, "count", void 0),
        d([r.aC], u.prototype, "reviewerVerbiage", void 0),
        d([r.aC], u.prototype, "waitGroup", void 0),
        d([r.aC], u.prototype, "waitTime", void 0),
        d([r.aC], u.prototype, "waitNote", void 0),
        u = d([r.p_], u),
        (0,
        o.on)("click", ".js-show-more-branches", function(e) {
            let t = e.target.closest(".js-hidden-branches-container")
              , i = t.querySelector(".js-hidden-branches")
              , r = t.querySelector(".js-shown-branches");
            r && (r.hidden = !0),
            i && (i.hidden = !1)
        })
    }
    ,
    72177: (e, t, i) => {
        i.d(t, {
            t: () => d
        });
        var r = i(75101)
          , n = i(21403)
          , a = i(97797);
        function o(e) {
            let t = e.getAttribute("data-required-value")
              , i = e.getAttribute("data-required-value-prefix");
            if (e.value === t)
                e.setCustomValidity("");
            else {
                let r = t;
                i && (r = i + r),
                e.setCustomValidity(r)
            }
        }
        (0,
        r.eC)("[data-required-value]", function(e) {
            o(e.currentTarget)
        }),
        (0,
        a.on)("change", "[data-required-value]", function(e) {
            let t = e.currentTarget;
            o(t),
            d(t.form)
        }),
        (0,
        r.eC)("[data-required-trimmed]", function(e) {
            let t = e.currentTarget;
            "" === t.value.trim() ? t.setCustomValidity(t.getAttribute("data-required-trimmed")) : t.setCustomValidity("")
        }),
        (0,
        a.on)("change", "[data-required-trimmed]", function(e) {
            let t = e.currentTarget;
            "" === t.value.trim() ? t.setCustomValidity(t.getAttribute("data-required-trimmed")) : t.setCustomValidity(""),
            d(t.form)
        }),
        (0,
        r.uE)("input[pattern],input[required],textarea[required],input[data-required-change],textarea[data-required-change],input[data-required-value],textarea[data-required-value]", e => {
            let t = e.checkValidity();
            function i() {
                let i = e.checkValidity();
                i !== t && e.form && d(e.form),
                t = i
            }
            e.addEventListener("input", i),
            e.addEventListener("blur", function t() {
                e.removeEventListener("input", i),
                e.removeEventListener("blur", t)
            })
        }
        );
        let s = new WeakMap;
        function d(e) {
            let t = e.checkValidity();
            for (let i of e.querySelectorAll("button[data-disable-invalid]"))
                i.disabled = !t
        }
        (0,
        n.lB)("button[data-disable-invalid]", {
            constructor: HTMLButtonElement,
            initialize(e) {
                let t = e.form;
                t && (s.get(t) || (t.addEventListener("change", () => d(t)),
                s.set(t, !0)),
                e.disabled = !t.checkValidity())
            }
        }),
        (0,
        n.lB)("input[data-required-change], textarea[data-required-change]", function(e) {
            let t = "radio" === e.type && e.form ? e.form.elements.namedItem(e.name).value : null;
            function i(i) {
                let r = e.form;
                if (i && "radio" === e.type && r && t)
                    for (let i of r.elements.namedItem(e.name))
                        i instanceof HTMLInputElement && i.setCustomValidity(e.value === t ? "unchanged" : "");
                else
                    e.setCustomValidity(e.value === (t || e.defaultValue) ? "unchanged" : "")
            }
            e.addEventListener("input", i),
            e.addEventListener("change", i),
            i(),
            e.form && d(e.form)
        }),
        document.addEventListener("reset", function(e) {
            if (e.target instanceof HTMLFormElement) {
                let t = e.target;
                setTimeout( () => d(t))
            }
        })
    }
    ,
    75101: (e, t, i) => {
        i.d(t, {
            Ff: () => d,
            eC: () => l,
            uE: () => s
        });
        var r = i(6986);
        let n = !1
          , a = new r.A;
        function o(e) {
            let t = e.target;
            if (t instanceof HTMLElement && t.nodeType !== Node.DOCUMENT_NODE)
                for (let e of a.matches(t))
                    e.data.call(null, t)
        }
        function s(e, t) {
            n || (n = !0,
            document.addEventListener("focus", o, !0)),
            a.add(e, t),
            document.activeElement instanceof HTMLElement && document.activeElement.matches(e) && t(document.activeElement)
        }
        function d(e, t, i) {
            function r(t) {
                let n = t.currentTarget;
                n && (n.removeEventListener(e, i),
                n.removeEventListener("blur", r))
            }
            s(t, function(t) {
                t.addEventListener(e, i),
                t.addEventListener("blur", r)
            })
        }
        function l(e, t) {
            function i(e) {
                let {currentTarget: r} = e;
                r && (r.removeEventListener("input", t),
                r.removeEventListener("blur", i))
            }
            s(e, function(e) {
                e.addEventListener("input", t),
                e.addEventListener("blur", i)
            })
        }
    }
    ,
    7572: (e, t, i) => {
        i.d(t, {
            C: () => o,
            i: () => s
        });
        var r = i(97156)
          , n = i(97564)
          , a = i(46493);
        function o(e, t) {
            (0,
            n.G7)("arianotify_comprehensive_migration") ? s(d(e), {
                ...t,
                element: t?.element ?? e
            }) : (0,
            n.G7)("primer_live_region_element") && t?.element === void 0 ? (0,
            a.Cj)(e, {
                politeness: t?.assertive ? "assertive" : "polite"
            }) : s(d(e), t)
        }
        function s(e, t) {
            let {assertive: i, element: o} = t ?? {};
            (0,
            n.G7)("arianotify_comprehensive_migration") && "ariaNotify"in Element.prototype ? (o || document.body).ariaNotify(e, {
                interrupt: t?.assertive ? "all" : "none"
            }) : (0,
            n.G7)("primer_live_region_element") && void 0 === o ? (0,
            a.iP)(e, {
                politeness: i ? "assertive" : "polite"
            }) : function(e, t, i) {
                let n = i ?? r.XC?.querySelector(t ? "#js-global-screen-reader-notice-assertive" : "#js-global-screen-reader-notice");
                n && (n.textContent === e ? n.textContent = `${e}\u00A0` : n.textContent = e)
            }(e, i, o)
        }
        function d(e) {
            return (e.getAttribute("aria-label") || e.innerText || "").trim()
        }
    }
    ,
    27756: (e, t, i) => {
        let r;
        function n() {
            if (!r)
                throw Error("Client env was requested before it was loaded. This likely means you are attempting to use client env at the module level in SSR, which is not supported. Please move your client env usage into a function.");
            return r
        }
        function a() {
            return r?.locale ?? "en-US"
        }
        i.d(t, {
            JK: () => a,
            _$: () => n
        }),
        function() {
            if ("undefined" != typeof document) {
                let e = document.getElementById("client-env");
                if (e)
                    try {
                        r = JSON.parse(e.textContent || "")
                    } catch (e) {
                        console.error("Error parsing client-env", e)
                    }
            }
        }()
    }
    ,
    97564: (e, t, i) => {
        i.d(t, {
            G7: () => d,
            XY: () => l,
            fQ: () => s
        });
        var r = i(5225)
          , n = i(27756);
        function a() {
            return new Set((0,
            n._$)().featureFlags.map(e => e.toLowerCase()))
        }
        let o = i(97156).X3 ? a : (0,
        r.A)(a);
        function s() {
            return Array.from(o())
        }
        function d(e) {
            return o().has(e.toLowerCase())
        }
        let l = {
            isFeatureEnabled: d
        }
    }
    ,
    97156: (e, t, i) => {
        i.d(t, {
            KJ: () => r.KJ,
            Kn: () => n.Kn,
            X3: () => r.X3,
            XC: () => n.XC,
            cg: () => n.cg,
            fV: () => n.fV,
            g5: () => r.g5
        });
        var r = i(15572)
          , n = i(86733)
    }
    ,
    86733: (e, t, i) => {
        i.d(t, {
            Kn: () => a,
            XC: () => r,
            cg: () => n,
            fV: () => o
        });
        let r = "undefined" == typeof document ? void 0 : document
          , n = "undefined" == typeof window ? void 0 : window
          , a = "undefined" == typeof history ? void 0 : history
          , o = "undefined" == typeof location ? {
            pathname: "",
            origin: "",
            search: "",
            hash: "",
            href: ""
        } : location
    }
    ,
    15572: (e, t, i) => {
        i.d(t, {
            KJ: () => a,
            X3: () => n,
            g5: () => o
        });
        var r = i(86733);
        let n = void 0 === r.XC
          , a = !n;
        function o() {
            return !!n || !!r.XC.querySelector('react-app[data-ssr="true"]')
        }
    }
}, e => {
    var t = t => e(e.s = t);
    e.O(0, ["vendors-node_modules_github_selector-observer_dist_index_esm_js", "vendors-node_modules_delegated-events_dist_index_js-node_modules_github_catalyst_lib_index_js-79ccef"], () => t(88729)),
    e.O()
}
]);
//# sourceMappingURL=environment-settings-c20fb702eadd.js.map
