import { createSignal } from 'solid-js';
import confetti from 'canvas-confetti';
import './App.css';

function App() {
  const [currentStep, setCurrentStep] = createSignal(0);
  const [password, setPassword] = createSignal('');
  const [error, setError] = createSignal('');

  // Función para lanzar confeti
  const launchConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const welcomeMessage = (
    <>
      <h2>Bienvenida a la Búsqueda del Tesoro Yacira 🎉</h2>
      <p>¡Econtra todas las pistas para obtener tu premio final 🏆!</p>
      <p>
        ¡El juego está diseñado para desafiarte 😊 jaja mentira o no? ¿Estás lista
        para empezar? 🎊
      </p>
    </>
  );

  const emojis = [
    '😊', '👍', '🤩', '🎉', '👀', '🤔', '🚀', '👽', '🤖', '🎊', '👫', '🤝', '🎁', '👻', '🕷️', '👺', '🤯', '🎈', '👾', '🤩', '🎊', '👻', '🕷️', '👺', '🤯', '🎈'
  ];

  const rules = (
    <>
      <h3>Reglas del juego:</h3>
      <ul class="rules-list">
        <li>
          Tienes que encontrar la pista en cada ubicación para avanzar. 📍
        </li>
        <li>
          Una vez tengas la tarjeta de cada ubicación, ingresa la contraseña correcta para pasar al siguiente nivel 🔑.
        </li>
        <li>
          Acordate de guardar las tarjetas, ya que si recargas la página tendrás que empezar de nuevo, osea a ingresar las contraseñas no todo el juego jaja 😂.
        </li>
        <p>Cada vez obtengas una tarjeta escaneala para ver el mensaje!!</p>
        <li>
          ¡Divértite y ojala pierdas mi juego es muy bueno 😂!
        </li>
      </ul>
    </>
  );

  const rule1 = (
    <>
      <h3>Reglas del nivel:</h3>
      <ul class="rules-list">
        <p>
          En la base sobre la que apoya la estatua de sanma un capo por cierto esta la respuesta osea la contraseña 🤔
        </p>
        <li>
          Bueno de mas esta decir que guardes la contraseña no la voy a poner de nuevo si se pierde 😊.
        </li>
        <li>
          ¡Apenas escribas la contraseña y des en siguiente vas a pasar al segundo nivel 🎉!
        </li>
      </ul>
    </>
  );

  const rule2 = (
    <>
      <h3>Reglas del nivel:</h3>
      <ul class="rules-list">
        <p>
          Pedile a la secretaria de la biblioteca que te de el libro Jane Eyre de Charlotte Brontë 📖.
        </p>
        <li>
          Anda a la pagina 101 ahí encontras la tarjeta, si quieres despues lo leemos juntos jssj 😂.
        </li>
        <li>
          ¡Ya que yo controlo esto aprovecho el espacio para decirte que sos muy hermosa boluda 😊!
        </li>
      </ul>
    </>
  );

  const rule3 = (
    <>
      <h3>¡El BOSS Final¡:</h3>
      <ul class="rules-list">
        <p>
          A la gente le aterra el final de las cosas pero yo sé que donde algo termina es por que comienza otra cosa 🌈.
        </p>
        <li>
          Te podría escribir, te podría leer pero lo que yo quiero escojer algo para la última prueba 🤔.
        </li>
        <li>
          En la cafeteria Vitrage te dejo la última contraseña.. nadie piensa en ellas pero hoy día nos dan el acceso a todo en nuestras vidas, por eso 3 claves, llaves para que obtengas tu premio... 🎁
        </li>
        <p>Acercate a la barra y deci que dejaron algo para Yacira</p>
      </ul>
    </>
  );

  const steps = [
    {
      title: 'Búsqueda del Tesoro',
      text: welcomeMessage,
      rule: rules,
      buttonText: 'Comenzar',
      password: 'start123', // Contraseña para el primer paso
    },
    {
      title: 'Primer nivel... Libertador de America',
      text: '¡Te felicito, sos valiente jsj ingresaste al primer nivel la ubicación es la plaza San Martín re obvio.. mira el título 🎉',
      rule: rule1,
      buttonText: 'Siguiente',
      password: 'preciosahermosa', // Contraseña para el segundo paso
    },
    {
      title: 'Segundo nivel... mi libro tu libro',
      text: '¡Genial Encontraste la primera contraseña jaja no tenia esperanzas pero aquí estás... bueno sigamos, ahora toca la Biblioteca Popular 📚',
      rule: rule2,
      buttonText: 'Siguiente',
      password: 'unaflorunarosa', // Contraseña para el tercer paso
    },
    {
      title: 'El final de nuestro juego... o el principio?',
      text: '¡Felicidades llegaste al final. Puedes retirar el premio en... jaja eh tranquila todavía falta este nivel 🎉',
      rule: rule3,
      buttonText: 'Terminar',
      password: 'tusojossonhermosos', // Contraseña para el paso final
    },
  ];

  const nextStep = () => {
    if (password() === steps[currentStep()].password || currentStep() === 0) {
      launchConfetti(); // Lanzar confeti al pasar de nivel

      if (currentStep() < steps.length - 1) {
        setCurrentStep(currentStep() + 1);
      } else {
        alert(
          '¡Has completado la búsqueda del tesoro Pasa por tu premio, en la floristería Floreria la Familia deci que quieres retirar el pedido de Yacira 🎁'
        );
        setCurrentStep(0); // Reiniciar el juego o hacer lo que prefieras aquí.
      }
      setPassword(''); // Resetear la contraseña
      setError(''); // Resetear el mensaje de error
    } else {
      setError('Contraseña incorrecta, inténtalo de nuevo. jaja escribi bien 😂');
    }
  };

  return (
    <div id="game-container" class="card">
      <h1>{steps[currentStep()].title}</h1>
      <div class="pista">
        <div class="welcome-container">
          <div class="message">{steps[currentStep()].text}</div>
          <div class="rules-container">{steps[currentStep()].rule}</div>
        </div>
        {currentStep() > 0 && (
          <>
            <input
              type="password"
              value={password()}
              onInput={(e) => setPassword(e.target.value)}
              placeholder="Ingresa la contraseña"
            />
            <button onClick={nextStep}>
              {steps[currentStep()].buttonText}
            </button>
            {error() && <p class="error">{error()}</p>}
          </>
        )}
        {currentStep() === 0 && (
          <button onClick={nextStep}>{steps[currentStep()].buttonText}</button>
        )}
      </div>
      <p>
        <strong>Advertencia</strong> este juego fue diseñado exclusivamente para Yacira Schneider 😊
      </p>
    </div>
  );
}

export default App;
