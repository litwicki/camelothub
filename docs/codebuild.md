# Local Codebuild    

    git clone https://github.com/aws/aws-codebuild-docker-images.git
    cd aws-codebuild-docker-images
    cd ubuntu/{BINARY}
    docker build -t aws/codebuild/{BINARY}:{VERSION} .

    docker pull amazon/aws-codebuild-local:latest --disable-content-trust=false

    wget https://raw.githubusercontent.com/aws/aws-codebuild-docker-images/master/local_builds/codebuild_build.sh
    chmod +x codebuild_build.sh
    mv codebuild_build.sh /usr/local/bin/codebuild

## Usage
    codebuild_build.sh [-i image_name] [-a artifact_output_directory] [options]

### Example Usage
    codebuild -i aws/codebuild/{BINARY}:{VERSION} -a /path/to/artifacts -s /path/to/src