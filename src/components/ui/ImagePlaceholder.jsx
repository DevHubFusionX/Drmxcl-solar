const ImagePlaceholder = ({ 
  src, 
  alt, 
  className = "", 
  fallbackText = "Image", 
  aspectRatio = "aspect-video" 
}) => {
  return (
    <div className={`${aspectRatio} bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center ${className}`}>
      {src ? (
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover rounded-lg"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
      ) : null}
      <div className={`${src ? 'hidden' : 'flex'} flex-col items-center justify-center text-gray-600 p-4 text-center`}>
        <div className="text-4xl mb-2">📷</div>
        <p className="text-sm font-medium">{fallbackText}</p>
        <p className="text-xs text-gray-500 mt-1">{alt}</p>
      </div>
    </div>
  );
};

export default ImagePlaceholder;