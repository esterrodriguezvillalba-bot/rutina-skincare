// ============================================================
// SkinOS — BASE DE DATOS CENTRAL
// Primera arquitectura del motor de decisión
// ============================================================

export type NivelEvidencia = "A" | "B" | "C" | "D";

export type TipoActivo =
  | "Retinoide"
  | "Despigmmentante"
  | "Antiinflamatorio"
  | "AHA"
  | "Antioxidante"
  | "Péptidos"
  | "Hidratación"
  | "Barrera"
  | "Protección solar";

export type ModoPanasonic =
  | "CLEAN"
  | "MOIST"
  | "RF×EMS LIFT"
  | "RF PUMP"
  | "EYE CARE";

export type Momento = "mañana" | "noche";

export interface Activo {
  id: string;
  nombre: string;
  tipo: TipoActivo;
  evidencia: NivelEvidencia;
  objetivos: string[];
  notas?: string;
}

export interface Producto {
  id: string;
  nombre: string;
  marca: string;
  categoria: string;
  activos: string[];
  momentos: Momento[];
  frecuencia?: string;
  objetivos: string[];
  compatiblePanasonic?: ModoPanasonic[];
  precauciones?: string[];
  notas?: string;
}

export interface ModoDispositivo {
  id: ModoPanasonic;
  nombre: string;
  tipo: "diario" | "especial";
  frecuenciaPreferente?: string;
  frecuenciaMaxima?: string;
  orden?: number;
  descripcion: string;
  objetivos: string[];
  productosAdecuados?: string[];
  productosEvitar?: string[];
  observaciones?: string[];
}

export interface ReglaSkinOS {
  id: string;
  prioridad: number;
  tipo:
    | "seguridad"
    | "compatibilidad"
    | "frecuencia"
    | "dispositivo"
    | "rutina"
    | "producto";
  regla: string;
  accion: string;
}

// ============================================================
// ACTIVOS
// ============================================================

export const activos: Activo[] = [
  {
    id: "retinal",
    nombre: "Retinal",
    tipo: "Retinoide",
    evidencia: "A",
    objetivos: [
      "Antiedad",
      "Arrugas",
      "Textura",
      "Pigmentación",
      "Estimulación de colágeno",
    ],
    notas:
      "Activo de alta prioridad para el tratamiento antiedad. La frecuencia debe adaptarse a tolerancia.",
  },

  {
    id: "azelaico",
    nombre: "Ácido azelaico",
    tipo: "Despigmmentante",
    evidencia: "A",
    objetivos: [
      "Pigmentación",
      "Inflamación",
      "Acné",
      "Uniformidad del tono",
    ],
  },

  {
    id: "glicolico",
    nombre: "Ácido glicólico",
    tipo: "AHA",
    evidencia: "A",
    objetivos: [
      "Textura",
      "Pigmentación",
      "Luminosidad",
      "Renovación celular",
    ],
  },

  {
    id: "vitamina-c",
    nombre: "Vitamina C",
    tipo: "Antioxidante",
    evidencia: "A",
    objetivos: [
      "Antioxidante",
      "Pigmentación",
      "Luminosidad",
      "Colágeno",
    ],
  },

  {
    id: "peptidos",
    nombre: "Péptidos",
    tipo: "Péptidos",
    evidencia: "B",
    objetivos: [
      "Reparación",
      "Antiedad",
      "Soporte de la barrera",
    ],
  },

  {
    id: "hidratacion",
    nombre: "Hidratación",
    tipo: "Hidratación",
    evidencia: "A",
    objetivos: [
      "Hidratación",
      "Confort",
      "Barrera cutánea",
    ],
  },
];

// ============================================================
// PRODUCTOS DE LA USUARIA
// ============================================================

