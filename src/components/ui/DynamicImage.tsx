import React, { useState } from 'react';
import { getMediaAsset } from '../../data/mock/mediaRegistry';
import portraitImage from '../../assets/images/Rajesh Griglani portrait.png';

interface DynamicImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  imageId?: string;
  fallbackSrc?: string;
  showSkeleton?: boolean;
}

export const DynamicImage: React.FC<DynamicImageProps> = ({
  imageId,
  src,
  alt = '',
  fallbackSrc = portraitImage,
  className = '',
  showSkeleton = true,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // If imageId is provided, resolve from centralized media registry
  const asset = imageId ? getMediaAsset(imageId, fallbackSrc) : null;
  const imageSrc = hasError ? fallbackSrc : (src || asset?.url || fallbackSrc);
  const imageAlt = alt || asset?.alt || 'Rajesh Bhojraj Griglani Media';

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {showSkeleton && !isLoaded && (
        <div className="absolute inset-0 bg-neutral-900/80 animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-amber-500/30 border-t-amber-500 rounded-full animate-spin" />
        </div>
      )}
      <img
        src={imageSrc}
        alt={imageAlt}
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
};
