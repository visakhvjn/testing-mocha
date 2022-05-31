# Mocha

Mocha is the best tool for unit testing. The `test` folder has the set of `test cases` and each test case or file has `tests` inside them. 

## Install 

Install mocha using `npm run -g mocha chai`
`mocha` is the tool to run test cases
`chai` is used for assertions or verifying.

## Running

The package.json is not modified initially. Add the `test` script and run `npm run test` to run all the test cases.

## CI

The project also has integration with CircleCI using the `.circleci/config.yml` file to run on every pull request.