/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 97212:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 34820:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 34655:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 57885:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 66755:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 54789:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(20745);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(79655);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var react_router_dist = __webpack_require__(89250);
// EXTERNAL MODULE: ./node_modules/@ant-design/cssinjs/es/index.js + 34 modules
var es = __webpack_require__(28987);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(50886);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(76801);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(43843);
// EXTERNAL MODULE: ./node_modules/@wagmi/core/dist/chunk-GISSYJN5.js + 5 modules
var chunk_GISSYJN5 = __webpack_require__(11841);
// EXTERNAL MODULE: ./node_modules/@wagmi/core/dist/providers/public.js + 1 modules
var providers_public = __webpack_require__(99528);
// EXTERNAL MODULE: ./node_modules/lodash/memoize.js
var memoize = __webpack_require__(88306);
var memoize_default = /*#__PURE__*/__webpack_require__.n(memoize);
// EXTERNAL MODULE: ./node_modules/@wagmi/chains/dist/index.mjs
var chains_dist = __webpack_require__(31407);
;// CONCATENATED MODULE: ./src/utils/wagmi.ts









// export const bsc = {
// 	id: 56,
// 	name: 'BSC',
// 	network: 'Bsc',
// 	// rpcUrls: {
// 	//   default: {
// 	// 	http: ['https://rpc.ankr.com/bsc'],
// 	//   },
// 	//   public: {
// 	// 	http: ['https://rpc.ankr.com/bsc'],
// 	//   },
// 	// },
// 	rpcUrls: {
// 		public: 'https://bsc-dataseed1.binance.org',
// 		default: 'https://bsc-dataseed1.binance.org',
// 	  },
// 	// rpcUrls: {
// 	// 	default: {
// 	// 	  http: ['https://bsc-dataseed.binance.org/'],
// 	// 	},
// 	// 	public: {
// 	// 	  http: ['https://bsc-dataseed.binance.org/'],
// 	// 	},
// 	//   },
// 	blockExplorers: {
// 	  default: {
// 		name: 'BscScan',
// 		url: 'https://bscscan.com',
// 	  },
// 	  etherscan: {
// 		name: 'BscScan',
// 		url: 'https://bscscan.com',
// 	  },
// 	},
// 	nativeCurrency: {
// 	  name: 'BNB',
// 	  symbol: 'BNB',
// 	  decimals: 18,
// 	},
// }

// export const bscTest = {
// 	id: 97,
// 	name: 'BSCTest',
// 	network: 'BSCTest',
// 	rpcUrls: {
// 	  default: {
// 		http: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
// 	  },
// 	  public: {
// 		http: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
// 	  },
// 	},
// 	blockExplorers: {
// 	  default: {
// 		name: 'BscScan',
// 		url: 'https://testnet.bscscan.com',
// 	  },
// 	  etherscan: {
// 		name: 'BscScan',
// 		url: 'https://testnet.bscscan.com',
// 	  },
// 	},
// 	nativeCurrency: {
// 	  name: 'BNB',
// 	  symbol: 'tBNB',
// 	  decimals: 18,
// 	},
// }

// const getNodeRealUrl = (networkName) => {
// 	let host = null

// 	switch (networkName) {
// 	  case 'homestead':
// 		if (process.env.NEXT_PUBLIC_NODE_REAL_API_ETH) {
// 		  host = `eth-mainnet.nodereal.io/v1/${process.env.NEXT_PUBLIC_NODE_REAL_API_ETH}`
// 		}
// 		break
// 	  case 'rinkeby':
// 		if (process.env.NEXT_PUBLIC_NODE_REAL_API_RINKEBY) {
// 		  host = `eth-rinkeby.nodereal.io/v1/${process.env.NEXT_PUBLIC_NODE_REAL_API_RINKEBY}`
// 		}
// 		break
// 	  case 'goerli':
// 		if (process.env.NEXT_PUBLIC_NODE_REAL_API_GOERLI) {
// 		  host = `eth-goerli.nodereal.io/v1/${process.env.NEXT_PUBLIC_NODE_REAL_API_GOERLI}`
// 		}
// 		break
// 	  default:
// 		host = null
// 	}

// 	if (!host) {
// 	  return null
// 	}

// 	const url = `https://${host}`
// 	return {
// 	  http: url,
// 	  webSocket: url.replace(/^http/i, 'wss').replace('.nodereal.io/v1', '.nodereal.io/ws/v1'),
// 	}
// }

// export const { provider, chains } = configureChains(CHAINS, [
// 	publicProvider()
// ])

// export const { chains, provider } = configureChains(
// 	[
// 	  bsc,
// 	],
// 	// [publicProvider()],
// 	[
// 		jsonRpcProvider({
// 			rpc: (chain) => {
// 				// if (chain.id === bsc.id) {
// 				// 	console.log('kkkk')
// 				// 	return { http: process.env.NEXT_PUBLIC_NODE_PRODUCTION }
// 				// }
// 			//   if (!!process.env.NEXT_PUBLIC_NODE_PRODUCTION && chain.id === bsc.id) {
// 			// 	// return { http: process.env.NEXT_PUBLIC_NODE_PRODUCTION }
// 			//   }
// 			//   return getNodeRealUrl(chain.network) || { http: chain.rpcUrls.default }
// 			},
// 		}),
// 	],
// )

// const CHAINS = [
// 	bsc,
// ]

// export const { provider, chains } = configureChains(
// 	[
// 	  bsc,
// 	],
// 	[publicProvider()],
// )

var _configureChains = (0,chunk_GISSYJN5/* configureChains */.QB)([chains_dist/* bsc */.eG
  //   bscTestnet,
  ], [(0,providers_public/* publicProvider */.I)()]
  // [alchemyProvider({ apiKey: AlchemyApiKey }), publicProvider()],
  ),
  provider = _configureChains.provider,
  chains = _configureChains.chains;

var CHAIN_IDS = chains.map(function (c) {
  return c.id;
});
var isChainSupported = memoize_default()(function (chainId) {
  return CHAIN_IDS.includes(chainId);
});
// EXTERNAL MODULE: ./node_modules/wagmi/dist/index.js + 22 modules
var wagmi_dist = __webpack_require__(62724);
// EXTERNAL MODULE: ./node_modules/@wagmi/connectors/dist/chunk-2VZS2JHJ.js
var chunk_2VZS2JHJ = __webpack_require__(66480);
// EXTERNAL MODULE: ./node_modules/@wagmi/connectors/dist/metaMask.js
var metaMask = __webpack_require__(25078);
// EXTERNAL MODULE: ./node_modules/i18next/dist/esm/i18next.js
var i18next = __webpack_require__(36609);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/index.js + 15 modules
var dist_es = __webpack_require__(91072);
;// CONCATENATED MODULE: ./i18n.ts



const resources = {
  en: {
    translation: __webpack_require__(64130),
  },
  zhCN: {
    translation: __webpack_require__(96361),
  },
  zhTW: {
    translation: __webpack_require__(43600),
  },
  ptBR: {
    translation: __webpack_require__(83501),
  },
  frFR: {
    translation: __webpack_require__(216),
  },
  jaJP: {
    translation: __webpack_require__(58491),
  },
  koKR: {
    translation: __webpack_require__(89233),
  },
  trTR: {
    translation: __webpack_require__(16522),
  },
  viVN: {
    translation: __webpack_require__(80995),
  },
  mlNP: {
    translation: __webpack_require__(24473),
  },
  tgAP: {
    translation: __webpack_require__(70264),
  },
}
i18next/* default.use */.ZP.use(dist_es/* initReactI18next */.Db).init({
  resources,
  // fallbackLng: 'en',
  lng: "en",
  // debug: true,
  // interpolation: {
  //   escapeValue: false,
  // },
})

/* harmony default export */ const i18n_0 = ((/* unused pure expression or super */ null && (i18n)));

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(89730);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(15286);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(752);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(60228);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(76265);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.js
var web_url = __webpack_require__(78730);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.js
var web_url_search_params = __webpack_require__(79307);
// EXTERNAL MODULE: ./node_modules/jotai/esm/index.mjs + 1 modules
var esm = __webpack_require__(43582);
;// CONCATENATED MODULE: ./src/hook/useSessionChainId.ts

var sessionChainIdAtom = (0,esm/* atom */.cn)(0);
var useSessionChainId = function useSessionChainId() {
  return useAtom(sessionChainIdAtom);
};
;// CONCATENATED MODULE: ./src/hook/useWallet.ts








// import { useRouter } from 'next/router'


function useConnectWallet() {
  var _useConnect = (0,wagmi_dist/* useConnect */.$4)({
      connector: new chunk_2VZS2JHJ/* InjectedConnector */._()
    }),
    connect = _useConnect.connect;
  return connect;
}
function useGetOwnAddress() {
  var _useAccount = (0,wagmi_dist/* useAccount */.mA)(),
    address = _useAccount.address,
    isConnected = _useAccount.isConnected;
  return {
    address,
    isConnected
  };
}
var queryChainIdAtom = (0,esm/* atom */.cn)(-1);
queryChainIdAtom.onMount = function (set) {
  var params = new URL(window.location.href).searchParams;
  var c = params.get('chainId');
  if (isChainSupported(+c)) {
    set(+c);
  } else {
    set(0);
  }
};
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 39 modules
var message = __webpack_require__(68314);
;// CONCATENATED MODULE: ./public/images/logo.png
const logo_namespaceObject = __webpack_require__.p + "38c370a4b1adb7f82c54.png";
;// CONCATENATED MODULE: ./public/images/lanu.png
const lanu_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAAhBJREFUSEu1lU2IjnEUxX+HkJpirEQyGCNEyUqaNTN2s8QgRT7Lhh2LsTMb5atImXws7cwMW8lKilAzyCSyIjUlZK6O7qPH6x2ed3j/q7f3uffc+z/n3PsXFU9EzARagHFJX6qkabKgiPC3zcBWoBNYXIodA+4CN4BhSVEPpy54RGwAzgHrKnT4EDgo6X5t7G/gEXEIOA1MB94B54FNwEbAHTrnHnAbOADMB74BRySdLRf4BTyBz2RAP9AH9AADwHugCxgC5gE7gZvACeBo5hwuF/gJnlSYR3e8V9KlFPE5sAjYJWkgIgx6BXgNtFvciNgDXMwbdBYU/QBP8R4kx/2SjuX/FvM6MAKslDQREdOAZ0AHsE2SRTXGqbyBNVhvkQtwX3cwOV4uaTwTbgHd5lbShYLPiNifWgxK2pKxtuloatAtaagAvwpsN3+STmbwDOAjMBtYKOltCXwB8Ab4BMyR9DVzjqdO1yT1FuCv0sdrJT3OwFXAE+CFpPZam0WEtVgGrJb0NHPWAI+AMUltStE+Z7K7nsjfS4FewIXtltpjYdsA3/plfrQe7t5nlsHnAh8qDEujIa3/0vkOYMkfO0+upsK5nWEtJuc8wZvqlkZ9vg+w7yv53JZsZEJtvRWVJjSp8Zqtslt2A5cr75bS5Hnd/m0r3vFUNrQVawr8/31eKtCcl6hUoDlvaL05n8rr/x2SzD46QBsjRgAAAABJRU5ErkJggg==";
;// CONCATENATED MODULE: ./public/images/lanu-m.png
const lanu_m_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAXNSR0IArs4c6QAABFBJREFUSEuNlmmo1lUQh59pX6igAtv3BSIqqIgWqA+2UJpK2YahkG0EaWZpmZllRWrZBi1Em1bYRju0UB+CLG2DgrCwfY8iKypbnHhe5i//+9773tuBy33vuec9c2bmN89MMMjKzA2AYcBBwLHAgcBOwIbAH8CnwJvAs8BS4LuIcH/AFb3+kZn7A6eXkbWArYC/gZeAw4FXgOHA+sC3QJbRRRHhA/qtfsYyc13gfOAC4BtgDrALcBFwFvA58DBwArAzcCcwH1gBXAZsDSwAbo4IH7dm9TGWmZvWF8bXhZcDnnkLuAu4rgw/BRxXYfQRZwMHAKuBK4GTgfv9HBG/NNbWGCuPrgbGATOBeyJidWbqmXtHR8TyzNwD6BiLiBWZuTvwPPBQRMzITEM+AbgKeACY0XjYNnYhoDGXyTYU7wDPAa8DE8t4tzEvvwM4FDgG2AeYAhxSd82MiHl+7hgrMTwJPAY8U57tCawHbALcCjwO/ABsD9xW+fsa2AIYU3n+FfgHWA5cYzSAscDoiFgWJW9zcTBwVET8nJlKW7n7QvffLTW6r4AUgeJRAEpdNe5XETAiSyyBzNwMeKH2p2tsR+BFYGpEmIvOqkfcCGwJnANYcxrarcI2EfikDP4J3A78CExu11pmjqyUDNfYScAlwIiI+KplbPNS1KsRoefNI/rkrLWvKo+wNiPip9b+NsDTwFyN3Qf8Zcy7XmSozOOcLo97GRsBzAKOjwhD3DzO0N8kdTT2HrCoYzlCCjSHdihajIsI1TmUZ6LsQakSEZ+1zitCvR6vMeN8PfBoc6B+b1thlBrSoVmy0fycCXzR2t+1aCIQvuy660Rgmsb+Bb4HVnYdUAx654WGuVmWw3a138aR+5aFOOuDKUAyDWs8k23yrr288N5CUbdn8lA1enGz9Mzilh7dnllrHc/M2UJgXlfOLAkJPzYirLOhcrZvpaJXziY0alwFTBpAjdbdrIgQWUMZs9/NBkZFhGRpzvdR4ymllpFdh5o6ezkibvgfxiYDRw5SZ/P1THVJkCkRYfG1XyRBZON51Z0bgjQ5+7hFkFuA3wYgiPXnPR2C6KaEkIWycWW1G+tmKnAY8EbxUFXZmRs2qlL7lWy0n9kdFNvSiFhVbLT9LAMubqjvQWmxGHiiqL83sBGwcTVOqW8urD+pb8OUFOJodHWB3wF/PqgOr1ficIxgaPczq9yGZ7d9vxCjR4rkNS8bop8ZgVE1FNkb96qMKLAOW7s79bU15FwK3G0pZKZ96dTq1B/26NS2kcURMT0zvfOM6mdicFq/Tq3lmkGcO5yq5NwVwDrA21Wwc3vMIOcCTmOSQxifViPB7AFnkJYKVdykmq7MkTOIdFAsclLIPtI1XVkaH9WwZA6l/IJBp6s2qzJTNTZzo/xUGBa/VLFvOTdaVzZV8bR2zSsLHQG60Nf5s+eQWmG1LJyIHQ0c3ZqJWO81LBttPxJmyVAT8X/Q1OrUW8CXvwAAAABJRU5ErkJggg==";
;// CONCATENATED MODULE: ./public/images/wallet.png
const wallet_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./public/images/github.png
const github_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAAoRJREFUSEudlVuIjlEUhp83g5wyFyhyKClCjqVc0EQpDZELw4UoiVJyzFxQZKgppwspkyIunHIhJeJmXCg5pMYpriZEOYRSaPRqTd/32/PNP+OfWVff3nut51t77bXfLbox2yuAJcAMYDwg4D3QAtwErkr62hUinDuZ7aXAIWBqdz8HvgBHJR0s59cJbvsIsP0/0OLyM2C1pNhRyTrAbZ8B1vUQnLv/AeZLupdPlOC2DwB7soWo49sKyhLuUZoPwOQsdqKkV/HdDrc9E3icZNwoqd72AiB+Og54CnwG+gITgJHAeaBB0nfbkdBQ4I2ksSn8ETArgW+SdCof266S1JaWy3Z/Sb8SnyfA9Gy8T9J+2Z4NPCzUuUnSxkprb3sQ8A3ok8X8BqoDfgzYWgAtl3StB/B+wHVgURKzNuD3gTnJZLOkmkrBSVkmAS+SuAsBfweMSib3SmroKTxrjI/AsCz2YcB/AAMT2C5Jh3sJbwXaOwV4HfC8hXLecUnbegq3HQl+AgZksS8DHnWKeuXWImlaL+DzgLsdzs72JWBlAbZYUqhexWb7DrAwCTgZmdcBF8tQaiQ1V0K3HWe0o+C7LOBVmT4MAZpCo4FbmWPs6gbwQFKpzbKY2uxGRnK5ruT8aJLqXFvWA6ezhyA0fEShZ+skXU56OhKK+5FKRpp4vaTGVBVDKucCPyUNsB0HtAVolbSzWB7beULFpXeSRsdkCh8MPAfGAFckFQ+5A8T2KuBCmTOZIik4/+AxsD0cuJ2oWwhaaHVoTTwGJbO9BjiXTIVY1UqKrmm3rt7QE8DmkpNU7jmM9fALi/7ekD8S3cKzXcRF2g20SVpbpuahgPHWnpVUrpX5C+b48iovfLS8AAAAAElFTkSuQmCC";
;// CONCATENATED MODULE: ./public/images/twimg.png
const twimg_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAXCAYAAAAP6L+eAAAAAXNSR0IArs4c6QAAArBJREFUSEullVuoj1kYh59H5kLDSDESMmYakcMFhWKPmhjNUONwoyhCISklIuXSoUiiaIqYlFw45DA1Djco5FByiBoMDTW4IjOKmVfvbm2+/bf/+2+a9+r73m+tZ63vfX/rt4yIPcAs4G/gU97HVXVE5b3dx4joA9wG7gJNRkRv4I8yaw3QE8jcFGCHuqgRPCI6AM+AbsBg9ZY5KSJmAPuAoeqNkjsNfAuMVi+2B4+I8zmuOrYZXAPqrL6MiE7AX8BztWs9cETsBOYCs9WfW8ZVwR2B18AldWRZbCpwENipzq+FR8QyYCOwXl1V/f4OXEDTgAPAInVHyR0q9W5Sz1X+cBJwDDii/li7aCtwAR0HfgB6qNmQ7ME/wCu1WTURMQC4A/ymft1WmdoCZ+5f4KY6pIDGAyeBzcBK4CWQpeuqPv8ocAFNBo4mRN1QcruzQcA94EtgmHq9XlM/2HGlhoeBrF0/9WGB5+66ABPUU+1JsC64gAJ4oH5R3lMtqemN6vL/A/4O+BVYq64u8G3AYmCieuI/l6JSkr3ATGCgmkpIVTwFuqt1/7hRKT4DLgMpqXvqVwWcasnGHVJT+x9EI3AqoD+QJ2wTsE1dUuDrivQmqb80PCCVEuTg74Fx6pmIaCnJSPVSgf+eqgE6qNnod9HmjiMiz3/ucqm6pbLYK+CN2rmAUy33geNqar8+OCLSqdKxflIXVAdHxFjgLLBHnVPgeRKzLNPVNKzmqDWhMUAazVn1m7aaUrHJ8Wp6dqrkFjAI+ER90wocEb2Ax3kTqD3q6bOAXgCd1PSLBH8O/AmcUifUgp+ko+W1pOYCdSMiRgEXgMNqenbCm4AzwAx1f955eV9dA1KbrTy3AXw7sLD04xGQh2ZrmdM3weleK4B56q72YLXfIuIKMLySbzGpvW8BfUUj6rHF4o0AAAAASUVORK5CYII=";
;// CONCATENATED MODULE: ./public/images/footer_dianbao.png
const footer_dianbao_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAdCAYAAADPa766AAAAAXNSR0IArs4c6QAAAv5JREFUWEfFl0mIVFcUhr/fWYxTCyZpVERbESQ2uBAxJFnFlUPTggNEHFtFaZqEBMGNIIgDESHJRkVFERJBcFo4oILQwZUokk0CWYnDQhwQRJHkl1PcgtfVXV3vVdl6oRZ9+w7fOec/59wnPsKwPQJoBzYAXwG/6UNy2P4C2Ah8BzRl7n4z4CC2PwFWJID5VQx/MmAgtuely1cCo2t4/up7BbE9Prk93D+nQNh3vxcQ298k65cBI6sA3ABOAseBynvb6gax/SmwJil/Zj/WPwN+BC6lX2sfa5sLgdgeBCwEOoDFwNAa7j8DdAKjgCvA9D7WP5A0KReI7cnA+vSbkiP2D4Ftks7ZDg9cBj6rsu+spPaqILbD2rA6hBdeGJwDwMBhYLukF7a/Bi4AY/vZu0PSnl4gtmekuK8FQgd5xz/AJkk3Y4PtpcDv/Yi3fO63kq6VQFLJDcWH9ZEBuUKWTnoL/AzskvQ6nbcueWZIDSvCg02Snsv2cuBXYGJe0zPrbge8pLvlOds/AftyGvO3pFmxN0Ae9SOkamyvgJ3AQUn/JS+EF/enVM1r0ylJq8sg0Yi2Am05ga4DmyX9m/FCCPloqit5IWJdl6RfSiCZw6JGfAmEVqJFR8pmR6kwSTqWnbQdlfR0yrAiELF2gaRbPUAqT0hNqwwVGuiU9LgCYlxKz3hTFB0h8jFlgRfJjh4X2f48FaoizS17xh1Jc8sTdYHYbkkle1pRN2TWH5K0pVGQ88CSBiBia6R9CLw06vVIdxJ2Iyytku41CvIXMLsBiqhDIdRSDWrEIw+A5gxIlOqXcXhOuG5JPTKt3tCEReWX2P9AiC7eG1FPqj2Qs4xRkX/IThQGsT0cKDU3oAQh6Uj8kZ4Oe4Hva+hvlaQ/GgWJB070p4hvh6R4g/YYtiOjYj777ZJd05JtEXVpxHZ0y1B7QJyopgnbU1Oo4rMiO55KmlC5r57QxAfTeEn3awnT9rD0JOjKhOqipF41qDBIrcv7+r/t6OwHUqgWSfqzct07AyzrHzReIucAAAAASUVORK5CYII=";
;// CONCATENATED MODULE: ./src/components/header/index.jsx

var _templateObject;
function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/self-closing-comp */
















var CustomStyle = styled_components_browser_esm/* default */.ZP.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n\t.header_container {\n\t\tdisplay: flex;\n\t\ttransition: all 0.3s ease 0s;\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-size: cover;\n\t\tbackground-position: center center;\n\t\tposition: absolute;\n\t\ttop: 50px;\n\t\tleft: 50%;\n\t\ttransform: translateX(-50%);\n\t\twidth: 95%;\n\t\theight: 80px;\n\t\tz-index: 99;\n\t\tpadding: 30px 30px 38px;\n\t\tflex-direction: row;\n\t\t-webkit-box-pack: justify;\n\t\tjustify-content: space-between;\n\t\t-webkit-box-align: center;\n\t\talign-items: center;\n\t}\n\t.header_left {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\t-webkit-box-align: center;\n\t\talign-items: center;\n\t\tgap: 56px;\n\t\ta {\n\t\t\tcolor: #fff;\n\t\t}\n\t}\n\t.header_logo {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\timg {\n\t\t\twidth: 300px;\n\t\t\tmargin-top: 30px;\n\t\t}\n\t}\n\t.header_nav {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\t-webkit-box-align: center;\n\t\talign-items: center;\n\t\tgap: 24px;\n\t}\n\t.header_navLink {\n\t\tdisplay: flex;\n\t\tpadding: 8px;\n\t\t-webkit-box-align: center;\n\t\talign-items: center;\n\t\tgap: 6px;\n\t\tuser-select: none;\n\t\tflex-direction: row;\n\t\twhite-space: nowrap;\n\t\ttext-transform: uppercase;\n\t\tfont-size: 15px;\n\t\tcolor: #fff;\n\t\ttext-shadow: 2px 0px 0px #25317A;\n\t\t&:hover {\n\t\t\tcolor: rgb(240, 220, 192);\n\t\t}\n\t}\n\t.header_more {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tposition: relative;\n\t\tcursor: pointer;\n\t\tspan {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\ttransition: transform 0.15s cubic-bezier(0.4, 0, 0, 1.02) 0s;\n\t\t}\n\t\tsvg {\n\t\t\twidth: 10px;\n\t\t\tpath {\n\t\t\t\tfill: rgb(240, 220, 192);\n\t\t\t}\n\t\t}\n\t}\n\t.header_more_down {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\ttransition: transform 0.15s cubic-bezier(0.4, 0, 0, 1.02) 0s;\n\t\ttransform: rotate(180deg);\n\t}\n\t.header_out {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tbackground: rgb(199, 100, 61);\n\t\tbox-shadow: rgb(114, 64, 81) 0px 8px;\n\t\tposition: absolute;\n\t\tborder-radius: 0px 0px 16px 16px;\n\t\tz-index: 2;\n\t\ttop: 100%;\n\t\tleft: 0px;\n\t\tpadding: 16px;\n\t\tgap: 24px;\n\t}\n\t.header-right-flex {\n\t\tdisplay: flex;\n\t}\n\t.header-right-one {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\timg {\n\t\t\theight: 20px;\n\t\t\tmargin-right: 28px;\n\t\t}\n\t}\n\t.header-wallet {\n\t\tbackground: url(", ") no-repeat;\n\t\twidth: 174px;\n\t\theight: 53px;\n\t\tline-height: 53px;\n\t\ttext-align: center;\n\t\tcolor: #3E0E00;\n\t\tfont-weight: bold;\n\t\tfont-size: 14px;\n\t\ttransition: transform 0.2s ease 0s;\n\t\tmargin-left: 40px;\n\t\tcursor: pointer;\n\t}\n\n\n\t@media (max-width: 1700px) {\n\t\t.header_logo {\n\t\t\timg {\n\t\t\t\twidth: 200px;\n\t\t\t\tmargin-top: 20px;\n\t\t\t}\n\t\t}\n\t}\n\n\n\t@media (max-width: 1650px) {\n\t\t.header_container {\n\t\t\twidth: 100%;\n\t\t\tmin-width: 1200px;\n\t\t\tpadding: 10px;\n\t\t}\n\t\t.header_left {\n\t\t\tgap: 20px;\n\t\t}\n\t\t.header_nav {\n\t\t\tgap: 5px;\n\t\t}\n\t\t.header-right-one {\n\t\t\timg {\n\t\t\t\tmargin-right: 18px;\n\t\t\t}\n\t\t}\n\t\t.header-wallet {\n\t\t\tmargin-left: 20px\n\t\t}\n\t}\n\n\n\t@media (max-width: 1400px) {\n\t\t.header_left {\n\t\t\tgap: 0px;\n\t\t}\n\t\t.header_nav {\n\t\t\tgap: 0px;\n\t\t}\n\t\t.header_navLink {\n\t\t\tpadding: 5px;\n\t\t\tfont-size: 13px;\n\t\t}\n\t}\n\n\n\t@media (max-width: 750px) {\n\t\t\n\t}\n"])), wallet_namespaceObject);
function Header() {
  var _i18n$language, _i18n$language2, _i18n$language3, _i18n$language4;
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  var _useNetwork = (0,wagmi_dist/* useNetwork */.LN)(),
    chain = _useNetwork.chain;
  var _useGetOwnAddress = useGetOwnAddress(),
    address = _useGetOwnAddress.address,
    isConnected = _useGetOwnAddress.isConnected;
  var connectWallet = useConnectWallet();
  var _useState = (0,react.useState)(false),
    moreShow = _useState[0],
    setMoreShow = _useState[1];
  var _useState2 = (0,react.useState)(false),
    menuMShow = _useState2[0],
    setMenuMShow = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    menuLanuShow = _useState3[0],
    setMenuLanuShow = _useState3[1];
  var handMouseEnter = function handMouseEnter() {
    setMoreShow(true);
  };
  var handMouseLeave = function handMouseLeave() {
    setMoreShow(false);
  };
  var _message$useMessage = message/* default */.ZP.useMessage(),
    messageApi = _message$useMessage[0],
    contextHolder = _message$useMessage[1];
  var handleComing = function handleComing() {
    messageApi.open({
      type: 'warning',
      content: t('Coming soon')
    });
  };
  return /*#__PURE__*/react.createElement(CustomStyle, null, contextHolder, /*#__PURE__*/react.createElement("div", {
    className: "cryptobit_nav_manu"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header_container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header_left"
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header_logo"
  }, /*#__PURE__*/react.createElement("img", {
    src: logo_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("div", {
    className: "header_nav"
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header_navLink"
  }, t('Marketplace'))), /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/app"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header_navLink"
  }, t('Games'))), /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/mint"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header_navLink"
  }, t('Mystery Hatch'))), /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "https://kaols-organization.gitbook.io/untitled/redefining-gamefi-with-adrenaline-pumping-nft-battle-royale-abstract",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header_navLink"
  }, t('WhitePaper'))), /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header_navLink"
  }, t('News'))), /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header_navLink"
  }, t('More'))))), /*#__PURE__*/react.createElement("div", {
    className: "header-right-flex"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header-right-one"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "https://twitter.com/arena_phantom",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: twimg_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "https://t.me/+JzBiaNg0N6Q4NmFk",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: footer_dianbao_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("img", {
    src: github_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "langu_conter"
  }, /*#__PURE__*/react.createElement("img", {
    src: lanu_namespaceObject,
    alt: ""
  }), ((_i18n$language = i18n.language) == null ? void 0 : _i18n$language.toUpperCase()) === 'EN' && 'English', ((_i18n$language2 = i18n.language) == null ? void 0 : _i18n$language2.toUpperCase()) === 'ZHTW' && '繁體中文', /*#__PURE__*/react.createElement("div", {
    className: "sub-menu-lang"
  }, /*#__PURE__*/react.createElement("div", {
    className: "sub-menu"
  }, /*#__PURE__*/react.createElement("span", {
    onClick: function onClick() {
      localStorage.setItem('language', 'en');
      i18n.changeLanguage('en');
    }
  }, "English"), /*#__PURE__*/react.createElement("span", {
    onClick: function onClick() {
      localStorage.setItem('language', 'zhTW');
      i18n.changeLanguage('zhTW');
    }
  }, "\u7E41\u9AD4\u4E2D\u6587"))))), /*#__PURE__*/react.createElement("div", {
    className: "header-wallet"
  }, isConnected ? /*#__PURE__*/react.createElement("em", null, address ? address.substring(0, 6) + "..." + address.substr(-4) : '') : /*#__PURE__*/react.createElement("em", {
    onClick: function onClick() {
      return connectWallet();
    }
  }, t('Connect Wallet')))))), /*#__PURE__*/react.createElement("div", {
    className: "d-md-block d-lg-none"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mean_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "menu_logo"
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, /*#__PURE__*/react.createElement("img", {
    src: logo_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("div", {
    className: "mobile-right"
  }, isConnected ? /*#__PURE__*/react.createElement("div", {
    className: "header-switch-m"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header-button chain-name chain-m"
  }, /*#__PURE__*/react.createElement("em", null, address ? address.substring(0, 6) + "..." + address.substr(-4) : ''))) : /*#__PURE__*/react.createElement("div", {
    className: "header-switch-m"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header-button chain-name chain-m"
  }, /*#__PURE__*/react.createElement("em", {
    onClick: function onClick() {
      return connectWallet();
    }
  }, t('Connect Wallet')))), /*#__PURE__*/react.createElement("div", {
    className: "mobile-menu mean-container mean-conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mean-bar",
    onClick: function onClick() {
      setMenuMShow(!menuMShow);
    }
  }, !menuMShow ? /*#__PURE__*/react.createElement("a", {
    className: "meanmenu-reveal"
  }, /*#__PURE__*/react.createElement("span", null), /*#__PURE__*/react.createElement("span", null), /*#__PURE__*/react.createElement("span", null)) : /*#__PURE__*/react.createElement("a", {
    className: "meanmenu-reveal meanclose"
  }, "X"))))), menuMShow && /*#__PURE__*/react.createElement("div", {
    className: "menu_nav"
  }, /*#__PURE__*/react.createElement("span", {
    onClick: function onClick() {
      setMenuMShow(!menuMShow);
    }
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, t('Marketplace'))), /*#__PURE__*/react.createElement("span", {
    onClick: function onClick() {
      setMenuMShow(!menuMShow);
    }
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "https://app.ghostwargod.com/"
  }, t('Games'))), /*#__PURE__*/react.createElement("span", {
    onClick: function onClick() {
      setMenuMShow(!menuMShow);
    }
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/mint"
  }, t('Mystery Hatch'))), /*#__PURE__*/react.createElement("span", {
    onClick: function onClick() {
      setMenuMShow(!menuMShow);
    }
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "https://kaols-organization.gitbook.io/untitled/redefining-gamefi-with-adrenaline-pumping-nft-battle-royale-abstract",
    target: "_blank"
  }, t('WhitePaper'))), /*#__PURE__*/react.createElement("span", {
    onClick: function onClick() {
      setMenuMShow(!menuMShow);
    }
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, t('News'))), /*#__PURE__*/react.createElement("span", {
    onClick: function onClick() {
      setMenuMShow(!menuMShow);
    }
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, t('More'))), /*#__PURE__*/react.createElement("span", {
    className: "menu_m_lan"
  }, /*#__PURE__*/react.createElement("div", {
    onClick: function onClick() {
      setMenuLanuShow(!menuLanuShow);
    }
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, null, /*#__PURE__*/react.createElement("img", {
    src: lanu_m_namespaceObject,
    alt: "",
    className: "nav_menu_lan"
  }), ((_i18n$language3 = i18n.language) == null ? void 0 : _i18n$language3.toUpperCase()) === 'EN' && 'English', ((_i18n$language4 = i18n.language) == null ? void 0 : _i18n$language4.toUpperCase()) === 'ZHTW' && '繁體中文'), /*#__PURE__*/react.createElement("em", {
    className: "menu_flex_em"
  }, "+")), menuLanuShow && /*#__PURE__*/react.createElement("div", {
    className: "menu_m_xzol",
    onClick: function onClick() {
      setMenuLanuShow(!menuLanuShow);
      setMenuMShow(!menuMShow);
    }
  }, /*#__PURE__*/react.createElement("i", {
    onClick: function onClick() {
      localStorage.setItem('language', 'en');
      i18n.changeLanguage('en');
    }
  }, "English"), /*#__PURE__*/react.createElement("i", {
    onClick: function onClick() {
      localStorage.setItem('language', 'zhTW');
      i18n.changeLanguage('zhTW');
    }
  }, "\u7E41\u9AD4\u4E2D\u6587"))))));
}
/* harmony default export */ const header = (Header);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(64043);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__(22462);
;// CONCATENATED MODULE: ./src/hook/_isMobile.ts


