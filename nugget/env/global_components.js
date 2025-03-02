"use strict";
(globalThis.webpackChunk = globalThis.webpackChunk || []).push([["app_components_primer_experimental_toggle-switch-element_ts"], {
    27604: (e, t, i) => {
        i.r(t),
        i.d(t, {
            ToggleSwitchElement: () => ToggleSwitchElement
        });
        var s = i(39595);
        function c(e, t, i, s) {
            var c, r = arguments.length, l = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                l = Reflect.decorate(e, t, i, s);
            else
                for (var h = e.length - 1; h >= 0; h--)
                    (c = e[h]) && (l = (r < 3 ? c(l) : r > 3 ? c(t, i, l) : c(t, i)) || l);
            return r > 3 && l && Object.defineProperty(t, i, l),
            l
        }
        let ToggleSwitchElement = class ToggleSwitchElement extends HTMLElement {
            toggle() {
                this.isOn() ? this.turnOff() : this.turnOn()
            }
            turnOn() {
                this.isDisabled() || (this.switch.setAttribute("aria-checked", "true"),
                this.classList.add("ToggleSwitch--checked"))
            }
            turnOff() {
                this.isDisabled() || (this.switch.setAttribute("aria-checked", "false"),
                this.classList.remove("ToggleSwitch--checked"))
            }
            isOn() {
                return "true" === this.switch.getAttribute("aria-checked")
            }
            isDisabled() {
                return "true" === this.switch.getAttribute("aria-disabled")
            }
        }
        ;
        c([s.aC], ToggleSwitchElement.prototype, "switch", void 0),
        ToggleSwitchElement = c([s.p_], ToggleSwitchElement)
    }
}]);
//# sourceMappingURL=app_components_primer_experimental_toggle-switch-element_ts-02a6014483b6.js.map
