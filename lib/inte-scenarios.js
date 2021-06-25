// TODO populate array dynamically
const homepage = require('../scenarios/inte/homepage')
const UKhomepage = require('../scenarios/inte/UK-homepage')
const cashLoans = require('../scenarios/inte/cash-loans')
const payments = require('../scenarios/inte/payments')
const shop = require('../scenarios/inte/shop')
const storeListing = require('../scenarios/inte/store-listing')
const product = require('../scenarios/inte/product')
const productClick = require('../scenarios/inte/product-click')
const productClickMobile = require('../scenarios/inte/product-click--mobile')
module.exports = [
homepage,
cashLoans,
payments,
shop,
storeListing,
product,
productClickMobile,
productClick,
UKhomepage
];
