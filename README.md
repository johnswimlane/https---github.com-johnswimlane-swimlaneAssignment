# Swimlane Assignment

## Docker configuration
- Install Docker Desktop:
https://www.docker.com/products/docker-desktop
- Installer docker-compose:
https://docs.docker.com/compose/install/
- Download the practical docker-compose file:
https://github.com/swimlane/qa-infrastructure-engineer-practical/blob/main/docker-compose.yaml

- Once you have Docker Desktop and docker-compose installed you can run docker-compose up in the directory that the practical 
docker-compose file is in and it will launch containers for the practical application and MongoDB.
- The application will be accessible at http://localhost:3000.

## Description of the test
1. Create a user.
2. Log in as the user you created.
3. Create a record and specify the title, body, and tags for the record.
4. Verify the record was created successfully.
5. Verify the profile tab shows the user’s name.
6. Logout button successfully logs the user out

## Two methods to run the test
- node_modules\.bin\cypress run --headed --browser chrome  --spec "cypress/integration/swimlaneTest.js" 
- node_modules\.bin\cypress open and select the swimlaneTest.js


## Tested with 
|Product                       |Version|
| ---------------------------- | ------------- |
|Cypress package               |8.7.0|
|Cypress binary                |8.7.0|
|Bundled Node                  |14.17.0|
|Visual Studio Code for windows|1.62.1|
|Chrome                        |95.0.4638.69 (Official Build) (64-bit)|
