import catSvg from '../assets/images/cat.svg';
import '../styles/animations.css';

export default function DancingCat({ isPlaying, speed }) {
  const animationStyle = {
    animationPlayState: isPlaying ? 'running' : 'paused',
    animationDuration: `${2 / speed}s`,
  };

  return (
    <div className="cat-stage">
      <div className="cat-shadow" style={{ animationPlayState: isPlaying ? 'running' : 'paused', animationDuration: `${2 / speed}s` }} />
      <div className="cat-wrapper dance" style={animationStyle}>
        <img
          src={catSvg}
          alt="춤추는 고양이"
          className="cat-image"
          draggable={false}
        />
        <div className="music-notes" aria-hidden="true">
          <span className="note note-1" style={animationStyle}>♪</span>
          <span className="note note-2" style={{ ...animationStyle, animationDuration: `${2.4 / speed}s` }}>♫</span>
          <span className="note note-3" style={{ ...animationStyle, animationDuration: `${1.8 / speed}s` }}>♩</span>
        </div>
      </div>
    </div>
  );
}
