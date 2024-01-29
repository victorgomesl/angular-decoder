import './polyfills.server.mjs';
import{A as s,B as a,C as g,D as pt,E as ft,F as m,G as b,H as gt,I as c,J as w,K as Z,L as h,M as mt,T as vt,U as yt,V as X,X as A,Y as y,Z as _t,_ as xt,a as O,b as rt,ba as Ct,c as ot,d as st,e as W,f as z,fa as bt,g as T,h as D,i as k,ia as Vt,j as u,k as j,l as M,m as at,n as lt,o as ct,p as dt,q,r as Y,s as d,t as l,u as ut,v as G,w as I,x as C,y as p,z as ht}from"./chunk-WVQKPOHX.mjs";import{a as v,b as V}from"./chunk-VVCT4QZE.mjs";var Dt=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=u({type:t,selectors:[["app-logo"]],standalone:!0,features:[h],decls:2,vars:0,consts:[[1,"logo-container"],["src","assets/logo.svg","alt","Logo",1,"logo-image"]],template:function(r,o){r&1&&(s(0,"div",0),g(1,"img",1),a())},styles:[".logo-container[_ngcontent-%COMP%]{width:calc(100% - 80px);position:relative;display:flex;margin-left:auto;margin-right:auto;margin-top:40px;box-sizing:border-box}.logo-image[_ngcontent-%COMP%]{max-width:100%;height:auto}@media (max-width: 900px){.logo-container[_ngcontent-%COMP%]{width:calc(100% - 60px);margin-top:40px}}@media (max-width: 680px){.logo-container[_ngcontent-%COMP%]{width:calc(100% - 60px);margin-top:40px}}@media (max-width: 600px){.logo-container[_ngcontent-%COMP%]{width:calc(100% - 60px);margin-top:40px}}@media (max-width: 550px){.logo-container[_ngcontent-%COMP%]{width:calc(100% - 60px);margin-top:40px}}@media (max-width: 480px){.logo-container[_ngcontent-%COMP%]{width:calc(100% - 40px);margin-top:40px}}@media (max-width: 415px){.logo-container[_ngcontent-%COMP%]{width:calc(100% - 40px);margin-top:40px}}"]});let e=t;return e})();var Pt=(()=>{let t=class t{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};t.\u0275fac=function(r){return new(r||t)(l(Y),l(q))},t.\u0275dir=M({type:t});let e=t;return e})(),ee=(()=>{let t=class t extends Pt{};t.\u0275fac=(()=>{let i;return function(o){return(i||(i=dt(t)))(o||t)}})(),t.\u0275dir=M({type:t,features:[I]});let e=t;return e})(),St=new D("NgValueAccessor");var ie={provide:St,useExisting:W(()=>H),multi:!0};function ne(){let e=X()?X().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var re=new D("CompositionEventMode"),H=(()=>{let t=class t extends Pt{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!ne())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};t.\u0275fac=function(r){return new(r||t)(l(Y),l(q),l(re,8))},t.\u0275dir=M({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&m("input",function(x){return o._handleInput(x.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(x){return o._compositionEnd(x.target.value)})},features:[Z([ie]),I]});let e=t;return e})();var oe=new D("NgValidators"),se=new D("NgAsyncValidators");function Nt(e){return e!=null}function Tt(e){return ft(e)?rt(e):e}function kt(e){let t={};return e.forEach(n=>{t=n!=null?v(v({},t),n):t}),Object.keys(t).length===0?null:t}function jt(e,t){return t.map(n=>n(e))}function ae(e){return!e.validate}function Gt(e){return e.map(t=>ae(t)?t:n=>t.validate(n))}function le(e){if(!e)return null;let t=e.filter(Nt);return t.length==0?null:function(n){return kt(jt(n,t))}}function Bt(e){return e!=null?le(Gt(e)):null}function ce(e){if(!e)return null;let t=e.filter(Nt);return t.length==0?null:function(n){let i=jt(n,t).map(Tt);return st(i).pipe(ot(kt))}}function Ut(e){return e!=null?ce(Gt(e)):null}function Mt(e,t){return e===null?[t]:Array.isArray(e)?[...e,t]:[e,t]}function de(e){return e._rawValidators}function ue(e){return e._rawAsyncValidators}function K(e){return e?Array.isArray(e)?e:[e]:[]}function U(e,t){return Array.isArray(e)?e.includes(t):e===t}function wt(e,t){let n=K(t);return K(e).forEach(r=>{U(n,r)||n.push(r)}),n}function At(e,t){return K(t).filter(n=>!U(e,n))}var R=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=Bt(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=Ut(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,n){return this.control?this.control.hasError(t,n):!1}getError(t,n){return this.control?this.control.getError(t,n):null}},J=class extends R{get formDirective(){return null}get path(){return null}},N=class extends R{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},Q=class{constructor(t){this._cd=t}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},he={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ai=V(v({},he),{"[class.ng-submitted]":"isSubmitted"}),Rt=(()=>{let t=class t extends Q{constructor(i){super(i)}};t.\u0275fac=function(r){return new(r||t)(l(N,2))},t.\u0275dir=M({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&ht("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[I]});let e=t;return e})();var P="VALID",B="INVALID",E="PENDING",S="DISABLED";function pe(e){return(L(e)?e.validators:e)||null}function fe(e){return Array.isArray(e)?Bt(e):e||null}function ge(e,t){return(L(t)?t.asyncValidators:e)||null}function me(e){return Array.isArray(e)?Ut(e):e||null}function L(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}var tt=class{constructor(t,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(t),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===P}get invalid(){return this.status===B}get pending(){return this.status==E}get disabled(){return this.status===S}get enabled(){return this.status!==S}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(wt(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(wt(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(At(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(At(t,this._rawAsyncValidators))}hasValidator(t){return U(this._rawValidators,t)}hasAsyncValidator(t){return U(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=E,t.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){let n=this._parentMarkedDirty(t.onlySelf);this.status=S,this.errors=null,this._forEachChild(i=>{i.disable(V(v({},t),{onlySelf:!0}))}),this._updateValue(),t.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(V(v({},t),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(t={}){let n=this._parentMarkedDirty(t.onlySelf);this.status=P,this._forEachChild(i=>{i.enable(V(v({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(V(v({},t),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===P||this.status===E)&&this._runAsyncValidator(t.emitEvent)),t.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?S:P}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=E,this._hasOwnPendingAsyncValidator=!0;let n=Tt(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,n={}){this.errors=t,this._updateControlsErrors(n.emitEvent!==!1)}get(t){let n=t;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(t,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[t]:null}hasError(t,n){return!!this.getError(t,n)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new G,this.statusChanges=new G}_calculateStatus(){return this._allControlsDisabled()?S:this.errors?B:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(E)?E:this._anyControlsHaveStatus(B)?B:P}_anyControlsHaveStatus(t){return this._anyControls(n=>n.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){L(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){let n=this._parent&&this._parent.dirty;return!t&&!!n&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=fe(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=me(this._rawAsyncValidators)}};var Ht=new D("CallSetDisabledState",{providedIn:"root",factory:()=>et}),et="always";function ve(e,t){return[...t.path,e]}function ye(e,t,n=et){xe(e,t),t.valueAccessor.writeValue(e.value),(e.disabled||n==="always")&&t.valueAccessor.setDisabledState?.(e.disabled),Ce(e,t),Ve(e,t),be(e,t),_e(e,t)}function Et(e,t){e.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(t)})}function _e(e,t){if(t.valueAccessor.setDisabledState){let n=i=>{t.valueAccessor.setDisabledState(i)};e.registerOnDisabledChange(n),t._registerOnDestroy(()=>{e._unregisterOnDisabledChange(n)})}}function xe(e,t){let n=de(e);t.validator!==null?e.setValidators(Mt(n,t.validator)):typeof n=="function"&&e.setValidators([n]);let i=ue(e);t.asyncValidator!==null?e.setAsyncValidators(Mt(i,t.asyncValidator)):typeof i=="function"&&e.setAsyncValidators([i]);let r=()=>e.updateValueAndValidity();Et(t._rawValidators,r),Et(t._rawAsyncValidators,r)}function Ce(e,t){t.valueAccessor.registerOnChange(n=>{e._pendingValue=n,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&Lt(e,t)})}function be(e,t){t.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&Lt(e,t),e.updateOn!=="submit"&&e.markAsTouched()})}function Lt(e,t){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function Ve(e,t){let n=(i,r)=>{t.valueAccessor.writeValue(i),r&&t.viewToModelUpdate(i)};e.registerOnChange(n),t._registerOnDestroy(()=>{e._unregisterOnChange(n)})}function De(e,t){if(!e.hasOwnProperty("model"))return!1;let n=e.model;return n.isFirstChange()?!0:!Object.is(t,n.currentValue)}function Me(e){return Object.getPrototypeOf(e.constructor)===ee}function we(e,t){if(!t)return null;Array.isArray(t);let n,i,r;return t.forEach(o=>{o.constructor===H?n=o:Me(o)?i=o:r=o}),r||i||n||null}function Ft(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}function Ot(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var Ae=class extends tt{constructor(t=null,n,i){super(pe(n),ge(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),L(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Ot(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,n={}){this.value=this._pendingValue=t,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(t,n={}){this.setValue(t,n)}reset(t=this.defaultValue,n={}){this._applyFormState(t),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Ft(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Ft(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){Ot(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var Ee={provide:N,useExisting:W(()=>it)},It=Promise.resolve(),it=(()=>{let t=class t extends N{constructor(i,r,o,f,x,te){super(),this._changeDetectorRef=x,this.callSetDisabledState=te,this.control=new Ae,this._registered=!1,this.name="",this.update=new G,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=we(this,f)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),De(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){ye(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){It.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,o=r!==0&&vt(r);It.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?ve(i,this._parent):[i]}};t.\u0275fac=function(r){return new(r||t)(l(J,9),l(oe,10),l(se,10),l(St,10),l(ut,8),l(Ht,8))},t.\u0275dir=M({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[k.None,"disabled","isDisabled"],model:[k.None,"ngModel","model"],options:[k.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[Z([Ee]),I,at]});let e=t;return e})();var Fe=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=j({type:t}),t.\u0275inj=T({});let e=t;return e})();var Oe=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=j({type:t}),t.\u0275inj=T({imports:[Fe]});let e=t;return e})();var $t=(()=>{let t=class t{static withConfig(i){return{ngModule:t,providers:[{provide:Ht,useValue:i.callSetDisabledState??et}]}}};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=j({type:t}),t.\u0275inj=T({imports:[Oe]});let e=t;return e})();var F=(()=>{let t=class t{constructor(){this.textoSource=new O(""),this.mostrarTextoSource=new O(!1),this.textoProcessadoSource=new O(!1),this.estadoTextoSource=new O(""),this.textoAtual=this.textoSource.asObservable(),this.mostrarTextoAtual=this.mostrarTextoSource.asObservable(),this.textoProcessadoAtual=this.textoProcessadoSource.asObservable(),this.estadoTextoAtual=this.estadoTextoSource.asObservable()}atualizarTexto(i){console.log("Texto atualizado:",i),this.textoSource.next(i)}definirVisibilidadeTexto(i){this.mostrarTextoSource.next(i)}resetarProcessamentoTexto(){this.mostrarTextoSource.next(!1),this.textoProcessadoSource.next(!1),this.estadoTextoSource.next("")}definirTextoProcessado(i){this.textoProcessadoSource.next(i)}definirEstadoTexto(i){this.estadoTextoSource.next(i)}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function Pe(e,t){if(e&1&&(s(0,"div",4),c(1),a()),e&2){let n=b();d(),w(n.erro)}}function Se(e,t){if(e&1&&(s(0,"div",5),c(1),a()),e&2){let n=b();d(),w(n.textoProcessadoMensagem)}}var zt=(()=>{let t=class t{constructor(i){this.textoService=i,this._textoDigitado="",this.erro=null,this.textoProcessadoMensagem=null}ngOnInit(){this.textoService.textoProcessadoAtual.subscribe(i=>{this.textoProcessadoMensagem=i?"Este texto j\xE1 foi criptografado ou descriptografado.":null})}get textoDigitado(){return this._textoDigitado}set textoDigitado(i){let r=i.replace(/\n/g," "),o=this.formatarTexto(r);this.validarTexto(o)?(this._textoDigitado=o,this.erro=null,this.textoService.atualizarTexto(this._textoDigitado),this.textoService.resetarProcessamentoTexto()):this.erro="Por favor, digite apenas letras min\xFAsculas e sem acento."}validarTexto(i){return/^[a-z\s]*$/.test(i)}formatarTexto(i){return i}};t.\u0275fac=function(r){return new(r||t)(l(F))},t.\u0275cmp=u({type:t,selectors:[["app-digitar-texto"]],standalone:!0,features:[h],decls:4,vars:3,consts:[[1,"digitar-texto-container"],["placeholder","Digite seu texto",1,"input-texto",3,"ngModel","ngModelChange"],["class","erro",4,"ngIf"],["class","mensagem-processado",4,"ngIf"],[1,"erro"],[1,"mensagem-processado"]],template:function(r,o){r&1&&(s(0,"div",0)(1,"textarea",1),m("ngModelChange",function(x){return o.textoDigitado=x}),a(),C(2,Pe,2,1,"div",2)(3,Se,2,1,"div",3),a()),r&2&&(d(),p("ngModel",o.textoDigitado),d(),p("ngIf",o.erro),d(),p("ngIf",o.textoProcessadoMensagem))},dependencies:[$t,H,Rt,it,y,A],styles:[".digitar-texto-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-top:50px;width:100%;max-width:702px;margin-left:80px;margin-right:auto}.input-texto[_ngcontent-%COMP%]::-webkit-scrollbar{width:12px}.input-texto[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#f1f1f1}.input-texto[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#888;border-radius:6px}.input-texto[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#555}.input-texto[_ngcontent-%COMP%]{font-size:32px;font-family:Inter,sans-serif;font-weight:400;line-height:48px;color:#0a3871;border:none;outline:none;background:transparent;margin:10px 0;padding:8px;resize:none;max-width:100%;min-height:350px;height:auto;overflow-y:auto}.input-texto[_ngcontent-%COMP%]::placeholder{color:#0a3871;opacity:.5}.texto-digitado[_ngcontent-%COMP%]{color:#0a3871;font-size:32px;font-family:Inter,sans-serif;font-weight:400;line-height:48px;word-wrap:break-word;margin-top:10px;white-space:pre-wrap}.erro[_ngcontent-%COMP%]{color:red;font-size:14px;margin-top:0;margin-bottom:10px}@media (max-width: 900px){.digitar-texto-container[_ngcontent-%COMP%], .erro[_ngcontent-%COMP%]{max-width:calc(100% - 60px);margin-left:30px;margin-right:30px}}@media (max-width: 680px){.digitar-texto-container[_ngcontent-%COMP%], .erro[_ngcontent-%COMP%]{max-width:calc(100% - 60px);margin-left:30px;margin-right:30px}}@media (max-width: 600px){.digitar-texto-container[_ngcontent-%COMP%], .erro[_ngcontent-%COMP%]{max-width:calc(100% - 60px);margin-left:30px;margin-right:30px}}@media (max-width: 550px){.digitar-texto-container[_ngcontent-%COMP%], .erro[_ngcontent-%COMP%]{max-width:calc(100% - 60px);margin-left:30px;margin-right:30px}}@media (max-width: 480px){.digitar-texto-container[_ngcontent-%COMP%], .erro[_ngcontent-%COMP%]{max-width:calc(100% - 60px);margin-left:30px;margin-right:30px}}@media (max-width: 415px){.digitar-texto-container[_ngcontent-%COMP%], .erro[_ngcontent-%COMP%]{max-width:calc(100% - 60px);margin-left:30px;margin-right:30px}}"]});let e=t;return e})();function Ne(e,t){if(e&1&&(s(0,"div",8),c(1),a()),e&2){let n=b(2);d(),w(n.mensagemEstadoTexto)}}function Te(e,t){if(e&1){let n=pt();s(0,"div",3),C(1,Ne,2,1,"div",4),s(2,"div",5),c(3),a(),s(4,"button",6),m("click",function(){lt(n);let r=b();return ct(r.copiarTexto())}),c(5," Copiar "),s(6,"span",7),c(7,"content_copy"),a()()()}if(e&2){let n=b();d(),p("ngIf",n.textoCriptografado),d(2),w(n.textoCriptografado)}}function ke(e,t){e&1&&(s(0,"div",3),g(1,"img",9),s(2,"div",10),c(3,"Nenhuma mensagem encontrada"),a(),s(4,"div",11),c(5,"Digite um texto que voc\xEA deseja criptografar ou descriptografar e clique no bot\xE3o correspondente."),a()())}var qt=(()=>{let t=class t{constructor(i){this.textoService=i,this.textoCriptografado="",this.mostrarTexto=!1,this.estadoTexto=""}ngOnInit(){this.textoService.textoAtual.subscribe(i=>{this.textoCriptografado=i}),this.textoService.mostrarTextoAtual.subscribe(i=>{this.mostrarTexto=i}),this.textoService.estadoTextoAtual.subscribe(i=>{this.estadoTexto=i})}copiarTexto(){navigator.clipboard.writeText(this.textoCriptografado).then(()=>{},i=>{console.error("Falha ao copiar texto: ",i)})}get mensagemEstadoTexto(){return`Seu texto ${this.estadoTexto}:`}};t.\u0275fac=function(r){return new(r||t)(l(F))},t.\u0275cmp=u({type:t,selectors:[["app-card-direito"]],standalone:!0,features:[h],decls:4,vars:2,consts:[[1,"card-direito"],["class","card-direito-content",4,"ngIf","ngIfElse"],["mensagemPadrao",""],[1,"card-direito-content"],["class","message-up",4,"ngIf"],[1,"texto-criptografado"],[1,"botao","copiar",3,"click"],[1,"material-icons"],[1,"message-up"],["src","../../../assets/search-img.svg",1,"search-image"],[1,"message-not-found"],[1,"instruction-text"]],template:function(r,o){if(r&1&&(s(0,"div",0),C(1,Te,8,2,"div",1)(2,ke,6,0,"ng-template",null,2,mt),a()),r&2){let f=gt(3);d(),p("ngIf",o.mostrarTexto)("ngIfElse",f)}},dependencies:[y,A],styles:[".card-direito[_ngcontent-%COMP%]{width:400px;height:590px;position:absolute;left:80%;top:40px;background:#fff;box-shadow:0 24px 32px -8px #00000014;border-radius:32px;margin-right:40px;transform:translate(-50%)}.card-direito-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;padding:40px 10px}.texto-criptografado[_ngcontent-%COMP%]{text-align:center;width:calc(100% - 20px);word-wrap:break-word;white-space:pre-wrap;overflow-wrap:break-word;margin:10px 0;overflow-y:auto;max-height:200px}.texto-criptografado[_ngcontent-%COMP%]::-webkit-scrollbar{width:12px}.texto-criptografado[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#f1f1f1}.texto-criptografado[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#888;border-radius:6px}.texto-criptografado[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#555}.search-image[_ngcontent-%COMP%]{display:block;width:auto;max-width:100%}.message-not-found[_ngcontent-%COMP%]{width:100%;text-align:center;color:#343a40;font-size:22px;font-weight:700;line-height:28.8px;word-wrap:break-word}.message-up[_ngcontent-%COMP%]{width:100%;text-align:center;color:#343a40;font-size:22px;font-weight:700;line-height:28.8px;word-wrap:break-word;margin-bottom:10px}.instruction-text[_ngcontent-%COMP%]{width:100%;text-align:center;color:#495057;font-size:14px;font-family:Inter,sans-serif;font-weight:400;line-height:24px;word-wrap:break-word;margin-top:8px}.botao.copiar[_ngcontent-%COMP%]{background:#d8dfe8;color:#0a3871;border:1px #0A3871 solid;display:flex;justify-content:center;align-items:center;padding:24px;cursor:pointer;border-radius:24px;font-family:Inter,sans-serif;font-weight:400;text-align:center;font-size:16px;gap:8px;word-wrap:break-word;margin-top:20px;transition:transform .1s ease}.botao.copiar[_ngcontent-%COMP%]:active{transform:translateY(-1px)}.botao.copiar[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{color:#0a3871}@media (max-width: 900px){.card-direito[_ngcontent-%COMP%]{position:relative;width:calc(100% - 160px);height:auto;left:80px;top:auto;margin-top:30px;margin-right:auto;margin-bottom:30px;transform:none}}@media (max-width: 680px){.card-direito[_ngcontent-%COMP%]{width:calc(100% - 160px)}}@media (max-width: 600px){.card-direito[_ngcontent-%COMP%]{width:calc(100% - 160px)}}@media (max-width: 550px){.card-direito[_ngcontent-%COMP%]{width:calc(100% - 160px)}}@media (max-width: 480px){.card-direito[_ngcontent-%COMP%]{width:calc(100% - 80px)}}@media (max-width: 415px){.card-direito[_ngcontent-%COMP%]{width:calc(100% - 40px);left:20px}}"]});let e=t;return e})();function je(e,t){e&1&&(s(0,"div",8),c(1," Este texto j\xE1 foi criptografado ou descriptografado. "),a())}var Yt=(()=>{let t=class t{constructor(i){this.textoService=i,this.textoDigitado="",this.textoProcessado=!0,this.exibirMensagemProcessado=!1}ngOnInit(){this.textoService.textoAtual.subscribe(i=>{this.textoDigitado=i,this.textoProcessado=!i.trim(),this.exibirMensagemProcessado=!1})}criptografarTexto(){if(!this.textoProcessado){let i=this.criptografar(this.textoDigitado);this.textoService.atualizarTexto(i),this.textoService.definirVisibilidadeTexto(!0),this.textoService.definirEstadoTexto("Criptografado"),this.textoProcessado=!0,this.exibirMensagemProcessado=!0}}descriptografarTexto(){if(!this.textoProcessado){let i=this.descriptografar(this.textoDigitado);this.textoService.atualizarTexto(i),this.textoService.definirVisibilidadeTexto(!0),this.textoService.definirEstadoTexto("Descriptografado"),this.textoProcessado=!0,this.exibirMensagemProcessado=!0}}criptografar(i){return i.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat")}descriptografar(i){return i.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u")}};t.\u0275fac=function(r){return new(r||t)(l(F))},t.\u0275cmp=u({type:t,selectors:[["app-botoes-acao"]],standalone:!0,features:[h],decls:11,vars:3,consts:[[1,"conteudo-acao"],["class","mensagem-processado",4,"ngIf"],[1,"texto-informativo"],[1,"icone-informativo"],["src","../../../assets/bi_exclamation-circle-fill.svg","alt","Informa\xE7\xE3o"],[1,"botoes-acao"],[1,"botao","criptografar",3,"disabled","click"],[1,"botao","descriptografar",3,"disabled","click"],[1,"mensagem-processado"]],template:function(r,o){r&1&&(s(0,"div",0),C(1,je,2,0,"div",1),s(2,"div",2)(3,"div",3),g(4,"img",4),a(),c(5," Apenas letras min\xFAsculas e sem acento. "),a(),s(6,"div",5)(7,"button",6),m("click",function(){return o.criptografarTexto()}),c(8," Criptografar "),a(),s(9,"button",7),m("click",function(){return o.descriptografarTexto()}),c(10," Descriptografar "),a()()()),r&2&&(d(),p("ngIf",o.exibirMensagemProcessado),d(6),p("disabled",o.textoProcessado),d(2),p("disabled",o.textoProcessado))},dependencies:[y,A],styles:[".conteudo-acao[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;margin-left:80px;margin-top:0}.botoes-acao[_ngcontent-%COMP%]{width:680px;display:inline-flex;justify-content:flex-start;align-items:flex-start;gap:24px;flex-wrap:wrap}.botao[_ngcontent-%COMP%]{padding:24px;border-radius:24px;display:flex;justify-content:center;align-items:center;gap:8px;color:#fff;font-size:16px;font-family:Inter,sans-serif;font-weight:400;text-align:center;word-wrap:break-word;cursor:pointer;flex:1 1 0}.criptografar[_ngcontent-%COMP%]{background:#0a3871;flex:1 1 0;border:1px #0A3871 solid;transition:transform .1s ease}.criptografar[_ngcontent-%COMP%]:active{transform:translateY(-1px)}.descriptografar[_ngcontent-%COMP%]{background:#d8dfe8;color:#0a3871;border:1px #0A3871 solid;flex:1 1 0;transition:transform .1s ease}.descriptografar[_ngcontent-%COMP%]:active{transform:translateY(-1px)}.texto-informativo[_ngcontent-%COMP%]{display:inline-flex;justify-content:flex-start;align-items:center;gap:8px;color:#495057;font-size:12px;font-family:Inter,sans-serif;font-weight:400;line-height:18px;word-wrap:break-word;opacity:.8;margin-bottom:20px}.mensagem-processado[_ngcontent-%COMP%]{display:inline-flex;justify-content:flex-start;align-items:center;gap:8px;color:#495057;font-size:14px;font-family:Inter,sans-serif;font-weight:400;line-height:18px;word-wrap:break-word;opacity:.8;margin-bottom:20px}.icone-informativo[_ngcontent-%COMP%]{width:16px;height:16px;display:flex;justify-content:center;align-items:center}.icone-informativo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto}@media (max-width: 900px){.conteudo-acao[_ngcontent-%COMP%]{margin-left:5%;margin-right:5%}.botoes-acao[_ngcontent-%COMP%]{width:100%;flex-direction:column;align-items:center;gap:10px}.botao[_ngcontent-%COMP%]{width:100%}.texto-informativo[_ngcontent-%COMP%]{max-width:calc(100% - 60px);margin-left:0;margin-right:30px;justify-content:center}}@media (max-width: 745px){.botao[_ngcontent-%COMP%]{width:calc(632px - 10%)}}@media (max-width: 680px){.botao[_ngcontent-%COMP%]{width:calc(100% - 160px)}.texto-informativo[_ngcontent-%COMP%]{max-width:calc(100% - 60px);margin-left:30px;margin-right:30px}}@media (max-width: 600px){.botao[_ngcontent-%COMP%]{width:calc(100% - 160px)}.texto-informativo[_ngcontent-%COMP%]{max-width:calc(100% - 60px);margin-left:30px;margin-right:30px}}@media (max-width: 550px){.botao[_ngcontent-%COMP%]{width:calc(100% - 160px)}.texto-informativo[_ngcontent-%COMP%]{max-width:calc(100% - 60px);margin-left:30px;margin-right:30px}}@media (max-width: 480px){.botao[_ngcontent-%COMP%]{width:calc(100% - 80px);left:40px}.texto-informativo[_ngcontent-%COMP%]{max-width:calc(100% - 60px);margin-left:30px;margin-right:30px}}@media (max-width: 415px){.botao[_ngcontent-%COMP%]{width:calc(100% - 40px);left:20px}.texto-informativo[_ngcontent-%COMP%]{max-width:calc(100% - 60px);margin-left:30px;margin-right:30px}}"]});let e=t;return e})();var Zt=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=u({type:t,selectors:[["app-footer"]],standalone:!0,features:[h],decls:6,vars:0,consts:[[1,"footer"],["href","https://www.github.com/victorgomesl","target","_blank",1,"github-link"]],template:function(r,o){r&1&&(s(0,"div",0)(1,"p"),c(2,"Desenvolvido por "),s(3,"a",1),c(4,"victorgomesl"),a(),c(5," \u2665"),a()())},styles:[".footer[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;color:#495057;font-size:14px;font-family:Inter,sans-serif;font-weight:400;line-height:24px;padding:0;margin-top:80px;width:100%;box-sizing:border-box}.github-link[_ngcontent-%COMP%]{color:#495057;text-decoration:none;font-weight:400}.github-link[_ngcontent-%COMP%]:hover, .github-link[_ngcontent-%COMP%]:active{text-decoration:none}"]});let e=t;return e})();var $=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=u({type:t,selectors:[["app-home"]],standalone:!0,features:[h],decls:6,vars:0,consts:[[1,"main-container"]],template:function(r,o){r&1&&(s(0,"div",0),g(1,"app-logo")(2,"app-digitar-texto")(3,"app-botoes-acao")(4,"app-card-direito")(5,"app-footer"),a())},dependencies:[Dt,zt,Yt,qt,Zt]});let e=t;return e})();var Xt=(()=>{let t=class t{constructor(){this.title="angular-decodificador"}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=u({type:t,selectors:[["app-root"]],standalone:!0,features:[h],decls:2,vars:0,template:function(r,o){r&1&&g(0,"app-home")(1,"router-outlet")},dependencies:[y,bt,$]});let e=t;return e})();var Kt=[{path:"home",component:$},{path:"**",redirectTo:"home",pathMatch:"full"}];var Jt={providers:[Vt(Kt),xt()]};var Ge={providers:[Ct()]},Qt=yt(Jt,Ge);var Be=()=>_t(Xt,Qt),Hi=Be;export{Hi as a};
