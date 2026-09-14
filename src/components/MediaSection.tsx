import React, { useState } from 'react';
import { Radio, Mic, Newspaper, Video, Calendar, ExternalLink, Youtube, Share2 } from 'lucide-react';
import { useMedia } from '../hooks/useMedia';
import { MEDIA_ITEMS, MediaItem } from '../data/config';

export const MediaSection: React.FC = () => {
  const { mediaItems = MEDIA_ITEMS } = useMedia();
  const [filterType, setFilterType] = useState<string>('all');

  const items = mediaItems.length > 0 ? mediaItems : MEDIA_ITEMS;
  const filteredMedia = filterType === 'all'
    ? items
    : items.filter((item) => item.type === filterType);

  const getMediaIcon = (item: MediaItem) => {
    if (item.linkUrl.includes('youtu')) {
      return <Youtube className="w-4 h-4 text-[#ff4444]" />;
    }
    if (item.linkUrl.includes('facebook')) {
      return <Share2 className="w-4 h-4 text-[#1877F2]" />;
    }
    switch (item.type) {
      case 'podcast':
        return <Mic className="w-4 h-4 text-[#c8a96e]" />;
      case 'press':
        return <Newspaper className="w-4 h-4 text-[#c8a96e]" />;
      case 'interview':
        return <Video className="w-4 h-4 text-[#c8a96e]" />;
      case 'speech':
        return <Radio className="w-4 h-4 text-[#c8a96e]" />;
      default:
        return <Calendar className="w-4 h-4 text-[#c8a96e]" />;
    }
  };

  return (
    <section id="media" className="relative py-20 lg:py-28 bg-[#0d0e12] text-[#ece8e0] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-[#c8a96e]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#181a22] border border-[#2d3240] text-xs font-semibold tracking-[0.25em] text-[#c8a96e] uppercase mb-4">
              <Radio className="w-3.5 h-3.5" /> PUBLIC DISCOURSE
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              MEDIA • PRESS • SPEAKING
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-[#c8a96e] mt-2">
              Broadcast Dialogues, Keynote Speeches & Literary Reviews
            </p>
          </div>

          {/* Media Type Tabs */}
          <div className="flex flex-wrap gap-1.5 self-start md:self-auto bg-[#14161d] p-1.5 rounded-lg border border-[#262a36] max-w-full overflow-x-auto">
            {['all', 'interview', 'press', 'speech', 'event', 'podcast'].map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-3 py-1.5 rounded text-xs font-medium uppercase tracking-wider transition-colors min-h-[36px] flex items-center ${
                  filterType === type
                    ? 'bg-[#c8a96e] text-[#0d0f14] font-semibold'
                    : 'text-[#9c9586] hover:text-white hover:bg-[#1f222b]'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Media Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedia.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-xl bg-[#13151c] border border-[#262a36] hover:border-[#c8a96e]/50 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              id={`media-card-${item.id}`}
            >
              <div className="space-y-4 text-left">
                {/* Header: Platform & Date */}
                <div className="flex items-center justify-between text-xs text-[#8f887b]">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded bg-[#1e222c] border border-[#2e3340]">
                      {getMediaIcon(item)}
                    </div>
                    <span className="font-medium text-[#f1ece1]">{item.platform}</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#8a8376]">{item.date}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-[#f8ecd4] transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#b5ad9e] leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>

              {/* External CTA Action */}
              <div className="pt-6 mt-6 border-t border-[#222530] flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest font-mono text-[#7d776a] bg-[#181a24] px-2 py-0.5 rounded border border-[#252a38]">
                  {item.type}
                </span>
                <a
                  href={item.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#c8a96e] group-hover:text-[#faedd4] transition-colors"
                >
                  <span>{item.actionText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

