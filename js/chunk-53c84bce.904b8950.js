(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-53c84bce"], {
        "33fe": function (t, n, e) {},
        7906: function (t, n, e) {
            "use strict";
            var i = e("33fe"),
                s = e.n(i);
            s.a
        },
        ea2d: function (t, n, e) {
            "use strict";
            e.r(n);
            var i = function () {
                    var t = this,
                        n = t.$createElement,
                        e = t._self._c || n;
                    return e("div", {
                        attrs: {
                            id: "demo"
                        }
                    }, [e("div", {
                        staticClass: "nwwest-roll",
                        attrs: {
                            id: "nwwest-roll"
                        }
                    }, [e("div", {
                        ref: "rollul",
                        class: {
                            anim: 1 == t.animate
                        }
                    }, [e("span", [t._v(t._s(t.list))])])])])
                },
                s = [],
                a = {
                    data: function () {
                        return {
                            animate: !0,
                            list: 1,
                            num: 0
                        }
                    },
                    methods: {
                        scroll: function (t) {
                            var n = this.$refs.rollul;
                            n.style.marginTop = "-30px", this.animate = !this.animate;
                            var e = this;
                            setTimeout(function () {
                                e.list = t, n.style.marginTop = "0px", e.animate = !e.animate
                            }, 10)
                        }
                    },
                    mounted: function () {
                        var t = this;
                        setInterval(function () {
                            t.num = ++t.num, t.scroll(t.num)
                        }, 3e3)
                    }
                },
                l = a,
                o = (e("7906"), e("2877")),
                r = Object(o["a"])(l, i, s, !1, null, null, null);
            r.options.__file = "test.vue";
            n["default"] = r.exports
        }
    }
]);
