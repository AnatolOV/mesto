(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._objectOfSettings=n,this._link=e.link||e.reference,this._name=e.name,this._handleCardClick=r,this.imageInPopUp=document.querySelector(".".concat(this._objectOfSettings.classImgInPopUp)),this._namePopUpImage=document.querySelector(".".concat(this._objectOfSettings.classNameOfImgInPopup))}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return this.cardElement=document.querySelector("#".concat(this._objectOfSettings.templateId)).content.querySelector(".".concat(this._objectOfSettings.classOfCard)).cloneNode(!0),this.cardElement}},{key:"generateCard",value:function(){return this.element=this._getTemplate(),this.cardImage=this.element.querySelector(".".concat(this._objectOfSettings.classOfImgInCard)),this.cardImage.src=this._link,this.cardImage.alt=this._name,this.cardName=this.element.querySelector(".".concat(this._objectOfSettings.classOfNameCard)),this.cardName.textContent=this._name,this.likeButton=this.element.querySelector(".".concat(this._objectOfSettings.classLikeCardButton)),this.elementRemove=this.element.querySelector(".".concat(this._objectOfSettings.classRemoveCardButton)),this._setEventListeners(),this.element}},{key:"_handleCardLike",value:function(){this.likeButton.classList.toggle("".concat(this._objectOfSettings.classLikeButtonActive))}},{key:"_handleDelete",value:function(){this.cardElement.remove()}},{key:"_setEventListeners",value:function(){var e=this;this.cardImage.addEventListener("click",(function(){e._handleCardClick()})),this.likeButton.addEventListener("click",(function(){return e._handleCardLike()})),this.elementRemove.addEventListener("click",(function(){return e._handleDelete()}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=function(){function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"enableValidation",(function(){var e=o._arrOfSettings,t=e.inputSelector,n=e.submitButtonSelector,r=e.inactiveButtonClass,i=e.errorClass;o._formElement.addEventListener("submit",(function(e){e.preventDefault()})),o._setEventListeners(t,n,r,i)})),r(this,"_setEventListeners",(function(){var e=o._arrOfSettings,t=e.inputSelector,n=e.submitButtonSelector,r=e.inactiveButtonClass,i=e.errorClass;o.inputList=Array.from(o._formElement.querySelectorAll("".concat(t))),o.buttonElement=o._formElement.querySelector("".concat(n)),o._toggleButtonState(o.inputList,o.buttonElement,r),o.inputList.forEach((function(e){e.addEventListener("input",(function(){o._checkInputValidity(o._formElement,e,i),o._toggleButtonState(o.inputList,o.buttonElement,r)}))}))})),this._arrOfSettings=t,this._formElement=n,this._showInputError=function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));o.textContent=n,o.classList.add("".concat(r))},this._hideInputError=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));r.classList.remove("".concat(n)),r.textContent=""}}var t,o;return t=e,(o=[{key:"resetValidation",value:function(){var e=this,t=this._arrOfSettings,n=t.inactiveButtonClass,r=t.errorClass;this._toggleButtonState(this.inputList,this.buttonElement,n),this.inputList.forEach((function(t){e._hideInputError(e._formElement,t,r)}))}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(e,t,n){this._hasInvalidInput(e)?(t.classList.add("".concat(n)),t.disabled=!0):(t.classList.remove("".concat(n)),t.disabled=!1)}},{key:"_checkInputValidity",value:function(e,t,n){t.validity.valid?this._hideInputError(e,t,n):this._showInputError(e,t,t.validationMessage,n)}}])&&n(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=u(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},s.apply(this,arguments)}function u(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}function l(e,t){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},l(e,t)}function f(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function a(e,t){var n,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._handleFormSubmit=r,n._inputList=n._popup.querySelectorAll(".pop-up__field"),n._form=n._popup.querySelector(".pop-up__form"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formElement={},this._inputList.forEach((function(t){e._formElement[t.name]=t.value})),this._formElement}},{key:"setEventListeners",value:function(){var e=this;s(h(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){s(h(a.prototype),"close",this).call(this),this._form.reset()}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){e.target.classList.contains("pop-up")&&o.close()},(n="_handleOverClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t),this._closeButton=this._popup.querySelector(".pop-up__close"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("pop-up__open"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("pop-up__open"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_closeByClick",value:function(e){e.target.classList.contains("pop-up__open")&&this.close()}},{key:"setEventListeners",value:function(){this._closeButton.addEventListener("click",this.close.bind(this)),this._popup.addEventListener("click",this._handleOverClose.bind(this))}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}());function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t,n){var r=t.items;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._itemsData=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this,n=e.renderer;this._renderer=n,this._itemsData.forEach((function(e){return t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),m=document.querySelector(".profile__edit-button"),v=document.querySelector("#add"),y=document.querySelector(".profile__add-button"),b=v.querySelector(".pop-up__field_name_place"),g=v.querySelector(".pop-up__field_reference_image"),E=document.querySelector(".pop-up__field_name_human"),k=document.querySelector(".pop-up__field_name_occupation"),S={formSelector:".pop-up__form",inputSelector:".pop-up__field",submitButtonSelector:".pop-up__save",inactiveButtonClass:"pop-up__save_inactive",errorClass:"pop-up__input-error_active"},O={templateId:"element",classOfCard:"elements__element",classOfImgInCard:"elements__image",classOfNameCard:"elements__name",classLikeCardButton:"elements__like",classLikeButtonActive:"elements__like_active",classRemoveCardButton:"elements__bin",classImgInPopUp:"pop-up__image",classNameOfImgInPopup:"pop-up__name-image"},C=document.querySelector("#human-input"),I=document.querySelector("#occupation-input");function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkError",value:function(e){return e.ok?e.json():Promise.reject("Статус ошибки: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then((function(t){return e._checkError(t)}))}},{key:"postNewCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._checkError(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkError(e)}))}},{key:"getInfo",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then((function(t){return e._checkError(t)}))}},{key:"patchUserInfo",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._checkError(e)}))}},{key:"patchAvatarInfo",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._checkError(e)}))}},{key:"getLike",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t._checkError(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkError(e)}))}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();b.placeholder="Название",g.placeholder="Ссылка на картинку",k.placeholder="Вид деятельности",E.placeholder="ФИО";var j,P=new L({url:"https://mesto.nomoreparties.co/v1/cohort-65",headers:{"Content-Type":"application/json",authorization:"839f0bcd-454c-4502-9292-a3578896039c"}}),q=document.querySelector("#add"),B=document.querySelector("#edit"),T=new o(S,q);T.enableValidation(),new o(S,B).enableValidation();var R=P.getInitialCards().then((function(e){j=new _({elem:e.reverse(),renderer:function(e){j.addItem(createNewCard(e))}},".elements")})).catch((function(e){console.log(e)})),N=new p({handleFormSubmit:function(e){console.log("функция добавить картинку"),sectionClass.addItem(function(e){var n=new t(e,O,(function(){var e=O.classOfImgInCard,t=n.querySelector(".".concat(e));popupImage.open(t.alt,t.src)})).generateCard();return n}(e)),N.close()}},"#add");N.setEventListeners(),y.addEventListener("click",(function(){N.open(),T.resetValidation()}));var D=new p({handleFormSubmit:function(e){U.setUserInfo(e),D.close()}},"#edit");D.setEventListeners(),m.addEventListener("click",(function(){return e=U.getUserInfo(),D.open(),C.value=e.human,void(I.value=e.occupation);var e}));var U=P.getInfo().then((function(e){e._id,profilePopup.setUserInfo({name:e.name,about:e.about,avatar:e.avatar})})).catch((function(e){console.log(e)}));Promise.all([U,R]).then((function(){return j.renderItems()}))})();