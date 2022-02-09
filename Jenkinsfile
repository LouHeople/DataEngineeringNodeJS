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
                bat 'docker-compose up '
				bat 'docker run -p 0.0.0.0:3000:3000/tcp dataengineeringjenkins2'
            }
        }
    }
}