'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  title: string;
  category?: string;
  creator?: string;
}

interface PortfolioGalleryProps {
  items: MediaItem[];
  className?: string;
}

export function PortfolioGallery({ items, className }: PortfolioGalleryProps) {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', ...new Set(items.map(item => item.category).filter((cat): cat is string => Boolean(cat)))];
  
  const filteredItems = filter === 'all' 
    ? items 
    : items.filter(item => item.category === filter);

  const currentIndex = selectedItem ? filteredItems.findIndex(item => item.id === selectedItem.id) : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedItem(filteredItems[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredItems.length - 1) {
      setSelectedItem(filteredItems[currentIndex + 1]);
    }
  };

  return (
    <>
      {/* Filter tabs */}
      {categories.length > 2 && (
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                'px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize',
                filter === cat
                  ? 'bg-[var(--color-accent)] text-white shadow-[0_0_20px_rgba(255,77,77,0.3)]'
                  : 'bg-white/5 text-white/70 border border-white/10 hover:border-[var(--color-accent)]/50 hover:text-white'
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Gallery Grid */}
      <div className={cn(
        'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4',
        className
      )}>
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-white/5"
            onClick={() => setSelectedItem(item)}
          >
            {/* Thumbnail */}
            <div className="absolute inset-0">
              {item.type === 'video' ? (
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.thumbnail || '/api/placeholder/400/300'})` }}
                />
              ) : (
                <img 
                  src={item.src} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
              {/* Play button for videos */}
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[var(--color-accent)] flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform shadow-[0_0_30px_rgba(255,77,77,0.5)]">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
              )}

              {/* Expand icon for images */}
              {item.type === 'image' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-6 h-6 text-white" />
                  </div>
                </div>
              )}

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-semibold truncate">{item.title}</h3>
                {item.creator && (
                  <p className="text-white/60 text-sm truncate">{item.creator}</p>
                )}
              </div>
            </div>

            {/* Category badge */}
            {item.category && (
              <div className="absolute top-3 left-3">
                <span className="px-2 py-1 rounded-md bg-black/50 backdrop-blur-sm text-white/80 text-xs font-medium capitalize">
                  {item.category}
                </span>
              </div>
            )}

            {/* Video indicator */}
            {item.type === 'video' && (
              <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/50 backdrop-blur-sm flex items-center justify-center">
                <Play className="w-4 h-4 text-white" />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            {/* Close button */}
            <button 
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-50"
              onClick={() => setSelectedItem(null)}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation */}
            {currentIndex > 0 && (
              <button 
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-50"
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}
            {currentIndex < filteredItems.length - 1 && (
              <button 
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-50"
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Content */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.type === 'video' ? (
                <div className="aspect-video rounded-2xl overflow-hidden bg-black">
                  <iframe
                    src={selectedItem.src}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <img 
                  src={selectedItem.src} 
                  alt={selectedItem.title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
                />
              )}

              {/* Info below */}
              <div className="mt-4 text-center">
                <h3 className="text-white text-xl font-semibold">{selectedItem.title}</h3>
                {selectedItem.creator && (
                  <p className="text-white/60">{selectedItem.creator}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Showreel Component
interface ShowreelProps {
  videoUrl: string;
  posterUrl?: string;
  title?: string;
  className?: string;
}

export function Showreel({ videoUrl, posterUrl, title, className }: ShowreelProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={cn('relative', className)}>
      <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-black/50">
        {!isPlaying ? (
          <>
            {/* Poster/Thumbnail */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: posterUrl 
                  ? `url(${posterUrl})` 
                  : 'linear-gradient(135deg, rgba(255,77,77,0.3) 0%, rgba(0,229,255,0.2) 50%, rgba(168,85,247,0.2) 100%)'
              }}
            >
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            </div>

            {/* Play button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center cursor-pointer group"
            >
              <div className="relative">
                {/* Pulse rings */}
                <div className="absolute inset-0 w-24 h-24 -m-2 rounded-full bg-[var(--color-accent)]/30 animate-ping" />
                <div className="absolute inset-0 w-24 h-24 -m-2 rounded-full bg-[var(--color-accent)]/20 animate-pulse" />
                
                {/* Button */}
                <div className="relative w-20 h-20 rounded-full bg-[var(--color-accent)] flex items-center justify-center shadow-[0_0_60px_rgba(255,77,77,0.6)] group-hover:shadow-[0_0_80px_rgba(255,77,77,0.8)] transition-all">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
            </motion.button>

            {/* Title overlay */}
            {title && (
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white/60 text-sm uppercase tracking-wider mb-1">Watch Our</p>
                <h3 className="text-white text-2xl font-bold">{title}</h3>
              </div>
            )}

            {/* Corner decorations */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[var(--color-accent)]/50 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[var(--color-accent)]/50 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[var(--color-accent)]/50 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[var(--color-accent)]/50 rounded-br-lg" />
          </>
        ) : (
          <>
            <iframe
              src={`${videoUrl}?autoplay=1`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            {/* Close button */}
            <button 
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// Video Grid Component for creators showcase
interface VideoGridItem {
  id: string;
  thumbnail: string;
  title: string;
  creator: string;
  views?: string;
  videoUrl?: string;
}

interface VideoGridProps {
  videos: VideoGridItem[];
  className?: string;
}

export function VideoGrid({ videos, className }: VideoGridProps) {
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6', className)}>
      {videos.map((video, index) => (
        <motion.div
          key={video.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/5 mb-4">
            {playingId === video.id && video.videoUrl ? (
              <>
                <iframe
                  src={`${video.videoUrl}?autoplay=1`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <button 
                  onClick={() => setPlayingId(null)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors z-10"
                >
                  <X className="w-4 h-4" />
                </button>
              </>
            ) : (
              <>
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${video.thumbnail})` }}
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {video.videoUrl && (
                  <button
                    onClick={() => setPlayingId(video.id)}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-[var(--color-accent)] flex items-center justify-center transform scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all shadow-[0_0_30px_rgba(255,77,77,0.5)]">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </button>
                )}

                {video.views && (
                  <div className="absolute bottom-3 right-3 px-2 py-1 rounded-md bg-black/70 text-white text-xs font-medium">
                    {video.views} views
                  </div>
                )}
              </>
            )}
          </div>
          
          <h3 className="text-white font-semibold mb-1 line-clamp-1 group-hover:text-[var(--color-accent)] transition-colors">
            {video.title}
          </h3>
          <p className="text-gray-400 text-sm">{video.creator}</p>
        </motion.div>
      ))}
    </div>
  );
}

