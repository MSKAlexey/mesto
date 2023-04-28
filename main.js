(()=>{"use strict";var t=document.querySelector(".profile__popup-open"),e=document.querySelector(".profile__vector"),n=document.querySelector(".profile__pencil"),r=document.forms.edit,o=document.forms.avatar,i=document.forms.add,u=document.querySelector(".popup__input_type_name"),a=document.querySelector(".popup__input_type_about");document.querySelector(".popup__button");const c={formSelector:".popup__form",inputSelector:".popup__input",errorClass:"popup__input_type_error",buttonSelector:".popup__button",buttonDisabledClass:"popup__button_disabled"};function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===s(o)?o:String(o)),r)}var o}var f=function(){function t(e,n,r,o,i,u){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._templateSelector=n,this._element=this._getTemplate(),this._handleOpenPopup=r,this._api=o,this._cardId=e._id,this._userId=i,this._ownerId=e.owner._id,this._likes=e.likes,this._cardsImage=this._element.querySelector(".cards__image"),this._cardsTitle=this._element.querySelector(".cards__title"),this._numberLikeClick=this._element.querySelector(".cards__count"),this._likeItem=this._element.querySelector(".cards__icon"),this._trashIcon=this._element.querySelector(".cards__trash"),this._createLike=u.createLike,this._deleteLike=u.deleteLike,this._handleDeleteCard=u.deleteCardForPage}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".cards__item").cloneNode(!0)}},{key:"_isLiked",value:function(){var t=this;return this._likes.some((function(e){return e._id===t._userId}))}},{key:"_toggleLikeButton",value:function(){this._isLiked()?this._likeItem.classList.add("cards__icon_active"):this._likeItem.classList.remove("cards__icon_active")}},{key:"removeElement",value:function(){this._element.remove()}},{key:"_handleLikeClick",value:function(){this._isLiked()?this._deleteLike(this._cardId):this._createLike(this._cardId)}},{key:"_hideButtomTrash",value:function(){this._userId!==this._ownerId&&(this._trashIcon.style.visibility="hidden")}},{key:"_setEventListeners",value:function(){var t=this;this._cardsImage.addEventListener("click",(function(){return t._handleOpenPopup(t._name,t._link)})),this._trashIcon.addEventListener("click",(function(){return t._handleDeleteCard()})),this._element.querySelector(".cards__icon").addEventListener("click",(function(){return t._handleLikeClick()}))}},{key:"generateCard",value:function(){return this._setEventListeners(),this._cardsImage.src=this._link,this._cardsImage.alt=this._name,this._cardsTitle.textContent=this._name,this._numberLikeClick.textContent=this._likes.length,this._toggleLikeButton(),this._hideButtomTrash(),this._element}},{key:"updateLikesView",value:function(t){this._likes=t.likes,this._numberLikeClick.textContent=this._likes.length,this._toggleLikeButton()}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}var h=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=e,this._cardsContainerSelector=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItem",value:function(t){this._cardsContainerSelector.append(this._renderer(t))}},{key:"addItem",value:function(t){this._cardsContainerSelector.prepend(this._renderer(t))}},{key:"addCards",value:function(t){var e=this;t.forEach((function(t){e.renderItem(t)}))}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,b(r.key),r)}}function b(t){var e=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===d(e)?e:String(e)}var v=function(){function t(e){var n,r,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=function(t){"Escape"===t.key&&i.close()},(r=b(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popup=document.querySelector(e)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__close"))&&t.close()}))}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==_(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===_(o)?o:String(o)),r)}var o}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=w(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},g.apply(this,arguments)}function k(t,e){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},k(t,e)}function w(t){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},w(t)}var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&k(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=w(r);if(o){var n=w(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===_(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._img=e._popup.querySelector(".popup__image"),e._imgName=e._popup.querySelector(".popup__name"),e}return e=u,(n=[{key:"open",value:function(t,e){g(w(u.prototype),"open",this).call(this),this._img.src=e,this._img.alt=e,this._imgName.textContent=t}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(v);function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=C(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},L.apply(this,arguments)}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}var I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=C(r);if(o){var n=C(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._form=n._popup.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__input"),n._submit=e,n._confirmationButton=n._popup.querySelector(".popup__button"),n}return e=u,(n=[{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"_getInputValues",value:function(){var t=this;return this._inputValue={},this._inputList.forEach((function(e){t._inputValue[e.name]=e.value})),this._inputValue}},{key:"setEventListeners",value:function(){var t=this;L(C(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault();var n=t._confirmationButton.textContent;t._confirmationButton.textContent="Сохранение...",t._submit(t._getInputValues()).then((function(){return t.close()})).finally((function(){t._confirmationButton.textContent=n}))}))}},{key:"close",value:function(){this._form.reset(),L(C(u.prototype),"close",this).call(this)}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(v);function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==T(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=x(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},q.apply(this,arguments)}function B(t,e){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},B(t,e)}function x(t){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},x(t)}var D=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&B(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=x(r);if(o){var n=x(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===T(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._confirmationButton=e._popup.querySelector(".popup__button"),e}return e=u,(n=[{key:"setEventListeners",value:function(){var t=this;q(x(u.prototype),"setEventListeners",this).call(this),this._confirmationButton.addEventListener("click",(function(e){e.preventDefault(),t._handleSubmit()}))}},{key:"setSubmit",value:function(t){this._handleSubmit=t}},{key:"renderLoading",value:function(t){this._confirmationButton.textContent=t?"Удаление...":"Да"}}])&&R(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(v);function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==A(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===A(o)?o:String(o)),r)}var o}var V=function(){function t(e){var n=e.name,r=e.about,o=e.avatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(n),this._about=document.querySelector(r),this._avatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(t){this._name.textContent=t.name,this._about.textContent=t.about,this._avatar.src=t.avatar}},{key:"setUserAvatar",value:function(t){this._avatar.src=t.avatar}}])&&U(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function N(t){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(t)}function F(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==N(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==N(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===N(o)?o:String(o)),r)}var o}var J=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._config=e,this._form=n,this._buttonSelector=e.buttonSelector,this._buttonDisabledClass=e.buttonDisabledClass,this._inputSelector=e.inputSelector,this._errorClass=e.errorClass,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._submitButton=this._form.querySelector(this._buttonSelector)}var e,n;return e=t,(n=[{key:"_handleFormInput",value:function(t){var e=document.querySelector("#".concat(t.id,"-error"));t.validity.valid?(t.classList.remove(this._errorClass),e.textContent=""):(t.classList.add(this._errorClass),e.textContent=t.validationMessage)}},{key:"_toggleSubmitButtonState",value:function(){var t=this._form.checkValidity();this._submitButton.disabled=!t,this._submitButton.classList.toggle(this._buttonDisabledClass,!t)}},{key:"_addInputListners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._toggleSubmitButtonState(),t._handleFormInput(e)}))}))}},{key:"disabledbuttonSubmit",value:function(){this._submitButton.disabled=!0,this._submitButton.classList.add(this._buttonDisabledClass)}},{key:"enableValidation",value:function(){var t=this;this._addInputListners(),this._toggleSubmitButtonState(),this._form.addEventListener("reset",(function(){setTimeout((function(){t._toggleSubmitButtonState()}),0)}))}}])&&F(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function G(t){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(t)}function H(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==G(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==G(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===G(o)?o:String(o)),r)}var o}function M(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var z,$=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url="https://mesto.nomoreparties.co/v1/cohort-64/",this._headers={authorization:"45c7ab21-c601-4d3e-824d-76630cdc55cf","Content-Type":"application/json"}}var e,n;return e=t,(n=[{key:"_checkStatusResponse",value:function(t){return t.ok?t.json():Promise.reject("Произошла ошибка")}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"cards"),{method:"GET",headers:this._headers}).then(this._checkStatusResponse)}},{key:"addCard",value:function(t){var e=t.name,n=t.link;return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:n})}).then(this._checkStatusResponse)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._url,"cards/").concat(t),{method:"DELETE",headers:this._headers}).then(this._checkStatusResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"users/me"),{method:"GET",headers:this._headers}).then(this._checkStatusResponse)}},{key:"changeUserInfo",value:function(t){var e=t.title,n=t.about;return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:n,avatar})}).then(this._checkStatusResponse)}},{key:"changeUserAvatar",value:function(t){var e=t.link;return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkStatusResponse)}},{key:"addLike",value:function(t){return fetch("".concat(this._url,"cards/likes/").concat(t),{method:"PUT",headers:this._headers}).then(this._checkStatusResponse)}},{key:"deleteLike",value:function(t){return fetch("".concat(this._url,"cards/likes/").concat(t),{method:"DELETE",headers:this._headers}).then(this._checkStatusResponse)}}])&&H(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()),K=new V({name:".profile__title",about:".profile__subtitle",avatar:".profile__image"});Promise.all([$.getUserInfo(),$.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,s=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){s=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(s)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return M(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];z=o._id,K.setUserInfo(o),tt.addCards(i)})).catch((function(t){return console.log(t)}));var Q=new I(".popup_edit",(function(t){return $.changeUserInfo(t).then((function(t){K.setUserInfo(t)})).catch((function(t){return console.log(t)}))}));Q.setEventListeners();var W=new I(".popup_avatar",(function(t){return $.changeUserAvatar(t).then((function(t){K.setUserAvatar(t)})).catch((function(t){return console.log(t)}))}));W.setEventListeners();var X=new O(".popup_img");function Y(t,e){X.open(t,e)}X.setEventListeners(),t.addEventListener("click",(function(){var t=K.getUserInfo();u.value=t.name,a.value=t.about,Q.open()})),n.addEventListener("click",(function(){W.open()})),e.addEventListener("click",(function(){et.open()}));var Z=new D(".popup_remove");Z.setEventListeners();var tt=new h((function(t){var e=new f(t,".template",Y,$,z,{createLike:function(t){$.addLike(t).then((function(t){e.updateLikesView(t)})).catch((function(t){return console.log(t)}))},deleteLike:function(t){$.deleteLike(t).then((function(t){e.updateLikesView(t)})).catch((function(t){return console.log(t)}))},deleteCardForPage:function(){Z.open(),Z.setSubmit((function(){Z.renderLoading(!0),$.deleteCard(t._id).then((function(){e.removeElement(),Z.close()})).catch((function(t){return console.log(t)})).finally((function(){return Z.renderLoading(!1)}))}))}});return e.generateCard()}),".cards"),et=new I(".popup_add",(function(t){return $.addCard(t).then((function(t){tt.addItem(t)})).catch((function(t){return console.log(t)}))}));et.setEventListeners(),new J(c,r).enableValidation(),new J(c,i).enableValidation(),new J(c,o).enableValidation()})();
//# sourceMappingURL=main.js.map