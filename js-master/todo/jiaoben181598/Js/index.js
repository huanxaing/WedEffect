function service_online(bool) {
    if (bool == false)
        $.cookie('service_hide', 'hide');
    else
        $.cookie('service_hide', '');
    service_hide_f();
}
function service_hide_f() {
    if ($.cookie('service_hide') == 'hide') {
        document.getElementById("online_small").style.display = "block";
        document.getElementById("online").style.display = "none";
    }
    else {
        document.getElementById("online_small").style.display = "none";
        document.getElementById("online").style.display = "block";
    }
}
function load_sales_order() {
    try {
        window.setTimeout("load_sales_order()", 10 * 1000);
        $.ajax({
            url: '/Api/Order_Re.aspx',
            type: 'post',
            dataType: "json",
            success: function (data) {
                $("#sales_number").html(data.Result[0].Rows[0]["number"]);
                var s_html = "";
                for (var i = 0; i < 12; i++) {
                    s_html += "<p><span>" + data.Result[1].Rows[i]["name"] + "</span><span>" + data.Result[1].Rows[i]["address"] + "**</span><span>已生效</span><span>" + data.Result[1].Rows[i]["date"] + "</span></p>";
                }
                $("#left_order").html(s_html);
                s_html = "";
                for (var i = 12; i < 24; i++) {
                    s_html += "<p><span>" + data.Result[1].Rows[i]["name"] + "</span><span>" + data.Result[1].Rows[i]["address"] + "**</span><span>已生效</span><span>" + data.Result[1].Rows[i]["date"] + "</span></p>";
                }
                $("#right_order").html(s_html);
            },
            error: function (e) {
            }
        });
    }
    catch (e) {
        alert(e.message);
    }
}
(function (e) {
    "use strict";
    var t = "fooTree", n = "1.0.0", r = {
        "maxSize": 88,
        "shinySplit": 1500,
        "shinyRand": 1e3,
        "opacity": 0,
        "border-radius": 135,
        "font-size": 30
    };
    e.fooTree = function (t) {
        var n = e.extend(r, t), i = e(".foo-title"), s = null, o = !1, u = function (t) {
            var n = t.match(/\d+\.?\d*/)[0];
            return isNaN(n) ? NaN : Number(n);
        }, a = function (t) {
            return t + "px";
        }, f = function (t) {
            var n = {};
            for (var r in t) n[r] = t[r];
            return n;
        }, l = function () {
            var t = 1e3;
            switch (parseInt(Math.random() * 2)) {
                case 0:
                    return t - parseInt(Math.random * n.shinyRand);
                case 1:
                    return t + parseInt(Math.random * n.shinyRand);
                default:
                    return t;
            }
        }, c = function (t) {
            if (t.hasClass("dropping") || t.hasClass("dropped") || t.hasClass("moving")) return !1;
            t.addClass("moving");
            var r = {
                "margin-left": t.css("margin-left"),
                "margin-top": t.css("margin-top"),
                "width": t.css("width"),
                "height": t.css("height"),
                "ling-height": t.css("ling-height"),
                "opacity": 1,
                "border-top-left-radius": t.css("border-top-left-radius"),
                "border-top-right-radius": t.css("border-top-right-radius"),
                "border-bottom-left-radius": t.css("border-bottom-left-radius"),
                "border-bottom-right-radius": t.css("border-bottom-right-radius"),
                "font-size": t.css("font-size")
            }, i = n.maxSize / 2 - u(r.width) / 2, s = {
                "margin-top": a(u(r["margin-top"]) - i),
                "margin-left": a(u(r["margin-left"]) - i),
                "width": a(n.maxSize),
                "height": a(n.maxSize),
                "ling-height": a(n.maxSize),
                "opacity": n.opacity,
                "border-radius": a(n["border-radius"] * 2),
                "font-size": a(n["font-size"])
            };
            t.animate(s, 600, function () {
                var e = f(r);
                e.opacity = .2, t.css(e).animate(r, 600, function () {
                    t.hasClass("moving") && t.removeClass("moving");
                });
            });
        }, h = function (r) {
            if (r.hasClass("dropping") || r.hasClass("dropped") || r.hasClass("moving") || o === !0) return !1;
            o = !0, r.addClass("dropping"), e(".dropped-content").trigger("click");
            var i = {
                "margin-left": r.css("margin-left"),
                "margin-top": r.css("margin-top"),
                "width": r.css("width"),
                "height": r.css("height"),
                "ling-height": r.css("ling-height"),
                "opacity": 1,
                "border-top-left-radius": r.css("border-top-left-radius"),
                "border-top-right-radius": r.css("border-top-right-radius"),
                "border-bottom-left-radius": r.css("border-bottom-left-radius"),
                "border-bottom-right-radius": r.css("border-bottom-right-radius"),
                "font-size": r.css("font-size")
            }, s = 300, f = {
                "margin-top": a(u(i["margin-top"]) + s),
                "opacity": n.opacity
            };
            r.animate(f, 500, function () {
                r.removeClass("dropping").addClass("dropped").next().fadeIn("slow", function () {
                    o = !1;
                    var t = e(this);
                    t.addClass("dropped-content"), t.one("click", function () {
                        t.fadeOut("slow", function () {
                            t.removeClass("dropped-content"), r.animate(i, 500, function () {
                                r.removeClass("dropped");
                            });
                        });
                    });
                });
            });
        };
        (function () {
            s = setInterval(function () {
                var e = i.length, t = parseInt(e * Math.random());
                setTimeout(function () {
                    c(i.eq(t));
                }, l());
            }, 2e3);
        })(), i.each(function () {
            e(this).mouseenter(function () {
                e(this).trigger("click");
            }), e(this).click(function () {
                h(e(this));
            });
        });
    };
})(jQuery);