function _isMobile() {
  var flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
  return flag;
}
;// CONCATENATED MODULE: ./public/images/home1.jpg
const home1_namespaceObject = __webpack_require__.p + "6fc46f8edfde89a3eda9.jpg";
;// CONCATENATED MODULE: ./public/images/home1_m.png
const home1_m_namespaceObject = __webpack_require__.p + "6383be6e648a5ddba32a.png";
;// CONCATENATED MODULE: ./public/images/home1_m_games.png
const home1_m_games_namespaceObject = __webpack_require__.p + "7e6eb408771686b0a4f5.png";
;// CONCATENATED MODULE: ./src/components/index/comm1.jsx

var comm1_templateObject;
function comm1_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }








var comm1_CustomStyle = styled_components_browser_esm/* default */.ZP.div(comm1_templateObject || (comm1_templateObject = comm1_taggedTemplateLiteralLoose(["\n\tposition: relative;\n\tmin-width: 1200px;\n\n\timg {\n\t\twidth: 100%;\n\t}\n\t.home1_des {\n\t\tposition: absolute;\n\t\tbottom: 0px;\n\t\twidth: 1022px;\n\t\theight: 143px;\n\t\tbackground: #470D66 linear-gradient(#5E1FCC 0%, #9F44F4 99%);\n\t\tborder-radius: 0px 90px 0px 0px;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\n\t\tspan {\n\t\t\tdisplay: inline-block;\n\t\t\twidth: 90%;\n\t\t\tmargin-left: 5%;\n\t\t\tfont-size: 1.25rem;\n\t\t\tline-height: 28px;\n\t\t}\n\t}\n\n\n\t@media (max-width: 1600px) {\n\t\t.home1_des {\n\t\t\twidth: 800px;\n\t\t\theight: 150px;\n\t\t\tspan {\n\t\t\t\tfont-size: 1.1rem;\n\t\t\t}\n\t\t}\n\t}\n\n\n\t@media (max-width: 1400px) {\n\t\t.home1_des {\n\t\t\twidth: 750px;\n\t\t\theight: 130px;\n\t\t\tspan {\n\t\t\t\tfont-size: 1rem;\n\t\t\t}\n\t\t}\n\t}\n\n\n\t@media (max-width: 750px) {\n\t\tmin-width: auto;\n\t\tmin-height: 100vw;\n\n\t\t.home1_m_des {\n\t\t\tposition: absolute;\n    \t\tbottom: 0px;\n\t\t\tem {\n\t\t\t\tdisplay: block;\n\t\t\t\tmargin-bottom: -30px;\n\t\t\t\ttext-align: right;\n    \t\t\tmargin-right: 15%;\n\t\t\t}\n\t\t\timg {\n\t\t\t\twidth: 130px;\n\t\t\t}\n\t\t\tspan {\n\t\t\t\tdisplay: block;\n\t\t\t\twidth: 95%;\n\t\t\t\tbackground: linear-gradient(rgb(94, 31, 204) 0%, rgb(159, 68, 244) 99%) rgb(71, 13, 102);\n\t\t\t\tborder-radius: 0px 50px 0px 0px;\n\t\t\t\tfont-size: 13px;\n\t\t\t\tpadding: 30px 20px 20px 20px;\n\t\t\t\tline-height: 18px;\n\t\t\t}\n\t\t}\n\t}\n"])));
function Comm1() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  var _useState = (0,react.useState)(_isMobile()),
    isMobile = _useState[0],
    setIsMobile = _useState[1];
  return /*#__PURE__*/react.createElement(comm1_CustomStyle, null, !isMobile ? /*#__PURE__*/react.createElement("img", {
    src: home1_namespaceObject,
    alt: ""
  }) : /*#__PURE__*/react.createElement("img", {
    src: home1_m_namespaceObject,
    alt: ""
  }), !isMobile ? /*#__PURE__*/react.createElement("div", {
    className: "home1_des"
  }, /*#__PURE__*/react.createElement("span", null, t('Enter the Phantom Arena: 3 minutes, 50 players, endless excitement. Choose your creature, embrace the chaos. Win or lose, glory and rewards await!'))) : /*#__PURE__*/react.createElement("div", {
    className: "home1_m_des"
  }, /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement("img", {
    src: home1_m_games_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("span", null, t('Enter the Phantom Arena: 3 minutes, 50 players, endless excitement. Choose your creature, embrace the chaos. Win or lose, glory and rewards await!'))));
}
/* harmony default export */ const comm1 = (Comm1);
;// CONCATENATED MODULE: ./public/images/co2_bg.png
const co2_bg_namespaceObject = __webpack_require__.p + "56075c3dc05e7cac2049.png";
;// CONCATENATED MODULE: ./public/images/co2_games1.png
const co2_games1_namespaceObject = __webpack_require__.p + "f149f03688d89afde9d7.png";
;// CONCATENATED MODULE: ./public/images/co2_games2.png
const co2_games2_namespaceObject = __webpack_require__.p + "ac20f0f9a73d6d0f6226.png";
;// CONCATENATED MODULE: ./public/images/co2_games3.png
const co2_games3_namespaceObject = __webpack_require__.p + "1416a92fb0ce57cd70e5.png";
;// CONCATENATED MODULE: ./src/components/index/comm2.jsx

var comm2_templateObject;
function comm2_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }








var comm2_CustomStyle = styled_components_browser_esm/* default */.ZP.div(comm2_templateObject || (comm2_templateObject = comm2_taggedTemplateLiteralLoose(["\n\t.comm2_imout {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tgap: 20px;\n\t\tpadding-top: 13rem;\n\t}\n\t.comm2_ont {\n\t\tposition: relative;\n\t\tbackground: url(", ") no-repeat;\n\t\tbackground-size: 100%;\n\t\twidth: 401px;\n\t\theight: 520px;\n\t\tspan {\n\t\t\tdisplay: block;\n\t\t\ttext-align: center;\n\t\t\tpadding-top: 4rem;\n\t\t\tline-height: 22px;\n\t\t\tfont-size: 1.25rem;\n\t\t}\n\t\tem {\n\t\t\tdisplay: block;\n\t\t\twidth: 60%;\n\t\t\tmargin: auto;\n\t\t\tfont-size: .75rem;\n\t\t\tcolor: #A19AD3;\n\t\t\tline-height: 15px;\n\t\t\ttext-align: center;\n\t\t\tpadding-top: 1rem;\n\t\t\tpadding-bottom: 2rem;\n\t\t}\n\t\ti {\n\t\t\tdisplay: block;\n\t\t\tposition: absolute;\n\t\t\tleft: 50%;\n\t\t}\n\t\timg {\n\t\t\tanimation: fadeInTop 5s ease 0s infinite;\n\t\t}\n\t}\n\t.comm2_games1 {\n\t\twidth: 194px;\n\t\theight: 335px;\n\t\tmargin-left: -97px;\n\t\tbottom: -20px;\n\t}\n\t.comm2_games2 {\n\t\twidth: 182px;\n\t\theight: 251px;\n\t\tmargin-left: -75px;\n\t\tbottom: 5px;\n\t}\n\t.comm2_games3 {\n\t\twidth: 165px;\n\t\theight: 233px;\n\t\tmargin-left: -82.5px;\n\t\tbottom: 30px;\n\t}\n\n\n\t@media (max-width: 1600px) {\n\t\t\n\t}\n\n\n\t@media (max-width: 1400px) {\n\t\t.comm2_imout {\n\t\t\tpadding-top: 10rem;\n\t\t}\n\t\t.comm2_ont {\n\t\t\twidth: 320px;\n\t\t\theight: 416px;\n\t\t\timg {\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t}\n\t\t.comm2_games1 {\n\t\t\twidth: 155px;\n\t\t\theight: 268px;\n\t\t\tmargin-left: -78px;\n\t\t\tbottom: -20px;\n\t\t}\n\t\t.comm2_games2 {\n\t\t\twidth: 145px;\n\t\t\theight: 200px;\n\t\t\tmargin-left: -60px;\n\t\t\tbottom: 5px;\n\t\t}\n\t\t.comm2_games3 {\n\t\t\twidth: 132px;\n\t\t\theight: 186px;\n\t\t\tmargin-left: -66px;\n\t\t\tbottom: 20px;\n\t\t}\n\t}\n\n\n\t@media (max-width: 750px) {\n\t\t.comm2_imout {\n\t\t\tdisplay: block;\n\t\t\tpadding-top: 3rem;\n\t\t}\n\t\t.comm2_ont {\n\t\t\tleft: 50%;\n    \t\tmargin-left: -160px;\n\t\t\tmargin-bottom: 20px;\n\t\t}\n\t}\n"])), co2_bg_namespaceObject);
function Comm2() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  var _useState = (0,react.useState)(_isMobile()),
    isMobile = _useState[0],
    setIsMobile = _useState[1];
  return /*#__PURE__*/react.createElement(comm2_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "comm2_imout"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm2_ont"
  }, i18n.language === 'zhTW' ? /*#__PURE__*/react.createElement("span", null, t('The Road of Strategy')) : /*#__PURE__*/react.createElement("span", null, t('The Road of'), /*#__PURE__*/react.createElement("br", null), t('Strategy')), /*#__PURE__*/react.createElement("em", null, t('Hone your skills, master strategy, and you will become the ruler.')), /*#__PURE__*/react.createElement("i", {
    className: "comm2_games1"
  }, /*#__PURE__*/react.createElement("img", {
    src: co2_games1_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("div", {
    className: "comm2_ont"
  }, i18n.language === 'zhTW' ? /*#__PURE__*/react.createElement("span", null, t('Journey of the Competition')) : /*#__PURE__*/react.createElement("span", null, t('Journey of the'), /*#__PURE__*/react.createElement("br", null), t('Competition')), /*#__PURE__*/react.createElement("em", null, t('Every match is an opportunity to march towards glory, every showdown is a step towards conquering the world.')), /*#__PURE__*/react.createElement("i", {
    className: "comm2_games2"
  }, /*#__PURE__*/react.createElement("img", {
    src: co2_games2_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("div", {
    className: "comm2_ont"
  }, i18n.language === 'zhTW' ? /*#__PURE__*/react.createElement("span", null, t('The Road to the Peak')) : /*#__PURE__*/react.createElement("span", null, t('The Road to'), /*#__PURE__*/react.createElement("br", null), t('the Peak')), /*#__PURE__*/react.createElement("em", null, t("In this game filled with wealth and honor, only you can stand at the pinnacle. Let's begin! Fight for glory and fortune.")), /*#__PURE__*/react.createElement("i", {
    className: "comm2_games3"
  }, /*#__PURE__*/react.createElement("img", {
    src: co2_games3_namespaceObject,
    alt: ""
  })))));
}
/* harmony default export */ const comm2 = (Comm2);
;// CONCATENATED MODULE: ./public/images/co3_game1.png
const co3_game1_namespaceObject = __webpack_require__.p + "9fae162e2046bb06b0b0.png";
;// CONCATENATED MODULE: ./public/images/co3_game2.png
const co3_game2_namespaceObject = __webpack_require__.p + "c3be1b7e4291f59177ef.png";
;// CONCATENATED MODULE: ./public/images/co3_game2_m.png
const co3_game2_m_namespaceObject = __webpack_require__.p + "ac584da31606005c6d3b.png";
;// CONCATENATED MODULE: ./public/images/video_bg.png
const video_bg_namespaceObject = __webpack_require__.p + "332f136768f37b8a7cce.png";
;// CONCATENATED MODULE: ./public/images/games_video.mp4
const games_video_namespaceObject = __webpack_require__.p + "75cbf4696743997f945d.mp4";
;// CONCATENATED MODULE: ./src/components/index/comm3.jsx

var comm3_templateObject, _templateObject2;
function comm3_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }









var comm3_CustomStyle = styled_components_browser_esm/* default */.ZP.div(comm3_templateObject || (comm3_templateObject = comm3_taggedTemplateLiteralLoose(["\n\twidth: 1060px;\n\tmargin: auto;\n\tpadding-top: 7rem;\n\t\n\t.comm3_games1 {\n\t\tdisplay: flex;\n\t\tposition: relative;\n\t\t.comm3_left {\n\t\t\tpadding-top: 165px;\n\t\t}\n\t\tem {\n\t\t\tdisplay: block;\n\t\t\twidth: 385px;\n\t\t\tfont-size: 2.6rem;\n    \t\tline-height: 51px;\n\t\t}\n\t\ti {\n\t\t\tdisplay: block;\n\t\t\twidth: 489px;\n\t\t\tfont-size: .85rem;\n\t\t\tcolor: #9199AD;\n\t\t\tline-height: 24px;\n\t\t\tmargin-top: 1rem;\n\t\t\tpadding-left: 5px;\n\t\t}\n\t\tspan {\n\t\t\tmargin-bottom: -150px;\n\t\t\tmargin-left: 100px;\n\t\t\tposition: relative;\n\t\t\tz-index: 99;\n\t\t}\n\t\timg {\n\t\t\tanimation: fadeInTontTop 3s ease 0s infinite;\n\t\t}\n\t}\n\t.comm3_games2 {\n\t\tmargin-top: 60px;\n\t\tspan {\n\t\t\tposition: relative;\n\t\t\tdisplay: block;\n\t\t}\n\t\tem {\n\t\t\tdisplay: block;\n\t\t\tposition: absolute;\n\t\t\ttop: 10%;\n\t\t\tleft: 50%;\n\t\t\twidth: 50%;\n\t\t\ttext-align: center;\n\t\t\tmargin-left: -25%;\n\t\t\tcolor: #CAD5F1;\n\t\t\tline-height: 22px;\n\t\t}\n\t}\n\n\n\t@media (max-width: 1400px) {\n\t\twidth: 900px;\n\t\tpadding-top: 5rem;\n\n\t\t.comm3_games1 {\n\t\t\tem {\n\t\t\t\tfont-size: 2.2rem;\n\t\t\t\tline-height: 40px;\n\t\t\t}\n\t\t\tspan {\n\t\t\t\tmargin-left: 0px;\n\t\t\t}\n\t\t\timg {\n\t\t\t\twidth: 500px;\n\t\t\t}\n\t\t}\n\t\t.comm3_games2 {\n\t\t\timg {\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t}\n\t}\n\n\n\t@media (max-width: 750px) {\n\t\twidth: 100%;\n\t\tpadding-top: 3rem;\n\n\t\t.comm3_games1 {\n\t\t\tdisplay: block;\n\t\t\t.comm3_left {\n\t\t\t\tpadding-top: 0px;\n\t\t\t\twidth: 80%;\n\t\t\t\tmargin: auto;\n\t\t\t}\n\t\t\tspan {\n\t\t\t\tposition: relative;\n\t\t\t\tdisplay: block;\n\t\t\t\tright: 0px;\n\t\t\t\twidth: 250px;\n\t\t\t\tmargin: auto;\n\t\t\t\tpadding-top: 20px;\n\t\t\t\tz-index: 99;\n\t\t\t}\n\t\t\tem {\n\t\t\t\twidth: 100%;\n\t\t\t\tfont-size: 20px;\n\t\t\t\tline-height: 20px;\n\t\t\t\ttext-align: center;\n\t\t\t}\n\t\t\ti {\n\t\t\t\twidth: 100%;\n\t\t\t\ttext-align: center;\n\t\t\t\tline-height: 15px;\n\t\t\t\tfont-size: 12px;\n\t\t\t}\n\t\t\timg {\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t}\n\t\t.comm3_games2 {\n\t\t\tmargin-top: -55px;\n\t\t\tem {\n\t\t\t\tfont-size: 12px;\n\t\t\t\twidth: 80%;\n\t\t\t\ttop: 15px;\n\t\t\t\tleft: 20%;\n\t\t\t\tmargin-left: -10%;\n\t\t\t}\n\t\t}\n\t}\n"])));
var CustomVideo = styled_components_browser_esm/* default */.ZP.div(_templateObject2 || (_templateObject2 = comm3_taggedTemplateLiteralLoose(["\n\tbackground: url(", ") no-repeat;\n\tbackground-size: 100%;\n\twidth: 1060px;\n\theight: 532px;\n\tmargin: auto;\n\tmargin-top: 60px;\n\ttext-align: center;\n\tvideo {\n\t\twidth: 1000px;\n\t\tmargin-top: 30px;\n\t}\n\n\t@media (max-width: 750px) {\n\t\twidth: 340px;\n\t\theight: 170px;\n\t\tmargin: auto;\n\t\tmargin-top: -55px;\n\t\tvideo {\n\t\t\twidth: 320px;\n\t\t\tmargin-top: 10px;\n\t\t}\n\t}\n"])), video_bg_namespaceObject);
function Comm3() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  var _useState = (0,react.useState)(_isMobile()),
    isMobile = _useState[0],
    setIsMobile = _useState[1];
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(comm3_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "comm3_games1"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm3_left"
  }, /*#__PURE__*/react.createElement("em", null, t('This is an exhilarating blockchain PvP game.')), /*#__PURE__*/react.createElement("i", null, t('It provides up to 50 players with the opportunity to engage in real-time battles within the selected arena. Players compete for the supreme position to achieve top rankings and win enticing rewards.'))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: co3_game1_namespaceObject,
    alt: ""
  })))), /*#__PURE__*/react.createElement(CustomVideo, null, /*#__PURE__*/react.createElement("video", {
    src: games_video_namespaceObject,
    autoplay: "autoplay",
    muted: "muted",
    loop: "loop",
    controls: true
  })));
}
/* harmony default export */ const comm3 = (Comm3);
;// CONCATENATED MODULE: ./public/images/co4_lf.png
const co4_lf_namespaceObject = __webpack_require__.p + "ad124f1c0550cfa50c57.png";
;// CONCATENATED MODULE: ./public/images/co4_niu.gif
const co4_niu_namespaceObject = __webpack_require__.p + "545d85976c09bd538809.gif";
;// CONCATENATED MODULE: ./public/images/co4_tal.png
const co4_tal_namespaceObject = __webpack_require__.p + "20012b701f95c7d67b4c.png";
;// CONCATENATED MODULE: ./public/images/co4_tal_m.png
const co4_tal_m_namespaceObject = __webpack_require__.p + "35ea84b43e3d33aaf93b.png";
;// CONCATENATED MODULE: ./public/images/co4_t1.png
const co4_t1_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./public/images/co4_t2.png
const co4_t2_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./public/images/co4_t3.png
const co4_t3_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./public/images/co4_t4.png
const co4_t4_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./public/images/co4_t5.png
const co4_t5_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./src/components/index/comm4.jsx

var comm4_templateObject;
function comm4_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }













var comm4_CustomStyle = styled_components_browser_esm/* default */.ZP.div(comm4_templateObject || (comm4_templateObject = comm4_taggedTemplateLiteralLoose(["\n\tdisplay: flex;\n\tjustify-content: center;\n\tmargin-top: 6rem;\n\tpadding-top: 5rem;\n\tgap: 50px;\n\n\t.comm4_left {\n\t\tposition: relative;\n\t\tbackground: url(", ") no-repeat;\n\t\tbackground-size: 100%;\n\t\twidth: 548px;\n\t\theight: 830px;\n\t\tmargin-right: 50px;\n\t\tspan {\n\t\t\tposition: absolute;\n\t\t\ttop: 200px;\n\t\t\tleft: 140px;\n\t\t}\n\t\timg {\n\t\t\twidth: 240px;\n\t\t\tmargin-left: 20px;\n\t\t}\n\t\tem {\n\t\t\tdisplay: block;\n\t\t\twidth: 70%;\n\t\t\tfont-size: 12px;\n\t\t\tcolor: rgb(233, 238, 250);\n\t\t\tline-height: 18px;\n\t\t\ttext-shadow: rgb(17, 20, 65) 2px 0px 0px;\n\t\t\topacity: 0.8;\n\t\t\ttext-align: center;\n\t\t\tmargin-top: 12%;\n\t\t}\n\t}\n\t.comm4_right {\n\t\twidth: 630px;\n\t\tmargin-top: 2rem;\n\t\th1 {\n\t\t\tfont-size: 2.6rem;\n\t\t\tline-height: 48px;\n\t\t\tmargin-bottom: 1.5rem;\n\t\t}\n\t\th2 {\n\t\t\tfont-size: .8rem;\n\t\t\tcolor: #9199AD;\n\t\t\tline-height: 19px;\n\t\t\tmargin-bottom: 3rem;\n\t\t}\n\t}\n\t.comm4_tals {\n\t\tbackground: url(", ") no-repeat;\n\t\tbackground-size: 100%;\n\t\twidth: 621px;\n\t\theight: 467px;\n\t\tpadding-top: 20px;\n\t\tdiv {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tbackground: #1C1936;\n\t\t\tbox-shadow: inset 0px 0px 20px 0px #000000;\n\t\t\tborder-radius: 14px;\n\t\t\twidth: 95%;\n\t\t\tmargin: auto;\n\t\t\tmargin-bottom: 20px;\n\t\t\theight: 68px;\n\t\t}\n\t\tspan {\n\t\t\tdisplay: block;\n\t\t}\n\t\tem {\n\t\t\tdisplay: block;\n\t\t\tfont-size: 0.75rem;\n\t\t\tline-height: 19px;\n\t\t}\n\t}\n\n\n\t@media (max-width: 1400px) {\n\t\tmargin-top: 8rem;\n\t\tpadding-top: 5rem;\n\t\tgap: 0px;\n\n\t\t.comm4_left {\n\t\t\twidth: 438px;\n\t\t\theight: 664px;\n\t\t\tspan {\n\t\t\t\ttop: 160px;\n\t\t\t\tleft: 110px;\n\t\t\t}\n\t\t\timg {\n\t\t\t\twidth: 192px;\n\t\t\t}\n\t\t\tem {\n\t\t\t\tmargin-top: 8%;\n\t\t\t}\n\t\t}\n\t\t.comm4_right {\n\t\t\th1 {\n\t\t\t\tfont-size: 2rem;\n\t\t\t\tline-height: 40px;\n\t\t\t\tmargin-bottom: 1rem;\n\t\t\t}\n\t\t\th2 {\n\t\t\t\twidth: 90%;\n\t\t\t\tmargin-bottom: 1.5rem;\n\t\t\t}\n\t\t}\n\t}\n\n\n\t@media (max-width: 750px) {\n\t\tmargin-top: 1rem;\n\t\tdisplay: block;\n\n\t\t.comm4_left {\n\t\t\twidth: 356px;\n\t\t\theight: 539px;\n\t\t\tmargin: auto;\n\t\t\tspan {\n\t\t\t\ttop: 120px;\n\t\t\t\tleft: 50%;\n\t\t\t\twidth: 300px;\n\t\t\t\tmargin-left: -150px;\n\t\t\t\ttext-align: center;\n\t\t\t}\n\t\t\timg {\n\t\t\t\twidth: 160px;\n   \t\t\t\tmargin-left: 0px;\n\t\t\t}\n\t\t\tem {\n\t\t\t\tfont-size: 12px;\n\t\t\t\tmargin: auto;\n\t\t\t\tmargin-top: 30px;\n\t\t\t\tline-height: 13px;\n\t\t\t}\n\t\t}\n\t\t.comm4_right {\n\t\t\twidth: 90%;\n\t\t\tmargin: auto;\n\t\t\tmargin-top: 1rem;\n\t\t\th1 {\n\t\t\t\tfont-size: 20px;\n\t\t\t\tline-height: 20px;\n\t\t\t\ttext-align: center;\n\t\t\t}\n\t\t\th2 {\n\t\t\t\ttext-align: center;\n\t\t\t\tmargin: auto;\n\t\t\t\tmargin-bottom: 40px;\n\t\t\t\tfont-size: 12px;\n    \t\t\tline-height: 13px;\n\t\t\t}\n\t\t}\n\t\t.comm4_tals_m {\n\t\t\tbackground: url(", ") no-repeat;\n\t\t\tbackground-size: 100%;\n\t\t\twidth: 326px;\n\t\t\theight: 462px;\n\t\t\tpadding-top: 30px;\n\t\t\tmargin: auto;\n\t\t\tdiv {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tbackground: #1C1936;\n\t\t\t\tborder-radius: 7px;\n\t\t\t\twidth: 90%;\n\t\t\t\tmargin: auto;\n\t\t\t\tmargin-bottom: 15px;\n\t\t\t\theight: 68px;\n\t\t\t}\n\t\t\tspan {\n\t\t\t\tdisplay: block;\n\t\t\t\tmargin-left: -15px;\n\t\t\t}\n\t\t\tem {\n\t\t\t\tdisplay: block;\n\t\t\t\tfont-size: 12px;\n    \t\t\tline-height: 13px;\n\t\t\t}\n\t\t}\n\t}\n"])), co4_lf_namespaceObject, co4_tal_namespaceObject, co4_tal_m_namespaceObject);
function Comm4() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  var _useState = (0,react.useState)(_isMobile()),
    isMobile = _useState[0],
    setIsMobile = _useState[1];
  return /*#__PURE__*/react.createElement(comm4_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "comm4_left"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: co4_niu_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("em", null, t('Step into Phantom Arena: Experience the Thrill in Just 3 Minutes! Win or lose, great prizes await. Start your journey now and let the excitement take over!')))), /*#__PURE__*/react.createElement("div", {
    className: "comm4_right"
  }, i18n.language === 'zhTW' ? /*#__PURE__*/react.createElement("h1", null, t('Unique Skill Arena: NFT Adventure Journey')) : /*#__PURE__*/react.createElement("h1", null, t('Unique Skill Arena:'), /*#__PURE__*/react.createElement("br", null), t('NFT Adventure Journey')), /*#__PURE__*/react.createElement("h2", null, t('To enter this game, players need to acquire NFT characters with unique skills and arena tickets. Each match has a duration of 3 minutes, with the top 15 players having the opportunity to win lucrative rewards.')), !isMobile ? /*#__PURE__*/react.createElement("div", {
    className: "comm4_tals"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("span", {
    style: {
      marginRight: '8px'
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: co4_t1_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("em", null, t('The duration of each game is 3 minutes.'))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("span", {
    style: {
      marginRight: '18px'
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: co4_t2_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("em", null, t('The top 15 players have the chance to win generous rewards.'))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("span", {
    style: {
      marginRight: '10px'
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: co4_t3_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("em", null, t('There are 3 different arenas, each offering a unique Major Coin as a reward.'))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: co4_t4_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("em", null, t('A maximum of 50 players can participate in the battle.'))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("span", {
    style: {
      marginRight: '15px'
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: co4_t5_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("em", null, t('Losing players will be rewarded with Power-up NFTs to increase their odds of winning the next game.')))) : /*#__PURE__*/react.createElement("div", {
    className: "comm4_tals_m"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("span", {
    style: {
      marginRight: '8px'
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: co4_t1_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("em", null, t('The duration of each game is 3 minutes.'))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("span", {
    style: {
      marginRight: '18px'
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: co4_t2_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("em", null, t('The top 15 players have the chance to win generous rewards.'))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("span", {
    style: {
      marginRight: '10px'
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: co4_t3_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("em", null, t('There are 3 different arenas, each offering a unique Major Coin as a reward.'))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: co4_t4_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("em", null, t('A maximum of 50 players can participate in the battle.'))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("span", {
    style: {
      marginRight: '15px'
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: co4_t5_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("em", null, t('Losing players will be rewarded with Power-up NFTs to increase their odds of winning the next game.'))))));
}
/* harmony default export */ const comm4 = (Comm4);
;// CONCATENATED MODULE: ./public/images/comm3_bottom.png
const comm3_bottom_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./public/images/co5_bg.png
const co5_bg_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./public/images/co5_1.png
const co5_1_namespaceObject = __webpack_require__.p + "4599f92ab60c5fc521b0.png";
;// CONCATENATED MODULE: ./public/images/co5_2.png
const co5_2_namespaceObject = __webpack_require__.p + "e516127ef0ff0ce647cd.png";
;// CONCATENATED MODULE: ./public/images/co5_3.png
const co5_3_namespaceObject = __webpack_require__.p + "7e029425f1120766762b.png";
;// CONCATENATED MODULE: ./public/images/co5_4.png
const co5_4_namespaceObject = __webpack_require__.p + "4924e638dd6782a3fb50.png";
;// CONCATENATED MODULE: ./public/images/co5_5.png
const co5_5_namespaceObject = __webpack_require__.p + "44aeec23f1addd09d832.png";
;// CONCATENATED MODULE: ./public/images/co5_6.png
const co5_6_namespaceObject = __webpack_require__.p + "d70129340cac39c5a0a0.png";
;// CONCATENATED MODULE: ./public/images/co5_7.png
const co5_7_namespaceObject = __webpack_require__.p + "11f9114bc7422175f942.png";
;// CONCATENATED MODULE: ./public/images/co5_8.png
const co5_8_namespaceObject = __webpack_require__.p + "c2b28c15fe469887ed3e.png";
;// CONCATENATED MODULE: ./public/images/co5_9.png
const co5_9_namespaceObject = __webpack_require__.p + "ef5db4a75b332abb0fdd.png";
;// CONCATENATED MODULE: ./public/images/co5_10.png
const co5_10_namespaceObject = __webpack_require__.p + "7082c085f23122ae7af9.png";
;// CONCATENATED MODULE: ./public/images/co5_11.png
const co5_11_namespaceObject = __webpack_require__.p + "f3f8fd6920efe106a834.png";
;// CONCATENATED MODULE: ./public/images/co5_12.png
const co5_12_namespaceObject = __webpack_require__.p + "6425762548c59f9d73ca.png";
;// CONCATENATED MODULE: ./public/images/co5_13.png
const co5_13_namespaceObject = __webpack_require__.p + "fed10871f02bfc7154b3.png";
;// CONCATENATED MODULE: ./public/images/co5_14.png
const co5_14_namespaceObject = __webpack_require__.p + "07dba81c8c54cb188970.png";
;// CONCATENATED MODULE: ./public/images/co5_15.png
const co5_15_namespaceObject = __webpack_require__.p + "674a3973c861630b88e6.png";
;// CONCATENATED MODULE: ./public/images/co5_16.png
const co5_16_namespaceObject = __webpack_require__.p + "0716cd0e25cb5ddc93e2.png";
;// CONCATENATED MODULE: ./public/images/co5_17.png
const co5_17_namespaceObject = __webpack_require__.p + "df0e57fc920ff2316dfe.png";
;// CONCATENATED MODULE: ./public/images/co5_18.png
const co5_18_namespaceObject = __webpack_require__.p + "f389837df7b36f55432b.png";
;// CONCATENATED MODULE: ./public/images/co5_19.png
const co5_19_namespaceObject = __webpack_require__.p + "b841cd32ad9455634e9f.png";
;// CONCATENATED MODULE: ./public/images/co5_20.png
const co5_20_namespaceObject = __webpack_require__.p + "bff04e0778db0a8ba637.png";
;// CONCATENATED MODULE: ./public/images/co5_21.png
const co5_21_namespaceObject = __webpack_require__.p + "d6840501c9545acb31e4.png";
;// CONCATENATED MODULE: ./public/images/co5_22.png
const co5_22_namespaceObject = __webpack_require__.p + "493a43efb74e133c1e00.png";
;// CONCATENATED MODULE: ./public/images/co5_23.png
const co5_23_namespaceObject = __webpack_require__.p + "5be921863e0b9dc7b44f.png";
;// CONCATENATED MODULE: ./public/images/co5_24.png
const co5_24_namespaceObject = __webpack_require__.p + "9d4c8775387527a30b7d.png";
;// CONCATENATED MODULE: ./src/components/index/comm5.jsx

var comm5_templateObject;
function comm5_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }































var comm5_CustomStyle = styled_components_browser_esm/* default */.ZP.div(comm5_templateObject || (comm5_templateObject = comm5_taggedTemplateLiteralLoose(["\n\tmargin-top: 5rem;\n\tpadding-top: 5rem;\n\n\t.comm5_conter {\n\t\ttext-align: center;\n\t\th1 {\n\t\t\tfont-size: 3rem;\n\t\t\tline-height: 72px;\n\t\t\tmargin-bottom: 0px;\n\t\t}\n\t\tspan {\n\t\t\tdisplay: block;\n\t\t\twidth: 680px;\n\t\t\tmargin: auto;\n\t\t\tfont-size: 14px;\n\t\t\tcolor: #9199AD;\n\t\t\tline-height: 20px;\n\t\t\tmargin-top: 2.5rem;\n\t\t}\n\t\tem {\n\t\t\tdisplay: block;\n\t\t\tmargin-bottom: 1rem;\n\t\t}\n\t}\n\t.comm5_bottom {\n\t\tbackground: url(", ") no-repeat;\n\t\twidth: 249px;\n\t\theight: 61px;\n\t\tline-height: 61px;\n\t\ttext-align: center;\n\t\tcolor: #3E0E00;\n\t\tfont-weight: bold;\n\t\tfont-size: 1rem;\n\t\ttransition: transform 0.2s ease 0s;\n\t\tmargin: auto;\n\t\tmargin-bottom: 4rem;\n\t\tmargin-top: 5rem;\n\t\tcursor: pointer;\n\t}\n\t.comm5_games {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tgap: 15px;\n\t\tmargin-bottom: 15px;\n\t\tspan {\n\t\t\tposition: relative;\n\t\t\tdisplay: inline-block;\n\t\t\tbackground: url(", ") no-repeat;\n\t\t\tbackground-size: 100%;\n\t\t\twidth: 234px;\n\t\t\theight: 254px;\n\t\t\ttext-align: center;\n\t\t\tpadding-top: 30px;\n\t\t}\n\t\tem {\n\t\t\tdisplay: block;\n\t\t\tposition: absolute;\n\t\t\tbackground: #131025;\n\t\t\twidth: calc(100% - 13px);\n\t\t\tleft: 7px;\n\t\t\tborder-radius: 6px 6px 10px 10px;\n\t\t\theight: 48px;\n\t\t\tline-height: 48px;\n\t\t\tbottom: 7px;\n\t\t\tfont-size: .85rem;\n\t\t}\n\t\timg {\n\t\t\twidth: 40%;\n\t\t}\n\t}\n\n\n\t@media (max-width: 1600px) {\n\t\t\n\t}\n\n\n\t@media (max-width: 1400px) {\n\t\tmargin-top: 10rem;\n\n\t\t.comm5_games {\n\t\t\tspan {\n\t\t\t\twidth: 187px;\n\t\t\t\theight: 203px;\n\t\t\t}\n\t\t\tem {\n\t\t\t\theight: 35px;\n\t\t\t\tline-height: 35px;\n\t\t\t\tfont-size: 12px;\n\t\t\t}\n\t\t}\n\t}\n\n\n\t@media (max-width: 750px) {\n\t\tmargin-top: 3rem;\n\n\t\t.comm5_conter {\n\t\t\th1 {\n\t\t\t\tfont-size: 20px;\n\t\t\t\tline-height: 40px;\n\t\t\t\tmargin-bottom: 1rem;\n\t\t\t}\n\t\t\tspan {\n\t\t\t\twidth: 90%;\n\t\t\t\tmargin: auto;\n\t\t\t\tfont-size: 12px;\n\t\t\t\tline-height: 15px;\n\t\t\t}\n\t\t\tem {\n\t\t\t\tmargin-bottom: 10px;\n\t\t\t}\n\t\t}\n\t\t.comm5_bottom {\n\t\t\tmargin-top: 2rem;\n\t\t}\n\t\t.comm5_games {\n\t\t\tflex-wrap: wrap;\n\t\t\tspan {\n\t\t\t\twidth: 164px;\n\t\t\t\theight: 178px;\n\t\t\t\tpadding-top: 20px;\n\t\t\t}\n\t\t\tem {\n\t\t\t\tbackground: rgb(19, 16, 37, 0.6);\n\t\t\t}\n\t\t}\n\t}\n"])), comm3_bottom_namespaceObject, co5_bg_namespaceObject);
function Comm5() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  var _useState = (0,react.useState)(_isMobile()),
    isMobile = _useState[0],
    setIsMobile = _useState[1];
  var navigate = (0,react_router_dist/* useNavigate */.s0)();
  var linkHandler = function linkHandler() {
    navigate("/mint");
    document.documentElement.scrollTop = document.body.scrollTop = 0;
  };
  return /*#__PURE__*/react.createElement(comm5_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "comm5_conter"
  }, /*#__PURE__*/react.createElement("h1", null, t('NFT Exhibition')), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("em", null, t('Welcome to Phase 1 of our exclusive NFT collection, featuring four distinct species: Spiros, Tauros, Baddos, and Dinoo Clan. Each clan is represented by six unique NFTs.')), /*#__PURE__*/react.createElement("em", null, t('All NFTs in the presale are priced at $200 USD, payable in BTC, ETH, or TOX. For detailed purchasing information, please reach out to our authorized distributors.')), /*#__PURE__*/react.createElement("em", null, t("Don't miss out on this unique opportunity to own a piece of digital art from these captivating clans!")))), /*#__PURE__*/react.createElement("div", {
    className: "comm5_bottom",
    onClick: linkHandler
  }, t('Mystery Hatch')), /*#__PURE__*/react.createElement("div", {
    className: "comm5_games"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: co5_1_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("em", null, "Hornoo")), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: co5_2_namespaceObject,
    alt: "",
    style: {
      width: '50%'
    }
  }), /*#__PURE__*/react.createElement("em", null, "Pyroo")), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: co5_3_namespaceObject,
    alt: "",
    style: {
      width: '50%'
    }
  }), /*#__PURE__*/react.createElement("em", null, "Trigloo")), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: co5_4_namespaceObject,
    alt: "",
    style: {
      width: '45%'
    }
  }), /*#__PURE__*/react.createElement("em", null, "Bubbloo")), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: co5_5_namespaceObject,
    alt: "",
    style: {
      width: '60%'
    }
  }), /*#__PURE__*/react.createElement("em", null, "Cycloo")), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: co5_6_namespaceObject,
    alt: "",
    style: {
      width: '60%'
    }
  }), /*#__PURE__*/react.createElement("em", null, "Darkoo"))), /*#__PURE__*/react.createElement("div", {
    className: "comm5_games"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: co5_7_namespaceObject,
    alt: "",
    style: {
      width: '50%'
    }
  }), /*#__PURE__*/react.createElement("em", null, "Leafia")), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: co5_8_namespaceObject,
    alt: "",
    style: {
      width: '50%'
    }
  }), /*#__PURE__*/react.createElement("em", null, "Shadowia")), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: co5_9_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("em", null, "Pyroia")), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: co5_10_namespaceObject,
    alt: "",
    style: {
      width: '60%'
    }
  }), /*#__PURE__*/react.createElement("em", null, "Magica")), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: co5_11_namespaceObject,
    alt: "",
    style: {
      width: '50%'
    }
  }), /*#__PURE__*/react.createElement("em", null, "Blumia")), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: co5_12_namespaceObject,
    alt: "",
    style: {
      width: '70%'
    }
  }), /*#__PURE__*/react.createElement("em", null, "Bongia"))), /*#__PURE__*/react.createElement("div", {
    className: "comm5_games"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: co5_13_namespaceObject,
    alt: "",
    style: {
      width: '55%'
    }
  }), /*#__PURE__*/react.createElement("em", null, "TomTom")), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: co5_14_namespaceObject,
    alt: "",
    style: {
      width: '50%'
    }
  }), /*#__PURE__*/react.createElement("em", null, "TamTam")), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: co5_15_namespaceObject,
    alt: "",
    style: {
      width: '50%'
    }
  }), /*#__PURE__*/react.createElement("em", null, "Psyrus")), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: co5_16_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("em", null, "KikiRiki")), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: co5_17_namespaceObject,
    alt: "",
    style: {
      width: '50%'
    }
  }), /*#__PURE__*/react.createElement("em", null, "Bonga")), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: co5_18_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("em", null, "PlatPus"))), /*#__PURE__*/react.createElement("div", {
    className: "comm5_games"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: co5_19_namespaceObject,
    alt: "",
    style: {}
  }), /*#__PURE__*/react.createElement("em", null, "Junkie")), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: co5_20_namespaceObject,
    alt: "",
    style: {}
  }), /*#__PURE__*/react.createElement("em", null, "Bonkie")), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: co5_21_namespaceObject,
    alt: "",
    style: {}
  }), /*#__PURE__*/react.createElement("em", null, "Burgie")), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: co5_22_namespaceObject,
    alt: "",
    style: {}
  }), /*#__PURE__*/react.createElement("em", null, "Bombie")), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: co5_23_namespaceObject,
    alt: "",
    style: {}
  }), /*#__PURE__*/react.createElement("em", null, "Jokie")), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: co5_24_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("em", null, "Frankie"))));
}
/* harmony default export */ const comm5 = (Comm5);
;// CONCATENATED MODULE: ./public/images/co6_bg.png
const co6_bg_namespaceObject = __webpack_require__.p + "b51c18dde64cc623f13b.png";
;// CONCATENATED MODULE: ./public/images/co6_bg_m.png
const co6_bg_m_namespaceObject = __webpack_require__.p + "aa901f1c5bf71944202c.png";
;// CONCATENATED MODULE: ./public/images/co6_left1.png
const co6_left1_namespaceObject = __webpack_require__.p + "8af2888cda6df1677fe8.png";
;// CONCATENATED MODULE: ./public/images/co6_left1_m.png
const co6_left1_m_namespaceObject = __webpack_require__.p + "bb583516aa7e4189370b.png";
;// CONCATENATED MODULE: ./public/images/co6_left2.png
const co6_left2_namespaceObject = __webpack_require__.p + "f0fb9a82d79f93ee3417.png";
;// CONCATENATED MODULE: ./public/images/co6_left2_m.png
const co6_left2_m_namespaceObject = __webpack_require__.p + "2f6a2d059085af751715.png";
;// CONCATENATED MODULE: ./public/images/co6_left3.png
const co6_left3_namespaceObject = __webpack_require__.p + "39035870e3bdaf6da8f8.png";
;// CONCATENATED MODULE: ./public/images/co6_left3_m.png
const co6_left3_m_namespaceObject = __webpack_require__.p + "3903c26a16b50cf62232.png";
;// CONCATENATED MODULE: ./public/images/co6_games.png
const co6_games_namespaceObject = __webpack_require__.p + "441bad1946f742b6ea81.png";
;// CONCATENATED MODULE: ./src/components/index/comm6.jsx