export const productos: Producto[] = [
  {
    id: "gh-retinal-2000",
    nombre: "Retinal 2000",
    marca: "Gema Herrerías",
    categoria: "Retinoide",
    activos: ["retinal"],
    momentos: ["noche"],
    frecuencia: "2–3 noches por semana inicialmente; ajustar según tolerancia",
    objetivos: [
      "Antiedad",
      "Arrugas",
      "Textura",
      "Pigmentación",
    ],
    compatiblePanasonic: [
      "MOIST",
      "EYE CARE",
    ],
    precauciones: [
      "No acumular con otras noches de tratamiento irritante.",
      "Priorizar tolerancia cutánea.",
    ],
    notas:
      "Producto actualmente utilizado por la usuaria y con buena tolerancia.",
  },

  {
    id: "gh-azelaic-12",
    nombre: "Serum 12 Azelaic-N",
    marca: "Gema Herrerías",
    categoria: "Tratamiento",
    activos: ["azelaico"],
    momentos: ["mañana", "noche"],
    objetivos: [
      "Pigmentación",
      "Inflamación",
      "Uniformidad del tono",
    ],
    compatiblePanasonic: [
      "MOIST",
    ],
    precauciones: [
      "Valorar tolerancia cuando coincida con otros activos.",
    ],
  },

  {
    id: "cosrx-peptide-booster",
    nombre: "COSRX The 6 Peptide Booster",
    marca: "COSRX",
    categoria: "Péptidos",
    activos: ["peptidos"],
    momentos: ["noche"],
    frecuencia: "Según tolerancia",
    objetivos: [
      "Reparación",
      "Antiedad",
      "Soporte de la barrera",
    ],
    compatiblePanasonic: [
      "MOIST",
    ],
  },

  {
    id: "vitamina-c",
    nombre: "Vitamina C",
    marca: "Rutina actual",
    categoria: "Antioxidante",
    activos: ["vitamina-c"],
    momentos: ["mañana", "noche"],
    objetivos: [
      "Antioxidante",
      "Pigmentación",
      "Luminosidad",
    ],
    compatiblePanasonic: [
      "MOIST",
    ],
  },

  {
    id: "glicolico-isis",
    nombre: "Glicólico",
    marca: "Isispharma",
    categoria: "Exfoliante",
    activos: ["glicolico"],
    momentos: ["noche"],
    frecuencia: "1 noche por semana",
    objetivos: [
      "Textura",
      "Pigmentación",
      "Luminosidad",
    ],
    compatiblePanasonic: [
      "MOIST",
    ],
    precauciones: [
      "No combinar automáticamente con retinal.",
      "No sobrecargar la rutina con otros exfoliantes.",
    ],
  },
];

// ============================================================
// PANASONIC VITALIFT RF EX EH-SR86
// ============================================================

export const modosPanasonic: ModoDispositivo[] = [
  {
    id: "CLEAN",
    nombre: "CLEAN",
    tipo: "diario",
    frecuenciaPreferente: "Diario",
    frecuenciaMaxima: "1 vez al día",
    orden: 1,
    descripcion:
      "Modo de limpieza/preparación cutánea mediante ionización. Se utiliza como primer modo del dispositivo.",
    objetivos: [
      "Limpieza",
      "Preparación de la piel",
      "Ayudar a retirar residuos",
    ],
    observaciones: [
      "SkinOS lo considera parte de la rutina nocturna diaria.",
      "Debe realizarse antes de MOIST y de los tratamientos especiales.",
    ],
  },

  {
    id: "MOIST",
    nombre: "MOIST",
    tipo: "diario",
    frecuenciaPreferente: "Diario",
    frecuenciaMaxima: "1 vez al día",
    orden: 2,
    descripcion:
      "Modo destinado a favorecer la hidratación/penetración de productos compatibles.",
    objetivos: [
      "Hidratación",
      "Penetración cosmética",
      "Confort",
    ],
    observaciones: [
      "SkinOS lo considera parte de la rutina nocturna diaria.",
      "Debe adaptarse al producto utilizado.",
    ],
  },

  {
    id: "RF×EMS LIFT",
    nombre: "RF × EMS LIFT",
    tipo: "especial",
    frecuenciaPreferente: "2 veces por semana",
    frecuenciaMaxima: "3 sesiones semanales combinadas con RF PUMP",
    orden: 3,
    descripcion:
      "Modo combinado de radiofrecuencia y estimulación EMS orientado al cuidado reafirmante.",
    objetivos: [
      "Firmeza",
      "Reafirmación",
      "Contorno facial",
      "Antiedad",
    ],
    productosAdecuados: [
      "gh-retinal-2000",
      "gh-azelaic-12",
      "cosrx-peptide-booster",
    ],
    productosEvitar: [
      "glicolico-isis",
    ],
    observaciones: [
      "Priorizar productos que proporcionen buen deslizamiento.",
      "No utilizar sobre una rutina excesivamente irritante.",
      "La frecuencia debe respetar las indicaciones del fabricante.",
    ],
  },

  {
    id: "RF PUMP",
    nombre: "RF PUMP",
    tipo: "especial",
    frecuenciaPreferente: "1 vez por semana dentro de la rotación facial",
    frecuenciaMaxima: "3 sesiones semanales combinadas con RF×EMS LIFT",
    orden: 3,
    descripcion:
      "Modo de radiofrecuencia destinado al cuidado facial y reafirmante.",
    objetivos: [
      "Firmeza",
      "Antiedad",
      "Contorno facial",
    ],
    productosAdecuados: [
      "gh-azelaic-12",
      "cosrx-peptide-booster",
    ],
    productosEvitar: [
      "glicolico-isis",
    ],
    observaciones: [
      "Se alterna estratégicamente con RF×EMS LIFT.",
      "SkinOS evitará acumular innecesariamente tratamientos especiales.",
    ],
  },

  {
    id: "EYE CARE",
    nombre: "EYE CARE",
    tipo: "especial",
    frecuenciaPreferente: "3 veces por semana",
    frecuenciaMaxima: "3 veces por semana",
    orden: 4,
    descripcion:
      "Modo específico para el área ocular.",
    objetivos: [
      "Contorno ocular",
      "Aspecto de bolsas",
      "Firmeza",
      "Cuidado antiedad",
    ],
    observaciones: [
      "Puede programarse aunque ese día no exista otro tratamiento especial.",
      "SkinOS priorizará un producto específico de contorno compatible.",
      "No debe utilizarse automáticamente sobre productos irritantes.",
    ],
  },
];

