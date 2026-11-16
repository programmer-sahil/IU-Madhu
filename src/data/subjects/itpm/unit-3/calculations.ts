// Calculation helpers and practice scenarios for Unit 3
export interface EvmCalculationScenario {
  pv: number;
  ev: number;
  ac: number;
  sv: number;
  cv: number;
  cpi: number;
  spi: number;
  scheduleStatus: 'Ahead of Schedule' | 'On Schedule' | 'Behind Schedule';
  costStatus: 'Under Budget' | 'On Budget' | 'Over Budget';
}

export function calculateEvm(pv: number, ev: number, ac: number): EvmCalculationScenario {
  const sv = ev - pv;
  const cv = ev - ac;
  const cpi = ac > 0 ? Number((ev / ac).toFixed(2)) : 1.0;
  const spi = pv > 0 ? Number((ev / pv).toFixed(2)) : 1.0;

  const scheduleStatus = sv > 0 ? 'Ahead of Schedule' : sv < 0 ? 'Behind Schedule' : 'On Schedule';
  const costStatus = cv > 0 ? 'Under Budget' : cv < 0 ? 'Over Budget' : 'On Budget';

  return { pv, ev, ac, sv, cv, cpi, spi, scheduleStatus, costStatus };
}

export function calculateFpa(
  inputs: { count: number; weight: number },
  outputs: { count: number; weight: number },
  inquiries: { count: number; weight: number },
  interfaces: { count: number; weight: number },
  files: { count: number; weight: number },
  tdi: number
) {
  const ufp = (inputs.count * inputs.weight) +
              (outputs.count * outputs.weight) +
              (inquiries.count * inquiries.weight) +
              (interfaces.count * interfaces.weight) +
              (files.count * files.weight);
  const caf = Number((0.01 * tdi + 0.65).toFixed(4));
  const fp = Number((ufp * caf).toFixed(2));
  return { ufp, tdi, caf, fp };
}

export function calculateRoi(netGain: number, projectCost: number) {
  if (projectCost <= 0) return 0;
  return Number((netGain / projectCost).toFixed(4));
}

export function calculateNpv(futureValue: number, interestRate: number, periods: number) {
  if (periods < 0) return futureValue;
  const factor = Math.pow(1 + interestRate, periods);
  return Number((futureValue / factor).toFixed(2));
}

export function calculateProfitabilityIndex(npv: number, projectCost: number) {
  if (projectCost <= 0) return 0;
  return Number((npv / projectCost).toFixed(2));
}
