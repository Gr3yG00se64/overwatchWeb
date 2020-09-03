(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["settings"],{"26d3":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._m(0),s("div",{staticClass:"container center-div"},[s("form",{attrs:{onsubmit:"return false"}},[s("fieldset",[s("legend",[e._v("API Keys")]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"safebrowsingAPI"}},[e._v("Google Safebrowsing API")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.safebrowsing_api_key,expression:"safebrowsing_api_key"}],staticClass:"form-control",staticStyle:{"background-image":'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII=")',"background-repeat":"no-repeat","background-attachment":"scroll","background-size":"16px 18px","background-position":"98% 50%",cursor:"auto"},attrs:{type:"text",id:"GoogleSafebrowsingInput","aria-describedby":"Google Safebrowsing",placeholder:"Please enter your Google Safebrowsing API Key"},domProps:{value:e.safebrowsing_api_key},on:{input:function(t){t.target.composing||(e.safebrowsing_api_key=t.target.value)}}}),s("small",{staticClass:"form-text text-muted",attrs:{id:"SafebrowsingHelp"}},[e._v("For help acquiring this, please reference: https://www.rsjoomla.com/support/documentation/rsfirewall-user-guide/frequently-asked-questions/how-to-generate-a-google-safe-browsing-api-key.html")])])]),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:e.submitSafebrowsingAPI}},[e._v(" Submit ")]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.api_show,expression:"api_show"}],staticStyle:{"max-width":"30%"}},[s("br"),s("div",{staticClass:"alert alert-dismissible alert-success"},[s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"},on:{click:e.closeShowAPI}},[e._v(" × ")]),s("strong",[e._v("API Keys Submitted Successfully!")])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.noAPIAlertShow,expression:"noAPIAlertShow"}],staticStyle:{"max-width":"50%"}},[s("br"),e._m(1)]),s("br"),s("br"),s("fieldset",[s("legend",[e._v("Login Settings")]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"Auth Username"}},[e._v("Username")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user,expression:"user"}],staticClass:"form-control",staticStyle:{"background-image":'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII=")',"background-repeat":"no-repeat","background-attachment":"scroll","background-size":"16px 18px","background-position":"98% 50%",cursor:"auto"},attrs:{type:"text",id:"AuthUsername","aria-describedby":"Auth Username",placeholder:"Please enter your new login username"},domProps:{value:e.user},on:{input:function(t){t.target.composing||(e.user=t.target.value)}}}),s("small",{staticClass:"form-text text-muted",attrs:{id:"WifiSSIDHelp"}},[e._v("This is the username you will use to access the Web Portal.")])]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"Auth Password"}},[e._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user_password,expression:"user_password"}],staticClass:"form-control",staticStyle:{"background-image":'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII=")',"background-repeat":"no-repeat","background-attachment":"scroll","background-size":"16px 18px","background-position":"98% 50%",cursor:"auto"},attrs:{type:"password",id:"AuthPassword","aria-describedby":"Auth Password",placeholder:"Please enter your new login password"},domProps:{value:e.user_password},on:{input:function(t){t.target.composing||(e.user_password=t.target.value)}}}),s("small",{staticClass:"form-text text-muted",attrs:{id:"AuthPassword"}},[e._v("This is the password you will use to access the Web Portal.")]),s("br"),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user_password_validation,expression:"user_password_validation"}],staticClass:"form-control",staticStyle:{"background-image":'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII=")',"background-repeat":"no-repeat","background-attachment":"scroll","background-size":"16px 18px","background-position":"98% 50%",cursor:"auto"},attrs:{type:"password",id:"AuthPasswordVal","aria-describedby":"Auth Password",placeholder:"Please re-enter your new login password"},domProps:{value:e.user_password_validation},on:{input:function(t){t.target.composing||(e.user_password_validation=t.target.value)}}}),s("small",{staticClass:"form-text text-muted",attrs:{id:"AuthPassword"}},[e._v("This is the password you will use to access the Web Portal.")])])]),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:e.submitAuth}},[e._v(" Submit ")]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.auth_show,expression:"auth_show"}],staticStyle:{"max-width":"30%"}},[s("br"),s("div",{staticClass:"alert alert-dismissible alert-success"},[s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"},on:{click:e.closeShowAuth}},[e._v(" × ")]),s("strong",[e._v("Login Username And Password Submitted Successfully!")])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.auth_fail_show,expression:"auth_fail_show"}],staticStyle:{"max-width":"30%"}},[s("br"),s("div",{staticClass:"alert alert-dismissible alert-danger"},[s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"},on:{click:e.closeShowAuthFail}},[e._v(" × ")]),s("strong",[e._v("Login Passwords Don't Match! Try Again!")])])]),s("br"),s("br"),s("fieldset",[s("legend",[e._v("Expiry Settings")]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"RegisteredDevicyExpiry"}},[e._v("Alert Expiry Time")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.alert_expiry,expression:"alert_expiry"}],staticClass:"form-control",staticStyle:{"background-image":'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII=")',"background-repeat":"no-repeat","background-attachment":"scroll","background-size":"16px 18px","background-position":"98% 50%",cursor:"auto"},attrs:{type:"text",id:"AlertExpiryForm","aria-describedby":"Alert Expiry",placeholder:"Please enter the number of days you would like to store alerts"},domProps:{value:e.alert_expiry},on:{input:function(t){t.target.composing||(e.alert_expiry=t.target.value)}}}),s("small",{staticClass:"form-text text-muted",attrs:{id:"AlertExpiryHelp"}},[e._v("This is the amount of days an alert will stay stored until expiring. Numbers less than 1 store them indefinitely.")])])]),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:e.submitExpiry}},[e._v(" Submit ")]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.expiry_show,expression:"expiry_show"}],staticStyle:{"max-width":"30%"}},[s("br"),s("div",{staticClass:"alert alert-dismissible alert-success"},[s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"},on:{click:e.closeShowExpiry}},[e._v(" × ")]),s("strong",[e._v("Expiry Settings Submitted Successfully!")])])])]),s("br"),s("br"),s("h2",[e._v("Reset Options")]),s("br"),s("h4",[e._v("Click the button below to delete all registered devices")]),s("br"),s("button",{staticClass:"btn btn-danger",attrs:{type:"submit"},on:{click:e.clearDevices}},[e._v(" Delete Devices ")]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.clear_devices_show,expression:"clear_devices_show"}],staticStyle:{"max-width":"30%"}},[s("br"),s("div",{staticClass:"alert alert-dismissible alert-success"},[s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"},on:{click:e.closeShowClearDevices}},[e._v(" × ")]),s("strong",[e._v("Registered Devices Deleted Successfully!")])])]),s("br"),s("br"),s("h4",[e._v("Click the button below to delete all Alerts")]),s("br"),s("button",{staticClass:"btn btn-danger",attrs:{type:"submit"},on:{click:e.clearAlerts}},[e._v(" Delete Alerts ")]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.clear_alerts_show,expression:"clear_alerts_show"}],staticStyle:{"max-width":"30%"}},[s("br"),s("div",{staticClass:"alert alert-dismissible alert-success"},[s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"},on:{click:e.closeShowClearAlerts}},[e._v(" × ")]),s("strong",[e._v("Alerts Deleted Successfully!")])])])]),s("br"),s("br")])},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"text-center"},[s("div",{staticClass:"my-3"},[s("h1",[e._v("Settings")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"alert alert-dismissible alert-danger"},[s("strong",[e._v("The IDS Module will not function without this API Key")])])}],r=(s("b0c0"),s("d3b7"),"api/settings/apikeys"),o="api/settings/adduser",n="api/alerts/clear",l="api/devices/clear",c="api/settings/expiry",u={name:"home",data:function(){return{safebrowsing_api_key:" ",user:"",user_password:"",user_password_validation:"",alert_expiry:"",api_show:!1,auth_show:!1,clear_devices_show:!1,clear_alerts_show:!1,auth_fail_show:!1,expiry_show:!1}},mounted:function(){var e=this;fetch(r).then((function(e){return e.json()})).then((function(t){for(var s=t.apikeys,a=0;a<s.length;a+=1)"googlesafebrowsing"===s[a].name&&(e.safebrowsing_api_key=s[a].key)})),fetch(c).then((function(e){return e.json()})).then((function(t){e.alert_expiry=t.alert}))},methods:{submitSafebrowsingAPI:function(){this.api_show=!1;var e={name:"googlesafebrowsing",key:this.safebrowsing_api_key};fetch(r,{method:"POST",body:JSON.stringify(e),headers:{"content-type":"application/json"}}),this.api_show=!0},submitAuth:function(){if(this.user_password===this.user_password_validation){var e={username:this.user,password:this.user_password};fetch(o,{method:"POST",body:JSON.stringify(e),headers:{"content-type":"application/json"}}),this.auth_fail_show=!1,this.auth_show=!0}else this.auth_show=!1,this.auth_fail_show=!0},clearDevices:function(){this.clear_devices_show=!1,fetch(l,{method:"POST",body:JSON.stringify({}),headers:{"content-type":"application/json"}}),this.clear_devices_show=!0},clearAlerts:function(){this.clear_alerts_show=!1,fetch(n,{method:"POST",body:JSON.stringify({}),headers:{"content-type":"application/json"}}),this.clear_alerts_show=!0},submitExpiry:function(){this.expiry_show=!1;var e={alert:this.alert_expiry};fetch(c,{method:"POST",body:JSON.stringify(e),headers:{"content-type":"application/json"}}),this.expiry_show=!0},closeShowAPI:function(){this.api_show=!1},closeShowAuth:function(){this.auth_show=!1},closeShowClearAlerts:function(){this.clear_alerts_show=!1},closeShowClearDevices:function(){this.clear_devices_show=!1},closeShowAuthFail:function(){this.auth_fail_show=!1},closeShowExpiry:function(){this.expiry_show=!1}},computed:{noAPIAlertShow:function(){return""===this.safebrowsing_api_key}}},d=u,A=s("2877"),w=Object(A["a"])(d,a,i,!1,null,null,null);t["default"]=w.exports},b0c0:function(e,t,s){var a=s("83ab"),i=s("9bf2").f,r=Function.prototype,o=r.toString,n=/^\s*function ([^ (]*)/,l="name";!a||l in r||i(r,l,{configurable:!0,get:function(){try{return o.call(this).match(n)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=settings.1a0fd74c.js.map