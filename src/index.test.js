import testMdi from './index';

describe('index.js', () => {
  it('should say something', () => {
    expect(testMdi('🐰')).toEqual('👉 🐰 👈');
    expect(testMdi()).toEqual('No args passed!');
  });
});
