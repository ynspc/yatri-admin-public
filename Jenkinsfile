pipeline {
  agent { label "ynspc1" }

  tools { nodejs "node20" }
  
  stages {
    stage("Check Versions") {
      steps {
        sh "pwd"
        sh "whoami"
        sh "node -v"
        // env.NODEJS_HOME = "${tool 'node20'}"
        // on linux / mac
        // env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"
        // on windows
        // env.PATH="${env.NODEJS_HOME};${env.PATH}"
        sh "npm -v"
        sh "cd /yatri/yatri-admin"
        sh "git branch"
        sh "git status"
        sh "git remote -v"
        withCredentials([usernamePassword(credentialsId: 'yatri-admin-1', usernameVariable: 'GIT_USERNAME', passwordVariable: 'GIT_PASSWORD')]) {
          echo "${GIT_USERNAME}"
          echo "${GIT_PASSWORD}"
          sh '''
            git config --global user.name "${GIT_USERNAME}"
            git config --global user.password "${GIT_PASSWORD}"
            git pull origin master
          '''
          // git push --set-upstream origin master
        }
      }
    }
  }
}
