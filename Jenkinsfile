pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Pull code from GitHub
                git 'https://github.com/Aparnasaii/BuyMe.git'
            }
        }

        stage('Build') {
            steps {
                // Install dependencies and build project
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                // Run tests
                sh 'npm test'
            }
        }

        stage('Docker Build & Deploy') {
            steps {
                // Build Docker image and run container
                sh 'docker build -t online-bidding-app .'
                sh 'docker run -d -p 5000:5000 online-bidding-app'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check logs.'
        }
    }
}
