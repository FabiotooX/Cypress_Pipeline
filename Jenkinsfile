pipeline {
    agent any
    
    tools {
        nodejs "NodeJS 22.10.0"
    }
    
    stages {
        stage("Cypress Parallel Test Suite") {
            agent {
                label "Agent2_1"
            }
            steps {
                git url: "https://github.com/FabiotooX/Cypress_Pipeline.git"
                bat "npm install"
                bat "npm update"
                bat "npx cypress run cypress run --record --key 4d847da1-5103-4552-a3c7-357578e85136 --parallel"
            }
        }

        stage("Cypress Parallel Test Suite") {
            agent {
                label "Agent2_2"
            }
            steps {
                git url: "https://github.com/FabiotooX/Cypress_Pipeline.git"
                bat "npm install"
                bat "npm update"
                bat "npx cypress run cypress run --record --key 4d847da1-5103-4552-a3c7-357578e85136 --parallel"
            }
        }
    }
}