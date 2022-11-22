import { UserDetailPipe } from './user-detail.pipe';

describe('UserDetailPipe', () => {
  it('create an instance', () => {
    const pipe = new UserDetailPipe();
    expect(pipe).toBeTruthy();
  });
});
