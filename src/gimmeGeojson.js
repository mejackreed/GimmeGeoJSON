var gimmeGeojson = (function() {
  var _serializeParams = function(params) {
    var serializedParams = '?';
    for (var key in params) {
      serializedParams += key + '=' + params[key] + '&';
    }
    // remove the trailing '&'
    return serializedParams.slice(0, -1);
  };

  var wfs = function(options) {

    if (options.wfsUrl === undefined) {
      throw new Error('You need to provide wfsUrl');
    }
    if (options.typeNames === undefined) {
      throw new Error('You need to provide typeNames');
    }
    if (options.count === undefined) {
      options.count = 100000;
    }

    var params = {
      service: 'WFS',
      version: '2.0.0',
      request: 'GetFeature',
      typeNames: options.typeNames,
      count: options.count,
      outputFormat: 'application/json'
    };

    return options.wfsUrl + _serializeParams(params);
  };

  return {
    wfs: wfs
  };
})(this);
