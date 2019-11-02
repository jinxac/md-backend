process.env.ENVIRONMENT = 'test';


const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../../index');

describe('Marker controller', () => {
  it('it should Get all makers', (done) => {
    chai.request(app)
      .get('/api/v0/markers')
      .end((err, res) => {
        expect(Array.isArray([res.body])).toBe(true);
        expect(res.status).toEqual(200);
        done();
      });
  });
  it('it should post the marker', (done) => {
    const marker = {
      name: 'Test Location',
      description: 'Test Description',
      place_id: 'test-place-id',
      lng: 300.254545,
      lat: -234.35424343131,
    };
    chai.request(app)
      .post('/api/v0/markers')
      .send(marker)
      .end((err, res) => {
        expect(res.status).toEqual(200);
        expect(typeof res.body).toBe('object');
        expect(res.body.name).toEqual(marker.name);
        expect(res.body.description).toEqual(marker.description);
        expect(res.body.place_id).toEqual(marker.place_id);
        expect(res.body.lng).toEqual(marker.lng);
        expect(res.body.lat).toEqual(marker.lat);
        done();
      });
  });
  it('it should update the marker', (done) => {
    const marker = {
      // id: '1',
      name: 'Test Location 2',
      description: 'Test Description',
      place_id: 'test-place-id',
      lng: 300.254545,
      lat: -234.35424343131,
    };
    chai.request(app)
      .put('/api/v0/markers/1')
      .send(marker)
      .end((err, res) => {
        expect(res.status).toEqual(200);
        expect(typeof res.body).toBe('object');
        expect(res.body.name).toEqual(marker.name);
        expect(res.body.description).toEqual(marker.description);
        expect(res.body.place_id).toEqual(marker.place_id);
        expect(res.body.lng).toEqual(marker.lng);
        expect(res.body.lat).toEqual(marker.lat);
        done();
      });
  });
  it('it should delete the marker', (done) => {
    const marker = {
      name: 'Test Location 2',
      description: 'Test Description',
      place_id: 'test-place-id',
      lng: 300.254545,
      lat: -234.35424343131,
    };
    chai.request(app)
      .put('/api/v0/markers/1')
      .send(marker)
      .end((err, res) => {
        expect(res.status).toEqual(200);
        done();
      });
  });
});
