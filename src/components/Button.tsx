export default function Button({ label }: any) {
    return (
      <button className="relative px-6 py-3 text-neonBlue font-orbitron tracking-widest uppercase border-2 border-neonBlue shadow-[0_0_15px_#00FFFF] rounded-lg bg-black/60 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 active:translate-y-1">
        {label}
      </button>
    );
}