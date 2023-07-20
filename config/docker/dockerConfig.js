const dockerRode = require('dockerode');
const tar = require('tar-fs');

module.exports = (url) => {
    const docker = new dockerRode({
        host: url
    })

    // Define the Docker image build options
    const buildOptions = {
        t: 'livestream', 
        context: '../livestream/config/davis-nginx-rtmp-config',
    };

    // Create a tar stream of the build context
    const tarStream = tar.pack(buildOptions.context);

    docker.buildImage(tarStream, buildOptions, function(err, response) {
        if (err) {
            console.error('Error building Docker image:', err);
            return;
        }
        console.log(`image: ${response}`)
        docker.run(response.Image, ['-p', '1935:1935', '-p', '9090:80'], 
            process.stdout, function (err, data, container) {
                console.log(data);
          });
    })
}
