"use strict";
exports.id = 539;
exports.ids = [539];
exports.modules = {

/***/ 7539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ip": () => (/* binding */ waterCommand),
/* harmony export */   "OG": () => (/* binding */ createDiary),
/* harmony export */   "Pf": () => (/* binding */ getFlowersList),
/* harmony export */   "QA": () => (/* binding */ getMyStatus),
/* harmony export */   "al": () => (/* binding */ getGardens),
/* harmony export */   "jX": () => (/* binding */ getDiary),
/* harmony export */   "kY": () => (/* binding */ getGarden),
/* harmony export */   "rC": () => (/* binding */ goToHome),
/* harmony export */   "xl": () => (/* binding */ getFlowerDetail)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

// const BASE_URL = `${process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8000/api/v1' : 'http://www.smart-gardening.kro.kr:8000'}`;
const BASE_URL = `${ false ? 0 : "http://www.smart-gardening.kro.kr:8000/api/v1"}`;
function getFlowersList(word) {
    if (word) {
        return fetch(`${BASE_URL}/flowers/?word=${word}`).then((response)=>response.json()
        );
    }
    return fetch(`${BASE_URL}/flowers`).then((response)=>response.json()
    );
}
function getFlowerDetail(id) {
    return fetch(`${BASE_URL}/flowers/${id}`).then((response)=>response.json()
    );
}
function getMyStatus() {
    return fetch(`${BASE_URL}/core/1`).then((response)=>response.json()
    );
}
function getGardens() {
    return fetch(`${BASE_URL}/gardens`).then((response)=>response.json()
    );
}
function getGarden(id) {
    return fetch(`${BASE_URL}/gardens/${id}`).then((response)=>response.json()
    );
}
function getDiary(id) {
    return fetch(`${BASE_URL}/gardens/${id}/diary`).then((response)=>response.json()
    );
}
function createDiary(id, diaryForm) {
    axios__WEBPACK_IMPORTED_MODULE_0___default().postForm(`${BASE_URL}/gardens/${id}/diary/create`, diaryForm, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then((response)=>response
    );
}
async function waterCommand(id, command) {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${BASE_URL}/core/1/command/`, command, {
        headers: {
            "Content-Type": "application/json"
        }
    });
}
async function goToHome(command) {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${BASE_URL}/core/1/command/`, command, {
        headers: {
            "Content-Type": "application/json"
        }
    });
}


/***/ })

};
;