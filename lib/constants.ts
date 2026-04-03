// ============================================================
// 교육청 학생맞춤통합회의 — 단일 진실 공급원 (상수 / 데이터)
// ============================================================
import type { DialogueLine, MeetingStep, RiskLevels, VoiceName, SpeakerRole } from '@/types/meeting';

// Gemini TTS 모델 (변경 시 여기서만 수정)
export const TTS_MODEL = 'gemini-2.5-flash-preview-tts';

// 발화자 → Gemini 보이스 매핑
export const VOICE_MAP: Record<SpeakerRole, VoiceName> = {
  '장학사':    'Charon',       // 남성 저음 — 중후/신뢰
  'Wee센터':   'Leda',         // 여성 고음 — 따뜻/섬세
  '교육복지사': 'Autonoe',     // 여성 중고음 — 지적/활발
  '아보전':    'Rasalgethi',   // 남성 중저음 — 강직/단호
  '지자체':    'Enceladus',    // 남성 고음 — 명확/경쾌
};

// 화면 표시용 보이스 프로필 라벨
export const VOICE_PROFILE_LABELS: Record<SpeakerRole, { desc: string; color: string; bg: string }> = {
  '장학사':    { desc: '남성 저음 (Charon)',       color: 'text-blue-700',    bg: 'bg-blue-50'    },
  'Wee센터':   { desc: '여성 고음 (Leda)',          color: 'text-rose-600',    bg: 'bg-rose-50'    },
  '교육복지사': { desc: '여성 중고음 (Autonoe)',    color: 'text-emerald-600', bg: 'bg-emerald-50' },
  '아보전':    { desc: '남성 중저음 (Rasalgethi)', color: 'text-slate-700',   bg: 'bg-slate-100'  },
  '지자체':    { desc: '남성 고음 (Enceladus)',    color: 'text-amber-600',   bg: 'bg-amber-50'   },
};

// 발화자 아바타 색상 (DialogueMessage 컴포넌트에서 사용)
export const ROLE_COLORS: Record<SpeakerRole, string> = {
  '장학사':    'bg-blue-700 text-white border-blue-950 shadow-blue-900/30',
  'Wee센터':   'bg-rose-500 text-white border-rose-900 shadow-rose-900/30',
  '교육복지사': 'bg-emerald-500 text-white border-emerald-900 shadow-emerald-900/30',
  '아보전':    'bg-slate-700 text-white border-slate-950 shadow-slate-900/30',
  '지자체':    'bg-amber-500 text-white border-amber-900 shadow-amber-900/30',
};

// 6단계 회의 진행 정보
export const STEPS: MeetingStep[] = [
  { title: '1. 개회 및 수준 설정', duration: '10분', goal: '개입 수준 결정'       },
  { title: '2. 사례 재구성',       duration: '10분', goal: '교육청 관점 재해석'   },
  { title: '3. 위험도 판단',       duration: '20분', goal: '적극 개입 단계 확정'  },
  { title: '4. 개입 전략 설계',    duration: '30분', goal: '분야별 직접 지원 계획'},
  { title: '5. 역할 분담',         duration: '15분', goal: '기관별 책임 명시'     },
  { title: '6. 모니터링 계획',     duration: '5분',  goal: '지속 관리 로드맵'     },
];

// 초기 위기 수치
export const INITIAL_RISK_LEVELS: RiskLevels = {
  safety: 70,
  development: 85,
  social: 60,
};

// 단계별 위기 수치 업데이트 맵 (없으면 변경 없음)
export const RISK_UPDATES: Record<number, Partial<RiskLevels>> = {
  1: { safety: 85, development: 90, social: 75 },
  3: { safety: 95, development: 98, social: 85 },
};

