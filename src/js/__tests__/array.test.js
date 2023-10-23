import ArrayBufferConverter from '../arraybuffer';
import getBuffer from '../getbuffer';

test('данные загружаются в буфер', () => {
  const bufferConverter = new ArrayBufferConverter();
  bufferConverter.load(getBuffer());
  expect(bufferConverter.buffer).toEqual(getBuffer());
});

test('функция возвращает строку', () => {
  const bufferConverter = new ArrayBufferConverter();
  bufferConverter.load(getBuffer());
  expect(bufferConverter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
