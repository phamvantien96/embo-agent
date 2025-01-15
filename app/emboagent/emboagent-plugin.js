const { withPodfile } = require('expo/config-plugins');

module.exports = (expoConfig) => {
  return withPodfile(expoConfig, async (config) => {
    const insertContent =
      "pod 'Shared', :path => '../../../kotlin/shared/Shared.podspec'";

    if (config.modResults.contents.includes(insertContent)) {
      return config;
    }

    const position = config.modResults.contents.indexOf(
      'post_install do |installer|'
    );
    const space = '\n  ';
    const modifiedContent =
      config.modResults.contents.slice(0, position) +
      insertContent +
      space +
      config.modResults.contents.slice(position);
    config.modResults.contents = modifiedContent;
    return config;
  });
};