// 단계별 대화 데이터 (index = step index)
export const DIALOGUE_DATA: DialogueLine[][] = [
  // 1단계: 개회 및 수준 설정
  [
    { role: '장학사',    text: '본 사례는 학교 내 지원만으로는 한계가 있는 복합위기 사례로 판단되어 상정되었습니다. 오늘 목표는 단순 지원이 아닌 공식적 개입 수준을 결정하는 것입니다.' },
    { role: 'Wee센터',   text: '저희 센터에서도 해당 아동을 세 차례 면담했는데, 심리적 위축이 상당합니다. 학교 차원을 넘는 전문 개입이 필요하다는 데 동의합니다.' },
    { role: '교육복지사', text: '가정 방문 결과 보호자가 장기간 부재 상태였고, 아동이 혼자 식사를 해결하지 못하는 날이 잦았습니다. 즉각적인 안전 확인이 우선입니다.' },
  ],
  // 2단계: 사례 재구성
  [
    { role: '아보전',    text: '신체적 방임 지표가 복수 확인되었습니다. 영양 결핍과 위생 문제가 동시에 나타나고 있어 단순 빈곤이 아닌 보호 의무 위반 가능성이 있습니다.' },
    { role: '장학사',    text: '교육청 관점에서 재해석하겠습니다. 이 사례는 단순 결식 문제가 아니라 생존 기반 자체가 흔들리는 상태입니다. 발달 전반에 걸친 위기로 봐야 합니다.' },
    { role: '지자체',    text: '저희 복지과에서도 이 가정을 인지하고 있었으나 보호자 연락이 두절된 상황입니다. 직권 조사 권한을 활용할 준비가 되어 있습니다.' },
  ],
  // 3단계: 위험도 판단
  [
    { role: '교육복지사', text: '학교 내 관찰 기록을 보면 최근 2주간 결석 4일, 급식 미신청 3회가 확인됩니다. 아동 스스로 도움 요청을 하지 못하고 있습니다.' },
    { role: 'Wee센터',   text: '심리 평가상 우울 지수가 또래 평균의 두 배 이상입니다. 트라우마 반응도 관찰되고 있어 즉각적 심리 지원 없이는 악화될 우려가 큽니다.' },
    { role: '아보전',    text: '종합하면 고위험군 판정이 타당합니다. 현 시점에서 적극 개입 단계로 격상하지 않으면 아동 안전을 보장할 수 없습니다.' },
    { role: '장학사',    text: "지금 이 자리에서 이 사례를 '적극 개입 단계'로 공식 확정합니다. 단순 관찰 대상이 아님을 모든 기관이 인지해 주시기 바랍니다." },
  ],
  // 4단계: 개입 전략 설계
  [
    { role: '장학사',    text: '교육청이 직접 컨트롤타워를 맡겠습니다. 각 기관의 개입이 중복되거나 누락되지 않도록 조정하겠습니다.' },
    { role: 'Wee센터',   text: '저희는 주 2회 개인 심리상담을 시작하겠습니다. 트라우마 중심 치료 접근으로 진행하며, 매회 종료 후 장학사님께 간략 보고드리겠습니다.' },
    { role: '지자체',    text: '긴급 식사 지원과 의료비 바우처를 이번 주 내로 연결하겠습니다. 보호자 직권 면담도 병행해서 가정 환경 안정화를 추진하겠습니다.' },
    { role: '아보전',    text: '가정 내 안전 실태 심층 조사에 들어가겠습니다. 필요시 아동보호전문기관 공식 조사로 전환할 수 있도록 사전 준비를 마치겠습니다.' },
  ],
  // 5단계: 역할 분담
  [
    { role: '교육복지사', text: '학교 측은 매일 등교 여부와 급식 참여를 확인하고, 이상 징후 발견 시 즉시 저에게 연락 주시는 것으로 하겠습니다.' },
    { role: 'Wee센터',   text: '심리 지원은 저희가 전담합니다. 아동이 거부감 없이 참여할 수 있도록 학교 상담실에서 진행하는 방식으로 하겠습니다.' },
    { role: '지자체',    text: '복지 서비스 연계는 저희가 책임지겠습니다. 긴급복지 지원법 적용 여부도 이번 주 중으로 검토해 드리겠습니다.' },
    { role: '장학사',    text: '각 기관 역할이 명확히 분담되었습니다. 2주 후 중간 점검 회의를 통해 진행 상황을 공유하겠습니다.' },
  ],
  // 6단계: 모니터링 계획
  [
    { role: '아보전',    text: '2주 후 점검까지 이상 상황 발생 시 즉시 긴급 소집할 수 있도록 오늘 참여 기관 단체 채팅방을 개설하겠습니다.' },
    { role: 'Wee센터',   text: '상담 진행 상황은 2주 단위로 요약 보고서를 공유드리겠습니다. 아동의 변화 징후를 함께 모니터링해 주시면 감사하겠습니다.' },
    { role: '교육복지사', text: '학교에서도 담임 교사와 협력하여 일일 관찰 일지를 작성하겠습니다. 작은 변화도 놓치지 않겠습니다.' },
    { role: '장학사',    text: '각 기관은 오늘 확정된 개입 전략을 즉각 실행에 옮겨주시기 바랍니다. 이 아이를 지키는 것이 우리 모두의 책임입니다. 이상으로 회의를 마칩니다.' },
  ],
];

// 최종 의사결정 요약 (step 4 이상에서 표시)
export const DECISION_SUMMARY = [
  { tag: '심리', text: '트라우마 집중 케어 (주 2회 상담)' },
  { tag: '안전', text: '아보전 연계 가정 환경 심층 조사' },
  { tag: '복지', text: '지자체 식사 지원 및 의료비 바우처' },
];

// 전체 발언을 단계 정보와 함께 평탄화한 배열 (22개)
export const ALL_LINES: (DialogueLine & { step: number })[] = DIALOGUE_DATA.flatMap(
  (lines, stepIdx) => lines.map(line => ({ ...line, step: stepIdx }))
);

// 캐시 버전 — 대사 변경 시 올릴 것
export const AUDIO_CACHE_VERSION = 'v1';
