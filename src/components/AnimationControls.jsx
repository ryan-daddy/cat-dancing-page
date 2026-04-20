export default function AnimationControls({ isPlaying, onToggle, speed, onSpeedChange }) {
  return (
    <div className="controls" role="group" aria-label="애니메이션 제어">
      <button
        className={`btn-toggle ${isPlaying ? 'playing' : 'paused'}`}
        onClick={onToggle}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 시작'}
      >
        {isPlaying ? '⏸ 정지' : '▶ 시작'}
      </button>

      <div className="speed-control">
        <span className="speed-label">속도</span>
        {[0.5, 1, 1.5, 2].map(s => (
          <button
            key={s}
            className={`btn-speed ${speed === s ? 'active' : ''}`}
            onClick={() => onSpeedChange(s)}
            aria-pressed={speed === s}
          >
            {s}x
          </button>
        ))}
      </div>
    </div>
  );
}
