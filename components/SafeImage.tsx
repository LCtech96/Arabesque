'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface SafeImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  fallback?: React.ReactNode;
  unoptimized?: boolean;
}

export default function SafeImage({
  src,
  alt,
  fill = false,
  width,
  height,
  className = '',
  sizes,
  fallback,
  unoptimized = false,
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    // Reset error state when src changes
    setHasError(false);
    setIsLoading(true);

    return () => {
      mountedRef.current = false;
    };
  }, [src]);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (mountedRef.current) {
      setHasError(true);
      setIsLoading(false);
    }
  };

  const handleLoad = () => {
    if (mountedRef.current) {
      setIsLoading(false);
    }
  };

  if (hasError && fallback) {
    return <>{fallback}</>;
  }

  if (hasError) {
    return null;
  }

  const imageProps = {
    src,
    alt,
    className: `${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`,
    onError: handleError,
    onLoad: handleLoad,
    unoptimized,
    ...(fill ? { fill: true, sizes } : { width, height }),
  };

  return <Image {...imageProps} />;
}

