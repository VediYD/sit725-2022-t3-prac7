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

## Resources Referred

1. https://docs.npmjs.com/cli/v9/configuring-npm/package-json
2. https://stackoverflow.com/questions/35995273/how-to-run-html-file-using-node-js
3. https://expressjs.com/en/guide/using-middleware.html
4. https://www.educative.io/answers/how-to-chain-middlewares-in-expressjs
5. https://masteringjs.io/tutorials/express/express-json
6. https://stackoverflow.com/questions/9870523/what-are-the-differences-between-application-json-and-application-x-www-form-url
