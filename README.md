# 🏞️ lwc-mashup

Welcome to the National Parks Data mashup app showing the use of open source Lightning Web Components running outside of Salesforce.

This was demod at the Salesforce TDX '19 conference during the launch of open source Lightning Web Components. Find out more at https://lwc.dev.

## 🗒 Instructions

### 🔎 Setup lwc-search-box

-   `git clone https://github.com/kevinv11n/lwc-search-box && cd lwc-search-box`
-   `yarn && yarn build`
-   `yarn link` because we're not publishing the npm package
-   `cd ..`

### 🗃️ Setup lwc-mashup

-   `git clone https://github.com/kevinv11n/lwc-mashup && cd lwc-mashup`
-   `yarn link lwc-search-box` to link the local lwc-search-box
-   `yarn` to install the rest of the dependencies
-   `yarn serve` to start the server
-   Visit http://localhost:3000
