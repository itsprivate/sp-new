(self.webpackChunksp=self.webpackChunksp||[]).push([[929],{5270:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r},t.exports.__esModule=!0,t.exports.default=t.exports},1232:function(t,e,n){var r=n(5270);t.exports=function(t){if(Array.isArray(t))return r(t)},t.exports.__esModule=!0,t.exports.default=t.exports},3061:function(t,e,n){var r=n(742),o=n(1549);function i(e,n,a){return o()?(t.exports=i=Reflect.construct,t.exports.__esModule=!0,t.exports.default=t.exports):(t.exports=i=function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&r(i,n.prototype),i},t.exports.__esModule=!0,t.exports.default=t.exports),i.apply(null,arguments)}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},1549:function(t){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}},t.exports.__esModule=!0,t.exports.default=t.exports},1557:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.__esModule=!0,t.exports.default=t.exports},1359:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},5182:function(t,e,n){var r=n(1232),o=n(1557),i=n(6487),a=n(1359);t.exports=function(t){return r(t)||o(t)||i(t)||a()},t.exports.__esModule=!0,t.exports.default=t.exports},6487:function(t,e,n){var r=n(5270);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports},9539:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CommentCount=void 0;var r=u(n(2784)),o=u(n(3980)),i=n(1192),a=n(6907);function u(t){return t&&t.__esModule?t:{default:t}}function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(){return s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},s.apply(this,arguments)}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e){return d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},d(t,e)}function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h(t);if(e){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}var b=(0,i.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(l,t);var e,n,o,u=m(l);function l(){return f(this,l),u.apply(this,arguments)}return e=l,(n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(t){return this.props!==t&&(0,i.shallowComparison)(this.props,t)}},{key:"componentDidUpdate",value:function(t){this.props.shortname!==t.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"loadInstance",value:function(){var t=window.document;t.getElementById(a.COMMENT_COUNT_SCRIPT_ID)?b():(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/count.js"),a.COMMENT_COUNT_SCRIPT_ID,t.body)}},{key:"cleanInstance",value:function(){var t=window.document;(0,i.removeScript)(a.COMMENT_COUNT_SCRIPT_ID,t.body),window.DISQUSWIDGETS=void 0,(0,i.removeResources)()}},{key:"render",value:function(){var t=this.props,e=(t.shortname,t.config),n=t.children,o=t.className,i=c(t,["shortname","config","children","className"]),u=o?" ".concat(o):"";return r.default.createElement("span",s({},i,{className:"".concat(a.COMMENT_COUNT_CLASS).concat(u),"data-disqus-identifier":e.identifier,"data-disqus-url":e.url}),n)}}])&&p(e.prototype,n),o&&p(e,o),l}(r.default.Component);e.CommentCount=g,g.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string}).isRequired,className:o.default.string,children:o.default.node}},4817:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CommentEmbed=void 0;var r=a(n(2784)),o=a(n(3980)),i=n(6907);function a(t){return t&&t.__esModule?t:{default:t}}function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l.apply(this,arguments)}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e){return p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},p(t,e)}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=y(t);if(e){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(a,t);var e,n,o,i=d(a);function a(){return c(this,a),i.apply(this,arguments)}return e=a,(n=[{key:"getSrc",value:function(){var t=Number(this.props.commentId).toString(36),e=this.props.showParentComment?"1":"0",n=this.props.showMedia?"1":"0";return"https://embed.disqus.com/p/".concat(t,"?p=").concat(e,"&m=").concat(n)}},{key:"render",value:function(){var t=this.props,e=t.width,n=t.height,o=(t.commentId,t.showMedia,t.showParentComment,s(t,["width","height","commentId","showMedia","showParentComment"]));return r.default.createElement("iframe",l({},o,{src:this.getSrc(),width:e,height:n,seamless:"seamless",scrolling:"no",frameBorder:"0"}))}}])&&f(e.prototype,n),o&&f(e,o),a}(r.default.Component);e.CommentEmbed=h,h.defaultProps={showMedia:!0,showParentComment:!0,width:i.COMMENT_EMBED_WIDTH,height:i.COMMENT_EMBED_HEIGHT},h.propTypes={commentId:o.default.string.isRequired,showMedia:o.default.bool,showParentComment:o.default.bool,width:o.default.number,height:o.default.number,className:o.default.string}},792:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DiscussionEmbed=void 0;var r=u(n(2784)),o=u(n(3980)),i=n(1192),a=n(6907);function u(t){return t&&t.__esModule?t:{default:t}}function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(){return s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},s.apply(this,arguments)}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e){return d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},d(t,e)}function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h(t);if(e){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(l,t);var e,n,o,u=m(l);function l(){return f(this,l),u.apply(this,arguments)}return e=l,(n=[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(t){return this.props!==t&&(0,i.shallowComparison)(this.props,t)}},{key:"componentDidUpdate",value:function(t){this.props.shortname!==t.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"loadInstance",value:function(){var t=window.document;window&&window.DISQUS&&t.getElementById(a.EMBED_SCRIPT_ID)?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/embed.js"),a.EMBED_SCRIPT_ID,t.body))}},{key:"cleanInstance",value:function(){var t=window.document;(0,i.removeScript)(a.EMBED_SCRIPT_ID,t.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var e=t.getElementById(a.THREAD_ID);if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);(0,i.removeResources)()}},{key:"getDisqusConfig",value:function(t){return function(){var e=this;this.page.identifier=t.identifier,this.page.url=t.url,this.page.title=t.title,this.page.category_id=t.categoryID,this.page.remote_auth_s3=t.remoteAuthS3,this.page.api_key=t.apiKey,t.language&&(this.language=t.language),a.CALLBACKS.forEach((function(n){e.callbacks[n]=[t[n]]}))}}},{key:"render",value:function(){var t=this.props,e=(t.shortname,t.config,c(t,["shortname","config"]));return r.default.createElement("div",s({},e,{id:a.THREAD_ID}))}}])&&p(e.prototype,n),o&&p(e,o),l}(r.default.Component);e.DiscussionEmbed=b,b.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string,categoryID:o.default.string,remoteAuthS3:o.default.string,apiKey:o.default.string,preData:o.default.func,preInit:o.default.func,onInit:o.default.func,onReady:o.default.func,afterRender:o.default.func,preReset:o.default.func,onIdentify:o.default.func,beforeComment:o.default.func,onNewComment:o.default.func,onPaginate:o.default.func}).isRequired}},185:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Recommendations=void 0;var r=u(n(2784)),o=u(n(3980)),i=n(1192),a=n(6907);function u(t){return t&&t.__esModule?t:{default:t}}function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(){return s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},s.apply(this,arguments)}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e){return d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},d(t,e)}function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h(t);if(e){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(l,t);var e,n,o,u=m(l);function l(){return f(this,l),u.apply(this,arguments)}return e=l,(n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(t){return this.props!==t&&(0,i.shallowComparison)(this.props,t)}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"getDisqusConfig",value:function(t){return function(){this.page.identifier=t.identifier,this.page.url=t.url,this.page.title=t.title,this.language=t.language}}},{key:"loadInstance",value:function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById(a.RECOMMENDATIONS_SCRIPT_ID)?this.reloadInstance():(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/recommendations.js"),a.RECOMMENDATIONS_SCRIPT_ID,window.document.body))}},{key:"reloadInstance",value:function(){window&&window.DISQUS_RECOMMENDATIONS&&window.DISQUS_RECOMMENDATIONS.reset({reload:!0})}},{key:"cleanInstance",value:function(){(0,i.removeScript)(a.RECOMMENDATIONS_SCRIPT_ID,window.document.body);try{delete window.DISQUS_RECOMMENDATIONS}catch(e){window.DISQUS_RECOMMENDATIONS=void 0}var t=window.document.getElementById(a.RECOMMENDATIONS_ID);if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild);(0,i.removeResources)()}},{key:"render",value:function(){var t=this.props,e=(t.shortname,t.config,c(t,["shortname","config"]));return r.default.createElement("div",s({},e,{id:a.RECOMMENDATIONS_ID}))}}])&&p(e.prototype,n),o&&p(e,o),l}(r.default.Component);e.Recommendations=b,b.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string})}},6907:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CALLBACKS=e.RECOMMENDATIONS_SCRIPT_ID=e.RECOMMENDATIONS_ID=e.COMMENT_EMBED_HEIGHT=e.COMMENT_EMBED_WIDTH=e.COMMENT_COUNT_SCRIPT_ID=e.COMMENT_COUNT_CLASS=e.EMBED_SCRIPT_ID=e.THREAD_ID=void 0;e.THREAD_ID="disqus_thread";e.EMBED_SCRIPT_ID="dsq-embed-scr";e.COMMENT_COUNT_CLASS="disqus-comment-count";e.COMMENT_COUNT_SCRIPT_ID="dsq-count-scr";e.COMMENT_EMBED_WIDTH=420;e.COMMENT_EMBED_HEIGHT=320;e.RECOMMENDATIONS_ID="disqus_recommendations";e.RECOMMENDATIONS_SCRIPT_ID="dsq-recs-scr";e.CALLBACKS=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"]},6002:function(t,e,n){"use strict";Object.defineProperty(e,"qw",{enumerable:!0,get:function(){return i.DiscussionEmbed}});var r=n(9539),o=n(4817),i=n(792),a=n(185);r.CommentCount,o.CommentEmbed,i.DiscussionEmbed,a.Recommendations},1192:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.insertScript=function(t,e,n){var r=window.document.createElement("script");return r.async=!0,r.src=t,r.id=e,n.appendChild(r),r},e.removeScript=function(t,e){var n=window.document.getElementById(t);n&&e.removeChild(n)},e.removeResources=function(){window.document.querySelectorAll('link[href*="disquscdn.com/next/embed"], link[href*="disquscdn.com/next/recommendations"], link[href*="disqus.com/next/config.js"], script[src*="disquscdn.com/next/embed"], script[src*="disqus.com/count-data.js"], iframe[title="Disqus"]').forEach((function(t){return t.remove()}))},e.debounce=function(t,e,n){var r;return function(){var o=this,i=arguments,a=function(){r=null,n||t.apply(o,i)},u=n&&!r;window.clearTimeout(r),r=setTimeout(a,e),u&&t.apply(o,i)}},e.isReactElement=u,e.shallowComparison=function t(e,n){var r,o=function(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){u=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw o}}}}(new Set(Object.keys(e),Object.keys(n)));try{for(o.s();!(r=o.n()).done;){var l=r.value;if("object"===i(e[l])){if(t(e[l],n[l]))return!0}else if(e[l]!==n[l]&&!u(e[l]))return!0}}catch(s){o.e(s)}finally{o.f()}return!1};var r,o=(r=n(2784))&&r.__esModule?r:{default:r};function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t){return!!o.default.isValidElement(t)||!!Array.isArray(t)&&t.some((function(t){return o.default.isValidElement(t)}))}},2984:function(t,e,n){"use strict";n(2784);var r=n(7035),o=n(3133),i=n(8031),a=n(8778);e.Z=function(t){var e=t.item,n=t.location,u=t.siteMetadata,l=t.pageContext.locale,s=e.provider,c=e.excerpt,f=e.title,p=[];if(e.parent&&e.parent.localize&&(p=e.parent.localize),s===i.S6){var d=f.split(" - ");f=d[0]+" - "+(0,o.t)("tagline",p,e.tagline,l)}else f=s===i.Ij?(0,o.t)("full_text",p,f,l):(0,o.t)("title",p,f,l);return(c=s===i.oY?(0,o.t)("the_new_excerpt",p,e.parent.the_new_excerpt,l):(0,o.t)("description",p,c,l))||(c=f),(0,a.tZ)("div",null,(0,a.tZ)(r.Z,{title:f,description:c,imageSource:e.imageRemote?e.imageRemote:"",imageAlt:e.imageAlt,pageType:"detail",item:e,location:n,siteMetadata:u}))}},4005:function(t,e,n){"use strict";n.d(e,{Z:function(){return D}});var r=n(8031),o=n(3730),i=n(5714),a=n(2784),u=n(1544),l=n(8778),s=function(t){return(0,l.tZ)(u.Ge.h1,t)},c=n(7896),f=n(9231),p=function(t){return(0,f.tZ)(u.Ge.p,(0,c.Z)({"data-test":"detail-post-date",sx:{color:"textMuted",mb:2}},t))},d=function(t){var e=t.item;return(0,f.tZ)("article",null,(0,f.tZ)("header",null,(0,f.tZ)(p,null,e.date),(0,f.tZ)(i.Z,{post:e}),(0,f.tZ)(s,{sx:{mb:4,mt:3}},e.title)),(0,f.tZ)("section",{sx:{fontSize:"1.125rem",img:{maxWidth:"full",margin:"0 auto",display:"block",pb:4}}},(0,f.tZ)(o.MDXRenderer,null,e.body)))},m=n(7359),y=n(5216),h=n(7156),b=function(t){var e=t.item,n=e.url,r=e.datetime,o=e.author,i=e.authorSlug,a=(0,y.Z)(e.title);return(0,f.tZ)(u.Ge.div,{sx:{maxWidth:"550px",fontSize:2}},(0,f.tZ)(u.Ge.blockquote,{className:"twitter-tweet"},(0,f.tZ)(u.Ge.p,null,a),(0,f.tZ)(h.Z,{item:e}),"— ",o," (@",i,")"," ",(0,f.tZ)(m.rU,{href:n},r)))},g=function(t){var e=t.item,n=e.title,r=e.url,o=e.channel,i=e.channelUrl,l=new URL(r).pathname,s=(0,a.useState)(!0),c=s[0],p=s[1];return(0,f.tZ)("article",null,(0,f.tZ)("div",null,c&&(0,f.tZ)(u.Ge.blockquote,null,(0,f.tZ)(m.rU,{href:r},n),(0,f.tZ)("br",null),"from",(0,f.tZ)(m.rU,{href:i}," /r/"+o))),(0,f.tZ)("div",null,(0,f.tZ)("div",{sx:{position:"relative",pb:"640px"}},(0,f.tZ)("iframe",{id:"reddit-embed",title:n,src:"https://www.redditmedia.com"+l+"?ref_source=embed&amp;ref=share&amp;embed=true",width:"100%",height:"100%",sx:{position:"absolute",top:0,left:0},frameBorder:"0",scrolling:"no",allowFullScreen:!0,sandbox:"allow-scripts allow-same-origin allow-popups",onLoad:function(){p(!1)}}))))},v=function(t){var e=t.item,n=e.url,r=e.datetime,o=e.author,i=e.thirdPartyId;return(0,f.tZ)(u.Ge.root,null,(0,f.tZ)("div",null,(0,f.tZ)("div",{className:"hn-card","data-id":i},(0,f.tZ)(u.Ge.blockquote,null,(0,f.tZ)(u.Ge.p,null,e.title),"— ",o," "," ",(0,f.tZ)(m.rU,{href:n},r)))))},w=function(t){var e=t.item;return(0,f.tZ)("article",null,(0,f.tZ)("header",null,(0,f.tZ)(p,null,e.date),(0,f.tZ)(i.Z,{post:e}),(0,f.tZ)(s,{sx:{mb:4,mt:3}},e.title)),(0,f.tZ)("section",{sx:{fontSize:"1.125rem",img:{maxWidth:"full",margin:"0 auto",display:"block",pb:4}}},e.body))},C=function(t){var e=t.item,n=e.thirdPartyId,r=e.title,o=e.excerpt,i=e.url,l=e.author,s=e.authorUrl,c=(0,a.useState)(!0),p=c[0],d=c[1];return(0,f.tZ)("article",null,(0,f.tZ)("div",null,p&&(0,f.tZ)(u.Ge.blockquote,null,(0,f.tZ)(m.rU,{href:i,sx:{fontSize:2}},r),(0,f.tZ)("p",null,o),"—",(0,f.tZ)(m.rU,{href:s},l))),(0,f.tZ)("div",null,(0,f.tZ)("div",{sx:{position:"relative",pb:"81%"}},(0,f.tZ)("iframe",{title:r,src:"https://cards.producthunt.com/cards/posts/"+n+"?v=1",width:"100%",height:"100%",sx:{position:"absolute",top:0,left:0},frameBorder:"0",scrolling:"no",allowFullScreen:!0,onLoad:function(){d(!1)}}))))},x=function(t){var e=t.item.url;return(0,a.useEffect)((function(){setTimeout((function(){window.location.replace(e)}),10)}),[e]),(0,f.tZ)(u.Ge.root,null,(0,f.tZ)("div",{sx:{overflowWrap:"break-word",pb:6}},(0,f.tZ)("span",null,"Opening "),(0,f.tZ)(m.rU,{sx:{fontSize:0},href:e},e)))},_=n(195),O=function(t){var e=t.item.video;return e&&e.url?(0,f.tZ)("div",{sx:{pb:0}},(0,f.tZ)("div",{sx:{position:"relative",pb:"56.25%"}},(0,f.tZ)(_.Z,{controls:!0,sx:{position:"absolute",top:0,left:0},width:"100%",height:"100%",url:e.url}))):null},S=function(t){var e=t.item,n=e.originalUrl,r=e.author;return(0,f.tZ)("article",null,(0,f.tZ)(u.Ge.div,{sx:{"& > blockquote":function(t){return t.styles.blockquote},"& > div > div":{margin:"0 !important"}}},(0,f.tZ)("blockquote",{className:"instagram-media","data-instgrm-captioned":!0,"data-instgrm-permalink":n,"data-instgrm-version":13,style:{background:"#FFF",border:0,borderRadius:3,boxShadow:"0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",margin:1,maxWidth:540,minWidth:326,padding:0,width:"calc(100% - 2px)"}},(0,f.tZ)("div",{style:{padding:16}},(0,f.tZ)("a",{href:n,style:{background:"#FFFFFF",lineHeight:0,padding:"0 0",textAlign:"center",textDecoration:"none",width:"100%"},target:"_blank",rel:"noreferrer"},(0,f.tZ)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"}},(0,f.tZ)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:"50%",flexGrow:0,height:40,marginRight:14,width:40}}),(0,f.tZ)("div",{style:{display:"flex",flexDirection:"column",flexGrow:1,justifyContent:"center"}},(0,f.tZ)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:4,flexGrow:0,height:14,marginBottom:6,width:100}}),(0,f.tZ)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:4,flexGrow:0,height:14,width:60}}))),(0,f.tZ)("div",{style:{padding:"19% 0"}}),(0,f.tZ)("div",{style:{display:"block",height:50,margin:"0 auto 12px",width:50}},(0,f.tZ)("svg",{width:"50px",height:"50px",viewBox:"0 0 60 60",version:"1.1",xmlns:"https://www.w3.org/2000/svg",xmlnsXlink:"https://www.w3.org/1999/xlink"},(0,f.tZ)("g",{stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},(0,f.tZ)("g",{transform:"translate(-511.000000, -20.000000)",fill:"#000000"},(0,f.tZ)("g",null,(0,f.tZ)("path",{d:"M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"})))))),(0,f.tZ)("div",{style:{paddingTop:8}},(0,f.tZ)("div",{style:{color:"#3897f0",fontFamily:"Arial,sans-serif",fontSize:14,fontStyle:"normal",fontWeight:550,lineHeight:18}},"在 Instagram 查看这篇帖子")),(0,f.tZ)("div",{style:{padding:"12.5% 0"}}),(0,f.tZ)("div",{style:{display:"flex",flexDirection:"row",marginBottom:14,alignItems:"center"}},(0,f.tZ)("div",null,(0,f.tZ)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:"50%",height:"12.5px",width:"12.5px",transform:"translateX(0px) translateY(7px)"}}),(0,f.tZ)("div",{style:{backgroundColor:"#F4F4F4",height:"12.5px",transform:"rotate(-45deg) translateX(3px) translateY(1px)",width:"12.5px",flexGrow:0,marginRight:14,marginLeft:2}}),(0,f.tZ)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:"50%",height:"12.5px",width:"12.5px",transform:"translateX(9px) translateY(-18px)"}})),(0,f.tZ)("div",{style:{marginLeft:8}},(0,f.tZ)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:"50%",flexGrow:0,height:20,width:20}}),(0,f.tZ)("div",{style:{width:0,height:0,borderTop:"2px solid transparent",borderLeft:"6px solid #f4f4f4",borderBottom:"2px solid transparent",transform:"translateX(16px) translateY(-4px) rotate(30deg)"}})),(0,f.tZ)("div",{style:{marginLeft:"auto"}},(0,f.tZ)("div",{style:{width:0,borderTop:"8px solid #F4F4F4",borderRight:"8px solid transparent",transform:"translateY(16px)"}}),(0,f.tZ)("div",{style:{backgroundColor:"#F4F4F4",flexGrow:0,height:12,width:16,transform:"translateY(-4px)"}}),(0,f.tZ)("div",{style:{width:0,height:0,borderTop:"8px solid #F4F4F4",borderLeft:"8px solid transparent",transform:"translateY(-4px) translateX(8px)"}}))),(0,f.tZ)("div",{style:{display:"flex",flexDirection:"column",flexGrow:1,justifyContent:"center",marginBottom:24}},(0,f.tZ)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:4,flexGrow:0,height:14,marginBottom:6,width:224}}),(0,f.tZ)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:4,flexGrow:0,height:14,width:144}}))),(0,f.tZ)("p",{style:{color:"#c9c8cd",fontFamily:"Arial,sans-serif",fontSize:14,lineHeight:17,marginBottom:0,marginTop:8,overflow:"hidden",padding:"8px 0 7px",textAlign:"center",textOverflow:"ellipsis",whiteSpace:"nowrap"}},(0,f.tZ)("a",{href:n,style:{color:"#c9c8cd",fontFamily:"Arial,sans-serif",fontSize:14,fontStyle:"normal",fontWeight:"normal",lineHeight:17,textDecoration:"none"},target:"_blank",rel:"noreferrer"},"@",r," 分享的帖子"))))))},Z=n(3133),I=n(6975),E=function(t){var e=t.item;if(e.__typename===r.vk){var n=e.provider;return n===r.Ij?(0,f.tZ)(b,t):n===r.oY?(0,f.tZ)(g,t):n===r.jK?(0,f.tZ)(v,t):n===r.S6?(0,f.tZ)(C,t):n===r.xT?(0,f.tZ)(x,t):n===r.ro?(0,f.tZ)(O,t):n===r.Eq?(0,f.tZ)(S,t):(0,f.tZ)(w,t)}return e.__typename===r.JT?(0,f.tZ)(d,t):(0,f.tZ)(w,t)},D=function(t){var e=t.item,n=t.pageContext.locale;return(0,f.tZ)("div",null,(0,f.tZ)(u.Ge.blockquote,{sx:{fontSize:2}},(0,Z.YQ)(e,n)),(0,f.tZ)(I.Z,null),(0,f.tZ)(E,t))}},6665:function(t,e,n){"use strict";n.d(e,{Z:function(){return O}});var r=n(9231),o=n(5857),i=n(1544),a=n(8447),u=n(9857),l=n.n(u),s=n(5814),c=n(586),f=n(6002),p=function(t){var e=t.item,n={shortname:t.config.shortname,config:{identifier:e.slug,title:e.title}};return(0,r.tZ)(i.Ge.div,{sx:{pt:3}},(0,r.tZ)(f.qw,n))},d=n(1665),m=n(2784),y=n(8778);var h={name:"i9qxj8",styles:".utterances{max-width:100%;}"},b=function(t){function e(e){var n;return(n=t.call(this,e)||this).commentBox=m.createRef(),n}(0,d.Z)(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this.props.config||{},e={theme:t.theme||"github-light",repo:t.repo,issueTerm:t.issueTerm,label:t.label},n=document.createElement("script");n.setAttribute("src","https://utteranc.es/client.js"),n.setAttribute("crossorigin","anonymous"),n.setAttribute("async",!0),n.setAttribute("theme",e.theme),n.setAttribute("issue-term",e.issueTerm||"pathname"),e.repo&&n.setAttribute("repo",e.repo),e.label&&n.setAttribute("label",e.label),this.commentBox.current.appendChild(n)},n.render=function(){return(0,r.tZ)(i.Ge.div,null,(0,r.tZ)(y.xB,{styles:h}),(0,r.tZ)("div",{ref:this.commentBox}))},e}(m.Component),g=n(5362),v=n(8031),w=n(7359),C=n(3133),x=function(t){var e=t.previous,n=t.next,o=t.item,i=t.pageContext.locale,a=o.title;if(!e&&!n)return null;var u="";if(e){u=e.title;var l=[];e.parent&&e.parent.localize&&(l=e.parent.localize),u=e.__typename===v.vk&&e.provider===v.S6?a+" - "+(0,C.t)("tagline",l,e.tagline,i):e.__typename===v.vk&&e.provider===v.Ij?(0,C.t)("full_text",l,u,i):(0,C.t)("title",l,u,i)}var s="";if(n){s=n.title;var c=[];n.parent&&n.parent.localize&&(c=n.parent.localize),s=n.__typename===v.vk&&n.provider===v.S6?a+" - "+(0,C.t)("tagline",c,n.tagline,i):n.__typename===v.vk&&n.provider===v.Ij?(0,C.t)("full_text",c,s,i):(0,C.t)("title",c,s,i)}return(0,r.tZ)(w.kC,{as:"ul",sx:{flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0,pt:3,pb:3,fontSize:2}},(0,r.tZ)("li",null,e&&(0,r.tZ)(w.rU,{as:g.UE,to:e.slug,rel:"prev"},"← ",u)),(0,r.tZ)("li",null,n&&(0,r.tZ)(w.rU,{as:g.UE,to:n.slug,rel:"next"},s," →")))},_=n(8079),O=function(t){var e=t.item,n=t.basePath,u=t.siteMetadata,f=e.tags,d=u.disqus,m=u.utterances;return(0,r.tZ)("footer",{css:(0,o.iv)({pt:3,pb:4})},f&&f.length>0&&(0,r.tZ)(i.Ge.div,{sx:{display:"flex",flexWrap:"wrap",mb:3,fontSize:2}},f&&f.map((function(t){return(0,r.tZ)(s.Z,{to:(0,a.withPrefix)((0,c.join)(n||"/","tags/"+l()(t))),key:"tag-"+t},t)}))),(0,r.tZ)(_.Z,{basePath:n,siteMetadata:u}),(0,r.tZ)(x,t),d&&d.shortname&&(0,r.tZ)(p,{config:d,item:e}),m&&m.repo&&(0,r.tZ)(b,{config:m,item:e}))}},3730:function(t,e,n){var r=n(3121);t.exports={MDXRenderer:r}},3121:function(t,e,n){var r=n(3061),o=n(5182),i=n(1260),a=n(8834),u=["scope","children"];function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c=n(2784),f=n(4099).mdx,p=n(1364).useMDXScope;t.exports=function(t){var e=t.scope,n=t.children,i=a(t,u),l=p(e),d=c.useMemo((function(){if(!n)return null;var t=s({React:c,mdx:f},l),e=Object.keys(t),i=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(o(e),[""+n])).apply(void 0,[{}].concat(o(i)))}),[n,e]);return c.createElement(d,s({},i))}}}]);
//# sourceMappingURL=427fec74938b5a79ecbb2937f208cd642b64a89f-28a01c04b43d9ea345c6.js.map