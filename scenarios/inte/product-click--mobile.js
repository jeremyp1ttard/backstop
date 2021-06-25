module.exports = {
    label: "Inte Product Click Mobile",
    url: "https://inte.cashconverters.com.au/c3api/product/lookup?barcode=010800000040",
    referenceUrl: "",
    readyEvent: "",
    readySelector: "",
    delay: 0,
    hideSelectors: [],
    removeSelectors: [],
    hoverSelector: "",
    clickSelector: ".toolbar .toolbar__buy .btn--add-to-cart", //wont work if less specific...
    postInteractionWait: 1000,
    selectors: [],
    selectorExpansion: true,
    expect: 0,
    misMatchThreshold: 0.1,
    requireSameDimensions: true,
    viewports: [
      {
        "label": "phone",
        "width": 320,
        "height": 480
      },
    ]
  };
  