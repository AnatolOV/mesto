(()=>{"use strict";function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._objectOfSettings=n,this._link=t.link||t.reference,this._name=t.name,this._handleCardClick=r,this.imageInPopUp=document.querySelector(".".concat(this._objectOfSettings.classImgInPopUp)),this._namePopUpImage=document.querySelector(".".concat(this._objectOfSettings.classNameOfImgInPopup)),this._classForOpenPopup=this._objectOfSettings.classForOpenPopup,this._popupShure=document.querySelector("#".concat(this._objectOfSettings.idOfPopupShure)),this._shureButton=document.querySelector(".".concat(n.classnameOfShureButton))}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){return this.cardElement=document.querySelector("#".concat(this._objectOfSettings.templateId)).content.querySelector(".".concat(this._objectOfSettings.classOfCard)).cloneNode(!0),this.cardElement}},{key:"generateCard",value:function(){return this.element=this._getTemplate(),this.cardImage=this.element.querySelector(".".concat(this._objectOfSettings.classOfImgInCard)),this.cardImage.src=this._link,this.cardImage.alt=this._name,this.cardName=this.element.querySelector(".".concat(this._objectOfSettings.classOfNameCard)),this.cardName.textContent=this._name,this.likeButton=this.element.querySelector(".".concat(this._objectOfSettings.classLikeCardButton)),this.elementRemove=this.element.querySelector(".".concat(this._objectOfSettings.classRemoveCardButton)),this._setEventListeners(),this.element}},{key:"_handleCardLike",value:function(){this.likeButton.classList.toggle("".concat(this._objectOfSettings.classLikeButtonActive))}},{key:"_handleDelete",value:function(){this.cardElement.remove()}},{key:"_setEventListeners",value:function(){var e=this;this.cardImage.addEventListener("click",(function(){e._handleCardClick()})),this.likeButton.addEventListener("click",(function(){return e._handleCardLike()})),this.elementRemove.addEventListener("click",(function(){e._popupShure.classList.add(e._classForOpenPopup),e._shureButton.addEventListener("click",(function(){e._handleDelete(),e._popupShure.classList.remove(e._classForOpenPopup)}))}))}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"enableValidation",(function(){var e=r._arrOfSettings,t=e.inputSelector,n=e.submitButtonSelector,o=e.inactiveButtonClass,i=e.errorClass;r._formElement.addEventListener("submit",(function(e){e.preventDefault()})),r._setEventListeners(t,n,o,i)})),o(this,"_setEventListeners",(function(){var e=r._arrOfSettings,t=e.inputSelector,n=e.submitButtonSelector,o=e.inactiveButtonClass,i=e.errorClass;r.inputList=Array.from(r._formElement.querySelectorAll("".concat(t))),r.buttonElement=r._formElement.querySelector("".concat(n)),r._toggleButtonState(r.inputList,r.buttonElement,o),r.inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(r._formElement,e,i),r._toggleButtonState(r.inputList,r.buttonElement,o)}))}))})),this._arrOfSettings=t,this._formElement=n,this._showInputError=function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));o.textContent=n,o.classList.add("".concat(r))},this._hideInputError=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));r.classList.remove("".concat(n)),r.textContent=""}}var t,n;return t=e,(n=[{key:"resetValidation",value:function(){var e=this,t=this._arrOfSettings,n=t.inactiveButtonClass,r=t.errorClass;this._toggleButtonState(this.inputList,this.buttonElement,n),this.inputList.forEach((function(t){e._hideInputError(e._formElement,t,r)}))}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(e,t,n){this._hasInvalidInput(e)?(t.classList.add("".concat(n)),t.disabled=!0):(t.classList.remove("".concat(n)),t.disabled=!1)}},{key:"_checkInputValidity",value:function(e,t,n){t.validity.valid?this._hideInputError(e,t,n):this._showInputError(e,t,t.validationMessage,n)}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){e.target.classList.contains("pop-up")&&o.close()},(n="_handleOverClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t),this._closeButton=this._popup.querySelector(".pop-up__close"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("pop-up__open"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("pop-up__open"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_closeByClick",value:function(e){e.target.classList.contains("pop-up__open")&&this.close()}},{key:"setEventListeners",value:function(){this._closeButton.addEventListener("click",this.close.bind(this)),this._popup.addEventListener("click",this._handleOverClose.bind(this))}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},l.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function h(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function c(e,t){var n,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this,t))._handleFormSubmit=r,n._inputList=n._popup.querySelectorAll(".pop-up__field"),n._form=n._popup.querySelector(".pop-up__form"),n}return t=c,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formElement={},this._inputList.forEach((function(t){e._formElement[t.name]=t.value})),this._formElement}},{key:"setEventListeners",value:function(){var e=this;l(d(c.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){l(d(c.prototype),"close",this).call(this),this._form.reset()}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(a);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=b(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},v.apply(this,arguments)}function b(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function S(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e))._imageInPopup=t._popup.querySelector(".pop-up__image"),t._textInPopup=t._popup.querySelector(".pop-up__name-image"),t}return t=c,(n=[{key:"open",value:function(e,t){v(O(c.prototype),"open",this).call(this),this._imageInPopup.src=t,this._textInPopup.textContent=e,this._imageInPopup.alt=e}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(a);function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t,n){var r=t.items;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._itemsData=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this,n=e.renderer;this._renderer=n,this._itemsData.forEach((function(e){return t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t){var n=t.profileName,r=t.profileAbout,o=t.profileAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(n),this._profileAbout=document.querySelector(r),this._profileAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){var e={};return e.human=this._profileName.textContent,e.occupation=this._profileAbout.textContent,e}},{key:"setUserInfo",value:function(e){var t=e.human,n=e.occupation,r=e.avatar;t&&(this._profileName.textContent=t),n&&(this._profileAbout.textContent=n),r&&(this._profileAvatar.src=r)}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),P=document.querySelector(".profile__edit-button"),j=document.querySelector("#add"),L=document.querySelector(".profile__add-button"),q=j.querySelector(".pop-up__field_name_place"),B=j.querySelector(".pop-up__field_reference_image"),T=document.querySelector(".pop-up__field_name_human"),R=document.querySelector(".pop-up__field_name_occupation"),A=(document.querySelector(".elements__containerfornumber"),{formSelector:".pop-up__form",inputSelector:".pop-up__field",submitButtonSelector:".pop-up__save",inactiveButtonClass:"pop-up__save_inactive",errorClass:"pop-up__input-error_active"}),N={templateId:"element",classOfCard:"elements__element",classOfImgInCard:"elements__image",classOfNameCard:"elements__name",classLikeCardButton:"elements__like",classLikeButtonActive:"elements__like_active",classRemoveCardButton:"elements__bin",classImgInPopUp:"pop-up__image",classNameOfImgInPopup:"pop-up__name-image",idOfPopupShure:"shure",classnameOfShureButton:"pop-up__shure-button",classForOpenPopup:"pop-up__open"},x=document.querySelector("#human-input"),D=document.querySelector("#occupation-input");function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var F=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkError",value:function(e){return e.ok?e.json():Promise.reject("Статус ошибки: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then((function(t){return e._checkError(t)}))}},{key:"postNewCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._checkError(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkError(e)}))}},{key:"getInfo",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then((function(t){return e._checkError(t)}))}},{key:"editUserInfo",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.human,about:e.occupation})}).then((function(e){return t._checkError(e)}))}},{key:"patchAvatarInfo",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._checkError(e)}))}},{key:"getLike",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t._checkError(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkError(e)}))}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();q.placeholder="Название",B.placeholder="Ссылка на картинку",R.placeholder="Вид деятельности",T.placeholder="ФИО";var V=new F({url:"https://mesto.nomoreparties.co/v1/cohort-65",headers:{"Content-Type":"application/json",authorization:"839f0bcd-454c-4502-9292-a3578896039c"}}),J=document.querySelector("#add"),G=document.querySelector("#edit"),H=new i(A,J);H.enableValidation(),new i(A,G).enableValidation();var z,M=new k("#photo");function K(e){var t=new n(e,N,(function(){var e=N.classOfImgInCard,n=t.querySelector(".".concat(e));M.open(n.alt,n.src)})).generateCard();return t}M.setEventListeners(),V.getInitialCards().then((function(e){(z=new w({items:e,elem:e.reverse()},".elements")).renderItems({renderer:function(e){z.addItem(K(e)),"f09e13c82670c28e9e23fe17"!==e.owner._id&&document.querySelector(".elements__bin").remove(),document.querySelector(".elements__likequantity").textContent=e.likes.length}})}));var Q=new _({handleFormSubmit:function(t){console.log("функция добавить картинку"),V.postNewCard(t),Q.close(),V.getInitialCards(),V.getInitialCards().then((function(t){(z=new w({items:t,elem:t.reverse()},".elements")).renderItems({renderer:function(e){console.log(e._id),z.addItem(K(e)),"f09e13c82670c28e9e23fe17"!==e.owner._id&&document.querySelector(".elements__bin").remove(),document.querySelector(".elements__likequantity").textContent=e.likes.length}}),console.log(e)}))}},"#add");Q.setEventListeners(),L.addEventListener("click",(function(){Q.open(),H.resetValidation()}));var W=new I({profileName:".profile__name",profileAbout:".profile__profession",profileAvatar:".profile__photo"}),X=(V.getInfo().then((function(e){e._id,W.setUserInfo({human:e.name,occupation:e.about,avatar:e.avatar})})).catch((function(e){console.log(e)})),new _({handleFormSubmit:function(e){V.editUserInfo(e).then((function(e){e._id,W.setUserInfo({human:e.name,occupation:e.about,avatar:e.avatar})})),X.close()}},"#edit"));X.setEventListeners(),P.addEventListener("click",(function(){return e=W.getUserInfo(),X.open(),x.value=e.human,void(D.value=e.occupation);var e}))})();