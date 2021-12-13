"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_steps_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/steps.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/steps.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "steps",
  data: function data() {
    return {
      msg: '',
      subSelect: '',
      formT: {
        tel: '',
        telRules: [],
        wp: '',
        wpRules: [],
        tg: '',
        tgRules: [],
        vk: '',
        vkRules: [],
        fb: '',
        fbRules: [],
        Name: '',
        NameRules: [function (Name) {
          return Name.length <= 30 || 'Макс 30 символов';
        }]
      },
      b2b: ['Телефон', 'WhatsApp', 'Telegram', 'VK', 'FB'],
      service: {
        options_one: ['Текст для сайта', 'Коммерческое предложение', 'Тексты для социальных сетей', 'Легенда бренда (история компании)', 'Ведение тематического блога (SEO-оптимизированные статьи) ', 'Другое (напишите в графе комментарий к заказу) '],
        options_two: ['Консультация по написанию книги', 'Консультации по бренд-стратегии для социальных сетей'],
        options_free: ['Переводы с казахского на русский', 'Переводы с русского на английский', 'Переводы с английского на русский']
      },
      b2b_active: [],
      form: {
        tel: false,
        wp: false,
        tg: false,
        vk: false,
        fb: false
      },
      total: ''
    };
  },
  beforeUpdate: function beforeUpdate() {
    this.total = this.getBase.a;
    this.form.tel = this.b2b_active.includes(0);
    this.form.wp = this.b2b_active.includes(1);
    this.form.tg = this.b2b_active.includes(2);
    this.form.vk = this.b2b_active.includes(3);
    this.form.fb = this.b2b_active.includes(4);
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)({
    getSingle: 'getSingle',
    getLoad: 'getLoad',
    gSnackbar: 'gSnackbar',
    getDialog: 'getDialog',
    getBase: 'getBase',
    getMsg: 'getMsg',
    getOptions: 'getOptions',
    getTitle: 'getTitle',
    getText: 'getText'
  })), {}, {
    isDisable: function isDisable() {
      this.msg = this.getMsg;

      if (this.formT.Name.length > 0 && this.formT.Name.length <= 30) {
        if (this.formT.fb.length > 3 || this.formT.vk.length > 3 || this.formT.tg.length > 3 || this.formT.wp.length > 10 || this.formT.tel.length > 10) {
          return false;
        }
      }

      return true;
    }
  }),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)({
    actionClose: 'actionClose',
    sendFormBot: 'sendFormBot',
    aSnackbar: 'aSnackbar'
  })), {}, {
    Snackbars: function Snackbars() {
      this.aSnackbar();
    },
    sendForm: function sendForm() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.sendFormBot({
                  message: _this.msg,
                  name: _this.formT,
                  ser: _this.getBase.b,
                  subDer: _this.subSelect
                });

              case 2:
                _this.empty();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    close: function close() {
      this.empty();
      this.actionClose();
    },
    empty: function empty() {
      this.formT.tel = '';
      this.formT.wp = '';
      this.formT.tg = '';
      this.formT.vk = '';
      this.formT.fb = '';
      this.formT.Name = '';
      this.subSelect = '';
      this.b2b_active = [], this.form.tel = false, this.form.wp = false, this.form.tg = false, this.form.vk = false, this.form.fb = false;
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/steps.vue?vue&type=style&index=0&id=a7c97f28&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/steps.vue?vue&type=style&index=0&id=a7c97f28&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n._title[data-v-a7c97f28] {\n    text-align: center;\n    font-size: 1.2rem;\n    font-family: 'SegoeUI';\n    background: #366bff;\n    color: #faf8f8;\n    border-radius: 6px;\n    margin: 15px 0px;\n}\n.base[data-v-a7c97f28]{\n    padding: 8px;\n    background: #fe554e;\n    border-radius: 5px;\n    color: #fff;\n}\ntheme--light.v-card[data-v-a7c97f28] {\n    background: #f0f2f5!important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/steps.vue?vue&type=style&index=0&id=a7c97f28&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/steps.vue?vue&type=style&index=0&id=a7c97f28&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_steps_vue_vue_type_style_index_0_id_a7c97f28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./steps.vue?vue&type=style&index=0&id=a7c97f28&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/steps.vue?vue&type=style&index=0&id=a7c97f28&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_steps_vue_vue_type_style_index_0_id_a7c97f28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_steps_vue_vue_type_style_index_0_id_a7c97f28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/steps.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/steps.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _steps_vue_vue_type_template_id_a7c97f28_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./steps.vue?vue&type=template&id=a7c97f28&scoped=true& */ "./resources/js/components/steps.vue?vue&type=template&id=a7c97f28&scoped=true&");
/* harmony import */ var _steps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./steps.vue?vue&type=script&lang=js& */ "./resources/js/components/steps.vue?vue&type=script&lang=js&");
/* harmony import */ var _steps_vue_vue_type_style_index_0_id_a7c97f28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./steps.vue?vue&type=style&index=0&id=a7c97f28&scoped=true&lang=css& */ "./resources/js/components/steps.vue?vue&type=style&index=0&id=a7c97f28&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _steps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _steps_vue_vue_type_template_id_a7c97f28_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _steps_vue_vue_type_template_id_a7c97f28_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "a7c97f28",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/steps.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/steps.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/steps.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_steps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./steps.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/steps.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_steps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/steps.vue?vue&type=style&index=0&id=a7c97f28&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/steps.vue?vue&type=style&index=0&id=a7c97f28&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_steps_vue_vue_type_style_index_0_id_a7c97f28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./steps.vue?vue&type=style&index=0&id=a7c97f28&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/steps.vue?vue&type=style&index=0&id=a7c97f28&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/steps.vue?vue&type=template&id=a7c97f28&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/steps.vue?vue&type=template&id=a7c97f28&scoped=true& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_steps_vue_vue_type_template_id_a7c97f28_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_steps_vue_vue_type_template_id_a7c97f28_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_steps_vue_vue_type_template_id_a7c97f28_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./steps.vue?vue&type=template&id=a7c97f28&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/steps.vue?vue&type=template&id=a7c97f28&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/steps.vue?vue&type=template&id=a7c97f28&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/steps.vue?vue&type=template&id=a7c97f28&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-dialog",
        {
          attrs: {
            transition: "dialog-bottom-transition",
            fullscreen: "",
            light: "",
            "max-width": "700"
          },
          model: {
            value: _vm.getDialog,
            callback: function($$v) {
              _vm.getDialog = $$v
            },
            expression: "getDialog"
          }
        },
        [
          _c(
            "v-card",
            { staticClass: "pa-2 _back", attrs: { loading: "true" } },
            [
              _c(
                "v-card-title",
                {
                  staticClass:
                    "text-caption  text-md-body-1 text-uppercase white--text"
                },
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { text: "" },
                      on: {
                        click: function($event) {
                          return _vm.close()
                        }
                      }
                    },
                    [
                      _c("v-icon", { staticClass: "secondary--text" }, [
                        _vm._v("fa-times-circle")
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  staticClass: "font-weight-bold text-center  text-uppercase",
                  attrs: { md: "6", "offset-md": "3" }
                },
                [
                  _c("v-col", { staticClass: "_title" }, [
                    _vm.getSingle
                      ? _c("div", [
                          _vm._v(
                            "\n                            ДЛЯ ЗАКАЗА УСЛУГ ИЛИ КОНСУЛЬТАЦИИ, ЗАПОЛНИТЕ ФОРМУ НИЖЕ.\n                        "
                          )
                        ])
                      : _c("div", [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.getTitle) +
                              "\n                        "
                          )
                        ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  staticClass: "_wr-back",
                  attrs: { md: "6", "offset-md": "3" }
                },
                [
                  _c(
                    "v-col",
                    {
                      staticClass:
                        "font-weight-bold text-center  text-uppercase",
                      attrs: { md: "10", "offset-md": "1" }
                    },
                    [
                      _vm.getSingle
                        ? _c("div")
                        : _c("div", [
                            _vm._v(
                              "Для расчета цены и заказа услуг, заполните форму ниже."
                            )
                          ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { staticClass: "form-b vf" },
                    [
                      _c("v-text-field", {
                        attrs: {
                          counter: 30,
                          "append-icon": "fa-user",
                          rules: _vm.formT.NameRules,
                          label: "Введите Ваше имя",
                          outlined: "",
                          dense: "",
                          color: "blue",
                          required: ""
                        },
                        model: {
                          value: _vm.formT.Name,
                          callback: function($$v) {
                            _vm.$set(_vm.formT, "Name", $$v)
                          },
                          expression: "formT.Name"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass:
                        " text-subtitle-2 text-center  text-uppercase",
                      attrs: { md: "10", "offset-md": "1" }
                    },
                    [
                      _vm._v(
                        "\n                Выберите удобный способ связи:\n            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    [
                      _c(
                        "v-sheet",
                        {
                          staticClass: "mx-auto",
                          attrs: { "max-width": "700" }
                        },
                        [
                          _c(
                            "v-slide-group",
                            {
                              attrs: { multiple: "" },
                              model: {
                                value: _vm.b2b_active,
                                callback: function($$v) {
                                  _vm.b2b_active = $$v
                                },
                                expression: "b2b_active"
                              }
                            },
                            _vm._l(_vm.b2b, function(n) {
                              return _c("v-slide-item", {
                                key: n,
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "default",
                                      fn: function(ref) {
                                        var active = ref.active
                                        var toggle = ref.toggle
                                        return [
                                          _c(
                                            "v-btn",
                                            {
                                              staticClass:
                                                "mx-2  text-sm-justify",
                                              attrs: {
                                                "input-value": active,
                                                "active-class": "blue--text",
                                                depressed: "",
                                                outlined: ""
                                              },
                                              on: { click: toggle }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                " +
                                                  _vm._s(n) +
                                                  "\n                            "
                                              )
                                            ]
                                          )
                                        ]
                                      }
                                    }
                                  ],
                                  null,
                                  true
                                )
                              })
                            }),
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { staticClass: " vf form-b", attrs: { dense: "" } },
                    [
                      _vm.form.tel
                        ? _c("v-text-field", {
                            attrs: {
                              rules: _vm.formT.telRules,
                              outlined: "",
                              dense: "",
                              color: "blue",
                              "append-icon": "fa-phone",
                              label: "Номер телефона",
                              required: ""
                            },
                            model: {
                              value: _vm.formT.tel,
                              callback: function($$v) {
                                _vm.$set(_vm.formT, "tel", $$v)
                              },
                              expression: "formT.tel"
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.wp
                        ? _c("v-text-field", {
                            attrs: {
                              rules: _vm.formT.wpRules,
                              outlined: "",
                              dense: "",
                              color: "blue",
                              "append-icon": "fa-whatsapp",
                              label: "Номер WhatsApp",
                              required: ""
                            },
                            model: {
                              value: _vm.formT.wp,
                              callback: function($$v) {
                                _vm.$set(_vm.formT, "wp", $$v)
                              },
                              expression: "formT.wp"
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.tg
                        ? _c("v-text-field", {
                            attrs: {
                              "append-icon": "fa-telegram",
                              rules: _vm.formT.tgRules,
                              outlined: "",
                              dense: "",
                              color: "blue",
                              label: "Номер/Логин Telegtma",
                              required: ""
                            },
                            model: {
                              value: _vm.formT.tg,
                              callback: function($$v) {
                                _vm.$set(_vm.formT, "tg", $$v)
                              },
                              expression: "formT.tg"
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.vk
                        ? _c("v-text-field", {
                            attrs: {
                              rules: _vm.formT.vkRules,
                              outlined: "",
                              dense: "",
                              color: "blue",
                              "append-icon": "fa-vk",
                              label: "id vk",
                              required: ""
                            },
                            model: {
                              value: _vm.formT.vk,
                              callback: function($$v) {
                                _vm.$set(_vm.formT, "vk", $$v)
                              },
                              expression: "formT.vk"
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.fb
                        ? _c("v-text-field", {
                            attrs: {
                              "append-icon": "fa-facebook-square",
                              outlined: "",
                              dense: "",
                              color: "blue",
                              rules: _vm.formT.fbRules,
                              label: "id fb",
                              required: ""
                            },
                            model: {
                              value: _vm.formT.fb,
                              callback: function($$v) {
                                _vm.$set(_vm.formT, "fb", $$v)
                              },
                              expression: "formT.fb"
                            }
                          })
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.getOptions.a === false && _vm.getSingle === false
                    ? _c(
                        "v-col",
                        {
                          staticClass:
                            " text-subtitle-2 text-center  text-uppercase",
                          attrs: { md: "10", "offset-md": "1" }
                        },
                        [
                          _vm.getOptions.b === 0 && _vm.getSingle === false
                            ? _c("div", [
                                _vm._v(
                                  "Выберите вид консультации, которую вы хотите получить от Газизы Габи:"
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.getOptions.b === 1 && _vm.getSingle === false
                            ? _c("div", [
                                _vm._v(
                                  "Выберите вид продающего текста, который вам нужен:"
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.getOptions.b === 2 && _vm.getSingle === false
                            ? _c("div", [
                                _vm._v(
                                  "Верите языковую пару для перевода: Переводы с русского на казахский:"
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { staticClass: " vf form-b", attrs: { dense: "" } },
                            [
                              _vm.getOptions.b === 1 && _vm.getSingle === false
                                ? _c("v-select", {
                                    attrs: {
                                      items: _vm.service["options_one"],
                                      label: "Выберете услугу",
                                      outlined: "",
                                      dense: "",
                                      color: "blue",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.subSelect,
                                      callback: function($$v) {
                                        _vm.subSelect = $$v
                                      },
                                      expression: "subSelect"
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.getOptions.b === 0 && _vm.getSingle === false
                                ? _c("v-select", {
                                    attrs: {
                                      items: _vm.service["options_two"],
                                      label: "Выберете услугу",
                                      outlined: "",
                                      dense: "",
                                      color: "blue",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.subSelect,
                                      callback: function($$v) {
                                        _vm.subSelect = $$v
                                      },
                                      expression: "subSelect"
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.getOptions.b === 2 && _vm.getSingle === false
                                ? _c("v-select", {
                                    attrs: {
                                      items: _vm.service["options_free"],
                                      label: "Выберете услугу",
                                      outlined: "",
                                      dense: "",
                                      color: "blue",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.subSelect,
                                      callback: function($$v) {
                                        _vm.subSelect = $$v
                                      },
                                      expression: "subSelect"
                                    }
                                  })
                                : _vm._e()
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass:
                        " text-subtitle-2 text-center  text-uppercase",
                      attrs: { md: "10", "offset-md": "1" }
                    },
                    [
                      _vm.getSingle
                        ? _c("div", [_vm._v("Ваше сообщение:")])
                        : _c("div", [_vm._v("Комментарий к заказу:")]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: " vf form-b", attrs: { dense: "" } },
                        [
                          _vm.getSingle === true
                            ? _c("v-textarea", {
                                attrs: {
                                  outlined: "",
                                  color: "blue",
                                  name: "input-7-4",
                                  label: "Ваше сообщение"
                                },
                                model: {
                                  value: _vm.msg,
                                  callback: function($$v) {
                                    _vm.msg = $$v
                                  },
                                  expression: "msg"
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.getSingle === false
                            ? _c("v-textarea", {
                                attrs: {
                                  outlined: "",
                                  color: "blue",
                                  name: "input-7-4",
                                  label: "Комментарий к заказу"
                                },
                                model: {
                                  value: _vm.msg,
                                  callback: function($$v) {
                                    _vm.msg = $$v
                                  },
                                  expression: "msg"
                                }
                              })
                            : _vm._e()
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "_mrg-btn footer text-center" },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        loading: _vm.getLoad,
                        disabled: _vm.isDisable,
                        color: "primary"
                      },
                      on: {
                        click: function($event) {
                          return _vm.sendForm()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                    Отправить\n                "
                      )
                    ]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          scopedSlots: _vm._u([
            {
              key: "action",
              fn: function(ref) {
                var attrs = ref.attrs
                return [
                  _c(
                    "v-btn",
                    _vm._b(
                      {
                        attrs: { color: "pink", text: "" },
                        on: {
                          click: function($event) {
                            return _vm.Snackbars()
                          }
                        }
                      },
                      "v-btn",
                      attrs,
                      false
                    ),
                    [_vm._v("\n                Закрыть\n            ")]
                  )
                ]
              }
            }
          ]),
          model: {
            value: _vm.gSnackbar,
            callback: function($$v) {
              _vm.gSnackbar = $$v
            },
            expression: "gSnackbar"
          }
        },
        [_vm._v("\n        " + _vm._s(_vm.getText) + "\n\n        ")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);