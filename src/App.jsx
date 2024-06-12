import { createSignal } from 'solid-js';
import './App.css';

function App() {
  const [currentStep, setCurrentStep] = createSignal(0);
  const [password, setPassword] = createSignal('');
  const [error, setError] = createSignal('');
  const welcomeMessage = (
    <>
      <h2>Bienvenida a la Búsqueda del Tesoro Yacira!</h2>
      <p>¡Econtra todas las pistas para obtener tu premio final!</p>
      <p>
        ¡El juego está diseñado para desafiarte! jaja mentira o no? ¿Estás lista
        para empezar?
      </p>
    </>
  );

  const rules = (
    <>
      <h3>Reglas del juego:</h3>
      <ul class="rules-list">
        <li>Tenes que encontrar la pista en cada ubicación para avanzar. </li>
        <li>Una vez tengas el tesoro de cada ubicacion. </li>
        <li>Ingresa la contraseña correcta para pasar al siguiente paso. 🔑</li>
        <li>
          Acordate de anotar las contraseñas, ya que si recargas la página
          tendrás que empezar de nuevo, osea a ingresar las contraseñas no todo
          el juego jaja
        </li>
        <li>¡Divértite y ojala pierdas mi juego es muy bueno!</li>
      </ul>
    </>
  );
  const rule1 = (
    <>
      <h3>Reglas del nivel:</h3>
      <ul class="rules-list">
        <p>
          En la base sobre la que apoya la estatua de sanma un capo por cierto
          esta la respuesta osea la contraseña!
        </p>
        <li>
          Bueno de mas esta decir que guardes la contraseña no la voy a poner de
          nuevo si se pierde
        </li>
        <li>
          ¡Apenas escribas la contraseña y des en siguiente vas a pasar al
          segundo nviel!
        </li>
      </ul>
    </>
  );
  const rule2 = (
    <>
      <h3>Reglas del nivel:</h3>
      <ul class="rules-list">
        <p>
          Pedile a la secretaria que te de el libro los novios de Alessandro
          Manzzoni
        </p>
        <li>
          Anda al capitulo XXXIV ahi encontras la contraseña, si queres despues
          lo leemos juntos, ay lo que uno hace para ponerla che jssj
        </li>
        <li>
          ¡Ya que yo controlo esto aprovecho el espacio para decirte que sos muy
          hermosa boluda!
        </li>
      </ul>
    </>
  );
  const rule3 = (
    <>
      <h3>!El BOSS Final¡:</h3>
      <ul class="rules-list">
        <p>
          A la gente le aterra el final de las cosas pero yo se que donde algo
          termina es por que comienza otra cosa.
        </p>
        <li>
          Te podria escribir, te podria leer pero lo que yo quiero escoger algo
          para la ultima prueba.
        </li>
        <li>
          En la cafeteria vitrage te deje la ultima contraseña.. nadie piensa en
          ellas pero hoy dia nos dan el aceso a todo en nuestras vidas, por eso
          3 claves, llaves para que obtengas tu regalo...
        </li>
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
      text: '¡Te felcito sos valiente jsj! ingresaste al primer nivel la ubicacion es la plaza San Martin re obvio.. mira el titulo',
      rule: rule1,
      buttonText: 'Siguiente',
      password: 'preciosahermosa', // Contraseña para el segundo paso
    },
    {
      title: 'Segundo nivel... mi libro tu libro',
      text: '¡Genial! Encontraste la primer contraseña jaja no tenia esperanzas pero aca estas... bueno sigamos, ahora toca la biblioteca popular',
      rule: rule2,
      buttonText: 'Siguiente',
      password: 'unaflorunarosa', // Contraseña para el tercer paso
    },
    {
      title: 'El final de nuestro juego... o el principio?',
      text: '¡Felicidades! llegaste al final. Podes retirar el premio en... jaja eh! tranquila todavia falta este nivel.',
      rule: rule3,
      buttonText: 'Terminar',
      password: '', // Contraseña para el paso final
    },
  ];

  const nextStep = () => {
    if (password() === steps[currentStep()].password || currentStep() === 0) {
      if (currentStep() < steps.length - 1) {
        setCurrentStep(currentStep() + 1);
      } else {
        alert(
          '¡Has completado la búsqueda del tesoro! Pasa por tu premio, en la floreria deci que queres el pedido de Juan Ignacio Tiseira'
        );
        setCurrentStep(0); // Reiniciar el juego o hacer lo que prefieras aquí.
      }
      setPassword(''); // Resetear la contraseña
      setError(''); // Resetear el mensaje de error
    } else {
      setError('Contraseña incorrecta, inténtalo de nuevo. jaja escribi bien');
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
        <strong>Advertencia</strong> este juego fue diseñado exclusivamente para
        Yacira Schneider
      </p>
    </div>
  );
}

export default App;