var comm6_templateObject;
function comm6_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }













var comm6_CustomStyle = styled_components_browser_esm/* default */.ZP.div(comm6_templateObject || (comm6_templateObject = comm6_taggedTemplateLiteralLoose(["\n\tmargin-top: 12rem;\n\n\t.comm6_conter {\n\t\tdisplay: flex;\n\t\tbackground: url(", ") no-repeat;\n\t\tbackground-size: 100%;\n\t\twidth: 1458px;\n\t\theight: 775px;\n\t\tmargin: auto;\n\t\tpadding: 50px 100px;\n\t\tgap: 140px;\n\t}\n\t.comm6_left {\n\t\tpadding-top: 55px;\n\t\th1 {\n\t\t\tfont-size: 3rem;\n\t\t\tline-height: 72px;\n\t\t\tmargin-bottom: 3rem;\n\t\t}\n\t}\n\t.comm6_flex {\n\t\tdisplay: flex;\n\t\twidth: 660px;\n\t\theight: 129px;\n\t\tbackground: rgb(255, 255, 255, 0.08);\n\t\tborder-radius: 10px;\n\t\tpadding: 30px;\n\t\tmargin-bottom: 20px;\n\t\tspan {\n\t\t\tdisplay: block;\n\t\t\tmargin-right: 20px;\n\t\t}\n\t\tem {\n\t\t\tdisplay: block;\n\t\t}\n\t\tb {\n\t\t\tfont-size: 14px;\n\t\t}\n\t\ti {\n\t\t\tdisplay: block;\n\t\t\tfont-size: 12px;\n\t\t\tcolor: #9199AD;\n\t\t\tline-height: 16px;\n\t\t}\n\t}\n\t.comm6_right {\n\t\timg {\n\t\t\tanimation: fadeInTontTop 3s ease 0s infinite;\n\t\t}\n\t}\n\n\n\t@media (max-width: 1600px) {\n\t\t\n\t}\n\n\n\t@media (max-width: 1400px) {\n\t\tmargin-top: 8rem;\n\n\t\t.comm6_conter {\n\t\t\twidth: 1166px;\n\t\t\theight: 620px;\n\t\t\tpadding: 30px 50px;\n\t\t\tgap: 70px;\n\t\t}\n\t\t.comm6_left {\n\t\t\tpadding-top: 30px;\n\t\t\th1 {\n\t\t\t\tfont-size: 2.2rem;\n\t\t\t\tmargin-bottom: 1rem;\n\t\t\t}\n\t\t}\n\t\t.comm6_right {\n\t\t\timg {\n\t\t\t\twidth: 300px;\n\t\t\t}\n\t\t}\n\t}\n\n\n\t@media (max-width: 750px) {\n\t\tmargin-top: 3rem;\n\n\t\t.comm6_conter {\n\t\t\tdisplay: block;\n\t\t\tbackground: url(", ") no-repeat;\n\t\t\tbackground-size: 100%;\n\t\t\twidth: 100%;\n    \t\theight: auto;\n\t\t\tpadding: 0px 15px;\n\t\t}\n\t\t.comm6_left {\n\t\t\th1 {\n\t\t\t\tfont-size: 26px;\n\t\t\t\tline-height: 40px;\n\t\t\t}\n\t\t}\n\t\t.comm6_right {\n\t\t\ttext-align: right;\n\t\t\tmargin-top: -80px;\n\t\t}\n\t\t.comm6_flex {\n\t\t\twidth: 100%;\n\t\t\theight: auto;\n\t\t\tpadding: 30px 10px;\n\t\t}\n\t\t.comm6_flex {\n\t\t\timg {\n\t\t\t\twidth: 68px\n\t\t\t}\n\t\t}\n\t}\n"])), co6_bg_namespaceObject, co6_bg_m_namespaceObject);
function Comm6() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  var _useState = (0,react.useState)(_isMobile()),
    isMobile = _useState[0],
    setIsMobile = _useState[1];
  return /*#__PURE__*/react.createElement(comm6_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "comm6_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm6_left"
  }, /*#__PURE__*/react.createElement("h1", null, t('Arena Showcase')), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
    className: "comm6_flex"
  }, /*#__PURE__*/react.createElement("span", null, !isMobile ? /*#__PURE__*/react.createElement("img", {
    src: co6_left1_namespaceObject,
    alt: ""
  }) : /*#__PURE__*/react.createElement("img", {
    src: co6_left1_m_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement("b", null, t('TOX Special Event')), /*#__PURE__*/react.createElement("i", null, t('Infused with unique elements, the TOX special event awaits your participation! Be a pioneer, vie for exclusive rewards, and embark on a brand new TOX adventure!')))), /*#__PURE__*/react.createElement("div", {
    className: "comm6_flex"
  }, /*#__PURE__*/react.createElement("span", null, !isMobile ? /*#__PURE__*/react.createElement("img", {
    src: co6_left2_namespaceObject,
    alt: ""
  }) : /*#__PURE__*/react.createElement("img", {
    src: co6_left2_m_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement("b", null, t('ETH Special Event')), /*#__PURE__*/react.createElement("i", null, t('Witness the dazzling brilliance of Ethereum, challenge your limits, and seize the opportunity to claim abundant rewards! Embark on the journey of ETH now and create your own legend!')))), /*#__PURE__*/react.createElement("div", {
    className: "comm6_flex"
  }, /*#__PURE__*/react.createElement("span", null, !isMobile ? /*#__PURE__*/react.createElement("img", {
    src: co6_left3_namespaceObject,
    alt: ""
  }) : /*#__PURE__*/react.createElement("img", {
    src: co6_left3_m_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement("b", null, t('BTC Special Event')), /*#__PURE__*/react.createElement("i", null, t('Unveil the mysteries of Bitcoin, climb to new heights, and seize endless glory! Experience the charm of BTC firsthand and win a victory that belongs to you!')))))), /*#__PURE__*/react.createElement("div", {
    className: "comm6_right"
  }, /*#__PURE__*/react.createElement("img", {
    src: co6_games_namespaceObject,
    alt: ""
  }))));
}
/* harmony default export */ const comm6 = (Comm6);
;// CONCATENATED MODULE: ./public/images/comm7_1.png
const comm7_1_namespaceObject = __webpack_require__.p + "5102dc39fb9cba1f6454.png";
;// CONCATENATED MODULE: ./public/images/comm7_2.png
const comm7_2_namespaceObject = __webpack_require__.p + "4986d6eb5590de46f300.png";
;// CONCATENATED MODULE: ./public/images/comm7_3.png
const comm7_3_namespaceObject = __webpack_require__.p + "67ac0e6f64c038175849.png";
;// CONCATENATED MODULE: ./public/images/comm7_4.png
const comm7_4_namespaceObject = __webpack_require__.p + "5f971e49c39e99ba82a2.png";
;// CONCATENATED MODULE: ./src/components/index/comm7.jsx

var comm7_templateObject;
function comm7_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }









var comm7_CustomStyle = styled_components_browser_esm/* default */.ZP.div(comm7_templateObject || (comm7_templateObject = comm7_taggedTemplateLiteralLoose(["\n\tmargin-top: 10rem;\n\n\t.comm7_conter {\n\t\ttext-align: center;\n\t\th1 {\n\t\t\tfont-size: 3rem;\n\t\t\tline-height: 72px;\n\t\t\tmargin-bottom: 0px;\n\t\t}\n\t}\n\t.comm7_flex {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tgap: 30px;\n\t\tmargin-top: 2rem;\n\t}\n\t.comm7_onter {\n\t\twidth: 280px;\n\t\t// background: rgba(255, 255, 255, 0.08);\n    \t// border-radius: 10px;\n\t\tpadding: 20px;\n\t\timg {\n\t\t\twidth: 200px;\n\t\t}\n\t\tem {\n\t\t\tdisplay: block;\n\t\t\ttext-align: center;\n\t\t\tmargin-top: 10px;\n\t\t}\n\t\tspan {\n\t\t\tdisplay: block;\n\t\t\ttext-align: center;\n\t\t\tpadding: 1.5rem 0 1rem;\n\t\t\tfont-size: 1.5rem;\n\t\t\tfont-weight: bold;\n\t\t}\n\t\tli {\n\t\t\tfont-size: .9rem;\n\t\t\tline-height: 25px;\n\t\t}\n\t}\n\t\n\n\t@media (max-width: 1400px) {\n\t\tmargin-top: 5rem;\n\n\t\t.comm7_flex {\n\t\t\tgap: 20px;\n\t\t}\n\t\t.comm7_onter {\n\t\t\twidth: 220px;\n\t\t\timg {\n\t\t\t\twidth: 150px;\n\t\t\t}\n\t\t\tspan {\n\t\t\t\tfont-size: 1.2rem;\n\t\t\t}\n\t\t\tli {\n\t\t\t\tfont-size: .8rem;\n\t\t\t\tline-height: 23px;\n\t\t\t}\n\t\t}\n\t}\n\n\n\t@media (max-width: 750px) {\n\t\tmargin-top: 0px;\n\t\tpadding-top: 3rem;\n\n\t\t.comm7_conter {\n\t\t\th1 {\n\t\t\t\tfont-size: 28px;\n\t\t\t\tline-height: 25px;\n\t\t\t}\n\t\t}\n\t\t.comm7_flex {\n\t\t\tdisplay: block;\n\t\t}\n\t\t.comm7_onter {\n\t\t\twidth: 95%;\n\t\t\tmargin: auto;\n\t\t\tmargin-bottom: 1.5rem;\n\t\t\timg {\n\t\t\t\twidth: 220px;\n\t\t\t}\n\t\t}\n\t}\n"])));
function Comm8() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  var _useState = (0,react.useState)(_isMobile()),
    isMobile = _useState[0],
    setIsMobile = _useState[1];
  return /*#__PURE__*/react.createElement(comm7_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "comm7_conter"
  }, /*#__PURE__*/react.createElement("h1", null, t('Operations Team'))), /*#__PURE__*/react.createElement("div", {
    className: "comm7_flex"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm7_onter"
  }, /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement("img", {
    src: comm7_1_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("span", null, t('Alan')), /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, t('CEO Co-founder')), /*#__PURE__*/react.createElement("li", null, t('CSO of INTOverse')), /*#__PURE__*/react.createElement("li", null, t('TikTok-authorized MCN Agency Leader')), /*#__PURE__*/react.createElement("li", null, t('Former COO of leading GameFi Axie')))), /*#__PURE__*/react.createElement("div", {
    className: "comm7_onter"
  }, /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement("img", {
    src: comm7_2_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("span", null, t('John Rose')), /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, t('CMO')), /*#__PURE__*/react.createElement("li", null, t('Graduated from Stanford University')), /*#__PURE__*/react.createElement("li", null, t('Leading GameFi Core Team')))), /*#__PURE__*/react.createElement("div", {
    className: "comm7_onter"
  }, /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement("img", {
    src: comm7_3_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("span", null, t('Rein Ceren')), /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, t('CSPO')), /*#__PURE__*/react.createElement("li", null, t('Ambassador for Overseas Market Promotion')), /*#__PURE__*/react.createElement("li", null, t('GameFi Digital Marketing Expert')))), /*#__PURE__*/react.createElement("div", {
    className: "comm7_onter"
  }, /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement("img", {
    src: comm7_4_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("span", null, t('Vance')), /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, t('CTO of Phantom Arena')), /*#__PURE__*/react.createElement("li", null, t('Graduated from the Computer Science Department at Stanford University')), /*#__PURE__*/react.createElement("li", null, t('Proficient in advanced Java programming language')), /*#__PURE__*/react.createElement("li", null, t('Currently serving as a top global gaming technology consultant'))))));
}
/* harmony default export */ const comm7 = (Comm8);
;// CONCATENATED MODULE: ./public/images/huoban_pc.png
const huoban_pc_namespaceObject = __webpack_require__.p + "ea1998060d9e2f3ea691.png";
;// CONCATENATED MODULE: ./public/images/huoban_m.png
const huoban_m_namespaceObject = __webpack_require__.p + "087e8a1467af8094ed12.png";
;// CONCATENATED MODULE: ./src/components/index/comm8.jsx

var comm8_templateObject;
function comm8_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }







var comm8_CustomStyle = styled_components_browser_esm/* default */.ZP.div(comm8_templateObject || (comm8_templateObject = comm8_taggedTemplateLiteralLoose(["\n\tmargin-top: 10rem;\n\n\t.comm7_conter {\n\t\ttext-align: center;\n\t\th1 {\n\t\t\tfont-size: 3rem;\n\t\t\tline-height: 72px;\n\t\t\tmargin-bottom: 0px;\n\t\t}\n\t}\n\t.comm7_ico {\n\t\twidth: 1100px;\n\t\tmargin: auto;\n\t\tmargin-top: 2rem;\n\t\timg {\n\t\t\twidth: 100%;\n\t\t}\n\t}\n\t\n\n\t@media (max-width: 1600px) {\n\t\t\n\t}\n\n\n\t@media (max-width: 1400px) {\n\t\tmargin-top: 5rem;\n\t}\n\n\n\t@media (max-width: 750px) {\n\n\t\tmargin-top: 0px;\n\t\tpadding-top: 3rem;\n\n\t\t.comm7_conter {\n\t\t\th1 {\n\t\t\t\tfont-size: 28px;\n\t\t\t\tline-height: 25px;\n\t\t\t}\n\t\t}\n\t\t.comm7_ico {\n\t\t\twidth: 95%;\n\t\t}\n\t}\n"])));
function comm8_Comm8() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  var _useState = (0,react.useState)(_isMobile()),
    isMobile = _useState[0],
    setIsMobile = _useState[1];
  return /*#__PURE__*/react.createElement(comm8_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "comm7_conter"
  }, /*#__PURE__*/react.createElement("h1", null, t('Supporting Partners'))), !isMobile ? /*#__PURE__*/react.createElement("div", {
    className: "comm7_ico"
  }, /*#__PURE__*/react.createElement("img", {
    src: huoban_pc_namespaceObject,
    alt: ""
  })) : /*#__PURE__*/react.createElement("div", {
    className: "comm7_ico"
  }, /*#__PURE__*/react.createElement("img", {
    src: huoban_m_namespaceObject,
    alt: ""
  })));
}
/* harmony default export */ const comm8 = (comm8_Comm8);
;// CONCATENATED MODULE: ./public/images/co9_1.png
const co9_1_namespaceObject = __webpack_require__.p + "3581305d8d0d45f80118.png";
;// CONCATENATED MODULE: ./public/images/co9_m_1.jpg
const co9_m_1_namespaceObject = __webpack_require__.p + "c8e088d057e2d4ae0b01.jpg";
;// CONCATENATED MODULE: ./src/components/index/comm9.jsx

var comm9_templateObject;
function comm9_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }








var comm9_CustomStyle = styled_components_browser_esm/* default */.ZP.div(comm9_templateObject || (comm9_templateObject = comm9_taggedTemplateLiteralLoose(["\n\tmargin-top: 13rem;\n\n\t.comm7_conter {\n\t\ttext-align: center;\n\t\th1 {\n\t\t\tfont-size: 3rem;\n\t\t\tline-height: 72px;\n\t\t\tmargin-bottom: 0px;\n\t\t}\n\t\tspan {\n\t\t\tdisplay: block;\n\t\t\twidth: 680px;\n\t\t\tmargin: auto;\n\t\t\tfont-size: 14px;\n\t\t\tcolor: #9199AD;\n\t\t\tline-height: 20px;\n\t\t\tmargin-top: 1rem;\n\t\t}\n\t\tem {\n\t\t\tdisplay: block;\n\t\t\tmargin-bottom: 1rem;\n\t\t}\n\t}\n\t.comm7_bottom {\n\t\tbackground: url(", ") no-repeat;\n\t\tbackground-size: 100%;\n\t\twidth: 249px;\n\t\theight: 61px;\n\t\tline-height: 61px;\n\t\ttext-align: center;\n\t\tcolor: #3E0E00;\n\t\tfont-weight: bold;\n\t\tfont-size: 1rem;\n\t\ttransition: transform 0.2s ease 0s;\n\t\tmargin: auto;\n\t\tmargin-bottom: 5rem;\n\t\tmargin-top: 5rem;\n\t\tcursor: pointer;\n\t\ta {\n\t\t\tdisplay: block;\n\t\t\tcolor: #3E0E00;\n\t\t}\n\t}\n\t.comm7_ico {\n\t\tdisplay: flex;\n\t\tgap: 45px;\n\t\tjustify-content: center;\n\t\tmargin-bottom: 2rem;\n\t}\n\t.comm7_imgs {\n\t\ttext-align: center;\n\t}\n\t\n\n\t@media (max-width: 1400px) {\n\t\tmargin-top: 5rem;\n\t}\n\n\n\t@media (max-width: 750px) {\n\t\tbackground: #080614;\n\t\tmargin-top: 0px;\n\t\tpadding-top: 5rem;\n\n\t\t.comm7_conter {\n\t\t\th1 {\n\t\t\t\tfont-size: 28px;\n\t\t\t\tline-height: 25px;\n\t\t\t}\n\t\t\tspan {\n\t\t\t\twidth: 90%;\n\t\t\t\tfont-size: 12px;\n\t\t\t\tline-height: 15px;\n\t\t\t}\n\t\t}\n\t\t.comm7_bottom {\n\t\t\tmargin-bottom: 3rem;\n\t\t\tmargin-top: 3rem;\n\t\t}\n\t\t.comm7_ico {\n\t\t\tflex-wrap: wrap;\n\t\t\tgap: 20px;\n\t\t\timg {\n\t\t\t\twidth: 100px;\n\t\t\t}\n\t\t}\n\t\t.comm7_imgs {\n\t\t\tmargin: 0 10px;\n\t\t\timg {\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t}\n\t}\n"])), comm3_bottom_namespaceObject);
function comm9_Comm8() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  var _useState = (0,react.useState)(_isMobile()),
    isMobile = _useState[0],
    setIsMobile = _useState[1];
  return /*#__PURE__*/react.createElement(comm9_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "comm7_conter"
  }, /*#__PURE__*/react.createElement("h1", null, t('Game Guild Showcase')), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("em", null, t("Investors have the opportunity to collaborate with game guilds. These guilds provide professional players to represent NFT owners in competitions, increasing their chances of winning rewards. Players climb to the pinnacle of wealth and glory through competitions. Investors partnering with guilds can effortlessly gain profits.")))), /*#__PURE__*/react.createElement("div", {
    className: "comm7_bottom"
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "https://t.me/+JzBiaNg0N6Q4NmFk",
    target: "_blank"
  }, t('Telegram'))), !isMobile ? /*#__PURE__*/react.createElement("div", {
    className: "comm7_imgs"
  }, /*#__PURE__*/react.createElement("img", {
    src: co9_1_namespaceObject,
    alt: ""
  })) : /*#__PURE__*/react.createElement("div", {
    className: "comm7_imgs"
  }, /*#__PURE__*/react.createElement("img", {
    src: co9_m_1_namespaceObject,
    alt: ""
  })));
}
/* harmony default export */ const comm9 = (comm9_Comm8);
;// CONCATENATED MODULE: ./public/images/comm10_zh.png
const comm10_zh_namespaceObject = __webpack_require__.p + "f871b79ca8c944298868.png";
;// CONCATENATED MODULE: ./public/images/comm10_en.png
const comm10_en_namespaceObject = __webpack_require__.p + "f658369e104b620655e6.png";
;// CONCATENATED MODULE: ./public/images/comm10_m_zh.png
const comm10_m_zh_namespaceObject = __webpack_require__.p + "58e30455dc23d6380278.png";
;// CONCATENATED MODULE: ./public/images/comm10_m_en.png
const comm10_m_en_namespaceObject = __webpack_require__.p + "8c9d3d31778dcd6ec50e.png";
;// CONCATENATED MODULE: ./src/components/index/comm10.jsx

var comm10_templateObject;
function comm10_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }








var comm10_CustomStyle = styled_components_browser_esm/* default */.ZP.div(comm10_templateObject || (comm10_templateObject = comm10_taggedTemplateLiteralLoose(["\n\tposition: relative;\n\n\t.comm10_conter {\n\t\timg {\n\t\t\twidth: 100%;\n\t\t}\n\t}\n\t.footer_conter {\n\t\tposition: absolute;\n\t\tbottom: 0px;\n\t\twidth: 60%;\n\t\tleft: 20%;\n\t\theight: 100px;\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t\tmargin: auto;\n\t\timg {\n\t\t\theight: 20px;\n\t\t\tmargin-right: 2rem;\n\t\t}\n\t\tspan {\n\t\t\tdisplay: block;\n\t\t\tfont-size: 14px;\n\t\t\tcolor: #fff;\n\t\t}\n\t\t.footer_mail {\n\t\t\tcolor: #fff;\n\t\t\tmargin-left: 15px;\n\t\t}\n\t}\n\n\n\t@media (max-width: 1400px) {\n\t\t.footer_conter {\n\t\t\twidth: 80%;\n\t\t\tleft: 10%;\n\t\t}\n\t}\n\n\n\t@media (max-width: 750px) {\n\t\t.footer_conter {\n\t\t\tposition: relative;\n\t\t\tdisplay: block;\n\t\t\twidth: 90%;\n\t\t\tleft: 0%;\n\t\t\theight: auto;\n\t\t\ttext-align: center;\n\t\t\tpadding: 30px 0;\n\t\t\timg {\n\t\t\t\tmargin: 0 20px;\n\t\t\t}\n\t\t\tspan {\n\t\t\t\tpadding: 10px 0;\n\t\t\t}\n\t\t\t.footer_mail {\n\t\t\t\tdisplay: block;\n\t\t\t\tmargin-left: 0px;\n\t\t\t}\n\t\t}\n\t}\n"])));
function Comm9() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  var _useState = (0,react.useState)(_isMobile()),
    isMobile = _useState[0],
    setIsMobile = _useState[1];
  return /*#__PURE__*/react.createElement(comm10_CustomStyle, null, !isMobile ? /*#__PURE__*/react.createElement("div", {
    className: "comm10_conter"
  }, (i18n == null ? void 0 : i18n.language) === 'en' ? /*#__PURE__*/react.createElement("img", {
    src: comm10_en_namespaceObject,
    alt: ""
  }) : /*#__PURE__*/react.createElement("img", {
    src: comm10_zh_namespaceObject,
    alt: ""
  })) : /*#__PURE__*/react.createElement("div", {
    className: "comm10_conter"
  }, (i18n == null ? void 0 : i18n.language) === 'en' ? /*#__PURE__*/react.createElement("img", {
    src: comm10_m_en_namespaceObject,
    alt: ""
  }) : /*#__PURE__*/react.createElement("img", {
    src: comm10_m_zh_namespaceObject,
    alt: ""
  })));
}
/* harmony default export */ const comm10 = (Comm9);
;// CONCATENATED MODULE: ./public/images/footer_bg.png
const footer_bg_namespaceObject = __webpack_require__.p + "049d2000f7d7b8dacf3c.png";
;// CONCATENATED MODULE: ./public/images/footer_github.png
const footer_github_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAAAXNSR0IArs4c6QAAA6FJREFUWEetl2vIZmMUhq9bzkohyjhmwhfJaQZNOeQw8kMzDplIEiPUiAyFHIpkaEwOP6ZGGdSEyOkHf8wYIUxiFDEhJFJOn+SUw637nWdPe55vv+873vdbP/fez7qevZ51r7UesYVm+xhgPjALOAjYFRDwHfAp8BbwkqQ3t9Blb/FAsx3gbcDhBTZsyfvA3cBTkv4e9HFfuO39gIeBk4fR+rx/D7hS0tv91nfCbZ8OrAJ2GxHcLPsLuEVSIjHFpsBtnwk8CewwJri9fEWJwr/th5vBbc8BXp5mcMNbIenyTrjt3YH1wIzWB58kcYAcw9H/IxJ/AGuBdcB1wI5l7c2S7mz8bPpz2znjCyrApo9tHw/cDxwMfF7k9SdgYBfgQGAv4HngRkmfxZft1a2kTfaf0MixBy8ajk7rHJgvKc56ZntbYCdJP3VFwfYMSd+039leDlzRevZhZCvpnwb+ApBEq+08SQn7yGY7yXZZ5eBCSauU3ZYw5q9qWyZp8cjkjdGKzlMd27ZO0rGBLwQe6gD8DBwq6esx4WcAL1Y+kieHBf4EsKADcJekm8YBt3Ll1SRa5euawN8FjuyAzJb0zjTBrwXurXz1zjxhbWu7l9jA3nXmjroR22cBz1Tr1waegrBd9SI1ObL5flRge53tecBzla/1gf/aqkDt9xOSNkwT/GJgZRc81Wr/Dsg8SdH/2GZ7KVBLdnX+PI3klA7CSkmXjEu2vRWQqjZR+Xo08HuA6zsgvxWdfzHOBmyfAzzd4WNR4CcBr/QBRGpz+9XyYZuyfUCZ7dIxN8tB4KjAtwbSOptzTwJGAc0U8zGwCFgjKRIcaqUBXQQs6TMNbZA00TSWq4H7ite0wHOBs4EHW0pIr0+EXgeerTdie+fSko8DTi3ttd9G03KXNPA0+4+AfcvXqXrp35cCD1QelkqakiO2UyteA2YPCc2PwExJk+1hIi21La07JN1aZHIVkK6XJJwlKRudYrbTOtNCB9liScvyQT3Dpf6mDsd+iDxS5WzPBPbI9CIpl4ROsx3JRrr97A3gxAwSXfBtgMeByCOWXrxQ0gdDs2xj7x6knC+BOe1+0TU6J7yPAOcXYOauLPwWiGSOkPR7n7D3g38FnFaX60E3lhvKNWn7FmgS2FNSpNh15l3wqGNBV4cceFezfUjpw3OBlMlfcvYD4LlaRaqx5MbtwPLmjOvdDr0oZkGZbpPJk10ya5za3qfUhjXAY5HToFz5D/OQW6M5HnxhAAAAAElFTkSuQmCC";
;// CONCATENATED MODULE: ./public/images/footer_twimg.png
const footer_twimg_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAfCAYAAAAbW8YEAAAAAXNSR0IArs4c6QAABB5JREFUSEutl2nIlVUUhZ/VbEVU9KOkedAsLafKFCsDwzT8148oygqywUgroky0lIqQyoomglDI/kaoDRZNNBllszYQgVGJCFY0mdWO9bHfj3Pv9773ftc6v+7wvmedvfbaa++jiHgaOJfmtRk4WdJPHZ5p/Csi9gPeAo4FVgPnKyIOAr4ADgS2A7sVO+wCCFghadZOgj4HTAM+BCZI2u4NiYgLgKeA94DJwK4JcCawJj9Pk/RCL8ARsRS4EfgBOEXSd36/DzSBVwHnAfMl3VX8/igwG/gWOEHSL4MBjohLgOXAn8AkSQ6ob5WghwAbgX2AUZI+z8P4+2fAEcBjkq7sBhoR4zOPuwOzJK0o3+kHTYBLgSeA9ZLGFdFOAV7O71MkvdoEHBGHAu8CDmKppJvan20BTeC1wFTgVkl3FsCPAI7yG+BESb+3bxYRewLvAKOB5yXVVkUd6GFJszdwqWzIw+ydNB8J3C9pbg2oxWhROjWnSfq5jpEBoAngiBzZemC8pMjfzwJeyY0mSnq7YGI+cAewLZX6dVMKakETwHlzySyQ5M0qlT8MXAV8CYyUtCMiZgLP5CNnS6oOVovbCfTopNNmMVqSFeyaNs2fAkcBzvlKYB2wL3CdpAe6qbsRNAGct/uAD4BxBc1mwEz8AWwFrNjHJV3RDbClTjuUgH3zdGChpCUFzQ8BV+d3l9NUSf/8X6DDkk778BhJnyQLQ/J3p2GJpIWDARxUpAlwM2Br/CiBKzWfAbwG/J15d667ro45Ld+OiPeBscAiSYsLmh8E5riLSBrTFbH03m4PR8TIVKlNY6ykj5OFvVLlprmlWfRcp+0vRIRLwmZxHGBA57dPOBHhdvg6sCObhftz4+qF3qr1VZvdJun2gmbX57VmQ9KE/wwaETaBW4AtHjeyRi0m02xxOVrTbgM5Brhekuu7dnWNNCIuBJ5M6iZLWhcRVrIV7fIxzVavgScBb6Rp2CJr/bebI1mNNnVHcbkk91pvbmt0VK7hxZIWFTQvsx06x5LsXANWJ+91E/aIMRRYJmleWwk5bz6QxdRE8zWS3CBaVlNr85jhZuy6fEmSm/qAFRHOm/3ZpuDeW6l5IvAm8BswQtKm8uUmUM80FwNfAadK+rEBtKzRFissDjTg0HWTg2eauwEP1wZ032xcEVFZYaVmz7fO+x6Zdw/Z/Xrwf+2D2fRizj1H0oudAAvxVI3do81JhZrdndylPLaY5u9bQCPi+LQ5XwNukHTvYAAzKo+pBjzcI4ukBcWB7nHdAs9KmtEPGhEH5NhoKpZL8ija04oIi82TpGl2w3fjN82+LbieRwAXSVpZXSuqecjzqqfxv3pCzIcjwnXsA/+alHp/H8K9d/8c2ob7AuV8XAb4nmFA39J2auUNzbZ4cIcN1v4LnUOw7T44WoAAAAAASUVORK5CYII=";
;// CONCATENATED MODULE: ./src/components/footer/index.jsx

var footer_templateObject;
function footer_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }







var footer_CustomStyle = styled_components_browser_esm/* default */.ZP.div(footer_templateObject || (footer_templateObject = footer_taggedTemplateLiteralLoose(["\n\tbackground: url(", ") no-repeat center;\n\tbackground-size: auto;\n\tcolor: #73798d;\n\t\n\t.footer_conter {\n\t\twidth: 60%;\n\t\theight: 100px;\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t\tmargin: auto;\n\t\timg {\n\t\t\theight: 20px;\n\t\t\tmargin-right: 2rem;\n\t\t}\n\t\tspan {\n\t\t\tdisplay: block;\n\t\t\tfont-size: 14px;\n\t\t\tcolor: #fff;\n\t\t}\n\t\t.footer_mail {\n\t\t\tcolor: #fff;\n\t\t\tmargin-left: 15px;\n\t\t}\n\t}\n\t\n\n\t@media (max-width: 1400px) {\n\t\t.footer_conter {\n\t\t\twidth: 80%;\n\t\t}\n\t}\n\n\n\t@media (max-width: 750px) {\n\t\tbackground: none;\n\t\t.footer_conter {\n\t\t\tdisplay: block;\n\t\t\twidth: 90%;\n\t\t\theight: auto;\n\t\t\ttext-align: center;\n\t\t\tpadding: 30px 0;\n\t\t\timg {\n\t\t\t\tmargin: 0 20px;\n\t\t\t}\n\t\t\tspan {\n\t\t\t\tpadding: 10px 0;\n\t\t\t}\n\t\t\t.footer_mail {\n\t\t\t\tdisplay: block;\n\t\t\t\tmargin-left: 0px;\n\t\t\t}\n\t\t}\n\t}\n"])), footer_bg_namespaceObject);
var FootView = function FootView() {
  return /*#__PURE__*/react.createElement(footer_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "footer_conter"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "https://twitter.com/arena_phantom",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: footer_twimg_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "https://t.me/+JzBiaNg0N6Q4NmFk",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: footer_dianbao_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("img", {
    src: footer_github_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("span", null, "Copyright \xA9 2024. phantomarena.co All rights reserved.", /*#__PURE__*/react.createElement("a", {
    href: "mailto:support@phantomarena.co",
    target: "_blank",
    className: "footer_mail"
  }, "support@phantomarena.co"))));
};
/* harmony default export */ const footer = (FootView);
;// CONCATENATED MODULE: ./public/images/index_bg.png
const index_bg_namespaceObject = __webpack_require__.p + "5d27c80dac157ccc6769.png";
;// CONCATENATED MODULE: ./public/images/index_bg_m.jpg
const index_bg_m_namespaceObject = __webpack_require__.p + "d18fb91e6fb5aa71dafc.jpg";
;// CONCATENATED MODULE: ./public/images/index_bg1.png
const index_bg1_namespaceObject = __webpack_require__.p + "38d5b4ba72d61915f1c3.png";
;// CONCATENATED MODULE: ./public/images/home_bg1.png
const home_bg1_namespaceObject = __webpack_require__.p + "5e8c676b42083e28ef36.png";
;// CONCATENATED MODULE: ./public/images/home_bg2.png
const home_bg2_namespaceObject = __webpack_require__.p + "2a3b966448ec260bc74f.png";
;// CONCATENATED MODULE: ./public/images/home_bg3.png
const home_bg3_namespaceObject = __webpack_require__.p + "c5812b6ca09769a21888.png";
;// CONCATENATED MODULE: ./public/images/home_bg4.png
const home_bg4_namespaceObject = __webpack_require__.p + "98c4b273d493bf48b89f.png";
;// CONCATENATED MODULE: ./public/images/home_bg5.png
const home_bg5_namespaceObject = __webpack_require__.p + "45e9b346740e8bb6bdd3.png";
;// CONCATENATED MODULE: ./src/pages/index/index.jsx

var index_templateObject, index_templateObject2, _templateObject3, _templateObject4, _templateObject5;
function index_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }






















var CustomStyle1 = styled_components_browser_esm/* default */.ZP.div(index_templateObject || (index_templateObject = index_taggedTemplateLiteralLoose(["\n\tbackground: url(", ") no-repeat;\n\tbackground-size: 100%;\n\n\t@media (max-width: 750px) {\n\t\t// background: none;\n\t\t// background-size: 100%;\n\t}\n"])), home_bg1_namespaceObject);
var CustomStyle2 = styled_components_browser_esm/* default */.ZP.div(index_templateObject2 || (index_templateObject2 = index_taggedTemplateLiteralLoose(["\n\tbackground: url(", ") no-repeat;\n\tbackground-size: 100%;\n\n\t@media (max-width: 750px) {\n\t\t// background: none;\n\t\t// background-size: 100%;\n\t}\n"])), home_bg2_namespaceObject);
var CustomStyle3 = styled_components_browser_esm/* default */.ZP.div(_templateObject3 || (_templateObject3 = index_taggedTemplateLiteralLoose(["\n\tbackground: url(", ") no-repeat;\n\tbackground-size: 100%;\n\n\t@media (max-width: 750px) {\n\t\t// background: none;\n\t\t// background-size: 100%;\n\t}\n"])), home_bg3_namespaceObject);
var CustomStyle4 = styled_components_browser_esm/* default */.ZP.div(_templateObject4 || (_templateObject4 = index_taggedTemplateLiteralLoose(["\n\tbackground: url(", ") no-repeat;\n\tbackground-size: 100%;\n\n\t@media (max-width: 750px) {\n\t\t// background: none;\n\t\t// background-size: 100%;\n\t}\n"])), home_bg4_namespaceObject);
var CustomStyle5 = styled_components_browser_esm/* default */.ZP.div(_templateObject5 || (_templateObject5 = index_taggedTemplateLiteralLoose(["\n\tbackground: url(", ") no-repeat;\n\tbackground-size: 100%;\n\n\t@media (max-width: 750px) {\n\t\t// background: none;\n\t\t// background-size: 100%;\n\t}\n"])), home_bg5_namespaceObject);
function Index() {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(header, null), /*#__PURE__*/react.createElement(comm1, null), /*#__PURE__*/react.createElement(CustomStyle1, null, /*#__PURE__*/react.createElement(comm2, null), /*#__PURE__*/react.createElement(comm3, null)), /*#__PURE__*/react.createElement(CustomStyle2, null, /*#__PURE__*/react.createElement(comm4, null)), /*#__PURE__*/react.createElement(CustomStyle3, null, /*#__PURE__*/react.createElement(comm5, null)), /*#__PURE__*/react.createElement(comm6, null), /*#__PURE__*/react.createElement(CustomStyle4, null, /*#__PURE__*/react.createElement(comm7, null), /*#__PURE__*/react.createElement(comm8, null)), /*#__PURE__*/react.createElement(CustomStyle5, null, /*#__PURE__*/react.createElement(comm9, null), /*#__PURE__*/react.createElement(comm10, null)), /*#__PURE__*/react.createElement(footer, null));
}
/* harmony default export */ const index = (Index);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(73964);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(59749);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(86544);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.async-iterator.js
var es_symbol_async_iterator = __webpack_require__(58373);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.to-string-tag.js
var es_symbol_to_string_tag = __webpack_require__(66793);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.json.to-string-tag.js
var es_json_to_string_tag = __webpack_require__(7629);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.math.to-string-tag.js
var es_math_to_string_tag = __webpack_require__(77509);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(47522);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reverse.js
var es_array_reverse = __webpack_require__(93374);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(12826);
// EXTERNAL MODULE: ./node_modules/react-countdown/dist/index.es.js
var index_es = __webpack_require__(98130);
// EXTERNAL MODULE: ./node_modules/.store/crypto-js@4.2.0/node_modules/crypto-js/index.js
var crypto_js = __webpack_require__(41292);
var crypto_js_default = /*#__PURE__*/__webpack_require__.n(crypto_js);
// EXTERNAL MODULE: ./node_modules/copy-to-clipboard/index.js
var copy_to_clipboard = __webpack_require__(20640);
var copy_to_clipboard_default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard);
// EXTERNAL MODULE: ./node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(70794);
;// CONCATENATED MODULE: ./src/config/abi/erc20.json
const erc20_namespaceObject = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]');
;// CONCATENATED MODULE: ./src/config/abi/mint_abi.json
const mint_abi_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"address","name":"_Phantom","type":"address"},{"internalType":"address","name":"_USDT","type":"address"},{"internalType":"address","name":"_TOX","type":"address"},{"internalType":"address","name":"_NADA","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"NADA","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Phantom","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOX","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOXPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDT","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string[]","name":"_names","type":"string[]"}],"name":"addNames","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"endId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"endTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNameIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"list","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxNftMintCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"NADAId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mintByNADA","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintByTOX","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintByUSD","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"nameCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"nftMintTimes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"random","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_endTime","type":"uint256"}],"name":"setEndTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_isOpen","type":"bool"}],"name":"setOpen","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_usdtPrice","type":"uint256"},{"internalType":"uint256","name":"_toxPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_totalSupply","type":"uint256"}],"name":"setTotalSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
;// CONCATENATED MODULE: ./src/config/abi/nft_abi.json
const nft_abi_namespaceObject = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_fromTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_toTokenId","type":"uint256"}],"name":"BatchMetadataUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"MetadataUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"uint256","name":"rarity","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"series","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"uri","type":"string"}],"name":"TokenBaseURIUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"UpdateName","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rarity","type":"uint256"}],"name":"UpdateRatity","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"series","type":"uint256"}],"name":"UpdateSeries","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"exist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getParams","outputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"rarity","type":"uint256"},{"internalType":"uint256","name":"series","type":"uint256"}],"internalType":"struct PhantomHero.Params","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"list","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"rarity","type":"uint256"},{"internalType":"uint256","name":"series","type":"uint256"}],"name":"safeMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"uri","type":"string"}],"name":"setTokenURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"name","type":"string"}],"name":"updateName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"rarity","type":"uint256"}],"name":"updateRatity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"series","type":"uint256"}],"name":"updateSeries","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
;// CONCATENATED MODULE: ./src/config/const/index.ts



var abiErc20 = erc20_namespaceObject;
var abiMint = mint_abi_namespaceObject;
var abiNft = nft_abi_namespaceObject;
;// CONCATENATED MODULE: ./src/hook/useContract.ts
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-use-before-define */


function useERC20Contract(address) {
  return useContract(address, abiErc20);
}
function useMintContract(address) {
  return useContract(address, abiMint);
}
function useNFTContract(address) {
  return useContract(address, abiNft);
}
function useContract(address, ABI) {
  var _require = __webpack_require__(99922),
    getContractObj = _require.getContractObj;
  return (0,react.useMemo)(function () {
    try {
      return getContractObj(address, ABI);
    } catch (error) {
      console.error('Failed to get contract', error);
      return null;
    }
  }, [address, ABI]);
}
;// CONCATENATED MODULE: ./src/config/const/address.ts
var addressToxToken = {
  56: '',
  97: '0x4e503CD5b6393dfad896434c21aF8452DC5Ca627',
  9001: '0x7A5aceEb5475726E61242d340CF601BE60D5b1EB'
};
var addressUsdtToken = {
  56: '0x55d398326f99059fF775485246999027B3197955',
  97: '0x44004827f2F72566E12884A38f63f72F2a5143ea'
};
var addressMintContract = {
  56: '',
  97: '0xb832eb133bd6477353e3f94882baa3856a7a6fc4',
  9001: '0x38b109d1b82ED6a00d6016c89d4E1d5FCAB5eA8f'
};
var addressNFTContract = {
  56: '',
  97: '0x2621410ef1cbbf6154de32e2c04b74b040fa9724',
  9001: '0x510Ec01c5ECDe6f66FEBc58ac0E672c8c1b895bE'
};
;// CONCATENATED MODULE: ./public/images/mint_ico2.png
const mint_ico2_namespaceObject = __webpack_require__.p + "8837b298c274e51c29a1.png";
;// CONCATENATED MODULE: ./src/pages/index/const.js

var partnersAnList = [{
  img: mint_ico2_namespaceObject
}, {
  img: mint_ico2_namespaceObject
}, {
  img: mint_ico2_namespaceObject
}, {
  img: mint_ico2_namespaceObject
}, {
  img: mint_ico2_namespaceObject
}, {
  img: mint_ico2_namespaceObject
}, {
  img: mint_ico2_namespaceObject
}, {
  img: mint_ico2_namespaceObject
}];
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(57267);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(97195);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 70 modules
var input = __webpack_require__(9626);
// EXTERNAL MODULE: ./node_modules/@ethersproject/constants/lib.esm/bignumbers.js
var bignumbers = __webpack_require__(21046);
// EXTERNAL MODULE: ./node_modules/web3/dist/web3.min.js
var web3_min = __webpack_require__(37918);
var web3_min_default = /*#__PURE__*/__webpack_require__.n(web3_min);
;// CONCATENATED MODULE: ./src/components/Loader/Dots.tsx

var Dots_templateObject;
function Dots_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var Dots = styled_components_browser_esm/* default */.ZP.span(Dots_templateObject || (Dots_templateObject = Dots_taggedTemplateLiteralLoose(["\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    33% {\n      content: '..';\n    }\n    66% {\n      content: '...';\n    }\n  }\n"])));
/* harmony default export */ const Loader_Dots = (Dots);
;// CONCATENATED MODULE: ./public/images/TOX.png
const TOX_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEkUlEQVRIiX3WTYxlRRUH8F/d99GvXzMfdMO0w5D5wIkZhEgg0wE/RqMhKiG4GGThwsDKGNy4cAMJEI1GCAEXmrhxwcoYY4QxgchCTDRCRBmiSMQAgxky7RiYnhneTE+/j3uLRd373n2vmzlJpereU3X+55z616kKPzkSQUADzZj6qgWEaKnBVRn7M/YEmoGzgRNYDawF+pWdZHHSV9J0ebkJd+Fowc2VgaxUZqmdwu/xNP6MDz7KWPiIyK5tcH/ge2iVRoWY5lXfFWAw/v9s4MeRv2wVWWaz3IJjOQ/ktCIK5IgN8hEb5xmNiFnS1dqdBX/Ed7aKbBZsJfJczi1F6VllKGZs9BLo8pFCe1c02ih103NbkZ/h+5vAwmR8EMeKYDmf9lYM9C/QnGflwdyBe/pGRTTKN0U2yQIP49tTYKM0YUfBL3J25yjC9MLRkDDHyv3c8LW+M+8N9M9mNJMjdefi9PgJrIzBSuXXC74wlZIw9lB/g6XrufEbXBhErhjq7omG/XJOmI7MZNwt+EEZjCxnKfLdukeVpzGQR7IOu25IOzxcb9p5KNc9ODAaUBTluplsjG3wVdxWRXa44MZZzyrwYcm67lL6vzDfNBearrnroqtvy/V75MXEuQp0hjR3F7SzyJfjZuW4LSzS6LJ+LoHNzTUsbe+a2zlw8L6exZsKg3WKOAERZjLEVwp2ZkWwshWjouTxgSNc8ylOHicfJMArl+ZdvbhNd/fA9d/q2X4wGg5qhCrTWgWQsxfXZpH9saYYpzAwHLD/0+y7lazNYD3pA3YtL9i1uM2OA0OfvO+ibK62f1WmaiQr2NuM7KgsVGAhUgxZPsT+W9Nh3HuY9gK9/zO3jXaXnUvzmh8EncPrrrtz4K3ftWVS2atAq4Mcoh1ZwWirNPYvcfNR2vM0O1x1XUrjf17gzDvGcsX2jm637eN3DLZk47gFeRY5XRFjTJRAnrP7kCk58RIvPZWqSV06C23NVpzs9Yy9cryaRd6os3HMyCyBVrL6Os89Ru/sJN3FMPWNLMhCmCoE9QJeMMz5b4YX68QYEyWwfjb971/ghZ9z5l2u3EfMU5QXz02cCUU2FVF9XHAcaxmelwrFFFho8fbLyVDvfd45Tmuebcu88jSv/CaB5kNCUfjf683JFoTU187tM0POZXgbv648rMCaHV59lnf/RdZMi1rbOfkab/yJ029x7BHWThbOnYr+9qvWNO0n0V2KPFPd8JfwJDbqYCGwfoFjjybApX3pkFeOrK1yqcf51dwfftp2/nQQs5m9SpXk0YoX4eHPjy/vB/EjM5L36SywuIf3TtBsJIOjDT7xmWj9DKf/HbQ66UxVz4byqfBaxpfwvhmwNn6JuzcBDpO77U4KO6CR0e+l8dz8BKj2HjkV+GKDNytS119XA9xbZuGeOlijlfqiBCKltLWQoog1XdlO4GiDN+t2Zt8gF/FNPCTV0ymZOaTTt8TkPvtteYf9Y3b9Vq+rPn6Iz+GpMuJNgDPXv8jLMbi3zM5URJVc7pH619K7x3E7PotD+JhUq3tSuv6O5wP/xNpl7PkQAsM8Da3NCXsAAAAASUVORK5CYII=";
;// CONCATENATED MODULE: ./public/images/USDT.png
const USDT_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEMklEQVRIiZ2WTWxUVRTHf+e+92amMy30Cwu2UEPkoyJEGxcYgUCMBjcEEwU1hsQFJsaFiXGBGheujIkGcaMxJIAsNBojiR8okYUB1IgoKAUtCVCGj9LptKXTr+nMu8fFzJvOm05b9J/MvNxzzzn/e88999wjd+9/jQAigAaD4p/SAGwV4VFgDbC4qJECzgJHVPUrhCto0a74VS25xmVmLBV4E2ELMK/KfB2wFNgiIu8DRxR9A/itmjNTlUJklyDdwLMzkFTzs1lETgry0W0RicgBgbcA5zYIqmGniPxMRbRCRIIcBHYEY1XFqqJz/AKdMqwV5Fi5oMRqRF6mECqMCFaV5MggeesTclEFwfm31zUScz3y1gKsNSKfWtWnAFwRAFqAdwPD8XyOiOPyzvonaYrVYtXOQSQoyp7TP5DMDFIXiQVT20VkP+h3blFxT7lh1s/jGYcX12yaYy9hHDj/E13p6+VECHyocJdBiQLb/pPHGaCB6zDaQTpdkKcrZ2tcDxFh14kvqI/GyVtL7+gQTyx7gI1tKwDoSl9nb9cxGmJxPHHwVUmPj9AQi09bgMArrghbw0IhYlwyuQne/vVrsD4YB4ZSLErUl4i6B3t57/jnEEsUt6I01zXRFKstVoVQCnW6wOrw9pW+sQyrm1tZ1XQnRoQFNXXcGBmko3FRSa+1toHHVq2nMZZgKDvGeD6HI4Yz/UkSXpSIcdGpfJ1vgDuCkVUlNZ5h94ZtbGxbwS+9F0lmBjidSnL04hnSEyMlorz1OXz5LKf6eujJpPkjdYWVDQvZvWE7OeuTU798/bUuFZc2Z30847KxbQXnB24wksuSsz7ZBUv4e7CXby//hSD82Z+ko3ERCxPziBiX5fUtbFq8EkeErJ8n4oTLqCw/8PpVoLUUOlVujg3z8JIOltQ1oao0xhLUR+O0xOdRH60BYDQ3yY3RIYay4wxMjJK3Pn3jGY4mz1PrRYk6XnnoUi5wrpzIMYaWxHx+vNrNpC3cp7gb4dpwmo8372Rz+70AnLx5iR3f72V+NE7Wzxcj4RSy0DjYcDLcclU5LMIj5eckQHNN7VSCqIJa0hOjJVnfWIac9alxvdAFDXxU4B8DerBSWgkRAeNgZOq6GRFc4xTm5oAqHxiEfuDEnNr/HxlEvzEoqOrzc6pbPxSihlgC385ebAEUXkLBoIDqOaDqyxgg4kXpGU5zabifi7f6OZe+Tsz1ple2ME6r6j4FZNm+VwvMIhiRU0BnNQsRIef7KFpoOgSijltZasqRsug9KP0ARkXQ4oFa1QeB41WJKJSnyWIqMzMBwDVFHwpIYNpTzqSi64FPKi2tKp5xSHhREl6EyMy7OaHo/cCFcmHVLkiVZxR9HPh9tmVX4IKqvqCq6yj0fCHM1tcdUvQQyDqB54D7KDz5Qfs1WnTYpcpniH452yr+BfxSwP2z1RcbAAAAAElFTkSuQmCC";
;// CONCATENATED MODULE: ./src/components/modal/confirmSeed.tsx











var confirmSeed_templateObject;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }






function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function confirmSeed_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }














