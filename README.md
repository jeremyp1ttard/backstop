# Cashies Visual Regression Testing

Visual Regression testing for the cashies sites using backstop.js

## Installation

clone repository, cd /repository

```node
npm i 
```

## Usage

```node
npm start # tests prod against pages listed in backstop.prod.config
npm run test-prod # as above
npm run test-inte # tests inte against pages listen in backstop.inte.config
npm run approve-prod # approves test in prod
npm run approve-inte #approves test in inte
```

## Modifying and adding tests
follow instructions in the [docs here] to add or modify any of the configs. JS objects have been used so that this can be built upon easier and split out for clairty. 


## TODO
- GUI 🤞
- expand upon tests
- automatically include scenarios to their config
- build a node lighthouse scorecheck tool that runs simultaneously to this
- consider adding to deploy workflow in TC


Please make sure to update tests as appropriate.



[docs here]: https://github.com/garris/BackstopJS