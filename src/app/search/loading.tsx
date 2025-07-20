import { Spinner } from '@/shared/ui';

const Loading = async () => (
  <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
    <Spinner />
  </div>
);

export default Loading;
