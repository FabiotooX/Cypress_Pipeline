pipeline {
    agent any
    
    tools {
        nodejs "Node"  // Cambiado al nombre correcto configurado en Jenkins Tools
    }
    
    stages {
        stage("Cypress Parallel Test Suite - Agent 1") {  // Nombre único
            agent {
                label "Agent2_1"
            }
            steps {
                git url: "https://github.com/FabiotooX/Cypress_Pipeline.git"
                sh "npm ci"  // Cambiado de 'bat' a 'sh' porque estás en Linux
                sh "npx cypress install"
                sh "xvfb-run --auto-servernum npx cypress run --record --key 4d847da1-5103-4552-a3c7-357578e85136 --parallel"
            }
        }

        stage("Cypress Parallel Test Suite - Agent 2") {  // Nombre único
            agent {
                label "Agent2_2"
            }
            steps {
                git url: "https://github.com/FabiotooX/Cypress_Pipeline.git"
                sh "npm ci"  // Cambiado de 'bat' a 'sh' porque estás en Linux
                sh "npx cypress install"
                sh "xvfb-run --auto-servernum npx cypress run --record --key 4d847da1-5103-4552-a3c7-357578e85136 --parallel"
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