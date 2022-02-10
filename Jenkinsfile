pipeline {
    agent any

    stages {
        stage('Pull') {
            steps {
                git([url:'https://github.com/LouHeople/DataEngineeringNodeJS.git', branch:'dev'])
            }
        } 
        stage('Build') {
            steps {
                bat 'docker-compose up'
                bat 'cd back && npm i && npm test && cd ..'
                
            }
        }
    }
}