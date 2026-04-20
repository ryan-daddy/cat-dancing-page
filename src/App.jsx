import './styles/global.css';
import Layout from './components/Layout';
import DancingCat from './components/DancingCat';
import AnimationControls from './components/AnimationControls';
import { useAnimation } from './hooks/useAnimation';

export default function App() {
  const { isPlaying, toggle, speed, changeSpeed } = useAnimation(true);

  return (
    <Layout>
      <DancingCat isPlaying={isPlaying} speed={speed} />
      <AnimationControls
        isPlaying={isPlaying}
        onToggle={toggle}
        speed={speed}
        onSpeedChange={changeSpeed}
      />
    </Layout>
  );
}
