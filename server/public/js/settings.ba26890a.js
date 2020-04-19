(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["settings"],{"26d3":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._m(0),s("div",{staticClass:"container center-div"},[s("form",[s("fieldset",[s("legend",[e._v("API Keys")]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"safebrowsingAPI"}},[e._v("Google Safebrowsing API")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.safebrowsing_api_key,expression:"safebrowsing_api_key"}],staticClass:"form-control",staticStyle:{"background-image":'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII=")',"background-repeat":"no-repeat","background-attachment":"scroll","background-size":"16px 18px","background-position":"98% 50%",cursor:"auto"},attrs:{type:"text",id:"GoogleSafebrowsingInput","aria-describedby":"Google Safebrowsing",placeholder:"Please enter your Google Safebrowsing API Key"},domProps:{value:e.safebrowsing_api_key},on:{input:function(t){t.target.composing||(e.safebrowsing_api_key=t.target.value)}}}),s("small",{staticClass:"form-text text-muted",attrs:{id:"SafebrowsingHelp"}},[e._v("For help acquiring this, please reference: https://www.rsjoomla.com/support/documentation/rsfirewall-user-guide/frequently-asked-questions/how-to-generate-a-google-safe-browsing-api-key.html")])])]),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:e.submitSafebrowsingAPI}},[e._v(" Submit ")]),s("br"),s("br"),s("fieldset",[s("legend",[e._v("Wifi Settings")]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"Wifi SSID"}},[e._v("Wifi SSID")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.wifi_ssid,expression:"wifi_ssid"}],staticClass:"form-control",staticStyle:{"background-image":'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII=")',"background-repeat":"no-repeat","background-attachment":"scroll","background-size":"16px 18px","background-position":"98% 50%",cursor:"auto"},attrs:{type:"text",id:"WifiSSIDInput","aria-describedby":"Wifi SSID",placeholder:"Please enter your Wifi SSID"},domProps:{value:e.wifi_ssid},on:{input:function(t){t.target.composing||(e.wifi_ssid=t.target.value)}}}),s("small",{staticClass:"form-text text-muted",attrs:{id:"WifiSSIDHelp"}},[e._v("For help, please reference: https://www.howtogeek.com/334935/what-is-an-ssid-or-service-set-identifier/")])]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"Wifi Password Help"}},[e._v("Wifi Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.wifi_password,expression:"wifi_password"}],staticClass:"form-control",staticStyle:{"background-image":'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII=")',"background-repeat":"no-repeat","background-attachment":"scroll","background-size":"16px 18px","background-position":"98% 50%",cursor:"auto"},attrs:{type:"password",id:"WifiPasswordInput","aria-describedby":"Wifi Password",placeholder:"Please enter your WiFi password"},domProps:{value:e.wifi_password},on:{input:function(t){t.target.composing||(e.wifi_password=t.target.value)}}}),s("small",{staticClass:"form-text text-muted",attrs:{id:"deviceTypeHelp"}},[e._v("For help acquiring this, please reference: https://www.howtogeek.com/233159/how-to-find-your-wi-fi-password/")])])]),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(t){return e.submitWifi()}}},[e._v(" Submit ")]),s("br"),s("br"),s("fieldset",[s("legend",[e._v("Login Settings")]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"Auth Username"}},[e._v("Username")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user,expression:"user"}],staticClass:"form-control",staticStyle:{"background-image":'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII=")',"background-repeat":"no-repeat","background-attachment":"scroll","background-size":"16px 18px","background-position":"98% 50%",cursor:"auto"},attrs:{type:"text",id:"AuthUsername","aria-describedby":"Auth Username",placeholder:"Please enter your new login username"},domProps:{value:e.user},on:{input:function(t){t.target.composing||(e.user=t.target.value)}}}),s("small",{staticClass:"form-text text-muted",attrs:{id:"WifiSSIDHelp"}},[e._v("This is the username you will use to access the Web Portal.")])]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"Auth Password"}},[e._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user_password,expression:"user_password"}],staticClass:"form-control",staticStyle:{"background-image":'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII=")',"background-repeat":"no-repeat","background-attachment":"scroll","background-size":"16px 18px","background-position":"98% 50%",cursor:"auto"},attrs:{type:"password",id:"AuthPassword","aria-describedby":"Auth Password",placeholder:"Please enter your new login password"},domProps:{value:e.user_password},on:{input:function(t){t.target.composing||(e.user_password=t.target.value)}}}),s("small",{staticClass:"form-text text-muted",attrs:{id:"AuthPassword"}},[e._v("This is the password you will use to access the Web Portal.")])])]),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(t){return e.submitAuth()}}},[e._v(" Submit ")])])])])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"text-center"},[s("div",{staticClass:"my-3"},[s("h1",[e._v("Settings")])])])}],r=(s("b0c0"),s("d3b7"),"api/settings/apikeys"),o="api/settings/wifi",n="api/settings/adduser",A={name:"home",data:function(){return{safebrowsing_api_key:"",wifi_ssid:"",wifi_password:"",user:"",user_password:""}},mounted:function(){var e=this;fetch(r).then((function(e){return e.json()})).then((function(t){for(var s=t.apikeys,i=0;i<s.length;i+=1)"googlesafebrowsing"===s[i].name&&(e.safebrowsing_api_key=s[i].key)})),fetch(o).then((function(e){return e.json()})).then((function(t){e.wifi_ssid=t.ssid}))},methods:{submitWifi:function(){var e={ssid:this.wifi_ssid,password:this.wifi_password};fetch(o,{method:"POST",body:JSON.stringify(e),headers:{"content-type":"application/json"}})},submitSafebrowsingAPI:function(){var e={name:"googlesafebrowsing",key:this.safebrowsing_api_key};fetch(r,{method:"POST",body:JSON.stringify(e),headers:{"content-type":"application/json"}})},submitAuth:function(){var e={username:this.user,password:this.user_password};fetch(n,{method:"POST",body:JSON.stringify(e),headers:{"content-type":"application/json"}})}}},u=A,d=s("2877"),c=Object(d["a"])(u,i,a,!1,null,null,null);t["default"]=c.exports},b0c0:function(e,t,s){var i=s("83ab"),a=s("9bf2").f,r=Function.prototype,o=r.toString,n=/^\s*function ([^ (]*)/,A="name";!i||A in r||a(r,A,{configurable:!0,get:function(){try{return o.call(this).match(n)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=settings.ba26890a.js.map