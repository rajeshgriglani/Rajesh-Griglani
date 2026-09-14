import React, { useState } from 'react';
import { Image as ImageIcon, X, ZoomIn, Calendar, Sparkles } from 'lucide-react';
import { GalleryItem } from '../types/gallery';
import { useGallery } from '../hooks/useGallery';
import { DISCOVERED_GALLERY_ITEMS } from '../data/galleryAssets';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const { galleryItems: apiGalleryItems } = useGallery();
  const galleryItems = [...apiGalleryItems, ...DISCOVERED_GALLERY_ITEMS];

  const categories = [
    'All',
    'Profile',
    'Personal / Leadership',
    'Leadership',
    'Training',
    'Political Work',
    'Public Speaking',
    'Book',
    'BODHI',
    'Archives',
  ];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory || (selectedCategory === 'Training' && item.category === 'Leadership'));

  return (
    <section id="gallery" className="relative py-20 lg:py-28 bg-[#0a0b0e] text-[#ece8e0] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-[#c8a96e]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#181a22] border border-[#2d3240] text-xs font-semibold tracking-[0.25em] text-[#c8a96e] uppercase mb-4">
              <ImageIcon className="w-3.5 h-3.5" /> VISUAL ARCHIVE
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              GALLERY & MOMENTS
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-[#c8a96e] mt-2">
              Field Documentation, Masterclasses & Archival Milestones
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 self-start md:self-auto bg-[#14161d] p-1.5 rounded-lg border border-[#262a36] max-w-full overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded text-xs font-medium transition-colors min-h-[36px] flex items-center ${
                  selectedCategory === cat
                    ? 'bg-[#c8a96e] text-[#0d0f14] font-semibold'
                    : 'text-[#9c9586] hover:text-white hover:bg-[#1f222b]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group relative rounded-xl overflow-hidden bg-[#13151c] border border-[#282d3b] hover:border-[#c8a96e]/60 transition-all duration-300 shadow-xl cursor-pointer"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0c0e12]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.95]"
                  loading="lazy"
                />
                
                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#161820]/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-[#c8a96e] group-hover:scale-110 transition-transform">
                  <ZoomIn className="w-4 h-4" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="text-[10px] uppercase font-mono text-[#c8a96e] tracking-wider block mb-1">
                    {item.category} {item.year ? `• ${item.year}` : ''}
                  </span>
                  <h3 className="font-serif text-base font-bold text-white group-hover:text-[#f8ecd4] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#b0a99c] line-clamp-2 mt-1">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#12141a] border border-[#2f3442] rounded-2xl shadow-2xl overflow-y-auto flex flex-col">
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-3 right-3 z-20 p-2.5 rounded-full bg-black/70 text-[#8f887b] hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox Image */}
            <div className="relative w-full max-h-[55vh] bg-black flex items-center justify-center overflow-hidden shrink-0">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="max-h-[55vh] w-auto object-contain"
              />
            </div>

            {/* Lightbox Caption Box */}
            <div className="p-5 sm:p-6 text-left bg-[#12141a] border-t border-[#232733] space-y-2">
              <div className="flex items-center justify-between text-xs text-[#8f8879]">
                <span className="px-2.5 py-0.5 rounded bg-[#1f222c] text-[#c8a96e] font-semibold border border-[#2f3442]">
                  {lightboxItem.category}
                </span>
                {lightboxItem.year && <span>{lightboxItem.year}</span>}
              </div>
              <h3 className="font-serif text-lg sm:text-2xl font-bold text-white">
                {lightboxItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#ded8ca] leading-relaxed">
                {lightboxItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
