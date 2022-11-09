import { ErrorMessagesPipe } from './error-messages.pipe';

describe('ErrorMessagesPipe', () => {
  it('create an instance', () => {
    const pipe = new ErrorMessagesPipe();
    expect(pipe).toBeTruthy();
  });
});
