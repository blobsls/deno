"use strict";
(globalThis.webpackChunk = globalThis.webpackChunk || []).push([["ui_packages_webauthn-get-element_webauthn-get-element_ts"], {
    78350: (e, t, n) => {
        n.d(t, {
            Cy: () => o,
            K3: () => h,
            Z8: () => u,
            k_: () => a,
            lK: () => c,
            m$: () => s
        });
        var i = n(41695);
        function r(e, t, n) {
            return e.dispatchEvent(new CustomEvent(t,{
                bubbles: !0,
                cancelable: n
            }))
        }
        function a(e, t) {
            t && (function(e, t) {
                if (!(e instanceof HTMLFormElement))
                    throw TypeError("The specified element is not of type HTMLFormElement.");
                if (!(t instanceof HTMLElement))
                    throw TypeError("The specified element is not of type HTMLElement.");
                if ("submit" !== t.type)
                    throw TypeError("The specified element is not a submit button.");
                if (!e || e !== t.form)
                    throw Error("The specified element is not owned by the form element.")
            }(e, t),
            (0,
            i.A)(t)),
            r(e, "submit", !0) && e.submit()
        }
        function s(e, t) {
            if ("boolean" == typeof t) {
                if (e instanceof HTMLInputElement)
                    e.checked = t;
                else
                    throw TypeError("only checkboxes can be set to boolean value")
            } else {
                if ("checkbox" === e.type)
                    throw TypeError("checkbox can't be set to string value");
                e.value = t
            }
            r(e, "change", !1)
        }
        function o(e, t) {
            for (let n in t) {
                let i = t[n]
                  , r = e.elements.namedItem(n);
                r instanceof HTMLInputElement ? r.value = i : r instanceof HTMLTextAreaElement && (r.value = i)
            }
        }
        function u(e) {
            if (!(e instanceof HTMLElement))
                return !1;
            let t = e.nodeName.toLowerCase()
              , n = (e.getAttribute("type") || "").toLowerCase();
            return "select" === t || "textarea" === t || "input" === t && "submit" !== n && "reset" !== n || e.isContentEditable
        }
        function l(e) {
            return new URLSearchParams(e)
        }
        function h(e, t) {
            let n = new URLSearchParams(e.search);
            for (let[e,i] of l(t))
                n.append(e, i);
            return n.toString()
        }
        function c(e) {
            return l(new FormData(e)).toString()
        }
    }
    ,
    41695: (e, t, n) => {
        function i(e) {
            let t = e.closest("form");
            if (!(t instanceof HTMLFormElement))
                return;
            let n = r(t);
            if (e.name) {
                let i = e.matches("input[type=submit]") ? "Submit" : ""
                  , r = e.value || i;
                n || ((n = document.createElement("input")).type = "hidden",
                n.classList.add("js-submit-button-value"),
                t.prepend(n)),
                n.name = e.name,
                n.value = r
            } else
                n && n.remove()
        }
        function r(e) {
            let t = e.querySelector("input.js-submit-button-value");
            return t instanceof HTMLInputElement ? t : null
        }
        n.d(t, {
            A: () => i,
            C: () => r
        })
    }
    ,
    1270: (e, t, n) => {
        n.r(t),
        n.d(t, {
            State: () => i,
            WebauthnGetElement: () => WebauthnGetElement
        });
        var i, r = n(39595), a = n(74043), s = n(78350);
        function o(e, t, n, i) {
            var r, a = arguments.length, s = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(e, t, n, i);
            else
                for (var o = e.length - 1; o >= 0; o--)
                    (r = e[o]) && (s = (a < 3 ? r(s) : a > 3 ? r(t, n, s) : r(t, n)) || s);
            return a > 3 && s && Object.defineProperty(t, n, s),
            s
        }
        !function(e) {
            e.Initializing = "initializing",
            e.Unsupported = "unsupported",
            e.Ready = "ready",
            e.Waiting = "waiting",
            e.Error = "error",
            e.Submitting = "submitting"
        }(i || (i = {}));
        let WebauthnGetElement = class WebauthnGetElement extends HTMLElement {
            async connectedCallback() {
                this.originalButtonText = this.getCurrentButtonText(),
                this.originalErrorText = this.errorText.textContent,
                this.setState((0,
                a.$j)() ? "ready" : "unsupported"),
                this.passkeySupport = await window.PublicKeyCredential?.isUserVerifyingPlatformAuthenticatorAvailable(),
                "unsupported" !== this.state && !this.passkeySupport && this.passkeysUnsupportedMessage && (this.passkeysUnsupportedMessage.hidden = !1),
                this.subtleLogin ? this.handleWebauthnSubtle() : this.showWebauthnLoginFragment()
            }
            handleWebauthnSubtle() {
                let e = document.querySelector(".js-webauthn-subtle");
                e && (e.hidden = !1,
                this.updateWebauthnSubtleParentBoxVisibility(!1),
                e.addEventListener("webauthn-subtle-submit", () => {
                    this.showWebauthnLoginFragment(),
                    "unsupported" !== this.state && this.prompt()
                }
                ))
            }
            showWebauthnLoginFragment() {
                let e = document.querySelector(".js-webauthn-login-section");
                e && (e.hidden = !1,
                this.updateWebauthnSubtleParentBoxVisibility(!0))
            }
            updateWebauthnSubtleParentBoxVisibility(e) {
                let t = document.querySelector(".js-webauthn-hint");
                t && (t.hidden = e)
            }
            getCurrentButtonText() {
                return this.buttonText.textContent || ""
            }
            setCurrentButtonText(e) {
                this.buttonText.textContent = e
            }
            setState(e) {
                let t = this.button.getAttribute("data-retry-message") || this.originalButtonText
                  , n = this.hasErrored ? t : this.originalButtonText;
                for (let e of (this.setCurrentButtonText(n),
                this.button.disabled = !1,
                this.button.hidden = !1,
                this.errorText.textContent = "",
                this.messages))
                    e.hidden = !0;
                switch (e) {
                case "initializing":
                    this.button.disabled = !0;
                    break;
                case "unsupported":
                    this.button.disabled = !0,
                    this.unsupportedMessage.hidden = !1,
                    this.passkeysUnsupportedMessage && (this.passkeysUnsupportedMessage.hidden = !0);
                    break;
                case "ready":
                    break;
                case "waiting":
                    this.waitingMessage.hidden = !1,
                    this.button.hidden = !0;
                    break;
                case "error":
                    this.errorMessage.hidden = !1,
                    this.errorText.textContent = this.originalErrorText;
                    break;
                case "submitting":
                    this.setCurrentButtonText("Verifying\u2026"),
                    this.button.disabled = !0;
                    break;
                default:
                    throw Error("invalid state")
                }
                this.state = e
            }
            async prompt(e, t) {
                e?.preventDefault(),
                this.dispatchEvent(new CustomEvent("webauthn-get-prompt"));
                try {
                    t || this.setState("waiting");
                    let e = JSON.parse(this.dataJson)
                      , n = await (0,
                    a.Jt)((0,
                    a.d5)(e));
                    this.setState("submitting");
                    let i = this.closest(".js-webauthn-form");
                    i.querySelector(".js-webauthn-response").value = JSON.stringify(n),
                    (0,
                    s.k_)(i)
                } catch (e) {
                    if (!t)
                        throw this.hasErrored = !0,
                        this.setState("error"),
                        e
                }
            }
            constructor(...e) {
                super(...e),
                this.state = "initializing",
                this.dataJson = "",
                this.subtleLogin = !1,
                this.hasErrored = !1
            }
        }
        ;
        WebauthnGetElement.attrPrefix = "",
        o([r.aC], WebauthnGetElement.prototype, "button", void 0),
        o([r.aC], WebauthnGetElement.prototype, "buttonText", void 0),
        o([r.zV], WebauthnGetElement.prototype, "messages", void 0),
        o([r.aC], WebauthnGetElement.prototype, "capitalizedDescription", void 0),
        o([r.aC], WebauthnGetElement.prototype, "unsupportedMessage", void 0),
        o([r.aC], WebauthnGetElement.prototype, "passkeysUnsupportedMessage", void 0),
        o([r.aC], WebauthnGetElement.prototype, "waitingMessage", void 0),
        o([r.aC], WebauthnGetElement.prototype, "errorMessage", void 0),
        o([r.aC], WebauthnGetElement.prototype, "errorText", void 0),
        o([r.CF], WebauthnGetElement.prototype, "dataJson", void 0),
        o([r.CF], WebauthnGetElement.prototype, "subtleLogin", void 0),
        WebauthnGetElement = o([r.p_], WebauthnGetElement)
    }
    ,
    74043: (e, t, n) => {
        function i(e) {
            let t = "==".slice(0, (4 - e.length % 4) % 4)
              , n = atob(e.replace(/-/g, "+").replace(/_/g, "/") + t)
              , i = new ArrayBuffer(n.length)
              , r = new Uint8Array(i);
            for (let e = 0; e < n.length; e++)
                r[e] = n.charCodeAt(e);
            return i
        }
        function r(e) {
            let t = new Uint8Array(e)
              , n = "";
            for (let e of t)
                n += String.fromCharCode(e);
            return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
        }
        n.d(t, {
            $j: () => w,
            Jt: () => x,
            PG: () => y,
            d5: () => E,
            vt: () => v
        });
        var a = "copy"
          , s = "convert";
        function o(e, t, n) {
            if (t === a)
                return n;
            if (t === s)
                return e(n);
            if (t instanceof Array)
                return n.map(n => o(e, t[0], n));
            if (t instanceof Object) {
                let i = {};
                for (let[r,a] of Object.entries(t)) {
                    if (a.derive) {
                        let e = a.derive(n);
                        void 0 !== e && (n[r] = e)
                    }
                    if (!(r in n)) {
                        if (a.required)
                            throw Error(`Missing key: ${r}`);
                        continue
                    }
                    if (null == n[r]) {
                        i[r] = null;
                        continue
                    }
                    i[r] = o(e, a.schema, n[r])
                }
                return i
            }
        }
        function u(e, t) {
            return {
                required: !0,
                schema: e,
                derive: t
            }
        }
        function l(e) {
            return {
                required: !0,
                schema: e
            }
        }
        function h(e) {
            return {
                required: !1,
                schema: e
            }
        }
        var c = {
            type: l(a),
            id: l(s),
            transports: h(a)
        }
          , d = {
            appid: h(a),
            appidExclude: h(a),
            credProps: h(a)
        }
          , p = {
            appid: h(a),
            appidExclude: h(a),
            credProps: h(a)
        }
          , b = {
            publicKey: l({
                rp: l(a),
                user: l({
                    id: l(s),
                    name: l(a),
                    displayName: l(a)
                }),
                challenge: l(s),
                pubKeyCredParams: l(a),
                timeout: h(a),
                excludeCredentials: h([c]),
                authenticatorSelection: h(a),
                attestation: h(a),
                extensions: h(d)
            }),
            signal: h(a)
        }
          , m = {
            type: l(a),
            id: l(a),
            rawId: l(s),
            authenticatorAttachment: h(a),
            response: l({
                clientDataJSON: l(s),
                attestationObject: l(s),
                transports: u(a, e => {
                    var t;
                    return (null == (t = e.getTransports) ? void 0 : t.call(e)) || []
                }
                )
            }),
            clientExtensionResults: u(p, e => e.getClientExtensionResults())
        }
          , f = {
            mediation: h(a),
            publicKey: l({
                challenge: l(s),
                timeout: h(a),
                rpId: h(a),
                allowCredentials: h([c]),
                userVerification: h(a),
                extensions: h(d)
            }),
            signal: h(a)
        }
          , g = {
            type: l(a),
            id: l(a),
            rawId: l(s),
            authenticatorAttachment: h(a),
            response: l({
                clientDataJSON: l(s),
                authenticatorData: l(s),
                signature: l(s),
                userHandle: l(s)
            }),
            clientExtensionResults: u(p, e => e.getClientExtensionResults())
        };
        function y(e) {
            return o(i, b, e)
        }
        function E(e) {
            return o(i, f, e)
        }
        function w() {
            return !!(navigator.credentials && navigator.credentials.create && navigator.credentials.get && window.PublicKeyCredential)
        }
        async function v(e) {
            let t = await navigator.credentials.create(e);
            return t.toJSON = () => o(r, m, t),
            t
        }
        async function x(e) {
            let t = await navigator.credentials.get(e);
            return t.toJSON = () => o(r, g, t),
            t
        }
    }
}]);
//# sourceMappingURL=ui_packages_webauthn-get-element_webauthn-get-element_ts-b5e25b13c818.js.map