var ConfirmSeedStyled = styled_components_browser_esm/* default */.ZP.div(confirmSeed_templateObject || (confirmSeed_templateObject = confirmSeed_taggedTemplateLiteralLoose(["\n  width: 100vw;\n  height: 100vh;\n  background: rgba(13, 17, 28, 0.6);\n  border-radius: 0px 0px 0px 0px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 999;\n  .closeIntImg{\n    position: absolute;\n    top: 40px;\n    right: 24px;\n    width: 30px;\n    height: 30px;\n    cursor: pointer;\n  }\n  .closeImg {\n    position: relative;\n    cursor: pointer;\n    :before {\n      position: absolute;\n      content: \"\";\n      width: 2px;\n      height: 15px;\n      background: #fff;\n      transform: rotate(45deg);\n      top: -3px;\n      left: 11px;\n    }\n    :after {\n      content: \"\";\n      position: absolute;\n      width: 2px;\n      height: 15px;\n      background: #fff;\n      transform: rotate(-45deg);\n      top: -3px;\n      left: 11px;\n    }\n  }\n  .ConfirmPurchaseContent {\n    position: relative;\n    width: 470px;\n    height: 390px;\n    margin: auto;\n    padding: 31px;\n    border-radius: 25px;\n    border: 1px solid #1C2A3F;\n    bottom: -50%;\n    margin-top: -190px;\n    background: #14182A;\n    .title {\n      font-size: 18px;\n      font-family: Noto Sans S Chinese;\n      font-weight: bold;\n      color: rgba(255, 255, 255, 1);\n      text-align: center;\n      border-bottom: 1px solid #273244;\n      padding-bottom: 18px;\n      margin-bottom: 18px;\n    }\n    .inputView {\n      display: flex;\n      flex-flow: row nowrap;\n      justify-content: space-between;\n      align-items: center;\n      background: #0E1B2F;\n      border-radius: 11px 11px 11px 11px;\n      opacity: 1;\n      margin: 14px 0 20px;\n      width: 100%;\n      input {\n        padding: 0 20px;\n        width: 70%;\n        height: 50px;\n        border: 0;\n        background-color: transparent;\n        font-size: 18px;\n        font-family: .PingFang SC-Semibold, PingFang SC;\n        font-weight: 600;\n        color: #fff;\n        &:focus-visible {\n          outline: 0;\n        }\n      }\n      .line {\n        display: inline-block;\n        width: 0.1px;\n        height: 26px;\n        opacity: 0.6;\n        border: 1px solid #9CA5B2;\n        margin-right: 54px;\n        position: relative;\n        top: 3px;\n      }\n      .maxBtn {\n        font-size: 16px;\n        font-family: .PingFang SC-Semibold, PingFang SC;\n        font-weight: 600;\n        color: #9CA5B2;\n        margin-right: 20px;\n        position: relative;\n        top: -2.5px;\n        cursor: pointer;\n        :hover {\n          opacity: .8;\n        }\n      }\n    }\n    .balanceView {\n      font-size: 14px;\n      font-weight: 400;\n      color: #fff;\n      opacity: .8;\n      margin: 15px 0;\n      span {\n        font-size: 12px;\n      }\n      input {\n        width: 90%;\n        background: #25293D;\n        border-radius: 7px;\n        border: none;\n        line-height: 30px;\n        color: #fff;\n      }\n    }\n  }\n  .approveBtn {\n    text-align: center;\n    margin: 20px auto 10px;\n    cursor: pointer;\n    height: 51px;\n    line-height: 51px;\n    background: linear-gradient(90deg, #4004f9 0%, #6011c2 100%);\n    border-radius: 10px;\n    opacity: 1;\n    font-size: 14px;\n    font-family: Noto Sans S Chinese-Medium, Noto Sans S Chinese;\n    font-weight: 500;\n    color: #ffffff;\n    :hover {\n      opacity: .8;\n    }\n  }\n  .confirmBtn {\n    position: relative;\n    font-size: 16px;\n    font-family: 'Adobe Heiti Std';\n    width: 207px;\n    height: 48px;\n    line-height: 48px;\n    text-align: center;\n    font-weight: normal;\n    background: #092430;\n    color: #fff;\n    border-radius: 24px;\n    border: 1px solid #00625C;\n    margin: auto;\n    margin-top: 35px;\n    cursor: pointer;\n    &:hover {\n      color: #1DD1A1;\n      :before {\n        position: absolute;\n        content: \"\";\n        z-index: 1;\n        left: 0;\n        top: -22px;\n        width: 60%;\n        height: 24%;\n        box-shadow: 15px 43px 30px #21b68f;\n        transition: .5s;\n      }\n    }\n    span {\n      display: inline-block;\n      margin-left: 10px;\n    }\n  }\n  .confirmEN_approve {\n    position: absolute;\n    left: 25px;\n    top: -6px;\n  }\n  .confirmZH_approve {\n    position: absolute;\n    left: 40px;\n    top: -6px;\n  }\n  .confirmEN_xiaohui {\n    position: absolute;\n    left: 10px;\n    top: -16px;\n  }\n  .confirmZH_xiaohui {\n    position: absolute;\n    left: 35px;\n    top: -16px;\n  }\n  .ConfirmTable {\n    span {\n      display: inline-block;\n      background: #0E101C;\n      border-radius: 8px;\n      width: 120px;\n      height: 35px;\n      line-height: 35px;\n      margin-right: 10px;\n      text-align: center;\n      font-size: 14px;\n      cursor: pointer;\n    }\n    img {\n      width: 20px;\n      margin-right: 5px;\n    }\n    .on {\n      border: 1px solid #884EE7;\n    }\n  }\n  .confirmBottom {\n    width: 275px;\n    height: 38px;\n    line-height: 38px;\n    background: linear-gradient(to right, #5E1FCC, #9F44F4);\n    border-radius: 6px;\n    text-align: center;\n    margin: auto;\n    margin-top: 30px;\n    cursor: pointer;\n  }\n  .confirmNftID {\n    display: flex;\n    em {\n      display: inline-block;\n      width: 60px;\n      font-size: 12px;\n    }\n    i {\n      display: inline-block;\n      width: calc(100% - 60px);\n      height: 40px;\n      line-height: 20px;\n      font-size: 12px;\n      overflow: auto;\n    }\n  }\n  .confirmNftInput {\n    display: flex;\n    margin-top: 10px;\n    margin-bottom: 15px;\n    span {\n      width: 60px;\n      line-height: 35px;\n    }\n    input {\n      ::placeholder {\n        color: #eee;\n        opacity: .6;\n        font-size: 14px;\n      }\n    }\n  }\n\n\n  @media (max-width: 750px) {\n    .ConfirmPurchaseContent {\n      position: fixed;\n      width: 100%;\n      bottom: 0px;\n      margin: 0px;\n      padding: 20px 10px;\n      border-radius: 25px 25px 0 0;\n      .title {\n        font-size: 16px;\n      }\n      .inputView {\n        input {\n          width: 60%;\n        }\n        .line {\n          margin-right: 20px;\n        }\n      }\n      img {\n        margin-right: 2px;\n        vertical-align: sub;\n      }\n    }\n    .closeIntImg {\n      top: 30px;\n    }\n    .ConfirmTable {\n      span {\n        width: 100px;\n        margin-bottom: 5px;\n      }\n    }\n  }\n"])));
var ConfirmSeed = function ConfirmSeed(_ref) {
  var childShowMint = _ref.childShowMint,
    toxPrice = _ref.toxPrice,
    usdtPrice = _ref.usdtPrice;
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  var _useState = (0,react.useState)(false),
    showTransaction = _useState[0],
    setShowTransaction = _useState[1];
  var childShowTransaction = function childShowTransaction(show) {
    setShowTransaction(show);
  };
  var _useAccount = (0,wagmi_dist/* useAccount */.mA)(),
    address = _useAccount.address;
  var _useNetwork = (0,wagmi_dist/* useNetwork */.LN)(),
    chain = _useNetwork.chain;
  var ethereumHelper = window.ethereum || false;
  var web3 = new (web3_min_default())(ethereumHelper);
  var _message$useMessage = message/* default */.ZP.useMessage(),
    messageApi = _message$useMessage[0],
    contextHolder = _message$useMessage[1];
  var _useState2 = (0,react.useState)(1),
    tableOn = _useState2[0],
    setTableOn = _useState2[1];
  var toxTokenErc20 = useERC20Contract(addressToxToken[chain == null ? void 0 : chain.id]);
  var usdtTokenErc20 = useERC20Contract(addressUsdtToken[chain == null ? void 0 : chain.id]);
  var mintContractErc20 = useMintContract(addressMintContract[chain == null ? void 0 : chain.id]);
  var nftContractErc20 = useNFTContract(addressNFTContract[chain == null ? void 0 : chain.id]);
  var _useState3 = (0,react.useState)('0.00'),
    curToxBalance = _useState3[0],
    setCurToxBalance = _useState3[1];
  var _useState4 = (0,react.useState)('0.00'),
    curUsdtBalance = _useState4[0],
    setCurUsdtBalance = _useState4[1];
  var _useState5 = (0,react.useState)(true),
    curToxApprove = _useState5[0],
    setCurToxApprove = _useState5[1];
  var _useState6 = (0,react.useState)(true),
    curUsdtApprove = _useState6[0],
    setCurUsdtApprove = _useState6[1];
  var _useState7 = (0,react.useState)(false),
    isApproveLoading = _useState7[0],
    setIsApproveLoading = _useState7[1];
  var _useState8 = (0,react.useState)(false),
    isMintLoading = _useState8[0],
    setIsMintLoading = _useState8[1];
  var _useState9 = (0,react.useState)('--'),
    nftIDList = _useState9[0],
    setNftIDList = _useState9[1];
  var _useState10 = (0,react.useState)(''),
    inputIDValue = _useState10[0],
    setInputIDValue = _useState10[1];
  var _useState11 = (0,react.useState)(''),
    inputNumberValue = _useState11[0],
    setInputNumberValue = _useState11[1];
  var handleBalanceData = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var toxBalance, toxBalanceBig, usdtBalance, usdtBalanceBig;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            if (!(address && toxTokenErc20)) {
              _context.next = 10;
              break;
            }
            _context.next = 4;
            return toxTokenErc20.balanceOf(address);
          case 4:
            toxBalance = _context.sent;
            toxBalanceBig = new bignumber/* default */.Z(toxBalance.toString()).shiftedBy(-18).toFixed(2);
            setCurToxBalance(toxBalanceBig);
            console.log('toxBalanceBig==>', toxBalanceBig);
            _context.next = 11;
            break;
          case 10:
            setCurToxBalance('0.00');
          case 11:
            if (!(address && usdtTokenErc20)) {
              _context.next = 19;
              break;
            }
            _context.next = 14;
            return usdtTokenErc20.balanceOf(address);
          case 14:
            usdtBalance = _context.sent;
            usdtBalanceBig = new bignumber/* default */.Z(usdtBalance.toString()).shiftedBy(-18).toFixed(2);
            setCurUsdtBalance(usdtBalanceBig);
            _context.next = 20;
            break;
          case 19:
            setCurUsdtBalance('0.00');
          case 20:
            _context.next = 25;
            break;
          case 22:
            _context.prev = 22;
            _context.t0 = _context["catch"](0);
            console.log('error===>', _context.t0);
          case 25:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 22]]);
    }));
    return function handleBalanceData() {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleAllowanceData = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var toxAllowance, toxAllowanceBig, usdtAllowance, usdtAllowanceBig;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            if (!(address && toxTokenErc20)) {
              _context2.next = 9;
              break;
            }
            _context2.next = 4;
            return toxTokenErc20.allowance(address, addressMintContract[chain == null ? void 0 : chain.id]);
          case 4:
            toxAllowance = _context2.sent;
            toxAllowanceBig = new bignumber/* default */.Z(toxAllowance.toString()).shiftedBy(-18).toFixed(0);
            if (toxAllowanceBig > 0) {
              setCurToxApprove(false);
            } else {
              setCurToxApprove(true);
            }
            // console.log('toxAllowanceBig===>', toxAllowanceBig)
            _context2.next = 10;
            break;
          case 9:
            setCurToxApprove(true);
          case 10:
            if (!(address && usdtTokenErc20)) {
              _context2.next = 18;
              break;
            }
            _context2.next = 13;
            return usdtTokenErc20.allowance(address, addressMintContract[chain == null ? void 0 : chain.id]);
          case 13:
            usdtAllowance = _context2.sent;
            usdtAllowanceBig = new bignumber/* default */.Z(usdtAllowance.toString()).shiftedBy(-18).toFixed(0);
            if (usdtAllowanceBig > 0) {
              setCurUsdtApprove(false);
            } else {
              setCurUsdtApprove(true);
            }
            // console.log('usdtAllowanceBig===>', usdtAllowanceBig)
            _context2.next = 19;
            break;
          case 18:
            setCurUsdtApprove(true);
          case 19:
            _context2.next = 23;
            break;
          case 21:
            _context2.prev = 21;
            _context2.t0 = _context2["catch"](0);
          case 23:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 21]]);
    }));
    return function handleAllowanceData() {
      return _ref3.apply(this, arguments);
    };
  }();
  var handleNADAListData = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var nadaNFTList, nftListArray, i, id;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            if (!(address && mintContractErc20)) {
              _context3.next = 10;
              break;
            }
            _context3.next = 4;
            return mintContractErc20.list(address);
          case 4:
            nadaNFTList = _context3.sent;
            nftListArray = [];
            for (i = 0; i < nadaNFTList.length; i++) {
              id = new bignumber/* default */.Z(nadaNFTList[i].toString()).toFixed(0);
              nftListArray.push(id);
            }
            setNftIDList(nftListArray.join("，"));
            _context3.next = 11;
            break;
          case 10:
            setNftIDList('--');
          case 11:
            _context3.next = 15;
            break;
          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](0);
          case 15:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 13]]);
    }));
    return function handleNADAListData() {
      return _ref4.apply(this, arguments);
    };
  }();
  (0,react.useEffect)(function () {
    handleBalanceData();
    handleAllowanceData();
    handleNADAListData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, chain]);

  // 授权
  var approveClick = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(approveToken) {
      var contract, gas;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            setIsApproveLoading(true);
            contract = new web3.eth.Contract(abiErc20, approveToken[chain == null ? void 0 : chain.id]); // 获取gas费
            _context4.next = 4;
            return web3.eth.getGasPrice();
          case 4:
            gas = _context4.sent;
            _context4.next = 7;
            return contract.methods.approve(addressMintContract[chain == null ? void 0 : chain.id], bignumbers/* MaxInt256 */.PS).send({
              from: address,
              gasPrice: gas
            }, function (err, result) {
              if (err) {
                setIsApproveLoading(false);
                console.log('Approve err===>', err);
              } else {
                console.log('Approve result===>', result);
              }
            });
          case 7:
            setIsApproveLoading(false);
            handleAllowanceData();
          case 9:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function approveClick(_x) {
      return _ref5.apply(this, arguments);
    };
  }();

  // mint后查询 NFT ID
  var handleListData = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(number) {
      var nftList, nftListID, nftListIDBig, tokenURI;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            if (!(address && nftContractErc20)) {
              _context5.next = 11;
              break;
            }
            _context5.next = 4;
            return nftContractErc20.list(address);
          case 4:
            nftList = _context5.sent;
            nftListID = nftList[nftList.length - 1];
            nftListIDBig = new bignumber/* default */.Z(nftListID.toString()).toFixed(0); // 根据ID查询出图片URL
            _context5.next = 9;
            return nftContractErc20.tokenURI(nftListIDBig);
          case 9:
            tokenURI = _context5.sent;
            childShowMint(false, tokenURI, number);
          case 11:
            _context5.next = 15;
            break;
          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](0);
          case 15:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 13]]);
    }));
    return function handleListData(_x2) {
      return _ref6.apply(this, arguments);
    };
  }();

  // mint TOX
  var mintTOXClick = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var contract, gas;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            setIsMintLoading(true);
            contract = new web3.eth.Contract(abiMint, addressMintContract[chain == null ? void 0 : chain.id]); // 获取gas费
            _context6.next = 4;
            return web3.eth.getGasPrice();
          case 4:
            gas = _context6.sent;
            _context6.next = 7;
            return contract.methods.mintByTOX().send({
              from: address,
              gasPrice: gas,
              gasLimit: 1000000
            }, function (err, result) {
              if (err) {
                setIsMintLoading(false);
                console.log('mint err===>', err);
              } else {
                console.log('mint result===>', result);
              }
            });
          case 7:
            setIsMintLoading(false);
            handleListData(1);
            handleBalanceData();
          case 10:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    return function mintTOXClick() {
      return _ref7.apply(this, arguments);
    };
  }();

  // mint USDT
  var mintUSDTClick = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var contract, gas;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            setIsMintLoading(true);
            contract = new web3.eth.Contract(abiMint, addressMintContract[chain == null ? void 0 : chain.id]); // 获取gas费
            _context7.next = 4;
            return web3.eth.getGasPrice();
          case 4:
            gas = _context7.sent;
            _context7.next = 7;
            return contract.methods.mintByUSD().send({
              from: address,
              gasPrice: gas,
              gasLimit: 1000000
            }, function (err, result) {
              if (err) {
                setIsMintLoading(false);
                console.log('mint err===>', err);
              } else {
                console.log('mint result===>', result);
              }
            });
          case 7:
            setIsMintLoading(false);
            handleListData(1);
            handleBalanceData();
          case 10:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }));
    return function mintUSDTClick() {
      return _ref8.apply(this, arguments);
    };
  }();

  // input
  var inputIDChange = function inputIDChange(e) {
    var value = e.target.value.replace(/[^0-9.]/g, '');
    if (value.indexOf('.') > 0) {
      value = value.slice(0, value.indexOf('.') + 5);
    }
    setInputIDValue(value);
  };
  var inputNumberChange = function inputNumberChange(e) {
    var value = e.target.value.replace(/[^0-9.]/g, '');
    if (value.indexOf('.') > 0) {
      value = value.slice(0, value.indexOf('.') + 5);
    }
    setInputNumberValue(value);
  };

  // mint NADA
  var mintNADAClick = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var contract, gas;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            if (inputIDValue) {
              _context8.next = 3;
              break;
            }
            messageApi.open({
              type: 'error',
              content: t('Input ID')
            });
            return _context8.abrupt("return");
          case 3:
            if (inputNumberValue) {
              _context8.next = 6;
              break;
            }
            messageApi.open({
              type: 'error',
              content: t('Input mint quantity')
            });
            return _context8.abrupt("return");
          case 6:
            setIsMintLoading(true);
            contract = new web3.eth.Contract(abiMint, addressMintContract[chain == null ? void 0 : chain.id]); // 获取gas费
            _context8.next = 10;
            return web3.eth.getGasPrice();
          case 10:
            gas = _context8.sent;
            _context8.next = 13;
            return contract.methods.mintByNADA(inputIDValue, inputNumberValue).send({
              from: address,
              gasPrice: gas,
              gasLimit: 400000 * inputNumberValue
            }, function (err, result) {
              if (err) {
                setIsMintLoading(false);
                console.log('mint err===>', err);
              } else {
                console.log('mint result===>', result);
              }
            });
          case 13:
            setIsMintLoading(false);
            handleListData(inputNumberValue);
            handleNADAListData();
          case 16:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }));
    return function mintNADAClick() {
      return _ref9.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react.createElement(ConfirmSeedStyled, null, contextHolder, /*#__PURE__*/react.createElement("div", {
    className: "ConfirmPurchaseContent"
  }, /*#__PURE__*/react.createElement("div", {
    className: "title"
  }, t('Payment')), /*#__PURE__*/react.createElement("div", {
    className: "closeIntImg",
    onClick: function onClick() {
      return childShowMint(false);
    }
  }, /*#__PURE__*/react.createElement("span", {
    className: "closeImg"
  })), /*#__PURE__*/react.createElement("div", {
    className: "ConfirmTable"
  }, /*#__PURE__*/react.createElement("span", {
    className: tableOn === 1 ? 'on' : '',
    onClick: function onClick() {
      setTableOn(1);
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: TOX_namespaceObject,
    alt: ""
  }), "1200 TOX"), (chain == null ? void 0 : chain.id) === 56 || (chain == null ? void 0 : chain.id) === 97 && /*#__PURE__*/react.createElement("span", {
    className: tableOn === 2 ? 'on' : '',
    onClick: function onClick() {
      setTableOn(2);
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: USDT_namespaceObject,
    alt: ""
  }), usdtPrice, " USDT"), (chain == null ? void 0 : chain.id) === 56 || (chain == null ? void 0 : chain.id) === 97 && /*#__PURE__*/react.createElement("span", {
    className: tableOn === 3 ? 'on' : '',
    onClick: function onClick() {
      setTableOn(3);
    }
  }, "NADA")), tableOn === 1 ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "balanceView"
  }, /*#__PURE__*/react.createElement("span", null, "TOX ", t('Balance：'), "\xA0"), /*#__PURE__*/react.createElement("span", {
    className: "BalanceAmount"
  }, curToxBalance)), curToxApprove ? /*#__PURE__*/react.createElement("div", {
    className: "confirmBottom",
    onClick: function onClick() {
      approveClick(addressToxToken);
    }
  }, !isApproveLoading && /*#__PURE__*/react.createElement("span", null, t('Approve'), " TOX"), isApproveLoading && !showTransaction && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Approve'), " TOX"))) : /*#__PURE__*/react.createElement("div", {
    className: "confirmBottom",
    onClick: function onClick() {
      mintTOXClick();
    }
  }, !isMintLoading && /*#__PURE__*/react.createElement("span", null, "MINT"), isMintLoading && !showTransaction && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, "MINT")))) : tableOn === 2 ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "balanceView"
  }, /*#__PURE__*/react.createElement("span", null, "USDT ", t('Balance：'), "\xA0"), /*#__PURE__*/react.createElement("span", {
    className: "BalanceAmount"
  }, curUsdtBalance)), curUsdtApprove ? /*#__PURE__*/react.createElement("div", {
    className: "confirmBottom",
    onClick: function onClick() {
      approveClick(addressUsdtToken);
    }
  }, !isApproveLoading && /*#__PURE__*/react.createElement("span", null, t('Approve'), " USDT"), isApproveLoading && !showTransaction && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Approve'), " USDT"))) : /*#__PURE__*/react.createElement("div", {
    className: "confirmBottom",
    onClick: function onClick() {
      mintUSDTClick();
    }
  }, !isMintLoading && /*#__PURE__*/react.createElement("span", null, "MINT"), isMintLoading && !showTransaction && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, "MINT")))) : /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "balanceView"
  }, /*#__PURE__*/react.createElement("div", {
    className: "confirmNftID"
  }, /*#__PURE__*/react.createElement("em", null, "ID"), /*#__PURE__*/react.createElement("i", null, nftIDList)), /*#__PURE__*/react.createElement("div", {
    className: "confirmNftInput"
  }, /*#__PURE__*/react.createElement("span", null, "ID"), /*#__PURE__*/react.createElement(input/* default */.Z, {
    type: "number",
    placeholder: t('Input ID'),
    value: inputIDValue,
    onChange: inputIDChange
  })), /*#__PURE__*/react.createElement("div", {
    className: "confirmNftInput"
  }, /*#__PURE__*/react.createElement("span", null, t('Number')), /*#__PURE__*/react.createElement(input/* default */.Z, {
    type: "number",
    placeholder: t('Input mint quantity'),
    value: inputNumberValue,
    onChange: inputNumberChange
  }))), /*#__PURE__*/react.createElement("div", {
    className: "confirmBottom",
    onClick: function onClick() {
      mintNADAClick();
    }
  }, !isMintLoading && /*#__PURE__*/react.createElement("span", null, "MINT"), isMintLoading && !showTransaction && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, "MINT"))))));
};
/* harmony default export */ const confirmSeed = (ConfirmSeed);
;// CONCATENATED MODULE: ./src/components/mint/partners.jsx

var partners_templateObject, partners_templateObject2;

function partners_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }








