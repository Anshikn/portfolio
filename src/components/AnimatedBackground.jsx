function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <div
        className="absolute left-[30%] top-[20%] w-[450px] h-[450px] bg-[#2f0076] animate-pulse"
        style={{
          borderRadius: '62% 47% 82% 35% / 45% 45% 80% 66%',
          animation: 'sliderShape 5s linear infinite'
        }}
      />
      <style jsx>{`
        @keyframes sliderShape {
          0%, 100% {
            border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
            transform: translate3d(0, 0, 0) rotateZ(0.01deg);
          }
          34% {
            border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%;
            transform: translate3d(0, 5px, 0) rotateZ(0.01deg);
          }
          50% {
            transform: translate3d(0, 0, 0) rotateZ(0.01deg);
          }
          67% {
            border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
            transform: translate3d(0, -3px, 0) rotateZ(0.01deg);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;