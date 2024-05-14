const {parse, stringify} = require('./index');

let wkt = {};
wkt.Point = 'POINT Z (58.51466818909509 8.629797415591964 61.77237)';
wkt.LineString = 'LINESTRING (30 10, 10 30, 40 40)';
wkt.Polygon = 'POLYGON ((30 10, 40 40, 20 40, 10 20, 30 10))';
wkt.Polygon2 = 'POLYGON ((35 10, 45 45, 15 40, 10 20, 35 10),(20 30, 35 35, 30 20, 20 30))';
wkt.MultiPoint = 'MULTIPOINT ((10 40), (40 30), (20 20), (30 10))';
wkt.MultiPoint2 = 'MULTIPOINT (10 40, 40 30, 20 20, 30 10)';
wkt.MultiLineString = 'MULTILINESTRING ((10 10, 20 20, 10 40),(40 40, 30 30, 40 20, 30 10))';
wkt.MultiPolygon = 'MULTIPOLYGON (((30 20, 45 40, 10 40, 30 20)),((15 5, 40 10, 10 20, 5 10, 15 5)))';
wkt.MultiPolygon2 = 'MULTIPOLYGON (((40 40, 20 45, 45 30, 40 40)),((20 35, 10 30, 10 10, 30 5, 45 20, 20 35),(30 20, 20 15, 20 25, 30 20)))';
wkt.GeometryCollection = 'GEOMETRYCOLLECTION (POINT (40 10),LINESTRING (10 10, 20 20, 10 40),POLYGON ((40 40, 20 45, 45 30, 40 40)))';
wkt.GeometryCollection2 = 'GEOMETRYCOLLECTION(POLYGON((121.49885751307008 31.212840742313986 14,121.49875022470948 31.21281034741 14,121.49884779006241 31.21276131411382 14,121.49885751307008 31.212840742313986 14)),POLYGON((121.49873614311215 31.212778518783765 14,121.49873547255991 31.212722603594955 14,121.4986479654908 31.212728338487622 14,121.49873614311215 31.212778518783765 14)),MULTIPOINT((121.49872340261933 31.212736654081397 14),(121.49877738207577 31.21275815992398 14),(121.49874720722435 31.212767335748623 14),(121.49872373789549 31.21275357201131 14)))';

const point = {
  type: "Point",
  coordinates: [125.6, 10.1, 10]
};

const lineString = {
  type: "Point",
  coordinates: [125.6, 10.1, 10]
};

const runAll = ()=>{
  for (let key in wkt) {
    if (wkt.hasOwnProperty(key)) {
      let parsed = parse(wkt[key]);
      console.log(parsed);
      console.log(stringify(parsed));
    }
  }
};
runAll();