var partners_CustomStyle = styled_components_browser_esm/* default */.ZP.div(partners_templateObject || (partners_templateObject = partners_taggedTemplateLiteralLoose(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tmargin-top: 5rem;\n\ti {\n\t\tfont-size: 2rem;\n\t\tfont-weight: bold;\n\t}\n\tem {\n\t\tdisplay: inline-block;\n\t\tbackground: #191B2B;\n\t\tborder-radius: 17px;\n\t\twidth: 122px;\n\t\theight: 35px;\n\t\tline-height: 35px;\n\t\tpadding-left: 5px;\n\t\tmargin-left: 20px;\n\t\tfont-size: 14px;\n\t}\n\tdl {\n\t\tdisplay: inline-block;\n\t\tmargin-left: 5px;\n\t}\n\n\n\t@media (max-width: 750px) {\n\t\tdisplay: block;\n\t\twidth: 90%;\n\t\tmargin: auto;\n\t\tmargin-top: 3rem;\n\n\t\tspan {\n\t\t\tdisplay: block;\n\t\t}\n\t\ti {\n\t\t\tdisplay: block;\n\t\t\tfont-size: 22px;\n\t\t\tmargin-bottom: 1rem;\n\t\t}\n\t\tem {\n\t\t\tmargin-left: 0px;\n\t\t\tmargin-right: 20px;\n\t\t\tmargin-bottom: 15px;\n\t\t}\n\t}\n"])));
var PartnersStyled = styled_components_browser_esm/* default */.ZP.div(partners_templateObject2 || (partners_templateObject2 = partners_taggedTemplateLiteralLoose(["\n\tposition: relative;\n\theight: 246px;\n\tbackground: #131726;\n\tborder-radius: 14px;\n\tmargin-top: 1.5rem;\n\tmargin-bottom: 10rem;\n\n\t.partnersConter {\n\t\tposition: absolute;\n\t\twhite-space: nowrap;\n\t\twill-change: transform;\n\t\tflex-direction: row;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t\theight: 246px;\n\t\toverflow-x: hidden;\n\t}\n\t.partnersFlexOne {\n\t\tdisplay: flex;\n\t\tanimation: marquee-horizontal-left 40s linear infinite;\n\t}\n\t.partnersClain {\n\t\tposition: relative;\n\t\twidth: 155px;\n\t\theight: 155px;\n\t\ttext-align: center;\n\t\tmargin: auto;\n\t\tmargin-right: 10px;\n\t\t.partnersAbsolu {\n\t\t\tposition: absolute;\n\t\t\twidth: 100%;\n\t\t\ttop: 50%;\n\t\t\ttransform: translateY(-50%);\n\t\t}\n\t\tp {\n\t\t\tfont-weight: bold;\n\t\t\tcolor: #FFFFFF;\n\t\t\tline-height: 27px;\n\t\t\tfont-size: 1.4rem;\n\t\t\tmargin-bottom: 1rem;\n\t\t\tfont-family: \"Poppins-Bold\";\n\t\t}\n\t\tspan {\n\t\t\tdisplay: block;\n\t\t\tfont-weight: 400;\n\t\t\tcolor: #FFFFFF;\n\t\t\tline-height: 18px;\n\t\t\tfont-size: .8rem;\n\t\t\tfont-family: \"Poppins-Regular\";\n\t\t}\n\t\tul {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\tmargin-top: 1rem;\n\t\t}\n\t\tli {\n\t\t\tmargin: 0 10px;\n\t\t\tcolor: #fff;\n\t\t}\n\t}\n\t.partnersClaImg {\n\t\twidth: 155px;\n\t\tmargin: auto;\n\t}\n\t.partnersLeft {\n\t\tposition: absolute;\n\t\twidth: 5%;\n\t\ttop: 0%;\n\t\tbottom: 0%;\n\t\tleft: 0%;\n\t\tright: auto;\n\t\tz-index: 1;\n\t\tbackground: linear-gradient(90deg, #010314 5%, rgba(255, 255, 255, 0) 100%);\n\t}\n\t.partnersRight {\n\t\tposition: absolute;\n\t\twidth: 5%;\n\t\ttop: 0%;\n\t\tbottom: 0%;\n\t\tright: 0%;\n\t\tleft: auto;\n\t\tz-index: 1;\n\t\tbackground: linear-gradient(90deg, #010314 5%, rgba(255, 255, 255, 0) 100%);\n\t\tbackground-image: linear-gradient(90deg,rgba(255,255,255,0),#010314);\n\t}\n\n\n\t@media (max-width: 1600px) {\n\t\t\n\t}\n\n\n\t@media (max-width: 750px) {\n\t\theight: 170px;\n\t\twidth: 95%;\n\t\tmargin: auto;\n\t\tmargin-top: 15px;\n\t\tmargin-bottom: 8rem;\n\n\t\t.partnersConter {\n\t\t\theight: 170px;\n\t\t}\n\t\t.partnersClain {\n\t\t\twidth: 75px;\n\t\t\theight: 75px;\n\t\t}\n\t\t.partnersClaImg {\n\t\t\twidth: 75px;\n\t\t}\n\t}\n"])));
var Partners = function Partners(_ref) {
  var toxPrice = _ref.toxPrice,
    usdtPrice = _ref.usdtPrice;
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  var _useNetwork = (0,wagmi_dist/* useNetwork */.LN)(),
    chain = _useNetwork.chain;
  var _useAccount = (0,wagmi_dist/* useAccount */.mA)(),
    address = _useAccount.address;
  var _useState = (0,react.useState)(false),
    showMint = _useState[0],
    setShowMint = _useState[1];
  var _useState2 = (0,react.useState)(false),
    showTransaction = _useState2[0],
    setShowTransaction = _useState2[1];
  var _useState3 = (0,react.useState)(''),
    transactionHash = _useState3[0],
    setTransactionHash = _useState3[1];
  var _useState4 = (0,react.useState)(),
    nftNumbet = _useState4[0],
    setNftNumbet = _useState4[1];
  var childShowMint = function childShowMint(show, tokenURI, number) {
    if (tokenURI) {
      setTransactionHash(tokenURI);
      setNftNumbet(number);
      setShowTransaction(true);
    }
    setShowMint(show);
  };
  var handleClick = function handleClick() {
    if (address) {
      setShowMint(true);
    }
  };
  return /*#__PURE__*/react.createElement("div", {
    className: "threePost"
  }, /*#__PURE__*/react.createElement(partners_CustomStyle, null, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("i", null, t('Choose your phantom egg'))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement("img", {
    src: TOX_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("dl", null, "1200 TOX")), (chain == null ? void 0 : chain.id) !== 9001 && /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement("img", {
    src: USDT_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("dl", null, usdtPrice, " USDT")), (chain == null ? void 0 : chain.id) !== 9001 && /*#__PURE__*/react.createElement("em", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react.createElement("dl", null, "NADA")))), /*#__PURE__*/react.createElement(PartnersStyled, null, /*#__PURE__*/react.createElement("div", {
    className: "partnersLeft"
  }), /*#__PURE__*/react.createElement("div", {
    className: "partnersRight"
  }), /*#__PURE__*/react.createElement("div", {
    className: "partnersConter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "partnersFlexOne"
  }, partnersAnList == null ? void 0 : partnersAnList.map(function (item, index) {
    return /*#__PURE__*/react.createElement("div", {
      className: "partnersClain",
      key: index,
      onClick: handleClick
    }, /*#__PURE__*/react.createElement("div", {
      className: "partnersAbsolu"
    }, /*#__PURE__*/react.createElement("img", {
      src: item.img,
      alt: "",
      className: "partnersClaImg"
    })));
  })), /*#__PURE__*/react.createElement("div", {
    className: "partnersFlexOne"
  }, partnersAnList == null ? void 0 : partnersAnList.map(function (item, index) {
    return /*#__PURE__*/react.createElement("div", {
      className: "partnersClain",
      key: index,
      onClick: handleClick
    }, /*#__PURE__*/react.createElement("div", {
      className: "partnersAbsolu"
    }, /*#__PURE__*/react.createElement("img", {
      src: item.img,
      alt: "",
      className: "partnersClaImg"
    })));
  })))), showMint && /*#__PURE__*/react.createElement(confirmSeed, {
    childShowMint: childShowMint
  }));
};
/* harmony default export */ const partners = (Partners);
;// CONCATENATED MODULE: ./src/components/modal/ImageWithDefault.tsx

var ImageWithDefault = function ImageWithDefault(_ref) {
  var src = _ref.src,
    defaultSrc = _ref.defaultSrc;
  var _React$useState = React.useState(false),
    isBroken = _React$useState[0],
    setIsBroken = _React$useState[1];
  var onError = function onError() {
    setIsBroken(true);
  };
  return /*#__PURE__*/React.createElement("img", {
    src: isBroken ? defaultSrc : src,
    onError: onError,
    alt: ""
  });
};
/* harmony default export */ const modal_ImageWithDefault = ((/* unused pure expression or super */ null && (ImageWithDefault)));
;// CONCATENATED MODULE: ./src/components/modal/Confirm/index.tsx

var Confirm_templateObject;
function Confirm_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }






var ConfirmStyled = styled_components_browser_esm/* default */.ZP.div(Confirm_templateObject || (Confirm_templateObject = Confirm_taggedTemplateLiteralLoose(["\n  width: 100vw;\n  height: 100vh;\n  background: rgba(13, 17, 28, 0.6);\n  border-radius: 0px 0px 0px 0px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 999;\n  .closeIntImg{\n    position: absolute;\n    top: 40px;\n    right: 24px;\n    width: 30px;\n    height: 30px;\n    cursor: pointer;\n  }\n  .ConfirmContent {\n    position: relative;\n    width: 470px;\n    height: 390px;\n    margin: auto;\n    padding: 31px;\n    background: #14182A;\n    border-radius: 25px;\n    border: 1px solid #1C2A3F;\n    bottom: -50%;\n    margin-top: -190px;\n  }\n  svg {\n    width: 20px;\n    height: 20px;\n  }\n  .closeIntStatus {\n    width: 70px;\n    height: 70px;\n    margin-top: 20px;\n    background: linear-gradient(128deg, #0FC2F3 0%, #6B1DDD 100%);\n    border-radius: 50px;\n    text-align: center;\n    margin: 20px auto;\n    img {\n      margin-top: 20px;\n      width: 40px;\n    }\n  }\n  .confirmTransaction {\n    font-size: 22px;\n    color: #1DD1A1;\n    text-align: center;\n    margin-top: 20px;\n  }\n  .confirmHash {\n    display: flex;\n    justify-content: center;\n    font-size: 16px;\n    color: #1DD1A1;\n    text-align: center;\n    span {\n      display: block;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      margin-left: 5px;\n      color: #00D2A0;\n      cursor: pointer;\n    }\n  }\n  .ConfirmTitle {\n    font-size: 14px;\n    line-height: 20px;\n    text-align: center;\n    span {\n      display: inline-block;\n      margin-left: 5px;\n    }\n  }\n  .ConfirmImg {\n    text-align: center;\n    margin-top: 30px;\n  }\n  .closeImg {\n    position: relative;\n    cursor: pointer;\n    :before {\n      position: absolute;\n      content: \"\";\n      width: 2px;\n      height: 15px;\n      background: #fff;\n      transform: rotate(45deg);\n      top: -3px;\n      left: 11px;\n    }\n    :after {\n      content: \"\";\n      position: absolute;\n      width: 2px;\n      height: 15px;\n      background: #fff;\n      transform: rotate(-45deg);\n      top: -3px;\n      left: 11px;\n    }\n  }\n\n\n  @media (max-width: 750px) {\n    .ConfirmContent {\n      position: fixed;\n      width: 100%;\n      bottom: 0px;\n      margin: 0px;\n      padding: 50px;\n      border: none;\n    }\n    .closeIntImg {\n      top: 30px;\n    }\n    .closeIntStatus {\n      margin-top: 0px;\n    }\n  }\n"])));
var ConfirmModal = function ConfirmModal(_ref) {
  var childShowTransaction = _ref.childShowTransaction,
    tokenURI = _ref.tokenURI,
    nftNumbet = _ref.nftNumbet;
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  return /*#__PURE__*/react.createElement(ConfirmStyled, null, /*#__PURE__*/react.createElement("div", {
    className: "ConfirmContent"
  }, /*#__PURE__*/react.createElement("div", {
    className: "closeIntImg",
    onClick: function onClick() {
      return childShowTransaction(false);
    }
  }, /*#__PURE__*/react.createElement("span", {
    className: "closeImg"
  })), /*#__PURE__*/react.createElement("div", {
    className: "ConfirmTitle"
  }, t('Together you breed heroes'), /*#__PURE__*/react.createElement("span", null, "x ", nftNumbet)), tokenURI &&
  /*#__PURE__*/
  // defaultSrc 图片404的时候加载
  // <ImageWithDefault src={tokenURI} defaultSrc="https://static-pht.sgp1.vultrobjects.com/hero/1/1.png" />
  react.createElement("div", {
    className: "ConfirmImg"
  }, /*#__PURE__*/react.createElement("img", {
    src: tokenURI,
    alt: ""
  }))));
};
/* harmony default export */ const Confirm = (ConfirmModal);
;// CONCATENATED MODULE: ./public/images/mint_ico.png
const mint_ico_namespaceObject = __webpack_require__.p + "de8c1fd5322ebbfde56a.png";
;// CONCATENATED MODULE: ./public/images/mint_caidan.png
const mint_caidan_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAATCAYAAABPwleqAAAAAXNSR0IArs4c6QAAAmBJREFUOE+Fk09IlFEUxX/3fVgWjc3omLSKsBAiCMoIauVGcBGVQVgu2oRItEiCbJEIlhQFES2KCukPEbmI3LQoaBMVuSmQDEoig4gsdHTGrHS+d+IbR5mRgb7V9+4759zzLucaJb6xSdWWOdoFtYihZY6rsZj9WAq1pYWpaR0MRR9iRcHduIU0JxL2vBBfRJ6cVqP3PAZeAjuBsgLw10SM9WaWXagtkqemVJk13hu8Nkc3hvMhXQb7AA/skdjxeYSe+nqbiwQWyamMLks0WkCrQp5h/FFItxMjFrAh66lxjrPytFXF7eYiWVKQyvAi9BwLHLeBzUCkHtl+h+cBjh5gzEKa4nGGI/u5zqm09hIy6oOczWZBX1BGr5+lF6Ml73DWjEagG3ElUWEDOfJEWkP5btF5UNBhot8cFyXeAOfw3LeAOonjgkdVFdZsIyNanqihycF5wWoX0qSAAWBdJCz46KATEZNxNz/p6fEYSUuldVhwBDgViDHvuCHRUCI7KhywYJeNp3XJoGO+CcN5+6WCFwE+GNTlLj1HbSKje4jWkujCohh1Yqt33AF2S3RH5GuI9qVkiV8Yg2Z8RxzKB+UpsAVYa3DCxifVZo7rObLxG1Ee/Zkxm11FsmyKZOh4YrCxKNdGg31LK1kOo8CMhWz3QQ5YZ/BJxi1EaEaPVJTzL4kYtfMhyei0xBkz3gKbJJYvdhEzGCuLnu9pqYpbf44cxXMiQ3TY/9/BwYXKCussWoycQJouc5xcsssLeilBZ1XF/FIUkRcKmYzWzHkOmLFNEAd+GrzK/uVhdbVlCp39A0HX9yAcmZVSAAAAAElFTkSuQmCC";
;// CONCATENATED MODULE: ./src/components/mint/main.jsx












var main_templateObject;
function main_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ main_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }


function main_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function main_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { main_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { main_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function main_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
/* eslint-disable react-hooks/exhaustive-deps */


















var main_CustomStyle = styled_components_browser_esm/* default */.ZP.div(main_templateObject || (main_templateObject = main_taggedTemplateLiteralLoose(["\n\twidth: 1300px;\n\tmargin: auto;\n\tpadding-top: 200px;\n\tfont-family: \"Poppins-Medium\";\n\n\t.mint_flex {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t}\n\t.mint_left {\n\t\twidth: 474px;\n\t}\n\t.mint_left_conter {\n\t\tmargin-left: 1.5rem;\n\t\tmargin-top: 0.5rem;\n\t\th1 {\n\t\t\tfont-size: 2.2rem;\n\t\t\tmargin-bottom: 1.5rem;\n\t\t\tfont-weight: bold;\n\t\t}\n\t\th2 {\n\t\t\tfont-size: .85rem;\n\t\t\tmargin-bottom: 0px;\n\t\t\topacity: 0.8;\n\t\t\tline-height: 22px;\n\t\t}\n\t}\n\t.mint_right {\n\t\twidth: 650px;\n\t\tmargin-top: 100px;\n\t\tbackground: #060915;\n\t\tborder-radius: 27px;\n\t\tpadding: 40px 30px;\n\t}\n\t.mint_right_title {\n\t\tborder-bottom: 1px solid rgb(240, 185, 11, 0.6);\n\t\tpadding-bottom: 25px;\n\t\tmargin-bottom: 25px;\n\t\tem {\n\t\t\tdisplay: block;\n\t\t\tfont-size: 2rem;\n\t\t\tfont-weight: bold;\n\t\t}\n\t\tspan {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-between;\n\t\t\talign-items: center;\n\t\t}\n\t\ti {\n\t\t\twidth: 60%;\n\t\t\tline-height: 18px;\n\t\t}\n\t}\n\t.mint_right_val {\n\t\tfont-size: 2rem;\n\t\tcolor: #F0B90B;\n\t}\n\t.mint_right_conter {\n\t\tbackground: #131726;\n\t\tborder-radius: 14px;\n\t\tpadding: 40px 50px;\n\t\tspan {\n\t\t\tdisplay: block;\n\t\t\tmargin-bottom: 20px;\n\t\t\tfont-size: 1.1rem;\n\t\t\tfont-weight: bold;\n\t\t}\n\t\tem {\n\t\t\tdisplay: flex;\n\t\t\tfont-size: .85rem;\n\t\t\topacity: .8;\n\t\t\tmargin-bottom: 10px;\n\t\t}\n\t\timg {\n\t\t\tmargin-right: 10px;\n\t\t\twidth: 15px;\n\t\t\theight: 19px;\n\t\t}\n\t}\n\t.mint_bottom {\n\t\tbackground: url(", ") no-repeat;\n\t\twidth: 249px;\n\t\theight: 61px;\n\t\tline-height: 61px;\n\t\ttext-align: center;\n\t\tcolor: #3E0E00;\n\t\tfont-weight: bold;\n\t\tfont-size: 1rem;\n\t\ttransition: transform 0.2s ease 0s;\n\t\tmargin: auto;\n\t\tmargin-top: 2rem;\n\t\tcursor: pointer;\n\t}\n\t.mint_bottom_time {\n\t\topacity: .3;\n\t\tcursor: auto !important;\n\t}\n\t.mint_time {\n\t\tdisplay: flex;\n\t\t.b {\n\t\t\tline-height: 57px;\n\t\t\tpadding: 0 8px;\n\t\t}\n\t}\n\t.mint_time_item {\n\t\tdisplay: inline-block;\n\t\twidth: 57px;\n\t\theight: 57px;\n\t\tline-height: 57px;\n\t\tbackground: #191B2B;\n\t\tborder-radius: 15px;\n\t\ttext-align: center;\n\t}\n\t.mint_time_remain {\n\t\tline-height: 47px;\n\t\tfont-weight: bold;\n\t\tcolor: #606275;\n\t\tmargin-right: 15px;\n\t\tmargin-top: 2rem;\n\t}\n\t.mint_invitation {\n\t\tword-wrap: break-word;\n\t\tfont-size: 13px;\n\t\topacity: 0.8;\n\t\tspan {\n\t\t\tdisplay: inline-block;\n\t\t\tmargin-left: 20px;\n\t\t\tcolor: #F0B90B;\n\t\t\tcursor: pointer;\n\t\t}\n\t}\n\n\n\t@media (max-width: 1600px) {\n\t\t\n\t}\n\n\n\t@media (max-width: 1400px) {\n\t\twidth: 1100px;\n\t}\n\n\n\t@media (max-width: 750px) {\n\t\twidth: 100%;\n\t\tpadding-top: 100px;\n\n\t\t.mint_flex {\n\t\t\tdisplay: block;\n\t\t}\n\t\t.mint_left {\n\t\t\twidth: 100%;\n\t\t\ttext-align: center;\n\t\t}\n\t\t.mint_left_conter {\n\t\t\tmargin-left: 20px;\n\t\t\tmargin-right: 20px;\n\t\t\th1 {\n\t\t\t\tfont-size: 26px;\n\t\t\t}\n\t\t\th2 {\n\t\t\t\tfont-size: 12px;\n\t\t\t\tline-height: 20px;\n\t\t\t}\n\t\t}\n\t\t.mint_time_remain {\n\t\t\tmargin-right: 0px;\n\t\t}\n\t\t.mint_time {\n\t\t\tjustify-content: center;\n\t\t}\n\t\t.mint_right {\n\t\t\twidth: 95%;\n\t\t\tmargin: auto;\n\t\t\tmargin-top: 50px;\n\t\t\tpadding: 40px 20px;\n\t\t}\n\t\t.mint_right_conter {\n\t\t\tpadding: 30px 20px;\n\t\t}\n\t}\n"])), comm3_bottom_namespaceObject);
function Main() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  var _useNetwork = (0,wagmi_dist/* useNetwork */.LN)(),
    chain = _useNetwork.chain;
  var _useAccount = (0,wagmi_dist/* useAccount */.mA)(),
    address = _useAccount.address,
    isConnected = _useAccount.isConnected;
  var _useConnect = (0,wagmi_dist/* useConnect */.$4)({
      connector: new chunk_2VZS2JHJ/* InjectedConnector */._()
    }),
    connect = _useConnect.connect;
  var _message$useMessage = message/* default */.ZP.useMessage(),
    messageApi = _message$useMessage[0],
    contextHolder = _message$useMessage[1];
  var mintContractErc20 = useMintContract(addressMintContract[chain == null ? void 0 : chain.id]);
  var _useState = (0,react.useState)(),
    countdown = _useState[0],
    setCountdown = _useState[1]; // 倒计时
  var _useState2 = (0,react.useState)(1000),
    toxPrice = _useState2[0],
    setToxPrice = _useState2[1];
  var _useState3 = (0,react.useState)(200),
    usdtPrice = _useState3[0],
    setUsdtPrice = _useState3[1];
  var _useState4 = (0,react.useState)(false),
    showMint = _useState4[0],
    setShowMint = _useState4[1];
  var _useState5 = (0,react.useState)(false),
    showTransaction = _useState5[0],
    setShowTransaction = _useState5[1];
  var _useState6 = (0,react.useState)(''),
    transactionHash = _useState6[0],
    setTransactionHash = _useState6[1];
  var _useState7 = (0,react.useState)(),
    nftNumbet = _useState7[0],
    setNftNumbet = _useState7[1];
  var childShowMint = function childShowMint(show, tokenURI, number) {
    if (tokenURI) {
      setTransactionHash(tokenURI);
      setNftNumbet(number);
      setShowTransaction(true);
    }
    setShowMint(show);
  };
  var childShowTransaction = function childShowTransaction(show) {
    setShowTransaction(show);
  };
  var handleData = /*#__PURE__*/function () {
    var _ref = main_asyncToGenerator( /*#__PURE__*/main_regeneratorRuntime().mark(function _callee() {
      var endTime, endTimeBig, TOXPrice, TOXPriceBig, USDPrice, USDPriceBig;
      return main_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            if (!(address && mintContractErc20)) {
              _context.next = 17;
              break;
            }
            _context.next = 4;
            return mintContractErc20.endTime();
          case 4:
            endTime = _context.sent;
            endTimeBig = new bignumber/* default */.Z(endTime.toString()).toFixed(0);
            setCountdown(endTimeBig * 1000);

            // 查询TOX价格
            _context.next = 9;
            return mintContractErc20.TOXPrice();
          case 9:
            TOXPrice = _context.sent;
            TOXPriceBig = new bignumber/* default */.Z(TOXPrice.toString()).shiftedBy(-18).toFixed(0);
            setToxPrice(TOXPriceBig);

            // 查询usdt价格
            _context.next = 14;
            return mintContractErc20.USDPrice();
          case 14:
            USDPrice = _context.sent;
            USDPriceBig = new bignumber/* default */.Z(USDPrice.toString()).shiftedBy(-18).toFixed(0);
            setUsdtPrice(USDPriceBig);
          case 17:
            _context.next = 21;
            break;
          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](0);
          case 21:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 19]]);
    }));
    return function handleData() {
      return _ref.apply(this, arguments);
    };
  }();
  (0,react.useEffect)(function () {
    handleData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, chain]);
  var url = window.location.href.split('invitation=')[1];
  var _useState8 = (0,react.useState)(''),
    encrypted = _useState8[0],
    setEncrypted = _useState8[1];
  var _useState9 = (0,react.useState)(''),
    decrypted = _useState9[0],
    setDecrypted = _useState9[1];
  var _useState10 = (0,react.useState)(''),
    invitation = _useState10[0],
    setInvitation = _useState10[1];
  var secretKey = 'your-secret-key'; // 应该是一个复杂的密钥
  (0,react.useEffect)(function () {
    // 加密钱包地址
    var handleEncrypted = crypto_js_default().AES.encrypt(address, secretKey).toString();
    setEncrypted(handleEncrypted);
    setInvitation("http://192.168.30.5:8001/#/mint?invitation=" + handleEncrypted);
  }, [address]);
  (0,react.useEffect)(function () {
    if (url) {
      // 解密钱包地址
      var bytes = crypto_js_default().AES.decrypt(url, secretKey);
      setDecrypted(bytes.toString((crypto_js_default()).enc.Utf8));
    }
  }, [url, encrypted]);
  console.log('解密钱包地址==>', decrypted);
  var handleCopy = function handleCopy() {
    copy_to_clipboard_default()(invitation);
    messageApi.open({
      type: 'success',
      content: 'Copy Success'
    });
  };
  var CountdownRenderFn = function CountdownRenderFn(_ref2) {
    var days = _ref2.days,
      hours = _ref2.hours,
      minutes = _ref2.minutes,
      seconds = _ref2.seconds;
    return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
      className: "mint_time_remain"
    }, t('Ended')), /*#__PURE__*/react.createElement("div", {
      className: "mint_time"
    }, /*#__PURE__*/react.createElement("div", {
      className: "mint_time_item"
    }, /*#__PURE__*/react.createElement("span", {
      className: "t"
    }, days >= 10 ? days : '0' + days)), /*#__PURE__*/react.createElement("span", {
      className: "b"
    }, ":"), /*#__PURE__*/react.createElement("div", {
      className: "mint_time_item"
    }, /*#__PURE__*/react.createElement("span", {
      className: "t"
    }, hours >= 10 ? hours : '0' + hours)), /*#__PURE__*/react.createElement("span", {
      className: "b"
    }, ":"), /*#__PURE__*/react.createElement("div", {
      className: "mint_time_item"
    }, /*#__PURE__*/react.createElement("span", {
      className: "t"
    }, minutes >= 10 ? minutes : '0' + minutes)), /*#__PURE__*/react.createElement("span", {
      className: "b"
    }, ":"), /*#__PURE__*/react.createElement("div", {
      className: "mint_time_item"
    }, /*#__PURE__*/react.createElement("span", {
      className: "t"
    }, seconds >= 10 ? seconds : '0' + seconds))));
  };
  return /*#__PURE__*/react.createElement(main_CustomStyle, null, contextHolder, /*#__PURE__*/react.createElement("div", {
    className: "mint_flex"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mint_left"
  }, /*#__PURE__*/react.createElement("img", {
    src: mint_ico_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("div", {
    className: "mint_left_conter"
  }, /*#__PURE__*/react.createElement("h1", null, t('Phantom Egg')), /*#__PURE__*/react.createElement("h2", null, t("Ready to unveil the mystery? Click the 'Mystery Hatch' button to mint your NFT! Each purchase comes in the form of a digital egg, containing a surprise waiting to be revealed. The species and characteristics of your NFT will remain a secret until the egg hatches. Experience the thrill of discovery as you hatch your unique digital asset from one of our four clans: Spiros, Tauros, Baddos, or Dinoo. What will your egg reveal?")), countdown && /*#__PURE__*/react.createElement(index_es/* default */.ZP, {
    date: countdown,
    renderer: CountdownRenderFn,
    key: countdown
  }), !countdown && /*#__PURE__*/react.createElement(index_es/* default */.ZP, {
    date: Date.now(),
    renderer: CountdownRenderFn
  }))), /*#__PURE__*/react.createElement("div", {
    className: "mint_right"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mint_right_title"
  }, /*#__PURE__*/react.createElement("em", null, t('Blind Box Rules')), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("i", null, t('Holding the official authorized TGG guild license allows for collection.')), /*#__PURE__*/react.createElement("div", {
    className: "mint_right_val"
  }, "1000"))), /*#__PURE__*/react.createElement("div", {
    className: "mint_right_conter"
  }, /*#__PURE__*/react.createElement("span", null, t('Ghost War God Arena Mystery Eggs')), /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement("i", null, t('10,000 NFTs have ended.'))), /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement("i", null, t('The NFT price in the game store is 600 USDT.')))), address ? /*#__PURE__*/react.createElement("div", null, countdown > Date.now() ? /*#__PURE__*/react.createElement("div", {
    className: "mint_bottom",
    onClick: function onClick() {
      return setShowMint(true);
    }
  }, t('Mystery Hatch egg')) : /*#__PURE__*/react.createElement("div", {
    className: "mint_bottom mint_bottom_time"
  }, t('Mystery Hatch egg'))) : /*#__PURE__*/react.createElement("div", {
    className: "mint_bottom",
    onClick: function onClick() {
      return connect();
    }
  }, t('Connect Wallet')))), /*#__PURE__*/react.createElement(partners, {
    toxPrice: toxPrice,
    usdtPrice: usdtPrice
  }), showMint && /*#__PURE__*/react.createElement(confirmSeed, {
    childShowMint: childShowMint,
    toxPrice: toxPrice,
    usdtPrice: usdtPrice
  }), showTransaction && /*#__PURE__*/react.createElement(Confirm, {
    childShowTransaction: childShowTransaction,
    tokenURI: transactionHash,
    nftNumbet: nftNumbet
  }));
}
/* harmony default export */ const main = (Main);
;// CONCATENATED MODULE: ./src/pages/mint/index.jsx




function Mint() {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(header, null), /*#__PURE__*/react.createElement(main, null));
}
/* harmony default export */ const mint = (Mint);
;// CONCATENATED MODULE: ./public/images/game_bj.jpg
const game_bj_namespaceObject = __webpack_require__.p + "41ec34783bd2fd308635.jpg";
;// CONCATENATED MODULE: ./public/images/games_kuang.jpg
const games_kuang_namespaceObject = __webpack_require__.p + "a352d73157d4932b4fd4.jpg";
;// CONCATENATED MODULE: ./src/components/game/main.jsx

var game_main_templateObject;
function game_main_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
/* eslint-disable react-hooks/exhaustive-deps */






var game_main_CustomStyle = styled_components_browser_esm/* default */.ZP.div(game_main_templateObject || (game_main_templateObject = game_main_taggedTemplateLiteralLoose(["\n\twidth: 100%;\n\theight: 100vh;\n\tbackground: url(", ") no-repeat;\n\tbackground-size: 100%;\n\n\t.header_container {\n\t\tdisplay: flex;\n\t\ttransition: all 0.3s ease 0s;\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-size: cover;\n\t\tbackground-position: center center;\n\t\tposition: absolute;\n\t\ttop: 50px;\n\t\tleft: 50%;\n\t\ttransform: translateX(-50%);\n\t\twidth: 95%;\n\t\theight: 80px;\n\t\tz-index: 99;\n\t\tpadding: 30px 30px 38px;\n\t\tflex-direction: row;\n\t\t-webkit-box-pack: justify;\n\t\tjustify-content: space-between;\n\t\t-webkit-box-align: center;\n\t\talign-items: center;\n\t}\n\t.header_left {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\t-webkit-box-align: center;\n\t\talign-items: center;\n\t\tgap: 56px;\n\t\ta {\n\t\t\tcolor: #fff;\n\t\t}\n\t}\n\t.header_logo {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\timg {\n\t\t\twidth: 300px;\n\t\t\tmargin-top: 30px;\n\t\t}\n\t}\n\t.games_conter {\n\t\tpadding-top: 200px;\n\t\tpadding-bottom: 50px;\n\t}\n\t.games_pro {\n\t\twidth: 1256px;\n\t\theight: 728px;\n\t\tbackground: url(", ") no-repeat;\n\t\tbackground-size: 100%;\n\t\tmargin: auto;\n\t\ttext-align: center;\n\t\t// display: flex;\n\t\t// justify-content: center;\n\t\t// align-items: center;\n\t}\n\n\n\t@media (max-width: 1700px) {\n\t\t.header_logo {\n\t\t\timg {\n\t\t\t\twidth: 200px;\n\t\t\t\tmargin-top: 20px;\n\t\t\t}\n\t\t}\n\t}\n\n\n\t@media (max-width: 1650px) {\n\t\t.header_container {\n\t\t\twidth: 100%;\n\t\t\tmin-width: 1200px;\n\t\t\tpadding: 10px;\n\t\t}\n\t\t.header_left {\n\t\t\tgap: 20px;\n\t\t}\n\t}\n\n\n\t@media (max-width: 1400px) {\n\t\t.header_left {\n\t\t\tgap: 0px;\n\t\t}\n\t}\n\n"])), game_bj_namespaceObject, games_kuang_namespaceObject);
function Game() {
  return /*#__PURE__*/react.createElement(game_main_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "cryptobit_nav_manu"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header_container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header_left"
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header_logo"
  }, /*#__PURE__*/react.createElement("img", {
    src: logo_namespaceObject,
    alt: ""
  })))))), /*#__PURE__*/react.createElement("div", {
    className: "d-md-block d-lg-none"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mean_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "menu_logo"
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, /*#__PURE__*/react.createElement("img", {
    src: logo_namespaceObject,
    alt: ""
  }))))), /*#__PURE__*/react.createElement("div", {
    className: "games_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "games_pro"
  }, /*#__PURE__*/react.createElement("iframe", {
    src: "https://app.ghostwargod.com/",
    width: "1223px",
    height: "694px",
    scrolling: "no",
    frameborder: "0",
    style: {
      borderRadius: '20px',
      marginTop: '13px'
    }
  }))));
}
/* harmony default export */ const game_main = (Game);
;// CONCATENATED MODULE: ./src/pages/games/index.jsx



function Games() {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(game_main, null));
}
/* harmony default export */ const games = (Games);
;// CONCATENATED MODULE: ./src/pages/app.jsx









// import MainHeader from "../components/header";



var metaMaskConnector = new metaMask/* MetaMaskConnector */.i({
  chains: chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true
  }
});
var injectedConnector = new chunk_2VZS2JHJ/* InjectedConnector */._({
  chains: chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true
  }
});
var app_client = (0,wagmi_dist/* createClient */.eI)({
  autoConnect: true,
  provider: provider,
  connectors: [metaMaskConnector, injectedConnector]
});
function App() {
  var _useState = (0,react.useState)(false),
    ready = _useState[0],
    setReady = _useState[1];
  (0,react.useEffect)(function () {
    setReady(true);
  }, []);
  return /*#__PURE__*/react.createElement(react.Fragment, null, ready ? /*#__PURE__*/react.createElement(wagmi_dist/* WagmiConfig */.eM, {
    client: app_client,
    className: "Index"
  }, /*#__PURE__*/react.createElement(dist/* HashRouter */.UT, null, /*#__PURE__*/react.createElement(react_router_dist/* Routes */.Z5, null, /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react.createElement(index, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/index",
    element: /*#__PURE__*/react.createElement(index, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/mint",
    element: /*#__PURE__*/react.createElement(mint, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/mint/:id",
    element: /*#__PURE__*/react.createElement(mint, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/app",
    element: /*#__PURE__*/react.createElement(games, null)
  })))) : null);
}
/* harmony default export */ const app = (App);
// EXTERNAL MODULE: ./node_modules/dayjs/locale/zh-cn.js
var zh_cn = __webpack_require__(33852);
// EXTERNAL MODULE: ./public/css/style.css
var style = __webpack_require__(57885);
// EXTERNAL MODULE: ./public/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(97212);
// EXTERNAL MODULE: ./public/css/meanmenu.min.css
var meanmenu_min = __webpack_require__(34820);
// EXTERNAL MODULE: ./public/css/responsive.css
var responsive = __webpack_require__(34655);
// EXTERNAL MODULE: ./src/assets/css/common.css
var common = __webpack_require__(66755);
;// CONCATENATED MODULE: ./src/index.jsx









var root = client.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/react.createElement(app, null));

/***/ }),

/***/ 99922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressZero: () => (/* binding */ AddressZero),
/* harmony export */   axiosUrl: () => (/* binding */ axiosUrl),
/* harmony export */   getContractObj: () => (/* binding */ getContractObj),
/* harmony export */   isAddress: () => (/* binding */ isAddress),
/* harmony export */   parseNumber: () => (/* binding */ parseNumber),
/* harmony export */   unique: () => (/* binding */ unique),
/* harmony export */   uniqueChain: () => (/* binding */ uniqueChain),
/* harmony export */   uniqueNeraChain: () => (/* binding */ uniqueNeraChain)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(752);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56646);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60228);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76265);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38077);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97195);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64043);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22462);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(241);
/* harmony import */ var lodash_memoize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88306);
/* harmony import */ var lodash_memoize__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_memoize__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ethersproject_address__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64594);
/* harmony import */ var _ethersproject_contracts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(96519);












var AddressZero = "0x0000000000000000000000000000000000000000";

// export const axiosUrl = "http://192.168.90.68:8080"
var axiosUrl = "https://portal.ccdao.cc";
var isAddress = lodash_memoize__WEBPACK_IMPORTED_MODULE_8___default()(function (value) {
  try {
    return (0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_9__.getAddress)(value);
  } catch (_unused) {
    return false;
  }
});
function getContractObj(address, ABI) {
  var _window, _window2;
  if (!isAddress(address) || address === AddressZero) {
    throw Error("Invalid 'address' parameter '" + address + "'.");
  }
  if (!((_window = window) != null && _window.ethereum)) {
    return;
  }
  // @ts-ignore
  var provider = new ethers__WEBPACK_IMPORTED_MODULE_10__/* .Web3Provider */ .Q((_window2 = window) == null ? void 0 : _window2.ethereum);
  return new _ethersproject_contracts__WEBPACK_IMPORTED_MODULE_11__/* .Contract */ .CH(address, ABI, provider.getSigner());
}
var unique = function unique(arr) {
  var res = new Map();
  return arr.filter(function (a) {
    return !res.has(a.symbol) && res.set(a.symbol, 1);
  });
};
var uniqueNeraChain = function uniqueNeraChain(arr) {
  var res = new Map();
  return arr.filter(function (a) {
    return !res.has(a.neraChainId) && res.set(a.neraChainId, 1);
  });
};
var uniqueChain = function uniqueChain(arr) {
  var res = new Map();
  return arr.filter(function (a) {
    return !res.has(a.neraChainId) && res.set(a.neraChainId, 1);
  });
};
var parseNumber = function parseNumber(num, decimal) {
  var newNum = "";
  var count = 0;
  var numStr = String(num); // 数字转为字符串;
  // 当字符串不含有小数点
  if (numStr.indexOf(".") == -1) {
    var i;
    for (i = numStr.length - 1; i >= 0; i--) {
      if (count % 3 == 0 && count != 0) {
        newNum = numStr.charAt(i) + "," + newNum;
      } else {
        newNum = numStr.charAt(i) + newNum;
      }
      count++;
    }
    // numStr= newNum + ".00"; // 自动补小数点后两位
    numStr = newNum;
    return numStr;
  } else {
    var _numberArr$;
    // 当字符串含有小数点
    for (var _i = numStr.indexOf(".") - 1; _i >= 0; _i--) {
      if (count % 3 == 0 && count != 0) {
        newNum = numStr.charAt(_i) + "," + newNum;
      } else {
        newNum = numStr.charAt(_i) + newNum; // 字符拼接
      }
      count++;
    }
    var reg = /^0+/;
    var numberArr = String(numStr).split('.');

    //  小数点后面 0 的个数
    var zeroArrCount = numberArr && ((_numberArr$ = numberArr[1]) == null ? void 0 : _numberArr$.match(reg));
    var zeroCount = zeroArrCount == null ? void 0 : zeroArrCount[0];
    var zeroCountLen = (zeroCount == null ? void 0 : zeroCount.length) || 0;
    // 保留几位小数
    var zeroDecimal = zeroCountLen !== 0 ? zeroCountLen + 2 : 0;
    var numDecimal = decimal ? decimal + 1 : 3 + 1;
    var decimalNewNum = zeroDecimal === 0 ? numDecimal : zeroDecimal + 1;
    numStr = newNum + (numStr + "00").substr((numStr + "00").indexOf("."), decimalNewNum);
    return numStr;
  }
};

/***/ }),

