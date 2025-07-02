import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Minimize2, Headphones, Download } from 'lucide-react';

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  // Utilisation d'un fichier local dans le dossier public
  const audioUrl = "/sarah-rdv.mp3";

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };
    const handleLoadStart = () => {
      setIsLoading(true);
      setError(null);
    };
    const handleCanPlay = () => {
      setIsLoading(false);
      setError(null);
    };
    const handleError = (e: Event) => {
      setIsLoading(false);
      console.error('Erreur audio:', e);
      setError("Fichier audio non trouvé. Veuillez ajouter le fichier sarah-rdv.mp3 dans le dossier public/");
    };
    const handleLoadedData = () => {
      setIsLoading(false);
      setError(null);
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('loadeddata', handleLoadedData);
    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('loadeddata', handleLoadedData);
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          await playPromise;
          setIsPlaying(true);
        }
      }
    } catch (err) {
      console.error('Erreur de lecture:', err);
      setError("Erreur de lecture. Vérifiez que le fichier audio existe.");
      setIsPlaying(false);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    const progressBar = progressRef.current;
    if (!audio || !progressBar || !duration) return;

    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    audio.currentTime = newTime;
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newVolume = parseFloat(e.target.value);
    audio.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Visualisation audio simple
  const AudioVisualizer = () => (
    <div className="flex items-center space-x-1 h-8">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`w-1 bg-gradient-to-t from-primary-purple to-accent-pink rounded-full transition-all duration-300 ${
            isPlaying ? 'animate-pulse' : ''
          }`}
          style={{
            height: isPlaying ? `${Math.random() * 20 + 10}px` : '4px',
            animationDelay: `${i * 0.1}s`
          }}
        />
      ))}
    </div>
  );

  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <div 
          onClick={() => setIsMinimized(false)}
          className="relative group cursor-pointer"
        >
          {/* Point vert toujours visible */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse border-2 border-white shadow-lg z-10"></div>
          
          {/* Conteneur centré pour le texte et le logo */}
          <div className="flex flex-col items-center space-y-2">
            {/* Texte "Écoutez-moi" avec arrière-plan blanc et texte noir - CENTRÉ */}
            <div className="bg-white backdrop-blur-sm rounded-lg px-3 py-1 border border-gray-200 shadow-lg">
              <span className="text-black font-medium text-sm whitespace-nowrap animate-bounce">
                Écoutez Sarah !
              </span>
            </div>
            
            {/* Bulle avec casque ANIMÉ - CENTRÉ */}
            <div className="bg-gradient-to-r from-primary-purple to-primary-blue p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 border border-white/20 backdrop-blur-sm">
              <Headphones className="w-8 h-8 text-white animate-pulse transform hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-card-bg/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-gray-700/50 w-80">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`w-3 h-3 rounded-full ${isPlaying ? 'bg-red-500 animate-pulse' : 'bg-green-400'}`}></div>
            <h3 className="text-white font-medium">Sarah prend un RDV</h3>
          </div>
          <button
            onClick={() => setIsMinimized(true)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Minimize2 className="w-5 h-5" />
          </button>
        </div>

        {/* Visualiseur audio */}
        <div className="flex justify-center mb-4">
          <AudioVisualizer />
        </div>

        {/* Contrôles principaux */}
        <div className="flex items-center space-x-4 mb-4">
          <button
            onClick={togglePlay}
            disabled={isLoading}
            className="w-12 h-12 bg-gradient-to-r from-primary-purple to-primary-blue rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 disabled:opacity-50"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : isPlaying ? (
              <Pause className="w-6 h-6 text-white" />
            ) : (
              <Play className="w-6 h-6 text-white ml-1" />
            )}
          </button>

          <div className="flex-1">
            <div className="text-xs text-gray-400 mb-1">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
            <div
              ref={progressRef}
              onClick={handleProgressClick}
              className="w-full h-2 bg-gray-700 rounded-full cursor-pointer"
            >
              <div
                className="h-full bg-gradient-to-r from-primary-purple to-accent-pink rounded-full transition-all duration-300"
                style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Contrôles volume */}
        <div className="flex items-center space-x-3">
          <button onClick={toggleMute} className="text-gray-400 hover:text-white transition-colors">
            {isMuted || volume === 0 ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="flex-1 h-1 bg-gray-700 rounded-full appearance-none cursor-pointer"
          />
        </div>

        {error && (
          <div className="mt-3 text-red-400 text-sm text-center">
            {error}
            <a 
              href="https://drive.google.com/file/d/1qGWP0IdvrkUGOUoRSxXorknY5485cbrq/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center mt-2 text-primary-purple hover:text-accent-pink transition-colors underline"
            >
              <Download className="w-4 h-4 mr-1" />
              Télécharger le fichier
            </a>
          </div>
        )}

        {/* Audio element */}
        <audio
          ref={audioRef}
          src={audioUrl}
          preload="metadata"
        />
      </div>
    </div>
  );
};

export default AudioPlayer;