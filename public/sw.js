if(!self.define){let e,a={};const i=(i,n)=>(i=new URL(i+".js",n).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(a[o])return;let r={};const d=e=>i(e,o),c={module:{uri:o},exports:r,require:d};a[o]=Promise.all(n.map((e=>c[e]||d(e)))).then((e=>(s(...e),r)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/TmsoPbBoiusGzS95BwDT-/_buildManifest.js",revision:"089c43f5d478cfd5ac7b060755ba65aa"},{url:"/_next/static/TmsoPbBoiusGzS95BwDT-/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/212-054479c0ae4a2022.js",revision:"054479c0ae4a2022"},{url:"/_next/static/chunks/224.9477290cda760665.js",revision:"9477290cda760665"},{url:"/_next/static/chunks/251-33605da0e92d8db2.js",revision:"33605da0e92d8db2"},{url:"/_next/static/chunks/253-5c49c279dc339c9e.js",revision:"5c49c279dc339c9e"},{url:"/_next/static/chunks/485.ce2b9487b69b4a43.js",revision:"ce2b9487b69b4a43"},{url:"/_next/static/chunks/555.c141a7f840be0bee.js",revision:"c141a7f840be0bee"},{url:"/_next/static/chunks/929-f7a32a242e8d42c0.js",revision:"f7a32a242e8d42c0"},{url:"/_next/static/chunks/framework-4556c45dd113b893.js",revision:"4556c45dd113b893"},{url:"/_next/static/chunks/main-572b913902beb9f3.js",revision:"572b913902beb9f3"},{url:"/_next/static/chunks/pages/404-f0ec8fbada2bf983.js",revision:"f0ec8fbada2bf983"},{url:"/_next/static/chunks/pages/_app-42df8591263fa75c.js",revision:"42df8591263fa75c"},{url:"/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/_next/static/chunks/pages/index-2650352648616f26.js",revision:"2650352648616f26"},{url:"/_next/static/chunks/pages/login-8910c2ce1dd5b022.js",revision:"8910c2ce1dd5b022"},{url:"/_next/static/chunks/polyfills-0d1b80a048d4787e.js",revision:"40ccea369337cec877151c906f22814d"},{url:"/_next/static/chunks/webpack-74af166e52d0f726.js",revision:"74af166e52d0f726"},{url:"/_next/static/css/1a710c51cc5b6b42.css",revision:"1a710c51cc5b6b42"},{url:"/android/android-launchericon-144-144.png",revision:"59b13869dd49f8b0f9e53e0cb21097a4"},{url:"/android/android-launchericon-192-192.png",revision:"d19709d11f8a08f304d3632d77a81365"},{url:"/android/android-launchericon-48-48.png",revision:"8708613e61b430fee075e92b9d7d58f1"},{url:"/android/android-launchericon-512-512.png",revision:"ad7a5439c52c6d5addc6deb45fb14314"},{url:"/android/android-launchericon-72-72.png",revision:"c102dcfd0d4719686bf736fb47ca9ce0"},{url:"/android/android-launchericon-96-96.png",revision:"ab8e42a6e11b0a8ef1faf4c910b3dad6"},{url:"/calendar.svg",revision:"3b493d918fcd37eef36a82ce35103a0f"},{url:"/favicon.ico",revision:"e66947d6e57b918f6bb1e218a7af344e"},{url:"/ios/100.png",revision:"4826e9221b9d9fedb04b927f6c59e70a"},{url:"/ios/1024.png",revision:"64c8eaecacde6ac81ea97634723572a9"},{url:"/ios/114.png",revision:"58fc2b6a83def940dbb192f2d1bf0b48"},{url:"/ios/120.png",revision:"1892229ab48c4ad1c0f70a79df0a4d73"},{url:"/ios/128.png",revision:"b3ee906d86fe61642695ca0b07dda299"},{url:"/ios/144.png",revision:"59b13869dd49f8b0f9e53e0cb21097a4"},{url:"/ios/152.png",revision:"f8314c11046f76dc346d6f711a3a41df"},{url:"/ios/16.png",revision:"5123501cc6954e5aa9a61c0e620bae95"},{url:"/ios/167.png",revision:"ecf349188bf8733ec771debe5fe77b99"},{url:"/ios/180.png",revision:"d9fb8fe042bab50ad5e8596dfdcb9392"},{url:"/ios/192.png",revision:"d19709d11f8a08f304d3632d77a81365"},{url:"/ios/20.png",revision:"3bb97e246d3fe974f64260ceb6be8d89"},{url:"/ios/256.png",revision:"2830232655af33d0a2339fe5b09dcaff"},{url:"/ios/29.png",revision:"fd308dfcb594c0a85ed040b636c0bf4e"},{url:"/ios/32.png",revision:"c02ff695a82f858b13ef319c6d559819"},{url:"/ios/40.png",revision:"8b8e6b69be87af96ab889dbf568bbc87"},{url:"/ios/50.png",revision:"92891cc181e09067303c0b7257de792e"},{url:"/ios/512.png",revision:"ad7a5439c52c6d5addc6deb45fb14314"},{url:"/ios/57.png",revision:"6314440e07bbe281ea8a32b77a87f464"},{url:"/ios/58.png",revision:"b7c0707afe1b18254ad1b10ebff7c8ae"},{url:"/ios/60.png",revision:"c67f22a4c1a823e8d93ea590cbdcdcc6"},{url:"/ios/64.png",revision:"ff768565191a0c741dd5506c15ce1173"},{url:"/ios/72.png",revision:"c102dcfd0d4719686bf736fb47ca9ce0"},{url:"/ios/76.png",revision:"e39004163f1ff905e24ac617afbd26dc"},{url:"/ios/80.png",revision:"3d76cedb49096c9d4e684747a2879e38"},{url:"/ios/87.png",revision:"8f66a17257ec46316ada42c408d015a8"},{url:"/logo.svg",revision:"cbaa54204cada5523470e3e2c0c1c53a"},{url:"/manifest.json",revision:"de99cd07e8ce0beecfcbcfaaa79c7ec8"},{url:"/windows11/LargeTile.scale-100.png",revision:"6e8d0f1b01cb7469001268165d28571d"},{url:"/windows11/LargeTile.scale-125.png",revision:"ffd3a37623e087f2e783c6e2d89ca169"},{url:"/windows11/LargeTile.scale-150.png",revision:"edc949c23ca80481cdabcac0c6400cdd"},{url:"/windows11/LargeTile.scale-200.png",revision:"0a529687e1a544f0634ec6f36636b045"},{url:"/windows11/LargeTile.scale-400.png",revision:"a0769d8a934dfa3adfa6b8d5617240ce"},{url:"/windows11/SmallTile.scale-100.png",revision:"9048e581bd1e8416aa4fe6a84587fa24"},{url:"/windows11/SmallTile.scale-125.png",revision:"e208014f79857a91d088bf65bdd9bdb7"},{url:"/windows11/SmallTile.scale-150.png",revision:"721d350b2eaec6b3b513984d9ebeffb1"},{url:"/windows11/SmallTile.scale-200.png",revision:"4d5085922a3c12d898cddcc80b9efc9c"},{url:"/windows11/SmallTile.scale-400.png",revision:"eac763f19e3541d5ed3fc692598be825"},{url:"/windows11/SplashScreen.scale-100.png",revision:"06a360e610d298f6c6509b68693a8b25"},{url:"/windows11/SplashScreen.scale-125.png",revision:"db346ba2a943d49df275f1575f237f5d"},{url:"/windows11/SplashScreen.scale-150.png",revision:"4c70ebb6a2b45627954851eeee5ac299"},{url:"/windows11/SplashScreen.scale-200.png",revision:"1201c7a24d855fe4722316ca7260826b"},{url:"/windows11/SplashScreen.scale-400.png",revision:"368bca19f83b113e310baa9a4237d670"},{url:"/windows11/Square150x150Logo.scale-100.png",revision:"4820dbebde14aeb36c78e68cc9c51a47"},{url:"/windows11/Square150x150Logo.scale-125.png",revision:"671a176d01a1999d1766b4617d2ee298"},{url:"/windows11/Square150x150Logo.scale-150.png",revision:"22cb99882561c868fc9c203528ce6d18"},{url:"/windows11/Square150x150Logo.scale-200.png",revision:"cb34ad49394059be00ed3510ad84aff5"},{url:"/windows11/Square150x150Logo.scale-400.png",revision:"d35387bcb781fa011eff6f1a618ed86f"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"2107547728e600b00e64498cb6d0fba3"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"b81d0038987c2baeaf0d336d38092307"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"5a84c3259a5a665c1cce27d0e8395e9e"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"81b5a24dc2522d2d1683a8b8815f5e0b"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"8abbad81d0735fb7ca41427999098c61"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"ffe6be7d6cbadd43551cbece266b6126"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"d68cafe250e67b39b99f83631900687b"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"bf371812d825d7153c35dc62ad43bc4b"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"f0497952afaa5dae8811098d2a0254fe"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"5b1ba4aa47ff3af127adc69097d3a775"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"8f450cc4f498043b01a3d367f7237fda"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"e135517cf45194b068639cce104628c6"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"48783641dca1791e513fa300274c99a0"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"00da84aad52a3ffa100dfc4d76719f46"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"8bfb50302e41aba5dd34c4c9d38a66c8"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"2107547728e600b00e64498cb6d0fba3"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"b81d0038987c2baeaf0d336d38092307"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"5a84c3259a5a665c1cce27d0e8395e9e"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"81b5a24dc2522d2d1683a8b8815f5e0b"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"8abbad81d0735fb7ca41427999098c61"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"ffe6be7d6cbadd43551cbece266b6126"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"d68cafe250e67b39b99f83631900687b"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"bf371812d825d7153c35dc62ad43bc4b"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"f0497952afaa5dae8811098d2a0254fe"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"5b1ba4aa47ff3af127adc69097d3a775"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"8f450cc4f498043b01a3d367f7237fda"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"e135517cf45194b068639cce104628c6"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"48783641dca1791e513fa300274c99a0"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"00da84aad52a3ffa100dfc4d76719f46"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"8bfb50302e41aba5dd34c4c9d38a66c8"},{url:"/windows11/Square44x44Logo.scale-100.png",revision:"f0497952afaa5dae8811098d2a0254fe"},{url:"/windows11/Square44x44Logo.scale-125.png",revision:"09e5637749a13e316f98a183cbc036a8"},{url:"/windows11/Square44x44Logo.scale-150.png",revision:"51f7cae07880234e95a29b1021b0f1f9"},{url:"/windows11/Square44x44Logo.scale-200.png",revision:"d76feb98fcdee15b7c2e915f26384394"},{url:"/windows11/Square44x44Logo.scale-400.png",revision:"12c4de36a37b222d13c14e2388105412"},{url:"/windows11/Square44x44Logo.targetsize-16.png",revision:"2107547728e600b00e64498cb6d0fba3"},{url:"/windows11/Square44x44Logo.targetsize-20.png",revision:"b81d0038987c2baeaf0d336d38092307"},{url:"/windows11/Square44x44Logo.targetsize-24.png",revision:"5a84c3259a5a665c1cce27d0e8395e9e"},{url:"/windows11/Square44x44Logo.targetsize-256.png",revision:"81b5a24dc2522d2d1683a8b8815f5e0b"},{url:"/windows11/Square44x44Logo.targetsize-30.png",revision:"8abbad81d0735fb7ca41427999098c61"},{url:"/windows11/Square44x44Logo.targetsize-32.png",revision:"ffe6be7d6cbadd43551cbece266b6126"},{url:"/windows11/Square44x44Logo.targetsize-36.png",revision:"d68cafe250e67b39b99f83631900687b"},{url:"/windows11/Square44x44Logo.targetsize-40.png",revision:"bf371812d825d7153c35dc62ad43bc4b"},{url:"/windows11/Square44x44Logo.targetsize-44.png",revision:"f0497952afaa5dae8811098d2a0254fe"},{url:"/windows11/Square44x44Logo.targetsize-48.png",revision:"5b1ba4aa47ff3af127adc69097d3a775"},{url:"/windows11/Square44x44Logo.targetsize-60.png",revision:"8f450cc4f498043b01a3d367f7237fda"},{url:"/windows11/Square44x44Logo.targetsize-64.png",revision:"e135517cf45194b068639cce104628c6"},{url:"/windows11/Square44x44Logo.targetsize-72.png",revision:"48783641dca1791e513fa300274c99a0"},{url:"/windows11/Square44x44Logo.targetsize-80.png",revision:"00da84aad52a3ffa100dfc4d76719f46"},{url:"/windows11/Square44x44Logo.targetsize-96.png",revision:"8bfb50302e41aba5dd34c4c9d38a66c8"},{url:"/windows11/StoreLogo.scale-100.png",revision:"92891cc181e09067303c0b7257de792e"},{url:"/windows11/StoreLogo.scale-125.png",revision:"0248dada9fe9334eda3222bcaf47d67a"},{url:"/windows11/StoreLogo.scale-150.png",revision:"a70e3346f34e49fe86a2fdf32cf22c20"},{url:"/windows11/StoreLogo.scale-200.png",revision:"4826e9221b9d9fedb04b927f6c59e70a"},{url:"/windows11/StoreLogo.scale-400.png",revision:"db4fb06c484700d32fda65710f052209"},{url:"/windows11/Wide310x150Logo.scale-100.png",revision:"3412764152cabfb18e165186e8e4dd94"},{url:"/windows11/Wide310x150Logo.scale-125.png",revision:"7590570ddcbfe6e30433553d171448cb"},{url:"/windows11/Wide310x150Logo.scale-150.png",revision:"0c9502c79e2c72196de90598ef576691"},{url:"/windows11/Wide310x150Logo.scale-200.png",revision:"06a360e610d298f6c6509b68693a8b25"},{url:"/windows11/Wide310x150Logo.scale-400.png",revision:"1201c7a24d855fe4722316ca7260826b"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:n})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
