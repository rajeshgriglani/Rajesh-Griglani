import React, { useState } from 'react';
import { PenTool, BookOpen, ArrowRight, X, Clock, Calendar, Tag } from 'lucide-react';
import { ARTICLES_DATA, ArticleItem } from '../data/config';

export const WritingsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<ArticleItem | null>(null);

  const categories = [
    'All',
    'Politics',
    'Democracy',
    'Constitution',
    'Leadership',
    'Political Memory',
    'Grassroots',
    'BODHI',
  ];

  const filteredArticles = selectedCategory === 'All'
    ? ARTICLES_DATA
    : ARTICLES_DATA.filter((art) => art.category === selectedCategory);

  return (
    <section id="writings" className="relative py-20 lg:py-28 bg-[#0a0b0e] text-[#ece8e0] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#c8a96e]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#181a22] border border-[#2d3240] text-xs font-semibold tracking-[0.25em] text-[#c8a96e] uppercase mb-4">
              <PenTool className="w-3.5 h-3.5" /> ESSAYS & COMMENTARY
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              WRITINGS & IDEAS
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-[#c8a96e] mt-2">
              Perspectives on the Constitution, Democratic Memory & Cadre Pedagogy
            </p>
          </div>

          {/* Category Filter Pills */}
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

        {/* Editorial Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => setActiveArticle(article)}
              className="p-6 rounded-xl bg-[#12141a] border border-[#262a36] hover:border-[#c8a96e]/60 transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-xl"
              id={`article-card-${article.id}`}
            >
              <div className="space-y-4">
                {/* Meta: Category & Date */}
                <div className="flex items-center justify-between text-xs text-[#8f887a]">
                  <span className="px-2.5 py-0.5 rounded bg-[#1e222c] text-[#c8a96e] font-medium border border-[#2e3340]">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#6f695d]" /> {article.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-[#f8ecd4] transition-colors leading-snug">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-[#b5ad9e] line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              {/* Read Article Action */}
              <div className="pt-6 mt-6 border-t border-[#222530] flex items-center justify-between text-xs">
                <span className="text-[#7d776a]">{article.readTime}</span>
                <span className="inline-flex items-center gap-1 font-semibold text-[#c8a96e] group-hover:translate-x-1 transition-transform">
                  READ ARTICLE <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Full Editorial Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[92vh] bg-[#12141a] border border-[#2f3442] rounded-xl shadow-2xl p-5 sm:p-8 md:p-10 text-[#ece8e0] overflow-y-auto">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 p-2.5 rounded-full text-[#8f887b] hover:text-white hover:bg-[#1e222c] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6 text-left">
              <div className="space-y-3 pb-6 border-b border-[#242833]">
                <div className="flex items-center gap-3 text-xs text-[#9d9585]">
                  <span className="px-2.5 py-0.5 rounded bg-[#1e222c] text-[#c8a96e] font-semibold border border-[#303544]">
                    {activeArticle.category}
                  </span>
                  <span>{activeArticle.date}</span>
                  <span>•</span>
                  <span>{activeArticle.readTime}</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                  {activeArticle.title}
                </h2>
                <div className="text-xs text-[#8f887b]">
                  By <strong className="text-[#ece8e0]">Rajesh Bhojraj Griglani</strong>
                </div>
              </div>

              {/* Full Article Content */}
              <div className="prose prose-invert max-w-none text-sm sm:text-base leading-relaxed text-[#ded8ca] space-y-4 whitespace-pre-line font-serif">
                {activeArticle.fullContent || activeArticle.excerpt}
              </div>

              <div className="pt-6 border-t border-[#242833] flex justify-end">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-5 py-2 rounded bg-[#1c1f28] text-xs font-semibold uppercase tracking-wider text-[#c8a96e] hover:bg-[#252936]"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
