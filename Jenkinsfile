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
                bat 'cd back && npm i && npm test && cd ..'
                bat 'docker-compose up'
            }
        }
    }
}