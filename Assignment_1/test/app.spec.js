import { expect } from 'chai';
import app from '../src/app';

  // Example of testing a basic (ie. value-returning) function
  describe('app (converts stars)', () => {

    it('converts 5 to Excellent', () => {
      expect(app.sayHello(5)).to.equal('Excellent');
    });

   it('converts 4 to Very Good', () => {
      expect(app.sayHello(4)).to.equal('Very Good');
    });

   it('converts 3 to Good', () => {
      expect(app.sayHello(3)).to.equal('Good');
    });

   it('converts 2 to Need Improvement', () => {
      expect(app.sayHello(2)).to.equal('Need Improvement');
    });

   it('converts 1 to Poor', () => {
      expect(app.sayHello(1)).to.equal('Poor');
    });

   it('converts 0 to Unknown', () => {
      expect(app.sayHello(0)).to.equal('Unknown');
    });

  });
