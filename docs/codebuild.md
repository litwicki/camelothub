# Local Codebuild    
Reference: [https://aws.amazon.com/blogs/devops/announcing-local-build-support-for-aws-codebuild/](https://aws.amazon.com/blogs/devops/announcing-local-build-support-for-aws-codebuild/)

### Locally pull available codebuild images
    git clone https://github.com/aws/aws-codebuild-docker-images.git

### Browse for the binary you're looking for

    cd aws-codebuild-docker-images
    cd ubuntu/{BINARY}
    docker build -t aws/codebuild/{BINARY}:{VERSION} .

### Pull codebuild locally
    docker pull amazon/aws-codebuild-local:latest --disable-content-trust=false

### Install the codebuild script to do local magic
    wget https://raw.githubusercontent.com/aws/aws-codebuild-docker-images/master/local_builds/codebuild_build.sh
    chmod +x codebuild_build.sh

### Optionally..
    mv codebuild_build.sh /usr/local/bin/codebuild

## Usage
    codebuild_build.sh [-i image_name] [-a artifact_output_directory] [options]

### Example Usage
    codebuild -i aws/codebuild/{BINARY}:{VERSION} -a /path/to/artifacts -s /path/to/src -b buildspec-filename.yml