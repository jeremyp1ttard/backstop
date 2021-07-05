// TODO populate array dynamically
const inteHomepage = require('../scenarios/inte/homepage')
const UKhomepage = require('../scenarios/inte/UK-homepage')
const cashLoans = require('../scenarios/inte/cash-loans')
const payments = require('../scenarios/inte/payments')
const shop = require('../scenarios/inte/shop')
const storeListing = require('../scenarios/inte/store-listing')
const product = require('../scenarios/inte/product')
const productClick = require('../scenarios/inte/product-click')
const productClickMobile = require('../scenarios/inte/product-click--mobile')
const UKHomepageWithCookies = require('../scenarios/inte/UK-homepage-with-cookies')
module.exports = [
inteHomepage,
cashLoans,
payments,
shop,
storeListing,
product,
productClickMobile,
productClick,
UKhomepage,
UKHomepageWithCookies
];