/***/ 72297:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 46601:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 64130:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Connect Wallet":"Connect Wallet","HOME":"HOME","Marketplace":"Marketplace","Games":"Games","Mystery Hatch":"Mystery Hatch","WhitePaper":"WhitePaper","LORE":"LORE","AXS":"AXS","News":"News","More":"More","Enter the Phantom Arena: 3 minutes, 50 players, endless excitement. Choose your creature, embrace the chaos. Win or lose, glory and rewards await!":"Enter the Phantom Arena: 3 minutes, 50 players, endless excitement. Choose your creature, embrace the chaos. Win or lose, glory and rewards await!","The Road of Strategy":"The Road of Strategy","The Road of":"The Road of","Strategy":"Strategy","Hone your skills, master strategy, and you will become the ruler.":"Hone your skills, master strategy, and you will become the ruler.","Journey of the Competition":"Journey of the Competition","Journey of the":"Journey of the","Competition":"Competition","Every match is an opportunity to march towards glory, every showdown is a step towards conquering the world.":"Every match is an opportunity to march towards glory, every showdown is a step towards conquering the world.","The Road to the Peak":"The Road to the Peak","The Road to":"The Road to","the Peak":"the Peak","In this game filled with wealth and honor, only you can stand at the pinnacle. Let\'s begin! Fight for glory and fortune.":"In this game filled with wealth and honor, only you can stand at the pinnacle. Let\'s begin! Fight for glory and fortune.","This is an exhilarating blockchain PvP game.":"This is an exhilarating blockchain PvP game.","This is an exhilarating":"This is an exhilarating","blockchain PvP game.":"blockchain PvP game.","It provides up to 50 players with the opportunity to engage in real-time battles within the selected arena. Players compete for the supreme position to achieve top rankings and win enticing rewards.":"It provides up to 50 players with the opportunity to engage in real-time battles within the selected arena. Players compete for the supreme position to achieve top rankings and win enticing rewards.","Step into Phantom Arena: Experience the Thrill in Just 3 Minutes! Win or lose, great prizes await. Start your journey now and let the excitement take over!":"Step into Phantom Arena: Experience the Thrill in Just 3 Minutes! Win or lose, great prizes await. Start your journey now and let the excitement take over!","Unique Skill Arena: NFT Adventure Journey":"Unique Skill Arena: NFT Adventure Journey","Unique Skill Arena:":"Unique Skill Arena:","NFT Adventure Journey":"NFT Adventure Journey","To enter this game, players need to acquire NFT characters with unique skills and arena tickets. Each match has a duration of 3 minutes, with the top 15 players having the opportunity to win lucrative rewards.":"To enter this game, players need to acquire NFT characters with unique skills and arena tickets. Each match has a duration of 3 minutes, with the top 15 players having the opportunity to win lucrative rewards.","The duration of each game is 3 minutes.":"The duration of each game is 3 minutes.","The top 15 players have the chance to win generous rewards.":"The top 15 players have the chance to win generous rewards.","There are 3 different arenas, each offering a unique Major Coin as a reward.":"There are 3 different arenas, each offering a unique Major Coin as a reward.","A maximum of 50 players can participate in the battle.":"A maximum of 50 players can participate in the battle.","Losing players will be rewarded with Power-up NFTs to increase their odds of winning the next game.":"Losing players will be rewarded with Power-up NFTs to increase their odds of winning the next game.","NFT Exhibition":"NFT Exhibition","Welcome to Phase 1 of our exclusive NFT collection, featuring four distinct species: Spiros, Tauros, Baddos, and Dinoo Clan. Each clan is represented by six unique NFTs.":"Welcome to Phase 1 of our exclusive NFT collection, featuring four distinct species: Spiros, Tauros, Baddos, and Dinoo Clan. Each clan is represented by six unique NFTs. ","All NFTs in the presale are priced at $200 USD, payable in BTC, ETH, or TOX. For detailed purchasing information, please reach out to our authorized distributors.":"All NFTs in the presale are priced at $200 USD, payable in BTC, ETH, or TOX. For detailed purchasing information, please reach out to our authorized distributors.","Don\'t miss out on this unique opportunity to own a piece of digital art from these captivating clans!":"Don\'t miss out on this unique opportunity to own a piece of digital art from these captivating clans!","Category - Ghost Outlaws, Ghost Animals, Ghost Creatures, Cute Ghosts. All priced at 200 USD equivalent in BTC, ETH, and fixed TOX payment (600 tokens).":"Category - Ghost Outlaws, Ghost Animals, Ghost Creatures, Cute Ghosts. All priced at 200 USD equivalent in BTC, ETH, and fixed TOX payment (600 tokens).","NFT Trading Marketplace":"NFT Trading Marketplace","Spectral Creature":"Spectral Creature","Ghost Animals":"Ghost Animals","Ghost Bandit":"Ghost Bandit","Cute Ghost":"Cute Ghost","Arena Showcase":"Arena Showcase","BTC Special Event":"BTC Special Event","Unveil the mysteries of Bitcoin, climb to new heights, and seize endless glory! Experience the charm of BTC firsthand and win a victory that belongs to you!":"Unveil the mysteries of Bitcoin, climb to new heights, and seize endless glory! Experience the charm of BTC firsthand and win a victory that belongs to you!","ETH Special Event":"ETH Special Event","Witness the dazzling brilliance of Ethereum, challenge your limits, and seize the opportunity to claim abundant rewards! Embark on the journey of ETH now and create your own legend!":"Witness the dazzling brilliance of Ethereum, challenge your limits, and seize the opportunity to claim abundant rewards! Embark on the journey of ETH now and create your own legend!","TOX Special Event":"TOX Special Event","Infused with unique elements, the TOX special event awaits your participation! Be a pioneer, vie for exclusive rewards, and embark on a brand new TOX adventure!":"Infused with unique elements, the TOX special event awaits your participation! Be a pioneer, vie for exclusive rewards, and embark on a brand new TOX adventure!","Game Guild Showcase":"Game Guild Showcase","Investors have the opportunity to collaborate with game guilds. These guilds provide professional players to represent NFT owners in competitions, increasing their chances of winning rewards. Players climb to the pinnacle of wealth and glory through competitions. Investors partnering with guilds can effortlessly gain profits.":"Investors have the opportunity to collaborate with game guilds. These guilds provide professional players to represent NFT owners in competitions, increasing their chances of winning rewards. Players climb to the pinnacle of wealth and glory through competitions. Investors partnering with guilds can effortlessly gain profits.","Fierce Battle: Clash of Power":"Fierce Battle: Clash of Power","Phantom Egg":"Phantom Egg","Ready to unveil the mystery? Click the \'Mystery Hatch\' button to mint your NFT! Each purchase comes in the form of a digital egg, containing a surprise waiting to be revealed. The species and characteristics of your NFT will remain a secret until the egg hatches. Experience the thrill of discovery as you hatch your unique digital asset from one of our four clans: Spiros, Tauros, Baddos, or Dinoo. What will your egg reveal?":"Ready to unveil the mystery? Click the \'Mystery Hatch\' button to mint your NFT! Each purchase comes in the form of a digital egg, containing a surprise waiting to be revealed. The species and characteristics of your NFT will remain a secret until the egg hatches. Experience the thrill of discovery as you hatch your unique digital asset from one of our four clans: Spiros, Tauros, Baddos, or Dinoo. What will your egg reveal?","Remaining Time":"Remaining Time","Blind Box Rules":"Blind Box Rules","Holding the official authorized TGG guild license allows for collection.":"Holding the official authorized TGG guild license allows for collection.","Ghost War God Arena Mystery Eggs":"Ghost War God Arena Mystery Eggs","The price for one batch of 3,000 mystery eggs is 200 USDT.":"The price for one batch of 3,000 mystery eggs is 200 USDT.","The price for the second batch of 2,000 mystery eggs is 300 USDT.":"The price for the second batch of 2,000 mystery eggs is 300 USDT.","The price for the third batch of 2,000 mystery eggs is 400 USDT.":"The price for the third batch of 2,000 mystery eggs is 400 USDT.","The price for fourth batch of 2,000 mystery eggs is 600 USDT.":"The price for fourth batch of 2,000 mystery eggs is 600 USDT.","The price for five batch of 1,000 mystery eggs is 800 USDT.":"The price for five batch of 1,000 mystery eggs is 800 USDT.","Choose your phantom egg":"Choose your phantom egg","Mystery Hatch egg":"Mystery Hatch","Supporting Partners":"Supporting Partners","Balance：":"Balance：","Approve":"Approve","Payment":"Payment","Number":"Number","Input ID":"Enter ID","Input mint quantity":"Enter quantity to forge","Together you breed heroes":"Together you breed heroes","Operations Team":"Operations Team","Alan":"Alan","CEO Co-founder":"CEO Co-founder","CSO of INTOverse":"CSO of INTOverse","TikTok-authorized MCN Agency Leader":"TikTok-authorized MCN Agency Leader","Former COO of leading GameFi Axie":"Former COO of leading GameFi Axie","John Rose":"John Rose","Graduated from Stanford University":"Graduated from Stanford University","CMO":"CMO","Leading GameFi Core Team":"Leading GameFi Core Team","Rein Ceren":"Rein Ceren","CSPO":"CSPO","Ambassador for Overseas Market Promotion":"Ambassador for Overseas Market Promotion","GameFi Digital Marketing Expert":"GameFi Digital Marketing Expert","Vance":"Vance","CTO of Phantom Arena":"CTO of Phantom Arena","Graduated from the Computer Science Department at Stanford University":"Graduated from the Computer Science Department at Stanford University","Proficient in advanced Java programming language":"Proficient in advanced Java programming language","Currently serving as a top global gaming technology consultant":"Currently serving as a top global gaming technology consultant","My invitation link":"My invitation link","Copy":"Copy","Ended":"Ended","10,000 NFTs have ended.":"10,000 NFTs have ended.","The NFT price in the game store is 600 USDT.":"The NFT price in the game store is 600 USDT.","Coming soon":"Coming soon","":""}');

/***/ }),

/***/ 216:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Connect Wallet":"Connecter le portefeuille","HOME":"Accueil","Marketplace":"Le marché","Games":"Jeux","LORE":"Connaissance","AXS":"AXS","News":"Message","More":"Plus de","Welcome to the Ghost War God Arena, where only the strongest can stand undefeated. Are you ready for intense battles?":"Bienvenue dans l\'arène des dieux de la guerre des fantômes, où seuls les puissants peuvent être invaincus. Êtes - vous prêt pour une bataille féroce?","The Road of Strategy":"La voie stratégique","Hone your skills, master strategy, and you will become the ruler.":"Aiguisez vos compétences, maîtrisez la stratégie et vous deviendrez le dirigeant.","Journey of the Competition":"Voyage de compétition","Every match is an opportunity to march towards glory, every showdown is a step towards conquering the world.":"Chaque match est une occasion de progresser vers la gloire et chaque bataille décisive est un pas vers la conquête du monde.","The Road to the Peak":"Le chemin du Sommet","In this game filled with wealth and honor, only you can stand at the pinnacle. Let\'s begin! Fight for glory and fortune.":"Vous seul pouvez vous tenir au sommet dans ce jeu rempli de richesses et d\'honneurs. On commence ？ Lutte pour l\'honneur et la richesse.","This is an exhilarating blockchain PvP game.":"C\'est un jeu de PVP de blockchain de mémoire exaltant","This is an exhilarating":"C\'est un jeu de PVP de","blockchain PvP game.":"blockchain de mémoire exaltant","It provides up to 50 players with the opportunity to engage in real-time battles within the selected arena. Players compete for the supreme position to achieve top rankings and win enticing rewards.":"Il offre à jusqu\'à 50 joueurs la possibilité de se battre en temps réel dans des arènes marquées. Les joueurs se disputent les positions les plus élevées pour obtenir le classement le plus élevé et gagner des récompenses attrayantes.","Unique Skill Arena: NFT Adventure Journey":"Hippodrome: NFT Adventure tour","Unique Skill Arena:":"Hippodrome:","NFT Adventure Journey":"NFT Adventure tour","To enter this game, players need to acquire NFT characters with unique skills and arena tickets. Each match has a duration of 3 minutes, with the top 15 players having the opportunity to win lucrative rewards.":"Pour entrer dans ce jeu, les joueurs doivent obtenir des personnages NFT avec des compétences uniques et des billets d\'arène. Chaque match dure 3 minutes et les 15 meilleurs joueurs ont une chance de gagner de belles récompenses.","The duration of each game is 3 minutes.":"Chaque match dure 3 minutes.","The top 15 players have the chance to win generous rewards.":"Les joueurs dans le Top 15 ont une chance de gagner de belles récompenses.","NFT Exhibition":"Exposition NFT","Category - Ghost Outlaws, Ghost Animals, Ghost Creatures, Cute Ghosts. All priced at 200 USD equivalent in BTC, ETH, and fixed TOX payment (600 tokens).":"Catégorie - fantômes morts - vivants, animaux fantômes, créatures fantômes, fantômes mignons. Tous les prix sont l\'équivalent de 200 USD en BTC, ETH et paiement Tox fixe (600 jetons).","NFT Trading Marketplace":"Le marché du Trading NFT","Ghost Creatures":"Créatures fantômes","Ghost Animals":"Animaux fantômes","Ghost Bandit":"Gangster fantôme","Cute Ghosts":"Le fantôme mignon","Arena Showcase":"Présentation de l\'arène","BTC Special Event":"Événements spéciaux BTC","Unveil the mysteries of Bitcoin, climb to new heights, and seize endless glory! Experience the charm of BTC firsthand and win a victory that belongs to you!":"Démystifiez bitcoin, Grimpez de nouveaux sommets et prenez la gloire sans fin! Découvrez par vous - même le charme du BTC et gagnez la victoire qui vous appartient!","ETH Special Event":"Événements spéciaux ETH","Witness the dazzling brilliance of Ethereum, challenge your limits, and seize the opportunity to claim abundant rewards! Embark on the journey of ETH now and create your own legend!":"Assistez à la lumière éblouissante d\'ethereum, repoussez les limites et saisissez l\'occasion de réclamer de superbes récompenses! Embarquez pour le voyage ETH aujourd\'hui et créez votre propre légende!","TOX Special Event":"Événements spéciaux Tox","Infused with unique elements, the TOX special event awaits your participation! Be a pioneer, vie for exclusive rewards, and embark on a brand new TOX adventure!":"Un événement spécial Tox rempli d\'éléments uniques attend votre participation! Devenez un pionnier, rivalisez pour des récompenses exclusives et embarquez dans une toute nouvelle aventure Tox!","Game Guild Showcase":"Affichage de guilde de jeu","Investors have the opportunity to collaborate with game guilds. These guilds provide professional players to represent NFT owners in competitions, increasing their chances of winning rewards. Players climb to the pinnacle of wealth and glory through competitions. Investors partnering with guilds can effortlessly gain profits.":"Les investisseurs ont la possibilité de travailler avec la Guilde du jeu. Ces guildes offrent aux joueurs professionnels de représenter les propriétaires de NFT dans les tournois, ajoutant ainsi leurs chances de gagner des récompenses. Les joueurs atteignent le Sommet de la richesse et de la gloire à travers la course. Les investisseurs qui travaillent avec des guildes peuvent faire des profits sans effort.","":""}');

/***/ }),

/***/ 58491:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Connect Wallet":"ウォレットの接続","HOME":"トップページ","Marketplace":"市場","Games":"ゲーム","LORE":"知識","AXS":"AXS","News":"メッセージ","More":"より多くの","Welcome to the Ghost War God Arena, where only the strongest can stand undefeated. Are you ready for intense battles?":"鬼戦神競技場へようこそ。ここには強者だけが負けない。激しい戦いに参加する準備はできていますか。","The Road of Strategy":"戦略の道","Hone your skills, master strategy, and you will become the ruler.":"あなたのスキルを磨き、戦略を身につければ、あなたは支配者になります。","Journey of the Competition":"レースの旅","Every match is an opportunity to march towards glory, every showdown is a step towards conquering the world.":"どの試合も輝かしいチャンスであり、どの決戦も世界征服の一歩である。","The Road to the Peak":"頂上への道","In this game filled with wealth and honor, only you can stand at the pinnacle. Let\'s begin! Fight for glory and fortune.":"富と栄誉に満ちたこのゲームでは、あなただけが頂点に立つことができます。始めましょう！栄誉と富のために戦う。","This is an exhilarating blockchain PvP game.":"これはエキサイティングなメモリブロックチェーンPvPゲームです","This is an exhilarating":"これはエキサイティングなメモ","blockchain PvP game.":"リブロックチェーンPvPゲームです","It provides up to 50 players with the opportunity to engage in real-time battles within the selected arena. Players compete for the supreme position to achieve top rankings and win enticing rewards.":"50人までのプレイヤーに、競技場内でリアルタイムで戦う機会を提供しています。プレイヤーは最高の位置を争って最高の順位を獲得し、魅力的な奨励金を獲得する。","Unique Skill Arena: NFT Adventure Journey":"スタント・アリーナ：NFTアドベンチャー・ツアー","Unique Skill Arena:":"スタント・アリーナ：","NFT Adventure Journey":"NFTアドベンチャー・ツアー","To enter this game, players need to acquire NFT characters with unique skills and arena tickets. Each match has a duration of 3 minutes, with the top 15 players having the opportunity to win lucrative rewards.":"このゲームに入るには、プレイヤーは独自のスキルを持つNFTキャラクターと競技場のチケットを手に入れる必要があります。各試合の持続時間は3分で、上位15選手は手厚い奨励金を獲得する機会がある。","The duration of each game is 3 minutes.":"1試合あたりの持続時間は3分。","The top 15 players have the chance to win generous rewards.":"上位15人のプレイヤーは、手厚い報酬を得ることができます。","NFT Exhibition":"NFT展示","Category - Ghost Outlaws, Ghost Animals, Ghost Creatures, Cute Ghosts. All priced at 200 USD equivalent in BTC, ETH, and fixed TOX payment (600 tokens).":"カテゴリ-幽霊、鬼動物、鬼生物、かわいい鬼。すべての価格は200ドル相当のBTC、ETH、固定TOX支払い（600トークン）です。","NFT Trading Marketplace":"NFT取引市場","Ghost Creatures":"幽霊生物","Ghost Animals":"ゆうれい動物","Ghost Bandit":"幽霊匪賊","Cute Ghosts":"かわいい幽霊","Arena Showcase":"競技場の展示","BTC Special Event":"BTCスペシャルイベント","Unveil the mysteries of Bitcoin, climb to new heights, and seize endless glory! Experience the charm of BTC firsthand and win a victory that belongs to you!":"ビットコインの神秘のベールをはがし、新たな高さに登り、果てしない栄光を奪う！BTCの魅力を身をもって体験して、あなたの勝利を勝ち取ります！","ETH Special Event":"ETHスペシャルイベント","Witness the dazzling brilliance of Ethereum, challenge your limits, and seize the opportunity to claim abundant rewards! Embark on the journey of ETH now and create your own legend!":"エーテル坊のまぶしい光を見て、限界に挑戦して、チャンスをつかんで手厚い奨励金を受け取る！すぐにETHの旅に出て、自分だけの伝奇をつくろう！","TOX Special Event":"TOXスペシャルイベント","Infused with unique elements, the TOX special event awaits your participation! Be a pioneer, vie for exclusive rewards, and embark on a brand new TOX adventure!":"ユニークな要素満載のTOXスペシャルイベントにご参加お待ちしております！パイオニアとなり、独占特典を奪い合い、新たなTOXアドベンチャーをスタート！","Game Guild Showcase":"ゲームギルド展示","Investors have the opportunity to collaborate with game guilds. These guilds provide professional players to represent NFT owners in competitions, increasing their chances of winning rewards. Players climb to the pinnacle of wealth and glory through competitions. Investors partnering with guilds can effortlessly gain profits.":"投資家はゲーム組合と協力する機会がある。これらのギルドは、NFT所有者を代表して試合中にプロゲーマーに報酬を与える機会を新たに提供します。プレイヤーたちは試合を通じて富と栄光の頂点に登った。組合と協力している投資家は、簡単に利益を得ることができます。","":""}');

/***/ }),

/***/ 89233:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Connect Wallet":"지갑 연결","HOME":"첫 페이지","Marketplace":"시장","Games":"게임","LORE":"지식","AXS":"AXS","News":"메시지","More":"더 많은","Welcome to the Ghost War God Arena, where only the strongest can stand undefeated. Are you ready for intense battles?":"귀전신 경기장에 오신 것을 환영합니다. 이곳은 강자만이 패하지 않을 수 있습니다.당신은 격렬한 전투에 참가할 준비가 되었습니까?","The Road of Strategy":"전략의 길","Hone your skills, master strategy, and you will become the ruler.":"기술을 연마하고 전략을 익히면 통치자가 될 것이다.","Journey of the Competition":"경기 여행","Every match is an opportunity to march towards glory, every showdown is a step towards conquering the world.":"매 경기는 모두 휘황한 기회로 나아가고 매 결전은 모두 세계를 정복하는 한걸음이다.","The Road to the Peak":"정상길","In this game filled with wealth and honor, only you can stand at the pinnacle. Let\'s begin! Fight for glory and fortune.":"부와 명예로 가득 찬 이 게임에서 오직 너만이 정상에 설 수 있다.갑시다!명예와 부를 위해 싸우다.","This is an exhilarating blockchain PvP game.":"메모리 블록 체인 PvP 게임입니다.","This is an exhilarating":"메모리 블록 체인","blockchain PvP game.":"PvP 게임입니다.","It provides up to 50 players with the opportunity to engage in real-time battles within the selected arena. Players compete for the supreme position to achieve top rankings and win enticing rewards.":"최대 50명의 플레이어에게 표시된 경기장 내에서 실시간 전투를 할 수 있는 기회를 제공한다.유저는 최고 위치를 쟁탈하여 최고 랭킹을 획득하고 매혹적인 보상을 획득합니다.","Unique Skill Arena: NFT Adventure Journey":"묘기 경기장: NFT 모험 여행","Unique Skill Arena:":"묘기 경기장:","NFT Adventure Journey":"NFT 모험 여행","To enter this game, players need to acquire NFT characters with unique skills and arena tickets. Each match has a duration of 3 minutes, with the top 15 players having the opportunity to win lucrative rewards.":"이 게임에 들어가려면 독특한 스킬을 가진 NFT 캐릭터와 경기장 입장권을 획득해야 한다.매 경기 지속 시간은 3분이며, 상위 15명의 선수는 푸짐한 보상을 받을 기회가 있다.","The duration of each game is 3 minutes.":"매 경기 지속 시간은 3분이다.","The top 15 players have the chance to win generous rewards.":"상위 15위 유저는 풍부한 보상을 획득할 기회가 있습니다.","NFT Exhibition":"NFT 전시회","Category - Ghost Outlaws, Ghost Animals, Ghost Creatures, Cute Ghosts. All priced at 200 USD equivalent in BTC, ETH, and fixed TOX payment (600 tokens).":"카테고리 - 귀신 망혼, 귀신 동물, 귀신 생물, 귀여운 귀신.모든 가격은 200달러와 같은 BTC, ETH 및 고정 TOX 지불 (600토큰) 입니다.","NFT Trading Marketplace":"NFT 거래 시장","Ghost Creatures":"유령 생물","Ghost Animals":"유령동물","Ghost Bandit":"유령도적","Cute Ghosts":"귀여운 유령","Arena Showcase":"경기장 전시","BTC Special Event":"BTC 스페셜 이벤트","Unveil the mysteries of Bitcoin, climb to new heights, and seize endless glory! Experience the charm of BTC firsthand and win a victory that belongs to you!":"비트코인의 신비한 베일을 벗고 새로운 높이에 올라 끝없는 영광을 쟁취하자!BTC의 매력을 직접 체험하고 당신만의 승리를 쟁취하세요!","ETH Special Event":"ETH 특별 이벤트","Witness the dazzling brilliance of Ethereum, challenge your limits, and seize the opportunity to claim abundant rewards! Embark on the journey of ETH now and create your own legend!":"이더리움의 눈부신 빛을 목격하고, 극한에 도전하고, 기회를 포착하여 풍부한 보상을 수령하세요!지금 ETH 여행에 올라 나만의 전설을 만들어라!","TOX Special Event":"TOX 특별 이벤트","Infused with unique elements, the TOX special event awaits your participation! Be a pioneer, vie for exclusive rewards, and embark on a brand new TOX adventure!":"유니크한 요소가 가득한 TOX 특별 이벤트 참여를 기다리고 있습니다!선봉이 되어 독점 보상을 쟁탈하고 새로운 TOX 모험을 시작합니다!","Game Guild Showcase":"게임 길드 전시","Investors have the opportunity to collaborate with game guilds. These guilds provide professional players to represent NFT owners in competitions, increasing their chances of winning rewards. Players climb to the pinnacle of wealth and glory through competitions. Investors partnering with guilds can effortlessly gain profits.":"투자자는 게임 길드와 합작할 기회가 있다.이들 길드는 프로게이머가 경기에서 NFT 소유자를 대표해 보상을 받을 수 있는 기회를 추가한다.플레이어들은 경기를 통해 부와 영광의 정상에 올랐다.길드와 합작한 투자자는 조금도 힘들이지 않고 이윤을 얻을 수 있다.","":""}');

/***/ }),

/***/ 24473:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Connect Wallet":"Sambungkan dompet","HOME":"halaman rumah","Marketplace":"pasar","Games":"permainan","LORE":"pengetahuan","AXS":"AXS","News":"berita","More":"Lebih","Welcome to the Ghost War God Arena, where only the strongest can stand undefeated. Are you ready for intense battles?":"Selamat datang ke Arena Roh Tuhan, di mana hanya orang kuat yang boleh kekal tidak dipenuhi. Adakah anda bersedia untuk berpartisipasi dalam pertempuran yang kejam?","The Road of Strategy":"Jalan strategik","Hone your skills, master strategy, and you will become the ruler.":"Menghormati kemampuan and a, strategi master, dan anda akan menjadi pemerintah.","Journey of the Competition":"Perlawanan","Every match is an opportunity to march towards glory, every showdown is a step towards conquering the world.":"Setiap permainan adalah peluang untuk bergerak ke arah kemuliaan, dan setiap pertempuran yang menentukan adalah langkah ke arah mengalahkan dunia.","The Road to the Peak":"The Road to the Peak","In this game filled with wealth and honor, only you can stand at the pinnacle. Let\'s begin! Fight for glory and fortune.":"Dalam permainan ini penuh kekayaan dan kehormatan, hanya anda boleh berdiri di atas. Mari kita mulakan! Berjuang untuk kehormatan dan kekayaan.","This is an exhilarating blockchain PvP game.":"Ini adalah permainan PvP blockchain ingatan yang menarik","This is an exhilarating":"Ini adalah permainan PvP","blockchain PvP game.":"blockchain ingatan yang menarik","It provides up to 50 players with the opportunity to engage in real-time battles within the selected arena. Players compete for the supreme position to achieve top rankings and win enticing rewards.":"Ia menyediakan sehingga 50 pemain peluang untuk terlibat dalam pertempuran masa sebenar dalam arena yang ditentukan. Pemain bersaing untuk kedudukan tertinggi untuk mencapai peringkat tertinggi dan menang hadiah menarik.","Unique Skill Arena: NFT Adventure Journey":"Arena Stunt: Perjalanan Adventure NFT","Unique Skill Arena:":"Arena Stunt:","NFT Adventure Journey":"Perjalanan Adventure NFT","To enter this game, players need to acquire NFT characters with unique skills and arena tickets. Each match has a duration of 3 minutes, with the top 15 players having the opportunity to win lucrative rewards.":"Untuk memasuki permainan ini, pemain perlu mendapatkan aksara NFT dengan kemahiran unik dan tiket arena. Selama setiap permainan adalah 3 minit, dan 15 pemain terbaik mempunyai peluang untuk menang hadiah yang murah hati.","The duration of each game is 3 minutes.":"Waktu setiap permainan ialah 3 minit.","The top 15 players have the chance to win generous rewards.":"15 pemain terbaik mempunyai peluang untuk menang hadiah yang murah hati.","NFT Exhibition":"Eksport NFT","Category - Ghost Outlaws, Ghost Animals, Ghost Creatures, Cute Ghosts. All priced at 200 USD equivalent in BTC, ETH, and fixed TOX payment (600 tokens).":"Kategori - Ghost Undead, Ghost Animals, Ghost Creatures, Cute Ghosts. Semua harga sama dengan $200 dalam BTC, ETH, dan pembayaran TOX tetap (600 token).","NFT Trading Marketplace":"Pasar perdagangan NFT","Ghost Creatures":"Cipta Spektral","Ghost Animals":"Hewan hantu","Ghost Bandit":"Ghost Bandit","Cute Ghosts":"Hantu Manis","Arena Showcase":"Paparan Arena","BTC Special Event":"Peristiwa Khas BTC","Unveil the mysteries of Bitcoin, climb to new heights, and seize endless glory! Experience the charm of BTC firsthand and win a victory that belongs to you!":"Buka tutup misteri Bitcoin, mendaki tinggi baru, dan menuntut kemuliaan yang tak berakhir! Mengalami sihir BTC tangan pertama dan memenangkan kemenangan anda sendiri!","ETH Special Event":"Peristiwa istimewa ETH","Witness the dazzling brilliance of Ethereum, challenge your limits, and seize the opportunity to claim abundant rewards! Embark on the journey of ETH now and create your own legend!":"Saksikanlah cahaya Ethereum yang terang, cabarlah batas-batas kamu, dan ambillah peluang untuk menerima pahala yang mulia! Masuklah ke dalam perjalanan ETH segera dan ciptakan legenda anda sendiri!","TOX Special Event":"Peristiwa Khas TOX","Infused with unique elements, the TOX special event awaits your participation! Be a pioneer, vie for exclusive rewards, and embark on a brand new TOX adventure!":"Peristiwa istimewa TOX penuh dengan unsur unik menunggu ketertarikan anda! Jadilah pemimpin, bersaing untuk hadiah eksklusif, dan mulakan petualangan baru TOX!","Game Guild Showcase":"Paparan Guild Permainan","Investors have the opportunity to collaborate with game guilds. These guilds provide professional players to represent NFT owners in competitions, increasing their chances of winning rewards. Players climb to the pinnacle of wealth and glory through competitions. Investors partnering with guilds can effortlessly gain profits.":"Pelayan mempunyai peluang untuk bekerja sama dengan gol permainan. Gild ini memberikan pemain profesional peluang untuk mewakili pemilik NFT dalam pertandingan dan meningkatkan peluang mereka untuk menang hadiah. Pemain mencapai puncak kekayaan dan kemuliaan melalui pertandingan. Para pelabur yang bekerja sama dengan tipu daya boleh mendapatkan keuntungan tanpa usaha.","":""}');

/***/ }),

/***/ 83501:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Connect Wallet":"Ligar à Carteira","HOME":"Página inicial","Marketplace":"mercado","Games":"jogo","LORE":"conhecimento","AXS":"AXS","News":"notícias","More":"Mais","Welcome to the Ghost War God Arena, where only the strongest can stand undefeated. Are you ready for intense battles?":"Bem-vindo à Ghost God Arena, onde apenas os fortes podem permanecer invictos. Você está pronto para participar da batalha feroz?","The Road of Strategy":"A via estratégica","Hone your skills, master strategy, and you will become the ruler.":"Aprimore suas habilidades, domine estratégias e você se tornará um governante.","Journey of the Competition":"Tour de Competição","Every match is an opportunity to march towards glory, every showdown is a step towards conquering the world.":"Cada jogo é uma oportunidade para avançar em direção à glória, e cada batalha decisiva é um passo para conquistar o mundo.","The Road to the Peak":"O Caminho para o Pico","In this game filled with wealth and honor, only you can stand at the pinnacle. Let\'s begin! Fight for glory and fortune.":"Neste jogo cheio de riqueza e honra, só você pode ficar no topo. Vamos começar! Lutar por honra e riqueza.","This is an exhilarating blockchain PvP game.":"Este é um emocionante jogo PvP blockchain de memória","This is an exhilarating":"Este é um emocionante jogo ","blockchain PvP game.":"PvP blockchain de memória","It provides up to 50 players with the opportunity to engage in real-time battles within the selected arena. Players compete for the supreme position to achieve top rankings and win enticing rewards.":"Ele oferece a até 50 jogadores a oportunidade de se envolver em batalhas em tempo real dentro de arenas designadas. Os jogadores competem pela posição mais alta para alcançar a classificação mais alta e ganhar recompensas atraentes.","Unique Skill Arena: NFT Adventure Journey":"Stunt Arena: NFT Adventure Journey","Unique Skill Arena:":"Stunt Arena:","NFT Adventure Journey":"NFT Adventure Journey","To enter this game, players need to acquire NFT characters with unique skills and arena tickets. Each match has a duration of 3 minutes, with the top 15 players having the opportunity to win lucrative rewards.":"Para entrar neste jogo, os jogadores precisam obter personagens NFT com habilidades únicas e ingressos de arena. A duração de cada jogo é de 3 minutos, e os 15 melhores jogadores têm a chance de ganhar recompensas generosas.","The duration of each game is 3 minutes.":"A duração de cada jogo é de 3 minutos.","The top 15 players have the chance to win generous rewards.":"Os 15 melhores jogadores têm a chance de ganhar recompensas generosas.","NFT Exhibition":"Exposição NFT","Category - Ghost Outlaws, Ghost Animals, Ghost Creatures, Cute Ghosts. All priced at 200 USD equivalent in BTC, ETH, and fixed TOX payment (600 tokens).":"Categoria - Fantasma Morto-vivo, Animais Fantasmas, Criaturas Fantasmas, Fantasmas Bonitos. Todos os preços são equivalentes a $200 em BTC, ETH e pagamentos TOX fixos (600 tokens).","NFT Trading Marketplace":"Mercado de negociação NFT","Ghost Creatures":"Criatura Espectral","Ghost Animals":"Animais fantasmas","Ghost Bandit":"Bandido Fantasma","Cute Ghosts":"Fantasma Bonito","Arena Showcase":"Exposição da Arena","BTC Special Event":"Evento Especial BTC","Unveil the mysteries of Bitcoin, climb to new heights, and seize endless glory! Experience the charm of BTC firsthand and win a victory that belongs to you!":"Descubra o misterioso véu do Bitcoin, suba novas alturas e reclame glória infinita! Experimente o charme do BTC em primeira mão e ganhe sua própria vitória!","ETH Special Event":"Evento Especial ETH","Witness the dazzling brilliance of Ethereum, challenge your limits, and seize the opportunity to claim abundant rewards! Embark on the journey of ETH now and create your own legend!":"Testemunhe a luz deslumbrante do Ethereum, desafie seus limites e aproveite a oportunidade de receber recompensas generosas! Embarque na jornada ETH imediatamente e crie sua própria lenda!","TOX Special Event":"Evento Especial TOX","Infused with unique elements, the TOX special event awaits your participation! Be a pioneer, vie for exclusive rewards, and embark on a brand new TOX adventure!":"O evento especial TOX cheio de elementos únicos aguarda sua participação! Seja um pioneiro, compita por recompensas exclusivas e embarque em uma nova aventura TOX!","Game Guild Showcase":"Exposição da Guilda do Jogo","Investors have the opportunity to collaborate with game guilds. These guilds provide professional players to represent NFT owners in competitions, increasing their chances of winning rewards. Players climb to the pinnacle of wealth and glory through competitions. Investors partnering with guilds can effortlessly gain profits.":"Os investidores têm a oportunidade de colaborar com guildas de jogos. Essas guildas oferecem aos jogadores profissionais a oportunidade de representar os proprietários de NFT em competições e aumentar suas chances de ganhar recompensas. Os jogadores alcançam o auge da riqueza e glória através de competições. Investidores que colaboram com guildas podem facilmente ganhar lucros.","":""}');

