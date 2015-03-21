describe('gimmeGeojson', function() {
  describe('wms', function() {
    it('correctly builds a WFS request for GeoJSON', function() {
      expect(gimmeGeojson.wfs({
        wfsUrl: 'http://www.example.com/wfs',
        typeNames: 'my:data'
      }))
      .toBe('http://www.example.com/wfs?service=WFS&version=2.0.0&request=GetFeature&typeNames=my:data&maxFeatures=100000&outputFormat=application/json');
    });
    it('uses provided maxFeatures', function() {
      expect(gimmeGeojson.wfs({
        wfsUrl: 'http://www.example.com/wfs',
        typeNames: 'my:data',
        maxFeatures: 2
      }))
      .toBe('http://www.example.com/wfs?service=WFS&version=2.0.0&request=GetFeature&typeNames=my:data&maxFeatures=2&outputFormat=application/json');
    });
    it('checks for a wfsUrl parameter', function() {
      expect(function() {
        gimmeGeojson.wfs({
          typeNames: 'my:data'
        });
      })
      .toThrowError('You need to provide wfsUrl');
    });
    it('checks for a typeNames parameter', function() {
      expect(function() {
        gimmeGeojson.wfs({
          wfsUrl: 'http://www.example.com/wfs'
        });
      })
      .toThrowError('You need to provide typeNames');
    });
  });
});
