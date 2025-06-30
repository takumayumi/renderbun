import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <span className="animate-spinner mt-20 inline-block h-4 w-4 rounded-full -indent-[9999em] text-xs text-yellow [transform:_translateZ(0)]" />
    </Html>
  );
};

export default Loader;
