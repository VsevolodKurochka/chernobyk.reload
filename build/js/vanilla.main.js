'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
	function log(content) {
		console.log(content);
	}

	var hasClass = function hasClass(element, cls) {
		return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
	};

	function addClass(element, cls) {
		if (!hasClass(element, cls)) {
			var empty = '';
			if (element.classList.value != "") empty = ' ';
			element.className += empty + cls;
		}
	}

	function removeClass(element, cls) {
		if (hasClass(element, cls)) element.classList.remove(cls);
	}

	function toggleClass(element, cls) {
		hasClass(element, cls) ? removeClass(element, cls) : addClass(element, cls);
	}

	var exists = function exists(element) {
		return typeof element != 'undefined' && element != null;
	};

	var Modal = function () {
		function Modal() {
			var _this = this;

			_classCallCheck(this, Modal);

			// Prefix for modal class
			this.prefix = '';

			// Name of modal class
			this.name = this.prefix + 'modal';

			// All modals
			this.modals = document.querySelectorAll('.' + this.name);

			// Open Buttons
			this.openButtons = document.querySelectorAll('[data-action="' + this.name + '"]');

			// Close Button(`x`)
			this.closeButtons = document.querySelectorAll('[data-close="' + this.name + '"]');

			for (var i = 0; i < this.openButtons.length; i++) {
				this.openButtons[i].addEventListener('click', function (e) {
					_this._showButtonClick(e);
				});
			}

			for (var _i = 0; _i < this.closeButtons.length; _i++) {
				this.closeButtons[_i].addEventListener('click', function (e) {
					_this._closeButtonClick(e);
				});
			}

			document.body.addEventListener('click', function (e) {
				_this._bodyClick(e);
			});
		}

		_createClass(Modal, [{
			key: 'modalClose',
			value: function modalClose(el) {
				removeClass(el, this.name + '_showing_in');
				removeClass(document.body, this.name + '-open');
			}
		}, {
			key: 'modalOpen',
			value: function modalOpen(el) {
				addClass(document.body, this.name + '-open');
				addClass(el, this.name + '_showing_in');
			}
		}, {
			key: '_showButtonClick',
			value: function _showButtonClick(e) {
				// Get button data-attributes
				var modalData = e.target.dataset;

				// Get attribute data-open and replace # with empty line
				var modalID = modalData.open.replace("#", "");

				if (exists(document.getElementById(modalID))) {

					var modalCurrent = document.getElementById(modalID);

					this.modalOpen(modalCurrent);

					if (modalData.video != undefined) {

						if (exists(modalCurrent.getElementsByClassName('modal__video')[0])) {

							this._removeIframe(modalCurrent);

							var videoIframe = document.createElement('iframe');

							addClass(videoIframe, 'modal__video-iframe');

							var videoSRC = modalData.video;
							videoIframe.setAttribute('src', videoSRC);
							videoIframe.setAttribute('allow', 'autoplay; encrypted-media');
							videoIframe.setAttribute('allowfullscreen', 'allowfullscreen');

							videoWrapper.appendChild(videoIframe);
						}
					}
				} else {
					console.error('No element with ID: ' + modalID);
				}
			}
		}, {
			key: '_removeIframe',
			value: function _removeIframe(element) {
				if (exists(element.getElementsByClassName('modal__video')[0])) {
					var _videoWrapper = element.getElementsByClassName('modal__video')[0];
					_videoWrapper.innerHTML = '';
				}
			}
		}, {
			key: '_closeButtonClick',
			value: function _closeButtonClick(e) {

				var modalCurrent = e.target.closest('.' + this.name);
				this.modalClose(modalCurrent);

				this._removeIframe(modalCurrent);
			}
		}, {
			key: '_getEventTarget',
			value: function _getEventTarget(e) {
				var targ;

				if (e.target) {
					// W3C
					targ = e.target;
				} else if (e.srcElement) {
					// IE6-8
					targ = e.srcElement;
				} else if (e.originalTarget) {
					targ = e.originalTarget;
				}
				if (targ.nodeType == 3) {
					// Safari
					targ = targ.parentNode;
				}
				return targ;
			}
		}, {
			key: '_bodyClick',
			value: function _bodyClick(e) {
				var target = this._getEventTarget(e);

				//log(target);
				for (var i = 0; i < this.modals.length; i++) {

					var targetModal = this.modals[i];

					if (target == targetModal) {
						this.modalClose(targetModal);
						this._removeIframe(targetModal);
					}
				}
			}
		}]);

		return Modal;
	}();

	document.addEventListener("DOMContentLoaded", function () {

		new Modal();
		//new Navigation();

		var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

		if (iOS) {
			document.body.style.cursor = 'pointer';
		}
	});
})();