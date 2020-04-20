(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["settings"],{"26d3":function(s,t,e){"use strict";e.r(t);var i=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[s._m(0),e("div",{staticClass:"container center-div"},[e("form",{attrs:{onsubmit:"return false"}},[e("fieldset",[e("legend",[s._v("API Keys")]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"safebrowsingAPI"}},[s._v("Google Safebrowsing API")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.safebrowsing_api_key,expression:"safebrowsing_api_key"}],staticClass:"form-control",staticStyle:{"background-image":'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII=")',"background-repeat":"no-repeat","background-attachment":"scroll","background-size":"16px 18px","background-position":"98% 50%",cursor:"auto"},attrs:{type:"text",id:"GoogleSafebrowsingInput","aria-describedby":"Google Safebrowsing",placeholder:"Please enter your Google Safebrowsing API Key"},domProps:{value:s.safebrowsing_api_key},on:{input:function(t){t.target.composing||(s.safebrowsing_api_key=t.target.value)}}}),e("small",{staticClass:"form-text text-muted",attrs:{id:"SafebrowsingHelp"}},[s._v("For help acquiring this, please reference: https://www.rsjoomla.com/support/documentation/rsfirewall-user-guide/frequently-asked-questions/how-to-generate-a-google-safe-browsing-api-key.html")])])]),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:s.submitSafebrowsingAPI}},[s._v(" Submit ")]),e("div",{directives:[{name:"show",rawName:"v-show",value:s.api_show,expression:"api_show"}],staticStyle:{"max-width":"30%"}},[e("br"),e("div",{staticClass:"alert alert-dismissible alert-success"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"},on:{click:s.closeShowAPI}},[s._v(" × ")]),e("strong",[s._v("API Keys Submitted Successfully!")])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:s.noAPIAlertShow,expression:"noAPIAlertShow"}],staticStyle:{"max-width":"50%"}},[e("br"),s._m(1)]),e("br"),e("br"),e("fieldset",[e("legend",[s._v("Wifi Settings")]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"Wifi SSID"}},[s._v("Wifi SSID")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.wifi_ssid,expression:"wifi_ssid"}],staticClass:"form-control",staticStyle:{"background-image":'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII=")',"background-repeat":"no-repeat","background-attachment":"scroll","background-size":"16px 18px","background-position":"98% 50%",cursor:"auto"},attrs:{type:"text",id:"WifiSSIDInput","aria-describedby":"Wifi SSID",placeholder:"Please enter your Wifi SSID"},domProps:{value:s.wifi_ssid},on:{input:function(t){t.target.composing||(s.wifi_ssid=t.target.value)}}}),e("small",{staticClass:"form-text text-muted",attrs:{id:"WifiSSIDHelp"}},[s._v("For help, please reference: https://www.howtogeek.com/334935/what-is-an-ssid-or-service-set-identifier/")])]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"Wifi Password Help"}},[s._v("Wifi Password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.wifi_password,expression:"wifi_password"}],staticClass:"form-control",staticStyle:{"background-image":'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII=")',"background-repeat":"no-repeat","background-attachment":"scroll","background-size":"16px 18px","background-position":"98% 50%",cursor:"auto"},attrs:{type:"password",id:"WifiPasswordInput","aria-describedby":"Wifi Password",placeholder:"Please enter your WiFi password"},domProps:{value:s.wifi_password},on:{input:function(t){t.target.composing||(s.wifi_password=t.target.value)}}}),e("br"),e("input",{directives:[{name:"model",rawName:"v-model",value:s.wifi_password_validation,expression:"wifi_password_validation"}],staticClass:"form-control",staticStyle:{"background-image":'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII=")',"background-repeat":"no-repeat","background-attachment":"scroll","background-size":"16px 18px","background-position":"98% 50%",cursor:"auto"},attrs:{type:"password",id:"WifiPasswordInputVal","aria-describedby":"Wifi Password Validation",placeholder:"Please re-enter your WiFi password"},domProps:{value:s.wifi_password_validation},on:{input:function(t){t.target.composing||(s.wifi_password_validation=t.target.value)}}})])]),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:s.submitWifi}},[s._v(" Submit ")]),e("div",{directives:[{name:"show",rawName:"v-show",value:s.wifi_show,expression:"wifi_show"}],staticStyle:{"max-width":"30%"}},[e("br"),e("div",{staticClass:"alert alert-dismissible alert-success"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"},on:{click:s.closeShowWifi}},[s._v(" × ")]),e("strong",[s._v("WiFi SSID And Password Submitted Successfully!")])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:s.wifi_fail_show,expression:"wifi_fail_show"}],staticStyle:{"max-width":"30%"}},[e("br"),e("div",{staticClass:"alert alert-dismissible alert-danger"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"},on:{click:s.closeShowWifiFail}},[s._v(" × ")]),e("strong",[s._v("Wifi Passwords Don't Match! Try Again!")])])]),e("br"),e("br"),e("fieldset",[e("legend",[s._v("Login Settings")]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"Auth Username"}},[s._v("Username")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.user,expression:"user"}],staticClass:"form-control",staticStyle:{"background-image":'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII=")',"background-repeat":"no-repeat","background-attachment":"scroll","background-size":"16px 18px","background-position":"98% 50%",cursor:"auto"},attrs:{type:"text",id:"AuthUsername","aria-describedby":"Auth Username",placeholder:"Please enter your new login username"},domProps:{value:s.user},on:{input:function(t){t.target.composing||(s.user=t.target.value)}}}),e("small",{staticClass:"form-text text-muted",attrs:{id:"WifiSSIDHelp"}},[s._v("This is the username you will use to access the Web Portal.")])]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"Auth Password"}},[s._v("Password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.user_password,expression:"user_password"}],staticClass:"form-control",staticStyle:{"background-image":'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII=")',"background-repeat":"no-repeat","background-attachment":"scroll","background-size":"16px 18px","background-position":"98% 50%",cursor:"auto"},attrs:{type:"password",id:"AuthPassword","aria-describedby":"Auth Password",placeholder:"Please enter your new login password"},domProps:{value:s.user_password},on:{input:function(t){t.target.composing||(s.user_password=t.target.value)}}}),e("small",{staticClass:"form-text text-muted",attrs:{id:"AuthPassword"}},[s._v("This is the password you will use to access the Web Portal.")]),e("br"),e("input",{directives:[{name:"model",rawName:"v-model",value:s.user_password_validation,expression:"user_password_validation"}],staticClass:"form-control",staticStyle:{"background-image":'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII=")',"background-repeat":"no-repeat","background-attachment":"scroll","background-size":"16px 18px","background-position":"98% 50%",cursor:"auto"},attrs:{type:"password",id:"AuthPasswordVal","aria-describedby":"Auth Password",placeholder:"Please re-enter your new login password"},domProps:{value:s.user_password_validation},on:{input:function(t){t.target.composing||(s.user_password_validation=t.target.value)}}}),e("small",{staticClass:"form-text text-muted",attrs:{id:"AuthPassword"}},[s._v("This is the password you will use to access the Web Portal.")])])]),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:s.submitAuth}},[s._v(" Submit ")]),e("div",{directives:[{name:"show",rawName:"v-show",value:s.auth_show,expression:"auth_show"}],staticStyle:{"max-width":"30%"}},[e("br"),e("div",{staticClass:"alert alert-dismissible alert-success"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"},on:{click:s.closeShowAuth}},[s._v(" × ")]),e("strong",[s._v("Login Username And Password Submitted Successfully!")])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:s.auth_fail_show,expression:"auth_fail_show"}],staticStyle:{"max-width":"30%"}},[e("br"),e("div",{staticClass:"alert alert-dismissible alert-danger"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"},on:{click:s.closeShowAuthFail}},[s._v(" × ")]),e("strong",[s._v("Login Passwords Don't Match! Try Again!")])])]),e("br"),e("br"),e("fieldset",[e("legend",[s._v("Expiry Settings")]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"RegisteredDevicyExpiry"}},[s._v("Alert Expiry Time")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.alert_expiry,expression:"alert_expiry"}],staticClass:"form-control",staticStyle:{"background-image":'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII=")',"background-repeat":"no-repeat","background-attachment":"scroll","background-size":"16px 18px","background-position":"98% 50%",cursor:"auto"},attrs:{type:"text",id:"AlertExpiryForm","aria-describedby":"Alert Expiry",placeholder:"Please enter the number of days you would like to store alerts"},domProps:{value:s.alert_expiry},on:{input:function(t){t.target.composing||(s.alert_expiry=t.target.value)}}}),e("small",{staticClass:"form-text text-muted",attrs:{id:"AlertExpiryHelp"}},[s._v("This is the amount of days an alert will stay stored until expiring. Numbers less than 1 store them indefinitely.")])])]),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:s.submitExpiry}},[s._v(" Submit ")]),e("div",{directives:[{name:"show",rawName:"v-show",value:s.expiry_show,expression:"expiry_show"}],staticStyle:{"max-width":"30%"}},[e("br"),e("div",{staticClass:"alert alert-dismissible alert-success"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"},on:{click:s.closeShowExpiry}},[s._v(" × ")]),e("strong",[s._v("Expiry Settings Submitted Successfully!")])])])]),e("br"),e("br"),e("h2",[s._v("Reset Options")]),e("br"),e("h4",[s._v("Click the button below to delete all registered devices")]),e("br"),e("button",{staticClass:"btn btn-danger",attrs:{type:"submit"},on:{click:s.clearDevices}},[s._v(" Delete Devices ")]),e("div",{directives:[{name:"show",rawName:"v-show",value:s.clear_devices_show,expression:"clear_devices_show"}],staticStyle:{"max-width":"30%"}},[e("br"),e("div",{staticClass:"alert alert-dismissible alert-success"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"},on:{click:s.closeShowClearDevices}},[s._v(" × ")]),e("strong",[s._v("Registered Devices Deleted Successfully!")])])]),e("br"),e("br"),e("h4",[s._v("Click the button below to delete all Alerts")]),e("br"),e("button",{staticClass:"btn btn-danger",attrs:{type:"submit"},on:{click:s.clearAlerts}},[s._v(" Delete Alerts ")]),e("div",{directives:[{name:"show",rawName:"v-show",value:s.clear_alerts_show,expression:"clear_alerts_show"}],staticStyle:{"max-width":"30%"}},[e("br"),e("div",{staticClass:"alert alert-dismissible alert-success"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"},on:{click:s.closeShowClearAlerts}},[s._v(" × ")]),e("strong",[s._v("Alerts Deleted Successfully!")])])])]),e("br"),e("br")])},a=[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"text-center"},[e("div",{staticClass:"my-3"},[e("h1",[s._v("Settings")])])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"alert alert-dismissible alert-danger"},[e("strong",[s._v("The IDS Module will not function without this API Key")])])}],r=(e("b0c0"),e("d3b7"),"api/settings/apikeys"),o="api/settings/wifi",n="api/settings/adduser",l="api/alerts/clear",c="api/devices/clear",d="api/settings/expiry",A={name:"home",data:function(){return{safebrowsing_api_key:"_",wifi_ssid:"",wifi_password:"",wifi_password_validation:"",user:"",user_password:"",user_password_validation:"",alert_expiry:"",api_show:!1,wifi_show:!1,auth_show:!1,clear_devices_show:!1,clear_alerts_show:!1,wifi_fail_show:!1,auth_fail_show:!1,expiry_show:!1}},mounted:function(){var s=this;fetch(r).then((function(s){return s.json()})).then((function(t){for(var e=t.apikeys,i=0;i<e.length;i+=1)"googlesafebrowsing"===e[i].name&&(s.safebrowsing_api_key=e[i].key)})),fetch(o).then((function(s){return s.json()})).then((function(t){s.wifi_ssid=t.ssid})),fetch(d).then((function(s){return s.json()})).then((function(t){s.alert_expiry=t.alert}))},methods:{submitWifi:function(){if(this.wifi_password===this.wifi_password_validation){var s={ssid:this.wifi_ssid,password:this.wifi_password};fetch(o,{method:"POST",body:JSON.stringify(s),headers:{"content-type":"application/json"}}),this.wifi_fail_show=!1,this.wifi_show=!0}else this.wifi_show=!1,this.wifi_fail_show=!0},submitSafebrowsingAPI:function(){var s={name:"googlesafebrowsing",key:this.safebrowsing_api_key};fetch(r,{method:"POST",body:JSON.stringify(s),headers:{"content-type":"application/json"}}),this.api_show=!0},submitAuth:function(){if(this.user_password===this.user_password_validation){var s={username:this.user,password:this.user_password};fetch(n,{method:"POST",body:JSON.stringify(s),headers:{"content-type":"application/json"}}),this.auth_fail_show=!1,this.auth_show=!0}else this.auth_show=!1,this.auth_fail_show=!0},clearDevices:function(){fetch(c,{method:"POST",body:JSON.stringify({}),headers:{"content-type":"application/json"}}),this.clear_devices_show=!0},clearAlerts:function(){fetch(l,{method:"POST",body:JSON.stringify({}),headers:{"content-type":"application/json"}}),this.clear_alerts_show=!0},submitExpiry:function(){var s={alert:this.alert_expiry};fetch(d,{method:"POST",body:JSON.stringify(s),headers:{"content-type":"application/json"}}),this.expiry_show=!0},closeShowAPI:function(){this.api_show=!1},closeShowWifi:function(){this.wifi_show=!1},closeShowAuth:function(){this.auth_show=!1},closeShowClearAlerts:function(){this.clear_alerts_show=!1},closeShowClearDevices:function(){this.clear_devices_show=!1},closeShowWifiFail:function(){this.wifi_fail_show=!1},closeShowAuthFail:function(){this.auth_fail_show=!1},closeShowExpiry:function(){this.expiry_show=!1}},computed:{noAPIAlertShow:function(){return""===this.safebrowsing_api_key}}},u=A,w=e("2877"),p=Object(w["a"])(u,i,a,!1,null,null,null);t["default"]=p.exports},b0c0:function(s,t,e){var i=e("83ab"),a=e("9bf2").f,r=Function.prototype,o=r.toString,n=/^\s*function ([^ (]*)/,l="name";!i||l in r||a(r,l,{configurable:!0,get:function(){try{return o.call(this).match(n)[1]}catch(s){return""}}})}}]);
//# sourceMappingURL=settings.7dd9d355.js.map