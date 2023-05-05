import { defineComponent as b, ref as D, computed as s, watch as H, onMounted as R, openBlock as a, createElementBlock as l, Fragment as y, renderList as v, normalizeClass as U, normalizeStyle as u, createElementVNode as p, toDisplayString as W } from "vue";
const w = { class: "number-roll-reset" }, F = /* @__PURE__ */ b({
  __name: "NumberRoll",
  props: {
    start: {
      type: [Number, String],
      default: 0,
      validator: (t) => Number.isInteger(+t) && +t >= 0
    },
    end: {
      type: [Number, String],
      default: 0,
      validator: (t) => Number.isInteger(+t) && +t >= 0
    },
    totalLength: {
      type: [Number, String],
      default: 0,
      validator: (t) => Number.isInteger(+t) && +t >= 0
    },
    itemHeightWithUnit: {
      type: String,
      required: !0
    },
    reverseRollDirection: {
      type: Boolean,
      default: !1
    },
    immediate: {
      type: Boolean,
      default: !1
    },
    itemClass: {
      type: String,
      default: ""
    },
    transitionDuration: {
      type: String,
      default: "3s"
    },
    transitionTimingFunction: {
      type: String,
      default: "ease-in-out"
    },
    transitionDelay: {
      type: String,
      default: "0"
    }
  },
  setup(t, { expose: S }) {
    const e = t, r = D([]);
    function m() {
      r.value.length = 0, e.start.toString().padStart(+e.totalLength, "0").split("").forEach((n, i) => h(i, +n));
    }
    const N = s(() => e.end.toString().padStart(+e.totalLength, "0"));
    function g() {
      r.value.length = 0, N.value.split("").forEach((n, i) => h(i, +n));
    }
    const d = s(() => e.itemHeightWithUnit.replace(/\d/g, "")), c = s(() => +e.itemHeightWithUnit.replace(new RegExp(d.value, "gi"), ""));
    function h(n, i) {
      r.value[n] = {
        transform: `translateY(${(e.reverseRollDirection ? (+i - 9) * c.value : -i * c.value) + d.value})`
      };
    }
    return H([
      () => e.start,
      () => e.itemHeightWithUnit,
      () => e.totalLength,
      () => e.reverseRollDirection
    ], m, { immediate: !0 }), R(() => e.immediate && window.requestAnimationFrame(() => window.requestAnimationFrame(g))), S({ roll: g, reset: m }), (n, i) => (a(), l("ul", w, [
      (a(!0), l(y, null, v(r.value.length, (f) => (a(), l("li", {
        key: f,
        class: U(t.itemClass),
        style: u({ height: t.itemHeightWithUnit })
      }, [
        p("div", {
          style: u([
            r.value[f - 1],
            { "transition-duration": t.transitionDuration },
            { "transition-timing-function": t.transitionTimingFunction },
            { "transition-delay": t.transitionDelay }
          ])
        }, [
          (a(), l(y, null, v(10, (o) => p("p", {
            key: o,
            style: u({ height: t.itemHeightWithUnit })
          }, W(t.reverseRollDirection ? 10 - o : o - 1), 5)), 64))
        ], 4)
      ], 6))), 128))
    ]));
  }
});
export {
  F as default
};
