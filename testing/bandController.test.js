import { describe, test, expect } from '@jest/globals';

import BandController from '../src/controllers/bandController';

// write a test for the bandController
describe('BandController', () => {
  test('should return a band', () => {
    const bandController = new BandController();
    const band = bandController.getBand();
    expect(band).toBe('The Beatles');
  });
});
