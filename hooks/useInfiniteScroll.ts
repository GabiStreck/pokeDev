import { useCallback, useRef, useState } from 'react';

const options = {
  root: null,
  rootMargin: '50px',
  threshold: 0.75
};

const useInfiniteScroll = (fetchMore: () => Promise<void>) => {
  const [isFetching, setIsFetching] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  const lastItemElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (isFetching || !node) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(async (entries) => {
        if (entries[0].isIntersecting) {
          setIsFetching(true);
          await fetchMore();
          setIsFetching(false);
        }
      }, options);

      observer.current.observe(node);
    },
    [fetchMore, isFetching]
  );

  return { lastItemElementRef, isFetching };
};

export default useInfiniteScroll;