/***/ }),

/***/ 70264:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Connect Wallet":"เชื่อมต่อกระเป๋าสตางค์","HOME":"หน้าหลัก","Marketplace":"ตลาด","Games":"เกม","LORE":"ความรู้","AXS":"AXS","News":"ข้อความ","More":"มากกว่า","Welcome to the Ghost War God Arena, where only the strongest can stand undefeated. Are you ready for intense battles?":"ขอต้อนรับเข้าสู่สนาม Ghost Wars Arena ซึ่งมีเพียงผู้แข็งแกร่งเท่านั้นที่จะไร้พ่าย คุณพร้อมหรือยังสำหรับการต่อสู้ที่รุนแรง?","The Road of Strategy":"เส้นทางยุทธศาสตร์","Hone your skills, master strategy, and you will become the ruler.":"ฝึกฝนทักษะ ฝึกฝนกลยุทธ์ แล้วคุณจะเป็นผู้ปกครอง","Journey of the Competition":"ทัวร์นาเมนต์","Every match is an opportunity to march towards glory, every showdown is a step towards conquering the world.":"ทุกการแข่งขันเป็นโอกาสที่จะก้าวไปสู่ความรุ่งโรจน์ และทุกการต่อสู้ที่เด็ดขาดคือก้าวสู่การพิชิตโลก","The Road to the Peak":"เส้นทางสู่จุดสูงสุด","In this game filled with wealth and honor, only you can stand at the pinnacle. Let\'s begin! Fight for glory and fortune.":"ในเกมที่เต็มไปด้วยความมั่งคั่งและเกียรติยศมีเพียงคุณเท่านั้นที่สามารถยืนอยู่บนจุดสูงสุด เริ่มกันเลย! สู้เพื่อเกียรติยศและโชคลาภ","This is an exhilarating blockchain PvP game.":"นี้เป็นที่น่าตื่นเต้นหน่วยความจำบล็อก Chain PvP เกม","This is an exhilarating":"นี้เป็นที่น่าตื่นเต้นหน่วยความจำบล็อก","blockchain PvP game.":"Chain PvP เกม","It provides up to 50 players with the opportunity to engage in real-time battles within the selected arena. Players compete for the supreme position to achieve top rankings and win enticing rewards.":"โดยจะเปิดโอกาสให้ผู้เล่นมากถึง 50 คนได้ทำการต่อสู้แบบเรียลไทม์ภายในสังเวียนที่ทำเครื่องหมายไว้ ผู้เล่นแข่งขันเพื่อชิงตำแหน่งสูงสุดเพื่อให้ได้อันดับสูงสุดและได้รับรางวัลที่น่าสนใจ","Unique Skill Arena: NFT Adventure Journey":"สนามกีฬาผาดโผน: การผจญภัย NFT","Unique Skill Arena:":"สนามกีฬาผาดโผน:","NFT Adventure Journey":"การผจญภัย NFT","To enter this game, players need to acquire NFT characters with unique skills and arena tickets. Each match has a duration of 3 minutes, with the top 15 players having the opportunity to win lucrative rewards.":"ในการเข้าสู่เกมนี้ผู้เล่นจะต้องได้รับตัวละคร NFT ที่มีทักษะเฉพาะตัวและตั๋วลานประลอง โดยแต่ละแมตช์ใช้เวลา 3 นาที,สำหรับผู้เล่น 15 อันดับแรก มีโอกาสลุ้นรางวัลมากมาย","The duration of each game is 3 minutes.":"โดยแต่ละเกมใช้เวลาแข่งขัน 3 นาที","The top 15 players have the chance to win generous rewards.":"ผู้เล่น 15 อันดับแรกมีโอกาสลุ้นรางวัลมากมาย","NFT Exhibition":"นิทรรศการ NFT","Category - Ghost Outlaws, Ghost Animals, Ghost Creatures, Cute Ghosts. All priced at 200 USD equivalent in BTC, ETH, and fixed TOX payment (600 tokens).":"หมวดหมู่ - ผีผี, สัตว์ผี, สัตว์ผี, ผีน่ารัก ราคาทั้งหมดอยู่ใน BTC, ETH และ Fixed TOX Payment (600 Token) เท่ากับ $ 200","NFT Trading Marketplace":"ตลาดเทรด NFT","Ghost Creatures":"สัตว์ผี","Ghost Animals":"สัตว์ผี","Ghost Bandit":"โจรผี","Cute Ghosts":"ผีน่ารัก","Arena Showcase":"อารีน่า ดิสเพลย์","BTC Special Event":"BTC กิจกรรมพิเศษ","Unveil the mysteries of Bitcoin, climb to new heights, and seize endless glory! Experience the charm of BTC firsthand and win a victory that belongs to you!":"ค้นพบความลึกลับของ Bitcoin และปีนขึ้นไปสู่ความสูงใหม่และคว้าเกียรติยศไม่รู้จบ! สัมผัสเสน่ห์ของ BTC ด้วยตัวคุณเองและชนะที่เป็นของคุณ!","ETH Special Event":"กิจกรรมพิเศษ ETH","Witness the dazzling brilliance of Ethereum, challenge your limits, and seize the opportunity to claim abundant rewards! Embark on the journey of ETH now and create your own legend!":"ร่วมเป็นสักขีพยานประกายของ Ethereum ท้าทายขีด จำกัด และคว้าโอกาสในการรับรางวัลมากมาย! เริ่มต้นการเดินทาง ETH วันนี้และสร้างตำนานของคุณเอง!","TOX Special Event":"กิจกรรมพิเศษของ TOX","Infused with unique elements, the TOX special event awaits your participation! Be a pioneer, vie for exclusive rewards, and embark on a brand new TOX adventure!":"กิจกรรมพิเศษของ TOX ที่เต็มไปด้วยองค์ประกอบที่เป็นเอกลักษณ์รอคุณอยู่! ร่วมเป็นผู้บุกเบิกเพื่อชิงรางวัลพิเศษและเริ่มต้นการผจญภัยใหม่ของ TOX!","Game Guild Showcase":"แสดงกิลด์เกม","Investors have the opportunity to collaborate with game guilds. These guilds provide professional players to represent NFT owners in competitions, increasing their chances of winning rewards. Players climb to the pinnacle of wealth and glory through competitions. Investors partnering with guilds can effortlessly gain profits.":"นักลงทุนมีโอกาสร่วมงานกับกิลด์เกม กิลด์เหล่านี้เสนอให้ผู้เล่นมืออาชีพเป็นตัวแทนของเจ้าของ NFT ในการแข่งขันและเพิ่มโอกาสในการได้รับรางวัลของพวกเขา ผู้เล่นก้าวขึ้นสู่จุดสูงสุดของความมั่งคั่งและความรุ่งเรืองผ่านการแข่งขัน นักลงทุนที่ร่วมงานกับกิลด์จะได้รับผลกำไรอย่างง่ายดาย","":""}');

/***/ }),

/***/ 16522:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Connect Wallet":"Cüzdanı bağla","HOME":"ev sayfası","Marketplace":"pazar","Games":"oyun","LORE":"Bilim","AXS":"AXS","News":"haberler","More":"Daha fazla","Welcome to the Ghost War God Arena, where only the strongest can stand undefeated. Are you ready for intense battles?":"Ruh Tanrı Arena\'ya hoş geldiniz. Sadece güçlü olanlar yenmez kalabilir. Acı savaşta katılmaya hazır mısın?","The Road of Strategy":"Stratejik yol","Hone your skills, master strategy, and you will become the ruler.":"Yeteneklerini tatlın, efendi stratejilerini ve sen bir hükümdar olacaksın.","Journey of the Competition":"Competition Tour","Every match is an opportunity to march towards glory, every showdown is a step towards conquering the world.":"Her oyun büyüklüğüne doğru ilerleme fırsatıdır, ve her kararlı savaş dünyayı kazanmaya doğru bir adım.","The Road to the Peak":"The Road to the Peak","In this game filled with wealth and honor, only you can stand at the pinnacle. Let\'s begin! Fight for glory and fortune.":"Bu oyunda zengin ve onurla dolu, sadece üstünde durabilirsin. Başlayalım! Onur ve zengin için savaş.","This is an exhilarating blockchain PvP game.":"Bu heyecanlı bir hafıza blok zinciri PvP oyunu.","This is an exhilarating":"Bu heyecanlı bir hafıza","blockchain PvP game.":"blok zinciri PvP oyunu.","It provides up to 50 players with the opportunity to engage in real-time battles within the selected arena. Players compete for the supreme position to achieve top rankings and win enticing rewards.":"Bu, belirlenmiş alanlarda gerçek zamanlı savaşlara katılmak için 50 oyuncu fırsatı sağlıyor. Oyuncular en yüksek pozisyon için en yüksek derece ulaşmak ve ödülleri tamamlamak için yarışıyorlar.","Unique Skill Arena: NFT Adventure Journey":"Stunt Arena: NFT Macera Yolculuğu","Unique Skill Arena:":"Stunt Arena:","NFT Adventure Journey":"NFT Macera Yolculuğu","To enter this game, players need to acquire NFT characters with unique skills and arena tickets. Each match has a duration of 3 minutes, with the top 15 players having the opportunity to win lucrative rewards.":"Bu oyuna girmek için oyuncuları eşsiz yetenekler ve arena biletleri ile NFT karakterlerini almalılar. Her oyunun uzunluğu 3 dakika ve en üst 15 oyuncusu cömertli ödüllendirme şansı var.","The duration of each game is 3 minutes.":"Her oyunun uzunluğu 3 dakika.","The top 15 players have the chance to win generous rewards.":"En üst 15 oyuncusu cömertli ödülleri kazanma şansı var.","NFT Exhibition":"NFT İzleme","Category - Ghost Outlaws, Ghost Animals, Ghost Creatures, Cute Ghosts. All priced at 200 USD equivalent in BTC, ETH, and fixed TOX payment (600 tokens).":"Category - Ghost Undead, Ghost Animals, Ghost Creatures, Cute Ghosts. Tüm fiyatlar BTC, ETH ve düzenli TOX ödemeleri (600 token) için 200 dolara eşit.","NFT Trading Marketplace":"NFT ticaret pazarı","Ghost Creatures":"Spektral Oluşturucu","Ghost Animals":"Hayalet hayvanları","Ghost Bandit":"Hayalet BandiName","Cute Ghosts":"Cute Ghost","Arena Showcase":"Arena Görüntüsü","BTC Special Event":"BTC Özel Olay","Unveil the mysteries of Bitcoin, climb to new heights, and seize endless glory! Experience the charm of BTC firsthand and win a victory that belongs to you!":"Bitcoin\'in gizemli örtünü kapatın, yeni yükseklere tırmanın ve sonsuz şerefi iddia edin! BTC\'in ilk elini deneyin ve kendi zaferini kazanın!","ETH Special Event":"ETH özel olay","Witness the dazzling brilliance of Ethereum, challenge your limits, and seize the opportunity to claim abundant rewards! Embark on the journey of ETH now and create your own legend!":"Ethereum\'un parlak ışığına tanık olun, sınırlarınızı dövün ve cömertli ödülleri almak için fırsatı alın! ETH yolculuğuna hemen götürün ve kendi efsanesini yaratın!","TOX Special Event":"Özel olay","Infused with unique elements, the TOX special event awaits your participation! Be a pioneer, vie for exclusive rewards, and embark on a brand new TOX adventure!":"TOX özel olay eşsiz elementlerle dolu sizin katılmanızı bekliyor! Piyoner ol, özel ödüller için yarışın ve yeni bir TOX macerasına başla!","Game Guild Showcase":"Oyun Guild Gösterisi","Investors have the opportunity to collaborate with game guilds. These guilds provide professional players to represent NFT owners in competitions, increasing their chances of winning rewards. Players climb to the pinnacle of wealth and glory through competitions. Investors partnering with guilds can effortlessly gain profits.":"Yatırımcıların oyun oyunları ile işbirliği yapabileceği fırsatı var. Bu yönetimler, profesyonel oyuncuları, NFT sahiplerini yarışmalarda temsil etmek ve kazanma şanslarını arttırmak için fırsat sağlıyor. Oyuncular yarışmalar üzerinden zenginlik ve büyüklüğün çevresine ulaşır. Gildlerle işbirliği yapan yatırımcılar zararları çaresiz kazanabilir.","":""}');

/***/ }),

/***/ 80995:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Connect Wallet":"Ví kết nối","HOME":"Trang chủ","Marketplace":"Thị trường","Games":"Trò chơi","LORE":"Kiến thức","AXS":"AXS","News":"Thông điệp","More":"Thêm","Welcome to the Ghost War God Arena, where only the strongest can stand undefeated. Are you ready for intense battles?":"Hoan nghênh đi vào đấu trường Quỷ Chiến Thần, nơi này chỉ có cường giả mới có thể bất bại. Bạn đã sẵn sàng cho một trận chiến khốc liệt?","The Road of Strategy":"Con đường chiến lược","Hone your skills, master strategy, and you will become the ruler.":"Rèn luyện kỹ năng của bạn, làm chủ chiến lược và bạn sẽ trở thành người cai trị.","Journey of the Competition":"Tour du lịch","Every match is an opportunity to march towards glory, every showdown is a step towards conquering the world.":"Mỗi trận đấu là một cơ hội để tiến tới vinh quang và mỗi trận đấu quyết định là một bước để chinh phục thế giới.","The Road to the Peak":"Đường đến Peak","In this game filled with wealth and honor, only you can stand at the pinnacle. Let\'s begin! Fight for glory and fortune.":"Trong trò chơi giàu có và danh dự này, chỉ có bạn mới có thể đứng trên đỉnh. Bắt đầu! Chiến đấu vì danh dự và sự giàu có.","This is an exhilarating blockchain PvP game.":"Đây là một trò chơi PvP blockchain bộ nhớ thú vị","This is an exhilarating":"Đây là một loại phấn khích.","blockchain PvP game.":"Trò chơi PvP blockchain bộ nhớ.","It provides up to 50 players with the opportunity to engage in real-time battles within the selected arena. Players compete for the supreme position to achieve top rankings and win enticing rewards.":"Nó cung cấp cho tối đa 50 người chơi cơ hội chiến đấu trong thời gian thực trong một đấu trường được đánh dấu. Người chơi cạnh tranh cho vị trí cao nhất để có được thứ hạng cao nhất và giành được phần thưởng hấp dẫn.","Unique Skill Arena: NFT Adventure Journey":"Trò chơi trực tuyến: NFT Adventure","Unique Skill Arena:":"Trò chơi trực tuyến:","NFT Adventure Journey":"NFT Adventure","To enter this game, players need to acquire NFT characters with unique skills and arena tickets. Each match has a duration of 3 minutes, with the top 15 players having the opportunity to win lucrative rewards.":"Để tham gia trò chơi này, người chơi cần có được các nhân vật NFT và vé vào đấu trường với các kỹ năng độc đáo. Mỗi trận đấu kéo dài 3 phút và 15 người chơi hàng đầu có cơ hội giành được phần thưởng lớn.","The duration of each game is 3 minutes.":"Mỗi trận đấu kéo dài 3 phút.","The top 15 players have the chance to win generous rewards.":"15 người chơi hàng đầu có cơ hội giành được phần thưởng lớn.","NFT Exhibition":"Triển lãm NFT","Category - Ghost Outlaws, Ghost Animals, Ghost Creatures, Cute Ghosts. All priced at 200 USD equivalent in BTC, ETH, and fixed TOX payment (600 tokens).":"Thể loại - Hồn ma, Động vật ma, Sinh vật ma, Bóng ma dễ thương. Tất cả các khoản thanh toán BTC, ETH và TOX cố định (600 token) với giá tương đương 200 USD.","NFT Trading Marketplace":"Thị trường giao dịch NFT","Ghost Creatures":"Sinh vật ma","Ghost Animals":"Động vật ma","Ghost Bandit":"Băng đảng ma","Cute Ghosts":"Bóng ma dễ thương","Arena Showcase":"Hiển thị Arena","BTC Special Event":"Sự kiện đặc biệt BTC","Unveil the mysteries of Bitcoin, climb to new heights, and seize endless glory! Experience the charm of BTC firsthand and win a victory that belongs to you!":"Khám phá những bí ẩn của Bitcoin và leo lên những tầm cao mới để giành lấy vinh quang vô tận! Trải nghiệm sự quyến rũ của BTC và giành chiến thắng thuộc về bạn!","ETH Special Event":"Sự kiện đặc biệt ETH","Witness the dazzling brilliance of Ethereum, challenge your limits, and seize the opportunity to claim abundant rewards! Embark on the journey of ETH now and create your own legend!":"Chứng kiến ánh sáng rực rỡ của Ethereum, thách thức giới hạn và nắm bắt cơ hội để nhận phần thưởng lớn! Bắt tay vào hành trình ETH ngay bây giờ và tạo ra huyền thoại của riêng bạn!","TOX Special Event":"TOX Sự kiện đặc biệt","Infused with unique elements, the TOX special event awaits your participation! Be a pioneer, vie for exclusive rewards, and embark on a brand new TOX adventure!":"Sự kiện đặc biệt của TOX với đầy đủ các yếu tố độc đáo đang chờ bạn tham gia! Trở thành người tiên phong, cạnh tranh cho phần thưởng độc quyền và bắt đầu một cuộc phiêu lưu TOX hoàn toàn mới!","Game Guild Showcase":"Giới thiệu game Guild","Investors have the opportunity to collaborate with game guilds. These guilds provide professional players to represent NFT owners in competitions, increasing their chances of winning rewards. Players climb to the pinnacle of wealth and glory through competitions. Investors partnering with guilds can effortlessly gain profits.":"Các nhà đầu tư có cơ hội hợp tác với guild game. Các guild này cung cấp cho người chơi chuyên nghiệp đại diện cho các chủ sở hữu NFT trong các giải đấu, thêm cơ hội giành phần thưởng của họ. Người chơi đạt đến đỉnh cao của sự giàu có và vinh quang thông qua các trò chơi. Các nhà đầu tư làm việc với guild có thể kiếm được lợi nhuận mà không gặp khó khăn.","":""}');

/***/ }),

/***/ 96361:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Connect Wallet":"连接钱包","HOME":"首页","Marketplace":"市场","Games":"游戏","LORE":"知识","AXS":"AXS","News":"消息","More":"更多的","Welcome to the Ghost War God Arena, where only the strongest can stand undefeated. Are you ready for intense battles?":"欢迎来到鬼战神竞技场，这里只有强者才能不败。你准备好参加激烈的战斗了吗？","The Road of Strategy":"战略之路","Hone your skills, master strategy, and you will become the ruler.":"磨练你的技能，掌握策略，你就会成为统治者。","Journey of the Competition":"比赛之旅","Every match is an opportunity to march towards glory, every showdown is a step towards conquering the world.":"每一场比赛都是迈向辉煌的机会，每一场决战都是征服世界的一步。","The Road to the Peak":"顶峰之路","In this game filled with wealth and honor, only you can stand at the pinnacle. Let\'s begin! Fight for glory and fortune.":"在这个充满财富和荣誉的游戏中，只有你才能站在顶峰。开始吧！为荣誉和财富而战。","This is an exhilarating blockchain PvP game.":"这是一款令人振奋的区块链PvP游戏","This is an exhilarating":"这是一款令人振奋的","blockchain PvP game.":"区块链PvP游戏。","It provides up to 50 players with the opportunity to engage in real-time battles within the selected arena. Players compete for the supreme position to achieve top rankings and win enticing rewards.":"它为多达50名玩家提供了在选定竞技场内进行实时战斗的机会。玩家争夺最高位置以获得最高排名并赢得诱人的奖励。","Unique Skill Arena: NFT Adventure Journey":"绝技竞技场：NFT冒险之旅","Unique Skill Arena:":"绝技竞技场：","NFT Adventure Journey":"NFT冒险之旅","To enter this game, players need to acquire NFT characters with unique skills and arena tickets. Each match has a duration of 3 minutes, with the top 15 players having the opportunity to win lucrative rewards.":"要进入这个游戏，玩家需要获得具有独特技能的NFT角色和竞技场门票。每场比赛持续时间为3分钟，前15名选手有机会赢得丰厚的奖励。","The duration of each game is 3 minutes.":"每场比赛持续时间为3分钟。","The top 15 players have the chance to win generous rewards.":"排名前15的玩家有机会赢得丰厚的奖励。","NFT Exhibition":"NFT展览","Category - Ghost Outlaws, Ghost Animals, Ghost Creatures, Cute Ghosts. All priced at 200 USD equivalent in BTC, ETH, and fixed TOX payment (600 tokens).":"类别-鬼亡魂，鬼动物，鬼生物，可爱的鬼。所有价格均为200美元等值的BTC、ETH和固定TOX支付（600代币）。","NFT Trading Marketplace":"NFT交易市场","Ghost Creatures":"幽灵生物","Ghost Animals":"幽灵动物","Ghost Bandit":"幽灵匪徒","Cute Ghosts":"可爱幽灵","Arena Showcase":"竞技场展示","BTC Special Event":"BTC特别活动","Unveil the mysteries of Bitcoin, climb to new heights, and seize endless glory! Experience the charm of BTC firsthand and win a victory that belongs to you!":"揭开比特币的神秘面纱，攀登新的高度，夺取无尽的荣耀！亲身体验BTC的魅力，赢得属于你的胜利！","ETH Special Event":"ETH特别活动","Witness the dazzling brilliance of Ethereum, challenge your limits, and seize the opportunity to claim abundant rewards! Embark on the journey of ETH now and create your own legend!":"见证以太坊耀眼的光芒，挑战极限，抓住机会领取丰厚奖励！立即踏上ETH之旅，创造属于自己的传奇！","TOX Special Event":"TOX特别活动","Infused with unique elements, the TOX special event awaits your participation! Be a pioneer, vie for exclusive rewards, and embark on a brand new TOX adventure!":"充满独特元素的TOX特别活动恭候您的参与！成为先锋，争夺独家奖励，开始全新的TOX冒险！","Game Guild Showcase":"游戏公会展示","Investors have the opportunity to collaborate with game guilds. These guilds provide professional players to represent NFT owners in competitions, increasing their chances of winning rewards. Players climb to the pinnacle of wealth and glory through competitions. Investors partnering with guilds can effortlessly gain profits.":"投资者有机会与游戏公会合作。这些公会提供职业玩家在比赛中代表NFT所有者，增加他们赢得奖励的机会。玩家们通过比赛登上财富和荣耀的顶峰。与公会合作的投资者可以毫不费力地获得利润。","":""}');

/***/ }),

/***/ 43600:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Connect Wallet":"連接錢包","HOME":"首頁","Marketplace":"交易市場","Games":"遊戲","Mystery Hatch":"神秘孵化","WhitePaper":"白皮書","LORE":"知識","AXS":"AXS","News":"消息","More":"更多","Enter the Phantom Arena: 3 minutes, 50 players, endless excitement. Choose your creature, embrace the chaos. Win or lose, glory and rewards await!":"踏入幽靈競技場：3分鐘，50名玩家，無盡的刺激。選擇你的身份，擁抱混亂。無論勝敗，榮耀和獎勵都等著你！","The Road of Strategy":"戰略之路","The Road of":"The Road of","Strategy":"Strategy","Hone your skills, master strategy, and you will become the ruler.":"鍛煉你的技能，掌握戰略，你將成為統治者。","Journey of the Competition":"競技之旅","Journey of the":"Journey of the","Competition":"Competition","Every match is an opportunity to march towards glory, every showdown is a step towards conquering the world.":"每場比賽都是邁向榮耀的機會，每次對決都是征服世界的一步。","The Road to the Peak":"登峰之路","The Road to":"The Road to","the Peak":"the Peak","In this game filled with wealth and honor, only you can stand at the pinnacle. Let\'s begin! Fight for glory and fortune.":"在這個充满财富和榮譽的遊戲中，只有你能夠屹立於巔峰。讓我們開始吧！為榮耀和財富而戰。","This is an exhilarating blockchain PvP game.":"這是一款激動人心的區塊鏈PvP遊戲。","This is an exhilarating":"這是一款令人振奮的","blockchain PvP game.":"區塊鏈PvP遊戲。","It provides up to 50 players with the opportunity to engage in real-time battles within the selected arena. Players compete for the supreme position to achieve top rankings and win enticing rewards.":"它為高達50名玩家提供了在所選競技場內進行實時戰鬥的機會。玩家們爭奪至高無上的地位，以達到頂級排名並贏取誘人的獎勵。","Step into Phantom Arena: Experience the Thrill in Just 3 Minutes! Win or lose, great prizes await. Start your journey now and let the excitement take over!":"踏入幽靈競技場：只需3分鐘體驗刺激！ 無論輸贏，都有豐厚獎品等著你。 立即開始你的旅程，讓激情驅使你前行！","Unique Skill Arena: NFT Adventure Journey":"獨特技能競技場：NFT冒險之旅","Unique Skill Arena:":"絕技競技場：","NFT Adventure Journey":"NFT冒險之旅","To enter this game, players need to acquire NFT characters with unique skills and arena tickets. Each match has a duration of 3 minutes, with the top 15 players having the opportunity to win lucrative rewards.":"進入此遊戲，玩家需要擁有具有獨特技能的NFT角色和競技場門票。每場比賽持續3分鐘，前15名玩家有機會贏得豐厚的獎勵。","The duration of each game is 3 minutes.":"每場比賽持續時間3分鐘。","The top 15 players have the chance to win generous rewards.":"前15名玩家有機會贏得豐厚的獎勵。","There are 3 different arenas, each offering a unique Major Coin as a reward.":"有3個不同的競技場，每個競技場都提供一種獨特的主要代幣作為獎勵。","A maximum of 50 players can participate in the battle.":"最多可以有50名玩家參與戰鬥。","Losing players will be rewarded with Power-up NFTs to increase their odds of winning the next game.":"失敗的玩家將獲得強化NFT作為獎勵，提高他們在下一場比賽中獲勝的機會。","NFT Exhibition":"NFT展覽","Welcome to Phase 1 of our exclusive NFT collection, featuring four distinct species: Spiros, Tauros, Baddos, and Dinoo Clan. Each clan is represented by six unique NFTs.":"歡迎來到我們獨家NFT系列的第一階段，包括四類獨特的物種族群：Spiros、Tauros、Baddos 和 Dinoo Clan。每類物種族群由六個獨特的NFT代表。","All NFTs in the presale are priced at $200 USD, payable in BTC, ETH, or TOX. For detailed purchasing information, please reach out to our authorized distributors.":"預售中的所有NFT定價為200美元，以BTC、ETH、TOX支付。有關詳細的購買信息，請聯繫我們的授權經銷商。","Don\'t miss out on this unique opportunity to own a piece of digital art from these captivating clans!":"不要錯失這個絕佳的機會，收藏一件源自這些引人入勝的族群的數字藝術品！","Category - Ghost Outlaws, Ghost Animals, Ghost Creatures, Cute Ghosts. All priced at 200 USD equivalent in BTC, ETH, and fixed TOX payment (600 tokens).":"類別-鬼亡魂，鬼動物，鬼生物，可愛的鬼。 所有價格均為200美元等值的BTC、ETH和固定TOX支付（600代幣）。","NFT Trading Marketplace":"NFT交易市場","Ghost Creatures":"幽靈生物","Ghost Animals":"幽靈動物","Ghost Bandit":"幽靈匪徒","Cute Ghosts":"可愛幽靈","Arena Showcase":"競技場展示","BTC Special Event":"BTC特別活動","Unveil the mysteries of Bitcoin, climb to new heights, and seize endless glory! Experience the charm of BTC firsthand and win a victory that belongs to you!":"揭開比特幣的神秘面紗，攀登新的巔峰，奪取無盡的榮耀！親身體驗BTC的魅力，贏得屬於您的勝利！","ETH Special Event":"ETH特別活動","Witness the dazzling brilliance of Ethereum, challenge your limits, and seize the opportunity to claim abundant rewards! Embark on the journey of ETH now and create your own legend!":"見證以太坊的耀眼光芒，挑戰極限，抓住機會獲得豐厚的獎勵！立即開啟ETH之旅，創造屬於您自己的傳奇！","TOX Special Event":"TOX特別活動","Infused with unique elements, the TOX special event awaits your participation! Be a pioneer, vie for exclusive rewards, and embark on a brand new TOX adventure!":"融合獨特元素的TOX特別活動等待您的參與！成為先驅，爭取獨家獎勵，開啟嶄新的TOX冒險！","Game Guild Showcase":"遊戲公會展示","Investors have the opportunity to collaborate with game guilds. These guilds provide professional players to represent NFT owners in competitions, increasing their chances of winning rewards. Players climb to the pinnacle of wealth and glory through competitions. Investors partnering with guilds can effortlessly gain profits.":"投資者有機會與遊戲公會合作。這些公會提供職業玩家代表NFT擁有者參加比賽，增加他們贏取獎勵的機會。玩家通過比賽攀升到財富和榮耀的巔峰。投資者透過與公會的合作，輕鬆獲得豐厚的回報。","Fierce Battle: Clash of Power":"激烈戰鬥：力量之爭","Phantom Egg":"幽靈蛋","Ready to unveil the mystery? Click the \'Mystery Hatch\' button to mint your NFT! Each purchase comes in the form of a digital egg, containing a surprise waiting to be revealed. The species and characteristics of your NFT will remain a secret until the egg hatches. Experience the thrill of discovery as you hatch your unique digital asset from one of our four clans: Spiros, Tauros, Baddos, or Dinoo. What will your egg reveal?":"準備揭開神秘面紗了嗎？ 點擊“神秘孵化”按鈕來鑄造您的NFT！ 每次購買都以數位蛋的形式呈現，裡麵包含一個等待揭曉的驚喜。 您的NFT的物種和特徵將保持秘密，直到蛋孵化為止。 在四個家族中的一個中，體驗發現的刺激：Spiros、Tauros、Baddos、或Dinoo、。 您的蛋會揭示出什麼呢？","Remaining Time":"剩餘時間","Blind Box Rules":"盲盒規格","Holding the official authorized TGG guild license allows for collection.":"擁有官方授權的 TGG 公會牌照者可領取。","Ghost War God Arena Mystery Eggs":"幽靈戰神競技場彩蛋。","The price for one batch of 3,000 mystery eggs is 200 USDT.":"第一期 3,000 個，售價為 200 美元。","The price for the second batch of 2,000 mystery eggs is 300 USDT.":"第二期 2,000 個，售價為 300 美元。","The price for the third batch of 2,000 mystery eggs is 400 USDT.":"第三期 2,000 個，售價為 400 美元。","The price for fourth batch of 2,000 mystery eggs is 600 USDT.":"第四期 2,000 個，售價為 600 美元。","The price for five batch of 1,000 mystery eggs is 800 USDT.":"第五期 1,000 個，售價為 800 美元。","Choose your phantom egg":"選擇你的幽靈蛋","Mystery Hatch egg":"孵化幽靈蛋","Supporting Partners":"戰略合作","Balance：":"餘額：","Approve":"授权","Payment":"支付方式","Number":"數量","Input ID":"輸入ID","Input mint quantity":"輸入鑄造數量","Together you breed heroes":"您共孵化英雄","Operations Team":"运营团队","Alan":"Alan","CEO Co-founder":"CEO联合创始人","CSO of INTOverse":"INTOverse首席战略官","TikTok-authorized MCN Agency Leader":"TikTok授权MCN机构领袖","Former COO of leading GameFi Axie":"曾担任头部GameFiAxie COO","John Rose":"John Rose","Graduated from Stanford University":"毕业于斯坦福大学","CMO":"首席营销官","Leading GameFi Core Team":"头部GameFi核心团队","Rein Ceren":"Rein Ceren","CSPO":"首席战略合作伙伴","Ambassador for Overseas Market Promotion":"海外市场推广大使","GameFi Digital Marketing Expert":"GameFi数字营销专家","Vance":"Vance","CTO of Phantom Arena":"Phantom Arena首席CTO","Graduated from the Computer Science Department at Stanford University":"毕业于斯坦福计算机系","Proficient in advanced Java programming language":"精通Java高级语言编程","Currently serving as a top global gaming technology consultant":"目前担任全球头部游戏技术顾问","My invitation link":"我的邀请链接","Copy":"复制","Ended":"已結束","10,000 NFTs have ended.":"10000只NFT已結束","The NFT price in the game store is 600 USDT.":"遊戲商店NFT價格600USDT","Coming soon":"即將到來","":""}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkdronelink"] = self["webpackChunkdronelink"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [338], () => (__webpack_require__(54789)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;