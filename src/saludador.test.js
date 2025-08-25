import saludar from './saludador.js';

describe('saludar', () => {
  let originalDate;

  beforeAll(() => {
    originalDate = Date;
  });

  afterEach(() => {
    global.Date = originalDate;
  });

  const mockHour = (hour) => {
    global.Date = class extends Date {
      constructor() {
        super();
        return new originalDate('2025-08-25T' + String(hour).padStart(2, '0') + ':00:00');
      }
    };
  };

  test('saludo en español por la mañana a señorita', () => {
    mockHour(8);
    expect(saludar('Vanessa', 'Femenino', 25, 's')).toBe('Buenos días señorita Vanessa');
  });

  test('saludo en español por la tarde a señora', () => {
    mockHour(15);
    expect(saludar('Celeste', 'Femenino', 35, 's')).toBe('Buenas tardes señora Celeste');
  });

  test('saludo en inglés por la noche a mister', () => {
    mockHour(20);
    expect(saludar('Alvaro', 'Masculino', 40, 'e')).toBe('Good evening mister Alvaro');
  });

  test('saludo en portugués por la mañana a senhorita', () => {
    mockHour(9);
    expect(saludar('Daniela', 'Femenino', 22, 'p')).toBe('Bom dia senhorita Daniela');
  });

  test('saludo en francés por la tarde a madame', () => {
    mockHour(16);
    expect(saludar('Valery', 'Femenino', 45, 'f')).toBe('Bon après-midi madame Valery');
  });

  test('saludo en español por la noche a joven masculino menor de 30', () => {
    mockHour(21);
    expect(saludar('Carlos', 'Masculino', 25, 's')).toBe('Buenas noches joven Carlos');
  });

  test('saludo en inglés por la mañana a género desconocido', () => {
    mockHour(10);
    expect(saludar('Alex', 'Otro', 20, 'e')).toBe('Good morning young one Alex');
  });
});