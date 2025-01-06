const BoxesBackground = ()=>{

    return Array.from({ length: 40 }).map((_, index) => (
        <div
          key={index}
          className={`absolute rounded-lg bg-[#323254] opacity-10 animate-bounce`}
          style={{
            width: `${Math.random() * 100 + 50}px`, // Tamaño aleatorio
            height: `${Math.random() * 100 + 50}px`, // Tamaño aleatorio
            top: `${Math.random() * 100}vh`, // Posición vertical aleatoria
            left: `${Math.random() * 100}vw`, // Posición horizontal aleatoria
            animationDelay: `${index * 0.2}s`, // Retraso en la animación
          }}
        ></div>
      ))
}

export default BoxesBackground