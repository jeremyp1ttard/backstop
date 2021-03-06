module.exports = {
    label: "Inte Product Click",
    url: "https://inte.cashconverters.com.au/c3api/product/lookup?barcode=010800000040",
    referenceUrl: "",
    readyEvent: "",
    readySelector: "",
    delay: 0,
    hideSelectors: [],
    removeSelectors: [],
    hoverSelector: "",
    clickSelector: ".btn--add-to-cart", //wont work if less specific...
    postInteractionWait: 1000,
    selectors: [],
    selectorExpansion: true,
    expect: 0,
    misMatchThreshold: 0.1,
    requireSameDimensions: true,
    viewports: [ //phone errors out obn click
        {
          "label": "tablet",
          "width": 1024,
          "height": 768
        },
        {
          "label": "desktop",
          "width": 1920,
          "height": 1080
        }
      ]
  };
  