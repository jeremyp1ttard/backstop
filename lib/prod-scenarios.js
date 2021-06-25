// TODO populate array dynamically
const cartClick = require("../scenarios/inte/cart-click");
const about = require("../scenarios/prod/about");
const carFinance = require("../scenarios/prod/car-finance");
const contact = require("../scenarios/prod/contact");
const help = require("../scenarios/prod/help");
const homepage = require("../scenarios/prod/homepage");
const loans = require("../scenarios/prod/loans");
const locations = require("../scenarios/prod/locations");
const myLoans = require("../scenarios/prod/my-loans");
const pawnbroking = require("../scenarios/prod/pawnbroking");
const personalLoans = require("../scenarios/prod/personal-loans");
const personalLoansCampaign = require("../scenarios/prod/personal-loans-campaign");
const shop = require("../scenarios/prod/shop");

module.exports = [
  homepage,
  about,
  carFinance,
  contact,
  help,
  loans,
  locations,
  myLoans,
  pawnbroking,
  personalLoansCampaign,
  personalLoans,
  shop,
  cartClick
];
