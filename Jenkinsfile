pipeline {
    agent any
    
    tools {
        nodejs "Node"
    }
    
    stages {
        stage("Install Dependencies") {
            steps {
                git url: "https://github.com/FabiotooX/Cypress_Pipeline.git"
                sh "npm ci"
                sh "npx cypress install"
            }
        }
        
        stage("Cypress Parallel Tests") {
            steps {
                parallel(
                    "Test Group 1": {
                        sh "xvfb-run --auto-servernum npx cypress run --record --key 4d847da1-5103-4552-a3c7-357578e85136 --parallel"
                    },
                    "Test Group 2": {
                        sh "xvfb-run --auto-servernum npx cypress run --record --key 4d847da1-5103-4552-a3c7-357578e85136 --parallel"
                    }
                )
            }
        }
    }
    
    post {
        always {
            echo 'Tests completed'
        }
        success {
            echo 'All parallel tests passed!'
        }
        failure {
            echo 'Some tests failed!'
        }
    }
}