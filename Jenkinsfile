pipeline {
    agent any

    environment {
        DEVELOPMENT_DEPLOY_ENV = "development"
        STAGING_DEPLOY_ENV = "stage"
        DEVELOPMENT_BRANCH_NAME = "develop"
        STAGING_BRANCH_NAME = "staging"

        GIT_COMMIT_MSG = sh (script: 'git log -1 --pretty=%b ${GIT_COMMIT}', returnStdout: true).trim()
        GIT_AUTHOR = sh (script: 'git log -1 --pretty=%cn ${GIT_COMMIT}', returnStdout: true).trim()

        BRANCH_NAME = "${GIT_BRANCH.split("/")[1]}"
        DEPLOY_ENV = "${BRANCH_NAME == DEVELOPMENT_BRANCH_NAME ? DEVELOPMENT_DEPLOY_ENV : STAGING_DEPLOY_ENV}"
        BRANCH_NAME_DEPLOY_ENV = "${BRANCH_NAME == DEVELOPMENT_BRANCH_NAME ? DEVELOPMENT_BRANCH_NAME : STAGING_BRANCH_NAME}"
        REGISTRY = "385701286561.dkr.ecr.ap-southeast-1.amazonaws.com/-admin-web-${DEPLOY_ENV}"
        REGISTRY_IMAGES_LATEST = "385701286561.dkr.ecr.ap-southeast-1.amazonaws.com/-admin-web-${DEPLOY_ENV}:latest"

        NEXT_PUBLIC_HOST_API = credentials("web_admin_next_public_host_api_${DEPLOY_ENV}")
    }

    options {
        timeout(time: 30, unit: 'MINUTES')
    }
    stages {
        stage('Cloning Git') {
            steps {
                slackSend(channel: '#jenkins',color: '#D4DADF', message: """
                     *STARTED:*
                     Job `${env.JOB_NAME}` build `${env.BUILD_DISPLAY_NAME}`
                     Environment: `${env.DEPLOY_ENV}`
                     Release note: \n
                     `${env.GIT_COMMIT_MSG}`
                     More info at: ${env.BUILD_URL}
                     Time: ${currentBuild.durationString.minus(' and counting')}
                     """.stripIndent().trim(), tokenCredentialId: '-jenkins-app', botUser: true)
                git branch: env.BRANCH_NAME_DEPLOY_ENV, changelog: false, credentialsId: '.it@.vn', poll: true, url: 'https://_it_@bitbucket.org/ellt/-web.git'
            }
        }

        stage("Set environment") {
            steps {
                sh("rm .env")
                sh("echo NEXT_PUBLIC_HOST_API=${env.NEXT_PUBLIC_HOST_API} >> .env")
            }
        }

        stage('Docker Build') {
            steps {
                script {
                    dockerImage = docker.build REGISTRY
                }
            }
        }

        stage('Pushing to ECR') {
            steps {
                script {
                    sh ('aws ecr get-login-password --region ap-southeast-1 | docker login --username AWS --password-stdin 385701286561.dkr.ecr.ap-southeast-1.amazonaws.com')
                    sh ("docker push ${env.REGISTRY_IMAGES_LATEST}")
                }
            }
        }
    }

    post {
        success {
            slackSend(channel: '#jenkins',color: '#00FF00', message: """
                *SUCCESS:*
                Job `${env.JOB_NAME}` build `${env.BUILD_DISPLAY_NAME}`
                Environment: `${env.DEPLOY_ENV}`
                Release note: \n
                `${env.GIT_COMMIT_MSG}`
                More info at: ${env.BUILD_URL}
                Time: ${currentBuild.durationString.minus(' and counting')}
                """.stripIndent().trim(), tokenCredentialId: '-jenkins-app', botUser: true)
        }
        failure {
            slackSend(channel: '#jenkins',color: '#FF0000', message: """
                 *FAILURE:*
                 Job `${env.JOB_NAME}` build `${env.BUILD_DISPLAY_NAME}`
                 Environment: `${env.DEPLOY_ENV}`
                 Release note: \n
                 `${env.GIT_COMMIT_MSG}`
                 More info at: ${env.BUILD_URL}
                 Time: ${currentBuild.durationString.minus(' and counting')}
                 """.stripIndent().trim(), tokenCredentialId: '-jenkins-app', botUser: true)
        }
        unstable {
            slackSend(channel: '#jenkins',color: '#FFFE89', message: """
                *UNSTABLE:*
                Job `${env.JOB_NAME}` build `${env.BUILD_DISPLAY_NAME}`
                Environment: `${env.DEPLOY_ENV}`
                Release note: \n
                `${env.GIT_COMMIT_MSG}`
                More info at: ${env.BUILD_URL}
                Time: ${currentBuild.durationString.minus(' and counting')}
                """.stripIndent().trim(), tokenCredentialId: '-jenkins-app', botUser: true)

        }
    }

}