this.kubio = this.kubio || {}, this.kubio.scripts = function(t) {
	var e = {};

	function i(n) {
		if (e[n]) return e[n].exports;
		var s = e[n] = {
			i: n,
			l: !1,
			exports: {}
		};
		return t[n].call(s.exports, s, s.exports, i), s.l = !0, s.exports
	}
	return i.m = t, i.c = e, i.d = function(t, e, n) {
		i.o(t, e) || Object.defineProperty(t, e, {
			enumerable: !0,
			get: n
		})
	}, i.r = function(t) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, i.t = function(t, e) {
		if (1 & e && (t = i(t)), 8 & e) return t;
		if (4 & e && "object" == typeof t && t && t.__esModule) return t;
		var n = Object.create(null);
		if (i.r(n), Object.defineProperty(n, "default", {
				enumerable: !0,
				value: t
			}), 2 & e && "string" != typeof t)
			for (var s in t) i.d(n, s, function(e) {
				return t[e]
			}.bind(null, s));
		return n
	}, i.n = function(t) {
		var e = t && t.__esModule ? function() {
			return t.default
		} : function() {
			return t
		};
		return i.d(e, "a", e), e
	}, i.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, i.p = "", i(i.s = 650)
}({
	102: function(t, e) {
		var i;
		i = function() {
			return this
		}();
		try {
			i = i || new Function("return this")()
		} catch (t) {
			"object" == typeof window && (i = window)
		}
		t.exports = i
	},
	268: function(t, e, i) {
		(function(e) {
			var i = NaN,
				n = "[object Symbol]",
				s = /^\s+|\s+$/g,
				o = /^[-+]0x[0-9a-f]+$/i,
				r = /^0b[01]+$/i,
				a = /^0o[0-7]+$/i,
				c = parseInt,
				h = "object" == typeof e && e && e.Object === Object && e,
				l = "object" == typeof self && self && self.Object === Object && self,
				d = h || l || Function("return this")(),
				u = Object.prototype.toString,
				p = Math.max,
				f = Math.min,
				m = function() {
					return d.Date.now()
				};

			function g(t) {
				var e = typeof t;
				return !!t && ("object" == e || "function" == e)
			}

			function y(t) {
				if ("number" == typeof t) return t;
				if (function(t) {
						return "symbol" == typeof t || function(t) {
							return !!t && "object" == typeof t
						}(t) && u.call(t) == n
					}(t)) return i;
				if (g(t)) {
					var e = "function" == typeof t.valueOf ? t.valueOf() : t;
					t = g(e) ? e + "" : e
				}
				if ("string" != typeof t) return 0 === t ? t : +t;
				t = t.replace(s, "");
				var h = r.test(t);
				return h || a.test(t) ? c(t.slice(2), h ? 2 : 8) : o.test(t) ? i : +t
			}
			t.exports = function(t, e, i) {
				var n, s, o, r, a, c, h = 0,
					l = !1,
					d = !1,
					u = !0;
				if ("function" != typeof t) throw new TypeError("Expected a function");

				function v(e) {
					var i = n,
						o = s;
					return n = s = void 0, h = e, r = t.apply(o, i)
				}

				function b(t) {
					var i = t - c;
					return void 0 === c || i >= e || i < 0 || d && t - h >= o
				}

				function w() {
					var t = m();
					if (b(t)) return _(t);
					a = setTimeout(w, function(t) {
						var i = e - (t - c);
						return d ? f(i, o - (t - h)) : i
					}(t))
				}

				function _(t) {
					return a = void 0, u && n ? v(t) : (n = s = void 0, r)
				}

				function S() {
					var t = m(),
						i = b(t);
					if (n = arguments, s = this, c = t, i) {
						if (void 0 === a) return function(t) {
							return h = t, a = setTimeout(w, e), l ? v(t) : r
						}(c);
						if (d) return a = setTimeout(w, e), v(c)
					}
					return void 0 === a && (a = setTimeout(w, e)), r
				}
				return e = y(e) || 0, g(i) && (l = !!i.leading, o = (d = "maxWait" in i) ? p(y(i.maxWait) || 0, e) : o, u = "trailing" in i ? !!i.trailing : u), S.cancel = function() {
					void 0 !== a && clearTimeout(a), h = 0, n = c = s = a = void 0
				}, S.flush = function() {
					return void 0 === a ? r : _(m())
				}, S
			}
		}).call(this, i(102))
	},
	582: function(t, e, i) {
		(function(t) {
			! function(t) {
				var e = function() {
						try {
							return !!Symbol.iterator
						} catch (t) {
							return !1
						}
					}(),
					i = function(t) {
						var i = {
							next: function() {
								var e = t.shift();
								return {
									done: void 0 === e,
									value: e
								}
							}
						};
						return e && (i[Symbol.iterator] = function() {
							return i
						}), i
					},
					n = function(t) {
						return encodeURIComponent(t).replace(/%20/g, "+")
					},
					s = function(t) {
						return decodeURIComponent(String(t).replace(/\+/g, " "))
					};
				(function() {
					try {
						var e = t.URLSearchParams;
						return "a=1" === new e("?a=1").toString() && "function" == typeof e.prototype.set && "function" == typeof e.prototype.entries
					} catch (t) {
						return !1
					}
				})() || function() {
					var s = function(t) {
							Object.defineProperty(this, "_entries", {
								writable: !0,
								value: {}
							});
							var e = typeof t;
							if ("undefined" === e);
							else if ("string" === e) "" !== t && this._fromString(t);
							else if (t instanceof s) {
								var i = this;
								t.forEach((function(t, e) {
									i.append(e, t)
								}))
							} else {
								if (null === t || "object" !== e) throw new TypeError("Unsupported input's type for URLSearchParams");
								if ("[object Array]" === Object.prototype.toString.call(t))
									for (var n = 0; n < t.length; n++) {
										var o = t[n];
										if ("[object Array]" !== Object.prototype.toString.call(o) && 2 === o.length) throw new TypeError("Expected [string, any] as entry at index " + n + " of URLSearchParams's input");
										this.append(o[0], o[1])
									} else
										for (var r in t) t.hasOwnProperty(r) && this.append(r, t[r])
							}
						},
						o = s.prototype;
					o.append = function(t, e) {
						t in this._entries ? this._entries[t].push(String(e)) : this._entries[t] = [String(e)]
					}, o.delete = function(t) {
						delete this._entries[t]
					}, o.get = function(t) {
						return t in this._entries ? this._entries[t][0] : null
					}, o.getAll = function(t) {
						return t in this._entries ? this._entries[t].slice(0) : []
					}, o.has = function(t) {
						return t in this._entries
					}, o.set = function(t, e) {
						this._entries[t] = [String(e)]
					}, o.forEach = function(t, e) {
						var i;
						for (var n in this._entries)
							if (this._entries.hasOwnProperty(n)) {
								i = this._entries[n];
								for (var s = 0; s < i.length; s++) t.call(e, i[s], n, this)
							}
					}, o.keys = function() {
						var t = [];
						return this.forEach((function(e, i) {
							t.push(i)
						})), i(t)
					}, o.values = function() {
						var t = [];
						return this.forEach((function(e) {
							t.push(e)
						})), i(t)
					}, o.entries = function() {
						var t = [];
						return this.forEach((function(e, i) {
							t.push([i, e])
						})), i(t)
					}, e && (o[Symbol.iterator] = o.entries), o.toString = function() {
						var t = [];
						return this.forEach((function(e, i) {
							t.push(n(i) + "=" + n(e))
						})), t.join("&")
					}, t.URLSearchParams = s
				}();
				var o = t.URLSearchParams.prototype;
				"function" != typeof o.sort && (o.sort = function() {
					var t = this,
						e = [];
					this.forEach((function(i, n) {
						e.push([n, i]), t._entries || t.delete(n)
					})), e.sort((function(t, e) {
						return t[0] < e[0] ? -1 : t[0] > e[0] ? 1 : 0
					})), t._entries && (t._entries = {});
					for (var i = 0; i < e.length; i++) this.append(e[i][0], e[i][1])
				}), "function" != typeof o._fromString && Object.defineProperty(o, "_fromString", {
					enumerable: !1,
					configurable: !1,
					writable: !1,
					value: function(t) {
						if (this._entries) this._entries = {};
						else {
							var e = [];
							this.forEach((function(t, i) {
								e.push(i)
							}));
							for (var i = 0; i < e.length; i++) this.delete(e[i])
						}
						var n, o = (t = t.replace(/^\?/, "")).split("&");
						for (i = 0; i < o.length; i++) n = o[i].split("="), this.append(s(n[0]), n.length > 1 ? s(n[1]) : "")
					}
				})
			}(void 0 !== t ? t : "undefined" != typeof window ? window : "undefined" != typeof self ? self : this),
			function(t) {
				if (function() {
						try {
							var e = new t.URL("b", "http://a");
							return e.pathname = "c d", "http://a/c%20d" === e.href && e.searchParams
						} catch (t) {
							return !1
						}
					}() || function() {
						var e = t.URL,
							i = function(e, i) {
								"string" != typeof e && (e = String(e)), i && "string" != typeof i && (i = String(i));
								var n, s = document;
								if (i && (void 0 === t.location || i !== t.location.href)) {
									i = i.toLowerCase(), (n = (s = document.implementation.createHTMLDocument("")).createElement("base")).href = i, s.head.appendChild(n);
									try {
										if (0 !== n.href.indexOf(i)) throw new Error(n.href)
									} catch (t) {
										throw new Error("URL unable to set base " + i + " due to " + t)
									}
								}
								var o = s.createElement("a");
								o.href = e, n && (s.body.appendChild(o), o.href = o.href);
								var r = s.createElement("input");
								if (r.type = "url", r.value = e, ":" === o.protocol || !/:/.test(o.href) || !r.checkValidity() && !i) throw new TypeError("Invalid URL");
								Object.defineProperty(this, "_anchorElement", {
									value: o
								});
								var a = new t.URLSearchParams(this.search),
									c = !0,
									h = !0,
									l = this;
								["append", "delete", "set"].forEach((function(t) {
									var e = a[t];
									a[t] = function() {
										e.apply(a, arguments), c && (h = !1, l.search = a.toString(), h = !0)
									}
								})), Object.defineProperty(this, "searchParams", {
									value: a,
									enumerable: !0
								});
								var d = void 0;
								Object.defineProperty(this, "_updateSearchParams", {
									enumerable: !1,
									configurable: !1,
									writable: !1,
									value: function() {
										this.search !== d && (d = this.search, h && (c = !1, this.searchParams._fromString(this.search), c = !0))
									}
								})
							},
							n = i.prototype;
						["hash", "host", "hostname", "port", "protocol"].forEach((function(t) {
							! function(t) {
								Object.defineProperty(n, t, {
									get: function() {
										return this._anchorElement[t]
									},
									set: function(e) {
										this._anchorElement[t] = e
									},
									enumerable: !0
								})
							}(t)
						})), Object.defineProperty(n, "search", {
							get: function() {
								return this._anchorElement.search
							},
							set: function(t) {
								this._anchorElement.search = t, this._updateSearchParams()
							},
							enumerable: !0
						}), Object.defineProperties(n, {
							toString: {
								get: function() {
									var t = this;
									return function() {
										return t.href
									}
								}
							},
							href: {
								get: function() {
									return this._anchorElement.href.replace(/\?$/, "")
								},
								set: function(t) {
									this._anchorElement.href = t, this._updateSearchParams()
								},
								enumerable: !0
							},
							pathname: {
								get: function() {
									return this._anchorElement.pathname.replace(/(^\/?)/, "/")
								},
								set: function(t) {
									this._anchorElement.pathname = t
								},
								enumerable: !0
							},
							origin: {
								get: function() {
									var t = {
											"http:": 80,
											"https:": 443,
											"ftp:": 21
										}[this._anchorElement.protocol],
										e = this._anchorElement.port != t && "" !== this._anchorElement.port;
									return this._anchorElement.protocol + "//" + this._anchorElement.hostname + (e ? ":" + this._anchorElement.port : "")
								},
								enumerable: !0
							},
							password: {
								get: function() {
									return ""
								},
								set: function(t) {},
								enumerable: !0
							},
							username: {
								get: function() {
									return ""
								},
								set: function(t) {},
								enumerable: !0
							}
						}), i.createObjectURL = function(t) {
							return e.createObjectURL.apply(e, arguments)
						}, i.revokeObjectURL = function(t) {
							return e.revokeObjectURL.apply(e, arguments)
						}, t.URL = i
					}(), void 0 !== t.location && !("origin" in t.location)) {
					var e = function() {
						return t.location.protocol + "//" + t.location.hostname + (t.location.port ? ":" + t.location.port : "")
					};
					try {
						Object.defineProperty(t.location, "origin", {
							get: e,
							enumerable: !0
						})
					} catch (i) {
						setInterval((function() {
							t.location.origin = e()
						}), 100)
					}
				}
			}(void 0 !== t ? t : "undefined" != typeof window ? window : "undefined" != typeof self ? self : this)
		}).call(this, i(102))
	},
	583: function(t, e) {
		let i = document.attachEvent,
			n = !1;

		function s(t) {
			const e = t.__resizeTriggers__,
				i = e.firstElementChild,
				n = e.lastElementChild,
				s = i.firstElementChild;
			n.scrollLeft = n.scrollWidth, n.scrollTop = n.scrollHeight, s.style.width = i.offsetWidth + 1 + "px", s.style.height = i.offsetHeight + 1 + "px", i.scrollLeft = i.scrollWidth, i.scrollTop = i.scrollHeight
		}

		function o(t) {
			const e = this;
			s(this), this.__resizeRAF__ && a(this.__resizeRAF__), this.__resizeRAF__ = r((function() {
				(function(t) {
					return t.offsetWidth != t.__resizeLast__.width || t.offsetHeight != t.__resizeLast__.height
				})(e) && (e.__resizeLast__.width = e.offsetWidth, e.__resizeLast__.height = e.offsetHeight, e.__resizeListeners__.forEach((function(i) {
					i.call(e, t)
				})))
			}))
		}
		if (!i) {
			var r = function() {
					const t = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(t) {
						return window.setTimeout(t, 20)
					};
					return function(e) {
						return t(e)
					}
				}(),
				a = function() {
					const t = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout;
					return function(e) {
						return t(e)
					}
				}(),
				c = !1,
				h = "",
				l = "animationstart",
				d = "Webkit Moz O ms".split(" "),
				u = "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "); {
				const t = document.createElement("fakeelement");
				if (void 0 !== t.style.animationName && (c = !0), !1 === c)
					for (let e = 0; e < d.length; e++)
						if (void 0 !== t.style[d[e] + "AnimationName"]) {
							h = "-" + d[e].toLowerCase() + "-", l = u[e], c = !0;
							break
						}
			}
			var p = "resizeanim",
				f = "@" + h + "keyframes " + p + " { from { opacity: 0; } to { opacity: 0; } } ",
				m = h + "animation: 1ms " + p + "; "
		}
		window.addResizeListener = function(t, e) {
			i ? t.attachEvent("onresize", e) : (t.__resizeTriggers__ || ("static" == getComputedStyle(t).position && (t.style.position = "relative"), function() {
				if (!n) {
					const t = (f || "") + ".resize-triggers { " + (m || "") + 'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
						e = document.head || document.getElementsByTagName("head")[0],
						i = document.createElement("style");
					i.type = "text/css", i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(document.createTextNode(t)), e.appendChild(i), n = !0
				}
			}(), t.__resizeLast__ = {}, t.__resizeListeners__ = [], (t.__resizeTriggers__ = document.createElement("div")).className = "resize-triggers", t.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>', t.appendChild(t.__resizeTriggers__), s(t), t.addEventListener("scroll", o, {
				passive: !0
			}), l && t.__resizeTriggers__.addEventListener(l, (function(e) {
				e.animationName == p && s(t)
			}))), t.__resizeListeners__.push(e))
		}, window.removeResizeListener = function(t, e) {
			if (i) t.detachEvent("onresize", e);
			else {
				if (!(t && t.__resizeListeners__ && t.__resizeTriggers__)) return;
				t.__resizeListeners__.splice(t.__resizeListeners__.indexOf(e), 1), t.__resizeListeners__.length || (t.removeEventListener("scroll", o), t.__resizeTriggers__ = !t.removeChild(t.__resizeTriggers__))
			}
		}
	},
	584: function(t, e) {
		! function(t, e) {
			t((function() {
				const t = document.querySelector("body");
				e.isCustomizerPreview() && (t.classList.add("kubio-in-customizer"), window.wp.customize.bind("kubio-editor-preview-ready", (() => {
					t.classList.add("kubio-in-customizer--loaded")
				}))), window.navigator.userAgent.indexOf("Edge") > -1 && t.classList.add("kubio--edge")
			}))
		}(jQuery, Colibri)
	},
	585: function(t, e) {
		! function(t, e, i) {
			"use strict";
			let n;
			n = function(i, n) {
				let s, o, r, a, c, h, l;
				return h = 0, l = 0, r = 0, a = {}, c = [], o = 0, s = function(t, e) {
					for (r in this.options = {
							speed: 1,
							boost: 0
						}, e) this.options[r] = e[r];
					(this.options.speed < 0 || this.options.speed > 1) && (this.options.speed = 1), t || (t = "paraxify"), this.photos = t, a = this.options, c = [this.photos], this._init(this)
				}, s.prototype = {
					update() {
						for (l = e.innerHeight, r = 0; r < c.length;) c[r].style.backgroundPosition = "center center", c[r].url = e.getComputedStyle(c[r], !1).backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, "$2").split(",")[0], c[r].img || (c[r].img = new Image), c[r].url !== c[r].img.src && (this._check(r), c[r].img.src = c[r].url), r++;
						this._animate()
					},
					destroy() {
						e.removeEventListener("resize", this.onResizeFunction);
						const t = this._getScrollWrapper();
						t && t.removeEventListener("scroll", this.onScrollFunction)
					},
					_bindEventListenerFunctions() {
						this.onScrollFunction || (this.onScrollFunction = this._animate.bind(this)), this.onResizeFunction || (this.onResizeFunction = this.update.bind(this))
					},
					_init() {
						this._bindEventListenerFunctions(), this.update(), this.__initListener(), this._initPhotos()
					},
					__initListener() {
						e.addEventListener("resize", this.onResizeFunction);
						const t = this._getScrollWrapper();
						t && t.addEventListener("scroll", this.onScrollFunction, {
							passive: !0
						})
					},
					isInEditor: () => !!t.querySelector("body.block-editor-page"),
					_getScrollWrapper() {
						return this.isInEditor() ? t.querySelector(".edit-site-visual-editor") : e
					},
					_initPhotos() {
						for (let t = 0; t < c.length; t++) setTimeout((() => {
							this._initImageData(t)
						}), 0)
					},
					_initImage(t, i) {
						return "" === t.bgSize || "auto" === t.bgSize ? this.height < t.offsetHeight ? t.ok = !1 : (i = this.height, this.height < l && (i += (l - t.offsetHeight) * a.speed)) : "cover" === t.bgSize ? l < t.offsetHeight && (t.ok = !1) : (e.getComputedStyle(t, !1).backgroundSize, this._check(r)), t.diff = -(i - t.offsetHeight) * a.speed, t.diff = t.diff - t.offsetHeight * a.boost, {
							main: t,
							actualHeight: i
						}
					},
					_initImageData(t) {
						let i, n;
						n = c[t];
						const s = this;
						if (n.ok = !0, n.bgSize = e.getComputedStyle(n, !1).backgroundSize, i = l, c[t].img.complete) {
							const t = this._initImage(n, i);
							n = t.main, i = t.actualHeight, s.onScrollFunction()
						}
						c[t].img.onload = () => {
							const t = this._initImage(n, i);
							n = t.main, i = t.actualHeight, s.onScrollFunction()
						}
					},
					_check(t) {
						let i, n;
						n = c[t], n.ok = !0, n.bgSize = e.getComputedStyle(n, !1).backgroundSize, i = l, c[t].img.onload = () => {
							const t = this._initImage(n, i);
							n = t.main, i = t.actualHeight
						}
					},
					_visible(t) {
						const e = this._getOffsetTop(c[t]);
						return h + l > e && h < e + c[t].offsetHeight
					},
					_getOffsetTop: t => e.pageYOffset + t.getBoundingClientRect().top,
					_animate() {
						let i, n;
						for (h = void 0 !== e.pageYOffset ? e.pageYOffset : (t.documentElement || t.body.parentNode || t.body).scrollTop, r = 0; r < c.length;) this._check(r), c[r].ok && "fixed" === e.getComputedStyle(c[r], !1).backgroundAttachment && this._visible(r) && c[r].diff ? (i = (h - this._getOffsetTop(c[r]) + l) / (c[r].offsetHeight + l), n = c[r].diff * (i - .5), "cover" !== c[r].bgSize && (n += (l - c[r].img.height) / 2), n = Math.round(100 * n) / 100, n = `${n}px`) : n = "center", c[r].style.backgroundPosition = "center " + n, r++
					}
				}, new s(i, n)
			}, e.paraxify = n
		}(document, window)
	},
	586: function(t, e) {
		! function(t, e) {
			const i = "link",
				n = function() {
					this.namespace = i, this.defaults = {
						href: "",
						target: "_self"
					}, e.apply(this, arguments), this.start()
				};
			n.prototype = {
				start() {
					const t = this;
					if (t.opts.href && !t.opts["data-fancybox"]) {
						t.$element.addClass("h-cursor-pointer");
						let e = "mousedown";
						t.$element.hasClass("swiper-slide") && (e = "click"), t.$element.on(e, (function(e) {
							const i = t.opts.target ? t.opts.target : "_self";
							0 === e.button ? window.open(t.opts.href, i) : 1 === e.button && window.open(t.opts.href, "_blank")
						}))
					}
				},
				inside() {},
				outside() {}
			}, n.inherits(e), e[i] = n, e.Plugin.create(i), e.Plugin.autoload(i)
		}(jQuery, Colibri)
	},
	587: function(t, e) {},
	588: function(t, e) {
		const i = t => {
				const {
					target: e
				} = t;
				e.removeEventListener("animationend", i), setTimeout((() => {
					e.classList.add("kubio-aos-hide-animation")
				}), 50)
			},
			n = t => {
				const e = new window.IntersectionObserver((t => {
					t.forEach((t => {
						const {
							target: n,
							isIntersecting: s
						} = t, o = n.getAttribute("data-kubio-aos") || "none";
						if (!s || "none" === o || n.getAttribute("data-kubio-aos-executed")) return;
						if (n.closest(".editor-styles-wrapper")) return void e.disconnect();
						n.setAttribute("data-kubio-aos-executed", !0), n.addEventListener("animationend", i), n.classList.add("force-hide");
						const r = Math.max(0, (t => {
							const {
								getComputedStyle: e
							} = t.ownerDocument.defaultView, i = e(t).animationDelay;
							return i.includes("ms") ? parseInt(i.replace("ms", "")) || 0 : i.includes("s") ? 1e3 * parseFloat(i.replace("s", "")) || 0 : isNaN(parseFloat(i)) ? 0 : parseFloat(i)
						})(n));
						setTimeout((() => {
							n.classList.remove("force-hide")
						}), r), setTimeout((() => {
							n.classList.add("animated", o)
						}), 50), e.disconnect()
					}))
				}), {
					threshold: .1
				});
				e.observe(t)
			};
		var s;
		s = () => [...document.querySelectorAll("[data-kubio-aos]")].forEach(n), "loading" !== document.readyState ? s() : document.addEventListener ? document.addEventListener("DOMContentLoaded", s) : document.attachEvent("onreadystatechange", (function() {
			"complete" === document.readyState && s()
		}))
	},
	589: function(t, e) {
		var i;
		i = jQuery, Colibri, i((function() {
			const t = i(".kubio-language-switcher__flags"),
				e = t.find("li a");
			if (0 === t.length) return;
			const n = i.throttle((e => {
				t.hasClass("hover") ? e.stopImmediatePropagation() : (e.preventDefault(), e.stopImmediatePropagation(), t.addClass("hover"))
			}), 500);
			i(window).on("tap", (() => {
				t.hasClass("hover") && t.removeClass("hover")
			})), e.on("tap", n)
		}))
	},
	590: function(t, e) {
		! function(t) {
			function e() {
				var t, e;
				return window.isKubioBlockEditor || (null === (t = top) || void 0 === t || null === (e = t.wp) || void 0 === e ? void 0 : e.blockEditor)
			}
			"#page-top" === window.location.hash && o("", 5);
			const i = {
				items: {},
				eachCategory(t) {
					for (const e in this.items) this.items.hasOwnProperty(e) && t(this.items[e])
				},
				addItem(t, e) {
					this.items[t] || (this.items[t] = []), this.items[t].push(e)
				},
				all() {
					let t = [];
					for (const e in this.items) this.items.hasOwnProperty(e) && (t = t.concat(this.items[e]));
					return t
				}
			};
			let n = !1;

			function s(e) {
				const i = isNaN(parseFloat(e.options.offset)) ? e.options.offset.call(e.target) : e.options.offset;
				return e.target.offset().top - i - t("body").offset().top
			}

			function o(t, e) {
				t === location.hash.replace("#", "") || "page-top" === t && "" === location.hash.replace("#", "") || setTimeout((function() {
					t = t ? "page-top" === t ? " " : "#" + t : " ", history && history.replaceState && history.replaceState({}, "", t)
				}), e || 100)
			}

			function r(e) {
				if (n) return;
				n = !0;
				const i = s(e);
				t("html, body").animate({
					scrollTop: i
				}, {
					easing: "linear",
					complete() {
						const i = s(e);
						t("html, body").animate({
							scrollTop: i
						}, {
							easing: "linear",
							duration: 100,
							complete() {
								n = !1, o(e.id, 5)
							}
						})
					}
				})
			}

			function a(e) {
				let i = (e.attr("href") || "").split("#").pop(),
					n = function(t) {
						const e = jQuery(t)[0].href || "";
						let i = "#";
						try {
							const t = new window.URL(e);
							i = [t.protocol, "//", t.host, t.pathname].join("")
						} catch (t) {
							i = function(t) {
								return t.split("?")[0].split("#")[0]
							}(e)
						}
						return i
					}(e),
					s = null,
					o = [location.protocol, "//", location.host, location.pathname].join("");
				if (n.length && n !== o) return s;
				if (i.trim().length) try {
					s = t('[id="' + i + '"]')
				} catch (t) {}
				return s && s.length ? s : null
			}

			function c() {
				i.eachCategory((function(t) {
					const e = t.sort((function(t, e) {
							return t.target.offset().top - e.target.offset().top
						})),
						i = e.filter((function(t) {
							const e = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
							return t.target.offset().top <= e + .5 * window.innerHeight
						})).pop();
					e.forEach((function(t) {
						i && t.element.is(i.element) ? (o(t.id, 5), t.options.onChange.call(t.element)) : t.options.onLeave.call(t.element)
					}))
				}))
			}

			function h() {
				const e = window.location.hash.replace("#", ""),
					n = i.all().filter((function(t) {
						return t.targetSel === '[id="' + decodeURIComponent(e).trim() + '"]'
					}));
				"complete" !== document.readyState && "interactive" !== document.readyState && t(window).on("load", (function() {
					n.length && r(n[0]), c()
				}))
			}
			t.fn.smoothScrollAnchor = function(i) {
				if (e()) return;
				const n = t(this);
				i = jQuery.extend({
					offset() {
						const e = t(".h-navigation_sticky");
						return e.length ? e[0].getBoundingClientRect().height : 0
					}
				}, i), n.each((function() {
					const e = t(this);
					if (!i.target && ! function(t, e) {
							let {
								compareQuery: i = !1,
								compareHash: n = !1
							} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
							if (!t || !e) return !0;
							let s = null,
								o = null;
							try {
								s = new URL(t), o = new URL(e)
							} catch (t) {
								return !1
							}
							let r = s.origin === o.origin && s.pathname === o.pathname;
							return i && (r = r && s.search === o.search), n && (r = r && s.hash === o.hash), r
						}(document.location.href, this.href)) return;
					const n = i.target || a(e);
					if (n && n.length && !n.attr("skip-smooth-scroll")) {
						const s = n.attr("id");
						let o = null;
						s && (o = '[id="' + s.trim() + '"]');
						const a = {
							element: e,
							options: i,
							target: n,
							targetSel: i.targetSel || o,
							id: (n.attr("id") || "").trim()
						};
						e.off("click.smooth-scroll tap.smooth-scroll").on("click.smooth-scroll tap.smooth-scroll", (function(e) {
							t(this).data("skip-smooth-scroll") || t(e.target).data("skip-smooth-scroll") || (e.preventDefault(), t(this).data("allow-propagation") || e.stopPropagation(), r(a), a.options.clickCallback && a.options.clickCallback.call(this, e))
						}))
					}
				}))
			}, t.fn.kubioScrollSpy = function(n) {
				if (e()) return;
				const s = t(this),
					o = "spy-" + parseInt(Date.now() * Math.random());
				s.each((function() {
					const e = t(this),
						s = jQuery.extend({
							onChange() {},
							onLeave() {},
							clickCallback() {},
							smoothScrollAnchor: !1,
							offset: 0
						}, n);
					if (e.is("a") && -1 !== (e.attr("href") || "").indexOf("#") && (e.attr("href") || "").replace("#", "").length) {
						const t = a(e);
						if (t && !t.attr("skip-scroll-spy")) {
							const r = {
								element: e,
								options: s,
								target: t,
								targetSel: '[id="' + t.attr("id").trim() + '"]',
								id: t.attr("id").trim()
							};
							i.addItem(o, r), e.data("scrollSpy", r), n.smoothScrollAnchor && e.smoothScrollAnchor(n)
						}
					}
				}))
			}, e() || (window.addEventListener("scroll", c, {
				passive: !0
			}), t(window).on("smoothscroll.update", c), t(window).on("smoothscroll.update", h), t(h))
		}(jQuery)
	},
	591: function(t, e) {
		! function(t, e) {
			const i = "masonry",
				n = function(n, s) {
					this.namespace = i, this.defaults = {}, e.apply(this, arguments), this.addResizeObserver(), this.bindedRestart = t.debounce(this.restart.bind(this), 50), this.showMasonry() && this.start()
				};

			function s(t, e) {
				if (t[0].hasAttribute(e) && "true" !== t.attr(e)) return !0
			}
			n.prototype = {
				start() {
					this.stop();
					let e = this.$element;
					this.$element.parent().length || this.stop(), this.settings.targetSelector && (e = this.$element.find(this.settings.targetSelector).first()), this.$masonry = e, this.$masonry.masonry && (this.$masonry.masonry({
						itemSelector: this.settings.itemSelector,
						columnWidth: this.settings.columnWidth,
						percentPosition: !0
					}), this.addEventListeners(), function() {
						const i = e.find("img");
						let n = 0,
							s = 0;

						function o() {
							if (n++, i.length === n) try {
								e.data().masonry.layout()
							} catch (t) {
								console.error(t)
							}
						}
						i.each((function() {
							this.complete ? (s++, o()) : (t(this).on("load", o), t(this).on("error", o))
						})), i.length !== s && "complete" === document.readyState && setTimeout((function() {
							e.data().masonry.layout()
						}), 10), t((function() {
							e.data().masonry.layout()
						}))
					}())
				},
				showMasonry() {
					return !s(this.$element, "data-show-masonry") && !s(this.$element, "show-masonry") && this.settings.enabled
				},
				stop() {
					this.removeEventListeners();
					try {
						this.$masonry.data().masonry && this.$masonry.masonry("destroy")
					} catch (t) {}
				},
				restart() {
					this.stop(), this.start()
				},
				addEventListeners() {
					this.addResizeListener(), this.$element.on("colibriContainerOpened", this.bindedRestart)
				},
				removeEventListeners() {
					this.removeResizeListener(), this.$element.off("colibriContainerOpened", this.bindedRestart)
				},
				addResizeListener() {
					this.resizeCount = 0;
					try {
						this.resizeObserver.observe(this.$masonry.children().get(0))
					} catch (t) {}
				},
				removeResizeListener() {
					var t;
					null == this || null === (t = this.resizeObserver) || void 0 === t || t.disconnect()
				},
				addResizeObserver() {
					const t = this;
					this.resizeObserver = new ResizeObserver((e => {
						0 !== t.resizeCount ? t.restart() : t.resizeCount++
					}))
				},
				loadImages() {}
			}, n.inherits(e), e[i] = n, e.Plugin.create(i), e.Plugin.autoload(i)
		}(jQuery, Colibri)
	},
	650: function(t, e, i) {
		"use strict";
		i.r(e), i(582);
		const n = function() {
			const t = jQuery;
			if ("undefined" == typeof jQuery) throw new Error("Colibri requires jQuery");
			let e;
			! function() {
				const e = t.fn.jquery.split(".");
				if (1 === e[0] && e[1] < 8) throw new Error("Colibri requires at least jQuery v1.8")
			}();
			const i = "kubio",
				n = i + ".",
				s = i + "-settings";
			var o;
			return Function.prototype.inherits = function(t) {
					const e = function() {};
					e.prototype = t.prototype;
					const i = new e;
					for (const t in this.prototype) i[t] = this.prototype[t];
					this.prototype = i, this.prototype.super = t.prototype
				}, e = function(e, i) {
					i = "object" == typeof i ? i : {}, this.$element = t(e);
					const o = this.$element.data();
					this.settings = this.$element.data(s) || {}, this.opts = t.extend(!0, {}, this.defaults, t.fn[n + this.namespace].options, o, this.settings, i), this.$target = "string" == typeof this.opts.target ? t(this.opts.target) : null
				}, e.getScrollingElement = function() {
					let t = window;
					return this.isBlockEditor() && top === window && (t = document.querySelector(".interface-interface-skeleton__content")), t
				}, e.isCustomizerPreview = function() {
					return !!window.colibriCustomizerPreviewData
				}, e.isBlockEditor = function() {
					var t, e;
					return !(null === (t = top) || void 0 === t || null === (e = t.wp) || void 0 === e || !e.blockEditor)
				}, e.prototype = {
					updateOpts(e) {
						const i = this.$element.attr("data-" + s);
						i && (this.settings = JSON.parse(i));
						const n = t.extend(!0, {}, this.defaults, this.settings),
							o = e || {};
						this.opts = t.extend(!0, this.opts, n, o)
					},
					getInstance() {
						return this.$element.data("fn." + this.namespace)
					},
					hasTarget() {
						return !(null === this.$target)
					},
					callback(e) {
						let i = [].slice.call(arguments).splice(1);
						return this.$element && (i = this._fireCallback(t._data(this.$element[0], "events"), e, this.namespace, i)), this.$target && (i = this._fireCallback(t._data(this.$target[0], "events"), e, this.namespace, i)), this.opts && this.opts.callbacks && "function" == typeof this.opts.callbacks[e] ? this.opts.callbacks[e].apply(this, i) : i
					},
					_fireCallback(t, e, i, n) {
						let s;
						if (t && void 0 !== t[e]) {
							const o = t[e].length;
							for (let r = 0; r < o; r++) t[e][r].namespace === i && (s = t[e][r].handler.apply(this, n))
						}
						return void 0 === s ? n : s
					}
				}, (o = e).Plugin = {
					create(e, i) {
						return i = void 0 === i ? e.toLowerCase() : i, i = n + i, t.fn[i] = function(n, s) {
							const r = Array.prototype.slice.call(arguments, 1),
								a = "fn." + i,
								c = [];
							return this.each((function() {
								const i = t(this);
								let h = i.data(a);
								if (s = "object" == typeof n ? n : s, h || (i.data(a, {}), h = new o[e](this, s), i.data(a, h)), "string" == typeof n)
									if (t.isFunction(h[n])) {
										const t = h[n].apply(h, r);
										void 0 !== t && c.push(t)
									} else t.error('No such method "' + n + '" for ' + e)
							})), 0 === c.length || 1 === c.length ? 0 === c.length ? this : c[0] : c
						}, t.fn[i].options = {}, this
					},
					autoload(t) {
						const e = t.split(","),
							i = e.length;
						for (let t = 0; t < i; t++) {
							const i = e[t].toLowerCase().split(",").map((function(t) {
								return n + t.trim()
							})).join(",");
							this.autoloadQueue.push(i)
						}
						return this
					},
					autoloadQueue: [],
					startAutoload() {
						if (!window.MutationObserver || 0 === this.autoloadQueue.length) return;
						this.observer && this.observer.disconnect();
						const t = this,
							e = new MutationObserver((function(e) {
								e.forEach((function(e) {
									const i = e.addedNodes;
									0 === i.length || 1 === i.length && 3 === i[0].nodeType || t.startAutoloadOnceDebounced()
								}))
							}));
						this.observer = e;
						let i = document.querySelector(".editor-styles-wrapper .is-root-container.block-editor-block-list__layout");
						i || (i = document), e.observe(i, {
							subtree: !0,
							childList: !0
						})
					},
					startAutoloadOnceDebounced: function(t) {
						var e = this;
						let i, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 300;
						return function() {
							for (var s = arguments.length, o = new Array(s), r = 0; r < s; r++) o[r] = arguments[r];
							clearTimeout(i), i = setTimeout((() => {
								t.apply(e, o)
							}), n)
						}
					}((() => {
						e.Plugin.startAutoloadOnce()
					}), 300),
					startAutoloadOnce() {
						const e = this,
							s = i + "-component";
						t("[data-" + s + "]:not([data-loaded]):not([data-disabled])").each((function() {
							const i = t(this),
								o = n + i.data(s);
							if (-1 !== e.autoloadQueue.indexOf(o)) {
								i.attr("data-loaded", !0);
								try {
									i[o]()
								} catch (t) {
									console.error(t)
								}
							}
						}))
					},
					stopWatcher() {
						var t, e;
						null === (t = this.observer) || void 0 === t || null === (e = t.disconnect) || void 0 === e || e.call(t)
					},
					watch() {
						o.Plugin.startAutoloadOnce(), o.Plugin.startAutoload()
					},
					init() {
						window.isKubioBlockEditor && !window.isInsideIframe || (t.isReady ? o.Plugin.watch() : t(document).ready(o.Plugin.watch))
					}
				}, o.Plugin.init(),
				function(e) {
					e.Animation = function(t, i, n) {
						this.namespace = "animation", this.defaults = {}, e.apply(this, arguments), this.effect = i, this.completeCallback = void 0 !== n && n, this.prefixes = ["", "-moz-", "-o-animation-", "-webkit-"], this.queue = [], this.start()
					}, e.Animation.prototype = {
						start() {
							this.isSlideEffect() && this.setElementHeight(), this.addToQueue(), this.clean(), this.animate()
						},
						addToQueue() {
							this.queue.push(this.effect)
						},
						setElementHeight() {
							this.$element.height(this.$element.outerHeight())
						},
						removeElementHeight() {
							this.$element.css("height", "")
						},
						isSlideEffect() {
							return "slideDown" === this.effect || "slideUp" === this.effect
						},
						isHideableEffect() {
							return -1 !== t.inArray(this.effect, ["fadeOut", "slideUp", "flipOut", "zoomOut", "slideOutUp", "slideOutRight", "slideOutLeft"])
						},
						isToggleEffect() {
							return "show" === this.effect || "hide" === this.effect
						},
						storeHideClasses() {
							this.$element.hasClass("hide-sm") ? this.$element.data("hide-sm-class", !0) : this.$element.hasClass("hide-md") && this.$element.data("hide-md-class", !0)
						},
						revertHideClasses() {
							this.$element.data("hide-sm-class") ? this.$element.addClass("hide-sm").removeData("hide-sm-class") : this.$element.data("hide-md-class") ? this.$element.addClass("hide-md").removeData("hide-md-class") : this.$element.addClass("hide")
						},
						removeHideClass() {
							this.$element.data("hide-sm-class") ? this.$element.removeClass("hide-sm") : this.$element.data("hide-md-class") ? this.$element.removeClass("hide-md") : (this.$element.removeClass("hide"), this.$element.removeClass("force-hide"))
						},
						animate() {
							if (this.storeHideClasses(), this.isToggleEffect()) return this.makeSimpleEffects();
							this.$element.addClass("kubio-animated"), this.$element.addClass(this.queue[0]), this.removeHideClass();
							const e = this.queue.length > 1 ? null : this.completeCallback;
							this.complete("AnimationEnd", t.proxy(this.makeComplete, this), e)
						},
						makeSimpleEffects() {
							"show" === this.effect ? this.removeHideClass() : "hide" === this.effect && this.revertHideClasses(), "function" == typeof this.completeCallback && this.completeCallback(this)
						},
						makeComplete() {
							this.$element.hasClass(this.queue[0]) && (this.clean(), this.queue.shift(), this.queue.length && this.animate())
						},
						complete(e, i, n) {
							const s = e.split(" ").map((function(t) {
								return t.toLowerCase() + " webkit" + t + " o" + t + " MS" + t
							}));
							this.$element.one(s.join(" "), t.proxy((function() {
								"function" == typeof i && i(), this.isHideableEffect() && this.revertHideClasses(), this.isSlideEffect() && this.removeElementHeight(), "function" == typeof n && n(this), this.$element.off(s.join(" "))
							}), this))
						},
						clean() {
							this.$element.removeClass("kubio-animated").removeClass(this.queue[0])
						}
					}, e.Animation.inherits(e)
				}(e),
				function() {
					const i = n + "animation";
					t.fn[i] = function(i, n) {
						const s = "fn.animation";
						return this.each((function() {
							const o = t(this);
							o.data(s, {}), o.data(s, new e.Animation(this, i, n))
						}))
					}, t.fn[i].options = {}, e.animate = function(t, e, n) {
						return t[i](e, n), t
					}
				}(),
				function(e) {
					e.Detect = function() {}, e.Detect.prototype = {
						isMobile: () => /(iPhone|iPod|BlackBerry|Android)/.test(navigator.userAgent),
						isDesktop: () => !/(iPhone|iPod|iPad|BlackBerry|Android)/.test(navigator.userAgent),
						isMobileScreen: () => t(window).width() <= 768,
						isTabletScreen: () => t(window).width() >= 768 && t(window).width() <= 1024,
						isDesktopScreen: () => t(window).width() > 1024
					}
				}(e),
				function(e) {
					e.Utils = function() {}, e.Utils.prototype = {
						disableBodyScroll() {
							const e = t("html");
							let i = window.innerWidth;
							if (!i) {
								const t = document.documentElement.getBoundingClientRect();
								i = t.right - Math.abs(t.left)
							}
							const n = document.body.clientWidth < i,
								s = this.measureScrollbar();
							e.css("overflow", "hidden"), n && e.css("padding-right", s)
						},
						measureScrollbar() {
							const e = t("body"),
								i = document.createElement("div");
							i.className = "scrollbar-measure", e.append(i);
							const n = i.offsetWidth - i.clientWidth;
							return e[0].removeChild(i), n
						},
						enableBodyScroll() {
							t("html").css({
								overflow: "",
								"padding-right": ""
							})
						}
					}
				}(e), e
		}();
		window.Colibri = n;
		var s, o = n,
			r = i(268),
			a = i.n(r);
		(s = window.jQuery).throttle || (s.throttle = function(t, e, i) {
			let n, s;
			return e || (e = 250),
				function() {
					const o = i || this,
						r = +new Date,
						a = arguments;
					n && r < n + e ? (clearTimeout(s), s = setTimeout((function() {
						n = r, t.apply(o, a)
					}), e)) : (n = r, t.apply(o, a))
				}
		}), s.debounce || (s.debounce = a.a), s.event.special.tap || (s.event.special.tap = {
			setup(t, e) {
				s(this).on("touchstart", s.event.special.tap.handler).on("touchmove", s.event.special.tap.handler).on("touchend", s.event.special.tap.handler)
			},
			teardown(t) {
				s(this).off("touchstart", s.event.special.tap.handler).off("touchmove", s.event.special.tap.handler).off("touchend", s.event.special.tap.handler)
			},
			handler(t) {
				const e = s(this);
				e.data(t.type, 1), "touchend" !== t.type || e.data("touchmove") ? e.data("touchend") && e.removeData("touchstart touchmove touchend") : (t.type = "tap", s.event.dispatch.call(this, t))
			}
		}), s.fn.respondToVisibility || (s.fn.respondToVisibility = function(t) {
			if (!("IntersectionObserver" in window) || !("IntersectionObserverEntry" in window) || !("intersectionRatio" in window.IntersectionObserverEntry.prototype)) return null;
			const e = new IntersectionObserver(((e, i) => {
				e.forEach((e => {
					t(e.intersectionRatio > 0)
				}))
			}));
			return e.observe(this.get(0)), e
		}), i(583), i(584);
		class c {
			constructor(t, e) {
				this.settings = e, this.element = t, this.isPlaying = !1, this.ready()
			}
			ready() {}
			play() {}
			pause() {}
			isPaused() {}
			setVideo(t) {
				t.className = "kubio-video-background-item", this.element.innerHTML = "", this.element.appendChild(t), this.addResizeBind()
			}
			static test() {
				return !1
			}
			trigger(t) {
				let e;
				"function" == typeof window.Event ? e = new Event(t) : (e = document.createEvent("Event"), e.initEvent(t, !0, !0)), this.element.dispatchEvent(e)
			}
			loaded() {
				this.trigger("video-bg-loaded")
			}
			addResizeBind() {
				this.trigger("video-bg-resize"), this.onResize((() => {
					this.trigger("video-bg-resize")
				}))
			}
			onLoad(t) {
				jQuery(this.element).on("video-bg-loaded", t)
			}
			onResize(t) {
				let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
				t = jQuery.debounce(t, e), jQuery(window).resize(t), jQuery(window).on("orientationchange", t)
			}
		}
		const h = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|&v(?:i)?=))([^#&?]*).*/;
		var l = {
			native: class extends c {
				constructor(t, e) {
					return super(t, e), this
				}
				static test(t) {
					return document.createElement("video").canPlayType(t.mimeType)
				}
				isPaused() {
					return this.video.paused
				}
				ready() {
					if (this.settings.poster && (this.element.style.backgroundImage = `url("${this.settings.poster}")`), !this.settings.videoUrl) return;
					const t = document.createElement("video");
					t.id = this.settings.id || "", t.loop = "loop", t.muted = "muted", t.autoplay = "autoplay", t.setAttribute("playsinline", !0), this.settings.width && (t.width = this.settings.width), this.settings.height && (t.height = this.settings.height), t.addEventListener("play", (() => {
						this.trigger("play")
					})), t.addEventListener("pause", (() => {
						this.trigger("pause")
					})), t.addEventListener("loadeddata", (() => {
						this.loaded()
					})), this.video = t, this.setVideo(t), t.src = this.settings.videoUrl
				}
				pause() {
					this.video.pause()
				}
				stopVideo() {
					this.video.pause(), this.video.currentTime = 0
				}
				play() {
					this.video.play()
				}
			},
			youtube: class extends c {
				constructor(t, e) {
					return super(t, e), this
				}
				static test(t) {
					return "video/x-youtube" === t.mimeType
				}
				ready() {
					if (this.settings.poster && (this.element.style.backgroundImage = `url("${this.settings.poster}")`), "YT" in window) window.YT.ready((() => {
						this.loadVideo()
					}));
					else {
						const t = document.createElement("script");
						t.src = "https://www.youtube.com/iframe_api", t.onload = () => {
							window.YT.ready((() => {
								this.loadVideo()
							}))
						}, document.getElementsByTagName("head")[0].appendChild(t)
					}
				}
				getVideoID() {
					const t = this.settings.videoUrl.match(h);
					return t && t.length >= 2 ? t[1] : null
				}
				getYTOptions() {
					const t = {
						videoId: this.getVideoID(),
						events: {
							onReady: t => {
								const e = t.target;
								e.mute(), top.yt1 = e, e.setPlaybackQuality("auto"), this.play(), this.loaded()
							},
							onStateChange: t => {
								window.YT.PlayerState.PLAYING === t.data ? this.trigger("play") : window.YT.PlayerState.PAUSED === t.data ? this.trigger("pause") : window.YT.PlayerState.ENDED === t.data && t.target.playVideo()
							},
							onError: t => {
								this.player.getIframe().style.display = "none"
							}
						},
						playerVars: {
							autoplay: 1,
							controls: 0,
							disablekb: 1,
							fs: 0,
							iv_load_policy: 3,
							loop: 1,
							modestbranding: 1,
							playsinline: 1,
							rel: 0,
							showinfo: 0,
							mute: 1
						}
					};
					return this.settings.height ? t.height = this.settings.height : t.height = 1080, this.settings.width ? t.width = this.settings.width : t.width = 1920, t
				}
				loadVideo() {
					const t = document.createElement("div");
					window.YT, this.setVideo(t), this.player = new window.YT.Player(t, this.getYTOptions())
				}
				updateVideoSize() {
					if (!this.player) return;
					const t = jQuery(this.player.getIframe()),
						e = this.calcVideosSize();
					t.css(e), t.addClass("ready")
				}
				calcVideosSize() {
					const t = jQuery(this.element).outerWidth(),
						e = jQuery(this.element).outerHeight(),
						i = "16:9".split(":"),
						n = i[0] / i[1],
						s = t / e > n;
					return {
						width: 1 * (s ? t : e * n),
						height: 1 * (s ? t / n : e)
					}
				}
				play() {
					this.player && this.player.playVideo && (this.isPlaying || (this.isPlaying = !0, this.player.playVideo()))
				}
				stopVideo() {
					this.player && this.player.stopVideo && this.isPlaying && (this.isPlaying = !1, this.player.stopVideo())
				}
				pause() {
					this.player && this.player.pauseVideo && !this.isPlaying && (this.isPlaying = !1, this.player.pauseVideo())
				}
				isPaused() {
					return YT.PlayerState.PAUSED === this.player.getPlayerState()
				}
				loaded() {
					this.updateVideoSize(), super.loaded()
				}
				addResizeBind() {
					this.onResize((() => this.updateVideoSize()), 50), super.addResizeBind()
				}
			}
		};
		class d {
			static componentName() {
				throw new TypeError("name getter should be implemented")
			}
			constructor(t, e) {
				return this.$ = jQuery, this.namespace = this.constructor.componentName(), this.utils = new o.Utils, this.detect = new o.Detect, this.init(), o.apply(this, arguments), this.start(), this.isCustomizerPreview() && this.wpCustomize(wp.customize), this
			}
			init() {}
			isCustomizerPreview() {
				return o.isCustomizerPreview()
			}
			wpCustomize(t) {}
			wpSettingBind(t, e) {
				window.wp.customize(t, (function(t) {
					t.bind(e)
				}))
			}
			updateData(t) {
				this.opts = jQuery.extend({}, this.opts, t), this.restart()
			}
			restart() {}
			start() {}
		}
		o.registerPlugin = function(t, e, i) {
				"function" == typeof t.componentName && (i = e, t = (e = t).componentName()), o[t] = e, o.Plugin.create(t), !1 !== i && o.Plugin.autoload(t)
			}, o.registerPlugin(class extends d {
				static componentName() {
					return "video-background"
				}
				init() {
					this.videoData = {}, this.handler = !1, this.debouncedSetPosition = jQuery.debounce(this.updateVideoBackground.bind(this), 100), this.resizeObserve = t => {
						this.debouncedSetPosition()
					}, this.resizeObserver = new window.ResizeObserver(this.resizeObserve)
				}
				generateVideo() {
					for (const t in l)
						if (l.hasOwnProperty(t) && l[t].test(this.videoData)) {
							this.$element.empty(), this.handler = new l[t](this.$element[0], this.videoData);
							break
						}
					this.handler && (this.handler.onLoad((() => {
						this.debouncedSetPosition(), this.handler.onResize((() => this.debouncedSetPosition())), this.resizeObserver.observe(this.handler.element)
					})), window.hop && (window.addResizeListener(this.$element.closest(".background-wrapper").parent()[0], this.debouncedSetPosition), this.debouncedSetPosition()))
				}
				stopVideo() {
					this.handler.stopVideo && this.handler.stopVideo()
				}
				play() {
					this.handler.play && this.handler.play()
				}
				updateVideoBackground() {
					this.handler.updateVideoSize && this.handler.updateVideoSize(), this.setPosition()
				}
				setPosition() {
					if (this.handler.pause(), "none" === this.$element.children("iframe,video").eq(0).css("display")) return;
					const t = this.$element.children("iframe,video").eq(0),
						e = t.is("iframe") ? 50 : this.opts.positionX,
						i = t.is("iframe") ? 50 : this.opts.positionY,
						n = Math.max(t.width() - this.$element.width(), 0) * parseFloat(e) / 100,
						s = Math.max(t.height() - this.$element.height(), 0) * parseFloat(i) / 100;
					t.css({
						transform: `translate(-${n}px,-${s}px)`,
						"-webkit-transform": `translate(-${n}px,-${s}px)`
					}), this.$element.addClass("visible"), setTimeout((() => {
						this.handler.play()
					}), 100)
				}
				start() {
					this.videoData = {
						mimeType: this.opts.mimeType,
						videoUrl: this.opts.video
					}, "string" == typeof this.opts.poster && (this.poster = this.opts.poster), this.generateVideo()
				}
				stop() {
					window.removeResizeListener(this.$element.closest(".background-wrapper").parent()[0], this.debouncedSetPosition)
				}
				restart() {
					this.stop(), this.start()
				}
			}), o.registerPlugin(class extends d {
				static componentName() {
					return "slideshow"
				}
				init() {
					this.currentIndex = 0, this.interval = -1, this.debouncedRestart = a()((() => {
						this.stop(), this.start()
					}), 500)
				}
				addImageEffect(t, e) {
					const i = this.opts.duration.replace("ms", ""),
						n = this.opts.speed.replace("ms", "");
					let s = parseInt(i) - parseInt(n);
					s < 0 && (s = 0), this.$(t).css({
						transition: `opacity ${n}ms ease ${s}ms`,
						zIndex: this.$images.length - e
					})
				}
				slideImage() {
					this.$images.eq(this.currentIndex).removeClass("current");
					const t = this.currentIndex + 1 === this.$images.length ? 0 : this.currentIndex + 1;
					this.$images.eq(t).addClass("current").removeClass("next"), this.currentIndex = t;
					const e = this.currentIndex + 1 === this.$images.length ? 0 : this.currentIndex + 1;
					this.$images.eq(e).addClass("next")
				}
				restart() {
					this.debouncedRestart()
				}
				start() {
					this.$images = this.$element.find(".slideshow-image"), this.$images.removeClass("current"), this.$images.length <= 1 || (this.$images.eq(0).addClass("current"), this.currentIndex = 0, this.$images.each(((t, e) => {
						this.addImageEffect(e, t)
					})), this.interval = setInterval((() => {
						this.slideImage()
					}), parseInt(this.opts.duration)))
				}
				stop() {
					clearInterval(this.interval), this.$images.css({
						transition: "",
						opacity: ""
					}), this.$images.removeClass("current next"), this.$images.eq(0).addClass("current"), this.currentIndex = 0
				}
			}), i(585),
			function(t, e) {
				const i = "parallax",
					n = function(t, n) {
						this.namespace = i, this.defaults = {}, e.apply(this, arguments), this.start()
					};
				n.prototype = {
					start() {
						if (this.isEnabled = this.opts.enabled, !this.isEnabled) return void this.stop();
						if (this.isiOS()) return void this.$element.addClass("paraxify--ios");
						this.$element[0] && (this.paraxify = paraxify(this.$element[0]));
						const e = this;
						this.firstRestart = !1, this.restartScriptDebounce = t.debounce((function() {
							!1 !== e.firstRestart ? e.restart() : e.firstRestart = !0
						}), 100), this._addEventListeners()
					},
					stop() {
						this._removeEventListener(), this.paraxify && (this.paraxify.destroy(), this.paraxify = null)
					},
					isiOS: () => (/iPad|iPhone|iPod/.test(navigator.platform) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1) && !window.MSStream,
					restart() {
						this.stop(), this.start()
					},
					_addEventListeners() {
						window.addResizeListener(this.$element[0], this.restartScriptDebounce)
					},
					_removeEventListener() {
						window.removeResizeListener(this.$element[0], this.restartScriptDebounce)
					}
				}, n.inherits(e), e[i] = n, e.Plugin.create(i), e.Plugin.autoload(i)
			}(jQuery, Colibri), i(586), i(587), i(588), i(589), i(590), i(591)
	}
});