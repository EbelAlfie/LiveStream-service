const dockerRode = require('dockerode');
const tar = require('tar-fs');

module.exports = async (url) => {
    const docker = new dockerRode({
        host: url,
        port: 1375,
        username: "ebelalfie",
        password: "cacingtanah"
    })
    // Define the Docker image build options
    const buildOptions = {
        t: 'livestream', 
        context: '../livestream/config/davis-nginx-rtmp-config',
    };

    // Create a tar stream of the build context
    const tarStream = tar.pack(buildOptions.context);

    let stream = await docker.buildImage(tarStream, buildOptions);
    await new Promise((resolve, reject) => {
        docker.modem.followProgress(stream, (err, res) => err ? reject(err) : resolve(res));
    });
    
    // docker.buildImage(tarStream, buildOptions, function(err, res) {
    //     if (err) {
    //         console.error('Error building Docker image:', err);
    //         return;
    //     }
    //     console.log(`image: ${res}`)
    //     // docker.run(res.Image, ['-p', '1935:1935', '-p', '9090:80', '--name livestream_gli'], 
    //     //     process.stdout, function (err, data, container) {
    //     //         console.log(err);
    //     // });
    // })
}
