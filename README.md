## About

Hi! I have used this markdown to record the steps taken to complete the task. I'll keep updating this markdown to summarize what I have done for each week.

## Steps taken

### Week 1

1. Initialized `https://github.com/VediYD/sit725-2022-t3-prac1`.<br>Repository link: [sit725-2022-t3-prac1](https://github.com/VediYD/sit725-2022-t3-prac1)
2. Created the `LICENSE` file and the `README.md` file.
3. Cloned the project using `git clone https://github.com/VediYD/sit725-2022-t3-prac1.git` on local system.
4. Opened project in VSCode.
5. Created folder `./js`.
6. Initialized `./js/scripts.js`
7. Created folder `./css`
8. Initialized `./css/style.css`
9. Initialized `./index.html`
10. Updated `./index.html` code. Formatted the html using Prettier(extension) using key `lshift` + `lalt` + `f`. Tested by launching Live Server(extension).
11. Updated `./js/scripts.js`. Tested it.
12. Pushed commits to the remote repository.

Note: _I have used git-cli commands to commit and update specific files. And also for cloning and pushing operations_.

### Week 2

1. Initialized `https://github.com/VediYD/sit725-2022-t3-prac2`.<br>Repository link: [sit725-2022-t3-prac2](https://github.com/VediYD/sit725-2022-t3-prac2)
2. Copied over code from [sit725-2022-t3-prac1](https://github.com/VediYD/sit725-2022-t3-prac1) into new repository.
3. Cloned project to local system.
4. Opened terminal in root dir and ran command `npm init`. The following details were entered for the corresponding prompts. Creating the `./package.json` file.<br>
   |#|Prompt |Response |
   |-|--------------|-------------------------------------------------------------|
   |1|package name | (js) sit725-prac2-package |
   |2|version | (1.0.0) |
   |3|description | Main package created for submission towards sit725 task P2. |
   |4|entry point | (server.js) |
   |5|test command | node server.js |
   |6|git repository| https://github.com/VediYD/sit725-2022-t3-prac2 |
   |7|keywords | express, node, calculator, rest, api |
   |8|author | vedi.yash@gmail.com |
   |9|license | (ISC) MIT |
5. Executed `npn install express --save`
6. Created `./public/index.html`, `./js/math.js`
7. Updated `./server.js`, `./public/index.html`, `./js/math.js`
8. Open `./package.json`:
   > under "scripts", added: `"start": "node server.js"` <br>
9. Check working: terminal > `npm start`
10. Commit & Push

### Week 3

1. Initialized `https://github.com/VediYD/sit725-2022-t3-prac3`.<br>Repository link: [sit725-2022-t3-prac3](https://github.com/VediYD/sit725-2022-t3-prac3)
2. Imported code from the previous repository: [sit725-2022-t3-prac2](https://github.com/VediYD/sit725-2022-t3-prac2)
3. Cloned repository to local system.
4. Updated `./package.json`.
5. Moved `./js` to `./public/js` & `./css` to `./public/css`
6. Made changes as per the prac3 instructions.
7. Integrated particlejs into the project. In file: `./public/js/particle.js`
8. Added additional components and made multiple modificiations to the `./public/css/style.css`
9. Checked working.
10. Commit & Push

### Week 4

1. Created new project: [sit725-2022-t3-prac4](https://github.com/VediYD/sit725-2022-t3-prac4). Imported project files from [sit725-2022-t3-prac3](https://github.com/VediYD/sit725-2022-t3-prac3). Cloned repo to local system.
2. Update `package.json`, `package-lock.json`
3. Exporting `cardList` from scripts. Importing `cardList` from `scripts.js`. Created `/api/projects` endpoint to return `cardList`.
4.

## Resources Referred

### W2

1. https://docs.npmjs.com/cli/v9/configuring-npm/package-json
2. https://stackoverflow.com/questions/35995273/how-to-run-html-file-using-node-js
3. https://expressjs.com/en/guide/using-middleware.html
4. https://www.educative.io/answers/how-to-chain-middlewares-in-expressjs
5. https://masteringjs.io/tutorials/express/express-json
6. https://stackoverflow.com/questions/9870523/what-are-the-differences-between-application-json-and-application-x-www-form-url

### W3

1. https://in.pinterest.com/pin/861524603694278242/
2. https://materializecss.com/navbar.html
3. https://stackoverflow.com/questions/44110568/an-empty-grid-column-in-html-css
4. https://stackoverflow.com/questions/44325923/how-to-remove-double-scroll-bar
5. https://stackoverflow.com/questions/46728348/adding-searchbar-in-a-navbar
6. https://stackoverflow.com/questions/39070028/mysterious-white-space-at-bottom-of-web-page-in-mobile-chrome
7. https://stackoverflow.com/questions/35552708/is-materialize-navbar-height-adjustment-possible
8. https://stackoverflow.com/questions/43346795/css-how-to-remove-leftright-border-of-a-row-in-the-table
9. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
10. https://stackoverflow.com/questions/51208498/how-to-add-particle-js-as-a-div-background-in-bootstrap
11. https://stackoverflow.com/questions/6794000/fixed-position-but-relative-to-container
12. https://stackoverflow.com/questions/32928618/element-hidden-behind-other-elements