// ============================================================
// REGLAS DEL MOTOR DE DECISIÓN
// ============================================================

export const reglasSkinOS: ReglaSkinOS[] = [
  {
    id: "seguridad-01",
    prioridad: 1,
    tipo: "seguridad",
    regla: "No combinar tratamientos potencialmente incompatibles.",
    accion:
      "Reducir activos y priorizar tolerancia cutánea.",
  },

  {
    id: "seguridad-02",
    prioridad: 2,
    tipo: "seguridad",
    regla: "No utilizar más activos de los necesarios.",
    accion:
      "Seleccionar el mínimo número de activos capaz de cubrir los objetivos.",
  },

  {
    id: "seguridad-03",
    prioridad: 3,
    tipo: "frecuencia",
    regla:
      "Respetar las frecuencias recomendadas por fabricante para el dispositivo.",
    accion:
      "Nunca superar la frecuencia programada del modo.",
  },

  {
    id: "panasonic-01",
    prioridad: 4,
    tipo: "dispositivo",
    regla: "CLEAN forma parte de la rutina nocturna diaria.",
    accion:
      "Programar CLEAN cada noche antes del resto de modos.",
  },

  {
    id: "panasonic-02",
    prioridad: 5,
    tipo: "dispositivo",
    regla: "MOIST forma parte de la rutina nocturna diaria.",
    accion:
      "Programar MOIST cada noche cuando exista un cosmético compatible.",
  },

  {
    id: "panasonic-03",
    prioridad: 6,
    tipo: "dispositivo",
    regla:
      "Cuando exista un modo especial, respetar el orden CLEAN → MOIST → especial.",
    accion:
      "No colocar el modo especial antes de CLEAN/MOIST.",
  },

  {
    id: "panasonic-04",
    prioridad: 7,
    tipo: "dispositivo",
    regla:
      "RF×EMS LIFT y RF PUMP forman conjuntamente el bloque de tres sesiones faciales especiales semanales.",
    accion:
      "Programar preferentemente 2 sesiones de RF×EMS LIFT y 1 sesión de RF PUMP, dejando al menos un día entre sesiones.",
  },

  {
    id: "panasonic-05",
    prioridad: 8,
    tipo: "dispositivo",
    regla:
      "EYE CARE debe aprovecharse hasta tres veces por semana cuando sea compatible.",
    accion:
      "Programarlo independientemente de que exista otro tratamiento especial.",
  },

  {
    id: "panasonic-06",
    prioridad: 9,
    tipo: "dispositivo",
    regla:
      "RF PUMP puede utilizarse como alternativa dentro de la rotación semanal.",
    accion:
      "No acumularlo con RF×EMS LIFT innecesariamente.",
  },

  {
    id: "producto-01",
    prioridad: 10,
    tipo: "producto",
    regla:
      "Los productos utilizados con RF/EMS deben proporcionar buen deslizamiento y contacto.",
    accion:
      "Excluir productos inadecuados para el deslizamiento.",
  },

  {
    id: "producto-02",
    prioridad: 11,
    tipo: "compatibilidad",
    regla:
      "Evitar utilizar ácidos exfoliantes como base de los modos RF/EMS.",
    accion:
      "Priorizar hidratantes, péptidos y productos bien tolerados.",
  },

  {
    id: "tratamiento-01",
    prioridad: 12,
    tipo: "rutina",
    regla:
      "El retinal no debe acumularse automáticamente con la noche de glicólico.",
    accion:
      "Separar ambas noches.",
  },

  {
    id: "tratamiento-02",
    prioridad: 13,
    tipo: "rutina",
    regla:
      "Los días posteriores a tratamientos irritantes deben permitir recuperación.",
    accion:
      "Priorizar péptidos e hidratación.",
  },

  {
    id: "rutina-01",
    prioridad: 14,
    tipo: "rutina",
    regla:
      "La rutina debe cubrir los objetivos del perfil utilizando el menor número necesario de productos.",
    accion:
      "Evitar rutinas excesivamente largas.",
  },

    {
    id: "rutina-02",
    prioridad: 15,
    tipo: "seguridad",
    regla:
      "Si existe conflicto entre tratamientos, productos o dispositivo, SkinOS priorizará seguridad y tolerancia.",
    accion:
      "Eliminar temporalmente el elemento conflictivo.",
  },

  {
    id: "panasonic-07",
    prioridad: 16,
    tipo: "frecuencia",
    regla:
      "RF×EMS LIFT y RF PUMP forman un único bloque de cuidado facial especial.",
    accion:
      "SkinOS debe programar como máximo 3 sesiones semanales entre ambos modos, separadas al menos por un día. La estrategia actual prioriza 2 sesiones RF×EMS LIFT y 1 sesión RF PUMP.",
  },

  {
    id: "panasonic-08",
    prioridad: 17,
    tipo: "frecuencia",
    regla:
      "EYE CARE puede utilizarse hasta 3 veces por semana, dejando al menos un día entre sesiones.",
    accion:
      "Programar EYE CARE tres días por semana cuando la tolerancia y los productos sean compatibles.",
  },

  {
    id: "panasonic-09",
    prioridad: 18,
    tipo: "dispositivo",
    regla:
      "CLEAN y MOIST son cuidado diario y pueden combinarse con un único modo especial.",
    accion:
      "Construir la secuencia nocturna como CLEAN → MOIST → especial cuando exista especial.",
  },
];

