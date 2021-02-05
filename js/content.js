! function() {
    function a() {
        var a = document.createElement("link");
        a.setAttribute("rel", "stylesheet"), a.setAttribute("href", chrome.extension.getURL("css/content.css")), document.head.appendChild(a);
        var b = document.createElement("link");
        b.setAttribute("rel", "stylesheet"), b.setAttribute("href", chrome.extension.getURL("css/font-awesome.min.css")), document.head.appendChild(b);
        var c = document.createElement("link");
        c.setAttribute("rel", "stylesheet"), c.setAttribute("href", chrome.extension.getURL("css/emoji.css")), document.head.appendChild(c)
    }

    /*function b(a) {
        var b = $(a);
        b.length && chrome.storage.sync.get("user_popup_rate", function(a) {
            function c(a) {
                k = !0;
                var b = this.dataset.pos;
                i.each(function(a, c) {
                    c.dataset.pos <= b ? (c.querySelector(".empty").style.display = "none", c.querySelector(".filled").style.display = "inline") : (c.querySelector(".empty").style.display = "inline", c.querySelector(".filled").style.display = "none")
                })
            }

            function d(a) {
                g || (k = !1, setTimeout(function() {
                    k || i.each(function(a, b) {
                        b.querySelector(".empty").style.display = "inline", b.querySelector(".filled").style.display = "none"
                    })
                }, 100))
            }

            function e(a) {
                g = !0;
                var b = this.dataset.pos;
                i.each(function(a, c) {
                    c.dataset.pos <= b && (c.querySelector(".empty").style.display = "none", c.querySelector(".filled").style.display = "inline")
                }), i.each(function(a, b) {
                    b.removeEventListener("mouseover", c), b.removeEventListener("mouseout", d), b.removeEventListener("click", e)
                }), chrome.runtime.sendMessage({
                    action: "user_popup_rate",
                    value: b
                }), 3 >= b && !h && j.text(chrome.i18n.getMessage("your_rate"))
            }
            if (!a.user_popup_rate) {
                var f = $('<div class="ext_direct_rate"><span class="ext_text">Rate us</span><span class="stars"><a class="star" data-pos="1"><span class="empty"></span><span class="filled"></span></a><a class="star" data-pos="2"><span class="empty"></span><span class="filled"></span></a><a class="star" data-pos="3"><span class="empty"></span><span class="filled"></span></a><a class="star" data-pos="4"><span class="empty"></span><span class="filled"></span></a><a class="star" data-pos="5"><span class="empty"></span><span class="filled"></span></a></span></div>');
                b.append(f), $("#react-root > section > div:last-child").css({
                    paddingTop: "66px"
                });
                var g = !1,
                    h = !1,
                    i = f.find(".stars a"),
                    j = f.find(".ext_text"),
                    k = !1;
                j.text(chrome.i18n.getMessage("rate_us_popup")), i.each(function(a, b) {
                    b.querySelector(".empty").style.display = "inline", b.querySelector(".filled").style.display = "none"
                }), i.each(function(a, b) {
                    b.addEventListener("mouseover", c), b.addEventListener("mouseout", d), b.addEventListener("click", e)
                })
            }
        })
    }*/

    function c(a) {
        chrome.runtime.sendMessage("getCookies", function(b) {
            a(!!b.sessionid)
        })
    }

    function d() {
        var a, b, c, d = !1,
            f = !1;
        window.addEventListener("keydown", function(b) {
            if (16 == b.keyCode && (d = !0), 13 == b.keyCode && s) {
                if (d) return;
                if (!f) return;
                if (!a || !a.parentElement || !a.innerText.length) return;
                b.stopPropagation(), b.preventDefault(), c && c.click()
            }
        }), window.addEventListener("keyup", function(a) {
            16 == a.keyCode && (d = !1)
        }), setInterval(function() {
            t && e(), /direct\/t\/\w+/.test(window.location.pathname) && document.querySelectorAll("textarea:not([data-ext_direct_ready])").forEach(function(d) {
                if (d.placeholder.length) {
                    a = d, d.dataset.ext_direct_ready = "true", d.dataset.emojiable = "true", d.dataset.emojiInput = "unicode", window.emojiPicker = new EmojiPicker({
                        emojiable_selector: "[data-emojiable=true]",
                        assetsPath: chrome.extension.getURL("img/emoji/"),
                        popupButtonClasses: "fa fa-smile-o",
                        norealTime: !1
                    }), window.emojiPicker.discover();
                    var e = d.parentElement.parentElement,
                        g = {
                            attributes: !1,
                            childList: !0,
                            characterData: !1,
                            subtree: !0
                        },
                        h = new MutationObserver(function(a) {
                            a.forEach(function(a) {
                                a.addedNodes.length && a.addedNodes[0].tagName && "div" === a.addedNodes[0].tagName.toLowerCase() && a.addedNodes[0].querySelector("button") && (c = a.addedNodes[0].querySelector("button"), c.addEventListener("click", function() {
                                    b.innerHTML = ""
                                }))
                            })
                        });
                    h.observe(e, g), b = document.querySelector(".emoji-wysiwyg-editor"), b.addEventListener("focus", function(a) {
                        f = !0
                    }), b.addEventListener("blur", function(a) {
                        f = !1
                    })
                }
            })
        }, 1e3)
    }

    function e() {
        -1 !== window.location.href.indexOf("direct/t/") && (document.querySelectorAll("section > .IEL5I video:not([data-ig_skip])").forEach(function(a) {
            f(a)
        }), document.querySelectorAll("section > .IEL5I img:not([data-ig_skip])").forEach(function(a) {
            f(a)
        }))
    }

    function f(a) {
        var b;
        if ("img" == a.tagName.toLowerCase() ? b = g(a) : "video" == a.tagName.toLowerCase() && (b = a.getAttribute("src") || a.querySelector("source").getAttribute("src")), b && !(b.indexOf("blob:") > -1) && 0 != $(a).closest('[role="button"]').length) {
            a.dataset.ig_skip = "1", $parent = $(a).parent();
            var c = {
                url: b,
                filename: v.getFromLink(b)
            };
            if (c.url && c.filename) {
                var d = $('<div class="ext_ig_btns_wrap"></div>'),
                    e = $('<button class="ext_ig_dl_btn">' + chrome.i18n.getMessage("download") + "</button>").data(c),
                    f = $('<button class="ext_ig_exp_btn">' + chrome.i18n.getMessage("expand") + "</button>").data(c);
                d.append(e).append(f), $parent.append(d)
            }
        }
    }

    function g(a) {
        var b = a.getAttribute("srcset");
        if (b) {
            var c = {},
                d = b.split(",");
            d.forEach(function(a) {
                var b = a.split(" "),
                    d = b[1].replace(/[^\d]/, "");
                c[d] || (c[d] = b[0])
            });
            var e = 0;
            for (var f in c) + f > +e && (e = f);
            var g = c[e]
        }
        return "string" == typeof g && g.match(/\.(jpg|png)/) || (g = a.getAttribute("src")), "string" != typeof g ? null : g
    }

    function h() {
        $("#react-root").hide();
        var a = $('<div class="ext_settings_wrap">' + u.outerHTML + '<div class="ext_settings_content"><div class="ext_settings_item send_img_from_anywhere" data-type="send_img_from_anywhere"><span class="ext_title">' + chrome.i18n.getMessage("send_img_from_anywhere") + ' <span class="ext_important">(BETA version)</span></span><span class="ext_help_img_icon"></span><div class="ext_push-toggle selector"><div class="ext_point"></div></div></div><div class="ext_settings_item send_by_enter" data-type="send_by_enter"><span class="ext_title">' + chrome.i18n.getMessage("send_by_enter") + '</span><div class="ext_push-toggle selector"><div class="ext_point"></div></div></div><div class="ext_settings_item ext_notifications" data-type="ext_notifications"><span class="ext_title">' + chrome.i18n.getMessage("notifications") + '</span><div class="ext_push-toggle selector"><div class="ext_point"></div></div></div><div class="ext_settings_item show_action_buttons" data-type="show_action_buttons"><span class="ext_title">' + chrome.i18n.getMessage("actions_btns") + '</span><span class="ext_help_img_icon"></span><div class="ext_push-toggle selector"><div class="ext_point"></div></div></div></div></div>');
        $("body").append(a);
        var b = a.find('header a[href="/"]');
        0 == b.length && (b = $('<a class=" Iazdo" href="/direct/inbox/"><span style="display: inline-block; transform: rotate(270deg);"><svg aria-label="Назад" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"></path></svg></span></a>'), a.find("header > div > div:first-child").append(b)), tippy(".send_img_from_anywhere .ext_help_img_icon", {
            content: chrome.i18n.getMessage("send_img_from_anywhere_help_message")
        }), tippy(".show_action_buttons .ext_help_img_icon", {
            content: chrome.i18n.getMessage("show_action_buttons_help_message")
        }), chrome.storage.sync.get("settings", function(b) {
            var c = b.settings || {};
            c.send_img_from_anywhere && a.find(".send_img_from_anywhere").addClass("active"), c.send_by_enter && a.find(".send_by_enter").addClass("active"), c.ext_notifications && a.find(".ext_notifications").addClass("active"), c.show_action_buttons && a.find(".show_action_buttons").addClass("active")
        });
        var c = a.find(".ext_push-toggle");
        c.on("click", function() {
            var a = $(this).closest(".ext_settings_item"),
                b = a.data().type;
            chrome.storage.sync.get("settings", function(c) {
                var d = c.settings || {};
                a.hasClass("active") ? (a.removeClass("active"), d[b] = !1) : (a.addClass("active"), d[b] = !0), chrome.storage.sync.set({
                    settings: d
                }), "send_by_enter" == b && (s = d[b]), "show_action_buttons" == b && (t = d[b])
            })
        }), b.on("click", function(b) {
            b.preventDefault(), b.stopPropagation(), a.remove(), $("#react-root").show()
        })
    }

    function i(a) {
        null === u && (u = a.cloneNode(!0), $(u).find("h1").text(chrome.i18n.getMessage("settings_header")), $(u).find("h1+div").html(""))
    }

    function j() {
        var a = document.querySelector("#react-root > section > div > header");
        a && (a.dataset.ext_direct_header || (a.dataset.ext_direct_header = "1", setTimeout(function() {
            if (i(a), !a.querySelector('a[href="/"]')) {
                var c = $('<a class=" Iazdo" href="/"><span style="display: inline-block; transform: rotate(270deg);"><svg aria-label="Назад" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"></path></svg></span></a>');
                $(a).find(" > div > div:first-child").append(c)
            }
            var d = document.createElement("div");
            d.className = "ext_direct_header", a.appendChild(d),$("h1+div", a).prepend('<button class="ext_direct_settings_btn"><span></span></button>')
        }, 200)))
    }

    function k(a, b, c) {
        var d = new XMLHttpRequest;
        d.open("GET", a.url, !0), d.responseType = "arraybuffer", d.onreadystatechange = function(d) {
            if (4 === this.readyState)
                if (200 === this.status) try {
                    var e = this.response || this.responseText,
                        f = new Blob([e], {
                            type: "application/octet-stream"
                        });
                    saveAs(f, a.filename), "function" == typeof c && c(!0)
                } catch (d) {
                    b.dataset.in_progress = "", c(!1)
                } else b.dataset.in_progress = "", c(!1)
        }, b.dataset.in_progress = "1";
        var e = document.createElement("span");
        e.className = "ext_ig_prgr", d.onprogress = function(a) {
            b.querySelector(".ext_ig_prgr") || b.appendChild(e), a.loaded < a.total ? e.innerText = Math.round(a.loaded / a.total * 100).toString() + "%" : (b.dataset.in_progress = "", e.remove())
        }, d.send()
    }

    function l() {
        var a = document.querySelector("#react-root");
        if (a) {
            var b = {
                    attributes: !1,
                    childList: !0,
                    characterData: !1,
                    subtree: !0
                },
                c = new MutationObserver(function(a) {
                    a.forEach(function(a) {
                        if (a.addedNodes.length) {
                            var b = a.addedNodes[0];
                            b.tagName && "header" == b.tagName.toLowerCase() && window.location.href.indexOf("/direct/inbox") > -1 && j()
                        }
                    })
                });
            c.observe(a, b)
        }
    }

    function m() {
        return document.querySelector(".error-container") ? (chrome.runtime.sendMessage("error_page"), !0) : void 0
    }

    function n() {
        -1 === window.navigator.userAgent.toLowerCase().indexOf("mobile") && -1 === window.navigator.appVersion.toLowerCase.indexOf("mobile")
    }

    function o() {
        !document.querySelector('[href*="/direct/t/"]') && document.querySelectorAll(".IEL5I div").length > 20
    }

    function p() {
        var a = location.href.match(/#send_external=([^&]+)/);
        if (a = a && a[1]) {
            try {
                a = JSON.parse(decodeURIComponent(a))
            } catch (b) {
                return
            }
            var c = a.link,
                d = a.thread_id,
                e = a.thread_title;
            $("body").append('<div class="ext_wrap_confirm_send_external"><div class="ext_msg_confirm_send_external"><div class="ext_text">Do you confirm sending the image <span class="ext_external_link" ">' + c + "</span> to thread with " + e + '</div><div class="ext_button_wrap"><button class="ext_btn_ok">Yes</button><button class="ext_btn_cancel">Cancel</button></div></div><div class="ext_wrap_external_img"><img src="' + c + '"></div></div>'), document.querySelector(".ext_wrap_confirm_send_external .ext_btn_cancel").addEventListener("click", function() {
                $(this).closest(".ext_wrap_confirm_send_external").remove()
            }), document.querySelector(".ext_wrap_confirm_send_external .ext_btn_ok").addEventListener("click", function() {
                var a = $(this),
                    b = a.closest(".ext_wrap_confirm_send_external");
                $(".ext_button_wrap", b).html('<div class="ext_loader"></div>'), $(".ext_text", b).html(""), x.sendExternalImage(c, d, function() {
                    setTimeout(function() {
                        var a = document.querySelector('a[href*="direct/t/' + d + '"]');
                        a && a.click(), b.remove()
                    }, 1e3)
                })
            })
        }
    }

    function q() {
        var a = $("body");
        a.on("click", ".ext_ig_dl_btn", function(a) {
            if (a.preventDefault(), a.stopPropagation(), "1" != this.dataset.in_progress) {
                var b = $(this).data();
                k(b, this, function() {})
            }
        }), a.on("click", ".ext_ig_exp_btn", function(a) {
            a.preventDefault(), a.stopPropagation(), chrome.runtime.sendMessage({
                action: "openMediaInTab",
                url: $(this).data().url
            })
        }), a.on("click", ".ext_direct_settings_btn", function(a) {
            a.preventDefault(), a.stopPropagation(), h()
        })
    }

    function r() {
        chrome.storage.sync.get("settings", function(a) {
            var b = a.settings || {};
            s = b.send_by_enter || !1, t = b.show_action_buttons || !1
        })
    }
    if (!window.insta_ext_direct_7483) {
        window.insta_ext_direct_7483 = 1;
        var s = !1,
            t = !1,
            u = null,
            v = {
                getFromLink: function(a, b) {
                    if ("string" != typeof a) return null;
                    var c = "jpg";
                    if (-1 !== a.indexOf(".png")) c = "png";
                    else if (-1 !== a.indexOf(".jpg")) c = "png";
                    else if (-1 !== a.indexOf(".mp4")) c = "mp4";
                    else if (-1 !== a.indexOf(".flv")) c = "flv";
                    else {
                        if (-1 === a.indexOf(".gif")) return null;
                        c = "gif"
                    }
                    var d = a.match(/\/([^\/?]+)(?:$|\?)/);
                    return d = d && d[1], d || (d = Math.floor(1e4 * Math.random()) + "_noname." + c), b && (d = b + "_" + d), this.modify(d)
                },
                rtrim: /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                illegalRe: /[\/\?<>\\:\*\|"~]/g,
                controlRe: /[\x00-\x1f\x80-\x9f]/g,
                reservedRe: /^\.+/,
                partsRe: /^(.+)\.([a-z0-9]{1,4})$/i,
                specialChars: "nbsp,iexcl,cent,pound,curren,yen,brvbar,sect,uml,copy,ordf,laquo,not,shy,reg,macr,deg,plusmn,sup2,sup3,acute,micro,para,middot,cedil,sup1,ordm,raquo,frac14,frac12,frac34,iquest,Agrave,Aacute,Acirc,Atilde,Auml,Aring,AElig,Ccedil,Egrave,Eacute,Ecirc,Euml,Igrave,Iacute,Icirc,Iuml,ETH,Ntilde,Ograve,Oacute,Ocirc,Otilde,Ouml,times,Oslash,Ugrave,Uacute,Ucirc,Uuml,Yacute,THORN,szlig,agrave,aacute,acirc,atilde,auml,aring,aelig,ccedil,egrave,eacute,ecirc,euml,igrave,iacute,icirc,iuml,eth,ntilde,ograve,oacute,ocirc,otilde,ouml,divide,oslash,ugrave,uacute,ucirc,uuml,yacute,thorn,yuml".split(","),
                specialCharsList: [
                    ["amp", "quot", "lt", "gt"],
                    [38, 34, 60, 62]
                ],
                specialCharsRe: /&([^;]{2,6});/g,
                rnRe: /\r?\n/g,
                re1: /[\*\?"]/g,
                re2: /</g,
                re3: />/g,
                spaceRe: /[\s\t\uFEFF\xA0]+/g,
                dblRe: /(\.|!|\?|_|,|\-|:|\+){2,}/g,
                re4: /[\.,:;\/\-_\+=']$/g,
                decodeUnicodeEscapeSequence: function(a) {
                    var b = /\\(\\u[0-9a-f]{4})/g;
                    try {
                        return JSON.parse(JSON.stringify(a).replace(b, "$1"))
                    } catch (c) {
                        return a
                    }
                },
                decodeSpecialChars: function(a) {
                    var b = this;
                    return a.replace(this.specialCharsRe, function(a, c) {
                        var d = null;
                        if ("#" === c[0]) return d = parseInt(c.substr(1)), isNaN(d) ? "" : String.fromCharCode(d);
                        var e = b.specialCharsList[0].indexOf(c);
                        return -1 !== e ? (d = b.specialCharsList[1][e], String.fromCharCode(d)) : (e = b.specialChars.indexOf(c), -1 !== e ? (d = e + 160, String.fromCharCode(d)) : "")
                    })
                },
                trim: function(a) {
                    return a.replace(this.rtrim, "")
                },
                getParts: function(a) {
                    return a.match(this.partsRe)
                },
                modify: function(a) {
                    if (!a) return "";
                    a = this.decodeUnicodeEscapeSequence(a);
                    try {
                        a = decodeURIComponent(a)
                    } catch (b) {
                        a = unescape(a)
                    }
                    if (a = this.decodeSpecialChars(a), a = a.replace(this.rnRe, " "), a = this.trim(a), a = a.replace(this.re1, "").replace(this.re2, "(").replace(this.re3, ")").replace(this.spaceRe, " ").replace(this.dblRe, "$1").replace(this.illegalRe, "_").replace(this.controlRe, "").replace(this.reservedRe, "").replace(this.re4, ""), a.length <= this.maxLength) return a;
                    var c = this.getParts(a);
                    return c && 3 == c.length ? (c[1] = c[1].substr(0, this.maxLength), c[1] + "." + c[2]) : a
                }
            };
        m();
        var w = setInterval(m, 200);
        c(function(b) {
            b ? (location.href.indexOf("send_external=") > -1 && p(), $(document).ready(function() {
                clearInterval(w), m() || (a(), r(), d(), j(), q(), l(), setInterval(n, 5e3), setTimeout(o, 1e3))
            })) : window.location.href.indexOf("/direct/") > -1 && (window.location.href = "https://www.instagram.com/accounts/login/")
        });
        var x = function() {
            
            requestStack =  {
                requestExternalFile: function(a, b, c) {
                    var d = new XMLHttpRequest;
                    d.open("GET", a, !0), d.responseType = "arraybuffer", d.onreadystatechange = function() {
                        if (4 === this.readyState && 200 === this.status) try {
                            var a = this.response || this.responseText,
                                d = new Blob([a], {
                                    type: "application/octet-stream"
                                });
                            x.uploadRequest.factory(b, d, c)
                        } catch (e) {}
                    }, d.send()
                },
                sendExternalImage: function(a, b, c) {
                    var d = this;
                    d.requestExternalFile(a, b, c)
                },
                isValidLink: function(a) {
                    return !!a.match(/^https?:\/\/(www\.)?[^\.]+\.[^\.]+/)
                },
                uploadRequest: {
                    factory: function(a, b, c) {
                        var d = this;
                        d.sendPhoto(b, function(b) {
                            b.error ? d.handleBadResponse(b) : d.configurePhoto({
                                uploadId: b.upload_id,
                                threadId: a
                            }, function(a) {
                                a.error && d.handleBadResponse(a), c()
                            })
                        })
                    },
                    sendPhoto: function(a, b) {
                        chrome.runtime.sendMessage("getCookies", function(c) {
                            if (c) {
                                var d = x.size && x.size.width || 1080,
                                    e = x.size && x.size.height || 1080,
                                    f = (new Date).getTime(),
                                    g = "https://www.instagram.com/rupload_igphoto/direct_" + f,
                                    h = new XMLHttpRequest;
                                h.open("POST", g, !0), h.setRequestHeader("x-csrftoken", c.csrftoken), h.setRequestHeader("x-entity-length", a.size), h.setRequestHeader("x-entity-name", "direct_" + f), h.setRequestHeader("x-ig-app-id", "1217981644879628"), h.setRequestHeader("x-instagram-rupload-params", JSON.stringify({
                                    media_type: 1,
                                    upload_id: f,
                                    upload_media_height: e,
                                    upload_media_width: d
                                })), h.setRequestHeader("offset", 0), h.onload = function() {
                                    try {
                                        var a = JSON.parse(this.responseText)
                                    } catch (c) {
                                        return b({
                                            error: 1,
                                            status: 200
                                        })
                                    }
                                    b(a)
                                }, h.send(a)
                            }
                        })
                    },
                    configurePhoto: function(a, b) {
                        var c = a.uploadId,
                            d = a.usertags,
                            e = a.threadId;
                        chrome.runtime.sendMessage("getCookies", function(a) {
                            if (!a || !a.sessionid) return b({
                                error: 1
                            });
                            var f = {
                                upload_id: c,
                                action: "send_item",
                                allow_full_aspect_ratio: 1,
                                content_type: "photo",
                                sampled: 1,
                                thread_id: e
                            };
                            d && (f.usertags = JSON.stringify({
                                "in": d
                            }));
                            var g = "https://www.instagram.com/direct_v2/web/threads/broadcast/configure_photo/";
                            $.ajax({
                                url: g,
                                method: "POST",
                                data: f,
                                headers: {
                                    "x-csrftoken": a.csrftoken,
                                    "x-ig-app-id": "1217981644879628"
                                }
                            }).done(function(a) {
                                return a && "object" == typeof a && "ok" == a.status ? void b({
                                    success: 1
                                }) : b({
                                    error: 1,
                                    res: a,
                                    status: 200
                                })
                            }).fail(function(a) {
                                b({
                                    error: 1,
                                    res: a.responseJSON,
                                    status: a.status
                                })
                            })
                        })
                    },
                    handleBadResponse: function(a) {}
                }
            }

            return requestStack;
        }()

    }
}();

var s = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
s.src = chrome.runtime.getURL('js/view-bigimg.js');
s.onload = function() {
this.remove();
};
(document.head || document.documentElement).appendChild(s);

s = document.createElement('script');
s.src = chrome.runtime.getURL('js/inject/script.js');

s.onload = function() {
this.remove();
};
(document.head || document.documentElement).appendChild(s);

var a = document.createElement("link");
a.setAttribute("rel", "stylesheet"), a.setAttribute("href", chrome.extension.getURL("css/content.css")), document.head.appendChild(a);
var b = document.createElement("link");
b.setAttribute("rel", "stylesheet"), b.setAttribute("href", chrome.extension.getURL("css/font-awesome.min.css")), document.head.appendChild(b);
var c = document.createElement("link");
c.setAttribute("rel", "stylesheet"), c.setAttribute("href", chrome.extension.getURL("css/emoji.css")), document.head.appendChild(c)
var d = document.createElement("style");
d.innerText = `

/*!
 * Viewer.js v1.5.0
 * https://fengyuanchen.github.io/viewerjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2019-11-23T05:10:21.757Z
 */.viewer-close:before,.viewer-flip-horizontal:before,.viewer-flip-vertical:before,.viewer-fullscreen-exit:before,.viewer-fullscreen:before,.viewer-next:before,.viewer-one-to-one:before,.viewer-play:before,.viewer-prev:before,.viewer-reset:before,.viewer-rotate-left:before,.viewer-rotate-right:before,.viewer-zoom-in:before,.viewer-zoom-out:before{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAAUCAYAAABWOyJDAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAQPSURBVHic7Zs/iFxVFMa/0U2UaJGksUgnIVhYxVhpjDbZCBmLdAYECxsRFBTUamcXUiSNncgKQbSxsxH8gzAP3FU2jY0kKKJNiiiIghFlccnP4p3nPCdv3p9778vsLOcHB2bfveeb7955c3jvvNkBIMdxnD64a94GHMfZu3iBcRynN7zAOI7TG15gHCeeNUkr8zaxG2lbYDYsdgMbktBsP03jdQwljSXdtBhLOmtjowC9Mg9L+knSlcD8TNKpSA9lBpK2JF2VdDSR5n5J64m0qli399hNFMUlpshQii5jbXTbHGviB0nLNeNDSd9VO4A2UdB2fp+x0eCnaXxWXGA2X0au/3HgN9P4LFCjIANOJdrLr0zzZ+BEpNYDwKbpnQMeAw4m8HjQtM6Z9qa917zPQwFr3M5KgA6J5rTJCdFZJj9/lyvGhsDvwFNVuV2MhhjrK6b9bFiE+j1r87eBl4HDwCF7/U/k+ofAX5b/EXBv5JoLMuILzf3Ap6Z3EzgdqHMCuF7hcQf4HDgeoHnccncqdK/TvSDWffFXI/exICY/xZyqc6XLWF1UFZna4gJ7q8BsRvgd2/xXpo6P+D9dfT7PpECtA3cnWPM0GXGFZh/wgWltA+cDNC7X+AP4GzjZQe+k5dRxuYPeiuXU7e1qwLpDz7dFjXKRaSwuMLvAlG8zZlG+YmiK1HoFqT7wP2z+4Q45TfEGcMt01xLoNZEBTwRqD4BLpnMLeC1A41UmVxsXgXeBayV/Wx20rpTyrpnWRft7p6O/FdqzGrDukPNtkaMoMo3FBdBSQMOnYBCReyf05s126fU9ytfX98+mY54Kxnp7S9K3kj6U9KYdG0h6UdLbkh7poFXMfUnSOyVvL0h6VtIXHbS6nOP+s/Zm9mvyXW1uuC9ohZ72E9uDmXWLJOB1GxsH+DxPftsB8B6wlGDN02TAkxG6+4D3TWsbeC5CS8CDFce+AW500LhhOW2020TRjK3b21HEmgti9m0RonxbdMZeVzV+/4tF3cBpP7E9mKHNL5q8h5g0eYsCMQz0epq8gQrwMXAgcs0FGXGFRcB9wCemF9PkbYqM/Bas7fxLwNeJPdTdpo4itQti8lPMqTpXuozVRVXPpbHI3KkNTB1NfkL81j2mvhDp91HgV9MKuRIqrykj3WPq4rHyL+axj8/qGPmTqi6F9YDlHOvJU6oYcTsh/TYSzWmTE6JT19CtLTJt32D6CmHe0eQn1O8z5AXgT4sx4Vcu0/EQecMydB8z0hUWkTd2t4CrwNEePqMBcAR4mrBbwyXLPWJa8zrXmmLEhNBmfpkuY2102xxrih+pb+ieAb6vGhuA97UcJ5KR8gZ77K+99xxeYBzH6Q3/Z0fHcXrDC4zjOL3hBcZxnN74F+zlvXFWXF9PAAAAAElFTkSuQmCC");background-repeat:no-repeat;background-size:280px;color:transparent;display:block;font-size:0;height:20px;line-height:0;width:20px}.viewer-zoom-in:before{background-position:0 0;content:"Zoom In"}.viewer-zoom-out:before{background-position:-20px 0;content:"Zoom Out"}.viewer-one-to-one:before{background-position:-40px 0;content:"One to One"}.viewer-reset:before{background-position:-60px 0;content:"Reset"}.viewer-prev:before{background-position:-80px 0;content:"Previous"}.viewer-play:before{background-position:-100px 0;content:"Play"}.viewer-next:before{background-position:-120px 0;content:"Next"}.viewer-rotate-left:before{background-position:-140px 0;content:"Rotate Left"}.viewer-rotate-right:before{background-position:-160px 0;content:"Rotate Right"}.viewer-flip-horizontal:before{background-position:-180px 0;content:"Flip Horizontal"}.viewer-flip-vertical:before{background-position:-200px 0;content:"Flip Vertical"}.viewer-fullscreen:before{background-position:-220px 0;content:"Enter Full Screen"}.viewer-fullscreen-exit:before{background-position:-240px 0;content:"Exit Full Screen"}.viewer-close:before{background-position:-260px 0;content:"Close"}.viewer-container{bottom:0;direction:ltr;font-size:0;left:0;line-height:0;overflow:hidden;position:absolute;right:0;-webkit-tap-highlight-color:transparent;top:0;-ms-touch-action:none;touch-action:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.viewer-container::-moz-selection,.viewer-container ::-moz-selection{background-color:transparent}.viewer-container::selection,.viewer-container ::selection{background-color:transparent}.viewer-container img{display:block;height:auto;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}.viewer-canvas{bottom:0;left:0;overflow:hidden;position:absolute;right:0;top:0}.viewer-canvas>img{height:auto;margin:15px auto;max-width:90%!important;width:auto}.viewer-footer{bottom:0;left:0;overflow:hidden;position:absolute;right:0;text-align:center}.viewer-navbar{background-color:rgba(0,0,0,.5);overflow:hidden}.viewer-list{-webkit-box-sizing:content-box;box-sizing:content-box;height:50px;margin:0;overflow:hidden;padding:1px 0}.viewer-list>li{color:transparent;cursor:pointer;float:left;font-size:0;height:50px;line-height:0;opacity:.5;overflow:hidden;-webkit-transition:opacity .15s;transition:opacity .15s;width:30px}.viewer-list>li:hover{opacity:.75}.viewer-list>li+li{margin-left:1px}.viewer-list>.viewer-loading{position:relative}.viewer-list>.viewer-loading:after{border-width:2px;height:20px;margin-left:-10px;margin-top:-10px;width:20px}.viewer-list>.viewer-active,.viewer-list>.viewer-active:hover{opacity:1}.viewer-player{background-color:#000;bottom:0;cursor:none;display:none;right:0}.viewer-player,.viewer-player>img{left:0;position:absolute;top:0}.viewer-toolbar>ul{display:inline-block;margin:0 auto 5px;overflow:hidden;padding:3px 0}.viewer-toolbar>ul>li{background-color:rgba(0,0,0,.5);border-radius:50%;cursor:pointer;float:left;height:24px;overflow:hidden;-webkit-transition:background-color .15s;transition:background-color .15s;width:24px}.viewer-toolbar>ul>li:hover{background-color:rgba(0,0,0,.8)}.viewer-toolbar>ul>li:before{margin:2px}.viewer-toolbar>ul>li+li{margin-left:1px}.viewer-toolbar>ul>.viewer-small{height:18px;margin-bottom:3px;margin-top:3px;width:18px}.viewer-toolbar>ul>.viewer-small:before{margin:-1px}.viewer-toolbar>ul>.viewer-large{height:30px;margin-bottom:-3px;margin-top:-3px;width:30px}.viewer-toolbar>ul>.viewer-large:before{margin:5px}.viewer-tooltip{background-color:rgba(0,0,0,.8);border-radius:10px;color:#fff;display:none;font-size:12px;height:20px;left:50%;line-height:20px;margin-left:-25px;margin-top:-10px;position:absolute;text-align:center;top:50%;width:50px}.viewer-title{color:#ccc;display:inline-block;font-size:12px;line-height:1;margin:0 5% 5px;max-width:90%;opacity:.8;overflow:hidden;text-overflow:ellipsis;-webkit-transition:opacity .15s;transition:opacity .15s;white-space:nowrap}.viewer-title:hover{opacity:1}.viewer-button{background-color:rgba(0,0,0,.5);border-radius:50%;cursor:pointer;height:80px;overflow:hidden;position:absolute;right:-40px;top:-40px;-webkit-transition:background-color .15s;transition:background-color .15s;width:80px}.viewer-button:focus,.viewer-button:hover{background-color:rgba(0,0,0,.8)}.viewer-button:before{bottom:15px;left:15px;position:absolute}.viewer-fixed{position:fixed}.viewer-open{overflow:hidden}.viewer-show{display:block}.viewer-hide{display:none}.viewer-backdrop{background-color:rgba(0,0,0,.5)}.viewer-invisible{visibility:hidden}.viewer-move{cursor:move;cursor:-webkit-grab;cursor:grab}.viewer-fade{opacity:0}.viewer-in{opacity:1}.viewer-transition{-webkit-transition:all .3s;transition:all .3s}@-webkit-keyframes viewer-spinner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes viewer-spinner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.viewer-loading:after{-webkit-animation:viewer-spinner 1s linear infinite;animation:viewer-spinner 1s linear infinite;border:4px solid hsla(0,0%,100%,.1);border-left-color:hsla(0,0%,100%,.5);border-radius:50%;content:"";display:inline-block;height:40px;left:50%;margin-left:-20px;margin-top:-20px;position:absolute;top:50%;width:40px;z-index:1}@media (max-width:767px){.viewer-hide-xs-down{display:none}}@media (max-width:991px){.viewer-hide-sm-down{display:none}}@media (max-width:1199px){.viewer-hide-md-down{display:none}}

/*!
 * Cropper.js v1.5.6
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2019-10-04T04:33:44.164Z
 */.cropper-container{direction:ltr;font-size:0;line-height:0;position:relative;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cropper-container img{display:block;height:100%;image-orientation:0deg;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}.cropper-canvas,.cropper-crop-box,.cropper-drag-box,.cropper-modal,.cropper-wrap-box{bottom:0;left:0;position:absolute;right:0;top:0}.cropper-canvas,.cropper-wrap-box{overflow:hidden}.cropper-drag-box{background-color:#fff;opacity:0}.cropper-modal{background-color:#000;opacity:.5}.cropper-view-box{display:block;height:100%;outline:1px solid #39f;outline-color:rgba(51,153,255,.75);overflow:hidden;width:100%}.cropper-dashed{border:0 dashed #eee;display:block;opacity:.5;position:absolute}.cropper-dashed.dashed-h{border-bottom-width:1px;border-top-width:1px;height:33.33333%;left:0;top:33.33333%;width:100%}.cropper-dashed.dashed-v{border-left-width:1px;border-right-width:1px;height:100%;left:33.33333%;top:0;width:33.33333%}.cropper-center{display:block;height:0;left:50%;opacity:.75;position:absolute;top:50%;width:0}.cropper-center:after,.cropper-center:before{background-color:#eee;content:" ";display:block;position:absolute}.cropper-center:before{height:1px;left:-3px;top:0;width:7px}.cropper-center:after{height:7px;left:0;top:-3px;width:1px}.cropper-face,.cropper-line,.cropper-point{display:block;height:100%;opacity:.1;position:absolute;width:100%}.cropper-face{background-color:#fff;left:0;top:0}.cropper-line{background-color:#39f}.cropper-line.line-e{cursor:ew-resize;right:-3px;top:0;width:5px}.cropper-line.line-n{cursor:ns-resize;height:5px;left:0;top:-3px}.cropper-line.line-w{cursor:ew-resize;left:-3px;top:0;width:5px}.cropper-line.line-s{bottom:-3px;cursor:ns-resize;height:5px;left:0}.cropper-point{background-color:#39f;height:5px;opacity:.75;width:5px}.cropper-point.point-e{cursor:ew-resize;margin-top:-3px;right:-3px;top:50%}.cropper-point.point-n{cursor:ns-resize;left:50%;margin-left:-3px;top:-3px}.cropper-point.point-w{cursor:ew-resize;left:-3px;margin-top:-3px;top:50%}.cropper-point.point-s{bottom:-3px;cursor:s-resize;left:50%;margin-left:-3px}.cropper-point.point-ne{cursor:nesw-resize;right:-3px;top:-3px}.cropper-point.point-nw{cursor:nwse-resize;left:-3px;top:-3px}.cropper-point.point-sw{bottom:-3px;cursor:nesw-resize;left:-3px}.cropper-point.point-se{bottom:-3px;cursor:nwse-resize;height:20px;opacity:1;right:-3px;width:20px}@media (min-width:768px){.cropper-point.point-se{height:15px;width:15px}}@media (min-width:992px){.cropper-point.point-se{height:10px;width:10px}}@media (min-width:1200px){.cropper-point.point-se{height:5px;opacity:.75;width:5px}}.cropper-point.point-se:before{background-color:#39f;bottom:-50%;content:" ";display:block;height:200%;opacity:0;position:absolute;right:-50%;width:200%}.cropper-invisible{opacity:0}.cropper-bg{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC")}.cropper-hide{display:block;height:0;position:absolute;width:0}.cropper-hidden{display:none!important}.cropper-move{cursor:move}.cropper-crop{cursor:crosshair}.cropper-disabled .cropper-drag-box,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed}
 
 .message_by_user {
    margin-right: 0px;
    width: 300px;
    margin-bottom: 8px;
    margin-left: calc(100vw - 360px) !important;
 }

 audio {
    margin-left: 32px !important;
    margin-bottom: 8px !important;
 }

 body{
   overflow: auto !important;
 }

 .emoji-wysiwyg-editor {
   padding-top: 8px !important;
 }

 #react-root > section > div:nth-child(1) > header > div.b5itu {
   height: 50px !important;
   box-shadow: 0 0 4px rgba(0,0,0,0.2);
 }

 .IEL5I {
    padding-top : 50px !important;
 }

 .ext_direct_header {
   display : none;
}

#react-root > section > div:nth-child(1) > header > div.b5itu > div.mXkkY.HOQT4 > a {
   background-image: url(data:image/png;base64,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);
   background-size: auto 100%;
   background-repeat: no-repeat;
   width: 40px;
   height : 20px;
}

header > div > div > a > span{
   display: none !important;
}


#react-root > section > div:nth-child(1) > header > div > h1 > div > div.Igw0E.IwRSH.eGOV_.ui_ht.n4cjz > button > div.Igw0E._56XdI.YBx95._4EzTm

{
   height : auto !important;
}







#react-root > section > div:nth-child(1) > header > div > h1 > div > div.Igw0E.IwRSH.eGOV_._4EzTm.soMvl {
   margin-left : 0px !important;
   height : 30px !important;
   width : 30px !important;
}
#react-root > section > div:nth-child(1) > header > div > h1 > div > div.Igw0E.IwRSH.eGOV_._4EzTm.soMvl > button {
   height : 30px !important;
   width : 30px !important;
}
#react-root > section > div:nth-child(1) > header > div > h1 > div > div.Igw0E.IwRSH.eGOV_._4EzTm.soMvl > button > div > span{
   height : 30px !important;
   width : 30px !important;
}
#react-root > section > div:nth-child(1) > header > div > h1 > div > div.Igw0E.IwRSH.eGOV_._4EzTm.soMvl > button > div > span > img{
   height : 30px !important;
   width : 30px !important;
}

#react-root > section > div:nth-child(1) > header > div > h1 > div > div.Igw0E.IwRSH.eGOV_.ui_ht.n4cjz > button > div > div > div {
   font-size: 14px;
}


.subheader {
   padding-top: 4px;
   font-size: 14px;
   font-weight: 100;
   opacity: 0.4;
}

.pointable {
   cursor: pointer;
}


.direct_video {
   position : fixed;
   width : 0px;
   height : 0px;
   top : 100vh;
   left : 50%;
   z-index : 999999999999;
   transition: all .3s;
}

.direct_video.view_video{
   position : fixed;
   height : calc(100vh - 40px);
   width :  calc(100vw - 40px);
   top : 20px;
   left : 20px;
   z-index : 999999999999;
}

.opaque::after {
   content : '';
   position : fixed;
   background-color: rgba(0,0,0,.5);
   height : 100vh;
   width : 100vw;
   top : 0px;
   left : 0px;
   z-index : 999999999998;
}

.viewer-title {
   display : none !important;
}
.viewer-navbar {
   display : none!important;
}

.cropper-container{

   top: 0px;
   left: 0px;
   position: fixed;
   width: 100vw;
   height: 100vh;
}

.fab_done {
   position: fixed;
   bottom : 20px;
   right : 20px;
   background-color : white;
   height  : 40px;
   width : 40px;
   border-radius : 50%;
   box-shadow : 0 0 10 rgba(0,0,0,.5);
}`;
document.head.appendChild(d);




s = document.createElement('script');
s.src = chrome.runtime.getURL('js/cropper.min.js');

s.onload = function() {
this.remove();
};
(document.head || document.documentElement).appendChild(s);