// ============================================================
// ROTACIÓN SEMANAL INICIAL
// ============================================================
//
// Esto es una PROPUESTA DE MOTOR, no una prescripción médica.
// Se podrá modificar posteriormente cuando completemos la
// biblioteca científica y las indicaciones exactas del fabricante.
//
export const rotacionesPanasonic = {
  semanaA: {
    nombre: "Semana A · Prioridad LIFT",
    resumen: "3 LIFT + 0 PUMP + 3 EYE CARE",

    lunes: {
      especial: "RF×EMS LIFT" as ModoPanasonic,
      eyeCare: false,
      tratamiento: "peptidos",
    },

    martes: {
      especial: null,
      eyeCare: true,
      tratamiento: "azelaico",
    },

    miercoles: {
      especial: "RF×EMS LIFT" as ModoPanasonic,
      eyeCare: false,
      tratamiento: "peptidos",
    },

    jueves: {
      especial: null,
      eyeCare: true,
      tratamiento: "retinal",
    },

    viernes: {
      especial: "RF×EMS LIFT" as ModoPanasonic,
      eyeCare: false,
      tratamiento: "peptidos",
    },

    sabado: {
      especial: null,
      eyeCare: true,
      tratamiento: "glicolico",
    },

    domingo: {
      especial: null,
      eyeCare: false,
      tratamiento: "recuperacion",
    },
  },

  semanaB: {
    nombre: "Semana B · Rotación RF PUMP",
    resumen: "2 LIFT + 1 PUMP + 3 EYE CARE",

    lunes: {
      especial: "RF×EMS LIFT" as ModoPanasonic,
      eyeCare: false,
      tratamiento: "peptidos",
    },

    martes: {
      especial: null,
      eyeCare: true,
      tratamiento: "azelaico",
    },

    miercoles: {
      especial: "RF PUMP" as ModoPanasonic,
      eyeCare: false,
      tratamiento: "peptidos",
    },

    jueves: {
      especial: null,
      eyeCare: true,
      tratamiento: "retinal",
    },

    viernes: {
      especial: "RF×EMS LIFT" as ModoPanasonic,
      eyeCare: false,
      tratamiento: "peptidos",
    },

    sabado: {
      especial: null,
      eyeCare: true,
      tratamiento: "glicolico",
    },

    domingo: {
      especial: null,
      eyeCare: false,
      tratamiento: "recuperacion",
    },
  },

  semanaC: {
    nombre: "Semana C · Prioridad LIFT",
    resumen: "3 LIFT + 0 PUMP + 3 EYE CARE",

    lunes: {
      especial: "RF×EMS LIFT" as ModoPanasonic,
      eyeCare: false,
      tratamiento: "peptidos",
    },

    martes: {
      especial: null,
      eyeCare: true,
      tratamiento: "azelaico",
    },

    miercoles: {
      especial: "RF×EMS LIFT" as ModoPanasonic,
      eyeCare: false,
      tratamiento: "peptidos",
    },

    jueves: {
      especial: null,
      eyeCare: true,
      tratamiento: "retinal",
    },

    viernes: {
      especial: "RF×EMS LIFT" as ModoPanasonic,
      eyeCare: false,
      tratamiento: "peptidos",
    },

    sabado: {
      especial: null,
      eyeCare: true,
      tratamiento: "glicolico",
    },

    domingo: {
      especial: null,
      eyeCare: false,
      tratamiento: "recuperacion",
    },
  },

  semanaD: {
    nombre: "Semana D · Rotación RF PUMP",
    resumen: "2 LIFT + 1 PUMP + 3 EYE CARE",

    lunes: {
      especial: "RF×EMS LIFT" as ModoPanasonic,
      eyeCare: false,
      tratamiento: "peptidos",
    },

    martes: {
      especial: null,
      eyeCare: true,
      tratamiento: "azelaico",
    },

    miercoles: {
      especial: "RF PUMP" as ModoPanasonic,
      eyeCare: false,
      tratamiento: "peptidos",
    },

    jueves: {
      especial: null,
      eyeCare: true,
      tratamiento: "retinal",
    },

    viernes: {
      especial: "RF×EMS LIFT" as ModoPanasonic,
      eyeCare: false,
      tratamiento: "peptidos",
    },

    sabado: {
      especial: null,
      eyeCare: true,
      tratamiento: "glicolico",
    },

    domingo: {
      especial: null,
      eyeCare: false,
      tratamiento: "recuperacion",
    },
  },
};

// ============================================================
// ROTACIÓN ACTIVA POR DEFECTO
// ============================================================

export const rutinaSemanal = rotacionesPanasonic.semanaB;
// ============================================================
// CONFIGURACIÓN DEL MOTOR
// ============================================================

export const configuracionSkinOS = {
  dispositivoPrincipal: "Panasonic VITALIFT RF EX EH-SR86",

  rutinaNocturnaBase: [
    "CLEAN",
    "MOIST",
  ] as ModoPanasonic[],

  modosEspeciales: [
    "RF×EMS LIFT",
    "RF PUMP",
    "EYE CARE",
  ] as ModoPanasonic[],

  objetivoOptimizacion:
    "Maximizar los beneficios del dispositivo sin superar frecuencias ni comprometer tolerancia cutánea.",

  prioridadDecision: [
    "Seguridad",
    "Compatibilidad",
    "Frecuencia del fabricante",
    "Objetivos del usuario",
    "Evidencia científica",
    "Optimización del dispositivo",
    "Simplicidad de rutina",
  ],
};

// ============================================================
// ALIAS DE COMPATIBILIDAD
// ============================================================
//
// Dejamos estos nombres disponibles para que las distintas
// páginas de SkinOS puedan importar los datos sin depender de
// una única nomenclatura.
//

export const bibliotecaActivos = activos;
export const bibliotecaProductos = productos;
export const dispositivos = modosPanasonic;
export const modosDispositivo = modosPanasonic;
export const configuracionDispositivo = configuracionSkinOS;

// ============================================================
// EXPORTACIÓN POR DEFECTO
// ============================================================

export default {
  activos,
  productos,
  modosPanasonic,
  reglasSkinOS,
  rutinaSemanal,
  configuracionSkinOS,
};